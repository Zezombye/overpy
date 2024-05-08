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

astParsingFunctions.vect = function(content) {

    if (enableOptimization) {
        //Check for each of the 6 vector constants
        if (content.args[0].name === "__number__" && content.args[1].name === "__number__" && content.args[2].name === "__number__") {
            if (content.args[0].numValue === 1 && content.args[1].numValue === 0 && content.args[2].numValue === 0) {
                return new Ast("Vector.LEFT");
            }
            if (content.args[0].numValue === -1 && content.args[1].numValue === 0 && content.args[2].numValue === 0) {
                return new Ast("Vector.RIGHT");
            }
            if (content.args[0].numValue === 0 && content.args[1].numValue === 1 && content.args[2].numValue === 0) {
                return new Ast("Vector.UP");
            }
            if (content.args[0].numValue === 0 && content.args[1].numValue === -1 && content.args[2].numValue === 0) {
                return new Ast("Vector.DOWN");
            }
            if (content.args[0].numValue === 0 && content.args[1].numValue === 0 && content.args[2].numValue === 1) {
                return new Ast("Vector.FORWARD");
            }
            if (content.args[0].numValue === 0 && content.args[1].numValue === 0 && content.args[2].numValue === -1) {
                return new Ast("Vector.BACKWARD");
            }
        }
    }
    
    return content;
}
