import {
    type ConflictResponse,
    type EntryPosition,
    MAX_ENTRIES_PER_PROJECT,
    MAX_FILE_BYTES,
    MAX_IMPORT_BYTES_PER_REQUEST,
    MAX_PROJECTS_PER_USER,
    type PositionsResponse,
    type ProjectEntry,
    type ProjectFilesResponse,
    type ProjectSummary,
    validateEntryPath,
    validateProjectName,
    type WriteResponse,
} from "../shared/api";
import { knownProjectSettings, type ProjectSettings, validateProjectSettings } from "../shared/projectSettings";
import type { Session } from "./auth";
import { type Env, getOptionalBoolean, getOptionalNumber, getString, HttpError, json, randomHex, readJsonObject } from "./http";

interface ProjectRow {
    id: string;
    name: string;
    created_at: number;
    updated_at: number;
    file_count: number;
}

interface EntryRow {
    path: string;
    type: "file" | "dir";
    content: string | null;
    mtime: number;
    position: number;
    disabled: 0 | 1;
}

/** An entry to insert, with its position computed beforehand. */
interface NewRow {
    path: string;
    type: "file" | "dir";
    content: string | null;
    position: number;
    disabled: 0 | 1;
}

const PROJECT_COLUMNS =
    "id, name, created_at, updated_at, (SELECT COUNT(*) FROM entries WHERE entries.project_id = projects.id AND entries.type = 'file') AS file_count";

/** SQL condition matching `path` itself and everything below it (bind the path twice). */
const SUBTREE_CONDITION = "(path = ? OR substr(path, 1, length(?) + 1) = ? || '/')";

/** Position after every entry of the project (bind the project id), so that a new entry goes at the end of its folder. */
const NEXT_POSITION = "(SELECT COALESCE(MAX(position), 0) + 1 FROM entries WHERE project_id = ?)";

function toSummary(row: ProjectRow): ProjectSummary {
    return { id: row.id, name: row.name, createdAt: row.created_at, updatedAt: row.updated_at, fileCount: row.file_count };
}

function checkProjectName(name: string): void {
    const error = validateProjectName(name);
    if (error) {
        throw new HttpError(400, error);
    }
}

function checkPath(path: string): void {
    const error = validateEntryPath(path);
    if (error) {
        throw new HttpError(400, error);
    }
}

function checkFileSize(path: string, content: string): number {
    const size = new TextEncoder().encode(content).length;
    if (size > MAX_FILE_BYTES) {
        throw new HttpError(413, `Files cannot be larger than ${MAX_FILE_BYTES / 1_000_000} MB ('${path}' is ${(size / 1_000_000).toFixed(2)} MB).`);
    }
    return size;
}

function parentOf(path: string): string {
    const index = path.lastIndexOf("/");
    return index < 0 ? "" : path.substring(0, index);
}

function isSameOrChild(path: string, ancestor: string): boolean {
    return path === ancestor || path.startsWith(ancestor + "/");
}

function ancestorsOf(path: string): string[] {
    const segments = path.split("/");
    return segments.slice(0, -1).map((_, index) => segments.slice(0, index + 1).join("/"));
}

async function getProject(env: Env, session: Session, projectId: string): Promise<ProjectRow> {
    const row = await env.DB.prepare(`SELECT ${PROJECT_COLUMNS} FROM projects WHERE id = ? AND user_id = ?`).bind(projectId, session.user.id).first<ProjectRow>();
    if (!row) {
        throw new HttpError(404, "Project not found.");
    }
    return row;
}

async function getEntry(env: Env, projectId: string, path: string): Promise<EntryRow | null> {
    return env.DB.prepare("SELECT path, type, content, mtime, position, disabled FROM entries WHERE project_id = ? AND path = ?").bind(projectId, path).first<EntryRow>();
}

/** Paths, types and positions of all the entries of a project (without the content). */
async function getEntryPositions(env: Env, projectId: string): Promise<{ path: string; type: "file" | "dir"; position: number }[]> {
    const rows = await env.DB.prepare("SELECT path, type, position FROM entries WHERE project_id = ?").bind(projectId).all<{ path: string; type: "file" | "dir"; position: number }>();
    return rows.results;
}

async function countEntries(env: Env, projectId: string): Promise<number> {
    const row = await env.DB.prepare("SELECT COUNT(*) AS count FROM entries WHERE project_id = ?").bind(projectId).first<{ count: number }>();
    return row?.count ?? 0;
}

/** The positions returned by the statements of a batch that end with `RETURNING path, position`. */
function returnedPositions(results: D1Result[]): EntryPosition[] {
    return results.flatMap((result) => result.results as EntryPosition[]);
}

/** Checks that no ancestor of `path` is a file, and returns the statements creating the missing ancestor directories. */
async function prepareAncestors(env: Env, projectId: string, path: string, mtime: number): Promise<D1PreparedStatement[]> {
    const ancestors = ancestorsOf(path);
    if (ancestors.length === 0) {
        return [];
    }
    const placeholders = ancestors.map(() => "?").join(", ");
    const existing = await env.DB.prepare(`SELECT path, type FROM entries WHERE project_id = ? AND path IN (${placeholders})`)
        .bind(projectId, ...ancestors)
        .all<{ path: string; type: string }>();
    const existingPaths = new Set<string>();
    for (const row of existing.results) {
        if (row.type === "file") {
            throw new HttpError(409, `'${row.path}' is a file, not a directory.`);
        }
        existingPaths.add(row.path);
    }
    return ancestors
        .filter((ancestor) => !existingPaths.has(ancestor))
        .map((ancestor) =>
            env.DB.prepare(`INSERT INTO entries (project_id, path, type, content, mtime, position) VALUES (?, ?, 'dir', NULL, ?, ${NEXT_POSITION}) RETURNING path, position`).bind(
                projectId,
                ancestor,
                mtime,
                projectId,
            ),
        );
}

/**
 * Statements inserting many entries. Each statement takes the rows as a JSON parameter: a Worker can only make a few
 * queries per request, and a query only has 100 parameters. D1 limits a parameter to 2 MB, hence several statements.
 */
function insertRowsStatements(env: Env, projectId: string, mtime: number, rows: NewRow[]): D1PreparedStatement[] {
    const MAX_JSON_BYTES = 900_000;
    const encoder = new TextEncoder();
    const statements: D1PreparedStatement[] = [];
    let chunk: string[] = [];
    let chunkBytes = 0;
    const flush = () => {
        statements.push(
            env.DB.prepare(
                "INSERT INTO entries (project_id, path, type, content, mtime, position, disabled) SELECT ?1, json_extract(value, '$.path'), json_extract(value, '$.type'), json_extract(value, '$.content'), ?2, json_extract(value, '$.position'), json_extract(value, '$.disabled') FROM json_each(?3)",
            ).bind(projectId, mtime, `[${chunk.join(",")}]`),
        );
        chunk = [];
        chunkBytes = 0;
    };
    for (const row of rows) {
        const rowJson = JSON.stringify(row);
        const bytes = encoder.encode(rowJson).length;
        if (chunk.length > 0 && chunkBytes + bytes > MAX_JSON_BYTES) {
            flush();
        }
        chunk.push(rowJson);
        chunkBytes += bytes + 1;
    }
    if (chunk.length > 0) {
        flush();
    }
    return statements;
}

/** Statement setting the position of many entries. */
function setPositionsStatement(env: Env, projectId: string, positions: EntryPosition[]): D1PreparedStatement {
    return env.DB.prepare(
        "UPDATE entries SET position = (SELECT json_extract(value, '$.position') FROM json_each(?2) WHERE json_extract(value, '$.path') = entries.path) WHERE project_id = ?1 AND path IN (SELECT json_extract(value, '$.path') FROM json_each(?2))",
    ).bind(projectId, JSON.stringify(positions));
}

/**
 * New positions for the entries of a folder, given in their new order: they take the positions that the folder's
 * entries already have, in ascending order (or new ones, after every entry of the project, if some are equal).
 */
function reorderedPositions(entries: { path: string; position: number }[], maxPosition: number): EntryPosition[] {
    const sorted = entries.map((entry) => entry.position).sort((a, b) => a - b);
    const distinct = sorted.every((position, index) => index === 0 || position !== sorted[index - 1]);
    return entries.map((entry, index) => ({ path: entry.path, position: distinct ? sorted[index] : maxPosition + 1 + index }));
}

function touchProject(env: Env, projectId: string, now: number): D1PreparedStatement {
    return env.DB.prepare("UPDATE projects SET updated_at = ? WHERE id = ?").bind(now, projectId);
}

function checkEntryLimit(currentCount: number, added: number): void {
    if (currentCount + added > MAX_ENTRIES_PER_PROJECT) {
        throw new HttpError(403, `Projects cannot have more than ${MAX_ENTRIES_PER_PROJECT} files and folders.`);
    }
}

export async function handleListProjects(env: Env, session: Session): Promise<Response> {
    const rows = await env.DB.prepare(`SELECT ${PROJECT_COLUMNS} FROM projects WHERE user_id = ? ORDER BY updated_at DESC`).bind(session.user.id).all<ProjectRow>();
    return json({ projects: rows.results.map(toSummary) });
}

export async function handleCreateProject(request: Request, env: Env, session: Session): Promise<Response> {
    const body = await readJsonObject(request);
    const name = getString(body, "name");
    checkProjectName(name);

    const count = await env.DB.prepare("SELECT COUNT(*) AS count FROM projects WHERE user_id = ?").bind(session.user.id).first<{ count: number }>();
    if ((count?.count ?? 0) >= MAX_PROJECTS_PER_USER) {
        throw new HttpError(403, `You cannot have more than ${MAX_PROJECTS_PER_USER} projects.`);
    }
    const existing = await env.DB.prepare("SELECT id FROM projects WHERE user_id = ? AND name = ?").bind(session.user.id, name).first();
    if (existing) {
        throw new HttpError(409, `A project named '${name}' already exists.`);
    }
    const now = Date.now();
    const id = randomHex(8);
    await env.DB.prepare("INSERT INTO projects (id, user_id, name, created_at, updated_at) VALUES (?, ?, ?, ?, ?)").bind(id, session.user.id, name, now, now).run();
    return json({ project: { id, name, createdAt: now, updatedAt: now, fileCount: 0 } satisfies ProjectSummary }, 201);
}

export async function handleRenameProject(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    const project = await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const name = getString(body, "name");
    checkProjectName(name);
    const existing = await env.DB.prepare("SELECT id FROM projects WHERE user_id = ? AND name = ? AND id != ?").bind(session.user.id, name, projectId).first();
    if (existing) {
        throw new HttpError(409, `A project named '${name}' already exists.`);
    }
    const now = Date.now();
    await env.DB.prepare("UPDATE projects SET name = ?, updated_at = ? WHERE id = ?").bind(name, now, projectId).run();
    return json({ project: toSummary({ ...project, name, updated_at: now }) });
}

export async function handleDeleteProject(env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    await env.DB.batch([env.DB.prepare("DELETE FROM entries WHERE project_id = ?").bind(projectId), env.DB.prepare("DELETE FROM projects WHERE id = ?").bind(projectId)]);
    return json({ ok: true });
}

/** Also for public projects of other users, and without session (read only). */
export async function handleGetFiles(env: Env, session: Session | null, projectId: string): Promise<Response> {
    const project = await env.DB.prepare(`SELECT ${PROJECT_COLUMNS}, user_id, settings, public FROM projects WHERE id = ?`)
        .bind(projectId)
        .first<ProjectRow & { user_id: number; settings: string; public: 0 | 1 }>();
    const isOwner = project !== null && project.user_id === session?.user.id;
    // Private projects of other users are reported as missing, like those that do not exist.
    if (!project || (!isOwner && project.public !== 1)) {
        throw new HttpError(404, "Project not found.");
    }
    const rows = await env.DB.prepare("SELECT path, type, content, mtime, position, disabled FROM entries WHERE project_id = ? ORDER BY position").bind(projectId).all<EntryRow>();
    const entries: ProjectEntry[] = rows.results.map((row) => ({
        path: row.path,
        type: row.type,
        ...(row.type === "file" ? { content: row.content ?? "" } : {}),
        mtime: row.mtime,
        position: row.position,
        disabled: row.disabled === 1,
    }));
    return json({
        project: toSummary(project),
        entries,
        settings: knownProjectSettings(JSON.parse(project.settings) as ProjectSettings),
        public: project.public === 1,
        readOnly: !isOwner,
    } satisfies ProjectFilesResponse);
}

export async function handleSetProjectPublic(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    if (typeof body.public !== "boolean") {
        throw new HttpError(400, "Field 'public' must be a boolean.");
    }
    await env.DB.prepare("UPDATE projects SET public = ? WHERE id = ?").bind(body.public ? 1 : 0, projectId).run();
    return json({ ok: true });
}

export async function handleSaveProjectSettings(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const error = validateProjectSettings(body.settings);
    if (error) {
        throw new HttpError(400, error);
    }
    await env.DB.prepare("UPDATE projects SET settings = ?, updated_at = ? WHERE id = ?").bind(JSON.stringify(body.settings), Date.now(), projectId).run();
    return json({ ok: true });
}

export async function handleWriteFile(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const path = getString(body, "path");
    const content = getString(body, "content");
    const expectedMtime = getOptionalNumber(body, "expectedMtime");
    const create = getOptionalBoolean(body, "create");
    checkPath(path);
    checkFileSize(path, content);

    const existing = await getEntry(env, projectId, path);
    if (existing?.type === "dir") {
        throw new HttpError(409, `'${path}' is a directory.`);
    }
    if (existing && create) {
        throw new HttpError(409, `'${path}' already exists.`, { currentMtime: existing.mtime } satisfies Omit<ConflictResponse, "error">);
    }
    if (expectedMtime !== undefined && existing?.mtime !== expectedMtime) {
        throw new HttpError(409, `'${path}' was modified elsewhere.`, { currentMtime: existing?.mtime ?? null } satisfies Omit<ConflictResponse, "error">);
    }

    const now = Date.now();
    const mtime = existing ? Math.max(now, existing.mtime + 1) : now;
    const ancestorStatements = await prepareAncestors(env, projectId, path, now);
    if (!existing) {
        checkEntryLimit(await countEntries(env, projectId), ancestorStatements.length + 1);
    }
    const results = await env.DB.batch([
        ...ancestorStatements,
        env.DB.prepare(
            `INSERT INTO entries (project_id, path, type, content, mtime, position) VALUES (?, ?, 'file', ?, ?, ${NEXT_POSITION}) ON CONFLICT (project_id, path) DO UPDATE SET content = excluded.content, mtime = excluded.mtime RETURNING path, position`,
        ).bind(projectId, path, content, mtime, projectId),
        touchProject(env, projectId, now),
    ]);
    return json({ mtime, positions: returnedPositions(results) } satisfies WriteResponse);
}

export async function handleCreateDirectory(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const path = getString(body, "path");
    checkPath(path);

    if (await getEntry(env, projectId, path)) {
        throw new HttpError(409, `'${path}' already exists.`);
    }
    const now = Date.now();
    const ancestorStatements = await prepareAncestors(env, projectId, path, now);
    checkEntryLimit(await countEntries(env, projectId), ancestorStatements.length + 1);
    const results = await env.DB.batch([
        ...ancestorStatements,
        env.DB.prepare(`INSERT INTO entries (project_id, path, type, content, mtime, position) VALUES (?, ?, 'dir', NULL, ?, ${NEXT_POSITION}) RETURNING path, position`).bind(
            projectId,
            path,
            now,
            projectId,
        ),
        touchProject(env, projectId, now),
    ]);
    return json({ mtime: now, positions: returnedPositions(results) } satisfies WriteResponse);
}

export async function handleImportEntries(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const rawEntries = body.entries;
    if (!Array.isArray(rawEntries) || rawEntries.length === 0) {
        throw new HttpError(400, "Field 'entries' must be a non-empty list.");
    }
    if (rawEntries.length > MAX_ENTRIES_PER_PROJECT) {
        throw new HttpError(403, `Projects cannot have more than ${MAX_ENTRIES_PER_PROJECT} files and folders.`);
    }

    let totalBytes = 0;
    const entries = new Map<string, Omit<NewRow, "position">>();
    for (const raw of rawEntries as unknown[]) {
        if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
            throw new HttpError(400, "Each entry must be an object.");
        }
        const entry = raw as Record<string, unknown>;
        const path = getString(entry, "path");
        checkPath(path);
        if (entries.has(path)) {
            throw new HttpError(400, `'${path}' is imported twice.`);
        }
        const disabled = getOptionalBoolean(entry, "disabled") ? 1 : 0;
        if (entry.type === "dir") {
            if (entry.content !== undefined) {
                throw new HttpError(400, `The folder '${path}' cannot have content.`);
            }
            entries.set(path, { path, type: "dir", content: null, disabled });
        } else if (entry.type === "file") {
            const content = getString(entry, "content");
            totalBytes += checkFileSize(path, content);
            entries.set(path, { path, type: "file", content, disabled });
        } else {
            throw new HttpError(400, `The type of '${path}' must be 'file' or 'dir'.`);
        }
    }
    // A single file may exceed the limit of a request (but not the file size limit).
    if (entries.size > 1 && totalBytes > MAX_IMPORT_BYTES_PER_REQUEST) {
        throw new HttpError(413, `Cannot import more than ${MAX_IMPORT_BYTES_PER_REQUEST / 1000} KB per request.`);
    }

    const existing = await getEntryPositions(env, projectId);
    const existingTypes = new Map(existing.map((row) => [row.path, row.type]));
    const missingAncestors = new Set<string>();
    for (const path of entries.keys()) {
        if (existingTypes.has(path)) {
            throw new HttpError(409, `'${path}' already exists.`);
        }
        for (const ancestor of ancestorsOf(path)) {
            const type = existingTypes.get(ancestor) ?? entries.get(ancestor)?.type;
            if (type === "file") {
                throw new HttpError(409, `'${ancestor}' is a file, not a directory.`);
            }
            if (type === undefined) {
                missingAncestors.add(ancestor);
            }
        }
    }
    const maxPosition = Math.max(0, ...existing.map((row) => row.position));
    const rows: NewRow[] = [...[...missingAncestors].map((path) => ({ path, type: "dir" as const, content: null, disabled: 0 as const })), ...entries.values()].map(
        (row, index) => ({ ...row, position: maxPosition + 1 + index }),
    );
    checkEntryLimit(existing.length, rows.length);

    const now = Date.now();
    await env.DB.batch([...insertRowsStatements(env, projectId, now, rows), touchProject(env, projectId, now)]);
    return json({ mtime: now, positions: rows.map(({ path, position }) => ({ path, position })) } satisfies WriteResponse);
}

export async function handleCopyEntry(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const from = getString(body, "from");
    const to = getString(body, "to");
    checkPath(from);
    checkPath(to);
    if (isSameOrChild(to, from)) {
        throw new HttpError(400, `Cannot copy '${from}' into itself.`);
    }

    const all = await env.DB.prepare("SELECT path, type, content, mtime, position, disabled FROM entries WHERE project_id = ?").bind(projectId).all<EntryRow>();
    const byPath = new Map(all.results.map((row) => [row.path, row]));
    if (!byPath.has(from)) {
        throw new HttpError(404, `'${from}' does not exist.`);
    }
    if (byPath.has(to)) {
        throw new HttpError(409, `'${to}' already exists.`);
    }
    const missingAncestors: string[] = [];
    for (const ancestor of ancestorsOf(to)) {
        const type = byPath.get(ancestor)?.type;
        if (type === "file") {
            throw new HttpError(409, `'${ancestor}' is a file, not a directory.`);
        }
        if (type === undefined) {
            missingAncestors.push(ancestor);
        }
    }

    const copied = all.results.filter((row) => isSameOrChild(row.path, from)).sort((a, b) => a.position - b.position);
    const maxPosition = Math.max(0, ...all.results.map((row) => row.position));
    const rows: NewRow[] = [
        ...missingAncestors.map((path) => ({ path, type: "dir" as const, content: null, disabled: 0 as const })),
        ...copied.map((row) => ({ path: to + row.path.substring(from.length), type: row.type, content: row.content, disabled: row.disabled })),
    ].map((row, index) => ({ ...row, position: maxPosition + 1 + index }));
    checkEntryLimit(all.results.length, rows.length);

    // In the same folder, the copy goes right after the original.
    let positions: EntryPosition[] = rows.map(({ path, position }) => ({ path, position }));
    const reorder: D1PreparedStatement[] = [];
    const parent = parentOf(from);
    if (parentOf(to) === parent) {
        const copyRoot = rows.find((row) => row.path === to)!;
        const siblings = all.results.filter((row) => parentOf(row.path) === parent).sort((a, b) => a.position - b.position);
        siblings.splice(siblings.findIndex((row) => row.path === from) + 1, 0, { ...byPath.get(from)!, path: to, position: copyRoot.position });
        const reordered = reorderedPositions(siblings, maxPosition + rows.length);
        reorder.push(setPositionsStatement(env, projectId, reordered));
        const reorderedByPath = new Map(reordered.map((entry) => [entry.path, entry.position]));
        positions = [...positions.filter((entry) => !reorderedByPath.has(entry.path)), ...reordered];
    }

    const now = Date.now();
    await env.DB.batch([...insertRowsStatements(env, projectId, now, rows), ...reorder, touchProject(env, projectId, now)]);
    return json({ mtime: now, positions } satisfies WriteResponse);
}

export async function handleOrderEntries(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const paths = body.paths;
    if (!Array.isArray(paths) || paths.length === 0 || !paths.every((path): path is string => typeof path === "string")) {
        throw new HttpError(400, "Field 'paths' must be a non-empty list of paths.");
    }
    paths.forEach(checkPath);
    const parent = parentOf(paths[0]);
    if (!paths.every((path) => parentOf(path) === parent)) {
        throw new HttpError(400, "The entries to order must be in the same folder.");
    }

    const all = await getEntryPositions(env, projectId);
    const children = new Map(all.filter((row) => parentOf(row.path) === parent).map((row) => [row.path, row]));
    if (new Set(paths).size !== paths.length || paths.length !== children.size || !paths.every((path) => children.has(path))) {
        throw new HttpError(409, "The content of the folder changed (for example in another browser tab). Reload the page and try again.");
    }
    const positions = reorderedPositions(
        paths.map((path) => children.get(path)!),
        Math.max(0, ...all.map((row) => row.position)),
    );
    const now = Date.now();
    await env.DB.batch([setPositionsStatement(env, projectId, positions), touchProject(env, projectId, now)]);
    return json({ positions } satisfies PositionsResponse);
}

export async function handleSetDisabled(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const path = getString(body, "path");
    const disabled = body.disabled;
    checkPath(path);
    if (typeof disabled !== "boolean") {
        throw new HttpError(400, "Field 'disabled' must be a boolean.");
    }
    const now = Date.now();
    const [result] = await env.DB.batch([
        env.DB.prepare("UPDATE entries SET disabled = ? WHERE project_id = ? AND path = ?").bind(disabled ? 1 : 0, projectId, path),
        touchProject(env, projectId, now),
    ]);
    if (result.meta.changes === 0) {
        throw new HttpError(404, `'${path}' does not exist.`);
    }
    return json({ ok: true });
}

export async function handleDeleteEntry(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const path = getString(body, "path");
    checkPath(path);

    const now = Date.now();
    const [result] = await env.DB.batch([
        env.DB.prepare(`DELETE FROM entries WHERE project_id = ? AND ${SUBTREE_CONDITION}`).bind(projectId, path, path, path),
        touchProject(env, projectId, now),
    ]);
    if (result.meta.changes === 0) {
        throw new HttpError(404, `'${path}' does not exist.`);
    }
    return json({ ok: true });
}

export async function handleRenameEntry(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const from = getString(body, "from");
    const to = getString(body, "to");
    const overwrite = getOptionalBoolean(body, "overwrite");
    checkPath(from);
    checkPath(to);

    if (to === from) {
        return json({ positions: [] } satisfies PositionsResponse);
    }
    if (to.startsWith(from + "/")) {
        throw new HttpError(400, `Cannot move '${from}' into itself.`);
    }
    if (!(await getEntry(env, projectId, from))) {
        throw new HttpError(404, `'${from}' does not exist.`);
    }
    const target = await getEntry(env, projectId, to);
    if (target && !overwrite) {
        throw new HttpError(409, `'${to}' already exists.`);
    }
    if (from.startsWith(to + "/")) {
        throw new HttpError(400, `Cannot replace '${to}' with one of its own children.`);
    }

    const now = Date.now();
    const ancestorStatements = await prepareAncestors(env, projectId, to, now);
    const results = await env.DB.batch([
        ...(target ? [env.DB.prepare(`DELETE FROM entries WHERE project_id = ? AND ${SUBTREE_CONDITION}`).bind(projectId, to, to, to)] : []),
        ...ancestorStatements,
        env.DB.prepare(`UPDATE entries SET path = ? || substr(path, length(?) + 1) WHERE project_id = ? AND ${SUBTREE_CONDITION}`).bind(
            to,
            from,
            projectId,
            from,
            from,
            from,
        ),
        // Moved to another folder: at the end of it. (The order inside a moved folder does not change.)
        ...(parentOf(to) !== parentOf(from)
            ? [env.DB.prepare(`UPDATE entries SET position = ${NEXT_POSITION} WHERE project_id = ? AND path = ? RETURNING path, position`).bind(projectId, projectId, to)]
            : []),
        touchProject(env, projectId, now),
    ]);
    return json({ positions: returnedPositions(results) } satisfies PositionsResponse);
}
