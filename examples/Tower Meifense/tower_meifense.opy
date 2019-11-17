#!define ENABLE_WALLS true

#Global variables

#!define debugSphereLocation A
#!define spheres B
#!define meicopter C
#!define meicopterTurrets D
#!define currentMeiType E
#!define spawnA1 F
#!define spawnA2 G
#!define spawnA3 H
#!define gameStatus R
#!define rotation S

#!declareGlobal test 100
#!declarePlayer owo 100

#Player variables

#!defineMember isOob A
#!defineMember meiType B
#!defineMember icon C
#!defineMember effect D
#!defineMember noCrouchSpam E
#!defineMember isFighting F
#!defineMember blades G



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

#!define MEI_BASE_SPEED 65
#!define MEI_BASE_DMG 500
#!define MEI_BASE_HEALTH 100

#Round status

#!define GAME_NOT_STARTED 0
#!define POINT_A_DEFENSE 1
#!define POINT_B_DEFENSE 2

#Spawnpoints
#!define holdingRoom vect(82.65, 2, -30)
#!define pointADefSpawn vect(23, 6.5, -17)

#Point A spawns

#Difficulty: 1
#!define spawnA11 vect(67.8, -1, -1)
#!define spawnA12 vect(62.2, -1, 23.8)
#!define spawnA13 vect(25.77, -1, -69.6)
#!define spawnA14 vect(-0.3, 1, -75)

#Difficulty: 2
#!define spawnA21 vect(63.8, -1, -8.6)
#!define spawnA22 vect(62.5, 6.5, -7.2)
#!define spawnA23 vect(30, 3.5, 26.4)
#!define spawnA24 vect(40.7, 1, 25.8)
#!define spawnA25 vect(37.7, -1, -38.6)
#!define spawnA26 vect(21.8, 4, -83.3)

#Difficulty: 3
#!define spawnA31 vect(48.11, 2.5, -26.13)
#!define spawnA32 vect(48.95, 5, -19.37)
#!define spawnA33 vect(48.7, 6.5, 0.8)
#!define spawnA34 vect(43.7, 1.5, -3.6)
#!define spawnA35 vect(-2, -1, -41.7)
#!define spawnA36 vect(-7.3, 5, -43)
#!define spawnA37 vect(-16.56, -2, -55.39)

#!define ROTATION_SPEED 29
#!define BLADE_LENGTH 2.5
#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

#!define generateBeams() __script__("generatewallbeams.js")

#!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if not player.isFighting][0]

#!define spawnMei(type, location) \
getFirstAvailableMei().meiType = type\
wait(0.1)\
getFirstAvailableMei().teleport(location)\
getFirstAvailableMei().isFighting = true

@Rule "init variables"
@Event global
spawnA1 = [spawnA11, spawnA12, spawnA13, spawnA14]
spawnA2 = [spawnA21, spawnA22, spawnA23, spawnA24, spawnA25, spawnA26]
spawnA3 = [spawnA31, spawnA32, spawnA33, spawnA34, spawnA35, spawnA36, spawnA37]
disableGamemodeCompletion()
disableScoring()
bigMessage(getAllPlayers(), w"owoé")

@Rule "skip assembling heroes"
@Event global
if isAssemblingHeroes():
    gameStatus = GAME_NOT_STARTED
    setMatchTime(5)

@Rule "skip preparation"
@Event global
if isInSetup():
    setMatchTime(1)

@Rule "start game"
@Event global
if isGameInProgress():
    meicopter = null
    gameStatus = POINT_A_DEFENSE

@Rule "mei first spawn"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned():
    wait(0.1)
    kill(eventPlayer, null)

"""@Rule "detect idle meis"
@Event eachPlayer
@Team 2
if eventPlayer.meiType != MEI_NO_TYPE and not eventPlayer.isOnObjective():
    wait(60, Wait.ABORT_WHEN_FALSE)
    kill(eventPlayer, null)"""

@Rule "reset mei type on death"
@Event playerDied
@Team 2
wait(1)
victim.respawn()
wait(0.1)
victim.teleport(holdingRoom)
#victim.setStatusEffect(null, Status.ROOTED, 9999)
victim.meiType = MEI_NO_TYPE
victim.isFighting = false

@Rule "mei fights"
@Event eachPlayer
@Team 2
if eventPlayer.isFighting:
    eventPlayer.clearStatusEffect(Status.ROOTED)

import "mei_types.opy"
import "debug.opy"
import "walls.opy"
import "fight.opy"

@Rule "tp to objective"
@Event eachPlayer
@Team 1
if eventPlayer.hasSpawned() and eventPlayer.isAlive():
    wait(0.1)
    eventPlayer.teleport(pointADefSpawn)
    eventPlayer.startHoT(null, 1, 9999)

@Rule "jumppad flank"
@Event eachPlayer
@Team 2
if distance(eventPlayer.getPosition(), vect(-26.32, 0.63, -52.30)) < 1.5:
    eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), vect(-14.5, 10, -22.18)), 50, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
