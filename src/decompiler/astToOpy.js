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
        var decompiledRuleAttributes = "";
        nbTabs = 1;
        decompilationLabelNumber = 0;
        currentRuleHasVariableGoto = false;

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
                        decompiledRuleAttributes += condition.comment.split("\n").map(x => tabLevel(nbTabs)+"#"+x+"\n").join("");
                    }
                    decompiledRuleAttributes += tabLevel(nbTabs);
                    if (condition.isDisabled) {
                        decompiledRuleAttributes += "#";
                    }
                    decompiledRuleAttributes += "@Condition "+astToOpy(condition)+"\n";
                }
            }
        }
        /*if (rule.isDisabled) {
            decompiledRuleAttributes += tabLevel(nbTabs)+"@Disabled\n";
        }*/
        if (decompiledRuleAttributes) {
            decompiledRuleAttributes += tabLevel(nbTabs)+"\n";
        }
        decompiledRule += decompiledRuleAttributes;

        //Decompile the rule actions
        decompiledRule += astActionsToOpy(rule.children);

        if (rule.isDisabled) {
            decompiledRule = "/*\n" + decompiledRule + "*/";
        }
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
            result += actions[i].comment.split("\n").map(x => tabLevel(nbTabs)+"#"+x+"\n").join("");
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
                if (actions[j].name === "__end__" && !actions[j].isDisabled) {
                    if (depth === 0) {
                        isEndFound = true;
                        break;
                    } else {
                        depth--;
                    }
                }
            }

            //Properly checking for a lone elif/else would be difficult as this AST has no concept of "children".
            //Moreover, a lone elif/else is very probably unintended, as it makes the actions inside it not execute.
            if (!isEndFound && actions[i].name !== "__elif__" && actions[i].name !== "__else__") {
                result += tabLevel(nbTabs)+"#Note: this '"+actions[i].name+"' had no 'end' action.\n";
                console.log("No end found for "+actions[i].name);

                if (actions[i].name === "__while__") {
                    actions[i].name = "__if__";
                } else if (actions[i].name === "__for__") {

                    //args[0] = start, args[1] = end, args[2] = step
                    //step > 0 && start < end || step <= 0 && start > end
                    actions[i] = new Ast("__if__", [
                        new Ast("__or__", [
                            new Ast("__and__", [
                                new Ast("__greaterThan__", [
                                    actions[i].args[2],
                                    getAstFor0(),
                                ]),
                                new Ast("__lessThan__", [
                                    actions[i].args[0],
                                    actions[i].args[1],
                                ])
                            ]),
                            new Ast("__and__", [
                                new Ast("__lessThanOrEquals__", [
                                    actions[i].args[2],
                                    getAstFor0(),
                                ]),
                                new Ast("__greaterThan__", [
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

        //Check for labels
        for (var j = 0; j < decompilerGotos.length; j++) {
            if (decompilerGotos[j].remainingActions <= 0) {
                result += tabLevel(nbTabs)+decompilerGotos[j].label+":\n";
                decompilerGotos.splice(j, 1);
                j--;

            } else {
                decompilerGotos[j].remainingActions--;
            }
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
        } else if (actions[i].name === "__abortIf__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if "+astToOpy(actions[i].args[0])+":\n"+tabLevel(tabLevelForThisAction+1)+"return";
            
        } else if (actions[i].name === "__abortIfConditionIsFalse__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if not RULE_CONDITION:\n"+tabLevel(tabLevelForThisAction+1)+"return";
        } else if (actions[i].name === "__abortIfConditionIsTrue__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if RULE_CONDITION:\n"+tabLevel(tabLevelForThisAction+1)+"return";
        } else if (actions[i].name === "__assignTo__") {
            decompiledAction = astToOpy(actions[i].args[0])+" = "+astToOpy(actions[i].args[1]);
            
        } else if (actions[i].name === "__callSubroutine__") {
            decompiledAction += actions[i].args[0].name+"()";

        } else if (actions[i].name === "__chaseGlobalVariableAtRate__") {
            decompiledAction += "chase("+actions[i].args[0].name+", "+astToOpy(actions[i].args[1])+", rate="+astToOpy(actions[i].args[2])+", "+astToOpy(actions[i].args[3])+")";

        } else if (actions[i].name === "__chaseGlobalVariableOverTime__") {
            decompiledAction += "chase("+actions[i].args[0].name+", "+astToOpy(actions[i].args[1])+", duration="+astToOpy(actions[i].args[2])+", "+astToOpy(actions[i].args[3])+")";

        } else if (actions[i].name === "__chasePlayerVariableAtRate__") {
            decompiledAction += "chase("+astToOpy(actions[i].args[0])+"."+actions[i].args[1].name+", "+astToOpy(actions[i].args[2])+", rate="+astToOpy(actions[i].args[3])+", "+astToOpy(actions[i].args[4])+")";

        } else if (actions[i].name === "__chasePlayerVariableOverTime__") {
            decompiledAction += "chase("+astToOpy(actions[i].args[0])+"."+actions[i].args[1].name+", "+astToOpy(actions[i].args[2])+", duration="+astToOpy(actions[i].args[3])+", "+astToOpy(actions[i].args[4])+")";

        } else if (actions[i].name === "__end__" && !actions[i].isDisabled) {
            if (nbTabs > 1) {
                nbTabs--;
            }
            continue;

        } else if (actions[i].name === "__hudText__") {
            if (actions[i].args[2].name === "null" && actions[i].args[3].name === "null") {
                decompiledAction += "hudHeader("+[0,1,4,5,6,9,10].map(x => astToOpy(actions[i].args[x])).join(", ")+")";
            } else if (actions[i].args[1].name === "null" && actions[i].args[3].name === "null") {
                decompiledAction += "hudSubheader("+[0,2,4,5,7,9,10].map(x => astToOpy(actions[i].args[x])).join(", ")+")";
            } else if (actions[i].args[1].name === "null" && actions[i].args[2].name === "null") {
                decompiledAction += "hudSubtext("+[0,3,4,5,8,9,10].map(x => astToOpy(actions[i].args[x])).join(", ")+")";
            } else {
                decompiledAction += "hudText("+actions[i].args.map(x => astToOpy(x)).join(", ")+")";
            }
        } else if (actions[i].name === "__loop__") {
            decompiledAction += "goto RULE_START";
        } else if (actions[i].name === "__loopIf__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if "+astToOpy(actions[i].args[0])+":\n"+tabLevel(tabLevelForThisAction+1)+"goto RULE_START";
        } else if (actions[i].name === "__loopIfConditionIsFalse__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if not RULE_CONDITION:\n"+tabLevel(tabLevelForThisAction+1)+"goto RULE_START";
        } else if (actions[i].name === "__loopIfConditionIsTrue__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if RULE_CONDITION:\n"+tabLevel(tabLevelForThisAction+1)+"goto RULE_START";
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
        } else if (actions[i].name === "__setGlobalVariable__") {
            decompiledAction = astToOpy(actions[i].args[0])+" = "+astToOpy(actions[i].args[1]);

        } else if (actions[i].name === "__setGlobalVariableAtIndex__") {
            decompiledAction = astToOpy(actions[i].args[0])+"["+astToOpy(actions[i].args[1])+"] = "+astToOpy(actions[i].args[2]);

        } else if (actions[i].name === "__setPlayerVariable__") {
            var op1 = astToOpy(actions[i].args[0]);
            if (astContainsFunctions(actions[i].args[0], Object.keys(astOperatorPrecedence))) {
                op1 = "("+op1+")";
            }
            decompiledAction = op1+"."+astToOpy(actions[i].args[1])+" = "+astToOpy(actions[i].args[2]);

        } else if (actions[i].name === "__setPlayerVariableAtIndex__") {
            var op1 = astToOpy(actions[i].args[0]);
            if (astContainsFunctions(actions[i].args[0], Object.keys(astOperatorPrecedence))) {
                op1 = "("+op1+")";
            }
            decompiledAction = op1+"."+astToOpy(actions[i].args[1])+"["+astToOpy(actions[i].args[2])+"] = "+astToOpy(actions[i].args[3]);

        } else if (actions[i].name === "__startRule__") {
            decompiledAction += "async("+actions[i].args[0].name+", "+astToOpy(actions[i].args[1])+")";

        } else if (actions[i].name === "__stopChasingGlobalVariable__") {
            decompiledAction += "stopChasingVariable("+actions[i].args[0].name+")";

        } else if (actions[i].name === "__stopChasingPlayerVariable__") {
            decompiledAction += "stopChasingVariable("+astToOpy(actions[i].args[0])+"."+actions[i].args[1].name+")";

        } else if (actions[i].name === "__skip__") {
            if (actions[i].args[0].name === "__number__") {
                var labelName = "lbl_"+decompilationLabelNumber;
                decompilationLabelNumber++;
                decompiledAction += "goto "+labelName;
                decompilerGotos.push({
                    remainingActions: actions[i].args[0].args[0].numValue,
                    label: labelName,
                });
            } else {
                currentRuleHasVariableGoto = true;
                decompiledAction += "goto loc+"+astToOpy(actions[i].args[0]);
            }
        } else if (actions[i].name === "__skipIf__" && !currentRuleHasVariableGoto) {
            decompiledAction += "if "+astToOpy(actions[i].args[0])+":\n"+tabLevel(tabLevelForThisAction+1);
            if (actions[i].args[1].name === "__number__") {
                var labelName = "lbl_"+decompilationLabelNumber;
                decompilationLabelNumber++;
                decompiledAction += "goto "+labelName;
                decompilerGotos.push({
                    remainingActions: actions[i].args[1].args[0].numValue,
                    label: labelName,
                });
            } else {
                currentRuleHasVariableGoto = true;
                decompiledAction += "goto loc+"+astToOpy(actions[i].args[1]);
            }

        } else if (actions[i].name === "__wait__") {
            decompiledAction += "wait(";
            if (!(actions[i].args[0].name === "__number__" && actions[i].args[0].args[0].name === "0.016" && actions[i].args[1].name === "IGNORE_CONDITION")) {
                decompiledAction += astToOpy(actions[i].args[0]);
            }
            if (actions[i].args[1].name !== "IGNORE_CONDITION") {
                decompiledAction += ", "+astToOpy(actions[i].args[1]);
            }
            decompiledAction += ")";

        } else {
            if (!(actions[i].name in funcKw)) {
                error("Unregistered function '"+actions[i].name+"'");
            }
            
            if (actions[i].name.startsWith("_&")) {
                var op1 = astToOpy(actions[i].args[0]);
                if (astContainsFunctions(actions[i].args[0], Object.keys(astOperatorPrecedence))) {
                    op1 = "("+op1+")";
                }
                decompiledAction = op1+"."+actions[i].name.substring(2)+"("+actions[i].args.slice(1).map(x => astToOpy(x)).join(", ")+")";
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
            if (currentRuleHasVariableGoto) {
                decompiledAction = "pass "+decompiledAction;
            }
        }


        result += tabLevel(tabLevelForThisAction) + decompiledAction + "\n";
    }

    //Add the remaining labels (if there was eg a skip(9999))
    for (var j = 0; j < decompilerGotos.length; j++) {
        result += tabLevel(nbTabs)+decompilerGotos[j].label+":\n";
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
        var result = astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
            result = "("+result+")";
        }
        return result+"."+content.args[1].name;
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
    if (content.name in funcToOpMapping) {
        var op1 = astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] < astOperatorPrecedence[content.name] + (content.name === "__raiseToPower__" ? 1 : 0)))) {
            op1 = "("+op1+")";
        }
        var op2 = astToOpy(content.args[1]);
        
        if (astContainsFunctions(content.args[1], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name] - (content.name === "__raiseToPower__" ? 1 : 0)))) {
            op2 = "("+op2+")";
        }
        return op1+" "+funcToOpMapping[content.name]+" "+op2;
    }

    if (content.name === "__arrayContains__") {
        var op1 = astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name]))) {
            op1 = "("+op1+")";
        }
        var op2 = astToOpy(content.args[1]);
        
        if (astContainsFunctions(content.args[1], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] < astOperatorPrecedence[content.name]))) {
            op2 = "("+op2+")";
        }
        return op2+" in "+op1;
    }

    if (content.name === "__ifThenElse__") {
        var opThen = astToOpy(content.args[1]);
        if (astContainsFunctions(content.args[1], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name]))) {
            opThen = "("+opThen+")";
        }
        var opIf = astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] <= astOperatorPrecedence[content.name]))) {
            opIf = "("+opIf+")";
        }
        return opThen+" if "+opIf+" else "+astToOpy(content.args[2]);
    }

    if (content.name === "__negate__" || content.name === "__not__") {
        var op1 =  astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence).filter(x => astOperatorPrecedence[x] < astOperatorPrecedence[content.name]))) {
            op1 = "("+op1+")";
        }
        if (content.name === "__negate__") {
            return "-"+op1;
        } else {
            return "not "+op1;
        }
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
        
        var result = astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
            result = "("+result+")";
        }
        return result+"."+internalFuncToFuncMap[content.name]+"("+astToOpy(content.args[1])+")";
    }

    //Functions with a dot/index
    if ([
        "__arraySlice__",
        "__firstOf__",
        "__lastOf__",
        "__valueInArray__",
        "__xComponentOf__",
        "__yComponentOf__",
        "__zComponentOf__",
    ].includes(content.name)) {

        var result = astToOpy(content.args[0]);
        if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
            result = "("+result+")";
        }
        if (content.name === "__arraySlice__") {
            return result+".slice("+astToOpy(content.args[1])+", "+astToOpy(content.args[2])+")";
        }
        if (content.name === "__firstOf__") {
            return result+"[0]";
        }
        if (content.name === "__lastOf__") {
            return result+".last()";
        }
        if (content.name === "__valueInArray__") {        
            return result+"["+astToOpy(content.args[1])+"]";
        }
        if (content.name === "__xComponentOf__") {
            return result+".x";
        }
        if (content.name === "__yComponentOf__") {
            return result+".y";
        }
        if (content.name === "__zComponentOf__") {
            return result+".z";
        }
    }

    //Array functions that use current array element
    if (["__all__", "__any__", "__filteredArray__", "__sortedArray__", "__mappedArray__"].includes(content.name)) {

        var opyArray = astToOpy(content.args[0]);

        //Determine the current array element / current array index name
        currentArrayElementName = "";
        if (isTypeSuitable({"Array": "Player"}, content.args[0].type)) {
            currentArrayElementName = "player";
        } else {
            currentArrayElementName = "i";
        }

        if (astContainsFunctions(content.args[1], ["__currentArrayIndex__"]) && !astContainsFunctions(content.args[1], ["__currentArrayElement__"])
            && !(content.name === "__mappedArray__" && content.args[0].name === "__filteredArray__" && astContainsFunctions(content.args[0].args[1], ["__currentArrayElement__"]))) {
            currentArrayElementName = "_";
        }

        if (currentArrayElementName === "i") {
            currentArrayIndexName = "idx";
        } else {
            currentArrayIndexName = "i";
        }


        while (isVarName(currentArrayElementName, true)) {
            currentArrayElementName += "_";
        }
        
        while (isVarName(currentArrayIndexName, true)) {
            currentArrayIndexName += "_";
        }



        var result = "";
        if (content.name === "__all__" || content.name === "__any__") {
            result += content.name.replace(/_/g, "")+"(";
            if (content.args[1].name === "__currentArrayElement__") {
                //If there is just "current array element", no need to explicitly put it
                result += opyArray;
            } else {
                result += "["+astToOpy(content.args[1])+" for "+currentArrayElementName;
                if (astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                    result += ", "+currentArrayIndexName;
                }
                result += " in ";
                var opIn = opyArray;
                if (astContainsFunctions(content.args[0], ["__ifThenElse__"])) {
                    opIn = "("+opIn+")";
                }
                result += opIn+"]";
            }
            result += ")";
        } else if (content.name === "__mappedArray__") {
            result += "["+astToOpy(content.args[1])+" for "+currentArrayElementName;
            if (astContainsFunctions(content.args[1], ["__currentArrayIndex__"]) || content.args[0].name === "__filteredArray__" && astContainsFunctions(content.args[0].args[1], ["__currentArrayIndex__"])) {
                result += ", "+currentArrayIndexName;
            }
            result += " in ";
            if (content.args[0].name === "__filteredArray__") {
                result += astToOpy(content.args[0].args[0])+" if "+astToOpy(content.args[0].args[1]);
            } else {
                result += opyArray;
            }
            result += "]";
        } else if (content.name === "__filteredArray__") {
            result += "["+currentArrayElementName+" for "+currentArrayElementName;
            if (astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                result += ", "+currentArrayIndexName;
            }
            result += " in ";
            var opArray = opyArray;
            if (astContainsFunctions(content.args[0], ["__ifThenElse__"])) {
                opArray = "("+opArray+")";
            }
            result += opArray+" if ";
            var opIf = astToOpy(content.args[1]);
            if (astContainsFunctions(content.args[1], ["__ifThenElse__"])) {
                opIf = "("+opIf+")";
            }
            result += opIf+"]";
        } else if (content.name === "__sortedArray__") {
            result += "sorted("+opyArray;
            //If there is just "current array element", no need to explicitly put it
            if (content.args[1].name !== "__currentArrayElement__") {
                result += ", lambda "+currentArrayElementName;
                if (astContainsFunctions(content.args[1], ["__currentArrayIndex__"])) {
                    result += ", "+currentArrayIndexName;
                }
                result +=": "+astToOpy(content.args[1]);
            }
            result += ")";
        }

        currentArrayElementName = null;
        currentArrayIndexName = null;
        return result;
    }

    if (content.name === "__currentArrayElement__") {
        if (currentArrayElementName === null) {
            error("currentArrayElementName is null");
        }
        return currentArrayElementName;
    }
    
    if (content.name === "__currentArrayIndex__") {
        if (currentArrayIndexName === null) {
            error("currentArrayIndexName is null");
        }
        return currentArrayIndexName;
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
            if (foundField || content.args[0].name.includes("{"+i+"}")) {
                foundField = true;
                formatArgs.unshift(content.args[i+1]);
            }
        }
        var result = "";
        if (content.name === "__localizedString__") {
            result += "l";
            result += escapeString(topy(content.args[0].name, stringKw))
        } else {
            result += escapeString(content.args[0].name);
        }
        if (formatArgs.length > 0) {
            result += ".format("+formatArgs.map(x => astToOpy(x)).join(", ")+")";
        }
        return result;
    }
    if (content.name === "__round__") {
        if (content.args[1].name === "__roundUp__") {
            return "ceil("+astToOpy(content.args[0])+")";
        }
        if (content.args[1].name === "__roundDown__") {
            return "floor("+astToOpy(content.args[0])+")";
        }
        if (content.args[1].name === "__roundToNearest__") {
            return "round("+astToOpy(content.args[0])+")";
        }
    }

    if (content.name === "__raycastHitNormal__") {
        return "raycast("+content.args.map(x => astToOpy(x)).join(", ")+").getNormal()";
    }
    if (content.name === "__raycastHitPosition__") {
        return "raycast("+content.args.map(x => astToOpy(x)).join(", ")+").getHitPosition()";
    }
    if (content.name === "__raycastHitPlayer__") {
        return "raycast("+content.args.map(x => astToOpy(x)).join(", ")+").getPlayerHit()";
    }

    if (content.name === "__workshopSettingToggle__") {
        return "createWorkshopSetting(bool, "+content.args.map(x => astToOpy(x)).join(", ")+")";
    }
    if (content.name === "__workshopSettingInteger__") {
        return "createWorkshopSetting(int<"+astToOpy(content.args[3])+":"+astToOpy(content.args[4])+">, "+content.args.slice(0, 3).map(x => astToOpy(x)).join(", ")+")";
    }
    if (content.name === "__workshopSettingReal__") {
        return "createWorkshopSetting(float<"+astToOpy(content.args[3])+":"+astToOpy(content.args[4])+">, "+content.args.slice(0, 3).map(x => astToOpy(x)).join(", ")+")";
    }


    if (!(content.name in funcKw)) {
        error("Unregistered function '"+content.name+"'");
    }
    if (funcKw[content.name].args === null) {
        return content.name;
    } else {
        if (content.name.startsWith("_&")) {
            var result = astToOpy(content.args[0]);
            if (astContainsFunctions(content.args[0], Object.keys(astOperatorPrecedence))) {
                result = "("+result+")";
            }
            return result+"."+content.name.substring(2)+"("+content.args.slice(1).map(x => astToOpy(x)).join(", ")+")";
        }
        return content.name+"("+content.args.map(x => astToOpy(x)).join(", ")+")";
    }
}