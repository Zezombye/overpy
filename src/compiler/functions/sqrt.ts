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
import { areAstsAlwaysEqual, Ast, astParsingFunctions, getAstForNumber } from "../../utils/ast";

astParsingFunctions.sqrt = function (content) {
    if (enableOptimization) {
        if (content.args[0].name === "__number__") {
            //Use ||0 to return 0 in case of NaN (if the number is negative)
            return getAstForNumber(Math.sqrt(content.args[0].args[0].numValue) || 0);
        }
        if (content.args[0].name === "dotProduct" && areAstsAlwaysEqual(content.args[0].args[0], content.args[0].args[1])) {
            //sqrt(dotProduct(A, A)) -> magnitude(A)
            return new Ast("magnitude", [content.args[0].args[0]]);
        }
    }

    return content;
};
