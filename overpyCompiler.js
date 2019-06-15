"use strict";
//OverPy Compiler (OverPy -> Workshop)
//console.log(compileTest);

var currentLine = 0;
var currentCol = 0;
console.log(compile(compileTest));

//We must iterate through the content 3 times:
//- Once to iterate through macros (and determine which macros there are)
//- Once to replace macros
//- Once to finally compile.
function compile(content) {
	
	var [rules, macros] = splitLines(content);
	console.log(rules);
	console.log(macros);
	return "";
}

function Macro(text, replacement, args) {
	
	if (args === undefined || args.length === 0) {
		this.isFunction = false;
	} else {
		this.isFunction = true;
		this.args = args;
	}
	this.text = text;
	this.replacement = replacement;
}

/*
Splits the content to return (effective) lines.
We cannot do split('\n') because we need to handle backslashed lines, and multi-line functions.
For example, the following will count as 1 line:

function(arg1, arg2,
	arg3, arg4)
	
As well as the following:

#!define owo(x) function(x)\
function(y)

While we're at it, this function also automatically removes comments,
and splits rules as well as macros.
*/

function splitLines(content) {
	
	var rules = [];
	var macros = [];
	
	var isInSpecial = false;
	var isInString = false;
	var currentStrDelimiter = "";
	var isInLineComment = false;
	var isInStrComment = false;
	var isInMacro = false;
	var currentStrCommentDelimiter = "";
	var bracketsLevel = 0;
	var isInRule = false;
	var currentRule = {};
	var currentRuleLine = "";
	var currentMacro = {};
	var isBackslashed = false;
	
	//"Timer" used for end of special zones (eg: the end of a multiline string is 3 characters long).
	var timer = 0;
	
	currentLine = 1;
	currentCol = 0;
	
	for (var i = 0; i < content.length; i++) {
		
		isInSpecial = (isInString || isInLineComment || isInStrComment || isInMacro);
		currentCol++;
		
		if (timer > 0) {
			timer--;
			if (timer === 0) {
				isInStrComment = false;
			}
		}
		
		if (content[i] === '\n') {
			if (!isBackslashed) {
				if (isInMacro) {
					isInMacro = false;
					macros.push(currentMacro);
				}
			}
			//For some reason, in Python, line comments aren't affected by backslashes before new lines.
			if (isInLineComment) {
				isInLineComment = false;
				
			//Test for potentially unclosed string
			} else if (isInString) {
				error("Unclosed string");
			
			//Do not end the instruction if there is a line break inside a function, or the line is backslashed.
			} else if (bracketsLevel === 0 && isInRule && !isBackslashed) {
				currentRule.lines.push(currentRuleLine);
				currentRuleLine = "";
				
			}
			currentLine++;
			currentCol = 0;
			
		} else if (!isInString && !isInStrComment && !isInMacro && !isInLineComment) {
			
			if (content[i] === '(' || content[i] === '[' || content[i] === '{') {
				bracketsLevel++;
				
			} else if (content[i] === ')' || content[i] === ']' || content[i] === '}') {
				bracketsLevel--;
				if (bracketsLevel < 0) {
					error("Brackets level below 0");
				}
				
			} else if (content.startsWith("#!", i)) {
				if (!isInRule) {
					isInMacro = true;
					currentMacro = {
						"lineStart":currentLine,
						"content":""
					};
				} else {
					error("Cannot declare macro inside a rule");
				}
				
			} else if (content[i] === '#') {
				isInLineComment = true;
			
			} else if (content.startsWith("'''", i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = "'''";
				
			} else if (content.startsWith('"""', i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = '"""';
				
			} else if (content[i] === '"') {
				isInString = true;
				currentStrDelimiter = '"';
				
			} else if (content[i] === '\'') {
				isInString = true;
				currentStrDelimiter = '\'';
				
			} else if (content.startsWith("@Rule", i)) {
				isInRule = true;
				rules.push(currentRule);
				currentRule = {
					"lineStart":currentLine,
					"lines":[]
				};
				currentRuleLine = "";
			
			} else if (!isInRule) {
				error("Found code outside a rule : "+content[i]);
				
			}
			
		} else if (isInStrComment && content.startsWith(currentStrCommentDelimiter, i)) {
			timer = 3;
			
		} else if (isInString && content[i] === currentStrDelimiter && !isBackslashed) {
			isInString = false;
			
		}
		
		
		if (content[i] === '\\') {
			isBackslashed = true;
		} else {
			isBackslashed = false;
		}
		
		if (!isInStrComment && !isInLineComment || content[i] === '\n') {
			if (isInRule) {
				if (content[i] === '\t') {
					currentRuleLine += "    ";
					currentCol += 3;
				} else {
					currentRuleLine += content[i];
				}
			} else if (isInMacro) {
				currentMacro.content += content[i];
			}
		}
	}
	
	return [rules.slice(1), macros]
	
}

function parseMacros(content) {
	
	var lines = content.split('\n');
	var macros = [];
	
	for (let line of lines) {
		if (line.startsWith("#!define ")) {
			debug("Parsing macro "+line);
			var macro = line.substring("#!define ".length);
			var bracketPos = getBracketPositions(macro);
			if (bracketPos.length === 0) {
				//No parentheses, definitely not a function macro.
				var text = macro.substring(0, macro.indexOf(" ")).trim();
				var replacement = macro.substring(macro.indexOf(" ")).trim();
				macros.push(new Macro(text, replacement));
			} else {
				error("todo");
			}
		}
	}
	return macros;
	
}