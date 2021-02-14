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

function compileCustomGameSettingsDict(dict, refDict) {
	var result = {};
	for (var key of Object.keys(dict)) {
		var wsKey = tows(key, refDict);

		if (typeof refDict[key].values === "object") {
			result[wsKey] = tows(dict[key], refDict[key].values);

		} else if (refDict[key].values === "__string__") {
			if (getUtf8Length(dict[key]) > refDict[key].maxChars) {
				error("String for '"+key+"' must not have more than "+refDict[key].maxChars+" chars");
			}
			result[wsKey] = escapeString(dict[key], true);

		} else if (refDict[key].values === "__percent__" || refDict[key].values === "__int__" || refDict[key].values === "__float__") {
			if (dict[key] > refDict[key].max) {
				error("Value for '"+key+"' must not exceed "+refDict[key].max+"%");
			}
			if (dict[key] < refDict[key].min) {
				error("Value for '"+key+"' must be higher than "+refDict[key].min+"%");
			}
			if (refDict[key].values === "__int__") {
				if (!Number.isInteger(dict[key])) {
					error("Value for '"+key+"' must be an integer");
				}
			}
			if (refDict[key].values === "__percent__") {
				result[wsKey] = dict[key]+"%";
			} else {
				result[wsKey] = dict[key];
			}

		} else if (refDict[key].values === "__boolYesNo__") {
			result[wsKey] = (dict[key] === true ? tows("__yes__", customGameSettingsKw) : tows("__no__", customGameSettingsKw));
		} else if (refDict[key].values === "__boolEnabled__") {
			result[wsKey] = (dict[key] === true ? tows("__enabled__", customGameSettingsKw) : tows("__disabled__", customGameSettingsKw));
		} else if (refDict[key].values === "__boolOnOff__") {
			result[wsKey] = (dict[key] === true ? tows("__on__", customGameSettingsKw) : tows("__off__", customGameSettingsKw));
		} else if (refDict[key].values === "__boolReverseEnabled__") {
			result[wsKey] = (dict[key] === true ? tows("__disabled__", customGameSettingsKw) : tows("__enabled__", customGameSettingsKw));
		} else if (refDict[key].values === "__boolReverseOnOff__") {
			result[wsKey] = (dict[key] === true ? tows("__off__", customGameSettingsKw) : tows("__on__", customGameSettingsKw));
		} else {
			error("Unknown value type "+refDict[key].values);
		}
	}
	return result;
}

//As the workshop does not accept numbers that are too long (such as 0.22585181552505867), trim all numbers to 15 decimal places.
function trimNb(x) {
	var result = ""+x;
	if (result.indexOf('.') >= 0) {
		result = result.substring(0,result.indexOf('.')+16);
	}
	return result;
}





