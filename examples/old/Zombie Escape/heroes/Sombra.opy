#!mainFile "../ZombieEscape.opy"

@Rule "sombra ult"
@Event eachPlayer
@Hero sombra
if eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.getUltCharge() == 100:
    eventPlayer.applyImpulse(Vector.UP, 8, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.sombraSphereRadius = 0
    wait(0.15)
    smallMessage(getAllPlayers(), "{0} apagando las luces! {0}".format(heroIcon(Hero.SOMBRA)))
    eventPlayer.setUltCharge(0)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.PURPLE, eventPlayer.getPosition(), eventPlayer.sombraSphereRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.sombraSphere = getLastCreatedEntity()
    chase(eventPlayer.sombraSphereRadius, 20, rate=70, ChaseReeval.NONE)

    [player for player in getAllPlayers() if player.team == TEAM_ZOMBIES and distance(eventPlayer.getPosition(), player.getPosition()) < 20].setStatusEffect(eventPlayer, Status.HACKED, 7)
    wait(0.7)
    stopChasingVariable(eventPlayer.sombraSphereRadius)
    destroyEffect(eventPlayer.sombraSphere)

