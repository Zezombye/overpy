import { getSession, handleLogout, handleMe, handleOAuthCallback, handleOAuthStart, handleProviders, handleSaveSettings, requireSession, type Session } from "./auth";
import { type Env, HttpError, json } from "./http";
import {
    handleCopyEntry,
    handleCreateDirectory,
    handleCreateProject,
    handleDeleteEntry,
    handleDeleteProject,
    handleGetFiles,
    handleImportEntries,
    handleListProjects,
    handleOrderEntries,
    handleRenameEntry,
    handleRenameProject,
    handleSaveProjectSettings,
    handleSetDisabled,
    handleSetProjectPublic,
    handleWriteFile,
} from "./projects";

type Handler = (request: Request, env: Env, session: Session, params: string[]) => Promise<Response>;

/** Routes that require a session. Params are the regex capture groups. */
const routes: { method: string; pattern: RegExp; handler: Handler }[] = [
    { method: "GET", pattern: /^\/api\/me$/, handler: (_request, env, session) => handleMe(env, session) },
    { method: "PUT", pattern: /^\/api\/settings$/, handler: (request, env, session) => handleSaveSettings(request, env, session) },
    { method: "GET", pattern: /^\/api\/projects$/, handler: (_request, env, session) => handleListProjects(env, session) },
    { method: "POST", pattern: /^\/api\/projects$/, handler: (request, env, session) => handleCreateProject(request, env, session) },
    { method: "PATCH", pattern: /^\/api\/projects\/([0-9a-f]+)$/, handler: (request, env, session, [id]) => handleRenameProject(request, env, session, id) },
    { method: "DELETE", pattern: /^\/api\/projects\/([0-9a-f]+)$/, handler: (_request, env, session, [id]) => handleDeleteProject(env, session, id) },
    { method: "PUT", pattern: /^\/api\/projects\/([0-9a-f]+)\/settings$/, handler: (request, env, session, [id]) => handleSaveProjectSettings(request, env, session, id) },
    { method: "PUT", pattern: /^\/api\/projects\/([0-9a-f]+)\/public$/, handler: (request, env, session, [id]) => handleSetProjectPublic(request, env, session, id) },
    { method: "PUT", pattern: /^\/api\/projects\/([0-9a-f]+)\/file$/, handler: (request, env, session, [id]) => handleWriteFile(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/mkdir$/, handler: (request, env, session, [id]) => handleCreateDirectory(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/import$/, handler: (request, env, session, [id]) => handleImportEntries(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/delete$/, handler: (request, env, session, [id]) => handleDeleteEntry(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/rename$/, handler: (request, env, session, [id]) => handleRenameEntry(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/copy$/, handler: (request, env, session, [id]) => handleCopyEntry(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/order$/, handler: (request, env, session, [id]) => handleOrderEntries(request, env, session, id) },
    { method: "POST", pattern: /^\/api\/projects\/([0-9a-f]+)\/disabled$/, handler: (request, env, session, [id]) => handleSetDisabled(request, env, session, id) },
];

async function handleApi(request: Request, env: Env): Promise<Response> {
    // Cookies are SameSite=Strict, but also reject cross-site state-changing requests from older browsers.
    const fetchSite = request.headers.get("Sec-Fetch-Site");
    if (request.method !== "GET" && fetchSite !== null && fetchSite !== "same-origin") {
        throw new HttpError(403, "Cross-site requests are not allowed.");
    }

    const { pathname } = new URL(request.url);
    if (request.method === "GET" && pathname === "/api/auth/providers") {
        return handleProviders(env);
    }
    // Top-level navigations (redirects to and from Discord/Google), not fetch() calls.
    const oauthMatch = /^\/api\/auth\/([a-z]+)\/(start|callback)$/.exec(pathname);
    if (request.method === "GET" && oauthMatch) {
        return oauthMatch[2] === "start" ? handleOAuthStart(request, env, oauthMatch[1]) : handleOAuthCallback(request, env, oauthMatch[1]);
    }
    if (request.method === "POST" && pathname === "/api/logout") {
        return handleLogout(request, env);
    }
    // Public projects can be viewed without session.
    const filesMatch = /^\/api\/projects\/([0-9a-f]+)\/files$/.exec(pathname);
    if (request.method === "GET" && filesMatch) {
        const session = await getSession(request, env);
        const response = await handleGetFiles(env, session, filesMatch[1]);
        if (session?.setCookie) {
            response.headers.append("Set-Cookie", session.setCookie);
        }
        return response;
    }

    let pathMatched = false;
    for (const route of routes) {
        const match = route.pattern.exec(pathname);
        if (!match) {
            continue;
        }
        pathMatched = true;
        if (route.method !== request.method) {
            continue;
        }
        const session = await requireSession(request, env);
        const response = await route.handler(request, env, session, match.slice(1));
        if (session.setCookie) {
            response.headers.append("Set-Cookie", session.setCookie);
        }
        return response;
    }
    throw new HttpError(pathMatched ? 405 : 404, pathMatched ? "Method not allowed." : "Not found.");
}

export default {
    async fetch(request, env): Promise<Response> {
        const { pathname } = new URL(request.url);
        if (!pathname.startsWith("/api/")) {
            return env.ASSETS.fetch(request);
        }
        try {
            return await handleApi(request, env);
        } catch (error) {
            if (error instanceof HttpError) {
                return json({ ...error.body, error: error.message }, error.status);
            }
            console.error(error);
            return json({ error: `Internal server error: ${error instanceof Error ? error.message : String(error)}` }, 500);
        }
    },
} satisfies ExportedHandler<Env>;
