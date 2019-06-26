"use strict";
//OverPy Compiler (OverPy -> Workshop)


//console.log(compileTest);

//console.log(compile(compileTest));

function compile(content) {
	
	var t0 = performance.now();
	var rules = tokenize(content);
	//console.log(rules);
	
	var result = "";
	for (var i = 0; i < rules.length; i++) {
	//for (var i = 26; i < 28; i++) {
		result += compileRule(rules[i]);
	}
	var t1 = performance.now();
	console.log("Compilation time: "+(t1-t0)+"ms");
	return result;
}

/*
Really a class, but I couldn't manage to make the "class" keyword work.
*/
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

function compileRule(rule) {
	
	currentLineNb = rule.lineStart;
	currentColNb = 1;
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
		
		currentLineNb = rule.lines[i].tokens[0].lineNb;
		currentColNb = rule.lines[i].tokens[0].colNb;
		
		
		
		
		
		if (rule.lines[i].tokens[0].text.startsWith("@")) {
			if (!isInEvent) {
				error("Annotation found after code");
			} else {
				if (rule.lines[i].tokens[0].text === "@Event") {
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
					eventType = rule.lines[i].tokens[1].text;
					
				} else if (rule.lines[i].tokens[0].text === "@Team") {
					if (isEventTeamDefined) {
						error("Event team defined twice");
					}
					
					isEventTeamDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw);
					
				} else if (rule.lines[i].tokens[0].text === "@Hero") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n"+tabLevel(2);
						isEventTeamDefined = true;
					}
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw);
					
				} else if (rule.lines[i].tokens[0].text === "@Slot") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n"+tabLevel(2);
						isEventTeamDefined = true;
					}
					
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw);
					
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
			
			//If without indentation = (rule) condition
			if (rule.lines[i].tokens[0].text === "if" && rule.lines[i].indentLevel === 0) {
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
					var invertCondition = false;
					var skipIfOffset;
					var hasGoto = false;
					var hasAbort = false;
					var condition = "(" + parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":true});
					
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
					} else {
						result += tows("_abortIf", actionKw);
					}
					result += "("+ parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":invertCondition});
					if (isSkipIf) {
						result += ", "+skipIfOffset;
					}
					result += ");\n";
					if (hasGoto || hasAbort) {
						i++;
					}
					
				//Check for "for"
				} else if (rule.lines[i].tokens[0].text === "for") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("For instruction must end with ':'");
					}
					
					var inOperands = splitTokens(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), "in");
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
					var nbForLines = 0;
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
					if (rule.lines[i].tokens[1].text === "true" && rule.lines[i].tokens.length === 2) {
						result += tows("_loop", actionKw);
					} else {
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION") {
							if (rule.lines[i].tokens[2].text !== "==" || rule.lines[i].tokens.length !== 4) {
								error("Condition must be in format 'RULE_CONDITION == false/true'");
							}
							if (rule.lines[i].tokens[3].text === "true") {
								result += tows("_loopIfConditionIsTrue", actionKw);
							} else if (rule.lines[i].tokens[3].text === "false") {
								result += tows("_loopIfConditionIsFalse", actionKw);
							} else {
								error("Condition must be in format 'RULE_CONDITION == false/true'");
							}
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
	
	if (isInActions) {
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
	
	currentLineNb = content[0].lineNb;
	currentColNb = content[0].colNb;
	
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
				return tows("_not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "in") {
				return tows("_arrayContains", valueFuncKw)+"("+parse(operands[1])+", "+parse(operands[0])+")";
			} else if (pyOperators[i] === "==" || pyOperators[i] === '!=' || pyOperators[i] === '<=' || pyOperators[i] === '>=' || pyOperators[i] === '<' || pyOperators[i] === '>' ) {
				var pyOperator = pyOperators[i];
				if (parseArgs.invertCondition === true) pyOperator = reverseOperator(pyOperator);
				return tows("_compare", valueFuncKw)+"("+parse(operands[0])+", "+pyOperator+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "++") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_add");
			} else if (pyOperators[i] === "--") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_subtract");
			} else if (pyOperators[i] === "*") {
				return tows("_multiply", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "/") {
				return tows("_divide", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "%") {
				return tows("_modulo", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "**") {
				return tows("_raiseToPower", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "+") {
				return tows("_add", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "-") {
				
				//Check for unary operator
				if (operands[0].length === 0 || pyOperators.indexOf(operands[0][operands[0].length-1].text) >= 0) {
					//Do nothing; parse it later
					continue;
				} else {
					return tows("_subtract", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
				}
				return tows("_not", valueFuncKw)+"("+parse(operands[1])+")";
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
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[1], operands[0], parseArgs);
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
		
		//Check for booleans
		if (name === "true" || name === "false" || name === "null") {
			return tows(name, boolKw);
		} else if (name.startsWith('"') || name.startsWith("'")) {
			return parseString(tokenizeString(name));
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
	
	if (name === "ceil") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundUp", roundKw)+")";
	}
	
	if (name === "floor") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundDown", roundKw)+")";
	}
	
	if (name === "round") {
		if (args.length !== 1) {
			error("round() only takes one argument, you maybe meant to use ceil() or floor().");
		} else {
			return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundToNearest", roundKw)+")";
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
	
	if (name === "wait") {
		var result = tows("_wait", actionKw)+"("+parse(args[0])+", ";
		if (args.length === 1) {
			result += tows("Wait.IGNORE_CONDITION", waitKw)
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
function parseString(content, args=[]) {
	if (!content instanceof Array) {
		error("Content must be list of str");
	}
	
	//Test ternary string
	for (var j = 0; j < ternaryStrKw.length; j++) {
		var token1 = ternaryStrKw[j][0][0].substring("{0}".length, ternaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
		var token2 = ternaryStrKw[j][0][0].substring("{1}".length, ternaryStrKw[j][0][0].indexOf("{2}")).toLowerCase();
		var tokens = splitStrTokens(content, token1, token2);
		if (tokens.length === 3) {
			return tows("_string", valueFuncKw)+"("+tows(ternaryStrKw[j][0][0], ternaryStrKw)+", "+parse(tokens[0])+", "+parse(tokens[1])+", "+parse(tokens[2])+")";
		}
	}
	
	//Test binary strings
	for (var j = 0; j < binaryStrKw.length; j++) {
		var token1 = binaryStrKw[j][0][0].substring("{0}".length, binaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			return tows("_string", valueFuncKw)+"("+tows(binaryStrKw[j][0][0], binaryStrKw)+", "+parse(tokens[0])+", "+parse(tokens[1])+", "+tows("null", boolKw)+")";
		}
	}
	
	//Test binary strings
	for (var j = 0; j < binaryStrKw.length; j++) {
		var token1 = binaryStrKw[j][0][0].substring("{0}".length, binaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			return tows("_string", valueFuncKw)+"("+tows(binaryStrKw[j][0][0], binaryStrKw)+", "+parse(tokens[0])+", "+parse(tokens[1])+", "+tows("null", boolKw)+")";
		}
	}
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
	} else if (name === "append") {
		if (parseArgs.isWholeInstruction === true) {
			return parseAssignment(object, args[0], true, "_appendToArray");
			
		} else {
			return tows("_appendToArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		}
		
	} else if (object[0].text === "Button") {
		return tows("Button."+name, buttonKw);
		
	} else if (object[0].text === "Color") {
		return tows("Color."+name, colorKw);
		
	} else if (object[0].text === "Comms") {
		return tows("Comms."+name, commsKw);
		
	} else if (object[0].text === "Effect") {
		return tows("Effect."+name, effectKw);
		
	} else if (name === "format") {
		return parseString(tokenizeString(object[0].text), args);
		
	} else if (object[0].text === "Hero") {
		return tows("_hero", valueFuncKw)+"("+tows("Hero."+name, heroKw)+")";
		
	} else if (object[0].text === "Icon") {
		return tows("Icon."+name, iconKw);
		
	} else if (object[0].text === "Impulse") {
		return tows("Impulse."+name, impulseKw);
		
	} else if (name === "index") {
		return tows("_indexOfArrayValue", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		
	} else if (object[0].text === "LosCheck") {
		return tows("LosCheck."+name, losCheckKw);
		
	} else if (object[0].text === "Position") {
		return tows("Position."+name, positionKw);
		
	} else if (object[0].text === "random" && object.length === 1) {
		if (name === "randint") {
			return tows("random."+name, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+")";
		} else {
			return tows("random."+name, valueFuncKw)+"("+parse(args[0])+")";
		}
		
	} else if (object[0].text === "Reeval") {
		return tows("Reeval."+name, reevaluationKw);
		
	} else if (object[0].text === "Relativity") {
		return tows("Relativity."+name, relativeKw);
		
	} else if (name === "slice") {
		return tows("_arraySlice", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+", "+parse(args[1])+")";
		
	} else if (object[0].text === "Status") {
		return tows("Status."+name, statusKw);
		
	} else if (object[0].text === "Team") {
		return tows("Team."+name, teamKw);
		
	} else if (object[0].text === "Transform") {
		return tows("Transform."+name, transformationKw);
		
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
		result += tows("_"+func+"GlobalVar", actionKw)+"("+variable[0].text+", ";
		
	} else {
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(variable, ".", false, true);
		if (operands.length === 2) {
			
			//Check for array
			if (operands[1].length > 1 && operands[1][1].text === '[') {
				result += tows("_"+func+"PlayerVarAtIndex", actionKw)
						+"("+parse(operands[1])+"; "+operands[0][0].text+", "
						+parse(operands[1].slice(2, operands[1].length-1))+", ";
			} else {
				if (operands[1].length > 1) {
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
		result += tows(modifyArg, operationKw)+", ";
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
		var inOperands = splitTokens(content.slice(1, content.length-1), "in");
		if (inOperands.length === 2) {
			if (inOperands[0].length !== 3 || inOperands[0][1].text !== "for" || inOperands[0][0].text !== inOperands[0][2].text) {
				error("Malformed 'x for x in y'");
			} else {
				var ifOperands = splitTokens(inOperands[1], "if");
				if (ifOperands.length !== 2) {
					error("For loop must include condition");
				} else {
					
					debug("Parsing 'x for x in y if z', x='"+inOperands[0][0].text+"', y='"+dispTokens(ifOperands[0])+"', z='"+dispTokens(ifOperands[1])+"'");
					
					currentArrayElementNames.push(inOperands[0][0].text);
					var result = tows("_filteredArray", valueFuncKw)+"("+parse(ifOperands[0])+", "+parse(ifOperands[1])+")";
					currentArrayElementNames.pop();
					return result;
				}
			}
		} else {
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
					currentColNb += comparisonOperators[j].length;
					result += " "+comparisonOperators[j]+" "+parse(comparisonOperands[1]);
					hasComparisonOperand = true;
					break;
				}
			}
			
			if (!hasComparisonOperand) {
				if (andOperands[i].text === "not") {
					result += parse(andOperands[i].slice(1)) + " == "+tows("false", boolKw);
				} else {
					result += parse(andOperands[i]) + " == "+tows("true", boolKw);
				}
			}
			
			result += ";\n";
		}
	}
	
	return result;
}

/*
Splits the content to return an array of rules, with an array of (effective) lines.
We cannot do split('\n') because we need to handle backslashed lines, and multi-line functions.
For example, the following will count as 1 line:

function(arg1, arg2,
	arg3, arg4)
	
As well as the following:

#!define owo(x) function(x)\
function(y)

While we're at it, this function also automatically removes comments,
and splits rules as well as macros.
It also resolves macros, and tokenizes.
*/

function tokenize(content) {
	
	if (!content.endsWith('\n')) {
		content += '\n';
	}
	
	//Not the full list of tokens; namely, brackets aren't in this list.
	//Sorted by longest first, for greediness.
	var tokens = [
		"==",
		"!=",
		"<=",
		">=",
		"+=",
		"-=",
		"*=",
		"/=",
		"%=",
		"**=",
		"<",
		">",
		"=",
		"++",
		"--",
		"+",
		"-",
		",",
		"/",
		"%",
		"**",
		"*",
		".",
		":",
		"\\",
	];
	
	
	var rules = [];
	var macros = [];
	
	var isInSpecial = false;
	//var isInString = false;
	var currentStrDelimiter = "";
	var isInLineComment = false;
	var isInStrComment = false;
	var isInMacro = false;
	var currentStrCommentDelimiter = "";
	var bracketsLevel = 0;
	var isInRule = false;
	var currentRule = {};
	var currentRuleLine = {};
	//var currentToken = {"text":""};
	var currentMacro = {};
	var isBackslashed = false;
	var isInTextToken = false;
	
	//"Timer" used for end of special zones (eg: the end of a multiline string is 3 characters long).
	var timer = 0;
	
	//Timer used when inside a macro resolution, in order to stop incrementing column+line.
	var macroTimer = 0;
	var macroCols = 0;
	var macroLines = 0;
	
	currentLineNb = 1;
	currentColNb = 0;
	
	var i = 0;
	
	function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		currentRuleLine.tokens.push({
			"lineNb":currentLineNb,
			"colNb":currentColNb,
			"text":text
		});
		
		i += text.length-1;
		currentColNb += text.length-1;
	}
	
	function newRuleLine() {
		
		if (currentRuleLine.tokens !== undefined && currentRuleLine.tokens.length > 0) {
			currentRule.lines.push(currentRuleLine);
		}
		
		currentRuleLine = {
			"indentLevel":0,
			"tokens":[]
		};
	}
	
	newRuleLine();
		
	for (i = 0; i < content.length; i++) {
		
		//console.log(i);
		//await sleep(5);
		
		isInSpecial = (isInLineComment || isInStrComment || isInMacro);
		
		
		if (macroTimer > 0) {
			macroTimer--;
			if (macroTimer === 0) {
				//debug("macro lines = "+macroLines+", macro cols = "+macroCols);
				currentLineNb += macroLines;
				currentColNb = macroCols;
			}
		}
		
		if (macroTimer === 0) {
			currentColNb++;
		}
		
		
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
					macros.push(parseMacro(currentMacro));
				}
			}
			//For some reason, in Python, line comments aren't affected by backslashes before new lines.
			if (isInLineComment) {
				isInLineComment = false;
				
			
			//Do not end the instruction if there is a line break inside a function, or the line is backslashed.
			} else if (bracketsLevel === 0 && isInRule && !isBackslashed) {
				newRuleLine();
				
			}
			if (macroTimer === 0) {
				currentLineNb++;
				currentColNb = 0;
			}
			
		} else if (!isInStrComment && !isInMacro && !isInLineComment) {
			
			if (content.startsWith("    ", i) && currentRuleLine.tokens.length === 0) {
				currentRuleLine.indentLevel++;
				currentColNb += "    ".length-1;
			} else if (content.startsWith("\t", i)) {
				if (currentRuleLine.tokens.length === 0) {
					currentRuleLine.indentLevel++;
				}
			} else if (content[i] === ' ') {
				//do nothing
			} else if (content[i] === '\\') {
				//do nothing
			} else if (content[i] === '(' || content[i] === '[' || content[i] === '{') {
				bracketsLevel++;
				addToken(content[i]);
				
			} else if (content[i] === ')' || content[i] === ']' || content[i] === '}') {
				bracketsLevel--;
				if (bracketsLevel < 0) {
					error("Brackets level below 0");
				}
				addToken(content[i]);
				
			} else if (content.startsWith("#!", i)) {
				if (!isInRule) {
					isInMacro = true;
					currentMacro = {
						"lineStart":currentLineNb,
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
				
			} else if (content[i] === '"' || content[i] === '\'') {
				currentStrDelimiter = content[i];
				//Get to the end of the string
				var j = i+1;
				for (; j < content.length && !isBackslashed && content[j] !== currentStrDelimiter; j++) {
					
					//Test for potentially unclosed string
					if (!isBackslashed && content[j] === '\n') {
						error("Unclosed string");
					}
				
						
					if (content[j] === '\\') {
						isBackslashed = true;
					} else {
						isBackslashed = false;
					}
				}
				
				j += 1; //account for closing delimiter
				
				if (j > i) {
					addToken(content.substring(i, j));
				} else {
					error("Failed to parse string '"+content.substring(i, j)+"' (malformed string?)");
				}
								
			} else {
				//Test each macro
				for (var j = 0; j < macros.length; j++) {
					if (content.startsWith(macros[j].name, i)) {
						
						
						var text;
						var replacement;
						
						if (macros[j].isFunction) {
							//debug("Resolving function macro "+macros[j].name);
							var bracketPos = getBracketPositions(content.substring(i), true);
							text = content.substring(i, i+bracketPos[1]+1);
							var macroArgs = getArgs(content.substring(i+bracketPos[0]+1, i+bracketPos[1]));
							replacement = resolveMacro(macros[j], macroArgs);
							
						} else {
							//debug("Resolving normal macro "+macros[j].name);
							text = macros[j].name;
							replacement = macros[j].replacement;
						}
						
						content = content.substring(0, i) + replacement + content.substring(i+text.length);
						if (macroTimer === 0) {
							if (text.indexOf('\n') >= 0) {
								macroCols = text.length - text.lastIndexOf('\n');
								macroLines = text.split('\n').length-1;
							} else {
								macroCols = text.length;
							}
						}
						macroTimer += replacement.length;
						
						//debug("Text: "+text);
						//debug("Replacement: "+replacement);
						
						j = 0;
					}
				}
				
				//Get token
				var j = i;
				for (; j < content.length && isVarChar(content[j]); j++);
				
				if (j > i) {
					if (content.substring(i, j) === "@Rule") {
						isInRule = true;
						rules.push(currentRule);
						currentRule = {
							"lineStart":currentLineNb,
							"lines":[]
						};
						newRuleLine();
					} else if (!isInRule) {
						error("Found code outside a rule : "+content[i]);
					}					
					addToken(content.substring(i, j))
				} else {
					
					var hasTokenBeenFound = false;
					//Test each remaining token
					for (var h = 0; h < tokens.length; h++) {
						if (content.startsWith(tokens[h], i)) {
							addToken(content.substring(i, i+tokens[h].length));
							hasTokenBeenFound = true;
							break;
						}
					}
					
					if (!hasTokenBeenFound) {
						error("Unknown token '"+content[i]+"'");
					}
				}
				
				
				
			}
			
		} else if (isInStrComment && content.startsWith(currentStrCommentDelimiter, i)) {
			timer = 3;
			
		}
		
		
		if (content[i] === '\\') {
			isBackslashed = true;
		} else {
			isBackslashed = false;
		}
		
		if (isInMacro) {
			currentMacro.content += content[i];
		}
	}
	
	rules.push(currentRule);
	
	console.log("macros = ");
	console.log(macros);
	
	return rules.slice(1)
	
}

function resolveMacro(macro, args=[]) {
	if (macro.isFunction) {
		
		//debug("Args: "+args);
		if (args.length != macro.args.length) {
			error("Wrong number of arguments for macro "+macro.name);
		}
		
		var result = macro.replacement;
		//debug("result 1 = "+result);
		
		//No lookbehinds; no other way than to manually loop...
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < macro.args.length; j++) {
				if (result.startsWith(macro.args[j], i)) {
					if ((i > 0 && !isVarChar(result[i-1])) && (i < result.length-1 && !isVarChar(result[i+macro.args[j].length]))) {
						result = result.substring(0, i)+args[j]+result.substring(i+macro.args[j].length);
					}
				}
			}
		}
		for (var i = 0; i < macro.args; i++) {
			result = result.replace(new RegExp("^(?!\\w).+"+macro.args[i]+"(?!\\w)", 'g'), args[i]);
		}
		//debug("result 2 = "+result);
		result = result.replace(new RegExp("\\\\\\n", 'g'), '\n');
		//debug("result 3 = "+result);
		return result;
	} else {
		return macro.replacement;
	}
}

function parseMacro(macro) {
	
	macro.content = macro.content.substring("#!define ".length);
	var bracketPos = getBracketPositions(macro.content);
	
	if (bracketPos.length === 0 || macro.content.indexOf(" ") < bracketPos[0]) {
		//Not a function macro
		macro.isFunction = false;
		macro.text = macro.content.substring(0, macro.content.indexOf(" ")).trim();
		macro.name = macro.text;
		macro.replacement = macro.content.substring(macro.content.indexOf(" ")).trim();
		
	} else {
		//Function macro
		macro.isFunction = true;
		macro.text = macro.content.substring(0, bracketPos[1]+1).trim();
		macro.name = macro.content.substring(0, bracketPos[0]).trim();
		macro.replacement = macro.content.substring(bracketPos[1]+1).trim();
		macro.args = getArgs(macro.content.substring(bracketPos[0]+1, bracketPos[1]));
	}
	
	return macro;
	
}

//Tokenizes string
function tokenizeString(str) {
	
	var tokenList = []
	var originalColNb = currentColNb;
	
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		
		currentColNb = originalColNb+i;
		var currentToken = "";
		var hasTokenBeenFound = false;
		
		/*//Test normal strings
		for (var j = 0; j < normalStrKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = normalStrKw[j][0][0].toLowerCase();
			if (str.startsWith(tokenTest, i)) {
				currentToken = tokenTest;
				hasTokenBeenFound = true;
				break;
			}
		}
		
		//Test prefix strings
		for (var j = 0; j < prefixStrKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = prefixStrKw[j][0][0].substring(0, prefixStrKw[j][0][0].indexOf("{0}")).toLowerCase();
			if (str.startsWith(tokenTest, i)) {
				currentToken = tokenTest;
				hasTokenBeenFound = true;
				break;
			}
		}
		
		//Test postfix strings
		for (var j = 0; j < postfixStrKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = postfixStrKw[j][0][0].substring("{0}".length).toLowerCase();
			if (str.startsWith(tokenTest, i)) {
				currentToken = tokenTest;
				hasTokenBeenFound = true;
				break;
			}
		}
		
		//Test binary strings
		for (var j = 0; j < binaryStrKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = binaryStrKw[j][0][0].substring("{0}".length, binaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
			if (str.startsWith(tokenTest, i)) {
				currentToken = tokenTest;
				hasTokenBeenFound = true;
				break;
			}
		}
		
		//Test ternary strings
		for (var j = 0; j < ternaryStrKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = ternaryStrKw[j][0][0].substring("{0}".length, ternaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
			var tokenTest2 = ternaryStrKw[j][0][0].substring("{1}".length, ternaryStrKw[j][0][0].indexOf("{2}")).toLowerCase();
			if (str.startsWith(tokenTest, i)) {
				currentToken = tokenTest;
				hasTokenBeenFound = true;
				break;
			} else if (str.startsWith(tokenTest2)) {
				currentToken = tokenTest2;
				hasTokenBeenFound = true;
				break;
			} 
		}
		
		//Test surround strings
		for (var j = 0; j < surroundStrKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = surroundStrKw[j][0][0][0].toLowerCase()
			var tokenTest2 = surroundStrKw[j][0][0][surroundStrKw[j][0][0].length-1].toLowerCase()
			if (str.startsWith(tokenTest, i)) {
				currentToken = tokenTest;
				hasTokenBeenFound = true;
				break;
			} else if (str.startsWith(tokenTest2)) {
				currentToken = tokenTest2;
				hasTokenBeenFound = true;
				break;
			} 
		}
		
		//Test heroes
		for (var j = 0; j < heroKw.length && !hasTokenBeenFound; j++) {
			var tokenTest = heroKw[j][0][0].toLowerCase();
			if (str.startsWith(tokenTest, i)) {
				currentToken = "_h"+tokenTest;
				hasTokenBeenFound = true;
				break;
			}
		}*/
		
		//Test tokens
		for (var j = 0; j < strTokens.length; j++) {
			if (str.startsWith(strTokens[j], i)) {
				currentToken = strTokens[j];
				hasTokenBeenFound = true;
				break;
			}
		}
		
		if (!hasTokenBeenFound) {
			//Test numbers
			var j = i;
			for (; (str[j] >= '0' && str[j] <= '9') || str[j] === '.' || str[j] === '-'; j++);
			
			if (j !== i) {
				currentToken = str.substring(i, j);
				hasTokenBeenFound = true;
			}
		}
		
		//Test for formatting
		if (!hasTokenBeenFound) {
			if (str.startsWith("{}", i)) {
				currentToken = "{}";
				hasTokenBeenFound = true;
			}
		}
		
		if (!hasTokenBeenFound) {
			error("No string translation found");
		}
		
		tokenList.push(currentToken);
		i += currentToken.length-1;
		
	}
	
	return tokenList;
}
