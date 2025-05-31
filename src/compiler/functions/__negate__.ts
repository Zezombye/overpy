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

import { enableOptimization } from "../../globalVars";
import { getAstForNumber, Ast, getAstForMinus1, astParsingFunctions } from "../../utils/ast";

astParsingFunctions.__negate__ = function (content) {
    if (enableOptimization) {
        if (["__multiply__", "__divide__"].includes(content.args[0].name)) {
            //Apply the negate on a number if that number is literal.
            //Eg: "-3*5" is will be "(-3)*5".
            if (content.args[0].args[0].name === "__number__") {
                content.args[0].args[0] = getAstForNumber(-content.args[0].args[0].args[0].numValue);
                return content.args[0];
            } else if (content.args[0].args[1].name === "__number__") {
                content.args[1].args[0] = getAstForNumber(-content.args[1].args[0].args[0].numValue);
                return content.args[0];
            }
        } else if (content.args[0].name === "__modulo__" && content.args[0].args[0].name === "__number__") {
            content.args[0].args[0] = getAstForNumber(-content.args[0].args[0].args[0].numValue);
            return content.args[0];
        } else if (content.args[0].name === "vect") {
            //Check if it is a vector containing only numbers.
            if (content.args[0].args[0].name === "__number__" && content.args[0].args[1].name === "__number__" && content.args[0].args[2].name === "__number__") {
                return new Ast("vect", [getAstForNumber(-content.args[0].args[0].args[0].numValue), getAstForNumber(-content.args[0].args[1].args[0].numValue), getAstForNumber(-content.args[0].args[2].args[0].numValue)]);
            }
        }
    }

    //Do that even if optimization is disabled, so that negative numbers are still able to be generated. It's not really an "optimization" anyway because there is no negate function in the workshop
    if (content.args[0].name === "__number__") {
        return getAstForNumber(-content.args[0].args[0].numValue);
    }

    return new Ast("__multiply__", [getAstForMinus1(), content.args[0]]);
};
