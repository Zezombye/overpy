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

const opyFuncs = {

//Keywords

    "and": {
        "description": "Whether both of the two operands are true (or equivalent to true). Does short-circuiting.",
        "args": null
    },
    "break": {
        "description": "Goes to the end of the innermost `switch` statement, or do/while loop. In the future, this instruction will go to the end of the innermost loop or `switch` statement.",
        "args": null
    },
    "case": {
        "description": "Denotes a block that will be reached if the specified variable in the corresponding `switch` statement is equal to the value specified in this `case` statement. Literal arrays should not be used. Note that the execution will not jump to the end of the `switch` block after the end of the `case` block; if you want that to be the case, use the `break` instruction.",
        "args": null
    },
    "continue": {
        "description": "Goes back to the start of the rule. In the future, this instruction will go back to the start of the innermost loop.",
        "args": null
    },
    "def": {
        "description": "Defines a subroutine. Note that subroutines cannot have any arguments or rule conditions. Example: `def mySubroutine():`",
        "args": null
    },
    "default": {
        "description": "Denotes a block that will be reached if the specified variable in the corresponding `switch` statement is not equal to any value specified in the `case` statements. Note that the execution will not jump to the end of the `switch` block after the end of the `default` block; if you want that to be the case, use the `break` instruction.",
        "args": null
    },
    "del": {
        "description": "Removes the Element specified by the Index from the Variable's array (if found). If the Variable isn't already an array, it becomes an array of one element before the remove occurs. Example: `del myVar[3]`",
        "args": null
    },
    "do": {
        "description": "Denotes a do/while loop. Can only be specified at the start of a rule (ignoring the rule condition). The matching `while` must not have an ending colon (`:`).",
        "args": null
    },
    "elif": {
        "description": "Denotes the beginning of a block that will only execute if the specified condition is true and the previous `if` or `elif` block's condition was false.",
        "args": null
    },
    "else": {
        "description": "Denotes the beginning of a block that will only execute if the previous `if` or `elif` block's condition was false.",
        "description": `Denotes either:
        
- If an instruction, the beginning of a block that will only execute if the previous \`if\` or \`elif\` block's condition was false.

- If a value, an inline "ternary" condition, such as \`A if B else C\`.`,
        "args": null
    },
    "for": {
        "description": `Denotes either:
        
- If an instruction, the beginning of a block that will execute in a loop, modifying the control variable on each loop. The instruction must be \`for <var> in range(start, stop, step):\` See also the \`range\` function.

- If within a list comprehension, a filtered array, such as \`[i for i in x if x == 3]\`. In that case, an \`if\` block must be present.`,
        "args": null
    },
    "if": {
        "description": `Denotes either:
        
- If an instruction, the beginning of a block that will only execute if the specified condition is true.

- If a value, an inline "ternary" condition, such as \`A if B else C\`. The \`else\` must be specified.`,
        "args": null
    },
    "globalvar": {
        "description": "Declares a global variable. The index (0-127) can optionally be specified. Example: `globalvar myVar 127`",
        "args": null
    },
    "goto": {
        "description": "Goes to the specified label. Labels can only be placed after the `goto` statement, in the current rule. For example, `goto lbl_1` will continue execution from the `lbl_1:` instruction. Dynamic gotos, although not recommended, can be declared with the `loc+` keyword, such as `goto loc+A` which will move execution 3 actions after the `goto` instruction.",
        "args": null
    },
    "lambda": {
        "description": "Denotes an inline function. Can only be used in the `sorted` function.",
        "args": null
    },
    "not": {
        "description": "Whether the given operand is false (or equivalent to false).",
        "args": null
    },
    "or": {
        "description": "Whether either of the two operands are true (or equivalent to true). Does short-circuiting.",
        "args": null
    },
    "pass": {
        "description": "Does nothing. Used when OverPy's grammar requires an instruction, such as having an empty block.",
        "args": null
    },
    "playervar": {
        "description": "Declares a player variable. The index (0-127) can optionally be specified. Example: `playervar myVar 127`",
        "args": null
    },
    "RULE_CONDITION": {
        "description": "Equivalent to true if every rule condition is true. Can only be used in the following cases:\n\n- `while RULE_CONDITION` (in a do/while loop)\n- `while not RULE_CONDITION` (in a do/while loop)\n- `if RULE_CONDITION: continue` (and not in a while/for loop)\n- `if not RULE_CONDITION: continue` (and not in a while/for loop)\n- `if RULE_CONDITION: return`\n- `if not RULE_CONDITION: return`",
        "args": null
    },
    "RULE_START": {
        "description": "Denotes the start of the rule. Can only be used as an argument to a `goto` statement. Will be implemented in the future.",
        "args": null
    },
    "settings": {
        "description": "Declares custom game settings. Must be followed by an object containing the settings.",
        "args": null
    },
    "switch": {
        "description": "Denotes the beginning of a block that will jump execution to the `case` statement that has the value of the specified variable. If no `case` statement has the value of the specified variable, the execution goes to the `default` statement if it exists, else to the end of the block.",
        "args": null
    },
    "subroutine": {
        "description": "Declares a subroutine. The index (0-127) can optionally be specified. Example: `subroutine mySubroutine 127`",
        "args": null
    },
    "while": {
        "description": "Denotes the beginning of a block that will execute in a loop as long as the specified condition is true. If the condition evaluates to false when execution is at the top of the loop, then the loop exits, and execution jumps to the next action after the end of the block. Can also denote the end of a do/while loop, if no `:` is at the end of the instruction.",
        "args": null
    },

//Functions

    "all": {
        "description": "Whether the specified condition evaluates to true for every value in the specified iterable. Requires a condition.\n\nExample: `all(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "Iterable",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    "any": {
        "description": "Whether the specified condition evaluates to true for any value in the specified iterable. Requires a condition.\n\nExample: `any(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "Iterable",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    "async": {
        "description": "Begins simultaneous execution of a subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        "args": [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "Subroutine",
                "default": "Sub0"
            },
            {
                "name": "IF ALREADY EXECUTING",
                "description": "Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.",
                "type": "AsyncBehavior",
                "default": "RESTART RULE"
            }
        ]
    },
    "ceil": {
        "description": "The integer that is the ceiling of the specified value (equivalent to rounding up).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the ceiling of.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "chase": {
        "description": "Gradually modifies the value of a variable (global or player) at a specific rate, or over time.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to modify gradually.",
                "type": "Variable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "Any",
                "default": "NUMBER"
            },
            {
                "name": "RATE OR DURATION",
                "description": "The amount of change that will happen to the variable's value each second, or the amount of time, in seconds, over which the variable's value will approach the destination.\n\nPut `rate=xxxx` or `duration=xxxx` as argument.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "ChaseReeval",
                "default": "DESTINATION AND RATE"
            }
        ]
    },
    "debug": {
        "description": "Creates an orange HUD text at the top left. Should be used for quick debugging of a value.",
        "args": [
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Any",
                "default": "STRING"
            }
        ]
    },
    "floor": {
        "description": "The integer that is the floor of the specified value (equivalent to rounding down).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the floor of.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "getAllPlayers": {
        "description": "Built-in macro for `getPlayers(Team.ALL)`.",
        "args": []
    },
    "hudHeader": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Any",
                "default": "STRING"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "Position",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    "hudSubheader": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "Position",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    "hudSubtext": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBTEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "Position",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    "hudText": {
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.\n\nNote: you can use the macros `hudHeader`, `hudSubheader` and `hudSubtext` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Any",
                "default": "STRING"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "TEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "Position",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    "getSign": {
        "description": "Built-in macro for calculating the sign of a number. Resolves to `(((x)>0)-((x)<0))`. Returns -1, 0 or 1.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The number to calculate the sign of.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "math.e": {
        "description": "The number e = 2.71828182846.",
        "args": null
    },
    "math.pi": {
        "description": "The number pi = 3.14159265359.",
        "args": null
    },
    "range": {
        "description": "Only usable inside a `for` instruction, such as `for i in range(1,3,2)`. If only 2 arguments are provided, they are treated as `range(start, stop)`. If only one argument is provided, it is treated as `range(stop)`.",
        "args": [
            {
                "name": "START",
                "description": "The control variable is set to this value when the loop begins. If omitted, defaults to 0.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "STOP",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "Number",
                "default": "COUNT OF"
            },
            {
                "name": "STEP",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action. If omitted, defaults to 1.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "raycast": {
        "description": "Defines a raycast to be then used with `hasLoS()`, `getPlayerHit()`, `getNormal()` or `getHitPosition()`.\nFor line of sight, the 3rd argument must be `los=` and the 4th and 5th arguments must be omitted.\n\nExamples:\n- `raycast(A, B, include=C, exclude=D, includePlayerObjects=false).getHitPosition()`\n- `raycast(A, B, los=BarrierLos.BLOCKED_BY_ALL_BARRIERS).hasLoS()`",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "include=players To Include",
                "description": "Which players can be hit by this ray cast. Note: if doing a line-of-sight check, use `los=BarrierLos.xxxx` instead.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "exclude=players To Exclude",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "include Player Objects=bool",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ]
    },
    "round": {
        "description": "The integer that is closest to the specified value (equivalent to rounding to nearest).\n\nTo round up or down, use `ceil()` or `floor()`.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the nearest integer of.",
                "type": "Number",
                "default": "NUMBER"
            }
        ]
    },
    "sorted": {
        "description": "A copy of the specified array with the values sorted according to the lambda function that is evaluated for each element.\n\nExample: `sorted(getAllPlayers(), key=lambda x: x.getScore())`",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "key=lambda",
                "description": "The lambda function that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Can be omitted if the array is sorted without a special key (equivalent to `lambda x: x`).",
                "type": "Lambda",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ]
    },
    "stopChasingVariable": {
        "description": "Stops an in-progress chase of a variable (global or player), leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to stop modifying.",
                "type": "Variable",
                "default": "A"
            }
        ]
    },
    "wait": {
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause. If omitted, defaults to 0.016.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart. If omitted, defaults to `Wait.IGNORE_CONDITION`.",
                "type": "Wait",
                "default": "IGNORE CONDITION"
            }
        ]
    },
}
