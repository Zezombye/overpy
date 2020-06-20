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

astParsingFunctions.__filteredArray__ = function(content) {
    
    if (enableOptimization) {
        //filtered array with no constant -> if/else
        if (!astContainsFunctions(content.args[1], ["__currentArrayElement__"])) {
            return new Ast("__ifThenElse__", [content.args[1], content.args[0], getAstForEmptyArray()]);
        }

        //filtered array with condition "currentArrayElement != A" -> remove from array(array, A)
        if (content.args[1].name === "__inequals__") {
            if (content.args[1].args[0].name === "__currentArrayElement__" && !astContainsFunctions(content.args[1].args[1], ["__currentArrayElement__"])) {
                return new Ast("__removeFromArray__", [content.args[0], content.args[1].args[1]]);
            }
            if (content.args[1].args[1].name === "__currentArrayElement__" && !astContainsFunctions(content.args[1].args[0], ["__currentArrayElement__"])) {
                return new Ast("__removeFromArray__", [content.args[0], content.args[1].args[1]]);
            }
        }
    }
    return content;
}
