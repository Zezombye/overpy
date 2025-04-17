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

import { astParsingFunctions, enableOptimization, NUMBER_LIMIT } from "../../globalVars";
import { Ast, getAstFor0, getAstFor0_0001, getAstForCustomString, getAstForEmptyArray, getAstForNumber } from "../../utils/ast";
import { parseOpyMacro } from "../../utils/compilation";
import { error, functionNameToString } from "../../utils/logging";
import { escapeString } from "../../utils/strings";

type CompressionInfo = {
    strValues: string[],
    minDecimalPlace: number,
    maxDecimalPlace: number,
    offset: number,
    arrayType: string,
};


//Use base 100 to compress more efficiently
//Use 1 and 2-byte chars to reduce the kb taken.
//Do NOT use letters and numbers because they can be censored (even numbers as they can form stuff like 1488). I allowed "Q", "q" and "2" because idk how you could make a swear word with that.
let alphabet = "\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\n\u000B\u000C\r\u000E\u000F\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001F !\"#$%&'()*+,-./2:;<=>?@Q[\\]^_`q{|}~\u007F\u0080\u0081\u0082\u0083\u0084\u0085\u0086\u0087\u0088\u0089\u008A\u008B\u008C\u008D\u008E\u008F\u0090\u0091\u0092\u0093\u0094\u0095\u0096\u0097\u0098\u0099\u009A\u009B\u009C\u009D\u009E\u009F";

export function prepareAstForCompression(content: Ast, assumeDefaultValues=false) {

    if (content.name !== "__array__") {
        error("Array for compression must be a literal array, got "+functionNameToString(content));
    }
    let arrayType = null;
    let numValues: number[] = [];
    content.args = content.args.map(x => x.name === "null" ? getAstFor0() : x);
    if (content.args.some(x => x.name !== "__number__" && x.name !== "vect")) {
        error("Array for compression must be an array of literal numbers or vectors");
    }
    if (content.args.every(x => x.name === "__number__")) {
        arrayType = "number";
        numValues = content.args.map(x => x.args[0].numValue);
    } else if (content.args.every(x => x.name === "vect")) {
        arrayType = "vector";
        for (let arg of content.args) {
            if (arg.args.some(x => x.name !== "__number__")) {
                error("Array for compression must be an array of literal numbers or vectors");
            }
            numValues.push(...arg.args.map(x => x.args[0].numValue));
        }
    } else {
        error("Array for compression cannot include both numbers and vectors");
    }

    //The decompression function (using .split()) does not work with empty arrays and would return [0,0]
    if (content.args.length === 0) {
        error("Cannot compress an empty array");
    }

    let maxNbDecimals = arrayType === "number" ? 3 : 2;

    //Set limit to +/-50k, that way if we don't have info of the offset we can set it to 50k and have a max value of 99999.999 which is 8 digits
    //For vectors, clamp to 2 decimals and +/- 5000, giving 6 digits
    let numLimit = arrayType === "number" ? 49999 : 4999;
    if (numValues.some(x => Math.abs(x) >= numLimit)) {
        error("Cannot compress a "+arrayType+" +/- " + numLimit + " or larger");
    }


    //To handle negative numbers, add an offset such that all numbers are positive, then subtract that offset when decompressing
    let offset = 0;
    if (assumeDefaultValues) {
        if (arrayType === "number") {
            offset = 50000;
        } else {
            offset = 5000;
        }
    } else {
        let minNumber = Math.min(...numValues);
        if (minNumber < 0) {
            offset = -minNumber;
        }
    }

    numValues = numValues.map(x => x + offset);

    let strValues = numValues.map(x => x.toFixed(maxNbDecimals).toString());

    //Reverse the strings so that .charAt() gives "" (and .strIndex gives 0) and we can potentially omit characters from the compressed string
    //Remove the decimal place, we round to maxNbDecimals so it is fixed point
    strValues = strValues.map(x => x.replace(".", "").split("").reverse().join(""));

    let minDecimalPlace, maxDecimalPlace;

    if (assumeDefaultValues) {
        if (arrayType === "number") {
            minDecimalPlace = -3;
            maxDecimalPlace = 5;
        } else {
            minDecimalPlace = -2;
            maxDecimalPlace = 4;
        }
    } else {

        minDecimalPlace = -maxNbDecimals;
        while (strValues.every(x => x.startsWith("0"))) {
            strValues = strValues.map(x => x.substring(1));
            minDecimalPlace++;
        }
        maxDecimalPlace = minDecimalPlace + Math.max(...strValues.map(x => x.length));
    }
    //Remove trailing zeroes (there might be some because of floating point, eg 0.123)
    strValues = strValues.map(x => x.replace(/0+$/, "")).map(x => x === "" ? "0" : x);

    //console.log(minDecimalPlace, maxDecimalPlace, strValues);

    return { strValues, minDecimalPlace, maxDecimalPlace, offset, arrayType };
}

export function compressToString(compressionInfo: CompressionInfo): string {

    let { strValues, minDecimalPlace, maxDecimalPlace, offset, arrayType } = compressionInfo;


    function compressString(str: string) {
        let compressed = "";
        for (let i = 0; i < str.length; i += 2) {
            let mappedChar = alphabet[parseInt(str.substring(i, i+2).split("").reverse().join(""))];
            if (mappedChar === undefined) {
                error("Cannot compress '" + str.substring(i, i+2) + "', please report to Zezombye");
            }
            compressed += mappedChar;
        }
        return compressed;
    }

    let compressedString;

    if (arrayType === "number") {
        compressedString = strValues.map(x => compressString(x)).join("0");
    } else {

        //If there is a way to convert [1,2,3,4,5,6] to [[1,2,3],[4,5,6]] in a single line, please let me know because this would lead to more element saving as we wouldn't need to repeat the decompressionFormula and no need to make all numbers the same length

        //Pad numbers to the end so all numbers are the same length, and make sure to make the length of each number divisible by 2 as we are using base 100
        strValues = strValues.map(x => x.padEnd(Math.ceil((maxDecimalPlace - minDecimalPlace)/2)*2, "0"));

        //Group strValues in groups of 3 numbers
        //Vectors are usually map positions. The Y position is usually lower than the X/Z positions.
        //By putting the Y position at the end, we can remove the trailing 0s and save some space. Therefore, only remove the trailing 0s on the 3rd element.
        let groupedValues: string[] = strValues.slice(0, strValues.length/3).map((x,i) => [strValues[i*3+0], strValues[i*3+2], strValues[i*3+1].replace(/0+$/, "") || "0"]).map(x => x.join(""));

        //console.log(groupedValues);

        compressedString = groupedValues.map(x => compressString(x)).join("0");
    }

    return compressedString;
}

export function getDecompressionAst(compressedString: Ast, compressionInfo: CompressionInfo) {
    let { minDecimalPlace, maxDecimalPlace, offset, arrayType } = compressionInfo;

    if (arrayType === "number") {

        let decompressionFormula = Array(Math.ceil((maxDecimalPlace - minDecimalPlace)/2)).fill(0).map((x, i) => i).map(x => `${Math.pow(100, x+minDecimalPlace/2)}*x.last().strIndex(x[0].charAt(${x}))`).join(" + ");


        return parseOpyMacro(`[${decompressionFormula} - ${offset} for x in [[e, ${escapeString(alphabet, false)}] for e in $compressedString.split(null[0])]]`, ["$compressedString"], [compressedString]);
    } else {


        let decompressionFormulas = Array(3).fill(0).map((_, h) => {
            return Array(Math.ceil((maxDecimalPlace - minDecimalPlace)/2))
                .fill(0)
                .map((x, i) => i)
                .map(x => `
                    ${Math.pow(100, x+minDecimalPlace/2)}*x.last().strIndex(x[0].charAt(${x + Math.ceil((maxDecimalPlace - minDecimalPlace)/2)*h}))
                `).join(" + ");
        });

        //Remember: order is X, Z, Y
        return parseOpyMacro(`[vect(${decompressionFormulas[0]},${decompressionFormulas[2]},${decompressionFormulas[1]}) - vect(1,1,1)*${offset} for x in [[e, ${escapeString(alphabet, false)}] for e in $compressedString.split(null[0])]]`, ["$compressedString"], [compressedString]);
    }

}

astParsingFunctions.compressed = function (content) {

    let compressionInfo = prepareAstForCompression(content.args[0]);

    let compressedString = compressToString(compressionInfo);

    return getDecompressionAst(getAstForCustomString(compressedString), compressionInfo);

};
