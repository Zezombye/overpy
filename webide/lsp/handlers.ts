/*
 * Web-only additions to the OverPy language server: file system mirroring, the project's file list, and
 * the compile/decompile commands that the desktop extension runs in its extension host (here they run in
 * workers so that the UI thread never blocks and JavaScript macros can use QuickJS).
 */
import { ErrorCodes, ResponseError } from "vscode-languageserver/browser";
import { URI } from "vscode-uri";

import { compile } from "../../src/compiler/compiler";
import { decompileAllRules } from "../../src/decompiler/decompiler";
import { overpyTemplate } from "../../src/globalVars";
import { toLspDiagnostic } from "../../src/languageServer/diagnostics";
import { initializeLanguageServerRuntime } from "../../src/languageServer/runtime";
import { type CompilationDiagnostic, ow_languages, type OWLanguage } from "../../src/types.d";
import { setFileContentOverlay } from "../../src/utils/file";
import { OpyError } from "../../src/utils/logging";
import {
    CompileRequest,
    type CompileParams,
    type CompileResult,
    type DecompileFilesParams,
    DecompileFilesRequest,
    type DecompileFilesResult,
    type DecompileParams,
    type DecompileProjectFileParams,
    DecompileProjectFileRequest,
    type DecompileProjectFileResult,
    DecompileRequest,
    type DecompileResult,
    type FileDiagnostics,
    FileWrittenNotification,
    type FileWrittenParams,
    type PrepareCompilationParams,
    PrepareCompilationRequest,
    type PrepareCompilationResult,
    SetProjectFilesNotification,
    type SetProjectFilesParams,
    SyncFilesNotification,
    type SyncFilesParams,
    TemplateRequest,
    type TemplateResult,
} from "./protocol";
import { decompileProjectFile, prepareProjectCompilation, PROJECT_MAIN_FILE_NAME, setProjectFiles } from "./project";
import { ProjectError, ProjectFileError } from "./projectErrors";
import { getCreatedConnection } from "./shims/languageserverNode";
import { applyVfsChanges, normalizePath, setVfsWriteListener } from "./shims/vfs";
import { decompileImportedFiles } from "./workshopProject";

export function registerWebHandlers(): void {
    const connection = getCreatedConnection();

    setVfsWriteListener((path, content) => {
        void connection.sendNotification(FileWrittenNotification, { path, content } satisfies FileWrittenParams);
    });

    connection.onNotification(SyncFilesNotification, (params: SyncFilesParams) => {
        applyVfsChanges(params.reset, params.upserts, params.deletes);
    });

    connection.onNotification(SetProjectFilesNotification, (params: SetProjectFilesParams) => {
        setProjectFiles(params);
    });

    connection.onRequest(PrepareCompilationRequest, async (params: PrepareCompilationParams): Promise<PrepareCompilationResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        setProjectFiles(params.project);
        try {
            const compilation = prepareProjectCompilation(language, unsavedFilesMap(params.unsavedFiles));
            return {
                ok: true,
                main: compilation.main,
                rootPath: compilation.rootPath,
                contents: [...compilation.contents].map(([path, content]) => ({ path, content })),
            };
        } catch (error) {
            if (isUserCodeError(error)) {
                return { ok: false, error: errorMessage(error), diagnostics: toFileDiagnostics(error instanceof ProjectFileError || error instanceof OpyError ? [error] : []) };
            }
            throw toResponseError(error);
        }
    });

    connection.onRequest(CompileRequest, async (params: CompileParams): Promise<CompileResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        setFileContentOverlay(new Map(params.contents.map((file) => [file.path, file.content])));
        try {
            const compileResult = await compile(params.main, language, params.rootPath, PROJECT_MAIN_FILE_NAME);
            return {
                ok: true,
                result: compileResult.result,
                nbElements: compileResult.nbElements,
                warnings: compileResult.encounteredWarnings.map((warning) => warning.message),
                writeToOutputFile: compileResult.writeToOutputFile,
                mainFileName: compileResult.mainFileName,
                rootPath: compileResult.rootPath,
                diagnostics: toFileDiagnostics(compileResult.encounteredWarnings),
            };
        } catch (error) {
            if (error instanceof OpyError) {
                return { ok: false, error: error.message, diagnostics: toFileDiagnostics([error]) };
            }
            throw toResponseError(error);
        }
    });

    connection.onRequest(DecompileRequest, async (params: DecompileParams): Promise<DecompileResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        try {
            return { result: decompileAllRules(params.text, language) };
        } catch (error) {
            throw toResponseError(error);
        }
    });

    connection.onRequest(DecompileFilesRequest, async (params: DecompileFilesParams): Promise<DecompileFilesResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        try {
            return decompileImportedFiles(params.files, language);
        } catch (error) {
            throw toResponseError(error);
        }
    });

    connection.onRequest(DecompileProjectFileRequest, async (params: DecompileProjectFileParams): Promise<DecompileProjectFileResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        setProjectFiles(params.project);
        try {
            return { content: decompileProjectFile(params.path, language, unsavedFilesMap(params.unsavedFiles)) };
        } catch (error) {
            throw toResponseError(error);
        }
    });

    connection.onRequest(TemplateRequest, (): TemplateResult => {
        return { template: overpyTemplate };
    });
}

function checkLanguage(language: string): OWLanguage {
    if (!(Object.values(ow_languages) as string[]).includes(language)) {
        throw new ResponseError(ErrorCodes.InvalidParams, `Configured OverPy language ${language} is not recognized as a supported language.`);
    }
    return language as OWLanguage;
}

function unsavedFilesMap(unsavedFiles: { path: string; content: string }[]): Map<string, string> {
    return new Map(unsavedFiles.map((file) => [normalizePath(file.path), file.content]));
}

/** Errors in the user's code: shown to the user, nothing to log. */
function isUserCodeError(error: unknown): error is OpyError | ProjectError {
    return error instanceof OpyError || error instanceof ProjectError;
}

function errorMessage(error: OpyError | ProjectError): string {
    if (error instanceof ProjectFileError) {
        const { path, startLine } = error.fileStack[0];
        return `${path}:${startLine}: ${error.message}`;
    }
    return error.message;
}

/** Diagnostics by file URI. Diagnostics without file are left out (the error is reported anyway). */
function toFileDiagnostics(items: CompilationDiagnostic[]): FileDiagnostics {
    const byUri = new Map<string, FileDiagnostics[number]["diagnostics"]>();
    for (const item of items) {
        const diagnostic = toLspDiagnostic(item);
        const path = item.fileStack?.findLast((member) => member.staticMember)?.path;
        if (!diagnostic || !path) {
            continue;
        }
        const uri = URI.file(path).toString();
        byUri.set(uri, [...(byUri.get(uri) ?? []), diagnostic]);
    }
    return [...byUri].map(([uri, diagnostics]) => ({ uri, diagnostics }));
}

function toResponseError(error: unknown): ResponseError<void> {
    if (isUserCodeError(error)) {
        return new ResponseError(ErrorCodes.InternalError, errorMessage(error));
    }
    console.error(error);
    return new ResponseError(ErrorCodes.InternalError, error instanceof Error ? error.message : String(error));
}
