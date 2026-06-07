import { Position, Range, TextEdit, WorkspaceEdit } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getSymbolAtPosition } from "./definition";
import { getWorkspaceReferences } from "./references";

export async function getPrepareRename(
    document: TextDocument,
    position: Position,
    workspaceRoots: string[] = [],
    openDocuments: TextDocument[] = [],
): Promise<Range | null> {
    const symbol = getSymbolAtPosition(document, position);
    if (!symbol) {
        return null;
    }

    const references = await getWorkspaceReferences(document, position, workspaceRoots, openDocuments, true);
    return references.length > 0 ? symbol.range : null;
}

export async function getWorkspaceRename(
    document: TextDocument,
    position: Position,
    newName: string,
    workspaceRoots: string[] = [],
    openDocuments: TextDocument[] = [],
): Promise<WorkspaceEdit | null> {
    if (!isValidOverpyIdentifier(newName)) {
        return null;
    }

    const references = await getWorkspaceReferences(document, position, workspaceRoots, openDocuments, true);
    if (references.length === 0) {
        return null;
    }

    const changes: NonNullable<WorkspaceEdit["changes"]> = {};
    for (const reference of references) {
        changes[reference.uri] ??= [];
        changes[reference.uri].push(TextEdit.replace(reference.range, newName));
    }

    return { changes };
}

function isValidOverpyIdentifier(value: string): boolean {
    return /^[A-Za-z_][A-Za-z0-9_]*$/.test(value);
}
