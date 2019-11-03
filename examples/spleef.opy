#!define MAX_SPLEEF_ROWS 8

#Global variables

#!define dvaBotEntityList B
#!define dvaAmount E
#!define dvaSpacing F
#!define clonedMechSpawnHeight G
#!define index I
#!define spleefLocation J
#!define startCloning N
#!define currentSpleefRow O
#!define globalRemechPosition P
#!define isOn2ndColumn Q
#!define spleefSpawn R
#!define gameState S

#Player variables

#!define remechPosition A
#!define isSpectator B
#!define isReady C

#!define SKIRMISH 0
#!define BUILDING_SPLEEF 1
#!define SPLEEF_READY 2
#!define TELEPORTING_PLAYERS 3
#!define SPLEEF_IN_PROGRESS 4

#!obfuscate

@Rule "init"
@Event global
clonedMechSpawnHeight = 20
dvaSpacing = 1.5
dvaAmount = 6
spleefLocation = vect(9, 226, 253.5)
currentSpleefRow = 0
startCloning = false
globalRemechPosition = vect(40.5, 225, 277)
isOn2ndColumn = false
spleefSpawn = vect(0, 255, 245)
wait(0.1)
createDummy(Hero.DVA, Team.ALL, 6, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.ALL, 7, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.ALL, 8, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.ALL, 9, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.ALL, 10, globalRemechPosition, vect(0,0,0))
createDummy(Hero.DVA, Team.ALL, 11, globalRemechPosition, vect(0,0,0))
dvaBotEntityList = [player for player in getAllPlayers() if player.getCurrentHero() == Hero.DVA and player.isDummy()]


"""@Rule "debug coords"
@Event global
debug(hostPlayer.getPosition())"""


"""@Rule "tp player to arena on spawn"
@Event eachPlayer
if eventPlayer.hasSpawned() and eventPlayer.isAlive() and not eventPlayer.isDummy():
    wait(0.1)
    eventPlayer.teleport(spleefLocation)"""


@Rule "Set D.va damage dealt to 0%"
@Event eachPlayer
if eventPlayer.isDummy() and eventPlayer.getCurrentHero() == Hero.DVA:
    eventPlayer.setDamageDealt(0)
    wait(1)
    eventPlayer.setFacing(vect(0,0,-1), Relativity.TO_WORLD)


@Rule "spleef killing"
@Event eachPlayer
if not eventPlayer.isDummy() and gameState == SPLEEF_IN_PROGRESS and eventPlayer.getPosition().y <= 225.1 and eventPlayer.isReady:
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    wait(0.1)
    kill(eventPlayer, null)


@Rule "player specs"
@Event playerDied
if gameState >= TELEPORTING_PLAYERS and not eventPlayer.isDummy():
    eventPlayer.isReady = false
    eventPlayer.isSpectator = true


@Rule "player specs 2"
@Event eachPlayer
if eventPlayer.isSpectator and eventPlayer.isAlive():
    wait(0.1)
    eventPlayer.startForcingHero(Hero.PHARAH)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.teleport(spleefSpawn)


@Rule "no oob"
@Event eachPlayer
if eventPlayer.isReady and distance(eventPlayer.getPosition(), vect(0, 235, 245)) > 20:
    do:
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), vect(0, 225, 245)), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait()
    while RULE_CONDITION


@Rule "kb"
@Event playerTookDamage
victim.applyImpulse(vect(vectorTowards(attacker.getPosition(), victim.getPosition()).x, 0, vectorTowards(attacker.getPosition(), victim.getPosition()).z), eventDamage*0.03, Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)


@Rule "players are ready"
@Event global
if gameState == TELEPORTING_PLAYERS and len([player for player in getAllPlayers() if player.isReady]) >= 2:
    gameState = SPLEEF_IN_PROGRESS


@Rule "spleef winner"
@Event global
if gameState == SPLEEF_IN_PROGRESS and len([player for player in getAllPlayers() if player.isReady]) <= 1:
    wait(0.1)
    bigMessage(getAllPlayers(), "{} Winner!!!".format([player for player in getAllPlayers() if not player.isSpectator and player.isReady]))
    wait(8)
    gameState = SKIRMISH


@Rule "spleef begins"
@Event eachPlayer
if gameState == TELEPORTING_PLAYERS and not eventPlayer.isDummy():
    eventPlayer.resurrect()
    wait(0.2)
    eventPlayer.teleport(spleefSpawn)
    eventPlayer.setMaxHealth(10000)
    eventPlayer.startHoT(null, 9999, 9999)
    eventPlayer.setDamageDealt(1000)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 1)
    eventPlayer.setUltCharge(0)


@Rule "spleef is ready"
@Event global
if gameState == SPLEEF_READY and len([player for player in getAllPlayers() if player.hasSpawned()]) >= 6+2:
    bigMessage(getAllPlayers(), "Game Starting ...")
    smallMessage(getAllPlayers(), 5)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.AQUA, vect(0,94,150), 200)
    wait(1)
    smallMessage(getAllPlayers(), 4)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.AQUA, vect(0,94,150), 200)
    wait(1)
    smallMessage(getAllPlayers(), 3)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.AQUA, vect(0,94,150), 200)
    wait(1)
    smallMessage(getAllPlayers(), 2)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.AQUA, vect(0,94,150), 200)
    wait(1)
    smallMessage(getAllPlayers(), 1)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.AQUA, vect(0,94,150), 200)
    wait(1)
    gameState = TELEPORTING_PLAYERS


@Rule "player is ready"
@Event eachPlayer
if gameState == TELEPORTING_PLAYERS and not eventPlayer.isDummy() and eventPlayer.getPosition().y > 225 and not eventPlayer.isSpectator:
    wait(0.1)
    eventPlayer.isReady = true


@Rule "spleef begins 2"
@Event global
if gameState == TELEPORTING_PLAYERS:
    destroyAllHudTexts()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0, 225-198.5, 245), 200, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0+20, 225-198, 245), 200, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0-20, 225-198, 245), 200, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0, 225-198, 245+20), 200, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0+20, 225-198, 245+20), 200, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0-20, 225-198, 245+20), 200, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(0, 225-198, 245-20), 200, EffectReeval.VISIBILITY)



@Rule "Start building"
@Event global
if gameState == SKIRMISH:
    destroyAllEffects()
    wait(5)
    currentSpleefRow = 0
    isOn2ndColumn = false
    hudHeader(getAllPlayers(), "Building ... {}%".format(50*currentSpleefRow/MAX_SPLEEF_ROWS+50*isOn2ndColumn), Position.LEFT, 0, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(getAllPlayers(), "Players: {} / 2".format(len([player for player in getAllPlayers() if player.hasSpawned()])-6), Position.LEFT, 0, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    gameState = BUILDING_SPLEEF


@Rule "return to normal for skirmish"
@Event eachPlayer
if gameState == SKIRMISH and not eventPlayer.isDummy():
    eventPlayer.isReady = false
    eventPlayer.isSpectator = false
    eventPlayer.setInvisibility(Invis.NONE)
    if eventPlayer.getCurrentHero() == Hero.PHARAH:
        eventPlayer.startForcingHero(Hero.HANZO)
        eventPlayer.stopForcingCurrentHero()
    eventPlayer.setMaxHealth(100)
    eventPlayer.stopAllHoT()
    eventPlayer.setDamageDealt(100)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT) 
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.teleport(vect(0,94,150))
    stopAllDamageModifications()


@Rule "build spleef"
@Event global
if gameState == BUILDING_SPLEEF:
    do:
        startCloning = true
        wait(2.7) #total cloning time: 2.542
        currentSpleefRow++
        startCloning = false
        wait(0.016)
    while not (currentSpleefRow >= MAX_SPLEEF_ROWS and isOn2ndColumn)
    gameState = SPLEEF_READY

@Rule "2nd column"
@Event global
if currentSpleefRow >= MAX_SPLEEF_ROWS and not isOn2ndColumn:
    currentSpleefRow = 0
    isOn2ndColumn = true

@Rule "D.Va cloning"
@Event eachPlayer
if startCloning and eventPlayer.getCurrentHero() == Hero.DVA and eventPlayer.isDummy():
    eventPlayer.remechPosition = globalRemechPosition + vect(-dvaSpacing*(eventPlayer.getSlot()-6),0,0)
    eventPlayer.setFacing(vect(0,0,-1), Relativity.TO_WORLD)
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
    eventPlayer.teleport(spleefLocation+vect(-dvaSpacing*(eventPlayer.getSlot()-6+6*isOn2ndColumn), 10, -(MAX_SPLEEF_ROWS-currentSpleefRow)*dvaSpacing))
    wait(0.176)
    kill(eventPlayer, null)
    eventPlayer.resurrect()
    wait(0.35)
    eventPlayer.teleport(remechPosition)
