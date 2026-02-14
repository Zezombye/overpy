/*
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/* TODO: Refactor OverPy to instantiate compilation/decompilation state WITHIN the compile/decompile functions
and remove the global variables, instead passing the state down via reference to an object within the compile/decompile closure.
*/
"use strict";
import { mapKw } from "./data/maps";
import { opyKeywords } from "./data/opy/keywords";
import { camelCaseToUpperCase } from "./utils/other";
import { Constant, constantValues } from "./data/constants";
import { AstConstantData, AstMacroData, CompilationDiagnostic, FileStackMember, MacroData, Overwatch2Heroes, ow_languages, OWLanguage, ScriptFileStackMember, Subroutine, Type, Value, Variable } from "./types.d.js";
import { Ast, getAstForE, getAstForFalse, getAstForInfinity, getAstForNull, getAstForNullVector, getAstForNumber, getAstForTeamAll, getAstForTrue } from "./utils/ast";
import { TranslatedString, TranslationLanguage } from "./compiler/translations";
import { heroKw } from "./data/heroes";
import { gamemodeKw } from "./data/gamemodes";
import { valueFuncKw } from "./data/values";
import { Action, actionKw } from "./data/actions";
import { opyInternalFuncs } from "./data/opy/internalFunctions";
import { customGameSettingsKw, eventPlayerKw, eventSlotKw } from "./data/other";
import { opyFuncs } from "./data/opy/functions";
import { opyMacros } from "./data/opy/macros";
import { customGameSettingsSchema } from "./data/customGameSettings";
import { error } from "./utils/logging";

export var globalVariables: Variable[] = [];
export var playerVariables: Variable[] = [];
export var subroutines: Subroutine[] = [];
export var currentLanguage: OWLanguage;

export const ELEMENT_LIMIT = 32768;
//The workshop behaves weirdly with this limit (sometimes it is 100M instead of 10M), so don't perform optimizations if going beyond it
export const NUMBER_LIMIT = 10_000_000;
//The max length of a custom string, in UTF-8 characters. Beyond this limit, we need to split the string.
//The max total length of 511 bytes got removed.
export const STR_MAX_LENGTH = 128;
//The max number of arguments in a custom string. Beyond this limit, we need to split the string.
export const STR_MAX_ARGS = 3;

export const PAGE_SIZE = 100;
//If it is in a browser then it is assumed to be in debug mode.
// @ts-ignore
export const IS_IN_BROWSER = typeof window !== "undefined";
// @ts-ignore
export const DEBUG_MODE = IS_IN_BROWSER && window.location.host !== "vscode.dev";
export const DEBUG_PROFILER = false;

//Compilation variables - are reset at each compilation.


export var mainFileName: string;
export const setMainFileName = (name: string) => (mainFileName = name);
/**
 * The absolute path of the folder containing the main file. Used for relative paths. */
export var rootPath: string;
export const setRootPath = (path: string) => (rootPath = path);

//postCompileHook
type PostCompileHook = (content: string) => string;
export var postCompileHook:PostCompileHook = (c) => c;
export var resetPostCompileHook = () => (postCompileHook = (c) => c);
export var registerPostCompileHook = (hook: PostCompileHook) => (postCompileHook = hook); 
//Global variables used to keep track of the name for the current array element/index.
//Should be null at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
export var currentArrayElementName: string;
export const setCurrentArrayElementName = (name: string) => (currentArrayElementName = name);
export var currentArrayIndexName: string;
export const setCurrentArrayIndexName = (name: string) => (currentArrayIndexName = name);

//Set at each rule, to get the rule name for translated strings
export var currentRuleName: string;
export const setCurrentRuleName = (name: string) => (currentRuleName = name);

/**
 * Set at each rule, to check whether it is legal to use "eventPlayer" and related. */
export var currentRuleEvent: string;
export const setCurrentRuleEvent = (event: string) => (currentRuleEvent = event);

//Set at each rule (but only in astToWorkshop). Used for ruleCondition.
export var currentRuleConditions: Ast[];
export const setCurrentRuleConditions = (conditions: Ast[]) => (currentRuleConditions = conditions);

/**
 * @possibly_unused
 *
 * The encountered labels throughout the rule, to not have duplicate labels. Set at each rule. */
export var currentRuleLabels: string[];
export const resetCurrentRuleLabels = () => (currentRuleLabels = []);
export const setCurrentRuleLabels = (newRuleLabels: string[]) => (currentRuleLabels = newRuleLabels);

/**
 * The number of times the specified label is referenced. If that number is 0, then the label is considered as not accessed. */
export var currentRuleLabelAccess: Record<string, number>;
export const clearRuleLabelAccess = () => (currentRuleLabelAccess = {});
export var currentRuleHasVariableGoto: boolean;
export const resetRuleHasVariableGoto = () => (currentRuleHasVariableGoto = false);
export const setRuleHasVariableGoto = (value: boolean) => (currentRuleHasVariableGoto = value);

//Optimization settings.
export var enableOptimization: boolean;
export const setOptimizationEnabled = (enabled: boolean) => (enableOptimization = enabled);
export var optimizeForSize: boolean;
export const setOptimizationForSize = (size: boolean) => (optimizeForSize = size);
export var optimizeStrict: boolean;
export const setOptimizeStrict = (strict: boolean) => (optimizeStrict = strict);

/** Contains all macros. */
export var macros: MacroData[] = [];
export const resetMacros = () => (macros = []);
export var astConstants: Record<string, AstConstantData> = {};
export var astMacros: Record<string, AstMacroData> = {};
export var astMacroLocalVariables: string[] = [];
//Reset at each macro parse
export const resetAstMacroLocalVariables = () => (astMacroLocalVariables = []);

/** All warnings encountered during this compilation run. */
export var encounteredWarnings: CompilationDiagnostic[] = [];
/** All warnings encountered during this compilation run that were either suppressed or otherwise ignored. */
export let hiddenWarnings: string[] = [];
/** A set of warning types that will not invoke a visible warning.
 * Specified using the \@SuppressWarnings annotation, and applies to
 * the current rule only.
 */
export var suppressedWarningTypes: string[];
/** A set of warning types that will not invoke a visible warning */
export var globallySuppressedWarningTypes: string[];

/** A list of imported files, to prevent import loops.
 */
export var importedFiles: string[] = [];

export var disableUnusedVars: boolean;

export var compiledCustomGameSettings: string;
export const setCompiledCustomGameSettings = (settings: string) => (compiledCustomGameSettings = settings);

/** The stack of the files (macros count as "files").
 */
export let fileStack: FileStackMember[] = [];
export const setFileStack = (newFileStack: FileStackMember[]) => (fileStack = newFileStack);
export const pushToFileStack = (newMember: FileStackMember) => fileStack.push(newMember);
export const popFromFileStack = (): FileStackMember | undefined => fileStack.pop();

/** An unique number for automatically generated labels. */
export var uniqueNumber: number;
export const incrementUniqueNumber = () => uniqueNumber++;

//Initialization directives for global and player variables.
export var globalInitDirectives: Ast[] = [];
export var playerInitDirectives: Ast[] = [];

/** Workshop setting names, as each name must be unique even if belonging to different categories. */
export var workshopSettingNames: string[] = [];

/** User-declared enums. */
export var enumMembers: Record<string, Record<string, Ast>> = {};

//Replacements for 0, 1, and Team.1. Those are functions that give exactly those values, and are able to be applied to all inputs. As such, they are not function dependent.
export var replacementFor0 = "";
export const setReplacementFor0 = (replacement: string) => (replacementFor0 = replacement);
export var replacementFor1 = "";
export const setReplacementFor1 = (replacement: string) => (replacementFor1 = replacement);
export var replacementForTeam1 = "";
export const setReplacementForTeam1 = (replacement: string) => (replacementForTeam1 = replacement);

/** The number of elements the gamemode takes. */
export var nbElements: number;
export const resetNbElements = () => (nbElements = 0);
export const incrementNbElements = (amount = 1) => (nbElements += amount);
export const decrementNbElements = (amount = 1) => (nbElements -= amount);

/** For the weird behavior where element count goes up by 1 for every 2 hero literals in the parameters of an action argument. */
export var nbHeroesInValue: number;
export const resetNbHeroesInValue = () => (nbHeroesInValue = 0);
export const incrementNbHeroesInValue = (amount = 1) => (nbHeroesInValue += amount);
export const decrementNbHeroesInValue = (amount = 1) => (nbHeroesInValue -= amount);

/** The extensions that are activated in the current gamemode. */
export var activatedExtensions: string[];
export const setActivatedExtensions = (extensions: string[]) => (activatedExtensions = extensions);
/** The amount of available extension points. */
export var availableExtensionPoints: number;
export const setAvailableExtensionPoints = (points: number) => (availableExtensionPoints = points);

//Bypass for <tx> and <fg>
export var enableTagsSetup: boolean;
export const setEnableTagsSetup = (enable: boolean) => (enableTagsSetup = enable);

//List of translation languages
export var translationLanguages: TranslationLanguage[] = [];
export const setTranslationLanguages = (languages: TranslationLanguage[]) => (translationLanguages = languages);

export var keepUnusedTranslations: boolean;
export const setKeepUnusedTranslations = (keep: boolean) => (keepUnusedTranslations = keep);

export var disableTranslationSourceLines: boolean;
export const setDisableTranslationSourceLines = (disable: boolean) => (disableTranslationSourceLines = disable);

//List of translated strings encountered during compilation
export var translatedStrings: TranslatedString[] = [];
export const setTranslatedStrings = (strings: TranslatedString[]) => (translatedStrings = strings);

//The constant that will be used to determine the player's language
export var translationLanguageConstant: any;
export const setTranslationLanguageConstant = (constant: any) => (translationLanguageConstant = constant);

export var translationLanguageConstantOpy: string;
export const setTranslationLanguageConstantOpy = (constant: string) => (translationLanguageConstantOpy = constant);

export var usePlayerVarForTranslations: boolean;
export const setUsePlayerVarForTranslations = (use: boolean) => (usePlayerVarForTranslations = use);
export var generateRuleForTranslationsPlayerVar: boolean;
export const setGenerateRuleForTranslationsPlayerVar = (generate: boolean) => (generateRuleForTranslationsPlayerVar = generate);

export var excludeVariablesInCompilation: boolean;
export const setExcludeVariablesInCompilation = (exclude: boolean) => (excludeVariablesInCompilation = exclude);

export var globalvarInitRuleName: string;
export const setGlobalvarInitRuleName = (name: string) => (globalvarInitRuleName = name);
export var playervarInitRuleName: string;
export const setPlayervarInitRuleName = (name: string) => (playervarInitRuleName = name);

export var disableInspector: boolean = false;
export const setDisableInspector = (disable: boolean) => (disableInspector = disable);

//Decompilation variables

/** Global variable used for "skip", to keep track of where the skip ends.
 *
 * Is reset at each rule.
 */
export var decompilerGotos: { remainingActions: number; label: string }[];
export const resetDecompilerGotos = () => (decompilerGotos = []);

/** Global variable used for the number of tabs.
 *
 * Is reset at each rule.
 */
export var nbTabs: number;
export const resetNbTabs = () => (nbTabs = 0);
export const incrementNbTabs = () => nbTabs++;
export const decrementNbTabs = () => nbTabs--;
export const setNbTabs = (nb: number) => (nbTabs = nb);

/** Global variable used to mark the action number of the last loop in the rule.
 *
 * Is reset at each rule.
 */
export var decompilationLabelNumber: number;
export const resetDecompilationLabelNumber = () => (decompilationLabelNumber = 0);
export const incrementDecompilationLabelNumber = () => decompilationLabelNumber++;

/** Global variable used to keep track of operator precedence.
 *
 * Is reset at each action and rule condition.
 */
export var operatorPrecedenceStack: Record<string, number>[];

export function resetGlobalVariables(language: OWLanguage) {
    rootPath = "";
    currentArrayElementName = "";
    currentArrayIndexName = "";
    currentLanguage = language;
    currentRuleName = "";
    currentRuleEvent = "";
    currentRuleConditions = [];
    currentRuleHasVariableGoto = false;
    currentRuleLabels = [];
    currentRuleLabelAccess = {};
    macros = [];
    astMacros = {};
    astConstants = {};
    astMacroLocalVariables = [];
    fileStack = [];
    decompilerGotos = [];
    nbTabs = 0;
    operatorPrecedenceStack = [];
    globalVariables = [];
    playerVariables = [];
    subroutines = [];
    encounteredWarnings = [];
    hiddenWarnings = [];
    suppressedWarningTypes = [];
    globallySuppressedWarningTypes = [];
    importedFiles = [];
    disableUnusedVars = false;
    compiledCustomGameSettings = "";
    enableOptimization = true;
    optimizeForSize = false;
    optimizeStrict = false;
    uniqueNumber = 1;
    globalInitDirectives = [];
    playerInitDirectives = [];
    workshopSettingNames = [];
    enumMembers = {};
    replacementFor0 = "";
    replacementFor1 = "";
    replacementForTeam1 = "";
    nbElements = 0;
    activatedExtensions = [];
    availableExtensionPoints = 0;
    enableTagsSetup = false;
    nbHeroesInValue = 0;
    translationLanguages = [];
    translatedStrings = [];
    mainFileName = "";
    translationLanguageConstant = null;
    translationLanguageConstantOpy = "";
    usePlayerVarForTranslations = false;
    generateRuleForTranslationsPlayerVar = true;
    excludeVariablesInCompilation = false;
    globalvarInitRuleName = "Initialize global variables";
    playervarInitRuleName = "Initialize player variables";
    disableInspector = false;
    keepUnusedTranslations = false;
    disableTranslationSourceLines = false;
}

//Other constants

//Operator precedence, from lowest to highest.
export const operatorPrecedence: Record<string, number> = {
    "=": 1,
    "+=": 1,
    "-=": 1,
    "*=": 1,
    "/=": 1,
    "%=": 1,
    "**=": 1,
    "min=": 1,
    "max=": 1,
    if: 2,
    or: 3,
    and: 4,
    not: 5,
    in: 7,
    "==": 7,
    "!=": 7,
    "<=": 7,
    ">=": 7,
    ">": 7,
    "<": 7,
    "+": 8,
    "-": 8,
    "*": 9,
    "/": 9,
    "%": 9,
    //unary plus/minus: 10,
    "**": 11,
};

export const astOperatorPrecedence: Record<string, number> = {
    __ifThenElse__: 2,
    __or__: 3,
    __and__: 4,
    __not__: 5,
    __arrayContains__: 6,
    __equals__: 6,
    __inequals__: 6,
    __lessThanOrEquals__: 6,
    __greaterThanOrEquals__: 6,
    __lessThan__: 6,
    __greaterThan__: 6,
    __add__: 7,
    __subtract__: 7,
    __multiply__: 8,
    __divide__: 8,
    __modulo__: 8,
    __negate__: 9,
    __raiseToPower__: 9,
};

//Text that gets inserted on top of all js scripts.
export const builtInJsFunctions = `
function vect(x,y,z) {
    return ({
        x:x,
        y:y,
        z:z,
        toString: function() {
            return "vect("+this.x+","+this.y+","+this.z+")";
        }
    });
}

var Map = {${Object.keys(mapKw).map((x) => `${camelCaseToUpperCase(x)}:'Map.${camelCaseToUpperCase(x)}'`).join(",")}}
var Hero = {${Object.keys(heroKw).map((x) => `${camelCaseToUpperCase(x)}:'Hero.${camelCaseToUpperCase(x)}'`).join(",")}}
var Gamemode = {${Object.keys(gamemodeKw).map((x) => `${camelCaseToUpperCase(x)}:'Gamemode.${camelCaseToUpperCase(x)}'`).join(",")}}
var Color = {${Object.keys(constantValues.ColorLiteral).map((x) => `${camelCaseToUpperCase(x)}:'Color.${camelCaseToUpperCase(x)}'`).join(",")}}
var Team = {${Object.keys(constantValues.TeamLiteral).map((x) => `${camelCaseToUpperCase(x)}:'Team.${camelCaseToUpperCase(x)}'`).join(",")}}
var Button = {${Object.keys(constantValues.ButtonLiteral).map((x) => `${camelCaseToUpperCase(x)}:'Button.${camelCaseToUpperCase(x)}'`).join(",")}}
`;

export const builtInJsFunctionsNbLines = builtInJsFunctions.split("\n").length;

export const defaultVarNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ", "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ", "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ", "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX"];

//Sub0 to Sub127
export const defaultSubroutineNames = Array(128)
    .fill("")
    .map((e, i) => i)
    .map((x) => "Sub" + x);

//Names that cannot be used for global variables or subroutines.
export const reservedNames = Object.keys(opyKeywords);
export const reservedSubroutineNames = Object.keys(opyKeywords);

//Characters that are visually the same as normal ASCII characters (when uppercased), but make the string appear in "big letters" (the i18n font).
//For now, only greek letters and the "line separator" character.
//Let me know if you find any other such characters.
export const bigLettersMappings: Record<string, string> = {
    a: "Α",
    A: "Α",
    b: "Β",
    B: "Β",
    e: "Ε",
    E: "Ε",
    h: "Η",
    H: "Η",
    i: "Ι",
    I: "Ι",
    k: "Κ",
    K: "Κ",
    m: "Μ",
    M: "Μ",
    n: "Ν",
    N: "Ν",
    o: "Ο",
    O: "Ο",
    p: "Ρ",
    P: "Ρ",
    t: "Τ",
    T: "Τ",
    x: "Χ",
    X: "Χ",
    y: "Υ",
    Y: "Υ",
    z: "Ζ",
    Z: "Ζ",
    ".": "\u2024",
    " ": "\u2028", //line separator
};

//Fullwidth characters
export var fullwidthMappings: Record<string, string> = {
    " ": " ",
    "¥": "￥",
    "₩": "￦",
    "¢": "￠",
    "£": "￡",
    "¯": "￣",
    "¬": "￢",
    "¦": "￤",
};
for (var char of "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~") {
    fullwidthMappings[char] = String.fromCodePoint(char.charCodeAt(0) + 0xfee0);
}

export const caseSensitiveReplacements: Record<string, string> = {
    æ: "ӕ",
    nj: "ǌ",
    " a ": " ａ ",
    a: "ạ",
    b: "ḅ",
    c: "ƈ",
    d: "ḍ",
    e: "ẹ",
    f: "ƒ",
    g: "ǥ",
    h: "һ",
    i: "і",
    j: "ј",
    k: "ḳ",
    l: "I",
    m: "ṃ",
    n: "ṇ",
    o: "ο",
    p: "ṗ",
    q: "ǫ",
    r: "ṛ",
    s: "ѕ",
    t: "ṭ",
    u: "υ",
    v: "ν",
    w: "ẉ",
    x: "ҳ",
    y: "ỵ",
    z: "ẓ",
};

//Combinations of 0x01 through 0x1F (excluding 0x09, 0x0A and 0x0D). Used for workshop settings to prevent duplicates.
//These characters render as zero-width spaces in Overwatch.
//For some reason, 0x0B and 0x0C aren't sorted according to their ascii value.
export var workshopSettingWhitespaceChars = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, /*0x0b,0x0c,*/ 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d];
export var workshopSettingWhitespace: string[] = [];
for (var chr of workshopSettingWhitespaceChars) {
    workshopSettingWhitespace.push(String.fromCodePoint(chr));
    workshopSettingWhitespace.push(String.fromCodePoint(0x1e, chr));
    workshopSettingWhitespace.push(String.fromCodePoint(0x1f, chr));
}
workshopSettingWhitespace.sort();

export let typeTree: (string | Record<string, any>)[] = [
    {
        Object: [
            "Player",
            {
                float: [
                    {
                        FloatLiteral: [
                            {
                                IntLiteral: ["UnsignedIntLiteral", "SignedIntLiteral"],
                            },
                            {
                                UnsignedFloatLiteral: ["UnsignedIntLiteral"],
                            },
                            {
                                SignedFloatLiteral: ["SignedIntLiteral"],
                            },
                        ],
                    },
                    {
                        "unsigned float": ["unsigned int"],
                    },
                    {
                        "signed float": ["signed int"],
                    },
                    {
                        int: [
                            {
                                IntLiteral: ["UnsignedIntLiteral", "SignedIntLiteral"],
                            },
                            "unsigned int",
                            "signed int",
                        ],
                    },
                ],
            },
            { bool: ["BoolLiteral"] },
            "DamageModificationId",
            "HealingModificationId",
            "DotId",
            "HotId",
            "EntityId",
            "TextId",
            "HealthPoolId",
            "AssistId",
            "String",
            { Direction: ["Vector"] },
            { Position: ["Vector"] },
            { Velocity: ["Vector"] },
            "Hero",
            "Map",
            "Team",
            "Gamemode",
            "Button",
            "Color",
        ],
    },
    "Array",
    "void",
    "Type",

    "Subroutine",
    "GlobalVariable",
    "PlayerVariable",

    "HeroLiteral",
    "MapLiteral",
    "GamemodeLiteral",
    "TeamLiteral",
    "ButtonLiteral",
    "ColorLiteral",

    {
        StringLiteral: [
            "LocalizedStringLiteral",
            "CustomStringLiteral",
        ],
    },

    "Value",

    //OverPy internal types
    "Lambda",
    "Label",
    "Dict",
    "DictKey",
    "DictElem",
    "Raycast",
];

//Which types are suitable for a given type.
//For example, typeMatrix["float"] = ["float", "int", etc].
export const typeMatrix: Record<string, string[]> = {};

/**
 * Allow other files to perform work after data has been loaded.
 * Higher priorities are executed later.
 *
 * See {@link postInitialLoad} for more details
 */
export let postLoadTasks: { task: () => void; priority: number }[] = [];

//Can't put that in constants.ts because it would create a circular import dependency.
postLoadTasks.push({
    task: () => {
        // @ts-ignore: we will fill in the description later in this task.
        constantValues["HeroLiteral"] = {};
        for (var key of Object.keys(heroKw)) {
            constantValues["HeroLiteral"][camelCaseToUpperCase(key)] = heroKw[key as keyof typeof heroKw];
        }
        // @ts-ignore: we will fill in the description later in this task.
        constantValues["MapLiteral"] = {};
        for (var key of Object.keys(mapKw)) {
            constantValues["MapLiteral"][camelCaseToUpperCase(key)] = mapKw[key];
        }
        // @ts-ignore: we will fill in the description later in this task.
        constantValues["GamemodeLiteral"] = {};
        for (var key of Object.keys(gamemodeKw)) {
            constantValues["GamemodeLiteral"][camelCaseToUpperCase(key)] = gamemodeKw[key];
        }

        constantValues["__ChaseReeval__"] = Object.assign({}, constantValues["ChaseRateReeval"], constantValues["ChaseTimeReeval"]);

        for (var key in constantValues) {
            if (key.endsWith("Literal")) {
                constantValues[key].description = "The built-in `"+key.substring(0, key.length-"Literal".length)+"` enum.";
            } else {
                constantValues[key].description = "The built-in `"+key+"` enum.";
            }
        }
    },
    priority: 20
});


/**
 * A constant function is defined as a function/constant that will always return the same value throughout the lifetime of a game. (This means "current gamemode" and "current map" are valid, as you cannot change a map without restarting the game.)
 * Here we store the functions that are not constant, as it is easier to check with astContainsFunctions().
*/
export let notConstantFunctions: string[];

/*
A literal is defined as a constant function that returns a constant value unique among all other constants (according to ==).
For example, getAllHeroes() is not a literal as it is a composite of [Hero.REAPER, Hero.TRACER, ...]
Literals are basically just numbers, strings, vectors, and built-in constants such as heroes and maps.
Arrays are not literals as [123] == 123, and true/false/null are not literals as true == 1, false == 0, and null == 0.
heroIcon is a literal, but abilityIconString is not, as different heroes can have the same ability icon.
Strings are only literals if containing no formatters.
*/
export let literalFunctions: string[];

export let constantKw: Record<string, Constant> = {};


//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
export let valueKw: Record<string, Value> & Record<string, Constant>;

export let wsFuncKw: Record<string, Action> & Record<string, Value>;

export let funcKw: Record<string, Action> & Record<string, Value> & typeof opyInternalFuncs;

postLoadTasks.push({
    task: () => {
        Object.assign(eventPlayerKw, eventSlotKw, heroKw);

        notConstantFunctions = Object.keys(valueFuncKw).filter(x => !valueFuncKw[x].isConstant);
        literalFunctions = Object.keys(valueFuncKw).filter(x => valueFuncKw[x].isLiteral);

        for (var constant of Object.keys(constantValues)) {
            for (var value of Object.keys(constantValues[constant])) {
                constantKw[constant+"."+value] = constantValues[constant][value];
            }
        }

        valueKw = Object.assign({}, valueFuncKw, constantKw);

        wsFuncKw = Object.assign({}, actionKw, valueFuncKw);

        funcKw = Object.assign({}, wsFuncKw, opyFuncs, opyInternalFuncs, opyMacros);

        for (var func in funcKw) {
            let funcArgs = funcKw[func].args;
            if (funcArgs === null) {
                reservedNames.push(func);
            } else if (funcArgs.length === 0) {
                reservedSubroutineNames.push(func);
            }
        }


        //Set whether a macro argument is duplicated (if so, it will be checked to not contain random values)
        for (let macroName in opyMacros) {
            let macro = opyMacros[macroName];
            if (macro.args) {
                for (let arg of macro.args) {
                    if ((macro.macro.match(new RegExp("\\$" + arg.name, "g")) || []).length > 1) {
                        arg.isDuplicatedInMacro = true;
                    }
                }
            }
        }

    },
    priority: 21
});

export function computeCustomGameSettingsSchema() {

    const availableLanguages = Object.values(ow_languages) as string[];

    //Resolve guids for the max team players
    for (var key of Object.keys(customGameSettingsSchema.lobby.values.team1Slots)) {
        if (availableLanguages.includes(key)) {
            let langKey = key as OWLanguage;
            let entry = customGameSettingsSchema.lobby.values.team1Slots[langKey];
            if (entry === undefined) {error(`${key} does not yield a valid team 1 slot entry`);}
            let value = customGameSettingsKw["__team1__" as keyof typeof customGameSettingsKw][langKey];
            // Fall back to enUS if the current language doesn't have an entry for Team 1 slots
            if (value === undefined) {value = customGameSettingsKw["__team1__"]["en-US"];}
            if (value === undefined) {error(`No valid team 1 slot entry for ${langKey}`);}
            customGameSettingsSchema.lobby.values.team1Slots[langKey] = entry.replace("%1$s", value);
        }
    }
    for (var key of Object.keys(customGameSettingsSchema.lobby.values.team2Slots)) {
        if (availableLanguages.includes(key)) {
            let langKey = key as OWLanguage;
            let entry = customGameSettingsSchema.lobby.values.team2Slots[langKey];
            if (entry === undefined) {error(`${key} does not yield a valid team 2 slot entry`);}
            let value = customGameSettingsKw["__team2__" as keyof typeof customGameSettingsKw][langKey];
            // Fall back to enUS if the current language doesn't have an entry for Team 2 slots
            if (value === undefined) {value = customGameSettingsKw["__team2__"]["en-US"];}
            if (value === undefined) {error(`No valid team 2 slot entry for ${langKey}`);}
            customGameSettingsSchema.lobby.values.team2Slots[langKey] = entry.replace("%1$s", value);
        }
    }

    //Add translations for each gamemode
    for (var gamemode of Object.keys(gamemodeKw)) {
        if (!(gamemode in customGameSettingsSchema.gamemodes.values)) {
            customGameSettingsSchema.gamemodes.values[gamemode] = { "values": {} };
        }
        Object.assign(customGameSettingsSchema.gamemodes.values[gamemode], gamemodeKw[gamemode]);
    }

    //Apply general settings to each gamemode... but not Elimination for some reason lmao
    for (var gamemode in customGameSettingsSchema.gamemodes.values) {
        if (gamemode === "elimination") {
            for (var key of ["enabledMaps", "disabledMaps", "enableEnemyHealthBars", "gamemodeStartTrigger", "healthPackRespawnTime%", "enableKillCam", "enableKillFeed", "enableSkins", "spawnHealthPacks", "perkEliminationCatchupLevelAmount%", "perkGeneration%"]) {
                customGameSettingsSchema.gamemodes.values[gamemode].values[key] = customGameSettingsSchema.gamemodes.values.general.values[key];
            }
        } else {
            Object.assign(customGameSettingsSchema.gamemodes.values[gamemode].values, customGameSettingsSchema.gamemodes.values.general.values);
        }
    }
    //Can't enable/disable maps in general
    delete customGameSettingsSchema.gamemodes.values.general.values.enabledMaps;
    delete customGameSettingsSchema.gamemodes.values.general.values.disabledMaps;

    //Apply each gamemode's settings to general settings
    for (var gamemode in customGameSettingsSchema.gamemodes.values) {
        Object.assign(customGameSettingsSchema.gamemodes.values.general.values, customGameSettingsSchema.gamemodes.values[gamemode].values);
    }

    //Generate settings for heroes.general
    customGameSettingsSchema.heroes.values["general"] = {values: {}};
    customGameSettingsSchema.heroes.values["general"].values = Object.assign({},
        customGameSettingsSchema["heroes"].values["__generalAndEachHero__"],
        customGameSettingsSchema.heroes.values["__generalButNotEachHero__"]);

    //Generate settings for each hero
    for (let hero of Object.keys(heroKw) as Overwatch2Heroes[]) {

        if (!(hero in customGameSettingsSchema.heroes.values)) {
            customGameSettingsSchema.heroes.values[hero] = {};
            // @ts-ignore - we just set the specific hero value above
            customGameSettingsSchema.heroes.values[hero].values = {};
        }

        var eachHero = Object.assign({}, customGameSettingsSchema.heroes.values["__generalAndEachHero__"], customGameSettingsSchema.heroes.values["__eachHero__"]);

        for (let key of Object.keys(eachHero)) {
            let heroSettings = eachHero[key];
            if (("include" in heroSettings && heroSettings.include !== undefined && heroSettings.include.includes(hero))
                    || "exclude" in heroSettings && heroSettings.exclude !== undefined && !heroSettings.exclude.includes(hero)
                    || !("include" in heroSettings) && !("exclude" in heroSettings)) {

                var destKey = (key === "enableGenericSecondaryFire" ? "enableSecondaryFire" : key);
                // @ts-ignore
                customGameSettingsSchema.heroes.values[hero].values[destKey] = JSON.parse(JSON.stringify(heroSettings));

                // @ts-ignore
                let heroValue = customGameSettingsSchema.heroes.values[hero].values[destKey];

                if ([
                    "secondaryFireCooldown%", "enableSecondaryFire", "secondaryFireMaximumTime%", "secondaryFireRechargeRate%", "secondaryFireEnergyChargeRate%",
                    "ability3Cooldown%", "enableAbility3",
                    "ability2Cooldown%", "enableAbility2",
                    "ability1Cooldown%", "enableAbility1",
                    "enablePassive",
                    "enableUlt", "ultGen%", "combatUltGen%", "passiveUltGen%"
                ].includes(key)) {
                    for (let lang_ of availableLanguages) {
                        let lang = lang_ as OWLanguage;
                        let langKey = (lang in heroValue ? lang : "en-US") as OWLanguage;
                        let value = heroValue[langKey];
                        if (value === undefined) {error(`No valid value for ${langKey} in ${hero} ${key}`);}

                        if (["secondaryFireCooldown%", "enableSecondaryFire", "secondaryFireMaximumTime%", "secondaryFireRechargeRate%", "secondaryFireEnergyChargeRate%"].includes(key)) {
                            let insert = heroKw[hero]["secondaryFire"]?.[lang] ?? heroKw[hero]["secondaryFire"]?.["en-US"];
                            if (insert === undefined) {error(`No valid value for secondaryFire in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["ability3Cooldown%", "enableAbility3"].includes(key)) {
                            let insert = heroKw[hero]["ability3"]?.[lang] ?? heroKw[hero]["ability3"]?.["en-US"];
                            if (insert === undefined) {error(`No valid value for ability3 in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["ability2Cooldown%", "enableAbility2"].includes(key)) {
                            let insert = heroKw[hero]["ability2"]?.[lang] ?? heroKw[hero]["ability2"]?.["en-US"];
                            if (insert === undefined) {error(`No valid value for ability2 in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["ability1Cooldown%", "enableAbility1"].includes(key)) {
                            let insert = heroKw[hero]["ability1"]?.[lang] ?? heroKw[hero]["ability1"]?.["en-US"];
                            if (insert === undefined) {error(`No valid value for ability1 in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["enablePassive"].includes(key)) {
                            let insert = heroKw[hero]["passive"]?.[lang] ?? heroKw[hero]["passive"]?.["en-US"];
                            if (insert === undefined) {error(`No valid value for passive in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["enableUlt", "ultGen%", "combatUltGen%", "passiveUltGen%"].includes(key)) {
                            let insert = heroKw[hero]["ultimate"]?.[lang] ?? heroKw[hero]["ultimate"]?.["en-US"];
                            if (insert === undefined) {error(`No valid value for ultimate in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        }
                    }
                }
            }
        }
    }

    //Apply extension

    delete customGameSettingsSchema.heroes.values["__generalAndEachHero__"];
    delete customGameSettingsSchema.heroes.values["__eachHero__"];
    delete customGameSettingsSchema.heroes.values["__generalButNotEachHero__"];

}

postLoadTasks.push({
    task: () => {
        computeCustomGameSettingsSchema();
    },
    priority: 23
});


/**
 * This function completes some work which we cannot do before all the files have been loaded
 * and their internal data logic run. Before, this was handled by simply having those data files
 * run before this file, but `esbuild` doesn't guarantee any specific bundle order.
 *
 * For example, we must wait for the `constantValues` to be populated by the `data/constants.ts` logic
 * before we add to the typeTree and fill the typeMatrix, but by default esbuild will place `globalVars.ts`
 * before `data/constants.ts`, resulting in `constantValues` being undefined.
 */
export function postInitialLoad() {
    postLoadTasks.push({
        task: () => {

            typeTree.push(...Object.keys(constantValues));

            function fillTypeMatrix(tree: string | Record<string, any>) {
                if (typeof tree === "string") {
                    typeMatrix[tree] = [tree];
                } else {
                    var type = Object.keys(tree)[0];
                    typeMatrix[type] = [type];
                    for (var child of tree[type]) {
                        fillTypeMatrix(child);
                        if (typeof child === "string") {
                            typeMatrix[type].push(...typeMatrix[child]);
                        } else {
                            typeMatrix[type].push(...typeMatrix[Object.keys(child)[0]]);
                        }
                    }
                }
            }
            for (let elem of typeTree) {
                fillTypeMatrix(elem);
            }
            typeMatrix["Vector"].push("Direction", "Position", "Velocity");

            reservedNames.push(...Object.keys(typeMatrix));


        },
        priority: 26,
    });

    postLoadTasks.sort((task) => task.priority).forEach((task) => task.task());
}

export const reservedMemberNames = ["x", "y", "z"];

export const overpyTemplate = `
#OverPy starter pack

#!setupTags
#!disableInspector

settings {
    "main": {
        "modeName": "Some awesome game mode",
        "description": "OverPy starter pack"
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopIsland"
            ]
        },
        "general": {
            "heroLimit": "off",
            "respawnTime%": 30
        }
    }
}

globalvar counter = 0

rule "Teleport player on pressing interact":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    counter++
    eventPlayer.teleport(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection()*5)
    #Hold the player in place, to reset falling velocity
    eventPlayer.startForcingPosition(eventPlayer.getPosition(), false)
    wait()
    eventPlayer.stopForcingPosition()

rule "Display position":
    @Event eachPlayer
    print(f"{Texture.ASSAULT}Position of {eventPlayer}: <fg00FFFFFF>{eventPlayer.getPosition()}</fg>")
    debug(counter)

`.trimStart();
