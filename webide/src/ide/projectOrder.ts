import { computed } from "vue";

import { basename, dirname } from "./paths";
import { type EntryInfo, isCodeFile, workspace } from "./workspace";

/*
 * The order of the explorer tree: the entries of each folder are ordered by position, which the user changes by
 * dragging them. It is also the compilation order: the project is compiled as all its OverPy and workshop files
 * that are not disabled, in this order (see lsp/project.ts).
 */

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

export const childrenByParent = computed(() => {
    const map = new Map<string, EntryInfo[]>();
    for (const entry of workspace.entries.values()) {
        const parent = dirname(entry.path);
        const children = map.get(parent) ?? [];
        children.push(entry);
        map.set(parent, children);
    }
    for (const children of map.values()) {
        // Equal positions can only come from concurrent edits (e.g. in two browser tabs).
        children.sort((a, b) => a.position - b.position || collator.compare(basename(a.path), basename(b.path)));
    }
    return map;
});

/** The paths of the entries of a folder, in order. */
export function childPaths(folder: string): string[] {
    return (childrenByParent.value.get(folder) ?? []).map((entry) => entry.path);
}

/** Every entry, in explorer order (a folder, then its content). */
export const orderedEntries = computed(() => {
    const result: EntryInfo[] = [];
    const visit = (directory: string) => {
        for (const entry of childrenByParent.value.get(directory) ?? []) {
            result.push(entry);
            if (entry.type === "dir") {
                visit(entry.path);
            }
        }
    };
    visit("");
    return result;
});

/** OverPy and workshop files that are not disabled, in explorer order. */
export const orderedCodeFiles = computed(() => {
    const result: string[] = [];
    const visit = (directory: string) => {
        for (const entry of childrenByParent.value.get(directory) ?? []) {
            if (entry.disabled) {
                continue;
            }
            if (entry.type === "dir") {
                visit(entry.path);
            } else if (isCodeFile(entry.path)) {
                result.push(entry.path);
            }
        }
    };
    visit("");
    return result;
});
