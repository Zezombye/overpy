
#Global variables

#!define debugSphereLocation A
#!define spheres B
#!define meicopter C
#!define meicopterTurrets D
#!define currentMeiType E

#Player variables

#!define isOob A
#!define meiType B
#!define icon C
#!define effect D
#!define noCrouchSpam E

#Mei types

#!define MEI_NO_TYPE 0
#!define MEI_GENERIC 1
#!define MEI_TANK 2
#!define MEI_HEALER 3
#!define MEI_SPEEDY 4
#!define MEI_SNIPER 5
#!define MEI_ULT 6
#!define MEI_MEICOPTER 7
#!define MEI_MEICOPTER_TURRET 8
#!define MEI_SPEEDBOSS 9

#!define MEI_BASE_SPEED 65
#!define MEI_BASE_DMG 500
#!define MEI_BASE_HEALTH 100

#Spawnpoints
#!define holdingRoom vect(82.65, 2, -30)
#!define pointADefSpawn vect(23, 6.5, -17)

#Point A spawns

#Difficulty: 1
#!define spawnA11 vect(67.8, -1, -1)
#!define spawnA12 vect(62.2, -1, 23.8)
#!define spawnA13 vect(25.77, -1, -69.6)
#!define spawnA14 vect(-0.3, 1, -75)

#Difficulty: 2
#!define spawnA21 vect(63.8, -1, -8.6)
#!define spawnA22 vect(62.5, 6.5, -7.2)
#!define spawnA23 vect(30, 3.5, 26.4)
#!define spawnA24 vect(40.7, 1, 25.8)
#!define spawnA25 vect(37.7, -1, -38.6)
#!define spawnA26 vect(21.8, 4, -83.3)

#Difficulty: 3
#!define spawnA31 vect(48.11, 2.5, -26.13)
#!define spawnA32 vect(48.95, 5, -19.37)
#!define spawnA33 vect(48.7, 6.5, 0.8)
#!define spawnA34 vect(43.7, 1.5, -3.6)
#!define spawnA35 vect(-2, -1, -41.7)
#!define spawnA36 vect(-7.3, 5, -43)
#!define spawnA37 vect(-16.56, -2, -55.39)

#!define generateBeams() __script__("generatewallbeams.js")

@Rule "mei first spawn"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned():
    wait(0.1)
    kill(eventPlayer, null)

@Rule "reset mei type on death"
@Event playerDied
@Team 2
victim.respawn()
wait(0.1)
victim.teleport(holdingRoom)
victim.meiType = MEI_NO_TYPE

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
    eventPlayer.noCrouchSpam = true
    destroyInWorldText(eventPlayer.icon)
    destroyEffect(eventPlayer.effect)

@Rule "mei generic"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_GENERIC:
    eventPlayer.noCrouchSpam = random.randint(0,20)

@Rule "mei tank"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_TANK:
    eventPlayer.setMoveSpeed(50)
    eventPlayer.setMaxHealth(500)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setDamageDealt(1500)
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
        wait(0.1)
    while RULE_CONDITION

@Rule "mei speedy"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_SPEEDY:
    eventPlayer.setMoveSpeed(150)

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
    eventPlayer.setMoveSpeed(80)
    eventPlayer.setMaxHealth(150)
    eventPlayer.startHoT(null, 1, 9999)
    eventPlayer.setDamageDealt(100)
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
        eventPlayer.forceButtonPress(Button.ULTIMATE)
    while RULE_CONDITION

@Rule "mei speed boss"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_SPEEDBOSS:
    eventPlayer.setMoveSpeed(300)
    eventPlayer.setMaxHealth(200)
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
    eventPlayer.setDamageDealt(100)
    eventPlayer.setSecondaryFireEnabled(true)
    meicopter = eventPlayer
    createInWorldText(getAllPlayers(), "{} {}".format(Team.1, Team.2), eventPlayer, 4, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW, SpecVisibility.ALWAYS)
    eventPlayer.icon = getLastCreatedText()

@Rule "meicopter turrets"
@Event eachPlayer
@Team 2
if eventPlayer.meiType == MEI_MEICOPTER_TURRET:
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setGravity(0)
    eventPlayer.setDamageDealt(100)
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
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, eventPlayer.getPosition(), 5)
        wait(0.016)
    while RULE_CONDITION

"""@Rule "debug tp"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0,0,5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))"""

@Rule "change mei type"
@Event global
if hostPlayer.isHoldingButton(Button.INTERACT):
    currentMeiType++

@Rule "debug place spheres"
@Event global
    hudHeader(getAllPlayers(), hostPlayer.getPosition(), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(getAllPlayers(), currentMeiType, Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

@Rule "debug tp bots"
@Event global
if hostPlayer.isHoldingButton(Button.CROUCH):
    getPlayersOnHero(Hero.MEI, Team.2).meiType = currentMeiType
    getPlayersOnHero(Hero.MEI, Team.2).teleport(spawnA11)

"""@Rule "update location"
@Event global
if hostPlayer.isHoldingButton(Button.SECONDARY_FIRE):
    do:
        #debugSphereLocation = normalize(vect(hostPlayer.getFacingDirection().x, 0, hostPlayer.getFacingDirection().z))*200+hostPlayer.getPosition()
        debugSphereLocation = hostPlayer.getPosition()-vect(0,1,0)
        wait(0.016)
    while not hostPlayer.isHoldingButton(Button.ULTIMATE)"""

@Rule "display walls"
@Event global
generateBeams()

@Rule "tp to objective"
@Event eachPlayer
@Team 1
if eventPlayer.hasSpawned() and eventPlayer.isAlive():
    wait(0.1)
    eventPlayer.teleport(pointADefSpawn)
    eventPlayer.startHoT(null, 1, 9999)

@Rule "jumppad flank"
@Event eachPlayer
@Team 2
if distance(eventPlayer.getPosition(), vect(-26.32, 0.63, -52.30)) < 1.5:
    eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), vect(-14.5, 10, -22.18)), 50, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "check wall for pre-choke area"
@Event eachPlayer
@Team 1
if eventPlayer.getPosition().z > -14 and crossProduct(
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
if eventPlayer.getPosition().z < -24.26 and eventPlayer.getPosition().x > 9:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for stairs"
@Event eachPlayer
@Team 1
if eventPlayer.getPosition().z < -23 and eventPlayer.getPosition().x > 27:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for way to flank"
@Event eachPlayer
@Team 1
if eventPlayer.getPosition().z < -20 and eventPlayer.getPosition().x < -12:
    do:
        eventPlayer.isOob = true
        eventPlayer.applyImpulse(vect(0, 0, 1), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.016)
    while RULE_CONDITION
    eventPlayer.isOob = false

@Rule "check wall for building"
@Event eachPlayer
@Team 1
if eventPlayer.getPosition().z < -28:
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