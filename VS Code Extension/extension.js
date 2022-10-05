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

try{

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const overpy = require("./overpy.js");
const overpyExtension = vscode.extensions.getExtension("zezombye.overpy");
const overpyExtensionPath = encodeURI(overpyExtension.extensionPath.replace(/\\/g, "/"));


const overpyTemplate = [`
#OverPy starter pack

settings {
    "main": {
        "description": "Some awesome game mode"
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopIsland"
            ]
        },
        "general": {
            "heroLimit": "off",
            "respawnTime%": 30
        }
    }
}

rule "Teleport player on pressing interact":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.teleport(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection()*5)
    #Hold the player in place, to reset falling velocity
    eventPlayer.startForcingPosition(eventPlayer.getPosition(), false)
    wait()
    eventPlayer.stopForcingPosition()

rule "Display position":
    @Event eachPlayer
    print("Position of {}: {}".format(eventPlayer, eventPlayer.getPosition()))
`]

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

const funcDoc = JSON.parse(JSON.stringify(Object.assign({}, overpy.actionKw, overpy.valueFuncKw)));
const stringEntities = generateStringEntitiesDescription(JSON.parse(JSON.stringify(overpy.opyStringEntities)));

const defaultConstValues = JSON.parse(JSON.stringify(Object.assign({}, overpy.constantValues, overpy.opyConstants, overpy.opyModules)));
var constValues = {};
const heroKw = JSON.parse(JSON.stringify(overpy.heroKw));
for (var key of Object.keys(defaultConstValues)) {
    if (key.startsWith("_")) {
        delete defaultConstValues[key];
    }
    if (key.endsWith("Literal")) {
        defaultConstValues[key.substring(0, key.length-"Literal".length)] = defaultConstValues[key]
        delete defaultConstValues[key];
    }
}
for (var key of Object.keys(defaultConstValues)) {
    var tmpDescription = defaultConstValues[key].description;
    defaultConstValues[key] = makeCompList(defaultConstValues[key]);
    defaultConstValues[key].description = tmpDescription;
}

const funcList = JSON.parse(JSON.stringify(Object.assign({}, overpy.opyFuncs, overpy.opyKeywords)));

const moduleFuncList = {}
for (let module in overpy.opyModules) {
    //console.log(overpy.opyModules[module])
    var moduleFuncs = JSON.parse(JSON.stringify(overpy.opyModules[module]));
    for (let func in moduleFuncs) {
        if (typeof moduleFuncs[func] === "string") {
            delete moduleFuncs[func];
            continue;
        }
        moduleFuncs[func]["class"] = module;
    }
    Object.assign(moduleFuncList, moduleFuncs);
}
/*console.log("module func list");
console.log(moduleFuncList);*/

for (var func of Object.keys(funcDoc)) {
    if (!func.startsWith("_") && !func.includes(".")) {
        funcList[func] = funcDoc[func];
    }
}

const metaRuleParams = JSON.parse(JSON.stringify(overpy.annotations));

const preprocessingDirectivesCompList = makeCompList(JSON.parse(JSON.stringify(overpy.preprocessingDirectives)));

//Functions that come after a dot.
const memberFuncList = JSON.parse(JSON.stringify(overpy.opyMemberFuncs));

for (var func of Object.keys(funcDoc)) {
    if (func.startsWith("_&")) {
        var funcName = func.substring(2);
        funcDoc[funcName] = funcDoc[func];
        delete funcDoc[func];
        funcDoc[funcName].isMember = true;
        memberFuncList[funcName] = funcDoc[funcName];
    }
}

const stringEntitiesCompList = makeCompList(stringEntities);
const metaRuleParamsCompList = makeCompList(metaRuleParams);

var extensionDescription = "";

var defaultCompList;
var allFuncList;
var memberCompItem;
var normalMacros = {};
var memberMacros = {};
var globalVariables = {};
var playerVariables = {};
var subroutines = {};
var userEnums = {};
var activatedExtensions = [];
var spentExtensionPoints = -1;
var availableExtensionPoints = -1;
function refreshAutoComplete() {

    constValues = Object.assign({}, defaultConstValues);
    for (var e in userEnums) {
        if (!(e in constValues)) {
            constValues[e] = {
                "description": "A user-defined enum.",
                "items": [],
            };
        }
        for (var enumMember in userEnums[e]) {
            var description = "A user-defined enum member.";
            try {
                description += "\n\nValue: `"+overpy.astToOpy(userEnums[e][enumMember])+"`"
            } catch (e) {}
            
            constValues[e].items.push(makeCompItem(enumMember, {"description": description}));
        }
    }

    for (var type of ["Beam", "Effect", "DynamicEffect"]) {
        constValues[type] = Object.assign({}, constValues[type]) //prevent modifying defaultConstValues
        constValues[type].items = constValues[type].items.filter(x => {
            return !("extension" in overpy.constantValues[type][x.label]) || activatedExtensions.includes(overpy.constantValues[type][x.label].extension)
        })
    }

    //console.log(constValues);
    var extensionDoc = preprocessingDirectivesCompList.items.filter(x => x.label === "extension")[0]
    extensionDoc.documentation = new vscode.MarkdownString(overpy.preprocessingDirectives.extension.description.replace("__extensionDescription__", spentExtensionPoints < 0 ? "Compile to get a breakdown of extension points and to show values in the autocompletion." : "As of latest compilation, you are using **"+spentExtensionPoints+(availableExtensionPoints < 0 ? "" : "/"+availableExtensionPoints)+"** points."))

    defaultCompList = makeCompList(Object.assign({}, funcList, constValues, normalMacros, globalVariables, subroutines));
    allFuncList = Object.assign({}, funcList, memberFuncList, moduleFuncList, normalMacros, memberMacros);
    for (var func of Object.keys(allFuncList)) {
        allFuncList[func].sigHelp = makeSignatureHelp(func, allFuncList[func]);
    }
    memberCompItem = makeCompList(Object.assign({}, memberFuncList, memberMacros, playerVariables))
}
refreshAutoComplete();

function activate(context) {

    vscode.commands.registerCommand('extension.insertTemplate', () => {
        try {

            var editor = vscode.window.activeTextEditor;
            const position = editor.selection.active;
            vscode.window.activeTextEditor.edit(editBuilder => {
                editBuilder.insert(position, overpyTemplate[0]);
            });

            vscode.window.showInformationMessage("Template successfully inserted!");

        } catch (e) {
            console.error(e);
            vscode.window.showErrorMessage("Error: "+e.message);
        }
    });

    vscode.commands.registerCommand("extension.decompile", async () => {
        try {
            
            var clipboardContent = await vscode.env.clipboard.readText();
            if (!clipboardContent) {
                vscode.window.showErrorMessage("Error: Clipboard is empty. Copy to clipboard the workshop code you want to decompile.");
                return;
            }

            var decompiledText = overpy.decompileAllRules(clipboardContent, vscode.workspace.getConfiguration("overpy").workshopLanguage);
            vscode.env.clipboard.writeText(decompiledText);
            vscode.window.showInformationMessage("Successfully decompiled! (copied into clipboard)");

        } catch (e) {
            if (e instanceof Error) {
                vscode.window.showErrorMessage("Error: "+e.message+", contact Zezombye about this");
            } else {
                console.error(e);
            }
        }
    });

    vscode.commands.registerCommand('extension.compile', () => {
        try {

            var rootPath = vscode.window.activeTextEditor.document.fileName;
            rootPath = rootPath.replace(/\\/g, "/");
            rootPath = rootPath.substring(0, rootPath.lastIndexOf('/')+1);

            var compiledText = overpy.compile(vscode.window.activeTextEditor.document.getText(), vscode.workspace.getConfiguration("overpy").workshopLanguage, rootPath);
            //console.log("encountered warnings:");
            //console.log(compiledText.encounteredWarnings);
            for (var warning of compiledText.encounteredWarnings) {
                vscode.window.showWarningMessage("Warning: "+warning);
            }
            vscode.env.clipboard.writeText(compiledText.result);
            vscode.window.showInformationMessage("Successfully compiled! (copied into clipboard" + (vscode.workspace.getConfiguration("overpy").showElementCountOnCompile ? "; "+compiledText.nbElements+" elements" : "")+")");
            fillAutocompletionMacros(compiledText.macros);
            fillAutocompletionVariables(compiledText.globalVariables, compiledText.playerVariables);
            fillAutocompletionSubroutines(compiledText.subroutines);
            fillAutocompletionEnums(compiledText.enumMembers);
            activatedExtensions = compiledText.activatedExtensions;
            spentExtensionPoints = compiledText.spentExtensionPoints;
            availableExtensionPoints = compiledText.availableExtensionPoints;
            refreshAutoComplete();
            //console.log(compiledText.macros);
        } catch (e) {
            if (e instanceof Error) {
                console.error(e);
                vscode.window.showErrorMessage("Error: "+e.message);
            } else {
                console.error(e);
            }
        }
    });

    vscode.languages.registerCompletionItemProvider("overpy", {
        provideCompletionItems(document, position, token, context) {
            //console.log(document.getText(document.getWordRangeAtPosition(position)));
            try {
                if (context.triggerCharacter === '.') {

                    var range = document.getWordRangeAtPosition(position.translate(0, -1));

                    if (range === undefined) {
                        //No word; probably a parenthesis.
                        return memberCompItem;
                    } else {
                        var word = document.getText(range);
                        if (word in constValues) {
                            console.log(constValues[word]);
                            return constValues[word];

                        //do not return completion suggestions for number decimals
                        } else if (isNaN(word)) {
                            return memberCompItem;
                        }
                    }
                } else if (context.triggerCharacter === '@') {
                    return metaRuleParamsCompList;
                } else if (context.triggerCharacter === '!') {
                    if (document.getText(new vscode.Range(position.translate(0, -2), position.translate(0, -1))) === "#") {
                        return preprocessingDirectivesCompList;
                    } else {
                        return;
                    }
                } else if (context.triggerCharacter === "&") {
                    //delete the '&'
                    /*vscode.window.showTextDocument(document, vscode.ViewColumn.Active, false).then(editor => {
                        editor.edit(editBuilder => {
                            editBuilder.delete(new vscode.Range(position.translate(0, -1), position));
                        });
                    });*/
                    if (document.getText(new vscode.Range(position.translate(0, -2), position.translate(0, -1))) === "\\") {
                        return stringEntitiesCompList;
                    } else {
                        return;
                    }
                } else {
                    return defaultCompList;
                }
            } catch (e) {
                console.error(e);
            }
            
        }
    }, '.', '@', '!', '&');

    vscode.languages.registerSignatureHelpProvider("overpy", {
        provideSignatureHelp(document, position, token, context) {
            try {
                if (context.triggerCharacter === ')') {
                    return;
                }
                var funcName = null;
                var currentArgNb = 0;
                var parenthesisLevel = 0;
                var i = -1;
                var isInString = false;
                var currentStringChar = "";
                //console.log("Finding position");
                for (; i >= -position.character+1; i--) {
                    var currentChar = document.getText(new vscode.Range(position.translate(0, i+1), position.translate(0, i)));
                    //console.log("char: "+currentChar+", is in string: "+isInString+", string char: "+currentStringChar);
                    if (!isInString) {
                        if (currentChar === ')' || currentChar === ']' || currentChar === '}') {
                            parenthesisLevel++;
                        } else if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
                            parenthesisLevel--;
                            if (parenthesisLevel < 0 && currentChar === '(') {
                                break;
                            }
                        } else if (currentChar === '"' || currentChar === '\'') {
                            isInString = true;
                            currentStringChar = currentChar;
                        } else if (parenthesisLevel === 0 && currentChar === ',') {
                            currentArgNb++;
                        }
                    } else {
                        if (currentChar === currentStringChar && (i === 0 || document.getText(new vscode.Range(position.translate(0, i), position.translate(0, i-1))) !== "\\")) {
                            isInString = false;
                        }
                    }
                }
                if (isInString) {
                    return;
                }
                var range = document.getWordRangeAtPosition(position.translate(0, i));
                if (range !== undefined) {
                    funcName = document.getText(range);
                } else {
                    return;
                }

                console.log(funcName);
                if (funcName in allFuncList) {
                    console.log(func);
                    console.log("current arg for func "+funcName+" is "+currentArgNb)
                    if ("sigHelp" in allFuncList[funcName] && allFuncList[funcName].sigHelp !== null) {
                        allFuncList[funcName].sigHelp.activeParameter = currentArgNb;
                        return allFuncList[funcName].sigHelp;
                    }
                }
                return;
            } catch (e) {
                console.log(e);
            }
        }
    }, ',', '(', ')');

    vscode.workspace.onDidSaveTextDocument((document) => {
        if (document.languageId === "overpy" && document.uri.scheme === "file" && vscode.workspace.getConfiguration("overpy").compileOnSave && (!vscode.workspace.getConfiguration("overpy").onlySaveOnMainFile || !document.getText().startsWith("#!mainFile "))) {
            vscode.commands.executeCommand("extension.compile");
        }
    })
    
    vscode.workspace.onDidOpenTextDocument((document) => {
        //console.log("opened text document");
        //console.log("add template on new file: "+ vscode.workspace.getConfiguration("overpy").addTemplateOnNewFile);
        if (document.languageId === "overpy" && vscode.workspace.getConfiguration("overpy").addTemplateOnNewFile && document.getText().length === 0) {
            
            vscode.window.showTextDocument(document, vscode.ViewColumn.Active, false).then(editor => {
                editor.edit(editBuilder => {
                    editBuilder.insert(new vscode.Position(0, 0), overpyTemplate[0]);
                });
            });
        }
    })
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function makeCompList(obj) {
    var result = new vscode.CompletionList(Object.keys(obj).filter(x => typeof obj[x] === "object").map(x => makeCompItem(x, obj[x])));
    if ("description" in obj) {
        result.description = obj.description;
    }
    return result;
}

function makeCompItem(itemName, item) {
    var compItem = new vscode.CompletionItem();
    //console.log("item name = "+itemName+", item = "+item);
    compItem.label = itemName.endsWith("()") ? itemName.substring(0, itemName.length-2) : itemName;
    compItem.documentation = generateDocFromDoc(itemName, item);
    compItem.insertText = generateSnippetFromDoc(itemName, item);
    /*if (itemName.startsWith("&")) {
        compItem.additionalTextEdits = [vscode.TextEdit.delete(//compItem.range = new vscode.Range(new vscode.Position(0,0), new vscode.Position(0,1));
    }*/
    return compItem;
}

function fillAutocompletionMacros(macros) {
    normalMacros = {};
    memberMacros = {};
    for (var macro of macros) {
        var convertedMacro = {};
        var macroName = macro.name;
        if (macro.isFunction) {
            if (macro.args.length === 0) {
                macroName += "()";
            } else {
                convertedMacro.args = [];
                for (var arg of macro.args) {
                    convertedMacro.args.push({
                        name: arg,
                        type: "Object",
                    });
                }
            }
        }
        if (macro.isScript) {
            convertedMacro.description = "This macro executes the script: "+macro.scriptPath;
        } else {
            convertedMacro.description = "This macro resolves to:\n\n"+macro.replacement;
        }
        if (macro.isMember) {
            memberMacros[macroName] = convertedMacro;
        } else {
            normalMacros[macroName] = convertedMacro;
        }
    }
}

function fillAutocompletionVariables(globalVars, playerVars) {
    globalVariables = {};
    for (var globalVar of globalVars) {
        globalVariables[globalVar.name] = ({
            description: globalVar.index !== null ? "A global variable. (index: "+globalVar.index+")" : "A global variable.",
        })
    }
    playerVariables = {};
    for (var playerVar of playerVars) {
        playerVariables[playerVar.name] = ({
            description: playerVar.index !== null ? "A player variable. (index: "+playerVar.index+")" : "A player variable.",
        })
    }
}

function fillAutocompletionSubroutines(subroutineNames) {
    subroutines = {};
    for (var subroutine of subroutineNames) {
        subroutines[subroutine.name+"()"] = ({
            args: [],
            description: subroutine.index ? "A subroutine. (index: "+subroutine.index+")" : "A subroutine.",
        })
    }
}

function fillAutocompletionEnums(enums) {
    userEnums = enums;
}

function generateDocFromDoc(itemName, item) {

    var isMemberFunction = false;
    //console.log(item)
    if ("isMember" in item) {
        isMemberFunction = item.isMember;
    }

    var doc = "";
    if ("description" in item) {
        doc = item.description;
    }

    if (doc === "__iconDescription__") {
        return new vscode.MarkdownString("![](file:///"+overpyExtensionPath+"/img/icons/"+itemName.toLowerCase()+".png) \n\n \n\n \n\n \n\n ")
    }
    
    var result = "";
    var infoStr = "";
    var argStr = "";

    result += doc;
    if ("args" in item && item.args !== null && (item.args.length > 0 && !isMemberFunction || item.args.length > 1)) {
        for (var i = (isMemberFunction ? 1 : 0); i < item.args.length; i++) {
            argStr += "- `"+getSuitableArgName(item.args[i].name)+"`: "+item.args[i].description+"\n";
        }
    }

    if (argStr !== "") {
        infoStr += "Arguments:\n" + argStr+"\n";
    }
    if (isMemberFunction) {
        infoStr += "Class: `Player`  \n";
    } else if ("class" in item) {
        infoStr += "Class: `"+item.class + "`  \n";
    }

    if ("return" in item) {
        infoStr += "Returns: `"+overpy.typeToString(item.return)+"`  \n";
    }

    if ("extension" in item) {
        infoStr += "Part of extension `"+item.extension+"`.\n";
    }

    if (infoStr) {
        result += "\n\n"+infoStr;
    }
     
    if (result === "") {
        console.log("No documentation found for "+itemName);
        return "No documentation was found for this function.";
    }

    return new vscode.MarkdownString(result);
}

/*function getAbilityIconsDoc() {
    var result = `
Hero | Ability 1 | Ability 2 | Ultimate
---- | --------- | --------- | --------
`;
    for (var hero in heroKw) {
        console.log(hero);
        result += heroKw[hero]["en-US"]+" | ";
        result += "![](file:///"+overpyExtensionPath+"/img/abilities/"+encodeURI(heroKw[hero].ability1["en-US"])+".png) | ";
        if (heroKw[hero].ability2) {
            result += "![](file:///"+overpyExtensionPath+"/img/abilities/"+encodeURI(heroKw[hero].ability2["en-US"])+".png)";
        } else {
            result += "/";
        }
        result += " | ";
        result += "![](file:///"+overpyExtensionPath+"/img/abilities/"+encodeURI(heroKw[hero].ultimate["en-US"])+".png)\n";
    }
    console.log(result);
    return result;
}*/

function generateSnippetFromDoc(itemName, item) {
    
    if (itemName.startsWith('@')) {
        return new vscode.SnippetString(getSnippetForMetaRuleParam(itemName));
    }

    if (item.snippet !== undefined) {
        return new vscode.SnippetString(item.snippet);
    }

    if (item.args === null || item.args === undefined) {
        return new vscode.SnippetString(itemName);
    } else {
        var isMemberFunction = false;
        if ("isMember" in item) {
            isMemberFunction = item.isMember;
        }
        if (item.args.length === 0 || item.args.length === 1 && isMemberFunction) {
            if (!itemName.endsWith("()")) {
                itemName += "()";
            }
            return new vscode.SnippetString(itemName);
        } else {
            return new vscode.SnippetString(itemName);
        }
    }
    
}

function getSnippetForMetaRuleParam(param) {

    if (param === "@Name") {
        return 'Name "$0"';
    }

    var result = param.substring(1);
    try {
        var ruleParam = metaRuleParams[param];
    } catch (e) {
        console.log("Could not find param "+param);
        return param;
    }
    //console.log(ruleParam);
    if (ruleParam.args && ruleParam.args.length > 0) {
        if (ruleParam.args[0].values) {
            result += " ${1|";
            result += ruleParam.args[0].values.filter(x => !x.startsWith("__")).join(",");
            result += "|}";
        } else {
            result += " ";
        }
    }
    return result;
}

function getSuitableArgName(arg) {
    arg = arg.toLowerCase()
    if (arg === "visible to") {
        arg = "visibility";
    }
    arg = arg.split(" ").map(x => x[0].toUpperCase()+x.substring(1).toLowerCase()).join("");
    arg = arg[0].toLowerCase()+arg.substring(1);
    return arg;
}

function getSuitableArgType(type) {
    return overpy.typeToString(type);
}

function makeSignatureHelp(funcName, func) {
    if (func.args === null || func.args === undefined || func.args.length === 0) {
        return null;
    }

    var isMemberFunction = false;
    if ("isMember" in func) {
        isMemberFunction = func.isMember;
    }

    var paramInfo = [];
    var sigStr = "";

    if (isMemberFunction) {
        sigStr += "Player.";
    } else if ("class" in func) {
        sigStr += func.class + ".";
    }
    
    sigStr += funcName+"(";

    for (var i = 0; i < func.args.length; i++) {
        if (!(i === 0 && isMemberFunction)) {
            var argName = getSuitableArgName(func.args[i].name);
            paramInfo.push(new vscode.ParameterInformation([sigStr.length, sigStr.length+argName.length], func.args[i].description));
            //console.log(func.args[i].name);
            sigStr += argName+": "+getSuitableArgType(func.args[i].type);
            if (i < func.args.length-1) {
                sigStr += ", ";
            }
        }
    }

    sigStr += ")";

    if (func.return) {
        sigStr += " -> "+overpy.typeToString(func.return);
        //throw new Error("Function '"+funcName+"' has no Return type");
    }
    
    var sigInfo = new vscode.SignatureInformation(sigStr);
    sigInfo.parameters = paramInfo;
    var sigHelp = new vscode.SignatureHelp();
    sigHelp.activeSignature = 0;
    sigHelp.activeParameter = 0;
    sigHelp.signatures = [sigInfo];

    return sigHelp;
}

function generateStringEntitiesDescription(strEntities) {
    for (var entity in strEntities) {
        strEntities[entity].description = "# "+String.fromCodePoint(strEntities[entity].codepoint)+"  \nU+"+strEntities[entity].codepoint.toString(16).padStart(4, "0").toUpperCase()+" \n\n"+strEntities[entity].description;
        /*if (entity === "zero_width_space") {
            //Do not actually insert a zero width space, else it will be impossible to know where it comes from.
            strEntities[entity].snippet = "\\z";
        } else {
            strEntities[entity].snippet = String.fromCodePoint(strEntities[entity].codepoint);
        }*/
        strEntities[entity].snippet = entity+";";
        //strEntities["&"+entity+";"] = strEntities[entity];
        //delete strEntities[entity];
    }
    return strEntities;
}

module.exports = {
	activate,
	deactivate
}

} catch (e) {
    console.log(e);
    throw e;
}