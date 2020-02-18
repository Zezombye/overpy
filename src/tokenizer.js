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
	macros = [];
	
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
	
	//"Timer" used for the end of a multiline string.
    var strCommentTimer = 0;
    
    fileStack = [{
        "name": "<main>",
        "currentLineNb": 1,
        "currentColNb": 0,
        "remainingChars": content.length+1, //does not matter
    }];
	
	var i = 0;
	
	function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		currentRuleLine.tokens.push({
			"fileStack": getFileStackCopy(),
			"text":text
		});
		
		i += text.length-1;
		fileStack[fileStack.length-1].currentColNb += text.length-1;
		fileStack[fileStack.length-1].remainingChars -= text.length-1;
    }
    
    //Length = length of the macro resolution
    //callCols, callLines = how many cols/lines the macro CALL takes
    //callNbChars = how many characters the macro call takes
    //Name: used in stack trace, should be macro name or file name
    //startingCol, startingLine: the col/line of the macro start in the file it is declared
    function addFile(length, callNbChars, callCols, callLines, name, startingCol, startingLine) {
        fileStack.push({
            name,
            remainingChars: length,
            callNbChars,
            callCols,
            callLines,
            currentLineNb: 0+startingLine,
            currentColNb: 0+startingCol,
        });
        //console.log(JSON.stringify(fileStack));
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
        //console.log(JSON.stringify(fileStack));

        isInSpecial = (isInLineComment || isInStrComment || isInMacro);
		
		if (fileStack[fileStack.length-1].remainingChars > 0) {
			fileStack[fileStack.length-1].remainingChars--;
			if (fileStack[fileStack.length-1].remainingChars === 0) {
				//debug("macro lines = "+macroLines+", macro cols = "+macroCols);
				fileStack[fileStack.length-2].currentLineNb += fileStack[fileStack.length-1].callLines;
                fileStack[fileStack.length-2].currentColNb += fileStack[fileStack.length-1].callLines-1;
                fileStack[fileStack.length-2].remainingChars -= fileStack[fileStack.length-1].callNbChars;
                fileStack.pop();
			}
        }
        
        fileStack[fileStack.length-1].currentColNb++;
				
		if (strCommentTimer > 0) {
			strCommentTimer--;
			if (strCommentTimer === 0) {
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
			}
			
			//Do not end the instruction if there is a line break inside a function, or the line is backslashed.
			if (bracketsLevel === 0 && isInRule && !isBackslashed) {
				newRuleLine();
				
            }
            
            fileStack[fileStack.length-1].currentLineNb++;
            fileStack[fileStack.length-1].currentColNb = 0;
			
		} else if (!isInStrComment && !isInMacro && !isInLineComment) {
			
			if (content[i] === "\t") {
				if (currentRuleLine.tokens.length === 0) {
					currentRuleLine.indentLevel += 4;
				}
			} else if (content[i] === ' ') {
                //increase indentation if no token yet; else, do nothing
				if (currentRuleLine.tokens.length === 0) {
			    	currentRuleLine.indentLevel++;
                }
			} else if (content[i] === '\\') {
				//do nothing

			} else if (content[i] === ',') {
				if (bracketsLevel === 0) {
					error("Unexpected token ','");
				}
				addToken(content[i]);
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
				if (content.startsWith("#!define ", i) || content.startsWith("#!defineMember ", i)) {
					if (!isInRule) {
						isInMacro = true;
						currentMacro = {
							"fileStack":getFileStackCopy(),
							"content":""
						};
					} else {
						error("Cannot declare macro inside a rule");
					}
				} else if (content.startsWith("#!mainFile ", i)) {
					//we must ignore this preprocessor directive, and it behaves like a line comment
					isInLineComment = true;

				} else if (content.startsWith("#!obfuscate", i)) {
					obfuscateRules = true;
					isInLineComment = true;
				} else if (content.startsWith("#!disableUnusedVars", i)) {
					disableUnusedVars = true;
					isInLineComment = true;
				} else if (content.startsWith("#!noEdit", i)) {
					enableNoEdit = true;
					isInLineComment = true;
				} else if (content.startsWith("#!declareGlobal", i) || content.startsWith("#!declarePlayer", i)) {
					var isGlobalVariable = content.startsWith("#!declareGlobal", i);
					var lineIndex = content.indexOf("\n", i);
					var firstSpaceIndex = content.indexOf(" ", i);
					if (lineIndex === -1 || firstSpaceIndex === -1) {
						error("Malformed variable declaration")
					}
					var line = content.substring(firstSpaceIndex, lineIndex).trim();
					var args = line.split(" ");
					if (args.length !== 1 && args.length !== 2) {
						error("Malformed variable declaration (directive should have 1 or 2 arguments)");
					}
					var varName = args[0].trim();
					if (args.length === 1 || args[1].trim().length === 0) {
						var varIndex = null;
					} else {
						var varIndex = args[1].trim();
					}
					addVariable(varName, isGlobalVariable, varIndex);

					isInLineComment = true;
				} else if (content.startsWith("#!declareSubroutine", i)) {

					var lineIndex = content.indexOf("\n", i);
					var firstSpaceIndex = content.indexOf(" ", i);
					if (lineIndex === -1 || firstSpaceIndex === -1) {
						error("Malformed subroutine declaration")
					}
					var line = content.substring(firstSpaceIndex, lineIndex).trim();
					var args = line.split(" ");
					if (args.length !== 1 && args.length !== 2) {
						error("Malformed subroutine declaration (directive should have 1 or 2 arguments)");
					}
					var subroutineName = args[0].trim();
					if (args.length === 1 || args[1].trim().length === 0) {
						var subroutineIndex = null;
					} else {
						var subroutineIndex = args[1].trim();
					}
					addSubroutine(subroutineName, subroutineIndex);

					isInLineComment = true;
				} else if (content.startsWith("#!suppressWarnings ", i)) {
					var lineIndex = content.indexOf("\n", i);
					var firstSpaceIndex = content.indexOf(" ", i);
					globalSuppressedWarnings = content.substring(firstSpaceIndex, lineIndex).trim().split(" ").map(x => x.trim());
					isInLineComment = true;
				} else {
					error("Unknown preprocessor directive");
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
				for (; j < content.length; j++) {
					
					//Test for potentially unclosed string
					if (!isBackslashed && content[j] === '\n') {
						error("Unclosed string");
					}
					
					if (!isBackslashed && content[j] === currentStrDelimiter) {
						break;
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
				
				
				//Get token
                var j = i;
                //Increases j as long as there are characters that can compose a word
				for (; j < content.length && isVarChar(content[j]); j++);
                
                //If j == i, then there wasn't a word (but an operator)
				if (j > i) {
					if (content.substring(i, j) === "@Rule") {
						if (bracketsLevel > 0) {
							error("Found '@Rule' within brackets (missing closing bracket in previous rule)");
						}
						isInRule = true;
						rules.push(currentRule);
						currentRule = {
							"fileStack":getFileStackCopy(),
							"lines":[]
						};
						newRuleLine();
					} else if (content.substring(i, j) === "import") {

                        var endOfLine = content.indexOf('\n', i);
                        var path = getFilePath(content.substring(j, endOfLine));
                        var importedFileContent = getFileContent(path);
                        
                        content = content.substring(0, i) + importedFileContent + content.substring(endOfLine);
                        addFile(importedFileContent.length, endOfLine-i, endOfLine-i, 0, getFilenameFromPath(path), 0, 1);
                        i--;
                        fileStack[fileStack.length-1].remainingChars++;

                        continue;

                    } else if (!isInRule) {
						error("Found code outside a rule : "+content[i]);
					}

					var macroWasFound = false;

					//Test each macro
					for (var k = 0; k < macros.length; k++) {
						if (content.substring(i,j) === macros[k].name) {

							var text;
							var replacement;
							var macroCols = 0;
							var macroLines = 0;
							
							if (macros[k].isFunction) {
								//debug("Resolving function macro "+macros[k].name);
								var bracketPos = getBracketPositions(content.substring(i), true, true);
								text = content.substring(i, i+bracketPos[1]+1);
								var macroArgs = getArgs(content.substring(i+bracketPos[0]+1, i+bracketPos[1]));
								replacement = resolveMacro(macros[k], macroArgs, currentRuleLine.indentLevel);
								
							} else {
								//debug("Resolving normal macro "+macros[k].name);
								text = macros[k].name;
								replacement = macros[k].replacement;
							}
							
							content = content.substring(0, i) + replacement + content.substring(i+text.length);
							
							if (text.indexOf('\n') >= 0) {
								macroCols = text.length - text.lastIndexOf('\n');
								macroLines = text.split('\n').length-1;
							} else {
								macroCols = text.length;
							}

							if (replacement === undefined) {
								error("Replacement is undefined");
							}

							addFile(replacement.length, text.length, macroCols, macroLines, macros[k].name, macros[k].startingCol, macros[k].fileStack[macros[k].fileStack.length-1].currentLineNb);
							
							//debug("Text: "+text);
							//debug("Replacement: "+replacement);
							
							k = 0;
							i--;
							fileStack[fileStack.length-1].remainingChars++;
							macroWasFound = true;
						}
					}
					
					if (!macroWasFound) {
						//Handle the special case of min= and max= operators
						if ((content.substring(i,j) === "min" || content.substring(i,j) === "max") && content[i+"min".length] === '=') {
							j++;
						}
						addToken(content.substring(i, j))
					}
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
						if (content[i] === "\r") {
							warn("w_crlf", "File is in CRLF mode. This could cause bugs as CRLF is not supported.");
						} else {
							error("Unknown token '"+content[i]+"'");
						}
					}
				}
			}
			
		} else if (isInStrComment && content.startsWith(currentStrCommentDelimiter, i)) {
			strCommentTimer = 3;
			
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
	
	//console.log("macros = ");
	//console.log(macros);
	//console.log(rules);
	
	return rules.slice(1)
	
}

function resolveMacro(macro, args=[], indentLevel) {

	var result = "";

	if (macro.isFunction) {
		//debug("Args: "+args);
		if (args.length != macro.args.length) {
			error("Wrong number of arguments for macro "+macro.name);
        }
        
        if (macro.isScript) {
            var scriptContent = getFileContent(macro.scriptPath);
            var vars = "";
            for (var i = 0; i < args.length; i++) {
                vars += "var "+macro.args[i]+"="+args[i]+";";
            }
			scriptContent = vars + '\n'+scriptContent;
			scriptContent = builtInJsFunctions + scriptContent;
            try {
				result = eval(scriptContent);
				if (!result) {
					error("Script '"+getFilenameFromPath(macro.scriptPath)+"' yielded no result");
				}
            } catch (e) {
                var stackTrace = e.stack.split('\n').slice(1).reverse();
                var encounteredEval = false;
                for (var line of stackTrace) {
                    line = line.trim();
                    var name = line.substring("at ".length, line.indexOf("(")).trim();
                    if (name === "eval") {
                        name = getFilenameFromPath(macro.scriptPath);
                        encounteredEval = true;
                    }
                    if (encounteredEval) {
                        var colNb = parseInt(line.substring(line.lastIndexOf(":")+1, line.lastIndexOf(")")));
						var lineNb = parseInt(line.substring(line.substring(0, line.lastIndexOf(":")).lastIndexOf(":")+1, line.lastIndexOf(":")));
						lineNb -= builtInJsFunctionsNbLines;
                        fileStack.push({
                            name: name,
                            currentLineNb: lineNb,
                            currentColNb: colNb,
                        })
                    }
                }
                error(e);
            }
        } else {
		
            result = macro.replacement;
            //debug("result 1 = "+result);
            
            //Replace macro argument names with their values
            for (var i = 0; i < macro.args.length; i++) {
                result = result.replace(new RegExp("\\b"+macro.args[i]+"\\b", 'g'), args[i])
            }
            
            //debug("result 2 = "+result);
            result = result.replace(new RegExp("\\\\\\n", 'g'), '\n');
            //debug("result 3 = "+result);
        }
	} else {
		result = macro.replacement;
	}
	var tabs = "\n"+" ".repeat(indentLevel);
	result = result.replace(/\n/g, tabs);
	return result;
}

function parseMacro(macro) {
	
	if (macro.content.startsWith("#!defineMember ")) {
		macro.isMember = true;
	}
	macro.startingCol = macro.content.indexOf(" ")+1;
	macro.content = macro.content.substring(macro.content.indexOf(" ")+1);
	var bracketPos = getBracketPositions(macro.content, false, true);
	
	if (bracketPos.length === 0 || macro.content.indexOf(" ") < bracketPos[0]) {
		//Not a function macro
		macro.isFunction = false;
		macro.text = macro.content.substring(0, macro.content.indexOf(" ")).trim();
		macro.name = macro.text;
        macro.replacement = macro.content.substring(macro.content.indexOf(" ")).trim();
        macro.startingCol += macro.content.indexOf(" ")+macro.content.substring(macro.content.indexOf(" ")).search(/\S/)+1;
		
	} else {
		//Function macro
		macro.isFunction = true;
		macro.text = macro.content.substring(0, bracketPos[1]+1).trim();
		macro.name = macro.content.substring(0, bracketPos[0]).trim();
		macro.replacement = macro.content.substring(bracketPos[1]+1).trim();
        macro.args = getArgs(macro.content.substring(bracketPos[0]+1, bracketPos[1]));
        macro.startingCol += bracketPos[1]+1+macro.content.substring(bracketPos[1]+1).search(/\S/)+1;

        //Test for script macro
        if (macro.replacement.startsWith("__script__(")) {
            macro.isScript = true;
            macro.scriptPath = getFilePath(macro.replacement.substring("__script__(".length, macro.replacement.length-1));
        } else {
            macro.isScript = false;
        }
	}
	
	if (!macro.text || !macro.replacement) {
		error("Expected a macro declaration (eg: #!define myVar A)");
	}
    
    //console.log(macro);

	return macro;
	
}

//Tokenizes string
function tokenizeLocalizedString(str) {
	
	var tokenList = []
	var originalColNb = fileStack[fileStack.length-1].currentColNb;
	
	debug("Tokenizing string '"+str+"'");
	
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		
		fileStack[fileStack.length-1].currentColNb = originalColNb+i;
		var currentToken = "";
		var hasTokenBeenFound = false;
		
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

		//Test for heroes
		if (!hasTokenBeenFound) {
			for (var hero of getConstantKw("HERO CONSTANT")) {
				var heroName = hero.opy.substring("Hero.".length).toLowerCase();
				console.log(heroName);
				if (str.startsWith(heroName, i)) {
					currentToken = "_h"+heroName;
					hasTokenBeenFound = true;
				}
			}
		}
				
		if (!hasTokenBeenFound) {
			var j = i+1;
			for (; str[j] >= 'a' && str[j] <= 'z'; j++);
			error("No string translation found for '"+str.substring(i, j)+"'");
		}
		
		tokenList.push(currentToken);
		i += currentToken.length-1;
		
	}
	
	return tokenList;
}
