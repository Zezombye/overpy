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
import { Ast, astContainsRandom, getAstForCustomString, getAstForEmptyArray, getAstForNull, getAstForNumber } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";

astParsingFunctions.arrayToString = function (content) {
    if (astContainsRandom(content.args[0])) {
        error("Cannot display an array containing random functions. Assign it to a variable first.");
    }
    if (content.args[1].name !== "__number__") {
        error("The max length must be a literal number");
    }

    let maxLength = content.args[1].args[0].numValue;
    //The \u0001 is a special character for our replace to only match our array and not the values inside.
    let displayStr = "[" + Array(maxLength).fill("{}").join(", ") + (maxLength > 0 ? ", " : "") + "…\u0001]";

    //If an array index doesn't exist, the value will be 0
    let placeholderStr = Array(maxLength).fill("0").join(", ") + (maxLength > 0 ? ", " : "") + "…\u0001";

    let formatArgs = Array(maxLength).fill(0).map((x, i) => "$array["+i+"]").join(", ");

    return parseOpyMacro(`(
        ${JSON.stringify(displayStr)}.format(${formatArgs}).replace(
            ${JSON.stringify(placeholderStr)}.substring(
                ${placeholderStr.length - 4 - 3*maxLength} + 3*len($array),
                ${maxLength*3+4} - 3*len($array)
            ),
            []
        )
        if len($array) or ($array == [] and $array != null)
        else "{}".format($array)
    )`, ["$array"], content.args);
};
