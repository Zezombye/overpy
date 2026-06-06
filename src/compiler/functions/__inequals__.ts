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

import { areAstsAlwaysEqual, isDefinitelyFalsy, Ast, astParsingFunctions, astIsLiteral } from "../../utils/ast";

astParsingFunctions.__inequals__ = function (content, compiler) {
    if (compiler.enableOptimization) {
        //If both arguments are numbers, return their comparison.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            return compiler.getAstForBool(content.args[0].args[0].numValue !== content.args[1].args[0].numValue);
        }

        //A != A -> true
        if (areAstsAlwaysEqual(content.args[0], content.args[1])) {
            return compiler.getAstForFalse();
        }

        //literal != literal -> true (we already checked if they are equal)
        if (astIsLiteral(content.args[0]) && astIsLiteral(content.args[1])) {
            return compiler.getAstForTrue();
        }

        //A != falsy -> A if A is bool or if bool is expected
        if (isDefinitelyFalsy(content.args[1]) && compiler.isTypeSuitable("bool", content.args[0].type, false) /*|| compiler.isTypeSuitable("bool", content.expectedType)*/) {
            return content.args[0];
        }
        if (isDefinitelyFalsy(content.args[0]) && compiler.isTypeSuitable("bool", content.args[1].type, false) /*|| compiler.isTypeSuitable("bool", content.expectedType)*/) {
            return content.args[1];
        }

        //A != true -> not A if A is bool
        if (content.args[1].name === "true" && compiler.isTypeSuitable("bool", content.args[0].type, false)) {
            return compiler.Ast("__not__", [content.args[0]]);
        }
        if (content.args[0].name === "true" && compiler.isTypeSuitable("bool", content.args[1].type, false)) {
            return compiler.Ast("__not__", [content.args[1]]);
        }
    }
    return content;
};
