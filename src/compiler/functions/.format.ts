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

import { enableOptimization, bigLettersMappings, fullwidthMappings, DEBUG_MODE, enableTagsSetup, NUMBER_LIMIT, STR_MAX_LENGTH} from "../../globalVars";
import { Token } from "../../compiler/tokenizer";
import { getAstForNull, Ast, astParsingFunctions } from "../../utils/ast";
import { error, warn } from "../../utils/logging";
import { getUtf8Length } from "../../utils/strings";
import { getAstForTranslatedString } from "./__translatedString__";


astParsingFunctions[".format"] = function (content) {
    if (content.args[0].name === "__translatedString__") {
        return getAstForTranslatedString(content.args[0], content.args.slice(1));
    }
    error("Unexpected function '" + content.name + "' for custom string, please report to Zezombye");
};
