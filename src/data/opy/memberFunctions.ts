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

import { Argument, Type } from "../../types";

//Only functions without parentheses, else they go in opyFuncs like the rest.
export const opyMemberFuncs: Record<string, {
    description: string,
    args: Argument[] | null,
    class: String,
    return: Type
}> = {
    "x": {
        description: "The x component of the specified vector, usually representing a leftward amount.",
        args: null,
        class: "Vector",
        return: "float",
    },
    "y": {
        description: "The y component of the specified vector, usually representing an upward amount.",
        args: null,
        class: "Vector",
        return: "float",
    },
    "z": {
        description: "The z component of the specified vector, usually representing a forward amount.",
        args: null,
        class: "Vector",
        return: "float",
    }
};
