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

	var lines = tokenize(content);

    var astRules = parseLines(lines);
    
    for (var elem of astRules) {
        console.log(astToString(elem));
    }
    
   	console.log(astRules);
    var parsedAstRules = parseAstRules(astRules);

    for (var elem of parsedAstRules) {
        console.log(astToString(elem));
    }
    console.log(parsedAstRules);

    var result = generateVariablesField()+generateSubroutinesField()+astRulesToWs(parsedAstRules);
    
/*
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
*/

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

	var result = tows("__variables__", ruleKw)+" {\n";

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

