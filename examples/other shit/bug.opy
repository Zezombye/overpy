@Rule "create effect"
@Event global
createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, A, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
A = vect(-75.729, 2.29, 97.035)


@Rule "hud template"
@Event eachPlayer
hudHeader(eventPlayer, raycast(eventPlayer.getEyePosition() + (abs(dotProduct(A - eventPlayer.getEyePosition(), eventPlayer.getFacingDirection()))) * eventPlayer.getFacingDirection(), eventPlayer.getEyePosition(), los=BarrierLos.BLOCKED_BY_ENEMY_BARRIERS).hasLoS() and distance(vect(0, 0, 0), A - eventPlayer.getEyePosition() + (abs(dotProduct(A - eventPlayer.getEyePosition(), eventPlayer.getFacingDirection()))) * eventPlayer.getFacingDirection()) <= 1.25, Position.TOP, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


@Rule "condition template"
@Event eachPlayer
if raycast(eventPlayer.getEyePosition() + (abs(dotProduct(A - eventPlayer.getEyePosition(), eventPlayer.getFacingDirection()))) * eventPlayer.getFacingDirection(), eventPlayer.getEyePosition(), los=BarrierLos.BLOCKED_BY_ENEMY_BARRIERS).hasLoS() and distance(vect(0, 0, 0), A - eventPlayer.getEyePosition() + (abs(dotProduct(A - eventPlayer.getEyePosition(), eventPlayer.getFacingDirection()))) * eventPlayer.getFacingDirection()) <= 1.25:
    smallMessage(getAllPlayers(), "Hello")


