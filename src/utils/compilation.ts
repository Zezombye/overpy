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

import { opyMacros } from "../data/opy/macros";
import { customGameSettingsKw } from "../data/other";
import { OverPyCompiler } from "../godClasses";
import { FileStackMember } from "../types";
import { Ast, replaceFunctionInAst } from "./ast";
import { escapeBadWords, escapeString, getUtf8ByteLength, getUtf8Length } from "./strings";

OverPyCompiler.prototype.compileCustomGameSettingsDict = function(providedSettings: Record<string, any>, refDict: { [key: string]: { values: string | Record<string, any> } }) {
    var result: Record<string, any> = {};
    for (var key_ of Object.keys(providedSettings)) {
        var wsKey = this.tows(key_, refDict);

        if (!(key_ in refDict)) {
            this.error("Unknown setting '" + key_ + "'");
        }
        let key = key_ as keyof typeof refDict;
        let refEntry = refDict[key];
        if (!("values" in refEntry)) {
            this.error("Setting '" + key + "' has no values");
        }
        let refValues = refEntry.values;

        if (typeof refValues === "object") {
            result[wsKey] = this.tows(providedSettings[key], refValues);
        } else if (refValues === "__string__") {
            if ("maxChars" in refEntry && typeof refEntry.maxChars === "number") {
                if (getUtf8Length(providedSettings[key]) > refEntry.maxChars) {
                    this.error("String for '" + key + "' must not have more than " + refEntry.maxChars + " chars");
                }
            } else if ("maxBytes" in refEntry && typeof refEntry.maxBytes === "number") {
                if (getUtf8ByteLength(providedSettings[key]) > refEntry.maxBytes) {
                    this.error("String for '" + key + "' must not have more than " + refEntry.maxBytes + " bytes");
                }
            }
            result[wsKey] = escapeBadWords(escapeString(providedSettings[key], true));
        } else if (refValues === "__percent__" || refValues === "__int__" || refValues === "__float__") {

            if ("max" in refEntry && refEntry.max !== undefined && providedSettings[key] > refEntry.max!) {
                this.error("Value for '" + key + "' must not exceed " + refEntry.max + "%");
            }
            if ("min" in refEntry && refEntry.min !== undefined && providedSettings[key] < refEntry.min!) {
                this.error("Value for '" + key + "' must be higher than " + refEntry.min + "%");
            }
            if (refEntry.values === "__int__") {
                if (!Number.isInteger(providedSettings[key])) {
                    this.error("Value for '" + key + "' must be an integer");
                }
            }
            if (refValues === "__percent__") {
                result[wsKey] = providedSettings[key] + "%";
            } else {
                result[wsKey] = providedSettings[key];
            }
        } else if (refDict[key].values === "__boolYesNo__") {
            result[wsKey] = providedSettings[key] === true ? this.tows("__yes__", customGameSettingsKw) : this.tows("__no__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolEnabled__") {
            result[wsKey] = providedSettings[key] === true ? this.tows("__enabled__", customGameSettingsKw) : this.tows("__disabled__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolOnOff__") {
            result[wsKey] = providedSettings[key] === true ? this.tows("__on__", customGameSettingsKw) : this.tows("__off__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolReverseEnabled__") {
            result[wsKey] = providedSettings[key] === true ? this.tows("__disabled__", customGameSettingsKw) : this.tows("__enabled__", customGameSettingsKw);
        } else if (refDict[key].values === "__boolReverseOnOff__") {
            result[wsKey] = providedSettings[key] === true ? this.tows("__off__", customGameSettingsKw) : this.tows("__on__", customGameSettingsKw);
        } else {
            this.error("Unknown value type " + refDict[key].values);
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

OverPyCompiler.prototype.parseOpyMacroAst = function(content: Ast): Ast {

    if (!(content.name in opyMacros)) {
        this.error("Unknown macro '" + content.name + "'", content.fileStack);
    }

    for (let [i, arg] of (opyMacros[content.name].args || []).entries()) {
        if (arg.isDuplicatedInMacro && this.astContainsRandom(content.args[i])) {
            this.error("Cannot use random functions in argument '" + arg.name + "' of macro '" + content.name + "', as it is duplicated within the macro", content.args[i].fileStack);
        }
    }

    let macro = opyMacros[content.name].macro;

    return this.parseOpyMacro(macro, (opyMacros[content.name].args || []).map(arg => "$"+arg.name), content.args);
}

OverPyCompiler.prototype.parseOpyMacro = function(macro: string, argNames: string[], args: Ast[]) {

    let lines = this.tokenize(macro);
    let astLines = this.parseLines(lines);
    if (astLines.length !== 1) {
        this.error("Macro '" + macro + "' should only have one line");
    }
    let result = astLines[0];
    for (let [i, arg] of argNames.entries()) {
        result = replaceFunctionInAst(result, arg, args[i]);
    }
    return result;

}

OverPyCompiler.prototype.parseAstMacro = function(macro: Ast): Ast[] {
    if (!(macro.name in this.astMacros)) {
        this.error("Unknown macro '" + macro.name + "'", macro.fileStack);
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
    let result: Ast[] = this.astMacros[macro.name].lines.map((line) => line.clone());
    let argNames = this.astMacros[macro.name].args.map(arg => arg.name);
    for (let i = 0; i < result.length; i++) {
        for (let [j, arg] of argNames.entries()) {
            result[i] = replaceFunctionInAst(result[i], "$"+arg, macro.args[j].clone());
        }
        setMacroFilestack(result[i], this.fileStack);
    }
    //console.log(result);
    return result;

}
