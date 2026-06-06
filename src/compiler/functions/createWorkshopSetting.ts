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

import { workshopSettingWhitespace, funcKw } from "../../globalVars";
import { OverPyCompiler } from "../../godClasses";
import { Ast, astParsingFunctions } from "../../utils/ast";
import { functionNameToString } from "../../utils/logging";
import { getUtf8Length } from "../../utils/strings";

astParsingFunctions.__createWorkshopSetting__ = function (content, compiler) {
    let funcValueArgs = funcKw[content.name].args;
    if (funcValueArgs === null) {
        throw compiler.error("No arguments found for workshop setting: '" + content.name + "'");
    }

    //Types are capital here as a type mismatch won't allow pasting
    for (var i = 0; i < content.args.length; i++) {
        if (i !== 1 && i !== 2) {
            //can't properly check the CustomStringLiteral type yet
            if (!compiler.isTypeSuitable(funcValueArgs[i].type, content.args[i].type, false)) {
                compiler.error(compiler.getTypeCheckFailedMessage(content, i, funcValueArgs[i].type, content.args[i]), content.args[i].fileStack);
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
            result = compiler.Ast("createWorkshopSettingBool", [settingCategory, settingName, settingDefault, sortOrder]);
        } else if (settingType.name === "int") {
            result = compiler.Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, compiler.getAstForMinusInfinity(), compiler.getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "unsigned int") {
            result = compiler.Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, compiler.getAstFor0(), compiler.getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "signed int") {
            result = compiler.Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, compiler.getAstForMinusInfinity(), compiler.getAstFor0(), sortOrder]);
        } else if (settingType.name === "float") {
            result = compiler.Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, compiler.getAstForMinusInfinity(), compiler.getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "unsigned float") {
            result = compiler.Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, compiler.getAstFor0(), compiler.getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "signed float") {
            result = compiler.Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, compiler.getAstForMinusInfinity(), compiler.getAstFor0(), sortOrder]);
        } else if (settingType.name === "Hero") {
            result = compiler.Ast("createWorkshopSettingHero", [settingCategory, settingName, settingDefault, sortOrder]);
        } else {
            throw compiler.error("Invalid type '" + settingType.name + "' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float', 'bool', 'enum' or 'Hero'", settingType.fileStack);
        }
    } else {
        if (settingType.name === "int") {
            result = compiler.Ast("createWorkshopSettingInt", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1], sortOrder]);
        } else if (settingType.name === "float") {
            result = compiler.Ast("createWorkshopSettingFloat", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1], sortOrder]);
        } else if (settingType.name === "__enumType__") {
            result = compiler.Ast("createWorkshopSettingEnum", [
                settingCategory,
                settingName,
                settingDefault,
                compiler.Ast(
                    "__array__",
                    settingType.args,
                ),
                sortOrder,
            ]);
        } else {
            throw compiler.error("Invalid type '" + settingType.name + "' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float', 'bool', 'enum' or 'Hero'", settingType.fileStack);
        }
    }

    //Typecheck the default
    let expectedType = funcKw[result.name].args?.[2].type;
    if (expectedType === undefined) {
        compiler.error("Could not determine expected type for workshop setting '" + content.name + "'");
    }
    if (!compiler.isTypeSuitable(expectedType, result.args[2].type, false)) {
        compiler.error(compiler.getTypeCheckFailedMessage(result, i, expectedType, result.args[2]), result.args[2].fileStack);
    }
    return result;
};

//Check the other workshop setting functions here to not have 5 redundant files
astParsingFunctions.createWorkshopSettingBool = astParsingFunctions.createWorkshopSettingEnum = astParsingFunctions.createWorkshopSettingFloat = astParsingFunctions.createWorkshopSettingInt = astParsingFunctions.createWorkshopSettingHero = function (content, compiler) {
    content.args[0] = compiler.createSuitableWorkshopSettingString(content.args[0], false);
    content.args[1] = compiler.createSuitableWorkshopSettingString(content.args[1], true);
    if (content.name === "createWorkshopSettingEnum") {
        if (content.args[3].name !== "__array__") {
            compiler.error("Expected an array for argument 3 of function 'createWorkshopSettingEnum', but got '" + functionNameToString(content.args[3]) + "'", content.args[3].fileStack);
        }
        for (var i = 0; i < content.args[3].args.length; i++) {
            content.args[3].args[i] = compiler.createSuitableWorkshopSettingString(content.args[3].args[i], false);
        }
        if (content.args[2].name !== "__number__") {
            compiler.error("Expected a number literal for argument 2 of function 'createWorkshopSettingEnum', but got '" + functionNameToString(content.args[2]) + "'", content.args[2].fileStack);
        }
        if (content.args[2].args[0].numValue !== 0) {
            compiler.warn("w_workshop_setting_enum_default", "Default value for workshop setting enum should be 0, as otherwise the first option is not selectable via the UI.", content.args[2].fileStack);
        }
    }
    return content;
};

OverPyCompiler.prototype.createSuitableWorkshopSettingString = function (str: Ast, isName: boolean) {
    this.fileStack = str.fileStack;
    if (str.name !== "__customString__") {
        this.error("Expected a custom string literal for workshop setting, but got '" + functionNameToString(str) + "'");
    }
    if (str.args.length > 1) {
        this.error("Workshop setting strings cannot contain formatting arguments");
    }
    let text = str.args[0].name;
    if (getUtf8Length(text) > 128) {
        this.error("Workshop setting strings cannot be longer than 128 characters");
    }

    //If string is blank, add a fullwidth space as strings cannot only contain regular whitespace.
    if (!/\S/.test(text)) {
        text += String.fromCharCode(0x3000);
    }

    //Replace disallowed workshop setting chars
    text = text.replaceAll(":", "\u{E003A}").replaceAll("{", "\u{E007B}").replaceAll("}", "\u{E007D}");

    if (isName) {
        //Chars other than :{} are allowed, but are stripped out on copying, so replace them if the string is the setting name (category is not copied and enum names are copied as index)
        //The | char must also be replaced as it makes the setting not recognized on pasting
        text = text.replaceAll('"', "\u{E0022}").replaceAll("(", "\u{E0028}").replaceAll(")", "\u{E0029}").replaceAll(",", "\u{E002C}").replaceAll("/", "\u{E002F}").replaceAll(";", "\u{E003B}").replaceAll("\\", "\u{E005C}").replaceAll("|", "\u{E007C}");
        //Check for a duplicate setting. If there is one, add some useless whitespace to the end.
        var settingName = text;
        if (this.workshopSettingNames.includes(settingName)) {
            for (var i = 0; i < workshopSettingWhitespace.length && this.workshopSettingNames.includes(settingName); i++) {
                settingName = text + workshopSettingWhitespace[i];
            }
        }
        text = settingName;
        this.workshopSettingNames.push(text);
    }

    //Strings have a max of 128 chars, and must be literals
    if (getUtf8Length(text) > 128) {
        this.error("String '" + str.args[0].name + "' was pushed over the 128 characters limit due to OverPy modifications (is now " + getUtf8Length(text) + " characters long)");
    }

    if (this.workshopSettingNames.length > 128) {
        this.error("Cannot have more than 128 workshop settings");
    }

    str.args[0].name = text;
    str.stringTokens = this.parseStringTokens(text).map((t) => {
        if (t.type === "tag" || t.type === "holygrail") {
            t.type = "text";
        }
        return t;
    });

    return str;
}
