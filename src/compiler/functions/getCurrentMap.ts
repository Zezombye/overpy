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

import { Ast, astParsingFunctions } from "../../utils/ast";

astParsingFunctions.getCurrentMap = function (content, compiler) {

    if (content.parent?.name === "__equals__" && (content.parent.args[0].name === "__map__" || content.parent.args[1].name === "__map__")) {
        return content; //__equals__ will handle the optimization
    }

    //These maps cannot be detected using the workshop's raw getCurrentMap() as there are duplicates and the Map() function returns the wrong value
    if (compiler.usedMaps.has("colosseo") || compiler.usedMaps.has("esperanca") || compiler.usedMaps.has("samoa") || compiler.usedMaps.has("throne_of_anubis")) {
        //This uses the least elements, even when there is only one map to detect
        let buggedUsedMaps = ["colosseo", "esperanca", "samoa", "throne_of_anubis"].filter(m => compiler.usedMaps.has(m));
        return compiler.parseOpyMacro(`[${buggedUsedMaps.map(m => "Map."+m.toUpperCase()).join(", ")}, __getCurrentMap__()].filter(lambda x: "{}".format(__getCurrentMap__()) == x.split([]))[0]`, [], []);
    }
    return compiler.Ast("__getCurrentMap__");
};
