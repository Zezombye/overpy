/*
 * Project settings: OverPy compiler directives that apply to the whole project. They are put at the top of the
 * generated main file (see lsp/project.ts), before the project's files, which can override them with their own
 * directives (e.g. #!disableOptimizeStrict). Shared by the API server (validation) and the frontend.
 * Must not import anything.
 */

interface BaseDefinition {
    key: string;
    section: string;
    title: string;
    description: string;
    /** Only applies if this boolean setting is enabled. */
    requires?: string;
}

export type ProjectSettingDefinition = BaseDefinition &
    (
        | { type: "boolean"; directive: string }
        | { type: "string"; directive: string; placeholder: string; quoted?: boolean }
        | { type: "select"; options: { value: string; label: string; directive: string | null }[] }
    );

export type ProjectSettings = Record<string, boolean | string>;

const SIZE_OPTIMIZATIONS_REQUIRED = "Requires Optimize For Size.";

export const PROJECT_SETTINGS: ProjectSettingDefinition[] = [
    {
        key: "optimizeStrict",
        section: "Optimizations",
        title: "Strict Optimizations",
        description:
            "Disables the optimizations that can change the result of type conversion tricks (e.g. A*0, A+0, A or true). Decompiled gamemodes may rely on them. (#!optimizeStrict)",
        type: "boolean",
        directive: "optimizeStrict",
    },
    {
        key: "disableOptimizations",
        section: "Optimizations",
        title: "Disable Optimizations",
        description: "Disables all the optimizations done by the compiler. (#!disableOptimizations)",
        type: "boolean",
        directive: "disableOptimizations",
    },
    {
        key: "optimizeForSize",
        section: "Optimizations",
        title: "Optimize For Size",
        description: "Prioritizes lowering the number of elements over the runtime performance. (#!optimizeForSize)",
        type: "boolean",
        directive: "optimizeForSize",
    },
    {
        key: "optimizeForSizeAggressive",
        section: "Optimizations",
        title: "Aggressive Size Optimizations",
        description: "Lowers the number of elements further, at the expense of readability (e.g. replaces 'if' by 'skip if', compresses arrays). (#!optimizeForSizeAggressive)",
        type: "boolean",
        directive: "optimizeForSizeAggressive",
        requires: "optimizeForSize",
    },
    {
        key: "useVariableForCompressionAlphabet",
        section: "Optimizations",
        title: "Variable For Compression Alphabet",
        description: "The compression functions use a global variable instead of a string for their alphabet, which saves elements. (#!useVariableForCompressionAlphabet)",
        type: "boolean",
        directive: "useVariableForCompressionAlphabet",
    },
    {
        key: "replace0By",
        section: "Size Tricks",
        title: "Replace 0 By",
        description: `Replaces 0 (when null or false cannot be used) by a value that is always 0 in the gamemode. The gamemode must not be playable in the game modes where it is not. ${SIZE_OPTIMIZATIONS_REQUIRED}`,
        type: "select",
        options: [
            { value: "none", label: "Nothing", directive: null },
            { value: "capturePercentage", label: "getCapturePercentage() (not Assault, Hybrid, Elimination)", directive: "replace0ByCapturePercentage" },
            { value: "payloadProgressPercentage", label: "getPayloadProgressPercentage() (not Hybrid, Escort)", directive: "replace0ByPayloadProgressPercentage" },
            { value: "isMatchComplete", label: "isMatchComplete() (endless gamemodes)", directive: "replace0ByIsMatchComplete" },
        ],
        requires: "optimizeForSize",
    },
    {
        key: "replace1ByMatchRound",
        section: "Size Tricks",
        title: "Replace 1 By getMatchRound()",
        description: `Replaces 1 (when true cannot be used) by getMatchRound(). The gamemode must not be playable in Assault, Hybrid, Escort (competitive) or Control. ${SIZE_OPTIMIZATIONS_REQUIRED} (#!replace1ByMatchRound)`,
        type: "boolean",
        directive: "replace1ByMatchRound",
        requires: "optimizeForSize",
    },
    {
        key: "replaceTeam1ByControlScoringTeam",
        section: "Size Tricks",
        title: "Replace Team.1 By getControlScoringTeam()",
        description: `The gamemode must not be playable in Control. ${SIZE_OPTIMIZATIONS_REQUIRED} (#!replaceTeam1ByControlScoringTeam)`,
        type: "boolean",
        directive: "replaceTeam1ByControlScoringTeam",
        requires: "optimizeForSize",
    },
    {
        key: "replaceEmptyStringBy",
        section: "Size Tricks",
        title: "Replace Empty Strings By",
        description: `An empty array can break some code (e.g. .concat([]) unrolls the array); a variable takes one more element per string. ${SIZE_OPTIMIZATIONS_REQUIRED}`,
        type: "select",
        options: [
            { value: "none", label: "Nothing", directive: null },
            { value: "emptyArray", label: "An empty array", directive: "replaceEmptyStringByEmptyArray" },
            { value: "variable", label: "A global variable", directive: "replaceEmptyStringByVariable" },
        ],
        requires: "optimizeForSize",
    },
    {
        key: "disableInspector",
        section: "Workshop",
        title: "Disable Inspector",
        description: "Adds a rule that disables the inspector at the start of the gamemode. (#!disableInspector)",
        type: "boolean",
        directive: "disableInspector",
    },
    {
        key: "excludeVariablesInCompilation",
        section: "Workshop",
        title: "Exclude Variables",
        description: "Leaves the variables block out of the compiled code, to paste it into another gamemode with different variable indexes. (#!excludeVariablesInCompilation)",
        type: "boolean",
        directive: "excludeVariablesInCompilation",
    },
    {
        key: "setupTags",
        section: "Workshop",
        title: "Set Up Tags",
        description:
            "Adds a rule that obtains the '<' character for <tx> and <fg> tags. Warning: it creates and destroys a dummy bot, which triggers the each player rules. (#!setupTags)",
        type: "boolean",
        directive: "setupTags",
    },
    {
        key: "globalvarInitRuleName",
        section: "Workshop",
        title: "Global Variables Init Rule Name",
        description: "Name of the generated rule that initializes the global variables. (#!globalvarInitRuleName)",
        type: "string",
        directive: "globalvarInitRuleName",
        placeholder: "Default name",
        quoted: true,
    },
    {
        key: "playervarInitRuleName",
        section: "Workshop",
        title: "Player Variables Init Rule Name",
        description: "Name of the generated rule that initializes the player variables. (#!playervarInitRuleName)",
        type: "string",
        directive: "playervarInitRuleName",
        placeholder: "Default name",
        quoted: true,
    },
    {
        key: "suppressWarnings",
        section: "Compilation",
        title: "Suppress Warnings",
        description: "Warnings to suppress in the whole project, separated by spaces (e.g. w_wait_in_loop). (#!suppressWarnings)",
        type: "string",
        directive: "suppressWarnings",
        placeholder: "w_...",
    },
    {
        key: "debugElementCount",
        section: "Compilation",
        title: "Debug Element Count",
        description: "Adds the number of elements of each rule, condition and action to the compiled code. (#!debugElementCount)",
        type: "boolean",
        directive: "debugElementCount",
    },
    {
        key: "allowMacroRedeclaration",
        section: "Compilation",
        title: "Allow Macro Redeclaration",
        description: "Redefining a macro, #!define or enum member overwrites the previous definition instead of being an error. (#!allowMacroRedeclaration)",
        type: "boolean",
        directive: "allowMacroRedeclaration",
    },
    {
        key: "writeToOutputFile",
        section: "Compilation",
        title: "Write To Output File",
        description: "Also writes the compiled code to main.ws.txt in the project. (#!writeToOutputFile)",
        type: "boolean",
        directive: "writeToOutputFile",
    },
    {
        key: "translations",
        section: "Translations",
        title: "Languages",
        description: "Enables the translation system for these languages, separated by spaces (e.g. en fr es_mx). (#!translations)",
        type: "string",
        directive: "translations",
        placeholder: "None",
    },
    {
        key: "translateWithPlayerVar",
        section: "Translations",
        title: "Translate With Player Variable",
        description: "Stores the language of each player in a variable, which saves a lot of elements (see the directive's documentation). (#!translateWithPlayerVar)",
        type: "boolean",
        directive: "translateWithPlayerVar",
    },
    {
        key: "keepUnusedTranslations",
        section: "Translations",
        title: "Keep Unused Translations",
        description: "Unused translations are not removed from the .po files. (#!keepUnusedTranslations)",
        type: "boolean",
        directive: "keepUnusedTranslations",
    },
    {
        key: "disableTranslationSourceLines",
        section: "Translations",
        title: "No Source Lines In Translations",
        description: "The .po files do not include the source lines of the strings. (#!disableTranslationSourceLines)",
        type: "boolean",
        directive: "disableTranslationSourceLines",
    },
];

const definitionsByKey = new Map(PROJECT_SETTINGS.map((definition) => [definition.key, definition]));

const MAX_STRING_SETTING_LENGTH = 500;

/** The value of a setting, or its default (off, empty or "none"). */
export function projectSettingValue(settings: ProjectSettings, definition: ProjectSettingDefinition): boolean | string {
    const value = settings[definition.key];
    if (value !== undefined) {
        return value;
    }
    return definition.type === "boolean" ? false : definition.type === "string" ? "" : "none";
}

/** Returns an error message, or null if the settings are valid. */
export function validateProjectSettings(settings: unknown): string | null {
    if (typeof settings !== "object" || settings === null || Array.isArray(settings)) {
        return "The project settings must be an object.";
    }
    for (const [key, value] of Object.entries(settings)) {
        const definition = definitionsByKey.get(key);
        if (!definition) {
            return `Unknown project setting '${key}'.`;
        }
        if (definition.type === "boolean" && typeof value !== "boolean") {
            return `The project setting '${key}' must be a boolean.`;
        }
        if (definition.type === "string" && (typeof value !== "string" || value.length > MAX_STRING_SETTING_LENGTH || /[\r\n]/.test(value))) {
            return `The project setting '${key}' must be a single line of at most ${MAX_STRING_SETTING_LENGTH} characters.`;
        }
        if (definition.type === "select" && !definition.options.some((option) => option.value === value)) {
            return `Invalid value for the project setting '${key}'.`;
        }
    }
    return null;
}

/** The compiler directives of the settings, as OverPy code. */
export function projectSettingsDirectives(settings: ProjectSettings): string {
    const lines: string[] = [];
    for (const definition of PROJECT_SETTINGS) {
        const value = projectSettingValue(settings, definition);
        if (definition.requires && projectSettingValue(settings, definitionsByKey.get(definition.requires)!) !== true) {
            continue;
        }
        if (definition.type === "boolean" && value === true) {
            lines.push(`#!${definition.directive}`);
        } else if (definition.type === "string" && typeof value === "string" && value.trim() !== "") {
            const argument = definition.quoted ? `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : value.trim();
            lines.push(`#!${definition.directive} ${argument}`);
        } else if (definition.type === "select") {
            const directive = definition.options.find((option) => option.value === value)?.directive;
            if (directive) {
                lines.push(`#!${directive}`);
            }
        }
    }
    return lines.map((line) => `${line}\n`).join("");
}
