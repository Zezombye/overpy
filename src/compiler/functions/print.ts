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

astParsingFunctions.print = function(content) {

    return new Ast("__hudText__", [
        new Ast("getPlayers", [getAstForTeamAll()]),
        content.args[0],
        getAstForNull(),
        getAstForNull(),
        new Ast("LEFT", [], [], "HudPosition"),
        getAstFor0(),
        getAstForColorWhite(),
        getAstForNull(),
        getAstForNull(),
        new Ast("VISIBILITY_AND_STRING", [], [], "HudReeval"),
        new Ast("DEFAULT", [], [], "SpecVisibility"),
    ]);
}
