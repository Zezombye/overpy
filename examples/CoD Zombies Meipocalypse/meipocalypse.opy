
#!define DEBUG false

#!declareGlobal meicopter 0
#!declareGlobal meicopterTurrets 1
#!declareGlobal currentMeiType 2
#!declareGlobal gameStatus 3
#!declareGlobal rotation 4
#!declareGlobal currentZone 5
#!declareGlobal playerSpawns 6
#!declareGlobal currentMap 7
#!declareGlobal zoneZWalls 8
#!declareGlobal mapXLimits 9
#!declareGlobal redrawZWalls 10
#!declareGlobal zWallDrawIndex 11
#!declareGlobal mapYLimits 12
#!declareGlobal holdingRoom 13
#!declareGlobal meiSpawns 14
#!declareGlobal spawnInterval 15
#!declareGlobal nbMaxMeis 16
#!declareGlobal nbMeisFighting 17
#!declareGlobal barricade1 18
#!declareGlobal barricade1hp 19
#!declareGlobal barricade2 20
#!declareGlobal barricade2hp 21
#!declareGlobal barricade3 22
#!declareGlobal barricade3hp 23
#!declareGlobal barricade4 24
#!declareGlobal barricade4hp 25
#!declareGlobal barricade5 26
#!declareGlobal barricade5hp 27
#!declareGlobal barricade6 28
#!declareGlobal barricade6hp 29
#!declareGlobal cryoChance 30
#!declareGlobal zoneUnlockLocations 31
#!declareGlobal zoneMinScores 32
#!declareGlobal score 33
#!declareGlobal generateNewWave 34
#!declareGlobal currentWave 35
#!declareGlobal nbRemainingMeis 36
#!declareGlobal barricades 37
#!declareGlobal barricadesHp 38
#!declareGlobal playersMoney 39
#!declareGlobal playersUnlockedHeroes 40

#!declarePlayer isOob 0
#!declarePlayer meiType 1
#!declarePlayer icon 2
#!declarePlayer effect 3
#!declarePlayer noCrouchSpam 4
#!declarePlayer isFighting 5
#!declarePlayer blades 6
#!declarePlayer randomVar 7
#!declarePlayer isAvailable 8
#!declarePlayer hasReceivedHoT 9
#!declarePlayer isDeflecting 11

#Mei types

#!define MEI_NO_TYPE 0
#!define MEI_GENERIC 1
#!define MEI_TANK 2
#!define MEI_HEALER 3
#!define MEI_SPEEDY 4
#!define MEI_SNIPER 5
#!define MEI_ULT 6
#!define MEI_MEICOPTER 7
#!define MEI_MEICOPTER_TURRET 8
#!define MEI_SPEEDBOSS 9
#!define MEI_DEFLECT 10

#!define MEI_BASE_SPEED 100
#!define MEI_BASE_DMG 50
#!define MEI_BASE_HEALTH 100

#Round status

#!define GAME_NOT_STARTED 0
#!define GAME_IN_PROGRESS 1

#!define BARRICADE_HEALTH 200


#!define ROTATION_SPEED 29
#!define BLADE_LENGTH 2.5
#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

#!define generateWalls(map, walls) __script__("generateWalls.js")
#!define generateBarricadeRules() __script__("generateBarricadeRules.js")
#!define generateZoneVariables(zoneData) __script__("generateZoneVariables.js")
#!define generateMoneyRules() __script__("generateMoneyRules.js")
#!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if player.isAvailable][0]

@Rule "init"
@Event global

barricade1 = vect(0,-1000,0)
barricade2 = vect(0,-1000,0)
barricade3 = vect(0,-1000,0)
barricade4 = vect(0,-1000,0)
barricade5 = vect(0,-1000,0)
barricade6 = vect(0,-1000,0)
barricades = [barricade1, barricade2, barricade3, barricade4, barricade5, barricade6]
barricadesHp = [barricade1hp, barricade2hp, barricade3hp, barricade4hp, barricade5hp, barricade6hp]
createInWorldText(getAllPlayers(), "{}/{}".format(barricade1hp, BARRICADE_HEALTH), barricade1, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade2hp, BARRICADE_HEALTH), barricade2, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade3hp, BARRICADE_HEALTH), barricade3, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade4hp, BARRICADE_HEALTH), barricade4, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade5hp, BARRICADE_HEALTH), barricade5, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade6hp, BARRICADE_HEALTH), barricade6, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)

createInWorldText(getAllPlayers(), "Unlock next zone: {} score".format(score), zoneUnlockLocations[currentZone], 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "(Ctrl+F)".format(score), zoneUnlockLocations[currentZone]-vect(0,0.5,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA, SpecVisibility.ALWAYS)

hudText(getAllPlayers(), "{} meis remaining".format(nbRemainingMeis), "Wave {}".format(currentWave), "{} meis fighting".format(nbMeisFighting), Position.RIGHT, 0, Color.BLUE, Color.AQUA, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

gameStatus = GAME_IN_PROGRESS

@Rule "game not started"
@Event global
if gameStatus == GAME_NOT_STARTED:
    score = 0
    playersMoney = [0,0,0,0,0,0]
    playersUnlockedHeroes = [[],[],[],[],[],[]]

@Rule "new game"
@Event global
if gameStatus == GAME_IN_PROGRESS:
    currentMap = 0
    currentZone = 0
    currentWave = -1
    spawnInterval = 5
    nbMaxMeis = 12
    bigMessage(getAllPlayers(), "Game started")

@Rule "new wave"
@Event global
if nbRemainingMeis == 0 and GAME_IN_PROGRESS:
    generateNewWave = true

"""
@Rule "make sure the right spawn is selected"
@Event global
if hostPlayer.hasSpawned():
    wait(1)
    if (hostPlayer.getPosition().y < 0 or hostPlayer.getPosition().y > 40):
        hudHeader(getAllPlayers(), "Bad spawn, restart the game", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
"""


@Rule "tp player to current zone spawn"
@Event eachPlayer
@Team 1
if eventPlayer.hasSpawned() and eventPlayer.isAlive() and gameStatus == GAME_IN_PROGRESS:
    wait(0.1)
    eventPlayer.teleport(playerSpawns[currentZone])
    eventPlayer.setFacing(Vector.BACKWARD, Relativity.TO_WORLD)
    eventPlayer.stopAllHoT()
    wait(0.1)
    eventPlayer.startHoT(null, 9999, 10)

@Rule "map change"
@Event global
if currentMap == 0:
    holdingRoom = vect(-159.27, -96, 83.78)
else:
    holdingRoom = vect(-42.42,17.78, 93.67)

@Rule "mei first spawn"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned() and gameStatus == GAME_IN_PROGRESS:
    wait(0.1)
    kill(eventPlayer, null)

@Rule "mei tp to holding room"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned() and eventPlayer.isAlive() and gameStatus == GAME_IN_PROGRESS:
    wait(0.1)
    eventPlayer.teleport(holdingRoom)

@Rule "reset mei type on death"
@Event playerDied
@Team 2
if gameStatus == GAME_IN_PROGRESS:
    if victim.isFighting:
        nbRemainingMeis--
    wait(1)
    victim.respawn()
    wait(0.1)
    victim.teleport(holdingRoom)
    wait(0.2)
    #victim.setStatusEffect(null, Status.ROOTED, 9999)
    victim.meiType = MEI_NO_TYPE
    if victim.isFighting:
        nbMeisFighting--
    victim.isFighting = false
    victim.isAvailable = true


@Rule "mei fights"
@Event eachPlayer
@Team 2
if eventPlayer.isFighting:
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.teleport(random.choice(meiSpawns[currentZone]))
    eventPlayer.isAvailable = false
    nbMeisFighting++

@Rule "spawn meis"
@Event global
do:
    if nbMeisFighting < nbMaxMeis and nbMeisFighting < nbRemainingMeis:
        getFirstAvailableMei().isFighting = true
    if nbMeisFighting > 11:
        wait(spawnInterval)
    wait(0.016)
while true

@Rule "barricade enable"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT) and eventPlayer.isCrouching():
    if eventPlayer.getSlot() == 0:
        barricade1 = worldVector(vect(0,2,5.5), eventPlayer, Transform.ROTATION_AND_TRANSLATION)
        barricade1hp = BARRICADE_HEALTH
    elif eventPlayer.getSlot() == 1:
        barricade2 = worldVector(vect(0,2,5.5), eventPlayer, Transform.ROTATION_AND_TRANSLATION)
        barricade2hp = BARRICADE_HEALTH

#generateBarricadeRules()

@Rule "anti crash?"
@Event global
if getServerLoad() > 200:
    wait(1, Wait.ABORT_WHEN_FALSE)
    bigMessage(getAllPlayers(), "Anti-crash system activated")
    smallMessage(getAllPlayers(), "Stay away from Mei's freeze!")
    for player in getPlayers(Team.1):
        player.setStatusEffect(null, Status.PHASED_OUT, 0.5)
        player.setStatusEffect(null, Status.BURNING, 0.5)
    setSlowMotion(1)
    wait(0.5)
    setSlowMotion(100)

generateMoneyRules()

import "mei_types.opy"
import "zones.opy"
import "debug.opy"
import "waves.opy"