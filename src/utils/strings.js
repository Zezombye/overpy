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

function unescapeString(content, tows) {
	if (content.length < 2) {
		error("Expected a string, but got '"+content+"'");
	}
	if (tows === undefined) {
		error("tows must be defined, please report to Zezombye");
	}
	if (content.startsWith("'") && content.endsWith("'")) {
		content = content.substring(1, content.length-1).replace(/\\'/g, "'");

	} else if (content.startsWith('"') && content.endsWith('"')) {
		content = content.substring(1, content.length-1).replace(/\\"/g, '"');

	} else {
		error("Expected a string, but got '"+content+"'");
	}
	var result = "";
	for (var i = 0; i < content.length; i++) {
		if (content[i] === "\\") {
			if (i === content.length-1) {
				error("Cannot unescape string: expected a character after the ending backslash (\\)");
			}
			if (content[i+1] === "\"") {
				result += '"';
			} else if (content[i+1] === "'") {
				result += "'";
			} else if (content[i+1] === "\\") {
				result += "\\";
			} else if (content[i+1] === "n") {
				result += "\n";
			} else if (content[i+1] === "r") {
				result += "\r";
			} else if (content[i+1] === "b") {
				result += "\b";
			} else if (content[i+1] === "f") {
				result += "\f";
			} else if (content[i+1] === "t") {
				result += "\t";
			} else if (content[i+1] === "z") {
				result += "\u200B"; //zero width space
			} else if (content[i+1] === "x") {
				if (i >= content.length-1-2) {
					error("Expected 2 hexadecimal digits after '\\x'");
				}
				var hexDigits = content.slice(i+2, i+2+2);
				if (!hexDigits.match(/[A-Fa-f0-9]{2}/)) {
					error("Expected 2 hexadecimal digits after '\\x', but found '"+hexDigits+"'");
				}

				result += String.fromCharCode(parseInt(hexDigits, 16));
				i += 2;

			} else if (content[i+1] === "u") {
				if (i >= content.length-1-4) {
					error("Expected 4 hexadecimal digits after '\\u'");
				}
				var hexDigits = content.slice(i+2, i+2+4);
				if (!hexDigits.match(/[A-Fa-f0-9]{4}/)) {
					error("Expected 4 hexadecimal digits after '\\u', but found '"+hexDigits+"'");
				}

				result += String.fromCodePoint(parseInt(hexDigits, 16));
				i += 4;
			} else if (content[i+1] === "&") {
				var j = i+2;
				var foundEnd = false;
				for (; j < content.length; j++) {
					if (content[j] === ";") {
						foundEnd = true;
						break;
					} else if (!content[j].match(/\w/)) {
						error("Invalid character '"+content[j]+"' in a string entity");
					}
				}
				if (!foundEnd) {
					error("Expected ';' to terminate the entity, but found end of string");
				}
				var entityName = content.slice(i+2, j);
				if (!(entityName in opyStringEntities)) {
					error("Unknown string entity '"+entityName+"'");
				}
				result += String.fromCodePoint(opyStringEntities[entityName].codepoint);
				i += entityName.length+1;
			
			} else {
				error("Unknown escape sequence '\\"+content[i+1]+"'");
			}
			i++;
		} else if (tows && content[i] === "\r") {
			//remove the literal \rs, but not the escaped ones
		} else {
			result += content[i];
		}
	}
	return result;
}

function escapeString(content, tows) {
	if (tows === undefined) {
		error("tows must be defined, please report to Zezombye");
	}
	var result = '"'+content.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r")+'"';
	if (!tows) {
		result = result.replace(/\u200B/g, "\\z");
	}
	return result;
}

function getUtf8Length(str){
	//returns the char length of an utf8 string
	var result = 0;
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		if (code >= 0xDC00 && code <= 0xDFFF) {
			//skip as it is a surrogate pair
			continue;
		}
		result++;
	}
	return result;
}

function getUtf8ByteLength(str){
	// returns the byte length of an utf8 string
	var s = str.length;
	for (var i=str.length-1; i>=0; i--) {
		var code = str.charCodeAt(i);
		if (code > 0x7f && code <= 0x7ff) s++;
		else if (code > 0x7ff && code <= 0xffff) s+=2;
		if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
	}
	return s;
}
