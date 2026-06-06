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

"use strict";
import { mapKw } from "./data/maps";
import { opyKeywords } from "./data/opy/keywords";
import { camelCaseToUpperCase } from "./utils/other";
import { Constant, constantValues } from "./data/constants";
import { Overwatch2Heroes, ow_languages, OWLanguage, Value } from "./types.d.js";
import { heroKw } from "./data/heroes";
import { gamemodeKw } from "./data/gamemodes";
import { valueFuncKw } from "./data/values";
import { Action, actionKw } from "./data/actions";
import { opyInternalFuncs } from "./data/opy/internalFunctions";
import { customGameSettingsKw, eventPlayerKw, eventSlotKw } from "./data/other";
import { opyFuncs } from "./data/opy/functions";
import { opyMacros } from "./data/opy/macros";
import { customGameSettingsSchema } from "./data/customGameSettings";

import "./utils/compilation.ts";
import "./utils/decompilation.ts";
import "./utils/file.ts";
import "./utils/other.ts";
import "./utils/strings.ts";
import "./utils/translation.ts";
import "./utils/types.ts";
import "./utils/varNames.ts";

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
export const reservedNames = Object.keys(opyKeywords).concat("AsyncBehavior");
export const reservedSubroutineNames = Object.keys(opyKeywords);
export const reservedMemberNames = ["x", "y", "z"];

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
            if (entry === undefined) {throw new Error(`${key} does not yield a valid team 1 slot entry`);}
            let value = customGameSettingsKw["__team1__" as keyof typeof customGameSettingsKw][langKey];
            // Fall back to enUS if the current language doesn't have an entry for Team 1 slots
            if (value === undefined) {value = customGameSettingsKw["__team1__"]["en-US"];}
            if (value === undefined) {throw new Error(`No valid team 1 slot entry for ${langKey}`);}
            customGameSettingsSchema.lobby.values.team1Slots[langKey] = entry.replace("%1$s", value);
        }
    }
    for (var key of Object.keys(customGameSettingsSchema.lobby.values.team2Slots)) {
        if (availableLanguages.includes(key)) {
            let langKey = key as OWLanguage;
            let entry = customGameSettingsSchema.lobby.values.team2Slots[langKey];
            if (entry === undefined) {throw new Error(`${key} does not yield a valid team 2 slot entry`);}
            let value = customGameSettingsKw["__team2__" as keyof typeof customGameSettingsKw][langKey];
            // Fall back to enUS if the current language doesn't have an entry for Team 2 slots
            if (value === undefined) {value = customGameSettingsKw["__team2__"]["en-US"];}
            if (value === undefined) {throw new Error(`No valid team 2 slot entry for ${langKey}`);}
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
            for (var key of ["enabledMaps", "disabledMaps", "enableEnemyHealthBars", "gamemodeStartTrigger", "healthPackRespawnTime%", "enableKillCam", "enableKillFeed", "enableSkins", "spawnHealthPacks", "perkEliminationCatchupLevelAmount%", "perkGeneration%", "teamOverlay"]) {
                customGameSettingsSchema.gamemodes.values[gamemode].values[key] = customGameSettingsSchema.gamemodes.values.general.values[key];
            }
        } else {
            Object.assign(customGameSettingsSchema.gamemodes.values[gamemode].values, customGameSettingsSchema.gamemodes.values.general.values);
        }
        if (gamemode.endsWith("BalancedOverwatch")) {
            Object.assign(customGameSettingsSchema.gamemodes.values[gamemode].values, customGameSettingsSchema.gamemodes.values[gamemode.replace("BalancedOverwatch", "")].values);
        }
    }
    //Can't enable/disable maps in general
    delete customGameSettingsSchema.gamemodes.values.general.values.enabledMaps;
    delete customGameSettingsSchema.gamemodes.values.general.values.disabledMaps;

    //Apply each gamemode's settings to general settings
    for (var gamemode in customGameSettingsSchema.gamemodes.values) {
        Object.assign(customGameSettingsSchema.gamemodes.values.general.values, customGameSettingsSchema.gamemodes.values[gamemode].values);
    }
    customGameSettingsSchema.gamemodes.values.general.values.scoreToWin = customGameSettingsSchema.gamemodes.values.ffa.values.scoreToWin; //other gamemodes have a more restrictive "score to win" setting

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
                        if (value === undefined) {throw new Error(`No valid value for ${langKey} in ${hero} ${key}`);}

                        if (["secondaryFireCooldown%", "enableSecondaryFire", "secondaryFireMaximumTime%", "secondaryFireRechargeRate%", "secondaryFireEnergyChargeRate%"].includes(key)) {
                            let insert = heroKw[hero]["secondaryFire"]?.[lang] ?? heroKw[hero]["secondaryFire"]?.["en-US"];
                            if (insert === undefined) {throw new Error(`No valid value for secondaryFire in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["ability3Cooldown%", "enableAbility3"].includes(key)) {
                            let insert = heroKw[hero]["ability3"]?.[lang] ?? heroKw[hero]["ability3"]?.["en-US"];
                            if (insert === undefined) {throw new Error(`No valid value for ability3 in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["ability2Cooldown%", "enableAbility2"].includes(key)) {
                            let insert = heroKw[hero]["ability2"]?.[lang] ?? heroKw[hero]["ability2"]?.["en-US"];
                            if (insert === undefined) {throw new Error(`No valid value for ability2 in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["ability1Cooldown%", "enableAbility1"].includes(key)) {
                            let insert = heroKw[hero]["ability1"]?.[lang] ?? heroKw[hero]["ability1"]?.["en-US"];
                            if (insert === undefined) {throw new Error(`No valid value for ability1 in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["enablePassive"].includes(key)) {
                            let insert = heroKw[hero]["passive"]?.[lang] ?? heroKw[hero]["passive"]?.["en-US"];
                            if (insert === undefined) {throw new Error(`No valid value for passive in ${hero} ${lang}`);}
                            heroValue[lang] = value.replace("%1$s", insert);
                        } else if (["enableUlt", "ultGen%", "combatUltGen%", "passiveUltGen%"].includes(key)) {
                            let insert = heroKw[hero]["ultimate"]?.[lang] ?? heroKw[hero]["ultimate"]?.["en-US"];
                            if (insert === undefined) {throw new Error(`No valid value for ultimate in ${hero} ${lang}`);}
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
