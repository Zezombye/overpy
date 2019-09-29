
@Rule "(debug) section spheres draw"
@Event global
if ENABLE_DEBUG and sectionLoopIndex == 0:
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, triggers[currentSection], sectionRadiuses[currentSection], IconReeval.VISIBILITY)


@Rule "(debug) tp"
@Event eachPlayer
if ENABLE_DEBUG and eventPlayer.isHoldingButton(Button.INTERACT):
    eventPlayer.teleport(worldVector(vect(0, 0, 5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))


@Rule "(debug) print coords"
@Event eachPlayer
if ENABLE_DEBUG:
    hudHeader(getAllPlayers(), eventPlayer.getPosition(), Position.LEFT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), distance(eventPlayer.getPosition(), lateTps[currentSection + 1]), Position.LEFT, 0, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
    debug(hostPlayer.isUsingAbility2())

    
@Rule "pharah debug"
@Event eachPlayer
if ENABLE_DEBUG and eventPlayer.isCommunicating(Comms.NEED_HEALING) and eventPlayer.getCurrentHero() == Hero.PHARAH:
    destroyAllEffects()
    wait(1)
    currentSection++
    sectionLoopIndex = 0

