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
import { warn } from "../../utils/logging";

astParsingFunctions["_&getPlayerClosestToReticle"] = function (content) {
    warn("w_player_closest_to_reticle", "The getPlayerClosestToReticle() function targets dead and unspawned players (at 0,0,0). Use getRealPlayerClosestToReticle() instead.");
    return content;
};
