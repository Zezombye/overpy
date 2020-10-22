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

    "__append__": {
        "args": [
            {
                "name": "ARRAY",
                "type": "Variable",
            },{
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        return: "void",
    },
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
                canReplace0ByNull: true,
                "default": "NUMBER"
            }
        ],
        return: "void",
    },
    "__case__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"]
            }
        ],
        return: "void",
    },
    "__chaseAtRate__": {
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
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
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
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
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
    "__default__": {
        "args": null,
        return: "void",
    },
    "__del__": {
        "args": [
            {
                "name": "ARRAY INDEX",
                "type": "unsigned int",
            },
        ],
        return: "void",
    },
    "__dict__": {
        "args": [
            {
                "name": "ELEM",
                "type": "DictElem",
            }
        ],
        "isConstant": true,
        return: ["Object", "Array"],
    },
    "__dictElem__": {
        "args": [
            {
                "name": "KEY",
                "type": ["Object", "Array"],
            },{
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        "isConstant": true,
        return: "DictElem",
    },
    "__distanceTo__": {
        "args": [
            {
                "name": "LABEL",
                "type": "Label",
            },
        ],
        return: "unsigned int",
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
    "__enum__": {
        "args": [
            {
                "name": "NAME",
                "type": "EnumName",
            }
        ],
        return: "void",
    },
    "__enumType__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Array", "Object"],
            }
        ],
        return: "Type",
    },
    "__equals__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                canReplace0ByNull: true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                canReplace0ByNull: true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        return: "bool",
    },
    "__for__": {
        "args": [
            {
                "name": "CONTROL VARIABLE",
                "type": "Variable",
            },
            {
                "name": "RANGE START",
                "type": "float",
            },
            {
                "name": "RANGE STOP",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "type": "float",
            },
            {
                "name": "STEP",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "type": "float",
            }
        ],
        return: "void",
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
        "isConstant": true,
        return: "String",
    },
    "__getNormal__": {
        "args": [
            {
                "name": "RAYCAST",
                "type": "Raycast",
            }
        ],
        return: "Direction",
    },
    "__getPlayerHit__": {
        "args": [
            {
                "name": "RAYCAST",
                "type": "Raycast",
            }
        ],
        return: "Player",
    },
    "__getHitPosition__": {
        "args": [
            {
                "name": "RAYCAST",
                "type": "Raycast",
            }
        ],
        return: "Position",
    },
    "__gotoLabel__": {
        "args": [
            {
                "name": "LABEL",
                "type": "Label",
            }
        ],
        return: "void",
    },
    "__gotoLoc__": {
        "args": [
            {
                "name": "LOC",
                "type": "unsigned int",
            }
        ],
        return: "void",
    },
    "__greaterThan__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        return: "bool",
    },
    
    "__greaterThanOrEquals__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        return: "bool",
    },
    "__inequals__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                canReplace0ByNull: true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                canReplace0ByNull: true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        return: "bool",
    },
    "__lessThan__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        return: "bool",
    },
    "__lessThanOrEquals__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                canReplace0ByFalse: true,
                canReplace1ByTrue: true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        return: "bool",
    },
    "__modifyVar__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": "Variable",
            },
            {
                "name": "OPERATION",
                "type": "__Operation__",
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        "guid": "00000000786E",
        "en-US": "Modify Global Variable",
        "es-MX": "Modificar variable global",
        "fr-FR": "Modifier une variable globale",
        "ja-JP": "グローバル変数を変更",
        "pt-BR": "Modificar Variável Global",
        "zh-CN": "修改全局变量",
        "return": "void"
    },
    "__negate__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["float", "Vector"],
                "default": "NUMBER"
            },
        ],
        "isConstant": true,
        return: ["float", "Vector"],
    },
    "__number__": {
        "args": [
            {
                "name": "NUMBER",
                "type": "FloatLiteral",
                "default": "0",
            },
        ],
        "isConstant": true,
        return: "FloatLiteral",
        "en-US": "Number",
    },
    "__remove__": {
        "args": [
            {
                "name": "ARRAY",
                "type": "Variable",
            },{
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        return: "void",
    },
    "__reverse__": {
        "description": "Reverses the array. Built-in macro for `sorted(x, lambda _, idx: -idx)`.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array to reverse.",
                "type": "Array",
                "default": "ARRAY"
            }
        ],
        class: "Array",
        return: "Array",
    },
    "__rule__": {
        "args": null,
        return: "void",
    },
    "__switch__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"]
            }
        ],
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
        "isConstant": true,
        return: "Team",
    }
}
