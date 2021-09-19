
#Display parabola damage indicators.

settings {
    "main": {
        "description": "Some awesome game mode"
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopIsland"
            ]
        },
        "general": {
            "heroLimit": "off",
            "respawnTime%": 30
        }
    }
}

#!define GRAVITY 30
#!define MAX_TEXTS 30

playervar dmgDealt = []
playervar textPos = []
playervar velocity = []
playervar angle = []
playervar direction = []
playervar timeOffsets = []
playervar textIndex = 0
playervar time

rule "dummy":
    createDummy(Hero.TORBJORN, Team.2, -1, null, null)
    print("load: {}, avg: {}, max: {}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()))

rule "text":
    @Event eachPlayer
    @Condition eventPlayer == hostPlayer
    @Condition eventPlayer.hasSpawned()
    wait(1)
    chase(hostPlayer.time, 9999, rate=1, ChaseReeval.NONE)

    for I in range(MAX_TEXTS):
        createInWorldText(localPlayer if hostPlayer.time - hostPlayer.timeOffsets[evalOnce(I)] >= 0 and hostPlayer.time - hostPlayer.timeOffsets[evalOnce(I)] <= 2 else null, hostPlayer.dmgDealt[evalOnce(I)], hostPlayer.textPos[evalOnce(I)] + vect(
            0,
            hostPlayer.velocity[evalOnce(I)] * (hostPlayer.time - hostPlayer.timeOffsets[evalOnce(I)]) * sinDeg(hostPlayer.angle[evalOnce(I)]) - 0.5 * GRAVITY * (hostPlayer.time - hostPlayer.timeOffsets[evalOnce(I)]) * (hostPlayer.time - hostPlayer.timeOffsets[evalOnce(I)]),
            0
        ) + (
            hostPlayer.direction[evalOnce(I)] * hostPlayer.velocity[evalOnce(I)] * (hostPlayer.time - hostPlayer.timeOffsets[evalOnce(I)]) * cosDeg(hostPlayer.angle[evalOnce(I)])
        ), 3, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, Color.WHITE, SpecVisibility.ALWAYS)

rule "hp":
    @Event eachPlayer
    wait(5)
    eventPlayer.startHoT(null, 9999, 9999)

rule "dmg":
    @Event playerDealtDamage
    @Team 1
    hostPlayer.dmgDealt[hostPlayer.textIndex] = eventDamage

    hostPlayer.textPos[hostPlayer.textIndex] = victim.getEyePosition()
    hostPlayer.velocity[hostPlayer.textIndex] = random.uniform(9, 12)
    hostPlayer.angle[hostPlayer.textIndex] = random.uniform(50, 70)
    hostPlayer.direction[hostPlayer.textIndex] = angleToDirection(random.uniform(0, 360), 0)
    hostPlayer.timeOffsets[hostPlayer.textIndex] = hostPlayer.time
    hostPlayer.textIndex++
    hostPlayer.textIndex %= MAX_TEXTS