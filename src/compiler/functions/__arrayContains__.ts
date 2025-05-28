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
import { areAstsAlwaysEqual, Ast, astContainsRandom, astIsLiteral, astParsingFunctions, getAstForFalse, getAstForTrue, getAstForUselessInstruction } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";

astParsingFunctions.__arrayContains__ = function (content) {

    if (enableOptimization) {
        if (content.args[0].name === "__array__") {
            //Check if the value is in the array
            if (content.args[0].args.some(x => areAstsAlwaysEqual(x, content.args[1]))) {
                return getAstForTrue();
            }
            if (astIsLiteral(content.args[1])) {
                //Remove the literal values, as we know that they are not equal to the compared value
                content.args[0].args = content.args[0].args.filter(x => !astIsLiteral(x));

            }

            if (content.args[0].args.length === 0) {
                return getAstForFalse();
            }
            if (content.args[0].args.length === 1) {
                //If the array has only one element, we can just return a comparison
                //Note that A in B -> A == B and not B == A. This is checked because vect(0,0,0) == [][0], [][0] != vect(0,0,0), and vect(0,0,0) in [[][0]] is true.
                //And note that __arrayContains__ has the array first.
                return new Ast("__equals__", [content.args[1], content.args[0].args[0]]);
            }
        }
    }

    return content;
};
