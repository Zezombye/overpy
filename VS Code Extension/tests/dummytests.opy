#!define dummies B

@Rule "spawn dummies"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    destroyAllDummies()
    createDummy(eventPlayer.getCurrentHero(), getOppositeTeam(eventPlayer.getTeam()), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))

    wait(0.1)
    dummies = getLastCreatedEntity()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, dummies.getEyePosition(), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    #dummies.startFacing(eventPlayer.getFacingDirection(), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)

    dummies.setInvisibility(Invis.ALL)

@Rule "primary fire start"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and not eventPlayer.isDummy():
    dummies.startForcingButton(Button.PRIMARY_FIRE)

@Rule "primary fire stop"
@Event eachPlayer
if not eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and not eventPlayer.isDummy():
    dummies.stopForcingButton(Button.PRIMARY_FIRE)

@Rule "secondary fire start"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and not eventPlayer.isDummy():
    dummies.startForcingButton(Button.SECONDARY_FIRE)

@Rule "secondary fire stop"
@Event eachPlayer
if not eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and not eventPlayer.isDummy():
    dummies.stopForcingButton(Button.SECONDARY_FIRE)

@Rule "ability 1"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ABILITY_1) and not eventPlayer.isDummy():
    dummies.forceButtonPress(Button.ABILITY_1)

@Rule "ability 2"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ABILITY_2) and not eventPlayer.isDummy():
    do:
        dummies.setStatusEffect(null, Status.STUNNED, 0.016)
        dummies.forceButtonPress(Button.ABILITY_2)
        wait(1)
    while true

@Rule "ult"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ULTIMATE) and not eventPlayer.isDummy():
    dummies.setUltCharge(100)
    wait(0.016)
    dummies.forceButtonPress(Button.ULTIMATE)
    wait(0.6)
    dummies.teleport(vect(1000,1000,1000))
