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
import { astParsingFunctions, getAstForUselessInstruction } from "../../utils/ast";
import { warn } from "../../utils/logging";

astParsingFunctions[".startHealingOverTime"] = function (content) {
    if (content.args[2].name === "__number__" && content.args[2].args[0].numValue === 9999) {
        warn("w_9999", ".startHealingOverTime(..., 9999) is not enough because a custom game can last up to 16200 seconds. Use Math.INFINITY or 99999.", content.args[2].fileStack);
    }

    return content;
};
