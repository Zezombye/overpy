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

import { astParsingFunctions, enableOptimization } from "../../globalVars";
import { getAstForEnd, isDefinitelyFalsy, makeChildrenUseless } from "../../utils/ast";
import { error } from "../../utils/logging";

astParsingFunctions.__while__ = function(content) {
    if (content.parent === undefined) error("__while__'s parent is undefined");

    //Add the "end" function.
    content.parent.children.splice(content.parent.childIndex+1, 0, getAstForEnd());


    if (enableOptimization) {
        //if false -> make the children useless
        if (isDefinitelyFalsy(content.args[0])) {
            makeChildrenUseless(content.children);
        }
    }

    return content;

}
