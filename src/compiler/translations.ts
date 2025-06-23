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

import PO from "pofile";
import { currentRuleName, DEBUG_MODE, disableTranslationSourceLines, keepUnusedTranslations, mainFileName, rootPath, translatedStrings, translationLanguages } from "../globalVars";
import { BaseNormalFileStackMember } from "../types";
import { Ast } from "../utils/ast";
import { escapeString, unescapeString } from "../utils/strings";
import { Token } from "./tokenizer";
import { error } from "../utils/logging";

export type TranslationLanguage = "de" | "en" | "es" | "es_es" | "es_mx" | "fr" | "it" | "ja" | "ko" | "pl" | "pt" | "ru" | "th" | "tr" | "zh" | "zh_cn" | "zh_tw";

export type TranslatedString = {
    default: string;
    occurrences: string[];
    context?: string | null;
    comments?: string[];
    hasMultipleOccurrencesNotification: boolean;
    de?: string;
    en?: string;
    es?: string;
    es_es?: string;
    es_mx?: string;
    fr?: string;
    it?: string;
    ja?: string;
    ko?: string;
    pl?: string;
    pt?: string;
    ru?: string;
    th?: string;
    tr?: string;
    zh?: string;
    zh_cn?: string;
    zh_tw?: string;
};

/*export function isStringSuitableForTranslation(str: string) {
    return str.match(/[[\p{Letter}]&&[^\u303C\u0840]]/v);
}*/

export function getLeadingAndTrailingWhitespace(str: string) {
    let [_, leadingWhitespace, actualString, trailingWhitespace] = (str.match(/^([\p{Separator}\p{Other}\u00AD\u3164\u0001-\u001F]*)([\s\S]*?)([\p{Separator}\p{Other}\u00AD\u3164\u0001-\u001F]*)$/u)) as RegExpMatchArray;
    return {
        leadingWhitespace, actualString, trailingWhitespace
    };
}

export function getTranslatedString(str: string, context: string | null, fileStack: BaseNormalFileStackMember[]): Ast {
    let lineNb = null;
    let fileName = null;

    if (translationLanguages.length === 0) {
        error("Translations must be setup with the #!translations directive");
    }

    //console.log(str);

    //Convert formatters to numbered formatters
    let currentFormatterIndex = 0;
    str = str.replaceAll(/\{\}/g, () => {
        let result = "{" + currentFormatterIndex + "}";
        currentFormatterIndex++;
        return result;
    });

    //I mean I can increase the limit of course but is it really necessary?
    if ((str.match(/\{\d+\}/g) || []).length > 16) {
        error("Cannot translate string " + escapeString(str, false) +" with more than 16 formatters");
    }

    if (str.includes("\uEC48")) {
        error("Cannot have the \\uEC48 character in a translated string, as it is used as a separator");
    }

    let { leadingWhitespace, actualString: actualStringWithNewlines, trailingWhitespace } = getLeadingAndTrailingWhitespace(str);
    //Get leading and trailing whitespace for each line of the string so we can add it back after getting the translation
    let lines = actualStringWithNewlines.split("\n").map(x => getLeadingAndTrailingWhitespace(x));
    let actualString = lines.map(x => x.actualString).join("\n");
    //console.log("lines: ", lines);
    //console.log("actualString: ", actualString);

    for (let i = fileStack.length - 1; i >= 0; i--) {
        if (fileStack[i].name.endsWith(".opy")) {
            lineNb = fileStack[i].startLine;
            fileName = fileStack[i].name.replaceAll(/\\/g, "/").split("/").pop();
            break;
        }
    }
    let occurrence = "file " + (fileName || "<unknown>")+(disableTranslationSourceLines ? "" : ", line " + ((""+lineNb).padStart(4, "0") || "<unknown>")) + ", rule "+escapeString(currentRuleName, true);
    let translatedString = null;
    for (let ts of translatedStrings) {
        if (ts.default === actualString && ts.context === context) {
            ts.occurrences.push(occurrence);
            translatedString = ts;
            break;
        }
    }
    if (!translatedString) {
        //new string we haven't seen yet
        //console.log("It is a new string");
        translatedString = {
            default: actualString,
            context: context,
            occurrences: [occurrence],
            hasMultipleOccurrencesNotification: false,
        };
        translatedStrings.push(translatedString);
    }

    let translatedStringLiterals = translationLanguages.map((language) => {
        return leadingWhitespace + (translatedString[language] || translatedString.default).split("\n").map((line, j) => lines[j].leadingWhitespace + line + lines[j].trailingWhitespace).join("\n") + trailingWhitespace;
    });
    //console.log(translatedStringLiterals);

    return new Ast("__translatedString__", translatedStringLiterals.map(x => new Ast(x, [], [], "CustomStringLiteral")));

}

export function exportToPoFiles(translatedStrings: TranslatedString[]) {

    try {
        var fs = require("fs");
    } catch (e) {
        if (DEBUG_MODE) {
            return;
        }
        error("Cannot do translations in browsers (fs not found)");
    }

    translatedStrings = translatedStrings.filter(x => x.occurrences.length > 0 || keepUnusedTranslations).sort((a, b) => (+(b.occurrences.length > 0) - +(a.occurrences.length > 0)) || a.occurrences[0].localeCompare(b.occurrences[0]));

    for (let language of translationLanguages.slice(1)) { //first language is default language

        let po = new PO();

        po.headers = {
            "Content-Type": "text/plain; charset=UTF-8",
            "Language": language,
            "X-Generator": "OverPy",
        };
        po.items = [];
        for (let translatedString of translatedStrings) {
            let item = new PO.Item();
            item.msgid = translatedString.default;
            item.msgstr = [translatedString[language] || ""];
            if (translatedString.context) {
                item.msgctxt = translatedString.context;
            }
            item.comments = translatedString.comments || [];
            let hasPutMultipleOccurrencesNotification = false;
            if (translatedString.occurrences.length > 1) {
                item.extractedComments.push(translatedString.occurrences.length + " occurrences:");
                if (!translatedString.hasMultipleOccurrencesNotification && translatedString.context === null && !item.msgstr[0]) {
                    item.comments.push("TODO: check if all occurrences have the same translation");
                    hasPutMultipleOccurrencesNotification = true;
                }
            }
            item.flags = {
                "hasMultipleOccurrencesNotification": translatedString.hasMultipleOccurrencesNotification || hasPutMultipleOccurrencesNotification,
            };
            if (translatedString.occurrences.length > 0) {
                item.extractedComments.push(...translatedString.occurrences.map(x => (translatedString.occurrences.length > 1 ? " - " : "") + x.replace(/line 0+/, "line ")));
            } else {
                item.extractedComments.push("Unused translation");
            }
            po.items.push(item);
        }

        fs.writeFileSync(rootPath+"/"+mainFileName.replace(".opy", "."+language+".po"), po.toString(), { encoding: "utf-8" });
    }
}

export function importFromPoFiles() {

    try {
        var fs = require("fs");
    } catch (e) {
        if (DEBUG_MODE) {
            return [];
        }
        error("Cannot do translations in browsers (fs not found)");
    }

    let result: TranslatedString[] = [];
    for (let language of translationLanguages.slice(1)) { //first language is default language

        let poFilePath = rootPath+"/"+mainFileName.replace(".opy", "."+language+".po");
        if (!fs.existsSync(poFilePath)) {
            continue;
        }
        try {
            var poFileContent = fs.readFileSync(poFilePath, { encoding: "utf-8" });
        } catch (e) {
            error("Could not read .po file at '"+poFilePath+"'");
        }
        let po = PO.parse(poFileContent);

        if (po.headers["Language"] !== language) {
            error("Language in PO file '" + poFilePath + "' does not match expected language '" + language + "'");
        }

        for (let item of po.items) {
            let translatedString = null;
            for (let ts of result) {
                if (ts.default === item.msgid && ts.context === item.msgctxt) {
                    translatedString = ts;
                    break;
                }
            }
            if (!translatedString) {
                translatedString = {
                    default: item.msgid,
                    occurrences: [],
                    context: item.msgctxt || null,
                    comments: item.comments || [],
                    hasMultipleOccurrencesNotification: item.flags.hasMultipleOccurrencesNotification || false,
                };
                result.push(translatedString);
            }
            if (item.msgstr.length > 0 && item.msgstr[0] !== "") {
                if ((item.msgstr[0].match(/\n/g) || []).length !== (item.msgid.match(/\n/g) || []).length) {
                    error("Invalid number of lines for translation of " + escapeString(item.msgid, true) + "' in '" + language + "' (" + escapeString(item.msgstr[0], true) + ")");
                }
                translatedString[language] = item.msgstr[0];
            }
        }
    }
    return result;
}
