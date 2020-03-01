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
	if (content.startsWith(tows("_settings", ruleKw))) {
		result += decompileCustomGameSettings(content.substring(bracketPos[0]+1, bracketPos[1]));
		content = content.substring(bracketPos[1]+1)
	}

	content = content.trim();
	bracketPos = getBracketPositions(content);

	//Check for variable names
	if (content.startsWith(tows("_variables", ruleKw))) {
		decompileVarNames(content.substring(bracketPos[0]+1, bracketPos[1]));
		content = content.substring(bracketPos[1]+1)
	}

	content = content.trim();
	bracketPos = getBracketPositions(content);

	//Check for subroutine names
	if (content.startsWith(tows("_subroutines", ruleKw))) {
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
	
	for (var i = 0; i < bracketPos.length-1; i += 4) {
	//for (var i = 0; i < 4; i += 4) {
		if (i >= bracketPos.length-1) break;
		result += decompileRule(content.substring(bracketPos[i]+1, bracketPos[i+4]+1));
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
	result = variableDeclarations + subroutineDeclarations + result;
		
	return result;
	
}

function decompileCustomGameSettings(content) {
	console.log(content);
	var result = {};
	var wsDisabled = tows("_disabled", ruleKw);

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
			if (content[i] === tows("_global", ruleKw)) {
				isInGlobalVars = true;
			} else if (content[i] === tows("_player", ruleKw)) {
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
					if (elems[1] === tows("_global", ruleKw)) {
						isInGlobalVars = true;
					} else if (elems[1] === tows("_player", ruleKw)) {
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

function decompileRule(content) {
	
	//Reset rule-specific global variables
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	
	//Check for potential error
	if (currentArrayElementNames.length != 0) {
		error("Current array element names weren't cleared");
	}
	
	var bracketPos = getBracketPositions(content);
	if (bracketPos.length != 4) {
		error("Invalid rule (mismatched brackets): has "+bracketPos.length+" top-level brackets, should be 4");
	}
	
	var ruleName = content.substring(bracketPos[0]+1, bracketPos[1]);
	var isCurrentRuleDisabled = false;
	if (content.trim().startsWith(tows("_disabled", ruleKw))) {
		isCurrentRuleDisabled = true;
	}
	
	debug("Decompiling rule "+ruleName);
	var result = "";
	if (isCurrentRuleDisabled) {
		result += '"""';
	}
	result += "@Rule "+ruleName+"\n";
	
	var ruleContent = content.substring(bracketPos[2]+1, bracketPos[3]);
	
	var bracketPos2 = [-1].concat(getBracketPositions(ruleContent));
	
	var eventInst = [];
 	var conditions = "";
	var actions = "";
	
	for (var i = 0; i < bracketPos2.length-2; i += 2) {
		var fieldName = topy(ruleContent.substring(bracketPos2[i]+1, bracketPos2[i+1]), ruleKw);
		if (fieldName === "@Event") {
			eventInst = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]), false);
		} else if (fieldName === "_conditions") {
			//conditions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			conditions = "conditions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else if (fieldName === "_actions") {
			//actions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			actions = "actions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else {
			error("Unknown field name "+fieldName+" in rule "+ruleName);
		}
	}
	
	//Parse events
	if (eventInst.length > 0) {

		var eventName = topy(eventInst[0], eventKw);
		if (eventName === "_subroutine") {

			if (eventInst.length !== 2) {
				error("Malformed subroutine event");
			}
			var subroutineName = translateSubroutineToPy(eventInst[1].trim());

			result += "def "+subroutineName+"():\n";
			nbTabs = 1;

		} else {
			result += "@Event "+eventName+"\n";
			if (eventInst.length > 1) {
				//There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
				if (topy(eventInst[1], eventTeamKw) !== "all") {
					result += "@Team "+topy(eventInst[1], eventTeamKw)+"\n";
				}
				
				//Parse the 3rd event instruction
				//Detect if it is a slot or hero
				var eventInst3 = topy(eventInst[2], eventPlayerKw)
				if (eventInst3 !== "all") {
					if (isNumber(eventInst3)) {
						result += "@Slot "+eventInst3+"\n";
					} else {
						//We assume it is a hero
						result += "@Hero "+eventInst3.toLowerCase() + "\n";
					}
				}
			}
		}
	}
	
	//Parse conditions
	if (conditions !== "") {
		result += decompileConditions(conditions);
	}
		
	//Parse actions
	if (actions !== "") {
		result += decompileActions(actions);
	}
	
	if (isCurrentRuleDisabled) {
		result += '"""';
	}
	return result+"\n\n";
}

function decompileConditions(content) {
	
	var conditions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")), false);
	
	var result = "";
	result += "if ";
	var condStrs = [];
	for (var i = 0; i < conditions.length; i++) {
		
		var currentCondIsDisabled = false;
		conditions[i] = conditions[i].trim();
		if (conditions[i].startsWith(tows("_disabled", ruleKw))) {
			currentCondIsDisabled = true;
			conditions[i] = conditions[i].substring(tows("_disabled", ruleKw).length);
		}
		var currentCond = decompileRuleCondition(conditions[i]);
		//Check for and-ing with true
		if (currentCond === "true") {
			continue;
		}
		
		if (operatorPrecedenceStack[0] < 2) {
			currentCond = "("+currentCond+")";
		}
		condStrs.push({
			text: currentCond,
			isDisabled: currentCondIsDisabled,
		});
	}
	var condStrResult = "";
	for (var i = 0; i < condStrs.length; i++) {
		//console.log(i)
		//console.log(condStrs[i]);
		var condStr = condStrs[i].text;
		if (i < condStrs.length-2 && !condStrs[i+1].isDisabled) {
			condStr += " and ";
		} else if (condStrs.length >= 2 && (i === condStrs.length-1 || condStrs[i].isDisabled && i > 0)) {
			condStr = " and "+condStr;
		}
		if (condStrs[i].isDisabled) {
			condStr = "'''"+condStr+"'''";
		}
		condStrResult += condStr;
	}
	
	//This happens if everything is true
	if (condStrResult === "") {
		condStrResult = "true";
	}
	result += condStrResult;
	
	result += ":\n"
	nbTabs = 1;
	
	return result;
}

function decompileActions(content) {
	
	var result = "";
	var actions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")), false);
	
	//Detect the last loop to know where to place the "while"
	for (var i = 0; i < actions.length; i++) {
		var actionName = getName(actions[i]);
		if (!actionName.startsWith(tows("_disabled", ruleKw)) && topy(actionName, actionKw).startsWith("_loop")) {
			//It is a loop; update the loop position
			lastLoop = i;
		}
	}
	
	//If a loop was detected, add the "do:" and increment the indentation level.
	if (lastLoop >= 0) {
		result += tabLevel(nbTabs)+"do:\n";
		nbTabs++;
	}
		
	for (var i = 0; i < actions.length; i++) {
		if (i == lastLoop) {
			nbTabs--;
		}
		result += tabLevel(nbTabs) + decompileAction(actions[i], i) + "\n";
	}

	//Add the remaining gotos (caused eg. by a skip 50 in a rule with 10 actions).
	for (var i = 0; i < decompilerGotos.length; i++) {
		if (decompilerGotos[i] > 0) {
			result += tabLevel(nbTabs)+"lbl_"+i+":\n";
		}
	}
	
	return result;
}

function decompileAction(content, actionNb) {
	
	var result = "";
	
	//Reset variable
	operatorPrecedenceStack = [];
	
	//Decrement each goto (for skips)
	for (var i = 0; i < decompilerGotos.length; i++) {
		decompilerGotos[i]--;
		//Check if the goto has reached its destination
		if (decompilerGotos[i] == 0) {
			result += "lbl_"+i+":\n"+tabLevel(nbTabs);
		}
	}
	var isCurrentActionDisabled = false;
	content = content.trim();
	if (content.startsWith(tows("_disabled", ruleKw)+" ")) {
		isCurrentActionDisabled = true;
		content = content.substring((tows("_disabled", ruleKw)+" ").length);
	}
	var decompiledAction = "";
	if (actionNb == lastLoop) {
		decompiledAction = decompile(content, actionKw, {"isLastLoop":true});
	} else {
		
		decompiledAction = decompile(content, actionKw, 0, {"isLastLoop":false});
	}
	if (isCurrentActionDisabled) {
		if (decompiledAction.includes('\n')) {
			decompiledAction = "'''"+decompiledAction+"'''";
		} else {
			decompiledAction = "#"+decompiledAction;
		}
	}
	return result+decompiledAction;
}

//This function only decompiles conditions that are in the "condition" section of a rule.
//This is needed to handle the binary operators.
function decompileRuleCondition(content) {
	
	debug("Decompiling condition '"+content+"'");
	
	//Reset variable
	operatorPrecedenceStack = [];
	var operators = ["==", "!=", "<=", ">=", "<", ">"];
	
	for (var i = 0; i < operators.length; i++) {
		var operands = splitStrOnDelimiter(content, operators[i], false);
		if (operands.length == 2) {
			return decompileCondition(operands[0], operators[i], operands[1]);
		}
	}
	
	error("Could not decompile condition "+content);
	
}

//Decompiles conditions (whether rule conditions or compare() conditions).
//Used to optimise some stuff (eg: condition==true -> condition, condition==false -> not condition).

function decompileCondition(operand1, operator, operand2) {
	var result = "";
	var isOneOperandFalse = false;
	var operands = [operand1, operand2];
	operator = operator.trim();
	if (operator == "==") {
		//condition == true check
		for (var i = 0; i < operands.length; i++) {
			var translated = topy(getName(operands[i]), valueKw);
			if (translated === "true") {
				operands[i] = "";
			} else if (translated === "false") {
				operands[i] = "";
				isOneOperandFalse = true;
			}
		}
	}
	
	
	if (operands[0] !== "" && operands[1] !== "") {
		result = decompileOperator(operands[0], operator, operands[1])
	} else if (operands[0] !== "") {
		if (isOneOperandFalse) {
			result = decompileOperator(operands[0], "not", "");
		} else {
			result = decompile(operands[0]);
		}
	} else if (operands[1] !== "") {
		if (isOneOperandFalse) {
			result = decompileOperator(operands[1], "not", "");
		} else {
			result = decompile(operands[1]);
		}
	} else if (isOneOperandFalse) {
		result = "false";
	} else {
		result = "true";
	}
	
	
	return result;
}

//Main parser function for workshop -> overpy.
function decompile(content, keywordArray=valueKw, decompileArgs={}) {
	
	if (keywordArray === undefined) {
		error("KeywordArray is undefined");
	} else if (content === undefined) {
		error("Content is undefined");
	}
	
	debug("Decompiling '"+content+"'");
	var bracketPos = getBracketPositions(content);
	
	
	var hasArgs = false
	if (bracketPos.length == 2) {
		hasArgs = true;
	} else if (bracketPos.length != 0) {
		error("Mismatched top-level brackets in action "+content+": expected 0 or 2, found "+bracketPos.length)
	}
	
	//Check if there are empty parentheses
	if (bracketPos.length == 2 && content.substring(bracketPos[0]+1, bracketPos[1]).trim().length == 0) {
		hasArgs = false;
		content = content.substring(0, bracketPos[0]);
	}
		
	var name = "";
	if (bracketPos.length == 2) {
		name = content.substring(0, bracketPos[0]);
	} else {
		name = content;
	}
	name = topy(name.toLowerCase().replace(/\s/g, ""), keywordArray);
	
	if (name !== "_compare" && decompileArgs.invertCondition === true) {
		return parseOperator(content, "not", null);
	}
	
	var args = [];
	if (hasArgs) {
		var args = getArgs(content.substring(bracketPos[0]+1, bracketPos[1]), false);
	}
	debug("Arguments: "+args);
	var result = "";
	
	//Handle special functions that can't be directly translated
	//Special functions are sorted alphabetically.
	
	//Player functions can't be translated, but most of them are generic.
	//They begin by "_&".
	
	if (name.startsWith("_&")) {
		return decompileGenericPlayerFunction(name.substring("_&".length), args, keywordArray === actionKw ? true : false);
	}
	
	//Functions beginning with "_!" have their arguments swapped (assuming there are only 2 arguments).
	if (name.startsWith("_!")) {
		if (args.length !== 2) {
			error("Argument length for swapped function must be 2");
		}
		return name.substring("_!".length)+"("+decompile(args[1])+", "+decompile(args[0])+")";
	}
	
	//Abort if
	if (name === "_abortIf") {
		result = "if " + decompile(args[0]) + ":\n";
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Abort if condition is false/true
	if (name === "_abortIfConditionIsFalse" || name === "_abortIfConditionIsTrue") {
		result = "if ";
		if (name === "_abortIfConditionIsFalse") {
			result += "not ";
		}
		result += "RULE_CONDITION:\n";
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Add
	if (name === "_add") {
		return decompileOperator(args[0], "+", args[1]);
	}
	
	//Is true for all
	if (name === "_all") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "all(["+decompile(args[1])+" for "+varName+" in "+decompile(args[0])+"])";
		currentArrayElementNames.pop();
		return result;
	}
	
	//Is true for any
	if (name === "_any") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "any(["+decompile(args[1])+" for "+varName+" in "+decompile(args[0])+"])";
		currentArrayElementNames.pop();
		return result;
	}
	
	//And
	if (name === "_and") {
		return decompileOperator(args[0], "and", args[1]);
	}
	
	//Append to array
	if (name === "_appendToArray") {
		
		//Check for optimization: [].append(123).append(456) -> [123, 456]
		//Only done if we append a literal number to a literal array.
		
		var decompiledArg0 = decompile(args[0]);
		var decompiledArg1 = decompile(args[1]);
		
		if (decompiledArg0.startsWith('[') && decompiledArg0.endsWith(']') && !isNaN(decompiledArg1)) {
			var result = decompiledArg0.substring(0, decompiledArg0.length-1);
			if (decompiledArg0 !== "[]") {
				result += ", ";
			}
			result += decompiledArg1+"]";
			return result;
		} else {
			return decompiledArg0+".append("+decompiledArg1+")";
		}
	}
	
	//Array contains
	if (name === "_arrayContains") {
		
		return decompile(args[1])+" in "+decompile(args[0]);
	}
	
	//Array slice
	if (name === "_arraySlice") {
		return decompile(args[0]) + ".slice(" + decompile(args[1]) + ", " + decompile(args[2])+")";
	}

	//Call subroutine
	if (name === "_callSubroutine") {
		return translateSubroutineToPy(args[0])+"()";
	}
	
	//Chase global variable at rate
	if (name === "_chaseGlobalVariableAtRate") {
		
		return "chase("+translateVarToPy(args[0], true)+", "+decompile(args[1])+", rate="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase global variable over time
	if (name === "_chaseGlobalVariableOverTime") {
		
		return "chase("+translateVarToPy(args[0], true)+", "+decompile(args[1])+", duration="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase player variable at rate
	if (name === "_chasePlayerVariableAtRate") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, rate={arg2}, {arg3})", args[0], args.slice(1), true, true, true)
		
		return result;
	}
	
	//Chase player variable over time
	if (name === "_chasePlayerVariableOverTime") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, duration={arg2}, {arg3})", args[0], args.slice(1), true, true, true)
		
		return result;
	}
		
	//Compare
	if (name === "_compare") {
		
		var op = args[1].trim();
		if (decompileArgs.invertCondition === true) {
			op = reverseOperator(op);
		}
		
		return decompileCondition(args[0], op, args[2]);
		//return "("+decompile(args[0]) + ") " + args[1].trim() + " (" + decompile(args[2])+")";
	}
	
	//Current array element
	if (name === "_currentArrayElement") {
		var currentArrayElementName = currentArrayElementNames[currentArrayElementNames.length-1];
		if (currentArrayElementName === undefined) {
			error("currentArrayElementName is undefined");
		}
		return currentArrayElementName;
	}
	
	//Custom String
	if (name === "_customString") {
		
		var result = args[0];
		var format = [];
		if (result.includes("{0}")) {
			format.push(decompile(args[1]));
		}
		if (result.includes("{1}")) {
			if (format.length === 0) {
				result = result.replace("{1}", "{0}");
			}
			format.push(decompile(args[2]));
		}
		if (result.includes("{2}")) {
			if (format.length === 0) {
				result = result.replace("{2}", "{0}");
			} else if (format.length === 1) {
				result = result.replace("{2}", "{1}");
			}
			format.push(decompile(args[3]));
		}
		
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return result;
	}
	
	//Divide
	if (name === "_divide") {
		return decompileOperator(args[0], "/", args[1]);
	}

	//Elif
	if (name === "__elif__") {
		var arg1 = decompile(args[0]);
		var result = "__elif__("+arg1+")";
		return result;
	}

	//Else
	if (name === "__else__") {
		var result = "__else__()";
		return result;
	}
	
	//Empty array
	if (name === "_emptyArray") {
		return "[]";
	}
	
	//End
	if (name === "__end__") {
		var result = "__end__()";
		return result;
	}
	
	//Filtered array
	if (name === "_filteredArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "["+varName+" for "+varName+" in "+decompile(args[0])+" if "+decompile(args[1])+"]";
		currentArrayElementNames.pop();
		return result;
	}
	
	//First of
	if (name === "_firstOf") {
		return decompile(args[0])+"[0]";
	}

	//For global var
	if (name === "_forGlobalVar") {
		return "__for__("+translateVarToPy(args[0], true)+", "+decompile(args[1])+", "+decompile(args[2])+", "+decompile(args[3])+")";
	}

	//For player var
	if (name === "_forPlayerVar") {
		return "__for__("+decompile(args[0])+"."+translateVarToPy(args[1], false)+", "+decompile(args[2])+", "+decompile(args[3])+", "+decompile(args[4])+")";
	}
	
	//Raycast hit normal
	if (name === "_getNormal") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getNormal()";
	}
	
	//Raycast hit position
	if (name === "_getHitPosition") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getHitPosition()";
	}
	
	//Raycast hit player
	if (name === "_getPlayerHit") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getPlayerHit()";
	}

	//All Players
	if (name === "getPlayers") {
		var team = decompile(args[0], valueKw);
		if (team === "Team.ALL") {
			return "getAllPlayers()";
		} else {
			return "getPlayers("+team+")";
		}
	}
	
	//Gamemode
	if (name === "_gamemode") {
		return "Gamemode."+decompile(args[0], constantValues["Gamemode"]);
	}
		
	//Global variable
	if (name === "_globalVar") {
		return translateVarToPy(args[0], true);
	}
		
	//Hero
	if (name === "_hero") {
		return "Hero."+decompile(args[0], constantValues["Hero"]);
	}

	//Hud text
	if (name === "_hudText") {
		var header = decompile(args[1]);
		var subheader = decompile(args[2]);
		var subtext = decompile(args[3]);
		var specVisibility = "";
		if (args.length > 11) {
			specVisibility = "SpecVisibility."+decompile(args[10], constantValues["SpecVisibility"]);
			if (specVisibility === "SpecVisibility.DEFAULT") {
				specVisibility = "";
			} else {
				specVisibility = ", "+specVisibility;
			}
		}
		var funcName = "";
		var texts = "";

		var headerColor = "Color."+decompile(args[6], constantValues["Color"])
		var subheaderColor = "Color."+decompile(args[7], constantValues["Color"])
		var subtextColor = "Color."+decompile(args[8], constantValues["Color"])
		var colors = "";
		if (subheader === "null" && subtext === "null") {
			funcName = "hudHeader";
			texts = header;
			colors = headerColor;
		} else if (header === "null" && subtext === "null") {
			funcName = "hudSubheader";
			texts = subheader;
			colors = subheaderColor;
		} else if (subheader === "null" && subheader === "null") {
			funcName = "hudSubtext";
			texts = subtext;
			colors = subtextColor;
		} else {
			funcName = "hudText";
			texts = header+", "+subheader+", "+subtext;
			colors = headerColor+", "+subheaderColor+", "+subtextColor;
		}
		return funcName+"("+decompile(args[0])+", "+texts+", HudPosition."+decompile(args[4], constantValues["HudPosition"])+", "+decompile(args[5])+", "+colors+", "+decompile(args[9])+specVisibility+")";
	}

	//If
	if (name === "__if__") {
		var arg1 = decompile(args[0]);
		var result = "__if__("+arg1+")";
		return result;
	}
	
	//Index of array value
	if (name === "_indexOfArrayValue") {
		return decompile(args[0])+".index("+decompile(args[1])+")";
	}
	
	//Is in line of sight
	if (name === "_isInLineOfSight") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", los="+decompile(args[2])+").hasLoS()";
	}
	
	//Last of
	if (name === "_lastOf") {
		return decompile(args[0])+"[-1]";
	}
	
	//Localized String
	if (name === "_localizedString") {
		
		//Blizzard likes making parsing difficult apparently,
		//cause the "reevaluation on string" used with hud is the same as the "string" function.
		
		if (args.length == 0) {
			return "HudReeval.STRING";
		}
				
		var [str, format] = decompileLocalizedString(args[0], args[1], args[2], args[3], decompileArgs.strDepth);
				
		if (decompileArgs.strDepth !== 0 && decompileArgs.strDepth !== undefined) {
			return [str, format];
		}
		
		result = '"'+str+'"';
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return "l"+result+"";
	}
			
	//Loop
	if (name === "_loop") {
		if (decompileArgs.isLastLoop) {
			return "while true";
		} else {
			return "continue";
		}
	}
	
	//Loop if
	if (name === "_loopIf") {
		if (decompileArgs.isLastLoop) {
			return "while "+decompile(args[0]);
		} else {
			var result = "if "+decompile(args[0])+":\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Loop if condition is false
	if (name === "_loopIfConditionIsFalse") {
		if (decompileArgs.isLastLoop) {
			return "while not RULE_CONDITION";
		} else {
			var result = "if not RULE_CONDITION:\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Loop if condition is true
	if (name === "_loopIfConditionIsTrue") {
		if (decompileArgs.isLastLoop) {
			return "while RULE_CONDITION";
		} else {
			var result = "if RULE_CONDITION:\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}

	//Map
	if (name === "_map") {
		return "Map."+decompile(args[0], constantValues["Map"]);
	}
	
	//Modify global var
	if (name === "_modifyGlobalVar") {
		return decompileModifyVar(translateVarToPy(args[0], true), args[1], decompile(args[2]));
	}
	
	//Modify global var at index
	if (name === "_modifyGlobalVarAtIndex") {
		return decompileModifyVar(translateVarToPy(args[0], true), args[2], decompile(args[3]), decompile(args[1]));
	}
	
	//Modify player var
	if (name === "_modifyPlayerVar") {
		
		var result = decompileModifyVar(decompile(args[0])+"."+translateVarToPy(args[1], false), args[2], decompile(args[3]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modify player var at index
	if (name === "_modifyPlayerVarAtIndex") {
		
		var result = decompileModifyVar(decompile(args[0])+"."+translateVarToPy(args[1], false), args[3], decompile(args[4]), decompile(args[2]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modulo
	if (name === "_modulo") {
		return decompileOperator(args[0], "%", args[1]);
	}
	
	//Multiply
	if (name === "_multiply") {
		return decompileOperator(args[0], "*", args[1]);
	}

	//Not
	if (name === "_not") {
		return decompileOperator(args[0], "not", null);
	}
	
	//Or
	if (name === "_or") {
		return decompileOperator(args[0], "or", args[1]);
	}
	
	//Player variable
	if (name === "_playerVar") {
		return decompile(args[0])+"."+translateVarToPy(args[1], false);
	}
	
	//Raise to power
	if (name === "_raiseToPower") {
		return decompileOperator(args[0], "**", args[1]);
	}
	
	//Remove from array
	if (name === "_removeFromArray") {
		return decompile(args[0])+".exclude("+decompile(args[1])+")";
	}
	
	
	//Round
	if (name === "_round") {
		var roundType = topy(args[1], constantValues["_Rounding"]);
		if (roundType === "_roundUp") {
			return "ceil("+decompile(args[0])+")";
		} else if (roundType === "_roundDown") {
			return "floor("+decompile(args[0])+")";
		} else if (roundType === "_roundToNearest") {
			return "round("+decompile(args[0])+")";
		} else {
			error("Unknown round type "+roundType);
		}
	}
	
	//Set global var
	if (name === "_setGlobalVar") {
		return translateVarToPy(args[0], true)+" = "+decompile(args[1]);
	}
	
	//Set global var at index
	if (name === "_setGlobalVarAtIndex") {
		return translateVarToPy(args[0], true)+"["+decompile(args[1])+"] = "+decompile(args[2]);
	}
	
	//Set player var
	if (name === "_setPlayerVar") {
		return decompilePlayerFunction("{player}.{arg0} = {arg1}", args[0], args.slice(1), true, true, true);
	}
	
	//Set player var at index
	if (name === "_setPlayerVarAtIndex") {
		return decompilePlayerFunction("{player}.{arg0}[{arg1}] = {arg2}", args[0], args.slice(1), true, true, true);
	}

	//Start rule
	if (name === "_startRule") {
		return "async("+translateSubroutineToPy(args[0])+"(), "+decompile(args[1])+")";
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingGlobalVariable") {
		return "stopChasingVariable("+translateVarToPy(args[0], true)+")";
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingPlayerVariable") {
		return decompilePlayerFunction("stopChasingVariable({player}.{args})", args[0], args.slice(1), false, true, true);
	}
					
	//Subtract
	if (name === "_subtract") {
		return decompileOperator(args[0], "-", args[1]);
	}
	
	//Skip
	if (name === "_skip") {
		//Check if the number of skips is hardcoded
		if (!isNaN(args[0].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[0])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[0]);
		}
		
		return "goto "+gotoStr;
	}
	
	//Skip if
	if (name === "_skipIf") {
		result = "if " + decompile(args[0]) + ":\n";
		
		//Check if the number of skips is hardcoded
		if (!isNaN(args[1].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[1])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[1]);
		}
		
		result += tabLevel(nbTabs+1) + "goto "+gotoStr;
		
		return result;
	}
	
	//Sorted array
	if (name === "_sortedArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "sorted("+decompile(args[0]);
		//If key == current array element, do not include it
		if (topy(getName(args[1]).trim(), valueKw) !== "_currentArrayElement") {
			result += ", key=lambda "+varName+": "+decompile(args[1]);
		}
		result += ")";
		currentArrayElementNames.pop();
		return result;
	}

	//Value in array
	if (name === "_valueInArray") {
		return decompile(args[0])+"["+decompile(args[1])+"]";
	}
	
	//Wait
	if (name === "_wait") {
		var arg1 = decompile(args[0]);
		var arg2 = decompile(args[1]);
		var result = "wait(";
		if (arg1 !== "0.016" || arg2 !== "Wait.IGNORE_CONDITION") {
			result += arg1;
		}
		if (arg2 !== "Wait.IGNORE_CONDITION") {
			result += ", "+arg2;
		}
		return result+")";
	}

	//While
	if (name === "__while__") {
		var arg1 = decompile(args[0]);
		var result = "__while__("+arg1+")";
		return result;
	}
	
	//X/Y/Z component of
	if (name === "_xComponentOf") {
		return decompile(args[0])+".x";
	}
	if (name === "_yComponentOf") {
		return decompile(args[0])+".y";
	}
	if (name === "_zComponentOf") {
		return decompile(args[0])+".z";
	}
	
	if (name.startsWith('_')) {
		error("Unhandled special function "+name);
	}
	
	//Default case (not a special function).
	result = name;
	if (args.length > 0) {
		result += "("
		for (var i = 0; i < args.length; i++) {
			result += decompile(args[i]);
			if (i < args.length-1) {
				result += ", ";
			}
		}
		result += ")";
	}
	
	return result;
	
}

function decompileLocalizedString(content, arg1, arg2, arg3, strDepth) {
		
	var result = content;
	var format = [];
	var args = [arg1, arg2, arg3];
	
	var nbArgs = 0;
	if (content.indexOf("{0}") > -1) nbArgs++;
	if (content.indexOf("{1}") > -1) nbArgs++;
	if (content.indexOf("{2}") > -1) nbArgs++;
	
	//debug("Parsing string '"+content+"' with nbargs = "+nbArgs);
	
	//Remove additional quotes
	if (result.startsWith('"') && result.endsWith('"')) {
		result = topy(result.substring(1, result.length-1), stringKw);
	}
	
	for (var i = 0; i < nbArgs; i++) {
		
		//Check if the string result must be put in the format array
		var isInFormat = true;
		
		var decompiledArg = decompile(args[i], valueKw, {"strDepth":1});
		
		//Skip nulls
		/*if (decompiledArg === "null") {
			continue;
		}*/
		
		if (decompiledArg.constructor !== Array) {
			decompiledArg = [decompiledArg];
		}
		
		//If the decompile function returned 2 arguments, the argument is a string
		if (decompiledArg.length > 1) {
			isInFormat = false;
			format = format.concat(decompiledArg[1]);
			
		//Else, check if the argument is a number
		} else if (!isNaN(decompiledArg[0])) {
			isInFormat = false;
			
		//Else, check if the argument is in the list of string keywords
		} else if (decompiledArg[0] in stringKw) {
			isInFormat = false;
		}
		
		if (isInFormat) {
			format = format.concat(decompiledArg);
			result = result.replace("\{"+i+"\}", "{}");
		} else {
			//Remove the "Hero." prefix for heroes
			if (decompiledArg[0].startsWith("Hero.")) {
				decompiledArg[0] = decompiledArg[0].replace("Hero.","").toLowerCase();
				decompiledArg[0] = decompiledArg[0][0].toUpperCase() + decompiledArg[0].substring(1);
			}
			result = result.replace("\{"+i+"\}", decompiledArg[0]);
		}
	}
		
	
	debug("Format = "+format+", arg = "+decompiledArg);
	return [result, format];
	
}

//Function for the player functions, eg set projectile speed, has status, etc.
//There were so many of them, it was polluting the special functions table.
function decompileGenericPlayerFunction(name, args, isAction) {
	if (isAction === undefined) {
		error("isAction is undefined");
	}
	return decompilePlayerFunction("{player}."+name+"({args})", args[0], args.slice(1), false, isAction);
}

//The content is a python translation and must contain {player} and {args} to replace strings by the args.
//If separateArgs = true, {arg0}, {arg1} etc must be provided instead of {args}.
function decompilePlayerFunction(content, player, args, separateArgs=false, isAction=true, firstArgIsVar=false) {
	
	var result = "";
	result += content.replace("\{player\}", decompile(player))
	
	
	//Parse arguments
	if (!separateArgs) {
		var argsStr = "";
		for (var i = 0; i < args.length; i++) {
			if (i === 0 && firstArgIsVar) {
				argsStr += translateVarToPy(args[i], false);
			} else {
				argsStr += decompile(args[i]);
			}
			if (i < args.length-1) {
				argsStr += ", ";
			}
		}
		result = result.replace("\{args\}", argsStr)
	} else {
		for (var i = 0; i < args.length; i++) {
			if (i === 0 && firstArgIsVar) {
				result = result.replace("\{arg"+i+"\}", translateVarToPy(args[i], false))
			} else {
				result = result.replace("\{arg"+i+"\}", decompile(args[i]))
			}
		}
	}
	return result;
}

//Function used for "modify player variable" and "modify global variable".
//Note: arguments passed to this function must already be decompiled.
function decompileModifyVar(variable, operation, value, index) {
	if (index !== undefined) {
		variable += "["+index+"]";
	}
	operation = topy(operation, constantValues["_Operation"]);
	if (operation === "_appendToArray") {
		return variable+".append("+value+")";
	} else if (operation === "_add") {
		//Handle special "++" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"++";
		} else {
			return variable+" += "+value;
		}
	} else if (operation === "_subtract") {
		//Handle special "--" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"--";
		} else {
			return variable+" -= "+value;
		}
	} else if (operation === "_multiply") {
		return variable+" *= "+value;
	} else if (operation === "_divide") {
		return variable+" /= "+value;
	} else if (operation === "_modulo") {
		return variable+" %= "+value;
	} else if (operation === "_raiseToPower") {
		return variable+" **= "+value;
	} else if (operation === "_min") {
		return variable+" min= "+value;
	} else if (operation === "_max") {
		return variable+" max= "+value;
	} else if (operation === "_removeFromArrayByIndex") {
		return "del "+variable+"["+value+"]";
	} else if (operation === "_removeFromArrayByValue") {
		return variable+".remove("+value+")";
	} else {
		error("Unhandled operation "+operation);
	}
}

//Function to handle operators and check whether any of the operands need parentheses.
//Eg: Decompiling Multiply(Add(1,2), 3) would produce "(1+2)*3". As one operand of the multiply
//function has another operand with lower precedence, it needs parentheses.
function decompileOperator(operand1, operator, operand2) {
	

	
	operatorPrecedenceStack.push(operatorPrecedence[operator]);
	var currentPrecedenceIndex = operatorPrecedenceStack.length-1;
	debug("precedence stack = "+operatorPrecedenceStack);
	
	var operands = [operand1];
	if (operator !== "not") {
		operands.push(operand2);
	}
	
	for (var h = 0; h < operands.length; h++) {
		var operandDecompiled = decompile(operands[h]);
	
		var currentPrecedence = operatorPrecedence[operator];
		var needsParentheses = false;
		
		for (var i = currentPrecedenceIndex+1; i < operatorPrecedenceStack.length; i++) {
			if (operatorPrecedenceStack[i] < currentPrecedence || (operatorPrecedenceStack[i] == currentPrecedence && (operator === "-" || operator === "/") && h === 1)) {
				needsParentheses = true;
				operatorPrecedenceStack[currentPrecedenceIndex] = operatorPrecedenceStack[i];
			}
		}
		operatorPrecedenceStack = operatorPrecedenceStack.slice(0, currentPrecedenceIndex+1);
		if (needsParentheses) {
			operandDecompiled = "("+operandDecompiled+")";
		}
		operands[h] = operandDecompiled;
	}
	
	
	
	if (operator === "not") {
		return "not "+operands[0];
	} else {
		return operands[0] + " "+operator+" "+operands[1];
	}
	
}

