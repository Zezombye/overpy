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

import { enableOptimization, enableTagsSetup, NUMBER_LIMIT } from "../../globalVars";
import { StringToken } from "../../types";
import { getAstForBool, areAstsAlwaysEqual, getAstForFalse, astParsingFunctions, Ast, numValue } from "../../utils/ast";
import { error, warn } from "../../utils/logging";

astParsingFunctions.__customString__ = function (content) {

    if (!content.stringTokens) {
        error("Custom string has no stringTokens, please report to Zezombye");
    }
    if (content.stringTokens.some(t => t.type === "arg" && t.argIndex === null)) {
        if (content.stringTokens.some(t => t.type === "arg" && t.argIndex !== null)) {
            error("Cannot use both numbered and unnumbered formatters in a custom string");
        }
        if (content.stringTokens.filter(t => t.type === "arg").length !== content.args.length - 1) {
            error("Too few arguments in .format() function: expected " + (content.stringTokens.filter(t => t.type === "arg").length) + ", got " + (content.args.length - 1));
        }
    }


    //Don't replace tags in workshop settings
    if ([content.parent?.name, content.parent?.parent?.name].some(x => ["__createWorkshopSetting__", "createWorkshopSettingBool", "createWorkshopSettingEnum", "createWorkshopSettingInt", "createWorkshopSettingFloat", "createWorkshopSettingBool"].includes(x as string))) {
        content.stringTokens = content.stringTokens.map(token => {
            if (token.type === "tag" || token.type === "holygrail") {
                return {
                    type: "text",
                    text: token.text,
                };
            }
            return token;
        });
    } else {
        if (!enableTagsSetup && content.args[0].name.match(/<(tx\s*|fg\s*#?)([0-9a-fA-F]+>)|(<\/fg>)/)) {
            warn("w_tags", "A tag (<tx> or <fg>) was found in a string, but the #!setupTags directive is needed for OverPy to properly unescape them.");
        }
    }

    //Rewrite formatters so that all args are unnumbered. They will later be deduplicated by the string splitting function.
    //Also convert holygrail tokens to arg tokens, and tag tokens to text tokens. All string modifications that require the two to be distinguished (eg, fullwidth/lowercase which must ignore tags) are done in the parser stage.
    let stringArgs = [];
    let stringArgIndex = 1; //for unnumbered args
    for (let token of content.stringTokens) {
        if (token.type === "holygrail") {
            if (content.parent?.name === "createCasedProgressBarIwt") {
                //Transform to a tag, it will be converted in that function
                token.type = "tag";
            } else {
                stringArgs.push(new Ast("__globalVar__", [new Ast("__holygrail__", [], [], "GlobalVariable")]));
                token.type = "arg";
                token.text = "{}";
                token.argIndex = null;
            }
        } else if (token.type === "arg") {
            if (token.argIndex === null) {
                stringArgs.push(content.args[stringArgIndex]);
                stringArgIndex++;
            } else {
                if (content.args.length-1 <= token.argIndex!) {
                    error("Too few arguments in .format() function: expected " + (token.argIndex! + 1) + ", got " + (content.args.length-1));
                }
                stringArgs.push(content.args[token.argIndex! + 1].clone()); // +1 because the first arg is the string itself
                token.argIndex = null; //make it unnumbered
                token.text = "{}";
            }
        //For createCasedProgressBarIwt, we still need to know the tags to not lowercase them
        } else if (token.type === "tag" && content.parent?.name !== "createCasedProgressBarIwt") {
            token.type = "text";
        }
    }

    if (stringArgs.length !== content.stringTokens.filter(t => t.type === "arg").length) {
        error("String args doesn't match stringTokens args length: " + stringArgs.length + " vs " + content.stringTokens.filter(t => t.type === "arg").length+", please report to Zezombye");
    }

    if (enableOptimization) {
        //When possible, convert the arguments to text.
        let argIndex = 0;
        for (let i = 0; i < content.stringTokens.length; i++) {
            let token = content.stringTokens[i];
            if (token.type !== "arg") {
                continue;
            }
            if (stringArgs[argIndex].name === "__customString__") {
                //Merge the args and the tokens
                content.stringTokens = content.stringTokens.slice(0, i).concat(stringArgs[argIndex].stringTokens!).concat(content.stringTokens.slice(i + 1));
                i += stringArgs[argIndex].stringTokens!.length - 1;
                let newArgs = stringArgs[argIndex].args.slice(1);
                stringArgs = stringArgs.slice(0, argIndex).concat(newArgs).concat(stringArgs.slice(argIndex + 1));
                argIndex += newArgs.length - 1;
                argIndex++;
                continue;
            }
            //The rest of the optimizations must convert directly to text, so that there is no duplicated code when replacing the arg token by a text token.
            let text = null;
            if (stringArgs[argIndex].name === "__array__") {
                warn("w_array_in_string", "Cannot directly display an array in a string, as only the first value will be shown. Use the arrayToString() function.", stringArgs[argIndex].fileStack);
                if (stringArgs[argIndex].args.length === 0) {
                    text = "";
                } else {
                    stringArgs[argIndex] = stringArgs[argIndex].args[0];
                }
            }
            if (stringArgs[argIndex].name === "null") {
                text = "0";
            } else if (stringArgs[argIndex].name === "__number__") {
                let number = numValue(stringArgs[argIndex]) as number;
                if (Math.abs(number) < NUMBER_LIMIT) {
                    text = number.toFixed(2).replace(".00", "");
                }
            }
            if (text !== null) {
                //Replace the arg token with a text token
                content.stringTokens[i] = {
                    type: "text",
                    text: text,
                    argIndex: null
                };
                //Remove the arg from the args list
                stringArgs.splice(argIndex, 1);
                argIndex--;
            }
            argIndex++;
        }
    }

    //Concatenate consecutive text tokens
    content.stringTokens = content.stringTokens.reduce((acc, token) => {
        if (token.type === "text" && acc.length > 0 && acc[acc.length - 1].type === token.type) {
            acc[acc.length - 1].text += token.text;
        } else {
            acc.push(token);
        }
        return acc;
    }, [] as StringToken[]);


    //texture tag autocorrect
    //we have to manually check the arg content to find what used to be holygrail tokens, as they are now arg tokens
    if (enableTagsSetup) {
        let argIndex = 0;
        for (let [i, token] of content.stringTokens.entries()) {
            if (token.type === "arg") {
                argIndex++;
                continue;
            }
            if (token.type !== "text" || i === 0 || content.stringTokens[i - 1].type !== "arg") {
                continue;
            }
            if (stringArgs[argIndex-1].name === "__globalVar__" && stringArgs[argIndex-1].args[0].name === "__holygrail__") {
                let match = token.text.match(/^tx\s*0*([0-9a-fA-F]{1,6})>/i);
                if (match) {
                    //console.log(match[1]);
                    token.text = "txC00000000000000".substring(0, "txC00000000000000".length - match[1].length) + match[1] + token.text.substring(token.text.indexOf(">"));
                }
                if (token.text.match(/^tx\s*0*C[0-9a-fA-F]{6,}>/i) && !token.text.match(/^tx\s*0*C[0-9a-fA-F]{14}>/i)) {
                    warn("w_malformatted_tx", "Malformatted <tx> tag '<" + token.text.substring(0, token.text.indexOf(">")) + ">'. <tx> tags must be in the form <txC000000000xxxxx>.");
                }
            }
        }
    }

    content.args[0].name = content.stringTokens.map(t => t.text).join("");
    content.args = [content.args[0], ...stringArgs];

    return content;
};
