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
import { Ast, astParsingFunctions, getAstFor0, getAstFor1, getAstForMinus1 } from "../../utils/ast";

astParsingFunctions.vect = function (content) {

    return content;
};

//Unoptimize so that we can then do optimizations on eg Vector.LEFT*2
astParsingFunctions["Vector.LEFT"] = function(content) {
    if (enableOptimization) {
        return new Ast("vect", [getAstFor1(), getAstFor0(), getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.RIGHT"] = function(content) {
    if (enableOptimization) {
        return new Ast("vect", [getAstForMinus1(), getAstFor0(), getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.UP"] = function(content) {
    if (enableOptimization) {
        return new Ast("vect", [getAstFor0(), getAstFor1(), getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.DOWN"] = function(content) {
    if (enableOptimization) {
        return new Ast("vect", [getAstFor0(), getAstForMinus1(), getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.FORWARD"] = function(content) {
    if (enableOptimization) {
        return new Ast("vect", [getAstFor0(), getAstFor0(), getAstFor1()]);
    }
    return content;
};
astParsingFunctions["Vector.BACKWARD"] = function(content) {
    if (enableOptimization) {
        return new Ast("vect", [getAstFor0(), getAstFor0(), getAstForMinus1()]);
    }
    return content;
};
