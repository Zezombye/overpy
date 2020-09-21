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

astParsingFunctions.__valueInArray__ = function(content) {

    if (content.args[0].name === "__dict__") {
        var dictKeys = content.args[0].args.map(x => x.args[0]);
        var dictValues = content.args[0].args.map(x => x.args[1]);
        var index = content.args[1];
        return new Ast("__valueInArray__", [
            new Ast("__array__", dictValues),
            new Ast("max", [
                getAstForFalse(),
                new Ast("__indexOfArrayValue__", [
                    new Ast("__array__", dictKeys),
                    index
                ])
            ])
        ])
    }

    if (content.args[1].name === "__number__" && content.args[1].args[0].numValue < 0) {
        error("Cannot access the negative index '"+content.args[1].args[0].numValue+"' of an array");
    }

    if (enableOptimization) {
        if (content.args[1].name === "__number__") {
            var arrayIndex = Math.round(content.args[1].args[0].numValue);

            if (content.args[0].name === "__array__") {
                if (arrayIndex < content.args[0].args.length) {
                    return content.args[0].args[arrayIndex];
                } else {
                    return getAstForNull();
                }
            }
        }
    }

    return content;
}
