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
 * Client -> server notification: the project's OverPy (.opy) and workshop (.ow) files that are not disabled,
 * as absolute paths in explorer order. The project is compiled as all these files in this order (see lsp/project.ts).
 */
export const SetProjectFilesNotification = "overpy/setProjectFiles";
export interface SetProjectFilesParams {
    /** The project's root folder, e.g. "/My Project". */
    root: string;
    files: string[];
    /** Compiler directives of the project settings (OverPy code), put before the files (see shared/projectSettings.ts). */
    directives: string;
}

/** An LSP diagnostic (structurally: this file must not import the LSP types). */
export interface LspDiagnostic {
    range: { start: { line: number; character: number }; end: { line: number; character: number } };
    severity?: 1 | 2 | 3 | 4;
    message: string;
    code?: string | number;
    source?: string;
}

/** The errors and warnings of a compilation, by file URI. */
export type FileDiagnostics = { uri: string; diagnostics: LspDiagnostic[] }[];

/**
 * Compilation, step 1 (language server): prepares the compilation of the whole project, which decompiles the
 * workshop files. The language server also does it to validate the open files, so it has them cached.
 */
export const PrepareCompilationRequest = "overpy/prepareCompilation";
export interface PrepareCompilationParams {
    language: string;
    /** Unsaved editor content, which takes precedence over the saved files. */
    unsavedFiles: { path: string; content: string }[];
    project: SetProjectFilesParams;
}
export type PrepareCompilationResult =
    | { ok: true; main: string; rootPath: string; contents: { path: string; content: string }[] }
    | { ok: false; error: string; diagnostics: FileDiagnostics };

/**
 * Compilation, step 2: compiles the prepared project. Sent to a separate worker, which is terminated to stop a
 * compilation (the compiler cannot be interrupted otherwise).
 */
export const CompileRequest = "overpy/compile";
export interface CompileParams {
    language: string;
    main: string;
    rootPath: string;
    /** Content of the project files to compile (see setFileContentOverlay()). */
    contents: { path: string; content: string }[];
}
export type CompileResult =
    | {
          ok: true;
          result: string;
          nbElements: number;
          warnings: string[];
          writeToOutputFile: boolean;
          mainFileName: string;
          rootPath: string;
          diagnostics: FileDiagnostics;
      }
    | { ok: false; error: string; diagnostics: FileDiagnostics };

export const DecompileRequest = "overpy/decompile";
export interface DecompileParams {
    text: string;
    language: string;
}
export interface DecompileResult {
    result: string;
}

/**
 * Decompiles workshop files (with the workshop.codes syntax, in compilation order) into OverPy files meant to be
 * compiled together: the variables, subroutines and extensions that the enabled files use are declared in
 * `declarations` (OverPy code), not in each file.
 */
export const DecompileFilesRequest = "overpy/decompileFiles";
export interface DecompileFilesParams {
    language: string;
    /** Disabled files are not compiled with the others: they are decompiled on their own, with their declarations. */
    files: { path: string; content: string; disabled?: boolean }[];
}
export interface DecompileFilesResult {
    /** Files that only define workshop.codes mixins are left out: they are kept as workshop files. */
    files: ({ path: string; content: string } | { path: string; error: string })[];
    declarations: string;
}

/**
 * Decompiles a workshop file of the project into OverPy code, to replace it by an OverPy file. The code declares
 * the variables and subroutines that only this file uses (the others stay declared for the other workshop files).
 */
export const DecompileProjectFileRequest = "overpy/decompileProjectFile";
export interface DecompileProjectFileParams {
    language: string;
    unsavedFiles: { path: string; content: string }[];
    project: SetProjectFilesParams;
    path: string;
}
export interface DecompileProjectFileResult {
    content: string;
}

export const TemplateRequest = "overpy/template";
export interface TemplateResult {
    template: string;
}
