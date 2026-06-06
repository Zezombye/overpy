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
// @ts-check
import { DEBUG_MODE, ELEMENT_LIMIT, DEBUG_PROFILER } from "../globalVars";
import { OverPyCompiler } from "../godClasses";
import { customGameSettingsSchema } from "../data/customGameSettings";
import { gamemodeKw } from "../data/gamemodes";
import { heroKw } from "../data/heroes";
import { mapKw } from "../data/maps";
import { ruleKw, customGameSettingsKw } from "../data/other";
import { isNumber, shuffleArray, tabLevel } from "../utils/other";
import { Ast } from "../utils/ast";
import { astToString, getInternalFileStack } from "../utils/logging";
import { AstConstantData, AstMacroData, CompilationDiagnostic, MacroData, OWLanguage, ScriptFileStackMember, Subroutine, Variable } from "../types";
import { TranslatedString } from "./translations";
import { constantValues } from "../data/constants";
import { escapeString } from "../utils/strings";
import { initializeQuickJSRuntime } from "../quickjs";
import {alphabet} from "./functions/compressed";

import "./tokenizer";
import "./parser";
import "./translations";
import "./astParser";
import "./astToWorkshop";

/**
 * @returns An object containing the compiled result along with associated metadata
 */
export async function compile(
    content: string,
    language: OWLanguage = "en-US",
    _rootPath = "",
    _mainFileName = "",
): Promise<{
    result: string;
    macros: MacroData[];
    astMacros: Record<string, AstMacroData>;
    astConstants: Record<string, AstConstantData>;
    globalVariables: Variable[];
    playerVariables: Variable[];
    subroutines: Subroutine[];
    encounteredWarnings: CompilationDiagnostic[];
    hiddenWarnings: string[];
    enumMembers: Record<string, Record<string, Ast>>;
    nbElements: number;
    activatedExtensions: string[];
    spentExtensionPoints: number;
    availableExtensionPoints: number;
    translationLanguages: string[];
    translatedStrings: TranslatedString[];
    writeToOutputFile: boolean;
    mainFileName: string;
    rootPath: string,
}> {
    const t0 = performance.now();

    if (DEBUG_PROFILER) (console as any).profile();
    await initializeQuickJSRuntime();
    _rootPath = _rootPath.trim().replaceAll("\\", "/");
    if (!_rootPath.endsWith("/")) {
        _rootPath += "/";
    }

    const compiler = new OverPyCompiler();
    compiler.currentLanguage = language;
    compiler.rootPath = _rootPath;

    //Handle #!mainfile directive
    if (content.startsWith("#!mainFile ")) {
        let mainFilePath = compiler.getFilePaths(content.substring("#!mainFile ".length, content.indexOf("\n")), _rootPath)[0];
        compiler.mainFileName = mainFilePath.split("/").pop() as string;
        compiler.rootPath = mainFilePath.substring(0, mainFilePath.lastIndexOf("/") + 1);
        content = compiler.getFileContent(mainFilePath);
        if (DEBUG_MODE) {
            console.log("content = ");
            console.log(content);
        }
    } else {
        compiler.mainFileName = _mainFileName;
    }
    compiler.importedFiles.push(compiler.rootPath);

    compiler.fileStack = ([
        {
            name: compiler.mainFileName || "<main>",
            path: compiler.rootPath + compiler.mainFileName,
            startLine: 1,
            startCol: 1,
            endCol: null,
            endLine: null,
            remainingChars: 99999999999, //does not matter
            staticMember: true,
            fileStackMemberType: "normal",
        } as ScriptFileStackMember,
    ]);
    compiler.macros = [];

    var lines = compiler.tokenize(content);

    //console.log("tokens:",structuredClone(lines));

    compiler.fileStack = getInternalFileStack();

    var translationConstantString = null;

    if (compiler.translationLanguages.length > 0) {
        if (compiler.translationLanguages.includes("zh") && compiler.translationLanguages.includes("es_mx") && compiler.translationLanguages.includes("es_es")) {
            //There is no constant that is different in all languages except zh
            compiler.error("Cannot use language combination zh, es_mx and es_es at the same time");
        } else if (!(compiler.translationLanguages.includes("zh_cn") && compiler.translationLanguages.includes("zh_tw")) && !(compiler.translationLanguages.includes("es_mx") && compiler.translationLanguages.includes("es_es"))) {
            //Constant that is the same in all Chinese and Spanish languages
            //Use that by default as color constants can be put in strings without wrapping with updateEveryFrame(), so it saves one element
            compiler.translationLanguageConstantOpy = "Color.WHITE";
            compiler.translationLanguageConstant = constantValues.ColorLiteral.WHITE;
        } else if (compiler.translationLanguages.includes("es")) {
            //Constant that is different in all languages except both Spanish languages
            compiler.translationLanguageConstantOpy = "updateEveryFrame(Map.ILIOS_RUINS)";
            compiler.translationLanguageConstant = mapKw.iliosRuins;
        } else {
            //Constant that is different in all languages
            compiler.translationLanguageConstantOpy = "updateEveryFrame(Map.PRACTICE_RANGE)";
            compiler.translationLanguageConstant = mapKw.practiceRange;
        }

        translationConstantString = compiler.translationLanguages.map((lang) => {
            if (lang.includes("_")) {
                return compiler.translationLanguageConstant![lang.split("_")[0]+"-"+lang.split("_")[1].toUpperCase() as OWLanguage];
            } else {
                return compiler.translationLanguageConstant![({
                    "en": "en-US",
                    "es": "es-MX",
                    "fr": "fr-FR",
                    "ja": "ja-JP",
                    "pt": "pt-BR",
                    "th": "th-TH",
                    "tr": "tr-TR",
                    "zh": "zh-CN",
                    "de": "de-DE",
                    "it": "it-IT",
                    "ko": "ko-KR",
                    "pl": "pl-PL",
                    "ru": "ru-RU",
                } as Record<string, string>)[lang] as OWLanguage];
            }
        }).join("0");

        if (compiler.usePlayerVarForTranslations) {
            //Initialize to 1.1, that way the player doesn't see "TLErr" while the language is detected, and we can check if the language has been set or not
            compiler.addVariable("__languageIndex__", false, -1, getInternalFileStack(), compiler.tokenize(compiler.useTlErr ? "1.1" : "0.1")[0].tokens);
        }
        compiler.addVariable("__overpyTranslationHelper__", true, -1, getInternalFileStack(), compiler.tokenize(escapeString("\u{EC48}0"+translationConstantString, false)+".split(null[0])")[0].tokens);
    }

    if (compiler.enableTagsSetup) {
        compiler.addVariable("__holygrail__", true, -1, getInternalFileStack());
    }
    if (compiler.replacementForEmptyString === "variable") {
        compiler.addVariable("__emptyString__", true, -1, getInternalFileStack(), compiler.tokenize("[].charAt(null)")[0].tokens);
    }
    if (compiler.useVariableForCompressionAlphabet) {
        compiler.addVariable("__compressionAlphabet__", true, -1, getInternalFileStack(), compiler.tokenize(escapeString(alphabet, false))[0].tokens);
    }

    if (compiler.translationLanguages.length > 0) {
        compiler.translatedStrings = compiler.importFromPoFiles();
    }


    //console.log(structuredClone(translatedStrings));

    var astRules = compiler.parseLines(lines);

    compiler.fileStack = getInternalFileStack();

    //Note: the init directive rules must be BEFORE the translation/tx rules, otherwise the variables cannot be initialized with a translated or tx string.
    astRules.unshift(...compiler.getInitDirectivesRules());

    if (compiler.usePlayerVarForTranslations) {

        if (compiler.translationLanguages.length === 0) {
            compiler.error("Translations must be setup using the #!translations directive");
        }

        if (compiler.generateRuleForTranslationsPlayerVar) {
            let translationSetupRule: any =
            `
    rule "OverPy translation setup - Determine the player's language":
        @Event eachPlayer
        @Condition eventPlayer.hasSpawned()
        @Condition not eventPlayer.isDummy()
        @Condition eventPlayer.__languageIndex__ == ${compiler.useTlErr ? "1.1" : "0.1"}
        eventPlayer.__languageIndex__.append(eventPlayer.getFacingDirection())
        eventPlayer.startFacing(
            directionFromAngles(10*${escapeString("\u{EC48}0"+translationConstantString, false)}.split(null[0]).index(${compiler.translationLanguageConstantOpy}.split([])), 5),
            Math.INFINITY,
            Relativity.TO_WORLD,
            FacingReeval.DIRECTION_AND_TURN_RATE
        )

        #Have a tolerance of 1/100 of a degree to account for precision errors
        waitUntil(not (round(eventPlayer.getHorizontalFacingAngle()*100) % 1000) and abs(eventPlayer.getVerticalFacingAngle() - 5) < 0.01, 15)

        eventPlayer.__languageIndex__[0] = max(1, (abs(eventPlayer.getVerticalFacingAngle() - 5) < 0.01) * round(eventPlayer.getHorizontalFacingAngle()/10))

        eventPlayer.stopFacing()
        eventPlayer.setFacing(eventPlayer.__languageIndex__.last(), Relativity.TO_WORLD)
        eventPlayer.__languageIndex__ = eventPlayer.__languageIndex__${compiler.useTlErr ? "[0]" : " - 1"}
            `;
            translationSetupRule = compiler.tokenize(translationSetupRule);
            translationSetupRule = compiler.parseLines(translationSetupRule)[0];
            astRules.unshift(translationSetupRule);
        }
    }

    if (compiler.enableTagsSetup) {
        var txSetupRule: any = `
rule "OverPy <\\ztx> / <\\zfg> setup code":
    #By Zezombye
    createDummy(getAllHeroes(),  Team.1 if getNumberOfSlots(Team.1) else Team.2 if getNumberOfSlots(Team.2) else true, false, null, null)
    #More info: https://workshop.codes/wiki/articles/tx-reference-sheet
    getLastCreatedEntity().startForcingName("______________________________________________________________________________________________________________________________\u303C")
    __holygrail__ = getLastCreatedEntity()[0].split([])
    getLastCreatedEntity().startForcingName("______________________________________________________________________________________________________________________________\u0840")
    __holygrail__ = "______________________________________________________________________________________________________________________________\u303C".replace(__holygrail__, getLastCreatedEntity()[0]).substring(126, true)
    destroyAllDummies()
        `;
        txSetupRule = compiler.tokenize(txSetupRule);
        txSetupRule = compiler.parseLines(txSetupRule)[0];
        astRules.unshift(txSetupRule);
    }

    if (compiler.disableInspector) {
        var inspectorRule: any = `
rule "Disable inspector":
    disableInspector()
`;
        inspectorRule = compiler.tokenize(inspectorRule);
        inspectorRule = compiler.parseLines(inspectorRule)[0];
        astRules.unshift(inspectorRule);
    }


    if (DEBUG_MODE) {
        for (var elem of astRules) {
            console.log(astToString(elem));
        }
        console.log(astRules);
    }

    var result = compiler.compileRules(astRules);

    var spentExtensionPoints = 0;
    for (var ext of compiler.activatedExtensions) {
        spentExtensionPoints += customGameSettingsSchema.extensions.values[ext].points;
    }

    if (DEBUG_PROFILER) (console as any).profileEnd();
    if (DEBUG_MODE || DEBUG_PROFILER) {
        var t1 = performance.now();
        console.log("Compilation time: " + (t1 - t0) + "ms");
    }

    if (compiler.translationLanguages.length > 0) {
        compiler.exportToPoFiles(compiler.translatedStrings);
    }

    //Remove duplicated warnings
    let uniqueEncounteredWarnings = compiler.encounteredWarnings.filter((warning, index, self) => {
        return index === self.findIndex((w) => JSON.stringify(w) === JSON.stringify(warning));
    });

    if (compiler.postCompileHook) {
        compiler.fileStack = [
            {
                name: "<postCompileHook>",
                startLine: 1,
                startCol: 1,
                endCol: null,
                endLine: null,
                remainingChars: 99999999999, //does not matter
                staticMember: true,
                fileStackMemberType: "normal",
            } as ScriptFileStackMember,
        ];
        result = ""+compiler.postCompileHook(result);
        compiler.fileStack = getInternalFileStack();
    }

    return {
        result,
        macros: compiler.macros,
        astMacros: compiler.astMacros,
        astConstants: compiler.astConstants,
        globalVariables: compiler.globalVariables,
        playerVariables: compiler.playerVariables,
        subroutines: compiler.subroutines,
        encounteredWarnings: uniqueEncounteredWarnings,
        hiddenWarnings: compiler.hiddenWarnings,
        enumMembers: compiler.enumMembers,
        nbElements: compiler.nbElements,
        activatedExtensions: compiler.activatedExtensions,
        spentExtensionPoints,
        availableExtensionPoints: compiler.availableExtensionPoints,
        translationLanguages: compiler.translationLanguages,
        translatedStrings: compiler.translatedStrings,
        writeToOutputFile: compiler.writeToOutputFile,
        mainFileName: compiler.mainFileName,
        rootPath: compiler.rootPath,
    };
}

OverPyCompiler.prototype.compileRules = function(astRules: Ast[]) {
    var parsedAstRules = this.parseAstRules(astRules);

    if (DEBUG_MODE) {
        console.log(parsedAstRules);
    }
    
    //Propagate the subroutine event info to the calling subroutines
    let hasModification = false;
    do {
        hasModification = false;
        for (let subroutine of this.subroutines) {
            for (let calledSubroutineName of subroutine.callsSubroutines) {
                let calledSubroutine = this.subroutines.find((s) => s.name === calledSubroutineName);
                if (!calledSubroutine) {
                    this.error("Subroutine '" + subroutine.name + "' calls unknown subroutine '" + calledSubroutineName + "'");
                }
                for (let key of ["hasEventPlayerVars", "hasEventDamageVars", "hasEventHealingVars", "hasEventDamageOrHealingVars"] as const) {
                    if (calledSubroutine![key] && !subroutine[key]) {
                        subroutine[key] = true;
                        hasModification = true;
                    }
                }
            }
        }
    } while (hasModification);
    
    //Reset optimization settings before the second pass astRulesToWs
    this.enableOptimization = true;
    this.optimizeStrict = false;
    this.optimizeForSize = false;

    var {compiledRules, elementCountSummary} = this.astRulesToWs(parsedAstRules);
    
    this.enableOptimization = true;
    this.optimizeStrict = false;
    this.optimizeForSize = false;

    this.fileStack = getInternalFileStack();

    var result = elementCountSummary + this.compiledCustomGameSettings;
    if (!this.excludeVariablesInCompilation) {
        result += this.generateVariablesField();
        result += this.generateSubroutinesField();
    }
    result += compiledRules.join("");

    if (this.nbElements > ELEMENT_LIMIT) {
        this.warn("w_element_limit", "The gamemode is over the element limit (" + this.nbElements + " > " + ELEMENT_LIMIT + " elements)");
    }

    //Check for extension points
    var spentExtensionPoints = 0;
    for (var ext of this.activatedExtensions) {
        spentExtensionPoints += customGameSettingsSchema.extensions.values[ext].points;
    }
    if (this.compiledCustomGameSettings !== "") {
        if (spentExtensionPoints > this.availableExtensionPoints) {
            this.warn("w_extension_points", "The extension points spent (" + spentExtensionPoints + ") are over the available points (" + this.availableExtensionPoints + ")");
        }
    } else {
        this.availableExtensionPoints = -1;
    }

    return result;
}

OverPyCompiler.prototype.getInitDirectivesRules = function() {
    var result = [];
    if (this.globalInitDirectives.length > 0) {
        var rule = this.Ast("__rule__");
        rule.ruleAttributes = {
            name: this.globalvarInitRuleName,
            event: "global",
        };
        rule.children = this.globalInitDirectives;
        result.push(rule);
    }
    if (this.playerInitDirectives.length > 0) {
        var rule = this.Ast("__rule__");
        rule.ruleAttributes = {
            name: this.playervarInitRuleName,
            event: "eachPlayer",
            eventPlayer: "all",
            eventTeam: "all",
        };
        rule.children = this.playerInitDirectives;
        result.push(rule);
    }
    return result;
}

OverPyCompiler.prototype.generateVariablesField = function() {
    var result = "";

    for (var varType of ["global", "player"]) {
        var outputVariables = Array(128);
        var varNames: string[] = [];
        var varList = varType === "global" ? this.globalVariables : this.playerVariables;
        var unassignedVariables = [];

        for (let variable of varList) {
            //check name
            if (!/[A-Za-z_]\w*/.test(variable.name)) {
                this.error("Unauthorized name for " + varType + " variable: '" + variable.name + "'", variable.fileStack);
            }
            //check duplication
            if (varNames.includes(variable.name)) {
                this.error("Duplicate declaration of " + varType + " variable '" + variable.name + "'", variable.fileStack);
            }

            if (outputVariables[variable.index] !== undefined) {
                this.error("Duplicate use of index " + variable.index + " for " + varType + " variables '" + variable.name + "' and '" + outputVariables[variable.index] + "'", variable.fileStack[variable.fileStack.length - 1].startCol !== null ? variable.fileStack : outputVariables[variable.index].fileStack);
            }
            varNames.push(variable.name);
            if (variable.index === -1) {
                unassignedVariables.push(variable.name);
            } else {
                if (variable.index >= 128 || variable.index < 0) {
                    this.error("Invalid index '" + variable.index + "' for " + varType + " variable '" + variable.name + "', must be from 0 to 127", variable.fileStack);
                }
                outputVariables[variable.index] = variable.name;
            }
        }

        for (let variable of unassignedVariables) {
            var foundSpot = false;
            if (variable.startsWith("__") && variable.endsWith("__")) {
                for (var i = 127; i >= 0; i--) {
                    if (outputVariables[i] === undefined) {
                        foundSpot = true;
                        outputVariables[i] = variable;
                        break;
                    }
                }
            } else {
                for (var i = 0; i < 128; i++) {
                    if (outputVariables[i] === undefined) {
                        foundSpot = true;
                        outputVariables[i] = variable;
                        break;
                    }
                }
            }
            if (!foundSpot) {
                this.error("More than 128 " + varType + " variables have been declared");
            }
        }

        var varTypeResult = "";
        for (var i = 0; i < 128; i++) {
            if (outputVariables[i] !== undefined) {
                varTypeResult += tabLevel(2) + i + ": " + outputVariables[i] + "\n";
            }
        }
        if (varTypeResult !== "") {
            varTypeResult = tabLevel(1) + this.tows("__" + varType + "__", ruleKw) + ":\n" + varTypeResult;
            result += varTypeResult;
        }
    }

    if (result) {
        result = this.tows("__variables__", ruleKw) + " {\n" + result + "}\n\n";
    }

    return result;
}

OverPyCompiler.prototype.generateSubroutinesField = function() {
    var result = "";

    var outputSubroutines = Array(128);
    var subNames: string[] = [];
    var unassignedSubroutines = [];

    for (let subroutine of this.subroutines) {
        //check name
        if (!/[A-Za-z_]\w*/.test(subroutine.name)) {
            this.error("Unauthorized name for subroutine: '" + subroutine.name + "'");
        }
        //check duplication
        if (subNames.includes(subroutine.name)) {
            this.error("Duplicate declaration of subroutine '" + subroutine.name + "'");
        }

        if (outputSubroutines[subroutine.index] !== undefined) {
            this.error("Duplicate use of index " + subroutine.index + " for subroutines '" + subroutine.name + "' and '" + outputSubroutines[subroutine.index] + "'");
        }
        subNames.push(subroutine.name);
        if (subroutine.index === undefined || subroutine.index === -1) {
            unassignedSubroutines.push(subroutine.name);
        } else {
            if (isNaN(subroutine.index) || subroutine.index >= 128 || subroutine.index < 0) {
                this.error("Invalid index '" + subroutine.index + "' for subroutine '" + subroutine.name + "', must be from 0 to 127");
            }
            outputSubroutines[subroutine.index] = subroutine.name;
        }
    }

    for (let subroutine of unassignedSubroutines) {
        var foundSpot = false;
        for (var i = 0; i < 128; i++) {
            if (outputSubroutines[i] === undefined) {
                foundSpot = true;
                outputSubroutines[i] = subroutine;
                break;
            }
        }
        if (!foundSpot) {
            this.error("More than 128 subroutines have been declared");
        }
    }

    for (var i = 0; i < 128; i++) {
        if (outputSubroutines[i] !== undefined) {
            result += tabLevel(1) + i + ": " + outputSubroutines[i] + "\n";
        }
    }

    if (result) {
        result = this.tows("__subroutines__", ruleKw) + " {\n" + result + "}\n\n";
    }

    return result;
}

OverPyCompiler.prototype.compileCustomGameSettings = function(customGameSettings: any) {
    if (typeof customGameSettings !== "object") {
        this.error("Custom game settings must be an object");
    }

    if (this.compiledCustomGameSettings !== "") {
        this.error("Custom game settings have already been declared");
    }

    var result: Record<string, any> = {};
    if (!("gamemodes" in customGameSettings)) {
        this.error("Custom game settings must specify a gamemode");
    }

    var areOnlyWorkshopMapsEnabled = true;

    for (var key of Object.keys(customGameSettings)) {
        if (key === "main" || key === "lobby") {
            //workshop bug - cannot paste "best available"
            if (key === "lobby" && customGameSettings["lobby"].dataCenterPreference === "bestAvailable") {
                delete customGameSettings["lobby"].dataCenterPreference;
            }
            result[this.tows(key, customGameSettingsSchema)] = this.compileCustomGameSettingsDict(
                customGameSettings[key],
                // @ts-ignore - lobby/main settings in src/data/customGameSettings always have the correct schema
                customGameSettingsSchema[key].values,
            );
            if (key === "lobby") {
                //Figure out the amount of available slots
                var maxTeam1Slots = 0;
                var maxTeam2Slots = 0;
                var maxFfaSlots = 0;
                if ("team1Slots" in customGameSettings["lobby"]) {
                    maxTeam1Slots = customGameSettings["lobby"]["team1Slots"];
                } else {
                    for (var gamemode in customGameSettings.gamemodes) {
                        if (!(gamemode in gamemodeKw)) {
                            continue;
                        }
                        let gamemodeEntry = gamemodeKw[gamemode];
                        if ("defaultTeam1Slots" in gamemodeEntry) {
                            maxTeam1Slots = Math.max(maxTeam1Slots, gamemodeEntry.defaultTeam1Slots as number);
                        }
                    }
                }

                if ("team2Slots" in customGameSettings["lobby"]) {
                    maxTeam2Slots = customGameSettings["lobby"]["team2Slots"];
                } else {
                    for (var gamemode in customGameSettings.gamemodes) {
                        if (!(gamemode in gamemodeKw)) {
                            continue;
                        }
                        let gamemodeEntry = gamemodeKw[gamemode];
                        if ("defaultTeam2Slots" in gamemodeEntry) {
                            maxTeam2Slots = Math.max(maxTeam2Slots, gamemodeEntry.defaultTeam2Slots as number);
                        }
                    }
                }

                if ("ffaSlots" in customGameSettings["lobby"]) {
                    maxFfaSlots = customGameSettings["lobby"]["ffaSlots"];
                } else {
                    for (var gamemode in customGameSettings.gamemodes) {
                        if (!(gamemode in gamemodeKw)) {
                            continue;
                        }
                        let gamemodeEntry = gamemodeKw[gamemode];
                        if ("defaultFfaSlots" in gamemodeEntry) {
                            maxFfaSlots = Math.max(maxFfaSlots, gamemodeEntry.defaultFfaSlots as number);
                        }
                    }
                }

                var maxSlots = Math.max(maxTeam1Slots + maxTeam2Slots, maxFfaSlots);
                if (maxSlots > 12) {
                    this.error("The maximum number of slots cannot be over 12 (currently " + maxSlots + ")");
                }
                this.availableExtensionPoints = this.availableExtensionPoints + 4 * (12 - maxSlots);
            }
        } else if (key === "gamemodes") {
            var wsGamemodes = this.tows("gamemodes", customGameSettingsSchema);
            result[wsGamemodes] = {};
            for (var gamemode of Object.keys(customGameSettings.gamemodes)) {
                if (gamemode !== "general") {
                    if (gamemodeKw[gamemode]?.onlyInOw1) {
                        this.error("The gamemode '" + gamemode + "' is not available in OW2");
                    }
                }
                try {
                    var wsGamemode = this.tows(gamemode, customGameSettingsSchema.gamemodes.values);
                } catch (e) {
                    var wsGamemode = gamemode;
                }
                var isGamemodeEnabled = true;
                if (customGameSettings.gamemodes[gamemode].enabled === false) {
                    wsGamemode = this.tows("__disabled__", ruleKw) + " " + wsGamemode;
                    isGamemodeEnabled = false;
                }
                delete customGameSettings.gamemodes[gamemode].enabled;
                result[wsGamemodes][wsGamemode] = {};
                if ("enabledMaps" in customGameSettings.gamemodes[gamemode] || "disabledMaps" in customGameSettings.gamemodes[gamemode]) {
                    if ("enabledMaps" in customGameSettings.gamemodes[gamemode] && "disabledMaps" in customGameSettings.gamemodes[gamemode]) {
                        this.error("Cannot have both 'enabledMaps' and 'disabledMaps' in gamemode '" + gamemode + "'");
                    }
                    var mapsKey = "enabledMaps" in customGameSettings.gamemodes[gamemode] ? "enabledMaps" : "disabledMaps";
                    var wsMapsKey = this.tows(mapsKey, customGameSettingsSchema.gamemodes.values.skirmish.values);
                    var encounteredMaps = [];
                    result[wsGamemodes][wsGamemode][wsMapsKey] = [];
                    for (var map of customGameSettings.gamemodes[gamemode][mapsKey]) {
                        if (typeof map === "object" && !Array.isArray(map)) {
                            if (Object.keys(map).length !== 1) {
                                this.error("Malformed map object, should only have 1 key");
                            }
                            var mapName = Object.keys(map)[0];
                            var variants = [];
                            let mapVariants = mapKw[mapName].variants ?? {};
                            for (var variant of map[mapName]) {
                                if (!(variant in mapVariants)) {
                                    variants.push(variant+"");
                                    //this.error("Unknown variant '" + variant + "' for map '" + mapName + "'");
                                } else {
                                    variants.push(mapVariants[variant]);
                                }
                            }
                            encounteredMaps.push(mapName);
                            result[wsGamemodes][wsGamemode][wsMapsKey].push(this.tows(mapName, mapKw) + " " + variants.join(" "));
                        } else {
                            if (!(map in mapKw)) {
                                this.error("Unknown map '" + map + "'");
                            } else if (mapKw[map].onlyInOw1) {
                                this.error("The map '" + map + "' is not available in OW2");
                            }
                            encounteredMaps.push(map);
                            result[wsGamemodes][wsGamemode][wsMapsKey].push(this.tows(map, mapKw));
                        }
                    }
                    //Test if there are only workshop maps (for extension points)
                    if (isGamemodeEnabled && areOnlyWorkshopMapsEnabled) {
                        if (mapsKey === "disabledMaps") {
                            //If only workshop maps are enabled in a gamemode, then it is less than 50%, so it will be "enabled maps".
                            areOnlyWorkshopMapsEnabled = false;
                        } else {
                            for (var map of encounteredMaps) {
                                if (!mapKw[map].isWorkshopMap) {
                                    areOnlyWorkshopMapsEnabled = false;
                                    break;
                                }
                            }
                        }
                    }
                    delete customGameSettings.gamemodes[gamemode][mapsKey];
                }

                Object.assign(
                    result[wsGamemodes][wsGamemode],
                    this.compileCustomGameSettingsDict(
                        customGameSettings.gamemodes[gamemode],
                        // @ts-ignore - customGameSettingsSchema should always has the correct schema
                        customGameSettingsSchema.gamemodes.values[gamemode]?.values || {},
                    ),
                );
            }
        } else if (key === "heroes") {
            var wsHeroes = this.tows("heroes", customGameSettingsSchema);
            result[wsHeroes] = {};
            for (var team of Object.keys(customGameSettings.heroes)) {
                var wsTeam = this.tows(team, customGameSettingsSchema.heroes.teams);
                result[wsHeroes][wsTeam] = {};
                var wsHeroesKey = null;
                var wsHeroesKeyObj = [];
                if ("enabledHeroes" in customGameSettings.heroes[team] || "disabledHeroes" in customGameSettings.heroes[team]) {
                    if ("enabledHeroes" in customGameSettings.heroes[team] && "disabledHeroes" in customGameSettings.heroes[team]) {
                        this.error("Cannot have both 'enabledHeroes' and 'disabledHeroes' in team '" + team + "'");
                    }
                    var heroesKey = "enabledHeroes" in customGameSettings.heroes[team] ? "enabledHeroes" : "disabledHeroes";
                    wsHeroesKey = this.tows(heroesKey, customGameSettingsSchema.heroes.values);
                    for (let hero of customGameSettings.heroes[team][heroesKey]) {
                        wsHeroesKeyObj.push(this.tows(hero === "mccree" ? "cassidy" : hero === "hammond" ? "wreckingBall" : hero, heroKw));
                    }
                    delete customGameSettings.heroes[team][heroesKey];
                }

                if ("general" in customGameSettings.heroes[team]) {
                    Object.assign(
                        result[wsHeroes][wsTeam],
                        this.compileCustomGameSettingsDict(
                            customGameSettings.heroes[team].general,
                            // @ts-ignore - customGameSettingsSchema should always has the correct schema
                            customGameSettingsSchema.heroes.values.general.values,
                        ),
                    );
                    delete customGameSettings.heroes[team].general;
                }

                if (customGameSettings.heroes[team].mccree) {
                    customGameSettings.heroes[team].cassidy = customGameSettings.heroes[team].mccree;
                    delete customGameSettings.heroes[team].mccree;
                }
                if (customGameSettings.heroes[team].hammond) {
                    customGameSettings.heroes[team].wreckingBall = customGameSettings.heroes[team].hammond;
                    delete customGameSettings.heroes[team].hammond;
                }

                for (let hero of Object.keys(customGameSettings.heroes[team])) {
                    var wsHero = this.tows(hero, heroKw);
                    if ("ability1KB%" in customGameSettings.heroes[team][hero]) {
                        customGameSettings.heroes[team][hero]["ability1Kb%"] = customGameSettings.heroes[team][hero]["ability1KB%"];
                        delete customGameSettings.heroes[team][hero]["ability1KB%"];
                    }
                    result[wsHeroes][wsTeam][wsHero] = this.compileCustomGameSettingsDict(
                        customGameSettings.heroes[team][hero],
                        // @ts-ignore
                        customGameSettingsSchema.heroes.values[hero].values,
                    );
                }

                if (wsHeroesKey !== null) {
                    result[wsHeroes][wsTeam][wsHeroesKey] = wsHeroesKeyObj;
                }
            }
        } else if (key === "workshop") {
            var wsWorkshop = this.tows(key, customGameSettingsSchema);
            result[wsWorkshop] = {};
            for (var workshopSetting of Object.keys(customGameSettings.workshop)) {
                if (customGameSettings.workshop[workshopSetting] === true) {
                    result[wsWorkshop][workshopSetting] = this.tows("__on__", customGameSettingsKw);
                } else if (customGameSettings.workshop[workshopSetting] === false) {
                    result[wsWorkshop][workshopSetting] = this.tows("__off__", customGameSettingsKw);
                } else if (Array.isArray(customGameSettings.workshop[workshopSetting])) {
                    //Enum value
                    if (customGameSettings.workshop[workshopSetting].length !== 1) {
                        this.error("Invalid value '" + customGameSettings.workshop[workshopSetting] + "' for workshop setting '" + workshopSetting + "', must be of length 1");
                    }
                    result[wsWorkshop][workshopSetting] = "[" + customGameSettings.workshop[workshopSetting] + "]";
                } else if (isNumber(customGameSettings.workshop[workshopSetting])) {
                    result[wsWorkshop][workshopSetting] = customGameSettings.workshop[workshopSetting];
                } else if (customGameSettings.workshop[workshopSetting] in heroKw) {
                    result[wsWorkshop][workshopSetting] = this.tows(customGameSettings.workshop[workshopSetting], heroKw);
                } else {
                    this.error("Invalid value '" + customGameSettings.workshop[workshopSetting] + "' for workshop setting '" + workshopSetting + "'");
                }
            }
        } else {
            this.error("Unknown key '" + key + "'");
        }
    }

    if (this.activatedExtensions.length > 0) {
        this.activatedExtensions = [...new Set(this.activatedExtensions)];
        result[this.tows("extensions", customGameSettingsSchema)] = this.activatedExtensions.map((x) => this.tows(x, customGameSettingsSchema.extensions.values));
    }
    if (areOnlyWorkshopMapsEnabled) {
        this.availableExtensionPoints = this.availableExtensionPoints + 16;
    }

    this.nbTabs = 0;
    const deserializeObject = (obj: Record<string, any>) => {
        var result = "\n" + tabLevel(this.nbTabs, true) + "{\n";
        this.nbTabs++;
        for (var key of Object.keys(obj)) {
            if (obj[key].constructor === Array) {
                result += tabLevel(this.nbTabs, true) + key + "\n" + tabLevel(this.nbTabs, true) + "{\n" + obj[key].map((x: any) => tabLevel(this.nbTabs + 1, true) + x + "\n").join("");
                result += tabLevel(this.nbTabs, true) + "}\n";
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                result += tabLevel(this.nbTabs, true) + key + deserializeObject(obj[key]) + "\n";
            } else {
                result += tabLevel(this.nbTabs, true) + key + ": " + obj[key] + "\n";
            }
        }
        this.nbTabs--;
        result += tabLevel(this.nbTabs, true) + "}";
        return result;
    }

    this.compiledCustomGameSettings = this.tows("__settings__", ruleKw) + deserializeObject(result) + "\n\n";
}
