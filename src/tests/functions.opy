
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

rule "vectors":
    A = vect(B,C,D)
    A = B.x
    A = vect(B,C,D).x #B
    A = vect(B,C,D).y #C
    A = vect(B,C,D).z #D
    A = vect(0,1,0) #Vector.UP


rule "optimizations with literals":
    A.append(ceil(3.3)) #4
    A.append(floor(3.7)) #3
    A.append(round(3.5)) #4
    A.append(round(2.5)) #3
    A.append(abs(-5)) #5
    A.append(acos(0.53)) #1.012
    A.append(acos(-3)) #3.1415
    A.append(acosDeg(-0.4)) #113.633
    A.append(asin(-0.3)) #-0.302
    A.append(asinDeg(0.6)) #36.865
    A.append(atan2(920, -12)) #1.584
    A.append(atan2Deg(103, -123)) #140.057
    A.append(cos(490)) #0.996
    A.append(cosDeg(921)) #-0.934
    A.append(crossProduct(vect(23, 53, -12), vect(120, -2, 75))) #vect(3951, -3165, -6406)
    A.append(directionTowards(vect(129, 23, -120), vect(-75, 329, 938))) #vect(-0.182, 0.273, 0.945)
    A.append(distance(vect(329, -12, 643), vect(-23, -125, -302))) #1014.740
    A.append(dotProduct(vect(129, -35, 239), vect(-12, 345, 239))) #43498
    A.append(getOppositeTeam(Team.1)) #Team 2
    A.append(getOppositeTeam(Team.2)) #Team 1
    A.append(getOppositeTeam(Team.ALL)) #All Teams
    A.append(len([])) #0
    A.append(len([B,C,D])) #3
    A.append(max(5, 32)) #32
    A.append(min(-31, 6)) #-31
    A.append(normalize(vect(-13, 324, 674))) #vect(-0.017, 0.433, 0.901)
    A.append(sin(19.63)) #0.704
    A.append(sinDeg(-12.6)) #-0.218
    A.append(sqrt(-4)) #0
    A.append(sqrt(93.23)) #9.656
    A.append(tan(912)) #1.364
    A.append(tanDeg(91.563)) #-36.648
    A.append(vectorTowards(vect(-123, 53, 64), vect(219, -35, 132))) #vect(342, -88, 68)

rule "optimizations for function combinations":

    A = normalize(vectorTowards(X, Y)) #directionTowards(x, y)
    A = not B.isAlive() #is dead(B)
    A = not B.isDead() #is alive(B)
    A = [p for p in getPlayers(B) if p.getCurrentHero() == C] #getPlayersOnHero(C, B)
    A = [p for p in getPlayers(B) if p.isOnObjective()] #getPlayersOnObjective(B)
    A = [p for p in getPlayers(B) if not p.isOnObjective()] #getPlayersNotOnObjective(B)
    A = [p for p in getPlayers(B) if p.isAlive()] #getLivingPlayers(B)
    A = [p for p in getPlayers(B) if p.isDead()] #getDeadPlayers(B)
    A = len(getPlayers(B)) #getNumberOfPlayers(B)
    A = len(getPlayersOnObjective(B)) #getNumberOfPlayersOnObjective(B)
    A = len(getPlayersOnHero(B, C)) #getNumberOfHeroes(B, C)
    A = len(getLivingPlayers(B)) #getNumberOfLivingPlayers(B)
    A = len(getDeadPlayers(B)) #getNumberOfDeadPlayers(B)
