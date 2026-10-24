import { computed } from "vue";

import { settings } from "../lib/settings";
import { compareEntries, dirname } from "./paths";
import { type EntryInfo, isCodeFile, workspace } from "./workspace";

/*
 * The order of the explorer tree. It is also the compilation order: the project is compiled as all
 * its OverPy and workshop files, in this order (see lsp/project.ts).
 */

export const childrenByParent = computed(() => {
    const foldersFirst = settings["explorer.sortOrder"] === "default";
    const map = new Map<string, EntryInfo[]>();
    for (const entry of workspace.entries.values()) {
        const parent = dirname(entry.path);
        const children = map.get(parent) ?? [];
        children.push(entry);
        map.set(parent, children);
    }
    for (const children of map.values()) {
        children.sort((a, b) => compareEntries(a, b, foldersFirst));
    }
    return map;
});

/** OverPy and workshop files, in explorer order. */
export const orderedCodeFiles = computed(() => {
    const result: string[] = [];
    const visit = (directory: string) => {
        for (const entry of childrenByParent.value.get(directory) ?? []) {
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
