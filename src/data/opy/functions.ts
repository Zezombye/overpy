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

import { Argument, Type } from "../../types";

export const opyFuncs: Record<
    string,
    {
        description: string;
        args: Argument[] | null;
        class?: string,
        return: Type;
        isConstant?: boolean;
    }
> = {
    "_": {
        "description": "The translation function. If two arguments are specified, the first argument (a string literal) is used as the context to disambiguate strings that are the same but must be translated differently. Else, the first argument is the string to be translated (can be a variable, in which case this function has to be used directly in the display function such as `hudText()`).\n\nSee `#!translations` for more details.",
        "args": [
            {
                "name": "contextOrString",
                "description": "If two arguments are specified, the context (as a string literal); otherwise, the string to be translated (can be a variable).",
                "type": "String",
            }, {
                "name": "string",
                "description": "The string to be translated. Must be a string literal, as there are two arguments and the context has been specified.",
                "type": "StringLiteral",
                "default": null,
            }
        ],
        "return": "String",
    },
    "all": {
        "description": "Whether every value in the specified array evaluates to true. Can use mapped arrays.\n\nExample: `all([player.A == 2 for player in getAllPlayers()])`",
        "args": [
            {
                "name": "array",
                "description": "The array whose values will be considered.",
                "type": {
                    "Array": "bool"
                },
            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    "any": {
        "description": "Whether any value in the specified array evaluates to true. Can use mapped arrays.\n\nExample: `any([player.A == 2 for player in getAllPlayers()])`",
        "args": [
            {
                "name": "array",
                "description": "The array whose values will be considered.",
                "type": {
                    "Array": "bool"
                },
            }
        ],
        "isConstant": true,
        "return": "bool"
    },
    ".append": {
        "description": "Appends the specified value to the specified array. Note that this function is really the equivalent of `extend()`, that is, `[1,2].append([3,4])` will produce `[1,2,3,4]` instead of `[1,2,[3,4]]`. Modifies the array in-place; use `concat` to instead return a copy of the array.\n\nExample: `A.append(3)`",
        "args": [
            {
                "name": "array",
                "type": "Variable"
            },
            {
                "name": "value",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": ["Object", { Array: "Object" }],
            }
        ],
        class: "Array",
        return: "void",
    },
    "arrayToString": {
        "description": "Displays an array (otherwise, casting an array to a string will only display the first value). The second argument is the maximum length of the array (arrays can go up to 1000, which would generate a lot of elements). If the array length is above the maximum length, an ellipsis (...) will be displayed.",
        "args": [
            {
                "name": "array",
                "description": "The array to be displayed. If not an array, it will be displayed normally.",
                "type": {
                    "Array": "Object"
                },
            },
            {
                "name": "maxLength",
                "description": "The maximum length of the array. If the array is longer than this, an ellipsis (...) will be displayed. Must be a literal number, not a variable.",
                "type": "IntLiteral",
                "default": 12
            }
        ],
        "isConstant": true,
        "return": "String"
    },
    "ceil": {
        "description": "The integer that is the ceiling of the specified value (equivalent to rounding up).",
        "args": [
            {
                "name": "value",
                "description": "The real number to get the ceiling of.",
                "type": "float",
            }
        ],
        "isConstant": true,
        "return": "int"
    },
    "chaseAtRate": {
        description: "Gradually modifies the value of a variable at a specific rate.",
        "args": [
            {
                "name": "variable",
                "description": "The variable to chase.",
                "type": "Variable",

            },
            {
                "name": "destination",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,

            },
            {
                "name": "rate",
                "type": "float",
                "description": "The amount of change that will happen to the variable's value each second.",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,

            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "ChaseRateReeval",
                default: "DESTINATION_AND_RATE"

            }
        ],
        "return": "void"
    },
    "chaseOverTime": {
        description: "Gradually modifies the value of a variable over time.",
        "args": [
            {
                "name": "variable",
                "description": "Specifies which variable to modify gradually.",
                "type": "Variable",

            },
            {
                "name": "destination",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,

            },
            {
                "name": "duration",
                "type": "float",
                "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,

            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "ChaseTimeReeval",
                default: "DESTINATION_AND_DURATION",

            }
        ],
        "return": "void"
    },
    "createCasedProgressBarIwt": {
        "description": "Overlays multiple progress bars to create lowercase text based on fullwidth characters.\n\nThe first argument is the number of texts to use (2 to 4). Usually 3 is enough, but 4 may be needed if kerning is bad (with 'f', 'r' or 't' chars).\n\nNote however that after a formatter or a texture, there may be a extra space.\n\nAs it is a progress bar, just add a bunch of newlines at the beginning of the string to make the bar not visible.\n\nNote: all the text must be in the top-level (literal) string. Text used with formatters '{}' will not be lowercased.",
        "args": [
            {
                "name": "textCount",
                "description": "The amount of texts used to overlay.",
                "type": "IntLiteral",
                default: 3,
            },
            {
                "name": "visibleTo",
                "description": "One or more players who will see the progress bar HUD text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                default: "getAllPlayers()",
            },
            {
                "name": "text",
                "description": "The text to be displayed. Must be a literal custom string, not a variable.",
                "type": "String",
            },
            {
                "name": "position",
                "description": "The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                "type": [
                    "Position",
                    "Player"
                ],
            },
            {
                "name": "scale",
                "description": "The text's scale.",
                "type": "float",
            },
            {
                "name": "clipping",
                "description": "Specifies whether the text can be seen through walls or is instead clipped.",
                "type": "Clip",
                "default": "NONE"
            },
            {
                "name": "textColor",
                "description": "The color of the text to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.",
                "type": "ProgressWorldTextReeval",
                "default": "VISIBILITY_POSITION_VALUES_AND_COLOR"
            },
            {
                "name": "nonTeamSpectators",
                "description": "Whether non-team spectators can see the text or not.",
                "type": "SpecVisibility",
                "default": "DEFAULT"
            }
        ],
        "return": "void"
    },
    "debug": {
        "description": "For quick debugging of a value. Displays both the value and the text of the function call.",
        "args": [
            {
                "name": "value",
                "description": "The value to be displayed.",
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "return": "void"
    },
    "floor": {
        "description": "The integer that is the floor of the specified value (equivalent to rounding down).",
        "args": [
            {
                "name": "value",
                "description": "The real number to get the floor of.",
                "type": "float",
            }
        ],
        "isConstant": true,
        "return": "int"
    },
    ".format": {
        "description": "The values that will be converted to text and used to replace the format placeholders (such as `{}` or `{0}`). Only usable on a string. Can have as much arguments as there are placeholders. The n-th argument replaces the n-th placeholder.",
        "args": [
            {
                "name": "string",
                "type": "StringLiteral",
            },
            {
                "name": "value",
                "description": "The value used to replace the matching placeholder.",
                "type": "Object",
            }
        ],
        class: "String",
        return: "String",
    },
    ".getNormal": {
        "description": "The surface normal at the raycast hit position (or from end pos to start pos if no hit occurs).",
        "args": [
            {
                "name": "raycast",
                "type": "Raycast"
            }
        ],
        class: "Raycast",
        return: "Direction",
    },
    ".getPlayerHit": {
        "description": "The player hit by the raycast (or null if no player is hit).",
        "args": [
            {
                "name": "raycast",
                "type": "Raycast"
            }
        ],
        class: "Raycast",
        return: "Player",
    },
    ".getHitPosition": {
        "description": "The position where the raycast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [
            {
                "name": "raycast",
                "type": "Raycast"
            }
        ],
        class: "Raycast",
        return: "Position",
    },
    "hsl": {
        "description": "A custom color in HSL/HSLA format.",
        "args": [
            {
                "name": "hue",
                "description": "The hue of the color (0-360).",
                "type": "float",
            },
            {
                "name": "saturation",
                "description": "The saturation of the color (0-1).",
                "type": "float",
            },
            {
                "name": "lightness",
                "description": "The lightness of the color (0-1).",
                "type": "float",
            },
            {
                "name": "alpha",
                "description": "The alpha of the color (0-255).",
                "type": "float",
                default: 255,
            }
        ],
        "isConstant": true,
        "return": "Color"
    },
    "log": {
        "description": "Built-in macro to calculate the logarithm of the specified number. Accurate to an error of 0.01 for values up to 1 million. Thanks to lucid and LazyLion for the formula.\n\nBe wary of floating point precision errors, and use the `round()` function if you must compare the output. For example, `log(10000, 10)` will not give exactly 4.",
        "args": [
            {
                "name": "number",
                "description": "The number to get the logarithm of.",
                "type": "unsigned float"
            },
            {
                "name": "base",
                "description": "The base of the logarithm.",
                "type": "unsigned float",
                default: "Math.E",
            }
        ],
        "isConstant": true,
        "return": "float"
    },
    "pass": {
        "description": "Does nothing. Is parsed as an action for the purposes of runtime `goto`s.",
        "args": null,
        "return": "void"
    },
    "range": {
        "description": "Only usable inside a `for` instruction, such as `for i in range(1,3,2)`. If only 2 arguments are provided, they are treated as `range(start, stop)`. If only one argument is provided, it is treated as `range(stop)`.",
        "args": [
            {
                "name": "start",
                "description": "The control variable is set to this value when the loop begins. If omitted, defaults to 0.",
                "type": "float",
            },
            {
                "name": "stop",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "float",
            },
            {
                "name": "step",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.",
                "type": "float",
            }
        ],
        "return": "Iterator"
    },
    "raycast": {
        "description": "Defines a raycast to be then used with `getPlayerHit()`, `getNormal()` or `getHitPosition()`.",
        "args": [
            {
                "name": "startPos",
                "description": "The start position for the raycast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
            },
            {
                "name": "endPos",
                "description": "The end position for the raycast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
            },
            {
                "name": "playersToInclude",
                "description": "Which players can be hit by this raycast.",
                "type": {
                    "Array": "Player"
                },
            },
            {
                "name": "playersToExclude",
                "description": "Which players cannot be hit by this raycast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
            },
            {
                "name": "includePlayerObjects",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the raycast.",
                "type": "bool",
                "default": true
            }
        ],
        "return": "Raycast"
    },
    ".remove": {
        "description": "Removes one or more Values from the Variable's array (if found). If the Variable isn't already an array, it becomes an array of one element before the remove occurs.",
        "args": [
            {
                "name": "array",
                "type": "Variable"
            },
            {
                "name": "value",
                "description": "The value to remove from the array (if found). If an array is given, each value is removed from the array.",
                "type": ["Object", "Array"],
            }
        ],
        class: "Array",
        return: "void",
    },
    "round": {
        "description": "The integer that is closest to the specified value (equivalent to rounding to nearest).\n\nTo round up or down, use `ceil()` or `floor()`.",
        "args": [
            {
                "name": "value",
                "description": "The real number to get the nearest integer of.",
                "type": "float",
            }
        ],
        "isConstant": true,
        "return": "int"
    },
    "ruleCondition": {
        "description": "Equivalent to true if every rule condition is true. Can be used like a normal value, and optimizes to built-in workshop functions in some cases (for example, `if ruleCondition: loop()` compiles to `Loop If Condition Is True`).",
        "args": null,
        "return": "bool"
    },
    "sorted": {
        "description": "A copy of the specified array with the values sorted according to the lambda function that is evaluated for each element.\n\nExample: `sorted(getAllPlayers(), key=lambda x: x.getScore())`",
        "args": [
            {
                "name": "array",
                "description": "The array whose copy will be sorted.",
                "type": {
                    "Array": "Object"
                },
            },
            {
                "name": "lambda",
                "description": "The lambda function that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Can be omitted if the array is sorted without a special key (equivalent to `lambda x: x`).",
                "type": "Lambda",
            }
        ],
        "isConstant": true,
        "return": {
            "Array": "Object"
        }
    },
    "spacesForString": {
        "description": "Returns a string made of spaces that is the same length as the provided string. The provided string must be a literal string.\n\n**NOTE**: The displayed string MUST be in the Blizzard Global font (use the 'b' string modifier on the final string, unless using a progress bar). **The casing of the string is also respected**.\n\nThis is useful to do alignment tricks.\n\nThis function is the equivalent of `spacesForLength(strVisualLength(str))`, however it can also be used with translated strings, in which case it will also return a translated string.",
        "args": [
            {
                "name": "text",
                "description": "The text to get spaces of. Must be a literal custom string, not a variable.",
                "type": "String",
            }
        ],
        "isConstant": true,
        "return": "String"
    },
    "spacesForLength": {
        "description": "Returns a string made of spaces that is the same length as the provided length (in terms of font units). The length should be the result of a calculation done by the `strVisualLength()` function.",
        "args": [
            {
                "name": "length",
                "description": "The length to get. Must be a literal integer, not a variable.",
                "type": "IntLiteral",
            }
        ],
        "isConstant": true,
        "return": "String"
    },
    "stopChasingVariable": {
        "description": "Stops an in-progress chase of a variable (global or player), leaving it at its current value.",
        "args": [
            {
                "name": "variable",
                "description": "Specifies which variable (global or player) to stop modifying.",
                "type": "Variable",
            }
        ],
        "return": "void"
    },
    "strVisualLength": {
        "description": "Returns the length (in font units) of a literal string. Note that it must use the Blizzard Global font (use the 'b' string modifier on the final string, unless displaying in a progress bar in-world text). The string is case-sensitive.\n\nSee also: `spacesForLength()` and `spacesForString()`.",
        "args": [
            {
                "name": "text",
                "description": "The text to calculate the length of. Must be a literal custom string, not a variable.",
                "type": "String",
            }
        ],
        "isConstant": true,
        "return": "unsigned int"
    },
    ".toArray": {
        "description": "Get an array of the values of an enum.",
        "args": [
            {
                "name": "__enumType__",
                "description": "The enum to take the values from.",
                "type": "Type"
            }
        ],
        class: "Enum",
        "return": "Array",
    },
};
