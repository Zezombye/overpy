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

import { astParsingFunctions, globalVariables, playerVariables, defaultVarNames } from "../../globalVars";
import { error, functionNameToString, warn } from "../../utils/logging";
import { addVariable } from "../../utils/varNames";

astParsingFunctions.__globalVar__ = function (content) {
    var isInRuleCondition = false;
    var contentParent = content.parent;
    while (contentParent) {
        if (contentParent.name === "@Condition") {
            isInRuleCondition = true;
            break;
        }
        contentParent = contentParent.parent;
    }

    if (isInRuleCondition) {
        if (content.name === "__playerVar__") {
            var isGlobalVariable = false;
            var varName = content.args[1].name;
        } else if (content.name === "__globalVar__") {
            var isGlobalVariable = true;
            var varName = content.args[0].name;
        } else {
            error("Expected variable, but got " + functionNameToString(content));
        }

        var varArray = isGlobalVariable ? globalVariables : playerVariables;
        var isFound = false;
        for (var variable of varArray) {
            if (variable.name === varName) {
                variable["isUsedInRuleCondition"] = true;
                if (variable["isChased"]) {
                    warn("w_ow2_rule_condition_chase", "This rule condition will possibly not trigger properly due to a workshop bug, because the " + (isGlobalVariable ? "global" : "player") + " variable '" + varName + "' is chased.");
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
                error("Undeclared " + (isGlobalVariable ? "global" : "player") + " variable '" + varName + "'");
            }
            for (var variable of varArray) {
                if (variable.name === varName) {
                    variable["isUsedInRuleCondition"] = true;
                    break;
                }
            }
        }
    }

    return content;
};
