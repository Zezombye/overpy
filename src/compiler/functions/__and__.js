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

astParsingFunctions.__and__ = function(content) {
    
    if (enableOptimization) {
        //false and A -> false
        if (isDefinitelyFalsy(content.args[0])) {
            return content.args[0];
        }
        //A and false -> false
        if (isDefinitelyFalsy(content.args[1])) {
            return content.args[1];
        }
        //true and A -> A
        if (isDefinitelyTruthy(content.args[0])) {
            return content.args[1];
        }
        //A and true -> A
        if (isDefinitelyTruthy(content.args[1])) {
            return content.args[0];
        }
        //A and A -> A
        if (areAstsEqual(content.args[0], content.args[1])) {
            return content.args[0];
        }
        //A and not A -> false
        if (content.args[1].name === "__not__" && areAstsEqual(content.args[0], content.args[1].args[0])) {
            return getAstForFalse();
        }
        //(not A) and A -> false
        if (content.args[0].name === "__not__" && areAstsEqual(content.args[0].args[0], content.args[1])) {
            return getAstForFalse();
        }
    }
    return content;
}
