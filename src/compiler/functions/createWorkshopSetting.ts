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

import { fileStack, workshopSettingWhitespace, workshopSettingNames, setFileStack, funcKw } from "../../globalVars";
import { Ast, getAstForMinusInfinity, getAstForInfinity, getAstFor0, astParsingFunctions } from "../../utils/ast";
import { error, getTypeCheckFailedMessage, functionNameToString, warn } from "../../utils/logging";
import { getUtf8Length } from "../../utils/strings";
import { isTypeSuitable } from "../../utils/types";

astParsingFunctions.__createWorkshopSetting__ = function (content) {
    let funcValueArgs = funcKw[content.name].args;
    if (funcValueArgs === null) {
        error("No arguments found for workshop setting: '" + content.name + "'");
    }

    //Types are capital here as a type mismatch won't allow pasting
    for (var i = 0; i < content.args.length; i++) {
        if (i !== 1 && i !== 2) {
            //can't properly check the CustomStringLiteral type yet
            if (!isTypeSuitable(funcValueArgs[i].type, content.args[i].type, false)) {
                error(getTypeCheckFailedMessage(content, i, funcValueArgs[i].type, content.args[i]), content.args[i].fileStack);
            }
        }
    }

    var settingType = content.args[0];
    var settingCategory = content.args[1];
    var settingName = content.args[2];
    var settingDefault = content.args[3];
    var sortOrder = content.args[4];
    var result = null;

    if (settingType.args.length === 0) {
        if (settingType.name === "bool") {
            result = new Ast("createWorkshopSettingBool", [settingCategory, settingName, settingDefault, sortOrder]);
        } else if (settingType.name === "int") {
            result = new Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "unsigned int") {
            result = new Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, getAstFor0(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "signed int") {
            result = new Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstFor0(), sortOrder]);
        } else if (settingType.name === "float") {
            result = new Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "unsigned float") {
            result = new Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, getAstFor0(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "signed float") {
            result = new Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstFor0(), sortOrder]);
        } else if (settingType.name === "Hero") {
            result = new Ast("createWorkshopSettingHero", [settingCategory, settingName, settingDefault, sortOrder]);
        } else {
            error("Invalid type '" + settingType.name + "' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float', 'bool', 'enum' or 'Hero'", settingType.fileStack);
        }
    } else {
        if (settingType.name === "int") {
            result = new Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1], sortOrder]);
        } else if (settingType.name === "float") {
            result = new Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1], sortOrder]);
        } else if (settingType.name === "__enumType__") {
            result = new Ast("createWorkshopSettingEnum", [
                settingCategory,
                settingName,
                settingDefault,
                new Ast(
                    "__array__",
                    settingType.args,
                ),
                sortOrder,
            ]);
        } else {
            error("Invalid type '" + settingType.name + "' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float', 'bool', 'enum' or 'Hero'", settingType.fileStack);
        }
    }

    //Typecheck the default
    let expectedType = funcKw[result.name].args?.[2].type;
    if (expectedType === undefined) {
        error("Could not determine expected type for workshop setting '" + content.name + "'");
    }
    if (!isTypeSuitable(expectedType, result.args[2].type, false)) {
        error(getTypeCheckFailedMessage(result, i, expectedType, result.args[2]), result.args[2].fileStack);
    }
    return result;
};

//Check the other workshop setting functions here to not have 5 redundant files
astParsingFunctions.createWorkshopSettingBool = astParsingFunctions.createWorkshopSettingEnum = astParsingFunctions.createWorkshopSettingFloat = astParsingFunctions.createWorkshopSettingInt = astParsingFunctions.createWorkshopSettingHero = function (content) {
    content.args[0] = createSuitableWorkshopSettingString(content.args[0], false);
    content.args[1] = createSuitableWorkshopSettingString(content.args[1], true);
    if (content.name === "createWorkshopSettingEnum") {
        if (content.args[3].name !== "__array__") {
            error("Expected an array for argument 3 of function 'createWorkshopSettingEnum', but got '" + functionNameToString(content.args[3]) + "'", content.args[3].fileStack);
        }
        for (var i = 0; i < content.args[3].args.length; i++) {
            content.args[3].args[i] = createSuitableWorkshopSettingString(content.args[3].args[i], false);
        }
        if (content.args[2].name !== "__number__") {
            error("Expected a number literal for argument 2 of function 'createWorkshopSettingEnum', but got '" + functionNameToString(content.args[2]) + "'", content.args[2].fileStack);
        }
        if (content.args[2].args[0].numValue !== 0) {
            warn("w_workshop_setting_enum_default", "Default value for workshop setting enum should be 0, as otherwise the first option is not selectable via the UI.", content.args[2].fileStack);
        }
    }
    return content;
};

function createSuitableWorkshopSettingString(str: Ast, isName: boolean) {
    setFileStack(str.fileStack);
    if (str.name !== "__customString__") {
        error("Expected a custom string literal for workshop setting, but got '" + functionNameToString(str) + "'");
    }
    if (str.args[1].name !== "null" || str.args[2].name !== "null" || str.args[3].name !== "null") {
        error("Workshop setting strings cannot contain formatting arguments or be longer than 128 characters");
    }

    //If string is blank, add a fullwidth space as strings cannot only contain regular whitespace.
    if (!/\S/.test(str.args[0].name)) {
        str.args[0].name += String.fromCharCode(0x3000);
    }

    //Replace disallowed workshop setting chars
    str.args[0].name = str.args[0].name.replaceAll(":", "\u{E003A}").replaceAll("{", "\u{E007B}").replaceAll("}", "\u{E007D}");

    if (isName) {
        //Chars other than :{} are allowed, but are stripped out on copying, so replace them if the string is the setting name (category is not copied and enum names are copied as index)
        //The | char must also be replaced as it makes the setting not recognized on pasting
        str.args[0].name = str.args[0].name.replaceAll('"', "\u{E0022}").replaceAll("(", "\u{E0028}").replaceAll(")", "\u{E0029}").replaceAll(",", "\u{E002C}").replaceAll("/", "\u{E002F}").replaceAll(";", "\u{E003B}").replaceAll("\\", "\u{E005C}").replaceAll("|", "\u{E007C}");
        //Check for a duplicate setting. If there is one, add some useless whitespace to the end.
        var settingName = str.args[0].name;
        if (workshopSettingNames.includes(settingName)) {
            for (var i = 0; i < workshopSettingWhitespace.length && workshopSettingNames.includes(settingName); i++) {
                settingName = str.args[0].name + workshopSettingWhitespace[i];
            }
        }
        str.args[0].name = settingName;
        workshopSettingNames.push(str.args[0].name);
    }

    //Strings have a max of 128 chars, and must be literals
    if (getUtf8Length(str.args[0].name) > 128) {
        error("String '" + str.args[0].name + "' was pushed over the 128 characters limit due to OverPy modifications (is now " + getUtf8Length(str.args[0].name) + " characters long)");
    }

    if (workshopSettingNames.length > 128) {
        error("Cannot have more than 128 workshop settings");
    }

    return str;
}
