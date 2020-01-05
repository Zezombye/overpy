
#!define DEBUG true

#!declareGlobal meicopter 0
#!declareGlobal meicopterTurrets 1
#!declareGlobal currentMeiType 2
#!declareGlobal gameStatus 3
#!declareGlobal rotation 4
#!declareGlobal currentZone 5
#!declareGlobal playerSpawns 6
#!declareGlobal currentMap 7
#!declareGlobal zoneZWalls 8
#!declareGlobal mapXLimits 9
#!declareGlobal generateNewZone 10
#!declareGlobal zWallDrawIndex 11
#!declareGlobal mapYLimits 12
#!declareGlobal holdingRoom 13
#!declareGlobal meiSpawns 14
#!declareGlobal spawnInterval 15
#!declareGlobal nbMaxMeis 16
#!declareGlobal nbMeisFighting 17
#!declareGlobal barricade1 18
#!declareGlobal barricade1hp 19
#!declareGlobal barricade2 20
#!declareGlobal barricade2hp 21
#!declareGlobal barricade3 22
#!declareGlobal barricade3hp 23
#!declareGlobal barricade4 24
#!declareGlobal barricade4hp 25
#!declareGlobal barricade5 26
#!declareGlobal barricade5hp 27
#!declareGlobal barricade6 28
#!declareGlobal barricade6hp 29
#!declareGlobal cryoChance 30
#!declareGlobal zonesUnlockLocation 31
#!declareGlobal zonesUnlockMoney 32
#!declareGlobal score 33
#!declareGlobal generateNewWave 34
#!declareGlobal currentWave 35
#!declareGlobal nbRemainingMeis 36
#!declareGlobal barricades 37
#!declareGlobal barricadesHp 38
#!declareGlobal playersMoney 39
#!declareGlobal playersUnlockedHeroes 40
#!declareGlobal playersUnlockedSecondaryFire 41
#!declareGlobal playersUnlockedAbility1 42
#!declareGlobal playersUnlockedAbility2 43
#!declareGlobal playersUnlockedUltimate 44
#!declareGlobal playersUnlockedBarricade 45
#!declareGlobal playersUnlockedFastFire 46
#!declareGlobal unlockLocations 47
#!declareGlobal costs 48
#!declareGlobal playersAdditionalDmg 49
#!declareGlobal playersAdditionalHealing 50
#!declareGlobal playersAdditionalProjectileSpeed 51
#!declareGlobal playersAdditionalRegen 52
#!declareGlobal playersBarricadeHealth 53
#!declareGlobal shopSpawn 54
#!declareGlobal shopZBarrier 55

#!declarePlayer isOob 0
#!declarePlayer meiType 1
#!declarePlayer icon 2
#!declarePlayer effect 3
#!declarePlayer noCrouchSpam 4
#!declarePlayer isFighting 5
#!declarePlayer blades 6
#!declarePlayer randomVar 7
#!declarePlayer isAvailable 8
#!declarePlayer isDeflecting 9
#!declarePlayer hasUnlockedBarricade 10
#!declarePlayer buyLoopIndex 11
#!declarePlayer isInShop 12
#!declarePlayer isDown 13
#!declarePlayer shopTimer 14
#!declarePlayer secondWindRezTimer 15
#!declarePlayer downTimer 16
#!declarePlayer nbRez 17
#!declarePlayer isRezzing 18
#!declarePlayer progressHudText 19
#!declarePlayer ffylInWorldText 20
#!declarePlayer maxDownTimer 21
#!declarePlayer rezTarget 22
#!declarePlayer rezTimer 23
#!declarePlayer shieldHealth 24
#!declarePlayer shieldHud 25
#!declarePlayer progressBarInt 26

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

#Mei types

#!define MEI_NO_TYPE 0
#!define MEI_GENERIC 1
#!define MEI_TANK 2
#!define MEI_HEALER 3
#!define MEI_SPEEDY 4
#!define MEI_SNIPER 5
#!define MEI_ULT 6
#!define MEI_DEFLECT 7
#!define MEI_JUMPING 8
#!define MEI_HACKING 9
#!define MEI_MEICOPTER 10
#!define MEI_MEICOPTER_TURRET 11
#!define MEI_SPEEDBOSS 12

#!define MEI_HACK_RADIUS 7.5
#!define MEI_BASE_SPEED 100
#!define MEI_BASE_DMG 100
#!define MEI_BASE_HEALTH 100

#Round status

#!define GAME_NOT_STARTED 0
#!define GAME_IN_PROGRESS 1

#!define BARRICADE_HEALTH 200
#!define BARRICADE_COST 150


#!define MAX_DMG 200
#!define MAX_HEALING 200
#!define MAX_REGEN 10
#!define MAX_PROJECTILE_SPEED 500
#!define MAX_BARRICADE_HEALTH 600

#!define REZ_DURATION 4

#!define ROTATION_SPEED 29
#!define BLADE_LENGTH 2.5
#!define heliBlade(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, start, end, Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

#!define generateWalls(map, walls) __script__("generateWalls.js")
#!define generateBarricadeRules() __script__("generateBarricadeRules.js")
#!define generateZoneVariables(zoneData) __script__("generateZoneVariables.js")
#!define generateMoneyRules() __script__("generateMoneyRules.js")
#!define generateHeroUnlockLocations() __script__("generateHeroUnlockLocations.js")
#!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if player.isAvailable][0]
#!define createShopText(text, index) createInWorldText(getAllPlayers(), text.format(costs[index]), unlockLocations[index]+vect(0,1,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_AND_STRING, Color.GREEN, SpecVisibility.ALWAYS)
#!define createFfylHud(text) hudHeader(eventPlayer, text, Position.TOP, 9999, Color.RED, HudReeval.STRING, SpecVisibility.DEFAULT)
#!define createRezHud(text) hudHeader(eventPlayer, text, Position.TOP, 9999, Color.GREEN, HudReeval.STRING, SpecVisibility.DEFAULT)

@Rule "init"
@Event global
barricade1 = vect(0,-1000,0)
barricade2 = vect(0,-1000,0)
barricade3 = vect(0,-1000,0)
barricade4 = vect(0,-1000,0)
barricade5 = vect(0,-1000,0)
barricade6 = vect(0,-1000,0)
barricades = [barricade1, barricade2, barricade3, barricade4, barricade5, barricade6]
barricadesHp = [barricade1hp, barricade2hp, barricade3hp, barricade4hp, barricade5hp, barricade6hp]
createInWorldText(getAllPlayers(), "{}/{}".format(barricade1hp, playersBarricadeHealth[0]), barricade1, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade2hp, playersBarricadeHealth[1]), barricade2, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade3hp, playersBarricadeHealth[2]), barricade3, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade4hp, playersBarricadeHealth[3]), barricade4, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade5hp, playersBarricadeHealth[4]), barricade5, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
createInWorldText(getAllPlayers(), "{}/{}".format(barricade6hp, playersBarricadeHealth[5]), barricade6, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)

createInWorldText(getAllPlayers(), "Unlock next zone: ${}".format(zonesUnlockMoney[currentZone]), zonesUnlockLocation[currentZone]+vect(0,1,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA, SpecVisibility.ALWAYS)
#createInWorldText(getAllPlayers(), "(Ctrl+F)".format(score), zonesUnlockLocation[currentZone]-vect(0,0.5,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA, SpecVisibility.ALWAYS)

hudText(getAllPlayers(), "{} meis remaining".format(nbRemainingMeis), "Wave {}".format(currentWave), "{} meis fighting".format(nbMeisFighting), Position.RIGHT, 0, Color.BLUE, Color.AQUA, Color.AQUA, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
hudHeader(getAllPlayers(), "Score: {}".format(score), Position.LEFT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

unlockLocations = [
    vect(0, -1000, 0), #0. Reaper   
    vect(-25.06, 17, -20.44), #1. Tracer   
    vect(-23.64, 22, 74.91), #2. Mercy    
    vect(0, -1000, 0), #3. Hanzo    
    vect(0, -1000, 0), #4. Torbjorn 
    vect(-24, 21, -80.09), #5. Reinhardt
    vect(0, -1000, 0), #6. Pharah   
    vect(0, -1000, 0), #7. Winston  
    vect(-71.68, 11.14, -47.91), #8. Widowmaker
    vect(0, -1000, 0), #9. Bastion  
    vect(0, -1000, 0), #10. Symmetra 
    vect(0, -1000, 0), #11. Zenyatta 
    vect(0, -1000, 0), #12. Genji    
    vect(0, -1000, 0), #13. Roadhog  
    vect(0, -1000, 0), #14. McCree   
    vect(0, -1000, 0), #15. Junkrat  
    vect(0, -1000, 0), #16. Zarya    
    vect(-73.27, 19.53, 0), #17. Soldier  
    vect(-23.87, 16, 39.98), #18. Lucio    
    vect(0, -1000, 0), #19. Dva      
    vect(0, -1000, 0), #20. Mei      
    vect(-73.29, 12.06, 35.53), #21. Sombra   
    vect(0, -1000, 0), #22. Doomfist 
    vect(0, -1000, 0), #23. Ana #default hero
    vect(-77.56, 15.10, -56.13), #24. Orisa    
    vect(-18.64, 13, 0), #25. Brigitte 
    vect(0, -1000, 0), #26. Moira    
    vect(0, -1000, 0), #27. Hammond  
    vect(-57.07, 19, -49.05), #28. Ashe     
    vect(0, -1000, 0), #29. Baptiste 
    vect(0, -1000, 0), #30. Sigma   
]

costs = [
    0, #0. Reaper   
    3500, #1. Tracer   
    1000, #2. Mercy    
    0, #3. Hanzo    
    0, #4. Torbjorn 
    7000, #5. Reinhardt
    0, #6. Pharah   
    0, #7. Winston  
    6000, #8. Widowmaker
    0, #9. Bastion  
    0, #10. Symmetra 
    0, #11. Zenyatta 
    0, #12. Genji    
    0, #13. Roadhog  
    0, #14. McCree   
    0, #15. Junkrat  
    0, #16. Zarya    
    4000, #17. Soldier  
    1500, #18. Lucio    
    0, #19. Dva      
    0, #20. Mei      
    3000, #21. Sombra   
    0, #22. Doomfist 
    0, #23. Ana      
    5000, #24. Orisa    
    3000, #25. Brigitte 
    0, #26. Moira    
    0, #27. Hammond  
    6000, #28. Ashe     
    0, #29. Baptiste 
    0, #30. Sigma    
]
generateHeroUnlockLocations()

#if spawn is map 0
unlockLocations[ULTIMATE_UNLOCK_INDEX] = vect(-39, 17.78, -98.82)
unlockLocations[ABILITY1_UNLOCK_INDEX] = vect(-49.10, 17.78, -98.96)
unlockLocations[ABILITY2_UNLOCK_INDEX] = vect(-49.07, 17.78, -89.15)
unlockLocations[SECONDARY_FIRE_UNLOCK_INDEX] = vect(-37.65, 18.65, -88.57)
unlockLocations[FAST_FIRE_UNLOCK_INDEX] = vect(-72.76, 25.14, -93.90)
unlockLocations[MORE_DMG_INDEX] = vect(-62.32, 21.55, -89.96)
unlockLocations[MORE_HEALING_INDEX] = vect(-62.32, 21.55, -98.04)
unlockLocations[MORE_REGEN_INDEX] = vect(-65.41, 21.55, -96.72)
unlockLocations[MORE_PROJECTILE_SPEED_INDEX] = vect(-65.41, 21.55, -91.12)
unlockLocations[BARRICADE_UNLOCK_INDEX] = vect(-26, 21.69, -93.90)
unlockLocations[MORE_BARRICADE_HEALTH_INDEX] = vect(-26, 21.63, -99.16)

costs[ULTIMATE_UNLOCK_INDEX] = 3000
costs[ABILITY1_UNLOCK_INDEX] = 1500
costs[ABILITY2_UNLOCK_INDEX] = 1500
costs[SECONDARY_FIRE_UNLOCK_INDEX] = 1000
costs[FAST_FIRE_UNLOCK_INDEX] = 15000
costs[MORE_DMG_INDEX] = 3000
costs[MORE_HEALING_INDEX] = 1000
costs[MORE_REGEN_INDEX] = 2000
costs[MORE_PROJECTILE_SPEED_INDEX] = 750
costs[BARRICADE_UNLOCK_INDEX] = 3000
costs[MORE_BARRICADE_HEALTH_INDEX] = 500

createShopText("Unlock ultimate: ${}", ULTIMATE_UNLOCK_INDEX)
createShopText("Unlock ability 1: ${}", ABILITY1_UNLOCK_INDEX)
createShopText("Unlock ability 2: ${}", ABILITY2_UNLOCK_INDEX)
createShopText("Unlock secondary fire: ${}", SECONDARY_FIRE_UNLOCK_INDEX)
createShopText("Unlock fast fire: ${}", FAST_FIRE_UNLOCK_INDEX)
createShopText("Unlock barricade: ${}", BARRICADE_UNLOCK_INDEX)
createShopText("+20% damage: ${}", MORE_DMG_INDEX)
createShopText("+20% healing: ${}", MORE_HEALING_INDEX)
createShopText("+1 hp/s: ${}", MORE_REGEN_INDEX)
createShopText("+100% projectile speed: ${}", MORE_PROJECTILE_SPEED_INDEX)
createShopText("+200 barricade hp: ${}", MORE_BARRICADE_HEALTH_INDEX)


@Rule "init players"
@Event eachPlayer
@Team 1
hudText(eventPlayer, "Money: ${}".format(playersMoney[eventPlayer.getSlot()]), null, "Emote to go to shop", Position.LEFT, 0, Color.SKY_BLUE, Color.SKY_BLUE, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
hudSubtext(eventPlayer, "Damage: {}%".format(playersAdditionalDmg[eventPlayer.getSlot()]), Position.LEFT, 10, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
hudSubtext(eventPlayer, "Healing: {}%".format(playersAdditionalHealing[eventPlayer.getSlot()]), Position.LEFT, 10, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
hudSubtext(eventPlayer, "Regen: {} hp/s".format(playersAdditionalRegen[eventPlayer.getSlot()]), Position.LEFT, 10, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
hudSubtext(eventPlayer, "Projectile speed: {}%".format(playersAdditionalProjectileSpeed[eventPlayer.getSlot()]), Position.LEFT, 10, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)
chase(eventPlayer.secondWindRezTimer, 999999, rate=1, ChaseReeval.NONE)
chase(eventPlayer.shieldHealth, -999999, rate=eventPlayer.getMaxHealth()/5, ChaseReeval.DESTINATION_AND_RATE)

@Rule "game not started"
@Event global
if gameStatus == GAME_NOT_STARTED:
    score = 0
    nbRemainingMeis = 0
    playersMoney = [99999,99999,99999,99999,99999,99999]
    #playersMoney = [0,0,0,0,0,0]
    playersUnlockedHeroes = [Hero.ANA,Hero.ANA,Hero.ANA,Hero.ANA,Hero.ANA,Hero.ANA]
    playersUnlockedAbility1 = [false,false,false,false,false,false]
    playersUnlockedAbility2 = [false,false,false,false,false,false]
    playersUnlockedSecondaryFire = [false,false,false,false,false,false]
    playersUnlockedUltimate = [false,false,false,false,false,false]
    playersUnlockedBarricade = [false,false,false,false,false,false]
    playersUnlockedFastFire = [false,false,false,false,false,false]
    playersBarricadeHealth = [BARRICADE_HEALTH,BARRICADE_HEALTH,BARRICADE_HEALTH,BARRICADE_HEALTH,BARRICADE_HEALTH,BARRICADE_HEALTH]
    playersAdditionalDmg = [100,100,100,100,100,100]
    playersAdditionalHealing = [100,100,100,100,100,100]
    playersAdditionalProjectileSpeed = [100,100,100,100,100,100]
    playersAdditionalRegen = [0,0,0,0,0,0]
    for player in getPlayers(Team.1):
        player.resetHeroAvailability()
        player.setInvisibility(Invis.NONE)
        player.setPrimaryFireEnabled(true)
        player.setSecondaryFireEnabled(true)
        player.setAbility1Enabled(true)
        player.setAbility2Enabled(true)
        player.setUltEnabled(true)
        player.stopAllHoT()
        player.setDamageDealt(100)
        player.setDamageReceived(100)
        player.setProjectileSpeed(100)
        player.clearStatusEffect(Status.UNKILLABLE)
        player.clearStatusEffect(Status.PHASED_OUT)
        player.nbRez = 0
        player.respawn()
        player.setRespawnTime(5)
        player.shieldHealth = 0

    wait(10)
    gameStatus = GAME_IN_PROGRESS

@Rule "new game"
@Event global
if gameStatus == GAME_IN_PROGRESS:
    currentMap = 0
    currentZone = 0
    currentWave = 0
    cryoChance = -10*5
    spawnInterval = 5
    nbMaxMeis = 12
    generateNewZone = true
    bigMessage(getAllPlayers(), "Game started")

@Rule "new game (init players)"
@Event eachPlayer
@Team 1
if not DEBUG and gameStatus == GAME_IN_PROGRESS:
    eventPlayer.setAllowedHeroes(playersUnlockedHeroes[eventPlayer.getSlot()])

@Rule "new wave"
@Event global
if nbRemainingMeis == 0 and gameStatus == GAME_IN_PROGRESS:
    generateNewWave = true

"""
@Rule "make sure the right spawn is selected"
@Event global
if hostPlayer.hasSpawned():
    wait(1)
    if (hostPlayer.getPosition().y < 0 or hostPlayer.getPosition().y > 40):
        hudHeader(getAllPlayers(), "Bad spawn, restart the game", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
"""

@Rule "tp player to current zone spawn"
@Event eachPlayer
@Team 1
if eventPlayer.hasSpawned() and eventPlayer.isAlive() and not eventPlayer.isInShop and gameStatus == GAME_IN_PROGRESS:
    wait(0.1)
    eventPlayer.teleport(playerSpawns[currentZone])
    eventPlayer.setFacing(Vector.BACKWARD, Relativity.TO_WORLD)
    #eventPlayer.startForcingHero(eventPlayer.getCurrentHero())
    eventPlayer.stopAllHoT()
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setAbility1Enabled(playersUnlockedAbility1[eventPlayer.getSlot()])
    eventPlayer.setAbility2Enabled(playersUnlockedAbility2[eventPlayer.getSlot()])
    eventPlayer.setUltEnabled(playersUnlockedUltimate[eventPlayer.getSlot()])
    eventPlayer.setSecondaryFireEnabled(playersUnlockedSecondaryFire[eventPlayer.getSlot()])
    eventPlayer.setDamageDealt(playersAdditionalDmg[eventPlayer.getSlot()])
    eventPlayer.setHealingDealt(playersAdditionalHealing[eventPlayer.getSlot()])
    eventPlayer.setProjectileSpeed(playersAdditionalProjectileSpeed[eventPlayer.getSlot()])
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
    eventPlayer.setRespawnTime(5)
    eventPlayer.shieldHealth = 0
    wait(0.1)
    eventPlayer.startHoT(null, 9999, playersAdditionalRegen[eventPlayer.getSlot()])


@Rule "map change"
@Event global
if currentMap == 0:
    holdingRoom = vect(-159.27, -96, 83.78)
else:
    holdingRoom = vect(-42.42,17.78, 93.67)

@Rule "mei first spawn"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned() and gameStatus == GAME_IN_PROGRESS:
    wait(0.1)
    kill(eventPlayer, null)

@Rule "mei tp to holding room"
@Event eachPlayer
@Team 2
if eventPlayer.hasSpawned() and eventPlayer.isAlive() and gameStatus == GAME_IN_PROGRESS:
    wait(0.1)
    eventPlayer.teleport(holdingRoom)

@Rule "reset mei type on death"
@Event playerDied
@Team 2
if gameStatus == GAME_IN_PROGRESS:
    if victim.isFighting:
        nbRemainingMeis--
    wait(1)
    victim.respawn()
    wait(0.1)
    victim.teleport(holdingRoom)
    wait(0.2)
    #victim.setStatusEffect(null, Status.ROOTED, 9999)
    victim.meiType = MEI_NO_TYPE
    if victim.isFighting:
        nbMeisFighting--
    victim.isFighting = false
    victim.isAvailable = true


@Rule "mei fights"
@Event eachPlayer
@Team 2
if eventPlayer.isFighting:
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.teleport(random.choice(meiSpawns[currentZone]))
    eventPlayer.isAvailable = false
    nbMeisFighting++

@Rule "spawn meis"
@Event global
do:
    if nbMeisFighting < nbMaxMeis and nbMeisFighting < nbRemainingMeis:
        getFirstAvailableMei().isFighting = true
    if nbMeisFighting > 11:
        wait(spawnInterval)
    wait(0.016)
while true


@Rule "no death plane for meis"
@Event eachPlayer
@Team 2
if eventPlayer.isFighting and eventPlayer.getPosition().y < mapYLimits[currentMap*2]:
    eventPlayer.applyImpulse(Vector.UP, 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    damage(eventPlayer, null, 10)


@Rule "place barricade"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT) and eventPlayer.isCrouching():
    if eventPlayer.getSlot() == 0:
        barricade1 = worldVector(vect(0,2,5.5), eventPlayer, Transform.ROTATION_AND_TRANSLATION)
        barricade1hp = BARRICADE_HEALTH
    elif eventPlayer.getSlot() == 1:
        barricade2 = worldVector(vect(0,2,5.5), eventPlayer, Transform.ROTATION_AND_TRANSLATION)
        barricade2hp = BARRICADE_HEALTH

#generateBarricadeRules()

@Rule "anti crash?"
@Event global
if getServerLoad() > 200:
    wait(1, Wait.ABORT_WHEN_FALSE)
    bigMessage(getAllPlayers(), "Anti-crash system activated")
    smallMessage(getAllPlayers(), "Stay away from Mei's freeze!")
    for player in getPlayers(Team.1):
        player.setStatusEffect(null, Status.PHASED_OUT, 0.5)
        player.setStatusEffect(null, Status.BURNING, 0.5)
    setSlowMotion(1)
    wait(0.5)
    setSlowMotion(100)

generateMoneyRules()

import "shop.opy"
import "mei_types.opy"
import "zones.opy"
import "debug.opy"
import "waves.opy"
import "fightforyourlife.opy"
