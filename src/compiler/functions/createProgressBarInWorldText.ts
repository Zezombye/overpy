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
import { activatedExtensions, enableOptimization, optimizeForSize } from "../../globalVars";
import { astParsingFunctions, getAstForNull, isDefinitelyFalsy } from "../../utils/ast";
import { error } from "../../utils/logging";

astParsingFunctions.createProgressBarInWorldText = function (content) {
    if (enableOptimization && optimizeForSize) {
        //Set color to null if empty progress bar or empty text
        if (isDefinitelyFalsy(content.args[1])) {
            content.args[6] = getAstForNull();
        }
        if (isDefinitelyFalsy(content.args[2])) {
            content.args[7] = getAstForNull();
        }
    }

    return content;
};
