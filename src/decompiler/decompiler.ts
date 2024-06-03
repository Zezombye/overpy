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

import { customGameSettingsSchema } from "../data/customGameSettings";
import { heroKw } from "../data/heroes";
import { mapKw } from "../data/maps";
import { customGameSettingsKw, ruleKw } from "../data/other";
import { valueFuncKw } from "../data/values";
import { resetGlobalVariables, globalVariables, defaultVarNames, playerVariables, subroutines, defaultSubroutineNames, activatedExtensions, setActivatedExtensions } from "../globalVars";
import { OWLanguage, Overwatch2Heroes } from "../types";
import { Ast } from "../utils/ast";
import { decompileCustomGameSettingsDict, getBracketPositions } from "../utils/decompilation";
import { astToString, debug, error } from "../utils/logging";
import { isNumber } from "../utils/other";
import { topy, tows } from "../utils/translation";
import { addVariable, translateNameToAvoidKeywords, addSubroutine } from "../utils/varNames";
import { astActionsToOpy, astRulesToOpy, astToOpy } from "./astToOpy";
import { decompileActions, decompileConditions, decompileRuleToAst } from "./workshopToAst";

//OverPy Decompiler (Workshop -> OverPy)

export function decompileAllRules(content: string, language: OWLanguage="en-US") {

	resetGlobalVariables(language);
	var result = decompileAllRulesToAst(content);

	if (Array.isArray(result)) {
		//decompiled rules
		var astRules = result[1];
		// result now holds the custom game settings
		result = result[0];
	} else {
		//decompiled actions or conditions
		return result;
	}

	var variableDeclarations = "";
	if (globalVariables.length > 0) {
		globalVariables.sort((a,b) => a.index-b.index);
		var globalVariableDeclarations = "";
		for (var variable of globalVariables) {
			if (defaultVarNames.indexOf(variable.name) !== variable.index) {
				globalVariableDeclarations += "globalvar "+variable.name+" "+variable.index+"\n";
			}
		}
		if (globalVariableDeclarations !== "") {
			variableDeclarations += "#Global variables\n\n"+globalVariableDeclarations+"\n\n";
		}
	}
	if (playerVariables.length > 0) {
		playerVariables.sort((a,b) => a.index-b.index);
		var playerVariableDeclarations = "";
		for (var variable of playerVariables) {
			if (defaultVarNames.indexOf(variable.name) !== variable.index) {
				playerVariableDeclarations += "playervar "+variable.name+" "+variable.index+"\n";
			}
		}
		if (playerVariableDeclarations !== "") {
			variableDeclarations += "#Player variables\n\n"+playerVariableDeclarations+"\n\n";
		}
	}

	var subroutineDeclarations = "";
	if (subroutines.length > 0) {
		subroutines.sort((a,b) => a.index-b.index);
		for (var subroutine of subroutines) {
			if (defaultSubroutineNames.indexOf(subroutine.name) !== subroutine.index) {
				subroutineDeclarations += "subroutine "+subroutine.name+" "+subroutine.index+"\n";
			}
		}
		if (subroutineDeclarations !== "") {
			subroutineDeclarations = "#Subroutine names\n\n"+subroutineDeclarations+"\n\n";
		}
	}
	result += variableDeclarations + subroutineDeclarations;

	for (var rule of astRules) {
		console.log(astToString(rule));
	}
	console.log(astRules);

	var opyRules = astRulesToOpy(astRules)
	if (activatedExtensions.length > 0) {
		result += "#Activated extensions\n\n" + activatedExtensions.map(x => "#!extension "+x+"\n").join("")+"\n\n";
	}

	result += opyRules;


	return result;

}

/**
 * Decompiles all rules in the given content string to Abstract Syntax Trees (ASTs) or OverPy code.
 *
 * @param content - The content string to decompile.
 * @return If the provided content is actions or conditions, returns the OverPy code in a string.
 * Otherwise, returns an array with the first element being the custom game settings and the second element being the ASTs.
 */
function decompileAllRulesToAst(content: string): string | [string, Ast[]] {

	content = content.trim();
	var customGameSettings = "";

	//Some maps and gamemodes are removed in ow2, making eg "Map("
	//Before anything else, we must replace these to parse brackets correctly
	var mapConstFunction = tows("__map__", valueFuncKw);
	var gamemodeConstFunction = tows("__gamemode__", valueFuncKw);

	//This regex will sadly also replace instances in strings, but I doubt there are many.
	var mapRegex = new RegExp("\\b"+mapConstFunction+"\\(\\s*(?=[&\\-|=\\*,?;\\.:!])", "g")
	content = content.replace(mapRegex, mapConstFunction+"(__removed_from_ow2__)")
	var gamemodeRegex = new RegExp("\\b"+gamemodeConstFunction+"\\(\\s*(?=[&\\-|=\\*,?;\\.:!])", "g")
	content = content.replace(gamemodeRegex, gamemodeConstFunction+"(__removed_from_ow2__)")

	console.log(gamemodeRegex);
	console.log(gamemodeConstFunction);

	//console.log(content);

	var bracketPos = getBracketPositions(content);
	if (bracketPos.length === 0) {
		error("Content is not workshop code");
	}

	//Check for settings
	if (content.startsWith(tows("__settings__", ruleKw))) {
		customGameSettings += decompileCustomGameSettings(content.substring(bracketPos[0]+1, bracketPos[1]));
		content = content.substring(bracketPos[1]+1)
	}

	if (activatedExtensions.length > 0) {
		setActivatedExtensions([...new Set(activatedExtensions)]);
	}

	content = content.trim();
	bracketPos = getBracketPositions(content);

	//Check for variable names
	if (content.startsWith(tows("__variables__", ruleKw))) {
		decompileVarNames(content.substring(bracketPos[0]+1, bracketPos[1]));
		content = content.substring(bracketPos[1]+1)
	}

	content = content.trim();
	bracketPos = getBracketPositions(content);

	//Check for subroutine names
	if (content.startsWith(tows("__subroutines__", ruleKw))) {
		decompileSubroutines(content.substring(bracketPos[0]+1, bracketPos[1]));
		content = content.substring(bracketPos[1]+1);

	}

	content = content.trim();
	bracketPos = getBracketPositions(content);
	debug("global vars: "+globalVariables);
	debug("player vars: "+playerVariables);
	debug("subroutines: "+subroutines);

	//Check if we are decompiling actions or conditions
	if (content.startsWith(tows("__actions__", ruleKw))) {
		return astActionsToOpy(decompileActions(content.substring(bracketPos[0], bracketPos[1]+1)));
	}
	if (content.startsWith(tows("__conditions__", ruleKw))) {
		return decompileConditions(content.substring(bracketPos[0], bracketPos[1]+1)).map(x => "@Condition "+astToOpy(x)).join("\n");
	}

	bracketPos.unshift(-1);
	//A rule looks like this:
	//rule(title) {...}
	//Therefore, each rule ends every 4th bracket position

	var astRules = [];

	for (var i = 0; i < bracketPos.length-1; i += 4) {
	//for (var i = 0; i < 4; i += 4) {
		if (i >= bracketPos.length-1) {
			break;
		}
		astRules.push(decompileRuleToAst(content.substring(bracketPos[i]+1, bracketPos[i+4]+1)));
	}
	return [customGameSettings, astRules];
}

function decompileCustomGameSettings(content: string) {
	console.log(content);
	var result: Record<string, any> = {};
	var wsDisabled = tows("__disabled__", ruleKw);

	//Convert the settings to an object (without even translating).
	var serialized: Record<string, any> = {};
	var lines = content.split("\n").map(x => x.trim());
	var objectStack: string[] = [];
	var currentObject: Record<string, any> = {};
	var depth = 0;

	function updateCurrentObject() {
		currentObject = serialized;
		for (var elem of objectStack) {
			if (!(elem in currentObject)) {
				currentObject[elem] = {};
			}
			currentObject = currentObject[elem];
		}
	}

	for (var i = 0; i < lines.length; i++) {

		if (lines[i] === "" || lines[i] === "{") {
			continue;

		} else if (i < lines.length-1 && lines[i+1] === "{") {
			objectStack.push(lines[i]);
			updateCurrentObject();
			depth++;

		} else if (lines[i] === "}") {
			objectStack.pop();
			updateCurrentObject();
			depth--;
			if (depth < 0) {
				error("Depth is less than 0");
			}

		} else {
			currentObject[lines[i]] = null;
		}
	}

	if (depth > 0) {
		error("Depth is more than 0 (missing closing bracket)");
	}
	console.log(serialized);

	for (var category of Object.keys(serialized)) {
		var opyCategory = topy(category, customGameSettingsSchema);
		result[opyCategory] = {};
		if (opyCategory === "main" || opyCategory === "lobby") {
			result[opyCategory] = decompileCustomGameSettingsDict(Object.keys(serialized[category]), customGameSettingsSchema[opyCategory].values);

		} else if (opyCategory === "extensions") {
			setActivatedExtensions(Object.keys(serialized[category]).map(ext => topy(ext, customGameSettingsSchema.extensions.values)));
			delete result[opyCategory];

		} else if (opyCategory === "gamemodes") {
			for (var gamemode of Object.keys(serialized[category])) {
				var isCurrentGamemodeDisabled = false;
				if (gamemode.startsWith(wsDisabled)) {
					isCurrentGamemodeDisabled = true;
					var opyGamemode = topy(gamemode.substring(wsDisabled.length), customGameSettingsSchema.gamemodes.values);
				} else {
					var opyGamemode = topy(gamemode, customGameSettingsSchema.gamemodes.values);
				}

				result[opyCategory][opyGamemode] = {};
				if (isCurrentGamemodeDisabled) {
					result[opyCategory][opyGamemode].enabled = false;
				}

				var dict = [];
				if (serialized[category][gamemode] !== null) {
					for (var property of Object.keys(serialized[category][gamemode])) {
						if (serialized[category][gamemode][property] === null) {
							//empty object - is actually part of a dict
							dict.push(property);

						} else {
							//The only object in a gamemode should be disabled/enabled maps, which is an array
							var opyPropName = topy(property, customGameSettingsSchema.gamemodes.values.general.values);
							result[opyCategory][opyGamemode][opyPropName] = [];
							for (var map of Object.keys(serialized[category][gamemode][property])) {
								//remove number at the end, if there is one
								if (map.endsWith(" 0")) {
									map = map.substring(0, map.length-2);
								}
								if (map.includes("972777")) {
									var variants = [...map.matchAll(/\b972777\d+\b/g)].map(x => x[0]);
									var mapName = topy(map.replace(/\b972777\d+\b/g, ""), mapKw);
									var mapVariants = []
									if (!("variants" in mapKw[mapName])) {
										error("Map '"+mapName+"' should have no variants")
									}
									for (var variant of variants) {
										var variantName = Object.keys(mapKw[mapName].variants as Record<string, string>).filter(x => (mapKw[mapName].variants as Record<string, string>)[x] === variant);
										if (variantName.length === 0) {
											error("Unknown variant '"+variant+"' for map '"+mapName+"'");
										}
										mapVariants.push(variantName[0])
									}
									if (mapVariants.length === Object.keys(mapKw[mapName].variants as Record<string, string>).length) {
										result[opyCategory][opyGamemode][opyPropName].push(mapName)
									} else {
										var mapObj: Record<string, string[]> = {}
										mapObj[mapName] = mapVariants
										result[opyCategory][opyGamemode][opyPropName].push(mapObj)
									}
								} else {
									result[opyCategory][opyGamemode][opyPropName].push(topy(map, mapKw))
								}
							}
						}
					}
				}

				Object.assign(result[opyCategory][opyGamemode], decompileCustomGameSettingsDict(dict, customGameSettingsSchema[opyCategory].values[opyGamemode].values))
			}

		} else if (opyCategory === "heroes") {
			for (var team of Object.keys(serialized[category])) {
				var opyTeam = topy(team, customGameSettingsSchema[opyCategory].teams)
				result[opyCategory][opyTeam] = {};

				var dict = [];
				for (var property of Object.keys(serialized[category][team])) {
					if (serialized[category][team][property] === null) {
						//empty object - is actually part of a dict
						dict.push(property);

					} else {
						//check if it's disabled/enabled heroes
						if (property === tows("disabledHeroes", customGameSettingsSchema.heroes.values) || property === tows("enabledHeroes", customGameSettingsSchema.heroes.values)) {
							var opyPropName = topy(property, customGameSettingsSchema.heroes.values);
							result[opyCategory][opyTeam][opyPropName] = [];
							for (var hero of Object.keys(serialized[category][team][property])) {
								result[opyCategory][opyTeam][opyPropName].push(topy(hero, heroKw))
							}
						} else {
							//probably a hero
							let opyHero = topy(property, heroKw);
							if (!(<any>Object).values(Overwatch2Heroes).includes(opyHero)) error("Unknown hero '"+opyHero+"'");
							result[opyCategory][opyTeam][opyHero] = {};
							let heroValues = customGameSettingsSchema[opyCategory].values[opyHero as Overwatch2Heroes]?.values;
							if (heroValues === undefined) {
								error("Hero '"+opyHero+"' has no values");
							}
							Object.assign(
								result[opyCategory][opyTeam][opyHero],
								decompileCustomGameSettingsDict(
									Object.keys(serialized[category][team][property]),
									heroValues,
									{invalidButAcceptedProperties: customGameSettingsSchema[opyCategory].values.general?.values ?? error("No general values for heroes")}))
						}
					}
				}

				if (dict.length > 0) {
					result[opyCategory][opyTeam].general = decompileCustomGameSettingsDict(dict, customGameSettingsSchema.heroes.values.general?.values ?? error("No general values for heroes"));
				}
			}
		} else if (opyCategory === "workshop") {
			var workshopSettings = Object.keys(serialized[category]).map(x => x+"\n").join("");
			var i = 0;
			while (i < workshopSettings.length) {
				var nextColonIndex = workshopSettings.indexOf(":", i);
				if (nextColonIndex < 0) {
					error("Expected a ':', but found none, while parsing workshop settings");
				}
				var key = workshopSettings.substring(i, nextColonIndex).trim();
				i = nextColonIndex+1;
				var nextNewlineIndex = workshopSettings.indexOf("\n", i);
				if (nextNewlineIndex < 0) {
					error("Expected a newline, but found none, while parsing workshop settings");
				}
				var value: any = workshopSettings.substring(i, nextNewlineIndex).trim();
				if (isNumber(value)) {
					value = parseFloat(value);
				} else if (value.startsWith("[") && value.endsWith("]")) {
					//workshop enum
					value = [parseFloat(value.substring(1))]
				} else if (/e[\+\-]\d+:F3/.test(value)) {
					//Copy bug for too high/low numbers
					value = parseFloat("1"+value.substring(0, value.indexOf(":")));
				} else {
					//It should be a boolean: translate On/Off.
					try {
						value = topy(value, customGameSettingsKw);
						if (value === "__on__") {
							value = true;
						} else if (value === "__off__") {
							value = false;
						} else {
							error("Unhandled value '"+value+"'");
						}
					} catch (e) {
						//Maybe a hero?
						value = topy(value, heroKw);
					}
				}
				i = nextNewlineIndex+1;
				result[opyCategory][key] = value;
			}
		}
	}

	console.log(result);

	return "settings "+JSON.stringify(result, null, 4)+"\n\n";
}

function decompileVarNames(content: string) {
	let varNames = content.split(":");
	var isInGlobalVars = true;
	let currentVarIndex: number = 0;
	for (var i = 0; i < varNames.length; i++) {
		varNames[i] = varNames[i].trim();
		if (i === 0) {
			//First element is always a var type
			if (varNames[i] === tows("__global__", ruleKw)) {
				isInGlobalVars = true;
			} else if (varNames[i] === tows("__player__", ruleKw)) {
				isInGlobalVars = false;
			} else {
				error("Unrecognized var type '"+varNames[i]+"'");
			}
		} else {
			if (varNames[i].search(/\s/) >= 0) {
				var [first, ...rest] = varNames[i].split(/\s+/);
				var elems = [first, rest.join(" ")];
				if (elems.length !== 2) {
					error("Could not parse variables field: too many elements on '"+varNames[i]+"'");
				}
				addVariable(translateNameToAvoidKeywords(elems[0], isInGlobalVars ? "globalvar" : "playervar"), isInGlobalVars, currentVarIndex);
				if (!isNaN(+elems[1])) {
					currentVarIndex = +elems[1];
				} else {
					if (elems[1] === tows("__global__", ruleKw)) {
						isInGlobalVars = true;
					} else if (elems[1] === tows("__player__", ruleKw)) {
						isInGlobalVars = false;
					} else {
						error("Unrecognized var type '"+elems[1]+"'");
					}
				}
			} else {
				if (!isNaN(+varNames[i])) {
					currentVarIndex = +varNames[i];
				} else if (i === varNames.length-1) {
					addVariable(translateNameToAvoidKeywords(varNames[i], isInGlobalVars ? "globalvar" : "playervar"), isInGlobalVars, currentVarIndex);
				} else {
					error("Could not parse variables field");
				}
			}
		}
	}
}

function decompileSubroutines(content: string) {
	let subroutineContent = content.split("\n");
	console.log(subroutineContent);
	for (var i = 0; i < subroutineContent.length; i ++) {

		subroutineContent[i] = subroutineContent[i].trim();
		if (subroutineContent[i] === "") {
			continue;
		}

		if (subroutineContent[i].split(":").length % 2 !== 0) {
			error("Malformed subroutine field '"+subroutineContent[i]+"'(expected 2 elements)");
		}
		var index = +subroutineContent[i].split(":")[0].trim();
		var subName = subroutineContent[i].split(":")[1].trim();
		if (isNaN(index)) {
			error("Index '"+index+"' in subroutines field should be a number");
		}
		addSubroutine(translateNameToAvoidKeywords(subName, "subroutine"), index);
	}
}
