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
import { error } from "../../utils/logging";
import { blizzGlobalDefaultWidth, blizzGlobalWidths } from "../../data/opy/blizzardGlobal";
import { getAstForNumber } from "../../utils/ast";

export function getStrVisualLength(text: string) {
    if (text.includes("\n")) {
        error("Text must not have newlines");
    }

    let result = 0;

    for (let char of text) {
        if (char in blizzGlobalWidths) {
            result += blizzGlobalWidths[char];
        } else {
            result += blizzGlobalDefaultWidth;
        }
    }
    return result;
}

astParsingFunctions.strVisualLength = function (content) {
    if (content.args[0].name !== ".format") {
        error("Text must be a literal custom string");
    }
    if (content.args[0].args.length > 1) {
        error("Text must not have arguments");
    }
    let text = content.args[0].args[0].name;

    return getAstForNumber(getStrVisualLength(text));
};
