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
import { postLoadTasks } from "../../globalVars";
import { customGameSettingsSchema } from "../customGameSettings";

export const preprocessingDirectives: Record<string, {
    description: string,
    snippet?: string
}> = {
    "define": {
        "description": "**Warning**: This directive performs a text-based replacement! Use `macro` or `const` instead, unless absolutely necessary.\n\nCreates a macro, like in C/C++. Macros must be defined before any code. Examples:\n\n    #!define currentSectionWalls A\n    #!define GAME_NOT_STARTED 3`\n\nFunction macros are supported as well:\n\n    #!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if not player.isFighting][0]\n    #!define spawnMei(type, location)     getFirstAvailableMei().meiType = type\\\n    wait(0.1)\\\n    getFirstAvailableMei().teleport(location)\\\n    getFirstAvailableMei().isFighting = true\n\nNote the usage of the backslashed lines.\n\nJS scripts can be inserted with the special `__script__` function:\n\n    #!define addFive(x) __script__(\"addfive.js\")\n\nwhere the `addfive.js` script contains `x+5` (no `return`).\n\nArguments of JS scripts are inserted automatically at the beginning (so `addFive(123)` would cause `var x = 123;` to be inserted). The script is then evaluated using `eval()`.\n\nA `vect()` function is also inserted, so that `vect(1,2,3)` returns an object with the correct properties and `toString()` function.\n\nWhen resolving the macro, the indentation on the macro call is prepended to each line of the replacement.\n",
        "snippet": "define $0",
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
    "excludeVariablesInCompilation": {
        "description": "Does not include the variables field in compilation. Use if you want to paste into another mode with mismatched variable indices.",
    },
    "setupTags": {
        "description": "Add a rule to obtain an unsanitized '<' character which can be used to create <tx> and <fg> tags.\n\n**WARNING**: The inserted rule creates a dummy bot then immediately destroys it. This has the side effect of triggering each-player rules and may break your gamemode (though if properly coded, it shouldn't).\n\nThe `__holygrail__` variable can be used to obtain the raw '<' character, although it is not necessary as OverPy will automatically take care of the conversion, meaning you can put raw texture tags in strings.\n\nFor color, use the <fgRRGGBBAA> tag, where RR/GG/BB are the hex color value, and AA is the hex transparency value (00 = transparent, FF = opaque).\nExample: `print('<fgFF0000FF>Red text</fg>')`.\n\nFor textures, use the <TX> standalone tag, with the texture id as seen in https://workshop.codes/wiki/articles/tx-reference-sheet.\nExample: `print('<TXC0000000002DD21>')` will display the mouse cursor texture.\n\nAdditionally, you can use the `Texture` enum (such as `Texture.MOUSE_CURSOR`), and OverPy will automatically optimize it.\n\nOverPy will also replace `'<tx1234>'` to the correct full texture id, but only if the entire tag is inside a string (`'<tx{}>'.format(id)` will not work, but `'<tx{}>'.format(1234)` will).",
    },
    "disableOptimizations": {
        "description": "Disables all optimizations done by the compiler for the current block or file, up until the end of the block/file or the next `#!enableOptimizations` directive.",
    },
    "enableOptimizations": {
        "description": "Re-enables optimizations after a `#!disableOptimizations` directive. If no `#!disableOptimizations` directive was encountered, this directive does nothing.",
    },
    "optimizeForSize": {
        "description": "Prioritizes lowering the number of elements over optimizing the runtime. Effective for the current block or file, up until the end of the block/file or the next `#!disableOptimizeForSize` directive."
    },
    "disableOptimizeForSize": {
        "description": "Re-enables optimizations after a `#!optimizeForSize` directive. If no `#!optimizeForSize` directive was encountered, this directive does nothing."
    },
    "optimizeStrict": {
        "description": `Disables some optimizations that may cause issues in extreme cases of type conversion. For example:

- A*0 can return vect(0,0,0) instead of 0
- A+0 and A*1 can return 0 if A is not a number
- A or true should return A instead of true if A is truthy

Those optimizations (and others) will be disabled so that the behavior of the gamemode will not be altered.

This directive is added by default upon decompilation. Only remove it if you are sure that your gamemode does not rely on type conversion tricks. It is recommended to use a website such as http://diffchecker.com to compare the differences in the output when enabling/disabling this directive.

This directive is effective for the current block or file, up until the end of the block/file or the next \`#!disableOptimizeStrict\` directive.`,
    },
    "disableOptimizeStrict": {
        "description": "Re-enables optimizations after a `#!optimizeStrict` directive. If no `#!optimizeStrict` directive was encountered, this directive does nothing."
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
    "translations": {
        "description": `
Setups the translation system. Arguments are the language codes separated by spaces.

For example:

\`#!translations en fr es zh_cn\`

Only the es_mx, es_es, zh_cn and zh_tw languages can be specified fully. For the rest, you can only specify the first two letters.

To translate a string, wrap it with the "\\_" function, such as \`_("You have \${} money").format(money)\`. Note that the formatter has to be outside of the function. You can also use the "t" string modifier, such as \`t"\${} money".format(money)\`.

If two strings are the same but have to be translated differently, you can add a context string as the first argument, such as \`_("the direction", "left")\`.

Lastly, if a translated string is stored in a variable, you **have** to use the "\\_" function when displaying it, such as \`hudHeader(text=_(someVariable))\`. Else, "TLErr" will be displayed. Note that you also have to use the "\\_" function when storing the string in the variable, else "0" will be displayed.

OverPy will generate and parse .po files for each language based on the name of the main file. You can then use an online editor to edit those files. Leading and trailing whitespace is automatically stripped from the string when put into translation files.

**WARNING**: A translated string cannot be used as a normal string **when stored in a variable**, as it becomes a string array. This means you cannot use \`.replace()\`, \`.charAt()\`, etc. When translating your gamemode, look out for these functions.

This also means that, when used in a variable, you cannot use a translated string as an argument of a string: \`"{}{}".format(t"string", 1234)\` will not work. Instead, do \`t"string{}".format(1234)\`. The translated string must always be top-level. You will also get "TLErr" if trying to use a translated string as an argument for another function.

You can also potentially save a lot of elements by using the #!translateWithPlayerVar directive (see the associated documentation).

**Note**: The way string formatting works is via the .replace() function and some constants. This means you cannot have the following in your translated strings if using formatters:

- \`(0.00, 1.00, 0.00)\` (\`Vector.UP\`)
- \`(0.00, -1.00, 0.00)\` (\`Vector.DOWN\`)
- \`(1.00, 0.00, 0.00)\` (\`Vector.LEFT\`)
- \`(-1.00, 0.00, 0.00)\` (\`Vector.RIGHT\`)
- \`(0.00, 0.00, 1.00)\` (\`Vector.FORWARD\`)
- \`(0.00, 0.00, -1.00)\` (\`Vector.BACKWARD\`)
- \`1876650.25\`, \`1876651.25\`, \`1876652.25\`, \`1876653.25\`, \`1876654.25\`, \`1876655.25\`, \`1876656.25\`, \`1876657.25\`, \`1876658.25\`, \`1876659.25\`
        `
    },
    "translateWithPlayerVar": {
        "description": `
Stores the player's language in a variable using a rule which uses the \`.startFacing()\` function when the player spawns (the language is determined based on the player's facing direction).

If using translations, this can save a lot of elements.

If your gamemode changes the facing direction on spawn, you must modify it so that it changes it once \`eventPlayer.__languageIndex__ != 1.1\`.

You can specify \`noDetectionRule\` to not create the rule which sets the variable to the player's language, in which case you'll have to define the rule yourself; the variable must be set to the language as defined in the order specified in the \`#!translations\` directive, where the first language is index 1, and must be set to 1 by default if no language could be determined.
        `,
    },

    "extension": {
        "description": "You shouldn't be reading this. Contact CactusPuppy if you can see this.",
        "snippet": "You shouldn't be reading this. Contact CactusPuppy if you can see this.",
    }
};

postLoadTasks.push({
    task: () => {
        preprocessingDirectives["extension"] = {
            "description": `
Activates a workshop extension. The following extensions are available:

${Object.keys(customGameSettingsSchema.extensions.values).map(x => "- `"+x+"` ("+customGameSettingsSchema.extensions.values[x].points+" point" + (customGameSettingsSchema.extensions.values[x].points > 1 ? "s" : "")+")").join("\n")}

__extensionDescription__
            `,
            "snippet": "extension ${1|"+Object.keys(customGameSettingsSchema.extensions.values).join(",")+"|}",
        };
    },
    priority: 24
});
