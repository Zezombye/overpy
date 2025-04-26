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
import { applyCasedStringModifier } from "../../utils/strings";
import { isTypeSuitable } from "../../utils/types";
import { getStrVisualLength } from "./strVisualLength";

astParsingFunctions.debug = function (content) {
    let contentStr = content.tokenArgsStr;
    if (!contentStr) {
        error("Could not get token content of debug function");
    }

    //Prevent formatters in the source code from being taken as actual formatters
    contentStr = contentStr.replaceAll("{", "\u{E007B}");
    contentStr = contentStr.replaceAll("}", "\u{E007D}");

    if (!contentStr.startsWith("arrayToString(") && isTypeSuitable("Array", content.args[0].type)) {
        //Automatically display arrays. Keep the max length low to not take too many elements
        content.args[0] = astParsingFunctions.arrayToString(new Ast("arrayToString", [content.args[0], getAstForNumber(6)]));
    }

    let contentStrTrimmed = "";
    for (let char of contentStr) {
        if (getStrVisualLength(contentStrTrimmed + char) <= 20000) {
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
        contentStr = "<FGD0FF00FF>" + contentStr + "\u2028<FG99F3FFFF>= <FGFFFF00FF>{}" + " ".repeat(170);
    } else {
        contentStr = contentStr + "\u2028= {}" + " ".repeat(170);
    }

    //console.log(contentStr);

    return new Ast("hudText", [new Ast("getPlayers", [getAstForTeamAll()]), getAstForNull(),  astParsingFunctions[".format"](new Ast(".format", [new Ast(applyCasedStringModifier(contentStr), [], [], "CustomStringLiteral"), content.args[0]])), getAstForNull(), new Ast("LEFT", [], [], "HudPosition"), getAstForNumber(-9999), getAstForNull(), getAstForColorWhite(), getAstForNull(), new Ast("VISIBILITY_AND_STRING", [], [], "HudReeval"), new Ast("DEFAULT", [], [], "SpecVisibility")]);
};
