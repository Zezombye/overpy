#!mainFile "meipocalypse.opy"

import "meipocalypse.opy"
"""
@Rule "debug tp"
@Event eachPlayer
if DEBUG and eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0,0,5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))
    """

@Rule "display coords"
@Event global
#if DEBUG:
    debug(hostPlayer.getPosition())
    debug("Server load average: {}".format(getAverageServerLoad()))
    debug("Server load peak: {}".format(getPeakServerLoad()))
    debug("Server load: {}".format(getServerLoad()))

"""
@Rule "debug place spheres"
@Event global
    hudHeader(getAllPlayers(), hostPlayer.getPosition(), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(getAllPlayers(), currentMeiType, Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

@Rule "debug tp bots"
@Event global
if hostPlayer.isHoldingButton(Button.CROUCH):
    getPlayersOnHero(Hero.MEI, Team.2).meiType = currentMeiType
    getPlayersOnHero(Hero.MEI, Team.2).teleport(spawnA11)
"""
"""@Rule "update location"
@Event global
if hostPlayer.isHoldingButton(Button.SECONDARY_FIRE):
    do:
        #debugSphereLocation = normalize(vect(hostPlayer.getFacingDirection().x, 0, hostPlayer.getFacingDirection().z))*200+hostPlayer.getPosition()
        debugSphereLocation = hostPlayer.getPosition()-vect(0,1,0)
        wait(0.016)
    while not hostPlayer.isHoldingButton(Button.ULTIMATE)"""
    