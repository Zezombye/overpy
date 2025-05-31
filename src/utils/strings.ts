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

import { error, warn } from "./logging.js";
import { opyStringEntities } from "../data/opy/stringEntities.js";
import { caseSensitiveReplacements, currentLanguage } from "../globalVars.js";

export function escapeBadWords(content: string) {
    //000000000057.07F
    //000000000058.07F - some words work but some don't? eg "nul" and "nephalem" work but not "orous" as of 2025-05-31
    //00000000005A.07F
    //Naturally, only words that aren't actually bad are here.
    //Insert a zero-width space inside the word.

    //Zero width spaces now trigger the censor. Remove them
    content = content.replace(/[\u200B\u200E\u200F\uFEFF\u061C]/g, "");

    //https://invisible-characters.com/ goat

    content = content.replace(/(1)(488)/gi, "$1\u00ad$2");
    content = content.replace(/(a)(ccount)/gi, "$1\u00ad$2");
    content = content.replace(/(a)(dmin)/gi, "$1\u00ad$2");
    content = content.replace(/\b(a)(ss)\b/gi, "$1\u00ad$2");
    content = content.replace(/(b)(attlenet)/gi, "$1\u00ad$2");
    content = content.replace(/\b(b)(liz)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(b)(lizzaard)\b/gi, "$1\u00ad$2");
    content = content.replace(/(b)(lizzard)/gi, "$1\u00ad$2");
    content = content.replace(/\b(b)(low)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(bn)(et)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(b)(razil)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(c)(anada)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(d)(enmark)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(e)(ngland)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(f)(inland)\b/gi, "$1\u00ad$2");
    content = content.replace(/(f)(uck)/gi, "$1\u00ad$2");
    content = content.replace(/(g)(oddamn)/gi, "$1\u00ad$2");
    content = content.replace(/\b(i)(reland)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(n)(etherlands)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(n)(orway)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(p)(oland)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(p)(olish)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(s)(anctuary)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(s)(atan)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(s)(ingapore)\b/gi, "$1\u00ad$2");
    content = content.replace(/(s)(hit)/gi, "$1\u00ad$2");
    content = content.replace(/\b(s)(weden)\b/gi, "$1\u00ad$2");
    content = content.replace(/\b(s)(witzerland)\b/gi, "$1\u00ad$2");
    content = content.replace(/(r\s*i\s*)(gg\s*e\s*r)\b/gi, "$1\u00ad$2");

    return content;
}

export function checkVarNameForBadWords(varName: string) {
    for (let word of ["shit", "rigger", "fuck", "bong", "puss"]) {
        if (varName.toLowerCase().includes(word)) {
            warn("w_censored_var_name", "The variable or subroutine name '" + varName + "' will not be able to be pasted " + (currentLanguage === "en-US" ? "" : "by English players ")+", as it contains the word '" + word + "'.");
        }
    }
}

export function unescapeString(content: string, tows: boolean) {
    if (content.length < 2) {
        error("Expected a string, but got '" + content + "'");
    }
    if (content.startsWith("'") && content.endsWith("'")) {
        content = content.substring(1, content.length - 1).replace(/\\'/g, "'");
    } else if (content.startsWith('"') && content.endsWith('"')) {
        content = content.substring(1, content.length - 1).replace(/\\"/g, '"');
    } else {
        error("Expected a string, but got '" + content + "'");
    }
    var result = "";
    for (var i = 0; i < content.length; i++) {
        if (content[i] === "\\") {
            if (i === content.length - 1) {
                error("Cannot unescape string: expected a character after the ending backslash (\\)");
            }
            if (content[i + 1] === '"') {
                result += '"';
            } else if (content[i + 1] === "'") {
                result += "'";
            } else if (content[i + 1] === "\\") {
                result += "\\";
            } else if (content[i + 1] === "n") {
                result += "\n";
            } else if (content[i + 1] === "r") {
                result += "\r";
            } else if (content[i + 1] === "b") {
                result += "\b";
            } else if (content[i + 1] === "f") {
                result += "\f";
            } else if (content[i + 1] === "t") {
                result += "\t";
            } else if (content[i + 1] === "z") {
                result += "\u00AD"; //zero width space not censored
            } else if (content[i + 1] === "x") {
                if (i >= content.length - 1 - 2) {
                    error("Expected 2 hexadecimal digits after '\\x'");
                }
                var hexDigits = content.slice(i + 2, i + 2 + 2);
                if (!hexDigits.match(/[A-Fa-f0-9]{2}/)) {
                    error("Expected 2 hexadecimal digits after '\\x', but found '" + hexDigits + "'");
                }

                result += String.fromCharCode(parseInt(hexDigits, 16));
                i += 2;
            } else if (content[i + 1] === "u") {
                if (i >= content.length - 1 - 4) {
                    error("Expected 4 hexadecimal digits after '\\u'");
                }
                var hexDigits = content.slice(i + 2, i + 2 + 4);
                if (!hexDigits.match(/[A-Fa-f0-9]{4}/)) {
                    error("Expected 4 hexadecimal digits after '\\u', but found '" + hexDigits + "'");
                }

                result += String.fromCodePoint(parseInt(hexDigits, 16));
                i += 4;
            } else if (content[i + 1] === "&") {
                var j = i + 2;
                var foundEnd = false;
                for (; j < content.length; j++) {
                    if (content[j] === ";") {
                        foundEnd = true;
                        break;
                    } else if (!content[j].match(/\w/)) {
                        error("Invalid character '" + content[j] + "' in a string entity");
                    }
                }
                if (!foundEnd) {
                    error("Expected ';' to terminate the entity, but found end of string");
                }
                var entityName = content.slice(i + 2, j);
                if (!(entityName in opyStringEntities)) {
                    error("Unknown string entity '" + entityName + "'");
                }
                result += String.fromCodePoint(opyStringEntities[entityName].codepoint);
                i += entityName.length + 1;
            } else {
                error("Unknown escape sequence '\\" + content[i + 1] + "'");
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
    var result = '"' + content.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
    if (!tows) {
        result = result.replace(/\u00AD/g, "\\z");

        result = result.split("").map(c => {
            if ("\u00A0\u0E00\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u200C\u200D\u200E\u200F\u2028\u2029\u202A\u202B\u202C\u202D\u202E\u202F\u205F\u206A\u206B\u206C\u206D\u206E\u206F\u3000\u3164".includes(c) || c.match(/\p{Other}/gu)) {
                return "\\u" + c.codePointAt(0)?.toString(16).padStart(4, "0");
            }
            return c;
        }).join("");

    }
    return result;
}

export function getUtf8Length(str: string) {
    //returns the char length of an utf8 string
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 0xdc00 && code <= 0xdfff) {
            //skip as it is a surrogate pair
            continue;
        }
        result++;
    }
    return result;
}

export function getUtf8ByteLength(str: string) {
    // returns the byte length of an utf8 string
    var s = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) {
            s++;
        } else if (code > 0x7ff && code <= 0xffff) {
            s += 2;
        }
        if (code >= 0xdc00 && code <= 0xdfff) {
            i--;
        } //trail surrogate
    }
    return s;
}

export function applyCasedStringModifier(content: string) {
    content = content.replace(/e([0123456789!\?\/@"\&#\^\$\*%])/g, "ѐ$1");
    content = content.replace(/n([0123456789!\?\/@"\&#\^\$\*%])/g, "ǹ$1");
    for (var key of Object.keys(caseSensitiveReplacements)) {
        content = content.replace(new RegExp(key, "g"), caseSensitiveReplacements[key]);
    }
    return content;
}
