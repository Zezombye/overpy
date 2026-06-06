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
import { Token } from "../compiler/tokenizer";
import { DEBUG_MODE } from "../globalVars";
import { OverPyCompiler, OverPyDecompiler } from "../godClasses";
import { CompilationDiagnostic, FileStackMember, ScriptFileStackMember, Type } from "../types";
import { Ast } from "./ast";
import { tabLevel } from "./other";
import { escapeString } from "./strings";

export class OpyError extends Error implements CompilationDiagnostic {
    fileStack?: FileStackMember[];
    severity: "error" = "error";

    constructor(message: string, fileStack?: FileStackMember[]) {
        super(message);
        this.name = "OpyError";
        this.fileStack = fileStack;
        Object.setPrototypeOf(this, OpyError.prototype);
    }
}

//Logging stuff
OverPyCompiler.prototype.error = OverPyDecompiler.prototype.error = function(str: string, fileStackOverride?: FileStackMember[]): never {
    if (fileStackOverride) {
        this.fileStack = fileStackOverride;
    }
    var err = "";
    err += str;
    err += displayFileStack(this.fileStack);

    throw new OpyError(err, [...this.fileStack]);
}


OverPyCompiler.prototype.warn = OverPyDecompiler.prototype.warn = function(warnType: string, message: string, fileStackOverride?: FileStackMember[]) {
    let warning = message + " (" + warnType + ")";
    let fileStack_ = fileStackOverride || this.fileStack;
    warning += displayFileStack(fileStack_);

    if (this instanceof OverPyCompiler) {
        if (this.suppressedWarningTypes.includes(warnType) || this.globallySuppressedWarningTypes.includes(warnType) || warnType === "w_type_check") {
            this.hiddenWarnings.push(warning);
            return;
        }
    }

    console.warn(warning);
    this.encounteredWarnings.push({
        message: warning,
        fileStack: fileStack_,
        severity: "warning"
    });
}

export const debug = (data: string) => {
    if (DEBUG_MODE) {
        console.debug("DEBUG: " + data);
    }
};
OverPyCompiler.prototype.debug = debug;

OverPyCompiler.prototype.getTypeCheckFailedMessage = function(content: Ast, argNb: number, expectedType: Type, received: Ast) {
    var funcDisplayName = functionNameToString(content);
    var argKind = funcDisplayName.startsWith("operator ") ? "operand" : "argument";

    var receivedFuncName = functionNameToString(received);

    return `Expected type '${this.typeToString(expectedType)}' for the ${nthOfNumber(argNb + 1)} ${argKind} of ${funcDisplayName}, but got ${receivedFuncName} of type '${this.typeToString(received.type.toString())}'`;
}

export function functionNameToString(content: Ast) {
    var funcToOperatorMapping = {
        __add__: "'+' or '+='",
        __and__: "'and'",
        __arrayContains__: "'in'",
        __assignTo__: "'='",
        __divide__: "'/' or '/='",
        __equals__: "'=='",
        __inequals__: "'!='",
        __greaterThan__: "'>'",
        __greaterThanOrEquals__: "'>='",
        __lessThan__: "'<'",
        __lessThanOrEquals__: "'<='",
        __modulo__: "'%' or '%='",
        __multiply__: "'*' or '*='",
        __not__: "'not'",
        __or__: "'or'",
        __raiseToPower__: "'**' or '**='",
        __subtract__: "'-' or '-='",
        //todo
    };

    var funcToDisplayMapping = {
        __chase__: "chase",
        __raycast__: "raycast",
        __all__: "all",
        __any__: "any",
        __createWorkshopSetting__: "createWorkshopSetting",
        __xComponentOf__: ".x",
        __yComponentOf__: ".y",
        __zComponentOf__: ".z",
    };

    let funcDisplayName: string;
    let funcName = content.originalName || content.name;

    if (funcName in funcToOperatorMapping) {
        funcDisplayName = "operator " + funcToOperatorMapping[funcName as keyof typeof funcToOperatorMapping];
    } else if (funcName in funcToDisplayMapping) {
        funcDisplayName = "function '" + funcToDisplayMapping[funcName as keyof typeof funcToDisplayMapping] + "'";
    } else if (content.compiler.isTypeSuitable("StringLiteral", content.type)) {
        funcDisplayName = "string " + escapeString(funcName, false);
    } else if (funcName === "__number__") {
        funcDisplayName = "number '" + content.args[0].numValue + "'";
    } else if (funcName === "__globalVar__") {
        funcDisplayName = "global variable '" + content.args[0].name + "'";
    } else if (funcName === "__playerVar__") {
        funcDisplayName = "player variable '" + content.args[1].name + "'";
    } else if (["__button__", "__color__", "__hero__", "__map__", "__gamemode__", "__team__"].includes(funcName)) {
        funcDisplayName = "enum '" + content.type.toString() + "'";
    } else {
        funcDisplayName = "function '" + funcName + "'";
    }

    return funcDisplayName;
}

OverPyCompiler.prototype.typeToString = function(type: Type): string {
    //https://github.com/microsoft/TypeScript/issues/56812 - we must put "throw" before this.error for TS to correctly infer the types
    if (typeof type === "string") {
        return type;
    } else if (type instanceof Array) {
        return type.map((x: string) => this.typeToString(x)).join(" | ");
    } else if (typeof type === "object") {
        if ("Array" in type) {
            let value = type["Array"];
            if (value instanceof Array) {
                throw this.error("Can't pass an array to typeToString()");
            }
            return this.typeToString(value) + "[]";
        } else if ("Vector" in type || "Direction" in type || "Position" in type || "Velocity" in type) {
            if (!(type[Object.keys(type)[0]] instanceof Array)) {
                this.error("Unexpected singular type when stringifying a vector type");
            }
            return Object.keys(type)[0] + "[" + (type[Object.keys(type)[0]] as Type[]).map((x) => this.typeToString(x)).join(", ") + "]";
        } else {
            throw this.error("Could not display type '" + JSON.stringify(type) + "'");
        }
    } else {
        throw this.error("Could not display type '" + type + "'");
    }
}

export function nthOfNumber(nb: number) {
    if (nb === 1) {
        return "1st";
    } else if (nb === 2) {
        return "2nd";
    } else if (nb === 3) {
        return "3rd";
    } else {
        return nb + "th";
    }
}

export function astToString(ast: Ast, nbTabs = 0) {
    var result = "";
    if (ast === undefined) {
        return "__undefined__";
    }
    result += (ast.compiler.isTypeSuitable("StringLiteral", ast.type, false) ? escapeString(ast.name, false) : ast.name);
    if (ast.args === undefined) {
        result += "(__undefined__)";
    } else if (ast.args.length > 0) {
        result += "(" + ast.args.map((x) => astToString(x)).join(", ") + ")";
    }
    if (ast.children === undefined) {
        result += ":__undefined__";
    } else if (ast.children.length > 0) {
        result += ":\n";
        for (var child of ast.children) {
            result += tabLevel(nbTabs + 1) + astToString(child, nbTabs + 1) + "\n";
        }
    }
    return result;
}

OverPyCompiler.prototype.getFileStackRange = function(tokens: Token[]): FileStackMember[] {
    if (tokens.length === 0) {
        this.error("Cannot get file stack range from an empty array of tokens, please report to Zezombye");
    }
    let result = structuredClone(tokens[0].fileStack);
    let lastTokenFilestack = tokens[tokens.length - 1].fileStack[tokens[tokens.length - 1].fileStack.length - 1];
    result[result.length - 1].endLine = lastTokenFilestack.endLine;
    result[result.length - 1].endCol = lastTokenFilestack.endCol;
    return result;
}

export function displayFileStack(fileStack: FileStackMember[] | undefined): string {
    if (!fileStack || fileStack.length === 0) {
        return "";
    }
    let result = "";
    for (const file of fileStack.toReversed()) {
        result += `\n    | `;
        if (file.startLine !== null && file.startCol !== null) {
            result += `line ${file.startLine}, col ${file.startCol}, `;
        }
        result += `at ${file.name}`;
        /*if (file.endLine !== null && file.endCol !== null) {
            result += ` - line ${file.endLine}, col ${file.endCol}`;
        }*/
    }
    return result;
}

export function getInternalFileStack(): FileStackMember[] {
    return [
        {
            name: "<internal>",
            startLine: null,
            startCol: null,
            endCol: null,
            endLine: null,
            remainingChars: 99999999999, //does not matter
            staticMember: true,
            fileStackMemberType: "normal",
        } as ScriptFileStackMember,
    ];
}
