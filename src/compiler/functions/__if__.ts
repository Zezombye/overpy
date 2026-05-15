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

import { currentRuleHasVariableGoto, enableOptimization, currentRuleEvent, optimizeForSize } from "../../globalVars";
import { getAstForUselessInstruction, Ast, isDefinitelyFalsy, isDefinitelyTruthy, makeChildrenUseless, getAstForEnd, astParsingFunctions } from "../../utils/ast";
import { error } from "../../utils/logging";
import {getUniqueNumber} from "../../utils/other";

astParsingFunctions.__if__ = function (content) {
    if (content.parent === undefined) {
        error("'if' AST lacks parent");
    }

    //Check for "if (not) ruleCondition: return/continue/loop()".
    if (content.args[0].name === "ruleCondition" || (content.args[0].name === "__not__" && content.args[0].args[0].name === "ruleCondition")) {
        if (currentRuleHasVariableGoto) {
            //Keep the child and add a "pass" for the "end"
            content.parent.children.splice(content.parent.childIndex + 1, 0, content.args[0].name === "ruleCondition" ? getAstForUselessInstruction() : content.children[0], getAstForUselessInstruction());
        }

        if (content.children.length === 1) {
            if (content.children[0].name === "loop") {
                if (content.args[0].name === "ruleCondition") {
                    return new Ast("__loopIfConditionIsTrue__");
                } else {
                    return new Ast("__loopIfConditionIsFalse__");
                }
            } else if (content.children[0].name === "return") {
                if (content.args[0].name === "ruleCondition") {
                    return new Ast("__abortIfConditionIsTrue__");
                } else {
                    return new Ast("__abortIfConditionIsFalse__");
                }
            }
        }
    }
    let isLoneIf = content.parent.childIndex === content.parent.children.length - 1 || (content.parent.childIndex < content.parent.children.length - 1 && !["__elif__", "__else__"].includes(content.parent.children[content.parent.childIndex + 1].name));

    if (enableOptimization) {
        //if/loop, if/abort, if/skip -> loop if/abort if/skip if
        //but only if no relative goto, 1 child, and no else/elif after the if


        if (content.children.length === 1 && isLoneIf && ["return", "loop", "__skip__"].includes(content.children[0].name)) {
            if (currentRuleHasVariableGoto) {
                //Keep the child and add a "pass" for the "end"
                content.parent.children.splice(content.parent.childIndex + 1, 0, content.children[0], getAstForUselessInstruction());
            }

            if (isDefinitelyFalsy(content.args[0])) {
                return getAstForUselessInstruction();
            }
            if (isDefinitelyTruthy(content.args[0])) {
                return content.children[0];
            }

            if (content.children[0].name === "return") {
                return new Ast("__abortIf__", [content.args[0]]);
            } else if (content.children[0].name === "loop") {
                return new Ast("__loopIf__", [content.args[0]]);
            } else if (content.children[0].name === "__skip__") {
                return new Ast("__skipIf__", [content.args[0], content.children[0].args[0]]);
            }
        }

        //if false and no variable goto -> make the children useless
        if (!currentRuleHasVariableGoto && isDefinitelyFalsy(content.args[0])) {
            makeChildrenUseless(content.children);
        }
    }

    //Add the "end" function.
    if (isLoneIf) {
        //Optimization: do not include "end" if the "if" is at the end of the chain, but doesn't include a while/for loop as parent and is not in a subroutine.
        var includeEnd = true;
        if (enableOptimization && currentRuleEvent !== "__subroutine__" && content.parent.childIndex === content.parent.children.length - 1) {
            var root = content;
            includeEnd = false;

            while (root.name !== "__rule__") {
                root = root.parent ?? error("Failed to find rule parent while moving up ancestor chain (starting at if)");
                if (root.name === "__while__" || root.name === "__for__" || root.name === "__doWhile__") {
                    includeEnd = true;
                    break;
                } else if (["__if__", "__elif__", "__else__"].includes(root.name) && root.parent && root.parent.childIndex !== root.parent.children.length - 1) {
                    includeEnd = true;
                    break;
                }
            }
        }

        //if optimizing for size and replacing with skip if would save an element, do so (either "if not A", or "if A == B" with end and only one instruction)
        if (optimizeForSize && (content.args[0].name === "__not__" || content.children.length === 1 && includeEnd && ["__equals__", "__inequals__", "__greaterThan__", "__greaterThanOrEquals__", "__lessThan__", "__lessThanOrEquals__"].includes(content.args[0].name))) {
            let label = "__label_if_" + getUniqueNumber() + "__";
            content.parent.children.splice(content.parent.childIndex + 1, 0, ...content.children, new Ast(label, [], [], "Label"), getAstForUselessInstruction());

            if (content.args[0].name === "__not__") {
                content.args[0] = content.args[0].args[0];
            } else {
                content.args[0] = astParsingFunctions.__not__(new Ast("__not__", [content.args[0]]));
            }

            return new Ast("__skipIf__", [content.args[0], new Ast("__distanceTo__", [new Ast(label, [], [], "Label")])]);
        }

        if (includeEnd) {
            content.parent.children.splice(content.parent.childIndex + 1, 0, getAstForEnd());
        }
    }

    content.doNotReparse = true; //prevent calling this function again, else it would add multiple "end"s

    return content;
};
