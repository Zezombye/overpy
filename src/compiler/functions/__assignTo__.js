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

astParsingFunctions.__assignTo__ = function(content) {

    if (enableOptimization) {
        if ([
            "__add__",
            "__subtract__",
            "__multiply__",
            "__divide__",
            "__modulo__",
            "__raiseToPower__",
            "min",
            "max",
        ].includes(content.args[1].name) && areAstsEqual(content.args[0], content.args[1].args[0])) {
            var opName = content.args[1].name;
            if (opName === "min" || opName === "max") {
                opName = "__"+opName+"__";
            }
            return new Ast("__modifyVar__", [
                content.args[0],
                new Ast(opName, [], [], "__Operation__"),
                content.args[1].args[1],
            ]);
        }

        if (areAstsEqual(content.args[0], content.args[1])) {
            return getAstForUselessInstruction();
        }
    }

    return content;
}
