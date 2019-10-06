
@Rule "Rule 1"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
	destroyAllDummies()
	wait(3)
    createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0, 0, 0))
    eventPlayer.A = getLastCreatedEntity()
    getLastCreatedEntity().startFacing(eventPlayer.getFacingDirection(), 10000, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    getLastCreatedEntity().setStatusEffect(null, Status.PHASED_OUT, 9999)
    getLastCreatedEntity().setInvisibility(Invis.ALL)
	wait(0.016)
	
	createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0, 0, 0))
    eventPlayer.B = getLastCreatedEntity()
    getLastCreatedEntity().startFacing(eventPlayer.getFacingDirection(), 10000, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    getLastCreatedEntity().setStatusEffect(null, Status.PHASED_OUT, 9999)
    getLastCreatedEntity().setInvisibility(Invis.ALL)
	wait(0.016)
	
	createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0, 0, 0))
    eventPlayer.C = getLastCreatedEntity()
    getLastCreatedEntity().startFacing(eventPlayer.getFacingDirection(), 10000, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    getLastCreatedEntity().setStatusEffect(null, Status.PHASED_OUT, 9999)
    getLastCreatedEntity().setInvisibility(Invis.ALL)
	wait(0.016)
	
	createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0, 0, 0))
    eventPlayer.D = getLastCreatedEntity()
    getLastCreatedEntity().startFacing(eventPlayer.getFacingDirection(), 10000, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    getLastCreatedEntity().setStatusEffect(null, Status.PHASED_OUT, 9999)
    getLastCreatedEntity().setInvisibility(Invis.ALL)
	wait(0.016)
	
	createDummy(eventPlayer.getCurrentHero(), eventPlayer.getTeam(), -1, eventPlayer.getPosition(), vect(0, 0, 0))
    eventPlayer.E = getLastCreatedEntity()
    getLastCreatedEntity().startFacing(eventPlayer.getFacingDirection(), 10000, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    getLastCreatedEntity().setStatusEffect(null, Status.PHASED_OUT, 9999)
    getLastCreatedEntity().setInvisibility(Invis.ALL)
	
	


@Rule "Rule 2"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ULTIMATE) and not eventPlayer.isDummy():
	do:
		eventPlayer.setUltCharge(100)
		eventPlayer.A.setUltCharge(100)
		eventPlayer.A.forceButtonPress(Button.ULTIMATE)
		wait(0.1)
		eventPlayer.B.setUltCharge(100)
		eventPlayer.B.forceButtonPress(Button.ULTIMATE)
		wait(0.1)
		eventPlayer.C.setUltCharge(100)
		eventPlayer.C.forceButtonPress(Button.ULTIMATE)
		wait(0.1)
		eventPlayer.D.setUltCharge(100)
		eventPlayer.D.forceButtonPress(Button.ULTIMATE)
		wait(0.1)
		eventPlayer.E.setUltCharge(100)
		eventPlayer.E.forceButtonPress(Button.ULTIMATE)
		wait(0.1)
	while true
	


@Rule "Rule 3"
@Event eachPlayer
do:
	eventPlayer.A.teleport(eventPlayer.getPosition())
	eventPlayer.B.teleport(eventPlayer.getPosition())
	eventPlayer.C.teleport(eventPlayer.getPosition())
	eventPlayer.D.teleport(eventPlayer.getPosition())
	eventPlayer.E.teleport(eventPlayer.getPosition())
	wait(0.016)
while RULE_CONDITION


