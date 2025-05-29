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

import { constantValues } from "../../data/constants";
import { enableOptimization, optimizeStrict } from "../../globalVars";
import { Ast, astParsingFunctions, getAstForNumber, numValue } from "../../utils/ast";

astParsingFunctions.rgb = function (content) {
    if (enableOptimization) {
        if (!optimizeStrict) {
            //Convert colors to built-in values. This is a non-strict optimization as it differs in comparisons, truthiness, and string casting.
            let [r, g, b, a] = content.args.map(arg => numValue(arg));
            if ([r, g, b, a].every(num => num !== null)) {
                for (let [key, value] of Object.entries(constantValues.ColorLiteral)) {
                    if (typeof value === "string") {
                        continue;
                    }
                    let [vr, vg, vb, va] = [value.red ?? 0, value.green ?? 0, value.blue ?? 0, value.alpha ?? 255];
                    if (r === vr && g === vg && b === vb && a === va) {
                        return new Ast("__color__", [new Ast(key, [], [], "ColorLiteral")]);
                    }
                }
            }
        }
    }

    return content;
};
