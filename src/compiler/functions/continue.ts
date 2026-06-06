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

import { Ast, astParsingFunctions } from "../../utils/ast";

astParsingFunctions.continue = function (content, compiler) {
    //Determine the innermost loop
    let innermostStructure = content.parent;
    if (innermostStructure === undefined) {
        throw compiler.error("continue has no parent?");
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
        return compiler.Ast("loop");
    } else if (innermostStructure.name === "__while__" || innermostStructure.name === "__for__") {
        //Do not use the "continue" action because of a workshop bug where it will abort the rule if an "if" is above it.
        //return content;

        //Place a label at the end
        var labelName = "__label_continue_" + compiler.getUniqueNumber() + "__";
        var label = compiler.Ast(labelName, [], [], "Label");
        label.parent = innermostStructure;
        innermostStructure.children.splice(innermostStructure.children.length, 0, label);

        //Convert the continue to a goto
        return compiler.Ast("__skip__", [compiler.Ast("__distanceTo__", [compiler.Ast(labelName, [], [], "Label")])]);
    } else {
        compiler.warn("w_continue_outside_loop", "Found 'continue' instruction, but not within a loop");
        //continues outside loops act like aborts
        return compiler.Ast("return");
    }
};
