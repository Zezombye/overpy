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
        },
        "INFINITY": {
            "description": "The number infinity = 9999999999999999999.",
            "args": null,
            "isConstant": true,
            return: "unsigned int",
        },
        "SPHERE_HORIZONTAL_RADIUS_MULT": {
            "description": "The visual horizontal radius of a sphere = 0.984724 of the radius.",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        },
        "SPHERE_VERTICAL_RADIUS_MULT": {
            "description": "The visual vertical radius of a sphere = 0.998959 of the radius.",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        },
        "INNER_RING_RADIUS_MULT": {
            "description": "The visual inner radius of a ring or light shaft = 0.9415 of the radius.",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        },
        "OUTER_RING_RADIUS_MULT": {
            "description": "The visual outer radius of a ring or light shaft = 0.94965 of the radius.",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        },
        "RING_EXPLOSION_RADIUS_MULT": {
            "description": "The visual radius of a ring explosion = 0.48 of the radius (approximately).",
            "args": null,
            "isConstant": true,
            return: "unsigned float",
        }
    },
}

for (var key in opyConstants) {
    opyConstants[key]["description"] = "The `"+key+"` enum.";
}
