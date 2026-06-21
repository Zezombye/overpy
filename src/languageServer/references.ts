import { Location, Range } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import {
    DefinitionEntry,
    getDefinitionEntries,
    getMatchingDefinition,
    getSymbolAtPosition,
    getWorkspaceDocuments,
    SymbolAtPosition,
} from "./definition";
import { getPrecedingQualifiedName, isOffsetInStringOrComment, maskStringsAndComments, rangesEqual } from "./documentUtils";
import { getDocumentLines } from "./symbols";

type DefinitionTarget = DefinitionEntry & {
    uri: string;
};

export async function getWorkspaceReferences(
    document: TextDocument,
    position: { line: number; character: number },
    workspaceRoots: string[] = [],
    openDocuments: TextDocument[] = [],
    includeDeclaration = true,
): Promise<Location[]> {
    const symbol = getSymbolAtPosition(document, position);
    if (!symbol) {
        return [];
    }

    const documents = await getReferenceDocuments(document, workspaceRoots, openDocuments);
    const target = getReferenceTarget(document, symbol, documents);
    if (!target) {
        return [];
    }

    const references: Location[] = [];
    if (includeDeclaration) {
        references.push(Location.create(target.uri, target.range));
    }

    for (const referenceDocument of documents) {
        for (const reference of getDocumentReferences(referenceDocument, target)) {
            if (!locationsEqual(reference, Location.create(target.uri, target.range))) {
                references.push(reference);
            }
        }
    }

    return uniqueLocations(references);
}

async function getReferenceDocuments(
    document: TextDocument,
    workspaceRoots: string[],
    openDocuments: TextDocument[],
): Promise<TextDocument[]> {
    const documentsByUri = new Map<string, TextDocument>([[document.uri, document]]);

    for (const openDocument of openDocuments) {
        if (openDocument.languageId === "overpy") {
            documentsByUri.set(openDocument.uri, openDocument);
        }
    }

    if (workspaceRoots.length > 0) {
        for (const workspaceDocument of await getWorkspaceDocuments(document, workspaceRoots, openDocuments)) {
            documentsByUri.set(workspaceDocument.uri, workspaceDocument);
        }
    }

    return [...documentsByUri.values()];
}

function getReferenceTarget(
    document: TextDocument,
    symbol: SymbolAtPosition,
    documents: TextDocument[],
): DefinitionTarget | undefined {
    const sameDocumentDefinition = getMatchingDefinition(document, symbol);
    if (sameDocumentDefinition) {
        return {
            ...sameDocumentDefinition,
            uri: document.uri,
        };
    }

    for (const workspaceDocument of documents) {
        if (workspaceDocument.uri === document.uri) {
            continue;
        }

        const matchingDefinition = getMatchingDefinition(workspaceDocument, symbol);
        if (matchingDefinition) {
            return {
                ...matchingDefinition,
                uri: workspaceDocument.uri,
            };
        }
    }

    return undefined;
}

function getDocumentReferences(document: TextDocument, target: DefinitionTarget): Location[] {
    const definitions = getDefinitionEntries(document);
    const text = document.getText();
    const masked = maskStringsAndComments(text);
    const references: Location[] = [];

    for (const [lineNumber, line] of getDocumentLines(document).entries()) {
        for (const occurrence of getWordOccurrences(line, target.name)) {
            const range = Range.create(lineNumber, occurrence.start, lineNumber, occurrence.end);
            const offset = document.offsetAt({ line: lineNumber, character: occurrence.start });
            if (isOffsetInStringOrComment(text, masked, offset) || isDeclarationRange(definitions, range)) {
                continue;
            }

            if (isReferenceToTarget(target, occurrence.precedingName)) {
                references.push(Location.create(document.uri, range));
            }
        }
    }

    return references;
}

function isReferenceToTarget(target: DefinitionTarget, precedingName: string | undefined): boolean {
    if (target.detail === "enum-member") {
        return precedingName === target.containerName;
    }

    if (target.detail === "playervar") {
        return precedingName !== undefined;
    }

    return precedingName === undefined;
}

function isDeclarationRange(definitions: DefinitionEntry[], range: Range): boolean {
    return definitions.some((definition) => rangesEqual(definition.range, range));
}

function getWordOccurrences(
    line: string,
    word: string,
): Array<{ end: number; precedingName?: string; start: number }> {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`\\b${escapedWord}\\b`, "g");
    const occurrences: Array<{ end: number; precedingName?: string; start: number }> = [];
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(line)) !== null) {
        occurrences.push({
            end: match.index + word.length,
            precedingName: getPrecedingQualifiedName(line, match.index),
            start: match.index,
        });
    }

    return occurrences;
}

function uniqueLocations(locations: Location[]): Location[] {
    const seen = new Set<string>();
    const result: Location[] = [];

    for (const location of locations) {
        const key = `${location.uri}:${location.range.start.line}:${location.range.start.character}:${location.range.end.line}:${location.range.end.character}`;
        if (!seen.has(key)) {
            seen.add(key);
            result.push(location);
        }
    }

    return result;
}

function locationsEqual(left: Location, right: Location): boolean {
    return left.uri === right.uri && rangesEqual(left.range, right.range);
}
