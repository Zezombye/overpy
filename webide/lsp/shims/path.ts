/*
 * Replaces `path` / `node:path` in the language server worker bundle.
 * POSIX semantics, except that backslashes are also accepted as separators: `vscode-uri` produces
 * backslash `fsPath`s when the browser runs on Windows.
 */

export const sep = "/";
export const delimiter = ":";

function toSlashes(path: string): string {
    return path.replace(/\\/g, "/");
}

export function isAbsolute(path: string): boolean {
    return /^(\/|[A-Za-z]:\/)/.test(toSlashes(path));
}

export function normalize(path: string): string {
    path = toSlashes(path);
    if (path === "") {
        return ".";
    }
    const absolute = path.startsWith("/");
    const trailingSlash = path.endsWith("/");
    const segments: string[] = [];
    for (const segment of path.split("/")) {
        if (segment === "" || segment === ".") {
            continue;
        }
        if (segment === "..") {
            if (segments.length > 0 && segments[segments.length - 1] !== "..") {
                segments.pop();
            } else if (!absolute) {
                segments.push("..");
            }
            continue;
        }
        segments.push(segment);
    }
    let result = (absolute ? "/" : "") + segments.join("/");
    if (result === "") {
        return absolute ? "/" : ".";
    }
    if (trailingSlash && result !== "/") {
        result += "/";
    }
    return result;
}

export function join(...paths: string[]): string {
    const joined = paths.filter((path) => path !== "").join("/");
    return joined === "" ? "." : normalize(joined);
}

export function resolve(...paths: string[]): string {
    let resolved = "";
    for (let i = paths.length - 1; i >= 0; i--) {
        const path = toSlashes(paths[i]);
        if (path === "") {
            continue;
        }
        resolved = resolved === "" ? path : path + "/" + resolved;
        if (isAbsolute(path)) {
            break;
        }
    }
    if (!isAbsolute(resolved)) {
        resolved = "/" + resolved;
    }
    const normalized = normalize(resolved);
    return normalized.length > 1 && normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
}

function stripTrailingSlashes(path: string): string {
    path = toSlashes(path);
    while (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
    }
    return path;
}

export function dirname(path: string): string {
    path = stripTrailingSlashes(path);
    const index = path.lastIndexOf("/");
    if (index < 0) {
        return ".";
    }
    return index === 0 ? "/" : path.substring(0, index);
}

export function basename(path: string, ext?: string): string {
    path = stripTrailingSlashes(path);
    let base = path.substring(path.lastIndexOf("/") + 1);
    if (ext !== undefined && base !== ext && base.endsWith(ext)) {
        base = base.slice(0, -ext.length);
    }
    return base;
}

export function extname(path: string): string {
    const base = basename(path);
    const index = base.lastIndexOf(".");
    return index <= 0 ? "" : base.substring(index);
}

export function parse(path: string): { root: string; dir: string; base: string; ext: string; name: string } {
    const base = basename(path);
    const ext = extname(path);
    const dir = toSlashes(path).includes("/") ? dirname(path) : "";
    return {
        root: isAbsolute(path) ? "/" : "",
        dir,
        base,
        ext,
        name: ext === "" ? base : base.slice(0, -ext.length),
    };
}

export function relative(from: string, to: string): string {
    const fromSegments = resolve(from).split("/").filter(Boolean);
    const toSegments = resolve(to).split("/").filter(Boolean);
    let common = 0;
    while (common < fromSegments.length && common < toSegments.length && fromSegments[common] === toSegments[common]) {
        common++;
    }
    return [...fromSegments.slice(common).map(() => ".."), ...toSegments.slice(common)].join("/");
}

export const posix = { sep, delimiter, isAbsolute, normalize, join, resolve, dirname, basename, extname, parse, relative };
