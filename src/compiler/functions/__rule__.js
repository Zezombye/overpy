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

astParsingFunctions.__rule__ = function(content) {


    //Iterate forward on each action, then remove all useless instructions, unless a relative goto is encountered.
    var isRelativeGotoEncountered = false;

    //Check if an instruction other than a control flow statement has been encountered.
    var hasMeaningfulInstructionBeenEncountered = false;

    //To check that there is no duplicate label.
    var declaredLabels = [];

    function iterateOnRuleActions(children) {
        //Remove useless instructions and check for meaningful intructions.

        for (var i = 0; i < children.length; i++) {
            fileStack = content.fileStack;

            //Check for a dynamic goto.
            if (children[i].name === "__skip__" && children[i].args[0].name !== "__distanceTo__" || children[i].name === "__skipIf__" && children[i].args[1].name !== "__distanceTo__") {
                isRelativeGotoEncountered = true;
            }

            //Check that the label isn't already declared.
            if (content.type === "Label") {
                if (declaredLabels.includes(content.name)) {
                    error("Label '"+content.name+"' is already declared in this rule");
                }
                declaredLabels.push(content.name);
            }

            //Check if the instruction is meaningful.
            if (!hasMeaningfulInstructionBeenEncountered && ![
                "__abortIf__",
                "__abortIfConditionIsFalse__",
                "__abortIfConditionIsTrue__",
                "break",
                "continue",
                "__else__",
                "__elif__",
                "__end__",
                //"__for__",
                //"__forGlobalVariable__",
                //"__forPlayerVariable__",
                "__if__",
                "__loop__",
                "__loopIf__",
                "__loopIfConditionIsFalse__",
                "__loopIfConditionIsTrue__",
                "pass",
                "return",
                "__skip__",
                "__skipIf__",
                //"__wait__",
                "__while__",
            ].includes(children[i].name) && children[i].type !== "Label" && !(children[i].name === "__wait__" && content.ruleAttributes.event !== "__subroutine__")) {
                debug("meaningful instruction :"+children[i].name);
                hasMeaningfulInstructionBeenEncountered = true;
            }

            iterateOnRuleActions(children[i].children);

            //Remove useless instructions, if no relative goto has been encountered.
            if (!isRelativeGotoEncountered && children[i].name === "pass") {
                children.splice(i, 1);
                i--;
            }
        }
    }
    if (enableOptimization) {
        iterateOnRuleActions(content.children);
    }

    if (enableOptimization && !hasMeaningfulInstructionBeenEncountered && !content.ruleAttributes.isDelimiter) {
        return getAstForUselessInstruction();
    }

    //console.log(astToString(content));
    //Now that we have removed all useless instructions, compute each __distanceTo__ function.
    function resolveDistanceTo(content) {

        fileStack = content.fileStack;

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

            function computeDistanceTo(content) {

                for (var i = content.childIndex; i < content.children.length; i++) {
                    if (content.children[i].type === "Label" && content.children[i].name === label) {
                        foundLabel = true;
                    }
                    computeDistanceTo(content.children[i]);
                    if (content.children[i].type !== "Label") {
                        debug("Increasing distanceTo count for label "+label+": function '"+content.children[i].name+"'");
                        //console.log(astToString(content.children[i]));
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
                root = root.parent;
            }
            count++; //account for "__rule__"
            count--; //account for the action in which the __distanceTo__ is

            computeDistanceTo(root);
            if (!foundLabel) {
                error("Could not find label '"+label+"'");
            }

            if (count < 0) {
                error("Error while calculating distance to label '"+label+"': count is "+count)
            }

            return getAstForNumber(count);


        } else {
            //optimize out skip(0)
            if (enableOptimization) {
                if (content.name === "__skip__" && content.args[0].name === "__number__" && content.args[0].args[0].numValue === 0
                        || content.name === "__skipIf__" && content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
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
                content.ruleAttributes.conditions.splice(i+1, 0, content.ruleAttributes.conditions[i].args[1]);
                //replace by 1st argument of "and"
                content.ruleAttributes.conditions[i] = content.ruleAttributes.conditions[i].args[0];
                i--;
            }
        }
    }

    return content;

}
