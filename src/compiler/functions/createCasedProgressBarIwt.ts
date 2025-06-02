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
import { StringToken } from "../../types";
import { Ast, astContainsRandom, astParsingFunctions, getAstFor0, getAstForColorWhite, getAstForCustomString, getAstForNumber } from "../../utils/ast";
import { error } from "../../utils/logging";
import { parseStringTokens } from "../parser";

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

//More like "generateCasedSegment" as the algorithm is the same after a texture tag or after a formatter.
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
        return Array(nbTexts).fill(0).map(() => text);
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
        } else if (letter !== " ") {
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
        } else if (letter === " ") {
            lastLetter = letter;
        }
        textWidth += blizzGlobalWidths[letter] ?? blizzGlobalDefaultWidth;
    }

    const maxTextWidth = Math.max(...texts.map((t) => t.width), textWidth);

    for (let i = 0; i < texts.length; i++) {
        const widthToGet = maxTextWidth - texts[i].width;
        const spacesToAdd = getBestSpaces(Object.keys(spaces).map(Number), widthToGet).map((j) => spaces[j]).join("");
        texts[i].content += spacesToAdd;
        texts[i].width += widthToGet;
    }

    return texts.map((t) => t.content);
}

astParsingFunctions.createCasedProgressBarIwt = function (content) {
    if (content.args[0].name !== "__number__") {
        error("First argument of createCasedProgressBarIwt must be a literal number", content.args[0].fileStack);
    }
    if (content.args[0].args[0].numValue < 2 || content.args[0].args[0].numValue > 6) {
        error("Number of texts must be between 2 and 6", content.args[0].fileStack);
    }
    if (content.args[2].name !== "__customString__") {
        error("Text must be a literal custom string", content.args[2].fileStack);
    }
    for (let arg of content.args) {
        if (astContainsRandom(arg)) {
            error("Cannot use random functions in createCasedProgressBarIwt", arg.fileStack);
        }
    }

    let iwts: Ast[] = [];
    let nbTexts = content.args[0].args[0].numValue;
    let stringTokens = content.args[2].stringTokens!;

    for (let i = 0; i < stringTokens.length; i++) {
        let token = stringTokens[i];
        if (token.type === "text" && token.text.includes("\n")) {
            //Add two spaces on both sides to counteract the initial fullwidth xmin making the lines not left aligned
            token.text = token.text.replaceAll("\n", "  \n  ");
            //Splice to not put the newlines in the generateCasedLine function
            let newTokens = token.text.split("\n").map((x) => ({ text: x, type: "text"} as StringToken));
            for (let j = 0; j < newTokens.length; j++) {
                stringTokens.splice(i + j*2, 0, newTokens[j]);
                if (j < newTokens.length - 1) {
                    //Add a new line token
                    stringTokens.splice(i + j*2 + 1, 0, { text: "\n", type: "arg" });
                }
            }
            i += newTokens.length * 2 - 1;
            stringTokens.splice(i, 1); //Remove the original token
        }
    }

    //Concatenate consecutive text/tag tokens
    stringTokens = stringTokens.reduce((acc, token) => {
        if ((token.type === "text" || token.type === "tag") && acc.length > 0 && acc[acc.length - 1].type === token.type) {
            acc[acc.length - 1].text += token.text;
        } else {
            acc.push(token);
        }
        return acc;
    }, [] as StringToken[]);

    //Convert fg tags to text tokens, otherwise there is a big space around the tag.
    //This will not work properly if the tag contains a formatter, but I honestly can't be bothered to fix.
    for (let i = 0; i < stringTokens.length; i++) {
        let token = stringTokens[i];
        if (token.type === "tag" && (token.text.toLowerCase().startsWith("<fg") || token.text.toLowerCase().startsWith("</fg>"))) {
            stringTokens[i] = { text: token.text.substring(0, token.text.indexOf(">")+1), type: "text" };
            //There might be a tx tag immediately following the fg tag, so we need to check for that
            stringTokens.splice(i+1, 0, { text: token.text.substring(token.text.indexOf(">")+1), type: "tag" });
        }
    }

    stringTokens = stringTokens.filter(t => t.text !== "");

    //Concatenate consecutive text/tag tokens again
    stringTokens = stringTokens.reduce((acc, token) => {
        if ((token.type === "text" || token.type === "tag") && acc.length > 0 && acc[acc.length - 1].type === token.type) {
            acc[acc.length - 1].text += token.text;
        } else {
            acc.push(token);
        }
        return acc;
    }, [] as StringToken[]);

    //console.log(stringTokens);

    let mappedTokens = stringTokens.map((t) => t.type === "text" ? generateCasedLine(t.text, nbTexts) : Array(nbTexts).fill("").map((x) => t.text));
    //let mappedTokens = tokenRuns.map((run) => run[0].text !== "\n" ? generateCasedLine(run, nbTexts) : Array(nbTexts).fill("").map((x) => run[0].text));
    //let mappedTokens: string[][] = generateCasedLine(stringTokens, nbTexts);

    //console.log(mappedTokens);

    let casedTexts = Array(nbTexts).fill("").map((x, i) => mappedTokens
        .map((x) => x[i]).join("")
        //Add a zero-width space at the end to fix the ow2 bug where trailing spaces are trimmed
        .split("\n").map((x) => x + "\u00AD").join("\n"),
    );
    /*let casedTexts = generateCasedLine(stringTokens, nbTexts).map(x =>
        //Add a zero-width space at the end to fix the ow2 bug where trailing spaces are trimmed
        x.split("\n").map((x) => x + "\u00AD").join("\n")
    );*/

    //console.log(casedTexts);

    for (let i = 0; i < nbTexts; i++) {
        iwts.push(
            new Ast("createProgressBarInWorldText", [
                content.args[1], //visibility
                getAstForNumber(i), //percentage
                getAstForCustomString(casedTexts[i], content.args[2].args.slice(1)), //text
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

    return iwts[0];
};
