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

function compileCustomGameSettingsDict(dict, refDict) {
	var result = {};
	for (var key of Object.keys(dict)) {
		var wsKey = tows(key, refDict);

		if (typeof refDict[key].values === "object") {
			result[wsKey] = tows(dict[key], refDict[key].values);

		} else if (refDict[key].values === "_string") {
			if (getUtf8Length(dict[key]) > refDict[key].maxBytes) {
				error("String for '"+key+"' must not have more than "+refDict[key].maxBytes+" bytes");
			}
			result[wsKey] = '"'+dict[key].replace(/\\/g, '\\\\').replace(/"/g, '\\"')+'"';

		} else if (refDict[key].values === "_percent" || refDict[key].values === "_int" || refDict[key].values === "_float") {
			if (dict[key] > refDict[key].max) {
				error("Value for '"+key+"' must not exceed "+refDict[key].max+"%");
			}
			if (dict[key] < refDict[key].min) {
				error("Value for '"+key+"' must be higher than "+refDict[key].min+"%");
			}
			if (refDict[key].values === "_int") {
				if (!Number.isInteger(dict[key])) {
					error("Value for '"+key+"' must be an integer");
				}
			}
			if (refDict[key].values === "_percent") {
				result[wsKey] = dict[key]+"%";
			} else {
				result[wsKey] = dict[key];
			}

		} else if (refDict[key].values === "_boolYesNo") {
			result[wsKey] = (dict[key] === true ? tows("_yes", customGameSettingsKw) : tows("_no", customGameSettingsKw));
		} else if (refDict[key].values === "_boolEnabled") {
			result[wsKey] = (dict[key] === true ? tows("_enabled", customGameSettingsKw) : tows("_disabled", customGameSettingsKw));
		} else if (refDict[key].values === "_boolOnOff") {
			result[wsKey] = (dict[key] === true ? tows("_on", customGameSettingsKw) : tows("_off", customGameSettingsKw));
		} else if (refDict[key].values === "_boolReverseEnabled") {
			result[wsKey] = (dict[key] === true ? tows("_disabled", customGameSettingsKw) : tows("_enabled", customGameSettingsKw));
		} else {
			error("Unknown value type "+refDict[key].values);
		}
	}
	return result;
}

//As the workshop does not accept numbers that are too long (such as 0.22585181552505867), trim all numbers to 15 decimal places.
function trimNb(x) {
	var result = ""+x;
	if (result.indexOf('.') >= 0) {
		result = result.substring(0,result.indexOf('.')+16);
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
	
	//console.log("Splitting tokens '"+dispTokens(tokens)+"' on "+str);
	
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
		error("Lexer broke (bracket level is "+bracketsLevel+")");
	}
	
	if (rtl) {
		result.unshift(tokens.slice(end+1, latestDelimiterPos));
	} else {
		result.push(tokens.slice(latestDelimiterPos+1, end));
	}
		
	if (result[0].length === 0 && result.length === 1) {
		return [];
	} else {
		return result;
	}
	
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



//Converts a token list, or a token object to string.
function dispTokens(content) {
	if (content instanceof Array) {
		var result = content.map(x => x.text).join(" ");
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



