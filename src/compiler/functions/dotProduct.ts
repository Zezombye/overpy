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
import { astParsingFunctions, getAstForNumber, numValue } from "../../utils/ast";

astParsingFunctions.dotProduct = function (content) {
    if (enableOptimization) {
        if (content.args[0].name === "vect" && content.args[0].args.every(arg => numValue(arg) !== null) && content.args[1].name === "vect" && content.args[1].args.every(arg => numValue(arg) !== null)) {
            let [x1, y1, z1] = content.args[0].args.map(arg => numValue(arg) as number);
            let [x2, y2, z2] = content.args[1].args.map(arg => numValue(arg) as number);
            return getAstForNumber(x1 * x2 + y1 * y2 + z1 * z2);
        }
    }

    return content;
};
