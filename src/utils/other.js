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


//camelCase -> UPPER_CASE
function camelCaseToUpperCase(str) {
	return str.split(/(?=[A-Z])/).join('_').toUpperCase();
}

//UPPER_CASE -> camelCase
function upperCaseToCamelCase(str) {
	var result = str.toLowerCase().replace(/(_\w)/g, x => x[1].toUpperCase());
	result = result[0].toLowerCase()+result.substring(1)
	return result;
}

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function isNumber(x) {
	if ((""+x).trim() === "" || x === null) {
		return false;
	}
	return !isNaN(x);
}

function getFileStackCopy() {
	return fileStack.map(x => Object.assign({}, x));
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

//Returns 4 spaces (or a tab) per tab level.
function tabLevel(nbTabs, useTabs=false) {
	var result = "";
	for (var i = 0; i < nbTabs; i++) {
		if (useTabs) {
			result += "\t";
		} else {
			result += "    ";
		}
	}
	return result;
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

//ty stackoverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Used for automatically generated names.
function getUniqueNumber() {
	uniqueNumber++;
	return uniqueNumber;
}

