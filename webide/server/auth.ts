import { AUTH_PROVIDER_NAMES, type AuthProvider, MAX_SETTINGS_BYTES, type MeResponse, type ProvidersResponse, type User } from "../shared/api";
import { type Env, HttpError, json, randomHex, readJsonObject, sha256Hex, timingSafeEqualStrings } from "./http";
import { authorizeUrl, enabledProviders, fetchProviderProfile, parseProvider } from "./oauth";

/*
 * Sign-in only goes through Discord or Google (OAuth authorization code flow): no password is stored.
 * Sessions are random tokens in an HttpOnly, SameSite=Strict cookie; the database stores their hash.
 */

const SESSION_COOKIE = "__Host-overpy_session";
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000;
const SESSION_RENEW_AFTER_MS = 24 * 60 * 60 * 1000;
// SameSite=Lax: it must be sent with the provider's redirect back to the callback.
const OAUTH_STATE_COOKIE = "__Host-overpy_oauth";
const OAUTH_STATE_TTL_MS = 10 * 60 * 1000;

interface UserRow {
    id: number;
    display_name: string;
    avatar_url: string | null;
    settings: string;
}

interface OAuthStateRow {
    state: string;
    provider: string;
    next: string;
    link_user_id: number | null;
    registration_code: string | null;
    created_at: number;
}

export interface Session {
    user: User;
    /** Set when the session cookie must be re-sent (renewed session). */
    setCookie?: string;
}

function toUser(row: UserRow): User {
    return { id: row.id, name: row.display_name, avatarUrl: row.avatar_url };
}

function sessionCookie(token: string, maxAgeSeconds: number): string {
    return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAgeSeconds}`;
}

function oauthStateCookie(state: string, maxAgeSeconds: number): string {
    return `${OAUTH_STATE_COOKIE}=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAgeSeconds}`;
}

function getCookie(request: Request, name: string): string | undefined {
    for (const cookie of (request.headers.get("Cookie") ?? "").split(";")) {
        const [cookieName, ...value] = cookie.trim().split("=");
        if (cookieName === name) {
            return value.join("=");
        }
    }
    return undefined;
}

async function createSession(env: Env, userId: number): Promise<string> {
    const token = randomHex(32);
    const now = Date.now();
    await env.DB.batch([
        env.DB.prepare("DELETE FROM sessions WHERE expires_at < ?").bind(now),
        env.DB.prepare("INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)").bind(
            await sha256Hex(token),
            userId,
            now,
            now + SESSION_DURATION_MS,
        ),
    ]);
    return sessionCookie(token, SESSION_DURATION_MS / 1000);
}

/** Returns the session of the request, or throws a 401. */
export async function requireSession(request: Request, env: Env): Promise<Session> {
    const token = getCookie(request, SESSION_COOKIE);
    if (!token) {
        throw new HttpError(401, "Not logged in.");
    }
    const tokenHash = await sha256Hex(token);
    const row = await env.DB.prepare(
        "SELECT sessions.expires_at, users.id, users.display_name, users.avatar_url, users.settings FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = ?",
    )
        .bind(tokenHash)
        .first<UserRow & { expires_at: number }>();
    const now = Date.now();
    if (!row || row.expires_at < now) {
        throw new HttpError(401, "Session expired, please sign in again.");
    }
    const session: Session = { user: toUser(row) };
    if (row.expires_at - now < SESSION_DURATION_MS - SESSION_RENEW_AFTER_MS) {
        await env.DB.prepare("UPDATE sessions SET expires_at = ? WHERE token_hash = ?").bind(now + SESSION_DURATION_MS, tokenHash).run();
        session.setCookie = sessionCookie(token, SESSION_DURATION_MS / 1000);
    }
    return session;
}

export function handleProviders(env: Env): Response {
    return json({ providers: enabledProviders(env), registrationEnabled: Boolean(env.REGISTRATION_CODE) } satisfies ProvidersResponse);
}

export async function handleMe(env: Env, session: Session): Promise<Response> {
    const [settings, identities] = await env.DB.batch([
        env.DB.prepare("SELECT settings FROM users WHERE id = ?").bind(session.user.id),
        env.DB.prepare("SELECT provider FROM identities WHERE user_id = ? ORDER BY provider").bind(session.user.id),
    ]);
    const settingsRow = settings.results[0] as { settings: string } | undefined;
    if (!settingsRow) {
        throw new HttpError(401, "User not found.");
    }
    return json({
        user: session.user,
        settings: JSON.parse(settingsRow.settings) as Record<string, unknown>,
        identities: (identities.results as { provider: AuthProvider }[]).map((row) => row.provider),
        providers: enabledProviders(env),
    } satisfies MeResponse);
}

export async function handleLogout(request: Request, env: Env): Promise<Response> {
    const token = getCookie(request, SESSION_COOKIE);
    if (token) {
        await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256Hex(token)).run();
    }
    return json({ ok: true }, 200, { "Set-Cookie": sessionCookie("", 0) });
}

export async function handleSaveSettings(request: Request, env: Env, session: Session): Promise<Response> {
    const body = await readJsonObject(request);
    const settings = body.settings;
    if (typeof settings !== "object" || settings === null || Array.isArray(settings)) {
        throw new HttpError(400, "Field 'settings' must be an object.");
    }
    const serialized = JSON.stringify(settings);
    if (serialized.length > MAX_SETTINGS_BYTES) {
        throw new HttpError(413, "Settings too large.");
    }
    await env.DB.prepare("UPDATE users SET settings = ? WHERE id = ?").bind(serialized, session.user.id).run();
    return json({ ok: true });
}

/** Only same-origin paths, so that sign-in cannot be used as an open redirect. */
function safeNext(next: string | null): string {
    return next && next.startsWith("/") && !next.startsWith("//") && !next.includes("\\") && !next.startsWith("/api/") ? next : "/";
}

function callbackUrl(request: Request, env: Env, provider: AuthProvider): string {
    const origin = env.PUBLIC_URL ? env.PUBLIC_URL.replace(/\/+$/, "") : new URL(request.url).origin;
    return `${origin}/api/auth/${provider}/callback`;
}

function redirect(location: string, cookies: string[] = []): Response {
    const headers = new Headers({ Location: location, "Cache-Control": "no-store" });
    for (const cookie of cookies) {
        headers.append("Set-Cookie", cookie);
    }
    return new Response(null, { status: 302, headers });
}

/** Redirects to the provider. Query: `next` (path to return to), `link=1` (link to the current account), `registrationCode`. */
export async function handleOAuthStart(request: Request, env: Env, providerName: string): Promise<Response> {
    const provider = parseProvider(providerName, env);
    const url = new URL(request.url);
    const linkUserId = url.searchParams.get("link") === "1" ? (await requireSession(request, env)).user.id : null;
    const state = randomHex(32);
    const now = Date.now();
    await env.DB.batch([
        env.DB.prepare("DELETE FROM oauth_states WHERE created_at < ?").bind(now - OAUTH_STATE_TTL_MS),
        env.DB.prepare("INSERT INTO oauth_states (state, provider, next, link_user_id, registration_code, created_at) VALUES (?, ?, ?, ?, ?, ?)").bind(
            state,
            provider,
            safeNext(url.searchParams.get("next")),
            linkUserId,
            url.searchParams.get("registrationCode") || null,
            now,
        ),
    ]);
    return redirect(authorizeUrl(provider, env, callbackUrl(request, env, provider), state), [oauthStateCookie(state, OAUTH_STATE_TTL_MS / 1000)]);
}

class SignInError extends Error {}

/** Handles the provider's redirect: signs in (creating the account if needed) or links the provider to the current account. */
export async function handleOAuthCallback(request: Request, env: Env, providerName: string): Promise<Response> {
    const clearStateCookie = oauthStateCookie("", 0);
    let next = "/";
    let linking = false;
    try {
        const provider = parseProvider(providerName, env);
        const providerLabel = AUTH_PROVIDER_NAMES[provider];
        const url = new URL(request.url);
        const state = url.searchParams.get("state");
        if (url.searchParams.get("error")) {
            throw new SignInError(`Sign-in with ${providerLabel} was cancelled (${url.searchParams.get("error")}).`);
        }
        // The state must be the one this browser started with (prevents login CSRF).
        if (!state || state !== getCookie(request, OAUTH_STATE_COOKIE)) {
            throw new SignInError("The sign-in request expired or was started in another browser. Please try again.");
        }
        const stateRow = await env.DB.prepare("DELETE FROM oauth_states WHERE state = ? RETURNING *").bind(state).first<OAuthStateRow>();
        if (!stateRow || stateRow.provider !== provider || stateRow.created_at < Date.now() - OAUTH_STATE_TTL_MS) {
            throw new SignInError("The sign-in request expired. Please try again.");
        }
        next = stateRow.next;
        linking = stateRow.link_user_id !== null;
        const code = url.searchParams.get("code");
        if (!code) {
            throw new SignInError(`${providerLabel} did not return an authorization code.`);
        }

        const profile = await fetchProviderProfile(provider, env, callbackUrl(request, env, provider), code);
        const identity = await env.DB.prepare("SELECT user_id FROM identities WHERE provider = ? AND provider_user_id = ?")
            .bind(provider, profile.id)
            .first<{ user_id: number }>();
        const now = Date.now();

        if (stateRow.link_user_id !== null) {
            if (identity && identity.user_id !== stateRow.link_user_id) {
                throw new SignInError(`This ${providerLabel} account is already used by another OverPy IDE account.`);
            }
            if (!identity) {
                const existing = await env.DB.prepare("SELECT 1 FROM identities WHERE user_id = ? AND provider = ?").bind(stateRow.link_user_id, provider).first();
                if (existing) {
                    throw new SignInError(`Your account is already linked to another ${providerLabel} account.`);
                }
                await env.DB.prepare("INSERT INTO identities (provider, provider_user_id, user_id, created_at) VALUES (?, ?, ?, ?)")
                    .bind(provider, profile.id, stateRow.link_user_id, now)
                    .run();
            }
            return redirect(next, [clearStateCookie]);
        }

        let userId: number;
        if (identity) {
            userId = identity.user_id;
            await env.DB.prepare("UPDATE users SET display_name = ?, avatar_url = ? WHERE id = ?").bind(profile.name, profile.avatarUrl, userId).run();
        } else {
            if (!env.REGISTRATION_CODE) {
                throw new SignInError("Creating new accounts is disabled on this server.");
            }
            if (!stateRow.registration_code || !timingSafeEqualStrings(stateRow.registration_code, env.REGISTRATION_CODE)) {
                throw new SignInError(
                    `This ${providerLabel} account has no OverPy IDE account yet. ${stateRow.registration_code ? "The registration code is invalid." : "Enter the registration code to create one."}`,
                );
            }
            // One transaction, so that a user never exists without its identity.
            await env.DB.batch([
                env.DB.prepare("INSERT INTO users (display_name, avatar_url, created_at) VALUES (?, ?, ?)").bind(profile.name, profile.avatarUrl, now),
                env.DB.prepare("INSERT INTO identities (provider, provider_user_id, user_id, created_at) VALUES (?, ?, last_insert_rowid(), ?)").bind(provider, profile.id, now),
            ]);
            const created = await env.DB.prepare("SELECT user_id FROM identities WHERE provider = ? AND provider_user_id = ?").bind(provider, profile.id).first<{ user_id: number }>();
            if (!created) {
                throw new Error("The new account could not be found after its creation");
            }
            userId = created.user_id;
        }
        return redirect(next, [clearStateCookie, await createSession(env, userId)]);
    } catch (error) {
        if (!(error instanceof SignInError)) {
            console.error(error);
        }
        const message = error instanceof Error ? error.message : String(error);
        if (linking) {
            // Already signed in: go back to the page, which shows the error.
            return redirect(`${next}${next.includes("?") ? "&" : "?"}${new URLSearchParams({ authError: message })}`, [clearStateCookie]);
        }
        return redirect(`/login?${new URLSearchParams({ error: message, next })}`, [clearStateCookie]);
    }
}
