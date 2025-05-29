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

import { error } from "../../utils/logging";
import { blizzGlobalDefaultWidth, blizzGlobalWidths, spaces } from "../../data/opy/blizzardGlobal";
import { astParsingFunctions, getAstForCustomString } from "../../utils/ast";
import { getBestSpaces } from "./createCasedProgressBarIwt";

astParsingFunctions.spacesForLength = function (content) {
    console.log(content);
    if (content.args[0].name !== "__number__") {
        error("Length must be a literal number", content.args[0].fileStack);
    }
    let length = content.args[0].args[0].numValue;

    return getAstForCustomString(
        getBestSpaces(Object.keys(spaces).map(Number), length)
            .map((j) => spaces[j])
            .join(""),
    );
};
