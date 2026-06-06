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

astParsingFunctions.vect = function (content, compiler) {

    return content;
};

//Unoptimize so that we can then do optimizations on eg Vector.LEFT*2
astParsingFunctions["Vector.LEFT"] = function(content, compiler) {
    if (compiler.enableOptimization) {
        return compiler.Ast("vect", [compiler.getAstFor1(), compiler.getAstFor0(), compiler.getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.RIGHT"] = function(content, compiler) {
    if (compiler.enableOptimization) {
        return compiler.Ast("vect", [compiler.getAstForMinus1(), compiler.getAstFor0(), compiler.getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.UP"] = function(content, compiler) {
    if (compiler.enableOptimization) {
        return compiler.Ast("vect", [compiler.getAstFor0(), compiler.getAstFor1(), compiler.getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.DOWN"] = function(content, compiler) {
    if (compiler.enableOptimization) {
        return compiler.Ast("vect", [compiler.getAstFor0(), compiler.getAstForMinus1(), compiler.getAstFor0()]);
    }
    return content;
};
astParsingFunctions["Vector.FORWARD"] = function(content, compiler) {
    if (compiler.enableOptimization) {
        return compiler.Ast("vect", [compiler.getAstFor0(), compiler.getAstFor0(), compiler.getAstFor1()]);
    }
    return content;
};
astParsingFunctions["Vector.BACKWARD"] = function(content, compiler) {
    if (compiler.enableOptimization) {
        return compiler.Ast("vect", [compiler.getAstFor0(), compiler.getAstFor0(), compiler.getAstForMinus1()]);
    }
    return content;
};
