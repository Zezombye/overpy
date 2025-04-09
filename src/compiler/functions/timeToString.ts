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
import { parseOpyMacro } from "../../utils/compilation";

astParsingFunctions.timeToString = function (content) {
    return parseOpyMacro(
        `"{}:{}:{}".format(
        floor(__arg0__ / 3600),
        (__arg0__ % 3600 / 60 + 100).substring(true, 2),
        (__arg0__ % 60 + 100).substring(true, 9999)
    )`,
        content.args,
    );
};
