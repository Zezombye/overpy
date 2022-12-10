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

//OverPy Decompiler (Workshop -> OverPy)

function decompileAllRules(content, language="en-US") {

	resetGlobalVariables(language);
	var result = "";

	var [result, astRules] = decompileAllRulesToAst(content);

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

function decompileAllRulesToAst(content) {

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
		activatedExtensions = [...new Set(activatedExtensions)]
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

function decompileCustomGameSettings(content) {
	console.log(content);
	var result = {};
	var wsDisabled = tows("__disabled__", ruleKw);

	//Convert the settings to an object (without even translating).
	var serialized = {};
	var lines = content.split("\n").map(x => x.trim());
	var objectStack = [];
	var currentObject = null;
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
			activatedExtensions = Object.keys(serialized[opyCategory]).map(ext => topy(ext, customGameSettingsSchema.extensions.values));
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
								if (map.endsWith("0")) {
									map = map.substring(0, map.length-1);
								}
								result[opyCategory][opyGamemode][opyPropName].push(topy(map, mapKw))
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
							var opyHero = topy(property, heroKw);
							result[opyCategory][opyTeam][opyHero] = {};
							Object.assign(result[opyCategory][opyTeam][opyHero], decompileCustomGameSettingsDict(Object.keys(serialized[category][team][property]), customGameSettingsSchema[opyCategory].values[opyHero].values, {invalidButAcceptedProperties: customGameSettingsSchema[opyCategory].values.general.values}))
						}
					}
				}

				if (dict.length > 0) {
					result[opyCategory][opyTeam].general = decompileCustomGameSettingsDict(dict, customGameSettingsSchema.heroes.values.general.values);
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
				var value = workshopSettings.substring(i, nextNewlineIndex).trim();
				if (isNumber(value)) {
					value = parseFloat(value);
				} else if (value.startsWith("[") && value.endsWith("]")) {
					//workshop enum
					value = [parseFloat(value.substring(1), value.substring(value.length-1))]
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

function decompileVarNames(content) {
	content = content.split(":");
	var isInGlobalVars = true;
	var currentVarIndex = undefined;
	for (var i = 0; i < content.length; i++) {
		content[i] = content[i].trim();
		if (i === 0) {
			//First element is always a var type
			if (content[i] === tows("__global__", ruleKw)) {
				isInGlobalVars = true;
			} else if (content[i] === tows("__player__", ruleKw)) {
				isInGlobalVars = false;
			} else {
				error("Unrecognized var type '"+content[i]+"'");
			}
		} else {
			if (content[i].search(/\s/) >= 0) {
				var [first, ...rest] = content[i].split(/\s+/);
				var elems = [first, rest.join(" ")];
				if (elems.length !== 2) {
					error("Could not parse variables field: too many elements on '"+content[i]+"'");
				}
				addVariable(translateNameToAvoidKeywords(elems[0], isInGlobalVars ? "globalvar" : "playervar"), isInGlobalVars, currentVarIndex);
				if (!isNaN(elems[1])) {
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
				if (!isNaN(content[i])) {
					currentVarIndex = +content[i];
				} else if (i === content.length-1) {
					addVariable(translateNameToAvoidKeywords(content[i], isInGlobalVars ? "globalvar" : "playervar"), isInGlobalVars, currentVarIndex);
				} else {
					error("Could not parse variables field");
				}
			}
		}
	}
}

function decompileSubroutines(content) {
	content = content.split("\n");
	console.log(content);
	for (var i = 0; i < content.length; i ++) {
		
		content[i] = content[i].trim();
		if (content[i] === "") {
			continue;
		}

		if (content[i].split(":").length % 2 !== 0) {
			error("Malformed subroutine field '"+content[i]+"'(expected 2 elements)");
		}
		var index = +content[i].split(":")[0].trim();
		var subName = content[i].split(":")[1].trim();
		if (isNaN(index)) {
			error("Index '"+index+"' in subroutines field should be a number");
		}
		addSubroutine(translateNameToAvoidKeywords(subName, "subroutine"), index);
	}
}
