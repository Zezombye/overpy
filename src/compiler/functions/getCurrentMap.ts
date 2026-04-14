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

import {usedMaps} from "../../globalVars";
import { Ast, astParsingFunctions } from "../../utils/ast";
import {parseOpyMacro} from "../../utils/compilation";

astParsingFunctions.getCurrentMap = function (content) {

    if (content.parent?.name === "__equals__" && (content.parent.args[0].name === "__map__" || content.parent.args[1].name === "__map__")) {
        return content; //__equals__ will handle the optimization
    }

    //These maps cannot be detected using the workshop's raw getCurrentMap() as there are duplicates and the Map() function returns the wrong value
    if (usedMaps.has("colosseo") || usedMaps.has("esperanca") || usedMaps.has("samoa")) {
        //This uses the least elements, even when there is only one map to detect
        let buggedUsedMaps = ["colosseo", "esperanca", "samoa"].filter(m => usedMaps.has(m));
        return parseOpyMacro(`[${buggedUsedMaps.map(m => "Map."+m.toUpperCase()).join(", ")}, __getCurrentMap__()].filter(lambda x: "{}".format(__getCurrentMap__()) == x.split([]))[0]`, [], []);
    }
    return new Ast("__getCurrentMap__");
};
