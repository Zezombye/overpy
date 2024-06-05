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

import { error } from "./logging.js";
import { opyStringEntities } from "../data/opy/stringEntities.js";

export function escapeBadWords(content: string) {

	//000000000057.07F
	//000000000058.07F
	//00000000005A.07F
	//Naturally, only words that aren't actually bad are here.
	//Insert a zero-width space inside the word.

	//Zero width spaces now trigger the censor. Remove them
	content = content.replace(/[\u200B\u200E\u200F\uFEFF\u061C]/g, "");

	//https://invisible-characters.com/ goat

	content = content.replace(/(1)(488)/ig, "$1\u00ad$2");
	content = content.replace(/(a)(ccount)/ig, "$1\u00ad$2");
	content = content.replace(/(a)(dmin)/ig, "$1\u00ad$2");
	content = content.replace(/(b)(attlenet)/ig, "$1\u00ad$2");
	content = content.replace(/\b(b)(liz)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(b)(lizzaard)\b/ig, "$1\u00ad$2");
	content = content.replace(/(b)(lizzard)/ig, "$1\u00ad$2");
	content = content.replace(/\b(b)(low)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(bn)(et)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(b)(razil)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(c)(anada)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(d)(enmark)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(e)(ngland)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(f)(inland)\b/ig, "$1\u00ad$2");
	content = content.replace(/(g)(oddamn)/ig, "$1\u00ad$2");
	content = content.replace(/\b(i)(reland)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(n)(etherlands)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(n)(orway)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(p)(oland)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(p)(olish)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(s)(anctuary)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(s)(atan)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(s)(ingapore)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(s)(weden)\b/ig, "$1\u00ad$2");
	content = content.replace(/\b(s)(witzerland)\b/ig, "$1\u00ad$2");

	return content;
}

export function unescapeString(content: string, tows: boolean) {
	if (content.length < 2) {
		error("Expected a string, but got '"+content+"'");
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
				result += "\u00AD"; //zero width space not censored
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

export function escapeString(content: string, tows: boolean) {
	if (tows === undefined) {
		error("tows must be defined, please report to Zezombye");
	}
	var result = '"'+content.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r")+'"';
	if (!tows) {
		result = result.replace(/\u200B/g, "\\z");
	}
	return result;
}

export function getUtf8Length(str: string){
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

export function getUtf8ByteLength(str: string){
	// returns the byte length of an utf8 string
	var s = str.length;
	for (var i=str.length-1; i>=0; i--) {
		var code = str.charCodeAt(i);
		if (code > 0x7f && code <= 0x7ff) {s++;}
		else if (code > 0x7ff && code <= 0xffff) {s+=2;}
		if (code >= 0xDC00 && code <= 0xDFFF) {i--;} //trail surrogate
	}
	return s;
}
