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

import { astContainsRandom, astParsingFunctions } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";

astParsingFunctions.hsl = function (content) {
    //https://stackoverflow.com/a/64090995/4851350
    let h = "$h";
    let s = "$s";
    let l = "$l";
    let a = "$a";

    if (content.args[0].name === "__number__" && (content.args[0].args[0].numValue < 0 || content.args[0].args[0].numValue > 360)) {
        error("Hue must be between 0 and 360", content.args[0].fileStack);
    }
    if (content.args[1].name === "__number__" && (content.args[1].args[0].numValue < 0 || content.args[1].args[0].numValue > 1)) {
        error("Saturation must be between 0 and 1", content.args[1].fileStack);
    }
    if (content.args[2].name === "__number__" && (content.args[2].args[0].numValue < 0 || content.args[2].args[0].numValue > 1)) {
        error("Lightness must be between 0 and 1", content.args[2].fileStack);
    }
    if (content.args[3].name === "__number__" && (content.args[3].args[0].numValue < 0 || content.args[3].args[0].numValue > 255)) {
        error("Alpha must be between 0 and 255", content.args[3].fileStack);
    }

    for (let arg of content.args) {
        if (astContainsRandom(arg)) {
            error("Cannot use random functions in hsl() or hsla()", arg.fileStack);
        }
    }

    let f = (n: number) => `(${l} - ${s}*min(${l}, 1-${l}) * max(min(min((${n}+${h}/30)%12 - 3, 9 - ((${n}+${h}/30)%12)), 1), -1))`;
    return parseOpyMacro(`rgba(${f(0)}*255, ${f(8)}*255, ${f(4)}*255, ${a})`, ["$h", "$s", "$l", "$a"], content.args);
};
