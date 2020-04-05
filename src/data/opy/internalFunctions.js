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
                "type": ["Object", "Array"],
                "default": "GLOBAL VARIABLE",
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "void",
    },"__chaseAtRate__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": "Variable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "type": "__ChaseRateReeval__",
                "default": "DESTINATION AND RATE"
            }
        ],
        "return": "void"
    },
    "__chaseOverTime__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "type": "__ChaseTimeReeval__",
                "default": "DESTINATION AND DURATION"
            }
        ],
        "return": "void"
    },
    "__def__": {
        "args": null,
        return: "void",
    },
    "__doWhile__": {
        "args": [
            {
                "name": "CONDITION",
                "type": "bool",
                "default": "COMPARE"
            },
        ],
        return: "void",
    },
    "__equals__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__format__": {
        "args": [
            {
                "name": "STRING",
                "type": "StringLiteral",
                "default": "NULL"
            },
            {
                "name": "VALUE",
                "type": "Object",
                "default": "NULL"
            }
        ],
        return: "String",
    },
    "__greaterThan__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
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
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
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
                "type": ["Object", "Array"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
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
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
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
                "type": ["float"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": ["float"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__negate__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["float", "Vector"],
                "default": "NUMBER"
            },
        ],
        return: ["float", "Vector"],
    },
    "__number__": {
        "args": [
            {
                "name": "NUMBER",
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
    },
    "__team__": {
        "args": [
            {
                "name": "TEAM",
                "type": "TeamLiteral",
                "default": "ALL",
            }
        ],
        return: "Team",
    }
}
