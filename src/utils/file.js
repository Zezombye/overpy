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

function getFilenameFromPath(path) {
	return path.split('\\').pop().split('/').pop();
}

function getFilePath(pathStr) {
	pathStr = pathStr.trim();
	debug("path str = "+pathStr);
	pathStr = unescapeString(pathStr, false);
	
	//convert backslashes to normal slashes
	pathStr = pathStr.replace(/\\/g, "/");
	debug("Path str is now '"+pathStr+"'");

	//Determine if the path is absolute or relative
	if (pathStr.startsWith("/") || /^[A-Za-z]:/.test(pathStr)) {
		//absolute path
		return pathStr;
	} else {
		//relative path
		return rootPath+pathStr;
	}
}

function getFileContent(path) {
	
	var fs;
	try {
		fs = require("fs");
		//glob = require("glob");
	} catch (e) {
		error("Cannot import files in browsers");
	}
	if (path.endsWith(".opy") && importedFiles.includes(path)) {
		warn("w_already_imported", "The file '"+path+"' was already imported and will not be imported again.");
		return "";
	}
	try {
		/*var matchingFiles = glob.sync(path);
		if (matchingFiles.length === 0) {
			error("The path '"+path+"' did not match any file.");
		}
		var result = "";
		for (matchingFile in matchingFiles) {
			importedFiles.push(matchingFile);
			fileContent = ""+fs.readFileSync(matchingFile);
			if (!fileContent.endsWith("\n")) {
				fileContent += "\n";
			}
			result += fileContent;
		}
		return result;*/
		importedFiles.push(path);
		return ""+fs.readFileSync(path)+"\n";


	} catch (e) {
		error(e);
	}
}
