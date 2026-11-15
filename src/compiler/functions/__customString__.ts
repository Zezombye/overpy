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

import { NUMBER_LIMIT } from "../../globalVars";
import { StringToken } from "../../types";
import { astParsingFunctions, Ast, numValue } from "../../utils/ast";

//Functions for which tags must not be replaced in strings
const workshopSettingFunctions = new Set(["__createWorkshopSetting__", "createWorkshopSettingBool", "createWorkshopSettingEnum", "createWorkshopSettingInt", "createWorkshopSettingFloat"]);
const tagRegex = /<(tx\s*|fg\s*#?)([0-9a-fA-F]+>)|(<\/fg>)/;

astParsingFunctions.__customString__ = function (content, compiler) {

    let tokens = content.stringTokens;
    if (!tokens) {
        throw compiler.error("Custom string has no stringTokens, please report to Zezombye");
    }

    //Check the formatters
    let nbArgTokens = 0;
    let hasUnnumberedArgs = false;
    let hasNumberedArgs = false;
    for (let token of tokens) {
        if (token.type === "arg") {
            nbArgTokens++;
            if (token.argIndex === null) {
                hasUnnumberedArgs = true;
            } else {
                hasNumberedArgs = true;
            }
        }
    }
    if (hasUnnumberedArgs) {
        if (hasNumberedArgs) {
            compiler.error("Cannot use both numbered and unnumbered formatters in a custom string");
        }
        if (nbArgTokens !== content.args.length - 1) {
            compiler.error("Too few arguments in .format() function: expected " + nbArgTokens + ", got " + (content.args.length - 1));
        }
    }

    let parentName = content.parent?.name;
    //Don't replace tags in workshop settings
    let isInWorkshopSetting = (parentName !== undefined && workshopSettingFunctions.has(parentName)) || (content.parent?.parent?.name !== undefined && workshopSettingFunctions.has(content.parent.parent.name));
    if (isInWorkshopSetting) {
        for (let token of tokens) {
            if (token.type === "tag" || token.type === "holygrail") {
                token.type = "text";
            }
        }
    } else if (!compiler.enableTagsSetup && tagRegex.test(content.args[0].name)) {
        compiler.warn("w_tags", "A tag (<tx> or <fg>) was found in a string, but the #!setupTags directive is needed for OverPy to properly unescape them.");
    }
    //For createCasedProgressBarIwt, we still need to know the tags to not lowercase them
    let isInCasedProgressBar = parentName === "createCasedProgressBarIwt";

    //Single pass over the tokens, which:
    //- rewrites formatters so that all args are unnumbered (they will later be deduplicated by the string splitting function), converts holygrail tokens to arg tokens and tag tokens to text tokens.
    //  All string modifications that require the two to be distinguished (eg, fullwidth/lowercase which must ignore tags) are done in the parser stage;
    //- when optimizing, converts the arguments to text when possible (literal numbers, null, string literals which are merged into this string);
    //- concatenates consecutive text tokens.
    let newTokens: StringToken[] = [];
    let stringArgs: Ast[] = [];
    let unnumberedArgIndex = 1; //index in content.args of the next unnumbered arg
    const pushText = (text: string) => {
        if (newTokens.length > 0 && newTokens[newTokens.length - 1].type === "text") {
            //Text tokens in newTokens are always created here, so it is safe to mutate them
            newTokens[newTokens.length - 1].text += text;
        } else {
            newTokens.push({ type: "text", text: text, argIndex: null });
        }
    };
    const pushArg = (token: StringToken, arg: Ast) => {
        newTokens.push(token);
        stringArgs.push(arg);
    };

    for (let token of tokens) {
        if (token.type === "text") {
            pushText(token.text);
            continue;
        }
        if (token.type === "tag") {
            if (isInCasedProgressBar) {
                newTokens.push(token);
            } else {
                token.type = "text";
                pushText(token.text);
            }
            continue;
        }

        let arg: Ast;
        if (token.type === "holygrail") {
            if (isInCasedProgressBar) {
                //Transform to a tag, it will be converted in that function
                token.type = "tag";
                newTokens.push(token);
                continue;
            }
            arg = compiler.Ast("__globalVar__", [compiler.Ast("__holygrail__", [], [], "GlobalVariable")]);
            token.type = "arg";
            token.text = "{}";
            token.argIndex = null;
        } else {
            //arg token
            let argIndex = token.argIndex ?? null;
            if (argIndex === null) {
                arg = content.args[unnumberedArgIndex];
                unnumberedArgIndex++;
            } else {
                if (content.args.length - 1 <= argIndex) {
                    compiler.error("Too few arguments in .format() function: expected " + (argIndex + 1) + ", got " + (content.args.length - 1));
                }
                arg = content.args[argIndex + 1].clone(); // +1 because the first arg is the string itself
                token.argIndex = null; //make it unnumbered
                token.text = "{}";
            }
        }

        if (!compiler.enableOptimization) {
            pushArg(token, arg);
            continue;
        }

        //When possible, convert the arguments to text.
        if (arg.name === "__customString__") {
            //Merge the args and the tokens of the nested string. It was already processed by this function, so its tokens are only text and arg tokens, and its args are not converted again.
            let nestedTokens = arg.stringTokens!;
            let nestedArgIndex = 1;
            for (let nestedToken of nestedTokens) {
                if (nestedToken.type === "text") {
                    pushText(nestedToken.text);
                } else {
                    pushArg(nestedToken, arg.args[nestedArgIndex]);
                    nestedArgIndex++;
                }
            }
            continue;
        }
        let text: string | null = null;
        if (arg.name === "__array__") {
            compiler.warn("w_array_in_string", "Cannot directly display an array in a string, as only the first value will be shown. Use the arrayToString() function.", arg.fileStack);
            if (arg.args.length === 0) {
                text = "";
            } else {
                arg = arg.args[0];
            }
        }
        if (arg.name === "null") {
            text = "0";
        } else if (arg.name === "__number__") {
            let number = numValue(arg) as number;
            if (Math.abs(number) <= NUMBER_LIMIT) {
                text = number.toFixed(2).replace(".00", "");
            }
        }
        if (text !== null) {
            //Replace the arg token with a text token
            pushText(text);
        } else {
            pushArg(token, arg);
        }
    }

    content.stringTokens = newTokens;

    //texture tag autocorrect
    //we have to manually check the arg content to find what used to be holygrail tokens, as they are now arg tokens
    if (compiler.enableTagsSetup) {
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
                    compiler.warn("w_malformatted_tx", "Malformatted <tx> tag '<" + token.text.substring(0, token.text.indexOf(">")) + ">'. <tx> tags must be in the form <txC000000000xxxxx>.");
                }
            }
        }
    }

    let name = "";
    for (let token of content.stringTokens) {
        name += token.text;
    }
    content.args[0].name = name;
    content.args = [content.args[0], ...stringArgs];

    return content;
};
