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

astParsingFunctions.__format__ = function(content) {

    if (content.args[0].type === "LocalizedStringLiteral") {
        return parseLocalizedString(content.args[0], content.args.slice(1));
    } else {
        return parseCustomString(content.args[0], content.args.slice(1));
    }

}

//Parses a custom string.
function parseCustomString(str, formatArgs) {

	if (!formatArgs) {
		formatArgs = [];
    }
    
    var isBigLetters = (str.type === "BigLettersStringLiteral");
    var isFullwidth = (str.type === "FullwidthStringLiteral");

    var content = str.name;
	var tokens = [];
	var numberIndex = 0;
	var args = [];
	var argsAreNumbered = null;
	var isConvertedToBigLetters = false;

	//Used to reorder args for easier optimization.
	//Eg "{1}{0}" is converted to "{0}{1}", with the arguments obviously switched.
	var numberMapping = {};
	var containsNonFullwidthChar = false;

	function applyStringModifiers(content) {

		//If big letters, try to map letters until we get one
		//We only need one letter to convert to big letters
		if (isBigLetters && !isConvertedToBigLetters) {
			for (var i = 0; i < content.length; i++) {
				if (content[i] in bigLettersMappings) {
					content = content.substring(0,i)+bigLettersMappings[content[i]]+content.substring(i+1);
					isConvertedToBigLetters = true;
					break;
				}
			}
		} else if (isFullwidth) {
			var tmpStr = "";
			for (var char of content) {
				if (char in fullwidthMappings) {
					tmpStr += fullwidthMappings[char];
				} else {
					containsNonFullwidthChar = true;
					tmpStr += char;
				}
			}
	
			content = tmpStr;
			
		}
	
		if (obfuscateRules) {
			var tmpStr = "";
			for (var char of content) {
				if (char in obfuscationMappings) {
					tmpStr += obfuscationMappings[char];
				} else {
					tmpStr += char;
				}
			}
			content = tmpStr;
        }
        
		return content;
	}

	//Tokenize string
	while (true) {
		var index = content.search(/{\d*}/)
		if (index >= 0) {
			if (index > 0) {
				tokens.push({
					text: applyStringModifiers(content.substring(0, index)),
					type: "string"
				});
				content = content.substring(index);
			}
			var number = content.substring(1, content.indexOf("}"));

			//test for {}
			if (number === "") {
				if (argsAreNumbered === true) {
					error("Cannot switch from automatic field numbering to manual field specification");
				}
				argsAreNumbered = false;
				number = numberIndex;

			} else {
				if (argsAreNumbered === false) {
					error("Cannot switch from automatic field numbering to manual field specification");
				}
				argsAreNumbered = true;
				number = parseInt(number);
			}
			if (!(number in numberMapping)) {
				numberMapping[number] = numberIndex;
				numberIndex++;
			}

			tokens.push({
				index: numberMapping[number],
				type: "arg"
			});
			content = content.substring(content.indexOf("}")+1);

		} else {

			tokens.push({
				text: applyStringModifiers(content),
				type: "string"
			});
			break;
		}
	}

	//Sort args if there was (potentially) a reordering
	for (var key of Object.keys(numberMapping)) {
		if (formatArgs[key]) {
			args[numberMapping[key]] = formatArgs[key];
		} else {
			error("Too few arguments in format() function: expected "+(numberMapping[key]+1)+" but found "+formatArgs.length);
		}
	}
	//console.log("args = ");
	//console.log(args);

	if (isFullwidth && containsNonFullwidthChar) {
		warn("w_not_total_fullwidth", "Could not fully convert this string to fullwidth characters")
	}
	if (isBigLetters && !isConvertedToBigLetters) {
		error("Could not convert the string to big letters. The string must have one of the following chars: '"+Object.keys(bigLettersMappings).join("")+"'");
	}

	//console.log(tokens);
	//console.log(stringModifiers);

    return parseStringTokens(tokens, args);
    
}

function parseStringTokens(tokens, args) {
	var result = "";
	var resultArgs = [];
	var numbers = [];
	var numbersEncountered = [];
	var mappings = {};
	var stringLength = 0;
	var currentNbIndex = 0;


	//iterate through tokens and figure out the total number of unique numbers
	for (var token of tokens) {
		if (token.type === "string") {
			continue;
		} else {
			if (!numbers.includes(token.index)) {
				numbers.push(token.index);
			}
		}
	}

	//Add tokens
	//For now, no optimization: just split if more than 3 unique numbers
	for (var i = 0; i < tokens.length; i++) {
		//console.log(tokens[i]);
		//console.log("numbers encountered=");
		//console.log(numbersEncountered);
		//debugger;

		//length check
		if (tokens[i].type === "string" && stringLength+getUtf8Length(tokens[i].text) >= 125 || tokens[i].type === "arg" && stringLength+3 >= 125) {

			var splitString = false;
			if (tokens[i].type === "string" && (stringLength+getUtf8Length(tokens[i].text) > 127 || tokens.length > i)) {

				var tokenText = [...tokens[i].text]
				var tokenSliceLength = 0;
				var sliceIndex = 0;
				for (var j = 0; stringLength+tokenSliceLength < 122; j++) {
					tokenSliceLength += getUtf8Length(tokenText[j]+"");
					sliceIndex++;
				}

				//Workshop bug: if the last character of a string is 2 bytes or more, it will be "eaten".
				//Fix it by adding a zero-width space.
				if (getUtf8Length(tokenText[tokenText.length-1]) >= 2) {
					sliceIndex -= 3;
					result += tokenText.slice(0, sliceIndex).join("") + "\u200B";
				} else {
					result += tokenText.slice(0, sliceIndex).join("")
				}

				tokens[i].text = tokenText.slice(sliceIndex).join("");
				splitString = true;

			} else if (tokens[i].type === "arg" && tokens.length > i) {
				splitString = true;
			}

			if (splitString) {
				result += "{"+currentNbIndex+"}";
				resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
				break;
			}
		}

		if (tokens[i].type === "string") {
			result += tokens[i].text;
			stringLength += getUtf8Length(tokens[i].text);
		} else {
			if (numbersEncountered.length >= 2 && numbers.length > 3) {
				//split
				result += "{2}";
				resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
				break;
			} else {
				if (!(tokens[i].index in mappings)) {
					mappings[tokens[i].index] = numbersEncountered.length;
				}
				if (!numbersEncountered.includes(tokens[i].index)) {
					numbersEncountered.push(tokens[i].index);
					resultArgs.push(args[tokens[i].index]);
				}
				result += "{"+mappings[tokens[i].index]+"}";
				currentNbIndex++;
				stringLength += 3;


			}
		}
	}

	while (resultArgs.length < 3) {
		resultArgs.push(getAstForNull());
	}

	if (resultArgs.length != 3) {
		error("Custom string parser broke (string args length is "+resultArgs.length+")");
	}

	return new Ast("__customString__", [new Ast(result, [], [], "StringLiteral")].concat(resultArgs));
}

