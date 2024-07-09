settings {
    "main": {
        "description": "Your ultimate is completely random! Every use of your ultimate grants you a random hero's ultimate instead.",
        "modeName": "Mystery Ultimates"
    },
    "gamemodes": {
        "control": {
            "enableCompetitiveRules": true
        },
        "escort": {
            "enableCompetitiveRules": true
        },
        "flashpoint": {
            "enableCompetitiveRules": true
        },
        "hybrid": {
            "enableCompetitiveRules": true
        },
        "push": {
            "disabledMaps": [
                "runasapi"
            ],
            "enableCompetitiveRules": true
        },
        "general": {
            "roleLimit": "1Tank2Offense2Support"
        }
    }
}

#Global variables

globalvar SHOULD_RESET_HEROES_ON_DESPAWN 0
globalvar FORCE_NON_NATIVE_ULTIMATE 1
globalvar RANDOM_ULTIMATE_MATCHES_ROLE 2
globalvar SHOW_ULTIMATE_HERO 3
globalvar ENFORCE_ROLE_LOCK 4
globalvar DEBUG_MODE 5
globalvar DEBUG_MELEE_FOR_ULT_CHARGE 6
globalvar DEBUG_SHOULD_FORCE_ULTIMATE_HERO 7
globalvar DEBUG_ULTIMATE_HERO 8
globalvar DEBUG_LOG_EVENTS 9
globalvar DEBUG_SHOW_CURRENT_STATE 10
globalvar placeableUltimateHeroes 11
globalvar ability1AllowedHeroes 12
globalvar ability2AllowedHeroes 13
globalvar rainbowVector 14
globalvar IsInSlowMotion 15
globalvar ultimatePreparedPlayers 16
globalvar awaitingReturnPlayers 17
globalvar finalPriorityList 18
globalvar draftPriorityList 19
globalvar i 20
globalvar p 21


#Player variables

playervar trueHero 0
playervar ultimateHero 1
playervar eligibleHeroSwaps 2
playervar extendedUltPercentLeft 3
playervar ultCastStallDuration 4
playervar extendedUltDuration 5
playervar extendedUltTimer 6
playervar hackAbilityLockout 7
playervar ultimateState 8
playervar preparingUltState 9
playervar preparingUltEvent 10
playervar ultimateEvent 11
playervar pos 12
playervar facing 13


#Subroutine names

subroutine ChooseNewUltimateHero 0
subroutine ProcessNewPriorityList 1
subroutine UltimateEventHandler 2
subroutine UltEventHandler_Normal 3
subroutine UltEventHandler_Preparing 4
subroutine RestoreTrueHeroAndReturnToNormal 5
subroutine OverwriteHeroSwapUltTransfer 6
subroutine UltEventHandler_Using 7
subroutine SetLingerDuration 8
subroutine UltEventHandler_Lingering 9
subroutine PreparingUltimateEventHandler 10
subroutine PreparingUltEventHandler_None 11
subroutine PreparingUltEventHandler_Switchi 12
subroutine SetStallDuration 13
subroutine PreparingUltEventHandler_Stallin 14
subroutine PreparingUltEventHandler_Activat 15
subroutine PreparingUltEventHandler_Casting 16


rule "Initial Global":
    SHOULD_RESET_HEROES_ON_DESPAWN = true
    FORCE_NON_NATIVE_ULTIMATE = createWorkshopSetting(bool, "Mystery Ultimates", "Force Random Ultimate To Be Non-Native", true, 0)
    RANDOM_ULTIMATE_MATCHES_ROLE = createWorkshopSetting(bool, "Mystery Ultimates", "Force Random Ultimate To Match Role", false, 1)
    SHOW_ULTIMATE_HERO = createWorkshopSetting(bool, "Mystery Ultimates", "Show Randomized Ultimate Hero", false, 3)
    ENFORCE_ROLE_LOCK = createWorkshopSetting(bool, "Mystery Ultimates", "Enforce Role Lock", true, 4)
    DEBUG_MODE = createWorkshopSetting(bool, " DEBUG", "Debug Mode Enabled", false, -1)
    DEBUG_MELEE_FOR_ULT_CHARGE = createWorkshopSetting(bool, " DEBUG", "Melee for 25% Ult Charge", false, 0)
    DEBUG_SHOULD_FORCE_ULTIMATE_HERO = createWorkshopSetting(bool, " DEBUG", "Force Ultimate Hero", false, 1)
    DEBUG_ULTIMATE_HERO = createWorkshopSetting(Hero, " DEBUG", "Ultimate Hero to Force", Hero.ANA, 2)
    DEBUG_LOG_EVENTS = createWorkshopSetting(bool, " DEBUG", "Log Events to Inspector (*doesn't need debug mode on)", false, 3)
    DEBUG_SHOW_CURRENT_STATE = createWorkshopSetting(bool, " DEBUG", "Show Current State", false, 4)
    placeableUltimateHeroes = [Hero.BAPTISTE, Hero.SYMMETRA, Hero.LIFEWEAVER]
    ability1AllowedHeroes = [Hero.DVA, Hero.ECHO]
    ability2AllowedHeroes = []
    rainbowVector = Vector.LEFT - Vector.LEFT
    ultimatePreparedPlayers = []
    awaitingReturnPlayers = []


rule "Initial Player":
    @Event eachPlayer

    eventPlayer.hackAbilityLockout = 0
    eventPlayer.ultimateState = "NORMAL"
    eventPlayer.preparingUltState = "NONE"
    eventPlayer.preparingUltEvent = "NONE"
    eventPlayer.ultimateEvent = "NONE"


rule "Global credit HUD":
    hudText(getAllPlayers(), " Code: 12MET ", "{0} Mystery Ultimates".format(iconString(Icon.QUESTION_MARK)), "By CactusPuppy", HudPosition.RIGHT, -10, Color.ORANGE, Color.WHITE, rgba(255, 255, 255, 128), HudReeval.VISIBILITY, SpecVisibility.ALWAYS)
    if DEBUG_MODE:
        hudSubheader(getAllPlayers(), "DEBUG MODE ENABLED", HudPosition.RIGHT, -9, rgb(rainbowVector.x, rainbowVector.y, rainbowVector.z), HudReeval.VISIBILITY_AND_COLOR, SpecVisibility.DEFAULT)


rule "If not in DEBUG_MODE, disable inspector recording":
    if not DEBUG_MODE:
        disableInspector()


rule "If should show current state, display it":
    @Event eachPlayer
    @Condition DEBUG_MODE == true
    @Condition DEBUG_SHOW_CURRENT_STATE == true

    hudSubheader(eventPlayer, "Current State: {0}".format(eventPlayer.ultimateState), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)


rule "[wheelVisuals.del] Start chasing rainbowVector":
    @Condition DEBUG_MODE == true

    chase(rainbowVector, vect(min(max(abs(getTotalTimeElapsed() * 900 % 765 - 382.5), 127.5), 255), min(max(abs((getTotalTimeElapsed() * 900 + 255) % 765 - 382.5), 127.5), 255), min(max(abs((getTotalTimeElapsed() * 900 + 510) % 765 - 382.5), 127.5), 255)), rate=99999, ChaseReeval.DESTINATION_AND_RATE)


rule "Create randomized ultimate hero HUD":
    @Event eachPlayer
    @Condition SHOW_ULTIMATE_HERO == true

    createInWorldText(eventPlayer if eventPlayer.ultimateHero and eventPlayer.ultimateState == "NORMAL" and eventPlayer.getUltCharge() == 100 else null, "{0}: {1}".format(heroIcon(eventPlayer.ultimateHero), abilityIconString(eventPlayer.ultimateHero, Button.ULTIMATE)), updateEveryTick(true * eventPlayer.getEyePosition() + ([] * (crossProduct(eventPlayer.getFacingDirection(), angleToDirection(horizontalAngleOfDirection(eventPlayer.getFacingDirection()), verticalAngleOfDirection(eventPlayer.getFacingDirection()) - 90)))) + (-110 * (angleToDirection(horizontalAngleOfDirection(eventPlayer.getFacingDirection()), verticalAngleOfDirection(eventPlayer.getFacingDirection()) - 90))) + 300 * eventPlayer.getFacingDirection()), 4, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.NEVER)


def ChooseNewUltimateHero():
    @Name "[SUB]: Choose a new ultimateHero"

    if DEBUG_MODE and DEBUG_SHOULD_FORCE_ULTIMATE_HERO:
        eventPlayer.ultimateHero = DEBUG_ULTIMATE_HERO
    else:
        eventPlayer.eligibleHeroSwaps = getAllHeroes()
        if RANDOM_ULTIMATE_MATCHES_ROLE:
            if eventPlayer.getCurrentHero() in getTankHeroes():
                eventPlayer.eligibleHeroSwaps = getTankHeroes()
            elif eventPlayer.getCurrentHero() in getDamageHeroes():
                eventPlayer.eligibleHeroSwaps = getDamageHeroes()
            elif eventPlayer.getCurrentHero() in getSupportHeroes():
                eventPlayer.eligibleHeroSwaps = getSupportHeroes()
        if FORCE_NON_NATIVE_ULTIMATE:
            eventPlayer.eligibleHeroSwaps.remove(eventPlayer.getCurrentHero())
        eventPlayer.ultimateHero = random.choice(eventPlayer.eligibleHeroSwaps)
    #If the ultimateHero matches their hero right now, then we can allow native ultimate.
    #Otherwise, we need to disable the ultimate button.
    if eventPlayer.ultimateHero == eventPlayer.getCurrentHero():
        if DEBUG_LOG_EVENTS:
            if not DEBUG_MODE:
                enableInspector()
            printLog("{0}{1}{2}".format("{0}{1}{2}".format(eventPlayer, " got native ult (", eventPlayer.getCurrentHero()), "). FORCE_NON_NATIVE_ULTIMATE: ", FORCE_NON_NATIVE_ULTIMATE))
            if not DEBUG_MODE:
                disableInspector()
        eventPlayer.allowButton(Button.ULTIMATE)
    else:
        eventPlayer.disallowButton(Button.ULTIMATE)


rule "Track player's true hero":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.ultimateState == "NORMAL"
    @Condition eventPlayer.trueHero != eventPlayer.getCurrentHero()

    eventPlayer.trueHero = eventPlayer.getCurrentHero()
    #Prevent swapping to a different role
    if ENFORCE_ROLE_LOCK:
        if eventPlayer.trueHero in getDamageHeroes():
            eventPlayer.setAllowedHeroes(getDamageHeroes())
        elif eventPlayer.trueHero in getTankHeroes():
            eventPlayer.setAllowedHeroes(getTankHeroes())
        elif eventPlayer.trueHero in getSupportHeroes():
            eventPlayer.setAllowedHeroes(getSupportHeroes())
    if eventPlayer.getCurrentHero() == eventPlayer.ultimateHero:
        if FORCE_NON_NATIVE_ULTIMATE:
            ChooseNewUltimateHero()
        else:
            eventPlayer.allowButton(Button.ULTIMATE)
    else:
        eventPlayer.disallowButton(Button.ULTIMATE)


rule "Choose the next ultimate hero when the player enters NORMAL mode":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.ultimateState == "NORMAL"

    ChooseNewUltimateHero()


rule "If player used their native ultimate, choose a new ultimate hero after their ult is done":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition (eventPlayer.isUsingUltimate() or eventPlayer.isDuplicatingAHero()) == true
    @Condition eventPlayer.getCurrentHero() == eventPlayer.ultimateHero

    waitUntil(not eventPlayer.isUsingUltimate() and not eventPlayer.isDuplicatingAHero(), 1000000)
    ChooseNewUltimateHero()


def ProcessNewPriorityList():
    @Name "[preloadPriority.del] Generate a new preload priority list and preload the right players"

    #Generate the draft priority list
    draftPriorityList = []
    draftPriorityList.append(ultimatePreparedPlayers)
    draftPriorityList.append(awaitingReturnPlayers)
    draftPriorityList = draftPriorityList.slice(0, 8)
    #Remove preload for all players who are in the previous priority list but not in the new one
    for i in range(len(finalPriorityList)):
        if draftPriorityList.index(finalPriorityList[i]) == -1:
            p = finalPriorityList[i]
            p.preloadHero(p.getCurrentHero() if p.hasSpawned() else [])
    #Update the final priority list
    finalPriorityList = draftPriorityList
    #Preload all players who are in the final priority list
    for i in range(len(finalPriorityList)):
        #If player is in Ultimate state NORMAL, preload the ultimateHero.
        #Otherwise, preload their trueHero.
        finalPriorityList[i].preloadHero(finalPriorityList[i].ultimateHero if finalPriorityList[i].ultimateState == "NORMAL" else finalPriorityList[i].trueHero)


rule "When player earns their ult, if ultimateHero is not their trueHero, add player to ultimatePreparedPlayers":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.ultimateState == "NORMAL"
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.ultimateHero != eventPlayer.trueHero

    ultimatePreparedPlayers.append(eventPlayer)
    ProcessNewPriorityList()


def UltEventHandler_Normal():
    @Name "[stateMachine.del] Handle event for NORMAL state"

    goto loc+[12, 0][["ULT_ACTIVATION"].index(eventPlayer.ultimateEvent) + 1]
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.startForcingHero(eventPlayer.ultimateHero)
    eventPlayer.ultimateHero = false
    if eventPlayer.getCurrentHero() in ability1AllowedHeroes:
        eventPlayer.allowButton(Button.ABILITY_1)
    if eventPlayer.getCurrentHero() in ability2AllowedHeroes:
        eventPlayer.allowButton(Button.ABILITY_2)
    eventPlayer.allowButton(Button.ULTIMATE)
    eventPlayer.ultimateState = "PREPARING_ULT"


def OverwriteHeroSwapUltTransfer():
    @Name "[stateMachine.del] Prevent granting ult from hero transfer"

    waitUntil(eventPlayer.getUltCharge() > 0 or eventPlayer.isDead(), 1)
    if eventPlayer.isDead():
        return
    eventPlayer.setUltCharge(0)


def RestoreTrueHeroAndReturnToNormal():
    @Name "[stateMachine.del] Restore the player's true hero and return to NORMAL state"

    eventPlayer.allowButton(Button.ABILITY_1)
    eventPlayer.allowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)
    waitUntil(eventPlayer.isAlive() or not eventPlayer.hasSpawned(), 1000000)
    #If the player isn't spawned, we're most likely between rounds and need to just move them into the NORMAL state
    #Another rule will handle resetting their hero availablity [main.ostw]
    if not eventPlayer.hasSpawned():
        awaitingReturnPlayers.remove(eventPlayer)
        ProcessNewPriorityList()
        eventPlayer.ultimateState = "NORMAL"
        goto lbl_0
    eventPlayer.startForcingHero(eventPlayer.trueHero)
    waitUntil(eventPlayer.getCurrentHero() == eventPlayer.trueHero, 1000000)
    eventPlayer.setUltCharge(0)
    async(OverwriteHeroSwapUltTransfer, AsyncBehavior.NOOP)
    eventPlayer.stopForcingCurrentHero()
    awaitingReturnPlayers.remove(eventPlayer)
    ProcessNewPriorityList()
    eventPlayer.ultimateState = "NORMAL"
    lbl_0:


def UltEventHandler_Preparing():
    @Name "[stateMachine.del] Handle event for PREPARING_ULT state"

    goto loc+[9, 0, 7][["USED_ULTIMATE", "DIED"].index(eventPlayer.ultimateEvent) + 1]
    eventPlayer.allowButton(Button.ABILITY_1)
    eventPlayer.allowButton(Button.ABILITY_2)
    if not eventPlayer.isDuplicatingAHero():
        eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.ultimateState = "USING_ULT"
    goto lbl_0
    eventPlayer.ultimateState = "DEAD"
    async(RestoreTrueHeroAndReturnToNormal, AsyncBehavior.NOOP)
    lbl_0:


def SetLingerDuration():
    @Name "[SUB]: Set linger duration"

    eventPlayer.extendedUltDuration = 0
    goto loc+[17, 0, 2, 4, 6, 8, 10, 12, 14, 16][[Hero.JUNKER_QUEEN, Hero.HAMMOND, Hero.LIFEWEAVER, Hero.TRACER, Hero.ILLARI, Hero.TORBJORN, Hero.HANZO, Hero.BASTION, Hero.VENTURE].index(eventPlayer.getCurrentHero()) + 1]
    eventPlayer.extendedUltDuration = 5
    goto lbl_0
    eventPlayer.extendedUltDuration = 15
    goto lbl_1
    eventPlayer.extendedUltDuration = 15
    goto lbl_2
    eventPlayer.extendedUltDuration = 3
    goto lbl_3
    eventPlayer.extendedUltDuration = 5
    goto lbl_4
    eventPlayer.extendedUltDuration = 10
    goto lbl_5
    eventPlayer.extendedUltDuration = 10
    goto lbl_6
    eventPlayer.extendedUltDuration = 1
    goto lbl_7
    eventPlayer.extendedUltDuration = 1
    lbl_0:
    lbl_1:
    lbl_2:
    lbl_3:
    lbl_4:
    lbl_5:
    lbl_6:
    lbl_7:


def UltEventHandler_Using():
    @Name "[stateMachine.del] Handle event for USING_ULT state"

    goto loc+[9, 0, 7][["ULTIMATE_ENDED", "DIED"].index(eventPlayer.ultimateEvent) + 1]
    SetLingerDuration()
    if eventPlayer.extendedUltDuration > 0:
        eventPlayer.ultimateState = "LINGERING"
        goto lbl_0
    async(RestoreTrueHeroAndReturnToNormal, AsyncBehavior.NOOP)
    goto lbl_1
    eventPlayer.ultimateState = "DEAD"
    async(RestoreTrueHeroAndReturnToNormal, AsyncBehavior.NOOP)
    lbl_0:
    lbl_1:


def UltEventHandler_Lingering():
    @Name "[stateMachine.del] Handle event for LINGERING state"

    goto loc+[2, 0, 0][["LINGER_EXPIRED", "DIED"].index(eventPlayer.ultimateEvent) + 1]
    eventPlayer.disallowButton(Button.ULTIMATE)
    async(RestoreTrueHeroAndReturnToNormal, AsyncBehavior.NOOP)


def UltimateEventHandler():
    @Name "[stateMachine.del] Dispatch event to handler based on ultimateState"

    if DEBUG_LOG_EVENTS:
        if not DEBUG_MODE:
            enableInspector()
        printLog("{0}{1}".format("{0}{1}{2}".format("{0}{1}{2}".format("{0}{1}{2}".format("[", eventPlayer, "] Handling overall ult state event "), eventPlayer.ultimateEvent, " in state "), eventPlayer.ultimateState, ", on hero "), eventPlayer.getCurrentHero()))
        if not DEBUG_MODE:
            disableInspector()
    goto loc+[7, 0, 2, 4, 6][["NORMAL", "PREPARING_ULT", "USING_ULT", "LINGERING"].index(eventPlayer.ultimateState) + 1]
    UltEventHandler_Normal()
    goto lbl_0
    UltEventHandler_Preparing()
    goto lbl_1
    UltEventHandler_Using()
    goto lbl_2
    UltEventHandler_Lingering()
    lbl_0:
    lbl_1:
    lbl_2:
    if DEBUG_LOG_EVENTS:
        if not DEBUG_MODE:
            enableInspector()
        printLog("{0}{1}".format("{0}{1}{2}".format("{0}{1}{2}".format("{0}{1}{2}".format("[", eventPlayer, "] Finished handling overall ult state event "), eventPlayer.ultimateEvent, "; now in state "), eventPlayer.ultimateState, ", on hero "), eventPlayer.getCurrentHero()))
        if not DEBUG_MODE:
            disableInspector()


def PreparingUltEventHandler_None():
    @Name "[stateMachine.del] Handle event for NONE state"

    goto loc+[1, 0][["STATE_ENTER"].index(eventPlayer.preparingUltEvent) + 1]
    eventPlayer.preparingUltState = "SWITCHING_HEROES"


def SetStallDuration():
    @Name "[SUB]: Set cast stall duration"

    eventPlayer.ultCastStallDuration = 0
    goto loc+[3, 0, 2][[Hero.DVA, Hero.ZARYA].index(eventPlayer.getCurrentHero()) + 1]
    eventPlayer.ultCastStallDuration = 1.25
    goto lbl_0
    eventPlayer.ultCastStallDuration = 0.75
    lbl_0:


def PreparingUltEventHandler_Switchi():
    @Name "[stateMachine.del] Handle event for SWITCHING_HEROES state"

    goto loc+[14, 0, 10, 13][["HERO_SWAPPED", "USED_ULTIMATE", "STATE_EXIT"].index(eventPlayer.preparingUltEvent) + 1]
    #Begin preloading the trueHero for when the player swaps back
    ultimatePreparedPlayers.remove(eventPlayer)
    awaitingReturnPlayers.append(eventPlayer)
    ProcessNewPriorityList()
    SetStallDuration()
    if eventPlayer.ultCastStallDuration > 0:
        eventPlayer.preparingUltState = "STALLING"
        goto lbl_0
    eventPlayer.preparingUltState = "ACTIVATING_ULT"
    goto lbl_1
    eventPlayer.ultimateEvent = "USED_ULTIMATE"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"
    eventPlayer.preparingUltState = "NONE"
    lbl_0:
    lbl_1:


def PreparingUltEventHandler_Stallin():
    @Name "[stateMachine.del] Handle event for STALLING state"

    goto loc+[6, 0, 2, 5][["STALL_EXPIRED", "USED_ULTIMATE", "STATE_EXIT"].index(eventPlayer.preparingUltEvent) + 1]
    eventPlayer.preparingUltState = "ACTIVATING_ULT"
    goto lbl_0
    eventPlayer.ultimateEvent = "USED_ULTIMATE"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"
    eventPlayer.preparingUltState = "NONE"
    lbl_0:


def PreparingUltEventHandler_Activat():
    @Name "[stateMachine.del] Handle event for ACTIVATING_ULT state"

    goto loc+[6, 0, 2, 5][["PRESSED_ULTIMATE", "USED_ULTIMATE", "STATE_EXIT"].index(eventPlayer.preparingUltEvent) + 1]
    eventPlayer.preparingUltState = "CASTING_ULT"
    goto lbl_0
    eventPlayer.ultimateEvent = "USED_ULTIMATE"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"
    eventPlayer.preparingUltState = "NONE"
    lbl_0:


def PreparingUltEventHandler_Casting():
    @Name "[stateMachine.del] Handle event for CASTING_ULT state"

    goto loc+[6, 0, 2, 5][["PRESSED_ULTIMATE_EXPIRED", "USED_ULTIMATE", "STATE_EXIT"].index(eventPlayer.preparingUltEvent) + 1]
    eventPlayer.preparingUltState = "ACTIVATING_ULT"
    goto lbl_0
    eventPlayer.ultimateEvent = "USED_ULTIMATE"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"
    eventPlayer.preparingUltState = "NONE"
    lbl_0:


def PreparingUltimateEventHandler():
    @Name "[stateMachine.del] Handle preparing ult event"

    if DEBUG_LOG_EVENTS:
        if not DEBUG_MODE:
            enableInspector()
        printLog("{0}{1}".format("{0}{1}{2}".format("{0}{1}{2}".format("{0}{1}{2}".format("[", eventPlayer, "] Handling preparing ult state event "), eventPlayer.preparingUltEvent, " in state "), eventPlayer.preparingUltState, ", on hero "), eventPlayer.getCurrentHero()))
        if not DEBUG_MODE:
            disableInspector()
    goto loc+[9, 0, 2, 4, 6, 8][["NONE", "SWITCHING_HEROES", "STALLING", "ACTIVATING_ULT", "CASTING_ULT"].index(eventPlayer.preparingUltState) + 1]
    PreparingUltEventHandler_None()
    goto lbl_0
    PreparingUltEventHandler_Switchi()
    goto lbl_1
    PreparingUltEventHandler_Stallin()
    goto lbl_2
    PreparingUltEventHandler_Activat()
    goto lbl_3
    PreparingUltEventHandler_Casting()
    lbl_0:
    lbl_1:
    lbl_2:
    lbl_3:
    if DEBUG_LOG_EVENTS:
        if not DEBUG_MODE:
            enableInspector()
        printLog("{0}{1}".format("{0}{1}{2}".format("{0}{1}{2}".format("{0}{1}{2}".format("[", eventPlayer, "] Finished handling preparing ult state event "), eventPlayer.preparingUltEvent, "; now in state "), eventPlayer.preparingUltState, ", on hero "), eventPlayer.getCurrentHero()))
        if not DEBUG_MODE:
            disableInspector()


rule "When the game is between rounds, issue a DIED event to knock all players out of their mystery ult":
    @Event eachPlayer
    @Condition isMatchBetweenRounds() == true
    @Condition (not isMatchComplete()) == true

    waitUntil(not isMatchBetweenRounds(), 1000000)
    #Kick the player out of their mystery ult if they're still in it
    if eventPlayer.ultimateState == "NORMAL":
        return
    eventPlayer.ultimateEvent = "DIED"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"
    eventPlayer.preparingUltEvent = "STATE_EXIT"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"


rule "If the player despawns for at least 0.25 seconds, reset their hero availability":
    @Event eachPlayer
    @Condition SHOULD_RESET_HEROES_ON_DESPAWN == true
    @Condition (not eventPlayer.hasSpawned()) == true

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingCurrentHero()
    eventPlayer.resetHeroAvailability()


rule "DEBUG: When player melees, give them 25% ult charge":
    @Event eachPlayer
    @Condition DEBUG_MODE == true
    @Condition DEBUG_MELEE_FOR_ULT_CHARGE == true
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true

    eventPlayer.setUltCharge(min(100, eventPlayer.getUltCharge() + 25))


/*
rule "DEBUG: When player hits reload and crouch, toggle slow motion":
    @Event eachPlayer
    @Condition DEBUG_MODE == true
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true

    if IsInSlowMotion:
        setSlowMotion(100)
    else:
        setSlowMotion(10)
    IsInSlowMotion = not IsInSlowMotion
*/

rule "DEBUG: When player holds crouch for 2 seconds, swap their hero":
    @Event eachPlayer
    @Condition DEBUG_MODE == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true

    wait(2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.pos = eventPlayer.getPosition()
    eventPlayer.facing = eventPlayer.getFacingDirection()
    eventPlayer.setAllowedHeroes(getAllHeroes().exclude(eventPlayer.getCurrentHero()))
    waitUntil(not eventPlayer.hasSpawned(), 1)
    eventPlayer.resetHeroAvailability()
    waitUntil(eventPlayer.hasSpawned(), 1000000)
    eventPlayer.teleport(eventPlayer.pos)
    eventPlayer.startFacing(eventPlayer.facing, 1000, Relativity.TO_WORLD, FacingReeval.NONE)
    waitUntil(angleBetweenVectors(eventPlayer.getFacingDirection(), eventPlayer.facing) < 0.1, 1000000)
    eventPlayer.stopFacing()


/*
rule "DEBUG: Shorten assembling heroes in DEBUG_MODE":
    @Condition DEBUG_MODE == true
    @Condition isAssemblingHeroes() == true

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    setMatchTime(5)
*/

rule "DEBUG: Say Goodbye to end round":
    @Event eachPlayer
    @Condition DEBUG_MODE == true
    @Condition eventPlayer.isCommunicating(Comms.GOODBYE) == true

    setMatchTime(0)


rule "[trackAbilityLockout.del] When a player becomes hacked, start ability lockout timer":
    @Event eachPlayer
    @Condition eventPlayer.hasStatusEffect(Status.HACKED) == true

    stopChasingVariable(eventPlayer.hackAbilityLockout)
    #Ensure that we don't overwrite the EMP lockout duration
    if eventPlayer.hackAbilityLockout < 1.5:
        eventPlayer.hackAbilityLockout = 1.5
    chase(eventPlayer.hackAbilityLockout, 0, rate=1, ChaseReeval.NONE)
    #Handle cleansing
    waitUntil(not eventPlayer.hasStatusEffect(Status.HACKED) or eventPlayer.hackAbilityLockout <= 0, 1000000)
    eventPlayer.hackAbilityLockout = 0
    stopChasingVariable(eventPlayer.hackAbilityLockout)


rule "[trackAbilityLockout.del] When a player is hit by EMP, start ability lockout timer":
    @Event playerTookDamage
    @Condition attacker.getCurrentHero() == Hero.SOMBRA
    @Condition eventAbility == Button.ULTIMATE

    stopChasingVariable(eventPlayer.hackAbilityLockout)
    eventPlayer.hackAbilityLockout = 3
    chase(eventPlayer.hackAbilityLockout, 0, rate=1, ChaseReeval.NONE)


rule "[trackAbilityLockout.del] When hackAbilityLockout reaches 0, stop chasing it":
    @Event eachPlayer
    @Condition eventPlayer.hackAbilityLockout <= 0

    stopChasingVariable(eventPlayer.hackAbilityLockout)


rule "[stateMachine.del] Perform actions when stalling is activated":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.preparingUltState == "STALLING"

    goto loc+[3, 0][[Hero.DVA].index(eventPlayer.getCurrentHero()) + 1]
    eventPlayer.startForcingButton(Button.ABILITY_1)
    wait(1)
    eventPlayer.stopForcingButton(Button.ABILITY_1)


rule "When the player presses their ult button in NORMAL mode, activate ult":
    @Event eachPlayer
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.ultimateState == "NORMAL"
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.trueHero != eventPlayer.ultimateHero
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition any([eventPlayer.hackAbilityLockout > 0, eventPlayer.hasStatusEffect(Status.ASLEEP), eventPlayer.hasStatusEffect(Status.FROZEN), eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN), eventPlayer.hasStatusEffect(Status.STUNNED)]) == false

    eventPlayer.preparingUltEvent = "STATE_ENTER"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"
    eventPlayer.ultimateEvent = "ULT_ACTIVATION"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"


rule "When the player is in the preparing ult state and they swap off their true hero, issue a hero swap event":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.preparingUltState == "SWITCHING_HEROES"
    @Condition eventPlayer.getCurrentHero() != eventPlayer.trueHero

    eventPlayer.preparingUltEvent = "HERO_SWAPPED"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"


rule "When player is stalling ult cast, wait for the duration then issue a stall expired event":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.preparingUltState == "STALLING"

    wait(eventPlayer.ultCastStallDuration, Wait.ABORT_WHEN_FALSE)
    eventPlayer.preparingUltEvent = "STALL_EXPIRED"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"


rule "If player is placing ult doesn't have enough ult charge while casting, fill it up":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition (eventPlayer.preparingUltState == "ACTIVATING_ULT" or eventPlayer.preparingUltState == "STALLING") == true
    @Condition eventPlayer.getUltCharge() < 100
    @Condition eventPlayer.getUltCharge() > 0

    eventPlayer.setUltCharge(100)
    wait(0.05, Wait.ABORT_WHEN_FALSE)
    if RULE_CONDITION:
        goto RULE_START


rule "Continually attempt to use ult while in the preparing ult state and the player is in the activating ult state":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.preparingUltState != "STALLING"
    @Condition eventPlayer.getCurrentHero() in placeableUltimateHeroes == false
    @Condition eventPlayer.getUltCharge() == 100

    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.05, Wait.ABORT_WHEN_FALSE)
    if RULE_CONDITION:
        goto RULE_START


rule "When the player presses their ult button in the activating state, issue an ult_pressed event, then after a while, if we haven't exited the state, issue an ult_pressed_expired event":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.preparingUltState == "ACTIVATING_ULT"
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition eventPlayer.getUltCharge() == 0

    eventPlayer.preparingUltEvent = "PRESSED_ULTIMATE"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"
    waitUntil(eventPlayer.ultimateState != "PREPARING_ULT", 1)
    if eventPlayer.ultimateState == "PREPARING_ULT":
        eventPlayer.preparingUltEvent = "PRESSED_ULTIMATE_EXPIRED"
        PreparingUltimateEventHandler()
        eventPlayer.preparingUltEvent = "NONE"


rule "In the using ult state, if the player gains ult charge, set it back to 0":
    @Event eachPlayer
    @Condition (eventPlayer.ultimateState == "USING_ULT" or eventPlayer.ultimateState == "LINGERING") == true
    @Condition eventPlayer.getUltCharge() > 0
    @Condition (not eventPlayer.isDuplicatingAHero()) == true

    eventPlayer.setUltCharge(0)
    wait()
    if RULE_CONDITION:
        goto RULE_START


rule "While attempting to cast ult, if player has an placeable ult and they cancel it, bring it back up":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.getCurrentHero() in placeableUltimateHeroes == true
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true

    wait(0.25)
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "While attempting to cast ult, if player has a placeable ult and they get hard CC'd, bring it back up when they are no longer afflicted":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition eventPlayer.getCurrentHero() in placeableUltimateHeroes == true
    @Condition any([eventPlayer.hackAbilityLockout > 0, eventPlayer.hasStatusEffect(Status.ASLEEP), eventPlayer.hasStatusEffect(Status.FROZEN), eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN), eventPlayer.hasStatusEffect(Status.STUNNED)]) == true

    waitUntil(any([eventPlayer.hackAbilityLockout > 0, eventPlayer.hasStatusEffect(Status.ASLEEP), eventPlayer.hasStatusEffect(Status.FROZEN), eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN), eventPlayer.hasStatusEffect(Status.STUNNED)]) == false, 1000000)
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "When the player dies, issue the appropriate events":
    @Event playerDied

    eventPlayer.ultimateEvent = "DIED"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"
    eventPlayer.preparingUltEvent = "STATE_EXIT"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"


rule "When the player starts using ult, issue a USED_ULTIMATE event, then when they stop using it, issue a ULTIMATE_ENDED event":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "PREPARING_ULT"
    @Condition (eventPlayer.isUsingUltimate() or eventPlayer.isDuplicatingAHero()) == true

    eventPlayer.preparingUltEvent = "USED_ULTIMATE"
    PreparingUltimateEventHandler()
    eventPlayer.preparingUltEvent = "NONE"
    waitUntil(not eventPlayer.isUsingUltimate() and not eventPlayer.isDuplicatingAHero(), 1000000)
    #Have to wait a bit for Kiriko because casting ult can cause IsUsingUltimate to go false for a short period of time
    if eventPlayer.getCurrentHero() == Hero.KIRIKO:
        waitUntil(eventPlayer.isUsingUltimate() or eventPlayer.isDuplicatingAHero(), 0.5)
        if eventPlayer.isUsingUltimate() or eventPlayer.isDuplicatingAHero():
            goto RULE_START
    eventPlayer.ultimateEvent = "ULTIMATE_ENDED"
    UltimateEventHandler()
    eventPlayer.ultimateEvent = "NONE"


rule "When the lingering state begins, start a timer":
    @Event eachPlayer
    @Condition eventPlayer.ultimateState == "LINGERING"

    eventPlayer.extendedUltPercentLeft = 100
    chase(eventPlayer.extendedUltPercentLeft, 0, duration=eventPlayer.extendedUltDuration, ChaseReeval.NONE)
    progressBarHud(eventPlayer, eventPlayer.extendedUltPercentLeft, "Ultimate Hero Time Remaining", HudPosition.LEFT, -10, rgba(0, 234, 234, (min(1, max(0, (eventPlayer.extendedUltPercentLeft - 33) / 17)) + ((1 - (min(1, max(0, (eventPlayer.extendedUltPercentLeft - 33) / 17)))) * (sin(sqrt(eventPlayer.extendedUltDuration * eventPlayer.extendedUltPercentLeft * 18.85)) / 2 + 0.5))) * 223 + 32), Color.WHITE, ProgressHudReeval.VISIBILITY_VALUES_AND_COLOR, SpecVisibility.DEFAULT)
    eventPlayer.extendedUltTimer = getLastCreatedText()
    bigMessage(eventPlayer, "Returning to original hero in {0} seconds...".format(eventPlayer.extendedUltDuration))
    waitUntil(eventPlayer.extendedUltPercentLeft == 0 or eventPlayer.ultimateState != "LINGERING", 1000000)
    if eventPlayer.extendedUltPercentLeft > 0:
        eventPlayer.extendedUltPercentLeft = 0
        stopChasingVariable(eventPlayer.extendedUltPercentLeft)
    else:
        eventPlayer.ultimateEvent = "LINGER_EXPIRED"
        UltimateEventHandler()
        eventPlayer.ultimateEvent = "NONE"
    destroyProgressBarHud(eventPlayer.extendedUltTimer)


