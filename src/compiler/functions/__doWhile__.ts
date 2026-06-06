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

import { isDefinitelyFalsy, isDefinitelyTruthy, Ast, astParsingFunctions } from "../../utils/ast";

astParsingFunctions.__doWhile__ = function (content, compiler) {
    if (content.parent === undefined) {
        throw compiler.error("Cannot use 'do while' without a parent context.");
    }

    if (content.parent?.name !== "__rule__" && content.parent?.name !== "__def__" && content.parent?.name !== "__doWhile__") {
        compiler.error("Do/While loops can only be at the beginning of a rule: parent is '" + content.parent.name + "' and childIndex is " + content.parent.childIndex);
    }

    for (var i = 0; i < content.parent.childIndex; i++) {
        if (content.parent.children[i].name !== "pass") {
            compiler.error("Do/While loops can only be at the beginning of a rule: parent is '" + content.parent.name + "' and childIndex is " + content.parent.childIndex);
        }
    }

    var loopFunc = null;
    if (compiler.enableOptimization && isDefinitelyFalsy(content.args[0])) {
        loopFunc = compiler.getAstForUselessInstruction();
    } else if (compiler.enableOptimization && isDefinitelyTruthy(content.args[0])) {
        loopFunc = compiler.Ast("loop");
    } else if (content.args[0].name === "ruleCondition") {
        loopFunc = compiler.Ast("__loopIfConditionIsTrue__");
    } else if (content.args[0].name === "__not__" && content.args[0].args[0].name === "ruleCondition") {
        loopFunc = compiler.Ast("__loopIfConditionIsFalse__");
    } else {
        loopFunc = compiler.Ast("__loopIf__", content.args);
    }
    loopFunc.originalName = "__doWhile__";
    loopFunc.comment = content.comment;

    //Insert the children in the parent
    for (var child of content.children) {
        child.parent = content.parent;
    }
    content.parent.children.splice(content.parent.childIndex + 1, 0, ...content.children, loopFunc);

    return compiler.getAstForUselessInstruction();
};
