#!mainFile "meipocalypse.opy"

@Rule "new wave"
@Event global
if generateNewWave:
    currentWave++
    cryoChance += 2.5
    spawnInterval += 0.25*(spawnInterval < 15)
    nbRemainingMeis = 30
    generateNewWave = false
    for player in [player for player in getPlayers(Team.1) if player.isDead()]:
        player.respawn()


@Rule "wave 1 meis"
@Event eachPlayer
@Team 2
if currentWave >= 1 and eventPlayer.isFighting == true:
    eventPlayer.randomVar = random.randint(1, 100)
    if eventPlayer.randomVar <= 80:
        eventPlayer.meiType = MEI_GENERIC
    elif eventPlayer.randomVar <= 85:
        eventPlayer.meiType = MEI_HEALER
    elif eventPlayer.randomVar <= 90:
        eventPlayer.meiType = MEI_SPEEDY
    elif eventPlayer.randomVar <= 95:
        eventPlayer.meiType = MEI_SNIPER
    else:
        eventPlayer.meiType = MEI_TANK