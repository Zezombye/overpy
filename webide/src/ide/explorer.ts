import { reactive, watch } from "vue";

import { MAX_FILE_BYTES, validateEntryPath } from "../../shared/api";
import { getSetting } from "../lib/settings";
import { confirm } from "./dialogs";
import { activeFilePath, openFile } from "./editors";
import { showSideBarView } from "./layout";
import { showError, showInfo } from "./notifications";
import { getTemplate } from "./overpy";
import { basename, dirname, extension, isSameOrChild, joinPath, replacePrefix } from "./paths";
import { childPaths } from "./projectOrder";
import { readLocal, writeLocal } from "./storage";
import {
    checkWritable,
    copyEntry,
    createDirectory,
    createFile,
    deleteEntry,
    getModel,
    getSavedContent,
    isDirectory,
    isFile,
    isOverpyFile,
    onDidDeleteEntries,
    onDidRenameEntry,
    OVERPY_EXTENSION,
    renameEntry,
    reorderEntries,
    setEntryDisabled,
    WORKSHOP_EXTENSION,
    workspace,
    writeFile,
} from "./workspace";
import { createZip, downloadBlob } from "./zip";

/** New files are OverPy files unless created as workshop files, or given another extension. */
export type NewFileType = "overpy" | "workshop";

export type ExplorerEdit =
    | { kind: "newFile"; fileType: NewFileType; parent: string; value: string; error: string | null }
    | { kind: "newFolder"; parent: string; value: string; error: string | null }
    | { kind: "rename"; path: string; value: string; error: string | null };

export const explorer = reactive({
    expanded: new Set<string>(),
    selected: null as string | null,
    editing: null as ExplorerEdit | null,
    /** Incremented to make the tree scroll the selected entry into view. */
    revealRequest: 0,
});

const storageKey = () => `overpy-ide.explorer.${workspace.project?.id}`;

export function restoreExplorerState(): void {
    for (const path of readLocal<string[]>(storageKey()) ?? []) {
        if (isDirectory(path)) {
            explorer.expanded.add(path);
        }
    }
    watch(
        () => [...explorer.expanded],
        (expanded) => writeLocal(storageKey(), expanded),
    );
}

onDidDeleteEntries.on((paths) => {
    for (const path of paths) {
        explorer.expanded.delete(path);
        if (explorer.selected === path) {
            explorer.selected = null;
        }
    }
});

onDidRenameEntry.on(({ from, to }) => {
    for (const path of [...explorer.expanded]) {
        if (isSameOrChild(path, from)) {
            explorer.expanded.delete(path);
            explorer.expanded.add(replacePrefix(path, from, to));
        }
    }
    if (explorer.selected && isSameOrChild(explorer.selected, from)) {
        explorer.selected = replacePrefix(explorer.selected, from, to);
    }
});

export function revealInExplorer(path: string): void {
    for (let parent = dirname(path); parent !== ""; parent = dirname(parent)) {
        explorer.expanded.add(parent);
    }
    explorer.selected = path;
    explorer.revealRequest++;
    showSideBarView("explorer");
}

/** The folder new files are created in: the selected folder, or the folder of the selected file. */
function targetFolder(): string {
    const selected = explorer.selected ?? activeFilePath.value;
    if (selected === null) {
        return "";
    }
    return isDirectory(selected) ? selected : dirname(selected);
}

export function startNewFile(parent = targetFolder(), fileType: NewFileType = "overpy"): void {
    checkWritable();
    showSideBarView("explorer");
    if (parent !== "") {
        revealInExplorer(parent);
    }
    explorer.editing = { kind: "newFile", fileType, parent, value: "", error: null };
}

export function startNewFolder(parent = targetFolder()): void {
    checkWritable();
    showSideBarView("explorer");
    if (parent !== "") {
        revealInExplorer(parent);
    }
    explorer.editing = { kind: "newFolder", parent, value: "", error: null };
}

export function startRename(path: string): void {
    checkWritable();
    revealInExplorer(path);
    explorer.editing = { kind: "rename", path, value: basename(path), error: null };
}

function editingTargetPath(edit: ExplorerEdit): string {
    const value = edit.value.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
    if (edit.kind === "rename") {
        return joinPath(dirname(edit.path), value);
    }
    if (edit.kind === "newFile") {
        // Workshop files always get their extension; other names without extension become OverPy files.
        if (edit.fileType === "workshop" && extension(value) !== WORKSHOP_EXTENSION) {
            return joinPath(edit.parent, value + WORKSHOP_EXTENSION);
        }
        if (edit.fileType === "overpy" && extension(value) === "") {
            return joinPath(edit.parent, value + OVERPY_EXTENSION);
        }
    }
    return joinPath(edit.parent, value);
}

/** Name the new file will get, shown while typing it (e.g. "rules" -> "rules.opy"). */
export function editingTargetName(edit: ExplorerEdit): string {
    return basename(editingTargetPath(edit));
}

export function validateEditing(): void {
    const edit = explorer.editing;
    if (!edit) {
        return;
    }
    if (edit.value.trim() === "") {
        edit.error = "A file or folder name must be provided.";
        return;
    }
    const path = editingTargetPath(edit);
    if (edit.kind === "rename" && path === edit.path) {
        edit.error = null;
        return;
    }
    if (workspace.entries.has(path)) {
        edit.error = `A file or folder '${basename(path)}' already exists at this location. Please choose a different name.`;
        return;
    }
    edit.error = validateEntryPath(path);
}

export async function commitEditing(): Promise<void> {
    const edit = explorer.editing;
    if (!edit) {
        return;
    }
    validateEditing();
    if (edit.error) {
        return;
    }
    const path = editingTargetPath(edit);
    explorer.editing = null;
    if (edit.kind === "rename") {
        if (path !== edit.path) {
            await renameEntry(edit.path, path);
            explorer.selected = path;
        }
    } else if (edit.kind === "newFolder") {
        await createDirectory(path);
        revealInExplorer(path);
        explorer.expanded.add(path);
    } else {
        const content = isOverpyFile(path) && getSetting<boolean>("overpy.addTemplateOnNewFile") ? await getTemplate() : "";
        await createFile(path, content);
        revealInExplorer(path);
        openFile(path);
    }
}

export function cancelEditing(): void {
    explorer.editing = null;
}

export async function deleteWithConfirmation(path: string): Promise<void> {
    const folder = isDirectory(path);
    const confirmed = await confirm(
        folder ? `Are you sure you want to permanently delete '${basename(path)}' and its contents?` : `Are you sure you want to permanently delete '${basename(path)}'?`,
        "This action is irreversible!",
        "Delete",
    );
    if (confirmed) {
        await deleteEntry(path);
    }
}

/**
 * Moves a file or folder (drag and drop): into a folder, at its end (`anchor` null), or before or after an entry.
 * The explorer order is also the compilation order.
 */
export async function moveEntry(path: string, folder: string, anchor: { path: string; side: "before" | "after" } | null): Promise<void> {
    if (isSameOrChild(folder, path) || anchor?.path === path) {
        return;
    }
    let target = path;
    if (dirname(path) !== folder) {
        target = joinPath(folder, basename(path));
        if (workspace.entries.has(target)) {
            showError(`A file or folder '${basename(path)}' already exists in the destination folder.`);
            return;
        }
        await renameEntry(path, target);
        if (folder !== "") {
            explorer.expanded.add(folder);
        }
    }
    explorer.selected = target;
    const current = childPaths(folder);
    const order = current.filter((sibling) => sibling !== target);
    const index = anchor === null ? order.length : order.indexOf(anchor.path) + (anchor.side === "after" ? 1 : 0);
    order.splice(index, 0, target);
    if (order.some((sibling, i) => sibling !== current[i])) {
        await reorderEntries(order);
    }
}

/** Moves an entry up or down in its folder. */
export async function moveUpOrDown(path: string, offset: -1 | 1): Promise<void> {
    const order = childPaths(dirname(path));
    const index = order.indexOf(path);
    const newIndex = index + offset;
    if (newIndex < 0 || newIndex >= order.length) {
        return;
    }
    [order[index], order[newIndex]] = [order[newIndex], order[index]];
    await reorderEntries(order);
    explorer.revealRequest++;
}

/** "rules.opy" -> "rules (Copy).opy", then "rules (Copy 2).opy"... (like workshop.codes). */
function copyPath(path: string): string {
    const name = basename(path);
    const ext = isFile(path) ? name.substring(name.length - extension(name).length) : "";
    const stem = name.substring(0, name.length - ext.length).replace(/ \(Copy(?: \d+)?\)$/, "");
    for (let i = 1; ; i++) {
        const candidate = joinPath(dirname(path), `${stem} (Copy${i === 1 ? "" : ` ${i}`})${ext}`);
        if (!workspace.entries.has(candidate)) {
            return candidate;
        }
    }
}

/** Duplicates a file or folder (its saved content) right after it. */
export async function duplicateEntry(path: string): Promise<void> {
    const target = copyPath(path);
    await copyEntry(path, target);
    explorer.selected = target;
    explorer.revealRequest++;
}

/** Disables (excludes from the compilation) or enables a file or folder. */
export async function toggleDisabled(path: string): Promise<void> {
    const entry = workspace.entries.get(path);
    if (!entry) {
        throw new Error(`'${path}' does not exist.`);
    }
    await setEntryDisabled(path, !entry.disabled);
}

/** Uploads files from the user's computer (drag and drop, or the upload command). */
export async function uploadFiles(folder: string, files: File[]): Promise<void> {
    let uploaded = 0;
    for (const file of files) {
        const path = joinPath(folder, file.name);
        if (file.size > MAX_FILE_BYTES) {
            showError(`'${file.name}' is too large (the limit is ${MAX_FILE_BYTES / 1_000_000} MB).`);
            continue;
        }
        const content = await file.text();
        if (content.includes("\u0000")) {
            showError(`'${file.name}' is a binary file. Only text files are supported.`);
            continue;
        }
        if (isDirectory(path)) {
            showError(`A folder named '${file.name}' already exists.`);
            continue;
        }
        if (isFile(path) && !(await confirm(`'${file.name}' already exists. Do you want to replace it?`, "Its current content will be lost.", "Replace"))) {
            continue;
        }
        await writeFile(path, content);
        uploaded++;
    }
    if (uploaded > 0) {
        if (folder !== "") {
            explorer.expanded.add(folder);
        }
        showInfo(`Uploaded ${uploaded} file${uploaded === 1 ? "" : "s"}.`);
    }
}

export function pickFilesToUpload(folder = targetFolder()): void {
    checkWritable();
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.onchange = () => {
        uploadFiles(folder, [...(input.files ?? [])]).catch((error) => showError(`Upload failed: ${error instanceof Error ? error.message : String(error)}`));
    };
    input.click();
}

export function downloadFile(path: string): void {
    const content = getModel(path)?.getValue();
    if (content === undefined) {
        throw new Error(`'${path}' is not a file`);
    }
    downloadBlob(new Blob([content], { type: "text/plain;charset=utf-8" }), basename(path));
}

/** Downloads the saved files of the project as a .zip file. */
export function downloadProject(): void {
    const project = workspace.project!;
    const entries = [...workspace.entries.values()]
        .sort((a, b) => a.path.localeCompare(b.path))
        .map((entry) => ({
            path: `${project.name}/${entry.path}${entry.type === "dir" ? "/" : ""}`,
            content: entry.type === "file" ? getSavedContent(entry.path) : undefined,
            mtime: entry.mtime,
        }));
    downloadBlob(createZip(entries), `${project.name}.zip`);
    if (workspace.dirty.size > 0) {
        showInfo("The downloaded project does not include unsaved changes.");
    }
}
