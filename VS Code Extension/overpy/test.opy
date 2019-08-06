@Rule "INIT MODE \"MURDER MYSTERY\" V0.994experimental"
@Event global
disableGamemodeCompletion()
disableScoring()
disableMusic()
N = true
F = -1
""" zearaze """

#owo
#!uwu
ORISA
'''azer

azer

'''

#!macro\
multiline
owo

@Rule "CONFIG: C = NUMBER OF ROUNDS, O = MIN. PLAYERS, P = PREPARATION TIME,  T = MATCH TIME (SECONDS), U = DISPLAY ALIVE PLAYERS"
@Event global
C = 5
O = 3
U = false
P = 12
T = 270


@Rule "CONFIG: E = ENABLE SUPERJUMP (BAPTISTE LIKE), H = ENABLE STEALTH FOR TRAITORS, W = ENABLE 3rd person"
@Event global
E = true
H = true
W = false


@Rule "WAIT FOR PLAYERS"
@Event global
if isGameInProgress() and not S and getNumberOfPlayers(Team.ALL) < O:
    hudText(getPlayers(Team.ALL), "Waiting ...", null, null, Position.TOP, 0, Color.YELLOW, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    pauseMatchTime()


@Rule "DISABLE ABILITIES"
@Event eachPlayer
if isGameInProgress():
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)


@Rule "(START NEW ROUND) RESET ALL VARIABLES, SET RANDOM PLAYER(S) AS TRAITOR"
@Event global
if isGameInProgress() and isAssemblingHeroes() != true and N and getNumberOfPlayers(Team.ALL) >= O:
    pauseMatchTime()
    M = []
    R++
    destroyAllHudTexts()
    destroyAllInWorldText()
    destroyAllEffects()
    destroyAllIcons()
    for player in getPlayers(Team.ALL):
        player.clearStatusEffect(Status.PHASED_OUT)
    for player in getPlayers(Team.ALL):
        player.clearStatusEffect(Status.HACKED)
    for player in getPlayers(Team.ALL):
        player.setDamageDealt(100)
    for player in getPlayers(Team.ALL):
        player.A = 0
    for player in getPlayers(Team.ALL):
        player.C = 0
    for player in getPlayers(Team.ALL):
        player.D = false
    for player in getPlayers(Team.ALL):
        player.F = 0
    for player in getPlayers(Team.ALL):
        player.H = false
    for player in getPlayers(Team.ALL):
        player.R = 0
    for player in getPlayers(Team.ALL):
        player.X = 0
    for player in getPlayers(Team.ALL):
        player.Y = 0
    for player in getPlayers(Team.ALL):
        player.Z = 0
    V = null
    F = -1
    if R == C:
        goto lbl_0
    hudText(getPlayers(Team.ALL), "Starting Round {} ({})".format(R, ceil(L)), null, null, Position.TOP, 0, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    lbl_0:
    if R < C:
        goto lbl_1
    hudText(getPlayers(Team.ALL), "Starting Final Round ({})".format(ceil(L)), null, null, Position.TOP, 0, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    lbl_1:
    wait(P)
    A = random.shuffle([player for player in getPlayers(Team.ALL) if player.hasSpawned()])
    M.append(A[0])
    for player in A[0]:
        player.R = 1
    if len(getPlayers(Team.ALL)) < 8:
        goto lbl_2
    M.append(A[1])
    for player in A[1]:
        player.R = 1
    lbl_2:
    if len(getPlayers(Team.ALL)) < 12:
        goto lbl_3
    M.append(A[2])
    for player in A[2]:
        player.R = 1
    lbl_3:
    if not H:
        goto lbl_4
    destroyHudText(getLastCreatedText())
    lbl_4:
    for player in [i for i in A if i.R == 0][0]:
        player.R = 2
    for player in [i for i in A if i.R == 0][0]:
        player.R = 3
    for player in K:
        player.R = 1
    setMatchTime(T)
    unpauseMatchTime()
    for player in getPlayers(Team.ALL):
        player.B = false
    for player in getPlayers(Team.ALL):
        player.V = true
    S = true
    N = false


@Rule "SHOW NUMBER OF ALIVE TRAITORS AND INNOCENTS (U == FALSE: ONLY FOR DEAD PLAYERS)"
@Event global
if S:
    if not U:
        goto lbl_0
    hudText(getPlayers(Team.ALL), "Innocent Participants Alive: {}".format(len([player for player in getPlayers(Team.ALL) if player.D != true and player.R != 1 and player.hasSpawned()])), null, null, Vector.RIGHT, 1, Color.BLUE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    hudText(getPlayers(Team.ALL), "Traitors Alive: {}".format(len([player for player in getLivingPlayers(Team.ALL) if player.R == 1])), null, null, Vector.RIGHT, 0, Color.RED, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    lbl_0:
    if U:
        goto lbl_1
    hudText(getDeadPlayers(Team.ALL), "Innocent Participants Alive: {}".format(len([player for player in getLivingPlayers(Team.ALL) if player.R != 1 and player.D != 1 and player.hasSpawned()])), null, null, Vector.RIGHT, 1, Color.BLUE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    hudText(getDeadPlayers(Team.ALL), "Traitors Alive: {}".format(len([player for player in getLivingPlayers(Team.ALL) if player.R == 1])), null, null, Vector.RIGHT, 0, Color.RED, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    hudText(getLivingPlayers(Team.ALL), null, null, "Traitors Current Round: {}".format(len([player for player in getPlayers(Team.ALL) if player.R == 1])), Vector.RIGHT, 0, Color.WHITE, Color.WHITE, Color.YELLOW, Reeval.VISIBILITY_AND_STRING)
    lbl_1:


@Rule "TRAITOR ATTACKED AN INNOCENT: KNOCK DOWN AND KILL VICTIM AFTER A 5s DELAY TO PREVENT ELIMINATION VOICELINES"
@Event playerTookDamage
if S and attacker.R == 1 and eventPlayer.R != 1:
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 8)
    B = attacker
    eventPlayer.D = true
    eventPlayer.setDamageDealt(0)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 8)
    eventPlayer.setStatusEffect(null, Status.BURNING, 15)
    smallMessage(eventPlayer, "Traitor {} Eliminated You".format(attacker))
    attacker.S++
    if (len([player for player in getLivingPlayers(Team.ALL) if player.R == 0 and player.D != true])) == 0:
        goto lbl_0
    wait(5)
    lbl_0:
    kill(eventPlayer, null)
    eventPlayer.disableRespawn()


@Rule "INNOCENT ATTACKED ANOTHER INNOCENT: KILL ATTACKER AND CONFIRM VICTIM AS INNOCENT"
@Event playerDealtDamage
if S and victim.R != 1 and eventPlayer.R != 1:
    if eventPlayer.B and victim.B:
        return
    bigMessage(victim, "Oof")
    victim.setStatusEffect(null, Status.KNOCKED_DOWN, 3)
    victim.communicate(Comms.THANKS)
    eventPlayer.D = true
    victim.B = true
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 3)
    bigMessage(eventPlayer, "Oops - No Traitor")
    wait(2)
    kill(eventPlayer, null)


@Rule "INNOCENT aTTACKED A TRAITOR (CONFIRM ATTACKER AS INNOCENT)"
@Event playerDealtDamage
if S and eventPlayer.R != 1 and victim.R == 1:
    kill(victim, null)
    B = eventPlayer
    victim.D = true
    victim.disableRespawn()
    bigMessage(getPlayers(Team.ALL), "Traitor {} {} Eliminated".format(heroIcon(victim.getCurrentHero()), victim))
    eventPlayer.B = true
    eventPlayer.S++


@Rule "SHOW ALLIED TRAITORS"
@Event eachPlayer
if S and eventPlayer.R == 1:
    createInWorldText([i for i in M if i != eventPlayer], "Traitor {} {}".format(heroIcon(eventPlayer.getCurrentHero()), eventPlayer), eventPlayer, 1, Clip.NONE, Reeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.Z.append(getLastCreatedText())


@Rule "TRAITORS WIN (F = 1)"
@Event global
if S and (len([player for player in getLivingPlayers(Team.ALL) if player.R != 1 and player.D != true and player.hasSpawned()])) == 0 and getMatchTime() <= T - 10:
    F = 1


@Rule "INNOCENTS WIN (f = 0)"
@Event global
if S and len([player for player in getLivingPlayers(Team.ALL) if player.R == 1]) == 0:
    F = 0


@Rule "ROUND FINISHED (F): INCREMENT PLAYER SCORE FOR WINNERS, START NEW ROUND OR FINISH MATCH IF ROUND LIMIT REACHED"
@Event global
if S and F != -1:
    S = false
    pauseMatchTime()
    wait(1)
    if F != 1:
        goto lbl_0
    bigMessage(getPlayers(Team.ALL), "Traitors Win!")
    lbl_0:
    if F != 0:
        goto lbl_1
    bigMessage(getPlayers(Team.ALL), "Traitors Failed - Innocent Participants Win!")
    lbl_1:
    if R == C:
        goto lbl_2
    wait(2.5)
    bigMessage(getPlayers(Team.ALL), "Starting Next Round ...")
    wait(3)
    lbl_2:
    if R < C:
        goto lbl_3
    wait(1)
    enableMusic()
    declarePlayerVictory(sorted(getPlayers(Team.ALL), key=lambda player: player.S)[-1])
    wait(5)
    lbl_3:
    goToAssembleHeroes()
    wait(0.25)
    N = true


@Rule "UPDATE PLAYER SCORES"
@Event eachPlayer
if F != -1 and eventPlayer.S > eventPlayer.getScore():
    eventPlayer.setScore(eventPlayer.S)


@Rule "SHORTEN HERO ASSEMBLING TIME"
@Event global
if isAssemblingHeroes():
    unpauseMatchTime()
    setMatchTime(9)


@Rule "SHOW UI FOR TRAITORS"
@Event global
if S:
    bigMessage([player for player in getPlayers(Team.ALL) if player.R == 1], "Hunt Innocent Participants")
    hudText([player for player in getPlayers(Team.ALL) if player.R == 1], "Traitor", "Current Objective:", "Kill Innocent Participants", Position.TOP, 0, Color.RED, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "SHOW UI FOR INNOCENTS"
@Event global
if S:
    bigMessage([player for player in getPlayers(Team.ALL) if player.R == 0], "Survive")
    hudText([player for player in getPlayers(Team.ALL) if player.R == 0], "Innocent", "Current Objective:", "Survive And Kill Traitors", Position.TOP, 0, Color.BLUE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "SHOW UI FOR HUNTER"
@Event global
if S:
    bigMessage([player for player in getPlayers(Team.ALL) if player.R == 2], "Reveal And Hunt Traitors")
    hudText([player for player in getPlayers(Team.ALL) if player.R == 2], "Hunter", "Current Objective:", "Reveal And Hunt Traitors", Position.TOP, 0, Color.YELLOW, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "SHOW UI"
@Event global
if S:
    hudText(getPlayers(Team.ALL), null, null, "Round {} / {}".format(R, C), Vector.RIGHT, -1, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "(OVERTIME) MATCH TIME == 0 : 30S OVERTIME UNTIL INNOCENTS WILL WIN"
@Event global
if S and getMatchTime() == 0:
    destroyAllIcons()
    destroyAllInWorldText()
    bigMessage(getPlayers(Team.ALL), "Overtime")
    G = 30
    chase(G, 0, rate=1, Reeval.DESTINATION_AND_RATE)
    hudText(getPlayers(Team.ALL), "Overtime -> {}".format(G), null, null, Position.TOP, -2, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    J = true
    wait(30, behavior=Wait.ABORT_WHEN_FALSE)
    F = 0


@Rule "(OVERTIME) REVEAL ALL TRAITORS AND INNOCENTS"
@Event eachPlayer
if S and getMatchTime() == 0 and J and eventPlayer.isAlive() and eventPlayer.V:
    if eventPlayer.R != 1:
        goto lbl_0
    createIcon(getPlayers(Team.ALL), eventPlayer, Icon.WARNING, Reeval.VISIBILITY_AND_POSITION, Color.RED, true)
    createInWorldText(getPlayers(Team.ALL), "Traitor", eventPlayer, 1, Clip.NONE, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_0:
    if eventPlayer.R == 1:
        goto lbl_1
    createIcon(getPlayers(Team.ALL), eventPlayer, Icon.HALO, Reeval.VISIBILITY_AND_POSITION, Color.BLUE, true)
    createInWorldText(getPlayers(Team.ALL), "Innocent", eventPlayer, 1, Clip.NONE, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_1:
    eventPlayer.X.append(getLastCreatedEntity())
    eventPlayer.Z.append(getLastCreatedText())


@Rule "(SPRINT) ABILITY 1 KEY PRESSED: SET MOVEMENT SPEED TO 125% AND REDUCE STAMINA"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.ABILITY_1) and not eventPlayer.isCrouching() and eventPlayer.A > -100 and eventPlayer.getAltitude() <= 2:
    wait(0.05, behavior=Wait.ABORT_WHEN_FALSE)
    eventPlayer.setMoveSpeed(125)
    stopChasingVariable(eventPlayer.A)
    if eventPlayer.R == 1:
        goto lbl_0
    chase(eventPlayer.A, -100, rate=12, Reeval.NONE)
    lbl_0:
    if eventPlayer.R != 1:
        goto lbl_1
    chase(eventPlayer.A, -100, rate=8, Reeval.NONE)
    lbl_1:


@Rule "(SPRINT) ABILITY 1 KEY NOT PRESSED OR STAMINA == -100: SET MOVEMENT SPEED TO 100%"
@Event eachPlayer
if (not(eventPlayer.isHoldingButton(Button.ABILITY_1)) or eventPlayer.A == -100 or eventPlayer.isCrouching()):
    eventPlayer.setMoveSpeed(100)


@Rule "(SPRINT) SHOW STAMINA"
@Event eachPlayer
if eventPlayer.hasSpawned() and eventPlayer.isDead() != true:
    hudText(eventPlayer, "Run", "Use Ability 1", "Remaining: {}%".format(ceil(100 + eventPlayer.A)), Vector.LEFT, -1, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    eventPlayer.Z.append(getLastCreatedText())


@Rule "(SPRINT) ABILITY 1 KEY NOT PRESSED: REGENERATE STAMINA"
@Event eachPlayer
if (not(eventPlayer.isHoldingButton(Button.ABILITY_1)) or eventPlayer.isCrouching() or eventPlayer.getAltitude() > 2) and eventPlayer.A < 0:
    stopChasingVariable(eventPlayer.A)
    if eventPlayer.A > -100:
        goto lbl_0
    wait(3, behavior=Wait.ABORT_WHEN_FALSE)
    lbl_0:
    chase(eventPlayer.A, 0, rate=5, Reeval.NONE)


@Rule "(NEW PLAYER JOINED) PREVENT FROM JOINING THE CURRENT ROUND"
@Event eachPlayer
if S and eventPlayer.hasSpawned() and eventPlayer.V != true:
    if len([player for player in getPlayers(Team.ALL) if player.D]) != 0:
        goto lbl_0
    eventPlayer.V = true
    return
    lbl_0:
    eventPlayer.D = true
    eventPlayer.setStatusEffect(null, Status.ROOTED, 5)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 5)
    eventPlayer.setDamageDealt(0)
    bigMessage(eventPlayer, "Joining Next Round")
    wait(3)
    kill(eventPlayer, null)
    eventPlayer.disableRespawn()


@Rule "(PLAYER DIED) DISABLE RESPAWN, ENABLE DEATH SPECTATE"
@Event playerDied
if S:
    eventPlayer.D = true
    eventPlayer.disableRespawn()
    eventPlayer.enableDeathSpectateAllPlayers()
    eventPlayer.disableDeathSpectateTargetHud()
    eventPlayer.disableRespawn()


@Rule "(PLAYER DIED) DESTROY ALL PLAYER EFFECTS/ICONS/IN-WORLD TEXT - SHOW ROLE ON DEAD BODY"
@Event eachPlayer
if S and eventPlayer.D:
    do:
        if len(eventPlayer.I) >= len(eventPlayer.X):
            goto lbl_0
        destroyIcon(eventPlayer.X[eventPlayer.I])
        lbl_0:
        if len(eventPlayer.I) >= len(eventPlayer.Y):
            goto lbl_1
        destroyEffect(eventPlayer.Y[eventPlayer.I])
        lbl_1:
        if len(eventPlayer.I) >= len(eventPlayer.Z):
            goto lbl_2
        destroyInWorldText(eventPlayer.Z[eventPlayer.I])
        lbl_2:
        eventPlayer.I++
        wait(0.016)
    while eventPlayer.I < len(eventPlayer.X) or eventPlayer.I < len(eventPlayer.Y) or eventPlayer.I < len(eventPlayer.Z)
    eventPlayer.I = 0
    if eventPlayer.R != 0:
        goto lbl_3
    createInWorldText(getPlayers(Team.ALL), "Dead Innocent", eventPlayer, 0.6, Clip.SURFACES, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_3:
    if eventPlayer.R != 1:
        goto lbl_4
    createInWorldText(getPlayers(Team.ALL), "Dead Traitor", eventPlayer, 0.6, Clip.SURFACES, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_4:
    if eventPlayer.R != 2:
        goto lbl_5
    createInWorldText(getPlayers(Team.ALL), "Dead Hunter", eventPlayer, 0.6, Clip.SURFACES, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_5:
    eventPlayer.disableRespawn()


@Rule "(3rd person) START CAMERA"
@Event eachPlayer
if W and eventPlayer.getCurrentHero() in Q != true:
    eventPlayer.stopCamera()
    eventPlayer.setCamera(eventPlayer + worldVector(vect(-0.4, 0, 0), eventPlayer, Transform.ROTATION) + Vector.UP * 1.8 + eventPlayer.getFacingDirection() * -2.2, eventPlayer + eventPlayer.getFacingDirection() * 1000, 50)


@Rule "(3rd person) CREATE ARRAY (Q) WITH LARGE HEROES FOR WHICH A CAMERA OFFSET SHOULD BE APPLIED"
@Event global
if W:
    Q.append(Hero.ROADHOG)
    Q.append(Hero.ORISA)
    Q.append(Hero.HAMMOND)
    Q.append(Hero.WINSTON)


@Rule "(3rd person) OFFSET camera FOR HEROES IN ARRAY Q"
@Event eachPlayer
if W and eventPlayer.getCurrentHero() in Q:
    eventPlayer.stopCamera()
    eventPlayer.setCamera(eventPlayer + worldVector(vect(-1, 0, 0), eventPlayer, Transform.ROTATION) + Vector.UP * 2.5 + eventPlayer.getFacingDirection() * -3, eventPlayer + eventPlayer.getFacingDirection() * 1000, 50)


@Rule "(DISABLE PASSIVES) PLAYER IN AIR/ON WALL: DISALLOW JUMP"
@Event eachPlayer
if (eventPlayer.isOnWall() or not(eventPlayer.isOnGround())):
    eventPlayer.disallowButton(Button.JUMP)


@Rule "(DISABLE PASSIVES) PLAYER ON GROUND: ALLOW JUMP"
@Event eachPlayer
if eventPlayer.isOnGround():
    eventPlayer.allowButton(Button.JUMP)


@Rule "(DISABLE PASSIVES) BAPTISTE: DISALLOW JUMP WHILE CROUCHING (DISABLE PASSIVE ABILITY EXO BOOTS)"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isCrouching():
    eventPlayer.disallowButton(Button.JUMP)


@Rule "(DISABLE PASSIVES) BAPTISTE: ALLOW JUMP IF NOT CROUCHING"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isCrouching() != true:
    wait(1, behavior=Wait.ABORT_WHEN_FALSE)
    eventPlayer.allowButton(Button.JUMP)


@Rule "PLAYER CONFIRMED AS INNOCENT: CREATE EFFECT/In-WORLD TEXT"
@Event eachPlayer
if S and eventPlayer.B:
    createEffect(getPlayers(Team.ALL), Effect.SPARKLES, Color.BLUE, eventPlayer, 0.5, Reeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Y.append(getLastCreatedEntity())
    createInWorldText(getPlayers(Team.ALL), "Innocent", eventPlayer, 0.6, Clip.SURFACES, Reeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.Z.append(getLastCreatedText())


@Rule "slow motion ON LAST KILL"
@Event global
if isGameInProgress() and F != -1:
    for player in getPlayers(Team.ALL):
        player.setCamera(B + worldVector(vect(-0.4, 0, 0), B, Transform.ROTATION) + Vector.UP * 1.8 + [player2.getFacingDirection() for player2 in B] * -2.2, B + [player2.getFacingDirection() for player2 in B] * 1000, 0)
    setSlowMotion(10)
    wait(0.5)
    setSlowMotion(100)
    for player in getPlayers(Team.ALL):
        player.stopCamera()


@Rule "PREPARATION PHASE COUNTDOWN"
@Event global
if isAssemblingHeroes() != true and N:
    L = P
    chase(L, 0, rate=1, Reeval.DESTINATION_AND_RATE)


@Rule "(TRAITOR STEALTH) ACTIVATE"
@Event eachPlayer
if H and eventPlayer.R == 1 and eventPlayer.isCrouching() and eventPlayer.isHoldingButton(Button.ABILITY_2) and eventPlayer.H != true and eventPlayer.F == 0:
    eventPlayer.H = true
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setDamageDealt(0)
    eventPlayer.E = 30
    chase(eventPlayer.E, 0, rate=1, Reeval.DESTINATION_AND_RATE)
    createEffect(eventPlayer, Effect.GOOD_AURA_SOUND, Color.WHITE, eventPlayer, 30, Reeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Q[0] = getLastCreatedEntity()
    createEffect([player for player in getPlayers(Team.ALL) if player.isDead() or player.R == 1], Effect.SPHERE, Color.PURPLE, eventPlayer, 1.5, Reeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Q[1] = getLastCreatedEntity()
    hudText(eventPlayer, "Invisible ({})".format(ceil(eventPlayer.E)), null, null, Position.TOP, 1, Color.PURPLE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    eventPlayer.Q[2] = getLastCreatedText()
    hudText(eventPlayer, "No Damage", null, null, Position.TOP, 2, Color.YELLOW, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    eventPlayer.Q[3] = getLastCreatedText()
    createEffect([player for player in getPlayersInRadius(eventPlayer, 15, Team.ALL, LosCheck.OFF) if player.R == 2 and player.isCrouching()], Effect.BAD_AURA, Color.RED, eventPlayer.getPosition(), 0.5, Reeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Q[4] = getLastCreatedEntity()
    hudText([player for player in getPlayersInRadius(eventPlayer, 15, Team.ALL, LosCheck.OFF) if player.R == 2], "Traitor Near!", null, null, Position.TOP, 3, Color.RED, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    eventPlayer.Q[5] = getLastCreatedText()
    hudText(null, null, null, null, Position.TOP, 3, Color.RED, Color.WHITE, Color.WHITE, Reeval.STRING)
    eventPlayer.Q[6] = getLastCreatedText()


@Rule "(TRAITOR STEALTH) DEACTIVATE"
@Event eachPlayer
if H and eventPlayer.R == 1 and eventPlayer.H and (not(eventPlayer.isHoldingButton(Button.CROUCH)) or eventPlayer.E == 0):
    eventPlayer.F = 20
    eventPlayer.H = false
    stopChasingVariable(eventPlayer.E)
    eventPlayer.setInvisibility(Reeval.NONE)
    destroyEffect(eventPlayer.Q[0])
    destroyEffect(eventPlayer.Q[1])
    destroyEffect(eventPlayer.Q[4])
    destroyHudText(eventPlayer.Q[2])
    if eventPlayer.H:
        goto lbl_0
    chase(eventPlayer.F, 0, rate=1, Reeval.DESTINATION_AND_RATE)
    destroyHudText(eventPlayer.Q[5])
    lbl_0:
    destroyHudText(eventPlayer.Q[6])
    wait(3)
    eventPlayer.setDamageDealt(100)
    destroyHudText(eventPlayer.Q[3])


@Rule "(TRAITOR STEALTH) SHOW COOLDOWN"
@Event eachPlayer
if H and eventPlayer.R == 1:
    hudText(eventPlayer, "Invisible", "Use Ability 2", "Cooldown -> {}".format(ceil(eventPlayer.F)), Vector.LEFT, 3, Color.WHITE, Color.WHITE, Color.YELLOW, Reeval.VISIBILITY_AND_STRING)


@Rule "(TRAITOR COMMS) GROUP UP: COME HERE!"
@Event eachPlayer
if eventPlayer.R == 1 and eventPlayer.isCommunicating(Comms.GROUP_UP):
    smallMessage(M, "{}: Come Here!".format(eventPlayer))


@Rule "(TRAITOR COMMS) I NEED HEALING: HELP!"
@Event eachPlayer
if eventPlayer.R == 1 and eventPlayer.isCommunicating(Comms.NEED_HEALING):
    smallMessage(M, "{}: Help!".format(eventPlayer))


@Rule "(TRAITOR COMMS) ACKNOWLEDGE: YES!"
@Event eachPlayer
if eventPlayer.R == 1 and eventPlayer.isCommunicating(Comms.ACKNOWLEDGE):
    smallMessage(M, "{}: Yes!".format(eventPlayer))


@Rule "(TRAITOR COMMS) PRESS INTERACT KEY TO SET NEW PING"
@Event eachPlayer
if eventPlayer.R == 1 and eventPlayer.isHoldingButton(Button.INTERACT):
    Z = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, include=getPlayers(Team.ALL), exclude=eventPlayer, includePlayerObjects=true).getHitPosition()
    V = M


@Rule "(TRAITOR COMMS) CREATE ICON/TEXT FOR PING"
@Event global
if S:
    createIcon(V, Z, Icon.ARROW_DOWN, Reeval.VISIBILITY_AND_POSITION, Color.GREEN, false)
    createInWorldText(V, "Attack / Come Here", Z, 0.8, Clip.NONE, Reeval.VISIBILITY_POSITION_AND_STRING)


@Rule "(TRAITOR COMMS) HOLD INTERACT KEY TO HIDE PING"
@Event eachPlayer
if eventPlayer.R == 1 and eventPlayer.isHoldingButton(Button.INTERACT):
    wait(0.5, behavior=Wait.ABORT_WHEN_FALSE)
    V = null


@Rule "(SUPERJUMP)  SHOW CHARGE AND COOLDOWN"
@Event eachPlayer
if E and eventPlayer.hasSpawned():
    hudText(eventPlayer, "Jump", "Cooldown -> {}".format(ceil(eventPlayer.C)), "Load: {}%".format(ceil(eventPlayer.J * 5)), Vector.LEFT, 0, Color.WHITE, Color.YELLOW, Color.GREEN, Reeval.VISIBILITY_AND_STRING)
    eventPlayer.Z.append(getLastCreatedText())


@Rule "(SUPERJUMP) PLAYER IS CROUCHING: CHARGE SUPERJUMP"
@Event eachPlayer
if E and eventPlayer.isHoldingButton(Button.CROUCH) and eventPlayer.isOnGround() and eventPlayer.C == 0:
    if eventPlayer.J == 0:
        goto lbl_0
    stopChasingVariable(eventPlayer.J)
    eventPlayer.J = 0
    lbl_0:
    chase(eventPlayer.J, 20, duration=2, Reeval.NONE)


@Rule "(SUPERJUMP) PLAYER PRESSED JUMP: ACTIVATE SUPERJUMP"
@Event eachPlayer
if E and eventPlayer.J > 0 and eventPlayer.isHoldingButton(Button.JUMP) and eventPlayer.G:
    eventPlayer.applyImpulse(vect(0, 1, 0), eventPlayer.J, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    stopChasingVariable(eventPlayer.J)
    eventPlayer.J = 0
    playEffect(eventPlayer, Effect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 40)
    eventPlayer.C = 12
    chase(eventPlayer.C, 0, rate=1, Reeval.DESTINATION_AND_RATE)


@Rule "(SUPERJUMP) PLAYER IS NOT CROUCHING: RESET CHARGE OF SUPERJUMP AFTER 1s"
@Event eachPlayer
if E and not(eventPlayer.isHoldingButton(Button.CROUCH)) and eventPlayer.J != 0:
    stopChasingVariable(eventPlayer.J)
    wait(1, behavior=Wait.ABORT_WHEN_FALSE)
    eventPlayer.J = 0


@Rule "(SUPERJUMP) PLAYER ON GROUND = SET PLAYER VARIABLE \"G\" TO \"TRUE\""
@Event eachPlayer
if eventPlayer.isOnGround():
    eventPlayer.G = true


@Rule "(SUPERJUMP) PLAYER NOT ON GROUND = SET PLAYER VARIABLE \"G\" TO \"FALSE\" AFTER A SHORT DELAY"
@Event eachPlayer
if eventPlayer.isOnGround() != true:
    wait(0.02, behavior=Wait.ABORT_WHEN_FALSE)
    eventPlayer.G = false


@Rule "GIVE ALL ALIVE PLAYERS +1 SCORE"
@Event eachPlayer
if F != -1 and isGameInProgress() and eventPlayer.isAlive():
    eventPlayer.S = eventPlayer.S + 1


@Rule "ENABLE PUSH FOR TRAITORS BEGINNING ROUND"
@Event eachPlayer
if S:
    eventPlayer.P = false
    destroyInWorldText(eventPlayer.K)


@Rule "TRAITOR PUSH"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and not eventPlayer.P and eventPlayer.R == 1 and eventPlayer.isAlive() and distance(eventPlayer, eventPlayer.getPlayerClosestToReticle(Team.ALL)) < 25:
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.setStatusEffect(eventPlayer, Status.ROOTED, 1)
    playEffect(getPlayers(Team.ALL), Effect.GOOD_PICKUP_EFFECT, Color.RED, eventPlayer.getPlayerClosestToReticle(Team.ALL), 25)
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.applyImpulse(Vector.UP, 25, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.applyImpulse(directionTowards(eventPlayer, eventPlayer.getPlayerClosestToReticle(Team.ALL)), 25, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.U = eventPlayer.getPlayerClosestToReticle(Team.ALL)
    eventPlayer.P = true
    bigMessage(eventPlayer, "Ability Deliver")
    wait(5)
    if not [player.isAlive() for player in eventPlayer.U]:
        goto lbl_0
    eventPlayer.S = eventPlayer.S + 1
    lbl_0:


@Rule "ANNOUNCE POINT"
@Event global
if S:
    bigMessage(getPlayers(Team.ALL), "Alive = Point")
    wait(3)


@Rule "HUNTER FREEZE"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and not eventPlayer.P and eventPlayer.R == 2 and eventPlayer.isAlive():
    eventPlayer.P = true
    bigMessage(eventPlayer, "Ability Deliver")
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.setStatusEffect(eventPlayer, Status.FROZEN, 1.5)


@Rule "DISPLAY HUNTER"
@Event eachPlayer
if S and eventPlayer.R == 2:
    createInWorldText(getPlayers(Team.ALL), "Hunter", eventPlayer, 1, Clip.SURFACES, Reeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.K = getLastCreatedText()


@Rule "(OVERTIME) 1v1 Reveal"
@Event eachPlayer
if eventPlayer.isAlive() and len(getLivingPlayers(Team.ALL)) == 2:
    if eventPlayer.R != 1:
        goto lbl_0
    createIcon(getPlayers(Team.ALL), eventPlayer, Icon.WARNING, Reeval.VISIBILITY_AND_POSITION, Color.RED, true)
    createInWorldText(getPlayers(Team.ALL), "Traitor", eventPlayer, 1, Clip.NONE, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_0:
    if eventPlayer.R == 1:
        goto lbl_1
    createIcon(getPlayers(Team.ALL), eventPlayer, Icon.HALO, Reeval.VISIBILITY_AND_POSITION, Color.BLUE, true)
    createInWorldText(getPlayers(Team.ALL), "Innocent", eventPlayer, 1, Clip.NONE, Reeval.VISIBILITY_POSITION_AND_STRING)
    lbl_1:
    eventPlayer.X.append(getLastCreatedEntity())
    eventPlayer.Z.append(getLastCreatedText())


@Rule "SHOW UI FOR INNOCENTS"
@Event global
if S:
    bigMessage([player for player in getPlayers(Team.ALL) if player.R == 3], "Die")
    hudText([player for player in getPlayers(Team.ALL) if player.R == 3], "Innocent", "Current Objective:", "Die And Avoiding Traitors", Position.TOP, 0, Color.BLUE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "SHOW UI FOR HEALER"
@Event global
if S:
    bigMessage([player for player in getPlayers(Team.ALL) if player.R == 3], "Survive")
    hudText([player for player in getPlayers(Team.ALL) if player.R == 3], "Healer", "Current Objective:", "Survive And Resurrect Dead", Position.TOP, 0, Color.GREEN, Color.WHITE, Color.PURPLE, Reeval.VISIBILITY_AND_STRING)


@Rule "HEALER RESURRECT"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and not eventPlayer.P and eventPlayer.R == 3 and [player.isDead() for player in eventPlayer.getPlayerClosestToReticle(Team.ALL)] and eventPlayer.isAlive() and distance(eventPlayer, eventPlayer.getPlayerClosestToReticle(Team.ALL)) < 15:
    eventPlayer.P = true
    bigMessage(eventPlayer, "Participant Resurrected")
    eventPlayer.U = eventPlayer.getPlayerClosestToReticle(Team.ALL)
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.resurrect()
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.setStatusEffect(null, Status.FROZEN, 5)
    eventPlayer.setStatusEffect(null, Status.FROZEN, 5)
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.setStatusEffect(null, Status.HACKED, 5)
    eventPlayer.setStatusEffect(null, Status.HACKED, 5)
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.D = false
    eventPlayer.B = true
    for player in eventPlayer.getPlayerClosestToReticle(Team.ALL):
        player.setDamageDealt(10)
    wait(5)
    if [player.isDead() for player in eventPlayer.U]:
        goto lbl_0
    eventPlayer.S = eventPlayer.S + 1
    lbl_0:


@Rule "Rule 66"
@Event eachPlayer
if S and eventPlayer.R == 3:
    hudText(eventPlayer, "Resurrect", "Locked", eventPlayer.P, Vector.LEFT, 0, Color.GREEN, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "Rule 66"
@Event eachPlayer
if S and eventPlayer.R == 2:
    hudText(eventPlayer, "Freeze", "Locked", eventPlayer.P, Vector.LEFT, 0, Color.GREEN, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "Rule 66"
@Event eachPlayer
if S and eventPlayer.R == 1:
    hudText(eventPlayer, "Fly", "Locked", eventPlayer.P, Vector.LEFT, 0, Color.GREEN, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "Rule 68"
@Event global
if len(getLivingPlayers(Team.ALL)) == 2 and getMatchTime() > 60 and isGameInProgress():
    setMatchTime(60)


