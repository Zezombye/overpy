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
import { funcKw } from "../globalVars";
import { OverPyCompiler, OverPyDecompiler } from "../godClasses";
import { functionNameToString } from "./logging";
import { Argument, FileStackMember, StringToken, Type } from "../types";
import { constantValues } from "../data/constants";
import { builtInEnumNameToAstInfo } from "../compiler/parser";

//An array of functions for ast parsing (to not have a 4k lines file with all the functions and be able to handle each function in a separate file).
export var astParsingFunctions: Record<string, (content: Ast, compiler: OverPyCompiler) => Ast> = {};

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
    compiler: OverPyCompiler | OverPyDecompiler;
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
    isGotoInSameScope?: boolean; //Used for gotos, if true then the goto doesn't jump to another scope and can be optimized more easily. For now, only set on automatically generated gotos
    isSwitchIf?: boolean; //true if it is the "if true" from a switch
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

    constructor(compiler: OverPyCompiler | OverPyDecompiler, name: string, args?: any[], children?: Ast[], type?: any) {
        if (name === null || name === undefined) {
            compiler.error("Got no name for AST");
        }
        this.compiler = compiler;
        this.name = name;
        this.args = args ? args : [];
        this.children = children ? children : [];

        if (!type) {
            if (name in funcKw) {
                this.type = funcKw[name].return;
            } else if (this.compiler instanceof OverPyCompiler && name in this.compiler.astMacros) {
                this.type = (this.compiler.astMacros[name].lines.length > 2 ? "void" : this.compiler.astMacros[name].lines[0].type);
            } else if (name.startsWith("$")) {
                //macro arg
                this.type = "Value";
            } else {
                throw this.compiler.error("Unknown function name '" + name + "'");
            }
        } else {
            this.type = type;
        }
        if (this.compiler.isTypeSuitable("FloatLiteral", this.type, false)) {
            this.numValue = Number(name);
        }

        for (var arg of this.args) {
            if (!(arg instanceof Ast)) {
                compiler.error("Arg '" + arg + "' of '" + name + "' is not an AST");
            }
            arg.parent = this;
        }
        for (var child of this.children) {
            if (!(child instanceof Ast)) {
                compiler.error("Child '" + child + "' of '" + name + "' is not an AST");
            }
            child.parent = this;
        }
        this.fileStack = compiler.fileStack;
    }

    clone() {
        var clone: Ast = new Ast(
            this.compiler,
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
        clone.isGotoInSameScope = this.isGotoInSameScope;
        clone.isSwitchIf = this.isSwitchIf;
        return clone;
    }
}

OverPyCompiler.prototype.Ast = OverPyDecompiler.prototype.Ast = function(name: string, args?: any[], children?: Ast[], type?: any) {
    return new Ast(this, name, args, children, type);
}

//Used for when the body of a control flow statement will never execute, such as "if false".
OverPyCompiler.prototype.makeChildrenUseless = function(children: Ast[]) {
    var foundLabel = false;

    //Recursively check through the tree to see if there are labels that we must decrement the amount of references to.
    const checkForDistanceTo = (content: Ast) => {
        for (var arg of content.args) {
            if (arg.name === "__distanceTo__") {
                this.currentRuleLabelAccess[arg.args[0].name]--;
            } else {
                checkForDistanceTo(arg);
            }
        }
    }

    const _makeChildrenUseless = (children: Ast[]) => {
        for (var i = 0; i < children.length; i++) {
            //Check if there is a label that is accessed at least once. If yes, then the actions below could still be executed; therefore, don't make them useless.

            if (foundLabel) {
                break;
            }
            checkForDistanceTo(children[i]);
            this.makeChildrenUseless(children[i].children);
            if (children[i].type === "Label") {
                if (this.currentRuleLabelAccess[children[i].name] > 0) {
                    foundLabel = true;
                }
            } else {
                children[i] = this.getAstForUselessInstruction();
            }
        }
    }

    //If the current rule has a variable goto, then we cannot make the instructions useless, as we don't know whether they will execute.
    if (children.length > 0 && !this.currentRuleHasVariableGoto) {
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
OverPyCompiler.prototype.astContainsRandom = function(ast: Ast) {
    return this.astContainsFunctions(ast, ["random.randint", "random.uniform", "random.choice", "random.shuffle"]);
}

OverPyCompiler.prototype.astContainsFunctions = OverPyDecompiler.prototype.astContainsFunctions = function(ast: Ast, functionNames: string[], errorOnTrue = false, type: Type | Type[] | undefined = undefined) {
    if (functionNames.includes(ast.name) && (type === undefined || this.isTypeSuitable(type, ast.type))) {
        if (errorOnTrue) {
            this.error("Cannot have the " + functionNameToString(ast) + " in this context", ast.fileStack);
        }
        return true;
    }
    for (var arg of ast.args) {
        if (this.astContainsFunctions(arg, functionNames, errorOnTrue, type)) {
            if (errorOnTrue) {
                this.error("Cannot have the " + functionNameToString(ast) + " in this context", arg.fileStack);
            }
            return true;
        }
    }
    for (var child of ast.children) {
        if (this.astContainsFunctions(child, functionNames, errorOnTrue, type)) {
            if (errorOnTrue) {
                this.error("Cannot have the " + functionNameToString(ast) + " in this context", child.fileStack);
            }
            return true;
        }
    }

    return false;
}



OverPyCompiler.prototype.warnOnDarkColor = function(colorAst: Ast) {
    for (let color of ["RED", "VIOLET", "PURPLE"]) {
        if (this.astContainsFunctions(colorAst, [color], false, "ColorLiteral")) {
            this.warn("w_dark_color", `The color '${color}' is hard to see. Consider using LIGHT_${color} instead.`, colorAst.fileStack);
        }
    }
}

//Returns true if in the 2nd argument of filtered/mapped array, in which case a filtered/mapped array cannot be used
export function astIsInLambdaFunction(ast: Ast) {
    if (!ast.parent) {
        return false;
    }
    if (["__filteredArray__", "__mappedArray__"].includes(ast.parent.name) && ast.parent.argIndex === 1) {
        return true;
    }
    return astIsInLambdaFunction(ast.parent);
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
        ast.compiler.error("Unknown function name '"+ast.name+"'", ast.fileStack);
    }
    if (!funcKw[ast.name].isLiteral) {
        //Custom strings with no formatters are considered literals
        //...unless they're not. Eg in Turkish, the "am" string is censored. Owware compares "am" to "**" to check if the censor is active.
        //This is so niche that I'm putting it behind optimizeStrict.
        if (ast.name === "__customString__" && ast.args.length === 1 && !(ast.compiler as OverPyCompiler).optimizeStrict) {
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
OverPyCompiler.prototype.getAstFor0 = OverPyDecompiler.prototype.getAstFor0 = function() {
    return this.Ast("__number__", [this.Ast("0", [], [], "UnsignedIntLiteral")], [], "int");
}
OverPyCompiler.prototype.getAstFor1 = function() {
    return this.Ast("__number__", [this.Ast("1", [], [], "UnsignedIntLiteral")], [], "int");
}
OverPyCompiler.prototype.getAstForMinus1 = function() {
    return this.Ast("__number__", [this.Ast("-1", [], [], "SignedIntLiteral")], [], "signed int");
}
OverPyCompiler.prototype.getAstFor2 = function() {
    return this.Ast("__number__", [this.Ast("2", [], [], "UnsignedIntLiteral")], [], "int");
}
OverPyCompiler.prototype.getAstFor0_016 = function() {
    return this.Ast("__number__", [this.Ast("0.016", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
OverPyCompiler.prototype.getAstFor0_001 = function() {
    return this.Ast("__number__", [this.Ast("0.001", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
OverPyCompiler.prototype.getAstFor0_0001 = function() {
    return this.Ast("__number__", [this.Ast("0.0001", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
OverPyCompiler.prototype.getAstFor255 = function() {
    return this.Ast("__number__", [this.Ast("255", [], [], "UnsignedIntLiteral")], [], "int");
}
OverPyCompiler.prototype.getAstFor10000 = function() {
    return this.Ast("__number__", [this.Ast("10000", [], [], "UnsignedIntLiteral")], [], "int");
}
OverPyCompiler.prototype.getAstFor10Million = function() {
    return this.Ast("__number__", [this.Ast("10000000", [], [], "UnsignedIntLiteral")], [], "int");
}
OverPyCompiler.prototype.getAstForInfinity = OverPyDecompiler.prototype.getAstForInfinity = function() {
    return this.Ast("__number__", [this.Ast("999999999999", [], [], "UnsignedIntLiteral")], [], "unsigned int");
}
OverPyCompiler.prototype.getAstForMinusInfinity = function() {
    return this.Ast("__number__", [this.Ast("-999999999999", [], [], "SignedIntLiteral")], [], "signed int");
}
OverPyCompiler.prototype.getAstForE = OverPyDecompiler.prototype.getAstForE = function() {
    return this.Ast("__number__", [this.Ast("2.718281828459045", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
OverPyCompiler.prototype.getAstForNumber = OverPyDecompiler.prototype.getAstForNumber = function(nb: number) {
    var type = nb >= 0 ? "unsigned" : "signed";
    type += " " + (Number.isInteger(nb) ? "int" : "float");
    return this.Ast("__number__", [this.Ast(nb.toString(), [], [], (nb >= 0 ? "Unsigned" : "Signed") + (Number.isInteger(nb) ? "IntLiteral" : "FloatLiteral"))], [], type);
}
OverPyCompiler.prototype.getAstForBool = function(bool: boolean) {
    if (bool) {
        return this.getAstForTrue();
    } else {
        return this.getAstForFalse();
    }
}
OverPyCompiler.prototype.getAstForNull = OverPyDecompiler.prototype.getAstForNull = function() {
    return this.Ast("null");
}
OverPyCompiler.prototype.getAstForFalse = OverPyDecompiler.prototype.getAstForFalse = function() {
    return this.Ast("false");
}
OverPyCompiler.prototype.getAstForTrue = OverPyDecompiler.prototype.getAstForTrue = function() {
    return this.Ast("true");
}
OverPyCompiler.prototype.getAstForColorWhite = function() {
    return this.Ast("__color__", [this.Ast("WHITE", [], [], "ColorLiteral")]);
}
OverPyCompiler.prototype.getAstForTeamAll = OverPyDecompiler.prototype.getAstForTeamAll = function() {
    return this.Ast("__team__", [this.Ast("ALL", [], [], "TeamLiteral")]);
}
OverPyCompiler.prototype.getAstForUselessInstruction = function() {
    return this.Ast("pass");
}
OverPyCompiler.prototype.getAstForEnd = function() {
    return this.Ast("__end__");
}
OverPyCompiler.prototype.getAstForEmptyArray = function() {
    return this.Ast("__array__");
}
OverPyCompiler.prototype.getAstForNullVector = OverPyDecompiler.prototype.getAstForNullVector = function() {
    return this.Ast("vect", [this.getAstFor0(), this.getAstFor0(), this.getAstFor0()]);
}
OverPyCompiler.prototype.getAstForVector = function(x: number, y: number, z: number) {
    return this.Ast("vect", [this.getAstForNumber(x), this.getAstForNumber(y), this.getAstForNumber(z)]);
}
OverPyCompiler.prototype.getAstForCurrentArrayIndex = function() {
    return this.Ast("__currentArrayIndex__");
}
OverPyCompiler.prototype.getAstForCustomString = function(content: string, formatArgs: Ast[] = []) {
    let result = this.Ast("__customString__", [this.Ast(content, [], [], "CustomStringLiteral"), ...formatArgs]);
    result.stringTokens = this.parseStringTokens(content);
    return astParsingFunctions.__customString__(result, this);
}
OverPyCompiler.prototype.getAstForFucktonOfSpaces = function() {
    return this.getAstForCustomString("\u2003".repeat(170));
}

OverPyCompiler.prototype.getAstForArgDefault = OverPyDecompiler.prototype.getAstForArgDefault = function(arg: Argument) {
    let defaultAst;
    if (arg.default === true) {
        defaultAst = this.getAstForTrue();
    } else if (arg.default === false) {
        defaultAst = this.getAstForFalse();
    } else if (arg.default === null) {
        defaultAst = this.getAstForNull();
    } else if (typeof arg.default === "number") {
        defaultAst = this.getAstForNumber(arg.default);
    } else if (arg.default === "getAllPlayers()") {
        defaultAst = this.Ast("getPlayers", [this.getAstForTeamAll()]);
    } else if (arg.default === "vect(0,0,0)") {
        defaultAst = this.getAstForNullVector();
    } else if (arg.default === "Math.INFINITY") {
        defaultAst = this.getAstForInfinity();
    } else if (arg.default === "Math.E") {
        defaultAst = this.getAstForE();
    } else if (arg.type in constantValues) {
        defaultAst = this.Ast(arg.default, [], [], arg.type);
    } else if (arg.type in builtInEnumNameToAstInfo) {
        defaultAst = this.Ast(builtInEnumNameToAstInfo[arg.type].name, [this.Ast(arg.default, [], [], builtInEnumNameToAstInfo[arg.type].type)]);
    } else if (arg.default instanceof Ast) {
        defaultAst = arg.default.clone();
    } else {
        defaultAst = new OverPyCompiler().parseOpyMacro(arg.default, [], []);
    }
    return defaultAst;
}
