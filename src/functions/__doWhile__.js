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

astParsingFunctions.__doWhile__ = function(content) {
    if ((content.parent.name !== "__rule__" && content.parent.name !== "__def__" && content.parent.name !== "__doWhile__")) {
        error("Do/While loops can only be at the beginning of a rule: parent is '"+content.parent.name+"' and childIndex is "+content.parent.childIndex);
    }

    for (var i = 0; i < content.parent.childIndex; i++) {
        if (content.parent.children[i].name !== "pass") {
            error("Do/While loops can only be at the beginning of a rule: parent is '"+content.parent.name+"' and childIndex is "+content.parent.childIndex);
        }
    }

    var loopFunc = null;
    if (enableOptimization && isDefinitelyFalsy(content.args[0])) {
        loopFunc = getAstForUselessInstruction();

    } else if (enableOptimization && isDefinitelyTruthy(content.args[0])) {
        loopFunc = new Ast("__loop__");

    } else if (content.args[0].name === "RULE_CONDITION") {
        loopFunc = new Ast("__loopIfConditionIsTrue__");

    } else if (content.args[0].name === "__not__" && content.args[0].args[0].name === "RULE_CONDITION") {
        loopFunc = new Ast("__loopIfConditionIsFalse__");

    } else {
        loopFunc = new Ast("__loopIf__", content.args);
    }
    loopFunc.originalName = "__doWhile__";

    //Insert the children in the parent
    for (var child of content.children) {
        child.parent = content.parent;
    }
    content.parent.children.splice(content.parent.childIndex+1, 0, ...content.children, loopFunc);
    
    return getAstForUselessInstruction();
}