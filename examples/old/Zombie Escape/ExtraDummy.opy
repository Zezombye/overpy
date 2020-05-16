#!mainFile "ZombieEscape.opy"

@Rule "add or re-add extra dummy"
@Event global
if addExtraDummy and extraDummy == null and getNumberOfPlayers(Team.ALL) < 12:
    if hostPlayer != null:
        #usually, the host player will stay longer than other players
        extraDummySlot = hostPlayer.getSlot()
    else:
        extraDummySlot = random.choice(getAllPlayers()).getSlot()
    
    destroyHudText(cannotPutExtraDummyHud)
    createDummy(extraDummyHero, Team.ALL, extraDummySlot, extraDummyPosition, vect(0,0,0))
    extraDummy = getLastCreatedEntity()
    extraDummy.setMaxHealth(extraDummyMaxHp)
    wait()
    heal(extraDummy, null, 9999999)
    damage(extraDummy, null, extraDummyMaxHp-extraDummyHp)

@Rule "can't add extra dummy"
@Event global
if addExtraDummy and extraDummy == null and getNumberOfPlayers(Team.ALL) >= 12:
    hudHeader(getAllPlayers(), "A player needs to leave & rejoin for the map to work correctly!", HudPosition.TOP, -500, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    cannotPutExtraDummyHud = getLastCreatedText()

@Rule "update dummy hp"
@Event global
if extraDummy != null:
    do:
        extraDummyHp = extraDummy.getHealth()
        wait()
    while RULE_CONDITION
