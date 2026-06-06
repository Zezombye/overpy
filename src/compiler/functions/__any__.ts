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

import { astParsingFunctions, isDefinitelyTruthy, isDefinitelyFalsy, Ast } from "../../utils/ast";

astParsingFunctions.__any__ = function (content, compiler) {
    if (compiler.enableOptimization) {
        //[].any(...) -> false
        if (content.args[0].name === "__array__" && content.args[0].args.length === 0) {
            return compiler.getAstForFalse();
        }
        //.any(falsy) -> false
        if (!compiler.astContainsFunctions(content.args[1], ["__currentArrayElement__", "__currentArrayIndex__"]) && isDefinitelyFalsy(content.args[1])) {
            return compiler.getAstForFalse();
        }
        //.any(truthy) -> len(array) > 0
        if (!compiler.astContainsFunctions(content.args[1], ["__currentArrayElement__", "__currentArrayIndex__"]) && isDefinitelyTruthy(content.args[1])) {
            return compiler.Ast("__greaterThan__", [compiler.Ast("len", [content.args[0]]), compiler.getAstFor0()]);
        }
    }
    content.name = "__any__";
    return content;
};
