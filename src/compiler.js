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

//OverPy Compiler (OverPy -> Workshop)


//console.log(compileTest);

//console.log(compile(compileTest));

function compile(content, language="en-US", _rootPath="") {
	
	if (typeof window !== "undefined") {
		var t0 = performance.now();
	}

	resetGlobalVariables(language);
	rootPath = _rootPath;

	//Handle #!mainfile directive
	if (content.startsWith("#!mainFile ")) {
		var mainFilePath = getFilePath(content.substring("#!mainFile ".length, content.indexOf("\n")));
		rootPath = mainFilePath.substring(0, mainFilePath.lastIndexOf("/")+1);
		content = getFileContent(mainFilePath);
		console.log("content = ");
		console.log(content);
	} else {
		importedFiles.push(rootPath);
	}

	var rules = tokenize(content);
	//console.log(rules);

	var result = "";
	var compiledRules = [];

	//First rule contains variable declarations.
	compileVarDeclarationRule(rules[0])

	for (var i = 1; i < rules.length; i++) {
		compiledRules.push(compileRule(rules[i]));
	}

	if (obfuscateRules || enableNoEdit) {
		compiledRules = addEmptyRules(compiledRules);
	} else {
		compiledRules = compiledRules.join("");
	}

	result = compiledCustomGameSettings+generateVariablesField()+generateSubroutinesField()+compiledRules;

	if (typeof window !== "undefined") {
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
	};
}

function generateVariablesField() {

	var result = tows("_variables", ruleKw)+" {\n";

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
				if (isNaN(variable.index) || variable.index >= 128 || variable.index < 0) {
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

		if (obfuscateRules) {
			var obfuscatedVarNumbers = shuffleArray(Array(128).fill().map((e,i)=>i));
		}
		var varTypeResult = "";
		for (var i = 0; i < 128; i++) {
			if (obfuscateRules) {
				varTypeResult += "\t\t"+obfuscatedVarNumbers[i]+": "+obfuscatedVarNames[i]+"\n"
			} else {
				if (outputVariables[i] !== undefined) {
					varTypeResult += "\t\t"+i+": "+outputVariables[i]+"\n";
				} else if (!disableUnusedVars) {
					varTypeResult += "\t\t"+i+": _unused_var_"+i+"\n";
				}
			}
		}
		if (varTypeResult !== "") {
			varTypeResult = "\t"+tows("_"+varType, ruleKw)+":\n" + varTypeResult;
			result += varTypeResult;
		}

	}

	result += "}\n";
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

	if (obfuscateRules) {
		var obfuscatedVarNumbers = shuffleArray(Array(128).fill().map((e,i)=>i));
	}
	for (var i = 0; i < 128; i++) {
		if (obfuscateRules) {
			result += "\t"+obfuscatedVarNumbers[i]+": "+obfuscatedVarNames[i]+"\n"
		} else {
			if (outputSubroutines[i] !== undefined) {
				result += "\t"+i+": "+outputSubroutines[i]+"\n";
			} else if (!disableUnusedVars) {
				result += "\t"+i+": _unused_sub_"+i+"\n";
			}
		}
	}

	if (result) {
		result = tows("_subroutines", ruleKw)+" {\n" + result + "}\n";
	}
	
	return result;

}

function compileVarDeclarationRule(rule) {
	
	for (var line of rule.lines) {
		if (line.tokens.length === 0) continue;
		fileStack = line.tokens[0].fileStack;

		if (line.tokens[0].text === "globalvar" || line.tokens[0].text === "playervar" || line.tokens[0].text === "subroutine") {
			if (line.tokens.length < 2 || line.tokens.length > 3) {
				error("Malformed "+line.tokens[0].text+" declaration");
			}
			var index = line.tokens.length > 2 ? line.tokens[2].text : null

			if (line.tokens[0].text === "globalvar") {
				addVariable(line.tokens[1].text, true, index);
			} else if (line.tokens[0].text === "playervar") {
				addVariable(line.tokens[1].text, false, index);
			} else {
				addSubroutine(line.tokens[1].text, index);
			}

		} else if (line.tokens[0].text === "settings") {
			var customGameSettings = eval("("+dispTokens(line.tokens.slice(1))+")");
			compileCustomGameSettings(customGameSettings);
		} else {
			error("Found code outside a rule: "+line.tokens[0]);
		}
	}
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
					wsGamemode = tows("_disabled", ruleKw)+" "+wsGamemode;
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
		} else {
			error("Unknown key '"+key+"'");
		}
	}


	nbTabs = 0;
	function deserializeObject(obj) {
		var result = " {\n";
		nbTabs++;
		for (var key of Object.keys(obj)) {
			if (obj[key].constructor === Array) {
				result += tabLevel(nbTabs)+key+" {\n"+obj[key].map(x => tabLevel(nbTabs+1)+x+"\n").join("");
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

	compiledCustomGameSettings = tows("_settings", ruleKw) + deserializeObject(result)+"\n";


}

function compileRule(rule) {
	
	fileStack = rule.fileStack;
	suppressedWarnings = [...globalSuppressedWarnings];
	var result = "";
	
	if (currentArrayElementNames.length !== 0) {
		error("Current array element names length isn't 0");
	}
	
	//The first line should always start with @Rule.
	if (rule.lines[0].tokens[0].text !== "@Rule") {
		error("Lexer broke (rule not starting with '@Rule'?)");
	} else if (rule.lines[0].tokens.length !== 2) {
		error("Malformed rule declaration (found "+rule.lines[0].tokens.length+") tokens");
	}
	
	result += tows("@Rule", ruleKw)+" (";
	if (obfuscateRules) {
		result += '""';
	} else {
		result += rule.lines[0].tokens[1].text;
	}
	result += ") {\n";
	result += tabLevel(1)+tows("@Event", ruleKw)+" {\n";
	
	var eventType = null;
	var eventTeam = null;
	var eventPlayer = null;
	var subroutineName = null;

	//Loop until we reach the actions; parse metadata
	var i = 1;
	for (; i < rule.lines.length; i++) {
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}
		fileStack = rule.lines[i].tokens[0].fileStack;

		if (rule.lines[i].tokens[0].text.startsWith("@")) {
			if (rule.lines[i].tokens[0].text === "@Event") {
				if (eventType) {
					error("Event type is defined twice;");
				}
				if (rule.lines.length === 2) {
					eventType = "global";
				} else {
					eventType = rule.lines[i].tokens[1].text;
				}
				
			} else if (rule.lines[i].tokens[0].text === "@Team") {
				if (rule.lines[i].tokens.length !== 2) {
					error("Expected one token after @Team")
				}
				if (eventTeam) {
					error("Event team is defined twice");
				}
				eventTeam = tows(rule.lines[i].tokens[1], eventTeamKw);
				
			} else if (rule.lines[i].tokens[0].text === "@Hero") {
				if (rule.lines[i].tokens.length !== 2) {
					error("Expected one token after @Hero")
				}
				if (eventPlayer) {
					error("Event player (@Hero/@Slot) is defined twice");
				}
				eventPlayer = tows(rule.lines[i].tokens[1].text.toLowerCase(), heroKw);
				
			} else if (rule.lines[i].tokens[0].text === "@Slot") {
				if (rule.lines[i].tokens.length !== 2) {
					error("Expected one token after @Slot")
				}
				if (eventPlayer) {
					error("Event player (@Hero/@Slot) is defined twice");
				}
				eventPlayer = tows(rule.lines[i].tokens[1].text, eventSlotKw);
				
			} else if (rule.lines[i].tokens[0].text === "@SuppressWarnings") {
				if (rule.lines[i].tokens.length === 1) {
					error("Expected at least one token after @SuppressWarnings")
				}
				for (var j = 1; j < rule.lines[i].tokens.length; j++) {
					suppressedWarnings.push(rule.lines[i].tokens[j].text);
				}
			} else if (rule.lines[i].tokens[0].text === "@Disabled") {
				result = tows("_disabled", ruleKw)+" "+result;
			} else {
				error("Unknown annotation '"+rule.lines[i].tokens[0].text+"'");
			}
		} else if (rule.lines[i].tokens[0].text === "def") {
			if (eventType) {
				error("Cannot declare an event type for a subroutine");
			}
			eventType = "_subroutine";
			
			if (rule.lines[i].tokens.length !== 5) {
				error("Malformed def statement, must be 'def func_name():'")
			}
			if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ":") {
				error("Def statement must end with ':'")
			}

			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel <= rule.lines[i].indentLevel) {
					error("Def statement must cover the whole rule");
				}
			}

			subroutineName = rule.lines[i].tokens[1].text;
		} else {
			break;
		}
	}
	
	if (!eventType) {
		error("An event must be specified");
	}
	result += tabLevel(2)+tows(eventType, eventKw)+";\n";
	
	//Add missing metadata
	if (eventType === "global" || eventType === "_subroutine") {
		if (eventTeam) {
			error("Cannot declare an event team for event type '"+eventType+"'");
		}
		if (eventPlayer) {
			error("Cannot declare an event player (@Hero/@Slot) for event type '"+eventType+"'");
		}
		if (eventType === "_subroutine") {
			result += tabLevel(2)+translateSubroutineToWs(subroutineName)+";\n";
		}
	} else {
		if (!eventTeam) {
			eventTeam = tows("all", eventTeamKw);
		}
		result += tabLevel(2)+eventTeam+";\n";
		if (!eventPlayer) {
			eventPlayer = tows("all", eventPlayerKw);
		}
		result += tabLevel(2)+eventPlayer+";\n";
	}

	currentRuleEvent = eventType;
	result += tabLevel(1)+"}\n\n";

	//Parse the eventual rule condition, as well as the "do:".
	//This loop breaks when it hits an actual action.

	var nbDo = 0;
	for (; i < rule.lines.length; i++) {
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}

		fileStack = rule.lines[i].tokens[0].fileStack;

		//Rule condition: 
		if (rule.lines[i].tokens[0].text === "if" && nbDo === 0 && rule.lines[i].indentLevel === 0) {

			//Check if there are instructions after the if; if not, return nothing as the rule is useless
			if (i+1 >= rule.lines.length) {
				return "";
			}

			//Check if the "if" is special
			if (rule.lines[i+1].tokens[0].text === "goto" || rule.lines[i+1].tokens[0].text === "continue" || rule.lines[i+1].tokens[0].text === "return" || rule.lines[i+1].tokens[0].text === "break") {
				break;
			}

			//Check if the "if" covers the whole rule
			var areAllLinesAfterCurrentLineIndented = true;
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel <= rule.lines[i].indentLevel) {
					areAllLinesAfterCurrentLineIndented = false;
					break;
				}
			}
			if (areAllLinesAfterCurrentLineIndented) {
				var compiledConditions = parseRuleCondition(rule.lines[i].tokens);
				if (compiledConditions === "__false__") {
					return ""; //rule will never execute, as one of the condition is false
				} else if (compiledConditions === "") {
					//do nothing
				} else {
					result += tabLevel(1)+tows("_conditions", ruleKw)+" {\n";
					result += compiledConditions;
					result += tabLevel(1)+"}\n\n";
				}
			} else {
				break;
			}
		} else if (rule.lines[i].tokens[0].text === "do") {
			if (rule.lines[i].tokens.length !== 2 || rule.lines[i].tokens[1].text !== ':') {
				error("Do instruction must be 'do:'");
			}
			nbDo++;

			//Check if the "do" eventually hits a "while"
			var foundWhile = false;
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel > rule.lines[i].indentLevel) {
					continue;
				} else if (rule.lines[j].indentLevel < rule.lines[i].indentLevel){
					error("Unexpected unindent in 'do' body");
				} else {
					if (rule.lines[j].tokens.length >= 1 && rule.lines[j].tokens[0].text === "while"  && rule.lines[j].tokens[rule.lines[j].tokens.length-1].text != ":") {
						foundWhile = true;
					}
				}
			}
			if (!foundWhile) {
				error("'do' instruction does not have a matched 'while'");
			}

		} else {
			break;
		}
	}

	result += tabLevel(1)+tows("_actions", ruleKw)+" {\n";

	var actions = parseInstructions(rule.lines.slice(i), nbDo);
	if (actions === "") {
		//No actions = useless rule.
		return "";
	} else {
		result += actions;
	}
	
	//End actions
	result += tabLevel(1)+"}\n";
	
	//End rules
	result += "}\n\n";
	
	return result;
}

//Parses a list of actions (not metadata, rule condition, or "do").
function parseInstructions(lines, nbDo) {

	//Note: a "fake" else is the else that is generated for an elif.
	//A "ghost" else is an else that does not generate a "skip" (if the previous 'if' didn't have its condition inverted).

	//Array of objects: {
	//	"type": "if"|"else"|"fakeelse"|"ghostelse"|"fakeghostelse"|"skip"|"skipif"|"label"|"other"|"forloop"|"optimized"|"switch"|"case"|"break"|"end"|"whileloop"|"continue"
	//	"condition": compiled content of the condition, if type not in ["label", "other"] or "skip" is not a skip if
	//	"content": compiled content of the instruction
	//	"label": if type == "skip", the label to search for, if type == "label", the name of the label
	//	"indentLevel": the indent level of the line
	//	"fileStack": the file stack of the first token of the line
	//}
	var resultLines = [];

	//Do a first pass to compile lines and to fill the resultLines array.
	for (var i = 0; i < lines.length; i++) {

		
		if (lines[i].tokens.length === 0) {
			continue;
		}

		var currentResultLineType = undefined;
		var currentResultLineContent = undefined;
		var currentResultLineCondition = undefined;
		var currentResultLineSwitch = undefined;
		var currentResultLineCase = undefined;
		var currentResultLineLabel = undefined;
		var skipNextLine = false;
		fileStack = lines[i].tokens[0].fileStack;

		//As we already handled all "do" actions before calling this function, encountering a "do" means it can't be at the beginning of the rule.
		if (lines[i].tokens[0].text === "do") {
			error("Do instructions must be at the beginning of the rule");
		}
		
		//Check for "if"
		if (lines[i].tokens[0].text === "if" || lines[i].tokens[0].text === "elif") {

			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("If/Elif statement must end with ':'");
			}

			var condition = lines[i].tokens.slice(1, lines[i].tokens.length-1);
			if (condition.length === 0) {
				error("If/Elif statement must have a condition");
			}

			if (i+1 >= lines.length) {
				error("If/Elif instruction must have at least one sub-instruction");
			}
 
			if (lines[i+1].tokens[0].text === "goto") {
				if (lines[i+1].tokens.length < 2) {
					error("Malformed goto");
				}
				

				//Check if the goto is of the form "goto loc+xxx"
				if (lines[i+1].tokens[1].text === "loc") {
					
					warn("w_dynamic_goto", "Dynamic gotos are unreliable as OverPy can optimize out some actions.")
					var skipIfOffset = parse(lines[i+1].tokens.slice(3))
					var compiledCondition = parse(condition);
					if (isWsFalse(compiledCondition) || isWs0(skipIfOffset)) {
						currentResultLineType = "optimized";
					} else if (isWsTrue(compiledCondition)) {
						currentResultLineType="other";
						currentResultLineContent = tows("_skip", actionKw)+"("+skipIfOffset+")";
					} else {
						currentResultLineType="other";
						currentResultLineContent = tows("_skipIf", actionKw)+"("+compiledCondition+", "+skipIfOffset+")";
					}
					
				} else {
					//Search for label
					var label = lines[i+1].tokens[1].text;
					currentResultLineType = "skipif";
					currentResultLineCondition = parse(condition);
					currentResultLineLabel = label;
				}
				skipNextLine = true;
				
			} else if (lines[i+1].tokens[0].text === "return" || lines[i+1].tokens[0].text === "continue") {
				var ifFunction = "";
				if (lines[i+1].tokens[0].text === "return") {
					ifFunction = "_abortIf";
				} else {
					ifFunction = "_loopIf";
				}

				if (condition[0].text === "RULE_CONDITION" && condition.length === 1) {
					
					currentResultLineType = "other";
					currentResultLineContent = tows(ifFunction+"ConditionIsTrue", actionKw);

				} else if (condition[0].text === "not" && condition[1].text === "RULE_CONDITION" && condition.length === 2) {
					
					currentResultLineType = "other";
					currentResultLineContent = tows(ifFunction+"ConditionIsFalse", actionKw);

				} else {
					var compiledCondition = parse(condition);
					if (isWsFalse(compiledCondition)) {
						currentResultLineType = "optimized";
					} else if (isWsTrue(compiledCondition)) {
						currentResultLineType = "other";
						if (ifFunction === "_abortIf") {
							currentResultLineContent = tows("return", actionKw);
						} else {
							currentResultLineContent = tows("_loop", actionKw);
						}
					} else {
						currentResultLineType = "other";
						currentResultLineContent = tows(ifFunction, actionKw)+"("+compiledCondition+")";
					}
				}
				skipNextLine = true;

				
			} else {
				currentResultLineType = "if";
				currentResultLineCondition = parse(condition, {invertCondition: true, isCondition: true});
			}

			if (lines[i].tokens[0].text === "elif") {
				if (resultLines[resultLines.length-1].indentLevel <= lines[i].indentLevel) {
					resultLines.push({
						type: "fakeghostelse",
						indentLevel: lines[i].indentLevel,
						fileStack: fileStack,
					})
				} else {
					resultLines.push({
						type: "fakeelse",
						indentLevel: lines[i].indentLevel,
						fileStack: fileStack,
					})
				}
			}

			

		//Check for "else"
		} else if (lines[i].tokens[0].text === "else") {
			
			if (lines[i].tokens.length !== 2 || lines[i].tokens[1].text !== ':') {
				error("Else instruction must be 'else:'");
			}

			if (i === 0) {
				error("Found 'else', but no 'if'");
			} else if (resultLines[resultLines.length-1].indentLevel <= lines[i].indentLevel) {
				//If this is the case, then there is no need to replace the else for a "skip" as the previous if wasn't inverted.
				currentResultLineType = "ghostelse";
			} else {
				currentResultLineType = "else";
			}

		//Check for "switch"
		} else if (lines[i].tokens[0].text === "switch") {

			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("Switch instruction must end with ':'");
			} else if (lines[i].tokens.length <= 2) {
				error("Malformed switch");
			}

			currentResultLineType = "switch";
			currentResultLineSwitch = parse(lines[i].tokens.slice(1, lines[i].tokens.length-1));

		} else if (lines[i].tokens[0].text === "case") {
			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("Case instruction must end with ':'");
			} else if (lines[i].tokens.length <= 2) {
				error("Malformed case");
			}

			currentResultLineType = "case";
			currentResultLineCase = parse(lines[i].tokens.slice(1, lines[i].tokens.length-1));
		} else if (lines[i].tokens[0].text === "default") {
			
			if (lines[i].tokens.length !== 2 || lines[i].tokens[1].text !== ':') {
				error("Default instruction must be 'default:'");
			}
			currentResultLineType = "case";
			currentResultLineCase = "__default__";


		} else if (lines[i].tokens[0].text === "break") {
			if (lines[i].tokens.length !== 1) {
				error("Malformed break statement");
			}
			currentResultLineType = "break";

		//Check for "for"
		} else if (lines[i].tokens[0].text === "for") {
			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("For instruction must end with ':'");
			}
			
			var inOperands = splitTokens(lines[i].tokens.slice(1, lines[i].tokens.length-1), "in", false);
			if (inOperands.length !== 2) {
				error("For instruction must contain 'in'");
			}

			var funcName = "_for";
			currentResultLineContent = "";
			

			if (inOperands[1].length <= 3 || inOperands[1][0].text != "range" || inOperands[1][1].text != "(" || inOperands[1][inOperands[1].length-1].text != ")") {
				error("For loop must be 'for var in range(start, stop, step)'");
			}

			
			//Check for dot; if it is present, it can only be a player variable
			var varOperands = splitTokens(inOperands[0], ".", false, true);
			if (varOperands.length === 2) {
				funcName += "PlayerVar";
				currentResultLineContent += parse(varOperands[0])+", ";
				currentResultLineContent += translateVarToWs(varOperands[1][0].text, false);
			} else {
				funcName += "GlobalVar";
				currentResultLineContent += translateVarToWs(varOperands[0][0].text, true);
			}

			var rangeArgs = splitTokens(inOperands[1].slice(2, inOperands[1].length-1), ",");
			var rangeStart, rangeEnd, rangeStep;
			if (rangeArgs.length > 3) {
				error("range() function takes a maximum of 3 arguments");
			}
			if (rangeArgs.length >= 3) {
				rangeStep = parse(rangeArgs[2]);
			} else {
				rangeStep = 1;
			}
			if (rangeArgs.length >= 2) {
				rangeEnd = parse(rangeArgs[1]);
				rangeStart = parse(rangeArgs[0]);
			} else {
				rangeEnd = parse(rangeArgs[0]);
				rangeStart = 0;
			}

			currentResultLineContent += ", "+rangeStart+", "+rangeEnd+", "+rangeStep;
			currentResultLineContent = tows(funcName, actionKw)+"("+currentResultLineContent+")";

			currentResultLineType = "forloop";
			
		//Check for "while"
		} else if (lines[i].tokens[0].text === "while") {

			if (lines[i].tokens.length === 1) {
				error("Expected code after 'while'");
			}

			if (lines[i].tokens[lines[i].tokens.length-1].text === ":") {
				currentResultLineType = "whileloop";
				currentResultLineContent = tows("__while__", actionKw)+"("+parse(lines[i].tokens.slice(1, lines[i].tokens.length-1))+")";

			} else {
				//it is a while from do/while				
				if (nbDo === 0) {
					error("Found 'while' without matching 'do'");
				}
				nbDo--;

				if (lines[i].tokens[1].text === "true" && lines[i].tokens.length === 2) {
					currentResultLineType = "other";
					currentResultLineContent = tows("_loop", actionKw);
	
				} else {
					if (lines[i].tokens[1].text === "RULE_CONDITION") {
						currentResultLineType = "other";
						currentResultLineContent = tows("_loopIfConditionIsTrue", actionKw);
	
					} else if (lines[i].tokens[1].text === "not" && lines[i].tokens[2].text === "RULE_CONDITION") {
						currentResultLineType = "other";
						currentResultLineContent = tows("_loopIfConditionIsFalse", actionKw);
	
					} else {
						var compiledCondition = parse(lines[i].tokens.slice(1));
						if (isWsFalse(compiledCondition)) {
							currentResultLineType = "optimized";
						} else if (isWsTrue(compiledCondition)) {
							currentResultLineType = "other";
							currentResultLineContent = tows("_loop", actionKw);
						} else {
							currentResultLineType = "other";
							currentResultLineContent = tows("_loopIf", actionKw)+"("+compiledCondition+")";
						}
					}
				}
			}
	
		//Check goto
		} else if (lines[i].tokens[0].text === 'goto') {
			if (lines[i].tokens.length < 2) {
				error("Malformed goto");
			}
			//Check if the goto is of the form "goto loc+xxx"
			if (lines[i].tokens[1].text === "loc") {
				warn("w_dynamic_goto", "Dynamic gotos are unreliable as OverPy can optimize out some actions.")

				var skipOffset = parse(lines[i].tokens.slice(3));

				currentResultLineType="other";
				currentResultLineContent = tows("_skip", actionKw)+"("+skipOffset+")";

			} else {
				var label = lines[i].tokens[1].text;
				currentResultLineType = "skip";
				currentResultLineLabel = label;
			}

		//Check for del
		} else if (lines[i].tokens[0].text === 'del') {
						
			if (lines[i].tokens[lines[i].tokens.length-1].text !== ']') {
				error("Del keyword must be followed by an array membership");
			}
			
			var bracketPos = getTokenBracketPos(lines[i].tokens);
			
			var variable = lines[i].tokens.slice(1, bracketPos[bracketPos.length-2])
			var member = lines[i].tokens.slice(bracketPos[bracketPos.length-2]+1, lines[i].tokens.length-1)
			
			debug("Parsing del keyword with var = '"+dispTokens(variable)+"' and member = '"+dispTokens(member)+"'");
			
			currentResultLineType = "other";
			currentResultLineContent = parseAssignment(variable, member, true, "_removeFromArrayByIndex");
			
		//Check for label
		} else if (lines[i].tokens[lines[i].tokens.length-1].text === ':') {
			if (lines[i].tokens.length !== 2) {
				error("Incorrectly formatted label");
			}
			var label = lines[i].tokens[0].text;
			currentResultLineType = "label";
			currentResultLineLabel = label;

		//Check for pass
		} else if (lines[i].tokens[0].text === "pass") {
			if (lines[i].tokens.length !== 1) {
				error("Unexpected token after 'pass'");
			}
			currentResultLineType = "optimized";

		//Any other instruction
		} else {
			currentResultLineContent = parse(lines[i].tokens, {"isWholeInstruction":true});
			if (currentResultLineContent.length > 0) {
				currentResultLineType = "other";
			} else {
				currentResultLineType = "optimized";
			}
		}

		resultLines.push({
			type: currentResultLineType,
			condition: currentResultLineCondition,
			switch: currentResultLineSwitch,
			case: currentResultLineCase,
			content: currentResultLineContent,
			label: currentResultLineLabel,
			indentLevel: lines[i].indentLevel,
			fileStack: lines[i].tokens[0].fileStack,
		});

		if (currentResultLineType === "switch") {
			//add an useless instruction cause no skip(0)
			resultLines.push({
				type: "other",
				content: tows("_disabled", ruleKw)+" "+tows("return", actionKw),
				indentLevel: lines[i].indentLevel+4,
				fileStack: lines[i].tokens[0].fileStack,
			});
		}

		if (skipNextLine) {
			i++;
		}
	}

	lines = undefined;
	var result = "";

	function getNbLinesForType(type) {
		if (["label", "ghostelse", "fakeghostelse", "optimized", "case"].includes(type)) {
			return 0;
		} else {
			return 1;
		}
	}

	//Do a pass to add the "end"s when necessary
	for (var i = 0; i < resultLines.length; i++) {
		
		fileStack = resultLines[i].fileStack;

		if (resultLines[i].type === "forloop" || resultLines[i].type === "whileloop") {

			//Get the first non-indented line
			var j = i+1;
			for (; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++);

			if (j === i+1) {
				error("Expected an indented block");
			}
			resultLines.splice(j, 0, ({
				"type": "end",
				"indentLevel": resultLines[i].indentLevel,
				"fileStack": resultLines[i].fileStack,
			}))
		}
	}

	//Then, do a second pass to handle the "if"s.
	//Go in reverse, to be able to optimize away "skip 0" and still calculate the correct length.
	for (var i = resultLines.length-1; i >= 0; i--) {

		fileStack = resultLines[i].fileStack;

		if (resultLines[i].type === "other" || resultLines[i].type === "forloop" || resultLines[i].type === "whileloop") {
			result = tabLevel(2)+resultLines[i].content+";\n"+result;

			if (i > 0 && (resultLines[i-1].type === "other" || resultLines[i-1].type === "skip" || resultLines[i-1].type === "label")) {
				if (resultLines[i].indentLevel > resultLines[i-1].indentLevel) {
					error("Unexpected indent or unreachable code");
				}
			}

		} else if (["label", "ghostelse", "fakeghostelse", "optimized", "case"].includes(resultLines[i].type)) {
			//do nothing

		} else if (resultLines[i].type === "if") {
			
			var gotoOffset = 0;
			var j = i+1;

			//Get number of indented lines within the if
			for (; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++) {
				gotoOffset += getNbLinesForType(resultLines[j].type);
			}

			if (j < resultLines.length && (resultLines[j].type === "else" || resultLines[j].type === "fakeelse")) {
				gotoOffset++;
			}

			var compiledCondition = resultLines[i].condition;

			if (isWsFalse(compiledCondition) || gotoOffset === 0) {
				//Optimize away
				resultLines[i].type = "optimized";
			} else if (isWsTrue(compiledCondition)) {
				result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;
			} else {
				result = tabLevel(2)+tows("_skipIf", actionKw)+"("+resultLines[i].condition+", "+gotoOffset+");\n"+result;
			}

		} else if (resultLines[i].type === "skip" || resultLines[i].type === "skipif") {
			
			var gotoOffset = 0;
			var foundLabel = false;
			
			for (var j = i+1; j < resultLines.length; j++) {
				gotoOffset += getNbLinesForType(resultLines[j].type);
				if (resultLines[j].type === "label" && resultLines[j].label === resultLines[i].label) {
					foundLabel = true;
					break;
				}
			}

			if (!foundLabel) {
				error("Could not find label "+label);
			}

			var compiledCondition = resultLines[i].type === "skipif" ? resultLines[i].condition : wsTrue;

			if (isWsFalse(compiledCondition) || gotoOffset === 0) {
				//Optimize away
				resultLines[i].type = "optimized";
			} else if (isWsTrue(compiledCondition)) {
				result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;
			} else {
				result = tabLevel(2)+tows("_skipIf", actionKw)+"("+resultLines[i].condition+", "+gotoOffset+");\n"+result;
			}

		} else if (resultLines[i].type === "else") {
			
			//Get number of indented lines within the else
			var gotoOffset = 0;
			for (var j = i+1; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++) {
				gotoOffset += getNbLinesForType(resultLines[j].type);
			}

			if (gotoOffset === 0) {
				error("Else instruction must have at least one sub-instruction");
			}

			result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;


		} else if (resultLines[i].type === "fakeelse") {
			
			var gotoOffset = 0;

			//If the line following the "fake else" is "other" then it's a special elif.
			if (resultLines[i+1].type === "other") {
				gotoOffset++;
			}

			//Go to the end of the elif/else chain.
			//Stop when encountering a line which type is not "else", or preceded by a "fakeelse", that is not on a greater indentation level than the current line.
			for (var j = i+1+gotoOffset; j < resultLines.length; j++) {
				console.log(resultLines[j]);
				if (resultLines[j].indentLevel <= resultLines[i].indentLevel 
						&& resultLines[j-1].type !== "fakeelse" 
						&& resultLines[j-1].type !== "fakeghostelse" 
						&& resultLines[j].type !== "else" 
						&& resultLines[j].type !== "fakeelse" 
						&& resultLines[j].type !== "ghostelse"
						&& resultLines[j].type !== "fakeghostelse") {
					break;
				}
				gotoOffset += getNbLinesForType(resultLines[j].type);
			}

			if (gotoOffset === 0) {
				error("Parser broke (offset for fake else is 0)");
			}
			result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;
			
		} else if (resultLines[i].type === "switch") {
			var caseOffsets = [];
			var caseValues = [];
			var currentCaseOffset = 0;
			var wasDefaultEncountered = false;

			if (i === resultLines.length-2 || resultLines[i+2].type !== "case") {
				error("A switch must be followed by a 'case' or 'default' instruction");
			}

			for (var j = i+1; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++) {
				if (resultLines[j].type === "case") {
					if (resultLines[j].case === "__default__") {
						if (wasDefaultEncountered) {
							error("The 'default' case was already declared in the switch");
						} else {
							wasDefaultEncountered = true;
						}
						caseOffsets.unshift(currentCaseOffset);

					} else {
						if (caseValues.includes(resultLines[j].case)) {
							error("This case is already declared in the switch");
						}
						caseOffsets.push(currentCaseOffset);
						caseValues.push(resultLines[j].case);

					}

				} else {
					currentCaseOffset += getNbLinesForType(resultLines[j].type);
				}
			}

			if (caseValues.length === 0) {
				error("Switch does not contain cases");
			}
			if (!wasDefaultEncountered) {
				caseOffsets.unshift(currentCaseOffset);
			}

			//[caseOffsets][[caseValues].index(switchValue)+1]
			var switchResult = tows("_valueInArray", valueFuncKw)+"(";
			var caseOffsetsResult = tows("_emptyArray", valueFuncKw);
			var appendFunc = tows("_appendToArray", valueFuncKw);
			for (var caseOffset of caseOffsets) {
				caseOffsetsResult = appendFunc+"("+caseOffsetsResult+", "+caseOffset+")";
			}
			switchResult += caseOffsetsResult+", "+tows("_add", valueFuncKw)+"(1, "+tows("_indexOfArrayValue", valueFuncKw)+"(";
			var caseValuesResult = tows("_emptyArray", valueFuncKw);
			for (var caseValue of caseValues) {
				caseValuesResult = appendFunc+"("+caseValuesResult+", "+caseValue+")";
			}
			switchResult += caseValuesResult + ", "+resultLines[i].switch+")))";

			result = tabLevel(2)+tows("_skip", actionKw)+"("+switchResult+");\n"+result;

		} else if (resultLines[i].type === "break") {
			var breakOutOfSwitch = false;
			var switchIndentLevel = 0;
			var breakOffset = 0;

			//If the indentation level is 0, it cannot be within a switch.
			if (resultLines[i].indentLevel === 0) {
				breakOutOfSwitch = false;

			} else {
				//Go up until we encounter a switch statement
				for (var j = i-1; j >= 0; j--) {
					if (resultLines[j].type === "switch") {
						breakOutOfSwitch = true;
						switchIndentLevel = resultLines[j].indentLevel;
						break;
					}
				}
			}

			if (breakOutOfSwitch) {
				console.log("finding end of switch, indent level = "+switchIndentLevel);
				//Go down until we find the end of the switch
				for (var j = i+1; j < resultLines.length && resultLines[j].indentLevel > switchIndentLevel; j++) {
					breakOffset += getNbLinesForType(resultLines[j].type);
				}

			} else {
				//Go down until we find a "while"
				var loopWs = tows("_loop", actionKw);
				var loopIfWs = tows("_loopIf", actionKw);
				var foundWhile = false;
				for (var j = i+1; j < resultLines.length; j++) {
					breakOffset += getNbLinesForType(resultLines[j].type);
					if (resultLines[j].type === "other" && (resultLines[j].content.startsWith(loopWs) || resultLines[j].content.startsWith(loopIfWs))) {
						foundWhile = true;
						break;
					}
				}
				if (!foundWhile) {
					error("Found 'break', but no switch or loop to break out of");
				}

			}

			if (breakOffset === 0) {
				resultLines[i].type = "optimized";
			} else {
				result = tabLevel(2)+tows("_skip", actionKw)+"("+breakOffset+");\n"+result;
			}

		} else if (resultLines[i].type === "end") {
			result = tabLevel(2)+tows("__end__", actionKw)+";\n"+result;
		} else {
			error("Unhandled rule line type "+resultLines[i].type);
		}
	}
	
	return result;
}

/*
The main parse function.

parseArgs options:

- "invertCondition": true/false
- "raycastType": "getHitPosition"|"getNormal"|"getPlayerHit"|"hasLoS"
- "isWholeInstruction": true/false
- "isLocalizedString": true/false
- "formatArgs": token array
*/
function parse(content, parseArgs={}) {
	
	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty (missing operand or argument?)");
	}
	
	fileStack = content[0].fileStack;
	if (parseArgs.invertCondition === true) {
		//add "not(...)"
		content.unshift({text: "(",});
		content.unshift({text: "not"});
		content.push({text: ")"});
	}
	
	debug("Parsing '"+dispTokens(content)+"'");
	
	//Parse operators
	for (var i = 0; i < pyOperators.length; i++) {
		
		if (pyOperators[i] === "not" || pyOperators[i] === "if") {
			var operands = splitTokens(content, pyOperators[i], false, false);
		} else {
			var operands = splitTokens(content, pyOperators[i], false, true);
		}
		if (operands.length === 2) {
			
			//The operator is present; parse it
			if (pyOperators[i] === "=") {
				return parseAssignment(operands[0], operands[1], false);
			} else if (pyOperators[i] === "if") {
				
				var trueExpr = parse(operands[0]);
				var elseOperands = splitTokens(operands[1], "else", false, false);
				if (elseOperands.length !== 2) {
					error("Found 'if', but no 'else'");
				}
				var falseExpr = parse(elseOperands[1]);
				var condition = parse(elseOperands[0]);

				//A if true else B -> A
				if (isWsTrue(condition)) {
					return trueExpr;
				}
				//A if false else B -> B
				if (isWsFalse(condition)) {
					return falseExpr;
				}
				//A if condition else A -> A
				if (trueExpr === falseExpr && !containsRandom(trueExpr)) {
					return trueExpr;
				}
				//A if condition else B -> [B,A][1*not condition]
				return tows("_valueInArray", valueFuncKw)+"("+tows("_appendToArray", valueFuncKw)+"("+tows("_appendToArray", valueFuncKw)+"("+tows("_emptyArray", valueFuncKw)+", "+trueExpr+"), "+falseExpr+"), "+tows("_multiply", valueFuncKw)+"(1, "+tows("_not", valueFuncKw)+"("+condition+")))";

			} else if (pyOperators[i] === "or") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//A or false = false or A = A
				if (isWsFalse(op1)) {
					return op2;
				}
				if (isWsFalse(op2)) {
					return op1;
				}
				//A or true = true or A = true
				if (isWsTrue(op1)) {
					return op1;
				}
				if (isWs1(op2)) {
					return wsTrue;
				}
				//A or A = A
				if (op1 === op2 && !containsRandom(op1)) {
					return op1;
				}
				//A or not A = not A or A = true
				if ((op1 === wsNot+"("+op2+")" || wsNot+"("+op1+")" === op2) && !containsRandom(op1)) {
					return wsTrue;
				}

				return tows("_or", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "and") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//A and true = true and A = A
				if (isWsTrue(op1)) {
					return op2;
				}
				//Here, we do not use isWsTrue but isWs1 (strictly true) because "A and 3" returns 3 if A is true.
				if (isWs1(op2)) {
					return op1;
				}
				//A and false = false and A = false
				if (isWsFalse(op1) || isWsFalse(op2)) {
					return wsFalse;
				}
				//A and A = A
				if (op1 === op2 && !containsRandom(op1)) {
					return op1;
				}
				//A and not A = not A and A = true
				if ((op1 === wsNot+"("+op2+")" || wsNot+"("+op1+")" === op2) && !containsRandom(op1)) {
					return wsFalse;
				}
				return tows("_and", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "not") {

				var op1 = parse(operands[1]);

				//not true = false
				if (isWsTrue(op1)) {
					return wsFalse;
				}
				//not false = true
				if (isWsFalse(op1)) {
					return wsTrue;
				}
				//not not A = A
				if (op1.startsWith(wsNot+"(")) {
					return op1.substring((wsNot+"(").length, op1.length-1);
				}
				return tows("_not", valueFuncKw)+"("+op1+")";

			} else if (pyOperators[i] === "in") {
				return tows("_arrayContains", valueFuncKw)+"("+parse(operands[1])+", "+parse(operands[0])+")";
			} else if (pyOperators[i] === "==" || pyOperators[i] === '!=' || pyOperators[i] === '<=' || pyOperators[i] === '>=' || pyOperators[i] === '<' || pyOperators[i] === '>' ) {
				var pyOperator = pyOperators[i];
				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				if (pyOperator === "==") {
					//A == A = true
					if (op1 === op2 && !containsRandom(op1)) {
						return wsTrue;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) == parseFloat(op2));
					}
				} else if (pyOperator === "!=") {
					//A != A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsFalse;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) != parseFloat(op2));
					}
				} else if (pyOperator === ">") {
					//A > A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsFalse;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) > parseFloat(op2));
					}
				} else if (pyOperator === "<") {
					//A < A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsFalse;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) < parseFloat(op2));
					}
				} else if (pyOperator === ">=") {
					//A >= A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsTrue;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) >= parseFloat(op2));
					}
				} else if (pyOperator === "<=") {
					//A <= A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsTrue;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) <= parseFloat(op2));
					}
				}

				return tows("_compare", valueFuncKw)+"("+op1+", "+pyOperator+", "+op2+")";
			} else if (pyOperators[i] === "+=") {
				//A += 0 -> nothing
				if (isWs0(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_add");
			} else if (pyOperators[i] === "-=") {
				//A -= 0 -> nothing
				if (isWs0(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_subtract");
			} else if (pyOperators[i] === "*=") {
				//A *= 1 -> nothing
				if (isWs1(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_multiply");
			} else if (pyOperators[i] === "/=") {
				//A /= 1 -> nothing
				if (isWs1(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_divide");
			} else if (pyOperators[i] === "%=") {
				return parseAssignment(operands[0], operands[1], true, "_modulo");
			} else if (pyOperators[i] === "**=") {
				return parseAssignment(operands[0], operands[1], true, "_raiseToPower");
			} else if (pyOperators[i] === "min=") {
				return parseAssignment(operands[0], operands[1], true, "_min");
			} else if (pyOperators[i] === "max=") {
				return parseAssignment(operands[0], operands[1], true, "_max");
			} else if (pyOperators[i] === "++") {
				return parseAssignment(operands[0], [{"text":"1"}], true, "_add");
			} else if (pyOperators[i] === "--") {
				return parseAssignment(operands[0], [{"text":"1"}], true, "_subtract");
			} else if (pyOperators[i] === "/") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb/nb
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)/parseFloat(op2));
				}
				//A/0 = 0/A = 0
				if (isWs0(op1) || isWs0(op2)) {
					return "0";
				}
				//A/1 = A
				if (isWs1(op2)) {
					return op1;
				}
				
				return tows("_divide", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "*") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb*nb
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)*parseFloat(op2));
				}
				//A*0 = 0*A = 0
				if (isWs0(op1) || isWs0(op2)) {
					return "0";
				}
				//A*1 = 1*A = A
				if (isWs1(op1)) {
					return op2;
				}
				if (isWs1(op2)) {
					return op1;
				}
				//A*A = A**2
				//Do not do this because of the weird behavior with negative numbers to power.
				//Eg (-1)*(-1) = 1 but (-1)**2 = 0.
				/*if (op1 === op2 && !containsRandom(op1)) {
					return tows("_raiseToPower", valueFuncKw)+"(2, "+op1+")";
				}*/
				
				return tows("_multiply", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "%") {
				return tows("_modulo", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "**") {
				return tows("_raiseToPower", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "-") {
				
				//Handle things like "3*-5" by checking if the 1st operand ends by another operator
				if (operands[0].length > 0 && ["*", "/", "%"].includes(operands[0][operands[0].length-1].text)) {
					continue;
				}

				//A - -B -> A+B
				if (operands[0].length > 0 && operands[0][operands[0].length-1].text === "-") {
					return parse(operands[0].slice(0, operands[0].length-1).concat([{"text":"+"}]).concat(operands[1]));
				}

				var op1 = operands[0].length === 0 ? "0" : parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb-nb
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)-parseFloat(op2));
				}
				//A-0 = A
				if (isWs0(op2)) {
					return op1;
				}
				//A-A = 0
				if (op1 === op2 && !containsRandom(op1)) {
					return "0";
				}

				return tows("_subtract", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "+") {

				var op1 = operands[0].length === 0 ? "0" : parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb+nb
				 
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)+parseFloat(op2));
				}
				//A+0 = 0+A = A
				if (isWs0(op1)) {
					return op2;
				}
				if (isWs0(op2)) {
					return op1;
				}
				//A+A = 2*A
				if (op1 === op2 && !containsRandom(op1)) {
					return tows("_multiply", valueFuncKw)+"(2, "+op1+")";
				}

				return tows("_add", valueFuncKw)+"("+op1+", "+op2+")";

			} else {
				error("Unhandled operator "+pyOperators[i]);
			}
			
			break;
			
		}
	}
	
	
	//Check for literal number
	var nbTest = dispTokens(content).replace(/ /g, "")
	if (!isNaN(nbTest)) {
		return trimNb(nbTest);
	}
		
	//Parse array
	if (content[content.length-1].text === ']') {
		var bracketPos = getTokenBracketPos(content);
		
		if (bracketPos.length === 2 && bracketPos[0] === 0) {
			
			return parseLiteralArray(content);
		} else {
			return parseArrayMembership(content.slice(0, bracketPos[bracketPos.length-2]), content.slice(bracketPos[bracketPos.length-2]+1, content.length-1));
		}
	}

	//Dictionaries aren't allowed without array indexes
	if (content[0].text === "{") {
		error("Cannot use a dictionary without accessing it");
	}
	
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[0], operands[1], parseArgs);
	}
	
	//Check for parentheses
	if (content[0].text === '(') {
		return parse(content.slice(1, content.length-1));
	}

	//Check for strings
	if (content[content.length-1].text.startsWith('"') || content[content.length-1].text.startsWith("'")) {
		var stringModifiers = {};
		var string = "";
		for (var i = content.length-1; i >= 0; i--) {
			if (content[i].text.startsWith('"') || content[i].text.startsWith("'")) {
				string = content[i].text.substring(1, content[i].text.length-1)+string;

			} else {
				if (i === 0) {
					//string modifier?
					if (content[0].text === "l") {
						stringModifiers.localizedString = true;
					} else if (content[0].text === "b") {
						stringModifiers.bigLetters = true;
					} else if (content[0].text === "w") {
						stringModifiers.fullWidth = true;
					} else {
						error("Invalid string modifier '"+content[0].text+"', valid ones are 'l' (localized), 'b' (big letters) and 'w' (fullwidth)");
					}
				} else {
					error("Syntax error: expected string or string modifier");
				}
			}
		}

		if (stringModifiers.localizedString === true) {
			return parseLocalizedString(tokenizeLocalizedString(string), parseArgs.formatArgs);
		} else {
			return parseString(string, parseArgs.formatArgs, stringModifiers);
		}
	}

	
	//Parse args and name of function.
	var name = content[0].text;
	var args = null;
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else if (content[1].text === '[') {
			return parseArrayMembership(content);
		} else {
			error("Syntax error: expected '(' or '[' after '"+name+"'");
		}
	}

	if (args === null) {

		//Check for "continue"
		if (name === "continue") {
			return tows("_loop", actionKw);
		}

		//Check for current array element variable name
		if (currentArrayElementNames.indexOf(name) >= 0) {
			return tows("_currentArrayElement", valueFuncKw);
		}

		//Check if it is legal to use the event variables.
		if (name === "eventPlayer") {
			if (!(["eachPlayer", "playerJoined", "playerLeft", "playerEarnedElimination", "playerDealtDamage", "playerTookDamage", "playerDealtFinalBlow", "playerDied", "playerDealtHealing", "playerReceivedHealing", "_subroutine"].includes(currentRuleEvent))) {
				error("Cannot use 'eventPlayer' with event type '"+currentRuleEvent+"'");

			} else if (!(["eachPlayer", "playerJoined", "playerLeft", "_subroutine"].includes(currentRuleEvent))) {
				warn("w_unsuitable_event", "Use of 'eventPlayer' with event type '"+currentRuleEvent+"' is ambiguous. Use 'attacker' or 'victim' instead.")
			}

		} else if ((name === "attacker" || name === "victim" || name === "eventDamage" || name === "eventWasCriticalHit") && !(["playerEarnedElimination", "playerDealtDamage", "playerTookDamage", "playerDealtFinalBlow", "playerDied", "_subroutine"].includes(currentRuleEvent))) {
			error("Cannot use '"+name+"' with event type '"+currentRuleEvent+"'");

		} else if ((name === "healer" || name === "healee" || name === "eventHealing" || name === "eventWasHealthPack") && !(["playerDealtHealing", "playerReceivedHealing", "_subroutine"].includes(currentRuleEvent))) {
			error("Cannot use '"+name+"' with event type '"+currentRuleEvent+"'");

		}

		try {
			return tows(name, funcKw);
		} catch (e) {
			//No translation found? Must be a global variable.
			//encounteredGlobalVars.add(name);
			return tows("_globalVar", valueFuncKw)+"("+translateVarToWs(name, true)+")";
		}
	}

	
	var str = "args: "
	for (var i = 0; i < args.length; i++) {
		str += "'"+dispTokens(args[i])+"'";
		if (i < args.length-1) {
			str += ", ";
		}
	}
	debug(str);
	
	
	//Special functions
	
	if (name === "all" || name === "any") {
		var result = tows("_"+name, valueFuncKw)+"(";
		
		if (args[0][0].text !== "[" || args[0][args[0].length-1].text !== "]") {
			error(name+" function must have [x == y for x in z] as argument (no literal array found)")
		}
		
		var forArgs = splitTokens(args[0].slice(1, args[0].length-1), "for");
		if (forArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'for' found)")
		}
		
		var inArgs = splitTokens(forArgs[1], "in", false);
		if (inArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'in' found)")
		}
		result += parse(inArgs[1]) + ", ";
		currentArrayElementNames.push(inArgs[0][0].text);
		result += parse(forArgs[0])
		currentArrayElementNames.pop();
		result += ")";
		return result;
	}

	if (name === "async") {
		if (args.length != 2) {
			error("Function async takes 2 arguments, received "+args.length);
		}
		//Check if first arg is indeed a subroutine
		if (args[0].length !== 3 || args[0][1].text !== "(" || args[0][2].text !== ")") {
			error("Expected subroutine call as first argument");
		}
		console.log(args);
		return tows("_startRule", actionKw)+"("+translateSubroutineToWs(args[0][0].text)+", "+parse(args[1])+")";
	}
	
	if (name === "ceil") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundUp", constantValues["_Rounding"])+")";
	}
	
	if (name === "chase") {
		
		var funcName = "_chase";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[0])+", ";
			//encounteredPlayerVars.add(operands[1][0].text);
			result += translateVarToWs(operands[1][0].text, false);
		} else {
			funcName += "GlobalVariable";
			//encounteredGlobalVars.add(args[0][0].text);
			result += translateVarToWs(args[0][0].text, true);
		}
		
		if (args.length !== 4) {
			error("Chase function must have 4 arguments");
		} else if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
			error("3rd argument of chase must be 'rate = xxxx' or 'duration = xxxx'");
		}
		
		if (args[2][0].text === "rate") {
			funcName += "AtRate";
		} else {
			funcName += "OverTime";
		}
		
		return tows(funcName, actionKw)+"("+result+", "+parse(args[1])+", "+parse(args[2].slice(2))+", "+parse(args[3])+")";
	}

	if (name === "debug") {
		//probably the longest line of code in all this codebase
		return tows("_hudText", actionKw)+"("+tows("getPlayers", valueFuncKw)+"("+tows("ALL", constantValues["Team"])+"), "+parse(args[0])+", "+tows("null", valueFuncKw)+", "+tows("null", valueFuncKw)+", "+tows("LEFT", constantValues["HudPosition"])+", 0, "+tows("ORANGE", constantValues["Color"])+", "+tows("WHITE", constantValues["Color"])+", "+tows("WHITE", constantValues["Color"])+", "+tows("VISIBILITY_AND_STRING", constantValues["Color"])+", "+tows("ALWAYS", constantValues["Color"])+")";
	}

	if (name === "__for__") {
		var funcName = "_for";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVar";
			result += parse(operands[0])+", ";
			result += translateVarToWs(operands[1][0].text, false);
		} else {
			funcName += "GlobalVar";
			result += translateVarToWs(args[0][0].text, true);
		}
		
		if (args.length !== 4) {
			error("__for__ function must have 4 arguments");
		}
		return tows(funcName, actionKw)+"("+result+", "+parse(args[1])+", "+parse(args[2])+", "+parse(args[3])+")";
	}
	
	if (name === "floor") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundDown", constantValues["_Rounding"])+")";
	}

	if (name === "hudHeader" || name === "hudText" || name === "hudSubheader" || name === "hudSubtext") {
		if (name !== "hudText" && (args.length < 6 || args.length > 7)) {
			error("Function "+name+" takes 6 or 7 arguments, received "+args.length);
		} else if (name === "hudText" && (args.length < 10 || args.length > 11)) {
			error("Function "+name+" takes 9 or 10 arguments, received "+args.length);
		}
		var defaultColor = [
			{text: "Color"},
			{text: "."},
			{text: "WHITE"}
		];
		var opynull = [{
			text: "null",
		}]
		if (name === "hudHeader") {
			args.splice(2, 0, opynull);
			args.splice(3, 0, opynull);

			args.splice(7, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudSubheader") {
			args.splice(1, 0, opynull);
			args.splice(3, 0, opynull);

			args.splice(6, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudSubtext") {
			args.splice(1, 0, opynull);
			args.splice(2, 0, opynull);

			args.splice(6, 0, defaultColor);
			args.splice(7, 0, defaultColor);
		}
		if (args.length === 10) {
			//Add the spectator visibility
			args.push([
				{text: "SpecVisibility"},
				{text: "."},
				{text: "DEFAULT"},
			])
		}
		name = "_hudText";
		//go on to treat it as a normal function
	}

	if (name === "getAllPlayers") {
		return tows("getPlayers", valueFuncKw)+"("+tows("ALL", constantValues["Team"])+")";
	}

	if (name === "getMapId") {
		error("getMapId() has been removed; use getCurrentMap().");
	}

	if (name === "getSign") {
		if (args.length !== 1) {
			error("Function getSign() takes one argument, received "+args.length);
		} else {
			//(((x)>0)-((x)<0))
			return parse([{"text":"("},{"text":"("},{"text":"("}].concat(args[0]).concat([{"text":")"},{"text":">"},{"text":"0"},{"text":")"},{"text":"-"},{"text":"("},{"text":"("}].concat(args[0]).concat([{"text":")"},{"text":"<"},{"text":"0"},{"text":")"},{"text":")"}])));
		}
	}

	if (name === "localizedStr") {
		error("localizedStr() has been removed, use the 'l' string modifier instead.");
	}
	
	if (name === "round") {
		if (args.length !== 1) {
			error("round() only takes one argument, you maybe meant to use ceil() or floor().");
		} else {
			return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundToNearest", constantValues["_Rounding"])+")";
		}
	}
	
	if (name === "raycast") {
		if (parseArgs.raycastType === undefined) {
			error("Raycast function must be followed by a member (eg. getHitPosition)");
		}
		
		if (parseArgs.raycastType === "getHitPosition" || parseArgs.raycastType === "getPlayerHit" || parseArgs.raycastType === "getNormal") {
			var result = tows("_"+parseArgs.raycastType, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			
			if (args[2][0].text !== "include" || args[2][1].text !== "=") {
				error("3rd arg for this raycast must be 'include = xxxx'");
			} else if (args[3][0].text !== "exclude" || args[3][1].text !== "=") {
				error("4th arg for this raycast must be 'exclude = xxxx'");
			} else if (args[4][0].text !== "includePlayerObjects" || args[4][1].text !== "=") {
				error("5th arg for this raycast must be 'includePlayerObjects = xxxx'");
			}
			
			result += parse(args[2].slice(2))+", "+parse(args[3].slice(2))+", "+parse(args[4].slice(2))+")";
			return result;
		} else if (parseArgs.raycastType === "hasLoS") {
			var result = tows("_isInLineOfSight", valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			if (args[2][0].text !== "los" || args[2][1].text !== "=") {
				error("3rd arg for line of sight check must be 'los = LosCheck.xxxx'");
			} 
			result += parse(args[2].slice(2))+")";
			return result;
		} else {
			error("Unknown raycast member '"+parseArgs.raycastType+"'");
		}
	}
	
	if (name === "sorted") {
		if (args.length !== 2) {
			error("sorted() takes 2 arguments");
		} else {
			
			var result = tows("_sortedArray", valueFuncKw)+"("+parse(args[0]);
			
			var lambdaArgs = splitTokens(args[1], ':');
			if (lambdaArgs.length !== 2 || lambdaArgs[0].length !== 4 || lambdaArgs[0][0].text !== "key" || lambdaArgs[0][1].text !== "=" || lambdaArgs[0][2].text !== "lambda") {
				error("Syntax for sorted array condition is 'key=lambda x: condition(x)'");
			}
			
			currentArrayElementNames.push(lambdaArgs[0][3].text);
			result += ", "+parse(lambdaArgs[1])+")";
			currentArrayElementNames.pop();
			return result;
			
		}
	}
	
	if (name === "stopChasingVariable") {
		
		var funcName = "_stopChasing";
		var result = "";
		

		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[0])+", ";
			//encounteredPlayerVars.add(operands[1][0].text);
			result += translateVarToWs(operands[1][0].text, false);
		} else {
			funcName += "GlobalVariable";
			//encounteredGlobalVars.add(args[0][0].text);
			result += translateVarToWs(args[0][0].text, true);
		}
		
		return tows(funcName, actionKw)+"("+result+")";
	}
		
	
	if (name === "wait") {
		var result = tows("_wait", actionKw)+"(";
		if (args.length === 0) {
			result += "0.016, ";
		} else {
			result += parse(args[0])+", ";
		}
		if (args.length <= 1) {
			result += tows("IGNORE_CONDITION", constantValues["Wait"])
		} else {
			result += parse(args[1]);
		}
		result += ")";
		return result;
	}
	
	//Handle functions with no arguments
	if (args.length === 0) {
		try {
			return tows(name, funcKw);
		} catch (e) {
			//No translation found? May be a subroutine.
			try {
				return tows("_callSubroutine", actionKw)+"("+translateSubroutineToWs(name)+")";
			} catch (e) {
				error("Unknown function "+name);
			}
		}
	}
	
	//Default case (not a special function).
	var result = tows(name, funcKw, {nbArgs:args.length})+"(";
	for (var i = 0; i < args.length; i++) {
		result += parse(args[i]);
		if (i < args.length-1) {
			result += ", ";
		}
	}
	result += ")";
	return result;
	
}

//Parses localized string
function parseLocalizedString(content, formatArgs) {
	if (!content instanceof Array) {
		error("Content must be list of str");
	}
	if (!formatArgs) {
		formatArgs = [];
	}
	
	var matchStr;
	var tokens = [];
	var hasMatchBeenFound = false;
	
	debug("Parsing string '"+content+"'");
	
	//Test surround strings
	for (var key of Object.keys(surroundStrKw)) {
		var token1 = key.substring(0, key.indexOf("{0}")).toLowerCase();
		var token2 = key.substring(key.indexOf("{0}")+"{0}".length).toLowerCase();
		debug("Testing str match on '"+token1+"{0}"+token2+"'");
		if (content[0] === token1 && content[content.length-1] === token2) {
			hasMatchBeenFound = true;
			matchStr = tows(key, surroundStrKw);
			//Note: it is assumed all surround strings have a length of only 1 character for each side.
			tokens.push(content.slice(1, content.length-1));
			break;
		}
		tokens = []
	}
	
	//Test ternary string
	for (var key of Object.keys(ternaryStrKw)) {
		var token1 = key.substring("{0}".length, key.indexOf("{1}")).toLowerCase();
		var token2 = key.substring(key.indexOf("{1}")+"{1}".length, key.indexOf("{2}")).toLowerCase();
		tokens = splitStrTokens(content, token1, token2);
		if (tokens.length === 3) {
			hasMatchBeenFound = true;
			matchStr = tows(key, ternaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test binary strings
	for (var key of Object.keys(binaryStrKw)) {
		var token1 = key.substring("{0}".length, key.indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			hasMatchBeenFound = true;
			matchStr = tows(key, binaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test prefix strings
	for (var key of Object.keys(prefixStrKw)) {
		var token1 = key.substring(0, key.indexOf("{0}")).toLowerCase();
		if (content[0] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(key, prefixStrKw);
			tokens.push(splitStrTokens(content, token1)[1]);
			break;
		}
		tokens = []
	}
	
	//Test postfix strings
	for (var key of Object.keys(postfixStrKw)) {
		var token1 = key.substring("{0}".length).toLowerCase();
		if (content[content.length-1] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(key, postfixStrKw);
			tokens.push(splitStrTokens(content, token1)[0]);
			break;
		}
		tokens = []
	}
	
	
	//Test normal strings
	if (content.length === 1) {
		for (var key of Object.keys(normalStrKw)) {
			var token1 = key.toLowerCase();
			if (content[0] === token1) {
				hasMatchBeenFound = true;
				if (currentLanguage in normalStrKw[key]) {
					matchStr = normalStrKw[key][currentLanguage];
				} else {
					matchStr = normalStrKw[key]["en-US"];
				}
				break;
			}
		}
	}
	
	//Test for empty string
	if (!hasMatchBeenFound && (content.length === 0 || content[0] === "")) {
		hasMatchBeenFound = true;
		matchStr = "";
	}
	
	//Test if no token (probably not a string)
	if (tokens.length === 0 && !hasMatchBeenFound) {
		if (content.length !== 1) {
			console.log(content);
			error("Parser broke I guess? (content = '"+JSON.stringify(content)+"')");
		}
		
		if (content[0].startsWith("_h")) {
			return tows("_hero", valueFuncKw)+"("+tows(content[0].substring(2).toLowerCase(), heroKw)+")";
		} else if (!isNaN(content[0])) {
			return parse(content[0]);
		} else if (content[0] === "{}") {
			if (formatArgs.length === 0) {
				error("Too few arguments supplied for string");
			}
			var result = parse(formatArgs[0]);
			formatArgs.shift();
			return result;
			
		}
	}
	
	var result = tows("_localizedString", valueFuncKw)+"(\""+matchStr+'"';
	//debug("tokens = ")
	//console.log(tokens);
	
	for (var i = 0; i < 3; i++) {
		if (tokens.length > i) {
			result += ", "+parseLocalizedString(tokens[i], formatArgs);
		} else {
			result += ", "+tows("null", valueFuncKw);
		}
	}
	
	result += ")";
	return result;
	
}


//Parses membership (the "." operator).
function parseMember(object, member, parseArgs={}) {
	
	//debug("Parsing member "+dispTokens(member)+" of object "+dispTokens(object));
	
	var name = member[0].text;
	//debug("name = "+name);
	var args = null;
	if (member.length > 1) {
		if (member[1].text === '(') {
			args = splitTokens(member.slice(2, member.length-1), ",");
		} else {
			error("Invalid syntax (member function isn't followed by parenthesis)");
		}
	}

	if (args === null) {
		if (name === "x") {
			return tows("_xComponentOf", valueFuncKw)+"("+parse(object)+")";
		} else if (name === "y") {
			return tows("_yComponentOf", valueFuncKw)+"("+parse(object)+")";
		} else if (name === "z") {
			return tows("_zComponentOf", valueFuncKw)+"("+parse(object)+")";
			
		//Check enums
		} else if (Object.keys(constantValues).indexOf(object[0].text) >= 0) {
			if (object[0].text === "Hero" && obfuscateRules) {
				//Obfuscate heroes, eg Reaper -> getAllHeroes[0]
				if (Math.random() < 0.5) {
					if (allTankHeroes.includes(name)) {
						result = tows("_valueInArray", valueFuncKw)+"("+tows("getTankHeroes", valueFuncKw)+", "+allTankHeroes.indexOf(name)+")";
					} else if (allDamageHeroes.includes(name)) {
						result = tows("_valueInArray", valueFuncKw)+"("+tows("getDamageHeroes", valueFuncKw)+", "+allDamageHeroes.indexOf(name)+")";
					} else if (allSupportHeroes.includes(name)) {
						result = tows("_valueInArray", valueFuncKw)+"("+tows("getSupportHeroes", valueFuncKw)+", "+allSupportHeroes.indexOf(name)+")";
					} else {
						error("Could not find category for hero '"+name+"'");
					}
				} else {
					result = tows("_valueInArray", valueFuncKw)+"("+tows("getAllHeroes", valueFuncKw)+", "+allHeroes.indexOf(name)+")";
				}
			} else {
				var result = tows(object[0].text+"."+name, constantKw);
				if (object[0].text === "Hero") {
					result = tows("_hero", valueFuncKw)+"("+result+")";
				} else if (object[0].text === "Map") {
					result = tows("_map", valueFuncKw)+"("+result+")";
				} else if (object[0].text === "Gamemode") {
					result = tows("_gamemode", valueFuncKw)+"("+result+")";
				}
			}
			
			return result;
		} else if (object[0].text === "math" && object.length === 1) {
			if (name === "pi") {
				return "3.14159265359";
			} else if (name === "e") {
				return "2.71828182846";
			} else {
				error("Unhandled member 'math."+name+"'");
			}
	
		} else if (object[0].text === "Vector") {
			return tows("Vector."+name, valueFuncKw);

		} else {
			//Should be a player variable.
			//encounteredPlayerVars.add(name);
			return tows("_playerVar", valueFuncKw)+"("+parse(object)+", "+translateVarToWs(name, false)+")";
		}
	} else {
	
		if (name === "append") {
			if (parseArgs.isWholeInstruction === true) {
				return parseAssignment(object, args[0], true, "_appendToArray");
				
			} else {
				return tows("_appendToArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
			}
			
		} else if (name === "exclude") {
			return tows("_removeFromArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
			
		} else if (name === "format") {
			return parse(object, {formatArgs: args});
			/*if (parseArgs.isLocalizedString === true) {
				var result = parseLocalizedString(tokenizeLocalizedString(object[0].text.substring(1, object[0].text.length-1)), args);
			} else {
				var result = parseString(object[0].text, args);
			}
			return result;*/
			
		} else if (name === "getHitPosition") {
			return parse(object, {raycastType:"getHitPosition"});
			
		} else if (name === "getNormal") {
			return parse(object, {raycastType:"getNormal"});
			
		} else if (name === "getPlayerHit") {
			return parse(object, {raycastType:"getPlayerHit"});
			
		} else if (name === "hasLoS") {
			return parse(object, {raycastType:"hasLoS"});
			
		} else if (name === "index") {
			return tows("_indexOfArrayValue", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
			
		} else if (object[0].text === "random" && object.length === 1) {
			if (name === "randint" || name === "uniform") {
				return tows("random."+name, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+")";
			} else if (name === "shuffle" || name === "choice") {
				return tows("random."+name, valueFuncKw)+"("+parse(args[0])+")";
			} else {
				error("Unhandled member 'random."+name+"'");
			}
			
		} else if (name === "remove") {
			return parseAssignment(object, args[0], true, "_removeFromArrayByValue");
			
		} else if (name === "slice") {
			return tows("_arraySlice", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+", "+parse(args[1])+")";
			
		} else {
			
			//Check for player function
			try {
				var translation = tows("_&"+name, funcKw);
			} catch (e) {
				error("Unhandled member ", member[0]);
			}
			
			var result = translation+"("+parse(object);
			for (var i = 0; i < args.length; i++) {
				result += ", "+parse(args[i]);
			}
			result += ")";
			return result;
		}
	}
	
	error("This shouldn't happen");
	
}

//Parses an assignment of value to variable.
//Determines the function to use for modify/set global/player variable (at index).
function parseAssignment(variable, value, modify, modifyArg=null) {
	
	debug("Parsing assignment of '"+dispTokens(value)+"' to '"+dispTokens(variable)+"'");
	
	var func = "";
	if (modify) {
		func += "modify";
	} else {
		func += "set";
	}
	
	var result = "";
	
	if (variable.length === 1) {
		//It is a global variable
		//addVariable(variable[0].text, true)
		result += tows("_"+func+"GlobalVar", actionKw)+"("+translateVarToWs(variable[0].text, true)+", ";
		
	} else {
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(variable, ".", false, true);
		if (operands.length === 2) {
			
			//console.log(operands);
			
			//Check for array
			if (operands[1].length > 1 && operands[1][1].text === '[') {
				//addVariable(operands[1][0].text, false);
				result += tows("_"+func+"PlayerVarAtIndex", actionKw)
						+"("+parse(operands[0])+", "+translateVarToWs(operands[1][0].text, false)+", "
						+parse(operands[1].slice(2, operands[1].length-1))+", ";
			} else {
				if (operands[1].length > 1) {
					error("Unauthorised player variable ", operands[1]);
				}
				//addVariable(operands[1][0].text, false);
				result += tows("_"+func+"PlayerVar", actionKw)+"("+parse(operands[0])+", "+translateVarToWs(operands[1][0].text, false)+", ";
			}
			
		} else {
			if (variable[1].text === '[') {
				//addVariable(variable[0].text, true)
				result += tows("_"+func+"GlobalVarAtIndex", actionKw)+"("+translateVarToWs(variable[0].text, true)+", "+parse(variable.slice(2, variable.length-1))+", ";
			} else {
				error("Unauthorized global variable", variable);
			}
		}
	}
	
	if (modify) {
		result += tows(modifyArg, constantValues["_Operation"])+", ";
	}
	
	result += parse(value)+")";
	return result;
}

//Parses an array index such as A[1].
function parseArrayMembership(array, membership) {
	
	//check for dictionary
	if (array[0].text === "{" && array[array.length-1].text === "}") {
		array = array.slice(1, array.length-1);
		var elements = splitTokens(array, ",", true, false);
		if (elements[elements.length-1].length === 0) {
			//handle trailing comma
			elements.pop();
		}
		if (elements.length === 0) {
			error("Cannot declare an empty dictionary");
		}
		console.log(elements);
		var keys = [];
		var values = [];
		for (var elem of elements) {
			var keyValue = splitTokens(elem, ":", true, false);
			if (keyValue.length !== 2) {
				error("Malformed entry in dictionary: found "+keyValue.length+" values composing element, expected 2");
			}
			var compiledKey = parse(keyValue[0]);
			if (keys.includes(compiledKey)) {
				error("Duplicate key '"+dispTokens(keyValue[0])+"'");
			}
			keys.push(compiledKey);
			values.push(parse(keyValue[1]));
		}

		var selectedKey = parse(membership);
		//if the chosen value is a constant, optimize the dictionary out
		if (!containsRandom(selectedKey) && keys.includes(selectedKey)) {
			return values[keys.indexOf(selectedKey)];
		}
		
		var wsAppend = tows("_appendToArray", valueFuncKw);
		var result = tows("_valueInArray", valueFuncKw)+"(";
		var valuesResult = tows("_emptyArray", valueFuncKw);
		for (var value of values) {
			valuesResult = wsAppend+"("+valuesResult+", "+value+")";
		}
		result += valuesResult+", "+tows("_indexOfArrayValue", valueFuncKw)+"(";
		var keysResult = tows("_emptyArray", valueFuncKw);
		for (var key of keys) {
			keysResult = wsAppend+"("+keysResult+", "+key+")";
		}
		result += keysResult+", "+parse(membership)+"))";
		return result;

	} else {
		//normal array

		//[0] -> first of
		if (membership.length === 1 && membership[0].text === '0') {
			return tows("_firstOf", valueFuncKw)+"("+parse(array)+")";
			
		//[-1] -> last of
		} else if (membership.length === 2 && membership[0].text === '-' && membership[1].text === '1') {
			return tows("_lastOf", valueFuncKw)+"("+parse(array)+")";
			
		} else {
			return tows("_valueInArray", valueFuncKw)+"("+parse(array)+", "+parse(membership)+")";
		}
	}

	
	
	error("This shouldn't happen");
	
}

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
function parseLiteralArray(content) {
	
	if (content[0].text !== '[' || content[content.length-1].text !== ']') {
		error("Literal array is not actually a literal array");
	}
	
	if (content.length === 2) {
		return tows("_emptyArray", valueFuncKw);
	} else {
		//check for "in" keyword
		//format is "var for var in array if condition"
		var inOperands = splitTokens(content.slice(1, content.length-1), "in", false);
		if (inOperands.length === 2) {
			var ifOperands = splitTokens(inOperands[1], "if");
			if (ifOperands.length !== 2) {

				//There is not a proper map() function so the previous hack has been removed as too misleading.
				error("Cannot use list comprehension without a condition (eg [i for i in array if x])");
				
			} else {
				//Filtered array
				if (inOperands[0].length !== 3 || inOperands[0][1].text !== "for" || inOperands[0][0].text !== inOperands[0][2].text) {
					error("Malformed 'x for x in y'");
				}
				debug("Parsing 'x for x in y if z', x='"+inOperands[0][0].text+"', y='"+dispTokens(ifOperands[0])+"', z='"+dispTokens(ifOperands[1])+"'");
				
				currentArrayElementNames.push(inOperands[0][0].text);
				var result = tows("_filteredArray", valueFuncKw)+"("+parse(ifOperands[0])+", "+parse(ifOperands[1])+")";
				currentArrayElementNames.pop();
				return result;
			}
		} else {
			
			//Literal array with only values ([1,2,3])
			var args = splitTokens(content.slice(1, content.length-1), ",");
			//Allow trailing comma
			if (args[args.length-1].length === 0) {
				args = args.slice(0, args.length-1);
			}
			var appendFunc = tows("_appendToArray", valueFuncKw);
			var result = tows("_emptyArray", valueFuncKw);
			for (var i = 0; i < args.length; i++) {
				result = appendFunc+"("+result+", "+parse(args[i])+")";
			}
			return result;
		}
	}
	
	error("This shouldn't happen");
	
}

//Parses a rule condition; expects a token list.
function parseRuleCondition(content) {
	
	//console.log(content);
	debug("Parsing rule condition(s) '"+dispTokens(content)+"'");
	
	var result = "";
	
	if (content[content.length-1].text !== ":") {
		error("If statement must end with ':'");
	}
	
	content = content.slice(1, content.length-1);
	var conditions = [];
	
	//If there is any "or" in the condition, there is only one instruction.
	var orOperands = splitTokens(content, "or");
	
	if (orOperands.length > 1) {
		debug("Condition contains 'or'");
		conditions = [[{text:"("}].concat(content).concat([{text:")"}])];
	} else {
		var andOperands = splitTokens(content, "and");
		conditions = andOperands;
	}


	for (var condition of conditions) {
		
		debug("Parsing condition '"+dispTokens(condition)+"'");
		//console.log(andOperands);

		
		var comparisonOperators = ["==", "!=", "<=", ">=", "<", ">"];
		var comparisonOperands;
		var hasComparisonOperand = false;
		var op1 = "";
		var op2 = "";
		var operator = "";
		
		for (var j = 0; j < comparisonOperators.length; j++) {
			comparisonOperands = splitTokens(condition, comparisonOperators[j]);
			if (comparisonOperands.length > 1) {
				if (comparisonOperands.length != 2) {
					error("Chained comparisons are not allowed (eg: a == b == c)");
				}
				op1 = parse(comparisonOperands[0]);
				op2 = parse(comparisonOperands[1]);
				operator = comparisonOperators[j];
				hasComparisonOperand = true;
				break;
			}
		}
		
		if (!hasComparisonOperand) {
			operator = "==";
			if (condition[0].text === "not") {
				op1 = parse(condition.slice(1));
				op2 = tows("false", valueFuncKw);
			} else {
				op1 = parse(condition);
				op2 = tows("true", valueFuncKw);
			}
		}
		//tests for optimizations
		var isOp1True = isWsTrue(op1);
		var isOp2True = isWsTrue(op2);
		var isOp1False = isWsFalse(op1);
		var isOp2False = isWsFalse(op2);

		if (operator === "==") {
			//true == true or false == false -> true
			if (isOp1True && isOp2True || isOp1False && isOp2False) {
				continue;

			//true == false or false == true -> false
			} else if (isOp1True && isOp2False || isOp1False && isOp2True) {
				return "__false__";
			}
		} else if (operator === "!=") {
			//true != false or false != true -> true
			if (isOp1True && isOp2False || isOp1False && isOp2True) {
				continue;
			
			//true != true or false != false -> false
			} else if (isOp1True && isOp2True || isOp1False && isOp2False) {
				return "__false__";
			}
		}


		result += tabLevel(2)+op1+" "+operator+" "+op2+";\n";
	}
	
	return result;
}


//Parses a custom string.
function parseString(content, formatArgs, stringModifiers) {

	if (!formatArgs) {
		formatArgs = [];
	}
	var result = "";
	var tokens = [];
	var numberIndex = 0;
	var args = [];
	var argsAreNumbered = null;
	var isConvertedToBigLetters = false;

	//Used to reorder args for easier optimization.
	//Eg "{1}{0}" is converted to "{0}{1}", with the arguments obviously switched.
	var numberMapping = {};
	var containsNonFullwidthChar = false;

	function applyStringModifiers(content) {

		//If big letters, try to map letters until we get one
		//We only need one letter to convert to big letters
		if (stringModifiers.bigLetters && !isConvertedToBigLetters) {
			for (var i = 0; i < content.length; i++) {
				if (content[i] in bigLettersMappings) {
					content = content.substring(0,i)+bigLettersMappings[content[i]]+content.substring(i+1);
					isConvertedToBigLetters = true;
					break;
				}
			}
		} else if (stringModifiers.fullWidth) {
			var tmpStr = "";
			for (var char of content) {
				if (char in fullwidthMappings) {
					tmpStr += fullwidthMappings[char];
				} else {
					containsNonFullwidthChar = true;
					tmpStr += char;
				}
			}
	
			content = tmpStr;
			
		}
	
		if (obfuscateRules) {
			var tmpStr = "";
			for (var char of content) {
				if (char in obfuscationMappings) {
					tmpStr += obfuscationMappings[char];
				} else {
					tmpStr += char;
				}
			}
			content = tmpStr;
		}

		//Workshop bug: if the last character of a string is 2 bytes or more, it will be "eaten".
		//Fix it by adding a zero-width space.
		console.log(content);
		if (content.length >= 1 && getUtf8Length(content[content.length-1]) >= 2) {
			content += "\u200B";
		}

		return content;
	}

	//Tokenize string
	while (true) {
		var index = content.search(/{\d*}/)
		if (index >= 0) {
			if (index > 0) {
				tokens.push({
					text: applyStringModifiers(content.substring(0, index), stringModifiers, isConvertedToBigLetters),
					type: "string"
				});
				content = content.substring(index);
			}
			var number = content.substring(1, content.indexOf("}"));

			//test for {}
			if (number === "") {
				if (argsAreNumbered === true) {
					error("Cannot switch from automatic field numbering to manual field specification");
				}
				argsAreNumbered = false;
				number = numberIndex;

			} else {
				if (argsAreNumbered === false) {
					error("Cannot switch from automatic field numbering to manual field specification");
				}
				argsAreNumbered = true;
				number = parseInt(number);
			}
			if (!(number in numberMapping)) {
				numberMapping[number] = numberIndex;
				numberIndex++;
			}

			tokens.push({
				index: numberMapping[number],
				type: "arg"
			});
			content = content.substring(content.indexOf("}")+1);

		} else {

			tokens.push({
				text: applyStringModifiers(content, stringModifiers, isConvertedToBigLetters),
				type: "string"
			});
			break;
		}
	}


	//sort args if there was (potentially) a reordering
	for (var key of Object.keys(numberMapping)) {
		if (formatArgs[key]) {
			args[numberMapping[key]] = parse(formatArgs[key]);
		} else {
			error("Too few arguments in format() function: expected "+numberMapping[key]+" but found "+formatArgs.length);
		}
	}
	//console.log("args = ");
	//console.log(args);

	if (containsNonFullwidthChar && stringModifiers.fullWidth) {
		warn("w_not_total_fullwidth", "Could not fully convert this string to fullwidth characters")
	}
	if (stringModifiers.bigLetters && !isConvertedToBigLetters) {
		error("Could not convert the string to big letters. The string must have one of the following chars: '"+Object.keys(bigLettersMappings).join("")+"'");
	}

	console.log(tokens);
	console.log(stringModifiers);

	result = parseStringTokens(tokens, args);

	return result;

}

function parseStringTokens(tokens, args) {
	var result = "";
	var resultArgs = [];
	var numbers = [];
	var numbersEncountered = [];
	var mappings = {};
	var stringLength = 0;
	var currentNbIndex = 0;


	//iterate through tokens and figure out the total number of unique numbers
	for (var token of tokens) {
		if (token.type === "string") {
			continue;
		} else {
			if (!numbers.includes(token.index)) {
				numbers.push(token.index);
			}
		}
	}

	//Add tokens
	//For now, no optimization: just split if more than 3 unique numbers
	for (var i = 0; i < tokens.length; i++) {
		//console.log(tokens[i]);
		//console.log("numbers encountered=");
		//console.log(numbersEncountered);
		//debugger;

		//length check
		if (tokens[i].type === "string" && stringLength+getUtf8Length(tokens[i].text) >= 125 || tokens[i].type === "arg" && stringLength+3 >= 125) {

			var splitString = false;
			if (tokens[i].type === "string" && (stringLength+getUtf8Length(tokens[i].text) > 127 || tokens.length > i)) {

				var tokenText = [...tokens[i].text]
				var tokenSliceLength = 0;
				var sliceIndex = 0;
				for (var j = 0; stringLength+tokenSliceLength < 122; j++) {
					tokenSliceLength += getUtf8Length(tokenText[j]+"");
					sliceIndex++;
				}

				//Workshop bug: if the last character of a string is 2 bytes or more, it will be "eaten".
				//Fix it by adding a zero-width space.
				if (getUtf8Length(tokenText[tokenText.length-1]) >= 2) {
					sliceIndex -= 3;
					result += tokenText.slice(0, sliceIndex).join("") + "\u200B";
				} else {
					result += tokenText.slice(0, sliceIndex).join("")
				}

				tokens[i].text = tokenText.slice(sliceIndex).join("");
				splitString = true;

			} else if (tokens[i].type === "arg" && tokens.length > i) {
				splitString = true;
			}

			if (splitString) {
				result += "{"+currentNbIndex+"}";
				resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
				break;
			}
		}

		if (tokens[i].type === "string") {
			result += tokens[i].text;
			stringLength += getUtf8Length(tokens[i].text);
		} else {
			if (numbersEncountered.length >= 2 && numbers.length > 3) {
				//split
				result += "{2}";
				resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
				break;
			} else {
				if (!(tokens[i].index in mappings)) {
					mappings[tokens[i].index] = numbersEncountered.length;
				}
				if (!numbersEncountered.includes(tokens[i].index)) {
					numbersEncountered.push(tokens[i].index);
					resultArgs.push(args[tokens[i].index]);
				}
				result += "{"+mappings[tokens[i].index]+"}";
				currentNbIndex++;
				stringLength += 3;


			}
		}
	}

	while (resultArgs.length < 3) {
		resultArgs.push(wsNull);
	}

	if (resultArgs.length != 3) {
		error("Custom string parser broke (string args length is "+resultArgs.length+")");
	}

	return tows("_customString", valueFuncKw)+"(\""+result+"\", "+resultArgs.join(", ")+")";
}
