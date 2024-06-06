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
import { funcKw } from "../data/other";
import { fileStack, suppressedWarnings, currentRuleEvent, currentRuleLabels, currentRuleLabelAccess, currentRuleHasVariableGoto, astParsingFunctions, setFileStack, setCurrentRuleEvent, setCurrentRuleLabels, clearRuleLabelAccess, resetRuleHasVariableGoto, resetCurrentRuleLabels } from "../globalVars";
import { error, functionNameToString, warn, getTypeCheckFailedMessage, debug } from "../utils/logging";
import { isTypeSuitable } from "../utils/types";
import { Ast, getAstFor0, getAstFor0_016, getAstFor1, getAstFor255, getAstForE } from "../utils/ast";
import { Argument, Value } from "../types";

import "./functions/abs.ts";
import "./functions/acos.ts";
import "./functions/acosDeg.ts";
import "./functions/addToTeamScore.ts";
import "./functions/all.ts";
import "./functions/any.ts";
import "./functions/asin.ts";
import "./functions/asinDeg.ts";
import "./functions/atan2.ts";
import "./functions/atan2Deg.ts";
import "./functions/attacker.ts";
import "./functions/break.ts";
import "./functions/ceil.ts";
import "./functions/continue.ts";
import "./functions/cos.ts";
import "./functions/cosDeg.ts";
import "./functions/createBeam.ts";
import "./functions/createEffect.ts";
import "./functions/createWorkshopSetting.ts";
import "./functions/crossProduct.ts";
import "./functions/directionTowards.ts";
import "./functions/distance.ts";
import "./functions/dotProduct.ts";
import "./functions/eventPlayer.ts";
import "./functions/floor.ts";
import "./functions/getAllPlayers.ts";
import "./functions/getOppositeTeam.ts";
import "./functions/healee.ts";
import "./functions/healer.ts";
import "./functions/len.ts";
import "./functions/lineIntersectsSphere.ts";
import "./functions/log.ts";
import "./functions/max.ts";
import "./functions/min.ts";
import "./functions/normalize.ts";
import "./functions/playEffect.ts";
import "./functions/print.ts";
import "./functions/round.ts";
import "./functions/sin.ts";
import "./functions/sinDeg.ts";
import "./functions/sorted.ts";
import "./functions/sqrt.ts";
import "./functions/tan.ts";
import "./functions/tanDeg.ts";
import "./functions/vect.ts";
import "./functions/vectorTowards.ts";
import "./functions/victim.ts";
import "./functions/wait.ts";
import "./functions/waitUntil.ts";
import "./functions/_&addToScore.ts";
import "./functions/_&setStatusEffect.ts";
import "./functions/_&setUltCharge.ts";
import "./functions/_&toArray.ts";
import "./functions/__add__.ts";
import "./functions/__and__.ts";
import "./functions/__append__.ts";
import "./functions/__arraySlice__.ts";
import "./functions/__array__.ts";
import "./functions/__assignTo__.ts";
import "./functions/__chaseAtRate__.ts";
import "./functions/__chaseOverTime__.ts";
import "./functions/__del__.ts";
import "./functions/__dict__.ts";
import "./functions/__distanceTo__.ts";
import "./functions/__divide__.ts";
import "./functions/__doWhile__.ts";
import "./functions/__elif__.ts";
import "./functions/__else__.ts";
import "./functions/__equals__.ts";
import "./functions/__filteredArray__.ts";
import "./functions/__format__.ts";
import "./functions/__for__.ts";
import "./functions/__gamemode__.ts";
import "./functions/__getHitPosition__.ts";
import "./functions/__globalVar__.ts";
import "./functions/__greaterThanOrEquals__.ts";
import "./functions/__greaterThan__.ts";
import "./functions/__hero__.ts";
import "./functions/__ifThenElse__.ts";
import "./functions/__if__.ts";
import "./functions/__indexOfArrayValue__.ts";
import "./functions/__inequals__.ts";
import "./functions/__lastOf__.ts";
import "./functions/__lessThanOrEquals__.ts";
import "./functions/__lessThan__.ts";
import "./functions/__mappedArray__.ts";
import "./functions/__map__.ts";
import "./functions/__modifyVar__.ts";
import "./functions/__modulo__.ts";
import "./functions/__multiply__.ts";
import "./functions/__negate__.ts";
import "./functions/__not__.ts";
import "./functions/__number__.ts";
import "./functions/__or__.ts";
import "./functions/__playerVar__.ts";
import "./functions/__raiseToPower__.ts";
import "./functions/__remove__.ts";
import "./functions/__reverse__.ts";
import "./functions/__rule__.ts";
import "./functions/__skip__.ts";
import "./functions/__subtract__.ts";
import "./functions/__switch__.ts";
import "./functions/__valueInArray__.ts";
import "./functions/__wait__.ts";
import "./functions/__while__.ts";
import "./functions/__xComponentOf__.ts";
import "./functions/__yComponentOf__.ts";
import "./functions/__zComponentOf__.ts";

export function parseAstRules(rules: Ast[]) {

    var rulesResult: Ast[] = [];
    for (var rule of rules) {

        setFileStack(rule.fileStack);

        //Parse annotations
        var i = 0;
        for (; i < rule.children.length; i++) {

            if (!rule.children[i].name.startsWith("@")) {
                break;
            }
            setFileStack(rule.children[i].fileStack);

            if (["@Name", "@Event", "@Team", "@Slot", "@Hero"].includes(rule.children[i].name)) {
                const annotationToPropMap: Record<string, {prop: string, display: string}> = {
                    "@Name": {prop: "name", display: "name"},
                    "@Event": {prop: "event", display: "event"},
                    "@Team": {prop: "eventTeam", display: "event team"},
                    "@Slot": {prop: "eventPlayer", display: "event player (@Hero/@Slot)"},
                    "@Hero": {prop: "eventPlayer", display: "event player (@Hero/@Slot)"},
                };

                if (rule.children[i].args.length === 3 && (rule.children[i].args[0].name === "Team" || rule.children[i].args[0].name === "Hero") && rule.children[i].args[1].name === ".") {
                    rule.children[i].args = [rule.children[i].args[2]];
                    rule.children[i].args[0].name = rule.children[i].args[0].name.toLowerCase();
                }

                if (rule.children[i].args.length !== 1) {
                    console.log(rule.children[i].args);
                    error("Annotation '"+rule.children[i].name+"' takes 1 argument, received "+rule.children[i].args.length);
                }
                if (annotationToPropMap[rule.children[i].name].prop in rule.ruleAttributes) {
                    error("Rule "+annotationToPropMap[rule.children[i].name].display+" was already declared");
                }

                if (rule.children[i].name === "@Name") {
                    if (rule.children[i].args[0].type !== "StringLiteral") {
                        error("Expected a string as argument of '@Name'");
                    }
                    rule.ruleAttributes[annotationToPropMap[rule.children[i].name].prop] = rule.children[i].args[0].name;
                } else {
                    rule.ruleAttributes[annotationToPropMap[rule.children[i].name].prop] = rule.children[i].args[0].name;
                }

            } else if (rule.children[i].name === "@SuppressWarnings") {

                if (rule.children[i].args.length < 1) {
                    error("Annotation '"+rule.children[i].name+"' takes at least 1 argument, received "+rule.children[i].args.length);
                }
                for (var arg of rule.children[i].args) {
                    suppressedWarnings.push(arg.name);
                }

            } else if (rule.children[i].name === "@Disabled") {
                rule.ruleAttributes.isDisabled = true;

            } else if (rule.children[i].name === "@Delimiter") {
                rule.ruleAttributes.isDelimiter = true;

            } else if (rule.children[i].name === "@NewPage") {
                if (rule.children[i].args.length > 1) {
                    error("Annotation '@NewPage' takes at most 1 argument, received "+rule.children[i].args.length);
                }
                var fillerName = "";
                if (rule.children[i].args.length > 0) {
                    if (rule.children[i].args[0].type !== "StringLiteral") {
                        error("Expected a string as argument of '@NewPage'");
                    }
                    fillerName = rule.children[i].args[0].name;
                }
                while (rulesResult.filter(x => x.name === "__rule__").length % 100 !== 0 || rulesResult.filter(x => x.name === "__rule__").length === 0) {
                    var emptyRule = new Ast("__rule__");
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
                error("Unknown annotation '"+rule.children[i].name+"'");
            }
        }
        //Remove the annotations from the children
        rule.children = rule.children.slice(i);
        setFileStack(rule.fileStack);


        if (rule.name === "__rule__") {

            if (rule.ruleAttributes.event === undefined) {
                rule.ruleAttributes.event = "global";
            }
            if (rule.ruleAttributes.event === "global") {
                if (rule.ruleAttributes.eventTeam !== undefined || rule.ruleAttributes.eventPlayer !== undefined) {
                    error("Cannot declare event team or event player with event type '"+rule.ruleAttributes.event+"'");
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
                error("Cannot declare event for a subroutine");
            }
            if (rule.ruleAttributes.conditions !== undefined) {
                error("Cannot declare rule conditions for a subroutine");
            }
            rule.ruleAttributes.event = "__subroutine__";
            if (rule.ruleAttributes.eventTeam !== undefined || rule.ruleAttributes.eventPlayer !== undefined) {
                error("Cannot declare event team or event player for a subroutine");
            }
            if (rule.ruleAttributes.name === undefined) {
                rule.ruleAttributes.name = "Subroutine "+rule.ruleAttributes.subroutineName;
            }
            rule.name = "__rule__";
            rule.originalName = "__def__";
        } else {
            error("Unexpected function '"+rule.name+"' outside a rule");
        }

        setCurrentRuleEvent(rule.ruleAttributes.event);
        resetCurrentRuleLabels();
        clearRuleLabelAccess();
        resetRuleHasVariableGoto();

        //Parse conditions now that we extracted the event (so we yield a proper error with event-related values)
        if (rule.ruleAttributes.conditions !== undefined) {
            for (var i = 0; i < rule.ruleAttributes.conditions.length; i++) {
                rule.ruleAttributes.conditions[i] = parseAst(rule.ruleAttributes.conditions[i]);
                rule.ruleAttributes.conditions[i].comment = rule.ruleAttributes.conditionComments[i];
            }
        }

        rulesResult.push(parseAst(rule));
    }
    return rulesResult;
}

export function parseAst(content: Ast) {
    //console.log(currentRuleLabels);

    setFileStack(content.fileStack);
    debug("Parsing AST of '"+content.name+"'");

    if (!(content.args instanceof Array)) {
        error("Function '"+content.name+"' has '"+content.args+"' for args, expected array");
    }
    if (!(content.children instanceof Array)) {
        error("Function '"+content.name+"' has '"+content.children+"' for args, expected array");
    }
    if (content.name.startsWith("@") && !isTypeSuitable("StringLiteral", content.type)) {
        //Annotations are processed in the parseAstRules function. If we encounter an annotation here, then it wasn't at the beginning of a rule.
        error("Annotations must be at the beginning of the rule");
    }

    //Skip if it's a literal, a type literal, or a constant
    if (typeof content.type === "string" && !["Hero", "Map", "Gamemode", "Team", "Button", "Color"].includes(content.type)) {
        if ([
            "IntLiteral", "UnsignedIntLiteral", "SignedIntLiteral", "FloatLiteral", "UnsignedFloatLiteral", "SignedFloatLiteral",
            "GlobalVariable", "PlayerVariable", "Subroutine",
            "HeroLiteral", "MapLiteral", "GamemodeLiteral", "TeamLiteral", "ButtonLiteral",
        ].concat(Object.keys(constantValues)).includes(content.type)) {
            return content;
        }
    }

    //Skip if it's a type (but not an enum as we need to parse those ASTs)
    if (content.type === "Type" && content.name !== "__enumType__") {
        return content;
    }

    //For labels, do nothing.
    if (content.type === "Label") {
        return content;
    }

    //For string literals, check if they are a child of __format__ (or of a string function). If not, wrap them with the __format__ function.
    //Do not use isTypeSuitable as that can return true for "value".
    if (typeof content.type === "string" && ["StringLiteral", "LocalizedStringLiteral", "CustomStringLiteral", "FullwidthStringLiteral", "BigLettersStringLiteral", "PlaintextStringLiteral", "CaseSensitiveStringLiteral"].includes(content.type)) {
        if (content.parent && ["__format__", "__customString__", "__localizedString__"].includes(content.parent.name) && content.parent.argIndex === 0) {
            return content;
        } else {
            var tmpParent = content.parent;
            content = new Ast("__format__", [content]);
            content.parent = tmpParent;
        }
    }

    if (!(content.name in funcKw)) {
        error("Unknown function '"+content.name+"'");
    }

    if (content.name === "createWorkshopSetting") {
        if (content.args.length === 4) {
            content.args.push(getAstFor0());
        }
    }

    //Normalize arguments
    if (content.name === "__for__" && content.args.length !== 4) {

        if (content.args.length !== 1) {
            error("Function '"+content.name+"' takes 1 argument, received "+content.args.length);
        }
        //Check for right arguments.
        if (content.args[0].name !== "__arrayContains__") {
            error("Expected the 'in' operator within 'for' directive, but got "+functionNameToString(content.args[0]));
        }
        if (content.args[0].args.length !== 2) {
            error("Operator 'in' takes 2 operands, received "+content.args[0].args.length);
        }
        if (content.args[0].args[0].name !== "range") {
            error("Expected the 'range' function for the 2nd operand of the 'in' operator, but got "+functionNameToString(content.args[0].args[1]));
        }

        if (content.args[0].args[0].args.length < 1 || content.args[0].args[0].args.length > 3) {
            error("Function 'range' takes 1 to 3 arguments, received "+content.args[0].args[0].args.length);
        }
        if (content.args[0].args[0].args.length === 1) {
            content.args[0].args[0].args.unshift(getAstFor0());
        }
        if (content.args[0].args[0].args.length === 2) {
            content.args[0].args[0].args.push(getAstFor1());
        }
        //for (i in range(1,2,3)) -> for(i, 1, 2, 3)
        content.args = [
            content.args[0].args[1],
            content.args[0].args[0].args[0],
            content.args[0].args[0].args[1],
            content.args[0].args[0].args[2],
        ];
    } else if (["hudHeader", "hudSubheader", "hudSubtext"].includes(content.name)) {

        if (content.args.length < 6 || content.args.length > 7) {
            error("Function '"+content.name+"' takes 6 or 7 arguments, received " + content.args.length);
        }
        if (content.args.length === 6) {
            content.args.push(new Ast("DEFAULT", [], [], "SpecVisibility"));
        }

    } else if (content.name === "hudText") {
        if (content.args.length < 10 || content.args.length > 11) {
            error("Function '"+content.name+"' takes 10 or 11 arguments, received " + content.args.length);
        }
        if (content.args.length === 10) {
            content.args.push(new Ast("DEFAULT", [], [], "SpecVisibility"));
        }
    } else if (content.name === "log") {
        if (content.args.length < 1 || content.args.length > 2) {
            error("Function '"+content.name+"' takes 1 or 2 arguments, received " + content.args.length);
        }
        if (content.args.length === 1) {
            content.args.push(getAstForE());
        }
    } else if (content.name === "rgb") {
        if (content.args.length !== 3) {
            error("Function 'rgb' takes 3 arguments, received "+ content.args.length);
        }
        content.args.push(getAstFor255());
        content.name = "rgba";

    } else if (content.name === "_&startForcingOutlineFor") {
        if (content.args.length === 4) {
            content.args.push(new Ast("DEFAULT", [], [], "OutlineVisibility"));
        }

    } else if (content.name === "wait") {
        if (content.args.length > 2) {
            error("Function 'wait' takes 0 to 2 arguments, received "+ content.args.length);
        }
        if (content.args.length === 0) {
            content.args.push(getAstFor0_016());
        }
        if (content.args.length === 1) {
            content.args.push(new Ast("IGNORE_CONDITION", [], [], "Wait"));
        }
        content.name = "__wait__";
    }

    if (!["__format__", "__array__", "__dict__", "__enumType__"].includes(content.name)) {
        var nbExpectedArgs = (funcKw[content.name]?.args?.length ?? 0);
        if (content.args.length !== nbExpectedArgs) {
            error("Function '"+content.name+"' takes "+nbExpectedArgs+" arguments, received "+content.args.length);
        }
    }

    //Parse args
    for (var i = 0; i < content.args.length; i++) {
        content.argIndex = i;
        content.args[i].parent = content;
        content.args[i] = parseAst(content.args[i]);
    }
    content.argIndex = 0;

    //Manually check types and arguments for the __format__, __array__, __enumType__ or __dict__ functions, as they are the only functions that can take an infinite number of arguments.
    if (content.name === "__format__") {
        if (content.args.length < 1) {
            error("Function '__format__' takes at least 1 argument, received "+content.args.length);
        }
        //Check types
        if (!isTypeSuitable(funcKw[content.name]?.args?.[0].type ?? "", content.args[0].type)) {
            warn("w_type_check", getTypeCheckFailedMessage(content, 0, funcKw[content.name]?.args?.[0].type, content.args[0]));
        }
        for (var i = 1; i < content.args.length; i++) {
            if (!isTypeSuitable(funcKw[content.name]?.args?.[1].type, content.args[i].type)) {
                warn("w_type_check", getTypeCheckFailedMessage(content, i, funcKw[content.name]?.args?.[1].type, content.args[i]));
            }
        }

    } else if (content.name === "__array__" || content.name === "__dict__" || content.name === "__enumType__") {
        //Check types
        for (var i = 0; i < content.args.length; i++) {
            if (!isTypeSuitable(funcKw[content.name]?.args?.[0].type, content.args[i].type)) {
                warn("w_type_check", getTypeCheckFailedMessage(content, i, funcKw[content.name]?.args?.[0].type, content.args[i]));
            }
        }
    } else {
        if (funcKw[content.name].args !== null) {
            let args = funcKw[content.name].args as Argument[];
            //Generic type check
            for (var i = 0; i < content.args.length; i++) {
                if (!isTypeSuitable(args[i].type, args[i].type)) {
                    //Throw an error for when a literal is expected
                    if (Object.keys(constantValues).includes(args[i].type)) {
                        error(getTypeCheckFailedMessage(content, i, args[i].type, content.args[i]));
                    } else {
                        //warn("w_type_check", getTypeCheckFailedMessage(content, i, funcKw[content.name].args[i].type, content.args[i]));
                    }
                }
            }
        }
    }

    //Set expected type
    if (content.name !== "__rule__" && !content.parent) {
        error("No parent found for '"+content.name+"', please report to CactusPuppy");
    }
    if (content.name !== "__rule__" && content.parent !== undefined && content.parent.argIndex !== null) {
        if (content.parent.name === "__format__" && content.parent.argIndex > 0) {
            content.expectedType = funcKw[content.parent.name].args?.[1].type ?? "__INVALID__";
        } else if (content.parent.name === "__array__" || content.parent.name === "__dict__" || content.parent.name === "__enumType__") {
            content.expectedType = funcKw[content.parent.name].args?.[0].type ?? "__INVALID__";
        } else if (content.parent.name === "@Condition") {
            content.expectedType = "bool";
        } else if (content.parent.name in funcKw) {
            //console.log(content);
            content.expectedType = funcKw[content.parent.name].args?.[content.parent.argIndex].type ?? "__INVALID__";
        } else {
            error("Unknown parent name '"+content.parent.name+"'");
        }
    }

    content.argIndex = -1;
    for (var i = 0; i < content.children.length; i++) {
        content.childIndex = i;
        //console.log("name = "+content.name+", childIndex = "+content.childIndex+", children = "+content.children.map(x => x.name).join(", "))
        ///console.log("parsing "+content.children[i].name);
        let childComment: string | undefined = undefined;
        if (content.name === "__rule__") {
            childComment = content.children[i].comment;
        }
        content.children[i].parent = content;

        //Safeguard to prevent parsing the same thing twice (and eg ending up with 3 ends for an "if" if the instruction was parsed then moved by a parent instruction).
        if (!content.children[i].wasParsed) {
            content.children[i] = parseAst(content.children[i]);
            content.children[i].parent = content;
            content.children[i].wasParsed = true;
        }
        if (childComment) {
            content.children[i].comment = childComment;
        }
    }

    setFileStack(content.fileStack);

    //Optimize, and re-optimize if the function name changed
    var oldContentName = content.name;
    while (!content.doNotOptimize && content.name in astParsingFunctions) {
        content = astParsingFunctions[content.name](content);
        if (content.name !== oldContentName) {
            oldContentName = content.name;
        } else {
            break;
        }
    }
    content.childIndex = 0;

    return content;
}
