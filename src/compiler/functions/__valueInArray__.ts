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

import { enableOptimization } from "../../globalVars";
import { Ast, astParsingFunctions, getAstFor1, getAstForFalse, getAstForNull } from "../../utils/ast";
import { error, warn } from "../../utils/logging";

astParsingFunctions.__valueInArray__ = function (content) {
    if (content.args[0].name === "__dict__") {
        var dictKeys = content.args[0].args.map((x: Ast) => x.args[0]);
        var dictValues = content.args[0].args.map((x: Ast) => x.args[1]);
        var index = content.args[1];
        for (let k of dictKeys) {
            if (k.type === "DictKey") {
                //Dictionaries that are directly accessed cannot have arbitrary key names
                error("Unknown function '"+k.name+"'");
            }
        }
        if (dictKeys.some(x => x.name === "__default__")) {
            if (dictKeys.filter(x => x.name === "__default__").length > 1) {
                error("Cannot have multiple default values in a dictionary");
            }
            let defaultIndex = dictKeys.findIndex(x => x.name === "__default__");
            dictKeys = dictKeys.filter(x => x.name !== "__default__");
            //Reorder dict values to put default first
            dictValues = [dictValues[defaultIndex]].concat(dictValues.filter((_, i) => i !== defaultIndex));
            return new Ast("__valueInArray__", [new Ast("__array__", dictValues), new Ast("__add__", [getAstFor1(), new Ast(".index", [new Ast("__array__", dictKeys), index])])]);
        } else {
            return new Ast("__valueInArray__", [new Ast("__array__", dictValues), new Ast(".index", [new Ast("__array__", dictKeys), index])]);
        }
    }

    if (content.args[1].name === "__number__" && content.args[1].args[0].numValue < 0) {
        error("Cannot access the negative index '" + content.args[1].args[0].numValue + "' of an array");
    }

    if (enableOptimization) {
        if (content.args[1].name === "__number__") {
            var arrayIndex = Math.round(content.args[1].args[0].numValue);

            if (content.args[0].name === "__array__") {
                if (arrayIndex < content.args[0].args.length) {
                    return content.args[0].args[arrayIndex];
                } else if (content.args[0].args.length !== 0) {
                    return getAstForNull();
                }
            }
            if (content.args[0].name === "__number__") {
                warn("w_array_index_number", "Accessing the index of a number always gives 0 (even using index 0)");
            }
        }
    }

    return content;
};
