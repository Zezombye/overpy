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

import { escapeString } from "../../utils/strings";

astParsingFunctions.debug = function (content, compiler) {
    let contentStr = content.tokenArgsStr;
    if (!contentStr) {
        throw compiler.error("Could not get token content of debug function");
    }

    //Prevent formatters in the source code from being taken as actual formatters
    contentStr = contentStr.replaceAll("{", "\u{E007B}");
    contentStr = contentStr.replaceAll("}", "\u{E007D}");

    if (!contentStr.startsWith("arrayToString(") && compiler.isTypeSuitable("Array", content.args[0].type)) {
        //Automatically display arrays. Keep the max length low to not take too many elements
        content.args[0] = astParsingFunctions.arrayToString(compiler.Ast("arrayToString", [content.args[0], compiler.getAstForNumber(6)]), compiler);
    }

    let contentStrTrimmed = "";
    for (let char of contentStr) {
        if (compiler.getStrVisualLength(contentStrTrimmed + char) <= 20000) {
            contentStrTrimmed += char;
        } else {
            break;
        }
    }
    if (contentStrTrimmed.length < contentStr.length) {
        contentStrTrimmed += (compiler.enableTagsSetup ? "</FG>" : "") + "…";
    }
    contentStr = contentStrTrimmed;
    if (compiler.enableTagsSetup) {
        contentStr = "<FGD0FF00FF>" + contentStr + "\u2028<FG99F3FFFF>= <FGFFFF00FF>{}" + " ".repeat(170);
    } else {
        contentStr = contentStr + "\u2028= {}" + " ".repeat(170);
    }

    //console.log(contentStr);
    return compiler.parseOpyMacro("hudSubheader(getAllPlayers(), c"+escapeString(contentStr, false)+".format($debugContent), HudPosition.LEFT, -9999, Color.WHITE)", ["$debugContent"], [content.args[0]]);
};
