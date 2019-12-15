#!define dummies B

#!define buttonRules(button) @Rule "start"\
@Event eachPlayer\
if hostPlayer.isHoldingButton(button) and not hostPlayer.isDummy():\
    dummies.setUltCharge(100)\
    dummies.startForcingButton(button)\
@Rule "stop"\
@Event eachPlayer\
if not hostPlayer.isHoldingButton(button) and not hostPlayer.isDummy():\
    dummies.stopForcingButton(button)

@Rule "spawn dummies"
@Event global
if hostPlayer.isHoldingButton(Button.INTERACT):
    destroyAllDummies()
    createDummy(hostPlayer.getCurrentHero(), getOppositeTeam(hostPlayer.getTeam()), -1, hostPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))
    #createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0,0,0))

    wait(0.1)
    dummies = getLastCreatedEntity()
    dummies.startThrottleInDirection(Vector.FORWARD, 0.5, Relativity.TO_PLAYER, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)

buttonRules(Button.PRIMARY_FIRE)
buttonRules(Button.SECONDARY_FIRE)
buttonRules(Button.ABILITY_1)
buttonRules(Button.ABILITY_2)
buttonRules(Button.ULTIMATE)
buttonRules(Button.CROUCH)
buttonRules(Button.JUMP)

@Rule "emote"
@Event global
if hostPlayer.isCommunicatingEmote():
    dummies.communicate(Comms.EMOTE_UP)
