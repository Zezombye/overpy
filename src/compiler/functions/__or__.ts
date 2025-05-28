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

import { enableOptimization, optimizeStrict } from "../../globalVars";
import { isDefinitelyFalsy, isDefinitelyTruthy, areAstsAlwaysEqual, getAstForTrue, astParsingFunctions, Ast } from "../../utils/ast";

astParsingFunctions.__or__ = function (content) {
    if (enableOptimization) {
        //falsy or A -> A
        if (isDefinitelyFalsy(content.args[0])) {
            return content.args[1];
        }
        //A or falsy -> A (only if non-strict optimization, as A could be falsy too, in which case the second argument must be returned)
        if (!optimizeStrict && isDefinitelyFalsy(content.args[1])) {
            return content.args[0];
        }
        //truthy or A -> truthy
        if (isDefinitelyTruthy(content.args[0])) {
            return content.args[0];
        }
        //A or truthy -> truthy, but only if non-strict optimization, as A could be truthy too, in which case A must be returned
        if (!optimizeStrict && isDefinitelyTruthy(content.args[1])) {
            return content.args[1];
        }
        //A or A -> A
        if (areAstsAlwaysEqual(content.args[0], content.args[1])) {
            return content.args[0];
        }
        //A or not A -> true
        if (!optimizeStrict && content.args[1].name === "__not__" && areAstsAlwaysEqual(content.args[0], content.args[1].args[0])) {
            return getAstForTrue();
        }
        //(not A) or A -> true
        if (!optimizeStrict && content.args[0].name === "__not__" && areAstsAlwaysEqual(content.args[0].args[0], content.args[1])) {
            return getAstForTrue();
        }
        //not A or not B -> not (A and B)
        if (content.args[0].name === "__not__" && content.args[1].name === "__not__") {
            return new Ast("__not__", [new Ast("__and__", [content.args[0].args[0], content.args[1].args[0]])]);
        }
    }
    return content;
};
