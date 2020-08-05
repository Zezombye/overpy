const fs = require("fs");

var languages = ["en-US", "de-DE", "es-ES", "es-MX", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pl-PL", "pt-BR", "ru-RU", "zh-CN", "zh-TW"]
var docFolder = "./src/data/"
var docFiles = ["actions.js", "constants.js", "keywords.js", "stringKw.js", "values.js"]

var datatoolPath = "C:\\Users\\Zezombye\\Downloads\\toolchain-release(21)\\DataTool.exe"
var overwatchPath = "D:\\Overwatch"
var outputFolder = "strings"
var guids = {};
var removeParentheses = true;

async function generateStringFiles() {
    const { execSync } = require('child_process');
    for (var language of languages) {
        var command = "\""+datatoolPath+"\" \""+overwatchPath+"\" Dump-strings -L="+language.replace("-", "")+" -T="+language.replace("-", "")+" > "+outputFolder+"/strings-"+language+".txt";
        console.log("Executing command for language "+language);
        console.log(command);
        execSync(command, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log("Could not execute command")
                return;
            }
        });
        sleep(5000)
        
    }
}

function getGuids() {
    for (var language of languages) {
        var content = ""+fs.readFileSync(outputFolder+"/strings-"+language+".txt");
        guids[language] = [];
        content = content.replace(/\r\n/g, "\n");
        for (var line of content.split("\n")) {
            //console.log(line);
            if (/^[\dA-F]{12}\.07C: /.test(line)) {
                var guid = line.substring(0, line.indexOf("."));
                var string = line.substring(line.indexOf(":")+2);
                guids[language].push({
                    guid: guid,
                    string: string,
                });
            }
        }
    }
    console.log(guids["en-US"]);
}

function replaceJsonObjectsInFile(path) {
    var content = ""+fs.readFileSync(path);
    var result = "";
    var currentJsonStr = "";
    var isInJsonObject = false;
    for (var line of content.split("\n")) {
        if (line === "//end-json") {
            isInJsonObject = false;
            result += JSON.stringify(iterateOnObject(eval("("+currentJsonStr+")")), null, 4)+"\n";
            currentJsonStr = "";
        }
        if (!isInJsonObject) {
            result += line+"\n";
        } else {
            currentJsonStr += line+"\n";
        }
        if (line === "//begin-json") {
            isInJsonObject = true;
        }
    }
    fs.writeFileSync(path, result.substring(0, result.length-1));
}

function iterateOnObject(content) {
    if ("guid" in content || "en-US" in content) {
        content = addTranslations(content);
    }


    for (var key of Object.keys(content)) {
        if (typeof content[key] === "object" && content[key] !== null) {
            //Skip the comparison operators as they must not be translated.
            if (key !== "__Operator__") {
                content[key] = iterateOnObject(content[key]);
            }
        }
    }
    
    return content;
}

function addTranslations(content) {
    //Find the guid, if it isn't already added
    if (!("guid" in content)) {
        var matchingGuids = [];
        for (var elem of guids["en-US"]) {
            if (elem.string === content["en-US"]) {
                matchingGuids.push(elem.guid);
            }
        }
        if (matchingGuids.length === 0) {
            throw new Error("No guid found for string '"+content["en-US"]+"'");
        } else if (matchingGuids.length > 1) {
            throw new Error("Multiple guids found for string '"+content["en-US"]+"': "+JSON.stringify(matchingGuids));
        }
        content.guid = matchingGuids[0];
    }
    for (var language of languages) {
        var isGuidFound = false;
        delete content[language];
        for (var elem of guids[language]) {
            if (elem.guid === content.guid) {
                elem.string = elem.string.replace(/%%/g, "%");
                if (removeParentheses) {
                    elem.string = elem.string.replace(/[,\(\)\/]/g,"")
                }
                        
                if (elem.string !== content["en-US"]) {
                    content[language] = elem.string;
                }
                isGuidFound = true;
                break;
            }
        }
        if (!isGuidFound) {
            throw new Error("Did not find the guid '"+content.guid+"' for language '"+language+"'");
        }
    }
    return content;
}

function normalizeName(content) {
    content = content.replace(/(?<=[a-z])(?=[A-Z0-9])/g, " ");
    content = content.replace("-", " - ");
    content = content.replace(":", ": ");
    content = content.replace(/\s+/g, " ");
    var words = content.split(" ");
    words = words.map(x => x[0].toUpperCase()+x.substring(1).toLowerCase()).join(" ");
    console.log(words);
    content = words;
    return content;
}



//generateStringFiles();
getGuids();
replaceJsonObjectsInFile(docFolder+"actions.js");
replaceJsonObjectsInFile(docFolder+"values.js");
replaceJsonObjectsInFile(docFolder+"constants.js");
replaceJsonObjectsInFile(docFolder+"heroes.js");
replaceJsonObjectsInFile(docFolder+"maps.js");
replaceJsonObjectsInFile(docFolder+"gamemodes.js");
replaceJsonObjectsInFile(docFolder+"customGameSettings.js");
removeParentheses = false;
replaceJsonObjectsInFile(docFolder+"localizedStrings.js");
replaceJsonObjectsInFile(docFolder+"other.js");

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}