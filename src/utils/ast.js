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

class Ast {

    constructor(name, args, children, type) {
        if (name === null || name === undefined) {
            error("Got no name for AST");
        }
        if (typeof name !== "string") {
            error("Expected a string for AST name, but got '"+name+"' of type '"+typeof name+"'");
        }
        this.name = name;
        this.args = args ? args : [];
        this.children = children ? children : [];

        if (!type) {
            if (name in funcKw) {
                this.type = funcKw[name].return;
            } else {
                error("Unknown function name '"+name+"'");
            }
        } else {
            this.type = type;
        }
        if (isTypeSuitable("FloatLiteral", this.type, false)) {
            this.numValue = Number(name);
        }

        for (var arg of this.args) {
            //console.log(arg);
            if (!(arg instanceof Ast)) {
                console.log(arg);
                error("Arg '"+arg+"' of '"+name+"' is not an AST");
            }
            arg.parent = this;
        }
        for (var child of this.children) {
            if (!(child instanceof Ast)) {
                console.log(child);
                error("Child '"+child+"' of '"+name+"' is not an AST");
            }
            child.parent = this;
        }
        this.fileStack = fileStack;
        this.argIndex = 0;
        this.childIndex = 0;
        this.wasParsed = false;
    }
}

//Used for when the body of a control flow statement will never execute, such as "if false".
function makeChildrenUseless(children) {

    /*for (var i = 0; i < children.length; i++) {
        makeChildrenUseless(children[i].children);
        children[i].isPotentiallyUseless = true;
    }
    return;*/

    var foundLabel = false;

    //Recursively check through the tree to see if there are labels that we must decrement the amount of references to.
    function checkForDistanceTo(content) {
        for (var arg of content.args) {
            if (arg.name === "__distanceTo__") {
                currentRuleLabelAccess[arg.args[0].name]--;
            } else {
                checkForDistanceTo(arg);
            }
        }
    }

    function _makeChildrenUseless(children) {
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

    //If the current rule has a variable goto, then we cannot make the isntructions useless, as we don't know whether they will execute.
    if (!currentRuleHasVariableGoto) {
        _makeChildrenUseless(children);
    }

    return children;

}

//https://workshop.elohell.gg/wiki/bRQhecrRn/Data+type+comparisons/
//Returns true if, when compared to "false", it returns true.
function isDefinitelyFalsy(content) {
    if (["__emptyArray__", "false", "null"].includes(content.name)) {
        return true;
    }
    //Test for null vector: vect(0,0,0)
    /*if (content.name === "vect") {
        return (isDefinitelyFalsy(content.args[0]) && isDefinitelyFalsy(content.args[1]) && isDefinitelyFalsy(content.args[2]));
    }*/
    //Test for number 0
    if (content.name === "__number__") {
        return (content.args[0].numValue === 0);
    }
    //Test for arrays, cast as 1st element
    if (content.name === "__array__") {
        return isDefinitelyFalsy(content.args[0]);
    }
    return false;
}

//Returns true if, when compared to "false", it returns false.
//Not the exact opposite of isDefinitelyFalsy, as in most cases, we can't know either.
function isDefinitelyTruthy(content) {
    if (content.name === "true") {
        return true;
    }
    //Test for null vector: vect(0,0,0)
    if (content.name === "vect") {
        return (isDefinitelyTruthy(content.args[0]) || isDefinitelyTruthy(content.args[1]) || isDefinitelyTruthy(content.args[2]));
    }
    //Test for number other than 0
    if (content.name === "__number__") {
        return (content.args[0].name !== 0);
    }
    //Test for arrays, cast as 1st element
    if (content.name === "__array__") {
        return isDefinitelyTruthy(content.args[0]);
    }
    return false;
}

//Returns true if the ASTs are the same tree (same names) and there is no function that can return a different value if called twice with the same arguments and context (such as a random function).
function areAstsEqual(a, b) {
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
        if (!areAstsEqual(a.args[i], b.args[i])) {
            return false;
        }
    }
    return true;
}

function astContainsFunctions(ast, functionNames, errorOnTrue=false) {

    if (functionNames.includes(ast.name)) {
        if (errorOnTrue) {
            error("Cannot have the "+functionNameToString(ast)+" in this context");
        }
        return true;
    }
    for (var arg of ast.args) {
        if (astContainsFunctions(arg, functionNames)) {
            if (errorOnTrue) {
                error("Cannot have the "+functionNameToString(ast)+" in this context");
            }
            return true;
        }
    }
    for (var child of ast.children) {
        if (astContainsFunctions(child, functionNames)) {
            if (errorOnTrue) {
                error("Cannot have the "+functionNameToString(ast)+" in this context");
            }
            return true;
        }
    }

    return false;
}


//Most functions, during optimization, will need to replace themselves or their arguments by a few common values.
function getAstFor0() {
    return new Ast("__number__", [new Ast("0", [], [], "UnsignedIntLiteral")], [], "int");
}
function getAstFor1() {
    return new Ast("__number__", [new Ast("1", [], [], "UnsignedIntLiteral")], [], "int");
}
function getAstForMinus1() {
    return new Ast("__number__", [new Ast("-1", [], [], "SignedIntLiteral")], [], "signed int");
}
function getAstFor2() {
    return new Ast("__number__", [new Ast("2", [], [], "UnsignedIntLiteral")], [], "int");
}
function getAstFor0_016() {
    return new Ast("__number__", [new Ast("0.016", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
function getAstFor0_001() {
    return new Ast("__number__", [new Ast("0.001", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
function getAstFor0_0001() {
    return new Ast("__number__", [new Ast("0.0001", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
function getAstFor255() {
    return new Ast("__number__", [new Ast("255", [], [], "UnsignedIntLiteral")], [], "int");
}
function getAstFor10000() {
    return new Ast("__number__", [new Ast("10000", [], [], "UnsignedIntLiteral")], [], "int");
}
function getAstFor10Million() {
    return new Ast("__number__", [new Ast("10000000", [], [], "UnsignedIntLiteral")], [], "int");
}
function getAstForInfinity() {
    return new Ast("__number__", [new Ast("999999999999", [], [], "UnsignedIntLiteral")], [], "unsigned int");
}
function getAstForMinusInfinity() {
    return new Ast("__number__", [new Ast("-999999999999", [], [], "SignedIntLiteral")], [], "signed int");
}
function getAstForE() {
    return new Ast("__number__", [new Ast("2.718281828459045", [], [], "UnsignedFloatLiteral")], [], "unsigned float");
}
function getAstForNumber(nb) {
    if (typeof nb !== "number") {
        error("Expected a number, but got '"+nb+"' of type '"+typeof nb+"'");
    }
    var type = nb >= 0 ? "unsigned" : "signed";
    type += " "+(Number.isInteger(nb) ? "int" : "float");
    return new Ast("__number__", [new Ast(nb.toString(), [], [], (nb >= 0 ? "Unsigned" : "Signed")+(Number.isInteger(nb) ? "IntLiteral" : "FloatLiteral"))], [], type);
}
function getAstForBool(bool) {
    if (bool) {
        return getAstForTrue();
    } else {
        return getAstForFalse();
    }
}
function getAstForNull() {
    return new Ast("null", [], [], "Player");
}
function getAstForFalse() {
    return new Ast("false", [], [], "bool");
}
function getAstForTrue() {
    return new Ast("true", [], [], "bool");
}
function getAstForColorWhite() {
    return new Ast("__color__", [new Ast("WHITE", [], [], "ColorLiteral")], [], "Color");
}
function getAstForTeamAll() {
    return new Ast("__team__", [new Ast("ALL", [], [], "TeamLiteral")], [], "Team");
}
function getAstForUselessInstruction() {
    return new Ast("pass");
}
function getAstForEnd() {
    return new Ast("__end__");
}
function getAstForEmptyArray() {
    return new Ast("__emptyArray__");
}
function getAstForNullVector() {
    return new Ast("vect", [
        getAstFor0(),
        getAstFor0(),
        getAstFor0(),
    ])
}
function getAstForCurrentArrayIndex() {
    return new Ast("__currentArrayIndex__");
}
