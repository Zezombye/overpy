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


//The stack of the files (macros count as "files").
//Is reset at each compilation.
var fileStack = [];

//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule. (for decompilation)
var decompilerGotos = []

//Global variable used for the number of tabs.
//Is reset at each rule. (for decompilation)
var nbTabs = 0;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule. (for decompilation)
var lastLoop = -1;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
var currentArrayElementNames = [];

//Dictionary used for for loops.
//Should be empty at the beginning and end of each rule. (for compilation)
var forLoopVariables = {};

//Timer for for loop variables; when it is reached, delete the corresponding variable.
var forLoopTimers = [];

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition. (for decompilation)
var operatorPrecedenceStack = [];

//Arguments of the format() function for strings.
var formatArgs = [];

//Whether the decompilation at this time is under a normal "for" loop (for decompilation).
var isInNormalForLoop = false;

//Operator precedence, from lowest to highest.
var operatorPrecedence = {
	"or":1,
	"and":2,
	"not":3,
	"==":4,
	"!=":4,
	"<=":4,
	">=":4,
	">":4,
	"<":4,
	"+":5,
	"-":5,
	"*":6,
	"/":6,
	
	//Although in Python the modulo operator has the same precedence as * and /,
	//it must have a higher precedence because (a*b)%c is not the same as a*(b%c).
	"%":7,
	"**":8,
};

//Python operators, from lowest to highest precedence.
var pyOperators = [
	"=",
	"+=",
	"-=",
	"*=",
	"/=",
	"%=",
	"**=",
	"min=",
	"max=",
	"++",
	"--",
	"or",
	"and",
	"not",
	"in",
	"==",
	"!=",
	"<=",
	">=",
	">",
	"<",
	"-",
	"+",
	"/",
	"*",
	"%",
	"**",
];
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

function getFilenameFromPath(path) {
	return path.split('\\').pop().split('/').pop();
}

function getFilePath(pathStr) {
	pathStr = pathStr.trim();
	debug("path str = "+pathStr);
	if (!(pathStr.startsWith("'") && pathStr.endsWith("'")) && !(pathStr.startsWith('"') && pathStr.endsWith('"'))) {
		error("Expected a string but found '"+pathStr+"'");
	}
	pathStr = pathStr.substring(1, pathStr.length-1);
	pathStr = pathStr.replace(/\\("|')/g, "$1");
	pathStr = pathStr.replace(/\\\\/g, "\\");
	debug("Path str is now '"+pathStr+"'");
	return pathStr;
}

function getFileContent(path) {
	
	var fs;
	try {
		fs = require("fs");
	} catch (e) {
		error("Cannot use 'import' statement in browsers");
	}
	try {
		return fs.readFileSync(path);
	} catch (e) {
		error(e);
	}
}

function getFileStackCopy() {
	return fileStack.map(x => Object.assign({}, x));
}

function getConstantKw(type) {
	return constantValues[type].values;
}

//Used for string parsing; splits an array of strings on one or two strings.
//Eg: splitStrTokens(["owo", "uwu", "owo"], "uwu") will return [["owo"], ["owo"]].
function splitStrTokens(tokens, str1, str2) {
	
	var str1Index = -1;
	var str2Index = -1;
	var bracketLevel = 0;
	
	if (str2 !== undefined) {
		debug("Splitting str tokens '"+tokens+"' on '"+str1+"' and '"+str2+"'");
	} else {
		debug("Splitting str tokens '"+tokens+"' on '"+str1+"'");
	}
	
	var i;
	for (i = 0; i < tokens.length; i++) {
		if (tokens[i] === str1 && bracketLevel === 0) {
			str1Index = i;
			break;
		} else if (tokens[i] === "(" || tokens[i] === "¡" || tokens[i] === "¿") {
			bracketLevel++;
		} else if ((tokens[i] === ")" || tokens[i] === "!" || tokens[i] === "?") && bracketLevel > 0) {
			bracketLevel--;
		}
	}
	
	i++;
	
	if (str2 !== undefined) {
		for (; i < tokens.length; i++) {
			if (tokens[i] === str2 && bracketLevel === 0) {
				str2Index = i;
				break;
			} else if (tokens[i] === "(" || tokens[i] === "¡" || tokens[i] === "¿") {
				bracketLevel++;
			} else if ((tokens[i] === ")" || tokens[i] === "!" || tokens[i] === "?") && bracketLevel > 0) {
				bracketLevel--;
			}
		}
	}
	
	//debug("str1Index = "+str1Index+", str2Index = "+str2Index);
	
	if (str1Index === -1) {
		return [tokens];
	} else if (str2Index === -1) {
		return [tokens.slice(0, str1Index), tokens.slice(str1Index+1)]
	} else {
		return [tokens.slice(0, str1Index), tokens.slice(str1Index+1, str2Index), tokens.slice(str2Index+1)]
	}
	
}

//Reverses the comparison operator.
function reverseOperator(content) {
	if (content === "==") return "!=";
	else if (content === '!=') return "==";
	else if (content === '<=') return ">";
	else if (content === '>=') return "<";
	else if (content === '<') return ">=";
	else if (content === '>') return "<=";
	else {
		error("Cannot reverse operator "+content);
	}
}

//Returns true if the given token array is an instruction (not goto/label).
function lineIsInstruction(line, previousLineIsIf) {
	
	//Check for label
	if (line[line.length-1].text === ':' && line[0].text !== "if" && line[0].text !== "for") {
		return false;
	}
	if (line[0].text === "for") {
		return false;
	}
	if (previousLineIsIf && (line[0].text === "goto" || line[0].text === "return" || line[0].text === "continue")) {
		return false;
	}
	
	return true;
}

//Replaces variables A-Z with the provided names (for decompilation).
//Also returns "#define name var" for each name.
function loadVariableNames(names, varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (const [key,value] of Object.entries(names)) {
		var index = alphabet.indexOf(key.toUpperCase());
		if (index < 0) {
			error("Illegal variable "+key);
		} else {
			varKw[index].opy = value;
			result += "#!define "+value+" "+key.toUpperCase()+"\n";
		}
	}
	return result;
}

//Resets variable names to A-Z.
function resetVarNames(varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < alphabet.length; i++) {
		varKw[i].opy = alphabet[i];
	}
}

//Gets the name of a function.
function getName(content) {
	
	if (content === undefined) {
		error("Trying to get name of undefined function");
	}
	
	var bracketPos = getBracketPositions(content);
	
	if (bracketPos.length == 2) {
		var name = content.substring(0, bracketPos[0]);
	} else {
		var name = content;
	}
	
	return name.replace(/\s/g, "");
}

//Returns "player" if the instruction represents an array of players, else the name of the instruction.
//Note: you must only pass the name of the instruction to this function.
function getPlayerVarName(content) {
	if (isSinglePlayerInstruction(content)) {
		return decompile(content);
	} else {
		return "player";
	}
}

//Checks if the (python) instruction represents only a player.
//Used to differenciate player and player[].
//Note: you must only pass the name to this function.
function isSinglePlayerInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a single player instruction");
	
	var playerInstructions = [
		"attacker",
		"getClosestPlayer",
		"eventPlayer",
		"getFarthestPlayer",
		"_firstOf",
		"_lastOf",
		"getFlagCarrier",
		"getPlayerClosestToReticle",
		"_randomValueInArray",
		"victim",
		"_currentArrayElement",
		"isDead",
		"isAlive",
		"isCommunicating",
		"isCommunicatingAny",
		"isCommunicatingAnyEmote",
		"isCommunicatingAnyVoiceline",
		"isCrouching",
		"isUsingAbility1",
		"isUsingAbility2",
		"isHoldingButton",
		"isFiringPrimary",
		"isFiringSecondary",
		"isInAir",
		"isOnGround",
		"isInSpawnRoom",
		"isMoving",
		"isOnObjective",
		"isOnWall",
		"isOnFire",
		"isStanding",
		"isUsingUltimate",
	];
	
	if (playerInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}

//Same as isSinglePlayerInstruction, but for player arrays.
//However, note that these functions aren't mutually exclusive;
//if one of them returns false, the other one will not necessarily return true.
//This is because variables can hold a player and a player array, and we can't know which.
function isPlayerArrayInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a player array instruction");
	
	var playerArrayInstructions = [
		"getDeadPlayers",
		"getLivingPlayers",
		"getPlayers",
		"getPlayersNotOnObjective",
		"getPlayersOnObjective",
		"getPlayersInSlot",
		"getPlayersInViewAngle",
		"getPlayersOnHero",
		"getPlayersInRadius",
	];
	
	if (playerArrayInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}

//Returns 4 spaces per tab level.
function tabLevel(nbTabs) {
	var result = "";
	for (var i = 0; i < nbTabs; i++) {
		result += "    ";
	}
	return result;
}


//Translates a keyword to the other language.
function translate(keyword, toWorkshop, keywordArray) {
	
	if (!toWorkshop) {
		keyword = keyword.toLowerCase();
		if (keywordArray !== stringKw) {
			keyword = keyword.replace(/\s/g, "");
		}
	}
	debug("Translating keyword '"+keyword+"'");
	//debug(keywordArray === stringKw);
	
	//Check for current array element
	if (toWorkshop) {
		for (var i = 0; i < currentArrayElementNames.length; i++) {
			if (keyword === currentArrayElementNames[i]) {
				return translate("_currentArrayElement", true, valueFuncKw);
			}
		}
	}

	for (var i = 0; i < keywordArray.length; i++) {
				
		if (toWorkshop) {
			if (keywordArray[i].opy === keyword) {
				return keywordArray[i][currentLanguage];
			}
		} else {
			if (keywordArray[i][currentLanguage].toLowerCase() === keyword) {
				return keywordArray[i].opy;
			}
		}
		
	}
	
	//Check for numbers
	if (!isNaN(keyword)) {
		//Convert to int then to string to remove unnecessary 0s.
		keyword = Number(keyword).toString();
		return keyword;
	}
	
	error("No match found for keyword '"+keyword+"'");	
}

function topy(keyword, keywordArray) {
	return translate(keyword, false, keywordArray);
}
function tows(keyword, keywordArray) {
	
	//Check if a token was passed, or a string
	if (typeof keyword === "object") {
		fileStack = keyword.fileStack;
		return translate(keyword.text, true, keywordArray);
	} else {
		return translate(keyword, true, keywordArray);
	}
}

//Returns an array of workshop instructions (delimited by a semicolon).
function splitInstructions(content) {
	return splitStrOnDelimiter(content, [';']);
}

//Returns an array of arguments (delimited by a comma).
function getArgs(content) {
	return splitStrOnDelimiter(content, [',']);
}

//Returns an array of strings that are delimited by the given string(s).
//The delimiter is only taken into account if it is not within parentheses and not within a string.
//Example: "azer(1,2), reaz(',,,,')" will return ["azer(1,2)","reaz(',,,,')"] for a comma separator.
function splitStrOnDelimiter(content, delimiter) {
	
	content = content.trim();
	var bracketPos = getBracketPositions(content);
	var bracketPosCheckIndex = 0;
	var delimiterPos = [-delimiter.length];
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	
	for (var i = 0; i < content.length; i++) {
		//Check if the current index is in parentheses
		if (bracketPosCheckIndex < bracketPos.length && i >= bracketPos[bracketPosCheckIndex]) {
			i = bracketPos[bracketPosCheckIndex+1];
			bracketPosCheckIndex += 2;
			
		} else if (!currentPositionIsString && (content.charAt(i) == '"' || content.charAt(i) == '\'')) {
			currentPositionIsString = !currentPositionIsString;
			currentStrDelimiter = content.charAt(i);
		} else if (content.charAt(i) === currentStrDelimiter) {
			currentPositionIsString = !currentPositionIsString;
		} else if (content.charAt(i) == '\\') {
			i++;
		} else if (!currentPositionIsString && content.startsWith(delimiter, i)) {
			delimiterPos.push(i);
		}

	}
	
	delimiterPos.push(content.length);
	
	var result = [];
	for (var i = 0; i < delimiterPos.length-1; i++) {
		var currentStr = content.substring(delimiterPos[i]+delimiter.length, delimiterPos[i+1]);
		currentStr = currentStr.trim();
		if (currentStr.length > 0) {
			result.push(currentStr);
		}
	}
	
	return result;
}

//Same as splitStrOnDelimiter but for a token list.
//If getAllTokens = false, this will only split on the first occurrence of the token.
function splitTokens(tokens, str, getAllTokens=true, rtl=false) {
	
	var result = [];
	var bracketsLevel = 0;
	
	if (rtl) {
		var start = tokens.length-1;
		var end = -1;
		var step = -1;
		var latestDelimiterPos = tokens.length;
	} else {
		var start = 0;
		var end = tokens.length;
		var step = 1;
		var latestDelimiterPos = -1;
	}
	
	//debug("Splitting tokens '"+dispTokens(tokens)+"' on "+str);
	
	for (var i = start; i != end; i+=step) {
		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
			bracketsLevel += step;
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
			bracketsLevel -= step;
		} else if (tokens[i].text === str && bracketsLevel === 0) {
			if (rtl) {
				result.push(tokens.slice(i+1, latestDelimiterPos));
			} else {
				result.push(tokens.slice(latestDelimiterPos+1, i));
			}
			latestDelimiterPos = i;
			if (!getAllTokens) {
				break;
			}
		}
	}
	
	if (bracketsLevel !== 0) {
		error("Lexer broke (bracket level not equal to 0)");
	}
	
	if (rtl) {
		result.push(tokens.slice(end+1, latestDelimiterPos));
	} else {
		result.push(tokens.slice(latestDelimiterPos+1, end));
	}
		
	if (result[0].length === 0 && result.length === 1) {
		return [];
	} else {
		return result;
	}
	
}


//This function returns the index of each first-level opening and closing brackets/parentheses.
//Example: the string "3*(4*(')'))+(4*5)" will return [2, 10, 12, 16].
function getBracketPositions(content, returnFirstPair=false) {
	var bracketsPos = []
	var bracketsLevel = 0;
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	for (var i = 0; i < content.length; i++) {
		if (!currentPositionIsString && startsWithParenthesis(content.substring(i))) {
			bracketsLevel++;
			if (bracketsLevel == 1) {
				bracketsPos.push(i);
			}
		} else if ((content.charAt(i) == ')' || content.charAt(i) == ']' || content.charAt(i) == '}') && !currentPositionIsString) {
			bracketsLevel--;
			if (bracketsLevel == 0) {
				bracketsPos.push(i);
				if (returnFirstPair) {
					break;
				}
			} else if (bracketsLevel < 0) {
				error("Brackets level below 0! (missing opening bracket)");
			}
		} else if (!currentPositionIsString && (content.charAt(i) == '"' || content.charAt(i) == '\'')) {
			currentPositionIsString = !currentPositionIsString;
			currentStrDelimiter = content.charAt(i);
		} else if (content.charAt(i) === currentStrDelimiter) {
			currentPositionIsString = !currentPositionIsString;
		} else if (content.charAt(i) == '\\') {
			i++;
		}
	}
	if (bracketsLevel > 0) {
		error("Brackets level above 0! (missing closing bracket)");
	}
	
	return bracketsPos;
}

//Same as getBracketPositions but for tokens.
function getTokenBracketPos(tokens, returnFirstPair=false) {
	var bracketsPos = []
	var bracketsLevel = 0;
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	for (var i = 0; i < tokens.length; i++) {
		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
			bracketsLevel++;
			if (bracketsLevel == 1) {
				bracketsPos.push(i);
			}
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
			bracketsLevel--;
			if (bracketsLevel === 0) {
				bracketsPos.push(i);
				if (returnFirstPair) {
					break;
				}
			}
		} 
	}
	if (bracketsLevel > 0) {
		error("Brackets level above 0! (missing closing bracket)");
	}
	
	return bracketsPos;
}

//Returns true if the given string starts with a parenthesis (or a bracket/curly bracket).
function startsWithParenthesis(content) {
	if (content[0] == '(' || content[0] == '[' || content[0] == '{') {
		return true;
	}
	return false;
}

//Returns true if c is [A-Za-z\d_@].
function isVarChar(c) {
	return c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '@';
}

//Returns the indent, assuming 1 indent = 4 spaces.
function getIndent(content) {
	var indent = 0;
	var i = 0;
	while (content.startsWith("    ", i)) {
		indent++;
		i += 4;
	}
	return indent;
}

//Converts a token list, or a token object to string.
function dispTokens(content) {
	if (content instanceof Array) {
		var result = "";
		for (var i = 0; i < content.length; i++) {
			result += content[i].text;
			if (i < content.length-1) {
				result += " ";
			}
		}
		return result;
	} else if (typeof content === "string") {
		return content;
	} else if (typeof content === "object") {
		if (content.text === undefined) {
			error("Object is not a token or token list");
		} else {
			return content.text;
		}
	} else {
		error("Undefined content "+content);
	}
}

//Logging stuff
function error(str, token) {
	
	if (token !== undefined) {
		fileStack = token.fileStack;
	}
	
	//var error = "ERROR: ";
	var error = "";
	error += str;
	if (token !== undefined) {
		error += "'"+dispTokens(token)+"'";
	}
	if (fileStack.length !== 0) {
		fileStack.reverse();
		for (var file of fileStack) {
			error += "\n\t| line "+file.currentLineNb+", col "+file.currentColNb+", at "+file.name;
		}
	}
	
	throw new Error(error);
}

function debug(str, arg) {
	//return;
	console.debug("DEBUG: "+str);
}

//ty stackoverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


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


/*var counter = 0;
var counter2 = 0;*/
/*for (var h = 0; h < testvalues.length; h++) {
	var isIn = false;
	for (var i = 0; i < valueKw.length; i++) {
		for (var j = 0; j < valueKw[i][1].length; j++) {
			if (valueKw[i][1][j].toLowerCase() === testvalues[h]["name"].replace(/\s/, "").toLowerCase()) {
				isIn = true;
			}
		}
	}
	if (isIn) {
		counter++;
	} else {
		counter2++;
	}
}*/
/*for (var h = 0; h < testactions.length; h++) {
	var isIn = false;
	for (var i = 0; i < actionKw.length; i++) {
		for (var j = 0; j < actionKw[i][1].length; j++) {
			if (actionKw[i][1][j].toLowerCase() === testactions[h]["name"].replace(/\s/, "").toLowerCase()) {
				isIn = true;
			}
		}
	}
	if (isIn) {
		counter++;
	} else {
		counter2++;
	}
}
console.log(counter);
console.log(counter2);*/

//console.log(decompileAllRules(decompileTest));

/*console.log(decompileAllRules(decompileTest, {
	"a":"currentSectionWalls",
	"b":"tpStarts",
	"c":"tpDests",
	"d":"deathplaneY",
	"e":"roundWinners",
	"f":"mapId",
	"g":"hasFirstInfectionPassed",
	"i":"sectionLoopIndex",
	"j":"level",
	"l":"lateTps",
	"m":"sectionRadiuses",
	"n":"currentSection",
	"o":"firstInfectionLoopIndex",
	"p":"matchTime",
	"q":"countdownProgress",
	"r":"roundProgress",
	"s":"sectionData",
	"t":"triggers",
	"w":"walls",
	"z":"zombieHero",
}, {
	b:"fastFireCountdown",
	c:"tempPos",
	f:"hasWonRound",
	j:"wallLoopIndex",
	l:"wasFirstZombieLastRound",
	z:"team",
}));*/

function decompileAllRules(content, globalVarNames={}, playerVarNames={}) {

	var result = "";
	
	//debug(globalVarNames);
	//debug(playerVarNames);
	
	if (Object.entries(globalVarNames).length !== 0) {
		result += "#Global variables\n\n";
		result += loadVariableNames(globalVarNames, globalVarKw);
		result += "\n\n";
	}
	if (Object.entries(playerVarNames).length !== 0) {
		result += "#Player variables\n\n";
		result += loadVariableNames(playerVarNames, playerVarKw);
		result += "\n\n";
	}

	var bracketPos = [-1].concat(getBracketPositions(content));
	
	//A rule looks like this:
	//rule(title) {...}
	//Therefore, each rule ends every 4th bracket position
	
	
	for (var i = 0; i < bracketPos.length-1; i += 4) {
	//for (var i = 0; i < 4; i += 4) {
		if (i >= bracketPos.length-1) break;
		result += decompileRule(content.substring(bracketPos[i]+1, bracketPos[i+4]+1));
	}
	
	resetVarNames(globalVarKw);
	resetVarNames(playerVarKw);
	
	return result;
	
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
	
	debug("Decompiling rule "+ruleName);
	
	var result = "@Rule "+ruleName+"\n";
	
	var ruleContent = content.substring(bracketPos[2]+1, bracketPos[3]);
	
	var bracketPos2 = [-1].concat(getBracketPositions(ruleContent));
	
	var eventInst = [];
 	var conditions = "";
	var actions = "";
	
	for (var i = 0; i < bracketPos2.length-2; i += 2) {
		var fieldName = topy(ruleContent.substring(bracketPos2[i]+1, bracketPos2[i+1]), ruleKw);
		if (fieldName === "@Event") {
			eventInst = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
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
		result += "@Event "+topy(eventInst[0], eventKw)+"\n";
		if (eventInst.length > 1) {
			//There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
			if (topy(eventInst[1], eventKw) !== "all") {
				result += "@Team "+topy(eventInst[1], eventKw)+"\n";
			}
			
			//Parse the 3rd event instruction
			//Detect if it is a slot or hero
			var eventInst3 = topy(eventInst[2], eventKw.concat(getConstantKw("HERO CONSTANT")))
			if (eventInst3 !== "all") {
				if (eventInst3.startsWith("slot")) {
					result += "@Slot "+eventInst3.replace("slot", "")+"\n";
				} else {
					//We assume it is a hero
					result += "@Hero "+eventInst3.substring("HERO.".length).toLowerCase() + "\n";
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
	return result+"\n\n";
}

function decompileConditions(content) {
	
	var conditions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")));
	
	var result = "";
	result += "if ";
	var condStrs = [];
	for (var i = 0; i < conditions.length; i++) {
		
		var currentCond = decompileRuleCondition(conditions[i]);
		//Check for and-ing with true
		if (currentCond === "true") {
			continue;
		}
		
		if (operatorPrecedenceStack[0] < 2) {
			currentCond = "("+currentCond+")";
		}
		condStrs.push(currentCond);
	}
	var condStr = condStrs.join(" and ");
	
	//This happens if everything is true
	if (condStr === "") {
		condStr = "true";
	}
	result += condStr;
	
	result += ":\n"
	nbTabs = 1;
	
	return result;
}

function decompileActions(content) {
	
	var result = "";
	var actions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")));
	
	//Detect the last loop to know where to place the "while"
	for (var i = 0; i < actions.length; i++) {
		if (topy(getName(actions[i]), actionKw).startsWith("_loop")) {
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
	
	if (actionNb == lastLoop) {
		result += decompile(content, actionKw, {"isLastLoop":true});
	} else {
		
		result += decompile(content, actionKw, 0, {"isLastLoop":false});
	}
	return result;
}

//This function only decompiles conditions that are in the "condition" section of a rule.
//This is needed to handle the binary operators.
function decompileRuleCondition(content) {
	
	debug("Decompiling condition '"+content+"'");
	
	//Reset variable
	operatorPrecedenceStack = [];
	var operators = ["==", "!=", "<=", ">=", "<", ">"];
	
	for (var i = 0; i < operators.length; i++) {
		var operands = splitStrOnDelimiter(content, operators[i]);
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
		var args = getArgs(content.substring(bracketPos[0]+1, bracketPos[1]));
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
	
	//Chase global variable at rate
	if (name === "_chaseGlobalVariableAtRate") {
		
		return "chase("+decompile(args[0], globalVarKw)+", "+decompile(args[1])+", rate="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase global variable over time
	if (name === "_chaseGlobalVariableOverTime") {
		
		return "chase("+decompile(args[0], globalVarKw)+", "+decompile(args[1])+", duration="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase player variable at rate
	if (name === "_chasePlayerVariableAtRate") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, rate={arg2}, {arg3})", args[0], args.slice(1), true)
		
		return result;
	}
	
	//Chase player variable over time
	if (name === "_chasePlayerVariableOverTime") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, duration={arg2}, {arg3})", args[0], args.slice(1), true)
		
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
	
	//Divide
	if (name === "_divide") {
		return decompileOperator(args[0], "/", args[1]);
	}
	
	//Empty array
	if (name === "_emptyArray") {
		return "[]";
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
		var team = decompile(args[0], getConstantKw("TEAM CONSTANT"));
		if (team === "Team.ALL") {
			return "getAllPlayers()";
		} else {
			return "getPlayers("+team+")";
		}
	}
		
	//Global variable
	if (name === "_globalVar") {
		return decompile(args[0], globalVarKw);
	}
		
	//Hero
	if (name === "_hero") {
		return decompile(args[0], getConstantKw("HERO CONSTANT"));
	}

	//Hud text
	if (name === "_hudText") {
		var header = decompile(args[1]);
		var subheader = decompile(args[2]);
		var subtext = decompile(args[3]);
		var specVisibility = "";
		if (args.length > 11) {
			specVisibility = decompile(args[10], getConstantKw("SPECTATOR VISIBILITY"));
			if (specVisibility === "SpecVisibility.DEFAULT") {
				specVisibility = "";
			} else {
				specVisibility = ", "+specVisibility;
			}
		}
		var funcName = "";
		var texts = "";
		var colors = "";
		if (subheader === "null" && subtext === "null") {
			funcName = "hudHeader";
			texts = header;
			colors = decompile(args[6]);
		} else if (header === "null" && subtext === "null") {
			funcName = "hudSubheader";
			texts = subheader;
			colors = decompile(args[7]);
		} else if (subheader === "null" && subheader === "null") {
			funcName = "hudSubtext";
			texts = subtext;
			colors = decompile(args[8]);
		} else {
			funcName = "hudText";
			texts = header+", "+subheader+", "+subtext;
			colors = decompile(args[6])+", "+decompile(args[7])+", "+decompile(args[8]);
		}
		return funcName+"("+decompile(args[0])+", "+texts+", "+decompile(args[4], getConstantKw("HUD LOCATION"))+", "+decompile(args[5])+", "+colors+", "+decompile(args[9])+specVisibility+")";
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
	
	//Modify global var
	if (name === "_modifyGlobalVar") {
		return decompileModifyVar(decompile(args[0], globalVarKw), args[1], decompile(args[2]));
	}
	
	//Modify global var at index
	if (name === "_modifyGlobalVarAtIndex") {
		return decompileModifyVar(decompile(args[0], globalVarKw), args[2], decompile(args[3]), decompile(args[1]));
	}
	
	//Modify player var
	if (name === "_modifyPlayerVar") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+decompile(args[1], playerVarKw), args[2], decompile(args[3]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modify player var at index
	if (name === "_modifyPlayerVarAtIndex") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+decompile(args[1], playerVarKw), args[3], decompile(args[4]), decompile(args[2]))
		
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
	
	//Or
	if (name === "_or") {
		return decompileOperator(args[0], "or", args[1]);
	}
	
	//Player variable
	if (name === "_playerVar") {
		if (isSinglePlayerInstruction(args[0])) {
			return decompile(args[0])+"."+decompile(args[1], playerVarKw);
		} else {
			if (isInNormalForLoop) {
				return "[player2."+decompile(args[1], playerVarKw)+" for player2 in "+decompile(args[0])+"]";
			} else {
				return "[player."+decompile(args[1], playerVarKw)+" for player in "+decompile(args[0])+"]";
			}
		}
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
		var roundType = topy(args[1], getConstantKw("ROUNDING TYPE"));
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
		return decompile(args[0], globalVarKw)+" = "+decompile(args[1]);
	}
	
	//Set global var at index
	if (name === "_setGlobalVarAtIndex") {
		return decompile(args[0], globalVarKw)+"["+decompile(args[1])+"] = "+decompile(args[2]);
	}
	
	//Set player var
	if (name === "_setPlayerVar") {
		return decompilePlayerFunction("{player}.{arg0} = {arg1}", args[0], args.slice(1), true);
	}
	
	//Set player var at index
	if (name === "_setPlayerVarAtIndex") {
		return decompilePlayerFunction("{player}.{arg0}[{arg1}] = {arg2}", args[0], args.slice(1), true);
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingGlobalVariable") {
		return "stopChasingVariable("+args[0]+")";
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingPlayerVariable") {
		return decompilePlayerFunction("stopChasingVariable({player}.{args})", args[0], args.slice(1));
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
	
	//String
	if (name === "_string") {
		
		//Blizzard likes making parsing difficult apparently,
		//cause the "reevaluation on string" used with hud is the same as the "string" function.
		
		if (args.length == 0) {
			return "Reeval.STRING";
		}
				
		var [str, format] = decompileString(args[0], args[1], args[2], args[3], decompileArgs.strDepth);
				
		if (decompileArgs.strDepth !== 0 && decompileArgs.strDepth !== undefined) {
			return [str, format];
		}
		
		result = '"'+str+'"';
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return result;
	}
				
	//Value in array
	if (name === "_valueInArray") {
		return decompile(args[0])+"["+decompile(args[1])+"]";
	}
	
	//Wait
	if (name === "_wait") {
		var arg2 = decompile(args[1]);
		if (arg2 === "Wait.IGNORE_CONDITION") {
			return "wait("+decompile(args[0])+")";
		}
		else {
			return "wait("+decompile(args[0])+", "+arg2+")";
		}
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

function decompileString(content, arg1, arg2, arg3, strDepth) {
		
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
		} else if (stringKw.indexOf(decompiledArg[0]) > -1) {
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

//Automatically generates a for loop for player function, if that player function takes an array as argument.
//The content is a python translation and must contain {player} and {args} to replace strings by the args.
//If separateArgs = true, {arg0}, {arg1} etc must be provided instead of {args}.
function decompilePlayerFunction(content, player, args, separateArgs=false, isAction=true) {
	
	var result = "";
	var hasNormalForLoopBeenSetInThisFunction = false;
	
	
	if (isSinglePlayerInstruction(player)) {
		result += content.replace("\{player\}", decompile(player))
		
	} else {
		if (isAction) {
			result += "for player in "+decompile(player)+":\n";
			result += tabLevel(nbTabs+1)+content.replace("\{player\}", "player")
			isInNormalForLoop = true;
			hasNormalForLoopBeenSetInThisFunction = true;
		} else {
			if (isInNormalForLoop) {
				result += "["+content.replace("\{player\}", "player2")+" for player2 in "+decompile(player)+"]";
			} else if (currentArrayElementNames.indexOf("player") > -1) {
				result += "["+content.replace("\{player\}", "player3")+" for player3 in "+decompile(player)+"]";
			} else {
				result += "["+content.replace("\{player\}", "player")+" for player in "+decompile(player)+"]";
			}
		}
	}
	
	
	//Parse arguments
	if (!separateArgs) {
		var argsStr = "";
		for (var i = 0; i < args.length; i++) {
			if (args[i].length === 1) {
				argsStr += decompile(args[i], playerVarKw);
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
			if (args[i].length === 1) {
				result = result.replace("\{arg"+i+"\}", decompile(args[i], playerVarKw))
			} else {
				result = result.replace("\{arg"+i+"\}", decompile(args[i]))
			}
		}
	}
	if (hasNormalForLoopBeenSetInThisFunction) {
		isInNormalForLoop = false;
	}
	return result;
}

//Function used for "modify player variable" and "modify global variable".
//Note: arguments passed to this function must already be decompiled.
function decompileModifyVar(variable, operation, value, index) {
	if (index !== undefined) {
		variable += "["+index+"]";
	}
	operation = topy(operation, getConstantKw("OPERATION"));
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
			if (operatorPrecedenceStack[i] < currentPrecedence) {
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



/*
Really a class, but I couldn't manage to make the "class" keyword work.
*/
function Macro(text, replacement, args) {
	
	if (args === undefined || args.length === 0) {
		this.isFunction = false;
	} else {
		this.isFunction = true;
		this.args = args;
	}
	this.text = text;
	this.replacement = replacement;
}

/*
Splits the content to return an array of rules, with an array of (effective) lines.
We cannot do split('\n') because we need to handle backslashed lines, and multi-line functions.
For example, the following will count as 1 line:

function(arg1, arg2,
	arg3, arg4)
	
As well as the following:

#!define owo(x) function(x)\
function(y)

While we're at it, this function also automatically removes comments,
and splits rules as well as macros.
It also resolves macros, and tokenizes.
*/

function tokenize(content) {
	
	if (!content.endsWith('\n')) {
		content += '\n';
	}
	
	//Not the full list of tokens; namely, brackets aren't in this list.
	//Sorted by longest first, for greediness.
	var tokens = [
		"==",
		"!=",
		"<=",
		">=",
		"+=",
		"-=",
		"*=",
		"/=",
		"%=",
		"**=",
		"<",
		">",
		"=",
		"++",
		"--",
		"+",
		"-",
		",",
		"/",
		"%",
		"**",
		"*",
		".",
		":",
		"\\",
	];
	
	
	var rules = [];
	var macros = [];
	
	var isInSpecial = false;
	//var isInString = false;
	var currentStrDelimiter = "";
	var isInLineComment = false;
	var isInStrComment = false;
	var isInMacro = false;
	var currentStrCommentDelimiter = "";
	var bracketsLevel = 0;
	var isInRule = false;
	var currentRule = {};
	var currentRuleLine = {};
	//var currentToken = {"text":""};
	var currentMacro = {};
	var isBackslashed = false;
	var isInTextToken = false;
	
	//"Timer" used for the end of a multiline string.
    var strCommentTimer = 0;
    
    fileStack = [{
        "name": "<main>",
        "currentLineNb": 1,
        "currentColNb": 0,
        "remainingChars": content.length+1, //does not matter
    }];
	
	var i = 0;
	
	function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		currentRuleLine.tokens.push({
			"fileStack": getFileStackCopy(),
			"text":text
		});
		
		i += text.length-1;
		fileStack[fileStack.length-1].currentColNb += text.length-1;
		fileStack[fileStack.length-1].remainingChars -= text.length-1;
    }
    
    //Length = length of the macro resolution
    //callCols, callLines = how many cols/lines the macro CALL takes
    //callNbChars = how many characters the macro call takes
    //Name: used in stack trace, should be macro name or file name
    //startingCol, startingLine: the col/line of the macro start in the file it is declared
    function addFile(length, callNbChars, callCols, callLines, name, startingCol, startingLine) {
        fileStack.push({
            name,
            remainingChars: length,
            callNbChars,
            callCols,
            callLines,
            currentLineNb: 0+startingLine,
            currentColNb: 0+startingCol,
        });
        //console.log(JSON.stringify(fileStack));
    }
	
	function newRuleLine() {
		
		if (currentRuleLine.tokens !== undefined && currentRuleLine.tokens.length > 0) {
			currentRule.lines.push(currentRuleLine);
		}
		
		currentRuleLine = {
			"indentLevel":0,
			"tokens":[]
		};
	}
	
	newRuleLine();
		
	for (i = 0; i < content.length; i++) {
		
		//console.log(i);
        //await sleep(5);
        //console.log(JSON.stringify(fileStack));

        isInSpecial = (isInLineComment || isInStrComment || isInMacro);
		
		if (fileStack[fileStack.length-1].remainingChars > 0) {
			fileStack[fileStack.length-1].remainingChars--;
			if (fileStack[fileStack.length-1].remainingChars === 0) {
				//debug("macro lines = "+macroLines+", macro cols = "+macroCols);
				fileStack[fileStack.length-2].currentLineNb += fileStack[fileStack.length-1].callLines;
                fileStack[fileStack.length-2].currentColNb += fileStack[fileStack.length-1].callLines-1;
                fileStack[fileStack.length-2].remainingChars -= fileStack[fileStack.length-1].callNbChars;
                fileStack.pop();
			}
        }
        
        fileStack[fileStack.length-1].currentColNb++;
				
		if (strCommentTimer > 0) {
			strCommentTimer--;
			if (strCommentTimer === 0) {
				isInStrComment = false;
			}
		}
		
		if (content[i] === '\n') {
			if (!isBackslashed) {
				if (isInMacro) {
					isInMacro = false;
					macros.push(parseMacro(currentMacro));
				}
			}
			//For some reason, in Python, line comments aren't affected by backslashes before new lines.
			if (isInLineComment) {
				isInLineComment = false;
				
			
			//Do not end the instruction if there is a line break inside a function, or the line is backslashed.
			} else if (bracketsLevel === 0 && isInRule && !isBackslashed) {
				newRuleLine();
				
            }
            
            fileStack[fileStack.length-1].currentLineNb++;
            fileStack[fileStack.length-1].currentColNb = 0;
			
		} else if (!isInStrComment && !isInMacro && !isInLineComment) {
			
			if (content[i] === "\t") {
				if (currentRuleLine.tokens.length === 0) {
					currentRuleLine.indentLevel += 4;
				}
			} else if (content[i] === ' ') {
                //increase indentation if no token yet; else, do nothing
				if (currentRuleLine.tokens.length === 0) {
			    	currentRuleLine.indentLevel++;
                }
			} else if (content[i] === '\\') {
				//do nothing
			} else if (content[i] === '(' || content[i] === '[' || content[i] === '{') {
				bracketsLevel++;
				addToken(content[i]);
				
			} else if (content[i] === ')' || content[i] === ']' || content[i] === '}') {
				bracketsLevel--;
				if (bracketsLevel < 0) {
					error("Brackets level below 0");
				}
				addToken(content[i]);
				
			} else if (content.startsWith("#!", i)) {
				if (!isInRule) {
					isInMacro = true;
					currentMacro = {
                        "fileStack":getFileStackCopy(),
						"content":""
					};
				} else {
					error("Cannot declare macro inside a rule");
				}
				
			} else if (content[i] === '#') {
				isInLineComment = true;
			
			} else if (content.startsWith("'''", i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = "'''";
				
			} else if (content.startsWith('"""', i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = '"""';
				
			} else if (content[i] === '"' || content[i] === '\'') {
				currentStrDelimiter = content[i];
				//Get to the end of the string
				var j = i+1;
				for (; j < content.length; j++) {
					
					//Test for potentially unclosed string
					if (!isBackslashed && content[j] === '\n') {
						error("Unclosed string");
					}
					
					if (!isBackslashed && content[j] === currentStrDelimiter) {
						break;
					}
						
					if (content[j] === '\\') {
						isBackslashed = true;
					} else {
						isBackslashed = false;
					}
					
					
				}
				
				j += 1; //account for closing delimiter
				
				if (j > i) {
					addToken(content.substring(i, j));
				} else {
					error("Failed to parse string '"+content.substring(i, j)+"' (malformed string?)");
				}
			} else {
				
				
				//Get token
                var j = i;
                //Increases j as long as there are characters that can compose a word
				for (; j < content.length && isVarChar(content[j]); j++);
                
                //If j == i, then there wasn't a word (but an operator)
				if (j > i) {
					if (content.substring(i, j) === "@Rule") {
						isInRule = true;
						rules.push(currentRule);
						currentRule = {
							"fileStack":getFileStackCopy(),
							"lines":[]
						};
						newRuleLine();
					} else if (content.substring(i, j) === "import") {

                        var endOfLine = content.indexOf('\n', i);
                        var path = getFilePath(content.substring(j, endOfLine));
                        var importedFileContent = ""+getFileContent(path);
                        
                        content = content.substring(0, i) + importedFileContent + content.substring(endOfLine);
                        addFile(importedFileContent.length, endOfLine-i, endOfLine-i, 0, getFilenameFromPath(path), 0, 0);
                        i--;
                        fileStack[fileStack.length-1].remainingChars++;

                        continue;

                    } else if (!isInRule) {
						error("Found code outside a rule : "+content[i]);
					}

					var macroWasFound = false;

					//Test each macro
					for (var k = 0; k < macros.length; k++) {
						if (content.substring(i,j) === macros[k].name) {

							var text;
							var replacement;
							var macroCols = 0;
							var macroLines = 0;
							
							if (macros[k].isFunction) {
								//debug("Resolving function macro "+macros[k].name);
								var bracketPos = getBracketPositions(content.substring(i), true);
								text = content.substring(i, i+bracketPos[1]+1);
								var macroArgs = getArgs(content.substring(i+bracketPos[0]+1, i+bracketPos[1]));
								replacement = resolveMacro(macros[k], macroArgs);
								
							} else {
								//debug("Resolving normal macro "+macros[k].name);
								text = macros[k].name;
								replacement = macros[k].replacement;
							}
							
							content = content.substring(0, i) + replacement + content.substring(i+text.length);
							
							if (text.indexOf('\n') >= 0) {
								macroCols = text.length - text.lastIndexOf('\n');
								macroLines = text.split('\n').length-1;
							} else {
								macroCols = text.length;
							}

							if (replacement === undefined) {
								error("Replacement is undefined");
							}

							addFile(replacement.length, text.length, macroCols, macroLines, macros[k].name, macros[k].startingCol, macros[k].fileStack[macros[k].fileStack.length-1].currentLineNb);
							
							//debug("Text: "+text);
							//debug("Replacement: "+replacement);
							
							k = 0;
							i--;
							fileStack[fileStack.length-1].remainingChars++;
							macroWasFound = true;
						}
					}
					
					if (!macroWasFound) {
						//Handle the special case of min= and max= operators
						if ((content.substring(i,j) === "min" || content.substring(i,j) === "max") && content[i+"min".length] === '=') {
							j++;
						}
						addToken(content.substring(i, j))
					}
				} else {
					
					var hasTokenBeenFound = false;
					//Test each remaining token
					for (var h = 0; h < tokens.length; h++) {
						if (content.startsWith(tokens[h], i)) {
							addToken(content.substring(i, i+tokens[h].length));
							hasTokenBeenFound = true;
							break;
						}
					}
					
					if (!hasTokenBeenFound && content[i] !== '\r') {
						error("Unknown token '"+content[i]+"'");
					}
				}
			}
			
		} else if (isInStrComment && content.startsWith(currentStrCommentDelimiter, i)) {
			strCommentTimer = 3;
			
		}
		
		
		if (content[i] === '\\') {
			isBackslashed = true;
		} else {
			isBackslashed = false;
		}
		
		if (isInMacro) {
			currentMacro.content += content[i];
		}
	}
	
	rules.push(currentRule);
	
	//console.log("macros = ");
	//console.log(macros);
	console.log(rules);
	
	return rules.slice(1)
	
}

function resolveMacro(macro, args=[]) {

	if (macro.isFunction) {
		//debug("Args: "+args);
		if (args.length != macro.args.length) {
			error("Wrong number of arguments for macro "+macro.name);
        }
        
        if (macro.isScript) {
            var scriptContent = getFileContent(macro.scriptPath);
            var vars = "";
            for (var i = 0; i < args.length; i++) {
                vars += "var "+macro.args[i]+"="+args[i]+";";
            }
            scriptContent = vars + '\n'+scriptContent;
            try {
                var result = eval(scriptContent);
            } catch (e) {
                var stackTrace = e.stack.split('\n').slice(1).reverse();
                var encounteredEval = false;
                for (var line of stackTrace) {
                    line = line.trim();
                    var name = line.substring("at ".length, line.indexOf("(")).trim();
                    if (name === "eval") {
                        name = getFilenameFromPath(macro.scriptPath);
                        encounteredEval = true;
                    }
                    if (encounteredEval) {
                        var colNb = parseInt(line.substring(line.lastIndexOf(":")+1, line.lastIndexOf(")")));
                        var lineNb = parseInt(line.substring(line.substring(0, line.lastIndexOf(":")).lastIndexOf(":")+1, line.lastIndexOf(":")));
                        fileStack.push({
                            name: name,
                            currentLineNb: lineNb-1,
                            currentColNb: colNb,
                        })
                    }
                }
                error(e);
            }
            return result;
        } else {
		
            var result = macro.replacement;
            //debug("result 1 = "+result);
            
            //Replace macro argument names with their values
            for (var i = 0; i < macro.args.length; i++) {
                result = result.replace(new RegExp("\\b"+macro.args[i]+"\\b", 'g'), args[i])
            }
            
            //debug("result 2 = "+result);
            result = result.replace(new RegExp("\\\\\\n", 'g'), '\n');
            //debug("result 3 = "+result);
            return result;
        }
	} else {
		return macro.replacement;
	}
}

function parseMacro(macro) {
	
	macro.content = macro.content.substring("#!define ".length);
	var bracketPos = getBracketPositions(macro.content);
	
	if (bracketPos.length === 0 || macro.content.indexOf(" ") < bracketPos[0]) {
		//Not a function macro
		macro.isFunction = false;
		macro.text = macro.content.substring(0, macro.content.indexOf(" ")).trim();
		macro.name = macro.text;
        macro.replacement = macro.content.substring(macro.content.indexOf(" ")).trim();
        macro.startingCol = "#!define ".length+macro.content.indexOf(" ")+macro.content.substring(macro.content.indexOf(" ")).search(/\S/)+1;
		
	} else {
		//Function macro
		macro.isFunction = true;
		macro.text = macro.content.substring(0, bracketPos[1]+1).trim();
		macro.name = macro.content.substring(0, bracketPos[0]).trim();
		macro.replacement = macro.content.substring(bracketPos[1]+1).trim();
        macro.args = getArgs(macro.content.substring(bracketPos[0]+1, bracketPos[1]));
        macro.startingCol = "#!define ".length+bracketPos[1]+1+macro.content.substring(bracketPos[1]+1).search(/\S/)+1;

        //Test for script macro
        if (macro.replacement.startsWith("__script__(")) {
            macro.isScript = true;
            macro.scriptPath = getFilePath(macro.replacement.substring("__script__(".length, macro.replacement.length-1));
        } else {
            macro.isScript = false;
        }
    }
    
    //console.log(macro);

	return macro;
	
}

//Tokenizes string
function tokenizeString(str) {
	
	var tokenList = []
	var originalColNb = fileStack[fileStack.length-1].currentColNb;
	
	debug("Tokenizing string '"+str+"'");
	
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		
		fileStack[fileStack.length-1].currentColNb = originalColNb+i;
		var currentToken = "";
		var hasTokenBeenFound = false;
		
		//Test tokens
		for (var j = 0; j < strTokens.length; j++) {
			if (str.startsWith(strTokens[j], i)) {
				currentToken = strTokens[j];
				hasTokenBeenFound = true;
				break;
			}
		}
		
		if (!hasTokenBeenFound) {
			//Test numbers
			var j = i;
			for (; (str[j] >= '0' && str[j] <= '9') || str[j] === '.' || str[j] === '-'; j++);
			
			if (j !== i) {
				currentToken = str.substring(i, j);
				hasTokenBeenFound = true;
			}
		}
		
		//Test for formatting
		if (!hasTokenBeenFound) {
			if (str.startsWith("{}", i)) {
				currentToken = "{}";
				hasTokenBeenFound = true;
			}
		}

		//Test for heroes
		if (!hasTokenBeenFound) {
			for (var hero of getConstantKw("HERO CONSTANT")) {
				var heroName = hero.opy.substring("Hero.".length).toLowerCase();
				console.log(heroName);
				if (str.startsWith(heroName, i)) {
					currentToken = "_h"+heroName;
					hasTokenBeenFound = true;
				}
			}
		}
				
		if (!hasTokenBeenFound) {
			var j = i+1;
			for (; str[j] >= 'a' && str[j] <= 'z'; j++);
			error("No string translation found for '"+str.substring(i, j)+"'");
		}
		
		tokenList.push(currentToken);
		i += currentToken.length-1;
		
	}
	
	return tokenList;
}
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

function compile(content) {
	
	if (typeof window !== "undefined") {
		var t0 = performance.now();
	}
	fileStack = [];
	var rules = tokenize(content);
	//console.log(rules);

	var result = "";
	for (var i = 0; i < rules.length; i++) {
	//for (var i = 26; i < 28; i++) {
		result += compileRule(rules[i]);
	}
	if (typeof window !== "undefined") {
		var t1 = performance.now();
		console.log("Compilation time: "+(t1-t0)+"ms");
	}
	return result;
}


function compileRule(rule) {
	
	fileStack = rule.fileStack;
	var result = "";
	
	if (currentArrayElementNames.length !== 0) {
		error("Current array element names length isn't 0");
	}
	
	forLoopTimers = [];
	if (Object.entries(forLoopVariables).length !== 0) {
		console.log(forLoopVariables);
		error("For loop variables isn't empty");
	}
	
	//The first line should always start with @Rule.
	if (rule.lines[0].tokens[0].text !== "@Rule") {
		error("Lexer broke (rule not starting with '@Rule'?)");
	} else if (rule.lines[0].tokens.length !== 2) {
		error("Malformed rule declaration (found "+rule.lines[0].tokens.length+") tokens");
	}
	
	result += tows("@Rule", ruleKw)+" ("+rule.lines[0].tokens[1].text+") {\n";
	result += tabLevel(1)+tows("@Event", ruleKw)+" {\n";
	
	var isInEvent = true;
	var isInActions = false;
	var eventType = "";
	var isEventTeamDefined = false;
	var isEventPlayerDefined = false;
	
	for (var i = 1; i < rule.lines.length+1; i++) {
		//Check for loop var timer
		//console.log(forLoopTimers);
		//console.log(i);
		for (var j = 0; j < forLoopTimers.length; j++) {
			if (forLoopTimers[j][0] === i) {
				delete forLoopVariables[forLoopTimers[j][1]];
			}
		}
		
		if (i >= rule.lines.length) {
			break;
		}
		
		
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}
		
		fileStack = rule.lines[i].tokens[0].fileStack;	
		
		if (rule.lines[i].tokens[0].text.startsWith("@")) {
			if (!isInEvent) {
				error("Annotation found after code");
			} else {
				if (rule.lines[i].tokens[0].text === "@Event") {
					if (rule.lines.length === 2) {
						result += tabLevel(2)+tows("global", eventKw)+";\n";
						eventType = "global";
					} else {
						result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
						eventType = rule.lines[i].tokens[1].text;
					}
					
				} else if (rule.lines[i].tokens[0].text === "@Team") {
					if (isEventTeamDefined) {
						error("Event team defined twice");
					}
					
					isEventTeamDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Hero") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n";
						isEventTeamDefined = true;
					}
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("Hero."+rule.lines[i].tokens[1].text.toUpperCase(), getConstantKw("HERO CONSTANT"))+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Slot") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n"+tabLevel(2);
						isEventTeamDefined = true;
					}
					
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("slot"+rule.lines[i].tokens[1].text, eventKw)+";\n";
					
				} else {
					error("Unknown annotation");
				}
			}
		} else {
			if (isInEvent) {
				if (!isEventTeamDefined && eventType !== "global") {
					result += tabLevel(2)+tows("all", eventKw)+";\n";
				}
				if (!isEventPlayerDefined && eventType !== "global") {
					result += tabLevel(2)+tows("all", eventKw)+";\n";
				}
				isInEvent = false;
				result += tabLevel(1)+"}\n\n";
			}
			
			var areAllLinesAfterCurrentLineIndented = true;
			//Check if all of the lines have indent level non-0
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel === 0) {
					areAllLinesAfterCurrentLineIndented = false;
					break;
				}
			}
			//If without indentation = (rule) condition
			if (rule.lines[i].tokens[0].text === "if" && rule.lines[i].indentLevel === 0 && areAllLinesAfterCurrentLineIndented && !isInActions) {
				result += tabLevel(1)+tows("_conditions", ruleKw)+" {\n";
				result += parseRuleCondition(rule.lines[i].tokens);
				result += tabLevel(1)+"}\n\n";
			} else {
				
				if (rule.lines[i].tokens[0].text === "do") {
					if (rule.lines[i].tokens.length !== 2 || rule.lines[i].tokens[1].text !== ':') {
						error("Do instruction must be 'do:'");
					} else if (isInActions) {
						error("Do instructions must be at the beginning of the rule");
					}
					continue;
				} 
				
				if (!isInActions) {
					result += tabLevel(1)+tows("_actions", ruleKw)+" {\n";
					isInActions = true;
				}
				
				//Check for "if"
				if (rule.lines[i].tokens[0].text === "if") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("If statement must end with ':'");
					}
					
					var isSkipIf = true;
					var isConditionTrueCheck = false;
					var isConditionFalseCheck = false;
					var invertCondition = false;
					var skipIfOffset;
					var hasGoto = false;
					var hasAbort = false;
					var hasContinue = false;
					//var condition = "(" + parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":true});
					
					//Check if there is a goto
					if (rule.lines[i+1].tokens[0].text === "goto") {
						if (rule.lines[i+1].tokens.length < 2) {
							error("Malformed goto");
						}
						
						//Check if the goto is of the form "goto loc+xxx"
						if (rule.lines[i+1].tokens[1].text === "loc") {
							skipIfOffset = parse(rule.lines[i+1].tokens.slice(3))
							
						} else {
							//Search for label
							var label = rule.lines[i+1].tokens[1].text;
							var labelOffset = 0;
							var foundLabel = false;
							for (var j = i+1; j < rule.lines.length; j++) {
								if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
									labelOffset++;
								} else if (rule.lines[j].tokens[0].text === label) {
									foundLabel = true;
									if (rule.lines[j].tokens.length !== 2 || rule.lines[j].tokens[1].text !== ':') {
										error("Label must end with ':'");
									}
									break;
								}
							}
							if (!foundLabel) {
								error("Could not find label "+label);
							}
							skipIfOffset = labelOffset;
						}
						hasGoto = true;
						
					//Check for return (abort)
					} else if (rule.lines[i+1].tokens[0].text === "return") {
						isSkipIf = false;
						hasAbort = true;
						
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 3) {
							isConditionTrueCheck = true;
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 4) {
							isConditionFalseCheck = true;
						}
						
					} else if (rule.lines[i+1].tokens[0].text === "continue") {
						isSkipIf = false;
						hasContinue = true;
						
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 3) {
							isConditionTrueCheck = true;
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 4) {
							isConditionFalseCheck = true;
						}
					} else {
						
						//Check how much instructions there is after the "if" (do not count gotos or lbls)
						var nbInstructionsIf = 0;
						var ifIndent = rule.lines[i].indentLevel;
						var reachedEndOfRule = true;
						var j = i+1;
						for (; j < rule.lines.length; j++) {
							if (rule.lines[j].indentLevel > ifIndent) {
								if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
									nbInstructionsIf++;
								}
							} else {
								reachedEndOfRule = false;
								break;
							}
						}
						
						if (reachedEndOfRule) {
							isSkipIf = false;
							hasAbort = true;
							invertCondition = true;
						} else {
							skipIfOffset = nbInstructionsIf;
							if (skipIfOffset <= 0) {
								error("If instruction must have at least one sub-instruction");
							}
							invertCondition = true;
						}
					}
					
					result += tabLevel(2);
					if (isSkipIf) {
						result += tows("_skipIf", actionKw);
					} else if (isConditionTrueCheck) {
						if (hasAbort) {
							result += tows("_abortIfConditionIsTrue", actionKw);
						} else if (hasContinue) {
							result += tows("_loopIfConditionIsTrue", actionKw);
						}
					} else if (isConditionFalseCheck) {
						if (hasAbort) {
							result += tows("_abortIfConditionIsFalse", actionKw);
						} else if (hasContinue) {
							result += tows("_loopIfConditionIsFalse", actionKw);
						}
					} else if (hasContinue) {
						result += tows("_loopIf", actionKw);
					} else if (hasAbort) {
						result += tows("_abortIf", actionKw);
					} else {
						error("weird if");
					}
					result += "(";
					if (!isConditionTrueCheck && !isConditionFalseCheck) {
						result += parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":invertCondition});
					}
					if (isSkipIf) {
						result += ", "+skipIfOffset;
					}
					result += ");\n";
					if (hasGoto || hasAbort || hasContinue) {
						i++;
					}
					
				//Check for "for"
				} else if (rule.lines[i].tokens[0].text === "for") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("For instruction must end with ':'");
					}
					
					var inOperands = splitTokens(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), "in", false);
					if (inOperands.length !== 2) {
						error("For instruction must contain 'in'");
					} else if (inOperands[0].length !== 1) {
						error("There can only be 1 token between 'for' and 'in'");
					}
					var forVarName = inOperands[0][0].text;
					if (forLoopVariables[forVarName] !== undefined) {
						error("Variable "+forVarName+" is already used");
					}
					forLoopVariables[forVarName] = inOperands[1];
					//Check amount of lines
					var forIndent = rule.lines[i].indentLevel;
					var j = i+1;
					for (; j < rule.lines.length && rule.lines[j].indentLevel > forIndent; j++);
					if (j === i) {
						error("For loop contains no instructions");
					}
					forLoopTimers.push([j, forVarName]);
					
					
				//Check for "while"
				} else if (rule.lines[i].tokens[0].text === "while") {
					result += tabLevel(2);
					if (rule.lines[i].tokens.length === 1) {
						error("While what?");
					}
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text === ":") {
						error("While statement must not end by a colon");
					}
					if (rule.lines[i].tokens[1].text === "true" && rule.lines[i].tokens.length === 2) {
						result += tows("_loop", actionKw);
					} else {
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION") {
							result += tows("_loopIfConditionIsTrue", actionKw);
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION") {
							result += tows("_loopIfConditionIsFalse", actionKw);
						} else {
							result += tows("_loopIf", actionKw)+"("+parse(rule.lines[i].tokens.slice(1))+")";
						}
					}
					
					result += ";\n";
					
				//Check for goto
				} else if (rule.lines[i].tokens[0].text === 'goto') {
					var skipOffset = 0;
					if (rule.lines[i].tokens.length < 2) {
						error("Malformed goto");
					}
					
					//Check if the goto is of the form "goto loc+xxx"
					if (rule.lines[i].tokens[1].text === "loc") {
						skipOffset = parse(rule.lines[i].tokens.slice(3))
						
					} else {
						//Search for label
						var label = rule.lines[i].tokens[1].text;
						var labelOffset = 0;
						var foundLabel = false;
						for (var j = i+1; j < rule.lines.length; j++) {
							if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
								labelOffset++;
							} else if (rule.lines[j].tokens[0].text === label) {
								foundLabel = true;
								if (rule.lines[j].tokens.length !== 2 || rule.lines[j].tokens[1].text !== ':') {
									error("Label must end with ':'");
								}
								break;
							}
						}
						if (!foundLabel) {
							error("Could not find label "+label);
						}
						skipOffset = labelOffset;
					}
					result += tabLevel(2)+tows("_skip", actionKw)+"("+skipOffset+");\n";
					
				//Check for del
				} else if (rule.lines[i].tokens[0].text === 'del') {
					
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ']') {
						error("Del keyword must be followed by an array membership");
					}
					
					var bracketPos = getTokenBracketPos(rule.lines[i].tokens);
					
					var variable = rule.lines[i].tokens.slice(1, bracketPos[bracketPos.length-2])
					var member = rule.lines[i].tokens.slice(bracketPos[bracketPos.length-2]+1, rule.lines[i].tokens.length-1)
					
					debug("Parsing del keyword with var = '"+dispTokens(variable)+"' and member = '"+dispTokens(member)+"'");
					
					result += tabLevel(2);
					result += parseAssignment(variable, member, true, "_removeFromArrayByIndex");
					result += ";\n";
					
				} else if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text === ':') {
					continue;
				} else {
					result += tabLevel(2);
					result += parse(rule.lines[i].tokens, {"isWholeInstruction":true});
					result += ";\n";
				}
			}
		}
	}
	
	if (isInActions || isInEvent) {
		//End actions
		result += tabLevel(1)+"}\n";
	}
	
	//End rules
	result += "}\n\n";
	
	return result;
}

/*
The main parse function.
*/
function parse(content, parseArgs={}) {
	
	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty");
	}
	
	fileStack = content[0].fileStack;
	
	debug("Parsing '"+dispTokens(content)+"'");
	
	//Parse operators
	for (var i = 0; i < pyOperators.length; i++) {
		var operands = splitTokens(content, pyOperators[i], false);
		if (operands.length === 2) {
			
			//The operator is present; parse it
			if (pyOperators[i] === "=") {
				return parseAssignment(operands[0], operands[1], false);
			} else if (pyOperators[i] === "or") {
				return tows("_or", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "and") {
				return tows("_and", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "not") {
				return tows("not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "in") {
				return tows("_arrayContains", valueFuncKw)+"("+parse(operands[1])+", "+parse(operands[0])+")";
			} else if (pyOperators[i] === "==" || pyOperators[i] === '!=' || pyOperators[i] === '<=' || pyOperators[i] === '>=' || pyOperators[i] === '<' || pyOperators[i] === '>' ) {
				var pyOperator = pyOperators[i];
				if (parseArgs.invertCondition === true) pyOperator = reverseOperator(pyOperator);
				return tows("_compare", valueFuncKw)+"("+parse(operands[0])+", "+pyOperator+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "+=") {
				return parseAssignment(operands[0], operands[1], true, "_add");
			} else if (pyOperators[i] === "-=") {
				return parseAssignment(operands[0], operands[1], true, "_subtract");
			} else if (pyOperators[i] === "*=") {
				return parseAssignment(operands[0], operands[1], true, "_multiply");
			} else if (pyOperators[i] === "/=") {
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
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_add");
			} else if (pyOperators[i] === "--") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_subtract");
			} else if (pyOperators[i] === "/") {
				return tows("_divide", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "*") {
				return tows("_multiply", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "%") {
				return tows("_modulo", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "**") {
				return tows("_raiseToPower", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "-") {
				
				//Check for unary operator
				if (operands[0].length === 0 || pyOperators.indexOf(operands[0][operands[0].length-1].text) >= 0) {
					//Do nothing; parse it later
					continue;
				} else {
					return tows("_subtract", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
				}
				return tows("_not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "+") {
				return tows("_add", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else {
				error("Unhandled operator "+pyOperators[i]);
			}
			
			break;
			
		}
	}
	
	//Check for current array element variable name
	if (content.length === 1) {
		if (currentArrayElementNames.indexOf(content[0].text) >= 0) {
			return tows("_currentArrayElement", valueFuncKw);
		}
	}
	
	//Check for for loop variable name
	if (content.length === 1) {
		if (forLoopVariables[content[0].text] !== undefined) {
			//console.log(forLoopVariables[content[0].text]);
			return parse(forLoopVariables[content[0].text]);
		}
	}
	
	//Check for literal number
	var nbTest = dispTokens(content).replace(/ /g, "")
	if (!isNaN(nbTest)) {
		return nbTest;
	}
	
	//Check for global variable
	if (content.length === 1 && content[0].text.length === 1 && content[0].text >= 'A' && content[0].text <= 'Z') {
		return tows("_globalVar", valueFuncKw)+"("+content[0].text+")";
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
	
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[1], operands[0], parseArgs);
	}
	
	//Check for parentheses
	if (content[0].text === '(') {
		return parse(content.slice(1, content.length-1));
	}
	
	//Parse args and name of function.
	var name = content[0].text;
	var args = [];
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else if (content[1].text === '[') {
			return parseArrayMembership(content);
		}
	} else {
		if (name.startsWith('"') || name.startsWith("'")) {
			formatArgs = [];
			return parseString(tokenizeString(name.substring(1, name.length-1)));
			//error("owo");
		}
		
		return tows(name, funcKw);
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
	
	if (name === "ceil") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundUp", getConstantKw("ROUNDING TYPE"))+")";
	}
	
	if (name === "chase") {
		
		var funcName = "_chase";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
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
	
	if (name === "floor") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundDown", getConstantKw("ROUNDING TYPE"))+")";
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
		var wsnull = [{
			text: "null",
		}]
		if (name === "hudHeader") {
			args.splice(2, 0, wsnull);
			args.splice(3, 0, wsnull);

			args.splice(7, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudSubheader") {
			args.splice(1, 0, wsnull);
			args.splice(3, 0, wsnull);

			args.splice(6, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudHeader") {
			args.splice(1, 0, wsnull);
			args.splice(2, 0, wsnull);

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
		return tows("getPlayers", valueFuncKw)+"("+parse([
			{"text": "Team"},
			{"text": "."},
			{"text": "ALL"},
		])+")";
	}
	
	if (name === "round") {
		if (args.length !== 1) {
			error("round() only takes one argument, you maybe meant to use ceil() or floor().");
		} else {
			return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundToNearest", getConstantKw("ROUNDING TYPE"))+")";
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
			} else if (args[3][0].text !== "exclude" || args[2][1].text !== "=") {
				error("4th arg for this raycast must be 'exclude = xxxx'");
			} else if (args[4][0].text !== "includePlayerObjects" || args[2][1].text !== "=") {
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
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
		}
		
		return tows(funcName, actionKw)+"("+result+")";
	}
	
	if (name === "teamHasHero" || name === "getPlayersOnHero" || name === "getNumberOfHeroes") {
		return tows("_!"+name, valueFuncKw)+"("+parse(args[1])+", "+parse(args[0])+")";
	}
	
	
	if (name === "wait") {
		var result = tows("_wait", actionKw)+"("+parse(args[0])+", ";
		if (args.length === 1) {
			result += tows("Wait.IGNORE_CONDITION", getConstantKw("WAIT BEHAVIOR"))
		} else {
			result += parse(args[1]);
		}
		result += ")";
		return result;
	}
	
	//Handle functions with no arguments
	if (args.length === 0) {
		return tows(name+"()", funcKw);
	}
	
	//Default case (not a special function).
	var result = tows(name, funcKw)+"(";
	for (var i = 0; i < args.length; i++) {
		result += parse(args[i]);
		if (i < args.length-1) {
			result += ", ";
		}
	}
	result += ")";
	return result;
	
}

//Parses string
function parseString(content) {
	if (!content instanceof Array) {
		error("Content must be list of str");
	}
	
	var matchStr;
	var tokens = [];
	var hasMatchBeenFound = false;
	
	debug("Parsing string '"+content+"'");
	
	//Test surround strings
	for (var j = 0; j < surroundStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = surroundStrKw[j].opy.substring(0, surroundStrKw[j].opy.indexOf("{0}")).toLowerCase();
		var token2 = surroundStrKw[j].opy.substring(surroundStrKw[j].opy.indexOf("{0}")+"{0}".length).toLowerCase();
		debug("Testing str match on '"+token1+"{0}"+token2+"'");
		if (content[0] === token1 && content[content.length-1] === token2) {
			hasMatchBeenFound = true;
			matchStr = tows(surroundStrKw[j].opy, surroundStrKw);
			//Note: it is assumed all surround strings have a length of only 1 character for each side.
			tokens.push(content.slice(1, content.length-1));
			break;
		}
		tokens = []
	}
	
	//Test ternary string
	for (var j = 0; j < ternaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase();
		var token2 = ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase();
		tokens = splitStrTokens(content, token1, token2);
		if (tokens.length === 3) {
			hasMatchBeenFound = true;
			matchStr = tows(ternaryStrKw[j].opy, ternaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test binary strings
	for (var j = 0; j < binaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			hasMatchBeenFound = true;
			matchStr = tows(binaryStrKw[j].opy, binaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test prefix strings
	for (var j = 0; j < prefixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase();
		if (content[0] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(prefixStrKw[j].opy, prefixStrKw);
			tokens.push(splitStrTokens(content, token1)[1]);
			break;
		}
		tokens = []
	}
	
	//Test postfix strings
	for (var j = 0; j < postfixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = postfixStrKw[j].opy.substring("{0}".length).toLowerCase();
		if (content[content.length-1] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(postfixStrKw[j].opy, postfixStrKw);
			tokens.push(splitStrTokens(content, token1)[0]);
			break;
		}
		tokens = []
	}
	
	
	//Test normal strings
	if (content.length === 1) {
		for (var j = 0; j < normalStrKw.length && !hasMatchBeenFound; j++) {
			var token1 = normalStrKw[j].opy.toLowerCase();
			if (content[0] === token1) {
				hasMatchBeenFound = true;
				matchStr = token1;
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
			error("Parser broke I guess? (content = '"+JSON.stringify(content)+"')");
		}
		
		if (content[0].startsWith("_h")) {
			return tows("_hero", valueFuncKw)+"("+tows("Hero."+content[0].substring(2).toUpperCase(), getConstantKw("HERO CONSTANT"))+")";
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
	
	var result = tows("_string", valueFuncKw)+"(\""+matchStr+'"';
	//debug("tokens = ")
	//console.log(tokens);
	
	if (tokens.length > 0) {
		result += ", "+parseString(tokens[0]);
	} else {
		result += ", "+tows("null", valueFuncKw);
	}
	if (tokens.length > 1) {
		result += ", "+parseString(tokens[1]);
	} else {
		result += ", "+tows("null", valueFuncKw);
	}
	if (tokens.length > 2) {
		result += ", "+parseString(tokens[2]);
	} else {
		result += ", "+tows("null", valueFuncKw);
	}
	
	result += ")";
	return result;
	
}


//Parses membership (the "." operator).
function parseMember(object, member, parseArgs={}) {
	
	//debug("Parsing member "+dispTokens(member)+" of object "+dispTokens(object));
	
	var name = member[0].text;
	//debug("name = "+name);
	var args = [];
	if (member.length > 1 && member[1].text === '(') {
		args = splitTokens(member.slice(2, member.length-1), ",");
	}
	
	if (name.length === 1 && name >= 'A' && name <= 'Z') {
		return tows("_playerVar", valueFuncKw)+"("+parse(object)+", "+name+")";
	} else if ([
			"Beam", "Button", "Clip", "Color", "Comms", "Effect", "Icon", "Impulse", "Invis", "LosCheck", "Position", "IconReeval", "EffectReeval", "HudReeval", "WorldTextReeval", "ChaseReeval", "DamageReeval", "FacingReeval", "ThrottleReeval", "Relativity", "SpecVisibility", "Status", "Team", "Throttle", "Transform", "Wait"
			].indexOf(object[0].text) >= 0) {
		return tows(object[0].text+"."+name, constantKw)

	} else if (name === "append") {
		if (parseArgs.isWholeInstruction === true) {
			return parseAssignment(object, args[0], true, "_appendToArray");
			
		} else {
			return tows("_appendToArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		}
		
	} else if (name === "exclude") {
		return tows("_removeFromArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		
	} else if (name === "format") {
		formatArgs = args;
		var result = parseString(tokenizeString(object[0].text.substring(1, object[0].text.length-1)));
		formatArgs = [];
		return result;
		
	} else if (name === "getHitPosition") {
		return parse(object, {raycastType:"getHitPosition"});
		
	} else if (name === "getNormal") {
		return parse(object, {raycastType:"getNormal"});
		
	} else if (name === "getPlayerHit") {
		return parse(object, {raycastType:"getPlayerHit"});
		
	} else if (name === "hasLoS") {
		return parse(object, {raycastType:"hasLoS"});
		
	} else if (object[0].text === "Hero") {
		return tows("_hero", valueFuncKw)+"("+tows("Hero."+name, getConstantKw("HERO CONSTANT"))+")";
		
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
		
	} else if (object[0].text === "Vector") {
		return tows("Vector."+name, valueFuncKw);
		
	} else if (name === "x") {
		return tows("_xComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else if (name === "y") {
		return tows("_yComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else if (name === "z") {
		return tows("_zComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else {
		
		//Check for player function
		try {
			var translation = tows("_&"+name, funcKw);
		} catch (Error) {
			error("Unhandled member ", member[0]);
		}
		
		var result = translation+"("+parse(object);
		for (var i = 0; i < args.length; i++) {
			result += ", "+parse(args[i]);
		}
		result += ")";
		return result;
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
		if (variable[0].text.length !== 1 || variable[0].text < 'A' || variable[0].text > 'Z') {
			error("Unauthorized global variable '"+variable[0].text+"'");
		}
		result += tows("_"+func+"GlobalVar", actionKw)+"("+variable[0].text+", ";
		
	} else {
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(variable, ".", false, true);
		if (operands.length === 2) {
			
			//console.log(operands);
			
			//Check for array
			if (operands[0].length > 1 && operands[0][1].text === '[') {
				result += tows("_"+func+"PlayerVarAtIndex", actionKw)
						+"("+parse(operands[1])+", "+operands[0][0].text+", "
						+parse(operands[0].slice(2, operands[0].length-1))+", ";
			} else {
				if (operands[0].length > 1) {
					error("Unauthorised player variable", operands[1]);
				}
				result += tows("_"+func+"PlayerVar", actionKw)+"("+parse(operands[1])+", "+operands[0][0].text+", ";
			}
			
		} else {
			if (variable[1].text === '[') {
				result += tows("_"+func+"GlobalVarAtIndex", actionKw)+"("+variable[0].text+", "+parse(variable.slice(2, variable.length-1))+", ";
			} else {
				error("Unauthorized global variable", variable);
			}
		}
	}
	
	if (modify) {
		result += tows(modifyArg, getConstantKw("OPERATION"))+", ";
	}
	
	result += parse(value)+")";
	return result;
}

//Parses an array index such as A[1].
function parseArrayMembership(array, membership) {
	
	//[0] -> first of
	if (membership.length === 1 && membership[0].text === '0') {
		return tows("_firstOf", valueFuncKw)+"("+parse(array)+")";
		
	//[-1] -> last of
	} else if (membership.length === 2 && membership[0].text === '-' && membership[1].text === '1') {
		return tows("_lastOf", valueFuncKw)+"("+parse(array)+")";
		
	} else {
		return tows("_valueInArray", valueFuncKw)+"("+parse(array)+", "+parse(membership)+")";
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
				//Not a filtered array (eg: [player.C for player in playersInRadius()])
				var forOperands = splitTokens(inOperands[0], "for");
				if (forOperands.length !== 2) {
					error("Malformed 'x for y in z'");
				}
				var forVarName = forOperands[1][0].text;
				if (forLoopVariables[forVarName] !== undefined) {
					error("Variable "+forVarName+" is already used");
				}
				forLoopVariables[forVarName] = inOperands[1];
				
				var result = parse(forOperands[0]);
				delete forLoopVariables[forVarName];
				return result;
				
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
	
	//If there is any "or" in the condition, there is only one instruction.
	var orOperands = splitTokens(content, "or");
	
	if (orOperands.length > 1) {
		debug("Condition contains 'or'");
		result += tabLevel(2)+parse(content);
	} else {
		var andOperands = splitTokens(content, "and");
		
		for (var i = 0; i < andOperands.length; i++) {
			
			debug("Parsing condition '"+dispTokens(andOperands[i])+"'");
			//console.log(andOperands);
			
			result += tabLevel(2);
			
			var comparisonOperators = ["==", "!=", "<=", ">=", "<", ">"];
			var comparisonOperands;
			var hasComparisonOperand = false;
			
			for (var j = 0; j < comparisonOperators.length; j++) {
				comparisonOperands = splitTokens(andOperands[i], comparisonOperators[j]);
				if (comparisonOperands.length > 1) {
					if (comparisonOperands.length != 2) {
						error("Chained comparisons are not allowed (eg: a == b == c)");
					}
					result += parse(comparisonOperands[0]);
					result += " "+comparisonOperators[j]+" "+parse(comparisonOperands[1]);
					hasComparisonOperand = true;
					break;
				}
			}
			
			if (!hasComparisonOperand) {
				if (andOperands[i][0].text === "not") {
					result += parse(andOperands[i].slice(1)) + " == "+tows("false", valueFuncKw);
				} else {
					result += parse(andOperands[i]) + " == "+tows("true", valueFuncKw);
				}
			}
			
			result += ";\n";
		}
	}
	
	return result;
}

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

var actionKw = [
    {
        "opy": "return",
        "en": "abort",
        "description": "Stops execution of the action list.",
        "args": null
    },
    {
        "opy": "_abortIf",
        "en": "abortIf",
        "description": "Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the execution is stopped.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_abortIfConditionIsFalse",
        "en": "abortIfConditionIsFalse",
        "description": "Stops execution of the action list if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action.",
        "args": []
    },
    {
        "opy": "_abortIfConditionIsTrue",
        "en": "abortIfConditionIsTrue",
        "description": "Stops execution of the action list if all conditions in the condition list are true. If any are false, execution continues with the next action.",
        "args": []
    },
    {
        "opy": "_&allowButton",
        "en": "allowButton",
        "description": "Undoes the effect of the disallow button action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose button is being reenabled.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is being reenabled.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "_&applyImpulse",
        "en": "applyImpulse",
        "description": "Applies an instantaneous change in velocity to the movement of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose velocity will be changed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the impulse will be applied. This value is normalized internally.",
                "type": "DIRECTION",
                "default": "VECTOR"
            },
            {
                "name": "SPEED",
                "description": "The magnitude of the change to the velocities of the player or players.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "RELATIVE",
                "default": "TO WORLD"
            },
            {
                "name": "MOTION",
                "description": "Specifies whether existing velocity that is counter to direction should first be cancelled out before applying the impulse.",
                "type": "MOTION",
                "default": "CANCEL CONTRARY MOTION"
            }
        ]
    },
    {
        "opy": "bigMessage",
        "en": "bigMessage",
        "description": "Displays a large message above the reticle that is visible to specific players.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the message.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The message to be displayed.",
                "type": "ANY",
                "default": "STRING"
            }
        ]
    },
    {
        "opy": "_chaseGlobalVariableAtRate",
        "en": "chaseGlobalVariableAtRate",
        "description": "Gradually modifies the value of a global variable at a specific rate. (A global variable is a variable that belongs to the game itself.)",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to modify gradually.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "description": "The amount of change that will happen to the variable's value each second.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "CHASE RATE REEVALUATION",
                "default": "DESTINATION AND RATE"
            }
        ]
    },
    {
        "opy": "_chaseGlobalVariableOverTime",
        "en": "chaseGlobalVariableOverTime",
        "description": "Gradually modifies the value of a global variable over time. (A global variable is a variable that belongs to the game itself.)",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to modify gradually.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "CHASE TIME REEVALUATION",
                "default": "DESTINATION AND DURATION"
            }
        ]
    },
    {
        "opy": "_chasePlayerVariableAtRate",
        "en": "chasePlayerVariableAtRate",
        "description": "Gradually modifies the value of a player variable at a specific rate. (A player variable is a variable that belongs to a specific player.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify gradually.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "description": "The amount of change that will happen to the variable's value each second.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_chasePlayerVariableOverTime",
        "en": "chasePlayerVariableOverTime",
        "description": "Gradually modifies the value of a player variable over time. (A player variable is a variable that belongs to a specific player.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify gradually.",
                "type": "VARIABLE",
                "default": "VARIABLE"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&clearStatusEffect",
        "en": "clearStatus",
        "description": "Clears a status that was applied from a set status action from one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players from whom the status will be removed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "STATUS",
                "description": "The status to be removed from the player or players.",
                "type": "STATUS",
                "default": "HACKED"
            }
        ]
    },
    {
        "opy": "_&communicate",
        "en": "communicate",
        "description": "Causes one or more players to use an emote, voice line, or other equipped communication.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to perform the communication.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TYPE",
                "description": "The type of communication.",
                "type": "COMMUNICATE",
                "default": "VOICE LINE UP"
            }
        ]
    },
    {
        "opy": "createBeam",
        "en": "createBeamEffect",
        "description": "Creates an in-world beam effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the effect.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "TYPE",
                "description": "The type of effect to be created.",
                "type": "BEAM EFFECT",
                "default": "GOOD BEAM"
            },
            {
                "name": "START POSITION",
                "description": "The effect's start position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "EVENT PLAYER"
            },
            {
                "name": "END POSITION",
                "description": "The effect's end position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "EVENT PLAYER"
            },
            {
                "name": "COLOR",
                "description": "The color of the beam to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects. Only the \"good\" and \"bad\" beam effects can have color applied.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The effect will keep asking for and using new values from reevaluated inputs.",
                "type": "EFFECT REEVALUATION",
                "default": "VISIBLE TO, POSITION, AND RADIUS"
            }
        ]
    },
    {
        "opy": "createDummy",
        "en": "createDummyBot",
        "description": "Adds a new bot to the specified slot on the specified team so long as the slot is available. This bot will only move, fire, or use abilities if executing workshop actions.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero that the bot will be. If more than one hero is provided, one will be chosen at random.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team on which to create the bot. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "SLOT",
                "description": "The player slot which will receive the bot (-1 for first available slot). Up to 6 bots may be added to each team, or 12 bots to the free-for-all team, regardless of lobby settings.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "POSITION",
                "description": "The initial position where the bot will appear.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "FACING",
                "description": "The initial direction that the bot will face.",
                "type": "DIRECTION",
                "default": "VECTOR"
            },
        ]
    },
    {
        "opy": "createEffect",
        "en": "createEffect",
        "description": "Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the effect.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "TYPE",
                "description": "The type of effect to be created.",
                "type": "CREATE EFFECT",
                "default": "SPHERE"
            },
            {
                "name": "COLOR",
                "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "POSITION",
                "description": "The effect's position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The radius of this effect.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "EFFECT REEVALUATION",
                "default": "VISIBLE TO, POSITION, AND RADIUS"
            }
        ]
    },
    {
        "opy": "_hudText",
        "en": "createHudText",
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "TEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    {
        "opy": "createIcon",
        "en": "createIcon",
        "description": "Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the icon.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "POSITION",
                "description": "The icon's position. If this value is a player, then the icon will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "ICON",
                "description": "The icon to be created.",
                "type": "ICON",
                "default": "ARROW: DOWN"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The icon will keep asking for and using new values from reevaluated inputs.",
                "type": "ICON REEVALUATION",
                "default": "VISIBLE TO AND POSITION"
            },
            {
                "name": "ICON COLOR",
                "description": "The color of the icon to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "SHOW WHEN OFFSCREEN",
                "description": "Should this icon appear even when it is behind you?",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "createInWorldText",
        "en": "createIn-worldText",
        "description": "Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the in-world text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed.",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "POSITION",
                "description": "The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "SCALE",
                "description": "The text's scale.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "CLIPPING",
                "description": "Specifies whether the text can be seen through walls or is instead clipped.",
                "type": "WORLD TEXT CLIPPING",
                "default": "CLIP AGAINST SURFACES"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.",
                "type": "WORLD TEXT REEVALUATION",
                "default": "VISIBLE TO, POSITION, AND STRING"
            },
            {
                "name": "TEXT COLOR",
                "description": "Specifies the color of the in-world text to use.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    {
        "opy": "damage",
        "en": "damage",
        "description": "Applies instantaneous damage to one or more players, possibly killing the players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will receive damage.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGER",
                "description": "The player who will receive credit for the damage. A damager of null indicates no player will receive credit.",
                "type": "PLAYER",
                "default": "NULL"
            },
            {
                "name": "AMOUNT",
                "description": "The amount of damage to apply. This amount may be modified by buffs, debuffs, or armor.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "declareDraw",
        "en": "declareMatchDraw",
        "description": "Instantly ends the match in a draw. This action has no effect in free-for-all modes.",
        "args": []
    },
    {
        "opy": "declarePlayerVictory",
        "en": "declarePlayerVictory",
        "description": "Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The winning player.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "declareRoundVictory",
        "en": "declareRoundVictory",
        "description": "Declare a team as the current round winner. This only works in the control and elimination game modes",
        "args": [
            {
                "name": "ROUND WINNING TEAM",
                "description": "Round winning team",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "declareTeamVictory",
        "en": "declareTeamVictory",
        "description": "Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The winning team.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "destroyAllDummies()",
        "en": "destroyAllDummyBots",
        "description": "Removes all dummy bots from the match.",
        "args": []
    },
    {
        "opy": "destroyAllEffects()",
        "en": "destroyAllEffects",
        "description": "Destroys all effect entities created by create effect.",
        "args": []
    },
    {
        "opy": "destroyAllHudTexts()",
        "en": "destroyAllHudText",
        "description": "Destroys all hud text that was created by the create hud text action.",
        "args": []
    },
    {
        "opy": "destroyAllIcons()",
        "en": "destroyAllIcons",
        "description": "Destroys all icon entities created by create icon.",
        "args": []
    },
    {
        "opy": "destroyAllInWorldText()",
        "en": "destroyAllIn-worldText",
        "description": "Destroys all in-world text created by create in-world text.",
        "args": []
    },
    {
        "opy": "destroyDummy",
        "en": "destroyDummyBot",
        "description": "Removes the specified dummy bot from the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team to remove the dummy bot from. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "TEAM",
                "default": "TEAM"
            },{
                "name": "SLOT",
                "description": "The slot to remove the dummy bot from.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "destroyEffect",
        "en": "destroyEffect",
        "description": "Destroys an effect entity that was created by create effect.",
        "args": [
            {
                "name": "ENTITY",
                "description": "Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "PLAYER",
                "default": "LAST CREATED ENTITY"
            }
        ]
    },
    {
        "opy": "destroyHudText",
        "en": "destroyHudText",
        "description": "Destroys hud text that was created by create hud text.",
        "args": [
            {
                "name": "TEXT ID",
                "description": "Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST TEXT ID"
            }
        ]
    },
    {
        "opy": "destroyIcon",
        "en": "destroyIcon",
        "description": "Destroys an icon entity that was created by create icon.",
        "args": [
            {
                "name": "ENTITY",
                "description": "Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "PLAYER",
                "default": "LAST CREATED ENTITY"
            }
        ]
    },
    {
        "opy": "destroyInWorldText",
        "en": "destroyIn-worldText",
        "description": "Destroys in-world text that was created by create in-world text.",
        "args": [
            {
                "name": "TEXT ID",
                "description": "Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST TEXT ID"
            }
        ]
    },
    {
        "opy": "disableAnnouncer()",
        "en": "disableBuilt-inGamemodeAnnouncer",
        "description": "Disables game mode announcements from the announcer until reenabled or the match ends.",
        "args": []
    },
    {
        "opy": "disableGamemodeCompletion()",
        "en": "disableBuilt-inGamemodeCompletion",
        "description": "Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.",
        "args": []
    },
    {
        "opy": "disableMusic()",
        "en": "disableBuilt-inGamemodeMusic",
        "description": "Disables all game mode music until reenabled or the match ends.",
        "args": []
    },
    {
        "opy": "_&disableRespawn",
        "en": "disableBuilt-inGamemodeRespawning",
        "description": "Disables automatic respawning for one or more players, only allowing respawning by scripting commands.",
        "args": [
            {
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "disableScoring()",
        "en": "disableBuilt-inGamemodeScoring",
        "description": "Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.",
        "args": []
    },
    {
        "opy": "_&disableDeathSpectateAllPlayers",
        "en": "disableDeathSpectateAllPlayers",
        "description": "Undoes the effect of the enable death spectate all players action for or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose default death spectate behavior is restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&disableDeathSpectateTargetHud",
        "en": "disableDeathSpectateTargetHud",
        "description": "Undoes the effect of the enable death spectate target hud action for or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will revert to seeing their own hud while death spectating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&disallowButton",
        "en": "disallowButton",
        "description": "Disables a logical button for one or more players such that pressing it has no effect.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose button is being disabled.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is being disabled.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "enableAnnouncer()",
        "en": "enableBuilt-inGamemodeAnnouncer",
        "description": "Undoes the effect of the disable built-in game mode announcer action.",
        "args": []
    },
    {
        "opy": "enableGamemodeCompletion()",
        "en": "enableBuilt-inGamemodeCompletion",
        "description": "Undoes the effect of the disable built-in game mode completion action.",
        "args": []
    },
    {
        "opy": "enableMusic()",
        "en": "enableBuilt-inGamemodeMusic",
        "description": "Undoes the effect of the disable built-in game mode music action.",
        "args": []
    },
    {
        "opy": "_&enableRespawn",
        "en": "enableBuilt-inGamemodeRespawning",
        "description": "Undoes the effect of the disable built-in game mode respawning action for one or more players.",
        "args": [
            {
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "enableScoring()",
        "en": "enableBuilt-inGamemodeScoring",
        "description": "Undoes the effect of the disable built-in game mode scoring action.",
        "args": []
    },
    {
        "opy": "_&enableDeathSpectateAllPlayers",
        "en": "enableDeathSpectateAllPlayers",
        "description": "Allows one or more players to spectate all players when dead, as opposed to only allies.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be allowed to spectate all players.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&enableDeathSpectateTargetHud",
        "en": "enableDeathSpectateTargetHud",
        "description": "Causes one or more players to see their spectate target's hud instead of their own while death spectating.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will begin seeing their spectate targets hud while death spectating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "goToAssembleHeroes()",
        "en": "goToAssembleHeroes",
        "description": "Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.",
        "args": []
    },
    {
        "opy": "heal",
        "en": "heal",
        "description": "Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose health will be restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALER",
                "description": "The player who will receive credit for the healing. A healer of null indicates no player will receive credit.",
                "type": "PLAYER",
                "default": "NULL"
            },
            {
                "name": "AMOUNT",
                "description": "The amount of healing to apply. This amount may be modified by buff or debuffs. Healing is capped by each player's max health.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "kill",
        "en": "kill",
        "description": "Instantly kills one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be killed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "KILLER",
                "description": "The player who will receive credit for the kill. A killer of null indicates no player will receive credit.",
                "type": "PLAYER",
                "default": "NULL"
            }
        ]
    },
    {
        "opy": "_loop",
        "en": "loop",
        "description": "Restarts the action list from the beginning. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": []
    },
    {
        "opy": "_loopIf",
        "en": "loopIf",
        "description": "Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the loop will occur.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_loopIfConditionIsFalse",
        "en": "loopIfConditionIsFalse",
        "description": "Restarts the action list from the beginning if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": []
    },
    {
        "opy": "_loopIfConditionIsTrue",
        "en": "loopIfConditionIsTrue",
        "description": "Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": []
    },
    {
        "opy": "_modifyGlobalVar",
        "en": "modifyGlobalVariable",
        "description": "Modifies the value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The global variable to modify.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "OPERATION",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_modifyGlobalVarAtIndex",
        "en": "modifyGlobalVariableAtIndex",
        "description": "Modifies the value of a global variable at an index, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The global variable to modify.",
                "type": "VARIABLE",
                "default": "A"
            },{
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "OPERATION",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&addToScore",
        "en": "modifyPlayerScore",
        "description": "Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose score will change.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "SCORE",
                "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_modifyPlayerVar",
        "en": "modifyPlayerVariable",
        "description": "Modifies the value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "OPERATION",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_modifyPlayerVarAtIndex",
        "en": "modifyPlayerVariableAtIndex",
        "description": "Modifies the value of a player variable at an index, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify.",
                "type": "VARIABLE",
                "default": "A"
            },{
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "OPERATION",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "addToTeamScore",
        "en": "modifyTeamScore",
        "description": "Modifies the score of one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams whose score will be changed.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "SCORE",
                "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "pauseMatchTime()",
        "en": "pauseMatchTime",
        "description": "Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.",
        "args": []
    },
    {
        "opy": "playEffect",
        "en": "playEffect",
        "description": "Plays an effect at a position in the world. The lifetime of this effect is short, so it does not need to be updated or destroyed.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the effect.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "TYPE",
                "description": "The type of effect to be created.",
                "type": "PLAY EFFECT",
                "default": "GOOD EXPLOSION"
            },
            {
                "name": "COLOR",
                "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "POSITION",
                "description": "The effect's position. If this value is a player, then the effect will play at the player's position. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The effect's radius in meters.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&preloadHero",
        "en": "preloadHero",
        "description": "Preemptively loads the specified hero or heroes into memory using the skins of the specified player or players, available memory permitting. Useful whenever rapid hero changing is possible and the next hero is known.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HERO",
                "description": "The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array, the heroes towards the beginning of the array are prioritized.",
                "type": "HERO",
                "default": "HERO"
            }
        ]
    },
    {
        "opy": "_&forceButtonPress",
        "en": "pressButton",
        "description": "Forces one or more players to press a button virtually for a single frame.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players for whom the virtual button input will be forced.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The button to be pressed.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "_&resetHeroAvailability",
        "en": "resetPlayerHeroAvailability",
        "description": "Restores the list of heroes available to one or more players to the list specified by the game settings. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose hero list is being reset.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&respawn",
        "en": "respawn",
        "description": "Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to respawn.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&resurrect",
        "en": "resurrect",
        "description": "Instantly resurrects one or more players at the location they died with no transition.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be resurrected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&setAbility1Enabled",
        "en": "setAbility1Enabled",
        "description": "Enables or disables ability 1 for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to ability 1 is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use ability 1. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_&setAbility2Enabled",
        "en": "setAbility2Enabled",
        "description": "Enables or disables ability 2 for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to ability 2 is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_&setAimSpeed",
        "en": "setAimSpeed",
        "description": "Sets the aim speed of one or more players to a percentage of their normal aim speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose aim speed will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TURN SPEED PERCENT",
                "description": "The percentage of normal aim speed to which the player or players will set their aim speed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setDamageDealt",
        "en": "setDamageDealt",
        "description": "Sets the damage dealt of one or more players to a percentage of their raw damage dealt.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose damage dealt will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGE DEALT PERCENT",
                "description": "The percentage of raw damage dealt to which the player or players will set their damage dealt.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setDamageReceived",
        "en": "setDamageReceived",
        "description": "Sets the damage received of one or more players to a percentage of their raw damage received.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose damage received will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGE RECEIVED PERCENT",
                "description": "The percentage of raw damage received to which the player or players will set their damage received.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setFacing",
        "en": "setFacing",
        "description": "Sets the facing of one or more players to the specified direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose facing will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the player or players will face. This value is normalized internally.",
                "type": "DIRECTION",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "RELATIVE",
                "default": "TO WORLD"
            }
        ]
    },
    {
        "opy": "_setGlobalVar",
        "en": "setGlobalVariable",
        "description": "Stores a value into a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to store the value into.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_setGlobalVarAtIndex",
        "en": "setGlobalVariableAtIndex",
        "description": "Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored into the array.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setGravity",
        "en": "setGravity",
        "description": "Sets the movement gravity for one or more players to a percentage regular movement gravity.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement gravity will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "GRAVITY PERCENT",
                "description": "The percentage of regular movement gravity to which the player or players will set their personal movement gravity.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setHealingDealt",
        "en": "setHealingDealt",
        "description": "Sets the healing dealt of one or more players to a percentage of their raw healing dealt.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose healing dealt will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALING DEALT PERCENT",
                "description": "",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setHealingReceived",
        "en": "setHealingReceived",
        "description": "Sets the healing received of one or more players to a percentage of their raw healing received.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose healing received will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALING RECEIVED PERCENT",
                "description": "The percentage of raw healing received to which the player or players will set their healing received.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setInvisibility",
        "en": "setInvisible",
        "description": "Causes one or more players to become invisible to either all other players or just enemies.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will become invisible.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INVISIBLE TO",
                "description": "Specifies for whom the player or players will be invisible.",
                "type": "INVISIBLE TO",
                "default": "ALL"
            }
        ]
    },
    {
        "opy": "setMatchTime",
        "en": "setMatchTime",
        "description": "Sets the current match time (which is visible at the top of the screen). This can be used to shorten or extend the duration of a match or to change the duration of assemble heroes or setup.",
        "args": [
            {
                "name": "TIME",
                "description": "The match time in seconds.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setMaxHealth",
        "en": "setMaxHealth",
        "description": "Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose max health will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALTH PERCENT",
                "description": "The percentage of raw max health to which the player or players will set their max health.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setMoveSpeed",
        "en": "setMoveSpeed",
        "description": "Sets the move speed of one or more players to a percentage of their raw move speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose move speed will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "MOVE SPEED PERCENT",
                "description": "The percentage of raw move speed to which the player or players will set their move speed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "setObjectiveDescription",
        "en": "setObjectiveDescription",
        "description": "Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the message.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The message to be displayed.",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The message will keep asking for and using new values from reevaluated inputs.",
                "type": "OBJECTIVE DESCRIPTION REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            }
        ]
    },
    {
        "opy": "_&setAllowedHeroes",
        "en": "setPlayerAllowedHeroes",
        "description": "Sets the list of heroes available to one or more players. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose hero list is being set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HERO",
                "description": "The hero or heroes that will be available. If no heroes are provided, the action has no effect.",
                "type": "HERO",
                "default": "HERO"
            }
        ]
    },
    {
        "opy": "_&setScore",
        "en": "setPlayerScore",
        "description": "Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose score will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "SCORE",
                "description": "The score that will be set.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_setPlayerVar",
        "en": "setPlayerVariable",
        "description": "Stores a value into a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be set. If multiple players are provided, each of their variables will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to store the value into.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_setPlayerVarAtIndex",
        "en": "setPlayerVariableAtIndex",
        "description": "Finds or creates an array on a player variable, which is a variable that belongs to a specific player, then stores a value in the array at the specified index.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which player variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored into the array.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setPrimaryFireEnabled",
        "en": "setPrimaryFireEnabled",
        "description": "Enables or disables primary fire for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to primary fire is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use primary fire. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_&setProjectileGravity",
        "en": "setProjectileGravity",
        "description": "Sets the projectile gravity for one or more players to a percentage of regular projectile gravity.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose projectile gravity will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "PROJECTILE GRAVITY PERCENT",
                "description": "The percentage of regular projectile gravity to which the player or players will set their personal projectile gravity.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setProjectileSpeed",
        "en": "setProjectileSpeed",
        "description": "Iets the projectile speed for one or more players to a percentage of projectile speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose projectile speed will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "PROJECTILE SPEED PERCENT",
                "description": "The percentage of regular projectile speed to which the player or players will set their personal projectile speed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setRespawnTime",
        "en": "setRespawnMaxTime",
        "description": "Sets the duration between death and respawn for one or more players. For players that are already dead when this action is executed, the change takes effect on their next death.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose respawn max time is being defined.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TIME",
                "description": "The duration between death and respawn in seconds.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setSecondaryFireEnabled",
        "en": "setSecondaryFireEnabled",
        "description": "Enables or disables secondary fire for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to secondary fire is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "setSlowMotion",
        "en": "setSlowMotion",
        "description": "Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.",
        "args": [
            {
                "name": "SPEED PERCENT",
                "description": "The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setStatusEffect",
        "en": "setStatus",
        "description": "Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the clear status action.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to whom the status will be applied.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "ASSISTER",
                "description": "Specifies a player to be awarded assist credit should the affected player or players be killed while the status is in effect. An assister of null indicates no player will receive credit.",
                "type": "PLAYER",
                "default": "NULL"
            },
            {
                "name": "STATUS",
                "description": "The status to be applied to the player or players. These behave similarly to statuses applied from hero abilities.",
                "type": "STATUS",
                "default": "HACKED"
            },
            {
                "name": "DURATION",
                "description": "The duration of the status in seconds. To have a status that lasts until a clear status action is executed, provide an arbitrarily long duration such as 9999.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "setTeamScore",
        "en": "setTeamScore",
        "description": "Sets the score for one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams whose score will be set.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "SCORE",
                "description": "The score that will be set.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setUltEnabled",
        "en": "setUltimateAbilityEnabled",
        "description": "Enables or disables the ultimate ability of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to their ultimate ability is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_&setUltCharge",
        "en": "setUltimateCharge",
        "description": "Sets the ultimate charge for one or more players as a percentage of maximum charge.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose ultimate charge will be set.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "CHARGE PERCENT",
                "description": "The percentage of maximum charge.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_skip",
        "en": "skip",
        "description": "Skips execution of a certain number of actions in the action list.",
        "args": [
            {
                "name": "NUMBER OF ACTIONS",
                "description": "The number of actions to skip, not including this action.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_skipIf",
        "en": "skipIf",
        "description": "Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the skip occurs.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            },
            {
                "name": "NUMBER OF ACTIONS",
                "description": "The number of actions to skip, not including this action.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "smallMessage",
        "en": "smallMessage",
        "description": "Displays a small message beneath the reticle that is visible to specific players.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the message.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The message to be displayed.",
                "type": "ANY",
                "default": "STRING"
            }
        ]
    },
    {
        "opy": "_&startAcceleration",
        "en": "startAccelerating",
        "description": "Starts accelerating one or more players in a specified direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players that will begin accelerating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the acceleration will be applied. This value is normalized internally.",
                "type": "DIRECTION",
                "default": "VECTOR"
            },
            {
                "name": "RATE",
                "description": "The rate of acceleration in meters per second squared. This value may need to be quite high in order to overcome gravity and/or surface friction.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX SPEED",
                "description": "The speed at which acceleration will stop for the player or players. It may not be possible to reach this speed due to gravity and/or surface friction.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&setCamera",
        "en": "startCamera",
        "description": "Places your camera at a location, facing a direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose cameras will be placed at the location.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "EYE POSITION",
                "description": "The position of the camera. Reevaluates continuously.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "LOOK AT POSITION",
                "description": "Where the camera looks at. Reevaluates continuously.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "BLEND SPEED",
                "description": "How fast to blend the camera speed as positions change. 0 means do not blend at all, and just change positions instantly.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "startDamageModification",
        "en": "startDamageModification",
        "description": "Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage modification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.",
        "args": [
            {
                "name": "RECEIVERS",
                "description": "The player or players whose incoming damage will be modified (when attacked by the damagers).",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGERS",
                "description": "The player or players whose outgoing damage will be modified (when attacking the receivers).",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "DAMAGE PERCENT",
                "description": "The percentage of damage that will apply to receivers when attacked by damagers.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "DAMAGE MODIFICATION REEVALUATION",
                "default": "RECEIVERS, DAMAGERS, AND DAMAGE PERCENT"
            }
        ]
    },
    {
        "opy": "_&startDoT",
        "en": "startDamageOverTime",
        "description": "Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference to this dot, use the last damage over time id value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "One or more players who will receive the damage over time.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGER",
                "description": "The player who will receive credit for the damage. A damager of null indicates no player will receive credit.",
                "type": "PLAYER",
                "default": "NULL"
            },
            {
                "name": "DURATION",
                "description": "The duration of the damage over time in seconds. To have a dot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "DAMAGE PER SECOND",
                "description": "The damage per second for the damage over time.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&startFacing",
        "en": "startFacing",
        "description": "Starts turning one or more players to face the specified direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will start turning.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the player or players will eventually face. This value is normalized internally.",
                "type": "DIRECTION",
                "default": "VECTOR"
            },
            {
                "name": "TURN RATE",
                "description": "The turn rate in degrees per second.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "RELATIVE",
                "default": "TO WORLD"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "FACING REEVALUATION",
                "default": "DIRECTION AND TURN RATE"
            }
        ]
    },
    {
        "opy": "_&startForcingHero",
        "en": "startForcingPlayerToBeHero",
        "description": "Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the stop forcing player to be hero action is executed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be forced to be a specific hero.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HERO",
                "description": "The hero that the player or players will be forced to be.",
                "type": "HERO",
                "default": "HERO"
            }
        ]
    },
    {
        "opy": "startForcingSpawn",
        "en": "startForcingSpawnRoom",
        "description": "Forces a team to spawn in a particular spawn room, regardless of the spawn room normally used by the game mode. This action only has an effect in assault, hybrid, and payload maps.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose spawn room will be forced.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "ROOM",
                "description": "The number of the spawn room to be forced. 0 is the first spawn room, 1 the second, and 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&startForcingThrottle",
        "en": "startForcingThrottle",
        "description": "Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement will be forced or limited.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "MIN FORWARD",
                "description": "Sets the minimum run forward amount. 0 allows the player or players to stop while 1 forces full forward movement.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX FORWARD",
                "description": "Sets the maximum run forward amount. 0 prevents the player or players from moving forward while 1 allows full forward movement.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MIN BACKWARD",
                "description": "Sets the minimum run backward amount. 0 allows the player or players to stop while 1 forces full backward movement.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX BACKWARD",
                "description": "Sets the maximum run backward amount. 0 prevents the player or players from moving backward while 1 allows full backward movement.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MIN SIDEWAYS",
                "description": "Sets the minimum run sideways amount. 0 allows the player or players to stop while 1 forces full sideways movement.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX SIDEWAYS",
                "description": "Sets the maximum run sideways amount. 0 prevents the player or players from moving SIDEWAYS while 1 allows full sideways movement.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&startHoT",
        "en": "startHealOverTime",
        "description": "Starts an instance of heal over time. This hot will persist for the specified duration or until stopped by script. To obtain a reference to this hot, use the last heal over time id value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "One or more players who will receive the heal over time.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALER",
                "description": "The player who will receive credit for the healing. A healer of null indicates no player will receive credit.",
                "type": "PLAYER",
                "default": "NULL"
            },
            {
                "name": "DURATION",
                "description": "The duration of the heal over time in seconds. To have a hot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "HEALING PER SECOND",
                "description": "The healing per second for the heal over time.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&startForcingButton",
        "en": "startHoldingButton",
        "description": "Forces one or more players to hold a button virtually until stopped by the stop holding button action.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who are holding a button virtually.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is being held virtually.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "_&startThrottleInDirection",
        "en": "startThrottleInDirection",
        "description": "Sets or adds to the throttle (directional input control) of a player or players such that they begin moving in a particular direction. Any previous throttle in direction is cancelled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will be set or added to.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the throttle will be set or added to. This value is normalized internally.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "MAGNITUDE",
                "description": "The amount of throttle (or change to throttle). A value of 1 denotes full throttle.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "RELATIVE",
                "default": "TO WORLD"
            },
            {
                "name": "BEHAVIOR",
                "description": "Specifies whether preexisting throttle is replaced or added to.",
                "type": "THROTTLE BEHAVIOR",
                "default": "REPLACE EXISTING THROTTLE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This aciton will keep asking for and using new values from reevaluated inputs.",
                "type": "THROTTLE REEVALUATION",
                "default": "DIRECTION AND MAGNITUDE"
            }
        ]
    },
    {
        "opy": "_&startTransformingThrottle",
        "en": "startTransformingThrottle",
        "description": "Starts transforming (scaling and rotating) the throttle (directional input control) of a player or players. Cancels any existing start transforming throttle behavior.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will be transformed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "X AXIS SCALAR",
                "description": "The player or players will have their throttle X axis (left to right) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "Y AXIS SCALAR",
                "description": "The player or players will have their throttle Y axis (front to back) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE DIRECTION",
                "description": "After the axis scalars are applied, the player or players will have their throttle transformed so that it is relative to this unit direction vector. For example, to make the throttle camera relative, provide the direction that the camera is facing. This value is evaluated continuously (meaning it updates every frame) and normalized internally.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&stopAcceleration",
        "en": "stopAccelerating",
        "description": "Stops the acceleration started by the start accelerating action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop accelerating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "stopAllDamageModifications",
        "en": "stopAllDamageModifications",
        "description": "Stops all damage modifications that were started using the start damage modification action.",
        "args": []
    },
    {
        "opy": "_&stopAllDoT",
        "en": "stopAllDamageOverTime",
        "description": "Stops all damage over time started by start damage over time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose scripted damage over time will stop.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&stopAllHoT",
        "en": "stopAllHealOverTime",
        "description": "Stops all heal over time started by start heal over time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose scripted heal over time will stop.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&stopCamera",
        "en": "stopCamera",
        "description": "None",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose cameras will be put back to the default view.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_stopChasingGlobalVariable",
        "en": "stopChasingGlobalVariable",
        "description": "Stops an in-progress chase of a global variable, leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },
    {
        "opy": "_stopChasingPlayerVariable",
        "en": "stopChasingPlayerVariable",
        "description": "Stops an in-progress chase of a player variable, leaving it at its current value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will stop changing. If multiple players are provided, each of their variables will stop changing.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },
    {
        "opy": "stopDamageModification",
        "en": "stopDamageModification",
        "description": "Stops a damage modification that was started by the start damage modification action.",
        "args": [
            {
                "name": "DAMAGE MODIFICATION",
                "description": "Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE MODIFICATION ID"
            }
        ]
    },
    {
        "opy": "stopDoT",
        "en": "stopDamageOverTime",
        "description": "Stops an instance of damage over time started by the start damage over time action.",
        "args": [
            {
                "name": "DAMAGE OVER TIME ID",
                "description": "Specifies which damage over time instance to stop. This id may be last damage over time id or a variable into which last damage over time id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE OVER TIME ID"
            }
        ]
    },
    {
        "opy": "_&stopFacing",
        "en": "stopFacing",
        "description": "Stops the turning started by the start facing action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop turning.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&stopForcingCurrentHero",
        "en": "stopForcingPlayerToBeHero",
        "description": "Stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will no longer be forced to be a specific hero.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "stopForcingSpawn",
        "en": "stopForcingSpawnRoom",
        "description": "Undoes the effect of the start forcing spawn room action for the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team that will resume using their normal spawn room.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&stopForcingThrottle",
        "en": "stopForcingThrottle",
        "description": "Undoes the effect of the start forcing throttle action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement input will be restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "stopHoT",
        "en": "stopHealOverTime",
        "description": "Stops an instance of heal over time started by the start heal over time action.",
        "args": [
            {
                "name": "HEAL OVER TIME ID",
                "description": "Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.",
                "type": "NUMBER",
                "default": "PLAYER VARIABLE"
            }
        ]
    },
    {
        "opy": "_&stopForcingButton",
        "en": "stopHoldingButton",
        "description": "Undoes the effect of the start holding button action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who are no longer holding a button virtually.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is no longer being held virtually.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "_&stopThrottleInDirection",
        "en": "stopThrottleInDirection",
        "description": "Cancels the behavior caused by start throttle in direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose default throttle control will be restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&stopTransformingThrottle",
        "en": "stopTransformingThrottle",
        "description": "Stops the throttle transform started by start transforming throttle for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will stop being transformed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&teleport",
        "en": "teleport",
        "description": "Teleports one or more players to the specified position.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to teleport.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position to which the player or players will teleport. If a player is provided, the position of the player is used.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "unpauseMatchTime()",
        "en": "unpauseMatchTime",
        "description": "Unpauses the match time.",
        "args": []
    },
    {
        "opy": "_wait",
        "en": "wait",
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart.",
                "type": "WAIT BEHAVIOR",
                "default": "IGNORE CONDITION"
            }
        ]
    }
];
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

var valueFuncKw = [
    {
        "opy": "abs",
        "en": "absoluteValue",
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_add",
        "en": "add",
        "description": "The sum of two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getDeadPlayers",
        "en": "allDeadPlayers",
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getAllHeroes()",
        "en": "allHeroes",
        "description": "The array of all heroes in overwatch.",
        "args": []
    },
    {
        "opy": "getLivingPlayers",
        "en": "allLivingPlayers",
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayers",
        "en": "allPlayers",
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayersNotOnObjective",
        "en": "allPlayersNotOnObjective",
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayersOnObjective",
        "en": "allPlayersOnObjective",
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getAllowedHeroes",
        "en": "allowedHeroes",
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getAltitude",
        "en": "altitudeOf",
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_and",
        "en": "and",
        "description": "Whether both of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "angleDifference",
        "en": "angleDifference",
        "description": "The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_appendToArray",
        "en": "appendToArray",
        "description": "A copy of an array with one or more values appended to the end.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array to which to append.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_arrayContains",
        "en": "arrayContains",
        "description": "Whether the specified array contains the specified value.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_arraySlice",
        "en": "arraySlice",
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to make a copy.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "attacker",
        "en": "attacker",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null
    },
    {
        "opy": "Vector.BACKWARD",
        "en": "backward",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null
    },
    {
        "opy": "_&getClosestPlayer",
        "en": "closestPlayerTo",
        "description": "The player closest to a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure proximity.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the closest player will come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_compare",
        "en": "compare",
        "description": "Whether the comparison of the two inputs is true.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "COMPARISON",
                "description": "",
                "type": "COMPARE OPERATOR",
                "default": "=="
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getControlScorePercentage",
        "en": "controlModeScoringPercentage",
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getControlScoringTeam",
        "en": "controlModeScoringTeam",
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": []
    },
    {
        "opy": "cosDeg",
        "en": "cosineFromDegrees",
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "cos",
        "en": "cosineFromRadians",
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "len",
        "en": "countOf",
        "description": "The number of elements in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "crossProduct",
        "en": "crossProduct",
        "description": "The cross product of the specified values. (Left cross up equals forward.)",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand-side vector operand of the cross product.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "The right-hand-side vector operand of the cross product.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_currentArrayElement",
        "en": "currentArrayElement",
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": []
    },
    {
        "opy": "angleToDirection",
        "en": "directionFromAngles",
        "description": "The unit-length direction vector corresponding to the specified angles.",
        "args": [
            {
                "name": "HORIZONTAL ANGLE",
                "description": "The horizontal angle in degrees used to construct the resulting vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VERTICAL ANGLE",
                "description": "The vertical angle in degrees used to construct the resulting vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "directionTowards",
        "en": "directionTowards",
        "description": "The unit-length direction vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting direction vector will point.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position to which the resulting direction vector will point.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "distance",
        "en": "distanceBetween",
        "description": "The distance between two positions in meters.",
        "args": [
            {
                "name": "START POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_divide",
        "en": "divide",
        "description": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "dotProduct",
        "en": "dotProduct",
        "description": "The dot product of the specified values.",
        "args": [
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "Vector.DOWN",
        "en": "down",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null
    },
    {
        "opy": "_emptyArray",
        "en": "emptyArray",
        "description": "An array with no elements.",
        "args": []
    },
    {
        "opy": "entityExists",
        "en": "entityExists",
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "eventDamage",
        "en": "eventDamage",
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null
    },
    {
        "opy": "eventHealing",
        "en": "eventHealing",
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null
    },
    {
        "opy": "eventPlayer",
        "en": "eventPlayer",
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null,
        "completionPrecedence": 100
    },
    {
        "opy": "eventWasCriticalHit",
        "en": "eventWasCriticalHit",
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null
    },
    {
        "opy": "_&getEyePosition",
        "en": "eyePosition",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getFacingDirection",
        "en": "facingDirectionOf",
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "false",
        "en": "false",
        "description": "The boolean value of false.",
        "args": null
    },
    {
        "opy": "getFarthestPlayer",
        "en": "farthestPlayerFrom",
        "description": "The player farthest from a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure distance.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the farthest player will come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_filteredArray",
        "en": "filteredArray",
        "description": "A copy of the specified array with any values that do not match the specified condition removed.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be filtered.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_firstOf",
        "en": "firstOf",
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "getFlagPosition",
        "en": "flagPosition",
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "Vector.FORWARD",
        "en": "forward",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null
    },
    {
        "opy": "_globalVar",
        "en": "globalVariable",
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },
    {
        "opy": "_&hasSpawned",
        "en": "hasSpawned",
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&hasStatusEffect",
        "en": "hasStatus",
        "description": "Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "STATUS",
                "description": "The status to check for.",
                "type": "STATUS",
                "default": "HACKED"
            }
        ]
    },
    {
        "opy": "healee",
        "en": "healee",
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null
    },
    {
        "opy": "healer",
        "en": "healer",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null
    },
    {
        "opy": "_&getHealth",
        "en": "health",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getNormalizedHealth",
        "en": "normalizedHealth",
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_hero",
        "en": "hero",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "HERO CONSTANT",
                "default": "ANA"
            }
        ]
    },
    {
        "opy": "heroIcon",
        "en": "heroIconString",
        "description": "Converts a hero parameter into a string that shows up as an icon.",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "HERO",
                "default": "HERO"
            }
        ]
    },
    {
        "opy": "_&getCurrentHero",
        "en": "heroOf",
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "horizontalAngleFromDirection",
        "en": "horizontalAngleFromDirection",
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "horizontalAngleTowards",
        "en": "horizontalAngleTowards",
        "description": "The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&getHorizontalFacingAngle",
        "en": "horizontalFacingAngleOf",
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getHorizontalSpeed",
        "en": "horizontalSpeedOf",
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "hostPlayer",
        "en": "hostPlayer",
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null
    },
    {
        "opy": "_indexOfArrayValue",
        "en": "indexOfArrayValue",
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&isAlive",
        "en": "isAlive",
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isAssemblingHeroes()",
        "en": "isAssemblingHeroes",
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": []
    },
    {
        "opy": "isMatchBetweenRounds()",
        "en": "isBetweenRounds",
        "description": "Whether the match is between rounds.",
        "args": []
    },
    {
        "opy": "_&isHoldingButton",
        "en": "isButtonHeld",
        "description": "Whether a player is holding a specific button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose button to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The button to check.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "_&isCommunicating",
        "en": "isCommunicating",
        "description": "Whether a player is using a specific communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TYPE",
                "description": "The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.",
                "type": "COMMUNICATE",
                "default": "VOICE LINE UP"
            }
        ]
    },
    {
        "opy": "_&isCommunicatingAnything",
        "en": "isCommunicatingAny",
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isCommunicatingEmote",
        "en": "isCommunicatingAnyEmote",
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isCommunicatingVoiceline",
        "en": "isCommunicatingAnyVoiceline",
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isControlPointLocked()",
        "en": "isControlModePointLocked",
        "description": "Whether the point is locked in control mode.",
        "args": []
    },
    {
        "opy": "_&isCrouching",
        "en": "isCrouching",
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isInSuddenDeath()",
        "en": "isCtfModeInSuddenDeath",
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": []
    },
    {
        "opy": "_&isDead",
        "en": "isDead",
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isDummy",
        "en": "isDummyBot",
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isFiringPrimaryFire",
        "en": "isFiringPrimary",
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isFiringSecondaryFire",
        "en": "isFiringSecondary",
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isFlagAtBase",
        "en": "isFlagAtBase",
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "isFlagBeingCarried",
        "en": "isFlagBeingCarried",
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "isGameInProgress()",
        "en": "isGameInProgress",
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": []
    },
    {
        "opy": "_!teamHasHero",
        "en": "isHeroBeingPlayed",
        "description": "Whether a specific hero is being played (either on a team or in the match).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&isInAir",
        "en": "isInAir",
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_isInLineOfSight",
        "en": "isInLineOfSight",
        "description": "Whether two positions have line of sight with each other.",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "BARRIERS",
                "description": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.",
                "type": "BARRIERS LOS",
                "default": "BARRIERS DO NOT BLOCK LOS"
            }
        ]
    },
    {
        "opy": "isInSetup()",
        "en": "isInSetup",
        "description": "Whether the match is currently in its setup phase.",
        "args": []
    },
    {
        "opy": "_&isInSpawnRoom",
        "en": "isInSpawnRoom",
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isInViewAngle",
        "en": "isInViewAngle",
        "description": "Whether a location is within view of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "LOCATION",
                "description": "The location to test if it's within view.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "isMatchComplete()",
        "en": "isMatchComplete",
        "description": "Whether the match has finished.",
        "args": []
    },
    {
        "opy": "_&isMoving",
        "en": "isMoving",
        "description": "Whether a player is moving (defined as having a nonzero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isObjectiveComplete",
        "en": "isObjectiveComplete",
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&isOnGround",
        "en": "isOnGround",
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isOnObjective",
        "en": "isOnObjective",
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isOnWall",
        "en": "isOnWall",
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isOnFire",
        "en": "isPortraitOnFire",
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isStanding",
        "en": "isStanding",
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isTeamOnDefense",
        "en": "isTeamOnDefense",
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "isTeamOnOffense",
        "en": "isTeamOnOffense",
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_all",
        "en": "isTrueForAll",
        "description": "Whether the specified condition evaluates to true for every value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_any",
        "en": "isTrueForAny",
        "description": "Whether the specified condition evaluates to true for any value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_&isUsingAbility1",
        "en": "isUsingAbility1",
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isUsingAbility2",
        "en": "isUsingAbility2",
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isUsingUltimate",
        "en": "isUsingUltimate",
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isWaitingForPlayers()",
        "en": "isWaitingForPlayers",
        "description": "Whether the match is waiting for players to join before starting.",
        "args": []
    },
    {
        "opy": "getLastCreatedEntity()",
        "en": "lastCreatedEntity",
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": []
    },
    {
        "opy": "getLastDamageModification()",
        "en": "lastDamageModificationId",
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "opy": "getLastDoT()",
        "en": "lastDamageOverTimeId",
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "opy": "getLastHoT()",
        "en": "lastHealOverTimeId",
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "opy": "_lastOf",
        "en": "lastOf",
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "getLastCreatedText()",
        "en": "lastTextId",
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": []
    },
    {
        "opy": "Vector.LEFT",
        "en": "left",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null
    },
    {
        "opy": "localVector",
        "en": "localVectorOf",
        "description": "The vector in local coordinates corresponding to the provided vector in world coordinates.",
        "args": [
            {
                "name": "WORLD VECTOR",
                "description": "The vector in world coordinates that will be converted to local coordinates.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the resulting vector will be relative.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "TRANSFORMATION",
                "default": "ROTATION"
            }
        ]
    },
    {
        "opy": "getMatchRound()",
        "en": "matchRound",
        "description": "The current round of the match, counting up from 1.",
        "args": []
    },
    {
        "opy": "getMatchTime()",
        "en": "matchTime",
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": []
    },
    {
        "opy": "max",
        "en": "max",
        "description": "The greater of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&getMaxHealth",
        "en": "maxHealth",
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "min",
        "en": "min",
        "description": "The lesser of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_modulo",
        "en": "modulo",
        "description": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_multiply",
        "en": "multiply",
        "description": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "nearestWalkablePosition",
        "en": "nearestWalkablePosition",
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "normalize",
        "en": "normalize",
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "not",
        "en": "not",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ],
        "snippet": "not",
    },
    {
        "opy": "null",
        "en": "null",
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null
    },
    {
        "opy": "getNumberOfDeadPlayers",
        "en": "numberOfDeadPlayers",
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getNumberOfDeaths",
        "en": "numberOfDeaths",
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getNumberOfElims",
        "en": "numberOfEliminations",
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getNumberOfFinalBlows",
        "en": "numberOfFinalBlows",
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_!getNumberOfHeroes",
        "en": "numberOfHeroes",
        "description": "The number of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getNumberOfLivingPlayers",
        "en": "numberOfLivingPlayers",
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getNumberOfPlayers",
        "en": "numberOfPlayers",
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getNumberOfPlayersOnObjective",
        "en": "numberOfPlayersOnObjective",
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getCurrentObjective",
        "en": "objectiveIndex",
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": []
    },
    {
        "opy": "getObjectivePosition",
        "en": "objectivePosition",
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getOppositeTeam",
        "en": "oppositeTeamOf",
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_or",
        "en": "or",
        "description": "Whether either of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "getPayloadPosition",
        "en": "payloadPosition",
        "description": "The position in the world of the active payload.",
        "args": []
    },
    {
        "opy": "getPayloadProgressPercentage",
        "en": "payloadProgressPercentage",
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": []
    },
    {
        "opy": "getFlagCarrier",
        "en": "playerCarryingFlag",
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getPlayerClosestToReticle",
        "en": "playerClosestToReticle",
        "description": "The player closest to the reticle of the specified player, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to search for the closest player.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_playerVar",
        "en": "playerVariable",
        "description": "The current value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable value to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },
    {
        "opy": "getPlayersInSlot",
        "en": "playersInSlot",
        "description": "The player or array of players who occupy a specific slot in the game.",
        "args": [
            {
                "name": "SLOT",
                "description": "The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which to acquire a player or players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getPlayersInViewAngle",
        "en": "playersInViewAngle",
        "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to consider players.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_!getPlayersOnHero",
        "en": "playersOnHero",
        "description": "The array of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayersInRadius",
        "en": "playersWithinRadius",
        "description": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.",
        "args": [
            {
                "name": "CENTER",
                "description": "The center position from which to measure distance.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The radius in meters inside which players must be in order to be included in the resulting array.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams to which a player must belong to be included in the resulting array.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "LOS CHECK",
                "description": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.",
                "type": "LOS CHECK",
                "default": "OFF"
            }
        ]
    },
    {
        "opy": "getCapturePercentage",
        "en": "pointCapturePercentage",
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": []
    },
    {
        "opy": "_&getPosition",
        "en": "positionOf",
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_raiseToPower",
        "en": "raiseToPower",
        "description": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "random.randint",
        "en": "randomInteger",
        "description": "A random integer between the specified min and max, inclusive.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "random.uniform",
        "en": "randomReal",
        "description": "A random real number between the specified min and max.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest real number allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest real number allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "random.choice",
        "en": "randomValueInArray",
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "random.shuffle",
        "en": "randomizedArray",
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "_getNormal",
        "en": "raycastHitNormal",
        "description": "The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_getPlayerHit",
        "en": "raycastHitPlayer",
        "description": "The player hit by the ray cast (or null if no player is hit).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_getHitPosition",
        "en": "raycastHitPosition",
        "description": "The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_removeFromArray",
        "en": "removeFromArray",
        "description": "A copy of an array with one or more values removed (if found).",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to remove values.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "Vector.RIGHT",
        "en": "right",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null
    },
    {
        "opy": "_round",
        "en": "roundToInteger",
        "description": "The integer to which the specified value rounds.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to round.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "ROUNDING TYPE",
                "description": "Determines the direction in which the value will be rounded.",
                "type": "ROUNDING TYPE",
                "default": "UP"
            }
        ]
    },
    {
        "opy": "_&getScore",
        "en": "scoreOf",
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "getServerLoad()",
        "en": "serverLoad",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": []
    },
    {
        "opy": "getAverageServerLoad()",
        "en": "serverLoadAverage",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": []
    },
    {
        "opy": "getPeakServerLoad()",
        "en": "serverLoadPeak",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": []
    },
    {
        "opy": "sinDeg",
        "en": "sineFromDegrees",
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "sin",
        "en": "sineFromRadians",
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&getSlot",
        "en": "slotOf",
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_sortedArray",
        "en": "sortedArray",
        "description": "A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "VALUE RANK",
                "description": "The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.",
                "type": "NUMBER",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ]
    },
    {
        "opy": "_&getSpeed",
        "en": "speedOf",
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getSpeedInDirection",
        "en": "speedOfInDirection",
        "description": "The current speed of a player in a specific direction in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The direction of travel in which to measure the player's speed.",
                "type": "DIRECTION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "sqrt",
        "en": "squareRoot",
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_string",
        "en": "string",
        "description": "Text formed from a selection of strings and specified values.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "STRING CONSTANT",
                "default": "HELLO"
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "ANY",
                "default": "NULL"
            }
        ]
    },
    {
        "opy": "_subtract",
        "en": "subtract",
        "description": "The difference between two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&getTeam",
        "en": "teamOf",
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "teamScore",
        "en": "teamScore",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getThrottle",
        "en": "throttleOf",
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "getTotalTimeElapsed",
        "en": "totalTimeElapsed",
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": []
    },
    {
        "opy": "true",
        "en": "true",
        "description": "The boolean value of true.",
        "args": null
    },
    {
        "opy": "_&getUltCharge",
        "en": "ultimateChargePercent",
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "Vector.UP",
        "en": "up",
        "description": "Shorthand for the directional vector(0, l, 0), which points upward.",
        "args": null
    },
    {
        "opy": "_valueInArray",
        "en": "valueInArray",
        "description": "The value found at a specific element of an array. Results in 0 if the element does not exist.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose element to acquire.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "INDEX",
                "description": "The index of the element to acquire.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "vect",
        "en": "vector",
        "description": "A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.",
        "args": [
            {
                "name": "X",
                "description": "The x value of the vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "Y",
                "description": "The y value of the vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "Z",
                "description": "The z value of the vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "vectorTowards",
        "en": "vectorTowards",
        "description": "The displacement vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting displacement vector begins.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position at which the resulting displacement vector ends.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&getVelocity",
        "en": "velocityOf",
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "verticalAngleOfDirection",
        "en": "verticalAngleFromDirection",
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "verticalAngleTowards",
        "en": "verticalAngleTowards",
        "description": "The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&getVerticalFacingAngle",
        "en": "verticalFacingAngleOf",
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getVerticalSpeed",
        "en": "verticalSpeedOf",
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "victim",
        "en": "victim",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null
    },
    {
        "opy": "worldVector",
        "en": "worldVectorOf",
        "description": "The vector in world coordinates corresponding to the provided vector in local coordinates.",
        "args": [
            {
                "name": "LOCAL VECTOR",
                "description": "The vector in local coordinates that will be converted to world coordinates.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the local vector is relative.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "TRANSFORMATION",
                "default": "ROTATION"
            }
        ]
    },
    {
        "opy": "_xComponentOf",
        "en": "xComponentOf",
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_yComponentOf",
        "en": "yComponentOf",
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_zComponentOf",
        "en": "zComponentOf",
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    }
];
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

var constantValues = {
    "TRANSFORMATION": {
        "opy": "Transform",
        "values": [
            {
                "opy": "Transform.ROTATION",
                "en": "Rotation"
            },
            {
                "opy": "Transform.ROTATION_AND_TRANSLATION",
                "en": "RotationAndTranslation"
            }
        ]
    },
    "INVISIBLE TO": {
        "opy": "Invis",
        "values": [
            {
                "opy": "Invis.ALL",
                "en": "All"
            },
            {
                "opy": "Invis.ENEMIES",
                "en": "Enemies"
            },
            {
                "opy": "Invis.NONE",
                "en": "None"
            }
        ]
    },
    "COLOR": {
        "opy": "Color",
        "values": [
            {
                "opy": "Color.AQUA",
                "en": "Aqua"
            },
            {
                "opy": "Color.BLUE",
                "en": "Blue"
            },
            {
                "opy": "Color.GREEN",
                "en": "Green"
            },
            {
                "opy": "Color.LIME_GREEN",
                "en": "Limegreen"
            },
            {
                "opy": "Color.ORANGE",
                "en": "Orange"
            },
            {
                "opy": "Color.PURPLE",
                "en": "Purple"
            },
            {
                "opy": "Color.RED",
                "en": "Red"
            },
            {
                "opy": "Color.SKY_BLUE",
                "en": "Skyblue"
            },
            {
                "opy": "Color.TEAM_1",
                "en": "Team1"
            },
            {
                "opy": "Color.TEAM_2",
                "en": "Team2"
            },
            {
                "opy": "Color.TURQUOISE",
                "en": "Turquoise"
            },
            {
                "opy": "Color.WHITE",
                "en": "White"
            },
            {
                "opy": "Color.YELLOW",
                "en": "Yellow"
            }
        ]
    },
    "BUTTON": {
        "opy": "Button",
        "values": [
            {
                "opy": "Button.ABILITY_1",
                "en": "Ability1"
            },
            {
                "opy": "Button.ABILITY_2",
                "en": "Ability2"
            },
            {
                "opy": "Button.CROUCH",
                "en": "Crouch"
            },
            {
                "opy": "Button.INTERACT",
                "en": "Interact"
            },
            {
                "opy": "Button.JUMP",
                "en": "Jump"
            },
            {
                "opy": "Button.PRIMARY_FIRE",
                "en": "PrimaryFire"
            },
            {
                "opy": "Button.SECONDARY_FIRE",
                "en": "SecondaryFire"
            },
            {
                "opy": "Button.ULTIMATE",
                "en": "Ultimate"
            }
        ]
    },
    "OPERATION": {
        "opy": "Operation",
        "values": [
            {
                "opy": "_add",
                "en": "Add"
            },
            {
                "opy": "_appendToArray",
                "en": "AppendToArray"
            },
            {
                "opy": "_divide",
                "en": "Divide"
            },
            {
                "opy": "_max",
                "en": "Max"
            },
            {
                "opy": "_min",
                "en": "Min"
            },
            {
                "opy": "_modulo",
                "en": "Modulo"
            },
            {
                "opy": "_multiply",
                "en": "Multiply"
            },
            {
                "opy": "_raiseToPower",
                "en": "RaiseToPower"
            },
            {
                "opy": "_removeFromArrayByIndex",
                "en": "RemoveFromArrayByIndex"
            },
            {
                "opy": "_removeFromArrayByValue",
                "en": "RemoveFromArrayByValue"
            },
            {
                "opy": "_subtract",
                "en": "Subtract"
            }
        ]
    },
    "TEAM CONSTANT": {
        "opy": "Team",
        "values": [
            {
                "opy": "Team.ALL",
                "en": "AllTeams"
            },
            {
                "opy": "Team.1",
                "en": "Team1"
            },
            {
                "opy": "Team.2",
                "en": "Team2"
            }
        ]
    },
    "HERO CONSTANT": {
        "opy": "Hero",
        "values": [
            {
                "opy": "Hero.ANA",
                "en": "Ana"
            },
            {
                "opy": "Hero.ASHE",
                "en": "Ashe"
            },
            {
                "opy": "Hero.BAPTISTE",
                "en": "Baptiste"
            },
            {
                "opy": "Hero.BASTION",
                "en": "Bastion"
            },
            {
                "opy": "Hero.BRIGITTE",
                "en": "Brigitte"
            },
            {
                "opy": "Hero.DVA",
                "en": "D.va"
            },
            {
                "opy": "Hero.DOOMFIST",
                "en": "Doomfist"
            },
            {
                "opy": "Hero.GENJI",
                "en": "Genji"
            },
            {
                "opy": "Hero.HANZO",
                "en": "Hanzo"
            },
            {
                "opy": "Hero.JUNKRAT",
                "en": "Junkrat"
            },
            {
                "opy": "Hero.LUCIO",
                "en": "Lúcio"
            },
            {
                "opy": "Hero.MCCREE",
                "en": "Mccree"
            },
            {
                "opy": "Hero.MEI",
                "en": "Mei"
            },
            {
                "opy": "Hero.MERCY",
                "en": "Mercy"
            },
            {
                "opy": "Hero.MOIRA",
                "en": "Moira"
            },
            {
                "opy": "Hero.ORISA",
                "en": "Orisa"
            },
            {
                "opy": "Hero.PHARAH",
                "en": "Pharah"
            },
            {
                "opy": "Hero.REAPER",
                "en": "Reaper"
            },
            {
                "opy": "Hero.REINHARDT",
                "en": "Reinhardt"
            },
            {
                "opy": "Hero.ROADHOG",
                "en": "Roadhog"
            },
            {
                "opy": "Hero.SIGMA",
                "en": "Sigma"
            },
            {
                "opy": "Hero.SOLDIER",
                "en": "Soldier:76"
            },
            {
                "opy": "Hero.SOMBRA",
                "en": "Sombra"
            },
            {
                "opy": "Hero.SYMMETRA",
                "en": "Symmetra"
            },
            {
                "opy": "Hero.TORBJORN",
                "en": "Torbjörn"
            },
            {
                "opy": "Hero.TRACER",
                "en": "Tracer"
            },
            {
                "opy": "Hero.WIDOWMAKER",
                "en": "Widowmaker"
            },
            {
                "opy": "Hero.WINSTON",
                "en": "Winston"
            },
            {
                "opy": "Hero.HAMMOND",
                "en": "WreckingBall"
            },
            {
                "opy": "Hero.ZARYA",
                "en": "Zarya"
            },
            {
                "opy": "Hero.ZENYATTA",
                "en": "Zenyatta"
            }
        ]
    },
    "VARIABLE": {
        "opy": "Variable",
        "values": [
            {
                "opy": "A",
                "en": "A"
            },
            {
                "opy": "B",
                "en": "B"
            },
            {
                "opy": "C",
                "en": "C"
            },
            {
                "opy": "D",
                "en": "D"
            },
            {
                "opy": "E",
                "en": "E"
            },
            {
                "opy": "F",
                "en": "F"
            },
            {
                "opy": "G",
                "en": "G"
            },
            {
                "opy": "H",
                "en": "H"
            },
            {
                "opy": "I",
                "en": "I"
            },
            {
                "opy": "J",
                "en": "J"
            },
            {
                "opy": "K",
                "en": "K"
            },
            {
                "opy": "L",
                "en": "L"
            },
            {
                "opy": "M",
                "en": "M"
            },
            {
                "opy": "N",
                "en": "N"
            },
            {
                "opy": "O",
                "en": "O"
            },
            {
                "opy": "P",
                "en": "P"
            },
            {
                "opy": "Q",
                "en": "Q"
            },
            {
                "opy": "R",
                "en": "R"
            },
            {
                "opy": "S",
                "en": "S"
            },
            {
                "opy": "T",
                "en": "T"
            },
            {
                "opy": "U",
                "en": "U"
            },
            {
                "opy": "V",
                "en": "V"
            },
            {
                "opy": "W",
                "en": "W"
            },
            {
                "opy": "X",
                "en": "X"
            },
            {
                "opy": "Y",
                "en": "Y"
            },
            {
                "opy": "Z",
                "en": "Z"
            }
        ]
    },
    "PLAY EFFECT": {
        "opy": "DynamicEffect",
        "values": [
            {
                "opy": "DynamicEffect.BAD_EXPLOSION",
                "en": "BadExplosion"
            },
            {
                "opy": "DynamicEffect.BAD_PICKUP_EFFECT",
                "en": "BadPickupEffect"
            },
            {
                "opy": "DynamicEffect.BUFF_EXPLOSION_SOUND",
                "en": "BuffExplosionSound"
            },
            {
                "opy": "DynamicEffect.BUFF_IMPACT_SOUND",
                "en": "BuffImpactSound"
            },
            {
                "opy": "DynamicEffect.DEBUFF_IMPACT_SOUND",
                "en": "DebuffImpactSound"
            },
            {
                "opy": "DynamicEffect.EXPLOSION_SOUND",
                "en": "ExplosionSound"
            },
            {
                "opy": "DynamicEffect.GOOD_EXPLOSION",
                "en": "GoodExplosion"
            },
            {
                "opy": "DynamicEffect.GOOD_PICKUP_EFFECT",
                "en": "GoodPickupEffect"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION",
                "en": "RingExplosion"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION_SOUND",
                "en": "RingExplosionSound"
            }
        ]
    },
    "CREATE EFFECT": {
        "opy": "Effect",
        "values": [
            {
                "opy": "Effect.BAD_AURA",
                "en": "BadAura"
            },
            {
                "opy": "Effect.BAD_AURA_SOUND",
                "en": "BadAuraSound"
            },
            {
                "opy": "Effect.BEACON_SOUND",
                "en": "BeaconSound"
            },
            {
                "opy": "Effect.CLOUD",
                "en": "Cloud"
            },
            {
                "opy": "Effect.DECAL_SOUND",
                "en": "DecalSound"
            },
            {
                "opy": "Effect.ENERGY_SOUND",
                "en": "EnergySound"
            },
            {
                "opy": "Effect.GOOD_AURA",
                "en": "GoodAura"
            },
            {
                "opy": "Effect.GOOD_AURA_SOUND",
                "en": "GoodAuraSound"
            },
            {
                "opy": "Effect.LIGHT_SHAFT",
                "en": "LightShaft"
            },
            {
                "opy": "Effect.ORB",
                "en": "Orb"
            },
            {
                "opy": "Effect.PICKUP_SOUND",
                "en": "Pick-upSound"
            },
            {
                "opy": "Effect.RING",
                "en": "Ring"
            },
            {
                "opy": "Effect.SMOKE_SOUND",
                "en": "SmokeSound"
            },
            {
                "opy": "Effect.SPARKLES",
                "en": "Sparkles"
            },
            {
                "opy": "Effect.SPARKLES_SOUND",
                "en": "SparklesSound"
            },
            {
                "opy": "Effect.SPHERE",
                "en": "Sphere"
            }
        ]
    },
    "COMMUNICATE": {
        "opy": "Comms",
        "values": [
            {
                "opy": "Comms.ACKNOWLEDGE",
                "en": "Acknowledge"
            },
            {
                "opy": "Comms.EMOTE_DOWN",
                "en": "EmoteDown"
            },
            {
                "opy": "Comms.EMOTE_LEFT",
                "en": "EmoteLeft"
            },
            {
                "opy": "Comms.EMOTE_RIGHT",
                "en": "EmoteRight"
            },
            {
                "opy": "Comms.EMOTE_UP",
                "en": "EmoteUp"
            },
            {
                "opy": "Comms.GROUP_UP",
                "en": "GroupUp"
            },
            {
                "opy": "Comms.HELLO",
                "en": "Hello"
            },
            {
                "opy": "Comms.NEED_HEALING",
                "en": "NeedHealing"
            },
            {
                "opy": "Comms.THANKS",
                "en": "Thanks"
            },
            {
                "opy": "Comms.ULTIMATE_STATUS",
                "en": "UltimateStatus"
            },
            {
                "opy": "Comms.VOICE_LINE_DOWN",
                "en": "VoiceLineDown"
            },
            {
                "opy": "Comms.VOICE_LINE_LEFT",
                "en": "VoiceLineLeft"
            },
            {
                "opy": "Comms.VOICE_LINE_RIGHT",
                "en": "VoiceLineRight"
            },
            {
                "opy": "Comms.VOICE_LINE_UP",
                "en": "VoiceLineUp"
            }
        ]
    },
    "ICON": {
        "opy": "Icon",
        "values": [
            {
                "opy": "Icon.ARROW_DOWN",
                "en": "Arrow:Down"
            },
            {
                "opy": "Icon.ARROW_LEFT",
                "en": "Arrow:Left"
            },
            {
                "opy": "Icon.ARROW_RIGHT",
                "en": "Arrow:Right"
            },
            {
                "opy": "Icon.ARROW_UP",
                "en": "Arrow:Up"
            },
            {
                "opy": "Icon.ASTERISK",
                "en": "Asterisk"
            },
            {
                "opy": "Icon.BOLT",
                "en": "Bolt"
            },
            {
                "opy": "Icon.CHECKMARK",
                "en": "Checkmark"
            },
            {
                "opy": "Icon.CIRCLE",
                "en": "Circle"
            },
            {
                "opy": "Icon.CLUB",
                "en": "Club"
            },
            {
                "opy": "Icon.DIAMOND",
                "en": "Diamond"
            },
            {
                "opy": "Icon.DIZZY",
                "en": "Dizzy"
            },
            {
                "opy": "Icon.EXCLAMATION_MARK",
                "en": "ExclamationMark"
            },
            {
                "opy": "Icon.EYE",
                "en": "Eye"
            },
            {
                "opy": "Icon.FIRE",
                "en": "Fire"
            },
            {
                "opy": "Icon.FLAG",
                "en": "Flag"
            },
            {
                "opy": "Icon.HALO",
                "en": "Halo"
            },
            {
                "opy": "Icon.HAPPY",
                "en": "Happy"
            },
            {
                "opy": "Icon.HEART",
                "en": "Heart"
            },
            {
                "opy": "Icon.MOON",
                "en": "Moon"
            },
            {
                "opy": "Icon.NO",
                "en": "No"
            },
            {
                "opy": "Icon.PLUS",
                "en": "Plus"
            },
            {
                "opy": "Icon.POISON",
                "en": "Poison"
            },
            {
                "opy": "Icon.POISON_2",
                "en": "Poison2"
            },
            {
                "opy": "Icon.QUESTION_MARK",
                "en": "QuestionMark"
            },
            {
                "opy": "Icon.RADIOACTIVE",
                "en": "Radioactive"
            },
            {
                "opy": "Icon.RECYCLE",
                "en": "Recycle"
            },
            {
                "opy": "Icon.RING_THICK",
                "en": "RingThick"
            },
            {
                "opy": "Icon.RING_THIN",
                "en": "RingThin"
            },
            {
                "opy": "Icon.SAD",
                "en": "Sad"
            },
            {
                "opy": "Icon.SKULL",
                "en": "Skull"
            },
            {
                "opy": "Icon.SPADE",
                "en": "Spade"
            },
            {
                "opy": "Icon.SPIRAL",
                "en": "Spiral"
            },
            {
                "opy": "Icon.STOP",
                "en": "Stop"
            },
            {
                "opy": "Icon.TRASHCAN",
                "en": "Trashcan"
            },
            {
                "opy": "Icon.WARNING",
                "en": "Warning"
            },
            {
                "opy": "Icon.CROSS",
                "en": "X"
            }
        ]
    },
    "RELATIVE": {
        "opy": "Relativity",
        "values": [
            {
                "opy": "Relativity.TO_PLAYER",
                "en": "ToPlayer"
            },
            {
                "opy": "Relativity.TO_WORLD",
                "en": "ToWorld"
            }
        ]
    },
    "MOTION": {
        "opy": "Impulse",
        "values": [
            {
                "opy": "Impulse.CANCEL_CONTRARY_MOTION",
                "en": "CancelContraryMotion"
            },
            {
                "opy": "Impulse.INCORPORATE_CONTRARY_MOTION",
                "en": "IncorporateContraryMotion"
            }
        ]
    },
    "ROUNDING TYPE": {
        "values": [
            {
                "opy": "_roundUp",
                "en": "Up"
            },
            {
                "opy": "_roundDown",
                "en": "Down"
            },
            {
                "opy": "_roundToNearest",
                "en": "ToNearest"
            }
        ]
    },
    "LOS CHECK": {
        "opy": "LosCheck",
        "values": [
            {
                "opy": "LosCheck.OFF",
                "en": "Off"
            },
            {
                "opy": "LosCheck.SURFACES",
                "en": "Surfaces"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ALL_BARRIERS",
                "en": "SurfacesAndAllBarriers"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ENEMY_BARRIERS",
                "en": "SurfacesAndEnemyBarriers"
            }
        ]
    },
    "WORLD TEXT CLIPPING": {
        "opy": "Clip",
        "values": [
            {
                "opy": "Clip.SURFACES",
                "en": "ClipAgainstSurfaces"
            },
            {
                "opy": "Clip.NONE",
                "en": "DoNotClip"
            }
        ]
    },
    "HUD LOCATION": {
        "opy": "Position",
        "values": [
            {
                "opy": "Position.LEFT",
                "en": "Left"
            },
            {
                "opy": "Position.TOP",
                "en": "Top"
            },
            {
                "opy": "Position.RIGHT",
                "en": "Right"
            }
        ]
    },
    "ICON REEVALUATION": {
        "opy": "IconReeval",
        "values": [
            {
                "opy": "IconReeval.POSITION",
                "en": "Position"
            },
            {
                "opy": "IconReeval.NONE",
                "en": "None"
            },
            {
                "opy": "IconReeval.VISIBILITY",
                "en": "VisibleTo"
            },
            {
                "opy": "IconReeval.VISIBILITY_AND_POSITION",
                "en": "VisibleToAndPosition"
            }
        ]
    },
    "EFFECT REEVALUATION": {
        "opy": "EffectReeval",
        "values": [
            {
                "opy": "EffectReeval.POSITION_AND_RADIUS",
                "en": "PositionAndRadius"
            },
            {
                "opy": "EffectReeval.NONE",
                "en": "None"
            },
            {
                "opy": "EffectReeval.VISIBILITY",
                "en": "VisibleTo"
            },
            {
                "opy": "EffectReeval.VISIBILITY_POSITION_AND_RADIUS",
                "en": "VisibleToPositionAndRadius"
            }
        ]
    },
    "HUD TEXT REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "opy": "HudReeval.STRING",
                "en": "String"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString"
            }
        ]
    },
    "WORLD TEXT REEVALUATION": {
        "opy": "WorldTextReeval",
        "values": [
            {
                "opy": "WorldTextReeval.STRING",
                "en": "String"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_POSITION_AND_STRING",
                "en": "VisibleToPositionAndString"
            }
        ]
    },
    "CHASE RATE REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_RATE",
                "en": "DestinationAndRate"
            },
            {
                "opy": "ChaseReeval.NONE",
                "en": "None"
            }
        ]
    },
    "CHASE TIME REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_DURATION",
                "en": "DestinationAndDuration"
            },
            {
                "opy": "ChaseReeval.NONE",
                "en": "None"
            }
        ]
    },
    "OBJECTIVE DESCRIPTION REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "opy": "HudReeval.STRING",
                "en": "String"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString"
            }
        ]
    },
    "DAMAGE MODIFICATION REEVALUATION": {
        "opy": "DamageReeval",
        "values": [
            {
                "opy": "DamageReeval.NONE",
                "en": "None"
            },
            {
                "opy": "DamageReeval.RECEIVERS_AND_DAMAGERS",
                "en": "ReceiversAndDamagers"
            },
            {
                "opy": "DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT",
                "en": "ReceiversDamagersAndDamagePercent"
            }
        ]
    },
    "FACING REEVALUATION": {
        "opy": "FacingReeval",
        "values": [
            {
                "opy": "FacingReeval.DIRECTION_AND_TURN_RATE",
                "en": "DirectionAndTurnRate"
            },
            {
                "opy": "FacingReeval.NONE",
                "en": "None"
            }
        ]
    },
    "WAIT BEHAVIOR": {
        "opy": "Wait",
        "values": [
            {
                "opy": "Wait.ABORT_WHEN_FALSE",
                "en": "AbortWhenFalse"
            },
            {
                "opy": "Wait.IGNORE_CONDITION",
                "en": "IgnoreCondition"
            },
            {
                "opy": "Wait.RESTART_WHEN_TRUE",
                "en": "RestartWhenTrue"
            }
        ]
    },
    "BARRIERS LOS": {
        "opy": "BarrierLos",
        "values": [
            {
                "opy": "BarrierLos.BLOCKED_BY_ENEMY_BARRIERS",
                "en": "EnemyBarriersBlockLos"
            },
            {
                "opy": "BarrierLos.BLOCKED_BY_ALL_BARRIERS",
                "en": "AllBarriersBlockLos"
            },
            {
                "opy": "BarrierLos.PASS_THROUGH_BARRIERS",
                "en": "BarriersDoNotBlockLos"
            }
        ]
    },
    "STATUS": {
        "opy": "Status",
        "values": [
            {
                "opy": "Status.ASLEEP",
                "en": "Asleep"
            },
            {
                "opy": "Status.BURNING",
                "en": "Burning"
            },
            {
                "opy": "Status.FROZEN",
                "en": "Frozen"
            },
            {
                "opy": "Status.HACKED",
                "en": "Hacked"
            },
            {
                "opy": "Status.INVINCIBLE",
                "en": "Invincible"
            },
            {
                "opy": "Status.KNOCKED_DOWN",
                "en": "KnockedDown"
            },
            {
                "opy": "Status.PHASED_OUT",
                "en": "PhasedOut"
            },
            {
                "opy": "Status.ROOTED",
                "en": "Rooted"
            },
            {
                "opy": "Status.STUNNED",
                "en": "Stunned"
            },
            {
                "opy": "Status.UNKILLABLE",
                "en": "Unkillable"
            }
        ]
    },
    "SPECTATOR VISIBILITY": {
        "opy": "SpecVisibility",
        "values": [
            {
                "opy": "SpecVisibility.DEFAULT",
                "en": "Defaultvisibility"
            },
            {
                "opy": "SpecVisibility.ALWAYS",
                "en": "Visiblealways"
            },
            {
                "opy": "SpecVisibility.NEVER",
                "en": "Visiblenever"
            }
        ]
    },
    "BEAM EFFECT": {
        "opy": "Beam",
        "values": [
            {
                "opy": "Beam.BAD",
                "en": "Badbeam"
            },
            {
                "opy": "Beam.GOOD",
                "en": "Goodbeam"
            },
            {
                "opy": "Beam.GRAPPLE",
                "en": "Grapplebeam"
            }
        ]
    },
    "THROTTLE BEHAVIOR": {
        "opy": "Throttle",
        "values": [
            {
                "opy": "Throttle.REPLACE_EXISTING",
                "en": "Replaceexistingthrottle"
            },
            {
                "opy": "Throttle.ADD_TO_EXISTING",
                "en": "Addtoexistingthrottle"
            }
        ]
    },
    "THROTTLE REEVALUATION": {
        "opy": "ThrottleReeval",
        "values": [
            {
                "opy": "ThrottleReeval.DIRECTION_AND_MAGNITUDE",
                "en": "Directionandmagnitude"
            },
            {
                "opy": "ThrottleReeval.NONE",
                "en": "None"
            }
        ]
    }
};

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

//List of workshop "keywords" (conditions, values, actions).
//Each keyword set is an array containing arrays containing 2 arrays.
//The first array is the OverPy keywords, the second array is the Workshop keywords.
//The keywords are sorted by the english workshop keyword (with the exception of the event keywords).
//Note: each workshop keyword MUST be with no spaces!

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

//Array of languages. As of now, only English is supported.
var languages = [
	"en",
	
	//Not supported yet!
	"fr",
	"es",
	"it",
	"ru",
	"pl",
	"de",
	"pt",
	"ja",
	"kr",
	"zh",
]

var currentLanguage = "en";

var ruleKw = [
    {
        "opy": "@Rule",
        "en": "rule"
    },
    {
        "opy": "@Event",
        "en": "event"
    },
    {
        "opy": "_conditions",
        "en": "conditions"
    },
    {
        "opy": "_actions",
        "en": "actions"
    }
];

//Event keywords
var eventKw = [
    {
        "opy": "global",
        "en": "ongoing-global"
    },
    {
        "opy": "eachPlayer",
        "en": "ongoing-eachplayer"
    },
    {
        "opy": "playerTookDamage",
        "en": "playerTookDamage"
    },
    {
        "opy": "playerDealtDamage",
        "en": "playerDealtDamage"
    },
    {
        "opy": "playerDealtFinalBlow",
        "en": "playerDealtFinalBlow"
    },
    {
        "opy": "playerDied",
        "en": "playerDied"
    },
    {
        "opy": "playerEarnedElimination",
        "en": "playerEarnedElimination"
    },
    {
        "opy": "playerDealtHealing",
        "en": "playerDealtHealing"
    },
    {
        "opy": "playerReceivedHealing",
        "en": "playerReceivedHealing"
    },
    {
        "opy": "playerJoined",
        "en": "playerJoinedMatch"
    },
    {
        "opy": "playerLeft",
        "en": "playerLeftMatch"
    },
    {
        "opy": "all",
        "en": "all"
    },
    {
        "opy": "1",
        "en": "team1"
    },
    {
        "opy": "2",
        "en": "team2"
    },
    {
        "opy": "slot0",
        "en": "slot0"
    },
    {
        "opy": "slot1",
        "en": "slot1"
    },
    {
        "opy": "slot2",
        "en": "slot2"
    },
    {
        "opy": "slot3",
        "en": "slot3"
    },
    {
        "opy": "slot4",
        "en": "slot4"
    },
    {
        "opy": "slot5",
        "en": "slot5"
    },
    {
        "opy": "slot6",
        "en": "slot6"
    },
    {
        "opy": "slot7",
        "en": "slot7"
    },
    {
        "opy": "slot8",
        "en": "slot8"
    },
    {
        "opy": "slot9",
        "en": "slot9"
    },
    {
        "opy": "slot10",
        "en": "slot10"
    },
    {
        "opy": "slot11",
        "en": "slot11"
    }
];

//Global variables, used to convert to names during decompilation.
var globalVarKw = [
    {
        "opy": "A",
        "en": "A"
    },
    {
        "opy": "B",
        "en": "B"
    },
    {
        "opy": "C",
        "en": "C"
    },
    {
        "opy": "D",
        "en": "D"
    },
    {
        "opy": "E",
        "en": "E"
    },
    {
        "opy": "F",
        "en": "F"
    },
    {
        "opy": "G",
        "en": "G"
    },
    {
        "opy": "H",
        "en": "H"
    },
    {
        "opy": "I",
        "en": "I"
    },
    {
        "opy": "J",
        "en": "J"
    },
    {
        "opy": "K",
        "en": "K"
    },
    {
        "opy": "L",
        "en": "L"
    },
    {
        "opy": "M",
        "en": "M"
    },
    {
        "opy": "N",
        "en": "N"
    },
    {
        "opy": "O",
        "en": "O"
    },
    {
        "opy": "P",
        "en": "P"
    },
    {
        "opy": "Q",
        "en": "Q"
    },
    {
        "opy": "R",
        "en": "R"
    },
    {
        "opy": "S",
        "en": "S"
    },
    {
        "opy": "T",
        "en": "T"
    },
    {
        "opy": "U",
        "en": "U"
    },
    {
        "opy": "V",
        "en": "V"
    },
    {
        "opy": "W",
        "en": "W"
    },
    {
        "opy": "X",
        "en": "X"
    },
    {
        "opy": "Y",
        "en": "Y"
    },
    {
        "opy": "Z",
        "en": "Z"
    }
];

var playerVarKw = [
    {
        "opy": "A",
        "en": "A"
    },
    {
        "opy": "B",
        "en": "B"
    },
    {
        "opy": "C",
        "en": "C"
    },
    {
        "opy": "D",
        "en": "D"
    },
    {
        "opy": "E",
        "en": "E"
    },
    {
        "opy": "F",
        "en": "F"
    },
    {
        "opy": "G",
        "en": "G"
    },
    {
        "opy": "H",
        "en": "H"
    },
    {
        "opy": "I",
        "en": "I"
    },
    {
        "opy": "J",
        "en": "J"
    },
    {
        "opy": "K",
        "en": "K"
    },
    {
        "opy": "L",
        "en": "L"
    },
    {
        "opy": "M",
        "en": "M"
    },
    {
        "opy": "N",
        "en": "N"
    },
    {
        "opy": "O",
        "en": "O"
    },
    {
        "opy": "P",
        "en": "P"
    },
    {
        "opy": "Q",
        "en": "Q"
    },
    {
        "opy": "R",
        "en": "R"
    },
    {
        "opy": "S",
        "en": "S"
    },
    {
        "opy": "T",
        "en": "T"
    },
    {
        "opy": "U",
        "en": "U"
    },
    {
        "opy": "V",
        "en": "V"
    },
    {
        "opy": "W",
        "en": "W"
    },
    {
        "opy": "X",
        "en": "X"
    },
    {
        "opy": "Y",
        "en": "Y"
    },
    {
        "opy": "Z",
        "en": "Z"
    }
];

var constantKw = [];
for (var constant of Object.keys(constantValues)) {
	constantKw = constantKw.concat(constantValues[constant].values);
}

//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw);

var funcKw = actionKw.concat(valueFuncKw);/* 
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

var emptyStrKw = [
    {
        "opy": "",
        "en": ""
    }
];

var normalStrKw = [
    {
        "opy": "Zones",
        "en": "Zones"
    },
    {
        "opy": "Zone",
        "en": "Zone"
    },
    {
        "opy": "You Win",
        "en": "You Win"
    },
    {
        "opy": "You Lose",
        "en": "You Lose"
    },
    {
        "opy": "You",
        "en": "You"
    },
    {
        "opy": "Yes",
        "en": "Yes"
    },
    {
        "opy": "Yellow",
        "en": "Yellow"
    },
    {
        "opy": "Wow",
        "en": "Wow"
    },
    {
        "opy": "Worst",
        "en": "Worst"
    },
    {
        "opy": "Worse",
        "en": "Worse"
    },
    {
        "opy": "Wisdom",
        "en": "Wisdom"
    },
    {
        "opy": "Wins",
        "en": "Wins"
    },
    {
        "opy": "Winners",
        "en": "Winners"
    },
    {
        "opy": "Winner",
        "en": "Winner"
    },
    {
        "opy": "Win",
        "en": "Win"
    },
    {
        "opy": "Wild",
        "en": "Wild"
    },
    {
        "opy": "White",
        "en": "White"
    },
    {
        "opy": "West",
        "en": "West"
    },
    {
        "opy": "Well Played",
        "en": "Well Played"
    },
    {
        "opy": "Welcome",
        "en": "Welcome"
    },
    {
        "opy": "Warning",
        "en": "Warning"
    },
    {
        "opy": "Walls",
        "en": "Walls"
    },
    {
        "opy": "Wall",
        "en": "Wall"
    },
    {
        "opy": "Waiting",
        "en": "Waiting"
    },
    {
        "opy": "Wait",
        "en": "Wait"
    },
    {
        "opy": "Vortices",
        "en": "Vortices"
    },
    {
        "opy": "Vortex",
        "en": "Vortex"
    },
    {
        "opy": "Visible",
        "en": "Visible"
    },
    {
        "opy": "Victory",
        "en": "Victory"
    },
    {
        "opy": "Use Ultimate Ability",
        "en": "Use Ultimate Ability"
    },
    {
        "opy": "Use Ability 2",
        "en": "Use Ability 2"
    },
    {
        "opy": "Use Ability 1",
        "en": "Use Ability 1"
    },
    {
        "opy": "Uploading",
        "en": "Uploading"
    },
    {
        "opy": "Uploaded",
        "en": "Uploaded"
    },
    {
        "opy": "Upload",
        "en": "Upload"
    },
    {
        "opy": "Upgrades",
        "en": "Upgrades"
    },
    {
        "opy": "Upgrade",
        "en": "Upgrade"
    },
    {
        "opy": "Up",
        "en": "Up"
    },
    {
        "opy": "Unstable",
        "en": "Unstable"
    },
    {
        "opy": "Unsafe",
        "en": "Unsafe"
    },
    {
        "opy": "Unlocking",
        "en": "Unlocking"
    },
    {
        "opy": "Unlocked",
        "en": "Unlocked"
    },
    {
        "opy": "Unlock",
        "en": "Unlock"
    },
    {
        "opy": "Unlimited",
        "en": "Unlimited"
    },
    {
        "opy": "Unknown",
        "en": "Unknown"
    },
    {
        "opy": "Under",
        "en": "Under"
    },
    {
        "opy": "Ultimate Ability",
        "en": "Ultimate Ability"
    },
    {
        "opy": "Ugh",
        "en": "Ugh"
    },
    {
        "opy": "Turrets",
        "en": "Turrets"
    },
    {
        "opy": "Turret",
        "en": "Turret"
    },
    {
        "opy": "Try Again",
        "en": "Try Again"
    },
    {
        "opy": "Transferring",
        "en": "Transferring"
    },
    {
        "opy": "Transferred",
        "en": "Transferred"
    },
    {
        "opy": "Transfer",
        "en": "Transfer"
    },
    {
        "opy": "Traitors",
        "en": "Traitors"
    },
    {
        "opy": "Traitor",
        "en": "Traitor"
    },
    {
        "opy": "Trading",
        "en": "Trading"
    },
    {
        "opy": "Traded",
        "en": "Traded"
    },
    {
        "opy": "Trade",
        "en": "Trade"
    },
    {
        "opy": "Total",
        "en": "Total"
    },
    {
        "opy": "Times",
        "en": "Times"
    },
    {
        "opy": "Time",
        "en": "Time"
    },
    {
        "opy": "Tiebreaker",
        "en": "Tiebreaker"
    },
    {
        "opy": "Threats",
        "en": "Threats"
    },
    {
        "opy": "Threat Levels",
        "en": "Threat Levels"
    },
    {
        "opy": "Threat Level",
        "en": "Threat Level"
    },
    {
        "opy": "Threat",
        "en": "Threat"
    },
    {
        "opy": "That Was Awesome",
        "en": "That Was Awesome"
    },
    {
        "opy": "Thanks",
        "en": "Thanks"
    },
    {
        "opy": "Thank You",
        "en": "Thank You"
    },
    {
        "opy": "Terrible",
        "en": "Terrible"
    },
    {
        "opy": "Teams",
        "en": "Teams"
    },
    {
        "opy": "Teammates",
        "en": "Teammates"
    },
    {
        "opy": "Teammate",
        "en": "Teammate"
    },
    {
        "opy": "Team",
        "en": "Team"
    },
    {
        "opy": "Targets",
        "en": "Targets"
    },
    {
        "opy": "Target",
        "en": "Target"
    },
    {
        "opy": "Surviving",
        "en": "Surviving"
    },
    {
        "opy": "Survived",
        "en": "Survived"
    },
    {
        "opy": "Survive",
        "en": "Survive"
    },
    {
        "opy": "Superb",
        "en": "Superb"
    },
    {
        "opy": "Sunk",
        "en": "Sunk"
    },
    {
        "opy": "Sudden Death",
        "en": "Sudden Death"
    },
    {
        "opy": "Success",
        "en": "Success"
    },
    {
        "opy": "Suboptimal",
        "en": "Suboptimal"
    },
    {
        "opy": "Stunning",
        "en": "Stunning"
    },
    {
        "opy": "Stunned",
        "en": "Stunned"
    },
    {
        "opy": "Stun",
        "en": "Stun"
    },
    {
        "opy": "Strength",
        "en": "Strength"
    },
    {
        "opy": "Stopping",
        "en": "Stopping"
    },
    {
        "opy": "Stopped",
        "en": "Stopped"
    },
    {
        "opy": "Stop",
        "en": "Stop"
    },
    {
        "opy": "Staying",
        "en": "Staying"
    },
    {
        "opy": "Stayed",
        "en": "Stayed"
    },
    {
        "opy": "Stay Away",
        "en": "Stay Away"
    },
    {
        "opy": "Stay",
        "en": "Stay"
    },
    {
        "opy": "Status",
        "en": "Status"
    },
    {
        "opy": "Starting",
        "en": "Starting"
    },
    {
        "opy": "Started",
        "en": "Started"
    },
    {
        "opy": "Start",
        "en": "Start"
    },
    {
        "opy": "Stars",
        "en": "Stars"
    },
    {
        "opy": "Star",
        "en": "Star"
    },
    {
        "opy": "Stable",
        "en": "Stable"
    },
    {
        "opy": "Stabilizing",
        "en": "Stabilizing"
    },
    {
        "opy": "Stabilized",
        "en": "Stabilized"
    },
    {
        "opy": "Stabilize",
        "en": "Stabilize"
    },
    {
        "opy": "Spheres",
        "en": "Spheres"
    },
    {
        "opy": "Sphere",
        "en": "Sphere"
    },
    {
        "opy": "Speeds",
        "en": "Speeds"
    },
    {
        "opy": "Speed",
        "en": "Speed"
    },
    {
        "opy": "Spawning",
        "en": "Spawning"
    },
    {
        "opy": "Spawned",
        "en": "Spawned"
    },
    {
        "opy": "Spawn",
        "en": "Spawn"
    },
    {
        "opy": "Sparkles",
        "en": "Sparkles"
    },
    {
        "opy": "Spades",
        "en": "Spades"
    },
    {
        "opy": "Spade",
        "en": "Spade"
    },
    {
        "opy": "Southwest",
        "en": "Southwest"
    },
    {
        "opy": "Southeast",
        "en": "Southeast"
    },
    {
        "opy": "South",
        "en": "South"
    },
    {
        "opy": "Sorry",
        "en": "Sorry"
    },
    {
        "opy": "Sold",
        "en": "Sold"
    },
    {
        "opy": "Slowest",
        "en": "Slowest"
    },
    {
        "opy": "Slower",
        "en": "Slower"
    },
    {
        "opy": "Slow",
        "en": "Slow"
    },
    {
        "opy": "Slept",
        "en": "Slept"
    },
    {
        "opy": "Sleeping",
        "en": "Sleeping"
    },
    {
        "opy": "Sleep",
        "en": "Sleep"
    },
    {
        "opy": "Skipping",
        "en": "Skipping"
    },
    {
        "opy": "Skipped",
        "en": "Skipped"
    },
    {
        "opy": "Skip",
        "en": "Skip"
    },
    {
        "opy": "Sinking",
        "en": "Sinking"
    },
    {
        "opy": "Sink",
        "en": "Sink"
    },
    {
        "opy": "Shuffled",
        "en": "Shuffled"
    },
    {
        "opy": "Shuffle",
        "en": "Shuffle"
    },
    {
        "opy": "Shops",
        "en": "Shops"
    },
    {
        "opy": "Shop",
        "en": "Shop"
    },
    {
        "opy": "Severing",
        "en": "Severing"
    },
    {
        "opy": "Severed",
        "en": "Severed"
    },
    {
        "opy": "Severe",
        "en": "Severe"
    },
    {
        "opy": "Sever",
        "en": "Sever"
    },
    {
        "opy": "Server Load Peak",
        "en": "Server Load Peak"
    },
    {
        "opy": "Server Load Average",
        "en": "Server Load Average"
    },
    {
        "opy": "Server Load",
        "en": "Server Load"
    },
    {
        "opy": "Selling",
        "en": "Selling"
    },
    {
        "opy": "Sell",
        "en": "Sell"
    },
    {
        "opy": "Selecting",
        "en": "Selecting"
    },
    {
        "opy": "Selected",
        "en": "Selected"
    },
    {
        "opy": "Select",
        "en": "Select"
    },
    {
        "opy": "Securing",
        "en": "Securing"
    },
    {
        "opy": "Secured",
        "en": "Secured"
    },
    {
        "opy": "Secure",
        "en": "Secure"
    },
    {
        "opy": "Secondary Fire",
        "en": "Secondary Fire"
    },
    {
        "opy": "Scores",
        "en": "Scores"
    },
    {
        "opy": "Score",
        "en": "Score"
    },
    {
        "opy": "Saving",
        "en": "Saving"
    },
    {
        "opy": "Saved",
        "en": "Saved"
    },
    {
        "opy": "Save",
        "en": "Save"
    },
    {
        "opy": "Safe",
        "en": "Safe"
    },
    {
        "opy": "Running",
        "en": "Running"
    },
    {
        "opy": "Run",
        "en": "Run"
    },
    {
        "opy": "Rounds Won",
        "en": "Rounds Won"
    },
    {
        "opy": "Rounds Lost",
        "en": "Rounds Lost"
    },
    {
        "opy": "Rounds",
        "en": "Rounds"
    },
    {
        "opy": "Round",
        "en": "Round"
    },
    {
        "opy": "Right",
        "en": "Right"
    },
    {
        "opy": "Revealing",
        "en": "Revealing"
    },
    {
        "opy": "Revealed",
        "en": "Revealed"
    },
    {
        "opy": "Reveal",
        "en": "Reveal"
    },
    {
        "opy": "Resurrecting",
        "en": "Resurrecting"
    },
    {
        "opy": "Resurrected",
        "en": "Resurrected"
    },
    {
        "opy": "Resurrect",
        "en": "Resurrect"
    },
    {
        "opy": "Resources",
        "en": "Resources"
    },
    {
        "opy": "Resource",
        "en": "Resource"
    },
    {
        "opy": "Rescuing",
        "en": "Rescuing"
    },
    {
        "opy": "Rescued",
        "en": "Rescued"
    },
    {
        "opy": "Rescue",
        "en": "Rescue"
    },
    {
        "opy": "Remaining",
        "en": "Remaining"
    },
    {
        "opy": "Remain",
        "en": "Remain"
    },
    {
        "opy": "Red",
        "en": "Red"
    },
    {
        "opy": "Recovering",
        "en": "Recovering"
    },
    {
        "opy": "Recovered",
        "en": "Recovered"
    },
    {
        "opy": "Recover",
        "en": "Recover"
    },
    {
        "opy": "Records",
        "en": "Records"
    },
    {
        "opy": "Record",
        "en": "Record"
    },
    {
        "opy": "Ready",
        "en": "Ready"
    },
    {
        "opy": "Reaching",
        "en": "Reaching"
    },
    {
        "opy": "Reached",
        "en": "Reached"
    },
    {
        "opy": "Reach",
        "en": "Reach"
    },
    {
        "opy": "Rank S",
        "en": "Rank S"
    },
    {
        "opy": "Rank F",
        "en": "Rank F"
    },
    {
        "opy": "Rank E",
        "en": "Rank E"
    },
    {
        "opy": "Rank D",
        "en": "Rank D"
    },
    {
        "opy": "Rank C",
        "en": "Rank C"
    },
    {
        "opy": "Rank B",
        "en": "Rank B"
    },
    {
        "opy": "Rank A",
        "en": "Rank A"
    },
    {
        "opy": "Rank",
        "en": "Rank"
    },
    {
        "opy": "Raising",
        "en": "Raising"
    },
    {
        "opy": "Raised",
        "en": "Raised"
    },
    {
        "opy": "Raise",
        "en": "Raise"
    },
    {
        "opy": "Purple",
        "en": "Purple"
    },
    {
        "opy": "Purifying",
        "en": "Purifying"
    },
    {
        "opy": "Purify",
        "en": "Purify"
    },
    {
        "opy": "Purified",
        "en": "Purified"
    },
    {
        "opy": "Protecting",
        "en": "Protecting"
    },
    {
        "opy": "Protected",
        "en": "Protected"
    },
    {
        "opy": "Protect",
        "en": "Protect"
    },
    {
        "opy": "Projectiles",
        "en": "Projectiles"
    },
    {
        "opy": "Projectile",
        "en": "Projectile"
    },
    {
        "opy": "Primary Fire",
        "en": "Primary Fire"
    },
    {
        "opy": "Price",
        "en": "Price"
    },
    {
        "opy": "Power-Ups",
        "en": "Power-Ups"
    },
    {
        "opy": "Power-Up",
        "en": "Power-Up"
    },
    {
        "opy": "Power",
        "en": "Power"
    },
    {
        "opy": "Position",
        "en": "Position"
    },
    {
        "opy": "Points Lost",
        "en": "Points Lost"
    },
    {
        "opy": "Points Earned",
        "en": "Points Earned"
    },
    {
        "opy": "Points",
        "en": "Points"
    },
    {
        "opy": "Point",
        "en": "Point"
    },
    {
        "opy": "Playing",
        "en": "Playing"
    },
    {
        "opy": "Players",
        "en": "Players"
    },
    {
        "opy": "Player",
        "en": "Player"
    },
    {
        "opy": "Played",
        "en": "Played"
    },
    {
        "opy": "Play",
        "en": "Play"
    },
    {
        "opy": "Piles",
        "en": "Piles"
    },
    {
        "opy": "Pile",
        "en": "Pile"
    },
    {
        "opy": "Picking",
        "en": "Picking"
    },
    {
        "opy": "Picked",
        "en": "Picked"
    },
    {
        "opy": "Pick",
        "en": "Pick"
    },
    {
        "opy": "Phases",
        "en": "Phases"
    },
    {
        "opy": "Phase",
        "en": "Phase"
    },
    {
        "opy": "Payloads",
        "en": "Payloads"
    },
    {
        "opy": "Payload",
        "en": "Payload"
    },
    {
        "opy": "Participants",
        "en": "Participants"
    },
    {
        "opy": "Participant",
        "en": "Participant"
    },
    {
        "opy": "Overtime",
        "en": "Overtime"
    },
    {
        "opy": "Over",
        "en": "Over"
    },
    {
        "opy": "Outside",
        "en": "Outside"
    },
    {
        "opy": "Outgoing",
        "en": "Outgoing"
    },
    {
        "opy": "Out Of View",
        "en": "Out Of View"
    },
    {
        "opy": "Optimizing",
        "en": "Optimizing"
    },
    {
        "opy": "Optimized",
        "en": "Optimized"
    },
    {
        "opy": "Optimize",
        "en": "Optimize"
    },
    {
        "opy": "Optimal",
        "en": "Optimal"
    },
    {
        "opy": "Oops",
        "en": "Oops"
    },
    {
        "opy": "Oof",
        "en": "Oof"
    },
    {
        "opy": "On",
        "en": "On"
    },
    {
        "opy": "Off",
        "en": "Off"
    },
    {
        "opy": "Obtaining",
        "en": "Obtaining"
    },
    {
        "opy": "Obtained",
        "en": "Obtained"
    },
    {
        "opy": "Obtain",
        "en": "Obtain"
    },
    {
        "opy": "Objects",
        "en": "Objects"
    },
    {
        "opy": "Objectives",
        "en": "Objectives"
    },
    {
        "opy": "Objective",
        "en": "Objective"
    },
    {
        "opy": "Object",
        "en": "Object"
    },
    {
        "opy": "Not Today",
        "en": "Not Today"
    },
    {
        "opy": "Northwest",
        "en": "Northwest"
    },
    {
        "opy": "Northeast",
        "en": "Northeast"
    },
    {
        "opy": "North",
        "en": "North"
    },
    {
        "opy": "Normal",
        "en": "Normal"
    },
    {
        "opy": "None",
        "en": "None"
    },
    {
        "opy": "No Thanks",
        "en": "No Thanks"
    },
    {
        "opy": "No",
        "en": "No"
    },
    {
        "opy": "Nice Try",
        "en": "Nice Try"
    },
    {
        "opy": "Next Upgrade",
        "en": "Next Upgrade"
    },
    {
        "opy": "Next Targets",
        "en": "Next Targets"
    },
    {
        "opy": "Next Target",
        "en": "Next Target"
    },
    {
        "opy": "Next Round",
        "en": "Next Round"
    },
    {
        "opy": "Next Players",
        "en": "Next Players"
    },
    {
        "opy": "Next Player",
        "en": "Next Player"
    },
    {
        "opy": "Next Phase",
        "en": "Next Phase"
    },
    {
        "opy": "Next Objects",
        "en": "Next Objects"
    },
    {
        "opy": "Next Objective",
        "en": "Next Objective"
    },
    {
        "opy": "Next Object",
        "en": "Next Object"
    },
    {
        "opy": "Next Mission",
        "en": "Next Mission"
    },
    {
        "opy": "Next Level",
        "en": "Next Level"
    },
    {
        "opy": "Next Hostages",
        "en": "Next Hostages"
    },
    {
        "opy": "Next Hostage",
        "en": "Next Hostage"
    },
    {
        "opy": "Next Heroes",
        "en": "Next Heroes"
    },
    {
        "opy": "Next Hero",
        "en": "Next Hero"
    },
    {
        "opy": "Next Game",
        "en": "Next Game"
    },
    {
        "opy": "Next Form",
        "en": "Next Form"
    },
    {
        "opy": "Next Enemy",
        "en": "Next Enemy"
    },
    {
        "opy": "Next Enemies",
        "en": "Next Enemies"
    },
    {
        "opy": "Next Checkpoint",
        "en": "Next Checkpoint"
    },
    {
        "opy": "Next Attempt",
        "en": "Next Attempt"
    },
    {
        "opy": "Next Ally",
        "en": "Next Ally"
    },
    {
        "opy": "Next Allies",
        "en": "Next Allies"
    },
    {
        "opy": "Next",
        "en": "Next"
    },
    {
        "opy": "New Record",
        "en": "New Record"
    },
    {
        "opy": "New High Score",
        "en": "New High Score"
    },
    {
        "opy": "Near",
        "en": "Near"
    },
    {
        "opy": "My Mistake",
        "en": "My Mistake"
    },
    {
        "opy": "Most",
        "en": "Most"
    },
    {
        "opy": "More",
        "en": "More"
    },
    {
        "opy": "Monsters",
        "en": "Monsters"
    },
    {
        "opy": "Monster",
        "en": "Monster"
    },
    {
        "opy": "Money",
        "en": "Money"
    },
    {
        "opy": "Moderate",
        "en": "Moderate"
    },
    {
        "opy": "Missions",
        "en": "Missions"
    },
    {
        "opy": "Mission Failed",
        "en": "Mission Failed"
    },
    {
        "opy": "Mission Accomplished",
        "en": "Mission Accomplished"
    },
    {
        "opy": "Mission Aborted",
        "en": "Mission Aborted"
    },
    {
        "opy": "Mission",
        "en": "Mission"
    },
    {
        "opy": "Min",
        "en": "Min"
    },
    {
        "opy": "Mild",
        "en": "Mild"
    },
    {
        "opy": "Max",
        "en": "Max"
    },
    {
        "opy": "Losses",
        "en": "Losses"
    },
    {
        "opy": "Loss",
        "en": "Loss"
    },
    {
        "opy": "Losers",
        "en": "Losers"
    },
    {
        "opy": "Loser",
        "en": "Loser"
    },
    {
        "opy": "Locking",
        "en": "Locking"
    },
    {
        "opy": "Locked",
        "en": "Locked"
    },
    {
        "opy": "Lock",
        "en": "Lock"
    },
    {
        "opy": "Location",
        "en": "Location"
    },
    {
        "opy": "Loading",
        "en": "Loading"
    },
    {
        "opy": "Loaded",
        "en": "Loaded"
    },
    {
        "opy": "Load",
        "en": "Load"
    },
    {
        "opy": "Lives",
        "en": "Lives"
    },
    {
        "opy": "Limited",
        "en": "Limited"
    },
    {
        "opy": "Life",
        "en": "Life"
    },
    {
        "opy": "Levels",
        "en": "Levels"
    },
    {
        "opy": "Level Up",
        "en": "Level Up"
    },
    {
        "opy": "Level Down",
        "en": "Level Down"
    },
    {
        "opy": "Level",
        "en": "Level"
    },
    {
        "opy": "Less",
        "en": "Less"
    },
    {
        "opy": "Left",
        "en": "Left"
    },
    {
        "opy": "Least",
        "en": "Least"
    },
    {
        "opy": "Leaders",
        "en": "Leaders"
    },
    {
        "opy": "Leader",
        "en": "Leader"
    },
    {
        "opy": "Killstreaks",
        "en": "Killstreaks"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak"
    },
    {
        "opy": "Kills",
        "en": "Kills"
    },
    {
        "opy": "Kill",
        "en": "Kill"
    },
    {
        "opy": "Jumping",
        "en": "Jumping"
    },
    {
        "opy": "Jump",
        "en": "Jump"
    },
    {
        "opy": "Joining",
        "en": "Joining"
    },
    {
        "opy": "Joined",
        "en": "Joined"
    },
    {
        "opy": "Join",
        "en": "Join"
    },
    {
        "opy": "Items",
        "en": "Items"
    },
    {
        "opy": "Item",
        "en": "Item"
    },
    {
        "opy": "Invisible",
        "en": "Invisible"
    },
    {
        "opy": "Interact",
        "en": "Interact"
    },
    {
        "opy": "Intelligence",
        "en": "Intelligence"
    },
    {
        "opy": "Inside",
        "en": "Inside"
    },
    {
        "opy": "Innocent",
        "en": "Innocent"
    },
    {
        "opy": "Initial Upgrade",
        "en": "Initial Upgrade"
    },
    {
        "opy": "Initial Targets",
        "en": "Initial Targets"
    },
    {
        "opy": "Initial Target",
        "en": "Initial Target"
    },
    {
        "opy": "Initial Round",
        "en": "Initial Round"
    },
    {
        "opy": "Initial Players",
        "en": "Initial Players"
    },
    {
        "opy": "Initial Player",
        "en": "Initial Player"
    },
    {
        "opy": "Initial Phase",
        "en": "Initial Phase"
    },
    {
        "opy": "Initial Objects",
        "en": "Initial Objects"
    },
    {
        "opy": "Initial Objective",
        "en": "Initial Objective"
    },
    {
        "opy": "Initial Object",
        "en": "Initial Object"
    },
    {
        "opy": "Initial Mission",
        "en": "Initial Mission"
    },
    {
        "opy": "Initial Level",
        "en": "Initial Level"
    },
    {
        "opy": "Initial Hostage",
        "en": "Initial Hostage"
    },
    {
        "opy": "Initial Heroes",
        "en": "Initial Heroes"
    },
    {
        "opy": "Initial Hero",
        "en": "Initial Hero"
    },
    {
        "opy": "Initial Game",
        "en": "Initial Game"
    },
    {
        "opy": "Initial Form",
        "en": "Initial Form"
    },
    {
        "opy": "Initial Enemy",
        "en": "Initial Enemy"
    },
    {
        "opy": "Initial Enemies",
        "en": "Initial Enemies"
    },
    {
        "opy": "Initial Checkpoint",
        "en": "Initial Checkpoint"
    },
    {
        "opy": "Initial Attempt",
        "en": "Initial Attempt"
    },
    {
        "opy": "Initial Ally",
        "en": "Initial Ally"
    },
    {
        "opy": "Initial Allies",
        "en": "Initial Allies"
    },
    {
        "opy": "Initial",
        "en": "Initial"
    },
    {
        "opy": "Incoming",
        "en": "Incoming"
    },
    {
        "opy": "Income",
        "en": "Income"
    },
    {
        "opy": "In View",
        "en": "In View"
    },
    {
        "opy": "I Tried",
        "en": "I Tried"
    },
    {
        "opy": "I Give Up",
        "en": "I Give Up"
    },
    {
        "opy": "Hunting",
        "en": "Hunting"
    },
    {
        "opy": "Hunters",
        "en": "Hunters"
    },
    {
        "opy": "Hunter",
        "en": "Hunter"
    },
    {
        "opy": "Hunted",
        "en": "Hunted"
    },
    {
        "opy": "Hunt",
        "en": "Hunt"
    },
    {
        "opy": "Huh",
        "en": "Huh"
    },
    {
        "opy": "Hostages",
        "en": "Hostages"
    },
    {
        "opy": "Hostage",
        "en": "Hostage"
    },
    {
        "opy": "Hmmm",
        "en": "Hmmm"
    },
    {
        "opy": "Hitting",
        "en": "Hitting"
    },
    {
        "opy": "Hit",
        "en": "Hit"
    },
    {
        "opy": "High Scores",
        "en": "High Scores"
    },
    {
        "opy": "High Score",
        "en": "High Score"
    },
    {
        "opy": "Hiding",
        "en": "Hiding"
    },
    {
        "opy": "Hide",
        "en": "Hide"
    },
    {
        "opy": "Hidden",
        "en": "Hidden"
    },
    {
        "opy": "Heroes",
        "en": "Heroes"
    },
    {
        "opy": "Hero",
        "en": "Hero"
    },
    {
        "opy": "Here",
        "en": "Here"
    },
    {
        "opy": "Help",
        "en": "Help"
    },
    {
        "opy": "Hello",
        "en": "Hello"
    },
    {
        "opy": "Height",
        "en": "Height"
    },
    {
        "opy": "Hearts",
        "en": "Hearts"
    },
    {
        "opy": "Heart",
        "en": "Heart"
    },
    {
        "opy": "Healing",
        "en": "Healing"
    },
    {
        "opy": "Healers",
        "en": "Healers"
    },
    {
        "opy": "Healer",
        "en": "Healer"
    },
    {
        "opy": "Healed",
        "en": "Healed"
    },
    {
        "opy": "Heal",
        "en": "Heal"
    },
    {
        "opy": "Hands",
        "en": "Hands"
    },
    {
        "opy": "Hand",
        "en": "Hand"
    },
    {
        "opy": "Hacking",
        "en": "Hacking"
    },
    {
        "opy": "Hacked",
        "en": "Hacked"
    },
    {
        "opy": "Hack",
        "en": "Hack"
    },
    {
        "opy": "Guilty",
        "en": "Guilty"
    },
    {
        "opy": "Green",
        "en": "Green"
    },
    {
        "opy": "Goodbye",
        "en": "Goodbye"
    },
    {
        "opy": "Good Luck",
        "en": "Good Luck"
    },
    {
        "opy": "Good",
        "en": "Good"
    },
    {
        "opy": "Going",
        "en": "Going"
    },
    {
        "opy": "Goals",
        "en": "Goals"
    },
    {
        "opy": "Goal",
        "en": "Goal"
    },
    {
        "opy": "Go",
        "en": "Go"
    },
    {
        "opy": "Gg",
        "en": "Gg"
    },
    {
        "opy": "Games Won",
        "en": "Games Won"
    },
    {
        "opy": "Games Lost",
        "en": "Games Lost"
    },
    {
        "opy": "Games",
        "en": "Games"
    },
    {
        "opy": "Game",
        "en": "Game"
    },
    {
        "opy": "Frozen",
        "en": "Frozen"
    },
    {
        "opy": "Freezing",
        "en": "Freezing"
    },
    {
        "opy": "Freeze",
        "en": "Freeze"
    },
    {
        "opy": "Found",
        "en": "Found"
    },
    {
        "opy": "Forward",
        "en": "Forward"
    },
    {
        "opy": "Forms",
        "en": "Forms"
    },
    {
        "opy": "Form",
        "en": "Form"
    },
    {
        "opy": "Folding",
        "en": "Folding"
    },
    {
        "opy": "Folded",
        "en": "Folded"
    },
    {
        "opy": "Fold",
        "en": "Fold"
    },
    {
        "opy": "Flying",
        "en": "Flying"
    },
    {
        "opy": "Fly",
        "en": "Fly"
    },
    {
        "opy": "Flown",
        "en": "Flown"
    },
    {
        "opy": "Finishing",
        "en": "Finishing"
    },
    {
        "opy": "Finished",
        "en": "Finished"
    },
    {
        "opy": "Finish",
        "en": "Finish"
    },
    {
        "opy": "Finding",
        "en": "Finding"
    },
    {
        "opy": "Find",
        "en": "Find"
    },
    {
        "opy": "Final Upgrade",
        "en": "Final Upgrade"
    },
    {
        "opy": "Final Time",
        "en": "Final Time"
    },
    {
        "opy": "Final Targets",
        "en": "Final Targets"
    },
    {
        "opy": "Final Target",
        "en": "Final Target"
    },
    {
        "opy": "Final Round",
        "en": "Final Round"
    },
    {
        "opy": "Final Players",
        "en": "Final Players"
    },
    {
        "opy": "Final Player",
        "en": "Final Player"
    },
    {
        "opy": "Final Phase",
        "en": "Final Phase"
    },
    {
        "opy": "Final Objects",
        "en": "Final Objects"
    },
    {
        "opy": "Final Objective",
        "en": "Final Objective"
    },
    {
        "opy": "Final Object",
        "en": "Final Object"
    },
    {
        "opy": "Final Mission",
        "en": "Final Mission"
    },
    {
        "opy": "Final Level",
        "en": "Final Level"
    },
    {
        "opy": "Final Item",
        "en": "Final Item"
    },
    {
        "opy": "Final Hostages",
        "en": "Final Hostages"
    },
    {
        "opy": "Final Hostage",
        "en": "Final Hostage"
    },
    {
        "opy": "Final Heroes",
        "en": "Final Heroes"
    },
    {
        "opy": "Final Hero",
        "en": "Final Hero"
    },
    {
        "opy": "Final Game",
        "en": "Final Game"
    },
    {
        "opy": "Final Form",
        "en": "Final Form"
    },
    {
        "opy": "Final Enemy",
        "en": "Final Enemy"
    },
    {
        "opy": "Final Enemies",
        "en": "Final Enemies"
    },
    {
        "opy": "Final Checkpoint",
        "en": "Final Checkpoint"
    },
    {
        "opy": "Final Attempt",
        "en": "Final Attempt"
    },
    {
        "opy": "Final Ally",
        "en": "Final Ally"
    },
    {
        "opy": "Final Allies",
        "en": "Final Allies"
    },
    {
        "opy": "Final",
        "en": "Final"
    },
    {
        "opy": "Faults",
        "en": "Faults"
    },
    {
        "opy": "Fault",
        "en": "Fault"
    },
    {
        "opy": "Fastest",
        "en": "Fastest"
    },
    {
        "opy": "Faster",
        "en": "Faster"
    },
    {
        "opy": "Fast",
        "en": "Fast"
    },
    {
        "opy": "Far",
        "en": "Far"
    },
    {
        "opy": "Falling",
        "en": "Falling"
    },
    {
        "opy": "Fallen",
        "en": "Fallen"
    },
    {
        "opy": "Fall",
        "en": "Fall"
    },
    {
        "opy": "Failure",
        "en": "Failure"
    },
    {
        "opy": "Failing",
        "en": "Failing"
    },
    {
        "opy": "Failed",
        "en": "Failed"
    },
    {
        "opy": "Facing",
        "en": "Facing"
    },
    {
        "opy": "Faces",
        "en": "Faces"
    },
    {
        "opy": "Face",
        "en": "Face"
    },
    {
        "opy": "Extreme",
        "en": "Extreme"
    },
    {
        "opy": "Experience",
        "en": "Experience"
    },
    {
        "opy": "Exit",
        "en": "Exit"
    },
    {
        "opy": "Excellent",
        "en": "Excellent"
    },
    {
        "opy": "Escorting",
        "en": "Escorting"
    },
    {
        "opy": "Escorted",
        "en": "Escorted"
    },
    {
        "opy": "Escort",
        "en": "Escort"
    },
    {
        "opy": "Entrance",
        "en": "Entrance"
    },
    {
        "opy": "Enemy",
        "en": "Enemy"
    },
    {
        "opy": "Enemies",
        "en": "Enemies"
    },
    {
        "opy": "Eliminations",
        "en": "Eliminations"
    },
    {
        "opy": "Elimination",
        "en": "Elimination"
    },
    {
        "opy": "Eliminating",
        "en": "Eliminating"
    },
    {
        "opy": "Eliminated",
        "en": "Eliminated"
    },
    {
        "opy": "Eliminate",
        "en": "Eliminate"
    },
    {
        "opy": "East",
        "en": "East"
    },
    {
        "opy": "Dying",
        "en": "Dying"
    },
    {
        "opy": "Dropping",
        "en": "Dropping"
    },
    {
        "opy": "Dropped",
        "en": "Dropped"
    },
    {
        "opy": "Drop",
        "en": "Drop"
    },
    {
        "opy": "Drawn",
        "en": "Drawn"
    },
    {
        "opy": "Drawing",
        "en": "Drawing"
    },
    {
        "opy": "Draw",
        "en": "Draw"
    },
    {
        "opy": "Downloading",
        "en": "Downloading"
    },
    {
        "opy": "Downloaded",
        "en": "Downloaded"
    },
    {
        "opy": "Download",
        "en": "Download"
    },
    {
        "opy": "Down",
        "en": "Down"
    },
    {
        "opy": "Domes",
        "en": "Domes"
    },
    {
        "opy": "Dome",
        "en": "Dome"
    },
    {
        "opy": "Dodging",
        "en": "Dodging"
    },
    {
        "opy": "Dodged",
        "en": "Dodged"
    },
    {
        "opy": "Dodge",
        "en": "Dodge"
    },
    {
        "opy": "Distances",
        "en": "Distances"
    },
    {
        "opy": "Distance",
        "en": "Distance"
    },
    {
        "opy": "Disconnecting",
        "en": "Disconnecting"
    },
    {
        "opy": "Disconnected",
        "en": "Disconnected"
    },
    {
        "opy": "Disconnect",
        "en": "Disconnect"
    },
    {
        "opy": "Discarding",
        "en": "Discarding"
    },
    {
        "opy": "Discarded",
        "en": "Discarded"
    },
    {
        "opy": "Discard",
        "en": "Discard"
    },
    {
        "opy": "Die",
        "en": "Die"
    },
    {
        "opy": "Diamonds",
        "en": "Diamonds"
    },
    {
        "opy": "Diamond",
        "en": "Diamond"
    },
    {
        "opy": "Dexterity",
        "en": "Dexterity"
    },
    {
        "opy": "Detecting",
        "en": "Detecting"
    },
    {
        "opy": "Detected",
        "en": "Detected"
    },
    {
        "opy": "Detect",
        "en": "Detect"
    },
    {
        "opy": "Destroying",
        "en": "Destroying"
    },
    {
        "opy": "Destroyed",
        "en": "Destroyed"
    },
    {
        "opy": "Destroy",
        "en": "Destroy"
    },
    {
        "opy": "Destabilizing",
        "en": "Destabilizing"
    },
    {
        "opy": "Destabilized",
        "en": "Destabilized"
    },
    {
        "opy": "Destabilize",
        "en": "Destabilize"
    },
    {
        "opy": "Depth",
        "en": "Depth"
    },
    {
        "opy": "Delivering",
        "en": "Delivering"
    },
    {
        "opy": "Delivered",
        "en": "Delivered"
    },
    {
        "opy": "Deliver",
        "en": "Deliver"
    },
    {
        "opy": "Defence",
        "en": "Defence"
    },
    {
        "opy": "Defending",
        "en": "Defending"
    },
    {
        "opy": "Defended",
        "en": "Defended"
    },
    {
        "opy": "Defend",
        "en": "Defend"
    },
    {
        "opy": "Defeat",
        "en": "Defeat"
    },
    {
        "opy": "Decks",
        "en": "Decks"
    },
    {
        "opy": "Deck",
        "en": "Deck"
    },
    {
        "opy": "Dealt",
        "en": "Dealt"
    },
    {
        "opy": "Dealing",
        "en": "Dealing"
    },
    {
        "opy": "Deal",
        "en": "Deal"
    },
    {
        "opy": "Dead",
        "en": "Dead"
    },
    {
        "opy": "Danger",
        "en": "Danger"
    },
    {
        "opy": "Damaging",
        "en": "Damaging"
    },
    {
        "opy": "Damaged",
        "en": "Damaged"
    },
    {
        "opy": "Damage",
        "en": "Damage"
    },
    {
        "opy": "Current Upgrade",
        "en": "Current Upgrade"
    },
    {
        "opy": "Current Targets",
        "en": "Current Targets"
    },
    {
        "opy": "Current Target",
        "en": "Current Target"
    },
    {
        "opy": "Current Round",
        "en": "Current Round"
    },
    {
        "opy": "Current Players",
        "en": "Current Players"
    },
    {
        "opy": "Current Player",
        "en": "Current Player"
    },
    {
        "opy": "Current Phase",
        "en": "Current Phase"
    },
    {
        "opy": "Current Objects",
        "en": "Current Objects"
    },
    {
        "opy": "Current Objective",
        "en": "Current Objective"
    },
    {
        "opy": "Current Object",
        "en": "Current Object"
    },
    {
        "opy": "Current Mission",
        "en": "Current Mission"
    },
    {
        "opy": "Current Level",
        "en": "Current Level"
    },
    {
        "opy": "Current Hostages",
        "en": "Current Hostages"
    },
    {
        "opy": "Current Hostage",
        "en": "Current Hostage"
    },
    {
        "opy": "Current Heroes",
        "en": "Current Heroes"
    },
    {
        "opy": "Current Hero",
        "en": "Current Hero"
    },
    {
        "opy": "Current Game",
        "en": "Current Game"
    },
    {
        "opy": "Current Form",
        "en": "Current Form"
    },
    {
        "opy": "Current Enemy",
        "en": "Current Enemy"
    },
    {
        "opy": "Current Enemies",
        "en": "Current Enemies"
    },
    {
        "opy": "Current Checkpoint",
        "en": "Current Checkpoint"
    },
    {
        "opy": "Current Attempt",
        "en": "Current Attempt"
    },
    {
        "opy": "Current Ally",
        "en": "Current Ally"
    },
    {
        "opy": "Current Allies",
        "en": "Current Allies"
    },
    {
        "opy": "Current",
        "en": "Current"
    },
    {
        "opy": "Crouching",
        "en": "Crouching"
    },
    {
        "opy": "Crouched",
        "en": "Crouched"
    },
    {
        "opy": "Crouch",
        "en": "Crouch"
    },
    {
        "opy": "Critical",
        "en": "Critical"
    },
    {
        "opy": "Credits",
        "en": "Credits"
    },
    {
        "opy": "Credit",
        "en": "Credit"
    },
    {
        "opy": "Corrupting",
        "en": "Corrupting"
    },
    {
        "opy": "Corrupted",
        "en": "Corrupted"
    },
    {
        "opy": "Corrupt",
        "en": "Corrupt"
    },
    {
        "opy": "Cooldowns",
        "en": "Cooldowns"
    },
    {
        "opy": "Cooldown",
        "en": "Cooldown"
    },
    {
        "opy": "Control Points",
        "en": "Control Points"
    },
    {
        "opy": "Control Point",
        "en": "Control Point"
    },
    {
        "opy": "Constitution",
        "en": "Constitution"
    },
    {
        "opy": "Connecting",
        "en": "Connecting"
    },
    {
        "opy": "Connected",
        "en": "Connected"
    },
    {
        "opy": "Connect",
        "en": "Connect"
    },
    {
        "opy": "Congratulations",
        "en": "Congratulations"
    },
    {
        "opy": "Condition",
        "en": "Condition"
    },
    {
        "opy": "Come Here",
        "en": "Come Here"
    },
    {
        "opy": "Combo",
        "en": "Combo"
    },
    {
        "opy": "Clubs",
        "en": "Clubs"
    },
    {
        "opy": "Club",
        "en": "Club"
    },
    {
        "opy": "Clouds",
        "en": "Clouds"
    },
    {
        "opy": "Cloud",
        "en": "Cloud"
    },
    {
        "opy": "Checkpoints",
        "en": "Checkpoints"
    },
    {
        "opy": "Checkpoint",
        "en": "Checkpoint"
    },
    {
        "opy": "Chasing",
        "en": "Chasing"
    },
    {
        "opy": "Chased",
        "en": "Chased"
    },
    {
        "opy": "Chase",
        "en": "Chase"
    },
    {
        "opy": "Charisma",
        "en": "Charisma"
    },
    {
        "opy": "Challenge Accepted",
        "en": "Challenge Accepted"
    },
    {
        "opy": "Center",
        "en": "Center"
    },
    {
        "opy": "Caution",
        "en": "Caution"
    },
    {
        "opy": "Capturing",
        "en": "Capturing"
    },
    {
        "opy": "Captured",
        "en": "Captured"
    },
    {
        "opy": "Capture",
        "en": "Capture"
    },
    {
        "opy": "Buying",
        "en": "Buying"
    },
    {
        "opy": "Buy",
        "en": "Buy"
    },
    {
        "opy": "Burnt",
        "en": "Burnt"
    },
    {
        "opy": "Burning",
        "en": "Burning"
    },
    {
        "opy": "Burn",
        "en": "Burn"
    },
    {
        "opy": "Built",
        "en": "Built"
    },
    {
        "opy": "Building",
        "en": "Building"
    },
    {
        "opy": "Build",
        "en": "Build"
    },
    {
        "opy": "Bought",
        "en": "Bought"
    },
    {
        "opy": "Bosses",
        "en": "Bosses"
    },
    {
        "opy": "Boss",
        "en": "Boss"
    },
    {
        "opy": "Bonuses",
        "en": "Bonuses"
    },
    {
        "opy": "Bonus",
        "en": "Bonus"
    },
    {
        "opy": "Blue",
        "en": "Blue"
    },
    {
        "opy": "Blocking",
        "en": "Blocking"
    },
    {
        "opy": "Blocked",
        "en": "Blocked"
    },
    {
        "opy": "Block",
        "en": "Block"
    },
    {
        "opy": "Bids",
        "en": "Bids"
    },
    {
        "opy": "Bid",
        "en": "Bid"
    },
    {
        "opy": "Better",
        "en": "Better"
    },
    {
        "opy": "Best",
        "en": "Best"
    },
    {
        "opy": "Banning",
        "en": "Banning"
    },
    {
        "opy": "Banned",
        "en": "Banned"
    },
    {
        "opy": "Ban",
        "en": "Ban"
    },
    {
        "opy": "Bad",
        "en": "Bad"
    },
    {
        "opy": "Backward",
        "en": "Backward"
    },
    {
        "opy": "Avoiding",
        "en": "Avoiding"
    },
    {
        "opy": "Avoided",
        "en": "Avoided"
    },
    {
        "opy": "Avoid",
        "en": "Avoid"
    },
    {
        "opy": "Average",
        "en": "Average"
    },
    {
        "opy": "Attempts",
        "en": "Attempts"
    },
    {
        "opy": "Attempt",
        "en": "Attempt"
    },
    {
        "opy": "Attacking",
        "en": "Attacking"
    },
    {
        "opy": "Attacked",
        "en": "Attacked"
    },
    {
        "opy": "Attack",
        "en": "Attack"
    },
    {
        "opy": "Angle",
        "en": "Angle"
    },
    {
        "opy": "Ammunition",
        "en": "Ammunition"
    },
    {
        "opy": "Ally",
        "en": "Ally"
    },
    {
        "opy": "Allies",
        "en": "Allies"
    },
    {
        "opy": "Alive",
        "en": "Alive"
    },
    {
        "opy": "Alert",
        "en": "Alert"
    },
    {
        "opy": "Ability 2",
        "en": "Ability 2"
    },
    {
        "opy": "Ability 1",
        "en": "Ability 1"
    },
    {
        "opy": "Ability",
        "en": "Ability"
    },
    {
        "opy": "Abilities",
        "en": "Abilities"
    },
    {
        "opy": "???",
        "en": "???"
    },
    {
        "opy": "??",
        "en": "??"
    },
    {
        "opy": "?",
        "en": "?"
    },
    {
        "opy": "...",
        "en": "..."
    },
    {
        "opy": "----------",
        "en": "----------"
    },
    {
        "opy": "*",
        "en": "*"
    },
    {
        "opy": "!!!",
        "en": "!!!"
    },
    {
        "opy": "!!",
        "en": "!!"
    },
    {
        "opy": "!",
        "en": "!"
    }
];

var prefixStrKw = [
    {
        "opy": "#{0}",
        "en": "#{0}"
    },
    {
        "opy": "-> {0}",
        "en": "-> {0}"
    },
    {
        "opy": "<-> {0}",
        "en": "<-> {0}"
    },
    {
        "opy": "<- {0}",
        "en": "<- {0}"
    },
    {
        "opy": "Round {0}",
        "en": "Round {0}"
    }
];

var postfixStrKw = [
    {
        "opy": "{0} ->",
        "en": "{0} ->"
    },
    {
        "opy": "{0} <->",
        "en": "{0} <->"
    },
    {
        "opy": "{0} <-",
        "en": "{0} <-"
    },
    {
        "opy": "{0} M/S",
        "en": "{0} M/S"
    },
    {
        "opy": "{0} M",
        "en": "{0} M"
    },
    {
        "opy": "{0} Sec",
        "en": "{0} Sec"
    },
    {
        "opy": "{0}!!!",
        "en": "{0}!!!"
    },
    {
        "opy": "{0}!!",
        "en": "{0}!!"
    },
    {
        "opy": "{0}!",
        "en": "{0}!"
    },
    {
        "opy": "{0}%",
        "en": "{0}%"
    },
    {
        "opy": "{0}:",
        "en": "{0}:"
    },
    {
        "opy": "{0}???",
        "en": "{0}???"
    },
    {
        "opy": "{0}??",
        "en": "{0}??"
    },
    {
        "opy": "{0}?",
        "en": "{0}?"
    }
];

var binaryStrKw = [
    {
        "opy": "{0} -> {1}",
        "en": "{0} -> {1}"
    },
    {
        "opy": "{0} - {1}",
        "en": "{0} - {1}"
    },
    {
        "opy": "{0} != {1}",
        "en": "{0} != {1}"
    },
    {
        "opy": "{0} * {1}",
        "en": "{0} * {1}"
    },
    {
        "opy": "{0} / {1}",
        "en": "{0} / {1}"
    },
    {
        "opy": "{0} + {1}",
        "en": "{0} + {1}"
    },
    {
        "opy": "{0} <-> {1}",
        "en": "{0} <-> {1}"
    },
    {
        "opy": "{0} <- {1}",
        "en": "{0} <- {1}"
    },
    {
        "opy": "{0} <= {1}",
        "en": "{0} <= {1}"
    },
    {
        "opy": "{0} < {1}",
        "en": "{0} < {1}"
    },
    {
        "opy": "{0} == {1}",
        "en": "{0} == {1}"
    },
    {
        "opy": "{0} = {1}",
        "en": "{0} = {1}"
    },
    {
        "opy": "{0} >= {1}",
        "en": "{0} >= {1}"
    },
    {
        "opy": "{0} > {1}",
        "en": "{0} > {1}"
    },
    {
        "opy": "{0} And {1}",
        "en": "{0} And {1}"
    },
    {
        "opy": "{0} Vs {1}",
        "en": "{0} Vs {1}"
    },
    {
        "opy": "{0}, {1}",
        "en": "{0}, {1}"
    },
    {
        "opy": "{0}: {1}",
        "en": "{0}: {1}"
    },
    {
        "opy": "{0}:{1}",
        "en": "{0}:{1}"
    },
    {
        "opy": "{0} {1}",
        "en": "{0} {1}"
    }
];

var ternaryStrKw = [
    {
        "opy": "{0} - {1} - {2}",
        "en": "{0} - {1} - {2}"
    },
    {
        "opy": "{0} : {1} : {2}",
        "en": "{0} : {1} : {2}"
    },
    {
        "opy": "{0} {1} {2}",
        "en": "{0} {1} {2}"
    },
    {
        "opy": "{0}, {1}, And {2}",
        "en": "{0}, {1}, And {2}"
    },
    {
        "opy": "{0}: {1} And {2}",
        "en": "{0}: {1} And {2}"
    }
];

var surroundStrKw = [
    {
        "opy": "({0})",
        "en": "({0})"
    },
    {
        "opy": "¡{0}!",
        "en": "¡{0}!"
    },
    {
        "opy": "¿{0}?",
        "en": "¿{0}?"
    }
];

var stringKw = normalStrKw.concat(prefixStrKw).concat(postfixStrKw).concat(binaryStrKw).concat(ternaryStrKw).concat(surroundStrKw).concat(emptyStrKw);

/*for (var hero of getConstantKw("HERO CONSTANT")) {
	stringKw.push(hero.opy);
}*/

var strTokens = [];

//Generate string tokens
//normal strings
for (var j = 0; j < normalStrKw.length; j++) {
	strTokens.push(normalStrKw[j].opy.toLowerCase());
}

//prefix strings
for (var j = 0; j < prefixStrKw.length; j++) {
	strTokens.push(prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase());
}

//postfix strings
for (var j = 0; j < postfixStrKw.length; j++) {
	strTokens.push(postfixStrKw[j].opy.substring("{0}".length).toLowerCase());
}

//ternary strings
for (var j = 0; j < ternaryStrKw.length; j++) {
	strTokens.push(ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
	strTokens.push(ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase());
}

//binary strings
for (var j = 0; j < binaryStrKw.length; j++) {
	strTokens.push(binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
}


//surround strings
for (var j = 0; j < surroundStrKw.length; j++) {
	strTokens.push(surroundStrKw[j].opy[0].toLowerCase())
	strTokens.push(surroundStrKw[j].opy[surroundStrKw[j].opy.length-1].toLowerCase())
}

//heroes
for (var hero of getConstantKw("HERO CONSTANT")) {
	strTokens.push(hero.opy.toLowerCase().substring("Hero.".length));
}

//Sort reverse alphabetical order for greediness
strTokens = strTokens.sort().reverse();
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

//This file is only used for the vs code extension.

const specialFuncs = [
    //Special functions and built-in macros
    {
        opy: "chase",
        "description": "Gradually modifies the value of a variable (global or player) at a specific rate, or over time.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to modify gradually.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "RATE OR DURATION",
                "description": "The amount of change that will happen to the variable's value each second, or the amount of time, in seconds, over which the variable's value will approach the destination.\n\nPut `rate=xxxx` or `duration=xxxx` as argument.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "CHASE RATE REEVALUATION",
                "default": "DESTINATION AND RATE"
            }
        ],
    },{
        opy: "stopChasingVariable",
        "description": "Stops an in-progress chase of a variable (global or player), leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },{
        opy: "wait",
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart. If omitted, defaults to `Wait.IGNORE_CONDITION`.",
                "type": "WAIT BEHAVIOR",
                "default": "IGNORE CONDITION"
            }
        ]
    },{
        opy: "raycast",
        description: 
`Defines a raycast to be then used with \`hasLoS()\`, \`getPlayerHit()\`, \`getNormal()\` or \`getHitPosition()\`.
For line of sight, the 3rd argument must be \`los=\` and the 4th and 5th arguments must be omitted.

Examples:
- \`raycast(A, B, include=C, exclude=D, includePlayerObjects=false).getHitPosition()\`
- \`raycast(A, B, los=BarrierLos.BLOCKED_BY_ALL_BARRIERS).hasLoS()\``,
        args: [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "include=players To Include",
                "description": "Which players can be hit by this ray cast. Note: if doing a line-of-sight check, use `los=BarrierLos.xxxx` instead.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "exclude=players To Exclude",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "include Player Objects=bool",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },{
        opy: "all",
        "description": "Whether the specified condition evaluates to true for every value in the specified iterable. Requires a condition.\n\nExample: `all(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "ITERABLE",
                "default": "GLOBAL VARIABLE"
            },
        ]
    },{
        opy: "any",
        "description": "Whether the specified condition evaluates to true for any value in the specified iterable. Requires a condition.\n\nExample: `any(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "ITERABLE",
                "default": "GLOBAL VARIABLE"
            },
        ]
    },{
        opy: "floor",
        "description": "The integer that is the floor of the specified value (equivalent to rounding down).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the floor of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "round",
        "description": "The integer that is closest to the specified value (equivalent to rounding to nearest).\n\nTo round up or down, use `ceil()` or `floor()`.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the nearest integer of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "ceil",
        "description": "The integer that is the ceiling of the specified value (equivalent to rounding up).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the ceiling of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "sorted",
        "description": "A copy of the specified array with the values sorted according to the lambda function that is evaluated for each element.\n\nExample: `sorted(getAllPlayers(), key=lambda x: x.getScore())`",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "key=lambda",
                "description": "The lambda function that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Can be omitted if the array is sorted without a special key (equivalent to `lambda x: x`).",
                "type": "LAMBDA",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ]
    },{
        opy: "getAllPlayers",
        description: "Built-in macro for `getPlayers(Team.ALL)`.",
        args: [],
    },{
        opy: "hudText",
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.\n\nNote: you can use the macros `hudHeader`, `hudSubheader` and `hudSubtext` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "TEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudHeader",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudSubtext",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBTEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudSubheader",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "RULE_CONDITION",
        "description": 
`Equivalent to true if every condition in the rule is true. Can only be used in the following cases:

- \`while RULE_CONDITION\`
- \`while not RULE_CONDITION\`
- \`if RULE_CONDITION: continue\`
- \`if not RULE_CONDITION: continue\`
- \`if RULE_CONDITION: abort\`
- \`if not RULE_CONDITION: abort\``,
        "args": null
    }
];

const specialMemberFuncs = [
    
    {
        opy: "append",
        "description": "Appends the specified value to the specified array. Note that this function is really the equivalent of `extend()`, that is, `[1,2].append([3,4])` will produce `[1,2,3,4]` instead of `[1,2,[3,4]]`. If used without an assignment, modifies the array in-place.\n\nExample: `A.append(3)`",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "slice",
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "index",
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "hasLoS",
        description: "Whether the start and end position of a raycast have line of sight with each other.",
        args: [],
    },{
        opy: "getNormal",
        description: "The surface normal at the raycast hit position (or from end pos to start pos if no hit occurs).",
        args: [],
    },{
        opy: "getPlayerHit",
        description: "The player hit by the raycast (or null if no player is hit).",
        args: [],
    },{
        opy: "getHitPosition",
        description: "The position where the raycast hits a surface, object, or player (or the end pos if no hit occurs).",
        args: [],
    }
];

module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
    decompileConditions: decompileConditions,
	compile: compile,
	actionKw: actionKw,
	valueFuncKw: valueFuncKw,
	constantValues: constantValues,
	eventKw: eventKw,
	ruleKw: ruleKw,
	stringKw: stringKw,
	specialFuncs: specialFuncs,
	specialMemberFuncs: specialMemberFuncs,

};
