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
//OverPy Compiler (OverPy -> Workshop)


//console.log(compileTest);

//console.log(compile(compileTest));

function compile(content) {
	
	if (typeof window !== "undefined") {
		var t0 = performance.now();
	}
	fileStack = [];
	var rules = tokenize(content);
	//console.log(rules);

	var result = "";
	for (var i = 0; i < rules.length; i++) {
	//for (var i = 26; i < 28; i++) {
		result += compileRule(rules[i]);
	}
	if (typeof window !== "undefined") {
		var t1 = performance.now();
		console.log("Compilation time: "+(t1-t0)+"ms");
	}
	return result;
}


function compileRule(rule) {
	
	fileStack = rule.fileStack;
	var result = "";
	
	if (currentArrayElementNames.length !== 0) {
		error("Current array element names length isn't 0");
	}
	
	forLoopTimers = [];
	if (Object.entries(forLoopVariables).length !== 0) {
		console.log(forLoopVariables);
		error("For loop variables isn't empty");
	}
	
	//The first line should always start with @Rule.
	if (rule.lines[0].tokens[0].text !== "@Rule") {
		error("Lexer broke (rule not starting with '@Rule'?)");
	} else if (rule.lines[0].tokens.length !== 2) {
		error("Malformed rule declaration (found "+rule.lines[0].tokens.length+") tokens");
	}
	
	result += tows("@Rule", ruleKw)+" ("+rule.lines[0].tokens[1].text+") {\n";
	result += tabLevel(1)+tows("@Event", ruleKw)+" {\n";
	
	var isInEvent = true;
	var isInActions = false;
	var eventType = "";
	var isEventTeamDefined = false;
	var isEventPlayerDefined = false;
	
	for (var i = 1; i < rule.lines.length+1; i++) {
		//Check for loop var timer
		//console.log(forLoopTimers);
		//console.log(i);
		for (var j = 0; j < forLoopTimers.length; j++) {
			if (forLoopTimers[j][0] === i) {
				delete forLoopVariables[forLoopTimers[j][1]];
			}
		}
		
		if (i >= rule.lines.length) {
			break;
		}
		
		
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}
		
		fileStack = rule.lines[i].tokens[0].fileStack;	
		
		if (rule.lines[i].tokens[0].text.startsWith("@")) {
			if (!isInEvent) {
				error("Annotation found after code");
			} else {
				if (rule.lines[i].tokens[0].text === "@Event") {
					if (rule.lines.length === 2) {
						result += tabLevel(2)+tows("global", eventKw)+";\n";
						eventType = "global";
					} else {
						result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
						eventType = rule.lines[i].tokens[1].text;
					}
					
				} else if (rule.lines[i].tokens[0].text === "@Team") {
					if (isEventTeamDefined) {
						error("Event team defined twice");
					}
					
					isEventTeamDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Hero") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n";
						isEventTeamDefined = true;
					}
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("Hero."+rule.lines[i].tokens[1].text.toUpperCase(), getConstantKw("HERO CONSTANT"))+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Slot") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n"+tabLevel(2);
						isEventTeamDefined = true;
					}
					
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("slot"+rule.lines[i].tokens[1].text, eventKw)+";\n";
					
				} else {
					error("Unknown annotation");
				}
			}
		} else {
			if (isInEvent) {
				if (!isEventTeamDefined && eventType !== "global") {
					result += tabLevel(2)+tows("all", eventKw)+";\n";
				}
				if (!isEventPlayerDefined && eventType !== "global") {
					result += tabLevel(2)+tows("all", eventKw)+";\n";
				}
				isInEvent = false;
				result += tabLevel(1)+"}\n\n";
			}
			
			var areAllLinesAfterCurrentLineIndented = true;
			//Check if all of the lines have indent level non-0
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel === 0) {
					areAllLinesAfterCurrentLineIndented = false;
					break;
				}
			}
			//If without indentation = (rule) condition
			if (rule.lines[i].tokens[0].text === "if" && rule.lines[i].indentLevel === 0 && areAllLinesAfterCurrentLineIndented && !isInActions) {
				result += tabLevel(1)+tows("_conditions", ruleKw)+" {\n";
				result += parseRuleCondition(rule.lines[i].tokens);
				result += tabLevel(1)+"}\n\n";
			} else {
				
				if (rule.lines[i].tokens[0].text === "do") {
					if (rule.lines[i].tokens.length !== 2 || rule.lines[i].tokens[1].text !== ':') {
						error("Do instruction must be 'do:'");
					} else if (isInActions) {
						error("Do instructions must be at the beginning of the rule");
					}
					continue;
				} 
				
				if (!isInActions) {
					result += tabLevel(1)+tows("_actions", ruleKw)+" {\n";
					isInActions = true;
				}
				
				//Check for "if"
				if (rule.lines[i].tokens[0].text === "if") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("If statement must end with ':'");
					}
					
					var isSkipIf = true;
					var isConditionTrueCheck = false;
					var isConditionFalseCheck = false;
					var invertCondition = false;
					var skipIfOffset;
					var hasGoto = false;
					var hasAbort = false;
					var hasContinue = false;
					//var condition = "(" + parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":true});
					
					//Check if there is a goto
					if (rule.lines[i+1].tokens[0].text === "goto") {
						if (rule.lines[i+1].tokens.length < 2) {
							error("Malformed goto");
						}
						
						//Check if the goto is of the form "goto loc+xxx"
						if (rule.lines[i+1].tokens[1].text === "loc") {
							skipIfOffset = parse(rule.lines[i+1].tokens.slice(3))
							
						} else {
							//Search for label
							var label = rule.lines[i+1].tokens[1].text;
							var labelOffset = 0;
							var foundLabel = false;
							for (var j = i+1; j < rule.lines.length; j++) {
								if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
									labelOffset++;
								} else if (rule.lines[j].tokens[0].text === label) {
									foundLabel = true;
									if (rule.lines[j].tokens.length !== 2 || rule.lines[j].tokens[1].text !== ':') {
										error("Label must end with ':'");
									}
									break;
								}
							}
							if (!foundLabel) {
								error("Could not find label "+label);
							}
							skipIfOffset = labelOffset;
						}
						hasGoto = true;
						
					//Check for return (abort)
					} else if (rule.lines[i+1].tokens[0].text === "return") {
						isSkipIf = false;
						hasAbort = true;
						
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 3) {
							isConditionTrueCheck = true;
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 4) {
							isConditionFalseCheck = true;
						}
						
					} else if (rule.lines[i+1].tokens[0].text === "continue") {
						isSkipIf = false;
						hasContinue = true;
						
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 3) {
							isConditionTrueCheck = true;
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 4) {
							isConditionFalseCheck = true;
						}
					} else {
						
						//Check how much instructions there is after the "if" (do not count gotos or lbls)
						var nbInstructionsIf = 0;
						var ifIndent = rule.lines[i].indentLevel;
						var reachedEndOfRule = true;
						var j = i+1;
						for (; j < rule.lines.length; j++) {
							if (rule.lines[j].indentLevel > ifIndent) {
								if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
									nbInstructionsIf++;
								}
							} else {
								reachedEndOfRule = false;
								break;
							}
						}
						
						if (reachedEndOfRule) {
							isSkipIf = false;
							hasAbort = true;
							invertCondition = true;
						} else {
							skipIfOffset = nbInstructionsIf;
							if (skipIfOffset <= 0) {
								error("If instruction must have at least one sub-instruction");
							}
							invertCondition = true;
						}
					}
					
					result += tabLevel(2);
					if (isSkipIf) {
						result += tows("_skipIf", actionKw);
					} else if (isConditionTrueCheck) {
						if (hasAbort) {
							result += tows("_abortIfConditionIsTrue", actionKw);
						} else if (hasContinue) {
							result += tows("_loopIfConditionIsTrue", actionKw);
						}
					} else if (isConditionFalseCheck) {
						if (hasAbort) {
							result += tows("_abortIfConditionIsFalse", actionKw);
						} else if (hasContinue) {
							result += tows("_loopIfConditionIsFalse", actionKw);
						}
					} else if (hasContinue) {
						result += tows("_loopIf", actionKw);
					} else if (hasAbort) {
						result += tows("_abortIf", actionKw);
					} else {
						error("weird if");
					}
					result += "(";
					if (!isConditionTrueCheck && !isConditionFalseCheck) {
						result += parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":invertCondition});
					}
					if (isSkipIf) {
						result += ", "+skipIfOffset;
					}
					result += ");\n";
					if (hasGoto || hasAbort || hasContinue) {
						i++;
					}
					
				//Check for "for"
				} else if (rule.lines[i].tokens[0].text === "for") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("For instruction must end with ':'");
					}
					
					var inOperands = splitTokens(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), "in", false);
					if (inOperands.length !== 2) {
						error("For instruction must contain 'in'");
					} else if (inOperands[0].length !== 1) {
						error("There can only be 1 token between 'for' and 'in'");
					}
					var forVarName = inOperands[0][0].text;
					if (forLoopVariables[forVarName] !== undefined) {
						error("Variable "+forVarName+" is already used");
					}
					forLoopVariables[forVarName] = inOperands[1];
					//Check amount of lines
					var forIndent = rule.lines[i].indentLevel;
					var j = i+1;
					for (; j < rule.lines.length && rule.lines[j].indentLevel > forIndent; j++);
					if (j === i) {
						error("For loop contains no instructions");
					}
					forLoopTimers.push([j, forVarName]);
					
					
				//Check for "while"
				} else if (rule.lines[i].tokens[0].text === "while") {
					result += tabLevel(2);
					if (rule.lines[i].tokens.length === 1) {
						error("While what?");
					}
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text === ":") {
						error("While statement must not end by a colon");
					}
					if (rule.lines[i].tokens[1].text === "true" && rule.lines[i].tokens.length === 2) {
						result += tows("_loop", actionKw);
					} else {
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION") {
							result += tows("_loopIfConditionIsTrue", actionKw);
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION") {
							result += tows("_loopIfConditionIsFalse", actionKw);
						} else {
							result += tows("_loopIf", actionKw)+"("+parse(rule.lines[i].tokens.slice(1))+")";
						}
					}
					
					result += ";\n";
					
				//Check for goto
				} else if (rule.lines[i].tokens[0].text === 'goto') {
					var skipOffset = 0;
					if (rule.lines[i].tokens.length < 2) {
						error("Malformed goto");
					}
					
					//Check if the goto is of the form "goto loc+xxx"
					if (rule.lines[i].tokens[1].text === "loc") {
						skipOffset = parse(rule.lines[i].tokens.slice(3))
						
					} else {
						//Search for label
						var label = rule.lines[i].tokens[1].text;
						var labelOffset = 0;
						var foundLabel = false;
						for (var j = i+1; j < rule.lines.length; j++) {
							if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
								labelOffset++;
							} else if (rule.lines[j].tokens[0].text === label) {
								foundLabel = true;
								if (rule.lines[j].tokens.length !== 2 || rule.lines[j].tokens[1].text !== ':') {
									error("Label must end with ':'");
								}
								break;
							}
						}
						if (!foundLabel) {
							error("Could not find label "+label);
						}
						skipOffset = labelOffset;
					}
					result += tabLevel(2)+tows("_skip", actionKw)+"("+skipOffset+");\n";
					
				//Check for del
				} else if (rule.lines[i].tokens[0].text === 'del') {
					
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ']') {
						error("Del keyword must be followed by an array membership");
					}
					
					var bracketPos = getTokenBracketPos(rule.lines[i].tokens);
					
					var variable = rule.lines[i].tokens.slice(1, bracketPos[bracketPos.length-2])
					var member = rule.lines[i].tokens.slice(bracketPos[bracketPos.length-2]+1, rule.lines[i].tokens.length-1)
					
					debug("Parsing del keyword with var = '"+dispTokens(variable)+"' and member = '"+dispTokens(member)+"'");
					
					result += tabLevel(2);
					result += parseAssignment(variable, member, true, "_removeFromArrayByIndex");
					result += ";\n";
					
				} else if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text === ':') {
					continue;
				} else {
					result += tabLevel(2);
					result += parse(rule.lines[i].tokens, {"isWholeInstruction":true});
					result += ";\n";
				}
			}
		}
	}
	
	if (isInActions || isInEvent) {
		//End actions
		result += tabLevel(1)+"}\n";
	}
	
	//End rules
	result += "}\n\n";
	
	return result;
}

/*
The main parse function.
*/
function parse(content, parseArgs={}) {
	
	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty");
	}
	
	fileStack = content[0].fileStack;
	
	debug("Parsing '"+dispTokens(content)+"'");
	
	//Parse operators
	for (var i = 0; i < pyOperators.length; i++) {
		var operands = splitTokens(content, pyOperators[i], false);
		if (operands.length === 2) {
			
			//The operator is present; parse it
			if (pyOperators[i] === "=") {
				return parseAssignment(operands[0], operands[1], false);
			} else if (pyOperators[i] === "or") {
				return tows("_or", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "and") {
				return tows("_and", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "not") {
				return tows("not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "in") {
				return tows("_arrayContains", valueFuncKw)+"("+parse(operands[1])+", "+parse(operands[0])+")";
			} else if (pyOperators[i] === "==" || pyOperators[i] === '!=' || pyOperators[i] === '<=' || pyOperators[i] === '>=' || pyOperators[i] === '<' || pyOperators[i] === '>' ) {
				var pyOperator = pyOperators[i];
				if (parseArgs.invertCondition === true) pyOperator = reverseOperator(pyOperator);
				return tows("_compare", valueFuncKw)+"("+parse(operands[0])+", "+pyOperator+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "+=") {
				return parseAssignment(operands[0], operands[1], true, "_add");
			} else if (pyOperators[i] === "-=") {
				return parseAssignment(operands[0], operands[1], true, "_subtract");
			} else if (pyOperators[i] === "*=") {
				return parseAssignment(operands[0], operands[1], true, "_multiply");
			} else if (pyOperators[i] === "/=") {
				return parseAssignment(operands[0], operands[1], true, "_divide");
			} else if (pyOperators[i] === "%=") {
				return parseAssignment(operands[0], operands[1], true, "_modulo");
			} else if (pyOperators[i] === "**=") {
				return parseAssignment(operands[0], operands[1], true, "_raiseToPower");
			} else if (pyOperators[i] === "min=") {
				return parseAssignment(operands[0], operands[1], true, "_min");
			} else if (pyOperators[i] === "max=") {
				return parseAssignment(operands[0], operands[1], true, "_max");
			} else if (pyOperators[i] === "++") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_add");
			} else if (pyOperators[i] === "--") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_subtract");
			} else if (pyOperators[i] === "/") {
				return tows("_divide", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "*") {
				return tows("_multiply", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "%") {
				return tows("_modulo", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "**") {
				return tows("_raiseToPower", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "-") {
				
				//Check for unary operator
				if (operands[0].length === 0 || pyOperators.indexOf(operands[0][operands[0].length-1].text) >= 0) {
					//Do nothing; parse it later
					continue;
				} else {
					return tows("_subtract", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
				}
				return tows("_not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "+") {
				return tows("_add", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else {
				error("Unhandled operator "+pyOperators[i]);
			}
			
			break;
			
		}
	}
	
	//Check for current array element variable name
	if (content.length === 1) {
		if (currentArrayElementNames.indexOf(content[0].text) >= 0) {
			return tows("_currentArrayElement", valueFuncKw);
		}
	}
	
	//Check for for loop variable name
	if (content.length === 1) {
		if (forLoopVariables[content[0].text] !== undefined) {
			//console.log(forLoopVariables[content[0].text]);
			return parse(forLoopVariables[content[0].text]);
		}
	}
	
	//Check for literal number
	var nbTest = dispTokens(content).replace(/ /g, "")
	if (!isNaN(nbTest)) {
		return nbTest;
	}
	
	//Check for global variable
	if (content.length === 1 && content[0].text.length === 1 && content[0].text >= 'A' && content[0].text <= 'Z') {
		return tows("_globalVar", valueFuncKw)+"("+content[0].text+")";
	}
	
	
	//Parse array
	if (content[content.length-1].text === ']') {
		var bracketPos = getTokenBracketPos(content);
		
		if (bracketPos.length === 2 && bracketPos[0] === 0) {
			
			return parseLiteralArray(content);
		} else {
			return parseArrayMembership(content.slice(0, bracketPos[bracketPos.length-2]), content.slice(bracketPos[bracketPos.length-2]+1, content.length-1));
		}
	}
	
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[1], operands[0], parseArgs);
	}
	
	//Check for parentheses
	if (content[0].text === '(') {
		return parse(content.slice(1, content.length-1));
	}
	
	//Parse args and name of function.
	var name = content[0].text;
	var args = [];
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else if (content[1].text === '[') {
			return parseArrayMembership(content);
		}
	} else {
		if (name.startsWith('"') || name.startsWith("'")) {
			formatArgs = [];
			return parseString(tokenizeString(name.substring(1, name.length-1)));
			//error("owo");
		}
		
		return tows(name, funcKw);
	}
	
	var str = "args: "
	for (var i = 0; i < args.length; i++) {
		str += "'"+dispTokens(args[i])+"'";
		if (i < args.length-1) {
			str += ", ";
		}
	}
	debug(str);
	
	
	
	//Special functions
	
	if (name === "all" || name === "any") {
		var result = tows("_"+name, valueFuncKw)+"(";
		
		if (args[0][0].text !== "[" || args[0][args[0].length-1].text !== "]") {
			error(name+" function must have [x == y for x in z] as argument (no literal array found)")
		}
		
		var forArgs = splitTokens(args[0].slice(1, args[0].length-1), "for");
		if (forArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'for' found)")
		}
		
		var inArgs = splitTokens(forArgs[1], "in", false);
		if (inArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'in' found)")
		}
		result += parse(inArgs[1]) + ", ";
		currentArrayElementNames.push(inArgs[0][0].text);
		result += parse(forArgs[0])
		currentArrayElementNames.pop();
		result += ")";
		return result;
	}
	
	if (name === "ceil") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundUp", getConstantKw("ROUNDING TYPE"))+")";
	}
	
	if (name === "chase") {
		
		var funcName = "_chase";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
		}
		
		if (args.length !== 4) {
			error("Chase function must have 4 arguments");
		} else if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
			error("3rd argument of chase must be 'rate = xxxx' or 'duration = xxxx'");
		}
		
		if (args[2][0].text === "rate") {
			funcName += "AtRate";
		} else {
			funcName += "OverTime";
		}
		
		return tows(funcName, actionKw)+"("+result+", "+parse(args[1])+", "+parse(args[2].slice(2))+", "+parse(args[3])+")";
	}
	
	if (name === "floor") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundDown", getConstantKw("ROUNDING TYPE"))+")";
	}

	if (name === "hudHeader" || name === "hudText" || name === "hudSubheader" || name === "hudSubtext") {
		if (name !== "hudText" && (args.length < 6 || args.length > 7)) {
			error("Function "+name+" takes 6 or 7 arguments, received "+args.length);
		} else if (name === "hudText" && (args.length < 10 || args.length > 11)) {
			error("Function "+name+" takes 9 or 10 arguments, received "+args.length);
		}
		var defaultColor = [
			{text: "Color"},
			{text: "."},
			{text: "WHITE"}
		];
		var wsnull = [{
			text: "null",
		}]
		if (name === "hudHeader") {
			args.splice(2, 0, wsnull);
			args.splice(3, 0, wsnull);

			args.splice(7, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudSubheader") {
			args.splice(1, 0, wsnull);
			args.splice(3, 0, wsnull);

			args.splice(6, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudHeader") {
			args.splice(1, 0, wsnull);
			args.splice(2, 0, wsnull);

			args.splice(6, 0, defaultColor);
			args.splice(7, 0, defaultColor);
		}
		if (args.length === 10) {
			//Add the spectator visibility
			args.push([
				{text: "SpecVisibility"},
				{text: "."},
				{text: "DEFAULT"},
			])
		}
		name = "_hudText";
		//go on to treat it as a normal function
	}

	if (name === "getAllPlayers") {
		return tows("getPlayers", valueFuncKw)+"("+parse([
			{"text": "Team"},
			{"text": "."},
			{"text": "ALL"},
		])+")";
	}
	
	if (name === "round") {
		if (args.length !== 1) {
			error("round() only takes one argument, you maybe meant to use ceil() or floor().");
		} else {
			return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundToNearest", getConstantKw("ROUNDING TYPE"))+")";
		}
	}
	
	if (name === "raycast") {
		if (parseArgs.raycastType === undefined) {
			error("Raycast function must be followed by a member (eg. getHitPosition)");
		}
		
		if (parseArgs.raycastType === "getHitPosition" || parseArgs.raycastType === "getPlayerHit" || parseArgs.raycastType === "getNormal") {
			var result = tows("_"+parseArgs.raycastType, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			
			if (args[2][0].text !== "include" || args[2][1].text !== "=") {
				error("3rd arg for this raycast must be 'include = xxxx'");
			} else if (args[3][0].text !== "exclude" || args[2][1].text !== "=") {
				error("4th arg for this raycast must be 'exclude = xxxx'");
			} else if (args[4][0].text !== "includePlayerObjects" || args[2][1].text !== "=") {
				error("5th arg for this raycast must be 'includePlayerObjects = xxxx'");
			}
			
			result += parse(args[2].slice(2))+", "+parse(args[3].slice(2))+", "+parse(args[4].slice(2))+")";
			return result;
		} else if (parseArgs.raycastType === "hasLoS") {
			var result = tows("_isInLineOfSight", valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			if (args[2][0].text !== "los" || args[2][1].text !== "=") {
				error("3rd arg for line of sight check must be 'los = LosCheck.xxxx'");
			} 
			result += parse(args[2].slice(2))+")";
			return result;
		} else {
			error("Unknown raycast member '"+parseArgs.raycastType+"'");
		}
	}
	
	if (name === "sorted") {
		if (args.length !== 2) {
			error("sorted() takes 2 arguments");
		} else {
			
			var result = tows("_sortedArray", valueFuncKw)+"("+parse(args[0]);
			
			var lambdaArgs = splitTokens(args[1], ':');
			if (lambdaArgs.length !== 2 || lambdaArgs[0].length !== 4 || lambdaArgs[0][0].text !== "key" || lambdaArgs[0][1].text !== "=" || lambdaArgs[0][2].text !== "lambda") {
				error("Syntax for sorted array condition is 'key=lambda x: condition(x)'");
			}
			
			currentArrayElementNames.push(lambdaArgs[0][3].text);
			result += ", "+parse(lambdaArgs[1])+")";
			currentArrayElementNames.pop();
			return result;
			
		}
	}
	
	if (name === "stopChasingVariable") {
		
		var funcName = "_stopChasing";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
		}
		
		return tows(funcName, actionKw)+"("+result+")";
	}
	
	if (name === "teamHasHero" || name === "getPlayersOnHero" || name === "getNumberOfHeroes") {
		return tows("_!"+name, valueFuncKw)+"("+parse(args[1])+", "+parse(args[0])+")";
	}
	
	
	if (name === "wait") {
		var result = tows("_wait", actionKw)+"("+parse(args[0])+", ";
		if (args.length === 1) {
			result += tows("Wait.IGNORE_CONDITION", getConstantKw("WAIT BEHAVIOR"))
		} else {
			result += parse(args[1]);
		}
		result += ")";
		return result;
	}
	
	//Handle functions with no arguments
	if (args.length === 0) {
		return tows(name+"()", funcKw);
	}
	
	//Default case (not a special function).
	var result = tows(name, funcKw)+"(";
	for (var i = 0; i < args.length; i++) {
		result += parse(args[i]);
		if (i < args.length-1) {
			result += ", ";
		}
	}
	result += ")";
	return result;
	
}

//Parses string
function parseString(content) {
	if (!content instanceof Array) {
		error("Content must be list of str");
	}
	
	var matchStr;
	var tokens = [];
	var hasMatchBeenFound = false;
	
	debug("Parsing string '"+content+"'");
	
	//Test surround strings
	for (var j = 0; j < surroundStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = surroundStrKw[j].opy.substring(0, surroundStrKw[j].opy.indexOf("{0}")).toLowerCase();
		var token2 = surroundStrKw[j].opy.substring(surroundStrKw[j].opy.indexOf("{0}")+"{0}".length).toLowerCase();
		debug("Testing str match on '"+token1+"{0}"+token2+"'");
		if (content[0] === token1 && content[content.length-1] === token2) {
			hasMatchBeenFound = true;
			matchStr = tows(surroundStrKw[j].opy, surroundStrKw);
			//Note: it is assumed all surround strings have a length of only 1 character for each side.
			tokens.push(content.slice(1, content.length-1));
			break;
		}
		tokens = []
	}
	
	//Test ternary string
	for (var j = 0; j < ternaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase();
		var token2 = ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase();
		tokens = splitStrTokens(content, token1, token2);
		if (tokens.length === 3) {
			hasMatchBeenFound = true;
			matchStr = tows(ternaryStrKw[j].opy, ternaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test binary strings
	for (var j = 0; j < binaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			hasMatchBeenFound = true;
			matchStr = tows(binaryStrKw[j].opy, binaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test prefix strings
	for (var j = 0; j < prefixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase();
		if (content[0] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(prefixStrKw[j].opy, prefixStrKw);
			tokens.push(splitStrTokens(content, token1)[1]);
			break;
		}
		tokens = []
	}
	
	//Test postfix strings
	for (var j = 0; j < postfixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = postfixStrKw[j].opy.substring("{0}".length).toLowerCase();
		if (content[content.length-1] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(postfixStrKw[j].opy, postfixStrKw);
			tokens.push(splitStrTokens(content, token1)[0]);
			break;
		}
		tokens = []
	}
	
	
	//Test normal strings
	if (content.length === 1) {
		for (var j = 0; j < normalStrKw.length && !hasMatchBeenFound; j++) {
			var token1 = normalStrKw[j].opy.toLowerCase();
			if (content[0] === token1) {
				hasMatchBeenFound = true;
				matchStr = token1;
				break;
			}
		}
	}
	
	//Test for empty string
	if (!hasMatchBeenFound && (content.length === 0 || content[0] === "")) {
		hasMatchBeenFound = true;
		matchStr = "";
	}
	
	//Test if no token (probably not a string)
	if (tokens.length === 0 && !hasMatchBeenFound) {
		if (content.length !== 1) {
			error("Parser broke I guess? (content = '"+JSON.stringify(content)+"')");
		}
		
		if (content[0].startsWith("_h")) {
			return tows("_hero", valueFuncKw)+"("+tows("Hero."+content[0].substring(2).toUpperCase(), getConstantKw("HERO CONSTANT"))+")";
		} else if (!isNaN(content[0])) {
			return parse(content[0]);
		} else if (content[0] === "{}") {
			if (formatArgs.length === 0) {
				error("Too few arguments supplied for string");
			}
			var result = parse(formatArgs[0]);
			formatArgs.shift();
			return result;
			
		}
	}
	
	var result = tows("_string", valueFuncKw)+"(\""+matchStr+'"';
	//debug("tokens = ")
	//console.log(tokens);
	
	if (tokens.length > 0) {
		result += ", "+parseString(tokens[0]);
	} else {
		result += ", "+tows("null", valueFuncKw);
	}
	if (tokens.length > 1) {
		result += ", "+parseString(tokens[1]);
	} else {
		result += ", "+tows("null", valueFuncKw);
	}
	if (tokens.length > 2) {
		result += ", "+parseString(tokens[2]);
	} else {
		result += ", "+tows("null", valueFuncKw);
	}
	
	result += ")";
	return result;
	
}


//Parses membership (the "." operator).
function parseMember(object, member, parseArgs={}) {
	
	//debug("Parsing member "+dispTokens(member)+" of object "+dispTokens(object));
	
	var name = member[0].text;
	//debug("name = "+name);
	var args = [];
	if (member.length > 1 && member[1].text === '(') {
		args = splitTokens(member.slice(2, member.length-1), ",");
	}
	
	if (name.length === 1 && name >= 'A' && name <= 'Z') {
		return tows("_playerVar", valueFuncKw)+"("+parse(object)+", "+name+")";
	} else if ([
			"Beam", "Button", "Clip", "Color", "Comms", "Effect", "Icon", "Impulse", "Invis", "LosCheck", "Position", "IconReeval", "EffectReeval", "HudReeval", "WorldTextReeval", "ChaseReeval", "DamageReeval", "FacingReeval", "ThrottleReeval", "Relativity", "SpecVisibility", "Status", "Team", "Throttle", "Transform", "Wait"
			].indexOf(object[0].text) >= 0) {
		return tows(object[0].text+"."+name, constantKw)

	} else if (name === "append") {
		if (parseArgs.isWholeInstruction === true) {
			return parseAssignment(object, args[0], true, "_appendToArray");
			
		} else {
			return tows("_appendToArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		}
		
	} else if (name === "exclude") {
		return tows("_removeFromArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		
	} else if (name === "format") {
		formatArgs = args;
		var result = parseString(tokenizeString(object[0].text.substring(1, object[0].text.length-1)));
		formatArgs = [];
		return result;
		
	} else if (name === "getHitPosition") {
		return parse(object, {raycastType:"getHitPosition"});
		
	} else if (name === "getNormal") {
		return parse(object, {raycastType:"getNormal"});
		
	} else if (name === "getPlayerHit") {
		return parse(object, {raycastType:"getPlayerHit"});
		
	} else if (name === "hasLoS") {
		return parse(object, {raycastType:"hasLoS"});
		
	} else if (object[0].text === "Hero") {
		return tows("_hero", valueFuncKw)+"("+tows("Hero."+name, getConstantKw("HERO CONSTANT"))+")";
		
	} else if (name === "index") {
		return tows("_indexOfArrayValue", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		
	} else if (object[0].text === "random" && object.length === 1) {
		if (name === "randint" || name === "uniform") {
			return tows("random."+name, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+")";
		} else if (name === "shuffle" || name === "choice") {
			return tows("random."+name, valueFuncKw)+"("+parse(args[0])+")";
		} else {
			error("Unhandled member 'random."+name+"'");
		}
		
	} else if (name === "remove") {
		return parseAssignment(object, args[0], true, "_removeFromArrayByValue");
		
	} else if (name === "slice") {
		return tows("_arraySlice", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+", "+parse(args[1])+")";
		
	} else if (object[0].text === "Vector") {
		return tows("Vector."+name, valueFuncKw);
		
	} else if (name === "x") {
		return tows("_xComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else if (name === "y") {
		return tows("_yComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else if (name === "z") {
		return tows("_zComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else {
		
		//Check for player function
		try {
			var translation = tows("_&"+name, funcKw);
		} catch (Error) {
			error("Unhandled member ", member[0]);
		}
		
		var result = translation+"("+parse(object);
		for (var i = 0; i < args.length; i++) {
			result += ", "+parse(args[i]);
		}
		result += ")";
		return result;
	}
	
	error("This shouldn't happen");
	
}

//Parses an assignment of value to variable.
//Determines the function to use for modify/set global/player variable (at index).
function parseAssignment(variable, value, modify, modifyArg=null) {
	
	debug("Parsing assignment of '"+dispTokens(value)+"' to '"+dispTokens(variable)+"'");
	
	var func = "";
	if (modify) {
		func += "modify";
	} else {
		func += "set";
	}
	
	var result = "";
	
	if (variable.length === 1) {
		if (variable[0].text.length !== 1 || variable[0].text < 'A' || variable[0].text > 'Z') {
			error("Unauthorized global variable '"+variable[0].text+"'");
		}
		result += tows("_"+func+"GlobalVar", actionKw)+"("+variable[0].text+", ";
		
	} else {
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(variable, ".", false, true);
		if (operands.length === 2) {
			
			//console.log(operands);
			
			//Check for array
			if (operands[0].length > 1 && operands[0][1].text === '[') {
				result += tows("_"+func+"PlayerVarAtIndex", actionKw)
						+"("+parse(operands[1])+", "+operands[0][0].text+", "
						+parse(operands[0].slice(2, operands[0].length-1))+", ";
			} else {
				if (operands[0].length > 1) {
					error("Unauthorised player variable", operands[1]);
				}
				result += tows("_"+func+"PlayerVar", actionKw)+"("+parse(operands[1])+", "+operands[0][0].text+", ";
			}
			
		} else {
			if (variable[1].text === '[') {
				result += tows("_"+func+"GlobalVarAtIndex", actionKw)+"("+variable[0].text+", "+parse(variable.slice(2, variable.length-1))+", ";
			} else {
				error("Unauthorized global variable", variable);
			}
		}
	}
	
	if (modify) {
		result += tows(modifyArg, getConstantKw("OPERATION"))+", ";
	}
	
	result += parse(value)+")";
	return result;
}

//Parses an array index such as A[1].
function parseArrayMembership(array, membership) {
	
	//[0] -> first of
	if (membership.length === 1 && membership[0].text === '0') {
		return tows("_firstOf", valueFuncKw)+"("+parse(array)+")";
		
	//[-1] -> last of
	} else if (membership.length === 2 && membership[0].text === '-' && membership[1].text === '1') {
		return tows("_lastOf", valueFuncKw)+"("+parse(array)+")";
		
	} else {
		return tows("_valueInArray", valueFuncKw)+"("+parse(array)+", "+parse(membership)+")";
	}
	
	
	error("This shouldn't happen");
	
}

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
function parseLiteralArray(content) {
	
	if (content[0].text !== '[' || content[content.length-1].text !== ']') {
		error("Literal array is not actually a literal array");
	}
	
	if (content.length === 2) {
		return tows("_emptyArray", valueFuncKw);
	} else {
		//check for "in" keyword
		//format is "var for var in array if condition"
		var inOperands = splitTokens(content.slice(1, content.length-1), "in", false);
		if (inOperands.length === 2) {
			var ifOperands = splitTokens(inOperands[1], "if");
			if (ifOperands.length !== 2) {
				//Not a filtered array (eg: [player.C for player in playersInRadius()])
				var forOperands = splitTokens(inOperands[0], "for");
				if (forOperands.length !== 2) {
					error("Malformed 'x for y in z'");
				}
				var forVarName = forOperands[1][0].text;
				if (forLoopVariables[forVarName] !== undefined) {
					error("Variable "+forVarName+" is already used");
				}
				forLoopVariables[forVarName] = inOperands[1];
				
				var result = parse(forOperands[0]);
				delete forLoopVariables[forVarName];
				return result;
				
			} else {
				//Filtered array
				if (inOperands[0].length !== 3 || inOperands[0][1].text !== "for" || inOperands[0][0].text !== inOperands[0][2].text) {
					error("Malformed 'x for x in y'");
				}
				debug("Parsing 'x for x in y if z', x='"+inOperands[0][0].text+"', y='"+dispTokens(ifOperands[0])+"', z='"+dispTokens(ifOperands[1])+"'");
				
				currentArrayElementNames.push(inOperands[0][0].text);
				var result = tows("_filteredArray", valueFuncKw)+"("+parse(ifOperands[0])+", "+parse(ifOperands[1])+")";
				currentArrayElementNames.pop();
				return result;
			}
		} else {
			
			//Literal array with only values ([1,2,3])
			var args = splitTokens(content.slice(1, content.length-1), ",");
			var appendFunc = tows("_appendToArray", valueFuncKw);
			var result = tows("_emptyArray", valueFuncKw);
			for (var i = 0; i < args.length; i++) {
				result = appendFunc+"("+result+", "+parse(args[i])+")";
			}
			return result;
		}
	}
	
	error("This shouldn't happen");
	
}

//Parses a rule condition; expects a token list.
function parseRuleCondition(content) {
	
	//console.log(content);
	debug("Parsing rule condition(s) '"+dispTokens(content)+"'");
	
	var result = "";
	
	if (content[content.length-1].text !== ":") {
		error("If statement must end with ':'");
	}
	
	content = content.slice(1, content.length-1);
	
	//If there is any "or" in the condition, there is only one instruction.
	var orOperands = splitTokens(content, "or");
	
	if (orOperands.length > 1) {
		debug("Condition contains 'or'");
		result += tabLevel(2)+parse(content);
	} else {
		var andOperands = splitTokens(content, "and");
		
		for (var i = 0; i < andOperands.length; i++) {
			
			debug("Parsing condition '"+dispTokens(andOperands[i])+"'");
			//console.log(andOperands);
			
			result += tabLevel(2);
			
			var comparisonOperators = ["==", "!=", "<=", ">=", "<", ">"];
			var comparisonOperands;
			var hasComparisonOperand = false;
			
			for (var j = 0; j < comparisonOperators.length; j++) {
				comparisonOperands = splitTokens(andOperands[i], comparisonOperators[j]);
				if (comparisonOperands.length > 1) {
					if (comparisonOperands.length != 2) {
						error("Chained comparisons are not allowed (eg: a == b == c)");
					}
					result += parse(comparisonOperands[0]);
					result += " "+comparisonOperators[j]+" "+parse(comparisonOperands[1]);
					hasComparisonOperand = true;
					break;
				}
			}
			
			if (!hasComparisonOperand) {
				if (andOperands[i][0].text === "not") {
					result += parse(andOperands[i].slice(1)) + " == "+tows("false", valueFuncKw);
				} else {
					result += parse(andOperands[i]) + " == "+tows("true", valueFuncKw);
				}
			}
			
			result += ";\n";
		}
	}
	
	return result;
}

