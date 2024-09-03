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

import { rootPath, importedFiles } from "../globalVars";
import { debug, error, warn } from "./logging";
import * as path from "path";
import { unescapeString } from "./strings";
import { FileType, workspace } from "vscode";
import { URI, Utils } from "vscode-uri";

export function getFilenameFromPath(filename: string) {
    return path.parse(filename).base;
}

export async function getFilePaths(pathStr: string): Promise<string[]> {
    pathStr = pathStr.trim();
    debug("path str = " + pathStr);
    pathStr = unescapeString(pathStr, false);

    //convert backslashes to normal slashes
    pathStr = pathStr.replace(/\\/g, "/");
    debug("Path str is now '" + pathStr + "'");

    //Determine if the path is relative
    if (!(pathStr.startsWith("/") || /^[A-Za-z]:/.test(pathStr))) {
        //relative path
        pathStr = rootPath + pathStr;
    }

    let matchingFiles: string[] = [];
    let resolvedFile = await workspace.fs.stat(URI.file(pathStr));
    if (resolvedFile.type & FileType.Directory) {
        // matchingFiles = fs.readdirSync(pathStr).map(f => pathStr+f);
        let resolvedFiles = await workspace.fs.readDirectory(URI.file(pathStr));
        matchingFiles = resolvedFiles.filter(([fileName, fileType]) => fileName.toLowerCase().endsWith(".opy") && fileType & FileType.File).map(([fileName, _]) => pathStr + "/" + fileName);
        if (matchingFiles.length === 0) {
            error("The directory '" + pathStr + "' does not have any .opy files.");
        }
    } else {
        matchingFiles = [pathStr];
    }
    return matchingFiles;
}

export async function getFileContent(path: string): Promise<string> {
    if (path.endsWith(".opy") && importedFiles.includes(path)) {
        warn("w_already_imported", "The file '" + path + "' was already imported and will not be imported again.");
        return "";
    }
    try {
        importedFiles.push(path);
        let resolvedFile = await workspace.fs.readFile(URI.file(path));
        let content = resolvedFile.toString();
        return content + "\n";
    } catch (e) {
        // @ts-ignore
        error(e);
    }
}
