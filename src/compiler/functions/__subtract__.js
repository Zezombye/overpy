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

astParsingFunctions.__subtract__ = function(content) {

    //Check if we are subtracting both numbers, or both vectors.
    //If not, throw a type warning.
    if (!isTypeSuitable(content.args[0].type, content.args[1].type) && !isTypeSuitable(content.args[1].type, content.args[0].type)) {
        warn("w_type_check", getTypeCheckFailedMessage(content, 1, content.args[0].type, content.args[1]));
        //return content;
    }

    if (enableOptimization) {

        //If both arguments are numbers, return their subtraction.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            return getAstForNumber(content.args[0].args[0].numValue - content.args[1].args[0].numValue);
        }

        //A-0 -> A
        if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
            return content.args[0];
        }

        //A-A -> 0
        if (areAstsEqual(content.args[0], content.args[1])) {
            return getAstFor0();
        }

        //Check if both arguments are vectors containing numbers.
        if (content.args[0].name === "vect" && content.args[1].name === "vect") {
            var canBeOptimized = true;
            for (var i = 0; i < 3; i++) {
                if (content.args[0].args[i].name !== "__number__" || content.args[1].args[i].name !== "__number__") {
                    canBeOptimized = false;
                    break;
                }
            }
            if (canBeOptimized) {
                return new Ast("vect", [
                    getAstForNumber(content.args[0].args[0].args[0].numValue - content.args[1].args[0].args[0].numValue),
                    getAstForNumber(content.args[0].args[1].args[0].numValue - content.args[1].args[1].args[0].numValue),
                    getAstForNumber(content.args[0].args[2].args[0].numValue - content.args[1].args[2].args[0].numValue),
                ])
            }
        }

    }

    return content;

}
