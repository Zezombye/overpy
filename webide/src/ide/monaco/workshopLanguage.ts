import { monaco } from "./setup";

/* Workshop code (as copied from Overwatch), in .ow files. Highlighting only: it is checked when compiling. */

export const WORKSHOP_LANGUAGE_ID = "owworkshop";

export function registerWorkshopLanguage(): void {
    monaco.languages.register({ id: WORKSHOP_LANGUAGE_ID, extensions: [".ow"], aliases: ["Overwatch Workshop", "workshop"] });
    monaco.languages.setLanguageConfiguration(WORKSHOP_LANGUAGE_ID, {
        comments: { lineComment: "//", blockComment: ["/*", "*/"] },
        brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ],
        autoClosingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"', notIn: ["string"] },
        ],
        surroundingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"' },
        ],
    });
    // Token names reuse the TextMate scopes colored by the themes (themes.ts).
    monaco.languages.setMonarchTokensProvider(WORKSHOP_LANGUAGE_ID, {
        tokenPostfix: ".owworkshop",
        tokenizer: {
            root: [
                [/\/\/.*$/, "comment"],
                [/\/\*/, "comment", "@comment"],
                [/"/, "string", "@string"],
                [/\b(rule|event|conditions|actions|settings|variables|subroutines|disabled)\b/, "keyword.control"],
                [/\b(global|player)(?=\s*:)/, "keyword"],
                [/\b(Global|Event Player|True|False|Null)\b/, "constant.language"],
                [/-?\d+(\.\d+)?/, "constant.numeric"],
                [/[A-Za-z][\w\- ]*?(?=\s*\()/, "entity.name.function"],
                [/[{}()[\]]/, "@brackets"],
                [/[;,:.]/, "delimiter"],
            ],
            comment: [
                [/[^/*]+/, "comment"],
                [/\*\//, "comment", "@pop"],
                [/[/*]/, "comment"],
            ],
            string: [
                [/[^\\"{]+/, "string"],
                [/\\./, "constant.character.escape"],
                [/\{\d+\}/, "constant.character.escape"],
                [/\{/, "string"],
                [/"/, "string", "@pop"],
            ],
        },
    });
}
