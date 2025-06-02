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

import { enableOptimization } from "../../globalVars";
import { getAstForBool, areAstsAlwaysEqual, getAstForFalse, astParsingFunctions, getAstForNull } from "../../utils/ast";

astParsingFunctions.__localizedString__ = function (content) {
    if (enableOptimization) {
        //Localized strings take one element more than custom strings.
        //Therefore, convert localized strings into custom strings if they are a localized string that is the same in every language.
        if (["", "*", "----------", "#{0}", "-> {0}", "<-> {0}", "<- {0}", "{0} ->", "{0} <->", "{0} <-", "{0} -> {1}", "{0} - {1}", "{0} != {1}", "{0} * {1}", "{0} / {1}", "{0} + {1}", "{0} <-> {1}", "{0} <- {1}", "{0} <= {1}", "{0} < {1}", "{0} == {1}", "{0} = {1}", "{0} >= {1}", "{0} > {1}", "{0} {1}", "{0} : {1} : {2}", "{0} {1} {2}", "({0})", "¡{0}!", "¿{0}?"].includes(content.args[0].name)) {
            content.name = "__customString__";
            content.args[0].type = "CustomStringLiteral";
        }
    }
    if (content.name === "__localizedString__") {
        while (content.args.length < 4) {
            content.args.push(getAstForNull());
        }
    }
    return content;
};
