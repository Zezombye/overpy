
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
#!declareGlobal zoneSpawnIntervals 15
#!declareGlobal zoneMaxMeis 16
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

#!define MEI_BASE_SPEED 100
#!define MEI_BASE_DMG 50
#!define MEI_BASE_HEALTH 100

#Round status

#!define GAME_NOT_STARTED 0
#!define POINT_A_DEFENSE 1
#!define POINT_B_DEFENSE 2

#!define BARRICADE_HEALTH 200


#!define ROTATION_SPEED 29
#!define BLADE_LENGTH 2.5
#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

#!define generateWalls(map, walls) __script__("generateWalls.js")
#!define generateBarricadeRules() __script__("generateBarricadeRules.js")
#!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if player.isAvailable][0]

@Rule "init"
@Event global
currentMap = 0
currentZone = 0
barricade1 = vect(0,-1000,0)
barricade2 = vect(0,-1000,0)
createEffect(getAllPlayers(), Effect.SPHERE, Color.AQUA, barricade1, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
createEffect(getAllPlayers(), Effect.SPHERE, Color.AQUA, barricade2, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade1hp, BARRICADE_HEALTH), barricade1, 3, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.LIME_GREEN, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade2hp, BARRICADE_HEALTH), barricade2, 3, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.LIME_GREEN, SpecVisibility.ALWAYS)

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
if eventPlayer.hasSpawned() and eventPlayer.isAlive():
    wait(0.1)
    eventPlayer.teleport(playerSpawns[currentZone])
    eventPlayer.setFacing(Vector.BACKWARD, Relativity.TO_WORLD)
    eventPlayer.stopAllHoT()
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
if eventPlayer.hasSpawned():
    wait(0.1)
    kill(eventPlayer, null)

@Rule "mei tp to holding room"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned() and eventPlayer.isAlive():
    wait(0.1)
    eventPlayer.teleport(holdingRoom)

@Rule "declare mei spawns"
@Event global
meiSpawns[0] = [
    vect(-22.44, 28, 51.66),
    vect(-45.60, 11, 48.22),
    vect(-63, 11, 32.17),
    vect(-24, 16, 40),
    vect(-25.85, 10.12, 29.81),
    vect(-60, 9.8, 23.48),
]

@Rule "reset mei type on death"
@Event playerDied
@Team 2
wait(1)
victim.respawn()
wait(0.1)
victim.teleport(holdingRoom)
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
    if nbMeisFighting < zoneMaxMeis[currentZone]:
        getFirstAvailableMei().isFighting = true
    wait(zoneSpawnIntervals[currentZone])
while true

@Rule "barricade enable"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    if eventPlayer.getSlot() == 0:
        barricade1 = worldVector(vect(0,2,5.5), eventPlayer, Transform.ROTATION_AND_TRANSLATION)
        barricade1hp = BARRICADE_HEALTH
    elif eventPlayer.getSlot() == 1:
        barricade2 = worldVector(vect(0,2,5.5), eventPlayer, Transform.ROTATION_AND_TRANSLATION)
        barricade2hp = BARRICADE_HEALTH

generateBarricadeRules()

import "mei_types.opy"
import "zones.opy"
import "debug.opy"