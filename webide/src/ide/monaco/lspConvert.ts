/*
 * Conversions between LSP types (0-based positions) and Monaco types (1-based positions).
 */
import type * as lsp from "vscode-languageserver-protocol";

import { monaco } from "./setup";

export function toMonacoRange(range: lsp.Range): monaco.Range {
    return new monaco.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}

export function toLspPosition(position: monaco.IPosition): lsp.Position {
    return { line: position.lineNumber - 1, character: position.column - 1 };
}

export function toLspRange(range: monaco.IRange): lsp.Range {
    return {
        start: { line: range.startLineNumber - 1, character: range.startColumn - 1 },
        end: { line: range.endLineNumber - 1, character: range.endColumn - 1 },
    };
}

export function toMonacoPosition(position: lsp.Position): monaco.Position {
    return new monaco.Position(position.line + 1, position.character + 1);
}

/** Resolves `..` segments: the compiler reports include paths as written (e.g. "/Proj/lib/../main.opy"). */
export function toMonacoUri(uri: string): monaco.Uri {
    const parsed = monaco.Uri.parse(uri);
    if (parsed.scheme !== "file") {
        return parsed;
    }
    const segments: string[] = [];
    for (const segment of parsed.path.split("/")) {
        if (segment === "" || segment === ".") {
            continue;
        }
        if (segment === "..") {
            segments.pop();
        } else {
            segments.push(segment);
        }
    }
    return monaco.Uri.file("/" + segments.join("/"));
}

export function toMarkdown(content: lsp.MarkupContent | lsp.MarkedString): monaco.IMarkdownString {
    if (typeof content === "string") {
        return { value: content };
    }
    if ("kind" in content) {
        return content.kind === "markdown" ? { value: content.value } : { value: escapeMarkdown(content.value) };
    }
    return { value: "```" + content.language + "\n" + content.value + "\n```" };
}

function escapeMarkdown(text: string): string {
    return text.replace(/[\\`*_{}[\]()#+\-.!|<>]/g, "\\$&");
}

export function toMarkdownList(contents: lsp.MarkupContent | lsp.MarkedString | lsp.MarkedString[]): monaco.IMarkdownString[] {
    return Array.isArray(contents) ? contents.map(toMarkdown) : [toMarkdown(contents)];
}

function toDocumentation(documentation: string | lsp.MarkupContent | undefined): string | monaco.IMarkdownString | undefined {
    if (documentation === undefined || typeof documentation === "string") {
        return documentation;
    }
    return toMarkdown(documentation);
}

const completionItemKinds: Record<number, monaco.languages.CompletionItemKind> = {
    1: monaco.languages.CompletionItemKind.Text,
    2: monaco.languages.CompletionItemKind.Method,
    3: monaco.languages.CompletionItemKind.Function,
    4: monaco.languages.CompletionItemKind.Constructor,
    5: monaco.languages.CompletionItemKind.Field,
    6: monaco.languages.CompletionItemKind.Variable,
    7: monaco.languages.CompletionItemKind.Class,
    8: monaco.languages.CompletionItemKind.Interface,
    9: monaco.languages.CompletionItemKind.Module,
    10: monaco.languages.CompletionItemKind.Property,
    11: monaco.languages.CompletionItemKind.Unit,
    12: monaco.languages.CompletionItemKind.Value,
    13: monaco.languages.CompletionItemKind.Enum,
    14: monaco.languages.CompletionItemKind.Keyword,
    15: monaco.languages.CompletionItemKind.Snippet,
    16: monaco.languages.CompletionItemKind.Color,
    17: monaco.languages.CompletionItemKind.File,
    18: monaco.languages.CompletionItemKind.Reference,
    19: monaco.languages.CompletionItemKind.Folder,
    20: monaco.languages.CompletionItemKind.EnumMember,
    21: monaco.languages.CompletionItemKind.Constant,
    22: monaco.languages.CompletionItemKind.Struct,
    23: monaco.languages.CompletionItemKind.Event,
    24: monaco.languages.CompletionItemKind.Operator,
    25: monaco.languages.CompletionItemKind.TypeParameter,
};

function toTextEdit(edit: lsp.TextEdit): monaco.languages.TextEdit {
    return { range: toMonacoRange(edit.range), text: edit.newText };
}

export function toCompletionItem(item: lsp.CompletionItem, defaultRange: { insert: monaco.IRange; replace: monaco.IRange }): monaco.languages.CompletionItem {
    let range: monaco.IRange | monaco.languages.CompletionItemRanges = defaultRange;
    let insertText = item.insertText ?? item.label;
    if (item.textEdit) {
        insertText = item.textEdit.newText;
        range = "range" in item.textEdit ? toMonacoRange(item.textEdit.range) : { insert: toMonacoRange(item.textEdit.insert), replace: toMonacoRange(item.textEdit.replace) };
    }
    return {
        label: item.labelDetails ? { label: item.label, detail: item.labelDetails.detail, description: item.labelDetails.description } : item.label,
        kind: completionItemKinds[item.kind ?? 1] ?? monaco.languages.CompletionItemKind.Text,
        tags: item.tags?.includes(1) || item.deprecated ? [monaco.languages.CompletionItemTag.Deprecated] : undefined,
        detail: item.detail,
        documentation: toDocumentation(item.documentation),
        sortText: item.sortText,
        filterText: item.filterText,
        preselect: item.preselect,
        insertText,
        insertTextRules: item.insertTextFormat === 2 ? monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet : undefined,
        range,
        commitCharacters: item.commitCharacters,
        additionalTextEdits: item.additionalTextEdits?.map(toTextEdit),
    };
}

export function toSignatureHelp(help: lsp.SignatureHelp): monaco.languages.SignatureHelp {
    return {
        activeSignature: help.activeSignature ?? 0,
        activeParameter: help.activeParameter ?? 0,
        signatures: help.signatures.map((signature) => ({
            label: signature.label,
            documentation: toDocumentation(signature.documentation),
            parameters: (signature.parameters ?? []).map((parameter) => ({ label: parameter.label, documentation: toDocumentation(parameter.documentation) })),
            activeParameter: signature.activeParameter ?? undefined,
        })),
    };
}

export function toLspSignatureHelp(help: monaco.languages.SignatureHelp): lsp.SignatureHelp {
    return {
        activeSignature: help.activeSignature,
        activeParameter: help.activeParameter,
        signatures: help.signatures.map((signature) => ({
            label: signature.label,
            documentation: typeof signature.documentation === "object" ? { kind: "markdown", value: signature.documentation.value } : signature.documentation,
            parameters: signature.parameters.map((parameter) => ({
                label: parameter.label,
                documentation: typeof parameter.documentation === "object" ? { kind: "markdown", value: parameter.documentation.value } : parameter.documentation,
            })),
            activeParameter: signature.activeParameter,
        })),
    };
}

export function toLocations(result: lsp.Location | lsp.Location[] | lsp.LocationLink[] | null): monaco.languages.LocationLink[] {
    if (!result) {
        return [];
    }
    const items = Array.isArray(result) ? result : [result];
    return items.map((item) =>
        "targetUri" in item
            ? {
                  uri: toMonacoUri(item.targetUri),
                  range: toMonacoRange(item.targetRange),
                  targetSelectionRange: toMonacoRange(item.targetSelectionRange),
                  originSelectionRange: item.originSelectionRange ? toMonacoRange(item.originSelectionRange) : undefined,
              }
            : { uri: toMonacoUri(item.uri), range: toMonacoRange(item.range) },
    );
}

export function toWorkspaceEdit(edit: lsp.WorkspaceEdit): monaco.languages.WorkspaceEdit {
    const edits: monaco.languages.IWorkspaceTextEdit[] = [];
    for (const [uri, textEdits] of Object.entries(edit.changes ?? {})) {
        for (const textEdit of textEdits) {
            edits.push({ resource: toMonacoUri(uri), versionId: undefined, textEdit: toTextEdit(textEdit) });
        }
    }
    for (const change of edit.documentChanges ?? []) {
        if (!("textDocument" in change)) {
            throw new Error(`Unsupported workspace edit operation '${change.kind}'`);
        }
        for (const textEdit of change.edits) {
            if ("snippet" in textEdit) {
                throw new Error("Unsupported snippet text edit");
            }
            edits.push({ resource: toMonacoUri(change.textDocument.uri), versionId: undefined, textEdit: toTextEdit(textEdit) });
        }
    }
    return { edits };
}

export function toDocumentSymbols(symbols: lsp.DocumentSymbol[] | lsp.SymbolInformation[]): monaco.languages.DocumentSymbol[] {
    return symbols.map((symbol) => {
        if ("location" in symbol) {
            const range = toMonacoRange(symbol.location.range);
            return { name: symbol.name, detail: "", kind: symbol.kind - 1, tags: [], containerName: symbol.containerName, range, selectionRange: range };
        }
        return {
            name: symbol.name,
            detail: symbol.detail ?? "",
            kind: symbol.kind - 1,
            tags: symbol.tags?.includes(1) ? [monaco.languages.SymbolTag.Deprecated] : [],
            range: toMonacoRange(symbol.range),
            selectionRange: toMonacoRange(symbol.selectionRange),
            children: symbol.children ? toDocumentSymbols(symbol.children) : undefined,
        };
    });
}

const foldingRangeKinds: Record<string, monaco.languages.FoldingRangeKind> = {
    comment: monaco.languages.FoldingRangeKind.Comment,
    imports: monaco.languages.FoldingRangeKind.Imports,
    region: monaco.languages.FoldingRangeKind.Region,
};

export function toFoldingRange(range: lsp.FoldingRange): monaco.languages.FoldingRange {
    return { start: range.startLine + 1, end: range.endLine + 1, kind: range.kind ? foldingRangeKinds[range.kind] : undefined };
}

export function toInlayHint(hint: lsp.InlayHint): monaco.languages.InlayHint {
    return {
        position: toMonacoPosition(hint.position),
        label: typeof hint.label === "string" ? hint.label : hint.label.map((part) => ({ label: part.value, tooltip: toDocumentation(part.tooltip) })),
        kind: hint.kind,
        tooltip: toDocumentation(hint.tooltip),
        paddingLeft: hint.paddingLeft,
        paddingRight: hint.paddingRight,
    };
}

export function toMarkerSeverity(severity: lsp.DiagnosticSeverity | undefined): monaco.MarkerSeverity {
    switch (severity) {
        case 2:
            return monaco.MarkerSeverity.Warning;
        case 3:
            return monaco.MarkerSeverity.Info;
        case 4:
            return monaco.MarkerSeverity.Hint;
        default:
            return monaco.MarkerSeverity.Error;
    }
}

function toLspSeverity(severity: monaco.MarkerSeverity): lsp.DiagnosticSeverity {
    switch (severity) {
        case monaco.MarkerSeverity.Warning:
            return 2;
        case monaco.MarkerSeverity.Info:
            return 3;
        case monaco.MarkerSeverity.Hint:
            return 4;
        default:
            return 1;
    }
}

function diagnosticMessage(diagnostic: lsp.Diagnostic): string {
    return typeof diagnostic.message === "string" ? diagnostic.message : diagnostic.message.value;
}

export function toMarker(diagnostic: lsp.Diagnostic): monaco.editor.IMarkerData {
    const range = toMonacoRange(diagnostic.range);
    return {
        severity: toMarkerSeverity(diagnostic.severity),
        message: diagnosticMessage(diagnostic),
        source: diagnostic.source,
        code: diagnostic.code === undefined ? undefined : String(diagnostic.code),
        startLineNumber: range.startLineNumber,
        startColumn: range.startColumn,
        endLineNumber: range.endLineNumber,
        endColumn: range.endColumn,
        tags: diagnostic.tags,
    };
}

export function markerMatchesDiagnostic(marker: monaco.editor.IMarkerData, diagnostic: lsp.Diagnostic): boolean {
    const range = toMonacoRange(diagnostic.range);
    return (
        marker.message === diagnosticMessage(diagnostic) &&
        marker.startLineNumber === range.startLineNumber &&
        marker.startColumn === range.startColumn &&
        marker.endLineNumber === range.endLineNumber &&
        marker.endColumn === range.endColumn
    );
}

export function markerToDiagnostic(marker: monaco.editor.IMarkerData): lsp.Diagnostic {
    return {
        message: marker.message,
        severity: toLspSeverity(marker.severity),
        source: marker.source,
        code: typeof marker.code === "string" ? marker.code : marker.code?.value,
        range: toLspRange(marker),
    };
}
