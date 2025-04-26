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

import { Ast, astContainsRandom, astParsingFunctions } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error, functionNameToString } from "../../utils/logging";

astParsingFunctions.__del__ = function (content) {
    if (content.args[0].name !== "__valueInArray__") {
        error("Expected an array access for the 'del' operator, but got " + functionNameToString(content.args[0]));
    }
    content = new Ast("__modifyVar__", [content.args[0].args[0], new Ast("__removeFromArrayByIndex__", [], [], "__Operation__"), content.args[0].args[1]]);
    content.originalName = "__del__";

    if (content.args[0].name === "__valueInArray__" && content.args[0].args[0].name === "__valueInArray__") {
        if (content.args[0].args[0].args[0].name === "__valueInArray__") {
            if (content.args[0].args[0].args[0].args[0].name === "__valueInArray__") {
                error("Cannot delete index of 4d array");
            }
            //this hurts my brain
            let index3 = content.args[0].args[1];
            let index2 = content.args[0].args[0].args[1];
            content.args[0] = content.args[0].args[0].args[0]; //array[index1]
            let value = content.args[2];

            if (astContainsRandom(index3) || astContainsRandom(index2) || astContainsRandom(content.args[0])) {
                error("Cannot delete from 3d array with a random index");
            }

            return new Ast("__assignTo__", [content.args[0], parseOpyMacro(`(
                $arrayIdx1.slice(0, $idx2)
                .concat([
                    $arrayIdx1[$idx2].slice(0, $idx3)
                    .concat([[elem for elem, i in $arrayIdx1[$idx2][$idx3] if i != $value]])
                    .concat($arrayIdx1[$idx2].slice($idx3+1))
                ])
                .concat($arrayIdx1.slice($idx2+1))
            )`, ["$arrayIdx1", "$idx2", "$idx3", "$value"], [content.args[0], index2, index3, value])]);


        } else {

            //2d array. Unfortunately we have to duplicate the code from __assignTo__ because there is no value equivalent for del
            //array[index1][index2] = array[index1][index2].__excludeArrayAtIndex__(value)
            let index2 = content.args[0].args[1];
            content.args[0] = content.args[0].args[0]; //array[index1]
            let value = content.args[2];

            if (astContainsRandom(index2) || astContainsRandom(content.args[0])) {
                error("Cannot delete from 2d array with a random index");
            }

            return new Ast("__assignTo__", [content.args[0], parseOpyMacro("$arrayIdx1.slice(0, $idx2).concat([[elem for elem, i in $arrayIdx1[$idx2] if i != $value]]).concat($arrayIdx1.slice($idx2+1))", ["$arrayIdx1", "$idx2", "$value"], [content.args[0], index2, value])]);
        }
    }
    return content;
};
