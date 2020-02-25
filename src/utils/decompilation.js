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

function decompileCustomGameSettingsDict(dict, kwObj) {
	var result = {};
	for (var elem of dict) {
		elem = elem.trim();
		if (elem === "") {
			continue;
		}

		var keyName = null;
		var value = null;
		var objKeys = Object.keys(kwObj).sort(function(a,b) {
			var locA = (currentLanguage in kwObj[a] ? kwObj[a][currentLanguage] : kwObj[a]["en-US"])
			var locB = (currentLanguage in kwObj[b] ? kwObj[b][currentLanguage] : kwObj[b]["en-US"])
			return locA.localeCompare(locB)
		}).reverse()
		console.log(objKeys)
		for (var key of objKeys) {
			if (currentLanguage in kwObj[key]) {
				if (elem.toLowerCase().startsWith(kwObj[key][currentLanguage].toLowerCase())) {
					keyName = key;
					value = elem.substring(kwObj[key][currentLanguage].length);
					break;
				}
			} else {
				if (elem.toLowerCase().startsWith(kwObj[key]["en-US"].toLowerCase())) {
					keyName = key;
					value = elem.substring(kwObj[key]["en-US"].length);
					break;
				}
			}
		}

		if (keyName === null) {
			error("No translation found for key of element '"+elem+"'");
		}

		if (!value.startsWith(":")) {
			console.log(value);
			error("Expected ':' after key in element '"+elem+"'");
		}
		value = value.substring(1).trim();

		if (typeof kwObj[keyName].values === "object") {
			value = topy(value, kwObj[keyName].values);

		} else if (kwObj[keyName].values === "_string") {
			value = value.substring(1, value.length-1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");

		} else if (kwObj[keyName].values === "_percent") {
			if (!value.endsWith("%")) {
				error("Expected a percentage for value of elem '"+elem+"'");
			}
			value = parseInt(value.substring(0, value.length-1));

		} else if (kwObj[keyName].values === "_int") {
			value = parseInt(value);
			
		} else if (kwObj[keyName].values === "_float") {
			value = parseFloat(value);
			
		} else if (["_boolYesNo", "_boolOnOff", "_boolEnabled"].includes(kwObj[keyName].values)) {
			value = topy(value, customGameSettingsKw);
			if (["_yes", "_enabled", "_on"].includes(value)) {
				value = true;
			} else if (["_no", "_disabled", "_off"].includes(value)) {
				value = false;
			} else {
				error("Unknown value '"+value+"'");
			}

		} else if (kwObj[keyName].values === "_boolReverseEnabled") {
			value = topy(value, customGameSettingsKw);
			if (value === "_disabled") {
				value = true;
			} else if (value === "_enabled") {
				value = false;
			} else {
				error("Unknown value '"+value+"'");
			}
		} else {
			error("Unknown value type '"+kwObj[keyName].values+"' for '"+keyName+"'");
		}

		result[keyName] = value;
	}
	return result;
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
			
		} else if (!currentPositionIsString && (content.charAt(i) == '"'/* || content.charAt(i) == '\''*/)) {
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


//This function returns the index of each first-level opening and closing brackets/parentheses.
//Example: the string "3*(4*(')'))+(4*5)" will return [2, 10, 12, 16].
function getBracketPositions(content, returnFirstPair=false, stringIncludesApos=false) {
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
		} else if (!currentPositionIsString && (content.charAt(i) == '"' || (content.charAt(i) == '\'' && stringIncludesApos))) {
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


//Returns true if the function always returns a player array.
function isPlayerArrayInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a player array instruction");
	
	var playerArrayInstructions = [
		"getDeadPlayers",
		"getLivingPlayers",
		"getPlayers",
		"getPlayersNotOnObjective",
		"getPlayersOnObjective",
		"getPlayersInViewAngle",
		"getPlayersOnHero",
		"getPlayersInRadius",
	];
	
	if (playerArrayInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}
