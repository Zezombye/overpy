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

function escapeBadWords(content) {

	//000000000057.07F
	//000000000058.07F
	//00000000005A.07F
	//Naturally, only words that aren't actually bad are here.
	//Insert a zero-width space inside the word.

	content = content.replace(/(a)(ccount)/ig, "$1﻿$2");
	content = content.replace(/(a)(dmin)/ig, "$1﻿$2");
	content = content.replace(/(a)(nonymous)/ig, "$1﻿$2");
	content = content.replace(/(a)(sia)/ig, "$1﻿$2");
	content = content.replace(/(b)(ackdoor)/ig, "$1﻿$2");
	content = content.replace(/(b)(attlenet)/ig, "$1﻿$2");
	content = content.replace(/(b)(eer)/ig, "$1﻿$2");
	content = content.replace(/(b)(liz)/ig, "$1﻿$2");
	content = content.replace(/(b)(lizzaard)/ig, "$1﻿$2");
	content = content.replace(/(b)(lizzard)/ig, "$1﻿$2");
	content = content.replace(/(b)(low)/ig, "$1﻿$2");
	content = content.replace(/(bn)(et)/ig, "$1﻿$2");
	content = content.replace(/(b)(razil)/ig, "$1﻿$2");
	content = content.replace(/(c)(anada)/ig, "$1﻿$2");
	content = content.replace(/(c)(hina)/ig, "$1﻿$2");
	content = content.replace(/(c)(hinese)/ig, "$1﻿$2");
	content = content.replace(/(d)(amn)/ig, "$1﻿$2");
	content = content.replace(/(d)(amned)/ig, "$1﻿$2");
	content = content.replace(/(d)(enmark)/ig, "$1﻿$2");
	content = content.replace(/(d)(iablo)/ig, "$1﻿$2");
	content = content.replace(/(e)(ngland)/ig, "$1﻿$2");
	content = content.replace(/(f)(inland)/ig, "$1﻿$2");
	content = content.replace(/(f)(rench)/ig, "$1﻿$2");
	content = content.replace(/(g)(erman)/ig, "$1﻿$2");
	content = content.replace(/(g)(ermany)/ig, "$1﻿$2");
	content = content.replace(/(g)(m)/ig, "$1﻿$2");
	content = content.replace(/(g)(od)/ig, "$1﻿$2");
	content = content.replace(/(g)(oddamn)/ig, "$1﻿$2");
	content = content.replace(/(h)(ash)/ig, "$1﻿$2");
	content = content.replace(/(i)(reland)/ig, "$1﻿$2");
	content = content.replace(/(i)(taly)/ig, "$1﻿$2");
	content = content.replace(/(k)(orea)/ig, "$1﻿$2");
	content = content.replace(/(l)(adder)/ig, "$1﻿$2");
	content = content.replace(/(l)(eah)/ig, "$1﻿$2");
	content = content.replace(/(l)(ilith)/ig, "$1﻿$2");
	content = content.replace(/(l)(oad)/ig, "$1﻿$2");
	content = content.replace(/(l)(ord)/ig, "$1﻿$2");
	content = content.replace(/(m)(exican)/ig, "$1﻿$2");
	content = content.replace(/(m)(exico)/ig, "$1﻿$2");
	content = content.replace(/(m)(onitor)/ig, "$1﻿$2");
	content = content.replace(/(n)(etherlands)/ig, "$1﻿$2");
	content = content.replace(/(n)(orway)/ig, "$1﻿$2");
	content = content.replace(/(n)(uts)/ig, "$1﻿$2");
	content = content.replace(/(o)(wn)/ig, "$1﻿$2");
	content = content.replace(/(p)(ass)/ig, "$1﻿$2");
	content = content.replace(/(p)(atch)/ig, "$1﻿$2");
	content = content.replace(/(p)(oland)/ig, "$1﻿$2");
	content = content.replace(/(p)(olish)/ig, "$1﻿$2");
	content = content.replace(/(p)(ortugal)/ig, "$1﻿$2");
	content = content.replace(/(r)(anking)/ig, "$1﻿$2");
	content = content.replace(/(r)(estore)/ig, "$1﻿$2");
	content = content.replace(/(r)(ollback)/ig, "$1﻿$2");
	content = content.replace(/(r)(ussia)/ig, "$1﻿$2");
	content = content.replace(/(s)(anctuary)/ig, "$1﻿$2");
	content = content.replace(/(s)(atan)/ig, "$1﻿$2");
	content = content.replace(/(s)(ingapore)/ig, "$1﻿$2");
	content = content.replace(/(s)(weden)/ig, "$1﻿$2");
	content = content.replace(/(s)(witzerland)/ig, "$1﻿$2");
	content = content.replace(/(s)(ystem)/ig, "$1﻿$2");
	content = content.replace(/(w)(ow)/ig, "$1﻿$2");

	return content;
}

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
