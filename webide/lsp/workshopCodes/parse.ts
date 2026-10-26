/*
 * Ported from workshop.codes (app/javascript/src/utils/parse.ts), https://github.com/netux/workshop.codes
 * MIT License, Copyright (c) 2019 Mitchel Jager.
 */

export type Range = [number, number];

export function getClosingBracket(content: string, characterOpen = "{", characterClose = "}", start = 0): number {
    let closePos = start;
    let counter = 1;
    let initial = true;

    while (counter > 1 || initial) {
        const c = content[++closePos];

        if (c == characterOpen) {
            counter++;
            initial = false;
        } else if (c == characterClose) counter--;
        if (counter > 20 || closePos > 100_000 + start || closePos >= content.length) return -1;
    }

    return closePos;
}

export function splitArgumentsString(content: string): string[] {
    let ignoredByString = false;
    let ignoredByBrackets = 0;

    const commaIndexes: number[] = [];

    for (let i = 0; i < content.length; i++) {
        if (content[i] == "\\") i++;
        else if (content[i] == '"') ignoredByString = !ignoredByString;
        else if (!ignoredByString && ["(", "[", "{"].includes(content[i])) ignoredByBrackets++;
        else if (!ignoredByString && [")", "]", "}"].includes(content[i])) ignoredByBrackets = Math.min(ignoredByBrackets - 1 || 0);
        else if (!ignoredByString && !ignoredByBrackets && content[i] == ",") commaIndexes.push(i);
    }

    if (!commaIndexes.length) return [content];

    const splitArguments = [];
    splitArguments.push(content.substring(0, commaIndexes[0]));

    commaIndexes.forEach((comma, index) => {
        splitArguments.push(content.substring(comma + 1, commaIndexes[index + 1]).trim());
    });

    return splitArguments;
}

export function replaceBetween(origin: string, replace: string, startIndex: number, endIndex: number): string {
    return origin.substring(0, startIndex) + replace + origin.substring(endIndex);
}

export function getPhraseEnd(text: string, start: number, direction = 1): number {
    let lastValidCharacterPosition = start;

    for (let i = 1; i < 100; i++) {
        const char = text[start + i * direction];
        if (char !== undefined && /[A-Za-z\- ]/.test(char)) lastValidCharacterPosition += direction;
        else i = 100;
    }

    return lastValidCharacterPosition;
}

export function getPhraseFromIndex(text: string, index: number): string {
    const start = getPhraseEnd(text, index, -1);
    const end = getPhraseEnd(text, index, 1);

    return text.slice(start, end + 1).trim();
}

export function removeSurroundingParenthesis(source: string): string {
    const openMatch = /^[\s\n]*\(/.exec(source);
    const closeMatch = /\)[\s\n]*$/.exec(source);

    return openMatch != null && closeMatch != null ? removeSurroundingParenthesis(source.substring(openMatch.index + openMatch[0].length, closeMatch.index)) : source;
}

export function findRangesOfStrings(source: string): Range[] {
    const foundRanges: Range[] = [];

    let currentRangeIndex = null;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === '"') {
            if (currentRangeIndex == null) {
                currentRangeIndex = i;
            } else if (source[i - 1] !== "\\") {
                foundRanges.push([currentRangeIndex, i + 1]);
                currentRangeIndex = null;
            }
        }
    }

    return foundRanges;
}

export function getCommasIndexesOutsideQuotes(string: string): number[] {
    const commaIndexes = [];
    const stringRanges = findRangesOfStrings(string);

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ",") continue;

        const withinStringRange = stringRanges.some(([start, end]) => i > start && i < end);
        if (!withinStringRange) commaIndexes.push(i);
    }

    return commaIndexes;
}
