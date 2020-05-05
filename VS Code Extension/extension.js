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
const path = require("path");
const overpy = require("./overpy.js");
const clipboard = require("copy-paste");

//Defined as an array because VSCode doesn't collapse multiline strings.
const decompilerUI = [`

<head>
    <meta charset="utf-8">
</head>
<body>
    <div id="wrapper">
        <h1>OverPy Decompiler</h1>
        <p>Note: if you have an error, you will need to reload the page.</p>
        <textarea id="decompiler-input-text" placeholder="Copy paste your workshop code here"></textarea>
        <br>
        Language: <select id="language-select">
            <option value="en-US">English (en-US)</option>
            <option value="de-DE">German (de-DE)</option>
            <option value="es-ES">Spanish (Spain) (es-ES)</option>
            <option value="es-MX">Spanish (Mexico) (es-MX)</option>
            <option value="fr-FR">French (fr-FR)</option>
            <option value="it-IT">Italian (it-IT)</option>
            <option value="ja-JP">Japanese (ja-JP)</option>
            <option value="ko-KR">Korean (ko-KR)</option>
            <option value="pl-PL">Polish (pl-PL)</option>
            <option value="pt-BR">Portugese (Brazil) (pt-BR)</option>
            <option value="ru-RU">Russian (ru-RU)</option>
            <option value="zh-CN">Chinese (Simplified) (zh-CN)</option>
            <option value="zh-TW">Chinese (Traditional) (zh-TW)</option>
        </select>
        <br>
        <br>
        <button type="button" onclick="decompile()">Decompile</button>
    </div>
    

    <style>
        
        body {
            text-align: center;
        }

        div#wrapper {
            text-align: center;
            display: inline-block;
            width: 650px;
            height: 500px;
        }

        div#decompiler-input {
            position: relative;
            float: left;
            width: 400px;
            height: 450px;
            top: 50%;
            transform: translateY(-50%);
        }

        textarea#decompiler-input-text {
            width: 100%;
            height: 100%;
            resize: none;
        }

        #button-container {
            display: inline-block;
            text-align: center;
            width: 100%;
        }

        body, textarea, input {
            color: #CCCCCC;
            background-color: #222222;
            scrollbar-color: #CCCCCC #222222;
        }

        a {
            color: lightblue;
        }
        
    </style>

    <script>
    
        function decompile() {

            var workshopCode = document.getElementById("decompiler-input-text").value;
            var languageSelect = document.getElementById("language-select");
            var language = languageSelect.options[languageSelect.selectedIndex].value;

            const vscode = acquireVsCodeApi();
            vscode.postMessage({
                content: workshopCode,
                language: language,
            });

        }
    
    </script>
</body>


`];

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

const funcDoc = JSON.parse(JSON.stringify(Object.assign({}, overpy.actionKw, overpy.valueFuncKw)));

const constValues = JSON.parse(JSON.stringify(overpy.constantValues));
for (var key of Object.keys(constValues)) {
    if (key.startsWith("_")) {
        delete constValues[key];
    }
}
for (var key of Object.keys(constValues)) {
    constValues[key] = makeCompList(constValues[key]);
}
const funcList = JSON.parse(JSON.stringify(Object.assign({}, overpy.opyFuncs, overpy.opyKeywords)));

for (var func of Object.keys(funcDoc)) {
    if (!func.startsWith("_")) {
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


const metaRuleParamsCompList = makeCompList(metaRuleParams);

var defaultCompList;
var allFuncList;
var memberCompItem;
var normalMacros = {};
var memberMacros = {};
var globalVariables = {};
var playerVariables = {};
var subroutines = {};
function refreshAutoComplete() {

    defaultCompList = makeCompList(Object.assign({}, funcList, constValues, normalMacros, globalVariables, subroutines));
    allFuncList = Object.assign({}, funcList, memberFuncList, normalMacros, memberMacros);
    for (var func of Object.keys(allFuncList)) {
        allFuncList[func].sigHelp = makeSignatureHelp(func, allFuncList[func]);
    }
    memberCompItem = makeCompList(Object.assign({}, memberFuncList, memberMacros, playerVariables))
}
refreshAutoComplete();


function activate(context) {

    vscode.commands.registerCommand("extension.decompile", () => {
        var panel = vscode.window.createWebviewPanel("overpyDecompilerWebview", "OverPy Decompiler", vscode.ViewColumn.Active, {
            enableScripts: true,
        });
        panel.webview.html = decompilerUI[0];
        panel.webview.onDidReceiveMessage(message => {

            try {
                var decompiled = overpy.decompileAllRules(message.content, message.language);

                vscode.window.showSaveDialog({
                    canSelectMany: false,
                    saveLabel: "Choose the destination file (.opy)",
                    filters: {
                        "OverPy files": ["opy"],
                    },
                }).then(fileUri => {
                    //console.log(fileUri);
                    if (fileUri) {
                        //console.log('Selected file: ' + fileUri.fsPath);
                        const newFile = vscode.Uri.parse("untitled:"+fileUri.fsPath);
                        vscode.workspace.openTextDocument(newFile).then(document => {
                            const edit = new vscode.WorkspaceEdit();
                            edit.insert(newFile, new vscode.Position(0, 0), decompiled);
                            return vscode.workspace.applyEdit(edit).then(success => {
                                if (success) {
                                    vscode.window.showTextDocument(document);
                                } else {
                                    vscode.window.showInformationMessage('Error!');
                                }
                            });
                        });
                    }
                });

                panel.dispose();
                

            } catch (e) {
                if (e instanceof Error) {
                    vscode.window.showErrorMessage("Error: "+e.message+", contact Zezombye about this");
                } else {
                    console.error(e);
                }
            }
        })
    });

    vscode.commands.registerCommand('extension.compile', () => {
        try {

            var rootPath = vscode.window.activeTextEditor.document.fileName;
            rootPath = rootPath.replace(/\\/g, "/");
            rootPath = rootPath.substring(0, rootPath.lastIndexOf('/')+1);

            var compiledText = overpy.compile(vscode.window.activeTextEditor.document.getText(), vscode.workspace.getConfiguration("overpy").workshopLanguage, rootPath);
            for (var warning of compiledText.encounteredWarnings) {
                vscode.window.showWarningMessage("Warning: "+warning);
            }
            clipboard.copy(compiledText.result);
            vscode.window.showInformationMessage("Successfully compiled! (copied into clipboard)");
            fillAutocompletionMacros(compiledText.macros);
            fillAutocompletionVariables(compiledText.globalVariables, compiledText.playerVariables);
            fillAutocompletionSubroutines(compiledText.subroutines);
            refreshAutoComplete();
            console.log(compiledText.macros);
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
                            return constValues[word];
                        } else {
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
                } else {
                    return defaultCompList;
                }
            } catch (e) {
                console.error(e);
            }
            
        }
    }, '.', '@', '!');

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
                for (; i >= -position.character+1; i--) {
                    var currentChar = document.getText(new vscode.Range(position.translate(0, i+1), position.translate(0, i)));
                    var isInString = false;
                    var currentStringChar = "";
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
                        if (currentChar === currentStringChar && !(i > 0 && document.getText(new vscode.Range(position.translate(0, i), position.translate(0, i-1))) === "\\")) {
                            isInString = false;
                        }
                    }
                }
                var range = document.getWordRangeAtPosition(position.translate(0, i));
                if (range !== undefined) {
                    funcName = document.getText(range);
                } else {
                    return;
                }

                for (var func of Object.keys(allFuncList)) {
                    //console.log(func);
                    if (func === funcName) {
                        //console.log(func);
                        if ("sigHelp" in allFuncList[func] && allFuncList[func].sigHelp !== null) {
                            allFuncList[func].sigHelp.activeParameter = currentArgNb;
                            return allFuncList[func].sigHelp;
                        } else {
                            break;
                        }
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

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function makeCompList(obj) {
    return new vscode.CompletionList(Object.keys(obj).map(x => makeCompItem(x, obj[x])));
}

function makeCompItem(itemName, item) {
    var compItem = new vscode.CompletionItem();
    //console.log("item name = "+itemName+", item = "+item);
    compItem.label = itemName.endsWith("()") ? itemName.substring(0, itemName.length-2) : itemName;
    compItem.documentation = generateDocFromDoc(itemName, item);
    compItem.insertText = generateSnippetFromDoc(itemName, item);
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
    for (var globalVar of globalVars) {
        globalVariables[globalVar.name] = ({
            description: globalVar.index !== null ? "A global variable. (index: "+globalVar.index+")" : "A global variable.",
        })
    }
    for (var playerVar of playerVars) {
        playerVariables[playerVar.name] = ({
            description: playerVar.index !== null ? "A player variable. (index: "+playerVar.index+")" : "A player variable.",
        })
    }
}

function fillAutocompletionSubroutines(subroutineNames) {
    for (var subroutine of subroutineNames) {
        subroutines[subroutine.name+"()"] = ({
            args: [],
            description: subroutine.index ? "A subroutine. (index: "+subroutine.index+")" : "A subroutine.",
        })
    }
}

function generateDocFromDoc(itemName, item) {

    var isMemberFunction = false;
    if ("isMember" in item) {
        isMemberFunction = item.isMember;
    }

    var doc = "";
    if ("description" in item) {
        doc = item.description;
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

    if (infoStr) {
        result += "\n\n"+infoStr;
    }
     
    if (result === "") {
        console.log("No documentation found for "+itemName);
        return "No documentation was found for this function.";
    }

    return new vscode.MarkdownString(result);

}
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
    console.log(ruleParam);
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
            paramInfo.push(new vscode.ParameterInformation(getSuitableArgName(func.args[i].name), func.args[i].description));
            sigStr += getSuitableArgName(func.args[i].name)+": "+getSuitableArgType(func.args[i].type);
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

module.exports = {
	activate,
	deactivate
}

} catch (e) {
    console.log(e);
    throw e;
}