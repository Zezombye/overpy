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

import { Ast, astParsingFunctions, getAstForCustomString, getAstForFucktonOfSpaces } from "../../utils/ast";

astParsingFunctions.progressBarHud = function (content) {
    if (content.args[4].name === "ACTUALLY_LEFT") {
        if (content.args[2].name !== "null") {
            content.args[2] = new Ast(".format", [getAstForCustomString("{}{}"), content.args[2], getAstForFucktonOfSpaces()]);
        }
    }
    return content;
};
