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

import { enableOptimization, optimizeStrict } from "../../globalVars";
import { astParsingFunctions, getAstForUselessInstruction } from "../../utils/ast";

astParsingFunctions.__modifyVar__ = function (content) {
    let opName = content.args[1].name;
    if (opName === "min" || opName === "max") {
        content.args[1].name = "__" + opName + "__";
    }

    if (enableOptimization) {
        switch (opName) {
            case "__add__":
            case "__subtract__":
                if (!optimizeStrict) {
                    if (content.args[2].name === "__number__" && content.args[2].args[0].numValue === 0) {
                        return getAstForUselessInstruction();
                    }
                }
                break;
            case "__multiply__":
            case "__divide__":
            case "__raiseToPower__":
                if (!optimizeStrict) {
                    if (content.args[2].name === "__number__" && content.args[2].args[0].numValue === 1) {
                        return getAstForUselessInstruction();
                    }
                }
                break;
        }
    }

    return content;
};
