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

astParsingFunctions[".charAt"] = function (content, compiler) {
    if (compiler.enableOptimization) {
        if (content.args[0].name === "__customString__" && content.args[0].args.length === 1 && content.args[1].name === "__number__") {
            const str = content.args[0].args[0].name;
            const index = Math.max(0, content.args[1].args[0].numValue); //"a".charAt(-1) is cast to "a".charAt(0), but only if -1 is a literal number

            // Check if index is within bounds
            if (index >= 0 && index < str.length) {
                return compiler.getAstForCustomString(str.charAt(index));
            } else {
                // Return an empty string if index is out of bounds
                return compiler.getAstForCustomString("");
            }
        }
    }

    return content;
};
