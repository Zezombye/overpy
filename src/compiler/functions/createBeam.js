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

astParsingFunctions.createBeam = function(content) {

    //Mitigation for the vertical beam bug.
    if (content.args[1].name === "GRAPPLE" || content.args[1].name === "BAD") {
        if (content.args[2].name === "vect" && content.args[3].name === "vect") {
            if (areAstsEqual(content.args[2].args[0], content.args[3].args[0]) && areAstsEqual(content.args[2].args[2], content.args[3].args[2])) {
                content.args[2].args[0] = new Ast("__add__", [getAstFor0_001(), content.args[2].args[0]]);
            }
        }
    }

    return content;
}
