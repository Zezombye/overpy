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
import { astMacros, currentRuleHasVariableGoto, currentRuleLabelAccess, fileStack, funcKw, optimizeStrict } from "../globalVars";
import { error, functionNameToString } from "./logging";
import { Argument, FileStackMember, StringToken, Type } from "../types";
import { isTypeSuitable } from "./types";
import { constantValues } from "../data/constants";
import { builtInEnumNameToAstInfo, parseStringTokens } from "../compiler/parser";
import { parseOpyMacro } from "./compilation";

//An array of functions for ast parsing (to not have a 4k lines file with all the functions and be able to handle each function in a separate file).
export var astParsingFunctions: Record<string, (content: Ast) => Ast> = {};

export class RuleAttributes {
    isDelimiter = false;
    isDisabled = false;
    name: string;
    event: string;

    constructor(name: string, event: string) {
        this.name = name;
        this.event = event;
    }
}

export class Ast {
    name: string;
    args: Ast[];
    children: Ast[];
    type: Type;
    numValue!: number; //avoids undefined error, only used for __number__ ast anyway
    fileStack: FileStackMember[];
    tokenArgsStr?: string; //Used for the debug() function
    stringTokens?: StringToken[]; //Used for __customString__
    isSpectatorTranslation?: boolean; //Used for translated strings, if set to true then player var won't be used
    forceNotResolvingTranslation?: boolean; //Used for translated strings, if true then the resulting string array won't be indexed and will need to be indexed later on with the _() function
    argIndex = 0;
    childIndex = 0;
    wasParsed = false;
    ruleAttributes: Record<string, any> = {
        isDelimiter: false,
        isDisabled: false,
        name: "",
        event: "",
    };
    doNotReparse = false;
    originalName?: string;
    parent?: Ast;
    expectedType?: Type;
    comment?: string;
    isDisabled: boolean = false;
    clientSideReevaluatedArgIndexes: number[] = [];

    constructor(name: string, args?: any[], children?: Ast[], type?: any) {
        if (name === null || name === undefined) {
            error("Got no name for AST");
        }
        this.name = name;
        this.args = args ? args : [];
        this.children = children ? children : [];

        if (!type) {
            if (name in funcKw) {
                this.type = funcKw[name].return;
            } else if (name in astMacros) {
                this.type = (astMacros[name].lines.length > 2 ? "void" : astMacros[name].lines[0].type);
            } else if (name.startsWith("$")) {
                //macro arg
                this.type = "Value";
            } else {
                error("Unknown function name '" + name + "'");
            }
        } else {
            this.type = type;
        }
        if (isTypeSuitable("FloatLiteral", this.type, false)) {
            this.numValue = Number(name);
        }

        for (var arg of this.args) {
            if (!(arg instanceof Ast)) {
                error("Arg '" + arg + "' of '" + name + "' is not an AST");
            }
            arg.parent = this;
        }
        for (var child of this.children) {
            if (!(child instanceof Ast)) {
                error("Child '" + child + "' of '" + name + "' is not an AST");
            }
            child.parent = this;
        }
        this.fileStack = fileStack;
    }

    clone() {
        var clone: Ast = new Ast(
            this.name,
            this.args.map((x) => x.clone()),
            this.children.map((x) => x.clone()),
            this.type,
        );
        clone.argIndex = this.argIndex;
        clone.childIndex = this.childIndex;
        clone.wasParsed = this.wasParsed;
        clone.ruleAttributes = structuredClone(this.ruleAttributes);
        clone.doNotReparse = this.doNotReparse;
        clone.originalName = this.originalName;
        clone.parent = this.parent;
        clone.expectedType = this.expectedType;
        clone.comment = this.comment;
        clone.isDisabled = this.isDisabled;
        clone.tokenArgsStr = this.tokenArgsStr;
        clone.fileStack = this.fileStack;
        clone.numValue = this.numValue;
        clone.stringTokens = structuredClone(this.stringTokens);
        clone.isSpectatorTranslation = this.isSpectatorTranslation;
        return clone;
    }
}

//Used for when the body of a control flow statement will never execute, such as "if false".
export function makeChildrenUseless(children: Ast[]) {
    /*for (var i = 0; i < children.length; i++) {
        makeChildrenUseless(children[i].children);
        children[i].isPotentiallyUseless = true;
    }
    return;*/

    var foundLabel = false;

    //Recursively check through the tree to see if there are labels that we must decrement the amount of references to.
    function checkForDistanceTo(content: Ast) {
        for (var arg of content.args) {
            if (arg.name === "__distanceTo__") {
                currentRuleLabelAccess[arg.args[0].name]--;
            } else {
                checkForDistanceTo(arg);
            }
        }
    }

    function _makeChildrenUseless(children: Ast[]) {
        for (var i = 0; i < children.length; i++) {
            //Check if there is a label that is accessed at least once. If yes, then the actions below could still be executed; therefore, don't make them useless.

            if (foundLabel) {
                break;
            }
            checkForDistanceTo(children[i]);
            makeChildrenUseless(children[i].children);
            if (children[i].type === "Label") {
                if (currentRuleLabelAccess[children[i].name] > 0) {
                    foundLabel = true;
                }
            } else {
                children[i] = getAstForUselessInstruction();
            }
        }
    }

    //If the current rule has a variable goto, then we cannot make the instructions useless, as we don't know whether they will execute.
    if (!currentRuleHasVariableGoto) {
        _makeChildrenUseless(children);
    }

    return children;
}

//https://workshop.elohell.gg/wiki/bRQhecrRn/Data+type+comparisons/
//Returns true if, when compared to "false", it returns true.
export function isDefinitelyFalsy(content: Ast) {
    if (["__emptyArray__", "false", "null"].includes(content.name)) {
        return true;
    }
    if (content.name === "__array__" && content.args.length === 0) {
        return true;
    }
    //Test for null vector: vect(0,0,0)
    //This makes some optimizations bug out
    /*if (content.name === "vect") {
        return (isDefinitelyFalsy(content.args[0]) && isDefinitelyFalsy(content.args[1]) && isDefinitelyFalsy(content.args[2]));
    }*/
    //Test for number 0
    if (content.name === "__number__") {
        return content.args[0].numValue === 0;
    }
    //Test for arrays, cast as 1st element
    if (content.name === "__array__") {
        return isDefinitelyFalsy(content.args[0]);
    }
    //Test for empty string
    if ((content.name === "__customString__" || content.name === "__localizedString__") && content.args[0].name === "") {
        return true;
    }
    //The rgb function is falsy with any values, but given it is probably a bug, I am not putting it here in case it randomly breaks in the future.

    return false;
}

//Returns true if, when compared to "false", it returns false.
//Not the exact opposite of isDefinitelyFalsy, as in most cases, we can't know either.
export function isDefinitelyTruthy(content: Ast): boolean {
    if (content.name === "true") {
        return true;
    }
    //Test for non-null vector
    if (content.name === "vect") {
        return isDefinitelyTruthy(content.args[0]) || isDefinitelyTruthy(content.args[1]) || isDefinitelyTruthy(content.args[2]);
    }
    //Test for number other than 0
    if (content.name === "__number__") {
        return content.args[0].numValue !== 0;
    }
    //Test for arrays, cast as 1st element
    if (content.name === "__array__") {
        return isDefinitelyTruthy(content.args[0]);
    }
    //Test for built-in enums
    if (["__hero__", "__map__", "__gamemode__", "__team__", "__button__", "__color__"].includes(content.name)) {
        return true;
    }
    //Test for non-empty string. Note: the string could technically not be empty, but only have formatters that could be empty
    if (content.name === "__customString__" || content.name === "__localizedString__") {
        return content.stringTokens!.filter(x => x.type !== "arg").length > 0;
    }

    return false;
}

/**
 * Determines whether the two provided ASTs always evaluate to the same value.
 * @param {Ast} a
 * @param {Ast} b
 * @remarks This function will check for random value functions, and will return false if any are found.
 * @returns Whether AST A and AST B always evaluate to the same value.
 */
export function areAstsAlwaysEqual(a: Ast, b: Ast) {
    if (a.name !== b.name) {
        return false;
    }
    if (["random.randint", "random.uniform", "random.choice", "random.shuffle"].includes(a.name)) {
        return false;
    }
    if (a.args.length !== b.args.length) {
        return false;
    }
    for (var i = 0; i < a.args.length; i++) {
        if (!areAstsAlwaysEqual(a.args[i], b.args[i])) {
            return false;
        }
    }
    return true;
}

//Should check for any function which can return a different value if called twice within the same action.
//For now, only random functions fit that criteria
export function astContainsRandom(ast: Ast) {
    return astContainsFunctions(ast, ["random.randint", "random.uniform", "random.choice", "random.shuffle"]);
}

export function astContainsFunctions(ast: Ast, functionNames: string[], errorOnTrue = false) {
    if (functionNames.includes(ast.name)) {
        if (errorOnTrue) {
            error("Cannot have the " + functionNameToString(ast) + " in this context", ast.fileStack);
        }
        return true;
    }
    for (var arg of ast.args) {
        if (astContainsFunctions(arg, functionNames)) {
            if (errorOnTrue) {
                error("Cannot have the " + functionNameToString(ast) + " in this context", arg.fileStack);
            }
            return true;
        }
    }
    for (var child of ast.children) {
        if (astContainsFunctions(child, functionNames)) {
            if (errorOnTrue) {
                error("Cannot have the " + functionNameToString(ast) + " in this context", child.fileStack);
            }
            return true;
        }
    }

    return false;
}

//See globalvars.ts for the definition of "literal".
export function astIsLiteral(ast: Ast) {
    //Check for literally literals
    if (typeof ast.type === "string" && !["Hero", "Map", "Gamemode", "Team", "Button", "Color"].includes(ast.type)) {
        if (["IntLiteral", "UnsignedIntLiteral", "SignedIntLiteral", "FloatLiteral", "UnsignedFloatLiteral", "SignedFloatLiteral", "GlobalVariable", "PlayerVariable", "Subroutine", "HeroLiteral", "MapLiteral", "GamemodeLiteral", "TeamLiteral", "ButtonLiteral", "StringLiteral", "LocalizedStringLiteral", "CustomStringLiteral"].concat(Object.keys(constantValues)).includes(ast.type)) {
            return true;
        }
    }

    //Skip internal types, those are not literals
    if (["Type", "Label", "DictKey"].includes(ast.type as string)) {
        return false;
    }

    if (!(ast.name in funcKw)) {
        error("Unknown function name '"+ast.name+"'", ast.fileStack);
    }
    if (!funcKw[ast.name].isLiteral) {
        //Custom strings with no formatters are considered literals
        //...unless they're not. Eg in Turkish, the "am" string is censored. Owware compares "am" to "**" to check if the censor is active.
        //This is so niche that I'm putting it behind optimizeStrict.
        if (ast.name === "__customString__" && ast.args.length === 1 && !optimizeStrict) {
            return true;
        }
        return false;
    }
    if (ast.args.some((arg) => !astIsLiteral(arg))) {
        return false;
    }
    return true;
}

//Shorthand to get the number value of a number literal, used in many optimizations
export function numValue(ast: Ast): number | null {
    if (ast.name !== "__number__") {
        return null;
    }
    return ast.args[0].numValue;
}

//Used to replace currentArrayElement with currentArrayElement[0] to fix the simultaneous mapping+filtering bug.
//Also used for macro args.
export function replaceFunctionInAst(ast: Ast, functionName: string, newAst: Ast) {
    //console.log("Replacing " + functionName + " with " + newAst.name);
    if (ast.name === functionName) {
        return newAst.clone();
    }
    for (var i = 0; i < ast.args.length; i++) {
        ast.args[i] = replaceFunctionInAst(ast.args[i], functionName, newAst);
    }
    for (var i = 0; i < ast.children.length; i++) {
        ast.children[i] = replaceFunctionInAst(ast.children[i], functionName, newAst);
    }
    return ast;
}

//Most functions, during optimization, will need to replace themselves or their arguments by a few common values.
export function getAstFor0() {
    return new Ast("__number__", [new Ast("0", [], [], "UnsignedIntLiteral")], [], "int");
}
export function getAstFor1() {
    return new Ast("__number__", [new Ast("1", [], [], "UnsignedIntLiteral")], [], "int");
}
export function getAstForMinus1() {
    return new Ast("__number__", [new Ast("-1", [], [], "SignedIntLiteral")], [], "signed int");
}
export function getAstFor2() {
    return new Ast("__number__", [new Ast("2", [], [], "UnsignedIntLiteral")], [], "int");
}
export function getAstFor0_016() {
    return new Ast("__number__", [new Ast("0.016", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
export function getAstFor0_001() {
    return new Ast("__number__", [new Ast("0.001", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
export function getAstFor0_0001() {
    return new Ast("__number__", [new Ast("0.0001", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
export function getAstFor255() {
    return new Ast("__number__", [new Ast("255", [], [], "UnsignedIntLiteral")], [], "int");
}
export function getAstFor10000() {
    return new Ast("__number__", [new Ast("10000", [], [], "UnsignedIntLiteral")], [], "int");
}
export function getAstFor10Million() {
    return new Ast("__number__", [new Ast("10000000", [], [], "UnsignedIntLiteral")], [], "int");
}
export function getAstForInfinity() {
    return new Ast("__number__", [new Ast("999999999999", [], [], "UnsignedIntLiteral")], [], "unsigned int");
}
export function getAstForMinusInfinity() {
    return new Ast("__number__", [new Ast("-999999999999", [], [], "SignedIntLiteral")], [], "signed int");
}
export function getAstForE() {
    return new Ast("__number__", [new Ast("2.718281828459045", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
export function getAstForNumber(nb: number) {
    var type = nb >= 0 ? "unsigned" : "signed";
    type += " " + (Number.isInteger(nb) ? "int" : "float");
    return new Ast("__number__", [new Ast(nb.toString(), [], [], (nb >= 0 ? "Unsigned" : "Signed") + (Number.isInteger(nb) ? "IntLiteral" : "FloatLiteral"))], [], type);
}
export function getAstForBool(bool: boolean) {
    if (bool) {
        return getAstForTrue();
    } else {
        return getAstForFalse();
    }
}
export function getAstForNull() {
    return new Ast("null");
}
export function getAstForFalse() {
    return new Ast("false");
}
export function getAstForTrue() {
    return new Ast("true");
}
export function getAstForColorWhite() {
    return new Ast("__color__", [new Ast("WHITE", [], [], "ColorLiteral")]);
}
export function getAstForTeamAll() {
    return new Ast("__team__", [new Ast("ALL", [], [], "TeamLiteral")]);
}
export function getAstForUselessInstruction() {
    return new Ast("pass");
}
export function getAstForEnd() {
    return new Ast("__end__");
}
export function getAstForEmptyArray() {
    return new Ast("__array__");
}
export function getAstForNullVector() {
    return new Ast("vect", [getAstFor0(), getAstFor0(), getAstFor0()]);
}
export function getAstForVector(x: number, y: number, z: number) {
    return new Ast("vect", [getAstForNumber(x), getAstForNumber(y), getAstForNumber(z)]);
}
export function getAstForCurrentArrayIndex() {
    return new Ast("__currentArrayIndex__");
}
export function getAstForCustomString(content: string, formatArgs: Ast[] = []) {
    let result = new Ast("__customString__", [new Ast(content, [], [], "CustomStringLiteral"), ...formatArgs]);
    result.stringTokens = parseStringTokens(content);
    return astParsingFunctions.__customString__(result);
}
export function getAstForFucktonOfSpaces() {
    return getAstForCustomString("\u2003".repeat(170));
}

export function getAstForArgDefault(arg: Argument) {
    let defaultAst;
    if (arg.default === true) {
        defaultAst = getAstForTrue();
    } else if (arg.default === false) {
        defaultAst = getAstForFalse();
    } else if (arg.default === null) {
        defaultAst = getAstForNull();
    } else if (typeof arg.default === "number") {
        defaultAst = getAstForNumber(arg.default);
    } else if (arg.default === "getAllPlayers()") {
        defaultAst = new Ast("getPlayers", [getAstForTeamAll()]);
    } else if (arg.default === "vect(0,0,0)") {
        defaultAst = getAstForNullVector();
    } else if (arg.default === "Math.INFINITY") {
        defaultAst = getAstForInfinity();
    } else if (arg.default === "Math.E") {
        defaultAst = getAstForE();
    } else if (arg.type in constantValues) {
        defaultAst = new Ast(arg.default, [], [], arg.type);
    } else if (arg.type in builtInEnumNameToAstInfo) {
        defaultAst = new Ast(builtInEnumNameToAstInfo[arg.type].name, [new Ast(arg.default, [], [], builtInEnumNameToAstInfo[arg.type].type)]);
    } else if (arg.default instanceof Ast) {
        defaultAst = arg.default.clone();
    } else {
        defaultAst = parseOpyMacro(arg.default, [], []);
    }
    return defaultAst;
}
