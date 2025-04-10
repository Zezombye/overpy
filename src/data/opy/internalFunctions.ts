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
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
    "__chaseAtRate__": {
        "args": [
            {
                "name": "variable",
                "type": "Variable",
                "default": "A"
            },
            {
                "name": "destination",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "rate",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "reevaluation",
                "type": "__ChaseRateReeval__",
                "default": "DESTINATION AND RATE"
            }
        ],
        "return": "void"
    },
    "__chaseOverTime__": {
        "args": [
            {
                "name": "variable",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "destination",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "duration",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "reevaluation",
                "type": "__ChaseTimeReeval__",
                "default": "DESTINATION AND DURATION"
            }
        ],
        "return": "void"
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
                "default": "COMPARE"
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
                "default": "NUMBER"
            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
                "default": "NUMBER"
            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
                "default": "NUMBER"
            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
                "default": "NUMBER"
            },
            {
                "name": "value",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
                "default": "NUMBER"
            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
                "default": "NUMBER"
            },
            {
                "name": "value",
                "type": "float",
                "canReplace0ByNull": true,
                "default": "NUMBER"
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
                "default": "NUMBER"
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
    }
};
