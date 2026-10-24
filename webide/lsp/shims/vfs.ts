/*
 * In-memory file system backing the `fs` shims of the language server worker.
 * Its content is mirrored from the project files by the IDE (see SyncFilesNotification).
 */

type VfsEntry = { type: "file"; content: string } | { type: "dir" };

type FsErrorCode = "ENOENT" | "EISDIR" | "ENOTDIR";

const errorMessages: Record<FsErrorCode, string> = {
    ENOENT: "no such file or directory",
    EISDIR: "illegal operation on a directory",
    ENOTDIR: "not a directory",
};

const entries = new Map<string, VfsEntry>();
let writeListener: ((path: string, content: string) => void) | undefined;

export class Stats {
    constructor(
        private readonly entryType: "file" | "dir",
        readonly size: number,
    ) {}
    isFile(): boolean {
        return this.entryType === "file";
    }
    isDirectory(): boolean {
        return this.entryType === "dir";
    }
    isSymbolicLink(): boolean {
        return false;
    }
}

export class Dirent extends Stats {
    constructor(
        readonly name: string,
        entryType: "file" | "dir",
    ) {
        super(entryType, 0);
    }
}

/** Normalizes to an absolute POSIX path without trailing slash. Backslashes are treated as separators. */
export function normalizePath(path: string): string {
    const segments: string[] = [];
    for (const segment of path.replace(/\\/g, "/").split("/")) {
        if (segment === "" || segment === ".") {
            continue;
        }
        if (segment === "..") {
            segments.pop();
            continue;
        }
        segments.push(segment);
    }
    return "/" + segments.join("/");
}

function parentOf(normalizedPath: string): string {
    return normalizedPath.substring(0, normalizedPath.lastIndexOf("/")) || "/";
}

function fsError(code: FsErrorCode, syscall: string, path: string): Error {
    return Object.assign(new Error(`${code}: ${errorMessages[code]}, ${syscall} '${path}'`), { code, syscall, path });
}

function getEntry(path: string): VfsEntry | undefined {
    const normalized = normalizePath(path);
    return normalized === "/" ? { type: "dir" } : entries.get(normalized);
}

function ensureParentDirs(normalizedPath: string): void {
    for (let dir = parentOf(normalizedPath); dir !== "/"; dir = parentOf(dir)) {
        if (entries.get(dir)?.type === "dir") {
            return;
        }
        entries.set(dir, { type: "dir" });
    }
}

export function setVfsWriteListener(listener: (path: string, content: string) => void): void {
    writeListener = listener;
}

export function applyVfsChanges(
    reset: boolean,
    upserts: { path: string; type: "file" | "dir"; content?: string }[],
    deletes: string[],
): void {
    if (reset) {
        entries.clear();
    }
    for (const path of deletes) {
        const normalized = normalizePath(path);
        for (const existing of [...entries.keys()]) {
            if (existing === normalized || existing.startsWith(normalized + "/")) {
                entries.delete(existing);
            }
        }
    }
    for (const upsert of upserts) {
        const normalized = normalizePath(upsert.path);
        ensureParentDirs(normalized);
        if (upsert.type === "dir") {
            entries.set(normalized, { type: "dir" });
        } else {
            if (upsert.content === undefined) {
                throw new Error(`File upsert for '${upsert.path}' is missing its content`);
            }
            entries.set(normalized, { type: "file", content: upsert.content });
        }
    }
}

export function readFileSync(path: string, _options?: unknown): string {
    const entry = getEntry(path);
    if (!entry) {
        throw fsError("ENOENT", "open", path);
    }
    if (entry.type === "dir") {
        throw fsError("EISDIR", "read", path);
    }
    return entry.content;
}

export function existsSync(path: string): boolean {
    return getEntry(path) !== undefined;
}

export function statSync(path: string): Stats {
    const entry = getEntry(path);
    if (!entry) {
        throw fsError("ENOENT", "stat", path);
    }
    return new Stats(entry.type, entry.type === "file" ? entry.content.length : 0);
}

export const lstatSync = statSync;

export function readdirSync(path: string, options?: { withFileTypes?: boolean }): string[] | Dirent[] {
    const entry = getEntry(path);
    if (!entry) {
        throw fsError("ENOENT", "scandir", path);
    }
    if (entry.type !== "dir") {
        throw fsError("ENOTDIR", "scandir", path);
    }
    const normalized = normalizePath(path);
    const prefix = normalized === "/" ? "/" : normalized + "/";
    const children: Dirent[] = [];
    for (const [childPath, child] of entries) {
        if (childPath.startsWith(prefix) && !childPath.includes("/", prefix.length)) {
            children.push(new Dirent(childPath.substring(prefix.length), child.type));
        }
    }
    children.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
    return options?.withFileTypes ? children : children.map((child) => child.name);
}

export function writeFileSync(path: string, data: string, _options?: unknown): void {
    const normalized = normalizePath(path);
    const existing = entries.get(normalized);
    if (existing?.type === "dir") {
        throw fsError("EISDIR", "open", path);
    }
    if (!entries.has(parentOf(normalized)) && parentOf(normalized) !== "/") {
        throw fsError("ENOENT", "open", path);
    }
    const content = String(data);
    if (existing?.type === "file" && existing.content === content) {
        return;
    }
    entries.set(normalized, { type: "file", content });
    writeListener?.(normalized, content);
}
