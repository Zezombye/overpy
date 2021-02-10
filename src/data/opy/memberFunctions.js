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

const opyMemberFuncs = {
    "append": {
        "description": "Appends the specified value to the specified array. Note that this function is really the equivalent of `extend()`, that is, `[1,2].append([3,4])` will produce `[1,2,3,4]` instead of `[1,2,[3,4]]`. Modifies the array in-place; use `concat` to instead return a copy of the array.\n\nExample: `A.append(3)`",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": ["Object", {Array: "Object"}],
                "default": "NUMBER"
            }
        ],
        class: "Array",
        return: "void",
    },
    "charAt": {
        "description": "The character found at a specified index of a string.",
        args: [
            {
                "name": "Index",
                "description": "The index of the character to be acquired (with 0 as the first character, 1 as the second character, etc.).",
                "type": "unsigned int",
                "default": 0
            }
        ],
        class: "String",
        return: "String",
    },
    "concat": {
        "description": "A copy of the array with the specified value appended to it.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": ["Object", {Array: "Object"}],
                "default": "NUMBER"
            }
        ],
        class: "Array",
        return: "Array",
    },
    "exclude": {
        "description": "A copy of the array with one or more values removed (if found).",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        class: "Array",
        return: "Array",
    },
    "format": {
        "description": "The values that will be converted to text and used to replace the format placeholders (such as `{}` or `{0}`). Only usable on a string. Can have as much arguments as there are placeholders. The n-th argument replaces the n-th placeholder.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value used to replace the matching placeholder.",
                "type": "Object",
                "default": "NULL"
            }
        ],
        class: "String",
        return: "String",
    },
    "index": {
        "description": "The index of a value within the array or -1 if no such value can be found. Does not support nested arrays.\nWarning: if the array contains `true`, it will match against any truthy value, and `true` will match against any truthy value in the array.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Object",
                "default": "NUMBER"
            }
        ],
        class: "Array",
        return: "Array",
    },
    "getNormal": {
        "description": "The surface normal at the raycast hit position (or from end pos to start pos if no hit occurs).",
        "args": [],
        class: "Raycast",
        return: "Direction",
    },
    "getPlayerHit": {
        "description": "The player hit by the raycast (or null if no player is hit).",
        "args": [],
        class: "Raycast",
        return: "Player",
    },
    "getHitPosition": {
        "description": "The position where the raycast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [],
        class: "Raycast",
        return: "Position",
    },
    "last": {
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [],
        class: "Array",
        return: ["Object", "Array"],
    },
    "remove": {
        "description": "Removes one or more Values from the Variable's array (if found). If the Variable isn't already an array, it becomes an array of one element before the remove occurs.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If an array is given, each value is removed from the array.",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        class: "Array",
        return: "void",
    },
    "replace": {
        "description": "Results in a String Value. This String Value will be built from the specified String Value, where all occurrences of the pattern String are replaced with the replacement String.",
        "args": [
          {
            "name": "Pattern",
            "description": "The String pattern to be replaced.",
            "type": "String",
            "default": "Global Variable"
          },
          {
            "name": "Replacement",
            "description": "The String Value with which to replace the pattern String",
            "type": "String",
            "default": "Global Variable"
          }
        ],
        class: "String",
        return: "String",
    },
    "reverse": {
        "description": "Reverses the array. Built-in macro for `sorted(x, lambda _, idx: -idx)`.",
        "args": [],
        class: "Array",
        return: "Array",
    },
    "slice": {
        "description": "A copy of the specified array containing only values from a specified index range. Does not support nested arrays.",
        "args": [
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "unsigned int",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "unsigned int",
                "default": "NUMBER"
            }
        ],
        class: "Array",
        return: "Array",
    },
    "split": {
        "description": "Results in an Array of String Values. These String Values will be built from the specified String Value, split around the separator String.",
        "args": [
        {
            "name": "Separator",
            "description": "The separator String with which to split the String Value.",
            "type": "String",
            "default": "Global Variable"
        }
        ],
        class: "String",
        return: {
            "Array": "String"
        },
    },
    "strIndex": {
        "description": "The index of a character within a String or -1 if no such character can be found.",
        "args": [
        {
            "name": "Character",
            "description": "The character for which to search",
            "type": "String",
            "default": "Global Variable"
        }
        ],
        class: "String",
        return: "int",
    },
	"substring": {
		"description": "The substring of the provided string.",
		"args": [
			{
				"name": "Substring Start Index",
				"description": "Specifies the character that will start the substring (with 0 as the first character, 1 as the second character, etc.).",
				"type": "unsigned int",
				"default": 0
			},
			{
				"name": "Substring Length",
				"description": "Specifies the number of characters in the substring.",
				"type": "unsigned int",
				"default": 0
			}
        ],
        class: "String",
		"return": "String",
	},
    "x": {
        description: "The x component of the specified vector, usually representing a leftward amount.",
        args: null,
        class: "Vector",
        return: "float",
    },
    "y": {
        description: "The y component of the specified vector, usually representing an upward amount.",
        args: null,
        class: "Vector",
        return: "float",
    },
    "z": {
        description: "The z component of the specified vector, usually representing a forward amount.",
        args: null,
        class: "Vector",
        return: "float",
    }
}
