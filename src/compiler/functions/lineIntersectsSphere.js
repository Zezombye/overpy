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

astParsingFunctions.lineIntersectsSphere = function(content) {

    return new Ast("__lessThanOrEquals__", [
        new Ast("distance", [
            new Ast("__add__", [
                new Ast("__multiply__", [
                    new Ast("distance", [
                        content.args[0], content.args[2],
                    ]),
                    content.args[1],
                ]),
                content.args[0],
            ]),
            content.args[2],
        ]),
        content.args[3],
    ]);
}
