/*
 * Web-only additions to the OverPy language server: file system mirroring, the project's file list, and
 * the compile/decompile commands that the desktop extension runs in its extension host (here they run in
 * this worker so that the UI thread never blocks and JavaScript macros can use QuickJS).
 */
import { ErrorCodes, ResponseError } from "vscode-languageserver/browser";

import { compile } from "../../src/compiler/compiler";
import { decompileAllRules } from "../../src/decompiler/decompiler";
import { overpyTemplate } from "../../src/globalVars";
import { initializeLanguageServerRuntime } from "../../src/languageServer/runtime";
import { ow_languages, type OWLanguage } from "../../src/types.d";
import { setFileContentOverlay } from "../../src/utils/file";
import { OpyError } from "../../src/utils/logging";
import {
    CompileRequest,
    type CompileParams,
    type CompileResult,
    type DecompileFilesParams,
    DecompileFilesRequest,
    type DecompileFilesResult,
    DecompileRequest,
    type DecompileParams,
    type DecompileResult,
    FileWrittenNotification,
    type FileWrittenParams,
    SetProjectFilesNotification,
    type SetProjectFilesParams,
    SyncFilesNotification,
    type SyncFilesParams,
    TemplateRequest,
    type TemplateResult,
} from "./protocol";
import { prepareProjectCompilation, PROJECT_MAIN_FILE_NAME, setProjectFiles } from "./project";
import { ProjectError, ProjectFileError } from "./projectErrors";
import { getCreatedConnection } from "./shims/languageserverNode";
import { applyVfsChanges, normalizePath, setVfsWriteListener } from "./shims/vfs";
import { decompileImportedFiles, scopeStrictOptimization } from "./workshopProject";

export function registerWebHandlers(): void {
    const connection = getCreatedConnection();

    setVfsWriteListener((path, content) => {
        void connection.sendNotification(FileWrittenNotification, { path, content } satisfies FileWrittenParams);
    });

    connection.onNotification(SyncFilesNotification, (params: SyncFilesParams) => {
        applyVfsChanges(params.reset, params.upserts, params.deletes);
    });

    connection.onNotification(SetProjectFilesNotification, (params: SetProjectFilesParams) => {
        setProjectFiles(params.root, params.files);
    });

    connection.onRequest(CompileRequest, async (params: CompileParams): Promise<CompileResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        try {
            const compilation = prepareProjectCompilation(language, new Map(params.unsavedFiles.map((file) => [normalizePath(file.path), file.content])));
            setFileContentOverlay(compilation.contents);
            const compileResult = await compile(compilation.main, language, compilation.rootPath, PROJECT_MAIN_FILE_NAME);
            return {
                result: compileResult.result,
                nbElements: compileResult.nbElements,
                warnings: compileResult.encounteredWarnings.map((warning) => warning.message),
                writeToOutputFile: compileResult.writeToOutputFile,
                mainFileName: compileResult.mainFileName,
                rootPath: compileResult.rootPath,
            };
        } catch (error) {
            throw toResponseError(error);
        }
    });

    connection.onRequest(DecompileRequest, async (params: DecompileParams): Promise<DecompileResult> => {
        const language = checkLanguage(params.language);
        await initializeLanguageServerRuntime();
        try {
            return { result: scopeStrictOptimization(decompileAllRules(params.text, language)) };
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

function toResponseError(error: unknown): ResponseError<void> {
    if (error instanceof ProjectFileError) {
        const { path, startLine } = error.fileStack[0];
        return new ResponseError(ErrorCodes.InternalError, `${path}:${startLine}: ${error.message}`);
    }
    if (error instanceof OpyError || error instanceof ProjectError) {
        // Errors in the user's code: shown to the user, nothing to log.
        return new ResponseError(ErrorCodes.InternalError, error.message);
    }
    console.error(error);
    return new ResponseError(ErrorCodes.InternalError, error instanceof Error ? error.message : String(error));
}
