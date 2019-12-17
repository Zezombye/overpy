# OverPy v3.0
High-level language for the Overwatch Workshop with support for compilation and decompilation.

The philosophy behind this language is "what would the workshop be like if it was coded in Python?" As such, this language aims to be as Python-like as reasonably possible.

Join the EloHell discord for feedback: https://discord.gg/zwF7KQm #highlevel-scripting

All languages are supported.

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

Big thanks to arxenix who parsed the workshop documentation: https://github.com/arxenix/owws-documentation/blob/master/workshop.json

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

```#!define addFive(x) __script__("addfive.js")```

The content of `addfive.js` is simply `x+5` (no `return`!)

For the technical details:

- Arguments are automatically inserted into the script (in this case, `var x = 123;` would be inserted at the top of the script)
- A `vect()` function is automatically inserted, so that `vect(1,2,3)` returns an object with the correct x, y, and z properties and `toString()` function
- The script is then evaluated using `eval()`

# Switches

Switches are declared like in C:

```
switch eventPlayer.team:
    case TEAM_ZOMBIES:
        damage(eventPlayer, null, 100)
        break
    case TEAM_HUMANS:
        heal(eventPlayer, null, 200)
        break
    case TEAM_NOTEAM:
    default:
        bigMessage(eventPlayer, "You need to choose a team!")
```

Remember to `break` out of your `case` statements, else the program will continue to the next `case` statement.

Note that the `default` is not required; if omitted, the execution will skip to the end of the `switch` statement.

# Dictionaries

Dictionaries can be declared, as long as you select a value (you cannot declare a dictionary alone):

```
@Rule "player killed an enemy"
@Event playerDied
attacker.score += {
    Hero.PHARAH: 10,
    Hero.BRIGITTE: 15,
    Hero.REINHARDT: 100,
}[victim.getCurrentHero()]
```

Beware that in case of `KeyError`, the first value in the dictionary is selected.

# Ternary operator

`A if B else C` resolves to `[A,C][1*not B]`.

Note that it is possible to do the same using `B and A or C` due to short-circuiting. However, the workshop restricts inputs for boolean operators, and the compiler isn't smart enough yet to determine whether it can use that form.

# Strings

OverPy adds string modifiers:

- `w"string"` makes the string fullwidth: `"ｓｔｒｉｎｇ"`
- `b"string"` makes the string use the "big letters" font, by replacing letters with unicode characters that trigger the "big letters" font while still looking like the original characters. For now this only includes greek letters and the "Line Separator" for space, meaning not all strings are able to be "big lettered".
- `l"string"` makes the string localized (the old, non-custom strings).

To add variables into your string, use the `format` function, such as `"{} enemies".format(nbEnemies)`. Numbered fields can be used.

Like in C, successive strings are concatenated: `"string1""string2""string3` becomes `"string1string2string3`. That way, you can use macros in your strings.
