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

import { astToOpy } from "../../decompiler/astToOpy";
import { astParsingFunctions, enableTagsSetup } from "../../globalVars";
import { Ast, getAstFor0, getAstForColorWhite, getAstForCustomString, getAstForNull, getAstForNumber, getAstForTeamAll } from "../../utils/ast";
import { error } from "../../utils/logging";
import { isTypeSuitable } from "../../utils/types";
import { getStrVisualLength } from "./strVisualLength";

astParsingFunctions.debug = function (content) {
    let contentStr = content.tokenArgsStr;
    if (!contentStr) {
        error("Could not get token content of debug function");
    }

    if (!contentStr.startsWith("arrayToString(") && isTypeSuitable("Array", content.args[0].type)) {
        //Automatically display arrays
        content.args[0] = astParsingFunctions.arrayToString(new Ast("arrayToString", [content.args[0], getAstForNumber(12)]));
    }

    let contentStrTrimmed = "";
    for (let char of contentStr) {
        if (getStrVisualLength(contentStrTrimmed + char) <= 10000) {
            contentStrTrimmed += char;
        } else {
            break;
        }
    }
    if (contentStrTrimmed.length < contentStr.length) {
        contentStrTrimmed += (enableTagsSetup ? "</FG>" : "") + "…";
    }
    contentStr = contentStrTrimmed;
    if (enableTagsSetup) {
        contentStr = "<FGD0FF00FF>" + contentStr + "</FG>\u2028= <FGFFFF00FF>{}" + " ".repeat(170);
    } else {
        contentStr = contentStr + "\u2028= {}" + " ".repeat(170);
    }

    console.log(contentStr);

    return new Ast("__hudText__", [new Ast("getPlayers", [getAstForTeamAll()]), getAstForNull(), getAstForNull(), astParsingFunctions.__format__(new Ast("__format__", [new Ast(contentStr, [], [], "CaseSensitiveStringLiteral"), content.args[0]])), new Ast("LEFT", [], [], "HudPosition"), getAstFor0(), getAstForNull(), getAstForNull(), getAstForColorWhite(), new Ast("VISIBILITY_AND_STRING", [], [], "HudReeval"), new Ast("DEFAULT", [], [], "SpecVisibility")]);
};
