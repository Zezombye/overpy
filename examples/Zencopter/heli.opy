
#!define heliPlayer A
#!define targetedPlayer B
#!define heliMinesDispenser C
#!define heliMode M
#!define corners Y
#!define rotation Z

#!define BLADE_LENGTH 2.5
#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


#!define heliMaxHeight 29
#!define heliBaseHeight 25
#!define heliMinHeight 20
#!define heliSpawnLocation vect(-23, 5, -53)
#!define corner1 vect(-21, heliBaseHeight, -7)
#!define corner2 vect(-46, heliBaseHeight, -42)
#!define corner3 vect(-18, heliBaseHeight, -62)
#!define corner4 vect(14, heliBaseHeight, -24)

#!define MODE_TURRET 1
#!define MODE_MINES 2

#!define ROTATION_SPEED 29

#!define heliTeam Team.1
#!define humanTeam Team.2

#!define heliTurretHero Hero.DOOMFIST
#!define heliTurrets [bot for bot in getPlayers(heliTeam) if bot.getCurrentHero() == heliTurretHero]
#!define heliTurretButton Button.PRIMARY_FIRE

#!define heliMineDispenserHero Hero.TRACER
#!define heliMineDispensers [bot for bot in getPlayers(heliTeam) if bot.getCurrentHero() == heliMineDispenserHero]
#!define heliMineButton Button.ULTIMATE

"""@Rule "tp to arena"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.CROUCH):
    eventPlayer.teleport(vect(214.339, 28.849, -36.157))"""

"""@Rule "owo"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0,0,5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))"""

@Rule "turret mode - create bots"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT) and eventPlayer == hostPlayer:

    destroyAllDummies()
    wait(0.1)

    createDummy(Hero.ZENYATTA, heliTeam, -1, vect(0,100,0), vect(0, 0, 0))
    heliPlayer = getLastCreatedEntity()
    wait(0.1)
    heliPlayer.setGravity(0)
    heliPlayer.teleport(heliSpawnLocation)
    heliPlayer.setMaxHealth(300)
    wait(0.1)
    heal(heliPlayer, null, 9999)
    wait(0.1)
    heliMode = MODE_TURRET

    destroyDummy(heliTeam, 1)
    destroyDummy(heliTeam, 2)
    destroyDummy(heliTeam, 3)
    destroyDummy(heliTeam, 4)
    destroyDummy(heliTeam, 5)
    wait(0.1)

    createDummy(heliTurretHero, heliTeam, -1, eventPlayer.getPosition(), vect(0,0,0))
    createDummy(heliTurretHero, heliTeam, -1, eventPlayer.getPosition(), vect(0,0,0))
    createDummy(heliTurretHero, heliTeam, -1, eventPlayer.getPosition(), vect(0,0,0))
    createDummy(heliTurretHero, heliTeam, -1, eventPlayer.getPosition(), vect(0,0,0))
    createDummy(heliTurretHero, heliTeam, -1, eventPlayer.getPosition(), vect(0,0,0))

    heliTurrets.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliTurrets.setInvisibility(Invis.ALL)
    heliTurrets.setGravity(0)
    heliTurrets.setProjectileSpeed(250)
    
@Rule "begin mines"
@Event global
if heliMode == MODE_MINES:
    destroyDummy(heliTeam, 1)
    destroyDummy(heliTeam, 2)
    destroyDummy(heliTeam, 3)
    destroyDummy(heliTeam, 4)
    destroyDummy(heliTeam, 5)
    wait(0.1)

    createDummy(heliMineDispenserHero, heliTeam, -1, vect(0,1000,0), vect(0,0,0))
    createDummy(heliMineDispenserHero, heliTeam, -1, vect(0,1000,0), vect(0,0,0))
    createDummy(heliMineDispenserHero, heliTeam, -1, vect(0,1000,0), vect(0,0,0))
    createDummy(heliMineDispenserHero, heliTeam, -1, vect(0,1000,0), vect(0,0,0))
    createDummy(heliMineDispenserHero, heliTeam, -1, vect(0,1000,0), vect(0,0,0))

    heliMineDispensers.setStatusEffect(null, Status.PHASED_OUT, 9999)
    heliMineDispensers.setInvisibility(Invis.ALL)
    heliMineDispensers.setGravity(0)
    #heliMineDispensers.startForcingButton(Button.SECONDARY_FIRE)

    #Face left
    heliMineDispensers[0].startFacing(vect(0-heliPlayer.getVelocity().z, 0, heliPlayer.getVelocity().x), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    heliMineDispensers[1].startFacing(vect(0-heliPlayer.getVelocity().z, 0, heliPlayer.getVelocity().x), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)

    #Face right
    heliMineDispensers[2].startFacing(vect(heliPlayer.getVelocity().z, 0, 0-heliPlayer.getVelocity().x), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    heliMineDispensers[3].startFacing(vect(heliPlayer.getVelocity().z, 0, 0-heliPlayer.getVelocity().x), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)

    #Face down
    heliMineDispensers[4].startFacing(Vector.DOWN, 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    
    heliMineDispensers[0].setProjectileSpeed(50)
    heliMineDispensers[2].setProjectileSpeed(50)

    heliMineDispensers[1].setProjectileSpeed(25)
    heliMineDispensers[3].setProjectileSpeed(25)
    heliMineDispensers[4].setProjectileSpeed(25)

@Rule "switch mode to mines"
@Event global
if heliPlayer.getNormalizedHealth() < 0.5 and heliMode == MODE_TURRET:
    heliMode = MODE_MINES

@Rule "begin mines"
@Event global
if heliMode == MODE_MINES:
    do:
        heliMineDispensers.setUltCharge(100)
        #heliMineDispensers.setStatusEffect(null, Status.STUNNED, 0.016)
        heliMineDispensers.forceButtonPress(heliMineButton)
        
        wait(0.016)
        
    while RULE_CONDITION

@Rule "fire turret"
@Event global
if heliMode == MODE_TURRET:
    do:
        heliTurrets.stopForcingButton(heliTurretButton)
        wait(random.randint(4, 6))
        targetedPlayer = random.choice(getLivingPlayers(humanTeam))
        heliTurrets.startFacing(directionTowards(heliTurrets.getEyePosition(), targetedPlayer.getEyePosition()), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
        heliTurrets[0].startForcingButton(heliTurretButton)
        wait(0.064)
        heliTurrets[1].startForcingButton(heliTurretButton)
        wait(0.064)
        heliTurrets[2].startForcingButton(heliTurretButton)
        wait(0.064)
        heliTurrets[3].startForcingButton(heliTurretButton)
        wait(0.064)
        heliTurrets[4].startForcingButton(heliTurretButton)
        
        wait(4)
    while RULE_CONDITION

@Rule "move heli in turret"
@Event global
if heliMode == MODE_TURRET:
    do:
        #heliPlayer.applyImpulse(directionTowards(heliPlayer.getPosition(), random.choice(corners)), 100, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        #heliPlayer.startAcceleration(directionTowards(vect(heliPlayer.getPosition().x, 58, heliPlayer.getPosition().z), random.choice(corners)), 9999, 100, Relativity.TO_WORLD, FacingReeval.NONE)
        heliPlayer.startThrottleInDirection(directionTowards(vect(heliPlayer.getPosition().x, heliBaseHeight, heliPlayer.getPosition().z), random.choice(corners)), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.NONE)
        heliPlayer.setMoveSpeed(150)
        wait(random.randint(3,4))
        heliPlayer.setMoveSpeed(250)
        wait(random.randint(1,2))
        heliPlayer.setMoveSpeed(150)
        wait(random.randint(1,2))
        #heliPlayer.stopAcceleration()
    while RULE_CONDITION
    heliPlayer.stopThrottleInDirection()

@Rule "move heli in mines"
@Event global
if heliMode == MODE_MINES:
    do:
        targetedPlayer = random.choice(getLivingPlayers(humanTeam))

        smallMessage(getAllPlayers(), 2)
        #if distance(vect(heliPlayer.getPosition().x, 0, heliPlayer.getPosition().y), vect(targetedPlayer.getPosition().x, 0, targetedPlayer.getPosition().z)) > 5:
        heliPlayer.startThrottleInDirection(directionTowards(
            vect(heliPlayer.getPosition().x, heliBaseHeight, heliPlayer.getPosition().z),
            vect(
                targetedPlayer.getPosition().x,
                heliBaseHeight, 
                targetedPlayer.getPosition().z
            )),1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)

        heliPlayer.setMoveSpeed(150)
        wait(random.randint(3,4))
        heliPlayer.setMoveSpeed(250)
        wait(random.randint(1,2))
        heliPlayer.setMoveSpeed(150)
        wait(random.randint(1,2))
    while RULE_CONDITION

@Rule "stop moving towards the player"
@Event global
if heliMode == MODE_MINES and distance(vect(heliPlayer.getPosition().x, 0, heliPlayer.getPosition().z), vect(targetedPlayer.getPosition().x, 0, targetedPlayer.getPosition().z)) < 0.5:
    smallMessage(getAllPlayers(), 1)
    heliPlayer.startThrottleInDirection(directionTowards(
        vect(heliPlayer.getPosition().x, heliBaseHeight, heliPlayer.getPosition().z),
        vect(
            targetedPlayer.getPosition().x, 
            heliBaseHeight, 
            targetedPlayer.getPosition().z
        )),1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.NONE)

@Rule "heli too high"
@Event global
if heliPlayer.getPosition().y > heliMaxHeight:
    heliPlayer.applyImpulse(Vector.DOWN, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "heli too low"
@Event global
if heliPlayer.getPosition().y < heliMinHeight:
    heliPlayer.applyImpulse(Vector.UP, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "tp bastion&hammond to heli"
@Event global
do:
    heliTurrets.teleport(heliPlayer.getPosition())
    heliMineDispensers.teleport(heliPlayer.getPosition())
    wait(0.016)
while true

@Rule "rotate blades"
@Event global
do:
    rotation += ROTATION_SPEED
    wait(0.016)
while true

@Rule "display blades & init heli"
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

@Rule "coords"
@Event eachPlayer
hudHeader(eventPlayer, eventPlayer.getPosition(), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
hudHeader(eventPlayer, heliPlayer.getNormalizedHealth(), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
hudHeader(eventPlayer, targetedPlayer, Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
