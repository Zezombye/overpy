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

    function removeUselessChildren(children) {

        for (var i = 0; i < children.length; i++) {
            //Check for a dynamic goto.
            if (children[i].name === "__skip__" && children[i].args[0].name !== "__distanceTo__" || children[i].name === "__skipIf__" && children[i].args[1].name !== "__distanceTo__") {
                isRelativeGotoEncountered = true;
            }
            if (isRelativeGotoEncountered) {
                children[i].isUnderRelativeGoto = true;
            } else {
                if (children[i].name === "__uselessInstruction__") {
                    children.splice(i, 1);
                    i--;
                }
            }
            removeUselessChildren(children[i].children);
        }
    }
    if (enableOptimization) {
        removeUselessChildren(content.children);
    }

    //Check that there is no duplicate label.
    var declaredLabels = [];
    function getExistingLabels(content) {
        fileStack = content.fileStack;
        if (content.type === "Label") {
            if (declaredLabels.includes(content.name)) {
                error("Label '"+content.name+"' is already declared in this rule");
            }
            declaredLabels.push(content.name);
        } else {
            for (var child of content.children) {
                getExistingLabels(child);
            }
        }
    }
    for (var child of content.children) {
        getExistingLabels(child);
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
            return content;
        }
    }

    resolveDistanceTo(content);

    //Optimize rule conditions
    if (enableOptimization && content.ruleAttributes.conditions) {
        for (var i = 0; i < content.ruleAttributes.conditions.length; i++) {
            if (isDefinitelyFalsy(content.ruleAttributes.conditions[i])) {
                console.log("has false condition);");
                return getAstForUselessInstruction();
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
