#!mainFile "zombieescape.opy"

@Rule "(debug) section spheres draw"
@Event global
if ENABLE_DEBUG and sectionLoopIndex == 0:
    wait(2)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, triggers[currentSection], sectionRadiuses[currentSection], IconReeval.VISIBILITY)


@Rule "(debug) tp"
@Event eachPlayer
if ENABLE_DEBUG and eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0, 0, 5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))


"""@Rule "debug humans win"
@Event eachPlayer
if ENABLE_DEBUG and eventPlayer.isHoldingButton(Button.INTERACT):
    roundWinners = TEAM_HUMANS
"""


@Rule "(debug) print coords"
@Event global
if ENABLE_DEBUG:
    hudHeader(getAllPlayers(), hostPlayer.getPosition(), HudPosition.LEFT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), distance(hostPlayer.getPosition(), sectionSpawns[currentSection + 1]), HudPosition.LEFT, 0, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
    debug(hostPlayer.isFiringSecondaryFire())

    
@Rule "pharah debug"
@Event eachPlayer
if ENABLE_DEBUG and eventPlayer.isCommunicating(Comms.NEED_HEALING) and eventPlayer.getCurrentHero() == Hero.PHARAH:
    destroyAllEffects()
    wait(1)
    currentSection++
    sectionLoopIndex = 0
"""
@Rule "spawn dummies"

@Event global
if ENABLE_DEBUG:
    createDummy(Hero.ANA, Team.ALL, -1, hostPlayer.getPosition(), vect(0,0,0))
    createDummy(Hero.ASHE, Team.ALL, -1, hostPlayer.getPosition(), vect(0,0,0))
    createDummy(Hero.BAPTISTE, Team.ALL, -1, hostPlayer.getPosition(), vect(0,0,0))

@Rule "tp dummies"
@Event global
if ENABLE_DEBUG and hostPlayer.isCommunicating(Comms.VOICE_LINE_UP):
    for dummy in [player for player in getAllPlayers() if player != hostPlayer]:
        dummy.teleport(hostPlayer.getPosition())

@Rule "dummy hit"
@Event global
if ENABLE_DEBUG and hostPlayer.isHoldingButton(Button.INTERACT):
    for dummy in [player for player in getAllPlayers() if player != hostPlayer]:
        dummy.forceButtonPress(Button.PRIMARY_FIRE)
"""
