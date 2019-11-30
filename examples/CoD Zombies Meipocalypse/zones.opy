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

generateZoneVariables([{
    playerSpawn: vect(-42.63, 17.03, 83.12),
    spawnInterval: 5,
    zWallPos: 55,
    meiSpawns: [
        vect(-22.44, 28, 51.66),
        vect(-45.60, 11, 48.22),
        vect(-63, 11, 32.17),
        vect(-24, 16, 40),
        vect(-25.85, 10.12, 29.81),
        vect(-60, 9.8, 23.48),
    ],
    unlockLocation: vect(-57.10, 18, 56.74),
    scoreNeeded: 1000,
}])

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
redrawZWalls = true


@Rule "new zone unlocked"
@Event eachPlayer
@Team 1
if eventPlayer.isHoldingButton(Button.INTERACT) and not eventPlayer.isCrouching() and distance(eventPlayer.getPosition(), zoneUnlockLocations[currentZone]) < 5 and score >= zoneMinScores[currentZone]:
    currentZone++
    redrawZWalls = true
    bigMessage(getAllPlayers(), "{} unlocked next zone".format(eventPlayer))

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

@Rule "init zwall vars and recreate effects"
@Event global
if redrawZWalls:
    zWallDrawIndex = mapYLimits[currentMap*2]
    destroyAllEffects()
    #create barricade effects
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, barricade1, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, barricade2, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, barricade3, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, barricade4, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, barricade5, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, barricade6, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    
@Rule "display zone z wall"
@Event global
if redrawZWalls:
    do:
        wait(0.032)
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(mapXLimits[currentMap*2], zWallDrawIndex, zoneZWalls[currentZone+2]), vect(mapXLimits[currentMap*2+1], zWallDrawIndex, zoneZWalls[currentZone+2]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(mapXLimits[currentMap*2], zWallDrawIndex, zoneZWalls[currentZone]), vect(mapXLimits[currentMap*2+1], zWallDrawIndex, zoneZWalls[currentZone]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        zWallDrawIndex++
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
