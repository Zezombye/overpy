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

import { astParsingFunctions } from "../../globalVars";
import { areAstsAlwaysEqual } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";

astParsingFunctions["_&getRealPlayerClosestToReticle"] = function (content) {
    if (!areAstsAlwaysEqual(content.args[0], content.args[0])) {
        error("Cannot have a random player for .getRealPlayerClosestToReticle(), as it will get duplicated within the macro");
    }
    return parseOpyMacro("sorted([p for p in getLivingPlayers(__arg1__) if p.hasSpawned() and p != __arg0__], key=lambda x: angleBetweenVectors(__arg0__.getFacingDirection(), x - __arg0__.getPosition()))[0]", content.args);
};
