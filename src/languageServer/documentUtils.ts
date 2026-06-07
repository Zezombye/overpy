import { Position, Range } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

export function getTextRange(document: TextDocument, start: Position, end: Position): string {
    return document.getText(Range.create(start, end));
}

export function getCharacterBefore(document: TextDocument, position: Position, distance = 1): string {
    const offset = document.offsetAt(position);
    if (offset < distance) {
        return "";
    }

    return document.getText().charAt(offset - distance);
}

export function getCharacterAt(document: TextDocument, position: Position): string {
    return document.getText().charAt(document.offsetAt(position));
}

export function getWordBeforeTrigger(document: TextDocument, position: Position): string | undefined {
    const offset = document.offsetAt(position);
    const beforeTrigger = document.getText().slice(0, Math.max(0, offset - 1));
    return beforeTrigger.match(/[\w]+$/)?.[0];
}

export function getTextBeforePosition(document: TextDocument, position: Position): string {
    return document.getText().slice(0, document.offsetAt(position));
}
