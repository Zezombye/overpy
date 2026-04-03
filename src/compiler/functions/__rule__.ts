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

import { fileStack, enableOptimization, setFileStack } from "../../globalVars";
import { getAstForUselessInstruction, getAstForNumber, isDefinitelyFalsy, isDefinitelyTruthy, Ast, astParsingFunctions, getAstForTrue } from "../../utils/ast";
import { debug, error } from "../../utils/logging";

astParsingFunctions.__rule__ = function (content) {
    //Iterate forward on each action, then remove all useless instructions, unless a relative goto is encountered.
    var isRelativeGotoEncountered = false;
    //Some control flow optimizations with if/elif/else cannot be made safely at all if any goto is encountered.
    var isGotoEncountered = false;

    //Check if an instruction other than a control flow statement has been encountered.
    var hasMeaningfulInstructionBeenEncountered = false;

    //To check that there is no duplicate label.
    var declaredLabels: string[] = [];

    function iterateOnRuleActions(children: Ast[]) {
        //Remove useless instructions and check for meaningful intructions.

        for (var i = 0; i < children.length; i++) {
            setFileStack(content.fileStack);

            //Check for a dynamic goto.
            if ((children[i].name === "__skip__" && children[i].args[0].name !== "__distanceTo__") || (children[i].name === "__skipIf__" && children[i].args[1].name !== "__distanceTo__")) {
                isRelativeGotoEncountered = true;
            }
            if (children[i].name === "__skip__" || children[i].name === "__skipIf__") {
                isGotoEncountered = true;
            }

            //Check that the label isn't already declared.
            if (content.type === "Label") {
                if (declaredLabels.includes(content.name)) {
                    error("Label '" + content.name + "' is already declared in this rule");
                }
                declaredLabels.push(content.name);
            }

            //Check if the instruction is meaningful.
            if (
                !hasMeaningfulInstructionBeenEncountered &&
                ![
                    "__abortIf__",
                    "__abortIfConditionIsFalse__",
                    "__abortIfConditionIsTrue__",
                    "break",
                    "continue",
                    "__disableOptimizations__",
                    "__disableOptimizeForSize__",
                    "__disableOptimizeStrict__",
                    "__enableOptimizations__",
                    "__enableOptimizeForSize__",
                    "__enableOptimizeStrict__",
                    "__else__",
                    "__elif__",
                    "__end__",
                    //"__for__", //meaningful because it modifies the loop variable
                    //"__forGlobalVariable__",
                    //"__forPlayerVariable__",
                    "__if__",
                    "loop",
                    "__loopIf__",
                    "__loopIfConditionIsFalse__",
                    "__loopIfConditionIsTrue__",
                    "pass",
                    "return",
                    "__skip__",
                    "__skipIf__",
                    //"wait",
                    "__while__",
                ].includes(children[i].name) &&
                children[i].type !== "Label" &&
                !(children[i].name === "wait" && content.ruleAttributes.event !== "__subroutine__")
            ) {
                debug("meaningful instruction :" + children[i].name);
                hasMeaningfulInstructionBeenEncountered = true;
            }

            iterateOnRuleActions(children[i].children);

            if (!isRelativeGotoEncountered) {

                //Remove useless instructions
                if (children[i].name === "pass") {
                    children.splice(i, 1);
                    i--;
                    continue;
                }
                if (children[i].name === "__if__") {
                    if (children[i].children.length === 0) {
                        if (i === children.length - 1 || (children[i + 1].name !== "__else__" && children[i + 1].name !== "__elif__")) {
                            
                            //Remove empty "If" statements, if not followed by an "Else" or "Else If".
                            children.splice(i, 1);
                            
                            if (i < children.length && children[i].name === "__end__") {
                                children.splice(i, 1);
                            }
                            i--;
                            continue;
                        }
                    }
                    //Note: if there is a goto we also have to check if the children's length is 0, because otherwise there might be a label inside the if that we shouldn't remove. The optimization in __if__.ts should correctly optimize out all children if the if is falsy and can be removed.
                    if (isDefinitelyFalsy(children[i].args[0]) && (children[i].children.length === 0 || !isGotoEncountered)) {
                        if (children[i+1].name === "__else__") {
                            //Remove the current if and replace else by if true (easier then to optimize for further else/elifs)
                            children[i+1].name = "__if__";
                            children[i+1].args = [getAstForTrue()];
                            children.splice(i, 1);
                            i--;
                            continue;
                        } else if (children[i+1].name === "__elif__") {
                            //Replace the "elif" by an "if", and remove the current "if"
                            children[i+1].name = "__if__";
                            children.splice(i, 1);
                            i--;
                            continue;
                        }
                    }
                }
                if (children[i].name === "__elif__") {
                    if (isDefinitelyFalsy(children[i].args[0]) && (children[i].children.length === 0 || !isGotoEncountered)) {
                        if (i > 0 && (children[i-1].name === "__if__" || children[i-1].name === "__elif__")) {
                            //Don't deal with lone elifs, idk how they work and I'm too lazy to figure it out
                            //Since the elif is part of an if/elif/else/end chain, just removing the elif is enough
                            children.splice(i, 1);
                            i--;
                            continue;
                        }
                    }
                }
                if (children[i].name === "__if__" || children[i].name === "__elif__") {
                    if (isDefinitelyTruthy(children[i].args[0]) && !isGotoEncountered) {
                        //Replace "If/Elif" statements with a condition that is always true by their children or by an "Else".
                        //We need to check that no goto was encountered, otherwise the label might be in the else/elifs that we will be removing.
                        //First, remove the rest of the elif/else chain
                        while (i < children.length - 1 && (children[i + 1].name === "__else__" || children[i + 1].name === "__elif__" || children[i + 1].name === "__end__")) {
                            if (children[i + 1].name === "__end__") {
                                break;
                            } else {
                                children.splice(i + 1, 1);
                            }
                        }

                        if (children[i].name === "__if__") {
                            //Replace the "if" by its children, and remove the "end" if present
                            if (i < children.length - 1 && children[i + 1].name === "__end__") {
                                children.splice(i + 1, 1);
                            }
                            
                            children.splice(i, 1, ...children[i].children);
                            i--;
                            continue;
                        } else if (children[i].name === "__elif__") {
                            //Replace the elif by an else
                            children[i].name = "__else__";
                            children[i].args = [];
                            continue;
                        }
                    }
                }
            }
        }
    }
    if (enableOptimization) {
        iterateOnRuleActions(content.children);
    }

    if (enableOptimization && !hasMeaningfulInstructionBeenEncountered && !content.ruleAttributes.isDelimiter) {
        return getAstForUselessInstruction();
    }

    //Now that we have removed all useless instructions, compute each __distanceTo__ function.
    function resolveDistanceTo(content: Ast) {
        setFileStack(content.fileStack);

        for (var i = 0; i < content.args.length; i++) {
            content.args[i] = resolveDistanceTo(content.args[i]);
        }
        for (var i = 0; i < content.children.length; i++) {
            content.childIndex = i;
            content.children[i] = resolveDistanceTo(content.children[i]);
        }
        content.childIndex = 0;
        if (content.name === "__distanceTo__") {
            var count = 0;
            var label = content.args[0].name;
            var foundLabel = false;

            function computeDistanceTo(content: Ast) {
                for (var i = content.childIndex; i < content.children.length; i++) {
                    if (content.children[i].type === "Label" && content.children[i].name === label) {
                        foundLabel = true;
                    }
                    computeDistanceTo(content.children[i]);
                    if (content.children[i].type !== "Label" && !["__enableOptimizations__", "__disableOptimizations__", "__enableOptimizeForSize__", "__disableOptimizeForSize__", "__enableOptimizeStrict__", "__disableOptimizeStrict__"].includes(content.children[i].name)) {
                        debug("Increasing distanceTo count for label " + label + ": function '" + content.children[i].name + "'");
                        count++;
                    }
                    if (foundLabel) {
                        break;
                    }
                }
            }

            //Get the root of the tree.
            //Remove 1 from the count each time, because the parents will get counted in the count.
            var root = content;
            while (root.name !== "__rule__") {
                if (root.type === "void") {
                    count--;
                }
                root = root.parent ?? error("Could not find root of tree while processing distance to label '" + label + "'");
            }
            count++; //account for "__rule__"
            count--; //account for the action in which the __distanceTo__ is

            computeDistanceTo(root);
            if (!foundLabel) {
                error("Could not find label '" + label + "'");
            }

            if (count < 0) {
                error("Error while calculating distance to label '" + label + "': count is " + count);
            }

            return getAstForNumber(count);
        } else {
            //optimize out skip(0)
            if (enableOptimization) {
                if ((content.name === "__skip__" && content.args[0].name === "__number__" && content.args[0].args[0].numValue === 0) || (content.name === "__skipIf__" && content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0)) {
                    return getAstForUselessInstruction();
                }
            }
            return content;
        }
    }

    resolveDistanceTo(content);

    //Optimize rule conditions
    if (enableOptimization && content.ruleAttributes.conditions) {
        for (var i = 0; i < content.ruleAttributes.conditions.length; i++) {
            if (isDefinitelyFalsy(content.ruleAttributes.conditions[i])) {
                debug("rule has false condition");
                if (!content.ruleAttributes.isDelimiter) {
                    return getAstForUselessInstruction();
                }
            } else if (isDefinitelyTruthy(content.ruleAttributes.conditions[i])) {
                content.ruleAttributes.conditions.splice(i, 1);
                i--;
            } else if (content.ruleAttributes.conditions[i].name === "__and__") {
                //insert the 2nd argument of "and" into the array
                content.ruleAttributes.conditions.splice(i + 1, 0, content.ruleAttributes.conditions[i].args[1]);
                //replace by 1st argument of "and"
                content.ruleAttributes.conditions[i] = content.ruleAttributes.conditions[i].args[0];
                i--;
            }
        }
    }

    return content;
};
