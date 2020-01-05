#!mainFile "meipocalypse.opy"

@Rule "mei default"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_NO_TYPE:
    eventPlayer.setMoveSpeed(MEI_BASE_SPEED)
    eventPlayer.setMaxHealth(MEI_BASE_HEALTH)
    eventPlayer.setDamageDealt(MEI_BASE_DMG)
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setUltCharge(0)
    eventPlayer.setGravity(100)
    eventPlayer.noCrouchSpam = true
    eventPlayer.setAbility1Enabled(random.randint(1,100) <= cryoChance)
    destroyInWorldText(eventPlayer.icon)
    destroyEffect(eventPlayer.effect)

@Rule "mei generic"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_GENERIC:
    eventPlayer.noCrouchSpam = random.randint(0,20)

"""
@Rule "mei hacking"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_HACKING:
    eventPlayer.noCrouchSpam = random.randint(0,10)


@Rule "mei hacking hack"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_HACKING and eventPlayer.isFiringPrimaryFire():
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getPosition()+vect(0,1,0), MEI_HACK_RADIUS+5)
    getPlayersInRadius(eventPlayer.getPosition(), MEI_HACK_RADIUS, Team.1, LosCheck.OFF).setStatusEffect(null, Status.HACKED, MEI_HACK_RADIUS)
    damage(getPlayersInRadius(eventPlayer.getPosition(), MEI_HACK_RADIUS, Team.1, LosCheck.OFF), eventPlayer, 30)
"""

@Rule "mei tank"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_TANK:
    eventPlayer.setMoveSpeed(75)
    eventPlayer.setMaxHealth(1000)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setDamageDealt(500)
    eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
    eventPlayer.noCrouchSpam = random.randint(0,10)

@Rule "mei healer"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_HEALER:
    eventPlayer.setMaxHealth(300)
    eventPlayer.startHoT(null, 1, 9999)
    createInWorldText(getAllPlayers(), iconString(Icon.PLUS), eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW, SpecVisibility.ALWAYS)
    eventPlayer.icon = getLastCreatedText()
    createEffect(getAllPlayers(), Effect.RING, Color.YELLOW, eventPlayer, 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.effect = getLastCreatedEntity()
    eventPlayer.noCrouchSpam = random.randint(0,20)

@Rule "mei healer healing"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_HEALER:
    do:
        heal(getPlayersInRadius(eventPlayer.getPosition(), 10, Team.2, LosCheck.OFF), eventPlayer, 5)
        heal([player for player in getPlayersInRadius(eventPlayer.getPosition(), 10, Team.2, LosCheck.OFF) if player != eventPlayer], eventPlayer, 25)
        wait(0.1)
    while RULE_CONDITION

@Rule "mei speedy"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_SPEEDY:
    eventPlayer.setMoveSpeed(175)
    eventPlayer.setMaxHealth(175)
    eventPlayer.startHoT(null, 1, 9999)

@Rule "mei crouch spam"
@Event eachPlayer
@Team 2
if not eventPlayer.noCrouchSpam:
    do:
        wait(0.1)
        eventPlayer.startForcingButton(Button.CROUCH)
        wait(0.1)
        eventPlayer.stopForcingButton(Button.CROUCH)
    while RULE_CONDITION

@Rule "mei sniper"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_SNIPER:
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(150)
    eventPlayer.setDamageDealt(100)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.noCrouchSpam = random.randint(0,5)

    
@Rule "mei ult spam"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_ULT:
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(200)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.noCrouchSpam = random.randint(0,3)

@Rule "mei ult spam"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_ULT:
    do:
        eventPlayer.setUltCharge(100)
        wait(1)
        #eventPlayer.forceButtonPress(Button.ULTIMATE)
    while RULE_CONDITION

"""
@Rule "mei jumping"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_JUMPING:
    eventPlayer.setMoveSpeed(250)
    eventPlayer.setGravity(70)
    eventPlayer.setMaxHealth(150)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.noCrouchSpam = false


@Rule "mei jumping jump"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_JUMPING and (eventPlayer.isFiringPrimaryFire() or eventPlayer.isFiringSecondaryFire()):
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait(0.1)
    while RULE_CONDITION
    

@Rule "mei deflect"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_DEFLECT:
    eventPlayer.setMaxHealth(150)
    eventPlayer.noCrouchSpam = random.randint(0,15)


@Rule "mei deflect bubble"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_DEFLECT:
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


@Rule "mei deflect dmg"
@Event playerTookDamage
@Team 2
if victim.meiType == MEI_DEFLECT and victim.isDeflecting:
    damage(attacker, victim, eventDamage*150)
    heal(victim, null, eventDamage)


@Rule "mei speed boss"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_SPEEDBOSS:
    eventPlayer.setMoveSpeed(300)
    eventPlayer.setMaxHealth(500)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    createInWorldText(getAllPlayers(), iconString(Icon.BOLT), eventPlayer, 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.RED, SpecVisibility.ALWAYS)
    eventPlayer.icon = getLastCreatedText()

@Rule "meicopter itself"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_MEICOPTER:
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
"""

"""
@Rule "meicopter blade spin"
@Event global
do:
    rotation += ROTATION_SPEED
    wait()
while true"""

"""
@Rule "meicopter uses cryo"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_MEICOPTER and eventPlayer.isUsingAbility1():
    [player for player in getPlayers(Team.2) if player.meiType == MEI_MEICOPTER_TURRET].setUltCharge(95)

@Rule "meicopter dies"
@Event playerDied
@Team 2
if victim.meiType == MEI_MEICOPTER:
    meicopter = null
    destroyEffect(victim.blades[0])
    destroyEffect(victim.blades[1])
    destroyEffect(victim.blades[2])
    destroyEffect(victim.blades[3])
    destroyEffect(victim.blades[4])
    destroyEffect(victim.blades[5])

@Rule "meicopter turrets"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_MEICOPTER_TURRET:
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setGravity(0)
    eventPlayer.setDamageDealt(50)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setSecondaryFireEnabled(true)
    meicopterTurrets.append(eventPlayer)

@Rule "tp meicopter turrets"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_MEICOPTER_TURRET:
    do:
        eventPlayer.teleport(meicopter.getPosition())
        wait(0.016)
    while RULE_CONDITION
"""
