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
import { error } from "../../utils/logging";

astParsingFunctions.__dict__ = function (content) {
    if (content.parent?.name === "splitDictArray" || content.parent?.parent?.name === "splitDictArray") {
        return content;
    }
    let parent = content.parent;
    while (parent) {
        if (parent.name === "__settings__") {
            return content;
        }
        parent = parent.parent;
    }
    if (content.parent?.name !== "__valueInArray__") {
        error("Cannot use a dictionary without accessing it");
    }

    //The processing happens in the __valueInArray__ function

    return content;
};
