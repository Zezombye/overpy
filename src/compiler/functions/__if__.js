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

astParsingFunctions.__if__ = function(content) {

    //Check for "if (not) RULE_CONDITION: return/continue/goto RULE_START".
    if (content.args[0].name === "RULE_CONDITION" || content.args[0].name === "__not__" && content.args[0].args[0].name === "RULE_CONDITION") {

        if (currentRuleHasVariableGoto) {
            //Keep the child and add a "pass" for the "end"
            content.parent.children.splice(content.parent.childIndex+1, 0, content.children[0], getAstForUselessInstruction());
        }

        if (content.children.length !== 1) {
            error("Cannot use 'RULE_CONDITION' in that context");
        }
        if (content.children[0].name === "__loop__") {
            if (content.args[0].name === "RULE_CONDITION") {
                return new Ast("__loopIfConditionIsTrue__");
            } else {
                return new Ast("__loopIfConditionIsFalse__");
            }
        } else if (content.children[0].name === "return") {
            if (content.args[0].name === "RULE_CONDITION") {
                return new Ast("__abortIfConditionIsTrue__");
            } else {
                return new Ast("__abortIfConditionIsFalse__");
            }
        } else {            
            error("Cannot use 'RULE_CONDITION' in that context");
        }
    }

    if (enableOptimization) {
        //if/loop, if/abort, if/skip -> loop if/abort if/skip if
        //but only if no relative goto, 1 child, and no else/elif after the if
        if (content.children.length === 1 
                && (content.parent.childIndex === content.parent.children.length-1 || content.parent.children[content.parent.childIndex+1].name !== "__elif__" && content.parent.children[content.parent.childIndex+1].name !== "__else__")
                && ["return", "__loop__", "__skip__"].includes(content.children[0].name)) {

            
            if (currentRuleHasVariableGoto) {
                //Keep the child and add a "pass" for the "end"
                content.parent.children.splice(content.parent.childIndex+1, 0, content.children[0], getAstForUselessInstruction());
            }

            if (isDefinitelyFalsy(content.args[0])) {
                return getAstForUselessInstruction();
            }
            if (isDefinitelyTruthy(content.args[0])) {
                return content.children[0];
            }
            
            if (content.children[0].name === "return") {
                return new Ast("__abortIf__", [content.args[0]]);
            } else if (content.children[0].name === "__loop__") {
                return new Ast("__loopIf__", [content.args[0]]);
            } else if (content.children[0].name === "__skip__") {
                return new Ast("__skipIf__", [content.args[0], content.children[0].args[0]]);
            }
        }

        //if false -> make the children useless
        if (isDefinitelyFalsy(content.args[0])) {
            makeChildrenUseless(content.children);
        }
    }

    //Add the "end" function.
    if (content.parent.childIndex === content.parent.children.length-1 || content.parent.childIndex < content.parent.children.length-1 && !["__elif__", "__else__"].includes(content.parent.children[content.parent.childIndex+1].name)) {
        //Optimization: do not include "end" if the "if" is at the end of the chain, but doesn't include a while/for loop as parent.
        var includeEnd = true;
        if (enableOptimization && content.parent.childIndex === content.parent.children.length-1) {

            var root = content;
            includeEnd = false;
        
            while (root.name !== "__rule__") {
                root = root.parent;
                if (root.name === "__while__" || root.name === "__for__" || root.name === "__doWhile__") {
                    includeEnd = true;
                    break;
                } else if (["__if__", "__elif__", "__else__"].includes(root.name) && root.parent.childIndex !== root.parent.children.length-1) {
                    includeEnd = true;
                    break;
                }
            }
        }
        if (includeEnd) {
            content.parent.children.splice(content.parent.childIndex+1, 0, getAstForEnd());
        }
    }

    return content;

}
