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
    zWallPos: 55,
    meiSpawns: [
        vect(-22.44, 28, 51.66),
        vect(-45.60, 11, 48.22),
        vect(-63, 11, 32.17),
        vect(-24, 16, 40),
        vect(-25.85, 10.12, 29.81),
        vect(-60, 9.8, 23.48),
    ],
    unlockLocation: vect(-57.10, 16.2, 56.74),
    unlockMoney: 500,
},{
    playerSpawn: vect(-48.86, 19, 51.64),
    zWallPos: 31.70,
    meiSpawns: [
        vect(-73.12, 13, 35.11),
        vect(-62.77, 11, 23.61),
        vect(-36.64, 12, 24.08),
        vect(-30.21, 14, 5.5),
        vect(-32.55, 10, 21.57),
        vect(-27.81, 17, 21.85),
    ],
    unlockLocation: vect(-53.81, 10.87, 36.71),
    unlockMoney: 700,
},{
    playerSpawn: vect(-50, 13, 8),
    zWallPos: -33.75,
    meiSpawns: [
        vect(-49.65, 17.78, 88.71),
        vect(-30, 20.83, 92.40),
        vect(-18.45, 22, 76.04),
        vect(-18.45, 22, 58.54),
        vect(-45.42, 15, 58.30),
        vect(-32.51, 11.03, -37.14),
        vect(-45.35, 11, -47.91),
        vect(-72.49, 11.14, -44.69),
        vect(-24.14, 22, -52.35),
        vect(-30.87, 16, -34.75),
        vect(-50, 33, 0),
    ],
    unlockLocation: vect(-50, 10, -30.27),
    unlockMoney: 2000,
},{
    playerSpawn: vect(-50, 9.8, -24.58),
    zWallPos: -54,
    meiSpawns: [
        vect(-30.78, 16, 35.8),
        vect(-39.06, 10.88, 36.63),
        vect(-43.67, 11, 47.92),
        vect(-72.69, 11.17, 43.94),
        vect(-23.53, 22, 54.62),
        vect(-77.88, 15.10, -56.31),
        vect(-17.93, 22.13, -58.39),
        vect(-27.44, 15.04, -73.71),
        vect(-45.22, 15, -57.78),
        vect(-50, 33, 0),
        vect(-50, 33, 0),
    ],
    unlockLocation: vect(-22.14, 22, -51.24),
    unlockMoney: 1500,
},{
    playerSpawn: vect(-42.92, 15, -70.83),
    zWallPos: -85,
    meiSpawns: [
        vect(-39.54, 10.11, -29.92),
        vect(-60.34, 9.87, -24.12),
        vect(-27.47, 17, -22.83),
        vect(-72.87, 12, -35.5),
        vect(-50, 19, -28.58),
        vect(-22.89, 28.5, -39.67),
    ],
    unlockLocation: vect(-42.72, 16.67, -82.21),
    unlockMoney: 999999,
}])

mapXLimits = [
    -100, -16,
    -223, -140,
    43, 115
]

mapYLimits = [
    7.5, 30,
    -103,-80,
    125, 140,
]

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
if generateNewZone:
    zWallDrawIndex = mapYLimits[currentMap*2]
    costs[ZONE_UNLOCK_INDEX] = zonesUnlockMoney[currentZone]
    unlockLocations[ZONE_UNLOCK_INDEX] = zonesUnlockLocation[currentZone]
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
if generateNewZone:
    do:
        wait(0.032)
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(mapXLimits[currentMap*2], zWallDrawIndex, zoneZWalls[currentZone+2]), vect(mapXLimits[currentMap*2+1], zWallDrawIndex, zoneZWalls[currentZone+2]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.GRAPPLE, vect(mapXLimits[currentMap*2], zWallDrawIndex, zoneZWalls[currentZone]), vect(mapXLimits[currentMap*2+1], zWallDrawIndex, zoneZWalls[currentZone]+0.01), Color.WHITE, EffectReeval.VISIBILITY)
        zWallDrawIndex++
    while zWallDrawIndex < mapYLimits[currentMap*2+1]
    zWallDrawIndex = 0
    generateNewZone = false

@Rule "prevent access to next zone"
@Event eachPlayer
@Team 1
if not DEBUG and gameStatus == GAME_IN_PROGRESS and eventPlayer.isAlive() and not eventPlayer.isInShop and eventPlayer.getPosition().z < zoneZWalls[currentZone+2]+1:
    do:
        eventPlayer.setStatusEffect(null, Status.ROOTED, 0.032)
        eventPlayer.applyImpulse(Vector.FORWARD, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.isOob = true
        wait(0.016)
    while RULE_CONDITION


@Rule "prevent access to previous zones"
@Event eachPlayer
@Team 1
if not DEBUG and gameStatus == GAME_IN_PROGRESS and eventPlayer.isAlive() and not eventPlayer.isInShop and eventPlayer.getPosition().z > zoneZWalls[currentZone]-1:
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
if eventPlayer.isOob:
    wait(3, Wait.ABORT_WHEN_FALSE)
    bigMessage(eventPlayer, "Out of bounds")
    eventPlayer.teleport(playerSpawns[currentZone])
    eventPlayer.setStatusEffect(null, Status.FROZEN, 1)
