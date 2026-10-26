/*
 * Types and validation rules shared by the API server (server/) and the frontend (src/).
 * Must not import anything.
 */

export const AUTH_PROVIDERS = ["battlenet", "discord", "google"] as const;
export type AuthProvider = (typeof AUTH_PROVIDERS)[number];
export const AUTH_PROVIDER_NAMES: Record<AuthProvider, string> = { battlenet: "Battle.net", discord: "Discord", google: "Google" };

export interface User {
    id: number;
    name: string;
    avatarUrl: string | null;
}

export interface MeResponse {
    user: User;
    settings: Record<string, unknown>;
    /** Providers linked to the account. */
    identities: AuthProvider[];
    /** Providers configured on the server. */
    providers: AuthProvider[];
}

export interface ProvidersResponse {
    providers: AuthProvider[];
}

export interface ProjectSummary {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    fileCount: number;
}

export interface ProjectEntry {
    /** Relative to the project root, '/'-separated, e.g. "lib/utils.opy". */
    path: string;
    type: "file" | "dir";
    /** Only set for files. */
    content?: string;
    mtime: number;
}

export interface ProjectFilesResponse {
    project: ProjectSummary;
    entries: ProjectEntry[];
}

export interface WriteFileRequest {
    path: string;
    content: string;
    /** If set, the write fails with a 409 conflict unless the file's current mtime matches. */
    expectedMtime?: number;
    /** If true, the write fails with a 409 conflict if the file already exists. */
    create?: boolean;
}

/** Creates many entries at once (e.g. a project import). Fails if any of them already exists. */
export interface ImportEntriesRequest {
    entries: { path: string; type: "file" | "dir"; content?: string }[];
}

/** Limits of one import request; clients split bigger imports. */
export const MAX_IMPORT_ENTRIES_PER_REQUEST = 200;
export const MAX_IMPORT_BYTES_PER_REQUEST = 512_000;

export interface ConflictResponse {
    error: string;
    currentMtime: number | null;
}

export const MAX_PROJECTS_PER_USER = 50;
export const MAX_ENTRIES_PER_PROJECT = 1000;
/** D1 rows are limited to 2 MB. */
export const MAX_FILE_BYTES = 1_000_000;
export const MAX_SETTINGS_BYTES = 32_000;

/** Returns an error message, or null if the name is valid. Project names are also used as the root folder name. */
export function validateProjectName(name: string): string | null {
    if (name.length < 1 || name.length > 64) {
        return "Project names must be 1 to 64 characters long.";
    }
    if (name !== name.trim()) {
        return "Project names cannot start or end with whitespace.";
    }
    if (/[\\/:*?"<>|\u0000-\u001f\u007f]/.test(name)) {
        return 'Project names cannot contain \\ / : * ? " < > | or control characters.';
    }
    if (name === "." || name === "..") {
        return "Invalid project name.";
    }
    return null;
}

/** Returns an error message, or null if the path is a valid project-relative path. */
export function validateEntryPath(path: string): string | null {
    if (path.length < 1 || path.length > 512) {
        return "Paths must be 1 to 512 characters long.";
    }
    for (const segment of path.split("/")) {
        if (segment === "" || segment === "." || segment === "..") {
            return `Invalid path '${path}'.`;
        }
        if (/[\\:*?"<>|\u0000-\u001f\u007f]/.test(segment)) {
            return `Invalid path '${path}': names cannot contain \\ : * ? " < > | or control characters.`;
        }
        if (segment !== segment.trim()) {
            return `Invalid path '${path}': names cannot start or end with whitespace.`;
        }
    }
    return null;
}
