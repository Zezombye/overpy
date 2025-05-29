settings {
    "main": {
        "description": "<fg00ffffff>Base Wars <fgffa600ff>is a FFA in which you <fgff6fd0ff>build your base</fg>, <fgc752ffff>collect loot</fg> and <fgc8ff55ff>raid your neighbors</fg>.\n\nFirst to <fgffff00ff>1000 gold</fg> wins - <fgf40000ff>by any means necessary.</fg>\n\n<fgddddddff>v2.3</fg> | Code: <fg00ff6eff>14WON</fg>\n\nFeedback: <fgff00ffff>discord.gg/EEMjjFB</fg>\nMade by </fg>Durkhaz",
        "modeName": "<fg00ffffff>Base <fgff5e5eff>Wars <fgffff00ff>2.3"
    },
    "lobby": {
        "mapRotation": "afterGame",
        "enableMatchVoiceChat": true,
        "returnToLobby": "never",
        "swapTeamsAfterMatch": false
    },
    "gamemodes": {
        "ffa": {
            "disabledMaps": [
                "workshopChamber",
                "workshopExpanse",
                "workshopGreenScreen",
                "workshopIsland"
            ]
        },
        "general": {
            "enableHeroSwitching": false,
            "gamemodeStartTrigger": "allSlotsFilled",
            "heroLimit": "off",
            "enableKillCam": false,
            "enableKillFeed": false,
            "respawnTime%": 60,
            "enableSelfInitiatedRespawn": false,
            "spawnHealthPacks": "disabled"
        }
    },
    "heroes": {
        "allTeams": {
            "ana": {
                "ultGen%": 150
            },
            "mercy": {
                "ultGen%": 150
            },
            "wreckingBall": {
                "healingReceived%": 80
            },
            "zenyatta": {
                "ultGen%": 150
            }
        }
    }
}

#Global variables

globalvar practiceRangeTranslations 0
globalvar powerLevelColors 1
globalvar upgradeColors 2
globalvar upgradeIcons 3
globalvar waitingStartGameHud 4
globalvar waitingNavmeshHud 5
globalvar gameEndCamera 6
globalvar tmpTotalGoldCalc 7
globalvar hudIterator 8
globalvar antiCrashActivated 9
globalvar isGameInitialized 10
globalvar hasGameStarted 11
globalvar gameRulesGoldMinerInitialCost 12
globalvar mapNavMesh 14
globalvar leaderboard 15
globalvar mapOrigin 16
globalvar mapXYZ 17
globalvar mapRotationVector 18
globalvar mapInfo 20
globalvar bountyArrayLocations 22
globalvar bountyArrayEffects 23
globalvar bountyArrayMoney 24
globalvar bountyArrayNum 25
globalvar bountyArrayIterator 26
globalvar tmpBountyClosestPlayer 27
globalvar tmpBountyLocation 28
globalvar stealingBaseOwnerIterator 35
globalvar gameHealingHeroes 36
globalvar mapSize 39
globalvar stealingDistanceThreshold 40
globalvar stealingDistanceMultiplier 41
globalvar totalGoldToWin 42
globalvar sparkboltSpawnpointIndex 43
globalvar sparkboltPickupPos 44
globalvar tmpSparkboltClosestPlayer 45
globalvar sparkboltEffects 46
globalvar tmpPowerupSpawnpointRandomPoint 47
globalvar tmpPowerupSpawnpointRandomPointW 48
globalvar lootBlockerVolumeRadius 49
globalvar gameRulesMoveBaseInitialCost 50
globalvar gameRulesGoldMinerFrequency 51
globalvar gameEnded 54
globalvar gameWinner 55
globalvar gameEndingScreenPos 56
globalvar gameScorePositions 57
globalvar gameScoreTopPlayers 58
globalvar gameScoreTopPlayersValues 59
globalvar baseUpgradeSphereActualSize 60
globalvar tmpBaseOwners 61
globalvar team1Str 62
globalvar team2Str 63
globalvar workshopSettingsIterator 64
globalvar enabledSettingsStr 66
globalvar enableStealing 67
globalvar enableOccupiedStealing 68
globalvar enableSparkbolts 69
globalvar enableGoldMinerUpgrade 70
globalvar enableLootOrbs 71
globalvar lootSpawnMax 72
globalvar gameLootOrbAmount 73
globalvar enableInvisibleLootPickup 74
globalvar gameGoldVictory 75
globalvar enableAlwaysFreeHeroSwitch 76
globalvar enableAlwaysFreeBaseMove 77
globalvar enableInefficientGoldMiner 78
globalvar mapExtension1Spawn 79
globalvar mapExtension1Xyz 80
globalvar mapExtension1Origin 81
globalvar mapExtension1Rotation 82
globalvar mapExtension2Spawn 83
globalvar mapExtension2Xyz 84
globalvar mapExtension2Origin 85
globalvar mapExtension2Rotation 86
globalvar mapExtension3Spawn 87
globalvar mapExtension3Xyz 88
globalvar mapExtension3Origin 89
globalvar mapExtension3Rotation 90
globalvar mapExtensionSpawn 91
globalvar chosenMapExtension 92
globalvar availableMapExtensions 93
globalvar disableNwpCheck 94
globalvar lootArrayLocations 95
globalvar lootSpawnPoints 96
globalvar lootArrayLocationsStored 97
globalvar lootSpread 98
globalvar lootCollectIterator 99
globalvar lootArraySpawned 100
globalvar lootSpawnpointIterator 101
globalvar lootSpawnerIterator 102
globalvar lootSpawnerNumLoot 103
globalvar lootSpawnerEffectIterator 104
globalvar tmpLootSpawnpointRandomPointWP 105
globalvar tmpLootCollectClosestPlayer 106
globalvar tmpLootSpawnpoint 107
globalvar tmpLootSpawnpointProximity 108
globalvar tmpLootSpawnpointRandomPoint 109
globalvar lootBlockerVolumePos 110
globalvar displayScoreboard 111
globalvar tmpAllPlayers 112
globalvar scoreboardIterator 113
globalvar tmpPlayer 114


#Player variables

playervar storedMoney 0
playervar statsMoney 1
playervar hasBase 2
playervar statsUpgradeCost 3
playervar statsMoneyStorage 4
playervar tmpUpgradeCurrentSelection 5
playervar canAutoHeal 6
playervar regenStartTime 7
playervar isStealingActive 8
playervar playerBaseProximityIterator 9
playervar statsStealingSpeed 10
playervar playerBaseLocation 12
playervar statsMoneyBase 13
playervar debugEffectCountArray 18
playervar baseProtectionTimer 19
playervar isMovingBase 20
playervar hudBaseProtection 21
playervar tmpMoneyDifference 23
playervar statsMoneySec 24
playervar playerObjectInBase 25
playervar statsMoneyKill 26
playervar isInBase 27
playervar isChangingHero 28
playervar oldHeroHealth 29
playervar isInitialized 30
playervar upgradeCurrentSelection 33
playervar isUpgradeInputOnCooldown 34
playervar showUpgradeText 35
playervar regenID 36
playervar upgradeOffsetLeft 37
playervar upgradeOffsetRight 38
playervar isCloaked 39
playervar stealingFrom 40
playervar stealingSoundEffect 41
playervar tmpStealingAmount 42
playervar stealingOnCooldown 43
playervar statsUpgradeLevels 45
playervar statsUpgradeHeroSwitchUsed 47
playervar statsUpgradeHeroSwitchShadowCost 48
playervar tmpStealingDistanceBonus 49
playervar tmpStealingRiskBonus 50
playervar statsBaseDelay 51
playervar isSparkboltOnCooldown 52
playervar tmpBaseSparkboltTarget 53
playervar nbSparkbolts 54
playervar sparkboltEffect 55
playervar scoreArray 56


#Subroutine names

subroutine settleBalance 0
subroutine setBaseLocation 1
subroutine playerBaseBuildEffects 2
subroutine baseUpgradeFail 3
subroutine checkUpgradeAvailability 4


rule "Initialize global variables":
    practiceRangeTranslations = ["Practice Range", "Campo de Treinamento"]
    powerLevelColors = [Color.WHITE, Color.WHITE, Color.WHITE, Color.WHITE, Color.AQUA, Color.AQUA, Color.AQUA, Color.BLUE, Color.PURPLE, Color.RED, Color.ORANGE, rgb(20, 20, 20)]
    upgradeColors = [Color.BLUE, Color.RED, Color.YELLOW, Color.GREEN, Color.TURQUOISE, Color.PURPLE, Color.AQUA]
    upgradeIcons = [iconString(Icon.DIAMOND), iconString(Icon.SKULL), iconString(Icon.CIRCLE), iconString(Icon.TRASHCAN), iconString(Icon.RECYCLE), iconString(Icon.STOP), iconString(Icon.WARNING)]
    team1Str = "{0}".format(Team.1)
    team2Str = "{0}".format(Team.2)
    workshopSettingsIterator = 0
    enabledSettingsStr = ""
    enableStealing = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Enable Stealing", true)
    enableOccupiedStealing = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Enable stealing from occupied bases", true, 1)
    enableSparkbolts = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Spawn sparkbolts", true, 2)
    enableGoldMinerUpgrade = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Players can upgrade gold miner", true, 3)
    enableLootOrbs = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Spawn loot orbs", true, 4)
    lootSpawnMax = createWorkshopSettingInt("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Maximum number of loot orbs [default 16]", 16, 5, 16, 5)
    gameLootOrbAmount = createWorkshopSettingInt("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Gold given by loot orbs [default 10]", 10, 5, 30, 6)
    enableInvisibleLootPickup = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Sombra can pick up orbs while invisible", false, 7)
    gameGoldVictory = createWorkshopSettingInt("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Amount of gold to win [default 1000]", 1000, 500, 5000, 8)
    enableAlwaysFreeHeroSwitch = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Hero switch is always free", false, 9)
    enableAlwaysFreeBaseMove = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Base move is always free", false, 10)
    enableInefficientGoldMiner = createWorkshopSettingBool("BASE WARS BY DURKHAZ#2629\nCONCEPT- PYROCREEP#2665\nTHANKS- CUDDLYFLOWER#2892, HuKuTa94#2589, Kevin#26140\nRemaster- Zezombye#2627", "Make gold miner less efficient", false, 11)
    mapExtension1Spawn = null
    mapExtension1Xyz = null
    mapExtension1Origin = null
    mapExtension1Rotation = null
    mapExtension2Spawn = null
    mapExtension2Xyz = null
    mapExtension2Origin = null
    mapExtension2Rotation = null
    mapExtension3Spawn = null
    mapExtension3Xyz = null
    mapExtension3Origin = null
    mapExtension3Rotation = null
    mapExtensionSpawn = null
    chosenMapExtension = 0
    availableMapExtensions = [0]
    disableNwpCheck = false
    lootArrayLocations = []
    lootSpawnPoints = []
    displayScoreboard = false


rule "LOOT BOUNTY COLLECT LOOP":
    @Condition hasGameStarted != false
    @Condition bountyArrayNum != 0

    for bountyArrayIterator in range(len(bountyArrayLocations)):
        if bountyArrayEffects[bountyArrayIterator] != null:
            tmpBountyLocation = bountyArrayLocations[bountyArrayIterator]
            tmpBountyClosestPlayer = (sorted([player for player in getAllPlayers() if player.isAlive() and player.hasSpawned() and not player.isInBase and (enableInvisibleLootPickup or not player.isCloaked)], lambda i: distance(i.getPosition(), tmpBountyLocation)))[0]
            if entityExists(tmpBountyClosestPlayer) and distance(tmpBountyClosestPlayer.getPosition(), tmpBountyLocation) <= 2.5:
                tmpBountyClosestPlayer.statsMoney += bountyArrayMoney[bountyArrayIterator]
                tmpBountyClosestPlayer.scoreArray[2] += bountyArrayMoney[bountyArrayIterator]
                tmpBountyClosestPlayer.scoreArray[5]++
                destroyEffect(bountyArrayEffects[bountyArrayIterator])
                bountyArrayNum--
                bountyArrayEffects[bountyArrayIterator] = null
                playEffect(tmpBountyClosestPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, tmpBountyLocation, 50)
                smallMessage(tmpBountyClosestPlayer, "+{0}{1}".format(evalOnce(bountyArrayMoney[bountyArrayIterator]), [" PLAYER GOLD", " ouro do jogador"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
                if bountyArrayMoney[bountyArrayIterator] <= 25:
                    playEffect(tmpBountyClosestPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, tmpBountyLocation, 1)
                elif bountyArrayMoney[bountyArrayIterator] > 25 and bountyArrayMoney[bountyArrayIterator] <= 250:
                    playEffect(tmpBountyClosestPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.TURQUOISE, tmpBountyLocation, 1)
                elif bountyArrayMoney[bountyArrayIterator] > 250 and bountyArrayMoney[bountyArrayIterator] <= 750:
                    playEffect(tmpBountyClosestPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.BLUE, tmpBountyLocation, 1)
                else:
                    playEffect(tmpBountyClosestPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, tmpBountyLocation, 1)
                wait(0.032)
            wait(0.032)
    wait(0.1)
    if ruleCondition:
        loop()


rule "LOOT FIND SPAWNPOINTS":
    @Condition hasGameStarted != false

    while lootSpawnpointIterator <= 200 and len(tmpLootSpawnpointProximity) < 128:
        tmpLootSpawnpointRandomPointWP = mapOrigin + mapRotationVector * random.uniform(0, mapXYZ.x) + vect(mapRotationVector.z, 0, mapRotationVector.x * -1) * random.uniform(0, mapXYZ.z) + vect(0, random.uniform(0, mapXYZ.y), 0)
        if disableNwpCheck:
            tmpLootSpawnpoint = raycast(tmpLootSpawnpointRandomPointWP, tmpLootSpawnpointRandomPointWP - vect(0, 100, 0), [], [], false).getHitPosition()
            if tmpLootSpawnpoint == tmpLootSpawnpointRandomPointWP - vect(0, 100, 0):
                goto lbl_0
        else:
            tmpLootSpawnpoint = nearestWalkablePosition(tmpLootSpawnpointRandomPointWP) + vect(0, 0.35, 0)
            if distance(tmpLootSpawnpoint, tmpLootSpawnpointRandomPointWP) > 5:
                goto lbl_1
        if tmpLootSpawnpoint == 0 or lootBlockerVolumePos != 0 and distance(tmpLootSpawnpoint, lootBlockerVolumePos) <= lootBlockerVolumeRadius:
            goto lbl_2
        tmpLootSpawnpointProximity = sorted(lootSpawnPoints.exclude(null), lambda i: distance(tmpLootSpawnpoint, i))
        if distance(tmpLootSpawnpoint, tmpLootSpawnpointProximity[0]) < lootSpread and len(tmpLootSpawnpointProximity) != 0:
            goto lbl_3
        goto lbl_4
        lbl_3:
        lootSpawnpointIterator++
        lbl_0:
        lbl_1:
        lbl_2:
        wait(0.001)
        loop()
        lbl_4:
        lootSpawnPoints.append(tmpLootSpawnpoint)
        lootSpawnpointIterator = 0
        wait(0.001)
    lootSpawnpointIterator = 0
    lootSpawnMax min= len(lootSpawnPoints)
    lootArrayLocations[lootSpawnMax - 1] = null
    lootArrayLocationsStored[lootSpawnMax - 1] = 0
    tmpLootSpawnpointProximity = null


rule "LOOT LOOT EFFECTS":
    @Condition hasGameStarted != false
    @Condition lootArrayLocations != []
    @Condition enableLootOrbs != false

    for lootCollectIterator in range(len(lootArrayLocations)):
        lootArrayLocations[lootCollectIterator] = vect(0, -9999, 0)
    #This is ugly, but this way loot effects stay persistent
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[0], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 1:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 2:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[2], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 3:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[3], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 4:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[4], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 5:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[5], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 6:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[6], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 7:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[7], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 8:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[8], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 9:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[9], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 10:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[10], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 11:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[11], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 12:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[12], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 13:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[13], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 14:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[14], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if lootSpawnMax == 15:
        return
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, lootArrayLocations[15], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "LOOT SPAWN":
    @Condition hasGameStarted != false
    @Condition gameEnded == false
    @Condition enableLootOrbs != false
    @Condition len(lootArrayLocations) != 0
    @Condition lootSpawnerNumLoot < lootSpawnMax

    if lootArraySpawned[lootSpawnerEffectIterator]:
        lootSpawnerEffectIterator++
        if lootSpawnerEffectIterator >= len(lootArrayLocations):
            lootSpawnerEffectIterator = 0
        wait()
        loop()
    while true:
        if disableNwpCheck:
            tmpLootSpawnpointRandomPointWP = lootSpawnPoints[lootSpawnerIterator]
        else:
            tmpLootSpawnpointRandomPoint = normalize(vect(random.uniform(-1, 1), random.uniform(-1, 1), random.uniform(-1, 1))) * random.uniform(2, 10) + lootSpawnPoints[lootSpawnerIterator]
            tmpLootSpawnpointRandomPointWP = nearestWalkablePosition(tmpLootSpawnpointRandomPoint)
            if distance(tmpLootSpawnpointRandomPointWP, tmpLootSpawnpointRandomPoint) >= 1.5:
                wait(0.064)
                goto lbl_0
        tmpLootSpawnpointRandomPointWP = raycast(tmpLootSpawnpointRandomPointWP + vect(0, 2, 0), tmpLootSpawnpointRandomPointWP - vect(0, 10, 0), null, null, false).getHitPosition() + vect(0, 0.35, 0)
        if (disableNwpCheck or distance(tmpLootSpawnpointRandomPointWP, nearestWalkablePosition(tmpLootSpawnpointRandomPointWP)) <= 0.1) and (lootBlockerVolumePos == null or lootBlockerVolumePos != null and distance(tmpLootSpawnpointRandomPointWP, lootBlockerVolumePos) > lootBlockerVolumeRadius):
            break
        wait(0.064)
        lbl_0:
    lootArrayLocations[lootSpawnerEffectIterator] = tmpLootSpawnpointRandomPointWP
    lootArraySpawned[lootSpawnerEffectIterator] = true
    lootSpawnerIterator++
    lootSpawnerNumLoot++
    if lootSpawnerIterator >= len(lootSpawnPoints):
        lootSpawnerIterator = 0
    wait(1.12)
    if ruleCondition:
        loop()


rule "LOOT COLLECT LOOP":
    @Condition hasGameStarted != false
    @Condition enableLootOrbs != false

    for lootCollectIterator in range(len(lootArrayLocations)):
        if lootArraySpawned[lootCollectIterator]:
            tmpLootCollectClosestPlayer = (sorted([player for player in getAllPlayers() if player.isAlive() and player.hasSpawned() and not player.isInBase and (enableInvisibleLootPickup or not player.isCloaked)], lambda i: distance(i.getPosition(), lootArrayLocations[lootCollectIterator])))[0]
            if entityExists(tmpLootCollectClosestPlayer) and distance(tmpLootCollectClosestPlayer, lootArrayLocations[lootCollectIterator]) <= 2.5:
                lootArrayLocationsStored[lootCollectIterator] = lootArrayLocations[lootCollectIterator]
                lootSpawnerNumLoot--
                playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, lootArrayLocationsStored[lootCollectIterator], 1)
                playEffect(tmpLootCollectClosestPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, lootArrayLocationsStored[lootCollectIterator], 50)
                lootArrayLocations[lootCollectIterator] = vect(0, -9999, 0)
                lootArraySpawned[lootCollectIterator] = false
                tmpLootCollectClosestPlayer.statsMoney += gameLootOrbAmount
                tmpLootCollectClosestPlayer.scoreArray[2] += gameLootOrbAmount
                tmpLootCollectClosestPlayer.scoreArray[5]++
                smallMessage(tmpLootCollectClosestPlayer, "+{0}{1}".format(gameLootOrbAmount, [" GOLD", " de ouro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        wait()
    wait(0.1)
    loop()


rule "LOOT LOSS1":
    @Event playerDied
    @Condition attacker == victim
    @Condition hasGameStarted != false

    eventPlayer.statsMoney = 0


rule "LOOT LOSS2":
    @Event playerDied
    @Condition hasGameStarted != false

    destroyHudText(eventPlayer.hudBaseProtection)


rule "LOOT POWERUP COLLECT LOOP":
    @Condition sparkboltPickupPos != null
    @Condition enableSparkbolts != false

    tmpSparkboltClosestPlayer = (sorted([player for player in getAllPlayers() if player.isAlive() and player.hasSpawned() and not player.isInBase and (enableInvisibleLootPickup or not player.isCloaked)], lambda i: distance(i.getPosition(), sparkboltPickupPos)))[0]
    if entityExists(tmpSparkboltClosestPlayer) and distance(tmpSparkboltClosestPlayer.getPosition(), sparkboltPickupPos) <= 2.5:
        tmpSparkboltClosestPlayer.nbSparkbolts++
        smallMessage(tmpSparkboltClosestPlayer, "+1 {0}{1}".format(iconString(Icon.BOLT), [" SPARKBOLT", " faísca"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        destroyEffect(sparkboltEffects[0])
        destroyEffect(sparkboltEffects[1])
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, sparkboltPickupPos, 1)
        playEffect(tmpSparkboltClosestPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, sparkboltPickupPos, 50)
        sparkboltPickupPos = null
        sparkboltSpawnpointIndex = (sparkboltSpawnpointIndex + 1) % len(lootSpawnPoints)
    wait(0.25)
    if ruleCondition:
        loop()


rule "LOOT POWERUP SPAWN":
    @Condition hasGameStarted != false
    @Condition sparkboltPickupPos == null
    @Condition enableSparkbolts != false

    wait(60 - getNumberOfPlayers(Team.ALL))
    while true:
        tmpPowerupSpawnpointRandomPoint = normalize(vect(random.uniform(-1, 1), random.uniform(-1, 1), random.uniform(-1, 1))) * random.uniform(2, 10) + lootSpawnPoints[sparkboltSpawnpointIndex]
        if disableNwpCheck:
            tmpPowerupSpawnpointRandomPointW = raycast(tmpPowerupSpawnpointRandomPoint, tmpPowerupSpawnpointRandomPoint - vect(0, 100, 0), [], [], false).getHitPosition()
        else:
            tmpPowerupSpawnpointRandomPointW = nearestWalkablePosition(tmpPowerupSpawnpointRandomPoint)
            if distance(tmpPowerupSpawnpointRandomPointW, tmpPowerupSpawnpointRandomPoint) >= 1.5:
                goto lbl_0
        tmpPowerupSpawnpointRandomPointW = raycast(tmpPowerupSpawnpointRandomPointW + vect(0, 2, 0), tmpPowerupSpawnpointRandomPointW - vect(0, 10, 0), null, null, false).getHitPosition() + vect(0, 0.35, 0)
        if distance(tmpPowerupSpawnpointRandomPointW, nearestWalkablePosition(tmpPowerupSpawnpointRandomPointW)) <= 0.1 or disableNwpCheck:
            break
        lbl_0:
        wait(0.064)
    sparkboltPickupPos = tmpPowerupSpawnpointRandomPointW
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.WHITE, sparkboltPickupPos, 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    sparkboltEffects[0] = getLastCreatedEntity()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, sparkboltPickupPos.getPosition() + vect(0, getTotalTimeElapsed() % 0.2 / 3, 0), getTotalTimeElapsed() % 0.3 / 3 + 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    sparkboltEffects[1] = getLastCreatedEntity()


rule "GAME WIN CONDITION":
    @Event eachPlayer
    @Condition gameGoldVictory != 0
    @Condition eventPlayer.statsMoneyBase >= gameGoldVictory
    @Condition gameEnded == false

    #declarePlayerVictory(eventPlayer)
    gameEnded = true
    gameWinner = eventPlayer
    setSlowMotion(33)
    wait(0.5)
    bigMessage(getAllPlayers(), "{0}{1}".format(eventPlayer, [" has won the game", " venceu o jogo"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
    wait(0.8)
    getDeadPlayers(Team.ALL).respawn()
    tmpAllPlayers = getAllPlayers()
    for scoreboardIterator in range(len(tmpAllPlayers)):
        tmpPlayer = tmpAllPlayers[scoreboardIterator]
        tmpPlayer.scoreArray = [tmpPlayer.scoreArray[0], tmpPlayer.scoreArray[0] / max(1, tmpPlayer.scoreArray[1]), tmpPlayer.scoreArray[8], tmpPlayer.scoreArray[2], tmpPlayer.scoreArray[3], tmpPlayer.scoreArray[2] / (getTotalTimeElapsed() - tmpPlayer.scoreArray[4]), tmpPlayer.scoreArray[2] / max(1, tmpPlayer.scoreArray[0]), tmpPlayer.scoreArray[5], tmpPlayer.scoreArray[6], tmpPlayer.scoreArray[7]]
        wait()
    gameScoreTopPlayers = []
    for scoreboardIterator in range(10):
        gameScoreTopPlayers.append(sorted(tmpAllPlayers, lambda player: player.scoreArray[scoreboardIterator]).last())
        wait()
    gameScoreTopPlayersValues = []
    for scoreboardIterator in range(10):
        gameScoreTopPlayersValues.append(gameScoreTopPlayers[scoreboardIterator].scoreArray[scoreboardIterator])
    #display scoreboard
    displayScoreboard = true
    setSlowMotion(100)
    destroyAllInWorldTexts()
    destroyAllHudTexts()
    destroyAllEffects()
    destroyAllIcons()
    destroyAllDummies()
    wait()
    gameScorePositions[0] = raycast(gameEndCamera + Vector.FORWARD * 2, gameEndCamera + Vector.FORWARD * 2 - vect(0, 10, 0), [], [], false).getHitPosition()
    #createDummy(random.choice(getAllHeroes()), Team.ALL, -1, gameScorePositions[0], Vector.BACKWARD)
    #gameWinner = getLastCreatedEntity()
    gameWinner.setFacing(Vector.BACKWARD, Relativity.TO_WORLD)
    gameWinner.teleport(gameScorePositions[0])
    gameWinner.startModifyingVoicelinePitch(random.uniform(0.5, 1.5), false)
    gameWinner.startScalingBarriers(0.1, false)
    gameWinner.startForcingPosition(gameScorePositions[0], false)
    #gameScorePositions[1] = ((gameWinner.getEyePosition() - gameWinner.getPosition()) * 0.75).y
    gameScorePositions[1] = 1.5
    gameEndCamera = gameScorePositions[0] + vect(gameScorePositions[1] * -1, gameScorePositions[1], gameScorePositions[1] * -2)
    gameWinner.setFacing(directionTowards(gameWinner.getEyePosition(), gameEndCamera), Relativity.TO_WORLD)
    gameScorePositions[2] = gameScorePositions[0] + vect(gameScorePositions[1] * -1.5, gameScorePositions[1] * 0.06, gameScorePositions[1] * 0)
    gameScorePositions[3] = gameScorePositions[2] + vect(0, gameScorePositions[1] * 0.075, 0)
    createInWorldText(getAllPlayers(), "{0}\n ".format(["Winner", "Vencedor"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), updateEveryFrame(gameWinner.getEyePosition() + vect(0, gameScorePositions[1] * 0.55, 0)), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n{0}".format(gameWinner), updateEveryFrame(gameWinner.getEyePosition() + vect(0, gameScorePositions[1] * 0.55, 0)), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "{0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                  ".format(iconString(Icon.SKULL), [" Bounty Hunter", " Caçador de recompensas"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n{0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                  ".format(abilityIconString(Hero.CASSIDY, Button.ULTIMATE), [" Assassin", " Assassino"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n{0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                  ".format(iconString(Icon.SAD), [" Victim", " Vítima"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n{0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                  ".format(abilityIconString(Hero.SIGMA, Button.PRIMARY_FIRE), [" Gold Hoarder", " A***ulador de ouro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n{0}{1}\n\n\n\n\n\n\n\n\n\n\n                                                                  ".format(abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE), [" Master Thief", " Ladrão mestre"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n{0}{1}\n\n\n\n\n\n\n\n\n                                                                  ".format(abilityIconString(Hero.TRACER, Button.ABILITY_1), [" Fast Earner", " A***ulador rápido"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n{0}{1}\n\n\n\n\n\n\n                                                                  ".format(iconString(Icon.HEART), [" Friendly Farmer", " A***ulador amigável"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n{0}{1}\n\n\n\n\n                                                                  ".format(abilityIconString(Hero.SIGMA, Button.ABILITY_1), [" Cookie Clicker", " Cookie clicker"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{0}{1}\n\n\n                                                                  ".format(abilityIconString(Hero.BASTION, Button.SECONDARY_FIRE), [" Engineer", " Engenheiro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{0}{1}\n                                                                  ".format(abilityIconString(Hero.SOLDIER, Button.ABILITY_1), [" Traveler", " Nômade"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), "\u2028\n\n\n\n\n\n\n\n\n\n\n\n\n{0} \n\n{1}\n\n{2}".format(gameScoreTopPlayers[0], gameScoreTopPlayers[1], "{0}\n\n{1}\n\n{2}".format(gameScoreTopPlayers[2], gameScoreTopPlayers[3], "{0}\n\n{1}\n\n{2}".format(gameScoreTopPlayers[4], gameScoreTopPlayers[5], "{0}\n\n{1}\n\n{2}".format(gameScoreTopPlayers[6], gameScoreTopPlayers[7], "{0}\n\n{1}\n\n".format(gameScoreTopPlayers[8], gameScoreTopPlayers[9]))))), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[0], [" kills", " abates"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[1], [" K/D", " A/M"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[2], [" gold stolen from", " ouro roubado de"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[3], [" gold earned", " ouro obtido"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[4], [" gold stolen", " ouro roubado"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[5], [" gold/sec", " ouro/seg"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[6], [" gold/kills", " ouro/abates"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[7], [" orbs collected", " orbes coletados"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n\n\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[8], [" upgrades", " melhorias"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  {0}{1}\n \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ".format(gameScoreTopPlayersValues[9], [" bases moved", " bases movidas"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), gameScorePositions[2], 1.9, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    wait(0.1)
    gameWinner.stopForcingPosition()
    wait(0.1)
    gameWinner.communicate(Comms.EMOTE_UP)


rule "game ended - resurrect players":
    @Event eachPlayer
    @Condition displayScoreboard != false
    @Condition eventPlayer.isDead() == true

    eventPlayer.respawn()


rule "game ended and host afk - finish game":
    @Condition displayScoreboard != false

    wait(30)
    declarePlayerVictory(gameWinner)
    wait(3)
    restartMatch()


rule "game ended - disable all buttons and HUDs":
    @Event eachPlayer
    @Condition displayScoreboard != false
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.isAlive() == true

    wait()
    #eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    #eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.disallowButton(Button.INTERACT)
    eventPlayer.disallowButton(Button.JUMP)
    eventPlayer.disallowButton(Button.CROUCH)
    #eventPlayer.disallowButton(Button.MELEE)
    eventPlayer.disallowButton(Button.RELOAD)
    eventPlayer.cancelPrimaryAction()
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setDamageReceived(0)
    #eventPlayer.setStatusEffect(null, Status.FROZEN, 9999)
    #eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
    eventPlayer.setMoveSpeed(0)
    #eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.isInBase = true
    eventPlayer.playerBaseLocation = vect(0, -10000, 0)
    eventPlayer.hasBase = false
    eventPlayer.disableHeroHud()
    eventPlayer.disableMessages()
    eventPlayer.startForcingOutlineFor(getAllPlayers(), false, Color.WHITE)
    eventPlayer.disableNameplatesFor(getAllPlayers())
    eventPlayer.startCamera(gameEndCamera, gameEndCamera + Vector.FORWARD)
    if eventPlayer != gameWinner:
        eventPlayer.startForcingPosition(vect(1000, 1000, 1000), false)
    else:
        eventPlayer.startForcingPosition(gameScorePositions[0], false)
        wait(0.1)
        eventPlayer.stopForcingPosition()


rule "init":
    @Condition isGameInProgress() == true

    setMatchTime(819)
    disableGamemodeCompletion()
    disableAnnouncer()
    disableScoring()
    destroyAllDummies()
    destroyHudText(waitingStartGameHud)
    hudHeader([player for player in getAllPlayers() if not player.hasBase], ["{0} NO BASE BUILT {0}\n \u202fPRESS [{1}] TO BUILD".format(iconString(Icon.WARNING), inputBindingString(Button.INTERACT)), "   {0} Base não construída {0}\nPressione [{1}] para construir".format(iconString(Icon.WARNING), inputBindingString(Button.INTERACT))][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], HudPosition.TOP, -4, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudText([player.stealingFrom for player in getAllPlayers()], ["{0} ENEMY IN YOUR BASE! {0}".format(iconString(Icon.WARNING)), "{0} Inimigo na sua base! {0}".format(iconString(Icon.WARNING))][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], null, "              ", HudPosition.TOP, -2, Color.RED, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)
    #disconnectedPlayers = []
    bountyArrayLocations[11] = null
    bountyArrayEffects[11] = null
    bountyArrayMoney[11] = null
    leaderboard = []
    stealingDistanceMultiplier = 1.5
    stealingDistanceThreshold = 0.75
    lootSpread = 15
    baseUpgradeSphereActualSize = 0.394
    sparkboltPickupPos = null
    gameRulesGoldMinerInitialCost = 30
    if not enableGoldMinerUpgrade:
        gameRulesGoldMinerInitialCost = 100000
    gameRulesMoveBaseInitialCost = 50
    if enableAlwaysFreeBaseMove:
        gameRulesMoveBaseInitialCost = 0
    gameRulesGoldMinerFrequency = 1
    if enableInefficientGoldMiner:
        gameRulesGoldMinerFrequency = 2
    tmpTotalGoldCalc = 100
    totalGoldToWin = 0
    while tmpTotalGoldCalc < gameGoldVictory:
        totalGoldToWin += tmpTotalGoldCalc
        tmpTotalGoldCalc = ceil(tmpTotalGoldCalc * 1.5 / 10) * 10
    totalGoldToWin += gameGoldVictory
    gameHealingHeroes = (([i for i in getAllHeroes() if not i in getSupportHeroes()]).exclude(Hero.ROADHOG)).exclude(Hero.SOLDIER)
    hasGameStarted = true
    wait(1)
    pauseMatchTime()


rule "GAME INIT MAP":
    @Condition isGameInProgress() == true

    #destroyAllHudTexts()
    lootBlockerVolumePos = null
    mapNavMesh = null
    mapInfo = null
    mapRotationVector = directionFromAngles(0, 0)
    lootBlockerVolumeRadius = 30
    if getCurrentMap() == Map.BLACK_FOREST or getCurrentMap() == Map.BLACK_FOREST_WINTER:
        mapInfo = vect(-64.026, 10.008, -63.027)
        gameEndCamera = vect(-21.45, 13.18, 2.03)
    elif getCurrentMap() == Map.BLIZZ_WORLD or getCurrentMap() == Map.BLIZZ_WORLD_WINTER:
        mapNavMesh = vect(-92.816, -1.3, 119.946)
        mapInfo = vect(-93.084, 7, 68.06)
        gameEndCamera = vect(-124.15, 1.2, 107.3)
    elif getCurrentMap() == Map.CASTILLO:
        mapInfo = vect(-60.13, 7.032, 52.027)
        gameEndCamera = vect(-82.63, 43.36, 16.35)
    elif getCurrentMap() == Map.CHATEAU_GUILLARD or getCurrentMap() == Map.CHATEAU_GUILLARD_HALLOWEEN:
        mapInfo = vect(66.17, 13.001, 65.046)
        gameEndCamera = vect(205.74, 1.28, 76.17)
    elif getCurrentMap() == Map.DORADO:
        mapInfo = vect(85.11, 14.007, -67.039)
        mapNavMesh = vect(69.636, 6.939, -13.709)
        mapRotationVector = directionFromAngles(321, 0)
        gameEndCamera = vect(133.25, 57.86, 34.46)
    elif getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER:
        mapInfo = vect(-110.027, 10.003, -56.06)
        gameEndCamera = vect(-5.46, 24.56, -55.57)
    elif getCurrentMap() == Map.EICHENWALDE or getCurrentMap() == Map.EICHENWALDE_HALLOWEEN:
        mapNavMesh = vect(21.479, 4.943, -61.208)
        mapInfo = vect(55.021, 18.004, -77.102)
        mapRotationVector = directionFromAngles(15, 0)
        gameEndCamera = vect(122.3, 9.66, -29.3)
        mapExtension1Spawn = vect(12, 6, -70)
        mapExtension1Origin = vect(-32, -1.75, -14.5)
        mapExtension1Xyz = vect(48, 16.75, 85.75)
        mapExtension1Rotation = -284.5
        if not createWorkshopSettingBool("\z\nMap extensions", "Eichenwalde 2nd point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool("\z\nMap extensions", "Eichenwalde 1st point", false, 1):
            availableMapExtensions.append(1)
    elif getCurrentMap() == Map.HANAMURA or getCurrentMap() == Map.HANAMURA_WINTER:
        #first point: doable but no space, maybe as an extension
        mapNavMesh = vect(41.188, 0.478, 24.839)
        mapInfo = vect(-138.015, -14.005, -65.105)
        mapRotationVector = directionFromAngles(348, 0)
        gameEndCamera = vect(69.88, -2.14, 58.6)
        mapExtension1Spawn = vect(39, 1, 10.3)
        mapExtension1Origin = vect(31, -5, -29.75)
        mapExtension1Xyz = vect(65.5, 14, 38)
        mapExtension1Rotation = -0.5
        if not createWorkshopSettingBool("      \u3000", "Hanamura 1st point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool("      \u3000", "Hanamura pre-choke", false, 1):
            availableMapExtensions.append(1)
    elif getCurrentMap() == Map.HAVANA:
        #both points are doable and good + the secret space
        mapNavMesh = vect(-18.944, 6.062, -80.093)
        mapInfo = vect(44, 8.004, -61.103)
        gameEndCamera = vect(-35.31, 8.03, 64.56)
        mapExtension1Spawn = vect(-11, 6, -80)
        mapExtension1Origin = vect(1, 4, -97.25)
        mapExtension1Xyz = vect(96, 8, 61)
        mapExtension1Rotation = -88.75
        mapExtension2Spawn = vect(140, 6, -46.5)
        mapExtension2Origin = vect(69.5, 4, -84.75)
        mapExtension2Xyz = vect(56, 8, 94.75)
        mapExtension2Rotation = -10
        mapExtension3Spawn = vect(17.6, 20, -7.6)
        mapExtension3Origin = vect(-18.25, 4, -36)
        mapExtension3Xyz = vect(64.75, 13, 70.25)
        mapExtension3Rotation = 0
        if not createWorkshopSettingBool("     \u3000", "Havana 2nd point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool("     \u3000", "Havana 1st point", false, 1):
            availableMapExtensions.append(1)
        if createWorkshopSettingBool("     \u3000", "Havana 3rd point", false, 2):
            availableMapExtensions.append(2)
        if createWorkshopSettingBool("     \u3000", "Havana secret area", false, 3):
            availableMapExtensions.append(3)
    elif getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN:
        #third point doable but meh, first point doable and good
        mapNavMesh = vect(-18.025, 1.777, 14.081)
        mapInfo = vect(-82.041, 6.002, -87.072)
        mapRotationVector = directionFromAngles(16, 0)
        gameEndCamera = vect(-31.01, 7.16, -176.48)
        mapExtension1Spawn = vect(-35, 2, -135)
        mapExtension1Origin = vect(-38.75, 2, -78.5)
        mapExtension1Xyz = vect(57.25, 15.25, 67)
        mapExtension1Rotation = 104
        mapExtension2Spawn = vect(-27, 2, -3)
        mapExtension2Origin = vect(-41.5, 2, -18.75)
        mapExtension2Xyz = vect(70.5, 15.25, 94.25)
        mapExtension2Rotation = -25.75
        if not createWorkshopSettingBool("    \u3000", "Hollywood 2nd point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool("    \u3000", "Hollywood 3rd point", false, 1):
            availableMapExtensions.append(1)
        if createWorkshopSettingBool("    \u3000", "Hollywood 1st point", false, 2):
            availableMapExtensions.append(2)
    elif getCurrentMap() == Map.HORIZON_LUNAR_COLONY:
        mapNavMesh = vect(51.683, 6.129, -34.033)
        mapInfo = vect(-166.055, 11.003, -80.112)
        mapRotationVector = directionFromAngles(48, 0)
        lootBlockerVolumePos = vect(73.442, 17.829, -98.474)
        lootBlockerVolumeRadius = 16
        gameEndCamera = vect(-109, 4.77, -118.15)
    elif getCurrentMap() == Map.ILIOS_LIGHTHOUSE:
        mapInfo = vect(176.245, -12.03, -100.103)
        mapRotationVector = directionFromAngles(23, 0)
        gameEndCamera = vect(315.15, -23.06, 82.19)
    elif getCurrentMap() == Map.ILIOS_RUINS:
        mapInfo = vect(-45.081, 10.057, -219.184)
        gameEndCamera = vect(36.57, 102.09, -130)
    elif getCurrentMap() == Map.ILIOS_WELL:
        mapInfo = vect(-157.179, -10.005, -51.094)
        mapRotationVector = directionFromAngles(315, 0)
        gameEndCamera = vect(-217.03, 1.35, -18.18)
    elif getCurrentMap() == Map.KANEZAKA:
        mapInfo = vect(-102.07, 10.004, -86.056)
        gameEndCamera = vect(-14.67, 68.99, -126.2)
    elif getCurrentMap() == Map.KINGS_ROW or getCurrentMap() == Map.KINGS_ROW_WINTER:
        #first point awesome, 3rd point meh, secret area ok (only for kings row normal)
        #for kings row winter, only 1st point ok
        mapNavMesh = vect(-122.712, -1.072, -1.493)
        mapInfo = vect(-74.12, -14.004, -102.068)
        mapRotationVector = directionFromAngles(350, 0)
        lootBlockerVolumePos = vect(-127.119, 0.434, -57.126)
        gameEndCamera = vect(-33.72, 40.35, -61.41)
        mapExtension1Spawn = vect(-4.64, 0, 11)
        mapExtension1Origin = vect(24, -4, -45.25)
        mapExtension1Xyz = vect(52, 13, 100.25)
        mapExtension1Rotation = -95
        #only for normal version
        mapExtension2Spawn = vect(-59.12, 1, 37.79)
        mapExtension2Origin = vect(-29.5, 4, -7.75)
        mapExtension2Xyz = vect(45.25, 15.75, 73.5)
        mapExtension2Rotation = -101
        if not createWorkshopSettingBool("   \u3000", "King's Row 2nd point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool("   \u3000", "King's Row 1st point", false, 1):
            availableMapExtensions.append(1)
        if createWorkshopSettingBool("   \u3000", "King's Row secret area (not available on winter)", false, 2) and getCurrentMap() == Map.KINGS_ROW:
            availableMapExtensions.append(2)
    elif getCurrentMap() == Map.LIJIANG_CONTROL_CENTER or getCurrentMap() == Map.LIJIANG_CONTROL_CENTER_LNY:
        mapInfo = vect(-123.089, 14.265, 127.335)
        mapRotationVector = directionFromAngles(45, 0)
        gameEndCamera = vect(87.78, 265.71, 363.57)
    elif getCurrentMap() == Map.LIJIANG_GARDEN or getCurrentMap() == Map.LIJIANG_GARDEN_LNY:
        mapInfo = vect(-79.092, 4.094, 187.108)
        gameEndCamera = vect(-1.28, 95.34, 179.78)
    elif getCurrentMap() == Map.LIJIANG_NIGHT_MARKET or getCurrentMap() == Map.LIJIANG_NIGHT_MARKET_LNY:
        mapInfo = vect(-83.084, -8.002, -185.081)
        gameEndCamera = vect(-77.06, 245.24, 369.46)
    elif getCurrentMap() == Map.MALEVENTO:
        mapInfo = vect(-78.033, -18.005, -83.032)
        gameEndCamera = vect(25, 9, 20)
    elif getCurrentMap() == Map.NECROPOLIS:
        mapInfo = vect(-65.048, -18.007, -80.036)
        gameEndCamera = vect(0.92, 12.58, -18.32)
    elif getCurrentMap() == Map.NEPAL_SANCTUM:
        mapInfo = vect(194.041, 6.128, -74.097)
        gameEndCamera = vect(81.96, 129.66, -2.54)
    elif getCurrentMap() == Map.NEPAL_SHRINE:
        mapInfo = vect(-183.073, 13.01, -54.09)
        gameEndCamera = vect(50.13, 130.99, -2.66)
    elif getCurrentMap() == Map.NEPAL_VILLAGE:
        mapInfo = vect(-185.223, -14.102, -90.096)
        gameEndCamera = vect(-63.38, 16, -63.21)
    elif getCurrentMap() == Map.OASIS_CITY_CENTER:
        mapInfo = vect(66.068, 14, 156.281)
        mapRotationVector = directionFromAngles(-315, 0)
        gameEndCamera = vect(168.03, 61.19, 288.45)
    elif getCurrentMap() == Map.OASIS_GARDENS:
        mapInfo = vect(163.047, 11.001, -79.268)
        mapRotationVector = directionFromAngles(45, 0)
        gameEndCamera = vect(142.13, 46.81, -224.55)
    elif getCurrentMap() == Map.OASIS_UNIVERSITY:
        mapInfo = vect(-140.225, 11.008, -64.07)
        gameEndCamera = vect(-197.81, 59.98, 43.73)
    elif getCurrentMap() == Map.PARIS:
        #1st point ok
        mapNavMesh = vect(-46.367, 10.098, -0.162)
        mapInfo = vect(-86.143, 8.008, -82.084)
        mapRotationVector = directionFromAngles(26, 0)
        gameEndCamera = vect(27.85, 12.88, -83.67)
        mapExtension1Spawn = vect(-52, 12, 11.55)
        mapExtension1Origin = vect(31.75, 8, -48.5)
        mapExtension1Xyz = vect(42.5, 14.5, 115)
        mapExtension1Rotation = -137
        if not createWorkshopSettingBool("  \u3000", "Paris 2nd point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool("  \u3000", "Paris 1st point", false, 1):
            availableMapExtensions.append(1)
    elif getCurrentMap() == Map.PETRA:
        mapInfo = vect(-83.044, -15.012, -83.015)
        gameEndCamera = vect(1.02, -8.96, 7.02)
    elif getCurrentMap() == Map.ROUTE66:
        #3rd point ok
        mapInfo = vect(-62.014, 15.004, 57.019)
        gameEndCamera = vect(34.7, 37, 38.62)
        mapRotationVector = directionFromAngles(-212, 0)
        mapExtension1Spawn = vect(-92.5, 7, -23.3)
        mapExtension1Origin = vect(-67.5, 4, 46.25)
        mapExtension1Xyz = vect(51.5, 15, 101.5)
        mapExtension1Rotation = -224
        if not createWorkshopSettingBool(" \u3000", "Route 66 2nd point (default)", true):
            availableMapExtensions.remove(0)
        if createWorkshopSettingBool(" \u3000", "Route 66 3rd point", false, 1):
            availableMapExtensions.append(1)
    elif getCurrentMap() == Map.TEMPLE_OF_ANUBIS:
        mapNavMesh = vect(-4.694, -2.336, -6.513)
        mapInfo = vect(80.016, 10, -130.004)
        mapRotationVector = directionFromAngles(275, 0)
        gameEndCamera = vect(15.08, 16.6, -18.58)
    elif getCurrentMap() == Map.VOLSKAYA:
        mapNavMesh = vect(14.482, -4.352, 44.386)
        mapInfo = vect(-73.094, -8.005, 145.01)
        mapRotationVector = directionFromAngles(335, 0)
        lootBlockerVolumePos = vect(28.034, 27.621, 76.387)
        gameEndCamera = vect(-41, -1.32, -85.31)
    #elif getCurrentMap() == Map.WORKSHOP_EXPANSE or getCurrentMap() == Map.WORKSHOP_EXPANSE_NIGHT:
    #mapInfo = vect(-200.1, 1, -200.1)
    if mapInfo == null:
        return
    if len(availableMapExtensions) == 0:
        availableMapExtensions = [0]
    chosenMapExtension = random.choice(availableMapExtensions)
    if chosenMapExtension == 0:
        #mapXYZ = whole numbers in mapInfo, ignoring signs
        mapXYZ = mapInfo / vect(abs(mapInfo.x), abs(mapInfo.y), abs(mapInfo.z))
        mapXYZ *= vect(floor(abs(mapInfo.x)), floor(abs(mapInfo.y)), floor(abs(mapInfo.z)))
        #mapOrigin = fractional part of mapInfo + signs
        mapOrigin = 1000 * (mapInfo - mapXYZ)
        mapXYZ = vect(abs(mapXYZ.x), abs(mapXYZ.y), abs(mapXYZ.z))
    elif chosenMapExtension == 1:
        mapXYZ = mapExtension1Xyz
        mapOrigin = mapExtension1Origin
        mapRotationVector = directionFromAngles(mapExtension1Rotation, 0)
        mapExtensionSpawn = mapExtension1Spawn
    elif chosenMapExtension == 2:
        mapXYZ = mapExtension2Xyz
        mapOrigin = mapExtension2Origin
        mapRotationVector = directionFromAngles(mapExtension2Rotation, 0)
        mapExtensionSpawn = mapExtension2Spawn
    elif chosenMapExtension == 3:
        mapXYZ = mapExtension3Xyz
        mapOrigin = mapExtension3Origin
        mapRotationVector = directionFromAngles(mapExtension3Rotation, 0)
        mapExtensionSpawn = mapExtension3Spawn
    if getCurrentMap() == Map.HAVANA and chosenMapExtension == 3 or getCurrentMap() == Map.KINGS_ROW and chosenMapExtension == 1 or getCurrentMap() == Map.ROUTE66 and chosenMapExtension == 1:
        disableNwpCheck = true
    mapSize = sqrt(mapXYZ.x ** 2 + mapXYZ.z ** 2) - 20
    wait(1)
    if mapNavMesh != null:
        while distance(nearestWalkablePosition(mapNavMesh), mapNavMesh) <= 2:
            wait(0.25)
    isGameInitialized = true
    destroyHudText(waitingNavmeshHud)
    setMatchTime(62)
    gameEndingScreenPos = vect(0, 0, 0)


rule "skip assembling heroes":
    @Condition isAssemblingHeroes() == true

    if false:
    else:
        setMatchTime(10)


rule "GAME MEDKIT NERF":
    @Event playerReceivedHealing
    @Condition eventWasHealthPack == true

    eventPlayer.setStatusEffect(null, Status.HACKED, 5)
    eventPlayer.setMoveSpeed(75)
    wait(5)
    eventPlayer.setMoveSpeed(100)


rule "init player":
    @Event eachPlayer
    @Condition hasGameStarted != false
    @Condition gameEnded == false

    eventPlayer.hasBase = false
    eventPlayer.isMovingBase = false
    eventPlayer.statsMoneySec = 0
    eventPlayer.statsMoney = 0
    eventPlayer.statsMoneyStorage = 100
    eventPlayer.upgradeCurrentSelection = 2
    eventPlayer.statsUpgradeCost = []
    eventPlayer.statsUpgradeCost[0] = gameRulesGoldMinerInitialCost
    eventPlayer.statsUpgradeCost[1] = 25
    eventPlayer.statsUpgradeCost[2] = 100
    eventPlayer.statsUpgradeCost[3] = gameRulesMoveBaseInitialCost
    eventPlayer.statsUpgradeCost[4] = 0
    eventPlayer.statsUpgradeCost[5] = 30
    eventPlayer.statsUpgradeCost[6] = 80
    eventPlayer.statsUpgradeLevels = [1, 1, 1, 0, 0, 1, 1]
    eventPlayer.statsUpgradeHeroSwitchShadowCost = 75
    eventPlayer.statsMoneyKill = 5
    eventPlayer.statsStealingSpeed = 1
    if false:
    else:
        eventPlayer.statsBaseDelay = 4
    eventPlayer.isStealingActive = false
    eventPlayer.playerBaseLocation = vect(0, -1000, 0)
    eventPlayer.playerObjectInBase = null
    eventPlayer.debugEffectCountArray = []
    eventPlayer.isUpgradeInputOnCooldown = false
    eventPlayer.upgradeOffsetLeft = 0.9
    eventPlayer.upgradeOffsetRight = eventPlayer.upgradeOffsetLeft * -1
    eventPlayer.disableGamemodeHud()
    #eventPlayer.disableScoreboard()
    eventPlayer.scoreArray[4] = getTotalTimeElapsed()


rule "game not started":
    @Condition isWaitingForPlayers() == true

    hudHeader(getAllPlayers(), ["Waiting for players to start ({0}/4)".format(getNumberOfPlayers(Team.ALL)), "Esperando jogadores para iniciar ({0}/4)".format(getNumberOfPlayers(Team.ALL))][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))] if getNumberOfPlayers(Team.ALL) < 4 else ["Starting the game...", "Iniciando jogo..."][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], HudPosition.TOP, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    waitingStartGameHud = getLastCreatedText()


rule "enough players - start game":
    @Condition isWaitingForPlayers() == true
    @Condition getNumberOfPlayers(Team.ALL) >= 4

    startGamemode()


rule "unsupported map":
    @Condition mapInfo == null
    @Condition isGameInProgress() == true

    hudHeader(getAllPlayers(), ["The map {0} IS NOT SUPPORTED!".format(getCurrentMap()), "O mapa {0} não é compatível!".format(getCurrentMap())][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], HudPosition.TOP, 3, Color.RED, HudReeval.VISIBILITY_AND_STRING)


rule "waiting for navmesh to generate":
    @Condition hasGameStarted == false
    @Condition isGameInitialized == false
    @Condition mapInfo != null

    hudHeader(getAllPlayers(), ["Building the navmesh, please wait", "Construindo a navmesh, aguarde"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], HudPosition.TOP, 3, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    waitingNavmeshHud = getLastCreatedText()


rule "init player hud":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.isInitialized == false
    @Condition hasGameStarted != false

    wait(0.25)
    eventPlayer.isInitialized = true
    #gold in base
    hudText(eventPlayer, iconString(Icon.CIRCLE), ["GOLD IN BASE", "Ouro na base"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], "{0}/{1} ({2}".format(eventPlayer.statsMoneyBase, eventPlayer.statsMoneyStorage, "{0})\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{1}".format(["+{0}/sec".format(eventPlayer.statsMoneySec), "+{0}/seg".format(eventPlayer.statsMoneySec)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))] if eventPlayer.statsMoneyBase < eventPlayer.statsMoneyStorage else ["Full!", "Cheio!"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003")), HudPosition.LEFT, 0, Color.ORANGE, Color.ORANGE, Color.WHITE if eventPlayer.statsMoneyBase < eventPlayer.statsMoneyStorage else Color.RED, HudReeval.VISIBILITY_STRING_AND_COLOR)
    #gold on player
    hudText(eventPlayer, iconString(Icon.POISON), ["GOLD ON PLAYER    ", "Ouro no jogador"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], "{0}\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{1}".format(eventPlayer.statsMoney, "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), HudPosition.LEFT, 1, Color.ORANGE, Color.ORANGE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #upgrade header
    createInWorldText(eventPlayer if eventPlayer.showUpgradeText else [], "{0}{1}\n{2}\n\n\n\n".format([["             ", "              "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["             ", "            "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["               ", "                     "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["            ", "        "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["              ", "            "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["            ", "         \u202f\u202f\u202f\u202f    \u202f  \u2009\u202f"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["           ", "\u3000\u3000\u3000\u3000\u3000  "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]][eventPlayer.upgradeCurrentSelection], upgradeIcons[eventPlayer.upgradeCurrentSelection], [["AUTO GOLD MINER", "Gerador de ouro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["KILL GOLD BOUNTY", "Ouro por abate"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["BASE GOLD STORAGE", "Armazenamento da base"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["MOVE YOUR BASE", "Mover base"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["SWITCH YOUR HERO", "Trocar de herói"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["GOLD STEAL SPEED", "Taxa de roubo de ouro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["BASE ENTRY TIME", "Tempo de entrada na base"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]][eventPlayer.upgradeCurrentSelection]), eventPlayer.playerBaseLocation, 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, upgradeColors[eventPlayer.upgradeCurrentSelection])
    #upgrade description
    createInWorldText(eventPlayer if eventPlayer.showUpgradeText else [], ([(["    [LVL {0}]\n\n  Upgrades your gold generation\n    to {1} per second. Can't generate\nwhen there are players in your base\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], eventPlayer.statsMoneySec + 1), "    [NV {0}]\n\n       MELHORA A GERAÇÃO DE OURO\nPARA {1} POR SEGUNDO. NÃO FUNCIONA\n    QUANDO HÁ JOGADORES NA BASE.\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], eventPlayer.statsMoneySec + 1)])[max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], (["     [LVL {0}]\n\n    Increases bounty from {1} to {2}\nAwarded by dealing finishing blow\n  Doesn't affect dropped loot orbs\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], eventPlayer.statsMoneyKill, eventPlayer.statsMoneyKill + 15), "       [NV {0}]\n\nAUMENTA A RECOMPENSA DE {1} PARA {2}\n         \u202fOBTIDO AO EFETUAR UM ABATE\n           NÃO AFETA ORBES DEIXADOS\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], eventPlayer.statsMoneyKill, eventPlayer.statsMoneyKill + 15)])[max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], (["[LVL {0}]\n\nIncreases the maximum amount \n  of gold your base can store.\n  Upgraded storage: {1} gold\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], ceil(eventPlayer.statsMoneyStorage * 1.5)), "[NV {0}]\n\n\u3000\u3000\u3000\u3000 Aumenta o máximo de ouro\n\u3000\u3000\u3000 que a sua base pode armazenar.\u3000\u3000\u3000 \n\u3000\u3000\u3000\u3000 Após melhoria: {1} de ouro\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], ceil(eventPlayer.statsMoneyStorage * 1.5))])[max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["   [NO LVL]\n \n           Packs up your base. \nYou keep your gold & upgrades. \nPrice depends on gold storage.\n ", "\u3000\u3000\u3000\u3000[SEM NV]\n\n\u3000\u3000\u3000\u3000\u202fEmpacota a sua base.\n\u3000 Ouro e melhorias são mantidos.\nO preço depende do armazenamento.\n "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], [" [NO LVL]\n \n     Takes you to hero selection.\n  Bug: If only one hero shows up\nWait 5 seconds until they appear.\n ", "\u3000\u3000   [sem nv]\n\n\u3000\u3000\u3000   Leva à seleção de heróis.\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202fBug: se apenas um herói aparecer\naguarde 5 segundos até o resto surgir.\n "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], (["     [LVL {0}]\n \n    Steal +2 gold/sec from bases.\nSame upgrade price as gold miner.\n  Total {1} + enemy gold miner/sec.\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], (eventPlayer.statsStealingSpeed + 1) * 2), "[NV {0}]\n\n\u3000\u3000\u3000  Roube +2 ouro/seg de bases.\n  \u3000 Mesmo preço do gerador de ouro.\u3000   \n\u3000\u3000   Total {1} + gerador inimigo/seg.\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], (eventPlayer.statsStealingSpeed + 1) * 2)])[max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["  [LVL {0}]\n \n      Reduces the time it takes\nto enter your base by 0.5 sec.\n    The current delay is {1} sec.\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], eventPlayer.statsBaseDelay), "[NV {0}]\n\n\u3000\u3000\u3000\u3000 \u202f \u202f\u202fReduz o tempo necessário\n  \u3000\u3000\u3000para entrar na base por 0,5 seg.\u3000\u3000\u3000  \n\u3000\u3000\u3000\u3000\u3000   O tempo atual é {1} seg.\n ".format(eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection], eventPlayer.statsBaseDelay)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]])[eventPlayer.upgradeCurrentSelection], eventPlayer.playerBaseLocation, 1.1, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #base sphere
    createEffect([player for player in getAllPlayers() if not (player == eventPlayer and player.isInBase)], Effect.SPHERE, powerLevelColors[eventPlayer.statsUpgradeLevels[2]], eventPlayer.playerBaseLocation, 3.5)
    #base ring
    createEffect(eventPlayer if eventPlayer.isInBase else [], Effect.RING, powerLevelColors[eventPlayer.statsUpgradeLevels[2]], eventPlayer.playerBaseLocation, 3.5)
    #upgrade sphere
    createEffect(eventPlayer if eventPlayer.isInBase else [], Effect.SPHERE, upgradeColors[eventPlayer.upgradeCurrentSelection] if eventPlayer.showUpgradeText else Color.WHITE, eventPlayer.playerBaseLocation, 0.4)
    createIcon(eventPlayer if eventPlayer.showUpgradeText else [], updateEveryFrame(normalize(vect(eventPlayer.getFacingDirection().z * -1, 0, eventPlayer.getFacingDirection().x)) * eventPlayer.upgradeOffsetRight + (eventPlayer.playerBaseLocation - vect(0, 0.3, 0))), Icon.ARROW_LEFT, IconReeval.VISIBILITY_AND_POSITION, Color.WHITE, false)
    createIcon(eventPlayer if eventPlayer.showUpgradeText else [], updateEveryFrame(normalize(vect(eventPlayer.getFacingDirection().z * -1, 0, eventPlayer.getFacingDirection().x)) * eventPlayer.upgradeOffsetLeft + (eventPlayer.playerBaseLocation - vect(0, 0.3, 0))), Icon.ARROW_RIGHT, IconReeval.VISIBILITY_AND_POSITION, Color.WHITE, false)
    #stealing sphere
    createEffect([player for player in getAllPlayers() if player.stealingFrom == eventPlayer], Effect.SPHERE, Color.RED, eventPlayer.playerBaseLocation, 0.4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #stealing hud
    createInWorldText([player for player in getAllPlayers() if player.stealingFrom == eventPlayer], ["HOLD {0} TO STEAL {1} GOLD: {2}".format(inputBindingString(Button.INTERACT), iconString(Icon.SKULL), eventPlayer.statsMoneyBase), "Segure {0} para roubar {1} ouro: {2}".format(inputBindingString(Button.INTERACT), iconString(Icon.SKULL), eventPlayer.statsMoneyBase)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], eventPlayer.playerBaseLocation, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.RED, SpecVisibility.NEVER)


rule "update outlines":
    @Event eachPlayer

    while true:
        eventPlayer.startForcingOutlineFor(getAllPlayers(), true, powerLevelColors[eventPlayer.statsUpgradeLevels[2]])
        wait(1)


rule "display scoreboard":
    @Condition hasGameStarted != false

    wait()
    #title + 1st player
    hudText(getAllPlayers(), null, ["            discord.gg/YP544CH | code: 14WON\nScoreboard    -    Base Wars 2.3 12/11/2022", "\u3000\u3000\u3000\u3000\u3000 discord.gg/YP544CH | código: 14WON\n\u3000\u3000\u3000 Placar    -    Guerra de Bases 2.3 12/11/2022"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["FIRST TO {0} GOLD IN BASE WINS!\n".format(gameGoldVictory), "Vença ao obter {0} de ouro na base!\n".format(gameGoldVictory)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], HudPosition.RIGHT, 1, Color.WHITE, Color.ORANGE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    for hudIterator in range(3):
        hudText(getAllPlayers(), null, ["Scoreboard    -    Base Wars 2.3 12/11/2022", "\u3000\u3000\u3000 Placar    -    Guerra de Bases 2.3 12/11/2022"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], " · {0}% {1} {2} ".format(floor(((leaderboard[evalOnce(hudIterator)].statsMoneyBase + leaderboard[evalOnce(hudIterator)].storedMoney) / totalGoldToWin) * 100), heroIcon(leaderboard[evalOnce(hudIterator)].getHero()), leaderboard[evalOnce(hudIterator)]), HudPosition.RIGHT, evalOnce(hudIterator) + 2, null, null, powerLevelColors[leaderboard[evalOnce(hudIterator)].statsUpgradeLevels[2]], HudReeval.VISIBILITY_STRING_AND_COLOR, SpecVisibility.ALWAYS)


rule "update scoreboard":
    @Condition hasGameStarted != false

    while true:
        leaderboard = sorted([player for player in getAllPlayers() if player.statsMoneyBase + player.statsMoneyStorage > 0], lambda i: -1 * (i.statsMoneyBase + i.statsMoneyStorage * 10))
        wait(1)


rule "PLAYER REGEN CONDITION":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true

    eventPlayer.canAutoHeal = false
    if not eventPlayer.getHero() in gameHealingHeroes:
        return
    eventPlayer.canAutoHeal = true


rule "PLAYER REGEN TAKE DAMAGE":
    @Event playerTookDamage
    @Condition eventPlayer.canAutoHeal != false

    eventPlayer.regenStartTime = getTotalTimeElapsed() + 5
    stopHealingOverTime(eventPlayer.regenID)
    eventPlayer.regenID = null


rule "PLAYER REGEN START":
    @Event eachPlayer
    @Condition eventPlayer.canAutoHeal != false
    @Condition eventPlayer.getHealth() != eventPlayer.getMaxHealth()
    @Condition eventPlayer.regenStartTime < getTotalTimeElapsed()
    @Condition eventPlayer.regenStartTime != 0
    @Condition eventPlayer.regenID == null
    @Condition eventPlayer.isInBase == false

    eventPlayer.startHealingOverTime(null, 9999, 33)
    eventPlayer.regenID = getLastHealingOverTimeId()
    wait()
    if ruleCondition:
        loop()


rule "PLAYER REGEN STOP":
    @Event eachPlayer
    @Condition eventPlayer.regenID != null
    @Condition eventPlayer.getHealth() == eventPlayer.getMaxHealth()

    stopHealingOverTime(eventPlayer.regenID)
    eventPlayer.regenID = null


rule "PLAYER SOMBRA CLOAK ON":
    @Event eachPlayer
    @Condition hasGameStarted != false
    @Condition eventPlayer.getHero() == Hero.SOMBRA
    @Condition eventPlayer.isUsingAbility1() == true

    eventPlayer.isCloaked = true


rule "PLAYER SOMBRA CLOAK OFF":
    @Event eachPlayer
    @Condition hasGameStarted != false
    @Condition (eventPlayer.getHero() != Hero.SOMBRA or not eventPlayer.isUsingAbility1()) == true

    eventPlayer.isCloaked = false


rule "BASE BUILD CHECK CONDITION":
    @Event eachPlayer
    @Condition eventPlayer.hasBase == false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.playerBaseLocation.y == -1000
    @Condition eventPlayer.isOnGround() == true
    @Condition hasGameStarted != false
    @Condition eventPlayer.stealingFrom == null

    setBaseLocation()
    wait(0.75)


rule "BASE BUILD":
    @Event eachPlayer
    @Condition eventPlayer.hasBase == false
    @Condition eventPlayer.playerBaseLocation.y != -1000
    @Condition hasGameStarted != false

    eventPlayer.hasBase = true
    #spawnBaseEffect()
    #createIcon(eventPlayer, eventPlayer.playerBaseLocation + vect(0, 2.8, 0), Icon.HALO, IconReeval.POSITION, Color.WHITE, false)
    createInWorldText(getAllPlayers().exclude(eventPlayer), "{0} {1} {2}".format(heroIcon(eventPlayer.getHero()), eventPlayer, eventPlayer.statsMoneyBase), eventPlayer.playerBaseLocation + vect(0, 2, 0), 0.8, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
    createInWorldText(eventPlayer, "{0}{1}".format(heroIcon(eventPlayer.getHero()), [" Your base", " Sua base"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), eventPlayer.playerBaseLocation + vect(0, 2.5, 0), 1, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.NEVER)
    createInWorldText(eventPlayer if eventPlayer.showUpgradeText else [], " \n \n \n \n \n{0}{1}".format(eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection], [" GOLD", " de ouro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), eventPlayer.playerBaseLocation, 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.ORANGE)
    playerBaseBuildEffects()


rule "player enters base":
    @Event eachPlayer
    @Condition hasGameStarted != false
    @Condition eventPlayer.playerObjectInBase == null
    @Condition eventPlayer.hasBase != false
    @Condition distance(eventPlayer.playerBaseLocation, eventPlayer) <= 3.5
    @Condition eventPlayer.hasStatus(Status.ASLEEP) == false
    @Condition eventPlayer.hasStatus(Status.FROZEN) == false
    @Condition eventPlayer.hasStatus(Status.UNKILLABLE) == false
    @Condition eventPlayer.hasStatus(Status.INVINCIBLE) == false
    @Condition eventPlayer.hasStatus(Status.PHASED_OUT) == false
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.isCloaked == false

    eventPlayer.playerObjectInBase = eventPlayer
    stopChasingVariable(eventPlayer.baseProtectionTimer)
    eventPlayer.baseProtectionTimer = eventPlayer.statsBaseDelay
    hudHeader(eventPlayer, ["{0} ENTERING BASE {0} \n           IN {1} SEC".format(iconString(Icon.WARNING), eventPlayer.baseProtectionTimer), "{0} Entrando na base {0} \n              em {1} seg".format(iconString(Icon.WARNING), eventPlayer.baseProtectionTimer)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], HudPosition.TOP, -3, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.hudBaseProtection = getLastCreatedText()
    chaseAtRate(eventPlayer.baseProtectionTimer, 0, 1, ChaseRateReeval.NONE)


rule "BASE ENTER ABORT":
    @Event eachPlayer
    @Condition eventPlayer.playerObjectInBase == eventPlayer
    @Condition eventPlayer.isInBase == false
    @Condition (eventPlayer.isCloaked or eventPlayer.hasStatus(Status.ASLEEP) or eventPlayer.hasStatus(Status.FROZEN) or eventPlayer.hasStatus(Status.UNKILLABLE) or eventPlayer.hasStatus(Status.INVINCIBLE) or eventPlayer.hasStatus(Status.PHASED_OUT) or eventPlayer.isUsingUltimate()) == true

    stopChasingVariable(eventPlayer.baseProtectionTimer)
    destroyHudText(eventPlayer.hudBaseProtection)
    eventPlayer.playerObjectInBase = null


rule "BASE EXIT":
    @Event eachPlayer
    @Condition eventPlayer.playerObjectInBase != null
    @Condition hasGameStarted != false
    @Condition eventPlayer.hasBase != false
    @Condition distance(eventPlayer.playerBaseLocation, eventPlayer) >= 3.5

    eventPlayer.playerObjectInBase = null
    eventPlayer.setDamageDealt(100)
    stopChasingVariable(eventPlayer.baseProtectionTimer)
    destroyHudText(eventPlayer.hudBaseProtection)
    if not eventPlayer.isInBase:
        return
    eventPlayer.isInBase = false
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.stopAllHealingOverTime()
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.MELEE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.allowButton(Button.ULTIMATE)


rule "player finished entering base":
    @Event eachPlayer
    @Condition eventPlayer.playerObjectInBase != null
    @Condition eventPlayer.baseProtectionTimer == 0
    @Condition eventPlayer.isAlive() == true
    @Condition gameEnded == false

    eventPlayer.setDamageDealt(0)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.startHealingOverTime(eventPlayer, 9999, 25)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.MELEE)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.setMoveSpeed(100)
    stopHealingOverTime(eventPlayer.regenID)
    eventPlayer.regenID = null
    stopChasingVariable(eventPlayer.baseProtectionTimer)
    destroyHudText(eventPlayer.hudBaseProtection)
    hudText(eventPlayer, ["         {0} PROTECTED AND INVISIBLE {0}\n\nTo upgrade, look at white center orb".format(iconString(Icon.CHECKMARK)), "{0} PROTEGIDO(A) E INVISÍVEL {0}\n\n  PARA APRIMORAR, OLHE PARA\n      \u202fO ORBE BRANCO CENTRAL".format(iconString(Icon.CHECKMARK))][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["Controls:", "Controles:"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], "{0}\n{1}".format(["{0}{1} : navigate menu\n[{2}]    : buy upgrade".format(inputBindingString(Button.PRIMARY_FIRE), inputBindingString(Button.SECONDARY_FIRE), inputBindingString(Button.INTERACT)), "{0}{1} : navegar pelo menu\n[{2}]    : comprar melhoria".format(inputBindingString(Button.PRIMARY_FIRE), inputBindingString(Button.SECONDARY_FIRE), inputBindingString(Button.INTERACT))][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))], ["[{0}]   : use sparkbolt\n[{1} {2} remaining]".format(inputBindingString(Button.ULTIMATE), eventPlayer.nbSparkbolts, iconString(Icon.BOLT)), "[{0}]   : usar faísca\n[{1} {2} restando]".format(inputBindingString(Button.ULTIMATE), eventPlayer.nbSparkbolts, iconString(Icon.BOLT))][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]), HudPosition.TOP, -3, Color.GREEN, Color.GREEN, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.hudBaseProtection = getLastCreatedText()
    settleBalance()
    #eventPlayer.upgradeRightArrow = getLastCreatedEntity()
    if not eventPlayer.isInBase:
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, powerLevelColors[eventPlayer.statsUpgradeLevels[2]], eventPlayer.getPosition(), 4)
    eventPlayer.isInBase = true


rule "BASE RESPAWN":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.isAlive() == true

    if not eventPlayer.hasBase or eventPlayer.isMovingBase:
        if chosenMapExtension > 0:
            wait(0.1)
            eventPlayer.teleport(mapExtensionSpawn)
            if eventPlayer.getHero() == Hero.TRACER:
                eventPlayer.setAbility2Enabled(false)
                wait(3.1)
                eventPlayer.setAbility2Enabled(true)
        return
    eventPlayer.statsMoney = 0
    destroyHudText(eventPlayer.hudBaseProtection)
    eventPlayer.isInBase = true
    eventPlayer.baseProtectionTimer = 0
    eventPlayer.teleport(eventPlayer.playerBaseLocation)
    eventPlayer.playerObjectInBase = eventPlayer
    eventPlayer.setInvisibility(Invis.ALL)


rule "check if player is in someone else's base":
    @Event eachPlayer
    @Condition hasGameStarted != false
    @Condition enableStealing != false

    #TODO: optimize this **** by not constantly looping if stealingFrom != null
    while true:
        if eventPlayer.isAlive() and eventPlayer.hasSpawned() and not eventPlayer.isCloaked:
            tmpBaseOwners = [player for player in getAllPlayers() if player != eventPlayer and player.hasBase and player.statsMoneyBase != 0 and (not (player.isInBase and not enableOccupiedStealing))]
            for stealingBaseOwnerIterator in range(len(tmpBaseOwners)):
                if distance(eventPlayer.getPosition(), tmpBaseOwners[stealingBaseOwnerIterator].playerBaseLocation) <= 3.5:
                    eventPlayer.stealingFrom = tmpBaseOwners[stealingBaseOwnerIterator]
                    goto lbl_0
        eventPlayer.stealingFrom = null
        lbl_0:
        wait(0.064)


rule "ENEMY BASE STEAL LOOP":
    @Event eachPlayer
    @Condition enableStealing != false
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.hasSpawned() == true
    @Condition eventPlayer.stealingFrom != null
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.stealingOnCooldown == false
    @Condition eventPlayer.isCloaked == false
    @Condition eventPlayer.stealingFrom.statsMoneyBase != 0
    @Condition dotProduct(directionTowards(eventPlayer.getEyePosition(), eventPlayer.stealingFrom.playerBaseLocation), eventPlayer.getFacingDirection()) >= 0.99
    @Condition distance(eventPlayer.getPosition(), eventPlayer.stealingFrom.playerBaseLocation) < 2

    if not eventPlayer.isStealingActive:
        createEffect(eventPlayer, Effect.PICKUP_SOUND, Color.WHITE, eventPlayer, 2000, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.stealingSoundEffect = getLastCreatedEntity()
        eventPlayer.isStealingActive = true
    eventPlayer.tmpMoneyDifference = eventPlayer.stealingFrom.statsMoneyBase
    if eventPlayer.stealingFrom.isInBase:
        eventPlayer.tmpMoneyDifference += eventPlayer.stealingFrom.statsMoney
    eventPlayer.tmpStealingAmount = ceil(eventPlayer.stealingFrom.statsMoneySec / 2) + eventPlayer.statsStealingSpeed
    #Risk bonus (if player is in base)
    if eventPlayer.stealingFrom.isInBase or eventPlayer.stealingFrom.isDead():
        eventPlayer.tmpStealingRiskBonus = ceil(eventPlayer.tmpStealingAmount * 0.5)
        eventPlayer.tmpStealingAmount += eventPlayer.tmpStealingRiskBonus
    else:
        eventPlayer.tmpStealingRiskBonus = 0
    #Distance bonus
    eventPlayer.tmpStealingDistanceBonus = round(eventPlayer.statsStealingSpeed * ((stealingDistanceMultiplier + stealingDistanceThreshold) * (min(1, distance(eventPlayer.playerBaseLocation, eventPlayer.stealingFrom.playerBaseLocation) / mapSize)) - stealingDistanceThreshold))
    if not eventPlayer.hasBase:
        eventPlayer.tmpStealingDistanceBonus = 0
    if eventPlayer.tmpStealingDistanceBonus > 0:
        eventPlayer.tmpStealingAmount += eventPlayer.tmpStealingDistanceBonus
    eventPlayer.tmpStealingAmount min= eventPlayer.tmpMoneyDifference
    if eventPlayer.tmpStealingDistanceBonus > 0:
        if eventPlayer.tmpStealingRiskBonus > 0:
            smallMessage(eventPlayer, ["+{0} GOLD ({1} distance bonus, {2} risk bonus)".format(eventPlayer.tmpStealingAmount, eventPlayer.tmpStealingDistanceBonus, eventPlayer.tmpStealingRiskBonus), "+{0} de ouro ({1} bônus de distância, {2} bônus de risco)".format(eventPlayer.tmpStealingAmount, eventPlayer.tmpStealingDistanceBonus, eventPlayer.tmpStealingRiskBonus)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])
        else:
            smallMessage(eventPlayer, ["+{0} GOLD ({1} distance bonus)".format(eventPlayer.tmpStealingAmount, eventPlayer.tmpStealingDistanceBonus), "+{0} de ouro ({1} bônus de distância)".format(eventPlayer.tmpStealingAmount, eventPlayer.tmpStealingDistanceBonus)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])
    else:
        if eventPlayer.tmpStealingRiskBonus > 0:
            smallMessage(eventPlayer, ["+{0} GOLD ({1} risk bonus)".format(eventPlayer.tmpStealingAmount, eventPlayer.tmpStealingRiskBonus), "+{0} de ouro ({1} bônus de risco)".format(eventPlayer.tmpStealingAmount, eventPlayer.tmpStealingRiskBonus)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])
        else:
            smallMessage(eventPlayer, "+{0}{1}".format(eventPlayer.tmpStealingAmount, [" GOLD", " de ouro"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
    eventPlayer.statsMoney += eventPlayer.tmpStealingAmount
    eventPlayer.scoreArray[2] += eventPlayer.tmpStealingAmount
    eventPlayer.scoreArray[3] += eventPlayer.tmpStealingAmount
    eventPlayer.stealingFrom.scoreArray[8] += eventPlayer.tmpStealingAmount
    eventPlayer.stealingFrom.statsMoneyBase -= eventPlayer.tmpStealingAmount
    #If the player is in the base, take from his money instead of from his base
    if eventPlayer.stealingFrom.isInBase and eventPlayer.stealingFrom.statsMoneyStorage != eventPlayer.stealingFrom.statsMoneyBase and eventPlayer.stealingFrom.statsMoney > 0:
        eventPlayer.stealingFrom.tmpMoneyDifference = min(eventPlayer.stealingFrom.statsMoneyStorage - eventPlayer.stealingFrom.statsMoneyBase, eventPlayer.stealingFrom.statsMoney)
        eventPlayer.stealingFrom.statsMoney -= eventPlayer.stealingFrom.tmpMoneyDifference
        eventPlayer.stealingFrom.statsMoneyBase += eventPlayer.stealingFrom.tmpMoneyDifference
    playEffect(eventPlayer, DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.stealingFrom.playerBaseLocation, 5)
    playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer.stealingFrom.playerBaseLocation, 2)
    wait(0.5)
    if ruleCondition:
        loop()
    eventPlayer.stealingOnCooldown = true
    destroyEffect(eventPlayer.stealingSoundEffect)
    eventPlayer.isStealingActive = false
    wait(1)
    eventPlayer.stealingOnCooldown = false


rule "upgrade gold miner":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 0
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.scoreArray[6]++
        eventPlayer.statsMoneyBase -= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.BLUE, eventPlayer.playerBaseLocation, 4)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] = ceil(eventPlayer.statsUpgradeCost * 1.5 / 10) * 10
        eventPlayer.statsUpgradeCost[5] = eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        eventPlayer.statsMoneySec++
        eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection]++
        smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.ARROW_UP), [" +1 GOLD/SEC ", " +1 ouro/seg "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        checkUpgradeAvailability()
        settleBalance()
    else:
        baseUpgradeFail()


rule "gold miner loop":
    @Event eachPlayer
    @Condition hasGameStarted != false
    @Condition eventPlayer.statsMoneySec != 0

    while true:
        if eventPlayer.hasBase and eventPlayer.isAlive() and not eventPlayer in [player.stealingFrom for player in getAllPlayers()] and not eventPlayer.isMovingBase and not eventPlayer.isInBase:
            if eventPlayer.statsMoneyBase < eventPlayer.statsMoneyStorage:
                eventPlayer.scoreArray[2] += eventPlayer.tmpMoneyDifference
                eventPlayer.statsMoneyBase += eventPlayer.statsMoneySec
                eventPlayer.statsMoneyBase min= eventPlayer.statsMoneyStorage
        wait(gameRulesGoldMinerFrequency)


rule "upgrade kill bounty":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 1
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.scoreArray[6]++
        eventPlayer.statsMoneyBase -= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer.playerBaseLocation, 4)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] = round(eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] * 1.5 / 10) * 10
        eventPlayer.statsMoneyKill += 15
        eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection]++
        smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.ARROW_UP), [" +15 KILL BOUNTY ", " +15 recompensa de abate "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        checkUpgradeAvailability()
        settleBalance()
    else:
        baseUpgradeFail()


rule "player kill":
    @Event playerDied
    @Condition hasGameStarted != false

    eventPlayer.scoreArray[1]++
    if attacker != victim:
        smallMessage(attacker, "+ {0}{1}".format(attacker.statsMoneyKill, [" GOLD (kill)", " ouro (abate)"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        attacker.statsMoney += attacker.statsMoneyKill
        attacker.scoreArray[2] += attacker.statsMoneyKill
        attacker.scoreArray[0]++
    if victim.statsMoney <= 0:
        return
    if bountyArrayEffects[victim.getSlot()] != null:
        destroyEffect(bountyArrayEffects[victim.getSlot()])
        bountyArrayEffects[victim.getSlot()] = null
        bountyArrayNum--
    bountyArrayLocations[victim.getSlot()] = raycast(victim.getEyePosition(), victim.getEyePosition() - vect(0, 15, 0), null, null, false).getHitPosition() + vect(0, 0.35, 0)
    bountyArrayMoney[victim.getSlot()] = victim.statsMoney
    if victim.statsMoney <= 25:
        createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, bountyArrayLocations[victim.getSlot()], 1, EffectReeval.NONE)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, victim.getPosition() - vect(0, 1, 0), 0.5)
    elif victim.statsMoney > 25 and victim.statsMoney <= 250:
        createEffect(getAllPlayers(), Effect.ORB, Color.TURQUOISE, bountyArrayLocations[victim.getSlot()], 1, EffectReeval.NONE)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.TURQUOISE, victim.getPosition() - vect(0, 1, 0), 0.5)
    elif victim.statsMoney > 250 and victim.statsMoney <= 750:
        createEffect(getAllPlayers(), Effect.ORB, Color.BLUE, bountyArrayLocations[victim.getSlot()], 1, EffectReeval.NONE)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.BLUE, victim.getPosition() - vect(0, 1, 0), 0.5)
    else:
        createEffect(getAllPlayers(), Effect.ORB, Color.PURPLE, bountyArrayLocations[victim.getSlot()], 1, EffectReeval.NONE)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, victim.getPosition() - vect(0, 1, 0), 0.5)
    bountyArrayEffects[victim.getSlot()] = getLastCreatedEntity()
    victim.statsMoney = 0
    bountyArrayNum++


rule "upgrade storage capacity":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 2
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.scoreArray[6]++
        eventPlayer.storedMoney += eventPlayer.statsMoneyStorage
        eventPlayer.statsMoneyBase = 0
        playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.YELLOW, eventPlayer.playerBaseLocation, 4)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.statsMoneyStorage = min(ceil(eventPlayer.statsMoneyStorage * 1.5 / 10) * 10, gameGoldVictory)
        eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] = eventPlayer.statsMoneyStorage
        if enableAlwaysFreeHeroSwitch:
            goto lbl_0
        if eventPlayer.statsUpgradeHeroSwitchUsed or eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection] >= 4:
            eventPlayer.statsUpgradeHeroSwitchUsed = true
            if eventPlayer.statsUpgradeCost[4] != 0:
                goto lbl_1
            eventPlayer.statsUpgradeCost[4] = eventPlayer.statsUpgradeHeroSwitchShadowCost
            lbl_1:
            eventPlayer.statsUpgradeCost[4] += ceil(eventPlayer.statsMoneyStorage / 5)
        else:
            eventPlayer.statsUpgradeHeroSwitchShadowCost += ceil(eventPlayer.statsMoneyStorage / 5)
        lbl_0:
        if enableAlwaysFreeBaseMove:
            goto lbl_2
        eventPlayer.statsUpgradeCost[3] = max(ceil(eventPlayer.statsMoneyStorage / 5), 50)
        lbl_2:
        eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection]++
        smallMessage(eventPlayer, "{0} +{1}{2}{0}".format(iconString(Icon.ARROW_UP), ceil(eventPlayer.statsMoneyStorage / 2), [" GOLD CAPACITY ", " capacidade de ouro "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        checkUpgradeAvailability()
        settleBalance()
    else:
        baseUpgradeFail()


rule "UPGRADE BUY MOVE BASE":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 3
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.scoreArray[7]++
        eventPlayer.statsMoneyBase -= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.GREEN, eventPlayer.playerBaseLocation, 2)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.playerBaseLocation = vect(0, -10000, 0)
        smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.TRASHCAN), [" PACKED UP BASE ", " Base empacotada "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        wait(1)
        eventPlayer.isMovingBase = true
    else:
        baseUpgradeFail()


rule "UPGRADE END MOVE BASE":
    @Event eachPlayer
    @Condition eventPlayer.isMovingBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.hasBase != false
    @Condition eventPlayer.isOnGround() == true
    @Condition eventPlayer.stealingFrom == null

    setBaseLocation()
    if eventPlayer.playerBaseLocation.y > -10000:
        eventPlayer.isMovingBase = false
        playerBaseBuildEffects()
    wait(0.75)


rule "UPGRADE BUY HERO":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 4
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false
    @Condition eventPlayer.isChangingHero == false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.isChangingHero = true
        eventPlayer.statsMoneyBase -= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        if enableAlwaysFreeHeroSwitch:
            goto lbl_0
        if eventPlayer.statsUpgradeHeroSwitchUsed:
            goto lbl_1
        eventPlayer.statsUpgradeCost[4] = eventPlayer.statsUpgradeHeroSwitchShadowCost
        lbl_1:
        eventPlayer.statsUpgradeHeroSwitchUsed = true
        lbl_0:
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.oldHeroHealth = eventPlayer.getNormalizedHealth() * 100
        eventPlayer.setFacing(vect(0, 1, 0), Relativity.TO_PLAYER)
        eventPlayer.teleport(vect(0, 10000, 0))
        eventPlayer.setGravity(0)
        wait(0.25)
        eventPlayer.setAllowedHeroes(getAllHeroes().exclude(eventPlayer.getHero()))
        settleBalance()
        wait(0.25)
        eventPlayer.resetHeroAvailability()
    else:
        baseUpgradeFail()


rule "UPGRADE BUY HERO TELEPORT":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true

    if not eventPlayer.isInitialized or not eventPlayer.hasBase:
        return
    eventPlayer.teleport(eventPlayer.playerBaseLocation)
    eventPlayer.isInBase = true
    eventPlayer.playerObjectInBase = eventPlayer
    eventPlayer.baseProtectionTimer = 0
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setGravity(100)
    eventPlayer.setStatusEffect(null, Status.FROZEN, 1)
    eventPlayer.setMaxHealth(eventPlayer.oldHeroHealth)
    wait()
    eventPlayer.setMaxHealth(100)
    eventPlayer.isChangingHero = false


rule "UPGRADE BUY STEAL SPEED":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 5
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.scoreArray[6]++
        eventPlayer.statsMoneyBase -= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.playerBaseLocation, 4)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] = ceil(eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] * 1.5 / 10) * 10
        if not enableGoldMinerUpgrade:
            goto lbl_0
        eventPlayer.statsUpgradeCost[0] = eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        lbl_0:
        eventPlayer.statsStealingSpeed++
        eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection]++
        smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.ARROW_UP), [" +2 GOLD STEAL/SEC  ", " +2 ouro roubado/seg "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        checkUpgradeAvailability()
        settleBalance()
    else:
        baseUpgradeFail()


rule "UPGRADE BUY DELAY":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.upgradeCurrentSelection == 6
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.hasBase != false

    if eventPlayer.statsMoneyBase >= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]:
        eventPlayer.scoreArray[6]++
        eventPlayer.statsMoneyBase -= eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection]
        playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION, Color.SKY_BLUE, eventPlayer.playerBaseLocation, 4)
        playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.statsBaseDelay -= 0.5
        if eventPlayer.statsBaseDelay <= 0.5:
            eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] += 10000
        else:
            eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] *= 2
        eventPlayer.statsUpgradeLevels[eventPlayer.upgradeCurrentSelection]++
        smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.ARROW_UP), [" -0.5 SEC DELAY ", " -0,5 seg de intervalo "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        checkUpgradeAvailability()
        settleBalance()
    else:
        baseUpgradeFail()


rule "upgrade - use sparkbolt":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    @Condition eventPlayer.nbSparkbolts != 0
    @Condition eventPlayer.isSparkboltOnCooldown == false

    eventPlayer.isSparkboltOnCooldown = true
    eventPlayer.tmpBaseSparkboltTarget = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 10, getAllPlayers(), eventPlayer, true).getPlayerHit()
    if entityExists(eventPlayer.tmpBaseSparkboltTarget):
        if distance(eventPlayer.playerBaseLocation, eventPlayer.tmpBaseSparkboltTarget.getPosition()) < 8:
            eventPlayer.nbSparkbolts--
            smallMessage(eventPlayer, "-1 {0}".format(iconString(Icon.BOLT)))
            eventPlayer.tmpBaseSparkboltTarget.setStatusEffect(eventPlayer, Status.HACKED, 2.5)
            eventPlayer.tmpBaseSparkboltTarget.setStatusEffect(eventPlayer, Status.STUNNED, 0.5)
            damage(eventPlayer.tmpBaseSparkboltTarget, eventPlayer.tmpBaseSparkboltTarget, 100)
            createBeam(getAllPlayers(), Beam.BAD, eventPlayer.playerBaseLocation + vect(0, 3.5, 0), eventPlayer.tmpBaseSparkboltTarget.getEyePosition(), Color.SKY_BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.sparkboltEffect = getLastCreatedEntity()
            playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.playerBaseLocation, 200)
            playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.SKY_BLUE, eventPlayer.playerBaseLocation + vect(0, 3.5, 0), 1)
            playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.SKY_BLUE, eventPlayer.tmpBaseSparkboltTarget.getEyePosition(), 1)
            wait(0.64)
            destroyEffect(eventPlayer.sparkboltEffect)
        else:
            smallMessage(eventPlayer, ["TOO FAR AWAY", "Muito longe"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])
    else:
        smallMessage(eventPlayer, ["AIM AT ENEMY", "Mire no inimigo"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])
    wait(0.5)
    eventPlayer.isSparkboltOnCooldown = false


rule "UPGRADE SELECT LEFT":
    @Event eachPlayer
    @Condition eventPlayer.isUpgradeInputOnCooldown == false
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition eventPlayer.isInBase != false

    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 20)
    eventPlayer.isUpgradeInputOnCooldown = true
    eventPlayer.tmpUpgradeCurrentSelection = eventPlayer.upgradeCurrentSelection - 1
    while true:
        if eventPlayer.tmpUpgradeCurrentSelection < 0:
            eventPlayer.tmpUpgradeCurrentSelection = len(eventPlayer.statsUpgradeCost) - 1
        if eventPlayer.statsUpgradeCost[eventPlayer.tmpUpgradeCurrentSelection] <= gameGoldVictory:
            break
        eventPlayer.tmpUpgradeCurrentSelection--
    eventPlayer.upgradeCurrentSelection = eventPlayer.tmpUpgradeCurrentSelection
    eventPlayer.upgradeOffsetRight = -1
    wait(0.25)
    eventPlayer.upgradeOffsetRight = -0.9
    wait(0.25)
    eventPlayer.isUpgradeInputOnCooldown = false


rule "UPGRADE SELECT RIGHT":
    @Event eachPlayer
    @Condition eventPlayer.isUpgradeInputOnCooldown == false
    @Condition eventPlayer.showUpgradeText != null
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition eventPlayer.isInBase != false

    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 20)
    eventPlayer.isUpgradeInputOnCooldown = true
    eventPlayer.tmpUpgradeCurrentSelection = (eventPlayer.upgradeCurrentSelection + 1) % len(eventPlayer.statsUpgradeCost)
    while true:
        if eventPlayer.statsUpgradeCost[eventPlayer.tmpUpgradeCurrentSelection] <= gameGoldVictory:
            break
        eventPlayer.tmpUpgradeCurrentSelection = (eventPlayer.tmpUpgradeCurrentSelection + 1) % len(eventPlayer.statsUpgradeCost)
    eventPlayer.upgradeCurrentSelection = eventPlayer.tmpUpgradeCurrentSelection
    eventPlayer.upgradeOffsetLeft = 1
    wait(0.25)
    eventPlayer.upgradeOffsetLeft = 0.9
    wait(0.25)
    eventPlayer.isUpgradeInputOnCooldown = false


rule "show upgrade menu":
    @Event eachPlayer
    @Condition eventPlayer.isInBase != false
    @Condition eventPlayer.showUpgradeText == null
    #@Condition dotProduct(directionTowards(eventPlayer.getEyePosition(), eventPlayer.playerBaseLocation), eventPlayer.getFacingDirection()) >= 0.99
    @Condition distance(vect(0, 0, 0), eventPlayer.playerBaseLocation - (eventPlayer.getEyePosition() + ((abs(dotProduct(eventPlayer.playerBaseLocation - eventPlayer.getEyePosition(), eventPlayer.getFacingDirection()))) * eventPlayer.getFacingDirection()))) <= baseUpgradeSphereActualSize

    eventPlayer.isUpgradeInputOnCooldown = true
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.showUpgradeText = true
    wait(0.25)
    if eventPlayer.showUpgradeText != null:
        eventPlayer.isUpgradeInputOnCooldown = false
    if ruleCondition:
        loop()


rule "hide upgrade menu":
    @Event eachPlayer
    @Condition eventPlayer.showUpgradeText != false
    @Condition distance(vect(0, 0, 0), eventPlayer.playerBaseLocation - (eventPlayer.getEyePosition() + ((abs(dotProduct(eventPlayer.playerBaseLocation - eventPlayer.getEyePosition(), eventPlayer.getFacingDirection()))) * eventPlayer.getFacingDirection()))) > baseUpgradeSphereActualSize

    eventPlayer.showUpgradeText = false


def settleBalance():
    @Name "SUB SETTLE BALANCE"

    if eventPlayer.statsMoneyStorage != eventPlayer.statsMoneyBase and eventPlayer.statsMoney > 0:
        eventPlayer.tmpMoneyDifference = min(eventPlayer.statsMoneyStorage - eventPlayer.statsMoneyBase, eventPlayer.statsMoney)
        eventPlayer.statsMoney -= eventPlayer.tmpMoneyDifference
        eventPlayer.statsMoneyBase += eventPlayer.tmpMoneyDifference
        smallMessage(eventPlayer, ["STORED {0} GOLD IN BASE".format(eventPlayer.tmpMoneyDifference), "{0} de ouro armazenado".format(eventPlayer.tmpMoneyDifference)][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])


def setBaseLocation():
    @Name "place player base if location is good"

    if distance(eventPlayer.getPosition(), getAllPlayers()[eventPlayer.playerBaseProximityIterator].playerBaseLocation) < 14:
        smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.STOP), [" ENEMY BASE TOO CLOSE ", " Base inimiga muito próxima "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
        eventPlayer.playerBaseProximityIterator = 0
        return
    eventPlayer.playerBaseProximityIterator++
    if eventPlayer.playerBaseProximityIterator < getNumberOfPlayers(Team.ALL):
        loop()
    eventPlayer.playerBaseProximityIterator = 0
    if distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getPosition() + ((directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition() + vect(2, 0, 0))) * 40), [], [], false).getHitPosition(), eventPlayer.getPosition() + vect(2, 0, 0)) > 0.6:
        goto lbl_0
    if distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getPosition() + ((directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition() + vect(-2, 0, 0))) * 40), [], [], false).getHitPosition(), eventPlayer.getPosition() + vect(-2, 0, 0)) > 0.6:
        goto lbl_1
    if distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getPosition() + ((directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition() + vect(0, 0, 2))) * 40), [], [], false).getHitPosition(), eventPlayer.getPosition() + vect(0, 0, 2)) > 0.6:
        goto lbl_2
    if distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getPosition() + ((directionTowards(eventPlayer.getEyePosition(), eventPlayer.getPosition() + vect(0, 0, -2))) * 40), [], [], false).getHitPosition(), eventPlayer.getPosition() + vect(0, 0, -2)) > 0.6:
        goto lbl_3
    if eventPlayer.hasStatus(Status.INVINCIBLE):
        goto lbl_4
    if distance(eventPlayer.getPosition(), nearestWalkablePosition(eventPlayer.getPosition())) > 8 and not disableNwpCheck:
        goto lbl_5
    #prevent placing base on cars
    if getCurrentMap() == Map.KANEZAKA and eventPlayer.getPosition().y > 13 and eventPlayer.getPosition().z > 24:
        goto lbl_6
    if getCurrentMap() == Map.OASIS_CITY_CENTER:
        if dotProduct(vectorTowards(vect(186.86, 0.85, 180.78), eventPlayer.getPosition()), directionFromAngles(horizontalAngleOfDirection(vect(-0.784, 0, 0.621)) + 90, 0)) < 0:
            goto lbl_7
        if dotProduct(vectorTowards(vect(102.41, 0.85, 258.16), eventPlayer.getPosition()), directionFromAngles(horizontalAngleOfDirection(vect(-0.634, 0, 0.773)) + 90, 0)) < 0:
            goto lbl_8
    eventPlayer.playerBaseLocation = eventPlayer.getPosition()
    return
    lbl_0:
    lbl_1:
    lbl_2:
    lbl_3:
    lbl_4:
    lbl_5:
    smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.STOP), [" BAD BASE LOCATION ", " Local de base inválido "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
    return
    lbl_6:
    lbl_7:
    lbl_8:
    smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.STOP), [" BAD BASE LOCATION (too close to cars) ", " Local de base inválido (muito perto dos carros) "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))
    return


def playerBaseBuildEffects():
    @Name "SUB BASE BUILD EFFECTS"

    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.YELLOW, eventPlayer, 10000)
    playEffect(eventPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer.getPosition() + eventPlayer.getFacingDirection(), 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.WHITE, eventPlayer.playerBaseLocation + vect(0, 0.5, 0), 7.5)


def baseUpgradeFail():
    @Name "SUB UPGRADE FAIL"

    playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 20)
    smallMessage(eventPlayer, "{0}{1}{0}".format(iconString(Icon.NO), [" NOT ENOUGH GOLD IN BASE ", " Ouro da base insuficiente "][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]))


def checkUpgradeAvailability():
    @Name "SUB SKIP TO AVAILABLE UPGRADE AFTER PURCHASE"

    if eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] > gameGoldVictory:
        eventPlayer.isUpgradeInputOnCooldown = true
        while eventPlayer.statsUpgradeCost[eventPlayer.upgradeCurrentSelection] > gameGoldVictory:
            if eventPlayer.upgradeCurrentSelection < len(eventPlayer.statsUpgradeCost) - 1:
                goto lbl_0
            eventPlayer.upgradeCurrentSelection = 0
            goto lbl_1
            lbl_0:
            eventPlayer.upgradeCurrentSelection++
            lbl_1:
        wait(0.25)
        eventPlayer.isUpgradeInputOnCooldown = false


rule "anti crash":
    @Condition antiCrashActivated == false
    @Condition getServerLoad() > 230

    wait(1, Wait.ABORT_WHEN_FALSE)
    smallMessage(getAllPlayers(), ["Anti-crash system activated", "Sistema anti-travamento ativado"][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))])
    setSlowMotion(10)
    antiCrashActivated = true


rule "disable anti crash":
    @Condition antiCrashActivated != false
    @Condition getServerLoad() < 210

    setSlowMotion(100)
    antiCrashActivated = false


rule "failsafe":
    if true:
        hudText(getAllPlayers(), "Warning: obfuscation is disabled!", "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003{0}".format("\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"), null, HudPosition.LEFT, -9999, Color.ORANGE, null, null, HudReeval.VISIBILITY_AND_STRING)
