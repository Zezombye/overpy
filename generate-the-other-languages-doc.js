const assert = require("assert");
const fs = require("fs");
const { parseArgs } = require("util");

require('dotenv').config();

var docFolder = "./src/data/"
var docFiles = ["actions.js", "constants.js", "keywords.js", "stringKw.js", "values.js"]

var datatoolPath = process.env.DATATOOL_PATH ?? "%USERPROFILE%\\toolchain-release\\DataTool.exe"
var overwatchPath = process.env.OVERWATCH_PATH ?? "C:\\Program Files (x86)\\Overwatch"
var outputFolder = "strings"
var guids;
var guidToLocaleMap = new Map();
var enUSToGuidMap = new Map();
var enUSFuzzyToGuidMap = new Map();
var removeParentheses = true;
var fuzzyMatch = false;

const args = parseArgs({
    options: {
        "regenerateStringsFile": {
            type: "boolean",
            default: false
        }
    }
})

async function generateStringsFile() {
    const { execSync } = require('child_process');

    let command = '"'+datatoolPath+'" "'+overwatchPath+'" dump-all-locale-strings --out='+outputFolder+'/strings.json';
    console.log("Extracting all locale strings with DataTool...");
    execSync(command, (err, stdout, stderr) => {
        if (err) {
            console.log("DataTool failed with error:", err)
            return;
        }
    });
}

function getGuids() {
    console.log("Generating GUID mappings...");
    guids = JSON.parse(fs.readFileSync(outputFolder+"/strings.json"));

    // Precompute some mappings to save time later at cost of space complexity
    for (let guidGlob of Object.entries(guids)) {
        let guid = guidGlob[0].split(".")[0];
        guidToLocaleMap.set(guid, guidGlob[1]);

        assert(Object.keys(guidGlob[1]).includes("enUS"), "enUS not found in guid "+guid);

        let enUSKey = guidGlob[1]["enUS"];

        if (enUSToGuidMap.has(enUSKey)) {
            // console.debug("Duplicate enUS key found: "+enUSKey);
            continue;
        }

        enUSToGuidMap.set(guidGlob[1]["enUS"], guid);
        enUSFuzzyToGuidMap.set(guidGlob[1]["enUS"].replace(/[\.,;'\s()-]/g, "").toLowerCase(), guid);
    }
    //console.log(guids["en-US"]);
}

function replaceJsonObjectsInFile(path) {
    console.log("Processing "+path)
    let content = ""+fs.readFileSync(path);
    let result = "";
    let currentJsonStr = "";
    let isInJsonObject = false;
    for (let line of content.split(/\r?\n/g)) {
        if (line.trim() === "//end-json") {
            isInJsonObject = false;
            tmpObj = iterateOnObject(eval("("+currentJsonStr+")"))
            result += JSON.stringify(tmpObj, null, 4)+"\n";
            currentJsonStr = "";
        }
        if (!isInJsonObject) {
            result += line+"\n";
        } else {
            currentJsonStr += line+"\n";
        }
        if (line.trim() === "//begin-json") {
            isInJsonObject = true;
        }
    }
    fs.writeFileSync(path, result.substring(0, result.length-1));
}

function iterateOnObject(content) {
    if (content.onlyInOw1) {
        return content;
    }
    if ("guid" in content || "en-US" in content) {
        content = addTranslations(content);
    }

    /*if ("description" in content && !("descriptionLocalized" in content)) {
        content["descriptionLocalized"] = {"en-US": content["description"]}
    }*/

    for (var key of Object.keys(content)) {
        if (typeof content[key] === "object" && content[key] !== null) {
            //Skip the comparison operators as they must not be translated.
            if (key !== "__Operator__" && key !== "descriptionLocalized") {
                if (key === "nameLocalized" || key === "descriptionLocalized") {
                    oldRemoveParentheses = removeParentheses;
                    removeParentheses = false;
                    fuzzyMatch = true;
                } else {
                    fuzzyMatch = false;
                }
                content[key] = iterateOnObject(content[key]);
                if (key === "nameLocalized" || key === "descriptionLocalized") {
                    removeParentheses = oldRemoveParentheses;
                }
            }
        }
    }

    return content;
}

function addTranslations(content) {
    if (!("guid" in content) || content.guid === "<unknown guid>") {
        assert (Object.keys(content).includes("en-US"), "GUID-less content does not have an en-US key: "+JSON.stringify(content));

        if (fuzzyMatch) {
            content.guid = enUSFuzzyToGuidMap.get(content["en-US"].replace(/[\.,;'\s()-]/g, "").toLowerCase());
        } else {
            content.guid = enUSToGuidMap.get(content["en-US"]);
        }
    }

    if (content.guid == undefined) {
        console.warn("GUID not found for content: "+JSON.stringify(content));
        return content;
    }

    let guidGlob = guidToLocaleMap.get(content.guid);
    for (let localeEntry of Object.entries(guidGlob)) {
        localeEntry[1] = localeEntry[1].replace(/%%/g, "%");
        if (removeParentheses) localeEntry[1] = localeEntry[1].replace(/[,\(\)\/]/g,"");
        content[dataToolLocaleToOverPyLocale(localeEntry[0])] = localeEntry[1];
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



if (args.values.regenerateStringsFile) generateStringsFile();
getGuids();
replaceJsonObjectsInFile(docFolder+"actions.js");
replaceJsonObjectsInFile(docFolder+"values.js");
replaceJsonObjectsInFile(docFolder+"constants.js");
replaceJsonObjectsInFile(docFolder+"heroes.js");
replaceJsonObjectsInFile(docFolder+"maps.js");
replaceJsonObjectsInFile(docFolder+"gamemodes.js");
replaceJsonObjectsInFile(docFolder+"customGameSettings.js");
removeParentheses = false;
replaceJsonObjectsInFile(docFolder+"ui.js");
replaceJsonObjectsInFile(docFolder+"argnames.js");
replaceJsonObjectsInFile(docFolder+"localizedStrings.js");
replaceJsonObjectsInFile(docFolder+"other.js");

/**
 * Converts a locale from the DataTool format to the OverPy format.
 * @param {string} locale The locale to convert (e.g. "enUS")
 * @returns {string} The converted locale (e.g. "en-US")
 */
function dataToolLocaleToOverPyLocale(locale) {
    let result = locale.match(/([a-z]+)([A-Z]+)/);
    return result[1]+"-"+result[2];
}
