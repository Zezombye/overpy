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

const opyConstants = {
    
    "Vector": {
        "UP": {
            "description": "Shorthand for the directional vector(0, 1, 0), which points upward.",
            "args": null,
            "isConstant": true,
            "return": {
                "Direction": [
                    "unsigned int",
                    "unsigned int",
                    "unsigned int"
                ]
            },
        },
        "DOWN": {
            "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
            "args": null,
            "return": {
                "Direction": [
                    "unsigned int",
                    "signed int",
                    "unsigned int"
                ]
            },
        },
        "LEFT": {
            "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
            "args": null,
            "isConstant": true,
            "return": {
                "Direction": [
                    "unsigned int",
                    "unsigned int",
                    "unsigned int"
                ]
            },
        },
        "RIGHT": {
            "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
            "args": null,
            "isConstant": true,
            "return": {
                "Direction": [
                    "signed int",
                    "unsigned int",
                    "unsigned int"
                ]
            },
        },
        "FORWARD": {
            "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
            "args": null,
            "isConstant": true,
            "return": {
                "Direction": [
                    "unsigned int",
                    "unsigned int",
                    "unsigned int"
                ]
            },
        },
        "BACKWARD": {
            "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
            "args": null,
            "return": {
                "Direction": [
                    "unsigned int",
                    "unsigned int",
                    "signed int"
                ]
            },
        },
    },
    "Math": {
        "PI": {
            "description": "The number pi = 3.14159265359.",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        },
        "E": {
            "description": "The number e = 2.71828182846.",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        }
    },
}

for (var key in opyConstants) {
    opyConstants[key]["description"] = "The `"+key+"` enum.";
}
