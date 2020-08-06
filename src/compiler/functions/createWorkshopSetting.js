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
    if (!isTypeSuitable(funcKw[content.name].args[0].type, content.args[0].type, false)) {
        error(getTypeCheckFailedMessage(content, 0, funcKw[content.name].args[0].type, content.args[0]));
    }
    if (!isTypeSuitable(funcKw[content.name].args[3].type, content.args[3].type, false)) {
        error(getTypeCheckFailedMessage(content, 3, funcKw[content.name].args[3].type, content.args[3]));
    }

    var settingType = content.args[0];
    var settingCategory = content.args[1];
    var settingName = content.args[2];

    settingCategory = createSuitableWorkshopSettingString(settingCategory);
    settingName = createSuitableWorkshopSettingString(settingName, settingCategory);

    var settingDefault = content.args[3];

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

function createSuitableWorkshopSettingString(str, settingCategory) {

    fileStack = str.fileStack;
    if (str.name !== "__customString__") {
        error("Expected a custom string for workshop setting, but got '"+functionNameToString(str)+"'");
    }
    if (str.args[1].name !== "null" || str.args[2].name !== "null" || str.args[3].name !== "null") {
        error("Workshop setting strings cannot contain formatting arguments or be longer than 128 bytes");
    }

    /*//Strings have a max of 128 bytes, and must be literals
    if (getUtf8Length(str.name) > 128) {
        error("String '"+str.name+"' must be 128 bytes or less for workshop settings, but is "+getUtf8Length(str.name)+" bytes long");
    }*/

    //Replace "{", "}" and ":"
    str.args[0].name = str.args[0].name
        .replace(/\{/g, obfuscationMappings["{"])
        .replace(/\}/g, obfuscationMappings["}"])
        .replace(/:/g, obfuscationMappings[":"])

    //If string is blank, add U+2000 EN QUAD.
    if (!/\S/.test(str.args[0].name)) {
        str.args[0].name += String.fromCharCode(0x2000);
    }
    return str;
}
