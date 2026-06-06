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

import { constantValues } from "../data/constants";
import { stringKw } from "../data/localizedStrings";
import { eventSlotKw } from "../data/other";
import { astOperatorPrecedence, funcKw } from "../globalVars";
import { OverPyDecompiler } from "../godClasses";
import { areAstsAlwaysEqual, Ast } from "../utils/ast";
import { debug } from "../utils/logging";
import { tabLevel } from "../utils/other";
import { escapeString } from "../utils/strings";

OverPyDecompiler.prototype.astRulesToOpy = function(rules: Ast[]) {
    var result = "";

    for (var rule of rules) {
        try {

            var decompiledRule = "";
            var decompiledRuleAttributes = "";
            this.nbTabs = 1;
            this.decompilationLabelNumber = 0;
            this.currentRuleHasVariableGoto = false;

            if (rule.ruleAttributes.event === "__subroutine__") {
                decompiledRule += "def " + rule.ruleAttributes.subroutineName + "():\n";
                decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Name " + escapeString(rule.ruleAttributes.name, false) + "\n";
            } else {
                decompiledRule += "rule " + escapeString(rule.ruleAttributes.name, false) + ":\n";

                //Decompile the rule attributes
                if (rule.ruleAttributes.event !== "global") {
                    decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Event " + rule.ruleAttributes.event + "\n";
                }
                if (rule.ruleAttributes.eventTeam && rule.ruleAttributes.eventTeam !== "all") {
                    decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Team " + rule.ruleAttributes.eventTeam + "\n";
                }
                if (rule.ruleAttributes.eventPlayer && rule.ruleAttributes.eventPlayer !== "all") {
                    if (rule.ruleAttributes.eventPlayer in eventSlotKw) {
                        decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Slot " + rule.ruleAttributes.eventPlayer + "\n";
                    } else {
                        decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Hero " + rule.ruleAttributes.eventPlayer + "\n";
                    }
                }
                if (rule.ruleAttributes.conditions) {
                    let conditions = rule.ruleAttributes.conditions as Ast[];
                    for (var condition of conditions) {
                        if (condition.comment) {
                            decompiledRuleAttributes += condition.comment
                                .split("\n")
                                .map((x) => tabLevel(this.nbTabs) + "#" + x + "\n")
                                .join("");
                        }
                        decompiledRuleAttributes += tabLevel(this.nbTabs);
                        if (condition.isDisabled) {
                            decompiledRuleAttributes += "#";
                        }
                        decompiledRuleAttributes += "@Condition " + this.astToOpy(condition) + "\n";
                    }
                }
            }
            if (rule.ruleAttributes.isDisabled) {
                decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Disabled\n";
            }
            //In most cases, empty rules are delimiters. Keep them in just in case the user still wants them in the output
            if (rule.children.length === 0) {
                decompiledRuleAttributes += tabLevel(this.nbTabs) + "@Delimiter\n";
            }
            if (decompiledRuleAttributes) {
                decompiledRuleAttributes += tabLevel(this.nbTabs) + "\n";
            }
            decompiledRule += decompiledRuleAttributes;

            //Decompile the rule actions
            decompiledRule += this.astActionsToOpy(rule.children);

            /*if (rule.ruleAttributes.isDisabled) {
                decompiledRule = "/*\n" + decompiledRule + "*\/";
            }*/
            decompiledRule += "\n\n";
            result += decompiledRule;
        } catch (e) {
            this.error("Error while decompiling rule '" + rule.ruleAttributes.name + "': " + e);
        }
    }

    if (result) {
        result = "#Only remove the following directive if the gamemode does not use tricks such as A+0, A*0, A or \"\", \"am\" == \"**\", etc which would otherwise be optimized out.\n#!optimizeStrict\n\n"+result;
    }

    return result;
}

OverPyDecompiler.prototype.astArgsToOpy = function(funcName: string, args: Ast[]) {

    let funcArgs = (funcKw[funcName].args || []).slice(funcName.startsWith(".") ? 1 : 0);
    for (let i = funcArgs.length-1; i >= 0; i--) {
        if (i > args.length-1) {
            this.error("Invalid number of arguments for function '"+funcName+"', expected at least "+i+", received "+args.length);
        }
        //console.log(args);
        //console.log(i);
        //console.log(args[i]);
        if (funcArgs[i]?.default !== undefined && areAstsAlwaysEqual(args[i], this.getAstForArgDefault(funcArgs[i]))) {
            args.pop();
        } else {
            break;
        }
    }
    return args.map(x => this.astToOpy(x)).join(", ");
}

OverPyDecompiler.prototype.astActionsToOpy = function(actions: Ast[]): string {
    var result = "";
    for (var i = 0; i < actions.length; i++) {
        debug("Parsing AST of action '" + actions[i].name + "'");

        let comment = actions[i].comment;
        let resultComment = "";
        if (comment !== undefined) {
            resultComment += comment.split("\n").map((x) => "#" + x + "\n").join("");
        }
        var decompiledAction = "";
        if (["__elif__", "__else__", "__while__", "__for__"].includes(actions[i].name) && !actions[i].isDisabled) {
            //Check if there is an "end" (or elif/else) and if we must modify the action
            var isEndFound = false;
            var depth = 0;
            for (var j = i + 1; j < actions.length; j++) {
                if (actions[j].isDisabled) {
                    continue;
                }
                if (actions[i].name === "__elif__" && ["__elif__", "__else__"].includes(actions[j].name)) {
                    isEndFound = true;
                    break;
                }
                //The workshop actually doesn't care about lone elif/else when matching them with ends.
                if (["__if__", "__while__", "__for__"].includes(actions[j].name)) {
                    depth++;
                }
                if (actions[j].name === "__end__") {
                    if (depth === 0) {
                        isEndFound = true;
                        break;
                    } else {
                        depth--;
                    }
                }
            }

            //Check for a while/for without "end" and convert to "if", as overpy cannot represent those
            if (!isEndFound && actions[i].name !== "__elif__" && actions[i].name !== "__else__") {
                resultComment += "#Note: this '" + actions[i].name + "' had no 'end' action.\n";
                debug("No end found for " + actions[i].name);

                if (actions[i].name === "__while__") {
                    actions[i].name = "__if__";
                } else if (actions[i].name === "__for__") {
                    //args[0] = start, args[1] = end, args[2] = step
                    //step > 0 && start < end || step <= 0 && start > end
                    actions[i] = this.Ast("__if__", [this.Ast("__or__", [this.Ast("__and__", [this.Ast("__greaterThan__", [actions[i].args[2], this.getAstFor0()]), this.Ast("__lessThan__", [actions[i].args[0], actions[i].args[1]])]), this.Ast("__and__", [this.Ast("__lessThanOrEquals__", [actions[i].args[2], this.getAstFor0()]), this.Ast("__greaterThan__", [actions[i].args[0], actions[i].args[1]])])])]);
                } else {
                    this.error("Unexpected name '" + actions[i].name + "'");
                }
            }
        }

        //Operator functions
        const funcToOpMapping = {
            __add__: "+=",
            __subtract__: "-=",
            __multiply__: "*=",
            __divide__: "/=",
            __modulo__: "%=",
            __raiseToPower__: "**=",
        };

        //Check for labels
        for (var j = 0; j < this.decompilerGotos.length; j++) {
            if (this.decompilerGotos[j].remainingActions <= 0) {
                result += tabLevel(this.nbTabs) + this.decompilerGotos[j].label + ":\n";
                this.decompilerGotos.splice(j, 1);
                j--;
            } else {
                this.decompilerGotos[j].remainingActions--;
            }
        }

        var tabLevelForThisAction = this.nbTabs;

        if (["__if__", "__elif__", "__else__", "__while__", "__for__"].includes(actions[i].name)) {
            var nameToKeywordMapping = {
                __if__: "if",
                __elif__: "elif",
                __else__: "else",
                __while__: "while",
                __for__: "for",
            };
            if ((actions[i].name === "__elif__" || actions[i].name === "__else__") && !actions[i].isDisabled) {
                if (this.nbTabs > 1) {
                    //Properly check for lone elif/else chains. Go backwards and see if there is a if/elif/else without an end.
                    let depth = 0;
                    let found = false;
                    for (let j = i - 1; j >= 0; j--) {
                        if (actions[j].isDisabled) {
                            continue;
                        }
                        if (["__if__", "__elif__", "__else__"].includes(actions[j].name) && depth === 0) {
                            found = true;
                            break;
                        }
                        if (["__if__", "__while__", "__for__"].includes(actions[j].name)) {
                            depth--;
                        }
                        if (actions[j].name === "__end__") {
                            depth++;
                        }
                        if (depth < 0) {
                            break;
                        }
                    }
                    if (found) {
                        this.nbTabs--;
                    }
                }
            }
            tabLevelForThisAction = this.nbTabs;
            decompiledAction = nameToKeywordMapping[actions[i].name as keyof typeof nameToKeywordMapping];
            if (actions[i].args.length > 0) {
                decompiledAction += " " + this.astToOpy(actions[i].args[0]);
            }
            if (actions[i].name === "__for__") {
                decompiledAction += " in range(";
                var rangeArgs = [];
                if (!(actions[i].args[1].name === "__number__" && actions[i].args[1].args[0].name === "0" && actions[i].args[3].name === "__number__" && actions[i].args[3].args[0].name === "1")) {
                    rangeArgs.push(this.astToOpy(actions[i].args[1]));
                }
                rangeArgs.push(this.astToOpy(actions[i].args[2]));
                if (!(actions[i].args[3].name === "__number__" && actions[i].args[3].args[0].name === "1")) {
                    rangeArgs.push(this.astToOpy(actions[i].args[3]));
                }
                decompiledAction += rangeArgs.join(", ") + ")";
            }
            decompiledAction += ":";
            if (!actions[i].isDisabled) {
                this.nbTabs++;
            }
        } else if (actions[i].name === "__abortIf__" && !this.currentRuleHasVariableGoto) {
            decompiledAction += "if " + this.astToOpy(actions[i].args[0]) + ":\n" + tabLevel(tabLevelForThisAction + 1) + "return";
        } else if (actions[i].name === "__abortIfConditionIsFalse__" && !this.currentRuleHasVariableGoto) {
            decompiledAction += "if not ruleCondition:\n" + tabLevel(tabLevelForThisAction + 1) + "return";
        } else if (actions[i].name === "__abortIfConditionIsTrue__" && !this.currentRuleHasVariableGoto) {
            decompiledAction += "if ruleCondition:\n" + tabLevel(tabLevelForThisAction + 1) + "return";
        } else if (actions[i].name === "__assignTo__") {
            decompiledAction = this.astToOpy(actions[i].args[0]) + " = " + this.astToOpy(actions[i].args[1]);
        } else if (actions[i].name === "__callSubroutine__") {
            decompiledAction += actions[i].args[0].name + "()";
        } else if (actions[i].name === "__chaseGlobalVariableAtRate__") {
            decompiledAction += "chaseAtRate(" + actions[i].args[0].name + ", " + this.astToOpy(actions[i].args[1]) + ", " + this.astToOpy(actions[i].args[2]) + (actions[i].args[3].name === "DESTINATION_AND_RATE" ? "" : ", " + this.astToOpy(actions[i].args[3])) + ")";
        } else if (actions[i].name === "__chaseGlobalVariableOverTime__") {
            decompiledAction += "chaseOverTime(" + actions[i].args[0].name + ", " + this.astToOpy(actions[i].args[1]) + ", " + this.astToOpy(actions[i].args[2]) + (actions[i].args[3].name === "DESTINATION_AND_DURATION" ? "" : ", " + this.astToOpy(actions[i].args[3])) + ")";
        } else if (actions[i].name === "__chasePlayerVariableAtRate__") {
            decompiledAction += "chaseAtRate(" + this.astToOpy(actions[i].args[0]) + "." + actions[i].args[1].name + ", " + this.astToOpy(actions[i].args[2]) + ", " + this.astToOpy(actions[i].args[3]) + (actions[i].args[4].name === "DESTINATION_AND_RATE" ? "" : ", " + this.astToOpy(actions[i].args[4])) + ")";
        } else if (actions[i].name === "__chasePlayerVariableOverTime__") {
            decompiledAction += "chaseOverTime(" + this.astToOpy(actions[i].args[0]) + "." + actions[i].args[1].name + ", " + this.astToOpy(actions[i].args[2]) + ", " + this.astToOpy(actions[i].args[3]) + (actions[i].args[4].name === "DESTINATION_AND_DURATION" ? "" : ", " + this.astToOpy(actions[i].args[4])) + ")";
        } else if (actions[i].name === "__end__" && !actions[i].isDisabled) {
            if (this.nbTabs > 1) {
                this.nbTabs--;
            }
            continue;
        } else if (actions[i].name === "hudText") {
            let decompiledActionName;
            let actionArgs;
            if (actions[i].args[2].name === "null" && actions[i].args[3].name === "null") {
                decompiledActionName = "hudHeader";
                actionArgs = [0, 1, 4, 5, 6, 9, 10].map(x => actions[i].args[x]);
            } else if (actions[i].args[1].name === "null" && actions[i].args[3].name === "null") {
                decompiledActionName = "hudSubheader";
                actionArgs = [0, 2, 4, 5, 7, 9, 10].map(x => actions[i].args[x]);
            } else if (actions[i].args[1].name === "null" && actions[i].args[2].name === "null") {
                decompiledActionName = "hudSubtext";
                actionArgs = [0, 3, 4, 5, 8, 9, 10].map(x => actions[i].args[x]);
            } else {
                decompiledActionName = "hudText";
                actionArgs = actions[i].args;
            }
            decompiledAction += decompiledActionName+"(" + this.astArgsToOpy(decompiledActionName, actionArgs) + ")";
        } else if (actions[i].name === "__loopIf__" && !this.currentRuleHasVariableGoto) {
            decompiledAction += "if " + this.astToOpy(actions[i].args[0]) + ":\n" + tabLevel(tabLevelForThisAction + 1) + "loop()";
        } else if (actions[i].name === "__loopIfConditionIsFalse__" && !this.currentRuleHasVariableGoto) {
            decompiledAction += "if not ruleCondition:\n" + tabLevel(tabLevelForThisAction + 1) + "loop()";
        } else if (actions[i].name === "__loopIfConditionIsTrue__" && !this.currentRuleHasVariableGoto) {
            decompiledAction += "if ruleCondition:\n" + tabLevel(tabLevelForThisAction + 1) + "loop()";
        } else if (actions[i].name === "__modifyVar__") {
            if (actions[i].args[1].name in funcToOpMapping) {
                if (["__add__", "__subtract__"].includes(actions[i].args[1].name) && (actions[i].args[2].name === "__number__" && actions[i].args[2].args[0].name === "1" || actions[i].args[2].name === "true")) {
                    decompiledAction += this.astToOpy(actions[i].args[0]) + (actions[i].args[1].name === "__add__" ? "++" : "--");
                } else {
                    decompiledAction += this.astToOpy(actions[i].args[0]) + " " + funcToOpMapping[actions[i].args[1].name as keyof typeof funcToOpMapping] + " " + this.astToOpy(actions[i].args[2]);
                }
            } else if (actions[i].args[1].name === "__min__") {
                decompiledAction += this.astToOpy(actions[i].args[0]) + " min= " + this.astToOpy(actions[i].args[2]);
            } else if (actions[i].args[1].name === "__max__") {
                decompiledAction += this.astToOpy(actions[i].args[0]) + " max= " + this.astToOpy(actions[i].args[2]);
            } else if (actions[i].args[1].name === "__appendToArray__") {
                decompiledAction += this.astToOpy(actions[i].args[0]) + ".append(" + this.astToOpy(actions[i].args[2]) + ")";
            } else if (actions[i].args[1].name === "__removeFromArrayByValue__") {
                decompiledAction += this.astToOpy(actions[i].args[0]) + ".remove(" + this.astToOpy(actions[i].args[2]) + ")";
            } else if (actions[i].args[1].name === "__removeFromArrayByIndex__") {
                decompiledAction += "del " + this.astToOpy(actions[i].args[0]) + "[" + this.astToOpy(actions[i].args[2]) + "]";
            }
        } else if (actions[i].name === "__setGlobalVariable__") {
            decompiledAction = this.astToOpy(actions[i].args[0]) + " = " + this.astToOpy(actions[i].args[1]);
        } else if (actions[i].name === "__setGlobalVariableAtIndex__") {
            decompiledAction = this.astToOpy(actions[i].args[0]) + "[" + this.astToOpy(actions[i].args[1]) + "] = " + this.astToOpy(actions[i].args[2]);
        } else if (actions[i].name === "__setPlayerVariable__") {
            var op1 = this.astToOpy(actions[i].args[0]);
            if (this.astContainsFunctions(actions[i].args[0], Object.keys(astOperatorPrecedence))) {
                op1 = "(" + op1 + ")";
            }
            decompiledAction = op1 + "." + this.astToOpy(actions[i].args[1]) + " = " + this.astToOpy(actions[i].args[2]);
        } else if (actions[i].name === "__setPlayerVariableAtIndex__") {
            var op1 = this.astToOpy(actions[i].args[0]);
            if (this.astContainsFunctions(actions[i].args[0], Object.keys(astOperatorPrecedence))) {
                op1 = "(" + op1 + ")";
            }
            decompiledAction = op1 + "." + this.astToOpy(actions[i].args[1]) + "[" + this.astToOpy(actions[i].args[2]) + "] = " + this.astToOpy(actions[i].args[3]);
        } else if (actions[i].name === "async") {
            decompiledAction += "async(" + actions[i].args[0].name + ", " + this.astToOpy(actions[i].args[1]) + ")";
        } else if (actions[i].name === "__stopChasingGlobalVariable__") {
            decompiledAction += "stopChasing(" + actions[i].args[0].name + ")";
        } else if (actions[i].name === "__stopChasingPlayerVariable__") {
            decompiledAction += "stopChasing(" + this.astToOpy(actions[i].args[0]) + "." + actions[i].args[1].name + ")";
        } else if (actions[i].name === "__skip__") {
            if (actions[i].args[0].name === "__number__") {
                var labelName = "lbl_" + this.decompilationLabelNumber;
                this.decompilationLabelNumber++;
                decompiledAction += "goto " + labelName;
                this.decompilerGotos.push({
                    remainingActions: actions[i].args[0].args[0].numValue,
                    label: labelName,
                });
            } else {
                this.currentRuleHasVariableGoto = true;
                decompiledAction += "goto loc+" + this.astToOpy(actions[i].args[0]);
            }
        } else if (actions[i].name === "__skipIf__" && !this.currentRuleHasVariableGoto) {
            if (actions[i].args[1].name === "__number__") {
                decompiledAction += "if " + this.astToOpy(actions[i].args[0]) + ":\n" + tabLevel(tabLevelForThisAction + 1);
                var labelName = "lbl_" + this.decompilationLabelNumber;
                this.decompilationLabelNumber++;
                decompiledAction += "goto " + labelName;
                this.decompilerGotos.push({
                    remainingActions: actions[i].args[1].args[0].numValue,
                    label: labelName,
                });
            } else {
                this.currentRuleHasVariableGoto = true;
                decompiledAction += "__skipIf__(" + this.astToOpy(actions[i].args[0]) + ", " + this.astToOpy(actions[i].args[1]) + ")";
            }
        } else {
            if (!(actions[i].name in funcKw)) {
                this.error("Unregistered function '" + actions[i].name + "'");
            }

            if (["createEffect", "createBeam", "playEffect"].includes(actions[i].name) && constantValues[actions[i].args[1].type as string][actions[i].args[1].name].extension) {
                let extensionName = constantValues[actions[i].args[1].type as string][actions[i].args[1].name].extension as string;
                this.activatedExtensions.push(extensionName);
            }

            let actionArgs;

            if (actions[i].name.startsWith(".")) {
                var op1 = this.astToOpy(actions[i].args[0]);
                if (this.astContainsFunctions(actions[i].args[0], Object.keys(astOperatorPrecedence))) {
                    op1 = "(" + op1 + ")";
                }
                decompiledAction = op1 + actions[i].name;
                actionArgs = actions[i].args.slice(1);
            } else {
                decompiledAction = actions[i].name;
                actionArgs = actions[i].args;
            }

            if (funcKw[actions[i].name].args !== null) {
                decompiledAction += "(" + this.astArgsToOpy(actions[i].name, actionArgs) + ")";
            }
        }

        if (actions[i].isDisabled) {
            if (decompiledAction.includes("\n")) {
                decompiledAction = "#" + decompiledAction.split("\n").join("\n" + tabLevel(tabLevelForThisAction) + "#");
            } else {
                decompiledAction = "#" + decompiledAction;
            }
            if (this.currentRuleHasVariableGoto) {
                decompiledAction = "pass " + decompiledAction;
            }
        }

        if (resultComment) {
            //console.log(resultComment);
            result += resultComment.split("\n").filter(x => x.trim() !== "").map(x => tabLevel(tabLevelForThisAction) + x+"\n").join("");
        }
        result += tabLevel(tabLevelForThisAction) + decompiledAction + "\n";
    }

    //Add the remaining labels (if there was eg a skip(9999))
    for (var j = 0; j < this.decompilerGotos.length; j++) {
        result += tabLevel(this.nbTabs) + this.decompilerGotos[j].label + ":\n";
    }
    this.decompilerGotos = [];

    return result;
}

OverPyDecompiler.prototype.astToOpy = function(content: Ast): string {
    debug("Parsing AST of '" + content.name + "'");

    if (this.isTypeSuitable("StringLiteral", content.type, false)) {
        return escapeString(content.name, false);
    }

    if (content.type === "GlobalVariable" || content.type === "PlayerVariable" || content.type === "Subroutine") {
        return content.name;
    }
    if (content.name === "__number__") {
        return content.args[0].name;
    }

    if (["__globalVar__", "__hero__", "__gamemode__", "__map__", "__button__", "__color__"].includes(content.name)) {
        return this.astToOpy(content.args[0]);
    }
    if (content.name === "__playerVar__") {
        var result = this.astToOpy(content.args[0]);
        if (this.astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
            result = "(" + result + ")";
        }
        return result + "." + content.args[1].name;
    }

    if (typeof content.type !== "object" && content.type in constantValues) {
        if (["GamemodeLiteral", "TeamLiteral", "HeroLiteral", "MapLiteral", "ButtonLiteral", "ColorLiteral"].includes(content.type)) {
            return content.type.replace(/Literal$/, "") + "." + content.name;
        } else {
            return content.type + "." + content.name;
        }
    }

    //Operator functions
    const funcToOpMapping = {
        __add__: "+",
        __subtract__: "-",
        __multiply__: "*",
        __divide__: "/",
        __modulo__: "%",
        __raiseToPower__: "**",
        __and__: "and",
        __or__: "or",

        __equals__: "==",
        __inequals__: "!=",
        __lessThanOrEquals__: "<=",
        __greaterThanOrEquals__: ">=",
        __lessThan__: "<",
        __greaterThan__: ">",
    };
    if (content.name in funcToOpMapping) {
        var op1 = this.astToOpy(content.args[0]);
        if (
            this.astContainsFunctions(
                content.args[0],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] < astOperatorPrecedence[content.name] + (content.name === "__raiseToPower__" ? 1 : 0)),
            )
        ) {
            op1 = "(" + op1 + ")";
        }
        var op2 = this.astToOpy(content.args[1]);

        if (
            this.astContainsFunctions(
                content.args[1],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name] - (content.name === "__raiseToPower__" ? 1 : 0)),
            )
        ) {
            op2 = "(" + op2 + ")";
        }
        return op1 + " " + funcToOpMapping[content.name as keyof typeof funcToOpMapping] + " " + op2;
    }

    if (content.name === "__arrayContains__") {
        var op1 = this.astToOpy(content.args[0]);
        if (
            this.astContainsFunctions(
                content.args[0],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name]),
            )
        ) {
            op1 = "(" + op1 + ")";
        }
        var op2 = this.astToOpy(content.args[1]);

        if (
            this.astContainsFunctions(
                content.args[1],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] < astOperatorPrecedence[content.name]),
            )
        ) {
            op2 = "(" + op2 + ")";
        }
        return op2 + " in " + op1;
    }

    if (content.name === "__ifThenElse__") {
        var opThen = this.astToOpy(content.args[1]);
        if (
            this.astContainsFunctions(
                content.args[1],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name]),
            )
        ) {
            opThen = "(" + opThen + ")";
        }
        var opIf = this.astToOpy(content.args[0]);
        if (
            this.astContainsFunctions(
                content.args[0],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name]),
            )
        ) {
            opIf = "(" + opIf + ")";
        }
        return opThen + " if " + opIf + " else " + this.astToOpy(content.args[2]);
    }

    if (content.name === "__negate__" || content.name === "__not__") {
        var op1 = this.astToOpy(content.args[0]);
        if (
            this.astContainsFunctions(
                content.args[0],
                Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] < astOperatorPrecedence[content.name]),
            )
        ) {
            op1 = "(" + op1 + ")";
        }
        if (content.name === "__negate__") {
            return "-" + op1;
        } else {
            return "not " + op1;
        }
    }

    //Array functions
    if (content.name === "__emptyArray__") {
        return "[]";
    }
    if (content.name === "__array__") {
        return "[" + content.args.map((x) => this.astToOpy(x)).join(", ") + "]";
    }

    //Functions with an index or with a member value that doesn't have parentheses
    if (["__firstOf__", "__valueInArray__", "__xComponentOf__", "__yComponentOf__", "__zComponentOf__"].includes(content.name)) {
        var result = this.astToOpy(content.args[0]);
        if (this.astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
            result = "(" + result + ")";
        }
        if (content.name === "__firstOf__") {
            return result + "[0]";
        }
        if (content.name === "__valueInArray__") {
            return result + "[" + this.astToOpy(content.args[1]) + "]";
        }
        if (content.name === "__xComponentOf__") {
            return result + ".x";
        }
        if (content.name === "__yComponentOf__") {
            return result + ".y";
        }
        if (content.name === "__zComponentOf__") {
            return result + ".z";
        }
    }

    //Array functions that use current array element
    if (["__all__", "__any__", "__filteredArray__", "__sortedArray__", "__mappedArray__"].includes(content.name)) {
        var opyArray = this.astToOpy(content.args[0]);

        //Determine the current array element / current array index name
        this.currentArrayElementName = "";
        if (this.isTypeSuitable({ Array: "Player" }, content.args[0].type, false)) {
            this.currentArrayElementName = "player";
        } else {
            this.currentArrayElementName = "x";
        }

        if (!this.astContainsFunctions(content.args[1], ["__currentArrayElement__"])) {
            this.currentArrayElementName = "_";
        }

        this.currentArrayIndexName = "i";

        while (this.isVarName(this.currentArrayElementName, true)) {
            this.currentArrayElementName = this.currentArrayElementName + "_";
        }

        while (this.isVarName(this.currentArrayIndexName, true)) {
            this.currentArrayIndexName = this.currentArrayIndexName + "_";
        }

        var result = "";
        if (content.name === "__all__" || content.name === "__any__") {
            var funcName = content.name.replace(/_/g, "");
            if (content.args[1].name === "__currentArrayElement__") {
                //If there is just "current array element", no need to explicitly put it
                result += opyArray + "." + funcName + "()";
            } else {
                result += opyArray + "." + funcName + "(lambda " + this.currentArrayElementName;
                if (this.astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                    result += ", " + this.currentArrayIndexName;
                }
                result += ": " + this.astToOpy(content.args[1]) + ")";
            }
        } else if (content.name === "__mappedArray__") {
            
            result += opyArray + ".map(lambda " + this.currentArrayElementName;
            if (this.astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                result += ", " + this.currentArrayIndexName;
            }
            result += ": " + this.astToOpy(content.args[1]) + ")";
        } else if (content.name === "__filteredArray__") {
            result += opyArray + ".filter(lambda " + this.currentArrayElementName;
            if (this.astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                result += ", " + this.currentArrayIndexName;
            }
            result += ": " + this.astToOpy(content.args[1]) + ")";
        } else if (content.name === "__sortedArray__") {
            result += "sorted(" + opyArray;
            //If there is just "current array element", no need to explicitly put it
            if (content.args[1].name !== "__currentArrayElement__") {
                result += ", lambda " + this.currentArrayElementName;
                if (this.astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                    result += ", " + this.currentArrayIndexName;
                }
                result += ": " + this.astToOpy(content.args[1]);
            }
            result += ")";
        }

        this.currentArrayElementName = "";
        this.currentArrayIndexName = "";
        return result;
    }

    if (content.name === "__currentArrayElement__") {
        if (this.currentArrayElementName === "") {
            this.error("currentArrayElementName not set");
        }
        return this.currentArrayElementName;
    }

    if (content.name === "__currentArrayIndex__") {
        if (this.currentArrayIndexName === "") {
            this.error("currentArrayIndexName not set");
        }
        return this.currentArrayIndexName;
    }

    //Other functions
    if (content.name === "getPlayers" && content.args[0].name === "ALL") {
        return "getAllPlayers()";
    }
    if (content.name === "__customString__" || content.name === "__localizedString__") {
        var formatArgs = [];
        //Take all arguments before the highest field
        var foundField = false;
        for (var i = 2; i >= 0; i--) {
            if (foundField || content.args[0].name.includes("{" + i + "}")) {
                foundField = true;
                formatArgs.unshift(content.args[i + 1]);
            }
        }
        var result = "";
        if (content.name === "__localizedString__") {
            result += "l";
            result += escapeString(this.topy(content.args[0].name, stringKw), false);
        } else {
            result += escapeString(content.args[0].name, false);
        }
        if (formatArgs.length > 0) {
            result += ".format(" + formatArgs.map((x) => (x === undefined ? "null" : this.astToOpy(x))).join(", ") + ")";
        }
        return result;
    }
    if (content.name === "__round__") {
        if (content.args[1].name === "__roundUp__") {
            return "ceil(" + this.astToOpy(content.args[0]) + ")";
        }
        if (content.args[1].name === "__roundDown__") {
            return "floor(" + this.astToOpy(content.args[0]) + ")";
        }
        if (content.args[1].name === "__roundToNearest__") {
            return "round(" + this.astToOpy(content.args[0]) + ")";
        }
    }

    if (!(content.name in funcKw)) {
        this.error("Unregistered function '" + content.name + "'");
    }
    if (funcKw[content.name].args === null) {
        return content.name;
    } else {
        let astArgs;
        let result = "";
        if (content.name.startsWith(".")) {
            result = this.astToOpy(content.args[0]);
            if (this.astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
                result = "(" + result + ")";
            }
            astArgs = content.args.slice(1);
        } else {
            astArgs = content.args;
        }
        result += content.name + "(" + this.astArgsToOpy(content.name, astArgs) + ")";
        return result;
    }
}
