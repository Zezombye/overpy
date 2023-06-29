settings {
    "main": {
        "description": "Humans vs bots, in elimination. By Zezombye",
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [],
            "scoreToWin": 20
        },
        "skirmish": {
            "enabledMaps": [
                "blizzWorldWinter"
            ]
        },
        "general": {
            "healthPackRespawnTime%": 500,
            "roleLimit": "off",
            "spawnHealthPacks": "enabled"
        }
    },
    "heroes": {
        "team1": {
            "general": {
                "abilityCooldown%": 35,
                "healingReceived%": 100,
                "health%": 200
            }
        }
    }
}

globalvar gameStatus
globalvar enabledHeroes
globalvar nbRoundsWon

subroutine displayCredits

#!define GAME_NOT_STARTED 0
#!define GAME_IN_SETUP 1
#!define GAME_STARTED 2

#!define TEAM_HUMANS 1
#!define TEAM_BOTS 2

#!define IN_SPAWN_ROOM_POS vect(-100, 1, 91)
#!define OUT_SPAWN_ROOM_POS vect(-78.7, 2, 89.813)

#!obfuscate

def displayCredits():
    hudSubtext(getAllPlayers(), "By Zezombye", HudPosition.LEFT, 0, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(getAllPlayers() if gameStatus == GAME_NOT_STARTED else null, "Waiting for host to start", HudPosition.TOP, 5, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

rule "init":
    disableGamemodeCompletion()
    enabledHeroes = getAllHeroes()
    displayCredits()

rule "no dying before game start":
    @Event playerDied
    @Condition gameStatus == GAME_NOT_STARTED
    wait(0.5)
    eventPlayer.respawn()

rule "icons on bots":
    @Event eachPlayer
    @Team TEAM_BOTS
    createIcon(getAllPlayers() if eventPlayer.isAlive() and gameStatus == GAME_STARTED else null, eventPlayer, Icon.SKULL, IconReeval.VISIBILITY_AND_POSITION, Color.RED, true)

rule "game not started":
    @Condition gameStatus == GAME_NOT_STARTED
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    gameStatus = GAME_IN_SETUP

rule "preparation":
    @Condition gameStatus == GAME_IN_SETUP
    destroyAllHudTexts()
    getPlayers(Team.TEAM_HUMANS).teleport(IN_SPAWN_ROOM_POS)
    getAllPlayers().respawn()
    getAllPlayers().setAllowedHeroes(enabledHeroes)
    displayCredits()
    hudHeader(getAllPlayers(), "Select your heroes", HudPosition.TOP, 5, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    setMatchTime(20)
    wait(20)
    gameStatus = GAME_STARTED

rule "no exit spawn":
    @Event eachPlayer
    @Condition gameStatus == GAME_IN_SETUP
    @Condition not eventPlayer.isInSpawnRoom()
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    if (eventPlayer.getTeam() == Team.TEAM_HUMANS):
        eventPlayer.teleport(IN_SPAWN_ROOM_POS)
    else:
        eventPlayer.respawn()

rule "game started":
    @Condition gameStatus == GAME_STARTED
    destroyAllHudTexts()
    setMatchTime(60*30)
    bigMessage(getAllPlayers(), "Destroy the {} army".format(getPlayers(Team.TEAM_BOTS)[0].getCurrentHero()))
    displayCredits()
    getAllPlayers().setUltCharge(0)
    getAllPlayers().forceButtonPress(Button.INTERACT)

rule "player joins while game in progress":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned()
    if gameStatus == GAME_STARTED:
        wait(1)
        eventPlayer.teleport(vect(0,-1000,0))
        bigMessage(eventPlayer, "You will respawn next round")


rule "no hiding in spawn":
    @Event eachPlayer
    @Team TEAM_HUMANS
    @Condition gameStatus == GAME_STARTED
    do:
        if eventPlayer.isInSpawnRoom():
            eventPlayer.setHealingReceived(0)
            eventPlayer.teleport(OUT_SPAWN_ROOM_POS)
        wait()
    while RULE_CONDITION

rule "player is not in spawn room":
    @Event eachPlayer
    @Condition gameStatus == GAME_STARTED
    @Condition not eventPlayer.isInSpawnRoom()
    wait(1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.setHealingReceived(100)

rule "no respawns":
    @Event eachPlayer
    eventPlayer.disableRespawn()

rule "bots win":
    @Condition gameStatus == GAME_STARTED
    @Condition getNumberOfLivingPlayers(Team.TEAM_HUMANS) == 0
    bigMessage(getAllPlayers(), "The {} army has won!".format(getPlayers(Team.TEAM_BOTS)[0].getCurrentHero()))
    wait(5)
    gameStatus = GAME_IN_SETUP


rule "players win":
    @Condition gameStatus == GAME_STARTED
    @Condition getNumberOfLivingPlayers(Team.TEAM_BOTS) == 0
    for I in range(len(getPlayers(Team.TEAM_HUMANS))):
        enabledHeroes.remove(getPlayers(Team.TEAM_HUMANS)[I].getCurrentHero())
        wait()

    if len(enabledHeroes) >= 6:
        bigMessage(getAllPlayers(), "A new wave of {} is approaching...".format(getPlayers(Team.TEAM_BOTS)[0].getCurrentHero()))
        wait(5)
        gameStatus = GAME_IN_SETUP
    
    else:
        bigMessage(getAllPlayers(), "The {} army is finally defeated! Good job!".format(getPlayers(Team.TEAM_BOTS)[0].getCurrentHero()))
        wait(5)
        declareTeamVictory(Team.TEAM_HUMANS)
