import { Diagnostic } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { compile } from "../compiler/compiler";
import type { OWLanguage } from "../types";
import { OpyError as OverpyError } from "../utils/logging";
import { groupDiagnosticsByUri, getDocumentFileInfo } from "./diagnostics";
import { updateCompletionStateFromCompileResult } from "./completionState";
import { extractDeclarationDocs } from "./declarationDocs";
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
        updateCompletionStateFromCompileResult(document.uri, compileResult, extractDeclarationDocs(document.getText()));

        return {
            diagnosticsByUri: groupDiagnosticsByUri(compileResult.encounteredWarnings, document),
        };
    } catch (error) {
        if (error instanceof OverpyError) {
            return {
                diagnosticsByUri: groupDiagnosticsByUri([error], document),
            };
        }

        throw error;
    }
}
