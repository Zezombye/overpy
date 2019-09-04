#!define BLADE_LENGTH 2.5
#!define heliPlayer A
#!define heliTurret2 D
#!define heliTurret3 E
#!define heliTurret4 F
#!define heliTurret5 G
#!define heliTurret B
#!define heliMinesDispenser C

#!define corner1 vect(227, 58, -64)
#!define corner2 vect(172, 58, -63)
#!define corner3 vect(195, 58, -16)
#!define corner4 vect(227, 58, -16)
#!define corners Y

#!define rotation Z
#!define ROTATION_SPEED 29

#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, Reeval.VISIBILITY_POSITION_AND_RADIUS)

@Rule "tp to arena"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.CROUCH):
    eventPlayer.teleport(vect(214.339, 28.849, -36.157))

"""@Rule "owo"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0,0,5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))"""

@Rule "create bots"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    destroyAllDummies()
    wait(0.1)

    createDummy(Hero.ZENYATTA, Team.2, -1, eventPlayer.getPosition(), vect(0, 0, 0))
    heliPlayer = getLastCreatedEntity()
    wait(0.1)


    createDummy(Hero.HAMMOND, Team.2, -1, eventPlayer.getPosition(), vect(0,0,0))
    heliMinesDispenser = getLastCreatedEntity()
    heliMinesDispenser.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliMinesDispenser.setInvisibility(Invis.ALL)
    wait(0.1)

    createDummy(Hero.DOOMFIST, Team.2, -1, eventPlayer.getPosition(), vect(0,0,0))
    heliTurret = getLastCreatedEntity()
    heliTurret.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliTurret.setInvisibility(Invis.ALL)
    heliTurret.startFacing(directionTowards(heliTurret.getEyePosition(), eventPlayer.getEyePosition()), 100, Relativity.TO_WORLD, Reeval.DIRECTION_AND_TURN_RATE)
    wait(0.1)
    
    createDummy(Hero.DOOMFIST, Team.2, -1, eventPlayer.getPosition(), vect(0,0,0))
    heliTurret2 = getLastCreatedEntity()
    heliTurret2.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliTurret2.setInvisibility(Invis.ALL)
    heliTurret2.startFacing(directionTowards(heliTurret2.getEyePosition(), eventPlayer.getEyePosition()), 100, Relativity.TO_WORLD, Reeval.DIRECTION_AND_TURN_RATE)
    wait(0.1)
    
    createDummy(Hero.DOOMFIST, Team.2, -1, eventPlayer.getPosition(), vect(0,0,0))
    heliTurret3 = getLastCreatedEntity()
    heliTurret3.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliTurret3.setInvisibility(Invis.ALL)
    heliTurret3.startFacing(directionTowards(heliTurret3.getEyePosition(), eventPlayer.getEyePosition()), 100, Relativity.TO_WORLD, Reeval.DIRECTION_AND_TURN_RATE)
    wait(0.1)

    
    
    createDummy(Hero.DOOMFIST, Team.2, -1, eventPlayer.getPosition(), vect(0,0,0))
    heliTurret4 = getLastCreatedEntity()
    heliTurret4.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliTurret4.setInvisibility(Invis.ALL)
    heliTurret4.startFacing(directionTowards(heliTurret4.getEyePosition(), eventPlayer.getEyePosition()), 100, Relativity.TO_WORLD, Reeval.DIRECTION_AND_TURN_RATE)

    
    #createDummy(Hero.DOOMFIST, Team.2, -1, eventPlayer.getPosition(), vect(0,0,0))
    #heliTurret5 = getLastCreatedEntity()
    #heliTurret5.setStatusEffect(null, Status.PHASED_OUT, 9999)
    #heliTurret5.setInvisibility(Invis.ALL)
    #heliTurret5.startFacing(directionTowards(heliTurret4.getEyePosition(), eventPlayer.getEyePosition()), 100, Relativity.TO_WORLD, Reeval.DIRECTION_AND_TURN_RATE)

    
    #heliMinesDispenser.startFacing(directionTowards(heliMinesDispenser.getEyePosition(), eventPlayer.getEyePosition()), 100, Relativity.TO_WORLD, Reeval.DIRECTION_AND_TURN_RATE)

    heliPlayer.setGravity(0)
    heliTurret.setGravity(0)
    heliTurret2.setGravity(0)
    heliTurret3.setGravity(0)
    heliTurret4.setGravity(0)
    heliTurret5.setGravity(0)
    heliMinesDispenser.setGravity(0)

    heliPlayer.teleport(vect(214.339, 58.849, -36.157))


@Rule "begin turret fire"
@Event eachPlayer
if eventPlayer.isFiringSecondaryFire():
    heliTurret5.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.1)
    heliTurret4.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.1)
    heliTurret3.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.1)
    heliTurret2.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.1)
    heliTurret.startForcingButton(Button.PRIMARY_FIRE)

@Rule "begin mines"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ULTIMATE):
    heliTurret5.stopForcingButton(Button.PRIMARY_FIRE)
    heliTurret4.stopForcingButton(Button.PRIMARY_FIRE)
    heliTurret3.stopForcingButton(Button.PRIMARY_FIRE)
    heliTurret2.stopForcingButton(Button.PRIMARY_FIRE)
    heliTurret.stopForcingButton(Button.PRIMARY_FIRE)


@Rule "begin mines"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer == hostPlayer:
    do:
        heliMinesDispenser.setUltCharge(100)
        heliMinesDispenser.forceButtonPress(Button.ULTIMATE)
        wait(0.5)
    while not eventPlayer.isHoldingButton(Button.INTERACT)



@Rule "fast fire"
@Event global
if false:
    do:
        heliTurret.setProjectileSpeed(100)
        #heliTurret.forceButtonPress(Button.ULTIMATE)
        wait(0.016)
    while true


@Rule "move heli"
@Event global
if true:
    do:
        #heliPlayer.applyImpulse(directionTowards(heliPlayer.getPosition(), random.choice(corners)), 100, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        heliPlayer.startAcceleration(directionTowards(vect(heliPlayer.getPosition().x, 58, heliPlayer.getPosition().z), random.choice(corners)), 9999, 100, Relativity.TO_WORLD, Reeval.NONE)
        wait(2)
        #heliPlayer.stopAcceleration()
        wait(random.randint(2, 4))
    while true

@Rule "heli too high"
@Event global
if heliPlayer.getPosition().y > 63:
    heliPlayer.applyImpulse(Vector.DOWN, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "heli too low"
@Event global
if heliPlayer.getPosition().y < 43:
    heliPlayer.applyImpulse(Vector.UP, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "tp bastion&hammond to heli"
@Event global
do:
    heliTurret.teleport(heliPlayer.getPosition())
    heliTurret2.teleport(heliPlayer.getPosition())
    heliTurret3.teleport(heliPlayer.getPosition())
    heliTurret4.teleport(heliPlayer.getPosition())
    heliTurret5.teleport(heliPlayer.getPosition())
    heliMinesDispenser.teleport(heliPlayer.getPosition())
    wait(0.016)
while true

@Rule "rotate blades"
@Event global
do:
    rotation += ROTATION_SPEED
    wait(0.016)
while true

@Rule "display blades"
@Event global

#Horizontal blades
heliBlade(heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(180+rotation),2,BLADE_LENGTH*sinDeg(180+rotation)), 
        heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(rotation),2,BLADE_LENGTH*sinDeg(rotation)))

heliBlade(heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(182+rotation),2,BLADE_LENGTH*sinDeg(182+rotation)), 
        heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(2+rotation),2,BLADE_LENGTH*sinDeg(2+rotation)))

heliBlade(heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(184+rotation),2,BLADE_LENGTH*sinDeg(184+rotation)), 
        heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(4+rotation),2,BLADE_LENGTH*sinDeg(4+rotation)))

#Vertical blades
heliBlade(heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(270+rotation),2,BLADE_LENGTH*sinDeg(270+rotation)), 
        heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(90+rotation),2,BLADE_LENGTH*sinDeg(90+rotation)))

heliBlade(heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(272+rotation),2,BLADE_LENGTH*sinDeg(272+rotation)), 
        heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(92+rotation),2,BLADE_LENGTH*sinDeg(92+rotation)))

heliBlade(heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(274+rotation),2,BLADE_LENGTH*sinDeg(274+rotation)), 
        heliPlayer.getPosition()+vect(BLADE_LENGTH*cosDeg(94+rotation),2,BLADE_LENGTH*sinDeg(94+rotation)))

corners = [corner1, corner2, corner3, corner4]

