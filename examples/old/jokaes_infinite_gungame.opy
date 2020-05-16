#Global variables

#!declareGlobal arenaMap1 3
#!declareGlobal arenaMap2 8
#!declareGlobal timeCounter 10
#!declareGlobal arenaMap4 19
#!declareGlobal arenaMap3 23


#Player variables

#!declarePlayer damageDisplayFinalPos 2
#!declarePlayer damageDone 3
#!declarePlayer damageDisplay 4
#!declarePlayer leaderboard 7
#!declarePlayer heroIcon 8
#!declarePlayer heroList 11
#!declarePlayer nextObjective 14
#!declarePlayer damageDisplayInitialPos 15
#!declarePlayer damageDisplayScale 18


@Rule "Disable bulit-in game mode & start timer variables {Game in progress GLOBAL}"
@Event global
if isGameInProgress():
    disableScoring()
    disableGamemodeCompletion()
    disableAnnouncer()
    disableMusic()
    pauseMatchTime()
    timeCounter = 0.001
    hudSubheader([i for i in hostPlayer if "#Jokaes" == l"#{}".format(hostPlayer)], "svr load: {0} | svr avg: {1} | svr peak: {2}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()), Position.TOP, -100, Color.LIME_GREEN, HudReeval.VISIBILITY_AND_STRING)


@Rule "Create objective, next hero HUDs {Game in progress PLAYER}"
@Event eachPlayer
if isGameInProgress():
    setObjectiveDescription(eventPlayer, l"Deal {} Damage -> {}".format(floor(eventPlayer.nextObjective - eventPlayer.damageDone), heroIcon(eventPlayer.heroList[eventPlayer.nextObjective / 1000])), HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(eventPlayer, l"Next Hero: {}".format(eventPlayer.nextObjective), Position.TOP, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


@Rule "Damage track"
@Event playerDealtDamage
if victim != attacker:
    eventPlayer.damageDone += eventDamage
    if eventPlayer.getScore() >= 9999:
        goto lbl_0
    eventPlayer.setScore(eventPlayer.damageDone)
    lbl_0:
    eventPlayer.nextObjective = (floor(eventPlayer.damageDone / 1000) + 1) * 1000
    destroyInWorldText(eventPlayer.damageDisplay)
    eventPlayer.damageDisplayInitialPos = victim.getEyePosition()
    eventPlayer.damageDisplayFinalPos = victim.getEyePosition() + vect(0, 1, 0)
    eventPlayer.damageDisplayScale = 0.7 + eventDamage / 20
    if eventWasCriticalHit:
        goto lbl_1
    createInWorldText(eventPlayer, round(eventDamage), eventPlayer.damageDisplayInitialPos, eventPlayer.damageDisplayScale, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.DEFAULT)
    lbl_1:
    if not(eventWasCriticalHit):
        goto lbl_2
    createInWorldText(eventPlayer, round(eventDamage), eventPlayer.damageDisplayInitialPos, eventPlayer.damageDisplayScale, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.RED, SpecVisibility.DEFAULT)
    lbl_2:
    eventPlayer.damageDisplay = getLastCreatedText()
    chase(eventPlayer.damageDisplayInitialPos, eventPlayer.damageDisplayFinalPos, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    chase(eventPlayer.damageDisplayScale, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)


@Rule "Leaderboard"
@Event playerDealtDamage
destroyHudText(eventPlayer.leaderboard)
hudSubtext(getAllPlayers(), l"{} : {} : {}".format(heroIcon(eventPlayer.getCurrentHero()), eventPlayer, round(eventPlayer.damageDone)), Position.RIGHT, eventPlayer.damageDone * -0.01, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.leaderboard = getLastCreatedText()
wait(0.25)


"""@Rule "Take away score if damage yourself {Punishment}"
@Event playerDealtDamage
if attacker == victim:
    destroyHudText(eventPlayer.leaderboard)
    hudSubtext(getAllPlayers(), l"{} : {} : {}".format(heroIcon(eventPlayer.getCurrentHero()), eventPlayer, round(eventPlayer.damageDone)), Position.RIGHT, eventPlayer.damageDone * -0.01, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.leaderboard = getLastCreatedText()
    if eventDamage <= 0.5:
        goto lbl_0
    smallMessage(eventPlayer, l"You Lose {} {}".format(round(eventDamage), "{0} (SELF-DAMAGE)".format(l"Points")))
    lbl_0:
    eventPlayer.damageDone -= eventDamage
    eventPlayer.setScore(eventPlayer.damageDone)
    eventPlayer.nextObjective = (floor(eventPlayer.damageDone / 1000) + 1) * 1000
"""

@Rule "Hero List - Infinite 4 DPS   1 Tank   4 DPS   1 Supp"
@Event eachPlayer
eventPlayer.heroList = getDamageHeroes()
eventPlayer.heroList = random.shuffle(eventPlayer.heroList)
eventPlayer.heroList = eventPlayer.heroList.slice(0, 9)
eventPlayer.heroList[4] = random.choice(getTankHeroes())
eventPlayer.heroList.append(random.choice(getSupportHeroes()))


@Rule "Preload Heroes"
@Event eachPlayer
eventPlayer.preloadHero(eventPlayer.heroList)


@Rule "INFINITO âˆž"
@Event eachPlayer
if getSupportHeroes().index(eventPlayer.getCurrentHero()) != -1 and eventPlayer.hasSpawned():
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getTankHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getDamageHeroes()))
    wait(0.25)
    eventPlayer.heroList.append(random.choice(getSupportHeroes()))


@Rule "In Setup -> Starting Hero -> HeroList[0]"
@Event eachPlayer
if isInSetup():
    eventPlayer.startForcingHero(eventPlayer.heroList[0])
    eventPlayer.nextObjective = 1000


@Rule "In Game in progress -> Starting Hero -> HeroList[0]"
@Event eachPlayer
if isGameInProgress():
    eventPlayer.startForcingHero(eventPlayer.heroList[0])
    eventPlayer.nextObjective = 1000


@Rule "Start forcing next hero"
@Event eachPlayer
if eventPlayer.getCurrentHero() != eventPlayer.heroList[eventPlayer.nextObjective / 1000 - 1] and eventPlayer.isAlive() and eventPlayer.damageDone > 0:
    eventPlayer.nextObjective = (floor(eventPlayer.damageDone / 1000) + 1) * 1000
    eventPlayer.startForcingHero(eventPlayer.heroList[eventPlayer.nextObjective / 1000 - 1])
    smallMessage(eventPlayer, l"You Hero: {}".format(heroIcon(eventPlayer.heroList[eventPlayer.nextObjective / 1000 - 1])))
    createInWorldText(getAllPlayers(), heroIcon(eventPlayer.heroList[eventPlayer.nextObjective / 1000 - 1]), eventPlayer, 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.DEFAULT)
    eventPlayer.heroIcon = getLastCreatedText()
    wait(1.375)
    destroyInWorldText(eventPlayer.heroIcon)


@Rule "Time Counter - Add second"
@Event global
if isGameInProgress():
    do:
        setMatchTime(timeCounter)
        wait(1)
        timeCounter++
    while true


@Rule "Global init -Created by Beemoo"
@Event global
if getCurrentMap() == Map.Havana:
    arenaMap1 = false
    arenaMap2 = vect(215, 35, -40)
    arenaMap3 = []
    arenaMap3.append(vect(227.5, 27.5, -57))
    arenaMap3.append(vect(227.5, 27.5, -40.5))
    arenaMap3.append(vect(227.5, 27.5, -25.5))
    arenaMap3.append(vect(218, 27.5, -16.5))
    arenaMap3.append(vect(204.83, 27.5, -16.5))
    arenaMap3.append(vect(191.17, 27.5, -20.78))
    arenaMap3.append(vect(181.6, 27.5, -30.1))
    arenaMap3.append(vect(171.19, 28.21, -42))
    arenaMap3.append(vect(171.19, 28.21, -55))
    arenaMap3.append(vect(185, 27.5, -64.6))
    arenaMap3.append(vect(197.6, 27.5, -64.59))
    arenaMap3.append(vect(210.2, 27.5, -64.59))
    arenaMap3.append(vect(222.6, 27.5, -64.59))
    arenaMap4 = len(arenaMap3) - 1
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(184, -71.8, -46), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if not(arenaMap1):
        goto lbl_0
    createEffect(getAllPlayers(), Effect.ORB, Color.PURPLE, arenaMap2, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    lbl_0:


@Rule "Effect create loop -Created by Beemoo"
@Event global
if arenaMap1 and arenaMap4 > 0 and getCurrentMap() == Map.Havana:
    do:
        wait(0.25)
        createEffect(getAllPlayers(), Effect.RING, Color.YELLOW, arenaMap3[arenaMap4], 1.2, IconReeval.VISIBILITY)
        arenaMap4--
    while RULE_CONDITION


@Rule "No entry pillars (knock, tele) -Created by Beemoo"
@Event eachPlayer
if any([distance(i, eventPlayer) < 1.25 for i in arenaMap3]) and getCurrentMap() == Map.Havana:
    wait(0.5)
    if not RULE_CONDITION:
        return
    eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), arenaMap2[0] + vect(0, 10, 0)), 12, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1)
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 100)
    smallMessage(eventPlayer, l"No Hiding!")
    wait(0.75)
    if not RULE_CONDITION:
        return
    eventPlayer.teleport(arenaMap2[0] + vect(random.randint(-8, 8), 0, random.randint(-19, 19)))


@Rule "No entry floor (OOB) -Created by Beemoo"
@Event eachPlayer
if eventPlayer.getPosition().y < 26.5 and eventPlayer.getPosition().y > 25 and getCurrentMap() == Map.Havana:
    do:
        eventPlayer.setStatusEffect(null, Status.BURNING, 0.5)
        damage(eventPlayer, eventPlayer, 25)
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), arenaMap2[0] + vect(0, 10, 0)), 12, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(0.5)
    while RULE_CONDITION


@Rule "No entry OOB (spawn tele) -Created by Beemoo"
@Event eachPlayer
if eventPlayer.hasSpawned() and getCurrentMap() == Map.Havana and (eventPlayer.getPosition().x < 171 or eventPlayer.getPosition().x > 229 or eventPlayer.getPosition().z < -66 or eventPlayer.getPosition().z > -15):
    eventPlayer.teleport(arenaMap2 + vect(random.randint(-8, 8), 0, random.randint(-19, 19)))


@Rule "Game Mode Description - âˆž Infinite Damage Gun Game v9.0.0"
@Event global
if isGameInProgress():
    hudSubtext(getAllPlayers(), "âˆž Infinite Damage Gun Game v9.0.0", Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Change {0} every {1}".format(l"Hero", l"1000 Damage"), Position.LEFT, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "8 random DPS   1 Tank (5th)   1 Support (10th) in loop", Position.LEFT, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Created by Jokaes#2263", Position.LEFT, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    smallMessage(getAllPlayers(), "âˆž Infinite Damage Gun Game v9.0.0")
    wait(3.5)
    smallMessage(getAllPlayers(), "Change {0} every {1}".format(l"Hero", l"1000 Damage"))
    wait(3.5)
    smallMessage(getAllPlayers(), "8 random DPS   1 Tank (5th)   1 Support (10th) in loop")
    wait(3.5)
    smallMessage(getAllPlayers(), "Created by Jokaes#2263")


@Rule "Game Mode Description for players who join - âˆž Infinite Damage Gun Game v9.0.0"
@Event playerJoined
if isGameInProgress():
    wait(3.5)
    smallMessage(eventPlayer, "âˆž Infinite Damage Gun Game v9.0.0")
    wait(3.5)
    smallMessage(eventPlayer, "Change {0} every {1}".format(l"Hero", l"1000 Damage"))
    wait(3.5)
    smallMessage(eventPlayer, "8 random DPS   1 Tank (5th)   1 Support (10th) in loop")
    wait(3.5)
    smallMessage(eventPlayer, "Created by Jokaes#2263")


"""@Rule "Score Debug (TEST)"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.damageDone += 100
    eventPlayer.setScore(eventPlayer.damageDone)
    eventPlayer.nextObjective = (floor(eventPlayer.damageDone / 1000) + 1) * 1000
    eventPlayer.startForcingHero(eventPlayer.heroList[eventPlayer.nextObjective / 1000 - 1])
    wait(0.25)
"""

"""@Rule "Dummy Summon (TEST)"
@Event eachPlayer
if eventPlayer.isCommunicating(Comms.HELLO):
    createDummy(eventPlayer.heroList[0], Team.ALL, -1, eventPlayer.getPosition(), vect(0, 0, 0))
    #createDummy(eventPlayer.heroList[0], Team.ALL, -1, eventPlayer.getPosition(), vect(0, 0, 0))
    #createDummy(eventPlayer.heroList[0], Team.ALL, -1, eventPlayer.getPosition(), vect(0, 0, 0))
    #createDummy(eventPlayer.heroList[0], Team.ALL, -1, eventPlayer.getPosition(), vect(0, 0, 0))
    #createDummy(eventPlayer.heroList[0], Team.ALL, -1, eventPlayer.getPosition(), vect(0, 0, 0))
    #createDummy(eventPlayer.heroList[0], Team.ALL, -1, eventPlayer.getPosition(), vect(0, 0, 0))
"""

"""@Rule "Dummy Aim Bot (TEST)"
@Event eachPlayer
if eventPlayer.isDummy():
    eventPlayer.startFacing(directionTowards(eventPlayer, getClosestPlayer(eventPlayer, getOppositeTeam(eventPlayer.getTeam()))), 10000, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
"""

"""@Rule "Dummy Ult (TEST)"
@Event eachPlayer
if eventPlayer.isDummy() and eventPlayer.getUltCharge() == 100:
    eventPlayer.forceButtonPress(Button.ULTIMATE)
"""

@Rule "Created by Jokaes#2263"
@Event global


