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

//Compilation variables - are reset at each compilation.

//The absolute path of the folder containing the main file. Used for relative paths.
var rootPath;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
var currentArrayElementNames;

//Dictionary used for for loops.
//Should be empty at the beginning and end of each rule. (for compilation)
var forLoopVariables;

//Timer for for loop variables; when it is reached, delete the corresponding variable.
var forLoopTimers;

//The keywords "true" and "false", in the workshop.
//Used to avoid translating back when comparing to true/false.
//Generated at each compilation.
var wsTrue ;
var wsFalse;
var wsNull;
var wsNot;
//Note: assumes "randInt", "randReal", "randShuffle" and "randChoice" all have the same "random" word, no matter the language.
var wsRand;

//Set at each rule, to check whether it is legal to use "eventPlayer" and related.
var currentRuleEvent;

//If set to true, sets all rule titles to empty.
var obfuscateRules;

//Contains all macros.
var macros;


//Decompilation variables

//The stack of the files (macros count as "files").
var fileStack;

//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule. (for decompilation)
var decompilerGotos;

//Global variable used for the number of tabs.
//Is reset at each rule. (for decompilation)
var nbTabs;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule. (for decompilation)
var lastLoop;

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition. (for decompilation)
var operatorPrecedenceStack;

//Whether the decompilation at this time is under a normal "for" loop (for decompilation).
var isInNormalForLoop;


function resetGlobalVariables() {
	rootPath = "";
	currentArrayElementNames = [];
	forLoopVariables = {};
	forLoopTimers = [];
	wsTrue = tows("true", valueFuncKw);
	wsFalse = tows("false", valueFuncKw);
	wsNull = tows("null", valueFuncKw);
	wsNot = tows("not", valueFuncKw);
	wsRand = tows("_randomWs", valueFuncKw);
	currentRuleEvent = "";
	obfuscateRules = false;
	macros = [];
	fileStack = [];
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	operatorPrecedenceStack = [];
	isInNormalForLoop = false;
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
