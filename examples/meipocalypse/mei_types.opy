#!mainFile "meipocalypse.opy"

#Mei types

globalvar meicopter
globalvar meicopterTurrets
globalvar currentMeiType


enum Mei:
    NO_TYPE,
    GENERIC,
    TANK,
    HEALER,
    SPEEDY,
    SNIPER,
    ULT,
    DEFLECT,
    JUMPING,
    HACKING,
    MEICOPTER,
    MEICOPTER_TURRET,
    SPEEDBOSS,
    MELEE,
    DRONE,

#!define MEI_HACK_RADIUS 7.5
#!define MEI_BASE_SPEED 100
#!define MEI_BASE_DMG 500
#!define MEI_BASE_HEALTH 100

#!define ROTATION_SPEED 29
#!define BLADE_LENGTH 1
#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

playervar targetedPlayer
playervar bladeEffects

rule "blade spin":
    chase(rotation, 9999999999999, rate=ROTATION_SPEED, ChaseReeval.NONE)

rule "mei default":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.NO_TYPE
    eventPlayer.setMoveSpeed(MEI_BASE_SPEED)
    eventPlayer.moveSpeed = MEI_BASE_SPEED
    #eventPlayer.setMaxHealth(MEI_BASE_HEALTH)
    eventPlayer.setDamageDealt(MEI_BASE_DMG)
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setUltCharge(0)
    eventPlayer.setGravity(100)
    eventPlayer.startScalingSize(1, false)
    eventPlayer.noCrouchSpam = true
    eventPlayer.setAbility1Enabled(random.randint(1,100) <= cryoChance)
    destroyInWorldText(eventPlayer.icon)
    destroyEffect(eventPlayer.effect)
    destroyEffect(eventPlayer.bladeEffects[0])
    destroyEffect(eventPlayer.bladeEffects[1])


rule "meilee":
	@Event eachPlayer
	@Team 2
    @Condition eventPlayer.meiType == Mei.MELEE
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setMaxHealth(20)
    eventPlayer.startScalingSize(1, false)
    
rule "meilee":
	@Event eachPlayer
	@Team 2
    @Condition eventPlayer.meiType == Mei.MELEE
    do:
        eventPlayer.targetedPlayer = [p for p in getPlayersInRadius(eventPlayer, 15, Team.1, LosCheck.SURFACES) if p.isAlive()][0]
        eventPlayer.forceButtonPress(Button.MELEE)

        if eventPlayer.targetedPlayer != null and not eventPlayer.isInWall:
            eventPlayer.applyImpulse(directionTowards(eventPlayer, eventPlayer.targetedPlayer)*vect(1,0,1), 0.3, Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
            eventPlayer.setMoveSpeed(1)
        else:
            eventPlayer.setMoveSpeed(eventPlayer.moveSpeed)
        wait()
    while RULE_CONDITION


rule "mei drone":
	@Event eachPlayer
	@Team 2
    @Condition eventPlayer.meiType == Mei.DRONE
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.setMaxHealth(20)
    eventPlayer.startScalingSize(0.3, false)
    
    heliBlade(eventPlayer+vect(BLADE_LENGTH*cos(Math.PI+rotation), 0.5, BLADE_LENGTH*sin(Math.PI+rotation)), 
    eventPlayer+vect(BLADE_LENGTH*cos(rotation), 0.5, BLADE_LENGTH*sin(rotation)))
    eventPlayer.bladeEffects[0] = getLastCreatedEntity()
    heliBlade(eventPlayer+vect(BLADE_LENGTH*cos(Math.PI*1.5+rotation), 0.5, BLADE_LENGTH*sin(Math.PI*1.5+rotation)), 
    eventPlayer+vect(BLADE_LENGTH*cos(Math.PI/2+rotation), 0.5, BLADE_LENGTH*sin(Math.PI/2+rotation)))
    eventPlayer.bladeEffects[1] = getLastCreatedEntity()
    
rule "mei drone":
	@Event eachPlayer
	@Team 2
    @Condition eventPlayer.meiType == Mei.DRONE
    do:
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.targetedPlayer = [p for p in getPlayersInRadius(eventPlayer, 20, Team.1, LosCheck.SURFACES) if p.isAlive()][0]

        if eventPlayer.targetedPlayer != null and not eventPlayer.isInWall:
            eventPlayer.applyImpulse(directionTowards(eventPlayer, eventPlayer.targetedPlayer)*vect(1,0,1), 0.1, Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
            eventPlayer.applyImpulse(Vector.UP, 0.3, Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
            #eventPlayer.setMoveSpeed(1)
        else:
            eventPlayer.setMoveSpeed(eventPlayer.moveSpeed)
        wait()
    while RULE_CONDITION

rule "mei generic":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.GENERIC
    eventPlayer.noCrouchSpam = random.randint(0,20)
    eventPlayer.setMaxHealth(MEI_BASE_HEALTH)

/*
rule "mei hacking":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.HACKING
    eventPlayer.noCrouchSpam = random.randint(0,10)


rule "mei hacking hack":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.HACKING and eventPlayer.isFiringPrimaryFire()
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getPosition()+vect(0,1,0), MEI_HACK_RADIUS+5)
    getPlayersInRadius(eventPlayer.getPosition(), MEI_HACK_RADIUS, Team.1, LosCheck.OFF).setStatusEffect(null, Status.HACKED, MEI_HACK_RADIUS)
    damage(getPlayersInRadius(eventPlayer.getPosition(), MEI_HACK_RADIUS, Team.1, LosCheck.OFF), eventPlayer, 30)
*/

rule "mei tank":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.TANK
    eventPlayer.setMoveSpeed(75)
    eventPlayer.setMaxHealth(1000)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setDamageDealt(500)
    eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
    eventPlayer.noCrouchSpam = random.randint(0,10)

rule "mei healer":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.HEALER
    eventPlayer.setMaxHealth(300)
    eventPlayer.startHoT(null, 1, 9999)
    createInWorldText(getAllPlayers(), iconString(Icon.PLUS), eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW, SpecVisibility.ALWAYS)
    eventPlayer.icon = getLastCreatedText()
    createEffect(getAllPlayers(), Effect.RING, Color.YELLOW, eventPlayer, 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.effect = getLastCreatedEntity()
    eventPlayer.noCrouchSpam = random.randint(0,20)

rule "mei healer healing":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.HEALER
    do:
        heal(getPlayersInRadius(eventPlayer.getPosition(), 10, Team.2, LosCheck.OFF), eventPlayer, 5)
        heal([player for player in getPlayersInRadius(eventPlayer.getPosition(), 10, Team.2, LosCheck.OFF) if player != eventPlayer], eventPlayer, 25)
        wait(0.1)
    while RULE_CONDITION

rule "mei speedy":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.SPEEDY
    eventPlayer.setMoveSpeed(175)
    eventPlayer.setMaxHealth(175)
    eventPlayer.startHoT(null, 1, 9999)

rule "mei crouch spam":
	@Event eachPlayer
	@Team 2
	@Condition not eventPlayer.noCrouchSpam
    do:
        wait(0.1)
        eventPlayer.startForcingButton(Button.CROUCH)
        wait(0.1)
        eventPlayer.stopForcingButton(Button.CROUCH)
    while RULE_CONDITION

rule "mei sniper":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.SNIPER
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(150)
    eventPlayer.setDamageDealt(100)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.noCrouchSpam = random.randint(0,5)

    
rule "mei ult spam":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.ULT
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(200)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.noCrouchSpam = random.randint(0,3)

rule "mei ult spam":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.ULT
    do:
        eventPlayer.setUltCharge(100)
        wait(1)
        #eventPlayer.forceButtonPress(Button.ULTIMATE)
    while RULE_CONDITION

/*
rule "mei jumping":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.JUMPING
    eventPlayer.setMoveSpeed(250)
    eventPlayer.setGravity(70)
    eventPlayer.setMaxHealth(150)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.noCrouchSpam = false


rule "mei jumping jump":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.JUMPING and (eventPlayer.isFiringPrimaryFire() or eventPlayer.isFiringSecondaryFire())
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait(0.1)
    while RULE_CONDITION
    

rule "mei deflect":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.DEFLECT
    eventPlayer.setMaxHealth(150)
    eventPlayer.noCrouchSpam = random.randint(0,15)


rule "mei deflect bubble":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.DEFLECT
    do:
        createEffect(getAllPlayers(), Effect.SPHERE, Color.PURPLE, eventPlayer.getPosition()+vect(0,1,0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.effect = getLastCreatedEntity()
        eventPlayer.isDeflecting = true
        eventPlayer.setDamageReceived(1)
        eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
        wait(3)
        destroyEffect(eventPlayer.effect)
        eventPlayer.isDeflecting = false
        eventPlayer.setDamageReceived(100)
        eventPlayer.clearStatusEffect(Status.UNKILLABLE)
        wait(1.5)
    while RULE_CONDITION


rule "mei deflect dmg":
	@Event playerTookDamage
	@Team 2
	@Condition victim.meiType == Mei.DEFLECT and victim.isDeflecting
    damage(attacker, victim, eventDamage*150)
    heal(victim, null, eventDamage)


rule "mei speed boss":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.SPEEDBOSS
    eventPlayer.setMoveSpeed(300)
    eventPlayer.setMaxHealth(500)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    createInWorldText(getAllPlayers(), iconString(Icon.BOLT), eventPlayer, 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.RED, SpecVisibility.ALWAYS)
    eventPlayer.icon = getLastCreatedText()

rule "meicopter itself":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.MEICOPTER
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(2000)
    eventPlayer.setGravity(0)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setDamageDealt(50)
    eventPlayer.setSecondaryFireEnabled(true)
    meicopter = eventPlayer
    rotation = 0
    createInWorldText(getAllPlayers(), "{} {}".format(Team.1, Team.2), eventPlayer, 4, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW, SpecVisibility.ALWAYS)
    eventPlayer.icon = getLastCreatedText()
    eventPlayer.blades = []

    #Horizontal blades
    heliBlade(meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(180+rotation),2,BLADE_LENGTH*sinDeg(180+rotation)), 
    meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(rotation),2,BLADE_LENGTH*sinDeg(rotation)))
    eventPlayer.blades.append(getLastCreatedEntity())
    heliBlade(meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(182+rotation),2,BLADE_LENGTH*sinDeg(182+rotation)), 
    meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(2+rotation),2,BLADE_LENGTH*sinDeg(2+rotation)))
    eventPlayer.blades.append(getLastCreatedEntity())
    heliBlade(meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(184+rotation),2,BLADE_LENGTH*sinDeg(184+rotation)), 
    meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(4+rotation),2,BLADE_LENGTH*sinDeg(4+rotation)))
    eventPlayer.blades.append(getLastCreatedEntity())
    #Vertical blades
    heliBlade(meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(270+rotation),2,BLADE_LENGTH*sinDeg(270+rotation)), 
    meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(90+rotation),2,BLADE_LENGTH*sinDeg(90+rotation)))
    eventPlayer.blades.append(getLastCreatedEntity())
    heliBlade(meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(272+rotation),2,BLADE_LENGTH*sinDeg(272+rotation)), 
    meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(92+rotation),2,BLADE_LENGTH*sinDeg(92+rotation)))
    eventPlayer.blades.append(getLastCreatedEntity())
    heliBlade(meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(274+rotation),2,BLADE_LENGTH*sinDeg(274+rotation)), 
    meicopter.getPosition()+vect(BLADE_LENGTH*cosDeg(94+rotation),2,BLADE_LENGTH*sinDeg(94+rotation)))
    eventPlayer.blades.append(getLastCreatedEntity())
*/

/*
rule "meicopter blade spin":
	@Event global
do:
    rotation += ROTATION_SPEED
    wait()
while true
*/

/*
rule "meicopter uses cryo":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.MEICOPTER and eventPlayer.isUsingAbility1()
    [player for player in getPlayers(Team.2) if player.meiType == Mei.MEICOPTER_TURRET].setUltCharge(95)

rule "meicopter dies":
	@Event playerDied
	@Team 2
	@Condition victim.meiType == Mei.MEICOPTER
    meicopter = null
    destroyEffect(victim.blades[0])
    destroyEffect(victim.blades[1])
    destroyEffect(victim.blades[2])
    destroyEffect(victim.blades[3])
    destroyEffect(victim.blades[4])
    destroyEffect(victim.blades[5])

rule "meicopter turrets":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.MEICOPTER_TURRET
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setGravity(0)
    eventPlayer.setDamageDealt(50)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    meicopterTurrets.append(eventPlayer)

rule "tp meicopter turrets":
	@Event eachPlayer
	@Team 2
	@Condition eventPlayer.meiType == Mei.MEICOPTER_TURRET
    do:
        eventPlayer.teleport(meicopter.getPosition())
        wait(0.016)
    while RULE_CONDITION
*/
