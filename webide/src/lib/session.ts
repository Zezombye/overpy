import { reactive } from "vue";

import type { AuthProvider, User } from "../../shared/api";
import { api, ApiError } from "./api";
import { loadUserSettings } from "./settings";

export const session = reactive({
    user: null as User | null,
    /** Providers linked to the account. */
    identities: [] as AuthProvider[],
    /** Providers configured on the server. */
    providers: [] as AuthProvider[],
});

/** Loads the current user. Resolves to false if not signed in. */
export async function loadSession(): Promise<boolean> {
    try {
        const me = await api.me();
        Object.assign(session, { user: me.user, identities: me.identities, providers: me.providers });
        loadUserSettings(me.settings);
        return true;
    } catch (error) {
        if (error instanceof ApiError && error.status === 401) {
            session.user = null;
            return false;
        }
        throw error;
    }
}

export async function logout(): Promise<void> {
    await api.logout();
    session.user = null;
}

/** Providers that can still be linked to the account. */
export function linkableProviders(): AuthProvider[] {
    return session.providers.filter((provider) => !session.identities.includes(provider));
}

/**
 * Error from a failed account linking (the server redirects back with ?authError=...).
 * Removes it from the URL so that it is shown only once.
 */
export function takeAuthError(): string | null {
    const url = new URL(location.href);
    const error = url.searchParams.get("authError");
    if (error !== null) {
        url.searchParams.delete("authError");
        history.replaceState(history.state, "", url);
    }
    return error;
}
