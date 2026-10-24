/*
 * Custom messages exchanged between the web IDE (main thread) and the OverPy language server worker,
 * on top of the standard LSP messages. Shared by both sides, so this file must not import anything.
 */

/**
 * Client -> server notification. Mirrors the saved project files into the worker's in-memory file
 * system, which stands in for `fs` (used by `#!include`, `#!mainFile`, .po translation files, etc.).
 * Paths are absolute POSIX paths, matching the `fsPath` of the `file:///` URIs used by the editor.
 */
export const SyncFilesNotification = "overpy/syncFiles";
export interface SyncFilesParams {
    /** If true, every previously synced entry is dropped before applying the upserts. */
    reset: boolean;
    upserts: { path: string; type: "file" | "dir"; content?: string }[];
    deletes: string[];
}

/** Server -> client notification, sent when the compiler writes a file (e.g. .po translation files). */
export const FileWrittenNotification = "overpy/fileWritten";
export interface FileWrittenParams {
    path: string;
    content: string;
}

/**
 * Client -> server notification: the project's OverPy (.opy) and workshop (.ow) files, as absolute
 * paths in explorer order. The project is compiled as all these files in this order (see lsp/project.ts).
 */
export const SetProjectFilesNotification = "overpy/setProjectFiles";
export interface SetProjectFilesParams {
    /** The project's root folder, e.g. "/My Project". */
    root: string;
    files: string[];
}

/** Compiles the whole project. */
export const CompileRequest = "overpy/compile";
export interface CompileParams {
    language: string;
    /** Unsaved editor content, which takes precedence over the saved files. */
    unsavedFiles: { path: string; content: string }[];
}
export interface CompileResult {
    result: string;
    nbElements: number;
    warnings: string[];
    writeToOutputFile: boolean;
    mainFileName: string;
    rootPath: string;
}

export const DecompileRequest = "overpy/decompile";
export interface DecompileParams {
    text: string;
    language: string;
}
export interface DecompileResult {
    result: string;
}

export const TemplateRequest = "overpy/template";
export interface TemplateResult {
    template: string;
}
