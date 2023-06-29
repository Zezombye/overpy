#!mainFile "meipocalypse.opy"

rule "new wave":
	@Event global
    @Condition nbRemainingMeis == 0 and gameStatus == GameStatus.IN_WAVE
    wait(1, Wait.ABORT_WHEN_FALSE)
    gameStatus = GameStatus.BETWEEN_WAVES

rule "new wave":
	@Event global
	@Condition gameStatus == GameStatus.IN_WAVE
    currentWave++
    cryoChance += 2.5
    #nbMaxMeis += 0.5*(nbMaxMeis < 24)
    spawnInterval += 0.25*(spawnInterval < 15)
    nbRemainingMeis = 10
    getDeadPlayers(Team.1).respawn()


rule "wave 1 meis":
	@Event eachPlayer
	@Team 2
    @Condition currentWave >= 1
    @Condition eventPlayer.isFighting == true
    wait(0.1)
    eventPlayer.randomVar = random.randint(1, 100)
    if eventPlayer.randomVar <= 90:
        eventPlayer.meiType = Mei.MELEE
    else:
        eventPlayer.meiType = Mei.DRONE
    return
    /*
    if eventPlayer.randomVar <= 80:
        eventPlayer.meiType = Mei.GENERIC
    elif eventPlayer.randomVar <= 85:
        eventPlayer.meiType = Mei.HEALER
    elif eventPlayer.randomVar <= 90:
        eventPlayer.meiType = Mei.SPEEDY
    elif eventPlayer.randomVar <= 95:
        eventPlayer.meiType = Mei.SNIPER
    else:
        eventPlayer.meiType = Mei.TANK*/