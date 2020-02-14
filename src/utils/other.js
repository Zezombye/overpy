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

function getUtf8Length(s){
	//console.log("getting utf8 length of '"+s+"'");
    var b = 0, i = 0, c;
    for(;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
    return b;
}

function isNumber(x) {
	if (x.trim() === "") {
		return false;
	}
	return !isNaN(x);
}

function getFileStackCopy() {
	return fileStack.map(x => Object.assign({}, x));
}

function getConstantKw(type) {
	return constantValues[type].values;
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

/*
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
*/


//Returns 4 spaces per tab level.
function tabLevel(nbTabs) {
	var result = "";
	for (var i = 0; i < nbTabs; i++) {
		result += "    ";
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

/*//Returns the indent, assuming 1 indent = 4 spaces.
function getIndent(content) {
	var indent = 0;
	var i = 0;
	while (content.startsWith("    ", i)) {
		indent++;
		i += 4;
	}
	return indent;
}*/

//ty stackoverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


