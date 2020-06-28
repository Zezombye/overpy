
globalvar timer
globalvar challenge
globalvar nbPlayersKilled
globalvar additionalTime
globalvar timeTarget

subroutine countdownTimer
subroutine nextChallenge

rule "timer":
    #debug(timer)
    #debug("Position: {}".format(hostPlayer.getPosition()))
    #debug("Facing direction: {}".format(hostPlayer.getFacingDirection()))
    hudHeader(getAllPlayers(), timer, HudPosition.TOP, 0, Color.WHITE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.ALWAYS)
    timer = 5

rule "reset time":
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    timer = 0

rule "player got kill":
    @Event playerEarnedElimination
    @Condition attacker == hostPlayer

    nbPlayersKilled++

def countdownTimer():
    @Name "countdown timer"

    hostPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    hostPlayer.setAbility1Enabled(false)
    hostPlayer.setAbility2Enabled(false)
    if hostPlayer.getCurrentHero() == Hero.WIDOWMAKER:
        hostPlayer.setUltEnabled(true)
        wait()
        hostPlayer.setUltCharge(100)
    else:
        hostPlayer.setUltEnabled(false)
    hostPlayer.setPrimaryFireEnabled(false)
    hostPlayer.setSecondaryFireEnabled(false)
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
    hostPlayer.clearStatusEffect(Status.ROOTED)

def nextChallenge():
    @Name "challenge finished"
    destroyAllEffects()
    destroyAllDummies()
    stopChasingVariable(timer)
    nbPlayersKilled = 0
    challenge++

rule "player spawned in":
    @Condition hostPlayer.hasSpawned()
    wait(1)
    challenge = 1
    setObjectiveDescription(getAllPlayers(), "Challenge {}".format(challenge), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)

    #reset challenge vars
    nbPlayersKilled = 0

#10 seconds - possible in 5 though
rule "challenge 1":
    @Condition challenge == 1
    hostPlayer.teleport(vect(116.11, -1.22, -21))
    hostPlayer.setFacing(vect(1, 0, 0), Relativity.TO_WORLD)
    bigMessage(hostPlayer, "Get to the vortex!")
    additionalTime = 5
    hostPlayer.startForcingHero(Hero.LUCIO)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.GREEN, vect(144, 9, -21), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    countdownTimer()
    hostPlayer.setAbility1Enabled(true)
    hostPlayer.setAbility2Enabled(true)

rule "challenge 1 finished":
    @Condition challenge == 1 and distance(hostPlayer.getPosition(), vect(144, 9, -21)) < 2 
    nextChallenge()

#10 seconds - actually takes like 12
rule "challenge 2":
    @Condition challenge == 2
    hostPlayer.teleport(vect(96.45, -1.41, -21))
    hostPlayer.setFacing(vect(-1, 0, 0), Relativity.TO_WORLD)
    bigMessage(hostPlayer, "Hook em all!")
    hostPlayer.startForcingHero(Hero.ROADHOG)
    additionalTime = 10
    createDummy(Hero.REINHARDT, Team.1, -1, vect(81.96, -1.32, -23.80), vect(1, 0, 0))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(81.96, -1.32, -21.06), vect(1, 0, 0))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(81.96, -1.32, -18.34), vect(1, 0, 0))
    createDummy(Hero.ZARYA, Team.1, -1, vect(80.05, -1.40, -19.82), vect(1, 0, 0))
    createDummy(Hero.ZARYA, Team.1, -1, vect(80.05, -1.40, -22.72), vect(1, 0, 0))
    createDummy(Hero.ZARYA, Team.1, -1, vect(84.73, -1.36, -21), vect(1, 0, 0))
    countdownTimer()
    hostPlayer.setAbility1Enabled(true)

rule "challenge 2 dummies - rein":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition challenge == 2

    do:
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
        wait(2)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        wait(2)
    while RULE_CONDITION

rule "challenge 2 dummies - zarya":
    @Event eachPlayer
    @Team 1
    @Hero zarya
    @Condition challenge == 2
    do:
        wait(2)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(2)
    while RULE_CONDITION

rule "challenge 2 finished":
    @Condition challenge == 2 and nbPlayersKilled == 6
    nextChallenge()

rule "challenge 3":
    @Condition challenge == 3

    hostPlayer.teleport(vect(20.51, 1.61, -68.87))
    hostPlayer.setFacing(vect(-1, 0, 0), Relativity.TO_WORLD)
    bigMessage(hostPlayer, "Kill em all (hold rclick)!")
    hostPlayer.startForcingHero(Hero.MCCREE)
    additionalTime = 10
    countdownTimer()
    hostPlayer.setSecondaryFireEnabled(true)
    hostPlayer.setPrimaryFireEnabled(true)
    hostPlayer.setAbility1Enabled(true)
    hostPlayer.setAbility2Enabled(true)
    createDummy(Hero.HAMMOND, Team.1, -1, vect(2.12, 5.74, -69.48), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(2.12, 5.74, -72.61), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(2.12, 5.74, -54.41), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(14, -1.25, -53), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(31.37, -0.25, -58.23), vect(0,0,0))
    createDummy(Hero.HAMMOND, Team.1, -1, vect(33.97, 6.75, -66.66), vect(0,0,0))


rule "challenge 3 stun":
    @Condition challenge == 3 and hostPlayer.getCurrentHero() == Hero.MCCREE

    do:
        hostPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.016)
        wait()
    while RULE_CONDITION


rule "challenge 3 finished":
    @Condition challenge == 3 and nbPlayersKilled == 6
    nextChallenge()

rule "challenge 4":
    @Condition challenge == 4
    hostPlayer.teleport(vect(-20, -1, -47.46))
    hostPlayer.setFacing(vect(0,0,-1), Relativity.TO_WORLD)
    bigMessage(hostPlayer, "Headshot Mondatta!")
    hostPlayer.startForcingHero(Hero.WIDOWMAKER)
    additionalTime = 10
    countdownTimer()
    hostPlayer.setAbility1Enabled(true)
    hostPlayer.setPrimaryFireEnabled(true)
    hostPlayer.setSecondaryFireEnabled(true)
    createDummy(Hero.ZENYATTA, Team.1, -1, vect(-57, 2.8, -131.51), vect(0,0,1))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-57.05, 2.80, -128.62), vect(0,0,1))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-59.12, 2.8, -131.50), vect(-1,0,0))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-57, 2.80, -134.54), vect(0,0,-1))
    createDummy(Hero.REINHARDT, Team.1, -1, vect(-55.11, 2.80, -131.51), vect(1,0,0))


rule "challenge 4 reins":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition challenge == 4
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)

rule "challenge 4 end":
    @Condition challenge == 4 and nbPlayersKilled == 1
    declareTeamVictory(Team.2)

rule "lost":
    @Condition timer == 0
    declareTeamVictory(Team.1)
