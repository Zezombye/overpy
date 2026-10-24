/*
 * Per-browser UI state (layout, open editors). Browser storage can be unavailable (private mode,
 * blocked site data): the IDE then works without persisting this state, with a console warning.
 */

export function readLocal<T>(key: string): T | undefined {
    try {
        const raw = localStorage.getItem(key);
        return raw === null ? undefined : (JSON.parse(raw) as T);
    } catch (error) {
        console.warn(`Could not read '${key}' from localStorage:`, error);
        return undefined;
    }
}

export function writeLocal(key: string, value: unknown): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Could not write '${key}' to localStorage:`, error);
    }
}
