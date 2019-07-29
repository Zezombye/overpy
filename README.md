# OverPy v1.0
High-level language for the Overwatch Workshop with support for compilation and decompilation.

The philosophy behind this language is "what would the workshop be like if it was coded in Python?" As such, this language aims to be as Python-like as reasonably possible.

Join the EloHell discord for feedback: https://discord.gg/zwF7KQm #highlevel-scripting

Discord operators can add my decompiler bot by clicking on this link: https://discordapp.com/oauth2/authorize?client_id=604665521102782467&scope=bot

If someone posts workshop code, the bot will reply with the decompiled version (which is more readable).

# Demo page

![owo](https://i.imgur.com/MGru5kS.png)

To access the demo page, simply clone the repository (or download the zip) then open demo.html with your browser.

The demo page is divided in 3 parts.

The first part is the input for decompilation; this is where you paste your workshop code. Click on the "decompile" button to convert it to OverPy. Alternatively, click on the "add example text" button to input my Zombie Escape code. Note that the "add example text" will also hardcode names for some variables (refresh to get rid of that).

The second part is the input for compilation (and the output for decompilation); it is OverPy code (don't hesitate to copy-paste it into another window, as my front-end skills aren't that great and I didn't manage to make it so you can resize horizontally the textarea). Click on the "compile" button to convert it back into the Workshop script.

The third part is the output for compilation. It has a "compare" button you can use to check if the decompilation+compilation outputs the same code as the original. However, there can be false positives:
- Strings will most likely be parsed in different ways and will be differently organized, although they should result in the same output. (eg for the string "#Up!" you can put #{0} and {0}! in any order you want)
- Likely, operations can be parsed in different ways, eg add(add(a,b),c) is the same as add(a,add(b,c)).
- If you have a "skip if 9999", the number will be converted to however much instructions you need to get to the end of the rule (so a smaller number).
- Various optimizations (as there are several ways to represent the same code). In the end, just check the differences, and determine if it's a compilation error or just a reorganization :p

If you get "An error has occurred", you must open the developer console (F12 on Firefox, Ctrl+Shift+J in Chrome) to check the error. Please report to me any error you find! Note: your browser may freeze for a few seconds on decompilation/compilation (due to the amount of debug messages printed to the console).

# OverPy Syntax

The syntax is Python, except:
- True/False/None have been replaced by true/false/null
- The ++ and -- operators have been added (same effect as +=1 and -=1)
- The modulo operator has higher precedence than the multiplication/division operator
- The "while" loop has been replaced by "do: ... while x".

Rule metadata (name of the rule and event) is defined with annotations:

- `@Rule "name of the rule"`: the title of the rule.
- `@Event global`: the event of the rule (here "global"). Events can be: global, eachPlayer, playerTookDamage, playerDealtDamage, playerDealtFinalBlow, playerDied, playerEarnedElimination, playerDealtHealing, playerReceivedHealing, playerJoined, playerLeft.
- `@Team all`: the team targeted by this rule (can be omitted). Valid values are: all, 1, 2
- `@Slot 11`: the slots targeted by this rule (can be omitted). Valid values are 0-11.
- `@Hero widowmaker`: the heroes targeted by this rule (can be omitted).

Other than that, it's just plain old Python. I suggest to run the demo to get a better understanding of the syntax.

In most cases, the function names are just the english function names in camelCase, eg: Create Hud Text() -> createHudText(). Else, see the function reference "FUNCTIONS.md".

# Macros

Macros are done with the preprocessor keyword "define". For example:

```
#!define currentSectionWalls A
#!define wasFirstZombieLastRound L
```

Function macros are supported as well:

```
#!define setUsefulVars(x)     hasFirstInfectionPassed = x\
    currentSection = x\
    firstInfectionLoopIndex = x\
    countdownProgress = x\
    roundWinners = x
```
    
Note the usage of the backslashed lines.

A planned feature is script macros, meaning you would be able to do this:

`#!define createEffects(nbEffects) __script__("createEffects", nbEffects)`

with createEffects being a script that returns `nbEffects` createEffect instructions.

# Things that should work but that I haven't tested thoroughly

- Literal arrays: `var = [1,2,3]`
- If/else (without a return or goto just after, and obviously ignoring the rule conditions)
