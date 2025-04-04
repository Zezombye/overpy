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
import { Ast, getAstForCustomString, getAstForEmptyArray, getAstForNumber } from "../../utils/ast";
import { error } from "../../utils/logging";

astParsingFunctions.arrayToString = function (content) {
    if (content.args[1].name !== "__number__") {
        error("The max length must be a literal number");
    }

    let maxLength = content.args[1].args[0].numValue;
    //The \u0001 is a special character for our replace to only match our array and not the values inside.
    let displayStr = "[" + Array(maxLength).fill("{}").join(", ") + (maxLength > 0 ? ", " : "") + "…|]";

    //If an array index doesn't exist, the value will be 0
    let placeholderStr = Array(maxLength).fill("0").join(", ") + (maxLength > 0 ? ", " : "") + "…|";

    return new Ast("__strReplace__", [
        astParsingFunctions.__format__(
            new Ast("__format__", [
                new Ast(displayStr, [], [], "CustomStringLiteral"),
                ...Array(maxLength)
                    .fill(0)
                    .map((x, i) => new Ast("__valueInArray__", [content.args[0], getAstForNumber(i)])),
            ]),
        ),
        new Ast("__substring__", [
            getAstForCustomString(placeholderStr),
            //placeholderStr.length - 5 - 3*maxLength + 3*len(array)
            new Ast("__add__", [getAstForNumber(placeholderStr.length - 5 - 3 * maxLength - 1 + 2), new Ast("__multiply__", [getAstForNumber(3), new Ast("len", [content.args[0]])])]),
            //maxLength*3+4 - arrayLen*3
            new Ast("__subtract__", [getAstForNumber(maxLength * 3 + 4), new Ast("__multiply__", [getAstForNumber(3), new Ast("len", [content.args[0]])])]),
        ]),
        getAstForEmptyArray(),
    ]);
};
