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

import { enableOptimization, NUMBER_LIMIT, optimizeStrict } from "../../globalVars";
import { getAstForNumber, getAstFor0, areAstsAlwaysEqual, Ast, getAstFor2, astParsingFunctions, numValue } from "../../utils/ast";
import { isTypeSuitable } from "../../utils/types";

astParsingFunctions.__multiply__ = function (content) {
    if (enableOptimization) {
        //If both arguments are numbers, return their product.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            let result = content.args[0].args[0].numValue * content.args[1].args[0].numValue;
            if (Math.abs(result) < NUMBER_LIMIT) {
                return getAstForNumber(result);
            }
        }

        //If one of the arguments is 1, return the other argument.
        //Non-strict optimization, as it could be used to cast to number.
        if (!optimizeStrict) {
            if (content.args[0].name === "__number__" && content.args[0].args[0].numValue === 1) {
                return content.args[1];
            }
            if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 1) {
                return content.args[0];
            }
        }

        //A*0 = 0*A = 0, but only if the other argument is definitely a number, or non-strict optimization is enabled
        if ((content.args[0].name === "__number__" && content.args[0].args[0].numValue === 0 && (isTypeSuitable("float", content.args[1].type, false) || !optimizeStrict)) || (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0 && (isTypeSuitable("float", content.args[0].type, false) || !optimizeStrict))) {
            return getAstFor0();
        }

        //A*A -> A**2 if A is unsigned
        if (areAstsAlwaysEqual(content.args[0], content.args[1]) && content.args[0].type !== "Value" && isTypeSuitable("unsigned float", content.args[0].type)) {
            return new Ast("__raiseToPower__", [content.args[0], getAstFor2()]);
        }

        //Check if both arguments are vectors containing numbers.
        if (content.args[0].name === "vect" && content.args[0].args.every(arg => numValue(arg) !== null) && content.args[1].name === "vect" && content.args[1].args.every(arg => numValue(arg) !== null)) {
            return new Ast("vect", [getAstForNumber(content.args[0].args[0].args[0].numValue * content.args[1].args[0].args[0].numValue), getAstForNumber(content.args[0].args[1].args[0].numValue * content.args[1].args[1].args[0].numValue), getAstForNumber(content.args[0].args[2].args[0].numValue * content.args[1].args[2].args[0].numValue)]);
        }

        //Check if we have number * vector.
        if (content.args[0].name === "__number__" && content.args[1].name === "vect" && content.args[1].args[0].name === "__number__" && content.args[1].args[1].name === "__number__" && content.args[1].args[2].name === "__number__") {
            return new Ast("vect", [getAstForNumber(content.args[0].args[0].numValue * content.args[1].args[0].args[0].numValue), getAstForNumber(content.args[0].args[0].numValue * content.args[1].args[1].args[0].numValue), getAstForNumber(content.args[0].args[0].numValue * content.args[1].args[2].args[0].numValue)]);
        }

        //Check if we have vector * number.
        if (content.args[0].name === "vect" && content.args[1].name === "__number__" && content.args[0].args[0].name === "__number__" && content.args[0].args[1].name === "__number__" && content.args[0].args[2].name === "__number__") {
            return new Ast("vect", [getAstForNumber(content.args[0].args[0].args[0].numValue * content.args[1].args[0].numValue), getAstForNumber(content.args[0].args[1].args[0].numValue * content.args[1].args[0].numValue), getAstForNumber(content.args[0].args[2].args[0].numValue * content.args[1].args[0].numValue)]);
        }
    }

    return content;
};
