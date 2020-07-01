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

function astRulesToWs(rules) {

    var compiledRules = [];

    for (var rule of rules) {
        var result = "";

        if (rule.name === "pass") {
            continue;
        }

        if (rule.ruleAttributes.isDisabled) {
            result += tows("__disabled__", ruleKw)+" ";
        }

        result += tows("__rule__", ruleKw)+" (";
        if (obfuscationSettings.obfuscateNames) {
            result += '""';
        } else {
            result += escapeString(rule.ruleAttributes.name);
        }
        result += ") {\n";

        //Rule event
        result += tabLevel(1)+tows("__event__", ruleKw)+" {\n";
        result += tabLevel(2)+tows(rule.ruleAttributes.event, eventKw)+";\n";
        if (rule.ruleAttributes.eventTeam) {
            result += tabLevel(2)+tows(rule.ruleAttributes.eventTeam, eventTeamKw)+";\n";
        }
        if (rule.ruleAttributes.eventPlayer) {
            result += tabLevel(2)+tows(rule.ruleAttributes.eventPlayer, eventPlayerKw)+";\n";
        }
        if (rule.ruleAttributes.subroutineName) {
            result += tabLevel(2)+translateSubroutineToWs(rule.ruleAttributes.subroutineName)+";\n";
        }
        result += tabLevel(1)+"}\n";

        //Rule conditions
        if (rule.ruleAttributes.conditions !== undefined && rule.ruleAttributes.conditions.length > 0) {
            result += tabLevel(1)+tows("__conditions__", ruleKw)+" {\n";
            for (var condition of rule.ruleAttributes.conditions) {
                result += astRuleConditionToWs(condition);
            }
            result += tabLevel(1)+"}\n";
        }

        //Rule actions
        if (rule.children.length > 0) {
            result += tabLevel(1)+tows("__actions__", ruleKw)+" {\n";
            for (var child of rule.children) {
                result += astActionToWs(child, 2);
            }
            result += tabLevel(1)+"}\n";
        }

        result += "}\n\n";
        compiledRules.push(result);
    }

    
    return compiledRules;

}

function astRuleConditionToWs(condition) {

    var funcToOpMapping = {
        "__equals__": "==",
        "__inequals__": "!=",
        "__lessThanOrEquals__": "<=",
        "__greaterThanOrEquals__": ">=",
        "__lessThan__": "<",
        "__greaterThan__": ">",
    }
    var result = "";
    if (!obfuscationSettings.obfuscateNames && condition.comment) {
        result += tabLevel(2)+escapeString(condition.comment.trim())+"\n";
    }

    if (condition.name in funcToOpMapping) {
        result += tabLevel(2)+astToWs(condition.args[0])+" "+funcToOpMapping[condition.name]+" "+astToWs(condition.args[1])+";\n";

    } else {
        if (condition.name === "__not__") {
            result += tabLevel(2)+astToWs(condition.args[0])+" == "+tows("false", valueFuncKw)+";\n";
            
        } else if (condition.type === "bool") {
            result += tabLevel(2)+astToWs(condition)+" == "+tows("true", valueFuncKw)+";\n";

        } else {
            result += tabLevel(2)+astToWs(condition)+" != "+tows("false", valueFuncKw)+";\n";
        }
    }
    return result;
}

function astActionToWs(action, nbTabs) {

    if (action.type === "Label") {
        return tabLevel(nbTabs)+"//"+action.name+":\n";
    }
    var result = "";
    if (action.name === "pass" && !action.comment) {
        action.comment = "pass";
    }
    if (!obfuscationSettings.obfuscateNames && action.comment) {
        result += tabLevel(nbTabs)+escapeString(action.comment.trim())+"\n";
    }
    result += tabLevel(nbTabs)+astToWs(action)+";\n"
    for (var child of action.children) {
        result += astActionToWs(child, nbTabs+1);
    }
    return result;
}

function astToWs(content) {

    var equalityFuncToOpMapping = {
        "__equals__": "==",
        "__inequals__": "!=",
        "__lessThanOrEquals__": "<=",
        "__greaterThanOrEquals__": ">=",
        "__lessThan__": "<",
        "__greaterThan__": ">",
    }

    fileStack = content.fileStack;

    if (content.type === "GlobalVariable") {
        return translateVarToWs(content.name, true);

    } else if (content.type === "PlayerVariable") {
        return translateVarToWs(content.name, false);

    } else if (content.type === "Subroutine") {
        return translateSubroutineToWs(content.name);

    } else if (["StringLiteral","FullwidthStringLiteral", "BigLettersStringLiteral"].includes(content.type)) {
        return escapeString(content.name);

    } else if (content.type === "LocalizedStringLiteral") {
        return escapeString(tows(content.name, stringKw));
    }

    if (content.name === "__valueInArray__" && enableOptimization && content.args[1].name === "__number__" && content.args[1].args[0].numValue === 0) {
        content = new Ast("__firstOf__", [content.args[0]]);
    }
    
    if (content.name in equalityFuncToOpMapping) {
        //Convert functions such as __equals__(1,2) to __compare__(1, ==, 2).
        content.args.splice(1, 0, new Ast(equalityFuncToOpMapping[content.name], [], [], "__Operator__"));
        content.name = "__compare__";

    } else if (content.name === "__assignTo__" || content.name === "__modifyVar__") {
        var newName = content.name === "__assignTo__" ? "__set" : "__modify";
        if (content.args[0].name === "__globalVar__") {
            //A = 3 -> __setGlobalVariable__(A, 3)
            newName += "GlobalVariable__";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            //eventPlayer.A = 3 -> __setPlayerVariable__(eventPlayer, A, 3)
            newName += "PlayerVariable__";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__valueInArray__") {
            if (content.args[0].args[0].name === "__globalVar__") {
                //A[0] = 3 -> __setGlobalVariableAtIndex__(A, 0, 3)
                newName += "GlobalVariableAtIndex__";
                content.args = [content.args[0].args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

            } else if (content.args[0].args[0].name === "__playerVar__") {
                //eventPlayer.A[0] = 3 -> __setPlayerVariableAtIndex__(eventPlayer, A, 0, 3)
                newName += "PlayerVariableAtIndex__";
                content.args = [content.args[0].args[0].args[0], content.args[0].args[0].args[1], content.args[0].args[1]].concat(content.args.slice(1));

            } else {
                error("Cannot modify or assign to "+functionNameToString(content.args[0].args[0]))
            }
        } else {
            error("Cannot modify or assign to "+functionNameToString(content.args[0]))
        }
        content.name = newName;

    } else if (content.name === "__chaseAtRate__" || content.name === "__chaseOverTime__") {
        var newName = content.name === "__chaseAtRate__" ? "AtRate__" : "OverTime__";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable"+newName;
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable"+newName;
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else {
            error("Expected a variable for 1st argument of "+functionNameToString(content)+", but got "+functionNameToString(content.args[0]));
        }
        newName = "__chase"+newName;
        content.name = newName;

    } else if (["__getHitPosition__", "__getPlayerHit__", "__getNormal__"].includes(content.name)) {
        if (content.args[0].name !== "raycast") {
            error("Cannot use "+functionNameToString(content)+" with "+functionNameToString(content.args[0]));
        }
        content.args = content.args[0].args;
        content.name = {
            "__getHitPosition__": "__raycastHitPosition__",
            "__getPlayerHit__": "__raycastHitPlayer__",
            "__getNormal__": "__raycastHitNormal__",
        }[content.name];

    } else if (content.name === "__for__") {

        var newName = "";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else {
            error("Expected a variable for 1st argument of "+functionNameToString(content)+", but got "+functionNameToString(content.args[0]));
        }
        newName = "__for"+newName+"__";
        content.name = newName;

    } else if (content.name === "__negate__") {
        content.name = "__multiply__";
        content.args = [getAstForMinus1(), content.args[0]];

    } else if (content.name === "__number__") {
        return trimNb(content.args[0].name);

    } else if (content.name === "__team__") {
        content.name = content.args[0].name;
        content.args = [];
        content.type = "TeamLiteral";

    } else if (content.name === "ceil") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundUp__", [], [], "__Rounding__")];

    } else if (content.name === "getSign") {
        //getSign(x) -> (x>0)-(x<0)
        content.name = "__subtract__";
        content.args = [
            new Ast("__greaterThan__", [content.args[0], getAstFor0()]),
            new Ast("__lessThan__", [content.args[0], getAstFor0()]),
        ];
    } else if (content.name === "floor") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundDown__", [], [], "__Rounding__")];

    } else if (content.name === "getAllPlayers") {
        content.name = "getPlayers";
        content.args = [getAstForTeamAll()];

    } else if (["hudHeader", "hudSubheader", "hudSubtext"].includes(content.name)) {
      
		if (content.name === "hudHeader") {
			content.args.splice(2, 0, getAstForNull());
			content.args.splice(3, 0, getAstForNull());
			content.args.splice(7, 0, getAstForColorWhite());
			content.args.splice(8, 0, getAstForColorWhite());
		} else if (content.name === "hudSubheader") {
			content.args.splice(1, 0, getAstForNull());
			content.args.splice(3, 0, getAstForNull());
			content.args.splice(6, 0, getAstForColorWhite());
			content.args.splice(8, 0, getAstForColorWhite());
		} else {
			content.args.splice(1, 0, getAstForNull());
			content.args.splice(2, 0, getAstForNull());
			content.args.splice(6, 0, getAstForColorWhite());
			content.args.splice(7, 0, getAstForColorWhite());
		}
        content.name = "__hudText__";
        
    } else if (content.name === "hudText") {
        content.name = "__hudText__";

    } else if (content.name === "pass") {
        content.name = "return";
        content.isDisabled = true;

    } else if (content.name === "round") {
        content.name = "__round__";
        content.args = [content.args[0], new Ast("__roundToNearest__", [], [], "__Rounding__")];

    } else if (content.name === "RULE_CONDITION" || content.name === "RULE_START") {
        //If we encounter that keyword here, it means it hasn't been converted to "loop if condition is true" or similar.
        error("Cannot use '"+content.name+"' in that context");

    } else if (content.name === "stopChasingVariable") {
        var newName = "";
        if (content.args[0].name === "__globalVar__") {
            newName = "GlobalVariable";
            content.args = [content.args[0].args[0]].concat(content.args.slice(1));

        } else if (content.args[0].name === "__playerVar__") {
            newName = "PlayerVariable";
            content.args = [content.args[0].args[0], content.args[0].args[1]].concat(content.args.slice(1));

        } else {
            error("Expected a variable for 1st argument of "+functionNameToString(content)+", but got "+functionNameToString(content.args[0]));
        }
        newName = "__stopChasing"+newName+"__";
        content.name = newName;

    }

    var result = "";
    if (content.isDisabled === true) {
        result += tows("__disabled__", ruleKw)+" ";
    }
    if (content.type === undefined) {
        error("Type of '"+content.name+"' is undefined");
    }
    if (content.type === "void") {
        result += tows(content.name, actionKw);
    } else if (isTypeSuitable(["Object", "Array"], content.type)){
        result += tows(content.name, valueKw);
    } else if (content.type in constantValues) {
        result += tows(content.name, constantValues[content.type]);
    } else if (content.type === "HeroLiteral") {
        result += tows(content.name, constantValues["Hero"]);
    } else if (content.type === "MapLiteral") {
        result += tows(content.name, constantValues["Map"]);
    } else if (content.type === "TeamLiteral") {
        result += tows(content.name, constantValues["Team"]);
    } else if (content.type === "GamemodeLiteral") {
        result += tows(content.name, constantValues["Gamemode"]);
    } else if (content.type === "ButtonLiteral") {
        result += tows(content.name, constantValues["Button"]);
    } else {
        error("Unknown type '"+content.type+"' of '"+content.name+"'");
    }
    if (content.args.length > 0) {
        result += "(" + content.args.map(x => astToWs(x)).join(", ")+")";
    }
    return result;
}
