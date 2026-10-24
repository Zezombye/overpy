import { computed, reactive } from "vue";

import { monaco } from "./monaco/setup";
import { dirname } from "./paths";
import { pathOfUri } from "./workspace";

export interface Problem {
    path: string;
    severity: "error" | "warning" | "info";
    message: string;
    source?: string;
    code?: string;
    range: monaco.IRange;
}

export const problems = reactive({
    list: [] as Problem[],
});

export const problemCounts = computed(() => {
    const counts = { error: 0, warning: 0, info: 0 };
    for (const problem of problems.list) {
        counts[problem.severity]++;
    }
    return counts;
});

/** Worst severity per file and folder, for the explorer decorations. */
export const problemsByPath = computed(() => {
    const byPath = new Map<string, { errors: number; warnings: number }>();
    for (const problem of problems.list) {
        if (problem.severity === "info") {
            continue;
        }
        for (let path = problem.path; ; path = dirname(path)) {
            const counts = byPath.get(path) ?? { errors: 0, warnings: 0 };
            counts[problem.severity === "error" ? "errors" : "warnings"]++;
            byPath.set(path, counts);
            if (path === "") {
                break;
            }
        }
    }
    return byPath;
});

function toSeverity(severity: monaco.MarkerSeverity): Problem["severity"] | undefined {
    switch (severity) {
        case monaco.MarkerSeverity.Error:
            return "error";
        case monaco.MarkerSeverity.Warning:
            return "warning";
        case monaco.MarkerSeverity.Info:
            return "info";
        default:
            // Hints are not shown in the Problems panel, like in VS Code.
            return undefined;
    }
}

const severityOrder = { error: 0, warning: 1, info: 2 };

function update(): void {
    const list: Problem[] = [];
    for (const marker of monaco.editor.getModelMarkers({})) {
        const path = pathOfUri(marker.resource);
        const severity = toSeverity(marker.severity);
        if (path === undefined || !severity) {
            continue;
        }
        list.push({
            path,
            severity,
            message: marker.message,
            source: marker.source,
            code: typeof marker.code === "string" ? marker.code : marker.code?.value,
            range: {
                startLineNumber: marker.startLineNumber,
                startColumn: marker.startColumn,
                endLineNumber: marker.endLineNumber,
                endColumn: marker.endColumn,
            },
        });
    }
    list.sort(
        (a, b) =>
            a.path.localeCompare(b.path) ||
            severityOrder[a.severity] - severityOrder[b.severity] ||
            a.range.startLineNumber - b.range.startLineNumber ||
            a.range.startColumn - b.range.startColumn,
    );
    problems.list = list;
}

export function trackProblems(): monaco.IDisposable {
    let scheduled = false;
    update();
    return monaco.editor.onDidChangeMarkers(() => {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(() => {
                scheduled = false;
                update();
            });
        }
    });
}
