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

astParsingFunctions.continue = function (content) {
    //Determine the innermost loop
    let innermostStructure = content.parent;
    if (innermostStructure === undefined) {
        error("continue has no parent?");
    }
    while (innermostStructure.parent !== undefined) {
        if (["__while__", "__for__", "__doWhile__"].includes(innermostStructure.name)) {
            break;
        } else {
            innermostStructure = innermostStructure.parent;
        }
    }

    if (innermostStructure.name === "__doWhile__") {
        //Return a loop instruction
        return new Ast("loop");
    } else if (innermostStructure.name === "__while__" || innermostStructure.name === "__for__") {
        //Do not use the "continue" action because of a workshop bug where it will abort the rule if an "if" is above it.
        //return content;

        //Place a label at the end
        var labelName = "__label_continue_" + getUniqueNumber() + "__";
        var label = new Ast(labelName, [], [], "Label");
        label.parent = innermostStructure;
        innermostStructure.children.splice(innermostStructure.children.length, 0, label);

        //Convert the continue to a goto
        return new Ast("__skip__", [new Ast("__distanceTo__", [new Ast(labelName, [], [], "Label")])]);
    } else {
        warn("w_continue_outside_loop", "Found 'continue' instruction, but not within a loop");
        //continues outside loops act like aborts
        return new Ast("return");
    }
};
