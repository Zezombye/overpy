/*
 * Replaces `./validation` for the language server (see scripts/build-lsp.mjs): files that are part of the
 * project are validated by compiling the whole project, so that a file can use what other files declare,
 * and completions include the whole project's macros, variables, subroutines and enums.
 * Other files are validated on their own, as in the VS Code extension.
 */
import type { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import { compile } from "../../src/compiler/compiler";
import { updateCompletionStateFromCompileResult } from "../../src/languageServer/completionState";
import { type DeclarationDocs, emptyDeclarationDocs, extractDeclarationDocs, mergeDeclarationDocs } from "../../src/languageServer/declarationDocs";
import { groupDiagnosticsByUri } from "../../src/languageServer/diagnostics";
import { initializeLanguageServerRuntime } from "../../src/languageServer/runtime";
import { validateTextDocument as validateStandaloneDocument, type ValidationResult } from "../../src/languageServer/validation";
import type { OWLanguage } from "../../src/types.d";
import { setFileContentOverlay } from "../../src/utils/file";
import { OpyError } from "../../src/utils/logging";
import { isProjectFile, prepareProjectCompilation, PROJECT_MAIN_FILE_NAME } from "./project";
import { ProjectFileError } from "./projectErrors";
import { existsSync, normalizePath, readFileSync } from "./shims/vfs";

export type { ValidationResult };

function fsPathOf(document: TextDocument): string {
    return normalizePath(URI.parse(document.uri).fsPath);
}

export async function validateTextDocument(
    document: TextDocument,
    workshopLanguage: OWLanguage = "en-US",
    openDocuments: readonly TextDocument[] = [document],
): Promise<ValidationResult> {
    if (!isProjectFile(fsPathOf(document))) {
        return validateStandaloneDocument(document, workshopLanguage, openDocuments);
    }
    await initializeLanguageServerRuntime();

    const unsavedFiles = new Map<string, string>();
    for (const openDocument of openDocuments) {
        const path = fsPathOf(openDocument);
        if (path.endsWith(".opy")) {
            unsavedFiles.set(path, openDocument.getText());
        }
    }

    let compilation;
    try {
        compilation = prepareProjectCompilation(workshopLanguage, unsavedFiles);
    } catch (error) {
        if (error instanceof ProjectFileError) {
            return { diagnosticsByUri: groupDiagnosticsByUri([error], document) };
        }
        throw error;
    }
    setFileContentOverlay(compilation.contents);

    try {
        const compileResult = await compile(compilation.main, workshopLanguage, compilation.rootPath, PROJECT_MAIN_FILE_NAME);
        updateCompletionStateFromCompileResult(document.uri, compileResult, collectDeclarationDocs(document, compileResult.importedFiles, compilation.contents));
        return { diagnosticsByUri: groupDiagnosticsByUri(compileResult.encounteredWarnings, document) };
    } catch (error) {
        if (error instanceof OpyError) {
            return { diagnosticsByUri: groupDiagnosticsByUri([error], document) };
        }
        throw error;
    }
}

/** Same as in ../../src/languageServer/validation.ts, but reading files from the project's content. */
function collectDeclarationDocs(document: TextDocument, importedFiles: string[], contents: Map<string, string>): DeclarationDocs {
    const docs = emptyDeclarationDocs();
    const currentPath = fsPathOf(document);
    for (const importedFile of importedFiles) {
        const path = normalizePath(importedFile);
        if (!path.endsWith(".opy") || path === currentPath) {
            continue;
        }
        const content = contents.get(path) ?? (existsSync(path) ? readFileSync(path) : undefined);
        if (content !== undefined) {
            mergeDeclarationDocs(docs, extractDeclarationDocs(content));
        }
    }
    return mergeDeclarationDocs(docs, extractDeclarationDocs(document.getText()));
}
