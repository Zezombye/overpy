import {
    CompletionItem,
    CompletionList,
    Hover,
    MarkupContent,
    MarkupKind,
    Position,
    Range,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getCompletionState, makeFunctionSignatureLabel, makeSignatureHelp } from "./completionState";

export function getHover(document: TextDocument, position: Position): Hover | null {
    const qualifiedSymbol = getQualifiedSymbolAtPosition(document, position);
    if (qualifiedSymbol) {
        const enumHover = getEnumMemberHover(qualifiedSymbol.text);
        if (enumHover) {
            return {
                contents: enumHover,
                range: qualifiedSymbol.range,
            };
        }
    }

    const symbol = getSymbolAtPosition(document, position);
    if (!symbol) {
        return null;
    }

    const normalizedName = normalizeSymbolName(document, symbol);
    const state = getCompletionState();
    const functionData = state.functionRegistry[normalizedName];
    if (functionData) {
        const functionHover = getFunctionHover(normalizedName);
        if (functionHover) {
            return {
                contents: functionHover,
                range: symbol.range,
            };
        }
    }

    const completionHover =
        getCompletionHover(normalizedName, state.annotationCompletions) ??
        getCompletionHover(normalizedName, state.preprocessingCompletions) ??
        getCompletionHover(normalizedName, state.stringEntityCompletions) ??
        getCompletionHover(normalizedName, state.defaultCompletions) ??
        getCompletionHover(normalizedName, state.memberCompletions) ??
        getEnumTypeHover(normalizedName);

    if (!completionHover) {
        return null;
    }

    return {
        contents: completionHover,
        range: symbol.range,
    };
}

function getFunctionHover(functionName: string): MarkupContent | null {
    const functionData = getCompletionState().functionRegistry[functionName];
    if (!functionData) {
        return null;
    }

    const sections = [`\`\`\`opy\n${makeFunctionSignatureLabel(functionName, functionData)}\n\`\`\``];

    if (typeof functionData.description === "string" && functionData.description.trim().length > 0) {
        sections.push(functionData.description.trim());
    }

    const signature = makeSignatureHelp(functionName, functionData, 0, null)?.signatures[0];
    if (signature?.parameters && signature.parameters.length > 0) {
        const parameterDocs = signature.parameters.map((parameter) => {
            const label = Array.isArray(parameter.label)
                ? signature.label.slice(parameter.label[0], parameter.label[1])
                : parameter.label;
            const documentation =
                typeof parameter.documentation === "string"
                    ? parameter.documentation
                    : parameter.documentation?.value;
            return `- \`${label}\`${documentation ? `: ${documentation}` : ""}`;
        });
        sections.push(`Arguments:\n${parameterDocs.join("\n")}`);
    }

    return {
        kind: MarkupKind.Markdown,
        value: sections.join("\n\n"),
    };
}

function getEnumTypeHover(symbolName: string): MarkupContent | null {
    const enumCompletions = getCompletionState().constantValueCompletions[symbolName];
    if (!enumCompletions) {
        return null;
    }

    return {
        kind: MarkupKind.Markdown,
        value: `**${symbolName}**\n\nEnum with ${enumCompletions.items.length} member${enumCompletions.items.length === 1 ? "" : "s"}.`,
    };
}

function getEnumMemberHover(qualifiedName: string): MarkupContent | null {
    const [enumName, memberName] = qualifiedName.split(".");
    if (!enumName || !memberName) {
        return null;
    }

    const enumCompletions = getCompletionState().constantValueCompletions[enumName];
    const completion = enumCompletions?.items.find((item) => item.label === memberName);
    if (!completion) {
        return null;
    }

    const documentation = getCompletionDocumentation(completion);
    return {
        kind: MarkupKind.Markdown,
        value: `**${enumName}.${memberName}**${documentation ? `\n\n${documentation}` : ""}`,
    };
}

function getCompletionHover(symbolName: string, list: CompletionList): MarkupContent | null {
    const completion = list.items.find((item) => item.label === symbolName);
    if (!completion) {
        return null;
    }

    return {
        kind: MarkupKind.Markdown,
        value: `**${symbolName}**\n\n${getCompletionDocumentation(completion) ?? ""}`.trim(),
    };
}

function getCompletionDocumentation(completion: CompletionItem): string | undefined {
    if (typeof completion.documentation === "string") {
        return completion.documentation;
    }
    return completion.documentation?.value;
}

function normalizeSymbolName(document: TextDocument, symbol: PositionedText): string {
    if (symbol.text.startsWith("@")) {
        return symbol.text;
    }

    const offset = document.offsetAt(symbol.range.start);
    const previousCharacter = offset > 0 ? document.getText().charAt(offset - 1) : "";
    if (previousCharacter === "@") {
        return `@${symbol.text}`;
    }

    return symbol.text;
}

type PositionedText = {
    range: Range;
    text: string;
};

function getQualifiedSymbolAtPosition(document: TextDocument, position: Position): PositionedText | null {
    return getTextAtPosition(document, position, /[A-Za-z0-9_.]/, /[A-Za-z_][A-Za-z0-9_]*\.[A-Za-z_][A-Za-z0-9_]*/);
}

function getSymbolAtPosition(document: TextDocument, position: Position): PositionedText | null {
    return getTextAtPosition(document, position, /[@A-Za-z0-9_]/, /@?[A-Za-z_][A-Za-z0-9_]*/);
}

function getTextAtPosition(
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
