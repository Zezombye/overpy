import { Position, SignatureHelp } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getCompletionState, makeSignatureHelp } from "./completionState";
import { getTextBeforePosition } from "./documentUtils";

export function getSignatureHelp(
    document: TextDocument,
    position: Position,
    triggerCharacter?: string,
): SignatureHelp | undefined {
    if (triggerCharacter === ")") {
        return undefined;
    }

    const signatureContext = getSignatureContext(getTextBeforePosition(document, position));
    if (!signatureContext) {
        return undefined;
    }

    const functionData = getCompletionState(document.uri).functionRegistry[signatureContext.functionName];
    if (!functionData) {
        return undefined;
    }

    return makeSignatureHelp(
        signatureContext.functionName,
        functionData,
        signatureContext.activeParameter,
        signatureContext.keywordArgument,
    );
}

export type SignatureContext = {
    activeParameter: number;
    functionName: string;
    keywordArgument: string | null;
};

export function getSignatureContext(textBeforePosition: string): SignatureContext | undefined {
    let activeParameter = 0;
    let parenthesisLevel = 0;
    let isInString = false;
    let currentStringChar = "";
    let keywordArgument: string | null = null;
    let equalsSignIndex: number | null = null;
    let openParenIndex = -1;

    for (let index = textBeforePosition.length - 1; index >= 0; index--) {
        const currentChar = textBeforePosition.charAt(index);

        if (!isInString) {
            if (currentChar === ")" || currentChar === "]" || currentChar === "}") {
                parenthesisLevel++;
            } else if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
                parenthesisLevel--;
                if (parenthesisLevel < 0 && currentChar === "(") {
                    openParenIndex = index;
                    break;
                }
            } else if (currentChar === "\"" || currentChar === "'") {
                isInString = true;
                currentStringChar = currentChar;
            } else if (parenthesisLevel === 0 && currentChar === ",") {
                activeParameter++;
                if (equalsSignIndex !== null) {
                    keywordArgument = textBeforePosition.slice(index + 1, equalsSignIndex).trim();
                }
            } else if (parenthesisLevel === 0 && activeParameter === 0 && currentChar === "=" && equalsSignIndex === null) {
                equalsSignIndex = index;
            }
        } else if (currentChar === currentStringChar && (index === 0 || textBeforePosition.charAt(index - 1) !== "\\")) {
            isInString = false;
        }
    }

    if (isInString || openParenIndex < 0) {
        return undefined;
    }

    if (equalsSignIndex !== null && keywordArgument === null) {
        keywordArgument = textBeforePosition.slice(openParenIndex + 1, equalsSignIndex).trim();
    }

    const functionName = textBeforePosition.slice(0, openParenIndex).match(/[\w]+$/)?.[0];
    if (!functionName) {
        return undefined;
    }

    return {
        activeParameter,
        functionName,
        keywordArgument,
    };
}
