import { readFileSync } from "node:fs";

import { Diagnostic } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import { compile } from "../compiler/compiler";
import type { OWLanguage } from "../types";
import { OpyError } from "../utils/logging";
import { groupDiagnosticsByUri, getDocumentFileInfo } from "./diagnostics";
import { updateCompletionStateFromCompileResult } from "./completionState";
import { DeclarationDocs, emptyDeclarationDocs, extractDeclarationDocs, mergeDeclarationDocs } from "./declarationDocs";
import { initializeLanguageServerRuntime } from "./runtime";

export type ValidationResult = {
    diagnosticsByUri: Map<string, Diagnostic[]>;
};

export async function validateTextDocument(
    document: TextDocument,
    workshopLanguage: OWLanguage = "en-US",
): Promise<ValidationResult> {
    await initializeLanguageServerRuntime();

    const { rootPath, mainFileName } = getDocumentFileInfo(document);

    try {
        const compileResult = await compile(document.getText(), workshopLanguage, rootPath, mainFileName);
        const declarationDocs = collectDeclarationDocs(document, compileResult.importedFiles);
        updateCompletionStateFromCompileResult(document.uri, compileResult, declarationDocs);

        return {
            diagnosticsByUri: groupDiagnosticsByUri(compileResult.encounteredWarnings, document),
        };
    } catch (error) {
        if (error instanceof OpyError) {
            return {
                diagnosticsByUri: groupDiagnosticsByUri([error], document),
            };
        }

        throw error;
    }
}

/**
 * Doc comments can live in a different file than the symbol's usage (enums, macros, variables and
 * subroutines are routinely defined in a module and `#!include`d). The compiler reads every such
 * file while resolving includes and records their paths in `importedFiles`, so we re-extract docs
 * from each of them and merge. The focused document is read from its (possibly unsaved) open buffer
 * and merged last so it overrides the on-disk copy of the same symbols.
 */
function collectDeclarationDocs(document: TextDocument, importedFiles: string[]): DeclarationDocs {
    const docs = emptyDeclarationDocs();
    const currentPath = URI.parse(document.uri).fsPath.replaceAll("\\", "/");

    for (const importedFile of importedFiles) {
        const normalized = importedFile.replaceAll("\\", "/");
        if (!normalized.endsWith(".opy") || normalized === currentPath) {
            continue;
        }
        try {
            mergeDeclarationDocs(docs, extractDeclarationDocs(readFileSync(importedFile, "utf-8")));
        } catch {
            // An include that can't be read on disk simply contributes no docs.
        }
    }

    return mergeDeclarationDocs(docs, extractDeclarationDocs(document.getText()));
}
