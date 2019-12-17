#!declareGlobal center 0

#!declarePlayer effect 0
#!declarePlayer hud1 1
#!declarePlayer hud2 2

@Rule "init"
@Event global
center = vect(-75.297, 3, 130.702)

@Rule "game started"
@Event global
if isGameInProgress():
    wait(10)
    setMatchTime(6000)

@Rule "assemble heroes"
@Event global
if isAssemblingHeroes():
    setMatchTime(5)

@Rule "force mei"
@Event eachPlayer
if eventPlayer.hasSpawned() and isGameInProgress():
    eventPlayer.startForcingHero(Hero.MEI)
    createEffect(eventPlayer, Effect.SPHERE, Color.RED, center, 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.effect = getLastCreatedEntity()
    eventPlayer.teleport(center)
    eventPlayer.setDamageReceived(0)
    hudHeader(eventPlayer, "tilted: {0}% ({1})".format(
        (0.05-(eventPlayer.getEyePosition().y-eventPlayer.getPosition().y-1.25))*2000
    , eventPlayer.getEyePosition().y-eventPlayer.getPosition().y), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.hud1 = getLastCreatedText()
    hudHeader(getAllPlayers(), "", Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.hud2 = getLastCreatedText()

@Rule "boundaries"
@Event eachPlayer
@Hero mei
if distance(eventPlayer.getPosition(), center) > 7:
    do:
        eventPlayer.applyImpulse(directionTowards(eventPlayer.getPosition(), center), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.setStatusEffect(null, Status.ROOTED, 0.016)
        wait()
    while RULE_CONDITION

@Rule "tilted enough"
@Event eachPlayer
@Hero mei
if eventPlayer.hasSpawned() and eventPlayer.isAlive() and not eventPlayer.isCrouching() and eventPlayer.getEyePosition().y-eventPlayer.getPosition().y <= 1.25:
    wait(1, Wait.ABORT_WHEN_FALSE)
    bigMessage(eventPlayer, "Tilted enough, you can enter the game!")
    destroyEffect(eventPlayer.effect)
    destroyHudText(eventPlayer.hud1)
    destroyHudText(eventPlayer.hud2)
    eventPlayer.setDamageReceived(100)
    wait(0.1)
    eventPlayer.startForcingHero(Hero.WIDOWMAKER)

@Rule "respawn"
@Event playerDied
victim.setGravity(0)
victim.applyImpulse(Vector.UP, 100, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
wait(2)
victim.applyImpulse(Vector.UP, 100, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
victim.resurrect()
victim.setGravity(100)