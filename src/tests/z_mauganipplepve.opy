settings {
    "main": {
        "description": "it's like rein invasion but with mauga's milkers\nDS2MD\n\nyubz made it",
        "modeName": "mauga n!pple pve"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "spectatorSlots": 5,
        "team1Slots": 9,
        "team2Slots": 0,
        "returnToLobby": "never",
        "swapTeamsAfterMatch": false
    },
    "gamemodes": {
        "tdm": {
            "enabledMaps": [
                "workshopIslandNight"
            ]
        },
        "general": {
            "enablePerks": true,
            "gameLengthInMn": 15,
            "gamemodeStartTrigger": "immediately",
            "heroLimit": "off",
            "needsImbalancedTeamScoreToWin": true,
            "enableKillCam": false,
            "perkEliminationCatchupLevelAmount%": 100,
            "perkGeneration%": 500,
            "respawnTime%": 40,
            "enableSelfInitiatedRespawn": false,
            "tankPassiveHealthBonus": "alwaysEnabled",
            "team1ScoreToWin": 100,
            "team2ScoreToWin": 1
        }
    },
    "heroes": {
        "team1": {
            "cassidy": {
                "damageDealt%": 85
            },
            "doomfist": {
                "ammoRegenerationTime%": 33,
                "ability1Cooldown%": 50,
                "secondaryFireCooldown%": 60,
                "ability2Cooldown%": 50
            },
            "echo": {
                "ability1Cooldown%": 120
            },
            "lucio": {
                "ammoClipSize%": 300,
                "damageDealt%": 150
            },
            "roadhog": {
                "ultGen%": 55
            },
            "venture": {
                "ability1Cooldown%": 120
            },
            "zarya": {
                "ultGen%": 30
            },
            "general": {
                "abilityCooldown%": 60,
                "ammoClipSize%": 150,
                "jumpVerticalSpeed%": 121,
                "movementGravity%": 110,
                "movementSpeed%": 140,
                "ultGen%": 160
            }
        },
        "team2": {
            "lifeweaver": {
                "enableSpawningWithUlt": true
            },
            "reinhardt": {
                "health%": 60
            },
            "torbjorn": {
                "weaponsEnabled": "hammer"
            },
            "winston": {
                "ammoClipSize%": 30,
                "health%": 80
            },
            "wreckingBall": {
                "enableRollOnly": true
            },
            "general": {
                "passiveHealthRegen": true
            }
        }
    }
}

#Global variables

globalvar nipman 0
globalvar obj 1
globalvar objDescs 2
globalvar objWeights 3
globalvar objProg 4
globalvar objGoal 5
globalvar objPos 6
globalvar roundNo 7
globalvar threatList 8
globalvar dummyThreats 9
globalvar moreFunThreats 10
globalvar threatNames 11
globalvar threatIcons 12
globalvar isHardcore 13
globalvar threatText 14
globalvar enemies 15
globalvar mobDmg 16
globalvar i 17
globalvar upto 18
globalvar target1 19
globalvar target2 20
globalvar area1 21
globalvar area2 22
globalvar twisterPos 23
globalvar twisterCache 24
globalvar wallPos 25
globalvar wallI 26
globalvar wallEffects 27
globalvar missilePos 28
globalvar missileFx 29
globalvar missileTemp 30
globalvar rainVar 31
globalvar grabLeft 32
globalvar grabLeftPlayer 33
globalvar grabRight 34
globalvar grabRightPlayer 35
globalvar iMores 36
globalvar moreFx 37
globalvar attackingClone 38
globalvar weakSpots 39
globalvar isun 40
globalvar threatSnipers 41
globalvar threatLactaters 42
globalvar threatSuns 43
globalvar threatNiplets 44
globalvar mobs 45
globalvar threatFx 46
globalvar antiCrashOn 47


#Player variables

playervar mobTarget 0
playervar cacheA 1
playervar cacheB 2
playervar cacheC 3
playervar botA 4
playervar botB 5


#Subroutine names

subroutine mobsInit 0


#Activated extensions

#!extension spawnMoreDummyBots
#!extension projectiles
#!extension beamEffects
#!extension energyExplosionEffects
#!extension buffStatusEffects
#!extension explosionSounds


rule "Initialize global variables":
    objDescs = ["collect pages", "defeat the mini maugas", "slay enemies", "slay the miniboss", "capture the point"]
    objWeights = [0.05, 0.2, 0.275, 0.275, 0.2]
    threatList = []
    dummyThreats = [12, 13, 17, 4]
    moreFunThreats = [2, 12, 15, 11, 13, 17]
    threatNames = ["slenderman", "more maugas", "frosty nips", "grabbyteats", "niplets", "cup fight", "tiddy twister", "lactose hail", "n!pple nuke", "dairy deaths", "milk wall", "mending milk", "scalding discharge", "s-nip-ers", "boobsted mobs", "booblet hell", "gravitatas", "sun exposure", "lazer"]
    threatIcons = [heroIcon(Hero.REAPER), abilityIconString(Hero.MAUGA, Button.ABILITY_1), abilityIconString(Hero.MEI, Button.ULTIMATE), abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE), abilityIconString(Hero.SIGMA, Button.ABILITY_1), abilityIconString(Hero.MAUGA, Button.ULTIMATE), abilityIconString(Hero.JUNKER_QUEEN, Button.ULTIMATE), abilityIconString(Hero.HAZARD, Button.ULTIMATE), iconString(Icon.RADIOACTIVE), abilityIconString(Hero.REAPER, Button.ULTIMATE), abilityIconString(Hero.MEI, Button.ABILITY_2), iconString(Icon.PLUS), abilityIconString(Hero.TORBJORN, Button.ULTIMATE), abilityIconString(Hero.WIDOWMAKER, Button.ULTIMATE), abilityIconString(Hero.ANA, Button.ULTIMATE), abilityIconString(Hero.PHARAH, Button.ULTIMATE), abilityIconString(Hero.ZARYA, Button.ULTIMATE), abilityIconString(Hero.ILLARI, Button.ULTIMATE), abilityIconString(Hero.ECHO, Button.ABILITY_2)]
    isHardcore = createWorkshopSettingBool("difficulty", "respawn players only when round ends", false)
    threatText = ""
    enemies = [Hero.WINSTON, Hero.TORBJORN, Hero.REINHARDT]
    mobDmg = [90, 155, 75]
    weakSpots = []
    mobs = []


rule "init":
    #print(len(getPlayers(Team.2)))
    #hudText(hostPlayer, iconString(Icon.EYE), "eye position", localPlayer.getEyePosition(), HudPosition.LEFT, 0, Color.SKY_BLUE, Color.SKY_BLUE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
    hudText(getAllPlayers(), null, "peak: {0} | average: {1}".format(getPeakServerLoad(), getAverageServerLoad()), "server load: {0}\n".format(getServerLoad()), HudPosition.RIGHT, -2, Color.ORANGE, Color.GRAY, Color.GRAY, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudSubtext(getAllPlayers(), "use code DS2MD for the latest version", HudPosition.RIGHT, -1, Color.WHITE, HudReeval.VISIBILITY)
    disableInspector()
    obj = -1
    createDummy(Hero.MAUGA, Team.2, -1, Vector.UP, Vector.BACKWARD)
    nipman = getLastCreatedEntity()
    nipman.startForcingPosition(vect(0, -19.8, 35), false)
    nipman.startFacing(Vector.BACKWARD, 999, Relativity.TO_WORLD, FacingReeval.NONE)
    nipman.disablePlayerCollision()
    #max size
    nipman.startScalingSize(20, false)
    upto = nipman.getMaxHealth()
    wait(0.08)
    nipman.setMaxHealth(abs(10000))
    #this is to fill hp and reset his pose
    kill(nipman)
    nipman.setKnockbackReceived(0)
    disableGamemodeCompletion()
    disableMusic()
    disableScoring()
    heal(nipman, null, 999999)
    wait()
    nipman.setHealingReceived(0)
    wait()
    nipman.setHealth(72500)
    nipman.cacheA = vect(2.93, 8.04, 26.15)
    nipman.cacheB = vect(-7.19, 8, 30.27)
    #score huds
    hudText(getAllPlayers(), abilityIconString(Hero.LUCIO, Button.ABILITY_2), "time elapsed", "{0}:{1}".format(floor(getTotalTimeElapsed() / 60), getTotalTimeElapsed() % 60), HudPosition.LEFT, 1, Color.SKY_BLUE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), iconString(Icon.SKULL), "team deaths", teamScore(Team.2), HudPosition.LEFT, 2, Color.RED, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), iconString(Icon.FLAG), "rounds elapsed", roundNo, HudPosition.LEFT, 2, Color.YELLOW, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudText(getAllPlayers(), abilityIconString(Hero.CASSIDY, Button.ULTIMATE), "total kills", kills, HudPosition.LEFT, 2, Color.ROSE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers() if isHardcore else null, iconString(Icon.EXCLAMATION_MARK), "hardcore mode is on", "no respawning until round ends", HudPosition.LEFT, 3, Color.BLACK, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    createEffect(getAllPlayers() if obj != -1 else [], Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, Color.TEAM_2, nipman, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.ORB, Color.WHITE, LeftNip, 1, EffectReeval.VISIBILITY)
    #createEffect(getAllPlayers(), Effect.ORB, Color.WHITE, RightNip, 1, EffectReeval.VISIBILITY)
    #objective effects
    createEffect(getAllPlayers() if obj == 0 else [], Effect.BAD_AURA, Color.GRAY, Vector.UP, 50, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    for i in range(6):
        createEffect(getAllPlayers() if obj == 0 else [], Effect.CLOUD, Color.GRAY, Vector.UP * i * 0.1 - 0.7, 50, EffectReeval.VISIBILITY)
        wait()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, objPos if obj == 0 else Vector.DOWN, 0.7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.RING, Color.BLUE, objPos if obj == 4 else Vector.DOWN * getTotalTimeElapsed(), 12, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createIcon(getAllPlayers() if obj == 4 else [], objPos, Icon.ARROW_DOWN, IconReeval.VISIBILITY_AND_POSITION, Color.TEAM_1)
    #createProjectileEffect(getAllPlayers() if THREATS.HEAL in threatList else [], Projectile.MOIRA_HEAL_ORB, null, RightNip, Vector.BACKWARD, 0, ProjectileEffectReeval.VISIBILITY)
    wait(0.16)
    #objective huds. get max hp is ****ing broken for mauga. and tank passive bonus doesn't even let him heal to there
    progressBarHud(getAllPlayers() if obj == -1 else [], 100 * nipman.getHealth() / 57500, "{0} {1} / 57500 hp".format(heroIcon(Hero.MAUGA), ceil(nipman.getHealth())), HudPosition.TOP, 1, Color.TEAM_2)
    progressBarHud(getAllPlayers() if obj != -1 else [], objProg / objGoal * 100, "objective: {0}! {1} / {2}".format(objDescs[obj], objProg, objGoal), HudPosition.TOP, 1, Color.TEAM_2 if obj == 3 else Color.TEAM_1)
    hudText(getAllPlayers() if obj != -1 else [], "\u3000threats: {0}\u3000".format(threatText), "", " \n ", HudPosition.TOP, 0, Color.ORANGE, Color.GRAY, Color.GRAY, HudReeval.VISIBILITY_STRING_AND_COLOR)
    nipman.cacheA = vect(2.93, 8.04, 26.15)
    nipman.cacheB = vect(-7.19, 8, 30.27)
    setMatchTime(5)


rule "loop":
    #start game when any player spawns for the first time
    @Condition any([player.hasSpawned() for player in getPlayers(Team.1)]) == true

    #intermission
    destroyEffect(threatFx)
    destroyEffect(moreFx)
    #destroyEffect(nipman.threatDecor)
    threatFx = []
    threatLactaters = []
    threatSuns = []
    threatSnipers = []
    threatNiplets = []
    #nipman.threatDecor = []
    nipman.setDamageReceived(60)
    #has to be unfroze early bc his hitbox desyncs with model
    nipman.clearStatusEffect(Status.FROZEN)
    pauseMatchTime()
    stopChasingVariable(area1)
    stopChasingVariable(area2)
    stopChasingVariable(twisterPos)
    stopChasingVariable(missilePos)
    stopAllDamageModifications()
    #getPlayers(Team.1).stopAcceleration()
    getPlayers(Team.1).setGravity(100)
    obj = -1
    objProg = 0
    threatList = []
    setMatchTime(11)
    unpauseMatchTime()
    wait(8)
    bigMessage(getAllPlayers(), "next objective in 3 seconds!")
    wait(2.5)
    pauseMatchTime()
    wait(0.5)
    mobs = []
    #pick objective. using objgoal instead of obj because rules check the obj var
    objPos = Vector.DOWN * nipman.getMaxHealth()
    #sum(weights) must be 1. obj is r here
    objGoal = random.uniform(0, 1)
    upto = 0
    #weighted rand from stackoverflow
    for i in range(len(objWeights)):
        if upto + objWeights[i] >= objGoal:
            objGoal = i
            break
        upto += objWeights[i]
        wait()
    #objGoal = OBJ.PAGES
    #threats
    threatList = []
    if objGoal == 0:
        threatList.append(0)
    elif objGoal == 1:
        threatList.append(1)
    threatList.append(random.randint(2, 18))
    wait(0.36)
    #attempt to add a 2nd threat
    if objGoal != 0:
        #threatText is used as temp storage
        #guarantee a threat that will get copied by mauga clones
        if objGoal == 1 and not threatList.last() in moreFunThreats:
            threatText = random.choice(moreFunThreats)
        else:
            threatText = random.randint(2, 18)
        if not threatText in threatList:
            threatList.append(threatText)
    #prevent multiple dummy-using threats to be used, to prevent conflicts on botA and botB vars or exceeding skin limit.
    if len([player for player in threatList if player in dummyThreats]) >= 2:
        threatList = threatList.slice(0, len(threatList) - 1)
    #threatList.append(THREATS.SUN)
    #threatList.append(THREATS.CAGE)
    wait()
    threatText = ""
    for i in range(len(threatList)):
        threatText = "{0}{1} {2}, ".format(threatText, threatIcons[threatList[i]], threatNames[threatList[i]])
        wait()
    threatText = threatText.substring(0, strLen(threatText) - 2)
    roundNo++
    wait()
    obj = objGoal
    objGoal = [8, 3, 60, 1, 100][obj]
    bigMessage(getAllPlayers(), "round start!")
    nipman.forceButtonPress(Button.ABILITY_2)
    wait(0.48)
    #i forgot why this can't be 0. surely nothing bad happens :clueless:
    nipman.setDamageReceived(0.001)
    #i rember now. it's to detect hook, punch, etc
    nipman.setStatusEffect(null, Status.FROZEN, 99999)
    waitUntil(objProg >= objGoal, 99999)
    #for i in range(len(getPlayers(Team.2))):
    #if getPlayersInSlot(i, Team.2) != nipman:
    #destroyDummy(Team.2, i)
    #wait()
    #nipman.setStatusEffect(null, Status.STUNNED, 0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_EFFECT, Color.TEAM_1, Vector.FORWARD * 18, 100)
    playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Color.TEAM_1, localPlayer, 200)
    bigMessage(getAllPlayers(), "objective complete! mauga is vulnerable!")
    wait()
    getDeadPlayers(Team.1).respawn()
    loop()


def mobsInit():
    @Name "Subroutine mobsInit"

    mobs = []
    for i in range(10):
        #createDummy(enemies[i%len(enemies)], Team.2, -1, Vector.DOWN, Vector.BACKWARD)
        #can't split enemy heroes bc skin limit
        #do not put this above skybox in case enemies aren't killed
        createDummy(enemies[roundNo % len(enemies)], Team.2, -1, 40 * Vector.UP, Vector.BACKWARD)
        mobs.append(getLastCreatedEntity())
        wait(0.112)
        #mobs.last().startFacing(directionTowards(mobs[evalOnce(i)].getEyePosition(), mobs[evalOnce(i)].mobTarget), 500, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
        if 14 in threatList:
            createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED, Color.TEAM_2, mobs[evalOnce(i)], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            threatFx.append(getLastCreatedEntity())
    wait(0.48)
    getPlayersOnHero(Hero.TORBJORN, Team.2).setWeapon(2)
    mobs.stopForcingButton(Button.PRIMARY_FIRE)
    mobs.startForcingThrottle(1, 1, 0, 0, 0, 1)
    mobs.setDamageDealt(mobDmg[roundNo % len(mobDmg)])
    mobs.setMoveSpeed(70)
    wait()
    if enemies[roundNo % len(enemies)] == Hero.TORBJORN:
        mobs.setDamageReceived(85)
    else:
        mobs.setDamageReceived(100)
    #kill(mobs, null)
    #mobs.resurrect()
    #if obj == OBJ.KILL:
    #objProg -= len(mobs)
    if 14 in threatList:
        startDamageModification(getPlayers(Team.1), mobs, 130, DamageReeval.RECEIVERS_AND_DAMAGERS)


rule "summon the horde":
    @Condition obj != -1
    @Condition obj != 0
    @Condition obj != 1

    wait(0.64, Wait.ABORT_WHEN_FALSE)
    getAllPlayers().disableKillFeed()
    wait()
    #destroyAllInWorldTexts() # debug
    mobsInit()
    getAllPlayers().enableKillFeed()


rule "slendy":
    @Condition obj == 0

    #destroyAllInWorldTexts() # debug
    #bigMessage(hostPlayer, "slendy spawn debug")
    #for i in range(MaxBots-4-TreeNo):
    createDummy(Hero.REAPER, Team.2, -1, vect(0, 7, 99), Vector.BACKWARD)
    mobs.append(getLastCreatedEntity())
    wait()
    #mobs.last().startFacing(directionTowards(mobs[evalOnce(i)].getEyePosition(), mobs[evalOnce(i)].mobTarget), 500, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    mobs.last().startFacing(directionTowards(mobs.last().getEyePosition(), mobs.last().mobTarget), 500)
    wait()
    createEffect(getAllPlayers(), Effect.REAPER_WRAITH_FORM, Color.TEAM_2, mobs.last(), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    if 14 in threatList:
        createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED, Color.TEAM_2, mobs.last(), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        threatFx.append(getLastCreatedEntity())
    wait(0.48)
    mobs.startForcingThrottle(1, 1, 0, 0, 0, 1)
    mobs.setDamageDealt(500)
    mobs.setMoveSpeed(95)
    mobs.startScalingSize(2, false)
    mobs.setMaxHealth(abs(1200))
    getAllPlayers().disableKillFeed()
    kill(mobs)
    wait()
    getAllPlayers().enableKillFeed()
    #set first page pos for clueless players
    objPos = Vector.FORWARD
    mobs.resurrect()
    mobs.startModifyingVoicelinePitch(0.6, false)
    mobs.startForcingName("slenderman")
    wait(0.48)
    heal(mobs, null, 99999)
    while obj == 0:
        mobs.forceButtonPress(Button.MELEE)
        wait(1.2)
        if random.uniform(0, 1) < 0.05:
            smallMessage(getAllPlayers(), "remember to check inside mauga's guns for the pages.")


rule "mob respawn":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer in mobs == true

    eventPlayer.teleport(nipman.cacheA if random.randint(0, 1) == 0 else nipman.cacheB)
    eventPlayer.applyImpulse(vect(random.uniform(-0.15, 0.15), random.uniform(0.4, 0.66), -1), random.uniform(50, 70), Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.mobTarget), 500)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    #torb is hammer only in settings
    #if obj != OBJ.PAGES:
    #getPlayersOnHero(Hero.TORBJORN, Team.2).setWeapon(2)
    #mobs.startForcingButton(Button.PRIMARY_FIRE)
    #wait(0.24)
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 5)


rule "knock mobs":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getPosition().y > 8.5
    @Condition eventPlayer.getNormalizedHealth() == 1
    @Condition eventPlayer.hasStatus(Status.KNOCKED_DOWN) == false
    @Condition eventPlayer in mobs == true

    wait(1.5)
    waitUntil(eventPlayer.getPosition().y < 1.8, 7)
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 1.6)
    if obj != 0:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)


rule "mob retarget":
    @Condition mobs != []
    @Condition obj != -1

    if getNumberOfLivingPlayers(Team.1) == 0:
        #mobs.mobTarget = null
        mobs.stopForcingThrottle()
        if obj == 3:
            objPos.stopForcingThrottle()
    else:
        mobs.startForcingThrottle(1, 1, 0, 0, 0, 1)
        if obj == 3:
            objPos.startForcingThrottle(1, 1, 0, 0, 0, 1)
        for i in range(len(mobs)):
            wait(0.12)
            #1st-3rd closest player
            if mobs[i].isAlive():
                mobs[i].mobTarget = sorted([player for player in getLivingPlayers(Team.1) if player.hasSpawned()], lambda i_: distance(i_, mobs[i].getPosition()))[random.randint(0, 2) % getNumberOfLivingPlayers(Team.1)]
        #change boss target
        if obj == 3:
            objPos.mobTarget = mobs[0].mobTarget
    wait(1.6)
    if ruleCondition:
        loop()


rule "init weak spots":
    @Event eachPlayer
    @Hero wreckingBall
    @Condition eventPlayer.isDummy() == true

    eventPlayer.startScalingSize(0.8, false)
    eventPlayer.startForcingName("sensitive spot")
    createIcon(getAllPlayers(), eventPlayer, Icon.WARNING, IconReeval.VISIBILITY_AND_COLOR, rgb(255, 205 + 50 * (sin(getTotalTimeElapsed() * 4)) / 2, 0))
    weakSpots.append(eventPlayer)
    wait(0.16)
    createEffect(getAllPlayers(), Effect.ECHO_CLONING, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY)
    eventPlayer.communicate(Comms.HELLO)


rule "more maugas charge attack":
    @Condition obj == 1

    wait(2.4)
    while obj == 1:
        wait(8)
        moreFx = []
        if obj != 1:
            return
        attackingClone = random.choice(objPos)
        for iMores in range(len(weakSpots)):
            destroyDummy(Team.2, weakSpots[iMores].getSlot())
        weakSpots = []
        #createBeam(getAllPlayers(), Beam.WINSTON_TESLA_CANNON, attackingClone.smallLNip, LeftNip if attackingClone.smallLNip.x > 0 else RightNip, Color.TEAM_2, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.WINSTON_TESLA_CANNON, attackingClone.cacheA, nipman.cacheA, Color.TEAM_2, EffectReeval.VISIBILITY)
        moreFx.append(getLastCreatedEntity())
        #createBeam(getAllPlayers(), Beam.WINSTON_TESLA_CANNON, attackingClone.smallRNip, LeftNip if attackingClone.smallRNip.x > 0 else RightNip, Color.TEAM_2, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.WINSTON_TESLA_CANNON, attackingClone.cacheB, nipman.cacheB, Color.TEAM_2, EffectReeval.VISIBILITY)
        moreFx.append(getLastCreatedEntity())
        bigMessage(getAllPlayers(), "{0} deadly attack incoming! attack the sensitive spots! {1}".format(iconString(Icon.WARNING), iconString(Icon.WARNING)))
        random.choice([player for player in getLivingPlayers(Team.1) if player.hasSpawned()]).communicate(Comms.PRESS_THE_ATTACK)
        #all hammond dummies get weak spot init
        createDummy(Hero.WRECKING_BALL, Team.2, -1, Vector.UP, Vector.UP)
        #left
        getLastCreatedEntity().attachTo(attackingClone, vect(5.4, 20.1, 5.7))
        wait()
        createDummy(Hero.WRECKING_BALL, Team.2, -1, Vector.UP, Vector.UP)
        getLastCreatedEntity().attachTo(attackingClone, vect(-2.055, 20.1, 7.29))
        weakSpots.setHealth(300)
        weakSpots.setHealingReceived(0)
        wait(0.064)
        heal(weakSpots, null, 99999)
        #wait until with less checking
        for iMores in range(15):
            wait(0.96)
            if obj != 1:
                return
            if attackingClone.isDead() or weakSpots == [] or not entityExists(attackingClone):
                break
            attackingClone.setStatusEffect(null, Status.BURNING, 1)
        if obj != 1:
            return
        if attackingClone.isDead() or not entityExists(attackingClone) or weakSpots == []:
            attackingClone.clearStatusEffect(Status.FROZEN)
            wait(0.112)
            attackingClone.setStatusEffect(null, Status.STUNNED, 1)
            destroyEffect(moreFx)
            moreFx = []
            random.choice([player for player in getLivingPlayers(Team.1) if player.hasSpawned()]).communicate(Comms.YES)
            bigMessage(getAllPlayers(), "success! stopped the attack!")
            wait(1.2)
            attackingClone.setStatusEffect(null, Status.FROZEN, 99999)
            attackingClone = null
            goto lbl_0
        bigMessage(getAllPlayers(), "{0} failed to stop the attack. brace for impact!".format(iconString(Icon.SAD)))
        for iMores in range(len(weakSpots)):
            destroyDummy(Team.2, weakSpots[iMores].getSlot())
        weakSpots = []
        random.choice([player for player in getLivingPlayers(Team.1) if player.hasSpawned()]).communicate(Comms.COUNTDOWN)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.TEAM_2, nipman.getEyePosition(), 9999)
        wait(1)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.TEAM_2, nipman.getEyePosition(), 9999)
        wait(1)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.TEAM_2, nipman.getEyePosition(), 9999)
        random.choice([player for player in getLivingPlayers(Team.1) if player.hasSpawned()]).communicate(Comms.INCOMING)
        wait(1)
        if obj != 1:
            return
        createBeam(getAllPlayers(), Beam.MOIRA_COALESCENCE, nipman.cacheA, vect(10, 0, 20 - (22 * (getTotalTimeElapsed() - evalOnce(getTotalTimeElapsed())))), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        moreFx.append(getLastCreatedEntity())
        createBeam(getAllPlayers(), Beam.MOIRA_COALESCENCE, nipman.cacheB, vect(-10, 0, 20 - (22 * (getTotalTimeElapsed() - evalOnce(getTotalTimeElapsed())))), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        moreFx.append(getLastCreatedEntity())
        for iMores in range(15, -17, -5):
            playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, vect(10, 0, iMores), 10)
            playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, vect(-10, 0, iMores), 10)
            createProjectile(Projectile.MERCY_CADUCEUS_BLASTER, attackingClone, vect(-10, 1, iMores), Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 300, 1, 10, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, 0, 99, 1, 20)
            createProjectile(Projectile.MERCY_CADUCEUS_BLASTER, attackingClone, vect(10, 1, iMores), Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 300, 1, 10, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, 0, 99, 1, 20)
            wait(0.336)
        destroyEffect(moreFx)
        moreFx = []
        lbl_0:


rule "niplets + dupe":
    @Event eachPlayer
    @Hero mauga
    @Condition obj != -1
    @Condition 4 in threatList == true
    #or (eventPlayer in objPos)
    @Condition eventPlayer == nipman

    createDummy(Hero.MAUGA, Team.2, -1, Vector.DOWN, eventPlayer.getFacingDirection())
    eventPlayer.botA = getLastCreatedEntity()
    threatNiplets.append(getLastCreatedEntity())
    createDummy(Hero.MAUGA, Team.2, -1, Vector.DOWN, eventPlayer.getFacingDirection())
    eventPlayer.botB = getLastCreatedEntity()
    threatNiplets.append(getLastCreatedEntity())
    wait(0.128)
    #threatNiplets.setStatusEffect(null, Status.FROZEN, 99999)
    threatNiplets.setStatusEffect(null, Status.PHASED_OUT, 99999)
    eventPlayer.botA.startForcingPosition(eventPlayer.cacheA + vect(-0.5, -3.5, -1), false)
    eventPlayer.botB.startForcingPosition(eventPlayer.cacheB + vect(0.5, -3.5, -1), false)
    threatNiplets.startScalingSize(2, false)
    wait(0.24)
    #eventPlayer.nipletsPosList.append(worldVector(vect(-0.137, 1.378, 0.466)*2, eventPlayer.botB, Transform.ROTATION_AND_TRANSLATION))
    wait(0.48)
    createEffect(getAllPlayers(), Effect.LUCIO_SOUND_BARRIER_PROTECTED, Color.TEAM_2, eventPlayer.botA, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.LUCIO_SOUND_BARRIER_PROTECTED, Color.TEAM_2, eventPlayer.botB, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    threatNiplets.startForcingName("niplet")
    threatNiplets.disableNameplatesFor(getAllPlayers())
    #eventPlayer.iniplets = 0
    while obj != -1:
        wait(0.24)
        #createProjectile(Projectile.BASTION_TACTICAL_GRENADE, eventPlayer.botA, eventPlayer.nipletsPosList[eventPlayer.iniplets], vect(random.uniform(0,0.7),random.uniform(-0.5,1),1), Relativity.TO_PLAYER, ModifyHealth.DAMAGE, Team.1, 80, 1, 1, DynamicEffect.SIGMA
        createProjectile(Projectile.BASTION_TACTICAL_GRENADE, eventPlayer.botA, Vector.UP, vect(random.uniform(-0.9, 0.9), random.uniform(1, 2), 1), Relativity.TO_PLAYER, ModifyHealth.DAMAGE, Team.1, 80, 1, 1, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, 0, 24, 6, 0, 15, 110)
        wait(0.24)
        createProjectile(Projectile.BASTION_TACTICAL_GRENADE, eventPlayer.botB, Vector.UP, vect(random.uniform(-0.9, 0.9), random.uniform(1, 2), 1), Relativity.TO_PLAYER, ModifyHealth.DAMAGE, Team.1, 80, 1, 1, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, 0, 24, 6, 0, 15, 110)


rule "grab":
    @Condition obj != -1
    @Condition 3 in threatList == true

    wait(0.096)
    #grabplayer changes between player, position, list of players
    createBeam(getAllPlayers(), Beam.MOIRA_GRASP_CONNECTED, nipman.cacheA, grabLeft, Color.TEAM_1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createBeam(getAllPlayers(), Beam.MOIRA_GRASP_CONNECTED, nipman.cacheB, grabRight, Color.TEAM_1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.SIGMA_HYPERSPHERE, null, grabLeft, Vector.DOWN, 0.05, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.SIGMA_HYPERSPHERE, null, grabRight, Vector.DOWN, 0.05, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    threatFx.append(getLastCreatedEntity())
    createEffect(getAllPlayers() if grabLeftPlayer.z != null else null, Effect.BAD_AURA, Color.TEAM_2, grabLeftPlayer, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createEffect(getAllPlayers() if grabRightPlayer.z != null else null, Effect.BAD_AURA, Color.TEAM_2, grabRightPlayer, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    while obj != -1:
        grabLeft = nipman.cacheA
        grabRight = nipman.cacheB
        #select
        grabLeftPlayer = random.choice([player for player in getLivingPlayers(Team.1) if player.getPosition().x > 0])
        grabRightPlayer = random.choice([player for player in getLivingPlayers(Team.1) if player.getPosition().x < 0])
        #attack
        if entityExists(grabLeftPlayer):
            grabLeftPlayer = grabLeftPlayer.getPosition() + Vector.UP * 0.5
            chaseOverTime(grabLeft, grabLeftPlayer, 4, ChaseTimeReeval.NONE)
        if entityExists(grabRightPlayer) and grabLeftPlayer != grabRightPlayer:
            grabRightPlayer = grabRightPlayer.getPosition() + Vector.UP * 0.5
            chaseOverTime(grabRight, grabRightPlayer, 4, ChaseTimeReeval.NONE)
        wait(4)
        stopChasingVariable(grabLeft)
        stopChasingVariable(grabRight)
        if obj == -1:
            return
        #check landing
        grabLeftPlayer = [player for player in getPlayersInRadius(grabLeft, 2, Team.1) if player.isAlive() and player.hasSpawned()]
        grabLeftPlayer.startForcingPosition(grabLeft)
        smallMessage(grabLeftPlayer, "{0} you were grabbed!".format(abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE)))
        playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION_SOUND, Color.TEAM_2, grabLeft, 20)
        playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION, Color.TEAM_2, grabLeft, 20)
        grabRightPlayer = [player for player in getPlayersInRadius(grabRight, 2, Team.1) if player.isAlive() and player.hasSpawned()]
        grabRightPlayer.startForcingPosition(grabRight)
        smallMessage(grabRightPlayer, "{0} you were grabbed!".format(abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE)))
        playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION_SOUND, Color.TEAM_2, grabRight, 20)
        playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION, Color.TEAM_2, grabRight, 20)
        #playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION_SOUND, Color.TEAM_2, grabRight, 20)
        #playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION, Color.TEAM_2, grabRight, 1)
        #else:
        #grabRightPlayer = null
        #pull
        chaseOverTime(grabLeft, nipman.cacheA, 1.2, ChaseTimeReeval.NONE)
        chaseOverTime(grabRight, nipman.cacheB, 1.2, ChaseTimeReeval.NONE)
        grabLeftPlayer.startDamageOverTime(null, 1.2, 10)
        grabRightPlayer.startDamageOverTime(null, 1.2, 10)
        wait(1.2)
        stopChasingVariable(grabLeft)
        stopChasingVariable(grabRight)
        wait(0.08)
        grabLeftPlayer.stopForcingPosition()
        grabRightPlayer.stopForcingPosition()


rule "cage":
    @Event eachPlayer
    @Team 1
    @Condition obj != -1
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.hasSpawned() == true
    @Condition 5 in threatList == true

    #threatFx.append(getLastCreatedEntity())
    #wait()
    wait(0.16)
    createBeam(getAllPlayers(), Beam.JUNKRAT_TRAP_CHAIN, evalOnce(nipman.cacheA if eventPlayer.getSlot() % 2 == 0 else nipman.cacheB), eventPlayer, Color.TEAM_1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    wait(eventPlayer.getSlot() * 0.016)
    while obj != -1:
        if eventPlayer.getPosition().z < -5 and not eventPlayer.isCrouching():
            eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), nipman.cacheA if eventPlayer.getSlot() % 2 == 0 else nipman.cacheB), 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.36)


rule "cage boundary":
    @Condition obj != -1
    @Condition 5 in threatList == true

    #threatFx.append(getLastCreatedEntity())
    #wait()
    createBeam(getAllPlayers(), Beam.BAD, vect(-20, 0.1, -5), vect(20, 0.1, -5), Color.ROSE, EffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())


rule "milk wall + collision":
    @Condition obj != -1
    @Condition 10 in threatList == true

    wait(0.32)
    wallEffects = []
    while obj != -1:
        wallPos = vect(random.uniform(-20, 6.8), 0, 20)
        for wallI in range(54):
            createProjectile(Projectile.ECHO_STICKY_BOMB, nipman, nipman.cacheA if wallI % 2 == 0 else nipman.cacheB, directionTowards(nipman.cacheA if wallI % 2 == 0 else nipman.cacheB, wallPos + vect(wallI % 6, floor(wallI / 6), 0) * 2.2), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 0, 0, 0.1, DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR, DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR_SOUND, 0.1, 50, (magnitude(((nipman.cacheA if wallI % 2 == 0 else nipman.cacheB) - wallPos) + vect(wallI % 6, floor(wallI / 6), 0) * 2.2)) / 120)
            wait(0.144)
            createProjectileEffect(getAllPlayers(), Projectile.ECHO_STICKY_BOMB, null, wallPos + evalOnce(vect(wallI % 6, floor(wallI / 6), 0) * 2.2), Vector.BACKWARD, 0.1, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
            wallEffects.append(getLastCreatedEntity())
        for wallI in range(3):
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.TEAM_2, wallPos, 800)
            wait((3 - wallI) * 0.16)
        chaseOverTime(wallPos, wallPos + 90 * Vector.BACKWARD, 3.5, ChaseTimeReeval.NONE)
        #collision
        for wallI in range(25):
            wait(0.096)
            nipman.mobTarget = [player for player in getLivingPlayers(Team.1) if abs(player.getPosition().z - wallPos.z) < 1.3 and player.getPosition().x > wallPos.x and player.getPosition().x < wallPos.x + 13.2 and player.getPosition().y <= 19.8]
            #nipman.mobTarget.applyImpulse(Vector.BACKWARD + Vector.UP * 0.1, 100, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
            nipman.mobTarget.setStatusEffect(null, Status.KNOCKED_DOWN, 1.5)
            #multihits except when it doesn't
            damage(nipman.mobTarget, null, 90)
        #and p.getPosition().x > wallPos.x
        #and p.getPosition().x < wallPos.x + WallWidth * WallGap
        #and p.getPosition().y <= 60 / WallWidth].applyImpulse(Vector.BACKWARD + Vector.UP * 0.3, 360, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        #wait(1)
        for wallI in range(len(wallEffects)):
            destroyEffect(wallEffects[wallI])
            wait()
        destroyEffect(wallEffects)
        wallEffects = []
        stopChasingVariable(wallPos)


rule "rain":
    @Condition obj != -1
    @Condition 7 in threatList == true

    wait(0.224)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GRAY, Vector.UP * 30, 40, EffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    for rainVar in range(5):
        createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.PURPLE, vect(sin(getTotalTimeElapsed() / 3) * 20 * (evalOnce(rainVar % 2 * 2 - 1)), 0, evalOnce(16 - 8 * rainVar)) + Vector.DOWN * 18, 4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        threatFx.append(getLastCreatedEntity())
        createEffect(getAllPlayers(), Effect.RING, Color.TEAM_2, vect(sin(getTotalTimeElapsed() / 3) * 20 * (evalOnce(rainVar % 2 * 2 - 1)), 0, evalOnce(16 - 8 * rainVar)), 4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        threatFx.append(getLastCreatedEntity())
    while obj != -1:
        for rainVar in range(5):
            createProjectile(Projectile.ECHO_STICKY_BOMB, null, nipman.cacheA if rainVar % 2 == 0 else nipman.cacheB, directionTowards(nipman.getEyePosition(), vect(random.uniform(-10, 10), 30, random.uniform(-15, 19))), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 1, 1, 0, DynamicEffect.BRIGITTE_WHIP_SHOT_HEAL_AREA, DynamicEffect.BRIGITTE_WHIP_SHOT_HEAL_AREA_SOUND, 0.05, 30, 1, 0, 0, -5)
            wait(0.048)
            createProjectile(Projectile.MEI_ICICLE, null, vect(sin(getTotalTimeElapsed() / 3) * 20 * (evalOnce(rainVar % 2 * 2 - 1)), 0, evalOnce(16 - 8 * rainVar)) + Vector.UP * 30 + vect(random.uniform(-0.5, 0.5), 0, random.uniform(-0.5, 0.5)), Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 25, 1, 3.2, DynamicEffect.BRIGITTE_REPAIR_PACK_IMPACT, DynamicEffect.BRIGITTE_WHIP_SHOT_HEAL_AREA_SOUND, 0.07, 200, 1, 3)


rule "twister":
    @Condition obj != -1
    @Condition 6 in threatList == true

    wait(0.192)
    for twisterCache in range(3, 12, 2):
        #smallMessage(getAllPlayers(), i)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.GRAY, Vector.UP * (evalOnce(twisterCache * 2.5 - 6)) + twisterPos, evalOnce(twisterCache * 0.7), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        threatFx.append(getLastCreatedEntity())
        createProjectileEffect(getAllPlayers(), Projectile.ECHO_STICKY_BOMB, null, twisterPos + (evalOnce(twisterCache) * 0.8 * (vect(cos(getTotalTimeElapsed() * 7 + evalOnce(twisterCache)), 1 + 0.4 * sin(getTotalTimeElapsed()), sin(getTotalTimeElapsed() * 7 + evalOnce(twisterCache))))), Vector.UP, evalOnce(random.uniform(0, 0.05)), ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
        threatFx.append(getLastCreatedEntity())
        createProjectileEffect(getAllPlayers(), Projectile.ZARYA_PARTICLE_CANNON, null, twisterPos + (evalOnce(twisterCache) * 0.8 * (vect(cos(getTotalTimeElapsed() * 9 + evalOnce(twisterCache)), 1.3 + 0.4 * cos(getTotalTimeElapsed()), sin(getTotalTimeElapsed() * 9 + evalOnce(twisterCache))))), Vector.UP, evalOnce(random.uniform(0, 0.05)), ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
        threatFx.append(getLastCreatedEntity())
        wait()
    createEffect(getAllPlayers(), Effect.RING, Color.TEAM_2, twisterPos, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GRAY, twisterPos + 24 * Vector.UP, 30, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.ZARYA_PARTICLE_CANNON, null, twisterPos + 7 * Vector.DOWN, Vector.DOWN, 1, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    threatFx.append(getLastCreatedEntity())
    twisterPos = nipman.cacheA * vect(1, 0, 1)
    chaseAtRate(twisterPos, sorted([player for player in getLivingPlayers(Team.1) if player.hasSpawned()], lambda i_: distance(i_, twisterPos))[0].getPosition() * vect(1, 0, 1), 1.6)
    while obj != -1:
        twisterCache = [player for player in getLivingPlayers(Team.1) if distance(player.getPosition() * vect(1, 0, 1), twisterPos) < 5 and player.getPosition().y < 25]
        twisterCache.applyImpulse(Vector.UP, 7, Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
        damage(twisterCache, null, 35)
        wait(0.24)


rule "sun loop":
    @Condition obj != -1
    @Condition 17 in threatList == true

    while obj != -1:
        wait(0.64)
        threatSuns.setInvisibility(Invis.ENEMIES)
        threatSuns.setStatusEffect(null, Status.PHASED_OUT, 99999)
        threatSuns.startForcingName("sunkissed nips")
        threatSuns.setProjectileSpeed(30)
        threatSuns.disableNameplatesFor(getAllPlayers())
        threatSuns.setDamageDealt(max(20, 120 / len(threatSuns)))
        threatSuns.startModifyingVoicelinePitch(0, false)
        threatSuns.setUltCharge(100)
        wait(4)
        threatSuns.forceButtonPress(Button.ULTIMATE)
        for isun in range(len(threatSuns)):
            if not entityExists(threatSuns[isun]):
                threatSuns.remove(threatSuns[isun])
            else:
                threatSuns[isun].setFacing(directionTowards(threatSuns[isun].getEyePosition(), random.choice(getLivingPlayers(Team.1)).getPosition()), Relativity.TO_WORLD)
            wait(0.064)
        #threatSuns.slice(0,len(threatSuns)/2).setFacing(, Relativity.TO_PLAYER)
        #threatSuns.slice(len(threatSuns/2),len(threatSuns)).setFacing(directionTowards(RightNip + Vector.UP * 5, random.choice(getLivingPlayers(Team.1)).getEyePosition()), Relativity.TO_WORLD)
        wait(2)
        threatSuns.forceButtonPress(Button.PRIMARY_FIRE)


rule "gravitatas":
    @Condition obj != -1
    @Condition 16 in threatList == true

    createProjectileEffect(getAllPlayers(), Projectile.ZARYA_GRAVITON, null, nipman.cacheA, Vector.BACKWARD, 0.27, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.ZARYA_GRAVITON, null, nipman.cacheB, Vector.BACKWARD, 0.27, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    #there was an issue with players getting stuck on the bottom rocks opposite mauga
    #getPlayers(Team.1).startAcceleration(Vector.FORWARD + 0.15 * Vector.DOWN, 80, 15, Relativity.TO_WORLD, AccelReeval.NONE)
    while obj != -1:
        getPlayers(Team.1).setGravity(300)
        wait(6)


rule "boolet":
    @Condition obj != -1
    @Condition 15 in threatList == true

    wait(0.48)
    while obj != -1:
        createProjectile(Projectile.RAMATTRA_RAVENOUS_VORTEX_SPHERE, null, nipman.cacheA, vect(sin(getTotalTimeElapsed() * 2) * 0.5, cos(getTotalTimeElapsed()) * 0.1 - 0.2, -1), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 130, 1, 0, DynamicEffect.DVA_MICRO_MISSILES_EXPLOSION, DynamicEffect.DVA_MICRO_MISSILES_EXPLOSION_SOUND, 0.04, 14, 4)
        wait(0.08)
        createProjectile(Projectile.MERCY_CADUCEUS_BLASTER, null, nipman.cacheB, vect(sin(getTotalTimeElapsed() * 2) * -0.5, cos(getTotalTimeElapsed()) * -0.1 - 0.2, -1), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 130, 1, 0, DynamicEffect.DVA_MICRO_MISSILES_EXPLOSION, DynamicEffect.DVA_MICRO_MISSILES_EXPLOSION_SOUND, 0.1, 14, 4)
        wait(0.08)


rule "laser":
    @Condition obj != -1
    @Condition 18 in threatList == true

    wait(0.576)
    area1 = vect(10, 0, 20)
    area2 = vect(-10, 0, 20)
    createBeam(getAllPlayers(), Beam.OMNIC_SLICER, nipman.cacheA, area1, Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createBeam(getAllPlayers(), Beam.OMNIC_SLICER, nipman.cacheB, area2, Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.ZARYA_PARTICLE_CANNON, null, area1 + 4 * Vector.DOWN, Vector.DOWN, 0.55, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.ZARYA_PARTICLE_CANNON, null, area2 + 4 * Vector.DOWN, Vector.DOWN, 0.55, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    threatFx.append(getLastCreatedEntity())
    chaseAtRate(area1, sorted([player for player in getLivingPlayers(Team.1) if player.hasSpawned()], lambda i_: distance(i_, area1))[0].getPosition() * vect(1, 0, 1), 0.8)
    chaseAtRate(area2, sorted([player for player in getLivingPlayers(Team.1) if player.hasSpawned()], lambda i_: distance(i_, area2))[0].getPosition() * vect(1, 0, 1), 0.8)
    while obj != -1:
        createProjectile(Projectile.RAMATTRA_RAVENOUS_VORTEX_SPHERE, nipman, area1 + 0.5 * Vector.UP, Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 20, 1, 3, DynamicEffect.ZARYA_PARTICLE_CANNON_EXPLOSION, DynamicEffect.ORISA_HALT_IMPLOSION_SOUND, 0, getTotalTimeElapsed(), 10, 55)
        wait(0.08)
        createProjectile(Projectile.RAMATTRA_RAVENOUS_VORTEX_SPHERE, nipman, area2 + 0.5 * Vector.UP, Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 20, 1, 3, DynamicEffect.ZARYA_PARTICLE_CANNON_EXPLOSION, DynamicEffect.ORISA_HALT_IMPLOSION_SOUND, 0, getTotalTimeElapsed(), 3, 55)
        wait(0.8)


rule "discharge":
    @Event eachPlayer
    @Hero mauga
    @Condition (eventPlayer == nipman or eventPlayer in objPos) == true
    @Condition obj != -1
    @Condition 12 in threatList == true

    wait(0.384)
    createDummy(Hero.TORBJORN, Team.2, -1, Vector.UP, Vector.BACKWARD)
    eventPlayer.botA = getLastCreatedEntity()
    threatLactaters.append(getLastCreatedEntity())
    getLastCreatedEntity().startForcingPosition(eventPlayer.cacheA, false)
    createDummy(Hero.TORBJORN, Team.2, -1, Vector.UP, Vector.BACKWARD)
    eventPlayer.botB = getLastCreatedEntity()
    threatLactaters.append(getLastCreatedEntity())
    getLastCreatedEntity().startForcingPosition(eventPlayer.cacheB, false)
    wait(0.36)
    threatLactaters.setWeapon(2)
    threatLactaters.startScalingSize(0.3, false)
    threatLactaters.setStatusEffect(null, Status.PHASED_OUT, 9999)
    threatLactaters.setInvisibility(Invis.ALL)
    threatLactaters.startForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.botA.startFacing(evalOnce(directionTowards(eventPlayer.cacheA * vect(1, 0, 1), Vector.LEFT * 20)) * (sin(getTotalTimeElapsed() * 33)) + (0.5 * Vector.UP * (sin(getTotalTimeElapsed() * 47) + 0.5)) + eventPlayer.getFacingDirection(), 9999)
    eventPlayer.botB.startFacing(evalOnce(directionTowards(eventPlayer.cacheB * vect(1, 0, 1), Vector.LEFT * 20)) * (sin(getTotalTimeElapsed() * 33)) + (0.5 * Vector.UP * (sin(getTotalTimeElapsed() * 47) + 0.5)) + eventPlayer.getFacingDirection(), 9999)
    #eventPlayer.botB.startFacing(worldVector(vect(sin(getTotalTimeElapsed() * 33)*0.45, sin(getTotalTimeElapsed() * 47)*0.32 - 0.09, -1), eventPlayer, Transform.ROTATION) + eventPlayer.getFacingDirection() * 3, 50, Relativity.TO_WORLD, FacingReeval.DIRECTION_A
    wait(0.36)
    threatLactaters.startModifyingVoicelinePitch(1 + 0.5 * (sin(getTotalTimeElapsed() * 2)))
    threatLactaters.startForcingName("overheating glands")
    threatLactaters.disableNameplatesFor(getAllPlayers())


rule "everybody discharge":
    @Condition obj != -1
    @Condition 12 in threatList == true

    while 12 in threatList:
        wait(10)
        threatLactaters.setUltCharge(100)
        threatLactaters.setDamageDealt(80 / len(threatLactaters))
        threatLactaters.disableNameplatesFor(getAllPlayers())
        wait(0.12)
        threatLactaters.forceButtonPress(Button.ULTIMATE)


rule "heal milk":
    @Event eachPlayer
    @Hero mauga
    @Condition obj != -1
    @Condition 11 in threatList == true
    #sure let the niplets also do this
    @Condition eventPlayer.isAlive() == true

    createProjectileEffect(getAllPlayers(), Projectile.MOIRA_HEAL_ORB, null, eventPlayer.cacheA, eventPlayer.getFacingDirection(), 0, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.MOIRA_HEAL_ORB, null, eventPlayer.cacheB, eventPlayer.getFacingDirection(), 0, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    while obj != -1 and eventPlayer.isAlive():
        wait(0.8)
        createHomingProjectile(Projectile.ECHO_STICKY_BOMB, eventPlayer, eventPlayer.cacheA + eventPlayer.getFacingDirection() * 2, eventPlayer.getFacingDirection(), Relativity.TO_WORLD, ModifyHealth.HEAL, Team.2, 20, 1, 1, DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION, DynamicEffect.BAPTISTE_BIOTIC_LAUNCHER_EXPLOSION_SOUND, 0.05, 60, 10, 0, random.choice(objPos.exclude(eventPlayer) if obj == 1 else mobs))
        createHomingProjectile(Projectile.ECHO_STICKY_BOMB, eventPlayer, eventPlayer.cacheB + eventPlayer.getFacingDirection() * 2, eventPlayer.getFacingDirection(), Relativity.TO_WORLD, ModifyHealth.HEAL, Team.2, 20, 1, 1, DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION, DynamicEffect.BAPTISTE_BIOTIC_LAUNCHER_EXPLOSION_SOUND, 0.05, 60, 10, 0, random.choice(objPos.exclude(eventPlayer) if obj == 1 else mobs))


rule "nuke":
    @Condition obj != -1
    @Condition 8 in threatList == true

    wait(0.256)
    #debug
    #createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.ROSE, missilePos, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    while obj != -1:
        missileFx = []
        missilePos = vect(0, 1, 20)
        chaseAtRate(missilePos, sorted([player for player in getLivingPlayers(Team.1) if player.hasSpawned()], lambda i_: distance(i_, missilePos))[0].getPosition() * vect(1, 0, 1) + Vector.UP, 4)
        #chaser
        createProjectileEffect(getAllPlayers(), Projectile.ZARYA_GRAVITON, null, missilePos, Vector.UP, 0.1, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
        missileFx.append(getLastCreatedEntity())
        wait()
        #closest player check, can't use wait until in case rule must break
        while missileFx != []:
            if obj == -1:
                for missileTemp in range(len(missileFx)):
                    destroyEffect(missileFx[missileTemp])
                return
            #probably a bit more optimal since this stops checking on the first player found, instead of checking all players in radius
            for missileTemp in range(getNumberOfLivingPlayers(Team.1)):
                if getLivingPlayers(Team.1)[missileTemp].hasSpawned() and distance(getLivingPlayers(Team.1)[missileTemp].getPosition(), missilePos) < 3:
                    playEffect(getAllPlayers(), DynamicEffect.ORISA_HALT_IMPLOSION_SOUND, Color.TEAM_2, missilePos, 100)
                    destroyEffect(missileFx[0])
                    missileFx = []
                    break
            wait(0.24)
        stopChasingVariable(missilePos)
        missilePos -= Vector.UP
        createProjectileEffect(getAllPlayers(), Projectile.ZARYA_GRAVITON, null, missilePos + Vector.UP, Vector.UP, 0.1 + (0.1 * (getTotalTimeElapsed() - missileTemp)), ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
        missileFx.append(getLastCreatedEntity())
        wait()
        missileTemp = getTotalTimeElapsed()
        wait(3)
        #deto
        if obj == -1:
            for missileTemp in range(len(missileFx)):
                destroyEffect(missileFx[missileTemp])
            return
        createProjectile(Projectile.PHARAH_ROCKET, nipman, nipman.cacheA, directionTowards(nipman.cacheA, missilePos + Vector.UP * 2), Relativity.TO_WORLD, ModifyHealth.HEAL, Team.1, 0, 0, 0, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, 1, 100, 0.5, 70)
        createProjectile(Projectile.PHARAH_ROCKET, nipman, nipman.cacheB, directionTowards(nipman.cacheB, missilePos + Vector.UP * 2), Relativity.TO_WORLD, ModifyHealth.HEAL, Team.1, 0, 0, 0, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, 1, 100, 0.5, 70)
        wait(0.012 * distance(nipman.cacheA, missilePos))
        #playEffect(getAllPlayers(), DynamicEffect.HANZO_SONIC_ARROW_INITIAL_PULSE, Color.TEAM_2, missilePos, 1)
        #playEffect(getAllPlayers(), DynamicEffect.LUCIO_SOUND_BARRIER_CAST, Color.TEAM_2, missilePos, 1)
        playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, Color.TEAM_2, missilePos, 1)
        playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, Color.TEAM_2, missilePos, 400)
        destroyEffect(missileFx[0])
        missileFx = []
        missileTemp = getTotalTimeElapsed()
        wait()
        createProjectileEffect(getAllPlayers(), Projectile.ZARYA_PARTICLE_CANNON, null, missilePos + Vector.DOWN * 10, Vector.UP, 0.8, ProjectileEffectReeval.VISIBILITY)
        missileFx.append(getLastCreatedEntity())
        createEffect(getAllPlayers(), Effect.RING, Color.TEAM_2, missilePos, 9, EffectReeval.VISIBILITY)
        missileFx.append(getLastCreatedEntity())
        createBeam(getAllPlayers(), Beam.OMNIC_SLICER, missilePos, missilePos + ((min(16, 20 * (getTotalTimeElapsed() - missileTemp))) * Vector.UP), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        missileFx.append(getLastCreatedEntity())
        createBeam(getAllPlayers(), Beam.OMNIC_SLICER, missilePos + Vector.UP * 12, missilePos + Vector.UP * 12 + ((min(4, max(0.01, 20 * (getTotalTimeElapsed() - missileTemp - 0.6)))) * Vector.LEFT), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        missileFx.append(getLastCreatedEntity())
        createBeam(getAllPlayers(), Beam.OMNIC_SLICER, missilePos + Vector.UP * 12, missilePos + Vector.UP * 12 + ((min(4, max(0.01, 20 * (getTotalTimeElapsed() - missileTemp - 0.6)))) * Vector.RIGHT), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        missileFx.append(getLastCreatedEntity())
        #start damage while eva anim plays
        for missileTemp in range(20):
            damage(getPlayersInRadius(missilePos, 9, Team.1), null, 30)
            getPlayersInRadius(missilePos, 9, Team.1).setStatusEffect(null, Status.BURNING, 0.16)
            wait(0.112)
        for missileTemp in range(2, len(missileFx)):
            destroyEffect(missileFx[missileTemp])
        missileFx = missileFx.slice(0, 2)
        #dot
        for missileTemp in range(50):
            damage(getPlayersInRadius(missilePos, 9, Team.1), null, 30)
            getPlayersInRadius(missilePos, 9, Team.1).setStatusEffect(null, Status.BURNING, 0.16)
            wait(0.112)
        for missileTemp in range(len(missileFx)):
            destroyEffect(missileFx[missileTemp])
        missileFx = []


rule "make ice":
    @Condition obj != -1
    @Condition 2 in threatList == true

    #createProjectileEffect(getAllPlayers(), Projectile.MEI_ICICLE, null, threatVar1, directionTowards(threatVar1, target1), 0.5, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    #threatFx.append(getLastCreatedEntity())
    while obj != -1:
        wait(9)
        target1 = random.choice(getLivingPlayers(Team.1))
        target2 = random.choice(getLivingPlayers(Team.1))
        createProjectile(Projectile.MEI_ICICLE, nipman, nipman.cacheA, directionTowards(nipman.cacheA, target1), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 70, 1, 1, DynamicEffect.TRACER_RECALL_REAPPEAR, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, 0.2, 20, 10)
        wait(0.36)
        createProjectile(Projectile.MEI_ICICLE, nipman, nipman.cacheB, directionTowards(nipman.cacheB, target2), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 70, 1, 1, DynamicEffect.TRACER_RECALL_REAPPEAR, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, 0.2, 20, 10)


rule "ice impact":
    @Event playerTookDamage
    @Team 1
    @Condition eventAbility == null
    @Condition attacker == nipman
    @Condition 2 in threatList == true

    victim.setStatusEffect(nipman, Status.FROZEN, 1.2)


rule "ice effect init":
    @Event eachPlayer
    @Hero mauga
    @Condition obj != -1
    @Condition 2 in threatList == true
    @Condition (eventPlayer == nipman or eventPlayer in objPos) == true

    waitUntil(eventPlayer.cacheA != null, 3)
    createProjectileEffect(getAllPlayers(), Projectile.MEI_ICICLE, null, eventPlayer.cacheA, eventPlayer.getFacingDirection(), 0.5, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers(), Projectile.MEI_ICICLE, null, eventPlayer.cacheB, eventPlayer.getFacingDirection(), 0.5, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())


rule "dupe ice":
    @Condition obj == 1
    @Condition 2 in threatList == true

    while obj != -1:
        wait(9)
        #share target
        #must be owned by main mauga to apply freeze
        createProjectile(Projectile.MEI_ICICLE, nipman, (objPos[getTotalTimeElapsed() % len(objPos)]).cacheA, directionTowards((objPos[getTotalTimeElapsed() % len(objPos)]).cacheA, target1), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 20, 1, 1, DynamicEffect.TRACER_RECALL_REAPPEAR, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, 0.2, 20, 10)
        wait(0.36)
        createProjectile(Projectile.MEI_ICICLE, nipman, (objPos[getTotalTimeElapsed() % len(objPos)]).cacheB, directionTowards((objPos[getTotalTimeElapsed() % len(objPos)]).cacheB, target2), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.1, 20, 1, 1, DynamicEffect.TRACER_RECALL_REAPPEAR, DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, 0.2, 20, 10)


rule "dupe boolet":
    @Event eachPlayer
    @Hero mauga
    @Condition obj == 1
    @Condition 15 in threatList == true
    @Condition eventPlayer in objPos == true

    #print("bullet dupe run")
    while obj == 1:
        wait(0.36)
        #smallMessage(hostPlayer, eventPlayer.smallRNip)
        createProjectile(Projectile.MERCY_CADUCEUS_BLASTER, eventPlayer, vect(5.4, 20.565, 3.99), vect(sin(getTotalTimeElapsed()) * -12, -0.5, 9), Relativity.TO_PLAYER, ModifyHealth.DAMAGE, Team.1, 50, 1, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.ASHE_DYNAMITE_EXPLOSION_SOUND, 0.03, 20, 3)
        createProjectile(Projectile.RAMATTRA_RAVENOUS_VORTEX_SPHERE, eventPlayer, vect(-2.055, 20.67, 6.99), vect(sin(getTotalTimeElapsed()) * 12, -0.5, 9), Relativity.TO_PLAYER, ModifyHealth.DAMAGE, Team.1, 50, 1, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.ASHE_DYNAMITE_EXPLOSION_SOUND, 0.03, 20, 3)


rule "dupe + normal sniper":
    @Event eachPlayer
    @Hero mauga
    @Condition obj != -1
    @Condition 13 in threatList == true
    @Condition (eventPlayer.cacheA == nipman.cacheA or eventPlayer in objPos) == true

    #wait(0.048 * objPos.index(eventPlayer))
    createDummy(Hero.WIDOWMAKER, Team.2, -1, Vector.UP, eventPlayer.getFacingDirection())
    eventPlayer.botA = getLastCreatedEntity()
    eventPlayer.botA.startFacing(directionTowards(eventPlayer.botA.getEyePosition(), eventPlayer.botA.mobTarget.getEyePosition()), 4)
    threatSnipers.append(eventPlayer.botA)
    createBeam(getAllPlayers(), Beam.TORBJORN_TURRET_SIGHT, eventPlayer.botA.getEyePosition(), eventPlayer.botA.getEyePosition() + 80 * eventPlayer.botA.getFacingDirection(), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    createDummy(Hero.WIDOWMAKER, Team.2, -1, Vector.UP, Vector.BACKWARD)
    eventPlayer.botB = getLastCreatedEntity()
    eventPlayer.botB.startFacing(directionTowards(eventPlayer.botB.getEyePosition(), eventPlayer.botB.mobTarget.getEyePosition()), 4)
    threatSnipers.append(eventPlayer.botB)
    createBeam(getAllPlayers(), Beam.TORBJORN_TURRET_SIGHT, eventPlayer.botB.getEyePosition(), eventPlayer.botB.getEyePosition() + 80 * eventPlayer.botB.getFacingDirection(), Color.TEAM_2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    threatFx.append(getLastCreatedEntity())
    threatSnipers.startForcingButton(Button.SECONDARY_FIRE)
    threatSnipers.disableNameplatesFor(getAllPlayers())
    threatSnipers.startForcingName("s-nip-ers")
    threatSnipers.setStatusEffect(null, Status.PHASED_OUT, 9999)
    threatSnipers.startScalingSize(0.1, false)
    wait(0.48)
    eventPlayer.botB.startForcingPosition(eventPlayer.cacheB, false)
    eventPlayer.botA.startForcingPosition(eventPlayer.cacheA, false)


rule "sniper change target":
    @Event eachPlayer
    @Team 2
    @Hero widowmaker

    while obj != -1:
        wait(4)
        eventPlayer.mobTarget = random.choice(getLivingPlayers(Team.1))
        eventPlayer.setAmmo(0, 9999)


rule "sniper fire":
    @Condition obj != -1
    @Condition 13 in threatList == true

    wait(2)
    threatSnipers.setDamageDealt(60 / getNumberOfHeroes(Hero.WIDOWMAKER, Team.2))
    threatSnipers.forceButtonPress(Button.PRIMARY_FIRE)
    if ruleCondition:
        loop()


rule "init suns":
    @Event eachPlayer
    @Hero mauga
    @Condition obj != -1
    @Condition 17 in threatList == true
    @Condition (eventPlayer.cacheA == nipman.cacheA or eventPlayer in objPos) == true

    createDummy(Hero.ILLARI, Team.2, -1, eventPlayer.cacheA, Vector.DOWN)
    threatSuns.append(getLastCreatedEntity())
    eventPlayer.botA = getLastCreatedEntity()
    createDummy(Hero.ILLARI, Team.2, -1, eventPlayer.cacheB, Vector.DOWN)
    threatSuns.append(getLastCreatedEntity())
    eventPlayer.botB = getLastCreatedEntity()
    eventPlayer.botA.startForcingPosition(eventPlayer.cacheA, false)
    eventPlayer.botB.startForcingPosition(eventPlayer.cacheB, false)
    wait(0.64)
    #eventPlayer.threatDecor = []
    createProjectileEffect(getAllPlayers() if 17 in threatList else [], Projectile.REINHARDT_FIRE_STRIKE, null, eventPlayer.cacheA, eventPlayer.getFacingDirection(), 0, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())
    createProjectileEffect(getAllPlayers() if 17 in threatList else [], Projectile.REINHARDT_FIRE_STRIKE, null, eventPlayer.cacheB, eventPlayer.getFacingDirection(), 0.02, ProjectileEffectReeval.VISIBILITY)
    threatFx.append(getLastCreatedEntity())


rule "missing mauga":
    @Condition obj == 1
    @Condition (all([not entityExists(player) for player in objPos])) == true

    wait(2, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), "something went wrong. skipping phase...")
    objProg = objGoal


rule "NO BOTS?":
    #slendy is also a mob
    @Condition obj == 2
    @Condition getNumberOfPlayers(Team.2) < 8

    wait(3, Wait.ABORT_WHEN_FALSE)
    for i in range(len(mobs)):
        destroyDummy(mobs[i].getTeam(), mobs[i].getSlot())
    mobs = []
    mobsInit()


rule "more maugas":
    @Condition obj == 1

    #wait(0.016 * THREATS.MORE)
    objPos = []
    #need to keep them far away or the fingers block the weak spots
    createDummy(Hero.MAUGA, Team.2, -1, Vector.UP * nipman.getMaxHealth(), Vector.LEFT)
    objPos.append(getLastCreatedEntity())
    createDummy(Hero.MAUGA, Team.2, -1, Vector.UP * nipman.getMaxHealth(), Vector.RIGHT)
    objPos.append(getLastCreatedEntity())
    createDummy(Hero.MAUGA, Team.2, -1, Vector.UP * nipman.getMaxHealth(), Vector.FORWARD)
    objPos.append(getLastCreatedEntity())
    objPos.setGravity(0)
    wait()
    objPos.startScalingSize(15, false)
    objPos.disablePlayerCollision()
    objPos.disableEnvironmentCollision(true)
    objPos.setKnockbackReceived(0)
    objPos.setMaxHealth(abs(2500))
    wait(0.12)
    heal(objPos, null, 99999)
    objPos.setHealingDealt(0)
    for iMores in range(3):
        wait()
        objPos[iMores].startForcingPosition(([vect(-31, -18, 0), vect(31, -18, 0), vect(0, -18, -31)])[iMores], false)
        #LOAD BEARING WAIT. NEEDS TO BE THIS LONG AT LEAST
        wait(0.08)
        objPos[iMores].cacheA = worldVector(vect(5.4, 20.565, 3.99), objPos[iMores], Transform.ROTATION_AND_TRANSLATION)
        objPos[iMores].cacheB = worldVector(vect(-2.055, 20.67, 6.99), objPos[iMores], Transform.ROTATION_AND_TRANSLATION)
        objPos[iMores].startForcingName("mauga jr.")
        #WHY IS IT 400. IT SHOULD BE 100 BUT THAT MAKES IT WRONG evalOnce(objPos[iMores]).getNormalizedHealth() * 400
        createProgressBarInWorldText(getAllPlayers(), evalOnce(objPos[iMores]).getHealth() / evalOnce(ceil(objPos[iMores].getMaxHealth())) * 100, "{0} / {1} HP".format(ceil(evalOnce(objPos[iMores]).getHealth()), evalOnce(ceil(objPos[iMores].getMaxHealth()))), objPos[iMores].getEyePosition() + Vector.UP * 2, 1, Clip.NONE, Color.RED, Color.WHITE, ProgressWorldTextReeval.VISIBILITY_AND_VALUES)
        objPos[iMores].cacheC = getLastCreatedText()
    wait(0.8)
    objPos.setStatusEffect(null, Status.FROZEN, 99999)
    wait(0.8)
    objPos.setStatusEffect(null, Status.FROZEN, 99999)
    heal(objPos, null, 99999)


rule "miniboss":
    @Condition obj == 3

    #hero must be same as mobs for skin limit
    wait(0.64)
    createDummy(enemies[roundNo % len(enemies)], Team.2, -1, Vector.UP * 50, Vector.BACKWARD)
    objPos = getLastCreatedEntity()
    objPos.setKnockbackReceived(10)
    objPos.setMoveSpeed(40)
    objPos.startScalingSize(3, false)
    if objPos.getHero() == Hero.WINSTON:
        objPos.setDamageDealt(55)
    objPos.startForcingThrottle(1, 1, 0, 0, 0, 1)
    objPos.startForcingName("miniboss")
    objPos.startFacing(directionTowards(objPos.getPosition(), objPos.mobTarget.getPosition()), 400)
    objPos.setMaxHealth(3500 if objPos.getHero() in getTankHeroes() else 4500)
    wait(2)
    waitUntil(objPos.isOnGround(), 4)
    objPos.setStatusEffect(null, Status.KNOCKED_DOWN, 2)
    objPos.startForcingButton(Button.PRIMARY_FIRE)
    while obj == 3:
        #objPos.getNormalizedHealth()
        objProg = 1 - objPos.getHealth() / objPos.getMaxHealth()
        wait(0.24)


rule "clean bots":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer != nipman
    @Condition obj == -1

    if entityExists(eventPlayer.cacheC):
        destroyProgressBarInWorldText(eventPlayer.cacheC)
    destroyDummy(Team.2, eventPlayer.getSlot())


rule "setup & refresh forest":
    @Condition obj == 0

    wait(1.5, Wait.ABORT_WHEN_FALSE)
    for i in range(7):
        createDummy(Hero.LIFEWEAVER, Team.2, -1, Vector.UP, Vector.DOWN)
        getLastCreatedEntity().startModifyingVoicelinePitch(0.5 + i * 0.143, false)
        wait(0.032)
        if getNumberOfHeroes(Hero.LIFEWEAVER, Team.2) > 7:
            break
    getPlayersOnHero(Hero.LIFEWEAVER, Team.2).setStatusEffect(null, Status.PHASED_OUT, 9999)
    getPlayersOnHero(Hero.LIFEWEAVER, Team.2).setInvisibility(Invis.ENEMIES)
    getPlayersOnHero(Hero.LIFEWEAVER, Team.2).setHealingDealt(30)
    wait(0.96)
    while obj == 0:
        getPlayers(Team.2).setUltCharge(100)
        wait(0.08)
        getPlayersOnHero(Hero.LIFEWEAVER, Team.2).forceButtonPress(Button.ULTIMATE)
        getPlayersOnHero(Hero.LIFEWEAVER, Team.2).setFacing(Vector.DOWN, Relativity.TO_WORLD)
        wait()
        for i in range(7):
            getPlayersOnHero(Hero.LIFEWEAVER, Team.2)[i].teleport(vect(random.uniform(-18, 18), 6, random.uniform(-18, 18)))
            #while distance(objPos, getPlayersOnHero(Hero.LIFEWEAVER, Team.2)[i]) < 4:
            #getPlayersOnHero(Hero.LIFEWEAVER, Team.2)[i].teleport(vect(random.randint(-18,18),5,random.randint(-18,18)))
            #wait()
            wait()
        wait(0.08)
        getPlayersOnHero(Hero.LIFEWEAVER, Team.2).forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.55)
        getPlayersOnHero(Hero.LIFEWEAVER, Team.2).setStatusEffect(null, Status.HACKED, 0.5)
        wait(14, Wait.ABORT_WHEN_FALSE)


rule "place objective":
    @Condition obj == 4

    objPos = vect(random.randint(-13, 13), 0, random.randint(-13, 13))
    wait()
    if objPos.z < -5 and 5 in threatList:
        loop()


rule "kill/obj prog/weak spot + respawn timer":
    @Event playerDied
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer != nipman

    if eventPlayer in weakSpots:
        weakSpots.remove(eventPlayer)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR, Color.TEAM_2, eventPlayer, 1)
        playEffect(getAllPlayers(), DynamicEffect.ASHE_DYNAMITE_EXPLOSION_SOUND, Color.TEAM_2, eventPlayer, 50)
        wait(0.48)
        destroyDummy(eventPlayer.getTeam(), eventPlayer.getSlot())
        return
    heal(attacker, eventPlayer, 50)
    if 9 in threatList:
        playEffect(getAllPlayers(), DynamicEffect.MOIRA_FADE_REAPPEAR, Color.TEAM_2, eventPlayer.getPosition() + Vector.UP, 1)
        playEffect(getAllPlayers(), DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION_SOUND, Color.TEAM_2, eventPlayer.getPosition() + Vector.UP, 10)
        damage(getPlayersInRadius(eventPlayer.getPosition(), 2, Team.1, LosCheck.SURFACES_AND_ENEMY_BARRIERS), eventPlayer, 90)
    if obj == 0:
        eventPlayer.setRespawnTime(7)
        objProg += 0.5
        return
    elif obj == 2:
        objProg++
        addToTeamScore(Team.1, 1)
        setTeamScore(Team.1, 0)
        eventPlayer.setRespawnTime(2)
        return
    elif obj == 3 and eventPlayer == objPos:
        objProg = objGoal
    elif obj == 1 and eventPlayer in objPos:
        if eventPlayer == attackingClone:
            kill(weakSpots)
            destroyEffect(moreFx)
            moreFx = []
            attackingClone = null
        objProg++
        destroyDummy(eventPlayer.botA.getTeam(), eventPlayer.botA.getSlot())
        destroyDummy(eventPlayer.botB.getTeam(), eventPlayer.botB.getSlot())
        objPos.remove(eventPlayer)
        destroyProgressBarInWorldText(eventPlayer.cacheC)
        eventPlayer.disableRespawn()
        wait(1.2)
        destroyDummy(eventPlayer.getTeam(), eventPlayer.getSlot())
    eventPlayer.setRespawnTime(1.8)


rule "point":
    @Condition obj == 4

    if getPlayersInRadius(objPos, 12, Team.1) != []:
        objProg += len(getPlayersInRadius(objPos, 12, Team.1)) / getNumberOfPlayers(Team.1) * 3
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.TEAM_1, objPos, 25)
        playEffect(getAllPlayers(), DynamicEffect.WIDOWMAKER_VENOM_MINE_EXPLOSION_SOUND, Color.TEAM_1, objPos, 150)
    wait(0.64)
    if ruleCondition:
        loop()


rule "page found":
    @Event eachPlayer
    @Team 1
    @Condition obj == 0
    @Condition eventPlayer.isDummy() == false
    @Condition distance(eventPlayer, objPos) < 1.3

    smallMessage(getAllPlayers(), " {0} found a page!".format(eventPlayer))
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, objPos, 65)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.TEAM_1, objPos, 1)
    #sound
    addToTeamScore(Team.1, 1)
    setTeamScore(Team.1, 0)
    objProg++
    objPos = vect(random.randint(-18, 18), 0, random.randint(-5 if 5 in threatList else -18, 16))


rule "debug finish obj":
    @Condition "{0}".format(hostPlayer) == "OMGIDIED"
    @Condition hostPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition obj != -1
    @Disabled

    objProg = objGoal


rule "wrong mauga":
    @Event playerDealtDamage
    @Condition victim == nipman
    @Condition obj != -1

    eventPlayer.communicate(Comms.NO)
    wait(10)


rule "rez cd if not hardcore":
    wait(2)
    if isHardcore == false:
        while true:
            getPlayersOnHero(Hero.MERCY, Team.1).setAbilityCooldown(Button.ABILITY_2, 0)
            wait(1)


rule "player count balancing, freeze & nip pos check":
    while true:
        if createWorkshopSettingBool("gameplay", "increase player damage per missing player", true):
            #getPlayers(Team.1).setDamageDealt(100 + (20 * (9 - getNumberOfPlayers(Team.1))))
            getPlayers(Team.1).setDamageDealt(min(400, 900 / getNumberOfPlayers(Team.1)))
        if obj != -1:
            getPlayersOnHero(Hero.MAUGA, Team.2).setStatusEffect(null, Status.FROZEN, 99999)
            nipman.setDamageReceived(1)
        if nipman.cacheA.y <= 4:
            nipman.cacheA = vect(2.93, 8.04, 26.15)
            nipman.cacheB = vect(-7.19, 8, 30.27)
        wait(10)


rule "wake up":
    @Event eachPlayer
    @Team 2
    @Hero mauga
    @Condition eventPlayer.hasStatus(Status.KNOCKED_DOWN) == true

    eventPlayer.clearStatusEffect(Status.KNOCKED_DOWN)
    wait(0.112)
    if ruleCondition:
        loop()


rule "get up":
    @Event eachPlayer
    @Team 2
    @Hero mauga
    @Condition eventPlayer.hasStatus(Status.ASLEEP) == true

    eventPlayer.clearStatusEffect(Status.ASLEEP)
    wait(0.112)
    if ruleCondition:
        loop()


rule "anti crash on":
    @Condition antiCrashOn == false
    @Condition getServerLoad() > 235

    wait(0.8, Wait.ABORT_WHEN_FALSE)
    setSlowMotion(50)
    #smallMessage(getAllPlayers(), "server load high. anti crash on.")
    antiCrashOn = true


rule "anti crash off":
    @Condition antiCrashOn != false
    @Condition getServerLoad() < 200

    wait(0.16, Wait.ABORT_WHEN_FALSE)
    setSlowMotion(100)
    antiCrashOn = false
    if ruleCondition:
        loop()


rule "where did he go":
    @Condition entityExists(nipman) == false

    wait(2, Wait.ABORT_WHEN_FALSE)
    createDummy(Hero.MAUGA, Team.2, -1, Vector.UP, Vector.BACKWARD)
    nipman = getLastCreatedEntity()
    nipman.startForcingPosition(vect(0, -17, 35), false)
    nipman.startFacing(Vector.BACKWARD, 999, Relativity.TO_WORLD, FacingReeval.NONE)
    nipman.disablePlayerCollision()
    nipman.startScalingSize(50, false)
    upto = nipman.getMaxHealth()
    wait(0.08)
    nipman.setMaxHealth(abs(10000))
    #kill(nipman, null) # this is to fill hp and reset his pose
    nipman.setKnockbackReceived(0)
    disableGamemodeCompletion()
    disableMusic()
    disableScoring()
    heal(nipman, null, 999999)
    wait()
    nipman.setHealingReceived(0)
    wait()
    nipman.setHealth(72500)


rule "charge no breaky":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.getPosition().z > 18
    @Condition eventPlayer.getFacingDirection().z > -0.7

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    eventPlayer.cancelPrimaryAction()
    smallMessage(eventPlayer, "do not the mauga")


rule "charge no breaky more maugas":
    @Event eachPlayer
    @Hero reinhardt
    @Condition obj == 1
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition (eventPlayer.getPosition().z < -18 and eventPlayer.getFacingDirection().z < 0.7 or eventPlayer.getPosition().x < -18 and eventPlayer.getFacingDirection().x < 0.7 or eventPlayer.getPosition().x > 18 and eventPlayer.getFacingDirection().x > -0.7) == true

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    eventPlayer.cancelPrimaryAction()
    smallMessage(eventPlayer, "do not the mauga")


rule "echo charge no breaky":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.getHeroOfDuplication() == Hero.REINHARDT
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.getPosition().z > 18
    @Condition eventPlayer.getFacingDirection().z > -0.7

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    eventPlayer.cancelPrimaryAction()
    smallMessage(eventPlayer, "do not the mauga")


rule "echo charge no breaky more maugas":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.getHeroOfDuplication() == Hero.REINHARDT
    @Condition obj == 1
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition (eventPlayer.getPosition().z < -18 and eventPlayer.getFacingDirection().z < 0.7 or eventPlayer.getPosition().x < -18 and eventPlayer.getFacingDirection().x < 0.7 or eventPlayer.getPosition().x > 18 and eventPlayer.getFacingDirection().x > -0.7) == true

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    eventPlayer.cancelPrimaryAction()
    smallMessage(eventPlayer, "do not the mauga")


rule "punch no breaky":
    @Event eachPlayer
    @Hero doomfist
    @Condition obj != -1
    @Condition eventPlayer.isFiringSecondaryFire() == true
    @Condition eventPlayer.getPosition().z > 15
    @Condition eventPlayer.getFacingDirection().z > 0
    @Disabled

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    smallMessage(eventPlayer, "do not the mauga")


rule "hook no breaky":
    @Event eachPlayer
    @Hero roadhog
    @Condition obj != -1
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + 35 * eventPlayer.getFacingDirection(), getPlayers(Team.2), getPlayersOnHero(Hero.LIFEWEAVER, Team.2), true).getPlayerHit() == nipman
    @Disabled

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    smallMessage(eventPlayer, "do not the mauga")


rule "flux no breaky":
    @Event playerDealtDamage
    @Hero sigma
    @Condition eventAbility == Button.ULTIMATE
    @Condition (victim == nipman or obj == 1 and victim in objPos) == true

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    smallMessage(eventPlayer, "do not the mauga")
    wait(0.8)
    eventPlayer.setUltCharge(100)


rule "punch unbreaky":
    @Event playerDealtDamage
    @Hero doomfist
    #or (obj == OBJ.MORE and victim in objPos)
    @Condition victim == nipman
    @Condition obj != -1
    @Condition eventAbility == Button.SECONDARY_FIRE

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    victim.clearStatusEffect(Status.FROZEN)
    wait(0.48, Wait.ABORT_WHEN_FALSE)
    victim.setStatusEffect(null, Status.FROZEN, 9999)


rule "echo punch unbreaky":
    @Event playerDealtDamage
    @Hero echo
    @Condition eventPlayer.getHeroOfDuplication() == Hero.DOOMFIST
    #or (obj == OBJ.MORE and victim in objPos)
    @Condition victim == nipman
    @Condition obj != -1
    @Condition eventAbility == Button.SECONDARY_FIRE

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    victim.clearStatusEffect(Status.FROZEN)
    wait(0.48, Wait.ABORT_WHEN_FALSE)
    victim.setStatusEffect(null, Status.FROZEN, 9999)


rule "hook unbreaky":
    @Event playerDealtDamage
    @Hero roadhog
    @Condition (victim == nipman or obj == 1 and victim in objPos) == true
    @Condition obj != -1
    @Condition eventAbility == Button.ABILITY_1

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    victim.clearStatusEffect(Status.FROZEN)
    wait(0.48, Wait.ABORT_WHEN_FALSE)
    victim.setStatusEffect(null, Status.FROZEN, 9999)


rule "echo hook unbreaky":
    @Event playerDealtDamage
    @Hero echo
    @Condition eventPlayer.getHeroOfDuplication() == Hero.ROADHOG
    @Condition (victim == nipman or obj == 1 and victim in objPos) == true
    @Condition obj != -1
    @Condition eventAbility == Button.ABILITY_1

    eventPlayer.setStatusEffect(null, Status.HACKED, 0.5)
    victim.clearStatusEffect(Status.FROZEN)
    wait(0.48, Wait.ABORT_WHEN_FALSE)
    victim.setStatusEffect(null, Status.FROZEN, 9999)


rule "debug":
    @Condition hostPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Disabled

    hostPlayer.setUltCharge(100)


rule "win":
    @Event playerDied
    @Condition eventPlayer == nipman
    @Condition attacker != null

    setSlowMotion(50)
    getAllPlayers().communicate(Comms.VOICE_LINE_UP)
    wait(0.48)
    declareTeamVictory(Team.1)
    destroyAllEffects()
    setSlowMotion(100)
    wait(3)
    restartMatch()


rule "player init, cage add":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.hasSpawned() == true

    eventPlayer.disableGamemodeHud()
    eventPlayer.setAllowedHeroes(getAllHeroes())
    if isHardcore:
        getPlayers(Team.1).disableRespawn()


rule "sombra aint slick":
    @Event eachPlayer
    @Hero sombra
    @Condition (eventPlayer.isUsingUltimate() or eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.getUltCharge() == 100) == true

    startDamageModification(getPlayersOnHero(Hero.MAUGA, Team.2), eventPlayer, 2, DamageReeval.NONE)
    eventPlayer.mobTarget = getLastDamageModification()
    waitUntil(eventPlayer.getUltCharge() < 100, 2)
    stopDamageModification(eventPlayer.mobTarget)


rule "sombra was a little slick":
    @Event playerDealtDamage
    @Hero sombra
    @Condition victim == nipman
    @Condition (eventAbility == Button.ULTIMATE or eventDamage > 1000) == true
    @Disabled

    nipman.setHealth(nipman.getHealth() + eventDamage * 0.7)


rule "you are dead, not big surprise":
    @Event playerDied
    @Team 1

    addToTeamScore(Team.2, 1)
    #if getPlayersOnHero(Hero.MERCY, Team.1) == []:
    #eventPlayer.teleport(Vector.DOWN * getTotalTimeElapsed())
    if isHardcore:
        #eventPlayer.setRespawnTime(99999)
        if ([player for player in getPlayers(Team.1) if player.isAlive() and player.hasSpawned()]) == []:
            bigMessage(getAllPlayers(), "game over. all players died.")
            setSlowMotion(50)
            wait(1)
            declareTeamVictory(Team.2)
            destroyAllEffects()
            setSlowMotion(100)
            wait(3)
            restartMatch()
