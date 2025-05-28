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
import { areAstsAlwaysEqual, Ast, astParsingFunctions, getAstForCustomString, getAstForNumber, stringAstContainsFormatters } from "../../utils/ast";

//Do not implement this optimization, as it is commonly used to compress strings and save elements
/*astParsingFunctions[".split"] = function (content) {
    if (enableOptimization) {
        if (content.args[0].name === "__customString__" && !stringAstContainsFormatters(content.args[0]) && content.args[1].name === "__customString__" && !stringAstContainsFormatters(content.args[1])) {
            const str = content.args[0].args[0].name;
            const separator = content.args[1].args[0].name;

            if (separator === "") {
                //Unlike most programming languages, the workshop will simply not split the string at all if the separator is empty
                return new Ast("__array__", [content.args[0]]);
            }
            return new Ast("__array__", str.split(separator).map(part => getAstForCustomString(part)));

        }
    }

    return content;
};*/
