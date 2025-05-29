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

import { enableOptimization, NUMBER_LIMIT, optimizeStrict } from "../../globalVars.js";
import { getAstForNumber, areAstsAlwaysEqual, Ast, getAstFor2, astParsingFunctions, numValue } from "../../utils/ast.js";
import { warn, getTypeCheckFailedMessage } from "../../utils/logging.js";
import { isTypeSuitable } from "../../utils/types.js";

astParsingFunctions.__add__ = function (content) {
    //Check if we are adding both numbers, or both vectors.
    //If not, throw a type warning.
    if (!isTypeSuitable(content.args[0].type, content.args[1].type) && !isTypeSuitable(content.args[1].type, content.args[0].type)) {
        warn("w_type_check", getTypeCheckFailedMessage(content, 1, content.args[0].type, content.args[1]));
        //return content;
    }
    //The w_type_check warning is suppressed for now, so throw another warning if the user is attempting to concatenate strings with "+".
    if (isTypeSuitable("String", content.args[0].type, false) || isTypeSuitable("String", content.args[1].type, false)) {
        warn("w_string_concat", "The '+' operator cannot be used to concatenate strings. Use the .format() function or f-strings.");
    }

    if (enableOptimization) {
        //If both arguments are numbers, return their addition.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            let result = content.args[0].args[0].numValue + content.args[1].args[0].numValue;
            if (Math.abs(result) < NUMBER_LIMIT) {
                return getAstForNumber(result);
            }
        }

        //If one of the arguments is 0, return the other argument.
        //Non-strict optimization, as it could be used to cast to number.
        if (!optimizeStrict) {
            if (content.args[0].name === "__number__" && content.args[0].args[0].numValue === 0) {
                return content.args[1];
            }
            if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
                return content.args[0];
            }
        }

        //If one of the argument is vect(0,0,0), return the other argument.
        if (!optimizeStrict) {
            if (content.args[0].name === "vect" && content.args[0].args.every(arg => numValue(arg) === 0)) {
                return content.args[1];
            }
            if (content.args[1].name === "vect" && content.args[1].args.every(arg => numValue(arg) === 0)) {
                return content.args[0];
            }
        }

        //A+A -> 2*A
        if (areAstsAlwaysEqual(content.args[0], content.args[1])) {
            return new Ast("__multiply__", [getAstFor2(), content.args[0]]);
        }

        //Check if both arguments are vectors containing numbers.
        if (content.args[0].name === "vect" && content.args[0].args.every(arg => numValue(arg) !== null) && content.args[1].name === "vect" && content.args[1].args.every(arg => numValue(arg) !== null)) {
            return new Ast("vect", [getAstForNumber(content.args[0].args[0].args[0].numValue + content.args[1].args[0].args[0].numValue), getAstForNumber(content.args[0].args[1].args[0].numValue + content.args[1].args[1].args[0].numValue), getAstForNumber(content.args[0].args[2].args[0].numValue + content.args[1].args[2].args[0].numValue)]);
        }
    }

    return content;
};
