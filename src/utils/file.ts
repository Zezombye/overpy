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

import { importedFiles } from "../globalVars";
import { debug, error, warn } from "./logging";
import { unescapeString } from "./strings";

export function getFilenameFromPath(filename: string) {
    try {
        var path = require("path");
    } catch (e) {
        error("Cannot import files in browsers (path not found)");
    }
    return path.parse(filename).base;
}

export function getFilePaths(pathStr: string, basePath: string): string[] {
    try {
        var fs = require("fs");
        var path = require("path");
    } catch (e) {
        error("Cannot import files in browsers (fs not found)");
    }
    //console.log("basePath = " + basePath);
    if (!basePath.endsWith("/")) {
        basePath = basePath.split("/").slice(0, -1).join("/") + "/";
    }
    pathStr = pathStr.trim();
    debug("path str = " + pathStr);
    pathStr = unescapeString(pathStr, false);

    //convert backslashes to normal slashes
    pathStr = pathStr.replace(/\\/g, "/");
    debug("Path str is now '" + pathStr + "'");

    //Determine if the path is relative
    if (!(pathStr.startsWith("/") || /^[A-Za-z]:/.test(pathStr))) {
        //relative path
        pathStr = basePath + pathStr;
    }

    let matchingFiles: string[] = [];
    if (fs.lstatSync(pathStr).isDirectory()) {
        matchingFiles = (fs.readdirSync(pathStr) as string[]).map((f) => pathStr + f);
        matchingFiles = matchingFiles.filter((f) => f.toLowerCase().endsWith(".opy") && fs.lstatSync(f).isFile());
        if (matchingFiles.length === 0) {
            error("The directory '" + pathStr + "' does not have any .opy files.");
        }
    } else {
        matchingFiles = [pathStr];
    }
    matchingFiles.sort();
    return matchingFiles;
}

export function getFileContent(path: string): string {
    try {
        var fs = require("fs");
    } catch (e) {
        error("Cannot import files in browsers (fs not found)");
    }
    if (path.endsWith(".opy") && importedFiles.includes(path)) {
        warn("w_already_imported", "The file '" + path + "' was already imported and will not be imported again.");
        return "";
    }
    try {
        importedFiles.push(path);
        return fs.readFileSync(path) + "\n";
    } catch (e) {
        // @ts-ignore
        error(e);
    }
}
