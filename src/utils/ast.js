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

function displayAst(ast, nbTabs=0) {
    var result = "";
    result += ast.name;
    if (ast.args.length > 0) {
        result += "(" + ast.args.map(x => displayAst(x)).join(", ")+")";
    }
    if (ast.children.length > 0) {
        result += ":\n";
        for (var child of ast.children) {
            result += tabLevel(nbTabs+1) + displayAst(child, nbTabs+1)+"\n";
        }
    }
    return result;
}
