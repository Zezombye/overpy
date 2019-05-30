"use strict";
//Overwatch WOrkshop - Decompiler for workshop files

var input = hugeMfString;
var teststr = "3*(4*(')'))+(4*5)";

console.log(decompileAllRules(input));

function decompileAllRules(content) {

	var bracketPos = [-1].concat(getBracketPositions(content));
	
	//A rule looks like this:
	//rule(title) {...}
	//Therefore, each rule ends every 4th bracket position
	
	var result = "";
	
	//for (var i = 0; i < bracketPos.length; i += 4) { //debug: only decompile first 2 rules
	for (var i = 48; i < 52; i += 4) {
		
		result += decompileRule(content.substring(bracketPos[i]+1, bracketPos[i+4]+1));
	}
	
	return result;
	
}

function decompileRule(content) {
	
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
		//TODO
		error("todo: 2nd and 3rd events");
	}
	
	var actions = [];
	var hasConditions = false;
	
	if (bracketPos2.length == 6) {
		//There is a "condition" field; parse it
		hasConditions = true;
		actions = splitInstructions(ruleContent.substring(bracketPos2[4]+1, bracketPos2[5]));
		var conditions = splitInstructions(ruleContent.substring(bracketPos2[2]+1, bracketPos2[3]));
		
		result += "if ";
		for (var i = 0; i < conditions.length; i++) {
			result += '(' + decompileCondition(conditions[i]) + ')';
			if (i < conditions.length -1) {
				result += " and ";
			}
		}
		
		result += ":\n"
		
	} else {
		//No condition field
		hasConditions = false;
		actions = splitInstructions(ruleContent.substring(bracketPos2[2]+1, bracketPos2[3]));
	}
	
	var nbTabs = 0;
	if (hasConditions) {
		nbTabs = 1;
	}
		
	for (var i = 0; i < actions.length; i++) {
		result += tabLevel(nbTabs) + decompileAction(actions[i]) + "\n";
	}
	
	return result;
	
}

function decompileAction(content) {
	return decompile(content, actionKw);
}

//This function only decompiles conditions that are in the "condition" section of a rule.
//This is needed to handle the binary operators.
function decompileCondition(content) {
	
	debug("Decompiling condition '"+content+"'");
	
	var operators = ["==", "!=", "<=", ">=", "<", ">"];
	
	for (var i = 0; i < operators.length; i++) {
		var operands = splitStrOnDelimiter(content, operators[i]);
		if (operands.length == 2) {
			return decompile(operands[0]) + " "+operators[i]+" "+decompile(operands[1]);
		}
	}
	
	error("Could not decompile condition "+content);
	
}

//Main parser function for workshop -> overpy.
function decompile(content, keywordArray = valueKw, strDepth = 0) {
	
	if (keywordArray == undefined) {
		error("KeywordArray is undefined");
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
	
	//Empty array: []
	if (name === "_emptyArray") {
		return "[]";
	}
	
	//Get global var: just plain global var
	if (name === "_globalVar") {
		return decompile(args[0]);
	}
	
	//Hero: just remove hero
	if (name === "_hero") {
		return decompile(args[0], heroKw);
	}
	
	//Modify global var: depends on the operation
	if (name === "_modifyGlobalVar") {
		var operation = topy(args[1], valueKw);
		if (operation === "_appendToArray") {
			return decompile(args[0])+".append("+decompile(args[2])+")";
		}
	}
	
	//Set global var: assignment
	if (name === "_setGlobalVar") {
		return decompile(args[0])+" = "+decompile(args[1]);
	}
	
	//String
	if (name === "_string") {
		var [str, format] = decompileString(args[0], args[1], args[2], args[3], strDepth);
		
		if (strDepth != 0) {
			return [str, format];
		}
		
		result = '"'+str+'"';
		if (format.length > 0) {
			console.log("format = "+format);
			result += '.format(' + format.join(", ") + ")";
		}
		return result;
	}
	
	//X/Y/Z component of (vector): vector.x/y/z
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
		
		var arg = decompile(args[i], valueKw, 1);
		
		//If the decompile function returned an array instead of a string, the argument is a string
		if (arg.constructor === Array) {
			isInFormat = false;
			format = format.concat(arg[1]);
			
		//Else, check if the argument is a number
		} else if (!isNaN(arg)) {
			isInFormat = false;
			
		//Else, check if the argument is in the list of string keywords
		} else if (stringKw.indexOf(arg) > -1) {
			isInFormat = false;
		}
		
		if (isInFormat) {
			result = result.replace("\{"+i+"\}", "{}");
		} else {
			result = result.replace("\{"+i+"\}", arg);
		}
		
		
		
	}
	
	console.log("result = "+result);
	console.log("format = "+format);
	
	//Remove additional quotes
	if (result.startsWith('"') && result.endsWith('"')) {
		result = result.substring(1, result.length-1);
	}
	return [result, format];
	
}


