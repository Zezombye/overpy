// Replaces `fs/promises` / `node:fs/promises` in the language server worker bundle.
import { type Dirent, readdirSync, readFileSync, type Stats, statSync, writeFileSync } from "./vfs";

export async function readFile(path: string, options?: unknown): Promise<string> {
    return readFileSync(path, options);
}

export async function readdir(path: string, options?: { withFileTypes?: boolean }): Promise<string[] | Dirent[]> {
    return readdirSync(path, options);
}

export async function stat(path: string): Promise<Stats> {
    return statSync(path);
}

export const lstat = stat;

export async function writeFile(path: string, data: string, options?: unknown): Promise<void> {
    writeFileSync(path, data, options);
}
