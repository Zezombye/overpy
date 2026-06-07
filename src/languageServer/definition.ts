import { readdir, readFile } from "node:fs/promises";
import * as path from "node:path";

import { Location, Position, Range } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import { getBlockEndLine, getDocumentLines, getDocumentStructure } from "./symbols";

export type DefinitionEntry = {
    containerName?: string;
    detail: string;
    name: string;
    range: Range;
};

export type SymbolAtPosition = {
    name: string;
    precedingName?: string;
    range: Range;
};

export function getDefinition(document: TextDocument, position: Position): Location | null {
    const symbol = getSymbolAtPosition(document, position);
    if (!symbol) {
        return null;
    }

    const matchingDefinition = getMatchingDefinition(document, symbol);
    return matchingDefinition ? Location.create(document.uri, matchingDefinition.range) : null;
}

export async function getWorkspaceDefinition(
    document: TextDocument,
    position: Position,
    workspaceRoots: string[] = [],
    openDocuments: TextDocument[] = [],
): Promise<Location | null> {
    const symbol = getSymbolAtPosition(document, position);
    if (!symbol) {
        return null;
    }

    const sameDocumentDefinition = getMatchingDefinition(document, symbol);
    if (sameDocumentDefinition) {
        return Location.create(document.uri, sameDocumentDefinition.range);
    }

    for (const workspaceDocument of await getWorkspaceDocuments(document, workspaceRoots, openDocuments)) {
        if (workspaceDocument.uri === document.uri) {
            continue;
        }

        const matchingDefinition = getMatchingDefinition(workspaceDocument, symbol);
        if (matchingDefinition) {
            return Location.create(workspaceDocument.uri, matchingDefinition.range);
        }
    }

    return null;
}

export function getMatchingDefinition(document: TextDocument, symbol: SymbolAtPosition): DefinitionEntry | undefined {
    const definitions = getDefinitionEntries(document);
    const matchingDefinitions = definitions.filter((definition) => definition.name === symbol.name);
    const matchingDeclaration = matchingDefinitions.find((definition) => rangesEqual(definition.range, symbol.range));
    if (matchingDeclaration) {
        return matchingDeclaration;
    }

    if (symbol.precedingName !== undefined) {
        return (
            matchingDefinitions.find((definition) => definition.containerName === symbol.precedingName) ??
            matchingDefinitions.find((definition) => definition.detail === "playervar" && definition.containerName === undefined)
        );
    }

    return (
        matchingDefinitions.find((definition) => definition.containerName === undefined && definition.detail !== "playervar") ??
        matchingDefinitions.find((definition) => definition.containerName === undefined)
    );
}

export function getDefinitionEntries(document: TextDocument): DefinitionEntry[] {
    const lines = getDocumentLines(document);
    const entries: DefinitionEntry[] = getDocumentStructure(document).map((item) => ({
        detail: item.detail,
        name: item.name,
        range: Range.create(item.line, item.nameStart, item.line, item.nameEnd),
    }));

    for (const item of getDocumentStructure(document)) {
        if (item.detail !== "enum") {
            continue;
        }

        const enumEndLine = getBlockEndLine(lines, item.line, item.indent);
        for (let lineNumber = item.line + 1; lineNumber <= enumEndLine; lineNumber++) {
            const match = lines[lineNumber]?.match(/^(\s*)([A-Za-z_][A-Za-z0-9_]*)\b/);
            if (!match) {
                continue;
            }

            const enumMemberName = match[2] ?? "";
            const nameStart = lines[lineNumber]?.indexOf(enumMemberName) ?? 0;
            entries.push({
                containerName: item.name,
                detail: "enum-member",
                name: enumMemberName,
                range: Range.create(lineNumber, nameStart, lineNumber, nameStart + enumMemberName.length),
            });
        }
    }

    return entries;
}

export function getSymbolAtPosition(document: TextDocument, position: Position): SymbolAtPosition | null {
    const text = document.getText();
    let offset = document.offsetAt(position);

    if (!isWordCharacter(text.charAt(offset)) && offset > 0 && isWordCharacter(text.charAt(offset - 1))) {
        offset--;
    }

    if (!isWordCharacter(text.charAt(offset))) {
        return null;
    }

    const startOffset = findWordStart(text, offset);
    const endOffset = findWordEnd(text, offset);
    const name = text.slice(startOffset, endOffset);
    const precedingName = getPrecedingQualifiedName(text, startOffset);

    return {
        name,
        precedingName,
        range: Range.create(document.positionAt(startOffset), document.positionAt(endOffset)),
    };
}

function getPrecedingQualifiedName(text: string, wordStartOffset: number): string | undefined {
    if (wordStartOffset < 2 || text.charAt(wordStartOffset - 1) !== ".") {
        return undefined;
    }

    const previousWordEnd = wordStartOffset - 1;
    const previousWordStart = findWordStart(text, previousWordEnd - 1);
    const previousWord = text.slice(previousWordStart, previousWordEnd);
    return previousWord.length > 0 ? previousWord : undefined;
}

function findWordStart(text: string, offset: number): number {
    let startOffset = offset;
    while (startOffset > 0 && isWordCharacter(text.charAt(startOffset - 1))) {
        startOffset--;
    }
    return startOffset;
}

function findWordEnd(text: string, offset: number): number {
    let endOffset = offset + 1;
    while (endOffset < text.length && isWordCharacter(text.charAt(endOffset))) {
        endOffset++;
    }
    return endOffset;
}

function isWordCharacter(character: string): boolean {
    return /[A-Za-z0-9_]/.test(character);
}

export async function getWorkspaceDocuments(
    document: TextDocument,
    workspaceRoots: string[],
    openDocuments: TextDocument[],
): Promise<TextDocument[]> {
    const roots = workspaceRoots.length > 0 ? workspaceRoots : [path.dirname(URI.parse(document.uri).fsPath)];
    const openDocumentByUri = new Map(openDocuments.map((openDocument) => [openDocument.uri, openDocument]));
    const workspaceDocuments = new Map<string, TextDocument>();

    for (const openDocument of openDocuments) {
        if (openDocument.languageId === "overpy" && openDocument.uri !== document.uri) {
            workspaceDocuments.set(openDocument.uri, openDocument);
        }
    }

    for (const root of roots) {
        for (const filePath of await findOpyFiles(root)) {
            const uri = URI.file(filePath).toString();
            if (workspaceDocuments.has(uri) || uri === document.uri) {
                continue;
            }

            const openDocument = openDocumentByUri.get(uri);
            if (openDocument) {
                workspaceDocuments.set(uri, openDocument);
                continue;
            }

            try {
                workspaceDocuments.set(uri, TextDocument.create(uri, "overpy", 0, await readFile(filePath, "utf8")));
            } catch (error) {
                // Ignore files that disappear or cannot be read while the workspace is being scanned.
            }
        }
    }

    return [...workspaceDocuments.values()];
}

function rangesEqual(left: Range, right: Range): boolean {
    return (
        left.start.line === right.start.line &&
        left.start.character === right.start.character &&
        left.end.line === right.end.line &&
        left.end.character === right.end.character
    );
}

async function findOpyFiles(root: string): Promise<string[]> {
    try {
        const entries = await readdir(root, { withFileTypes: true });
        const files: string[] = [];

        for (const entry of entries) {
            const entryPath = path.join(root, entry.name);
            if (entry.isDirectory()) {
                if ([".git", "node_modules", "out", "dist"].includes(entry.name)) {
                    continue;
                }
                files.push(...await findOpyFiles(entryPath));
            } else if (entry.isFile() && entry.name.endsWith(".opy")) {
                files.push(entryPath);
            }
        }

        return files;
    } catch (error) {
        return [];
    }
}
