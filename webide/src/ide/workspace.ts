import { reactive } from "vue";

import { type ProjectSummary, validateEntryPath } from "../../shared/api";
import { api, ApiError } from "../lib/api";
import { showDialog } from "./dialogs";
import { EventEmitter } from "./events";
import type { LanguageClient } from "./monaco/lspClient";
import { monaco } from "./monaco/setup";
import { basename, dirname, extension, isSameOrChild, replacePrefix } from "./paths";

/*
 * The files of the open project. Every file has a Monaco model, created when the project is loaded
 * (projects are small), so that unsaved changes, cross-file navigation and search work on all files.
 * The project root folder is file:///<project name>/.
 */

export interface EntryInfo {
    path: string;
    type: "file" | "dir";
    mtime: number;
}

export const workspace = reactive({
    project: null as ProjectSummary | null,
    entries: new Map<string, EntryInfo>(),
    dirty: new Set<string>(),
    saving: new Set<string>(),
});

// Monaco objects must not be made reactive.
const models = new Map<string, monaco.editor.ITextModel>();
const savedContent = new Map<string, string>();
const savedVersionIds = new Map<string, number>();
const saveQueue = new Map<string, Promise<void>>();
let languageClient: LanguageClient | undefined;

/** Fired after a successful save. `manual` is false for automatic saves. */
export const onDidSaveFile = new EventEmitter<{ path: string; manual: boolean }>();
/** Fired before the models of deleted entries (files and folders) are disposed. */
export const onDidDeleteEntries = new EventEmitter<string[]>();
/** Fired before the models of the old paths are disposed. */
export const onDidRenameEntry = new EventEmitter<{ from: string; to: string }>();
/** Fired when the content of a file's model changes (edits, not saves). */
export const onDidChangeFileContent = new EventEmitter<string>();

function currentProject(): ProjectSummary {
    if (!workspace.project) {
        throw new Error("No project is loaded");
    }
    return workspace.project;
}

export function rootFsPath(): string {
    return `/${currentProject().name}`;
}

export function fsPathOf(path: string): string {
    return `${rootFsPath()}/${path}`;
}

export function uriOf(path: string): monaco.Uri {
    return monaco.Uri.file(fsPathOf(path));
}

export function rootUri(): monaco.Uri {
    return monaco.Uri.file(rootFsPath());
}

/** Project-relative path of a file:// URI, or undefined if outside the project. */
export function pathOfUri(uri: monaco.Uri): string | undefined {
    if (uri.scheme !== "file") {
        return undefined;
    }
    const prefix = rootFsPath() + "/";
    return uri.path.startsWith(prefix) ? uri.path.substring(prefix.length) : undefined;
}

/** Project-relative path of an absolute path as seen by the language server ("/Project/dir/file.opy"). */
export function pathOfFsPath(fsPath: string): string | undefined {
    const prefix = rootFsPath() + "/";
    return fsPath.startsWith(prefix) ? fsPath.substring(prefix.length) : undefined;
}

export function getModel(path: string): monaco.editor.ITextModel | undefined {
    return models.get(path);
}

export function getSavedContent(path: string): string | undefined {
    return savedContent.get(path);
}

export function isFile(path: string): boolean {
    return workspace.entries.get(path)?.type === "file";
}

export function isDirectory(path: string): boolean {
    return path === "" || workspace.entries.get(path)?.type === "dir";
}

export function filePaths(): string[] {
    return [...workspace.entries.values()].filter((entry) => entry.type === "file").map((entry) => entry.path);
}

export const OVERPY_EXTENSION = ".opy";
/** Workshop files contain workshop code (as copied from Overwatch). They are decompiled when the project is compiled. */
export const WORKSHOP_EXTENSION = ".ow";

export function isOverpyFile(path: string): boolean {
    return extension(path) === OVERPY_EXTENSION;
}

export function isWorkshopFile(path: string): boolean {
    return extension(path) === WORKSHOP_EXTENSION;
}

/** Files that are part of the compilation. */
export function isCodeFile(path: string): boolean {
    return isOverpyFile(path) || isWorkshopFile(path);
}

function updateDirty(path: string): void {
    const model = models.get(path);
    if (model && model.getAlternativeVersionId() !== savedVersionIds.get(path)) {
        workspace.dirty.add(path);
    } else {
        workspace.dirty.delete(path);
    }
}

function createModel(path: string, content: string): monaco.editor.ITextModel {
    const model = monaco.editor.createModel(content, undefined, uriOf(path));
    models.set(path, model);
    savedContent.set(path, content);
    savedVersionIds.set(path, model.getAlternativeVersionId());
    model.onDidChangeContent(() => {
        updateDirty(path);
        onDidChangeFileContent.fire(path);
    });
    return model;
}

function disposeModel(path: string): void {
    models.get(path)?.dispose();
    models.delete(path);
    savedContent.delete(path);
    savedVersionIds.delete(path);
    workspace.dirty.delete(path);
}

/** Adds the missing ancestor folders of `path`, returning their paths. */
function addParentEntries(path: string, mtime: number): string[] {
    const added: string[] = [];
    for (let parent = dirname(path); parent !== ""; parent = dirname(parent)) {
        if (workspace.entries.has(parent)) {
            break;
        }
        workspace.entries.set(parent, { path: parent, type: "dir", mtime });
        added.push(parent);
    }
    return added;
}

function syncToLanguageServer(upsertPaths: string[], deletePaths: string[] = []): void {
    languageClient?.syncFiles({
        reset: false,
        upserts: upsertPaths.map((path) => {
            const entry = workspace.entries.get(path)!;
            return entry.type === "dir" ? { path: fsPathOf(path), type: "dir" } : { path: fsPathOf(path), type: "file", content: savedContent.get(path)! };
        }),
        deletes: deletePaths.map(fsPathOf),
    });
}

function notifyWatchedFiles(created: string[], deleted: string[]): void {
    const changes = [
        ...created.filter(isOverpyFile).map((path) => ({ uri: uriOf(path).toString(), type: 1 as const })),
        ...deleted.filter(isOverpyFile).map((path) => ({ uri: uriOf(path).toString(), type: 3 as const })),
    ];
    if (changes.length > 0) {
        languageClient?.didChangeWatchedFiles(changes);
    }
}

export async function loadWorkspace(projectId: string): Promise<void> {
    const { project, entries } = await api.getFiles(projectId);
    workspace.project = project;
    for (const entry of entries) {
        workspace.entries.set(entry.path, { path: entry.path, type: entry.type, mtime: entry.mtime });
        if (entry.type === "file") {
            createModel(entry.path, entry.content ?? "");
        }
    }
}

/** Connects the language server and mirrors the saved files into its file system. */
export function attachLanguageClient(client: LanguageClient): void {
    languageClient = client;
    client.syncFiles({ reset: true, upserts: [], deletes: [] });
    syncToLanguageServer([...workspace.entries.keys()]);
}

async function doSave(path: string, manual: boolean): Promise<void> {
    const model = models.get(path);
    const entry = workspace.entries.get(path);
    if (!model || !entry) {
        throw new Error(`Cannot save '${path}': the file does not exist anymore.`);
    }
    if (!workspace.dirty.has(path)) {
        // Nothing to write, but an explicit save still counts (e.g. to compile again).
        if (manual) {
            onDidSaveFile.fire({ path, manual });
        }
        return;
    }
    const content = model.getValue();
    const versionId = model.getAlternativeVersionId();
    workspace.saving.add(path);
    try {
        let mtime: number;
        try {
            ({ mtime } = await api.writeFile(currentProject().id, { path, content, expectedMtime: entry.mtime }));
        } catch (error) {
            if (!(error instanceof ApiError && error.status === 409 && "currentMtime" in error.body)) {
                throw error;
            }
            const choice = await showDialog({
                message: `'${basename(path)}' was modified elsewhere.`,
                detail: "The file changed since it was opened (for example in another browser tab). Overwrite it with your version?",
                severity: "warning",
                buttons: ["Overwrite", "Cancel"],
            });
            if (choice !== 0) {
                return;
            }
            ({ mtime } = await api.writeFile(currentProject().id, { path, content }));
        }
        entry.mtime = mtime;
        savedContent.set(path, content);
        savedVersionIds.set(path, versionId);
        updateDirty(path);
        syncToLanguageServer([path]);
        languageClient?.saveDocument(model);
        onDidSaveFile.fire({ path, manual });
    } finally {
        workspace.saving.delete(path);
    }
}

/** Saves a file. Saves of the same file are queued so that they reach the server in order. */
export function saveFile(path: string, options: { manual: boolean }): Promise<void> {
    const previous = saveQueue.get(path) ?? Promise.resolve();
    // A failed previous save was already reported to whoever requested it; it must not block this one.
    const next = previous.catch(() => undefined).then(() => doSave(path, options.manual));
    saveQueue.set(path, next);
    const cleanup = () => {
        if (saveQueue.get(path) === next) {
            saveQueue.delete(path);
        }
    };
    next.then(cleanup, cleanup);
    return next;
}

export async function saveAll(): Promise<void> {
    const results = await Promise.allSettled([...workspace.dirty].map((path) => saveFile(path, { manual: true })));
    const failures = results.filter((result): result is PromiseRejectedResult => result.status === "rejected");
    if (failures.length > 0) {
        throw new Error(failures.map((failure) => (failure.reason instanceof Error ? failure.reason.message : String(failure.reason))).join("\n"));
    }
}

/** Discards the unsaved changes of a file. */
export function revertFile(path: string): void {
    const model = models.get(path);
    if (!model) {
        throw new Error(`'${path}' does not exist`);
    }
    model.setValue(savedContent.get(path)!);
    savedVersionIds.set(path, model.getAlternativeVersionId());
    updateDirty(path);
}

function checkNewPath(path: string): void {
    const error = validateEntryPath(path);
    if (error) {
        throw new Error(error);
    }
    if (workspace.entries.has(path)) {
        throw new Error(`'${path}' already exists.`);
    }
    for (let parent = dirname(path); parent !== ""; parent = dirname(parent)) {
        if (workspace.entries.get(parent)?.type === "file") {
            throw new Error(`'${parent}' is a file, not a folder.`);
        }
    }
}

export async function createFile(path: string, content = ""): Promise<void> {
    checkNewPath(path);
    const { mtime } = await api.writeFile(currentProject().id, { path, content, create: true });
    const addedParents = addParentEntries(path, mtime);
    workspace.entries.set(path, { path, type: "file", mtime });
    createModel(path, content);
    syncToLanguageServer([...addedParents.reverse(), path]);
    notifyWatchedFiles([path], []);
}

export async function createDirectory(path: string): Promise<void> {
    checkNewPath(path);
    const { mtime } = await api.createDirectory(currentProject().id, path);
    const addedParents = addParentEntries(path, mtime);
    workspace.entries.set(path, { path, type: "dir", mtime });
    syncToLanguageServer([...addedParents.reverse(), path]);
}

export async function deleteEntry(path: string): Promise<void> {
    await api.deleteEntry(currentProject().id, path);
    const removed = [...workspace.entries.keys()].filter((entryPath) => isSameOrChild(entryPath, path));
    onDidDeleteEntries.fire(removed);
    const removedFiles = removed.filter(isFile);
    for (const entryPath of removed) {
        disposeModel(entryPath);
        workspace.entries.delete(entryPath);
    }
    syncToLanguageServer([], [path]);
    notifyWatchedFiles([], removedFiles);
}

export async function renameEntry(from: string, to: string): Promise<void> {
    if (from === to) {
        return;
    }
    checkNewPath(to);
    if (isSameOrChild(to, from)) {
        throw new Error(`Cannot move '${from}' into itself.`);
    }
    await api.renameEntry(currentProject().id, from, to);

    const moved = [...workspace.entries.values()].filter((entry) => isSameOrChild(entry.path, from)).map((entry) => ({ ...entry }));
    const addedParents = addParentEntries(to, Date.now());
    for (const entry of moved) {
        const newPath = replacePrefix(entry.path, from, to);
        workspace.entries.delete(entry.path);
        workspace.entries.set(newPath, { ...entry, path: newPath });
        if (entry.type === "file") {
            // Model URIs are immutable: create the new model, keeping any unsaved changes.
            const oldModel = models.get(entry.path)!;
            const newModel = createModel(newPath, savedContent.get(entry.path)!);
            if (oldModel.getValue() !== newModel.getValue()) {
                newModel.setValue(oldModel.getValue());
            }
        }
    }
    onDidRenameEntry.fire({ from, to });
    for (const entry of moved) {
        if (entry.type === "file") {
            disposeModel(entry.path);
        }
    }
    const movedFiles = moved.filter((entry) => entry.type === "file");
    syncToLanguageServer(
        [...addedParents.reverse(), ...moved.map((entry) => replacePrefix(entry.path, from, to))],
        [from],
    );
    notifyWatchedFiles(
        movedFiles.map((entry) => replacePrefix(entry.path, from, to)),
        movedFiles.map((entry) => entry.path),
    );
}

/**
 * Writes a file produced by a tool (compilation output, .po translation files, uploads), creating it if
 * needed. If the file has unsaved changes, they are kept in the editor.
 */
export async function writeFile(path: string, content: string): Promise<void> {
    const existing = workspace.entries.get(path);
    if (existing?.type === "dir") {
        throw new Error(`'${path}' is a folder.`);
    }
    if (!existing) {
        checkNewPath(path);
    }
    const { mtime } = await api.writeFile(currentProject().id, { path, content });
    if (existing) {
        existing.mtime = mtime;
        savedContent.set(path, content);
        const model = models.get(path)!;
        if (!workspace.dirty.has(path)) {
            if (model.getValue() !== content) {
                model.setValue(content);
            }
            savedVersionIds.set(path, model.getAlternativeVersionId());
        }
        updateDirty(path);
        syncToLanguageServer([path]);
    } else {
        const addedParents = addParentEntries(path, mtime);
        workspace.entries.set(path, { path, type: "file", mtime });
        createModel(path, content);
        syncToLanguageServer([...addedParents.reverse(), path]);
        notifyWatchedFiles([path], []);
    }
}
