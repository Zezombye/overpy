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

function translateSubroutineToPy(content) {
	content = content.trim();

	if (subroutines.map(x => x.name).includes(content)) {
		//modify the name
		if (content.startsWith("_") || reservedFuncNames.includes(content)) {
			content = "_"+content;
		}
		if (content.endsWith("__")) {
			content += "_";
		}
		if (!/[A-Za-z_]\w*/.test(content)) {
			error("Unauthorized name for subroutine: '"+content+"'");
		}
		return content;
	} else if (defaultSubroutineNames.includes(content)) {
		//Add the subroutine as it doesn't already exist (else it would've been caught by the first if)
		addSubroutine(content, defaultSubroutineNames.indexOf(content));
		return content;
	} else {
		error("Unknown subroutine '"+content+"'");
	}
}

function translateSubroutineToWs(content) {
	for (var i = 0; i < subroutines.length; i++) {
		if (subroutines[i].name === content) {
			if (obfuscationSettings.obfuscateNames) {
				return obfuscatedVarNames[i];
			} else {
				return content;
			}
		}
	}

	if (defaultSubroutineNames.includes(content)) {
		//Add the subroutine as it doesn't already exist (else it would've been caught by the for)
		//However, only do this if it is a default subroutine name
		addSubroutine(content, defaultSubroutineNames.indexOf(content));
		if (obfuscationSettings.obfuscateNames) {
			for (var i = 0; i < defaultSubroutineNames.length; i++) {
				if (defaultSubroutineNames[i].name === content) {
					return obfuscatedVarNames[i];
				}
			}
		} else {
			return content;
		}
	}
	error("Undeclared subroutine '"+content+"'");
}

function addSubroutine(content, index) {
	if (index === undefined) {
		error("Index is undefined");
	}
	if (reservedFuncNames.includes(content)) {
		error("Subroutine name '"+content+"' is a built-in function or keyword");
	}
	subroutines.push({
		"name": content,
		"index": index,
	})
}

function translateVarToAvoidKeywords(content, isGlobalVariable) {
	//modify the name
	if (content.endsWith("_") || isGlobalVariable && reservedNames.includes(content) || !isGlobalVariable && reservedMemberNames.includes(content)) {
		content += "_";
	}
	if (!/[A-Za-z_]\w*/.test(content)) {
		error("Unauthorized name for variable: '"+content+"'");
	}
	return content;
}

function translateVarToPy(content, isGlobalVariable) {
	content = content.trim();
	content = translateVarToAvoidKeywords(content, isGlobalVariable)

	var varArray = isGlobalVariable ? globalVariables : playerVariables;
	if (varArray.map(x => x.name).includes(content)) {
		return content;

	} else if (defaultVarNames.includes(content)) {
		//Add the variable as it doesn't already exist (else it would've been caught by the first if)
		addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content));
		return content;
	} else {
		error("Unknown variable '"+content+"'");
	}
}

function translateVarToWs(content, isGlobalVariable) {

	var varArray = isGlobalVariable ? globalVariables : playerVariables;
	for (var i = 0; i < varArray.length; i++) {
		if (varArray[i].name === content) {
			if (obfuscationSettings.obfuscateNames) {
				return obfuscatedVarNames[i]
			} else {
				return content;
			}
		}
	}
	if (defaultVarNames.includes(content)) {
		//Add the variable as it doesn't already exist (else it would've been caught by the for)
		//However, only do this if it is a default variable name
		addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content));
		if (obfuscationSettings.obfuscateNames) {
			for (var i = 0; i < varArray.length; i++) {
				if (varArray[i].name === content) {
					return obfuscatedVarNames[i];
				}
			}
		} else {
			return content;
		}
	}
	error("Undeclared "+(isGlobalVariable ? "global" : "player")+" variable '"+content+"'");
}

//Adds a variable to the global/player variable arrays.
function addVariable(content, isGlobalVariable, index, initValue=null) {
	if (index === undefined) {
		error("Index is undefined");
	}
	if (typeof index === "string") {
		index = parseInt(index);
	}
	if (reservedNames.includes(content)) {
		error("Variable name '"+content+"' is a reserved word");
	}
	if (isGlobalVariable) {
		globalVariables.push({
			"name": content,
			"index": index,
		});
		if (initValue) {
			globalInitDirectives.push(new Ast("__assignTo__", [
				new Ast("__globalVar__", [new Ast(content, [], [], "GlobalVariable")]),
				parse(initValue)
			]));
		}
	} else {
		playerVariables.push({
			"name": content,
			"index": index,
		});
		if (initValue) {
			playerInitDirectives.push(new Ast("__assignTo__", [
				new Ast("__playerVar__", [
					new Ast("eventPlayer"), new Ast(content, [], [], "PlayerVariable"),
				]),
				parse(initValue),
			]));
		}
	}
}

//Checks if the given name is a variable name
function isVarName(content, checkForGlobalVar) {
	var varArray = checkForGlobalVar ? globalVariables : playerVariables;
	if (defaultVarNames.includes(content)) {
		return true;
	}
	for (var variable of varArray) {
		if (variable.name === content) {
			return true;
		}
	}
	return false;
}

//Checks if the given name is a subroutine name
function isSubroutineName(content) {
	if (defaultSubroutineNames.includes(content)) {
		return true;
	}
	for (var subroutine of subroutines) {
		if (subroutine.name === content) {
			return true;
		}
	}
	return false;
}
