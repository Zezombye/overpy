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

var globalVariables;
var playerVariables;
var subroutines;
var currentLanguage;

//Compilation variables - are reset at each compilation.

//The absolute path of the folder containing the main file. Used for relative paths.
var rootPath;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
var currentArrayElementNames;

//The keywords "true" and "false", in the workshop.
//Used to avoid translating back when comparing to true/false.
//Generated at each compilation.
var wsTrue;
var wsFalse;
var wsNull;
var wsNot;
var wsRandInt;
var wsRandReal;
var wsRandShuffle;
var wsRandChoice;

//Set at each rule, to check whether it is legal to use "eventPlayer" and related.
var currentRuleEvent;

//If set to true, sets all rule titles to empty.
var obfuscateRules;

//If set to true, puts 3000 empty rules, effectively making it impossible to open the preset (you get kicked by the server).
var enableNoEdit;

//Contains all macros.
var macros;

var encounteredWarnings;
var suppressedWarnings;
var globalSuppressedWarnings;

//A list of imported files, to prevent import loops.
var importedFiles;

var disableUnusedVars;

var compiledCustomGameSettings;

//The stack of the files (macros count as "files").
var fileStack;

//Decompilation variables


//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule.
var decompilerGotos;

//Global variable used for the number of tabs.
//Is reset at each rule.
var nbTabs;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule.
var lastLoop;

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition.
var operatorPrecedenceStack;


function resetGlobalVariables(language) {
	rootPath = "";
	currentArrayElementNames = [];
	currentLanguage = language;
	wsTrue = tows("true", valueFuncKw);
	wsFalse = tows("false", valueFuncKw);
	wsNull = tows("null", valueFuncKw);
	wsNot = tows("_not", valueFuncKw);
	wsRandInt = tows("random.randint", valueFuncKw);
	wsRandReal = tows("random.uniform", valueFuncKw);
	wsRandShuffle = tows("random.shuffle", valueFuncKw);
	wsRandChoice = tows("random.choice", valueFuncKw);
	currentRuleEvent = "";
	obfuscateRules = false;
	macros = [];
	fileStack = [];
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	operatorPrecedenceStack = [];
	globalVariables = [];
	playerVariables = [];
	subroutines = [];
	encounteredWarnings = [];
	suppressedWarnings = [];
	globalSuppressedWarnings = [];
	importedFiles = [];
	enableNoEdit = false;
	disableUnusedVars = false;
	compiledCustomGameSettings = "";
}

//Other constants

//Operator precedence, from lowest to highest.
const operatorPrecedence = {
	"or":1,
	"and":2,
	"not":3,
	"==":4,
	"!=":4,
	"<=":4,
	">=":4,
	">":4,
	"<":4,
	"+":5,
	"-":5,
	"*":6,
	"/":6,
	
	//Although in Python the modulo operator has the same precedence as * and /,
	//it must have a higher precedence because (a*b)%c is not the same as a*(b%c).
	"%":7,
	"**":8,
};

//Python operators, from lowest to highest precedence.
const pyOperators = [
	"=",
	"+=",
	"-=",
	"*=",
	"/=",
	"%=",
	"**=",
	"min=",
	"max=",
	"++",
	"--",
	"if",
	"or",
	"and",
	"not",
	"in",
	"==",
	"!=",
	"<=",
	">=",
	">",
	"<",
	"+",
	"-",
	"*",
	"/",
	"%",
	"**",
];

//Text that gets inserted on top of all js scripts.
const builtInJsFunctions = `
function vect(x,y,z) {
    return ({
        x:x,
        y:y,
        z:z,
        toString: function() {
            return "vect("+this.x+","+this.y+","+this.z+")";
        }
    });
}`;

const builtInJsFunctionsNbLines = builtInJsFunctions.split("\n").length-1;

const defaultVarNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX'];

const defaultSubroutineNames = Array(128).fill().map((e,i)=>i).map(x => "Sub"+x);

//Names that cannot be used for variables.
const reservedNames = [
	"if", "else", "elif", "do", "while", "for", "return", "continue", "switch", "case", "default", "break", "pass",
	"false", "true", "null", 
	"goto", "lambda", "del", "import", "def", 
	"and", "or", "not", "in", 
	"eventPlayer", "attacker", "victim", "eventDamage", "eventHealing", "eventWasCriticalHit", "eventWasHealthPack", "healee", "healer", 
	"hostPlayer", 
	"loc", "RULE_CONDITION", "RULE_START", 
	"x", "y", "z", "math", "pi", "e", "random", 
	"Vector", "int", "float",
	"settings",
	"globalvar", "playervar", "subroutine", "disabled"].concat(Object.keys(constantValues));

//Names that cannot be used for subroutines.
const reservedFuncNames = [];
for (var func of Object.keys(actionKw).concat(Object.keys(opyFuncs))) {
	if (!func.startsWith("_")) {
		if (func.includes("(")) {
			reservedFuncNames.push(func.substring(0, func.indexOf("(")));
		} else {
			reservedFuncNames.push(func);
		}
	}
}

//Characters that are visually the same as normal ASCII characters (when uppercased), but make the string appear in "big letters" (the i18n font).
//For now, only greek letters and the "line separator" character.
//Let me know if you find any other such characters.
const bigLettersMappings = {
	a: "Α",
	A: "Α",
	b: "Β",
	B: "Β",
	e: "Ε",
	E: "Ε",
	h: "Η",
	H: "Η",
	i: "Ι",
	I: "Ι",
	k: "Κ",
	K: "Κ",
	m: "Μ",
	M: "Μ",
	n: "Ν",
	N: "Ν",
	o: "Ο",
	O: "Ο",
	p: "Ρ",
	P: "Ρ",
	t: "Τ",
	T: "Τ",
	x: "Χ",
	X: "Χ",
	y: "Υ",
	Y: "Υ",
	z: "Ζ",
	Z: "Ζ",
	" ": "\u2028", //line separator
}

//Fullwidth characters
var fullwidthMappings = {
	" ": "　",
	"¥": "￥",
	"₩": "￦",
	"¢": "￠",
	"£": "￡",
	"¯": "￣",
	"¬": "￢",
	"¦": "￤",
}
for (var char of '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~') {
	fullwidthMappings[char] = String.fromCodePoint(char.charCodeAt(0)+0xFEE0);
}
