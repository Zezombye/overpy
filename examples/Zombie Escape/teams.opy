
@Rule "player becomes dorado boss"
@Event eachPlayer
if eventPlayer.team == TEAM_BOSS and currentBossFight == BOSS_FIGHT_DORADO:
    
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.setUltEnabled(true)
    eventPlayer.setDamageReceived(100)
    eventPlayer.setMoveSpeed(80)
    eventPlayer.setMaxHealth(500+200*len(getHumans()))
    eventPlayer.startHoT(null, 2, 9999)

@Rule "player becomes zombie"
@Event eachPlayer
if eventPlayer.team == TEAM_ZOMBIES:
    eventPlayer.tempPos = eventPlayer.getPosition()
    eventPlayer.startForcingHero(zombieHeroes[level])
    eventPlayer.teleport(eventPlayer.tempPos)
    eventPlayer.stopAllHoT()
    eventPlayer.setStatusEffect(null, Status.ROOTED, 2)

    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(zombieHeroes[level] == Hero.TORBJORN)
    eventPlayer.setPrimaryFireEnabled(zombieHeroes[level] != Hero.WINSTON)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setUltEnabled(zombieHeroes[level] == Hero.WINSTON)

    eventPlayer.setDamageReceived(50)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(500)
    eventPlayer.startHoT(null, 2, 9999)

    bigMessage(eventPlayer, "You Dead")
    wait(1)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.forceButtonPress(Button.ULTIMATE)

@Rule "player becomes human"
@Event eachPlayer
if eventPlayer.team == TEAM_HUMANS:
    eventPlayer.setAbility1Enabled(eventPlayer.getCurrentHero() in [Hero.BAPTISTE, Hero.HANZO, Hero.MCCREE, Hero.SYMMETRA])
    eventPlayer.setAbility2Enabled(eventPlayer.getCurrentHero() in [Hero.ANA, Hero.ASHE, Hero.HANZO, Hero.SOLDIER, Hero.TRACER, Hero.WIDOWMAKER])
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(eventPlayer.getCurrentHero() in [Hero.ANA, Hero.ASHE, Hero.MCCREE, Hero.SOLDIER, Hero.SYMMETRA, Hero.WIDOWMAKER])
    eventPlayer.setUltEnabled(eventPlayer.getCurrentHero() in [Hero.ANA, Hero.BAPTISTE, Hero.HANZO, Hero.MCCREE, Hero.REAPER, Hero.SOLDIER, Hero.TRACER, Hero.WIDOWMAKER])
    eventPlayer.startForcingHero(eventPlayer.getCurrentHero())
    eventPlayer.setDamageReceived(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(200)
    eventPlayer.startHoT(null, 2, 9999)

