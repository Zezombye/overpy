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

astParsingFunctions.__indexOfArrayValue__ = function(content) {

    //TODO: only do that for constants
    /*if (enableOptimization) {
        if (content.args[0].name === "__array__") {
            for (var i = 0; i < content.args[0].args.length; i++) {
                if (areAstsEqual(content.args[0].args[i], content.args[1])) {
                    return getAstForNumber(i);
                }
            }
        }
    }*/

    return content;
}
