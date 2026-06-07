import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import { CompilationDiagnostic } from "../types";

export function toLspDiagnostic(item: CompilationDiagnostic): Diagnostic | undefined {
    const fileInfo = item.fileStack?.findLast((fileStack) => fileStack.staticMember);
    if (!fileInfo || fileInfo.startLine === null || fileInfo.startCol === null) {
        return undefined;
    }

    const warningCode = item.severity === "warning" ? item.message.match(/\((w_[^)]+)\)/)?.[1] : undefined;

    const diagnostic: Diagnostic = {
        message: item.message,
        severity: item.severity === "error" ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
        range: {
            start: {
                line: Math.max(0, fileInfo.startLine - 1),
                character: Math.max(0, fileInfo.startCol - 1),
            },
            end: {
                line: Math.max(0, (fileInfo.endLine ?? fileInfo.startLine) - 1),
                character: Math.max(0, (fileInfo.endCol ?? fileInfo.startCol) - 1),
            },
        },
        source: "overpy",
    };

    if (warningCode) {
        diagnostic.code = warningCode;
    }

    return diagnostic;
}

export function groupDiagnosticsByUri(
    diagnostics: CompilationDiagnostic[],
    fallbackDocument: TextDocument,
): Map<string, Diagnostic[]> {
    const groupedDiagnostics = new Map<string, Diagnostic[]>();

    for (const item of diagnostics) {
        const diagnostic = toLspDiagnostic(item);
        if (!diagnostic) {
            continue;
        }

        const fileInfo = item.fileStack?.findLast((fileStack) => fileStack.staticMember);
        const uri = fileInfo?.path ? URI.file(fileInfo.path).toString() : fallbackDocument.uri;
        const list = groupedDiagnostics.get(uri) ?? [];
        list.push(diagnostic);
        groupedDiagnostics.set(uri, list);
    }

    if (!groupedDiagnostics.has(fallbackDocument.uri)) {
        groupedDiagnostics.set(fallbackDocument.uri, []);
    }

    return groupedDiagnostics;
}

export function getDocumentFileInfo(document: TextDocument): { mainFileName: string; rootPath: string } {
    const fsPath = URI.parse(document.uri).fsPath.replaceAll("\\", "/");
    const lastSlash = fsPath.lastIndexOf("/");

    if (lastSlash < 0) {
        return {
            mainFileName: fsPath,
            rootPath: "",
        };
    }

    return {
        mainFileName: fsPath.substring(lastSlash + 1),
        rootPath: fsPath.substring(0, lastSlash + 1),
    };
}
