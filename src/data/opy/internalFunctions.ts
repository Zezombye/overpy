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

import { Argument, LocalizableString, Type } from "../../types";

export const opyInternalFuncs: Record<string, {
    args: Argument[] | null,
    return: Type,
    isConstant?: boolean,
    description?: string
} & LocalizableString> = {
    "__assignTo__": {
        "args": [
            {
                "name": "variable",
                "type": [
                    "Object",
                    "Array"
                ],

            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,

            }
        ],
        "return": "void"
    },
    "__case__": {
        "args": [
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "return": "void"
    },
    "__chase__": {
        "description": "Legacy way of chasing a variable.",
        "args": [
            {
                "name": "variable",
                "description": "Specifies which variable (global or player) to modify gradually.",
                "type": "Variable",
            },
            {
                "name": "destination",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
            },
            {
                "name": "rateOrDuration",
                "description": "The amount of change that will happen to the variable's value each second, or the amount of time, in seconds, over which the variable's value will approach the destination.\n\nPut `rate=xxxx` or `duration=xxxx` as argument.",
                "type": "float",
            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "ChaseReeval",
            }
        ],
        "return": "void"
    },
    "__createWorkshopSetting__": {
        "description": "Legacy way of creating workshop settings.",
        "args": [
            {
                "name": "type",
                "description": "The type of the setting. Can be an integer, float, hero, enum, or boolean.\n\nTo specify a minimum or maximum, use the type option syntax: for example, `int[3:6]` specifies an integer with a minimum of 3 and maximum of 6, included.\n\nExamples of valid types:\n\n- `int[-2:7]`\n- `float[-3.5:3]`\n- `bool`\n- `Hero`\n- `enum[\"First option\", \"Second option\"]`\n",
                "type": "Type",
            },
            {
                "name": "category",
                "description": "The name of the category in which this setting will be found. Must be a custom string literal with 128 characters or less.",
                "type": "CustomStringLiteral",
            },
            {
                "name": "name",
                "description": "The name of this setting. Must be a custom string literal with 128 characters or less.",
                "type": "CustomStringLiteral",
            },
            {
                "name": "default",
                "description": "The default value for this setting.",
                "type": [
                    "BoolLiteral",
                    "IntLiteral",
                    "FloatLiteral",
                    "HeroLiteral"
                ],
            },
            {
                "name": "sortOrder",
                "description": "An optional sort order for this setting (within the category). Settings with the same sort order are ordered alphabetically. Can be from 0 to 63.",
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": [
            "bool",
            "int",
            "float"
        ]
    },
    "__def__": {
        "args": null,
        "return": "void"
    },
    "__default__": {
        "args": null,
        "return": "void"
    },
    "__del__": {
        "args": [
            {
                "name": "arrayIndex",
                "type": "unsigned int"
            }
        ],
        "return": "void"
    },
    "__dict__": {
        "args": [
            {
                "name": "elem",
                "type": "DictElem"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ]
    },
    "__dictElem__": {
        "args": [
            {
                "name": "key",
                "type": [
                    "Object",
                    "Array"
                ]
            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "isConstant": true,
        "return": "DictElem"
    },
    "__distanceTo__": {
        "args": [
            {
                "name": "label",
                "type": "Label"
            }
        ],
        "return": "unsigned int"
    },
    "__doWhile__": {
        "args": [
            {
                "name": "condition",
                "type": "bool",

            }
        ],
        "return": "void"
    },
    "__enum__": {
        "args": [
            {
                "name": "name",
                "type": "EnumName"
            }
        ],
        "return": "void"
    },
    "__enumType__": {
        "args": [
            {
                "name": "value",
                "type": [
                    "Array",
                    "Object"
                ]
            }
        ],
        "return": "Type"
    },
    "__equals__": {
        "args": [
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,

            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,

            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "__for__": {
        "args": [
            {
                "name": "controlVariable",
                "type": "Variable"
            },
            {
                "name": "rangeStart",
                "type": "float"
            },
            {
                "name": "rangeStop",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "type": "float"
            },
            {
                "name": "step",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "type": "float"
            }
        ],
        "return": "void"
    },
    "__gotoLabel__": {
        "args": [
            {
                "name": "label",
                "type": "Label"
            }
        ],
        "return": "void"
    },
    "__gotoLoc__": {
        "args": [
            {
                "name": "loc",
                "type": "unsigned int"
            }
        ],
        "return": "void"
    },
    "__greaterThan__": {
        "args": [
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "__greaterThanOrEquals__": {
        "args": [
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "__inequals__": {
        "args": [
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,

            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,

            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "__lessThan__": {
        "args": [
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "__lessThanOrEquals__": {
        "args": [
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,

            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "__modifyVar__": {
        "args": [
            {
                "name": "variable",
                "type": "Variable"
            },
            {
                "name": "operation",
                "type": "__Operation__"
            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ]
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
                "name": "value",
                "type": [
                    "float",
                    "Vector"
                ],

            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ]
    },
    "__rule__": {
        "args": null,
        "return": "void"
    },
    "__switch__": {
        "args": [
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "return": "void"
    },
    "__translateString__": {
        "args": [
            {
                "name": "value",
                "type": "Value"
            }
        ],
        "return": "String",
    },
    "__translatedString__": {
        "args": [
            {
                "name": "string",
                "type": "CustomStringLiteral"
            }
        ],
        "return": "String",
    }
};
