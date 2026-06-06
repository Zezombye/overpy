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

import { NUMBER_LIMIT } from "../../globalVars";
import { areAstsAlwaysEqual, astParsingFunctions, numValue } from "../../utils/ast";

astParsingFunctions.__subtract__ = function (content, compiler) {
    //Check if we are subtracting both numbers, or both vectors.
    //If not, throw a type warning.
    if (!compiler.isTypeSuitable(content.args[0].type, content.args[1].type) && !compiler.isTypeSuitable(content.args[1].type, content.args[0].type)) {
        compiler.warn("w_type_check", compiler.getTypeCheckFailedMessage(content, 1, content.args[0].type, content.args[1]));
        //return content;
    }

    if (compiler.enableOptimization) {
        //If both arguments are numbers, return their subtraction.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            let result = content.args[0].args[0].numValue - content.args[1].args[0].numValue;
            if (Math.abs(result) < NUMBER_LIMIT) {
                return compiler.getAstForNumber(result);
            }
        }

        //A-0 -> A
        if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
            return content.args[0];
        }

        //A - vect(0,0,0) -> A
        if (content.args[1].name === "vect" && content.args[1].args[0].name === "__number__" && content.args[1].args[0].args[0].numValue === 0 && content.args[1].args[1].name === "__number__" && content.args[1].args[1].args[0].numValue === 0 && content.args[1].args[2].name === "__number__" && content.args[1].args[2].args[0].numValue === 0) {
            return content.args[0];
        }

        //A-A -> A*0
        //We cannot convert that to 0 because it can be a vector
        if (areAstsAlwaysEqual(content.args[0], content.args[1])) {
            return compiler.Ast("__multiply__", [content.args[0], compiler.getAstFor0()]);
        }

        //Check if both arguments are vectors containing numbers.
        if (content.args[0].name === "vect" && content.args[0].args.every(arg => numValue(arg) !== null) && content.args[1].name === "vect" && content.args[1].args.every(arg => numValue(arg) !== null)) {
            return compiler.Ast("vect", [compiler.getAstForNumber(content.args[0].args[0].args[0].numValue - content.args[1].args[0].args[0].numValue), compiler.getAstForNumber(content.args[0].args[1].args[0].numValue - content.args[1].args[1].args[0].numValue), compiler.getAstForNumber(content.args[0].args[2].args[0].numValue - content.args[1].args[2].args[0].numValue)]);
        }
    }

    return content;
};
