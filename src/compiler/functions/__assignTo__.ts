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

import { areAstsAlwaysEqual, astParsingFunctions } from "../../utils/ast";

astParsingFunctions.__assignTo__ = function (content, compiler) {

    if (content.args[0].name === "__valueInArray__" && content.args[0].args[0].name === "__valueInArray__") {
        if (content.args[0].args[0].args[0].name === "__valueInArray__") {
            if (content.args[0].args[0].args[0].args[0].name === "__valueInArray__") {
                compiler.error("Cannot assign to 4d array");
            }
            //3d array
            //array[index1][index2][index3] = value
            let index3 = content.args[0].args[1];
            let index2 = content.args[0].args[0].args[1];
            content.args[0] = content.args[0].args[0].args[0]; //array[index1]
            let value = content.args[1];

            if (compiler.astContainsRandom(index3) || compiler.astContainsRandom(index2) || compiler.astContainsRandom(content.args[0])) {
                compiler.error("Cannot assign to 3d array with a random index");
            }

            content.args[1] = compiler.parseOpyMacro(`(
                $arrayIdx1.slice(0, $idx2)
                .concat([
                    $arrayIdx1[$idx2].slice(0, $idx3)
                    .concat([$value])
                    .concat($arrayIdx1[$idx2].slice($idx3+1))
                ])
                .concat($arrayIdx1.slice($idx2+1))
            )`, ["$arrayIdx1", "$idx2", "$idx3", "$value"], [content.args[0], index2, index3, value]);

        } else {

            //2d array
            //array[index1][index2] = value
            let index2 = content.args[0].args[1];
            content.args[0] = content.args[0].args[0]; //array[index1]
            let value = content.args[1];

            if (compiler.astContainsRandom(index2) || compiler.astContainsRandom(content.args[0])) {
                compiler.error("Cannot assign to 2d array with a random index");
            }

            //Thanks to Mira for the formula
            content.args[1] = compiler.parseOpyMacro("$arrayIdx1.slice(0, $idx2).concat([$value]).concat($arrayIdx1.slice($idx2+1))", ["$arrayIdx1", "$idx2", "$value"], [content.args[0], index2, value]);
        }
    }

    if (compiler.enableOptimization) {
        if (["__add__", "__subtract__", "__multiply__", "__divide__", "__modulo__", "__raiseToPower__", "min", "max", ".concat", ".exclude"].includes(content.args[1].name) && areAstsAlwaysEqual(content.args[0], content.args[1].args[0])) {
            var opName = content.args[1].name;
            if (opName === "min" || opName === "max") {
                opName = "__" + opName + "__";
            } else if (opName === ".concat") {
                opName = "__appendToArray__";
            } else if (opName === ".exclude") {
                opName = "__removeFromArrayByValue__";
            }
            return compiler.Ast("__modifyVar__", [content.args[0], compiler.Ast(opName, [], [], "__Operation__"), content.args[1].args[1]]);
        }

        if (areAstsAlwaysEqual(content.args[0], content.args[1])) {
            return compiler.getAstForUselessInstruction();
        }
    }

    return content;
};
