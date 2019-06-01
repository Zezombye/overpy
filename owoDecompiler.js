"use strict";
//Overwatch WOrkshop - Decompiler for workshop files

var input = hugeMfString;
var teststr = "3*(4*(')'))+(4*5)";


//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule.
var decompilerGotos = []

//Global variable used for the number of tabs.
//Is reset at each rule.
var nbTabs = 0;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule.
var lastLoop = -1;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error.
var currentArrayElementNames = [];

console.log(decompileAllRules(input));

function decompileAllRules(content) {

	var bracketPos = [-1].concat(getBracketPositions(content));
	
	//A rule looks like this:
	//rule(title) {...}
	//Therefore, each rule ends every 4th bracket position
	
	var result = "";
	
	console.log(bracketPos.length);
	console.log(bracketPos);
	for (var i = 0; i < bracketPos.length-1; i += 4) {
		console.log(i);
		result += decompileRule(content.substring(bracketPos[i]+1, bracketPos[i+4]+1));
	}
	
	return result;
	
}

function decompileRule(content) {
	
	//Reset rule-specific global variables
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	
	//Check for potential error
	if (currentArrayElementNames.length != 0) {
		error("Current array element names weren't cleared");
	}
	
	var bracketPos = getBracketPositions(content);
	if (bracketPos.length != 4) {
		error("Invalid rule (mismatched brackets): has "+bracketPos.length+" top-level brackets, should be 4");
	}
	
	var ruleName = content.substring(bracketPos[0]+1, bracketPos[1]);
	
	debug("Decompiling rule "+ruleName);
	
	var result = "\n\n@Rule "+ruleName+"\n";
	
	var ruleContent = content.substring(bracketPos[2]+1, bracketPos[3]);
	
	var bracketPos2 = getBracketPositions(ruleContent);
	//console.log(ruleContent);
	
	if (topy(ruleContent.substring(0, bracketPos2[0]), eventKw) !== "@Event") {
		error("Rule "+ruleName+" has no 'event' field");
	}
	
	//First pair is event
	var eventContent = ruleContent.substring(bracketPos2[0]+1, bracketPos2[1]);
	var eventInst = splitInstructions(eventContent);
	
	result += "@Event "+topy(eventInst[0], eventKw)+"\n";
	if (eventInst.length > 1) {
		//There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
		if (topy(eventInst[1], eventKw) !== "all") {
			result += "@Team "+topy(eventInst[1], eventKw)+"\n";
		}
		
		//Parse the 3rd event instruction
		//Detect if it is a slot or hero
		var eventInst3 = topy(eventInst[2], eventKw.concat(heroKw))
		if (eventInst3 !== "all") {
			if (eventInst3.startsWith("slot")) {
				result += "@Slot "+eventInst3.replace("slot", "")+"\n";
			} else {
				//We assume it is a hero
				result += "@Hero "+eventInst3 + "\n";
			}
		}
	}
	
	var actions = [];
	var hasConditions = false;
	
	if (bracketPos2.length == 6) {
		//There is a "condition" field; parse it
		hasConditions = true;
		actions = splitInstructions(ruleContent.substring(bracketPos2[4]+1, bracketPos2[5]));
		var conditions = splitInstructions(ruleContent.substring(bracketPos2[2]+1, bracketPos2[3]));
		
		result += "if ";
		var condStrs = [];
		for (var i = 0; i < conditions.length; i++) {
			
			var currentCond = decompileRuleCondition(conditions[i]);
			//Check for and-ing with true
			if (currentCond === "true") {
				continue;
			}
			condStrs.push(currentCond);
		}
		
		//This happens if everything is true
		if (condStrs === []) {
			condStrs.push("true");
		}
		result += "(" + condStrs.join(") and (")+")";
		
		result += ":\n"
		
	} else {
		//No condition field
		hasConditions = false;
		actions = splitInstructions(ruleContent.substring(bracketPos2[2]+1, bracketPos2[3]));
	}
	
	if (hasConditions) {
		nbTabs = 1;
	}
	
	//Detect the last loop to know where to place the "until"
	for (var i = 0; i < actions.length; i++) {
		if (topy(getName(actions[i]), actionKw).startsWith("_loop")) {
			//It is a loop; update the loop position
			lastLoop = i;
		}
	}
	
	//If a loop was detected, add the "do:" and increment the indentation level.
	if (lastLoop >= 0) {
		result += tabLevel(nbTabs)+"do:\n";
		nbTabs++;
	}
		
	for (var i = 0; i < actions.length; i++) {
		if (i == lastLoop) {
			nbTabs--;
		}
		result += tabLevel(nbTabs) + decompileAction(actions[i], i) + "\n";
	}
	
	//Add the remaining gotos (caused eg. by a skip 50 in a rule with 10 actions).
	for (var i = 0; i < decompilerGotos.length; i++) {
		if (decompilerGotos[i] > 0) {
			result += tabLevel(nbTabs)+"lbl_"+i+":\n";
		}
	}
	
	return result;
	
}

function decompileAction(content, actionNb) {
	
	var result = "";
	
	//Decrement each goto (for skips)
	for (var i = 0; i < decompilerGotos.length; i++) {
		decompilerGotos[i]--;
		//Check if the goto has reached its destination
		if (decompilerGotos[i] == 0) {
			result += "lbl_"+i+":\n"+tabLevel(nbTabs);
		}
	}
	
	if (actionNb == lastLoop) {
		result += decompile(content, actionKw, 0, true);
	} else {
		
		result += decompile(content, actionKw, 0, false);
	}
	return result;
}

//This function only decompiles conditions that are in the "condition" section of a rule.
//This is needed to handle the binary operators.
function decompileRuleCondition(content) {
	
	debug("Decompiling condition '"+content+"'");
	
	var operators = ["==", "!=", "<=", ">=", "<", ">"];
	
	for (var i = 0; i < operators.length; i++) {
		var operands = splitStrOnDelimiter(content, operators[i]);
		if (operands.length == 2) {
			return decompileCondition(operands[0], operators[i], operands[1]);
		}
	}
	
	error("Could not decompile condition "+content);
	
}

//Decompiles conditions (whether rule conditions or compare() conditions).
//Used to optimise some stuff (eg: condition==true -> condition, condition==false -> not condition).

function decompileCondition(operand1, operator, operand2) {
	var result = "";
	var isOneOperandFalse = false;
	var operands = [operand1, operand2];
	operator = operator.trim();
	for (var i = 0; i < operands.length; i++) {
		operands[i] = decompile(operands[i]);
		if (operator == "==") {
			//condition == true check
			if (operands[i] === "true") {
				operands[i] = "";
			} else if (operands[i] === "false") {
				operands[i] = "";
				isOneOperandFalse = true;
			}
		}
	}
	
	result += operands[0];
	if (operands[0] !== "" && operands[1] !== "") {
		result += " "+operator+" ";
	}
	result += operands[1];
	
	//Can happen in case of "true == true".
	if (result === "") {
		result = "true";
	}
	if (isOneOperandFalse) {
		result = "not ("+result+")";
	}
	
	return result;
}

//Main parser function for workshop -> overpy.
function decompile(content, keywordArray=valueKw, strDepth=0, isLastLoop=false) {
	
	if (keywordArray === undefined) {
		error("KeywordArray is undefined");
	} else if (content === undefined) {
		error("Content is undefined");
	}
	
	debug("Decompiling '"+content+"'");
	var bracketPos = getBracketPositions(content);
	
	
	var hasArgs = false
	if (bracketPos.length == 2) {
		hasArgs = true;
	} else if (bracketPos.length != 0) {
		error("Mismatched top-level brackets in action "+content+": expected 0 or 2, found "+bracketPos.length)
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
	name = topy(name.toLowerCase().replace(/\s/g, ""), keywordArray);
	
	var args = [];
	if (hasArgs) {
		var args = getArgs(content.substring(bracketPos[0]+1, bracketPos[1]));
	}
	debug("Arguments: "+args);
	var result = "";
	
	//Handle special functions that can't be directly translated
	//Special functions are sorted alphabetically.
	
	//Player functions can't be translated, but most of them are generic.
	//They begin by "_&".
	
	if (name.startsWith("_&")) {
		return decompileGenericPlayerFunction(name.substring(2), args);
	}
	
	//Abort if
	if (name === "_abortIf") {
		result = "if " + decompile(args[0]) + ":\n";	
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Add
	if (name === "_add") {
		//Because we cannot know the precedence of the subsequent operators, we must put parentheses.
		//Eg: Add(Compare(A, B), C) would else output "A == B + C" which wouldn't be parsed as "(A==B)+C".
		return "("+decompile(args[0])+") + ("+decompile(args[1])+")";
	}
	
	//And
	if (name === "_and") {
		return "("+decompile(args[0])+") and ("+decompile(args[1])+")";
	}
	
	//Array contains
	if (name === "_arrayContains") {
		return decompile(args[1])+" in "+decompile(args[0]);
	}
	
	//Array slice
	if (name === "_arraySlice") {
		return decompile(args[0]) + ".slice(" + decompile(args[1]) + ", " + decompile(args[2])+")";
	}
		
	//Compare
	if (name === "_compare") {
		return "("+decompile(args[0]) + ") " + args[1].trim() + " (" + decompile(args[2])+")";
	}
	
	//Current array element
	if (name === "_currentArrayElement") {
		var currentArrayElementName = currentArrayElementNames[currentArrayElementNames.length-1];
		if (currentArrayElementName === undefined) {
			error("currentArrayElementName is undefined");
		}
		return currentArrayElementName;
	}
	
	//Divide
	if (name === "_divide") {
		return "("+decompile(args[0])+") / ("+decompile(args[1])+")";
	}
	
	//Empty array
	if (name === "_emptyArray") {
		return "[]";
	}
	
	//Filtered array
	if (name === "_filteredArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "["+varName+" for "+varName+" in "+decompile(args[0])+" if "+decompile(args[1])+"]";
		currentArrayElementNames.pop();
		return result;
	}
	
	//Get global variable
	if (name === "_globalVar") {
		return decompile(args[0]);
	}
		
	//Hero
	if (name === "_hero") {
		return decompile(args[0], heroKw);
	}
	
	//Last of
	if (name === "_lastOf") {
		return decompile(args[0])+"[-1]";
	}
			
	//Loop
	if (name === "_loop") {
		if (isLastLoop) {
			return "until true";
		} else {
			return "continue";
		}
	}
	
	//Loop if
	if (name === "_loopIf") {
		if (isLastLoop) {
			return "until "+decompile(args[0]);
		} else {
			var result = "if "+decompile(args[0])+":\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Modify global var
	if (name === "_modifyGlobalVar") {
		return decompileModifyVar(decompile(args[0]), args[1], decompile(args[2]));
	}
	
	//Modify player var
	if (name === "_modifyPlayerVar") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+decompile(args[1]), args[2], decompile(args[3]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Multiply
	if (name === "_multiply") {
		return "("+decompile(args[0])+") * ("+decompile(args[1])+")";
	}
	
	//Or
	if (name === "_or") {
		return "("+decompile(args[0])+") or ("+decompile(args[1])+")";
	}
	
	//Get player variable
	if (name === "_playerVar") {
		if (isSinglePlayerInstruction(args[0])) {
			return decompile(args[0])+"."+decompile(args[1]);
		} else {
			return "[player."+decompile(args[1])+" for player in "+decompile(args[0])+"]";
		}
	}
	
	
	
	//Set global var
	if (name === "_setGlobalVar") {
		return decompile(args[0])+" = "+decompile(args[1]);
	}
	
	//Set player var
	if (name === "_setPlayerVar") {
		return decompilePlayerFunction("{player}.{args} = {value}", args[0], [args[1]], args[2]);
	}
					
	//Subtract
	if (name === "_subtract") {
		return "("+decompile(args[0])+") - ("+decompile(args[1])+")";
	}
	
	//Skip
	if (name === "_skip") {
		//Check if the number of skips is hardcoded
		if (!isNaN(args[0].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[0])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[0]);
		}
		
		return "goto "+gotoStr;
	}
	
	//Skip if
	if (name === "_skipIf") {
		result = "if " + decompile(args[0]) + ":\n";
		
		//Check if the number of skips is hardcoded
		if (!isNaN(args[1].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[1])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[1]);
		}
		
		result += tabLevel(nbTabs+1) + "goto "+gotoStr;
		
		return result;
	}
	
	//Filtered array
	if (name === "_sortedArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "sorted("+decompile(args[0]);
		//If key == current array element, do not include it
		if (topy(getName(args[1]).trim(), valueKw) !== "_currentArrayElement") {
			result += ", key=lambda "+varName+": "+decompile(args[1]);
		}
		result += ")";
		currentArrayElementNames.pop();
		return result;
	}
	
	//String
	if (name === "_string") {
				
		var [str, format] = decompileString(args[0], args[1], args[2], args[3], strDepth);
				
		if (strDepth != 0) {
			return [str, format];
		}
		
		result = '"'+str+'"';
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return result;
	}
			
	//Value in array
	if (name === "_valueInArray") {
		return decompile(args[0])+"["+decompile(args[1])+"]";
	}
	
	//X/Y/Z component of
	if (name === "_xComponentOf") {
		return decompile(args[0])+".x";
	}
	if (name === "_yComponentOf") {
		return decompile(args[0])+".y";
	}
	if (name === "_zComponentOf") {
		return decompile(args[0])+".z";
	}
	
	if (name.startsWith('_')) {
		error("Unhandled special function "+name);
	}
	
	
	//Default case (not a special function).
	result = name;
	if (args.length > 0) {
		result += "("
		for (var i = 0; i < args.length; i++) {
			result += decompile(args[i]);
			if (i < args.length-1) {
				result += ", ";
			}
		}
		result += ")";
	}
	
	return result;
	
}

function decompileString(content, arg1, arg2, arg3, strDepth) {
		
	var result = content;
	var format = [];
	var args = [arg1, arg2, arg3];
	
	for (var i = 0; i < args.length; i++) {
		
		//Check if the string result must be put in the format array
		var isInFormat = true;
		
		var decompiledArg = decompile(args[i], valueKw, 1);
		
		//Skip nulls
		if (decompiledArg === "null") {
			continue;
		}
		
		//If the decompile function returned an array instead of a string, the argument is a string
		if (decompiledArg.constructor === Array) {
			isInFormat = false;
			format = format.concat(decompiledArg[1]);
			
		//Else, check if the argument is a number
		} else if (!isNaN(decompiledArg[0])) {
			isInFormat = false;
			
		//Else, check if the argument is in the list of string keywords
		} else if (stringKw.indexOf(decompiledArg[0]) > -1) {
			isInFormat = false;
		}
		
		if (isInFormat) {
			format = format.concat(decompiledArg);
			result = result.replace("\{"+i+"\}", "{}");
		} else {
			//Remove the "Hero." prefix for heroes
			if (decompiledArg[0].startsWith("Hero.")) {
				decompiledArg[0] = decompiledArg[0].replace("Hero.","").toLowerCase();
				decompiledArg[0] = decompiledArg[0][0].toUpperCase() + decompiledArg[0].substring(1);
			}
			result = result.replace("\{"+i+"\}", decompiledArg[0]);
		}
	}
		
	//Remove additional quotes
	if (result.startsWith('"') && result.endsWith('"')) {
		result = result.substring(1, result.length-1);
	}
	debug("Format = "+format+", arg = "+decompiledArg);
	return [result, format];
	
}

//Function for the player functions, eg set projectile speed, has status, etc.
//There were so many of them, it was polluting the special functions table.
function decompileGenericPlayerFunction(name, args) {
	return decompilePlayerFunction("{player}."+name+"({args})", args[0], args.slice(1));
}

//Automatically generates a for loop for player function, if that player function takes an array as argument.
//The content is a python translation and must contain {player} and {args} to replace strings by the args.
function decompilePlayerFunction(content, player, args, value=undefined) {
	
	if (isSinglePlayerInstruction(player)) {
		var result = content.replace("\{player\}", decompile(player))
		
	} else {
		var result = "for player in "+decompile(player)+":\n";
		result += tabLevel(nbTabs+1)+content.replace("\{player\}", "player")
	}
	
	//Parse arguments
	var argsStr = "";
	for (var i = 0; i < args.length; i++) {
		argsStr += decompile(args[i]);
		if (i < args.length-1) {
			argsStr += ", ";
		}
	}
	result = result.replace("\{args\}", argsStr)
	if (value !== undefined) {
		result = result.replace("\{value\}", decompile(value))
	}
	
	return result;
}

//Function used for "modify player variable" and "modify global variable".
//Note: arguments passed to this function must already be decompiled.
function decompileModifyVar(variable, operation, value) {
	operation = topy(operation, valueKw);
	if (operation === "_appendToArray") {
		return variable+".append("+value+")";
	} else if (operation === "_add") {
		//Handle special "++" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"++";
		} else {
			return variable+" += "+value;
		}
	} else {
		error("Unhandled operation "+operation);
	}
}


