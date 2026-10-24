/** Helpers for project-relative paths ("dir/file.opy"). */

export function basename(path: string): string {
    return path.substring(path.lastIndexOf("/") + 1);
}

/** Parent directory path, or "" for top-level entries. */
export function dirname(path: string): string {
    const index = path.lastIndexOf("/");
    return index < 0 ? "" : path.substring(0, index);
}

export function joinPath(directory: string, name: string): string {
    return directory === "" ? name : `${directory}/${name}`;
}

export function isSameOrChild(path: string, ancestor: string): boolean {
    return path === ancestor || path.startsWith(ancestor + "/");
}

/** Replaces the `from` prefix of `path` (which must be `from` or one of its children) by `to`. */
export function replacePrefix(path: string, from: string, to: string): string {
    return to + path.substring(from.length);
}

export function extension(path: string): string {
    const name = basename(path);
    const index = name.lastIndexOf(".");
    return index <= 0 ? "" : name.substring(index).toLowerCase();
}

/**
 * Explorer order: natural, case-insensitive order of the names ("2 x" before "10 x"), with folders
 * either mixed with the files or first (VS Code's "mixed" and "default" sort orders).
 */
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
export function compareEntries(a: { path: string; type: "file" | "dir" }, b: { path: string; type: "file" | "dir" }, foldersFirst: boolean): number {
    if (foldersFirst && a.type !== b.type) {
        return a.type === "dir" ? -1 : 1;
    }
    return collator.compare(basename(a.path), basename(b.path)) || (a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
}
