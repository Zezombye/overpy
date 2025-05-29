settings {
    "main": {
        "description": "1v1 Arena v3.1 by Seita, 14 Hero rotation, Bot will spawn if you are alone. Winner stays(or moves up), First to 50 points, Points per Elimination varies depending on the arena, To win you need to get the final elimination on Arena 1.",
        "modeName": "1v1 Arena"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "ffaSlots": 8,
        "spectatorSlots": 12,
        "returnToLobby": "never"
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                "lijiangControlCenter"
            ]
        },
        "general": {
            "gamemodeStartTrigger": "immediately",
            "enableKillCam": false,
            "scoreToWin": 50,
            "enableSelfInitiatedRespawn": false,
            "spawnHealthPacks": "disabled"
        }
    },
    "heroes": {
        "allTeams": {
            "ashe": {
                "ultDuration%": 50
            },
            "baptiste": {
                "enableAbility2": false
            },
            "brigitte": {
                "healingDealt%": 50,
                "jumpVerticalSpeed%": 175,
                "movementSpeed%": 130
            },
            "dva": {
                "health%": 64
            },
            "doomfist": {
                "health%": 80
            },
            "genji": {
                "ultDuration%": 75
            },
            "illari": {
                "enableAbility2": false
            },
            "junkerQueen": {
                "ability1Cooldown%": 200,
                "healingReceived%": 50,
                "health%": 80
            },
            "lifeweaver": {
                "ultHealth%": 50
            },
            "lucio": {
                "enableAbility1": false,
                "damageDealt%": 130,
                "health%": 120
            },
            "mauga": {
                "healingReceived%": 10,
                "health%": 64
            },
            "mei": {
                "healingDealt%": 40,
                "health%": 85
            },
            "mercy": {
                "damageDealt%": 120,
                "jumpVerticalSpeed%": 250,
                "movementSpeed%": 150
            },
            "moira": {
                "ability2MaxHealing%": 50,
                "healingReceived%": 50
            },
            "orisa": {
                "ability1Cooldown%": 200,
                "health%": 64
            },
            "pharah": {
                "ability2Cooldown%": 200
            },
            "ramattra": {
                "health%": 92,
                "ability1Cooldown%": 200,
                "enableSecondaryFire": false
            },
            "reaper": {
                "healingDealt%": 25,
                "health%": 85,
                "movementSpeed%": 125
            },
            "reinhardt": {
                "damageDealt%": 80,
                "health%": 74,
                "jumpVerticalSpeed%": 175,
                "movementSpeed%": 140
            },
            "roadhog": {
                "healingDealt%": 50,
                "health%": 59,
                "secondaryFireMaximumTime%": 50,
                "secondaryFireRechargeRate%": 50
            },
            "sigma": {
                "health%": 75
            },
            "soldier": {
                "ultDuration%": 75
            },
            "symmetra": {
                "enableAbility1": false
            },
            "torbjorn": {
                "enableAbility1": false
            },
            "widowmaker": {
                "ability1Cooldown%": 30,
                "health%": 125
            },
            "winston": {
                "ability2Cooldown%": 200,
                "health%": 74,
                "ultDuration%": 50
            },
            "wreckingBall": {
                "ability2Cooldown%": 200,
                "health%": 64
            },
            "zarya": {
                "health%": 88,
                "ability1Cooldown%": 200,
                "ability2Cooldown%": 200
            },
            "enabledHeroes": [
                "ana",
                "ashe",
                "baptiste",
                "cassidy",
                "echo",
                "genji",
                "hanzo",
                "illari",
                "kiriko",
                "sojourn",
                "soldier",
                "tracer",
                "widowmaker",
                "zenyatta"
            ],
            "general": {
                "combatUltGen%": 200,
                "passiveUltGen%": 0
            }
        }
    }
}

#Global variables

globalvar MainCenter 0
globalvar MainHigh 1
globalvar MainTopDeck 2
globalvar SideArenaCenter 3
globalvar SideArenaSpawnsFacing 4
globalvar MainFacing 5
globalvar HeroList 6
globalvar FirstMatch 7
globalvar MainSpawnDetLoc 8
globalvar MainTopSpawn 9
globalvar BurnDamage 10
globalvar MainOppositeSpawn 11
globalvar IntroHud 12
globalvar BotDifSelect 13
globalvar MainDeckSpawn 14
globalvar GameLoaded 15
globalvar MainDefaultSpawn 16
globalvar AllHeroesMode 17
globalvar ScorePerWin 18
globalvar SpecSpot2 20
globalvar SpecSpot 21
globalvar Arena1Q 22
globalvar Arena2Q 23
globalvar Arena3Q 24
globalvar Arena1Match 26
globalvar Arena2Match 27
globalvar Arena3Match 28
globalvar Roadhog 29
globalvar Sigma 30
globalvar Winston 31
globalvar WreckingBall 32
globalvar Zarya 33
globalvar Ashe 34
globalvar Bastion 35
globalvar Doomfist 36
globalvar Echo 37
globalvar Genji 38
globalvar Hanzo 39
globalvar Junkrat 40
globalvar Cassidy 41
globalvar Mei 42
globalvar Pharah 43
globalvar Reaper 44
globalvar Soldier 45
globalvar Sombra 46
globalvar Torb 48
globalvar Tracer 49
globalvar Widow 50
globalvar Ana 51
globalvar Baptiste 52
globalvar Brigitte 53
globalvar Lucio 54
globalvar Mercy 55
globalvar Moira 56
globalvar Zenyatta 57
globalvar Dva 59
globalvar Orisa 60
globalvar Reinhardt 61
globalvar HostHasDifferentheroes 65
globalvar BotDifHud 66
globalvar Roadhog2 70
globalvar Sigma2 71
globalvar Winston2 72
globalvar WreckingBall2 73
globalvar Zarya2 74
globalvar Ashe2 75
globalvar Bastion2 76
globalvar Doomfist2 77
globalvar Echo2 78
globalvar Genji2 79
globalvar Hanzo2 80
globalvar Junkrat2 81
globalvar Cassidy2 82
globalvar Mei2 83
globalvar Pharah2 84
globalvar Reaper2 85
globalvar Soldier2 86
globalvar Sombra2 87
globalvar Torb2 88
globalvar Tracer2 89
globalvar Widow2 90
globalvar Ana2 91
globalvar Baptiste2 92
globalvar Brigitte2 93
globalvar Lucio2 94
globalvar Mercy2 95
globalvar Moira2 96
globalvar Zenyatta2 97
globalvar Dva2 98
globalvar Orisa2 99
globalvar Reinhardt2 100
globalvar HeroList2 102
globalvar AlwaysRefreshHero 103
globalvar JunkerQueen 104
globalvar Kiriko 105
globalvar Ramattra 106
globalvar Sojourn 107
globalvar JunkerQueen2 108
globalvar Kiriko2 109
globalvar Ramattra2 110
globalvar Sojourn2 111
globalvar Lifeweaver 112
globalvar Lifeweaver2 113
globalvar Control 114
globalvar Illari 115
globalvar Illari2 116
globalvar Mauga 117
globalvar Mauga2 118
globalvar HeroSelect 119
globalvar Venture 120
globalvar Venture2 121
globalvar HeroModifier 122
globalvar NoFlyHeroes 123
globalvar Juno 124
globalvar Juno2 125
globalvar Freja 126
globalvar Freja2 127


#Player variables

playervar OneHeroPlayerVariable 0
playervar Randomizer 2
playervar Spectating 3
playervar DeadHelper 4
playervar Hud 7
playervar JoinSpecHelper 9
playervar HeroList 11
playervar HeroNumber 13
playervar Score 18
playervar UltCharge 20
playervar BotControl 25
playervar AntiHealDebuffed 26
playervar LockedHero 27
playervar TargetNumber 28
playervar PlayerHiding 29
playervar BotPathing 30
playervar BotHelpPositions 31
playervar BotMovePositions 32
playervar BotShoot 33
playervar BotLeft 34
playervar BotRight 35
playervar ShootRando 36
playervar ShootPos 37
playervar ZenAim 38
playervar ShootPosHelp 39
playervar BotStayTimer 40
playervar BotSoldRun 41
playervar BotSleepDartHit 42
playervar BotSojRail 43
playervar BotTracerRecall 44
playervar Control 45
playervar BotTracerFirstBlink 46
playervar BotZoom 47
playervar BotStrafe 48
playervar BotCassDif 49
playervar BotDifficulty 50
playervar BotKiriHeal 51


#Subroutine names

subroutine SpawnLocationCheck 0
subroutine ZenAim 5
subroutine BotHeroList 6


rule "Workshop Settings":
    disableInspector()
    Dva = createWorkshopSettingBool("6. Tank heroes", "Dva", false, 3)
    Mauga = createWorkshopSettingBool("6. Tank heroes", "Mauga", false, 3)
    Orisa = createWorkshopSettingBool("6. Tank heroes", "Orisa", false, 3)
    Reinhardt = createWorkshopSettingBool("6. Tank heroes", "Reinhardt", false, 3)
    Roadhog = createWorkshopSettingBool("6. Tank heroes", "Roadhog", false, 3)
    Sigma = createWorkshopSettingBool("6. Tank heroes", "Sigma", false, 3)
    Winston = createWorkshopSettingBool("6. Tank heroes", "Winston", false, 3)
    WreckingBall = createWorkshopSettingBool("6. Tank heroes", "Wrecking Ball", false, 3)
    Zarya = createWorkshopSettingBool("6. Tank heroes", "Zarya", false, 3)
    Doomfist = createWorkshopSettingBool("6. Tank heroes", "Doomfist", false, 3)
    Ramattra = createWorkshopSettingBool("6. Tank heroes", "Ramattra", false, 3)
    JunkerQueen = createWorkshopSettingBool("6. Tank heroes", "JunkerQueen", false, 3)
    Ashe = createWorkshopSettingBool("6. Damage heroes", "Ashe", true, 1)
    Bastion = createWorkshopSettingBool("6. Damage heroes", "Bastion", false, 1)
    Sojourn = createWorkshopSettingBool("6. Damage heroes", "Sojourn", true, 1)
    Echo = createWorkshopSettingBool("6. Damage heroes", "Echo", true, 1)
    Genji = createWorkshopSettingBool("6. Damage heroes", "Genji", true, 1)
    Hanzo = createWorkshopSettingBool("6. Damage heroes", "Hanzo", true, 1)
    Junkrat = createWorkshopSettingBool("6. Damage heroes", "Junkrat", false, 1)
    Cassidy = createWorkshopSettingBool("6. Damage heroes", "Cassidy", true, 1)
    Mei = createWorkshopSettingBool("6. Damage heroes", "Mei", false, 1)
    Pharah = createWorkshopSettingBool("6. Damage heroes", "Pharah", false, 1)
    Reaper = createWorkshopSettingBool("6. Damage heroes", "Reaper", false, 1)
    Soldier = createWorkshopSettingBool("6. Damage heroes", "Soldier 76", true, 1)
    Sombra = createWorkshopSettingBool("6. Damage heroes", "Sombra", false, 1)
    Torb = createWorkshopSettingBool("6. Damage heroes", "Torbjörn", false, 1)
    Tracer = createWorkshopSettingBool("6. Damage heroes", "Tracer", true, 1)
    Widow = createWorkshopSettingBool("6. Damage heroes", "Widowmaker", true, 1)
    Venture = createWorkshopSettingBool("6. Damage heroes", "Venture", false, 1)
    Ana = createWorkshopSettingBool("6. Support heroes", "Ana", true, 2)
    Kiriko = createWorkshopSettingBool("6. Support heroes", "Kiriko", true, 2)
    Baptiste = createWorkshopSettingBool("6. Support heroes", "Baptiste", true, 2)
    Brigitte = createWorkshopSettingBool("6. Support heroes", "Brigitte", false, 2)
    Lucio = createWorkshopSettingBool("6. Support heroes", "Lúcio", false, 2)
    Mercy = createWorkshopSettingBool("6. Support heroes", "Mercy", false, 2)
    Moira = createWorkshopSettingBool("6. Support heroes", "Moira", false, 2)
    Lifeweaver = createWorkshopSettingBool("6. Support heroes", "Lifeweaver", false, 2)
    Zenyatta = createWorkshopSettingBool("6. Support heroes", "Zenyatta", true, 2)
    Illari = createWorkshopSettingBool("6. Support heroes", "Illari", true, 2)
    BurnDamage = createWorkshopSettingInt("5. Burn Damage", "Damage per tick", 25, 25, 200)
    AlwaysRefreshHero = createWorkshopSettingBool("3. Always refresh hero (cooldowns, shield, etc) after winning on arena 1", "Refresh hero after winning on arena 1", false)
    HostHasDifferentheroes = createWorkshopSettingBool("4. Special settings for mode where players have different list of heroes", "Host player has different list of heroes", false)
    Mauga2 = createWorkshopSettingBool("7. Host only Tank heroes", "Mauga.", false, 7)
    Dva2 = createWorkshopSettingBool("7. Host only Tank heroes", "Dva.", false, 7)
    Orisa2 = createWorkshopSettingBool("7. Host only Tank heroes", "Orisa.", false, 7)
    Reinhardt2 = createWorkshopSettingBool("7. Host only Tank heroes", "Reinhardt.", false, 7)
    Roadhog2 = createWorkshopSettingBool("7. Host only Tank heroes", "Roadhog.", false, 7)
    Sigma2 = createWorkshopSettingBool("7. Host only Tank heroes", "Sigma.", false, 7)
    Winston2 = createWorkshopSettingBool("7. Host only Tank heroes", "Winston.", false, 7)
    WreckingBall2 = createWorkshopSettingBool("7. Host only Tank heroes", "Wrecking Ball.", false, 7)
    Zarya2 = createWorkshopSettingBool("7. Host only Tank heroes", "Zarya.", false, 7)
    Doomfist2 = createWorkshopSettingBool("7. Host only Tank heroes", "Doomfist.", false, 7)
    Ramattra2 = createWorkshopSettingBool("7. Host only Tank heroes", "Ramattra.", false, 7)
    JunkerQueen2 = createWorkshopSettingBool("7. Host only Tank heroes", "JunkerQueen.", false, 7)
    Ashe2 = createWorkshopSettingBool("7. Host only Damage heroes", "Ashe.", true, 5)
    Bastion2 = createWorkshopSettingBool("7. Host only Damage heroes", "Bastion.", false, 5)
    Sojourn2 = createWorkshopSettingBool("7. Host only Damage heroes", "Sojourn.", true, 5)
    Echo2 = createWorkshopSettingBool("7. Host only Damage heroes", "Echo.", true, 5)
    Genji2 = createWorkshopSettingBool("7. Host only Damage heroes", "Genji.", true, 5)
    Hanzo2 = createWorkshopSettingBool("7. Host only Damage heroes", "Hanzo.", true, 5)
    Junkrat2 = createWorkshopSettingBool("7. Host only Damage heroes", "Junkrat.", false, 5)
    Cassidy2 = createWorkshopSettingBool("7. Host only Damage heroes", "Cassidy.", true, 5)
    Mei2 = createWorkshopSettingBool("7. Host only Damage heroes", "Mei.", false, 5)
    Pharah2 = createWorkshopSettingBool("7. Host only Damage heroes", "Pharah.", false, 5)
    Reaper2 = createWorkshopSettingBool("7. Host only Damage heroes", "Reaper.", false, 5)
    Soldier2 = createWorkshopSettingBool("7. Host only Damage heroes", "Soldier 76.", true, 5)
    Sombra2 = createWorkshopSettingBool("7. Host only Damage heroes", "Sombra.", false, 5)
    Torb2 = createWorkshopSettingBool("7. Host only Damage heroes", "Torbjörn.", false, 5)
    Tracer2 = createWorkshopSettingBool("7. Host only Damage heroes", "Tracer.", true, 5)
    Widow2 = createWorkshopSettingBool("7. Host only Damage heroes", "Widowmaker.", true, 5)
    Venture2 = createWorkshopSettingBool("7. Host only Damage heroes", "Venture.", false, 5)
    Ana2 = createWorkshopSettingBool("7. Host only support heroes", "Ana.", true, 6)
    Kiriko2 = createWorkshopSettingBool("7. Host only support heroes", "Kiriko.", true, 6)
    Baptiste2 = createWorkshopSettingBool("7. Host only support heroes", "Baptiste.", true, 6)
    Brigitte2 = createWorkshopSettingBool("7. Host only support heroes", "Brigitte.", false, 6)
    Lucio2 = createWorkshopSettingBool("7. Host only support heroes", "Lúcio.", false, 6)
    Mercy2 = createWorkshopSettingBool("7. Host only support heroes", "Mercy.", false, 6)
    Moira2 = createWorkshopSettingBool("7. Host only support heroes", "Moira.", false, 6)
    Lifeweaver2 = createWorkshopSettingBool("7. Host only support heroes", "Lifeweaver.", false, 6)
    Zenyatta2 = createWorkshopSettingBool("7. Host only support heroes", "Zenyatta.", true, 6)
    Illari2 = createWorkshopSettingBool("7. Host only support heroes", "Illari.", true, 6)
    HeroSelect = createWorkshopSettingBool("2. Players can select and only play one hero", "Enable option to select and lock hero for individual players by holding reload", false)
    BotDifSelect = createWorkshopSettingEnum("1. Bot difficulty", "Dynamic difficulty = Bot starts at diamond and changes depending on how you do", 0, ["Dynamic difficulty", "Gold", "Platinum", "Diamond", "Master", "Champion"])
    AllHeroesMode = createWorkshopSettingBool(" All heroes enabled", "Enables all heroes with some modifiers and changes the scoring system", false)
    Freja = createWorkshopSettingBool("6. Damage heroes", "Freja", false, 1)
    Juno = createWorkshopSettingBool("6. Support heroes", "Juno", false, 2)
    Freja2 = createWorkshopSettingBool("7. Host only Damage heroes", "Freja.", false, 5)
    Juno2 = createWorkshopSettingBool("7. Host only support heroes", "Juno.", false, 6)


rule "Remove Assembling":
    @Condition isAssemblingHeroes() == true

    setMatchTime(0)
    hudSubheader(getAllPlayers(), " \n \n \n ", HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "All heroes mode setup, hero text, no fly list, hero list, score per win":
    @Condition AllHeroesMode == true

    HeroModifier[getAllHeroes().index(Hero.CASSIDY)] = "default"
    HeroModifier[getAllHeroes().index(Hero.ANA)] = "default"
    HeroModifier[getAllHeroes().index(Hero.ZENYATTA)] = "default"
    HeroModifier[getAllHeroes().index(Hero.TRACER)] = "default"
    HeroModifier[getAllHeroes().index(Hero.KIRIKO)] = "default"
    HeroModifier[getAllHeroes().index(Hero.SOJOURN)] = "default"
    HeroModifier[getAllHeroes().index(Hero.JUNKRAT)] = "default"
    HeroModifier[getAllHeroes().index(Hero.HANZO)] = "default"
    HeroModifier[getAllHeroes().index(Hero.BASTION)] = "default"
    HeroModifier[getAllHeroes().index(Hero.LIFEWEAVER)] = "default"
    HeroModifier[getAllHeroes().index(Hero.PHARAH)] = "longer conc cd, can't fly high vs some heroes"
    HeroModifier[getAllHeroes().index(Hero.ECHO)] = "ult dura 50%, can't fly high vs some heroes"
    HeroModifier[getAllHeroes().index(Hero.ASHE)] = "ult dura 50%"
    HeroModifier[getAllHeroes().index(Hero.SOLDIER)] = "ult dura 75%"
    HeroModifier[getAllHeroes().index(Hero.GENJI)] = "ult dura 75%"
    HeroModifier[getAllHeroes().index(Hero.BAPTISTE)] = "no drone"
    HeroModifier[getAllHeroes().index(Hero.ILLARI)] = "no pylon"
    HeroModifier[getAllHeroes().index(Hero.TORBJORN)] = "no turret"
    HeroModifier[getAllHeroes().index(Hero.SYMMETRA)] = "no sentries"
    HeroModifier[getAllHeroes().index(Hero.SOMBRA)] = "invis breaks after 5s"
    HeroModifier[getAllHeroes().index(Hero.VENTURE)] = "no shields over 250hp"
    HeroModifier[getAllHeroes().index(Hero.MOIRA)] = "healing 50%, heal orb 50%"
    HeroModifier[getAllHeroes().index(Hero.BRIGITTE)] = "healing 50%, speed 130%, big jump"
    HeroModifier[getAllHeroes().index(Hero.MERCY)] = "big jump, 150% speed, 120% dmg"
    HeroModifier[getAllHeroes().index(Hero.REAPER)] = "255hp, 125% speed, 25% healing"
    HeroModifier[getAllHeroes().index(Hero.WIDOWMAKER)] = "250hp, low cd grapple"
    HeroModifier[getAllHeroes().index(Hero.MEI)] = "255hp, 40% healing"
    HeroModifier[getAllHeroes().index(Hero.LUCIO)] = "300hp, 130% dmg, no heal aura"
    HeroModifier[getAllHeroes().index(Hero.DOOMFIST)] = "300hp, no health over 300"
    HeroModifier[getAllHeroes().index(Hero.JUNKER_QUEEN)] = "300hp, 50% healing, longer shout cd"
    HeroModifier[getAllHeroes().index(Hero.REINHARDT)] = "407hp, 80% dmg, 140% speed, big jump, can only shield for 1s"
    HeroModifier[getAllHeroes().index(Hero.RAMATTRA)] = "345hp, no shield, longer form cd"
    HeroModifier[getAllHeroes().index(Hero.DVA)] = "368hp"
    HeroModifier[getAllHeroes().index(Hero.MAUGA)] = "368hp, 10% healing"
    HeroModifier[getAllHeroes().index(Hero.ORISA)] = "304hp, longer fortify cd"
    HeroModifier[getAllHeroes().index(Hero.ROADHOG)] = "354hp, 50% healing"
    HeroModifier[getAllHeroes().index(Hero.SIGMA)] = "356hp, 1.2s shield dura, no hp over 356"
    HeroModifier[getAllHeroes().index(Hero.WINSTON)] = "352hp, longer barrier cd, ult dura 50%"
    HeroModifier[getAllHeroes().index(Hero.WRECKING_BALL)] = "400hp, longer shield cd"
    HeroModifier[getAllHeroes().index(Hero.ZARYA)] = "352hp, longer bubble cd"
    NoFlyHeroes = Hero.BRIGITTE
    NoFlyHeroes.append(getTankHeroes())
    NoFlyHeroes.remove(Hero.DVA)
    NoFlyHeroes.append(Hero.REAPER)
    NoFlyHeroes.append(Hero.SYMMETRA)
    NoFlyHeroes.append(Hero.VENTURE)
    NoFlyHeroes.append(Hero.LUCIO)
    NoFlyHeroes.append(Hero.LIFEWEAVER)
    NoFlyHeroes.append(Hero.MOIRA)
    NoFlyHeroes.append(Hero.TORBJORN)
    NoFlyHeroes.append(Hero.JUNKRAT)
    HeroList = getAllHeroes()
    ScorePerWin[1] = 50 / len(getAllHeroes())
    ScorePerWin[2] = 50 / len(getAllHeroes()) / 1.5
    ScorePerWin[3] = 50 / len(getAllHeroes()) / 3


rule "Creating Herolist and Herolist2 if different heroes enabled, score per win":
    @Condition AllHeroesMode == false

    if Juno == true:
        HeroList.append(Hero.JUNO)
    if Freja == true:
        HeroList.append(Hero.FREJA)
    if Dva == true:
        HeroList.append(Hero.DVA)
    if Mauga == true:
        HeroList.append(Hero.MAUGA)
    if Orisa == true:
        HeroList.append(Hero.ORISA)
    if Reinhardt == true:
        HeroList.append(Hero.REINHARDT)
    if Roadhog == true:
        HeroList.append(Hero.ROADHOG)
    if Sigma == true:
        HeroList.append(Hero.SIGMA)
    if Winston == true:
        HeroList.append(Hero.WINSTON)
    if WreckingBall == true:
        HeroList.append(Hero.WRECKING_BALL)
    if Zarya == true:
        HeroList.append(Hero.ZARYA)
    if Ashe == true:
        HeroList.append(Hero.ASHE)
    if Bastion == true:
        HeroList.append(Hero.BASTION)
    if Doomfist == true:
        HeroList.append(Hero.DOOMFIST)
    if Echo == true:
        HeroList.append(Hero.ECHO)
    if Genji == true:
        HeroList.append(Hero.GENJI)
    if Hanzo == true:
        HeroList.append(Hero.HANZO)
    if Junkrat == true:
        HeroList.append(Hero.JUNKRAT)
    if Cassidy == true:
        HeroList.append(Hero.CASSIDY)
    if Mei == true:
        HeroList.append(Hero.MEI)
    if Pharah == true:
        HeroList.append(Hero.PHARAH)
    if Reaper == true:
        HeroList.append(Hero.REAPER)
    if Soldier == true:
        HeroList.append(Hero.SOLDIER)
    if Sombra == true:
        HeroList.append(Hero.SOMBRA)
    if Torb == true:
        HeroList.append(Hero.TORBJORN)
    if Tracer == true:
        HeroList.append(Hero.TRACER)
    if Widow == true:
        HeroList.append(Hero.WIDOWMAKER)
    if Ana == true:
        HeroList.append(Hero.ANA)
    if Baptiste == true:
        HeroList.append(Hero.BAPTISTE)
    if Brigitte == true:
        HeroList.append(Hero.BRIGITTE)
    if Lucio == true:
        HeroList.append(Hero.LUCIO)
    if Mercy == true:
        HeroList.append(Hero.MERCY)
    if Moira == true:
        HeroList.append(Hero.MOIRA)
    if JunkerQueen == true:
        HeroList.append(Hero.JUNKER_QUEEN)
    if Ramattra == true:
        HeroList.append(Hero.RAMATTRA)
    if Kiriko == true:
        HeroList.append(Hero.KIRIKO)
    if Sojourn == true:
        HeroList.append(Hero.SOJOURN)
    if Zenyatta == true:
        HeroList.append(Hero.ZENYATTA)
    if Lifeweaver == true:
        HeroList.append(Hero.LIFEWEAVER)
    if Illari == true:
        HeroList.append(Hero.ILLARI)
    if Venture == true:
        HeroList.append(Hero.VENTURE)
    del HeroList[0]
    if HostHasDifferentheroes == true:
        if Dva2 == true:
            HeroList2.append(Hero.DVA)
        if Mauga2 == true:
            HeroList2.append(Hero.MAUGA)
        if Orisa2 == true:
            HeroList2.append(Hero.ORISA)
        if Reinhardt2 == true:
            HeroList2.append(Hero.REINHARDT)
        if Roadhog2 == true:
            HeroList2.append(Hero.ROADHOG)
        if Sigma2 == true:
            HeroList2.append(Hero.SIGMA)
        if Winston2 == true:
            HeroList2.append(Hero.WINSTON)
        if WreckingBall2 == true:
            HeroList2.append(Hero.WRECKING_BALL)
        if Zarya2 == true:
            HeroList2.append(Hero.ZARYA)
        if Ashe2 == true:
            HeroList2.append(Hero.ASHE)
        if Bastion2 == true:
            HeroList2.append(Hero.BASTION)
        if Doomfist2 == true:
            HeroList2.append(Hero.DOOMFIST)
        if Echo2 == true:
            HeroList2.append(Hero.ECHO)
        if Genji2 == true:
            HeroList2.append(Hero.GENJI)
        if Hanzo2 == true:
            HeroList2.append(Hero.HANZO)
        if Junkrat2 == true:
            HeroList2.append(Hero.JUNKRAT)
        if Cassidy2 == true:
            HeroList2.append(Hero.CASSIDY)
        if Mei2 == true:
            HeroList2.append(Hero.MEI)
        if Pharah2 == true:
            HeroList2.append(Hero.PHARAH)
        if Reaper2 == true:
            HeroList2.append(Hero.REAPER)
        if Soldier2 == true:
            HeroList2.append(Hero.SOLDIER)
        if Sombra2 == true:
            HeroList2.append(Hero.SOMBRA)
        if Torb2 == true:
            HeroList2.append(Hero.TORBJORN)
        if Tracer2 == true:
            HeroList2.append(Hero.TRACER)
        if Widow2 == true:
            HeroList2.append(Hero.WIDOWMAKER)
        if Ana2 == true:
            HeroList2.append(Hero.ANA)
        if Baptiste2 == true:
            HeroList2.append(Hero.BAPTISTE)
        if Brigitte2 == true:
            HeroList2.append(Hero.BRIGITTE)
        if Lucio2 == true:
            HeroList2.append(Hero.LUCIO)
        if Mercy2 == true:
            HeroList2.append(Hero.MERCY)
        if Moira2 == true:
            HeroList2.append(Hero.MOIRA)
        if JunkerQueen2 == true:
            HeroList2.append(Hero.JUNKER_QUEEN)
        if Kiriko2 == true:
            HeroList2.append(Hero.KIRIKO)
        if Ramattra2 == true:
            HeroList2.append(Hero.RAMATTRA)
        if Sojourn2 == true:
            HeroList2.append(Hero.SOJOURN)
        if Zenyatta2 == true:
            HeroList2.append(Hero.ZENYATTA)
        if Illari2 == true:
            HeroList2.append(Hero.ILLARI)
        if Venture2 == true:
            HeroList2.append(Hero.VENTURE)
        if Juno2 == true:
            HeroList2.append(Hero.JUNO)
        if Freja2 == true:
            HeroList2.append(Hero.FREJA)
        del HeroList2[0]
    ScorePerWin[1] = 3
    ScorePerWin[2] = 2
    ScorePerWin[3] = 1


rule "Disable Scoring, Intro hud, Arena Locations, Spawn Loc, Spawn detect":
    disableScoring()
    hudText(getAllPlayers(), "Code: TXCXX", "twitter.com/Seita_ow", "Full details: workshop.codes/1v1arena", HudPosition.TOP, 22, Color.ORANGE, Color.BLUE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    IntroHud = getLastCreatedText()
    #Arena locations
    MainCenter = vect(0, 267, 280)
    MainHigh = vect(0, 280, 280)
    MainTopDeck = vect(0, 279.5, 295.5)
    MainFacing = vect(0, 268.5, 280)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, MainCenter, 16.7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, MainTopDeck, 2.61, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    SpecSpot = vect(13.366, 285, 279.711)
    SpecSpot2 = vect(-13.672, 285, 279.735)
    #Spawn Locations
    MainDefaultSpawn = vect(-0.087, 268, 267.986)
    MainOppositeSpawn = vect(11, 268, 276.2)
    MainOppositeSpawn.append(vect(-11, 268, 276.2))
    MainTopSpawn = vect(7.923, 268, 273.866)
    MainTopSpawn.append(vect(0.004, 268, 276.965))
    MainTopSpawn.append(vect(-7.771, 268, 273.383))
    MainDeckSpawn = vect(9.486, 268, 280.02)
    MainDeckSpawn.append(vect(-0.005, 268, 283.035))
    MainDeckSpawn.append(vect(-9.486, 268, 280.02))
    #Spawn detection locations
    MainSpawnDetLoc[0] = vect(0.198, 271.351, 302.477)
    MainSpawnDetLoc[1] = vect(0.147, 271.348, 266.101)
    MainSpawnDetLoc[2] = vect(20.349, 268.349, 281.046)
    MainSpawnDetLoc[3] = vect(-20.35, 268.349, 281.009)
    #Arena 2
    SideArenaCenter = vect(-41.832, 260, 344.857)
    SideArenaCenter.append(vect(-41.832, 270, 344.857))
    SideArenaSpawnsFacing = vect(-50.464, 268.667, 351.671)
    SideArenaSpawnsFacing.append(vect(-31.82, 268.549, 332.737))
    SideArenaSpawnsFacing.append(vect(-38.715, 271.502, 343.17))
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, SideArenaCenter[0], 18, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Arena 3
    SideArenaCenter.append(vect(41.832, 260, 344.857))
    SideArenaCenter.append(vect(41.832, 270, 344.857))
    SideArenaSpawnsFacing.append(vect(50.464, 268.667, 351.671))
    SideArenaSpawnsFacing.append(vect(31.82, 268.549, 332.737))
    SideArenaSpawnsFacing.append(vect(38.715, 271.502, 343.17))
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.BLUE, SideArenaCenter[2], 18, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "Game is in Progress:   Pause Match Time, Sort Queue, Destroy IntroHud":
    @Condition isGameInProgress() == true

    #respawn as random heroes [off]
    wait(8)
    pauseMatchTime()
    setMatchTime(1220)
    if getNumberOfPlayers(Team.ALL) >= 4 and getNumberOfPlayers(Team.ALL) <= 5:
        for Control in range(getNumberOfPlayers(Team.ALL), 2, -1):
            Arena2Q.append(Arena1Q[Control])
            del Arena1Q[Control]
    elif getNumberOfPlayers(Team.ALL) >= 6:
        for Control in range(getNumberOfPlayers(Team.ALL), 4, -1):
            Arena3Q.append(Arena1Q[Control])
            del Arena1Q[Control]
        for Control in range(4, 2, -1):
            Arena2Q.append(Arena1Q[Control])
            del Arena1Q[Control]
    if HeroSelect == true:
        hudSubheader(getAllPlayers(), "Host enabled hero locking\nHold '{0}' to change hero".format(inputBindingString(Button.RELOAD)), HudPosition.LEFT, 0, Color.GRAY, HudReeval.VISIBILITY_AND_STRING)
    destroyHudText(IntroHud)
    wait(0.5)
    GameLoaded = true


rule "Playing last hero:    Restart Hero List":
    @Event eachPlayer
    @Condition eventPlayer.HeroNumber == len(eventPlayer.HeroList)

    eventPlayer.HeroNumber = 0


rule "Player Joins:   Create hero list (Host/List check), Sort Queue, Spectating":
    @Event playerJoined

    eventPlayer.Hud = -1
    if eventPlayer.isDummy() == true:
        BotHeroList()
    else:
        #Create hero list
        if hostPlayer == eventPlayer and HostHasDifferentheroes == true:
            eventPlayer.HeroList = random.shuffle(HeroList2)
            eventPlayer.startForcingHero(eventPlayer.HeroList[eventPlayer.HeroNumber])
            if len(eventPlayer.HeroList) == 1:
                eventPlayer.OneHeroPlayerVariable = true
                eventPlayer.HeroList.append(eventPlayer.HeroList[0])
        else:
            eventPlayer.HeroList = random.shuffle(HeroList)
            eventPlayer.startForcingHero(eventPlayer.HeroList[eventPlayer.HeroNumber])
            if len(eventPlayer.HeroList) == 1:
                eventPlayer.OneHeroPlayerVariable = true
                eventPlayer.HeroList.append(eventPlayer.HeroList[0])
    #Put player to correct Queue
    if GameLoaded == true:
        if getNumberOfPlayers(Team.ALL) >= 0 and getNumberOfPlayers(Team.ALL) <= 3:
            Arena1Q.append(eventPlayer)
        elif getNumberOfPlayers(Team.ALL) >= 4 and getNumberOfPlayers(Team.ALL) <= 5:
            Arena2Q.append(eventPlayer)
        else:
            Arena3Q.append(eventPlayer)
    else:
        Arena1Q.append(eventPlayer)
    #Set spectating
    eventPlayer.Spectating = true
    wait(0.3)
    if eventPlayer.Spectating == false:
        goto lbl_0
    eventPlayer.JoinSpecHelper = true
    lbl_0:
    if eventPlayer.isDummy() == true:
        eventPlayer.startForcingHero(eventPlayer.HeroList[eventPlayer.HeroNumber])
    if AllHeroesMode == true:
        if eventPlayer.getHero() in getTankHeroes() == true:
            eventPlayer.startScalingSize(0.8, false)
        else:
            eventPlayer.startScalingSize(1, false)
        hudSubheader(eventPlayer, "{0}: {1}".format(heroIcon(eventPlayer.getHero()), HeroModifier[getAllHeroes().index(eventPlayer.getHero())]), HudPosition.LEFT, 10, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
        hudSubheader(eventPlayer, "help balance: dsc.gg/seita-ow", HudPosition.LEFT, 11, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
        #hudHeader(eventPlayer, "Beta", HudPosition.LEFT, 9, Color.ROSE, HudReeval.VISIBILITY_AND_STRING)


rule "Match ends:    Auto restart":
    @Event eachPlayer
    @Condition eventPlayer.getScore() >= 50

    wait(21)
    restartMatch()


rule "###   Spectating   ###":
    @Disabled
    @Delimiter



rule "Spectating before game is in progress":
    @Event eachPlayer
    @Condition eventPlayer.JoinSpecHelper == true

    eventPlayer.teleport(SpecSpot)
    eventPlayer.startForcingThrottle(0, 0, 0, 0, 0, 0)
    eventPlayer.setGravity(abs(0))
    eventPlayer.setMoveSpeed(abs(0))
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    eventPlayer.setDamageDealt(0)
    wait(0.5)
    if eventPlayer.Spectating == false:
        goto lbl_0
    eventPlayer.setFacing(localVector(MainFacing, eventPlayer, Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    lbl_0:


rule "Spectating:   Queue Hud, Teleport, Disallow etc":
    @Event eachPlayer
    @Condition eventPlayer.Spectating == true
    @Condition isGameInProgress() == true

    destroyHudText(eventPlayer.Hud)
    if eventPlayer in Arena1Q == true:
        hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena1Q.index(eventPlayer) - 2)), "Score per kill: {0}".format(ScorePerWin[1]), "Arena: 1", HudPosition.TOP, 2, Color.GREEN, Color.WHITE, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    elif eventPlayer in Arena2Q == true:
        if eventPlayer.Score + ScorePerWin[2] >= 50:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena2Q.index(eventPlayer) - 2)), "To win you need to get a kill in Arena 1", "Arena: 2", HudPosition.TOP, 2, Color.RED, Color.WHITE, Color.RED, HudReeval.VISIBILITY_AND_STRING)
        else:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena2Q.index(eventPlayer) - 2)), "Score per kill: {0}".format(ScorePerWin[2]), "Arena: 2", HudPosition.TOP, 2, Color.RED, Color.WHITE, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    elif eventPlayer in Arena3Q == true:
        if eventPlayer.Score + ScorePerWin[3] >= 50:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena3Q.index(eventPlayer) - 2)), "To win you need to get a kill in Arena 1", "Arena: 3", HudPosition.TOP, 2, Color.BLUE, Color.WHITE, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
        else:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena3Q.index(eventPlayer) - 2)), "Score per kill: {0}".format(ScorePerWin[3]), "Arena: 3", HudPosition.TOP, 2, Color.BLUE, Color.WHITE, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.Hud = getLastCreatedText()
    #Teleport, disallow etc
    eventPlayer.teleport(SpecSpot)
    eventPlayer.startForcingThrottle(0, 0, 0, 0, 0, 0)
    eventPlayer.setGravity(abs(0))
    eventPlayer.setMoveSpeed(abs(0))
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    eventPlayer.stopForcingButton(Button.ABILITY_1)
    eventPlayer.stopForcingButton(Button.ABILITY_2)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    eventPlayer.setDamageDealt(0)
    if eventPlayer.LockedHero == true:
        waitUntil(eventPlayer.getHero() == true, 99999)
        eventPlayer.teleport(SpecSpot)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.setFacing(localVector(MainFacing, eventPlayer, Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)


rule "Spectating:   You are next message & Sound":
    @Event eachPlayer
    @Condition eventPlayer.Spectating == true
    @Condition (Arena1Q[3] == eventPlayer or Arena2Q[3] == eventPlayer or Arena3Q[3] == eventPlayer) == true

    bigMessage(eventPlayer, "you are next")
    playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)


rule "Not Spectating:   Allow buttons, Destroy hud when game is in progress":
    @Event eachPlayer
    @Condition eventPlayer.Spectating == false

    eventPlayer.setGravity(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 0)
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 0)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 0)
    eventPlayer.setDamageDealt(100)
    eventPlayer.stopForcingThrottle()
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)
    eventPlayer.allowButton(Button.ABILITY_1)
    eventPlayer.allowButton(Button.ABILITY_2)
    eventPlayer.allowButton(Button.ULTIMATE)
    if eventPlayer.getHero() == Hero.TRACER:
        eventPlayer.setAbilityCooldown(Button.ABILITY_2, 3.5)
    elif eventPlayer.getHero() == Hero.WRECKING_BALL:
        eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 0)
    waitUntil(isGameInProgress(), 10)
    destroyHudText(eventPlayer.Hud)


rule "Player Dies:   Set Spectating and Change Hero":
    @Event playerDied
    @Condition isGameInProgress() == true

    if eventPlayer.isDummy() == true:
        eventPlayer.BotKiriHeal = false
        eventPlayer.ShootRando = eventPlayer.BotCassDif[0]
        eventPlayer.BotSojRail = 0
        eventPlayer.stopForcingButton(Button.CROUCH)
        eventPlayer.stopForcingButton(Button.JUMP)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.Spectating = true
    if eventPlayer.LockedHero == false:
        eventPlayer.UltCharge = eventPlayer.getUltCharge()
        eventPlayer.HeroNumber++
        wait(0.25)
        if eventPlayer.OneHeroPlayerVariable == true:
            eventPlayer.startForcingHero(Hero.SYMMETRA)
        eventPlayer.startForcingHero(eventPlayer.HeroList[eventPlayer.HeroNumber])
        wait(0.15)
        eventPlayer.setUltCharge(eventPlayer.UltCharge)
    else:
        if eventPlayer.getHero() == Hero.VENTURE:
            eventPlayer.setAmmo(0, 8)
        else:
            eventPlayer.setAmmo(0, eventPlayer.getMaxAmmo())
        eventPlayer.resurrect()
        eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0)
        eventPlayer.setAbilityCooldown(Button.ABILITY_2, 0)
        if eventPlayer.getHero() == Hero.TRACER:
            eventPlayer.setAbilityCharge(Button.ABILITY_1, 3)
    if AllHeroesMode == true:
        if eventPlayer.getHero() in getTankHeroes() == true:
            eventPlayer.startScalingSize(0.8, false)
        else:
            eventPlayer.startScalingSize(1, false)


rule "###   Match and Round Start   ###":
    @Disabled
    @Delimiter



def SpawnLocationCheck():
    @Name "Arena 1: Spawn Location subroutine"

    if distance(Arena1Q[1].getEyePosition(), MainSpawnDetLoc[2]) <= 19:
        MainDefaultSpawn = MainOppositeSpawn[1]
        #smallMessage(getAllPlayers(), "Attacker is Right")
    elif distance(Arena1Q[1].getEyePosition(), MainSpawnDetLoc[3]) <= 19:
        MainDefaultSpawn = MainOppositeSpawn[0]
        #smallMessage(getAllPlayers(), "Attacker is Left")
    elif distance(Arena1Q[1].getEyePosition(), MainSpawnDetLoc[0]) <= 15:
        MainDefaultSpawn = random.choice(MainTopSpawn)
        #smallMessage(getAllPlayers(), "Attacker is stairs / top")
    elif distance(Arena1Q[1].getEyePosition(), MainSpawnDetLoc[1]) <= 10:
        #smallMessage(getAllPlayers(), "Attacker is deck side")
        MainDefaultSpawn = random.choice(MainDeckSpawn)
    else:
        MainDefaultSpawn = random.choice(MainOppositeSpawn)
        #smallMessage(getAllPlayers(), "None / Mid / default spawn")


rule "Arena 1: First Match Start":
    @Condition isGameInProgress() == true
    @Condition GameLoaded == true
    @Condition Arena1Q[1] == true
    @Condition Arena1Q[2] == true
    @Condition Arena1Q[1].hasSpawned() == true
    @Condition Arena1Q[2].hasSpawned() == true
    @Condition Arena1Match == false
    @Condition FirstMatch == false

    Arena1Match = true
    wait(0.25)
    Arena1Q[1].teleport(MainOppositeSpawn[0])
    Arena1Q[2].teleport(MainOppositeSpawn[1])
    wait(0.05)
    Arena1Q[1].setFacing(localVector(MainFacing, Arena1Q[1], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    Arena1Q[2].setFacing(localVector(MainFacing, Arena1Q[2], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    wait(0.05)
    Arena1Q[1].Spectating = 0
    Arena1Q[2].Spectating = 0
    wait(0.3)
    heal(Arena1Q[1], null, 1000)
    heal(Arena1Q[2], null, 1000)
    Arena1Q[1].DeadHelper = false
    Arena1Q[2].DeadHelper = false
    FirstMatch = true
    if getPlayersInSlot(11, Team.ALL).isDummy() == true:
        getPlayersInSlot(11, Team.ALL).BotTracerFirstBlink = true


rule "Arena 1: Match Start":
    @Condition GameLoaded == true
    @Condition Arena1Q[1] == true
    @Condition Arena1Q[2] == true
    @Condition Arena1Match == false
    @Condition FirstMatch == true

    SpawnLocationCheck()
    wait(0.1)
    Arena1Q[2].teleport(MainDefaultSpawn)
    wait(0.05)
    Arena1Q[2].setFacing(localVector(MainFacing, Arena1Q[2], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    wait(0.05)
    Arena1Q[1].Spectating = false
    Arena1Q[2].Spectating = false
    wait(0.1)
    heal(Arena1Q[1], null, 1000)
    heal(Arena1Q[2], null, 1000)
    Arena1Q[1].DeadHelper = false
    Arena1Q[2].DeadHelper = false
    Arena1Match = true
    if getPlayersInSlot(11, Team.ALL).isDummy() == true:
        getPlayersInSlot(11, Team.ALL).BotTracerFirstBlink = true
    if ruleCondition:
        loop()


rule "Arena 2: Match Start":
    @Condition GameLoaded == true
    @Condition Arena2Q[1] == true
    @Condition Arena2Q[2] == true
    @Condition Arena2Match == false

    wait()
    Arena2Match = true
    wait(0.5)
    Arena2Q[1].teleport(SideArenaSpawnsFacing[0])
    Arena2Q[2].teleport(SideArenaSpawnsFacing[1])
    wait(0.05)
    Arena2Q[1].setFacing(localVector(SideArenaSpawnsFacing[2], Arena2Q[1], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    Arena2Q[2].setFacing(localVector(SideArenaSpawnsFacing[2], Arena2Q[2], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    wait(0.05)
    Arena2Q[1].Spectating = false
    Arena2Q[2].Spectating = false
    Arena2Q[1].DeadHelper = false
    Arena2Q[2].DeadHelper = false
    wait(0.3)
    heal(Arena2Q[1], null, 1000)
    heal(Arena2Q[2], null, 1000)
    if ruleCondition:
        loop()


rule "Arena 3: Match Start":
    @Condition GameLoaded == true
    @Condition Arena3Q[1] == true
    @Condition Arena3Q[2] == true
    @Condition Arena3Match == false

    wait()
    Arena3Match = true
    wait(0.5)
    Arena3Q[1].teleport(SideArenaSpawnsFacing[3])
    Arena3Q[2].teleport(SideArenaSpawnsFacing[4])
    wait(0.05)
    Arena3Q[1].setFacing(localVector(SideArenaSpawnsFacing[5], Arena3Q[1], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    Arena3Q[2].setFacing(localVector(SideArenaSpawnsFacing[5], Arena3Q[2], Transform.ROTATION_AND_TRANSLATION), Relativity.TO_PLAYER)
    wait(0.05)
    Arena3Q[1].Spectating = false
    Arena3Q[2].Spectating = false
    Arena3Q[1].DeadHelper = false
    Arena3Q[2].DeadHelper = false
    wait(0.3)
    heal(Arena3Q[1], null, 1000)
    heal(Arena3Q[2], null, 1000)
    if ruleCondition:
        loop()


rule "###   Player dies   ###":
    @Disabled
    @Delimiter



rule "Arena 1: Winner got ana naded":
    @Event playerTookDamage
    @Condition eventPlayer in Arena1Q == true
    @Condition eventPlayer.Spectating == false
    @Condition (attacker.getHero() == Hero.ANA and (eventDamage == 90 or eventDamage == 135)) == true

    eventPlayer.AntiHealDebuffed = true
    wait(3)
    eventPlayer.AntiHealDebuffed = false


rule "Arena 1: Player Dies":
    @Event playerDied
    @Condition (eventPlayer == Arena1Q[1] or eventPlayer == Arena1Q[2]) == true
    @Condition eventPlayer.DeadHelper == false

    eventPlayer.DeadHelper = true
    Arena1Q.remove(eventPlayer)
    if getNumberOfPlayers(Team.ALL) <= 3:
        Arena1Q.append(eventPlayer)
    else:
        Arena2Q.append(eventPlayer)
    eventPlayer.clearStatusEffect(Status.BURNING)
    #Arena1Q[1] = Winner
    if Arena1Q[1].getHero() == Hero.VENTURE:
        Arena1Q[1].setAmmo(0, 8)
    elif Arena1Q[1].getHero() == Hero.KIRIKO:
        Arena1Q[1].setAmmo(1, 15)
    elif Arena1Q[1].getHero() == Hero.RAMATTRA:
        Arena1Q[1].forceButtonPress(Button.RELOAD)
    elif Arena1Q[1].getHero() == Hero.ORISA:
        #Arena1Q[1].setAmmo(0, 8)
    elif Arena1Q[1].getHero() == Hero.LIFEWEAVER:
        Arena1Q[1].setAmmo(1, 80)
    elif Arena1Q[1].getHero() == Hero.MAUGA:
        Arena1Q[1].forceButtonPress(Button.RELOAD)
    else:
        Arena1Q[1].setAmmo(0, Arena1Q[1].getMaxAmmo())
        Arena1Q[1].setAmmo(1, Arena1Q[1].getMaxAmmo(1))
    heal(Arena1Q[1], null, 10000)
    Arena1Q[1].Score += ScorePerWin[1]
    Arena1Q[1].setScore(Arena1Q[1].Score)
    Arena1Q[1].clearStatusEffect(Status.BURNING)
    Arena1Match = false
    #Hero refresh if needed and doomfist shield removal
    if AlwaysRefreshHero == true or Arena1Q[1].AntiHealDebuffed == true:
        Arena1Q[1].UltCharge = Arena1Q[1].getUltCharge()
        wait(0.2)
        Arena1Q[1].startForcingHero(Hero.SYMMETRA)
        wait(0.2)
        Arena1Q[1].startForcingHero(Arena1Q[1].HeroList[Arena1Q[1].HeroNumber])
        wait(0.05)
        Arena1Q[1].setUltCharge(Arena1Q[1].UltCharge)
        #elif Arena1Q[1].getHero() == Hero.DOOMFIST:
        #wait(0.5)
        #damage(Arena1Q[1], null, Arena1Q[1].getHealth() - 225)


rule "Arena 2: Player Dies":
    @Event playerDied
    @Condition (eventPlayer == Arena2Q[1] or eventPlayer == Arena2Q[2]) == true
    @Condition eventPlayer.DeadHelper == false

    eventPlayer.DeadHelper = true
    Arena2Q.remove(eventPlayer)
    if getNumberOfPlayers(Team.ALL) <= 3:
        Arena1Q.append(eventPlayer)
    elif getNumberOfPlayers(Team.ALL) <= 5:
        Arena2Q.append(eventPlayer)
    else:
        Arena3Q.append(eventPlayer)
    #Arena2Q[1] = Winner
    heal(Arena2Q[1], null, 1000)
    Arena2Q[1].UltCharge = Arena2Q[1].getUltCharge()
    wait(0.1)
    if Arena2Q[1].getHero() == Hero.SYMMETRA:
        Arena2Q[1].startForcingHero(Hero.TORBJORN)
    else:
        Arena2Q[1].startForcingHero(Hero.SYMMETRA)
    wait(0.2)
    Arena2Q[1].startForcingHero(Arena2Q[1].HeroList[Arena2Q[1].HeroNumber])
    wait(0.05)
    Arena2Q[1].setUltCharge(Arena2Q[1].UltCharge)
    if Arena2Q[1] == false:
        goto lbl_0
    Arena1Q.append(Arena2Q[1])
    lbl_0:
    Arena2Q[1].Spectating = true
    heal(Arena2Q[1], null, 1000)
    if Arena2Q[1].Score + ScorePerWin[2] >= 49.5:
        goto lbl_1
    Arena2Q[1].Score += ScorePerWin[2]
    lbl_1:
    Arena2Q[1].setScore(Arena2Q[1].Score)
    Arena2Q[1].clearStatusEffect(Status.BURNING)
    if Arena2Q[1] == false:
        goto lbl_2
    del Arena2Q[1]
    lbl_2:
    eventPlayer.clearStatusEffect(Status.BURNING)
    wait()
    Arena2Match = false


rule "Arena 3: Player Dies":
    @Event playerDied
    @Condition (eventPlayer == Arena3Q[1] or eventPlayer == Arena3Q[2]) == true
    @Condition eventPlayer.DeadHelper == false

    eventPlayer.DeadHelper = true
    Arena3Q.remove(eventPlayer)
    if getNumberOfPlayers(Team.ALL) <= 3:
        Arena1Q.append(eventPlayer)
    elif getNumberOfPlayers(Team.ALL) <= 5:
        Arena2Q.append(eventPlayer)
    else:
        Arena3Q.append(eventPlayer)
    #Arena3Q[1] = Winner
    heal(Arena3Q[1], null, 300)
    Arena3Q[1].UltCharge = Arena3Q[1].getUltCharge()
    wait(0.1)
    if Arena3Q[1].getHero() == Hero.SYMMETRA:
        Arena3Q[1].startForcingHero(Hero.TORBJORN)
    else:
        Arena3Q[1].startForcingHero(Hero.SYMMETRA)
    wait(0.2)
    Arena3Q[1].startForcingHero(Arena3Q[1].HeroList[Arena3Q[1].HeroNumber])
    wait(0.05)
    Arena3Q[1].setUltCharge(Arena3Q[1].UltCharge)
    if Arena3Q[1] == false:
        goto lbl_0
    if getNumberOfPlayers(Team.ALL) <= 3:
        Arena1Q.append(Arena3Q[1])
    else:
        Arena2Q.append(Arena3Q[1])
    lbl_0:
    Arena3Q[1].Spectating = true
    if Arena3Q[1].Score + ScorePerWin[3] >= 49.5:
        goto lbl_1
    Arena3Q[1].Score += ScorePerWin[3]
    lbl_1:
    Arena3Q[1].setScore(Arena3Q[1].Score)
    heal(Arena3Q[1], null, 300)
    Arena3Q[1].clearStatusEffect(Status.BURNING)
    if Arena3Q[1] == false:
        goto lbl_2
    del Arena3Q[1]
    lbl_2:
    eventPlayer.clearStatusEffect(Status.BURNING)
    wait()
    Arena3Match = false


rule "###   Player leaves   ###":
    @Disabled
    @Delimiter



rule "Player Leaves: Remove from All Queues":
    @Event playerLeft

    if Arena1Match == true and (eventPlayer == Arena1Q[1] or eventPlayer == Arena1Q[2]):
        Arena1Q.remove(eventPlayer)
        heal(Arena1Q[1], null, 1000)
        Arena1Match = false
    elif Arena2Match == true and (eventPlayer == Arena2Q[1] or eventPlayer == Arena2Q[2]):
        Arena2Q.remove(eventPlayer)
        heal(Arena2Q[1], null, 1000)
        Arena2Q[1].Spectating = true
        Arena2Match = false
    elif Arena3Match == true and (eventPlayer == Arena3Q[1] or eventPlayer == Arena3Q[2]):
        Arena3Q.remove(eventPlayer)
        heal(Arena3Q[1], null, 1000)
        Arena3Q[1].Spectating = true
        Arena3Match = false
    else:
        Arena1Q.remove(eventPlayer)
        Arena2Q.remove(eventPlayer)
        Arena3Q.remove(eventPlayer)
    if len(getAllPlayers()) <= 3:
        del Arena2Q[0]
        if Arena2Q == false:
            goto lbl_0
        Arena1Q.append(Arena2Q)
        lbl_0:
        Arena2Q = 0
        Arena2Match = false
        del Arena3Q[0]
        if Arena3Q == false:
            goto lbl_1
        Arena1Q.append(Arena3Q)
        lbl_1:
        Arena3Q = 0
        Arena3Match = false
        Arena1Q[3].Spectating = true
    elif len(getAllPlayers()) <= 5:
        del Arena3Q[0]
        if Arena3Q == false:
            goto lbl_2
        Arena2Q.append(Arena3Q)
        lbl_2:
        Arena3Q = 0
        Arena3Match = false
        Arena2Q[3].Spectating = true
        Arena2Q[4].Spectating = true
        Arena2Q[5].Spectating = true


rule "###   Bug fix   ###":
    @Disabled
    @Delimiter



rule "Arena 1: Bug fix":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.hasSpawned() == true
    @Condition FirstMatch == true
    @Condition (eventPlayer == Arena1Q[1] or eventPlayer == Arena1Q[2]) == true
    @Condition eventPlayer.Spectating == true

    wait(1.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Spectating = false


rule "Arena 2: Afk player":
    @Condition Arena2Q[1] == true
    @Condition Arena2Q[2] == true
    @Condition Arena2Match == true

    wait(30, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), "   Duel taking over 30s in Arena2 or bugged, killing 1 player to keep the queue rolling")
    kill(Arena2Q[2], Arena2Q[1])
    wait(3, Wait.ABORT_WHEN_FALSE)
    kill(Arena2Q[1], Arena2Q[2])


rule "Arena 2: Stuck":
    @Condition Arena2Q[1] == false
    @Condition Arena2Q[2] == false
    @Condition Arena2Match == true

    wait(5, Wait.ABORT_WHEN_FALSE)
    Arena2Match = false
    smallMessage(getAllPlayers(), "   Arena 2 left active when no players, trying to fix")


rule "Arena 3: Afk player":
    @Condition Arena3Q[1] == true
    @Condition Arena3Q[2] == true
    @Condition Arena3Match == true

    wait(30, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), "   Duel taking over 30s in Arena3 or bugged, killing 1 player to keep the queue rolling")
    kill(Arena3Q[2], Arena3Q[1])
    wait(3, Wait.ABORT_WHEN_FALSE)
    kill(Arena3Q[1], Arena3Q[2])


rule "Arena 3: Stuck":
    @Condition Arena3Q[1] == false
    @Condition Arena3Q[2] == false
    @Condition Arena3Match == true

    wait(5, Wait.ABORT_WHEN_FALSE)
    Arena3Match = false
    smallMessage(getAllPlayers(), "   Arena 3 left active when no players, trying to fix")


rule "###   Zone check   ###":
    @Disabled
    @Delimiter



rule "Zone Check Arena 1 Center":
    @Event eachPlayer
    #@Condition eventPlayer.isDummy() == false
    @Condition (Arena1Q[1] == eventPlayer or Arena1Q[2] == eventPlayer) == true
    @Condition eventPlayer.Spectating == false
    @Condition (eventPlayer.getAltitude() >= 30 or eventPlayer.getAltitude() <= 6) == true
    @Condition distance(eventPlayer, MainHigh) >= 16.4
    @Condition distance(eventPlayer, MainCenter) >= 15.1

    eventPlayer.setStatusEffect(null, Status.BURNING, 0.5)
    if eventPlayer.isDummy() == true:
        if eventPlayer.getHero() == Hero.SOJOURN:
            eventPlayer.cancelPrimaryAction()
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotHelpPositions[0]), 1, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(random.uniform(0.75, 1))
        eventPlayer.BotPathing = true
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    damage(eventPlayer, null, BurnDamage)
    if ruleCondition:
        loop()


rule "Zone Check Arena 1 Top":
    @Event eachPlayer
    #@Condition eventPlayer.isDummy() == false
    @Condition (Arena1Q[1] == eventPlayer or Arena1Q[2] == eventPlayer) == true
    @Condition eventPlayer.Spectating == false
    @Condition (eventPlayer.getAltitude() >= 30 or eventPlayer.getAltitude() <= 6) == true
    @Condition distance(eventPlayer, MainTopDeck) <= 3.75

    eventPlayer.setStatusEffect(null, Status.BURNING, 0.5)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    damage(eventPlayer, null, BurnDamage)
    if ruleCondition:
        loop()


rule "Zone Check Arena 2":
    @Event eachPlayer
    @Condition Arena2Match == true
    @Condition (Arena2Q[1] == eventPlayer or Arena2Q[2] == eventPlayer) == true
    @Condition eventPlayer.Spectating == false
    @Condition (eventPlayer.getAltitude() >= 30 or eventPlayer.getAltitude() <= 6) == true
    @Condition distance(eventPlayer, SideArenaCenter[1]) >= 17.4

    eventPlayer.setStatusEffect(null, Status.BURNING, 0.5)
    damage(eventPlayer, null, BurnDamage)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Zone Check Arena 3":
    @Event eachPlayer
    @Condition Arena3Match == true
    @Condition (Arena3Q[1] == eventPlayer or Arena3Q[2] == eventPlayer) == true
    @Condition eventPlayer.Spectating == false
    @Condition (eventPlayer.getAltitude() >= 30 or eventPlayer.getAltitude() <= 6) == true
    @Condition distance(eventPlayer, SideArenaCenter[3]) >= 17.4

    eventPlayer.setStatusEffect(null, Status.BURNING, 0.5)
    damage(eventPlayer, null, BurnDamage)
    wait(0.5)
    if ruleCondition:
        loop()


rule "###   Hero changes   ###":
    @Disabled

    wait(3)
    createDummy(Hero.MOIRA, Team.ALL, 11, vect(0, 0, 0))
    #wait(2)
    #createDummy(Hero.ASHE, Team.ALL, -1, vect(0, 0, 0))
    #wait(0.25)
    #createDummy(Hero.BASTION, Team.ALL, -1, vect(0, 0, 0))
    #wait(0.25)
    #4 pelaajaa enne tätä
    #createDummy(Hero.DVA, Team.ALL, -1, vect(0, 0, 0))
    #wait(0.25)
    #createDummy(Hero.ECHO, Team.ALL, -1, vect(0, 0, 0))
    #wait(0.25)
    #createDummy(Hero.GENJI, Team.ALL, -1, vect(0, 0, 0))
    #wait(0.25)
    #createDummy(Hero.HANZO, Team.ALL, -1, vect(0, 0, 0))
    #wait(0.25)
    #createDummy(Hero.JUNKER_QUEEN, Team.ALL, -1, vect(0, 0, 0))


rule "Hero locking":
    @Event eachPlayer
    @Condition HeroSelect == true
    @Condition GameLoaded == true
    @Condition FirstMatch == true
    @Condition eventPlayer.isDummy() == false
    @Condition len(eventPlayer.HeroList) >= 2
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true

    wait(0.3, Wait.ABORT_WHEN_FALSE)
    smallMessage(eventPlayer, "   Keep holding reload to change hero")
    wait(0.4, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), "   {0} is changing hero".format(eventPlayer))
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.LockedHero = true
    eventPlayer.UltCharge = eventPlayer.getUltCharge()
    eventPlayer.stopForcingCurrentHero()
    eventPlayer.HeroList.remove(eventPlayer.getHero())
    eventPlayer.setAllowedHeroes(eventPlayer.HeroList)
    wait(0.1)
    #Create hero list
    if hostPlayer == eventPlayer and HostHasDifferentheroes == true:
        eventPlayer.HeroList = random.shuffle(HeroList2)
    else:
        eventPlayer.HeroList = random.shuffle(HeroList)
    eventPlayer.setAllowedHeroes(eventPlayer.HeroList)
    #In Arena Q 1
    if eventPlayer in Arena1Q == true:
        #If playing
        if eventPlayer == Arena1Q[1] or eventPlayer == Arena1Q[2]:
            #If in an active Match
            if Arena1Match == true:
                Arena1Q.remove(eventPlayer)
                #Arena1Q[1] = Winner
                Arena1Q[1].setAmmo(0, Arena1Q[1].getMaxAmmo())
                heal(Arena1Q[1], null, 1000)
                Arena1Q[1].Score += ScorePerWin[1]
                Arena1Q[1].setScore(Arena1Q[1].Score)
                Arena1Q[1].clearStatusEffect(Status.BURNING)
                Arena1Match = false
                #Hero refresh if needed and doomfist shield removal
                if AlwaysRefreshHero == true or Arena1Q[1].AntiHealDebuffed == true:
                    Arena1Q[1].UltCharge = Arena1Q[1].getUltCharge()
                    wait(0.2)
                    Arena1Q[1].startForcingHero(Hero.SYMMETRA)
                    wait(0.2)
                    Arena1Q[1].startForcingHero(Arena1Q[1].HeroList[Arena1Q[1].HeroNumber])
                    wait(0.05)
                    Arena1Q[1].setUltCharge(Arena1Q[1].UltCharge)
                    #elif Arena1Q[1].getHero() == Hero.DOOMFIST:
                    #wait(0.5)
                    #damage(Arena1Q[1], null, Arena1Q[1].getHealth() - 225)
            else:
                Arena1Q.remove(eventPlayer)
        else:
            Arena1Q.remove(eventPlayer)
        #In Arena Q 2
    elif eventPlayer in Arena2Q == true:
        #If playing
        if eventPlayer == Arena2Q[1] or eventPlayer == Arena2Q[2]:
            #If in an active Match
            if Arena2Match == true:
                Arena2Q.remove(eventPlayer)
                #Arena2Q[1] = Winner
                heal(Arena2Q[1], null, 1000)
                Arena2Q[1].UltCharge = Arena2Q[1].getUltCharge()
                wait(0.1)
                Arena2Q[1].startForcingHero(Hero.SYMMETRA)
                wait(0.2)
                Arena2Q[1].startForcingHero(Arena2Q[1].HeroList[Arena2Q[1].HeroNumber])
                wait(0.05)
                Arena2Q[1].setUltCharge(Arena2Q[1].UltCharge)
                if Arena2Q[1] == false:
                    goto lbl_0
                Arena1Q.append(Arena2Q[1])
                lbl_0:
                Arena2Q[1].Spectating = true
                heal(Arena2Q[1], null, 1000)
                if Arena2Q[1].Score + ScorePerWin[2] >= 49.5:
                    goto lbl_1
                Arena2Q[1].Score += ScorePerWin[2]
                lbl_1:
                Arena2Q[1].setScore(Arena2Q[1].Score)
                Arena2Q[1].clearStatusEffect(Status.BURNING)
                if Arena2Q[1] == false:
                    goto lbl_2
                del Arena2Q[1]
                lbl_2:
                Arena2Match = false
            else:
                Arena2Q.remove(eventPlayer)
        else:
            Arena2Q.remove(eventPlayer)
        #In Arena Q 3
    elif eventPlayer in Arena3Q == true:
        #If playing
        if eventPlayer == Arena3Q[1] or eventPlayer == Arena3Q[2]:
            #If in an active Match
            if Arena3Match == true:
                Arena3Q.remove(eventPlayer)
                #Arena3Q[1] = Winner
                heal(Arena3Q[1], null, 300)
                Arena3Q[1].UltCharge = Arena3Q[1].getUltCharge()
                wait(0.1)
                Arena3Q[1].startForcingHero(Hero.SYMMETRA)
                wait(0.2)
                Arena3Q[1].startForcingHero(Arena3Q[1].HeroList[Arena3Q[1].HeroNumber])
                wait(0.05)
                Arena3Q[1].setUltCharge(Arena3Q[1].UltCharge)
                if Arena3Q[1] == false:
                    goto lbl_3
                if getNumberOfPlayers(Team.ALL) <= 3:
                    Arena1Q.append(Arena3Q[1])
                else:
                    Arena2Q.append(Arena3Q[1])
                lbl_3:
                Arena3Q[1].Spectating = true
                if Arena3Q[1].Score + ScorePerWin[3] >= 49.5:
                    goto lbl_4
                Arena3Q[1].Score += ScorePerWin[3]
                lbl_4:
                Arena3Q[1].setScore(Arena3Q[1].Score)
                heal(Arena3Q[1], null, 300)
                Arena3Q[1].clearStatusEffect(Status.BURNING)
                if Arena3Q[1] == false:
                    goto lbl_5
                del Arena3Q[1]
                lbl_5:
                Arena3Match = false
            else:
                Arena3Q.remove(eventPlayer)
        else:
            Arena3Q.remove(eventPlayer)
    eventPlayer.Spectating = true
    waitUntil(eventPlayer.getHero() == true, 99999)
    eventPlayer.teleport(SpecSpot)
    eventPlayer.setUltCharge(eventPlayer.UltCharge)
    #Add player back to Queue
    if getNumberOfPlayers(Team.ALL) >= 0 and getNumberOfPlayers(Team.ALL) <= 3:
        Arena1Q.append(eventPlayer)
    elif getNumberOfPlayers(Team.ALL) >= 4 and getNumberOfPlayers(Team.ALL) <= 5:
        Arena2Q.append(eventPlayer)
    else:
        Arena3Q.append(eventPlayer)
    destroyHudText(eventPlayer.Hud)
    if eventPlayer in Arena1Q == true:
        hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena1Q.index(eventPlayer) - 2)), "Score per kill: 3", "Arena: 1", HudPosition.TOP, 2, Color.GREEN, Color.WHITE, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    elif eventPlayer in Arena2Q == true:
        if eventPlayer.Score >= 48:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena2Q.index(eventPlayer) - 2)), "To win you need to get a kill in Arena 1", "Arena: 2", HudPosition.TOP, 2, Color.RED, Color.WHITE, Color.RED, HudReeval.VISIBILITY_AND_STRING)
        else:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena2Q.index(eventPlayer) - 2)), "Score per kill: 2", "Arena: 2", HudPosition.TOP, 2, Color.RED, Color.WHITE, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    elif eventPlayer in Arena3Q == true:
        if eventPlayer.Score >= 49:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena3Q.index(eventPlayer) - 2)), "To win you need to get a kill in Arena 1", "Arena: 3", HudPosition.TOP, 2, Color.BLUE, Color.WHITE, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
        else:
            hudText(eventPlayer, l"{0}: {1}".format("Position in Queue", abs(Arena3Q.index(eventPlayer) - 2)), "Score per kill: 1", "Arena: 3", HudPosition.TOP, 2, Color.BLUE, Color.WHITE, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.Hud = getLastCreatedText()
    eventPlayer.HeroNumber = eventPlayer.HeroList.index(eventPlayer.getHero())
    if AllHeroesMode == true:
        if eventPlayer.getHero() in getTankHeroes() == true:
            eventPlayer.startScalingSize(0.8, false)
        else:
            eventPlayer.startScalingSize(1, false)


rule "Echo duplicate nerf":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDuplicatingAHero() == true
    @Condition eventPlayer.isAlive() == true

    wait(7, Wait.ABORT_WHEN_FALSE)
    damage(eventPlayer, null, 1000)


rule "Support passive healing disabled":
    @Event eachPlayer
    @Condition eventPlayer.getHero() in getSupportHeroes() == true
    @Condition eventPlayer.getNormalizedHealth() != 1
    @Condition eventPlayer.hasStatus(Status.ASLEEP) == false

    wait(2.45, Wait.ABORT_WHEN_FALSE)
    damage(eventPlayer, null, 0.001)
    heal(eventPlayer, null, 0.001)
    if ruleCondition:
        loop()


rule "Dps & Tank passive healing disabled":
    @Event eachPlayer
    @Condition eventPlayer.getHero() in getSupportHeroes() == false
    @Condition eventPlayer.getNormalizedHealth() != 1
    @Condition eventPlayer.hasStatus(Status.ASLEEP) == false

    wait(4.95, Wait.ABORT_WHEN_FALSE)
    if eventPlayer.getHero() == Hero.SOMBRA:
        goto lbl_0
    damage(eventPlayer, null, 0.001)
    heal(eventPlayer, null, 0.001)
    lbl_0:
    if ruleCondition:
        loop()


rule "###   Bot Game   ###":
    @Disabled
    @Delimiter



rule "Create bot":
    @Condition isGameInProgress() == true
    @Condition getNumberOfPlayers(Team.ALL) == 1

    wait(2, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), "   Player alone: Spawning a bot in 5 seconds")
    wait(5, Wait.ABORT_WHEN_FALSE)
    createDummy(Hero.SYMMETRA, Team.ALL, 11, vect(-9.438, 268.417, 278.042), directionTowards(vect(-0.133, 279.5, 291.308), vect(0.027, 274, 279.863)))
    getAllPlayers().Score = 0
    getAllPlayers().setScore(0)
    hudHeader(getAllPlayers(), BotDifHud[0], HudPosition.LEFT, 2, BotDifHud[1], HudReeval.VISIBILITY_AND_STRING)
    BotDifHud[2] = getLastCreatedText()
    hudSubheader(getAllPlayers(), "Bot difficulty {0}/5".format(getPlayersInSlot(11, Team.ALL).BotDifficulty + 1), HudPosition.LEFT, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    BotDifHud[3] = getLastCreatedText()


def BotHeroList():
    @Name "Bot herolist and difficulty selector"

    if Hero.SOLDIER in HeroList == true:
        eventPlayer.HeroList.append(Hero.SOLDIER)
    if Hero.ASHE in HeroList == true:
        eventPlayer.HeroList.append(Hero.ASHE)
    if Hero.BAPTISTE in HeroList == true:
        eventPlayer.HeroList.append(Hero.BAPTISTE)
    if Hero.ZENYATTA in HeroList == true:
        eventPlayer.HeroList.append(Hero.ZENYATTA)
    if Hero.CASSIDY in HeroList == true:
        eventPlayer.HeroList.append(Hero.CASSIDY)
    if Hero.ILLARI in HeroList == true:
        eventPlayer.HeroList.append(Hero.ILLARI)
    if Hero.ANA in HeroList == true:
        eventPlayer.HeroList.append(Hero.ANA)
    if Hero.SOJOURN in HeroList == true:
        eventPlayer.HeroList.append(Hero.SOJOURN)
    if Hero.TRACER in HeroList == true:
        eventPlayer.HeroList.append(Hero.TRACER)
    if Hero.ECHO in HeroList == true:
        eventPlayer.HeroList.append(Hero.ECHO)
    if Hero.GENJI in HeroList == true:
        eventPlayer.HeroList.append(Hero.GENJI)
    if Hero.KIRIKO in HeroList == true:
        eventPlayer.HeroList.append(Hero.KIRIKO)
    if Hero.HANZO in HeroList == true:
        eventPlayer.HeroList.append(Hero.HANZO)
    if Hero.WIDOWMAKER in HeroList == true:
        eventPlayer.HeroList.append(Hero.WIDOWMAKER)
    del eventPlayer.HeroList[0]
    if len(eventPlayer.HeroList) == 0:
        eventPlayer.HeroList.append(Hero.ASHE)
        eventPlayer.HeroList.append(Hero.SOLDIER)
        eventPlayer.HeroList.append(Hero.BAPTISTE)
        eventPlayer.HeroList.append(Hero.ZENYATTA)
        eventPlayer.HeroList.append(Hero.CASSIDY)
        eventPlayer.HeroList.append(Hero.ILLARI)
        eventPlayer.HeroList.append(Hero.ANA)
        eventPlayer.HeroList.append(Hero.SOJOURN)
        eventPlayer.HeroList.append(Hero.TRACER)
        eventPlayer.HeroList.append(Hero.ECHO)
        eventPlayer.HeroList.append(Hero.GENJI)
        eventPlayer.HeroList.append(Hero.KIRIKO)
        eventPlayer.HeroList.append(Hero.HANZO)
        eventPlayer.HeroList.append(Hero.WIDOWMAKER)
    elif len(eventPlayer.HeroList) == 1:
        eventPlayer.OneHeroPlayerVariable = true
        eventPlayer.HeroList.append(eventPlayer.HeroList[0])
    eventPlayer.HeroList = random.shuffle(eventPlayer.HeroList)
    eventPlayer.startForcingHero(eventPlayer.HeroList[eventPlayer.HeroNumber])
    if BotDifSelect == 1:
        BotDifHud[0] = "Gold"
        BotDifHud[1] = Color.YELLOW
        eventPlayer.BotCassDif[0] = 7
        eventPlayer.BotCassDif[1] = 1
        eventPlayer.BotStrafe[0] = 0.5
        eventPlayer.BotStrafe[1] = 1
        eventPlayer.BotDifficulty = 0
    elif BotDifSelect == 2:
        BotDifHud[0] = "Platinum"
        BotDifHud[1] = Color.GRAY
        eventPlayer.BotCassDif[0] = 6
        eventPlayer.BotCassDif[1] = 0.85
        eventPlayer.BotStrafe[0] = 0.35
        eventPlayer.BotStrafe[1] = 0.9
        eventPlayer.BotDifficulty = 1
    elif BotDifSelect == 5:
        BotDifHud[0] = "Champion"
        BotDifHud[1] = Color.ROSE
        eventPlayer.BotCassDif[0] = 2
        eventPlayer.BotCassDif[1] = 0.5
        eventPlayer.BotStrafe[0] = 0.2
        eventPlayer.BotStrafe[1] = 0.5
        eventPlayer.BotDifficulty = 4
    elif BotDifSelect == 4:
        BotDifHud[0] = "Master"
        BotDifHud[1] = Color.LIME_GREEN
        eventPlayer.BotCassDif[0] = 3
        eventPlayer.BotCassDif[1] = 0.6
        eventPlayer.BotStrafe[0] = 0.2
        eventPlayer.BotStrafe[1] = 0.6
        eventPlayer.BotDifficulty = 3
    else:
        BotDifHud[0] = "Diamond"
        BotDifHud[1] = Color.SKY_BLUE
        eventPlayer.BotCassDif[0] = 4
        eventPlayer.BotCassDif[1] = 0.7
        eventPlayer.BotStrafe[0] = 0.2
        eventPlayer.BotStrafe[1] = 0.8
        eventPlayer.BotDifficulty = 2


rule "Remove bot":
    @Condition isGameInProgress() == true
    @Condition getNumberOfPlayers(Team.ALL) >= 3
    @Condition getPlayersInSlot(11, Team.ALL).isDummy() == true

    smallMessage(getAllPlayers(), "   Player joined: reseting score and removing the bot")
    wait(1, Wait.ABORT_WHEN_FALSE)
    destroyAllDummies()
    getAllPlayers().Score = 0
    getAllPlayers().setScore(0)
    destroyHudText(BotDifHud[2])
    destroyHudText(BotDifHud[3])


rule "Bot Dynamic Difficulty":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Match == true
    @Condition BotDifSelect == 0

    if eventPlayer.getScore() - 12 >= Arena1Q[eventPlayer.TargetNumber].getScore():
        BotDifHud[0] = "Gold"
        BotDifHud[1] = Color.YELLOW
        eventPlayer.BotCassDif[0] = 7
        eventPlayer.BotCassDif[1] = 1
        eventPlayer.BotStrafe[0] = 0.5
        eventPlayer.BotStrafe[1] = 1
        eventPlayer.BotDifficulty = 0
    elif eventPlayer.getScore() - 6 >= Arena1Q[eventPlayer.TargetNumber].getScore():
        BotDifHud[0] = "Platinum"
        BotDifHud[1] = Color.GRAY
        eventPlayer.BotCassDif[0] = 6
        eventPlayer.BotCassDif[1] = 0.85
        eventPlayer.BotStrafe[0] = 0.35
        eventPlayer.BotStrafe[1] = 0.9
        eventPlayer.BotDifficulty = 1
    elif eventPlayer.getScore() == Arena1Q[eventPlayer.TargetNumber].getScore():
        BotDifHud[0] = "Diamond"
        BotDifHud[1] = Color.SKY_BLUE
        eventPlayer.BotCassDif[0] = 4
        eventPlayer.BotCassDif[1] = 0.7
        eventPlayer.BotStrafe[0] = 0.2
        eventPlayer.BotStrafe[1] = 0.8
        eventPlayer.BotDifficulty = 2
    elif Arena1Q[eventPlayer.TargetNumber].getScore() - 12 >= eventPlayer.getScore():
        BotDifHud[0] = "Champion"
        BotDifHud[1] = Color.ROSE
        eventPlayer.BotCassDif[0] = 2
        eventPlayer.BotCassDif[1] = 0.5
        eventPlayer.BotStrafe[0] = 0.2
        eventPlayer.BotStrafe[1] = 0.5
        eventPlayer.BotDifficulty = 4
    elif Arena1Q[eventPlayer.TargetNumber].getScore() - 6 >= eventPlayer.getScore():
        BotDifHud[0] = "Master"
        BotDifHud[1] = Color.LIME_GREEN
        eventPlayer.BotCassDif[0] = 3
        eventPlayer.BotCassDif[1] = 0.6
        eventPlayer.BotStrafe[0] = 0.2
        eventPlayer.BotStrafe[1] = 0.6
        eventPlayer.BotDifficulty = 3


rule "Bot Help Positions":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true

    eventPlayer.BotStrafe[0] = 0.2
    eventPlayer.BotStrafe[1] = 0.8
    eventPlayer.BotHelpPositions[0] = vect(-0.068, 267.788, 286.871)
    eventPlayer.BotHelpPositions[1] = vect(0.112, 267.788, 273.207)
    eventPlayer.BotHelpPositions[2] = vect(-14.184, 267.455, 274.127)
    eventPlayer.BotHelpPositions[3] = vect(14.313, 267.455, 274.327)
    eventPlayer.BotHelpPositions[4] = vect(-5.021, 267.606, 292.391)
    eventPlayer.BotHelpPositions[5] = vect(4.822, 267.622, 291.85)
    eventPlayer.BotHelpPositions[6] = vect(6.967, 267.88, 280.567)
    eventPlayer.BotHelpPositions[7] = vect(-7.25, 267.788, 279.939)
    eventPlayer.BotHelpPositions[8] = vect(0.165, 279.697, 291.86)
    eventPlayer.BotHelpPositions[9] = vect(17.4, 267.455, 284.455)
    eventPlayer.BotHelpPositions[10] = vect(-17.684, 267.455, 284.561)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[0], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[1], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, eventPlayer.BotHelpPositions[2], 9, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, eventPlayer.BotHelpPositions[3], 9, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, eventPlayer.BotHelpPositions[4], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, eventPlayer.BotHelpPositions[5], 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 0 (5)", eventPlayer.BotHelpPositions[0], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "H 1 (5)", eventPlayer.BotHelpPositions[1], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "H 2 (9)", eventPlayer.BotHelpPositions[2], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "H 3 (9)", eventPlayer.BotHelpPositions[3], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "H 4 (3)", eventPlayer.BotHelpPositions[4], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "H 5 (3)", eventPlayer.BotHelpPositions[5], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[6], 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 6 (7)", eventPlayer.BotHelpPositions[6], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[7], 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 7 (7)", eventPlayer.BotHelpPositions[7], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[8], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 8 (2)", eventPlayer.BotHelpPositions[8], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[9], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 9 (5)", eventPlayer.BotHelpPositions[9], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[10], 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 10 (5)", eventPlayer.BotHelpPositions[10], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.BotHelpPositions[11] = vect(0.094, 273.65, 263.418)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotHelpPositions[11], 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "H 11 (7)", eventPlayer.BotHelpPositions[11], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)


rule "Bot Move Positions":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true

    eventPlayer.BotMovePositions[0] = vect(-8.165, 268.367, 284.724)
    eventPlayer.BotMovePositions[1] = vect(-4.747, 268.367, 271.626)
    eventPlayer.BotMovePositions[2] = vect(3.481, 268.367, 272.082)
    eventPlayer.BotMovePositions[3] = vect(7.678, 268.367, 284.767)
    #stairs
    eventPlayer.BotMovePositions[4] = vect(-0.365, 270.432, 291.779)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, eventPlayer.BotMovePositions[0], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, eventPlayer.BotMovePositions[1], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, eventPlayer.BotMovePositions[2], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, eventPlayer.BotMovePositions[3], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, eventPlayer.BotMovePositions[4], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "M 0", eventPlayer.BotMovePositions[0], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "M 1", eventPlayer.BotMovePositions[1], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "M 2", eventPlayer.BotMovePositions[2], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "M 3", eventPlayer.BotMovePositions[3], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createInWorldText(getAllPlayers(), "M 4", eventPlayer.BotMovePositions[4], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.BotMovePositions[5] = vect(-11.137, 268.367, 284.457)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, eventPlayer.BotMovePositions[5], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "M 5", eventPlayer.BotMovePositions[5], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.BotMovePositions[6] = vect(-7.651, 268.367, 270.763)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, eventPlayer.BotMovePositions[6], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "M 6", eventPlayer.BotMovePositions[6], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.BotMovePositions[7] = vect(8.637, 268.367, 271.038)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, eventPlayer.BotMovePositions[7], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "M 7", eventPlayer.BotMovePositions[7], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.BotMovePositions[8] = vect(11.449, 268.367, 283.233)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, eventPlayer.BotMovePositions[8], 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createInWorldText(getAllPlayers(), "M 8", eventPlayer.BotMovePositions[8], 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)


rule "Bot Target Number":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[1] == eventPlayer

    eventPlayer.TargetNumber = 2


rule "Bot Target Number":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[2] == eventPlayer

    eventPlayer.TargetNumber = 1


rule "Bot Facing":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.hasSpawned() == true

    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)


rule "Bot Melee":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 3
    @Condition eventPlayer.BotShoot == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() <= 40

    wait(abs(eventPlayer.BotDifficulty - 6) - 10, Wait.ABORT_WHEN_FALSE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 720)
    eventPlayer.setDamageDealt(100)
    eventPlayer.forceButtonPress(Button.MELEE)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Movement":
    @Disabled
    @Delimiter



rule "Bot player Hiding":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Match == true
    @Condition isInLoS(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) == false

    if eventPlayer.BotSoldRun == 1:
        waitUntil(eventPlayer.getNormalizedHealth() == 1, 2)
        eventPlayer.BotSoldRun = 0
    else:
        eventPlayer.BotShoot = false
        wait(1, Wait.ABORT_WHEN_FALSE)
        #wait(3, Wait.ABORT_WHEN_FALSE)
        #eventPlayer.BotPathing = false
        #if eventPlayer.getHero() == Hero.HANZO:
        #            return
        #if eventPlayer.getHero() == Hero.ASHE:
        #            return
        #if eventPlayer.getHero() == Hero.WIDOWMAKER:
        #            return
        #smallMessage(getAllPlayers(), "   Player hiding")
        #eventPlayer.PlayerHiding = true
        #eventPlayer.startForcingThrottle(0.5, 1, 0, 1, 0, 1)
        #eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
    if ruleCondition:
        loop()


rule "Bot player not Hiding":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition isInLoS(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) == true

    eventPlayer.PlayerHiding = false
    eventPlayer.BotPathing = true
    eventPlayer.BotShoot = true
    wait(1, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Strafing":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getHero() != Hero.ILLARI
    @Condition eventPlayer.getHero() != Hero.ECHO
    @Condition eventPlayer.getHero() != Hero.GENJI
    @Condition eventPlayer.BotPathing == true
    @Condition eventPlayer.isOnGround() == true

    if eventPlayer.BotLeft == false:
        eventPlayer.startThrottleInDirection(Vector.LEFT, 1, Relativity.TO_PLAYER)
        eventPlayer.BotLeft = true
        eventPlayer.BotRight = false
        wait(random.uniform(eventPlayer.BotStrafe[0], eventPlayer.BotStrafe[1]), Wait.ABORT_WHEN_FALSE)
    else:
        eventPlayer.startThrottleInDirection(Vector.RIGHT, 1, Relativity.TO_PLAYER)
        eventPlayer.BotRight = true
        eventPlayer.BotLeft = false
        wait(random.uniform(eventPlayer.BotStrafe[0], eventPlayer.BotStrafe[1]), Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Strafing Genji Illari Echo":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition (eventPlayer.getHero() == Hero.ECHO or eventPlayer.getHero() == Hero.GENJI or eventPlayer.getHero() == Hero.ILLARI) == true
    @Condition eventPlayer.BotPathing == true

    if eventPlayer.BotLeft == false:
        eventPlayer.startThrottleInDirection(Vector.LEFT, 1, Relativity.TO_PLAYER)
        eventPlayer.BotLeft = true
        eventPlayer.BotRight = false
        wait(random.uniform(0.2, 0.8), Wait.ABORT_WHEN_FALSE)
    else:
        eventPlayer.startThrottleInDirection(Vector.RIGHT, 1, Relativity.TO_PLAYER)
        eventPlayer.BotRight = true
        eventPlayer.BotLeft = false
        wait(random.uniform(0.2, 0.8), Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Pathing True - Push low hp":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getHero() != Hero.HANZO
    @Condition eventPlayer.getHero() != Hero.WIDOWMAKER
    @Condition eventPlayer.getHero() != Hero.ASHE
    @Condition eventPlayer.getHero() != Hero.ANA
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition eventPlayer.BotStayTimer == 0
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingUltimate() == false
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotPathing == true
    @Condition eventPlayer.getHealth() >= 75 + Arena1Q[eventPlayer.TargetNumber].getHealth()

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer >= 1:
        if eventPlayer.getHero() == Hero.SOLDIER:
            eventPlayer.startForcingThrottle(random.uniform(0, 1), 1, 0, 0, 0, 1)
            waitUntil(eventPlayer.isDead() == true or Arena1Q[eventPlayer.TargetNumber].isDead() == true, 10)
            eventPlayer.stopForcingThrottle()
        else:
            eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
            #__end__()
            #smallMessage(getAllPlayers(), "push hp")
            if eventPlayer.getHero() == Hero.ILLARI:
                wait(0.25, Wait.ABORT_WHEN_FALSE)
                eventPlayer.startForcingButton(Button.ABILITY_1)
                wait(0.25)
                eventPlayer.stopForcingButton(Button.ABILITY_1)
            if eventPlayer.getHero() == Hero.SOJOURN:
                eventPlayer.forceButtonPress(Button.ABILITY_1)
                wait(random.uniform(0.3, 0.7))
                eventPlayer.forceButtonPress(Button.JUMP)
            waitUntil(eventPlayer.isDead() == true or Arena1Q[eventPlayer.TargetNumber].isDead() == true, 10)
            eventPlayer.stopForcingThrottle()
        wait(5)
        if ruleCondition:
            loop()


rule "Bot Pathing True - Push random":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.getHero() != Hero.HANZO
    @Condition eventPlayer.getHero() != Hero.WIDOWMAKER
    @Condition eventPlayer.getHero() != Hero.ASHE
    @Condition eventPlayer.getHero() != Hero.ANA
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition eventPlayer.BotStayTimer == 0
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingUltimate() == false
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotPathing == true
    @Condition eventPlayer.getHealth() >= 0 + Arena1Q[eventPlayer.TargetNumber].getHealth()

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 4)
    #if eventPlayer.getHero() == Hero.SOLDIER:
    #eventPlayer.Randomizer = random.randint(0, 0)
    #__end__()
    if eventPlayer.Randomizer == 0:
        if eventPlayer.getHero() == Hero.SOLDIER:
            eventPlayer.startForcingThrottle(random.uniform(0, 1), 1, 0, 0, 0, 1)
        else:
            eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
        waitUntil(eventPlayer.isDead() == true or Arena1Q[eventPlayer.TargetNumber].isDead() == true, 10)
        eventPlayer.stopForcingThrottle()
        #smallMessage(getAllPlayers(), "push rando")
    wait(4)
    if ruleCondition:
        loop()


rule "Bot Pathing False - Stop Push":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.BotPathing == false

    eventPlayer.stopForcingThrottle()


rule "Bot Pathing, No line of sight, Combined all":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotStayTimer == 0
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingUltimate() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.isReloading() == false

    if distance(eventPlayer.getPosition(), eventPlayer.BotHelpPositions[2]) <= 7:
        if eventPlayer.getHero() == Hero.TRACER:
            #eventPlayer.BotTracerRecall = true
        elif eventPlayer.getHero() == Hero.ANA:
            eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        #smallMessage(getAllPlayers(), "H2, no los")
        eventPlayer.Randomizer = random.randint(0, 1)
        if eventPlayer.Randomizer == 0:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
        eventPlayer.BotPathing = false
        wait(1.5)
    elif distance(eventPlayer.getPosition(), eventPlayer.BotHelpPositions[3]) <= 7:
        if eventPlayer.getHero() == Hero.TRACER:
            #eventPlayer.BotTracerRecall = true
        elif eventPlayer.getHero() == Hero.ANA:
            eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        #smallMessage(getAllPlayers(), "H3, no los")
        eventPlayer.Randomizer = random.randint(0, 1)
        if eventPlayer.Randomizer == 0:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
        eventPlayer.BotPathing = false
        wait(1.5)
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[2]) <= 9:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[6]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h2, bot moving 6")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[5]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h2, bot moving 5")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[3]) <= 9:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[7]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h3, bot moving 7")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[8]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h3, bot moving 8")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[11]) <= 7:
        wait(0.1, Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]), 1, Relativity.TO_WORLD)
            #smallMessage(getAllPlayers(), "Player h11, bot moving 3")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]), 1, Relativity.TO_WORLD)
            #smallMessage(getAllPlayers(), "Player h11, bot moving 0")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[0]) <= 5:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h0, bot moving 3")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h0, bot moving 0")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[1]) <= 5:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h1, bot moving 2")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h1, bot moving 1")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[6]) <= 7:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h6, bot moving 2")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h6, bot moving 3")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[7]) <= 7:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h7, bot moving 0")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h7, bot moving 1")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[5]) <= 4:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h5, bot moving 2")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = false
            #smallMessage(getAllPlayers(), "Player h5, bot moving 3")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[4]) <= 4:
        wait(random.uniform(0.3, 1.5), Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h4, bot moving 0")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]), 1, Relativity.TO_WORLD)
            eventPlayer.BotLeft = true
            #smallMessage(getAllPlayers(), "Player h4, bot moving 1")
        eventPlayer.BotPathing = false
    elif distance(Arena1Q[eventPlayer.TargetNumber].getPosition(), eventPlayer.BotHelpPositions[8]) <= 4:
        wait(0.1, Wait.ABORT_WHEN_FALSE)
        if distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]) >= distance(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]):
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[2]), 1, Relativity.TO_WORLD)
            #smallMessage(getAllPlayers(), "Player h8, bot moving 2")
        else:
            eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[1]), 1, Relativity.TO_WORLD)
            #smallMessage(getAllPlayers(), "Player h8, bot moving 1")
        eventPlayer.BotPathing = false
        if eventPlayer.getHero() == Hero.TRACER:
            eventPlayer.stopForcingThrottle()
    wait(1)
    if ruleCondition:
        loop()


rule "Bot H 9, out of bounds":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition distance(eventPlayer.getPosition(), eventPlayer.BotHelpPositions[9]) <= 5

    #smallMessage(getAllPlayers(), "h9 to m3")
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[3]), 1, Relativity.TO_WORLD)
    eventPlayer.BotPathing = false
    wait(random.uniform(0.75, 1))
    eventPlayer.BotPathing = true
    if ruleCondition:
        loop()


rule "Bot H 10, out of bounds":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition distance(eventPlayer.getPosition(), eventPlayer.BotHelpPositions[10]) <= 5

    #smallMessage(getAllPlayers(), "h10 to m0")
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), eventPlayer.BotMovePositions[0]), 1, Relativity.TO_WORLD)
    eventPlayer.BotPathing = false
    wait(random.uniform(0.75, 1))
    eventPlayer.BotPathing = true
    if ruleCondition:
        loop()


rule "Strafing to a wall left side":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotPathing == true
    @Condition eventPlayer.BotLeft == true
    @Condition distance(eventPlayer.getEyePosition(), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + (3.5 * (directionFromAngles(90 + horizontalAngleOfDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())), 0))), null, eventPlayer, false).getHitPosition()) <= 1

    eventPlayer.startThrottleInDirection(Vector.RIGHT, 1, Relativity.TO_PLAYER)


rule "Strafing to a wall right side":
    @Event eachPlayer
    @Slot 11
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotPathing == true
    @Condition eventPlayer.BotRight == true
    @Condition distance(eventPlayer.getEyePosition(), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + (3.5 * (directionFromAngles(-90 + horizontalAngleOfDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())), 0))), null, eventPlayer, false).getHitPosition()) <= 1

    eventPlayer.startThrottleInDirection(Vector.LEFT, 1, Relativity.TO_PLAYER)


rule "Bot Cassidy":
    @Disabled
    @Delimiter



rule "Bot Cass Primary":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isUsingAbility2() == false

    eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopFacing()
    if eventPlayer.BotDifficulty <= 2:
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
    else:
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0.4), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
    wait()
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    lbl_0:
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
    wait(random.uniform(0.5, 0.65) - eventPlayer.ShootRando / 10)
    while eventPlayer.BotShoot == true:
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        eventPlayer.stopFacing()
        if eventPlayer.BotDifficulty <= 2:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        else:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0.4), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
        wait(random.uniform(0.5, eventPlayer.BotCassDif[1]) - eventPlayer.ShootRando / 10)
    if ruleCondition:
        loop()


rule "Bot Cass Secondary":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 6
    @Condition eventPlayer.getAmmo() >= 4
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true

    #eventPlayer.setDamageDealt(75)
    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        lbl_0:
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Cass Reload":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() <= 3
    @Condition eventPlayer.isReloading() == false

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Cass Roll":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.getAmmo() <= 3

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 3)
    if eventPlayer.Randomizer == 0:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Cass Roll low hp":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.getHealth() <= 100

    wait(random.uniform(0.3, 0.6), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "Bot Cass Roll to reload":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.getAmmo() == 0

    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "Bot Cass Grenade":
    @Event eachPlayer
    @Hero cassidy
    #@Condition eventPlayer.getHero() == Hero.CASSIDY
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 7

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1.3, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), Relativity.TO_WORLD)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1.3, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 5000)
        #eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y + distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 10, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 5000)
        wait(0.1)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.ABILITY_2)
        lbl_0:
        wait(0.2)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Illari":
    @Disabled
    @Delimiter



rule "Bot Illari Primary":
    @Event eachPlayer
    @Hero illari
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true

    eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopFacing()
    if eventPlayer.BotDifficulty <= 2:
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
    else:
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0.4), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
    wait()
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    lbl_0:
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
    wait(random.uniform(0.85, eventPlayer.BotCassDif[1] + 0.35) - eventPlayer.ShootRando / 10)
    while eventPlayer.BotShoot == true:
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        eventPlayer.stopFacing()
        if eventPlayer.BotDifficulty <= 2:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        else:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0.4), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
        wait(random.uniform(0.85, eventPlayer.BotCassDif[1] + 0.35) - eventPlayer.ShootRando / 10)
    if ruleCondition:
        loop()


rule "Bot Illari Pathing - Stop push":
    @Event eachPlayer
    @Hero illari
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.BotPathing == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 12

    eventPlayer.Randomizer = random.randint(0, 4)
    if eventPlayer.Randomizer != 0:
        eventPlayer.stopForcingThrottle()
        #smallMessage(getAllPlayers(), "stop push illari")
    wait(4)
    if ruleCondition:
        loop()


rule "Bot Illari Reload":
    @Event eachPlayer
    @Hero illari
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() <= 3

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Illari Outburst":
    @Event eachPlayer
    @Hero illari
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 3)
    if eventPlayer.Randomizer == 0:
        eventPlayer.startForcingButton(Button.ABILITY_1)
        wait(random.uniform(0.1, 0.3))
        eventPlayer.stopForcingButton(Button.ABILITY_1)
    wait(5)
    if ruleCondition:
        loop()


rule "Bot Illari Outburst Close":
    @Event eachPlayer
    @Hero illari
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 7.5

    eventPlayer.startForcingButton(Button.ABILITY_1)
    wait(random.uniform(0.1, 0.3))
    eventPlayer.stopForcingButton(Button.ABILITY_1)
    wait(5)
    if ruleCondition:
        loop()


rule "Bot Illari Ultimate":
    @Event eachPlayer
    @Hero illari
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHero() != Hero.ECHO
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 175
    @Condition eventPlayer.getHealth() >= 175

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        eventPlayer.startForcingButton(Button.JUMP)
        wait(2)
        eventPlayer.stopForcingButton(Button.JUMP)
    wait(5)
    if ruleCondition:
        loop()


rule "Bot Baptiste":
    @Disabled
    @Delimiter



rule "Bot Bap Heal":
    @Event eachPlayer
    @Hero baptiste
    #@Condition eventPlayer.getHero() == Hero.BAPTISTE
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.getHealth() < 125

    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "Bot Bap Crouch Jump":
    @Event eachPlayer
    @Hero baptiste
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.startForcingButton(Button.CROUCH)
    wait(random.uniform(0.3, 0.7))
    eventPlayer.stopForcingButton(Button.CROUCH)
    wait(random.uniform(0.2, 0.9))
    if eventPlayer.isUsingUltimate() == true:
        return
    eventPlayer.forceButtonPress(Button.JUMP)
    wait(5)
    if ruleCondition:
        loop()


rule "Bot Bap Crouch Jump vs Genji Echo":
    @Event eachPlayer
    @Hero baptiste
    #@Condition eventPlayer.getHero() == Hero.BAPTISTE
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition (Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.ECHO or Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI) == true
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.startForcingButton(Button.CROUCH)
    wait(random.uniform(0.3, 0.7))
    eventPlayer.stopForcingButton(Button.CROUCH)
    wait(random.uniform(0, 0.2))
    eventPlayer.forceButtonPress(Button.JUMP)
    wait(3)
    if ruleCondition:
        loop()


rule "Bot Bap Ultimate":
    @Event eachPlayer
    @Hero baptiste
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAmmo() >= 15
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.isOnGround() == true
    @Condition eventPlayer.getHealth() >= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 150

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.BotKiriHeal = true
    eventPlayer.BotShoot = false
    eventPlayer.stopFacing()
    wait()
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, 268.517, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), Relativity.TO_WORLD)
    wait(0.05)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 7 - vect(0, 2, 0)), Relativity.TO_WORLD)
    wait(0.032)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.BotStayTimer = 10
    eventPlayer.stopForcingThrottle()
    chaseAtRate(eventPlayer.BotStayTimer, 0, 1)
    wait(0.1)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(0.1)
    lbl_0:
    eventPlayer.BotKiriHeal = false
    if eventPlayer.BotPathing == true:
        eventPlayer.BotShoot = true
    waitUntil(eventPlayer.isDead() == true, 10)
    eventPlayer.BotStayTimer = 0


rule "Bot Bap Primary":
    @Event eachPlayer
    @Hero baptiste
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true

    #eventPlayer.ShootRando = random.randint(0, 5)
    eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopFacing()
    if eventPlayer.BotKiriHeal == true:
        goto lbl_0
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.6, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
    lbl_0:
    wait()
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_1
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    lbl_1:
    wait(0.1)
    if eventPlayer.BotKiriHeal == true:
        goto lbl_2
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    lbl_2:
    eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
    wait(random.uniform(0.4, eventPlayer.BotCassDif[1] - 0.1) - eventPlayer.ShootRando / 10)
    #wait(random.randint(0.6, 0.85) - eventPlayer.ShootRando / 10)
    while eventPlayer.BotShoot == true:
        #eventPlayer.ShootRando = random.randint(0, 8)
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        eventPlayer.stopFacing()
        if eventPlayer.BotKiriHeal == true:
            goto lbl_3
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.6, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        lbl_3:
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_4
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_4:
        wait(0.1)
        if eventPlayer.BotKiriHeal == true:
            goto lbl_5
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        lbl_5:
        #wait(random.randint(0.6, 0.95) - eventPlayer.ShootRando / 10)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
        wait(random.uniform(0.4, eventPlayer.BotCassDif[1] - 0.1) - eventPlayer.ShootRando / 10)
    if ruleCondition:
        loop()


rule "Bot Bap Reload":
    @Event eachPlayer
    @Hero baptiste
    #@Condition eventPlayer.getHero() == Hero.BAPTISTE
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() <= 15

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Zen":
    @Disabled
    @Delimiter



rule "Bot Zen Discord":
    @Event eachPlayer
    @Hero zenyatta
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isFiringSecondaryFire() == false

    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(1, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


def ZenAim():
    @Name "Bot Zen Aim"

    eventPlayer.stopFacing()
    eventPlayer.ZenAim = distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())
    if eventPlayer.getHero() == Hero.ECHO:
        eventPlayer.ZenAim = eventPlayer.ZenAim / 75
    elif eventPlayer.getHero() == Hero.HANZO:
        eventPlayer.ZenAim = eventPlayer.ZenAim / 110
    elif eventPlayer.getHero() == Hero.GENJI:
        eventPlayer.ZenAim = eventPlayer.ZenAim / 60
    else:
        eventPlayer.ZenAim = eventPlayer.ZenAim / 90
    eventPlayer.ZenAim = eventPlayer.ZenAim * Arena1Q[eventPlayer.TargetNumber].getVelocity()
    eventPlayer.ZenAim = eventPlayer.ZenAim + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    if eventPlayer.getHero() == Hero.KIRIKO:
        eventPlayer.ZenAim = vect(eventPlayer.ZenAim.x, eventPlayer.ZenAim.y + 0.2, eventPlayer.ZenAim.z)
    elif eventPlayer.getHero() == Hero.HANZO:
        eventPlayer.ZenAim = vect(eventPlayer.ZenAim.x, eventPlayer.ZenAim.y + 0.2, eventPlayer.ZenAim.z)
    else:
        if eventPlayer.BotDifficulty <= 2:
            eventPlayer.ZenAim = vect(eventPlayer.ZenAim.x, eventPlayer.ZenAim.y - 0.5, eventPlayer.ZenAim.z)
        else:
            eventPlayer.ZenAim = vect(eventPlayer.ZenAim.x, eventPlayer.ZenAim.y - random.uniform(0, 0.2), eventPlayer.ZenAim.z)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ZenAim), Relativity.TO_WORLD)


rule "Bot Zen Primary":
    @Event eachPlayer
    @Hero zenyatta
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isReloading() == false

    #wait(0.2, Wait.ABORT_WHEN_FALSE)
    wait(eventPlayer.BotCassDif[1] - 0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    if eventPlayer.Randomizer <= 2:
        ZenAim()
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_0:
        wait(0.1)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    else:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        wait(0.1)
    #wait(random.uniform(0.1, eventPlayer.BotCassDif[1] - 0.4))
    wait(random.uniform(0.3, eventPlayer.BotCassDif[1] - 0.2))
    if ruleCondition:
        loop()


rule "Bot Zen Right Click":
    @Event eachPlayer
    @Hero zenyatta
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() >= 10

    wait(0.3, Wait.ABORT_WHEN_FALSE)
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    wait(3)
    if eventPlayer.isFiringSecondaryFire() == true:
        eventPlayer.forceButtonPress(Button.MELEE)
    wait(1.5)
    if ruleCondition:
        loop()


rule "Bot Zen Release Right click":
    @Event eachPlayer
    @Hero zenyatta
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    ZenAim()
    wait(0.05)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    for eventPlayer.BotControl in range(6):
        wait(0.05)
        ZenAim()
    lbl_0:


rule "Bot Zen Melee":
    @Event eachPlayer
    @Hero zenyatta
    #@Condition eventPlayer.getHero() == Hero.ZENYATTA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 3
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isFiringSecondaryFire() == false

    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.MELEE)
    lbl_0:


rule "Bot Zen Reload":
    @Event eachPlayer
    @Hero zenyatta
    #@Condition eventPlayer.getHero() == Hero.ZENYATTA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.getAmmo() < 10
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.BotShoot == false

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Zen Ultimate":
    @Event eachPlayer
    @Hero zenyatta
    #@Condition eventPlayer.getHero() == Hero.ZENYATTA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() <= 50
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 50

    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)


rule "Bot Soldier":
    @Disabled
    @Delimiter



rule "Bot Soldier Primary":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSoldRun == 0
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    lbl_0:
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ShootPos), 500 / (distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 5))


rule "Bot Soldier Primary Tracking":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true

    eventPlayer.ShootRando = random.uniform(1, abs(eventPlayer.BotDifficulty - 6))
    eventPlayer.ShootPosHelp = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    eventPlayer.ShootPos = vect(eventPlayer.ShootPosHelp.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPosHelp.z)
    wait(eventPlayer.ShootRando / 10 - 0, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Soldier Stop Primary":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == false

    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    if ruleCondition:
        loop()


rule "Bot Soldier Stop Primary vs Reflect":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true

    wait(random.uniform(0, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    waitUntil(Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == false, 2)
    if eventPlayer.getHero() == Hero.SOLDIER:
        if eventPlayer.BotShoot == true:
            eventPlayer.startForcingButton(Button.PRIMARY_FIRE)


rule "Bot Soldier Reload":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() <= 13

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Soldier Heal Field":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getHealth() <= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 100
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0

    eventPlayer.BotStayTimer = 5
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    eventPlayer.stopForcingThrottle()
    chaseAtRate(eventPlayer.BotStayTimer, 0, 1)
    waitUntil(eventPlayer.getNormalizedHealth() == 1, 5)
    eventPlayer.BotStayTimer = 0


rule "Bot Soldier Heal Field run":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == true
    @Condition eventPlayer.BotStayTimer >= 4
    @Condition eventPlayer.getHealth() <= 75
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 100

    eventPlayer.BotSoldRun = 1
    eventPlayer.forceButtonPress(Button.RELOAD)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startForcingButton(Button.ABILITY_1)
    eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 0)
    #while eventPlayer.BotStayTimer >= 3:
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + Vector.LEFT), random.uniform(500, 500), Relativity.TO_PLAYER)
    wait(random.uniform(0.5, 1))
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + Vector.RIGHT), random.uniform(500, 500), Relativity.TO_PLAYER)
    wait(random.uniform(0.5, 1))
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + Vector.LEFT), random.uniform(500, 500), Relativity.TO_PLAYER)
    wait(random.uniform(0.5, 1))
    #__end__()
    #waitUntil(eventPlayer.BotStayTimer == 0 or eventPlayer.getNormalizedHealth() == 1, 5)
    eventPlayer.BotSoldRun = 0
    eventPlayer.stopForcingButton(Button.ABILITY_1)
    eventPlayer.stopForcingThrottle()
    if eventPlayer.BotShoot == true:
        if eventPlayer.getHero() == Hero.SOLDIER:
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ShootPos), 500 / (distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 5))
            eventPlayer.startForcingButton(Button.PRIMARY_FIRE)


rule "Bot Soldier Rocket":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSoldRun == 0
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) == 0
    @Condition Arena1Q[eventPlayer.TargetNumber].isOnGround() == true

    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        wait(random.uniform(0, 0.3), Wait.ABORT_WHEN_FALSE)
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1.3, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        lbl_0:
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Soldier Ultimate":
    @Event eachPlayer
    @Hero soldier
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSoldRun == 0
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() >= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 150

    wait(0.4, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
    wait(1)
    while eventPlayer.isUsingUltimate() == true:
        eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
        wait(1)


rule "Bot Ana":
    @Disabled
    @Delimiter



rule "Bot Ana Pre Zoom":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit == 0
    @Condition eventPlayer.BotShoot == false
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 9

    if eventPlayer.isFiringSecondaryFire() == false:
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Ana Primary":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit == 0
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isUsingAbility2() == false

    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 7.5:
        if eventPlayer.isFiringSecondaryFire() == false:
            eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
            wait(0.15, Wait.ABORT_WHEN_FALSE)
        wait(0.1, Wait.ABORT_WHEN_FALSE)
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        eventPlayer.stopFacing()
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_0:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        wait(0.16)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0] - 1)
        wait(random.uniform(0.8, eventPlayer.BotCassDif[1] + 0.3) - eventPlayer.ShootRando / 10)
    else:
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        wait(0.2, Wait.ABORT_WHEN_FALSE)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        wait(random.uniform(0.6, eventPlayer.BotCassDif[1] + 0.1))
    if ruleCondition:
        loop()


rule "Bot Ana Reload":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() <= 6
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isUsingAbility2() == false

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Ana Ultimate":
    @Event eachPlayer
    @Hero ana
    #@Condition eventPlayer.getHero() == Hero.ANA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit == 0
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() <= 100
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 100

    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Ana Offensive Nade":
    @Event eachPlayer
    @Hero ana
    #@Condition eventPlayer.getHero() == Hero.ANA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit == 0
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition Arena1Q[eventPlayer.TargetNumber].getEyePosition().y <= 271

    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer == 0:
        wait(random.uniform(0.6, 0.6), Wait.ABORT_WHEN_FALSE)
        if distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[11]) <= 7:
        elif distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[8]) <= 4:
        else:
            eventPlayer.ZenAim = distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())
            eventPlayer.ZenAim = eventPlayer.ZenAim / 30
            eventPlayer.ZenAim = eventPlayer.ZenAim * Arena1Q[eventPlayer.TargetNumber].getVelocity()
            eventPlayer.ZenAim = eventPlayer.ZenAim + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ZenAim.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - ((17 - distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())) * 0.12), eventPlayer.ZenAim.z)), Relativity.TO_WORLD)
            wait()
            eventPlayer.forceButtonPress(Button.ABILITY_2)
            eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Ana Self Nade":
    @Event eachPlayer
    @Hero ana
    #@Condition eventPlayer.getHero() == Hero.ANA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit == 0
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.getHealth() <= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 130

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 3)
    if eventPlayer.Randomizer == 0:
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition()), Relativity.TO_WORLD)
        wait()
        eventPlayer.forceButtonPress(Button.ABILITY_2)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Ana Self Nade low":
    @Event eachPlayer
    @Hero ana
    #@Condition eventPlayer.getHero() == Hero.ANA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit == 0
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.getHealth() <= 100
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 60

    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Ana Sleep":
    @Event eachPlayer
    @Hero ana
    #@Condition eventPlayer.getHero() == Hero.ANA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.isUsingAbility2() == false

    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        wait(random.uniform(0.4, 0.5), Wait.ABORT_WHEN_FALSE)
        if distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[11]) <= 7:
        elif distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[8]) <= 4:
        elif distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), vect(-0.804, 270.455, 297.628)) <= 6:
        else:
            if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
                goto lbl_0
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            lbl_0:
            eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
            wait(0.25)
            eventPlayer.stopFacing()
            eventPlayer.ZenAim = distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())
            eventPlayer.ZenAim = eventPlayer.ZenAim / 60
            eventPlayer.ZenAim = eventPlayer.ZenAim * Arena1Q[eventPlayer.TargetNumber].getVelocity()
            eventPlayer.ZenAim = eventPlayer.ZenAim + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
            eventPlayer.ZenAim = vect(eventPlayer.ZenAim.x, eventPlayer.ZenAim.y - 0.5, eventPlayer.ZenAim.z)
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ZenAim), Relativity.TO_WORLD)
            wait(0.1)
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 150)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Ana Sleep Hit":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasStatus(Status.ASLEEP) == true
    @Condition eventPlayer.BotSleepDartHit == 0

    wait(0.05, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)
    if distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[11]) <= 7:
        eventPlayer.BotSleepDartHit = 0
    elif distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), eventPlayer.BotHelpPositions[8]) <= 4:
        eventPlayer.BotSleepDartHit = 0
    elif distance(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), vect(-0.804, 270.455, 297.628)) <= 6:
        eventPlayer.BotSleepDartHit = 0
    else:
        eventPlayer.BotSleepDartHit = 5
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        chaseAtRate(eventPlayer.BotSleepDartHit, 0, 1)
        eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 0)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getPosition()), 360)
        waitUntil(distance(eventPlayer.getPosition(), Arena1Q[eventPlayer.TargetNumber].getPosition()) <= 1.5, 5)
        if eventPlayer.BotSleepDartHit == 0:
            return
        eventPlayer.startForcingThrottle(0, 0, 0, 0, 0, 0)
        waitUntil(eventPlayer.isReloading() == false, 1.5)
        if eventPlayer.getAbilityCooldown(Button.ABILITY_2) <= eventPlayer.BotSleepDartHit:
            waitUntil(eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0, 5)
            eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
            if Arena1Q[eventPlayer.TargetNumber].getHealth() <= 70:
                goto lbl_0
            wait(0.05)
            eventPlayer.forceButtonPress(Button.ABILITY_2)
            wait(0.05)
            lbl_0:
            eventPlayer.startForcingThrottle(random.uniform(0.3, 0.5), random.uniform(0.5, 1), 0, 0, 0, 1)
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
            eventPlayer.BotSleepDartHit = 0
        else:
            waitUntil(eventPlayer.BotSleepDartHit <= 1, 5)
            eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
            eventPlayer.startForcingThrottle(random.uniform(0.3, 0.5), random.uniform(0.5, 1), 0, 0, 0, 1)
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
            eventPlayer.BotSleepDartHit = 0
    wait(7)


rule "Bot Ana Sleep Broke":
    @Event eachPlayer
    @Hero ana
    #@Condition eventPlayer.getHero() == Hero.ANA
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSleepDartHit != 0
    @Condition Arena1Q[eventPlayer.TargetNumber].hasStatus(Status.ASLEEP) == false

    eventPlayer.BotSleepDartHit = 0
    eventPlayer.stopForcingThrottle()
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Sojourn":
    @Disabled
    @Delimiter



rule "Bot Sojourn Primary":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotSoldRun == 0
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true

    wait(eventPlayer.BotCassDif[1] - 0.5, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    lbl_0:
    eventPlayer.ZenAim = Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ZenAim), 500 / (distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 5))
    while eventPlayer.BotShoot == true:
        eventPlayer.ZenAim = distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition())
        eventPlayer.ZenAim = eventPlayer.ZenAim / 160
        eventPlayer.ZenAim = eventPlayer.ZenAim * Arena1Q[eventPlayer.TargetNumber].getVelocity()
        eventPlayer.ZenAim = eventPlayer.ZenAim + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        eventPlayer.ZenAim = vect(eventPlayer.ZenAim.x, eventPlayer.ZenAim.y - 0.5, eventPlayer.ZenAim.z)
        wait(eventPlayer.BotCassDif[1] - 0.4, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Sojourn Stop Primary":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == false

    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


rule "Bot Sojourn Stop Primary vs Reflect":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true

    wait(random.uniform(0, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    waitUntil(Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == false, 2)
    if eventPlayer.getHero() == Hero.SOJOURN:
        if eventPlayer.BotShoot == true:
            eventPlayer.startForcingButton(Button.PRIMARY_FIRE)


rule "Bot Sojourn Secondary resource count":
    @Event playerDealtDamage
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventAbility == Button.PRIMARY_FIRE

    eventPlayer.BotSojRail += 5
    if eventPlayer.BotSojRail >= 100:
        eventPlayer.BotSojRail = 100


rule "Bot Sojourn Secondary":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.BotSojRail + 30 >= Arena1Q[eventPlayer.TargetNumber].getHealth()
    @Condition eventPlayer.BotSojRail >= 5

    wait(random.uniform(0.2, 0.4), Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    eventPlayer.BotSojRail = 0
    lbl_0:
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Sojourn Reload":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == false
    @Condition eventPlayer.getAmmo() <= 18

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)


rule "Bot Sojourn Disruptor":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition Arena1Q[eventPlayer.TargetNumber].isOnGround() == true

    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        wait(random.uniform(0, 0.3), Wait.ABORT_WHEN_FALSE)
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1.3, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), Relativity.TO_WORLD)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1.3, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 5000)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.ABILITY_2)
        lbl_0:
        wait(0.2)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ZenAim), 500 / (distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 5))
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Sojourn Slide":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0

    wait(random.uniform(2, 5), Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer == 0:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        eventPlayer.Randomizer = random.randint(0, 1)
        if eventPlayer.Randomizer == 0:
            wait(random.uniform(0.3, 0.9))
            eventPlayer.forceButtonPress(Button.JUMP)
    wait(random.uniform(1, 2), Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Sojourn Slide low":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.getHealth() <= 75
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 60

    wait(random.uniform(0.3, 0.5), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        wait(random.uniform(0.3, 0.9))
        eventPlayer.forceButtonPress(Button.JUMP)
    wait(random.uniform(1, 2), Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Sojourn Ultimate":
    @Event eachPlayer
    @Hero sojourn
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() >= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 150

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
    wait(1)
    while eventPlayer.isUsingUltimate() == true:
        if eventPlayer.BotShoot == true:
            if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
                goto lbl_0
            eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
            eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
            eventPlayer.BotSojRail = 0
            lbl_0:
        wait(1.5)
    if ruleCondition:
        loop()


rule "Bot Tracer":
    @Disabled
    @Delimiter



rule "Bot Tracer Move towards player":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    #@Condition eventPlayer.BotShoot == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 10
    @Condition Arena1Q[eventPlayer.TargetNumber].getEyePosition().y <= 275

    eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
    wait(2, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Tracer Stop moving towards":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    #@Condition eventPlayer.BotShoot == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 7

    eventPlayer.stopForcingThrottle()
    wait(2, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Tracer First Blink":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotTracerFirstBlink == true
    @Condition eventPlayer.BotShoot == true
    @Condition distance(eventPlayer.getEyePosition(), raycast(Arena1Q[eventPlayer.TargetNumber].getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition() + Arena1Q[eventPlayer.TargetNumber].getFacingDirection() * distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), getAllPlayers(), Arena1Q[eventPlayer.TargetNumber], true).getHitPosition()) <= 2

    #wait(1)
    #waitUntil(Arena1Q[eventPlayer.TargetNumber].isInViewAngle(eventPlayer.getEyePosition(), 25), 20)
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
    eventPlayer.BotPathing = false
    wait(0.05)
    #smallMessage(getAllPlayers(), "first blink")
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer == 0:
        wait(0.1)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "first double")
    eventPlayer.BotPathing = true
    wait(0.25)
    eventPlayer.BotTracerFirstBlink = false


rule "Bot Tracer Blink 2 charges":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.BotShoot == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) >= 2
    @Condition eventPlayer.BotTracerFirstBlink == false
    @Condition Arena1Q[eventPlayer.TargetNumber].isInViewAngle(eventPlayer.getEyePosition(), 45) == true

    wait(random.uniform(0.4, 1), Wait.ABORT_WHEN_FALSE)
    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 15:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "2 blink far")
        eventPlayer.BotPathing = true
    elif distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 6.5:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "2 blink close")
        eventPlayer.BotPathing = true
    else:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "2 blink mid")
    if ruleCondition:
        loop()


rule "Bot Tracer Blink Reload":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) >= 1
    @Condition eventPlayer.BotTracerFirstBlink == false
    @Condition Arena1Q[eventPlayer.TargetNumber].isReloading() == false
    @Condition eventPlayer.isReloading() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isInViewAngle(eventPlayer.getEyePosition(), 45) == true

    wait(random.uniform(0.5, 0.5), Wait.ABORT_WHEN_FALSE)
    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 15:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "blink reload")
        eventPlayer.BotPathing = true
    elif distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 6:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "blink reload")
        eventPlayer.BotPathing = true
    else:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        #smallMessage(getAllPlayers(), "blink reload")
    if ruleCondition:
        loop()


rule "Bot Tracer Blink Close < 6":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) >= 1
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 6
    @Condition Arena1Q[eventPlayer.TargetNumber].isInViewAngle(eventPlayer.getEyePosition(), 30) == true

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
    eventPlayer.BotPathing = false
    wait(0.05)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.BotPathing = true
    wait(random.uniform(0.1, 0.7))


rule "Bot Tracer Blink Low HP":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isReloading() == false
    @Condition Arena1Q[eventPlayer.TargetNumber].isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) >= 1
    @Condition eventPlayer.getHealth() <= 75
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition Arena1Q[eventPlayer.TargetNumber].isInViewAngle(eventPlayer.getEyePosition(), 30) == true

    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 6.5:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        eventPlayer.BotPathing = true
    else:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(random.uniform(0.1, 0.7))
    #eventPlayer.Randomizer = random.randint(0, 0)
    #if eventPlayer.Randomizer == 0:
    #wait(0.1)
    #eventPlayer.forceButtonPress(Button.ABILITY_1)
    #__end__()
    if ruleCondition:
        loop()


rule "Bot Tracer Recall HP log":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true

    for eventPlayer.Control in range(29):
        eventPlayer.BotTracerRecall[eventPlayer.Control] = eventPlayer.getHealth()
        wait(0.1)
    if ruleCondition:
        loop()


rule "Bot Tracer Recall":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.getHealth() + 85 < sorted(eventPlayer.BotTracerRecall).last() == true

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_2)


rule "Bot Tracer Recall low hp":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.getHealth() <= 60

    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_2)


rule "Bot Tracer Primary":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 15

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    lbl_0:
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ShootPos), 500 / (distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 5))


rule "Bot Tracer Primary Tracking":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true

    eventPlayer.ShootRando = random.uniform(1, abs(eventPlayer.BotDifficulty - 6))
    #eventPlayer.ShootRando = random.randint(1, 3)
    eventPlayer.ShootPosHelp = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    eventPlayer.ShootPos = vect(eventPlayer.ShootPosHelp.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPosHelp.z)
    wait(eventPlayer.ShootRando / 10 - 0, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Tracer Stop Primary":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition (eventPlayer.BotShoot == false or distance(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()) > 15.5) == true

    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
    if ruleCondition:
        loop()


rule "Bot Tracer Stop Primary vs Reflect":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true
    @Condition eventPlayer.isUsingUltimate() == false

    wait(random.uniform(0, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    waitUntil(Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == false, 2)
    if eventPlayer.getHero() == Hero.TRACER:
        if eventPlayer.BotShoot == true:
            eventPlayer.startForcingButton(Button.PRIMARY_FIRE)


rule "Bot Tracer Ultimate":
    @Event eachPlayer
    @Hero tracer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.getHealth() >= 50
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 100
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 10
    @Condition Arena1Q[eventPlayer.TargetNumber].getEyePosition().y <= 271

    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 6:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 720)
        eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        #smallMessage(getAllPlayers(), "close ult")
        wait(0.2)
        if eventPlayer.isUsingUltimate() == true:
            wait(0.9)
            startDamageModification(eventPlayer, eventPlayer, 1, DamageReeval.NONE)
            wait(0.7)
            stopDamageModification(getLastDamageModification())
    elif distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 10 and eventPlayer.getAbilityCharge(Button.ABILITY_1) >= 1:
        #smallMessage(getAllPlayers(), "blink ult")
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 720)
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getEyePosition(), Arena1Q.getEyePosition()), eventPlayer.TargetNumber, Relativity.TO_WORLD)
        eventPlayer.BotPathing = false
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        eventPlayer.BotPathing = true
        eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
        wait(0.1)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.2)
        if eventPlayer.isUsingUltimate() == true:
            wait(0.9)
            startDamageModification(eventPlayer, eventPlayer, 1, DamageReeval.NONE)
            wait(0.7)
            stopDamageModification(getLastDamageModification())
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Echo":
    @Disabled
    @Delimiter



rule "Bot Echo Fly":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isOnGround() == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0

    if eventPlayer.BotDifficulty <= 1:
        goto lbl_0
    eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
    lbl_0:
    eventPlayer.startForcingButton(Button.JUMP)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Echo Primary":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.isReloading() == false

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    if eventPlayer.Randomizer <= 2:
        ZenAim()
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_0:
        wait(0.1)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    else:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        wait(0.1)
    wait(random.uniform(0.03, eventPlayer.BotCassDif[1] - 0.4))
    if ruleCondition:
        loop()


rule "Bot Echo Moving Forward":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotDifficulty >= 2
    @Condition eventPlayer.isOnGround() == false
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 10

    eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Echo stop Moving Forward":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 10

    eventPlayer.stopForcingThrottle()
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Echo Secondary":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) == 0

    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    #eventPlayer.Randomizer = random.randint(0, 3)
    if eventPlayer.Randomizer <= 2:
        wait(0.2, Wait.ABORT_WHEN_FALSE)
        ZenAim()
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(0.05)
        ZenAim()
        wait(0.05)
        ZenAim()
        wait(0.05)
        ZenAim()
        wait(0.05)
        ZenAim()
        wait(0.05)
        ZenAim()
        wait(0.05)
        ZenAim()
    wait(3)
    if ruleCondition:
        loop()


rule "Bot Echo Beam":
    @Event eachPlayer
    @Hero echo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition Arena1Q[eventPlayer.TargetNumber].getNormalizedHealth() <= 0.6
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 35

    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    #eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer <= 2:
        eventPlayer.stopForcingButton(Button.JUMP)
        eventPlayer.startForcingThrottle(1, 1, 0, 1, 0, 1)
        waitUntil(distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 16, 10)
        if not ruleCondition:
            return
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 360)
        eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Genji":
    @Disabled
    @Delimiter



rule "Bot Genji Jump":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isOnGround() == true

    if eventPlayer.isUsingUltimate() == true:
        eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
    elif distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 5:
        eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
    else:
        eventPlayer.stopForcingThrottle()
    wait(random.uniform(0.1, 0.3), Wait.ABORT_WHEN_FALSE)
    waitUntil(eventPlayer.isOnWall() == false, 1)
    eventPlayer.forceButtonPress(Button.JUMP)
    wait(random.uniform(0.2, 0.5))
    eventPlayer.forceButtonPress(Button.JUMP)
    if ruleCondition:
        loop()


rule "Bot Genji Climb":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isOnWall() == true

    eventPlayer.startForcingButton(Button.JUMP)
    wait(1)
    eventPlayer.stopForcingButton(Button.JUMP)


rule "Bot Genji Dash":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isOnWall() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 14

    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 5000)
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), Relativity.TO_WORLD)
    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    #smallMessage(getAllPlayers(), "dash")
    wait(0.3)
    if eventPlayer.isOnGround() == false:
        eventPlayer.forceButtonPress(Button.JUMP)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)
    wait(2)
    if ruleCondition:
        loop()


rule "Bot Genji Reflect far":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 16
    @Condition eventPlayer.getNormalizedHealth() != 1

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)


rule "Bot Genji Reflect low":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.getHealth() <= 75

    eventPlayer.forceButtonPress(Button.ABILITY_2)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)
    wait(random.uniform(0.7, 2))
    if eventPlayer.getNormalizedHealth() == 1:
        return
    eventPlayer.forceButtonPress(Button.ABILITY_2)


rule "Bot Genji Reflect random":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.getHealth() <= 175

    eventPlayer.Randomizer = random.randint(0, 3)
    if eventPlayer.Randomizer == 0:
        eventPlayer.forceButtonPress(Button.ABILITY_2)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)
        wait(random.uniform(0.7, 2))
        if eventPlayer.getNormalizedHealth() == 1:
            return
        eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(4)
    if ruleCondition:
        loop()


rule "Bot Genji Primary":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isReloading() == false
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 12

    #smallMessage(getAllPlayers(), "prim")
    wait(eventPlayer.BotCassDif[0] / 10, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    lbl_0:
    #wait(0.05)
    ZenAim()
    wait(0.09)
    ZenAim()
    wait(0.09)
    ZenAim()
    wait(0.09)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)
    wait(0.41)
    if ruleCondition:
        loop()


rule "Bot Genji Secondary":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.isFiringPrimaryFire() == false
    @Condition eventPlayer.isReloading() == false
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) < 12

    #smallMessage(getAllPlayers(), "sec")
    wait(eventPlayer.BotCassDif[0] / 10, Wait.ABORT_WHEN_FALSE)
    if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
        goto lbl_0
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    lbl_0:
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)
    wait(0.48)
    if eventPlayer.BotDifficulty == 0:
        wait(0.4)
    elif eventPlayer.BotDifficulty == 1:
        wait(0.2)
    if ruleCondition:
        loop()


rule "Bot Genji Ultimate":
    @Event eachPlayer
    @Hero genji
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHero() != Hero.ECHO
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() >= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 150

    eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
    if eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 5000)
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 1, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), Relativity.TO_WORLD)
        wait()
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(0.3)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.5)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(Arena1Q[eventPlayer.TargetNumber].getEyePosition().x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.5, Arena1Q[eventPlayer.TargetNumber].getEyePosition().z)), 400)
    waitUntil(eventPlayer.isUsingUltimate() == false, 8)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


rule "Bot Kiriko":
    @Disabled
    @Delimiter



rule "Bot Kiriko Aggro & Climb":
    @Event eachPlayer
    @Hero kiriko
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true

    eventPlayer.startForcingButton(Button.JUMP)
    if eventPlayer.BotDifficulty <= 1:
        if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 12:
            eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
        else:
            eventPlayer.stopForcingThrottle()
    else:
        if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 8:
            eventPlayer.startForcingThrottle(1, 1, 0, 0, 0, 1)
        else:
            eventPlayer.stopForcingThrottle()
    wait(1.5)
    if ruleCondition:
        loop()


rule "Bot Kiriko Shoot":
    @Event eachPlayer
    @Hero kiriko
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.isUsingAbility2() == false

    #if eventPlayer.BotDifficulty == 0:
    #wait(0.4, Wait.ABORT_WHEN_FALSE)
    #elif eventPlayer.BotDifficulty == 1:
    #wait(0.2, Wait.ABORT_WHEN_FALSE)
    #__end__()
    if eventPlayer.isUsingUltimate() == true:
        goto lbl_0
    wait(eventPlayer.BotCassDif[1] - 0.5, Wait.ABORT_WHEN_FALSE)
    lbl_0:
    #wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    if eventPlayer.Randomizer <= 2:
        if eventPlayer.BotKiriHeal == true:
            goto lbl_1
        ZenAim()
        lbl_1:
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_2
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        lbl_2:
        wait(0.1)
        if eventPlayer.BotKiriHeal == true:
            goto lbl_3
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        lbl_3:
    else:
        if eventPlayer.BotKiriHeal == true:
            goto lbl_4
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        lbl_4:
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_5
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        lbl_5:
        wait(0.1)
    wait(random.uniform(0.4, eventPlayer.BotCassDif[1] - 0.1))
    if ruleCondition:
        loop()


rule "Bot Kiriko Self Suzu random":
    @Event eachPlayer
    @Hero kiriko
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.getHealth() <= 170

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer == 0:
        eventPlayer.BotKiriHeal = true
        eventPlayer.stopFacing()
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition()), Relativity.TO_WORLD)
        wait()
        eventPlayer.forceButtonPress(Button.ABILITY_2)
        wait(0.1)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        eventPlayer.BotKiriHeal = false
    wait(3)
    if ruleCondition:
        loop()


rule "Bot Kiriko Self Suzu low":
    @Event eachPlayer
    @Hero kiriko
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0
    @Condition eventPlayer.getHealth() <= 100

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.BotKiriHeal = true
    eventPlayer.stopFacing()
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition()), Relativity.TO_WORLD)
    wait()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.1)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    eventPlayer.BotKiriHeal = false
    wait(1)
    if ruleCondition:
        loop()


rule "Bot Kiriko Ultimate":
    @Event eachPlayer
    @Hero kiriko
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() >= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 150

    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    wait(0.1)
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "Bot Hanzo":
    @Disabled
    @Delimiter



rule "Bot Hanzo Lunge":
    @Event eachPlayer
    @Hero hanzo
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isOnGround() == true
    @Condition eventPlayer.getAbilityCooldown(Button.JUMP) == 0

    eventPlayer.forceButtonPress(Button.JUMP)
    wait(random.uniform(0.2, 0.5))
    eventPlayer.forceButtonPress(Button.JUMP)
    if ruleCondition:
        loop()


rule "Bot Hanzo Primary":
    @Event eachPlayer
    @Hero hanzo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.BotZoom >= 0.7

    wait(eventPlayer.BotCassDif[1] - 0.5, Wait.ABORT_WHEN_FALSE)
    #wait(0.2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    if eventPlayer.Randomizer <= 2:
        ZenAim()
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        lbl_0:
        wait(0.1)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    else:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        lbl_1:
        wait(0.1)
    wait(0.4)
    if ruleCondition:
        loop()


rule "Bot Hanzo Storm Arrows":
    @Event eachPlayer
    @Hero hanzo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == 0

    wait(0.3, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer == 0:
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(3)
    if ruleCondition:
        loop()


rule "Bot Hanzo Storm Arrows Shoot":
    @Event eachPlayer
    @Hero hanzo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility2() == true

    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(eventPlayer.BotCassDif[1] - 0.5, Wait.ABORT_WHEN_FALSE)
    #wait(0.24, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, eventPlayer.BotCassDif[0] + 1)
    if eventPlayer.Randomizer <= 2:
        ZenAim()
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_0:
        wait(0.224)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    else:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        wait(0.24)
    if ruleCondition:
        loop()


rule "Bot Hanzo Loading":
    @Event eachPlayer
    @Hero hanzo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isUsingAbility2() == false

    eventPlayer.BotZoom = 0
    chaseAtRate(eventPlayer.BotZoom, 0.7, 1)


rule "Bot Hanzo not Loading":
    @Event eachPlayer
    @Hero hanzo
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isFiringPrimaryFire() == false
    @Condition eventPlayer.isUsingAbility2() == false

    stopChasingVariable(eventPlayer.BotZoom)
    eventPlayer.BotZoom = 0
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    #if eventPlayer.isUsingAbility2() == false:
    #__end__()
    wait(0.5)
    if ruleCondition:
        loop()


rule "Bot Ashe":
    @Disabled
    @Delimiter



rule "Bot Ashe Boop":
    @Event eachPlayer
    @Hero ashe
    @Condition eventPlayer.isDummy() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].hasSpawned() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) <= 8

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Randomizer = random.randint(0, 2)
    if eventPlayer.Randomizer == 0:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(1.5)
    if ruleCondition:
        loop()


rule "Bot Ashe Primary":
    @Event eachPlayer
    @Hero ashe
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility1() == false

    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 12:
        if eventPlayer.isFiringSecondaryFire() == false:
            eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
            wait(0.1, Wait.ABORT_WHEN_FALSE)
        wait(0.1, Wait.ABORT_WHEN_FALSE)
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        eventPlayer.stopFacing()
        eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_0
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_0:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0] - 1)
        wait(random.uniform(0.55, eventPlayer.BotCassDif[1] + 0.05) - eventPlayer.ShootRando / 10)
    else:
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        eventPlayer.stopFacing()
        if eventPlayer.BotDifficulty <= 2:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        else:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0.4), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0])
        wait(random.uniform(0.26, eventPlayer.BotCassDif[1] - 0.24) - eventPlayer.ShootRando / 10)
    if ruleCondition:
        loop()


rule "Bot Ashe Ultimate":
    @Event eachPlayer
    @Hero ashe
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.getUltCharge() == 100
    @Condition eventPlayer.getHealth() >= 150
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 150

    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    wait(0.1)
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "Bot Widow":
    @Disabled
    @Delimiter



rule "Bot Widow Finish low hp":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() < 75

    if eventPlayer.BotKiriHeal == true:
        goto lbl_0
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
    lbl_0:
    if eventPlayer.BotZoom >= 0.5:
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
    else:
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_2
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        lbl_2:
    wait(0.5)
    if ruleCondition:
        loop()


rule "Bot Widow Stop smg vs reflect":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI
    @Condition Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true

    wait(random.uniform(0, 0.3), Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.RELOAD)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


rule "Bot Widow Grapple":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) == 0
    @Condition eventPlayer.BotZoom <= 0.5
    #@Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 75
    @Condition eventPlayer.isFiringPrimaryFire() == false

    eventPlayer.Randomizer = random.randint(0, 1)
    if eventPlayer.Randomizer == 0:
        if distance(eventPlayer.getPosition(), eventPlayer.BotMovePositions[0]) <= 6:
            eventPlayer.BotKiriHeal = true
            eventPlayer.stopFacing()
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(-12.42, 283.78, 286.72)), 900)
            wait(0.1)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.3)
            eventPlayer.BotKiriHeal = false
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
            wait(random.uniform(0.5, 1.5))
            eventPlayer.forceButtonPress(Button.JUMP)
        elif distance(eventPlayer.getPosition(), eventPlayer.BotMovePositions[1]) <= 4:
            eventPlayer.BotKiriHeal = true
            eventPlayer.stopFacing()
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(-5.02, 285.18, 266.75)), 900)
            wait(0.1)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.3)
            eventPlayer.BotKiriHeal = false
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
            wait(random.uniform(0.5, 1.5))
            eventPlayer.forceButtonPress(Button.JUMP)
        elif distance(eventPlayer.getPosition(), eventPlayer.BotMovePositions[2]) <= 4:
            eventPlayer.BotKiriHeal = true
            eventPlayer.stopFacing()
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(5.02, 285.18, 266.75)), 900)
            wait(0.1)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.3)
            eventPlayer.BotKiriHeal = false
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
            wait(random.uniform(0.5, 1.5))
            eventPlayer.forceButtonPress(Button.JUMP)
        elif distance(eventPlayer.getPosition(), eventPlayer.BotMovePositions[3]) <= 6:
            eventPlayer.BotKiriHeal = true
            eventPlayer.stopFacing()
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(12.42, 283.78, 286.72)), 900)
            wait(0.1)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.3)
            eventPlayer.BotKiriHeal = false
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
            wait(random.uniform(0.5, 1.5))
            eventPlayer.forceButtonPress(Button.JUMP)
        wait(5)
    else:
        wait(3)
    if ruleCondition:
        loop()


rule "Bot Widow Stop smg / Start zoom":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.BotShoot == false

    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    if eventPlayer.isFiringSecondaryFire() == false:
        wait(2, Wait.ABORT_WHEN_FALSE)
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Bot Widow Zooming":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.BotZoom = 0
    chaseAtRate(eventPlayer.BotZoom, 1, 1)


rule "Bot Widow Not zooming":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isFiringSecondaryFire() == false

    stopChasingVariable(eventPlayer.BotZoom)
    eventPlayer.BotZoom = 0


rule "Bot Widow Primary":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true
    @Condition eventPlayer.isReloading() == false
    @Condition eventPlayer.BotShoot == true
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition Arena1Q[eventPlayer.TargetNumber].getHealth() >= 75

    if distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) >= 10 or eventPlayer.BotZoom >= 0.5:
        if eventPlayer.isFiringSecondaryFire() == false:
            eventPlayer.Randomizer = random.randint(0, 2)
            if eventPlayer.Randomizer != 0:
                eventPlayer.forceButtonPress(Button.JUMP)
                wait(0.05, Wait.ABORT_WHEN_FALSE)
            eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
            wait(0.32, Wait.ABORT_WHEN_FALSE)
        waitUntil(eventPlayer.BotZoom == 1, 20)
        waitUntil(eventPlayer.BotShoot == true, 20)
        wait(eventPlayer.BotCassDif[1] - 0.3, Wait.ABORT_WHEN_FALSE)
        eventPlayer.ShootRando = random.uniform(0, eventPlayer.BotCassDif[0] - 1)
        eventPlayer.ShootPos = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
        wait(eventPlayer.ShootRando / 10 - 0.016, Wait.ABORT_WHEN_FALSE)
        if eventPlayer.BotKiriHeal == true:
            goto lbl_0
        eventPlayer.stopFacing()
        if eventPlayer.BotDifficulty == 4:
            lbl_0:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        else:
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.ShootPos.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - random.uniform(0, 0.5), eventPlayer.ShootPos.z)), Relativity.TO_WORLD)
        wait()
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_1
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        lbl_1:
        wait(0.1)
        if eventPlayer.BotKiriHeal == true:
            goto lbl_2
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        lbl_2:
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        wait(0.2)
    else:
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        #eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()), 300)
        wait(0.2, Wait.ABORT_WHEN_FALSE)
        if eventPlayer.BotKiriHeal == true:
            goto lbl_3
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.ShootPos), 500 / (distance(eventPlayer.getEyePosition(), Arena1Q[eventPlayer.TargetNumber].getEyePosition()) / 5))
        lbl_3:
        if Arena1Q[eventPlayer.TargetNumber].getHero() == Hero.GENJI and Arena1Q[eventPlayer.TargetNumber].isUsingAbility2() == true:
            goto lbl_4
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        lbl_4:
        wait(0.5)
    if ruleCondition:
        loop()


rule "Bot Widow Smg Tracking":
    @Event eachPlayer
    @Hero widowmaker
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition Arena1Q[eventPlayer.TargetNumber].isAlive() == true
    @Condition Arena1Match == true

    eventPlayer.ShootRando = random.uniform(1, abs(eventPlayer.BotDifficulty - 6))
    eventPlayer.ShootPosHelp = eventPlayer.ShootRando / 10 * Arena1Q[eventPlayer.TargetNumber].getVelocity() + Arena1Q[eventPlayer.TargetNumber].getEyePosition()
    eventPlayer.ShootPos = vect(eventPlayer.ShootPosHelp.x, Arena1Q[eventPlayer.TargetNumber].getEyePosition().y - 0.4, eventPlayer.ShootPosHelp.z)
    wait(eventPlayer.ShootRando / 10 - 0, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "###   All heroes mode   ###":
    @Disabled
    @Delimiter



rule "Sombra invis break":
    @Event eachPlayer
    @Hero sombra
    #@Condition AllHeroesMode == true
    @Condition eventPlayer.getHorizontalSpeed() >= 6

    wait(4.95)
    damage(eventPlayer, null, 0.001)
    heal(eventPlayer, null, 0.001)
    if ruleCondition:
        loop()


rule "Sombra invis break":
    @Event eachPlayer
    @Hero sombra
    #@Condition AllHeroesMode == true
    @Condition eventPlayer.getHorizontalSpeed() == 0

    wait(4.95, Wait.ABORT_WHEN_FALSE)
    damage(eventPlayer, null, 0.001)
    heal(eventPlayer, null, 0.001)
    if ruleCondition:
        loop()


rule "Venture no health over 250":
    @Event eachPlayer
    @Hero venture
    @Condition AllHeroesMode == true
    @Condition eventPlayer.getHealth() > 250

    damage(eventPlayer, null, eventPlayer.getHealth() - 250)
    wait(0.1)
    if ruleCondition:
        loop()


rule "Ramattra no health over 375":
    @Event eachPlayer
    @Hero ramattra
    @Condition AllHeroesMode == true
    @Condition eventPlayer.getHealth() > 345

    damage(eventPlayer, null, eventPlayer.getHealth() - 340)
    wait(0.1)
    if ruleCondition:
        loop()


rule "Mauga no health over 368":
    @Event eachPlayer
    @Hero mauga
    @Condition AllHeroesMode == true
    @Condition eventPlayer.getHealth() > 368

    damage(eventPlayer, null, eventPlayer.getHealth() - 363)
    wait(0.1)
    if ruleCondition:
        loop()


rule "Rein Shield hack":
    @Event eachPlayer
    @Hero reinhardt
    @Condition AllHeroesMode == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    wait(1.2)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 3)
    if eventPlayer.isFiringSecondaryFire() == true:
        eventPlayer.setStatusEffect(null, Status.HACKED, 0.1)


rule "Sigma no health over 356":
    @Event eachPlayer
    @Hero sigma
    @Condition AllHeroesMode == true
    @Condition eventPlayer.getHealth() > 357

    damage(eventPlayer, null, eventPlayer.getHealth() - 357)
    wait(0.1)
    if ruleCondition:
        loop()


rule "Sigma Shield cancel":
    @Event eachPlayer
    @Hero sigma
    @Condition AllHeroesMode == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    wait(1.2)
    if eventPlayer.getHero() == Hero.SIGMA:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 5)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Pharah cannot fly high vs some heroes":
    @Event eachPlayer
    @Hero pharah
    @Condition AllHeroesMode == true
    @Condition ((eventPlayer == Arena1Q[1] or eventPlayer == Arena1Q[2]) and (Arena1Q[1].getHero() in NoFlyHeroes == true or Arena1Q[2].getHero() in NoFlyHeroes == true)) == true
    @Condition eventPlayer.getEyePosition().y >= 275

    if distance(eventPlayer, vect(-0.126, 279.35, 291.717)) <= 4:
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getEyePosition(), vect(0.232, 275, 279.999)), 30, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    else:
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.getEyePosition().x, 265, eventPlayer.getEyePosition().z)), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    smallMessage(getAllPlayers(), "   Pharah cannot fly high against this hero")
    wait(1)
    if ruleCondition:
        loop()


rule "Echo cannot fly high vs some heroes":
    @Event eachPlayer
    @Hero echo
    @Condition AllHeroesMode == true
    @Condition ((eventPlayer == Arena1Q[1] or eventPlayer == Arena1Q[2]) and (Arena1Q[1].getHero() in NoFlyHeroes == true or Arena1Q[2].getHero() in NoFlyHeroes == true)) == true
    @Condition eventPlayer.getEyePosition().y >= 275

    if distance(eventPlayer, vect(-0.126, 279.35, 291.717)) <= 4:
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getEyePosition(), vect(0.232, 275, 279.999)), 30, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    else:
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getEyePosition(), vect(eventPlayer.getEyePosition().x, 265, eventPlayer.getEyePosition().z)), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    smallMessage(getAllPlayers(), "   Echo cannot fly high against this hero")
    wait(1)
    if ruleCondition:
        loop()


rule "Ball spawn Grapple":
    @Event eachPlayer
    @Hero wreckingBall

    wait(0.5)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 0)


rule "D.va ultimate charge bug fix":
    @Event eachPlayer
    @Hero dva
    @Condition eventPlayer.isInAlternateForm() == true

    eventPlayer.setUltCharge(0)
