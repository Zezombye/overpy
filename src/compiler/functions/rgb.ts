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

import { Constant, constantValues } from "../../data/constants";
import { Ast, astParsingFunctions, numValue } from "../../utils/ast";

astParsingFunctions.rgb = function (content, compiler) {
    if (compiler.enableOptimization) {
        if (!compiler.optimizeStrict) {
            //Convert colors to built-in values. This is a non-strict optimization as it differs in comparisons, truthiness, and string casting.
            let [r, g, b, a] = content.args.map(arg => numValue(arg));
            if ([r, g, b, a].every(num => num !== null)) {
                for (let [key, value] of Object.entries(constantValues.ColorLiteral)) {
                    if (key === "description" || typeof value === "string") {
                        continue;
                    }
                    const color = value as Constant;
                    if (color.onlyInOverpy) {
                        continue;
                    }
                    let [vr, vg, vb, va] = [color.red ?? 0, color.green ?? 0, color.blue ?? 0, color.alpha ?? 255];
                    if (r === vr && g === vg && b === vb && a === va) {
                        return compiler.Ast("__color__", [compiler.Ast(key, [], [], "ColorLiteral")]);
                    }
                }
            }
        }
    }

    return content;
};
