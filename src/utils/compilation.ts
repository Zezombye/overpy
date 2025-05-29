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

import { parseAst } from "../compiler/astParser";
import { parseLines } from "../compiler/parser";
import { tokenize } from "../compiler/tokenizer";
import { CustomGameSettingSchema } from "../data/customGameSettings";
import { opyMacros } from "../data/opy/macros";
import { customGameSettingsKw } from "../data/other";
import { astMacros, fileStack } from "../globalVars";
import { FileStackMember } from "../types";
import { Ast, astContainsRandom, replaceFunctionInAst } from "./ast";
import { astToString, error } from "./logging";
import { upperCaseToCamelCase } from "./other";
import { escapeBadWords, escapeString, getUtf8ByteLength, getUtf8Length } from "./strings";
import { tows } from "./translation";

export function compileCustomGameSettingsDict(providedSettings: Record<string, any>, refDict: { [key: string]: { values: string | Record<string, any> } }) {
    var result: Record<string, any> = {};
    for (var key_ of Object.keys(providedSettings)) {
        var wsKey = tows(key_, refDict);

        if (!(key_ in refDict)) {
            error("Unknown setting '" + key_ + "'");
        }
        let key = key_ as keyof typeof refDict;
        let refEntry = refDict[key];
        if (!("values" in refEntry)) {
            error("Setting '" + key + "' has no values");
        }
        let refValues = refEntry.values;

        if (typeof refValues === "object") {
            result[wsKey] = tows(providedSettings[key], refValues);
        } else if (refValues === "__string__") {
            if ("maxChars" in refEntry && typeof refEntry.maxChars === "number") {
                if (getUtf8Length(providedSettings[key]) > refEntry.maxChars) {
                    error("String for '" + key + "' must not have more than " + refEntry.maxChars + " chars");
                }
            } else if ("maxBytes" in refEntry && typeof refEntry.maxBytes === "number") {
                if (getUtf8ByteLength(providedSettings[key]) > refEntry.maxBytes) {
                    error("String for '" + key + "' must not have more than " + refEntry.maxBytes + " bytes");
                }
            }
            result[wsKey] = escapeBadWords(escapeString(providedSettings[key], true));
        } else if (refValues === "__percent__" || refValues === "__int__" || refValues === "__float__") {
            if (!("min" in refEntry && typeof refEntry.min === "number" && "max" in refEntry && typeof refEntry.max === "number")) {
                error("Setting '" + key + "' has no min or max value");
            }

            if (providedSettings[key] > refEntry.max) {
                error("Value for '" + key + "' must not exceed " + refEntry.max + "%");
            }
            if (providedSettings[key] < refEntry.min) {
                error("Value for '" + key + "' must be higher than " + refEntry.min + "%");
            }
            if (refEntry.values === "__int__") {
                if (!Number.isInteger(providedSettings[key])) {
                    error("Value for '" + key + "' must be an integer");
                }
            }
            if (refValues === "__percent__") {
                result[wsKey] = providedSettings[key] + "%";
            } else {
                result[wsKey] = providedSettings[key];
            }
        } else if (refDict[key].values === "__boolYesNo__") {
            result[wsKey] = providedSettings[key] === true ? tows("__yes__", customGameSettingsKw) : tows("__no__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolEnabled__") {
            result[wsKey] = providedSettings[key] === true ? tows("__enabled__", customGameSettingsKw) : tows("__disabled__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolOnOff__") {
            result[wsKey] = providedSettings[key] === true ? tows("__on__", customGameSettingsKw) : tows("__off__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolReverseEnabled__") {
            result[wsKey] = providedSettings[key] === true ? tows("__disabled__", customGameSettingsKw) : tows("__enabled__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolReverseOnOff__") {
            result[wsKey] = providedSettings[key] === true ? tows("__off__", customGameSettingsKw) : tows("__on__", customGameSettingsKw);
        } else {
            error("Unknown value type " + refDict[key].values);
        }
    }
    return result;
}

/**
 * As the workshop does not accept numbers that are too long (such as 0.22585181552505867),
 * trim all numbers to 15 decimal places.
 */
export function trimNb(x: number | string) {
    x = "" + x;
    var result = x;
    if (result.indexOf(".") >= 0) {
        result = result.substring(0, result.indexOf(".") + 16);
    }
    //To not trim 1.2246467991473532e-16 into 1.2246467991473532.
    //Thanks MagicMan for reporting this.
    if (x.indexOf("e") >= 0 && result.indexOf("e") === -1) {
        result += x.substring(x.indexOf("e"));
    }
    return result;
}

export function parseOpyMacroAst(content: Ast): Ast {

    if (!(content.name in opyMacros)) {
        error("Unknown macro '" + content.name + "'", content.fileStack);
    }

    for (let [i, arg] of (opyMacros[content.name].args || []).entries()) {
        if (arg.isDuplicatedInMacro && astContainsRandom(content.args[i])) {
            error("Cannot use random functions in argument '" + arg.name + "' of macro '" + content.name + "', as it is duplicated within the macro", content.args[i].fileStack);
        }
    }

    let macro = opyMacros[content.name].macro;

    return parseOpyMacro(macro, (opyMacros[content.name].args || []).map(arg => "$"+arg.name), content.args);
}

export function parseOpyMacro(macro: string, argNames: string[], args: Ast[]) {

    let lines = tokenize(macro);
    let astLines = parseLines(lines);
    if (astLines.length !== 1) {
        error("Macro '" + macro + "' should only have one line");
    }
    let result = astLines[0];
    for (let [i, arg] of argNames.entries()) {
        result = replaceFunctionInAst(result, arg, args[i]);
    }
    return result;

}

export function parseAstMacro(macro: Ast): Ast[] {
    if (!(macro.name in astMacros)) {
        error("Unknown macro '" + macro.name + "'", macro.fileStack);
    }

    function setMacroFilestack(ast: Ast, fileStack: FileStackMember[]) {
        ast.fileStack = [...fileStack, ast.fileStack[ast.fileStack.length - 1]];
        for (var arg of ast.args) {
            setMacroFilestack(arg, fileStack);
        }
        for (var child of ast.children) {
            setMacroFilestack(child, fileStack);
        }

    }

    //console.log("ast macro", macro);
    //console.log("filestack", fileStack);
    let result: Ast[] = astMacros[macro.name].lines.map((line) => line.clone());
    let argNames = astMacros[macro.name].args.map(arg => arg.name);
    for (let i = 0; i < result.length; i++) {
        for (let [j, arg] of argNames.entries()) {
            result[i] = replaceFunctionInAst(result[i], "$"+arg, macro.args[j].clone());
        }
        setMacroFilestack(result[i], fileStack);
    }
    //console.log(result);
    return result;

}
