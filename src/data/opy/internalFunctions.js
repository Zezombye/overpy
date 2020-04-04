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

const opyInternalFuncs = {

    "__assignTo__": {
        "args": [
            {
                "name": "VARIABLE",
                "description": "",
                "type": ["Object", "Array"],
                "default": "GLOBAL VARIABLE",
            },
            {
                "name": "VALUE",
                "description": "",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "void",
    },
    "__equals__": {
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison.",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison.",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__greaterThan__": {
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    
    "__greaterThanOrEqual__": {
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__inequals__": {
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison.",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison.",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__lessThan__": {
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__lessThanOrEqual__": {
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison.",
                "type": ["float"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__number__": {
        "args": [
            {
                "name": "NUMBER",
                "description": "The number.",
                "type": "NumberLiteral",
                "default": "0",
            },
        ],
        return: "float",
        "en-US": "Number",
    },
    "__rule__": {
        "args": null,
        return: "void",
    }
}
