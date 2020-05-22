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

//Used for when the body of a control flow statement will never execute, such as "if false".
function makeChildrenUseless(children) {

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
            checkForDistanceTo(children[i].args);
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
    if (content.name === "vect") {
        return (isDefinitelyFalsy(content.args[0]) && isDefinitelyFalsy(content.args[1]) && isDefinitelyFalsy(content.args[2]));
    }
    //Test for number 0
    if (content.name === "__number__") {
        return (content.args[0].name === 0);
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


//Most functions, during optimization, will need to replace themselves or their arguments by a few common values.
function getAstFor0() {
    return new Ast("__number__", [new Ast("0", [], [], "NumberLiteral")], [], "int");
}
function getAstFor1() {
    return new Ast("__number__", [new Ast("1", [], [], "NumberLiteral")], [], "int");
}
function getAstForMinus1() {
    return new Ast("__number__", [new Ast("-1", [], [], "NumberLiteral")], [], "unsigned int");
}
function getAstFor2() {
    return new Ast("__number__", [new Ast("2", [], [], "NumberLiteral")], [], "int");
}
function getAstFor0_016() {
    return new Ast("__number__", [new Ast("0.016", [], [], "NumberLiteral")], [], "unsigned float");
}
function getAstForNumber(nb) {
    if (typeof nb !== "number") {
        error("Expected a number, but got '"+nb+"' of type '"+typeof nb+"'");
    }
    var type = nb >= 0 ? "unsigned" : "signed";
    type += " "+(Number.isInteger(nb) ? "int" : "float");
    return new Ast("__number__", [new Ast(nb.toString(), [], [], "NumberLiteral")], [], type);
}
function getAstForNull() {
    return new Ast("null", [], [], "Player");
}
function getAstForFalse() {
    return new Ast("false", [], [], "bool");
}
function getAstForColorWhite() {
    return new Ast("WHITE", [], [], "Color");
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
