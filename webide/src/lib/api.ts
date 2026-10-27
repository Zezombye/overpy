import type {
    AuthProvider,
    ImportEntriesRequest,
    MeResponse,
    PositionsResponse,
    ProjectFilesResponse,
    ProjectSummary,
    ProvidersResponse,
    WriteFileRequest,
    WriteResponse,
} from "../../shared/api";
import type { ProjectSettings } from "../../shared/projectSettings";

export class ApiError extends Error {
    constructor(
        readonly status: number,
        message: string,
        readonly body: Record<string, unknown>,
    ) {
        super(message);
    }
}

let unauthorizedHandler: (() => void) | undefined;

/** Called when a request fails because the session expired. */
export function onUnauthorized(handler: () => void): void {
    unauthorizedHandler = handler;
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const response = await fetch(path, {
        method,
        headers: body === undefined ? {} : { "Content-Type": "application/json" },
        body: body === undefined ? undefined : JSON.stringify(body),
        credentials: "same-origin",
    });
    const text = await response.text();
    let data: Record<string, unknown>;
    try {
        data = text === "" ? {} : (JSON.parse(text) as Record<string, unknown>);
    } catch {
        throw new ApiError(response.status, `Unexpected response from the server (HTTP ${response.status}): ${text.slice(0, 200)}`, {});
    }
    if (!response.ok) {
        if (response.status === 401 && unauthorizedHandler && path !== "/api/me") {
            unauthorizedHandler();
        }
        throw new ApiError(response.status, typeof data.error === "string" ? data.error : `HTTP ${response.status}`, data);
    }
    return data as T;
}

const projectPath = (projectId: string) => `/api/projects/${encodeURIComponent(projectId)}`;

/**
 * URL of the Discord/Google sign-in (a page navigation, not a fetch).
 * `link`: add the provider to the signed-in account instead of signing in.
 */
export function oauthStartUrl(provider: AuthProvider, options: { next: string; link?: boolean }): string {
    const params = new URLSearchParams({ next: options.next });
    if (options.link) {
        params.set("link", "1");
    }
    return `/api/auth/${provider}/start?${params}`;
}

export const api = {
    me: () => request<MeResponse>("GET", "/api/me"),
    providers: () => request<ProvidersResponse>("GET", "/api/auth/providers"),
    logout: () => request<{ ok: true }>("POST", "/api/logout"),
    saveSettings: (settings: Record<string, unknown>) => request<{ ok: true }>("PUT", "/api/settings", { settings }),

    listProjects: () => request<{ projects: ProjectSummary[] }>("GET", "/api/projects"),
    createProject: (name: string) => request<{ project: ProjectSummary }>("POST", "/api/projects", { name }),
    renameProject: (projectId: string, name: string) => request<{ project: ProjectSummary }>("PATCH", projectPath(projectId), { name }),
    deleteProject: (projectId: string) => request<{ ok: true }>("DELETE", projectPath(projectId)),

    getFiles: (projectId: string) => request<ProjectFilesResponse>("GET", `${projectPath(projectId)}/files`),
    saveProjectSettings: (projectId: string, settings: ProjectSettings) => request<{ ok: true }>("PUT", `${projectPath(projectId)}/settings`, { settings }),
    setProjectPublic: (projectId: string, isPublic: boolean) => request<{ ok: true }>("PUT", `${projectPath(projectId)}/public`, { public: isPublic }),
    writeFile: (projectId: string, body: WriteFileRequest) => request<WriteResponse>("PUT", `${projectPath(projectId)}/file`, body),
    createDirectory: (projectId: string, path: string) => request<WriteResponse>("POST", `${projectPath(projectId)}/mkdir`, { path }),
    importEntries: (projectId: string, body: ImportEntriesRequest) => request<WriteResponse>("POST", `${projectPath(projectId)}/import`, body),
    copyEntry: (projectId: string, from: string, to: string) => request<WriteResponse>("POST", `${projectPath(projectId)}/copy`, { from, to }),
    deleteEntry: (projectId: string, path: string) => request<{ ok: true }>("POST", `${projectPath(projectId)}/delete`, { path }),
    renameEntry: (projectId: string, from: string, to: string, overwrite = false) =>
        request<PositionsResponse>("POST", `${projectPath(projectId)}/rename`, { from, to, overwrite }),
    orderEntries: (projectId: string, paths: string[]) => request<PositionsResponse>("POST", `${projectPath(projectId)}/order`, { paths }),
    setDisabled: (projectId: string, path: string, disabled: boolean) => request<{ ok: true }>("POST", `${projectPath(projectId)}/disabled`, { path, disabled }),
};
