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

import { constantValues } from "../../data/constants";
import { activatedExtensions, enableOptimization } from "../../globalVars";
import { astParsingFunctions, getAstForNull } from "../../utils/ast";
import { error } from "../../utils/logging";

astParsingFunctions.createBeam = function (content) {
    if (!(content.args[1].name in constantValues[content.args[1].type as string])) {
        error("Unknown beam '" + content.args[1].name + "'", content.args[1].fileStack);
    }
    if (constantValues[content.args[1].type as string][content.args[1].name].extension && !activatedExtensions.includes(constantValues[content.args[1].type as string][content.args[1].name].extension ?? error("Check for workshop extension while creating beam failed"))) {
        error("You must activate the extension '" + constantValues[content.args[1].type as string][content.args[1].name].extension + "' to use '" + content.args[1].type + "." + content.args[1].name + "'", content.args[1].fileStack);
    }
    if (enableOptimization) {
        if (content.args[1].name === "GRAPPLE") {
            content.args[4] = getAstForNull();
        }
    }

    return content;
};
