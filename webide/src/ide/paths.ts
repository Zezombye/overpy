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

/** The extension in lower case (".opy"), or "". */
export function extension(path: string): string {
    const name = basename(path);
    const index = name.lastIndexOf(".");
    return index <= 0 ? "" : name.substring(index).toLowerCase();
}

/** The path without its extension ("dir/rules.ow" -> "dir/rules"). */
export function withoutExtension(path: string): string {
    return path.substring(0, path.length - extension(path).length);
}
