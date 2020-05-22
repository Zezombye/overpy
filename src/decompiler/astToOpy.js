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

function astRulesToOpy(rules) {

    var result = "";

    for (var rule of rules) {
        var decompiledRule = "";

        decompiledRule += "rule "+escapeString(rule.ruleAttributes.name)+":\n";
        nbTabs = 1;
        
        //Decompile the rule attributes
        var decompiledRuleAttributes = "";

        if (rule.ruleAttributes.event !== "global") {
            decompiledRuleAttributes += tabLevel(nbTabs)+"@Event "+rule.ruleAttributes.event+"\n";
        }
        if (rule.ruleAttributes.eventTeam) {
            decompiledRuleAttributes += tabLevel(nbTabs)+"@Team "+rule.ruleAttributes.eventTeam+"\n";
        }
        if (rule.ruleAttributes.eventPlayer) {
            if (rule.ruleAttributes.eventPlayer in eventSlotKw) {
                decompiledRuleAttributes += tabLevel(nbTabs)+"@Slot "+rule.ruleAttributes.eventPlayer+"\n";
            } else {
                decompiledRuleAttributes += tabLevel(nbTabs)+"@Hero "+rule.ruleAttributes.eventPlayer+"\n";
            }
        }
        if (rule.ruleAttributes.conditions) {
            for (var condition of rule.ruleAttributes.conditions) {
                if (condition.comment) {
                    decompiledRuleAttributes += tabLevel(nbTabs)+"#"+condition.comment+"\n";
                }
                decompiledRuleAttributes += tabLevel(nbTabs);
                if (condition.isDisabled) {
                    decompiledRuleAttributes += "#";
                }
                decompiledRuleAttributes += "@Condition "+astToOpy(condition)+"\n";
            }
        }
        if (decompiledRuleAttributes) {
            decompiledRuleAttributes += tabLevel(nbTabs)+"\n";
        }
        decompiledRule += decompiledRuleAttributes;

        //Decompile the rule actions
        decompiledRule += astActionsToOpy(rule.children);

        if (rule.isDisabled) {
            decompiledRule = "/*" + decompiledRule + "*/";
        }
        decompiledRule += "\n\n";
        result += decompiledRule;
    }
    return result;

}

function astActionsToOpy(actions) {

    var result = "";
    for (var i = 0; i < actions.length; i++) {
        if (actions[i].comment) {
            result += tabLevel(nbTabs)+"#"+actions[i].comment+"\n";
        }
        var decompiledAction = "";
        if (["__elif__", "__else__", "__while__", "__for__"].includes(actions[i].name)) {
            //Check if there is an "end" (or elif/else) and if we must modify the action
            var isEndFound = false;
            var depth = 0;
            for (var j = i+1; j < actions.length; j++) {
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

            if (!isEndFound) {
                result += tabLevel(nbTabs)+"#Note: this '"+actions[i].name+"' had no 'end' action.\n";

                if (actions[i].name === "__elif__" || actions[i].name === "__else__") {
                    actions[i] = new Ast("__if__", [getAstForFalse()]);
                } else if (actions[i].name === "__while__") {
                    actions[i].name = "__if__";
                } else if (actions[i].name === "__for__") {

                    //args[0] = start, args[1] = end, args[2] = step
                    //step > 0 && start <= end || step <= 0 && start >= end
                    actions[i] = new Ast("__if__", [
                        new Ast("__or__", [
                            new Ast("__and__", [
                                new Ast("__greaterThan__", [
                                    actions[i].args[2],
                                    getAstFor0(),
                                ]),
                                new Ast("__lessThanOrEquals__", [
                                    actions[i].args[0],
                                    actions[i].args[1],
                                ])
                            ]),
                            new Ast("__and__", [
                                new Ast("__lessThanOrEquals__", [
                                    actions[i].args[2],
                                    getAstFor0(),
                                ]),
                                new Ast("__greaterThanOrEquals__", [
                                    actions[i].args[0],
                                    actions[i].args[1],
                                ])
                            ]),
                        ])
                    ])

                } else {
                    error("Unexpected name '"+actions[i].name+"'");
                }
            }
        }

        if (["__if__", "__elif__", "__else__", "__while__", "__for__"].includes(actions[i].name)) {
            var nameToKeywordMapping = {
                "__if__": "if",
                "__elif__": "elif",
                "__else__": "else",
                "__while__": "while",
                "__for__": "for",
            }
            decompiledAction = tabLevel(nbTabs)+nameToKeywordMapping[actions[i].name]+" "+astToOpy(actions[i].args[0])+":\n";
            nbTabs++;

        } else if (actions[i].name === "__end__") {
            nbTabs--;
            if (nbTabs < 1) {
                nbTabs = 1;
            }

        } else {
            decompiledAction = tabLevel(nbTabs)+actions[i].name+"("+actions[i].args.map(x => astToOpy(x)).join(", ")+")\n";
        }
        result += decompiledAction;
    }

    return result;

}

function astToOpy(content) {

    if (isNumber(content.name)) {
        return content.name;
    }

    if (content.type in constantValues) {
        return content.type+"."+content.name;
    }

    if (content.type === "StringLiteral") {
        return escapeString(content.name);
    }

    if (!(content.name in funcKw)) {
        error("Unregistered function '"+content.name+"'");
    }
    if (funcKw[content.name].args === null) {
        return content.name;
    } else {
        return content.name+"("+content.args.map(x => astToOpy(x)).join(", ")+")";
    }
}