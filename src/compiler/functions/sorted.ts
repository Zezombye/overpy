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

astParsingFunctions.sorted = function (content) {

    //console.log(astToString(content));

    if (content.args[0].name === "__array__" && content.args[1].name === "__multiply__" && (
        content.args[1].args[0].name === "__number__" && content.args[1].args[0].args[0].numValue === -1 && content.args[1].args[1].name === "__currentArrayIndex__"
        || content.args[1].args[0].name === "__currentArrayIndex__" && content.args[1].args[1].name === "__number__" && content.args[1].args[1].args[0].numValue === -1

    )) {
        //sort by reverse index -> reverse the array
        content.args[0].args.reverse();
        return content.args[0];
    }

    content.name = "__sortedArray__";
    content.type = content.args[0].type;
    return content;
};
