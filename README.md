# OverPy v1.5
High-level language for the Overwatch Workshop with support for compilation and decompilation.

The philosophy behind this language is "what would the workshop be like if it was coded in Python?" As such, this language aims to be as Python-like as reasonably possible.

Join the EloHell discord for feedback: https://discord.gg/zwF7KQm #highlevel-scripting

Discord operators can add my decompiler bot by clicking on this link: https://discordapp.com/oauth2/authorize?client_id=604665521102782467&scope=bot

If someone posts workshop code, the bot will reply with the decompiled version (which is more readable).

Languages supported: English, French, Korean

# Installing the VS Code extension

- Download VS Code: https://code.visualstudio.com/download
- Install the extension: ![owo](https://i.imgur.com/j0WsTTR.png)

# Decompiling your code

Press Ctrl+Shift+P, then type "decompile". The "Decompile" command should pop up: https://i.imgur.com/jzfo2Bj.png

You will then be able to paste your workshop code, but also to specify names for global and player variables: ![owo](https://i.imgur.com/iBbdz9o.png)

Once you click on "decompile", a save prompt will pop up; just select the location where you wish to create the file. ![owo](https://i.imgur.com/V7v33j3.png)

If everything goes well, you will be able to start coding in OverPy: ![owo](https://i.imgur.com/QaPn8pF.png)

# Coding

The extension includes syntax highlighting, autocompletion, and documentation: 

![owo](https://i.imgur.com/jwWY8mw.png)

![owo](https://i.imgur.com/QQYuWNf.png)

Note that the extension is still in BETA; there can be a few bugs, and some documentation is missing. However it is still usable.

Also, big thanks to arxenix, who parsed the workshop documentation: https://github.com/arxenix/owws-documentation/blob/master/workshop.json

# Compiling

Press the "Compile" button at the top right: ![owo](https://i.imgur.com/RSrn3tz.png)

If everything goes right, you should get a success notification, and the content of the code is copied into your clipboard. Else, you will get an error: ![owo](https://i.imgur.com/G72LoAk.png)

# Demo page

[Try it out here!](https://zezombye.github.io/overpy/demo)

![owo](https://i.imgur.com/MGru5kS.png)

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

You can do script macros with the special `__script__` function. For example:

```#!define addFive(x) __script__("C:/users/zezombye/scripts/addfive.js")```

The content of `addfive.js` is simply `x+5` (no `return`!)

For the technical details:

- Arguments are automatically inserted into the script (in this case, `var x = 123;` would be inserted at the top of the script)
- The script is then evaluated using `eval()`
- You must specify the absolute path of the script
