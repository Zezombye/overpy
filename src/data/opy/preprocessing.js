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
        "description": "Creates a macro, like in C/C++. Macros must be defined before any code. Examples:\n\n    #!define currentSectionWalls A\n    #!define GAME_NOT_STARTED 3`\n\nFunction macros are supported as well:\n\n    #!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if not player.isFighting][0]\n    #!define spawnMei(type, location)     getFirstAvailableMei().meiType = type\\\n    wait(0.1)\\\n    getFirstAvailableMei().teleport(location)\\\n    getFirstAvailableMei().isFighting = true\n\nNote the usage of the backslashed lines.\n\nJS scripts can be inserted with the special `__script__` function:\n\n    #!define addFive(x) __script__(\"addfive.js\")\n\nwhere the `addfive.js` script contains `x+5` (no `return`).\n\nArguments of JS scripts are inserted automatically at the beginning (so `addFive(123)` would cause `var x = 123;` to be inserted). The script is then evaluated using `eval()`.\n\nA `vect()` function is also inserted, so that `vect(1,2,3)` returns an object with the correct properties and `toString()` function.\n\nWhen resolving the macro, the indentation on the macro call is prepended to each line of the replacement.\n"
    },
    "defineMember": {
        "description": "Same as the `#!define` directive, but tells the VS Code extension to include this macro in the member autocompletion."
    },
    "obfuscate": {
        "description": "Obfuscates the resulting code. This directive assumes all your code is in the overpy file, meaning you should not combine the generated code with code that is only in the workshop GUI.\n\nUsage of this directive will result in a size increase, and a very low performance decrease, but should not in any case alter how the existing code functions. (if it does, please report that as a bug)\n\nThe following obfuscation methods are applied:\n\n- Rule filling: several empty rules are inserted.\n- Comment removing: all rule titles are replaced with the empty string.\n- Variable barcoding: all variable names are replaced with a combination of capital i and lowercase L.\n- Character replacement: characters in custom strings are replaced with special characters that display in Overwatch, but not text editors.\n"
    },
    "noEdit": {
        "description": "Adds 2500 empty rules to the preset, which should make it absolutely impossible to open the rules (as you get a \"connection lost\" error). Therefore, it is the ultimate form of obfuscation, as you simply cannot even see the code.\n\nHowever, pasting the generated code could trigger a \"connection lost\" error as well, and a huge lag. As such, this directive should only be used on finalized gamemodes, before you publish it; it should not be used every time.\n\nYou will very likely have to paste the generated code in an editor, then paste the rules by sets of 800, 1200 then 500 to be able to insert them.\n"
    },
    "suppressWarnings": {
        "description": "Suppresses the specified warnings globally across the program. Warnings must be separated by a space."
    },
    "disableUnusedVars": {
        "description": "Do not put 'unused_var_xxx' in the compilation. Not recommended if compiling regularly, as this could lead to not being able to paste the generated output if variable offsets have been modified."
    },
    "mainFile": {
        "description": "Specifies an .opy file as the main file (implying the current file is a module). This directive MUST be placed at the very beginning of the file."
    },
    "include": {
        "description": "Inserts the text of the specified file. The file path can be relative; if so, it is relative to the main file."
    }
}
