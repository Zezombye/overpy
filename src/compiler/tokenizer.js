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

class Macro {
	
	constructor(text, replacement, args) {
		if (args === undefined || args.length === 0) {
			this.isFunction = false;
		} else {
			this.isFunction = true;
			this.args = args;
		}
		this.text = text;
		this.replacement = replacement;
	}
	
}

class LogicalLine {
	constructor(indentLevel, tokens) {
		this.indentLevel = indentLevel === undefined ? 0 : indentLevel;
		this.tokens = tokens === undefined ? [] : tokens;
	}

	toString() {
		return " ".repeat(this.indentLevel)+ this.tokens.join(" ");
	}
}

class Token {
	constructor(text, fileStack) {
		this.text = text;
		this.fileStack = fileStack;
	}

	toString() {
		return this.text;
	}
}

/*
Returns an array of logical lines, with their indentation level.
Logical lines are separated by a '\n', if it is not backslashed, and not within brackets.
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
		"+",
		"-",
		",",
		"/",
		"%",
		"**",
		"*",
		".",
		":",
		";",
		"\\",
	];
	
	
	var result = [];
	macros = [];
	
	//var isInString = false;
	var bracketsLevel = 0;
	var currentLine = {};
    
    fileStack = [{
        "name": "<main>",
        "currentLineNb": 1,
        "currentColNb": 1,
        "remainingChars": content.length+1, //does not matter
	}];
	
	var i = 0;
	
	function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		currentLine.tokens.push(new Token(text, getFileStackCopy()));
		
		moveCursor(text.length-1);
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
	
	function newLogicalLine() {
		
		if (currentLine.tokens !== undefined && currentLine.tokens.length > 0) {
			result.push(currentLine);
		}
		
		currentLine = new LogicalLine();
	}
	
	newLogicalLine();

	function moveCursor(amount) {
		for (var j = 0; j < amount; j++) {

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
			if (content[i+j] === "\n") {
				
				fileStack[fileStack.length-1].currentLineNb++;
				fileStack[fileStack.length-1].currentColNb = 1;
			}
		}
		i += amount;
	}

	function parsePreprocessingDirective(content) {

		debug("Parsing preprocessing directive '"+content+"'");
		if (content.startsWith("#!define ") || content.startsWith("#!defineMember ")) {
			macros.push(parseMacro({
				fileStack: getFileStackCopy(),
				content: content,
			}));
		} else if (content.startsWith("#!mainFile ")) {
			//we must ignore this preprocessor directive

		} else if (content.startsWith("#!obfuscate")) {
			obfuscationSettings = {
				obfuscateNames: true,
				obfuscateStrings: true,
				obfuscateConstants: true,
				obfuscateInspector: true,
				ruleFilling: true,
				copyProtection: true,
			}

			var disabledObfuscationTechniques = content.substring("#!obfuscate".length).trim().split(" ").map(x => x.trim());
			for (var tech of disabledObfuscationTechniques) {
				if (tech === "noNameObfuscation") {
					obfuscationSettings.obfuscateNames = false;
				} else if (tech === "noStringObfuscation") {
					obfuscationSettings.obfuscateStrings = false;
				} else if (tech === "noConstantObfuscation") {
					obfuscationSettings.obfuscateConstants = false;
				} else if (tech === "noInspectorObfuscation") {
					obfuscationSettings.obfuscateInspector = false;
				} else if (tech === "noRuleFilling") {
					obfuscationSettings.ruleFilling = false;
				} else if (tech === "noCopyProtection") {
					obfuscationSettings.copyProtection = false;
				} else if (tech !== "") {
					error("Unknown obfuscation setting '"+tech+"', valid ones are: "+Object.keys(obfuscationSettings).map(x => "no"+x[0].toUpperCase()+x.slice(1)).join(", "));
				}
			}

		} else if (content.startsWith("#!disableOptimizations")) {
			enableOptimization = false;

		} else if (content.startsWith("#!extension")) {
			var addedExtension = content.substring("#!extension".length).trim()
			if (!(addedExtension in customGameSettingsSchema.extensions.values)) {
				error("Unknown extension '"+addedExtension+"', valid ones are: "+Object.keys(customGameSettingsSchema.extensions.values).join(", "))
			}
			activatedExtensions.push(addedExtension);
		} else if (content.startsWith("#!optimizeForSize")) {
			optimizeForSize = true;

		} else if (content.startsWith("#!replace0ByCapturePercentage")) {
			if (replacementFor0 !== null) {
				error("A replacement for 0 has already been defined");
			}
			replacementFor0 = "getCapturePercentage";

		} else if (content.startsWith("#!replace0ByIsMatchComplete")) {
			if (replacementFor0 !== null) {
				error("A replacement for 0 has already been defined");
			}
			replacementFor0 = "isMatchComplete";

		} else if (content.startsWith("#!replace0ByPayloadProgressPercentage")) {
			if (replacementFor0 !== null) {
				error("A replacement for 0 has already been defined");
			}
			replacementFor0 = "getPayloadProgressPercentage";

			/* Could also use:
			- isAssemblingHeroes()
			- isInSetup()
			- isWaitingForPlayers()
			- isGameInProgress()
			but they are not really reliable compared to the other functions as players may decide to start the game or change gamemode.
			*/

		} else if (content.startsWith("#!replace1ByMatchRound")) {
			if (replacementFor1 !== null) {
				error("A replacement for 1 has already been defined");
			}
			replacementFor1 = "getMatchRound";

		} else if (content.startsWith("#!replaceTeam1ByControlScoringTeam")) {
			if (replacementForTeam1 !== null) {
				error("A replacement for Team.1 has already been defined");
			}
			replacementForTeam1 = "getControlScoringTeam";

		} else if (content.startsWith("#!suppressWarnings ")) {
			var firstSpaceIndex = content.indexOf(" ");
			globalSuppressedWarnings.push(...content.substring(firstSpaceIndex).trim().split(" ").map(x => x.trim()));

		} else {
			error("Unknown preprocessor directive '"+content+"'");
		}
	}

	
	for (i = 0; i < content.length; moveCursor(1)) {
		
        //console.log(JSON.stringify(fileStack));
						
		if (content[i] === '\n') {
			
			//Only end the logical line if the newline is not within brackets.
			if (bracketsLevel === 0) {
				newLogicalLine();
            }
			
		} else {
			
			if (content[i] === "\t") {
				if (currentLine.tokens.length === 0) {
					currentLine.indentLevel += 4;
				}
			} else if (content[i] === ' ') {
                //increase indentation if no token yet; else, do nothing
				if (currentLine.tokens.length === 0) {
			    	currentLine.indentLevel++;
                }
			} else if (content[i] === '\r') {
				//do nothing

			} else if (content[i] === '\\') {
				var j = i+1;
				for (; j < content.length; j++) {
					if (content[j] === "\n") {
						break;
					} else if (content[j] !== " " && content[j] !== "\r") {
						error("A backslash can only be put at the end of a line");
					}
				}
				//j++;
				moveCursor(j-i-1 + "\n".length);

			} else if (content[i] === '(' || content[i] === '[' || content[i] === '{') {
				bracketsLevel++;
				addToken(content[i]);
				
			} else if (content[i] === ')' || content[i] === ']' || content[i] === '}') {
				bracketsLevel--;
				if (bracketsLevel < 0) {
					error("Brackets level below 0 (extraneous closing bracket)");
				}
				addToken(content[i]);
				
			} else if (content.startsWith("#!", i)) {
				var j = i;
				var isBackslashed = false;
				var preprocessingDirectiveContent = "";
				for (; j < content.length; j++) {
					if (content[j] === "\\") {
						isBackslashed = true;
						if (j < content.length-1 && ![" ", "\r", "\n"].includes(content[j+1])) {
							preprocessingDirectiveContent += content[j];
						}
					} else if (!isBackslashed && content[j] === "\n") {
						break;
					} else if (content[j] !== " " && content[j] !== "\r") {
						isBackslashed = false;
						preprocessingDirectiveContent += content[j];
					} else {
						preprocessingDirectiveContent += content[j];
					}
				}

				if (preprocessingDirectiveContent.startsWith("#!include ")) {
					
					var space = preprocessingDirectiveContent.indexOf(" ");
					var path = getFilePath(preprocessingDirectiveContent.substring(space));
					var importedFileContent = getFileContent(path);
					
					content = content.substring(0, i) + importedFileContent + content.substring(i+preprocessingDirectiveContent.length);
					addFile(importedFileContent.length, preprocessingDirectiveContent.length-i, preprocessingDirectiveContent.length-i, 0, getFilenameFromPath(path), 0, 1);
					i--;
					fileStack[fileStack.length-1].remainingChars++;
				} else {
					parsePreprocessingDirective(preprocessingDirectiveContent);
					moveCursor(j-i-1);
				}

			} else if (content[i] === '#') {
				//Get to the end of the comment. Note: backslashes don't work to continue a line comment.
				var j = i+1;
				for (; j < content.length && content[j] !== "\n"; j++);

				//To facilitate parsing, do not add the comment if it is in parentheses, as it won't be used for action comments.
				if (bracketsLevel !== 0) {
					moveCursor(j-i-1);
				} else {
					addToken(content.substring(i, j))
				}
			
			} else if (content.startsWith("/*", i)) {
				
				//Get to the end of the multiline comment
				var j = i+"/*".length;
				var foundEndOfComment = false;
				for (; j < content.length; j++) {
					if (content.startsWith("*/", j)) {
						foundEndOfComment = true;
						break;
					}
				};

				if (!foundEndOfComment) {
					error("Multiline comment isn't terminated (found end of file while searching for end of comment)");
				}
				j += "*/".length;
				moveCursor(j-i-1);


			} else if (content.startsWith("*/", i)) {
				//All ends should be found when a multiline comment start is found.
				error("Found end of multiline comment, but no matching beginning");
				
			} else if (content[i] === '"' || content[i] === "'") {
				var strDelimiter = content[i];
				var foundEndOfString = false;
				var isBackslashed = false;

				//Get to the end of the string
				var j = i+1;
				for (; j < content.length; j++) {
					if (!isBackslashed && content[j] === strDelimiter) {
						foundEndOfString = true;
						break;
					}
					if (content[j] === '\\' && !isBackslashed) {
						isBackslashed = true;
					} else {
						isBackslashed = false;
					}
				}

				if (!foundEndOfString) {
					error("String isn't terminated (found end of file while searching for end of string)");
				}
				
				j += strDelimiter.length; //account for closing delimiter
				addToken(content.substring(i, j));

			} else {
				
				//Get token
                var j = i;
                //Increases j as long as there are characters that can compose a word
				for (; j < content.length && isVarChar(content[j]); j++);
                
                //If j > i, then there was a word, instead of an operator
				if (j > i) {

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
								replacement = resolveMacro(macros[k], macroArgs, currentLine.indentLevel);
								
							} else {
								//debug("Resolving normal macro "+macros[k].name);
								text = macros[k].name;
								//replacement = macros[k].replacement;
								replacement = resolveMacro(macros[k], [], currentLine.indentLevel);
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
						error("Unknown token '"+content[i]+"'");
					}
				}
			}
			
		}
	}

	if (bracketsLevel > 0) {
		error("Found end of file, but a bracket isn't closed");
	}

	if (DEBUG_MODE) {
		//console.log("macros = ");
		//console.log(macros);
		//console.log(rules);
		console.log(result.join("\n"));
		//console.log(result);
	}
	
	
	return result;
	
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
				if (!result && result !== 0) {
					error("Script '"+getFilenameFromPath(macro.scriptPath)+"' yielded no result");
				}
				result = result.toString();
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
		if (reservedNames.includes(macro.name)) {
			warn("w_redefining_keyword", "The macro name '"+macro.name+"' is a keyword");
		}
		
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
