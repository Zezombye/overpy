import { SemanticTokens, SemanticTokensBuilder } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getSemanticTokenIndex } from "./completionState";

export const semanticTokenTypes = [
    "function",
    "method",
    "macro",
    "variable",
    "enum",
    "enumMember",
    "decorator",
] as const;

export const semanticTokenModifiers: string[] = [];

type SemanticTokenType = (typeof semanticTokenTypes)[number];

const tokenTypeIndex: Record<SemanticTokenType, number> = Object.fromEntries(
    semanticTokenTypes.map((type, index) => [type, index]),
) as Record<SemanticTokenType, number>;

const tokenPattern = /([.@]?)([A-Za-z_][A-Za-z0-9_]*)/g;

export function getSemanticTokens(document: TextDocument): SemanticTokens {
    const index = getSemanticTokenIndex();
    const builder = new SemanticTokensBuilder();
    const lines = document.getText().split(/\r\n|\r|\n/);

    for (let line = 0; line < lines.length; line++) {
        emitLineTokens(builder, line, maskStringsAndComments(lines[line]), index);
    }

    return builder.build();
}

function emitLineTokens(
    builder: SemanticTokensBuilder,
    line: number,
    maskedLine: string,
    index: ReturnType<typeof getSemanticTokenIndex>,
): void {
    const push = (startCharacter: number, length: number, type: SemanticTokenType): void => {
        builder.push(line, startCharacter, length, tokenTypeIndex[type], 0);
    };

    let previousName: string | null = null;
    let previousEnd = -1;

    for (const match of maskedLine.matchAll(tokenPattern)) {
        const prefix = match[1];
        const name = match[2];
        const matchIndex = match.index ?? 0;
        const nameStart = matchIndex + prefix.length;

        if (prefix === "@") {
            push(matchIndex, prefix.length + name.length, "decorator");
        } else if (prefix === ".") {
            const ownerName: string | null = previousEnd === matchIndex ? previousName : null;
            if (ownerName && index.enumTypes.has(ownerName) && index.enumMembers.get(ownerName)?.has(name)) {
                push(nameStart, name.length, "enumMember");
            } else {
                const kind = index.member.get(name);
                if (kind) {
                    push(nameStart, name.length, kind);
                }
            }
        } else if (index.enumTypes.has(name)) {
            push(nameStart, name.length, "enum");
        } else {
            const kind = index.normal.get(name);
            if (kind) {
                push(nameStart, name.length, kind);
            }
        }

        previousName = name;
        previousEnd = nameStart + name.length;
    }
}

/** Replaces string-literal and comment regions with spaces, preserving column positions. */
function maskStringsAndComments(line: string): string {
    let result = "";
    let inString = false;
    let quote = "";

    for (let index = 0; index < line.length; index++) {
        const character = line[index];

        if (inString) {
            if (character === quote && line[index - 1] !== "\\") {
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
            result += " ".repeat(line.length - index);
            break;
        }

        result += character;
    }

    return result;
}
