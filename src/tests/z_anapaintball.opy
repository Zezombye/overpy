settings {
    "main": {
        "description": "Always import the code → 1DMTZ ←\nNEVER SAVE AS PRESET!\n\nTrain your aim while having fun!\nEarn medals, honor players, get a nuke...\nThe best Ana Paintball mode since 2019!\n\nDonate ≫ ko-fi.com/jinkofi\nDiscord ≫ jinko.dev/discord\nTikTok ≫ @Jinko_OW\nFull mode details ≫ www.jinko.dev/anapb",
        "modeName": "\u0001｢︻デ≡一一 ANA PAINTBALL by Jinko"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "mapRotation": "afterGame",
        "ffaSlots": 8,
        "spectatorSlots": 12,
        "returnToLobby": "never",
        "swapTeamsAfterMatch": false
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                "blackForestWinter",
                {
                    "blizzWorld": [
                        "overcast"
                    ]
                },
                "chateauGuillard",
                {
                    "dorado": [
                        "night"
                    ]
                },
                "ecopointAntarctica",
                {
                    "eichenwalde": [
                        "morning"
                    ]
                },
                {
                    "hollywood": [
                        "morning"
                    ]
                },
                "kanezaka",
                "lijiangControlCenter",
                "malevento",
                "petra"
            ]
        },
        "general": {
            "enableHeroSwitching": false,
            "enableEnemyHealthBars": false,
            "gamemodeStartTrigger": "immediately",
            "enableKillCam": false,
            "respawnTime%": 0,
            "scoreToWin": 30,
            "enableSelfInitiatedRespawn": false,
            "spawnHealthPacks": "disabled"
        }
    },
    "heroes": {
        "allTeams": {
            "ana": {
                "enableAbility2": false,
                "ability1Cooldown%": 20,
                "combatUltGen%": 0,
                "passiveUltGen%": 0
            },
            "bastion": {
                "enableInfiniteUlt": true,
                "enableSpawningWithUlt": true,
                "ultDuration%": 500
            },
            "enabledHeroes": [
                "ana"
            ],
            "general": {
                "enableInfiniteUlt": true,
                "ultGen%": 10,
                "combatUltGen%": 0,
                "passiveUltGen%": 0
            }
        }
    }
}

#Global variables

globalvar ONFIRE_STREAK 0
globalvar RAMPAGE_STREAK 1
globalvar NUCLEAR_STREAK 2
globalvar NANO_SCORE 3
globalvar LONGSHOT_DISTANCE 4
globalvar CUSTOM_RESPAWN_TIME 5
globalvar NIGHT_MAPS 6
globalvar JUMP_PAD_COLOR 7
globalvar DEATH_PLANE_BOT_MAPS 8
globalvar JumpPadPos 10
globalvar JumpPadPower 11
globalvar JumpPadSize 12
globalvar JumpPadFx 13
globalvar LongestShotPlayer 14
globalvar LongestShotValue 15
globalvar BestKillstreakPlayer 16
globalvar BestKillstreakValue 17
globalvar BestSleepAccuracyPlayer 18
globalvar BestSleepAccuracyValue 19
globalvar BestNoscopeAccuracyPlayer 20
globalvar BestNoscopeAccuracyValue 21
globalvar BestScopedAccuracyValue 22
globalvar BestScopedAccuracyPlayer 23
globalvar MatchEnded 24
globalvar Winner 25
globalvar FinalVictim 26
globalvar LongshotWin 27
globalvar i 28
globalvar FirstBlood 29
globalvar FirstSleep 30
globalvar RespawnHigherDistance 31
globalvar RespawnLowerDistance 32
globalvar RespawnFailsafeDistance 33
globalvar SpawnPointSettings 34
globalvar PlayzoneCenter 35
globalvar PlayzoneRadius 36
globalvar OutOfBoundBot 37
globalvar NanoNukeBot 38
globalvar PetraPunches 39
globalvar TempAIBotBeingRemoved 40
globalvar TempAIBotBeingRemovedName 41
globalvar RevertKillsToAIBotsEnabled 42
globalvar TempLeavingAIBotSlot 43
globalvar AIBotSlots 44
globalvar NukeExplodeFxPos 45
globalvar NukeCamHorizontalDist 46
globalvar Camdist 47
globalvar NukePos 48
globalvar NukeImpactPos 49
globalvar NukeCamPos 50
globalvar NukeCamShakeX 51
globalvar NukeCamShakeY 52
globalvar NukeCamShakeZ 53
globalvar Rainbow 54
globalvar BotName 55
globalvar SlowMo 58


#Player variables

playervar ClosestPadIndex 1
playervar LongshotCount 2
playervar LongestLongshot 3
playervar SleepShots 4
playervar SleepHits 5
playervar SleepAccuracy 6
playervar NoscopeShots 7
playervar NoscopeHits 8
playervar NoscopeAccuracy 9
playervar ScopedShots 10
playervar ScopedHits 12
playervar ScopedAccuracy 13
playervar Jumps 14
playervar PerfectQuickscopes 15
playervar ComebackCount 16
playervar Executes 17
playervar StolenKills 18
playervar DemotedPlayers 19
playervar Deaths 20
playervar ElimsBeforeQS 21
playervar KillStreak 22
playervar KillStreakBeforeDeath 23
playervar DemotedEffect 24
playervar RampageVFX 25
playervar RampageSFX 26
playervar IsOnFire 27
playervar IsOnRampage 28
playervar IsNuclear 29
playervar DisplayMedal 31
playervar SystemMessages 32
playervar MedalQueue 33
playervar MultiKillCount 34
playervar QuadFeedTimes 35
playervar EarnedCollateral 36
playervar Sandman 37
playervar PunchDrunk 38
playervar AlivePlayers 39
playervar SpawnPointsNotInLOS 40
playervar SpawnPointsFarEnoughFromPlayers 41
playervar ChosenSpawnPoint 42
playervar AIBotKillsPerSlot 43
playervar HonorQueue 44
playervar HonorBar 45
playervar HonorTarget 46
playervar RaycastLastHitPlayer 47
playervar RaycastLastHitPos 48
playervar NukeEffects 49
playervar SysMsgCount 51
playervar FixMovementBug 52
playervar IsPlayer 53
playervar IsAIBot 54
playervar LastSleptBy 55
playervar SleepUsedAndDied 56
playervar SleepLock 57
playervar SleepsOnground 58
playervar DemotionVictim 59
playervar ShutdownVictim 60
playervar StolenFrom 61
playervar NanoDelay 62
playervar DisplayStats 63
playervar OofDistance 64
playervar OofText 65
playervar Temp 66
playervar PerfectQSVFX 67


#Subroutine names

subroutine SleepDarts 0
subroutine SayVoiceline 1
subroutine SayUltStatus 2
subroutine SayThanks 3
subroutine SaySorry 4
subroutine RandomEmote 5
subroutine FromTheGrave 6
subroutine RespawnSystem 7
subroutine RespawnsCHATEAU 8
subroutine RespawnsPETRA 9
subroutine RespawnsMALEVENTO 10
subroutine RespawnsDORADO 11
subroutine RespawnsHOLLYWOOD 12
subroutine RespawnsBLIZZWORLD 13
subroutine RespawnsEICHENWALDE 14
subroutine RespawnsECOPOINT 15
subroutine RespawnsBLACKFOREST 16
subroutine RespawnsKANEZAKA 18
subroutine RespawnsLIJANGCONTROL 19


#Activated extensions

#!extension buffStatusEffects
#!extension buffAndDebuffSounds
#!extension energyExplosionEffects
#!extension explosionSounds
#!extension debuffStatusEffects
#!extension projectiles


rule "Initialize global variables":
    ONFIRE_STREAK = 5
    RAMPAGE_STREAK = 10
    NUCLEAR_STREAK = 15
    NANO_SCORE = 29
    LONGSHOT_DISTANCE = 40
    CUSTOM_RESPAWN_TIME = 1.6
    NIGHT_MAPS = [Map.EICHENWALDE_HALLOWEEN, Map.CHATEAU_GUILLARD_HALLOWEEN, Map.BLIZZ_WORLD_WINTER, Map.ECOPOINT_ANTARCTICA_WINTER, Map.HOLLYWOOD_HALLOWEEN]
    JUMP_PAD_COLOR = Color.BLUE if getCurrentMap() in NIGHT_MAPS else Color.PURPLE
    DEATH_PLANE_BOT_MAPS = [Map.BLACK_FOREST, Map.BLACK_FOREST_WINTER, Map.HOLLYWOOD, Map.HOLLYWOOD_HALLOWEEN, Map.CHATEAU_GUILLARD, Map.CHATEAU_GUILLARD_HALLOWEEN]
    MatchEnded = false
    RevertKillsToAIBotsEnabled = createWorkshopSettingBool("AI Bots", "Revert kills against removed AI bots", true)
    AIBotSlots = []
    NukeExplodeFxPos = 1
    BotName = 1
    SlowMo = 100


rule "Initialize player variables":
    @Event eachPlayer

    eventPlayer.LongestLongshot = 0
    eventPlayer.KillStreak = 0
    eventPlayer.IsOnFire = false
    eventPlayer.IsOnRampage = false
    eventPlayer.IsNuclear = false
    eventPlayer.SystemMessages = []
    eventPlayer.MedalQueue = []
    eventPlayer.QuadFeedTimes = []
    eventPlayer.HonorQueue = []
    eventPlayer.HonorBar = 0
    eventPlayer.SleepUsedAndDied = true
    eventPlayer.SleepsOnground = false
    eventPlayer.NanoDelay = 1
    eventPlayer.DisplayStats = true


rule "Disable inspector & match ending and initiate text rainbow":
    disableInspector()
    disableGamemodeCompletion()
    Rainbow = vect(0, 0, 0)
    chaseAtRate(Rainbow, vect(min(max(abs(getTotalTimeElapsed() * 50 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 50 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 50 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), 99999)


rule "Player damage & HP settings":
    @Event eachPlayer
    @Hero ana

    eventPlayer.setDamageReceived(0)
    eventPlayer.setMaxHealth(27.5)


rule "Start match sooner & pause timer":
    @Condition isAssemblingHeroes() == true

    setMatchTime(13)
    wait(13.2)
    setMatchTime(261)
    wait()
    pauseMatchTime()


rule "Detect players":
    @Event playerJoined
    @Condition eventPlayer.isDummy() == false

    eventPlayer.startForcingName("\u200b [ -C°▥°]-C Ana Bot #{0}".format(len([player for player in getAllPlayers() if player.IsAIBot])))
    if "{0}".format(eventPlayer) == "\u200b [ -C°▥°]-C Ana Bot #{0}".format(len([player for player in getAllPlayers() if player.IsAIBot])):
        eventPlayer.IsPlayer = false
        eventPlayer.IsAIBot = true
    else:
        eventPlayer.IsPlayer = true
        eventPlayer.IsAIBot = false
        eventPlayer.stopForcingName()
    eventPlayer.setRespawnTime(CUSTOM_RESPAWN_TIME)
    if MatchEnded:
        eventPlayer.disallowButton(Button.PRIMARY_FIRE)
        eventPlayer.disallowButton(Button.SECONDARY_FIRE)
        eventPlayer.disallowButton(Button.MELEE)
        eventPlayer.setStatusEffect(null, Status.ROOTED, 999)


rule "Restart game when lobby is empty":
    @Event playerLeft
    @Condition MatchEnded == false

    if getNumberOfHeroes(Hero.ANA, Team.ALL) == 0:
        restartMatch()


rule "Define spawn points, play zone and nuke settings depending on map":
    if getCurrentMap() == Map.CHATEAU_GUILLARD or getCurrentMap() == Map.CHATEAU_GUILLARD_HALLOWEEN:
        RespawnsCHATEAU()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(200.75, 21.89, 67)
        NukeCamPos = vect(241.37, 123.78, 29.92)
    elif getCurrentMap() == Map.PETRA:
        RespawnsPETRA()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(15.57, -6.6, 35.95)
        NukeCamPos = vect(25.8, 66.8, 89.99)
    elif getCurrentMap() == Map.BLACK_FOREST or getCurrentMap() == Map.BLACK_FOREST_WINTER:
        RespawnsBLACKFOREST()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(-21.97, 12.09, 5.58)
        NukeCamPos = vect(-54.85, 104.18, -38.5)
    elif getCurrentMap() == Map.MALEVENTO:
        RespawnsMALEVENTO()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(0.31, -1, -7.36)
        NukeCamPos = vect(30.1, 78, -53.59)
    elif getCurrentMap() == Map.DORADO:
        RespawnsDORADO()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(99.13, 21.23, 1.93)
        NukeCamPos = vect(119.79, 122.46, -49.05)
    elif getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN:
        RespawnsHOLLYWOOD()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(1.95, 1.6, -47.4)
        NukeCamPos = vect(1.08, 83.21, 7.6)
    elif getCurrentMap() == Map.BLIZZ_WORLD or getCurrentMap() == Map.BLIZZ_WORLD_WINTER:
        RespawnsBLIZZWORLD()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(-51.16, 11.03, 96.46)
        NukeCamPos = vect(-105.76, 102.05, 89.83)
    elif getCurrentMap() == Map.EICHENWALDE or getCurrentMap() == Map.EICHENWALDE_HALLOWEEN:
        RespawnsEICHENWALDE()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(56, 18, -80)
        NukeCamPos = vect(117, 95, -114)
    elif getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER:
        RespawnsECOPOINT()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(2.68, 7.3, 1.25)
        NukeCamPos = vect(-13.77, 92.29, -51.37)
    elif getCurrentMap() == Map.KANEZAKA:
        RespawnsKANEZAKA()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 25
        RespawnFailsafeDistance = 15
        NukeImpactPos = vect(-36.31, 5.84, -7.69)
        NukeCamPos = vect(-66.48, 91.68, -53.68)
    elif getCurrentMap() == Map.LIJIANG_CONTROL_CENTER or getCurrentMap() == Map.LIJIANG_CONTROL_CENTER_LNY:
        RespawnsLIJANGCONTROL()
        RespawnHigherDistance = 999
        RespawnLowerDistance = 30
        RespawnFailsafeDistance = 15
        PlayzoneCenter = vect(0, 267.28, 282.52)
        PlayzoneRadius = 75
        NukeImpactPos = vect(44.84, 243.67, 257.17)
        NukeCamPos = vect(93.75, 567.33, 282.32)
        #if the current map is not supported by the mode, use default spawn system
    else:
        SpawnPointSettings = 0
        PlayzoneCenter = 0
        PlayzoneRadius = 0
        NukeImpactPos = vect(0, 0, 0)
        NukeCamPos = vect(55, 80, 0)


rule "PLAYER EFFECTS":
    @Event eachPlayer
    @Hero ana

    createInWorldText(localPlayer if not localPlayer.hasStatus(Status.ASLEEP) and eventPlayer.hasStatus(Status.ASLEEP) and distance(localPlayer, eventPlayer) <= 20 and eventPlayer.isAlive() and eventPlayer.SleepsOnground and angleBetweenVectors(localPlayer.getFacingDirection(), directionTowards(localPlayer.getEyePosition(), eventPlayer)) < 5 and not MatchEnded else [], ("{0} punch to {1}".format(abilityIconString(Hero.ANA, Button.MELEE), "demote" if eventPlayer.getScore() > localPlayer.getScore() else "execute")) if localPlayer.Executes < 3 else "", eventPlayer + vect(0, 0.4, 0), 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(63, 191, 116) if eventPlayer.getScore() > localPlayer.getScore() else Color.SKY_BLUE, SpecVisibility.NEVER)
    createEffect(localPlayer if eventPlayer.KillStreak >= ONFIRE_STREAK else [], Effect.SOLDIER_SPRINTING, Color.TEAM_1, eventPlayer, 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.KillStreak >= RAMPAGE_STREAK and not eventPlayer.KillStreak == NUCLEAR_STREAK else [], Effect.ECHO_CLONING, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.KillStreak >= RAMPAGE_STREAK and eventPlayer.RampageSFX == true else [], Effect.WINSTON_PRIMAL_RAGE_SOUND, Color.TEAM_1, eventPlayer, 80 if eventPlayer == localPlayer else 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.getScore() == NANO_SCORE and eventPlayer.isAlive() and eventPlayer.NanoDelay else [], Effect.ANA_NANO_BOOSTED, Color.TEAM_1, eventPlayer, 0 if eventPlayer.isUsingUltimate() else 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.getScore() == NANO_SCORE and eventPlayer.isAlive() and eventPlayer.NanoDelay else [], Effect.ANA_NANO_BOOSTED_SOUND, Color.TEAM_1, eventPlayer, (0 if eventPlayer.isUsingUltimate() else 25) if eventPlayer == localPlayer else 150, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.DemotedEffect == true else [], Effect.SOMBRA_HACKED_SOUND, Color.TEAM_1, eventPlayer, 100 if eventPlayer == localPlayer else 0, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer.exclude(eventPlayer) if eventPlayer.RampageVFX == true and not eventPlayer.KillStreak == NUCLEAR_STREAK else [], Effect.WINSTON_PRIMAL_RAGE, Color.TEAM_1, eventPlayer, 70 if eventPlayer == localPlayer else 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.RampageVFX == true else [], Effect.WRECKING_BALL_ADAPTIVE_SHIELD_TARGET, Color.TEAM_1, eventPlayer, 70 if eventPlayer == localPlayer else 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if MatchEnded and NukePos else [], Effect.ZENYATTA_ORB_OF_DISCORD_TARGET, Color.TEAM_1, eventPlayer.exclude(Winner), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(localPlayer if eventPlayer.PerfectQSVFX == true else [], Effect.WRECKING_BALL_ADAPTIVE_SHIELD_TARGET, Color.TEAM_1, eventPlayer, 100 if eventPlayer == localPlayer else 0, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "toggle stats HUD":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true

    eventPlayer.DisplayStats = not eventPlayer.DisplayStats


rule "PLAYER HUDs":
    #SCOREBOARD STUFF
    hudSubtext(localPlayer.IsPlayer, "                                                                                                                www.jinko.{0}".format("dev/discord                  use game code  ▶  1DMTZ\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 0, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), HudReeval.VISIBILITY_AND_COLOR, SpecVisibility.NEVER)
    hudSubheader(localPlayer.IsPlayer, "always import code 1DMTZ to play the latest version!", HudPosition.TOP, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)
    #Makes the scoreboard larger and pushes the honor prompt down
    hudSubtext(localPlayer.IsPlayer, " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                                         {0}".format("                      "), HudPosition.TOP, 5, Color.WHITE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
    #Aligns the ScoreBoard Wallpapers horizontally
    hudSubheader(localPlayer.IsPlayer, "\n \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), HudPosition.RIGHT, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)
    hudSubtext(localPlayer.IsPlayer, "{0}".format("                                                         {0}    {0}       {0}    {0}".format(iconString(Icon.WARNING)) if any([player.getScore() == NANO_SCORE for player in getAllPlayers()]) else "                                                         {0}    {0}       {0}    {0}".format(abilityIconString(Hero.KIRIKO, Button.ULTIMATE))), HudPosition.RIGHT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)
    hudSubtext([localPlayer.IsPlayer and getNumberOfPlayers(Team.ALL) > 1], "\n{0}".format("                                                         {0}    {0}       {0}    {0}".format(iconString(Icon.WARNING)) if len([player for player in getAllPlayers() if player.getScore() == NANO_SCORE]) >= 2 and localPlayer.getScore() == NANO_SCORE else "                                                         {0}    {0}       {0}    {0}".format(abilityIconString(Hero.DVA, Button.ULTIMATE))), HudPosition.RIGHT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)
    #MAIN STATS (with icons)
    hudSubtext(localPlayer.IsPlayer, "▼ use [{0}] to toggle stats\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{1}".format(inputBindingString(Button.INTERACT), "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003") if localPlayer.DisplayStats else "▶ use [{0}] to toggle stats\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{1}".format(inputBindingString(Button.INTERACT), "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), HudPosition.LEFT, 8, rgb(63, 191, 116) if localPlayer.DisplayStats else rgb(63, 191, 116, 50), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    hudText(localPlayer.DisplayStats, "{0}".format(abilityIconString(Hero.SOJOURN, Button.SECONDARY_FIRE)), "Scoped Accuracy\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), "{0}%".format(localPlayer.ScopedAccuracy), HudPosition.LEFT, 10, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.ScopedAccuracy == BestScopedAccuracyValue and localPlayer.ScopedShots >= 15 and localPlayer.ScopedAccuracy > 0 else rgb(63, 191, 116), Color.WHITE, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.ScopedAccuracy == BestScopedAccuracyValue and localPlayer.ScopedShots >= 15 and localPlayer.ScopedAccuracy > 0 else rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    hudText(localPlayer.DisplayStats, "{0}".format(abilityIconString(Hero.ANA, Button.ULTIMATE)), "Noscope Accuracy\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), "{0}%".format(localPlayer.NoscopeAccuracy), HudPosition.LEFT, 11, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.NoscopeAccuracy == BestNoscopeAccuracyValue and localPlayer.NoscopeShots >= 15 and localPlayer.NoscopeAccuracy > 0 else rgb(63, 191, 116), Color.WHITE, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.NoscopeAccuracy == BestNoscopeAccuracyValue and localPlayer.NoscopeShots >= 15 and localPlayer.NoscopeAccuracy > 0 else rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    hudText(localPlayer.DisplayStats, "{0}".format(abilityIconString(Hero.ANA, Button.ABILITY_1)), "Sleep Dart Accuracy\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), "{0}%".format(localPlayer.SleepAccuracy), HudPosition.LEFT, 12, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.SleepAccuracy == BestSleepAccuracyValue and localPlayer.SleepShots >= 10 and localPlayer.SleepAccuracy > 0 else rgb(63, 191, 116), Color.WHITE, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.SleepAccuracy == BestSleepAccuracyValue and localPlayer.SleepShots >= 10 and localPlayer.SleepAccuracy > 0 else rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    hudText([localPlayer.DisplayStats and LongestShotValue >= 40], "{0}".format(abilityIconString(Hero.CASSIDY, Button.ULTIMATE)), "Longest longshot\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), "{0}: {1}m".format(LongestShotPlayer, LongestShotValue), HudPosition.LEFT, 13, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.LongestLongshot == LongestShotValue else rgb(63, 191, 116), Color.WHITE, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if localPlayer.LongestLongshot == LongestShotValue else rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    hudText([localPlayer.DisplayStats and BestKillstreakValue >= ONFIRE_STREAK], "{0}".format(abilityIconString(Hero.REAPER, Button.ULTIMATE)), "Longest killstreak\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), "{0} - {1}k".format(BestKillstreakPlayer, BestKillstreakValue), HudPosition.LEFT, 14, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if BestKillstreakPlayer == localPlayer else rgb(63, 191, 116), Color.WHITE, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if BestKillstreakPlayer == localPlayer else rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    #SECONDARY STATS
    # Current killstreak
    hudSubheader([localPlayer.DisplayStats], "Current killstreak: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format(localPlayer.KillStreak, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 21, rgb(63, 191, 116) if localPlayer.KillStreak < ONFIRE_STREAK else Color.ORANGE if localPlayer.KillStreak >= ONFIRE_STREAK and localPlayer.KillStreak < RAMPAGE_STREAK else Color.YELLOW if localPlayer.KillStreak >= RAMPAGE_STREAK and localPlayer.KillStreak < NUCLEAR_STREAK else rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR, SpecVisibility.NEVER)
    #K/D Ratio
    hudSubheader([localPlayer.DisplayStats and localPlayer.Deaths > 0 and localPlayer.getScore() > 0], "K/D ratio: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format((localPlayer.ScopedHits + localPlayer.NoscopeHits + localPlayer.Executes) / localPlayer.Deaths, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 22, rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    #Shots fired
    hudSubheader([localPlayer.DisplayStats and localPlayer.ScopedShots + localPlayer.NoscopeShots > 100], "Rifle shots: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format(localPlayer.ScopedShots + localPlayer.NoscopeShots, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 23, rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    #Jumps
    hudSubheader([localPlayer.DisplayStats and localPlayer.Jumps > 200], "Jumps: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format(localPlayer.Jumps, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 24, rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    #Kills stolen
    hudSubheader([localPlayer.DisplayStats and localPlayer.StolenKills > 0], "Kills stolen: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format(localPlayer.StolenKills, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 25, rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    #Players demoted
    hudSubheader([localPlayer.DisplayStats and localPlayer.DemotedPlayers > 0], "Players demoted: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format(localPlayer.DemotedPlayers, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 26, rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    #Perfect Quickscopes
    hudSubheader([localPlayer.DisplayStats and localPlayer.PerfectQuickscopes > 0], "Perfect Quickscopes: {0}{1}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003".format(localPlayer.PerfectQuickscopes, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 27, rgb(63, 191, 116), HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    progressBarHud([localPlayer.IsPlayer and localPlayer.HonorBar > 0 and localPlayer.HonorBar < 100], localPlayer.HonorBar, "press [{0}] to honor {1}".format(inputBindingString(Button.ABILITY_2), localPlayer.HonorTarget), HudPosition.TOP, 10, rgb(44, 133, 81), rgb(44, 133, 81), ProgressHudReeval.VISIBILITY_AND_VALUES, SpecVisibility.NEVER)


rule "SPECTATOR & POTG HUDs":
    #hudText([not localPlayer.IsPlayer and LongestShotValue >= 40], "{}".format(abilityIconString(Hero.MCCREE, Button.ULTIMATE)), "Longest longshot          " emptySpace, "{0}: {1}m".format(LongestShotPlayer, LongestShotValue), HudPosition.LEFT, 14, customGreen
    hudSubtext([not localPlayer.IsPlayer], "\n\n\nana paintball by jinko - code 1DMTZ\n             www.jinko.dev/discord", HudPosition.TOP, 100, rgb(min(max(abs(getTotalTimeElapsed() * 85 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 85 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), HudReeval.VISIBILITY_AND_COLOR, SpecVisibility.NEVER)


rule "Initial spawn point & message":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.getNumberOfDeaths() == 0
    @Condition SpawnPointSettings != 0

    waitUntil(eventPlayer.hasSpawned(), 99999)
    RespawnSystem()
    wait(0.2)
    smallMessage(eventPlayer, "    Mode by Jinko#2838")
    playEffect(eventPlayer, DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR_SOUND, Color.WHITE, eventPlayer, 200)
    wait(0.7)
    if not strContains("{0}".format(eventPlayer), "ml7"):
        smallMessage(eventPlayer, random.choice(["    {0}  Discord invite up there  {0}".format(iconString(Icon.ARROW_UP)), "    {0}  TikTok: @Jinko_OW".format(iconString(Icon.HEART)), "    {0}  Scoped shots pierce enemies!".format(abilityIconString(Hero.ZARYA, Button.ABILITY_2)), "    {0}  Get a 15 kills streak for a BIG surprise!".format(iconString(Icon.RADIOACTIVE)), "    {0}{1}  Try punching sleeping players!".format(abilityIconString(Hero.ANA, Button.MELEE), abilityIconString(Hero.ANA, Button.ABILITY_1))]))
        #for ml7
    else:
        smallMessage(eventPlayer, random.choice(["    {0}  Guard Check  {0}".format(abilityIconString(Hero.ASHE, Button.ULTIMATE)), "    fun fact: ml7 never got a nuke ml7Point", "    100% nuking this game!! ml7Whoa", "    {0}  Can we get some Guard Check in the chat?".format(abilityIconString(Hero.ASHE, Button.ULTIMATE)), "    {0}  Demmos 1 nuke - ml7 0 nuke".format(iconString(Icon.SAD)), "    ml7 joacă modul meu!! poggies", "    Hewwo. I'm em ewl sewwen (´・ω・`). I wuuve den (^^). I wike cats nyaa~ Owaf pways the game instwead of me, but uwu will{0}".format(" never know (≧ω≦)")]))
    playEffect(eventPlayer, DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR_SOUND, Color.WHITE, eventPlayer, 200)


def RespawnSystem():
    @Name "Subroutine RespawnSystem"

    eventPlayer.AlivePlayers = [player for player in getAllPlayers() if player != eventPlayer and player.isAlive() and player.hasSpawned() and player.getHero() == Hero.ANA]
    eventPlayer.SpawnPointsNotInLOS = [player for player in SpawnPointSettings if ((((((((not isInLoS(eventPlayer.AlivePlayers[0], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[0] != null else true) and (not isInLoS(eventPlayer.AlivePlayers[1], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[1] != null else true)) and (not isInLoS(eventPlayer.AlivePlayers[2], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[2] != null else true)) and (not isInLoS(eventPlayer.AlivePlayers[3], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[3] != null else true)) and (not isInLoS(eventPlayer.AlivePlayers[4], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[4] != null else true)) and (not isInLoS(eventPlayer.AlivePlayers[5], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[5] != null else true)) and (not isInLoS(eventPlayer.AlivePlayers[6], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[6] != null else true)) and (not isInLoS(eventPlayer.AlivePlayers[7], player[0] + vect(0, 1.8, 0)) if eventPlayer.AlivePlayers[7] != null else true))]
    if len(eventPlayer.SpawnPointsNotInLOS) == 0:
        #failsafe
        eventPlayer.SpawnPointsNotInLOS = SpawnPointSettings
    eventPlayer.SpawnPointsFarEnoughFromPlayers = [player for player in eventPlayer.SpawnPointsNotInLOS if ((((((((abs(distance(player[0], eventPlayer.AlivePlayers[0]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[0] != null else true) and (abs(distance(player[0], eventPlayer.AlivePlayers[1]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[1] != null else true)) and (abs(distance(player[0], eventPlayer.AlivePlayers[2]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[2] != null else true)) and (abs(distance(player[0], eventPlayer.AlivePlayers[3]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[3] != null else true)) and (abs(distance(player[0], eventPlayer.AlivePlayers[4]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[4] != null else true)) and (abs(distance(player[0], eventPlayer.AlivePlayers[5]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[5] != null else true)) and (abs(distance(player[0], eventPlayer.AlivePlayers[6]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[6] != null else true)) and (abs(distance(player[0], eventPlayer.AlivePlayers[7]) - ((RespawnHigherDistance + RespawnLowerDistance) / 2)) <= (RespawnHigherDistance - RespawnLowerDistance) / 2 if eventPlayer.AlivePlayers[7] != null else true))]
    if len(eventPlayer.SpawnPointsFarEnoughFromPlayers) == 0:
        #failsafe
        eventPlayer.SpawnPointsFarEnoughFromPlayers = [player for player in eventPlayer.SpawnPointsNotInLOS if (((((((((distance(player[0], eventPlayer.AlivePlayers[0]) if eventPlayer.AlivePlayers[0] != null else 999999) >= RespawnFailsafeDistance) and ((distance(player[0], eventPlayer.AlivePlayers[1]) if eventPlayer.AlivePlayers[1] != null else 999999) >= RespawnFailsafeDistance)) and ((distance(player[0], eventPlayer.AlivePlayers[2]) if eventPlayer.AlivePlayers[2] != null else 999999) >= RespawnFailsafeDistance)) and ((distance(player[0], eventPlayer.AlivePlayers[3]) if eventPlayer.AlivePlayers[3] != null else 999999) >= RespawnFailsafeDistance)) and ((distance(player[0], eventPlayer.AlivePlayers[4]) if eventPlayer.AlivePlayers[4] != null else 999999) >= RespawnFailsafeDistance)) and ((distance(player[0], eventPlayer.AlivePlayers[5]) if eventPlayer.AlivePlayers[5] != null else 999999) >= RespawnFailsafeDistance)) and ((distance(player[0], eventPlayer.AlivePlayers[6]) if eventPlayer.AlivePlayers[6] != null else 999999) >= RespawnFailsafeDistance)) and ((distance(player[0], eventPlayer.AlivePlayers[7]) if eventPlayer.AlivePlayers[7] != null else 999999) >= RespawnFailsafeDistance))]
    if len(eventPlayer.SpawnPointsFarEnoughFromPlayers) == 0:
        #failsafe
        eventPlayer.SpawnPointsFarEnoughFromPlayers = eventPlayer.SpawnPointsNotInLOS
    eventPlayer.ChosenSpawnPoint = random.choice(eventPlayer.SpawnPointsFarEnoughFromPlayers)
    eventPlayer.teleport(eventPlayer.ChosenSpawnPoint[0])
    eventPlayer.setFacing(eventPlayer.ChosenSpawnPoint[1], Relativity.TO_WORLD)
    wait()
    eventPlayer.setFacing(eventPlayer.ChosenSpawnPoint[1], Relativity.TO_WORLD)
    wait()
    eventPlayer.setFacing(eventPlayer.ChosenSpawnPoint[1], Relativity.TO_WORLD)
    wait()
    eventPlayer.setFacing(eventPlayer.ChosenSpawnPoint[1], Relativity.TO_WORLD)
    wait()
    eventPlayer.setFacing(eventPlayer.ChosenSpawnPoint[1], Relativity.TO_WORLD)
    eventPlayer.applyImpulse(eventPlayer.getVelocity() * -1, eventPlayer.getSpeed(), Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)


def RespawnsCHATEAU():
    @Name "Subroutine RespawnsCHATEAU"

    #Spawn points:
    SpawnPointSettings = [[vect(165.76, 5, 81), vect(1, 0, 0)], [vect(185.5, 1, 72.4), vect(0.83, 0, -0.56)], [vect(167.64, 5, 76.94), vect(0.88, 0, 0.48)], [vect(170, 7, 69.5), vect(0.84, 0, -0.55)], [vect(177, 0, 51.5), vect(1, 0, 0.07)], [vect(194.68, 1, 66.55), vect(-0.74, 0, 0.68)], [vect(202, 0, 84.2), vect(0.63, 0, -0.78)], [vect(210.5, 0, 84.2), vect(-0.68, 0, -0.73)], [vect(202.55, 0, 70.12), vect(0.55, 0, 0.83)], [vect(210.18, 0, 70.46), vect(-0.57, 0, 0.82)], [vect(224.4, 1, 80.7), vect(-1, 0, -0.01)], [vect(215.75, 2, 93.49), vect(0.71, 0, -0.71)], [vect(238.63, 2, 84.62), vect(-0.71, 0, 0.71)], [vect(233.8, 2, 100.2), vect(-0.9, 0, -0.43)], [vect(228.51, 2, 101.19), vect(0.52, 0, -0.85)], [vect(204.15, 9, 89.4), vect(0.55, 0, 0.83)], [vect(189.6, 9, 110), vect(1, 0, 0)], [vect(176.53, 9, 108.5), vect(0.5, 0, -0.86)], [vect(220.35, 12, 43.89), vect(-0.86, 0, 0.5)], [vect(209.2, 9, 83.4), vect(-0.57, 0, -0.82)], [vect(202.5, 8, 73.6), vect(1, 0, 0)], [vect(209.69, 8, 73.08), vect(-1, 0, 0)], [vect(220.06, 8, 69.5), vect(0.22, 0, 0.97)], [vect(218.91, 9, 61.07), vect(-1, 0, -0.08)], [vect(222.5, 8, 80), vect(-0.72, 0, 0.7)], [vect(225.3, 13, 62), vect(-1, 0, -0.01)], [vect(222.6, 6, 107.3), vect(-0.36, 0, -0.93)], [vect(236.5, 4, 113.4), vect(-0.24, 0, -0.97)], [vect(181, 1.66, 84.71), vect(0.93, 0, -0.36)], [vect(180.88, 1.67, 81.5), vect(0.72, 0, 0.69)], [vect(188.74, 1, 93.79), vect(-0.97, 0, -0.26)], [vect(172.9, 5, 92.3), vect(0.73, 0, -0.68)], [vect(183.5, 9, 108.5), vect(-0.17, 0, -0.99)], [vect(188.73, 8, 106.49), vect(0.52, 0, -0.85)], [vect(188.5, 9, 115), vect(0.9, 0, -0.43)], [vect(193.12, 9, 116.87), vect(0.02, 0, -1)], [vect(222.75, 2, 93.49), vect(-0.92, 0, -0.39)], [vect(177.3, 7, 59.74), vect(-0.97, 0, -0.25)], [vect(188.5, 6, 90), vect(-0.87, 0, -0.5)], [vect(222, 8, 98), vect(-1, 0, -0.01)], [vect(203.1, 9, 83.35), vect(0.58, 0, -0.81)], [vect(208.3, 9, 89.4), vect(-0.57, 0, 0.82)], [vect(225.71, 1, 78.32), vect(-0.92, 0, 0.4)], [vect(238.63, 2, 90.67), vect(-1, 0, -0.01)], [vect(210.38, 8, 110.58), vect(-1, 0, -0.03)], [vect(212.99, 8, 95.91), vect(-1, 0, -0.1)], [vect(217.31, 5, 109.5), vect(1, 0, 0)], [vect(217.31, 5, 114.61), vect(1, 0, 0)], [vect(177.25, 7, 63.99), vect(-0.4, 0, 0.91)], [vect(176.04, 7, 70), vect(-0.28, 0, -0.96)], [vect(168.87, 7, 67.51), vect(0.72, 0, -0.69)]]


def RespawnsPETRA():
    @Name "Subroutine RespawnsPETRA"

    #Spawn points:
    SpawnPointSettings = [[vect(10.99, -5.72, -14.02), vect(0.73, 0, 0.68)], [vect(-38.36, -10.65, -15.66), vect(0.05, 0, 1)], [vect(-31.14, -11.67, 22.25), vect(0.51, 0, -0.86)], [vect(-27.86, -11.88, 22.24), vect(-0.68, 0, -0.74)], [vect(-24.83, -11.63, 19.22), vect(-0.57, 0, -0.82)], [vect(-30.79, -5, 23.25), vect(0.47, 0, -0.88)], [vect(-15.25, -8.18, 17.22), vect(-0.76, 0, 0.65)], [vect(6.5, -12.79, 32.8), vect(-0.56, 0, 0.83)], [vect(-2.5, -11.9, 32.8), vect(0.55, 0, 0.83)], [vect(-6.5, -12.68, 40.57), vect(0.85, 0, 0.53)], [vect(5.2, -11.58, 60.53), vect(-0.93, 0, -0.34)], [vect(34.91, -9.43, 21.37), vect(-0.63, 0, 0.78)], [vect(28.25, -5.8, 11.79), vect(-0.83, 0, -0.56)], [vect(27.82, -5.71, 5.78), vect(-0.76, 0, 0.65)], [vect(19.75, -5.81, 6.23), vect(0.41, 0, 0.91)], [vect(19.83, -5.69, 11.87), vect(0.37, 0, -0.93)], [vect(-13.25, -9.33, -1.25), vect(0.66, 0, 0.75)], [vect(-9.34, -5, 39.25), vect(-0.61, 0, -0.79)], [vect(-12.79, -4.98, -5.75), vect(0.61, 0, -0.79)], [vect(-6.75, -5.61, -14.79), vect(-0.7, 0, 0.71)], [vect(-18.51, -6.03, -6.75), vect(-0.75, 0, -0.66)], [vect(3.65, -1, -13.36), vect(-0.91, 0, -0.42)], [vect(0.36, -1, -13.34), vect(0.91, 0, -0.42)], [vect(-7.21, 1, -19.24), vect(-0.21, 0, 0.98)], [vect(8.85, -6, -11.19), vect(-0.52, 0, 0.85)], [vect(16.24, -5.69, -6.72), vect(-0.81, 0, -0.58)], [vect(28.04, -4, -5.54), vect(-0.9, 0, 0.43)], [vect(-36.27, -12.18, 12.22), vect(0.06, 0, -1)], [vect(-13.81, -9, 35.25), vect(-0.66, 0, -0.75)], [vect(-22.09, -6.02, 53.22), vect(0.97, 0, -0.22)], [vect(-9.87, -9.95, 14.38), vect(-0.24, 0, 0.97)], [vect(7.63, -5.93, -5.15), vect(-1, 0, -0.1)], [vect(-10.79, 1.05, -19.24), vect(0.5, 0, 0.87)], [vect(24.37, -10.19, 26.91), vect(-0.19, 0, 0.98)], [vect(11.14, -12.19, 57.62), vect(0.7, 0, -0.71)], [vect(-7.74, -10.11, 52.59), vect(0.88, 0, 0.47)], [vect(28.65, -5.98, 16.35), vect(-0.78, 0, 0.62)], [vect(29.17, -3.38, -2.05), vect(-0.89, 0, -0.45)], [vect(24.4, -4, -9.92), vect(-0.02, 0, 1)], [vect(19.2, -4.9, -14.2), vect(0.74, 0, 0.68)], [vect(19.2, -4.9, -14.2), vect(-0.83, 0, 0.56)], [vect(5.14, -5.82, -15.05), vect(-0.45, 0, 0.89)], [vect(-1.13, -5.74, -16.01), vect(0.58, 0, 0.81)], [vect(-4.8, -6, -11.23), vect(0.77, 0, 0.64)], [vect(-12.75, -9, 24.78), vect(-0.62, 0, 0.78)], [vect(-6.84, -10.58, 22.11), vect(-1, 0, -0.03)], [vect(-6.84, -10.58, 22.11), vect(1, 0, 0)], [vect(9.19, -11, 22.03), vect(1, 0, 0.01)], [vect(9.19, -11, 22.03), vect(-1, 0, 0)], [vect(7.24, -11, 30.79), vect(-0.75, 0, -0.66)], [vect(-2.82, -11, 31.22), vect(0.71, 0, -0.71)], [vect(-20.64, -12.03, 8.94), vect(1, 0, 0.01)], [vect(-44.05, -13.01, 18.14), vect(1, 0, -0.03)], [vect(20.49, -12.98, 54.94), vect(-0.68, 0, -0.74)]]


def RespawnsMALEVENTO():
    @Name "Subroutine RespawnsMALEVENTO"

    #Spawn points:
    SpawnPointSettings = [[vect(49.14, 6, 18.5), vect(-1, 0, 0)], [vect(38.32, 3, 17), vect(-0.54, 0, 0.84)], [vect(40.88, 6, 30.29), vect(-0.97, 0, 0.25)], [vect(8.7, 4, 30.84), vect(0.77, 0, 0.64)], [vect(-7.25, 2, 10.28), vect(0.98, 0, -0.22)], [vect(0.58, 2, 7.14), vect(-0.03, 0, 1)], [vect(20.06, 6, -4.27), vect(0.65, 0, 0.76)], [vect(33.67, 5.5, -5.35), vect(-0.76, 0, -0.65)], [vect(33.55, 3.16, -14.22), vect(-0.93, 0, -0.36)], [vect(25.68, 2, -29.7), vect(-0.27, 0, 0.96)], [vect(32.39, 3, -20.42), vect(-0.95, 0, -0.3)], [vect(2.91, -3.5, -35.07), vect(-0.28, 0, 0.96)], [vect(6.99, -3.27, -31.79), vect(-0.85, 0, 0.52)], [vect(3.97, -3.5, -26.85), vect(-0.89, 0, -0.45)], [vect(-14.24, -2.32, -13.98), vect(-0.99, 0, 0.12)], [vect(-18.37, -3, -5.07), vect(-0.51, 0, -0.86)], [vect(-25.38, -2, 4), vect(-0.39, 0, 0.92)], [vect(-34.45, -1, 14.55), vect(0.92, 0, 0.4)], [vect(-16.43, 3.01, 48.47), vect(0.76, 0, -0.65)], [vect(-1.36, 2.67, 47.36), vect(0.78, 0, -0.63)], [vect(1.36, 2.67, 47.36), vect(-0.79, 0, -0.61)], [vect(9.62, 3, 12.55), vect(1, 0, -0.01)], [vect(-32.84, 4, 7.94), vect(1, 0, 0)], [vect(-24.15, 4, 5.1), vect(-0.41, 0, 0.91)], [vect(-23.4, 4, 11.43), vect(-0.4, 0, -0.92)], [vect(42.74, 3, 22.07), vect(-1, 0, 0)], [vect(39.25, 3, 26.68), vect(-0.69, 0, -0.73)], [vect(3.83, -2, -19.89), vect(-0.96, 0, -0.27)], [vect(-5.83, -2, -22.48), vect(0.96, 0, 0.28)], [vect(-21.37, 0.44, 46.25), vect(-0.49, 0, -0.87)], [vect(-19.78, 1.24, 46.25), vect(0.97, 0, -0.26)], [vect(-19.5, 2, 41.13), vect(0.97, 0, 0.25)], [vect(-31.1, -1, 22.57), vect(0.19, 0, -0.98)], [vect(-29.98, -1, 25.94), vect(0.63, 0, 0.78)], [vect(-28, -2, 8.15), vect(0.19, 0, 0.98)], [vect(-31.76, -2, 12.23), vect(0.07, 0, -1)], [vect(-27.08, -2, 4), vect(-0.01, 0, 1)], [vect(32.55, 3, -18.17), vect(-0.73, 0, 0.68)], [vect(20.5, 2.9, -7.47), vect(0.4, 0, -0.92)], [vect(20.29, 1, -3.61), vect(-0.58, 0, 0.82)], [vect(44.04, 5.5, 9.86), vect(-0.93, 0, -0.38)], [vect(38.83, 7, 26.5), vect(-0.48, 0, 0.88)], [vect(35.31, 6, 31.68), vect(-0.98, 0, 0.22)], [vect(11.25, 4, 42.17), vect(-1, 0, 0.09)], [vect(0.03, 9.04, 41.85), vect(0, 0, -1)], [vect(-9.99, 2, 26.82), vect(-0.61, 0, 0.79)], [vect(2.68, 6.8, 1.75), vect(0.73, 0, 0.68)], [vect(10.7, 6, 3.76), vect(1, 0, -0.03)], [vect(-6.09, 7.76, 33.93), vect(1, 0, 0)], [vect(-1.66, 6.68, 27.72), vect(0.82, 0, 0.58)], [vect(49.14, 5.14, 21.99), vect(-1, 0, -0.04)], [vect(43.8, 7, 26.7), vect(-0.87, 0, -0.5)], [vect(6.28, 1.56, 33.49), vect(-0.73, 0, -0.68)], [vect(-3, 6.63, 3.1), vect(1, 0, 0.03)], [vect(-6.05, 5.5, 1.75), vect(0, 0, 1)], [vect(6.12, 5.5, 5.27), vect(-0.05, 0, 1)], [vect(-8.38, -3.27, -30.8), vect(-1, 0, 0.02)], [vect(-8.38, -3.27, -30.8), vect(0.99, 0, -0.15)], [vect(-3.53, -3.5, -34.3), vect(0.37, 0, 0.93)], [vect(38.05, 7, 16.87), vect(-0.3, 0, 0.95)], [vect(24.99, 6, 6.3), vect(-0.29, 0, -0.96)], [vect(24.29, 5, -7), vect(-0.25, 0, -0.97)]]


def RespawnsDORADO():
    @Name "Subroutine RespawnsDORADO"

    #Spawn points:
    SpawnPointSettings = [[vect(111.05, 8.04, -18.21), vect(1, 0, -0.1)], [vect(130.48, 8.04, -7.1), vect(-0.9, 0, -0.44)], [vect(158.34, 10.01, -13.25), vect(-0.84, 0, 0.54)], [vect(152.32, 10.01, -3.06), vect(-0.85, 0, -0.53)], [vect(161.88, 10.01, -3.16), vect(-0.96, 0, -0.27)], [vect(152.47, 10.01, 0.62), vect(-0.26, 0, 0.96)], [vect(159.65, 11.05, 2.6), vect(-0.8, 0, 0.6)], [vect(63.98, 14.01, 24.34), vect(0.94, 0, 0.33)], [vect(77.74, 13.01, 16.59), vect(0.05, 0, 1)], [vect(102.64, 12.03, 19.43), vect(0.15, 0, -0.99)], [vect(83.21, 6.81, -7.75), vect(0.37, 0, 0.93)], [vect(107.12, 11, 48.48), vect(0.63, 0, -0.78)], [vect(121.37, 11, 52.18), vect(-0.42, 0, -0.91)], [vect(135.61, 11.01, 48.21), vect(-0.97, 0, -0.25)], [vect(124.55, 11, 39.69), vect(-0.96, 0, -0.28)], [vect(133.61, 7.25, -14.25), vect(-0.99, 0, 0.14)], [vect(98.46, 13.01, 21.62), vect(-0.99, 0, 0.15)], [vect(67.47, 14.01, 16.63), vect(0.28, 0, 0.96)], [vect(68.15, 15.07, 32.48), vect(-0.62, 0, 0.78)], [vect(68.15, 15.07, 32.48), vect(0.62, 0, -0.78)], [vect(63.35, 17.01, 36.64), vect(0.94, 0, 0.35)], [vect(72.44, 8, 8.89), vect(0.96, 0, -0.29)], [vect(76.84, 8, 5.44), vect(0.78, 0, 0.63)], [vect(79.41, 8, 3.37), vect(0.49, 0, 0.87)], [vect(81.24, 7, 2.43), vect(0.82, 0, -0.58)], [vect(108.47, 11.01, -25.48), vect(-0.9, 0, 0.45)], [vect(108.47, 11.01, -25.48), vect(0.62, 0, -0.79)], [vect(112.46, 11.01, -33.26), vect(-0.12, 0, 0.99)], [vect(128.88, 9.41, -28.51), vect(-0.38, 0, 0.92)], [vect(132.81, 9.41, -25.45), vect(-0.8, 0, 0.61)], [vect(140.97, 11, -20.85), vect(0.09, 0, 1)], [vect(144.24, 11, -20.05), vect(-0.87, 0, 0.49)], [vect(141.03, 10.01, -10.69), vect(0.32, 0, 0.95)], [vect(155.95, 10.01, -7.09), vect(-1, 0, 0.04)], [vect(162.87, 10.01, -8.53), vect(-0.98, 0, 0.19)], [vect(155.67, 10.01, 5.48), vect(-0.7, 0, 0.71)], [vect(101.25, 12.34, 0.99), vect(0.26, 0, 0.97)], [vect(111.05, 12.34, 8.61), vect(-0.99, 0, 0.14)], [vect(98.5, 18.88, 24.82), vect(-0.14, 0, -0.99)], [vect(122.38, 11, 36.85), vect(-0.98, 0, 0.19)], [vect(133.56, 11.01, 46.77), vect(-0.86, 0, -0.51)], [vect(89.58, 11.01, 17.06), vect(0.99, 0, -0.13)]]


def RespawnsHOLLYWOOD():
    @Name "Subroutine RespawnsHOLLYWOOD"

    #Spawn points:
    SpawnPointSettings = [[vect(45.8, 2.75, -45.42), vect(-1, 0, 0.07)], [vect(47.43, 2.75, -64.9), vect(-0.97, 0, 0.24)], [vect(35.06, 1.8, -29.22), vect(-0.85, 0, -0.53)], [vect(32.24, 2.75, -62.28), vect(0.23, 0, 0.97)], [vect(28.21, 1.86, -71.5), vect(-0.36, 0, -0.93)], [vect(19.1, 1.75, -93.56), vect(0.58, 0, 0.82)], [vect(-1.82, 4.79, -65.06), vect(0.97, 0, -0.24)], [vect(-6.45, 4, -65.06), vect(0.37, 0, 0.93)], [vect(8.52, 4.79, -64.91), vect(-0.54, 0, 0.84)], [vect(-18.79, 1.75, -47.45), vect(0.93, 0, -0.37)], [vect(-19.17, 5.75, -52.35), vect(-0.49, 0, -0.87)], [vect(-17.12, 1.73, -77.89), vect(0.3, 0, 0.95)], [vect(-8.17, 1.6, -73.87), vect(-0.2, 0, 0.98)], [vect(-16.17, 1.73, -71.41), vect(0.98, 0, -0.21)], [vect(6.37, 5.83, -28.17), vect(0.89, 0, 0.45)], [vect(5.83, 5.75, -32.47), vect(-0.97, 0, -0.24)], [vect(-10.73, 1.75, -10.95), vect(0.91, 0, -0.42)], [vect(10, 1.75, -1.37), vect(-0.84, 0, -0.54)], [vect(5.23, 1.75, -10.44), vect(1, 0, 0.01)], [vect(15.26, 1.75, -8.25), vect(-0.2, 0, -0.98)], [vect(3.03, 1.75, -33.7), vect(0.8, 0, 0.6)], [vect(12.55, 3.33, -33.03), vect(-1, 0, 0.04)], [vect(-0.33, 1.87, -29.95), vect(-0.26, 0, 0.97)], [vect(13.55, 1.75, -40.25), vect(0.9, 0, 0.44)], [vect(-12.58, 1.73, -58.24), vect(0.76, 0, 0.65)], [vect(0.99, 1.6, -83.53), vect(0.65, 0, 0.76)], [vect(26.73, 1.61, -47.34), vect(-0.96, 0, 0.28)], [vect(26.73, 1.61, -47.34), vect(-0.15, 0, 0.99)], [vect(8.25, 2, -66.19), vect(-0.64, 0, -0.77)], [vect(2.55, 2, -67.58), vect(0.2, 0, 0.98)], [vect(2.76, 3.97, -12.79), vect(-0.35, 0, -0.94)], [vect(-6.4, 1.6, -40.34), vect(0.86, 0, 0.51)], [vect(42.16, 1.75, -68.16), vect(-0.99, 0, 0.12)], [vect(42.16, 1.75, -68.16), vect(-0.48, 0, -0.88)], [vect(37.74, 2.75, -53.24), vect(-1, 0, -0.02)], [vect(27.47, 1.63, -93.54), vect(-0.72, 0, 0.7)], [vect(37.79, 1.6, -83.91), vect(-0.13, 0, 0.99)], [vect(22.42, 1.86, -78.92), vect(0.92, 0, -0.4)], [vect(9.67, 2.78, -69.69), vect(0.75, 0, 0.66)], [vect(-2.33, 1.6, -67.64), vect(0.47, 0, -0.88)], [vect(42.82, 2.75, -63.16), vect(-0.97, 0, 0.22)], [vect(38.91, 2.75, -46.44), vect(-0.07, 0, 1)], [vect(48.88, 2.75, -52.79), vect(-0.77, 0, 0.64)], [vect(49.57, 2.75, -58.58), vect(-0.85, 0, -0.52)], [vect(10.46, 1.75, -9.64), vect(0.73, 0, -0.69)], [vect(-1.58, 1.75, -5.51), vect(-0.03, 0, -1)], [vect(-21.11, 5.75, -39.24), vect(0.44, 0, -0.9)], [vect(-17.32, 3.75, -41.94), vect(0.58, 0, -0.81)], [vect(-26.53, 5.75, -46.69), vect(0.44, 0, -0.9)], [vect(-18.32, 5.75, -56.49), vect(-0.18, 0, -0.98)], [vect(-19.43, 1.73, -77.36), vect(0.83, 0, 0.56)], [vect(-17.66, 1.73, -65.59), vect(1, 0, -0.02)], [vect(7.75, 2, -64.77), vect(-0.71, 0, 0.7)], [vect(1.07, 1.87, -24.32), vect(-0.48, 0, -0.88)], [vect(9.13, 1.6, -51.76), vect(-0.95, 0, 0.31)], [vect(-8.43, 1.75, -14.79), vect(0.85, 0, 0.53)], [vect(1.27, 6, -65.79), vect(0.98, 0, -0.21)], [vect(22.38, 1.63, -94.91), vect(0.07, 0, 1)], [vect(35.08, 1.6, -76.76), vect(0.32, 0, 0.95)], [vect(33.44, 2.12, -79.98), vect(-0.41, 0, -0.91)], [vect(36.83, 1.6, -75.59), vect(-0.14, 0, 0.99)], [vect(51.04, 5.43, -65.63), vect(-0.43, 0, 0.9)], [vect(55.21, 2.75, -49.21), vect(-0.98, 0, -0.2)], [vect(29.89, 2.75, -60.86), vect(0.87, 0, 0.49)], [vect(43.13, 2.75, -32.04), vect(-0.87, 0, -0.48)], [vect(24.27, 2.53, -28.47), vect(-0.99, 0, 0.17)], [vect(18.15, 1.75, -13.78), vect(-0.94, 0, 0.34)], [vect(8.41, 3.69, 1.32), vect(-0.39, 0, -0.92)], [vect(-12.17, 1.6, -20.28), vect(0.83, 0, -0.55)], [vect(4.06, 1.75, -29.17), vect(0.92, 0, 0.39)], [vect(0.14, 2, -56.11), vect(0.74, 0, -0.68)], [vect(-4.13, 1.6, -82.23), vect(0.65, 0, 0.76)], [vect(12.42, 1.75, -85.35), vect(0.28, 0, 0.96)], [vect(35.04, 1.6, -86.68), vect(-0.57, 0, 0.82)], [vect(32.27, 1.62, -42.54), vect(-0.81, 0, -0.58)], [vect(33.16, 1.75, -28.74), vect(-0.64, 0, -0.76)], [vect(16.62, 1.75, -41.02), vect(-0.12, 0, 0.99)], [vect(-0.05, 1.75, -32.07), vect(0.08, 0, -1)], [vect(-16.97, 1.75, -46.54), vect(0.76, 0, -0.65)], [vect(-27.25, 5.75, -38.52), vect(0.49, 0, -0.87)], [vect(-25.04, 5.75, -52.57), vect(1, 0, -0.02)], [vect(-14.11, 1.73, -69.58), vect(0.74, 0, -0.67)], [vect(-16.76, 1.73, -62.03), vect(0.86, 0, -0.52)]]


def RespawnsBLIZZWORLD():
    @Name "Subroutine RespawnsBLIZZWORLD"

    #Spawn points:
    SpawnPointSettings = [[vect(-13.32, 1.94, 85.29), vect(-0.71, 0, 0.71)], [vect(-22.94, 0.29, 114.41), vect(-0.41, 0, -0.91)], [vect(-27.47, 0.29, 112.51), vect(0.52, 0, -0.86)], [vect(-28.62, 0.29, 102.19), vect(-0.97, 0, -0.26)], [vect(-20.8, 2.07, 104.07), vect(0.13, 0, -0.99)], [vect(-27.19, 6, 86.44), vect(0.69, 0, 0.72)], [vect(-42.26, -0.11, 97.26), vect(0.41, 0, -0.91)], [vect(-55.14, -0.19, 98.16), vect(0.04, 0, -1)], [vect(-45.56, -0.2, 89.21), vect(-0.98, 0, -0.21)], [vect(-62, 1.03, 73.03), vect(0.36, 0, 0.93)], [vect(-82.54, 0.25, 60.96), vect(0.71, 0, 0.7)], [vect(-56.69, -0.25, 58.8), vect(-0.93, 0, 0.37)], [vect(-52.64, -0.25, 62.08), vect(-0.88, 0, 0.48)], [vect(-51.08, -0.25, 67.29), vect(-1, 0, -0.03)], [vect(-40.34, 0.75, 55.53), vect(-0.12, 0, 0.99)], [vect(-20.06, 0.02, 61.19), vect(-0.98, 0, 0.22)], [vect(-15.81, 2, 74.19), vect(-0.22, 0, 0.98)], [vect(-75.88, 0.79, 92.86), vect(0.02, 0, -1)], [vect(-86.25, 0.75, 79.24), vect(-0.28, 0, 0.96)], [vect(-80.46, 4.88, 63.05), vect(0.71, 0, 0.7)], [vect(-90.78, 0.75, 88.79), vect(0.72, 0, -0.69)], [vect(-83.94, 0.75, 100.72), vect(0.5, 0, -0.87)], [vect(-85.42, 0.75, 92.49), vect(0.73, 0, 0.68)], [vect(-42.54, -0.21, 136.04), vect(-0.95, 0, -0.3)], [vect(-44.34, -2.21, 149.3), vect(-0.87, 0, -0.5)], [vect(-42.05, -2.21, 140.77), vect(-1, 0, -0.09)], [vect(-46.11, 1.91, 144.13), vect(-0.96, 0, -0.28)], [vect(-78.02, 1.75, 152.07), vect(0.3, 0, -0.95)], [vect(-70.62, 1.75, 156.48), vect(0.68, 0, -0.73)], [vect(-74.26, 0.75, 135.91), vect(0.96, 0, 0.29)], [vect(-77.29, 0.81, 117.5), vect(0.82, 0, 0.57)], [vect(-62.85, 0.75, 134.45), vect(-0.95, 0, -0.3)], [vect(-58.31, -0.11, 127.24), vect(0.99, 0, -0.12)], [vect(-67.23, 1.12, 107.28), vect(0.27, 0, -0.96)], [vect(-81.96, 0.25, 71.3), vect(0.97, 0, 0.25)], [vect(-71.23, 0.25, 62.34), vect(0.03, 0, 1)], [vect(-29.85, 0, 56.9), vect(-0.1, 0, 0.99)], [vect(-16.21, 2, 62.5), vect(-0.74, 0, 0.68)], [vect(-19.59, 2, 69.57), vect(0.29, 0, 0.96)], [vect(-25.97, 6, 88.92), vect(0.29, 0, -0.96)], [vect(-42.92, -0.12, 131.24), vect(-0.97, 0, -0.26)], [vect(-29.96, -2.21, 148.52), vect(-0.96, 0, -0.27)], [vect(-44.04, -0.19, 97.29), vect(0.09, 0, -1)], [vect(-44.1, -0.19, 97.37), vect(-0.9, 0, 0.43)], [vect(-55.7, -0.19, 92.29), vect(-0.01, 0, -1)], [vect(-49.45, -0.19, 87.06), vect(-1, 0, -0.02)], [vect(-84.53, 0.25, 63.82), vect(0.96, 0, 0.27)], [vect(-80.4, 0.25, 59.16), vect(0.34, 0, 0.94)], [vect(-70.17, 0.25, 64.05), vect(-0.71, 0, 0.7)], [vect(-79.94, 0.25, 73.29), vect(0.71, 0, -0.7)], [vect(-81.66, 4.88, 66.56), vect(0.82, 0, 0.57)], [vect(-77.28, 4.88, 61.73), vect(0.55, 0, 0.83)], [vect(-53.19, -0.25, 69.27), vect(-0.99, 0, -0.15)], [vect(-23.64, 0, 55.39), vect(-0.57, 0, 0.82)], [vect(-27.33, 0.29, 107.11), vect(-0.65, 0, -0.76)], [vect(-101.16, 0.75, 93.04), vect(0.99, 0, -0.14)], [vect(-88.14, 0.75, 82.18), vect(0.96, 0, 0.28)], [vect(-95.9, 1.61, 86.82), vect(0.8, 0, 0.6)], [vect(-36.13, -2.21, 146.91), vect(-0.96, 0, -0.27)], [vect(-52.87, -0.25, 147.39), vect(0.29, 0, -0.96)], [vect(-71.92, 1.75, 149.72), vect(-0.59, 0, -0.81)], [vect(-68.42, 1.75, 150.16), vect(0.95, 0, -0.3)], [vect(-77.19, 1.75, 156.09), vect(0.58, 0, -0.82)], [vect(-77.72, 0.9, 139.31), vect(0.98, 0, -0.21)]]


def RespawnsEICHENWALDE():
    @Name "Subroutine RespawnsEICHENWALDE"

    #Spawn points:
    SpawnPointSettings = [[vect(66, 16.03, -63.59), vect(0.96, 0, -0.28)], [vect(60.85, 6.72, -77.36), vect(-0.66, 0, 0.75)], [vect(55.58, 5.98, -100.31), vect(-0.24, 0, -0.97)], [vect(62.48, 6.72, -109.84), vect(-0.9, 0, 0.44)], [vect(66.25, 10.5, -116.92), vect(0.9, 0, 0.44)], [vect(29.54, 10.4, -94.07), vect(0.99, 0, 0.1)], [vect(34.99, 12.72, -106.34), vect(0.78, 0, 0.62)], [vect(101.12, 12.72, -108.84), vect(-0.59, 0, 0.81)], [vect(101.12, 12.72, -108.84), vect(-0.89, 0, -0.45)], [vect(95.87, 12.72, -105.25), vect(0.43, 0, 0.9)], [vect(92.4, 18.68, -66.33), vect(-0.65, 0, -0.76)], [vect(75.19, 12.66, -71.86), vect(-0.38, 0, 0.93)], [vect(81.9, 13.04, -65.17), vect(-0.22, 0, -0.97)], [vect(57.1, 6.72, -108.97), vect(0.99, 0, 0.15)], [vect(67.99, 18.05, -76.64), vect(-0.56, 0, 0.83)], [vect(58.25, 11.72, -84.47), vect(-0.63, 0, 0.78)], [vect(88.98, 12.8, -63.53), vect(-0.27, 0, -0.96)], [vect(28.63, 8, -87.77), vect(0.58, 0, 0.81)], [vect(52.49, 10.72, -120.62), vect(0.39, 0, 0.92)], [vect(58.2, 10.72, -121.73), vect(-0.03, 0, 1)], [vect(54.9, 4.72, -89.37), vect(0.08, 0, -1)], [vect(55.91, 4.72, -85.47), vect(0.36, 0, 0.93)], [vect(53.6, 6.72, -76.03), vect(0.52, 0, 0.85)], [vect(51.64, 11.72, -82.04), vect(0.91, 0, 0.42)], [vect(60.8, 11.72, -75.62), vect(-0.55, 0, 0.84)], [vect(102.95, 12.72, -71.18), vect(-0.92, 0, -0.38)], [vect(99.26, 11.85, -98.24), vect(-0.42, 0, -0.91)], [vect(105.76, 12.72, -111.07), vect(-0.9, 0, 0.44)], [vect(56.01, 10.72, -116.71), vect(0.65, 0, 0.76)], [vect(52.58, 21.2, -65.27), vect(0.97, 0, -0.26)], [vect(70.15, 18.04, -69.32), vect(-0.85, 0, -0.53)], [vect(54.42, 10.72, -125.17), vect(0.23, 0, 0.97)], [vect(31.08, 8, -86.94), vect(0.28, 0, 0.96)], [vect(31.89, 6.03, -73.7), vect(1, 0, -0.1)], [vect(35.79, 5.25, -51.97), vect(0.17, 0, -0.98)], [vect(35.79, 5.25, -51.97), vect(0.9, 0, 0.44)], [vect(57.84, 6.72, -73.97), vect(-0.32, 0, 0.95)], [vect(64.75, 4.72, -82.1), vect(-0.91, 0, -0.4)], [vect(104.78, 12.75, -71.8), vect(-0.87, 0, -0.5)], [vect(100.06, 10.72, -96.11), vect(0.29, 0, 0.96)], [vect(100.06, 10.72, -96.11), vect(-0.38, 0, -0.93)], [vect(103.84, 12.72, -115.11), vect(-0.69, 0, 0.72)], [vect(94.53, 12.72, -112.97), vect(-0.39, 0, 0.92)], [vect(47.3, 8.45, -102.74), vect(-0.96, 0, 0.27)], [vect(50.26, 6.72, -107.19), vect(0.88, 0, 0.47)], [vect(61.05, 4.72, -95.46), vect(-0.83, 0, 0.56)]]


def RespawnsECOPOINT():
    @Name "Subroutine RespawnsECOPOINT"

    #Spawn points:
    SpawnPointSettings = [[vect(-10.62, 7, 9.12), vect(-0.44, 0, -0.9)], [vect(-9.88, 7, -8.47), vect(-0.52, 0, 0.86)], [vect(-6.52, 7.24, -9.73), vect(0.87, 0, 0.49)], [vect(-6.52, 7.24, 9.73), vect(0.87, 0, -0.49)], [vect(23.35, 6.02, -18.8), vect(-0.75, 0, 0.67)], [vect(24.12, 6.01, 15.26), vect(-0.96, 0, 0.27)], [vect(23.16, 6.01, 18.9), vect(-0.69, 0, -0.73)], [vect(11.04, 8.04, 60.32), vect(-0.25, 0, -0.97)], [vect(6.64, 8.04, 55.91), vect(0.14, 0, -0.99)], [vect(-4.78, 7, 52.65), vect(-0.7, 0, -0.71)], [vect(4.44, 7.39, -25.38), vect(0.33, 0, 0.95)], [vect(-32.12, 9, 6.11), vect(1, 0, 0.01)], [vect(-32.12, 9, -6.1), vect(1, 0, 0)], [vect(18.34, 11.21, 11.13), vect(-0.36, 0, 0.93)], [vect(-9.71, 6.93, -10.88), vect(0.01, 0, -1)], [vect(-9.15, 8.53, -0.23), vect(-1, 0, 0)], [vect(-9.79, 6.9, 10.88), vect(0, 0, 1)], [vect(13.85, 8.01, -59.45), vect(-0.33, 0, 0.94)], [vect(-7.8, 7, -50.47), vect(-0.52, 0, 0.85)], [vect(-14.91, 7.13, -32.01), vect(0.92, 0, 0.39)], [vect(-8.17, 7, 49.26), vect(-0.69, 0, -0.72)], [vect(-29, 9, 3.12), vect(-0.23, 0, -0.97)], [vect(-28.72, 9, -3.12), vect(-0.29, 0, 0.96)], [vect(-33.98, 9, -3.12), vect(0.93, 0, 0.36)], [vect(-34.1, 9, 3.12), vect(0.94, 0, -0.35)], [vect(-19.96, 7, -8.45), vect(0.87, 0, 0.49)], [vect(-19.96, 7, 8.3), vect(0.8, 0, -0.6)], [vect(-16.58, 7.52, 16.11), vect(0.83, 0, -0.56)], [vect(-16.6, 7.53, -16.1), vect(0.8, 0, 0.61)], [vect(22.03, 6.86, -12.56), vect(0.15, 0, 0.99)], [vect(21.98, 6.98, 12.32), vect(0.22, 0, -0.98)], [vect(24.12, 6.02, -15.56), vect(-0.99, 0, -0.16)], [vect(18.02, 4.63, -8.97), vect(0, 0, 1)], [vect(18.02, 4.63, -8.97), vect(0, 0, -1)], [vect(29.88, 3, -0.03), vect(-0.86, 0, 0.5)], [vect(29.88, 3, -0.03), vect(-0.87, 0, -0.49)], [vect(27.18, 3.16, 6.28), vect(-0.57, 0, -0.82)], [vect(27.16, 3.16, -6.26), vect(-0.56, 0, 0.83)], [vect(18, 4.67, 9.05), vect(-0.01, 0, 1)], [vect(18, 4.67, 9.05), vect(0, 0, -1)], [vect(3.14, 7.4, 20.21), vect(-0.07, 0, 1)], [vect(6.51, 7.4, 23.58), vect(-0.76, 0, -0.65)], [vect(4.33, 7.4, 25.99), vect(-0.5, 0, -0.87)], [vect(13.73, 8.04, 59.49), vect(-0.29, 0, -0.96)], [vect(15.4, 8.96, 43.82), vect(-0.99, 0, -0.1)], [vect(3.61, 9.12, 47.12), vect(0.87, 0, -0.5)], [vect(-0.18, 7.56, 55.39), vect(0.82, 0, -0.57)], [vect(-0.18, 7.56, 55.39), vect(-0.77, 0, -0.64)], [vect(-15.59, 7.56, 31.85), vect(0.98, 0, -0.22)], [vect(-15.58, 7.55, -31.88), vect(0.99, 0, 0.16)], [vect(-0.83, 7.35, -54.49), vect(0.95, 0, 0.32)], [vect(-0.83, 7.35, -54.49), vect(-0.85, 0, 0.53)], [vect(3.67, 8.96, -47.3), vect(0.77, 0, 0.63)], [vect(15.34, 8.94, -43.62), vect(-1, 0, 0.06)], [vect(12.27, 8.16, -54.18), vect(-0.31, 0, 0.95)], [vect(3.6, 8.06, -19.77), vect(0.36, 0, -0.93)], [vect(15.36, 10.26, -27.81), vect(0.46, 0, 0.89)], [vect(19.08, 12, -15.51), vect(-0.86, 0, -0.52)], [vect(18.35, 11.46, -11.64), vect(-0.43, 0, -0.9)], [vect(18.35, 11.46, -11.64), vect(-0.03, 0, 1)], [vect(17.99, 11.36, 11.44), vect(0.02, 0, -1)], [vect(17.99, 11.36, 11.44), vect(-0.37, 0, 0.93)], [vect(15.5, 10.12, 28.16), vect(0.62, 0, -0.78)]]


def RespawnsBLACKFOREST():
    @Name "Subroutine RespawnsBLACKFOREST"

    #Spawn points:
    SpawnPointSettings = [[vect(-8.38, 14.13, 23.08), vect(-0.33, 0, 0.94)], [vect(-4.79, 11.46, 36.3), vect(0.96, 0, -0.27)], [vect(0.13, 12.86, 12.54), vect(0.25, 0, -0.97)], [vect(7.86, 12.5, 12.59), vect(-0.64, 0, -0.77)], [vect(11.42, 12.5, 4.14), vect(-0.93, 0, -0.36)], [vect(7.86, 12.5, -2.6), vect(-0.57, 0, 0.82)], [vect(0.23, 12.84, -2.6), vect(0.46, 0, 0.89)], [vect(10.97, 17.86, -0.93), vect(0.7, 0, -0.71)], [vect(35.75, 14, -13.04), vect(-1, 0, 0)], [vect(31.63, 17, -2.46), vect(-1, 0, -0.02)], [vect(26.45, 16.95, -16.91), vect(-0.98, 0, 0.22)], [vect(29.35, 12, -22.27), vect(-0.07, 0, 1)], [vect(28.78, 12, -22.53), vect(-0.63, 0, -0.78)], [vect(35.86, 12, -26.1), vect(-0.87, 0, 0.49)], [vect(13.43, 9.09, 1.62), vect(0.96, 0, 0.27)], [vect(14.83, 9, 8.24), vect(0.95, 0, -0.31)], [vect(27.95, 16.97, 22.93), vect(-0.99, 0, -0.13)], [vect(25.13, 16.89, 30.12), vect(-0.9, 0, -0.43)], [vect(-12.92, 15, 36.98), vect(0.15, 0, -0.99)], [vect(10.97, 16.95, 10.93), vect(0.7, 0, 0.71)], [vect(28.04, 16.98, -10.61), vect(-0.99, 0, 0.12)], [vect(-11.84, 13.44, -15.25), vect(-0.24, 0, -0.97)], [vect(-13.13, 15, -27.37), vect(0.15, 0, 0.99)], [vect(41.74, 12, 32.41), vect(-1, 0, -0.06)], [vect(38.72, 12, 35.11), vect(-0.96, 0, -0.27)], [vect(35.36, 12, 43.46), vect(-0.55, 0, -0.84)], [vect(29.09, 9, 1.63), vect(-0.84, 0, 0.55)], [vect(29.09, 9.3, 8.37), vect(-0.81, 0, -0.59)], [vect(19.13, 17.5, 4.27), vect(-0.9, 0, -0.44)], [vect(19.13, 17.5, 1.06), vect(-0.98, 0, 0.18)], [vect(19.13, 17.5, 5.73), vect(-0.97, 0, 0.24)], [vect(19.13, 17.5, 8.94), vect(-0.98, 0, -0.21)], [vect(4.3, 17.5, 12.79), vect(0, 0, -1)], [vect(4.64, 17.5, -2.77), vect(0, 0, 1)], [vect(-6.11, 11.81, -26.52), vect(0.98, 0, 0.22)], [vect(-4.65, 11.9, -22.67), vect(-0.52, 0, 0.86)], [vect(-4.65, 11.9, -22.67), vect(0.51, 0, -0.86)], [vect(-4.4, 11.81, 32.38), vect(0.5, 0, 0.87)], [vect(-4.4, 11.81, 32.38), vect(-0.51, 0, -0.86)], [vect(-14.17, 14.38, 33.86), vect(0.4, 0, -0.92)], [vect(-3.5, 18, 31.53), vect(-0.94, 0, -0.33)], [vect(-8.38, 18, 23.08), vect(-0.31, 0, 0.95)], [vect(-9.83, 16.1, -25.31), vect(-0.25, 0, 0.97)], [vect(-8.76, 18, -13.35), vect(-0.3, 0, -0.95)], [vect(-7.86, 13.44, -14.34), vect(-0.17, 0, -0.98)], [vect(0.15, 17.31, 10.01), vect(0.7, 0, -0.71)], [vect(0.14, 17.31, -0.01), vect(0.7, 0, 0.72)], [vect(-5.59, 13.09, 5.08), vect(0.03, 0, -1)], [vect(-5.59, 13.09, 5.08), vect(0, 0, 1)], [vect(-8.69, 16.58, 34.53), vect(-0.5, 0, -0.87)], [vect(-14.58, 14.12, -23.61), vect(0.56, 0, 0.83)], [vect(-12.81, 13.07, -22.25), vect(0.43, 0, 0.9)], [vect(-11.37, 13, 32.38), vect(0.33, 0, -0.94)], [vect(30.84, 17, 12.49), vect(-1, 0, 0)], [vect(32, 12, 41.38), vect(-0.36, 0, -0.93)], [vect(14.05, 11.49, 4.78), vect(1, 0, 0.02)], [vect(15.68, 9, 6.56), vect(1, 0, -0.08)], [vect(33.33, 12, -32.4), vect(-0.43, 0, 0.9)], [vect(39.42, 12, -22.05), vect(-0.99, 0, 0.11)], [vect(29.29, 12, 32.65), vect(-0.88, 0, 0.48)], [vect(29.29, 12, 32.65), vect(-0.05, 0, -1)], [vect(1.43, 11.05, 33.48), vect(1, 0, -0.04)], [vect(0.77, 10.92, -23.92), vect(0.98, 0, 0.2)], [vect(35.57, 14, 22.77), vect(-1, 0, 0.02)], [vect(34.51, 15.97, 17.84), vect(-0.07, 0, 1)], [vect(34.51, 15.97, 17.84), vect(0.01, 0, -1)], [vect(35.75, 17, 11.06), vect(-0.8, 0, 0.61)], [vect(35.75, 17, -1.01), vect(-0.79, 0, -0.61)], [vect(34.09, 16.02, -7.74), vect(0.01, 0, -1)], [vect(34.09, 16.02, -7.74), vect(0.01, 0, 1)], [vect(9.45, 12.5, 1.31), vect(-0.83, 0, 0.56)], [vect(8.71, 12.5, 4.99), vect(-1, 0, 0)], [vect(8.12, 12.5, 9.23), vect(-0.91, 0, -0.41)]]


def RespawnsLIJANGCONTROL():
    @Name "Subroutine RespawnsLIJANGCONTROL"

    #Spawn points:
    SpawnPointSettings = [[vect(40.96, 267, 312.98), vect(-0.81, 0, 0.59)], [vect(26.88, 267, 325.74), vect(0.71, 0, -0.7)], [vect(34.5, 267, 327.09), vect(-0.17, 0, -0.98)], [vect(26.75, 267, 316.84), vect(-0.08, 0, -1)], [vect(20.14, 270, 331.86), vect(-1, 0, -0.05)], [vect(28.85, 267, 280.4), vect(-0.67, 0, -0.74)], [vect(15.44, 267, 270.89), vect(0.29, 0, 0.96)], [vect(24.01, 267, 282.83), vect(1, 0, -0.04)], [vect(10.25, 270, 307.25), vect(-0.69, 0, -0.72)], [vect(-4.32, 274, 337.25), vect(0, 0, -1)], [vect(3.8, 274, 337.25), vect(0, 0, -1)], [vect(24.58, 267, 277.9), vect(-0.7, 0, -0.72)], [vect(-15.43, 267, 270.89), vect(-0.29, 0, 0.96)], [vect(-24.58, 267, 277.9), vect(0.72, 0, -0.7)], [vect(-27.97, 267, 281.19), vect(0.56, 0, -0.83)], [vect(-26.75, 267, 316.84), vect(-0.14, 0, -0.99)], [vect(-10.25, 270, 307.25), vect(0.57, 0, -0.82)], [vect(-40.48, 267, 314.15), vect(1, 0, 0)], [vect(-12.26, 270, 299.03), vect(1, 0, -0.07)], [vect(12.27, 270, 299.02), vect(-1, 0, 0.04)], [vect(5.13, 267.17, 292.12), vect(0.41, 0, -0.91)], [vect(-5.13, 267.17, 292.12), vect(-0.41, 0, -0.91)], [vect(-0.08, 278, 337.25), vect(0, 0, -1)], [vect(-0.04, 270, 329.48), vect(0, 0, -1)], [vect(35.51, 267, 317.28), vect(-0.7, 0, -0.72)], [vect(41.19, 266.15, 323.18), vect(-0.7, 0, -0.72)], [vect(-32.62, 267, 327.53), vect(-0.02, 0, -1)], [vect(-41.8, 266.13, 322.64), vect(0.71, 0, -0.7)], [vect(-35.12, 267, 316.08), vect(0.71, 0, -0.7)], [vect(5.32, 267.17, 267.42), vect(-0.13, 0, 0.99)], [vect(-5.32, 267.17, 267.42), vect(0.13, 0, 0.99)], [vect(-0.12, 274, 337.25), vect(0, 0, -1)], [vect(44.06, 265, 325.86), vect(-0.69, 0, -0.73)], [vect(41.1, 265, 330.05), vect(0.12, 0, -0.99)], [vect(40.97, 265, 339.72), vect(-0.37, 0, -0.93)], [vect(23.62, 267, 330.68), vect(0.67, 0, -0.74)], [vect(19.55, 270, 349.55), vect(0.73, 0, -0.68)], [vect(10.78, 270, 340.97), vect(0.7, 0, -0.72)], [vect(9.75, 270, 330.75), vect(1, 0, 0.05)], [vect(25.91, 270, 337.62), vect(-0.93, 0, -0.37)], [vect(-16.74, 270, 346.7), vect(0.11, 0, -0.99)], [vect(-25.91, 270, 337.62), vect(0.91, 0, -0.41)], [vect(-17.78, 270, 347.89), vect(-0.84, 0, -0.54)], [vect(-30.43, 267, 335.94), vect(-0.09, 0, -1)], [vect(-22.47, 267, 329.51), vect(-0.69, 0, -0.72)], [vect(-41.96, 265, 340.7), vect(0.31, 0, -0.95)], [vect(-40.76, 265, 330.69), vect(-0.18, 0, -0.98)], [vect(-47.02, 265, 327.77), vect(0.72, 0, -0.69)], [vect(-22.85, 267, 278.31), vect(1, 0, 0)], [vect(22.86, 267, 278.31), vect(-1, 0, 0)], [vect(31.84, 270, 347.07), vect(-0.71, 0, -0.7)], [vect(29.57, 267, 336.8), vect(0.3, 0, -0.95)], [vect(-20.44, 270, 332.15), vect(0.94, 0, -0.34)], [vect(-23.36, 270, 350.33), vect(-0.42, 0, -0.91)], [vect(46.32, 265, 336.94), vect(-0.68, 0, -0.74)], [vect(24.94, 270, 349.58), vect(-0.03, 0, -1)], [vect(19.58, 270, 343.92), vect(-0.32, 0, -0.95)], [vect(16.78, 270, 346.7), vect(-0.1, 0, -0.99)], [vect(28.27, 267, 285.36), vect(0.7, 0, 0.71)], [vect(28.27, 267, 285.36), vect(-0.34, 0, -0.94)], [vect(-24.01, 267, 282.83), vect(-1, 0, -0.06)], [vect(-33.24, 267, 289.56), vect(-0.66, 0, 0.75)], [vect(-33.24, 267, 289.56), vect(0.63, 0, -0.77)], [vect(-17.35, 269.95, 341.06), vect(0.22, 0, -0.98)], [vect(-9.75, 269.95, 331.6), vect(-1, 0, -0.09)], [vect(1.43, 270, 329.5), vect(-0.36, 0, -0.93)], [vect(-1.43, 270, 329.5), vect(0.37, 0, -0.93)], [vect(-4.16, 278, 337.14), vect(-0.01, 0, -1)], [vect(3.89, 278, 337.1), vect(0, 0, -1)]]


def RespawnsKANEZAKA():
    @Name "Subroutine RespawnsKANEZAKA"

    #Spawn points:
    SpawnPointSettings = [[vect(4.17, 7, 22.05), vect(-0.9, 0, -0.43)], [vect(-5.05, 9.12, 38.49), vect(-0.57, 0, -0.82)], [vect(-33.42, 4, 41.35), vect(0.51, 0, -0.86)], [vect(-40.75, 6, 35.13), vect(-0.44, 0, -0.9)], [vect(-56.16, 8, 23.67), vect(0.93, 0, 0.36)], [vect(-47.79, 6, 19.61), vect(0.85, 0, 0.53)], [vect(-33.06, 6, 20.25), vect(0.77, 0, 0.63)], [vect(-11.17, 6.23, 44.06), vect(-0.92, 0, -0.38)], [vect(-16.74, 10.5, 20.99), vect(-0.53, 0, -0.85)], [vect(-15.93, 6, 20.01), vect(-0.05, 0, -1)], [vect(-0.66, 6.86, 2.92), vect(-0.35, 0, 0.94)], [vect(3.86, 6, 13.13), vect(-0.7, 0, -0.71)], [vect(10.07, 7.73, -32.26), vect(-0.01, 0, 1)], [vect(-5.08, 10, -42.01), vect(-0.7, 0, 0.71)], [vect(-14.08, 6, -36.9), vect(0.66, 0, 0.75)], [vect(-17.18, 6, -31.3), vect(-1, 0, -0.1)], [vect(-15.37, 6, -30.14), vect(0.98, 0, -0.2)], [vect(-10.57, 6, 15.63), vect(0.75, 0, -0.66)], [vect(-8.73, 6, -11.75), vect(0.65, 0, -0.76)], [vect(-11.1, 6, -11.3), vect(-0.98, 0, -0.21)], [vect(-16.88, 7.01, -57.01), vect(0.35, 0, 0.94)], [vect(-19.24, 7.01, -49.03), vect(-0.99, 0, -0.12)], [vect(-43.27, 10, -49.4), vect(-0.66, 0, 0.75)], [vect(-41.62, 11, -37.25), vect(-0.98, 0, 0.22)], [vect(-44.25, 10, -30.59), vect(0.99, 0, 0.14)], [vect(-58.3, 9, -9.46), vect(0.76, 0, 0.65)], [vect(-61.46, 11, -18.96), vect(0.96, 0, 0.27)], [vect(-58.95, 11, -38.05), vect(0.7, 0, 0.72)], [vect(-43.28, 13, -25.36), vect(-0.68, 0, 0.74)], [vect(-51.65, 11, -49.91), vect(0.97, 0, -0.24)], [vect(6.13, 7, -35.29), vect(-0.72, 0, 0.69)], [vect(14.14, 7, -29.3), vect(-0.94, 0, -0.34)], [vect(-27.83, 6, 9.99), vect(-0.01, 0, 1)], [vect(-25.64, 9, -57.29), vect(-0.39, 0, 0.92)], [vect(-8.65, 7.5, 43.93), vect(0.76, 0, -0.65)], [vect(-8.65, 7.5, 43.93), vect(-1, 0, -0.08)], [vect(-4.9, 10, 31.49), vect(-0.71, 0, 0.7)], [vect(-31.35, 4, 45.35), vect(0.43, 0, -0.9)], [vect(-26.65, 4, 45.35), vect(-0.21, 0, -0.98)], [vect(-58.11, 9, -6.17), vect(0.98, 0, -0.21)], [vect(-66.25, 12, -33), vect(0.8, 0, 0.6)], [vect(-66.25, 12, -27.74), vect(1, 0, 0)], [vect(-66.25, 12, -22), vect(0.85, 0, -0.52)], [vect(-43.85, 9.4, -55.29), vect(0.86, 0, 0.52)], [vect(-23.88, 7, -54.29), vect(-0.58, 0, 0.82)], [vect(-11.71, 7, -54.18), vect(-0.19, 0, 0.98)], [vect(10.57, 8.37, -41.1), vect(-0.98, 0, 0.18)], [vect(13.65, 8, -39.14), vect(-0.75, 0, 0.66)], [vect(9.02, 8, -35.95), vect(0.79, 0, -0.62)], [vect(12.8, 7, -22.79), vect(-0.94, 0, 0.34)], [vect(10.19, 6, -18.63), vect(-0.53, 0, 0.85)], [vect(10.19, 6, -18.63), vect(-0.21, 0, -0.98)], [vect(8.24, 9, 2.22), vect(-0.96, 0, 0.29)], [vect(8.24, 9, 2.22), vect(0.01, 0, -1)], [vect(8.69, 7.57, 6.89), vect(-0.9, 0, 0.43)], [vect(8.69, 7.57, 6.89), vect(0.3, 0, -0.95)], [vect(-32.47, 6.58, -11.38), vect(0.71, 0, 0.71)], [vect(-26.71, 10, -28.58), vect(-1, 0, 0.05)], [vect(-26.71, 10, -28.58), vect(0.96, 0, 0.28)], [vect(-23.75, 6, -28.43), vect(0.93, 0, -0.36)], [vect(-10.56, 10.5, 17.96), vect(-0.98, 0, -0.2)], [vect(-14.82, 10.5, 13.06), vect(-0.31, 0, 0.95)]]


rule "Create playzone FX":
    @Condition PlayzoneCenter != 0

    createEffect([localPlayer if distance(localPlayer, PlayzoneCenter) >= PlayzoneRadius - 8 else []], Effect.SPHERE, Color.ORANGE, PlayzoneCenter, PlayzoneRadius, EffectReeval.VISIBILITY)


rule "Trigger playzone":
    @Event eachPlayer
    @Condition distance(eventPlayer.getEyePosition(), PlayzoneCenter) >= PlayzoneRadius - 2
    @Condition PlayzoneCenter != 0

    eventPlayer.applyImpulse(eventPlayer.getVelocity() * -1, eventPlayer.getSpeed(), Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
    eventPlayer.applyImpulse(vect(directionTowards(eventPlayer.getPosition(), PlayzoneCenter).x, 0, directionTowards(eventPlayer.getPosition(), PlayzoneCenter).z), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.applyImpulse(Vector.UP, 2, Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
    playEffect(eventPlayer, DynamicEffect.BAPTISTE_BIOTIC_LAUNCHER_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 20)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 0.5)
    wait(0.5)
    if ruleCondition:
        loop()


rule "ECOPOINT create TPs":
    @Condition (getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER) == true

    createIcon([localPlayer.IsPlayer and isInLoS(localPlayer.getEyePosition(), vect(-5, 9, -54), BarrierLos.BLOCKED_BY_ALL_BARRIERS)], vect(-5.2, 8, -54.64), Icon.SPIRAL, IconReeval.VISIBILITY_POSITION_AND_COLOR, Color.SKY_BLUE, false)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ROSE, vect(-5.35, 8, -54.66), 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.PURPLE, vect(-5.35, 8, -54.66), 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.BEACON_SOUND, Color.BLUE, vect(-5.35, 8, -54.66), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createIcon([localPlayer.IsPlayer and isInLoS(localPlayer.getEyePosition(), vect(-13, 9, 44), BarrierLos.BLOCKED_BY_ALL_BARRIERS)], vect(-13.6, 8, 43.6), Icon.SPIRAL, IconReeval.VISIBILITY_POSITION_AND_COLOR, Color.SKY_BLUE, false)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ROSE, vect(-13.8, 8, 43.57), 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.PURPLE, vect(-13.8, 8, 43.57), 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.BEACON_SOUND, Color.BLUE, vect(-13.8, 8, 43.57), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ROSE, vect(-25, 31.5, -10.89), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ROSE, vect(-25, 31.5, 10.89), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "ECOPOINT trigger right side TP":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER) == true
    @Condition distance(eventPlayer, vect(-7.78, 8, -57.05)) <= 4.8

    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, vect(-5.3, 8, -54.7), 80)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR, Color.WHITE, vect(-5.3, 8, -54.7), 20)
    eventPlayer.L = 1.5
    chaseAtRate(eventPlayer.L, 0, 1)
    eventPlayer.A = eventPlayer.getFacingDirection().y
    eventPlayer.teleport(vect(-25, 31.5, -10.89))
    eventPlayer.setFacing(normalize(vect(5, eventPlayer.getPosition().y, -23) - eventPlayer.getPosition()) + vect(0, eventPlayer.A, 0), Relativity.TO_WORLD)
    eventPlayer.startAcceleration(Vector.UP, 20, 20, Relativity.TO_WORLD)
    eventPlayer.applyImpulse(vect(0, 0, 0), 2, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.applyImpulse(Vector.DOWN, 3, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait()
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.getPosition(), 200)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR, Color.WHITE, eventPlayer.getPosition(), 20)
    wait(0.5)
    eventPlayer.stopAcceleration()


rule "ECOPOINT trigger left side TP":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER) == true
    @Condition distance(eventPlayer, vect(-16.3, 8, 41)) <= 4.9

    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, vect(-13.7, 8, 43.5), 80)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR, Color.WHITE, vect(-13.7, 8, 43.5), 20)
    eventPlayer.L = 1.5
    chaseAtRate(eventPlayer.L, 0, 1)
    eventPlayer.A = eventPlayer.getFacingDirection().y
    eventPlayer.teleport(vect(-25, 31.5, 10.89))
    eventPlayer.setFacing(normalize(vect(0, eventPlayer.getPosition().y, 28) - eventPlayer.getPosition()) + vect(0, eventPlayer.A, 0), Relativity.TO_WORLD)
    eventPlayer.startAcceleration(Vector.UP, 20, 20, Relativity.TO_WORLD)
    eventPlayer.applyImpulse(vect(0, 0, 0), 2, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.applyImpulse(Vector.DOWN, 3, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait()
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.getPosition(), 200)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR, Color.WHITE, eventPlayer.getPosition(), 20)
    wait(0.5)
    eventPlayer.stopAcceleration()


rule "FOREST create TP":
    @Condition (getCurrentMap() == Map.BLACK_FOREST_WINTER or getCurrentMap() == Map.BLACK_FOREST) == true

    createInWorldText([localPlayer.IsPlayer and isInLoS(localPlayer.getEyePosition(), vect(-32, 13, 8), BarrierLos.BLOCKED_BY_ALL_BARRIERS) and angleBetweenVectors(localPlayer.getFacingDirection(), directionTowards(localPlayer.getEyePosition(), vect(-32, 13, 8))) < 15 and distance(vect(-32, 14.5, 8), localPlayer) <= 25], "teleporter", vect(-32, 17, 8), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_COLOR, Color.ROSE, SpecVisibility.NEVER)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ROSE, vect(-32, 13, 8), 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.PURPLE, vect(-32, 13, 8), 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.BEACON_SOUND, Color.BLUE, vect(-32, 13, 8), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "FOREST trigger TP":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.BLACK_FOREST_WINTER or getCurrentMap() == Map.BLACK_FOREST) == true
    @Condition distance(eventPlayer, vect(-32, 13, 8)) <= 3

    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, vect(-32, 13, 8), 120)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR, Color.WHITE, vect(-32, 13, 8), 20)
    eventPlayer.L = 1.5
    chaseAtRate(eventPlayer.L, 0, 1)
    eventPlayer.A = eventPlayer.getFacingDirection().y
    eventPlayer.teleport(vect(29, 11, 5))
    eventPlayer.setFacing(normalize(vect(0, eventPlayer.getPosition().y, 0) - eventPlayer.getPosition()) + vect(0, eventPlayer.A, 0), Relativity.TO_WORLD)
    wait()
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.getPosition(), 200)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR, Color.WHITE, eventPlayer.getPosition(), 20)
    wait(0.75)
    eventPlayer.stopAcceleration()


rule "HOLLYWOOD Locked zone 1":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN) == true
    @Condition eventPlayer.isOnGround() == true
    @Condition distance(eventPlayer, vect(2.88, 7.75, -15.9)) <= 2

    eventPlayer.applyImpulse(vectorTowards(vect(2.88, 7.75, -15.9), eventPlayer), 1, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 0.2)
    wait(0.1)
    if ruleCondition:
        loop()


rule "HOLLYWOOD Locked zone 2":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN) == true
    @Condition distance(eventPlayer, vect(37, 8.74, -66.5)) <= 6.3
    @Condition eventPlayer.isOnGround() == true
    @Condition abs(eventPlayer.getPosition().y - 8.9) < 0.2

    eventPlayer.applyImpulse(vectorTowards(vect(138, -100, 300), eventPlayer), 3, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 0.2)
    wait(0.5)
    if ruleCondition:
        loop()


rule "CREATE Dorado launcher":
    @Condition getCurrentMap() == Map.DORADO

    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.YELLOW, vect(123.4, 10, -17.5), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "TRIGGER Dorado launcher":
    @Event eachPlayer
    @Hero ana
    @Condition getCurrentMap() == Map.DORADO
    @Condition distance(eventPlayer, vect(123.4, 10, -17.5)) <= 1.2

    eventPlayer.applyImpulse(eventPlayer.getVelocity() * -1, eventPlayer.getSpeed(), Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 1)
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, vect(123.4, 10, -17.5), 30)
    playEffect(getAllPlayers().exclude(eventPlayer), DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, vect(123.4, 10, -17.5), 40)
    eventPlayer.applyImpulse(vect(-21.1, 20, 27.4), 44, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.disableEnvironmentCollision(false)
    wait(0.4)
    eventPlayer.enableEnvironmentCollision()


rule "CREATE Lijang Control launcher":
    @Condition (getCurrentMap() == Map.LIJIANG_CONTROL_CENTER or getCurrentMap() == Map.LIJIANG_CONTROL_CENTER_LNY) == true
    @Disabled

    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.YELLOW, vect(0, 271, 268), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "TRIGGER Lijang Control launcher":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.LIJIANG_CONTROL_CENTER or getCurrentMap() == Map.LIJIANG_CONTROL_CENTER_LNY) == true
    @Condition distance(eventPlayer, vect(0, 271, 268)) <= 1.2
    @Disabled

    eventPlayer.applyImpulse(eventPlayer.getVelocity() * -1, eventPlayer.getSpeed(), Relativity.TO_WORLD, Impulse.INCORPORATE_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 1)
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, vect(0, 271, 268), 30)
    playEffect(getAllPlayers().exclude(eventPlayer), DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, vect(0, 271, 268), 40)
    eventPlayer.applyImpulse(vect(0, 16, 22), 38, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.disableEnvironmentCollision(false)
    wait(1.2)
    eventPlayer.enableEnvironmentCollision()


rule "HOLLYWOOD platform boost PAYLOAD SIDE":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN) == true
    @Condition distance(eventPlayer, vect(13.2, 10.55, -32.1)) <= 2.3
    @Condition eventPlayer.isOnGround() == true
    @Condition (updateEveryFrame(eventPlayer.getPosition().y >= 9 and eventPlayer.getPosition().y < 10.4)) != false

    wait()
    if not eventPlayer.isJumping():
        if ruleCondition:
            loop()
        waitUntil(eventPlayer.isJumping(), 0.016)
        if not eventPlayer.isJumping():
            return
    eventPlayer.applyImpulse(Vector.UP, 12, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 20)


rule "HOLLYWOOD platform boost WALL SIDE":
    @Event eachPlayer
    @Hero ana
    @Condition (getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN) == true
    @Condition distance(eventPlayer, vect(-6.21, 10.13, -58.94)) <= 2.3
    @Condition eventPlayer.isOnGround() == true
    @Condition (updateEveryFrame(eventPlayer.getPosition().y >= 8.3 and eventPlayer.getPosition().y < 9.88)) != false

    wait()
    if ruleCondition:
        loop()
    if eventPlayer.isJumping():
        eventPlayer.applyImpulse(Vector.UP, 12, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 20)


rule "Hammond says hello back":
    @Event eachPlayer
    @Condition eventPlayer.isCommunicating(Comms.HELLO) == true
    @Condition distance(eventPlayer, OutOfBoundBot.getEyePosition()) < 15
    @Condition angleBetweenVectors(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition(), OutOfBoundBot.getEyePosition())) <= 16.5
    @Condition isInLoS(eventPlayer.getEyePosition(), OutOfBoundBot.getEyePosition()) == true

    wait(0.5)
    OutOfBoundBot.communicate(Comms.HELLO)
    wait(3)


rule "GLOBAL create Nano-Nuke Bastion":
    @Condition isGameInProgress() == true

    createDummy(Hero.BASTION, Team.ALL, 10, vect(0, 999, 0), Vector.UP)
    NanoNukeBot = getLastCreatedEntity()
    NanoNukeBot.startForcingName("join www.jinko.dev/discord")
    NanoNukeBot.setScore(-69)
    NanoNukeBot.setInvisibility(Invis.ALL)
    NanoNukeBot.setStatusEffect(null, Status.PHASED_OUT, 9999)
    NanoNukeBot.setGravity(0)
    NanoNukeBot.startModifyingVoicelinePitch(0.5, false)
    NanoNukeBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    #for petra floor breaking
    NanoNukeBot.startScalingSize(0.2, false)


rule "PETRA break floor over time":
    @Condition NanoNukeBot != false
    @Condition getCurrentMap() == Map.PETRA

    for PetraPunches in range(50):
        wait(3)
        #for spectators joining during the match
        NanoNukeBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
        NanoNukeBot.teleport(random.choice([vect(-4, -11, 12), vect(9.5, -11, 11.3), vect(8.2, -11, 6.5), vect(-3.3, -11, 6.5)]))
        NanoNukeBot.startForcingButton(Button.MELEE)
        wait()
        NanoNukeBot.teleport(vect(0, 999, 0))


rule "Death plane exploit loop":
    @Condition getCurrentMap() in DEATH_PLANE_BOT_MAPS == true

    wait(10)
    OutOfBoundBot.setEnvironmentalKillCreditor(OutOfBoundBot)
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    loop()


rule "Death plane HAMMOND CHATEAU":
    @Condition isGameInProgress() == true
    @Condition (getCurrentMap() == Map.CHATEAU_GUILLARD or getCurrentMap() == Map.CHATEAU_GUILLARD_HALLOWEEN) == true

    createDummy(Hero.WRECKING_BALL, Team.ALL, 11, vect(200, 200, 80), Vector.FORWARD)
    OutOfBoundBot = getLastCreatedEntity()
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    OutOfBoundBot.setScore(-69)
    OutOfBoundBot.startForcingName("giant cheese eater")
    #OutOfBoundBot.disableNameplatesFor(getAllPlayers())
    OutOfBoundBot.disableEnvironmentCollision(true)
    OutOfBoundBot.setMaxHealth(abs(100000000))
    OutOfBoundBot.setDamageDealt(0)
    OutOfBoundBot.startScalingSize(100, false)
    OutOfBoundBot.setGravity(0)
    wait(2)
    OutOfBoundBot.setStatusEffect(null, Status.INVINCIBLE, 9999)
    OutOfBoundBot.setStatusEffect(null, Status.PHASED_OUT, 9999)
    OutOfBoundBot.setEnvironmentalKillCreditor(OutOfBoundBot)
    OutOfBoundBot.teleport(vect(206.4, -34.5, 92))
    OutOfBoundBot.setFacing(Vector.BACKWARD, Relativity.TO_PLAYER)
    wait()
    OutOfBoundBot.startFacing(directionTowards(OutOfBoundBot.getEyePosition(), getClosestPlayer(OutOfBoundBot, Team.ALL)) if distance(getClosestPlayer(OutOfBoundBot, Team.ALL), vect(206.4, 0, 92)) <= 25 and distance(getClosestPlayer(OutOfBoundBot, Team.ALL), vect(206, 0, 73)) <= 13 and getClosestPlayer(OutOfBoundBot, Team.ALL).getPosition().y < 3.5 and getClosestPlayer(OutOfBoundBot, Team.ALL).hasSpawned() else Vector.BACKWARD, 20)


rule "Death plane HAMMOND HOLLYWOOD":
    @Condition isGameInProgress() == true
    @Condition (getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN) == true

    createDummy(Hero.WRECKING_BALL, Team.ALL, 11, vect(200, 200, 80), Vector.FORWARD)
    OutOfBoundBot = getLastCreatedEntity()
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    OutOfBoundBot.setScore(-69)
    OutOfBoundBot.startForcingName("giant cheese eater")
    #OutOfBoundBot.disableNameplatesFor(getAllPlayers())
    OutOfBoundBot.disableEnvironmentCollision(true)
    OutOfBoundBot.setMaxHealth(abs(100000000))
    OutOfBoundBot.setDamageDealt(0)
    OutOfBoundBot.startScalingSize(100, false)
    OutOfBoundBot.setGravity(0)
    wait(2)
    OutOfBoundBot.setStatusEffect(null, Status.INVINCIBLE, 9999)
    OutOfBoundBot.setStatusEffect(null, Status.PHASED_OUT, 9999)
    OutOfBoundBot.setEnvironmentalKillCreditor(OutOfBoundBot)
    OutOfBoundBot.teleport(vect(-16.7, -32.75, -14.25))
    OutOfBoundBot.setFacing(directionTowards(OutOfBoundBot.getEyePosition(), vect(-4, 3, -12)), Relativity.TO_WORLD)
    wait()
    OutOfBoundBot.startFacing(directionTowards(OutOfBoundBot.getEyePosition(), getClosestPlayer(OutOfBoundBot, Team.ALL)) if distance(getClosestPlayer(OutOfBoundBot, Team.ALL), vect(-7, 0.8, -7)) <= 12.2 else directionTowards(OutOfBoundBot.getEyePosition(), vect(-4, 3, -12)), 20)


rule "Death plane SIGMA BLACK FOREST":
    @Condition isGameInProgress() == true
    @Condition (getCurrentMap() == Map.BLACK_FOREST or getCurrentMap() == Map.BLACK_FOREST_WINTER) == true

    createDummy(Hero.SIGMA, Team.ALL, 11, vect(1000, 1000, 1000), Vector.FORWARD)
    OutOfBoundBot = getLastCreatedEntity()
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    OutOfBoundBot.setScore(-69)
    OutOfBoundBot.startForcingName("Bigma")
    #OutOfBoundBot.disableNameplatesFor(getAllPlayers())
    OutOfBoundBot.disableEnvironmentCollision(true)
    OutOfBoundBot.setMaxHealth(abs(100000000))
    OutOfBoundBot.setDamageDealt(0)
    OutOfBoundBot.startScalingSize(100, false)
    OutOfBoundBot.setGravity(0)
    wait(2)
    OutOfBoundBot.setStatusEffect(null, Status.INVINCIBLE, 9999)
    OutOfBoundBot.setStatusEffect(null, Status.INVINCIBLE, 9999)
    OutOfBoundBot.setStatusEffect(null, Status.PHASED_OUT, 9999)
    OutOfBoundBot.setEnvironmentalKillCreditor(OutOfBoundBot)
    OutOfBoundBot.teleport(vect(-44, -25, -2))
    OutOfBoundBot.setFacing(directionTowards(OutOfBoundBot.getEyePosition(), vect(-16.4, 15, -6)), Relativity.TO_WORLD)


rule "Mei ECOPOINT":
    @Condition isGameInProgress() == true
    @Condition (getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER) == true
    @Disabled

    createDummy(Hero.MEI, Team.ALL, 11, vect(26, 9.5, 0), Vector.RIGHT)
    OutOfBoundBot = getLastCreatedEntity()
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    OutOfBoundBot.setScore(-69)
    OutOfBoundBot.startForcingName("Ice Cube")
    OutOfBoundBot.disableNameplatesFor(getAllPlayers())
    OutOfBoundBot.disableEnvironmentCollision(false)
    OutOfBoundBot.startScalingSize(0.2, false)
    OutOfBoundBot.setGravity(0)
    OutOfBoundBot.setStatusEffect(null, Status.INVINCIBLE, 9999)
    wait(2)
    OutOfBoundBot.setStatusEffect(null, Status.ASLEEP, 9999)


rule "Kiriko Kanezaka":
    @Condition isGameInProgress() == true
    @Condition getCurrentMap() == Map.KANEZAKA

    createDummy(Hero.KIRIKO, Team.ALL, 11, vect(-11.5, 10.8, 16.9), Vector.RIGHT)
    OutOfBoundBot = getLastCreatedEntity()
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    OutOfBoundBot.setScore(-69)
    OutOfBoundBot.startForcingName("Kiricat")
    OutOfBoundBot.disableNameplatesFor(getAllPlayers())
    OutOfBoundBot.disableEnvironmentCollision(true)
    OutOfBoundBot.startScalingSize(0.15, false)
    OutOfBoundBot.setGravity(0)
    wait(2)
    OutOfBoundBot.setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
    createEffect(localPlayer, Effect.ANA_SLEEPING, Color.TEAM_1, OutOfBoundBot.getEyePosition() + vect(0, -0.1, 0), 1, EffectReeval.VISIBILITY)
    OutOfBoundBot.setStatusEffect(null, Status.PHASED_OUT, 9999)


rule "Junkrat Petra":
    @Condition isGameInProgress() == true
    @Condition getCurrentMap() == Map.PETRA

    createDummy(Hero.JUNKRAT, Team.ALL, 11, vect(-17.94, 0.24, 17.11), Vector.LEFT)
    OutOfBoundBot = getLastCreatedEntity()
    OutOfBoundBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    OutOfBoundBot.setScore(-69)
    OutOfBoundBot.startForcingName("Gold Hoarder")
    OutOfBoundBot.disableNameplatesFor(getAllPlayers())
    OutOfBoundBot.setGravity(0)
    wait(2)
    OutOfBoundBot.setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
    createEffect(localPlayer, Effect.ANA_SLEEPING, Color.TEAM_1, vect(-18.8, 0.85, 17.11), 1, EffectReeval.VISIBILITY)
    OutOfBoundBot.setStatusEffect(null, Status.PHASED_OUT, 9999)


rule "Count human kills of AI bots":
    @Event playerDied
    @Condition attacker.IsAIBot == false
    @Condition victim.IsAIBot != false

    attacker.AIBotKillsPerSlot[victim.getSlot()]++


rule "Store slot of AI bot that just joined":
    @Event eachPlayer
    @Condition eventPlayer.IsAIBot != false

    AIBotSlots.append(eventPlayer.getSlot())


rule "Remove scores from players who killed the AI bot that just left":
    @Event playerLeft
    @Condition RevertKillsToAIBotsEnabled != false

    TempLeavingAIBotSlot = -1
    for i in range(getNumberOfSlots(Team.ALL)):
        if i in AIBotSlots and (not entityExists(getPlayersInSlot(i, Team.ALL)) or not getPlayersInSlot(i, Team.ALL).IsAIBot):
            TempLeavingAIBotSlot = i
            break
    if TempLeavingAIBotSlot >= 0:
        AIBotSlots.remove(TempLeavingAIBotSlot)
        for i in range(getNumberOfSlots(Team.ALL)):
            if not getPlayersInSlot(i, Team.ALL).IsAIBot and not getPlayersInSlot(i, Team.ALL).isDummy():
                getPlayersInSlot(i, Team.ALL).setScore(getPlayersInSlot(i, Team.ALL).getScore() - getPlayersInSlot(i, Team.ALL).AIBotKillsPerSlot[TempLeavingAIBotSlot])
                getPlayersInSlot(i, Team.ALL).AIBotKillsPerSlot[TempLeavingAIBotSlot] = 0


rule "Remove AI bots to leave space for human players":
    @Event eachPlayer
    @Condition getNumberOfPlayers(Team.ALL) - len([player for player in getAllPlayers() if player.isDummy()]) == getNumberOfSlots(Team.ALL)
    @Condition eventPlayer == [player for player in getAllPlayers() if player.IsAIBot][0]

    #let the setup playerJoined rule run first, so IsAIBot is set
    wait(0, Wait.ABORT_WHEN_FALSE)
    TempAIBotBeingRemoved = [player for player in getAllPlayers() if player.IsAIBot][0]
    TempAIBotBeingRemovedName = "{0}".format(TempAIBotBeingRemoved)
    if not TempAIBotBeingRemoved:
        return
    waitUntil(hostPlayer.hasSpawned(), 99999)
    smallMessage(hostPlayer, "    {0} Removing {1} to leave space for more human players".format(iconString(Icon.BOLT), TempAIBotBeingRemovedName))
    TempAIBotBeingRemoved.removeFromGame()
    waitUntil(not entityExists(TempAIBotBeingRemoved), 2)
    #There may be AI Bots in the lobby waiting to join in. Let's remove those too.
    if ruleCondition:
        loop()


rule "Hardscope messages":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isFiringSecondaryFire() == true
    @Condition eventPlayer.isFiringPrimaryFire() == false

    wait(4, Wait.ABORT_WHEN_FALSE)
    eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
    if not strContains("{0}".format(eventPlayer), "ml7"):
        smallMessage(eventPlayer, random.choice(["    Take your time...", "    That's a long hardscope", "    No quickscopes?"]))
    else:
        smallMessage(eventPlayer, random.choice(["    ML7 CAUGHT HARDSCOPING LMFAO", "    POV you're hardscoping", "    Even Demmos doesn't hardscope ml7LMAO"]))
    return


rule "If melee an awake player":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.MELEE
    @Condition victim.hasStatus(Status.ASLEEP) == false

    eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
    smallMessage(eventPlayer, "    {0}{1}  Melee only kills sleeping players  {0}{1}".format(abilityIconString(Hero.ANA, Button.MELEE), abilityIconString(Hero.ANA, Button.ABILITY_1)))
    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 120)
    wait(0.5)


rule "If nanoboosted player uses disabled buttons":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.getScore() == NANO_SCORE
    @Condition any([eventPlayer.isHoldingButton(i_) for i_ in [Button.MELEE, Button.RELOAD, Button.PRIMARY_FIRE, Button.SECONDARY_FIRE]]) == true

    eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
    smallMessage(eventPlayer, "    {0}  Use sleep dart to win  {0}".format(iconString(Icon.EXCLAMATION_MARK)))
    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 120)
    wait(1)


rule "Scoped shots":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.ScopedShots++
    eventPlayer.ScopedAccuracy = round(eventPlayer.ScopedHits / eventPlayer.ScopedShots * 100)
    BestScopedAccuracyValue = ((sorted([player for player in getAllPlayers() if player.ScopedShots >= 15], lambda i_: i_.ScopedAccuracy)).last()).ScopedAccuracy


rule "Noscope shots":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isFiringSecondaryFire() == false

    eventPlayer.NoscopeShots++
    eventPlayer.NoscopeAccuracy = round(eventPlayer.NoscopeHits / eventPlayer.NoscopeShots * 100)
    BestNoscopeAccuracyValue = ((sorted([player for player in getAllPlayers() if player.NoscopeShots >= 15], lambda i_: i_.NoscopeAccuracy)).last()).NoscopeAccuracy


rule "Noscope hits":
    @Event playerDealtFinalBlow
    @Hero ana
    @Condition attacker.isFiringSecondaryFire() == false
    @Condition attacker.isMeleeing() == false

    attacker.NoscopeHits++
    attacker.NoscopeAccuracy = round(attacker.NoscopeHits / attacker.NoscopeShots * 100)
    BestNoscopeAccuracyValue = ((sorted([player for player in getAllPlayers() if player.NoscopeShots >= 15], lambda i_: i_.NoscopeAccuracy)).last()).NoscopeAccuracy
    BestNoscopeAccuracyPlayer = eventPlayer
    if attacker.NoscopeHits == 10:
        attacker.MedalQueue.append(34)
        bigMessage(attacker, "{0}  No scope needed!  {0}".format(abilityIconString(Hero.SOJOURN, Button.ULTIMATE)))


rule "Sleep Dart shots":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.isAlive() == true

    wait(0.3, Wait.ABORT_WHEN_FALSE)
    eventPlayer.SleepShots++
    eventPlayer.SleepAccuracy = round(eventPlayer.SleepHits / eventPlayer.SleepShots * 100)
    BestSleepAccuracyValue = ((sorted([player for player in getAllPlayers() if player.SleepShots >= 10], lambda i_: i_.SleepAccuracy)).last()).SleepAccuracy


def SleepDarts():
    @Name "Subroutine SleepDarts"

    if not FirstSleep:
        attacker.MedalQueue.append(9)
        FirstSleep = true
    victim.LastSleptBy = attacker
    for i in range(getNumberOfPlayers(Team.ALL)):
        victim.startForcingOutlineFor(getAllPlayers()[i], true, rgb(63, 191, 116) if victim.getScore() > getAllPlayers()[i].getScore() else Color.SKY_BLUE)
    attacker.SleepHits++
    attacker.SleepAccuracy = round(attacker.SleepHits / attacker.SleepShots * 100)
    BestSleepAccuracyValue = ((sorted([player for player in getAllPlayers() if player.SleepShots >= 10], lambda i_: i_.SleepAccuracy)).last()).SleepAccuracy
    BestSleepAccuracyPlayer = attacker
    wait(0.5)
    victim.SleepsOnground = true
    waitUntil(not victim.hasStatus(Status.ASLEEP), 4)
    victim.SleepsOnground = false
    victim.stopForcingOutlineFor(getAllPlayers())
    if victim.isAlive():
        victim.LastSleptBy = null
        if victim.KillStreak >= RAMPAGE_STREAK:
            victim.startForcingOutlineFor(getAllPlayers(), true, Color.YELLOW)
        elif victim.KillStreak >= ONFIRE_STREAK:
            victim.startForcingOutlineFor(getAllPlayers(), true, Color.ORANGE)
        else:
            victim.stopForcingOutlineFor(getAllPlayers())


rule "Sleep Dart hits":
    @Event playerTookDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition eventWasEnvironment == false

    #Using the async thingie to keep the wait in the logic while allowing other rules to run
    async(SleepDarts, AsyncBehavior.RESTART)


rule "detect movement bug":
    @Event playerDealtDamage
    @Hero ana
    @Condition victim.hasStatus(Status.ASLEEP) == true
    @Condition eventAbility == Button.ABILITY_1
    @Condition eventWasEnvironment == false

    victim.FixMovementBug = true


rule "Kill logic":
    @Event playerDealtDamage
    @Hero ana
    @Condition (eventAbility == Button.PRIMARY_FIRE or eventAbility == Button.MELEE and victim.hasStatus(Status.ASLEEP)) == true
    @Condition MatchEnded == false

    kill(victim, attacker)
    attacker.EarnedCollateral = 0
    victim.HonorTarget = attacker
    victim.HonorBar = 100
    chaseOverTime(victim.HonorBar, 0, CUSTOM_RESPAWN_TIME + 0.9)
    if attacker.ComebackCount > 3:
        attacker.ComebackCount = 0
        async(SayVoiceline, AsyncBehavior.NOOP)
        if attacker.ComebackCount < 10:
            attacker.MedalQueue.append(10)
        else:
            attacker.MedalQueue.append(11)
            bigMessage(attacker, "{0}  Iron Will!  {0}".format(abilityIconString(Hero.PHARAH, Button.JUMP)))
    if not FirstBlood:
        FirstBlood = not FirstBlood
        attacker.MedalQueue.append(8)
        async(SayVoiceline, AsyncBehavior.NOOP)
    #SCOPED KILLS
    if attacker.isFiringPrimaryFire() and attacker.isFiringSecondaryFire():
        attacker.ScopedHits++
        attacker.RaycastLastHitPlayer = attacker
        attacker.RaycastLastHitPos = attacker.getEyePosition()
        #COLLATERALS
        while attacker.RaycastLastHitPlayer != null:
            #if DEBUG_MODE: createBeam(getAllPlayers(), Beam.GRAPPLE, attacker.RaycastLastHitPos, raycast(attacker.RaycastLastHitPos, attacker.RaycastLastHitPos + eventPlayer.getFacingDirection() * 250, getAllPlayers(), [victim, attacker.RaycastLastHitPlayer], true).ge
            attacker.Temp = raycast(attacker.RaycastLastHitPos, attacker.RaycastLastHitPos + eventPlayer.getFacingDirection() * 250, getLivingPlayers(Team.ALL), [victim, attacker.RaycastLastHitPlayer], true).getHitPosition()
            attacker.RaycastLastHitPlayer = raycast(attacker.RaycastLastHitPos, attacker.RaycastLastHitPos + eventPlayer.getFacingDirection() * 250, getLivingPlayers(Team.ALL), [victim, attacker.RaycastLastHitPlayer], true).getPlayerHit()
            attacker.RaycastLastHitPos = attacker.Temp
            kill(attacker.RaycastLastHitPlayer, attacker)
            attacker.MedalQueue = [0].concat(attacker.MedalQueue)
            attacker.KillStreak++
            attacker.EarnedCollateral++
        attacker.ScopedAccuracy = round(attacker.ScopedHits / attacker.ScopedShots * 100)
        BestScopedAccuracyPlayer = (sorted([player for player in getAllPlayers() if player.ScopedShots >= 15], lambda i_: i_.ScopedAccuracy)).last()
        BestScopedAccuracyValue = BestScopedAccuracyPlayer.ScopedAccuracy
        if attacker.EarnedCollateral > 1:
            attacker.MedalQueue.append(30)
            bigMessage(attacker, "{0}  {1} collateral kills!  {0}".format(abilityIconString(Hero.ZARYA, Button.ABILITY_2), attacker.EarnedCollateral))
            #For loop required for SYSMSG that target multiple players
            for i in range(getNumberOfPlayers(Team.ALL) - 1):
                getAllPlayers().exclude(attacker)[i].MedalQueue = [0].concat(getAllPlayers().exclude(attacker)[i].MedalQueue)
            smallMessage(getAllPlayers().exclude(attacker), "    {0}  {1} got {2} collateral kills!".format(abilityIconString(Hero.ZARYA, Button.ABILITY_2), attacker, attacker.EarnedCollateral))
        #NOSCOPE KILLS
    elif eventAbility == Button.PRIMARY_FIRE:
        attacker.KillStreak++
        attacker.MedalQueue = [0].concat(attacker.MedalQueue)
        #MELEE KILLS
    else:
        attacker.KillStreak++
        if victim.isInAir() and attacker.isInAir():
            attacker.MedalQueue.append(33)
            bigMessage(attacker, "{0}  Dream catcher!  {0}".format(abilityIconString(Hero.RAMATTRA, Button.ABILITY_2)))
        attacker.Executes++
        attacker.PunchDrunk++
        attacker.setAmmo(0, 15)
        attacker.MedalQueue = [0].concat(attacker.MedalQueue)
        playEffect(getAllPlayers() if victim.getScore() > attacker.getScore() else getAllPlayers().exclude(victim), DynamicEffect.SIGMA_ACCRETION_IMPACT_SOUND, Color.WHITE, victim.getPosition(), 55)
        #DEMOTIONS
        if victim.getScore() >= attacker.getScore():
            attacker.DemotionVictim = victim
            attacker.MedalQueue.append(3)
            async(SaySorry, AsyncBehavior.NOOP)
            #For loop required for SYSMSG that target multiple players
            for i in range(getNumberOfPlayers(Team.ALL) - 2):
                getAllPlayers().exclude([victim, attacker])[i].MedalQueue = [0].concat(getAllPlayers().exclude([victim, attacker])[i].MedalQueue)
            smallMessage(getAllPlayers().exclude([victim, attacker]), "    {0}  {1} demoted {2}!".format(abilityIconString(Hero.WRECKING_BALL, Button.CROUCH), attacker, victim))
            victim.MedalQueue = [0].concat(victim.MedalQueue)
            smallMessage(victim, "    {0}  {1} demoted you".format(abilityIconString(Hero.WRECKING_BALL, Button.CROUCH), attacker))
            victim.setScore(victim.getScore() - 1)
            attacker.DemotedPlayers++
            if attacker.DemotedPlayers == 5:
                attacker.MedalQueue.append(4)
                bigMessage(attacker, "{0}  Terminator!  {0}".format(abilityIconString(Hero.BAPTISTE, Button.ABILITY_2)))
            playEffect(attacker, DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Color.WHITE, victim, 200)
            victim.DemotedEffect = true
            if victim.getScore() == NANO_SCORE - 1:
                attacker.MedalQueue.append(24)
                bigMessage(attacker, "  Showstopper!  ")
        elif attacker.getScore() < NANO_SCORE:
            attacker.MedalQueue.append(2)
            attacker.setAmmo(0, 15)
        if attacker.PunchDrunk == 3:
            attacker.MedalQueue.append(38)
            attacker.PunchDrunk = 0
    if victim.KillStreak == ONFIRE_STREAK - 1 or victim.KillStreak == RAMPAGE_STREAK - 1:
        attacker.MedalQueue.append(19)
        async(SaySorry, AsyncBehavior.NOOP)
    if victim.KillStreak == NUCLEAR_STREAK - 1:
        attacker.MedalQueue.append(23)
        async(SaySorry, AsyncBehavior.NOOP)
        bigMessage(getAllPlayers().exclude(attacker), "{0} saved everyone from {1}'s nuke!".format(attacker, victim))
        bigMessage(attacker, "{0}  You saved everyone from {1}'s nuke!  {0}".format(abilityIconString(Hero.MERCY, Button.ULTIMATE), victim))
    if victim.IsNuclear:
        attacker.MedalQueue.append(22)
        bigMessage(attacker, "You triggered {0}'s nuke!".format(victim))
    if victim.KillStreak == 0:
        victim.ComebackCount++
    if attacker.KillStreak > BestKillstreakValue and attacker.KillStreak >= ONFIRE_STREAK:
        BestKillstreakPlayer = attacker
        BestKillstreakValue = attacker.KillStreak
    if attacker.getScore() > NANO_SCORE:
        attacker.setScore(NANO_SCORE)
    if attacker.getAmmo() == 0:
        attacker.MedalQueue.append(32)
        bigMessage(attacker, "{0} Last bullet kill! {0}".format(iconString(Icon.CLUB)))
    #STOLEN KILLS
    if victim.LastSleptBy != null and victim.LastSleptBy != attacker:
        attacker.StolenFrom = victim.LastSleptBy
        attacker.StolenKills++
        attacker.MedalQueue.append(6)
        #For the assist
        attacker.StolenFrom.MedalQueue = [0].concat(attacker.StolenFrom.MedalQueue)
        #For the kill
        attacker.StolenFrom.MedalQueue = [0].concat(attacker.StolenFrom.MedalQueue)
        #For the message below
        attacker.StolenFrom.MedalQueue = [0].concat(attacker.StolenFrom.MedalQueue)
        if attacker.StolenKills == 5:
            attacker.MedalQueue.append(7)
            bigMessage(attacker, "{0}  Sleep thief:  {0}".format(abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE)))
        attacker.StolenFrom = [0].concat(attacker.StolenFrom)
        smallMessage(attacker.StolenFrom, "    {0}  {1} stole your kill".format(abilityIconString(Hero.ROADHOG, Button.ABILITY_1), attacker))
        async(SayThanks, AsyncBehavior.NOOP)
    if attacker.isDead():
        async(FromTheGrave, AsyncBehavior.NOOP)
    attacker.setUltCharge(attacker.getScore() / NANO_SCORE * 100)
    if attacker.getScore() == NANO_SCORE - 2:
        async(SayUltStatus, AsyncBehavior.NOOP)
    attacker.ComebackCount = 0


rule "Respawn logic":
    @Event playerDied
    @Hero ana
    @Condition MatchEnded == false
    @Condition SpawnPointSettings != 0

    eventPlayer.disableNameplatesFor([getAllPlayers(), not localPlayer.IsPlayer])
    wait(0.7)
    eventPlayer.setInvisibility(Invis.ALL)
    waitUntil(eventPlayer.isAlive(), 9)
    RespawnSystem()
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.enableNameplatesFor(getAllPlayers())


rule "Reset players upon death":
    @Event playerDied
    @Hero ana

    eventPlayer.stopForcingOutlineFor(getAllPlayers())
    #for the death system message
    eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
    eventPlayer.KillStreakBeforeDeath = eventPlayer.KillStreak
    eventPlayer.Deaths++
    eventPlayer.SleepUsedAndDied = true
    eventPlayer.SleepsOnground = false
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.IsOnFire = false
    eventPlayer.IsOnRampage = false
    eventPlayer.RampageSFX = false
    eventPlayer.NanoDelay = not eventPlayer.NanoDelay
    eventPlayer.Sandman = 0
    eventPlayer.PunchDrunk = 0
    eventPlayer.MultiKillCount = 0
    waitUntil(eventPlayer.isAlive(), 69)
    eventPlayer.SleepLock = 0
    eventPlayer.KillStreak = 0
    eventPlayer.LastSleptBy = null
    if eventPlayer.getScore() < NANO_SCORE:
        eventPlayer.setUltCharge(eventPlayer.getScore() / NANO_SCORE * 100)
    wait(2.1 - CUSTOM_RESPAWN_TIME)
    eventPlayer.NanoDelay = 1
    wait(0.5)
    eventPlayer.DemotedEffect = null


rule "fix movement bug":
    @Event playerDied
    @Hero ana
    @Condition eventPlayer.FixMovementBug == true

    waitUntil(eventPlayer.isAlive(), 69)
    eventPlayer.startForcingHero(Hero.ASHE)
    eventPlayer.startForcingHero(Hero.ANA)
    eventPlayer.FixMovementBug = false


rule "Send honor medal":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == true
    @Condition eventPlayer.HonorTarget != null
    @Condition eventPlayer.HonorBar != 0

    eventPlayer.HonorTarget.HonorQueue.append(eventPlayer)
    eventPlayer.HonorTarget.MedalQueue.append(1)
    eventPlayer.HonorBar = 0
    eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
    smallMessage(eventPlayer, "    {0}  honor sent to {1}!".format(iconString(Icon.HAPPY), eventPlayer.HonorTarget))
    playEffect(eventPlayer, DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR_SOUND, Color.WHITE, eventPlayer, 200)


rule "sleep hit sys msg":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition eventWasEnvironment == false

    attacker.MedalQueue = [0].concat(attacker.MedalQueue)


rule "Jumps":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isJumping() == true

    eventPlayer.Jumps++
    if eventPlayer.Jumps == 200:
        eventPlayer.MedalQueue.append(29)


rule "perfect quickscopes":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.ElimsBeforeQS = eventPlayer.KillStreak
    #Scope-in time
    wait(0.24, Wait.ABORT_WHEN_FALSE)
    #1 frame time window
    waitUntil(eventPlayer.isFiringPrimaryFire(), 0.016)
    if eventPlayer.isFiringPrimaryFire():
        #Scope-out time
        wait(0.16)
        if not eventPlayer.isFiringSecondaryFire() and eventPlayer.KillStreak >= eventPlayer.ElimsBeforeQS + 1:
            eventPlayer.MedalQueue.append(5)
            eventPlayer.PerfectQuickscopes++
            eventPlayer.PerfectQSVFX = true
            playEffect(eventPlayer, DynamicEffect.WRECKING_BALL_MINEFIELD_EXPLOSION_SOUND, Color.TEAM_1, eventPlayer.getPosition() + eventPlayer.getThrottle() * eventPlayer.getSpeed(), 200)
            if eventPlayer.PerfectQuickscopes == 5:
                eventPlayer.MedalQueue.append(40)
                bigMessage(eventPlayer, "{0}  Perfectionist!  {0}".format(abilityIconString(Hero.KIRIKO, Button.ULTIMATE)))
            wait(0.5)
            eventPlayer.PerfectQSVFX = null


rule "Quadfeed":
    @Event playerEarnedElimination
    @Hero ana

    attacker.QuadFeedTimes = [player for player in attacker.QuadFeedTimes if getTotalTimeElapsed() - player <= 7.5]
    attacker.QuadFeedTimes.append(getTotalTimeElapsed())
    getAllPlayers().exclude(attacker).QuadFeedTimes = []
    if len(attacker.QuadFeedTimes) == 4:
        attacker.MedalQueue.append(25)
        attacker.QuadFeedTimes = []
        bigMessage(attacker, "{0}  Quadfeed!  {0}".format(abilityIconString(Hero.PHARAH, Button.ULTIMATE)))
        playEffect(attacker, DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION_SOUND, Color.TEAM_1, attacker.getPosition() + attacker.getThrottle() * attacker.getSpeed(), 200)


rule "Multikills":
    @Event playerEarnedElimination
    @Hero ana

    attacker.MultiKillCount++
    if attacker.MultiKillCount == 5:
        attacker.MedalQueue.append(26)
        playEffect(attacker, DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION_SOUND, Color.TEAM_1, attacker.getPosition() + attacker.getThrottle() * attacker.getSpeed(), 200)
        #For loop required for SYSMSG that target multiple players
        for i in range(getNumberOfPlayers(Team.ALL) - 1):
            getAllPlayers().exclude(attacker)[i].MedalQueue = [0].concat(getAllPlayers().exclude(attacker)[i].MedalQueue)
        smallMessage(getAllPlayers().exclude(attacker), "    {0} got a pentakill!".format(abilityIconString(Hero.KIRIKO, Button.ABILITY_2)))
    elif attacker.MultiKillCount == 6:
        attacker.MedalQueue.append(27)
        playEffect(attacker, DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION_SOUND, Color.TEAM_1, attacker.getPosition() + attacker.getThrottle() * attacker.getSpeed(), 200)
        #For loop required for SYSMSG that target multiple players
        for i in range(getNumberOfPlayers(Team.ALL) - 1):
            getAllPlayers().exclude(attacker)[i].MedalQueue = [0].concat(getAllPlayers().exclude(attacker)[i].MedalQueue)
        smallMessage(getAllPlayers().exclude(attacker), "    {0} got an ultrakill!".format(abilityIconString(Hero.ZENYATTA, Button.PRIMARY_FIRE)))
    elif attacker.MultiKillCount >= 7:
        attacker.MedalQueue.append(28)
        playEffect(attacker, DynamicEffect.ECHO_STICKY_BOMB_EXPLOSION_SOUND, Color.TEAM_1, attacker.getPosition() + attacker.getThrottle() * attacker.getSpeed(), 200)
        #For loop required for SYSMSG that target multiple players
        for i in range(getNumberOfPlayers(Team.ALL) - 1):
            getAllPlayers().exclude(attacker)[i].MedalQueue = [0].concat(getAllPlayers().exclude(attacker)[i].MedalQueue)
        smallMessage(getAllPlayers().exclude(attacker), "    {0} got a pentakill!".format(abilityIconString(Hero.ZENYATTA, Button.ULTIMATE)))
    wait(3, Wait.RESTART_WHEN_TRUE)
    attacker.MultiKillCount = 0


rule "Killstreak effects & announcements":
    @Event playerEarnedElimination
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1 == false

    if attacker.KillStreak >= ONFIRE_STREAK and attacker.isAlive() and not attacker.IsOnFire:
        attacker.IsOnFire = true
        attacker.setStatusEffect(null, Status.BURNING, 9999)
        playEffect(getAllPlayers(), DynamicEffect.ASHE_DYNAMITE_EXPLOSION_SOUND, Color.TEAM_1, attacker, 70 if eventPlayer == localPlayer else 200)
        attacker.startForcingOutlineFor(getAllPlayers(), true, Color.ORANGE)
        attacker.MedalQueue.append(15)
        #For loop required for SYSMSG that target multiple players
        for i in range(getNumberOfPlayers(Team.ALL) - 1):
            getAllPlayers().exclude(attacker)[i].MedalQueue = [0].concat(getAllPlayers().exclude(attacker)[i].MedalQueue)
        smallMessage(getAllPlayers().exclude(attacker), "    {0}  {1} is on fire!  {0}".format(abilityIconString(Hero.TORBJORN, Button.ULTIMATE), attacker))
    elif attacker.KillStreak >= RAMPAGE_STREAK and attacker.isAlive() and not attacker.IsOnRampage:
        attacker.IsOnRampage = true
        attacker.MedalQueue.append(17)
        attacker.RampageSFX = true
        attacker.startForcingOutlineFor(getAllPlayers(), true, Color.YELLOW)
        bigMessage(getAllPlayers().exclude(attacker), "{0}  {1} is on a rampage!  {0}".format(abilityIconString(Hero.REAPER, Button.ULTIMATE), attacker))
        attacker.RampageVFX = true
        wait(1)
        attacker.RampageVFX = false
    elif attacker.KillStreak >= NUCLEAR_STREAK and not attacker.IsNuclear:
        attacker.IsNuclear = true
        attacker.MedalQueue.append(20)
        playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.WHITE, attacker, 200)
        createInWorldText(attacker, "    {0} Nuclear killstreak! {0}\nPress [{1}] to request Nano-nuke".format(iconString(Icon.RADIOACTIVE), inputBindingString(Button.ULTIMATE)), updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.49 * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90)) + 3 * localPlayer.getFacingDirection()))), 9, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)))
        bigMessage(getAllPlayers().exclude(attacker), "{0}  {1} is Nuclear!  {0}".format(iconString(Icon.RADIOACTIVE), attacker))


rule "Killstreak shutdown announcements":
    @Event playerDealtFinalBlow
    @Hero ana
    @Condition eventWasEnvironment == false
    #?
    @Condition victim.SleepLock < 1
    @Condition victim.KillStreak >= ONFIRE_STREAK

    attacker.ShutdownVictim = victim
    attacker.communicate(Comms.GOODBYE)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.WHITE, victim.getPosition(), 200)
    #For loop required for SYSMSG that target multiple players
    for i in range(getNumberOfPlayers(Team.ALL) - 2):
        getAllPlayers().exclude([victim, attacker])[i].MedalQueue = [0].concat(getAllPlayers().exclude([victim, attacker])[i].MedalQueue)
    if victim.KillStreak < RAMPAGE_STREAK:
        attacker.MedalQueue.append(16)
        smallMessage(getAllPlayers().exclude([victim, attacker]), "    {0}  {1}'s {2} killstreak ended".format(abilityIconString(Hero.TRACER, Button.ABILITY_2), victim, victim.KillStreak))
    elif victim.KillStreak < NUCLEAR_STREAK:
        attacker.MedalQueue.append(18)
        smallMessage(getAllPlayers().exclude([victim, attacker]), "    {0}  {1}'s {2} kills rampage ended".format(abilityIconString(Hero.TRACER, Button.ABILITY_2), victim, victim.KillStreak))
    #why
    wait(2)


rule "environmental kills":
    @Event playerDied
    @Hero ana
    @Condition eventWasEnvironment == true
    @Condition eventAbility == Button.ABILITY_1

    attacker.MedalQueue.append(14)
    bigMessage(attacker, "{0}  Environmental Kill!  {0}".format(abilityIconString(Hero.SIGMA, Button.ULTIMATE)))
    #For loop required for SYSMSG that target multiple players
    for i in range(getNumberOfPlayers(Team.ALL) - 2):
        getAllPlayers().exclude([victim, attacker])[i].MedalQueue = [0].concat(getAllPlayers().exclude([victim, attacker])[i].MedalQueue)
    smallMessage(getAllPlayers().exclude([victim, attacker]), "    {0} made {1} fall off the map...".format(victim, attacker))


rule "Environement death":
    @Event playerDied
    @Hero ana
    @Condition eventWasEnvironment == true

    if not strContains("{0}".format(eventPlayer), "ml7"):
        eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
        smallMessage(eventPlayer, random.choice(["    {0}  no wings?".format(heroIcon(random.choice([Hero.ECHO, Hero.MERCY]))), "    {0}  no jetpacks?".format(heroIcon(random.choice([Hero.PHARAH, Hero.WINSTON]))), "    {0}  no translocators?".format(heroIcon(Hero.SOMBRA)), "    {0}  no grapples?".format(heroIcon(random.choice([Hero.WRECKING_BALL, Hero.WIDOWMAKER]))), "    {0}  no teleports?".format(heroIcon(Hero.KIRIKO)), "    {0}  no recalls?".format(heroIcon(Hero.TRACER)), "    {0}  no wallrides?".format(heroIcon(Hero.LUCIO)), "    {0}  no slams?".format(heroIcon(Hero.DOOMFIST)), "    {0}  no mekas?".format(heroIcon(Hero.DVA)), "    {0}  no double jumps?".format(heroIcon(Hero.GENJI)), "    {0}  no wallclimbs?".format(heroIcon(random.choice([Hero.GENJI, Hero.HANZO, Hero.KIRIKO]))), "    {0}  no life grips?".format(heroIcon(Hero.LIFEWEAVER)), "    {0}  no rocket legs?".format(heroIcon(Hero.SOJOURN))]))
        #for ml7
    else:
        eventPlayer.MedalQueue = [0].concat(eventPlayer.MedalQueue)
        smallMessage(eventPlayer, random.choice(["    {0} would have survived this".format(random.choice(["Olaf", "Denn", "Umarrii"])), "    {0} would never die like that".format(random.choice(["Demmos", "Sp33dyal", "Zeldig"])), "    Demmos would have never done this", "    Who put that wall there???", "    Are y'all really subbed to this guy?", "    COOM?!?"]))


rule "Longshot":
    @Event playerTookDamage
    @Hero ana
    @Condition distance(attacker, victim) >= LONGSHOT_DISTANCE
    @Condition eventWasEnvironment == false
    @Condition attacker.getScore() != NANO_SCORE

    #try removing
    wait()
    attacker.MedalQueue.append(12)
    attacker.LongshotCount++
    attacker.OofDistance = distance(attacker, victim)
    createInWorldText(getAllPlayers(), random.choice(["oof", "ouch", "damn", "owie", "bonk"]), victim, 1, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 150 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 150 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 150 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), SpecVisibility.NEVER)
    victim.OofText = getLastCreatedText()
    if attacker.OofDistance > attacker.LongestLongshot:
        attacker.LongestLongshot = distance(attacker, victim)
    #try removing
    wait()
    if attacker.LongestLongshot > LongestShotValue:
        LongestShotPlayer = attacker
        LongestShotValue = attacker.LongestLongshot
    if attacker.LongshotCount >= 10:
        attacker.MedalQueue.append(35)
        bigMessage(attacker, "{0}  Deadeye!  {0}".format(abilityIconString(Hero.CASSIDY, Button.ULTIMATE)))
    if eventAbility == Button.ABILITY_1:
        attacker.MedalQueue.append(36)
        bigMessage(attacker, "{0}  Sleep Sniper!  {0}".format(abilityIconString(Hero.ORISA, Button.SECONDARY_FIRE)))
    wait(0.5)
    destroyInWorldText(victim.OofText)


rule "Sandman":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition eventWasEnvironment == false
    @Condition attacker.isAlive() == true
    @Condition victim.hasStatus(Status.ASLEEP) == false

    attacker.Sandman++
    if attacker.Sandman == 3:
        attacker.MedalQueue.append(37)
        attacker.Sandman = 0


rule "MEDALS":
    @Event eachPlayer
    @Hero ana
    @Condition len(eventPlayer.MedalQueue) > 0
    @Condition MatchEnded == false

    wait()
    eventPlayer.DisplayMedal = eventPlayer.MedalQueue[0]
    if eventPlayer.DisplayMedal != 0:
        smallMessage(eventPlayer, (["    {0}  {1} said: '{2}'".format(heroIcon(Hero.ANA), eventPlayer.HonorQueue[0], random.choice(["Nice one!", "Sheeeesh", "Damn!", "Wow", "Oof", "Clean", "{0}{0}{0}".format(iconString(Icon.FIRE))])), "    {0}{1}  Execution! Max ammo".format(abilityIconString(Hero.ANA, Button.MELEE), iconString(Icon.RECYCLE)), "    {0}  Demotion! {1} lost a point".format(abilityIconString(Hero.WRECKING_BALL, Button.CROUCH), eventPlayer.DemotionVictim), "    {0}  Terminator".format(abilityIconString(Hero.BAPTISTE, Button.ABILITY_2)), "    {0}  Perfect quickscope".format(abilityIconString(Hero.KIRIKO, Button.JUMP)), "    {0}  Perfectionist".format(abilityIconString(Hero.KIRIKO, Button.ULTIMATE)), "    {0}  Stole {1}'s kill".format(abilityIconString(Hero.ROADHOG, Button.ABILITY_1), eventPlayer.StolenFrom), "    {0}  Sleep thief".format(abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE)), "    {0}  Comeback".format(abilityIconString(Hero.MERCY, Button.ULTIMATE)), "    {0}  Iron will".format(abilityIconString(Hero.PHARAH, Button.JUMP)), "    {0}  First blood".format(abilityIconString(Hero.BRIGITTE, Button.ULTIMATE)), "    {0}  First sleep".format(abilityIconString(Hero.BRIGITTE, Button.ULTIMATE)), "    {0}  Longshot! {1}m".format(heroIcon(Hero.WIDOWMAKER), ("{0}".format(eventPlayer.OofDistance + 0.001)).substring(0, strLen("{0}".format(eventPlayer.OofDistance + 0.001)) - 1)), "    {0}  Nanopunch".format(abilityIconString(Hero.RAMATTRA, Button.ABILITY_1)), "    {0}  Environmental kill".format(abilityIconString(Hero.SIGMA, Button.ULTIMATE)), "    {0}  On fire".format(abilityIconString(Hero.TORBJORN, Button.ULTIMATE)), "    {0}  Ended {1}'s {2} Kills streak".format(abilityIconString(Hero.TRACER, Button.ABILITY_2), eventPlayer.ShutdownVictim, eventPlayer.ShutdownVictim.KillStreakBeforeDeath), "    {0}  {1}".format(abilityIconString(Hero.REAPER, Button.ULTIMATE), random.choice(["You are on a rampage!", "Rampage!"])), "    {0}  Ended {1}'s {2} kills rampage".format(abilityIconString(Hero.TRACER, Button.ABILITY_2), eventPlayer.ShutdownVictim, eventPlayer.ShutdownVictim.KillStreakBeforeDeath), "    {0}  Nuclear".format(iconString(Icon.RADIOACTIVE)), "    {0}{1}  Countermeasure".format(iconString(Icon.NO), iconString(Icon.RADIOACTIVE)), "    {0}  Catastrophe".format(abilityIconString(Hero.BASTION, Button.ULTIMATE)), "    {0}  Streak Squasher".format(abilityIconString(Hero.DOOMFIST, Button.ABILITY_1)), "    {0}  Showstopper".format(iconString(Icon.STOP)), "    {0}  Quadfeed".format(abilityIconString(Hero.PHARAH, Button.ULTIMATE)), "    {0}  Pentakill".format(abilityIconString(Hero.KIRIKO, Button.ABILITY_2)), "    {0}  Ultrakill".format(abilityIconString(Hero.ZENYATTA, Button.PRIMARY_FIRE)), "    {0}  Killionaire".format(abilityIconString(Hero.ZENYATTA, Button.ULTIMATE)), "    {0}  Jolly jumper".format(abilityIconString(Hero.BAPTISTE, Button.CROUCH)), "    {0}  Collateral kills".format(abilityIconString(Hero.ZARYA, Button.ABILITY_2)), "    {0}  Mutual sleep, awaking...".format(abilityIconString(Hero.MERCY, Button.ABILITY_2)), "    {0}  Last bullet kill".format(iconString(Icon.CLUB)), "    {0}  Dreamcatcher".format(abilityIconString(Hero.RAMATTRA, Button.ABILITY_2)), "    {0}  No scope needed".format(abilityIconString(Hero.SOJOURN, Button.ULTIMATE)), "    {0}  Deadeye".format(abilityIconString(Hero.CASSIDY, Button.ULTIMATE)), "    {0}  Sleep sniper".format(abilityIconString(Hero.ORISA, Button.SECONDARY_FIRE)), "    {0}{1}  Sandman".format(abilityIconString(Hero.ANA, Button.ABILITY_1), abilityIconString(Hero.ECHO, Button.ULTIMATE)), "    {0}{1}  Punch drunk".format(abilityIconString(Hero.ANA, Button.MELEE), iconString(Icon.DIZZY)), "    {0}  From the grave".format(abilityIconString(Hero.REAPER, Button.ULTIMATE))])[max(false, [1, 2, 3, 4, 5, 40, 6, 7, 10, 11, 8, 9, 12, 13, 14, 15, 16, 17, 18, 20, 23, 22, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39].index(eventPlayer.DisplayMedal))])
        if false:
        playEffect(eventPlayer, DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR_SOUND, Color.WHITE, eventPlayer, 200)
    elif false:
        eventPlayer.SysMsgCount++
    del eventPlayer.MedalQueue[0]
    wait(0.5)
    if eventPlayer.DisplayMedal == 1:
        del eventPlayer.HonorQueue[0]
    if ruleCondition:
        loop()


rule "Set up SleepUsedAndDied":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.isUsingAbility1() == true

    eventPlayer.SleepUsedAndDied = false


rule "Sleeping an already sleeping player adds 1 to your SleepLock":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition victim.hasStatus(Status.ASLEEP) == true
    @Condition victim.LastSleptBy == attacker

    eventPlayer.SleepLock++


rule "If SleepLock = 2, execute attacker, wake victim, reset attacker SleepLock and KillStreak":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition victim.hasStatus(Status.ASLEEP) == true
    @Condition victim.LastSleptBy == attacker
    @Condition eventPlayer.SleepLock == 2
    @Condition eventWasEnvironment == false

    kill(eventPlayer, eventPlayer)
    attacker.setScore(attacker.getScore() - 1)
    victim.MedalQueue = [0].concat(victim.MedalQueue)
    smallMessage(victim, "    {0}  Executed {1} for sleep-locking".format(abilityIconString(Hero.GENJI, Button.ABILITY_2), eventPlayer))
    attacker.MedalQueue = [0].concat(attacker.MedalQueue)
    smallMessage(attacker, "    {0}  Executed for sleep-locking {1}".format(abilityIconString(Hero.GENJI, Button.ABILITY_2), victim))


rule "Sleep-lock resets after 5s without sleeping anyone":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition eventPlayer.SleepLock > 0
    @Condition eventWasEnvironment == false

    wait(5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.SleepLock = 0


rule "Wake slept player if attacker dies after using sleep dart":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition attacker.getScore() != NANO_SCORE

    #if the attacker is alive when sleep dart hits
    if not attacker.SleepUsedAndDied:
        waitUntil(victim.isDead() or attacker.isDead(), 3.5)
        if victim.isDead() and attacker.isAlive():
            attacker.SleepUsedAndDied = true
            return
        wait(0.5, Wait.ABORT_WHEN_FALSE)
        damage(victim, null, 1)
        victim.communicate(Comms.THANKS)
        #if the attacker is dead when sleep dart hits
    else:
        victim.MedalQueue = [0].concat(victim.MedalQueue)
        smallMessage(victim, "    {0}  {1} died, awaking...".format(abilityIconString(Hero.MERCY, Button.ABILITY_2), attacker))
        wait(0.5, Wait.ABORT_WHEN_FALSE)
        damage(victim, null, 1)
        wait(0.5)
        victim.communicate(Comms.GOODBYE)


rule "Detect mutual sleeps":
    @Event playerDealtDamage
    @Hero ana
    @Condition attacker.hasStatus(Status.ASLEEP) == true
    @Condition eventAbility == Button.ABILITY_1
    @Condition victim == attacker.LastSleptBy

    [eventPlayer, victim].MedalQueue.append(31)
    bigMessage([eventPlayer, victim], "Akward moment...")
    wait(1.5, Wait.ABORT_WHEN_FALSE)
    if attacker.isAlive() and victim.isAlive():
        damage([eventPlayer, victim], null, 1)


rule "While score < NANO_SCORE, allow all buttons":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.getScore() < NANO_SCORE
    @Condition eventPlayer.isAlive() == true

    #?
    wait(0.2)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)
    eventPlayer.allowButton(Button.MELEE)
    eventPlayer.allowButton(Button.RELOAD)
    eventPlayer.stopForcingButton(Button.ULTIMATE)


rule "When reaching NANO_SCORE, nanoboost self":
    @Event playerEarnedElimination
    @Hero ana
    @Condition eventPlayer.getScore() == NANO_SCORE

    if eventPlayer.isMeleeing():
        attacker.MedalQueue.append(13)
    #for people using toggle scope
    if eventPlayer.isFiringSecondaryFire():
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    eventPlayer.setUltCharge(100)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 1)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    #for people using "confirm nano target"
    wait()
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "When score = NANO_SCORE, disable all except sleep dart, warn other players, display  objective":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.getScore() == NANO_SCORE

    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.MELEE)
    eventPlayer.disallowButton(Button.RELOAD)
    bigMessage(getAllPlayers().exclude(eventPlayer), "{0}  {1} wins in 1 kill  {0}".format(iconString(Icon.WARNING), eventPlayer))
    bigMessage(eventPlayer, "{0}  use sleep dart to win  {0}".format(abilityIconString(Hero.ANA, Button.ABILITY_1)))


rule "While score = NANO_SCORE, sleep dart cooldown is 1.5":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.getScore() == NANO_SCORE
    @Condition eventPlayer.isUsingAbility1() == true

    waitUntil(eventPlayer.getAbilityCooldown(Button.ABILITY_1) > 0, 1)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 1.5)


rule "If NANO_SCORE and died, nanoboost again":
    @Event playerDied
    @Hero ana
    @Condition eventPlayer.getScore() == NANO_SCORE

    eventPlayer.disallowButton(Button.ABILITY_1)
    waitUntil(eventPlayer.isAlive(), 69)
    while not eventPlayer.isUsingUltimate():
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait()
    eventPlayer.allowButton(Button.ABILITY_1)


rule "Nuclear victory":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.IsNuclear != false
    @Condition MatchEnded == false
    @Condition (eventPlayer.isHoldingButton(Button.ULTIMATE) or eventPlayer.isDead()) == true

    MatchEnded = true
    Winner = eventPlayer
    #in case winner is asleep
    damage(Winner, null, 1)
    NukeCamHorizontalDist = horizontalAngleOfDirection(directionTowards(NukeImpactPos, NukeCamPos))
    Camdist = magnitude((NukeCamPos - NukeImpactPos) * vect(1, 0, 1))
    NukePos = NukeImpactPos + ((directionFromAngles(NukeCamHorizontalDist + 90, 0)) * Camdist) + (vect(0, NukeCamPos.y - 10, 0))
    destroyAllInWorldTexts()
    destroyAllHudTexts()
    createInWorldText(Winner, "{0} Nano-nuke requested! {0}".format(iconString(Icon.WARNING)), updateEveryFrame(localPlayer.getEyePosition() + (100 * (0.49 * (directionFromAngles(horizontalAngleOfDirection(localPlayer.getFacingDirection()), verticalAngleOfDirection(localPlayer.getFacingDirection()) - 90)) + 3 * localPlayer.getFacingDirection()))), 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)))
    getAllPlayers().disableGamemodeHud()
    getAllPlayers().disableHeroHud()
    getAllPlayers().setStatusEffect(null, Status.PHASED_OUT, 69)
    NanoNukeBot.teleport(Winner)
    wait(0.5)
    NanoNukeBot.forceButtonPress(Button.ULTIMATE)
    wait()
    NanoNukeBot.cancelPrimaryAction()
    wait()
    destroyDummy(Team.ALL, 10)
    wait()
    #Create bot for 2nd siren
    createDummy(Hero.BASTION, Team.ALL, 10, vect(0, 999, 0), Vector.UP)
    NanoNukeBot = getLastCreatedEntity()
    NanoNukeBot.startForcingName("NANO-NUKE")
    NanoNukeBot.setInvisibility(Invis.ALL)
    NanoNukeBot.setStatusEffect(null, Status.PHASED_OUT, 9999)
    NanoNukeBot.setGravity(0)
    NanoNukeBot.startModifyingVoicelinePitch(0.5, false)
    NanoNukeBot.startForcingOutlineFor([getAllPlayers(), not localPlayer.IsPlayer], false, Color.RED)
    wait(2)
    #Winner cam
    destroyAllInWorldTexts()
    getAllPlayers().startCamera(raycast(updateEveryFrame(Winner.getEyePosition()), updateEveryFrame(Winner.getFacingDirection()) + updateEveryFrame(Winner.getEyePosition()), null, null, true).getHitPosition(), updateEveryFrame(Winner.getEyePosition()))
    getAllPlayers().setStatusEffect(null, Status.ROOTED, 999)
    getAllPlayers().setAimSpeed(10)
    getAllPlayers().setMoveSpeed(10)
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.CROUCH)
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.RELOAD)
    eventPlayer.disallowButton(Button.MELEE)
    RandomEmote()
    Winner.communicate(Comms.GOODBYE)
    wait(2)
    destroyAllInWorldTexts()
    #Swap to nuke cam
    eventPlayer.startFacing(eventPlayer.getFacingDirection(), 1000, Relativity.TO_PLAYER, FacingReeval.NONE)
    getAllPlayers().startCamera(worldVector(vect(0, 2, 2), Winner, Transform.ROTATION_AND_TRANSLATION), Winner.getPosition())
    getAllPlayers().startCamera(NukeCamPos, NukeImpactPos, 1)
    #2nd siren
    NanoNukeBot.teleport(worldVector(vect(0, 30, 0), Winner, Transform.ROTATION_AND_TRANSLATION))
    wait(0.5)
    destroyAllInWorldTexts()
    NanoNukeBot.forceButtonPress(Button.ULTIMATE)
    wait()
    destroyDummy(Team.ALL, 10)
    wait(2)
    #Create nuke effect
    createProjectileEffect(getAllPlayers(), Projectile.BAPTISTE_BIOTIC_LAUNCHER, null, NukePos, directionTowards(NukePos, NukeImpactPos), 0.4, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    Winner.NukeEffects[0] = getLastCreatedEntity()
    createProjectileEffect(getAllPlayers(), Projectile.PHARAH_ROCKET, null, NukePos, directionTowards(NukePos, NukeImpactPos), 1, ProjectileEffectReeval.VISIBILITY_POSITION_DIRECTION_AND_SIZE)
    Winner.NukeEffects[1] = getLastCreatedEntity()
    wait(2)
    chaseOverTime(NukePos, NukeImpactPos, 5)
    wait(4.8)
    declarePlayerVictory(Winner)
    destroyEffect(Winner.NukeEffects[0])
    destroyEffect(Winner.NukeEffects[1])
    kill(getAllPlayers().exclude([OutOfBoundBot, NanoNukeBot]))
    #to compensate for bomb "suicide" caused by "null" killer
    getAllPlayers().exclude([OutOfBoundBot, NanoNukeBot]).addToScore(1)
    Winner.addToScore(len(getAllPlayers().exclude([OutOfBoundBot, NanoNukeBot, Winner])))
    getAllPlayers().disableRespawn()
    #Explosion effects at NukeImpactPos
    playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, Color.TEAM_1, NukeImpactPos, 200)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, NukeImpactPos, 200)
    #Explosion frames in front of NukeCamPos
    playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, Color.WHITE, NukeCamPos + directionTowards(NukeCamPos, NukeImpactPos), 50)
    playEffect(getAllPlayers(), DynamicEffect.ZARYA_PARTICLE_CANNON_EXPLOSION, Color.WHITE, NukeCamPos + directionTowards(NukeCamPos, NukeImpactPos), 200)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.WHITE, NukeCamPos + directionTowards(NukeCamPos, NukeImpactPos), 200)
    playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, Color.WHITE, NukeCamPos + directionTowards(NukeCamPos, NukeImpactPos), 200)
    #Explosion radius effect + smoke
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, NukeImpactPos, NukeExplodeFxPos, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.RED, NukeImpactPos, NukeExplodeFxPos, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.ORANGE, NukeImpactPos, NukeExplodeFxPos - 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, NukeImpactPos, NukeExplodeFxPos - 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.ORANGE, NukeImpactPos, NukeExplodeFxPos, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    chaseAtRate(NukeExplodeFxPos, 220, 20)
    createInWorldText(getAllPlayers(), "Nuclear victory!", updateEveryFrame(NukeCamPos + (100 * (0.6 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)), verticalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)) - 90)) + 3 * directionTowards(NukeCamPos, NukeImpactPos)))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), SpecVisibility.NEVER)
    createInWorldText(getAllPlayers(), "join the discord server!\n        jinko.dev/discord", updateEveryFrame(NukeCamPos + (100 * (-1.2 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)), verticalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)) - 90)) + 3 * directionTowards(NukeCamPos, NukeImpactPos)))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), SpecVisibility.NEVER)
    #camera shake
    wait(0.3)
    for i in range(30):
        NukeCamShakeX = random.uniform(-10, 10)
        NukeCamShakeY = random.uniform(-5, 5)
        NukeCamShakeZ = random.uniform(-5, 5)
        getAllPlayers().startCamera(vect(NukeCamShakeX + NukeCamPos.x, NukeCamShakeY + NukeCamPos.y, NukeCamShakeZ + NukeCamPos.z), vect(NukeCamShakeX + NukeImpactPos.x, NukeCamShakeY + NukeImpactPos.y, NukeCamShakeZ + NukeImpactPos.z), 10)
        wait(0.05)
    for i in range(30):
        NukeCamShakeX = random.uniform(-10, 10)
        NukeCamShakeY = random.uniform(-5, 5)
        NukeCamShakeZ = random.uniform(-5, 5)
        getAllPlayers().startCamera(vect(NukeCamShakeX + NukeCamPos.x, NukeCamShakeY + NukeCamPos.y, NukeCamShakeZ + NukeCamPos.z), vect(NukeCamShakeX + NukeImpactPos.x, NukeCamShakeY + NukeImpactPos.y, NukeCamShakeZ + NukeImpactPos.z), 10)
        wait(0.05)


rule "rainbow outline for nuclear winner":
    @Event eachPlayer
    @Hero ana
    @Condition MatchEnded != false
    @Condition Winner != false
    @Condition Winner.IsNuclear != false
    @Disabled

    Winner.startForcingOutlineFor(getAllPlayers(), true, rgb(min(max(abs(getTotalTimeElapsed() * 250 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 250 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 250 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), OutlineVisibility.ALWAYS)
    wait()
    loop()


rule "Sleep Dart victory":
    @Event playerDealtDamage
    @Hero ana
    @Condition eventAbility == Button.ABILITY_1
    @Condition attacker.getScore() == NANO_SCORE
    @Condition MatchEnded == false

    MatchEnded = true
    FinalVictim = victim
    Winner = attacker
    getAllPlayers().disableGamemodeHud()
    getAllPlayers().disableHeroHud()
    declarePlayerVictory(eventPlayer)
    Winner.setScore(NANO_SCORE + 1)
    victim.OofDistance = distance(attacker, victim)
    if victim.OofDistance >= LONGSHOT_DISTANCE:
        LongshotWin = not LongshotWin
    getAllPlayers().exclude(Winner).startForcingOutlineFor(getAllPlayers(), false, Color.RED, OutlineVisibility.OCCLUDED)
    createEffect(getAllPlayers(), Effect.SOLDIER_SPRINTING, Color.WHITE, victim, 1, EffectReeval.POSITION_AND_RADIUS)
    getAllPlayers().setStatusEffect(null, Status.INVINCIBLE, 999)
    getAllPlayers().setStatusEffect(null, Status.ROOTED, 999)
    getAllPlayers().setAimSpeed(10)
    getAllPlayers().setMoveSpeed(10)
    setSlowMotion(5)
    getAllPlayers().startCamera(raycast(attacker.getPosition(), attacker.getPosition() + directionTowards(victim, attacker.getPosition()) * 3 + Vector.UP * 1.5, null, null, true).getHitPosition(), victim.getPosition())
    wait(0.35)
    getAllPlayers().startCamera(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0), 25)
    wait(0.5)
    #Amazing in-world text code by josbird https://workshop.codes/wiki/articles/rendering-an-inworld-text-at-a-specific-onscreen-position
    createInWorldText(getAllPlayers(), "longshot victory! {0}m hit!".format(("{0}".format(victim.OofDistance + 0.001)).substring(0, strLen("{0}".format(victim.OofDistance + 0.001)) - 1)) if victim.OofDistance >= LONGSHOT_DISTANCE else "{0}m sleep dart hit!".format(("{0}".format(victim.OofDistance + 0.001)).substring(0, strLen("{0}".format(victim.OofDistance + 0.001)) - 1)), updateEveryFrame(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition() + (100 * (0.6 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0))), verticalAngleOfDirection(directionTowards(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0))) - 90)) + (3 * (directionTowards(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0))))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)) if victim.OofDistance >= LONGSHOT_DISTANCE else rgb(63, 191, 116), SpecVisibility.NEVER)
    createInWorldText(getAllPlayers(), "join the discord server!\n        jinko.dev/discord", updateEveryFrame(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition() + (100 * (-1 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0))), verticalAngleOfDirection(directionTowards(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0))) - 90)) + (3 * (directionTowards(raycast(victim.getEyePosition(), victim.getEyePosition() + directionTowards(attacker, victim) * -2 + Vector.UP * 0.5, null, null, true).getHitPosition(), victim.getEyePosition() + vect(0, -1, 0))))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), SpecVisibility.NEVER)
    wait(0.95)
    playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION, Color.ROSE, victim.getPosition(), 999)
    wait(18.5)
    restartMatch()


rule "Fix camera if last victim leaves the game":
    @Event playerLeft
    @Condition MatchEnded != false

    if FinalVictim == eventPlayer:
        destroyAllInWorldTexts()
        getAllPlayers().startCamera(NukeCamPos, NukeImpactPos)
        createInWorldText(getAllPlayers(), "The last victim left the game lol", updateEveryFrame(NukeCamPos + (100 * (0.6 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)), verticalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)) - 90)) + 3 * directionTowards(NukeCamPos, NukeImpactPos)))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), SpecVisibility.NEVER)
        createInWorldText(getAllPlayers(), "join the discord server!\n        jinko.dev/discord", updateEveryFrame(NukeCamPos + (100 * (-1.2 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)), verticalAngleOfDirection(directionTowards(NukeCamPos, NukeImpactPos)) - 90)) + 3 * directionTowards(NukeCamPos, NukeImpactPos)))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(min(max(abs(getTotalTimeElapsed() * 500 % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 280.5) % 841.5 - 420.75) - 25.5, 114.75), 255), min(max(abs((getTotalTimeElapsed() * 500 + 561) % 841.5 - 420.75) - 25.5, 114.75), 255)), SpecVisibility.NEVER)


rule "CREATE all jump pads":
    if true:
        goto loc+[44, 0, 0, 4, 8, 8, 12, 12, 16, 20, 20, 24, 24, 28, 32, 32, 36, 36, 40][1 + [Map.EICHENWALDE, Map.EICHENWALDE_HALLOWEEN, Map.PETRA, Map.CHATEAU_GUILLARD, Map.CHATEAU_GUILLARD_HALLOWEEN, Map.ECOPOINT_ANTARCTICA_WINTER, Map.ECOPOINT_ANTARCTICA, Map.MALEVENTO, Map.BLACK_FOREST_WINTER, Map.BLACK_FOREST, Map.BLIZZ_WORLD_WINTER, Map.BLIZZ_WORLD, Map.DORADO, Map.HOLLYWOOD_HALLOWEEN, Map.HOLLYWOOD, Map.LIJIANG_CONTROL_CENTER_LNY, Map.LIJIANG_CONTROL_CENTER, Map.KANEZAKA].index(getCurrentMap())]
        JumpPadPos = [vect(47.05, 2.91, -75.46), vect(60.91, 8.9, -58.98), vect(67.98, 11.05, -104.86)]
        JumpPadPower = [23.5, 15, 17]
        JumpPadSize = [3.9, 3.1, 1.8]
    else:
        JumpPadPos = [vect(1.91, -16.7, 46.1), vect(-2.54, -11.77, 16.85), vect(-15.33, -10.7, 30.07), vect(-38.52, -15.72, 18.04), vect(1.96, -5.8, -19), vect(16.05, -11.4, 8.72)]
        JumpPadPower = [22.2, 19, 19, 18.5, 13, 12]
        JumpPadSize = [3.9, 2.4, 2, 3.5, 2.2, 2.7]
    else:
        JumpPadPos = [vect(229.49, 0.38, 83.1), vect(187.32, -0.6, 69.5), vect(218.55, 10.44, 47.06), vect(172, -1.25, 53.8)]
        JumpPadPower = [17.5, 17.5, 17.5, 17.5]
        JumpPadSize = [2.3, 2, 2, 1.8]
    else:
        JumpPadPos = [vect(-6.1, 4.7, 17), vect(-6.1, 4.7, -17), vect(10.35, 2.18, 0), vect(-15, 4.85, 0)]
        JumpPadPower = [16, 16, 15.5, 15]
        JumpPadSize = [2.6, 2.6, 2.3, 2.9]
    else:
        JumpPadPos = [vect(-29.65, -4.57, -8), vect(0, -2.62, -7.23), vect(11.72, 0, 9.65), vect(0, -1.78, 34.06)]
        JumpPadPower = [17, 20.9, 15, 26]
        JumpPadSize = [2, 2, 3.7, 4.1]
    else:
        JumpPadPos = [vect(4.6, 10, 5), vect(0, 10.82, 24.24), vect(0, 10.82, -14.87), vect(-20.55, 11.4, 22), vect(-20.55, 11.4, -11), vect(21.4, 9.6, 19.16), vect(21.4, 9.5, -8.7)]
        JumpPadPower = [15, 15, 15, 15, 15, 15, 15]
        JumpPadSize = [2.8, 2, 2, 2, 2, 2, 2]
    else:
        JumpPadPos = [vect(-75.5, -1.45, 75), vect(-41.3, -3.3, 84.3), vect(-20, -1.16, 92.15), vect(-63.5, -4.1, 92.14), vect(-41, -4.8, 145.45), vect(-70, -1.9, 116.5)]
        JumpPadPower = [16.5, 16, 15, 17, 14, 16.5]
        JumpPadSize = [2, 3.3, 3.4, 4, 3, 3]
    else:
        JumpPadPos = [vect(129.71, 7.77, 16.9), vect(92.5, 9.67, 31.88), vect(102.9, 7.7, 8.9), vect(110.9, 7.66, 17.8)]
        JumpPadPower = [17.5, 18.5, 17.5, 16.3]
        JumpPadSize = [3.5, 3.5, 3.5, 3.6]
    else:
        JumpPadPos = [vect(-6.15, -3.65, -34.4), vect(18.25, -3.65, -70.56), vect(2.73, -1.04, -15.85)]
        JumpPadPower = [20, 22.5, 17]
        JumpPadSize = [5.5, 5.6, 3.2]
    else:
        JumpPadPos = [vect(0, 263.85, 285.88), vect(25.15, 263.75, 291.55), vect(-25.15, 263.75, 291.55), vect(5.63, 267.79, 313.71), vect(-5.63, 267.79, 313.71), vect(7.22, 264, 271.4), vect(-7.22, 264, 271.4)]
        JumpPadPower = [20.5, 13, 13, 18.5, 18.5, 13, 13]
        JumpPadSize = [4, 3.4, 3.4, 2.5, 2.5, 3.35, 3.35]
    else:
        JumpPadPos = [vect(-38, 3.7, -40.58), vect(-38.13, 2.6, 3.2), vect(-26.42, 2.65, 27)]
        JumpPadPower = [15, 17, 14]
        JumpPadSize = [3.5, 3.5, 3.5]
    else:
    for JumpPadFx in range(len(JumpPadPos)):
        createEffect(getAllPlayers(), Effect.SPHERE, JUMP_PAD_COLOR, JumpPadPos[JumpPadFx], JumpPadSize[JumpPadFx], EffectReeval.VISIBILITY_AND_COLOR)


rule "TRIGGER any jump pad":
    @Event eachPlayer
    @Hero ana
    @Condition eventPlayer.hasSpawned() == true
    @Condition len(JumpPadPos) > 0
    @Condition any([distance(eventPlayer, player) <= JumpPadSize[i_] for player, i_ in JumpPadPos]) == true

    eventPlayer.ClosestPadIndex = JumpPadPos.index(sorted(JumpPadPos, lambda player: distance(eventPlayer, player)))
    eventPlayer.applyImpulse(Vector.UP, JumpPadPower[eventPlayer.ClosestPadIndex], Relativity.TO_WORLD)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 30)


def FromTheGrave():
    @Name "Subroutine FromTheGrave"

    waitUntil(attacker.isAlive(), 69)
    attacker.MedalQueue.append(39)


def SayVoiceline():
    @Name "Subroutine SayVoiceline"

    wait(0.4)
    if attacker.isAlive():
        if true:
            goto loc+[4, 0, 1, 2, 3][1 + [1, 2, 3, 4].index(random.randint(1, 4))]
            eventPlayer.communicate(Comms.VOICE_LINE_UP)
            eventPlayer.communicate(Comms.VOICE_LINE_RIGHT)
            eventPlayer.communicate(Comms.VOICE_LINE_DOWN)
            eventPlayer.communicate(Comms.VOICE_LINE_LEFT)


def SayUltStatus():
    @Name "Subroutine SayUltStatus"

    wait(0.4)
    attacker.communicate(Comms.ULTIMATE_STATUS)


def SayThanks():
    @Name "Subroutine SayThanks"

    wait(0.4)
    attacker.communicate(Comms.THANKS)


def SaySorry():
    @Name "Subroutine SaySorry"

    wait(0.4)
    attacker.communicate(Comms.SORRY)


def RandomEmote():
    @Name "Subroutine RandomEmote"

    if true:
        goto loc+[4, 0, 1, 2, 3][1 + [1, 2, 3, 4].index(random.randint(1, 4))]
        eventPlayer.communicate(Comms.EMOTE_UP)
        eventPlayer.communicate(Comms.EMOTE_RIGHT)
        eventPlayer.communicate(Comms.EMOTE_DOWN)
        eventPlayer.communicate(Comms.EMOTE_LEFT)
    wait(1)
    if not attacker.isCommunicatingAnything():
        attacker.communicate(Comms.GOODBYE)
