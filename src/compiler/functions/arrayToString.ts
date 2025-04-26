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

import { Ast, astContainsRandom, astParsingFunctions, getAstForCustomString, getAstForEmptyArray, getAstForNull, getAstForNumber } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";
import { escapeString } from "../../utils/strings";

astParsingFunctions.arrayToString = function (content) {
    if (content.args[1].name !== "__number__") {
        error("The max length must be a literal number");
    }

    let maxLength = Math.min(1000, content.args[1].args[0].numValue);


    //The \u0001 is a special character for our replace to only match our array and not the values inside. It needs to be a zero-width space.
    let displayStr = Array(maxLength).fill("{}").join(", ") + (maxLength > 0 ? ", " : "") + "…\u0001";

    //If an array index doesn't exist, the value will be 0
    let placeholderStr = Array(maxLength).fill("0").join(", ") + (maxLength > 0 ? ", " : "") + "…\u0001";

    let formatArgs = Array(maxLength).fill(0).map((x, i) => "x["+(i+2)+"]").join(", ");;

    let macro = `[
        "[{}{}]".format(
            ${escapeString(displayStr, false)}.format(${formatArgs}).replace(
                ${escapeString(placeholderStr, false)}.substring(
                    ${placeholderStr.length - 4 - 3 * maxLength} + x[1],
                    ${maxLength * 3 + 4} - x[1]
                ),
                []
            ),
            "+{}".format(x[1]/3 - ${maxLength}) if x[1] > ${maxLength*3} else []
        ) if x[0] else x[2].split([])
        #x[0] is whether it is actually an array
        #x[1] is the length * 3 for the substring calculations
        #x[2] and onwards is the actual array
        for x in
        [

            (len(a) or (a == [] and a != null)) #true if it is actually an array, else we don't display the brackets
            .concat(3 if not len(a) and a != [] else len(a)*3)
            .concat(a)
            for a in [
                [
                    #Make elements suitable for display.
                    #Display strings with quotes and escaped backslashes/newlines
                    #Note: there are twice the backslashes because we are in a JS template string
                    #'"{}"'.format(elem.replace("\\\\", "\\\\\\\\").replace('"', '\\\\"')) if strLen(elem) or ("{}".format(elem) == "" and elem != []) else

                    #If the elem is itself an array, display the first element and the length
                    "[{}]".format(elem) if len(elem) == 1 or (elem == [] and elem != null)
                    else "[{}, …+{}]".format(elem, len(elem)-1) if len(elem)

                    #Default to the element which will naturally be casted to string
                    else elem

                    for elem in $array
                ]
            ]
        ]
    ]`;

    //console.log(macro);

    return parseOpyMacro(macro, ["$array"], content.args);
};
