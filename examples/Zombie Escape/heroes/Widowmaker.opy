#!mainFile "../ZombieEscape.opy"

@Rule "widow no primary when unscoped, except with ult"
@Event eachPlayer
@Hero widowmaker
if roundStatus >= GAME_IN_PROGRESS and not eventPlayer.isFiringSecondaryFire() and not eventPlayer.isUsingUltimate():
    eventPlayer.setPrimaryFireEnabled(false)

@Rule "widow allow primary when scoped/ult"
@Event eachPlayer
@Hero widowmaker
if roundStatus >= GAME_IN_PROGRESS and (eventPlayer.isFiringSecondaryFire() or eventPlayer.isUsingUltimate()):
    eventPlayer.setPrimaryFireEnabled(true)
