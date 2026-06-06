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

import { OverPyCompiler, OverPyDecompiler } from "../godClasses";
import { stringKw } from "../data/localizedStrings";
import { Value } from "../types";
import { Token } from "../compiler/tokenizer";
import { debug } from "./logging";

/**
 * Translates a keyword to Workshop from OverPy or vice versa.
 * @param keyword Keyword to translate
 * @param toWorkshop Whether to translate to Workshop output or Python output
 * @param keywordObj Mapping from keyword to value
 * @param options Additional options
 * @returns Translated keyword
 */

OverPyCompiler.prototype.translate = OverPyDecompiler.prototype.translate = function(keyword: string, toWorkshop: boolean, keywordObj: Record<string, any>, options: Record<string, any> = {}): string {
    if (!toWorkshop) {
        keyword = keyword.toLowerCase();
        if (keywordObj !== stringKw) {
            keyword = keyword.replace(/\s/g, "");
        }
        if (keyword === "mccree") {
            keyword = "cassidy";
        } else if (keyword === "mccreeflashbangstunnedeffect") {
            keyword = "cassidyflashbangstunnedeffect";
        } else if (keyword === "mccreeflashbangexplosionsound") {
            keyword = "cassidyflashbangexplosionsound";
        } else if (keyword === "mccreeflashbangexplosioneffect") {
            keyword = "cassidyflashbangexplosioneffect";
        }
    }
    debug("Translating keyword '" + keyword + "'");

    if (toWorkshop) {
        try {
            //Check number of arguments
            if (options.nbArgs && "args" in keywordObj[keyword]) {
                let value = keywordObj[keyword] as Value;
                if ((value.args === null && options.nbArgs !== 0) || (value.args?.length ?? -1) !== options.nbArgs) {
                    this.error("Function '" + keyword + "' takes " + (value.args === null ? 0 : value.args?.length ?? -1) + " arguments, received " + options.nbArgs);
                }
            }

            //Fallback to "en-US" if no entry for this language
            if (this.currentLanguage in keywordObj[keyword]) {
                return keywordObj[keyword][this.currentLanguage] ?? "";
            } else {
                return keywordObj[keyword]["en-US"] ?? "";
            }
        } catch (e) {
            //continue
        }
    } else {
        for (var key of Object.keys(keywordObj)) {
            if (typeof keywordObj[key] !== "object") {
                continue;
            }
            if (keywordObj[key].onlyInOverpy) {
                continue;
            }

            if (this.currentLanguage in keywordObj[key]) {
                var keywordComparing = keywordObj[key][this.currentLanguage];
            } else {
                var keywordComparing = keywordObj[key]["en-US"];
            }
            if (keywordComparing === undefined) {
                this.error("No language found for '" + key + "'");
            }
            keywordComparing = keywordComparing.toLowerCase();
            if (keywordObj !== stringKw) {
                keywordComparing = keywordComparing.replace(/\s/g, "");
            }
            if (keywordComparing === keyword) {
                var result = key;
                if ("args" in keywordObj[key]) {
                    let value = keywordObj[key] as Value;
                    if (value.args !== null && value.args.length === 0) {
                        result += "()";
                    }
                }
                return result;
            }
        }
    }

    throw this.error("No match found for keyword '" + keyword + "'");
}

/**
 * Translates an Overwatch Workshop keyword to OverPy
 * @param keyword Keyword to translate to OverPy code
 * @param keywordArray Record of all permissible keywords
 * @param options Additional options to pass to translations
 */
OverPyDecompiler.prototype.topy = function(keyword: string, keywordArray: Record<string, any>, options: Record<string, any> = {}): string {
    return this.translate(keyword, false, keywordArray, options);
}

/**
 * Translates OverPy tokens/strings to Workshop code
 * @param keyword The keyword (either a token or a string) to translate to Workshop code
 * @param keywordArray Record of all permissible keywords
 * @param options Additional options to pass to translations
 */
OverPyCompiler.prototype.tows = OverPyDecompiler.prototype.tows = function(keyword: Token | string, keywordArray: Record<string, any>, options: Record<string, string> = {}): string {
    //Check if a token was passed, or a string
    if (typeof keyword === "object") {
        this.fileStack = keyword.fileStack;
        return this.translate(keyword.text, true, keywordArray, options);
    } else {
        return this.translate(keyword, true, keywordArray, options);
    }
}
