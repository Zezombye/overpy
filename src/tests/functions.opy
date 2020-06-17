
rule "function":
    A = raycast(B, C, D, E, true).getPlayerHit()
    A = raycast(B, C, D, E, false).getHitPosition()
    A = raycast(B, C, D, E, true).getNormal()
    A = getSign(-3)
    chase(eventPlayer.B, 9999, duration=3, ChaseReeval.DESTINATION_AND_DURATION)
    hudHeader(getAllPlayers(), "test", HudPosition.LEFT, 1, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudSubtext(getAllPlayers(), "test", HudPosition.LEFT, 1, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudSubheader(getAllPlayers(), "test", HudPosition.LEFT, 1, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudText(null, "azer", "dqsf", "fdsq", HudPosition.LEFT, -1, Color.RED, Color.WHITE, Color.YELLOW, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    wait()

rule "beams":
    createBeam(A, Beam.GRAPPLE, B, C, Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(A, Beam.GRAPPLE, vect(A, B, C), vect(A, D, C), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(A, Beam.GRAPPLE, vect(Z, B, C), vect(A, D, C), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(A, Beam.GOOD, vect(A, B, C), vect(A, D, C), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(A, Beam.GOOD, vect(A, B, C), vect(A, D, C), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(A, Beam.BAD, vect(A, B, C), vect(A, D, C), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(A, Beam.BAD, vect(A, B, C), vect(A, D, Z), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)