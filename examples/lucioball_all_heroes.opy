/*
A small lucioball all heroes code I did.
code: 1HT6Y
*/

settings {
    "main": {
        "description": "Lucioball All Heroes by Zezombye - Sydney arena does not work! Code: 1HT6Y"
    },
    "lobby": {
        "team1Slots": 6,
        "team2Slots": 6
    },
    "gamemodes": {
        "lucioball": {
            "enabledMaps": [
                "busanStadiumClassic",
                "estadioDasRas",
            ],
            "gameLengthInSec": 360,
            "scoreToWin": 9,
            "resetPlayersAfterGoalScored": true,
            "scoreLeadToWin": 5
        },
        "general": {
            "heroLimit": "off",
            "respawnTime%": 30,
            "gamemodeStartTrigger": "immediately",
        }
    },
    "heroes": {
        "allTeams": {
            "reinhardt": {
                "primaryFireKb%": 0
            },
            "general": {
                "abilityCooldown%": 35,
                "enableSpawningWithUlt": true,
                "combatUltGen%": 500
            }
        }
    }
}

globalvar availableHeroes
globalvar gameStatus
globalvar countdown
globalvar countdownDigits
globalvar roundHeroes
globalvar team1score
globalvar team2score
globalvar hasBallMoved

#!define GAME_NOT_STARTED 0
#!define GAME_IN_SETUP 1
#!define GAME_STARTED 2

rule "heroes":
    availableHeroes = getAllHeroes().exclude([Hero.PHARAH, Hero.WINSTON, Hero.JUNKRAT, Hero.SIGMA, Hero.BRIGITTE])
    roundHeroes = []
    
    hudSubtext(getAllPlayers(), "By Zezombye#9938 (discord) | Code: 1HT6Y", HudPosition.LEFT, 0, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    countdownDigits = [
        null,
#1
"　　▒
　▒▒
　　▒
　　▒
　▒▒▒　",
#2
"　▒▒▒　
　　　▒
　▒▒▒
　▒
　▒▒▒",
#3
"　▒▒▒　
　　　▒
　　▒▒
　　　▒
　▒▒▒",
    ]
    hudSubtext(getAllPlayers(), " 








", HudPosition.TOP, 1, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(getAllPlayers() if gameStatus == GAME_IN_SETUP else null, countdownDigits[ceil(countdown)], HudPosition.TOP, 10, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    chase(countdown, 0, rate=1, ChaseReeval.NONE)
    #createDummy(Hero.ANA, Team.2, -1, null, null)
    #createDummy(Hero.ANA, Team.2, -1, null, null)
    #createDummy(Hero.ANA, Team.2, -1, null, null)
    #createDummy(Hero.ANA, Team.2, -1, null, null)

rule "game started":
    @Event global
    @Condition isGameInProgress()
    gameStatus = GAME_IN_SETUP

rule "round in setup - fill round heroes":
    @Event global
    @Condition gameStatus == GAME_IN_SETUP
    roundHeroes = [
        random.choice(availableHeroes),
        random.choice(availableHeroes),
        random.choice(availableHeroes),
        random.choice(availableHeroes),
        random.choice(availableHeroes),
        random.choice(availableHeroes),
    ]

rule "round in setup":
    @Event eachPlayer
    @Condition gameStatus == GAME_IN_SETUP
    pauseMatchTime()
    eventPlayer.startForcingHero(random.choice(availableHeroes))
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setUltEnabled(false)
    eventPlayer.setMeleeEnabled(false)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    wait()
    eventPlayer.respawn()
    countdown = 3
    wait(3)
    gameStatus = GAME_STARTED

rule "round start":
    @Condition gameStatus == GAME_STARTED
    hasBallMoved = false


/*rule "no joining during round":
    @Event eachPlayer
    @Condition gameStatus == GAME_STARTED and eventPlayer.hasSpawned()
    wait(0.25)
    kill(eventPlayer, null)
    bigMessage(eventPlayer, "You will respawn next round")*/


rule "round start":
    @Event eachPlayer
    @Condition gameStatus == GAME_STARTED
    unpauseMatchTime()
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.setPrimaryFireEnabled(not eventPlayer.getCurrentHero() in [Hero.REINHARDT, Hero.BRIGITTE])
    eventPlayer.setSecondaryFireEnabled(not eventPlayer.getCurrentHero() in [Hero.ZARYA, Hero.HAMMOND])
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(not eventPlayer.getCurrentHero() in [Hero.ANA])
    eventPlayer.setUltEnabled(not eventPlayer.getCurrentHero() in [Hero.TORBJORN, Hero.BASTION])
    eventPlayer.setMeleeEnabled(not eventPlayer.getCurrentHero() in [Hero.REINHARDT, Hero.BRIGITTE])
    eventPlayer.setRespawnTime(9999)
    eventPlayer.setMaxHealth(200)

rule "goal scored":
    @Event global
    @Condition gameStatus == GAME_STARTED and hasBallMoved
    @Condition (
        abs(raycast(vect(0, 1, 23), vect(0, 1, -23), null, null, false).getHitPosition().z - -17.01) < 0.02
        or abs(raycast(vect(0, 1, 23), vect(0, 1, -23), null, null, false).getHitPosition().z - 18.99) < 0.02
        or abs(raycast(vect(0, 1, 23), vect(0, 1, -23), null, null, false).getHitPosition().z - 0.99) < 0.02
    )
    gameStatus = GAME_IN_SETUP

rule "ball moved":
    @Condition gameStatus == GAME_STARTED
    @Condition not (
        abs(raycast(vect(0, 1, 23), vect(0, 1, -23), null, null, false).getHitPosition().z - -17.01) < 0.02
        or abs(raycast(vect(0, 1, 23), vect(0, 1, -23), null, null, false).getHitPosition().z - 18.99) < 0.02
        or abs(raycast(vect(0, 1, 23), vect(0, 1, -23), null, null, false).getHitPosition().z - 0.99) < 0.02
    )
    hasBallMoved = true

rule "no melee":
    @Event eachPlayer
    @Condition eventPlayer.getCurrentHero() != Hero.REINHARDT
    @Condition eventPlayer.getCurrentHero() != Hero.BRIGITTE
    @Condition eventPlayer.isMeleeing()
    wait(0.016)
    eventPlayer.cancelPrimaryAction()

/*
Reaper - good
Tracer - good
Mercy good
Hanzo
Torbjorn no ult
Reinhardt no melee/primary
Pharah no
Winston no
Widowmaker
Bastion no ult, less hp
Symmetra
Zenyatta
Genji
Roadhog
McCree
Junkrat no
Zarya no secondary
Soldier
Lucio
Dva
Mei
Sombra
Doomfist
Ana no nade
Orisa
Brigitte no melee/primary
Moira
Hammond no rclick
Ashe
Echo
Baptiste
Sigma no
*/
