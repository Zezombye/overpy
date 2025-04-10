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

import { blizzGlobalDefaultWidth, blizzGlobalWidths, spaces } from "../../data/opy/blizzardGlobal";
import { astParsingFunctions } from "../../globalVars";
import { Ast, astContainsRandom, getAstFor0, getAstForColorWhite, getAstForCustomString, getAstForNumber } from "../../utils/ast";
import { error } from "../../utils/logging";

const alphabet: Record<string, any> = { a: { lower: "\uff41", width: 285, xmin: 21, lowerWidth: 512, lowerXmin: 130 }, b: { lower: "\uff42", width: 285, xmin: 28, lowerWidth: 512, lowerXmin: 136 }, c: { lower: "\uff43", width: 256, xmin: 16, lowerWidth: 512, lowerXmin: 142 }, d: { lower: "\uff44", width: 285, xmin: 13, lowerWidth: 512, lowerXmin: 136 }, e: { lower: "\uff45", width: 285, xmin: 20, lowerWidth: 512, lowerXmin: 135 }, f: { lower: "\uff46", width: 142, xmin: 9, lowerWidth: 512, lowerXmin: 195 }, g: { lower: "\uff47", width: 285, xmin: 15, lowerWidth: 512, lowerXmin: 138 }, h: { lower: "\uff48", width: 285, xmin: 36, lowerWidth: 512, lowerXmin: 150 }, i: { lower: "\u0456", width: 114, xmin: 34, lowerWidth: 115, lowerXmin: 36 }, j: { lower: "\u0458", width: 114, xmin: -9, lowerWidth: 115, lowerXmin: -9 }, k: { lower: "\uff4b", width: 256, xmin: 30, lowerWidth: 512, lowerXmin: 142 }, l: { lower: "I", width: 114, xmin: 35, lowerWidth: 142, lowerXmin: 51 }, m: { lower: "\uff4d", width: 426, xmin: 36, lowerWidth: 512, lowerXmin: 79 }, n: { lower: "\uff4e", width: 285, xmin: 36, lowerWidth: 512, lowerXmin: 149 }, o: { lower: "\uff4f", width: 285, xmin: 18, lowerWidth: 512, lowerXmin: 135 }, p: { lower: "\uff50", width: 285, xmin: 28, lowerWidth: 512, lowerXmin: 136 }, q: { lower: "\uff51", width: 285, xmin: 13, lowerWidth: 512, lowerXmin: 136 }, r: { lower: "\uff52", width: 170, xmin: 35, lowerWidth: 512, lowerXmin: 191 }, s: { lower: "\uff53", width: 256, xmin: 17, lowerWidth: 512, lowerXmin: 147 }, t: { lower: "\uff54", width: 142, xmin: 7, lowerWidth: 512, lowerXmin: 195 }, u: { lower: "\uff55", width: 285, xmin: 33, lowerWidth: 512, lowerXmin: 149 }, v: { lower: "\uff56", width: 256, xmin: 5, lowerWidth: 512, lowerXmin: 134 }, w: { lower: "\uff57", width: 370, xmin: 3, lowerWidth: 512, lowerXmin: 76 }, x: { lower: "\uff58", width: 256, xmin: 9, lowerWidth: 512, lowerXmin: 139 }, y: { lower: "\uff59", width: 256, xmin: 10, lowerWidth: 512, lowerXmin: 139 }, z: { lower: "\uff5a", width: 256, xmin: 16, lowerWidth: 512, lowerXmin: 147 } };

export function getBestSpaces(coins: number[], target: number) {
    let costs = [0];
    let coins_used: number[] = [0];

    for (let i = 1; i <= target; i++) {
        let bestCost = 999999999999999;
        let bestCoin = -1;

        for (let coin of coins) {
            if (coin <= i) {
                let cost = 1 + costs[i - coin];
                if (cost < bestCost) {
                    bestCost = cost;
                    bestCoin = coin;
                }
            }
        }

        costs.push(bestCost);
        coins_used.push(bestCoin);
    }

    let ret = [];
    while (target > 0) {
        ret.push(coins_used[target]);
        target -= coins_used[target];
    }

    return ret;
}

function generateCasedLine(text: string, nbTexts: number) {
    let textWidth = 0;
    //We cannot get rid of the "space" of the first fullwidth letter, so take it into account
    let foundLetterToLowercase = false;
    let textCopy = text.replace(/(<fg\s*#?[0-9a-f\{\}]+>|<\/fg>)/gi, "");
    for (let i = 0; i < textCopy.length; i++) {
        if (textCopy.charAt(i) in alphabet) {
            foundLetterToLowercase = true;
        }
        //The letters i, j, and l are not fullwidth
        if ("abcdefghkmnopqrstuvwxyz".includes(textCopy.charAt(i))) {
            textWidth = Math.max(0, alphabet[textCopy.charAt(i)].lowerXmin - textWidth);
            break;
        } else {
            textWidth += blizzGlobalWidths[textCopy.charAt(i)] ?? blizzGlobalDefaultWidth;
        }
    }
    if (!foundLetterToLowercase) {
        //don't do anything
        return Array(nbTexts)
            .fill(0)
            .map(() => text);
    }
    const texts = Array(nbTexts)
        .fill(0)
        .map(() => ({
            content: "",
            width: 0,
        }));
    let textIdx = 0;
    let lastLetter = "";

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];

        if (letter in alphabet) {
            textIdx += 1;
            textIdx %= nbTexts;

            const widthToGet = Math.max(0, textWidth - texts[textIdx].width - alphabet[letter].lowerXmin + alphabet[letter].xmin);

            const spacesToAdd = getBestSpaces(Object.keys(spaces).map(Number), widthToGet)
                .map((j) => spaces[j])
                .join("");
            texts[textIdx].content += spacesToAdd;
            texts[textIdx].width += widthToGet;
            texts[textIdx].content += alphabet[letter].lower;
            texts[textIdx].width += alphabet[letter].lowerWidth;
            lastLetter = letter;
        } else if (text.substring(i).match(/^(<fg\s*#?[0-9a-f\{\}]+>|<\/fg>)/i)) {
            //Add the tag to all the strings, and skip past it
            for (let _text of texts) {
                _text.content += text.substring(i, text.indexOf(">", i) + 1);
            }
            i = text.indexOf(">", i);
            textIdx += 1;
            textIdx %= nbTexts;
            continue;
        } else if (text[i] !== " ") {
            if (texts[textIdx].content.length === 0 || lastLetter in alphabet || lastLetter === " ") {
                textIdx += 1;
                textIdx %= nbTexts;

                const widthToGet = textWidth - texts[textIdx].width;

                const spacesToAdd = getBestSpaces(Object.keys(spaces).map(Number), widthToGet)
                    .map((j) => spaces[j])
                    .join("");
                texts[textIdx].content += spacesToAdd;
                texts[textIdx].width += widthToGet;
            }
            texts[textIdx].content += letter;
            texts[textIdx].width += blizzGlobalWidths[letter] ?? blizzGlobalDefaultWidth;
            lastLetter = letter;
        } else if (text[i] === " ") {
            lastLetter = letter;
        }
        textWidth += blizzGlobalWidths[letter] ?? blizzGlobalDefaultWidth;
    }

    const maxTextWidth = Math.max(...texts.map((t) => t.width), textWidth);

    for (let i = 0; i < texts.length; i++) {
        const widthToGet = maxTextWidth - texts[i].width;
        const spacesToAdd = getBestSpaces(Object.keys(spaces).map(Number), widthToGet)
            .map((j) => spaces[j])
            .join("");
        texts[i].content += spacesToAdd;
        texts[i].width += widthToGet;
    }

    return texts.map((t) => t.content);
}

astParsingFunctions.createCasedProgressBarIwt = function (content) {
    if (content.args[0].name !== "__number__") {
        error("First argument of createCasedProgressBarIwt must be a literal number");
    }
    if (content.args[0].args[0].numValue < 2 || content.args[0].args[0].numValue > 6) {
        error("Number of texts must be between 2 and 6");
    }
    if (content.args[2].name !== ".format") {
        error("Text must be a literal custom string");
    }
    for (let arg of content.args) {
        if (astContainsRandom(arg)) {
            error("Cannot use random functions in createCasedProgressBarIwt");
        }
    }

    let iwts: Ast[] = [];
    let nbTexts = content.args[0].args[0].numValue;
    let text: string = content.args[2].args[0].name;

    //Add one space on both sides to counteract the initial fullwidth xmin making the lines not left aligned
    text = text
        .split("\n")
        .map((x) => (x === "" ? x : "  " + x + "  "))
        .join("\n");

    let tokens: { text: string; type: "string" | "arg" }[] = [];

    while (true) {
        let argIndex = text.search(/{\d*}|<tx\s*[0-9a-f\{\}]+>|\n/i);
        if (argIndex >= 0) {
            if (argIndex > 0) {
                tokens.push({
                    text: text.substring(0, argIndex),
                    type: "string",
                });
            }
            text = text.substring(argIndex);
            if (text.charAt(0) === "<") {
                tokens.push({
                    text: text.substring(0, text.indexOf(">") + 1),
                    type: "arg",
                });
                text = text.substring(text.indexOf(">") + 1);
            } else if (text.charAt(0) === "{") {
                tokens.push({
                    text: text.substring(0, text.indexOf("}") + 1),
                    type: "arg",
                });
                text = text.substring(text.indexOf("}") + 1);
            } else if (text.charAt(0) === "\n") {
                tokens.push({
                    text: "\n",
                    type: "arg",
                });
                text = text.substring(1);
            } else {
                error("Case parser broke, please report to Zezombye");
            }
        } else {
            tokens.push({
                text: text,
                type: "string",
            });
            break;
        }
    }

    //console.log(tokens);

    let mappedTokens = tokens.map((t) =>
        t.type === "string"
            ? generateCasedLine(t.text, nbTexts)
            : Array(nbTexts)
                .fill("")
                .map((x) => t.text),
    );

    //console.log(mappedTokens);

    let casedTexts = Array(nbTexts)
        .fill("")
        .map((x, i) =>
            mappedTokens
                .map((x) => x[i])
                .join("")

                //Add a zero-width space at the end to fix the ow2 bug where trailing spaces are trimmed
                .split("\n")
                .map((x) => x + "\u00AD")
                .join("\n"),
        );

    //console.log(casedTexts);

    for (let i = 0; i < nbTexts; i++) {
        iwts.push(
            new Ast("createProgressBarInWorldText", [
                content.args[1], //visibility
                getAstForNumber(i), //percentage
                astParsingFunctions[".format"](new Ast(".format", [new Ast(casedTexts[i], [], [], "CustomStringLiteral"), ...content.args[2].args.slice(1)])), //text
                content.args[3], //position
                content.args[4], //scale
                content.args[5], //clipping
                getAstForColorWhite(), //progress bar color
                content.args[6], //text color
                content.args[7], //reeval
                content.args[8], //spec visibility
            ]),
        );
    }

    content.parent!.children.splice(content.parent!.childIndex + 1, 0, ...iwts.slice(1));

    //error("owo");

    return iwts[0];
};
