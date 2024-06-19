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
// @ts-check
import { actionKw } from "../data/actions";
import { constantValues } from "../data/constants";
import { stringKw } from "../data/localizedStrings";
import { eventKw, eventPlayerKw, eventTeamKw, funcKw, ruleKw, valueKw } from "../data/other";
import { valueFuncKw } from "../data/values";
import { currentLanguage, decrementNbElements, enableOptimization, fileStack, incrementNbElements, incrementNbHeroesInValue, nbElements, nbHeroesInValue, optimizeForSize, replacementFor0, replacementFor1, replacementForTeam1, resetNbHeroesInValue, setFileStack, setOptimizationEnabled } from "../globalVars";
import { getAstForNull, getAstForTrue, Ast, getAstForFalse, getAstForMinus1, getAstFor0 } from "../utils/ast";
import { trimNb } from "../utils/compilation";
import { error, functionNameToString } from "../utils/logging";
import { tabLevel } from "../utils/other";
import { escapeBadWords, escapeString } from "../utils/strings";
import { tows } from "../utils/translation";
import { isTypeSuitable } from "../utils/types";
import { translateSubroutineToWs, translateVarToWs } from "../utils/varNames";

export function astRulesToWs(rules: Ast[]) {

    var compiledRules = [];

    for (var rule of rules) {
        var result = "";

        if (rule.name === "pass") {
            continue;
        }

        if (rule.ruleAttributes.isDisabled) {
            result += tows("__disabled__", ruleKw)+" ";
        }

        result += tows("__rule__", ruleKw)+" (";
        result += escapeBadWords(escapeString(rule.ruleAttributes.name, true));
        result += ") {\n";

        //Rule event
        result += tabLevel(1)+tows("__event__", ruleKw)+" {\n";
        result += tabLevel(2)+tows(rule.ruleAttributes.event, eventKw)+";\n";
        if (rule.ruleAttributes.eventTeam) {
            result += tabLevel(2)+tows(rule.ruleAttributes.eventTeam, eventTeamKw)+";\n";
        }
        if (rule.ruleAttributes.eventPlayer) {
            result += tabLevel(2)+tows(rule.ruleAttributes.eventPlayer, eventPlayerKw)+";\n";
        }
        if (rule.ruleAttributes.subroutineName) {
            result += tabLevel(2)+translateSubroutineToWs(rule.ruleAttributes.subroutineName)+";\n";
        }
        result += tabLevel(1)+"}\n";

        //Rule conditions
        if (rule.ruleAttributes.conditions !== undefined && rule.ruleAttributes.conditions.length > 0) {
            result += tabLevel(1)+tows("__conditions__", ruleKw)+" {\n";
            for (var condition of rule.ruleAttributes.conditions) {
                result += astRuleConditionToWs(condition);
            }
            result += tabLevel(1)+"}\n";
        }

        //Rule actions
        if (rule.children.length > 0) {
            result += tabLevel(1)+tows("__actions__", ruleKw)+" {\n";
            for (var child of rule.children) {
                result += astActionToWs(child, 2);
            }
            result += tabLevel(1)+"}\n";
        }

        result += "}\n\n";
        incrementNbElements();
        compiledRules.push(result);
    }


    return compiledRules;

}

function astRuleConditionToWs(condition: Ast) {

    var funcToOpMapping = {
        "__equals__": "==",
        "__inequals__": "!=",
        "__lessThanOrEquals__": "<=",
        "__greaterThanOrEquals__": ">=",
        "__lessThan__": "<",
        "__greaterThan__": ">",
    };
    var result = "";

    if (condition.type === "void") {
        setFileStack(condition.fileStack);
        error("Expected a value, but got "+functionNameToString(condition)+" which is an action");
    }

    if (condition.name in funcToOpMapping) {

        //Check for replacements
        if (enableOptimization && optimizeForSize) {
            for (var i = 0; i <= 1; i++) {
                /*console.log(condition);
                console.log(i);
                console.log(condition.args[i].name);*/
                if (condition.args[i].args.length > 0 && condition.args[i].name === "__number__") {
                    if (condition.args[i].args[0].numValue === 0) {
                        condition.args[i] = getAstForNull();

                    } else if (condition.args[i].args[0].numValue === 1) {
                        if (["__lessThanOrEquals__", "__greaterThanOrEquals__", "__lessThan__", "__greaterThan__"].includes(condition.name)) {
                            condition.args[i] = getAstForTrue();
                        } else if (replacementFor1 !== null) {
                            condition.args[i] = new Ast(replacementFor1);
                        }
                    }
                } else if (replacementForTeam1 !== null && condition.args[i].name === "__team__" && condition.args[i].args[0].name === "1") {
                    condition.args[i] = new Ast(replacementForTeam1);
                }
            }
        }
        for (var i = 0; i < condition.args.length; i++) {
            if (condition.args[i].type === "void") {
                setFileStack(condition.args[i].fileStack);
                error("Expected a value, but got "+functionNameToString(condition.args[i])+" which is an action");
            }
        }
        resetNbHeroesInValue();
        result += tabLevel(2)+astToWs(condition.args[0]);
        incrementNbElements(Math.floor(nbHeroesInValue/2));

        result += " " + funcToOpMapping[condition.name as keyof typeof funcToOpMapping] + " ";

        resetNbHeroesInValue();
        result += astToWs(condition.args[1])+";\n";
        incrementNbElements(Math.floor(nbHeroesInValue/2));

    } else {
        resetNbHeroesInValue();
        incrementNbElements();
        if (condition.name === "__not__") {
            result += tabLevel(2)+astToWs(condition.args[0])+" == "+tows("false", valueFuncKw)+";\n";

        } else if (condition.type === "bool") {
            result += tabLevel(2)+astToWs(condition)+" == "+tows("true", valueFuncKw)+";\n";

        } else {
            result += tabLevel(2)+astToWs(condition)+" != "+tows("false", valueFuncKw)+";\n";
        }
        incrementNbElements(Math.floor(nbHeroesInValue/2));
    }
    // nbElements += 1 - 2;
    decrementNbElements();
    return result;
}

/**
 * Converts an abstract syntax tree (Ast) action to a Workshop string representation.
 *
 * @param action - The abstract syntax tree action to convert.
 * @param nbTabs - The number of tabs to use for indentation.
 * @return The Workshop string representation of the action.
 */
export function astActionToWs(action: Ast, nbTabs: number) {
    if (action.type === "Label") {
        return tabLevel(nbTabs)+"//"+action.name+":\n";
    }
    if (action.type !== "void") {
        setFileStack(action.fileStack);
        error("Expected an action, but got "+functionNameToString(action)+" which is a value");
    }
    let result = "";
    if (action.name === "pass" && !action.comment) {
        action.comment = "pass";
    }

    if (action.comment) {
        result += `${tabLevel(nbTabs)}${escapeString(action.comment.trim(), true)}\n`;
    }

    result += tabLevel(nbTabs)+astToWs(action)+";\n";
    for (var child of action.children) {
        result += astActionToWs(child, nbTabs+1);
    }
    return result;
}

function astToWs(content: Ast): string {

    var equalityFuncToOpMapping = {
        "__equals__": "==",
        "__inequals__": "!=",
        "__lessThanOrEquals__": "<=",
        "__greaterThanOrEquals__": ">=",
        "__lessThan__": "<",
        "__greaterThan__": ">",
    };

    setFileStack(content.fileStack);

    if (content.type === "GlobalVariable") {
        incrementNbElements();
        return translateVarToWs(content.name, true);

    } else if (content.type === "PlayerVariable") {
        incrementNbElements();
        return translateVarToWs(content.name, false);

    } else if (content.type === "Subroutine") {
        incrementNbElements();
        return translateSubroutineToWs(content.name);

    } else if (typeof content.type === "string" && ["CustomStringLiteral","FullwidthStringLiteral", "BigLettersStringLiteral"].includes(content.type)) {
        incrementNbElements();
        return escapeString(content.name, true);

    } else if (content.type === "LocalizedStringLiteral") {
        incrementNbElements(2);
        return escapeString(tows(content.name, stringKw), true);
    }

    let result = "";
    if (content.name === "__valueInArray__" && enableOptimization && content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
        content = new Ast("__firstOf__", [content.args[0]]);
    }

    if (enableOptimization && optimizeForSize) {
        //Replace 0 by false/null, 1 by true, and null vector by null
        for (var i = 0; i < content.args.length; i++) {
            let argInfo = content.name === "__array__" ? funcKw[content.name].args?.[0] : funcKw[content.name].args?.[i];
            if (argInfo === undefined) {
                error("Could not find info about argument "+ (content.name === "__array__" ? 0 : i) +" of "+content.name);
            }
            if (content.args[i].name === "__number__") {
                if (argInfo.canReplace0ByFalse && content.args[i].args[0].numValue === 0) {
                    content.args[i] = getAstForFalse();
                } else if (argInfo.canReplace0ByNull && content.args[i].args[0].numValue === 0) {
                    content.args[i] = getAstForNull();
                } else if (argInfo.canReplace1ByTrue && content.args[i].args[0].numValue === 1) {
                    content.args[i] = getAstForTrue();
                } else {
                    //console.log(content.args[i].expectedType);
                    //if (!isTypeSuitable("FloatLiteral", content.args[i].expectedType)) {
                    if (![
                        "__workshopSettingReal__",
                        "__workshopSettingInteger__",
                        "__workshopSettingToggle__",
                        "__workshopSettingHero__",
                        "__workshopSettingCombo__"
                    ].includes(content.name)) {
                        if (content.args[i].args[0].numValue === 0 && replacementFor0 !== null) {
                            content.args[i] = new Ast(replacementFor0);
                        } else if (content.args[i].args[0].numValue === 1 && replacementFor1 !== null) {
                            content.args[i] = new Ast(replacementFor1);
                        }
                    }
                }
            } else if (argInfo.canReplaceNullVectorByNull && content.args[i].name === "vect"
                    && content.args[i].args[0].name === "__number__" && content.args[i].args[0].args[0].numValue === 0
                    && content.args[i].args[1].name === "__number__" && content.args[i].args[1].args[0].numValue === 0
                    && content.args[i].args[2].name === "__number__" && content.args[i].args[2].args[0].numValue === 0) {
                content.args[i] = getAstForNull();
            } else if (replacementForTeam1 !== null && content.args[i].name === "__team__" && content.args[i].args[0].name === "1") {
                content.args[i] = new Ast(replacementForTeam1);
            }
        }
    }

    //Do literal limit bypassing
    if (content.name in funcKw && funcKw[content.name].hasLiteralLimit) {
        for (var i = 0; i < content.args.length; i++) {
            let literalMax = funcKw[content.name].args?.[i]?.literalMax;
            if (literalMax === undefined) {
                continue;
            }
            if (literalMax > 0 && content.args[i].name === "__number__" && content.args[i].args[0].numValue > literalMax) {
                content.args[i] = new Ast("abs", [content.args[i]]);
            }
        }
    }

    if (content.name in equalityFuncToOpMapping) {
        //Convert functions such as __equals__(1,2) to __compare__(1, ==, 2).
        content.args.splice(1, 0, new Ast(equalityFuncToOpMapping[content.name as keyof typeof equalityFuncToOpMapping], [], [], "__Operator__"));
        content.name = "__compare__";

    } else if (content.name === "__assignTo__" || content.name === "__modifyVar__") {


        if (content.name === "__modifyVar__" && enableOptimization && optimizeForSize && content.args[2].name === "__number__") {
            //Manually do the 0/1->false/true/null replacements.
            if (["__add__", "__subtract__", "__modulo__", "__max__", "__min__", "__removeFromArrayByIndex__"].includes(content.args[1].name)) {
                if (content.args[2].args[0].numValue === 0) {
                    content.args[2] = getAstForFalse();
                } else if (content.args[2].args[0].numValue === 1) {
                    content.args[2] = getAstForTrue();
                }

            } else if (["__appendToArray__", "__removeFromArrayByValue__"].includes(content.args[1].name)) {
                if (content.args[2].args[0].numValue === 0) {
                    content.args[2] = getAstForNull();
                }
            }
        }
        //Workaround for the japanese language bug where "add" and "append" are the same for the modify variable actions.
        if (content.name === "__modifyVar__" && content.args[1].name === "__add__" && currentLanguage === "ja-JP") {
            let tmpEnableOptimization = enableOptimization;
            setOptimizationEnabled(false);
            result += astToWs(content.args[0])+" += ";
            setOptimizationEnabled(tmpEnableOptimization);
            result += astToWs(content.args[2]);
            // nbElements += 1 - 3;
            decrementNbElements(2);
            return result;
        }

        var newName = content.name === "__assignTo__" ? "__set" : "__modify";
        if (content.args[0].name === "__globalVar__") {
            //A = 3 -> __setGlobalVariable__(A, 3)
            newName += "GlobalVariable__";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            //eventPlayer.A = 3 -> __setPlayerVariable__(eventPlayer, A, 3)
            newName += "PlayerVariable__";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__valueInArray__") {
            if (content.args[0].args[0].name === "__globalVar__") {
                //A[0] = 3 -> __setGlobalVariableAtIndex__(A, 0, 3)
                newName += "GlobalVariableAtIndex__";
                content.args = [content.args[0].args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

                if (enableOptimization && optimizeForSize) {
                    //We must manually do the 0/1 -> false/true replacement, as the "value in array" isn't actually parsed.
                    if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
                        content.args[1] = getAstForFalse();
                    } else if (content.args[1].name === "__number__" && content.args[1].args[0].numValue === 1) {
                        content.args[1] = getAstForTrue();
                    }
                }

            } else if (content.args[0].args[0].name === "__playerVar__") {
                //eventPlayer.A[0] = 3 -> __setPlayerVariableAtIndex__(eventPlayer, A, 0, 3)
                newName += "PlayerVariableAtIndex__";
                content.args = [content.args[0].args[0].args[0], content.args[0].args[0].args[1], content.args[0].args[1]].concat(content.args.slice(1));

                if (enableOptimization && optimizeForSize) {
                    if (content.args[2].name === "__number__" && content.args[2].args[0].numValue === 0) {
                        content.args[2] = getAstForFalse();
                    } else if (content.args[2].name === "__number__" && content.args[2].args[0].numValue === 1) {
                        content.args[2] = getAstForTrue();
                    }

                }
            } else {
                error("Cannot modify or assign to "+functionNameToString(content.args[0].args[0]));
            }

        } else {
            error("Cannot modify or assign to "+functionNameToString(content.args[0]));
        }
        content.name = newName;

    } else if (content.name === "__chaseAtRate__" || content.name === "__chaseOverTime__") {
        var newName = content.name === "__chaseAtRate__" ? "AtRate__" : "OverTime__";

        if (content.args[0].name === "__globalVar__") {

            newName = "GlobalVariable"+newName;
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {

            newName = "PlayerVariable"+newName;
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else {
            error("Expected a variable for 1st argument of "+functionNameToString(content)+", but got "+functionNameToString(content.args[0]));
        }
        newName = "__chase"+newName;
        content.name = newName;

    } else if (["__getHitPosition__", "__getPlayerHit__", "__getNormal__"].includes(content.name)) {
        if (content.args[0].name !== "raycast") {
            error("Cannot use "+functionNameToString(content)+" with "+functionNameToString(content.args[0]));
        }
        content.args = content.args[0].args;
        content.name = {
            "__getHitPosition__": "__raycastHitPosition__",
            "__getPlayerHit__": "__raycastHitPlayer__",
            "__getNormal__": "__raycastHitNormal__",
        }[content.name as ("__getHitPosition__" | "__getPlayerHit__" | "__getNormal__")];

    } else if (content.name === "__for__") {

        var newName = "";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else {
            error("Expected a variable for 1st argument of "+functionNameToString(content)+", but got "+functionNameToString(content.args[0]));
        }
        newName = "__for"+newName+"__";
        content.name = newName;

    } else if (content.name === "__globalVar__") {
        incrementNbElements();
        return tows("__global__", valueKw)+"."+astToWs(content.args[0]);
    } else if (content.name === "__negate__") {
        content.name = "__multiply__";
        content.args = [getAstForMinus1(), content.args[0]];

    } else if (content.name === "__number__") {
        incrementNbElements(2);
        return trimNb(content.args[0].name);

    } else if (content.name === "__playerVar__") {
        incrementNbElements();
        return "("+astToWs(content.args[0])+")."+astToWs(content.args[1]);
    } else if (content.name === "__team__") {
        content.name = content.args[0].name;
        content.args = [];
        content.type = "TeamLiteral";

    } else if (content.name === "ceil") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundUp__", [], [], "__Rounding__")];

    } else if (content.name === "getSign") {
        //getSign(x) -> (x>0)-(x<0)
        content.name = "__subtract__";
        content.args = [
            new Ast("__greaterThan__", [content.args[0], getAstFor0()]),
            new Ast("__lessThan__", [content.args[0], getAstFor0()]),
        ];
    } else if (content.name === "floor") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundDown__", [], [], "__Rounding__")];

    } else if (["hudHeader", "hudSubheader", "hudSubtext"].includes(content.name)) {

        if (content.name === "hudHeader") {
            content.args.splice(2, 0, getAstForNull());
            content.args.splice(3, 0, getAstForNull());
            content.args.splice(7, 0, getAstForNull());
            content.args.splice(8, 0, getAstForNull());
        } else if (content.name === "hudSubheader") {
            content.args.splice(1, 0, getAstForNull());
            content.args.splice(3, 0, getAstForNull());
            content.args.splice(6, 0, getAstForNull());
            content.args.splice(8, 0, getAstForNull());
        } else {
            content.args.splice(1, 0, getAstForNull());
            content.args.splice(2, 0, getAstForNull());
            content.args.splice(6, 0, getAstForNull());
            content.args.splice(7, 0, getAstForNull());
        }
        content.name = "__hudText__";

    } else if (content.name === "hudText") {
        content.name = "__hudText__";

    } else if (content.name === "pass") {
        content.name = "return";
        content.isDisabled = true;

    } else if (content.name === "round") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundToNearest__", [], [], "__Rounding__")];

    } else if (content.name === "RULE_CONDITION" || content.name === "RULE_START") {
        //If we encounter that keyword here, it means it hasn't been converted to "loop if condition is true" or similar.
        error("Cannot use '"+content.name+"' in that context");

    } else if (content.name === "stopChasingVariable") {
        var newName = "";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else {
            error("Expected a variable for 1st argument of "+functionNameToString(content)+", but got "+functionNameToString(content.args[0]));
        }
        newName = "__stopChasing"+newName+"__";
        content.name = newName;

    }

    if (content.type === undefined) {
        error("Type of '"+content.name+"' is undefined");
    }

    if (content.type === "void") {
        result += tows(content.name, actionKw);
    } else if (isTypeSuitable(["Object", "Array"], content.type)){
        result += tows(content.name, valueKw);
    } else if (typeof content.type !== "object" && content.type in constantValues) {
        if (content.type === "HeroLiteral") {
            incrementNbHeroesInValue();
        }
        if (!(content.name in constantValues[content.type])) {
            error("Unknown "+content.type.replace("Literal", "").toLowerCase()+" '"+content.name+"'");
        }
        result += tows(content.name, constantValues[content.type]);
    } else {
        error("Unknown type '"+content.type+"' of '"+content.name+"'");
    }

    if (content.args.length > 0) {
        result += "(";
        for (var i = 0; i < content.args.length; i++) {
            if (content.type === "void") {
                resetNbHeroesInValue();
            }
            if (i > 0) {
                result += ", ";
            }
            if (content.args[i].type === "void") {
                setFileStack(content.args[i].fileStack);
                error("Expected a value, but got "+functionNameToString(content.args[i])+" which is an action");
            }
            result += astToWs(content.args[i]);
            if (content.type === "void") {
                incrementNbElements(Math.floor(nbHeroesInValue/2));
            }
        }
        result += ")";
    }

    if (content.isDisabled === true) {
        result = tows("__disabled__", ruleKw)+" "+result;
    }

    incrementNbElements();

    //Apply workaround for booleans not accepting all functions such as Vector.UP
    //"First Of" keeps the truthyness of all functions (even those which return an array, as it takes the first element anyway)
    if (content.expectedType === "bool" && funcKw[content.name].canBePutInBoolean === false) {
        result = tows("__firstOf__", valueFuncKw)+"("+result+")";
        incrementNbElements();
    }

    //Actions remove elements for top-level values
    if (content.type === "void" && content.args !== null) {
        decrementNbElements(content.args.length);
    } else if (["__array__","evalOnce"].includes(content.name)) {
        incrementNbElements();
    } else if (["__workshopSettingInteger__", "__workshopSettingReal__"].includes(content.name)) {
        // nbElements += 1 - 4; //remove elements because of number literals
        decrementNbElements(3);
    } else if (["__workshopSettingToggle__", "__workshopSettingHero__"].includes(content.name)) {
        // For your consideration, the original code is:
        // nbElements++;
        // nbElements -= 1; //remove elements because of number literals
    } else if (["__workshopSettingCombo__"].includes(content.name)) {
        // For your consideration, the original code is:
        // nbElements++;
        // nbElements -= 2; //remove elements because of number literals
        decrementNbElements();
    } else if (content.type === "TeamLiteral") {
        incrementNbElements();
    }


    return result;
}
