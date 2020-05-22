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
	content = content.trim();
	
	
	var bracketPos = getBracketPositions(content);

	//Check for settings
	if (content.startsWith(tows("__settings__", ruleKw))) {
		result += decompileCustomGameSettings(content.substring(bracketPos[0]+1, bracketPos[1]));
		content = content.substring(bracketPos[1]+1)
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

	bracketPos = getBracketPositions(content);
	debug("global vars: "+globalVariables);
	debug("player vars: "+playerVariables);
	debug("subroutines: "+subroutines);
	
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

	var variableDeclarations = "";	
	if (globalVariables.length > 0) {
		globalVariables.sort((a,b) => a.index-b.index);
		var globalVariableDeclarations = "";
		for (var variable of globalVariables) {
			if (defaultVarNames.indexOf(variable.name) !== variable.index) {
				globalVariableDeclarations += "globalvar "+translateVarToPy(variable.name, true)+" "+variable.index+"\n";
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
				playerVariableDeclarations += "playervar "+translateVarToPy(variable.name, false)+" "+variable.index+"\n";
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
				subroutineDeclarations += "subroutine "+translateSubroutineToPy(subroutine.name)+" "+subroutine.index+"\n";
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

	result += astRulesToOpy(astRules);
		
	return result;
	
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
			result[opyCategory] = decompileCustomGameSettingsDict(Object.keys(serialized[category]), customGameSettingsSchema[opyCategory].values)

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
							Object.assign(result[opyCategory][opyTeam][opyHero], decompileCustomGameSettingsDict(Object.keys(serialized[category][team][property]), customGameSettingsSchema[opyCategory].values[opyHero].values))
						}
					}
				}

				if (dict.length > 0) {
					result[opyCategory][opyTeam].general = decompileCustomGameSettingsDict(dict, customGameSettingsSchema.heroes.values.general);
				}
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
				var elems = content[i].split(/\s+/);
				if (elems.length !== 2) {
					error("Could not parse variables field: too many elements on '"+content[i]+"'");
				}
				addVariable(elems[0], isInGlobalVars, currentVarIndex);
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
					addVariable(content[i], isInGlobalVars, currentVarIndex);
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
		var index = content[i].split(":")[0].trim();
		var subName = content[i].split(":")[1].trim();
		if (isNaN(index)) {
			error("Index '"+index+"' in subroutines field should be a number");
		}
		addSubroutine(subName, index);
	}
}
