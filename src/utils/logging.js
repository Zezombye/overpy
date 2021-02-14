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

//Logging stuff
function error(str, token) {
	
	if (token !== undefined && token.fileStack !== undefined) {
		fileStack = token.fileStack;
	}
	
	//var error = "ERROR: ";
	var error = "";
	error += str;
	if (token !== undefined) {
		error += "'"+dispTokens(token)+"'";
	}
	if (fileStack) {
		if (fileStack.length !== 0) {
			fileStack.reverse();
			for (var file of fileStack) {
				error += "\n\t| line "+file.currentLineNb+", col "+file.currentColNb+", at "+file.name;
			}
		}
	} else {
		error += "\n\t| <no filestack>";
	}
	
	throw new Error(error);
}

function warn(warnType, message) {
	
	if (!suppressedWarnings.includes(warnType) && !globalSuppressedWarnings.includes(warnType) && warnType !== "w_type_check") {
		var warning = message+" ("+warnType+")";
		if (fileStack.length !== 0) {
			fileStack.reverse();
			for (var file of fileStack) {
				warning += "\n\t| line "+file.currentLineNb+", col "+file.currentColNb+", at "+file.name;
			}
		}
		console.warn(warning);
		//suppressedWarnings.push(warnType);
		encounteredWarnings.push(warning);
	}
}

if (DEBUG_MODE) {
	var debug = function(str) {
		console.debug("DEBUG: "+str);
	}
} else {
	var debug = function(str) {}
}

function getTypeCheckFailedMessage(content, argNb, expectedType, received) {

	var funcDisplayName = functionNameToString(content);
	var argKind = funcDisplayName.startsWith("operator ") ? "operand": "argument";

	var receivedFuncName = functionNameToString(received);

	return `Expected type '${typeToString(expectedType)}' for the ${nthOfNumber(argNb+1)} ${argKind} of ${funcDisplayName}, but got ${receivedFuncName} of type '${typeToString(received.type)}'`;
}

function functionNameToString(content) {

	if (typeof content === "string") {
		error("Expected an object for internal function 'functionNameToString' but got '"+content+"'");
	}

	var funcToOperatorMapping = {
		"__add__": "'+' or '+='",
		"__assignTo__": "'='",
		"__divide__": "'/' or '/='",
		"__equals__": "'=='",
		"__inequals__": "'!='",
		"__greaterThan__": "'>'",
		"__greaterThanOrEquals__": "'>='",
		"__lessThan__": "'<'",
		"__lessThanOrEquals__": "'<='",
		"__modulo__": "'%' or '%='",
		"__multiply__": "'*' or '*='",
		"__raiseToPower__": "'**' or '**='",
		"__subtract__": "'-' or '-='",
		//todo
	}

	var funcToDisplayMapping = {
		"__chaseAtRate__": "chase",
		"__chaseOverTime__": "chase",
		"__raycast__": "raycast",
		//todo
	}

	var funcDisplayName = null;

	if (content.name in funcToOperatorMapping) {
		funcDisplayName = "operator "+funcToOperatorMapping[content.name];
	} else if (content.name in funcToDisplayMapping) {
		funcDisplayName = "function '"+funcToDisplayMapping[content.name]+"'";
	} else if (isTypeSuitable("StringLiteral", content.type)) {
		funcDisplayName = "string "+escapeString(content.name, false);
	} else if (content.name === "__number__") {
		funcDisplayName = "number '"+content.args[0].numValue+"'";
	} else {
		funcDisplayName = "function '"+content.name+"'";
	}

	return funcDisplayName;
}

function typeToString(type) {
	if (typeof type === "string") {
		return type;
	} else if (type instanceof Array) {
		return type.map(x => typeToString(x)).join(" | ");
	} else if (typeof type === "object") {
		if ("Array" in type) {
			return typeToString(type["Array"])+"[]";

		} else if ("Vector" in type || "Direction" in type || "Position" in type || "Velocity" in type) {
			return Object.keys(type)[0]+"["+type[Object.keys(type)[0]].map(x => typeToString(x)).join(", ")+"]";

		} else {
			error("Could not display type '"+JSON.stringify(type)+"'");
		}
	} else {
		error("Could not display type '"+type+"'");
	}
}

function nthOfNumber(nb) {
	if (nb === 1) {
		return "1st";
	} else if (nb === 2) {
		return "2nd";
	} else if (nb === 3) {
		return "3rd";
	} else {
		return nb+"th";
	}
}


function astToString(ast, nbTabs=0) {
	var result = "";
	if (ast === undefined) {
		return "__undefined__";
	}
	result += ast.name;
	if (ast.args === undefined) {
		result += "(__undefined__)";

	} else if (ast.args.length > 0) {
		result += "(" + ast.args.map(x => astToString(x)).join(", ")+")";
	}
	if (ast.children === undefined) {
		result += ":__undefined__";

	} else if (ast.children.length > 0) {
        result += ":\n";
        for (var child of ast.children) {
            result += tabLevel(nbTabs+1) + astToString(child, nbTabs+1)+"\n";
        }
    }
    return result;
}
