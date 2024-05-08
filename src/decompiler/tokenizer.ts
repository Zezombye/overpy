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

function tokenizeWs(content) {

    
	//Not the full list of tokens; namely, brackets aren't in this list.
	//Sorted by longest first, for greediness.
	var operators = [
		"==",
		"!=",
		"<=",
		">=",
		"+=",
		"-=",
		"*=",
		"/=",
		"%=",
		"^=",
		"<",
		">",
		"=",
		"+",
		"-",
		",",
		"/",
		"%",
		"^",
		"*",
		".",
		":",
		";",
        "?",
	];

    var cursor = 0;
    var i = 0;
    var result = [];

    function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		result.push(new Token(text, getFileStackCopy()));
        cursor += text.length;
    }

    var tokenIncludesDash = false;
    var keywordStack = [ruleKw];

    fileStack = [{
        "name": "<decompiled text>",
        "currentLineNb": 1,
        "currentColNb": 1,
        "remainingChars": content.length+1, //does not matter
	}];

    while (cursor < content.length) {
        start:
        for (var operator of operators) {
            if (content.startsWith(operator, cursor)) {
                addToken(operator);
                continue start;
            }
        }

    
        //Get normal token
        if (/\s|\w/.test(content[cursor])) {
            for (i = cursor; i < content.length && (tokenIncludesDash ? /\s|\w|-/.test(content[i]) : /\s|\w/.test(content[i])); i++);
            addToken(topy(content.substring(cursor, i), currentKeywords));

        } else if (content[cursor] === "{") {
            
        } else {
            error("Unknown token: '"+content[cursor]+"'");
        }

    }

    return result;

}
