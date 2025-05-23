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

import { Token } from "../compiler/tokenizer";
import { operatorPrecedence } from "../globalVars";
import { error } from "./logging";
/**
 * Same as splitStrOnDelimiter but for a token list.
 * If getAllTokens = false, this will only split on the first occurrence of the token.
 */
export function splitTokens(tokens: Token[], str: string, getAllTokens = true, rtl = false): Token[][] {
    var result: Token[][] = [];
    var bracketsLevel = 0;

    if (rtl) {
        var start = tokens.length - 1;
        var end = -1;
        var step = -1;
        var latestDelimiterPos = tokens.length;
    } else {
        var start = 0;
        var end = tokens.length;
        var step = 1;
        var latestDelimiterPos = -1;
    }

    for (var i = start; i !== end; i += step) {
        if (tokens[i].text === "(" || tokens[i].text === "[" || tokens[i].text === "{") {
            bracketsLevel += step;
        } else if (tokens[i].text === ")" || tokens[i].text === "]" || tokens[i].text === "}") {
            bracketsLevel -= step;
        } else if (tokens[i].text === str && bracketsLevel === 0) {
            if (rtl) {
                result.push(tokens.slice(i + 1, latestDelimiterPos));
            } else {
                result.push(tokens.slice(latestDelimiterPos + 1, i));
            }
            latestDelimiterPos = i;
            if (!getAllTokens) {
                break;
            }
        }
    }

    if (bracketsLevel !== 0) {
        error("Lexer broke (bracket level is " + bracketsLevel + ")");
    }

    if (rtl) {
        result.unshift(tokens.slice(end + 1, latestDelimiterPos));
    } else {
        result.push(tokens.slice(latestDelimiterPos + 1, end));
    }

    if (result[0].length === 0 && result.length === 1) {
        return [];
    } else {
        return result;
    }
}

//Same as getBracketPositions but for tokens.
export function getTokenBracketPos(tokens: Token[], returnFirstPair = false) {
    var bracketsPos: number[] = [];
    var bracketsLevel = 0;
    var currentPositionIsString = false;
    var currentStrDelimiter = "";
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].text === "(" || tokens[i].text === "[" || tokens[i].text === "{") {
            bracketsLevel++;
            if (bracketsLevel === 1) {
                bracketsPos.push(i);
            }
        } else if (tokens[i].text === ")" || tokens[i].text === "]" || tokens[i].text === "}") {
            bracketsLevel--;
            if (bracketsLevel === 0) {
                bracketsPos.push(i);
                if (returnFirstPair) {
                    break;
                }
            }
        }
    }
    if (bracketsLevel > 0) {
        error("Brackets level above 0! (missing closing bracket)");
    }

    return bracketsPos;
}

//Converts a token list, or a token object to string.
export function dispTokens(content: Token | Token[] | string, prettyPrint = false): string {
    if (content instanceof Array) {
        if (!prettyPrint) {
            return content.map((x) => x.text).join(" ");
        }
        let result = "";
        for (let [i, token] of content.entries()) {
            if (["(", "[", "{", "."].includes(token.text)) {
                result += token.text;
            } else if (["+", "-"].includes(token.text) && (i === 0 || ["(", "[", "{", ",", "else", ...Object.keys(operatorPrecedence)].includes(content[i - 1].text))) {
                //unary plus/minus
                result += token.text;
            } else if (i < content.length - 1 && ["(", "[", "{"].includes(content[i + 1].text) && ["else", ",", ...Object.keys(operatorPrecedence)].includes(token.text)) {
                result += token.text + " ";
            } else if (i < content.length-1 && !["else", ",", ...Object.keys(operatorPrecedence)].includes(token.text) && (content[i+1].text.startsWith("'") || content[i+1].text.startsWith('"'))) {
                result += token.text;
            } else if (i < content.length - 1 && (["(", "[", "{", ")", "]", "}", ".", ",", ":"].includes(content[i + 1].text))) {
                result += token.text;
            } else {
                result += token.text + " ";
            }
        }
        result = result.trim();
        return result;
    } else if (typeof content === "string") {
        return content;
    } else if (typeof content === "object") {
        if (content.text === undefined) {
            error("Object is not a token or token list");
        } else {
            return content.text;
        }
    } else {
        error("Undefined content " + content);
        return "";
    }
}
