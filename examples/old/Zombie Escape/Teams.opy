#!mainFile "ZombieEscape.opy"

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
    wait(0.1)
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
    eventPlayer.allowButton(Button.ULTIMATE)

    eventPlayer.setMoveSpeed(100)

    if zombieHeroes[level] == Hero.BRIGITTE:
        eventPlayer.setDamageReceived(70)
        eventPlayer.setMaxHealth(1000)
    else:
        eventPlayer.setDamageReceived(50)
        eventPlayer.setMaxHealth(500)
    
    if len(getHumans()) > 0:
        bigMessage(eventPlayer, "Infected")
    wait(0.1)
    eventPlayer.startHoT(null, 2, 9999)
    wait(0.9)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.forceButtonPress(Button.ULTIMATE)

@Rule "player becomes human"
@Event eachPlayer
if eventPlayer.team == TEAM_HUMANS:
    eventPlayer.setAbility1Enabled(eventPlayer.getCurrentHero() in [Hero.BAPTISTE, Hero.HANZO, Hero.MCCREE, Hero.SYMMETRA])
    eventPlayer.setAbility2Enabled(eventPlayer.getCurrentHero() in [Hero.ANA, Hero.ASHE, Hero.HANZO, Hero.SOLDIER, Hero.TRACER, Hero.WIDOWMAKER, Hero.ZENYATTA])
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(eventPlayer.getCurrentHero() in [Hero.ANA, Hero.ASHE, Hero.MCCREE, Hero.SOLDIER, Hero.WIDOWMAKER, Hero.ZENYATTA])
    eventPlayer.setUltEnabled(eventPlayer.getCurrentHero() in [Hero.ANA, Hero.BAPTISTE, Hero.HANZO, Hero.MCCREE, Hero.REAPER, Hero.SOLDIER, Hero.SOMBRA, Hero.TRACER, Hero.WIDOWMAKER, Hero.ZENYATTA])
    
    if eventPlayer.getCurrentHero() == Hero.SOMBRA:
        eventPlayer.disallowButton(Button.ULTIMATE)
    else:
        eventPlayer.allowButton(Button.ULTIMATE)
    
    eventPlayer.startForcingHero(eventPlayer.getCurrentHero())
    eventPlayer.setDamageReceived(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setMaxHealth(200)
    wait(0.1)
    eventPlayer.startHoT(null, 2, 9999)

