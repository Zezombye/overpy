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

import { customGameSettingsKw } from "../data/other";
import { currentLanguage, valueKw } from "../globalVars";
import { debug, warn, error } from "./logging";
import { startsWithParenthesis } from "./other";
import { unescapeString } from "./strings";
import { topy } from "./translation";

const SETTING_WITH_STRING_VALUE_REGEX = /^.+?(:)\s+".*"$/d;

// TODO: further restrict parameter types
export function decompileCustomGameSettingsDict(dict: string[], kwObj: Record<string, any>, options: Record<string, any> = {}) {
    var result: Record<string, string | number | boolean> = {};
    if (!("invalidButAcceptedProperties" in options)) {
        options.invalidButAcceptedProperties = {};
    }
    for (var elem of dict) {
        elem = elem.trim();
        if (elem === "") {
            continue;
        }

        // Some setting keys such as "Ultimate Generation - Combat Configuration: Artillery: 200%" can contain colons, so we need to split on the last colon
        let keyValueSplitLocation = elem.lastIndexOf(":");

        if (keyValueSplitLocation === -1) {
            error("No ':' found in element '" + elem + "'");
        }

        // Fix for string values that contain colons
        if (SETTING_WITH_STRING_VALUE_REGEX.test(elem)) {
            const match = SETTING_WITH_STRING_VALUE_REGEX.exec(elem);
            if (match === null) {
                error("Thought '" + elem + "' matched custom game setting string value regex, but it didn't. This shouldn't happen!");
            }
            if (match.indices === undefined) {
                error("Failed to get indices for element '" + elem + "'. This shouldn't happen!");
            }
            keyValueSplitLocation = match.indices[1][0];
        }

        const potentialKey = elem.substring(0, keyValueSplitLocation).trim();
        const potentialValue = elem.substring(keyValueSplitLocation + 1).trim();

        var keyName = null;
        var value = null;
        var objKeys = Object.keys(kwObj)
            .sort(function (a, b) {
                var locA = currentLanguage in kwObj[a] ? kwObj[a][currentLanguage] : kwObj[a]["en-US"];
                var locB = currentLanguage in kwObj[b] ? kwObj[b][currentLanguage] : kwObj[b]["en-US"];
                return locA.localeCompare(locB);
            })
            .reverse();
        var invalidButAcceptedPropertiesObjKeys = Object.keys(options.invalidButAcceptedProperties)
            .sort(function (a, b) {
                var locA = currentLanguage in options.invalidButAcceptedProperties[a] ? options.invalidButAcceptedProperties[a][currentLanguage] : options.invalidButAcceptedProperties[a]["en-US"];
                var locB = currentLanguage in options.invalidButAcceptedProperties[b] ? options.invalidButAcceptedProperties[b][currentLanguage] : options.invalidButAcceptedProperties[b]["en-US"];
                return locA.localeCompare(locB);
            })
            .reverse();
        var isInvalidButAcceptedProperty = false;
        for (var key of objKeys) {
            if (currentLanguage in kwObj[key]) {
                if (potentialKey.toLowerCase() === kwObj[key][currentLanguage].toLowerCase()) {
                    keyName = key;
                    value = potentialValue;
                    break;
                }
            } else if (potentialKey.toLowerCase() === kwObj[key]["en-US"].toLowerCase()) {
                keyName = key;
                value = potentialValue;
                break;
            }
        }
        if (keyName === null) {
            for (var key of invalidButAcceptedPropertiesObjKeys) {
                if (currentLanguage in options.invalidButAcceptedProperties[key]) {
                    if (elem.toLowerCase().startsWith(options.invalidButAcceptedProperties[key][currentLanguage].toLowerCase())) {
                        keyName = key;
                        value = elem.substring(options.invalidButAcceptedProperties[key][currentLanguage].length);
                        isInvalidButAcceptedProperty = true;
                        break;
                    }
                } else if (elem.toLowerCase().startsWith(options.invalidButAcceptedProperties[key]["en-US"].toLowerCase())) {
                    keyName = key;
                    value = elem.substring(options.invalidButAcceptedProperties[key]["en-US"].length);
                    isInvalidButAcceptedProperty = true;
                    break;
                }
            }
        }

        if (keyName === null || value === null) {
            error("No translation found for key of element '" + potentialKey + "'");
        }

        if (isInvalidButAcceptedProperty) {
            continue;
        }

        if (typeof kwObj[keyName].values === "object") {
            value = topy(value, kwObj[keyName].values);
        } else if (kwObj[keyName].values === "__string__") {
            value = unescapeString(value, false);
        } else if (kwObj[keyName].values === "__percent__") {
            if (!value.endsWith("%")) {
                if (kwObj[keyName]["en-US"] === "Glide Boost Duration Scalar" && keyName === "ability1Duration%") {
                    warn("w_dead_workshop", "Juno's 'Glide Boost Duration Scalar' cannot be copied from text settings and has been reset to defaults.");
                    continue;
                }
                error("Expected a percentage for value of elem '" + elem + "'");
            }
            value = parseInt(value.substring(0, value.length - 1));
        } else if (kwObj[keyName].values === "__int__") {
            value = parseInt(value);
        } else if (kwObj[keyName].values === "__float__") {
            value = parseFloat(value);
        } else if (["__boolYesNo__", "__boolOnOff__", "__boolEnabled__"].includes(kwObj[keyName].values)) {
            value = topy(value, customGameSettingsKw);
            if (["__yes__", "__enabled__", "__on__"].includes(value)) {
                value = true;
            } else if (["__no__", "__disabled__", "__off__"].includes(value)) {
                value = false;
            } else {
                error("Unknown value '" + value + "'");
            }
        } else if (["__boolReverseYesNo__", "__boolReverseOnOff__", "__boolReverseEnabled__"].includes(kwObj[keyName].values)) {
            value = topy(value, customGameSettingsKw);
            if (["__yes__", "__enabled__", "__on__"].includes(value)) {
                value = false;
            } else if (["__no__", "__disabled__", "__off__"].includes(value)) {
                value = true;
            } else {
                error("Unknown value '" + value + "'");
            }
        } else {
            error("Unknown value type '" + kwObj[keyName].values + "' for '" + keyName + "'");
        }

        result[keyName] = value;
    }
    return result;
}

//Returns an array of workshop instructions (delimited by a semicolon).
export function splitInstructions(content: string): string[] {
    return splitStrOnDelimiter(content, ";");
}

//Returns an array of arguments (delimited by a comma).
export function getArgs(content: string): string[] {
    return splitStrOnDelimiter(content, ",").map((x) => x.trim());
}

//Returns the prefix string (used for condition/action comments).
export function getPrefixString(content: string): string {
    content = content.trim();
    if (!content.startsWith('"')) {
        error("Expected a string at the start of '" + content + "'");
    }
    var i = 1;
    var endOfStringFound = false;
    for (; i < content.length; i++) {
        if (content.charAt(i) === "\\") {
            i++;
        } else if (content.charAt(i) === '"') {
            i++;
            endOfStringFound = true;
            break;
        }
    }
    if (!endOfStringFound) {
        error("Could not find end of string for '" + content + "'");
    }
    return content.substring(0, i);
}

/**
 * Returns an array of strings that are delimited by the given string(s).
 * The delimiter is only taken into account if it is not within parentheses and not within a string.
 * Example: "azer(1,2), reaz(',,,,')" will return ["azer(1,2)","reaz(',,,,')"] for a comma separator.
 */
export function splitStrOnDelimiter(content: string, delimiter: string, getAllMembers = true, rtl = false) {
    content = content.trim();
    var bracketPos = getBracketPositions(content);
    var bracketPosCheckIndex = 0;
    var delimiterPos = [-delimiter.length];
    var currentPositionIsString = false;
    var currentStrDelimiter = "";

    for (var i = 0; i < content.length; i++) {
        //Check if the current index is in parentheses
        if (bracketPosCheckIndex < bracketPos.length && i >= bracketPos[bracketPosCheckIndex]) {
            i = bracketPos[bracketPosCheckIndex + 1];
            bracketPosCheckIndex += 2;
        } else if (!currentPositionIsString && content.charAt(i) === '"') {
            currentPositionIsString = !currentPositionIsString;
            currentStrDelimiter = content.charAt(i);
        } else if (content.charAt(i) === currentStrDelimiter) {
            currentPositionIsString = !currentPositionIsString;
        } else if (content.charAt(i) === "\\") {
            i++;
        } else if (!currentPositionIsString && content.startsWith(delimiter, i)) {
            //fix for baguette
            if (currentLanguage === "fr-FR" && delimiter === "." && (content.substring(0, i).toLowerCase().endsWith("créer une i") || content.substring(0, i).toLowerCase().endsWith("créer une i.a") || content.substring(0, i).toLowerCase().endsWith("est une i") || content.substring(0, i).toLowerCase().endsWith("est une i.a") || content.substring(0, i).toLowerCase().endsWith("détruire une i") || content.substring(0, i).toLowerCase().endsWith("détruire une i.a") || content.substring(0, i).toLowerCase().endsWith("forcer le nom de l’i") || content.substring(0, i).toLowerCase().endsWith("forcer le nom de l’i.a") || content.substring(0, i).toLowerCase().endsWith("arrêter de forcer le nom de l’i") || content.substring(0, i).toLowerCase().endsWith("arrêter de forcer le nom de l’i.a") || content.substring(0, i).toLowerCase().endsWith("détruire toutes les i") || content.substring(0, i).toLowerCase().endsWith("détruire toutes les i.a"))) {
                continue;
            }
            delimiterPos.push(i);
        }
    }
    delimiterPos.push(content.length);

    var result = [];
    for (var i = 0; i < delimiterPos.length - 1; i++) {
        var currentStr = content.substring(delimiterPos[i] + delimiter.length, delimiterPos[i + 1]);
        currentStr = currentStr.trim();
        if (currentStr.length > 0) {
            result.push(currentStr);
        }
    }

    if (!getAllMembers && result.length > 2) {
        if (rtl) {
            result = [result.slice(0, result.length - 1).join(delimiter), result[result.length - 1]];
        } else {
            result = [result[0], result.slice(1).join(delimiter)];
        }
    }

    return result;
}

export function getOperatorInStr(content: string, operators: string[], rtlPrecedence = false) {
    var operatorFound = null;
    var operatorPosition = -1;
    var bracketsLevel = 0;
    var currentPositionIsString = false;

    outer_loop: for (var i = 0; i < content.length; i++) {
        if (!currentPositionIsString && (content[i] === "(" || content[i] === "[" || content[i] === "{")) {
            bracketsLevel++;
        } else if (!currentPositionIsString && (content[i] === ")" || content[i] === "]" || content[i] === "}")) {
            bracketsLevel--;
        } else if (content[i] === '"') {
            currentPositionIsString = !currentPositionIsString;
        } else if (content[i] === "\\") {
            i++;
        } else if (bracketsLevel === 0 && !currentPositionIsString) {
            for (var operator of operators) {
                if (content.startsWith(operator, i)) {
                    operatorFound = operator;
                    operatorPosition = i;
                    //If right to left, return the first operator (as we need to split left to right)
                    if (rtlPrecedence) {
                        break outer_loop;
                    }
                    break;
                }
            }
        }
    }

    if (bracketsLevel !== 0) {
        error("Decompiler broke (bracket level is " + bracketsLevel + ")");
    }

    return {
        operatorFound,
        operatorPosition,
    };
}

//This function returns the index of each first-level opening and closing brackets/parentheses.
//Example: the string "3*(4*(')'))+(4*5)" will return [2, 10, 12, 16].
export function getBracketPositions(content: string, returnFirstPair = false, stringIncludesApos = false): number[] {
    var bracketsPos = [];
    var bracketsLevel = 0;
    var currentPositionIsString = false;
    var currentStrDelimiter = "";
    for (var i = 0; i < content.length; i++) {
        if (!currentPositionIsString && startsWithParenthesis(content.substring(i))) {
            bracketsLevel++;
            if (bracketsLevel === 1) {
                bracketsPos.push(i);
            }
        } else if ((content.charAt(i) === ")" || content.charAt(i) === "]" || content.charAt(i) === "}") && !currentPositionIsString) {
            bracketsLevel--;
            if (bracketsLevel === 0) {
                bracketsPos.push(i);
                if (returnFirstPair) {
                    break;
                }
            } else if (bracketsLevel < 0) {
                error("Brackets level below 0! (missing opening bracket)");
            }
        } else if (!currentPositionIsString && (content.charAt(i) === '"' || (content.charAt(i) === "'" && stringIncludesApos))) {
            currentPositionIsString = !currentPositionIsString;
            currentStrDelimiter = content.charAt(i);
        } else if (content.charAt(i) === currentStrDelimiter) {
            currentPositionIsString = !currentPositionIsString;
        } else if (content.charAt(i) === "\\") {
            i++;
        }
    }
    if (bracketsLevel > 0) {
        error("Brackets level above 0! (missing closing bracket)");
    }

    return bracketsPos;
}

/**
 * Gets the name of a function.
 */
export function getName(content: string): string {
    if (content === undefined) {
        error("Trying to get name of undefined function");
    }

    var bracketPos = getBracketPositions(content);

    if (bracketPos.length === 2) {
        var name = content.substring(0, bracketPos[0]);
    } else {
        var name = content;
    }

    return name.replace(/\s/g, "");
}

/**
 * Returns true if the function always returns a player array.
 * @possibly_unused
 */
function isPlayerArrayInstruction(content: string) {
    content = topy(getName(content), valueKw);

    debug("Checking if '" + content + "' is a player array instruction");

    var playerArrayInstructions = ["getDeadPlayers", "getLivingPlayers", "getPlayers", "getPlayersNotOnObjective", "getPlayersOnObjective", "getPlayersInViewAngle", "getPlayersOnHero", "getPlayersInRadius"];

    if (playerArrayInstructions.indexOf(content) > -1) {
        return true;
    }
    return false;
}
