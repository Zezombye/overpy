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
import { bigLettersMappings, caseSensitiveReplacements, currentArrayElementName, currentArrayIndexName, enumMembers, fullwidthMappings, operatorPrecedence, setCurrentArrayElementName, setCurrentArrayIndexName, setCurrentRuleName, setEnableTagsSetup, setFileStack, subroutines, funcKw, notConstantFunctions } from "../globalVars";
import { BaseNormalFileStackMember, OWLanguage } from "../types";
import { Token, tokenize } from "./tokenizer";
import { Ast, areAstsAlwaysEqual, astContainsFunctions, getAstFor0, getAstFor1, getAstForArgDefault, getAstForCustomString, getAstForE, getAstForFalse, getAstForFucktonOfSpaces, getAstForInfinity, getAstForNull, getAstForNullVector, getAstForNumber, getAstForTeamAll, getAstForTrue, replaceFunctionInAst } from "../utils/ast";
import { getFileContent, getFilePaths } from "file_utils";
import { debug, error, functionNameToString, warn } from "../utils/logging";
import { isNumber, safeEval } from "../utils/other";
import { applyCasedStringModifier, escapeString, getUtf8Length, unescapeString } from "../utils/strings";
import { dispTokens, getTokenBracketPos, splitTokens } from "../utils/tokens";
import { parseType } from "../utils/types";
import { addSubroutine, addVariable, isSubroutineName, isVarName } from "../utils/varNames";
import { compileCustomGameSettings } from "./compiler";
import { LogicalLine } from "./tokenizer";
import { opyTextures } from "../data/opy/textures";
import { parseOpyMacro } from "../utils/compilation";
import { getTranslatedString } from "./translations";

export const builtInEnumNameToAstInfo: Record<string, {name: string, type: string}> = {
    Hero: {
        name: "__hero__",
        type: "HeroLiteral",
    },
    Map: {
        name: "__map__",
        type: "MapLiteral",
    },
    Gamemode: {
        name: "__gamemode__",
        type: "GamemodeLiteral",
    },
    Team: {
        name: "__team__",
        type: "TeamLiteral",
    },
    Button: {
        name: "__button__",
        type: "ButtonLiteral",
    },
    Color: {
        name: "__color__",
        type: "ColorLiteral",
    },
};

export function parseLines(lines: LogicalLine[]): Ast[] {
    var result: Ast[] = [];
    let currentComments: string[] = [];

    for (var i = 0; i < lines.length; i++) {
        let currentLine = lines[i];

        if (currentLine.tokens.length === 0) {
            error("Received an empty line");
        }
        setFileStack(currentLine.tokens[0].fileStack);

        if (currentLine.tokens[0].text.startsWith("#")) {
            currentComments.push(currentLine.tokens[0].text.substring(1));
            continue;
        }

        //Check for end of line comment
        if (currentLine.tokens.length > 0 && currentLine.tokens[currentLine.tokens.length - 1].text.startsWith("#")) {
            currentComments.push(currentLine.tokens[currentLine.tokens.length - 1].text.substring(1));
            currentLine.tokens.pop();
        }

        // Handle variable declarations
        if (currentLine.tokens[0].text === "globalvar" || currentLine.tokens[0].text === "playervar" || currentLine.tokens[0].text === "subroutine") {
            var initDirective = null;
            //Check for assignment
            for (var j = 0; j < currentLine.tokens.length; j++) {
                if (currentLine.tokens[j].text === "=") {
                    initDirective = currentLine.tokens.slice(j + 1);
                    currentLine.tokens = currentLine.tokens.slice(0, j);
                    break;
                }
            }

            if (currentLine.tokens.length < 2 || currentLine.tokens.length > 3) {
                error("Malformed " + currentLine.tokens[0].text + " declaration");
            }
            if (currentLine.indentLevel !== 0) {
                error(currentLine.tokens[0].text + " directive cannot be indented");
            }
            var index: number = currentLine.tokens.length > 2 ? Number.parseInt(currentLine.tokens[2].text) : -1;
            if (Number.isNaN(index)) {
                error("Invalid index for " + currentLine.tokens[0].text + " directive:" + currentLine.tokens[2].text);
            }

            if (currentLine.tokens[0].text === "globalvar") {
                addVariable(currentLine.tokens[1].text, true, index, initDirective);
            } else if (currentLine.tokens[0].text === "playervar") {
                addVariable(currentLine.tokens[1].text, false, index, initDirective);
            } else {
                addSubroutine(currentLine.tokens[1].text, index, false);
            }
            currentComments = [];
            continue;
        }

        // Handle custom game settings
        if (currentLine.tokens[0].text === "settings") {
            let customGameSettings: any;
            try {
                if (currentLine.tokens.length === 2) {
                    var path = getFilePaths(currentLine.tokens[1].text)[0];
                    customGameSettings = JSON.parse(safeEval("JSON.stringify(" + getFileContent(path) + ")"));
                } else {
                    customGameSettings = JSON.parse(
                        safeEval(
                            "JSON.stringify(" +
                                currentLine.tokens
                                    .slice(1)
                                    .map((x) => x.text)
                                    .join("") +
                                ")",
                        ),
                    );
                }

                // TODO: Check shape of custom game settings
            } catch (e) {
                // @ts-ignore
                error(e);
            }
            compileCustomGameSettings(customGameSettings);
            currentComments = [];
            continue;
        }

        // Handle directives
        if (currentLine.tokens[0].text.startsWith("@")) {
            if (["@Condition", "@Name", "@NewPage"].includes(currentLine.tokens[0].text)) {
                var currentLineAst = new Ast(currentLine.tokens[0].text, currentLine.tokens[0].text === "@NewPage" && currentLine.tokens.length === 1 ? [] : [parse(currentLine.tokens.slice(1))], [], "__Annotation__");
            } else {
                var currentLineAst = new Ast(
                    currentLine.tokens[0].text,
                    currentLine.tokens.slice(1).map((x) => new Ast(x.text, [], [], "__AnnotationArg__")),
                    [],
                    "__Annotation__",
                );
            }
            if (currentComments.length > 0) {
                currentLineAst.comment = commentArrayToString(currentComments);
            }
            result.push(currentLineAst);
        } else if (["rule", "enum", "if", "elif", "else", "do", "for", "def", "while", "switch", "case", "default"].includes(currentLine.tokens[0].text)) {
            var tokenToFuncMapping = {
                rule: "__rule__",
                enum: "__enum__",
                if: "__if__",
                elif: "__elif__",
                else: "__else__",
                do: "__doWhile__",
                for: "__for__",
                def: "__def__",
                while: "__while__",
                switch: "__switch__",
                case: "__case__",
                default: "__default__",
            };

            var funcName = tokenToFuncMapping[currentLine.tokens[0].text as keyof typeof tokenToFuncMapping];
            var args: string[] | Ast[] = [];
            var children = [];
            var instructionRuleAttributes: null | Record<string, string> = null;
            var lineMembers = splitTokens(currentLine.tokens, ":", true);
            if (lineMembers.length === 1) {
                error("Expected a ':' at the end of the line");
            }

            if (funcName === "__rule__") {
                if (lineMembers[0].length < 2) {
                    error("Malformatted 'rule' declaration");
                }
                instructionRuleAttributes = {};
                instructionRuleAttributes.name = lineMembers[0].slice(1).map((x) => unescapeString(x.text, true)).join("");
                setCurrentRuleName(instructionRuleAttributes.name);
            } else if (funcName === "__enum__") {
                if (lineMembers[0].length !== 2) {
                    error("Malformatted 'enum' declaration");
                }
                args = [new Ast(lineMembers[0][1].text, [], [], "__EnumName__")];
            } else if (funcName === "__def__") {
                if (lineMembers[0].length !== 4 || lineMembers[0][2].text !== "(" || lineMembers[0][3].text !== ")") {
                    error("Malformatted 'def' declaration");
                }
                instructionRuleAttributes = {};
                instructionRuleAttributes.subroutineName = lineMembers[0][1].text;
                setCurrentRuleName("Subroutine "+instructionRuleAttributes.subroutineName);
                if (isSubroutineName(instructionRuleAttributes.subroutineName)) {
                    for (var subroutine of subroutines) {
                        if (subroutine.name === instructionRuleAttributes.subroutineName) {
                            if (subroutine.isFromDefStatement) {
                                error("Duplicate definition of subroutine '" + instructionRuleAttributes.subroutineName + "'");
                            } else {
                                break;
                            }
                        }
                    }
                } else {
                    addSubroutine(instructionRuleAttributes.subroutineName, null, true);
                }
            }

            if (!["__else__", "__doWhile__", "__rule__", "__enum__", "__def__", "__default__"].includes(funcName)) {
                args = [parse(lineMembers[0].slice(1))];
            }

            var currentLineIndent = currentLine.indentLevel;
            var childrenLines = [];

            //Handle one-line children such as "if A: B++"
            if (lineMembers[1].length > 0) {
                childrenLines.push(new LogicalLine(currentLineIndent + 1, lineMembers[1]));
            }

            //Get children lines
            var nextIndentLevel = null;
            var j = i + 1;
            for (; j < lines.length; j++) {
                setFileStack(lines[j].tokens[0].fileStack);

                if (lines[j].indentLevel <= currentLineIndent) {
                    break;
                }
                if (lines[j].indentLevel > currentLineIndent && nextIndentLevel !== null && lines[j].indentLevel < nextIndentLevel) {
                    error("Indentation does not match any outer indentation level");
                }

                if ((nextIndentLevel = null)) {
                    nextIndentLevel = lines[j].indentLevel;
                    if (childrenLines.length > 0) {
                        childrenLines[0].indentLevel = nextIndentLevel;
                    }
                }
                childrenLines.push(lines[j]);
            }

            if (funcName === "__doWhile__") {
                //There should be a "while" matching the "do"
                if (j < lines.length && lines[j].tokens[0].text === "while") {
                    if (lines[j].tokens[lines[j].tokens.length - 1].text.startsWith("#")) {
                        currentComments.push(lines[j].tokens[lines[j].tokens.length - 1].text.substring(1));
                        lines[j].tokens.pop();
                    }
                    args = [parse(lines[j].tokens.slice(1))];
                    j++;
                } else {
                    error("Found 'do', but no matching 'while'");
                }
            }

            if (funcName === "__enum__") {
                if (typeof args[0] === "string") {
                    error("First argument for enum must be an instance of Ast, but got a string instead.");
                }

                //Implement our own mini-parser to not get "function does not exist" errors.
                if (!(args[0].name in enumMembers)) {
                    enumMembers[args[0].name] = {};
                }
                var lastIntValue: number | Ast = 0;
                for (var k = 0; k < childrenLines.length; k++) {
                    setFileStack(childrenLines[k].tokens[0].fileStack);
                    //Skip comments
                    if (childrenLines[k].tokens[0].text[0] === "#") {
                        continue;
                    }
                    //Remove comments at end of lines
                    if (childrenLines[k].tokens[childrenLines[k].tokens.length - 1].text[0] === "#") {
                        childrenLines[k].tokens = childrenLines[k].tokens.slice(0, childrenLines[k].tokens.length - 1);
                    }
                    //Remove comma at end of line, if there is one
                    if (childrenLines[k].tokens[childrenLines[k].tokens.length - 1].text === ",") {
                        childrenLines[k].tokens = childrenLines[k].tokens.slice(0, childrenLines[k].tokens.length - 1);
                    }
                    var assignOperands = splitTokens(childrenLines[k].tokens, "=", false);
                    let enumValue = null;
                    if (assignOperands.length === 1) {
                        //Enum member was not assigned a value
                        if (typeof lastIntValue === "number") {
                            enumValue = getAstForNumber(lastIntValue);
                            lastIntValue++;
                        } else if (lastIntValue instanceof Ast && lastIntValue.name === "__negate__" && lastIntValue.args[0].name === "__number__") {
                            lastIntValue = -lastIntValue.args[0].args[0].numValue + 1;
                            enumValue = getAstForNumber(lastIntValue);
                            lastIntValue++;
                        } else {
                            error("Cannot auto-increment enum member, as last value was " + functionNameToString(lastIntValue));
                        }
                    } else {
                        enumValue = parse(assignOperands[1]);
                        if (enumValue.name === "__number__") {
                            lastIntValue = enumValue.args[0].numValue + 1;
                        } else {
                            //Check that there are only constant functions, as to not mislead the programmer; enums are just macros in disguise
                            if (
                                astContainsFunctions(
                                    enumValue,
                                    notConstantFunctions.filter((v) => ("en-US" as OWLanguage) in v).map((v) => v["en-US"] as string),
                                    false,
                                )
                            ) {
                                warn("w_enum_constant", "The value of " + args[0].name + "." + childrenLines[k].tokens[0] + " seems to not be constant; it will be inlined and not stored.");
                            }

                            lastIntValue = enumValue;
                        }
                    }
                    let enumMemberName = childrenLines[k].tokens[0].toString();
                    if (enumMemberName in enumMembers[args[0].name]) {
                        error("Duplicate enum member '" +args[0].name+"."+ enumMemberName + "''");
                    }
                    enumMembers[args[0].name][enumMemberName] = enumValue;
                }
                //We do not care about enums in the AST
                i += j - i - 1;
                continue;
            } else {
                children = parseLines(childrenLines);
            }

            setFileStack(currentLine.tokens[0].fileStack);
            let instruction = new Ast(funcName, args, children);
            if (currentComments.length > 0) {
                instruction.comment = commentArrayToString(currentComments);
            }
            if (instructionRuleAttributes !== null) {
                instruction.ruleAttributes = instructionRuleAttributes;
            }

            result.push(instruction);
            i += j - i - 1;
        } else {
            var currentLineAst = parse(currentLine.tokens);
            if (currentComments.length > 0) {
                currentLineAst.comment = commentArrayToString(currentComments);
            }
            result.push(currentLineAst);
        }
        currentComments = [];
    }

    return result;
}

export function commentArrayToString(comments: string[]) {
    if (comments.length === 0) {
        return "";
    }
    var result = comments[comments.length - 1].trim();
    var nbChars = getUtf8Length(result);
    if (nbChars > 256) {
        return result;
    }
    for (var i = comments.length - 2; i >= 0; i--) {
        var addedChars = getUtf8Length(comments[i].trim());
        if (nbChars + addedChars + 1 > 256) {
            break;
        }
        result = comments[i].trim() + "\n" + result;
        nbChars += addedChars + 1;
    }
    return result;
}

function getOperator(tokens: Token[], operators: string[], rtlPrecedence = false, allowUnaryPlusOrMinus = false) {
    var operatorFound = null;
    var operatorPosition = -1;
    var bracketsLevel = 0;

    if (!rtlPrecedence) {
        var start = tokens.length - 1;
        var end = -1;
        var step = -1;
    } else {
        var start = 0;
        var end = tokens.length;
        var step = 1;
    }

    for (var i = start; i !== end; i += step) {
        if (tokens[i].text === "(" || tokens[i].text === "[" || tokens[i].text === "{") {
            bracketsLevel += step;
        } else if (tokens[i].text === ")" || tokens[i].text === "]" || tokens[i].text === "}") {
            bracketsLevel -= step;
        } else if (bracketsLevel === 0 && operators.includes(tokens[i].text)) {
            if (allowUnaryPlusOrMinus || (i !== 0 && (!Object.keys(operatorPrecedence).includes(tokens[i - 1].text) || (tokens[i - 1].text === "not" && tokens[i].text === "in"))) || (i === 0 && tokens[i].text === "not")) {
                //Support "not in" operator
                if (tokens[i].text === "not" && i < tokens.length - 1 && tokens[i + 1].text === "in") {
                    continue;
                }
                operatorFound = tokens[i].text;
                operatorPosition = i;
                break;
            }
        }
    }

    if (bracketsLevel !== 0) {
        error("Lexer broke (bracket level is " + bracketsLevel + ")");
    }

    return {
        operatorFound,
        operatorPosition,
    };
}

export function parseArgs(funcName: string, args: Token[][]) {
    if (!(funcName in funcKw)) {
        error("Unknown function '"+funcName+"'");
    }
    if (funcKw[funcName].args === null) {
        if (args.length > 0) {
            error("Function '"+funcName+"' takes no argument");
        }
        return [];
    }
    if ([".format", "__array__", "__dict__", "__enumType__", "range"].includes(funcName)) {
        //Those functions take infinite arguments or a wacky number of arguments
        return args.map(x => parse(x));
    }

    let funcArgsDict = Object.fromEntries(funcKw[funcName].args!.map((x, i) => [x.name, {index: i, ...x}]));
    let positionalArgs: (Token[] | Ast)[] = Array(funcKw[funcName].args!.length).fill(null);
    let hasKwArg = false;
    for (let [i, arg] of args.entries()) {
        if (arg.length > 2 && arg[1].text === "=") {
            if (!(arg[0].text in funcArgsDict)) {
                error("Unknown keyword argument '"+arg[0].text+"' for function '"+funcName+"'");
            }
            hasKwArg = true;
            let argIndex = funcArgsDict[arg[0].text].index;
            if (positionalArgs[argIndex] !== null) {
                error("Argument '"+arg[0].text+"' of function '"+funcName+"' is defined twice");
            }
            positionalArgs[argIndex] = arg.slice(2);
        } else {
            if (hasKwArg) {
                error("Cannot use positional arguments after keyword arguments");
            }
            positionalArgs[i] = arg;
        }
    }

    for (let [i, arg] of funcKw[funcName].args!.entries()) {
        if (positionalArgs[i] === null) {
            if (arg.default !== undefined) {

                positionalArgs[i] = getAstForArgDefault(arg);
            } else {
                error("Missing argument '"+arg.name+"' for function '"+funcName+"'");
            }
        }
    }

    return positionalArgs.map(x => x instanceof Ast ? x : parse(x));
}

export function parse(content: Token[], kwargs: Record<string, any> = {}): Ast {
    if (content === undefined) {
        error("Content is undefined");
    } else if (content.length === 0) {
        error("Content is empty (missing operand or argument?)");
    }

    setFileStack(content[0].fileStack);
    debug("Parsing '" + dispTokens(content) + "'");

    //Handle the "del" directive.
    if (content[0].text === "del") {
        return new Ast("__del__", [parse(content.slice(1))]);
    }

    //Parse the "goto" directive.
    if (content[0].text === "goto") {
        if (content.length < 2) {
            error("Expected a label or a formula after 'goto'");
        }
        if (content.length === 2) {
            //Check for the special "RULE_START" and convert to the "Loop" instruction.
            if (content[1].text === "RULE_START") {
                return new Ast("loop");
            }
            //The goto goes to a label.
            return new Ast("__skip__", [new Ast("__distanceTo__", [new Ast(content[1].text, [], [], "Label")])]);
        } else {
            //The goto should be of the format "loc+XXX".
            if (content[1].text !== "loc" || content[2].text !== "+") {
                error("Expected a label or 'loc+XXX' after 'goto'");
            }
            return new Ast("__skip__", [parse(content.slice(3))]);
        }
    }

    //Parse labels. We do not need to care about 'else:' as they are already parsed in the parseLines function.
    if (content.length === 2 && content[1].text === ":") {
        return new Ast(content[0].text, [], [], "Label");
    }

    //Check for ++/--.
    if (content.length > 2 && content[content.length - 1].text === "+" && content[content.length - 2].text === "+") {
        var op1 = parse(content.slice(0, content.length - 2));
        return new Ast("__assignTo__", [op1, new Ast("__add__", [op1, getAstFor1()])]);
    }
    if (content.length > 2 && content[content.length - 1].text === "-" && content[content.length - 2].text === "-") {
        var op1 = parse(content.slice(0, content.length - 2));
        return new Ast("__assignTo__", [op1, new Ast("__subtract__", [op1, getAstFor1()])]);
    }

    //Parse operators, according to the operator precedence in operatorPrecedence.
    if (kwargs.minOperatorPrecedence === undefined) {
        kwargs.minOperatorPrecedence = 1;
    }
    for (var precedence = kwargs.minOperatorPrecedence; precedence <= operatorPrecedence["**"]; precedence++) {
        var operatorsToCheck = Object.keys(operatorPrecedence).filter((x) => operatorPrecedence[x] === precedence);
        //var allowUnary = (precedence === operatorPrecedence["not"]);
        let allowUnary = false;

        //manually put the unary plus/minus
        if (precedence > operatorPrecedence["%"] && precedence < operatorPrecedence["**"]) {
            operatorsToCheck = ["+", "-"];
            allowUnary = true;
        }
        var rtlPrecedence = precedence === operatorPrecedence["**"] || precedence === operatorPrecedence["if"] || allowUnary === true;

        var operatorCheck = getOperator(content, operatorsToCheck, rtlPrecedence, allowUnary);
        if (operatorCheck.operatorFound === null) {
            continue;
        }

        //The operator is present; parse it
        var operator = operatorCheck.operatorFound;
        var operands = [content.slice(0, operatorCheck.operatorPosition), content.slice(operatorCheck.operatorPosition + 1, content.length)];

        if (operator === "=") {
            return new Ast("__assignTo__", [parse(operands[0]), parse(operands[1])]);
        } else if (operator === "if") {
            //"true if condition else false"

            var trueExpr = parse(operands[0]);
            var elseOperands = splitTokens(operands[1], "else", false, false);
            if (elseOperands.length !== 2) {
                error("Found 'if', but no 'else'");
            }
            var falseExpr = parse(elseOperands[1]);
            var condition = parse(elseOperands[0]);

            return new Ast("__ifThenElse__", [condition, trueExpr, falseExpr]);
        } else if (["or", "and"].includes(operator)) {
            var op1 = parse(operands[0]);
            var op2 = parse(operands[1]);
            return new Ast("__" + operator + "__", [op1, op2]);
        } else if (operator === "not") {
            var op1 = parse(operands[1]);
            return new Ast("__not__", [op1]);
        } else if (operator === "in") {
            var isNotInOperator = false;
            if (operands[0].length > 1 && operands[0][operands[0].length - 1].text === "not") {
                isNotInOperator = true;
                operands[0].pop();
            }
            var value = parse(operands[0]);
            var array = parse(operands[1]);
            if (isNotInOperator) {
                return new Ast("__not__", [new Ast("__arrayContains__", [array, value])]);
            } else {
                return new Ast("__arrayContains__", [array, value]);
            }
        } else if (["==", "!=", "<=", ">=", "<", ">"].includes(operator)) {
            var op1 = parse(operands[0]);
            var op2 = parse(operands[1]);
            let opToFuncMapping = {
                "==": "__equals__",
                "!=": "__inequals__",
                "<=": "__lessThanOrEquals__",
                ">=": "__greaterThanOrEquals__",
                "<": "__lessThan__",
                ">": "__greaterThan__",
            };
            return new Ast(opToFuncMapping[operator as keyof typeof opToFuncMapping], [op1, op2]);
        } else if (["+=", "-=", "*=", "/=", "%=", "**=", "min=", "max="].includes(operator)) {
            //Actually de-optimize so we can keep the logic in one place.
            //Transform "A += 1" to "A = A + 1".

            let opToFuncMapping = {
                "+=": "__add__",
                "-=": "__subtract__",
                "*=": "__multiply__",
                "/=": "__divide__",
                "%=": "__modulo__",
                "**=": "__raiseToPower__",
                "min=": "min",
                "max=": "max",
            };

            const variable = parse(operands[0]);
            const opName = opToFuncMapping[operator as keyof typeof opToFuncMapping];
            const value = parse(operands[1]);

            //Do not de-optimize if the variable is random. Else we get random.choice(A) += 1 transformed to random.choice(A) = random.choice(A) + 1.
            if (!areAstsAlwaysEqual(variable, variable)) {
                // This is not a mistake: areAstsAlwaysEqual checks if its arguments are equal when called twice, which includes randomness.
                return new Ast("__modifyVar__", [variable, new Ast(opName, [], [], "__Operation__"), value]);
            }

            return new Ast("__assignTo__", [variable, new Ast(opName, [variable, value])]);
        } else if (["+", "-"].includes(operator)) {
            if (precedence > operatorPrecedence["%"] && precedence < operatorPrecedence["**"]) {
                //unary plus/minus
                if (operands[0].length > 1 && operands[0][operands[0].length - 1].text === "**") {
                    //In case of things like "A ** -B", go to the next operator (which will be **)
                    continue;
                }
                if (operator === "+") {
                    return parse(operands[1]);
                } else {
                    return new Ast("__negate__", [parse(operands[1])]);
                }
            } else {
                if (operator === "+") {
                    return new Ast("__add__", [parse(operands[0]), parse(operands[1])]);
                } else {
                    return new Ast("__subtract__", [parse(operands[0]), parse(operands[1])]);
                }
            }
        } else if (["/", "*", "%", "**"].includes(operator)) {
            let opToFuncMapping = {
                "/": "__divide__",
                "*": "__multiply__",
                "%": "__modulo__",
                "**": "__raiseToPower__",
            };
            var op1 = parse(operands[0]);
            var op2 = parse(operands[1]);
            return new Ast(opToFuncMapping[operator as keyof typeof opToFuncMapping], [op1, op2]);
        }
        error("Unhandled operator " + operator);
    }

    //Parse array
    if (content[content.length - 1].text === "]") {
        var bracketPos = getTokenBracketPos(content);

        if (bracketPos.length === 2 && bracketPos[0] === 0) {
            //It is a literal array such as [1,2,3] or [i for i in A if x].
            return parseLiteralArray(content);
        } else {
            var array = parse(content.slice(0, bracketPos[bracketPos.length - 2]));
            var value = parse(content.slice(bracketPos[bracketPos.length - 2] + 1, content.length - 1));
            return new Ast("__valueInArray__", [array, value]);
        }
    }

    //Parse dictionary
    if (content[0].text === "{") {
        return parseDictionary(content);
    }

    //Check for "." operator, which has the highest precedence.
    //It must be parsed from right to left.
    var operands = splitTokens(content, ".", false, true);
    if (operands.length === 2) {
        return parseMember(operands[0], operands[1]);
    }

    //Check for parentheses
    if (content[0].text === "(") {
        var bracketPos = getTokenBracketPos(content);
        if (bracketPos.length === 2 && bracketPos[1] === content.length - 1) {
            //All the expression is in parentheses; just remove them
            return parse(content.slice(1, content.length - 1));
        } else {
            error("Malformatted parentheses");
        }
    }

    //Check for strings
    if (content[content.length - 1].text.startsWith('"') || content[content.length - 1].text.startsWith("'")) {
        var stringType = "CustomStringLiteral";
        let translate = false;
        let isFormattedString = false;
        let isCasedString = false;
        var string = "";
        for (var i = content.length - 1; i >= 0; i--) {
            if (content[i].text.startsWith('"') || content[i].text.startsWith("'")) {
                string = unescapeString(content[i].text, true) + string;
            } else {
                if (i !== 0) {
                    error("Invalid content before string: '" + content[i].text + "'");
                }
                //string modifiers
                //console.log("string modifiers: "+content[0].text);
                if (content[0].text.includes("l")) {
                    if (content[0].text.length > 1) {
                        error("Cannot use other string modifiers with 'l'");
                    }
                    stringType = "LocalizedStringLiteral";
                }
                if (content[0].text.includes("b")) {
                    let isConvertedToBigLetters = false;
                    //If big letters, try to map letters until we get one
                    //We only need one letter to convert to big letters
                    for (var j = 0; j < string.length; j++) {
                        let formatterMatch = string.substring(j).match(content[0].text.includes("f") ? /^\{([^}]*)\}/ : /^\{\d*\}/);
                        if (formatterMatch) {
                            j += formatterMatch[0].length - 1;
                            continue;
                        }
                        if (string[j] in bigLettersMappings) {
                            string = string.substring(0, j) + bigLettersMappings[string[j]] + string.substring(j + 1);
                            isConvertedToBigLetters = true;
                            break;
                        }
                    }
                    if (!isConvertedToBigLetters) {
                        error("Could not convert the string "+escapeString(string, false)+" to big letters. The string must have one of the following chars: '" + Object.keys(bigLettersMappings).join("") + "'");
                    }
                }
                if (content[0].text.includes("w")) {
                    let containsNonFullwidthChar = false;
                    var tmpStr = "";
                    for (var j = 0; j < string.length; j++) {

                        let formatterMatch = string.substring(j).match(content[0].text.includes("f") ? /^\{([^}]*)\}/ : /^\{\d*\}/);
                        if (formatterMatch) {
                            j += formatterMatch[0].length - 1;
                            tmpStr += formatterMatch[0];
                            continue;
                        }
                        if (string[j] in fullwidthMappings) {
                            tmpStr += fullwidthMappings[string[j]];
                        } else {
                            containsNonFullwidthChar = true;
                            tmpStr += string[j];
                        }
                    }
                    string = tmpStr;
                    if (containsNonFullwidthChar) {
                        warn("w_not_total_fullwidth", "Could not fully convert the string "+escapeString(string, false)+" to fullwidth characters");
                    }
                }
                if (content[0].text.includes("p")) {
                    //legacy string modifier, unused
                }
                if (content[0].text.includes("c")) {
                    //easier to apply the modifier after we do the formatting
                    isCasedString = true;
                }
                if (content[0].text.includes("t")) {
                    if (content[0].text.length > 1) {
                        error("Cannot use other string modifiers with 't'");
                    }
                    translate = true;
                }
                if (content[0].text.includes("f")) {
                    isFormattedString = true;
                }
                for (let char of content[0].text) {
                    if (!["l", "b", "c", "w", "p", "t", "f"].includes(char)) {
                        error("Invalid string modifier '" + char + "', valid ones are 'f' (formatted), 'l' (localized), 'b' (big letters), 'c' (case-sensitive), 'w' (fullwidth) and 't' (translate)");
                    }
                }
            }
        }
        if (translate) {
            if (kwargs.disableTranslation) {
                error("Translation is disabled in this context but the 't' string modifier was used, please report to Zezombye");
            }
            return getTranslatedString(string, null, content[content.length-1].fileStack as BaseNormalFileStackMember[]);
        }
        if (isFormattedString) {
            let formatter = null;
            let formatArgs = [];
            do {
                formatter = string.match(/\{([^}]*)\}/);
                if (formatter) {

                    let lines = tokenize(formatter[1]);
                    let astLines = parseLines(lines);
                    if (astLines.length !== 1) {
                        error("String formatter '" + formatter + "' should only have one line");
                    }
                    let formatArg = astLines[0];
                    formatArgs.push(formatArg);
                    string = string.replace(formatter[0], "\uEC60" + (formatArgs.length - 1) + "\uEC61");
                }

            } while (formatter);
            string = string.replaceAll("\uEC60", "{").replaceAll("\uEC61", "}");
            if (isCasedString) {
                string = applyCasedStringModifier(string);
            }
            debug("processed formatted string: "+string);
            return new Ast(".format", [new Ast(string, [], [], stringType), ...formatArgs]);
        }
        if (isCasedString) {
            string = applyCasedStringModifier(string);
        }
        return new Ast(string, [], [], stringType);
    }

    //Parse args and name of function.
    var name = content[0].text;
    var args = null;
    if (content.length > 1) {
        if (content[1].text === "(") {
            args = splitTokens(content.slice(2, content.length - 1), ",");
        } else {
            error("Expected '(' after '" + name + "', but got '" + content[1].text + "'");
        }
    }

    if (args === null) {
        //Check for current array element variable name
        if (currentArrayElementName === name) {
            var result = new Ast("__currentArrayElement__");
            result.originalName = name;
            return result;
        }

        //Check for current array index variable name
        if (currentArrayIndexName === name) {
            var result = new Ast("__currentArrayIndex__");
            result.originalName = name;
            return result;
        }

        //Check for enums
        if (enumMembers[name]) {
            return new Ast(
                "__enumType__",
                Object.values(enumMembers[name]).map((x) => x.clone()),
                [],
                "Type",
            );
        } else if (name in builtInEnumNameToAstInfo) {
            const astInfo = builtInEnumNameToAstInfo[name as keyof typeof builtInEnumNameToAstInfo];
            const values = Object.keys(constantValues[astInfo.type])
                .filter((key) => key !== "description")
                .map((key) => new Ast(astInfo.name, [new Ast(key, [], [], astInfo.type)]));
            return new Ast("__enumType__", values, [], "Type");
        }

        //Check for global variable
        if (isVarName(name, true)) {
            return new Ast("__globalVar__", [new Ast(name, [], [], "GlobalVariable")]);
        }

        //Check for number
        if (isNumber(name)) {
            //It is an int, else it would have a dot, and wouldn't be processed here.
            //It is also an unsigned int, as the negative sign is not part of the name.
            return new Ast("__number__", [new Ast(name, [], [], "UnsignedIntLiteral")], [], "unsigned int");
        }

        if (name === "RULE_CONDITION") {
            name = "ruleCondition";
        }
        if (name === "default") {
            name = "__default__";
        }

        try {
            return new Ast(name);
        } catch (e) {
            if (kwargs.isDictKey) {
                //Macros such as splitDictArray can have dicts with arbitrary keys. Try again but set it as dict key
                return new Ast(name, [], [], "DictKey");
            } else {
                throw e;
            }
        }
    }

    debug("args: " + args.map((x) => "'" + dispTokens(x) + "'").join(", "));

    //Special functions


    if (name === "_") {
        if (args.length !== 1 && args.length !== 2) {
            error("Function '_' takes 2 arguments, received " + args.length);
        }
        let context = null;
        if (args.length === 2) {
            if (args[0].length !== 1 || (args[0][0].text[0] !== "'" && args[0][0].text[0] !== "\"")) {
                error("First argument of function '_' must be a string literal");
            }
            context = unescapeString(args[0][0].text, true);
        }
        let translationTarget = parse(args[args.length-1], {disableTranslation: true});
        if (translationTarget.type === "CustomStringLiteral") {
            return getTranslatedString(translationTarget.name, context, content[content.length-1].fileStack as BaseNormalFileStackMember[]);
        } else {
            //It is a variable; assume the value is a translated string (string array)
            if (args.length !== 1) {
                error("Cannot specify translation context when not translating a string literal");
            }
            return new Ast("__translateString__", [translationTarget]);
        }

    }

    if (name === "async") {
        if (args.length !== 2) {
            error("Function 'async' takes 2 arguments, received " + args.length);
        }
        //Check if first arg is indeed a subroutine
        var subroutineArg = args[0][0].text;
        if (!isSubroutineName(subroutineArg)) {
            error("Expected subroutine name as first argument");
        }

        return new Ast("async", [new Ast(subroutineArg, [], [], "Subroutine"), parse(args[1])]);
    }

    if (name === "chase") {
        if (args.length !== 4) {
            error("Function 'chase' takes 4 arguments, received " + args.length);
        }
        if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
            error("3rd argument of function 'chase' must be 'rate = xxxx' or 'duration = xxxx'");
        }

        if (args[3].length !== 3 || args[3][0].text !== "ChaseReeval" || args[3][1].text !== ".") {
            error("Expected a member of the 'ChaseReeval' enum as 4th argument for function 'chase', but got '" + dispTokens(args[3]) + "'");
        }
        args[3][0].text = "__ChaseReeval__";
        if (args[2][0].text === "rate") {
            var funcName = "chaseAtRate";
            args[3][0].text = "ChaseRateReeval";
        } else {
            var funcName = "chaseOverTime";
            args[3][0].text = "ChaseTimeReeval";
        }

        return new Ast(funcName, [parse(args[0]), parse(args[1]), parse(args[2].slice(2)), parse(args[3])]);
    }

    if (name === "__distanceTo__") {
        if (args.length !== 1) {
            error("Function '__distanceTo__' takes 1 argument, received " + args.length);
        }
        if (args[0].length !== 1) {
            error("Function '__distanceTo__' takes a label as argument");
        }
        return new Ast("__distanceTo__", [new Ast(args[0][0].text, [], [], "Label")]);
    }

    if (name === "raycast") {
        if (args.length === 5) {
            if (args[2].length >= 2 && (args[2][0].text === "include" || args[2][1].text === "=")) {
                args[2] = args[2].slice(2);
            }
            if (args[3].length >= 2 && (args[3][0].text === "exclude" || args[3][1].text === "=")) {
                args[3] = args[3].slice(2);
            }
            if (args[4].length >= 2 && (args[4][0].text === "includePlayerObjects" || args[4][1].text === "=")) {
                args[4] = args[4].slice(2);
            }

            return new Ast("raycast", [parse(args[0]), parse(args[1]), parse(args[2]), parse(args[3]), parse(args[4])]);
        } else {
            error("Function 'raycast' takes 5 arguments, received " + args.length);
        }
    }

    if (name === "sorted") {
        //Lazy & dirty way of properly parsing "sorted(x, lambda a,b: z)" as the parser also splits on the comma on "lambda a,b".
        if (args.length === 3) {
            args[1].push({ text: ",", fileStack: [] });
            args[1].push(...args[2]);
            args = args.slice(0, 2);
        }

        let sortedCondition: Ast | null = null;

        if (args.length === 2) {
            var lambdaArgs = splitTokens(args[1], ":");
            if (lambdaArgs.length !== 2) {
                error("Syntax for sorted array condition is 'lambda x: condition(x)'");
            }
            if (lambdaArgs[0].length < 2) {
                error("Expected 'lambda x' before ':'");
            }
            if (lambdaArgs[0][0].text === "key" && lambdaArgs[0][1].text === "=") {
                lambdaArgs[0] = lambdaArgs[0].slice(2);
            }
            if (lambdaArgs[0][0].text !== "lambda") {
                error("Expected 'lambda x' before ':'");
            }
            if (lambdaArgs[0].length === 2) {
                setCurrentArrayElementName(lambdaArgs[0][1].text);
                setCurrentArrayIndexName("");
            } else if (lambdaArgs[0].length === 4) {
                if (lambdaArgs[0][2].text !== ",") {
                    error("Expected ',' after '" + lambdaArgs[0][1].text + "', but found '" + lambdaArgs[0][2].text);
                }
                setCurrentArrayElementName(lambdaArgs[0][1].text);
                setCurrentArrayIndexName(lambdaArgs[0][3].text);
            } else {
                error("Expected 1 or 3 tokens after 'lambda', but got " + (lambdaArgs.length - 1));
            }

            sortedCondition = parse(lambdaArgs[1]);
            setCurrentArrayElementName("");
            setCurrentArrayIndexName("");
        } else if (args.length !== 1) {
            error("Function 'sorted' takes 1 or 2 arguments, received " + args.length);
        }
        var astArgs = [parse(args[0])];
        if (sortedCondition !== null) {
            astArgs.push(sortedCondition);
        } else {
            astArgs.push(new Ast("__currentArrayElement__"));
        }
        return new Ast("sorted", astArgs);
    }

    if (name === "createWorkshopSetting") {
        if (args.length !== 4 && args.length !== 5) {
            error("Function 'createWorkshopSetting' takes 4 or 5 arguments, received " + args.length);
        }
        if (args.length === 4) {
            args.push([{ text: "0", fileStack: [] }]);
        }

        return new Ast("__createWorkshopSetting__", [parseType(args[0]), ...args.slice(1).map((x) => parse(x))]);
    }

    //Check for subroutine call
    if (args.length === 0) {
        if (isSubroutineName(name)) {
            return new Ast("__callSubroutine__", [new Ast(name, [], [], "Subroutine")]);
        }
    }

    //Old functions
    let functionAliases: Record<string, string> = {
        "destroyAllInWorldText": "destroyAllInWorldTexts",
        "disableEnvironmentCollision": ".disableEnvironmentCollision",
        "enableEnvironmentCollision": ".enableEnvironmentCollision",
        "enablePlayerCollision": ".enablePlayerCollision",
        "horizontalAngleFromDirection": "horizontalAngleOfDirection",
        "getLastDoT": "getLastDamageOverTimeId",
        "getLastHoT": "getLastHealingOverTimeId",
        "getNumberOfDoTIds": "getNumberOfDamageOverTimeIds",
        "getNumberOfHoTIds": "getNumberOfHealingOverTimeIds",
        "moveToTeam": ".moveToTeam",
        "printLog": "logToInspector",
        "rgba": "rgb",
        "hsla": "hsl",
        "updateEveryTick": "updateEveryFrame",
        "angleToDirection": "directionFromAngles",
        "buttonString": "inputBindingString",
        "teamHasHero": "isHeroBeingPlayed",
        "removeFromGame": ".removeFromGame",
        "stopDoT": "stopDamageOverTime",
        "stopHoT": "stopHealingOverTime",
    };

    if (name in functionAliases) {
        name = functionAliases[name];
    }

    let astResult = new Ast(
        name,
        parseArgs(name, args),
    );
    if (name === "debug") {
        astResult.tokenArgsStr = dispTokens(content.slice(2, content.length - 1), true);
    }
    return astResult;
}

function parseMember(object: Token[], member: Token[]) {
    debug("Parsing member '" + dispTokens(member) + "' of object '" + dispTokens(object) + "'");

    if (member.length === 0) {
        error("Expected tokens after '.'");
    }

    var name = member[0].text;
    //debug("name = "+name);
    var args = null;
    if (member.length > 1) {
        if (member[1].text === "(") {
            if (member[member.length - 1].text !== ")") {
                setFileStack(member[member.length - 1].fileStack);
                error("Unexpected token '" + member[member.length - 1].text + "'");
            }
            args = splitTokens(member.slice(2, member.length - 1), ",");
        } else {
            error("Expected '(' after '" + name + "', but got '" + member[1].text + "'");
        }
    }

    if (args === null) {
        if (["x", "y", "z"].includes(name)) {
            return new Ast(`__${name}ComponentOf__`, [parse(object)]);
        }

        if (object.length === 1) {
            //Check for member of a user-declared enum
            //Do not throw an error if the name is not in the enum, as it can be in a built-in enum
            if (object[0].text in enumMembers && name in enumMembers[object[0].text]) {
                return enumMembers[object[0].text][name].clone();
            }

            //Fix for older gamemodes
            if (object[0].text === "Hero" && name === "MCCREE") {
                name = "CASSIDY";
            }
            if (object[0].text === "Hero" && name === "HAMMOND") {
                name = "WRECKING_BALL";
            }

            //Check for enums
            if (Object.keys(constantValues).includes(object[0].text)) {
                return new Ast(name, [], [], object[0].text);
            } else if (builtInEnumNameToAstInfo[object[0].text as keyof typeof builtInEnumNameToAstInfo]) {
                const astInfo = builtInEnumNameToAstInfo[object[0].text as keyof typeof builtInEnumNameToAstInfo];
                if (astInfo.name === "__color__" && constantValues[astInfo.type][name].onlyInOverpy) {
                    return new Ast("rgb", [getAstForNumber(constantValues[astInfo.type][name].red ?? 0), getAstForNumber(constantValues[astInfo.type][name].green ?? 0), getAstForNumber(constantValues[astInfo.type][name].blue ?? 0), getAstForNumber(constantValues[astInfo.type][name].alpha ?? 255)]);
                }
                return new Ast(astInfo.name, [new Ast(name, [], [], astInfo.type)]);
                //Check the pseudo-enum "math"
            } else if (object[0].text === "Math") {
                if (name === "PI") {
                    return getAstForNumber(3.141592653589793);
                } else if (name === "E") {
                    return getAstForE();
                } else if (name === "INFINITY") {
                    return getAstForInfinity();
                } else if (name === "EPSILON") {
                    return getAstForNumber(0.0000001192093);
                } else if (name === "SPHERE_HORIZONTAL_RADIUS_MULT") {
                    return getAstForNumber(0.984724);
                } else if (name === "SPHERE_VERTICAL_RADIUS_MULT") {
                    return getAstForNumber(0.998959);
                } else if (name === "INNER_RING_RADIUS_MULT") {
                    return getAstForNumber(0.9415);
                } else if (name === "OUTER_RING_RADIUS_MULT") {
                    return getAstForNumber(0.94965);
                } else if (name === "RING_EXPLOSION_RADIUS_MULT") {
                    return getAstForNumber(0.48);
                } else if (name === "FUCKTON_OF_SPACES" || name === "LOTS_OF_SPACES") {
                    return getAstForFucktonOfSpaces();
                } else if (name === "FUCKTON_OF_NEWLINES" || name === "LOTS_OF_NEWLINES") {
                    return getAstForCustomString("\n".repeat(125));
                } else {
                    error("Unhandled member 'Math." + name + "'");
                }

                //Check the pseudo-enum "Vector"
            } else if (object[0].text === "Vector") {
                return new Ast("Vector." + name);

                //Check for textures
            } else if (object[0].text === "Texture") {
                setEnableTagsSetup(true);
                if (!isVarName("__holygrail__", true)) {
                    addVariable("__holygrail__", true, -1);
                }
                if (name in opyTextures) {
                    return getAstForCustomString(opyTextures[name].replace("<", "{0}"), [new Ast("__globalVar__", [new Ast("__holygrail__", [], [], "GlobalVariable")])]);
                } else {
                    error("Unhandled member 'Texture." + name + "'");
                }

                //Check for number
            } else if (isNumber(object[0].text)) {
                if (!isNumber(name)) {
                    error("Expected a number after '.' but got '" + name + "'");
                }
                return new Ast("__number__", [new Ast(object[0].text + "." + name, [], [], "UnsignedFloatLiteral")], [], "unsigned float");
            }
        }

        //Should be a player variable.
        if (!isVarName(name, false)) {
            error("Unknown member '" + name + "' of '" + dispTokens(object) + "'");
        }
        return new Ast("__playerVar__", [parse(object), new Ast(name, [], [], "PlayerVariable")]);
    } else {
        if (object[0].text === "random" && object.length === 1) {
            if (name === "randint" || name === "uniform") {
                if (args.length !== 2) {
                    error("Function 'random." + name + "' takes 2 arguments, received " + args.length);
                }
                return new Ast("random." + name, [parse(args[0]), parse(args[1])]);
            } else if (name === "shuffle" || name === "choice") {
                if (args.length !== 1) {
                    error("Function 'random." + name + "' takes 1 argument, received " + args.length);
                }
                return new Ast("random." + name, [parse(args[0])]);
            } else {
                error("Unhandled member 'random." + name + "'");
            }
        } else {
            //Assume it is a generic member function

            //old functions
            let functionAliases: Record<string, string> = {
                "setCamera": "startCamera",
                "disableHeroHUD": "disableHeroHud",
                "startDoT": "startDamageOverTime",
                "startHoT": "startHealingOverTime",
                "getCurrentHero": "getHero",
                "hasStatusEffect": "hasStatus",
                "stopAllDoT": "stopAllDamageOverTime",
                "stopAllHoT": "stopAllHealingOverTime",
            };
            if (name in functionAliases) {
                name = functionAliases[name];
            }
            return new Ast("." + name, parseArgs("."+name, [object].concat(args)));
        }
    }

    error("This shouldn't happen");
}

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
function parseLiteralArray(content: Token[]) {
    if (content.length === 2) {
        return new Ast("__array__");
    }

    //Check for "for" keyword
    var forOperands = splitTokens(content.slice(1, content.length - 1), "for");
    if (forOperands.length === 2) {
        var inOperands = splitTokens(forOperands[1], "in", false);
        if (inOperands.length !== 2) {
            error("Expected 'in' after 'for'");
        }
        var ifOperands = splitTokens(inOperands[1], "if");

        if (ifOperands.length === 1) {
            //Expect something like "[x == y for x in z]"
            //Parse as the "mapped array" function.
            var inOperands = splitTokens(forOperands[1], "in", false);
            let mappingFunction = forOperands[0];
            if (inOperands[0].length === 1) {
                //It is the current array element name
                setCurrentArrayElementName(inOperands[0][0].text);
                setCurrentArrayIndexName("");
            } else if (inOperands[0].length === 3) {
                if (inOperands[0][1].text !== ",") {
                    error("Malformed '[x for a, b in z]': expected ',' but found '" + inOperands[0][1].text + "'");
                }
                setCurrentArrayElementName(inOperands[0][0].text);
                setCurrentArrayIndexName(inOperands[0][2].text);
            } else {
                error("Malformed '[x for y in z]': 1st operand of 'in' has length " + inOperands[0].length + ", expected 1 or 3");
            }
            var parsedMappingFunction = parse(forOperands[0]);
            setCurrentArrayElementName("");
            setCurrentArrayIndexName("");

            return new Ast("__mappedArray__", [parse(inOperands[1]), parsedMappingFunction]);
        } else if (ifOperands.length === 2) {
            //Filtered array
            //Expect something like "[a for x in y if z == 2]"

            if (inOperands[0].length === 1) {
                //It is the current array element name
                setCurrentArrayElementName(inOperands[0][0].text);
                setCurrentArrayIndexName("");
            } else if (inOperands[0].length === 3) {
                if (inOperands[0][1].text !== ",") {
                    error("Malformed '[x for a,b in y if z]': expected ',' but found '" + inOperands[0][1].text + "'");
                }
                setCurrentArrayElementName(inOperands[0][0].text);
                setCurrentArrayIndexName(inOperands[0][2].text);
            } else {
                error("Malformed '[x for a,b in y if z]': 1st operand of 'in' has length " + inOperands[0].length + ", expected 1 or 3");
            }

            debug("Parsing 'a for x in y if z', a='" + forOperands[0] + "', x='" + inOperands[0] + "', y='" + ifOperands[0] + "', z='" + ifOperands[1] + "'");

            var filterCondition = parse(ifOperands[1]);
            let mappingFunction = parse(forOperands[0]);

            setCurrentArrayElementName("");
            setCurrentArrayIndexName("");

            //#302 - code generation for current array index won't work as expected with filtered+mapped arrays if the current array index is in the mapping function
            //Map to [elem, index], then filter, then apply the actual mapping function.
            //currentArrayElement becomes currentArrayElement[0] and currentArrayIndex becomes currentArrayElement[1].
            if (astContainsFunctions(mappingFunction, ["__currentArrayIndex__"])) {
                //warn("w_current_array_index_in_mapping_function", "The current array index is used in the mapping function of a filtered+mapped array. This will not work as expected, as the workshop first filters then maps, not both at the same time.");

                mappingFunction = replaceFunctionInAst(mappingFunction, "__currentArrayElement__", new Ast("__valueInArray__", [new Ast("__currentArrayElement__"), getAstFor0()]));
                mappingFunction = replaceFunctionInAst(mappingFunction, "__currentArrayIndex__", new Ast("__valueInArray__", [new Ast("__currentArrayElement__"), getAstFor1()]));

                filterCondition = replaceFunctionInAst(filterCondition, "__currentArrayElement__", new Ast("__valueInArray__", [new Ast("__currentArrayElement__"), getAstFor0()]));
                filterCondition = replaceFunctionInAst(filterCondition, "__currentArrayIndex__", new Ast("__valueInArray__", [new Ast("__currentArrayElement__"), getAstFor1()]));

                //array.map((x,i) => [x,i]).filter(x => filterCondition).map(x => mappingFunction)
                return new Ast("__mappedArray__", [new Ast("__filteredArray__", [new Ast("__mappedArray__", [parse(ifOperands[0]), new Ast("__array__", [new Ast("__currentArrayElement__"), new Ast("__currentArrayIndex__")])]), filterCondition]), mappingFunction]);
            }

            return new Ast("__mappedArray__", [new Ast("__filteredArray__", [parse(ifOperands[0]), filterCondition]), mappingFunction]);
        } else {
            error("Expected 0 or 1 'if' after 'in', but found " + (ifOperands.length - 1));
        }
    } else if (forOperands.length === 1) {
        //Literal array with only values ([1,2,3])
        var args = splitTokens(content.slice(1, content.length - 1), ",");
        //Allow trailing comma
        if (args[args.length - 1].length === 0) {
            args.pop();
        }

        return new Ast(
            "__array__",
            args.map((x) => parse(x)),
        );
    } else {
        error("Expected 0 or 1 'for', but found " + (forOperands.length - 1));
    }

    error("This shouldn't happen");
}

//Parses a dictionary.
function parseDictionary(content: Token[]) {
    content = content.slice(1, content.length - 1);
    var elems = splitTokens(content, ",");
    //support trailing comma
    if (elems.length > 0 && elems[elems.length - 1].length === 0) {
        elems.pop();
    }

    let dictKeys = new Set();

    var astElems = [];
    for (var elem of elems) {
        var keyValue = splitTokens(elem, ":");
        if (keyValue.length !== 2) {
            error("Expected a value of the form 'key: value' but got '" + dispTokens(elem) + "'");
        }
        if (dictKeys.has(dispTokens(keyValue[0]))) {
            error("Duplicate key '" + dispTokens(keyValue[0]) + "' in dictionary");
        } else {
            dictKeys.add(dispTokens(keyValue[0]));
        }
        astElems.push(new Ast("__dictElem__", [parse(keyValue[0], {isDictKey: true}), parse(keyValue[1])]));
    }
    return new Ast("__dict__", astElems);
}
