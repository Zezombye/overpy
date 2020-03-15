#!mainFile "../ZombieEscape.opy"

@Rule "chase timer"
@Event eachPlayer
chase(eventPlayer.zenCharge, 9999, rate=1, ChaseReeval.NONE)

@Rule "prevent using ultimate unless using right click"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.getUltCharge() > 0:
    eventPlayer.disallowButton(Button.ULTIMATE)

@Rule "inform player that he must press rclick"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.getUltCharge() == 100:
    smallMessage(eventPlayer, "Charge secondary fire to use your ultimate!")


@Rule "zen fast fire - charging"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.isFiringSecondaryFire():
    eventPlayer.zenCharge = 0
    #chase(eventPlayer.zenCharge, 9999, rate=1, ChaseReeval.NONE)

"""
@Rule "zen fast fire - releasing"
@Event eachPlayer
@Hero zenyatta
if not eventPlayer.isFiringSecondaryFire():
    stopChasingVariable(eventPlayer.zenCharge)
    eventPlayer.zenCharge = 0
"""

@Rule "charged enough"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.getUltCharge() == 100 and eventPlayer.zenCharge > 0.75 and eventPlayer.isFiringSecondaryFire():
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.allowButton(Button.ULTIMATE)
    wait()
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)


@Rule "zen fast fire - firing + trans healing"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.isUsingUltimate():
    do:
        eventPlayer.setProjectileSpeed(100)
        heal([player for player in getPlayersInRadius(eventPlayer.getPosition(), 10, Team.ALL, LosCheck.OFF) if player.team == TEAM_HUMANS], eventPlayer, 3)
        wait(0.016)
    while RULE_CONDITION