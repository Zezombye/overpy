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
import { createEvalVM, setRootPath, importedFiles, fileStack, DEBUG_MODE, ELEMENT_LIMIT, activatedExtensions, availableExtensionPoints, compiledCustomGameSettings, encounteredWarnings, enumMembers, globalInitDirectives, globalVariables, macros, nbElements, nbTabs, playerInitDirectives, playerVariables, resetGlobalVariables, subroutines, rootPath, setFileStack, resetMacros, setAvailableExtensionPoints, setCompiledCustomGameSettings, resetNbTabs, incrementNbTabs, decrementNbTabs, setActivatedExtensions } from "../globalVars";
import { customGameSettingsSchema } from "../data/customGameSettings";
import { gamemodeKw } from "../data/gamemodes";
import { heroKw } from "../data/heroes";
import { mapKw } from "../data/maps";
import { ruleKw, customGameSettingsKw } from "../data/other";
import { isNumber, shuffleArray, tabLevel } from "../utils/other";
import { Ast } from "../utils/ast";
import { getFilePaths, getFileContent } from "../utils/file";
import { astToString, warn, error } from "../utils/logging";
import { tows } from "../utils/translation";
import { parseAstRules } from "./astParser";
import { astRulesToWs } from "./astToWorkshop";
import { parseLines } from "./parser";
import { tokenize } from "./tokenizer";
import { addVariable } from "../utils/varNames";
import { OWLanguage, ScriptFileStackMember, Subroutine, Variable } from "../types";
import { compileCustomGameSettingsDict } from "../utils/compilation";

/**
 * @returns An object containing the compiled result along with associated metadata
 */
export async function compile(content: string, language: OWLanguage = "en-US", _rootPath = ""): Promise<{
	result: string,
	macros: any[],
	globalVariables: Variable[],
	playerVariables: Variable[],
	subroutines: Subroutine[],
	encounteredWarnings: string[],
	enumMembers: Record<string, any>,
	nbElements: number,
	activatedExtensions: string[],
	spentExtensionPoints: number,
	availableExtensionPoints: number,
}> {
	// Need to wait for QuickJS to load
	await createEvalVM();

	const t0 = performance.now();

	resetGlobalVariables(language);
	// rootPath = _rootPath;
	setRootPath(_rootPath);

	//Handle #!mainfile directive
	if (content.startsWith("#!mainFile ")) {
		let mainFilePath = (await getFilePaths(content.substring("#!mainFile ".length, content.indexOf("\n"))))[0];
		setRootPath(mainFilePath.substring(0, mainFilePath.lastIndexOf("/") + 1));
		content = await getFileContent(mainFilePath);
		if (DEBUG_MODE) {
			console.log("content = ");
			console.log(content);
		}
	} else {
		importedFiles.push(rootPath);
	}


	setFileStack([{
		"name": "<main>",
		"currentLineNb": 1,
		"currentColNb": 1,
		"remainingChars": 99999999999, //does not matter
		staticMember: true,
		fileStackMemberType: "normal"
	} as ScriptFileStackMember]);
	resetMacros();

	var lines = await tokenize(content);

	var astRules = await parseLines(lines);
	astRules.unshift(...getInitDirectivesRules());

	if (DEBUG_MODE) {
		for (var elem of astRules) {
			console.log(astToString(elem));
		}
		console.log(astRules);
	}

	var result = compileRules(astRules);

	var spentExtensionPoints = 0;
	for (var ext of activatedExtensions) {
		spentExtensionPoints += customGameSettingsSchema.extensions.values[ext].points;
	}


	if (DEBUG_MODE) {
		var t1 = performance.now();
		console.log("Compilation time: " + (t1 - t0) + "ms");
	}
	return {
		result: result,
		macros: macros,
		globalVariables: globalVariables,
		playerVariables: playerVariables,
		subroutines: subroutines,
		encounteredWarnings: encounteredWarnings,
		enumMembers: enumMembers,
		nbElements: nbElements,
		activatedExtensions: activatedExtensions,
		spentExtensionPoints: spentExtensionPoints,
		availableExtensionPoints: availableExtensionPoints,
	};
}

function compileRules(astRules: Ast[]) {

	var parsedAstRules = parseAstRules(astRules);

	if (DEBUG_MODE) {
		/*for (var elem of parsedAstRules) {
			console.log(astToString(elem));
		}*/
		console.log(parsedAstRules);
	}

	var compiledRules = astRulesToWs(parsedAstRules).join("");

	var result = compiledCustomGameSettings + generateVariablesField() + generateSubroutinesField() + compiledRules;

	setFileStack([]);
	if (nbElements > ELEMENT_LIMIT) {
		warn("w_element_limit", "The gamemode is over the element limit (" + nbElements + " > " + ELEMENT_LIMIT + " elements)");
	}

	//Check for extension points
	var spentExtensionPoints = 0;
	for (var ext of activatedExtensions) {
		spentExtensionPoints += customGameSettingsSchema.extensions.values[ext].points;
	}
	if (compiledCustomGameSettings !== "") {
		if (spentExtensionPoints > availableExtensionPoints) {
			warn("w_extension_points", "The extension points spent (" + spentExtensionPoints + ") are over the available points (" + availableExtensionPoints + ")");
		}
	} else {
		setAvailableExtensionPoints(-1);
	}

	return result;
}

function getInitDirectivesRules() {
	var result = [];
	if (globalInitDirectives.length > 0) {
		var rule = new Ast("__rule__");
		rule.ruleAttributes = {
			name: "Initialize global variables",
			event: "global",
		};
		rule.children = globalInitDirectives;
		result.push(rule);
	}
	if (playerInitDirectives.length > 0) {
		var rule = new Ast("__rule__");
		rule.ruleAttributes = {
			name: "Initialize player variables",
			event: "eachPlayer",
			eventPlayer: "all",
			eventTeam: "all",
		};
		rule.children = playerInitDirectives;
		result.push(rule);
	}
	return result;
}

function generateVariablesField() {

	var result = "";

	for (var varType of ["global", "player"]) {
		var outputVariables = Array(128);
		var varNames: string[] = [];
		var varList = varType === "global" ? globalVariables : playerVariables;
		var unassignedVariables = [];

		for (let variable of varList) {
			//check name
			if (!/[A-Za-z_]\w*/.test(variable.name)) {
				error("Unauthorized name for " + varType + " variable: '" + variable.name + "'");
			}
			//check duplication
			if (varNames.includes(variable.name)) {
				error("Duplicate declaration of " + varType + " variable '" + variable.name + "'");
			}

			if (outputVariables[variable.index] !== undefined) {
				error("Duplicate use of index " + variable.index + " for " + varType + " variables '" + variable.name + "' and '" + outputVariables[variable.index] + "'");
			}
			varNames.push(variable.name);
			if (variable.index === undefined || variable.index === null) {
				unassignedVariables.push(variable.name);
			} else {
				if (variable.index >= 128 || variable.index < 0) {
					error("Invalid index '" + variable.index + "' for " + varType + " variable '" + variable.name + "', must be from 0 to 127");
				}
				outputVariables[variable.index] = variable.name;
			}
		}

		//console.log(outputVariables);

		for (let variable of unassignedVariables) {
			var foundSpot = false;
			for (var i = 0; i < 128; i++) {
				if (outputVariables[i] === undefined) {
					foundSpot = true;
					outputVariables[i] = variable;
					break;
				}
			}
			if (!foundSpot) {
				error("More than 128 " + varType + " variables have been declared");
			}
		}

		var varTypeResult = "";
		for (var i = 0; i < 128; i++) {
			if (outputVariables[i] !== undefined) {
				varTypeResult += tabLevel(2) + i + ": " + outputVariables[i] + "\n";
			}
		}
		if (varTypeResult !== "") {
			varTypeResult = tabLevel(1) + tows("__" + varType + "__", ruleKw) + ":\n" + varTypeResult;
			result += varTypeResult;
		}
	}

	if (result) {
		result = tows("__variables__", ruleKw) + " {\n" + result + "}\n";
	}

	return result;
}

function generateSubroutinesField() {

	var result = "";

	var outputSubroutines = Array(128);
	var subNames: string[] = [];
	var unassignedSubroutines = [];

	for (let subroutine of subroutines) {
		//check name
		if (!/[A-Za-z_]\w*/.test(subroutine.name)) {
			error("Unauthorized name for subroutine: '" + subroutine.name + "'");
		}
		//check duplication
		if (subNames.includes(subroutine.name)) {
			error("Duplicate declaration of subroutine '" + subroutine.name + "'");
		}

		if (outputSubroutines[subroutine.index] !== undefined) {
			error("Duplicate use of index " + subroutine.index + " for subroutines '" + subroutine.name + "' and '" + outputSubroutines[subroutine.index] + "'");
		}
		subNames.push(subroutine.name);
		if (subroutine.index === undefined || subroutine.index === null) {
			unassignedSubroutines.push(subroutine.name);
		} else {
			if (isNaN(subroutine.index) || subroutine.index >= 128 || subroutine.index < 0) {
				error("Invalid index '" + subroutine.index + "' for subroutine '" + subroutine.name + "', must be from 0 to 127");
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
			error("More than 128 subroutines have been declared");
		}
	}

	for (var i = 0; i < 128; i++) {
		if (outputSubroutines[i] !== undefined) {
			result += tabLevel(1) + i + ": " + outputSubroutines[i] + "\n";
		}
	}

	if (result) {
		result = tows("__subroutines__", ruleKw) + " {\n" + result + "}\n";
	}

	return result;

}

export function compileCustomGameSettings(customGameSettings: Record<string, any>) {
	if (typeof customGameSettings !== "object") {
		error("Custom game settings must be an object");
	}

	if (compiledCustomGameSettings !== "") {
		error("Custom game settings have already been declared");
	}

	var result: Record<string, any> = {};
	if (!("gamemodes" in customGameSettings)) {
		error("Custom game settings must specify a gamemode");
	}

	var areOnlyWorkshopMapsEnabled = true;

	for (var key of Object.keys(customGameSettings)) {
		if (key === "main" || key === "lobby") {
			//workshop bug - cannot paste "best available"
			if (key === "lobby" && customGameSettings["lobby"].dataCenterPreference === "bestAvailable") {
				delete customGameSettings["lobby"].dataCenterPreference;
			}
			// @ts-ignore - lobby/main settings in src/data/customGameSettings always have the correct schema
			result[tows(key, customGameSettingsSchema)] = compileCustomGameSettingsDict(customGameSettings[key], customGameSettingsSchema[key].values);
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
					error("The maximum number of slots cannot be over 12 (currently " + maxSlots + ")");
				}
				/*console.log(maxTeam1Slots)
				console.log(maxTeam2Slots)
				console.log(maxFfaSlots)*/
				setAvailableExtensionPoints(availableExtensionPoints + 4 * (12 - maxSlots));
			}

		} else if (key === "gamemodes") {
			var wsGamemodes = tows("gamemodes", customGameSettingsSchema);
			result[wsGamemodes] = {};
			for (var gamemode of Object.keys(customGameSettings.gamemodes)) {
				if (gamemode !== "general") {
					if (!(gamemode in gamemodeKw)) {
						error("Unknown gamemode '" + gamemode + "'");
					} else if (gamemodeKw[gamemode].onlyInOw1) {
						error("The gamemode '" + gamemode + "' is not available in OW2");
					}
				}
				var wsGamemode = tows(gamemode, customGameSettingsSchema.gamemodes.values);
				var isGamemodeEnabled = true;
				if ("enabled" in customGameSettings.gamemodes[gamemode] && customGameSettings.gamemodes[gamemode].enabled === false) {
					wsGamemode = tows("__disabled__", ruleKw) + " " + wsGamemode;
					isGamemodeEnabled = false;
				}
				delete customGameSettings.gamemodes[gamemode].enabled;
				result[wsGamemodes][wsGamemode] = {};
				if ("enabledMaps" in customGameSettings.gamemodes[gamemode] || "disabledMaps" in customGameSettings.gamemodes[gamemode]) {
					if ("enabledMaps" in customGameSettings.gamemodes[gamemode] && "disabledMaps" in customGameSettings.gamemodes[gamemode]) {
						error("Cannot have both 'enabledMaps' and 'disabledMaps' in gamemode '" + gamemode + "'");
					}
					var mapsKey = "enabledMaps" in customGameSettings.gamemodes[gamemode] ? "enabledMaps" : "disabledMaps";
					var wsMapsKey = tows(mapsKey, customGameSettingsSchema.gamemodes.values[gamemode].values);
					var encounteredMaps = [];
					result[wsGamemodes][wsGamemode][wsMapsKey] = [];
					for (var map of customGameSettings.gamemodes[gamemode][mapsKey]) {
						if (typeof map === "object" && !Array.isArray(map)) {
							if (Object.keys(map).length !== 1) {
								error("Malformed map object, should only have 1 key");
							}
							var mapName = Object.keys(map)[0];
							var variants = [];
							let mapVariants = mapKw[mapName].variants ?? {};
							for (var variant of map[mapName]) {
								if (!(variant in mapVariants)) {
									error("Unknown variant '" + variant + "' for map '" + mapName + "'");
								}
								variants.push(mapVariants[variant]);
							}
							encounteredMaps.push(mapName);
							result[wsGamemodes][wsGamemode][wsMapsKey].push(tows(mapName, mapKw) + " " + variants.join(" "));


						} else {
							if (!(map in mapKw)) {
								error("Unknown map '" + map + "'");
							} else if (mapKw[map].onlyInOw1) {
								error("The map '" + map + "' is not available in OW2");
							}
							encounteredMaps.push(map);
							result[wsGamemodes][wsGamemode][wsMapsKey].push(tows(map, mapKw));
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

				// @ts-ignore - customGameSettingsSchema should always has the correct schema
				Object.assign(result[wsGamemodes][wsGamemode], compileCustomGameSettingsDict(customGameSettings.gamemodes[gamemode], customGameSettingsSchema.gamemodes.values[gamemode].values));
			}

		} else if (key === "heroes") {
			var wsHeroes = tows("heroes", customGameSettingsSchema);
			result[wsHeroes] = {};
			for (var team of Object.keys(customGameSettings.heroes)) {
				var wsTeam = tows(team, customGameSettingsSchema.heroes.teams);
				result[wsHeroes][wsTeam] = {};
				var wsHeroesKey = null;
				var wsHeroesKeyObj = [];
				if ("enabledHeroes" in customGameSettings.heroes[team] || "disabledHeroes" in customGameSettings.heroes[team]) {
					if ("enabledHeroes" in customGameSettings.heroes[team] && "disabledHeroes" in customGameSettings.heroes[team]) {
						error("Cannot have both 'enabledHeroes' and 'disabledHeroes' in team '" + team + "'");
					}
					var heroesKey = "enabledHeroes" in customGameSettings.heroes[team] ? "enabledHeroes" : "disabledHeroes";
					wsHeroesKey = tows(heroesKey, customGameSettingsSchema.heroes.values);
					for (var hero of customGameSettings.heroes[team][heroesKey]) {
						wsHeroesKeyObj.push(tows(hero, heroKw));
					}
					delete customGameSettings.heroes[team][heroesKey];
				}

				if ("general" in customGameSettings.heroes[team]) {
					// @ts-ignore - customGameSettingsSchema should always has the correct schema
					Object.assign(result[wsHeroes][wsTeam], compileCustomGameSettingsDict(customGameSettings.heroes[team].general, customGameSettingsSchema.heroes.values.general.values));
					delete customGameSettings.heroes[team].general;
				}

				for (let hero of Object.keys(customGameSettings.heroes[team])) {
					var wsHero = tows(hero, heroKw);
					for (var key of Object.keys(customGameSettings.heroes[team][hero])) {
						// @ts-ignore
						if (!(key in customGameSettingsSchema.heroes.values[hero].values)) {
							error("'" + hero + "' has no property '" + key + "'");
						}
					}
					// @ts-ignore
					result[wsHeroes][wsTeam][wsHero] = compileCustomGameSettingsDict(customGameSettings.heroes[team][hero], customGameSettingsSchema.heroes.values[hero].values);
				}

				if (wsHeroesKey !== null) {
					result[wsHeroes][wsTeam][wsHeroesKey] = wsHeroesKeyObj;
				}

			}
		} else if (key === "workshop") {
			var wsWorkshop = tows(key, customGameSettingsSchema);
			result[wsWorkshop] = {};
			for (var workshopSetting of Object.keys(customGameSettings.workshop)) {
				if (customGameSettings.workshop[workshopSetting] === true) {
					result[wsWorkshop][workshopSetting] = tows("__on__", customGameSettingsKw);
				} else if (customGameSettings.workshop[workshopSetting] === false) {
					result[wsWorkshop][workshopSetting] = tows("__off__", customGameSettingsKw);
				} else if (Array.isArray(customGameSettings.workshop[workshopSetting])) {
					//Enum value
					if (customGameSettings.workshop[workshopSetting].length !== 1) {
						error("Invalid value '" + customGameSettings.workshop[workshopSetting] + "' for workshop setting '" + workshopSetting + "', must be of length 1");
					}
					result[wsWorkshop][workshopSetting] = "[" + customGameSettings.workshop[workshopSetting] + "]";
				} else if (isNumber(customGameSettings.workshop[workshopSetting])) {
					result[wsWorkshop][workshopSetting] = customGameSettings.workshop[workshopSetting];
				} else if (customGameSettings.workshop[workshopSetting] in heroKw) {
					result[wsWorkshop][workshopSetting] = tows(customGameSettings.workshop[workshopSetting], heroKw);
				} else {
					error("Invalid value '" + customGameSettings.workshop[workshopSetting] + "' for workshop setting '" + workshopSetting + "'");
				}
			}
		} else {
			error("Unknown key '" + key + "'");
		}
	}

	if (activatedExtensions.length > 0) {
		setActivatedExtensions([...new Set(activatedExtensions)]);
		result[tows("extensions", customGameSettingsSchema)] = activatedExtensions.map(x => tows(x, customGameSettingsSchema.extensions.values));
	}
	if (areOnlyWorkshopMapsEnabled) {
		setAvailableExtensionPoints(availableExtensionPoints + 16);
	}


	resetNbTabs();
	function deserializeObject(obj: Record<string, any>) {
		var result = "\n" + tabLevel(nbTabs, true) + "{\n";
		incrementNbTabs();
		for (var key of Object.keys(obj)) {
			if (obj[key].constructor === Array) {
				result += tabLevel(nbTabs, true) + key + "\n" + tabLevel(nbTabs, true) + "{\n" + obj[key].map((x: any) => tabLevel(nbTabs + 1, true) + x + "\n").join("");
				result += tabLevel(nbTabs, true) + "}\n";
			} else if (typeof obj[key] === "object" && obj[key] !== null) {
				result += tabLevel(nbTabs, true) + key + deserializeObject(obj[key]) + "\n";
			} else {
				result += tabLevel(nbTabs, true) + key + ": " + obj[key] + "\n";
			}
		}
		decrementNbTabs();
		result += tabLevel(nbTabs, true) + "}";
		return result;
	}

	setCompiledCustomGameSettings(tows("__settings__", ruleKw) + deserializeObject(result) + "\n");


}


