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

function decompileRuleToAst(content) {
	
	//error("The decompiler currently cannot decompile rules.");

	//Reset rule-specific global variables
	decompilerGotos = [];
	nbTabs = 0;
	
	//Check for potential error
	if (currentArrayElementName !== null && currentArrayIndexName !== null) {
		error("Current array element names weren't cleared");
	}
	
	var bracketPos = getBracketPositions(content);
	if (bracketPos.length != 4) {
		error("Invalid rule (mismatched brackets): has "+bracketPos.length+" top-level brackets, should be 4");
	}

	var ruleAttributes = {};
	
	var ruleName = content.substring(bracketPos[0]+1, bracketPos[1]);
	ruleAttributes.name = unescapeString(ruleName, false);
	
	var currentRuleIsDisabled = false;
	if (content.trim().startsWith(tows("__disabled__", ruleKw))) {
		currentRuleIsDisabled = true;
	}
	
	debug("Decompiling rule "+ruleName);
	
	var ruleContent = content.substring(bracketPos[2]+1, bracketPos[3]);
	
	var bracketPos2 = [-1].concat(getBracketPositions(ruleContent));
	
	var eventInst = [];
 	var conditions = "";
	var actions = "";
	
	for (var i = 0; i < bracketPos2.length-2; i += 2) {
		var fieldName = topy(ruleContent.substring(bracketPos2[i]+1, bracketPos2[i+1]), ruleKw);
		if (fieldName === "__event__") {
			eventInst = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]), false);
		} else if (fieldName === "__conditions__") {
			//conditions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			conditions = "conditions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else if (fieldName === "__actions__") {
			//actions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			actions = "actions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else {
			error("Unknown field name "+fieldName+" in rule "+ruleName);
		}
	}
	
	//Parse events
	if (eventInst.length > 0) {

		var eventName = topy(eventInst[0], eventKw);
		ruleAttributes.event = eventName;

		if (eventName === "__subroutine__") {

			if (eventInst.length !== 2) {
				error("Malformed subroutine event");
			}
			var subroutineName = translateSubroutineToPy(eventInst[1].trim());
			ruleAttributes.subroutineName = subroutineName;

		} else {
			if (eventInst.length > 1) {
				//There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
				if (topy(eventInst[1], eventTeamKw) !== "all") {
					ruleAttributes.eventTeam = topy(eventInst[1], eventTeamKw);
				}

				ruleAttributes.eventPlayer = topy(eventInst[2], eventPlayerKw);
			}
		}
	}
	
	//Parse conditions
	if (conditions !== "") {
		ruleAttributes.conditions = decompileConditions(conditions);
	}
		
	//Parse actions
	if (actions !== "") {
		var astActions = decompileActions(actions);
	} else {
		var astActions = [];
	}

	var astRule = new Ast("__rule__", [], astActions);
	astRule.isDisabled = currentRuleIsDisabled;
	astRule.ruleAttributes = ruleAttributes;
	
	return astRule;
}

function decompileConditions(content) {
	
	var conditions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")), false);
	
	var astConditions = [];
	for (var condition of conditions) {
		
		condition = condition.trim();
		
		var currentConditionComment = null;
		var isCurrentConditionDisabled = false;
		//Check if there is a comment
		if (condition.startsWith('"')) {
			var conditionComment = getPrefixString(condition);
			condition = condition.substring(conditionComment.length).trim();
			currentConditionComment = unescapeString(conditionComment, false);
		}

		//Check if the condition is disabled
		if (condition.startsWith(tows("__disabled__", ruleKw))) {
			isCurrentConditionDisabled = true;
			condition = condition.substring(tows("__disabled__", ruleKw).length).trim();
		}

		var astCondition = decompile(condition);
		astCondition.comment = currentConditionComment;
        astCondition.isDisabled = isCurrentConditionDisabled;
        astConditions.push(astCondition);
		
	}

	
	return astConditions;
}

function decompileActions(content) {
	
	var astActions = [];
	var actions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")), false);
	
	for (var action of actions) {
		astActions.push(decompileAction(action));
	}
	
	return astActions;
}

function decompileAction(content) {
		
	var isCurrentActionDisabled = false;
	var currentActionComment = null;
	content = content.trim();
	
	if (content.startsWith('"')) {
		var actionComment = getPrefixString(content);
		content = content.substring(actionComment.length).trim();
		currentActionComment = unescapeString(actionComment, false);
	}
	if (content.startsWith(tows("__disabled__", ruleKw)+" ")) {
		isCurrentActionDisabled = true;
		content = content.substring((tows("__disabled__", ruleKw)+" ").length);
	}

    var decompiledAction = decompile(content);
    decompiledAction.isDisabled = isCurrentActionDisabled;
    decompiledAction.comment = currentActionComment;

	return decompiledAction;
}


//Main parser function for workshop -> overpy.
function decompile(content) {
	
	if (content === undefined) {
		error("Content is undefined");
	}
    content = content.trim();
    content = content.replace(/[\t\n]/g, " ");
	debug("Decompiling '"+content+"'");

	//Workshop operators, from lowest to highest precedence.
	const wsOperators = [
		["+=","-=","*=","/=","%=","^=","="],
		["?"],
		["||"],
		["&&"],
		["==","!=","<=",">=",">","<"],
		["+","-"],
		["*","/","%"],
        ["^"],
	];

	const binaryOpToFuncMapping = {
		"=": "__assignTo__",
		"||": "__or__",
		"&&": "__and__",
		"==": "__equals__",
		"!=": "__inequals__",
		"<=": "__lessThanOrEquals__",
		">=": "__greaterThanOrEquals__",
		"<": "__lessThan__",
		">": "__greaterThan__",
		"+": "__add__",
		"-": "__subtract__",
		"*": "__multiply__",
		"/": "__divide__",
		"%": "__modulo__",
        "^": "__raiseToPower__",
	}

	const modifyOpToFuncMapping = {
		"+=": "__add__",
		"-=": "__subtract__",
		"*=": "__multiply__",
		"/=": "__divide__",
		"%=": "__modulo__",
		"^=": "__raiseToPower__",
	}

	//Split on operators
	for (var operatorGroup of wsOperators) {
		//The power operator is right to left, so split left to right
		if (operatorGroup.includes("^")) {
			var operatorCheck = getOperatorInStr(content, operatorGroup.map(x => " "+x+" "), true);
		} else {			
			var operatorCheck = getOperatorInStr(content, operatorGroup.map(x => " "+x+" "), false);
		}

		if (operatorCheck.operatorFound !== null) {
			var operator = operatorCheck.operatorFound.trim();
			
			var operands = [content.slice(0, operatorCheck.operatorPosition), content.slice(operatorCheck.operatorPosition + operatorCheck.operatorFound.length)]
			if (operator in binaryOpToFuncMapping) {
				return new Ast(binaryOpToFuncMapping[operator], [decompile(operands[0]), decompile(operands[1])]);

			} else if (operator in modifyOpToFuncMapping) {
				return new Ast("__modifyVar__", [decompile(operands[0]), new Ast(modifyOpToFuncMapping[operator], [], [], "__Operation__"), decompile(operands[1])])

			} else if (operator === "?") {
				var elseOperands = splitStrOnDelimiter(operands[1], ":", false);
				if (elseOperands.length !== 2) {
					error("Found '?', but no ':'");
				}
				return new Ast("__ifThenElse__", [decompile(operands[0]), decompile(elseOperands[0]), decompile(elseOperands[1])]);

			} else {
				error("Unhandled operator '"+operator+"'");
			}
		}
    }

    //Check for "!" operator
    if (content.startsWith("!")) {
        return new Ast("__not__", [decompile(content.substring(1))]);
    }
    
    //Check for array index
    if (content.endsWith("]")) {
        var bracketPos = getBracketPositions(content);
        return new Ast("__valueInArray__", [
            decompile(content.substring(0, bracketPos[bracketPos.length-2])),
            decompile(content.substring(bracketPos[bracketPos.length-2]+1, bracketPos[bracketPos.length-1])),
        ])
    }

    //Check for the "." operator

    var dotOperands = splitStrOnDelimiter(content, ".", false, true);
    if (dotOperands.length === 2) {
		dotOperands = dotOperands.map(x => x.trim());
        if (isNumber(dotOperands[0])) {
			if (dotOperands[0].startsWith("-")) {
				return new Ast("__negate__", [getAstForNumber(Number(content.substring(1)))]);
			} else {
				return getAstForNumber(Number(content));
			}
        }
        if (dotOperands[0] === tows("__global__", valueFuncKw)) {
            return new Ast("__globalVar__", [new Ast(translateVarToPy(dotOperands[1], true), [], [], "GlobalVariable")]);
        } else {
            return new Ast("__playerVar__", [decompile(dotOperands[0]), new Ast(translateVarToPy(dotOperands[1], false), [], [], "PlayerVariable")]);
        }
    }

	var bracketPos = getBracketPositions(content);
	
	
	var hasArgs = false
	if (bracketPos.length == 2) {
		hasArgs = true;
	} else if (bracketPos.length != 0) {
		error("Mismatched top-level brackets in action "+content+": expected 0 or 2, found "+bracketPos.length)
	}

	//Check if the whole string is in parentheses
	if (bracketPos.length === 2 && bracketPos[0] === 0 && bracketPos[1] === content.length-1) {
		return decompile(content.substring(1, content.length-1));
	}
	
	//Check if there are empty parentheses
	if (bracketPos.length == 2 && content.substring(bracketPos[0]+1, bracketPos[1]).trim().length == 0) {
		hasArgs = false;
		content = content.substring(0, bracketPos[0]);
	}
		
	var name = "";
	if (bracketPos.length == 2) {
		name = content.substring(0, bracketPos[0]);
	} else {
		name = content;
    }
    
    //Check for string literals
    if (name.startsWith('"')) {
		if (name.includes("W_e_l_c_o_m_e_ _t_o_ _L_o_o_t_ _Q_u_e_s_t_!".replace(/_/g, ""))) {
			error("C_a_n_n_o_t_ _d_e_c_o_m_p_i_l_e_ _t_h_i_s_ _g_a_m_e_m_o_d_e_".replace(/_/g, ""));
		}
        return new Ast(unescapeString(name, false), [], [], "StringLiteral");
    }
    
    //Check for numbers
    if (isNumber(name)) {
		if (name.startsWith("-")) {
			return new Ast("__negate__", [getAstForNumber(Number(name.substring(1)))]);
		} else {
			return getAstForNumber(Number(name));
		}
    }
    try {
        name = topy(name.toLowerCase().replace(/\s/g, ""), wsFuncKw);
    } catch (e) {
        //Is it a constant instead of a function?
        name = topy(name.toLowerCase().replace(/\s/g, ""), constantKw);
        var type = name.substring(0, name.indexOf("."));
        var elem = name.substring(name.indexOf(".")+1);
        return new Ast(elem, [], [], type);
    }

	var hasNoArgs = false;
	if (name.endsWith("()")) {
		hasNoArgs = true;
		name = name.substring(0, name.length-2);
	}
	
	var args = [];
	if (hasArgs) {
        var args = getArgs(content.substring(bracketPos[0]+1, bracketPos[1]), false);
        
	}
    debug("Arguments: "+args);

    //Special functions

	if (name === "__modifyGlobalVariable__") {
		return new Ast("__modifyVar__", [
            new Ast("__globalVar__", [new Ast(translateVarToPy(args[0], true), [], [], "GlobalVariable")]),
            new Ast(topy(args[1], constantValues["__Operation__"]), [], [], "__Operation__"),
            decompile(args[2]),
        ]);
	}
	if (name === "__modifyGlobalVariableAtIndex__") {
		return new Ast("__modifyVar__", [
            new Ast("__valueInArray__", [
				new Ast("__globalVar__", [new Ast(translateVarToPy(args[0], true), [], [], "GlobalVariable")]),
                decompile(args[1]),
            ]),
            new Ast(topy(args[2], constantValues["__Operation__"]), [], [], "__Operation__"),
            decompile(args[3]),
        ]);
	}
	if (name === "__modifyPlayerVariable__") {
		return new Ast("__modifyVar__", [
            new Ast("__playerVar__", [
                decompile(args[0]),
                new Ast(translateVarToPy(args[1], false), [], [], "PlayerVariable"),
            ]),
            new Ast(topy(args[2], constantValues["__Operation__"]), [], [], "__Operation__"),
            decompile(args[3]),
        ]);
	}
	if (name === "__modifyPlayerVariableAtIndex__") {
		return new Ast("__modifyVar__", [
            new Ast("__valueInArray__", [
                new Ast("__playerVar__", [
                    decompile(args[0]),
					new Ast(translateVarToPy(args[1], false), [], [], "PlayerVariable"),
                ]),
                decompile(args[2])
            ]),
            new Ast(topy(args[3], constantValues["__Operation__"]), [], [], "__Operation__"),
            decompile(args[4]),
        ]);
	}
	if (name === "__compare__") {
		var funcToOpMapping = {
			"==": "__equals__",
			"!=": "__inequals__",
			"<=": "__lessThanOrEquals__",
			">=": "__greaterThanOrEquals__",
			"<": "__lessThan__",
			">": "__greaterThan__",
		}
		if (!(args[1] in funcToOpMapping)) {
			error("Unknown operator '"+args[1]+"'");
		}
		return new Ast(funcToOpMapping[args[1]], [decompile(args[0]), decompile(args[2])]);
	}
	if (name === "__forGlobalVariable__") {
		return new Ast("__for__", [
			new Ast("__globalVar__", [new Ast(translateVarToPy(args[0], true), [], [], "GlobalVariable")]),
			decompile(args[1]),
			decompile(args[2]),
			decompile(args[3]),
		])
	}
	if (name === "__forPlayerVariable__") {
		return new Ast("__for__", [
			new Ast("__playerVar__", [
				decompile(args[0]),
                new Ast(translateVarToPy(args[1], false), [], [], "PlayerVariable"),
			]),
			decompile(args[2]),
			decompile(args[3]),
			decompile(args[4]),
		])
	}
    if (name === "__round__") {
        return new Ast("__round__", [decompile(args[0]), new Ast(topy(args[1], constantValues.__Rounding__), [], [], "__Rounding__")]);
    }
    if (name === "__localizedString__" && args.length === 0) {
        return new Ast("STRING", [], [], "HudReeval");
	}
	if (name === "_&startForcingOutlineFor" && args.length === 4) {
		args.push("DEFAULT");
	}
	if (name === "__workshopSettingToggle__" && args.length === 3) {
		args.push("0");
	}
	if (name === "__workshopSettingInteger__" && args.length === 5) {
		args.push("0");
	}
	if (name === "__workshopSettingReal__" && args.length === 5) {
		args.push("0");
	}
	
	if (!(name in wsFuncKw)) {
		error("Function '"+name+"' is not in the function list");
	}
	if (wsFuncKw[name].args === null) {
		if (args.length !== 0) {
			error("Function '"+name+"' has "+args.length+"args, expected 0");
		}
	} else {
		if (name === "__localizedString__" || name === "__customString__") {
			if (args.length < 1) {
				error("Function '"+name+"' has "+args.length+"args, expected at least 1");
			}
		} else if (name !== "__array__") {
			if (args.length !== wsFuncKw[name].args.length) {
				error("Function '"+name+"' has "+args.length+"args, expected "+funcKw[name].args.length);
			}
		}
	}
	var astArgs = [];
	for (var i = 0; i < args.length; i++) {
		//console.log(i);
		if (name !== "__array__") {
			//console.log(wsFuncKw[name].args[i].type);

			if (wsFuncKw[name].args[i].type in constantValues) {
				astArgs.push(new Ast(topy(args[i], constantValues[wsFuncKw[name].args[i].type]), [], [], wsFuncKw[name].args[i].type));
			} else if (wsFuncKw[name].args[i].type === "GlobalVariable") {
				astArgs.push(new Ast(translateVarToPy(args[i], true), [], [], "GlobalVariable"));
			} else if (wsFuncKw[name].args[i].type === "PlayerVariable") {
				astArgs.push(new Ast(translateVarToPy(args[i], false), [], [], "PlayerVariable"));
			} else if (wsFuncKw[name].args[i].type === "Subroutine") {
				astArgs.push(new Ast(translateSubroutineToPy(args[i]), [], [], "Subroutine"));
			} else {
				astArgs.push(decompile(args[i]));
			}
		} else {
			astArgs.push(decompile(args[i]));
		}
	}
	

	return new Ast(name, astArgs);
		
}

