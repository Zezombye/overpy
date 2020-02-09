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
function translate(keyword, toWorkshop, keywordArray, options={}) {
	
	if (!toWorkshop) {
		keyword = keyword.toLowerCase();
		if (keywordArray !== stringKw) {
			keyword = keyword.replace(/\s/g, "");
		}
	}
	debug("Translating keyword '"+keyword+"'");
	//debug("language = "+currentLanguage);
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

				//Check number of arguments
				if (options.nbArgs) {
					if (keywordArray[i].args === null && options.nbArgs !== 0 || keywordArray[i].args.length !== options.nbArgs) {
						error("Function '"+keyword+"' takes "+(keywordArray[i].args===null?0:keywordArray[i].args.length)+" arguments, received "+options.nbArgs);
					}
				}

				//Fallback to "en-US" if no entry for this language
				if (currentLanguage in keywordArray[i]) {
					return keywordArray[i][currentLanguage];
				} else {
					return keywordArray[i]["en-US"];
				}
			}
		} else {
			var keywordComparing = keywordArray[i];
			
			if (currentLanguage in keywordArray[i]) {
				keywordComparing = keywordComparing[currentLanguage];
			} else {
				keywordComparing = keywordComparing["en-US"];
			}
			keywordComparing = keywordComparing.toLowerCase();
			if (keywordArray !== stringKw) {
				keywordComparing = keywordComparing.replace(/\s/g, "")
			}
			if (keywordComparing === keyword) {
				return keywordArray[i].opy;
			}
		}
		
	}
	
	//Check for numbers
	if (!isNaN(keyword)) {
		//Convert to int then to string to remove unnecessary 0s.
		keyword = trimNb(Number(keyword).toString());
		return keyword;
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
