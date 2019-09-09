#!define i I

@Rule "Set height of teleported mechs (gvar G). Set spacing (gvar F) and initial amount (gvar E) of D.va bots, create amount HUD text"
@Event global
G = 20
F = 1.5
E = 11
hudHeader(getAllPlayers(), "({})".format(E), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


@Rule "Crouch + Primary Fire: Edit amount (gvar E) of D.va bots"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and eventPlayer.isHoldingButton(Button.CROUCH) and eventPlayer == hostPlayer:
    E++
    E = E % 12
    if E != 0:
        goto lbl_0
    E = 1
    lbl_0:


@Rule "Crouch + Jump: Despawn all D.vas and spawn new D.vas"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.CROUCH) and eventPlayer.isHoldingButton(Button.JUMP) and eventPlayer == hostPlayer:
    destroyAllDummies()
    B = []
    i = 0


@Rule "Interact: Place D.vas in a line (ray cast) and set facing"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT) and eventPlayer == hostPlayer:
    do:
        for player in B[i]:
            player.teleport(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, include=getAllPlayers(), exclude=eventPlayer, includePlayerObjects=true).getHitPosition() + (vectorTowards(eventPlayer.getPosition(), eventPlayer.getPosition() + worldVector(vect(F, 0, 0), eventPlayer, Transform.ROTATION))) * (0.25 + i))
        for player in B[i]:
            player.setFacing(eventPlayer.getFacingDirection(), Relativity.TO_WORLD)
        wait(0.016)
        for player in B[i]:
            player.B = [player2.getPosition() for player2 in B[i]] + worldVector(vect(0, G, 0), B[i], Transform.ROTATION)
        for player in B[i]:
            player.A = 0
        i++
    while i < E
    i = 0


@Rule "Hold Secondary Fire + Jump: D.va cloning, let go to stop cloning"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and eventPlayer.isHoldingButton(Button.JUMP) and eventPlayer == hostPlayer:
    do:
        Z = true
        wait(1)
    while RULE_CONDITION
    Z = false


@Rule "l------------------------------------------------------------------------------------------------------------------------------l"
@Event global


@Rule "Teleport D.vas back, save positions before cloning"
@Event eachPlayer
if Z and eventPlayer.i < E and eventPlayer.getCurrentHero() == Hero.DVA and eventPlayer.isDummy():
    if eventPlayer.A != 0:
        goto lbl_0
    eventPlayer.teleport(worldVector(vect(0, 0, -7), eventPlayer, Transform.ROTATION_AND_TRANSLATION))
    wait(0.016)
    eventPlayer.A = eventPlayer.getPosition() + worldVector(vect(0, eventPlayer.getAltitude() * -1, 0), eventPlayer, Transform.ROTATION)
    lbl_0:


@Rule "D.Va cloning"
@Event eachPlayer
if Z and eventPlayer.i < E and eventPlayer.getCurrentHero() == Hero.DVA and eventPlayer.isDummy():
    do:
        wait(0.032)
        eventPlayer.teleport(eventPlayer.A)
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(1.936)
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.016)
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.032)
        eventPlayer.teleport(eventPlayer.B)
        wait(0.176)
        kill(eventPlayer, null)
        eventPlayer.resurrect()
        wait(0.35)
    while RULE_CONDITION
    eventPlayer.teleport(eventPlayer.A)


@Rule "Spawn new D.vas after Crouch + Jump"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.CROUCH) and eventPlayer.isHoldingButton(Button.JUMP) and eventPlayer == hostPlayer:
    do:
        wait(0.032)
        createDummy(Hero.DVA, Team.ALL, i, vect(0, 1000, 0), eventPlayer.getFacingDirection())
        B[i] = getLastCreatedEntity()
        for player in B[i]:
            player.i = i
        i++
    while i < E
    i = 0


@Rule "Set D.va damage done to 0%"
@Event eachPlayer
if eventPlayer.isDummy() and eventPlayer.getCurrentHero() == Hero.DVA:
    eventPlayer.setDamageDealt(0)


@Rule "Permanent 100% ult charge"
@Event eachPlayer
if eventPlayer.getUltCharge() < 100 and eventPlayer.getCurrentHero() != Hero.JUNKRAT:
    do:
        eventPlayer.setUltCharge(100)
        wait(1)
    while RULE_CONDITION


@Rule "By ScroogeD#2849 (EU)"
@Event global


