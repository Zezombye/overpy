import { DocumentSymbol, Range, SymbolKind } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

export type StructuralItem = {
    detail: string;
    indent: number;
    isBlock: boolean;
    kind: SymbolKind;
    line: number;
    name: string;
    nameEnd: number;
    nameStart: number;
};

export function getDocumentSymbols(document: TextDocument): DocumentSymbol[] {
    const lines = getDocumentLines(document);
    return getDocumentStructure(document).map((item) => {
        const endLine = item.isBlock ? getBlockEndLine(lines, item.line, item.indent) : item.line;
        return {
            name: item.name,
            detail: item.detail,
            kind: item.kind,
            range: Range.create(item.line, item.indent, endLine, lines[endLine]?.length ?? 0),
            selectionRange: Range.create(item.line, item.nameStart, item.line, item.nameEnd),
        };
    });
}

export function getDocumentStructure(document: TextDocument): StructuralItem[] {
    return getDocumentLines(document).flatMap((line, lineNumber) => {
        const parsed = parseStructureLine(line);
        return parsed ? [{ ...parsed, line: lineNumber }] : [];
    });
}

export function getDocumentLines(document: TextDocument): string[] {
    return document.getText().split(/\r?\n/);
}

export function getBlockEndLine(lines: string[], startLine: number, indent: number): number {
    let endLine = startLine;

    for (let lineNumber = startLine + 1; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber] ?? "";
        if (line.trim().length === 0) {
            continue;
        }

        if (getIndent(line) <= indent) {
            break;
        }

        endLine = lineNumber;
    }

    return endLine;
}

function parseStructureLine(line: string): Omit<StructuralItem, "line"> | null {
    return (
        parseRule(line) ??
        parseNamedBlock(line, /^(\s*)def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/, "def", SymbolKind.Function) ??
        parseNamedBlock(line, /^(\s*)enum\s+([A-Za-z_][A-Za-z0-9_]*)\s*:/, "enum", SymbolKind.Enum) ??
        parseNamedBlock(line, /^(\s*)macro\s+([A-Za-z_][A-Za-z0-9_.]*)\s*\([^)]*\)\s*:/, "macro", SymbolKind.Function) ??
        parseNamedLine(line, /^(\s*)globalvar\s+([A-Za-z_][A-Za-z0-9_]*)\b/, "globalvar", SymbolKind.Variable) ??
        parseNamedLine(line, /^(\s*)playervar\s+([A-Za-z_][A-Za-z0-9_]*)\b/, "playervar", SymbolKind.Variable) ??
        parseNamedLine(line, /^(\s*)macro\s+([A-Za-z_][A-Za-z0-9_.]*)\b/, "macro", SymbolKind.Constant) ??
        parseNamedLine(line, /^(\s*)#!define\s+([A-Za-z_][A-Za-z0-9_]*)\b/, "define", SymbolKind.Constant)
    );
}

function parseRule(line: string): Omit<StructuralItem, "line"> | null {
    const match = line.match(/^(\s*)rule\s+"([^"]*)"\s*:/);
    if (!match) {
        return null;
    }

    const nameStart = line.indexOf("\"") + 1;
    const name = match[2] ?? "";
    return {
        detail: "rule",
        indent: getIndent(match[1] ?? ""),
        isBlock: true,
        kind: SymbolKind.Event,
        name,
        nameStart,
        nameEnd: nameStart + name.length,
    };
}

function parseNamedBlock(
    line: string,
    pattern: RegExp,
    detail: string,
    kind: SymbolKind,
): Omit<StructuralItem, "line"> | null {
    const result = parseNamedLine(line, pattern, detail, kind);
    return result ? { ...result, isBlock: true } : null;
}

function parseNamedLine(
    line: string,
    pattern: RegExp,
    detail: string,
    kind: SymbolKind,
): Omit<StructuralItem, "line"> | null {
    const match = line.match(pattern);
    if (!match) {
        return null;
    }

    const name = match[2] ?? "";
    const nameStart = line.indexOf(name);
    return {
        detail,
        indent: getIndent(match[1] ?? ""),
        isBlock: false,
        kind,
        name,
        nameStart,
        nameEnd: nameStart + name.length,
    };
}

function getIndent(line: string): number {
    return line.match(/^\s*/)?.[0].length ?? 0;
}
