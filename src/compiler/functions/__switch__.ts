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

import { astParsingFunctions } from "../../utils/ast";
import { functionNameToString } from "../../utils/logging";

astParsingFunctions.__switch__ = function (content, compiler) {
    var switchCaseArgs = [];

    //A flattened array of all children of cases, plus any labels (either literal labels, or labels made from case/default statements).
    var casesChildren = [];

    var hasDefault = false;
    var switchNb = compiler.getUniqueNumber();

    //Check if we have only cases or defaults
    for (var child of content.children) {
        if (child.name === "__case__") {
            casesChildren.push(compiler.Ast("__label_switch_" + switchNb + "_" + switchCaseArgs.length + "__", [], [], "Label"));
            casesChildren.push(...child.children);
            switchCaseArgs.push(child.args[0]);
        } else if (child.name === "__default__") {
            casesChildren.push(compiler.Ast("__label_switch_" + switchNb + "_default__", [], [], "Label"));
            casesChildren.push(...child.children);
            hasDefault = true;
        } else if (child.type === "Label") {
            casesChildren.push(child);
        } else {
            compiler.error("Expected a 'case' or 'default' instruction, but got " + functionNameToString(child), child.fileStack);
        }
    }

    if (!hasDefault) {
        casesChildren.push(compiler.Ast("__label_switch_" + switchNb + "_default__", [], [], "Label"));
    }

    casesChildren.push(compiler.getAstForEnd());

    //Build the cases arg array
    //[caseOffsets][[caseValues].index(switchValue)+1]
    var caseOffsets = [];
    caseOffsets.push(compiler.Ast("__distanceTo__", [compiler.Ast("__label_switch_" + switchNb + "_default__", [], [], "Label")]));
    for (var i = 0; i < switchCaseArgs.length; i++) {
        caseOffsets.push(compiler.Ast("__distanceTo__", [compiler.Ast("__label_switch_" + switchNb + "_" + i + "__", [], [], "Label")]));
    }

    //Insert the children of the cases in the parent
    for (var child of casesChildren) {
        child.parent = content.parent;
    }
    if (content.parent === undefined) {
        throw compiler.error("Parent is undefined in __switch__");
    }
    content.parent.children.splice(content.parent.childIndex + 1, 0, ...casesChildren);

    let skip = compiler.Ast("__skip__", [compiler.Ast("__valueInArray__", [compiler.Ast("__array__", caseOffsets), compiler.Ast("__add__", [compiler.getAstFor1(), compiler.Ast(".index", [compiler.Ast("__array__", switchCaseArgs), content.args[0]])])])]);
    skip.isGotoInSameScope = true;
    var result = compiler.Ast("__if__", [compiler.getAstForTrue()], [skip]);
    result.isSwitchIf = true;
    result.doNotReparse = true;
    return result;
};
