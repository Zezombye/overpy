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

import { enableOptimization } from "../../globalVars";
import { areAstsAlwaysEqual, Ast, astContainsRandom, astIsLiteral, astParsingFunctions, getAstForFalse, getAstForMinus1, getAstForNumber, getAstForTrue, getAstForUselessInstruction } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";

astParsingFunctions[".index"] = function (content) {

    if (enableOptimization) {
        if (content.args[0].name === "__array__") {
            if (content.args[0].args.length === 0) {
                return getAstForMinus1();
            }
            let isSearchedValueLiteral = astIsLiteral(content.args[1]);
            let areAllArrayValuesLiteral = true;
            let i = 0;
            for (; i < content.args[0].args.length; i++) {
                let currentValue = content.args[0].args[i];
                if (!astIsLiteral(currentValue)) {
                    areAllArrayValuesLiteral = false;
                }
                if (areAstsAlwaysEqual(currentValue, content.args[1])) {
                    if (isSearchedValueLiteral && areAllArrayValuesLiteral) {
                        //We can return the index, as we know that no prior value matches (as all prior values are literals)
                        return getAstForNumber(i);
                    }
                    //We can break and slice the array up to this point, as the index cannot be greater than this
                    break;
                }
            }
            content.args[0].args = content.args[0].args.slice(0, i+1);
            if (isSearchedValueLiteral && areAllArrayValuesLiteral) {
                //No value matches
                return getAstForMinus1();
            }
        }

    }

    return content;
};
