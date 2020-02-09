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

//This file is only used for the vs code extension.

const specialFuncs = [
    //Special functions and built-in macros
    {
        opy: "chase",
        "description": "Gradually modifies the value of a variable (global or player) at a specific rate, or over time.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to modify gradually.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "RATE OR DURATION",
                "description": "The amount of change that will happen to the variable's value each second, or the amount of time, in seconds, over which the variable's value will approach the destination.\n\nPut `rate=xxxx` or `duration=xxxx` as argument.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "CHASE RATE REEVALUATION",
                "default": "DESTINATION AND RATE"
            }
        ],
    },{
        opy: "stopChasingVariable",
        "description": "Stops an in-progress chase of a variable (global or player), leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },{
        opy: "getSign",
        "description": "Built-in macro for calculating the sign of a number. Resolves to `(((x)>0)-((x)<0))`. Returns -1, 0 or 1.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The number to calculate the sign of.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "math.pi",
        "description": "The number pi = 3.14159265359.",
        "args": null
    },{
        opy: "math.e",
        "description": "The number e = 2.71828182846.",
        "args": null
    },{
        opy: "wait",
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause. If omitted, defaults to 0.016.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart. If omitted, defaults to `Wait.IGNORE_CONDITION`.",
                "type": "WAIT BEHAVIOR",
                "default": "IGNORE CONDITION"
            }
        ]
    },
    {
        "opy": "localizedStr",
        "description": "Defines a localized string. The text inside the string is restricted to preset strings, and is translated according to the language of each player.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "STRING CONSTANT",
                "default": "HELLO"
            },
        ]
    },
    {
        opy: "raycast",
        description: 
`Defines a raycast to be then used with \`hasLoS()\`, \`getPlayerHit()\`, \`getNormal()\` or \`getHitPosition()\`.
For line of sight, the 3rd argument must be \`los=\` and the 4th and 5th arguments must be omitted.

Examples:
- \`raycast(A, B, include=C, exclude=D, includePlayerObjects=false).getHitPosition()\`
- \`raycast(A, B, los=BarrierLos.BLOCKED_BY_ALL_BARRIERS).hasLoS()\``,
        args: [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "include=players To Include",
                "description": "Which players can be hit by this ray cast. Note: if doing a line-of-sight check, use `los=BarrierLos.xxxx` instead.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "exclude=players To Exclude",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "include Player Objects=bool",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },{
        opy: "all",
        "description": "Whether the specified condition evaluates to true for every value in the specified iterable. Requires a condition.\n\nExample: `all(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "ITERABLE",
                "default": "GLOBAL VARIABLE"
            },
        ]
    },{
        opy: "any",
        "description": "Whether the specified condition evaluates to true for any value in the specified iterable. Requires a condition.\n\nExample: `any(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "ITERABLE",
                "default": "GLOBAL VARIABLE"
            },
        ]
    },{
        opy: "floor",
        "description": "The integer that is the floor of the specified value (equivalent to rounding down).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the floor of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "round",
        "description": "The integer that is closest to the specified value (equivalent to rounding to nearest).\n\nTo round up or down, use `ceil()` or `floor()`.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the nearest integer of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "ceil",
        "description": "The integer that is the ceiling of the specified value (equivalent to rounding up).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the ceiling of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "sorted",
        "description": "A copy of the specified array with the values sorted according to the lambda function that is evaluated for each element.\n\nExample: `sorted(getAllPlayers(), key=lambda x: x.getScore())`",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "key=lambda",
                "description": "The lambda function that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Can be omitted if the array is sorted without a special key (equivalent to `lambda x: x`).",
                "type": "LAMBDA",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ]
    },{
        opy: "getAllPlayers",
        description: "Built-in macro for `getPlayers(Team.ALL)`.",
        args: [],
    },{
        opy: "hudText",
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.\n\nNote: you can use the macros `hudHeader`, `hudSubheader` and `hudSubtext` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "TEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],

    },{
        opy: "debug",
        description: "Creates an orange HUD text at the top left. Should be used for quick debugging of a value.",
        args: [
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
        ]
    },{
        opy: "hudHeader",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudSubtext",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBTEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudSubheader",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HUD LOCATION",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },
    {
        opy: "async",
        description: "Begins simultaneous execution of a subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        args: [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "SUBROUTINE",
                "default": "Sub0",
            },{
                "name": "IF ALREADY EXECUTING",
                "description": "Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.",
                "type": "START RULE BEHAVIOR",
                "default": "RESTART RULE",
            }
        ],
    },{
        opy: "RULE_CONDITION",
        "description": 
`Equivalent to true if every condition in the rule is true. Can only be used in the following cases:

- \`while RULE_CONDITION\`
- \`while not RULE_CONDITION\`
- \`if RULE_CONDITION: continue (and not in a while/for loop)\`
- \`if not RULE_CONDITION: continue (and not in a while/for loop)\`
- \`if RULE_CONDITION: return\`
- \`if not RULE_CONDITION: return\``,
        "args": null
    }
];

const specialMemberFuncs = [
    
    {
        opy: "append",
        "description": "Appends the specified value to the specified array. Note that this function is really the equivalent of `extend()`, that is, `[1,2].append([3,4])` will produce `[1,2,3,4]` instead of `[1,2,[3,4]]`. If used without an assignment, modifies the array in-place.\n\nExample: `A.append(3)`",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "slice",
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "index",
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "hasLoS",
        description: "Whether the start and end position of a raycast have line of sight with each other.",
        args: [],
    },{
        opy: "getNormal",
        description: "The surface normal at the raycast hit position (or from end pos to start pos if no hit occurs).",
        args: [],
    },{
        opy: "getPlayerHit",
        description: "The player hit by the raycast (or null if no player is hit).",
        args: [],
    },{
        opy: "getHitPosition",
        description: "The position where the raycast hits a surface, object, or player (or the end pos if no hit occurs).",
        args: [],
    }
];

const preprocessingDirectives = [
    {
        opy: "define",
        description:
`Creates a macro, like in C/C++. Macros must be defined before any code. Examples:

    #!define currentSectionWalls A
    #!define GAME_NOT_STARTED 3\`

Function macros are supported as well:

    #!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if not player.isFighting][0]
    #!define spawnMei(type, location) \
    getFirstAvailableMei().meiType = type\
    wait(0.1)\
    getFirstAvailableMei().teleport(location)\
    getFirstAvailableMei().isFighting = true

Note the usage of the backslashed lines.

JS scripts can be inserted with the special __script__ function:

    #!define addFive(x) __script__("addfive.js")

where the \`addfive.js\` script contains \`x+5\` (no \`return\`).

Arguments of JS scripts are inserted automatically at the beginning (so \`addFive(123)\` would cause \`var x = 123;\` to be inserted). The script is then evaluated using \`eval()\`.

A \`vect()\` function is also inserted, so that \`vect(1,2,3)\` returns an object with the correct properties and \`toString()\` function.

When resolving the macro, the indentation on the macro call is prepended to each line of the replacement.
`
    },{
        opy: "defineMember",
        description: "Same as the `#!define` directive, but tells the VS Code extension to include this macro in the member autocompletion."
    },{
        opy: "obfuscate",
        description:
`Obfuscates the resulting code. This directive assumes all your code is in the overpy file, meaning you should not combine the generated code with code that is only in the workshop GUI.

Usage of this directive will result in a size increase, and a very low performance decrease, but should not in any case alter how the existing code functions. (if it does, please report that as a bug)

The following obfuscation methods are applied:

- Rule filling: several empty rules are inserted.
- Comment removing: all rule titles are replaced with the empty string.
- Variable barcoding: all variable names are replaced with a combination of capital i and lowercase L.
- Character replacement: characters in custom strings are replaced with special characters that display in Overwatch, but not text editors.
`
    },{
        opy: "noEdit",
        description:
`Adds 2500 empty rules to the preset, which should make it absolutely impossible to open the rules (as you get a "connection lost" error). Therefore, it is the ultimate form of obfuscation, as you simply cannot even see the code.

However, pasting the generated code could trigger a "connection lost" error as well, and a huge lag. As such, this directive should only be used on finalized gamemodes, before you publish it; it should not be used every time.

You will very likely have to paste the generated code in an editor, then paste the rules by sets of 800, 1200 then 500 to be able to insert them.
`
    },{
        opy: "declareGlobal",
        description:
`Declares a global variable. The index (0-127) can optionally be specified. Example:

    #!declareGlobal myVar 127
`
    },{
        opy: "declarePlayer",
        description:
`Declares a player variable. The index (0-127) can optionally be specified. Example:

    #!declarePlayer myVar 127
`
    },{
        opy: "declareSubroutine",
        description:
`Declares a subroutine. The index (0-127) can optionally be specified. Example:

    #!declareSubroutine mySubroutine 127
`
    },{
        opy: "suppressWarnings",
        description: "Suppresses the specified warnings globally across the program. Warnings must be separated by a space."
    },{
        opy: "disableUnusedVars",
        description: "Do not put 'unused_var_xxx' in the compilation. Not recommended if compiling regularly, as this could lead to not being able to paste the generated output if variable offsets have been modified."
    },{
        opy: "mainFile",
        description: "Specifies an .opy file as the main file (implying the current file is a module). This directive MUST be placed at the very beginning of the file."
    }
]
