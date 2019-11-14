#Global variables

#!define globalRemechPosition A
#!define currentMap B

#Player variables

#!define remechPosition A
#!define startCloning B
#!define cloningCooldown C
#!define cloningDva D
#!define cloningPosition E
#!define cloningEffect F


##!obfuscate

@Rule "init"
@Event global
currentMap = getCurrentMap()
hudHeader(getAllPlayers(), "Interact: Spawn {}".format(Hero.DVA), Position.LEFT, 0, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)


@Rule "ayutthaya"
@Event global
if currentMap == Map.AYUTTHAYA:
    globalRemechPosition = vect(30,21,110)

@Rule "black forest"
@Event global
if currentMap == Map.BLACK_FOREST:
    globalRemechPosition = vect(-10.71, 22.11, 34.75)


@Rule "castillo"
@Event global
if currentMap == Map.CASTILLO:
    globalRemechPosition = vect(-108.15, 38.31, 26.32)

"""
@Rule "ecopoint"
@Event global
if currentMap == Map.ECOPOINT_ANTARTICA:
    globalRemechPosition = vect(31.82, 16, 4.28)
"""

@Rule "necropolis"
@Event global
if currentMap == Map.NECROPOLIS:
    globalRemechPosition = vect(-39.5, 9, 0)


@Rule "hanamura"
@Event global
if currentMap == Map.HANAMURA:
    globalRemechPosition = vect(89.68, -3.51, 94.48)

    
@Rule "blizz world"
@Event global
if currentMap == Map.BLIZZ_WORLD:
    globalRemechPosition = vect(3, -5, -106.62)


@Rule "busan"
@Event global
if currentMap == Map.BUSAN:
    globalRemechPosition = vect(210.21, 9.21, 201.92)


@Rule "dorado"
@Event global
if currentMap == Map.DORADO:
    globalRemechPosition = vect(76.15, 20, 16)


@Rule "create dvas"
@Event global
createDummy(Hero.DVA, Team.1, 3, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.1, 4, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.1, 5, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.2, 3, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.2, 4, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.2, 5, globalRemechPosition, vect(0,0,0))



"""@Rule "debug coords"
@Event global
debug(hostPlayer.getPosition())


@Rule "debug tp"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0,0,5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))"""


@Rule "init players"
@Event eachPlayer
if not eventPlayer.isDummy() and eventPlayer.hasSpawned():
    eventPlayer.cloningDva = getPlayersInSlot(eventPlayer.getSlot()+3, eventPlayer.getTeam())
    hudHeader(eventPlayer, eventPlayer.cloningCooldown, Position.LEFT, 1, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
    chase(eventPlayer.cloningCooldown, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)


@Rule "interact -> spawn dva"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT) and eventPlayer.cloningCooldown == 0:
    eventPlayer.cloningDva.setFacing(eventPlayer.getFacingDirection(), Relativity.TO_WORLD)
    eventPlayer.cloningDva.cloningPosition = eventPlayer.getPosition()
    eventPlayer.cloningDva.startCloning = true
    eventPlayer.cloningCooldown = 3
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.PURPLE, eventPlayer.getPosition()+vect(0,-2,0), 1.5, EffectReeval.VISIBILITY)
    eventPlayer.cloningEffect = getLastCreatedEntity()
    wait(2.1)
    destroyEffect(eventPlayer.cloningEffect)


@Rule "init dvas"
@Event eachPlayer
if eventPlayer.isDummy() and eventPlayer.getCurrentHero() == Hero.DVA and eventPlayer.hasSpawned():
    wait(1)
    eventPlayer.setDamageDealt(0)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.remechPosition = eventPlayer.getPosition()
    eventPlayer.teleport(globalRemechPosition)


@Rule "counteract dva mech balance"
@Event eachPlayer
@Hero dva
if eventPlayer.hasSpawned() and eventPlayer.isDummy():
    eventPlayer.setDamageReceived(300)


"""@Rule "player dies -> kill his dva"
@Event playerDied
if isGameInProgress() and not eventPlayer.isDummy():
    kill(eventPlayer.cloningDva, null)"""


@Rule "D.Va cloning"
@Event eachPlayer
if eventPlayer.startCloning and eventPlayer.getCurrentHero() == Hero.DVA and eventPlayer.isDummy():
    wait(0.032)
    eventPlayer.teleport(eventPlayer.remechPosition)
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(1.936)
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.032)
    eventPlayer.teleport(eventPlayer.cloningPosition)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.PURPLE, eventPlayer.cloningPosition+vect(0,1,0), 2)
    wait(0.176)
    kill(eventPlayer, null)
    eventPlayer.resurrect()
    wait(0.35)
    eventPlayer.teleport(remechPosition)
    eventPlayer.startCloning = false
