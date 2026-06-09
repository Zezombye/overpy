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

import { astParsingFunctions } from "../../utils/ast";

astParsingFunctions.hudText = function (content, compiler) {
    if (content.args[4].name === "ACTUALLY_LEFT") {
        if (content.args[2].name !== "null") {
            content.args[2] = compiler.getAstForCustomString("{}{}", [content.args[2], compiler.getAstForFucktonOfSpaces()]);
        } else if (content.args[3].name !== "null") {
            content.args[3] = compiler.getAstForCustomString("{}{}", [content.args[3], compiler.getAstForFucktonOfSpaces()]);
        } else {
            //hud header only, so don't put spaces in the header
            content.args[3] = compiler.getAstForFucktonOfSpaces();
        }
        content.args[4].name = "LEFT";
    }

    if (compiler.enableOptimization) {

        //Empty strings are equivalent to null
        for (let i = 1; i <= 3; i++) {
            if (content.args[i].name === "__customString__" && content.args[i].args[0].name === "") {
                content.args[i] = compiler.getAstForNull();
            }
        }

        if (content.args[1].name === "null" && content.args[2].name === "null" && content.args[3].name === "null") {
            //Hud texts with all null texts do nothing (not even empty space)
            return compiler.getAstForUselessInstruction();
        }

        if (compiler.optimizeForSize) {
            //Nullify the colors for null texts
            if (content.args[1].name === "null") {
                content.args[6] = compiler.getAstForNull();
            }
            if (content.args[2].name === "null") {
                content.args[7] = compiler.getAstForNull();
            }
            if (content.args[3].name === "null") {
                content.args[8] = compiler.getAstForNull();
            }
        }
    }
    //console.log(compiler)
    compiler.warnOnDarkColor(content.args[6]);
    compiler.warnOnDarkColor(content.args[7]);
    compiler.warnOnDarkColor(content.args[8]);
    return content;
};
