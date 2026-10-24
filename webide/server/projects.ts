import {
    type ConflictResponse,
    MAX_ENTRIES_PER_PROJECT,
    MAX_FILE_BYTES,
    MAX_PROJECTS_PER_USER,
    type ProjectEntry,
    type ProjectFilesResponse,
    type ProjectSummary,
    validateEntryPath,
    validateProjectName,
} from "../shared/api";
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
}

const PROJECT_COLUMNS =
    "id, name, created_at, updated_at, (SELECT COUNT(*) FROM entries WHERE entries.project_id = projects.id AND entries.type = 'file') AS file_count";

/** SQL condition matching `path` itself and everything below it (bind the path twice). */
const SUBTREE_CONDITION = "(path = ? OR substr(path, 1, length(?) + 1) = ? || '/')";

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
    return env.DB.prepare("SELECT path, type, content, mtime FROM entries WHERE project_id = ? AND path = ?").bind(projectId, path).first<EntryRow>();
}

async function countEntries(env: Env, projectId: string): Promise<number> {
    const row = await env.DB.prepare("SELECT COUNT(*) AS count FROM entries WHERE project_id = ?").bind(projectId).first<{ count: number }>();
    return row?.count ?? 0;
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
        .map((ancestor) => env.DB.prepare("INSERT INTO entries (project_id, path, type, content, mtime) VALUES (?, ?, 'dir', NULL, ?)").bind(projectId, ancestor, mtime));
}

function touchProject(env: Env, projectId: string, now: number): D1PreparedStatement {
    return env.DB.prepare("UPDATE projects SET updated_at = ? WHERE id = ?").bind(now, projectId);
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

export async function handleGetFiles(env: Env, session: Session, projectId: string): Promise<Response> {
    const project = await getProject(env, session, projectId);
    const rows = await env.DB.prepare("SELECT path, type, content, mtime FROM entries WHERE project_id = ? ORDER BY path").bind(projectId).all<EntryRow>();
    const entries: ProjectEntry[] = rows.results.map((row) =>
        row.type === "file" ? { path: row.path, type: "file", content: row.content ?? "", mtime: row.mtime } : { path: row.path, type: "dir", mtime: row.mtime },
    );
    return json({ project: toSummary(project), entries } satisfies ProjectFilesResponse);
}

export async function handleWriteFile(request: Request, env: Env, session: Session, projectId: string): Promise<Response> {
    await getProject(env, session, projectId);
    const body = await readJsonObject(request);
    const path = getString(body, "path");
    const content = getString(body, "content");
    const expectedMtime = getOptionalNumber(body, "expectedMtime");
    const create = getOptionalBoolean(body, "create");
    checkPath(path);

    const size = new TextEncoder().encode(content).length;
    if (size > MAX_FILE_BYTES) {
        throw new HttpError(413, `Files cannot be larger than ${MAX_FILE_BYTES / 1_000_000} MB ('${path}' is ${(size / 1_000_000).toFixed(2)} MB).`);
    }

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
    if (!existing && (await countEntries(env, projectId)) + ancestorStatements.length + 1 > MAX_ENTRIES_PER_PROJECT) {
        throw new HttpError(403, `Projects cannot have more than ${MAX_ENTRIES_PER_PROJECT} files and folders.`);
    }
    await env.DB.batch([
        ...ancestorStatements,
        env.DB.prepare(
            "INSERT INTO entries (project_id, path, type, content, mtime) VALUES (?, ?, 'file', ?, ?) ON CONFLICT (project_id, path) DO UPDATE SET content = excluded.content, mtime = excluded.mtime",
        ).bind(projectId, path, content, mtime),
        touchProject(env, projectId, now),
    ]);
    return json({ mtime });
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
    if ((await countEntries(env, projectId)) + ancestorStatements.length + 1 > MAX_ENTRIES_PER_PROJECT) {
        throw new HttpError(403, `Projects cannot have more than ${MAX_ENTRIES_PER_PROJECT} files and folders.`);
    }
    await env.DB.batch([
        ...ancestorStatements,
        env.DB.prepare("INSERT INTO entries (project_id, path, type, content, mtime) VALUES (?, ?, 'dir', NULL, ?)").bind(projectId, path, now),
        touchProject(env, projectId, now),
    ]);
    return json({ mtime: now });
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
        return json({ ok: true });
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
    await env.DB.batch([
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
        touchProject(env, projectId, now),
    ]);
    return json({ ok: true });
}
