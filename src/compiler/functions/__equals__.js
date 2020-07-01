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

astParsingFunctions.__equals__ = function(content) {
    
    if (enableOptimization) {
        //If both arguments are numbers, return their comparison.
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__") {
            return getAstForBool(content.args[0].args[0].numValue === content.args[1].args[0].numValue);
        }

        //A == A -> true
        if (areAstsEqual(content.args[0], content.args[1])) {
            return getAstForTrue();
        }

        //A == falsy -> not A
        //Quick fix: only do that if A is bool, because of value restrictions
        if (isDefinitelyFalsy(content.args[0]) && isTypeSuitable("bool", content.args[1].type, false)) {
            return new Ast("__not__", [content.args[1]]);
        }
        if (isDefinitelyFalsy(content.args[1]) && isTypeSuitable("bool", content.args[0].type, false)) {
            return new Ast("__not__", [content.args[0]]);
        }

        //A == true -> A if A is bool
        if (content.args[1].name === "true" && isTypeSuitable("bool", content.args[0].type, false)) {
            return content.args[0];
        }
        if (content.args[0].name === "true" && isTypeSuitable("bool", content.args[1].type, false)) {
            return content.args[1];
        }
    }
    return content;
}
