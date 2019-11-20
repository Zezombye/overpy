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
        <div id="decompiler-input">
            <textarea id="decompiler-input-text" placeholder="Copy paste your workshop code here"></textarea>
        </div>
    </div>
    
    <div id="button-container">
        Language: <select id="language-select">
            <option value="en-US">English</option>
            <option value="de-DE">German</option>
            <option value="es-ES">Spanish (Spain)</option>
            <option value="es-MX">Spanish (Mexico)</option>
            <option value="fr-FR">French</option>
            <option value="it-IT">Italian</option>
            <option value="ja-JP">Japanese</option>
            <option value="ko-KR">Korean</option>
            <option value="pl-PL">Polish</option>
            <option value="pt-BR">Portugese (Brazil)</option>
            <option value="ru-RU">Russian</option>
            <option value="zh-CN">Chinese (Simplified)</option>
            <option value="zh-TW">Chinese (Traditional)</option>
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

        div#var-input {
            float: right;
            width: 250px;
        }

        #global-var-input, #player-var-input {
            height: 200px;
            overflow-y: scroll;
            text-align: right;
            font-family: monospace;
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

const funcDoc = JSON.parse(JSON.stringify(overpy.actionKw.concat(overpy.valueFuncKw)));

var constTypes = JSON.parse(JSON.stringify(overpy.constantValues));

console.log(constTypes);
const funcList = JSON.parse(JSON.stringify(overpy.specialFuncs));

for (func of funcDoc) {
    if (func.opy.startsWith("_!") || !func.opy.startsWith("_")) {
        if (func.opy.startsWith("_!")) {
            func.opy = func.opy.substring(2);
        }
        funcList.push(func);
    }
}

const metaRuleParams = [
    {
        "opy": "@Rule",
        "values": []
    },{
        "opy": "@Event",
        "values": overpy.eventKw,
    },{
        "opy": "@Team",
        "values": overpy.eventTeamKw,
    },{
        "opy": "@Slot",
        "values": overpy.eventSlotKw,
    },{
        "opy": "@Hero",
        "values": constTypes["HERO CONSTANT"].values.map(x => ({
            ...x,
            opy: x.opy.substring("Hero.".length).toLowerCase()
        })),
    },{
        "opy": "@SuppressWarnings",
        "description": "Suppresses the specified warnings within the rule. Warnings must be separated by spaces.",
        "values": "[]",
    }
]

//Functions that come after a dot.
const memberFuncList = JSON.parse(JSON.stringify(overpy.specialMemberFuncs));

for (func of funcDoc) {
    if (func.opy.startsWith("_&")) {
        func.opy = func.opy.substring(2);
        func.isMember = true;
        memberFuncList.push(func);
    }
}

const memberConstList = [
    //Vector constants
    {
        opy: "x",
        description: "The x component of the specified vector, usually representing a leftward amount.",
        args: null,
    },{
        opy: "y",
        description: "The y component of the specified vector, usually representing an upward amount.",
        args: null,
    },{
        opy: "z",
        description: "The z component of the specified vector, usually representing a forward amount.",
        args: null,
    }
];


const constValues = getConstValues();
const constTypeList = Object.keys(constValues).map(x => ({opy: x})).filter(x => x.opy !== "Operation" && x.opy !== "Variable");
const constTypeListOpy = constTypeList.map(x => x.opy);

const metaRuleParamsCompList = makeCompList(metaRuleParams);

var defaultCompList;
var allFuncList;
var memberCompItem;
var normalMacros = [];
var memberMacros = [];
var globalVariables = [];
var playerVariables = [];
function refreshAutoComplete() {

    defaultCompList = makeCompList(funcList.concat(constTypeList).concat(normalMacros).concat(globalVariables));
    allFuncList = funcList.concat(memberFuncList).concat(normalMacros).concat(memberMacros);
    for (var func of allFuncList) {
        func.sigHelp = makeSignatureHelp(func);
    }
    memberCompItem = makeCompList(memberFuncList.concat(memberConstList).concat(memberMacros).concat(playerVariables))
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
                        if (constTypeListOpy.indexOf(word) === -1) {
                            return memberCompItem;
                        }
                        console.log("Autocomplete for class "+word);
                        console.log(constValues[word]);
                        try {
                            return constValues[word];
                        } catch (KeyError) {
                            return;
                        }
                    }
                } else if (context.triggerCharacter === '@') {
                    return metaRuleParamsCompList;
                } else {
                    return defaultCompList;
                }
            } catch (e) {
                console.error(e);
            }
            
        }
    }, '.', '@');

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
                        if (currentChar === currentStringChar) {
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

                for (var func of allFuncList) {
                    console.log(func.opy);
                    if (func.opy === funcName) {
                        console.log(func);
                        if ("sigHelp" in func && func.sigHelp !== null) {
                            func.sigHelp.activeParameter = currentArgNb;
                            return func.sigHelp;
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

//Populates all consts (LosCheck, Reeval, Button etc) based on the doc.
//This is needed because some consts (LosCheck/Reeval) are divided into different consts in the doc.
function getConstValues() {
    var result = {};
    for (constType of Object.values(constTypes)) {
        if (!("opy" in constType)) {
            continue;
        }
        if (!result.hasOwnProperty(constType.opy)) {
            result[constType.opy] = [];
        }
        for (value of constType.values) {
            value.opy = value.opy.substring(value.opy.indexOf(".")+1);
        }
        result[constType.opy] = result[constType.opy].concat(constType.values);
    }

    //Remove duplicates
    Object.keys(result).forEach(function(key, index) {
        result[key] = result[key].filter(function(item, pos) {
            return result[key].indexOf(item) === pos;
        })
        result[key] = makeCompList(result[key]);
    })
    //console.log(result);
    return result;
}

function makeCompList(array) {
    return new vscode.CompletionList(array.map(x => makeCompItem(x)));
}

function makeCompItem(item) {
    var compItem = new vscode.CompletionItem();
    compItem.label = item.opy.endsWith("()") ? item.opy.substring(0, item.opy.length-2) : item.opy;
    /*if (compItem.label.startsWith('@')) {
        compItem.label = compItem.label.substring(1);
    }*/
    compItem.documentation = generateDocFromDoc(item);
    compItem.insertText = generateSnippetFromDoc(item);
    return compItem;
}

function fillAutocompletionMacros(macros) {
    normalMacros = [];
    memberMacros = [];
    for (var macro of macros) {
        var convertedMacro = {};
        convertedMacro.opy = macro.name;
        if (macro.isFunction) {
            if (macro.args.length === 0) {
                convertedMacro.opy += "()";
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
            memberMacros.push(convertedMacro);
        } else {
            normalMacros.push(convertedMacro);
        }
    }
}

function fillAutocompletionVariables(globalVars, playerVars) {
    globalVariables = globalVars.map(x => ({
        opy: x.name,
        description: "A global variable. (index: "+x.index+")",
    }));
    playerVariables = playerVars.map(x => ({
        opy: x.name,
        description: "A player variable. (index: "+x.index+")",
    }));
}

function generateDocFromDoc(item) {

    var isMemberFunction = false;
    if ("isMember" in item) {
        isMemberFunction = item.isMember;
    }

    var doc = null;
    if ("description" in item) {
        doc = item.description;
    }
    if (doc === null) {
        console.log("No documentation found for "+item.opy);
        return "No documentation was found for this function.";
    }

    
    var result = "";
    var argStr = "";

    result += doc;
    if ("args" in item && item.args !== null && item.args.length > 0) {
        //TODO 1er arg player
        for (var arg of item.args) {
            if (!(isMemberFunction && arg.type === "PLAYER")) {
                argStr += "- `"+getSuitableArgName(arg.name)+"`: "+arg.description+"\n";
            }
        }
    }

    if (argStr !== "") {
        result += "\n\nArguments:\n" + argStr;
    }
     

    return new vscode.MarkdownString(result);

}
function generateSnippetFromDoc(item) {
    
    if (item.opy.startsWith('@')) {
        return new vscode.SnippetString(getSnippetForMetaRuleParam(item.opy));
    }

    if (item.snippet !== undefined) {
        return new vscode.SnippetString(item.snippet);
    }

    if (item.args === null || item.args === undefined) {
        return new vscode.SnippetString(item.opy);
    } else {
        var isMemberFunction = false;
        if ("isMember" in item) {
            isMemberFunction = item.isMember;
        }
        if (item.args.length === 0 || item.args.length === 1 && isMemberFunction) {
            if (!item.opy.endsWith("()")) {
                item.opy += "()";
            }
            return new vscode.SnippetString(item.opy);
        } else {
            return new vscode.SnippetString(item.opy/*+"("*/);
        }
    }
    
}



function getSnippetForMetaRuleParam(param) {

    if (param === "@Rule") {
        return 'Rule "$0"';
    }

    var result = param.substring(1) + " ${1|";
    var ruleParam = null;
    for (metaRuleParam of metaRuleParams) {
        if (metaRuleParam.opy === param) {
            ruleParam = metaRuleParam;
            break;
        }
    }
    if (ruleParam === null) {
        console.log("Could not find param "+param);
        return param;
    }
    result += ruleParam.values.map(x => x.opy).join(",");
    result += "|}$0";
    return result;
}

function getSnippetFromArg(index, arg) {

    var result = "";

    if ([
        "PLAYER",
        "POSITION",
        "ANY",
        "NUMBER",
        "TEAM",
        "BOOLEAN",
        "VECTOR",
        "HERO",
        "DIRECTION",
    ].indexOf(arg.type) > -1) {
        //Generic type (not an enum)
        return "${"+index+":"+getSuitableArgName(arg.name)+"}";
    } else {
        //Enum
        var constTypeMatch = null;
        for (var constType of constTypes) {
            if (constType.name === arg.type) {
                constTypeMatch = constType;
                break;
            }
        }
        if (constTypeMatch === null) {
            console.log("Could not find arg type "+arg.type);
            return "${"+index+":"+getSuitableArgName(arg.name)+"}";
        }
        return constTypeMatch.opy+"."+"${"+index+"|"+constTypeMatch.values.map(x => x.replace(/ /g, "_")).join(",")+"|}";

    }

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

    if (type in constTypes) {
        return constTypes[type].opy;
    } else if (type === "ANY") {
        return "Object";
    } else if (type === "ARRAY") {
        return "Object[]";
    } else if (type === "POSITION") {
        return "Location";
    } else {
        type = type[0].toUpperCase() + type.substring(1).toLowerCase();
    }
    //console.log(type);
    return type;
}

function makeSignatureHelp(func) {
    if (func.args === null || func.args === undefined || func.args.length === 0) {
        return null;
    }

    var isMemberFunction = false;
    if ("isMember" in func) {
        isMemberFunction = func.isMember;
    }

    var paramInfo = [];
    var sigStr = func.opy + "(";

    for (var i = 0; i < func.args.length; i++) {
        if (!(i === 0 && func.args[i].type === "PLAYER" && isMemberFunction)) {
            paramInfo.push(new vscode.ParameterInformation(getSuitableArgName(func.args[i].name), func.args[i].description));
            sigStr += getSuitableArgType(func.args[i].type)+" "+getSuitableArgName(func.args[i].name);
            if (i < func.args.length-1) {
                sigStr += ", ";
            }
        }
    }

    sigStr += ")";
    
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
}