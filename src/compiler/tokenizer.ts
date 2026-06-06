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
import { DEBUG_MODE, builtInJsFunctions, builtInJsFunctionsNbLines, reservedNames } from "../globalVars";
import { OverPyCompiler } from "../godClasses";
import { debug } from "../utils/logging";
import { isVarChar } from "../utils/other";
import { BaseNormalFileStackMember, FileStackMember, FunctionMacroData, MacroData, MacroFileStackMember, ScriptFileStackMember } from "../types";
import { TranslationLanguage } from "./translations";
import { executeQuickJSScript } from "../quickjs";
import {dispTokens} from "../utils/tokens";
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
        this.fileStack[this.fileStack.length - 1].endCol = this.fileStack[this.fileStack.length-1].startCol as number + this.text.split("\n")[this.text.split("\n").length-1].length;
        this.fileStack[this.fileStack.length - 1].endLine = this.fileStack[this.fileStack.length-1].startLine as number + this.text.split("\n").length - 1;
    }

    toString() {
        return this.text;
    }
}

/**
Returns an array of logical lines, with their indentation level.
Logical lines are separated by a '\n', if it is not backslashed, and not within brackets.
*/
OverPyCompiler.prototype.tokenize = function(content: string): LogicalLine[] {
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

    // Track the fileStack position where the first unclosed bracket was opened
    // This allows us to report accurate error locations instead of the current (modified) fileStack
    let unclosedBracketFileStack: FileStackMember[] | undefined = undefined;

    const addToken = (text: string) => {
        if (text.length === 0) {
            this.error("Token is empty, lexer broke");
        }

        //debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);

        currentLine.tokens.push(new Token(text, this.getFileStackCopy()));

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
    const addFile = (length: number, callNbChars: number, callCols: number, callLines: number, name: string, startingCol: number, startingLine: number) => {
        this.fileStack.push({
            name,
            remainingChars: length,
            callNbChars,
            callCols,
            callLines,
            startLine: startingLine,
            startCol: startingCol,
            endLine: null,
            endCol: null,
            staticMember: false,
        });
    }

    function newLogicalLine() {
        if (currentLine.tokens !== undefined && currentLine.tokens.length > 0) {
            result.push(currentLine);
        }

        currentLine = new LogicalLine();
    }

    newLogicalLine();

    const moveCursor = (amount: number) => {
        for (let j = 0; j < amount; j++) {
            let currentFile = this.fileStack[this.fileStack.length - 1];
            if (!currentFile.staticMember && currentFile.remainingChars > 0) {
                currentFile.remainingChars--;
                if (currentFile.remainingChars === 0) {
                    let nextFile = this.fileStack[this.fileStack.length - 2];
                    //debug("macro lines = "+macroLines+", macro cols = "+macroCols);
                    (nextFile.startLine as number) += currentFile.callLines;
                    (nextFile.startCol as number) += currentFile.callLines - 1;
                    if (!nextFile.staticMember) {
                        (nextFile as MacroFileStackMember).remainingChars -= currentFile.callNbChars;
                    }
                    this.fileStack.pop();
                }
            }

            (currentFile.startCol as number)++;
            if (content[i + j] === "\n") {
                (currentFile.startLine as number)++;
                currentFile.startCol = 1;
            }
        }
        i += amount;
    }

    const parsePreprocessingDirective = (content: string) => {
        debug("Parsing preprocessing directive '" + content + "'");
        if (content.startsWith("#!define ") || content.startsWith("#!defineMember ")) {
            this.macros.push(
                this.parseMacro({
                    fileStack: this.getFileStackCopy(),
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
            addToken("__disableOptimizations__");
            return;
        }
        if (content.startsWith("#!enableOptimizations")) {
            addToken("__enableOptimizations__");
            return;
        }
        if (content.startsWith("#!extension ")) {
            var addedExtension = content.substring("#!extension ".length).trim();
            if (!(addedExtension in customGameSettingsSchema.extensions.values)) {
                this.error("Unknown extension '" + addedExtension + "', valid ones are: " + Object.keys(customGameSettingsSchema.extensions.values).join(", "));
            }
            this.activatedExtensions.push(addedExtension);
            return;
        }
        if(content.startsWith("#!postCompileHook ")) {
            if (this.postCompileHook) {
                throw this.error("Post-compile hook is already defined");
            }
            let hookPath = this.getFilePaths(content.substring("#!postCompileHook ".length).trim(), this.rootPath)[0];
            const scriptText = this.getFileContent(hookPath);
            this.postCompileHook = ((content: string) => {
                try {
                    return executeQuickJSScript(`var content = ${JSON.stringify(content)};\n${scriptText}`, {
                        filename: hookPath,
                        kind: "postCompileHook",
                    });
                }  catch (e: any) {
                    if (e instanceof Error) {
                        this.addScriptErrorFileStack(e, hookPath, 1);
                    }
                    throw this.error(e);
                };
            });
            return;
        }
        if (content.startsWith("#!excludeVariablesInCompilation")) {
            this.excludeVariablesInCompilation = true;
            return;
        }
        if (content.startsWith("#!translations ")) {
            let translations = content.substring("#!translations ".length).split(" ").map(x => x.replaceAll("-", "_").toLowerCase().trim());
            for (let translation of translations) {
                if (!["de","en","es","es_es","es_mx","fr","it","ja","ko","pl","pt","ru","th","tr","zh","zh_cn","zh_tw"].includes(translation)) {
                    this.error("Invalid language '" + translation + "'");
                }
            }
            if (translations.includes("es") && (translations.includes("es_es") || translations.includes("es_mx"))) {
                this.error("Cannot use 'es' with 'es_es' or 'es_mx'");
            }
            if (translations.includes("zh") && (translations.includes("zh_cn") || translations.includes("zh_tw"))) {
                this.error("Cannot use 'zh' with 'zh_cn' or 'zh_tw'");
            }

            this.translationLanguages = translations as TranslationLanguage[];
            return;

        }
        if (content.startsWith("#!translateWithPlayerVar")) {
            this.usePlayerVarForTranslations = true;
            let args = content.substring("#!translateWithPlayerVar".length).trim().split(" ");
            if (args.includes("noDetectionRule")) {
                this.generateRuleForTranslationsPlayerVar = false;
            }
            if (args.includes("noTlErr")) {
                this.useTlErr = false;
            }
            return;
        }
        if (content.startsWith("#!disableInspector")) {
            this.disableInspector = true;
            return;
        }
        if (content.startsWith("#!writeToOutputFile")) {
            this.writeToOutputFile = true;
            return;
        }
        if (content.startsWith("#!disableTranslationSourceLines")) {
            this.disableTranslationSourceLines = true;
            return;
        }
        if (content.startsWith("#!keepUnusedTranslations")) {
            this.keepUnusedTranslations = true;
            return;
        }
        if (content.startsWith("#!globalvarInitRuleName ")) {
            let ruleName = content.substring("#!globalvarInitRuleName ".length).trim();
            this.globalvarInitRuleName = this.unescapeString(ruleName, true);
            return;
        }
        if (content.startsWith("#!playervarInitRuleName ")) {
            let ruleName = content.substring("#!playervarInitRuleName ".length).trim();
            this.playervarInitRuleName = this.unescapeString(ruleName, true);
            return;
        }
        if (content.startsWith("#!optimizeForSizeAggressive")) {
            this.optimizeForSizeAggressive = true;
            return;
        }
        if (content.startsWith("#!optimizeForSize")) {
            currentLine.tokens.push(new Token("__enableOptimizeForSize__", this.getFileStackCopy()));
            return;
        }
        if (content.startsWith("#!disableOptimizeForSize")) {
            currentLine.tokens.push(new Token("__disableOptimizeForSize__", this.getFileStackCopy()));
            return;
        }
        if (content.startsWith("#!optimizeStrict")) {
            currentLine.tokens.push(new Token("__enableOptimizeStrict__", this.getFileStackCopy()));
            return;
        }
        if (content.startsWith("#!disableOptimizeStrict")) {
            currentLine.tokens.push(new Token("__disableOptimizeStrict__", this.getFileStackCopy()));
            return;
        }
        if (content.startsWith("#!setupTx") || content.startsWith("#!setupTags")) {
            this.enableTagsSetup = true;
            return;
        }

        if (content.startsWith("#!replace0ByCapturePercentage")) {
            if (this.replacementFor0 !== "") {
                this.error("A replacement for 0 has already been defined");
            }
            this.replacementFor0 = "getCapturePercentage";
            return;
        }
        if (content.startsWith("#!replace0ByIsMatchComplete")) {
            if (this.replacementFor0 !== "") {
                this.error("A replacement for 0 has already been defined");
            }
            this.replacementFor0 = "isMatchComplete";
            return;
        }
        if (content.startsWith("#!replace0ByPayloadProgressPercentage")) {
            if (this.replacementFor0 !== "") {
                this.error("A replacement for 0 has already been defined");
            }
            this.replacementFor0 = "getPayloadProgressPercentage";

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
            if (this.replacementFor1 !== "") {
                this.error("A replacement for 1 has already been defined");
            }
            this.replacementFor1 = "getMatchRound";
            return;
        }
        if (content.startsWith("#!replaceTeam1ByControlScoringTeam")) {
            if (this.replacementForTeam1 !== "") {
                this.error("A replacement for Team.1 has already been defined");
            }
            this.replacementForTeam1 = "getControlScoringTeam";
            return;
        }
        if (content.startsWith("#!replaceEmptyStringByEmptyArray")) {
            if (this.replacementForEmptyString !== "") {
                this.error("A replacement for empty string has already been defined");
            }
            this.replacementForEmptyString = "emptyArray";
            return;
        }
        if (content.startsWith("#!replaceEmptyStringByVariable")) {
            if (this.replacementForEmptyString !== "") {
                this.error("A replacement for empty string has already been defined");
            }
            this.replacementForEmptyString = "variable";
            return;
        }
        if (content.startsWith("#!suppressWarnings ")) {
            var firstSpaceIndex = content.indexOf(" ");
            this.globallySuppressedWarningTypes.push(
                ...content
                    .substring(firstSpaceIndex)
                    .trim()
                    .split(" ")
                    .map((x) => x.trim()),
            );
            return;
        }
        if (content.startsWith("#!rulePrefix ")) {
            let prefix = content.substring("#!rulePrefix ".length).trim();
            currentLine.tokens.push(new Token("__rulePrefix__", this.getFileStackCopy()));
            currentLine.tokens.push(new Token("(", this.getFileStackCopy()));
            currentLine.tokens.push(new Token(prefix, this.getFileStackCopy()));
            currentLine.tokens.push(new Token(")", this.getFileStackCopy()));
            return;
        }
        if (content.startsWith("#!rulePrefixTemplate")) {
            if (this.rulePrefixTemplate !== "") {
                this.error("A rule prefix template has already been defined");
            }
            let template = content.substring("#!rulePrefixTemplate".length).trim() || `f"[{$pathTitle.replace('_', ' ')}] {$rule}" if $rule and not $isDelimiter else $rule`;
            this.rulePrefixTemplate = template;
            let _rulePrefixTemplateFilestack = this.getFileStackCopy();
            _rulePrefixTemplateFilestack[_rulePrefixTemplateFilestack.length - 1].startCol = content.indexOf(template) + 1;
            this.rulePrefixTemplateFilestack = _rulePrefixTemplateFilestack;
            return;
        }
        if (content.startsWith("#!useVariableForCompressionAlphabet")) {
            this.useVariableForCompressionAlphabet = true;
            return;
        }
        if (content.startsWith("#!debugElementCount")) {
            this.debugElementCount = true;
            return;
        }
        if (content.startsWith("#!allowMacroRedeclaration")) {
            this.allowMacroRedeclaration = true;
            return;
        }
        this.error("Unknown preprocessor directive '" + content + "'");
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
                    this.error("A backslash can only be put at the end of a line");
                }
            }
            moveCursor(j - i - 1 + "\n".length);
            continue;
        }
        if (content[i] === "(" || content[i] === "[" || content[i] === "{") {
            bracketsLevel++;
            // Record the fileStack position when opening a bracket at level 0
            // This is used to report accurate error locations for unclosed brackets
            if (bracketsLevel === 1) {
                unclosedBracketFileStack = this.getFileStackCopy();
            }
            addToken(content[i]);
            continue;
        }
        if (content[i] === ")" || content[i] === "]" || content[i] === "}") {
            bracketsLevel--;
            if (bracketsLevel < 0) {
                this.error("Brackets level below 0 (extraneous closing bracket)");
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
                let basePath = this.rootPath;
                for (let k = this.fileStack.length - 1; k >= 0; k--) {
                    if (this.fileStack[k].path) {
                        basePath = this.fileStack[k].path as string;
                        break;
                    }
                }
                let paths = this.getFilePaths(preprocessingDirectiveContent.substring(space), basePath);

                for (let path of paths) {

                    let importedFileContent = this.getFileContent(path);
                    this.fileStack.push({
                        name: this.getFilenameFromPath(path),
                        path: path,
                        startLine: 1,
                        startCol: 1,
                        endLine: null,
                        endCol: null,
                        remainingChars: 99999999999, //does not matter
                        staticMember: true,
                        fileStackMemberType: "normal",
                    } as ScriptFileStackMember);
                    let pushLine = new LogicalLine(0, [new Token("__pushRulePrefixStack__", this.getFileStackCopy())]);
                    let popLine = new LogicalLine(0, [new Token("__popRulePrefixStack__", this.getFileStackCopy())]);
                    result.push(pushLine);
                    result.push(...this.tokenize(importedFileContent));
                    result.push(popLine);
                    this.fileStack.pop();
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
                this.error("Multiline comment isn't terminated (found end of file while searching for end of comment)");
            }
            j += "*/".length;
            moveCursor(j - i - 1);
        } else if (content.startsWith("*/", i)) {
            //All ends should be found when a multiline comment start is found.
            this.error("Found end of multiline comment, but no matching beginning");
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
                this.error("String isn't terminated (found end of file while searching for end of string)");
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
                for (var k = 0; k < this.macros.length; k++) {
                    if (content.substring(i, j) === this.macros[k].name) {
                        let text;
                        let replacement;
                        let macroCols = 0;
                        let macroLines = 0;

                        if (this.macros[k].isFunction) {
                            //debug("Resolving function macro "+this.macros[k].name);
                            let bracketPos = this.getBracketPositions(content.substring(i), true, true);
                            text = content.substring(i, i + bracketPos[1] + 1);
                            let macroArgs = this.getArgs(content.substring(i + bracketPos[0] + 1, i + bracketPos[1]));
                            replacement = this.resolveMacro(this.macros[k], macroArgs, currentLine.indentLevel);
                        } else {
                            //debug("Resolving normal macro "+this.macros[k].name);
                            text = this.macros[k].name;
                            //replacement = this.macros[k].replacement;
                            replacement = this.resolveMacro(this.macros[k], [], currentLine.indentLevel);
                        }

                        content = content.substring(0, i) + replacement + content.substring(i + text.length);

                        if (text.indexOf("\n") >= 0) {
                            macroCols = text.length - text.lastIndexOf("\n");
                            macroLines = text.split("\n").length - 1;
                        } else {
                            macroCols = text.length;
                        }

                        if (replacement === undefined) {
                            this.error("Replacement is undefined");
                        }

                        addFile(replacement.length, text.length, macroCols, macroLines, this.macros[k].name, this.macros[k].startingCol, (this.macros[k].fileStack[this.macros[k].fileStack.length - 1] as BaseNormalFileStackMember).startLine as number);

                        //debug("Text: "+text);
                        //debug("Replacement: "+replacement);

                        k = 0;
                        i--;
                        let currentFile = this.fileStack[this.fileStack.length - 1];
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
                    this.error("Unknown token '" + content[i] + "'");
                }
            }
        }
    }

    if (bracketsLevel > 0) {
        // Use the recorded fileStack to report accurate line numbers
        // The current fileStack has been modified by moveCursor() during tokenization
        this.error("Found end of file, but a bracket isn't closed", unclosedBracketFileStack);
    }

    if (DEBUG_MODE) {
        console.log(result.join("\n"));
    }

    return result;
}

OverPyCompiler.prototype.addScriptErrorFileStack = function(errorObject: Error, scriptPath: string, lineOffset: number) {
    if (!errorObject.stack) {
        return;
    }

    const scriptPathPattern = scriptPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const matchRegex = new RegExp(`${scriptPathPattern}:(\\d+):(\\d+)`, "g");
    const fileName = this.getFilenameFromPath(scriptPath);
    let match: RegExpExecArray | null = null;
    while ((match = matchRegex.exec(errorObject.stack)) !== null) {
        this.fileStack.push({
            name: fileName,
            startLine: Math.max(1, parseInt(match[1]) - lineOffset),
            startCol: parseInt(match[2]),
            endLine: null,
            endCol: null,
            staticMember: true,
        });
    }
}

OverPyCompiler.prototype.resolveMacro = function(macro: MacroData, args: string[] = [], indentLevel: number): string {
    var result = "";

    if (macro.isFunction) {
        //debug("Args: "+args);
        if (args.length !== macro.args.length) {
            this.error("Wrong number of arguments for macro " + macro.name);
        }

        if (macro.isScript) {
            let scriptContent = this.getFileContent(macro.scriptPath);
            let vars = "";
            for (let i = 0; i < args.length; i++) {
                vars += "var " + macro.args[i] + "=" + args[i] + ";";
            }
            scriptContent = vars + "\n" + scriptContent;
            scriptContent = builtInJsFunctions + scriptContent;
            try {
                result = executeQuickJSScript(scriptContent, {
                    filename: macro.scriptPath,
                    kind: "macro",
                    lineOffset: builtInJsFunctionsNbLines,
                });
            } catch (e: any) {
                if (e instanceof Error) {
                    this.addScriptErrorFileStack(e, macro.scriptPath, builtInJsFunctionsNbLines);
                }
                this.error(e);
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

OverPyCompiler.prototype.parseMacro = function (initialMacroData: { fileStack: FileStackMember[]; content: string }): MacroData {
    let trimmedMacroContent = initialMacroData.content.substring(initialMacroData.content.indexOf(" ") + 1);
    let bracketPos = this.getBracketPositions(trimmedMacroContent, false, true);
    const isFunctionMacro = bracketPos.length > 0 && trimmedMacroContent.indexOf(" ") >= bracketPos[0];

    let basePath = this.rootPath;
    for (let k = this.fileStack.length - 1; k >= 0; k--) {
        if (this.fileStack[k].path) {
            basePath = this.fileStack[k].path as string;
            break;
        }
    }

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

    if (this.macros.some((m) => m.name === macro.name)) {
        if (this.allowMacroRedeclaration) {
            this.macros.splice(this.macros.findIndex((m) => m.name === macro.name), 1);
        } else {
            this.error("Macro '" + macro.name + "' is already defined");
        }
    }

    //Not sure how to handle the general case of multiple macros referencing each other
    if (macro.text === macro.replacement) {
        this.error("Macro '" + macro.name + "' references itself");
    }

    if (!macro.isFunction) {
        //Not a function macro
        if (reservedNames.includes(macro.name)) {
            this.warn("w_redefining_keyword", "The macro name '" + macro.name + "' is a keyword");
        }
    } else {
        let functionMacro = macro as FunctionMacroData;
        functionMacro.isFunction = true;
        //Function macro
        functionMacro.args = this.getArgs(functionMacro.content.substring(bracketPos[0] + 1, bracketPos[1]));

        //Test for script macro
        if (functionMacro.replacement.startsWith("__script__(")) {
            functionMacro.isScript = true;
            functionMacro.scriptPath = this.getFilePaths(functionMacro.replacement.substring("__script__(".length, functionMacro.replacement.length - 1), basePath)[0];
        } else {
            functionMacro.isScript = false;
        }
    }

    if (!macro.text || !macro.replacement) {
        this.error("Expected a macro declaration (eg: #!define myVar A)");
    }

    return macro;
}
