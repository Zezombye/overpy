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

const opyModules = {
    
    "random": {
        "randint": {
            "description": "A random integer between the specified min and max, inclusive.",
            "args": [
                {
                    "name": "MIN",
                    "description": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                    "type": "int",
                    canReplace0ByFalse: true,
                    canReplace1ByTrue: true,
                    "default": "NUMBER"
                },
                {
                    "name": "MAX",
                    "description": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                    "type": "int",
                    canReplace0ByFalse: true,
                    canReplace1ByTrue: true,
                    "default": "NUMBER"
                }
            ],
            "return": "int",
        },
        "uniform": {
            "description": "A random real number between the specified min and max.",
            "args": [
                {
                    "name": "MIN",
                    "description": "The smallest real number allowed.",
                    "type": "float",
                    "default": "NUMBER"
                },
                {
                    "name": "MAX",
                    "description": "The largest real number allowed.",
                    "type": "float",
                    "default": "NUMBER"
                }
            ],
            "return": "float",
        },
        "choice": {
            "description": "A random value from the specified array.",
            "args": [
                {
                    "name": "ARRAY",
                    "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                    "type": "Array",
                    "default": "GLOBAL VARIABLE"
                }
            ],
            "return": [
                "Object",
                "Array"
            ],
        },
        "shuffle": {
            "description": "A copy of the specified array with the values in a random order.",
            "args": [
                {
                    "name": "ARRAY",
                    "description": "The array whose copy will be randomized.",
                    "type": "Array",
                    "default": "GLOBAL VARIABLE"
                }
            ],
            "return": "Array",
        },
    }
}

for (var key in opyModules) {
    opyModules[key]["description"] = "The `"+key+"` module.";
}