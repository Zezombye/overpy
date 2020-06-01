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

astParsingFunctions.__else__ = function(content) {

    //Check if the else is directly preceded by an elif/if.
    if (content.parent.childIndex === 0 || !["__elif__", "__if__"].includes(content.parent.children[content.parent.childIndex-1].name)) {
        error("Found 'else', but no 'if'");
    }

    //Add the "end" function.
    //Optimization: do not include "end" if the "if" is at the end of the chain, but doesn't include a while/for loop as parent.
    var includeEnd = true;
    if (enableOptimization && content.parent.childIndex === content.parent.children.length-1) {

        var root = content;
        includeEnd = false;
    
        while (root.name !== "__rule__") {
            root = root.parent;
            if (root.name === "__while__" || root.name === "__for__" || root.name === "__doWhile__") {
                includeEnd = true;
                break;
            } else if (["__if__", "__elif__", "__else__"].includes(root.name) && root.parent.childIndex !== root.parent.children.length-1) {
                includeEnd = true;
                break;
            }
        }
    }
    if (includeEnd) {
        content.parent.children.splice(content.parent.childIndex+1, 0, getAstForEnd());
    }
    
    return content;

}
