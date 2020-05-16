#!mainFile "meipocalypse.opy"

@Rule "tp to shop"
@Event eachPlayer
@Team 1
if gameStatus == GAME_IN_PROGRESS and not eventPlayer.isInShop and eventPlayer.isCommunicatingEmote():
    if eventPlayer.shopTimer < 60:
        smallMessage(eventPlayer, "Shop on cooldown: {} seconds left".format(60-eventPlayer.shopTimer))
    elif len([player for player in getPlayers(Team.1) if not player.isInShop]) <= 1:
        smallMessage(eventPlayer, "Cannot go to shop when you are the only human fighting")
    else:
        eventPlayer.teleport(shopSpawn)
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setUltEnabled(false)
        eventPlayer.isInShop = true
        eventPlayer.setInvisibility(Invis.ENEMIES)
        eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.1)


@Rule "exit shop"
@Event eachPlayer
@Team 1
if eventPlayer.isInShop and not eventPlayer.isInSpawnRoom():
    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.isInShop = false
    eventPlayer.shopTimer = 0


@Rule "shop timer"
@Event eachPlayer
@Team 1
chase(eventPlayer.shopTimer, 9999999, rate=1, ChaseReeval.NONE)


@Rule "buy"
@Event eachPlayer
@Team 1
if eventPlayer.isHoldingButton(Button.INTERACT) and not eventPlayer.isCrouching() and eventPlayer.buyLoopIndex == 0 and not eventPlayer.isOob:
    do:
        if distance(eventPlayer.getPosition(), unlockLocations[eventPlayer.buyLoopIndex]) < 1.3:
            goto break
        eventPlayer.buyLoopIndex++
        wait(0.016)
    while eventPlayer.buyLoopIndex < len(unlockLocations)
    goto end
    break:
    if playersMoney[eventPlayer.getSlot()] < costs[eventPlayer.buyLoopIndex]:
        smallMessage(eventPlayer, "Not enough money")
        goto end
    

    if eventPlayer.buyLoopIndex < len(getAllHeroes()):
        if getAllHeroes()[eventPlayer.buyLoopIndex] in playersUnlockedHeroes[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already bought this hero")
            goto end
        playersUnlockedHeroes[eventPlayer.getSlot()].append(getAllHeroes()[eventPlayer.buyLoopIndex])
        eventPlayer.startForcingHero(getAllHeroes()[eventPlayer.buyLoopIndex])

    elif eventPlayer.buyLoopIndex == ZONE_UNLOCK_INDEX:
        bigMessage(getAllPlayers(), "{} unlocked next zone".format(eventPlayer))
        currentZone++
        generateNewZone = true

    elif eventPlayer.buyLoopIndex == BARRICADE_UNLOCK_INDEX:
        if playersUnlockedBarricade[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked barricade")
        playersUnlockedBarricade[eventPlayer.getSlot()] = true
        
    elif eventPlayer.buyLoopIndex == ABILITY1_UNLOCK_INDEX:
        if playersUnlockedAbility1[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked ability 1")
        playersUnlockedAbility1[eventPlayer.getSlot()] = true

    elif eventPlayer.buyLoopIndex == ABILITY2_UNLOCK_INDEX:
        if playersUnlockedAbility2[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked ability 2")
        playersUnlockedAbility2[eventPlayer.getSlot()] = true

    elif eventPlayer.buyLoopIndex == ULTIMATE_UNLOCK_INDEX:
        if playersUnlockedUltimate[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked ultimate")
        playersUnlockedUltimate[eventPlayer.getSlot()] = true
        
    elif eventPlayer.buyLoopIndex == FAST_FIRE_UNLOCK_INDEX:
        if playersUnlockedFastFire[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked fast fire")

    elif eventPlayer.buyLoopIndex == SECONDARY_FIRE_UNLOCK_INDEX:
        if playersUnlockedSecondaryFire[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked secondary fire")
        playersUnlockedSecondaryFire[eventPlayer.getSlot()] = true

    elif eventPlayer.buyLoopIndex == MORE_DMG_INDEX:
        if playersAdditionalDmg[eventPlayer.getSlot()] >= MAX_DMG:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+20% damage")
        playersAdditionalDmg[eventPlayer.getSlot()] += 20
        
    elif eventPlayer.buyLoopIndex == MORE_HEALING_INDEX:
        if playersAdditionalHealing[eventPlayer.getSlot()] >= MAX_HEALING:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+20% healing")
        playersAdditionalHealing[eventPlayer.getSlot()] += 20

    elif eventPlayer.buyLoopIndex == MORE_PROJECTILE_SPEED_INDEX:
        if playersAdditionalProjectileSpeed[eventPlayer.getSlot()] >= MAX_PROJECTILE_SPEED:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+100% projectile speed")
        playersAdditionalProjectileSpeed[eventPlayer.getSlot()] += 20
        
    elif eventPlayer.buyLoopIndex == MORE_REGEN_INDEX:
        if playersAdditionalRegen[eventPlayer.getSlot()] >= MAX_REGEN:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+1 hp/s")
        playersAdditionalRegen[eventPlayer.getSlot()]++

    elif eventPlayer.buyLoopIndex == MORE_BARRICADE_HEALTH_INDEX:
        if playersBarricadeHealth[eventPlayer.getSlot()] >= MAX_BARRICADE_HEALTH:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+200 barricade hp")
        playersBarricadeHealth[eventPlayer.getSlot()] += 200

    
    playersMoney[eventPlayer.getSlot()] -= costs[eventPlayer.buyLoopIndex]
    end:
    eventPlayer.buyLoopIndex = 0

