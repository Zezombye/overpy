#!mainFile "meipocalypse.opy"

generateWalls(0, [
{
    minZone: 9,
    maxZone: 9,
    axis: "z",
    value: -85.65,
    block: "down",
    start: -48,
    end: -37,
},{
    minZone: 9,
    maxZone: 9,
    axis: "z",
    value: -90.5,
    block: "down",
    start: -29,
    end: -23,
}
])

@Rule "define zone variables"
@Event global
playerSpawns = [
    vect(-42.63, 17.03, 83.12),
]

zoneMaxMeis = [
    24,
]

zoneSpawnIntervals = [
    5,
]

zoneZWalls = [
    1000,
    1000,
    55,
    32,
]

mapXLimits = [
    -87, -16,
    -223, -140,
    43, 115
]

mapYLimits = [
    9, 30,
    -100,-80,
    125, 140,
]

@Rule "new zone unlocked"
@Event global
zWallDrawIndex = mapYLimits[currentMap*2]
redrawZWalls = true

"""
@Rule "display zone z wall"
@Event global
if redrawZWalls:
    do:
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(zWallDrawIndex, mapYLimits[currentMap*2], zoneZWalls[currentZone+2]), vect(zWallDrawIndex, mapYLimits[currentMap*2+1], zoneZWalls[currentZone+2]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(zWallDrawIndex, mapYLimits[currentMap*2], zoneZWalls[currentZone]), vect(zWallDrawIndex, mapYLimits[currentMap*2+1], zoneZWalls[currentZone]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        zWallDrawIndex++
        wait(0.016)
    while zWallDrawIndex < mapXLimits[currentMap*2+1]
    zWallDrawIndex = 0
    redrawZWalls = false
"""
    
@Rule "display zone z wall"
@Event global
if redrawZWalls:
    do:
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(mapXLimits[currentMap*2], zWallDrawIndex, zoneZWalls[currentZone+2]), vect(mapXLimits[currentMap*2+1], zWallDrawIndex, zoneZWalls[currentZone+2]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(mapXLimits[currentMap*2], zWallDrawIndex, zoneZWalls[currentZone]), vect(mapXLimits[currentMap*2+1], zWallDrawIndex, zoneZWalls[currentZone]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        zWallDrawIndex++
        wait(0.016)
    while zWallDrawIndex < mapYLimits[currentMap*2+1]
    zWallDrawIndex = 0
    redrawZWalls = false

@Rule "prevent access to next zone"
@Event eachPlayer
@Team 1
if not DEBUG and eventPlayer.getPosition().z < zoneZWalls[currentZone+2]+1:
    do:
        eventPlayer.setStatusEffect(null, Status.ROOTED, 0.032)
        eventPlayer.applyImpulse(Vector.FORWARD, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.isOob = true
        wait(0.016)
    while RULE_CONDITION



@Rule "prevent access to previous zones"
@Event eachPlayer
@Team 1
if not DEBUG and eventPlayer.getPosition().z > zoneZWalls[currentZone]-1:
    do:
        eventPlayer.setStatusEffect(null, Status.ROOTED, 0.032)
        eventPlayer.applyImpulse(Vector.BACKWARD, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.isOob = true
        wait(0.016)
    while RULE_CONDITION


@Rule "back in bounds"
@Event eachPlayer
@Team 1
if eventPlayer.getPosition().z < zoneZWalls[currentZone]-1 and eventPlayer.getPosition().z > zoneZWalls[currentZone+2]+1:
    eventPlayer.isOob = false
    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.isOob = false

@Rule "out of bounds"
@Event eachPlayer
@Team 1
if eventPlayer.isOob and eventPlayer.isAlive():
    wait(3, Wait.ABORT_WHEN_FALSE)
    bigMessage(eventPlayer, "Out of bounds")
    eventPlayer.teleport(playerSpawns[currentZone])
    eventPlayer.setStatusEffect(null, Status.FROZEN, 1)

@Rule "zone 0 meis"
@Event eachPlayer
@Team 2
if currentZone == 0 and eventPlayer.isFighting == true:
    eventPlayer.randomVar = random.randint(1, 100)
    if eventPlayer.randomVar <= 80:
        eventPlayer.meiType = MEI_GENERIC
    elif eventPlayer.randomVar <= 85:
        eventPlayer.meiType = MEI_HEALER
    elif eventPlayer.randomVar <= 90:
        eventPlayer.meiType = MEI_SPEEDY
    elif eventPlayer.randomVar <= 95:
        eventPlayer.meiType = MEI_SNIPER
    else:
        eventPlayer.meiType = MEI_TANK