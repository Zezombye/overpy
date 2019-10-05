@Rule "----------Mystery Box----------"
@Event global


@Rule "B (Box Positions)"
@Event global
B[0] = vect(-77.78, 0.4, -43.43)
B[1] = vect(-33.438, 0.692, -13.962)
B[2] = vect(21.102, 6.639, -37.394)
B[3] = vect(-79.092, 6.612, -16.383)
B[4] = vect(-121.863, 1.683, 32.39)
L[6] = vect(1000, 1000, 1000)


@Rule "Set B6 to 1m Above The Current Spot"
@Event global
B[6] = B[L] + vect(0, 1, 0)


@Rule "M (Box Effects)"
@Event global
if L == 0:
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.SKY_BLUE, B[L], 0.4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    B[7] = getLastCreatedEntity()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[0] + vect(0, 0.25, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[0] + vect(1, 0.25, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[0] + vect(2, 0.25, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[0] + vect(-1, 0.25, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[0] + vect(-2, 0.25, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[1] + vect(0, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[1] + vect(0, 0, 1), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[1] + vect(0, 0, 2), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[1] + vect(0, 0, -1), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[1] + vect(0, 0, -2), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[2] + vect(0, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[2] + vect(0, 0, 1), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[2] + vect(0, 0, 2), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[2] + vect(0, 0, -1), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[2] + vect(0, 0, -2), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[3] + vect(0, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[3] + vect(1, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[3] + vect(2, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[3] + vect(-1, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[3] + vect(-2, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[4] + vect(0, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[4] + vect(1, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[4] + vect(2, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[4] + vect(-1, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.SKY_BLUE, B[4] + vect(-2, 0, 0), 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "H - Hero Pool (In Wall Buy Order)"
@Event global
H[0] = Hero.TORBJORN
H[1] = Hero.ASHE
H[2] = Hero.ANA
H[3] = Hero.GENJI
H[4] = Hero.ZENYATTA
H[5] = Hero.BAPTISTE
H[6] = Hero.HANZO
H[7] = Hero.JUNKRAT
H[8] = Hero.SOMBRA
H[9] = Hero.MCCREE
H[10] = Hero.ZARYA
H[11] = Hero.MOIRA
H[12] = Hero.REAPER
H[13] = Hero.WIDOWMAKER
H[14] = Hero.SOLDIER


@Rule "Use Box"
@Event eachPlayer
@Team 1
if eventPlayer.isHoldingButton(Button.INTERACT) and distance(eventPlayer, B[L]) <= 2 and eventPlayer.B == 0 and eventPlayer.P >= 950:
    B[5]++
    Z = B[L]
    eventPlayer.B = 1
    eventPlayer.P -= 950
    chase(Z, B[6], rate=1, ChaseReeval.DESTINATION_AND_RATE)
    wait(1)
    stopChasingVariable(Z)
    wait(4)
    eventPlayer.B = 2
    wait(5, Wait.ABORT_WHEN_FALSE)
    chase(Z, B[L], rate=0.5, ChaseReeval.DESTINATION_AND_RATE)
    wait(2, Wait.ABORT_WHEN_FALSE)
    stopChasingVariable(Z)
    destroyInWorldText(J)
    eventPlayer.B = 0


@Rule "Hero Randomisation"
@Event eachPlayer
@Team 1
if eventPlayer.B == 1:
    do:
        eventPlayer.R = random.choice(H).exclude(eventPlayer.Q.slice(0, 1))
        wait(0.25)
    while RULE_CONDITION


@Rule "Box Starts Spinning Icons"
@Event eachPlayer
@Team 1
if eventPlayer.B == 1:
    createInWorldText(getAllPlayers(), heroIcon(eventPlayer.R), Z, 4, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.DEFAULT)
    J[0] = getLastCreatedText()


@Rule "Select Hero"
@Event eachPlayer
@Team 1
if eventPlayer.isHoldingButton(Button.INTERACT) and distance(eventPlayer, B[L]) <= 2 and eventPlayer.B == 2:
    wait()
    eventPlayer.startForcingHero(eventPlayer.R)
    destroyInWorldText(J[0])
    wait(0.25)
    eventPlayer.B = 0


@Rule "Move Box Randomly"
@Event eachPlayer
@Team 1
if B[5] == random.randint(5, 15):
    wait(5)
    eventPlayer.B = 3
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, B[L], 25)
    destroyInWorldText(J[0])
    createIcon(getAllPlayers(), B[6], Icon.NO, IconReeval.VISIBILITY_AND_POSITION, Color.WHITE, false)
    J[1] = getLastCreatedText()
    destroyEffect(B[7])
    wait(3)
    L = 6
    destroyIcon(J[1])
    B[5] = 0
    eventPlayer.B = 0
    wait(10)
    L = random.randint(0, 4)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.SKY_BLUE, B[L], 0.4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    B[7] = getLastCreatedEntity()


