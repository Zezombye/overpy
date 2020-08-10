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

function compile(content, language="en-US", _rootPath="") {
	
	if (DEBUG_MODE) {
		var t0 = performance.now();
	}

	resetGlobalVariables(language);
	rootPath = _rootPath;

	//Handle #!mainfile directive
	if (content.startsWith("#!mainFile ")) {
		var mainFilePath = getFilePath(content.substring("#!mainFile ".length, content.indexOf("\n")));
		rootPath = mainFilePath.substring(0, mainFilePath.lastIndexOf("/")+1);
		content = getFileContent(mainFilePath);
		if (DEBUG_MODE) {
			console.log("content = ");
			console.log(content);
		}
	} else {
		importedFiles.push(rootPath);
	}

	var lines = tokenize(content);

	if (obfuscationSettings.obfuscateConstants) {
		addVariable("__obfuscationConstants__", true, 127);
		//globalInitDirectives.push(obfuscationConstantsAst);
	}
	
	var astRules = parseLines(lines);
	astRules.unshift(...getInitDirectivesRules());
	
	if (DEBUG_MODE) {
		for (var elem of astRules) {
			console.log(astToString(elem));
		}
		console.log(astRules);
	}
    var parsedAstRules = parseAstRules(astRules);

	if (DEBUG_MODE) {
		/*for (var elem of parsedAstRules) {
			console.log(astToString(elem));
		}*/
		console.log(parsedAstRules);
	}

	var compiledRules = astRulesToWs(parsedAstRules);
	if (Object.keys(obfuscationSettings).some(x => obfuscationSettings[x])) {
		compiledRules = addObfuscationRules(compiledRules);
	} else {
		compiledRules = compiledRules.join("");
	}

	var result = compiledCustomGameSettings+generateVariablesField()+generateSubroutinesField()+compiledRules;
    
	if (DEBUG_MODE) {
		var t1 = performance.now();
		console.log("Compilation time: "+(t1-t0)+"ms");
	}
	return {
		result: result,
		macros: macros,
		globalVariables: globalVariables,
		playerVariables: playerVariables,
		subroutines: subroutines,
		encounteredWarnings: encounteredWarnings,
		enumMembers: enumMembers,
	};
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
		var varNames = [];
		var varList = varType === "global" ? globalVariables : playerVariables;
		var unassignedVariables = [];

		for (var variable of varList) {
			//check name
			if (!/[A-Za-z_]\w*/.test(variable.name)) {
				error("Unauthorized name for "+varType+" variable: '"+variable.name+"'");
			}
			//check duplication
			if (varNames.includes(variable.name)) {
				error("Duplicate declaration of "+varType+" variable '"+variable.name+"'");
			}
			
			if (outputVariables[variable.index] !== undefined) {
				error("Duplicate use of index "+variable.index+" for "+varType+" variables '"+variable.name+"' and '"+outputVariables[variable.index]+"'");
			}
			varNames.push(variable.name);
			if (variable.index === undefined || variable.index === null) {
				unassignedVariables.push(variable.name);
			} else {
				if (!isNumber(variable.index) || variable.index >= 128 || variable.index < 0) {
					error("Invalid index '"+variable.index+"' for "+varType+" variable '"+variable.name+"', must be from 0 to 127");
				}
				outputVariables[variable.index] = variable.name;
			}
		}

		//console.log(outputVariables);
		
		for (var variable of unassignedVariables) {
			var foundSpot = false;
			for (var i = 0; i < 128; i++) {
				if (outputVariables[i] === undefined) {
					foundSpot = true;
					outputVariables[i] = variable;
					break;
				}
			}
			if (!foundSpot) {
				error("More than 128 "+varType+" variables have been declared");
			}
		}
		//console.log(outputVariables);
		//console.log(obfuscatedVarNames);
		//console.log(obfuscatedVarNumbers);

		if (obfuscationSettings.obfuscateNames) {
			var obfuscatedVarNumbers = shuffleArray(Array(128).fill().map((e,i)=>i));
		}
		var varTypeResult = "";
		for (var i = 0; i < 128; i++) {
			if (obfuscationSettings.obfuscateNames) {
				varTypeResult += tabLevel(2)+obfuscatedVarNumbers[i]+": "+obfuscatedVarNames[i]+"\n"
			} else {
				if (outputVariables[i] !== undefined) {
					varTypeResult += tabLevel(2)+i+": "+outputVariables[i]+"\n";
				}
			}
		}
		if (varTypeResult !== "") {
			varTypeResult = tabLevel(1)+tows("__"+varType+"__", ruleKw)+":\n" + varTypeResult;
			result += varTypeResult;
		}
	}

	if (result) {
		result = tows("__variables__", ruleKw)+" {\n"+result+"}\n";
	}

	return result;
}


function generateSubroutinesField() {

	var result = "";

	var outputSubroutines = Array(128);
	var subNames = [];
	var unassignedSubroutines = [];

	for (var subroutine of subroutines) {
		//check name
		if (!/[A-Za-z_]\w*/.test(subroutine.name)) {
			error("Unauthorized name for subroutine: '"+subroutine.name+"'");
		}
		//check duplication
		if (subNames.includes(subroutine.name)) {
			error("Duplicate declaration of subroutine '"+subroutine.name+"'");
		}
		
		if (outputSubroutines[subroutine.index] !== undefined) {
			error("Duplicate use of index "+subroutine.index+" for subroutines '"+subroutine.name+"' and '"+outputSubroutines[subroutine.index]+"'");
		}
		subNames.push(subroutine.name);
		if (subroutine.index === undefined || subroutine.index === null) {
			unassignedSubroutines.push(subroutine.name);
		} else {
			if (isNaN(subroutine.index) || subroutine.index >= 128 || subroutine.index < 0) {
				error("Invalid index '"+subroutine.index+"' for subroutine '"+subroutine.name+"', must be from 0 to 127");
			}
			outputSubroutines[subroutine.index] = subroutine.name;
		}
	}

	for (var subroutine of unassignedSubroutines) {
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

	if (obfuscationSettings.obfuscateNames) {
		var obfuscatedVarNumbers = shuffleArray(Array(128).fill().map((e,i)=>i));
	}
	for (var i = 0; i < 128; i++) {
		if (obfuscationSettings.obfuscateNames) {
			result += tabLevel(1)+obfuscatedVarNumbers[i]+": "+obfuscatedVarNames[i]+"\n"
		} else {
			if (outputSubroutines[i] !== undefined) {
				result += tabLevel(1)+i+": "+outputSubroutines[i]+"\n";
			}
		}
	}

	if (result) {
		result = tows("__subroutines__", ruleKw)+" {\n" + result + "}\n";
	}
	
	return result;

}

function compileCustomGameSettings(customGameSettings) {

	if (typeof customGameSettings !== "object" || customGameSettings === null) {
		error("Expected an object for custom game settings");
	}
	var result = {};
	for (var key of Object.keys(customGameSettings)) {
		if (key === "main" || key === "lobby") {
			result[tows(key, customGameSettingsSchema)] = compileCustomGameSettingsDict(customGameSettings[key], customGameSettingsSchema[key].values);

		} else if (key === "gamemodes") {
			var wsGamemodes = tows("gamemodes", customGameSettingsSchema);
			result[wsGamemodes] = {};
			for (var gamemode of Object.keys(customGameSettings.gamemodes)) {
				var wsGamemode = tows(gamemode, customGameSettingsSchema.gamemodes.values);
				if ("enabled" in customGameSettings.gamemodes[gamemode] && customGameSettings.gamemodes[gamemode].enabled === false) {
					wsGamemode = tows("__disabled__", ruleKw)+" "+wsGamemode;
					delete customGameSettings.gamemodes[gamemode].enabled;
				}
				result[wsGamemodes][wsGamemode] = {};
				if ("enabledMaps" in customGameSettings.gamemodes[gamemode] || "disabledMaps" in customGameSettings.gamemodes[gamemode]) {
					if ("enabledMaps" in customGameSettings.gamemodes[gamemode] && "disabledMaps" in customGameSettings.gamemodes[gamemode]) {
						error("Cannot have both 'enabledMaps' and 'disabledMaps' in gamemode '"+gamemode+"'");
					}
					var mapsKey = "enabledMaps" in customGameSettings.gamemodes[gamemode] ? "enabledMaps" : "disabledMaps";
					var wsMapsKey = tows(mapsKey, customGameSettingsSchema.gamemodes.values[gamemode].values);
					result[wsGamemodes][wsGamemode][wsMapsKey] = [];
					for (var map of customGameSettings.gamemodes[gamemode][mapsKey]) {
						result[wsGamemodes][wsGamemode][wsMapsKey].push(tows(map, mapKw))
					}
					delete customGameSettings.gamemodes[gamemode][mapsKey];
				}

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
						error("Cannot have both 'enabledHeroes' and 'disabledHeroes' in team '"+team+"'");
					}
					var heroesKey = "enabledHeroes" in customGameSettings.heroes[team] ? "enabledHeroes" : "disabledHeroes";
					wsHeroesKey = tows(heroesKey, customGameSettingsSchema.heroes.values);
					for (var hero of customGameSettings.heroes[team][heroesKey]) {
						wsHeroesKeyObj.push(tows(hero, heroKw));
					}
					delete customGameSettings.heroes[team][heroesKey];
				}

				if ("general" in customGameSettings.heroes[team]) {
					Object.assign(result[wsHeroes][wsTeam], compileCustomGameSettingsDict(customGameSettings.heroes[team].general, customGameSettingsSchema.heroes.values.general));
					delete customGameSettings.heroes[team].general;
				}

				for (var hero of Object.keys(customGameSettings.heroes[team])) {
					var wsHero = tows(hero, heroKw);
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
				} else if (isNumber(customGameSettings.workshop[workshopSetting])) {
					result[wsWorkshop][workshopSetting] = customGameSettings.workshop[workshopSetting];
				} else {
					error("Invalid value '"+customGameSettings.workshop[workshopSetting]+"' for workshop setting '"+workshopSetting+"'");
				}
			}
		} else {
			error("Unknown key '"+key+"'");
		}
	}


	nbTabs = 0;
	function deserializeObject(obj) {
		var result = "\n"+tabLevel(nbTabs)+"{\n";
		nbTabs++;
		for (var key of Object.keys(obj)) {
			if (obj[key].constructor === Array) {
				result += tabLevel(nbTabs)+key+"\n"+tabLevel(nbTabs)+"{\n"+obj[key].map(x => tabLevel(nbTabs+1)+x+"\n").join("");
				result += tabLevel(nbTabs)+"}\n";
			} else if (typeof obj[key] === "object" && obj[key] !== null) {
				result += tabLevel(nbTabs)+key+deserializeObject(obj[key])+"\n";
			} else {
				result += tabLevel(nbTabs)+key+": "+obj[key]+"\n";
			}
		}
		nbTabs--;
		result += tabLevel(nbTabs)+"}";
		return result;
	}

	compiledCustomGameSettings = tows("__settings__", ruleKw) + deserializeObject(result)+"\n";


}


