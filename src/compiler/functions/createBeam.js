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

    if (constantValues[content.args[1].type][content.args[1].name].extension && !activatedExtensions.includes(constantValues[content.args[1].type][content.args[1].name].extension)) {
        error("You must activate the extension '"+constantValues[content.args[1].type][content.args[1].name].extension+"' to use '"+content.args[1].type+"."+content.args[1].name+"'");
    }
    
    return content;
}
