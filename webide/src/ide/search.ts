import { reactive } from "vue";

import { monaco } from "./monaco/setup";
import { filePaths, getModel } from "./workspace";

export interface SearchMatch {
    range: monaco.Range;
    /** The line, trimmed around the match. */
    preview: { before: string; match: string; after: string };
}

export interface FileSearchResult {
    path: string;
    matches: SearchMatch[];
}

export const search = reactive({
    query: "",
    replacement: "",
    matchCase: false,
    wholeWord: false,
    regex: false,
    showReplace: false,
    results: [] as FileSearchResult[],
    totalMatches: 0,
    error: null as string | null,
    collapsed: new Set<string>(),
    /** True if the result limit was hit. */
    truncated: false,
    /** Incremented to focus the search input. */
    focusRequest: 0,
});

const MAX_MATCHES = 5000;
const PREVIEW_CONTEXT = 30;

function wordSeparators(): string | null {
    // Monaco's default word separators, used for whole word matching.
    return search.wholeWord ? "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?" : null;
}

/** Searches the content of every file, including unsaved changes. */
export function runSearch(): void {
    search.error = null;
    search.results = [];
    search.totalMatches = 0;
    search.truncated = false;
    if (search.query === "") {
        return;
    }
    if (search.regex) {
        try {
            new RegExp(search.query);
        } catch (error) {
            search.error = error instanceof Error ? error.message : String(error);
            return;
        }
    }
    const results: FileSearchResult[] = [];
    let total = 0;
    for (const path of filePaths().sort()) {
        const model = getModel(path);
        if (!model) {
            continue;
        }
        const found = model.findMatches(search.query, false, search.regex, search.matchCase, wordSeparators(), false, MAX_MATCHES - total);
        if (found.length === 0) {
            continue;
        }
        results.push({
            path,
            matches: found.map((match) => {
                const line = model.getLineContent(match.range.startLineNumber);
                const start = match.range.startColumn - 1;
                const end = match.range.startLineNumber === match.range.endLineNumber ? match.range.endColumn - 1 : line.length;
                const beforeStart = Math.max(0, start - PREVIEW_CONTEXT);
                return {
                    range: match.range,
                    preview: {
                        before: (beforeStart > 0 ? "…" : "") + line.substring(beforeStart, start).trimStart(),
                        match: line.substring(start, end),
                        after: line.substring(end, end + 200),
                    },
                };
            }),
        });
        total += found.length;
        if (total >= MAX_MATCHES) {
            search.truncated = true;
            break;
        }
    }
    search.results = results;
    search.totalMatches = total;
}

/** Replaces every match in the given files (or all results). The files are left unsaved, like in VS Code. */
export function replaceAll(paths?: string[]): number {
    let replaced = 0;
    for (const result of search.results) {
        if (paths && !paths.includes(result.path)) {
            continue;
        }
        const model = getModel(result.path);
        if (!model) {
            continue;
        }
        const matches = model.findMatches(search.query, false, search.regex, search.matchCase, wordSeparators(), search.regex);
        model.pushEditOperations(
            null,
            matches.map((match) => ({
                range: match.range,
                text: search.regex && match.matches ? expandReplacement(search.replacement, match.matches) : search.replacement,
            })),
            () => null,
        );
        replaced += matches.length;
    }
    runSearch();
    return replaced;
}

/** Expands $1, $& and $$ in a regex replacement string. */
function expandReplacement(replacement: string, groups: string[]): string {
    return replacement.replace(/\$(\$|&|\d+)/g, (all, token: string) => {
        if (token === "$") {
            return "$";
        }
        if (token === "&") {
            return groups[0];
        }
        return groups[Number(token)] ?? all;
    });
}
