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


class WorkshopVar {
    constructor(name, index) {
        this.name = name;
        this.index = index === undefined ? null : index;
    }
}

function parseLines(lines) {

    //console.log("Lines to ast: "+JSON.stringify(lines, null, 4));
    var result = [];
    var currentComments = [];

    
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].tokens.length === 0) {
            error("Received an empty line");
        }
        fileStack = lines[i].tokens[0].fileStack;
        
        if (lines[i].tokens[0].text.startsWith("#")) {
            currentComments.push(lines[i].tokens[0].text.substring(1));
            continue;
        }
        
        //Check for end of line comment
        if (lines[i].tokens.length > 0 && lines[i].tokens[lines[i].tokens.length-1].text.startsWith("#")) {
            currentComments.push(lines[i].tokens[lines[i].tokens.length-1].text.substring(1));
            lines[i].tokens.pop();
        }

        if (lines[i].tokens[0].text === "globalvar" || lines[i].tokens[0].text === "playervar" || lines[i].tokens[0].text === "subroutine") {

            var initDirective = null;
            //Check for assignment
            for (var j = 0; j < lines[i].tokens.length; j++) {
                if (lines[i].tokens[j].text === "=") {
                    initDirective = lines[i].tokens.slice(j+1);
                    lines[i].tokens = lines[i].tokens.slice(0, j);
                    //console.log("init directive : "+dispTokens(initDirective));
                    break;
                }
            }

			if (lines[i].tokens.length < 2 || lines[i].tokens.length > 3) {
				error("Malformed "+lines[i].tokens[0].text+" declaration");
            }
            if (lines[i].indentLevel !== 0) {
                error(lines[i].tokens[0].text+" directive cannot be indented");
            }
			var index = lines[i].tokens.length > 2 ? lines[i].tokens[2].text : null

			if (lines[i].tokens[0].text === "globalvar") {
				addVariable(lines[i].tokens[1].text, true, index, initDirective);
			} else if (lines[i].tokens[0].text === "playervar") {
				addVariable(lines[i].tokens[1].text, false, index, initDirective);
			} else {
				addSubroutine(lines[i].tokens[1].text, index);
            }
            
        } else if (lines[i].tokens[0].text === "settings") {

            try {
                if (lines[i].tokens.length === 2) {
                    var path = getFilePath(lines[i].tokens[1].text);
                    var customGameSettings = eval("("+getFileContent(path)+")");
                } else {
                    var customGameSettings = eval("("+lines[i].tokens.slice(1).map(x => x.text).join("")+")");

                }
            } catch (e) {
                error(e);
            }
            compileCustomGameSettings(customGameSettings);
        
        } else if (lines[i].tokens[0].text.startsWith("@")) {

            if (lines[i].tokens[0].text === "@Condition" || lines[i].tokens[0].text === "@Name") {
                var currentLineAst = new Ast(lines[i].tokens[0].text, [parse(lines[i].tokens.slice(1))], [], "__Annotation__");

            } else {
                var currentLineAst = new Ast(lines[i].tokens[0].text, lines[i].tokens.slice(1).map(x => new Ast(x.text, [], [], "__AnnotationArg__")), [], "__Annotation__");

            }
            if (currentComments !== []) {
                currentLineAst.comment = commentArrayToString(currentComments);
            }
            result.push(currentLineAst);

        } else if (["rule", "enum", "if", "elif", "else", "do", "for", "def", "while", "switch", "case", "default"].includes(lines[i].tokens[0].text)) {

            var tokenToFuncMapping = {
                "rule": "__rule__",
                "enum": "__enum__",
                "if": "__if__",
                "elif": "__elif__",
                "else": "__else__",
                "do": "__doWhile__",
                "for": "__for__",
                "def": "__def__",
                "while": "__while__",
                "switch": "__switch__",
                "case": "__case__",
                "default": "__default__",
            }


            var funcName = tokenToFuncMapping[lines[i].tokens[0].text];
            var args = [];
            var children = [];
            var instructionRuleAttributes = null;
            var lineMembers = splitTokens(lines[i].tokens, ":", true);
            if (lineMembers.length === 1) {
                error("Expected a ':' at the end of the line");
            }
            //console.log(lineMembers);

            if (funcName === "__rule__") {
                if (lineMembers[0].length !== 2) {
                    error("Malformatted 'rule' declaration");
                }
                instructionRuleAttributes = {};
                instructionRuleAttributes.name = unescapeString(lineMembers[0][1].text, true);

            } else if (funcName === "__enum__") {
                if (lineMembers[0].length !== 2) {
                    error("Malformatted 'enum' declaration");
                }
                args = [new Ast(lineMembers[0][1].text, [], [], "__EnumName__")];


            } else if (funcName === "__def__") {
                if (lineMembers[0].length !== 4 || lineMembers[0][2].text !== "(" || lineMembers[0][3].text !== ")") {
                    error("Malformatted 'def' declaration");
                }
                instructionRuleAttributes = {};
                instructionRuleAttributes.subroutineName = lineMembers[0][1].text;
            }

            if (!["__else__", "__doWhile__", "__rule__", "__enum__", "__def__", "__default__"].includes(funcName)) {
                args = [parse(lineMembers[0].slice(1))];
            }
            
            var currentLineIndent = lines[i].indentLevel;
            var childrenLines = [];

            //Handle one-line children such as "if A: B++"
            if (lineMembers[1].length > 0) {
                //console.log(JSON.stringify(lineMembers[1], null, 4));
                //console.log(JSON.stringify(childrenLines, null, 4));
                childrenLines.push(new LogicalLine(currentLineIndent+1, lineMembers[1]));
                //console.log(JSON.stringify(childrenLines, null, 4));
            }
            
            
            //Get children lines
            var nextIndentLevel = null;
            var j = i+1;
            for (; j < lines.length; j++) {
                fileStack = lines[j].tokens[0].fileStack;

                //Ignore comments
                if (!lines[j].tokens[0][0] !== "#") {
                    if (lines[j].indentLevel <= currentLineIndent) {
                        break;
                    } else if (lines[j].indentLevel > currentLineIndent && nextIndentLevel !== null && lines[j].indentLevel < nextIndentLevel) {
                        error("Indentation does not match any outer indentation level");
                    }
                }
                if (nextIndentLevel = null) {
                    nextIndentLevel = lines[j].indentLevel;
                    if (childrenLines.length > 0) {
                        childrenLines[0].indentLevel = nextIndentLevel;
                    }
                }
                childrenLines.push(lines[j]);
            }

            if (funcName === "__doWhile__") {
                //There should be a "while" matching the "do"
                if (j < lines.length && lines[j].tokens[0].text === "while") {
                    args = [parse(lines[j].tokens.slice(1))];
                    j++;
                } else {
                    error("Found 'do', but no matching 'while'");
                }
            }

            i += j-i-1;
            if (funcName === "__enum__") {
                //Implement our own mini-parser to not get "function does not exist" errors.
                enumMembers[args[0].name] = {};
                var lastIntValue = 0;
                for (var k = 0; k < childrenLines.length; k++) {
                    fileStack = childrenLines[k].tokens[0].fileStack;
                    //console.log(childrenLines[k]);
                    if (childrenLines[k].tokens[childrenLines[k].tokens.length-1].text !== ",") {
                        if (k < childrenLines.length-1) {
                            error("Expected ',' at the end of the line");
                        }
                    } else {
                        childrenLines[k].tokens = childrenLines[k].tokens.slice(0, childrenLines[k].tokens.length-1);
                    }
                    var assignOperands = splitTokens(childrenLines[k].tokens, "=", false);
                    if (assignOperands.length === 1) {
                        //Enum member was not assigned a value
                        if (typeof lastIntValue === "number") {
                            enumMembers[args[0].name][childrenLines[k].tokens[0]] = getAstForNumber(lastIntValue);
                            lastIntValue++;
                        } else if (lastIntValue.name === "__negate__" && lastIntValue.args[0].name === "__number__") {
                            lastIntValue = -lastIntValue.args[0].args[0].numValue+1;
                            enumMembers[args[0].name][childrenLines[k].tokens[0]] = getAstForNumber(lastIntValue);
                            lastIntValue++;
                        } else {
                            console.log(lastIntValue)
                            error("Cannot auto-increment enum member, as last value was "+functionNameToString(lastIntValue));
                        }
                    } else {
                        var enumValue = parse(assignOperands[1]);
                        if (enumValue.name === "__number__") {
                            lastIntValue = enumValue.args[0].numValue+1;
                        } else {

                            //Check that there are only constant functions, as to not mislead the programmer; enums are just macros in disguise
                            if (astContainsFunctions(enumValue, notConstantFunctions, false)) {
                                warn("w_enum_constant", "The value of "+args[0].name+"."+childrenLines[k].tokens[0]+" seems to not be constant; it will be inlined and not stored.")
                            }

                            lastIntValue = enumValue;
                        }
                        enumMembers[args[0].name][childrenLines[k].tokens[0]] = enumValue;
                    }
                }
                //We do not care about enums in the AST
                continue;
            } else {
                children = parseLines(childrenLines);
            }

            var instruction = new Ast(funcName, args, children);
            if (currentComments !== []) {
                instruction.comment = commentArrayToString(currentComments);
            }
            if (instructionRuleAttributes !== null) {
                instruction.ruleAttributes = instructionRuleAttributes;
            }
            
            result.push(instruction);
    
        } else {
            var currentLineAst = parse(lines[i].tokens);
            if (currentComments !== []) {
                currentLineAst.comment = commentArrayToString(currentComments);
            }
            result.push(currentLineAst);
        }
        currentComments = [];
    }
    
    //console.log(result);
    return result;
}

function commentArrayToString(comments) {
    if (comments.length === 0) {
        return "";
    }
    var result = comments[comments.length-1];
    var nbChars = getUtf8Length(result);
    if (nbChars > 256) {
        return result;
    }
    for (var i = comments.length-2; i >= 0; i--) {
        var addedChars = getUtf8Length(comments[i]);
        if (nbChars + addedChars + 1 <= 256) {
            result = comments[i]+"\n"+result;
            nbChars += addedChars+1;
        } else {
            break;
        }
    }
    return result;
}

function getOperator(tokens, operators, rtlPrecedence=false, allowUnaryPlusOrMinus=false) {
    
    var operatorFound = null;
    var operatorPosition = -1;
	var bracketsLevel = 0;
	
	if (!rtlPrecedence) {
		var start = tokens.length-1;
		var end = -1;
		var step = -1;
	} else {
		var start = 0;
		var end = tokens.length;
		var step = 1;
	}
	
    //console.log("Checking tokens '"+dispTokens(tokens)+"' for operator(s) "+JSON.stringify(operators));
	
	for (var i = start; i != end; i+=step) {

		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
            bracketsLevel += step;
            
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
            bracketsLevel -= step;
            
		} else if (bracketsLevel === 0 && operators.includes(tokens[i].text)) {
            
            if (allowUnaryPlusOrMinus 
                    || (i !== 0 && (!Object.keys(operatorPrecedence).includes(tokens[i-1].text) || tokens[i-1].text === "not" && tokens[i].text === "in"))
                    || i === 0 && tokens[i].text === "not"
            ) {
                //Support "not in" operator
                if (tokens[i].text === "not" && i < tokens.length-1 && tokens[i+1].text === "in") {
                    continue;
                }
                operatorFound = tokens[i].text;
                operatorPosition = i;
                break;
            }
		}
	}
	
	if (bracketsLevel !== 0) {
		error("Lexer broke (bracket level is "+bracketsLevel+")");
    }
    
    return {
        operatorFound,
        operatorPosition,
    }
}

function parse(content, kwargs={}) {

	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty (missing operand or argument?)");
    }
    
    fileStack = content[0].fileStack;
    debug("Parsing '"+dispTokens(content)+"'");
    
    //Handle the "del" directive.
    if (content[0].text === "del") {
        return new Ast("__del__", [parse(content.slice(1))]);
    }

    //Parse the "goto" directive.
    if (content[0].text === "goto") {
        if (content.length < 2) {
            error("Expected a label or a formula after 'goto'");
        }
        if (content.length === 2) {
            //Check for the special "RULE_START" and convert to the "Loop" instruction.
            if (content[1].text === "RULE_START") {
                return new Ast("__loop__");
            }
            //The goto goes to a label.
            return new Ast("__skip__", [new Ast("__distanceTo__", [new Ast(content[1].text, [], [], "Label")])])
        } else {
            //The goto should be of the format "loc+XXX".
            if (content[1].text !== "loc" || content[2].text !== "+") {
                error("Expected a label or 'loc+XXX' after 'goto'");
            }
            return new Ast("__skip__", [parse(content.slice(3))]);
        }
    }

    //Parse labels. We do not need to care about 'else:' as they are already parsed in the parseLines function.
    if (content.length === 2 && content[1].text === ":") {
        return new Ast(content[0].text, [], [], "Label");
    }
    
    //Check for ++/--.
    if (content.length > 2 && content[content.length-1].text === "+" && content[content.length-2].text === "+") {
        var op1 = parse(content.slice(0, content.length-2));
        return new Ast("__assignTo__", [op1, new Ast("__add__", [op1, getAstFor1()])])
    }
    if (content.length > 2 && content[content.length-1].text === "-" && content[content.length-2].text === "-") {
        var op1 = parse(content.slice(0, content.length-2));
        return new Ast("__assignTo__", [op1, new Ast("__subtract__", [op1, getAstFor1()])])
    }

    //Parse operators, according to the operator precedence in operatorPrecedence.
    if (kwargs.minOperatorPrecedence === undefined) {
        kwargs.minOperatorPrecedence = 1;
    }
    for (var precedence = kwargs.minOperatorPrecedence; precedence <= operatorPrecedence["**"]; precedence++) {

        var operatorsToCheck = Object.keys(operatorPrecedence).filter(x => operatorPrecedence[x] === precedence);
        //var allowUnary = (precedence === operatorPrecedence["not"]);
        var allowUnary = false;

        //manually put the unary plus/minus
        if (precedence > operatorPrecedence["%"] && precedence < operatorPrecedence["**"]) {
            operatorsToCheck = ["+", "-"];
            allowUnary = true;
        }
        var rtlPrecedence = (precedence === operatorPrecedence["**"] || precedence === operatorPrecedence["if"] || allowUnary === true);

        var operatorCheck = getOperator(content, operatorsToCheck, rtlPrecedence, allowUnary);
        if (operatorCheck.operatorFound === null) {
            continue;
        }

        //The operator is present; parse it
        var operator = operatorCheck.operatorFound;
        var operands = [content.slice(0, operatorCheck.operatorPosition), content.slice(operatorCheck.operatorPosition+1, content.length)];
        
        if (operator === "=") {
            return new Ast("__assignTo__", [parse(operands[0]), parse(operands[1])]);
            
        } else if (operator === "if") {
            //"true if condition else false"
            
            var trueExpr = parse(operands[0]);
            var elseOperands = splitTokens(operands[1], "else", false, false);
            if (elseOperands.length !== 2) {
                error("Found 'if', but no 'else'");
            }
            var falseExpr = parse(elseOperands[1]);
            var condition = parse(elseOperands[0]);

            return new Ast("__ifThenElse__", [condition, trueExpr, falseExpr]);

        } else if (["or", "and"].includes(operator)) {

            var op1 = parse(operands[0]);
            var op2 = parse(operands[1]);
            return new Ast("__"+operator+"__", [op1, op2]);

        } else if (operator === "not") {
            
            var op1 = parse(operands[1]);
            return new Ast("__not__", [op1]);

        } else if (operator === "in") {
            
            var isNotInOperator = false;
            if (operands[0].length > 1 && operands[0][operands[0].length-1].text === "not") {
                isNotInOperator = true;
                operands[0].pop();
            }
            var value = parse(operands[0]);
            var array = parse(operands[1]);
            if (isNotInOperator) {
                return new Ast("__not__", [new Ast("__arrayContains__", [array, value])]);
            } else {
                return new Ast("__arrayContains__", [array, value]);
            }

        } else if (["==", "!=", "<=", ">=", "<", ">"].includes(operator)) {

            var op1 = parse(operands[0]);
            var op2 = parse(operands[1]);
            var opToFuncMapping = {
                "==": "__equals__",
                "!=": "__inequals__",
                "<=": "__lessThanOrEquals__",
                ">=": "__greaterThanOrEquals__",
                "<": "__lessThan__",
                ">": "__greaterThan__",
            }
            return new Ast(opToFuncMapping[operator], [op1, op2]);

        } else if (["+=", "-=", "*=", "/=", "%=", "**=", "min=", "max="].includes(operator)) {
            //Actually de-optimize so we can keep the logic in one place.
            //Transform "A += 1" to "A = A + 1".

            var opToFuncMapping = {
                "+=": "__add__",
                "-=": "__subtract__",
                "*=": "__multiply__",
                "/=": "__divide__",
                "%=": "__modulo__",
                "**=": "__raiseToPower__",
                "min=": "min",
                "max=": "max",
            };

            var variable = parse(operands[0]);
            var value = parse(operands[1]);
            return new Ast("__assignTo__", [variable, new Ast(opToFuncMapping[operator], [variable, value])]);

        } else if (["+", "-"].includes(operator)) {
            
            if (precedence > operatorPrecedence["%"] && precedence < operatorPrecedence["**"]) {
                //unary plus/minus
                if (operator === "+") {
                    return parse(operands[1]);
                } else {
                    return new Ast("__negate__", [parse(operands[1])]);
                }
            } else {
                if (operator === "+") {
                    return new Ast("__add__", [parse(operands[0]), parse(operands[1])]);
                } else {
                    return new Ast("__subtract__", [parse(operands[0]), parse(operands[1])]);
                }
            }

        } else if (["/", "*", "%", "**"].includes(operator)) {

            var opToFuncMapping = {
                "/": "__divide__",
                "*": "__multiply__",
                "%": "__modulo__",
                "**": "__raiseToPower__",
            }
            var op1 = parse(operands[0]);
            var op2 = parse(operands[1]);
            return new Ast(opToFuncMapping[operator], [op1, op2]);

        }
        error("Unhandled operator "+operator);
    }
    		
	//Parse array
	if (content[content.length-1].text === ']') {
		var bracketPos = getTokenBracketPos(content);
		
		if (bracketPos.length === 2 && bracketPos[0] === 0) {
            //It is a literal array such as [1,2,3] or [i for i in A if x].
            return parseLiteralArray(content);
            
		} else {
            var array = parse(content.slice(0, bracketPos[bracketPos.length-2]));
            var value = parse(content.slice(bracketPos[bracketPos.length-2]+1, content.length-1))
            return new Ast("__valueInArray__", [array, value])
		}
	}

	//Parse dictionary
	if (content[0].text === "{") {
		return parseDictionary(content);
	}
		
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[0], operands[1]);
    }
    
	//Check for parentheses
	if (content[0].text === '(') {
		var bracketPos = getTokenBracketPos(content);
		if (bracketPos.length === 2 && bracketPos[1] === content.length-1) {
            //All the expression is in parentheses; just remove them
            return parse(content.slice(1, content.length-1));

        } else {
            error("Malformatted parentheses");
        }
	}

	//Check for strings
	if (content[content.length-1].text.startsWith('"') || content[content.length-1].text.startsWith("'")) {
		var stringType = "StringLiteral";
		var string = "";
		for (var i = content.length-1; i >= 0; i--) {
			if (content[i].text.startsWith('"') || content[i].text.startsWith("'")) {
				string = unescapeString(content[i].text, true)+string;

			} else {
				if (i === 0) {
					//string modifier?
					if (content[0].text === "l") {
						stringType = "LocalizedStringLiteral";
					} else if (content[0].text === "b") {
						stringType = "BigLettersStringLiteral";
					} else if (content[0].text === "w") {
						stringType = "FullwidthStringLiteral";
					} else if (content[0].text === "p") {
						stringType = "PlaintextStringLiteral";
					} else {
						error("Invalid string modifier '"+content[0].text+"', valid ones are 'l' (localized), 'b' (big letters), 'p' (plaintext) and 'w' (fullwidth)");
					}
				} else {
					error("Expected string, but got '"+content[i].text+"'");
				}
			}
        }
        
        return new Ast(string, [], [], stringType);
	}
	
	//Parse args and name of function.
	var name = content[0].text;
	var args = null;
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else {
			error("Expected '(' after '"+name+"', but got '"+content[1].text+"'");
		}
	}

	if (args === null) {

		//Check for current array element variable name
		if (currentArrayElementName === name) {
            var result = new Ast("__currentArrayElement__");
            result.originalName = name;
            return result;
        }
        
		//Check for current array index variable name
		if (currentArrayIndexName === name) {
            var result = new Ast("__currentArrayIndex__");
            result.originalName = name;
            return result;
        }
        
        //Check for global variable
        if (isVarName(name, true)) {
            return new Ast("__globalVar__", [new Ast(name, [], [], "GlobalVariable")]);
        }

        //Check for number
        if (isNumber(name)) {
            //It is an int, else it would have a dot, and wouldn't be processed here.
            //It is also an unsigned int, as the negative sign is not part of the name.
            return new Ast("__number__", [new Ast(name, [], [], "UnsignedIntLiteral")], [], "unsigned int");
        }

		return new Ast(name);
    }
    
	debug("args: "+args.map(x => "'"+dispTokens(x)+"'").join(", "));
	
	//Special functions

	if (name === "async") {
		if (args.length != 2) {
			error("Function 'async' takes 2 arguments, received "+args.length);
		}
        //Check if first arg is indeed a subroutine
        var subroutineArg = args[0][0].text;
		if (!isSubroutineName(subroutineArg)) {
			error("Expected subroutine name as first argument");
        }
        
        return new Ast("__startRule__", [new Ast(subroutineArg, [], [], "Subroutine"), parse(args[1])])
	}
		
	if (name === "chase") {
		
		if (args.length !== 4) {
			error("Function 'chase' takes 4 arguments, received "+args.length);
        }
        if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
			error("3rd argument of function 'chase' must be 'rate = xxxx' or 'duration = xxxx'");
        }
        
        if (args[3].length !== 3 || args[3][0].text !== "ChaseReeval" || args[3][1].text !== ".") {
            error("Expected a member of the 'ChaseReeval' enum as 4th argument for function 'chase', but got '"+dispTokens(args[3])+"'");
        }
        if (args[2][0].text === "rate") {
            var funcName = "__chaseAtRate__";
            args[3][0].text = "__ChaseRateReeval__";
        } else {
            var funcName = "__chaseOverTime__";
            args[3][0].text = "__ChaseTimeReeval__";
        }

        return new Ast(funcName, [parse(args[0]), parse(args[1]), parse(args[2].slice(2)), parse(args[3])]);
	}
	
	if (name === "raycast") {

        if (args.length === 5) {
            //console.log(args[2])
            //console.log(args[2].length)
			if (args[2].length >= 2 && (args[2][0].text === "include" || args[2][1].text === "=")) {
				args[2] = args[2].slice(2);
            } 
            if (args[3].length >= 2 && (args[3][0].text === "exclude" || args[3][1].text === "=")) {
				args[3] = args[3].slice(2);
            } 
            if (args[4].length >= 2 && (args[4][0].text === "includePlayerObjects" || args[4][1].text === "=")) {
				args[4] = args[4].slice(2);
            }

            return new Ast("raycast", [parse(args[0]), parse(args[1]), parse(args[2]), parse(args[3]), parse(args[4])]);
            
        } else {
			error("Function 'raycast' takes 5 arguments, received "+args.length);
        }
    }
    	
	if (name === "sorted") {

        //Lazy & dirty way of properly parsing "sorted(x, lambda a,b: z)" as the parser also splits on the comma on "lambda a,b".
        if (args.length === 3) {
            args[1].push({"text": ","});
            args[1].push(...args[2]);
            args = args.slice(0,2);
        }

		if (args.length === 2) {
            var lambdaArgs = splitTokens(args[1], ':');
            if (lambdaArgs.length !== 2) {
                error("Syntax for sorted array condition is 'lambda x: condition(x)'");
            }
            if (lambdaArgs[0].length < 2) {
                error("Expected 'lambda x' before ':'");
            }
            if (lambdaArgs[0][0].text === "key" && lambdaArgs[0][1].text === "=") {
                lambdaArgs[0] = lambdaArgs[0].slice(2);
            }
            if (lambdaArgs[0][0].text !== "lambda") {
                error("Expected 'lambda x' before ':'");
            }
            if (lambdaArgs[0].length === 2) {
                currentArrayElementName = lambdaArgs[0][1].text;
                currentArrayIndexName = null;
            } else if (lambdaArgs[0].length === 4) {
                if (lambdaArgs[0][2].text !== ",") {
                    error("Expected ',' after '"+lambdaArgs[0][1].text+"', but found '"+lambdaArgs[0][2].text);
                }
                currentArrayElementName = lambdaArgs[0][1].text;
                currentArrayIndexName = lambdaArgs[0][3].text;
            } else {
                error("Expected 1 or 3 tokens after 'lambda', but got "+(lambdaArgs.length-1));
            }
            
            var sortedCondition = parse(lambdaArgs[1]);
            currentArrayElementName = null;
            currentArrayIndexName = null;

        } else if (args.length !== 1) {
            error("Function 'sorted' takes 1 or 2 arguments, received "+args.length);
        }
        var astArgs = [parse(args[0])];
        if (args.length === 2) {
            astArgs.push(sortedCondition);
        } else {
            astArgs.push(new Ast("__currentArrayElement__"));
        }
        return new Ast("sorted", astArgs);
    }

    if (name === "createWorkshopSetting") {
        if (args.length !== 4 && args.length !== 5) {
            error("Function 'createWorkshopSetting' takes 4 or 5 arguments, received "+args.length);
        }

        return new Ast("createWorkshopSetting", [parseType(args[0]), ...args.slice(1).map(x => parse(x))]);
    }

		
	//Check for subroutine call
	if (args.length === 0) {
        if (isSubroutineName(name)) {
            return new Ast("__callSubroutine__", [new Ast(name, [], [], "Subroutine")]);
        }
    }

    //Old functions
    if (name === "destroyAllInWorldText") {
        name = "destroyAllInWorldTexts";
    } else if (name === "disableEnvironmentCollision") {
        name = "_&disableEnvironmentCollision";
    } else if (name === "enableEnvironmentCollision") {
        name = "_&enableEnvironmentCollision";
    } else if (name === "enablePlayerCollision") {
        name = "_&enablePlayerCollision";
    } else if (name === "horizontalAngleFromDirection") {
        name = "horizontalAngleOfDirection";
    }
    
    
    return new Ast(name, args.map(x => parse(x)));
}

function parseMember(object, member) {

	debug("Parsing member '"+dispTokens(member)+"' of object '"+dispTokens(object)+"'");
	
    if (member.length === 0) {
        error("Expected tokens after '.'");
    }

	var name = member[0].text;
	//debug("name = "+name);
	var args = null;
	if (member.length > 1) {
		if (member[1].text === '(') {
            if (member[member.length-1].text !== ")") {
                fileStack = member[member.length-1].fileStack;
                error("Unexpected token '"+member[member.length-1].text+"'");
            }
			args = splitTokens(member.slice(2, member.length-1), ",");
		} else {
			error("Expected '(' after '"+name+"', but got '"+member[1].text+"'");
		}
	}

	if (args === null) {
		if (["x", "y", "z"].includes(name)) {
            return new Ast(`__${name}ComponentOf__`, [parse(object)]);
		}
        
        if (object.length === 1) {

            //Check for member of a user-declared enum
            //Do not throw an error if the name is not in the enum, as it can be in a built-in enum
            if (object[0].text in enumMembers && name in enumMembers[object[0].text]) {
                return enumMembers[object[0].text][name];
            }

            //Check enums
            if (Object.keys(constantValues).includes(object[0].text)) {
                return new Ast(name, [], [], object[0].text);
            
            } else if (object[0].text === "Hero") {
                return new Ast("__hero__", [new Ast(name, [], [], "HeroLiteral")])

            } else if (object[0].text === "Map") {
                return new Ast("__map__", [new Ast(name, [], [], "MapLiteral")])

            } else if (object[0].text === "Gamemode") {
                return new Ast("__gamemode__", [new Ast(name, [], [], "GamemodeLiteral")])

            } else if (object[0].text === "Team") {
                return new Ast("__team__", [new Ast(name, [], [], "TeamLiteral")])

            } else if (object[0].text === "Button") {
                return new Ast("__button__", [new Ast(name, [], [], "ButtonLiteral")])

            } else if (object[0].text === "Color") {
                return new Ast("__color__", [new Ast(name, [], [], "ColorLiteral")])


            //Check the pseudo-enum "math"
            } else if (object[0].text === "Math") {
                if (name === "PI") {
                    return getAstForNumber(3.141592653589793);
                } else if (name === "E") {
                    return getAstForE();
                } else if (name === "INFINITY") {
                    return getAstForNumber(9999999999999999999);
                } else if (name === "SPHERE_HORIZONTAL_RADIUS_MULT") {
                    return getAstForNumber(0.984724);
                } else if (name === "SPHERE_VERTICAL_RADIUS_MULT") {
                    return getAstForNumber(0.998959);
                } else if (name === "INNER_RING_RADIUS_MULT") {
                    return getAstForNumber(0.9415);
                } else if (name === "OUTER_RING_RADIUS_MULT") {
                    return getAstForNumber(0.94965);
                } else if (name === "RING_EXPLOSION_RADIUS_MULT") {
                    return getAstForNumber(0.48);
                } else {
                    error("Unhandled member 'math."+name+"'");
                }
            
            //Check the pseudo-enum "Vector"
            } else if (object[0].text === "Vector") {
                return new Ast("Vector."+name);

            //Check for number
            } else if (isNumber(object[0].text)) {
                if (!isNumber(name)) {
                    error("Expected a number after '.' but got '"+name+"'");
                }
                return new Ast("__number__", [new Ast(object[0].text+"."+name, [], [], "UnsignedFloatLiteral")], [], "unsigned float");
            }
        }

        //Should be a player variable.
        if (!isVarName(name, false)) {
            error("Unknown member '"+name+"' of '"+dispTokens(object)+"'");
        }
        return new Ast("__playerVar__", [parse(object), new Ast(name, [], [], "PlayerVariable")]);

	} else {
	
		if (["append", "concat", "exclude", "index", "remove", "split", "strIndex", "charAt"].includes(name)) {
            if (args.length !== 1) {
                error("Function '"+name+"' takes 1 argument, received "+args.length);
            }
            var funcToInternalFuncMap = {
                "append": "__append__",
                "concat": "__concat__",
                "exclude": "__removeFromArray__",
                "index": "__indexOfArrayValue__",
                "remove": "__remove__",
                "split": "__strSplit__",
                "strIndex": "__strIndex__",
                "charAt": "__strCharAt__",
            };

            return new Ast(funcToInternalFuncMap[name], [parse(object), parse(args[0])])
			
        } else if (name === "last") {
            if (args.length !== 0) {
                error("Function '"+name+"' takes 1 argument, received "+args.length);
            }
            return new Ast("__lastOf__", [parse(object)]);
        
        } else if (name === "format") {
            return new Ast("__format__", [parse(object)].concat(args.map(x => parse(x))));
			
		} else if (["getHitPosition", "getNormal", "getPlayerHit"].includes(name)) {
            if (args.length !== 0) {
                error("Function '"+name+"' takes no argument, received "+args.length);
            }
            return new Ast("__"+name+"__", [parse(object)]);
			
		} else if (object[0].text === "random" && object.length === 1) {
			if (name === "randint" || name === "uniform") {
                if (args.length !== 2) {
                    error("Function 'random."+name+"' takes 2 arguments, received "+args.length);
                }
                return new Ast("random."+name, [parse(args[0]), parse(args[1])]);
                
			} else if (name === "shuffle" || name === "choice") {
                if (args.length !== 1) {
                    error("Function 'random."+name+"' takes 1 argument, received "+args.length);
                }
                return new Ast("random."+name, [parse(args[0])]);
                
			} else {
				error("Unhandled member 'random."+name+"'");
			}
			
		} else if (name === "replace") {
            if (args.length !== 2) {
                error("Function 'replace' takes 2 arguments, received "+args.length);
            }
			return new Ast("__strReplace__", [parse(object), parse(args[0]), parse(args[1])]);
			
		} else if (name === "reverse") {
            if (args.length !== 0) {
                error("Function '"+name+"' takes 1 argument, received "+args.length);
            }
            return new Ast("__reverse__", [parse(object)]);
        
        } else if (name === "slice") {
            if (args.length !== 2) {
                error("Function 'slice' takes 2 arguments, received "+args.length);
            }
			return new Ast("__arraySlice__", [parse(object), parse(args[0]), parse(args[1])]);
			
		} else if (name === "substring") {
            if (args.length !== 2) {
                error("Function 'substring' takes 2 arguments, received "+args.length);
            }
			return new Ast("__substring__", [parse(object), parse(args[0]), parse(args[1])]);
			
		} else {
            //Assume it is a player function

            //old functions
            if (name === "setCamera") {
                name = "startCamera";
            }
            return new Ast("_&"+name, [parse(object)].concat(args.map(x => parse(x))));
		}
	}
	
	error("This shouldn't happen");
}

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
function parseLiteralArray(content) {
		
	if (content.length === 2) {
        return new Ast("__emptyArray__");
    }

    //Check for "for" keyword
    var forOperands = splitTokens(content.slice(1, content.length-1), "for");
    if (forOperands.length === 2) {

        
        var inOperands = splitTokens(forOperands[1], "in", false);
        if (inOperands.length !== 2) {
            error("Expected 'in' after 'for'");
        }
        var ifOperands = splitTokens(inOperands[1], "if");

        if (ifOperands.length === 1) {
            //Expect something like "[x == y for x in z]"
            //Parse as the "mapped array" function.
            var inOperands = splitTokens(forOperands[1], "in", false);
            var mappingFunction = forOperands[0];
            if (inOperands[0].length === 1) {
                //It is the current array element name
                currentArrayElementName = inOperands[0][0].text;
                currentArrayIndexName = null;
            } else if (inOperands[0].length === 3) {
                if (inOperands[0][1].text !== ",") {
                    error("Malformed '[x for a, b in z]': expected ',' but found '"+inOperands[0][1].text+"'");
                }
                currentArrayElementName = inOperands[0][0].text;
                currentArrayIndexName = inOperands[0][2].text;
            } else {
                error("Malformed '[x for y in z]': 1st operand of 'in' has length "+inOperands[0].length+", expected 1 or 3");
            }
            var parsedMappingFunction = parse(forOperands[0]);
            currentArrayElementName = null;
            currentArrayIndexName = null;

            return new Ast("__mappedArray__", [parse(inOperands[1]), parsedMappingFunction]);
            
        } else if (ifOperands.length === 2) {
            //Filtered array
            //Expect something like "[a for x in y if z == 2]"
            

            if (inOperands[0].length === 1) {
                //It is the current array element name
                currentArrayElementName = inOperands[0][0].text;
                currentArrayIndexName = null;
            } else if (inOperands[0].length === 3) {
                if (inOperands[0][1].text !== ",") {
                    error("Malformed '[x for a,b in y if z]': expected ',' but found '"+inOperands[0][1].text+"'");
                }
                currentArrayElementName = inOperands[0][0].text;
                currentArrayIndexName = inOperands[0][2].text;
            } else {
                error("Malformed '[x for a,b in y if z]': 1st operand of 'in' has length "+inOperands[0].length+", expected 1 or 3");
            }

            debug("Parsing 'a for x in y if z', a='"+forOperands[0]+"', x='"+inOperands[0]+"', y='"+ifOperands[0]+"', z='"+ifOperands[1]+"'");

            var condition = parse(ifOperands[1]);
            var mappingFunction = parse(forOperands[0]);
            currentArrayElementName = null;
            currentArrayIndexName = null;

            return new Ast("__mappedArray__", [new Ast("__filteredArray__", [parse(ifOperands[0]), condition]), mappingFunction]);
        } else {
            error("Expected 0 or 1 'if' after 'in', but found "+(ifOperands.length-1));
        }
    } else if (forOperands.length === 1) {
        
        //Literal array with only values ([1,2,3])
        var args = splitTokens(content.slice(1, content.length-1), ",");
        //Allow trailing comma
        if (args[args.length-1].length === 0) {
            args.pop()
        }

        return new Ast("__array__", args.map(x => parse(x)));
    } else {
        error("Expected 0 or 1 'for', but found "+(forOperands.length-1))
    }
	
	error("This shouldn't happen");
	
}

//Parses a dictionary.
function parseDictionary(content) {
    content = content.slice(1, content.length-1);
    var elems = splitTokens(content, ",");
    //support trailing comma
    if (elems[elems.length-1].length === 0) {
        elems.pop();
    }
    
    var astElems = [];
    for (var elem of elems) {
        var keyValue = splitTokens(elem, ":");
        if (keyValue.length !== 2) {
            error("Expected a value of the form 'key: value' but got '"+dispTokens(elem)+"'");
        }
        astElems.push(new Ast("__dictElem__", [parse(keyValue[0]), parse(keyValue[1])]));
    }
    return new Ast("__dict__", astElems);
}
