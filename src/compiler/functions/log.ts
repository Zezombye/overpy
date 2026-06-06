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


import { astParsingFunctions } from "../../utils/ast";


astParsingFunctions.log = function (content, compiler) {
    //log(x) = (10000 * (x ** (0.0001) - 1))
    if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === Math.E) {
        //log(e) = 1
        if (compiler.enableOptimization && content.args[0].name === "__number__") {
            return compiler.getAstForNumber(Math.log(content.args[0].args[0].numValue));
        }
        return compiler.parseOpyMacro(`10000 * ($nb1 ** 0.0001 - 1)`, ["$nb1"], content.args);
    } else {
        return compiler.parseOpyMacro(`log($nb1) / log($nb2)`, ["$nb1", "$nb2"], content.args);
    }
};
