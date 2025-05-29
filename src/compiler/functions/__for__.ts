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

import { globalVariables, playerVariables, defaultVarNames } from "../../globalVars";
import { astParsingFunctions, getAstForEnd } from "../../utils/ast";
import { error, functionNameToString, warn } from "../../utils/logging";
import { addVariable } from "../../utils/varNames";

astParsingFunctions.__for__ = function (content) {
    if (content.parent === undefined) {
        error("Attempted to use 'for' in a context with no parent.");
    }

    if (content.args[0].name === "__playerVar__") {
        var isGlobalVariable = false;
        var varName = content.args[0].args[1].name;
    } else if (content.args[0].name === "__globalVar__") {
        var isGlobalVariable = true;
        var varName = content.args[0].args[0].name;
    } else {
        error("Expected variable for 1st argument of function 'for', but got " + functionNameToString(content.args[0]), content.args[0].fileStack);
    }

    var varArray = isGlobalVariable ? globalVariables : playerVariables;
    var isFound = false;
    for (var variable of varArray) {
        if (variable.name === varName) {
            variable["isUsedInForLoop"] = true;
            if (variable["isChased"]) {
                warn("w_chased_var_in_for", "The " + (isGlobalVariable ? "global" : "player") + " variable '" + varName + "' is used in a for loop, but also chased, making the for loop not run.", content.args[0].fileStack);
            }
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        if (defaultVarNames.includes(varName)) {
            //Add the variable as it doesn't already exist (else it would've been caught by the for)
            //However, only do this if it is a default variable name
            addVariable(varName, isGlobalVariable, defaultVarNames.indexOf(varName));
        } else {
            error("Undeclared " + (isGlobalVariable ? "global" : "player") + " variable '" + varName + "'", content.args[0].fileStack);
        }
        for (var variable of varArray) {
            if (variable.name === varName) {
                variable["isUsedInForLoop"] = true;
                break;
            }
        }
    }

    //Add the "end" function.
    content.parent.children.splice(content.parent.childIndex + 1, 0, getAstForEnd());
    content.doNotReparse = true; //prevent calling this function again, else it would add multiple "end"s

    return content;
};
