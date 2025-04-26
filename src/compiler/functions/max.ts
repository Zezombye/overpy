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
import { Ast, astParsingFunctions, getAstForNumber } from "../../utils/ast";

astParsingFunctions.max = function (content) {
    if (enableOptimization) {
        let numbers = content.args.filter(arg => arg.name === "__number__").map(arg => arg.args[0].numValue);
        if (numbers.length === content.args.length) {
            return getAstForNumber(Math.max(...numbers));
        }
        let maxNumber = Math.max(...numbers);
        content.args = content.args.filter(x => x.name !== "__number__" || x.args[0].numValue === maxNumber);
    }

    if (content.args.length > 2) {
        return new Ast("max", [content.args[0], astParsingFunctions.max(new Ast("max", content.args.slice(1)))]);
    }

    return content;
};
