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

import { astParsingFunctions, enableOptimization, NUMBER_LIMIT } from "../../globalVars";
import { Ast, getAstFor0, getAstFor0_0001, getAstForCustomString, getAstForEmptyArray, getAstForNumber } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";
import { escapeString } from "../../utils/strings";
import { compressToString, prepareAstForCompression } from "./compressed";



astParsingFunctions.compress = function (content) {
    let compressionInfo = prepareAstForCompression(content.args[0], true);
    let compressedString = compressToString(compressionInfo);
    return getAstForCustomString(compressedString);
};
