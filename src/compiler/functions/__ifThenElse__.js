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

astParsingFunctions.__ifThenElse__ = function(content) {
    
    if (enableOptimization) {
        //ifThenElse(true, A, B) -> A
        if (isDefinitelyTruthy(content.args[0])) {
            return content.args[1];
        }
        //ifThenElse(false, A, B) -> B
        if (isDefinitelyFalsy(content.args[0])) {
            return content.args[2];
        }
        //ifThenElse(A, B, B) -> B
        if (areAstsEqual(content.args[1], content.args[2])) {
            return content.args[1];
        }
        //ifThenElse(not A, B, C) -> ifThenElse(A, C, B)
        if (content.args[0].name === "__not__") {
            var tmp = content.args[1];
            content.args[1] = content.args[2];
            content.args[2] = tmp;
            content.args[0] = content.args[0].args[0];
        }
    }
    return content;
}
