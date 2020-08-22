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

astParsingFunctions.__button__ = function(content) {

    //Check the expected type to check if we need to remove the wrapper "button" function
    //console.log("parent name: '"+content.parent.name+"', parent arg index: "+content.parent.argIndex);
    //console.log(funcKw[content.parent.name].args[content.parent.argIndex].type);
    //console.log(content);
    if (content.expectedType === "ButtonLiteral") {
        return content.args[0];
    } else if (obfuscationSettings.obfuscateConstants) {
        return obfuscateConstant("ButtonLiteral", content);
    } else {
        return content;
    }
}
