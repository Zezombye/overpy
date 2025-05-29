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

import { enableOptimization, optimizeForSize } from "../../globalVars";
import { astParsingFunctions, getAstFor0 } from "../../utils/ast";
import { warn } from "../../utils/logging";

astParsingFunctions.wait = function (content) {
    if (enableOptimization && optimizeForSize) {
        if (content.args[0].name === "__number__" && content.args[0].args[0].numValue <= 0.016) {
            //Change to 0, as it will get casted to 0.016 anyway, but that way the optimizer can then replace it to false for that sweet element.
            content.args[0] = getAstFor0();
        }
    }

    if (content.args[0].name === "__number__" && content.args[0].args[0].numValue === 9999) {
        warn("w_wait_9999", "wait(9999) is not enough because a custom game can last up to 16200 seconds. Use Math.INFINITY or 99999.", content.args[0].fileStack);
    }

    return content;
};
