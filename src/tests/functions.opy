
rule "function":
    A = raycast(B, C, D, E, true).getPlayerHit()
    A = raycast(B, C, D, E, true).getHitPosition()
    A = raycast(B, C, D, E, true).getNormal()
    A = chase(eventPlayer.B, 9999, duration=3, ChaseReeval.DESTINATION_AND_DURATION)