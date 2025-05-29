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

import { constantValues } from "../../data/constants";
import { enableOptimization, optimizeStrict } from "../../globalVars";
import { Ast, astParsingFunctions, getAstForNumber, numValue } from "../../utils/ast";

astParsingFunctions.magnitude = function (content) {
    if (enableOptimization) {
        if (content.args[0].name === "vect") {
            let [x, y, z] = content.args[0].args.map(arg => numValue(arg) as number);
            if ([x, y, z].every(num => num !== null)) {
                return getAstForNumber(Math.sqrt(x ** 2 + y ** 2 + z ** 2));
            }
        }
    }

    return content;
};
