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

const preprocessingDirectives = {
    "define": {
        "description": "Creates a macro, like in C/C++. Macros must be defined before any code. Examples:\n\n    #!define currentSectionWalls A\n    #!define GAME_NOT_STARTED 3`\n\nFunction macros are supported as well:\n\n    #!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if not player.isFighting][0]\n    #!define spawnMei(type, location)     getFirstAvailableMei().meiType = type\\\n    wait(0.1)\\\n    getFirstAvailableMei().teleport(location)\\\n    getFirstAvailableMei().isFighting = true\n\nNote the usage of the backslashed lines.\n\nJS scripts can be inserted with the special `__script__` function:\n\n    #!define addFive(x) __script__(\"addfive.js\")\n\nwhere the `addfive.js` script contains `x+5` (no `return`).\n\nArguments of JS scripts are inserted automatically at the beginning (so `addFive(123)` would cause `var x = 123;` to be inserted). The script is then evaluated using `eval()`.\n\nA `vect()` function is also inserted, so that `vect(1,2,3)` returns an object with the correct properties and `toString()` function.\n\nWhen resolving the macro, the indentation on the macro call is prepended to each line of the replacement.\n",
        "snippet": "define $0",
    },
    "defineMember": {
        "description": "Same as the `#!define` directive, but tells the VS Code extension to include this macro in the member autocompletion.",
        "snippet": "defineMember $0",
    },
    "obfuscate": {
        "description": 
`Obfuscates the resulting code. This directive assumes all your code is in the overpy file, meaning you should not combine the generated code with code that is only in the workshop GUI.

Usage of this directive will result in a size increase, and a very low performance decrease, but should not in any case alter how the existing code functions. (if it does, please report that as a bug)

The following obfuscation methods are applied:

- Rule filling: 2500 empty rules are inserted, making it impossible to view the gamemode within the workshop UI. It must be copy-pasted to be able to be edited (you can then apply various anti copy-paste integrity checks).
- Name obfuscation: all rule titles and comments are removed, and all variable/subroutine names are replaced with a combination of capital i and lowercase L.
- String obfuscation: characters in custom strings are replaced with special characters that display in Overwatch, but not text editors.
- Constant obfuscation: some constants, such as heroes or maps, are replaced with other values that compute to the original value.
- Inspector obfuscation: the inspector is disabled, and all inspector-related actions are removed.
- Copy protection: the gamemode will break upon copying it via text. It is highly recommended to enable constant obfuscation to greatly strengthen this protection.

To save elements, it is possible to specify methods to disable, by prefixing them with \`no\`. For example, \`#!obfuscate noRuleFilling noConstantObfuscation\` will disable rule filling and constant obfuscation, which is useful if the obfuscation adds too much elements.
`
    },
    "suppressWarnings": {
        "description": "Suppresses the specified warnings globally across the program. Warnings must be separated by a space.",
        "snippet": "suppressWarnings $0",
    },
    "mainFile": {
        "description": "Specifies an .opy file as the main file (implying the current file is a module). This directive MUST be placed at the very beginning of the file.",
        "snippet": "mainFile \"$0\"",
    },
    "include": {
        "description": "Inserts the text of the specified file. The file path can be relative; if so, it is relative to the main file.",
        "snippet": "include \"$0\"",
    },
    "disableOptimizations": {
        "description": "Disables all optimizations done by the compiler. Should be only used for debugging, if you suspect that OverPy has bugs in its optimizations.",
    },
    "optimizeForSize": {
        "description": "Prioritizes lowering the number of elements over optimizing the runtime."
    },
    "replace0ByCapturePercentage": {
        "description": `
Replaces all instances of 0 by \`getCapturePercentage()\`, if replacement by \`null\` or \`false\` is impossible. Size optimizations must be enabled.

This directive should only be used if the gamemode cannot be played in Assault, Hybrid, or Elimination.

If you want to make sure these gamemodes are not mistakenly played, you can add the following rule:

\`\`\`python
rule "Integrity check":
    @Condition getCapturePercentage()
    print("This gamemode cannot be played!")
\`\`\`
`
    },
    "replace0ByPayloadProgressPercentage": {
        "description": `
Replaces all instances of 0 by \`getPayloadProgressPercentage()\`, if replacement by \`null\` or \`false\` is impossible. Size optimizations must be enabled.

This directive should only be used if the gamemode cannot be played in Hybrid or Escort.

If you want to make sure these gamemodes are not mistakenly played, you can add the following rule:

\`\`\`python
rule "Integrity check":
    @Condition getPayloadProgressPercentage()
    print("This gamemode cannot be played!")
\`\`\`
`
    },
    "replace0ByIsMatchComplete": {
        "description": `
Replaces all instances of 0 by \`isMatchComplete()\`, if replacement by \`null\` or \`false\` is impossible. Size optimizations must be enabled.

This directive should only be used if the gamemode is endless, or if you do not care about the integrity of the gamemode once victory/defeat is declared.
`
    },
    "replace1ByMatchRound": {
        "description": `
Replaces all instances of 1 by \`getMatchRound()\`, if replacement by \`true\` is impossible. Size optimizations must be enabled.

This directive should only be used if the gamemode cannot be played in Assault, Hybrid, Escort (with the competitive ruleset) or Control.

If you want to make sure these gamemodes are not mistakenly played, you can add the following rule:

\`\`\`python
rule "Integrity check":
    @Condition getMatchRound() > 1
    print("This gamemode cannot be played!")
\`\`\`
`
    },
    "replaceTeam1ByControlScoringTeam": {
        "description": `
Replaces all instances of \`Team.1\` by \`getControlScoringTeam()\`. Size optimizations must be enabled.

This directive should only be used if the gamemode cannot be played in Control.

If you want to make sure this gamemode is not mistakenly played, you can add the following rule:

\`\`\`python
rule "Integrity check":
    @Condition getControlScoringTeam() != Team.1
    print("This gamemode cannot be played!")
\`\`\`
`
    },

    "extension": {
        "description": `
Activates a workshop extension. The following extensions are available:

${Object.keys(customGameSettingsSchema.extensions.values).map(x => "- `"+x+"` ("+customGameSettingsSchema.extensions.values[x].points+" point" + (customGameSettingsSchema.extensions.values[x].points > 1 ? "s" : "")+")").join("\n")}

__extensionDescription__`,
        "snippet": "extension ${1|"+Object.keys(customGameSettingsSchema.extensions.values).join(",")+"|}",
    }
}
