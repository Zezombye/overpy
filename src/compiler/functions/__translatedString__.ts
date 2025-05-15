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

import { spaces } from "../../data/opy/blizzardGlobal";
import { translationLanguageConstantOpy, translationLanguages, usePlayerVarForTranslations } from "../../globalVars";
import { Ast, astParsingFunctions } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error } from "../../utils/logging";
import { escapeString } from "../../utils/strings";
import { getBestSpaces } from "./createCasedProgressBarIwt";
import { getStrVisualLength } from "./strVisualLength";

export function getAstForTranslatedString(content: Ast, replacements: Ast[] = []): Ast {

    if (content.name !== "__translatedString__" && content.name !== "__translateString__") {
        error("Invalid function '"+content.name+"' for translated string, please report to Zezombye");
    }

    let action = content;
    while (action.type !== "void" && action.parent) {
        action = action.parent;
    }
    if (action.type !== "void") {
        error("Could not find parent action of translated string");
    }
    //console.log("action name: ",action.name);
    let isReevaluatedClientSide = action.clientSideReevaluatedArgIndexes.includes(action.argIndex);
    let isTranslatedStringLiteral = (content.name === "__translatedString__");

    if (!isReevaluatedClientSide && !isTranslatedStringLiteral) {
        error("Translated string must be a string literal if used in a non-reevaluated action");
    }
    if (!isReevaluatedClientSide && action.name !== "__assignTo__") {
        error("Cannot use translated string if not assigned to a variable or displayed in a reevaluated field");
    }

    let opyMacro = "";
    let replacementNames: string[] = [];

    if (content.parent?.name === "spacesForString") {
        opyMacro += escapeString("ＴＬＥｒｒ\uEC48"+content.args.map(x => getBestSpaces(Object.keys(spaces).map(Number), getStrVisualLength(x.name)).map((j) => spaces[j]).join("") ).join("\uEC48"), false);
        opyMacro += ".split(__overpyTranslationHelper__)";
    } else if (isTranslatedStringLiteral) {
        //\uEC48 is a character from the private use area. Use as separator, as it cannot appear in translated strings
        //__overpyTranslationsHelper__[0] is that character, so we add it to the start of the string so that the translation indexes match when we split it
        //We add "TLERR" at the start to notify the user if the string is stored in a variable then not translated using the "_" function when displayed
        let rawString = "ＴＬＥｒｒ\uEC48"+content.args.map(x => x.name.replaceAll("{}", "{0}")).join("\uEC48");

        //Warning: if adding more separators, check in a print() function if there is no loss of precision (client-side values have low precision)
        let separators = ["Vector.UP", "Vector.DOWN", "Vector.LEFT", "Vector.RIGHT", "Vector.FORWARD", "Vector.BACKWARD", "1876650.25", "1876651.25", "1876652.25", "1876653.25", "1876654.25", "1876655.25", "1876656.25", "1876657.25", "1876658.25", "1876659.25"];
        let vectorToString: Record<string, string> = {
            "Vector.UP": "(0.00, 1.00, 0.00)",
            "Vector.DOWN": "(0.00, -1.00, 0.00)",
            "Vector.LEFT": "(1.00, 0.00, 0.00)",
            "Vector.RIGHT": "(-1.00, 0.00, 0.00)",
            "Vector.FORWARD": "(0.00, 0.00, 1.00)",
            "Vector.BACKWARD": "(0.00, 0.00, -1.00)",
        };

        for (let i = 0; i < separators.length; i++) {
            rawString = rawString.replaceAll("{" + i + "}", separators[i] in vectorToString ? vectorToString[separators[i]] : separators[i]);
        }

        opyMacro = escapeString(rawString, false);
        for (let i = 0; i < replacements.length; i++) {
            opyMacro += ".replace(updateEveryFrame("+separators[i]+"), $arg" + i+")";
        }
        opyMacro += ".split(__overpyTranslationHelper__)";
        replacementNames = replacements.map((x,i) => "$arg" + i);

    } else {
        opyMacro = "$translatedString";
        replacementNames = ["$translatedString"];
        replacements = [content.args[0]];
    }


    if (isReevaluatedClientSide) {
        if (usePlayerVarForTranslations) {
            opyMacro += "[localPlayer.__languageIndex__]";
        } else {
            opyMacro += "[abs(__overpyTranslationHelper__.index("+translationLanguageConstantOpy+".split([])))]";
        }
    }

    return parseOpyMacro(opyMacro, replacementNames, replacements);

}

astParsingFunctions.__translatedString__ = function (content) {
    for (let arg of content.args) {
        if (arg.type !== "CustomStringLiteral") {
            error("Argument of __translatedString__ is not a string literal, please report to Zezombye");
        }
    }
    if (content.parent?.name === ".format" && content.parent.argIndex === 0) {
        //Format needs to know that it is a translated string (to perform string replacements), so we cannot convert the AST just yet
        return content;
    }
    if (content.parent?.name === "spacesForString") {
        //Likewise, this function needs to know that it is a translated string
        return content;
    }
    return getAstForTranslatedString(content);
};
