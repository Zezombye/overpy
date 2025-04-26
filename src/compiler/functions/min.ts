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

astParsingFunctions.min = function (content) {

    if (enableOptimization) {
        let numbers = content.args.filter(arg => arg.name === "__number__").map(arg => arg.args[0].numValue);
        if (numbers.length === content.args.length) {
            return getAstForNumber(Math.min(...numbers));
        }
        let minNumber = Math.min(...numbers);
        content.args = content.args.filter(x => x.name !== "__number__" || x.args[0].numValue === minNumber);
    }

    if (content.args.length > 2) {
        return new Ast("min", [content.args[0], astParsingFunctions.min(new Ast("min", content.args.slice(1)))]);
    }

    return content;
};
