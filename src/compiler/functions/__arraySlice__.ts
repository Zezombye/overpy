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

astParsingFunctions.__arraySlice__ = function(content) {

    if (enableOptimization) {
        var sliceStart = null;
        var sliceLength = null;

        if (content.args[2].name === "__number__") {
            sliceLength = Math.round(content.args[2].args[0].numValue);
            if (sliceLength <= 0) {
                return getAstForEmptyArray();
            }
        }

        if (content.args[0].name === "__array__" && content.args[1].name === "__number__" && sliceLength !== null) {
            sliceStart = Math.round(content.args[1].args[0].numValue);
            if (sliceStart < 0) {
                sliceLength += sliceStart;
                sliceStart = 0;
            }
            return new Ast("__array__", content.args[0].args.slice(sliceStart, sliceStart+sliceLength));
        }
    }

    return content;
}
