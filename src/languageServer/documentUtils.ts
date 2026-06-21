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

export type PositionedText = {
    range: Range;
    text: string;
};

/**
 * Returns the identifier under (or immediately before) `position`. `characterPattern` defines
 * which characters belong to a token; `tokenPattern` validates the assembled token (e.g. allowing
 * a leading `@` or an embedded `.`). Returns null if there is no token there or it fails the
 * token pattern. Generalizes the per-feature scanners in hover/definition.
 */
export function getIdentifierAtPosition(
    document: TextDocument,
    position: Position,
    characterPattern: RegExp,
    tokenPattern: RegExp,
): PositionedText | null {
    const text = document.getText();
    let offset = document.offsetAt(position);

    if (!characterPattern.test(text.charAt(offset)) && offset > 0 && characterPattern.test(text.charAt(offset - 1))) {
        offset--;
    }

    if (!characterPattern.test(text.charAt(offset))) {
        return null;
    }

    let startOffset = offset;
    while (startOffset > 0 && characterPattern.test(text.charAt(startOffset - 1))) {
        startOffset--;
    }

    let endOffset = offset + 1;
    while (endOffset < text.length && characterPattern.test(text.charAt(endOffset))) {
        endOffset++;
    }

    const tokenText = text.slice(startOffset, endOffset);
    if (!tokenPattern.test(tokenText)) {
        return null;
    }

    return {
        text: tokenText,
        range: Range.create(document.positionAt(startOffset), document.positionAt(endOffset)),
    };
}

/**
 * Given a string and the start offset of a word, returns the bare identifier that qualifies it
 * (the `Foo` in `Foo.bar`), or undefined if the word is not preceded by `identifier` + `.`.
 * Operates on any string + offset, so it serves both whole-document and single-line callers.
 */
export function getPrecedingQualifiedName(text: string, wordStartOffset: number): string | undefined {
    if (wordStartOffset < 2 || text.charAt(wordStartOffset - 1) !== ".") {
        return undefined;
    }

    let start = wordStartOffset - 2;
    while (start >= 0 && /[A-Za-z0-9_]/.test(text.charAt(start))) {
        start--;
    }

    const precedingName = text.slice(start + 1, wordStartOffset - 1);
    return precedingName.length > 0 ? precedingName : undefined;
}

export function rangesEqual(left: Range, right: Range): boolean {
    return (
        left.start.line === right.start.line &&
        left.start.character === right.start.character &&
        left.end.line === right.end.line &&
        left.end.character === right.end.character
    );
}

/**
 * Finds the start of a `#` line comment in a single line, skipping `#` characters inside string
 * literals, and reports whether it is a `#!` directive. Shares the string-skipping logic with
 * `maskStringsAndComments`; used where the comment's index and directive-ness are needed.
 */
export function findLineCommentStart(line: string): { index: number; directive: boolean } | null {
    let inString = false;
    let quote = "";

    for (let index = 0; index < line.length; index++) {
        const character = line[index];

        if (inString) {
            if (character === quote && line[index - 1] !== "\\") {
                inString = false;
            }
            continue;
        }

        if (character === "\"" || character === "'") {
            inString = true;
            quote = character;
            continue;
        }

        if (character === "#") {
            return { index, directive: line[index + 1] === "!" };
        }
    }

    return null;
}
