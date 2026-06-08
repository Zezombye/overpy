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

/**
 * Replaces string-literal and comment regions with spaces, preserving every offset and
 * newline so the result can be split into lines or indexed by document offset. Handles
 * `#` line comments and `/* *​/` block comments (which may span multiple lines), matching
 * the comment forms recognized by the OverPy grammar.
 */
export function maskStringsAndComments(text: string): string {
    let result = "";
    let inString = false;
    let inLineComment = false;
    let inBlockComment = false;
    let quote = "";

    for (let index = 0; index < text.length; index++) {
        const character = text[index];

        if (character === "\n" || character === "\r") {
            inString = false;
            inLineComment = false;
            result += character;
            continue;
        }

        if (inBlockComment) {
            if (character === "*" && text[index + 1] === "/") {
                result += "  ";
                index++;
                inBlockComment = false;
                continue;
            }
            result += " ";
            continue;
        }

        if (inLineComment) {
            result += " ";
            continue;
        }

        if (inString) {
            if (character === quote && text[index - 1] !== "\\") {
                inString = false;
            }
            result += " ";
            continue;
        }

        if (character === "\"" || character === "'") {
            inString = true;
            quote = character;
            result += " ";
            continue;
        }

        if (character === "#") {
            inLineComment = true;
            result += " ";
            continue;
        }

        if (character === "/" && text[index + 1] === "*") {
            inBlockComment = true;
            result += "  ";
            index++;
            continue;
        }

        result += character;
    }

    return result;
}

/** Returns true if the identifier under `offset` lies inside a masked (string/comment) region. */
export function isOffsetInStringOrComment(text: string, masked: string, offset: number): boolean {
    const isIdentifierChar = (character: string): boolean => /[@A-Za-z0-9_.]/.test(character);

    let index = offset;
    if (!isIdentifierChar(text.charAt(index)) && index > 0 && isIdentifierChar(text.charAt(index - 1))) {
        index--;
    }

    if (!isIdentifierChar(text.charAt(index))) {
        return false;
    }

    return masked.charAt(index) === " ";
}
