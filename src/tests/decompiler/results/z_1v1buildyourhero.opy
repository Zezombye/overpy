settings {
    "main": {
        "description": "1v1 Build your hero v2.0 by Seita --- Code: METDP --- Full description: workshop.codes/1v1meta",
        "modeName": "1v1 Build your hero"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "mapRotation": "afterGame",
        "spectatorSlots": 12,
        "team1Slots": 1,
        "team2Slots": 1,
        "returnToLobby": "never"
    },
    "gamemodes": {
        "control": {
            "disabledMaps": [
                "antarcticPeninsula",
                "samoa"
            ]
        },
        "general": {
            "captureSpeed%": 80,
            "enableCompetitiveRules": true,
            "gamemodeStartTrigger": "immediately",
            "healthPackRespawnTime%": 250,
            "roleLimit": "2OfEachRolePerTeam",
            "respawnTime%": 30
        }
    },
    "heroes": {
        "allTeams": {
            "ana": {
                "ability2Cooldown%": 0,
                "ability1Cooldown%": 0
            },
            "baptiste": {
                "healingDealt%": 10,
                "health%": 200,
                "ultGen%": 125
            },
            "cassidy": {
                "health%": 200
            },
            "dva": {
                "ability1Cooldown%": 25,
                "secondaryFireMaximumTime%": 500,
                "secondaryFireRechargeRate%": 500
            },
            "echo": {
                "health%": 200,
                "secondaryFireCooldown%": 0,
                "ultGen%": 91
            },
            "genji": {
                "ability1Cooldown%": 0
            },
            "hanzo": {
                "health%": 200,
                "ability1Cooldown%": 0,
                "ultGen%": 91
            },
            "junkerQueen": {
                "ability1Cooldown%": 0,
                "secondaryFireCooldown%": 62
            },
            "junkrat": {
                "health%": 200,
                "ultGen%": 104
            },
            "lifeweaver": {
                "secondaryFireCooldown%": 0
            },
            "lucio": {
                "ability2Cooldown%": 83,
                "healingDealt%": 10
            },
            "orisa": {
                "secondaryFireCooldown%": 80,
                "health%": 33
            },
            "pharah": {
                "ability2Cooldown%": 0,
                "ability2Kb%": 125,
                "health%": 200,
                "passiveRechargeRate%": 50,
                "ability1Acceleration%": 120,
                "ability1Cooldown%": 0,
                "ultGen%": 108
            },
            "ramattra": {
                "secondaryFireCooldown%": 0
            },
            "reaper": {
                "healingDealt%": 20,
                "health%": 160,
                "movementSpeed%": 110,
                "ultGen%": 104
            },
            "reinhardt": {
                "damageDealt%": 115,
                "ability2Cooldown%": 0,
                "movementSpeed%": 125
            },
            "roadhog": {
                "ability1Cooldown%": 0,
                "enableInfiniteAmmo": true,
                "projectileSpeed%": 120
            },
            "sigma": {
                "ability2Cooldown%": 0,
                "damageDealt%": 125,
                "secondaryFireCooldown%": 500,
                "secondaryFireRechargeRate%": 500,
                "ultGen%": 114
            },
            "sojourn": {
                "ability2Cooldown%": 0
            },
            "soldier": {
                "ability2Cooldown%": 0,
                "health%": 200,
                "secondaryFireCooldown%": 0,
                "ultGen%": 125
            },
            "sombra": {
                "health%": 200,
                "ultGen%": 80
            },
            "symmetra": {
                "health%": 200,
                "ability2Cooldown%": 0
            },
            "torbjorn": {
                "enableInfiniteAmmo": true
            },
            "tracer": {
                "projectileGravity%": 0,
                "projectileSpeed%": 500
            },
            "wreckingBall": {
                "enableInfiniteUlt": true
            },
            "zarya": {
                "damageDealt%": 130,
                "ability1Cooldown%": 0,
                "ability2Cooldown%": 0
            },
            "zenyatta": {
                "healingDealt%": 10,
                "health%": 200,
                "ultGen%": 125
            },
            "enabledHeroes": [
                "baptiste",
                "cassidy",
                "echo",
                "hanzo",
                "junkrat",
                "pharah",
                "reaper",
                "reinhardt",
                "sigma",
                "soldier",
                "sombra",
                "zenyatta"
            ],
            "general": {
                "combatUltGen%": 200
            }
        }
    }
}

#Global variables

globalvar HudT1Visibility 0
globalvar HudT2Visibility 1
globalvar WaitTest 2
globalvar StartHud 3
globalvar StartHud2 4


#Player variables

playervar UsingAbi1 0
playervar Ability1 1
playervar Ability2 2
playervar Ultimate 3
playervar Secondary 4
playervar SpawnLocation 5
playervar SecoCD 6
playervar SecoHud 7
playervar MenuLoaded 8
playervar FirstHeroBuilt 9
playervar HeroSwapFix 10
playervar Abi1Scaling 11
playervar Abi2Scaling 12
playervar DoomUlt 14
playervar UltScaling 15
playervar SpeedDura 16
playervar UltKeep 17
playervar Abi1CD 18
playervar Abi1Hud 19
playervar Abi2CD 20
playervar Abi2Hud 21
playervar IsInMenuMode 111
playervar MenuVFX 112
playervar MenuZAxis 113
playervar MenuYAxis 114
playervar MenuXAxis 115
playervar CursorPos 116
playervar CurrActionID 117
playervar ButtonExitMenu 118
playervar ButtonProperties 119
playervar CursorX 120
playervar CursorY 121
playervar MenuEyePos 122
playervar MenuOriginalFacing 123
playervar ActionIDQueue 124
playervar CurrActionID_Secondary 125
playervar ActionIDQueue_Secondary 126
playervar __iter___ 127


#Subroutine names

subroutine Abi1Attach 0
subroutine Abi2Attach 1
subroutine UltAttach 2
subroutine SecoAttach 3
subroutine CreateMenuButtonsMore 7
subroutine CreateMenuFrame 125
subroutine CreateMenuButtons 126
subroutine CreateMenuCursor 127


#Only remove the following directive if the gamemode does not use type casting tricks such as A+0, A*0, A and true, etc which would otherwise be optimized out.
#!optimizeStrict


rule "1v1 Build your hero by Seita":
    StartHud = -1
    StartHud2 = -1
    hudSubtext(getAllPlayers(), " ", HudPosition.TOP, 21, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "While in setup":
    @Condition isInSetup() == true
    
    destroyAllDummies()
    getAllPlayers().FirstHeroBuilt = false
    setMatchTime(300)
    hudText(getAllPlayers(), "Press {0} to build your hero!".format(inputBindingString(Button.INTERACT)), "Round will start after both players have confirmed their first build.", "Press the -> Confirm <- button to confirm your build.", HudPosition.TOP, 20, Color.GREEN, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    StartHud = getLastCreatedText()
    hudText(getAllPlayers(), "Code: METDP", "twitter.com/Seita_ow", "Full details: workshop.codes/1v1meta", HudPosition.TOP, 22, Color.ORANGE, Color.BLUE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    StartHud2 = getLastCreatedText()
    getAllPlayers().setUltCharge(0)
    getAllPlayers().UltKeep = 0


rule "First Hero built":
    @Condition isInSetup() == true
    @Condition getPlayersInSlot(0, Team.1).FirstHeroBuilt == true
    @Condition getPlayersInSlot(0, Team.2).FirstHeroBuilt == true
    
    wait(1, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), "Both players finished their hero, starting the round")
    setMatchTime(6)
    destroyHudText(StartHud)
    destroyHudText(StartHud2)


rule "Remove Hud":
    @Condition isGameInProgress() == true
    @Condition isInSetup() == false
    
    destroyHudText(StartHud)
    destroyHudText(StartHud2)


rule "Remove assembling heroes for testing":
    @Condition isAssemblingHeroes() == true
    
    setMatchTime(1)


rule "Faster Point open":
    @Condition isGameInProgress() == true
    @Condition isMatchBetweenRounds() == false
    @Condition isInSetup() == false
    @Condition isAssemblingHeroes() == false
    
    setMatchTime(20)


rule "Bots: Phased out, Invisible, Movement collision, Facing":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getSlot() != 0
    @Condition eventPlayer.hasSpawned() == true
    
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.disablePlayerCollision()
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition(), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), 50000)


rule "Ability 1:":
    @Disabled
    @Delimiter
    


def Abi1Attach():
    @Name "SUB: Ability 1 Attach"
    
    eventPlayer.Abi1Scaling = 1
    if eventPlayer.getHero() == Hero.HANZO:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.ANA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
        eventPlayer.Abi1Scaling = 1.15
    if eventPlayer.getHero() == Hero.ROADHOG:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.JUNKER_QUEEN:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
        eventPlayer.stopFacing()
    if eventPlayer.getHero() == Hero.LIFEWEAVER:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.GENJI:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.PHARAH:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.DVA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    eventPlayer.startScalingSize(eventPlayer.Abi1Scaling)


rule "Ability 1 - Attach: Hero Swap":
    @Event eachPlayer
    @Slot 1
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getHero() != getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix
    
    wait(0.5)
    Abi1Attach()
    getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix = getPlayersInSlot(0, eventPlayer.getTeam()).getHero()


rule "Ability 1 - Attach: Normal":
    @Event eachPlayer
    @Slot 1
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    
    wait(0.1)
    Abi1Attach()


rule "Using ability 1: LW & JQ & Hanzo":
    @Event eachPlayer
    @Slot 1
    @Condition (eventPlayer.getHero() == Hero.JUNKER_QUEEN or eventPlayer.getHero() == Hero.HANZO or eventPlayer.getHero() == Hero.LIFEWEAVER) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_1) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD == 0
    
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if eventPlayer.getHero() == Hero.LIFEWEAVER:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 8
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 8)
    elif eventPlayer.getHero() == Hero.JUNKER_QUEEN:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 7
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 7)
    elif eventPlayer.getHero() == Hero.HANZO:
        eventPlayer.setProjectileSpeed(500)
        wait(0.1)
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 6
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 6)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD, 0, 1)


rule "Using ability 1: Ana":
    @Event eachPlayer
    @Slot 1
    @Condition eventPlayer.getHero() == Hero.ANA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_1) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD == 0
    
    #wait(2)
    eventPlayer.setInvisibility(Invis.NONE)
    getPlayersInSlot(0, eventPlayer.getTeam()).stopForcingButton(Button.PRIMARY_FIRE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(false)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(0.25)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait(0.1)
    eventPlayer.setInvisibility(Invis.ALL)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(true)
    getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 12
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 12)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD, 0, 1)


rule "Using ability 1: Hog hook":
    @Event eachPlayer
    @Slot 1
    @Condition eventPlayer.getHero() == Hero.ROADHOG
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_1) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD == 0
    
    eventPlayer.setInvisibility(Invis.NONE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setMoveSpeed(50)
    getPlayersInSlot(0, eventPlayer.getTeam()).stopForcingButton(Button.PRIMARY_FIRE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(false)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 10
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 10)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD, 0, 1)
    wait(0.075)
    eventPlayer.setInvisibility(Invis.ALL)
    wait(0.55)
    if isGameInProgress():
        wait(distance(getPlayersInSlot(0, Team.1).getEyePosition(), getPlayersInSlot(0, Team.2).getEyePosition()) * 0.02)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(true)
    getPlayersInSlot(0, eventPlayer.getTeam()).setMoveSpeed(100)


rule "Using ability 1: Genji, Dva, Pharah":
    @Event eachPlayer
    @Slot 1
    @Condition (eventPlayer.getHero() == Hero.DVA or eventPlayer.getHero() == Hero.GENJI or eventPlayer.getHero() == Hero.PHARAH) == true
    @Condition eventPlayer.UsingAbi1 == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_1) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD == 0
    
    eventPlayer.detach()
    eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
    #eventPlayer.teleport(getPlayersInSlot(0, eventPlayer.getTeam()).getPosition())
    wait(0.05)
    getPlayersInSlot(0, eventPlayer.getTeam()).attachTo(eventPlayer, vect(0, 0, 0))
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if eventPlayer.getHero() == Hero.DVA:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 8
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 7)
    elif eventPlayer.getHero() == Hero.GENJI:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 7
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 7)
    elif eventPlayer.getHero() == Hero.PHARAH:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD = 7
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_1, 7)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD, 0, 1)
    wait(0.2)
    eventPlayer.UsingAbi1 = true


rule "Ability 1 False: Genji, Dva, Pharah":
    @Event eachPlayer
    @Slot 1
    @Condition (eventPlayer.getHero() == Hero.DVA or eventPlayer.getHero() == Hero.GENJI or eventPlayer.getHero() == Hero.PHARAH) == true
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.UsingAbi1 == true
    
    wait(0.05)
    getPlayersInSlot(0, eventPlayer.getTeam()).detach()
    eventPlayer.stopForcingThrottle()
    wait(0.5)
    eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    #eventPlayer.teleport(getPlayersInSlot(0, eventPlayer.getTeam()).SpawnLocation)
    eventPlayer.UsingAbi1 = false


rule "Dva Flight cancel":
    @Event eachPlayer
    @Slot 1
    @Condition eventPlayer.getHero() == Hero.DVA
    @Condition eventPlayer.UsingAbi1 == true
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_1) == true
    
    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "Ability 2:":
    @Disabled
    @Delimiter
    


def Abi2Attach():
    @Name "SUB: Ability 2 Attach"
    
    eventPlayer.Abi2Scaling = 1
    if eventPlayer.getHero() == Hero.ZARYA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, -2))
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition()), 50000)
    if eventPlayer.getHero() == Hero.ANA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0.6, 0))
        #eventPlayer.Abi1Scaling = 1.5
    if eventPlayer.getHero() == Hero.SYMMETRA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.SOLDIER:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.SOJOURN:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0.5, 0))
    if eventPlayer.getHero() == Hero.SIGMA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0.4, -0.2, -0.2))
    if eventPlayer.getHero() == Hero.LUCIO:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 4, 0))
    if eventPlayer.getHero() == Hero.PHARAH:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    if eventPlayer.getHero() == Hero.REINHARDT:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    eventPlayer.startScalingSize(eventPlayer.Abi2Scaling)


rule "Ability 2 - Attach: Hero Swap":
    @Event eachPlayer
    @Slot 2
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getHero() != getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix
    
    wait(0.5)
    Abi2Attach()
    getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix = getPlayersInSlot(0, eventPlayer.getTeam()).getHero()


rule "Ability 2 - Attach: Normal":
    @Event eachPlayer
    @Slot 2
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    
    Abi2Attach()


rule "Using ability 2: Most heroes":
    @Event eachPlayer
    @Slot 2
    @Condition eventPlayer.getHero() != Hero.SYMMETRA
    @Condition eventPlayer.getHero() != Hero.SIGMA
    @Condition eventPlayer.getHero() != Hero.DOOMFIST
    @Condition eventPlayer.getHero() != Hero.ZARYA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_2) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD == 0
    
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    if eventPlayer.getHero() == Hero.ANA:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 10
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 10)
    elif eventPlayer.getHero() == Hero.SOJOURN:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 8
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 8)
    elif eventPlayer.getHero() == Hero.SOLDIER:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 12
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 12)
    elif eventPlayer.getHero() == Hero.PHARAH:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 4
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 4)
    elif eventPlayer.getHero() == Hero.REINHARDT:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 6
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 6)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD, 0, 1)


rule "Using ability 2: Sig":
    @Event eachPlayer
    @Slot 2
    @Condition eventPlayer.getHero() == Hero.SIGMA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_2) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD == 0
    
    eventPlayer.setAbilityCooldown(Button.ABILITY_2, 0)
    getPlayersInSlot(0, eventPlayer.getTeam()).setMoveSpeed(25)
    eventPlayer.setInvisibility(Invis.NONE)
    getPlayersInSlot(0, eventPlayer.getTeam()).stopForcingButton(Button.PRIMARY_FIRE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(false)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 8
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 8)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD, 0, 1)
    wait(0.6)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(true)
    getPlayersInSlot(0, eventPlayer.getTeam()).setMoveSpeed(100)
    wait(0.07)
    eventPlayer.setInvisibility(Invis.ALL)


rule "Using ability 2: Sym":
    @Event eachPlayer
    @Slot 2
    @Condition eventPlayer.getHero() == Hero.SYMMETRA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_2) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD == 0
    
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.1)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(0.25)
    eventPlayer.cancelPrimaryAction()
    if eventPlayer.isUsingAbility2() == true:
        getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 12
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 12)
        chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD, 0, 1)


rule "Using ability 2: Zarya":
    @Event eachPlayer
    @Slot 2
    @Condition eventPlayer.getHero() == Hero.ZARYA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ABILITY_2) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD == 0
    
    getPlayersInSlot(1, eventPlayer.getTeam()).startScalingSize(0.1)
    getPlayersInSlot(3, eventPlayer.getTeam()).startScalingSize(0.1)
    getPlayersInSlot(4, eventPlayer.getTeam()).startScalingSize(0.1)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD = 13
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.ABILITY_2, 13)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD, 0, 1)
    wait(0.25)
    getPlayersInSlot(1, eventPlayer.getTeam()).startScalingSize(1)
    getPlayersInSlot(3, eventPlayer.getTeam()).startScalingSize(1)
    getPlayersInSlot(4, eventPlayer.getTeam()).startScalingSize(1)


rule "Ultimate:":
    @Disabled
    @Delimiter
    


rule "Free ultimate %":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.hasSpawned() == true
    
    getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix = getPlayersInSlot(0, eventPlayer.getTeam()).getHero()
    if eventPlayer.getHero() == Hero.KIRIKO:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(0)
    if eventPlayer.getHero() == Hero.TRACER:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(35)
    if eventPlayer.getHero() == Hero.WRECKING_BALL:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(45)
    if eventPlayer.getHero() == Hero.ASHE:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)
    if eventPlayer.getHero() == Hero.DOOMFIST:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(25)
    if eventPlayer.getHero() == Hero.ZARYA:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(0)
    if eventPlayer.getHero() == Hero.LIFEWEAVER:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(0)
    if eventPlayer.getHero() == Hero.JUNKER_QUEEN:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)
    wait(0.1)
    getPlayersInSlot(0, eventPlayer.getTeam()).UltKeep = getPlayersInSlot(0, eventPlayer.getTeam()).getUltCharge()


rule "Ult keep testing":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.isInSpawnRoom() == true
    
    wait(0.3, Wait.ABORT_WHEN_FALSE)
    eventPlayer.UltKeep = eventPlayer.getUltCharge()
    #smallMessage(getAllPlayers(), "ult put on variable: {0}".format(eventPlayer.UltKeep))
    wait(4, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


def UltAttach():
    @Name "SUB: Ultimate Attach"
    
    #eventPlayer.UltScaling = 1
    if eventPlayer.getHero() == Hero.ZARYA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0.5, 0))
    else:
        if eventPlayer.getHero() == Hero.HANZO:
            eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, -5))
        else:
            eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    #eventPlayer.startScalingSize(eventPlayer.UltScaling)


rule "Ultimate - Attach: Hero Swap":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getHero() != getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix
    
    wait(0.05, Wait.ABORT_WHEN_FALSE)
    #smallMessage(getAllPlayers(), "hero swap trigger")
    wait(0.1)
    UltAttach()
    getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix = getPlayersInSlot(0, eventPlayer.getTeam()).getHero()
    getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(getPlayersInSlot(0, eventPlayer.getTeam()).UltKeep)
    #if eventPlayer.getHero() == Hero.TRACER:
    #getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(30)
    #__end__()
    #if eventPlayer.getHero() == Hero.HANZO:
    #getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(30)
    #__end__()
    #if eventPlayer.getHero() == Hero.WRECKING_BALL:
    #getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(50)
    #__end__()
    #if eventPlayer.getHero() == Hero.ASHE:
    #getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(15)
    #__end__()
    #if eventPlayer.getHero() == Hero.DOOMFIST:
    #getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)
    #__end__()


rule "Ultimate - Attach: Normal":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    
    UltAttach()


rule "Using ultimate: Most heroes":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.getHero() != Hero.JUNKER_QUEEN
    @Condition eventPlayer.getHero() != Hero.DOOMFIST
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ULTIMATE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getUltCharge() == 100
    
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    eventPlayer.setUltCharge(100)
    wait()
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    if eventPlayer.getHero() == Hero.LIFEWEAVER:
        wait(0.1)
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.25)
        if eventPlayer.isUsingUltimate() == true:
            getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(0)
    if eventPlayer.getHero() == Hero.TRACER:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(35)
    if eventPlayer.getHero() == Hero.KIRIKO:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(0)
    if eventPlayer.getHero() == Hero.JUNKER_QUEEN:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)
    if eventPlayer.getHero() == Hero.ASHE:
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)
    if eventPlayer.getHero() == Hero.MEI or eventPlayer.getHero() == Hero.ZENYATTA or eventPlayer.getHero() == Hero.ZARYA:
        #wait(6)
        getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(0)
    if eventPlayer.getHero() == Hero.BAPTISTE:
        eventPlayer.cancelPrimaryAction()
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.1)
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.25)
        if eventPlayer.isUsingUltimate() == true:
            getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)


rule "Using ultimate: JQ":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.getHero() == Hero.JUNKER_QUEEN
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ULTIMATE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getUltCharge() == 100
    
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.detach()
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    eventPlayer.setUltCharge(100)
    wait()
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(20)
    getPlayersInSlot(0, eventPlayer.getTeam()).startHealingOverTime(eventPlayer, 5, 20)
    wait(1)
    waitUntil(eventPlayer.isUsingUltimate() == false, 3)
    eventPlayer.setInvisibility(Invis.ALL)
    wait(1)
    eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))


rule "Using ultimate: Doom":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.getHero() == Hero.DOOMFIST
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.ULTIMATE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getUltCharge() == 100
    
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.detach()
    eventPlayer.DoomUlt = raycast(getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition(), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setUltCharge(25)
    wait(1)
    eventPlayer.teleport(eventPlayer.DoomUlt)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(1.5)
    eventPlayer.setInvisibility(Invis.ALL)
    wait(1)
    eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))


rule "Kiriko ulting: CD reduction":
    @Event eachPlayer
    @Slot 3
    @Condition eventPlayer.getHero() == Hero.KIRIKO
    @Condition eventPlayer.isUsingUltimate() == true
    
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi1CD, 0, 2)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).Abi2CD, 0, 2)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD, 0, 2)
    wait(1)
    if ruleCondition:
        loop()


rule "Secondary:":
    @Disabled
    @Delimiter
    


def SecoAttach():
    @Name "SUB: Secondary Attach"
    
    if eventPlayer.getHero() == Hero.ORISA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, -0.5, 0))
    elif eventPlayer.getHero() == Hero.DVA:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, -0.3, -1))
    elif eventPlayer.getHero() == Hero.ROADHOG:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))
    else:
        eventPlayer.attachTo(getPlayersInSlot(0, eventPlayer.getTeam()), vect(0, 0, 0))


rule "Secondary: Attach: Hero Swap":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.getHero() != Hero.LUCIO
    @Condition eventPlayer.isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).getHero() != getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix
    
    wait(0.5)
    SecoAttach()
    getPlayersInSlot(0, eventPlayer.getTeam()).HeroSwapFix = getPlayersInSlot(0, eventPlayer.getTeam()).getHero()


rule "Secondary: Attach: Normal":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.isDummy() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasSpawned() == true
    @Condition eventPlayer.getHero() != Hero.LUCIO
    @Condition eventPlayer.isAlive() == true
    
    wait(0.3)
    SecoAttach()


rule "Using secondary: Most heroes":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.getHero() != Hero.RAMATTRA
    @Condition eventPlayer.getHero() != Hero.DVA
    @Condition eventPlayer.getHero() != Hero.ROADHOG
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD == 0
    
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    if eventPlayer.getHero() == Hero.ORISA:
        getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 10
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 10)
    elif eventPlayer.getHero() == Hero.ECHO:
        getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 10
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 10)
    elif eventPlayer.getHero() == Hero.SOLDIER:
        getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 6
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 6)
    elif eventPlayer.getHero() == Hero.JUNKER_QUEEN:
        getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 6
        getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 6)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD, 0, 1)


rule "Using secondary: Hog":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.getHero() == Hero.ROADHOG
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD == 0
    
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(false)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect((raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()).x, (raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()).y - 0.4, (raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()).z)), Relativity.TO_WORLD)
    #eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 2
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 2)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD, 0, 1)
    wait(0.4)
    getPlayersInSlot(0, eventPlayer.getTeam()).setPrimaryFireEnabled(true)


rule "Using secondary: Dva":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.getHero() == Hero.DVA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD == 0
    
    eventPlayer.setInvisibility(Invis.NONE)
    getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 6
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 6)
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD, 0, 1)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    wait(1.2)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    eventPlayer.setInvisibility(Invis.ALL)


rule "Using secondary: Ram":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.getHero() == Hero.RAMATTRA
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.KNOCKED_DOWN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.STUNNED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.FROZEN) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).hasStatus(Status.ROOTED) == false
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD == 0
    
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 0)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), raycast(getPlayersInSlot(0, eventPlayer.getTeam()), getPlayersInSlot(0, eventPlayer.getTeam()).getEyePosition() + getPlayersInSlot(0, eventPlayer.getTeam()).getFacingDirection() * 100, getAllPlayers(), getPlayers(eventPlayer.getTeam()), false).getHitPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    getPlayersInSlot(0, eventPlayer.getTeam()).setAbilityCooldown(Button.SECONDARY_FIRE, 13)
    getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD = 13
    chaseAtRate(getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD, 0, 1)


rule "Secondary: JQ Recall":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.getHero() == Hero.JUNKER_QUEEN
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isAlive() == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD != 6
    @Condition getPlayersInSlot(0, eventPlayer.getTeam()).SecoCD >= 3
    
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    wait(0.25)
    wait(eventPlayer.SecoCD)


rule "Ram Shield HP":
    @Event eachPlayer
    @Slot 4
    @Condition eventPlayer.getHero() == Hero.RAMATTRA
    
    eventPlayer.setMaxHealth(20)


rule "Gamemode:":
    @Disabled
    @Delimiter
    


rule "Slot 0: Disable buttons":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.hasSpawned() == true
    
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)


rule "Team 1: Dummy bot damage shows enemy HP":
    @Event playerDealtDamage
    @Team 1
    @Condition eventPlayer.isDummy() == true
    
    damage(victim, getPlayersInSlot(0, Team.1), 0.1)


rule "Team 2: Dummy bot damage shows enemy HP":
    @Event playerDealtDamage
    @Team 2
    @Condition eventPlayer.isDummy() == true
    
    damage(victim, getPlayersInSlot(0, Team.2), 0.1)


rule "Ability CD":
    @Disabled
    
    getPlayersInSlot(0, Team.1).setAbilityCooldown(Button.ABILITY_1, getPlayersInSlot(1, Team.1).getAbilityCooldown(Button.ABILITY_1))
    wait(0.05)
    getPlayersInSlot(0, Team.1).setAbilityCooldown(Button.ABILITY_2, getPlayersInSlot(2, Team.1).getAbilityCooldown(Button.ABILITY_2))
    wait(0.05)
    getPlayersInSlot(0, Team.2).setAbilityCooldown(Button.ABILITY_1, getPlayersInSlot(1, Team.2).getAbilityCooldown(Button.ABILITY_1))
    wait(0.05)
    getPlayersInSlot(0, Team.2).setAbilityCooldown(Button.ABILITY_2, getPlayersInSlot(2, Team.2).getAbilityCooldown(Button.ABILITY_2))
    wait(0.05)
    loop()


rule "Ability HUD":
    hudSubtext(HudT1Visibility, getPlayersInSlot(0, Team.1), HudPosition.LEFT, 1, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT1Visibility, "Ability 1: {0}".format(abilityIconString(getPlayersInSlot(1, Team.1).getHero(), Button.ABILITY_1)), HudPosition.LEFT, 1.1, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT1Visibility, "Ability 2: {0}".format(abilityIconString(getPlayersInSlot(2, Team.1).getHero(), Button.ABILITY_2)), HudPosition.LEFT, 1.2, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT1Visibility, "Ultimate: {0}".format(abilityIconString(getPlayersInSlot(3, Team.1).getHero(), Button.ULTIMATE)), HudPosition.LEFT, 1.3, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT1Visibility, "Secondary: {0}".format(abilityIconString(getPlayersInSlot(4, Team.1).getHero(), Button.SECONDARY_FIRE)), HudPosition.LEFT, 1.4, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT2Visibility, getPlayersInSlot(0, Team.2), HudPosition.LEFT, 2, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT2Visibility, "Ability 1: {0}".format(abilityIconString(getPlayersInSlot(1, Team.2).getHero(), Button.ABILITY_1)), HudPosition.LEFT, 2.1, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT2Visibility, "Ability 2: {0}".format(abilityIconString(getPlayersInSlot(2, Team.2).getHero(), Button.ABILITY_2)), HudPosition.LEFT, 2.2, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT2Visibility, "Ultimate: {0}".format(abilityIconString(getPlayersInSlot(3, Team.2).getHero(), Button.ULTIMATE)), HudPosition.LEFT, 2.3, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(HudT2Visibility, "Secondary: {0}".format(abilityIconString(getPlayersInSlot(4, Team.2).getHero(), Button.SECONDARY_FIRE)), HudPosition.LEFT, 2.4, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Press {0} in spawn to build your hero".format(inputBindingString(Button.INTERACT)), HudPosition.LEFT, 3, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)


rule "Hud visibility Start":
    @Condition getPlayersInSlot(0, Team.1).hasSpawned() == true
    
    HudT1Visibility = getPlayersInSlot(0, Team.1)


rule "Hud visibility Start":
    @Condition getPlayersInSlot(0, Team.2).hasSpawned() == true
    
    HudT2Visibility = getPlayersInSlot(0, Team.2)


rule "Hud visibility after 15s":
    @Condition isGameInProgress() == true
    @Condition isMatchBetweenRounds() == false
    @Condition isInSetup() == false
    @Condition isAssemblingHeroes() == false
    
    wait(15)
    HudT1Visibility.append(getPlayersInSlot(0, Team.2))
    HudT2Visibility.append(getPlayersInSlot(0, Team.1))


rule "Hud visibility hide":
    @Condition isMatchBetweenRounds() == true
    
    HudT1Visibility = getPlayersInSlot(0, Team.1)
    HudT2Visibility = getPlayersInSlot(0, Team.2)


rule "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒【Josbird's Cursor Menu】▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒":
    @Delimiter
    


rule "Create basic HUD elements":
    #Creates a HUD at the top of the screen, beneath the objective/game mode information, telling them which button opens the menu.
    #hudHeader([player for player in getAllPlayers() if not player.IsInMenuMode], "Press {0} to open menu".format(inputBindingString(Button.INTERACT)), HudPosition.TOP, 1, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    #Displays server load on the top right of the screen, above the kill feed.
    #hudText(getAllPlayers(), getAverageServerLoad(), null, l"Server Load Average", HudPosition.RIGHT, 0, Color.GREEN, Color.GREEN, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #Credits (please do not delete!)
    hudSubtext([player for player in getAllPlayers() if player.IsInMenuMode], "Cursor Menu created by Josbird   {0}   Code: GETVX".format(abilityIconString(Hero.MERCY, Button.ULTIMATE)), HudPosition.RIGHT, -100, Color.AQUA, HudReeval.VISIBILITY_AND_STRING)


rule "Toggle menu mode":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.isInSpawnRoom() == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.MenuLoaded == false
    #The menu is currently set to both open and close when Interact is pressed.
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    #I added this in because emoting prevents you from moving your aim, thus making the cursor immovable. Remove at your own peril.
    @Condition eventPlayer.isCommunicatingEmote() == false
    
    #If the menu is not open, opens the menu. Otherwise, closes it.
    eventPlayer.IsInMenuMode = true


rule "Toggle menu mode":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.isInSpawnRoom() == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.MenuLoaded == true
    #The menu is currently set to both open and close when Interact is pressed.
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    #I added this in because emoting prevents you from moving your aim, thus making the cursor immovable. Remove at your own peril.
    @Condition eventPlayer.isCommunicatingEmote() == false
    
    #If the menu is not open, opens the menu. Otherwise, closes it.
    eventPlayer.IsInMenuMode = false


rule "Menu activated > Start setup":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    #Triggers once whenever the menu opens.
    @Condition eventPlayer.IsInMenuMode == true
    
    #Sets aim speed to minimum to reduce camera sway while in menu.
    eventPlayer.setAimSpeed(10)
    #These 2 rules disable primary and secondary fire for the purposes of click detection. Though personally I haven't actually thought of a use for secondary fire yet.
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    #These 2 rules disable the non-menu HUD. This is optional, I just think it looks cleaner.
    eventPlayer.disableHeroHud()
    eventPlayer.disableGamemodeHud()
    #This (and the following rule) set the menu eye position to follow the player's eye position. Overwrite if you plan to separate the menu from the player's current position.
    eventPlayer.MenuEyePos = eventPlayer.getEyePosition()
    chaseAtRate(eventPlayer.MenuEyePos, eventPlayer.getEyePosition(), 100000)
    #Stores original facing direction of player for the purpose of recording mouse movement. Don't recommend changing this.
    eventPlayer.MenuOriginalFacing = eventPlayer.getFacingDirection()
    #Sets the forward axis of the menu view (into and out of the screen). Change this to match the facing direction of whatever camera you use if you decouple it from the first person view. (Make sure to normalize if the direction is not a unit vector.)
    eventPlayer.MenuZAxis = eventPlayer.getFacingDirection()
    #Sets vertical axis of menu (up and down the screen).
    eventPlayer.MenuYAxis = directionFromAngles(horizontalAngleOfDirection(eventPlayer.MenuZAxis), verticalAngleOfDirection(eventPlayer.MenuZAxis) + -90)
    #Sets horizontal axis of the menu (left and right on the screen).
    eventPlayer.MenuXAxis = crossProduct(eventPlayer.MenuZAxis, eventPlayer.MenuYAxis)
    #These three rules scale up all 3 axes to 100 meters in order to stabilize the menu in-world texts by placing them far away from the camera view. Keep this in mind if you plan to make your own texts on the screen.
    eventPlayer.MenuXAxis *= 100
    eventPlayer.MenuYAxis *= 100
    eventPlayer.MenuZAxis *= 100
    #This is where the magic happens. The first rule initializes the cursor position and the second moves it around the screen as the player moves their aim by projecting the angle difference onto a flat plane.
    eventPlayer.CursorPos = eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3
    chaseAtRate(eventPlayer.CursorPos, eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * -0.75 * angleDifference(horizontalAngleOfDirection(eventPlayer.MenuOriginalFacing), horizontalAngleOfDirection(eventPlayer.getFacingDirection())) + eventPlayer.MenuYAxis * -0.75 * angleDifference(verticalAngleOfDirection(eventPlayer.MenuOriginalFacing), verticalAngleOfDirection(eventPlayer.getFacingDirection())), 100000)
    #The next four rules provide a simpler way to track the position of the cursor relative to the screen. Use these instead of CursorPos to compare the cursor position to coordinates of onscreen elements.
    eventPlayer.CursorX = 0
    eventPlayer.CursorY = 0
    chaseAtRate(eventPlayer.CursorX, -0.75 * angleDifference(horizontalAngleOfDirection(eventPlayer.MenuOriginalFacing), horizontalAngleOfDirection(eventPlayer.getFacingDirection())), 100000)
    chaseAtRate(eventPlayer.CursorY, -0.75 * angleDifference(verticalAngleOfDirection(eventPlayer.MenuOriginalFacing), verticalAngleOfDirection(eventPlayer.getFacingDirection())), 100000)
    #This rule initializes the array that stores all components of the menu in order to destroy them when it closes. Don't recommend changing this.
    eventPlayer.MenuVFX = []
    #These subroutines do the actual work of constructing the menu. See subroutines for more details.
    CreateMenuFrame()
    CreateMenuCursor()
    CreateMenuButtons()
    CreateMenuButtonsMore()
    eventPlayer.MenuLoaded = true


def CreateMenuFrame():
    @Name "Menu activated > Create frame"
    
    #This rule constructs the 10 elements that make up the frame of the menu. If you want to resize the menu, change the position and contents of these texts to what you want. Don't make it any larger as current size is optimized to be onscreen at min FoV.
    if false:
        return
    #The following 8 rules create the corner pieces of the menu frame.
    createInWorldText(eventPlayer, "┌", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * -2.5 + eventPlayer.MenuYAxis * 1.05, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    createInWorldText(eventPlayer, "┐", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * 2.5 + eventPlayer.MenuYAxis * 1.05, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    createInWorldText(eventPlayer, "└", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * -2.5 + eventPlayer.MenuYAxis * -1.45, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    createInWorldText(eventPlayer, "┘", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * 2.5 + eventPlayer.MenuYAxis * -1.45, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    #The following 8 rules create the edge pieces of the menu frame. Recommend removing these first if you are running low on in-world text budget.
    createInWorldText(eventPlayer, "━━━━━━━━━━━━━━━━", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * 0 + eventPlayer.MenuYAxis * 1.05, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    createInWorldText(eventPlayer, "━━━━━━━━━━━━━━━━", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * 0 + eventPlayer.MenuYAxis * -1.45, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    createInWorldText(eventPlayer, "┃\r\n┃\r\n┃\r\n┃\r\n┃\r\n┃\r\n┃", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * -2.5 + eventPlayer.MenuYAxis * -0.7, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    createInWorldText(eventPlayer, "┃\r\n┃\r\n┃\r\n┃\r\n┃\r\n┃\r\n┃", worldVector(localVector(eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * 2.5 + eventPlayer.MenuYAxis * -0.7, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 4, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    #This creates a button to close the menu using a simplified version of the default button schema detailed on workshop.codes: [button text, action ID, x position, y position, click radius].
    eventPlayer.ButtonExitMenu = ["confirm", "exit menu", 1.75, 0, 0.4]
    #Creates the inactive text of the exit button. Becomes invisible when the cursor hovers over the button.
    createInWorldText([i for i in eventPlayer if eventPlayer.IsInMenuMode and distance(eventPlayer.CursorPos, eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonExitMenu[2] + eventPlayer.MenuYAxis * eventPlayer.ButtonExitMenu[3]) > 100 * eventPlayer.ButtonExitMenu[4]], eventPlayer.ButtonExitMenu[0], eventPlayer.MenuEyePos + eventPlayer.MenuYAxis * -0.2 + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonExitMenu[2] + eventPlayer.MenuYAxis * eventPlayer.ButtonExitMenu[3], 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.GREEN)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    #Creates the hover text of the exit button. Becomes visible when the cursor hovers over the button.
    createInWorldText([i for i in eventPlayer if eventPlayer.IsInMenuMode and distance(eventPlayer.CursorPos, eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonExitMenu[2] + eventPlayer.MenuYAxis * eventPlayer.ButtonExitMenu[3]) <= 100 * eventPlayer.ButtonExitMenu[4]], eventPlayer.ButtonExitMenu[0], eventPlayer.MenuEyePos + eventPlayer.MenuYAxis * -0.2 + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonExitMenu[2] + eventPlayer.MenuYAxis * eventPlayer.ButtonExitMenu[3], 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)
    eventPlayer.MenuVFX.append(getLastCreatedText())


rule "Wait test":
    WaitTest = 0.025


def CreateMenuButtons():
    @Name "Menu activated > Create buttons"
    
    #This rule creates the actual button visuals when the menu is opened. Until we get color variables, this is where more experienced users can change button colors. In each set, 2nd action = inactive button color, 4th = hovered button color.
    wait()
    # 
    #ButtonProperties[0]
    if len(eventPlayer.ButtonProperties) <= 0:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[0][7] and true], eventPlayer.ButtonProperties[0][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[0][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[0][3] - 0.2)), eventPlayer.ButtonProperties[0][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[1]
    if len(eventPlayer.ButtonProperties) <= 1:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[1][7] and true], eventPlayer.ButtonProperties[1][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[1][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[1][3] - 0.2)), eventPlayer.ButtonProperties[1][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[2]
    if len(eventPlayer.ButtonProperties) <= 2:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[2][7] and true], eventPlayer.ButtonProperties[2][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[2][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[2][3] - 0.2)), eventPlayer.ButtonProperties[2][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[3]
    if len(eventPlayer.ButtonProperties) <= 3:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[3][7] and true], eventPlayer.ButtonProperties[3][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[3][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[3][3] - 0.2)), eventPlayer.ButtonProperties[3][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[4]
    if len(eventPlayer.ButtonProperties) <= 4:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[4][7] and true], eventPlayer.ButtonProperties[4][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[4][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[4][3] - 0.2)), eventPlayer.ButtonProperties[4][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[5]
    if len(eventPlayer.ButtonProperties) <= 5:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[5][7] and true], eventPlayer.ButtonProperties[5][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[5][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[5][3] - 0.2)), eventPlayer.ButtonProperties[5][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[6]
    if len(eventPlayer.ButtonProperties) <= 6:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[6][7] and true], eventPlayer.ButtonProperties[6][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[6][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[6][3] - 0.2)), eventPlayer.ButtonProperties[6][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[7]
    if len(eventPlayer.ButtonProperties) <= 7:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[7][7] and true], eventPlayer.ButtonProperties[7][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[7][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[7][3] - 0.2)), eventPlayer.ButtonProperties[7][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[8]
    if len(eventPlayer.ButtonProperties) <= 8:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[8][7] and true], eventPlayer.ButtonProperties[8][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[8][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[8][3] - 0.2)), eventPlayer.ButtonProperties[8][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[9]
    if len(eventPlayer.ButtonProperties) <= 9:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[9][7] and true], eventPlayer.ButtonProperties[9][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[9][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[9][3] - 0.2)), eventPlayer.ButtonProperties[9][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[10]
    if len(eventPlayer.ButtonProperties) <= 10:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[10][7] and true], eventPlayer.ButtonProperties[10][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[10][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[10][3] - 0.2)), eventPlayer.ButtonProperties[10][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[11]
    if len(eventPlayer.ButtonProperties) <= 11:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[11][7] and true], eventPlayer.ButtonProperties[11][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[11][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[11][3] - 0.2)), eventPlayer.ButtonProperties[11][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[12]
    if len(eventPlayer.ButtonProperties) <= 12:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[12][7] and true], eventPlayer.ButtonProperties[12][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[12][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[12][3] - 0.2)), eventPlayer.ButtonProperties[12][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[13]
    if len(eventPlayer.ButtonProperties) <= 13:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[13][7] and true], eventPlayer.ButtonProperties[13][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[13][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[13][3] - 0.2)), eventPlayer.ButtonProperties[13][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[14]
    if len(eventPlayer.ButtonProperties) <= 14:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[14][7] and true], eventPlayer.ButtonProperties[14][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[14][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[14][3] - 0.2)), eventPlayer.ButtonProperties[14][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[15]
    if len(eventPlayer.ButtonProperties) <= 15:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[15][7] and true], eventPlayer.ButtonProperties[15][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[15][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[15][3] - 0.2)), eventPlayer.ButtonProperties[15][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())


def CreateMenuButtonsMore():
    @Name "Menu activated > Create buttons 2"
    
    #This rule creates the actual button visuals when the menu is opened. Until we get color variables, this is where more experienced users can change button colors. In each set, 2nd action = inactive button color, 4th = hovered button color.
    wait()
    # 
    #ButtonProperties[16]
    if len(eventPlayer.ButtonProperties) <= 16:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[16][7] and true], eventPlayer.ButtonProperties[16][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[16][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[16][3] - 0.2)), eventPlayer.ButtonProperties[16][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[17]
    if len(eventPlayer.ButtonProperties) <= 17:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[17][7] and true], eventPlayer.ButtonProperties[17][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[17][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[17][3] - 0.2)), eventPlayer.ButtonProperties[17][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[18]
    if len(eventPlayer.ButtonProperties) <= 18:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[18][7] and true], eventPlayer.ButtonProperties[18][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[18][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[18][3] - 0.2)), eventPlayer.ButtonProperties[18][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[19]
    if len(eventPlayer.ButtonProperties) <= 19:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[19][7] and true], eventPlayer.ButtonProperties[19][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[19][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[19][3] - 0.2)), eventPlayer.ButtonProperties[19][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[20]
    if len(eventPlayer.ButtonProperties) <= 20:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[20][7] and true], eventPlayer.ButtonProperties[20][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[20][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[20][3] - 0.2)), eventPlayer.ButtonProperties[20][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[21]
    if len(eventPlayer.ButtonProperties) <= 21:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[21][7] and true], eventPlayer.ButtonProperties[21][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[21][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[21][3] - 0.2)), eventPlayer.ButtonProperties[21][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[22]
    if len(eventPlayer.ButtonProperties) <= 22:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[22][7] and true], eventPlayer.ButtonProperties[22][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[22][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[22][3] - 0.2)), eventPlayer.ButtonProperties[22][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[23]
    if len(eventPlayer.ButtonProperties) <= 23:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[23][7] and true], eventPlayer.ButtonProperties[23][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[23][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[23][3] - 0.2)), eventPlayer.ButtonProperties[23][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[24]
    if len(eventPlayer.ButtonProperties) <= 24:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[24][7] and true], eventPlayer.ButtonProperties[24][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[24][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[24][3] - 0.2)), eventPlayer.ButtonProperties[24][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[25]
    if len(eventPlayer.ButtonProperties) <= 25:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[25][7] and true], eventPlayer.ButtonProperties[25][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[25][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[25][3] - 0.2)), eventPlayer.ButtonProperties[25][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[26]
    if len(eventPlayer.ButtonProperties) <= 26:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[26][7] and true], eventPlayer.ButtonProperties[26][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[26][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[26][3] - 0.2)), eventPlayer.ButtonProperties[26][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[27]
    if len(eventPlayer.ButtonProperties) <= 27:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[27][7] and true], eventPlayer.ButtonProperties[27][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[27][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[27][3] - 0.2)), eventPlayer.ButtonProperties[27][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[28]
    if len(eventPlayer.ButtonProperties) <= 28:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[28][7] and true], eventPlayer.ButtonProperties[28][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[28][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[28][3] - 0.2)), eventPlayer.ButtonProperties[28][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[29]
    if len(eventPlayer.ButtonProperties) <= 29:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[29][7] and true], eventPlayer.ButtonProperties[29][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[29][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[29][3] - 0.2)), eventPlayer.ButtonProperties[29][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[30]
    if len(eventPlayer.ButtonProperties) <= 30:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[30][7] and true], eventPlayer.ButtonProperties[30][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[30][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[30][3] - 0.2)), eventPlayer.ButtonProperties[30][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[31]
    if len(eventPlayer.ButtonProperties) <= 31:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[31][7] and true], eventPlayer.ButtonProperties[31][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[31][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[31][3] - 0.2)), eventPlayer.ButtonProperties[31][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[32]
    if len(eventPlayer.ButtonProperties) <= 32:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[32][7] and true], eventPlayer.ButtonProperties[32][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[32][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[32][3] - 0.2)), eventPlayer.ButtonProperties[32][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[33]
    if len(eventPlayer.ButtonProperties) <= 33:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[33][7] and true], eventPlayer.ButtonProperties[33][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[33][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[33][3] - 0.2)), eventPlayer.ButtonProperties[33][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)
    # 
    #ButtonProperties[33]
    if len(eventPlayer.ButtonProperties) <= 34:
        return
    createInWorldText([i for i in eventPlayer if eventPlayer.ButtonProperties[34][7] and true], eventPlayer.ButtonProperties[34][0], eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonProperties[34][2] + (eventPlayer.MenuYAxis * (eventPlayer.ButtonProperties[34][3] - 0.2)), eventPlayer.ButtonProperties[34][8], Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait(WaitTest)


def CreateMenuCursor():
    @Name "Menu activated > Create cursor"
    
    #The next four rules create the actual cursor that the player can move around. For the cursor to render over all other text, it must be the last in-world text to become visible. Thus, we create two identical cursors that alternate visibility every frame.
    createInWorldText([i for i in eventPlayer if getTotalTimeElapsed() % 0.032 > 0.016], "▲", worldVector(localVector(eventPlayer.CursorPos + eventPlayer.MenuYAxis * -0.2, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 3, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION, Color.YELLOW)
    eventPlayer.MenuVFX.append(getLastCreatedText())
    wait()
    createInWorldText([i for i in eventPlayer if getTotalTimeElapsed() % 0.032 < 0.016], "▲", worldVector(localVector(eventPlayer.CursorPos + eventPlayer.MenuYAxis * -0.2, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer, Transform.ROTATION_AND_TRANSLATION), 3, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION, Color.YELLOW)
    eventPlayer.MenuVFX.append(getLastCreatedText())


rule "Menu deactivated > Clean up":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    #Triggers once whenever the menu is closed. Technically also triggers when the game starts but that, uh, probably won't cause any problems.
    @Condition eventPlayer.IsInMenuMode == false
    @Condition eventPlayer.MenuLoaded == true
    
    #Return aim speed to normal.
    eventPlayer.setAimSpeed(100)
    #Reenable buttons previously reserved for menu clicking.
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(true)
    #Reenable the HUD.
    eventPlayer.enableGamemodeHud()
    eventPlayer.enableHeroHud()
    #Stop all active chases
    stopChasingVariable(eventPlayer.MenuEyePos)
    stopChasingVariable(eventPlayer.CursorPos)
    stopChasingVariable(eventPlayer.CursorX)
    stopChasingVariable(eventPlayer.CursorY)
    #Loops through all the components of the menu, destroying each one. Note that there is currently no wait in here, so if the array has a lot of elements, the server may be under a lot of stress for a moment. This may be a good place to reduce load if needed.
    for eventPlayer.__iter___ in range(len(eventPlayer.MenuVFX)):
        #Since trying to destroy the wrong type of entity doesn't cause any errors, we simply try each type on the current entity, allowing for any type of effect or icon to be placed in MenuVFX for cleanup when the menu is closed.
        destroyInWorldText(eventPlayer.MenuVFX[eventPlayer.__iter___])
        #destroyEffect(eventPlayer.MenuVFX[eventPlayer.__iter___])
        #destroyIcon(eventPlayer.MenuVFX[eventPlayer.__iter___])
        #destroyHudText(eventPlayer.MenuVFX[eventPlayer.__iter___])
    wait(0.5)
    eventPlayer.MenuLoaded = false


rule "Force menu exit on emote":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    #I added this in because emoting prevents you from moving your aim, thus making the cursor immovable. Remove at your own peril.
    @Condition eventPlayer.IsInMenuMode == true
    @Condition eventPlayer.isCommunicatingEmote() == true
    
    eventPlayer.IsInMenuMode = false


rule "Cursor bounding box":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.IsInMenuMode == true
    #Checks if the cursor is more than 0.1 screen units outside of the bounding box. If you resize the screen make sure to change this as well.
    @Condition (abs(eventPlayer.CursorX) > 2.6 or abs(eventPlayer.CursorY) > 1.35) == true
    
    #Clamps the player's horizontal facing to the range of valid screen space. Screen border values should replace the 2.500s and 1.250s here if you resize the screen.
    eventPlayer.setFacing(directionFromAngles(min(max(horizontalAngleOfDirection(eventPlayer.getFacingDirection()), horizontalAngleOfDirection(eventPlayer.MenuOriginalFacing) - 2.5 / 0.75), horizontalAngleOfDirection(eventPlayer.MenuOriginalFacing) + 2.5 / 0.75), min(max(verticalAngleOfDirection(eventPlayer.getFacingDirection()), verticalAngleOfDirection(eventPlayer.MenuOriginalFacing) - 1.25 / 0.75), verticalAngleOfDirection(eventPlayer.MenuOriginalFacing) + 1.25 / 0.75)), Relativity.TO_WORLD)
    #Double checks every 100ms that the cursor is not still outside the bounds of the menu. This is necessary because if the player moves their aim fast enough, they could overcome the border if they were fast enough.
    wait(0.1)
    if ruleCondition:
        loop()


rule "Detect primary fire button press":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    #Rather than checking for a button click in conditions, we only check for a mouse click so that the player can't press down primary fire then move the cursor onto the button.
    @Condition eventPlayer.IsInMenuMode == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    
    #Clears the primary action ID queue.
    eventPlayer.ActionIDQueue = []
    #Checks if the cursor is currently within radius of the exit button.
    if distance(eventPlayer.CursorPos, eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonExitMenu[2] + eventPlayer.MenuYAxis * eventPlayer.ButtonExitMenu[3]) <= 100 * eventPlayer.ButtonExitMenu[4]:
        #Add the exit button's action ID to the primary action ID queue.
        eventPlayer.ActionIDQueue.append(eventPlayer.ButtonExitMenu[1])
    #For each button, checks if the cursor is within that button's click area.
    for eventPlayer.__iter___ in range(len(eventPlayer.ButtonProperties)):
        if abs(eventPlayer.CursorX - eventPlayer.ButtonProperties[eventPlayer.__iter___][2]) <= eventPlayer.ButtonProperties[eventPlayer.__iter___][4] / 2 and abs(eventPlayer.CursorY - eventPlayer.ButtonProperties[eventPlayer.__iter___][3]) <= eventPlayer.ButtonProperties[eventPlayer.__iter___][5] / 2:
            #If so, add that button's primary action ID to the queue.
            eventPlayer.ActionIDQueue.append(eventPlayer.ButtonProperties[eventPlayer.__iter___][1])
    #Set the current action ID variable to the first button clicked for one tick.
    eventPlayer.CurrActionID = eventPlayer.ActionIDQueue[0]
    wait()
    eventPlayer.CurrActionID = null


rule "Detect secondary fire button press":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    #Rather than checking for a button click in conditions, we only check for a mouse click so that the player can't press down secondary fire then move the cursor onto the button.
    @Condition eventPlayer.IsInMenuMode == true
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true
    
    #Clears the secondary action ID queue.
    eventPlayer.ActionIDQueue_Secondary = []
    #Checks if the cursor is currently within radius of the exit button.
    if distance(eventPlayer.CursorPos, eventPlayer.MenuEyePos + eventPlayer.MenuZAxis * 3 + eventPlayer.MenuXAxis * eventPlayer.ButtonExitMenu[2] + eventPlayer.MenuYAxis * eventPlayer.ButtonExitMenu[3]) <= 100 * eventPlayer.ButtonExitMenu[4]:
        #Add the exit button's action ID to the secondary action ID queue.
        eventPlayer.ActionIDQueue_Secondary.append(eventPlayer.ButtonExitMenu[1])
    #For each button, checks if the cursor is within that button's click area.
    for eventPlayer.__iter___ in range(len(eventPlayer.ButtonProperties)):
        if abs(eventPlayer.CursorX - eventPlayer.ButtonProperties[eventPlayer.__iter___][2]) <= eventPlayer.ButtonProperties[eventPlayer.__iter___][4] / 2 and abs(eventPlayer.CursorY - eventPlayer.ButtonProperties[eventPlayer.__iter___][3]) <= eventPlayer.ButtonProperties[eventPlayer.__iter___][5] / 2:
            #If so, add that button's secondary action ID to the queue.
            eventPlayer.ActionIDQueue_Secondary.append(eventPlayer.ButtonProperties[eventPlayer.__iter___][9])
    #Set the current action ID variable to the first button clicked for one tick.
    eventPlayer.CurrActionID_Secondary = eventPlayer.ActionIDQueue_Secondary[0]
    wait()
    eventPlayer.CurrActionID_Secondary = null


rule "Action ID \"exit menu\"":
    @Event eachPlayer
    @Condition eventPlayer.CurrActionID == "exit menu"
    
    playEffect(eventPlayer, DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.IsInMenuMode = false


rule "Secondary action ID \"exit menu\"":
    @Event eachPlayer
    @Condition eventPlayer.CurrActionID_Secondary == "exit menu"
    
    playEffect(eventPlayer, DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.IsInMenuMode = false


rule ">>>EDIT BUTTON & LABEL STARTING VALUES HERE<<<":
    @Event eachPlayer
    #Dummy bots were getting menu stuff and causing server crashes, so we exclude them from these rules.
    @Condition eventPlayer.isDummy() == false
    #This rule currently resets all buttons to their initial states any time the menu is opened. If you want button states to persist between menu uses, disable this condition.
    #@Condition eventPlayer.IsInMenuMode == true
    
    #Empty the button properties array.
    eventPlayer.ButtonProperties = []
    eventPlayer.ButtonProperties.append([["Ability 1", "", -2, 1, 1, 0.15, false, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["Ability 2", "", -1, 1, 1, 0.15, false, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["Secondary", "", 0, 1, 1, 0.15, false, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["Ultimate", "", 1, 1, 1, 0.15, false, true, 3, null, null, null]])
    #Ability 1
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ROADHOG, Button.ABILITY_1)), "Ability1Hog", -2, 0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.DVA, Button.ABILITY_1)), "Ability1Dva", -2, 0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.GENJI, Button.ABILITY_1)), "Ability1Genji", -2, 0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.HANZO, Button.ABILITY_1)), "Ability1Hanzo", -2, 0, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.PHARAH, Button.ABILITY_1)), "Ability1Pharah", -2, -0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ANA, Button.ABILITY_1)), "Ability1Ana", -2, -0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.LIFEWEAVER, Button.ABILITY_1)), "Ability1LW", -2, -0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.JUNKER_QUEEN, Button.ABILITY_1)), "Ability1JQ", -2, -1, 1, 0.15, true, true, 3, null, null, null]])
    #Ability 2
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ANA, Button.ABILITY_2)), "Ability2Ana", -1, 0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.SOJOURN, Button.ABILITY_2)), "Ability2Soju", -1, 0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ZARYA, Button.ABILITY_2)), "Ability2Zarya", -1, 0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.SYMMETRA, Button.ABILITY_2)), "Ability2Sym", -1, 0, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.SOLDIER, Button.ABILITY_2)), "Ability2Sold", -1, -0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.PHARAH, Button.ABILITY_2)), "Ability2Pharah", -1, -0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.REINHARDT, Button.ABILITY_2)), "Ability2Rein", -1, -0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.SIGMA, Button.ABILITY_2)), "Ability2Sig", -1, -1, 1, 0.15, true, true, 3, null, null, null]])
    #Secondary
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ORISA, Button.SECONDARY_FIRE)), "SecondOrisa", 0, 0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ECHO, Button.SECONDARY_FIRE)), "SecondEcho", 0, 0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ROADHOG, Button.SECONDARY_FIRE)), "SecondHog", 0, 0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.DVA, Button.SECONDARY_FIRE)), "SecondDva", 0, 0, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.SOLDIER, Button.SECONDARY_FIRE)), "SecondSold", 0, -0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.RAMATTRA, Button.SECONDARY_FIRE)), "SecondRam", 0, -0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.JUNKER_QUEEN, Button.SECONDARY_FIRE)), "SecondJQ", 0, -0.75, 1, 0.15, true, true, 3, null, null, null]])
    #Ultimate
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.LIFEWEAVER, Button.ULTIMATE)), "UltimateLW", 1, 0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ZARYA, Button.ULTIMATE)), "UltimateZarya", 1, 0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.KIRIKO, Button.ULTIMATE)), "UltimateKiri", 1, 0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.DOOMFIST, Button.ULTIMATE)), "UltimateDoom", 1, 0, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.TRACER, Button.ULTIMATE)), "UltimateTracer", 1, -0.25, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.ASHE, Button.ULTIMATE)), "UltimateAshe", 1, -0.5, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.BAPTISTE, Button.ULTIMATE)), "UltimateBap", 1, -0.75, 1, 0.15, true, true, 3, null, null, null]])
    eventPlayer.ButtonProperties.append([["{0}".format(abilityIconString(Hero.JUNKER_QUEEN, Button.ULTIMATE)), "UltimateJQ", 1, -1, 1, 0.15, true, true, 3, null, null, null]])


rule "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒a":
    @Delimiter
    


rule "Exit menu if out of spawn":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.isInSpawnRoom() == false
    
    wait(1)
    eventPlayer.IsInMenuMode = false


rule "Ability 1: Hog Hook":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1Hog"
    
    smallMessage(eventPlayer, "Roadhog: Chain Hook")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.ROADHOG
    wait(1)


rule "Ability 1: Dva Boosters":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1Dva"
    
    smallMessage(eventPlayer, "D.Va: Boosters")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.DVA
    wait(1)


rule "Ability 1: Genji Dash":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1Genji"
    
    smallMessage(eventPlayer, "Genji: Dash")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.GENJI
    wait(1)


rule "Ability 1: Hanzo WH":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1Hanzo"
    
    smallMessage(eventPlayer, "Hanzo: Sonic Arrow")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.HANZO
    wait(1)


rule "Ability 1: Pharah Jet":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1Pharah"
    
    smallMessage(eventPlayer, "Pharah: Jump Jet")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.PHARAH
    wait(1)


rule "Ability 1: LW Platform":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1LW"
    
    smallMessage(eventPlayer, "Lifeweaver: Petal Platform")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.LIFEWEAVER
    wait(1)


rule "Ability 1: Ana Sleep":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1Ana"
    
    smallMessage(eventPlayer, "Ana: Sleep Dart")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.ANA
    wait(1)


rule "Ability 1: JQ Shout":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability1JQ"
    
    smallMessage(eventPlayer, "Junker Queen: Commanding Shout")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability1 = Hero.JUNKER_QUEEN
    wait(1)


rule "Ability 2: Ana Nade":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Ana"
    
    smallMessage(eventPlayer, "Ana: Biotic Grenade")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.ANA
    wait(1)


rule "Ability 2: Zarya Bubble":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Zarya"
    
    smallMessage(eventPlayer, "Zarya: Barrier")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.ZARYA
    wait(1)


rule "Ability 2: Soju Disruptor":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Soju"
    
    smallMessage(eventPlayer, "Sojourn: Disruptor Shot")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.SOJOURN
    wait(1)


rule "Ability 2: Sym TP":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Sym"
    
    smallMessage(eventPlayer, "Symmetra: Teleporter")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.SYMMETRA
    wait(1)


rule "Ability 2: Soldier Heal":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Sold"
    
    smallMessage(eventPlayer, "Soldier: Biotic Field")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.SOLDIER
    wait(1)


rule "Ability 2: Pharah Boop":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Pharah"
    
    smallMessage(eventPlayer, "Pharah: Concussive Blast")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.PHARAH
    wait(1)


rule "Ability 2: Rein Fire":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Rein"
    
    smallMessage(eventPlayer, "Reinhardt: Firestrike")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.REINHARDT
    wait(1)


rule "Ability 2: Sig Rock":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "Ability2Sig"
    
    smallMessage(eventPlayer, "Sigma: Accretion")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ability2 = Hero.SIGMA
    wait(1)


rule "Ultimate: Zarya Grav":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateZarya"
    
    smallMessage(eventPlayer, "Zarya: Graviton Surge")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.ZARYA
    wait(1)


rule "Ultimate: Ashe Bob":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateAshe"
    
    smallMessage(eventPlayer, "Ashe: B.O.B.")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.ASHE
    wait(1)


rule "Ultimate: LW Tree":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateLW"
    
    smallMessage(eventPlayer, "Lifeweaver: Tree of Life")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.LIFEWEAVER
    wait(1)


rule "Ultimate: Kitsune Rush":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateKiri"
    
    smallMessage(eventPlayer, "Kiriko: Kitsune Rush")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.KIRIKO
    wait(1)


rule "Ultimate: Tracer Pulse":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateTracer"
    
    smallMessage(eventPlayer, "Tracer: (Ranged) Pulse Bomb")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.TRACER
    wait(1)


rule "Ultimate: Bap Window":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateBap"
    
    smallMessage(eventPlayer, "Baptiste: Amplification Matrix")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.BAPTISTE
    wait(1)


rule "Ultimate: Doom airstrike":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateDoom"
    
    smallMessage(eventPlayer, "Doomfist: Meteor (Air) Strike")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.DOOMFIST
    wait(1)


rule "Ultimate: JQ Rampage":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "UltimateJQ"
    
    smallMessage(eventPlayer, "Junker Queen: Rampage")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Ultimate = Hero.JUNKER_QUEEN
    wait(1)


rule "Secondary: Orisa Spear":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondOrisa"
    
    smallMessage(eventPlayer, "Orisa: Energy Javelin")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.ORISA
    wait(1)


rule "Secondary: Echo Mines":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondEcho"
    
    smallMessage(eventPlayer, "Echo: Sticky mines")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.ECHO
    wait(1)


rule "Secondary: Hog Shot":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondHog"
    
    smallMessage(eventPlayer, "Roadhog: Scrap Gun")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.ROADHOG
    wait(1)


rule "Secondary: Dva Matrix":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondDva"
    
    smallMessage(eventPlayer, "D.Va: Defense Matrix")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.DVA
    wait(1)


rule "Secondary: Ram Shield":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondRam"
    
    smallMessage(eventPlayer, "Ramattra: Void Barrier")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.RAMATTRA
    wait(1)


rule "Secondary: Soldier Rocket":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondSold"
    
    smallMessage(eventPlayer, "Soldier: Helix Rockets")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.SOLDIER
    wait(1)


rule "Secondary: JQ Blade":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "SecondJQ"
    
    smallMessage(eventPlayer, "Junker Queen: Jagged Blade")
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 35)
    eventPlayer.Secondary = Hero.JUNKER_QUEEN
    wait(1)


rule "Summon bots on exit menu":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.CurrActionID == "exit menu"
    
    eventPlayer.SpawnLocation = eventPlayer.getPosition()
    wait(0.25)
    if getPlayersInSlot(1, eventPlayer.getTeam()).getHero() != eventPlayer.Ability1:
        createDummy(eventPlayer.Ability1, eventPlayer.getTeam(), 1, eventPlayer.getPosition())
        wait(0.1)
        eventPlayer.Abi1Hud = abilityIconString(getPlayersInSlot(1, eventPlayer.getTeam()).getHero(), Button.ABILITY_1)
    if getPlayersInSlot(2, eventPlayer.getTeam()).getHero() != eventPlayer.Ability2:
        wait(0.25)
        createDummy(eventPlayer.Ability2, eventPlayer.getTeam(), 2, eventPlayer.getPosition())
        wait(0.1)
        eventPlayer.Abi2Hud = abilityIconString(getPlayersInSlot(2, eventPlayer.getTeam()).getHero(), Button.ABILITY_2)
    if getPlayersInSlot(3, eventPlayer.getTeam()).getHero() != eventPlayer.Ultimate:
        wait(0.25)
        createDummy(eventPlayer.Ultimate, eventPlayer.getTeam(), 3, eventPlayer.getPosition())
    if getPlayersInSlot(4, eventPlayer.getTeam()).getHero() != eventPlayer.Secondary:
        wait(0.25)
        createDummy(eventPlayer.Secondary, eventPlayer.getTeam(), 4, eventPlayer.getPosition())
        wait(0.1)
        eventPlayer.SecoHud = abilityIconString(getPlayersInSlot(4, eventPlayer.getTeam()).getHero(), Button.SECONDARY_FIRE)
    wait(0.25)
    if getNumberOfPlayers(eventPlayer.getTeam()) == 5:
        eventPlayer.FirstHeroBuilt = true


rule "Rein Size":
    @Event eachPlayer
    @Hero reinhardt
    @Condition eventPlayer.getSlot() == 0
    
    eventPlayer.startScalingSize(0.8)


rule "Sig Size":
    @Event eachPlayer
    @Hero sigma
    @Condition eventPlayer.getSlot() == 0
    
    eventPlayer.startScalingSize(0.8)


rule "Speed boost in spawn":
    @Event eachPlayer
    @Slot 0
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isInSpawnRoom() == true
    
    eventPlayer.setMoveSpeed(275)


rule "Speed boost not in setup fixes some maps":
    @Event eachPlayer
    @Slot 0
    @Condition isInSetup() == false
    @Condition isGameInProgress() == true
    
    eventPlayer.setMoveSpeed(275)
    eventPlayer.SpeedDura = 3
    chaseAtRate(eventPlayer.SpeedDura, 0, 1)


rule "Speed boost out of spawn":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.isInSpawnRoom() == false
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.getHero() == true
    
    eventPlayer.setMoveSpeed(275)
    eventPlayer.SpeedDura = 3
    chaseAtRate(eventPlayer.SpeedDura, 0, 1)
    wait(0.2, Wait.ABORT_WHEN_FALSE)
    smallMessage(eventPlayer, "Leaving spawn: speed buff ends in 3 seconds")


rule "Speed duration 0":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.SpeedDura == 0
    
    eventPlayer.setMoveSpeed(100)


rule "Player Dies":
    @Event playerDied
    @Slot 0
    
    eventPlayer.UltKeep = eventPlayer.getUltCharge()
    smallMessage(getPlayers(getOppositeTeam(victim.getTeam())), "Opponent died: Healing to full in 4.5 seconds")
    wait(0.2)
    eventPlayer.teleport(eventPlayer.SpawnLocation)
    wait(4.3)
    heal(getAllPlayers(), null, 1000)


rule "###   External Ability Hud   ###":
    @Disabled
    @Delimiter
    


rule "Create Ability Icons":
    createProgressBarInWorldText(getAllPlayers(), 10, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ■■■", updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.7 * worldVector(Vector.RIGHT, localPlayer, Transform.ROTATION) + ((0.3 - 0.2) * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90))) + 3 * localPlayer.getFacingDirection()))), 8, Clip.NONE, null, Color.BLACK, ProgressWorldTextReeval.VISIBILITY_POSITION_VALUES_AND_COLOR, SpecVisibility.NEVER)
    createProgressBarInWorldText(getAllPlayers(), 10, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ■", updateEveryFrame(localPlayer.getEyePosition() + (100 * (-0.03 * worldVector(Vector.RIGHT, localPlayer, Transform.ROTATION) + ((-1.1 - -0.2) * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90))) + 3 * localPlayer.getFacingDirection()))), 8, Clip.NONE, null, Color.BLACK, ProgressWorldTextReeval.VISIBILITY_POSITION_VALUES_AND_COLOR, SpecVisibility.NEVER)
    #abi1
    createInWorldText(localPlayer, localPlayer.Abi1Hud, updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.515 * worldVector(Vector.RIGHT, localPlayer, Transform.ROTATION) + ((-0.84 - 0.2) * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90))) + 3 * localPlayer.getFacingDirection()))), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, Color.WHITE, SpecVisibility.NEVER)
    #abi2
    createInWorldText(localPlayer, localPlayer.Abi2Hud, updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.73 * worldVector(Vector.RIGHT, localPlayer, Transform.ROTATION) + ((-0.84 - 0.2) * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90))) + 3 * localPlayer.getFacingDirection()))), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, Color.WHITE, SpecVisibility.NEVER)
    #secondary
    createInWorldText(localPlayer, localPlayer.SecoHud, updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.948 * worldVector(Vector.RIGHT, localPlayer, Transform.ROTATION) + ((-0.84 - 0.2) * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90))) + 3 * localPlayer.getFacingDirection()))), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, Color.WHITE, SpecVisibility.NEVER)
    #ulti
    createInWorldText(localPlayer, "{0}".format(abilityIconString(getPlayersInSlot(3, localPlayer.getTeam()).getHero(), Button.ULTIMATE)), updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.005 * worldVector(Vector.RIGHT, localPlayer, Transform.ROTATION) + (-2.04 * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90))) + 3 * localPlayer.getFacingDirection()))), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, Color.WHITE, SpecVisibility.NEVER)


rule "Abi 1 Hud: Cooldown":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.Abi1CD != 0
    
    eventPlayer.Abi1Hud = ceil(eventPlayer.Abi1CD)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Abi 1 Hud: Icon cd 0":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.Abi1CD == 0
    
    stopChasingVariable(eventPlayer.Abi1CD)
    eventPlayer.Abi1Hud = abilityIconString(getPlayersInSlot(1, eventPlayer.getTeam()).getHero(), Button.ABILITY_1)


rule "Abi 2 Hud: Cooldown":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.Abi2CD != 0
    
    eventPlayer.Abi2Hud = ceil(eventPlayer.Abi2CD)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Abi 2 Hud: Icon cd 0":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.Abi2CD == 0
    
    stopChasingVariable(eventPlayer.Abi2CD)
    eventPlayer.Abi2Hud = abilityIconString(getPlayersInSlot(2, eventPlayer.getTeam()).getHero(), Button.ABILITY_2)


rule "Seco Hud: Cooldown":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.SecoCD != 0
    
    eventPlayer.SecoHud = ceil(eventPlayer.SecoCD)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Seco Hud: Icon cd 0":
    @Event eachPlayer
    @Slot 0
    @Condition eventPlayer.SecoCD == 0
    
    stopChasingVariable(eventPlayer.SecoCD)
    eventPlayer.SecoHud = abilityIconString(getPlayersInSlot(4, eventPlayer.getTeam()).getHero(), Button.SECONDARY_FIRE)


