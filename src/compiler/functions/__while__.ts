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

import { currentRuleHasVariableGoto, enableOptimization } from "../../globalVars";
import { astParsingFunctions, getAstForEnd, getAstForUselessInstruction, isDefinitelyFalsy, makeChildrenUseless } from "../../utils/ast";
import { error } from "../../utils/logging";

astParsingFunctions.__while__ = function (content) {
    if (content.parent === undefined) {
        error("__while__'s parent is undefined");
    }
    if (enableOptimization) {
        //if false -> remove the instruction, but only if no variable goto
        //TODO: this will fail with non-variable gotos but I'm sick of handling shit code caused by gotos. If an issue is raised I'll add a `astContainsLabel` function
        if (!currentRuleHasVariableGoto && isDefinitelyFalsy(content.args[0])) {
            return getAstForUselessInstruction();
        }
    }

    //Add the "end" function.
    content.parent.children.splice(content.parent.childIndex + 1, 0, getAstForEnd());

    content.doNotReparse = true; //prevent calling this function again, else it would add multiple "end"s

    return content;
};
