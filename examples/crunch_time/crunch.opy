
#!declareGlobal timer
#!declareGlobal challenge
#!declareGlobal nbPlayersKilled
#!declareGlobal additionalTime
#!declareGlobal timeTarget

#!declareSubroutine countdownTimer
#!declareSubroutine nextChallenge

@Rule "timer"
@Event eachPlayer
#debug(timer)
#debug("Position: {}".format(eventPlayer.getPosition()))
#debug("Facing direction: {}".format(eventPlayer.getFacingDirection()))
hudHeader(getAllPlayers(), timer, Position.TOP, 0, Color.WHITE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.ALWAYS)
timer = 5

@Rule "reset time"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT):
    timer = 0

@Rule "player got kill"
@Event playerEarnedElimination
if attacker == eventPlayer:
    nbPlayersKilled++

@Rule "countdown timer"
def countdownTimer():
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    if eventPlayer.getCurrentHero() == Hero.WIDOWMAKER:
        eventPlayer.setUltEnabled(true)
        wait()
        eventPlayer.setUltCharge(100)
    else:
        eventPlayer.setUltEnabled(false)
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    timeTarget = timer+additionalTime
    chase(timer, timeTarget, duration=2, ChaseReeval.NONE)
    smallMessage(getAllPlayers(), 3)
    wait(1)
    smallMessage(getAllPlayers(), 2)
    wait(1)
    smallMessage(getAllPlayers(), 1)
    wait(1)
    stopChasingVariable(timer)
    chase(timer, 0, rate=1, ChaseReeval.NONE)
    smallMessage(getAllPlayers(), "Go!")
    eventPlayer.clearStatusEffect(Status.ROOTED)

@Rule "challenge finished"
def nextChallenge():
    destroyAllEffects()
    destroyAllDummies()
    stopChasingVariable(timer)
    nbPlayersKilled = 0
    challenge++

@Rule "player spawned in"
@Event eachPlayer
if eventPlayer.hasSpawned():
    wait(1)
    challenge = 1
    setObjectiveDescription(getAllPlayers(), "Challenge {}".format(challenge), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)

    #reset challenge vars
    nbPlayersKilled = 0

#10 seconds - possible in 5 though
@Rule "challenge 1"
@Event eachPlayer
if challenge == 1:
    eventPlayer.teleport(vect(116.11, -1.22, -21))
    eventPlayer.setFacing(vect(1, 0, 0), Relativity.TO_WORLD)
    bigMessage(eventPlayer, "Get to the vortex!")
    additionalTime = 5
    eventPlayer.startForcingHero(Hero.LUCIO)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.GREEN, vect(144, 9, -21), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    countdownTimer()
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)

@Rule "challenge 1 finished"
@Event eachPlayer
if challenge == 1 and distance(eventPlayer.getPosition(), vect(144, 9, -21)) < 2:
    nextChallenge()

#10 seconds - actually takes like 12
@Rule "challenge 2"
@Event eachPlayer
if challenge == 2:
    eventPlayer.teleport(vect(96.45, -1.41, -21))
    eventPlayer.setFacing(vect(-1, 0, 0), Relativity.TO_WORLD)
    bigMessage(eventPlayer, "Hook em all!")
    eventPlayer.startForcingHero(Hero.ROADHOG)
    additionalTime = 20
    createDummy(Hero.REINHARDT, Team.1, -1, vect(81.96, -1.32, -23.80), vect(1, 0, 0))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(81.96, -1.32, -21.06), vect(1, 0, 0))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(81.96, -1.32, -18.34), vect(1, 0, 0))
    createDummy(Hero.ZARYA, Team.1, -1, vect(80.05, -1.40, -19.82), vect(1, 0, 0))
    createDummy(Hero.ZARYA, Team.1, -1, vect(80.05, -1.40, -22.72), vect(1, 0, 0))
    createDummy(Hero.ZARYA, Team.1, -1, vect(84.73, -1.36, -21), vect(1, 0, 0))
    countdownTimer()
    eventPlayer.setAbility1Enabled(true)

@Rule "challenge 2 dummies - rein"
@Event eachPlayer
@Team 1
@Hero reinhardt
if challenge == 2:
    do:
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
        wait(2)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        wait(2)
    while RULE_CONDITION

@Rule "challenge 2 dummies - zarya"
@Event eachPlayer
@Team 1
@Hero zarya
if challenge == 2:
    do:
        wait(2)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(2)
    while RULE_CONDITION

@Rule "challenge 2 finished"
@Event eachPlayer
if challenge == 2 and nbPlayersKilled == 6:
    nextChallenge()

@Rule "challenge 3"
@Event eachPlayer
if challenge == 3:
    eventPlayer.teleport(vect(20.51, 1.61, -68.87))
    eventPlayer.setFacing(vect(-1, 0, 0), Relativity.TO_WORLD)
    bigMessage(eventPlayer, "Kill em all (hold rclick)!")
    eventPlayer.startForcingHero(Hero.MCCREE)
    additionalTime = 20
    countdownTimer()
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    createDummy(Hero.HAMMOND, Team.1, -1, vect(2.12, 5.74, -69.48), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(2.12, 5.74, -72.61), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(2.12, 5.74, -54.41), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(14, -1.25, -53), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(31.37, -0.25, -58.23), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(33.97, 6.75, -66.66), vect(0,0,0))

@Rule "challenge 3 stun"
@Event eachPlayer
if challenge == 3 and eventPlayer.getCurrentHero() == Hero.MCCREE:
    do:
        eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.016)
        wait()
    while RULE_CONDITION

@Rule "challenge 3 finished"
@Event eachPlayer
if challenge == 3 and nbPlayersKilled == 6:
    nextChallenge()

@Rule "challenge 4"
@Event eachPlayer
if challenge == 4:
    eventPlayer.teleport(vect(-20, -1, -47.46))
    eventPlayer.setFacing(vect(0,0,-1), Relativity.TO_WORLD)
    bigMessage(eventPlayer, "Headshot Mondatta!")
    eventPlayer.startForcingHero(Hero.WIDOWMAKER)
    additionalTime = 20
    countdownTimer()
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(true)
    createDummy(Hero.ZENYATTA, Team.1, -1, vect(-57, 2.8, -131.51), vect(0,0,1))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-57.05, 2.80, -128.62), vect(0,0,1))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-59.12, 2.8, -131.50), vect(-1,0,0))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-57, 2.80, -134.54), vect(0,0,-1))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-55.11, 2.80, -131.51), vect(1,0,0))

@Rule "challenge 4 reins"
@Event eachPlayer
@Team 1
@Hero reinhardt
if challenge == 4:
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)

@Rule "challenge 4 end"
@Event eachPlayer
if challenge == 4 and nbPlayersKilled == 1:
    declareTeamVictory(Team.2)

@Rule "lost"
@Event eachPlayer
if timer == 0:
    # declareTeamVictory(Team.1)
    stopChasingVariable(timer)
    challenge = 0
    bigMessage(getAllPlayers(), "Challenges Failed!")
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 200)
    wait(2, Wait.IGNORE_CONDITION)
    timer = 5
    nextChallenge()
