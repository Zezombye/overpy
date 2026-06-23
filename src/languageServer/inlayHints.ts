import { InlayHint, InlayHintKind, Position, Range } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getCompletionState } from "./completionState";
import { maskStringsAndComments } from "./documentUtils";

const callPattern = /([A-Za-z_][A-Za-z0-9_]*)\s*\(/g;
const keywordArgumentPattern = /^[A-Za-z_][A-Za-z0-9_]*\s*=(?!=)/;

type ParsedArgument = {
    start: number;
    text: string;
    isKeyword: boolean;
};

/**
 * Produces parameter-name inlay hints at call sites, e.g. `wait(time: 1, waitBehavior: ...)`.
 * Positional arguments are matched to the function's parameters (skipping the implicit `self`
 * for member functions); annotation stops once keyword arguments begin.
 */
export function getInlayHints(document: TextDocument, range?: Range, minParameters = 1): InlayHint[] {
    if (minParameters <= 0) {
        return [];
    }

    const state = getCompletionState(document.uri);
    const masked = maskStringsAndComments(document.getText());
    const hints: InlayHint[] = [];

    for (const match of masked.matchAll(callPattern)) {
        const name = match[1];
        const matchIndex = match.index ?? 0;
        const functionData = state.functionRegistry[name];
        if (!functionData || !Array.isArray(functionData.args)) {
            continue;
        }

        const parameters = functionData.isMember === true ? functionData.args.slice(1) : functionData.args;
        if (parameters.length < minParameters) {
            continue;
        }

        const openParenIndex = matchIndex + match[0].length - 1;
        const argumentList = parseArguments(masked, openParenIndex);

        for (let index = 0; index < argumentList.length && index < parameters.length; index++) {
            const argument = argumentList[index];
            if (argument.isKeyword) {
                break;
            }
            const parameterName = parameters[index].name;
            if (argument.text.length === 0 || argument.text === parameterName) {
                continue;
            }

            const position = document.positionAt(argument.start);
            if (range && !isWithinRange(position, range)) {
                continue;
            }

            hints.push({
                position,
                label: `${parameterName}:`,
                kind: InlayHintKind.Parameter,
                paddingRight: true,
            });
        }
    }

    return hints;
}

function parseArguments(masked: string, openParenIndex: number): ParsedArgument[] {
    const argumentList: ParsedArgument[] = [];
    let depth = 1;
    let segmentStart = openParenIndex + 1;

    const flush = (end: number): void => {
        const raw = masked.slice(segmentStart, end);
        const trimmed = raw.trim();
        argumentList.push({
            start: segmentStart + (raw.length - raw.trimStart().length),
            text: trimmed,
            isKeyword: keywordArgumentPattern.test(trimmed),
        });
    };

    for (let index = openParenIndex + 1; index < masked.length; index++) {
        const character = masked[index];
        if (character === "(" || character === "[" || character === "{") {
            depth++;
        } else if (character === ")" || character === "]" || character === "}") {
            depth--;
            if (depth === 0) {
                flush(index);
                return argumentList;
            }
        } else if (character === "," && depth === 1) {
            flush(index);
            segmentStart = index + 1;
        }
    }

    flush(masked.length);
    return argumentList;
}

function isWithinRange(position: Position, range: Range): boolean {
    if (position.line < range.start.line || position.line > range.end.line) {
        return false;
    }
    if (position.line === range.start.line && position.character < range.start.character) {
        return false;
    }
    if (position.line === range.end.line && position.character > range.end.character) {
        return false;
    }
    return true;
}
