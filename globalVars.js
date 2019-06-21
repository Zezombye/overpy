"use strict";

var currentLineNb = 0;
var currentColNb = 0;

//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule. (for decompilation)
var decompilerGotos = []

//Global variable used for the number of tabs.
//Is reset at each rule. (for decompilation)
var nbTabs = 0;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule. (for decompilation)
var lastLoop = -1;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for decompilation)
var currentArrayElementNames = [];

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition. (for decompilation)
var operatorPrecedenceStack = [];

//Operator precedence, from lowest to highest.
var operatorPrecedence = {
	" or ":1,
	" and ":2,
	" not ":3,
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
var pyOperators = [
	" or ",
	" and ",
	" not ",
	" in ",
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

//Trims the string and adjusts line+col nb from the whitespace trimmed at the beginning.
//Returns the line+col nb adjustment from the whitespace trimmed at the end.
String.prototype.trimAdjustNb = function() {
	var endLineNb = 0;
	var endColNb = 0;
	var i = 0;
	for (; i < this.length && (this[i] === ' ' || this[i] === '\n'); i++) {
		currentColNb++;
		if (this[i] === '\n') {
			currentLineNb++;
			currentColNb = 1;
		}
	}
	
	for (i = this.length-1; this[i] === ' ' || this[i] === '\n'; i--);
	
	for (; i < this.length; i++) {
		endColNb++;
		if (this[i] === '\n') {
			endLineNb++;
			endColNb = 1;
		}
	}
		
	return [endLineNb, endColNb, this.trim()]
}