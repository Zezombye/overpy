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

astParsingFunctions.__chaseAtRate__ = function(content) {
    //Warning: this function is duplicated with __chaseOverTime__.


    if (content.args[0].name === "__playerVar__") {
        var isGlobalVariable = false;
        var varName = content.args[0].args[1].name;
    } else if (content.args[0].name === "__globalVar__") {
        var isGlobalVariable = true;
        var varName = content.args[0].args[0].name;
    } else {
        error("Expected variable for 1st argument of function 'chase', but got "+functionNameToString(content.args[0]));
    }

	var varArray = isGlobalVariable ? globalVariables : playerVariables;
    var isFound = false;
	for (var variable of varArray) {
		if (variable.name === varName) {
            variable["isChased"] = true;
            if (variable["isUsedInForLoop"]) {
                warn("w_chased_var_in_for", "The "+(isGlobalVariable?"global":"player")+" variable '"+varName+"' is chased, but also used in a for loop, making the for loop not run.");
            }
            if (variable["isUsedInRuleCondition"]) {
                warn("w_ow2_rule_condition_chase", "The "+(isGlobalVariable?"global":"player")+" variable '"+varName+"' is chased, but also used in a rule condition, making the rule condition possibly not trigger properly due to a workshop bug.");
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
            error("Undeclared "+(isGlobalVariable ? "global" : "player")+" variable '"+varName+"'");
        }
        for (var variable of varArray) {
            if (variable.name === varName) {
                variable["isChased"] = true;
                break;
            }
        }
    }

    return content;

}
