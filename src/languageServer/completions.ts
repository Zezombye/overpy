import { CompletionItem, CompletionList, InsertTextFormat, Position } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getCharacterAt, getCharacterBefore, getTextBeforePosition, getWordBeforeTrigger } from "./documentUtils";
import { CompletionState, getCompletionState } from "./completionState";
import { getSignatureContext } from "./signatureHelp";

export function getCompletionList(
    document: TextDocument,
    position: Position,
    triggerCharacter?: string,
): CompletionList {
    const state = getCompletionState(document.uri);

    if (triggerCharacter === ".") {
        const word = getWordBeforeTrigger(document, position);
        if (word === undefined) {
            return state.memberCompletions;
        }

        const constantCompletions = state.constantValueCompletions[word];
        if (constantCompletions) {
            return constantCompletions;
        }

        if (Number.isNaN(Number.parseFloat(word))) {
            return state.memberCompletions;
        }

        return { isIncomplete: false, items: [] };
    }

    if (triggerCharacter === "@") {
        return state.annotationCompletions;
    }

    if (triggerCharacter === "!") {
        return getCharacterBefore(document, position, 2) === "#" ? state.preprocessingCompletions : { isIncomplete: false, items: [] };
    }

    if (triggerCharacter === "&") {
        return getCharacterBefore(document, position, 2) === "\\" ? state.stringEntityCompletions : { isIncomplete: false, items: [] };
    }

    if (["\"", "'"].includes(getCharacterAt(document, position))) {
        return { isIncomplete: false, items: [] };
    }

    const argumentCompletions = getArgumentValueCompletions(document, position, state);
    if (argumentCompletions) {
        return argumentCompletions;
    }

    return state.defaultCompletions;
}

/**
 * When the cursor is inside a function-call argument whose declared type is an enum
 * (e.g. wait()'s `waitBehavior` of type `Wait`), surface that enum's qualified members
 * (`Wait.IGNORE_CONDITION`) hoisted above the default/extension completions.
 */
function getArgumentValueCompletions(
    document: TextDocument,
    position: Position,
    state: CompletionState,
): CompletionList | undefined {
    const context = getSignatureContext(getTextBeforePosition(document, position));
    if (!context) {
        return undefined;
    }

    const functionData = state.functionRegistry[context.functionName];
    if (!functionData || !Array.isArray(functionData.args)) {
        return undefined;
    }

    const memberOffset = functionData.isMember === true ? 1 : 0;
    const argument =
        context.keywordArgument !== null
            ? functionData.args.find((arg) => arg.name === context.keywordArgument)
            : functionData.args[context.activeParameter + memberOffset];
    if (!argument) {
        return undefined;
    }

    const enumName = resolveEnumTypeName(argument.type, state);
    if (!enumName) {
        return undefined;
    }

    const enumItems: CompletionItem[] = state.constantValueCompletions[enumName].items.map((item) => ({
        ...item,
        label: `${enumName}.${item.label}`,
        filterText: item.label,
        insertText: `${enumName}.${item.label}`,
        insertTextFormat: InsertTextFormat.PlainText,
        sortText: `0${item.label}`,
    }));

    return {
        isIncomplete: false,
        items: [...enumItems, ...state.defaultCompletions.items],
    };
}

function resolveEnumTypeName(type: unknown, state: CompletionState): string | undefined {
    const candidates = typeof type === "string" ? [type] : Array.isArray(type) ? type : [];
    for (const candidate of candidates) {
        if (typeof candidate !== "string") {
            continue;
        }
        const normalized = candidate.endsWith("Literal") ? candidate.slice(0, -"Literal".length) : candidate;
        if (state.constantValueCompletions[normalized]) {
            return normalized;
        }
    }
    return undefined;
}
