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

astParsingFunctions.__divide__ = function(content) {

    //Check to throw a type warning if dividing a number by a vector
    if (!isTypeSuitable("Vector", content.args[0].type) && !isTypeSuitable("float", content.args[1].type)) {
        warn("w_type_check", "Cannot divide "+functionNameToString(content.args[0])+" of type '"+typeToString(content.args[0].type)+"' by "+functionNameToString(content.args[1])+" of type '"+typeToString(content.args[1].type)+"'");
        return content;
    }

    if (enableOptimization) {

        //If both arguments are numbers, return their quotient.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            return getAstForNumber(content.args[0].args[0].numValue / content.args[1].args[0].numValue);
        }

        //A/1 -> A
        if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 1) {
            return content.args[0];
        }

        //A/0 = 0/A = 0
        if (content.args[0].name === "__number__" && content.args[0].args[0].numValue === 0
                || content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
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
                    getAstForNumber(content.args[0].args[0].args[0].numValue / content.args[1].args[0].args[0].numValue),
                    getAstForNumber(content.args[0].args[1].args[0].numValue / content.args[1].args[1].args[0].numValue),
                    getAstForNumber(content.args[0].args[2].args[0].numValue / content.args[1].args[2].args[0].numValue),
                ])
            }
        }

        //Check if we have vector / number.
        if (content.args[0].name === "vect" && content.args[1].name === "__number__"
                && content.args[0].args[0].name === "__number__"
                && content.args[0].args[1].name === "__number__"
                && content.args[0].args[2].name === "__number__") {
            return new Ast("vect", [
                getAstForNumber(content.args[0].args[0].args[0].numValue / content.args[1].args[0].numValue),
                getAstForNumber(content.args[0].args[1].args[0].numValue / content.args[1].args[0].numValue),
                getAstForNumber(content.args[0].args[2].args[0].numValue / content.args[1].args[0].numValue),
            ])
        }

    }

    return content;
}
