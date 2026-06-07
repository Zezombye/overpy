import {
    CodeAction,
    CodeActionKind,
    Diagnostic,
    DiagnosticSeverity,
    TextEdit,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

export function getCodeActions(document: TextDocument, diagnostics: Diagnostic[]): CodeAction[] {
    const warningCodes = [
        ...new Set(
            diagnostics
                .filter((diagnostic) => diagnostic.severity === DiagnosticSeverity.Warning)
                .map(getWarningCode)
                .filter((code): code is string => code !== undefined),
        ),
    ];

    return warningCodes.flatMap((warningCode) => {
        const edit = getSuppressWarningEdit(document, warningCode);
        if (!edit) {
            return [];
        }

        return [
            {
                title: `Suppress ${warningCode} for this file`,
                kind: CodeActionKind.QuickFix,
                diagnostics: diagnostics.filter((diagnostic) => getWarningCode(diagnostic) === warningCode),
                isPreferred: false,
                edit: {
                    changes: {
                        [document.uri]: [edit],
                    },
                },
            },
        ];
    });
}

function getWarningCode(diagnostic: Diagnostic): string | undefined {
    return typeof diagnostic.code === "string" && diagnostic.code.startsWith("w_")
        ? diagnostic.code
        : diagnostic.message.match(/\((w_[^)]+)\)/)?.[1];
}

function getSuppressWarningEdit(document: TextDocument, warningCode: string): TextEdit | null {
    const lines = document.getText().split(/\r?\n/);
    const existingLine = lines.findIndex((line) => line.startsWith("#!suppressWarnings"));

    if (existingLine >= 0) {
        if (lines[existingLine]?.split(/\s+/).includes(warningCode)) {
            return null;
        }

        const character = lines[existingLine]?.length ?? 0;
        return TextEdit.insert({ line: existingLine, character }, ` ${warningCode}`);
    }

    return TextEdit.insert({ line: 0, character: 0 }, `#!suppressWarnings ${warningCode}\n`);
}
