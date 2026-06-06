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

astParsingFunctions.len = function (content, compiler) {
    if (content.args[0].name === "__enumType__") {
        return compiler.getAstForNumber(content.args[0].args.length);
    } else if (compiler.enableOptimization) {
        if (content.args[0].name === "__array__") {
            return compiler.getAstForNumber(content.args[0].args.length);
        }
        if (content.args[0].name === "__emptyArray__") {
            return compiler.getAstFor0();
        }
        //len(getPlayers(A)) -> getNumberOfPlayers(A)
        if (content.args[0].name === "getPlayers") {
            return compiler.Ast("getNumberOfPlayers", [content.args[0].args[0]]);
        }
        //len(getLivingPlayers(A)) -> getNumberOfLivingPlayers(A)
        if (content.args[0].name === "getLivingPlayers") {
            return compiler.Ast("getNumberOfLivingPlayers", [content.args[0].args[0]]);
        }
        //len(getDeadPlayers(A)) -> getNumberOfDeadPlayers(A)
        if (content.args[0].name === "getDeadPlayers") {
            return compiler.Ast("getNumberOfDeadPlayers", [content.args[0].args[0]]);
        }
        //len(getPlayersOnObjective(A)) -> getNumberOfPlayersOnObjective(A)
        if (content.args[0].name === "getPlayersOnObjective") {
            return compiler.Ast("getNumberOfPlayersOnObjective", [content.args[0].args[0]]);
        }
        //len(getPlayersOnHero(A,B)) -> getNumberOfHeroes(A,B)
        if (content.args[0].name === "getPlayersOnHero") {
            return compiler.Ast("getNumberOfHeroes", [content.args[0].args[0], content.args[0].args[1]]);
        }
    }

    return content;
};
