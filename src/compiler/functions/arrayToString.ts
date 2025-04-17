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
import { escapeString } from "../../utils/strings";

astParsingFunctions.arrayToString = function (content) {
    if (astContainsRandom(content.args[0])) {
        error("Cannot display an array containing random functions. Assign it to a variable first.");
    }
    if (content.args[1].name !== "__number__") {
        error("The max length must be a literal number");
    }

    let maxLength = Math.min(1000, content.args[1].args[0].numValue);


    //To make replacements, we use private use characters from U+E100 to U+E4E8
    //The last character is used for the "...x more" replacement
    let replacements = Array(maxLength).fill(null).map((x, i) => String.fromCodePoint(0xE100+i));

    //We add two zero-width spaces to the first element so the calculation is len(array)*3 instead of len(array)*3-2
    //Use U+E4E9 for displaying the remaining length
    let replacementStr = replacements.map((x,i) => (i === 0 ? x + "\u00AD\u00AD" : x)+", ").join("") + "…\uE4E9 more";

    let replacementFormula = replacements.map((x, i) => ".replace(x.last()["+i+"], x[0]["+i+"])").join("")+".replace(x.last().last(), len(x[0])-"+maxLength+")";

    let macro = `[
        "{}{}{}".format(
            "[" if x[1] else [],
            ${escapeString(replacementStr, false)}.substring(0, 1 if not x[1] else Math.INFINITY if len(x[0]) > ${maxLength} else len(x[0])*3)${replacementFormula},
            "]" if x[1] else []
        )
        #x[0] is the array
        #x[1] is whether it is actually an array
        #x[2] is the replacements, as an array of chars
        for x in
        [
            [
                a,
                len(a) or (a == [] and a != null), #true if it is actually an array, else we don't display the brackets
                ${escapeString(replacements.join("0")+"0\uE4E9", false)}.split(null[0]),
            ] for a in [
                [
                    #Make elements suitable for display.
                    #Display strings with quotes and escaped backslashes/newlines
                    #Note: there are twice the backslashes because we are in a JS template string
                    elem.replace("\\\\", "\\\\\\\\").replace('"', '\\\\"').replace("\\n", "\\\\n") if strLen(elem) or (elem.split([]) == [].split([]) and elem != [])

                    #If the elem is itself an array, display the first element and the length
                    else "[{}]".format(elem) if len(elem) == 1 or (elem == [] and elem != null)
                    else "[{}, …{} more]".format(elem, len(elem)-1) if len(elem)

                    #Default to the element which will naturally be casted to string
                    else elem

                    for elem in $array
                ]
            ]
        ]
    ]`;

    console.log(macro);

    return parseOpyMacro(macro, ["$array"], content.args);
};
