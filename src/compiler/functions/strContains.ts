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
import { areAstsAlwaysEqual, Ast, astParsingFunctions, getAstForBool, getAstForNumber } from "../../utils/ast";

astParsingFunctions.strContains = function (content) {
    if (enableOptimization) {
        if (content.args[0].name === "__customString__" && content.args[1].name === "__customString__" && content.args[0].args.length === 1 && content.args[1].args.length === 1) {
            // If both strings are static and do not contain formatters, we can optimize
            const str1 = content.args[0].args[0].name;
            const str2 = content.args[1].args[0].name;
            return getAstForBool(str1.includes(str2));
        }
    }

    return content;
};
