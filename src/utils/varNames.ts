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

import { parse } from "../compiler/parser";
import { astConstants, defaultSubroutineNames, defaultVarNames, globalInitDirectives, globalVariables, playerInitDirectives, playerVariables, reservedMemberNames, reservedNames, reservedSubroutineNames, subroutines } from "../globalVars";
import { Token } from "../compiler/tokenizer";
import { Ast } from "./ast";
import { error } from "./logging";
import { FileStackMember } from "../types";

/** Translates a subroutine name from Overwatch to its OverPy version */
export function translateSubroutineToPy(content: string, fileStack: FileStackMember[]): string {
    content = content.trim();
    content = translateNameToAvoidKeywords(content, "subroutine");

    if (subroutines.map((x) => x.name).includes(content)) {
        return content;
    }
    if (defaultSubroutineNames.includes(content)) {
        //Add the subroutine as it doesn't already exist (else it would've been caught by the first if)
        addSubroutine(content, defaultSubroutineNames.indexOf(content), fileStack);
        return content;
    }
    error("Unknown subroutine '" + content + "'");
}

export function translateSubroutineToWs(content: string, fileStack: FileStackMember[]): string {
    for (var i = 0; i < subroutines.length; i++) {
        if (subroutines[i].name === content) {
            return content;
        }
    }

    if (defaultSubroutineNames.includes(content)) {
        //Add the subroutine as it doesn't already exist (else it would've been caught by the for)
        //However, only do this if it is a default subroutine name
        addSubroutine(content, defaultSubroutineNames.indexOf(content), fileStack);
        return content;
    }
    error("Undeclared subroutine '" + content + "'");
}

export function addSubroutine(content: string, index: number | null, fileStack: FileStackMember[], isFromDefStatement = false) {
    if (reservedSubroutineNames.includes(content)) {
        error("Subroutine name '" + content + "' is a built-in function or keyword");
    }
    subroutines.push({
        name: content,
        index: index ?? subroutines.length,
        fileStack: fileStack,
        isFromDefStatement: isFromDefStatement,
    });
}

/** Transform an input name to a valid name which does not collide with other keywords. */
export function translateNameToAvoidKeywords(initialName: string, nameType: string) {
    //modify the name
    if (initialName.endsWith("_") || (nameType === "globalvar" && reservedNames.includes(initialName)) || (nameType === "playervar" && reservedMemberNames.includes(initialName)) || (nameType === "subroutine" && reservedSubroutineNames.includes(initialName))) {
        initialName += "_";
    }
    if (!/[A-Za-z_]\w*/.test(initialName)) {
        error("Unauthorized name for " + nameType + ": '" + initialName + "'");
    }
    return initialName;
}

export function translateVarToPy(content: string, isGlobalVariable: boolean, fileStack: FileStackMember[]) {
    content = content.trim();
    content = translateNameToAvoidKeywords(content, isGlobalVariable ? "globalvar" : "playervar");

    var varArray = isGlobalVariable ? globalVariables : playerVariables;
    if (varArray.map((x) => x.name).includes(content)) {
        return content;
    } else if (defaultVarNames.includes(content)) {
        //Add the variable as it doesn't already exist (else it would've been caught by the first if)
        addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content), fileStack);
        return content;
    } else {
        error("Unknown variable '" + content + "'");
    }
}

export function translateVarToWs(content: string, isGlobalVariable: boolean, fileStack: FileStackMember[]) {
    var varArray = isGlobalVariable ? globalVariables : playerVariables;
    for (var i = 0; i < varArray.length; i++) {
        if (varArray[i].name === content) {
            return content;
        }
    }
    if (defaultVarNames.includes(content)) {
        //Add the variable as it doesn't already exist (else it would've been caught by the for)
        //However, only do this if it is a default variable name
        addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content), fileStack);
        return content;
    }
    error("Undeclared " + (isGlobalVariable ? "global" : "player") + " variable '" + content + "'");
}

//Adds a variable to the global/player variable arrays.
export function addVariable(content: string, isGlobalVariable: boolean, index: number, fileStack: FileStackMember[], initValue: Token[] | null = null) {
    if ((isGlobalVariable ? "" : ".")+content in astConstants) {
        error("Variable name '" + content + "' is already declared as a macro");
    }
    if ((isGlobalVariable && reservedNames.includes(content)) || (!isGlobalVariable && reservedMemberNames.includes(content))) {
        error("Variable name '" + content + "' is a reserved word");
    }
    if (isGlobalVariable) {
        globalVariables.push({
            name: content,
            fileStack: fileStack,
            index: index,
        });
        if (initValue) {
            globalInitDirectives.push(new Ast("__assignTo__", [new Ast("__globalVar__", [new Ast(content, [], [], "GlobalVariable")]), parse(initValue)]));
        }
    } else {
        playerVariables.push({
            name: content,
            fileStack: fileStack,
            index: index,
        });
        if (initValue) {
            playerInitDirectives.push(new Ast("__assignTo__", [new Ast("__playerVar__", [new Ast("eventPlayer"), new Ast(content, [], [], "PlayerVariable")]), parse(initValue)]));
        }
    }
}

/** Checks if the given name is a variable name */
export function isVarName(nameToCheck: string, checkForGlobalVar: boolean) {
    var varArray = checkForGlobalVar ? globalVariables : playerVariables;
    if (defaultVarNames.includes(nameToCheck)) {
        return true;
    }
    for (var variable of varArray) {
        if (variable.name === nameToCheck) {
            return true;
        }
    }
    return false;
}

/* Checks if the given name is a subroutine name */
export function isSubroutineName(nameToCheck: string) {
    if (defaultSubroutineNames.includes(nameToCheck)) {
        return true;
    }
    for (var subroutine of subroutines) {
        if (subroutine.name === nameToCheck) {
            return true;
        }
    }
    return false;
}
