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

import { isDefinitelyFalsy, isDefinitelyTruthy, astParsingFunctions } from "../../utils/ast";

let inverseComparisonMapping: Record<string, string> = {
    "__equals__": "__inequals__",
    "__inequals__": "__equals__",
    "__greaterThan__": "__lessThanOrEquals__",
    "__greaterThanOrEquals__": "__lessThan__",
    "__lessThan__": "__greaterThanOrEquals__",
    "__lessThanOrEquals__": "__greaterThan__",
};

astParsingFunctions.__not__ = function (content, compiler) {
    if (compiler.enableOptimization) {
        //not false -> true
        if (isDefinitelyFalsy(content.args[0])) {
            return compiler.getAstForTrue();
        }
        //not true -> false
        if (isDefinitelyTruthy(content.args[0])) {
            return compiler.getAstForFalse();
        }
        //not not A -> A
        if (content.args[0].name === "__not__" && compiler.isTypeSuitable("bool", content.args[0].args[0].type, false)) {
            return content.args[0].args[0];
        }
        //not is alive -> is dead
        if (content.args[0].name === ".isAlive") {
            return compiler.Ast(".isDead", [content.args[0].args[0]]);
        }
        //not is dead -> is alive
        if (content.args[0].name === ".isDead") {
            return compiler.Ast(".isAlive", [content.args[0].args[0]]);
        }
        //not(A == B) -> A != B and same for other comparisons
        if (content.args[0].name in inverseComparisonMapping) {
            return compiler.Ast(inverseComparisonMapping[content.args[0].name], content.args[0].args);
        }
    }
    return content;
};
