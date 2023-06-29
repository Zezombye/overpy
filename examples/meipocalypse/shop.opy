#!mainFile "meipocalypse.opy"

#Additional things you can buy
#!define ZONE_UNLOCK_INDEX 31
#!define ABILITY1_UNLOCK_INDEX 32
#!define ABILITY2_UNLOCK_INDEX 33
#!define ULTIMATE_UNLOCK_INDEX 34
#!define SECONDARY_FIRE_UNLOCK_INDEX 35
#!define FAST_FIRE_UNLOCK_INDEX 36
#!define MORE_DMG_INDEX 37
#!define MORE_HEALING_INDEX 38
#!define MORE_REGEN_INDEX 39
#!define MORE_PROJECTILE_SPEED_INDEX 40
#!define BARRICADE_UNLOCK_INDEX 41
#!define MORE_BARRICADE_HEALTH_INDEX 42

#!define MAX_DMG 200
#!define MAX_HEALING 200
#!define MAX_REGEN 10
#!define MAX_PROJECTILE_SPEED 500

#!define createShopText(text, index) createInWorldText(getAllPlayers(), text.format(costs[index]), unlockLocations[index]+vect(0,1,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_AND_STRING, Color.GREEN, SpecVisibility.ALWAYS)

enum ShopUnlock:
    ABILITY1_UNLOCK,
    ABILITY2_UNLOCK,
    ULTIMATE_UNLOCK,
    SECONDARY_FIRE_UNLOCK,
    FAST_FIRE_UNLOCK,
    MORE_DMG,
    MORE_HEALING,
    MORE_REGEN,
    MORE_PROJECTILE_SPEED,
    BARRICADE_UNLOCK,
    MORE_BARRICADE_HEALTH,

/*Skill tree unlock locations
start: vect(-35.36, 17.78, -93.88)

1st level, left to right:

vect(-37.60, 18.65, -88.51)
vect(-39.05, 17.78, -91.34)
vect(-39.06, 17.78, -93.83)
vect(-39.03, 17.78, -96.22)
vect(-39.08, 17.78, -98.88)

*/

globalvar shopUnlockLocations = []
globalvar shopItemCosts = []
globalvar shopItemTexts = []

globalvar unlockLocations
globalvar costs
globalvar shopSpawn = vect(-42.51, 17.78, -93.87)
globalvar shopZBarrier

#playervar unlockedWeapon
playervar unlockedPrimaryFire = DEBUG_ALL_ABILITIES
playervar unlockedSecondaryFire = DEBUG_ALL_ABILITIES
playervar unlockedAbility1 = DEBUG_ALL_ABILITIES
playervar unlockedAbility2 = DEBUG_ALL_ABILITIES
playervar unlockedUltimate = DEBUG_ALL_ABILITIES
playervar unlockedBarricade
playervar unlockedFastFire
playervar money

playervar dmgDealt = 100
playervar healingDealt = 100
playervar projectileSpeed = 100
playervar regen = 0

rule "init shop":

    shopUnlockLocations[ShopUnlock.ABILITY1_UNLOCK] = vect(-39, 17.78, -98.82)
    shopUnlockLocations[ShopUnlock.ABILITY2_UNLOCK] = vect(-49.10, 17.78, -98.96)
    shopUnlockLocations[ShopUnlock.ULTIMATE_UNLOCK] = vect(-49.07, 17.78, -89.15)
    shopUnlockLocations[ShopUnlock.SECONDARY_FIRE_UNLOCK] = vect(-37.65, 18.65, -88.57)
    shopUnlockLocations[ShopUnlock.FAST_FIRE_UNLOCK] = vect(-72.76, 25.14, -93.90)
    shopUnlockLocations[ShopUnlock.MORE_DMG] = vect(-62.32, 21.55, -89.96)
    shopUnlockLocations[ShopUnlock.MORE_HEALING] = vect(-62.32, 21.55, -98.04)
    shopUnlockLocations[ShopUnlock.MORE_REGEN] = vect(-65.41, 21.55, -96.72)
    shopUnlockLocations[ShopUnlock.MORE_PROJECTILE_SPEED] = vect(-65.41, 21.55, -91.12)
    shopUnlockLocations[ShopUnlock.BARRICADE_UNLOCK] = vect(-26, 21.69, -93.90)
    shopUnlockLocations[ShopUnlock.MORE_BARRICADE_HEALTH] = vect(-26, 21.63, -99.16)

    shopItemCosts[ShopUnlock.ABILITY1_UNLOCK] = 3000
    shopItemCosts[ShopUnlock.ABILITY2_UNLOCK] = 1500
    shopItemCosts[ShopUnlock.ULTIMATE_UNLOCK] = 1500
    shopItemCosts[ShopUnlock.SECONDARY_FIRE_UNLOCK] = 1000
    shopItemCosts[ShopUnlock.FAST_FIRE_UNLOCK] = 15000
    shopItemCosts[ShopUnlock.MORE_DMG] = 3000
    shopItemCosts[ShopUnlock.MORE_HEALING] = 1000
    shopItemCosts[ShopUnlock.MORE_REGEN] = 2000
    shopItemCosts[ShopUnlock.MORE_PROJECTILE_SPEED] = 750
    shopItemCosts[ShopUnlock.BARRICADE_UNLOCK] = 3000
    shopItemCosts[ShopUnlock.MORE_BARRICADE_HEALTH] = 500

    shopItemTexts[ShopUnlock.ABILITY1_UNLOCK] = "Unlock ultimate: $"
    shopItemTexts[ShopUnlock.ABILITY2_UNLOCK] = "Unlock ability 1: $"
    shopItemTexts[ShopUnlock.ULTIMATE_UNLOCK] = "Unlock ability 2: $"
    shopItemTexts[ShopUnlock.SECONDARY_FIRE_UNLOCK] = "Unlock secondary fire: $"
    shopItemTexts[ShopUnlock.FAST_FIRE_UNLOCK] = "Unlock fast fire: $"
    shopItemTexts[ShopUnlock.MORE_DMG] = "Unlock barricade: $"
    shopItemTexts[ShopUnlock.MORE_HEALING] = "+20% damage: $"
    shopItemTexts[ShopUnlock.MORE_REGEN] = "+20% healing: $"
    shopItemTexts[ShopUnlock.MORE_PROJECTILE_SPEED] = "+1 hp/s: $"
    shopItemTexts[ShopUnlock.BARRICADE_UNLOCK] = "+100% projectile speed: $"
    shopItemTexts[ShopUnlock.MORE_BARRICADE_HEALTH] = "+200 barricade hp: $"

    for i in range(len(shopUnlockLocations)):
        createInWorldText(getAllPlayers() if gameStatus == GameStatus.BETWEEN_WAVES else [], "{}{}".format(shopItemTexts[evalOnce(i)], shopItemCosts[evalOnce(i)]), shopUnlockLocations[evalOnce(i)]+vect(0,1,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_AND_STRING, Color.GREEN, SpecVisibility.ALWAYS)
        createEffect(getAllPlayers() if gameStatus == GameStatus.BETWEEN_WAVES else [], Effect.RING, Color.GREEN, shopUnlockLocations[evalOnce(i)], 1.5, EffectReeval.VISIBILITY)

rule "tp to shop":
	@Event eachPlayer
	@Team 1
    @Condition eventPlayer.hasSpawned()
    @Condition gameStatus == GameStatus.BETWEEN_WAVES
    wait()
    eventPlayer.teleport(shopSpawn)
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setUltEnabled(false)
    eventPlayer.setInvisibility(Invis.ENEMIES)
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.1)


rule "exit shop":
	@Event eachPlayer
	@Team 1
    @Condition gameStatus == GameStatus.BETWEEN_WAVES
    @Condition not updateEveryTick(eventPlayer.isInSpawnRoom())
    do:
        eventPlayer.teleport(shopSpawn)
        wait()
    while RULE_CONDITION


rule "buy":
	@Event eachPlayer
    @Team 1
    @Condition gameStatus == GameStatus.BETWEEN_WAVES
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    @Condition eventPlayer.buyLoopIndex == 0

    for eventPlayer.buyLoopIndex in range(len(shopUnlockLocations)):
        if distance(eventPlayer.getPosition(), shopUnlockLocations[eventPlayer.buyLoopIndex]) < 1.3:
            goto found

    goto end
    found:
    if eventPlayer.money < costs[eventPlayer.buyLoopIndex]:
        smallMessage(eventPlayer, "Not enough money")
        goto end
    
/*
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
*/

/*
    if eventPlayer.buyLoopIndex == ShopUnlock.BARRICADE_UNLOCK:
        if playersUnlockedBarricade[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked barricade")
        playersUnlockedBarricade[eventPlayer.getSlot()] = true
        
    elif eventPlayer.buyLoopIndex == ShopUnlock.ABILITY1_UNLOCK:
        if playersUnlockedAbility1[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked ability 1")
        playersUnlockedAbility1[eventPlayer.getSlot()] = true

    elif eventPlayer.buyLoopIndex == ShopUnlock.ABILITY2_UNLOCK:
        if playersUnlockedAbility2[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked ability 2")
        playersUnlockedAbility2[eventPlayer.getSlot()] = true

    elif eventPlayer.buyLoopIndex == ShopUnlock.ULTIMATE_UNLOCK:
        if playersUnlockedUltimate[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked ultimate")
        playersUnlockedUltimate[eventPlayer.getSlot()] = true
        
    elif eventPlayer.buyLoopIndex == ShopUnlock.FAST_FIRE_UNLOCK:
        if playersUnlockedFastFire[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked fast fire")

    elif eventPlayer.buyLoopIndex == ShopUnlock.SECONDARY_FIRE_UNLOCK:
        if playersUnlockedSecondaryFire[eventPlayer.getSlot()]:
            smallMessage(eventPlayer, "Already unlocked")
            goto end
        smallMessage(eventPlayer, "Unlocked secondary fire")
        playersUnlockedSecondaryFire[eventPlayer.getSlot()] = true

    elif eventPlayer.buyLoopIndex == ShopUnlock.MORE_DMG:
        if playersAdditionalDmg[eventPlayer.getSlot()] >= MAX_DMG:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+20% damage")
        playersAdditionalDmg[eventPlayer.getSlot()] += 20
        
    elif eventPlayer.buyLoopIndex == ShopUnlock.MORE_HEALING:
        if playersAdditionalHealing[eventPlayer.getSlot()] >= MAX_HEALING:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+20% healing")
        playersAdditionalHealing[eventPlayer.getSlot()] += 20

    elif eventPlayer.buyLoopIndex == ShopUnlock.MORE_PROJECTILE_SPEED:
        if playersAdditionalProjectileSpeed[eventPlayer.getSlot()] >= MAX_PROJECTILE_SPEED:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+100% projectile speed")
        playersAdditionalProjectileSpeed[eventPlayer.getSlot()] += 20
        
    elif eventPlayer.buyLoopIndex == ShopUnlock.MORE_REGEN:
        if playersAdditionalRegen[eventPlayer.getSlot()] >= MAX_REGEN:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+1 hp/s")
        playersAdditionalRegen[eventPlayer.getSlot()]++

    elif eventPlayer.buyLoopIndex == ShopUnlock.MORE_BARRICADE_HEALTH:
        if playersBarricadeHealth[eventPlayer.getSlot()] >= MAX_BARRICADE_HEALTH:
            smallMessage(eventPlayer, "Maxed out")
            goto end
        smallMessage(eventPlayer, "+200 barricade hp")
        playersBarricadeHealth[eventPlayer.getSlot()] += 200
*/
    
    eventPlayer.money -= costs[eventPlayer.buyLoopIndex]
    end:
    eventPlayer.buyLoopIndex = 0
    wait(0.1) #prevent crash due to interact spam

