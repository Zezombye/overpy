#!mainFile "tower_meifense.opy"

@Rule "display walls"
@Event global
generateBeams()

@Rule "check wall for pre-choke area"
@Event eachPlayer
@Team 1
if ENABLE_WALLS and eventPlayer.getPosition().z > -14 and crossProduct(
        vect(-1.84, 0, 23), 
        vect(eventPlayer.getPosition().x-30.61, 0, eventPlayer.getPosition().z+9.19)
).y >= -5:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(-1, 0, -0.08), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for way to 2nd point"
@Event eachPlayer
@Team 1
if ENABLE_WALLS and eventPlayer.getPosition().z < -24.26 and eventPlayer.getPosition().x > 9:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for stairs"
@Event eachPlayer
@Team 1
if ENABLE_WALLS and eventPlayer.getPosition().z < -23 and eventPlayer.getPosition().x > 27:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for way to flank"
@Event eachPlayer
@Team 1
if ENABLE_WALLS and eventPlayer.getPosition().z < -20 and eventPlayer.getPosition().x < -12:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for building"
@Event eachPlayer
@Team 1
if ENABLE_WALLS and eventPlayer.getPosition().z < -28:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "handle oob"
@Event eachPlayer
if eventPlayer.isOob:
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.016)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.startDoT(null, 9999, 300)

@Rule "back in bounds"
@Event eachPlayer
if not eventPlayer.isOob:
    eventPlayer.stopAllDoT()