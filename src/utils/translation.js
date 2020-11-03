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

//Translates a keyword to the other language.
function translate(keyword, toWorkshop, keywordObj, options={}) {
	
	if (!toWorkshop) {
		keyword = keyword.toLowerCase();
		if (keywordObj !== stringKw) {
			keyword = keyword.replace(/\s/g, "");
		}
	}
	debug("Translating keyword '"+keyword+"'");
	
	if (toWorkshop) {
		try {
			//Check number of arguments
			if (options.nbArgs) {
				if (keywordObj[keyword].args === null && options.nbArgs !== 0 || keywordObj[keyword].args.length !== options.nbArgs) {
					error("Function '"+keyword+"' takes "+(keywordObj[keyword].args===null?0:keywordObj[keyword].args.length)+" arguments, received "+options.nbArgs);
				}
			}

			//Fallback to "en-US" if no entry for this language
			if (currentLanguage in keywordObj[keyword]) {
				return keywordObj[keyword][currentLanguage];
			} else {
				return keywordObj[keyword]["en-US"];
			}
		} catch (e) {
			//continue
		}
	
	} else {

		for (var key of Object.keys(keywordObj)) {

			if (typeof keywordObj[key] !== "object") {
				continue;
			}
			
			if (currentLanguage in keywordObj[key]) {
				var keywordComparing = keywordObj[key][currentLanguage];
			} else {
				var keywordComparing = keywordObj[key]["en-US"];
			}
			if (keywordComparing === undefined) {
				error("No language found for '"+key+"'");
			}
			keywordComparing = keywordComparing.toLowerCase();
			if (keywordObj !== stringKw) {
				keywordComparing = keywordComparing.replace(/\s/g, "")
			}
			if (keywordComparing === keyword) {
				var result = key;
				if ("args" in keywordObj[key] && keywordObj[key].args !== null && keywordObj[key].args.length === 0) {
					result += "()";
				}
				return result;
			}
		}
		
	}
	
	error("No match found for keyword '"+keyword+"'");	
}

function topy(keyword, keywordArray, options) {
	return translate(keyword, false, keywordArray, options);
}
function tows(keyword, keywordArray, options) {
	
	//Check if a token was passed, or a string
	if (typeof keyword === "object") {
		fileStack = keyword.fileStack;
		return translate(keyword.text, true, keywordArray, options);
	} else {
		return translate(keyword, true, keywordArray, options);
	}
}
