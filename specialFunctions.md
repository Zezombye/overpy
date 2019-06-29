The following is the list of (workshop) functions in OverPy that are not represented by a camelCase version of the function (such as `Big Message` -> `bigMessage`).

As a general rule, operator functions are replaced by their operator (eg: `Add(1,2)` -> `1+2`) and getters/setters are replaced by member functions (eg: `Position Of(Event Player)` -> `eventPlayer.getPosition()`). All functions that take a player as their first argument (except kill, damage and heal) are member functions (and are not listed here if the function name doesn't change).

Use Ctrl+F to search for the workshop function.

# Abort()

The keyword `return`.

# Abort If (x == 2)

```
if x == 2:
    return
```

# Chase Global Variable At Rate | Chase Global Variable Over Time | Chase Player Variable At Rate | Chase Player Variable Over Time

All of these functions are the `chase()` function, with the 3rd argument changing depending on whether it is "at rate" or "over time".

For "At Rate", it will be:
`chase(var, destination, rate=xxx, Reeval.XXXX)`

For "Over Time", it will be:
`chase(var, destination, duration=xxx, Reeval.XXXX)`

# Clear Status (player)

`player.clearStatusEffect()`

# Create Hud Text

`hudText()`

# Disable Built-In Gamemode Announcer | Enable Built-In Gamemode Announcer

`disableAnnouncer() | enableAnnouncer()`

# Disable Built-In Gamemode Completion | Enable Built-In Gamemode Completion

`disableGamemodeCompletion() | enableGamemodeCompletion()`

# Disable Built-In Gamemode Respawning | Enable Built-In Gamemode Respawning

`disableRespawn() | enableRespawn()`

# Disable Built-In Gamemode Scoring | Enable Built-In Gamemode Scoring

`disableScoring() | enableScoring()`

# Loop

`while true` (no ':' at the end!)

Note: you must have a "`do:`" at the beginning of your rule for each `while` keyword.

# Loop If (X == 2)

`while X == 2` (see above)

# Loop If Condition Is False | Loop If Condition Is True

`while not RULE_CONDITION | while RULE_CONDITION`

As there is no way to properly translate that in Python, the only way I found is to simulate a macro. Keep in mind these expressions are hardcoded, as such you cannot do `while RULE_CONDITION != true`.

# Modify Global Variable(a, add, 2) | Modify Player Variable

`A += 2 | player.A += 2`

The same applies for other operations (eg subtract -> `-=`, append to array -> `.append()`).

# Modify Global Variable At Index(var, index, add, 2) | Modify Player Variable At Index

`var[index] += 2 | player.var[index] += 2`

# Modify Player Score(player, score)

`player.addToScore(score)`

# Press Button(player, interact)

`player.pressButton(Button.INTERACT)`

# Reset Player Hero Availability (player)

`player.resetHeroAvailability()`

# Start Camera (player, args)

`player.setCamera(args)`

# Set Global Variable | Set Global Variable At Index | Set Player Variable | Set Player Variable At Index

`A = 2 | A[3] = 2 | player.A = 2 | player.A[3] = 2`

# Set Status (player, burning)

`player.setStatusEffect(Status.BURNING)`

# Set Ultimate Charge(player, charge)

`player.setUltCharge(charge)`

# Set Ultimate Ability Enabled (player, bool)

`player.setUltEnabled(bool)`

# Skip

`goto <label>` or `goto loc+xxx`

OverPy uses a system of "goto/label" similar to C, to simulate Skip and Skip Ifs.
If you specify a label (you can name it whatever you want, as long as it isn't a keyword) this label must be after the goto and in the same rule (eg: `lbl_end:`). Note the ':' at the end of the label (but no indentation must happen).

In the case of a dynamic Skip (eg: `Skip(A)`) OverPy simulates that by using `goto loc+A`. This case is hardcoded (you cannot do `goto A+loc`), so treat `goto loc+` as a single keyword.

# Skip If (X == 2)

```
if x == 2:
    goto <label>
```

See above.

# Start Accelerating(player, args)

`player.startAcceleration(args)`

# Start Damage Over Time(player, args)

`player.startDoT(args)`

# Start Forcing Player To Be Hero (player, widowmaker)

`player.startForcingHero(Hero.WIDOWMAKER)`

# Start Heal Over Time(player, args)

`player.startHoT(args)`

# Start Holding Button (player, ultimate)

`player.startForcingButton(Button.ULTIMATE)`

# Stop Accelerating(player, args)

`player.stopAcceleration(args)`

# Stop All Damage Over Time(player) | Stop All Heal Over Time(player)

`player.stopAllDoT() | player.stopAllHoT()`

# Stop Chasing Global Variable | Stop Chasing Player Variable

`stopChasing(var)`

# Stop Damage Over Time (id) | Stop Heal Over Time (id)

`stopDoT(id) | stopHoT(id)`

# Absolute Value (X)

`abs(x)`

# Add (2,2)

`2+2`

# And (A, B)

`A and B`

# Append To Array(array, var)

