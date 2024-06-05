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

import { IS_IN_BROWSER, evalVm, fileStack, incrementUniqueNumber, uniqueNumber } from "../globalVars";
import { error } from "./logging";


//camelCase -> UPPER_CASE
export function camelCaseToUpperCase(str: string): string {
	return str.split(/(?=[A-Z])/).join('_').toUpperCase();
}

//UPPER_CASE -> camelCase
export function upperCaseToCamelCase(str: string): string {
	var result = str.toLowerCase().replace(/(_\w)/g, x => x[1].toUpperCase());
	result = result[0].toLowerCase()+result.substring(1);
	return result;
}

export function shuffleArray<T>(a: T[]): T[] {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export function isNumber(x: unknown) {
	if ((""+x).trim() === "" || x === null) {
		return false;
	}
	return typeof x === "number" || !isNaN(parseInt(x as string)) || !isNaN(parseFloat(x as string));
}

export function getFileStackCopy() {
	return fileStack.map(x => Object.assign({}, x));
}

//Reverses the comparison operator.
export function reverseOperator(content: string): string {
	if (content === "==") {return "!=";}
	else if (content === '!=') {return "==";}
	else if (content === '<=') {return ">";}
	else if (content === '>=') {return "<";}
	else if (content === '<') {return ">=";}
	else if (content === '>') {return "<=";}
	else {
		error("Cannot reverse operator "+content);
	}
}

//Returns 4 spaces (or a tab) per tab level.
export function tabLevel(nbTabs: number, useTabs=false): string {
	var result = "";
	for (var i = 0; i < nbTabs; i++) {
		if (useTabs) {
			result += "\t";
		} else {
			result += "    ";
		}
	}
	return result;
}

//Returns true if the given string starts with a parenthesis (or a bracket/curly bracket).
export function startsWithParenthesis(content: string): boolean {
	if (content[0] === '(' || content[0] === '[' || content[0] === '{') {
		return true;
	}
	return false;
}

/**
 * Checks if a character is a valid character for a variable name.
 * @param c The character to check.
 * @returns Whether the character is a valid character for a variable name.
 */
export function isVarChar(c: string): boolean {
	return c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '@';
}

//ty stackoverflow
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Used for automatically generated names.
export function getUniqueNumber(): number {
	incrementUniqueNumber();
	return uniqueNumber;
}

//eval with VM if using node.js
export function safeEval(script: string) {
	if (IS_IN_BROWSER) {
		return eval(script);
	} else {
		const result = evalVm.getString(evalVm.unwrapResult(evalVm.evalCode(script)));
		return result;
	}
}

