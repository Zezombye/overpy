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
    var sortOrder = content.args[4].args[0].numValue;
    if (sortOrder === 0) {
        //0 is the default order, so just don't do anything.
        sortOrder = undefined;
    } else if (sortOrder > 63 || sortOrder < 0) {
        error("Sort order must be from 0 to 63");
    }

    settingCategory = createSuitableWorkshopSettingString(settingCategory, false);
    settingName = createSuitableWorkshopSettingString(settingName, true, sortOrder);


    if (settingType.args.length === 0) {
        if (settingType.name === "bool") {
            return new Ast("__workshopSettingToggle__", [settingCategory, settingName, settingDefault]);
        } else if (settingType.name === "int") {
            return new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstForInfinity()]);
        } else if (settingType.name === "unsigned int") {
            return new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, getAstFor0(), getAstForInfinity()]);
        } else if (settingType.name === "signed int") {
            return new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstFor0()]);
        } else if (settingType.name === "float") {
            return new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstForInfinity()]);
        } else if (settingType.name === "unsigned float") {
            return new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, getAstFor0(), getAstForInfinity()]);
        } else if (settingType.name === "signed float") {
            return new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, getAstForMinusInfinity(), getAstFor0()]);
        } else {
            error("Invalid type '"+settingType.name+"' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float' or 'bool'");
        }
    } else {
        if (settingType.name === "int") {
            return new Ast("__workshopSettingInteger__", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1]]);
        } else if (settingType.name === "float") {
            return new Ast("__workshopSettingReal__", [settingCategory, settingName, settingDefault, settingType.args[0], settingType.args[1]]);
        } else {
            error("Invalid type '"+settingType.name+"' for argument 1 of function 'createWorkshopSetting', expected 'int', 'float' or 'bool'");
        }
    }

    error("This shouldn't happen");
}

function createSuitableWorkshopSettingString(str, isName, sortOrder) {

    fileStack = str.fileStack;
    if (str.name !== "__customString__") {
        error("Expected a custom string literal for workshop setting, but got '"+functionNameToString(str)+"'");
    }
    if (str.args[1].name !== "null" || str.args[2].name !== "null" || str.args[3].name !== "null") {
        error("Workshop setting strings cannot contain formatting arguments or be longer than 128 bytes");
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

    //If a sort order is specified, add whitespace at the beginning (+ a zero width space U+200B because else a square is showing up)
    if (sortOrder !== undefined) {
        str.args[0].name = String.fromCharCode(0x200B) + workshopSettingWhitespace[sortOrder] + str.args[0].name;
    }

    if (isName) {
        //Check for a duplicate setting. If there is one, add some useless whitespace to the end.
        var settingName = str.args[0].name;
        for (var i = 0; i < workshopSettingWhitespace.length && workshopSettingNames.includes(settingName); i++) {
            settingName = str.args[0].name + workshopSettingWhitespace[i];
        }
        str.args[0].name = settingName;
        workshopSettingNames.push(str.args[0].name);
        //workshopSettingCategories[settingCategory.args[0].name].push(str.args[0].name);
    }

    //Strings have a max of 128 bytes, and must be literals
    if (getUtf8Length(str.args[0].name) > 128) {
        error("String '"+str.args[0].name+"' was pushed over the 128 bytes limit due to OverPy modifications (is now "+getUtf8Length(str.args[0].name)+" bytes long)");
    }

    if (workshopSettingNames.length > 64) {
        error("Cannot have more than 64 workshop settings");
    }

    return str;
}
