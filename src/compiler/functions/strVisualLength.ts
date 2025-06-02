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
import { blizzGlobalDefaultWidth, blizzGlobalWidths } from "../../data/opy/blizzardGlobal";
import { astParsingFunctions, getAstForNumber } from "../../utils/ast";

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
    if (content.args[0].name !== "__customString__") {
        error("Text must be a literal custom string", content.args[0].fileStack);
    }
    if (content.args[0].args.length > 1) {
        error("Text must not have arguments", content.args[0].fileStack);
    }
    return getAstForNumber(getStrVisualLength(content.args[0].args[0].name));
};
