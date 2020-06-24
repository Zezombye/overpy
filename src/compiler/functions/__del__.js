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

astParsingFunctions.__del__ = function(content) {
    if (content.args[0].name !== "__valueInArray__") {
        error("Expected an array access for the 'del' operator, but got "+functionNameToString(content.args[0]));
    }
    var result = new Ast("__modifyVar__", [
        content.args[0].args[0],
        new Ast("__removeFromArrayByIndex__", [], [], "__Operation__"),
        content.args[0].args[1],
    ])
    result.originalName = "__del__";
    return result;
}
