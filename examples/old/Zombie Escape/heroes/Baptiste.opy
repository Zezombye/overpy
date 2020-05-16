#!mainFile "../ZombieEscape.opy"

@Rule "bap fast fire"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isUsingAbility1():
    do:
        eventPlayer.setProjectileSpeed(100)
        wait(0.016)
        eventPlayer.fastFireCountdown++
    while eventPlayer.fastFireCountdown < 105
    eventPlayer.fastFireCountdown = 0

    
@Rule "baptiste no crouch jump"
@Event eachPlayer
@Hero baptiste
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isCrouching():
    eventPlayer.setStatusEffect(null, Status.HACKED, 0.016)


@Rule "baptiste healing"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isUsingAbility1():
    [player for player in getPlayersInRadius(eventPlayer.getPosition(), 10, Team.ALL, LosCheck.OFF) if player.team == TEAM_HUMANS].startHoT(eventPlayer, 5, 40)
