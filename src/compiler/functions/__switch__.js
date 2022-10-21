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

astParsingFunctions.__switch__ = function(content) {

    var switchCaseArgs = [];

    //A flattened array of all children of cases, plus any labels (either literal labels, or labels made from case/default statements).
    var casesChildren = [];

    var hasDefault = false;
    var switchNb = getUniqueNumber();

    //Check if we have only cases or defaults
    for (var child of content.children) {
        if (child.name === "__case__") {
            casesChildren.push(new Ast("__label_switch_"+switchNb+"_"+switchCaseArgs.length+"__", [], [], "Label"));
            casesChildren.push(...child.children);
            switchCaseArgs.push(child.args[0]);
        } else if (child.name === "__default__") {
            casesChildren.push(new Ast("__label_switch_"+switchNb+"_default__", [], [], "Label"));
            casesChildren.push(...child.children);
            hasDefault = true;
        } else if (child.type === "Label") {
            casesChildren.push(child);
        } else {
            error("Expected a 'case' or 'default' instruction but got "+functionNameToString(child));
        }
    }

    if (!hasDefault) {
        casesChildren.push(new Ast("__label_switch_"+switchNb+"_default__", [], [], "Label"));
    }

    casesChildren.push(getAstForEnd());

    //Build the cases arg array
    //[caseOffsets][[caseValues].index(switchValue)+1]
    var caseOffsets = [];
    caseOffsets.push(new Ast("__distanceTo__", [new Ast("__label_switch_"+switchNb+"_default__", [], [], "Label")]));
    for (var i = 0; i < switchCaseArgs.length; i++) {
        caseOffsets.push(new Ast("__distanceTo__", [new Ast("__label_switch_"+switchNb+"_"+i+"__", [], [], "Label")]));
    }

    casesChildren.unshift(new Ast("__skip__", [
        new Ast("__valueInArray__", [
            new Ast("__array__", caseOffsets),
            new Ast("__add__", [
                getAstFor1(),
                new Ast("__indexOfArrayValue__", [
                    new Ast("__array__", switchCaseArgs),
                    content.args[0],
                ])
            ])
        ])
    ]));

    //Insert the children of the cases in the parent
    for (var child of casesChildren) {
        child.parent = content.parent;
    }
    content.parent.children.splice(content.parent.childIndex+1, 0, ...casesChildren);

    var result = new Ast("__if__", [getAstForTrue()]);
    result.doNotOptimize = true;
    return result;
}
