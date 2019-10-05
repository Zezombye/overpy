@Rule "___________________________________________________Welcome to The Fun Emporium!"
@Event global


@Rule "__________________________Made By: RocketRaider_185 (PS4), Cookobb (Reddit/Discord), tigerroc_185B (YouTube)"
@Event global


@Rule ">>>>> Respawn Reset"
@Event eachPlayer
if eventPlayer.isInSpawnRoom():
    wait(0.25)
    eventPlayer.clearStatusEffect(Status.HACKED)
    eventPlayer.stopAllHoT()
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.KNOCKED_DOWN)
    eventPlayer.clearStatusEffect(Status.ASLEEP)
    eventPlayer.clearStatusEffect(Status.FROZEN)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.clearStatusEffect(Status.INVINCIBLE)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.clearStatusEffect(Status.STUNNED)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setProjectileGravity(100)
    eventPlayer.setHealingDealt(100)
    eventPlayer.setHealingReceived(100)
    eventPlayer.setDamageReceived(100)
    eventPlayer.setDamageDealt(100)
    eventPlayer.setGravity(100)
    eventPlayer.stopCamera()
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.stopAllDoT()
    eventPlayer.setAimSpeed(100)
    eventPlayer.stopFacing()
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setInvisibility(Invis.NONE)
    destroyHudText(eventPlayer.T[0])
    eventPlayer.allowButton(Button.JUMP)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    destroyIcon(eventPlayer)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setMaxHealth(100)
    destroyEffect(eventPlayer)
    stopAllDamageModifications()


@Rule "Hero assemble time"
@Event eachPlayer
if isAssemblingHeroes():
    setMatchTime(15)
    wait(2.5, Wait.ABORT_WHEN_FALSE)


@Rule "Respawn rate"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.MCCREE:
    eventPlayer.setRespawnTime(15.5)


@Rule "If on fire"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.BURNING) and eventPlayer.getCurrentHero() != Hero.BASTION:
    do:
        createEffect(getAllPlayers(), Effect.SPARKLES, Color.RED, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(3)
        destroyAllEffects()
    while RULE_CONDITION


@Rule "================================================== Ana =================================================="
@Event eachPlayer
@Hero ana
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setPrimaryFireEnabled(false)
        destroyHudText(eventPlayer.T[1])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        eventPlayer.setDamageDealt(1000)
        wait(5)
    while true


@Rule "##### NOT HUD (ana)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.ANA:
    destroyHudText(eventPlayer.T[1])


@Rule "##### SPAWN HUD (ana)"
@Event eachPlayer
@Hero ana
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[1] = getLastCreatedText()


@Rule "Ana grenade speed in effect"
@Event eachPlayer
@Hero ana
if not eventPlayer.isInSpawnRoom():
    for player in getPlayersOnHero(Hero.ANA, Team.ALL):
        player.setProjectileSpeed(100 - 99)
    for player in getPlayersOnHero(Hero.ANA, Team.ALL):
        player.setProjectileGravity(abs(0))


@Rule "BOOSTED NANO | Ana ult activate"
@Event eachPlayer
@Hero ana
if not eventPlayer.isInSpawnRoom() and eventPlayer.isUsingUltimate() and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS():
    for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam()):
        player.C[3] = true


@Rule "BOOSTED NANO | Ana ult effect (on ally)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[3]:
    createEffect(getAllPlayers(), Effect.SPARKLES, Color.BLUE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 8)
    eventPlayer.setDamageDealt(1500)
    wait(8)
    destroyEffect(getLastCreatedEntity())
    eventPlayer.setDamageDealt(100)
    eventPlayer.C[3] = false


@Rule "================================================== Ashe =================================================="
@Event eachPlayer
@Hero ashe
if teamHasHero(Hero.ASHE, Team.ALL) and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(65)
        eventPlayer.setMoveSpeed(90)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "Ashe damage effect"
@Event playerDealtDamage
@Hero ashe
if not eventPlayer.isInSpawnRoom() and eventPlayer.isFiringPrimaryFire():
    bigMessage(victim, "{} Sleep Damage".format(Hero.ASHE))
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    victim.startDoT(attacker, 2, 25)
    victim.setStatusEffect(attacker, Status.ASLEEP, 2)
    wait(1)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    destroyAllEffects()
    eventPlayer.clearStatusEffect(Status.ASLEEP)
    victim.stopAllDoT()
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    victim.startDoT(attacker, 2, 25)
    victim.setStatusEffect(attacker, Status.ASLEEP, 2)
    wait(1)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.GREEN, victim, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    destroyAllEffects()
    eventPlayer.clearStatusEffect(Status.ASLEEP)
    victim.stopAllDoT()


@Rule "================================================== Bastion =================================================="
@Event eachPlayer
@Hero bastion
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setProjectileSpeed(80)
        eventPlayer.setProjectileGravity(10000)
        eventPlayer.setGravity(250)
        eventPlayer.setMoveSpeed(85)
        eventPlayer.setDamageDealt(125)
        eventPlayer.setDamageReceived(150)
        eventPlayer.disallowButton(Button.JUMP)
        eventPlayer.setAimSpeed(150)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        destroyHudText(eventPlayer.T[47])
        destroyHudText(eventPlayer.T[48])
        wait(5)
    while true


@Rule "Fix for bastion mercy res"
@Event eachPlayer
@Hero bastion
if eventPlayer.isAlive() and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(5)
    while true


@Rule "##### NOT HUD (bastion)"
@Event eachPlayer
destroyHudText(eventPlayer.T[47])
destroyHudText(eventPlayer.T[48])
destroyHudText(eventPlayer.T[49])
destroyHudText(eventPlayer.T[50])


@Rule "##### SPAWN HUD (bastion)"
@Event eachPlayer
@Hero bastion
if eventPlayer.isInSpawnRoom():
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[47] = getLastCreatedText()
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[48] = getLastCreatedText()


@Rule "CAMERA bastion"
@Event eachPlayer
@Hero bastion
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setCamera(eventPlayer + worldVector(vect(-0.1, 1, -2), eventPlayer, Transform.ROTATION) + Vector.UP * 1.25 + eventPlayer.getFacingDirection() * -1, eventPlayer + eventPlayer.getFacingDirection() * 60, 0)
        wait(0.25)
    while RULE_CONDITION
    eventPlayer.stopCamera()


@Rule "FULL BATTERY | Bastion secondary activate"
@Event eachPlayer
@Hero bastion
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[41] = true
    destroyHudText(eventPlayer.T[50])
    eventPlayer.E = 60
    chase(eventPlayer.E, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Extreme Attack".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.E, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[50] = getLastCreatedText()
    wait(eventPlayer.E)
    destroyHudText(eventPlayer.T[50])
    hudHeader(eventPlayer, "{} Attack Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[50] = getLastCreatedText()


@Rule "FULL BATTERY | Bastion secondary effect (on self)"
@Event eachPlayer
@Hero bastion
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[41]:
    destroyHudText(eventPlayer.T[50])
    eventPlayer.C[41] = false
    eventPlayer.setStatusEffect(null, Status.BURNING, 10)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.GREEN, eventPlayer, 0.5)
    bigMessage(eventPlayer, "Extreme Attack")
    eventPlayer.setProjectileSpeed(300)
    eventPlayer.setMoveSpeed(130)
    eventPlayer.setDamageDealt(150)
    eventPlayer.setDamageReceived(125)
    wait(10)
    eventPlayer.setProjectileSpeed(80)
    eventPlayer.setMoveSpeed(85)
    eventPlayer.setDamageDealt(125)
    eventPlayer.setDamageReceived(150)
    bigMessage(eventPlayer, "Extreme Attack Over")


@Rule "Critical attack | Bastion ability 1 activate"
@Event eachPlayer
@Hero bastion
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[40] = true
    destroyHudText(eventPlayer.T[49])
    eventPlayer.Z = 20
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Critical Attack".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[49] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[49])
    hudHeader(eventPlayer, "{} Critical Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[49] = getLastCreatedText()


@Rule "Critical attack | Bastion ability 1 effect (on self)"
@Event eachPlayer
@Hero bastion
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[40]:
    bigMessage(eventPlayer, "Critical Attack")
    eventPlayer.setStatusEffect(null, Status.ROOTED, 3)
    eventPlayer.C[40] = false
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.setProjectileSpeed(10000)
    eventPlayer.setDamageDealt(1000)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.RED, eventPlayer, 1.25)
    smallMessage(eventPlayer, 3)
    wait(1)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.RED, eventPlayer, 1.25)
    smallMessage(eventPlayer, 2)
    wait(1)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.GREEN, eventPlayer, 1.25)
    smallMessage(eventPlayer, 1)
    wait(1)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(2)
    eventPlayer.setDamageDealt(125)
    eventPlayer.setProjectileSpeed(80)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


@Rule "================================================== Baptiste =================================================="
@Event eachPlayer
@Hero baptiste
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setHealingReceived(200)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setDamageReceived(85)
        eventPlayer.setDamageDealt(155)
        destroyHudText(eventPlayer.T[51])
        destroyHudText(eventPlayer.T[52])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (baptiste)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.BAPTISTE:
    destroyHudText(eventPlayer.T[51])
    destroyHudText(eventPlayer.T[52])
    destroyHudText(eventPlayer.T[53])
    destroyHudText(eventPlayer.T[54])
    destroyHudText(eventPlayer.T[55])
    destroyHudText(eventPlayer.T[56])
    destroyHudText(eventPlayer.T[57])
    destroyHudText(eventPlayer.T[58])
    destroyHudText(eventPlayer.T[59])
    destroyHudText(eventPlayer.T[60])
    destroyHudText(eventPlayer.T[61])


@Rule "##### SPAWN HUD (baptiste)"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[52] = getLastCreatedText()
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[51] = getLastCreatedText()


@Rule "Baptiste HUD"
@Event eachPlayer
@Hero baptiste
hudHeader(eventPlayer, "{} Oof Hunter".format(eventPlayer), Position.TOP, 1, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.T[53] = getLastCreatedText()
hudSubtext(eventPlayer, heroIcon(eventPlayer.K), Position.TOP, 2, Color.YELLOW, Reeval.STRING)
eventPlayer.T[54] = getLastCreatedText()
hudHeader(eventPlayer, "Distance: {}".format(distance(eventPlayer, eventPlayer.L)), Position.TOP, 4, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.T[55] = getLastCreatedText()
hudHeader(eventPlayer, "Threat Level: {}".format(eventPlayer.I), Position.TOP, 5, Color.YELLOW, Reeval.STRING)
eventPlayer.T[56] = getLastCreatedText()
hudHeader(eventPlayer, "Find", Position.TOP, 6, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.T[57] = getLastCreatedText()
hudHeader(eventPlayer, "Hunt", Position.TOP, 7, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.T[58] = getLastCreatedText()
hudHeader(eventPlayer, "Eliminate", Position.TOP, 99, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.T[59] = getLastCreatedText()


@Rule "BOUNTY | Set next enemy if"
@Event eachPlayer
@Hero baptiste
if (eventPlayer.L == 0 or not(entityExists(eventPlayer.L)) or [player.getCurrentHero() for player in eventPlayer.L] == Hero.SOMBRA):
    do:
        wait(0.25)
        eventPlayer.L = random.choice(getLivingPlayers(getOppositeTeam(eventPlayer.getTeam())))
    while RULE_CONDITION


@Rule "BOUNTY | Set variables"
@Event eachPlayer
@Hero baptiste
if eventPlayer.hasSpawned():
    eventPlayer.I = 0
    eventPlayer.L = random.choice(getLivingPlayers(getOppositeTeam(eventPlayer.getTeam())))


@Rule "BOUNTY | increase effects on kill"
@Event playerDealtFinalBlow
@Hero baptiste
if victim == eventPlayer.L:
    eventPlayer.I++
    eventPlayer.L = random.choice(getLivingPlayers(getOppositeTeam(eventPlayer.getTeam())))


@Rule "SHUFFLE | Bap secondary activate"
@Event eachPlayer
@Hero baptiste
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[31] = true
    destroyHudText(eventPlayer.T[61])
    eventPlayer.Z = 15
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Shuffle Forward".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[61] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[61])
    hudHeader(eventPlayer, "{} Shuffle Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[61] = getLastCreatedText()


@Rule "SHUFFLE | Bap secondary effect (on self)"
@Event eachPlayer
@Hero baptiste
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[31]:
    eventPlayer.disallowButton(Button.JUMP)
    eventPlayer.applyImpulse(Vector.FORWARD, 10, Relativity.TO_PLAYER, Impulse.INCORPORATE_CONTRARY_MOTION)
    eventPlayer.startAcceleration(Vector.FORWARD, 125, 10000, Relativity.TO_PLAYER, AccelReeval.DIRECTION_RATE_AND_MAX_SPEED)
    eventPlayer.allowButton(Button.JUMP)
    wait(0.25)
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 1.6)
    wait(1.6)
    eventPlayer.stopAcceleration()
    eventPlayer.C[31] = false


@Rule "SHUFFLE | ADDITIONAL"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isInAir():
    eventPlayer.stopAcceleration()


@Rule "JETPACK ACTIVATE"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isHoldingButton(Button.JUMP):
    eventPlayer.P = 1
    createEffect(getAllPlayers(), Effect.SMOKE_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 1500, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.M = getLastCreatedEntity()
    eventPlayer.setStatusEffect(null, Status.BURNING, 10000)
    eventPlayer.startDoT(null, 9999, 10)


@Rule "JETPACK DEACTIVATE"
@Event eachPlayer
@Hero baptiste
if not eventPlayer.isHoldingButton(Button.JUMP):
    eventPlayer.P = 0
    destroyEffect(eventPlayer.M)
    eventPlayer.clearStatusEffect(Status.BURNING)
    stopDoT(getLastDoT())


@Rule "JETPACK UP"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isHoldingButton(Button.JUMP):
    do:
        eventPlayer.applyImpulse(Vector.UP, 0.33, Relativity.TO_PLAYER, Impulse.INCORPORATE_CONTRARY_MOTION)
        wait()
    while RULE_CONDITION


@Rule "JETPACK FORWARD"
@Event eachPlayer
@Hero baptiste
if eventPlayer.getThrottle() == vect(0, 0, 1).z:
    do:
        eventPlayer.applyImpulse(Vector.FORWARD, 0.3, Relativity.TO_PLAYER, Impulse.INCORPORATE_CONTRARY_MOTION)
        wait()
    while RULE_CONDITION


@Rule "EFFECT"
@Event eachPlayer
@Hero baptiste
if eventPlayer.P == 1:
    do:
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, eventPlayer.getEyePosition() + (angleToDirection(eventPlayer.getHorizontalFacingAngle() + 0, 0)) * -1, 0.3)
        wait(0.07)
    while RULE_CONDITION


@Rule "Off ground"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isInAir():
    eventPlayer.setAbility1Enabled(false)


@Rule "On ground"
@Event eachPlayer
@Hero baptiste
if not eventPlayer.isInAir():
    eventPlayer.setAbility1Enabled(true)


@Rule "REVEAL | Bap ability 2 activate"
@Event eachPlayer
@Hero baptiste
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in getPlayersInRadius(eventPlayer, 15, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[35] = true
    destroyHudText(eventPlayer.T[60])
    eventPlayer.E = 19
    chase(eventPlayer.E, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Reveal Enemy".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.E, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[60] = getLastCreatedText()
    wait(eventPlayer.E)
    destroyHudText(eventPlayer.T[60])
    hudHeader(eventPlayer, "{} Reveal Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[60] = getLastCreatedText()


@Rule "REVEAL | Bap ability 2 effect (on enemies)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[35]:
    eventPlayer.C[35] = false
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.YELLOW, eventPlayer, 10000)
    createIcon(getPlayers(getOppositeTeam(eventPlayer.getTeam())), eventPlayer, Icon.SKULL, IconReeval.VISIBILITY_AND_POSITION, Color.YELLOW, false)
    wait(15)
    destroyAllIcons()


@Rule "FALL DAMAGE | Player hit ground"
@Event eachPlayer
@Hero baptiste
if eventPlayer.isOnGround() and eventPlayer.Q < -10:
    damage(eventPlayer, null, eventPlayer.Q * -2.5)


@Rule "FALL DAMAGE | Check before ground"
@Event eachPlayer
@Hero baptiste
if eventPlayer.getAltitude() < 1 and eventPlayer.isInAir():
    eventPlayer.Q = eventPlayer.getVerticalSpeed()


@Rule "================================================== Brigitte =================================================="
@Event eachPlayer
@Hero brigitte
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setDamageDealt(90)
        eventPlayer.setDamageReceived(40)
        eventPlayer.setHealingReceived(75)
        destroyHudText(eventPlayer.T[2])
        destroyHudText(eventPlayer.T[3])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        destroyHudText(eventPlayer.T[65])
        wait(5)
    while true


@Rule "##### NOT HUD (brigitte)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.BRIGITTE:
    destroyHudText(eventPlayer.T[2])
    destroyHudText(eventPlayer.T[3])
    destroyHudText(eventPlayer.T[4])
    destroyHudText(eventPlayer.T[5])
    destroyHudText(eventPlayer.T[65])


@Rule "##### SPAWN HUD (brigitte)"
@Event eachPlayer
@Hero brigitte
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[2] = getLastCreatedText()
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 1, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[3] = getLastCreatedText()
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 1, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[65] = getLastCreatedText()


@Rule "SPHERE VORTEX | Brigitte ability 1 activate"
@Event eachPlayer
@Hero brigitte
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam())):
        player.C[5] = true
    destroyHudText(eventPlayer.T[4])
    eventPlayer.Z = 20
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Sphere Vortex".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[4] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[4])
    hudHeader(eventPlayer, "{} Sphere Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[4] = getLastCreatedText()


@Rule "SPHERE VORTEX | Brigitte ability 1 effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[5]:
    bigMessage(eventPlayer, "Enemy {} Vortex".format(Hero.BRIGITTE))
    eventPlayer.startFacing(Vector.LEFT, 300, Relativity.TO_PLAYER, FacingReeval.DIRECTION_AND_TURN_RATE)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.WHITE, eventPlayer, 0.3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(4)
    eventPlayer.stopFacing()
    destroyAllEffects()
    eventPlayer.C[5] = false


@Rule "FACING UP | Brigitte ability 2 activate"
@Event eachPlayer
@Hero brigitte
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam())):
        player.C[6] = true
    destroyHudText(eventPlayer.T[5])
    eventPlayer.E = 40
    chase(eventPlayer.E, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Facing Up".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.E, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[5] = getLastCreatedText()
    wait(eventPlayer.E)
    destroyHudText(eventPlayer.T[5])
    hudHeader(eventPlayer, "{} Face Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[5] = getLastCreatedText()


@Rule "FACING UP | Brigitte ability 2 effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[6]:
    bigMessage(eventPlayer, "{} Corrupted You".format(Hero.BRIGITTE))
    eventPlayer.C[6] = false
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 8)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.WHITE, eventPlayer, 3)
    eventPlayer.startFacing(Vector.UP, 50, Relativity.TO_PLAYER, FacingReeval.DIRECTION_AND_TURN_RATE)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.WHITE, eventPlayer, 0.3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(2)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.WHITE, eventPlayer, 0.3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(2)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.WHITE, eventPlayer, 0.3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(2)
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.WHITE, eventPlayer, 0.3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(2)
    eventPlayer.stopFacing()
    destroyAllEffects()
    eventPlayer.setFacing(getClosestPlayer(eventPlayer, getOppositeTeam(eventPlayer.getTeam())), Relativity.TO_PLAYER)


@Rule "Brig ult ready"
@Event eachPlayer
@Hero brigitte
if eventPlayer.getUltCharge() == 100 and not eventPlayer.isInSpawnRoom():
    eventPlayer.C[45] = true
    eventPlayer.setUltEnabled(false)
    hudHeader(eventPlayer, "{} Ultimate Ability Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    bigMessage(eventPlayer, "Ultimate Ability Ready")
    eventPlayer.T[64] = getLastCreatedText()


@Rule "Brig use ult"
@Event eachPlayer
@Hero brigitte
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.C[45] and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.setUltEnabled(false)
    destroyHudText(eventPlayer.T[64])
    eventPlayer.C[45] = false
    for player in getPlayersInRadius(eventPlayer, 15, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[46] = true
    eventPlayer.setUltEnabled(true)


@Rule "Brig ult on enemy"
@Event eachPlayer
if eventPlayer.C[46]:
    eventPlayer.C[46] = false
    bigMessage(eventPlayer, "{} Ultimate Ability".format(Hero.BRIGITTE))
    eventPlayer.T[64] = getLastCreatedText()
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.RED, eventPlayer, 1)
    wait(1)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.RED, eventPlayer, 1)
    wait(1)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, eventPlayer, 1)
    wait(0.5)
    eventPlayer.respawn()
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 3)


@Rule "================================================== D.VA =================================================="
@Event eachPlayer
@Hero dva
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageReceived(350)
        eventPlayer.setDamageDealt(10000)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setSecondaryFireEnabled(true)
        eventPlayer.setHealingReceived(75)
        eventPlayer.setGravity(3)
        eventPlayer.setMoveSpeed(125)
        eventPlayer.setPrimaryFireEnabled(false)
        destroyHudText(eventPlayer.T[7])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        destroyHudText(eventPlayer.T[72])
        wait(5)
    while true
    startDamageModification(getPlayersOnHero(Hero.REINHARDT, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ROADHOG, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.WINSTON, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ZARYA, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ORISA, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.DOOMFIST, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)


@Rule "##### NOT HUD (dva)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.DVA:
    destroyHudText(eventPlayer.T[6])
    destroyHudText(eventPlayer.T[7])
    destroyHudText(eventPlayer.T[71])
    destroyHudText(eventPlayer.T[72])


@Rule "##### SPAWN HUD (dva)"
@Event eachPlayer
@Hero dva
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[7] = getLastCreatedText()
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[72] = getLastCreatedText()


@Rule "DROP | Dva ability 2 activate"
@Event eachPlayer
@Hero dva
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.setGravity(125)
    eventPlayer.C[51] = true
    destroyHudText(eventPlayer.T[71])
    eventPlayer.E = 15
    chase(eventPlayer.E, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Drop".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.E, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[71] = getLastCreatedText()
    wait(eventPlayer.E)
    destroyHudText(eventPlayer.T[71])
    hudHeader(eventPlayer, "{} Drop Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[71] = getLastCreatedText()


@Rule "DROP | Dva ability 2 effect (on self/enemy)"
@Event eachPlayer
@Hero dva
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[51] and eventPlayer.isOnGround():
    eventPlayer.C[51] = false
    eventPlayer.setGravity(3)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.GREEN, eventPlayer, 7)
    damage(getPlayersInRadius(eventPlayer, 5.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF), getPlayersOnHero(Hero.DVA, eventPlayer.getTeam()), 25)


@Rule "Dva secondary"
@Event eachPlayer
@Hero dva
if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and not eventPlayer.isInSpawnRoom():
    eventPlayer.forceButtonPress(Button.ABILITY_1)


@Rule "Dva ult ready"
@Event eachPlayer
@Hero dva
if eventPlayer.getUltCharge() == 100 and not eventPlayer.isInSpawnRoom():
    eventPlayer.C[7] = true
    eventPlayer.setUltEnabled(false)
    bigMessage(eventPlayer, "Ultimate Ability Ready")
    hudHeader(eventPlayer, "{} Ultimate Ability Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[6] = getLastCreatedText()


@Rule "Dva use ult"
@Event eachPlayer
@Hero dva
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.C[7]:
    eventPlayer.C[51] = false
    destroyHudText(eventPlayer.T[6])
    eventPlayer.setDamageDealt(350)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.startForcingButton(Button.ABILITY_2)
    eventPlayer.setUltEnabled(true)
    eventPlayer.C[7] = false
    wait(2)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setDamageDealt(10000)
    eventPlayer.C[51] = true


@Rule "Dva not use ult in spawn"
@Event eachPlayer
@Hero dva
if eventPlayer.isInSpawnRoom():
    eventPlayer.setAbility2Enabled(true)


@Rule "Dva passive"
@Event eachPlayer
@Hero dva
if entityExists(getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES)) and getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES) and eventPlayer.isMoving() and eventPlayer.isUsingAbility1() and eventPlayer.isAlive() and [player.getCurrentHero() for player in getPlayersInRadius(eventPlayer, 2, Team.ALL, LosCheck.OFF)] != Hero.DVA:
    damage(getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES), eventPlayer, 5000)


@Rule "dva ult hud fix"
@Event playerDied
@Hero dva
destroyHudText(eventPlayer.T[6])


@Rule "================================================== Doomfist =================================================="
@Event eachPlayer
@Hero doomfist
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(250)
        eventPlayer.setDamageReceived(50)
        eventPlayer.setHealingReceived(50)
        eventPlayer.setMoveSpeed(90)
        eventPlayer.setGravity(140)
        eventPlayer.setProjectileSpeed(75)
        destroyHudText(eventPlayer.T[7])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (doomfist)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.DOOMFIST:
    destroyHudText(eventPlayer.T[7])


@Rule "##### SPAWN HUD (doomfist)"
@Event eachPlayer
@Hero doomfist
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Corrupt: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[7] = getLastCreatedText()


@Rule "Doomfist passive"
@Event eachPlayer
@Hero doomfist
if not eventPlayer.isInSpawnRoom() and eventPlayer.isAlive():
    do:
        wait(20)
        eventPlayer.setStatusEffect(null, Status.ROOTED, 8)
        eventPlayer.setAimSpeed(25)
        eventPlayer.setDamageReceived(20)
        bigMessage(eventPlayer, "Corrupted")
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, eventPlayer, 1.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        wait(1)
        bigMessage(eventPlayer, "Purified")
        destroyAllEffects()
        eventPlayer.setAimSpeed(100)
        eventPlayer.setDamageReceived(45)
    while true


@Rule "================================================== Genji =================================================="
@Event eachPlayer
@Hero genji
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(7000)
        eventPlayer.setDamageReceived(65)
        eventPlayer.setHealingReceived(50)
        eventPlayer.setGravity(80)
        eventPlayer.setMoveSpeed(100)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setPrimaryFireEnabled(false)
        destroyHudText(eventPlayer.T[8])
        destroyHudText(eventPlayer.T[16])
        wait(5)
    while true


@Rule "##### NOT HUD (genji)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.GENJI:
    destroyHudText(eventPlayer.T[8])
    destroyHudText(eventPlayer.T[11])


@Rule "##### SPAWN HUD (genji)"
@Event eachPlayer
@Hero genji
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[8] = getLastCreatedText()


@Rule "Genji ult"
@Event eachPlayer
@Hero genji
if not eventPlayer.isInSpawnRoom() and eventPlayer.isUsingUltimate():
    eventPlayer.setDamageDealt(75)
    eventPlayer.setDamageReceived(65)
    eventPlayer.setMoveSpeed(175)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setHealingReceived(125)
    eventPlayer.setAbility1Enabled(false)


@Rule "Genji out of ult"
@Event eachPlayer
@Hero genji
if not eventPlayer.isInSpawnRoom() and not eventPlayer.isUsingUltimate():
    eventPlayer.setDamageDealt(7000)
    eventPlayer.setDamageReceived(75)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.setHealingReceived(65)
    eventPlayer.setAbility1Enabled(true)


@Rule "Genji ability 1 rework"
@Event eachPlayer
@Hero genji
if eventPlayer.isHoldingButton(Button.ABILITY_1):
    eventPlayer.setDamageDealt(350)
    wait(1.75)
    eventPlayer.setDamageDealt(1000)


@Rule "Genji ability 1 cooldown"
@Event eachPlayer
@Hero genji
if eventPlayer.isHoldingButton(Button.ABILITY_1):
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.setAbility1Enabled(false)
    wait(15)
    eventPlayer.setAbility1Enabled(true)


@Rule "REVERSE REACH | Genji secondary"
@Event eachPlayer
@Hero genji
if eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and eventPlayer.H == 0 and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 15 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 15) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and not eventPlayer.isInSpawnRoom():
    eventPlayer.H = 20
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.BLUE, eventPlayer, 1)
    eventPlayer.E = eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))
    eventPlayer.teleport(raycast([player.getPosition() for player in eventPlayer.E], [player.getPosition() for player in eventPlayer.E] + angleToDirection([player.getHorizontalFacingAngle() for player in eventPlayer.E], 0) * -1.5, include=getAllPlayers(), exclude=eventPlayer.E, includePlayerObjects=true).getHitPosition())
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.E]), Relativity.TO_WORLD)
    eventPlayer.setDamageDealt(abs(5000))
    wait(1)
    eventPlayer.setDamageDealt(100)
    chase(eventPlayer.H, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)


@Rule "REVERSE REACH | HUD"
@Event eachPlayer
@Hero genji
if not eventPlayer.isInSpawnRoom():
    hudText(eventPlayer, "{} Reverse Reach".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.H, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[11] = getLastCreatedText()


@Rule "REVERSE REACH | Reset on kill"
@Event eachPlayer
@Hero genji
if eventPlayer.isInSpawnRoom():
    destroyHudText(eventPlayer.T[11])


@Rule "================================================== Hanzo =================================================="
@Event eachPlayer
@Hero hanzo
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setMoveSpeed(10)
        eventPlayer.setHealingReceived(1)
        eventPlayer.setDamageDealt(1500)
        eventPlayer.setDamageReceived(2.5)
        eventPlayer.setGravity(500)
        eventPlayer.setProjectileGravity(500)
        eventPlayer.setProjectileSpeed(30)
        eventPlayer.setPrimaryFireEnabled(false)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        eventPlayer.disallowButton(Button.JUMP)
        wait(5)
    while true
    startDamageModification(getPlayersOnHero(Hero.REINHARDT, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ROADHOG, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.WINSTON, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ZARYA, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ORISA, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.DOOMFIST, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)


@Rule "##### NOT HUD (hanzo)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.HANZO:
    destroyHudText(eventPlayer.T[0])


@Rule "##### SPAWN HUD (hanzo)"
@Event eachPlayer
@Hero hanzo
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[0] = getLastCreatedText()


@Rule "Hanzo stun"
@Event playerDealtDamage
@Hero hanzo
if not eventPlayer.isInSpawnRoom():
    victim.setStatusEffect(null, Status.STUNNED, 0.2)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 0.5)


@Rule "================================================== Junkrat =================================================="
@Event eachPlayer
@Hero junkrat
if not eventPlayer.isInSpawnRoom():
    destroyHudText(eventPlayer.T[9])
    destroyHudText(eventPlayer.T[16])
    destroyHudText(eventPlayer.T[11])


@Rule "##### NOT HUD (junkrat)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.JUNKRAT:
    destroyHudText(eventPlayer.T[9])


@Rule "##### SPAWN HUD (junkrat)"
@Event eachPlayer
@Hero junkrat
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Crouch: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[9] = getLastCreatedText()


@Rule "Junkrat not crouching"
@Event eachPlayer
@Hero junkrat
if not eventPlayer.isCrouching() and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setMoveSpeed(500)
        eventPlayer.startHoT(eventPlayer, 9999, 2)
        eventPlayer.stopAllDoT()
        eventPlayer.setDamageDealt(175)
        eventPlayer.setDamageReceived(150)
        eventPlayer.setHealingReceived(150)
        eventPlayer.setGravity(75)
        eventPlayer.setProjectileGravity(40)
        wait(5)
    while true


@Rule "Junkrat is crouching"
@Event eachPlayer
@Hero junkrat
if eventPlayer.isCrouching() and not eventPlayer.isInSpawnRoom():
    eventPlayer.setDamageDealt(1000)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 3)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 3)
    wait(1)
    kill(eventPlayer, null)
    wait(1)
    damage(getPlayersInRadius(eventPlayer, 5, Team.ALL, LosCheck.OFF), getPlayersOnHero(eventPlayer.getCurrentHero(), Team.ALL), 125)
    eventPlayer.setProjectileGravity(0)
    eventPlayer.setProjectileSpeed(10000)
    wait(3)
    eventPlayer.setProjectileGravity(100)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setDamageDealt(175)


@Rule "Junkrat ult"
@Event eachPlayer
@Hero junkrat
if eventPlayer.isUsingUltimate() and teamHasHero(Hero.JUNKRAT, Team.ALL) and not eventPlayer.isInSpawnRoom():
    eventPlayer.setMoveSpeed(200)
    eventPlayer.setDamageDealt(500)


@Rule "Junkrat NOT ult"
@Event eachPlayer
@Hero junkrat
if teamHasHero(Hero.JUNKRAT, Team.ALL) and not eventPlayer.isInSpawnRoom() and not eventPlayer.isUsingUltimate():
    eventPlayer.setMoveSpeed(500)
    eventPlayer.setDamageDealt(175)


@Rule "================================================== Lucio =================================================="
@Event eachPlayer
@Hero lucio
if teamHasHero(Hero.LUCIO, Team.ALL) and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(85)
        eventPlayer.setDamageReceived(150)
        eventPlayer.setGravity(75)
        eventPlayer.setProjectileSpeed(175)
        destroyHudText(eventPlayer.T[10])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (lucio)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.LUCIO:
    destroyHudText(eventPlayer.T[10])


@Rule "##### SPAWN HUD (lucio)"
@Event eachPlayer
@Hero lucio
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[10] = getLastCreatedText()


@Rule "SPEED ULT | Lucio if uses ult (true)"
@Event eachPlayer
@Hero lucio
if eventPlayer.isUsingUltimate() and eventPlayer.isInAir() and not eventPlayer.C[29]:
    eventPlayer.C[29] = true


@Rule "SPEED ULT | Lucio if stopped (false)"
@Event eachPlayer
@Hero lucio
if (eventPlayer.hasStatusEffect(Status.HACKED) or eventPlayer.hasStatusEffect(Status.STUNNED) or eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) or eventPlayer.hasStatusEffect(Status.ASLEEP) or eventPlayer.hasStatusEffect(Status.FROZEN)):
    eventPlayer.C[29] = false


@Rule "SPEED ULT | Lucio (If lucio uses ult)"
@Event eachPlayer
@Hero lucio
if eventPlayer.isOnGround() and eventPlayer.C[29]:
    eventPlayer.C[29] = false
    for player in getPlayersInRadius(eventPlayer, 30, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[30] = true


@Rule "SPEED ULT | Lucio (Effect on enemy)"
@Event eachPlayer
if eventPlayer.C[30]:
    eventPlayer.setAimSpeed(1000)
    eventPlayer.setMoveSpeed(10000)
    wait(4)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setAimSpeed(100)
    eventPlayer.C[30] = false


@Rule "Lucio always fast"
@Event eachPlayer
@Hero lucio
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setMoveSpeed(130)
        wait(0.25)
    while true


@Rule "Lucio Speed"
@Event eachPlayer
@Hero lucio
if not eventPlayer.isInSpawnRoom() and eventPlayer.isUsingAbility1():
    eventPlayer.setHealingDealt(150)
    eventPlayer.setHealingReceived(25)
    eventPlayer.setMoveSpeed(180)


@Rule "Lucio speed effect (on enemy)"
@Event playerDealtDamage
@Hero lucio
if not eventPlayer.isInSpawnRoom() and eventPlayer.isUsingAbility1():
    bigMessage(victim, "{} Speeds".format(Hero.LUCIO))
    victim.setAimSpeed(1000)
    victim.setMoveSpeed(600)
    wait(1)
    victim.setMoveSpeed(100)
    victim.setAimSpeed(100)
    wait(1.75)


@Rule "Lucio Heal"
@Event eachPlayer
@Hero lucio
if not eventPlayer.isInSpawnRoom() and not eventPlayer.isUsingAbility1():
    eventPlayer.setHealingReceived(200)
    eventPlayer.setHealingDealt(250)
    eventPlayer.setMoveSpeed(130)


@Rule "================================================== McCree =================================================="
@Event eachPlayer
@Hero mccree
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(175)
        eventPlayer.setDamageReceived(85)
        eventPlayer.setMoveSpeed(80)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility2Enabled(false)
        destroyHudText(eventPlayer.T[63])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (mcCree)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.MCCREE:
    destroyHudText(eventPlayer.T[62])
    destroyHudText(eventPlayer.T[63])


@Rule "##### SPAWN HUD (mcCree)"
@Event eachPlayer
@Hero mccree
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[63] = getLastCreatedText()


@Rule "Respawn rate"
@Event eachPlayer
@Hero mccree
eventPlayer.setRespawnTime(1)


@Rule "initial location of bullet on game start"
@Event eachPlayer
@Hero mccree
if eventPlayer.hasSpawned():
    eventPlayer.N = random.randint(0, 12)
    eventPlayer.U = 0


@Rule "on death new bullet location"
@Event eachPlayer
@Hero mccree
if eventPlayer.isDead():
    eventPlayer.N = random.randint(0, 12)
    eventPlayer.U = 0


@Rule "if you survived, rotate to the next chamber"
@Event eachPlayer
@Hero mccree
if eventPlayer.isAlive() and eventPlayer.isFiringPrimaryFire() and eventPlayer.N != eventPlayer.U:
    eventPlayer.U++


@Rule "IF the bullet is IN THE CHAMBER, YOU DIE"
@Event eachPlayer
@Hero mccree
if eventPlayer.isAlive() and eventPlayer.isFiringPrimaryFire() and eventPlayer.N == eventPlayer.U:
    kill(eventPlayer, null)


@Rule "Ability 1"
@Event eachPlayer
@Hero mccree
if eventPlayer.isUsingAbility1() and entityExists(getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES)) and getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES):
    for player in getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.setStatusEffect(null, Status.STUNNED, 4)


@Rule "AIR ATTACK | McCree ability 2 activate"
@Event eachPlayer
@Hero mccree
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and entityExists(getPlayersInRadius(eventPlayer, 15, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES)) and getPlayersInRadius(eventPlayer, 15, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in getPlayersInRadius(eventPlayer, 15, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[42] = true
    destroyHudText(eventPlayer.T[62])
    eventPlayer.Z = 60
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Cloud Attack".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[62] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[62])
    hudHeader(eventPlayer, "{} Attack Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[62] = getLastCreatedText()


@Rule "AIR ATTACK | McCree ability 2 effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[42]:
    bigMessage(eventPlayer, "{} Cloud Attack".format(Hero.MCCREE))
    eventPlayer.C[42] = false
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.LIGHT_SHAFT, Color.RED, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), Effect.LIGHT_SHAFT, Color.BLUE, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.LIGHT_SHAFT, Color.RED, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), Effect.LIGHT_SHAFT, Color.BLUE, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.LIGHT_SHAFT, Color.RED, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), Effect.LIGHT_SHAFT, Color.BLUE, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.LIGHT_SHAFT, Color.RED, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), Effect.LIGHT_SHAFT, Color.BLUE, eventPlayer, 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, eventPlayer, 6)
    destroyAllEffects()
    eventPlayer.C[47] = true


@Rule "Air attack hanzo exception"
@Event eachPlayer
if eventPlayer.C[47]:
    eventPlayer.C[47] = false
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 13)


@Rule "================================================== Mei =================================================="
@Event eachPlayer
@Hero mei
if not eventPlayer.isInSpawnRoom():
    do:
        destroyHudText(eventPlayer.T[75])
        destroyHudText(eventPlayer.T[76])
        wait(5)
    while true


@Rule "##### NOT HUD (mei)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.MEI:
    destroyHudText(eventPlayer.T[75])
    destroyHudText(eventPlayer.T[76])
    destroyHudText(eventPlayer.T[77])


@Rule "##### SPAWN HUD (mei)"
@Event eachPlayer
@Hero mei
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[75] = getLastCreatedText()
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[76] = getLastCreatedText()


@Rule "CRYO-FREEZE | Mei ability 1 activate"
@Event eachPlayer
@Hero mei
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and not eventPlayer.hasStatusEffect(Status.FROZEN) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in getPlayersInRadius(eventPlayer, 5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[56] = true
    createEffect(getAllPlayers(), Effect.RING, Color.BLUE, eventPlayer.getPosition(), 5, Invis.NONE)
    wait(10)
    destroyAllEffects()


@Rule "CRYO-FREEZE | Mei ability 1 effect (on enemy/self)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[56]:
    eventPlayer.C[56] = false
    eventPlayer.setStatusEffect(null, Status.FROZEN, 10)
    wait(10)


@Rule "Mei Ult"
@Event eachPlayer
@Hero mei
if eventPlayer.isUsingUltimate():
    bigMessage(getPlayers(getOppositeTeam(eventPlayer.getTeam())), "Enemy {} Ultimate Ability".format(Hero.MEI))
    bigMessage(getPlayers(eventPlayer.getTeam()), "Ally {} Ultimate Ability".format(Hero.MEI))
    eventPlayer.setProjectileGravity(500)
    eventPlayer.setProjectileSpeed(0)
    for player in getPlayersInRadius(eventPlayer, 10, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[55] = true
    for player in getAllPlayers():
        player.setStatusEffect(getPlayersOnHero(Hero.MEI, eventPlayer.getTeam()), Status.FROZEN, 3)
    for player in getPlayers(getOppositeTeam(eventPlayer.getTeam())):
        player.setStatusEffect(getPlayersOnHero(Hero.MEI, eventPlayer.getTeam()), Status.FROZEN, 13)
    wait(1)
    eventPlayer.setProjectileGravity(100)
    eventPlayer.setProjectileSpeed(100)


@Rule "Mei Ult in effect"
@Event eachPlayer
@Hero mei
if eventPlayer.C[55]:
    eventPlayer.C[55] = false
    eventPlayer.setStatusEffect(null, Status.FROZEN, 23)
    wait(23)
    bigMessage(getAllPlayers(), "{} Ultimate Ability Over".format(Hero.MEI))


@Rule "================================================== Mercy =================================================="
@Event eachPlayer
@Hero mercy
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageReceived(150)
        eventPlayer.setMoveSpeed(75)
        eventPlayer.setDamageDealt(115)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (mercy)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.MERCY:
    destroyHudText(eventPlayer.T[0])


@Rule "##### SPAWN HUD (mercy)"
@Event eachPlayer
@Hero mercy
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[0] = getLastCreatedText()


@Rule "Mercy ult"
@Event eachPlayer
@Hero mercy
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setUltEnabled(true)
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(15)
    while true


@Rule "Mercy in spawn"
@Event eachPlayer
@Hero mercy
if eventPlayer.isInSpawnRoom():
    eventPlayer.setUltEnabled(false)


@Rule "================================================== Moira =================================================="
@Event eachPlayer
@Hero moira
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(85)
        eventPlayer.setHealingDealt(50)
        eventPlayer.setHealingReceived(15)
        eventPlayer.setGravity(65)
        eventPlayer.setMoveSpeed(195)
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.disallowButton(Button.PRIMARY_FIRE)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setProjectileSpeed(130)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (moira)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.MOIRA:
    destroyHudText(eventPlayer.T[0])


@Rule "##### SPAWN HUD (moira)"
@Event eachPlayer
@Hero moira
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[0] = getLastCreatedText()


@Rule "Moira primary change"
@Event eachPlayer
@Hero moira
if (eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) and not eventPlayer.isInSpawnRoom():
    eventPlayer.forceButtonPress(Button.ABILITY_2)


@Rule "================================================== Orisa =================================================="
@Event eachPlayer
@Hero orisa
if teamHasHero(Hero.ORISA, Team.ALL) and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setDamageDealt(55)
        eventPlayer.setDamageReceived(50)
        eventPlayer.setMoveSpeed(85)
        eventPlayer.setProjectileGravity(115)
        eventPlayer.setProjectileSpeed(115)
        destroyHudText(eventPlayer.T[12])
        destroyHudText(eventPlayer.T[13])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (orisa)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.ORISA:
    destroyHudText(eventPlayer.T[12])
    destroyHudText(eventPlayer.T[13])
    destroyHudText(eventPlayer.T[14])


@Rule "##### SPAWN HUD (orisa)"
@Event eachPlayer
@Hero orisa
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[12] = getLastCreatedText()
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 2, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[13] = getLastCreatedText()


@Rule "SECURE | Orisa ability 1"
@Event eachPlayer
@Hero orisa
if not eventPlayer.isInSpawnRoom() and eventPlayer.isUsingAbility1():
    bigMessage(eventPlayer, "Secured")
    smallMessage(eventPlayer, "Extreme Damage")
    eventPlayer.setStatusEffect(null, Status.ROOTED, 4)
    eventPlayer.setDamageDealt(75)
    wait(4)
    eventPlayer.setDamageDealt(25)


@Rule "ENEMY ROOT | Orisa ability 2 activate"
@Event eachPlayer
@Hero orisa
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in getPlayersInRadius(eventPlayer, 15, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[9] = true
    destroyHudText(eventPlayer.T[14])
    eventPlayer.Z = 30
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Lock Ability".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[14] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[14])
    hudHeader(eventPlayer, "{} Lock Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[14] = getLastCreatedText()


@Rule "ENEMY ROOT | Orisa ability 2 effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[9]:
    eventPlayer.C[9] = false
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.GREEN, eventPlayer, 1)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 8)
    bigMessage(eventPlayer, "{} Stunned You".format(Hero.ORISA))


@Rule "================================================== Pharah =================================================="
@Event eachPlayer
@Hero pharah
if teamHasHero(Hero.PHARAH, Team.ALL) and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setDamageDealt(250)
        eventPlayer.setDamageReceived(100)
        eventPlayer.setProjectileSpeed(85)
        destroyHudText(eventPlayer.T[42])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (pharah)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.PHARAH:
    destroyHudText(eventPlayer.T[41])
    destroyHudText(eventPlayer.T[42])


@Rule "##### SPAWN HUD (pharah)"
@Event eachPlayer
@Hero pharah
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[42] = getLastCreatedText()


@Rule "Pharah on ground"
@Event eachPlayer
@Hero pharah
if not eventPlayer.isInSpawnRoom() and eventPlayer.isOnGround():
    eventPlayer.C[37] = true
    eventPlayer.C[38] = false


@Rule "Pharah on ground variable"
@Event eachPlayer
@Hero pharah
if not eventPlayer.isInSpawnRoom() and eventPlayer.isOnGround() and eventPlayer.C[37]:
    eventPlayer.startDoT(null, 9999, 17.5)
    eventPlayer.stopAllHoT()


@Rule "Pharah off ground"
@Event eachPlayer
@Hero pharah
if not eventPlayer.isInSpawnRoom() and not eventPlayer.isOnGround():
    eventPlayer.C[37] = false
    eventPlayer.C[38] = true


@Rule "Pharah off ground variable"
@Event eachPlayer
@Hero pharah
if not eventPlayer.isInSpawnRoom() and not eventPlayer.isOnGround() and eventPlayer.C[38]:
    eventPlayer.stopAllDoT()
    eventPlayer.startHoT(eventPlayer, 9999, 10000)
    wait(1)
    eventPlayer.stopAllHoT()


@Rule "DROP | Pharah ability 1 activate"
@Event eachPlayer
@Hero pharah
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[39] = true
    destroyHudText(eventPlayer.T[41])
    eventPlayer.Z = 25
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Extreme Drop".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[41] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[41])
    hudHeader(eventPlayer, "{} Drop Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[41] = getLastCreatedText()


@Rule "DROP | Pharah ability 1 effect (on self)"
@Event eachPlayer
@Hero pharah
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[39]:
    eventPlayer.C[39] = false
    bigMessage(eventPlayer, "Extreme Damage Drop")
    eventPlayer.setGravity(500)
    eventPlayer.setDamageReceived(25)
    eventPlayer.setProjectileSpeed(500)
    wait(7)
    eventPlayer.setGravity(100)
    eventPlayer.setDamageReceived(145)
    eventPlayer.setProjectileSpeed(85)
    eventPlayer.applyImpulse(Vector.UP, 60, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)


@Rule "================================================== Reaper =================================================="
@Event eachPlayer
@Hero reaper
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(5500)
        eventPlayer.setDamageReceived(10000)
        eventPlayer.setMoveSpeed(140)
        eventPlayer.setPrimaryFireEnabled(true)
        destroyHudText(eventPlayer.T[15])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true
    startDamageModification(getPlayersOnHero(Hero.REINHARDT, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ROADHOG, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.WINSTON, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ZARYA, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.ORISA, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification(getPlayersOnHero(Hero.DOOMFIST, getOppositeTeam(eventPlayer.getTeam())), eventPlayer, 200, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)


@Rule "##### NOT HUD (reaper)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.REAPER:
    destroyHudText(eventPlayer.T[15])
    destroyHudText(eventPlayer.T[16])
    destroyHudText(eventPlayer.T[70])


@Rule "##### SPAWN HUD (reaper)"
@Event eachPlayer
@Hero reaper
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Resurrect: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[15] = getLastCreatedText()


@Rule "RESURRECT | Reaper (Passive)"
@Event playerDied
@Hero reaper
if not eventPlayer.isInSpawnRoom() and not eventPlayer.C[28]:
    eventPlayer.C[28] = true
    wait(1)
    destroyHudText(eventPlayer.T[16])
    eventPlayer.Z = 45
    wait(1.5)
    eventPlayer.resurrect()
    hudText(eventPlayer, "{} Resurrect".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[70] = getLastCreatedText()
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    createEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), Effect.BAD_AURA, Color.RED, eventPlayer, 4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1)
    eventPlayer.setStatusEffect(null, Status.BURNING, 2)
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 2)
    wait(2)
    destroyAllEffects()
    wait(41.5)
    eventPlayer.C[28] = false
    destroyHudText(eventPlayer.T[70])
    hudHeader(eventPlayer, "{} Resurrect Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[16] = getLastCreatedText()


@Rule "WRAITH THROUGH WALLS"
@Event eachPlayer
@Hero reaper
if distance(eventPlayer.getEyePosition(), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1, include=null, exclude=eventPlayer, includePlayerObjects=true).getHitPosition()) < 0.8 and eventPlayer.isUsingAbility1():
    eventPlayer.Y = eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 4
    eventPlayer.W = raycast(eventPlayer.Y, eventPlayer.getEyePosition(), include=getAllPlayers(), exclude=eventPlayer, includePlayerObjects=true).getHitPosition()
    eventPlayer.teleport(eventPlayer.W - vect(0, 0.3, 0))
    eventPlayer.applyImpulse(Vector.DOWN, 60, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)


@Rule "================================================== Reinhardt =================================================="
@Event eachPlayer
@Hero reinhardt
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setDamageDealt(140)
        eventPlayer.setDamageReceived(30)
        eventPlayer.setGravity(115)
        eventPlayer.setMoveSpeed(85)
        destroyHudText(eventPlayer.T[17])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        destroyHudText(eventPlayer.T[74])
        wait(5)
    while true


@Rule "##### NOT HUD (reinhardt)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.REINHARDT:
    destroyHudText(eventPlayer.T[17])
    destroyHudText(eventPlayer.T[18])
    destroyHudText(eventPlayer.T[73])


@Rule "##### SPAWN HUD (reinhardt)"
@Event eachPlayer
@Hero reinhardt
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[17] = getLastCreatedText()
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[74] = getLastCreatedText()


@Rule "VORTEX | Reinhardt ability 2 activate"
@Event eachPlayer
@Hero reinhardt
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[10] = true
    destroyHudText(eventPlayer.T[18])
    eventPlayer.Z = 13
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Vortex Ability".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[18] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[18])
    hudHeader(eventPlayer, "{} Vortex Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[18] = getLastCreatedText()


@Rule "VORTEX | Reinhardt ability 2 effect (on self)"
@Event eachPlayer
@Hero reinhardt
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[10]:
    for player in getPlayersInRadius(eventPlayer, 4, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.setStatusEffect(null, Status.ROOTED, 4)
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.setCamera(eventPlayer + worldVector(vect(-0.1, 1.4, -2), eventPlayer, Transform.ROTATION) + Vector.UP * 1.25 + eventPlayer.getFacingDirection() * -1, eventPlayer + eventPlayer.getFacingDirection() * 38, 0)
    eventPlayer.startFacing(Vector.LEFT, 1000, Relativity.TO_PLAYER, FacingReeval.DIRECTION_AND_TURN_RATE)
    eventPlayer.setDamageDealt(400)
    wait(4)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.stopFacing()
    eventPlayer.setDamageDealt(125)
    eventPlayer.stopCamera()
    eventPlayer.C[10] = false


@Rule "Rein using ult"
@Event eachPlayer
@Hero reinhardt
if eventPlayer.isUsingUltimate():
    eventPlayer.setDamageDealt(250)
    wait(3)
    eventPlayer.setDamageDealt(140)


@Rule "================================================== Roadhog =================================================="
@Event eachPlayer
@Hero roadhog
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(25)
        eventPlayer.setDamageReceived(25)
        eventPlayer.setHealingReceived(10)
        eventPlayer.setGravity(125)
        eventPlayer.setMoveSpeed(60)
        destroyHudText(eventPlayer.T[19])
        destroyHudText(eventPlayer.T[20])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (roadhog)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.ROADHOG:
    destroyHudText(eventPlayer.T[19])
    destroyHudText(eventPlayer.T[20])
    destroyHudText(eventPlayer.T[21])
    destroyAllEffects()


@Rule "##### SPAWN HUD (roadhog)"
@Event eachPlayer
@Hero roadhog
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[19] = getLastCreatedText()
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[20] = getLastCreatedText()


@Rule "Roadhog fire bullets"
@Event playerDealtDamage
@Hero roadhog
if not eventPlayer.isInSpawnRoom():
    victim.setStatusEffect(null, Status.BURNING, 1)
    victim.startDoT(null, 1, 45)


@Rule "Roadhog hook"
@Event playerDealtDamage
@Hero roadhog
if eventPlayer.isHoldingButton(Button.ABILITY_1) and not eventPlayer.isInSpawnRoom():
    victim.setStatusEffect(null, Status.BURNING, 5)
    victim.startDoT(null, 5, 55)


@Rule "Roadhog heal ability"
@Event eachPlayer
@Hero roadhog
if eventPlayer.isUsingAbility2() and not eventPlayer.isInSpawnRoom():
    eventPlayer.setHealingReceived(250)
    wait(2)
    eventPlayer.setStatusEffect(null, Status.FROZEN, 4)
    createEffect(getAllPlayers(), Effect.RING, Color.ORANGE, eventPlayer, 3.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    kill(getPlayersInRadius(eventPlayer, 3.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES), getPlayersOnHero(Hero.ROADHOG, eventPlayer.getTeam()))
    eventPlayer.setDamageReceived(200)
    wait(4)
    eventPlayer.setStatusEffect(null, Status.BURNING, 10)
    eventPlayer.setDamageDealt(125)
    eventPlayer.setMoveSpeed(200)
    eventPlayer.setUltEnabled(false)
    eventPlayer.setDamageReceived(100)
    destroyAllEffects()
    wait(10)
    eventPlayer.setMoveSpeed(85)
    eventPlayer.setDamageDealt(10)
    eventPlayer.setUltEnabled(true)
    eventPlayer.setHealingReceived(10)
    eventPlayer.setDamageReceived(100)


@Rule "Roadhog ult ready"
@Event eachPlayer
@Hero roadhog
if eventPlayer.getUltCharge() == 100 and not eventPlayer.isInSpawnRoom():
    eventPlayer.C[33] = true
    eventPlayer.setUltEnabled(false)
    bigMessage(eventPlayer, "Ultimate Ability Ready")
    hudHeader(eventPlayer, "{} Ultimate Ability Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[21] = getLastCreatedText()


@Rule "Roadhog use ult"
@Event eachPlayer
@Hero roadhog
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.C[33]:
    destroyHudText(eventPlayer.T[21])
    for player in getPlayersInRadius(eventPlayer, 30, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[34] = true
    wait(5)
    eventPlayer.setUltEnabled(true)
    eventPlayer.C[33] = false


@Rule "Roadhog ult (Effect on enemy)"
@Event eachPlayer
if eventPlayer.C[34]:
    destroyHudText(eventPlayer.T[21])
    bigMessage(eventPlayer, "{} Ultimate Ability".format(Hero.ROADHOG))
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.RED, eventPlayer, 2)
    eventPlayer.setStatusEffect(null, Status.BURNING, 12)
    eventPlayer.startDoT(null, 12, 60)
    wait(12)
    eventPlayer.C[34] = false


@Rule "================================================== Sigma =================================================="
@Event eachPlayer
@Hero sigma
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setMoveSpeed(140)
        eventPlayer.setGravity(85)
        eventPlayer.setDamageReceived(750)
        eventPlayer.setDamageDealt(150)
        wait(5)
    while true


@Rule "kinetic grasp does damage"
@Event eachPlayer
@Hero sigma
if eventPlayer.isUsingAbility1():
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    wait(1.975)
    eventPlayer.G = eventPlayer.getHealth()
    wait(0.025)
    eventPlayer.G = eventPlayer.getHealth() - eventPlayer.G
    damage(getPlayersInRadius(eventPlayer, 10, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF), getPlayersOnHero(Hero.SIGMA, eventPlayer.getTeam()), eventPlayer.G)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.RED, getPlayersInRadius(eventPlayer, 10, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    bigMessage(getPlayersInRadius(eventPlayer, 13, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF), "Enemy {} Reversing".format(Hero.SIGMA))
    wait(2)
    destroyAllEffects()


@Rule "Sigma primary change"
@Event eachPlayer
@Hero sigma
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.PRIMARY_FIRE):
    eventPlayer.forceButtonPress(Button.ABILITY_1)


@Rule "Not using ability"
@Event eachPlayer
@Hero sigma
if not eventPlayer.isUsingAbility2():
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)


@Rule "Sigma dies of melee"
@Event playerTookDamage
@Hero sigma
if attacker.isFiringPrimaryFire() != true and eventPlayer.isFiringSecondaryFire() != true:
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    wait(1)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)


@Rule "================================================== Soldier 76 =================================================="
@Event eachPlayer
@Hero soldier
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(250)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        eventPlayer.setHealingReceived(135)
        wait(5)
    while true


@Rule "##### NOT HUD (76)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.SOLDIER:
    destroyHudText(eventPlayer.T[0])


@Rule "##### SPAWN HUD (76)"
@Event eachPlayer
@Hero soldier
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[0] = getLastCreatedText()


@Rule "Global soldier rule"
@Event eachPlayer
if not teamHasHero(Hero.SOLDIER, Team.ALL):
    eventPlayer.setMaxHealth(100)


@Rule "76 Variable"
@Event eachPlayer
@Hero soldier
eventPlayer.D = 100


@Rule "76 max health"
@Event playerDealtFinalBlow
@Hero soldier
if eventPlayer.D > 99 and not eventPlayer.isInSpawnRoom():
    eventPlayer.D += 150
    eventPlayer.setMaxHealth(eventPlayer.D)


@Rule "76 heal"
@Event playerEarnedElimination
@Hero soldier
if not eventPlayer.isInSpawnRoom():
    eventPlayer.startHoT(eventPlayer, 1, 350)


@Rule "76 self harm"
@Event playerDealtFinalBlow
@Hero soldier
if not eventPlayer.isInSpawnRoom():
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1.4)
    eventPlayer.setDamageReceived(500)
    wait(2)
    eventPlayer.setDamageReceived(100)


@Rule "================================================== Sombra =================================================="
@Event eachPlayer
@Hero sombra
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setDamageReceived(125)
        eventPlayer.setMoveSpeed(30)
        eventPlayer.setProjectileGravity(25)
        eventPlayer.setProjectileSpeed(500)
        destroyHudText(eventPlayer.T[22])
        destroyHudText(eventPlayer.T[24])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[67])
        destroyHudText(eventPlayer.T[68])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (sombra)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.SOMBRA:
    destroyHudText(eventPlayer.T[22])
    destroyHudText(eventPlayer.T[23])
    destroyHudText(eventPlayer.T[24])
    destroyHudText(eventPlayer.T[67])
    destroyHudText(eventPlayer.T[68])
    destroyHudText(eventPlayer.T[69])


@Rule "##### SPAWN HUD (sombra)"
@Event eachPlayer
@Hero sombra
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[22] = getLastCreatedText()
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[24] = getLastCreatedText()
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[67] = getLastCreatedText()
    hudHeader(eventPlayer, "Invisible: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[68] = getLastCreatedText()


@Rule "Sombra inv loop"
@Event eachPlayer
@Hero sombra
do:
    eventPlayer.setInvisibility(Invis.ENEMIES)
    wait(5)
while true


@Rule "Purple steps not moving"
@Event eachPlayer
@Hero sombra
if not eventPlayer.isMoving() and eventPlayer.isAlive():
    do:
        wait(1)
        playEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getPosition() + Vector.UP * 0.1, 1)
        playEffect(getPlayers(eventPlayer.getTeam()), DynamicEffect.RING_EXPLOSION, Color.BLUE, eventPlayer.getPosition() + Vector.UP * 0.1, 1)
        wait(6)
    while RULE_CONDITION


@Rule "Purple steps while moving"
@Event eachPlayer
@Hero sombra
if eventPlayer.isMoving() and eventPlayer.isAlive():
    do:
        playEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getPosition() + Vector.UP * 0.1, 0.4)
        playEffect(getPlayers(eventPlayer.getTeam()), DynamicEffect.RING_EXPLOSION, Color.BLUE, eventPlayer.getPosition() + Vector.UP * 0.1, 0.4)
        wait(0.2)
    while RULE_CONDITION


@Rule "GIVE INV | Sombra secondary activate"
@Event eachPlayer
@Hero sombra
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[48] = true
    for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam()):
        player.C[11] = true
    destroyHudText(eventPlayer.T[23])
    eventPlayer.Z = 55
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Invisible Ally".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[23] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[23])
    hudHeader(eventPlayer, "{} Invisible Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[23] = getLastCreatedText()


@Rule "GIVE INV | Sombra secondary effect (on ally)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[11]:
    eventPlayer.C[11] = false
    bigMessage(eventPlayer, "{} Ability Start".format(Hero.SOMBRA))
    eventPlayer.setInvisibility(Invis.ENEMIES)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.SPARKLES, Color.PURPLE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(10)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.SPARKLES, Color.PURPLE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(10)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.SPARKLES, Color.PURPLE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(5)
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.SPARKLES, Color.PURPLE, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    smallMessage(eventPlayer, 5)
    wait(1)
    smallMessage(eventPlayer, 4)
    wait(1)
    smallMessage(eventPlayer, 3)
    wait(1)
    smallMessage(eventPlayer, 2)
    wait(1)
    smallMessage(eventPlayer, 1)
    wait(1)
    bigMessage(eventPlayer, "{} Ability Over".format(Hero.SOMBRA))
    eventPlayer.setInvisibility(Invis.NONE)
    destroyAllEffects()


@Rule "GIVE INV | Sombra messages"
@Event eachPlayer
@Hero sombra
if eventPlayer.C[48]:
    eventPlayer.C[48] = false
    smallMessage(eventPlayer, "{} -> Invisible".format(eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())))
    wait(25)
    smallMessage(eventPlayer, 5)
    wait(1)
    smallMessage(eventPlayer, 4)
    wait(1)
    smallMessage(eventPlayer, 3)
    wait(1)
    smallMessage(eventPlayer, 2)
    wait(1)
    smallMessage(eventPlayer, 1)
    wait(1)
    smallMessage(eventPlayer, "Ally Invisible Over")


@Rule "WIDE INV | Sombra ult activate"
@Event eachPlayer
@Hero sombra
if not eventPlayer.isInSpawnRoom() and eventPlayer.isUsingUltimate():
    for player in getPlayers(eventPlayer.getTeam()):
        player.C[19] = true
    for player in getPlayers(eventPlayer.getTeam()):
        player.C[20] = true


@Rule "WIDE INV | Sombra ult effect (on ally)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[19]:
    bigMessage(eventPlayer, "Ally {} Ultimate Ability".format(Hero.SOMBRA))
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.SPARKLES, Color.PURPLE, getAllPlayers(), 2.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    for player in getPlayers(eventPlayer.getTeam()):
        player.setInvisibility(Invis.ENEMIES)
    wait(5)
    destroyAllEffects()
    for player in getPlayers(eventPlayer.getTeam()):
        player.setInvisibility(Invis.NONE)
    eventPlayer.C[19] = false


@Rule "DEFENSE HACK | Sombra ability 1 activate"
@Event eachPlayer
@Hero sombra
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in getPlayersInRadius(eventPlayer, 20, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES):
        player.C[49] = true
    eventPlayer.C[50] = true
    destroyHudText(eventPlayer.T[69])
    eventPlayer.E = 180
    chase(eventPlayer.E, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Defense Hack".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.E, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[69] = getLastCreatedText()
    wait(eventPlayer.E)
    destroyHudText(eventPlayer.T[69])
    hudHeader(eventPlayer, "{} Defense Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[69] = getLastCreatedText()


@Rule "DEFENSE HACK | Sombra ability 1 effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[49]:
    eventPlayer.C[49] = false
    bigMessage(eventPlayer, "Enemy {} Defense".format(Hero.SOMBRA))
    wait(1.5)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(1.5)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(1.5)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(1)
    bigMessage(eventPlayer, "Huh")


@Rule "DEFENSE HACK | Sombra ability 1 effect (on self)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[50]:
    eventPlayer.C[50] = false
    eventPlayer.respawn()


@Rule "================================================== Symmetra =================================================="
@Event eachPlayer
@Hero symmetra
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(300)
        eventPlayer.setDamageReceived(125)
        eventPlayer.setMoveSpeed(125)
        eventPlayer.setProjectileSpeed(75)
        eventPlayer.setProjectileGravity(150)
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.setSecondaryFireEnabled(false)
        destroyHudText(eventPlayer.T[25])
        destroyHudText(eventPlayer.T[26])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (symmetra)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.SYMMETRA:
    destroyHudText(eventPlayer.T[25])
    destroyHudText(eventPlayer.T[26])
    destroyHudText(eventPlayer.T[27])


@Rule "##### SPAWN HUD (symmetra)"
@Event eachPlayer
@Hero symmetra
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Primary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[25] = getLastCreatedText()
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[26] = getLastCreatedText()


@Rule "Symmetra ult variables"
@Event eachPlayer
@Hero symmetra
if eventPlayer.isUsingUltimate():
    eventPlayer.R = vect(eventPlayer.getPosition().x, 0, eventPlayer.getPosition().z)
    eventPlayer.S = eventPlayer.getFacingDirection()


@Rule "Symmetra ult p1"
@Event eachPlayer
@Hero symmetra
if eventPlayer.isUsingUltimate():
    do:
        wait(0.05)
        for player in [player for player in getPlayers(getOppositeTeam(eventPlayer.getTeam())) if (eventPlayer.R + eventPlayer.S.x - eventPlayer.R.x) * (player.getPosition().z - eventPlayer.R.z) - (player.getPosition().x - eventPlayer.R.x) * (eventPlayer.R + eventPlayer.S.z - eventPlayer.R.z) < 1 and (eventPlayer.R + eventPlayer.S.x - eventPlayer.R.x) * (player.getPosition().z - eventPlayer.R.z) - (player.getPosition().x - eventPlayer.R.x) * (eventPlayer.R + eventPlayer.S.z - eventPlayer.R.z) > 0]:
            player.applyImpulse(vect(eventPlayer.S.z * -1, 0, eventPlayer.S.x * 1), 14, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        for player in [player for player in getPlayers(getOppositeTeam(eventPlayer.getTeam())) if (eventPlayer.R + eventPlayer.S.x - eventPlayer.R.x) * (player.getPosition().z - eventPlayer.R.z) - (player.getPosition().x - eventPlayer.R.x) * (eventPlayer.R + eventPlayer.S.z - eventPlayer.R.z) < 0 and (eventPlayer.R + eventPlayer.S.x - eventPlayer.R.x) * (player.getPosition().z - eventPlayer.R.z) - (player.getPosition().x - eventPlayer.R.x) * (eventPlayer.R + eventPlayer.S.z - eventPlayer.R.z) > -1]:
            player.applyImpulse(vect(eventPlayer.S.z * 1, 0, eventPlayer.S.x * -1), 14, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    while RULE_CONDITION


@Rule "Symmetra ult p2"
@Event eachPlayer
@Hero symmetra
if eventPlayer.getUltCharge() == 100 and eventPlayer.isHoldingButton(Button.ULTIMATE) and not eventPlayer.isHoldingButton(Button.PRIMARY_FIRE):
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.ULTIMATE)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.018)
    eventPlayer.disallowButton(Button.ULTIMATE)
    wait(0.08)
    eventPlayer.allowButton(Button.ULTIMATE)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.018)
    eventPlayer.disallowButton(Button.ULTIMATE)
    wait(0.08)
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)


@Rule "TRAP | Symmetra secondary activate"
@Event eachPlayer
@Hero symmetra
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam())):
        player.C[32] = true
    destroyHudText(eventPlayer.T[27])
    eventPlayer.Z = 15
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Dome Lock".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[27] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[27])
    hudHeader(eventPlayer, "{} Dome Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[27] = getLastCreatedText()


@Rule "TRAP | Symmetra secondary effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[32]:
    eventPlayer.C[32] = false
    bigMessage(eventPlayer, "{} Dome Lock".format(Hero.SYMMETRA))
    eventPlayer.disallowButton(Button.JUMP)
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 3)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, eventPlayer, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, eventPlayer, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, eventPlayer, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(1)
    destroyAllEffects()
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.allowButton(Button.JUMP)


@Rule "================================================== Torbjorn =================================================="
@Event eachPlayer
@Hero torbjorn
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setMoveSpeed(120)
        destroyHudText(eventPlayer.T[45])
        destroyHudText(eventPlayer.T[46])
        eventPlayer.setPrimaryFireEnabled(true)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (torbjorn)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.TORBJORN:
    destroyHudText(eventPlayer.T[43])
    destroyHudText(eventPlayer.T[44])
    destroyHudText(eventPlayer.T[45])
    destroyHudText(eventPlayer.T[46])


@Rule "##### SPAWN HUD (torbjorn)"
@Event eachPlayer
@Hero torbjorn
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[45] = getLastCreatedText()
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[46] = getLastCreatedText()


@Rule "TIME SLOW | Torb secondary activate"
@Event eachPlayer
@Hero torbjorn
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam())):
        player.C[12] = true
    destroyHudText(eventPlayer.T[43])
    eventPlayer.Z = 45
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Time Slow".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[43] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[43])
    hudHeader(eventPlayer, "{} Slow Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[43] = getLastCreatedText()


@Rule "TIME SLOW | Torb secondary effect (on enemy) pt 2"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[12]:
    bigMessage(eventPlayer, "{} Time Slow".format(Hero.TORBJORN))
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, eventPlayer, 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.setAimSpeed(30)
    eventPlayer.setMoveSpeed(30)
    eventPlayer.setProjectileSpeed(30)
    wait(5)
    eventPlayer.setAimSpeed(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.C[12] = false
    destroyAllEffects()


@Rule "Torb ult ready"
@Event eachPlayer
@Hero torbjorn
if eventPlayer.getUltCharge() == 100 and not eventPlayer.isInSpawnRoom():
    eventPlayer.C[14] = true
    eventPlayer.setUltEnabled(false)
    bigMessage(eventPlayer, "Ultimate Ability Ready")
    hudHeader(eventPlayer, "{} Ultimate Ability Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[44] = getLastCreatedText()


@Rule "Torb use ult"
@Event eachPlayer
@Hero torbjorn
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.C[14]:
    destroyHudText(eventPlayer.T[44])
    createEffect(getPlayers(eventPlayer.getTeam()), Effect.SPHERE, Color.WHITE, eventPlayer.getPosition(), 20, Invis.NONE)
    createEffect(getPlayers(getOppositeTeam(eventPlayer.getTeam())), Effect.SPHERE, Color.RED, eventPlayer.getPosition(), 20, Invis.NONE)
    for player in getPlayersInRadius(eventPlayer, 20, getOppositeTeam(eventPlayer.getTeam()), LosCheck.OFF):
        player.C[21] = true
    eventPlayer.C[14] = false
    wait(1)
    eventPlayer.setUltEnabled(true)


@Rule "Torb ult on enemy"
@Event eachPlayer
if eventPlayer.C[21]:
    eventPlayer.C[14] = false
    bigMessage(eventPlayer, "{} Time Stop".format(Hero.TORBJORN))
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.WHITE, eventPlayer, 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 6)
    eventPlayer.setAimSpeed(0)
    eventPlayer.setMoveSpeed(0)
    eventPlayer.setProjectileSpeed(0)
    wait(6)
    eventPlayer.setAimSpeed(100)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    destroyAllEffects()
    eventPlayer.C[21] = false
    eventPlayer.C[14] = false


@Rule "================================================== Tracer =================================================="
@Event eachPlayer
@Hero tracer
if not eventPlayer.isInSpawnRoom():
    eventPlayer.setMaxHealth(133)
    eventPlayer.startHoT(eventPlayer, 1, 10000)
    wait(0.25)
    eventPlayer.stopAllHoT()
    eventPlayer.setDamageDealt(75)
    destroyHudText(eventPlayer.T[16])
    destroyHudText(eventPlayer.T[11])
    eventPlayer.setMoveSpeed(87)


@Rule "##### NOT HUD (tracer)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.TRACER:
    destroyHudText(eventPlayer.T[0])
    destroyHudText(eventPlayer.T[40])


@Rule "##### SPAWN HUD (tracer)"
@Event eachPlayer
@Hero tracer
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[0] = getLastCreatedText()


@Rule "Tracer camera"
@Event eachPlayer
@Hero tracer
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setCamera(eventPlayer + worldVector(vect(-0.1, 0.4, -0.3), eventPlayer, Transform.ROTATION) + Vector.UP * 1.25 + eventPlayer.getFacingDirection() * -1.7, eventPlayer + eventPlayer.getFacingDirection() * 38, 0)
        wait(0.25)
    while RULE_CONDITION
    eventPlayer.stopCamera()


@Rule "STARTUP: SET RTD COOLDOWN"
@Event global
A = 15


@Rule "ROLL THE DICE"
@Event eachPlayer
@Hero tracer
if eventPlayer.isFiringPrimaryFire() and eventPlayer.A == 0 and eventPlayer.B == 0 and not isMatchBetweenRounds():
    eventPlayer.A = A
    eventPlayer.B = random.randint(1, 31)


@Rule "RESET DICE ROLL RESULT ON TIMER 0"
@Event eachPlayer
@Hero tracer
if eventPlayer.A == 0:
    eventPlayer.B = 0
    destroyHudText(eventPlayer.T[66])


@Rule "TICK COOLDOWN TIMER"
@Event eachPlayer
@Hero tracer
if eventPlayer.A > 0:
    chase(eventPlayer.A, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)


@Rule "DEBUG: SHOW RTD RESULT VARIABLE"
@Event eachPlayer
@Hero tracer
if false:
    hudHeader(eventPlayer, eventPlayer.B, Position.LEFT, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)


@Rule "SHOW RTD TIMER"
@Event eachPlayer
@Hero tracer
hudText(eventPlayer, heroIcon(eventPlayer.getCurrentHero()), "Time", eventPlayer.A, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
eventPlayer.T[40] = getLastCreatedText()


@Rule "RESET ROLLS BETWEEN ROUNDS (CONTROl, ELIMINATION)"
@Event eachPlayer
@Hero tracer
if isMatchBetweenRounds():
    eventPlayer.clearStatusEffect(Status.HACKED)
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.KNOCKED_DOWN)
    eventPlayer.clearStatusEffect(Status.ASLEEP)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.clearStatusEffect(Status.INVINCIBLE)
    eventPlayer.clearStatusEffect(Status.STUNNED)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setDamageDealt(100)
    eventPlayer.setDamageReceived(100)
    stopHoT(eventPlayer.A)
    stopDoT(getLastDoT())
    eventPlayer.A = 0
    eventPlayer.B = 0
    eventPlayer.setMaxHealth(100)
    eventPlayer.stopForcingCurrentHero()


@Rule "1 - Sleep (SLEPT)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 1:
    eventPlayer.setStatusEffect(null, Status.ASLEEP, A / 2)
    bigMessage(eventPlayer, "{}: Slept".format(eventPlayer))
    hudHeader(eventPlayer, "Slept", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "2 - HACKED"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 2:
    eventPlayer.setStatusEffect(null, Status.HACKED, A)
    bigMessage(eventPlayer, "{}: Hacked".format(eventPlayer))
    hudHeader(eventPlayer, "Hacked", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "3 - FROZEN"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 3:
    eventPlayer.setStatusEffect(null, Status.FROZEN, A / 2)
    bigMessage(eventPlayer, "{}: Frozen".format(eventPlayer))
    hudHeader(eventPlayer, "Frozen", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "4 - BURNING"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 4:
    eventPlayer.setStatusEffect(null, Status.BURNING, A)
    eventPlayer.startDoT(null, A, 20)
    bigMessage(eventPlayer, "{}: Burning".format(eventPlayer))
    hudHeader(eventPlayer, "Burning", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "5 - LIGHT BEAM (REVEALED)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 5:
    bigMessage(eventPlayer, "{}: Revealed".format(eventPlayer))
    createIcon(getPlayers(getOppositeTeam(eventPlayer.getTeam())), eventPlayer, Icon.EYE, IconReeval.VISIBILITY_AND_POSITION, Color.BLUE, true)
    hudHeader(eventPlayer, "Revealed", Position.TOP, 0, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    destroyAllIcons()


@Rule "6 - LOSE HALF OF REMAINING HP (DAMAGED)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 6:
    bigMessage(eventPlayer, "{}: Damaged".format(eventPlayer))
    damage(eventPlayer, eventPlayer, eventPlayer.getHealth() / 2)
    hudHeader(eventPlayer, "Damaged", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "7 - RETURN TO SPAWN (SPAWN)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 7 and not eventPlayer.isInSpawnRoom():
    eventPlayer.respawn()
    bigMessage(eventPlayer, "{}: Spawn".format(eventPlayer))
    hudHeader(eventPlayer, "Spawn", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "8 - 200% DAMAGE TAKEN (LESS DEFENDING)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 8:
    eventPlayer.setDamageReceived(200)
    bigMessage(eventPlayer, "{}: Less Defending".format(eventPlayer))
    hudHeader(eventPlayer, "Less Defending", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    wait(A)
    eventPlayer.setDamageReceived(100)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "10 - CANNOT DIE (NO dying)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 10:
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, A)
    bigMessage(eventPlayer, "{}: No Dying".format(eventPlayer))
    hudHeader(eventPlayer, "No Dying", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "11 - 200% DAMAGE DEALT (CRITICAL ATTACK)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 11:
    eventPlayer.setDamageDealt(200)
    bigMessage(eventPlayer, "{}: Critical Attack".format(eventPlayer))
    hudHeader(eventPlayer, "Critical Attack", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setDamageDealt(100)


@Rule "12 - 50% DAMAGE TAKEN (more defending)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 12:
    eventPlayer.setDamageReceived(50)
    bigMessage(eventPlayer, "{}: More Defending".format(eventPlayer))
    hudHeader(eventPlayer, "More Defending", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setDamageReceived(100)


@Rule "13 - PASSIVE HEAL (HEALING)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 13:
    bigMessage(eventPlayer, "{}: Healing".format(eventPlayer))
    eventPlayer.startHoT(eventPlayer, A, 50)
    hudHeader(eventPlayer, "Healing", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "14 - 200% MOVE SPEED (FASTER)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 14:
    eventPlayer.setMoveSpeed(200)
    bigMessage(eventPlayer, "{}: Faster".format(eventPlayer))
    hudHeader(eventPlayer, "Faster", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setMoveSpeed(100)


@Rule "15 - INVISIBLE"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 15:
    eventPlayer.setInvisibility(Invis.ALL)
    bigMessage(eventPlayer, "Invisible")
    hudHeader(eventPlayer, "Invisible", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setInvisibility(Invis.NONE)


@Rule "16 - KILL RANDOM PLAYER"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 16:
    kill(random.choice(getLivingPlayers(Team.ALL)), eventPlayer)
    bigMessage(getAllPlayers(), "{}: Eliminating Participant".format(eventPlayer))
    hudHeader(eventPlayer, "Eliminating Participant", Position.TOP, 0, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "17 - GET YOUR ULTIMATE (ULTIMATE ABILITY)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 17:
    bigMessage(eventPlayer, "{}: Ultimate Ability".format(eventPlayer))
    hudHeader(eventPlayer, "Ultimate Ability", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    eventPlayer.setUltCharge(100)


@Rule "18 - 50% MOVE SPEED (SLOWER)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 18:
    eventPlayer.setMoveSpeed(50)
    bigMessage(eventPlayer, "{}: Slower".format(eventPlayer))
    hudHeader(eventPlayer, "Slower", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setMoveSpeed(100)


@Rule "19 - INfinite jumps (MORE JUMPING)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 19:
    bigMessage(eventPlayer, "{}: More Jumping".format(eventPlayer))
    hudHeader(eventPlayer, "More Jumping", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "19 - EXTRA JUMP ON JUMP BUTTON"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 19 and eventPlayer.isHoldingButton(Button.JUMP):
    eventPlayer.applyImpulse(Vector.UP, 10, Relativity.TO_PLAYER, Impulse.CANCEL_CONTRARY_MOTION)


@Rule "20 - stunned"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 20:
    eventPlayer.setStatusEffect(null, Status.STUNNED, 0.75)
    bigMessage(eventPlayer, "{}: Stunned".format(eventPlayer))
    hudHeader(eventPlayer, "Stunned", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "21 - RANDOM PUSH (GOODBYE)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 21:
    do:
        eventPlayer.applyImpulse(vect(random.randint(-40, 40), random.randint(20, 40), random.randint(-20, 20)), 25, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        wait(A / 5)
    while RULE_CONDITION


@Rule "21 - RANDOM PUSH TEXT (GOODBYE)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 21:
    bigMessage(eventPlayer, "{}: Goodbye".format(eventPlayer))
    hudHeader(eventPlayer, "Goodbye", Position.TOP, 0, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "22 - 10000% DAMAGE DEALT (EXTREME ATTACK)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 22:
    eventPlayer.setDamageDealt(10000)
    bigMessage(eventPlayer, "{}: Extreme Attack".format(eventPlayer))
    hudHeader(eventPlayer, "Extreme Attack", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setDamageDealt(100)


@Rule "23 - FORCED HELLO"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 23:
    do:
        eventPlayer.communicate(Comms.HELLO)
        wait(3.25, Wait.ABORT_WHEN_FALSE)
    while RULE_CONDITION


@Rule "23 - FORCED HELLO TEXT (HELLO)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 23:
    bigMessage(eventPlayer, "{}: Hello".format(eventPlayer))
    hudHeader(eventPlayer, "Hello", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "24 - FORCED THANKS"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 24:
    do:
        eventPlayer.communicate(Comms.THANKS)
        wait(3.25, Wait.ABORT_WHEN_FALSE)
    while RULE_CONDITION


@Rule "24 - FORCED THANKS TEXT (THANKS)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 24:
    bigMessage(eventPlayer, "{}: Thanks".format(eventPlayer))
    hudHeader(eventPlayer, "Thanks", Position.TOP, 0, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "25 - 150HP/Sec HEALING (EXTREME HEALING)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 25:
    bigMessage(eventPlayer, "{}: Extreme Healing".format(eventPlayer))
    eventPlayer.startHoT(eventPlayer, A, 150)
    hudHeader(eventPlayer, "Extreme Healing", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "26 - DEATH TO PLAYERS IN RADIUS (ELIMINATING NEAR PLAYERS)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 26:
    bigMessage(eventPlayer, "{}: Eliminating Near Participants".format(eventPlayer))
    hudHeader(eventPlayer, "Eliminating Near Participants", Position.TOP, 0, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    kill(getPlayersInRadius(eventPlayer, 10, Team.ALL, LosCheck.OFF), eventPlayer)


@Rule "27 - REVIVE NEARBY PLAYERS (RESURRECTING NEAR TEAMMATES)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 27:
    bigMessage(eventPlayer, "{}: Resurrecting Near Teammates".format(eventPlayer))
    hudHeader(eventPlayer, "Resurrecting Near Teammates", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    for player in getPlayersInRadius(eventPlayer, 35, eventPlayer.getTeam(), LosCheck.OFF):
        player.resurrect()


@Rule "28 - EARTH SHATTERED (fallen)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 28:
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, A / 2)
    damage(eventPlayer, null, 50)
    bigMessage(eventPlayer, "{}: Fallen".format(eventPlayer))
    hudHeader(eventPlayer, "Fallen", Position.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "29 - INFINITE ULT"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 29:
    do:
        eventPlayer.setUltCharge(100)
        wait(0.25)
    while RULE_CONDITION


@Rule "29 - INFINITE ULT TEXT (ULTIMATE ABILITY FASTER)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 29:
    bigMessage(eventPlayer, "{}: Ultimate Ability Faster".format(eventPlayer))
    hudHeader(eventPlayer, "Ultimate Ability Faster", Position.TOP, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()


@Rule "30 - 500% Projectile speed (FASTER ATTACKING)"
@Event eachPlayer
@Hero tracer
if eventPlayer.B == 30:
    eventPlayer.setProjectileSpeed(500)
    bigMessage(eventPlayer, "{}: Faster Attacking".format(eventPlayer))
    hudHeader(eventPlayer, "Faster Attacking", Position.TOP, 0, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[66] = getLastCreatedText()
    wait(A)
    eventPlayer.setProjectileSpeed(100)


@Rule "TEAM KILL set x"
@Event eachPlayer
@Hero tracer
do:
    wait()
    eventPlayer.J = raycast(eventPlayer.getEyePosition(), eventPlayer.getFacingDirection() * 1000 + eventPlayer.getEyePosition(), include=getAllPlayers(), exclude=eventPlayer, includePlayerObjects=false).getPlayerHit()
while true


@Rule "TEAM KILL headshot"
@Event eachPlayer
@Hero tracer
if distance(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.J]), [player.getEyePosition() for player in eventPlayer.J]) < 0.15:
    eventPlayer.X = 2


@Rule "TEAM KILL disable headshot"
@Event eachPlayer
@Hero tracer
if distance(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.J]), [player.getEyePosition() for player in eventPlayer.J]) > 0.15:
    eventPlayer.X = 1


@Rule "TEAM KILL damage"
@Event eachPlayer
@Hero tracer
if eventPlayer.isFiringPrimaryFire():
    do:
        damage(eventPlayer.J, eventPlayer, 12 * eventPlayer.X)
        wait(0.05, Wait.ABORT_WHEN_FALSE)
    while true


@Rule "Knockdown when tracer kills ally"
@Event playerDealtFinalBlow
@Hero tracer
if [player.isDead() for player in eventPlayer.getPlayerClosestToReticle(eventPlayer.getTeam())]:
    eventPlayer.setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 30)


@Rule "================================================== Widowmaker =================================================="
@Event eachPlayer
@Hero widowmaker
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setMoveSpeed(60)
        eventPlayer.setDamageDealt(165)
        destroyHudText(eventPlayer.T[28])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (widowmaker)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.WIDOWMAKER:
    destroyHudText(eventPlayer.T[28])


@Rule "##### SPAWN HUD (widowmaker)"
@Event eachPlayer
@Hero widowmaker
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Jump: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[28] = getLastCreatedText()


@Rule "Widow jump"
@Event eachPlayer
@Hero widowmaker
if eventPlayer.isHoldingButton(Button.JUMP) and eventPlayer.getAltitude() < 4:
    eventPlayer.C[23] = true


@Rule "Jump activate"
@Event eachPlayer
@Hero widowmaker
if eventPlayer.C[23] and eventPlayer.isInAir():
    eventPlayer.applyImpulse(Vector.UP, 30, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setGravity(1)
    eventPlayer.setMoveSpeed(0)
    wait(5)
    eventPlayer.C[23] = false


@Rule "Jump false"
@Event eachPlayer
@Hero widowmaker
if not eventPlayer.C[23]:
    eventPlayer.setGravity(100)
    eventPlayer.setMoveSpeed(100)


@Rule "Widow on ground"
@Event eachPlayer
@Hero widowmaker
if eventPlayer.isOnGround():
    eventPlayer.C[23] = false


@Rule "Widow graple"
@Event eachPlayer
@Hero widowmaker
if eventPlayer.isHoldingButton(Button.ABILITY_1):
    eventPlayer.C[23] = false


@Rule "Widow primary delay"
@Event eachPlayer
@Hero widowmaker
if eventPlayer.isFiringPrimaryFire() and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE):
    eventPlayer.setPrimaryFireEnabled(false)
    wait(1.3)
    eventPlayer.setPrimaryFireEnabled(true)


@Rule "================================================== Winston =================================================="
@Event eachPlayer
@Hero winston
if teamHasHero(Hero.WINSTON, Team.ALL) and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(800)
        eventPlayer.setDamageReceived(50)
        eventPlayer.setHealingReceived(100)
        eventPlayer.setGravity(65)
        eventPlayer.setMoveSpeed(80)
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.setAbility2Enabled(false)
        destroyHudText(eventPlayer.T[29])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (winston)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.WINSTON:
    destroyHudText(eventPlayer.T[29])


@Rule "##### SPAWN HUD (winston)"
@Event eachPlayer
@Hero winston
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Jump: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[29] = getLastCreatedText()


@Rule "Winston on ground"
@Event eachPlayer
@Hero winston
if not eventPlayer.isInSpawnRoom() and eventPlayer.isOnGround():
    eventPlayer.setAbility1Enabled(true)


@Rule "Winston off ground"
@Event eachPlayer
@Hero winston
if not eventPlayer.isInSpawnRoom() and not eventPlayer.isOnGround():
    eventPlayer.setAbility1Enabled(false)


@Rule "================================================== W-Ball =================================================="
@Event eachPlayer
@Hero hammond
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(150)
        eventPlayer.setDamageReceived(90)
        eventPlayer.setGravity(115)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setAbility2Enabled(false)
        destroyHudText(eventPlayer.T[32])
        destroyHudText(eventPlayer.T[33])
        eventPlayer.setMoveSpeed(110)
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (w-ball)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.HAMMOND:
    destroyHudText(eventPlayer.T[30])
    destroyHudText(eventPlayer.T[31])
    destroyHudText(eventPlayer.T[32])
    destroyHudText(eventPlayer.T[33])


@Rule "##### SPAWN HUD (w-ball)"
@Event eachPlayer
@Hero hammond
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[32] = getLastCreatedText()
    hudHeader(eventPlayer, "Ability 2: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[33] = getLastCreatedText()


@Rule "CAMERA W-ball"
@Event eachPlayer
@Hero hammond
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setCamera(eventPlayer + worldVector(vect(-0.1, 1.75, -2), eventPlayer, Transform.ROTATION) + Vector.UP * 1.25 + eventPlayer.getFacingDirection() * -1, eventPlayer + eventPlayer.getFacingDirection() * 60, 0)
        wait(0.25)
    while RULE_CONDITION
    eventPlayer.stopCamera()


@Rule "W-ball passive"
@Event eachPlayer
@Hero hammond
if entityExists(getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES)) and getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES) and eventPlayer.isMoving():
    damage(getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES), eventPlayer, 70)
    for player in getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES):
        player.applyImpulse(eventPlayer.getFacingDirection(), 40, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 0.01)
    wait(1.5)


@Rule "FREEZE VORTEX | W-ball ability 1 activate"
@Event eachPlayer
@Hero hammond
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[15] = true
    destroyHudText(eventPlayer.T[30])
    eventPlayer.Z = 20
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Freeze Vortex".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[30] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[30])
    hudHeader(eventPlayer, "{} Vortex Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[30] = getLastCreatedText()


@Rule "FREEZE VORTEX | W-ball ability 1 effect (on self)"
@Event eachPlayer
@Hero hammond
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[15]:
    eventPlayer.startFacing(Vector.LEFT, 350, Relativity.TO_PLAYER, FacingReeval.DIRECTION_AND_TURN_RATE)
    createEffect(getAllPlayers(), Effect.RING, Color.BLUE, eventPlayer, 3.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    for player in getPlayersInRadius(eventPlayer, 5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES):
        player.setStatusEffect(null, Status.FROZEN, 5)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 3)
    wait(3)
    eventPlayer.stopFacing()
    destroyAllEffects()
    eventPlayer.C[15] = false


@Rule "IMPULSE | W-ball ability 2 activate"
@Event eachPlayer
@Hero hammond
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_2) and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    eventPlayer.C[36] = true
    destroyHudText(eventPlayer.T[31])
    eventPlayer.E = 15
    chase(eventPlayer.E, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Forward Attack".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.E, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[31] = getLastCreatedText()
    wait(eventPlayer.E)
    destroyHudText(eventPlayer.T[31])
    hudHeader(eventPlayer, "{} Forward Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[31] = getLastCreatedText()


@Rule "IMPULSE | W-ball ability 2 effect (on self/enemy)"
@Event eachPlayer
@Hero hammond
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[36]:
    eventPlayer.C[36] = false
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.YELLOW, eventPlayer, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.applyImpulse(eventPlayer.getFacingDirection(), 130, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    damage(getPlayersInRadius(eventPlayer, 1.5, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES), eventPlayer, 500)
    wait(6)
    destroyAllEffects()


@Rule "================================================== Zarya =================================================="
@Event eachPlayer
@Hero zarya
if not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setDamageDealt(150)
        eventPlayer.setDamageReceived(125)
        eventPlayer.setHealingReceived(225)
        eventPlayer.setMoveSpeed(85)
        eventPlayer.setProjectileGravity(150)
        destroyHudText(eventPlayer.T[36])
        destroyHudText(eventPlayer.T[37])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        wait(5)
    while true


@Rule "##### NOT HUD (zarya)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.ZARYA:
    destroyHudText(eventPlayer.T[34])
    destroyHudText(eventPlayer.T[35])
    destroyHudText(eventPlayer.T[36])
    destroyHudText(eventPlayer.T[37])


@Rule "##### SPAWN HUD (zarya)"
@Event eachPlayer
@Hero zarya
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Ability 1: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[36] = getLastCreatedText()
    hudHeader(eventPlayer, "Ultimate Ability: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[37] = getLastCreatedText()


@Rule "SINK LOCK | Zarya secondary activate"
@Event eachPlayer
@Hero zarya
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ABILITY_1) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam())):
        player.C[43] = true
    destroyHudText(eventPlayer.T[34])
    eventPlayer.Z = 60
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Sink Lock".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[34] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[34])
    hudHeader(eventPlayer, "{} Sink Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[34] = getLastCreatedText()


@Rule "SINK LOCK | Zarya secondary effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[43]:
    eventPlayer.C[43] = false
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer, 1)
    bigMessage(eventPlayer, "{} Sunk You".format(Hero.ZARYA))
    eventPlayer.disallowButton(Button.JUMP)
    eventPlayer.setGravity(500)
    eventPlayer.setProjectileGravity(500)
    wait(40)
    eventPlayer.setGravity(100)
    eventPlayer.setProjectileGravity(100)
    eventPlayer.allowButton(Button.JUMP)
    bigMessage(eventPlayer, "{} Sink Over".format(Hero.ZARYA))


@Rule "Zarya ult ready"
@Event eachPlayer
@Hero zarya
if eventPlayer.getUltCharge() == 100 and not eventPlayer.isInSpawnRoom():
    eventPlayer.C[18] = true
    eventPlayer.setUltEnabled(false)
    bigMessage(eventPlayer, "Ultimate Ability Ready")
    hudHeader(eventPlayer, "{} Ultimate Ability Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[35] = getLastCreatedText()


@Rule "Zarya use ult"
@Event eachPlayer
@Hero zarya
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.ULTIMATE) and eventPlayer.C[18]:
    eventPlayer.setUltEnabled(false)
    destroyHudText(eventPlayer.T[35])
    eventPlayer.C[18] = false
    for player in getPlayersInRadius(eventPlayer, 14, getOppositeTeam(eventPlayer.getTeam()), LosCheck.SURFACES):
        player.C[22] = true
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer, 14)
    wait(3)
    destroyAllEffects()
    eventPlayer.setUltEnabled(true)


@Rule "Zarya ult on enemy"
@Event eachPlayer
if eventPlayer.C[22]:
    eventPlayer.C[18] = false
    bigMessage(eventPlayer, "{} Ultimate Ability".format(Hero.ZARYA))
    eventPlayer.applyImpulse(Vector.UP, 25, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 60)
    eventPlayer.C[44] = true
    wait(1)
    eventPlayer.C[22] = false


@Rule "Zarya enemy fall"
@Event eachPlayer
if eventPlayer.C[44] and eventPlayer.getAltitude() < 1 and eventPlayer.isOnGround() and not eventPlayer.C[22]:
    eventPlayer.C[44] = false
    eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 30)


@Rule "================================================== Zenyatta =================================================="
@Event eachPlayer
@Hero zenyatta
if teamHasHero(Hero.ZENYATTA, Team.ALL) and not eventPlayer.isInSpawnRoom():
    do:
        eventPlayer.setDamageDealt(35)
        eventPlayer.setDamageReceived(120)
        eventPlayer.setHealingDealt(75)
        eventPlayer.setHealingReceived(75)
        eventPlayer.setSecondaryFireEnabled(false)
        destroyHudText(eventPlayer.T[39])
        destroyHudText(eventPlayer.T[16])
        destroyHudText(eventPlayer.T[11])
        eventPlayer.setProjectileSpeed(100)
        wait(5)
    while true


@Rule "##### NOT HUD (zenyatta)"
@Event eachPlayer
if eventPlayer.getCurrentHero() != Hero.ZENYATTA:
    destroyHudText(eventPlayer.T[38])
    destroyHudText(eventPlayer.T[39])


@Rule "##### SPAWN HUD (zenyatta)"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.isInSpawnRoom():
    hudHeader(eventPlayer, "Secondary Fire: Unlocked", Position.RIGHT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[39] = getLastCreatedText()


@Rule "Zen melee damage"
@Event eachPlayer
@Hero zenyatta
if eventPlayer.isFiringPrimaryFire() != true and not eventPlayer.isInSpawnRoom():
    eventPlayer.setDamageDealt(125)
    wait(0.75)
    eventPlayer.setDamageDealt(35)


@Rule "PHASE LOCK | Zen secondary activate"
@Event eachPlayer
@Hero zenyatta
if not eventPlayer.isInSpawnRoom() and eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) and distance(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))]) < 60 and eventPlayer.isInViewAngle([player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], 20) and raycast(eventPlayer.getEyePosition(), [player.getEyePosition() for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam()))], los=BarrierLos.PASS_THROUGH_BARRIERS).hasLoS() and eventPlayer.hasStatusEffect(Status.HACKED) != true and eventPlayer.hasStatusEffect(Status.KNOCKED_DOWN) != true and eventPlayer.hasStatusEffect(Status.ASLEEP) != true and eventPlayer.hasStatusEffect(Status.FROZEN) != true and eventPlayer.hasStatusEffect(Status.STUNNED) != true:
    for player in eventPlayer.getPlayerClosestToReticle(getOppositeTeam(eventPlayer.getTeam())):
        player.C[17] = true
    destroyHudText(eventPlayer.T[38])
    eventPlayer.Z = 45
    chase(eventPlayer.Z, 0, rate=1, ChaseReeval.DESTINATION_AND_RATE)
    hudText(eventPlayer, "{} Phase Lock".format(heroIcon(eventPlayer.getCurrentHero())), "Time", eventPlayer.Z, Position.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[38] = getLastCreatedText()
    wait(eventPlayer.Z)
    destroyHudText(eventPlayer.T[38])
    hudHeader(eventPlayer, "{} Lock Ready".format(heroIcon(eventPlayer.getCurrentHero())), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    eventPlayer.T[38] = getLastCreatedText()


@Rule "PHASE LOCK | Zen secondary effect (on enemy)"
@Event eachPlayer
if not eventPlayer.isInSpawnRoom() and eventPlayer.C[17]:
    eventPlayer.C[17] = false
    eventPlayer.setUltEnabled(false)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.applyImpulse(Vector.UP, 4, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 5)
    eventPlayer.setMoveSpeed(abs(0))
    eventPlayer.setGravity(abs(0))
    wait(0.5)
    wait(0.3)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.BLUE, eventPlayer, 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(5)
    eventPlayer.setGravity(100)
    destroyAllEffects()
    eventPlayer.setMoveSpeed(100)
    eventPlayer.applyImpulse(Vector.DOWN, 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setUltEnabled(true)
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(true)


