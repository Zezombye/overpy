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

import {Subroutine} from "../../types";
import { astParsingFunctions } from "../../utils/ast";

astParsingFunctions.__callSubroutine__ = function (content, compiler) {

    let parent = content.parent;
    while (parent?.parent) {
        parent = parent.parent;
    }

    if (parent?.name === "__rule__") {
        if (parent.ruleAttributes?.subroutineName) {
            let subroutine: Subroutine = compiler.subroutines.find((x) => x.name === parent.ruleAttributes?.subroutineName)!;
            if (!subroutine.callsSubroutines.includes(content.args[0].name)) {
                subroutine.callsSubroutines.push(content.args[0].name);
            }
        }
    }
    //console.log(parent);


    return content;
};
