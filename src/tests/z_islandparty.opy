#!suppressWarnings w_closest_player

settings {
    "main": {
        "description": "Island Party - Heroes Minigames    v3.1.1-23    Play rounds of 23 classic and new games as minigames and score points.    Widow HS only, McCree Hot Potato, Zen Sparta, Echo Rings...    Code: W468T    Join my discord.io/IslandParty to choose the next minigame or give feedback.    ~Created by Jokaes#2263 My codes in: jokaes.github.io",
        "modeName": "Island Party - Heroes Minigames"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "mapRotation": "afterGame",
        "enableMatchVoiceChat": true,
        "spectatorSlots": 6,
        "returnToLobby": "never"
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                "workshopIsland",
                "workshopIslandNight"
            ]
        },
        "general": {
            "enableHeroSwitching": false,
            "gamemodeStartTrigger": "immediately",
            "heroLimit": "off",
            "enableKillCam": false,
            "enableKillFeed": false,
            "enableRandomHeroes": true,
            "enableSelfInitiatedRespawn": false,
            "enableSkins": false
        }
    },
    "heroes": {
        "allTeams": {
            "ana": {
                "enableAbility2": false,
                "damageDealt%": 500,
                "damageReceived%": 500,
                "health%": 10,
                "enableInfiniteAmmo": true,
                "enableMelee": false,
                "ability1Cooldown%": 25,
                "enableUlt": false
            },
            "bastion": {
                "enableSecondaryFire": false,
                "enableInfiniteUlt": true,
                "enableInfiniteAmmo": true,
                "enableMelee": false,
                "enableAbility1": false,
                "enableSpawningWithUlt": true,
                "ultDuration%": 500,
                "combatUltGen%": 500,
                "passiveUltGen%": 500,
                "ultGen%": 500
            },
            "brigitte": {
                "secondaryFireCooldown%": 200,
                "secondaryFireRechargeRate%": 150,
                "damageDealt%": 500,
                "jumpVerticalSpeed%": 200,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "enableAbility2": false,
                "shieldBashCooldown%": 35,
                "combatUltGen%": 200,
                "passiveUltGen%": 0,
                "ability1Cooldown%": 30,
                "ability1Kb%": 200
            },
            "cassidy": {
                "ability1Cooldown%": 80,
                "damageDealt%": 10,
                "damageReceived%": 10,
                "enableAbility2": false,
                "jumpVerticalSpeed%": 300,
                "enableInfiniteAmmo": true,
                "enableSecondaryFire": false,
                "enableUlt": false
            },
            "dva": {
                "ability1Cooldown%": 0,
                "damageDealt%": 10,
                "damageReceived%": 10,
                "enableSecondaryFire": false,
                "enableAbility2": false,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "combatUltGen%": 0,
                "passiveUltGen%": 0
            },
            "doomfist": {
                "damageDealt%": 10,
                "damageReceived%": 10,
                "health%": 500,
                "enableInfiniteAmmo": true,
                "enableAbility1": false,
                "enableMelee": false,
                "secondaryFireCooldown%": 50,
                "secondaryFireKb%": 250,
                "combatUltGen%": 50,
                "passiveUltGen%": 0
            },
            "echo": {
                "ability1Cooldown%": 50,
                "ability2Cooldown%": 50,
                "movementSpeed%": 200,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableSecondaryFire": false,
                "enableUlt": false
            },
            "genji": {
                "damageDealt%": 500,
                "enableAbility2": false,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableSecondaryFire": false,
                "ability1Cooldown%": 30,
                "combatUltGen%": 500,
                "passiveUltGen%": 0,
                "ultGen%": 200
            },
            "lucio": {
                "enableAbility2": false,
                "enableAbility1": false,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "enableSecondaryFire": false,
                "enableUlt": false
            },
            "mei": {
                "damageDealt%": 500,
                "damageReceived%": 500,
                "health%": 10,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "projectileGravity%": 500,
                "projectileSpeed%": 38,
                "combatUltGen%": 125
            },
            "mercy": {
                "damageDealt%": 500,
                "damageReceived%": 500,
                "enableAbility1": false,
                "movementSpeed%": 150,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableAbility2": false,
                "enableSecondaryFire": false,
                "combatUltGen%": 500,
                "ultGen%": 500
            },
            "reinhardt": {
                "enableSecondaryFire": false,
                "ability1Cooldown%": 90,
                "ability2Cooldown%": 50,
                "combatUltGen%": 0,
                "passiveUltGen%": 0
            },
            "roadhog": {
                "ability1Cooldown%": 38,
                "damageDealt%": 10,
                "damageReceived%": 10,
                "movementSpeed%": 150,
                "enableInfiniteAmmo": true,
                "enableAbility2": false,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "combatUltGen%": 0,
                "passiveUltGen%": 500,
                "ultGen%": 180
            },
            "sigma": {
                "ability2Cooldown%": 25,
                "damageDealt%": 500,
                "secondaryFireCooldown%": 200,
                "secondaryFireRechargeRate%": 50,
                "health%": 25,
                "jumpVerticalSpeed%": 150,
                "movementSpeed%": 150,
                "enablePrimaryFire": false,
                "projectileSpeed%": 162,
                "enableMelee": false,
                "combatUltGen%": 260,
                "passiveUltGen%": 0,
                "ultGen%": 260
            },
            "soldier": {
                "enableAbility2": false,
                "enableSecondaryFire": false,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "enableUlt": false
            },
            "sombra": {
                "secondaryFireCooldown%": 0,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "combatUltGen%": 10,
                "passiveUltGen%": 500
            },
            "symmetra": {
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableMelee": false,
                "enableSecondaryFire": false,
                "enableAbility1": false,
                "ability2Cooldown%": 0,
                "enableUlt": false
            },
            "torbjorn": {
                "enableAbility1": false,
                "enableInfiniteAmmo": true,
                "ability2Cooldown%": 25,
                "enableSecondaryFire": false,
                "enableUlt": false,
                "weaponsEnabled": "hammer"
            },
            "tracer": {
                "damageDealt%": 10,
                "damageReceived%": 10,
                "movementSpeed%": 130,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "ability2Cooldown%": 1,
                "enableUlt": false
            },
            "widowmaker": {
                "ability1Cooldown%": 25,
                "enableInfiniteAmmo": true,
                "enableAutomaticFire": false,
                "enableMelee": false,
                "enableHeadshotsOnly": true,
                "enableUlt": false,
                "enableAbility2": false
            },
            "winston": {
                "enableAbility2": false,
                "damageDealt%": 10,
                "damageReceived%": 10,
                "health%": 500,
                "enableInfiniteUlt": true,
                "ability1Kb%": 400,
                "enableInfiniteAmmo": true,
                "ultKb%": 300,
                "enableSpawningWithUlt": true,
                "ultDuration%": 500,
                "combatUltGen%": 500,
                "passiveUltGen%": 500,
                "ultGen%": 500
            },
            "zenyatta": {
                "damageDealt%": 10,
                "damageReceived%": 10,
                "enableInfiniteAmmo": true,
                "enableAbility2": false,
                "enableAbility1": false,
                "enablePrimaryFire": false,
                "enableSecondaryFire": false,
                "enableUlt": false
            },
            "disabledHeroes": [
                "ashe",
                "baptiste",
                "hanzo",
                "junkrat",
                "moira",
                "orisa",
                "reaper",
                "wreckingBall",
                "zarya"
            ]
        }
    }
}

#!suppressWarnings w_ow2_rule_condition_chase

#Global variables

globalvar timeCounter 0
globalvar roundTimer 1
globalvar roundNumber 2
globalvar playersStartOfTheRound 3
globalvar heroList 4
globalvar heroModeSelector 5
globalvar heroOfTheRound 7
globalvar heroesOfPreviousRounds 8
globalvar minigameStringTitles 9
globalvar minigameStringCodes 10
globalvar minigameStringCredit 11
globalvar minigameStringInstructions 12
globalvar discordSubtringArray 13
globalvar pointfeedHud 14
globalvar pointfeedHudTimes 15
globalvar pointfeedHudId 16
globalvar pointfeedHudTimesIt 17
globalvar hofPlayers 18
globalvar hofPlayersCounter 19
globalvar crownPos 20
globalvar crownEffect 21
globalvar tracerQueen 22
globalvar soldierObjectivePos 23
globalvar soldierObjectiveEffects 24
globalvar soldierDestructorIt 25
globalvar tracerQueenHud 26
globalvar potatoPos 27
globalvar potatoHolder 28
globalvar potatoEffect 29
globalvar potatoIcon 30
globalvar commonRingsEffects 31
globalvar rareRingsEffects 32
globalvar epicRingsEffects 33
globalvar legendaryRingsEffects 34
globalvar commonRingsPos 35
globalvar rareRingsPos 36
globalvar epicRingsPos 37
globalvar legendaryRingsPos 38
globalvar ringsIt 39
globalvar echoTeleportEffects 40
globalvar echoTeleportPos 41
globalvar echoRightHud 42
globalvar dvaObjectivePos 43
globalvar dvaObjectiveEffects 44
globalvar dvaDestructorIt 45
globalvar dvaObjectiveIcons 46
globalvar roadhogHoleRadius 47
globalvar roadhogHoleEffects 48
globalvar roadhogHoleEffectsIt 49
globalvar meiSnowEffects 50
globalvar meiSnowPos 51
globalvar meiSnowIt 52
globalvar snotPos 53
globalvar snotPosRandomXComp 54
globalvar snotPosRandomYComp 55
globalvar snotPosRandomZComp 56
globalvar snotEffects 57
globalvar destructorIt 58
globalvar heroOfLastRound 59
globalvar islandPartyCode 60
globalvar islandPartySpecialEdition 61
globalvar tracerQueenPositionIcon 62
globalvar firstToX 63
globalvar minigamesToggleArray 64
globalvar workshopSettingsIt 65
globalvar scoreToWin 66
globalvar topScorerAfterAllMinigames 67
globalvar symColorDeciding 68
globalvar symPhase 69
globalvar symColorSelected 70
globalvar symColorsPositions 71
globalvar symPlayersInTheSelectedColor 72
globalvar symInnerRound 73
globalvar symTimeToReachTheColor 74
globalvar symSelectedColorHud 75
globalvar symTimeToReachTheColorHud 76
globalvar symColoredSpheresEffectsAndText 77
globalvar symVictims 78


#Player variables

playervar queenPoints 0
playervar queenPointsHud 1
playervar soldierSprint 2
playervar soldierPoints 3
playervar soldierPointsHud 4
playervar mccreeInvincibleTime 5
playervar mccreeInvincibleText 6
playervar mccreeInvincibleHud 7
playervar mccreeHealthHud 8
playervar pharahHealEffect 9
playervar pharahDamageBoostEffect 10
playervar pharahHeal 11
playervar pharahDamageBoost 12
playervar pharahHealHud 13
playervar pharahDamageBoostHud 14
playervar echoPoints 15
playervar echoPointsHud 16
playervar echoClosestRing 17
playervar sigmaUsingGrasp 18
playervar sigmaCatch 19
playervar dvaPoints 20
playervar dvaPointsHud 21
playervar roadhogYanked 23
playervar dvaDistanceText 24
playervar roadhogFalling 25
playervar meiMeeleCatchCooldown 26
playervar meiAmmo 27
playervar meiClosestSnow 28
playervar meiIsPickingSnow 29
playervar meiPickingSnowTimer 30
playervar meiIsCatching 31
playervar meiCatchCooldownHud 32
playervar meiAmmoHud 33
playervar meiHasAmmoIcon 34
playervar thirdCameraDirection 35
playervar thirdCameraZoom 36
playervar isOnThirdCamera 37
playervar meiCrouchOnMeText 38
playervar meiHasPickedUpAnyAmmo 39
playervar lucioClosestSnotIcon 40
playervar meiCatchActiveCooldownHud 41
playervar meiCatchSphereEffect 42
playervar lucioSpeed 43
playervar lucioPoints 44
playervar lucioPointsHud 45
playervar lucioClosestSnot 46
playervar lucioHasBeenOnWall 47
playervar playerSpeedHud 48
playervar discordLinkForHofPlayersHud 49
playervar playerClosestObjectiveIcon 50
playervar reinLastAttacker 51
playervar reinAttackerCreditTimer 52
playervar reinTempUltCharge 53
playervar reinUltTimer 54
playervar reinIsAlive 55
playervar reinChargeCancelTimer 56
playervar reinChargeTimer 57
playervar reinCanCancelCharge 58
playervar reinAuraEffect 59
playervar reinUltHud 60
playervar reinExplosionCenter 61
playervar symFirstPlayerInColorText 62
playervar symOrdinalString 63
playervar symOrdinalPosHud 64
playervar symIn 65
playervar sombraHackedPostion 66


#Subroutine names

subroutine gameModeDescriptionMessages 0
subroutine startNewRound 1
subroutine restartStats 2
subroutine symTheColorIsSelectedTrigger 3
subroutine symScoring 4


rule "Is in setup {GLOBAL}":
    @Condition isInSetup() == true

    roundTimer = 60
    getAllPlayers().enableDeathSpectateAllPlayers()
    getAllPlayers().disableRespawn()
    getAllPlayers().setRespawnTime(60)
    islandPartyCode = "W468T"
    islandPartySpecialEdition = ""
    roundNumber = 0
    heroList = []
    heroesOfPreviousRounds = []
    discordSubtringArray = ["vote for the next minigame", "give feedback", "report bugs"]
    heroList.append(Hero.ANA)
    heroList.append(Hero.BASTION)
    heroList.append(Hero.BRIGITTE)
    heroList.append(Hero.DOOMFIST)
    heroList.append(Hero.DVA)
    heroList.append(Hero.ECHO)
    heroList.append(Hero.GENJI)
    heroList.append(Hero.LUCIO)
    heroList.append(Hero.CASSIDY)
    heroList.append(Hero.MEI)
    heroList.append(Hero.MERCY)
    heroList.append(Hero.PHARAH)
    heroList.append(Hero.REINHARDT)
    heroList.append(Hero.ROADHOG)
    heroList.append(Hero.SIGMA)
    heroList.append(Hero.SOLDIER)
    heroList.append(Hero.SOMBRA)
    heroList.append(Hero.SYMMETRA)
    heroList.append(Hero.TORBJORN)
    heroList.append(Hero.TRACER)
    heroList.append(Hero.WIDOWMAKER)
    heroList.append(Hero.WINSTON)
    heroList.append(Hero.ZENYATTA)
    hudText(getAllPlayers(), "CODE: {0}".format(islandPartyCode), "" if islandPartyCode == "W468T" else "SPECIAL EDITION", islandPartySpecialEdition, HudPosition.LEFT, -998.5, Color.WHITE, Color.SKY_BLUE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), null, " ", "Island Party - Heroes Minigames v3.1.1-23", HudPosition.LEFT, -998, Color.WHITE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Play rounds of {0}/23 classic and new games as minigames".format(len(heroList)), HudPosition.LEFT, -997, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Join discord.io/IslandParty and {0}".format(discordSubtringArray[roundNumber % 3]), HudPosition.LEFT, -996, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Find all my codes in: jokaes.github.io", HudPosition.LEFT, -995.5, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(getAllPlayers(), "Created by Jokaes#2263", HudPosition.LEFT, -995, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(getAllPlayers(), "  \n ", HudPosition.LEFT, -994, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(getAllPlayers(), "{0}".format(l"Round {0}".format(roundNumber)), HudPosition.TOP, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    wait(1.5)
    potatoPos = vect(500, 500, 500)
    hudSubtext(getAllPlayers(), " \r\n\u0009\u0009\r\n\u0009\u0009\r\n\u0009\u0009\r\n\u0009\u0009\r\n\u0009\u0009\r\n\u0009\u0009", HudPosition.LEFT, -999, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if len(hofPlayers) > 0], "Hall of fame", HudPosition.RIGHT, -600, Color.ORANGE, HudReeval.VISIBILITY_AND_SORT_ORDER)
    createInWorldText(getAllPlayers(), "CODE: {0}".format(islandPartyCode), vect(0, 200, 0), 4, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    wait(3.5)
    getAllPlayers().communicate(Comms.COUNTDOWN)


rule "Disable bulit-in game mode & start timer variables {Game in progress GLOBAL}":
    @Condition isGameInProgress() == true

    disableGamemodeCompletion()
    disableMusic()
    disableAnnouncer()
    disableScoring()
    getAllPlayers().enableDeathSpectateAllPlayers()
    getAllPlayers().disableRespawn()
    getAllPlayers().setRespawnTime(60)
    pauseMatchTime()
    timeCounter = 0.001
    roundTimer = 60
    #Timer of the round HUD {Standard}
    hudHeader([player for player in getAllPlayers() if roundTimer > 10], ":{0}".format(round(roundTimer)), HudPosition.RIGHT, -999, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #Timer of the round HUD {Last moments}
    hudHeader([player for player in getAllPlayers() if roundTimer <= 10], ":{0}".format(round(roundTimer)), HudPosition.RIGHT, -999, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    #Timer of the round HUD separator
    hudSubheader(getAllPlayers(), " ", HudPosition.RIGHT, -998, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #Creates a HUD in the top with [svr load: {0} | svr avg: {1} | svr peak: {2}] LOW LOAD(GREEN)
    hudSubheader([i for i in hostPlayer if (getServerLoad() + getAverageServerLoad() + getPeakServerLoad()) / 3 < 128 and "#Jokaes" == l"#{0}".format(hostPlayer)], "svr load: {0} | svr avg: {1} | svr peak: {2}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()), HudPosition.TOP, -100, Color.LIME_GREEN, HudReeval.VISIBILITY_AND_STRING)
    #Creates a HUD in the top with [svr load: {0} | svr avg: {1} | svr peak: {2}] MID LOAD(ORANGE)
    hudSubheader([i for i in hostPlayer if (getServerLoad() + getAverageServerLoad() + getPeakServerLoad()) / 3 >= 128 and (getServerLoad() + getAverageServerLoad() + getPeakServerLoad()) / 3 <= 192 and "#Jokaes" == l"#{0}".format(hostPlayer)], "svr load: {0} | svr avg: {1} | svr peak: {2}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()), HudPosition.TOP, -100, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    #Creates a HUD in the top with [svr load: {0} | svr avg: {1} | svr peak: {2}] HIGH LOAD(RED)
    hudSubheader([i for i in hostPlayer if (getServerLoad() + getAverageServerLoad() + getPeakServerLoad()) / 3 > 192 and "#Jokaes" == l"#{0}".format(hostPlayer)], "svr load: {0} | svr avg: {1} | svr peak: {2}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()), HudPosition.TOP, -100, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hofPlayers = []
    pointfeedHud = []
    pointfeedHudTimes = [true, true, true, true, true, true]
    pointfeedHudId = 0
    hudText(getAllPlayers(), minigameStringTitles[heroModeSelector], minigameStringCodes[heroModeSelector], minigameStringCredit[heroModeSelector], HudPosition.TOP, 0.001, Color.ORANGE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
    playersStartOfTheRound = getAllPlayers()


rule "Is game in progress {PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true

    async(gameModeDescriptionMessages, AsyncBehavior.NOOP)
    eventPlayer.enableDeathSpectateAllPlayers()
    eventPlayer.disableRespawn()
    eventPlayer.setRespawnTime(60)
    playersStartOfTheRound = getAllPlayers()


rule "Player join in setup":
    @Event playerJoined
    @Condition isInSetup() == true
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.isAlive() == true

    wait(0.512)
    eventPlayer.startForcingHero(heroOfTheRound)
    eventPlayer.setRespawnTime(9999)


rule "Player join with game in progress":
    @Event playerJoined
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true

    async(gameModeDescriptionMessages, AsyncBehavior.NOOP)
    eventPlayer.disableRespawn()
    eventPlayer.setRespawnTime(60)
    wait(0.512)
    eventPlayer.startForcingHero(heroOfTheRound)
    eventPlayer.teleport(vect(500, 500, 500))
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    wait(0.512)
    kill(eventPlayer)
    eventPlayer.setRespawnTime(9999)


rule "String Arrays (Title, credit, code and instructions)":
    hudSubtext(getAllPlayers(), minigameStringInstructions[heroModeSelector], HudPosition.TOP, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    minigameStringTitles = []
    #Ana
    minigameStringTitles.append("{0} PAINTBALL {0}".format(heroIcon(Hero.ANA)))
    #Bastion
    minigameStringTitles.append("{0} WORLD OF TANKS {0}".format(heroIcon(Hero.BASTION)))
    #Brigitte
    minigameStringTitles.append("{0} BOOP {0}".format(heroIcon(Hero.BRIGITTE)))
    #Doomfist
    minigameStringTitles.append("{0} DOOM SUMO {0}".format(heroIcon(Hero.DOOMFIST)))
    #D.Va
    minigameStringTitles.append("{0} AIR RACE {0}".format(heroIcon(Hero.DVA)))
    #Echo
    minigameStringTitles.append("{0} RINGS {0}".format(heroIcon(Hero.ECHO)))
    #Genji
    minigameStringTitles.append("{0} DASH {0}".format(heroIcon(Hero.GENJI)))
    #Lúcio
    minigameStringTitles.append("{0} SNOT COLLECTOR {0}".format(heroIcon(Hero.LUCIO)))
    #McCree
    minigameStringTitles.append("{0} HOT POTATO {0}".format(heroIcon(Hero.CASSIDY)))
    #Mei
    minigameStringTitles.append("{0} SNOWBALL {0}".format(heroIcon(Hero.MEI)))
    #Mercy
    minigameStringTitles.append("{0} 1 PUNCH {0}".format(heroIcon(Hero.MERCY)))
    #Pharah
    minigameStringTitles.append("{0} PHARMERCY SIMULATED {0}".format(heroIcon(Hero.PHARAH)))
    #Reinhardt
    minigameStringTitles.append("{0} LAST MAN BOUNCING {0}".format(heroIcon(Hero.REINHARDT)))
    #Roadhog
    minigameStringTitles.append("{0} {1} HOOKS 1 HOLE {0}".format(heroIcon(Hero.ROADHOG), getNumberOfLivingPlayers(Team.ALL)))
    #Sigma
    minigameStringTitles.append("{0} DODGEBALL {0}".format(heroIcon(Hero.SIGMA)))
    #Soldier: 76
    minigameStringTitles.append("{0} SPRINT RACING {0}".format(heroIcon(Hero.SOLDIER)))
    #Sombra
    minigameStringTitles.append("{0} HACK TO KILL {0}".format(heroIcon(Hero.SOMBRA)))
    #Symmetra
    minigameStringTitles.append("{0} TELEPORT TO THE COLOR {0}".format(heroIcon(Hero.SYMMETRA)))
    #Torbjörn
    minigameStringTitles.append("{0} HAMMER ONLY {0}".format(heroIcon(Hero.TORBJORN)))
    #Tracer
    minigameStringTitles.append("{0} STEAL THE CROWN {0}".format(heroIcon(Hero.TRACER)))
    #Widowmaker
    minigameStringTitles.append("{0} HS ONLY {0}".format(heroIcon(Hero.WIDOWMAKER)))
    #Winston
    minigameStringTitles.append("{0} MONKEY SUMO {0}".format(heroIcon(Hero.WINSTON)))
    #Zenyatta
    minigameStringTitles.append("{0} SPARTA {0}".format(heroIcon(Hero.ZENYATTA)))
    minigameStringCodes = []
    #Ana
    minigameStringCodes.append("Play it more on 1950N")
    #Bastion
    minigameStringCodes.append("Play it more on 33NKS")
    #Brigitte
    minigameStringCodes.append("Play it more on 55MMT / ZYDQM")
    #Doomfist
    minigameStringCodes.append("Play it more on ZWE5E / 2A2YA")
    #D.Va
    minigameStringCodes.append("Play it more on DV5CA")
    #Echo
    minigameStringCodes.append("Play it more on XECF0")
    #Genji
    minigameStringCodes.append("Play it more on BBQ9Z")
    #Lúcio
    minigameStringCodes.append("Play it more on KAJAB")
    #McCree
    minigameStringCodes.append("Play it more on 9jane")
    #Mei
    minigameStringCodes.append("Play it more on MQCCY")
    #Mercy
    minigameStringCodes.append("Play it more on YWKSZ & AB7DJ")
    #Pharah
    minigameStringCodes.append("Play it more on DKKKD")
    #Reinhardt
    minigameStringCodes.append("Play it more on KXQZ1")
    #Roadhog
    minigameStringCodes.append("Play it more on DK0DP")
    #Sigma
    minigameStringCodes.append("Play it more on 8P769 / AN5P7")
    #Soldier: 76
    minigameStringCodes.append("Play it more on STJTC")
    #Sombra
    minigameStringCodes.append("Play it more on YJK0D6")
    #Symmetra
    minigameStringCodes.append("Play it more on BANWB")
    #Torbjörn
    minigameStringCodes.append("Play it more on PHGM1")
    #Tracer
    minigameStringCodes.append("Play it more on 0X8N0")
    #Widowmaker
    minigameStringCodes.append("Play it more on EA5XD")
    #Winston
    minigameStringCodes.append("Play it more on RA906")
    #Zenyatta
    minigameStringCodes.append("Play it more on ZENPM")
    minigameStringCredit = []
    #Ana
    minigameStringCredit.append("BY TOOTHPASTE")
    #Bastion
    minigameStringCredit.append("BY JOKAES")
    #Brigitte
    minigameStringCredit.append("BY FARRON / BLOCK")
    #Doomfist
    minigameStringCredit.append("BY CREBOS & CLAMINIUM / KIKUGIE")
    #D.Va
    minigameStringCredit.append("BY JOKAES")
    #Echo
    minigameStringCredit.append("BY JOKAES")
    #Genji
    minigameStringCredit.append("BY GANTZ")
    #Lúcio
    minigameStringCredit.append("BY JOKAES")
    #McCree
    minigameStringCredit.append("BY KEVLAR")
    #Mei
    minigameStringCredit.append("BY MITSIEE")
    #Mercy
    minigameStringCredit.append("BY PARACHOR")
    #Pharah
    minigameStringCredit.append("BY SEITA")
    #Reinhardt
    minigameStringCredit.append("BY KEVLAR & JINKO")
    #Roadhog
    minigameStringCredit.append("BY BLOCK")
    #Sigma
    minigameStringCredit.append("BY PUG / VOXCAE")
    #Soldier: 76
    minigameStringCredit.append("BY DARWIN")
    #Sombra
    minigameStringCredit.append("BY TEHFOOT")
    #Symmetra
    minigameStringCredit.append("BY TEHFOOT")
    #Torbjörn
    minigameStringCredit.append("BY JOKAES")
    #Tracer
    minigameStringCredit.append("BY KEVLAR")
    #Widowmaker
    minigameStringCredit.append("BY TOOTHPASTE")
    #Winston
    minigameStringCredit.append("BY JOKAES")
    #Zenyatta
    minigameStringCredit.append("BY JOKAES. ORIGINAL CREATION BY DARWIN")
    minigameStringInstructions = []
    #Ana
    minigameStringInstructions.append("One shoot to kill!")
    #Bastion
    minigameStringInstructions.append("BOO BEE BEE BEE BOO BEEEE!")
    #Brigitte
    minigameStringInstructions.append("Protect yourself and boop the others!")
    #Doomfist
    minigameStringInstructions.append("Use your punches to get them out!")
    #D.Va
    minigameStringInstructions.append("Boost and race!")
    #Echo
    minigameStringInstructions.append("Collect those rings!")
    #Genji
    minigameStringInstructions.append("Dash!")
    #Lúcio
    minigameStringInstructions.append("Collect snot from the walls to gain speed!")
    #McCree
    minigameStringInstructions.append("Shoot to pass the hot potato!")
    #Mei
    minigameStringInstructions.append("Pick up snow and shoot!")
    #Mercy
    minigameStringInstructions.append("Punch to kill and get ultimate!")
    #Pharah
    minigameStringInstructions.append("Kill'em all with your Mercy pocket simulated!")
    #Reinhardt
    minigameStringInstructions.append("Survive, don't fall and knock them away!")
    #Roadhog
    minigameStringInstructions.append("Yank'em into the hole!")
    #Sigma
    minigameStringInstructions.append("Knock them out with your big rock!")
    #Soldier: 76
    minigameStringInstructions.append("Gotta go fast!")
    #Sombra
    minigameStringInstructions.append("Hack your opponents to kill'em!")
    #Symmetra
    minigameStringInstructions.append("Teleport to the right color!")
    #Torbjörn
    minigameStringInstructions.append("Overload and hammer down!")
    #Tracer
    minigameStringInstructions.append("Meele to steal the crown!")
    #Widowmaker
    minigameStringInstructions.append("Aim for the head!")
    #Winston
    minigameStringInstructions.append("Ape kill ape!")
    #Zenyatta
    minigameStringInstructions.append("Kick them for Spartaaa!")


rule "WORKSHOP SETTINGS":
    @Condition isInSetup() == true

    firstToX = createWorkshopSettingBool("WIN CONDITIONS", "FIRST TO [X] POINTS - WIN STATE", false)
    scoreToWin = createWorkshopSettingInt("WIN CONDITIONS", "SCORE TO WIN (30)", 30, 15, 200)
    topScorerAfterAllMinigames = createWorkshopSettingBool("WIN CONDITIONS", "TOP SCORER AFTER PLAYING ALL THE MINIGAMES", false)
    minigamesToggleArray = null
    for workshopSettingsIt in range(len(heroList)):
        minigamesToggleArray.append(false)
    minigamesToggleArray[0] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "ANA - PAINTBALL", true)
    minigamesToggleArray[1] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "BASTION - WORLD OF TANKS", true)
    minigamesToggleArray[2] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "BRIGITTE - BOOP", true)
    minigamesToggleArray[3] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "DOOMFIST - DOOM SUMO", true)
    minigamesToggleArray[4] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "DVA - AIR RACE", true)
    minigamesToggleArray[5] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "ECHO - RINGS", true)
    minigamesToggleArray[6] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "GENJI - DASH", true)
    minigamesToggleArray[7] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "LÚCIO - SNOT COLLECTOR", true)
    minigamesToggleArray[8] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "MCCREE - HOT POTATO", true)
    minigamesToggleArray[9] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "MEI - SNOWBALL", true)
    minigamesToggleArray[10] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "MERCY - 1 PUNCH", true)
    minigamesToggleArray[11] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "PHARA - PHARMERCY SIMULATED", true)
    minigamesToggleArray[12] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "REINHARDT - LAST MAN BOUNCING", true)
    minigamesToggleArray[13] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "ROADHOG - 12 HOOKS 1 HOLE", true)
    minigamesToggleArray[14] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "SIGMA - DODGEBALL", true)
    minigamesToggleArray[15] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "SOLDIER 76 - SPRINT RACING", true)
    minigamesToggleArray[16] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "SOMBRA - HACK TO KILL", true)
    minigamesToggleArray[17] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "SYMMETRA - TELEPORT TO THE COLOR", true)
    minigamesToggleArray[18] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "TORBJÖRN - HAMMER ONLY", true)
    minigamesToggleArray[19] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "TRACER - STEAL THE CROWN", true)
    minigamesToggleArray[20] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "WIDOWMAKER - HS ONLY", true)
    minigamesToggleArray[21] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "WINSTON - MONKEY SUMO", true)
    minigamesToggleArray[22] = createWorkshopSettingBool("HEROES MINIGAMES (2 MINIMUM)", "ZENYATTA - SPARTA", true)
    for workshopSettingsIt in range(len(heroList)):
        if minigamesToggleArray[workshopSettingsIt] == false:
            del minigamesToggleArray[workshopSettingsIt]
            del heroList[workshopSettingsIt]
            del minigameStringTitles[workshopSettingsIt]
            del minigameStringCodes[workshopSettingsIt]
            del minigameStringCredit[workshopSettingsIt]
            del minigameStringInstructions[workshopSettingsIt]
            workshopSettingsIt--
    wait(0.25)
    if firstToX == true:
        hudSubtext(getAllPlayers(), "FIRST TO {0} POINTS EDITION".format(scoreToWin), HudPosition.TOP, 0.5, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)
    if topScorerAfterAllMinigames == true:
        hudSubtext(getAllPlayers(), "TOP SCORER AFTER ALL MINIGAMES EDITION", HudPosition.TOP, 0.5, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)


rule "Game Winner (First to X)":
    @Event eachPlayer
    @Condition eventPlayer.getScore() >= scoreToWin
    @Condition firstToX == true

    declarePlayerVictory(eventPlayer)


rule "Game Winner (Top Scorer after all minigames)":
    @Event eachPlayer
    @Condition topScorerAfterAllMinigames == true
    @Condition roundNumber == len(heroList) + 1

    declarePlayerVictory(sorted(getAllPlayers(), lambda player: player.getScore()).last())


rule "Time Counter - Add minute":
    @Condition isGameInProgress() == true

    setMatchTime(timeCounter)
    wait(60)
    timeCounter++
    loop()


rule "Force players to be the hero of the round":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.isAlive() == true

    eventPlayer.startForcingHero(heroOfTheRound)


rule "Create new round {SETUP}":
    @Condition isInSetup() == true

    wait(0.048)
    heroOfTheRound = random.choice(heroList)
    getAllPlayers().preloadHero(heroOfTheRound)
    heroModeSelector = heroList.index(heroOfTheRound)
    wait(0.272)
    getAllPlayers().startForcingHero(heroOfTheRound)
    roundNumber++
    smallMessage(getAllPlayers(), "ROUND {0}".format(roundNumber))
    playersStartOfTheRound = getAllPlayers()
    roundTimer = 60
    chaseAtRate(roundTimer, 0, 1, ChaseRateReeval.NONE)


rule "Create new round {OUT OF TIME}":
    @Condition roundTimer <= 0
    @Condition isGameInProgress() == true

    async(startNewRound, AsyncBehavior.NOOP)


rule "Create new round {LAST PLAYER ALIVE}":
    @Condition getNumberOfLivingPlayers(Team.ALL) <= 1
    @Condition isGameInProgress() == true

    async(startNewRound, AsyncBehavior.NOOP)


def startNewRound():
    @Name "startNewRound()"

    roundTimer = 60
    async(restartStats, AsyncBehavior.NOOP)
    if len(heroesOfPreviousRounds) == len(heroList) - 1:
        heroesOfPreviousRounds = []
    heroOfLastRound = heroOfTheRound
    heroesOfPreviousRounds.append(heroOfTheRound)
    heroOfTheRound = null
    wait(0.048)
    heroOfTheRound = random.choice(heroList.exclude(heroesOfPreviousRounds))
    getAllPlayers().preloadHero(heroOfTheRound)
    heroModeSelector = heroList.index(heroOfTheRound)
    getAllPlayers().respawn()
    getAllPlayers().resurrect()
    wait(0.272)
    wait(0.272)
    getAllPlayers().startForcingHero(heroOfTheRound)
    roundNumber++
    smallMessage(getAllPlayers(), "ROUND {0}".format(roundNumber))
    playersStartOfTheRound = getAllPlayers()
    getAllPlayers().startForcingThrottle(0, 0, 0, 0, 0, 0)
    getAllPlayers().setAimSpeed(abs(0))
    wait(0.75)
    getAllPlayers().stopForcingThrottle()
    getAllPlayers().setAimSpeed(100)
    chaseAtRate(roundTimer, 0, 1, ChaseRateReeval.NONE)


def restartStats():
    @Name "restartStats()"

    getAllPlayers().setMoveSpeed(100)
    getAllPlayers().setGravity(100)


def gameModeDescriptionMessages():
    @Name "Description and credit (Small Messages)"

    wait(3.5)
    smallMessage(eventPlayer, "Island Party - Heroes Minigames v3.1.1-23")
    wait(3.5)
    smallMessage(eventPlayer, "Play rounds of {0}/23 minigames".format(len(heroList)))
    wait(3.5)
    smallMessage(eventPlayer, "Created by Jokaes#2263")


rule "On kill: full heal":
    @Event playerDealtFinalBlow
    @Condition victim != eventPlayer
    @Condition eventPlayer.getHero() != Hero.ANA
    @Condition eventPlayer.getHero() != Hero.BRIGITTE
    @Condition eventPlayer.getHero() != Hero.DOOMFIST
    @Condition eventPlayer.getHero() != Hero.DVA
    @Condition eventPlayer.getHero() != Hero.ECHO
    @Condition eventPlayer.getHero() != Hero.CASSIDY
    @Condition eventPlayer.getHero() != Hero.MEI
    @Condition eventPlayer.getHero() != Hero.MERCY
    @Condition eventPlayer.getHero() != Hero.PHARAH
    @Condition eventPlayer.getHero() != Hero.REINHARDT
    @Condition eventPlayer.getHero() != Hero.ROADHOG
    @Condition eventPlayer.getHero() != Hero.SIGMA
    @Condition eventPlayer.getHero() != Hero.SOLDIER
    @Condition eventPlayer.getHero() != Hero.SOMBRA
    @Condition eventPlayer.getHero() != Hero.SYMMETRA
    @Condition eventPlayer.getHero() != Hero.TRACER
    @Condition eventPlayer.getHero() != Hero.WINSTON
    @Condition eventPlayer.getHero() != Hero.ZENYATTA

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, eventPlayer, 1)
    heal(eventPlayer, null, eventPlayer.getMaxHealth())


rule "On kill: cooldown reset":
    @Event playerDealtFinalBlow
    @Condition victim != eventPlayer
    @Condition eventPlayer.getHero() != Hero.ANA
    @Condition eventPlayer.getHero() != Hero.ECHO
    @Condition eventPlayer.getHero() != Hero.CASSIDY
    @Condition eventPlayer.getHero() != Hero.SIGMA
    @Condition eventPlayer.getHero() != Hero.SYMMETRA
    @Condition eventPlayer.getHero() != Hero.TRACER
    @Condition eventPlayer.getHero() != Hero.WINSTON

    eventPlayer.setAbilityCooldown(Button.PRIMARY_FIRE, 0)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 0)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0)
    eventPlayer.setAbilityCooldown(Button.ABILITY_2, 0)


rule "On kill: score":
    @Event playerDealtFinalBlow
    @Condition victim != eventPlayer
    @Condition eventPlayer.getHero() != Hero.DVA
    @Condition eventPlayer.getHero() != Hero.ECHO
    @Condition eventPlayer.getHero() != Hero.CASSIDY
    @Condition eventPlayer.getHero() != Hero.REINHARDT
    @Condition eventPlayer.getHero() != Hero.SIGMA
    @Condition eventPlayer.getHero() != Hero.SYMMETRA
    @Condition eventPlayer.getHero() != Hero.TRACER

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    eventPlayer.addToScore(1)
    smallMessage(eventPlayer, "+1 point with {0} {1}".format(heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
    wait(0.032)
    hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+1 point", HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01


rule "Last seconds sound":
    @Event eachPlayer
    @Condition roundTimer <= 5

    playEffect(eventPlayer, DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    wait(1)
    if ruleCondition:
        loop()


rule "HUD Pointfeed reduce times":
    @Condition any([player == 3.744 for player in pointfeedHudTimes]) == true

    while true:
        for pointfeedHudTimesIt in range(len(pointfeedHudTimes)):
            if pointfeedHudTimes[pointfeedHudTimesIt] > 0:
                pointfeedHudTimes[pointfeedHudTimesIt] -= 0.016
        wait()


rule "Destroy HUD Pointfeed {more than 6}":
    @Condition len(pointfeedHud) > 6

    while len(pointfeedHud) > 6:
        destroyHudText(pointfeedHud[0])
        del pointfeedHud[0]
        wait(0.032)


rule "Destroy HUD Pointfeed {time}":
    @Condition any([player <= 0 for player in pointfeedHudTimes]) == true

    while true:
        for pointfeedHudTimesIt in range(len(pointfeedHudTimes)):
            if pointfeedHudTimes[pointfeedHudTimesIt] <= 0:
                destroyHudText(pointfeedHud[pointfeedHudTimesIt])
                del pointfeedHud[pointfeedHudTimesIt]
                del pointfeedHudTimes[pointfeedHudTimesIt]
        wait()


rule "Reset HUD Pointfeed ID":
    @Condition len(pointfeedHud) == 0

    pointfeedHudId = 0


rule "HoF player HUD":
    @Condition hofPlayersCounter != len(hofPlayers)

    hudSubtext(getAllPlayers(), "{0}".format(hofPlayers.last()), HudPosition.RIGHT, -500, Color.ORANGE, HudReeval.VISIBILITY_AND_SORT_ORDER)
    hofPlayersCounter = len(hofPlayers)


rule "Hof append":
    @Event eachPlayer

    if eventPlayer.getScore() >= 120:
        if "{0}".format(eventPlayer) in hofPlayers == false:
            hofPlayers.append("{0}".format(eventPlayer))
    wait(10)
    loop()


rule "HoF effect":
    @Event eachPlayer
    @Condition eventPlayer.getScore() >= 120

    hudHeader(eventPlayer, "You seam to enjoy this mode. You should join discord.io/IslandParty {0}".format(iconString(Icon.HAPPY)), HudPosition.TOP, 1000, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.discordLinkForHofPlayersHud = getLastCreatedText()
    #createEffect([player for player in getAllPlayers() if eventPlayer.isAlive()], Effect.SPARKLES, Color.ORANGE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 200)
    wait(1)
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 200)
    wait(1)
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 200)
    wait(1)
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    wait(75)
    destroyHudText(eventPlayer.discordLinkForHofPlayersHud)


rule "HoF outlines":
    @Event eachPlayer
    @Condition eventPlayer.getScore() >= 120

    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.BLUE)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.GREEN)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.ORANGE)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.PURPLE)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.RED)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.TURQUOISE)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.WHITE)
    wait(0.192)
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.YELLOW)
    wait(0.192)
    loop()


rule "----- HEROES -----":
    @Delimiter



rule "ANA on kill":
    @Event playerDealtFinalBlow
    @Hero ana
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ANA

    while eventPlayer.isUsingAbility1() == true:
        wait(0.032)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0)


rule "BASTION tank":
    @Event eachPlayer
    @Hero bastion
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.BASTION
    @Condition eventPlayer.isUsingUltimate() == false

    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait()
    if ruleCondition:
        loop()


rule "BRIG init":
    @Event eachPlayer
    @Hero brigitte
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition isGameInProgress() == true

    wait(0.032)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, roundTimer)


rule "BRIG standard gravity":
    @Event eachPlayer
    @Hero brigitte
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition eventPlayer.isFiringSecondaryFire() != true
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    eventPlayer.setGravity(100)


rule "BRIG shield gravity":
    @Event eachPlayer
    @Hero brigitte
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.setGravity(200)


rule "BRIG stunned gravity & longer stun":
    @Event eachPlayer
    @Hero brigitte
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition eventPlayer.hasStatus(Status.STUNNED) == true

    eventPlayer.setGravity(25)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1.5)


rule "BRIG speed-boosted shield bash":
    @Event eachPlayer
    @Hero brigitte
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.setMoveSpeed(200)
    wait(0.25)
    eventPlayer.setMoveSpeed(100)


rule "BRIG ult cooldown reset":
    @Event eachPlayer
    @Hero brigitte
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition eventPlayer.isUsingUltimate() == true

    eventPlayer.setAbilityCooldown(Button.PRIMARY_FIRE, 0)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 0)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0)


rule "BRIG auto-healing":
    @Event eachPlayer
    @Hero brigitte
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.BRIGITTE
    @Condition eventPlayer.getHealth() < eventPlayer.getMaxHealth()

    heal(eventPlayer, null, eventPlayer.getMaxHealth())
    wait(0.032)
    if ruleCondition:
        loop()


rule "BRIG end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.BRIGITTE
    @Condition heroOfLastRound == Hero.BRIGITTE

    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.setGravity(100)
    eventPlayer.setMoveSpeed(100)


rule "DOOM init player":
    @Event eachPlayer
    @Hero doomfist
    @Condition heroOfTheRound == Hero.DOOMFIST
    @Condition isGameInProgress() == true

    wait(0.064)
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)


rule "DOOM ult stun":
    @Event playerDealtDamage
    @Hero doomfist
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DOOMFIST
    @Condition attacker.isUsingUltimate() == true

    victim.setStatusEffect(eventPlayer, Status.STUNNED, 3)


rule "DOOM not using ult":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DOOMFIST
    @Condition eventPlayer.isUsingUltimate() == false

    eventPlayer.setMoveSpeed(100)
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)


rule "DOOM using ult":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DOOMFIST
    @Condition eventPlayer.isUsingUltimate() == true

    eventPlayer.setMoveSpeed(150)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 0)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0)


rule "DOOM end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.DOOMFIST
    @Condition heroOfLastRound == Hero.DOOMFIST

    eventPlayer.allowButton(Button.PRIMARY_FIRE)


rule "DVA init player":
    @Event eachPlayer
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.isAlive() == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isInAlternateForm() == false
    @Condition eventPlayer.dvaPointsHud == null

    eventPlayer.dvaPointsHud = null
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), dvaObjectivePos[0]), Relativity.TO_WORLD)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 60)
    wait(0.256)
    eventPlayer.teleport(vect(0, 0, 0))
    eventPlayer.dvaPoints = 0
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), dvaObjectivePos[0]), Relativity.TO_WORLD)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 60)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, roundTimer)
    if eventPlayer.dvaPointsHud == null:
        hudSubtext(getAllPlayers(), "{0}: {1}/5".format(eventPlayer, eventPlayer.dvaPoints), HudPosition.LEFT, (eventPlayer.dvaPoints + 10) * -1, Color.PURPLE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
        eventPlayer.dvaPointsHud = getLastCreatedText()
    createInWorldText(eventPlayer, "{0} M".format(distance(eventPlayer.getPosition(), dvaObjectivePos[eventPlayer.dvaPoints])), dvaObjectivePos[eventPlayer.dvaPoints], 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.dvaDistanceText = getLastCreatedText()
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), dvaObjectivePos[0]), Relativity.TO_WORLD)
    createIcon(eventPlayer, dvaObjectivePos[eventPlayer.dvaPoints] + vect(0, 1.5, 0), Icon.FLAG, IconReeval.VISIBILITY_AND_POSITION, Color.PURPLE)
    eventPlayer.playerClosestObjectiveIcon = getLastCreatedEntity()
    eventPlayer.setGravity(0)


rule "DVA init global":
    @Condition heroOfTheRound == Hero.DVA

    dvaObjectiveEffects = []
    dvaObjectiveIcons = []
    dvaObjectivePos = [vect(random.uniform(-100, 100), random.uniform(45, 100), random.uniform(-100, 100)), vect(random.uniform(-100, 100), random.uniform(45, 100), random.uniform(-100, 100)), vect(random.uniform(-100, 100), random.uniform(45, 100), random.uniform(-100, 100)), vect(random.uniform(-100, 100), random.uniform(45, 100), random.uniform(-100, 100)), vect(random.uniform(-100, 100), random.uniform(45, 100), random.uniform(-100, 100))]
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 0], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[0], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 0], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[0], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 0], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 1], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[1], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 1], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[1], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 1], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 2], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[2], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 2], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[2], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 2], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[2], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 3], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[3], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 3], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[3], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 3], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[3], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 4], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[4], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 4], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[4], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.dvaPoints == 4], Effect.GOOD_AURA, Color.PURPLE, dvaObjectivePos[4], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    dvaObjectiveEffects.append(getLastCreatedEntity())


rule "DVA point":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.dvaPoints < 5
    @Condition distance(eventPlayer.getPosition(), dvaObjectivePos[eventPlayer.dvaPoints]) <= 7.5

    eventPlayer.addToScore(1)
    smallMessage(eventPlayer, "+1 point with {0} {1}".format(heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
    eventPlayer.dvaPoints++
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer, 1)
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.PURPLE, eventPlayer, 100)
    hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+1 point", HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01


rule "DVA boosting":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.isUsingAbility1() == true

    eventPlayer.setMoveSpeed(500)
    eventPlayer.setGravity(0)


rule "DVA not boosting in air":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isInAir() == true

    eventPlayer.setMoveSpeed(10)
    eventPlayer.setGravity(0)


rule "DVA not boosting on ground":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.setMoveSpeed(100)
    eventPlayer.setGravity(100)


rule "DVA brake":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Disabled

    eventPlayer.cancelPrimaryAction()
    wait(0.048)
    #eventPlayer.applyImpulse(Vector.DOWN, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.UP, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.BACKWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.FORWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.RIGHT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.LEFT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.startAcceleration(eventPlayer.getFacingDirection() * -1, 100, eventPlayer.getSpeed(), Relativity.TO_WORLD)
    #wait(1)
    wait(0.4)
    eventPlayer.stopAcceleration()


rule "DVA baby call mecha":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.isInAlternateForm() == true

    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait()
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 60)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, roundTimer)
    if ruleCondition:
        loop()


rule "DVA winner":
    @Event eachPlayer
    @Hero dva
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.DVA
    @Condition eventPlayer.dvaPoints >= 5

    roundTimer = 0.032


rule "DVA end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.DVA
    @Condition heroOfLastRound == Hero.DVA

    dvaDestructorIt = 0
    for dvaDestructorIt in range(len(dvaObjectiveEffects)):
        destroyEffect(dvaObjectiveEffects[dvaDestructorIt])
        destroyIcon(dvaObjectiveIcons[dvaDestructorIt])


rule "DVA end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.DVA
    @Condition heroOfLastRound == Hero.DVA

    eventPlayer.dvaPoints = 0
    wait()
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.setGravity(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.stopAcceleration()
    wait(0.512)
    destroyHudText(eventPlayer.dvaPointsHud)
    destroyInWorldText(eventPlayer.dvaDistanceText)
    destroyIcon(eventPlayer.playerClosestObjectiveIcon)
    wait(0.064)
    eventPlayer.dvaPointsHud = null


rule "ECHO init player":
    @Event eachPlayer
    @Hero echo
    @Condition heroOfTheRound == Hero.ECHO
    @Condition eventPlayer.isAlive() == true

    eventPlayer.echoPointsHud = null
    eventPlayer.echoPoints = 0
    wait(1)
    if eventPlayer.echoPointsHud == null:
        hudSubtext(getAllPlayers(), "{0}: {1}/40 = {2}/4 points".format(eventPlayer, eventPlayer.echoPoints, floor(eventPlayer.echoPoints / 10)), HudPosition.LEFT, (eventPlayer.echoPoints + 10) * -1, Color.AQUA, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
        eventPlayer.echoPointsHud = getLastCreatedText()
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, roundTimer)


rule "ECHO init global":
    @Condition heroOfTheRound == Hero.ECHO

    #Creates the array to store the effects of the common rings
    commonRingsEffects = []
    #Creates the array to store the positions of the common rings
    commonRingsPos = []
    #Append to the array commonRingsPos the not random common ring position
    commonRingsPos.append(vect(0, 16, 0))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Append to the array commonRingsPos a new position
    commonRingsPos.append(vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32)))
    #Creates the not random common ring
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[2], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[3], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[4], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[5], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[6], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Create a common ring effect in the position in commonRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, commonRingsPos[7], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created common ring to commonRingsEffects
    commonRingsEffects.append(getLastCreatedEntity())
    #Creates the array to store the effects of the rare rings
    rareRingsEffects = []
    #Creates the array to store the positions of the rare rings
    rareRingsPos = []
    #Append to the array rareRingsPos a new position
    rareRingsPos.append(vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36)))
    #Append to the array rareRingsPos a new position
    rareRingsPos.append(vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36)))
    #Append to the array rareRingsPos a new position
    rareRingsPos.append(vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36)))
    #Append to the array rareRingsPos a new position
    rareRingsPos.append(vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36)))
    #Append to the array rareRingsPos a new position
    rareRingsPos.append(vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36)))
    #Append to the array rareRingsPos a new position
    rareRingsPos.append(vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36)))
    #Create a rare ring effect in the position in rareRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.AQUA, rareRingsPos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created rare ring to rareRingsEffects
    rareRingsEffects.append(getLastCreatedEntity())
    #Create a rare ring effect in the position in rareRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.AQUA, rareRingsPos[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created rare ring to rareRingsEffects
    rareRingsEffects.append(getLastCreatedEntity())
    #Create a rare ring effect in the position in rareRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.AQUA, rareRingsPos[2], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created rare ring to rareRingsEffects
    rareRingsEffects.append(getLastCreatedEntity())
    #Create a rare ring effect in the position in rareRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.AQUA, rareRingsPos[3], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created rare ring to rareRingsEffects
    rareRingsEffects.append(getLastCreatedEntity())
    #Create a rare ring effect in the position in rareRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.AQUA, rareRingsPos[4], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created rare ring to rareRingsEffects
    rareRingsEffects.append(getLastCreatedEntity())
    #Create a rare ring effect in the position in rareRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.AQUA, rareRingsPos[5], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created rare ring to rareRingsEffects
    rareRingsEffects.append(getLastCreatedEntity())
    #Creates the array to store the effects of the epic rings
    epicRingsEffects = []
    #Creates the array to store the positions of the epic rings
    epicRingsPos = []
    #Append to the array epicRingsPos a new position
    epicRingsPos.append(vect(random.uniform(-44, 44), random.uniform(2, 44), random.uniform(-44, 44)))
    #Append to the array epicRingsPos a new position
    epicRingsPos.append(vect(random.uniform(-44, 44), random.uniform(2, 44), random.uniform(-44, 44)))
    #Create a epic ring effect in the position in epicRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.PURPLE, epicRingsPos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created epic ring to epicRingsEffects
    epicRingsEffects.append(getLastCreatedEntity())
    #Create a epic ring effect in the position in epicRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.PURPLE, epicRingsPos[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created epic ring to epicRingsEffects
    epicRingsEffects.append(getLastCreatedEntity())
    #Creates the array to store the effects of the legendary rings
    legendaryRingsEffects = []
    #Creates the array to store the positions of the legendary rings
    legendaryRingsPos = []
    #Append to the array legendaryRingsPos a new position
    legendaryRingsPos.append(vect(random.uniform(-48, 48), random.uniform(2, 48), random.uniform(-48, 48)))
    #Create a legendary ring effect in the position in legendaryRingsPos
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.ORANGE, legendaryRingsPos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created legendary ring to legendaryRingsEffects
    legendaryRingsEffects.append(getLastCreatedEntity())
    #Creates the array to store the effects of the teleport orbs
    echoTeleportEffects = []
    #Creates the array to store the positions of the teleport orbs
    echoTeleportPos = []
    #Append to the array echoTeleportPos a new position
    echoTeleportPos.append(vect(random.uniform(-40, 40), random.uniform(2, 40), random.uniform(-40, 40)))
    #Create a teleport orb effect in the position in echoTeleportPos
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, echoTeleportPos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created teleport orb to echoTeleportEffects
    echoTeleportEffects.append(getLastCreatedEntity())
    #Append to the array echoTeleportPos a new position
    echoTeleportPos.append(vect(random.uniform(-40, 40), random.uniform(2, 40), random.uniform(-40, 40)))
    #Create a boost orb effect in the position in echoTeleportPos
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, echoTeleportPos[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created teleport orb to echoTeleportEffects
    echoTeleportEffects.append(getLastCreatedEntity())
    echoRightHud = []
    hudSubtext(getAllPlayers(), " \n", HudPosition.RIGHT, 995, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    echoRightHud.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), "White rings: 1 point", HudPosition.RIGHT, 996, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    echoRightHud.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), "Blue rings: 2 points", HudPosition.RIGHT, 997, Color.AQUA, HudReeval.VISIBILITY_AND_STRING)
    echoRightHud.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), "Purple rings: 4 points", HudPosition.RIGHT, 998, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
    echoRightHud.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), "Orange rings: 5 points", HudPosition.RIGHT, 999, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    echoRightHud.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), " \nTeleport", HudPosition.RIGHT, 1000, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    echoRightHud.append(getLastCreatedText())


rule "ECHO reduce speed when taking damage":
    @Event playerTookDamage
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ECHO

    eventPlayer.setMoveSpeed(50)
    wait(0.5)
    eventPlayer.setMoveSpeed(100)


rule "ECHO meele stun":
    @Event playerDealtDamage
    @Hero echo
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ECHO
    @Condition attacker.isHoldingButton(Button.MELEE) == true

    if attacker.isHoldingButton(Button.MELEE) == true:
        victim.setStatusEffect(eventPlayer, Status.STUNNED, 0.75)


rule "ECHO healing like Mercy passive":
    @Event eachPlayer
    @Hero echo
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ECHO
    @Condition eventPlayer.getHealth() < 200

    wait(0.064)
    eventPlayer.startHealingOverTime(null, roundTimer, 200)


rule "ECHO not healing":
    @Event eachPlayer
    @Hero echo
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ECHO
    @Condition eventPlayer.getHealth() == 200

    eventPlayer.stopAllHealingOverTime()
    wait()


rule "ECHO points common rings":
    @Event eachPlayer
    @Hero echo
    @Condition any([distance(eventPlayer, player) <= 2.15 for player in commonRingsPos]) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ECHO

    eventPlayer.echoClosestRing = sorted(commonRingsPos, lambda player: distance(eventPlayer, player))[0]
    wait()
    eventPlayer.echoClosestRing = commonRingsPos.index(eventPlayer.echoClosestRing)
    eventPlayer.echoPoints++
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    commonRingsPos[eventPlayer.echoClosestRing] = vect(random.uniform(-32, 32), random.uniform(2, 32), random.uniform(-32, 32))


rule "ECHO points rare rings":
    @Event eachPlayer
    @Hero echo
    @Condition any([distance(eventPlayer, player) <= 2.15 for player in rareRingsPos]) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ECHO

    eventPlayer.echoClosestRing = sorted(rareRingsPos, lambda player: distance(eventPlayer, player))[0]
    wait()
    eventPlayer.echoClosestRing = rareRingsPos.index(eventPlayer.echoClosestRing)
    eventPlayer.echoPoints += 2
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.AQUA, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.AQUA, eventPlayer, 100)
    rareRingsPos[eventPlayer.echoClosestRing] = vect(random.uniform(-36, 36), random.uniform(2, 36), random.uniform(-36, 36))


rule "ECHO points epic rings":
    @Event eachPlayer
    @Hero echo
    @Condition any([distance(eventPlayer, player) <= 2.15 for player in epicRingsPos]) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ECHO

    eventPlayer.echoClosestRing = sorted(epicRingsPos, lambda player: distance(eventPlayer, player))[0]
    wait()
    eventPlayer.echoClosestRing = epicRingsPos.index(eventPlayer.echoClosestRing)
    eventPlayer.echoPoints += 4
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.PURPLE, eventPlayer, 100)
    epicRingsPos[eventPlayer.echoClosestRing] = vect(random.uniform(-44, 44), random.uniform(2, 44), random.uniform(-44, 44))


rule "ECHO points legendary rings":
    @Event eachPlayer
    @Hero echo
    @Condition any([distance(eventPlayer, player) <= 2.15 for player in legendaryRingsPos]) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ECHO

    eventPlayer.echoClosestRing = sorted(legendaryRingsPos, lambda player: distance(eventPlayer, player))[0]
    wait()
    eventPlayer.echoClosestRing = legendaryRingsPos.index(eventPlayer.echoClosestRing)
    eventPlayer.echoPoints += 5
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.ORANGE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.ORANGE, eventPlayer, 100)
    legendaryRingsPos[eventPlayer.echoClosestRing] = vect(random.uniform(-48, 48), random.uniform(2, 48), random.uniform(-48, 48))


rule "ECHO teleports":
    @Event eachPlayer
    @Hero echo
    @Condition any([distance(eventPlayer, player) <= 2.15 for player in echoTeleportPos]) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ECHO

    eventPlayer.teleport(sorted(echoTeleportPos, lambda player: distance(eventPlayer, player))[1])
    wait()
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.GREEN, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.GREEN, eventPlayer, 100)
    echoTeleportPos[0] = vect(random.uniform(-40, 40), random.uniform(2, 40), random.uniform(-40, 40))
    echoTeleportPos[1] = vect(random.uniform(-40, 40), random.uniform(2, 40), random.uniform(-40, 40))
    wait(1.5)


rule "ECHO winner":
    @Event eachPlayer
    @Hero echo
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ECHO
    @Condition eventPlayer.echoPoints >= 40

    roundTimer = 0.032


rule "ECHO end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.ECHO
    @Condition heroOfLastRound == Hero.ECHO

    wait(0.064)
    for ringsIt in range(8):
        destroyEffect(commonRingsEffects[ringsIt])
        destroyEffect(rareRingsEffects[ringsIt])
        destroyEffect(epicRingsEffects[ringsIt])
        destroyEffect(legendaryRingsEffects[ringsIt])
        destroyEffect(echoTeleportEffects[ringsIt])
        destroyHudText(echoRightHud[ringsIt])
    #Creates the array to store the effects of the common rings
    commonRingsEffects = []
    #Creates the array to store the positions of the common rings
    commonRingsPos = []
    #Creates the array to store the effects of the rare rings
    rareRingsEffects = []
    #Creates the array to store the positions of the rare rings
    rareRingsPos = []
    #Creates the array to store the effects of the epic rings
    epicRingsEffects = []
    #Creates the array to store the positions of the epic rings
    epicRingsPos = []
    #Creates the array to store the effects of the legendary rings
    legendaryRingsEffects = []
    #Creates the array to store the positions of the legendary rings
    legendaryRingsPos = []
    #Creates the array to store the effects of the teleports
    echoTeleportEffects = []
    #Creates the array to store the positions of the teleports
    echoTeleportPos = []
    for ringsIt in range(8):
        #Append to the array commonRingsPos the not random common ring position
        commonRingsPos.append(vect(0, -16, 0))
        #Append to the array rareRingsPos the not random rare ring position
        rareRingsPos.append(vect(0, -16, 0))
        #Append to the array epicRingsPos the not random epic ring position
        epicRingsPos.append(vect(0, -16, 0))
        #Append to the array legendaryRingsPos the not random legendary ring position
        legendaryRingsPos.append(vect(0, -16, 0))
        #Append to the array echoTeleportPos the not random legendary ring position
        echoTeleportPos.append(vect(0, -16, 0))


rule "ECHO end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.ECHO
    @Condition heroOfLastRound == Hero.ECHO

    wait(eventPlayer.echoPoints * 0.001)
    eventPlayer.addToScore(floor(eventPlayer.echoPoints / 10))
    if eventPlayer.echoPoints >= 10:
        smallMessage(eventPlayer, "+{0} with {1} {2}".format("{0} {1}".format(floor(eventPlayer.echoPoints / 10), "points" if floor(eventPlayer.echoPoints / 10) > 1 else "point"), heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
        playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
        hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+{1} {2}".format(null, floor(eventPlayer.echoPoints / 10), "points" if floor(eventPlayer.echoPoints / 10) > 1 else "point"), HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
        pointfeedHud.append(getLastCreatedText())
        pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
        pointfeedHudId -= 0.01
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.stopAllHealingOverTime()
    wait(0.256)
    destroyHudText(eventPlayer.echoPointsHud)


rule "LUCIO init player":
    @Event eachPlayer
    @Hero lucio
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.LUCIO

    eventPlayer.lucioPointsHud = null
    createIcon(eventPlayer, sorted(snotPos, lambda player: distance(eventPlayer.getPosition(), player))[0], Icon.RING_THICK, IconReeval.VISIBILITY_AND_POSITION, Color.GREEN)
    eventPlayer.lucioClosestSnotIcon = getLastCreatedEntity()
    eventPlayer.lucioSpeed = 100
    eventPlayer.lucioPoints = 0
    eventPlayer.lucioHasBeenOnWall = false
    wait(0.256)
    hudHeader(eventPlayer, l"{0} m/s".format(eventPlayer.getHorizontalSpeed()), HudPosition.LEFT, 2, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.playerSpeedHud = getLastCreatedText()
    wait()
    if eventPlayer.lucioPointsHud == null:
        hudSubtext(getAllPlayers(), "{0}: {1}/8 = {2}/4 points".format(eventPlayer, eventPlayer.lucioPoints, floor(eventPlayer.lucioPoints / 2)), HudPosition.LEFT, (eventPlayer.lucioPoints + 10) * -1, Color.GREEN, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
        eventPlayer.lucioPointsHud = getLastCreatedText()


rule "LUCIO Snot":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.LUCIO

    snotPos = []
    snotEffects = []
    snotPosRandomXComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(snotPosRandomXComp, snotPosRandomYComp, 35), vect(snotPosRandomXComp, snotPosRandomYComp, -35), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[0] + Vector.FORWARD, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    snotPosRandomXComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(snotPosRandomXComp, snotPosRandomYComp, 35), vect(snotPosRandomXComp, snotPosRandomYComp, -35), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[1] + Vector.FORWARD, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    snotPosRandomXComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(snotPosRandomXComp, snotPosRandomYComp, -35), vect(snotPosRandomXComp, snotPosRandomYComp, 35), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[2] + Vector.BACKWARD, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    snotPosRandomXComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(snotPosRandomXComp, snotPosRandomYComp, -35), vect(snotPosRandomXComp, snotPosRandomYComp, 35), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[3] + Vector.BACKWARD, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    wait(1)
    snotPosRandomZComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(35, snotPosRandomYComp, snotPosRandomZComp), vect(-35, snotPosRandomYComp, snotPosRandomZComp), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[4] + Vector.LEFT, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    snotPosRandomZComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(35, snotPosRandomYComp, snotPosRandomZComp), vect(-35, snotPosRandomYComp, snotPosRandomZComp), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[5] + Vector.LEFT, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    snotPosRandomZComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(-35, snotPosRandomYComp, snotPosRandomZComp), vect(35, snotPosRandomYComp, snotPosRandomZComp), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[6] + Vector.RIGHT, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())
    snotPosRandomZComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    snotPos.append(raycast(vect(-35, snotPosRandomYComp, snotPosRandomZComp), vect(35, snotPosRandomYComp, snotPosRandomZComp), null, getAllPlayers(), false).getHitPosition())
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, snotPos[7] + Vector.RIGHT, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    snotEffects.append(getLastCreatedEntity())


rule "LUCIO point":
    @Event eachPlayer
    @Hero lucio
    @Condition any([distance(eventPlayer, player) <= 2 for player in snotPos]) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.LUCIO

    eventPlayer.lucioClosestSnot = sorted(snotPos, lambda player: distance(eventPlayer, player))[0]
    wait()
    eventPlayer.lucioClosestSnot = snotPos.index(eventPlayer.lucioClosestSnot)
    eventPlayer.lucioPoints++
    eventPlayer.lucioSpeed = eventPlayer.lucioSpeed + 12.5
    eventPlayer.setMoveSpeed(eventPlayer.lucioSpeed)
    goto loc+random.choice([0, 7])
    snotPosRandomXComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    goto loc+random.choice([0, 2])
    snotPos[eventPlayer.lucioClosestSnot] = raycast(vect(snotPosRandomXComp, snotPosRandomYComp, 35), vect(snotPosRandomXComp, snotPosRandomYComp, -35), null, getAllPlayers(), false).getHitPosition() + Vector.FORWARD
    goto lbl_0
    snotPos[eventPlayer.lucioClosestSnot] = raycast(vect(snotPosRandomXComp, snotPosRandomYComp, -35), vect(snotPosRandomXComp, snotPosRandomYComp, 35), null, getAllPlayers(), false).getHitPosition() + Vector.BACKWARD
    lbl_0:
    goto lbl_1
    snotPosRandomZComp = random.uniform(-18, 18)
    snotPosRandomYComp = random.uniform(-4, -14)
    goto loc+random.choice([0, 2])
    snotPos[eventPlayer.lucioClosestSnot] = raycast(vect(35, snotPosRandomYComp, snotPosRandomZComp), vect(-35, snotPosRandomYComp, snotPosRandomZComp), null, getAllPlayers(), false).getHitPosition() + Vector.LEFT
    goto lbl_2
    snotPos[eventPlayer.lucioClosestSnot] = raycast(vect(-35, snotPosRandomYComp, snotPosRandomZComp), vect(35, snotPosRandomYComp, snotPosRandomZComp), null, getAllPlayers(), false).getHitPosition() + Vector.RIGHT
    lbl_1:
    lbl_2:
    wait()
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.GREEN, eventPlayer, 100)


rule "LUCIO on ground = reset speed":
    @Event eachPlayer
    @Hero lucio
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.LUCIO
    @Condition eventPlayer.isOnGround() == true
    @Condition eventPlayer.lucioSpeed > 100

    eventPlayer.lucioSpeed = 100
    eventPlayer.setMoveSpeed(eventPlayer.lucioSpeed)
    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.GREEN, eventPlayer, 100)
    smallMessage(eventPlayer, "on ground = speed reset")


rule "LUCIO winner":
    @Event eachPlayer
    @Hero lucio
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.LUCIO
    @Condition eventPlayer.lucioPoints >= 8

    roundTimer = 0.032


rule "LUCIO end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.LUCIO
    @Condition heroOfLastRound == Hero.LUCIO

    wait(0.064)
    for destructorIt in range(8):
        destroyEffect(snotEffects[destructorIt])
    snotEffects = []
    for ringsIt in range(8):
        snotPos.append(vect(0, -16, 0))


rule "LUCIO end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.LUCIO
    @Condition heroOfLastRound == Hero.LUCIO

    wait(eventPlayer.lucioPoints * 0.016)
    eventPlayer.addToScore(floor(eventPlayer.lucioPoints / 2))
    if eventPlayer.lucioPoints >= 2:
        smallMessage(eventPlayer, "+{0} with {1} {2}".format("{0} {1}".format(floor(eventPlayer.lucioPoints / 2), "points" if floor(eventPlayer.lucioPoints / 2) > 1 else "point"), heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
        playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
        hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+{1} {2}".format(null, floor(eventPlayer.lucioPoints / 2), "points" if floor(eventPlayer.lucioPoints / 2) > 1 else "point"), HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
        pointfeedHud.append(getLastCreatedText())
        pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
        pointfeedHudId -= 0.01
    destroyHudText(eventPlayer.playerSpeedHud)
    destroyIcon(eventPlayer.lucioClosestSnotIcon)
    eventPlayer.setMoveSpeed(100)
    wait(0.256)
    destroyHudText(eventPlayer.lucioPointsHud)


rule "MCCREE init player":
    @Event eachPlayer
    @Hero cassidy
    @Condition heroOfTheRound == Hero.CASSIDY

    eventPlayer.mccreeHealthHud = null
    wait(0.256)
    if eventPlayer.mccreeHealthHud == null:
        hudSubtext(getAllPlayers(), "{0} : {1} HP {2}".format(eventPlayer, ceil(eventPlayer.getHealth()), iconString(Icon.FIRE) if potatoHolder == eventPlayer else " "), HudPosition.LEFT, eventPlayer.getHealth() * -1, Color.RED, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
        eventPlayer.mccreeHealthHud = getLastCreatedText()
    startDamageModification(getAllPlayers(), getAllPlayers(), 50)


rule "MCCREE choose a potato holder":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition potatoHolder == null

    potatoHolder = random.choice(getLivingPlayers(Team.ALL))
    potatoPos = potatoHolder
    if ruleCondition:
        loop()
    potatoHolder.addHealthPool(Health.NORMAL, 25, false)


rule "MCCREE potato effect":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.CASSIDY

    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, potatoPos, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    potatoEffect = getLastCreatedEntity()
    createIcon(getAllPlayers(), potatoPos, Icon.FIRE, IconReeval.VISIBILITY_AND_POSITION, Color.RED)
    potatoIcon = getLastCreatedEntity()


rule "MCCREE potato holder":
    @Event eachPlayer
    @Hero cassidy
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition eventPlayer == potatoHolder

    eventPlayer.setStatusEffect(null, Status.BURNING, roundTimer)
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 50)
    eventPlayer.startDamageOverTime(null, roundTimer, 250)
    eventPlayer.setMoveSpeed(110)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.MELEE)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0)


rule "MCCREE not potato holder":
    @Event eachPlayer
    @Hero cassidy
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition eventPlayer != potatoHolder

    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.stopAllDamageOverTime()
    eventPlayer.setMoveSpeed(100)
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.MELEE)


rule "MCCREE pas\u200bs the potato":
    @Event playerDealtDamage
    @Hero cassidy
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition eventPlayer == potatoHolder

    destroyInWorldText(eventPlayer.mccreeInvincibleText)
    destroyHudText(eventPlayer.mccreeInvincibleHud)
    potatoHolder = victim
    potatoPos = victim
    eventPlayer.mccreeInvincibleTime = 1
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, eventPlayer.mccreeInvincibleTime)
    createInWorldText([player for player in getAllPlayers() if eventPlayer.mccreeInvincibleTime > 0], "INVINCIBLE: {0}".format(eventPlayer.mccreeInvincibleTime), attacker, 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)
    eventPlayer.mccreeInvincibleText = getLastCreatedText()
    wait()
    hudHeader([i for i in eventPlayer if eventPlayer.mccreeInvincibleTime > 0], "INVINCIBLE: {0}".format(eventPlayer.mccreeInvincibleTime), HudPosition.LEFT, 2, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.mccreeInvincibleHud = getLastCreatedText()
    wait()
    chaseOverTime(eventPlayer.mccreeInvincibleTime, 0, eventPlayer.mccreeInvincibleTime)
    attacker.setAbilityCooldown(Button.ABILITY_1, 0)
    victim.setAbilityCooldown(Button.ABILITY_1, 0)
    if eventAbility == Button.MELEE:
        heal(attacker, null, 15)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.YELLOW, eventPlayer, 1)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.YELLOW, eventPlayer, 2)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.YELLOW, eventPlayer, 3)


rule "MCCREE potato holder dies":
    @Event playerDied
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition eventPlayer == potatoHolder

    potatoHolder = null


rule "MCCREE potato holder leaves":
    @Event playerLeft
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition eventPlayer == potatoHolder

    potatoHolder = null


rule "MCCREE win {OUT OF TIME}":
    @Event eachPlayer
    @Hero cassidy
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition roundTimer <= 0.5
    @Condition getNumberOfPlayers(Team.ALL) > 1
    @Condition ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1 > 0

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    eventPlayer.addToScore(ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1)
    smallMessage(eventPlayer, "+{0} with {1} {2}".format("{0} {1}".format(ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1, "points" if ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1 > 1 else "point"), heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
    hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+{1} {2}".format(null, ceil(len(playersStartOfTheRound) / len(getLivingPlayers(Team.ALL))) - 1, "points" if ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1 > 1 else "point"), HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01


rule "MCCREE win {LAST PLAYER ALIVE}":
    @Event eachPlayer
    @Hero cassidy
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.CASSIDY
    @Condition getNumberOfLivingPlayers(Team.ALL) <= 1
    @Condition getNumberOfPlayers(Team.ALL) > 1
    @Condition ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1 > 0

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    eventPlayer.addToScore(len(playersStartOfTheRound) - 1)
    smallMessage(eventPlayer, "+{0} with {1} {2}".format("{0} {1}".format(ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1, "points" if ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1 > 1 else "point"), heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
    hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+{1} {2}".format(null, ceil(len(playersStartOfTheRound) / len(getLivingPlayers(Team.ALL))) - 1, "points" if ceil(len(playersStartOfTheRound) / getNumberOfLivingPlayers(Team.ALL)) - 1 > 1 else "point"), HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01


rule "MCCREE end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.CASSIDY
    @Condition heroOfLastRound == Hero.CASSIDY

    destroyEffect(potatoEffect)
    destroyIcon(potatoIcon)
    potatoHolder = null


rule "MCCREE end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.CASSIDY
    @Condition heroOfLastRound == Hero.CASSIDY

    eventPlayer.clearStatusEffect(Status.BURNING)
    stopDamageOverTime(getLastDamageOverTimeId())
    stopAllDamageModifications()
    eventPlayer.setMoveSpeed(100)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.MELEE)
    wait(1)
    eventPlayer.removeAllHealthPools()
    destroyHudText(eventPlayer.mccreeHealthHud)


rule "MEI init player":
    @Event eachPlayer
    @Hero mei
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.isAlive() == true
    @Condition isGameInProgress() == true

    wait()
    eventPlayer.setMaxHealth(0.04)
    eventPlayer.setHealth(1)
    eventPlayer.setDamageDealt(1000)
    eventPlayer.meiAmmo = 0
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.meiIsPickingSnow = false
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 60)
    wait(1)
    eventPlayer.meiAmmo = 1
    eventPlayer.meiPickingSnowTimer = 1
    eventPlayer.setMaxHealth(0.04)
    hudHeader(eventPlayer, "{1} AMMO: {0}/3".format(eventPlayer.meiAmmo, abilityIconString(Hero.MEI, Button.SECONDARY_FIRE)), HudPosition.LEFT, 0, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.meiAmmoHud = getLastCreatedText()
    hudHeader([i for i in eventPlayer if eventPlayer.meiMeeleCatchCooldown >= 2], "{1} CATCH COOLDOWN: {0}".format(eventPlayer.meiMeeleCatchCooldown, abilityIconString(Hero.MEI, Button.MELEE)), HudPosition.LEFT, 0.1, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.meiCatchActiveCooldownHud = getLastCreatedText()
    hudHeader([i for i in eventPlayer if eventPlayer.meiMeeleCatchCooldown > 0 and eventPlayer.meiMeeleCatchCooldown < 2], "{1} CATCH COOLDOWN: {0}".format(eventPlayer.meiMeeleCatchCooldown, abilityIconString(Hero.MEI, Button.MELEE)), HudPosition.LEFT, 0.1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.meiCatchCooldownHud = getLastCreatedText()
    createInWorldText([player for player in getAllPlayers() if eventPlayer.meiAmmo > 0 and eventPlayer.isAlive()], "{0}".format(abilityIconString(Hero.MEI, Button.ULTIMATE)), eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.SKY_BLUE)
    eventPlayer.meiHasAmmoIcon = getLastCreatedText()
    createInWorldText([i for i in eventPlayer if eventPlayer.meiHasPickedUpAnyAmmo == false], "{0} crouch on me {1}".format(iconString(Icon.ARROW_DOWN), "[{0}]".format(inputBindingString(Button.CROUCH)) if inputBindingString(Button.CROUCH) != "" else ""), sorted(meiSnowPos, lambda player: distance(eventPlayer.getPosition(), player))[0] + vect(0, 0.5, 0), 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.SKY_BLUE)
    eventPlayer.meiCrouchOnMeText = getLastCreatedText()
    createEffect([player for player in getAllPlayers() if eventPlayer.meiMeeleCatchCooldown >= 2], Effect.SPHERE, Color.SKY_BLUE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.meiCatchSphereEffect = getLastCreatedEntity()


rule "MEI init global":
    @Condition heroOfTheRound == Hero.MEI
    @Condition isGameInProgress() == true

    #Creates the array to store the effects of the snow spots
    meiSnowEffects = []
    #Creates the array to store the positions of the snow spots
    meiSnowPos = []
    for meiSnowIt in range(ceil(len(playersStartOfTheRound) / 3) + 1):
        #Append to the array meiSnowPos a new position
        meiSnowPos.append(vect(random.uniform(-16, 16), -0.5, random.uniform(-16, 16)))
        wait()
    #Create a snow spot effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, meiSnowPos[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    #Create a snow sparkle effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.WHITE, meiSnowPos[0] + vect(0, 0.5, 0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    if ceil(len(playersStartOfTheRound) / 3) + 1 == 1:
        return
    #Create a snow spot effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, meiSnowPos[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    #Create a snow sparkle effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.WHITE, meiSnowPos[1] + vect(0, 0.5, 0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    if ceil(len(playersStartOfTheRound) / 3) + 1 == 2:
        return
    #Create a snow spot effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, meiSnowPos[2], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    #Create a snow sparkle effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.WHITE, meiSnowPos[2] + vect(0, 0.5, 0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    if ceil(len(playersStartOfTheRound) / 3) + 1 == 3:
        return
    #Create a snow spot effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, meiSnowPos[3], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    #Create a snow sparkle effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.WHITE, meiSnowPos[3] + vect(0, 0.5, 0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    if ceil(len(playersStartOfTheRound) / 4) + 1 == 4:
        return
    #Create a snow spot effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, meiSnowPos[4], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())
    #Create a snow sparkle effect in the position in meiSnowPos
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.WHITE, meiSnowPos[4] + vect(0, 0.5, 0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Append the last created snow spot to meiSnowEffects
    meiSnowEffects.append(getLastCreatedEntity())


rule "MEI Kill":
    @Event playerTookDamage
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventAbility != Button.MELEE

    if victim.meiIsCatching == false:
        eventPlayer.clearStatusEffect(Status.UNKILLABLE)
        kill(victim, attacker)
        #10 ult % = 20 ult %
        attacker.setUltCharge(attacker.getUltCharge() + 10)
    if victim.meiIsCatching == true:
        smallMessage(victim, "You catched {0} snowball".format(attacker))
        smallMessage(attacker, "{0} catched your snowball".format(victim))


rule "MEI Pick up Snow":
    @Event eachPlayer
    @Hero mei
    @Condition any([distance(eventPlayer, player) <= 2 for player in meiSnowPos]) == true
    @Condition eventPlayer.isCrouching() == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI

    if eventPlayer.meiAmmo < 3:
        eventPlayer.meiClosestSnow = sorted(meiSnowPos, lambda player: distance(eventPlayer, player))[0]
        wait()
        eventPlayer.meiClosestSnow = meiSnowPos.index(eventPlayer.meiClosestSnow)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
        meiSnowPos[eventPlayer.meiClosestSnow] = vect(random.uniform(-16, 16), -0.5, random.uniform(-16, 16))
        eventPlayer.meiAmmo++
        eventPlayer.meiHasPickedUpAnyAmmo = true
    else:
        smallMessage(eventPlayer, "MAX AMMO REACHED")


rule "MEI Meele Catch Cooldown":
    @Event eachPlayer
    @Hero mei
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true
    @Condition eventPlayer.meiMeeleCatchCooldown == 0

    wait()
    eventPlayer.meiIsCatching = true
    eventPlayer.meiMeeleCatchCooldown = 3
    eventPlayer.setAbilityCooldown(Button.MELEE, eventPlayer.meiMeeleCatchCooldown)
    chaseAtRate(eventPlayer.meiMeeleCatchCooldown, 0, 1, ChaseRateReeval.NONE)


rule "MEI No Meele Catch":
    @Event eachPlayer
    @Hero mei
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.meiMeeleCatchCooldown < 2

    eventPlayer.meiIsCatching = false


rule "MEI Meele Catch Catch":
    @Event playerTookDamage
    @Condition victim.meiIsCatching == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.meiMeeleCatchCooldown >= 2
    @Condition eventAbility == Button.SECONDARY_FIRE

    if eventPlayer.meiAmmo < 3:
        victim.meiAmmo++
    else:
        smallMessage(eventPlayer, "MAX AMMO REACHED")


rule "MEI Disallow Meele":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.meiMeeleCatchCooldown > 0

    eventPlayer.disallowButton(Button.MELEE)


rule "MEI Allow Meele":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.meiMeeleCatchCooldown == 0

    eventPlayer.allowButton(Button.MELEE)


rule "MEI Disallow Sec. Fire":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition (eventPlayer.meiAmmo <= 0 or eventPlayer.meiIsPickingSnow == true) == true

    eventPlayer.disallowButton(Button.SECONDARY_FIRE)


rule "MEI Allow Sec. Fire":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition (eventPlayer.meiAmmo > 0 and eventPlayer.meiIsPickingSnow == false) == true

    eventPlayer.allowButton(Button.SECONDARY_FIRE)


rule "MEI Shoot":
    @Event eachPlayer
    @Hero mei
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition eventPlayer.isFiringSecondaryFire() == true
    @Condition (eventPlayer.meiAmmo > 0 and eventPlayer.meiIsPickingSnow == false) == true

    wait()
    eventPlayer.disallowButton(Button.MELEE)
    if eventPlayer.isFiringSecondaryFire() == false:
        eventPlayer.meiAmmo--
        if eventPlayer.meiMeeleCatchCooldown == 0:
            eventPlayer.allowButton(Button.MELEE)
        return
    loop()


rule "MEI Stop Shoot":
    @Event eachPlayer
    @Hero mei
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true

    if eventPlayer.meiAmmo <= 0:
        eventPlayer.disallowButton(Button.SECONDARY_FIRE)
        eventPlayer.cancelPrimaryAction()
    wait()
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    if ruleCondition:
        loop()
    if eventPlayer.meiAmmo > 0:
        eventPlayer.allowButton(Button.SECONDARY_FIRE)


rule "MEI Ultimate":
    @Event eachPlayer
    @Hero mei
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MEI
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition eventPlayer.getUltCharge() >= 100

    destroyHudText(eventPlayer.meiAmmoHud)
    hudHeader(eventPlayer, "AMMO: ∞/3", HudPosition.LEFT, 0, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.meiAmmoHud = getLastCreatedText()
    eventPlayer.meiAmmo = 9999
    eventPlayer.setStatusEffect(null, Status.BURNING, roundTimer)


rule "MEI end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.MEI
    @Condition heroOfLastRound == Hero.MEI

    eventPlayer.meiAmmo = 1
    eventPlayer.allowButton(Button.MELEE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)
    eventPlayer.allowButton(Button.ULTIMATE)
    eventPlayer.meiIsPickingSnow = false
    eventPlayer.setDamageDealt(100)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.setMaxHealth(100)
    destroyHudText(eventPlayer.meiAmmoHud)
    destroyHudText(eventPlayer.meiCatchActiveCooldownHud)
    destroyHudText(eventPlayer.meiCatchCooldownHud)
    destroyInWorldText(eventPlayer.meiHasAmmoIcon)
    destroyInWorldText(eventPlayer.meiCrouchOnMeText)
    destroyEffect(eventPlayer.meiCatchSphereEffect)


rule "MEI end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.MEI
    @Condition heroOfLastRound == Hero.MEI

    wait(0.064)
    for meiSnowIt in range(10):
        destroyEffect(meiSnowEffects[meiSnowIt])
    meiSnowEffects = []
    meiSnowPos = []


rule "MERCY go back, told you":
    @Event eachPlayer
    @Hero mercy
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.MERCY
    @Condition distance(eventPlayer, vect(0, 0, 0)) >= 60

    smallMessage(eventPlayer, "go back")
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1)
    wait(4)
    if not ruleCondition:
        return
    smallMessage(eventPlayer, "told you")
    eventPlayer.setStatusEffect(null, Status.STUNNED, 5)


rule "MERCY secondary buttons":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.MERCY
    @Condition (eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) == true

    eventPlayer.forceButtonPress(Button.MELEE)


rule "PHARAH init effects":
    @Event eachPlayer
    @Hero pharah
    @Condition heroOfTheRound == Hero.PHARAH
    @Condition eventPlayer.isAlive() == true

    wait(2)
    createEffect([player for player in getAllPlayers() if eventPlayer.pharahHeal == true], Effect.GOOD_AURA, Color.YELLOW, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.pharahHealEffect = getLastCreatedEntity()
    createEffect([player for player in getAllPlayers() if eventPlayer.getHealth() > 199], Effect.GOOD_AURA, Color.AQUA, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.pharahDamageBoostEffect = getLastCreatedEntity()
    hudHeader([i for i in eventPlayer if eventPlayer.pharahHeal == true], "HEALING", HudPosition.LEFT, 2, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.pharahHealHud = getLastCreatedText()
    hudHeader([i for i in eventPlayer if eventPlayer.getHealth() > 199], "DAMAGE BOOST", HudPosition.LEFT, 2, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.pharahDamageBoostHud = getLastCreatedText()


rule "PHARAH damage boost":
    @Event eachPlayer
    @Hero pharah
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.PHARAH
    @Condition eventPlayer.getHealth() > 199
    @Condition eventPlayer.pharahHeal == true

    eventPlayer.pharahHeal = false
    eventPlayer.pharahDamageBoost = true
    eventPlayer.setDamageDealt(130)
    eventPlayer.stopAllHealingOverTime()
    wait()


rule "PHARAH healing":
    @Event eachPlayer
    @Hero pharah
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.PHARAH
    @Condition eventPlayer.getHealth() < eventPlayer.getMaxHealth()

    eventPlayer.pharahDamageBoost = false
    wait(0.5)
    eventPlayer.pharahHeal = true
    eventPlayer.setDamageDealt(100)
    eventPlayer.startHealingOverTime(null, roundTimer, 50)


rule "PHARAH dead":
    @Event playerDied
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.PHARAH

    wait(0.032)
    eventPlayer.pharahHeal = false
    eventPlayer.pharahDamageBoost = false
    wait(0.032)
    destroyEffect(eventPlayer.pharahHealEffect)
    wait(0.032)
    destroyEffect(eventPlayer.pharahDamageBoostEffect)
    eventPlayer.stopAllHealingOverTime()
    eventPlayer.setDamageDealt(100)
    destroyHudText(eventPlayer.pharahHealHud)
    destroyHudText(eventPlayer.pharahDamageBoostHud)


rule "PHARAH end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.PHARAH
    @Condition heroOfLastRound == Hero.PHARAH

    eventPlayer.pharahHeal = false
    eventPlayer.pharahDamageBoost = false
    destroyEffect(eventPlayer.pharahHealEffect)
    destroyEffect(eventPlayer.pharahDamageBoostEffect)
    destroyHudText(eventPlayer.pharahHealHud)
    destroyHudText(eventPlayer.pharahDamageBoostHud)
    eventPlayer.stopAllHealingOverTime()
    eventPlayer.setDamageDealt(100)


rule "REIN init player":
    @Event eachPlayer
    @Hero reinhardt
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    wait(0.256)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.setDamageDealt(50)
    eventPlayer.setProjectileSpeed(150)


rule "REIN bounce":
    @Event eachPlayer
    @Hero reinhardt
    @Condition distance(eventPlayer.getPosition(), nearestWalkablePosition(eventPlayer.getPosition())) <= 0.5
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    if eventPlayer.isHoldingButton(Button.CROUCH) == false:
        goto lbl_0
    eventPlayer.applyImpulse(Vector.UP, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    lbl_0:
    if eventPlayer.isHoldingButton(Button.CROUCH) == true:
        goto lbl_1
    eventPlayer.applyImpulse(Vector.UP, 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    lbl_1:
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 25)
    #playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.PURPLE, vect(eventPlayer.getPosition().x, eventPlayer.getPosition().y - 2.1, eventPlayer.getPosition().z), 0.1)
    wait(0.064)
    if ruleCondition:
        loop()


rule "REIN knockback effect on all abilities":
    @Event playerDealtDamage
    @Hero reinhardt
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    victim.applyImpulse(vect(directionTowards(attacker, victim).x, 0, directionTowards(attacker, victim).z), eventDamage * ((60 - roundTimer) / 60 + 1), Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #smallMessage(attacker, "{0}".format(eventDamage * ((60 - roundTimer) / 60 + 1)))
    heal(victim, null, eventDamage)
    victim.reinLastAttacker = attacker
    victim.reinAttackerCreditTimer = 10
    chaseAtRate(victim.reinAttackerCreditTimer, 0, 1)
    if attacker.reinUltTimer > 0:
        goto lbl_0
    attacker.reinTempUltCharge = eventPlayer.getUltCharge() + (13 - ((len([player for player in getAllPlayers() if player.reinIsAlive == true])) / 2))
    attacker.setUltCharge(attacker.reinTempUltCharge)
    lbl_0:


rule "REIN died":
    @Event playerDied
    @Hero reinhardt
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.REINHARDT
    @Condition victim.reinAttackerCreditTimer > 0

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, victim.reinLastAttacker, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, victim.reinLastAttacker, 100)
    victim.reinLastAttacker.addToScore(1)
    smallMessage(victim.reinLastAttacker, "+1 point with {0} {1}".format(heroIcon(victim.reinLastAttacker.getHero()), victim.reinLastAttacker.getHero()))
    wait(0.032)
    hudText(getAllPlayers(), heroIcon(victim.reinLastAttacker.getHero()), victim.reinLastAttacker, "+1 point", HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01


rule "REIN charge: make shorter":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.reinChargeTimer = 3
    chaseAtRate(eventPlayer.reinChargeTimer, 0, 1)


rule "REIN charge: stop after delay":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.reinChargeTimer <= 0
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.setStatusEffect(null, Status.STUNNED, 0.016)
    eventPlayer.reinCanCancelCharge = false
    eventPlayer.stopAcceleration()


rule "REIN charge: make the player glide":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.startAcceleration(vect(0, 0.8, 0), 30, 4, Relativity.TO_PLAYER)
    eventPlayer.reinChargeCancelTimer = 0.8
    chaseAtRate(eventPlayer.reinChargeCancelTimer, 0, 1)


rule "REIN charge: allow cancel":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false
    @Condition eventPlayer.reinChargeCancelTimer <= 0
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.reinCanCancelCharge = true


rule "REIN charge: cancel (press charge again to cancel a charge)":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    @Condition eventPlayer.reinCanCancelCharge == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.reinCanCancelCharge = false
    eventPlayer.reinChargeTimer = 0


rule "REIN charge: stop":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.reinChargeTimer = 0


rule "REIN charge: boom boom if two rein charge each other":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.hasStatus(Status.KNOCKED_DOWN) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.reinExplosionCenter = (eventPlayer.getPosition() + getClosestPlayer(eventPlayer, Team.ALL).getPosition()) / 2
    wait(0.02)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, eventPlayer.reinExplosionCenter, 15)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer.reinExplosionCenter, 50)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.RED, eventPlayer.reinExplosionCenter, 200)
    wait(0.02)
    eventPlayer.reinExplosionCenter = null


rule "REIN ult: charge":
    @Event playerDealtFinalBlow
    @Hero reinhardt
    @Condition eventPlayer.reinUltTimer <= 0
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.reinTempUltCharge = eventPlayer.getUltCharge() + 30
    attacker.setUltCharge(eventPlayer.reinTempUltCharge)


rule "REIN ult: use":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition eventPlayer.getUltCharge() >= 100
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.setUltCharge(0)
    eventPlayer.setStatusEffect(null, Status.BURNING, 1 + getNumberOfLivingPlayers(Team.ALL))
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    eventPlayer.setMoveSpeed(140)
    eventPlayer.setProjectileSpeed(300)
    eventPlayer.setDamageDealt(80)
    eventPlayer.reinUltTimer = 1 + getNumberOfLivingPlayers(Team.ALL)
    wait()
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.reinAuraEffect = getLastCreatedEntity()
    wait()
    hudHeader(eventPlayer, "POWER-UP: {0}".format(eventPlayer.reinUltTimer), HudPosition.LEFT, 2, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.reinUltHud = getLastCreatedText()
    chaseAtRate(eventPlayer.reinUltTimer, -1, 1)


rule "REIN ult: stun effect":
    @Event playerTookDamage
    @Hero reinhardt
    @Condition attacker.hasStatus(Status.BURNING) == true
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true

    eventPlayer.setStatusEffect(null, Status.STUNNED, 1)


rule "REIN ult: end":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.reinUltTimer <= 0
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.REINHARDT

    eventPlayer.setDamageDealt(50)
    eventPlayer.setProjectileSpeed(150)
    eventPlayer.setMoveSpeed(100)
    wait(0.064)
    destroyEffect(eventPlayer.reinAuraEffect)
    destroyHudText(eventPlayer.reinUltHud)
    #smallMessage(getAllPlayers(), "end end")


rule "REIN end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.REINHARDT
    @Condition heroOfLastRound == Hero.REINHARDT

    eventPlayer.stopAcceleration()
    eventPlayer.allowButton(Button.ULTIMATE)
    eventPlayer.setDamageDealt(100)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.reinUltTimer = 0
    wait(0.064)
    destroyEffect(eventPlayer.reinAuraEffect)
    destroyHudText(eventPlayer.reinUltHud)


rule "ROADHOG init global":
    @Condition heroOfTheRound == Hero.ROADHOG

    roadhogHoleRadius = 7
    roadhogHoleEffects = []
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.RING, Color.WHITE, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.RING, Color.WHITE, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.RING, Color.WHITE, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, vect(0, 0, 0), roadhogHoleRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    roadhogHoleEffects.append(getLastCreatedEntity())
    chaseOverTime(roadhogHoleRadius, 9, 60, ChaseTimeReeval.NONE)
    createInWorldText(getAllPlayers(), "{0}".format(iconString(Icon.SKULL)), vect(0, 5, 0), 4, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    roadhogHoleEffects.append(getLastCreatedText())
    wait(0.5)
    minigameStringTitles[heroList.index(Hero.ROADHOG)] = "{0} {1} HOOKS 1 HOLE {0}".format(heroIcon(Hero.ROADHOG), getNumberOfLivingPlayers(Team.ALL))


rule "ROADHOG init player":
    @Event eachPlayer
    @Condition heroOfTheRound == Hero.ROADHOG
    @Condition eventPlayer.isAlive() == true

    #eventPlayer.startForcingThrottle(0, 0, 0, 0, 0, 0)
    #eventPlayer.setGravity(0)
    #eventPlayer.teleport(10 * normalize(vect(random.uniform(-1, 1), 0, random.uniform(-1, 1))))
    #while distance(eventPlayer.getPosition() * vect(1, 0, 1), vect(0, 10, 0) * vect(1, 0, 1)) <= roadhogHoleRadius:
    #eventPlayer.teleport(10 * normalize(vect(random.uniform(-1, 1), 0, random.uniform(-1, 1))))
    #wait(0.175)
    #__end__()
    #eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.roadhogYanked = true
    #wait(0.512)
    #while eventPlayer.getPosition().y < 9:
    #eventPlayer.teleport(eventPlayer.getPosition() + vect(0, 10, 0))
    #wait(0.175)
    #while eventPlayer.getPosition().y >= 10.5:
    #eventPlayer.teleport(vect(eventPlayer.getPosition().x, 10, eventPlayer.getPosition().z))
    #wait(0.175)
    #__end__()
    #__end__()
    #eventPlayer.allowButton(Button.ABILITY_1)
    #eventPlayer.setGravity(0)
    #eventPlayer.applyImpulse(Vector.DOWN, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.UP, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.BACKWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.FORWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.RIGHT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #eventPlayer.applyImpulse(Vector.LEFT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.roadhogYanked = false
    #eventPlayer.roadhogFalling = false
    #wait(1.5)
    #eventPlayer.stopForcingThrottle()


rule "ROADHOG in the hole":
    @Event eachPlayer
    @Hero roadhog
    @Condition distance(eventPlayer.getPosition(), vect(0, 0, 0)) <= roadhogHoleRadius
    @Condition eventPlayer.roadhogYanked == false
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ROADHOG
    @Condition roundTimer <= 58

    eventPlayer.disableEnvironmentCollision(true)
    #eventPlayer.setStatusEffect(null, Status.FROZEN, roundTimer)


rule "ROADHOG out of the hole":
    @Event eachPlayer
    @Hero roadhog
    @Condition distance(eventPlayer.getPosition(), vect(0, 0, 0)) > roadhogHoleRadius
    @Condition eventPlayer.roadhogYanked == false
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ROADHOG
    @Condition roundTimer <= 58

    eventPlayer.enableEnvironmentCollision()
    #eventPlayer.clearStatusEffect(Status.FROZEN)


rule "ROADHOG Yank":
    @Event playerDealtDamage
    @Hero roadhog
    @Condition eventAbility == Button.ABILITY_1
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.ROADHOG

    while attacker.isUsingAbility1():
        wait()
        victim.roadhogYanked = true
        eventPlayer.disallowButton(Button.ABILITY_1)
    wait(0.128)
    victim.roadhogYanked = false
    eventPlayer.allowButton(Button.ABILITY_1)


rule "ROADHOG secondary buttons":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ROADHOG
    @Condition (eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) == true

    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "ROADHOG cd":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ROADHOG
    @Condition eventPlayer.isUsingAbility1() == true

    while eventPlayer.isUsingAbility1() == true:
        wait(0.032)
    #smallMessage(eventPlayer, "{0}".format(eventPlayer.getAbilityCooldown(Button.ABILITY_1)))
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 1.9)


rule "ROADHOG end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.ROADHOG
    @Condition heroOfLastRound == Hero.ROADHOG

    for roadhogHoleEffectsIt in range(len(roadhogHoleEffects)):
        destroyEffect(roadhogHoleEffects[roadhogHoleEffectsIt])
    destroyInWorldText(roadhogHoleEffects.last())


rule "ROADHOG end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.ROADHOG
    @Condition heroOfLastRound == Hero.ROADHOG

    #eventPlayer.setGravity(100)
    eventPlayer.roadhogYanked = true
    eventPlayer.enableEnvironmentCollision()


rule "SIGMA init player":
    @Event eachPlayer
    @Hero sigma
    @Condition heroOfTheRound == Hero.SIGMA

    startDamageModification(eventPlayer, eventPlayer, 0)
    eventPlayer.sigmaCatch = false


rule "SIGMA Ult damage off":
    @Event eachPlayer
    @Hero sigma
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    eventPlayer.setDamageDealt(0)


rule "SIGMA no Ult damage on":
    @Event eachPlayer
    @Hero sigma
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    eventPlayer.setDamageDealt(100)


rule "SIGMA Ult stunt":
    @Event playerDealtKnockback
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    victim.setStatusEffect(null, Status.STUNNED, 5)


rule "SIGMA grasp cooldown":
    @Event eachPlayer
    @Hero sigma
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    eventPlayer.sigmaUsingGrasp = true
    eventPlayer.setDamageReceived(1)
    wait(0.125)
    eventPlayer.cancelPrimaryAction()
    eventPlayer.setDamageReceived(100)
    while eventPlayer.isUsingAbility1():
        wait(0.032)
    if eventPlayer.sigmaCatch == true:
        eventPlayer.setAbilityCooldown(Button.ABILITY_1, 2)
    else:
        eventPlayer.setAbilityCooldown(Button.ABILITY_1, 10)
    eventPlayer.sigmaUsingGrasp = false
    eventPlayer.sigmaCatch = false


rule "SIGMA catch":
    @Event playerDealtDamage
    @Hero sigma
    @Condition victim.isInViewAngle(attacker, 45) == true
    @Condition victim.sigmaUsingGrasp == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    victim.sigmaCatch = true
    kill(attacker, victim)
    smallMessage([victim, attacker], "rock catched {0} by {1}".format("{0}{1}".format(abilityIconString(Hero.SIGMA, Button.ABILITY_2), abilityIconString(Hero.SIGMA, Button.ABILITY_1)), victim))


rule "SIGMA no catch":
    @Event playerDealtDamage
    @Hero sigma
    @Condition victim.isInViewAngle(attacker, 45) == false
    @Condition victim.sigmaUsingGrasp == false
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    eventPlayer.sigmaCatch = false
    kill(victim, attacker)


rule "SIGMA kill":
    @Event playerDealtFinalBlow
    @Hero sigma
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SIGMA

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, eventPlayer, 1)
    eventPlayer.addToScore(1)
    smallMessage(eventPlayer, "+1 point with {0} {1}".format(heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
    hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+1 point", HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01


rule "SIGMA end of the round":
    @Event eachPlayer
    @Hero sigma
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.SIGMA
    @Condition heroOfLastRound == Hero.SIGMA

    eventPlayer.setDamageDealt(100)
    startDamageModification(eventPlayer, eventPlayer, 100)


rule "SOLDIER init global":
    @Condition heroOfTheRound == Hero.SOLDIER

    soldierObjectiveEffects = []
    soldierObjectivePos = []
    soldierObjectivePos = [vect(-18, 0, -18), vect(-18, 0, 0), vect(-18, 0, 18), vect(0, 0, -18), vect(0, 0, 18), vect(18, 0, -18), vect(18, 0, 0), vect(18, 0, 18)]
    soldierObjectivePos = random.shuffle(soldierObjectivePos)
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 0], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[0], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 0], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[0], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 0], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[0], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 1], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[1], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 1], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[1], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 1], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[1], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 2], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[2], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 2], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[2], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 2], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[2], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 3], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[3], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 3], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[3], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 3], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[3], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 4], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[4], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 4], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[4], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 4], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[4], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 5], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[5], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 5], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[5], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 5], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[5], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 6], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[6], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 6], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[6], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 6], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[6], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 7], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[7], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 7], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[7], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())
    createEffect([player for player in getAllPlayers() if player.soldierPoints == 7], Effect.LIGHT_SHAFT, Color.BLUE, soldierObjectivePos[7], 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    soldierObjectiveEffects.append(getLastCreatedEntity())


rule "SOLDIER init & phased out":
    @Event eachPlayer
    @Hero soldier
    @Condition heroOfTheRound == Hero.SOLDIER
    @Condition eventPlayer.isAlive() == true

    eventPlayer.soldierPointsHud = null
    eventPlayer.startForcingThrottle(0, 0, 0, 0, 0, 0)
    wait(0.512)
    eventPlayer.teleport(vect(0, 0, 0))
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), soldierObjectivePos[0]), Relativity.TO_WORLD)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 60)
    eventPlayer.soldierPoints = 0
    eventPlayer.stopForcingThrottle()
    wait(0.256)
    if eventPlayer.soldierPointsHud == null:
        hudSubtext(getAllPlayers(), "{0}: {1}/8 = {2}/4 points".format(eventPlayer, eventPlayer.soldierPoints, floor(eventPlayer.soldierPoints / 2)), HudPosition.LEFT, (eventPlayer.soldierPoints + 10) * -1, Color.BLUE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
        eventPlayer.soldierPointsHud = getLastCreatedText()
    eventPlayer.teleport(vect(0, 0, 0))
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), soldierObjectivePos[0]), Relativity.TO_WORLD)
    wait(0.256)
    eventPlayer.teleport(vect(0, 0, 0))
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), soldierObjectivePos[0]), Relativity.TO_WORLD)
    hudHeader(eventPlayer, l"{0} m/s".format(eventPlayer.getHorizontalSpeed()), HudPosition.LEFT, 2, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.playerSpeedHud = getLastCreatedText()
    createIcon(eventPlayer, soldierObjectivePos[eventPlayer.soldierPoints] + vect(0, 1.5, 0), Icon.FLAG, IconReeval.VISIBILITY_AND_POSITION, Color.BLUE)
    eventPlayer.playerClosestObjectiveIcon = getLastCreatedEntity()


rule "SOLDIER sprint":
    @Event eachPlayer
    @Hero soldier
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.getHorizontalSpeed() > 5
    @Condition heroOfTheRound == Hero.SOLDIER

    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 60)
    eventPlayer.soldierSprint += 1.5
    eventPlayer.setMoveSpeed(eventPlayer.soldierSprint)
    wait(0.1)
    if ruleCondition:
        loop()
    eventPlayer.soldierSprint = 100
    eventPlayer.setMoveSpeed(100)
    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.GREEN, eventPlayer, 100)


rule "SOLDIER point":
    @Event eachPlayer
    @Hero soldier
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.SOLDIER
    @Condition eventPlayer.soldierPoints < 8
    @Condition distance(eventPlayer.getPosition(), soldierObjectivePos[eventPlayer.soldierPoints]) <= 1.55

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.BLUE, eventPlayer, 1)
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.BLUE, eventPlayer, 100)
    eventPlayer.soldierPoints++
    if eventPlayer.soldierPoints % 2 == 0:
        eventPlayer.addToScore(1)
        smallMessage(eventPlayer, "+1 point with {0} {1}".format(heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
        hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+1 point", HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
        pointfeedHud.append(getLastCreatedText())
        pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
        pointfeedHudId -= 0.01


rule "SOLDIER winner":
    @Event eachPlayer
    @Hero soldier
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SOLDIER
    @Condition eventPlayer.soldierPoints >= 8

    roundTimer = 0.032


rule "SOLDIER end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.SOLDIER
    @Condition heroOfLastRound == Hero.SOLDIER

    soldierDestructorIt = 0
    for soldierDestructorIt in range(len(soldierObjectiveEffects)):
        destroyEffect(soldierObjectiveEffects[soldierDestructorIt])


rule "SOLDIER end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.SOLDIER
    @Condition heroOfLastRound == Hero.SOLDIER

    wait()
    eventPlayer.soldierPoints = 0
    destroyHudText(eventPlayer.playerSpeedHud)
    destroyIcon(eventPlayer.playerClosestObjectiveIcon)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.setMoveSpeed(100)
    wait(0.256)
    destroyHudText(eventPlayer.soldierPointsHud)


rule "SOMBRA hack to kill":
    @Event eachPlayer
    @Hero sombra
    @Condition eventPlayer.hasStatus(Status.HACKED) == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SOMBRA

    eventPlayer.sombraHackedPostion = eventPlayer.getPosition()
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE, eventPlayer.sombraHackedPostion, 1.5)
    eventPlayer.teleport(vect(0, -500, 0))


rule "SOMBRA limit stealth duration":
    @Event eachPlayer
    @Hero sombra
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SOMBRA

    wait(6, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    smallMessage(eventPlayer, "Maximum Stealth Duration Reached")


rule "SYM init player":
    @Event eachPlayer
    @Hero symmetra
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA

    #Brig flag text above the head for the player who reached the color first
    createInWorldText([player for player in getAllPlayers() if symPlayersInTheSelectedColor[0] == eventPlayer], "{0}".format(abilityIconString(Hero.BRIGITTE, Button.ULTIMATE)), eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.symFirstPlayerInColorText = getLastCreatedText()
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    eventPlayer.disablePlayerCollision()
    eventPlayer.symIn = false
    wait(0.512)
    eventPlayer.teleport(vect(0, 0, 0))
    #Left HUD showing which position you finish the run to the color + brig flag icon if you finished 1st
    hudHeader([i for i in eventPlayer if eventPlayer.symIn and symPhase == "someoneReachedTheSelectedColor"], "{0}{1}".format(symPlayersInTheSelectedColor.index(eventPlayer) + 1, eventPlayer.symOrdinalString), HudPosition.LEFT, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.symOrdinalPosHud = getLastCreatedText()


rule "SYM init global":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA

    symColoredSpheresEffectsAndText = []
    symPlayersInTheSelectedColor = []
    symVictims = []
    symInnerRound = 0
    symColorDeciding = 0
    symColorSelected = 0
    symTimeToReachTheColor = 5
    wait(0.032)
    symColorsPositions = [vect(0, 0, 0), vect(0, 0, 15), vect(-15, 0, 15), vect(-15, 0, 0), vect(-15, 0, -15), vect(0, 0, -15), vect(15, 0, -15), vect(15, 0, 0), vect(15, 0, 15)]
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, symColorsPositions[1], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, symColorsPositions[2], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.ORANGE, symColorsPositions[3], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.PURPLE, symColorsPositions[4], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, symColorsPositions[5], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.TURQUOISE, symColorsPositions[6], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, symColorsPositions[7], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.SPHERE, Color.YELLOW, symColorsPositions[8], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    symColoredSpheresEffectsAndText.append(getLastCreatedEntity())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 15, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[1]) <= 5], "BLUE", symColorsPositions[1] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 21.21, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[2]) <= 5], "GREEN", symColorsPositions[2] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 15, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[3]) <= 5], "ORANGE", symColorsPositions[3] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 21.21, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[4]) <= 5], "PURPLE", symColorsPositions[4] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 15, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[5]) <= 5], "RED", symColorsPositions[5] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 21.21, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[6]) <= 5], "TURQUOISE", symColorsPositions[6] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 15, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[7]) <= 5], "WHITE", symColorsPositions[7] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    createInWorldText([player for player in getAllPlayers() if distance(raycast(player.getEyePosition(), player.getEyePosition() + player.getFacingDirection() * 21.21, null, getAllPlayers(), false).getHitPosition(), symColorsPositions[8]) <= 5], "YELLOW", symColorsPositions[8] + vect(0, 1.5, 0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 1], "THE COLOR IS...", HudPosition.TOP, 3, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 2], "THE COLOR IS...", HudPosition.TOP, 3, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 3], "THE COLOR IS...", HudPosition.TOP, 3, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 4], "THE COLOR IS...", HudPosition.TOP, 3, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 5], "THE COLOR IS...", HudPosition.TOP, 3, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 6], "THE COLOR IS...", HudPosition.TOP, 3, Color.TURQUOISE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 7], "THE COLOR IS...", HudPosition.TOP, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext([player for player in getAllPlayers() if symColorDeciding == 8], "THE COLOR IS...", HudPosition.TOP, 3, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), "Syms in: {0}".format(len([player for player in getAllPlayers() if player.symIn])), HudPosition.LEFT, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    hudSubtext(getAllPlayers(), "Syms out: {0}".format(len([player for player in getAllPlayers() if player.symIn == false and player.isAlive()])), HudPosition.LEFT, 4, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    symColoredSpheresEffectsAndText.append(getLastCreatedText())
    symTheColorIsSelectedTrigger()


rule "SYM invisibility ON":
    @Event eachPlayer
    @Hero symmetra
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition distance(eventPlayer.getPosition(), vect(0, 0, 0)) <= 2

    #getAllPlayers().exclude(eventPlayer).setInvisibility(Invis.ALL)
    getAllPlayers().setInvisibility(Invis.ALL)


rule "SYM invisibility OFF":
    @Event eachPlayer
    @Hero symmetra
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition distance(eventPlayer.getPosition(), vect(0, 0, 0)) > 2

    wait(0.064)
    #getAllPlayers().exclude(eventPlayer).setInvisibility(Invis.NONE)
    eventPlayer.setInvisibility(Invis.NONE)


rule "SYM invisibility ON 2":
    @Event eachPlayer
    @Hero symmetra
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition distance(eventPlayer.getPosition(), getClosestPlayer(eventPlayer, Team.ALL)) <= 2
    @Disabled

    ([player for player in getAllPlayers() if distance(player.getPosition(), eventPlayer.getPosition()) <= 2]).setInvisibility(Invis.ALL)


rule "SYM invisibility OFF 2":
    @Event eachPlayer
    @Hero symmetra
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition distance(eventPlayer.getPosition(), getClosestPlayer(eventPlayer, Team.ALL)) > 2
    @Disabled

    ([player for player in getAllPlayers() if distance(player.getPosition(), eventPlayer.getPosition()) > 2]).setInvisibility(Invis.NONE)


rule "SYM decidingOnAColor PHASE":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symPhase == "decidingOnAColor"

    symColorDeciding = random.choice([1, 2, 3, 4, 5, 6, 7, 8].exclude(symColorDeciding))
    wait(0.192, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


def symTheColorIsSelectedTrigger():
    @Name "SYM theColorIsSelected TRIGGER"

    symPlayersInTheSelectedColor = []
    symPhase = "decidingOnAColor"
    wait(3)
    symColorDeciding = 0
    symPhase = "theColorIsSelected"


rule "SYM theColorIsSelected PHASE":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symPhase == "theColorIsSelected"
    #@Condition symColorSelected == 0

    #symColorSelected = random.choice([3, 7])
    symColorSelected = random.randint(1, 8)
    wait(0.032)
    symPlayersInTheSelectedColor = []
    if symColorSelected == 1:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 1 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS BLUE", HudPosition.TOP, 3, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 2:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 2 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS GREEN", HudPosition.TOP, 3, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 3:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 3 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS ORANGE", HudPosition.TOP, 3, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 4:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 4 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS PURPLE", HudPosition.TOP, 3, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 5:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 5 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS RED", HudPosition.TOP, 3, Color.RED, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 6:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 6 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS TURQUOISE", HudPosition.TOP, 3, Color.TURQUOISE, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 7:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 7 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS WHITE", HudPosition.TOP, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    elif symColorSelected == 8:
        hudHeader([player for player in getAllPlayers() if symColorSelected == 8 and (symPhase == "theColorIsSelected" or symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor")], "THE COLOR IS YELLOW", HudPosition.TOP, 3, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
        symSelectedColorHud = getLastCreatedText()
    symPhase = "theColorIsSelectedEnd"
    #smallMessage(getAllPlayers(), "end of theColorIsSelected")


rule "SYM someoneReachedTheSelectedColor TRIGGER":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symPhase == "theColorIsSelectedEnd"
    #@Condition len(symPlayersInTheSelectedColor) >= 1
    @Condition any([player.symIn for player in playersStartOfTheRound]) == true

    symPhase = "someoneReachedTheSelectedColor"


rule "SYM someoneReachedTheSelectedColor PHASE":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symPhase == "someoneReachedTheSelectedColor"

    chaseAtRate(symTimeToReachTheColor, 0, 1, ChaseRateReeval.NONE)
    if symColorSelected == 1:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 2:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 3:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 4:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 5:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.RED, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 6:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.TURQUOISE, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 7:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()
    elif symColorSelected == 8:
        hudSubtext(getAllPlayers(), "Time to reach the color: {0}".format(symTimeToReachTheColor), HudPosition.TOP, 4, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
        symTimeToReachTheColorHud = getLastCreatedText()


rule "SYM innerRoundTimerIsOver TRIGGER":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symTimeToReachTheColor == 0
    @Condition symPhase == "someoneReachedTheSelectedColor"

    symPhase = "innerTimeRoundIsOver"


rule "SYM innerRoundTimerIsOver PHASE":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symPhase == "innerTimeRoundIsOver"

    stopChasingVariable(symTimeToReachTheColor)
    destroyHudText(symSelectedColorHud)
    #smallMessage(getAllPlayers(), "destroyed symSelectedColorHud")
    destroyHudText(symTimeToReachTheColorHud)
    symInnerRound++
    getAllPlayers().teleport(vect(0, 0, 0))
    symPhase = "decidingOnAColor"
    symColorSelected = 0
    symTimeToReachTheColor = 3 if symInnerRound == 1 else 2 if symInnerRound == 2 else 1
    symScoring()
    symTheColorIsSelectedTrigger()


def symScoring():
    @Name "SYM scoring"

    #symVictims = [player for player in playersStartOfTheRound if player.isAlive()].exclude(symPlayersInTheSelectedColor)
    symVictims = getLivingPlayers(Team.ALL).exclude(symPlayersInTheSelectedColor)
    symVictims.forceButtonPress(Button.ABILITY_2)
    wait(0.032)
    if len(symVictims) > 0:
        kill(symVictims, symPlayersInTheSelectedColor[0])
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, symPlayersInTheSelectedColor[0], 1)
        playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, symPlayersInTheSelectedColor[0], 100)
        symPlayersInTheSelectedColor[0].addToScore(len(symVictims))
        smallMessage(symPlayersInTheSelectedColor[0], "+{0} with {1} {2}".format("{0} {1}".format(len(symVictims), "points" if len(symVictims) > 1 else "point"), heroIcon(Hero.SYMMETRA), Hero.SYMMETRA))
        hudText(getAllPlayers(), heroIcon(Hero.SYMMETRA), symPlayersInTheSelectedColor[0], "+{1}".format(null, "{0} {1}".format(len(symVictims), "points" if len(symVictims) > 1 else "point")), HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
        pointfeedHud.append(getLastCreatedText())
        pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
        pointfeedHudId -= 0.01


rule "SYM in":
    @Event eachPlayer
    @Hero symmetra
    @Condition distance(eventPlayer.getPosition(), symColorsPositions[symColorSelected]) <= 5
    @Condition distance(eventPlayer.getPosition(), vect(0, 0, 0)) > 5
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition eventPlayer in playersStartOfTheRound == true
    @Condition eventPlayer.symIn == false
    @Condition symTimeToReachTheColor > 0
    @Condition (symPhase == "theColorIsSelectedEnd" or symPhase == "someoneReachedTheSelectedColor") == true

    eventPlayer.teleport(symColorsPositions[symColorSelected])
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    if symColorSelected == 1:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.BLUE, eventPlayer, 100)
    elif symColorSelected == 2:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.GREEN, eventPlayer, 100)
    elif symColorSelected == 3:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.ORANGE, eventPlayer, 100)
    elif symColorSelected == 4:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.PURPLE, eventPlayer, 100)
    elif symColorSelected == 5:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.RED, eventPlayer, 100)
    elif symColorSelected == 6:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.TURQUOISE, eventPlayer, 100)
    elif symColorSelected == 7:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    elif symColorSelected == 8:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.YELLOW, eventPlayer, 100)
    eventPlayer.symIn = true
    symPlayersInTheSelectedColor.append(eventPlayer)
    if len(symPlayersInTheSelectedColor) == 1:
        eventPlayer.symOrdinalString = "st {0}".format(abilityIconString(Hero.BRIGITTE, Button.ULTIMATE))
    elif len(symPlayersInTheSelectedColor) == 2:
        eventPlayer.symOrdinalString = "nd"
    elif len(symPlayersInTheSelectedColor) == 3:
        eventPlayer.symOrdinalString = "rd"
    else:
        eventPlayer.symOrdinalString = "th"
    eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
    eventPlayer.disallowButton(Button.INTERACT)
    wait(0.466)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.032)
    eventPlayer.disallowButton(Button.ABILITY_2)


rule "SYM out":
    @Event eachPlayer
    @Condition distance(eventPlayer.getPosition(), symColorsPositions[symColorSelected]) > 5
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition roundTimer <= 58
    #@Condition eventPlayer.symIn == true

    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.allowButton(Button.INTERACT)
    eventPlayer.allowButton(Button.ABILITY_2)
    eventPlayer.symIn = false
    wait(0.064)
    if ruleCondition:
        loop()


rule "SYM position corrector":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.SYMMETRA
    @Condition symPhase == "decidingOnAColor"
    @Condition distance(eventPlayer, vect(0, 0, 0)) > 1

    eventPlayer.teleport(vect(0, 0, 0))
    wait(0.032)
    if ruleCondition:
        loop()


rule "SYM player debug":
    @Event eachPlayer
    @Disabled

    hudHeader(getAllPlayers(), "{0}: {1}".format(eventPlayer, eventPlayer.symIn), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #Left HUD showing which position you finish the run to the color + brig flag icon if you finished 1st
    hudHeader(eventPlayer, "{0}{1}".format(symPlayersInTheSelectedColor.index(eventPlayer) + 1, eventPlayer.symOrdinalString), HudPosition.LEFT, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "SYM global debug":
    @Disabled

    hudHeader(getAllPlayers(), "Phase: {0}".format(symPhase), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), "Color Selected: {0}, {1}".format(["NULL", "BLUE", "GREEN", "ORANGE", "PURPLE", "RED", "TURQUOISE", "WHITE", "YELLOW"][symColorSelected], symColorSelected), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), "innerTime: {0}".format(symTimeToReachTheColor), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), "innerRound: {0}".format(symInnerRound), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "SYM phase corrector":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.SYMMETRA
    @Condition symPhase != null

    symPhase = null


rule "SYM end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.SYMMETRA
    @Condition heroOfLastRound == Hero.SYMMETRA

    wait()
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.enablePlayerCollision()
    eventPlayer.allowButton(Button.INTERACT)
    eventPlayer.allowButton(Button.ABILITY_2)
    getAllPlayers().setInvisibility(Invis.NONE)
    destroyInWorldText(eventPlayer.symFirstPlayerInColorText)
    destroyHudText(eventPlayer.symOrdinalPosHud)


rule "SYM end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.SYMMETRA
    @Condition heroOfLastRound == Hero.SYMMETRA

    destroyHudText(symSelectedColorHud)
    destroyHudText(symTimeToReachTheColorHud)
    wait()
    for destructorIt in range(len(symColoredSpheresEffectsAndText)):
        destroyEffect(symColoredSpheresEffectsAndText[destructorIt])
        destroyInWorldText(symColoredSpheresEffectsAndText[destructorIt])
        destroyHudText(symColoredSpheresEffectsAndText[destructorIt])
    symColoredSpheresEffectsAndText = []
    symPlayersInTheSelectedColor = []
    symVictims = []
    symColorsPositions = []
    symPhase = null
    symInnerRound = 0
    symColorDeciding = 0
    symColorSelected = 0
    symTimeToReachTheColor = 5
    stopChasingVariable(symTimeToReachTheColor)


rule "TRACER create crown":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.TRACER

    crownPos = vect(0, 1.5, 0)
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.ORANGE, crownPos, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    crownEffect = getLastCreatedEntity()
    hudHeader(tracerQueen, "QUEEN", HudPosition.LEFT, 2, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    tracerQueenHud = getLastCreatedText()
    createIcon(getAllPlayers(), crownPos, Icon.ARROW_DOWN, IconReeval.VISIBILITY_AND_POSITION, Color.ORANGE)
    tracerQueenPositionIcon = getLastCreatedEntity()


rule "TRACER stun & steal":
    @Event playerDealtDamage
    @Hero tracer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.TRACER

    if tracerQueen == attacker:
        victim.setStatusEffect(eventPlayer, Status.STUNNED, 1)
    if tracerQueen == victim:
        victim.setStatusEffect(eventPlayer, Status.STUNNED, 0.75)
        playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, Color.ORANGE, eventPlayer, 50)
        tracerQueen = attacker
        crownPos = attacker


rule "TRACER init queen":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.TRACER

    eventPlayer.queenPointsHud = null
    eventPlayer.queenPoints = 0
    wait(0.256)
    if eventPlayer.queenPointsHud == null:
        hudSubtext(getAllPlayers(), "{0}: {1}/10 {2}".format(eventPlayer, eventPlayer.queenPoints, "queen" if eventPlayer == tracerQueen else ""), HudPosition.LEFT, (eventPlayer.queenPoints + 10) * -1, Color.ORANGE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING)
        eventPlayer.queenPointsHud = getLastCreatedText()
    eventPlayer.setGravity(100)


rule "TRACER first queen":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition distance(eventPlayer, crownEffect.getPosition()) <= 1.5
    @Condition heroOfTheRound == Hero.TRACER
    @Condition tracerQueen == null
    @Condition roundTimer <= 58.5

    wait(0.064, Wait.ABORT_WHEN_FALSE)
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.ORANGE, eventPlayer, 50)
    tracerQueen = eventPlayer
    crownPos = eventPlayer


rule "TRACER is queen = points, gravity":
    @Event eachPlayer
    @Hero tracer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.TRACER
    @Condition tracerQueen == eventPlayer

    eventPlayer.setGravity(500)
    wait(1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.queenPoints++
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.ORANGE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.ORANGE, eventPlayer, 50)
    if ruleCondition:
        loop()


rule "TRACER is not queen = points, gravity":
    @Event eachPlayer
    @Hero tracer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.TRACER
    @Condition tracerQueen != eventPlayer

    eventPlayer.setGravity(100)


rule "TRACER queen winner":
    @Event eachPlayer
    @Hero tracer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.TRACER
    @Condition tracerQueen == eventPlayer
    @Condition eventPlayer.queenPoints >= 10

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    eventPlayer.addToScore(len(playersStartOfTheRound) - 1)
    smallMessage(eventPlayer, "+{0} with {1} {2}".format("{0} {1}".format(len(playersStartOfTheRound) - 1, "points" if len(playersStartOfTheRound) - 1 > 1 else "point"), heroIcon(eventPlayer.getHero()), eventPlayer.getHero()))
    hudText(getAllPlayers(), heroIcon(eventPlayer.getHero()), eventPlayer, "+{1}".format(null, "{0} {1}".format(len(playersStartOfTheRound) - 1, "points" if len(playersStartOfTheRound) - 1 > 1 else "point")), HudPosition.RIGHT, -1 + pointfeedHudId, Color.ORANGE, Color.WHITE, Color.ORANGE, HudReeval.VISIBILITY)
    pointfeedHud.append(getLastCreatedText())
    pointfeedHudTimes[len(pointfeedHud) - 1] = 3.744
    pointfeedHudId -= 0.01
    roundTimer = 0.032


rule "TRACER dead queen":
    @Event playerDied
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.TRACER
    @Condition tracerQueen == eventPlayer

    tracerQueen = null
    crownPos = vect(0, 1.5, 0)


rule "TRACER leaver queen":
    @Event playerLeft
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound == Hero.TRACER
    @Condition tracerQueen == eventPlayer

    tracerQueen = null
    crownPos = vect(0, 1.5, 0)


rule "TRACER destroy crown":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.TRACER

    destroyEffect(crownEffect[0])
    tracerQueen = null


rule "TRACER secondary buttons":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.TRACER
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true

    eventPlayer.forceButtonPress(Button.MELEE)


rule "TRACER end of the round {EACH PLAYER}":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.TRACER
    @Condition heroOfLastRound == Hero.TRACER

    eventPlayer.queenPoints = 0
    eventPlayer.setGravity(100)
    wait(0.256)
    destroyHudText(eventPlayer.queenPointsHud)


rule "TRACER end of the round {GLOBAL}":
    @Condition isGameInProgress() == true
    @Condition heroOfTheRound != Hero.TRACER
    @Condition heroOfLastRound == Hero.TRACER

    tracerQueen = null
    wait(0.256)
    destroyIcon(tracerQueenPositionIcon)
    destroyHudText(tracerQueenHud)


rule "WINSTON rage":
    @Event eachPlayer
    @Hero winston
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.WINSTON
    @Condition eventPlayer.isUsingUltimate() == false

    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait()
    if ruleCondition:
        loop()


rule "WINSTON jump cooldown":
    @Event eachPlayer
    @Hero winston
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.WINSTON
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.032)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 12)


rule "ZEN mega-kick":
    @Event playerDealtDamage
    @Hero zenyatta
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ZENYATTA

    victim.applyImpulse(eventPlayer.getFacingDirection() + vect(0, 0.1, 0), 75, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)


rule "ZEN secondary buttons":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition heroOfTheRound == Hero.ZENYATTA
    @Condition (eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) == true

    eventPlayer.forceButtonPress(Button.MELEE)


rule "----- THIRD CAMERA PERSON ----- Made by Mitsiee. More at https://workshop.codes/third-person":
    @Delimiter



rule "Enable/disable third camera person":
    @Event eachPlayer
    @Condition eventPlayer.isCommunicating(Comms.FALL_BACK) == true

    if eventPlayer.isOnThirdCamera == false:
        eventPlayer.isOnThirdCamera = true
        smallMessage(eventPlayer, "----- THIRD CAMERA PERSON ----- Made by Mitsiee. More at https://workshop.codes/third-person")
    else:
        eventPlayer.isOnThirdCamera = false
        eventPlayer.stopCamera()


rule "Initialise":
    @Event eachPlayer
    @Condition eventPlayer.isOnThirdCamera == true

    eventPlayer.thirdCameraDirection = 1
    eventPlayer.thirdCameraZoom = -2.5


rule "Set Third Person":
    @Event eachPlayer
    @Condition eventPlayer.isAlive() == true
    @Condition ((eventPlayer.getHero() == Hero.WIDOWMAKER or eventPlayer.getHero() == Hero.ASHE or eventPlayer.getHero() == Hero.ANA) and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) != true
    @Condition eventPlayer.isOnThirdCamera == true

    eventPlayer.startCamera(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + worldVector(vect(eventPlayer.thirdCameraDirection * (min(eventPlayer.thirdCameraZoom / 2.5, -0.75)), 0, 0), eventPlayer, Transform.ROTATION) + eventPlayer.getFacingDirection() * eventPlayer.thirdCameraZoom, getAllPlayers(), eventPlayer, false).getHitPosition(), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 200, getAllPlayers(), eventPlayer, false).getHitPosition(), 60)


rule "Unset Third Person for specific conditions":
    @Event eachPlayer
    @Condition ((eventPlayer.getHero() == Hero.WIDOWMAKER or eventPlayer.getHero() == Hero.ASHE or eventPlayer.getHero() == Hero.ANA) and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) == true
    @Condition eventPlayer.isOnThirdCamera == true

    eventPlayer.stopCamera()


rule "Pressing Interact":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.isOnThirdCamera == true

    if eventPlayer.thirdCameraDirection == -1:
        eventPlayer.thirdCameraDirection = 1
    else:
        eventPlayer.thirdCameraDirection = -1


rule "----- TEST -----":
    @Delimiter



rule "Lobby with Dummies (TEST)":
    #@Condition isInSetup() == true
    #@Condition "Jokaes" == "{0}".format(hostPlayer) == true
    @Condition len(getAllPlayers()) < 2

    createDummy(Hero.ASHE, Team.ALL, -1, vect(0, 0, 0))
    if len(getAllPlayers()) < 2:
        loop()
    #if len(getAllPlayers()) < 3:
    #        loop()
    #if len(getAllPlayers()) < 5:
    #        loop()
    #if len(getAllPlayers()) < 6:
    #        loop()
    #if len(getAllPlayers()) < 12:
    #        loop()


rule "Dummys Summon (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isCommunicating(Comms.HELLO) == true
    @Condition "Jokaes" == "{0}".format(hostPlayer) == true
    @Disabled

    createDummy(Hero.ASHE, Team.ALL, -1, eventPlayer.getPosition())


rule "Dummy Aim Bot (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    #@Condition "Jokaes" == "{0}".format(hostPlayer) == true

    eventPlayer.startFacing(directionTowards(eventPlayer, sorted([player for player in getAllPlayers() if player.isAlive()], lambda i: distance(eventPlayer, i))[1]), 10000)
    eventPlayer.startForcingButton(Button.ABILITY_2)
    eventPlayer.startForcingButton(Button.ABILITY_1)
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startForcingButton(Button.INTERACT)
    wait(random.uniform(0.3, 1))
    eventPlayer.stopForcingButton(Button.INTERACT)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    eventPlayer.stopForcingButton(Button.ABILITY_1)
    eventPlayer.stopForcingButton(Button.ABILITY_2)
    if ruleCondition:
        loop()


rule "Dummy Ult (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getUltCharge() == 100
    #@Condition "Jokaes" == "{0}".format(hostPlayer) == true

    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "Dummy Meele loop (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    #@Condition "Jokaes" == "{0}".format(hostPlayer) == true

    eventPlayer.startFacing(directionTowards(eventPlayer, getClosestPlayer(eventPlayer, getOppositeTeam(eventPlayer.getTeam()))), 10000)
    eventPlayer.forceButtonPress(Button.MELEE)
    wait(random.uniform(0.25, 0.35))
    if ruleCondition:
        loop()


rule "Dummy Moving (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    #@Condition "Jokaes" == "{0}".format(hostPlayer) == true

    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, sorted([player for player in getAllPlayers() if player.isAlive()], lambda i: distance(eventPlayer, i))[1]), 1, Relativity.TO_WORLD)


rule "Skip round (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Condition "Jokaes" == "{0}".format(hostPlayer) == true
    @Condition "Jokaes" == "{0}".format(eventPlayer) == true
    @Disabled

    roundTimer = 1


rule "Force dummy to be hero of the round (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getHero() == Hero.ASHE
    #@Condition "Jokaes" == "{0}".format(hostPlayer) == true

    eventPlayer.startForcingHero(heroOfTheRound)


rule "Destroy the dummies (TEST)":
    @Event eachPlayer
    @Condition "Jokaes" == "{0}".format(hostPlayer) == true
    @Condition "Jokaes" == "{0}".format(eventPlayer) == true
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Disabled

    destroyAllDummies()


rule "Ray Cast Detector (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Disabled

    hudHeader(getAllPlayers(), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 200, null, getAllPlayers(), false).getHitPosition(), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY)
    createEffect(eventPlayer, Effect.ORB, Color.YELLOW, raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 200, null, getAllPlayers(), false).getHitPosition(), 1, EffectReeval.NONE)
    createBeam(getAllPlayers(), Beam.GOOD, eventPlayer.getEyePosition(), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 200, getAllPlayers(), getAllPlayers(), false).getHitPosition(), Color.RED, EffectReeval.NONE)


rule "Destroy all the HUD (TEST)":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Disabled

    destroyAllHudTexts()
    eventPlayer.disableGamemodeHud()
    eventPlayer.disableHeroHud()


rule "Debug HUDs (TEST)":
    @Event eachPlayer
    @Condition "Jokaes" == "{0}".format(hostPlayer) == true
    @Disabled

    hudHeader(eventPlayer, "{0} m/s".format(eventPlayer.getHorizontalSpeed()), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudHeader(eventPlayer, "{0}".format(eventPlayer.getPosition()), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudHeader(eventPlayer, "{0}".format(eventPlayer.getPosition().y), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudHeader(eventPlayer, "{0}".format(distance(eventPlayer, vect(0, 10, 0))), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudHeader(eventPlayer, "{0}".format(len(pointfeedHud)), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudHeader(eventPlayer, "{0}".format(len(pointfeedHudTimes)), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #hudHeader(eventPlayer, "{0}".format(eventPlayer.getThrottle()), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "Created by Jokaes#2263":
    @Delimiter



rule "Code: W468T":
    @Delimiter
