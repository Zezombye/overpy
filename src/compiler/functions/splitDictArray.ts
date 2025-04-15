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
import { Ast, getAstFor0, getAstForEmptyArray, getAstForNull } from "../../utils/ast";
import { error } from "../../utils/logging";

astParsingFunctions.splitDictArray = function (content) {
    if (content.args[0].name !== "__dict__") {
        error("First argument of splitDictArray() must be a dictionary");
    }
    if (content.args[1].name !== "__array__") {
        error("Second argument of splitDictArray() must be a literal array");
    }
    for (let elem of content.args[1].args) {
        if (elem.name !== "__dict__") {
            error("Second argument of splitDictArray() must be a literal array of dictionaries");
        }
    }

    let variableKeys = content.args[0].args.map((x) => x.args[0].name);
    let variables = content.args[0].args.map((x) => x.args[1]);
    let arrays = Array(variableKeys.length).fill(0).map(() => getAstForEmptyArray());

    //console.log(variableKeys);
    //console.log(variables);

    for (let dict of content.args[1].args) {
        let dictKeys = dict.args.map((x) => x.args[0].name);
        let dictValues = dict.args.map((x) => x.args[1]);
        for (let [i, key] of variableKeys.entries()) {
            if (!dict.args.some((x) => x.args[0].name === key)) {
                arrays[i].args.push(getAstForNull());
            } else {
                arrays[i].args.push(dictValues[dictKeys.findIndex((x) => x === key)]);
            }
        }
        for (let key of dictKeys) {
            if (!variableKeys.includes(key)) {
                error("Key '" + key + "' in dictionary is not defined in the first argument of splitDictArray()");
            }
        }
    }

    let assignments = arrays.map((x, i) => new Ast("__assignTo__", [variables[i], x]));
    if (!content.parent) {
        error("Could not find parent of splitDictArray");
    }
    content.parent!.children.splice(content.parent!.childIndex + 1, 0, ...assignments.slice(1));
    return assignments[0];

};
