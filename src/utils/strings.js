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


function unescapeString(content) {
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
				//do nothing. remove those pesky carriage returns
			} else {
				error("Unknown escape sequence '\\"+content[i+1]+"'");
			}
			i++;
		} /*else if (content[i] === "\n") {
			error("Strings containing newlines cannot be pasted in the workshop");
		} */else {
			result += content[i];
		}
	}
	return result;
}

function escapeString(content) {
	return '"'+content.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, "\\n")+'"';
}

