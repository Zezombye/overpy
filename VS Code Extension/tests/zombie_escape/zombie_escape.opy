#!define ENABLE_DEBUG true
#!define ENABLE_WALL_KB true
#!define ENABLE_FIRST_INFECTION true

#Global variables

#!define currentSectionWalls A
#!define tpStarts B
#!define tpDests C
#!define deathplaneY D
#!define roundWinners E
#!define mapId F
#!define hasFirstInfectionPassed G
#!define currentBossFight H
#!define sectionLoopIndex I
#!define level J

#!define arenaBottomRight            K[0]
#!define arenaBottomLeft             K[1]
#!define arenaTopLeft                K[2]
#!define arenaLeftRightVect          K[3]
#!define arenaBottomTopVect          K[4]
#!define arenaLeftRightVectSpace     K[5]
#!define arenaLeftRightNbBeams       K[6]
#!define arenaBottomTopVectSpace     K[7]
#!define arenaBottomTopNbBeams       K[8]
#!define bossSpawn                   K[9]
#!define bossFightHero               K[10]
#!define bossFightZombieDeathPlane   K[11]
#!define bossPlayer                  K[12]
#!define arenaWallIndexLeftRight     K[13]
#!define arenaWallIndexBottomTop     K[14]
#!define arenaLeftRightCrossThreshold K[15]
#!define arenaBottomTopCrossThreshold K[16]
#!define arenaLeftRightCrossDiff     K[17]
#!define arenaBottomTopCrossDiff     K[18]
#!define bossFightType               K[19]
#!define bossSpawnEffect             K[20]

#!define lateTps L
#!define sectionRadiuses M
#!define currentSection N
#!define firstInfectionLoopIndex O
#!define matchTime P
#!define countdownStatus Q
#!define roundStatus R
#!define sectionData S
#!define triggers T
#!define walls W
#!define zombieHeroes Z

#Player variables

#!define fastFireCountdown B
#!define tempPos C
#!define currentHero D
#!define hasWonRound F
#!define tempHero H
#!define wallLoopIndex J
#!define wasFirstZombieLastRound L
#!define soldierHealPosition N
#!define team Z

#Other

#!define GAME_NOT_STARTED 0
#!define NEW_ROUND 1
#!define IS_ASSEMBLING_HEROES 2
#!define GAME_IN_PROGRESS 3

#!define NO_COUNTDOWN 0
#!define X_SECONDS_LEFT 1
#!define 8_SECONDS_LEFT 2
#!define 1_SECOND_LEFT 3
#!define COUNTDOWN_FINISHED 4

#!define NO_TEAM 0
#!define TEAM_HUMANS 1
#!define TEAM_ZOMBIES 2
#!define TEAM_BOSS 3

#!define NO_BOSS_FIGHT 0
#!define BOSS_FIGHT_DORADO 1

#!define wallStart x
#!define wallLength y
#!define sectionTime z

#!define humanHeroes [Hero.ANA, Hero.ASHE, Hero.BAPTISTE, Hero.HANZO, Hero.MCCREE, Hero.REAPER, Hero.SOLDIER, Hero.SOMBRA, Hero.SYMMETRA, Hero.TRACER, Hero.WIDOWMAKER]

#kbMult = 0.9
#kbScalar = 0.4
#kbMultScalar = kbMult*(1-kbScalar)
#kbRatioMult = kbMult*kbScalar
#!define kbMultScalar 0.54
#!define kbRatioMult 0.36

#!define debug(x) hudHeader(getAllPlayers(), x, Position.LEFT, 0, Color.TURQUOISE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
#!define generateArenaVectors(bottomRight, bottomLeft, topLeft) __script__("C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\GenerateArenaVectors.js")
#!define getSign(x) ((x>=0)-(x<0))
#!define getHumans() [player for player in getAllPlayers() if player.team == TEAM_HUMANS]
#!define getZombies() [player for player in getAllPlayers() if player.team == TEAM_ZOMBIES]


@Rule "cs:s zombie escape - made by /u/zezombye - discord in description"
@Event global
mapId = ceil(nearestWalkablePosition(vect(100, 100, 100)).x)


import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\maps\kings_row.opy"
import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\maps\eichenwalde.opy"
import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\maps\blizzard_world.opy"
import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\maps\oasis_city_center.opy"
import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\maps\dorado.opy"

import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\teams.opy"
import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\debug.opy"
import "C:\Users\Zezombye\Desktop\overpy\VS Code Extension\tests\zombie_escape\bossfight.opy"


@Rule "initial zombie hero + other vars"
@Event global
    zombieHeroes = [Hero.TORBJORN, Hero.REINHARDT, Hero.WINSTON, Hero.BRIGITTE]
    hudHeader(getAllPlayers(), "Waiting 4 Players 2 Start ...", Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)

    currentSection = 0
    level = 1
    matchTime = 1200

@Rule "assembling heroes"
@Event global
if isAssemblingHeroes():
    setMatchTime(9)
    roundStatus = IS_ASSEMBLING_HEROES

    hasFirstInfectionPassed = false
    currentBossFight = NO_BOSS_FIGHT
    currentSection = 0
    firstInfectionLoopIndex = 0
    countdownStatus = NO_COUNTDOWN
    roundWinners = NO_TEAM
    bossPlayer = null

    for player in getAllPlayers():
        player.hasWonRound = 0
        player.team = NO_TEAM

    for player in getAllPlayers():
        player.setAllowedHeroes(humanHeroes)
        player.stopForcingCurrentHero()
    disableGamemodeCompletion()

@Rule "init new round"
@Event global
if roundStatus == NEW_ROUND and getMatchTime() != 0:
    matchTime = getMatchTime()

    if not ENABLE_DEBUG:
        destroyAllHudTexts()
        
    wait(0.25)
    goToAssembleHeroes()
    

@Rule "round start"
@Event global
if isGameInProgress():
    roundStatus = GAME_IN_PROGRESS
    setMatchTime(matchTime)
    sectionLoopIndex = 0


@Rule "init section (slice + draw tp + trigger)"
@Event global
if sectionLoopIndex == 0 and roundStatus >= GAME_IN_PROGRESS:
    currentSectionWalls = walls.slice(sectionData[currentSection].wallStart, sectionData[currentSection].wallLength)
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, tpStarts[currentSection], 0.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    #Draw trigger
    destroyAllIcons()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, triggers[currentSection], 4, IconReeval.VISIBILITY)
    createIcon(getAllPlayers(), triggers[currentSection], Icon.ARROW_DOWN, IconReeval.VISIBILITY_AND_POSITION, Color.BLUE, true)
    

@Rule "walls visual effect"
@Event global
if sectionLoopIndex == 0:
    do:
        createEffect(getAllPlayers(), Effect.SPHERE, Color.ORANGE, currentSectionWalls[sectionLoopIndex], 4, IconReeval.VISIBILITY)
        createEffect(getAllPlayers(), Effect.SPHERE, Color.ORANGE, currentSectionWalls[sectionLoopIndex] + vect(0, 4, 0), 4, IconReeval.VISIBILITY)
        sectionLoopIndex++
        wait(0.05)
    while sectionLoopIndex < len(currentSectionWalls)

@Rule "walls kb effect"
@Event eachPlayer
if ENABLE_WALL_KB:
    do:
        if eventPlayer.getPosition().y < currentSectionWalls[eventPlayer.wallLoopIndex].y - 4:
            goto lbl_0
        if distance(vect(eventPlayer.getPosition().x, 0, eventPlayer.getPosition().z), vect(currentSectionWalls[eventPlayer.wallLoopIndex].x, 0, currentSectionWalls[eventPlayer.wallLoopIndex].z)) > 4.5:
            goto lbl_1
        eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.048)
        eventPlayer.applyImpulse(Vector.UP, 1, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(vect(vectorTowards(currentSectionWalls[eventPlayer.wallLoopIndex], eventPlayer.getPosition()).x, 0, vectorTowards(currentSectionWalls[eventPlayer.wallLoopIndex], eventPlayer.getPosition()).z), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        lbl_0:
        lbl_1:
        eventPlayer.wallLoopIndex++
        if eventPlayer.wallLoopIndex < len(currentSectionWalls):
            goto lbl_3
        eventPlayer.wallLoopIndex = 0
        lbl_3:
        wait(0.016)
    while true


@Rule "use tp"
@Event eachPlayer
if distance(eventPlayer.getPosition(), tpStarts[currentSection] - vect(0, 1, 0)) < 2:
    eventPlayer.teleport(tpDests[currentSection])


@Rule "trigger"
@Event global
if len(getPlayersInRadius(triggers[currentSection], 5, Team.ALL, LosCheck.OFF)) > 0 and countdownStatus == NO_COUNTDOWN:

    #Immediately end the game if there are zombies

    if len([player for player in getPlayersInRadius(triggers[currentSection], 5, Team.ALL, LosCheck.OFF) if player.team == TEAM_ZOMBIES]) != 0:
        roundWinners = TEAM_ZOMBIES
        return
    
    
    #Check if it is the last section

    if currentSection == len(sectionData)-1:
        roundWinners = TEAM_HUMANS
        return

    #Don't do anything if the current trigger is a boss fight (defined as time == -1)

    if sectionData[currentSection].sectionTime == -1:
        currentBossFight = bossFightType
        return
        
    bigMessage(getAllPlayers(), "Defend: {} Sec".format(sectionData[currentSection].sectionTime))
    countdownStatus = X_SECONDS_LEFT
    wait(sectionData[currentSection].sectionTime - 8)
    if roundStatus <= IS_ASSEMBLING_HEROES:
        return
    
    bigMessage(getAllPlayers(), "Defend: 8 Sec")
    countdownStatus = 8_SECONDS_LEFT
    wait(7)
    if roundStatus <= IS_ASSEMBLING_HEROES:
        return

    
    #bigMessage(getAllPlayers(), "Defend: 1 Sec")
    countdownStatus = 1_SECOND_LEFT
    wait(1)
    if roundStatus <= IS_ASSEMBLING_HEROES:
        return
    
    countdownStatus = NO_COUNTDOWN
    currentSection++
    bigMessage(getAllPlayers(), "Run!!!")
    destroyAllEffects()
    wait(0.05)
    sectionLoopIndex = 0


@Rule "first infection"
@Event global
if ENABLE_FIRST_INFECTION and roundStatus == GAME_IN_PROGRESS:

    #Display "First infection in x seconds" cooldown
    do:
        wait(1)
        smallMessage(getAllPlayers(), "Initial Dead: {} Sec".format(10 - firstInfectionLoopIndex))
        firstInfectionLoopIndex++
    while firstInfectionLoopIndex < 10

    #First infection: 2 zombies if more than 10 players, else 1
    random.shuffle([player for player in getAllPlayers() if player.hasSpawned() and player.wasFirstZombieLastRound == 0]).slice(0, 1+(len(getHumans()) > 10)).team = TEAM_ZOMBIES

    hasFirstInfectionPassed = true
    for player in getZombies():
        player.teleport(lateTps[0])
        player.wasFirstZombieLastRound = 1
    
    for player in getHumans():
        player.wasFirstZombieLastRound = 0


@Rule "tp players at 1 sec left"
@Event eachPlayer
if countdownStatus == 1_SECOND_LEFT and not(eventPlayer in getPlayersInRadius(triggers[currentSection], sectionRadiuses[currentSection], Team.ALL, LosCheck.OFF)):
    eventPlayer.teleport(lateTps[currentSection+1])


@Rule "deathplane tp"
@Event eachPlayer
if eventPlayer.getPosition().y < deathplaneY and roundStatus != GAME_NOT_STARTED and roundWinners == NO_TEAM:
    eventPlayer.teleport(lateTps[currentSection])
    eventPlayer.resurrect()


@Rule "infect players"
@Event playerTookDamage
if attacker.team == TEAM_ZOMBIES and victim.team == TEAM_HUMANS and roundWinners == NO_TEAM and distance(attacker.getPosition(), victim.getPosition()) <= 5.5:
    #attacker.addToScore(1)
    kill(victim, attacker)
    wait(0.016)
    victim.team = TEAM_ZOMBIES
    victim.resurrect()
    #victim.tempHero = victim.getCurrentHero()
    #hudHeader(getAllPlayers(), "{} {} -> {} {}".format(heroIcon(attacker.getCurrentHero()), attacker, heroIcon(victim.tempHero), victim), Position.RIGHT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)

@Rule "no more humans = zombies win"
@Event global
if len(getHumans()) == 0 and roundStatus >= GAME_IN_PROGRESS and hasFirstInfectionPassed:
    roundWinners = TEAM_ZOMBIES


@Rule "player dies = gets tp'd, +10 pts if zombie kill"
@Event playerDied
if roundWinners == NO_TEAM and roundStatus != GAME_NOT_STARTED:

    if victim == attacker or victim.team == TEAM_ZOMBIES:
        victim.resurrect()
        victim.teleport(lateTps[currentSection])

    if attacker.team != TEAM_ZOMBIES:
        attacker.addToScore(9)
    


@Rule "humans and zombies cant hurt same"
@Event global
if isGameInProgress():
    startDamageModification(getHumans(), getHumans(), 0.001, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getZombies(), getZombies(), 0, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)


@Rule "humans and zombies can hurt each other + kb"
@Event playerDealtDamage
if attacker.team != victim.team and victim.team == TEAM_ZOMBIES:

    #Randomly apply upwards impulse (more kb)

    if random.randint(1, 6) == 1:
        victim.applyImpulse(Vector.UP, 1.0, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    
    victim.applyImpulse(vect(vectorTowards(attacker.getPosition(), victim.getPosition()).x, 0, vectorTowards(attacker.getPosition(), victim.getPosition()).z), eventDamage*(kbMultScalar+kbRatioMult*(len(getZombies())/len(getHumans()))), Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)


@Rule "bap fast fire"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isUsingAbility1():
    do:
        eventPlayer.setProjectileSpeed(100)
        wait(0.016)
        eventPlayer.fastFireCountdown++
    while eventPlayer.fastFireCountdown < 105
    eventPlayer.fastFireCountdown = 0



@Rule "player selected hero: change to human"
@Event eachPlayer
if eventPlayer.hasSpawned() and roundStatus >= GAME_IN_PROGRESS:
    eventPlayer.disallowButton(Button.CROUCH)
    if hasFirstInfectionPassed == true:
        eventPlayer.team = TEAM_ZOMBIES
        goto endif

    eventPlayer.team = TEAM_HUMANS
    endif:
    
    wait(0.1)
    eventPlayer.teleport(lateTps[currentSection])
    wait(2)
    eventPlayer.allowButton(Button.CROUCH)


@Rule "burn = slow"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.BURNING) and eventPlayer.team == TEAM_ZOMBIES:
    eventPlayer.setMoveSpeed(75)
    wait(5)
    eventPlayer.setMoveSpeed(100)

#It is currently impossible to remove a status applied by the game itself.
"""
@Rule "no hax for humans"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.HACKED):
    eventPlayer.clearStatusEffect(Status.HACKED)


@Rule "no stun for humans"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.STUNNED) and eventPlayer.team == TEAM_HUMANS:
    eventPlayer.clearStatusEffect(Status.STUNNED)
"""

@Rule "red orb"
@Event global
if countdownStatus == 8_SECONDS_LEFT:
    createEffect(getAllPlayers(), Effect.ORB, Color.RED, lateTps[currentSection + 1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "map finished"
@Event global
if level == 4:
    declarePlayerVictory(sorted(getAllPlayers(), key=lambda player: player.getScore())[-1])


@Rule "zombies win"
@Event global
if roundWinners == TEAM_ZOMBIES:
    bigMessage(getAllPlayers(), "Dead Win")
    wait(5)
    stopAllDamageModifications()
    if getMatchTime() == 0:
        level = 4
        return
    roundStatus = NEW_ROUND


@Rule "humans win"
@Event global
if roundWinners == TEAM_HUMANS:
    stopAllDamageModifications()
    bigMessage(getAllPlayers(), "Heroes Win")
    kill(getZombies(), null)
    for player in getHumans():
        player.addToScore(100)
    wait(5)

    if level == 2:
        bigMessage(getAllPlayers(), "Final Level: {}".format(zombieHeroes[level + 1]))
        goto ifend
    bigMessage(getAllPlayers(), "Level {}: {}".format(level + 2, zombieHeroes[level + 1]))
    ifend:
    
    wait(5)
    level++
    setMatchTime(1200)
    roundStatus = NEW_ROUND


@Rule "skirmish rez"
@Event playerDied
if getMatchTime() == 0 and roundStatus == GAME_NOT_STARTED:
    wait(4)
    victim.respawn()

@Rule "baptiste no crouch jump"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isCrouching():
    eventPlayer.setStatusEffect(null, Status.HACKED, 0.016)

@Rule "no climb on walls"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.HANZO and eventPlayer.isOnWall():
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.016)
    eventPlayer.applyImpulse(Vector.DOWN, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)

@Rule "baptiste healing"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isUsingAbility1():
    [player for player in getPlayersInRadius(eventPlayer.getPosition(), 10, Team.ALL, LosCheck.OFF) if player.team == TEAM_HUMANS].startHoT(eventPlayer, 5, 40)

@Rule "soldier healing - store biotic field position"
@Event eachPlayer
@Hero soldier
if eventPlayer.isUsingAbility2():
    eventPlayer.soldierHealPosition = eventPlayer.getPosition()

@Rule "soldier healing"
@Event eachPlayer
@Hero soldier
if eventPlayer.isUsingAbility2():
    do:
        heal([player for player in getPlayersInRadius(eventPlayer.soldierHealPosition, 4.5, Team.ALL, LosCheck.OFF) if player.team == TEAM_HUMANS], eventPlayer, 0.64)
        wait(0.016)
    while RULE_CONDITION

@Rule "ana healing"
@Event playerDealtDamage
if attacker.getCurrentHero() == Hero.ANA and victim.team == TEAM_HUMANS:
    victim.startHoT(attacker, 0.85, 40)
