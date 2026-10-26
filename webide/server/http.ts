export interface Env {
    DB: D1Database;
    ASSETS: Fetcher;
    /** OAuth apps. A provider is offered only if both its client id and secret are set. */
    BATTLENET_CLIENT_ID?: string;
    BATTLENET_CLIENT_SECRET?: string;
    DISCORD_CLIENT_ID?: string;
    DISCORD_CLIENT_SECRET?: string;
    GOOGLE_CLIENT_ID?: string;
    GOOGLE_CLIENT_SECRET?: string;
}

/**
 * Header with the origin seen by the browser, set by the proxies in front of the Worker (the Netlify
 * proxy of overpy.zez.dev, Vite in development): the request URL that the Worker receives is its own.
 */
const PUBLIC_ORIGIN_HEADER = "X-Public-Origin";

/** Origin of the page the request comes from, e.g. "https://overpy.zez.dev". */
export function publicOrigin(request: Request): string {
    const forwarded = request.headers.get(PUBLIC_ORIGIN_HEADER);
    if (forwarded === null) {
        return new URL(request.url).origin;
    }
    let url: URL;
    try {
        url = new URL(forwarded);
    } catch {
        throw new HttpError(400, `Invalid ${PUBLIC_ORIGIN_HEADER} header.`);
    }
    if ((url.protocol !== "https:" && url.protocol !== "http:") || url.origin !== forwarded) {
        throw new HttpError(400, `Invalid ${PUBLIC_ORIGIN_HEADER} header.`);
    }
    return url.origin;
}

export class HttpError extends Error {
    constructor(
        readonly status: number,
        message: string,
        readonly body?: Record<string, unknown>,
    ) {
        super(message);
    }
}

export function json(data: unknown, status = 200, headers: HeadersInit = {}): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            ...headers,
        },
    });
}

const MAX_BODY_BYTES = 3_000_000;

export async function readJsonObject(request: Request): Promise<Record<string, unknown>> {
    if (!request.headers.get("Content-Type")?.startsWith("application/json")) {
        throw new HttpError(415, "Expected a JSON body.");
    }
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) {
        throw new HttpError(413, "Request body too large.");
    }
    let body: unknown;
    try {
        body = JSON.parse(text);
    } catch {
        throw new HttpError(400, "Invalid JSON body.");
    }
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        throw new HttpError(400, "Expected a JSON object.");
    }
    return body as Record<string, unknown>;
}

export function getString(body: Record<string, unknown>, key: string): string {
    const value = body[key];
    if (typeof value !== "string") {
        throw new HttpError(400, `Field '${key}' must be a string.`);
    }
    return value;
}

export function getOptionalNumber(body: Record<string, unknown>, key: string): number | undefined {
    const value = body[key];
    if (value === undefined) {
        return undefined;
    }
    if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new HttpError(400, `Field '${key}' must be a number.`);
    }
    return value;
}

export function getOptionalBoolean(body: Record<string, unknown>, key: string): boolean {
    const value = body[key];
    if (value === undefined) {
        return false;
    }
    if (typeof value !== "boolean") {
        throw new HttpError(400, `Field '${key}' must be a boolean.`);
    }
    return value;
}

export function randomHex(bytes: number): string {
    return toHex(crypto.getRandomValues(new Uint8Array(bytes)));
}

export function toHex(bytes: Uint8Array): string {
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function sha256Hex(text: string): Promise<string> {
    return toHex(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))));
}
