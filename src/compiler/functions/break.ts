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

import { astParsingFunctions } from "../../globalVars";
import { Ast } from "../../utils/ast";
import { error, warn } from "../../utils/logging";
import { getUniqueNumber } from "../../utils/other";

astParsingFunctions.break = function(content) {

    //Determine the innermost loop or switch
    let innermostStructure = content.parent;
    if (innermostStructure == undefined) error("immediate parent of break statement is undefined?");
    while (innermostStructure.parent !== undefined) {
        if (["__while__", "__for__", "__switch__", "__doWhile__"].includes(innermostStructure.name)) {
            break;
        } else {
            innermostStructure = innermostStructure.parent;
        }
    }

    if (innermostStructure.name === "__doWhile__") {
        if (innermostStructure.parent == undefined) error("Do/While loop has no parent?");

        //Place a label at the end
        var labelName = "__label_break_"+getUniqueNumber()+"__";
        var label = new Ast(labelName, [], [], "Label");
        label.parent = innermostStructure.parent;
        innermostStructure.parent.children.splice(innermostStructure.parent.childIndex+1, 0, label);

        //Convert the break to a goto
        return new Ast("__skip__", [new Ast("__distanceTo__", [new Ast(labelName, [], [], "Label")])]);

    } else if (innermostStructure.name === "__switch__") {
        var result = new Ast("__else__");
        result.doNotOptimize = true;
        return result;

    } else if (innermostStructure.name === "__while__" || innermostStructure.name === "__for__") {
        return content;

    } else {
        warn("w_break_outside_loop", "Found 'break' instruction, but not within a loop");
        //breaks outside loops act like aborts
        return new Ast("return");
    }
}
