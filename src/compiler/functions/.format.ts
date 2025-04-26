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

import { enableOptimization, bigLettersMappings, fullwidthMappings, DEBUG_MODE, enableTagsSetup, NUMBER_LIMIT } from "../../globalVars";
import { Token } from "../../compiler/tokenizer";
import { getAstForNull, Ast, astParsingFunctions } from "../../utils/ast";
import { error, warn } from "../../utils/logging";
import { getUtf8Length } from "../../utils/strings";
import { getAstForTranslatedString } from "./__translatedString__";

//The max length of a custom string, in UTF-8 characters. Beyond this limit, we need to split the string.
//The max total length of 511 bytes got removed.
const STR_MAX_LENGTH = 128;

//The max number of arguments in a custom string. Beyond this limit, we need to split the string.
const STR_MAX_ARGS = 3;

astParsingFunctions[".format"] = function (content) {
    //Localized strings take one element more than custom strings.
    //Therefore, convert localized strings into custom strings if they are a localized string that is the same in every language.
    if (enableOptimization && content.args[0].type === "LocalizedStringLiteral" && ["", "*", "----------", "#{0}", "-> {0}", "<-> {0}", "<- {0}", "{0} ->", "{0} <->", "{0} <-", "{0} -> {1}", "{0} - {1}", "{0} != {1}", "{0} * {1}", "{0} / {1}", "{0} + {1}", "{0} <-> {1}", "{0} <- {1}", "{0} <= {1}", "{0} < {1}", "{0} == {1}", "{0} = {1}", "{0} >= {1}", "{0} > {1}", "{0} {1}", "{0} : {1} : {2}", "{0} {1} {2}", "({0})", "¡{0}!", "¿{0}?"].includes(content.args[0].name)) {
        content.args[0].type = "StringLiteral";
    }

    if (content.args[0].type === "LocalizedStringLiteral") {
        return parseLocalizedString(content.args[0], content.args.slice(1));
    }
    if (content.parent?.name === "createCasedProgressBarIwt") {
        //skip optimization so we can edit the string in createCasedProgressBarIwt then call this function to properly split it
        return content;
    }
    if (content.parent?.name === "strVisualLength" || content.parent?.name === "spacesForString") {
        //skip optimization (and string splitting), as the function just needs the length and doesn't do any further processing on the string
        return content;
    }
    if (content.args[0].name === "__translatedString__") {
        return getAstForTranslatedString(content.args[0], content.args.slice(1));
    }
    return parseCustomString(content.args[0], content.args.slice(1));
};

//Parses a custom string.
function parseCustomString(str: Ast, formatArgs: Ast[]) {
    if (!formatArgs) {
        formatArgs = [];
    }

    var content = str.name;
    var tokens: ({ text: string; type: "string" } | { index: number; type: "arg" } | { type: "holygrail" })[] = [];
    var numberIndex = 0;
    var args: Ast[] = [];
    var argsAreNumbered = null;

    //Used to reorder args for easier optimization.
    //Eg "{1}{0}" is converted to "{0}{1}", with the arguments obviously switched.
    var numberMapping: Record<number, number> = {};


    //Tokenize string
    while (true) {
        var fieldIndex = content.search(/{\d*}/);
        var tagIndex = content.search(/<fg|<tx|<\/fg>/i);

        //Don't replace tags in workshop settings
        if ([str.parent?.parent?.name, str.parent?.parent?.parent?.name].some(x => ["__createWorkshopSetting__", "createWorkshopSettingBool", "createWorkshopSettingEnum", "createWorkshopSettingInt", "createWorkshopSettingFloat", "createWorkshopSettingBool"].includes(x as string))) {
            tagIndex = -1;
        }
        if (fieldIndex >= 0 && (fieldIndex < tagIndex || tagIndex < 0)) {
            if (fieldIndex > 0) {
                tokens.push({
                    text: content.substring(0, fieldIndex),
                    type: "string",
                });
                content = content.substring(fieldIndex);
            }
            var number: string | number = content.substring(1, content.indexOf("}"));

            //test for {}
            if (number === "") {
                if (argsAreNumbered === true) {
                    error("Cannot switch from automatic field numbering to manual field specification");
                }
                argsAreNumbered = false;
                number = numberIndex;
            } else {
                if (argsAreNumbered === false) {
                    error("Cannot switch from automatic field numbering to manual field specification");
                }
                argsAreNumbered = true;
                number = parseInt(number);
            }
            if (!(number in numberMapping)) {
                numberMapping[number] = numberIndex;
                numberIndex++;
            }

            tokens.push({
                index: numberMapping[number],
                type: "arg",
            });
            content = content.substring(content.indexOf("}") + 1);
        } else if (tagIndex >= 0) {
            if (tagIndex > 0) {
                tokens.push({
                    text: content.substring(0, tagIndex),
                    type: "string",
                });
                content = content.substring(tagIndex);
            }
            if (!enableTagsSetup) {
                warn("w_tags", "A tag (<tx> or <fg>) was found in a string, but the #!setupTags directive is needed for OverPy to properly unescape them.");
                tokens.push({
                    text: "<",
                    type: "string",
                });
            } else {
                tokens.push({
                    type: "holygrail",
                });
            }

            if (content.match(/^<tx\s*[0-9a-fA-F]+>/i)) {
                if (content.match(/^<tx\s*0*C[0-9a-fA-F]{6,}>/i) && !content.match(/^<tx\s*0*C[0-9a-fA-F]{14}>/i)) {
                    warn("w_malformatted_tx", "Malformatted <tx> tag: '" + content.substring(0, content.indexOf(">")) + ">'. <tx> tags must be in the form <txC000000000xxxxx>.");
                }
            }
            content = content.substring(1);
        } else {
            tokens.push({
                text: content,
                type: "string",
            });
            break;
        }
    }

    //Sort args if there was (potentially) a reordering
    for (var key of Object.keys(numberMapping)) {
        if (formatArgs[+key]) {
            args[numberMapping[+key]] = formatArgs[+key];
        } else {
            if (DEBUG_MODE) console.log(numberMapping);
            error("Too few arguments in format() function: expected " + (+key + 1) + " but found " + formatArgs.length);
        }
    }

    if (tokens.some((token) => token.type === "holygrail")) {
        //Add Global.holygrail at the end of the args, then convert tag tokens to arg tokens
        args.push(new Ast("__globalVar__", [new Ast("__holygrail__", [], [], "GlobalVariable")]));
        tokens = tokens.map((token) => {
            if (token.type === "holygrail") {
                return {
                    index: args.length - 1,
                    type: "arg",
                };
            }
            return token;
        });
    }

    //console.log(tokens);
    //console.log(args);
    //debugger;

    if (enableOptimization) {
        //Optimize string args by inlining numbers and custom strings with at most one {0}
        let argIndexesToRemove = [];
        for (let [i, arg] of args.entries()) {
            if (arg.name === "__number__" && Math.abs(arg.args[0].numValue) < NUMBER_LIMIT || (arg.name === "__customString__" && (arg.args[0].name.match(/\{0\}/g) || []).length <= 1 && !arg.args[0].name.includes("{1}") && !arg.args[0].name.includes("{2}"))) {
                argIndexesToRemove.push(i);
            }
        }
        //args = args.filter((_, i) => !argIndexesToRemove.includes(i))
        tokens = tokens
            .map((t) => {
                if (t.type === "arg" && argIndexesToRemove.includes(t.index)) {
                    let newText: string;
                    if (args[t.index].name === "__number__") {
                        newText = args[t.index].args[0].numValue.toFixed(2).replace(".00", "");
                    } else if (args[t.index].name === "__customString__") {
                        if (args[t.index].args[0].name.includes("{0}")) {
                            let newTexts: { text: string; type: "string" }[] = (args[t.index].args[0].name.split("{0}") as string[]).map((x) => ({ text: x, type: "string" }));
                            args[t.index] = args[t.index].args[1];
                            return [newTexts[0], t, newTexts[1]];
                        } else {
                            newText = args[t.index].args[0].name;
                        }
                    } else {
                        error("Invalid optimized string arg name '" + args[t.index].name + "', please report to Zezombye");
                    }
                    return {
                        text: newText,
                        type: "string" as "string",
                    };
                }
                return t;
            })
            .flat();
    }

    //console.log(tokens);

    //Concatenate consecutive string tokens
    tokens = tokens.reduce((acc: ({ text: string; type: "string" } | { index: number; type: "arg" } | { type: "holygrail" })[], token) => {
        let last = acc[acc.length - 1];
        if (last && last.type === "string" && token.type === "string") {
            last.text += token.text;
        } else {
            acc.push(token);
        }
        return acc;
    }, []);

    //texture tag autocorrect
    if (enableTagsSetup) {
        for (let token of tokens) {
            let match;
            if (token.type === "string" && (match = token.text.match(/^tx\s*0*([0-9a-fA-F]{1,6})>/i))) {
                //console.log(match[1]);
                token.text = "txC00000000000000".substring(0, "txC00000000000000".length - match[1].length) + match[1] + token.text.substring(token.text.indexOf(">"));
            }
        }
    }

    return parseStringTokens(tokens as ({ text: string; type: "string" } | { index: number; type: "arg" })[], args);
}

function parseStringTokens(tokens: ({ text: string; type: "string" } | { index: number; type: "arg" })[], args: Ast[]) {
    var result: string = "";
    var resultArgs: Ast[] = [];
    var uniqueNumbers: number[] = [];
    var numbersEncountered: number[] = [];
    var mappings: Record<number, number> = {};
    var stringLength = 0;

    //console.log("Parsing string tokens: ", structuredClone(tokens));

    //Compilation optimization: check if the string is "simple" (aka one token that doesn't need to be split)
    if (tokens.length === 1 && tokens[0].type === "string" && getUtf8Length(tokens[0].text) <= STR_MAX_LENGTH) {
        result = tokens[0].text;
        return new Ast("__customString__", [new Ast(result, [], [], "CustomStringLiteral"), getAstForNull(), getAstForNull(), getAstForNull()]);
    }

    //Iterate through tokens and figure out the total number of unique numbers
    for (var token of tokens) {
        if (token.type === "string") {
            continue;
        } else {
            if (!uniqueNumbers.includes(token.index)) {
                uniqueNumbers.push(token.index);
            }
        }
    }

    for (let [i, token] of tokens.entries()) {
        let shouldSplitString = false;

        //Check string tokens

        //Check if the string would overflow if we add the token (adding a buffer for a potential "{0}" if there are more tokens remaining).
        //If the string would overflow, then add to the result the text of the token up to the overflow point, and remove that from the token text.
        if (token.type === "string" && stringLength + getUtf8Length(token.text) > STR_MAX_LENGTH - (i === tokens.length - 1 ? 0 : "{0}".length)) {
            shouldSplitString = true;
            let tokenText = [...token.text];
            //console.log(tokenText);
            let tokenSliceLength = 0;
            let sliceIndex = 0;
            for (let j = 0; stringLength + tokenSliceLength < STR_MAX_LENGTH - "{0}".length; j++) {
                tokenSliceLength += getUtf8Length(tokenText[j] + "");
                sliceIndex++;
            }
            result += tokenText.slice(0, sliceIndex).join("");
            token.text = tokenText.slice(sliceIndex).join("");
        }

        //Check arg tokens

        //Check if the string would overflow if there are tokens remaining and adding the arg + an additional arg would make the string overflow.
        //For maximum optimization, check if there is only 1 string token remaining and its length wouldn't make the string overflow.
        if (token.type === "arg"
            && i < tokens.length-1 && stringLength + "{0}{0}".length > STR_MAX_LENGTH
            && !(i === tokens.length-2 && tokens[tokens.length-1].type === "string" && stringLength+"{0}".length+getUtf8Length((tokens[tokens.length-1] as {text: string}).text) <= STR_MAX_LENGTH
        )) {
            shouldSplitString = true;
        }

        if (token.type === "arg" && !(token.index in mappings) && numbersEncountered.length >= STR_MAX_ARGS - 1) {
            //It is a new number

            // If we've got more than 3 numbers incoming, then we have to split
            if (uniqueNumbers.length > STR_MAX_ARGS) {
                shouldSplitString = true;
            } else {
                //Check if the string would overflow if we add all remaining tokens (in which case it would need an additional format arg, so split now)
                let remainingStringLength = 0;
                for (let token2 of tokens.slice(i)) {
                    if (token2.type === "arg") {
                        remainingStringLength += "{0}".length;
                    } else {
                        remainingStringLength += getUtf8Length(token2.text);
                    }
                }
                if (stringLength + remainingStringLength > STR_MAX_LENGTH) {
                    shouldSplitString = true;
                }
            }
        }


        if (shouldSplitString) {
            result += "{" + numbersEncountered.length + "}";
            if (numbersEncountered.length > STR_MAX_ARGS-1) {
                error("Custom string parser returned '{" + numbersEncountered.length + "}', please report to Zezombye");
            }
            resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
            break;
        }

        if (token.type === "string") {
            result += token.text;
            stringLength += getUtf8Length(token.text);

        } else {
            if (!(token.index in mappings)) {
                //It is a new number
                mappings[token.index] = numbersEncountered.length;

                if (numbersEncountered.includes(token.index)) {
                    error("Custom string parser broke (numbersEncountered already contains index), please report to Zezombye");
                }
                numbersEncountered.push(token.index);
                resultArgs.push(args[token.index]);
            }

            result += "{" + mappings[token.index] + "}";
            if (mappings[token.index] > STR_MAX_ARGS-1) {
                error("Custom string parser returned '{" + mappings[token.index] + "}', please report to Zezombye");
            }
            stringLength += "{0}".length;
        }


    }

    while (resultArgs.length < STR_MAX_ARGS) {
        resultArgs.push(getAstForNull());
    }

    if (resultArgs.length !== STR_MAX_ARGS) {
        error("Custom string parser broke (string args length is " + resultArgs.length + "), please report to Zezombye");
    }

    if (getUtf8Length(result) > STR_MAX_LENGTH) {
        error("Custom string parser broke (string char length is "+getUtf8Length(result)+"), please report to Zezombye");
    }

    return new Ast("__customString__", [new Ast(result, [], [], "CustomStringLiteral")].concat(resultArgs));
}

//Parses localized string
function parseLocalizedString(content: Ast, formatArgs: Ast[]) {
    if (formatArgs.length > 3) {
        error("A localized string cannot have more than 3 arguments in the 'format' function");
    }
    while (formatArgs.length < 3) {
        formatArgs.push(getAstForNull());
    }

    return new Ast("__localizedString__", [content, ...formatArgs]);
}
