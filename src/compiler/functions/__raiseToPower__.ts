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
import { astParsingFunctions } from "../../utils/ast";

astParsingFunctions.__raiseToPower__ = function (content, compiler) {
    if (compiler.enableOptimization) {
        //If both arguments are numbers, return their power.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            if (content.args[0].args[0].numValue < 0) {
                return compiler.getAstFor0();
            }
            let result = Math.pow(content.args[0].args[0].numValue, content.args[1].args[0].numValue);
            if (Math.abs(result) < NUMBER_LIMIT) {
                return compiler.getAstForNumber(result);
            }
        }

        //A**1 -> A
        if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 1) {
            return content.args[0];
        }

        //0**A -> 0
        if (content.args[0].name === "__number__" && content.args[0].args[0].numValue === 0) {
            return compiler.getAstFor0();
        }

        //1**A -> 1
        if (content.args[0].name === "__number__" && content.args[0].args[0].numValue === 1) {
            return content.args[0];
        }

        //negative number ** A -> 0
        if (content.args[0].type !== "Value" && compiler.isTypeSuitable("signed float", content.args[0].type)) {
            return compiler.getAstFor0();
        }
    }

    return content;
};
