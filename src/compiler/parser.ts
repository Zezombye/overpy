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
import { bigLettersMappings, caseSensitiveReplacements, fullwidthMappings, operatorPrecedence, funcKw, notConstantFunctions, reservedNames, reservedMemberNames, DEBUG_MODE } from "../globalVars";
import { OverPyCompiler } from "../godClasses";
import { BaseNormalFileStackMember, OWLanguage, StringToken } from "../types";
import { Token } from "./tokenizer";
import { Ast, areAstsAlwaysEqual, replaceFunctionInAst } from "../utils/ast";
import { debug, functionNameToString, getInternalFileStack } from "../utils/logging";
import { isNumber } from "../utils/other";
import { escapeString, getUtf8Length } from "../utils/strings";
import { LogicalLine } from "./tokenizer";
import { opyTextures } from "../data/opy/textures";
import {dispTokens} from "../utils/tokens";

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

//Lazily initialized, as globalVars may not be evaluated yet when this module is (esbuild bundle order with circular imports).
let operatorPrecedenceKeys: Set<string>;
//Same as operatorPrecedence, but as a Map (faster lookups than an object with punctuation keys)
let operatorPrecedenceMap: Map<string, number>;
let maxOperatorPrecedence: number;
let ifPrecedence: number;
//Unary plus/minus are not in operatorPrecedence; their precedence is between "%" and "**"
let unaryPlusMinusPrecedence: number;
//Template for the per-precedence operator positions in parseRange (copied at each call)
let noOperatorPositions: number[];
function initOperatorTables() {
    if (operatorPrecedenceKeys !== undefined) {
        return;
    }
    operatorPrecedenceKeys = new Set(Object.keys(operatorPrecedence));
    operatorPrecedenceMap = new Map(Object.entries(operatorPrecedence));
    maxOperatorPrecedence = operatorPrecedence["**"];
    noOperatorPositions = [];
    for (let precedence = 0; precedence <= maxOperatorPrecedence; precedence++) {
        noOperatorPositions.push(-1);
    }
    ifPrecedence = operatorPrecedence["if"];
    unaryPlusMinusPrecedence = operatorPrecedence["%"] + 1;
    if (unaryPlusMinusPrecedence >= maxOperatorPrecedence) {
        throw new Error("Expected a free precedence level between '%' and '**' for unary plus/minus");
    }
}

const tokenToFuncMapping: Record<string, string> = {
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
    macro: "__macro__",
};

//Old functions
const functionAliases: Record<string, string> = {
    "destroyAllInWorldText": "destroyAllInWorldTexts",
    "disableEnvironmentCollision": ".disableEnvironmentCollision",
    "enableEnvironmentCollision": ".enableEnvironmentCollision",
    "enablePlayerCollision": ".enablePlayerCollision",
    "horizontalAngleFromDirection": "horizontalAngleOfDirection",
    "getLastAssistID": "getLastAssistId",
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
    "stopChasingVariable": "stopChasing",
    "stopDoT": "stopDamageOverTime",
    "stopHoT": "stopHealingOverTime",
};

//Old member functions
const memberFunctionAliases: Record<string, string> = {
    "setCamera": "startCamera",
    "disableHeroHUD": "disableHeroHud",
    "startDoT": "startDamageOverTime",
    "startHoT": "startHealingOverTime",
    "getCurrentHero": "getHero",
    "hasStatusEffect": "hasStatus",
    "stopAllDoT": "stopAllDamageOverTime",
    "stopAllHoT": "stopAllHealingOverTime",
};

OverPyCompiler.prototype.parseLines = function(lines: LogicalLine[]): Ast[] {
    var result: Ast[] = [];
    let currentComments: string[] = [];

    for (var i = 0; i < lines.length; i++) {
        let currentLine = lines[i];

        if (currentLine.tokens.length === 0) {
            this.error("Received an empty line");
        }
        this.fileStack = this.getFileStackRange(currentLine.tokens);

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
                this.error("Malformed " + currentLine.tokens[0].text + " declaration");
            }
            if (currentLine.indentLevel !== 0) {
                this.error(currentLine.tokens[0].text + " directive cannot be indented");
            }
            var index: number = currentLine.tokens.length > 2 ? Number.parseInt(currentLine.tokens[2].text) : -1;
            if (Number.isNaN(index)) {
                this.error("Invalid index for " + currentLine.tokens[0].text + " directive:" + currentLine.tokens[2].text);
            }

            if (currentLine.tokens[0].text === "globalvar") {
                this.addVariable(currentLine.tokens[1].text, true, index, this.getFileStackRange(currentLine.tokens), initDirective);
            } else if (currentLine.tokens[0].text === "playervar") {
                this.addVariable(currentLine.tokens[1].text, false, index, this.getFileStackRange(currentLine.tokens), initDirective);
            } else {
                this.addSubroutine(currentLine.tokens[1].text, index, this.getFileStackRange(currentLine.tokens), false);
            }
            currentComments = [];
            continue;
        }

        //Handle macro constants
        if (currentLine.tokens[0].text === "macro" && currentLine.tokens.length >= 4 && currentLine.tokens[currentLine.tokens.length - 1].text !== ":") {
            if (currentLine.indentLevel !== 0) {
                this.error("Macro directive cannot be indented");
            }
            if (currentLine.tokens.length < 4) {
                this.error("Malformed macro declaration");
            }
            let name = currentLine.tokens[1].text;
            let class_;
            if (currentLine.tokens[2].text === ".") {
                class_ = name;
                name = "."+currentLine.tokens[3].text;
                if (currentLine.tokens.length < 6) {
                    this.error("Malformed macro declaration");
                }
            }
            if (currentLine.tokens[class_ ? 4 : 2].text !== "=") {
                this.error("Malformed macro declaration");
            }
            if (class_) {
                this.astMacroLocalVariables.push("self");
            }
            let value = this.parse(currentLine.tokens.slice(class_ ? 5 : 3));
            this.astMacroLocalVariables = [];
            if ((class_ ? reservedMemberNames : reservedNames).includes(name.replace(".", ""))) {
                this.error("Macro name '" + name + "' is a reserved word", currentLine.tokens[1].fileStack);
            }
            if (name in this.astConstants) {
                this.error("Macro '" + name + "' already exists", currentLine.tokens[1].fileStack);
            }
            if (this.isVarName(name.replace(".", ""), (class_ ? false : true))) {
                this.error("Macro '" + name + "' is already a " + (class_ ? "player" : "global")+" variable", currentLine.tokens[1].fileStack);
            }
            this.astConstants[name] = {
                name: name,
                value: value,
                class_: class_,
                valueStr: dispTokens(currentLine.tokens.slice(class_ ? 5 : 3), true),
            };
            currentComments = [];
            continue;
        }

        // Handle custom game settings
        if (currentLine.tokens[0].text === "settings") {
            let customGameSettings: Token[];
            try {
                if (currentLine.tokens.length === 2) {

                    let basePath = this.rootPath;
                    for (let k = this.fileStack.length - 1; k >= 0; k--) {
                        if (this.fileStack[k].path) {
                            basePath = this.fileStack[k].path as string;
                            break;
                        }
                    }
                    var path = this.getFilePaths(currentLine.tokens[1].text, basePath)[0];
                    let customGameSettingsLines = this.tokenize(this.getFileContent(path));
                    if (customGameSettingsLines.length !== 1) {
                        this.error("Could not parse custom game settings (got " + customGameSettingsLines.length + " logical lines, expected 1)");
                    }
                    customGameSettings = customGameSettingsLines[0].tokens;
                } else {
                    customGameSettings = currentLine.tokens.slice(1);
                }
            } catch (e) {
                // @ts-ignore
                throw this.error(e);
            }

            let customGameSettingsAst = this.parseAst(this.Ast("__settings__", [this.parse(customGameSettings)]));
            if (DEBUG_MODE) {
                console.log("Settings AST: ", customGameSettingsAst);
            }
            this.compileCustomGameSettings(this.customGameSettingsAstToObject(customGameSettingsAst));
            currentComments = [];
            continue;
        }

        // Handle directives
        if (currentLine.tokens[0].text.startsWith("@")) {
            if (["@Condition", "@Name", "@NewPage"].includes(currentLine.tokens[0].text)) {
                var currentLineAst = this.Ast(currentLine.tokens[0].text, currentLine.tokens[0].text === "@NewPage" && currentLine.tokens.length === 1 ? [] : [this.parse(currentLine.tokens.slice(1))], [], "__Annotation__");
            } else {
                var currentLineAst = this.Ast(
                    currentLine.tokens[0].text,
                    currentLine.tokens.slice(1).map((x) => this.Ast(x.text, [], [], "__AnnotationArg__")),
                    [],
                    "__Annotation__",
                );
            }
            if (currentComments.length > 0) {
                currentLineAst.comment = commentArrayToString(currentComments);
            }
            result.push(currentLineAst);
        } else if (currentLine.tokens[0].text in tokenToFuncMapping) {
            var funcName = tokenToFuncMapping[currentLine.tokens[0].text];
            var args: string[] | Ast[] = [];
            var children = [];
            var instructionRuleAttributes: null | Record<string, string> = null;
            var lineMembers = this.splitTokens(currentLine.tokens, ":", true);
            if (lineMembers.length === 1) {
                this.error("Expected a ':' at the end of the line");
            }

            if (funcName === "__rule__") {
                if (lineMembers[0].length < 2) {
                    this.error("Malformatted 'rule' declaration");
                }
                instructionRuleAttributes = {};
                instructionRuleAttributes.name = lineMembers[0].slice(1).map((x) => this.unescapeString(x.text, true)).join("");
                this.currentRuleName = instructionRuleAttributes.name;
            } else if (funcName === "__enum__") {
                if (lineMembers[0].length !== 2) {
                    this.error("Malformatted 'enum' declaration");
                }
                args = [this.Ast(lineMembers[0][1].text, [], [], "__EnumName__")];
            } else if (funcName === "__def__") {
                if (lineMembers[0].length !== 4 || lineMembers[0][2].text !== "(" || lineMembers[0][3].text !== ")") {
                    this.error("Malformatted 'def' declaration");
                }
                instructionRuleAttributes = {};
                instructionRuleAttributes.subroutineName = lineMembers[0][1].text;
                this.currentRuleName = "Subroutine "+instructionRuleAttributes.subroutineName;
                if (this.isSubroutineName(instructionRuleAttributes.subroutineName)) {
                    for (var subroutine of this.subroutines) {
                        if (subroutine.name === instructionRuleAttributes.subroutineName) {
                            if (subroutine.isFromDefStatement) {
                                this.error("Duplicate definition of subroutine '" + instructionRuleAttributes.subroutineName + "'", lineMembers[0][1].fileStack);
                            } else {
                                break;
                            }
                        }
                    }
                } else {
                    this.addSubroutine(instructionRuleAttributes.subroutineName, null, lineMembers[0][1].fileStack, true);
                }
            }

            if (!["__else__", "__doWhile__", "__rule__", "__enum__", "__def__", "__default__", "__macro__"].includes(funcName)) {
                args = [this.parse(lineMembers[0].slice(1))];
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
                this.fileStack = lines[j].tokens[0].fileStack;

                if (lines[j].indentLevel <= currentLineIndent) {
                    break;
                }
                if (lines[j].indentLevel > currentLineIndent && nextIndentLevel !== null && lines[j].indentLevel < nextIndentLevel) {
                    this.error("Indentation does not match any outer indentation level");
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
                    args = [this.parse(lines[j].tokens.slice(1))];
                    j++;
                } else {
                    this.error("Found 'do', but no matching 'while'");
                }
            }

            if (funcName === "__enum__") {
                if (typeof args[0] === "string") {
                    throw this.error("First argument for enum must be an instance of Ast, but got a string instead.");
                }

                //Implement our own mini-parser to not get "function does not exist" errors.
                if (!(args[0].name in this.enumMembers)) {
                    this.enumMembers[args[0].name] = {};
                }
                var lastIntValue: number | Ast = 0;
                for (var k = 0; k < childrenLines.length; k++) {
                    this.fileStack = childrenLines[k].tokens[0].fileStack;
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
                    var assignOperands = this.splitTokens(childrenLines[k].tokens, "=", false);
                    let enumValue = null;
                    if (assignOperands.length === 1) {
                        //Enum member was not assigned a value
                        if (typeof lastIntValue === "number") {
                            enumValue = this.getAstForNumber(lastIntValue);
                            lastIntValue++;
                        } else if (lastIntValue instanceof Ast && lastIntValue.name === "__negate__" && lastIntValue.args[0].name === "__number__") {
                            lastIntValue = -lastIntValue.args[0].args[0].numValue + 1;
                            enumValue = this.getAstForNumber(lastIntValue);
                            lastIntValue++;
                        } else {
                            throw this.error("Cannot auto-increment enum member, as last value was " + functionNameToString(lastIntValue));
                        }
                    } else {
                        enumValue = this.parse(assignOperands[1]);
                        if (enumValue.name === "__number__") {
                            lastIntValue = enumValue.args[0].numValue + 1;
                        } else {
                            //Check that there are only constant functions, as to not mislead the programmer; enums are just macros in disguise
                            if (
                                this.astContainsFunctions(
                                    enumValue,
                                    notConstantFunctions,
                                    false,
                                )
                            ) {
                                this.warn("w_enum_constant", "The value of " + args[0].name + "." + childrenLines[k].tokens[0] + " seems to not be constant; it will be inlined and not stored.");
                            }

                            lastIntValue = enumValue;
                        }
                    }
                    let enumMemberName = childrenLines[k].tokens[0].toString();
                    if (enumMemberName in this.enumMembers[args[0].name] && !this.allowMacroRedeclaration) {
                        throw this.error("Duplicate enum member '" +args[0].name+"."+ enumMemberName + "''");
                    }
                    this.enumMembers[args[0].name][enumMemberName] = enumValue;
                }
                //We do not care about enums in the AST
                i += j - i - 1;
                continue;

            } else if (funcName === "__macro__") {

                if (lineMembers[0].length < 4) {
                    this.error("Malformatted 'macro' declaration");
                }
                if (currentLine.indentLevel !== 0) {
                    this.error("Macro declaration cannot be indented");
                }
                let name = lineMembers[0][1].text;
                let class_;
                if (lineMembers[0][2].text === ".") {
                    class_ = name;
                    name = "."+lineMembers[0][3].text;
                }
                let macroArgTokens = lineMembers[0].slice((class_ ? 4 : 2));
                if (macroArgTokens[0].text !== "(" || macroArgTokens[macroArgTokens.length - 1].text !== ")") {
                    this.error("Malformatted macro arguments");
                }
                macroArgTokens = macroArgTokens.slice(1, macroArgTokens.length - 1);
                let macroArgsTokens = this.splitTokens(macroArgTokens, ",", true);
                let macroArgs = [];
                if (macroArgsTokens.length === 0 && class_) {
                    macroArgs.push({name: "self", type: "Value"});
                }

                for (let [argTokensIdx, argTokens] of Object.entries(macroArgsTokens)) {
                    if (argTokens.length === 0) {
                        this.error("Empty argument in macro declaration");
                    }
                    if (argTokens.length === 1) {
                        if (argTokens[0].text === "self" && !class_) {
                            this.error("Cannot use 'self' in a non-class macro", argTokens[0].fileStack);
                        }
                        if (argTokens[0].text === "self" && argTokensIdx !== "0") {
                            this.error("The 'self' argument must be the first argument in a class macro", argTokens[0].fileStack);
                        }
                        macroArgs.push({
                            name: argTokens[0].text,
                            type: "Value",
                        });
                    } else {
                        if (argTokens[1].text !== "=") {
                            this.error("Malformed macro argument '"+argTokens[0].text+"'", argTokens[0].fileStack);
                        }
                        if (argTokens[0].text === "self") {
                            this.error("Cannot assign default value to 'self'", argTokens[0].fileStack);
                        }
                        macroArgs.push({
                            name: argTokens[0].text,
                            default: this.parse(argTokens.slice(2)),
                            defaultStr: dispTokens(argTokens.slice(2), true),
                            type: "Value",
                        });
                    }
                }
                if (class_ && macroArgs[0].name !== "self") {
                    macroArgs.unshift({name: "self", type: "Value"});
                }

                this.astMacroLocalVariables.push(...macroArgs.map(x => x.name));
                let macroLines = this.parseLines(childrenLines);
                this.fileStack = this.getFileStackRange(currentLine.tokens);
                if (macroLines.length === 0) {
                    this.error("Macro '" + name + "' cannot be empty (use 'pass' for a no-op macro)");
                }
                if (macroLines[0].name === "__elif__" || macroLines[0].name === "__else__") {
                    this.error("Macro '" + name + "' cannot start with an 'elif' or 'else' statement");
                }
                this.astMacroLocalVariables = [];

                //Do not use args as signature (to allow macro overloading), it would make the code too complex and is unnecessary with default values
                if (name in this.astMacros) {
                    if (!this.allowMacroRedeclaration) {
                        this.error("Macro '" + name + "' already exists", lineMembers[0][1].fileStack);
                    }
                }
                if (name in funcKw) {
                    this.error("Macro '" + name + "' is already a built-in function", lineMembers[0][1].fileStack);
                }

                this.astMacros[name] = {
                    name: name,
                    class_: class_,
                    lines: macroLines,
                    linesStr: childrenLines.map(x => " ".repeat(x.indentLevel) + dispTokens(x.tokens, true)),
                    args: macroArgs,
                };

                //We do not care about macros in the AST
                i += j - i - 1;
                continue;
            } else {
                children = this.parseLines(childrenLines);
            }

            this.fileStack = currentLine.tokens[0].fileStack;
            let instruction = this.Ast(funcName, args, children);
            if (currentComments.length > 0) {
                instruction.comment = commentArrayToString(currentComments);
            }
            if (instructionRuleAttributes !== null) {
                instruction.ruleAttributes = instructionRuleAttributes;
            }

            result.push(instruction);
            i += j - i - 1;
        } else {
            var currentLineAst = this.parse(currentLine.tokens);
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

OverPyCompiler.prototype.getOperator = function(tokens: Token[], operators: string[], rtlPrecedence = false, allowUnaryPlusOrMinus = false) {
    initOperatorTables();
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
            if (allowUnaryPlusOrMinus || (i !== 0 && (!operatorPrecedenceKeys.has(tokens[i - 1].text) || (tokens[i - 1].text === "not" && tokens[i].text === "in"))) || (i === 0 && tokens[i].text === "not")) {
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
        this.error("Lexer broke (bracket level is " + bracketsLevel + ")");
    }

    return {
        operatorFound,
        operatorPosition,
    };
}

OverPyCompiler.prototype.parseArgs = function(funcName: string, args: Token[][]) {
    let funcInfo;
    if (funcName in funcKw) {
        funcInfo = funcKw[funcName];
    } else if (funcName in this.astMacros) {
        funcInfo = this.astMacros[funcName];
    } else {
        throw this.error("Unknown function '"+funcName+"'");
    }
    if (funcInfo.args === null) {
        if (args.length > 0) {
            this.error("Function '"+funcName+"' takes no argument");
        }
        return [];
    }
    //Note: the argument arrays are built with push() rather than Array(n).fill()/map(), so that they are "packed" arrays like the array literals used elsewhere (mixing both kinds makes every args[i] access polymorphic).
    if ([".format", "__customString__", "__localizedString__", "__array__", "__dict__", "__enumType__", "range"].includes(funcName)) {
        //Those functions take infinite arguments or a wacky number of arguments
        let result: Ast[] = [];
        for (let arg of args) {
            result.push(this.parse(arg));
        }
        return result;
    }

    //Only built if a keyword argument is encountered, as most calls only use positional arguments
    let funcArgsDict: Record<string, number> | null = null;
    let positionalArgs: (Token[] | Ast | null)[] = [];
    for (let i = 0; i < funcInfo.args!.length; i++) {
        positionalArgs.push(null);
    }
    let hasKwArg = false;
    for (let [i, arg] of args.entries()) {
        if (arg.length > 2 && arg[1].text === "=") {
            if (funcArgsDict === null) {
                funcArgsDict = Object.fromEntries(funcInfo.args!.map((x, i) => [x.name, i]));
            }
            if (!(arg[0].text in funcArgsDict)) {
                this.error("Unknown keyword argument '"+arg[0].text+"' for function '"+funcName+"'", arg[0].fileStack);
            }
            hasKwArg = true;
            let argIndex = funcArgsDict[arg[0].text];
            if (positionalArgs[argIndex] !== null) {
                this.error("Argument '"+arg[0].text+"' of function '"+funcName+"' is defined twice", arg[0].fileStack);
            }
            positionalArgs[argIndex] = arg.slice(2);
        } else {
            if (hasKwArg) {
                this.error("Cannot use positional arguments after keyword arguments", this.getFileStackRange(arg));
            }
            positionalArgs[i] = arg;
        }
    }

    for (let [i, arg] of funcInfo.args!.entries()) {
        if (positionalArgs[i] === null) {
            if (arg.default !== undefined) {

                positionalArgs[i] = this.getAstForArgDefault(arg);
            } else {
                this.error("Missing argument '"+arg.name+"' for function '"+funcName+"'");
            }
        }
    }

    let result: Ast[] = [];
    for (let positionalArg of positionalArgs) {
        result.push(positionalArg instanceof Ast ? positionalArg : this.parse(positionalArg as Token[]));
    }
    return result;
}

const comparisonOpToFuncMapping: Record<string, string> = {
    "==": "__equals__",
    "!=": "__inequals__",
    "<=": "__lessThanOrEquals__",
    ">=": "__greaterThanOrEquals__",
    "<": "__lessThan__",
    ">": "__greaterThan__",
};
const modifyOpToFuncMapping: Record<string, string> = {
    "+=": "__add__",
    "-=": "__subtract__",
    "*=": "__multiply__",
    "/=": "__divide__",
    "%=": "__modulo__",
    "**=": "__raiseToPower__",
    "min=": "min",
    "max=": "max",
};
const arithmeticOpToFuncMapping: Record<string, string> = {
    "/": "__divide__",
    "*": "__multiply__",
    "%": "__modulo__",
    "**": "__raiseToPower__",
};

OverPyCompiler.prototype.parse = function(content: Token[], kwargs: Record<string, any> = {}): Ast {
    if (content === undefined) {
        this.error("Content is undefined");
    }
    return this.parseRange(content, 0, content.length, kwargs);
}

/**
 * Parses the tokens in [start, end). This is the core of the parser: the expression is split on the operator with the lowest precedence, and the operands are parsed recursively.
 *
 * The operators are found with a single scan of the tokens. For each precedence level, the scan records the operator that would be selected for this level:
 * - levels parsed left-to-right (most of them) select the rightmost operator, so the operand split is left-associative;
 * - levels parsed right-to-left ("if", unary plus/minus, "**") select the leftmost one.
 * An operator token only qualifies if it is at the top bracket level and is not immediately preceded by another operator (the "not in" and unary cases are handled specially).
 */
OverPyCompiler.prototype.parseRange = function(tokens: Token[], start: number, end: number, kwargs: Record<string, any> = {}): Ast {
    if (end - start <= 0) {
        this.error("Content is empty (missing operand or argument?)");
    }

    this.fileStack = tokens[start].fileStack;
    if (DEBUG_MODE) {
        debug("Parsing '" + dispTokens(tokens.slice(start, end)) + "'");
    }

    let firstText = tokens[start].text;

    //Handle the "del" directive.
    if (firstText === "del") {
        let result = this.Ast("__del__", [this.parseRange(tokens, start + 1, end)]);
        result.fileStack = this.getFileStackRange(tokens, start, end);
        return result;
    }

    //Parse the "goto" directive.
    if (firstText === "goto") {
        if (end - start < 2) {
            this.error("Expected a label or a formula after 'goto'");
        }
        if (end - start === 2) {
            //Check for the special "RULE_START" and convert to the "Loop" instruction.
            if (tokens[start + 1].text === "RULE_START") {
                return this.Ast("loop");
            }
            //The goto goes to a label.
            return this.Ast("__skip__", [this.Ast("__distanceTo__", [this.Ast(tokens[start + 1].text, [], [], "Label")])]);
        } else {
            //The goto should be of the format "loc+XXX".
            if (tokens[start + 1].text !== "loc" || tokens[start + 2].text !== "+") {
                this.error("Expected a label or 'loc+XXX' after 'goto'");
            }
            let result = this.Ast("__skip__", [this.parseRange(tokens, start + 3, end)]);
            result.fileStack = this.getFileStackRange(tokens, start, end);
            return result;
        }
    }

    //Parse labels. We do not need to care about 'else:' as they are already parsed in the parseLines function.
    if (end - start === 2 && tokens[start + 1].text === ":") {
        return this.Ast(firstText, [], [], "Label");
    }

    //Check for ++/--.
    if (end - start > 2 && tokens[end - 1].text === "+" && tokens[end - 2].text === "+") {
        var op1 = this.parseRange(tokens, start, end - 2);
        this.fileStack = this.getFileStackRange(tokens, start, end);
        return this.Ast("__assignTo__", [op1, this.Ast("__add__", [op1, this.getAstFor1()])]);
    }
    if (end - start > 2 && tokens[end - 1].text === "-" && tokens[end - 2].text === "-") {
        var op1 = this.parseRange(tokens, start, end - 2);
        this.fileStack = this.getFileStackRange(tokens, start, end);
        return this.Ast("__assignTo__", [op1, this.Ast("__subtract__", [op1, this.getAstFor1()])]);
    }

    //Parse operators, according to the operator precedence in operatorPrecedence.
    if (kwargs.minOperatorPrecedence === undefined) {
        kwargs.minOperatorPrecedence = 1;
    }
    initOperatorTables();

    //Single scan of the tokens: for each precedence level, the position of the operator to split on (-1 if none).
    //Also records the top-level brackets and the last top-level "." for the array/parentheses/member checks below.
    let operatorPositions = noOperatorPositions.slice();
    let lastTopLevelDotIndex = -1;
    let nbTopLevelBracketPairs = 0;
    let firstTopLevelOpenBracket = -1;
    let lastTopLevelOpenBracket = -1;
    let firstTopLevelCloseBracket = -1;
    {
        let bracketsLevel = 0;
        for (let i = start; i < end; i++) {
            let text = tokens[i].text;
            if (text === "(" || text === "[" || text === "{") {
                if (bracketsLevel === 0) {
                    nbTopLevelBracketPairs++;
                    if (firstTopLevelOpenBracket === -1) {
                        firstTopLevelOpenBracket = i;
                    }
                    lastTopLevelOpenBracket = i;
                }
                bracketsLevel++;
            } else if (text === ")" || text === "]" || text === "}") {
                bracketsLevel--;
                if (bracketsLevel === 0) {
                    if (firstTopLevelCloseBracket === -1) {
                        firstTopLevelCloseBracket = i;
                    }
                } else if (bracketsLevel < 0) {
                    this.error("Lexer broke (bracket level is " + bracketsLevel + ")");
                }
            } else if (bracketsLevel === 0) {
                if (text === ".") {
                    lastTopLevelDotIndex = i;
                    continue;
                }
                let precedence = operatorPrecedenceMap.get(text);
                if (precedence === undefined) {
                    continue;
                }
                let isPrecededByOperator = i > start && operatorPrecedenceKeys.has(tokens[i - 1].text);
                if (text === "+" || text === "-") {
                    //Unary plus/minus: parsed right to left, and any plus/minus qualifies
                    if (operatorPositions[unaryPlusMinusPrecedence] === -1) {
                        operatorPositions[unaryPlusMinusPrecedence] = i;
                    }
                    //Binary plus/minus: parsed left to right
                    if (i > start && !isPrecededByOperator) {
                        operatorPositions[precedence] = i;
                    }
                } else if (text === "not") {
                    //"not in" is handled by the "in" operator
                    if (i + 1 < end && tokens[i + 1].text === "in") {
                        continue;
                    }
                    if (i === start || !isPrecededByOperator) {
                        operatorPositions[precedence] = i;
                    }
                } else if (i > start && (!isPrecededByOperator || (text === "in" && tokens[i - 1].text === "not"))) {
                    if (precedence === maxOperatorPrecedence || precedence === ifPrecedence) {
                        //Parsed right to left: keep the leftmost operator
                        if (operatorPositions[precedence] === -1) {
                            operatorPositions[precedence] = i;
                        }
                    } else {
                        operatorPositions[precedence] = i;
                    }
                }
            }
        }
        if (bracketsLevel !== 0) {
            this.error("Lexer broke (bracket level is " + bracketsLevel + ")");
        }
    }

    for (var precedence = kwargs.minOperatorPrecedence; precedence <= maxOperatorPrecedence; precedence++) {
        let operatorPosition = operatorPositions[precedence];
        if (operatorPosition === -1) {
            continue;
        }

        //The operator is present; parse it. The operands are [start, operatorPosition) and [operatorPosition+1, end).
        var operator = tokens[operatorPosition].text;

        if (operator === "=") {
            let result = this.Ast("__assignTo__", [this.parseRange(tokens, start, operatorPosition), this.parseRange(tokens, operatorPosition + 1, end)]);
            result.fileStack = this.getFileStackRange(tokens, start, end);
            return result;
        } else if (operator === "if") {
            //"true if condition else false"

            var trueExpr = this.parseRange(tokens, start, operatorPosition);
            //Find the first top-level "else" in the right operand
            let elsePosition = -1;
            let bracketsLevel = 0;
            for (let i = operatorPosition + 1; i < end; i++) {
                let text = tokens[i].text;
                if (text === "(" || text === "[" || text === "{") {
                    bracketsLevel++;
                } else if (text === ")" || text === "]" || text === "}") {
                    bracketsLevel--;
                } else if (text === "else" && bracketsLevel === 0) {
                    elsePosition = i;
                    break;
                }
            }
            if (elsePosition === -1) {
                this.error("Found 'if', but no 'else'");
            }
            var falseExpr = this.parseRange(tokens, elsePosition + 1, end);
            var condition = this.parseRange(tokens, operatorPosition + 1, elsePosition);

            this.fileStack = this.getFileStackRange(tokens, start, end);
            return this.Ast("__ifThenElse__", [condition, trueExpr, falseExpr]);
        } else if (operator === "or" || operator === "and") {
            var op1 = this.parseRange(tokens, start, operatorPosition);
            var op2 = this.parseRange(tokens, operatorPosition + 1, end);
            this.fileStack = this.getFileStackRange(tokens, start, end);
            return this.Ast("__" + operator + "__", [op1, op2]);
        } else if (operator === "not") {
            var op1 = this.parseRange(tokens, operatorPosition + 1, end);
            this.fileStack = this.getFileStackRange(tokens, start, end);
            return this.Ast("__not__", [op1]);
        } else if (operator === "in") {
            var isNotInOperator = false;
            let valueEnd = operatorPosition;
            if (operatorPosition - start > 1 && tokens[operatorPosition - 1].text === "not") {
                isNotInOperator = true;
                valueEnd--;
            }
            var value = this.parseRange(tokens, start, valueEnd);
            var array = this.parseRange(tokens, operatorPosition + 1, end);
            this.fileStack = this.getFileStackRange(tokens, start, end);
            if (isNotInOperator) {
                return this.Ast("__not__", [this.Ast("__arrayContains__", [array, value])]);
            } else {
                return this.Ast("__arrayContains__", [array, value]);
            }
        } else if (operator in comparisonOpToFuncMapping) {
            var op1 = this.parseRange(tokens, start, operatorPosition);
            var op2 = this.parseRange(tokens, operatorPosition + 1, end);
            this.fileStack = this.getFileStackRange(tokens, start, end);
            return this.Ast(comparisonOpToFuncMapping[operator], [op1, op2]);
        } else if (operator in modifyOpToFuncMapping) {
            //Actually de-optimize so we can keep the logic in one place.
            //Transform "A += 1" to "A = A + 1".

            const variable = this.parseRange(tokens, start, operatorPosition);
            const opName = modifyOpToFuncMapping[operator];
            const value = this.parseRange(tokens, operatorPosition + 1, end);

            this.fileStack = this.getFileStackRange(tokens, start, end);
            //Do not de-optimize if the variable is random. Else we get random.choice(A) += 1 transformed to random.choice(A) = random.choice(A) + 1.
            if (!areAstsAlwaysEqual(variable, variable)) {
                // This is not a mistake: areAstsAlwaysEqual checks if its arguments are equal when called twice, which includes randomness.
                return this.Ast("__modifyVar__", [variable, this.Ast(opName, [], [], "__Operation__"), value]);
            }

            return this.Ast("__assignTo__", [variable, this.Ast(opName, [variable, value])]);
        } else if (operator === "+" || operator === "-") {
            if (precedence === unaryPlusMinusPrecedence) {
                //unary plus/minus
                if (operatorPosition - start > 1 && tokens[operatorPosition - 1].text === "**") {
                    //In case of things like "A ** -B", go to the next operator (which will be **)
                    continue;
                }
                if (operator === "+") {
                    return this.parseRange(tokens, operatorPosition + 1, end);
                } else {
                    let result = this.Ast("__negate__", [this.parseRange(tokens, operatorPosition + 1, end)]);
                    result.fileStack = this.getFileStackRange(tokens, start, end);
                    return result;
                }
            } else {
                if (operator === "+") {
                    let result = this.Ast("__add__", [this.parseRange(tokens, start, operatorPosition), this.parseRange(tokens, operatorPosition + 1, end)]);
                    result.fileStack = this.getFileStackRange(tokens, start, end);
                    return result;
                } else {
                    let result = this.Ast("__subtract__", [this.parseRange(tokens, start, operatorPosition), this.parseRange(tokens, operatorPosition + 1, end)]);
                    result.fileStack = this.getFileStackRange(tokens, start, end);
                    return result;
                }
            }
        } else if (operator in arithmeticOpToFuncMapping) {
            var op1 = this.parseRange(tokens, start, operatorPosition);
            var op2 = this.parseRange(tokens, operatorPosition + 1, end);
            this.fileStack = this.getFileStackRange(tokens, start, end);
            return this.Ast(arithmeticOpToFuncMapping[operator], [op1, op2]);
        }
        this.error("Unhandled operator " + operator);
    }

    //Parse array
    if (tokens[end - 1].text === "]") {
        if (nbTopLevelBracketPairs === 1 && firstTopLevelOpenBracket === start) {
            //It is a literal array such as [1,2,3] or [i for i in A if x].
            return this.parseLiteralArray(tokens.slice(start, end));
        } else {
            var array = this.parseRange(tokens, start, lastTopLevelOpenBracket);
            var value = this.parseRange(tokens, lastTopLevelOpenBracket + 1, end - 1);
            this.fileStack = this.getFileStackRange(tokens, start, end);
            return this.Ast("__valueInArray__", [array, value]);
        }
    }

    //Parse dictionary
    if (firstText === "{") {
        return this.parseDictionary(tokens.slice(start, end));
    }

    //Check for "." operator, which has the highest precedence.
    //It must be parsed from right to left.
    if (lastTopLevelDotIndex !== -1) {
        return this.parseMember(tokens.slice(start, lastTopLevelDotIndex), tokens.slice(lastTopLevelDotIndex + 1, end));
    }

    //Check for parentheses
    if (firstText === "(") {
        if (nbTopLevelBracketPairs === 1 && firstTopLevelCloseBracket === end - 1) {
            //All the expression is in parentheses; just remove them
            return this.parseRange(tokens, start + 1, end - 1);
        } else {
            this.error("Malformatted parentheses");
        }
    }

    //The remaining cases are leaves of the expression (strings, function calls, names), handled on a copy of the range
    let content = start === 0 && end === tokens.length ? tokens : tokens.slice(start, end);

    //Check for strings
    if (content[content.length - 1].text.startsWith('"') || content[content.length - 1].text.startsWith("'")) {
        return this.parseString(content, kwargs);
    }

    //Parse args and name of function.
    var name = content[0].text;
    var args = null;
    if (content.length > 1) {
        if (content[1].text === "(") {
            args = this.splitTokens(content.slice(2, content.length - 1), ",");
        } else {
            this.error("Expected '(' after '" + name + "', but got '" + content[1].text + "' (is '"+name+"' a valid keyword/variable?)");
        }
    }

    if (args === null) {
        //Check for current array element variable name
        if (this.currentArrayElementName === name) {
            var result = this.Ast("__currentArrayElement__");
            result.originalName = name;
            return result;
        }

        //Check for current array index variable name
        if (this.currentArrayIndexName === name) {
            var result = this.Ast("__currentArrayIndex__");
            result.originalName = name;
            return result;
        }

        //Check for enums
        if (this.enumMembers[name]) {
            return this.Ast(
                "__enumType__",
                Object.values(this.enumMembers[name]).map((x) => x.clone()),
                [],
                "Type",
            );
        } else if (name in builtInEnumNameToAstInfo) {
            const astInfo = builtInEnumNameToAstInfo[name as keyof typeof builtInEnumNameToAstInfo];
            const values = Object.keys(constantValues[astInfo.type])
                .filter((key) => key !== "description")
                .map((key) => this.Ast(astInfo.name, [this.Ast(key, [], [], astInfo.type)]));
            return this.Ast("__enumType__", values, [], "Type");
        }

        //Check for global variable
        if (this.isVarName(name, true)) {
            return this.Ast("__globalVar__", [this.Ast(name, [], [], "GlobalVariable")]);
        }

        //Check for local variable
        if (this.astMacroLocalVariables.includes(name)) {
            return this.Ast("$"+name);
        }

        //Check for constant
        if (name in this.astConstants) {
            let result = this.astConstants[name].value.clone();
            result.fileStack = this.getFileStackRange(content);
            return result;
        }


        //Check for number. A word (letters, digits, "_", "@", "$") can only be a number if it starts with a digit or is "Infinity" (parseFloat accepts it), so skip the parseInt/parseFloat calls otherwise.
        let firstCharCode = name.charCodeAt(0);
        if (((firstCharCode >= 48 && firstCharCode <= 57) || name === "Infinity") && isNumber(name)) {
            //It is an int, else it would have a dot, and wouldn't be processed here.
            //It is also an unsigned int, as the negative sign is not part of the name.
            if (name.startsWith("0x")) {
                //Convert hex numbers to decimal. Do not do that for all numbers, to keep stuff like 1e10 which is accepted by the workshop.
                name = parseInt(name, 16).toString();
            }
            return this.Ast("__number__", [this.Ast(name, [], [], "UnsignedIntLiteral")], [], "unsigned int");
        }

        if (name === "RULE_CONDITION") {
            name = "ruleCondition";
        }
        if (name === "default") {
            name = "__default__";
        }

        try {
            return this.Ast(name);
        } catch (e) {
            if (kwargs.isDictKey) {
                //Macros such as splitDictArray can have dicts with arbitrary keys. Try again but set it as dict key
                return this.Ast(name, [], [], "DictKey");
            } else {
                throw e;
            }
        }
    }

    this.fileStack = this.getFileStackRange(content);
    if (DEBUG_MODE) {
        debug("args: " + args.map((x) => "'" + dispTokens(x) + "'").join(", "));
    }

    //Special functions


    if (name === "_" || name === "__" || name === "___") {
        if (args.length !== 1 && args.length !== 2) {
            this.error("Function '"+name+"' takes 2 arguments, received " + args.length);
        }
        let context = null;
        if (args.length === 2) {
            if (args[0].length !== 1 || (args[0][0].text[0] !== "'" && args[0][0].text[0] !== "\"")) {
                this.error("First argument of function '"+name+"' must be a string literal");
            }
            context = this.unescapeString(args[0][0].text, true);
        }
        let translationTarget = this.parse(args[args.length-1], {disableTranslation: true});
        this.fileStack = this.getFileStackRange(content);
        let result;
        let formatArgs: Ast[] = [];
        if (translationTarget.name === "__customString__") {
            formatArgs = translationTarget.args.slice(1);
            result = this.getTranslatedString(translationTarget.args[0].name, context, content[content.length-1].fileStack as BaseNormalFileStackMember[]);
        } else {
            //It is a variable; assume the value is a translated string (string array)
            if (args.length !== 1) {
                this.error("Cannot specify translation context when not translating a string literal");
            }
            result = this.Ast("__translateString__", [translationTarget]);
        }
        if (name === "__") {
            result.isSpectatorTranslation = true;
        }
        if (name === "___") {
            result.forceNotResolvingTranslation = true;
        }
        if (formatArgs.length > 0) {
            return this.Ast(".format", [result, ...formatArgs]);
        }
        return result;

    }

    if (name === "async" || name === "startRule") {
        if (args.length !== 1 && args.length !== 2) {
            this.error("Function '"+name+"' takes 1 or 2 arguments, received " + args.length);
        }
        //Check if first arg is indeed a subroutine
        var subroutineArg = args[0][0].text;
        if (!this.isSubroutineName(subroutineArg)) {
            this.error("Expected subroutine name as first argument");
        }

        let result = this.Ast("startRule", [this.Ast(subroutineArg, [], [], "Subroutine"), args.length > 1 ? this.parse(args[1]) : this.Ast("RESTART", [], [], "StartRuleBehavior")]);
        result.fileStack = this.getFileStackRange(content);
        return result;
    }

    if (name === "chase") {
        if (args.length !== 4) {
            this.error("Function 'chase' takes 4 arguments, received " + args.length);
        }
        if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
            this.error("3rd argument of function 'chase' must be 'rate = xxxx' or 'duration = xxxx'", args[2][0].fileStack);
        }

        if (args[3].length !== 3 || args[3][0].text !== "ChaseReeval" || args[3][1].text !== ".") {
            this.error("Expected a member of the 'ChaseReeval' enum as 4th argument for function 'chase', but got '" + dispTokens(args[3]) + "'");
        }
        args[3][0].text = "__ChaseReeval__";
        if (args[2][0].text === "rate") {
            var funcName = "chaseAtRate";
            args[3][0].text = "ChaseRateReeval";
        } else {
            var funcName = "chaseOverTime";
            args[3][0].text = "ChaseTimeReeval";
        }

        let result = this.Ast(funcName, [this.parse(args[0]), this.parse(args[1]), this.parse(args[2].slice(2)), this.parse(args[3])]);
        result.fileStack = this.getFileStackRange(content);
        return result;
    }

    if (name === "__distanceTo__") {
        if (args.length !== 1) {
            this.error("Function '__distanceTo__' takes 1 argument, received " + args.length);
        }
        if (args[0].length !== 1) {
            this.error("Function '__distanceTo__' takes a label as argument");
        }
        return this.Ast("__distanceTo__", [this.Ast(args[0][0].text, [], [], "Label")]);
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

            let result = this.Ast("raycast", [this.parse(args[0]), this.parse(args[1]), this.parse(args[2]), this.parse(args[3]), this.parse(args[4])]);
            result.fileStack = this.getFileStackRange(content);
            return result;
        } else {
            this.error("Function 'raycast' takes 5 arguments, received " + args.length);
        }
    }

    if (name === "sorted") {
        //Lazy & dirty way of properly parsing "sorted(x, lambda a,b: z)" as the parser also splits on the comma on "lambda a,b".
        if (args.length === 3) {
            //Use a real Token so all tokens have the same shape (faster property accesses)
            args[1].push(new Token(",", getInternalFileStack()));
            args[1].push(...args[2]);
            args = args.slice(0, 2);
        }

        let sortedCondition: Ast | null = null;

        if (args.length === 2) {
            var lambdaArgs = this.splitTokens(args[1], ":");
            if (lambdaArgs.length !== 2) {
                this.error("Syntax for sorted array condition is 'lambda x: condition(x)'");
            }
            if (lambdaArgs[0].length < 2) {
                this.error("Expected 'lambda x' before ':'");
            }
            if (lambdaArgs[0][0].text === "key" && lambdaArgs[0][1].text === "=") {
                lambdaArgs[0] = lambdaArgs[0].slice(2);
            }
            if (lambdaArgs[0][0].text !== "lambda") {
                this.error("Expected 'lambda x' before ':'");
            }
            if (lambdaArgs[0].length === 2) {
                this.currentArrayElementName = lambdaArgs[0][1].text;
                this.currentArrayIndexName = "";
            } else if (lambdaArgs[0].length === 4) {
                if (lambdaArgs[0][2].text !== ",") {
                    this.error("Expected ',' after '" + lambdaArgs[0][1].text + "', but found '" + lambdaArgs[0][2].text, lambdaArgs[0][2].fileStack);
                }
                this.currentArrayElementName = lambdaArgs[0][1].text;
                this.currentArrayIndexName = lambdaArgs[0][3].text;
            } else {
                this.error("Expected 1 or 3 tokens after 'lambda', but got " + (lambdaArgs.length - 1), lambdaArgs[0][0].fileStack);
            }

            sortedCondition = this.parse(lambdaArgs[1]);
            this.currentArrayElementName = "";
            this.currentArrayIndexName = "";
        } else if (args.length !== 1) {
            this.error("Function 'sorted' takes 1 or 2 arguments, received " + args.length);
        }
        var astArgs = [this.parse(args[0])];
        if (sortedCondition !== null) {
            astArgs.push(sortedCondition);
        } else {
            astArgs.push(this.Ast("__currentArrayElement__"));
        }
        this.fileStack = this.getFileStackRange(content);
        return this.Ast("sorted", astArgs);
    }

    if (name === "createWorkshopSetting") {
        if (args.length !== 4 && args.length !== 5) {
            this.error("Function 'createWorkshopSetting' takes 4 or 5 arguments, received " + args.length);
        }
        if (args.length === 4) {
            args.push([new Token("0", getInternalFileStack())]);
        }

        let result = this.Ast("__createWorkshopSetting__", [this.parseType(args[0]), ...args.slice(1).map((x) => this.parse(x))]);
        result.fileStack = this.getFileStackRange(content);
        return result;
    }

    //Check for subroutine call
    if (args.length === 0) {
        if (this.isSubroutineName(name)) {
            return this.Ast("__callSubroutine__", [this.Ast(name, [], [], "Subroutine")]);
        }
    }

    if (name in functionAliases) {
        name = functionAliases[name];
    }

    let astResult = this.Ast(
        name,
        this.parseArgs(name, args),
    );
    astResult.fileStack = this.getFileStackRange(content);
    if (name === "debug") {
        astResult.tokenArgsStr = dispTokens(content.slice(2, content.length - 1), true);
    }
    return astResult;
}

OverPyCompiler.prototype.parseMember = function(object: Token[], member: Token[]) {
    if (DEBUG_MODE) {
        debug("Parsing member '" + dispTokens(member) + "' of object '" + dispTokens(object) + "'");
    }

    if (member.length === 0) {
        this.error("Expected tokens after '.'");
    }
    this.fileStack = member[0].fileStack;

    var name = member[0].text;
    //debug("name = "+name);
    var args = null;
    if (member.length > 1) {
        if (member[1].text === "(") {
            if (member[member.length - 1].text !== ")") {
                this.error("Unexpected token '" + member[member.length - 1].text + "'", member[member.length - 1].fileStack);
            }
            args = this.splitTokens(member.slice(2, member.length - 1), ",");
        } else {
            this.error("Expected '(' after '" + name + "', but got '" + member[1].text + "' (is '" + name + "' a valid keyword/variable?)");
        }
    }

    if (args === null) {
        if (["x", "y", "z"].includes(name)) {
            let result = this.Ast(`__${name}ComponentOf__`, [this.parse(object)]);
            result.fileStack = this.getFileStackRange(object.concat(...member));
            return result;
        }

        if (object.length === 1) {


            if (object[0].text === "AsyncBehavior") {
                object[0].text = "StartRuleBehavior"
            }
            //Check for member of a user-declared enum
            //Do not throw an error if the name is not in the enum, as it can be in a built-in enum
            if (object[0].text in this.enumMembers && name in this.enumMembers[object[0].text]) {
                let result = this.enumMembers[object[0].text][name].clone();
                result.fileStack = this.getFileStackRange(object.concat(...member));
                return result;
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
                return this.Ast(name, [], [], object[0].text);
            } else if (builtInEnumNameToAstInfo[object[0].text as keyof typeof builtInEnumNameToAstInfo]) {
                const astInfo = builtInEnumNameToAstInfo[object[0].text as keyof typeof builtInEnumNameToAstInfo];
                if (astInfo.name === "__color__" && constantValues[astInfo.type][name]?.onlyInOverpy) {
                    return this.Ast("rgb", [this.getAstForNumber(constantValues[astInfo.type][name].red ?? 0), this.getAstForNumber(constantValues[astInfo.type][name].green ?? 0), this.getAstForNumber(constantValues[astInfo.type][name].blue ?? 0), this.getAstForNumber(constantValues[astInfo.type][name].alpha ?? 255)]);
                }
                if (astInfo.name === "__map__") {
                    this.usedMaps.add(name.toLowerCase());
                }
                return this.Ast(astInfo.name, [this.Ast(name, [], [], astInfo.type)]);
                //Check the pseudo-enum "math"
            } else if (object[0].text === "Math") {
                if (name === "PI") {
                    return this.getAstForNumber(3.141592653589793);
                } else if (name === "E") {
                    return this.getAstForE();
                } else if (name === "INFINITY") {
                    return this.getAstForInfinity();
                } else if (name === "EPSILON") {
                    return this.getAstForNumber(0.0000001192093);
                } else if (name === "SPHERE_HORIZONTAL_RADIUS_MULT") {
                    return this.getAstForNumber(0.984724);
                } else if (name === "SPHERE_VERTICAL_RADIUS_MULT") {
                    return this.getAstForNumber(0.998959);
                } else if (name === "INNER_RING_RADIUS_MULT") {
                    return this.getAstForNumber(0.9415);
                } else if (name === "OUTER_RING_RADIUS_MULT") {
                    return this.getAstForNumber(0.94965);
                } else if (name === "RING_EXPLOSION_RADIUS_MULT") {
                    return this.getAstForNumber(0.48);
                } else if (name === "FUCKTON_OF_SPACES" || name === "LOTS_OF_SPACES") {
                    return this.getAstForFucktonOfSpaces();
                } else if (name === "FUCKTON_OF_NEWLINES" || name === "LOTS_OF_NEWLINES") {
                    return this.getAstForCustomString("\n".repeat(125));
                } else {
                    this.error("Unhandled member 'Math." + name + "'");
                }

                //Check the pseudo-enum "Vector"
            } else if (object[0].text === "Vector") {
                return this.Ast("Vector." + name);

                //Check for textures
            } else if (object[0].text === "Texture") {
                this.enableTagsSetup = true;
                if (!this.isVarName("__holygrail__", true)) {
                    this.addVariable("__holygrail__", true, -1, getInternalFileStack());
                }
                if (name in opyTextures) {
                    return this.getAstForCustomString(opyTextures[name].replace("<", "{0}"), [this.Ast("__globalVar__", [this.Ast("__holygrail__", [], [], "GlobalVariable")])]);
                } else {
                    this.error("Unhandled member 'Texture." + name + "'");
                }

                //Check for number
            } else if (isNumber(object[0].text)) {
                if (!isNumber(name)) {
                    this.error("Expected a number after '.' but got '" + name + "'");
                }
                return this.Ast("__number__", [this.Ast(object[0].text + "." + name, [], [], "UnsignedFloatLiteral")], [], "unsigned float");
            }

        }

        //Check for member constant
        if ("." + name in this.astConstants) {
            let result = this.astConstants["." + name].value.clone();
            result = replaceFunctionInAst(result, "$self", this.parse(object));
            result.fileStack = this.getFileStackRange(object.concat(...member));
            return result;
        }

        //Should be a player variable.
        if (!this.isVarName(name, false)) {
            this.error("Unknown member '" + name + "' of '" + dispTokens(object) + "'");
        }
        let result = this.Ast("__playerVar__", [this.parse(object), this.Ast(name, [], [], "PlayerVariable")]);
        result.fileStack = this.getFileStackRange(object.concat(...member));
        return result;
    } else {

        this.fileStack = this.getFileStackRange(object.concat(...member));

        if (object[0].text === "random" && object.length === 1) {
            if (name === "randint" || name === "uniform") {
                if (args.length !== 2) {
                    this.error("Function 'random." + name + "' takes 2 arguments, received " + args.length);
                }
                let result = this.Ast("random." + name, [this.parse(args[0]), this.parse(args[1])]);
                result.fileStack = this.getFileStackRange(object.concat(...member));
                return result;
            } else if (name === "shuffle" || name === "choice") {
                if (args.length !== 1) {
                    this.error("Function 'random." + name + "' takes 1 argument, received " + args.length);
                }
                let result = this.Ast("random." + name, [this.parse(args[0])]);
                result.fileStack = this.getFileStackRange(object.concat(...member));
                return result;
            } else {
                this.error("Unhandled member 'random." + name + "'");
            }
        } else if (name === "format") {
            let stringAst = this.parse(object);
            if (stringAst.name !== "__customString__" && stringAst.name !== "__translatedString__" && stringAst.name !== "__localizedString__") {
                this.error("Expected a string literal for .format(), but got '" + dispTokens(object) + "'", this.getFileStackRange(object));
            }
            let argsAst = this.parseArgs("."+name, args);
            if (stringAst.name === "__translatedString__") {
                //Handle that in the AST, as we need to know the parent for getAstForTranslatedString
                let result = this.Ast("." + name, [stringAst, ...argsAst]);
                result.fileStack = this.getFileStackRange(object.concat(...member));
                return result;
            }
            if (stringAst.args.length > 1) {
                this.error("Cannot use .format() on f-strings");
            }
            stringAst.args.push(...argsAst);
            stringAst.fileStack = this.getFileStackRange(object.concat(...member));
            return stringAst;
        } else {
            //Array member functions that take a lambda: .map, .filter, .all, .any
            if (["map", "filter", "all", "any"].includes(name) && args !== null) {
                //Lazy & dirty way of properly parsing ".map(lambda a,b: z)" as the parser also splits on the comma on "lambda a,b".
                if (args.length === 2) {
                    args[0].push(new Token(",", getInternalFileStack()));
                    args[0].push(...args[1]);
                    args = args.slice(0, 1);
                }
                if ((name === "all" || name === "any") && args.length === 0) {
                    //No argument: default to current array element
                    let result = this.Ast("__"+name+"__", [this.parse(object), this.Ast("__currentArrayElement__")]);
                    result.fileStack = this.getFileStackRange(object.concat(...member));
                    return result;
                }

                if (args.length !== 1) {
                    this.error("Function '." + name + "' takes 1 argument (a lambda expression), received " + args.length);
                }
                var lambdaArgs = this.splitTokens(args[0], ":");
                if (lambdaArgs.length !== 2) {
                    this.error("Syntax for ." + name + "() is '." + name + "(lambda x: expression(x))'");
                }
                if (lambdaArgs[0].length < 2) {
                    this.error("Expected 'lambda x' before ':'");
                }
                if (lambdaArgs[0][0].text !== "lambda") {
                    this.error("Expected 'lambda x' before ':'");
                }
                if (lambdaArgs[0].length === 2) {
                    this.currentArrayElementName = lambdaArgs[0][1].text;
                    this.currentArrayIndexName = "";
                } else if (lambdaArgs[0].length === 4) {
                    if (lambdaArgs[0][2].text !== ",") {
                        this.error("Expected ',' after '" + lambdaArgs[0][1].text + "', but found '" + lambdaArgs[0][2].text, lambdaArgs[0][2].fileStack);
                    }
                    this.currentArrayElementName = lambdaArgs[0][1].text;
                    this.currentArrayIndexName = lambdaArgs[0][3].text;
                } else {
                    this.error("Expected 1 or 3 tokens after 'lambda', but got " + (lambdaArgs[0].length - 1), lambdaArgs[0][0].fileStack);
                }

                var lambdaBody = this.parse(lambdaArgs[1]);
                this.currentArrayElementName = "";
                this.currentArrayIndexName = "";

                let result = this.Ast({
                    "map": "__mappedArray__",
                    "filter": "__filteredArray__",
                    "all": "__all__",
                    "any": "__any__",
                }[name as "map" | "filter" | "all" | "any"], [this.parse(object), lambdaBody]);
                result.fileStack = this.getFileStackRange(object.concat(...member));
                return result;
            }

            //Assume it is a generic member function

            if (name in memberFunctionAliases) {
                name = memberFunctionAliases[name];
            }
            let result = this.Ast("." + name, this.parseArgs("."+name, [object].concat(args)));
            result.fileStack = this.getFileStackRange(object.concat(...member));
            return result;
        }
    }

    this.error("This shouldn't happen");
};

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
OverPyCompiler.prototype.parseLiteralArray = function(content: Token[]) {
    if (content.length === 2) {
        return this.Ast("__array__");
    }

    //Check for "for" keyword
    var forOperands = this.splitTokens(content.slice(1, content.length - 1), "for");
    if (forOperands.length === 2) {
        var inOperands = this.splitTokens(forOperands[1], "in", false);
        if (inOperands.length !== 2) {
            this.error("Expected 'in' after 'for'");
        }
        var ifOperands = this.splitTokens(inOperands[1], "if");

        if (ifOperands.length === 1) {
            //Expect something like "[x == y for x in z]"
            //Parse as the "mapped array" function.
            var inOperands = this.splitTokens(forOperands[1], "in", false);
            let mappingFunction = forOperands[0];
            if (inOperands[0].length === 1) {
                //It is the current array element name
                this.currentArrayElementName = inOperands[0][0].text;
                this.currentArrayIndexName = "";
            } else if (inOperands[0].length === 3) {
                if (inOperands[0][1].text !== ",") {
                    this.error("Malformed '[x for a, b in z]': expected ',' but found '" + inOperands[0][1].text + "'");
                }
                this.currentArrayElementName = inOperands[0][0].text;
                this.currentArrayIndexName = inOperands[0][2].text;
            } else {
                this.error("Malformed '[x for y in z]': 1st operand of 'in' has length " + inOperands[0].length + ", expected 1 or 3");
            }
            var parsedMappingFunction = this.parse(forOperands[0]);
            this.currentArrayElementName = "";
            this.currentArrayIndexName = "";

            return this.Ast("__mappedArray__", [this.parse(inOperands[1]), parsedMappingFunction]);
        } else if (ifOperands.length === 2) {
            //Filtered array
            //Expect something like "[a for x in y if z == 2]"

            if (inOperands[0].length === 1) {
                //It is the current array element name
                this.currentArrayElementName = inOperands[0][0].text;
                this.currentArrayIndexName = "";
            } else if (inOperands[0].length === 3) {
                if (inOperands[0][1].text !== ",") {
                    this.error("Malformed '[x for a,b in y if z]': expected ',' but found '" + inOperands[0][1].text + "'");
                }
                this.currentArrayElementName = inOperands[0][0].text;
                this.currentArrayIndexName = inOperands[0][2].text;
            } else {
                this.error("Malformed '[x for a,b in y if z]': 1st operand of 'in' has length " + inOperands[0].length + ", expected 1 or 3");
            }

            debug("Parsing 'a for x in y if z', a='" + forOperands[0] + "', x='" + inOperands[0] + "', y='" + ifOperands[0] + "', z='" + ifOperands[1] + "'");

            var filterCondition = this.parse(ifOperands[1]);
            let mappingFunction = this.parse(forOperands[0]);

            this.currentArrayElementName = "";
            this.currentArrayIndexName = "";

            //#302 - code generation for current array index won't work as expected with filtered+mapped arrays if the current array index is in the mapping function
            //Map to [elem, index], then filter, then apply the actual mapping function.
            //currentArrayElement becomes currentArrayElement[0] and currentArrayIndex becomes currentArrayElement[1].
            if (this.astContainsFunctions(mappingFunction, ["__currentArrayIndex__"])) {
                mappingFunction = replaceFunctionInAst(mappingFunction, "__currentArrayElement__", this.Ast("__valueInArray__", [this.Ast("__currentArrayElement__"), this.getAstFor0()]));
                mappingFunction = replaceFunctionInAst(mappingFunction, "__currentArrayIndex__", this.Ast("__valueInArray__", [this.Ast("__currentArrayElement__"), this.getAstFor1()]));

                filterCondition = replaceFunctionInAst(filterCondition, "__currentArrayElement__", this.Ast("__valueInArray__", [this.Ast("__currentArrayElement__"), this.getAstFor0()]));
                filterCondition = replaceFunctionInAst(filterCondition, "__currentArrayIndex__", this.Ast("__valueInArray__", [this.Ast("__currentArrayElement__"), this.getAstFor1()]));

                //array.map((x,i) => [x,i]).filter(x => filterCondition).map(x => mappingFunction)
                return this.Ast("__mappedArray__", [this.Ast("__filteredArray__", [this.Ast("__mappedArray__", [this.parse(ifOperands[0]), this.Ast("__array__", [this.Ast("__currentArrayElement__"), this.Ast("__currentArrayIndex__")])]), filterCondition]), mappingFunction]);
            }

            return this.Ast("__mappedArray__", [this.Ast("__filteredArray__", [this.parse(ifOperands[0]), filterCondition]), mappingFunction]);
        } else {
            this.error("Expected 0 or 1 'if' after 'in', but found " + (ifOperands.length - 1));
        }
    } else if (forOperands.length === 1) {
        //Literal array with only values ([1,2,3])
        var args = this.splitTokens(content.slice(1, content.length - 1), ",");
        //Allow trailing comma
        if (args[args.length - 1].length === 0) {
            args.pop();
        }

        return this.Ast(
            "__array__",
            args.map((x) => this.parse(x)),
        );
    } else {
        this.error("Expected 0 or 1 'for', but found " + (forOperands.length - 1));
    }

    throw this.error("This shouldn't happen");
}

//Parses a dictionary.
OverPyCompiler.prototype.parseDictionary = function(content: Token[]) {
    content = content.slice(1, content.length - 1);
    var elems = this.splitTokens(content, ",");
    //support trailing comma
    if (elems.length > 0 && elems[elems.length - 1].length === 0) {
        elems.pop();
    }

    let dictKeys = new Set();

    var astElems = [];
    for (var elem of elems) {
        var keyValue = this.splitTokens(elem, ":");
        if (keyValue.length !== 2) {
            this.error("Expected a value of the form 'key: value' but got '" + dispTokens(elem) + "'");
        }
        if (dictKeys.has(dispTokens(keyValue[0]))) {
            this.error("Duplicate key '" + dispTokens(keyValue[0]) + "' in dictionary");
        } else {
            dictKeys.add(dispTokens(keyValue[0]));
        }
        astElems.push(this.Ast("__dictElem__", [this.parse(keyValue[0], {isDictKey: true}), this.parse(keyValue[1])]));
    }
    return this.Ast("__dict__", astElems);
}

OverPyCompiler.prototype.parseStringTokens = function(string: string, isFormattedString=false): StringToken[] {

    //Tokenize the string
    let stringTokens: StringToken[] = [];

    let formatterPattern = isFormattedString ? "\\{([^}]*)\\}" : "\\{(\\d*)\\}";
    //Sticky regexes: match at lastIndex without having to create a substring (or a new regex) for each character.
    let formatterEscapeRegex = new RegExp("\\{" + formatterPattern + "\\}", "y");
    let formatterRegex = new RegExp(formatterPattern, "y");
    let tagRegex = new RegExp("(<(tx\\s*|fg\\s*#?)([0-9a-fA-F]|(?<!\\{)"+formatterPattern+")+>)|(</fg>)", "iy");

    //Consecutive text characters are accumulated here instead of pushing one token per character
    let currentText = "";
    const flushText = () => {
        if (currentText !== "") {
            stringTokens.push({
                text: currentText,
                type: "text",
            });
            currentText = "";
        }
    };

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char !== "{" && char !== "<") {
            //Fast path: cannot be the start of a formatter or a tag
            currentText += char;
            continue;
        }
        formatterEscapeRegex.lastIndex = i;
        let formatterEscapeMatch = formatterEscapeRegex.exec(string);
        if (formatterEscapeMatch) {
            currentText += formatterEscapeMatch[0];
            i += formatterEscapeMatch[0].length - 1;
            continue;
        }
        formatterRegex.lastIndex = i;
        let formatterMatch = formatterRegex.exec(string);
        if (formatterMatch) {
            flushText();
            stringTokens.push({
                text: formatterMatch[0],
                type: "arg",
                argIndex: formatterMatch[1] === "" || isFormattedString ? null : parseInt(formatterMatch[1]),
            });
            i += formatterMatch[0].length - 1;
            continue;
        }
        tagRegex.lastIndex = i;
        let tagMatch = this.enableTagsSetup ? tagRegex.exec(string) : null;
        if (tagMatch) {
            flushText();
            //There can be formatters inside a tag, so we need to re-parse
            for (let j = 0; j < tagMatch[0].length; j++) {
                //Note: there cannot be escaped formatters inside a tag, as the regex would not match
                formatterRegex.lastIndex = j;
                let formatterMatch = formatterRegex.exec(tagMatch[0]);
                if (formatterMatch) {
                    stringTokens.push({
                        text: formatterMatch[0],
                        type: "arg",
                        argIndex: formatterMatch[1] === "" || isFormattedString ? null : parseInt(formatterMatch[1]),
                    });
                    j += formatterMatch[0].length - 1;
                    continue;
                }
                if (tagMatch[0][j] === "<") {
                    stringTokens.push({
                        text: "<",
                        type: "holygrail",
                    });
                } else {
                    stringTokens.push({
                        text: tagMatch[0][j],
                        type: "tag",
                    });
                }
            }
            i += tagMatch[0].length - 1;
            continue;
        }
        currentText += char;
    }
    flushText();
    //Concatenate consecutive tag tokens (text tokens are already concatenated)
    stringTokens = stringTokens.reduce((acc, token) => {
        if ((token.type === "text" || token.type === "tag") && acc.length > 0 && acc[acc.length - 1].type === token.type) {
            acc[acc.length - 1].text += token.text;
        } else {
            acc.push(token);
        }
        return acc;
    }, [] as StringToken[]);


    return stringTokens;
}

OverPyCompiler.prototype.parseString = function(content: Token[], kwargs: Record<string, any> = {}) {

    let isTranslatedString = false;
    let isFormattedString = false;
    let isFullwidthString = false;
    let isLocalizedString = false;
    let isBigLettersString = false;
    let isCasedString = false;
    let string = "";
    for (var i = content.length - 1; i >= 0; i--) {
        this.fileStack = content[i].fileStack;
        if (content[i].text.startsWith('"') || content[i].text.startsWith("'")) {
            string = this.unescapeString(content[i].text, true) + string;
        } else {
            if (i !== 0) {
                this.error("Invalid content before string: '" + content[i].text + "'");
            }
            //Parse string modifiers. Note that unlike Python, string modifiers can only be at the start of a concatenation chain (otherwise we run into issues with .format() and all).
            //console.log("string modifiers: "+content[0].text);
            if (content[0].text.includes("l")) {
                if (content[0].text.length > 1) {
                    this.error("Cannot use other string modifiers with 'l'");
                }
                isLocalizedString = true;
            }
            if (content[0].text.includes("b")) {
                isBigLettersString = true;
            }
            if (content[0].text.includes("w")) {
                isFullwidthString = true;
            }
            if (content[0].text.includes("p")) {
                //legacy string modifier, unused
            }
            if (content[0].text.includes("c")) {
                isCasedString = true;
            }
            if (content[0].text.includes("t")) {
                if (content[0].text.length > 2 || content[0].text.length === 2 && !content[0].text.includes("f")) {
                    this.error("Cannot use other string modifiers with 't'");
                }
                isTranslatedString = true;
            }
            if (content[0].text.includes("f")) {
                isFormattedString = true;
            }
            for (let char of content[0].text) {
                if (!["l", "b", "c", "w", "p", "t", "f"].includes(char)) {
                    this.error("Invalid string modifier '" + char + "', valid ones are 'f' (formatted), 'l' (localized), 'b' (big letters), 'c' (case-sensitive), 'w' (fullwidth) and 't' (translate)");
                }
            }
        }
    }
    this.fileStack = this.getFileStackRange(content);

    let stringTokens = this.parseStringTokens(string, isFormattedString);

    if (DEBUG_MODE) {
        debug("String tokens for '"+string+"': " + JSON.stringify(stringTokens));
    }


    let formatArgs = [];

    if (isFormattedString) {
        for (let token of stringTokens) {
            if (token.type !== "arg") {
                continue;
            }
            if (token.text === "{}") {
                this.error("Cannot have empty formatters in a f-string");
            }
            let formatter = token.text.slice(1, -1); //Remove the curly braces
            let lines = this.tokenize(formatter);
            let astLines = this.parseLines(lines);
            if (astLines.length !== 1) {
                this.error("String formatter '" + token.text + "' should only have one line");
            }
            let formatArg = astLines[0];
            formatArgs.push(formatArg);
            token.text = "{}";
        }
        this.fileStack = this.getFileStackRange(content);
    }

    if (isTranslatedString) {
        if (kwargs.disableTranslation) {
            this.error("Translation is disabled in this context but the 't' string modifier was used, please report to Zezombye");
        }
        if (!isFormattedString) {
            return this.getTranslatedString(string, null, content[content.length-1].fileStack as BaseNormalFileStackMember[]);
        } else {
            let result = this.getTranslatedString(stringTokens.map((x) => x.text).join(""), null, content[content.length-1].fileStack as BaseNormalFileStackMember[]);
            result = this.Ast(".format", [result, ...formatArgs]);
            result.fileStack = this.getFileStackRange(content);
            return result;
        }
    }

    if (isBigLettersString) {

        let isConvertedToBigLetters = false;
        //If big letters, try to map letters until we get one
        //We only need one letter to convert to big letters
        for (let token of stringTokens) {
            if (token.type !== "text") {
                continue;
            }
            for (let j = 0; j < token.text.length; j++) {
                if (token.text[j] in bigLettersMappings) {
                    token.text = token.text.substring(0, j) + bigLettersMappings[token.text[j]] + token.text.substring(j + 1);
                    isConvertedToBigLetters = true;
                    break;
                }
            }
            if (isConvertedToBigLetters) {
                break;
            }
        }
        if (!isConvertedToBigLetters) {
            this.error("Could not convert the string "+escapeString(string, false)+" to big letters. The string must have one of the following chars: '" + Object.keys(bigLettersMappings).join("") + "'");
        }
    }

    if (isFullwidthString) {

        let containsNonFullwidthChar = false;
        for (let token of stringTokens) {
            if (token.type !== "text") {
                continue;
            }
            for (let j = 0; j < token.text.length; j++) {
                if (token.text[j] in fullwidthMappings) {
                    token.text = token.text.substring(0, j) + fullwidthMappings[token.text[j]] + token.text.substring(j + 1);
                } else {
                    containsNonFullwidthChar = true;
                }
            }
        }
        if (containsNonFullwidthChar) {
            this.warn("w_not_total_fullwidth", "Could not fully convert the string "+escapeString(string, false)+" to fullwidth characters");
        }
    }
    if (isCasedString) {
        for (let token of stringTokens) {
            if (token.type !== "text") {
                continue;
            }
            token.text = token.text.replace(/e([0123456789!\?\/@"\&#\^\$\*%])/g, "ѐ$1");
            token.text = token.text.replace(/n([0123456789!\?\/@"\&#\^\$\*%])/g, "ǹ$1");
            for (var key of Object.keys(caseSensitiveReplacements)) {
                token.text = token.text.replace(new RegExp(key, "g"), caseSensitiveReplacements[key]);
            }
        }
    }


    //This has the side effect that the converted string will be shown in errors/warnings, but it is worth it to avoid potential bugs by using the ast name instead of stringTokens.map() and not having the string modifiers apply.
    string = stringTokens.map((x) => x.text).join("");

    let result;
    if (isLocalizedString) {
        result = this.Ast("__localizedString__", [this.Ast(string, [], [], "LocalizedStringLiteral"), ...formatArgs]);
    } else {
        result = this.Ast("__customString__", [this.Ast(string, [], [], "CustomStringLiteral"), ...formatArgs]);
    }
    result.stringTokens = stringTokens;
    return result;
}

//This function cannot be in utils/compilation.ts, otherwise it causes import order issues
OverPyCompiler.prototype.customGameSettingsAstToObject = function(customGameSettings: Ast): Record<string, any> | Array<any> | string | number | boolean {
    //console.log(customGameSettings);
    if (customGameSettings.name === "__settings__") {
        if (customGameSettings.args[0].name !== "__dict__") {
            this.error("Expected custom game settings to be a dictionary, but got " + functionNameToString(customGameSettings.args[0]), customGameSettings.args[0].fileStack);
        }
        return this.customGameSettingsAstToObject(customGameSettings.args[0]);
    }
    if (customGameSettings.name === "__dict__") {
        let result: Record<string, any> = {};
        for (let dictElem of customGameSettings.args) {
            if (dictElem.name !== "__dictElem__") {
                this.error("Expected dict element, but got " + functionNameToString(dictElem), dictElem.fileStack);
            }
            let key = this.customGameSettingsAstToObject(dictElem.args[0]);
            if (typeof key !== "string") {
                throw this.error("Dictionary key must be a string literal, got '"+key+"' of type " + typeof key);
            }
            if (key in result) {
                this.error("Duplicate key '" + key + "' in custom game settings");
            }
            result[key] = this.customGameSettingsAstToObject(dictElem.args[1]);
        }
        return result;
    }
    if (customGameSettings.name === "__array__") {
        return customGameSettings.args.map((x) => this.customGameSettingsAstToObject(x));
    }
    if (customGameSettings.name === "__customString__") {
        if (customGameSettings.args.length > 1) {
            this.error("Could not optimize string " + escapeString(customGameSettings.args[0].name, false) + " to be without formatters", customGameSettings.fileStack);
        }
        return customGameSettings.args[0].name;
    }
    if (customGameSettings.name === "__number__") {
        return customGameSettings.args[0].numValue;
    }
    if (customGameSettings.name === "true") {
        return true;
    }
    if (customGameSettings.name === "false") {
        return false;
    }
    throw this.error("Unhandled "+ functionNameToString(customGameSettings) + " in custom game settings, expected dict, array, string, number or boolean", customGameSettings.fileStack);
}
