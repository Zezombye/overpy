import { monaco } from "./setup";

/*
 * VS Code's "Dark Modern" / "Light Modern" themes (token colors from Dark+ / Light+).
 *
 * Monaco matches a token against the rule with the longest dot-separated prefix. TextMate tokens use
 * their innermost scope (see textmate.ts), and semantic tokens use their type name, so both kinds of
 * rules live side by side. Semantic token types must all have a rule: Monaco would otherwise color
 * them with the default foreground instead of keeping the TextMate color.
 */

export const DARK_THEME = "overpy-dark";
export const LIGHT_THEME = "overpy-light";

const darkRules: monaco.editor.ITokenThemeRule[] = [
    { token: "comment", foreground: "6A9955" },
    { token: "string", foreground: "CE9178" },
    { token: "string.regexp", foreground: "D16969" },
    { token: "constant.numeric", foreground: "B5CEA8" },
    { token: "constant.language", foreground: "569CD6" },
    { token: "constant.character", foreground: "569CD6" },
    { token: "constant.character.escape", foreground: "D7BA7D" },
    { token: "keyword", foreground: "569CD6" },
    { token: "keyword.control", foreground: "C586C0" },
    { token: "keyword.operator", foreground: "D4D4D4" },
    { token: "variable.other", foreground: "9CDCFE" },
    { token: "variable.other.enummember", foreground: "4FC1FF" },
    { token: "entity.name.function", foreground: "DCDCAA" },
    { token: "support.class", foreground: "4EC9B0" },
    { token: "invalid", foreground: "F44747" },
    { token: "meta.embedded", foreground: "CCCCCC" },
    { token: "punctuation.definition.list.begin.markdown", foreground: "6796E6" },
    // Semantic token types, colored like the scopes they map to in the extension's semanticTokenScopes (../package.json).
    { token: "function", foreground: "DCDCAA" },
    { token: "method", foreground: "DCDCAA" },
    { token: "macro", foreground: "4EC9B0" },
    { token: "variable", foreground: "D4D4D4" },
    { token: "enumMember", foreground: "4FC1FF" },
    { token: "regexp", foreground: "D16969" },
];

const lightRules: monaco.editor.ITokenThemeRule[] = [
    { token: "comment", foreground: "008000" },
    { token: "string", foreground: "A31515" },
    { token: "string.regexp", foreground: "811F3F" },
    { token: "constant.numeric", foreground: "098658" },
    { token: "constant.language", foreground: "0000FF" },
    { token: "constant.character", foreground: "0000FF" },
    { token: "constant.character.escape", foreground: "EE0000" },
    { token: "keyword", foreground: "0000FF" },
    { token: "keyword.control", foreground: "AF00DB" },
    { token: "keyword.operator", foreground: "000000" },
    { token: "variable.other", foreground: "001080" },
    { token: "variable.other.enummember", foreground: "0070C1" },
    { token: "entity.name.function", foreground: "795E26" },
    { token: "support.class", foreground: "267F99" },
    { token: "invalid", foreground: "CD3131" },
    { token: "meta.embedded", foreground: "000000" },
    { token: "punctuation.definition.list.begin.markdown", foreground: "0451A5" },
    { token: "function", foreground: "795E26" },
    { token: "method", foreground: "795E26" },
    { token: "macro", foreground: "267F99" },
    { token: "variable", foreground: "000000" },
    { token: "enumMember", foreground: "0070C1" },
    { token: "regexp", foreground: "811F3F" },
];

export function defineThemes(): void {
    monaco.editor.defineTheme(DARK_THEME, {
        base: "vs-dark",
        inherit: true,
        rules: [{ token: "", foreground: "CCCCCC" }, ...darkRules],
        colors: {
            "editor.background": "#1F1F1F",
            "editor.foreground": "#CCCCCC",
            "editorLineNumber.foreground": "#6E7681",
            "editorLineNumber.activeForeground": "#CCCCCC",
            "editorIndentGuide.background1": "#404040",
            "editorIndentGuide.activeBackground1": "#707070",
            "editorGutter.background": "#1F1F1F",
            "editorWidget.background": "#202020",
            "editorWidget.border": "#454545",
            "editorSuggestWidget.background": "#202020",
            "editorSuggestWidget.border": "#454545",
            "editorSuggestWidget.selectedBackground": "#04395E",
            "editorHoverWidget.background": "#202020",
            "editorHoverWidget.border": "#454545",
            "editorOverviewRuler.border": "#010409",
            "editorStickyScroll.background": "#1F1F1F",
            "editorStickyScrollHover.background": "#2A2D2E",
            "focusBorder": "#0078D4",
            "input.background": "#313131",
            "input.border": "#3C3C3C",
            "quickInput.background": "#222222",
            "widget.border": "#313131",
            "peekViewEditor.background": "#1F1F1F",
            "peekViewResult.background": "#181818",
            "peekViewTitle.background": "#181818",
        },
    });
    monaco.editor.defineTheme(LIGHT_THEME, {
        base: "vs",
        inherit: true,
        rules: [{ token: "", foreground: "3B3B3B" }, ...lightRules],
        colors: {
            "editor.background": "#FFFFFF",
            "editor.foreground": "#3B3B3B",
            "editorLineNumber.foreground": "#6E7681",
            "editorLineNumber.activeForeground": "#171184",
            "editorIndentGuide.background1": "#D3D3D3",
            "editorIndentGuide.activeBackground1": "#939393",
            "editorGutter.background": "#FFFFFF",
            "editorWidget.background": "#F8F8F8",
            "editorWidget.border": "#CECECE",
            "editorSuggestWidget.background": "#F8F8F8",
            "editorSuggestWidget.border": "#CECECE",
            "editorHoverWidget.background": "#F8F8F8",
            "editorHoverWidget.border": "#CECECE",
            "editorStickyScroll.background": "#FFFFFF",
            "focusBorder": "#005FB8",
            "input.background": "#FFFFFF",
            "input.border": "#CECECE",
            "quickInput.background": "#F8F8F8",
            "widget.border": "#E5E5E5",
        },
    });
}
