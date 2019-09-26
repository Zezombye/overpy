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
        <div id="var-input">
            <p>Global var names</p>
            <div id="global-var-input">
                <p>A: <input type='text' id='global-var-a'/></p>
                <p>B: <input type='text' id='global-var-b'/></p>
                <p>C: <input type='text' id='global-var-c'/></p>
                <p>D: <input type='text' id='global-var-d'/></p>
                <p>E: <input type='text' id='global-var-e'/></p>
                <p>F: <input type='text' id='global-var-f'/></p>
                <p>G: <input type='text' id='global-var-g'/></p>
                <p>H: <input type='text' id='global-var-h'/></p>
                <p>I: <input type='text' id='global-var-i'/></p>
                <p>J: <input type='text' id='global-var-j'/></p>
                <p>K: <input type='text' id='global-var-k'/></p>
                <p>L: <input type='text' id='global-var-l'/></p>
                <p>M: <input type='text' id='global-var-m'/></p>
                <p>N: <input type='text' id='global-var-n'/></p>
                <p>O: <input type='text' id='global-var-o'/></p>
                <p>P: <input type='text' id='global-var-p'/></p>
                <p>Q: <input type='text' id='global-var-q'/></p>
                <p>R: <input type='text' id='global-var-r'/></p>
                <p>S: <input type='text' id='global-var-s'/></p>
                <p>T: <input type='text' id='global-var-t'/></p>
                <p>U: <input type='text' id='global-var-u'/></p>
                <p>V: <input type='text' id='global-var-v'/></p>
                <p>W: <input type='text' id='global-var-w'/></p>
                <p>X: <input type='text' id='global-var-x'/></p>
                <p>Y: <input type='text' id='global-var-y'/></p>
                <p>Z: <input type='text' id='global-var-z'/></p>
            </div>
            <p>Player var names</p>
            <div id="player-var-input">
                <p>A: <input type='text' id='player-var-a'/></p>
                <p>B: <input type='text' id='player-var-b'/></p>
                <p>C: <input type='text' id='player-var-c'/></p>
                <p>D: <input type='text' id='player-var-d'/></p>
                <p>E: <input type='text' id='player-var-e'/></p>
                <p>F: <input type='text' id='player-var-f'/></p>
                <p>G: <input type='text' id='player-var-g'/></p>
                <p>H: <input type='text' id='player-var-h'/></p>
                <p>I: <input type='text' id='player-var-i'/></p>
                <p>J: <input type='text' id='player-var-j'/></p>
                <p>K: <input type='text' id='player-var-k'/></p>
                <p>L: <input type='text' id='player-var-l'/></p>
                <p>M: <input type='text' id='player-var-m'/></p>
                <p>N: <input type='text' id='player-var-n'/></p>
                <p>O: <input type='text' id='player-var-o'/></p>
                <p>P: <input type='text' id='player-var-p'/></p>
                <p>Q: <input type='text' id='player-var-q'/></p>
                <p>R: <input type='text' id='player-var-r'/></p>
                <p>S: <input type='text' id='player-var-s'/></p>
                <p>T: <input type='text' id='player-var-t'/></p>
                <p>U: <input type='text' id='player-var-u'/></p>
                <p>V: <input type='text' id='player-var-v'/></p>
                <p>W: <input type='text' id='player-var-w'/></p>
                <p>X: <input type='text' id='player-var-x'/></p>
                <p>Y: <input type='text' id='player-var-y'/></p>
                <p>Z: <input type='text' id='player-var-z'/></p>
            </div>
        </div>
        
    </div>
    
    <div id="button-container">
        Language: <select id="language-select">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="kr">Korean</option>
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

            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var workshopCode = document.getElementById("decompiler-input-text").value;
            var globalVars = {};
            for (var letter of alphabet) {
                var varText = document.getElementById("global-var-"+letter).value.trim();
                if (varText !== "") {
                    globalVars[letter] = varText;
                }
            }

            var playerVars = {};
            for (var letter of alphabet) {
                var varText = document.getElementById("player-var-"+letter).value.trim();
                if (varText !== "") {
                    playerVars[letter] = varText;
                }
            }
            var languageSelect = document.getElementById("language-select");
            var language = languageSelect.options[languageSelect.selectedIndex].value;

            const vscode = acquireVsCodeApi();
            vscode.postMessage({
                content: workshopCode,
                globalVars: globalVars,
                playerVars: playerVars,
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

const constTypes = JSON.parse(JSON.stringify(overpy.constantValues));

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
        description: "todo",
        args: null,
    },{
        opy: "y",
        description: "todo",
        args: null,
    },{
        opy: "z",
        description: "todo",
        args: null,
    }
];

const memberCompItem = makeCompList(memberFuncList.concat(memberConstList));

const constValues = getConstValues();
const constTypeList = Object.keys(constValues).map(x => ({opy: x})).filter(x => x.opy !== "Operation" && x.opy !== "Variable");
const constTypeListOpy = constTypeList.map(x => x.opy);

const metaRuleParamsCompList = makeCompList(metaRuleParams);
const defaultCompList = makeCompList(funcList.concat(constTypeList));
const allFuncList = funcList.concat(memberFuncList);

for (var func of allFuncList) {
    func.sigHelp = makeSignatureHelp(func);
}

function activate(context) {

    vscode.commands.registerCommand("extension.decompile", () => {
        var panel = vscode.window.createWebviewPanel("overpyDecompilerWebview", "OverPy Decompiler", vscode.ViewColumn.Active, {
            enableScripts: true,
        });
        panel.webview.html = decompilerUI[0];
        panel.webview.onDidReceiveMessage(message => {

            try {

                var decompiled = overpy.decompileAllRules(message.content, message.globalVars, message.playerVars, message.language);

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

            var compiledText = overpy.compile(vscode.window.activeTextEditor.document.getText(), vscode.workspace.getConfiguration("overpy").workshopLanguage);
            clipboard.copy(compiledText);
            vscode.window.showInformationMessage("Successfully compiled! (copied into clipboard)");
        } catch (e) {
            if (e instanceof Error) {
                vscode.window.showErrorMessage("Error: "+e.message);
                /*try {
                    var errorLine = parseInt(e.message.substring(e.message.indexOf("line ")+"line ".length, e.message.indexOf(",")))-1;
                    var errorCol = parseInt(e.message.substring(e.message.indexOf("col ")+"col ".length, e.message.indexOf(":")))-1;

                    //Position the cursor to the error location
                    vscode.window.activeTextEditor.selection = new vscode.Selection(errorLine, errorCol, errorLine, errorCol);
                    vscode.window.activeTextEditor.revealRange(new vscode.Range((errorLine > 10 ? errorLine-10 : 0), errorCol, errorLine+10, errorCol));
                } catch (e) {
                    console.error(e);
                }*/
                //vscode.window.activeTextEditor.document.
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
        if (document.languageId === "overpy" && document.uri.scheme === "file" && vscode.workspace.getConfiguration("overpy").compileOnSave) {
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


    
    /*
    if (!("args" in item) || item.args.length === 0) {
        return new vscode.SnippetString(text);
    }


    var snippet = text + "(";
    var doc = null;
    for (var func of funcDoc) {
        if (func.name === text) {
            doc = func;
            break;
        }
    }
    if (doc === null) {
        console.log("Could not find documentation for function "+text);
        return new vscode.SnippetString(text+"()");
    }
    for (var i = 0; i < doc.args.length; i++) {
        var type = doc.args[i].type;
        snippet += getSnippetFromArg(i+1, doc.args[i]);

        if (i < doc.args.length-1) {
            snippet += ", ";
        }
    }
    snippet += ")";
    //console.log("Snippet for "+text+" is "+snippet);
    return new vscode.SnippetString(snippet);*/
    
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
    if (func.args === null || func.args.length === 0) {
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