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

import { Argument } from "../../types";

export const opyKeywords: Record<string, {
    description: string,
    args: Argument[] | null,
    snippet?: string
    hideFromAutocomplete?: boolean
}> = {

    //Keywords

    "and": {
        "description": "Whether both of the two operands are true (or equivalent to true). Does short-circuiting.",
        "args": null,
        "snippet": "and $0",
    },
    "bool": {
        "description": "The 'boolean' type. Denotes a boolean such as 'false' or 'true'.",
        "args": null,
        hideFromAutocomplete: true,
    },
    "case": {
        "description": "Denotes a block that will be reached if the specified variable in the corresponding `switch` statement is equal to the value specified in this `case` statement. Literal arrays should not be used. Note that the execution will not jump to the end of the `switch` block after the end of the `case` block; if you want that to be the case, use the `break` instruction.",
        "args": null,
        "snippet": "case $0",
    },
    "def": {
        "description": "Defines a subroutine. Note that subroutines cannot have any arguments or rule conditions. Example: `def mySubroutine():`",
        "args": null,
        "snippet": "def $0",
    },
    "default": {
        "description": "Denotes a block that will be reached if the specified variable in the corresponding `switch` statement is not equal to any value specified in the `case` statements. Note that the execution will not jump to the end of the `switch` block after the end of the `default` block; if you want that to be the case, use the `break` instruction.",
        "args": null
    },
    "del": {
        "description": "Removes the Element specified by the Index from the Variable's array (if found). If the Variable isn't already an array, it becomes an array of one element before the remove occurs. Example: `del myVar[3]`",
        "args": null,
        "snippet": "del $0",
    },
    "elif": {
        "description": "Denotes the beginning of a block that will only execute if the specified condition is true and the previous `if` or `elif` block's condition was false.",
        "args": null,
        "snippet": "elif $0",
    },
    "else": {
        "description": `Denotes either:

- If an instruction, the beginning of a block that will only execute if the previous \`if\` or \`elif\` block's condition was false.

- If a value, an inline "ternary" condition, such as \`A if B else C\`.`,
        "args": null
    },
    "enum": {
        "description": `Declares an enum. For example:
\`\`\`c
enum GameStatus:
    GAME_NOT_STARTED,
    GAME_IN_PROGRESS = 3,
    GAME_STARTED

enum Team:
    HUMANS = Team.2,
    ZOMBIES = Team.1
\`\`\`

The enum can then be accessed like other enums: \`GameStatus.GAME_STARTED\`.

If no value is specified, the value is the last specified value plus 1 (if the last specified value is a number), or 0 if it is the first enum member.

An enum can also be used as a type, such as \`enum["Value 1", "Value 2"]\`.
`,
        "args": null,
        "snippet": "enum $0",
    },
    "float": {
        "description": "The 'float' type. Denotes any real number.\n\nLimits can be specified: for example, `float[-4.5:5.5]` denotes all numbers between -4.5 and 5.5, inclusive.",
        "args": null,
        hideFromAutocomplete: true,
    },
    "for": {
        "description": `Denotes either:

- If an instruction, the beginning of a block that will execute in a loop, modifying the control variable on each loop. The instruction must be \`for <var> in range(start, stop, step):\` See also the \`range\` function.

- If within a list comprehension, a filtered or mapped array, such as \`[i for i in x if x == 3]\`.`,
        "args": null,
        "snippet": "for $0",
    },
    "if": {
        "description": `Denotes either:

- If an instruction, the beginning of a block that will only execute if the specified condition is true.

- If a value, an inline "ternary" condition, such as \`A if B else C\`. The \`else\` must be specified.`,
        "args": null,
        "snippet": "if $0",
    },
    "in": {
        "args": null,
        "description": "Whether comparing the first operand with any of the elements in the second operand returns true.\n\nFor example, `3 in [1,2,3]` will return true.\n\nBe aware that `3 in [1, true]` will return `true`, as 3 is truthy.\n\nTo check the presence of a string within another string, use `strContains`."
    },
    "int": {
        "description": "The 'integer' type. A subset of the 'float' type. Denotes all numbers without decimals.\n\nLimits can be specified: for example, `int[-4:5]` denotes all integers between -4 and 5, inclusive.",
        "args": null,
        hideFromAutocomplete: true,
    },
    "globalvar": {
        "description": "Declares a global variable. The index (0-127) can optionally be specified. Example: `globalvar myVar 127`",
        "args": null,
        "snippet": "globalvar $0",
    },
    "goto": {
        "description": "Goes to the specified label. Labels can only be placed after the `goto` statement, in the current rule. For example, `goto lbl_1` will continue execution from the `lbl_1:` instruction. Dynamic gotos, although not recommended, can be declared with the `loc+` keyword, such as `goto loc+A` which will move execution 3 actions after the `goto` instruction.",
        "args": null,
        "snippet": "goto $0",
    },
    "lambda": {
        "description": "Denotes an inline function. Can only be used in the `sorted` function.",
        "args": null,
        "snippet": "lambda $0",
    },
    "loc": {
        "description": "Used to define a dynamic goto (see `goto`).",
        "args": null,
        "snippet": "loc+$0",
    },
    "macro": {
        "description": `Declares a macro, which is an inline function or constant. For example:

\`\`\`python
macro BOSS_HP = 1000+getNumberOfPlayers()*300

macro add(a, b):
    a + b
\`\`\`
The macro can then be used like a function: \`add(C, D)\` will yield \`C + D\` and \`BOSS_HP\` will get replaced by \`1000+getNumberOfPlayers()*300\`.

Note that, unlike \`#!define\`, macros will not mess up the order of operations:

\`\`\`python
#!define add_define(a, b) a+b
macro add_macro(a, b):
    a + b

rule "":
    A = add_define(A, B) * C #will be interpreted as A + (B * C)
    A = add_macro(A, B) * C #will be interpreted as (A + B) * C
\`\`\`

You can also declare member macros, where \`self\` refers to the member. For example:
\`\`\`python
macro Player.setPowerLevel(powerLevel):
    self.setMaxHealth(powerLevel*200)
    self.setDamageDealt(powerLevel*2)

macro Vector.sum = self.x + self.y
\`\`\`

\`A.setPowerLevel(2)\` will yield \`A.setMaxHealth(400)\` and \`A.setDamageDealt(4)\`.

Default parameters can also be specified, and just like normal functions, you can use keyword arguments:

\`\`\`python
macro Player.setPowerLevel(powerLevel=1, damageDealt=null):
    self.setMaxHealth(powerLevel*200)
    self.setDamageDealt(damageDealt or powerLevel*2)

rule "":
    A.setPowerLevel(damageDealt=3)
\`\`\`
`,
        "args": null,
        "snippet": "macro $0",
    },
    "not": {
        "description": "Whether the given operand is false (or equivalent to false).",
        "args": null,
        "snippet": "not $0",
    },
    "or": {
        "description": "Whether either of the two operands are true (or equivalent to true). Does short-circuiting.",
        "args": null,
        "snippet": "or $0",
    },
    "playervar": {
        "description": "Declares a player variable. The index (0-127) can optionally be specified. Example: `playervar myVar 127`",
        "args": null,
        "snippet": "playervar $0",
    },
    "rule": {
        "description": "Declares a rule.",
        "args": null,
        "snippet": "rule \"$0\"",
    },
    "self": {
        "description": `In a member macro, refers to the member itself. For example:
\`\`\`python
macro Array.reverse():
    sorted(self, key=lambda _, i: -i)
\`\`\`
If calling \`A.reverse()\`, \`self\` will be replaced by \`A\`.

A member macro must always have \`self\` as the first argument.
`,
        "args": null,
    },
    "settings": {
        "description": `Declares custom game settings. Must be followed by an object containing the settings, or by a string containing the path to a JSON file (it must be named 'settings.opy.json' to get the autocompletion).

The settings are parsed with OverPy's parser, meaning you can do things such as:

\`\`\`py
macro VERSION = "1.4.3"
macro DEBUG = false
macro CLIP_SIZE_MULTIPLIER = 2
enum HeroUltModifiers:
    ASHE = 400

settings {
    /* comment */
    "main": {
        "modeName": w"Tower Meifense",
        "description": f"Tower Meifense by Zezombye v{VERSION}",
    },
    "gamemodes": {
        "general": {
            "respawnTime%": 50 if DEBUG else 100,
        }
    },
    "heroes": {
        "allTeams": {
            "ashe": {
                "ammoClipSize%": 100 * CLIP_SIZE_MULTIPLIER,
                "ultDuration%": HeroUltModifiers.ASHE
            },
        }
    }
}
\`\`\`

Note that every value has to eventually resolve to a dict/array/string/number/boolean through the optimizer (you can't do \`200 * A\` where \`A\` is a variable).

There are quite a lot of changes regarding the syntax, and it is recommended that you edit settings within Overwatch, then use the decompile command to convert to OverPy.
        `,
        "args": null,
        "snippet": "settings $0",
    },
    "signed": {
        "description": "Defines the specified type as signed (inferior or equal to 0). Only valid for 'int' or 'float'.",
        "args": null,
        hideFromAutocomplete: true,
    },
    "switch": {
        "description": "Denotes the beginning of a block that will jump execution to the `case` statement that has the value of the specified variable. If no `case` statement has the value of the specified variable, the execution goes to the `default` statement if it exists, else to the end of the block.",
        "args": null,
        "snippet": "switch $0",
    },
    "subroutine": {
        "description": "Declares a subroutine. The index (0-127) can optionally be specified. Example: `subroutine mySubroutine 127`",
        "args": null,
        "snippet": "subroutine $0",
    },
    "unsigned": {
        "description": "Defines the specified type as unsigned (superior or equal to 0). Only valid for 'int' or 'float'.",
        "args": null,
        hideFromAutocomplete: true,
    },
    "while": {
        "description": "Denotes the beginning of a block that will execute in a loop as long as the specified condition is true. If the condition evaluates to false when execution is at the top of the loop, then the loop exits, and execution jumps to the next action after the end of the block.",
        "args": null,
        "snippet": "while $0",
    },
};
