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
import { funcKw, defaultSubroutineNames } from "../globalVars";
import { OverPyCompiler } from "../godClasses";
import { functionNameToString, debug } from "../utils/logging";
import { Ast, astParsingFunctions } from "../utils/ast";
import { Argument, Value } from "../types";

import "./functions/__add__.ts";
import "./functions/__and__.ts";
import "./functions/__arrayContains__";
import "./functions/__assignTo__.ts";
import "./functions/__callSubroutine__.ts";
import "./functions/__customString__";
import "./functions/__del__.ts";
import "./functions/__dict__.ts";
import "./functions/__distanceTo__.ts";
import "./functions/__divide__.ts";
import "./functions/__doWhile__.ts";
import "./functions/__elif__.ts";
import "./functions/__else__.ts";
import "./functions/__equals__.ts";
import "./functions/__filteredArray__.ts";
import "./functions/__for__.ts";
import "./functions/__gamemode__.ts";
import "./functions/__globalVar__.ts";
import "./functions/__greaterThan__.ts";
import "./functions/__greaterThanOrEquals__.ts";
import "./functions/__hero__.ts";
import "./functions/__if__.ts";
import "./functions/__ifThenElse__.ts";
import "./functions/__inequals__.ts";
import "./functions/__lessThan__.ts";
import "./functions/__lessThanOrEquals__.ts";
import "./functions/__localizedString__";
import "./functions/__map__.ts";
import "./functions/__mappedArray__.ts";
import "./functions/__modifyVar__.ts";
import "./functions/__modulo__.ts";
import "./functions/__multiply__.ts";
import "./functions/__negate__.ts";
import "./functions/__not__.ts";
import "./functions/__number__.ts";
import "./functions/__or__.ts";
import "./functions/__playerVar__.ts";
import "./functions/__raiseToPower__.ts";
import "./functions/__rule__.ts";
import "./functions/__skip__.ts";
import "./functions/__subtract__.ts";
import "./functions/__switch__.ts";
import "./functions/__translatedString__";
import "./functions/__translateString__";
import "./functions/__valueInArray__.ts";
import "./functions/__while__.ts";
import "./functions/__xComponentOf__.ts";
import "./functions/__yComponentOf__.ts";
import "./functions/__zComponentOf__.ts";
import "./functions/.addToScore";
import "./functions/__all__";
import "./functions/__any__";
import "./functions/.append";
import "./functions/.charAt";
import "./functions/.concat";
import "./functions/.exclude";
import "./functions/.format.ts";
import "./functions/.getPlayerClosestToReticle";
import "./functions/.index.ts";
import "./functions/.last";
import "./functions/.remove";
import "./functions/.replace";
import "./functions/.setStatusEffect";
import "./functions/.setUltCharge";
import "./functions/.slice";
import "./functions/.split";
import "./functions/.startDamageOverTime.ts";
import "./functions/.startForcingOutlineFor.ts";
import "./functions/.startHealingOverTime.ts";
import "./functions/.substring";
import "./functions/.toArray";
import "./functions/abs.ts";
import "./functions/acos.ts";
import "./functions/acosDeg.ts";
import "./functions/addToTeamScore.ts";
import "./functions/all.ts";
import "./functions/any.ts";
import "./functions/arrayToString.ts";
import "./functions/asin.ts";
import "./functions/asinDeg.ts";
import "./functions/startRule.ts";
import "./functions/atan2.ts";
import "./functions/atan2Deg.ts";
import "./functions/break.ts";
import "./functions/ceil.ts";
import "./functions/chaseAtRate";
import "./functions/chaseOverTime";
import "./functions/compress";
import "./functions/compressed";
import "./functions/continue.ts";
import "./functions/cos.ts";
import "./functions/cosDeg.ts";
import "./functions/createBeam.ts";
import "./functions/createCasedProgressBarIwt.ts";
import "./functions/createEffect.ts";
import "./functions/createInWorldText";
import "./functions/createProgressBarInWorldText";
import "./functions/createWorkshopSetting.ts";
import "./functions/crossProduct.ts";
import "./functions/debug.ts";
import "./functions/decompressNumbers";
import "./functions/decompressVectors";
import "./functions/directionTowards.ts";
import "./functions/distance.ts";
import "./functions/dotProduct.ts";

//Note: eventPlayer MUST be before the other event-related functions otherwise the overrides don't work
import "./functions/eventPlayer.ts";
import "./functions/attacker.ts";
import "./functions/eventAbility.ts";
import "./functions/eventDamage.ts";
import "./functions/eventDirection.ts";
import "./functions/eventHealing.ts";
import "./functions/eventWasCriticalHit.ts";
import "./functions/eventWasEnvironment.ts";
import "./functions/eventWasHealthPack.ts";
import "./functions/healee.ts";
import "./functions/healer.ts";
import "./functions/victim.ts";

import "./functions/floor.ts";
import "./functions/getClosestPlayer";
import "./functions/getCurrentMap";
import "./functions/getFarthestPlayer";
import "./functions/getOppositeTeam.ts";
import "./functions/hsl";
import "./functions/hudText";
import "./functions/len.ts";
import "./functions/log.ts";
import "./functions/magnitude";
import "./functions/max.ts";
import "./functions/min.ts";
import "./functions/normalize.ts";
import "./functions/playEffect.ts";
import "./functions/progressBarHud";
import "./functions/round.ts";
import "./functions/rgb.ts";
import "./functions/sin.ts";
import "./functions/sinDeg.ts";
import "./functions/sorted.ts";
import "./functions/spacesForLength.ts";
import "./functions/spacesForString.ts";
import "./functions/splitDictArray";
import "./functions/sqrt.ts";
import "./functions/strContains.ts";
import "./functions/strLen.ts";
import "./functions/strVisualLength.ts";
import "./functions/tan.ts";
import "./functions/tanDeg.ts";
import "./functions/vect.ts";
import "./functions/vectorTowards.ts";
import "./functions/wait";
import "./functions/waitUntil.ts";
import { opyMacros } from "../data/opy/macros";
import { upperCaseToCamelCase } from "../utils/other";

OverPyCompiler.prototype.parseAstRules = function(rules: Ast[]) {
    var rulesResult: Ast[] = [];
    for (var rule of rules) {
        this.fileStack = rule.fileStack;

        if (rule.name === "__disableOptimizations__") {this.enableOptimization = false; rulesResult.push(rule); continue;}
        if (rule.name === "__enableOptimizations__") {this.enableOptimization = true; rulesResult.push(rule); continue;}
        if (rule.name === "__disableOptimizeForSize__") {this.optimizeForSize = false; rulesResult.push(rule); continue;}
        if (rule.name === "__enableOptimizeForSize__") {this.optimizeForSize = true; rulesResult.push(rule); continue;}
        if (rule.name === "__disableOptimizeStrict__") {this.optimizeStrict = false; rulesResult.push(rule); continue;}
        if (rule.name === "__enableOptimizeStrict__") {this.optimizeStrict = true; rulesResult.push(rule); continue;}
        if (rule.name === "__rulePrefix__") {rulesResult.push(rule); continue;}
        if (rule.name === "__pushRulePrefixStack__") {rulesResult.push(rule); continue;}
        if (rule.name === "__popRulePrefixStack__") {rulesResult.push(rule); continue;}

        //Resolve macros in case macros have annotations
        for (let i = 0; i < rule.children.length; i++) {
            this.fileStack = rule.children[i].fileStack;
            if (rule.children[i].name in this.astMacros) {
                let macroLines = this.parseAstMacro(rule.children[i]);
                for (let line of macroLines) {
                    line.fileStack = rule.children[i].fileStack;
                    line.comment = rule.children[i].comment;
                    line.parent = rule;
                }
                rule.children.splice(i, 1, ...macroLines);
                i--;
            }
        }

        //Parse annotations
        let i = 0;
        for (; i < rule.children.length; i++) {
            if (!rule.children[i].name.startsWith("@")) {
                break;
            }
            this.fileStack = rule.children[i].fileStack;

            if (["@Name", "@Event", "@Team", "@Slot", "@Hero"].includes(rule.children[i].name)) {
                const annotationToPropMap: Record<string, { prop: string; display: string }> = {
                    "@Name": { prop: "name", display: "name" },
                    "@Event": { prop: "event", display: "event" },
                    "@Team": { prop: "eventTeam", display: "event team" },
                    "@Slot": {
                        prop: "eventPlayer",
                        display: "event player (@Hero/@Slot)",
                    },
                    "@Hero": {
                        prop: "eventPlayer",
                        display: "event player (@Hero/@Slot)",
                    },
                };

                if (rule.children[i].args.length === 3 && (rule.children[i].args[0].name === "Team" || rule.children[i].args[0].name === "Hero") && rule.children[i].args[1].name === ".") {
                    rule.children[i].args = [rule.children[i].args[2]];
                    rule.children[i].args[0].name = upperCaseToCamelCase(rule.children[i].args[0].name);
                }

                if (rule.children[i].name === "@Hero") {
                    //legacy hero names
                    if (rule.children[i].args[0].name === "mccree") {
                        rule.children[i].args[0].name = "cassidy";
                    }
                    if (rule.children[i].args[0].name === "hammond") {
                        rule.children[i].args[0].name = "wreckingBall";
                    }
                }

                if (rule.children[i].args.length !== 1) {
                    this.error("Annotation '" + rule.children[i].name + "' takes 1 argument, received " + rule.children[i].args.length);
                }
                if (annotationToPropMap[rule.children[i].name].prop in rule.ruleAttributes) {
                    this.error("Rule " + annotationToPropMap[rule.children[i].name].display + " was already declared");
                }

                if (rule.children[i].name === "@Name") {
                    if (rule.children[i].args[0].name !== "__customString__") {
                        this.error("Expected a string as argument of '@Name'");
                    }
                    if (rule.children[i].args[0].args.length !== 1) {
                        this.error("Argument of '@Name' must be a string literal without formatters");
                    }
                    rule.ruleAttributes[annotationToPropMap[rule.children[i].name].prop] = rule.children[i].args[0].args[0].name;
                } else {
                    rule.ruleAttributes[annotationToPropMap[rule.children[i].name].prop] = rule.children[i].args[0].name;
                }
            } else if (rule.children[i].name === "@SuppressWarnings") {
                if (rule.children[i].args.length < 1) {
                    this.error("Annotation '" + rule.children[i].name + "' takes at least 1 argument, received " + rule.children[i].args.length);
                }
                for (var arg of rule.children[i].args) {
                    this.suppressedWarningTypes.push(arg.name);
                }
            } else if (rule.children[i].name === "@Disabled") {
                rule.ruleAttributes.isDisabled = true;
            } else if (rule.children[i].name === "@Delimiter") {
                rule.ruleAttributes.isDelimiter = true;
            } else if (rule.children[i].name === "@NewPage") {
                if (rule.children[i].args.length > 1) {
                    this.error("Annotation '@NewPage' takes at most 1 argument, received " + rule.children[i].args.length);
                }
                var fillerName = "";
                if (rule.children[i].args.length > 0) {
                    if (rule.children[i].args[0].name !== "__customString__") {
                        this.error("Expected a string as argument of '@NewPage'");
                    }
                    if (rule.children[i].args[0].args.length !== 1) {
                        this.error("Argument of '@NewPage' must be a string literal without formatters");
                    }
                    fillerName = rule.children[i].args[0].args[0].name;
                }
                while (rulesResult.filter((x) => x.name === "__rule__").length % 100 !== 0 || rulesResult.filter((x) => x.name === "__rule__").length === 0) {
                    var emptyRule = this.Ast("__rule__");
                    emptyRule.ruleAttributes = {
                        isDelimiter: true,
                        isDisabled: fillerName === "",
                        name: fillerName,
                        event: "global",
                    };
                    rulesResult.push(emptyRule);
                }
            } else if (rule.children[i].name === "@Condition") {
                if (!("conditions" in rule.ruleAttributes)) {
                    rule.ruleAttributes.conditions = [];
                }
                if (!("conditionComments" in rule.ruleAttributes)) {
                    rule.ruleAttributes.conditionComments = [];
                }
                rule.ruleAttributes.conditions.push(rule.children[i].args[0]);
                rule.ruleAttributes.conditionComments.push(rule.children[i].comment);
            } else {
                this.error("Unknown annotation '" + rule.children[i].name + "'");
            }
        }
        //Remove the annotations from the children
        rule.children = rule.children.slice(i);
        this.fileStack = rule.fileStack;

        if (rule.name === "__rule__") {
            if (rule.ruleAttributes.event === undefined) {
                rule.ruleAttributes.event = "global";
            }
            if (rule.ruleAttributes.event === "global") {
                if (rule.ruleAttributes.eventTeam !== undefined || rule.ruleAttributes.eventPlayer !== undefined) {
                    this.error("Cannot declare event team or event player with event type '" + rule.ruleAttributes.event + "'");
                }
            } else {
                if (rule.ruleAttributes.eventTeam === undefined) {
                    rule.ruleAttributes.eventTeam = "all";
                }
                if (rule.ruleAttributes.eventPlayer === undefined) {
                    rule.ruleAttributes.eventPlayer = "all";
                }
            }
        } else if (rule.name === "__def__") {
            if (rule.ruleAttributes.event !== undefined) {
                this.error("Cannot declare event for a subroutine");
            }
            if (rule.ruleAttributes.conditions !== undefined) {
                this.error("Cannot declare rule conditions for a subroutine");
            }
            rule.ruleAttributes.event = "__subroutine__";
            if (rule.ruleAttributes.eventTeam !== undefined || rule.ruleAttributes.eventPlayer !== undefined) {
                this.error("Cannot declare event team or event player for a subroutine");
            }
            if (rule.ruleAttributes.name === undefined) {
                rule.ruleAttributes.name = "Subroutine " + rule.ruleAttributes.subroutineName;
            }
            
            if (defaultSubroutineNames.includes(rule.ruleAttributes.subroutineName)) {
                //Add the subroutine as it doesn't already exist (else it would've been caught by the for)
                //However, only do this if it is a default subroutine name
                this.addSubroutine(rule.ruleAttributes.subroutineName, defaultSubroutineNames.indexOf(rule.ruleAttributes.subroutineName), rule.fileStack);
            }
            rule.name = "__rule__";
            rule.originalName = "__def__";
        } else if (rule.name in this.astMacros) {
            rulesResult.push(...this.parseAstRules(this.parseAstMacro(rule)));
            continue;
        } else if (rule.name === "pass") {
            continue;
        } else {
            const usageFrame = rule.fileStack.find((frame) => frame.staticMember);
            this.error("Unexpected function '" + rule.name + "' outside a rule", usageFrame ? [usageFrame] : rule.fileStack);
        }

        this.currentRuleName = rule.ruleAttributes.name;
        this.currentRuleEvent = rule.ruleAttributes.event;
        this.currentRuleLabelAccess = {};
        this.currentRuleHasVariableGoto = false;

        //Parse conditions now that we extracted the event (so we yield a proper error with event-related values)
        if (rule.ruleAttributes.conditions !== undefined) {
            for (let i = 0; i < rule.ruleAttributes.conditions.length; i++) {
                rule.ruleAttributes.conditions[i] = this.parseAst(rule.ruleAttributes.conditions[i]);
                rule.ruleAttributes.conditions[i].comment = rule.ruleAttributes.conditionComments[i];
            }
        }

        rulesResult.push(this.parseAst(rule));
    }
    return rulesResult;
}

OverPyCompiler.prototype.parseAst = function(content: Ast) {
    this.fileStack = content.fileStack;
    debug("Parsing AST of '" + content.name + "'");

    content.wasParsed = true;

    if (!(content.args instanceof Array)) {
        this.error("Function '" + content.name + "' has '" + content.args + "' for args, expected array");
    }
    if (!(content.children instanceof Array)) {
        this.error("Function '" + content.name + "' has '" + content.children + "' for args, expected array");
    }
    if (content.name.startsWith("@") && !this.isTypeSuitable("CustomStringLiteral", content.type)) {
        //Annotations are processed in the parseAstRules function. If we encounter an annotation here, then it wasn't at the beginning of a rule.
        this.error("Annotations must be at the beginning of the rule");
    }

    //Skip if it's a literal, a type literal, or a constant
    if (typeof content.type === "string" && !["Hero", "Map", "Gamemode", "Team", "Button", "Color"].includes(content.type)) {
        if (["IntLiteral", "UnsignedIntLiteral", "SignedIntLiteral", "FloatLiteral", "UnsignedFloatLiteral", "SignedFloatLiteral", "GlobalVariable", "PlayerVariable", "Subroutine", "HeroLiteral", "MapLiteral", "GamemodeLiteral", "TeamLiteral", "ButtonLiteral", "StringLiteral", "CustomStringLiteral", "LocalizedStringLiteral"].concat(Object.keys(constantValues)).includes(content.type)) {
            return content;
        }
    }

    //Skip if it's a type (but not an enum as we need to parse those ASTs)
    if (content.type === "Type" && content.name !== "__enumType__") {
        return content;
    }

    //For labels and dict keys, do nothing.
    if (content.type === "Label" || content.type === "DictKey") {
        return content;
    }

    if (!(content.name in funcKw) && !(content.name in this.astMacros)) {
        this.error("Unknown function '" + content.name + "'");
    }

    //Normalize arguments
    if (content.name === "__for__" && content.args.length !== 4) {
        if (content.args.length !== 1) {
            this.error("Function '" + content.name + "' takes 1 argument, received " + content.args.length);
        }
        //Check for right arguments.
        if (content.args[0].name !== "__arrayContains__") {
            this.error("Expected the 'in' operator within 'for' directive, but got " + functionNameToString(content.args[0]), content.args[0].fileStack);
        }
        if (content.args[0].args.length !== 2) {
            this.error("Operator 'in' takes 2 operands, received " + content.args[0].args.length, content.args[0].fileStack);
        }
        if (content.args[0].args[0].name !== "range") {
            this.error("Expected the 'range' function for the 2nd operand of the 'in' operator, but got " + functionNameToString(content.args[0].args[0]), content.args[0].args[0].fileStack);
        }

        if (content.args[0].args[0].args.length < 1 || content.args[0].args[0].args.length > 3) {
            this.error("Function 'range' takes 1 to 3 arguments, received " + content.args[0].args[0].args.length, content.args[0].args[0].fileStack);
        }
        if (content.args[0].args[0].args.length === 1) {
            content.args[0].args[0].args.unshift(this.getAstFor0());
        }
        if (content.args[0].args[0].args.length === 2) {
            content.args[0].args[0].args.push(this.getAstFor1());
        }
        //for (i in range(1,2,3)) -> for(i, 1, 2, 3)
        content.args = [content.args[0].args[1], content.args[0].args[0].args[0], content.args[0].args[0].args[1], content.args[0].args[0].args[2]];
    }



    if (![".format", "__customString__", "__localizedString__", "__array__", "__dict__", "__enumType__", "__translatedString__", "min", "max"].includes(content.name)) {
        if (content.name in this.astMacros) {
            let nbExpectedArgs = this.astMacros[content.name].args.length;
            if (content.args.length !== nbExpectedArgs) {
                this.error("Macro '" + content.name + "' takes " + nbExpectedArgs + " arguments, received " + content.args.length);
            }
        } else {

            let nbExpectedArgs = funcKw[content.name]?.args?.length ?? 0;
            if (content.args.length !== nbExpectedArgs) {
                this.error("Function '" + content.name + "' takes " + nbExpectedArgs + " arguments, received " + content.args.length);
            }
        }
    }

    setClientSideReevaluatedArgIndexes(content);

    //Parse args
    for (var i = 0; i < content.args.length; i++) {
        content.argIndex = i;
        content.args[i].parent = content;
        if (!content.args[i].wasParsed) {
            content.args[i] = this.parseAst(content.args[i]);
        }
    }
    content.argIndex = 0;

    //Manually check types and arguments for the functions that can take an infinite number of arguments.
    if (content.name === ".format") {
        if (content.args.length < 1) {
            this.error("Function '.format' takes at least 1 argument, received " + content.args.length);
        }
        //Check types
        if (!this.isTypeSuitable(funcKw[content.name]?.args?.[0].type ?? "", content.args[0].type)) {
            this.warn("w_type_check", this.getTypeCheckFailedMessage(content, 0, funcKw[content.name]?.args?.[0].type, content.args[0]), content.args[0].fileStack);
        }
        for (var i = 1; i < content.args.length; i++) {
            if (!this.isTypeSuitable(funcKw[content.name]?.args?.[1].type, content.args[i].type)) {
                this.warn("w_type_check", this.getTypeCheckFailedMessage(content, i, funcKw[content.name]?.args?.[1].type, content.args[i]), content.args[i].fileStack);
            }
        }
    } else if (["__array__", "__dict__", "__enumType__", "__customString__", "__localizedString__", "__translatedString__", "min", "max"].includes(content.name)) {
        //Check types
        for (var i = 0; i < content.args.length; i++) {
            if (!this.isTypeSuitable(funcKw[content.name]?.args?.[0].type, content.args[i].type)) {
                this.warn("w_type_check", this.getTypeCheckFailedMessage(content, i, funcKw[content.name]?.args?.[0].type, content.args[i]), content.args[i].fileStack);
            }
        }
    } else if (content.name in this.astMacros) {
        //Do nothing, we cannot check types of a user-defined macro
    } else {
        if (funcKw[content.name].args !== null) {
            let args = funcKw[content.name].args as Argument[];
            //Generic type check
            for (var i = 0; i < content.args.length; i++) {
                if (!this.isTypeSuitable(args[i].type, content.args[i].type)) {
                    //Throw an error for when a literal is expected
                    if (Object.keys(constantValues).includes(args[i].type)) {
                        this.error(this.getTypeCheckFailedMessage(content, i, args[i].type, content.args[i]), content.args[i].fileStack);
                    } else {
                        //this.warn("w_type_check", getTypeCheckFailedMessage(content, i, funcKw[content.name].args[i].type, content.args[i]));
                    }
                }
            }
        }
    }

    //Set expected type
    if (!["__rule__", "__settings__", "pass"].includes(content.name) && !content.parent) {
        this.error("No parent found for '" + content.name + "'");
    }
    if (content.name !== "__rule__" && content.parent !== undefined && content.parent.argIndex !== -1) {
        if (content.parent.name === ".format" && content.parent.argIndex > 0) {
            content.expectedType = funcKw[content.parent.name].args?.[1].type ?? "__INVALID__";
        } else if (["__array__", "__dict__", "__enumType__", "__customString__", "__localizedString__", "__translatedString__", "min", "max"].includes(content.parent.name)) {
            content.expectedType = funcKw[content.parent.name].args?.[0].type ?? "__INVALID__";
        } else if (content.parent.name === "@Condition") {
            content.expectedType = "bool";
        } else if (content.parent.name in funcKw) {
            content.expectedType = funcKw[content.parent.name].args?.[content.parent.argIndex].type ?? "__INVALID__";
        } else if (content.parent.name in this.astMacros) {
            content.expectedType = this.astMacros[content.parent.name].args[content.parent.argIndex].type;
        } else {
            this.error("Unknown parent name '" + content.parent.name + "'");
        }
    }

    content.argIndex = -1;

    let oldEnableOptimization = this.enableOptimization;
    let oldOptimizeForSize = this.optimizeForSize;
    let oldOptimizeStrict = this.optimizeStrict;

    for (var i = 0; i < content.children.length; i++) {
        if (content.children[i].name === "__disableOptimizations__") {this.enableOptimization = false;continue;}
        if (content.children[i].name === "__enableOptimizations__") {this.enableOptimization = true;continue;}
        if (content.children[i].name === "__disableOptimizeForSize__") {this.optimizeForSize = false;continue;}
        if (content.children[i].name === "__enableOptimizeForSize__") {this.optimizeForSize = true;continue;}
        if (content.children[i].name === "__disableOptimizeStrict__") {this.optimizeStrict = false;continue;}
        if (content.children[i].name === "__enableOptimizeStrict__") {this.optimizeStrict = true;continue;}
        content.childIndex = i;
        let childComment: string | undefined = undefined;
        if (content.name === "__rule__") {
            childComment = content.children[i].comment;
        }
        content.children[i].parent = content;

        //Safeguard to prevent parsing the same thing twice (and eg ending up with 3 ends for an "if" if the instruction was parsed then moved by a parent instruction).
        if (!content.children[i].wasParsed) {
            content.children[i] = this.parseAst(content.children[i]);
            content.children[i].parent = content;
            content.children[i].wasParsed = true;
        }
        if (childComment) {
            content.children[i].comment = childComment;
        }
    }
    this.enableOptimization = oldEnableOptimization;
    this.optimizeForSize = oldOptimizeForSize;
    this.optimizeStrict = oldOptimizeStrict;
    content.childIndex = 0;

    this.fileStack = content.fileStack;


    //Optimize, and re-optimize if the function name changed
    let oldContentName = content.name;
    let oldOriginalName = content.originalName || content.name;
    //console.log("original name: "+oldOriginalName);
    let parent = content.parent;
    if (!content.doNotReparse && (content.name in astParsingFunctions || content.name in opyMacros || content.name in this.astMacros)) {
        if (content.name in astParsingFunctions) {
            content = astParsingFunctions[content.name](content, this);
        } else if (content.name in this.astMacros) {
            let macroLines = this.parseAstMacro(content);
            if (content.parent === undefined) {
                throw this.error("Parent is undefined in ast macro");
            }
            content.parent.children.splice(content.parent.childIndex + 1, 0, ...macroLines.slice(1));
            content = macroLines[0];
        } else {
            content = this.parseOpyMacroAst(content);
        }
        if (content.name !== oldContentName) {
            oldContentName = content.name;
            content.parent = parent;
            if (!content.doNotReparse) {
                content = this.parseAst(content); //re-optimize in depth
            }
            //console.log("Setting original name of '" + content.name + "' to '" + oldOriginalName+"'");
            content.originalName = oldOriginalName;
        }
    }

    return content;
}


export function setClientSideReevaluatedArgIndexes(content: Ast) {

    //This is not fully accurate, for now I only tested the string functions. Other reevaluated functions must be tested to check if they are reevaluated client side.

    let reevaluationToArgNames: Record<string, string[]> = {
        "none": [],

        "position_and_radius": ["startPosition", "endPosition", "position", "radius"],
        "position_radius_and_color": ["startPosition", "endPosition", "position", "radius", "color"],
        "visibility_position_and_radius": ["visibleTo", "startPosition", "endPosition", "position", "radius"],
        "visibility_position_radius_and_color": ["visibleTo", "startPosition", "endPosition", "position", "radius", "color"],

        "direction_and_turn_rate": ["direction", "turnRate"],

        "visibility_sort_order_and_string": ["visibleTo", "sortOrder", "text", "header", "subheader"],
        "color": ["color", "textColor", "headerColor", "subheaderColor", "progressBarColor"],
        "sort_order": ["sortOrder"],
        "sort_order_and_color": ["sortOrder", "color", "textColor", "headerColor", "subheaderColor"],
        "sort_order_and_string": ["sortOrder", "text", "header", "subheader"],
        "sort_order_string_and_color": ["sortOrder", "text", "header", "subheader", "color", "textColor", "headerColor", "subheaderColor"],
        "string": ["text", "header", "subheader"],
        "string_and_color": ["text", "header", "subheader", "color", "textColor", "headerColor", "subheaderColor"],
        "visibility": ["visibleTo"],
        "visibility_and_color": ["visibleTo", "color", "textColor", "headerColor", "subheaderColor", "progressBarColor"],
        "visibility_and_sort_order": ["visibleTo", "sortOrder"],
        "visibility_and_string": ["visibleTo", "text", "header", "subheader"],
        "visibility_sort_order_and_color": ["visibleTo", "sortOrder", "color", "textColor", "headerColor", "subheaderColor"],
        "visibility_sort_order_string_and_color": ["visibleTo", "sortOrder", "text", "header", "subheader", "color", "textColor", "headerColor", "subheaderColor"],
        "visibility_string_and_color": ["visibleTo", "text", "header", "subheader", "color", "textColor", "headerColor", "subheaderColor"],

        "position_and_color": ["startPosition", "endPosition", "position", "color", "textColor", "progressBarColor"],
        "visibility_and_position": ["visibleTo", "startPosition", "endPosition", "position"],
        "visibility_position_and_color": ["visibleTo", "startPosition", "endPosition", "position", "color", "textColor", "progressBarColor"],

        "values": ["value", "text"],
        "values_and_color": ["value", "text", "progressBarColor", "textColor"],
        "visibility_and_values": ["visibleTo", "value", "text"],
        "visibility_values_and_color": ["visibleTo", "value", "text", "progressBarColor", "textColor"],

        "position": ["position"],
        "position_and_values": ["position", "values", "text"],
        "position_values_and_color": ["position", "values", "text", "progressBarColor", "textColor"],
        "visibility_position_and_values": ["visibleTo", "position", "values", "text"],
        "visibility_position_values_and_color": ["visibleTo", "position", "values", "text", "progressBarColor", "textColor"],

        "direction_and_magnitude": ["direction", "magnitude"],

        "visibility_position_and_string": ["visibleTo", "position", "text"],
        "visibility_position_string_and_color": ["visibleTo", "position", "text", "color"],

        "visibility_position_direction_and_size": ["visibleTo", "position", "direction", "oversize"],
        "position_direction_and_size": ["position", "direction", "oversize"],
        "visibility_friendliness_position_direction_and_size": ["visibleTo", "friendlyTo", "position", "direction", "oversize"],
        "friendliness_position_direction_and_size": ["friendlyTo", "position", "direction", "oversize"],
        "visibility_and_friendliness": ["visibleTo", "friendlyTo"],
        "friendliness": ["friendlyTo"],
    };

    //Functions which have args that always reeval
    let reevaluatedFunctionArgs: Record<string, string[]> = {
        "debug": ["value"],
        "print": ["text"],
        "bigMessage": ["text"],
        "smallMessage": ["text"],
    };

    //Functions which have an argument for reevaluation
    let reevaluatedFunctions: String[] = [
        "createCasedProgressBarIwt",
        "hudHeader",
        "hudSubtext",
        "hudSubheader",
        "hudText",
        "createBeam",
        "createEffect",
        "createIcon",
        "createInWorldText",
        "createProgressBarInWorldText",
        "progressBarHud",
        "setObjectiveDescription",
        "createProjectileEffect",
        ".startFacing",
        ".startThrottleInDirection",
    ];

    if (content.name in reevaluatedFunctionArgs) {
        content.clientSideReevaluatedArgIndexes = reevaluatedFunctionArgs[content.name].map(x => {
            let argIndex = funcKw[content.name].args?.findIndex(y => y.name === x);
            if (argIndex === undefined || argIndex === -1) {
                throw content.compiler.error("Could not find argument '" + x + "' in function '" + content.name + "'");
            }
            return argIndex;
        });
        //console.log("Setting reevaluated args for '" + content.name + "' to " + content.clientSideReevaluatedArgIndexes);

    } else if (reevaluatedFunctions.includes(content.name)) {
        let reevaluationValue = content.args[funcKw[content.name].args?.findIndex(x => x.name === "reevaluation") ?? content.compiler.error("Could not find reevaluation argument in function '" + content.name + "'")].name.toLowerCase();
        if (!(reevaluationValue in reevaluationToArgNames)) {
            throw content.compiler.error("Unknown reevaluation value '" + reevaluationValue + "' in function '" + content.name + "'");
        }
        //Do not throw error if we cannot find the argument name, as for convenience the reevaluation args are merged among the different types, so some arg names may not exist
        content.clientSideReevaluatedArgIndexes = reevaluationToArgNames[reevaluationValue].map(x => funcKw[content.name].args?.findIndex(y => y.name === x)).filter(x => x !== undefined && x !== -1) as number[];
        //console.log("Setting reevaluated args for '" + content.name + "' to " + content.clientSideReevaluatedArgIndexes);
    }
}
