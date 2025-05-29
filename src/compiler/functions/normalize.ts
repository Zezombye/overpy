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
import { getAstForNullVector, Ast, getAstForNumber, astParsingFunctions, numValue, getAstForVector } from "../../utils/ast";

astParsingFunctions.normalize = function (content) {
    if (enableOptimization) {
        if (content.args[0].name === "vect") {
            let [x, y, z] = content.args[0].args.map(arg => numValue(arg) as number);
            if ([x, y, z].every(num => num !== null)) {
                var magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
                if (magnitude === 0) {
                    return getAstForNullVector();
                }
                return getAstForVector(x / magnitude, y / magnitude, z / magnitude);
            }
        } else if (content.args[0].name === "vectorTowards") {
            return new Ast("directionTowards", [content.args[0].args[0], content.args[0].args[1]]);
        }
    }

    return content;
};
