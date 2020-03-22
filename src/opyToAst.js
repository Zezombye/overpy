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

    constructor(name, args, children) {
        this.name = name ? name : "";
        this.args = args ? args : [];
        this.children = children ? children : [];
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

function opyToAst(lines) {

    var astRoot = ({
        rules: [],
        globalVars: [],
        playerVars: [],
        subroutines: [],
        settings: null,
    });

    var currentRule = null;
    var i = 0;

    //Get all the lines before the first rule, and parse them
    for (; i < lines.length; i++) {
        if (lines[i].tokens[0].text.startsWith("@")) {
            break;
        }
    }

    linesToAst(lines.slice(0, i), false);

    for (; i < lines.length; i++) {
        if (lines[i].tokens.length === 0) {
            error("Empty line, tokenizer broken?");
        }
        fileStack = lines[i].tokens[0].fileStack;

        if (lines[i].indentLevel === 0 && lines[i].tokens[0].text.startsWith("@")) {
            
            //Make a new rule
            astRoot.rules.push(new Rule());
            currentRule = astRoot.rules[astRoot.rules.length-1];

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
                            currentRule[ruleProperties[annotation].prop] = unBackslashString(lines[j].tokens[1].text);
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
                        currentRule.conditions.push(tokensToAst(lines[j].tokens.slice(1)));

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

            currentRule.actions = linesToAst(lines.slice(i, j), true);
            //Skip to the end of the rule
            i += j-i;

        } else {
            error("Parser broken: expected an annotation, but got '"+lines[i].tokens[0].text+"'");
        }
    }

    console.log(astRoot);


}

        
function linesToAst(lines, isInRule) {

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
            var funcName = "_"+lines[i].tokens[0].text;
            var lineMembers = splitTokens(lines[i].tokens, ":", true);
            if (lineMembers.length === 1) {
                error("Expected a ':' at the end of the line");
            }
            console.log(lineMembers);
            var instruction = new Ast(funcName);
    
            if (funcName !== "_else" && funcName !== "_do") {
                instruction.args = [tokensToAst(lineMembers[0].slice(1))];
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

            if (funcName === "_do") {
                //There should be a "while" matching the "do"
                if (j < lines.length-1 && lines[j+1].tokens[0].text === "while") {
                    instruction.args = tokensToAst(lines[j+1].tokens.slice(1));
                    j++;
                } else {
                    error("Found 'do', but no matching 'while'");
                }
            }

            i += j-i-1;
            instruction.children = linesToAst(childrenLines, isInRule);
            instruction.comment = currentComment;
            result.push(instruction);
    
        } else {
            if (!isInRule) {
                error("Found code outside a rule");
            }
            var currentLineAst = tokensToAst(lines[i].tokens);
            currentLineAst.comment = currentComment;
            result.push(currentLineAst);
        }
    }
    
    console.log(result);
    return result;
}

function tokensToAst(content) {
    return new Ast("owo");
}
