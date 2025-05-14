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

import { enableOptimization, currentRuleEvent } from "../../globalVars";
import { astParsingFunctions, getAstForEnd } from "../../utils/ast";
import { error, warn } from "../../utils/logging";

astParsingFunctions.__else__ = function (content) {
    if (content.parent === undefined) {
        error("Found 'else' with no parent");
    }

    //Check if the else is directly preceded by an elif/if/else.
    //Do not raise an error because that is valid workshop syntax and can be used for gotos
    if (content.parent.childIndex === 0 || !["__if__", "__elif__", "__else__"].includes(content.parent.children[content.parent.childIndex - 1].name)) {
        //Except if the parent is an if/elif/else because then the generated code will not work properly
        if (["__if__", "__elif__", "__else__"].includes(content.parent.name)) {
            error("Found 'else', but no 'if' or 'elif' before it");
        }
        warn("w_lone_else", "Found 'else', but no 'if' or 'elif' before it");
    }
    if (content.parent.childIndex === 0 || ["__else__"].includes(content.parent.children[content.parent.childIndex - 1].name)) {
        warn("w_lone_else", "Found 'else' directly after another 'else'");
    }

    //Add the "end" function.
    if (content.parent.childIndex === content.parent.children.length - 1 || (content.parent.childIndex < content.parent.children.length - 1 && !["__elif__", "__else__"].includes(content.parent.children[content.parent.childIndex + 1].name))) {
        //Optimization: do not include "end" if the "if" is at the end of the chain, but doesn't include a while/for loop as parent and is not in a subroutine.
        var includeEnd = true;
        if (enableOptimization && currentRuleEvent !== "__subroutine__" && content.parent.childIndex === content.parent.children.length - 1) {
            var root = content;
            includeEnd = false;

            while (root.name !== "__rule__") {
                root = root?.parent ?? error("Attempted to access parent of Ast with no parent");
                if (root.name === "__while__" || root.name === "__for__" || root.name === "__doWhile__") {
                    includeEnd = true;
                    break;
                } else if (["__if__", "__elif__", "__else__"].includes(root.name) && root.parent && root.parent.childIndex !== root.parent.children.length - 1) {
                    includeEnd = true;
                    break;
                }
            }
        }
        if (includeEnd) {
            content.parent.children.splice(content.parent.childIndex + 1, 0, getAstForEnd());
        }
    }

    return content;
};
