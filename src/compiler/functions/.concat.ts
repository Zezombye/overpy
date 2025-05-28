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
import { areAstsAlwaysEqual, Ast, astContainsRandom, astIsLiteral, astParsingFunctions, getAstForFalse, getAstForMinus1, getAstForNumber, getAstForTrue, getAstForUselessInstruction } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";

astParsingFunctions[".concat"] = function (content) {

    if (enableOptimization) {
        if (content.args[0].name === "__array__") {
            if (astIsLiteral(content.args[1])) {
                //If the second argument is a literal, we can just append it to the array (literals cannot be arrays)
                content.args[0].args.push(content.args[1]);
                return content.args[0];
            }
            if (content.args[1].name === "__array__") {
                //If the second argument is an array, we can just append its elements to the first array
                content.args[0].args.push(...content.args[1].args);
                return content.args[0];
            }
        }

    }

    return content;
};
