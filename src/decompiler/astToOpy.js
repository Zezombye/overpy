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

    var result = `/*
The decompiler is functional, but not finished.
It does not support operator precedence (which is why you will see parentheses everywhere).
It also does not support gotos, this mean multi-line actions such as "Abort If" or "Loop If" are not properly decompiled as well.
Some special functions may also not be properly decompiled.

However, decompilation should yield a compilable gamemode. Decompiling then compiling a gamemode should result in the same functional gamemode.
*/

`;

    for (var rule of rules) {
        var decompiledRule = "";
        var decompiledRuleAttributes = "";
        nbTabs = 1;

        if (rule.ruleAttributes.event === "__subroutine__") {
            decompiledRule += "def "+rule.ruleAttributes.subroutineName+"():\n";
            decompiledRuleAttributes += tabLevel(nbTabs)+"@Name "+escapeString(rule.ruleAttributes.name)+"\n";
        } else {
                
            decompiledRule += "rule "+escapeString(rule.ruleAttributes.name)+":\n";
            
            //Decompile the rule attributes
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
        }
        if (rule.isDisabled) {
            decompiledRuleAttributes += tabLevel(nbTabs)+"@Disabled\n";
        }
        if (decompiledRuleAttributes) {
            decompiledRuleAttributes += tabLevel(nbTabs)+"\n";
        }
        decompiledRule += decompiledRuleAttributes;

        //Decompile the rule actions
        decompiledRule += astActionsToOpy(rule.children);

        decompiledRule += "\n\n";
        result += decompiledRule;
    }
    return result;

}

function astActionsToOpy(actions) {


    var result = "";
    for (var i = 0; i < actions.length; i++) {

        //console.log(actions[i]);

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
                console.log("No end found for "+actions[i].name);

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
        
        //Operator functions
        const funcToOpMapping = {
            "__add__": "+=",
            "__subtract__": "-=",
            "__multiply__": "*=",
            "__divide__": "/=",
            "__modulo__": "%=",
            "__raiseToPower__": "**=",
        }

        var tabLevelForThisAction = nbTabs;

        if (["__if__", "__elif__", "__else__", "__while__", "__for__"].includes(actions[i].name)) {
            var nameToKeywordMapping = {
                "__if__": "if",
                "__elif__": "elif",
                "__else__": "else",
                "__while__": "while",
                "__for__": "for",
            }
            if (actions[i].name === "__elif__" || actions[i].name === "__else__") {
                if (nbTabs > 1) {
                    nbTabs--;
                }
            }
            tabLevelForThisAction = nbTabs;
            decompiledAction = nameToKeywordMapping[actions[i].name];
            if (actions[i].args.length > 0) {
                decompiledAction += " "+astToOpy(actions[i].args[0]);
            }
            if (actions[i].name === "__for__") {
                decompiledAction += " in range(";
                var rangeArgs = [];
                if (!(actions[i].args[1].name === "__number__" && actions[i].args[1].args[0].name === "0" && actions[i].args[3].name === "__number__" && actions[i].args[3].args[0].name === "1")) {
                    rangeArgs.push(astToOpy(actions[i].args[1]));
                }
                rangeArgs.push(astToOpy(actions[i].args[2]));
                if (!(actions[i].args[3].name === "__number__" && actions[i].args[3].args[0].name === "1")) {
                    rangeArgs.push(astToOpy(actions[i].args[3]));
                }
                decompiledAction += rangeArgs.join(", ")+")";
            }
            decompiledAction += ":";
            nbTabs++;

        } else if (actions[i].name === "__end__" && !actions[i].isDisabled) {
            if (nbTabs > 1) {
                nbTabs--;
            }
            continue;

        } else if (actions[i].name === "__assignTo__") {
            decompiledAction = astToOpy(actions[i].args[0])+" = "+astToOpy(actions[i].args[1]);
            
        } else if (actions[i].name === "__setGlobalVariable__") {
            decompiledAction = astToOpy(actions[i].args[0])+" = "+astToOpy(actions[i].args[1]);

        } else if (actions[i].name === "__setPlayerVariable__") {
            decompiledAction = astToOpy(actions[i].args[0])+"."+astToOpy(actions[i].args[1])+" = "+astToOpy(actions[i].args[2]);

        } else if (actions[i].name === "__modifyVar__") {
            if (actions[i].args[1].name in funcToOpMapping) {
                decompiledAction += astToOpy(actions[i].args[0])+" "+funcToOpMapping[actions[i].args[1].name]+" "+astToOpy(actions[i].args[2]);
            } else if (actions[i].args[1].name === "__min__") {
                decompiledAction += astToOpy(actions[i].args[0])+" min= "+astToOpy(actions[i].args[2]);
            } else if (actions[i].args[1].name === "__max__") {
                decompiledAction += astToOpy(actions[i].args[0])+" max= "+astToOpy(actions[i].args[2]);
            } else if (actions[i].args[1].name === "__appendToArray__") {
                decompiledAction += astToOpy(actions[i].args[0])+".append("+astToOpy(actions[i].args[2])+")";
            } else if (actions[i].args[1].name === "__removeFromArrayByValue__") {
                decompiledAction += astToOpy(actions[i].args[0])+".remove("+astToOpy(actions[i].args[2])+")";
            } else if (actions[i].args[1].name === "__removeFromArrayByIndex__") {
                decompiledAction += "del "+astToOpy(actions[i].args[0])+"["+astToOpy(actions[i].args[2])+"]";
            }
        } else if (actions[i].name === "__hudText__") {
            if (actions[i].args[2].name === "null" && actions[i].args[3].name === "null") {
                decompiledAction += "hudHeader("+[0,1,4,5,6,9,10].map(x => astToOpy(actions[i].args[x])).join(", ")+")";
            } else if (actions[i].args[1].name === "null" && actions[i].args[3].name === "null") {
                decompiledAction += "hudSubheader("+[0,2,4,5,7,9,10].map(x => astToOpy(actions[i].args[x])).join(", ")+")";
            } else if (actions[i].args[1].name === "null" && actions[i].args[2].name === "null") {
                decompiledAction += "hudSubtext("+[0,3,4,5,8,9,10].map(x => astToOpy(actions[i].args[x])).join(", ")+")";
            } else {
                decompiledAction += "hudHeader("+actions[i].args.map(x => astToOpy(x)).join(", ")+")";
            }
        } else if (actions[i].name === "__callSubroutine__") {
            decompiledAction += actions[i].args[0].name+"()";

        } else if (actions[i].name === "__startRule__") {
            decompiledAction += "async("+actions[i].args[0].name+", "+astToOpy(actions[i].args[1])+")";

        } else if (actions[i].name === "__wait__") {
            decompiledAction += "wait(";
            if (!(actions[i].args[0].name === "__number__" && actions[i].args[0].args[0].name === "0.016" && actions[i].args[1].name === "IGNORE_CONDITION")) {
                decompiledAction += astToOpy(actions[i].args[0]);
            }
            if (actions[i].args[1].name !== "IGNORE_CONDITION") {
                decompiledAction += ", "+astToOpy(actions[i].args[1]);
            }
            decompiledAction += ")";

        } else if (actions[i].name === "__chaseGlobalVariableAtRate__") {
            decompiledAction += "chase("+actions[i].args[0].name+", "+astToOpy(actions[i].args[1])+", rate="+astToOpy(actions[i].args[2])+", "+astToOpy(actions[i].args[3])+")";

        } else if (actions[i].name === "__chaseGlobalVariableOverTime__") {
            decompiledAction += "chase("+actions[i].args[0].name+", "+astToOpy(actions[i].args[1])+", duration="+astToOpy(actions[i].args[2])+", "+astToOpy(actions[i].args[3])+")";

        } else if (actions[i].name === "__chasePlayerVariableAtRate__") {
            decompiledAction += "chase("+astToOpy(actions[i].args[0])+"."+actions[i].args[1].name+", "+astToOpy(actions[i].args[2])+", rate="+astToOpy(actions[i].args[3])+", "+astToOpy(actions[i].args[4])+")";

        } else if (actions[i].name === "__chasePlayerVariableOverTime__") {
            decompiledAction += "chase("+astToOpy(actions[i].args[0])+"."+actions[i].args[1].name+", "+astToOpy(actions[i].args[2])+", duration="+astToOpy(actions[i].args[3])+", "+astToOpy(actions[i].args[4])+")";

        } else if (actions[i].name === "__stopChasingGlobalVariable__") {
            decompiledAction += "stopChasingVariable("+actions[i].args[0].name+")";

        } else if (actions[i].name === "__stopChasingPlayerVariable__") {
            decompiledAction += "stopChasingVariable("+astToOpy(actions[i].args[0])+", "+actions[i].args[1].name+")";

        } else {
            if (!(actions[i].name in funcKw)) {
                error("Unregistered function '"+actions[i].name+"'");
            }
            
            if (actions[i].name.startsWith("_&")) {
                decompiledAction = astToOpy(actions[i].args[0])+"."+actions[i].name.substring(2)+"("+actions[i].args.slice(1).map(x => astToOpy(x)).join(", ")+")";
            } else {

                decompiledAction = actions[i].name;
                if (funcKw[actions[i].name].args !== null) {
                    decompiledAction += "("+actions[i].args.map(x => astToOpy(x)).join(", ")+")";
                }
            }
        }

        if (actions[i].isDisabled) {
            if (decompiledAction.includes("\n")) {
                decompiledAction = "/*"+decompiledAction+"*/";
            } else {
                decompiledAction = "#"+decompiledAction;
            }
        }
        result += tabLevel(tabLevelForThisAction) + decompiledAction + "\n";
    }

    return result;

}

function astToOpy(content) {

    //console.log(content);

    if (content.type === "StringLiteral") {
        return escapeString(content.name);
    }

    if (content.type === "GlobalVariable" || content.type === "PlayerVariable" || content.type === "Subroutine") {
        return content.name;
    }
    if (content.name === "__number__") {
        return content.args[0].name;
    }

    if ([
        "__globalVar__",
        "__hero__", "__gamemode__", "__map__", "__button__",
    ].includes(content.name)) {
        return astToOpy(content.args[0]);
    }
    if (content.name === "__playerVar__") {
        return astToOpy(content.args[0])+"."+content.args[1].name;
    }
    
    if (content.type in constantValues) {
        if (["GamemodeLiteral", "TeamLiteral", "HeroLiteral", "MapLiteral", "ButtonLiteral"].includes(content.type)) {
            return content.type.replace(/Literal$/, "")+"."+content.name;
        } else if (["__ChaseTimeReeval__", "__ChaseRateReeval__"].includes(content.type)) {
            return "ChaseReeval."+content.name;
        } else {
            return content.type+"."+content.name;
        }
    }

    //Operator functions
    const funcToOpMapping = {
        "__add__": "+",
        "__subtract__": "-",
        "__multiply__": "*",
        "__divide__": "/",
        "__modulo__": "%",
        "__raiseToPower__": "**",
        "__and__": "and",
        "__or__": "or",
            
        "__equals__": "==",
        "__inequals__": "!=",
        "__lessThanOrEquals__": "<=",
        "__greaterThanOrEquals__": ">=",
        "__lessThan__": "<",
        "__greaterThan__": ">",
    }
    if (content.name === "__compare__") {
        return "("+astToOpy(content.args[0])+") "+content.args[1].name+" ("+astToOpy(content.args[2])+")";
    }
    if (content.name in funcToOpMapping) {
        return "("+astToOpy(content.args[0])+") "+funcToOpMapping[content.name]+" ("+astToOpy(content.args[1])+")";
    }
    if (content.name === "__ifThenElse__") {
        return "("+astToOpy(content.args[1])+") if ("+astToOpy(content.args[0])+") else ("+astToOpy(content.args[2])+")";
    }
    if (content.name === "__negate__") {
        return "-("+astToOpy(content.args[0])+")";
    }
    if (content.name === "__not__") {
        return "not ("+astToOpy(content.args[0])+")";
    }

    //Array functions
    if (content.name === "__emptyArray__") {
        return "[]";
    }
    if (content.name === "__array__") {
        return "["+content.args.map(x => astToOpy(x)).join(", ")+"]";
    }
    var internalFuncToFuncMap = {
        "__concat__": "concat",
        "__removeFromArray__": "exclude",
        "__indexOfArrayValue__": "index",
    };
    if (content.name in internalFuncToFuncMap) {
        return astToOpy(content.args[0])+"."+internalFuncToFuncMap[content.name]+"("+astToOpy(content.args[1])+")";
    }
    if (content.name === "__arraySlice__") {
        return astToOpy(content.args[0])+".slice("+astToOpy(content.args[1])+", "+astToOpy(content.args[2])+")";
    }
    if (content.name === "__lastOf__") {
        return astToOpy(content.args[0])+".last()";
    }
    if (content.name === "__valueInArray__") {
        return astToOpy(content.args[0])+"["+astToOpy(content.args[1])+"]";
    }

    //Other functions
    if (content.name === "getPlayers" && content.args[0].name === "ALL") {
        return "getAllPlayers()";
    }
    if (content.name === "__customString__" || content.name === "__localizedString__") {
        var formatArgs = [];
        for (var i = 0; i < 3; i++) {
            if (content.args[0].name.includes("{"+i+"}")) {
                formatArgs.push(content.args[i+1]);
            }
        }
        var result = "";
        if (content.name === "__localizedString__") {
            result += "l";
        }
        result += escapeString(content.args[0].name);
        if (formatArgs.length > 0) {
            result += ".format("+formatArgs.map(x => astToOpy(x))+")";
        }
        return result;
    }

    if (!(content.name in funcKw)) {
        error("Unregistered function '"+content.name+"'");
    }
    if (funcKw[content.name].args === null) {
        return content.name;
    } else {
        if (content.name.startsWith("_&")) {
            return astToOpy(content.args[0])+"."+content.name.substring(2)+"("+content.args.slice(1).map(x => astToOpy(x)).join(", ")+")";
        }
        return content.name+"("+content.args.map(x => astToOpy(x)).join(", ")+")";
    }
}