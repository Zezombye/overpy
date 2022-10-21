
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
#!define MAX_TEXTS 25

playervar dmgDealt = []
playervar textPos = []
playervar velocity = []
playervar angle = []
playervar xMultiplier = []
playervar timeOffsets = []
playervar colors = []
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
        createInWorldText(localPlayer if localPlayer.time - localPlayer.timeOffsets[evalOnce(I)] >= 0 and localPlayer.time - localPlayer.timeOffsets[evalOnce(I)] <= 0.7 else null, b" {} ".format(localPlayer.dmgDealt[evalOnce(I)]), updateEveryTick(localPlayer.textPos[evalOnce(I)] + vect(
            0,
            (localPlayer.velocity[evalOnce(I)] * (localPlayer.time - localPlayer.timeOffsets[evalOnce(I)]) * sinDeg(localPlayer.angle[evalOnce(I)]) - 0.5 * GRAVITY * (localPlayer.time - localPlayer.timeOffsets[evalOnce(I)]) * (localPlayer.time - localPlayer.timeOffsets[evalOnce(I)])) * distance(localPlayer.getEyePosition(), localPlayer.textPos[evalOnce(I)])/10,
            0
        ) + (
            worldVector(Vector.LEFT, localPlayer, Transform.ROTATION) * localPlayer.xMultiplier[evalOnce(I)] * localPlayer.velocity[evalOnce(I)] * (localPlayer.time - localPlayer.timeOffsets[evalOnce(I)]) * cosDeg(localPlayer.angle[evalOnce(I)]) * distance(localPlayer.getEyePosition(), localPlayer.textPos[evalOnce(I)])/10
        )), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, localPlayer.colors[evalOnce(I)], SpecVisibility.ALWAYS)

rule "hp":
    @Event eachPlayer
    wait(5)
    eventPlayer.startHoT(null, 9999, 9999)

rule "dmg":
    @Event playerDealtDamage
    @Team 1
    attacker.dmgDealt[attacker.textIndex] = eventDamage
    attacker.colors[attacker.textIndex] = rgb(255, max(255 - (256*2)*(eventDamage/victim.getMaxHealth()), 21), abs(255 - (256*4)*(eventDamage/victim.getMaxHealth())))
    attacker.textPos[attacker.textIndex] = victim.getEyePosition()
    attacker.velocity[attacker.textIndex] = random.uniform(9, 12)
    attacker.angle[attacker.textIndex] = random.uniform(50, 70)
    #attacker.direction[attacker.textIndex] = angleToDirection(random.uniform(0, 360), 0)
    attacker.xMultiplier[attacker.textIndex] = random.uniform(1, 0.5) * (-1 if random.randint(0,1) else 1)
    attacker.timeOffsets[attacker.textIndex] = attacker.time
    attacker.textIndex++
    attacker.textIndex %= MAX_TEXTS