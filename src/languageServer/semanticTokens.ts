import { SemanticTokens, SemanticTokensBuilder } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getSemanticTokenIndex } from "./completionState";
import { maskStringsAndComments } from "./documentUtils";

export const semanticTokenTypes = [
    "function",
    "method",
    "macro",
    "variable",
    // `constant.character.escape` is deliberately overloaded to color enum *type* names. The name is
    // not literal here — it is reused because most themes map it to a distinct, readable color that
    // suits enums. Do NOT rename it to something like `enum`: that would break the theme-color mapping
    // editors already apply, regressing enum highlighting. `enumMember` (below) colors enum members.
    "constant.character.escape", //Enums
    "enumMember",
    "regexp", //@Annotations
] as const;

export const semanticTokenModifiers: string[] = [];

type SemanticTokenType = (typeof semanticTokenTypes)[number];

const tokenTypeIndex: Record<SemanticTokenType, number> = Object.fromEntries(
    semanticTokenTypes.map((type, index) => [type, index]),
) as Record<SemanticTokenType, number>;

const tokenPattern = /([.@]?)([A-Za-z_][A-Za-z0-9_]*)/g;

export function getSemanticTokens(document: TextDocument): SemanticTokens {
    const index = getSemanticTokenIndex(document.uri);
    const builder = new SemanticTokensBuilder();
    const maskedLines = maskStringsAndComments(document.getText()).split(/\r\n|\r|\n/);

    for (let line = 0; line < maskedLines.length; line++) {
        emitLineTokens(builder, line, maskedLines[line], index);
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
            push(matchIndex, prefix.length + name.length, "regexp");
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
            push(nameStart, name.length, "constant.character.escape");
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
