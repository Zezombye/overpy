globalvar dummy

@Rule "test"
@Event global
if hostPlayer.isHoldingButton(Button.INTERACT):
    createDummy(Hero.BRIGITTE, Team.2, -1, hostPlayer.getPosition()+vect(0,1,0), Vector.UP)
    dummy = getLastCreatedEntity()
    dummy.setGravity(0)
    dummy.applyImpulse(Vector.BACKWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    dummy.applyImpulse(Vector.FORWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    dummy.applyImpulse(Vector.LEFT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    dummy.applyImpulse(Vector.RIGHT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    dummy.applyImpulse(Vector.UP, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    dummy.applyImpulse(Vector.DOWN, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "qsdf"
@Event global
if hostPlayer.isHoldingButton(Button.PRIMARY_FIRE):
    dummy.setStatusEffect(null, Status.ASLEEP, 9999)

@Rule "qsdf"
@Event global
if hostPlayer.isHoldingButton(Button.ULTIMATE):
    dummy.setFacing(directionTowards(dummy.getEyePosition(), hostPlayer.getEyePosition()), Relativity.TO_WORLD)