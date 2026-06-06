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
import { ruleKw, eventKw, eventTeamKw, eventPlayerKw } from "../data/other";
import { valueFuncKw } from "../data/values";
import { wsFuncKw, constantKw } from "../globalVars";
import { OverPyDecompiler } from "../godClasses";
import { Ast } from "../utils/ast";
import { debug, getInternalFileStack } from "../utils/logging";
import { isNumber } from "../utils/other";

OverPyDecompiler.prototype.decompileRuleToAst = function(content: string): Ast {
    //Reset rule-specific global variables
    this.decompilerGotos = [];
    this.nbTabs = 0;

    //Check for potential error
    if (this.currentArrayElementName !== "" && this.currentArrayIndexName !== "") {
        this.error("Current array element names weren't cleared");
    }

    var bracketPos = this.getBracketPositions(content);
    if (bracketPos.length !== 4) {
        this.error("Invalid rule (mismatched brackets): has " + bracketPos.length + " top-level brackets, should be 4");
    }

    var ruleAttributes: Record<string, any> = {};

    var ruleName = content.substring(bracketPos[0] + 1, bracketPos[1]);
    ruleAttributes.name = this.unescapeString(ruleName, false);

    var currentRuleIsDisabled = false;
    if (content.trim().startsWith(this.tows("__disabled__", ruleKw))) {
        currentRuleIsDisabled = true;
    }

    debug("Decompiling rule " + ruleName);

    try {

        var ruleContent = content.substring(bracketPos[2] + 1, bracketPos[3]);

        var bracketPos2 = [-1].concat(this.getBracketPositions(ruleContent));

        var eventInst: string[] = [];
        var conditions = "";
        var actions = "";

        for (var i = 0; i < bracketPos2.length - 2; i += 2) {
            var fieldName = this.topy(ruleContent.substring(bracketPos2[i] + 1, bracketPos2[i + 1]), ruleKw);
            if (fieldName === "__event__") {
                eventInst = this.splitInstructions(ruleContent.substring(bracketPos2[i + 1] + 1, bracketPos2[i + 2]));
            } else if (fieldName === "__conditions__") {
                //conditions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
                conditions = "conditions {" + ruleContent.substring(bracketPos2[i + 1] + 1, bracketPos2[i + 2]) + "}";
            } else if (fieldName === "__actions__") {
                //actions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
                actions = "actions {" + ruleContent.substring(bracketPos2[i + 1] + 1, bracketPos2[i + 2]) + "}";
            } else {
                this.error("Unknown field name " + fieldName + " in rule " + ruleName);
            }
        }

        //Parse events
        if (eventInst.length > 0) {
            var eventName = this.topy(eventInst[0], eventKw);
            ruleAttributes.event = eventName;

            if (eventName === "__subroutine__") {
                if (eventInst.length !== 2) {
                    this.error("Malformed subroutine event");
                }
                var subroutineName = this.translateSubroutineToPy(eventInst[1].trim(), getInternalFileStack());
                ruleAttributes.subroutineName = subroutineName;
            } else {
                if (eventInst.length > 1) {
                    //There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
                    ruleAttributes.eventTeam = this.topy(eventInst[1], eventTeamKw);
                    ruleAttributes.eventPlayer = this.topy(eventInst[2], eventPlayerKw);
                }
            }
        }

        //Parse conditions
        if (conditions !== "") {
            ruleAttributes.conditions = this.decompileConditions(conditions);
        }

        //Parse actions
        let astActions = [] as Ast[];
        if (actions !== "") {
            astActions = this.decompileActions(actions);
        }

        var astRule = this.Ast("__rule__", [], astActions);
        astRule.ruleAttributes = ruleAttributes;
        astRule.ruleAttributes.isDisabled = currentRuleIsDisabled;

        return astRule;
    } catch (e) {
        throw this.error("In rule "+ruleName+": " + e);
    }

}

OverPyDecompiler.prototype.decompileConditions = function(content: string) {
    var conditions = this.splitInstructions(content.substring(content.indexOf("{") + 1, content.lastIndexOf("}")));

    var astConditions = [];
    for (let condition of conditions) {
        condition = condition.trim();

        let currentConditionComment: string = "";
        let isCurrentConditionDisabled = false;
        //Check if there is a comment
        if (condition.startsWith('"')) {
            var conditionComment = this.getPrefixString(condition);
            condition = condition.substring(conditionComment.length).trim();
            currentConditionComment = this.unescapeString(conditionComment, false);
        }

        //Check if the condition is disabled
        if (condition.startsWith(this.tows("__disabled__", ruleKw))) {
            isCurrentConditionDisabled = true;
            condition = condition.substring(this.tows("__disabled__", ruleKw).length).trim();
        }

        let astCondition = this.decompile(condition);
        if (currentConditionComment !== "") {
            astCondition.comment = currentConditionComment;
        }
        astCondition.isDisabled = isCurrentConditionDisabled;
        astConditions.push(astCondition);
    }

    return astConditions;
}

OverPyDecompiler.prototype.decompileActions = function(content: string) {
    var astActions = [];
    var actions = this.splitInstructions(content.substring(content.indexOf("{") + 1, content.lastIndexOf("}")));

    for (var action of actions) {
        astActions.push(this.decompileAction(action));
    }

    return astActions;
}

OverPyDecompiler.prototype.decompileAction = function(content: string) {
    var isCurrentActionDisabled = false;
    var currentActionComment: string = "";
    content = content.trim();

    if (content.startsWith('"')) {
        var actionComment = this.getPrefixString(content);
        content = content.substring(actionComment.length).trim();
        currentActionComment = this.unescapeString(actionComment, false);
    }
    if (content.startsWith(this.tows("__disabled__", ruleKw) + " ")) {
        isCurrentActionDisabled = true;
        content = content.substring((this.tows("__disabled__", ruleKw) + " ").length);
    }

    var decompiledAction = this.decompile(content);
    decompiledAction.isDisabled = isCurrentActionDisabled;
    if (currentActionComment !== "") {
        decompiledAction.comment = currentActionComment;
    }

    return decompiledAction;
}

//Main parser function for workshop -> overpy.
OverPyDecompiler.prototype.decompile = function(content: string): Ast {
    content = content.trim();
    content = content.replace(/\n\t*/g, " ");
    debug("Decompiling '" + content + "'");

    //Workshop operators, from lowest to highest precedence.
    const wsOperators = [["+=", "-=", "*=", "/=", "%=", "^=", "="], ["?"], ["||"], ["&&"], ["==", "!="], ["<=", ">=", ">", "<"], ["+", "-"], ["*", "/", "%"], ["^"]];

    const binaryOpToFuncMapping = {
        "=": "__assignTo__",
        "||": "__or__",
        "&&": "__and__",
        "==": "__equals__",
        "!=": "__inequals__",
        "<=": "__lessThanOrEquals__",
        ">=": "__greaterThanOrEquals__",
        "<": "__lessThan__",
        ">": "__greaterThan__",
        "+": "__add__",
        "-": "__subtract__",
        "*": "__multiply__",
        "/": "__divide__",
        "%": "__modulo__",
        "^": "__raiseToPower__",
    };

    const modifyOpToFuncMapping = {
        "+=": "__add__",
        "-=": "__subtract__",
        "*=": "__multiply__",
        "/=": "__divide__",
        "%=": "__modulo__",
        "^=": "__raiseToPower__",
    };

    //Split on operators
    for (var operatorGroup of wsOperators) {
        //The power operator is right to left, so split left to right
        if (operatorGroup.includes("^")) {
            var operatorCheck = this.getOperatorInStr(
                content,
                operatorGroup.map((x) => " " + x + " "),
                true,
            );
        } else {
            var operatorCheck = this.getOperatorInStr(
                content,
                operatorGroup.map((x) => " " + x + " "),
                false,
            );
        }

        if (operatorCheck.operatorFound !== null) {
            var operator = operatorCheck.operatorFound.trim();
            debug("Handling operator '" + operator + "'");

            var operands = [content.slice(0, operatorCheck.operatorPosition), content.slice(operatorCheck.operatorPosition + operatorCheck.operatorFound.length)];
            if (operator in binaryOpToFuncMapping) {
                return this.Ast(binaryOpToFuncMapping[operator as keyof typeof binaryOpToFuncMapping], [this.decompile(operands[0]), this.decompile(operands[1])]);
            } else if (operator in modifyOpToFuncMapping) {
                return this.Ast("__modifyVar__", [this.decompile(operands[0]), this.Ast(modifyOpToFuncMapping[operator as keyof typeof modifyOpToFuncMapping], [], [], "__Operation__"), this.decompile(operands[1])]);
            } else if (operator === "?") {
                var elseOperands = this.splitStrOnDelimiter(operands[1], ":", false);
                if (elseOperands.length !== 2) {
                    this.error("Found '?', but no ':'");
                }
                return this.Ast("__ifThenElse__", [this.decompile(operands[0]), this.decompile(elseOperands[0]), this.decompile(elseOperands[1])]);
            } else {
                this.error("Unhandled operator '" + operator + "'");
            }
        }
    }

    //Check for "!" operator
    if (content.startsWith("!")) {
        return this.Ast("__not__", [this.decompile(content.substring(1))]);
    }

    //Check for array index
    if (content.endsWith("]")) {
        var bracketPos = this.getBracketPositions(content);
        return this.Ast("__valueInArray__", [this.decompile(content.substring(0, bracketPos[bracketPos.length - 2])), this.decompile(content.substring(bracketPos[bracketPos.length - 2] + 1, bracketPos[bracketPos.length - 1]))]);
    }

    //Check for the "." operator

    var dotOperands = this.splitStrOnDelimiter(content, ".", false, true);
    if (dotOperands.length === 2) {
        dotOperands = dotOperands.map((x) => x.trim());
        if (isNumber(dotOperands[0])) {
            if (dotOperands[0].startsWith("-")) {
                return this.Ast("__negate__", [this.getAstForNumber(Number(content.substring(1)))]);
            } else {
                return this.getAstForNumber(Number(content));
            }
        }
        if (dotOperands[0] === this.tows("__global__", valueFuncKw)) {
            return this.Ast("__globalVar__", [this.Ast(this.translateVarToPy(dotOperands[1], true, getInternalFileStack()), [], [], "GlobalVariable")]);
        } else {
            return this.Ast("__playerVar__", [this.decompile(dotOperands[0]), this.Ast(this.translateVarToPy(dotOperands[1], false, getInternalFileStack()), [], [], "PlayerVariable")]);
        }
    }

    var bracketPos = this.getBracketPositions(content);

    var hasArgs = false;
    if (bracketPos.length === 2) {
        hasArgs = true;
    } else if (bracketPos.length !== 0) {
        this.error("Mismatched top-level brackets in action " + content + ": expected 0 or 2, found " + bracketPos.length);
    }

    //Check if the whole string is in parentheses
    if (bracketPos.length === 2 && bracketPos[0] === 0 && bracketPos[1] === content.length - 1) {
        return this.decompile(content.substring(1, content.length - 1));
    }

    //Check if there are empty parentheses
    if (bracketPos.length === 2 && content.substring(bracketPos[0] + 1, bracketPos[1]).trim().length === 0) {
        hasArgs = false;
        content = content.substring(0, bracketPos[0]);
    }

    var name = "";
    if (bracketPos.length === 2) {
        name = content.substring(0, bracketPos[0]);
    } else {
        name = content;
    }

    //Check for string literals
    if (name.startsWith('"')) {
        return this.Ast(this.unescapeString(name, false), [], [], "CustomStringLiteral");
    }

    //Check for numbers
    if (isNumber(name)) {
        if (name.startsWith("-")) {
            return this.Ast("__negate__", [this.getAstForNumber(Number(name.substring(1)))]);
        } else {
            return this.getAstForNumber(Number(name));
        }
    }
    try {
        name = this.topy(name.toLowerCase().replace(/\s/g, ""), wsFuncKw);
    } catch (e) {
        //Is it a constant instead of a function?
        name = this.topy(name.toLowerCase().replace(/\s/g, ""), constantKw);
        if (name === "ColorLiteral.TEAM_1") {
            name = "TeamLiteral.1";
        } else if (name === "ColorLiteral.TEAM_2") {
            name = "TeamLiteral.2";
        }
        var type = name.substring(0, name.indexOf("."));
        var elem = name.substring(name.indexOf(".") + 1);
        return this.Ast(elem, [], [], type);
    }

    var hasNoArgs = false;
    if (name.endsWith("()")) {
        hasNoArgs = true;
        name = name.substring(0, name.length - 2);
    }

    let args: string[] = [];
    if (hasArgs) {
        args = this.getArgs(content.substring(bracketPos[0] + 1, bracketPos[1]));
    }
    debug("Name: '"+name+"', arguments: " + args.join(","));

    //Special functions

    if (name === "__modifyGlobalVariable__") {
        return this.Ast("__modifyVar__", [this.Ast("__globalVar__", [this.Ast(this.translateVarToPy(args[0], true, getInternalFileStack()), [], [], "GlobalVariable")]), this.Ast(this.topy(args[1], constantValues["__Operation__"]), [], [], "__Operation__"), this.decompile(args[2])]);
    }
    if (name === "__modifyGlobalVariableAtIndex__") {
        return this.Ast("__modifyVar__", [this.Ast("__valueInArray__", [this.Ast("__globalVar__", [this.Ast(this.translateVarToPy(args[0], true, getInternalFileStack()), [], [], "GlobalVariable")]), this.decompile(args[1])]), this.Ast(this.topy(args[2], constantValues["__Operation__"]), [], [], "__Operation__"), this.decompile(args[3])]);
    }
    if (name === "__modifyPlayerVariable__") {
        return this.Ast("__modifyVar__", [this.Ast("__playerVar__", [this.decompile(args[0]), this.Ast(this.translateVarToPy(args[1], false, getInternalFileStack()), [], [], "PlayerVariable")]), this.Ast(this.topy(args[2], constantValues["__Operation__"]), [], [], "__Operation__"), this.decompile(args[3])]);
    }
    if (name === "__modifyPlayerVariableAtIndex__") {
        return this.Ast("__modifyVar__", [this.Ast("__valueInArray__", [this.Ast("__playerVar__", [this.decompile(args[0]), this.Ast(this.translateVarToPy(args[1], false, getInternalFileStack()), [], [], "PlayerVariable")]), this.decompile(args[2])]), this.Ast(this.topy(args[3], constantValues["__Operation__"]), [], [], "__Operation__"), this.decompile(args[4])]);
    }
    if (name === "__compare__") {
        var funcToOpMapping = {
            "==": "__equals__",
            "!=": "__inequals__",
            "<=": "__lessThanOrEquals__",
            ">=": "__greaterThanOrEquals__",
            "<": "__lessThan__",
            ">": "__greaterThan__",
        };
        if (!(args[1] in funcToOpMapping)) {
            this.error("Unknown operator '" + args[1] + "'");
        }
        return this.Ast(funcToOpMapping[args[1] as keyof typeof funcToOpMapping], [this.decompile(args[0]), this.decompile(args[2])]);
    }
    if (name === "__forGlobalVariable__") {
        return this.Ast("__for__", [this.Ast("__globalVar__", [this.Ast(this.translateVarToPy(args[0], true, getInternalFileStack()), [], [], "GlobalVariable")]), this.decompile(args[1]), this.decompile(args[2]), this.decompile(args[3])]);
    }
    if (name === "__forPlayerVariable__") {
        return this.Ast("__for__", [this.Ast("__playerVar__", [this.decompile(args[0]), this.Ast(this.translateVarToPy(args[1], false, getInternalFileStack()), [], [], "PlayerVariable")]), this.decompile(args[2]), this.decompile(args[3]), this.decompile(args[4])]);
    }
    if (name === "__round__") {
        return this.Ast("__round__", [this.decompile(args[0]), this.Ast(this.topy(args[1], constantValues.__Rounding__), [], [], "__Rounding__")]);
    }
    if (name === "__localizedString__" && args.length === 0) {
        return this.Ast("STRING", [], [], "HudReeval");
    }
    if (name === ".setInvisibility" && args.length === 2 && args[1] === "无") {
        //Fix Chinese translation issue
        args[1] = constantValues.Invis.NONE["zh-CN"] as string;
    }
    if (name === ".startForcingOutlineFor" && args.length === 4) {
        args.push("DEFAULT");
    }
    if (name === "createWorkshopSettingBool" && args.length === 3) {
        args.push("0");
    }
    if (name === "createWorkshopSettingInt" && args.length === 5) {
        args.push("0");
    }
    if (name === "createWorkshopSettingFloat" && args.length === 5) {
        args.push("0");
    }

    if ((name === "__map__" || name === "__gamemode__") && args.length === 0) {
        args.push("__removed_from_ow2__");
    }

    if (!(name in wsFuncKw)) {
        this.error("Function '" + name + "' is not in the function list");
    }
    if (wsFuncKw[name].args === null) {
        if (args.length !== 0) {
            this.error("Function '" + name + "' has " + args.length + "args, expected 0");
        }
    } else {
        if (name === "__localizedString__" || name === "__customString__") {
            if (args.length < 1) {
                this.error("Function '" + name + "' has " + args.length + "args, expected at least 1");
            }
        } else if (name !== "__array__") {
            if (args.length !== wsFuncKw[name].args?.length) {
                this.error("Function '" + name + "' has " + args.length + "args, expected " + (wsFuncKw[name].args?.length ?? "<ERR: UNDEFINED ARGS>"));
            }
        }
    }
    var astArgs = [];
    for (var i = 0; i < args.length; i++) {
        if (name !== "__array__") {
            if (wsFuncKw[name].args?.[i].type in constantValues) {
                astArgs.push(this.Ast(args[i] === "__removed_from_ow2__" ? args[i] : this.topy(args[i], constantValues[wsFuncKw[name].args?.[i].type]), [], [], wsFuncKw[name].args?.[i].type));
            } else if (wsFuncKw[name].args?.[i].type === "GlobalVariable") {
                astArgs.push(this.Ast(this.translateVarToPy(args[i], true, getInternalFileStack()), [], [], "GlobalVariable"));
            } else if (wsFuncKw[name].args?.[i].type === "PlayerVariable") {
                astArgs.push(this.Ast(this.translateVarToPy(args[i], false, getInternalFileStack()), [], [], "PlayerVariable"));
            } else if (wsFuncKw[name].args?.[i].type === "Subroutine") {
                astArgs.push(this.Ast(this.translateSubroutineToPy(args[i], getInternalFileStack()), [], [], "Subroutine"));
            } else {
                astArgs.push(this.decompile(args[i]));
            }
        } else {
            astArgs.push(this.decompile(args[i]));
        }
    }

    if (name === "__localizedString__") {
        astArgs[0].type = "LocalizedStringLiteral";
    } else if (name === "__customString__") {
        astArgs[0].type = "CustomStringLiteral";
    }

    if (name === "__localizedString__" || name === "__customString__") {
        while (astArgs.length < 4) {
            astArgs.push(this.getAstForNull());
        }
    }

    return this.Ast(name, astArgs);
}
