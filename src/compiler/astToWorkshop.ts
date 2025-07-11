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
import { eventKw, eventPlayerKw, eventTeamKw, ruleKw } from "../data/other";
import { valueFuncKw } from "../data/values";
import { currentLanguage, currentRuleConditions, decrementNbElements, enableOptimization, fileStack, incrementNbElements, incrementNbHeroesInValue, nbElements, nbHeroesInValue, optimizeForSize, replacementFor0, replacementFor1, replacementForTeam1, resetNbHeroesInValue, setCurrentRuleConditions, setFileStack, setOptimizationEnabled, funcKw, valueKw, setOptimizeStrict, setOptimizationForSize, optimizeStrict, STR_MAX_LENGTH, STR_MAX_ARGS } from "../globalVars";
import { StringToken } from "../types";
import { getAstForNull, getAstForTrue, Ast, getAstForFalse, getAstForMinus1, getAstFor0, numValue, areAstsAlwaysEqual, getAstForCustomString } from "../utils/ast";
import { trimNb } from "../utils/compilation";
import { debug, error, functionNameToString } from "../utils/logging";
import { tabLevel } from "../utils/other";
import { escapeBadWords, escapeString, getUtf8Length } from "../utils/strings";
import { tows } from "../utils/translation";
import { isTypeSuitable } from "../utils/types";
import { translateSubroutineToWs, translateVarToWs } from "../utils/varNames";

export function astRulesToWs(rules: Ast[]) {
    var compiledRules = [];

    for (var rule of rules) {
        setCurrentRuleConditions([]);
        var result = "";

        if (rule.name === "pass") {
            continue;
        }

        if (rule.name === "__disableOptimizations__") {setOptimizationEnabled(false); compiledRules.push("//Optimizations disabled\n"); continue;}
        if (rule.name === "__enableOptimizations__") {setOptimizationEnabled(true); compiledRules.push("//Optimizations enabled\n"); continue;}
        if (rule.name === "__disableOptimizeForSize__") {setOptimizationForSize(false); compiledRules.push("//Optimize for size disabled\n"); continue;}
        if (rule.name === "__enableOptimizeForSize__") {setOptimizationForSize(true); compiledRules.push("//Optimize for size enabled\n"); continue;}
        if (rule.name === "__disableOptimizeStrict__") {setOptimizeStrict(false); compiledRules.push("//Strict optimizations disabled\n"); continue;}
        if (rule.name === "__enableOptimizeStrict__") {setOptimizeStrict(true); compiledRules.push("//Strict optimizations enabled\n"); continue;}

        if (rule.ruleAttributes.isDisabled) {
            result += tows("__disabled__", ruleKw) + " ";
        }

        result += tows("__rule__", ruleKw) + " (";
        result += escapeBadWords(escapeString(rule.ruleAttributes.name, true));
        result += ") {\n";

        //Rule event
        result += tabLevel(1) + tows("__event__", ruleKw) + " {\n";
        result += tabLevel(2) + tows(rule.ruleAttributes.event, eventKw) + ";\n";
        if (rule.ruleAttributes.eventTeam) {
            result += tabLevel(2) + tows(rule.ruleAttributes.eventTeam, eventTeamKw) + ";\n";
        }
        if (rule.ruleAttributes.eventPlayer) {
            result += tabLevel(2) + tows(rule.ruleAttributes.eventPlayer, eventPlayerKw) + ";\n";
        }
        if (rule.ruleAttributes.subroutineName) {
            result += tabLevel(2) + translateSubroutineToWs(rule.ruleAttributes.subroutineName, rule.fileStack) + ";\n";
        }
        result += tabLevel(1) + "}\n";

        //Rule conditions
        if (rule.ruleAttributes.conditions !== undefined && rule.ruleAttributes.conditions.length > 0) {
            result += tabLevel(1) + tows("__conditions__", ruleKw) + " {\n";
            for (var condition of rule.ruleAttributes.conditions) {
                currentRuleConditions.push(condition.clone());
                result += astRuleConditionToWs(condition);
            }
            result += tabLevel(1) + "}\n";
        }

        //Rule actions
        if (rule.children.length > 0) {
            result += tabLevel(1) + tows("__actions__", ruleKw) + " {\n";
            let oldEnableOptimization = enableOptimization;
            let oldOptimizeForSize = optimizeForSize;
            let oldOptimizeStrict = optimizeStrict;
            for (var child of rule.children) {
                result += astActionToWs(child, 2);
            }
            setOptimizationEnabled(oldEnableOptimization);
            setOptimizationForSize(oldOptimizeForSize);
            setOptimizeStrict(oldOptimizeStrict);
            result += tabLevel(1) + "}\n";
        }

        result += "}\n\n";
        incrementNbElements();
        compiledRules.push(result);
    }

    setOptimizationEnabled(true);
    setOptimizeStrict(false);
    setOptimizationForSize(false);
    return compiledRules;
}

function astRuleConditionToWs(condition: Ast) {
    var funcToOpMapping = {
        __equals__: "==",
        __inequals__: "!=",
        __lessThanOrEquals__: "<=",
        __greaterThanOrEquals__: ">=",
        __lessThan__: "<",
        __greaterThan__: ">",
    };
    var result = "";
    if (condition.comment) {
        result += tabLevel(2) + escapeString(condition.comment.trim(), true) + "\n";
    }

    if (condition.type === "void") {
        error("Expected a value, but got " + functionNameToString(condition) + " which is an action", condition.fileStack);
    }

    if (condition.name in funcToOpMapping) {
        //Check for replacements
        if (enableOptimization && optimizeForSize) {
            for (var i = 0; i <= 1; i++) {
                if (condition.args[i].args.length > 0 && condition.args[i].name === "__number__") {
                    if (condition.args[i].args[0].numValue === 0) {
                        condition.args[i] = getAstForNull();
                    } else if (condition.args[i].args[0].numValue === 1) {
                        if (["__lessThanOrEquals__", "__greaterThanOrEquals__", "__lessThan__", "__greaterThan__"].includes(condition.name)) {
                            condition.args[i] = getAstForTrue();
                        } else if (replacementFor1 !== "") {
                            condition.args[i] = new Ast(replacementFor1);
                        }
                    }
                } else if (replacementForTeam1 !== "" && condition.args[i].name === "__team__" && condition.args[i].args[0].name === "1") {
                    condition.args[i] = new Ast(replacementForTeam1);
                }
            }
        }
        for (var i = 0; i < condition.args.length; i++) {
            if (condition.args[i].type === "void") {
                error("Expected a value, but got " + functionNameToString(condition.args[i]) + " which is an action", condition.args[i].fileStack);
            }
        }
        resetNbHeroesInValue();
        result += tabLevel(2) + astToWs(condition.args[0]);
        incrementNbElements(Math.floor(nbHeroesInValue / 2));

        result += " " + funcToOpMapping[condition.name as keyof typeof funcToOpMapping] + " ";

        resetNbHeroesInValue();
        result += astToWs(condition.args[1]) + ";\n";
        incrementNbElements(Math.floor(nbHeroesInValue / 2));
    } else {
        resetNbHeroesInValue();
        incrementNbElements();
        if (condition.name === "__not__") {
            result += tabLevel(2) + astToWs(condition.args[0]) + " == " + tows("false", valueFuncKw) + ";\n";
        } else if (condition.type === "bool") {
            result += tabLevel(2) + astToWs(condition) + " == " + tows("true", valueFuncKw) + ";\n";
        } else {
            result += tabLevel(2) + astToWs(condition) + " != " + tows("false", valueFuncKw) + ";\n";
        }
        incrementNbElements(Math.floor(nbHeroesInValue / 2));
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
        return tabLevel(nbTabs) + "//" + action.name + ":\n";
    }
    if (action.name === "__disableOptimizations__") {setOptimizationEnabled(false); return tabLevel(nbTabs) + "//Optimizations disabled\n";}
    if (action.name === "__enableOptimizations__") {setOptimizationEnabled(true); return tabLevel(nbTabs) + "//Optimizations enabled\n";}
    if (action.name === "__disableOptimizeForSize__") {setOptimizationForSize(false); return tabLevel(nbTabs) + "//Optimize for size disabled\n";}
    if (action.name === "__enableOptimizeForSize__") {setOptimizationForSize(true); return tabLevel(nbTabs) + "//Optimize for size enabled\n";}
    if (action.name === "__disableOptimizeStrict__") {setOptimizeStrict(false); return tabLevel(nbTabs) + "//Strict optimizations disabled\n";}
    if (action.name === "__enableOptimizeStrict__") {setOptimizeStrict(true); return tabLevel(nbTabs) + "//Strict optimizations enabled\n";}

    if (action.type !== "void") {
        error("Expected an action, but got " + functionNameToString(action) + " which is a value", action.fileStack);
    }
    let result = "";
    if (action.name === "pass" && !action.comment) {
        action.comment = "pass";
    }

    if (action.comment) {
        result += `${tabLevel(nbTabs)}${escapeString(action.comment.trim(), true)}\n`;
    }

    result += tabLevel(nbTabs) + astToWs(action) + ";\n";

    let oldEnableOptimization = enableOptimization;
    let oldOptimizeForSize = optimizeForSize;
    let oldOptimizeStrict = optimizeStrict;
    for (var child of action.children) {
        result += astActionToWs(child, nbTabs + 1);
    }
    setOptimizationEnabled(oldEnableOptimization);
    setOptimizationForSize(oldOptimizeForSize);
    setOptimizeStrict(oldOptimizeStrict);
    return result;
}

function astToWs(content: Ast): string {
    var equalityFuncToOpMapping = {
        __equals__: "==",
        __inequals__: "!=",
        __lessThanOrEquals__: "<=",
        __greaterThanOrEquals__: ">=",
        __lessThan__: "<",
        __greaterThan__: ">",
    };

    //debug("astToWs: "+content.name);
    setFileStack(content.fileStack);

    if (content.type === "GlobalVariable") {
        incrementNbElements();
        return translateVarToWs(content.name, true, content.fileStack);
    } else if (content.type === "PlayerVariable") {
        incrementNbElements();
        return translateVarToWs(content.name, false, content.fileStack);
    } else if (content.type === "Subroutine") {
        incrementNbElements();
        return translateSubroutineToWs(content.name, content.fileStack);
    } else if (typeof content.type === "string" && content.type === "CustomStringLiteral") {
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

    if (content.name === "vect") {
        //Check that before size optimizations as otherwise we check vect(false, true, false)
        if (enableOptimization) {
            //Check for each of the 6 vector constants
            let x = numValue(content.args[0]);
            let y = numValue(content.args[1]);
            let z = numValue(content.args[2]);
            if (x === 1 && y === 0 && z === 0) {
                return astToWs(new Ast("Vector.LEFT"));
            }
            if (x === -1 && y === 0 && z === 0) {
                return astToWs(new Ast("Vector.RIGHT"));
            }
            if (x === 0 && y === 1 && z === 0) {
                return astToWs(new Ast("Vector.UP"));
            }
            if (x === 0 && y === -1 && z === 0) {
                return astToWs(new Ast("Vector.DOWN"));
            }
            if (x === 0 && y === 0 && z === 1) {
                return astToWs(new Ast("Vector.FORWARD"));
            }
            if (x === 0 && y === 0 && z === -1) {
                return astToWs(new Ast("Vector.BACKWARD"));
            }

            if (optimizeForSize && !(x === 0 && y === 0 && z === 0)) {
                //vect(0,A,0) -> A * Vector.UP and same for other vector constants
                //We already checked for null vector, so we can just check for zeroes
                if (y === 0 && z === 0) {
                    return astToWs(new Ast("__multiply__", [content.args[0], new Ast("Vector.LEFT")]));
                }
                if (x === 0 && z === 0) {
                    return astToWs(new Ast("__multiply__", [content.args[1], new Ast("Vector.UP")]));
                }
                if (x === 0 && y === 0) {
                    return astToWs(new Ast("__multiply__", [content.args[2], new Ast("Vector.FORWARD")]));
                }
            }
        }
    }

    if (enableOptimization && optimizeForSize) {
        //Replace 0 by false/null, 1 by true, and null vector by null or left+right
        for (var i = 0; i < content.args.length; i++) {
            let argInfo = content.name === "__array__" ? funcKw[content.name].args?.[0] : content.name === "__customString__" ? funcKw[content.name].args?.[1] : funcKw[content.name].args?.[i];
            if (argInfo === undefined) {
                error("Could not find info about argument " + (content.name === "__array__" ? 0 : i) + " of " + content.name);
            }
            if (content.args[i].name === "__number__") {
                if (argInfo.canReplace0ByFalse && content.args[i].args[0].numValue === 0) {
                    content.args[i] = getAstForFalse();
                } else if (argInfo.canReplace0ByNull && content.args[i].args[0].numValue === 0) {
                    content.args[i] = getAstForNull();
                } else if (argInfo.canReplace1ByTrue && content.args[i].args[0].numValue === 1) {
                    content.args[i] = getAstForTrue();
                } else {
                    if (!["createWorkshopSettingFloat", "createWorkshopSettingInt", "createWorkshopSettingBool", "createWorkshopSettingHero", "createWorkshopSettingEnum"].includes(content.name)) {
                        if (content.args[i].args[0].numValue === 0 && replacementFor0 !== "") {
                            content.args[i] = new Ast(replacementFor0);
                        } else if (content.args[i].args[0].numValue === 1 && replacementFor1 !== "") {
                            content.args[i] = new Ast(replacementFor1);
                        }
                    }
                }
            } else if (content.args[i].name === "vect" && content.args[i].args[0].name === "__number__" && content.args[i].args[0].args[0].numValue === 0 && content.args[i].args[1].name === "__number__" && content.args[i].args[1].args[0].numValue === 0 && content.args[i].args[2].name === "__number__" && content.args[i].args[2].args[0].numValue === 0) {
                if (argInfo.canReplaceNullVectorByNull) {
                    content.args[i] = getAstForNull();
                } else {
                    content.args[i] = new Ast("__add__", [new Ast("Vector.LEFT"), new Ast("Vector.RIGHT")]);
                }
            } else if (replacementForTeam1 !== "" && content.args[i].name === "__team__" && content.args[i].args[0].name === "1") {
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
            result += astToWs(content.args[0]) + " += ";
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
                error("Cannot modify or assign to " + functionNameToString(content.args[0].args[0]), content.args[0].args[0].fileStack);
            }
        } else {
            error("Cannot modify or assign to " + functionNameToString(content.args[0]), content.args[0].fileStack);
        }
        content.name = newName;
    } else if (content.name === "__array__") {
        if (content.args.length === 0) {
            incrementNbElements();
            return tows("__emptyArray__", valueKw);
        } else if (optimizeForSize && content.parent?.name !== "createWorkshopSettingEnum" && content.args.every(x => x.name === "__customString__" && x.args.length === 1)) {
            //An array of string literals without args can be optimized to one string with string split
            //["a", "b"] -> "a|b".split("|")
            let separator = "\uEC51";
            let separatorAst = getAstForCustomString(separator);
            let str = content.args.map(x => x.args[0].name).join(separator);
            if (!str.includes("0")) {
                separator = "0";
                separatorAst = new Ast("__firstOf__", [getAstForNull()]);
            } else if (!str.includes("(1.00, 0.00, 0.00)") && (getUtf8Length(str) % (STR_MAX_LENGTH-"{0}".length)) + content.args.length * ("(1.00, 0.00, 0.00)".length - "\uEC51".length) <= STR_MAX_LENGTH) {
                separator = "(1.00, 0.00, 0.00)";
                separatorAst = new Ast("__firstOf__", [new Ast("Vector.LEFT")]);
            }
            str = str.replaceAll("\uEC51", separator);
            return astToWs(new Ast(".split", [getAstForCustomString(str), separatorAst]));

        }
    } else if (content.name === "chaseAtRate" || content.name === "chaseOverTime") {
        var newName = content.name === "chaseAtRate" ? "AtRate__" : "OverTime__";

        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable" + newName;
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));
        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable" + newName;
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));
        } else {
            error("Expected a variable for 1st argument of " + functionNameToString(content) + ", but got " + functionNameToString(content.args[0]), content.args[0].fileStack);
        }
        newName = "__chase" + newName;
        content.name = newName;
    } else if (content.name === "__customString__" || content.name === "__localizedString__") {

        if (content.name === "__customString__" && content.stringTokens) {
            //This string wasn't split yet
            content = splitCustomString(content.stringTokens, content.args.slice(1));
        }

        if (content.args.length !== 4) {
            console.log(content);
            error("Expected 4 arguments for " + functionNameToString(content) + ", but got " + content.args.length+", please report to Zezombye");
        }

        //Remove the additional nulls to get cleaner output
        for (let i = 3; i >= 1; i--) {
            if (content.args[i].name === "null") {
                incrementNbElements();
                content.args.pop();
            } else {
                break;
            }
        }

    } else if ([".getHitPosition", ".getPlayerHit", ".getNormal"].includes(content.name)) {
        if (content.args[0].name !== "raycast") {
            error("Cannot use " + functionNameToString(content) + " with " + functionNameToString(content.args[0]));
        }
        content.args = content.args[0].args;
        content.name = {
            ".getHitPosition": "__raycastHitPosition__",
            ".getPlayerHit": "__raycastHitPlayer__",
            ".getNormal": "__raycastHitNormal__",
        }[content.name as ".getHitPosition" | ".getPlayerHit" | ".getNormal"];
    } else if (content.name === "__for__") {
        var newName = "";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));
        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));
        } else {
            error("Expected a variable for 1st argument of " + functionNameToString(content) + ", but got " + functionNameToString(content.args[0]), content.args[0].fileStack);
        }
        newName = "__for" + newName + "__";
        content.name = newName;
    } else if (content.name === "__globalVar__") {
        incrementNbElements();
        return tows("__global__", valueKw) + "." + astToWs(content.args[0]);
    } else if (content.name === "__number__") {
        incrementNbElements(2);
        return trimNb(content.args[0].name);
    } else if (content.name === "__playerVar__") {
        incrementNbElements();
        return "(" + astToWs(content.args[0]) + ")." + astToWs(content.args[1]);
    } else if (content.name === "ceil") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundUp__", [], [], "__Rounding__")];
    } else if (content.name === "floor") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundDown__", [], [], "__Rounding__")];
    } else if (content.name === "pass") {
        content.name = "return";
        content.isDisabled = true;
    } else if (content.name === "round") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundToNearest__", [], [], "__Rounding__")];
    } else if (content.name === ".replace") {
        //For translations, we use that as a workaround for .format(), except not all values can be used in .replace().
        //If they cannot be used, wrap them with updateEveryFrame(), as evalOnce() adds another element (and can cause side effects), and firstOf() returns 0 for some objects such as numbers
        if (![
            "abilityIconString",
            "__add__",
            ".concat",
            "__array__",
            "__arrayContains__",
            ".slice",
            ".charAt",
            "__color__",
            "__currentArrayElement__",
            "__currentArrayIndex__",
            "rgb",
            "__customString__",
            "__divide__",
            "__emptyArray__",
            "evalOnce",
            "__filteredArray__",
            "__firstOf__",
            "__globalVar__",
            "healee",
            "healer",
            "heroIcon",
            "hostPlayer",
            "iconString",
            "__ifThenElse__",
            ".index",
            "inputBindingString",
            "__all__",
            "__any__",
            ".isUsingUltimate",
            ".last",
            "__mappedArray__",
            "__multiply__",
            ".getPlayerClosestToReticle",
            ".getHeroStatistic",
            "__playerVar__",
            ".getPlayersInViewAngle",
            "random.choice",
            "random.shuffle",
            ".exclude",
            "__sortedArray__",
            "getSpawnPoints",
            "__localizedString__",
            ".replace",
            ".substring",
            ".split",
            "__subtract__",
            "updateEveryFrame",
            "__valueInArray__",
        ].includes(content.args[2].name)) {
            content.args[2] = new Ast("updateEveryFrame", [content.args[2]]);
        }
    } else if (content.name === "RULE_START") {
        //If we encounter that keyword here, it means it hasn't been converted to "loop if condition is true" or similar.
        error("Cannot use '" + content.name + "' in that context");
    } else if (content.name === "ruleCondition") {
        //If we encounter that keyword here, it means it hasn't been converted to "loop if condition is true" or similar.
        //Convert it to the rule conditions joined with "and".
        if (currentRuleConditions.length === 0) {
            content.name = "true";
        } else {
            result += "(";
            for (let i = 0; i < currentRuleConditions.length; i++) {
                if (i > 0) {
                    result += " && ";
                }
                result += "("+astToWs(currentRuleConditions[i])+")";
            }
            result += ")";
            incrementNbElements(currentRuleConditions.length - 1);
            return result;
        }
    } else if (content.name === "stopChasingVariable") {
        var newName = "";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));
        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));
        } else {
            error("Expected a variable for 1st argument of " + functionNameToString(content) + ", but got " + functionNameToString(content.args[0]), content.args[0].fileStack);
        }
        newName = "__stopChasing" + newName + "__";
        content.name = newName;
    } else if (content.name === "__team__") {
        incrementNbElements();
        return astToWs(content.args[0]);
    }

    if (content.type === undefined) {
        error("Type of '" + content.name + "' is undefined");
    }

    if (content.type === "void") {
        result += tows(content.name, actionKw);
    } else if (isTypeSuitable(["Object", "Array"], content.type)) {
        result += tows(content.name, valueKw);
    } else if (typeof content.type !== "object" && content.type in constantValues) {
        if (content.type === "HeroLiteral") {
            incrementNbHeroesInValue();
        }
        if (!(content.name in constantValues[content.type])) {
            error("Unknown " + content.type.replace("Literal", "").toLowerCase() + " '" + content.name + "'");
        }
        result += tows(content.name, constantValues[content.type]);
    } else {
        error("Unknown type '" + content.type + "' of '" + content.name + "'");
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
                error("Expected a value, but got " + functionNameToString(content.args[i]) + " which is an action", content.args[i].fileStack);
            }
            result += astToWs(content.args[i]);
            if (content.type === "void") {
                incrementNbElements(Math.floor(nbHeroesInValue / 2));
            }
        }
        result += ")";
    }

    if (content.isDisabled === true) {
        result = tows("__disabled__", ruleKw) + " " + result;
    }

    incrementNbElements();

    //Apply workaround for booleans not accepting all functions such as Vector.UP
    //"First Of" keeps the truthiness of all functions (even those which return an array, as it takes the first element anyway)
    if (content.expectedType === "bool" && funcKw[content.name].canBePutInBoolean === false) {
        result = tows("__firstOf__", valueFuncKw) + "(" + result + ")";
        incrementNbElements();
    }

    //Actions remove elements for top-level values
    if (content.type === "void" && content.args !== null) {
        decrementNbElements(content.args.length);
    } else if (["__array__", "evalOnce"].includes(content.name)) {
        //Those functions take one more element than they're supposed to for some reason
        incrementNbElements();
    } else if (["createWorkshopSettingInt", "createWorkshopSettingFloat"].includes(content.name)) {
        // nbElements += 1 - 4; //remove elements because of number literals
        decrementNbElements(3);
    } else if (["createWorkshopSettingBool", "createWorkshopSettingHero"].includes(content.name)) {
        // For your consideration, the original code is:
        // nbElements++;
        // nbElements -= 1; //remove elements because of number literals
    } else if (["createWorkshopSettingEnum"].includes(content.name)) {
        // For your consideration, the original code is:
        // nbElements++;
        // nbElements -= 2; //remove elements because of number literals
        decrementNbElements();
    }

    return result;
}


//Splits a custom string according to the 128 char limit and 3 args limit.
//This should be in utils/strings.ts but if I put it there it messes up the import order.
function splitCustomString(tokens: StringToken[], args: Ast[]): Ast {
    var result: string = "";
    var resultArgs: Ast[] = [];
    let argIndex = 0;
    var stringLength = 0;


    if (tokens.some(token => token.type !== "text" && token.type !== "arg")) {
        //Tag/holygrail tokens should be converted in the __customString__ function
        error("Custom string parser received a token that is not a text or arg token, please report to Zezombye");
    }
    if (tokens.some(token => token.type === "arg" && token.argIndex !== null)) {
        //All arg tokens should be unnumbered in the __customString__ function
        error("Custom string parser received an arg token with an argIndex, please report to Zezombye");
    }
    if (tokens.filter(t => t.type === "arg").length !== args.length) {
        //The number of arg tokens and args should always be equal, as they are duplicated in the __customString__ function
        console.log(tokens);
        console.log(args);
        error("Custom string parser received "+tokens.filter(t => t.type === "arg").length+" arg tokens but "+args.length+" args, please report to Zezombye");
    }

    //console.log("Parsing string tokens: ", structuredClone(tokens));
    //console.log("Args: ", args);

    //Compilation optimization: check if the string is "simple" (aka one token that doesn't need to be split)
    if (tokens.length === 1 && tokens[0].type === "text" && getUtf8Length(tokens[0].text) <= STR_MAX_LENGTH) {
        return new Ast("__customString__", [new Ast(tokens[0].text, [], [], "CustomStringLiteral"), getAstForNull(), getAstForNull(), getAstForNull()]);
    }

    for (let [i, token] of tokens.entries()) {
        let shouldSplitString = false;
        //console.log("Token: ", token);

        //Check text tokens

        //Check if the string would overflow if we add the token (adding a buffer for a potential "{0}" if there are more tokens remaining).
        //If the string would overflow, then add to the result the text of the token up to the overflow point, and remove that from the token text.
        if (token.type === "text" && stringLength + getUtf8Length(token.text) > STR_MAX_LENGTH - (i === tokens.length - 1 ? 0 : "{0}".length)) {
            shouldSplitString = true;
            let tokenText = [...token.text];
            //console.log(tokenText);
            let tokenSliceLength = 0;
            let sliceIndex = 0;
            for (let j = 0; stringLength + tokenSliceLength < STR_MAX_LENGTH - "{0}".length; j++) {
                tokenSliceLength += getUtf8Length(tokenText[j] + "");
                sliceIndex++;
            }
            result += tokenText.slice(0, sliceIndex).join("");
            token.text = tokenText.slice(sliceIndex).join("");
        }

        //Check arg tokens

        //Check if the string would overflow if there are tokens remaining and adding the arg + an additional arg would make the string overflow.
        //For maximum optimization, check if there is only 1 string token remaining and its length wouldn't make the string overflow.
        if (token.type === "arg"
            && i < tokens.length-1 && stringLength + "{0}{0}".length > STR_MAX_LENGTH
            && !(i === tokens.length-2 && tokens[tokens.length-1].type === "text" && stringLength+"{0}".length+getUtf8Length(tokens[tokens.length-1].text) <= STR_MAX_LENGTH)
        ) {
            shouldSplitString = true;
        }

        //Check if the string would overflow if we add the arg + an additional arg (if there are more tokens remaining).
        //Also check if the current arg is already in the resultArgs, in which case it will be reused and not go beyond the arg limit.
        if (token.type === "arg" && resultArgs.length >= STR_MAX_ARGS - 1 && !resultArgs.some(x => areAstsAlwaysEqual(x, args[argIndex]))) {
            //resultArgs.length === 2. We've got {0} {1} already, and the current token would be {2} if not string splitting.

            let remainingUniqueArgs: Ast[] = [];
            for (let j = argIndex; j < args.length; j++) {
                if (resultArgs.every(x => !areAstsAlwaysEqual(x, args[j])) && remainingUniqueArgs.every(x => !areAstsAlwaysEqual(x, args[j]))) {
                    remainingUniqueArgs.push(args[j]);
                    if (remainingUniqueArgs.length >= 2) {
                        //More than one unique arg is incoming, so we have to split
                        shouldSplitString = true;
                        break;
                    }
                }
            }
            if (!shouldSplitString) {
                //Check if the string would overflow if we add all remaining tokens (in which case it would need an additional format arg, so split now)
                let remainingStringLength = 0;
                for (let token2 of tokens.slice(i)) {
                    if (token2.type === "arg") {
                        remainingStringLength += "{0}".length;
                    } else {
                        remainingStringLength += getUtf8Length(token2.text);
                    }
                }
                if (stringLength + remainingStringLength > STR_MAX_LENGTH) {
                    shouldSplitString = true;
                }
            }
        }

        if (shouldSplitString) {
            result += "{" + resultArgs.length + "}";
            if (resultArgs.length > STR_MAX_ARGS-1) {
                error("Custom string parser returned '{" + (resultArgs.length) + "}' when deciding to split the string, please report to Zezombye");
            }
            resultArgs.push(splitCustomString(tokens.slice(i, tokens.length), args.slice(argIndex)));
            break;
        }

        if (token.type === "text") {
            result += token.text;
            stringLength += getUtf8Length(token.text);

        } else {
            let argToAdd = args[argIndex];
            let isArgReused = false;
            for (let j = 0; j < resultArgs.length; j++) {
                if (areAstsAlwaysEqual(resultArgs[j], argToAdd)) {
                    //We already have that arg, so just reuse it
                    result += "{" + j + "}";
                    if (j > STR_MAX_ARGS-1) {
                        error("Custom string parser returned '{" + j + "}' when reusing an argument, please report to Zezombye");
                    }
                    isArgReused = true;
                    break;
                }
            }
            if (!isArgReused) {
                result += "{" + resultArgs.length + "}";
                if (resultArgs.length > STR_MAX_ARGS-1) {
                    error("Custom string parser returned '{" + (resultArgs.length) + "}' when adding an argument, please report to Zezombye");
                }
                resultArgs.push(argToAdd);
            }
            stringLength += "{0}".length;
            argIndex++;
        }
    }

    while (resultArgs.length < STR_MAX_ARGS) {
        resultArgs.push(getAstForNull());
    }

    if (resultArgs.length !== STR_MAX_ARGS) {
        error("Custom string parser broke (string args length is " + resultArgs.length + "), please report to Zezombye");
    }

    if (getUtf8Length(result) > STR_MAX_LENGTH) {
        error("Custom string parser broke (string char length is "+getUtf8Length(result)+"), please report to Zezombye");
    }

    return new Ast("__customString__", [new Ast(result, [], [], "CustomStringLiteral")].concat(resultArgs));
}
