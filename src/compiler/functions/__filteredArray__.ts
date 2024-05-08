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

astParsingFunctions.__filteredArray__ = function(content) {
    
    if (enableOptimization) {
        //filtered array with no constant -> if/else
        if (!optimizeForSize) {
            if (!astContainsFunctions(content.args[1], ["__currentArrayElement__", "__currentArrayIndex__"])) {
                return new Ast("__ifThenElse__", [content.args[1], content.args[0], getAstForEmptyArray()]);
            }
        }

        //filtered array with condition "currentArrayElement != A" -> remove from array(array, A)
        if (content.args[1].name === "__inequals__") {
            if (content.args[1].args[0].name === "__currentArrayElement__" && !astContainsFunctions(content.args[1].args[1], ["__currentArrayElement__", "__currentArrayIndex__"])) {
                return new Ast("__removeFromArray__", [content.args[0], content.args[1].args[1]]);
            }
            if (content.args[1].args[1].name === "__currentArrayElement__" && !astContainsFunctions(content.args[1].args[0], ["__currentArrayElement__", "__currentArrayIndex__"])) {
                return new Ast("__removeFromArray__", [content.args[0], content.args[1].args[0]]);
            }
        }

        if (content.args[0].name === "getPlayers") {
            //filter(getPlayers(A), is on objective(x)) -> getPlayersOnObjective(A)
            if (content.args[1].name === "_&isOnObjective" && content.args[1].args[0].name === "__currentArrayElement__") {
                return new Ast("getPlayersOnObjective", [content.args[0].args[0]]);
            }
            //filter(getPlayers(A), not is on objective(x)) -> getPlayersNotOnObjective(A)
            if (content.args[1].name === "__not__" && content.args[1].args[0].name === "_&isOnObjective" && content.args[1].args[0].args[0].name === "__currentArrayElement__") {
                return new Ast("getPlayersNotOnObjective", [content.args[0].args[0]]);
            }
            //filter(getPlayers(A), is alive(x)) -> getLivingPlayers(A)
            if (content.args[1].name === "_&isAlive" && content.args[1].args[0].name === "__currentArrayElement__") {
                return new Ast("getLivingPlayers", [content.args[0].args[0]]);
            }
            //filter(getPlayers(A), is dead(x)) -> getDeadPlayers(A)
            if (content.args[1].name === "_&isDead" && content.args[1].args[0].name === "__currentArrayElement__") {
                return new Ast("getDeadPlayers", [content.args[0].args[0]]);
            }
            //filter(getPlayers(A), x.getCurrentHero() == B) -> getPlayersOnHero(B, A)
            if (content.args[1].name === "__equals__") {
                if (content.args[1].args[0].name === "_&getCurrentHero" && content.args[1].args[0].args[0].name === "__currentArrayElement__"
                        && !astContainsFunctions(content.args[1].args[1], ["__currentArrayElement__", "__currentArrayIndex__"])) {
                    return new Ast("getPlayersOnHero", [content.args[1].args[1], content.args[0].args[0]]);
                }
                if (content.args[1].args[1].name === "_&getCurrentHero" && content.args[1].args[1].args[0].name === "__currentArrayElement__"
                        && !astContainsFunctions(content.args[1].args[0], ["__currentArrayElement__", "__currentArrayIndex__"])) {
                    return new Ast("getPlayersOnHero", [content.args[1].args[0], content.args[0].args[0]]);
                }
            }
        }
    }
    return content;
}
