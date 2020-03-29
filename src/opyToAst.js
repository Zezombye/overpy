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

class Ast {

    constructor(name, args, children, type) {
        if (!name) {
            error("Got no name for ast");
        }
        if (typeof name !== "string") {
            error("Expected a string, but got '"+name+"'");
        }
        this.name = name;
        this.args = args ? args : [];
        this.children = children ? children : [];

        if (!type) {
            //todo: autodetect type
            this.type = "Any";
        } else {
            this.type = type;
        }

        for (var arg of this.args) {
            if (!(arg instanceof Ast)) {
                error("Arg '"+arg+"' is not an AST");
            }
            arg.parent = this;
        }
        for (var child of this.children) {
            if (!(child instanceof Ast)) {
                error("Child '"+child+"' is not an AST");
            }
            child.parent = this;
        }
        this.fileStack = fileStack;
    }
}

class WorkshopVar {
    constructor(name, index) {
        this.name = name;
        this.index = index === undefined ? null : index;
    }
}

class Rule {
    constructor() {
        this.name = null;
        this.conditions = [];
        this.actions = [];
        this.event = null;
        this.eventTeam = null;
        this.eventPlayer = null;
        this.isDisabled = false;
    }
}

function compile(content, language="en-US", _rootPath="") {
	
	if (typeof window !== "undefined") {
		var t0 = performance.now();
	}

	resetGlobalVariables(language);
	rootPath = _rootPath;

	//Handle #!mainfile directive
	if (content.startsWith("#!mainFile ")) {
		var mainFilePath = getFilePath(content.substring("#!mainFile ".length, content.indexOf("\n")));
		rootPath = mainFilePath.substring(0, mainFilePath.lastIndexOf("/")+1);
		content = getFileContent(mainFilePath);
		console.log("content = ");
		console.log(content);
	} else {
		importedFiles.push(rootPath);
	}

	var lines = tokenize(content);

	parseLinesToRules(lines);

	//console.log(rules);
/*
	var result = "";
	var compiledRules = [];

	//First rule contains variable declarations.
	compileVarDeclarationRule(rules[0])

	for (var i = 1; i < rules.length; i++) {
		compiledRules.push(compileRule(rules[i]));
	}

	if (obfuscateRules || enableNoEdit) {
		compiledRules = addEmptyRules(compiledRules);
	} else {
		compiledRules = compiledRules.join("");
	}

	result = compiledCustomGameSettings+generateVariablesField()+generateSubroutinesField()+compiledRules;

	if (typeof window !== "undefined") {
		var t1 = performance.now();
		console.log("Compilation time: "+(t1-t0)+"ms");
	}
	return {
		result: result,
		macros: macros,
		globalVariables: globalVariables,
		playerVariables: playerVariables,
		subroutines: subroutines,
		encounteredWarnings: encounteredWarnings,
	};*/
}

function parseLinesToRules(lines) {

    var rules = [];

    var currentRule = null;
    var i = 0;

    //Get all the lines before the first rule, and parse them
    for (; i < lines.length; i++) {
        if (lines[i].tokens[0].text.startsWith("@")) {
            break;
        }
    }

    parseLines(lines.slice(0, i), false);

    for (; i < lines.length; i++) {
        if (lines[i].tokens.length === 0) {
            error("Empty line, tokenizer broken?");
        }
        fileStack = lines[i].tokens[0].fileStack;

        if (lines[i].indentLevel === 0 && lines[i].tokens[0].text.startsWith("@")) {
            
            //Make a new rule
            rules.push(new Rule());
            currentRule = rules[rules.length-1];

            var j = i;
            for (; j < lines.length; j++) {
                //Get all the annotation lines, skipping comments only if they are followed by another comment or an annotation 
                if (lines[j].tokens[0].text.startsWith("#")) {
                    if (j < lines.length-1 && (lines[j+1].tokens[0].text.startsWith("#") || lines[j+1].tokens[0].text.startsWith("@"))) {
                        lines.splice(j, 1);
                        j--;
                    }
                } else if (lines[j].tokens[0].text.startsWith("@")) {
                    
                    fileStack = lines[j].tokens[0].fileStack;
                    var annotation = lines[j].tokens[0].text;

                    if (["@Rule", "@Event", "@Team", "@Slot", "@Hero"].includes(annotation)) {
                        const ruleProperties = {
                            "@Rule": {
                                prop: "name",
                                display: "name",
                            },
                            "@Event": {
                                prop: "event",
                                display: "event",
                            },
                            "@Team": {
                                prop: "eventTeam",
                                display: "event team",
                            },
                            "@Slot": {
                                prop: "eventPlayer",
                                display: "event player (@Hero/@Slot)",
                            },
                            "@Hero": {
                                prop: "eventPlayer",
                                display: "event player (@Hero/@Slot)",
                            }
                        };

                        if (lines[j].tokens.length !== 2) {
                            error("Malformed rule "+ruleProperties[annotation].display+" declaration (found "+lines[j].tokens.length+") tokens");
                        }
                        if (currentRule[ruleProperties[annotation].prop] !== null) {
                            error("Rule "+ruleProperties[annotation].display+" was already declared");
                        }

                        if (annotation === "@Rule") {
                            currentRule[ruleProperties[annotation].prop] = unescapeString(lines[j].tokens[1].text);
                        } else {
                            currentRule[ruleProperties[annotation].prop] = lines[j].tokens[1].text;
                        }
                        
                    } else if (annotation === "@SuppressWarnings") {
                        if (lines[j].tokens.length === 1) {
                            error("Expected at least one token after @SuppressWarnings")
                        }
                        for (var token of lines[j].tokens) {
                            suppressedWarnings.push(token.text);
                        }

                    } else if (annotation === "@Disabled") {
                        currentRule.isDisabled = true;

                    } else if (annotation === "@Condition") {
                        currentRule.conditions.push(parse(lines[j].tokens.slice(1)));

                    } else {
                        error("Unknown annotation '"+annotation+"'");
                    }

                } else {
                    break;
                }

            }
            if (currentRule.name === null) {
                error("Missing @Rule annotation");
            }
            if (currentRule.event === null) {
                currentRule.event = "global";
            }
            if (currentRule.event === "global") {
                if (currentRule.eventTeam !== null || currentRule.eventPlayer !== null) {
                    error("Cannot declare event team or event player with event type 'global'");
                }
            } else {
                if (currentRule.eventTeam === null) {
                    currentRule.eventTeam = "all";
                }
                if (currentRule.eventPlayer === null) {
                    currentRule.eventPlayer = "all";
                }
            }
            //Skip to the end of the annotations
            i += j-i;

            //Get to the end of the rule
            j = i;
            for (; j < lines.length; j++) {
                if (lines[j].tokens[0].text.startsWith("@")) {
                    break;
                }
            }

            currentRule.actions = parseLines(lines.slice(i, j), true);
            //Skip to the end of the rule
            i += j-i;

        } else {
            error("Parser broken: expected an annotation, but got '"+lines[i].tokens[0].text+"'");
        }
    }
    console.log("Rules:");
    console.log(rules);


}

        
function parseLines(lines, isInRule) {

    //console.log("Lines to ast: "+JSON.stringify(lines, null, 4));
    var result = [];
    var currentComment = null;
    
    for (var i = 0; i < lines.length; i++) {
        fileStack = lines[i].tokens[0].fileStack;
        
        if (lines[i].tokens[0].text.startsWith("#")) {
            currentComment = lines[i].tokens[0].text.substring(1);

        } else if (lines[i].tokens[0].text === "globalvar" || lines[i].tokens[0].text === "playervar" || lines[i].tokens[0].text === "subroutine") {
			if (lines[i].tokens.length < 2 || lines[i].tokens.length > 3) {
				error("Malformed "+lines[i].tokens[0].text+" declaration");
			}
			var index = lines[i].tokens.length > 2 ? lines[i].tokens[2].text : null

			if (lines[i].tokens[0].text === "globalvar") {
				addVariable(lines[i].tokens[1].text, true, index);
			} else if (lines[i].tokens[0].text === "playervar") {
				addVariable(lines[i].tokens[1].text, false, index);
			} else {
				addSubroutine(lines[i].tokens[1].text, index);
            }
            
        } else if (lines[i].tokens[0].text === "settings") {
            var customGameSettings = eval("("+dispTokens(lines[i].tokens.slice(1))+")");
            compileCustomGameSettings(customGameSettings);
        
        } else if (["if", "elif", "else", "do", "for", "def", "while", "switch", "case"].includes(lines[i].tokens[0].text)) {
            if (!isInRule) {
                error("Found code outside a rule");
            }
            var funcName = "__"+lines[i].tokens[0].text+"__";
            var lineMembers = splitTokens(lines[i].tokens, ":", true);
            if (lineMembers.length === 1) {
                error("Expected a ':' at the end of the line");
            }
            //console.log(lineMembers);
            var instruction = new Ast(funcName);
    
            if (funcName !== "__else__" && funcName !== "__do__") {
                instruction.args = [parse(lineMembers[0].slice(1))];
            }
            
            var currentLineIndent = lines[i].indentLevel;
            var childrenLines = [];
            if (lineMembers[1].length > 0) {
                childrenLines.append(new LogicalLine(currentLineIndent+1, lineMembers[1]));
            }
            
            //Get children lines
            var nextIndentLevel = null;
            var j = i+1;
            for (; j < lines.length; j++) {
                fileStack = lines[j].tokens[0].fileStack;

                //Ignore comments and standalone strings
                if (["#", "'", '"'].includes(lines[j].tokens[0][0])) {
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

            if (funcName === "__do__") {
                //There should be a "while" matching the "do"
                if (j < lines.length-1 && lines[j+1].tokens[0].text === "while") {
                    instruction.args = parse(lines[j+1].tokens.slice(1));
                    j++;
                } else {
                    error("Found 'do', but no matching 'while'");
                }
            }

            i += j-i-1;
            instruction.children = parseLines(childrenLines, isInRule);
            instruction.comment = currentComment;
            result.push(instruction);
    
        } else {
            if (!isInRule) {
                error("Found code outside a rule");
            }
            var currentLineAst = parse(lines[i].tokens);
            currentLineAst.comment = currentComment;
            result.push(currentLineAst);
        }
    }
    
    //console.log(result);
    return result;
}

function parse(content) {

	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty (missing operand or argument?)");
    }
    
    fileStack = content[0].fileStack;
	debug("Parsing '"+content+"'");
    
    //Parse operators, according to the operator precedence in pyOperators.
    for (var operator of pyOperators) {
		
		if (operator === "not" || operator === "if") {
			var operands = splitTokens(content, operator, false, false);
		} else {
			var operands = splitTokens(content, operator, false, true);
		}
		if (operands.length === 2) {
			
			//The operator is present; parse it
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

                return new Ast("__ifElse__", [condition, trueExpr, falseExpr]);

			} else if (["or", "and"].includes(operator)) {

				var op1 = parse(operands[0]);
                var op2 = parse(operands[1]);
                return new Ast("__"+operator+"__", [op1, op2]);

			} else if (operator === "not") {

				var op1 = parse(operands[1]);
                return new Ast("__not__", [op1]);

			} else if (operator === "in") {
                
                var value = parse(operands[0]);
                var array = parse(operands[1]);
                return new Ast("__arrayContains__", [array, value]);

			} else if (["==", "!=", "<=", ">=", "<", ">"].includes(operator)) {

				var op1 = parse(operands[0]);
                var op2 = parse(operands[1]);
                return new Ast("__compare__", [op1, new Ast(operator, [], [], "__Operator__"), op2]);

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
                    "min=": "__min__",
                    "max=": "__max__",
                };

                var variable = parse(operands[0]);
                var value = parse(operands[1]);
                return new Ast("__assignTo__", [variable, new Ast(opToFuncMapping[operator], [variable, value])]);

			} else if (["++", "--"].includes(operator)) {
                //De-optimise as well: A++ -> A = A + 1.
                var opToFuncMapping = {
                    "++": "__add__",
                    "--": "__subtract__",
                };
                var op1 = parse(operands[0]);

                //Check if there is something after the operator. If yes, treat it like an operation.
                //Eg: "A -- B" = "A ++ B" = "A + B"
                if (operands[1].length > 0) {
                    var op2 = parse(operands[1]);
                    return new Ast("__add__", [op1, op2]);

                } else {
                    return new Ast("__assignTo__", [op1, new Ast(opToFuncMapping[operator], [op1, new Ast("1")])])
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

			} else if (operator === "-") {
				
                //Handle things like "3*-5" by checking if the 1st operand ends by another operator
                //Note: we only need to check operators with an equal or higher precedence than "-"
				if (operands[0].length > 0 && ["-", "*", "/", "%", "**"].includes(operands[0][operands[0].length-1].text)) {
					continue;
				}

                var op2 = parse(operands[1]);
                if (operands[0].length === 0) {
                    return new Ast("__negate__", [op2]);

                } else {
                    var op1 = operands[0].length === 0 ? new Ast("-1") : parse(operands[0]);
                    return new Ast("__subtract__", [op1, op2]);
                }


			} else if (operator === "+") {

                //Handle things like "3*+5" by checking if the 1st operand ends by another operator
                //Note: we only need to check operators with an equal or higher precedence than "+"
				if (operands[0].length > 0 && ["+", "-", "*", "/", "%", "**"].includes(operands[0][operands[0].length-1].text)) {
					continue;
                }
                
                var op2 = parse(operands[1]);
                if (operands[0].length === 0) {
                    return op2;
                } else {

                    var op1 = operands[0].length === 0 ? "0" : parse(operands[0]);
                    return new Ast("__add__", [op1, op2]);
                }

			} else {
				error("Unhandled operator "+operator);
			}
			
			break;
		}
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
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[0], operands[1]);
	}

	//Check for strings
	if (content[content.length-1].text.startsWith('"') || content[content.length-1].text.startsWith("'")) {
		var stringFunc = "__customString__";
		var string = "";
		for (var i = content.length-1; i >= 0; i--) {
			if (content[i].text.startsWith('"') || content[i].text.startsWith("'")) {
				string = unescapeString(content[i].text)+string;

			} else {
				if (i === 0) {
					//string modifier?
					if (content[0].text === "l") {
						stringFunc = "__localizedString__";
					} else if (content[0].text === "b") {
						stringFunc = "__bigLettersString__";
					} else if (content[0].text === "w") {
						stringFunc = "__fullwidthString__";
					} else {
						error("Invalid string modifier '"+content[0].text+"', valid ones are 'l' (localized), 'b' (big letters) and 'w' (fullwidth)");
					}
				} else {
					error("Expected string, but got '"+content[i].text+"'");
				}
			}
        }
        
        return new Ast(stringFunc, [new Ast(string, [], [], "StringLiteral")]);
	}
	
	//Parse args and name of function.
	var name = content[0].text;
	var args = null;
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else {
			error("Syntax error: expected '(' after '"+name+"', but got '"+content[1].text+"'");
		}
	}

	if (args === null) {

		//Check for current array element variable name
		if (currentArrayElementNames.indexOf(name) >= 0) {
			return new Ast("__currentArrayElement__");
        }
        
        //Check for global variable
        if (globalVariables.includes(name) || defaultVarNames.includes(name)) {
            return new Ast("__globalVar__", [new Ast(name, [], [], "GlobalVarLiteral")]);
        }

		return new Ast(name);
    }
    
	debug("args: "+args.join(","));
	
	//Special functions

	if (name === "async") {
		if (args.length != 2) {
			error("Function 'async' takes 2 arguments, received "+args.length);
		}
        //Check if first arg is indeed a subroutine
        var subroutineArg = args[0][0].text;
		if (!(subroutines.includes(subroutineArg) || defaultSubroutineNames.includes(subroutineArg))) {
			error("Expected subroutine name as first argument");
        }
        
        return new Ast("__startRule__", [new Ast(subroutineArg, [], [], "SubroutineLiteral"), parse(args[1])])
	}
		
	if (name === "chase") {
		
		if (args.length !== 4) {
			error("Function 'chase' takes 4 arguments, received "+args.length);
        }
        if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
			error("3rd argument of function 'chase' must be 'rate = xxxx' or 'duration = xxxx'");
        }
        
        if (args[2][0].text === "rate") {
            var funcName = "__chaseAtRate__";
        } else {
            var funcName = "__chaseAtDuration__";
        }

        return new Ast(funcName, [parse(args[0]), parse(args[1]), parse(args[3])]);
	}
	
	if (name === "raycast") {

        if (args.length === 5) {
			if (args[2][0].text !== "include" || args[2][1].text !== "=") {
				error("3rd arg for this raycast must be 'include = xxxx'");
			} else if (args[3][0].text !== "exclude" || args[3][1].text !== "=") {
				error("4th arg for this raycast must be 'exclude = xxxx'");
			} else if (args[4][0].text !== "includePlayerObjects" || args[4][1].text !== "=") {
				error("5th arg for this raycast must be 'includePlayerObjects = xxxx'");
            }
            var raycastInclude = parse(args[2].slice(2));
            var raycastExclude = parse(args[3].slice(2));
            var raycastIncludePlayersObjects = parse(args[4].slice(2));

            return new Ast("__normalRaycast__", [parse(args[0]), parse(args[1]), raycastInclude, raycastExclude, raycastIncludePlayersObjects]);
            
        } else if (args.length === 3) {
			if (args[2][0].text !== "los" || args[2][1].text !== "=") {
				error("3rd arg for line of sight check must be 'los = LosCheck.xxxx'");
            }
            var raycastLosCheck = parse(args[2].slice(2));

            return new Ast("__losRaycast__", [parse(args[0]), parse(args[1]), raycastLosCheck]);

        } else {
			error("Function 'raycast' takes 3 or 5 arguments, received "+args.length);
        }
	}
	
	if (name === "sorted") {
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
            if (lambdaArgs[0].length !== 2) {
                error("Expected a single token after 'lambda'");
            }
            
            currentArrayElementNames.push(lambdaArgs[0][1].text);
            var sortedCondition = parse(lambdaArgs[1]);
            currentArrayElementNames.pop();

        } else if (args.length !== 1) {
            error("Function 'sorted' takes 1 or 2 arguments, received "+args.length);
        }
        var astArgs = [parse(args[0])];
        if (args.length === 2) {
            astArgs.push(sortedCondition);
        }
        return new Ast("sorted", astArgs);
	}
		
	//Check for subroutine call
	if (args.length === 0) {
        if (subroutines.includes(name) || defaultSubroutineNames.includes(name)) {
            return new Ast("__callSubroutine__", [Ast(name, [], [], "__SubroutineLiteral__")]);
        }
    }
    
    return new Ast(name, args.map(x => parse(x)));
}
