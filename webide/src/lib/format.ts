const relativeTimeFormat = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 365 * 24 * 3600 * 1000],
    ["month", 30 * 24 * 3600 * 1000],
    ["week", 7 * 24 * 3600 * 1000],
    ["day", 24 * 3600 * 1000],
    ["hour", 3600 * 1000],
    ["minute", 60 * 1000],
];

export function formatRelativeTime(timestamp: number): string {
    const elapsed = timestamp - Date.now();
    for (const [unit, duration] of units) {
        if (Math.abs(elapsed) >= duration) {
            return relativeTimeFormat.format(Math.round(elapsed / duration), unit);
        }
    }
    return "just now";
}

export function formatBytes(bytes: number): string {
    if (bytes < 1024) {
        return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
