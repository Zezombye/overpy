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

astParsingFunctions.__distanceTo__ = function(content) {
    //Increment the number of times this label is accessed.
    var label = content.args[0].name;
    if (!(label in currentRuleLabelAccess)) {
        currentRuleLabelAccess[label] = 0;
    }
    if (content.parent.name === "__skip__" || content.parent.name === "__skipIf__") {
        currentRuleLabelAccess[label]++;
    }
    return content;
}
