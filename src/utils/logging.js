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
	
	if (!suppressedWarnings.includes(warnType)) {
		var warning = message+" ("+warnType+")";
		if (fileStack.length !== 0) {
			fileStack.reverse();
			for (var file of fileStack) {
				warning += "\n\t| line "+file.currentLineNb+", col "+file.currentColNb+", at "+file.name;
			}
		}
		console.warn(warning);
		suppressedWarnings.push(warnType);
		encounteredWarnings.push(warning);
	}
}

function debug(str, arg) {
	//return;
	console.debug("DEBUG: "+str);
}
