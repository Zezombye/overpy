import languageConfigurationSource from "../../../../language-configuration.json?raw";
import grammarSource from "../../../../syntaxes/overpy.tmLanguage.json?raw";
import { monaco } from "./setup";
import { registerTextMateTokensProvider } from "./textmate";

export const OVERPY_LANGUAGE_ID = "overpy";

interface LanguageConfigurationFile {
    comments: { lineComment: string; blockComment: [string, string] };
    brackets: [string, string][];
    autoClosingPairs: [string, string][];
    surroundingPairs: [string, string][];
    indentationRules: { increaseIndentPattern: string; decreaseIndentPattern: string };
}

/** Removes the comments of a JSONC document. */
function stripJsonComments(source: string): string {
    let result = "";
    let inString = false;
    for (let i = 0; i < source.length; i++) {
        const char = source[i];
        if (inString) {
            result += char;
            if (char === "\\") {
                result += source[++i];
            } else if (char === '"') {
                inString = false;
            }
        } else if (char === '"') {
            inString = true;
            result += char;
        } else if (char === "/" && source[i + 1] === "/") {
            while (i < source.length && source[i] !== "\n") {
                i++;
            }
            result += "\n";
        } else if (char === "/" && source[i + 1] === "*") {
            i = source.indexOf("*/", i + 2) + 1;
            if (i === 0) {
                throw new Error("Unterminated block comment in language-configuration.json");
            }
        } else {
            result += char;
        }
    }
    return result;
}

/** Registers the OverPy language, with the same configuration and grammar as the VS Code extension. */
export async function registerOverpyLanguage(): Promise<void> {
    const configuration = JSON.parse(stripJsonComments(languageConfigurationSource)) as LanguageConfigurationFile;

    monaco.languages.register({ id: OVERPY_LANGUAGE_ID, extensions: [".opy"], aliases: ["OverPy", "overpy"] });
    monaco.languages.setLanguageConfiguration(OVERPY_LANGUAGE_ID, {
        comments: configuration.comments,
        brackets: configuration.brackets,
        autoClosingPairs: configuration.autoClosingPairs.map(([open, close]) => ({ open, close })),
        surroundingPairs: configuration.surroundingPairs.map(([open, close]) => ({ open, close })),
        indentationRules: {
            increaseIndentPattern: new RegExp(configuration.indentationRules.increaseIndentPattern),
            decreaseIndentPattern: new RegExp(configuration.indentationRules.decreaseIndentPattern),
        },
        // Same word pattern as the extension (see setLanguageConfiguration in ../src/extension.ts).
        wordPattern: /(-?\d*\.\d\w*)|([\w]+(?!["']))/g,
    });
    await registerTextMateTokensProvider(OVERPY_LANGUAGE_ID, "source.opy", grammarSource, "overpy.tmLanguage.json");
}
