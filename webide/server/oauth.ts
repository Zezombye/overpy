import { AUTH_PROVIDER_NAMES, AUTH_PROVIDERS, type AuthProvider } from "../shared/api";
import { type Env, HttpError } from "./http";

/* OAuth 2.0 authorization code flow with Discord and Google (the server is a confidential client). */

export interface ProviderProfile {
    id: string;
    name: string;
    avatarUrl: string | null;
}

interface ProviderDefinition {
    authorizeUrl: string;
    tokenUrl: string;
    scope: string;
    extraAuthorizeParams: Record<string, string>;
    /** How the token endpoint expects the client credentials: form fields, or HTTP Basic authentication. */
    tokenAuth: "body" | "basic";
    credentials: (env: Env) => { clientId?: string; clientSecret?: string };
    fetchProfile: (accessToken: string) => Promise<ProviderProfile>;
}

// Discord's API asks clients to identify themselves.
const USER_AGENT = "OverPyWebIDE (https://github.com/Zezombye/overpy, 1.0)";

async function fetchJson<T>(what: string, url: string, init: RequestInit): Promise<T> {
    const response = await fetch(url, { ...init, headers: { "User-Agent": USER_AGENT, Accept: "application/json", ...init.headers } });
    const text = await response.text();
    if (!response.ok) {
        throw new Error(`${what} failed: HTTP ${response.status} ${text.slice(0, 300)}`);
    }
    return JSON.parse(text) as T;
}

const providers: Record<AuthProvider, ProviderDefinition> = {
    battlenet: {
        // Endpoints from https://oauth.battle.net/.well-known/openid-configuration (global host, all regions except China).
        authorizeUrl: "https://oauth.battle.net/authorize",
        tokenUrl: "https://oauth.battle.net/token",
        scope: "openid",
        extraAuthorizeParams: {},
        tokenAuth: "basic",
        credentials: (env) => ({ clientId: env.BATTLENET_CLIENT_ID, clientSecret: env.BATTLENET_CLIENT_SECRET }),
        fetchProfile: async (accessToken) => {
            const user = await fetchJson<{ sub: string; battletag?: string }>("Fetching the Battle.net profile", "https://oauth.battle.net/userinfo", {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            // Battle.net has no profile picture.
            return { id: user.sub, name: user.battletag ?? "Battle.net user", avatarUrl: null };
        },
    },
    discord: {
        authorizeUrl: "https://discord.com/oauth2/authorize",
        tokenUrl: "https://discord.com/api/oauth2/token",
        scope: "identify",
        // Skip the consent screen if the user already authorized the app.
        extraAuthorizeParams: { prompt: "none" },
        tokenAuth: "body",
        credentials: (env) => ({ clientId: env.DISCORD_CLIENT_ID, clientSecret: env.DISCORD_CLIENT_SECRET }),
        fetchProfile: async (accessToken) => {
            const user = await fetchJson<{ id: string; username: string; global_name: string | null; avatar: string | null }>(
                "Fetching the Discord profile",
                "https://discord.com/api/users/@me",
                { headers: { Authorization: `Bearer ${accessToken}` } },
            );
            return {
                id: user.id,
                name: user.global_name ?? user.username,
                avatarUrl: user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64` : null,
            };
        },
    },
    google: {
        authorizeUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenUrl: "https://oauth2.googleapis.com/token",
        scope: "openid profile",
        extraAuthorizeParams: { prompt: "select_account" },
        tokenAuth: "body",
        credentials: (env) => ({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET }),
        fetchProfile: async (accessToken) => {
            const user = await fetchJson<{ sub: string; name?: string; picture?: string }>(
                "Fetching the Google profile",
                "https://openidconnect.googleapis.com/v1/userinfo",
                { headers: { Authorization: `Bearer ${accessToken}` } },
            );
            return { id: user.sub, name: user.name ?? "Google user", avatarUrl: user.picture ?? null };
        },
    },
};

export function enabledProviders(env: Env): AuthProvider[] {
    return AUTH_PROVIDERS.filter((provider) => {
        const { clientId, clientSecret } = providers[provider].credentials(env);
        return Boolean(clientId && clientSecret);
    });
}

export function parseProvider(value: string, env: Env): AuthProvider {
    const provider = AUTH_PROVIDERS.find((candidate) => candidate === value);
    if (!provider) {
        throw new HttpError(404, "Unknown sign-in provider.");
    }
    if (!enabledProviders(env).includes(provider)) {
        throw new HttpError(404, `Sign-in with ${AUTH_PROVIDER_NAMES[provider]} is not configured on this server.`);
    }
    return provider;
}

function credentials(provider: AuthProvider, env: Env): { clientId: string; clientSecret: string } {
    const { clientId, clientSecret } = providers[provider].credentials(env);
    if (!clientId || !clientSecret) {
        throw new Error(`${AUTH_PROVIDER_NAMES[provider]} OAuth credentials are not configured`);
    }
    return { clientId, clientSecret };
}

export function authorizeUrl(provider: AuthProvider, env: Env, redirectUri: string, state: string): string {
    const definition = providers[provider];
    const params = new URLSearchParams({
        response_type: "code",
        client_id: credentials(provider, env).clientId,
        redirect_uri: redirectUri,
        scope: definition.scope,
        state,
        ...definition.extraAuthorizeParams,
    });
    return `${definition.authorizeUrl}?${params}`;
}

/** Exchanges the authorization code and returns the user's profile. */
export async function fetchProviderProfile(provider: AuthProvider, env: Env, redirectUri: string, code: string): Promise<ProviderProfile> {
    const definition = providers[provider];
    const { clientId, clientSecret } = credentials(provider, env);
    const body = new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: redirectUri });
    const headers: Record<string, string> = { "Content-Type": "application/x-www-form-urlencoded" };
    if (definition.tokenAuth === "basic") {
        headers.Authorization = `Basic ${btoa(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`)}`;
    } else {
        body.set("client_id", clientId);
        body.set("client_secret", clientSecret);
    }
    const token = await fetchJson<{ access_token: string }>(`The ${AUTH_PROVIDER_NAMES[provider]} token exchange`, definition.tokenUrl, {
        method: "POST",
        headers,
        body,
    });
    return definition.fetchProfile(token.access_token);
}
