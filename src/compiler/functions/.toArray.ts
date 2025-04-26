/*
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2023 Zezombye.
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
import { error } from "../../utils/logging";

astParsingFunctions[".toArray"] = function (content) {
    if (content.args[0].name !== "__enumType__") {
        error("Cannot use .toArray() on something that is not an enum type");
    }
    return new Ast("__array__", content.args[0].args);
};
