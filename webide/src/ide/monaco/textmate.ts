import { loadWASM, OnigScanner, OnigString } from "vscode-oniguruma";
import onigWasmUrl from "vscode-oniguruma/release/onig.wasm?url";
import { INITIAL, parseRawGrammar, Registry, type StateStack } from "vscode-textmate";

import { monaco } from "./setup";

/*
 * TextMate tokenization (the same engine and grammar as VS Code) plugged into Monaco's tokens provider API.
 * Each token is given its innermost scope, which the theme rules in themes.ts match by prefix.
 */

let onigurumaLoaded: Promise<void> | undefined;

function loadOniguruma(): Promise<void> {
    onigurumaLoaded ??= (async () => {
        const response = await fetch(onigWasmUrl);
        if (!response.ok) {
            throw new Error(`Could not load ${onigWasmUrl}: HTTP ${response.status}`);
        }
        await loadWASM(await response.arrayBuffer());
    })();
    return onigurumaLoaded;
}

class TokenizerState implements monaco.languages.IState {
    constructor(readonly ruleStack: StateStack) {}

    clone(): TokenizerState {
        return new TokenizerState(this.ruleStack.clone());
    }

    equals(other: monaco.languages.IState): boolean {
        return other instanceof TokenizerState && (other.ruleStack === this.ruleStack || other.ruleStack.equals(this.ruleStack));
    }
}

const TOKENIZE_TIME_LIMIT_MS = 500;

export async function registerTextMateTokensProvider(languageId: string, scopeName: string, grammarSource: string, grammarFileName: string): Promise<void> {
    await loadOniguruma();
    const registry = new Registry({
        onigLib: Promise.resolve({
            createOnigScanner: (patterns: string[]) => new OnigScanner(patterns),
            createOnigString: (text: string) => new OnigString(text),
        }),
        loadGrammar: async (requestedScopeName: string) => (requestedScopeName === scopeName ? parseRawGrammar(grammarSource, grammarFileName) : null),
    });
    const grammar = await registry.loadGrammar(scopeName);
    if (!grammar) {
        throw new Error(`Could not load the TextMate grammar ${scopeName}`);
    }

    monaco.languages.setTokensProvider(languageId, {
        getInitialState: () => new TokenizerState(INITIAL),
        tokenize: (line: string, state: monaco.languages.IState) => {
            const result = grammar.tokenizeLine(line, (state as TokenizerState).ruleStack, TOKENIZE_TIME_LIMIT_MS);
            return {
                endState: new TokenizerState(result.ruleStack),
                tokens: result.tokens.map((token) => ({ startIndex: token.startIndex, scopes: token.scopes[token.scopes.length - 1] })),
            };
        },
    });
}
