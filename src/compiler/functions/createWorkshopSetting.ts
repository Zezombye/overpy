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

astParsingFunctions.createWorkshopSetting = function(content) {

    //Types are capital here as a type mismatch won't allow pasting
    for (var i = 0; i < content.args.length; i++) {
        if (i !== 1 && i !== 2) { //can't properly check the CustomStringLiteral type yet
            if (!isTypeSuitable(funcKw[content.name].args[i].type, content.args[i].type, false)) {
                error(getTypeCheckFailedMessage(content, i, funcKw[content.name].args[i].type, content.args[i]));
            }
        }
    }

    var settingType = content.args[0];
    var settingCategory = content.args[1];
    var settingName = content.args[2];
    var settingDefault = content.args[3];
    var sortOrder = content.args[4];
    var result = null;

    settingCategory = createSuitableWorkshopSettingString(settingCategory, false);
    settingName = createSuitableWorkshopSettingString(settingName, true);


    if (settingType.args.length === 0) {
        if (settingType.name === "bool") {
            result = new Ast("__workshopSettingToggle__", [settingCategory, settingName, settingDefault, sortOrder]);
        } else if (settingType.name === "int") {
            result = new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "unsigned int") {
            result = new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, getAstFor0(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "signed int") {
            result = new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstFor0(), sortOrder]);
        } else if (settingType.name === "float") {
            result = new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "unsigned float") {
            result = new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, getAstFor0(), getAstForInfinity(), sortOrder]);
        } else if (settingType.name === "signed float") {
            result = new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstFor0(), sortOrder]);
        } else if (settingType.name === "Hero") {
            result = new Ast("__workshopSettingHero__", [settingCategory, settingName, settingDefault, sortOrder]);
        } else {
            error("Invalid type '"+settingType.name+"' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float', 'bool', 'enum' or 'Hero'");
        }
    } else {
        if (settingType.name === "int") {
            result = new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1], sortOrder]);
        } else if (settingType.name === "float") {
            result = new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1], sortOrder]);
        } else if (settingType.name === "__enumType__") {
            result = new Ast("__workshopSettingCombo__", [settingCategory, settingName, settingDefault, new Ast("__array__", settingType.args.map(x => createSuitableWorkshopSettingString(x, false))), sortOrder]);
        } else {
            error("Invalid type '"+settingType.name+"' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float', 'bool', 'enum' or 'Hero'");
        }
    }

    //Typecheck the default
    if (!isTypeSuitable(funcKw[result.name].args[2].type, result.args[2].type, false)) {
        error(getTypeCheckFailedMessage(result, i, funcKw[result.name].args[2].type, result.args[2]));
    }
    return result;
}

function createSuitableWorkshopSettingString(str, isName) {

    fileStack = str.fileStack;
    if (str.name !== "__customString__") {
        error("Expected a custom string literal for workshop setting, but got '"+functionNameToString(str)+"'");
    }
    if (str.args[1].name !== "null" || str.args[2].name !== "null" || str.args[3].name !== "null") {
        error("Workshop setting strings cannot contain formatting arguments or be longer than 128 characters");
    }

    //Replace "{", "}" and ":"
    str.args[0].name = str.args[0].name
        .replace(/\{/g, obfuscationMappings["{"])
        .replace(/\}/g, obfuscationMappings["}"])
        .replace(/:/g, obfuscationMappings[":"])

    //If string is blank, add U+2000 EN QUAD.
    if (!/\S/.test(str.args[0].name)) {
        str.args[0].name += String.fromCharCode(0x3000);
    }

    if (isName) {
        //Check for a duplicate setting. If there is one, add some useless whitespace to the end.
        var settingName = str.args[0].name;
        for (var i = 0; i < workshopSettingWhitespace.length && workshopSettingNames.includes(settingName); i++) {
            settingName = str.args[0].name + workshopSettingWhitespace[i];
        }
        str.args[0].name = settingName;
        workshopSettingNames.push(str.args[0].name);
    }

    //Strings have a max of 128 chars, and must be literals
    if (getUtf8Length(str.args[0].name) > 128) {
        error("String '"+str.args[0].name+"' was pushed over the 128 characters limit due to OverPy modifications (is now "+getUtf8Length(str.args[0].name)+" characters long)");
    }

    if (workshopSettingNames.length > 128) {
        error("Cannot have more than 128 workshop settings");
    }

    return str;
}
