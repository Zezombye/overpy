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

import { defaultSubroutineNames, defaultVarNames, reservedMemberNames, reservedNames, reservedSubroutineNames } from "../globalVars";
import { OverPyCompiler, OverPyDecompiler } from "../godClasses";
import { Token } from "../compiler/tokenizer";
import { FileStackMember } from "../types";

/** Translates a subroutine name from Overwatch to its OverPy version */
OverPyDecompiler.prototype.translateSubroutineToPy = function(content: string, fileStack: FileStackMember[]): string {
    content = content.trim();
    content = this.translateNameToAvoidKeywords(content, "subroutine");

    if (this.subroutines.map((x) => x.name).includes(content)) {
        return content;
    }
    if (defaultSubroutineNames.includes(content)) {
        //Add the subroutine as it doesn't already exist (else it would've been caught by the first if)
        this.addSubroutine(content, defaultSubroutineNames.indexOf(content), fileStack);
        return content;
    }
    throw this.error("Unknown subroutine '" + content + "'");
}

OverPyCompiler.prototype.translateSubroutineToWs = function(content: string, fileStack: FileStackMember[]): string {
    for (var i = 0; i < this.subroutines.length; i++) {
        if (this.subroutines[i].name === content) {
            return content;
        }
    }

    if (defaultSubroutineNames.includes(content)) {
        //Add the subroutine as it doesn't already exist (else it would've been caught by the for)
        //However, only do this if it is a default subroutine name
        this.addSubroutine(content, defaultSubroutineNames.indexOf(content), fileStack);
        return content;
    }
    throw this.error("Undeclared subroutine '" + content + "'");
}

OverPyCompiler.prototype.addSubroutine = OverPyDecompiler.prototype.addSubroutine = function(content: string, index: number | null, fileStack: FileStackMember[], isFromDefStatement = false) {
    if (reservedSubroutineNames.includes(content)) {
        throw this.error("Subroutine name '" + content + "' is a built-in function or keyword");
    }
    if (this instanceof OverPyCompiler) {
        this.checkVarNameForBadWords(content);
    }
    this.subroutines.push({
        name: content,
        index: index ?? this.subroutines.length,
        fileStack: fileStack,
        isFromDefStatement: isFromDefStatement,
        callsSubroutines: [],
    });
}

/** Transform an input name to a valid name which does not collide with other keywords. */
OverPyDecompiler.prototype.translateNameToAvoidKeywords = function(initialName: string, nameType: string) {
    //modify the name
    if (initialName.endsWith("_") || (nameType === "globalvar" && reservedNames.includes(initialName)) || (nameType === "playervar" && reservedMemberNames.includes(initialName)) || (nameType === "subroutine" && reservedSubroutineNames.includes(initialName))) {
        initialName += "_";
    }
    if (!/[A-Za-z_]\w*/.test(initialName)) {
        this.error("Unauthorized name for " + nameType + ": '" + initialName + "'");
    }
    return initialName;
}

OverPyDecompiler.prototype.translateVarToPy = function(content: string, isGlobalVariable: boolean, fileStack: FileStackMember[]) {
    content = content.trim();
    content = this.translateNameToAvoidKeywords(content, isGlobalVariable ? "globalvar" : "playervar");

    var varArray = isGlobalVariable ? this.globalVariables : this.playerVariables;
    if (varArray.map((x) => x.name).includes(content)) {
        return content;
    } else if (defaultVarNames.includes(content)) {
        //Add the variable as it doesn't already exist (else it would've been caught by the first if)
        this.addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content), fileStack);
        return content;
    } else {
        throw this.error("Unknown variable '" + content + "'");
    }
}

OverPyCompiler.prototype.translateVarToWs = function(content: string, isGlobalVariable: boolean, fileStack: FileStackMember[]) {
    var varArray = isGlobalVariable ? this.globalVariables : this.playerVariables;
    for (var i = 0; i < varArray.length; i++) {
        if (varArray[i].name === content) {
            return content;
        }
    }
    if (defaultVarNames.includes(content)) {
        //Add the variable as it doesn't already exist (else it would've been caught by the for)
        //However, only do this if it is a default variable name
        this.addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content), fileStack);
        return content;
    }
    throw this.error("Undeclared " + (isGlobalVariable ? "global" : "player") + " variable '" + content + "'");
}

//Adds a variable to the global/player variable arrays.
OverPyCompiler.prototype.addVariable = OverPyDecompiler.prototype.addVariable = function(content: string, isGlobalVariable: boolean, index: number, fileStack: FileStackMember[], initValue: Token[] | null = null) {
    if ((isGlobalVariable && reservedNames.includes(content)) || (!isGlobalVariable && reservedMemberNames.includes(content))) {
        this.error("Variable name '" + content + "' is a reserved word");
    }
    if (this instanceof OverPyCompiler) {
        if ((isGlobalVariable ? "" : ".")+content in this.astConstants) {
            this.error("Variable name '" + content + "' is already declared as a macro");
        }
        this.checkVarNameForBadWords(content);
    }
    if (initValue && initValue.length === 1 && ["null", "0"].includes(initValue[0].text)) {
        // Variables are initialized to null/0 by default
        initValue = null;
    }
    if (isGlobalVariable) {
        this.globalVariables.push({
            name: content,
            fileStack: fileStack,
            index: index,
        });
        if (this instanceof OverPyCompiler && initValue) {
            this.globalInitDirectives.push(this.Ast("__assignTo__", [this.Ast("__globalVar__", [this.Ast(content, [], [], "GlobalVariable")]), this.parse(initValue)]));
        }
    } else {
        this.playerVariables.push({
            name: content,
            fileStack: fileStack,
            index: index,
        });
        if (this instanceof OverPyCompiler && initValue) {
            this.playerInitDirectives.push(this.Ast("__assignTo__", [this.Ast("__playerVar__", [this.Ast("eventPlayer"), this.Ast(content, [], [], "PlayerVariable")]), this.parse(initValue)]));
        }
    }
}

/** Checks if the given name is a variable name */
OverPyCompiler.prototype.isVarName = OverPyDecompiler.prototype.isVarName = function(nameToCheck: string, checkForGlobalVar: boolean) {
    var varArray = checkForGlobalVar ? this.globalVariables : this.playerVariables;
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
OverPyCompiler.prototype.isSubroutineName = OverPyDecompiler.prototype.isSubroutineName = function(nameToCheck: string) {
    if (defaultSubroutineNames.includes(nameToCheck)) {
        return true;
    }
    for (var subroutine of this.subroutines) {
        if (subroutine.name === nameToCheck) {
            return true;
        }
    }
    return false;
}
