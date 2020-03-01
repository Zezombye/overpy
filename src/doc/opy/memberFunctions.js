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
        "description": "Appends the specified value to the specified array. Note that this function is really the equivalent of `extend()`, that is, `[1,2].append([3,4])` will produce `[1,2,3,4]` instead of `[1,2,[3,4]]`. If used without an assignment, modifies the array in-place.\n\nExample: `A.append(3)`",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "Any",
                "default": "NUMBER"
            }
        ]
    },
    "exclude": {
        "description": "A copy of the array with one or more values removed (if found).",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": "Any",
                "default": "NUMBER"
            }
        ]
    },
    "format": {
        "description": "The values that will be converted to text and used to replace the format placeholders (such as `{}` or `{0}`). Only usable on a string. Can have as much arguments as there are placeholders. The n-th argument replaces the n-th placeholder.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value used to replace the matching placeholder.",
                "type": "Any",
                "default": "NULL"
            }
        ]
    },
    "index": {
        "description": "The index of a value within the array or -1 if no such value can be found.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "hasLoS": {
        "description": "Whether the start and end position of a raycast have line of sight with each other.",
        "args": []
    },
    "getNormal": {
        "description": "The surface normal at the raycast hit position (or from end pos to start pos if no hit occurs).",
        "args": []
    },
    "getPlayerHit": {
        "description": "The player hit by the raycast (or null if no player is hit).",
        "args": []
    },
    "getHitPosition": {
        "description": "The position where the raycast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": []
    },
    "remove": {
        "description": "Removes one or more Values from the Variable's array (if found). If the Variable isn't already an array, it becomes an array of one element before the remove occurs.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found).",
                "type": "Any",
                "default": "NUMBER"
            }
        ]
    },
    "slice": {
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "x": {
        description: "The x component of the specified vector, usually representing a leftward amount.",
        args: null,
    },
    "y": {
        description: "The y component of the specified vector, usually representing an upward amount.",
        args: null,
    },
    "z": {
        description: "The z component of the specified vector, usually representing a forward amount.",
        args: null,
    }
}
