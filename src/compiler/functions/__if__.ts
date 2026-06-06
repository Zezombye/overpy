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

import { isDefinitelyFalsy, isDefinitelyTruthy, astParsingFunctions } from "../../utils/ast";

astParsingFunctions.__if__ = function (content, compiler) {
    if (content.parent === undefined) {
        throw compiler.error("'if' AST lacks parent");
    }

    //Check for "if (not) ruleCondition: return/continue/loop()".
    if (content.args[0].name === "ruleCondition" || (content.args[0].name === "__not__" && content.args[0].args[0].name === "ruleCondition")) {
        if (compiler.currentRuleHasVariableGoto) {
            //Keep the child and add a "pass" for the "end"
            content.parent.children.splice(content.parent.childIndex + 1, 0, content.args[0].name === "ruleCondition" ? compiler.getAstForUselessInstruction() : content.children[0], compiler.getAstForUselessInstruction());
        }

        if (content.children.length === 1) {
            if (content.children[0].name === "loop") {
                if (content.args[0].name === "ruleCondition") {
                    return compiler.Ast("__loopIfConditionIsTrue__");
                } else {
                    return compiler.Ast("__loopIfConditionIsFalse__");
                }
            } else if (content.children[0].name === "return") {
                if (content.args[0].name === "ruleCondition") {
                    return compiler.Ast("__abortIfConditionIsTrue__");
                } else {
                    return compiler.Ast("__abortIfConditionIsFalse__");
                }
            }
        }
    }
    let isLoneIf = content.parent.childIndex === content.parent.children.length - 1 || (content.parent.childIndex < content.parent.children.length - 1 && !["__elif__", "__else__"].includes(content.parent.children[content.parent.childIndex + 1].name));

    if (compiler.enableOptimization) {
        //if/loop, if/abort, if/skip -> loop if/abort if/skip if
        //but only if no relative goto, 1 child, and no else/elif after the if


        if (content.children.length === 1 && isLoneIf && ["return", "loop", "__skip__"].includes(content.children[0].name)) {
            if (compiler.currentRuleHasVariableGoto) {
                //Keep the child and add a "pass" for the "end"
                content.parent.children.splice(content.parent.childIndex + 1, 0, content.children[0], compiler.getAstForUselessInstruction());
            }

            if (isDefinitelyFalsy(content.args[0])) {
                return compiler.getAstForUselessInstruction();
            }
            if (isDefinitelyTruthy(content.args[0])) {
                return content.children[0];
            }

            if (content.children[0].name === "return") {
                return compiler.Ast("__abortIf__", [content.args[0]]);
            } else if (content.children[0].name === "loop") {
                return compiler.Ast("__loopIf__", [content.args[0]]);
            } else if (content.children[0].name === "__skip__") {
                return compiler.Ast("__skipIf__", [content.args[0], content.children[0].args[0]]);
            }
        }

        //if false and no variable goto -> make the children useless
        if (!compiler.currentRuleHasVariableGoto && isDefinitelyFalsy(content.args[0])) {
            compiler.makeChildrenUseless(content.children);
        }
    }

    //Add the "end" function.
    if (isLoneIf) {
        //Optimization: do not include "end" if the "if" is at the end of the chain, but doesn't include a while/for loop as parent and is not in a subroutine.
        var includeEnd = true;
        if (compiler.enableOptimization && compiler.currentRuleEvent !== "__subroutine__" && content.parent.childIndex === content.parent.children.length - 1) {
            var root = content;
            includeEnd = false;

            while (root.name !== "__rule__") {
                root = root.parent ?? compiler.error("Failed to find rule parent while moving up ancestor chain (starting at if)");
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
        if (compiler.optimizeForSize && compiler.optimizeForSizeAggressive && (content.args[0].name === "__not__" || content.children.length === 1 && includeEnd && ["__equals__", "__inequals__", "__greaterThan__", "__greaterThanOrEquals__", "__lessThan__", "__lessThanOrEquals__"].includes(content.args[0].name))) {
            let label = "__label_if_" + compiler.getUniqueNumber() + "__";
            content.parent.children.splice(content.parent.childIndex + 1, 0, ...content.children, compiler.Ast(label, [], [], "Label"), compiler.getAstForUselessInstruction());

            if (content.args[0].name === "__not__") {
                content.args[0] = content.args[0].args[0];
            } else {
                content.args[0] = astParsingFunctions.__not__(compiler.Ast("__not__", [content.args[0]]), compiler);
            }

            let skip = compiler.Ast("__skipIf__", [content.args[0], compiler.Ast("__distanceTo__", [compiler.Ast(label, [], [], "Label")])]);
            skip.isGotoInSameScope = true;
            return skip;
        }

        if (includeEnd) {
            content.parent.children.splice(content.parent.childIndex + 1, 0, compiler.getAstForEnd());
        }
    }

    content.doNotReparse = true; //prevent calling this function again, else it would add multiple "end"s

    return content;
};
