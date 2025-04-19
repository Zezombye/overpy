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

import { customGameSettingsSchema } from "../data/customGameSettings";
import { DEBUG_MODE, activatedExtensions, builtInJsFunctions, builtInJsFunctionsNbLines, fileStack, globallySuppressedWarningTypes, macros, optimizeForSize, replacementFor0, replacementFor1, replacementForTeam1, reservedNames, setOptimizationEnabled, setOptimizationForSize, setReplacementFor0, setReplacementFor1, setReplacementForTeam1, setEnableTagsSetup, translationLanguages, setTranslationLanguages, setUsePlayerVarForTranslations, setExcludeVariablesInCompilation } from "../globalVars";
import { getArgs, getBracketPositions } from "../utils/decompilation";
import { getFileContent, getFilePaths, getFilenameFromPath } from "file_utils";
import { debug, error, warn } from "../utils/logging";
import { getFileStackCopy, isVarChar, safeEval } from "../utils/other";
import { BaseNormalFileStackMember, FileStackMember, FunctionMacroData, MacroData, MacroFileStackMember, ScriptFileStackMember } from "../types";
import { dispTokens } from "../utils/tokens";
import { TranslationLanguage } from "./translations";

export class Macro {
    isFunction: boolean;
    args: unknown[];
    text: string;
    replacement: string;

    constructor(text: string, replacement: string, args: unknown[] = []) {
        this.isFunction = args.length !== 0;
        this.args = args;
        this.text = text;
        this.replacement = replacement;
    }
}

export class LogicalLine {
    indentLevel: number;
    tokens: Token[];

    constructor(indentLevel: number = 0, tokens: Token[] = []) {
        this.indentLevel = indentLevel;
        this.tokens = tokens;
    }

    toString() {
        return " ".repeat(this.indentLevel) + dispTokens(this.tokens, true);
    }
}

export class Token {
    text: string;
    fileStack: FileStackMember[];

    constructor(text: string, fileStack: FileStackMember[]) {
        this.text = text;
        this.fileStack = fileStack;
    }

    toString() {
        return this.text;
    }
}

/**
Returns an array of logical lines, with their indentation level.
Logical lines are separated by a '\n', if it is not backslashed, and not within brackets.
*/
export function tokenize(content: string): LogicalLine[] {
    if (!content.endsWith("\n")) {
        content += "\n";
    }

    //Not the full list of tokens; namely, brackets aren't in this list.
    //Sorted by longest first, for greediness.
    let tokens = ["==", "!=", "<=", ">=", "+=", "-=", "*=", "/=", "%=", "**=", "<", ">", "=", "+", "-", ",", "/", "%", "**", "*", ".", ":", ";", "\\"];

    let result: Array<LogicalLine> = [];

    let bracketsLevel = 0;
    let currentLine: LogicalLine = new LogicalLine();

    let i = 0;

    function addToken(text: string) {
        if (text.length === 0) {
            error("Token is empty, lexer broke");
        }

        //debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);

        currentLine.tokens.push(new Token(text, getFileStackCopy()));

        moveCursor(text.length - 1);
    }

    /**
     * @param length of the macro resolution
     * @param callCols how many cols the macro CALL takes
     * @param callLines how many lines the macro CALL takes
     * @param callNbChars how many characters the macro call takes
     * @param name used in stack trace, should be macro name or file name
     * @param startingCol the col of the macro start in the file it is declared
     * @param startingLine the line of the macro start in the file it is declared
     */
    function addFile(length: number, callNbChars: number, callCols: number, callLines: number, name: string, startingCol: number, startingLine: number) {
        fileStack.push({
            name,
            remainingChars: length,
            callNbChars,
            callCols,
            callLines,
            currentLineNb: startingLine,
            currentColNb: startingCol,
            staticMember: false,
            fileStackMemberType: "normal",
        });
    }

    function newLogicalLine() {
        if (currentLine.tokens !== undefined && currentLine.tokens.length > 0) {
            result.push(currentLine);
        }

        currentLine = new LogicalLine();
    }

    newLogicalLine();

    function moveCursor(amount: number) {
        for (let j = 0; j < amount; j++) {
            let currentFile = fileStack[fileStack.length - 1];
            if (currentFile.fileStackMemberType === "webUI") {
                error("WebUI file stack member not supported in this context (currentFile)");
            }
            if (!currentFile.staticMember && currentFile.remainingChars > 0) {
                currentFile.remainingChars--;
                if (currentFile.remainingChars === 0) {
                    let nextFile = fileStack[fileStack.length - 2];
                    if (nextFile.fileStackMemberType === "webUI") {
                        error("WebUI file stack member not supported in this context (nextFile)");
                    }
                    //debug("macro lines = "+macroLines+", macro cols = "+macroCols);
                    nextFile.currentLineNb += currentFile.callLines;
                    nextFile.currentColNb += currentFile.callLines - 1;
                    if (!nextFile.staticMember) {
                        (nextFile as MacroFileStackMember).remainingChars -= currentFile.callNbChars;
                    }
                    fileStack.pop();
                }
            }

            currentFile.currentColNb++;
            if (content[i + j] === "\n") {
                currentFile.currentLineNb++;
                currentFile.currentColNb = 1;
            }
        }
        i += amount;
    }

    function parsePreprocessingDirective(content: string) {
        debug("Parsing preprocessing directive '" + content + "'");
        if (content.startsWith("#!define ") || content.startsWith("#!defineMember ")) {
            macros.push(
                parseMacro({
                    fileStack: getFileStackCopy(),
                    content: content,
                }),
            );
            return;
        }
        if (content.startsWith("#!mainFile ")) {
            //we must ignore this preprocessor directive
            return;
        }
        if (content.startsWith("#!disableOptimizations")) {
            setOptimizationEnabled(false);
            return;
        }
        if (content.startsWith("#!extension ")) {
            var addedExtension = content.substring("#!extension ".length).trim();
            if (!(addedExtension in customGameSettingsSchema.extensions.values)) {
                error("Unknown extension '" + addedExtension + "', valid ones are: " + Object.keys(customGameSettingsSchema.extensions.values).join(", "));
            }
            activatedExtensions.push(addedExtension);
            return;
        }
        if (content.startsWith("#!excludeVariablesInCompilation")) {
            setExcludeVariablesInCompilation(true);
            return;
        }
        if (content.startsWith("#!translations ")) {
            let translations = content.substring("#!translations ".length).split(" ").map(x => x.replaceAll("-", "_").toLowerCase().trim());
            for (let translation of translations) {
                if (!["de","en","es","es_es","es_mx","fr","it","ja","ko","pl","pt","ru","th","tr","zh","zh_cn","zh_tw"].includes(translation)) {
                    error("Invalid language '" + translation + "'");
                }
            }
            if (translations.includes("es") && (translations.includes("es_es") || translations.includes("es_mx"))) {
                error("Cannot use 'es' with 'es_es' or 'es_mx'");
            }
            if (translations.includes("zh") && (translations.includes("zh_cn") || translations.includes("zh_tw"))) {
                error("Cannot use 'zh' with 'zh_cn' or 'zh_tw'");
            }

            setTranslationLanguages(translations as TranslationLanguage[]);
            return;

        }
        if (content.startsWith("#!translateWithPlayerVar")) {
            setUsePlayerVarForTranslations(true);
            return;
        }
        if (content.startsWith("#!optimizeForSize")) {
            setOptimizationForSize(true);
            return;
        }
        if (content.startsWith("#!setupTx") || content.startsWith("#!setupTags")) {
            setEnableTagsSetup(true);
            return;
        }

        if (content.startsWith("#!replace0ByCapturePercentage")) {
            if (replacementFor0 !== "") {
                error("A replacement for 0 has already been defined");
            }
            setReplacementFor0("getCapturePercentage");
            return;
        }
        if (content.startsWith("#!replace0ByIsMatchComplete")) {
            if (replacementFor0 !== "") {
                error("A replacement for 0 has already been defined");
            }
            setReplacementFor0("isMatchComplete");
            return;
        }
        if (content.startsWith("#!replace0ByPayloadProgressPercentage")) {
            if (replacementFor0 !== "") {
                error("A replacement for 0 has already been defined");
            }
            setReplacementFor0("getPayloadProgressPercentage");

            /* Could also use:
			- isAssemblingHeroes()
			- isInSetup()
			- isWaitingForPlayers()
			- isGameInProgress()
			but they are not really reliable compared to the other functions as players may decide to start the game or change gamemode.
			*/
            return;
        }
        if (content.startsWith("#!replace1ByMatchRound")) {
            if (replacementFor1 !== "") {
                error("A replacement for 1 has already been defined");
            }
            setReplacementFor1("getMatchRound");
            return;
        }
        if (content.startsWith("#!replaceTeam1ByControlScoringTeam")) {
            if (replacementForTeam1 !== "") {
                error("A replacement for Team.1 has already been defined");
            }
            setReplacementForTeam1("getControlScoringTeam");
            return;
        }
        if (content.startsWith("#!suppressWarnings ")) {
            var firstSpaceIndex = content.indexOf(" ");
            globallySuppressedWarningTypes.push(
                ...content
                    .substring(firstSpaceIndex)
                    .trim()
                    .split(" ")
                    .map((x) => x.trim()),
            );
            return;
        }
        error("Unknown preprocessor directive '" + content + "'");
    }

    for (i = 0; i < content.length; moveCursor(1)) {
        if (content[i] === "\n") {
            //Only end the logical line if the newline is not within brackets.
            if (bracketsLevel === 0) {
                newLogicalLine();
            }
            continue;
        }

        if (content[i] === "\t") {
            if (currentLine.tokens.length === 0) {
                currentLine.indentLevel += 4;
            }
            continue;
        }
        if (content[i] === " ") {
            //increase indentation if no token yet; else, do nothing
            if (currentLine.tokens.length === 0) {
                currentLine.indentLevel++;
            }
            continue;
        }
        if (content[i] === "\r") {
            continue;
        }
        if (content[i] === "\\") {
            let j = i + 1;
            for (; j < content.length; j++) {
                if (content[j] === "\n") {
                    break;
                } else if (content[j] !== " " && content[j] !== "\r") {
                    error("A backslash can only be put at the end of a line");
                }
            }
            moveCursor(j - i - 1 + "\n".length);
            continue;
        }
        if (content[i] === "(" || content[i] === "[" || content[i] === "{") {
            bracketsLevel++;
            addToken(content[i]);
            continue;
        }
        if (content[i] === ")" || content[i] === "]" || content[i] === "}") {
            bracketsLevel--;
            if (bracketsLevel < 0) {
                error("Brackets level below 0 (extraneous closing bracket)");
            }
            addToken(content[i]);
            continue;
        }
        if (content.startsWith("#!", i)) {
            let j = i;
            let isBackslashed = false;
            let preprocessingDirectiveContent = "";
            for (; j < content.length; j++) {
                if (content[j] === "\\") {
                    isBackslashed = true;
                    if (j < content.length - 1 && ![" ", "\r", "\n"].includes(content[j + 1])) {
                        preprocessingDirectiveContent += content[j];
                    }
                } else if (!isBackslashed && content[j] === "\n") {
                    break;
                } else if (content[j] !== " " && content[j] !== "\r") {
                    isBackslashed = false;
                    preprocessingDirectiveContent += content[j];
                } else {
                    preprocessingDirectiveContent += content[j];
                }
            }

            if (preprocessingDirectiveContent.startsWith("#!include ")) {
                let space = preprocessingDirectiveContent.indexOf(" ");
                let paths = getFilePaths(preprocessingDirectiveContent.substring(space));

                for (let path of paths) {
                    fileStack.push({
                        name: getFilenameFromPath(path),
                        currentLineNb: 1,
                        currentColNb: 1,
                        remainingChars: 99999999999, //does not matter
                        staticMember: true,
                        fileStackMemberType: "normal",
                    } as ScriptFileStackMember);
                    let importedFileContent = getFileContent(path);
                    result.push(...tokenize(importedFileContent));
                    fileStack.pop();
                    moveCursor(j - i - 1);
                }
            } else {
                parsePreprocessingDirective(preprocessingDirectiveContent);
                moveCursor(j - i - 1);
            }
            continue;
        }
        if (content[i] === "#") {
            //Get to the end of the comment. Note: backslashes don't work to continue a line comment.
            let j = i + 1;
            for (; j < content.length && content[j] !== "\n"; j++) {}

            //To facilitate parsing, do not add the comment if it is in parentheses, as it won't be used for action comments.
            if (bracketsLevel !== 0) {
                moveCursor(j - i - 1);
            } else {
                addToken(content.substring(i, j));
            }
            continue;
        } else if (content.startsWith("/*", i)) {
            //Get to the end of the multiline comment
            let j = i + "/*".length;
            let foundEndOfComment = false;
            for (; j < content.length; j++) {
                if (content.startsWith("*/", j)) {
                    foundEndOfComment = true;
                    break;
                }
            }

            if (!foundEndOfComment) {
                error("Multiline comment isn't terminated (found end of file while searching for end of comment)");
            }
            j += "*/".length;
            moveCursor(j - i - 1);
        } else if (content.startsWith("*/", i)) {
            //All ends should be found when a multiline comment start is found.
            error("Found end of multiline comment, but no matching beginning");
        } else if (content[i] === '"' || content[i] === "'") {
            var strDelimiter = content[i];
            var foundEndOfString = false;
            var isBackslashed = false;

            //Get to the end of the string
            var j = i + 1;
            for (; j < content.length; j++) {
                if (!isBackslashed && content[j] === strDelimiter) {
                    foundEndOfString = true;
                    break;
                }
                if (content[j] === "\\" && !isBackslashed) {
                    isBackslashed = true;
                } else {
                    isBackslashed = false;
                }
            }

            if (!foundEndOfString) {
                error("String isn't terminated (found end of file while searching for end of string)");
            }

            j += strDelimiter.length; //account for closing delimiter
            addToken(content.substring(i, j));
        } else {
            //Get token
            var j = i;
            //Increases j as long as there are characters that can compose a word
            for (; j < content.length && isVarChar(content[j]); j++) {}

            //If j > i, then there was a word, instead of an operator
            if (j > i) {
                let macroWasFound = false;

                //Test each macro
                for (var k = 0; k < macros.length; k++) {
                    if (content.substring(i, j) === macros[k].name) {
                        let text;
                        let replacement;
                        let macroCols = 0;
                        let macroLines = 0;

                        if (macros[k].isFunction) {
                            //debug("Resolving function macro "+macros[k].name);
                            let bracketPos = getBracketPositions(content.substring(i), true, true);
                            text = content.substring(i, i + bracketPos[1] + 1);
                            let macroArgs = getArgs(content.substring(i + bracketPos[0] + 1, i + bracketPos[1]));
                            replacement = resolveMacro(macros[k], macroArgs, currentLine.indentLevel);
                        } else {
                            //debug("Resolving normal macro "+macros[k].name);
                            text = macros[k].name;
                            //replacement = macros[k].replacement;
                            replacement = resolveMacro(macros[k], [], currentLine.indentLevel);
                        }

                        content = content.substring(0, i) + replacement + content.substring(i + text.length);

                        if (text.indexOf("\n") >= 0) {
                            macroCols = text.length - text.lastIndexOf("\n");
                            macroLines = text.split("\n").length - 1;
                        } else {
                            macroCols = text.length;
                        }

                        if (replacement === undefined) {
                            error("Replacement is undefined");
                        }

                        addFile(replacement.length, text.length, macroCols, macroLines, macros[k].name, macros[k].startingCol, (macros[k].fileStack[macros[k].fileStack.length - 1] as BaseNormalFileStackMember).currentLineNb);

                        //debug("Text: "+text);
                        //debug("Replacement: "+replacement);

                        k = 0;
                        i--;
                        let currentFile = fileStack[fileStack.length - 1];
                        if (currentFile.fileStackMemberType !== "normal") {
                            error("Tokenizer: File stack member type is not normal");
                        }
                        if (currentFile.staticMember === false) {
                            currentFile.remainingChars++;
                        }
                        macroWasFound = true;
                    }
                }

                if (!macroWasFound) {
                    //Handle the special case of min= and max= operators
                    if ((content.substring(i, j) === "min" || content.substring(i, j) === "max") && content[i + "min".length] === "=") {
                        j++;
                    }
                    addToken(content.substring(i, j));
                }
            } else {
                let hasTokenBeenFound = false;
                //Test each remaining token
                for (var h = 0; h < tokens.length; h++) {
                    if (content.startsWith(tokens[h], i)) {
                        addToken(content.substring(i, i + tokens[h].length));
                        hasTokenBeenFound = true;
                        break;
                    }
                }

                if (!hasTokenBeenFound) {
                    error("Unknown token '" + content[i] + "'");
                }
            }
        }
    }

    if (bracketsLevel > 0) {
        error("Found end of file, but a bracket isn't closed");
    }

    if (DEBUG_MODE) {
        console.log(result.join("\n"));
    }

    return result;
}

function resolveMacro(macro: MacroData, args: string[] = [], indentLevel: number): string {
    var result = "";

    if (macro.isFunction) {
        //debug("Args: "+args);
        if (args.length !== macro.args.length) {
            error("Wrong number of arguments for macro " + macro.name);
        }

        if (macro.isScript) {
            let scriptContent = getFileContent(macro.scriptPath);
            let vars = "";
            for (let i = 0; i < args.length; i++) {
                vars += "var " + macro.args[i] + "=" + args[i] + ";";
            }
            scriptContent = vars + "\n" + scriptContent;
            scriptContent = builtInJsFunctions + scriptContent;
            try {
                result = safeEval(scriptContent);
                if (!result) {
                    error("Script '" + getFilenameFromPath(macro.scriptPath) + "' yielded an invalid result.\nPlease note that your script should yield a primitive value (e.g. a number or a string) as the final result.");
                }
                result = result.toString();
            } catch (e: any) {
                let stackTrace = e.stack.split("\n").slice(1).reverse();
                let encounteredEval = false;
                for (let line of stackTrace) {
                    line = line.trim();
                    let name = line.substring("at ".length, line.indexOf("(")).trim();
                    if (name === "eval") {
                        name = getFilenameFromPath(macro.scriptPath);
                        encounteredEval = true;
                    }
                    if (encounteredEval) {
                        let colNb = parseInt(line.substring(line.lastIndexOf(":") + 1, line.lastIndexOf(")")));
                        let lineNb = parseInt(line.substring(line.substring(0, line.lastIndexOf(":")).lastIndexOf(":") + 1, line.lastIndexOf(":")));
                        lineNb -= builtInJsFunctionsNbLines;
                        fileStack.push({
                            name: name,
                            currentLineNb: lineNb,
                            currentColNb: colNb,
                            staticMember: true,
                            fileStackMemberType: "normal",
                        });
                    }
                }
                error(e);
            }
        } else {
            result = macro.replacement;
            //debug("result 1 = "+result);

            //Replace macro argument names with their values
            for (var i = 0; i < macro.args.length; i++) {
                result = result.replace(new RegExp("\\b" + macro.args[i] + "\\b", "g"), args[i]);
            }

            //debug("result 2 = "+result);
            result = result.replace(new RegExp("\\\\\\n", "g"), "\n");
            //debug("result 3 = "+result);
        }
    } else {
        result = macro.replacement;
    }
    var tabs = "\n" + " ".repeat(indentLevel);
    result = result.replace(/\n/g, tabs);
    return result;
}

function parseMacro(initialMacroData: { fileStack: FileStackMember[]; content: string }): MacroData {
    let trimmedMacroContent = initialMacroData.content.substring(initialMacroData.content.indexOf(" ") + 1);
    let bracketPos = getBracketPositions(trimmedMacroContent, false, true);
    const isFunctionMacro = bracketPos.length > 0 && trimmedMacroContent.indexOf(" ") >= bracketPos[0];

    let macroText = isFunctionMacro ? trimmedMacroContent.substring(0, bracketPos[1] + 1).trim() : trimmedMacroContent.substring(0, trimmedMacroContent.indexOf(" ")).trim();

    let macro: MacroData = {
        ...initialMacroData,
        content: initialMacroData.content.substring(initialMacroData.content.indexOf(" ") + 1),
        isMember: initialMacroData.content.startsWith("#!defineMember "),
        startingCol: initialMacroData.content.indexOf(" ") + 1 + (isFunctionMacro ? bracketPos[1] + 1 + trimmedMacroContent.substring(bracketPos[1] + 1).search(/\S/) + 1 : trimmedMacroContent.indexOf(" ") + trimmedMacroContent.substring(trimmedMacroContent.indexOf(" ")).search(/\S/) + 1),
        isFunction: isFunctionMacro,
        text: macroText,
        name: isFunctionMacro ? trimmedMacroContent.substring(0, bracketPos[0]).trim() : macroText,
        replacement: isFunctionMacro ? trimmedMacroContent.substring(bracketPos[1] + 1).trim() : trimmedMacroContent.substring(trimmedMacroContent.indexOf(" ")).trim(),
    };

    if (macros.some((m) => m.name === macro.name)) {
        error("Macro '" + macro.name + "' is already defined");
    }

    //Not sure how to handle the general case of multiple macros referencing each other
    if (macro.text === macro.replacement) {
        error("Macro '" + macro.name + "' references itself");
    }

    if (!macro.isFunction) {
        //Not a function macro
        if (reservedNames.includes(macro.name)) {
            warn("w_redefining_keyword", "The macro name '" + macro.name + "' is a keyword");
        }
    } else {
        let functionMacro = macro as FunctionMacroData;
        functionMacro.isFunction = true;
        //Function macro
        functionMacro.args = getArgs(functionMacro.content.substring(bracketPos[0] + 1, bracketPos[1]));

        //Test for script macro
        if (functionMacro.replacement.startsWith("__script__(")) {
            functionMacro.isScript = true;
            functionMacro.scriptPath = getFilePaths(functionMacro.replacement.substring("__script__(".length, functionMacro.replacement.length - 1))[0];
        } else {
            functionMacro.isScript = false;
        }
    }

    if (!macro.text || !macro.replacement) {
        error("Expected a macro declaration (eg: #!define myVar A)");
    }

    return macro;
}
