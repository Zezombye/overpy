import {
    type EntryPosition,
    type ImportEntriesRequest,
    type ProjectEntry,
    type ProjectFilesResponse,
    reorderedPositions,
    validateEntryPath,
    type WriteResponse,
} from "../../shared/api";
import type { ProjectSettings } from "../../shared/projectSettings";
import { ApiError } from "../lib/api";
import { LOCAL_PROJECT_ID } from "../lib/router";
import { dirname, isSameOrChild, replacePrefix } from "./paths";
import type { ProjectBackend } from "./workspace";

/*
 * The project used without account: logged-out users have a single project, stored in this browser's localStorage
 * (nothing is sent to the server). The requests that modify a saved project are done on that storage, with the same
 * checks and results as the server (see server/projects.ts). Every request reads the storage again, so that several
 * tabs of the project behave like several tabs of a saved project (e.g. a file saved in another tab is a conflict).
 *
 * The storage is an index (the settings, and the entries without their content) and one key per file content, so
 * that saving a file only rewrites that file and the index. Contents are written before the index that refers to
 * them: if the storage is full (about 5 MB per site), the request fails and the project keeps its previous state.
 */

export const LOCAL_PROJECT_NAME = "Local Project";
/** Explains the local project (tooltips). */
export const LOCAL_PROJECT_TITLE = "Without account, the project is stored in this browser only: it is not sent to the server.";

const INDEX_KEY = "overpy-ide.localProject";
const CONTENT_KEY_PREFIX = "overpy-ide.localProject.content.";

interface StoredEntry {
    path: string;
    type: "file" | "dir";
    mtime: number;
    position: number;
    disabled: boolean;
}

interface StoredProject {
    /** Contents are stored under keys of this generation (see contentKey), which changes when the whole project is replaced. */
    generation: number;
    settings: ProjectSettings;
    entries: Map<string, StoredEntry>;
}

function storage(): Storage {
    try {
        return localStorage;
    } catch (error) {
        throw new Error(`Without account, the project is stored in the browser, but this browser blocks the storage of this site (${error instanceof Error ? error.message : String(error)}).`);
    }
}

function setItem(key: string, value: string): void {
    try {
        storage().setItem(key, value);
    } catch (error) {
        if (error instanceof DOMException && error.name === "QuotaExceededError") {
            throw new Error("The browser storage is full (about 5 MB per site), so the change could not be saved. Delete files, or sign in to save larger projects in your account.");
        }
        throw error;
    }
}

const contentKey = (generation: number, path: string) => `${CONTENT_KEY_PREFIX}${generation}:${path}`;

function readProject(): StoredProject {
    const raw = storage().getItem(INDEX_KEY);
    if (raw === null) {
        return { generation: 0, settings: {}, entries: new Map() };
    }
    const stored = JSON.parse(raw) as { generation: number; settings: ProjectSettings; entries: StoredEntry[] };
    return { generation: stored.generation, settings: stored.settings, entries: new Map(stored.entries.map((entry) => [entry.path, entry])) };
}

function writeProject(project: StoredProject): void {
    setItem(INDEX_KEY, JSON.stringify({ generation: project.generation, settings: project.settings, entries: [...project.entries.values()] }));
}

function readContent(project: StoredProject, path: string): string {
    const content = storage().getItem(contentKey(project.generation, path));
    if (content === null) {
        throw new Error(`The content of '${path}' is missing from the browser storage.`);
    }
    return content;
}

function getEntry(project: StoredProject, path: string): StoredEntry {
    const entry = project.entries.get(path);
    if (!entry) {
        throw new Error(`'${path}' does not exist.`);
    }
    return entry;
}

function checkAbsent(project: StoredProject, path: string): void {
    if (project.entries.has(path)) {
        throw new Error(`'${path}' already exists.`);
    }
}

const maxPosition = (project: StoredProject) => Math.max(0, ...[...project.entries.values()].map((entry) => entry.position));

/** The ancestor folders of `path` that do not exist yet (created with it), outermost first. */
function missingAncestors(project: StoredProject, path: string): string[] {
    const missing: string[] = [];
    for (let parent = dirname(path); parent !== ""; parent = dirname(parent)) {
        const type = project.entries.get(parent)?.type;
        if (type === "file") {
            throw new Error(`'${parent}' is a file, not a folder.`);
        }
        if (type === undefined) {
            missing.unshift(parent);
        }
    }
    return missing;
}

/** Adds entries, in this order, after every existing entry (so at the end of their folder). Returns their positions. */
function addEntries(project: StoredProject, entries: Omit<StoredEntry, "mtime" | "position">[], mtime: number): EntryPosition[] {
    const max = maxPosition(project);
    return entries.map((entry, index) => {
        const position = max + 1 + index;
        project.entries.set(entry.path, { ...entry, mtime, position });
        return { path: entry.path, position };
    });
}

const folders = (paths: string[]) => paths.map((path) => ({ path, type: "dir" as const, disabled: false }));

function setPositions(project: StoredProject, positions: EntryPosition[]): void {
    for (const { path, position } of positions) {
        getEntry(project, path).position = position;
    }
}

/** The local project, with its file contents. Also removes contents left by a request that failed halfway. */
export function loadLocalProject(): ProjectFilesResponse {
    const project = readProject();
    const entries: ProjectEntry[] = [...project.entries.values()].map((entry) => ({
        ...entry,
        ...(entry.type === "file" ? { content: readContent(project, entry.path) } : {}),
    }));
    const contentKeys = new Set(entries.filter((entry) => entry.type === "file").map((entry) => contentKey(project.generation, entry.path)));
    const keys = Array.from({ length: storage().length }, (_, index) => storage().key(index)!);
    for (const key of keys) {
        if (key.startsWith(CONTENT_KEY_PREFIX) && !contentKeys.has(key)) {
            storage().removeItem(key);
        }
    }
    const now = Date.now();
    return {
        project: { id: LOCAL_PROJECT_ID, name: LOCAL_PROJECT_NAME, createdAt: now, updatedAt: now, fileCount: contentKeys.size },
        entries,
        settings: project.settings,
        public: false,
        readOnly: false,
    };
}

/**
 * Replaces all the entries of the local project (in this order, folders before their content), and resets its settings.
 * The new contents are written in a new generation, so that if the storage is full, the project is left unchanged.
 */
export function replaceStoredLocalProject(entries: ImportEntriesRequest["entries"]): WriteResponse {
    const types = new Map<string, "file" | "dir">();
    for (const entry of entries) {
        const error = validateEntryPath(entry.path);
        if (error) {
            throw new Error(error);
        }
        if (types.has(entry.path)) {
            throw new Error(`'${entry.path}' is imported twice.`);
        }
        types.set(entry.path, entry.type);
    }
    // The folders missing from the entries are created first.
    const ancestors = new Set<string>();
    for (const entry of entries) {
        const missing: string[] = [];
        for (let parent = dirname(entry.path); parent !== ""; parent = dirname(parent)) {
            const type = types.get(parent);
            if (type === "file") {
                throw new Error(`'${parent}' is a file, not a folder.`);
            }
            if (type === undefined) {
                missing.unshift(parent);
            }
        }
        missing.forEach((ancestor) => ancestors.add(ancestor));
    }

    const previous = readProject();
    const project: StoredProject = { generation: previous.generation + 1, settings: {}, entries: new Map() };
    const now = Date.now();
    const positions = addEntries(project, [...folders([...ancestors]), ...entries.map((entry) => ({ path: entry.path, type: entry.type, disabled: entry.disabled ?? false }))], now);
    try {
        for (const entry of entries) {
            if (entry.type === "file") {
                setItem(contentKey(project.generation, entry.path), entry.content ?? "");
            }
        }
        writeProject(project);
    } catch (error) {
        for (const entry of entries) {
            storage().removeItem(contentKey(project.generation, entry.path));
        }
        throw error;
    }
    for (const entry of previous.entries.values()) {
        storage().removeItem(contentKey(previous.generation, entry.path));
    }
    return { mtime: now, positions };
}

export const localProjectBackend: ProjectBackend = {
    writeFile: async (_projectId, { path, content, expectedMtime, create }) => {
        const project = readProject();
        const existing = project.entries.get(path);
        if (existing?.type === "dir") {
            throw new ApiError(409, `'${path}' is a folder.`, {});
        }
        if (existing && create) {
            throw new ApiError(409, `'${path}' already exists.`, { currentMtime: existing.mtime });
        }
        if (expectedMtime !== undefined && existing?.mtime !== expectedMtime) {
            throw new ApiError(409, `'${path}' was modified elsewhere.`, { currentMtime: existing?.mtime ?? null });
        }
        const now = Date.now();
        let mtime = now;
        let positions: EntryPosition[] = [];
        if (existing) {
            mtime = Math.max(now, existing.mtime + 1);
            existing.mtime = mtime;
        } else {
            positions = addEntries(project, [...folders(missingAncestors(project, path)), { path, type: "file", disabled: false }], now);
        }
        setItem(contentKey(project.generation, path), content);
        writeProject(project);
        return { mtime, positions };
    },
    createDirectory: async (_projectId, path) => {
        const project = readProject();
        checkAbsent(project, path);
        const now = Date.now();
        const positions = addEntries(project, folders([...missingAncestors(project, path), path]), now);
        writeProject(project);
        return { mtime: now, positions };
    },
    copyEntry: async (_projectId, from, to) => {
        const project = readProject();
        getEntry(project, from);
        checkAbsent(project, to);
        if (isSameOrChild(to, from)) {
            throw new Error(`Cannot copy '${from}' into itself.`);
        }
        const copied = [...project.entries.values()].filter((entry) => isSameOrChild(entry.path, from)).sort((a, b) => a.position - b.position);
        const parent = dirname(from);
        const siblings = [...project.entries.values()]
            .filter((entry) => dirname(entry.path) === parent)
            .sort((a, b) => a.position - b.position)
            .map((entry): EntryPosition => ({ path: entry.path, position: entry.position }));
        const now = Date.now();
        let positions = addEntries(
            project,
            [...folders(missingAncestors(project, to)), ...copied.map((entry) => ({ path: replacePrefix(entry.path, from, to), type: entry.type, disabled: entry.disabled }))],
            now,
        );
        // In the same folder, the copy goes right after the original.
        if (dirname(to) === parent) {
            siblings.splice(siblings.findIndex((entry) => entry.path === from) + 1, 0, positions.find((entry) => entry.path === to)!);
            const reordered = reorderedPositions(siblings, maxPosition(project));
            setPositions(project, reordered);
            const reorderedPaths = new Set(reordered.map((entry) => entry.path));
            positions = [...positions.filter((entry) => !reorderedPaths.has(entry.path)), ...reordered];
        }
        for (const entry of copied) {
            if (entry.type === "file") {
                setItem(contentKey(project.generation, replacePrefix(entry.path, from, to)), readContent(project, entry.path));
            }
        }
        writeProject(project);
        return { mtime: now, positions };
    },
    orderEntries: async (_projectId, paths) => {
        const project = readProject();
        const parent = dirname(paths[0] ?? "");
        const children = [...project.entries.values()].filter((entry) => dirname(entry.path) === parent);
        if (paths.length === 0 || new Set(paths).size !== paths.length || paths.length !== children.length || !paths.every((path) => project.entries.has(path) && dirname(path) === parent)) {
            throw new Error("The content of the folder changed (for example in another browser tab). Reload the page and try again.");
        }
        const positions = reorderedPositions(
            paths.map((path) => ({ path, position: getEntry(project, path).position })),
            maxPosition(project),
        );
        setPositions(project, positions);
        writeProject(project);
        return { positions };
    },
    renameEntry: async (_projectId, from, to) => {
        const project = readProject();
        if (to === from) {
            return { positions: [] };
        }
        getEntry(project, from);
        checkAbsent(project, to);
        if (isSameOrChild(to, from)) {
            throw new Error(`Cannot move '${from}' into itself.`);
        }
        const moved = [...project.entries.values()].filter((entry) => isSameOrChild(entry.path, from));
        const positions = addEntries(project, folders(missingAncestors(project, to)), Date.now());
        for (const entry of moved) {
            const path = replacePrefix(entry.path, from, to);
            project.entries.delete(entry.path);
            project.entries.set(path, { ...entry, path });
        }
        // Moved to another folder: at the end of it. (The order inside a moved folder does not change.)
        if (dirname(to) !== dirname(from)) {
            const position = maxPosition(project) + 1;
            getEntry(project, to).position = position;
            positions.push({ path: to, position });
        }
        const movedFiles = moved.filter((entry) => entry.type === "file");
        for (const entry of movedFiles) {
            setItem(contentKey(project.generation, replacePrefix(entry.path, from, to)), readContent(project, entry.path));
        }
        writeProject(project);
        for (const entry of movedFiles) {
            storage().removeItem(contentKey(project.generation, entry.path));
        }
        return { positions };
    },
    setDisabled: async (_projectId, path, disabled) => {
        const project = readProject();
        getEntry(project, path).disabled = disabled;
        writeProject(project);
        return { ok: true };
    },
    deleteEntry: async (_projectId, path) => {
        const project = readProject();
        getEntry(project, path);
        const removed = [...project.entries.values()].filter((entry) => isSameOrChild(entry.path, path));
        for (const entry of removed) {
            project.entries.delete(entry.path);
        }
        writeProject(project);
        for (const entry of removed) {
            if (entry.type === "file") {
                storage().removeItem(contentKey(project.generation, entry.path));
            }
        }
        return { ok: true };
    },
    saveProjectSettings: async (_projectId, settings) => {
        const project = readProject();
        project.settings = settings;
        writeProject(project);
        return { ok: true };
    },
    setProjectPublic: async () => {
        throw new Error("Projects used without account cannot be shared: sign in to save and share your projects.");
    },
};
