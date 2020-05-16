#!mainFile "meipocalypse.opy"

@Rule "detect down player"
@Event eachPlayer
@Team 1
if eventPlayer.getHealth() < 2 and gameStatus == GAME_IN_PROGRESS and eventPlayer.isAlive() and eventPlayer.hasSpawned():
    wait(0.032, Wait.ABORT_WHEN_FALSE)
    eventPlayer.isDown = true


@Rule "player is down"
@Event eachPlayer
@Team 1
if eventPlayer.isDown:
    eventPlayer.setMoveSpeed(15)
    eventPlayer.isRezzing = false
    eventPlayer.startForcingButton(Button.CROUCH)
    bigMessage([player for player in getPlayers(Team.1) if player != eventPlayer], "{} down!".format(eventPlayer))
    smallMessage([player for player in getPlayers(Team.1) if player != eventPlayer], "Hold Crouch to resurrect".format(eventPlayer))
    bigMessage(eventPlayer, "Fight for your life!")
    smallMessage(eventPlayer, "Kill an enemy to revive")
    eventPlayer.nbRez = (eventPlayer.nbRez+1)*(eventPlayer.secondWindRezTimer < 30)
    eventPlayer.maxDownTimer = 13 - 3*(eventPlayer.nbRez >= 1) - 3*(eventPlayer.nbRez >= 2) - 3*(eventPlayer.nbRez >= 3) - 2.5*(eventPlayer.nbRez >= 4)
    eventPlayer.downTimer = eventPlayer.maxDownTimer
    eventPlayer.setStatusEffect(null, Status.HACKED, 9999)
    eventPlayer.setHealingReceived(100)
    eventPlayer.progressBarInt = 10
    eventPlayer.setInvisibility(Invis.ENEMIES)
    damage(eventPlayer, null, 9999)
    chase(eventPlayer.downTimer, 0, rate=1, ChaseReeval.NONE)
    

@Rule "player is down - randomize aim & display hud texts"
@Event eachPlayer
@Team 1
if eventPlayer.isDown:
    do:
        eventPlayer.setAimSpeed(random.randint(10, 200))
        if eventPlayer.downTimer/eventPlayer.maxDownTimer*10 < eventPlayer.progressBarInt:
            destroyHudText(eventPlayer.progressHudText)
            wait(0.016)
            createFfylHud({
                1: "■□□□□□□□□□",
                2: "■■□□□□□□□□",
                3: "■■■□□□□□□□",
                4: "■■■■□□□□□□",
                5: "■■■■■□□□□□",
                6: "■■■■■■□□□□",
                7: "■■■■■■■□□□",
                8: "■■■■■■■■□□",
                9: "■■■■■■■■■□",
                10:"■■■■■■■■■■",
            }[eventPlayer.downTimer/eventPlayer.maxDownTimer*10])
            
            switch ceil(eventPlayer.downTimer/eventPlayer.maxDownTimer*10):
                case 1:
                    createFfylHud("■□□□□□□□□□")
                    break
                case 2:
                    createFfylHud("■■□□□□□□□□")
                    break
                case 3:
                    createFfylHud("■■■□□□□□□□")
                    break
                case 4:
                    createFfylHud("■■■■□□□□□□")
                    break
                case 5:
                    createFfylHud("■■■■■□□□□□")
                    break
                case 6:
                    createFfylHud("■■■■■■□□□□")
                    break
                case 7:
                    createFfylHud("■■■■■■■□□□")
                    break
                case 8:
                    createFfylHud("■■■■■■■■□□")
                    break
                case 9:
                    createFfylHud("■■■■■■■■■□")
                    break
                case 10:
                    createFfylHud("■■■■■■■■■■")
                
            eventPlayer.progressBarInt = floor(eventPlayer.downTimer/eventPlayer.maxDownTimer*10)
            eventPlayer.progressHudText = getLastCreatedText()
        wait(0.1)
    while RULE_CONDITION
    destroyHudText(eventPlayer.progressHudText)


@Rule "player is dead"
@Event eachPlayer
@Team 1
if eventPlayer.isDead():
    eventPlayer.isDown = false
    eventPlayer.isRezzing = false
    eventPlayer.nbRez = 0

@Rule "player is back up"
@Event eachPlayer
@Team 1
if not eventPlayer.isDown:
    destroyHudText(eventPlayer.progressHudText)
    destroyInWorldText(eventPlayer.ffylInWorldText)
    eventPlayer.stopForcingButton(Button.CROUCH)
    eventPlayer.setAimSpeed(100)
    eventPlayer.setMoveSpeed(100)
    stopChasingVariable(eventPlayer.downTimer)
    eventPlayer.setHealingReceived(100)
    eventPlayer.secondWindRezTimer = 0
    wait(0.1)
    heal(eventPlayer, null, eventPlayer.getMaxHealth()*0.15)
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.clearStatusEffect(Status.HACKED)
    if eventPlayer.isAlive():
        eventPlayer.shieldHealth = eventPlayer.getMaxHealth()*1.5

@Rule "player is rezzing?"
@Event eachPlayer
@Team 1
if gameStatus == GAME_IN_PROGRESS and not eventPlayer.isDown and eventPlayer.isAlive() and eventPlayer.isCrouching():
    eventPlayer.rezTarget = [player for player in getPlayers(Team.1) if player.isDown and distance(player.getPosition(), eventPlayer.getPosition()) < 4][0]
    if eventPlayer.rezTarget != null:
        eventPlayer.isRezzing = true
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setUltEnabled(false)
        smallMessage(eventPlayer, "Resurrecting {}".format(eventPlayer.rezTarget))
        stopChasingVariable(eventPlayer.rezTarget.downTimer)
        eventPlayer.rezTimer = 0
        chase(eventPlayer.rezTimer, 9999, rate=1, ChaseReeval.NONE)
        eventPlayer.progressBarInt = 0
        eventPlayer.setMoveSpeed(50)


@Rule "player is rezzing"
@Event eachPlayer
@Team 1
if eventPlayer.isRezzing and eventPlayer.isCrouching() and eventPlayer.rezTarget.isDown and distance(eventPlayer.getPosition(), eventPlayer.rezTarget.getPosition()) < 4 and eventPlayer.rezTimer < REZ_DURATION:
    do:
        if eventPlayer.rezTimer/REZ_DURATION*10 > eventPlayer.progressBarInt:
            destroyHudText(eventPlayer.progressHudText)
            eventPlayer.progressBarInt = ceil(eventPlayer.rezTimer/REZ_DURATION*10)
            wait(0.016)
            if eventPlayer.rezTimer < REZ_DURATION/10:
                createRezHud("Resurrecting {}... □□□□□□□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*2:
                createRezHud("Resurrecting {}... ■□□□□□□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*3:
                createRezHud("Resurrecting {}... ■■□□□□□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*4:
                createRezHud("Resurrecting {}... ■■■□□□□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*5:
                createRezHud("Resurrecting {}... ■■■■□□□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*6:
                createRezHud("Resurrecting {}... ■■■■■□□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*7:
                createRezHud("Resurrecting {}... ■■■■■■□□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*8:
                createRezHud("Resurrecting {}... ■■■■■■■□□□".format(eventPlayer.rezTarget))
            elif eventPlayer.rezTimer < REZ_DURATION/10*9:
                createRezHud("Resurrecting {}... ■■■■■■■■□□".format(eventPlayer.rezTarget))
            else:
                createRezHud("Resurrecting {}... ■■■■■■■■■□".format(eventPlayer.rezTarget))
            eventPlayer.progressHudText = getLastCreatedText()
        wait(0.1)
    while RULE_CONDITION
    if eventPlayer.rezTimer > REZ_DURATION:
        stopChasingVariable(eventPlayer.rezTimer)
        eventPlayer.rezTarget.isDown = false
        smallMessage(eventPlayer, "Resurrected {}".format(eventPlayer.rezTarget))
        bigMessage(eventPlayer.rezTarget, "Resurrected by {}".format(eventPlayer))
    eventPlayer.isRezzing = false

@Rule "player is no longer rezzing"
@Event eachPlayer
@Team 1
if not eventPlayer.isRezzing:
    eventPlayer.setPrimaryFireEnabled(true)
    stopChasingVariable(eventPlayer.rezTimer)
    if eventPlayer.rezTarget.isDown:
        chase(eventPlayer.rezTarget.downTimer, 0, rate=1, ChaseReeval.NONE)
    if not eventPlayer.isDown:
        eventPlayer.setMoveSpeed(100)
        eventPlayer.setAbility1Enabled(playersUnlockedAbility1[eventPlayer.getSlot()])
        eventPlayer.setAbility2Enabled(playersUnlockedAbility2[eventPlayer.getSlot()])
        eventPlayer.setUltEnabled(playersUnlockedUltimate[eventPlayer.getSlot()])
        eventPlayer.setSecondaryFireEnabled(playersUnlockedSecondaryFire[eventPlayer.getSlot()])

@Rule "second wind"
@Event playerDealtFinalBlow
@Team 1
if eventPlayer.isDown:
    eventPlayer.isDown = false
    bigMessage(eventPlayer, "Second wind")

@Rule "player dead"
@Event eachPlayer
@Team 1
if eventPlayer.isDown and eventPlayer.downTimer <= 0:
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.startDoT(random.choice(getPlayers(Team.2)), 1, 9999)

@Rule "player shield"
@Event eachPlayer
@Team 1
if eventPlayer.shieldHealth > 0:
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, eventPlayer.getPosition()+vect(0,1,0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.effect = getLastCreatedEntity()
    eventPlayer.setDamageReceived(1)
    hudHeader(eventPlayer, "Shield health: {}/{}".format(floor(eventPlayer.shieldHealth), eventPlayer.getMaxHealth()*1.5), Position.LEFT, 10, Color.BLUE, HudReeval.STRING, SpecVisibility.DEFAULT)
    eventPlayer.shieldHud = getLastCreatedText()

@Rule "player shield damage"
@Event playerTookDamage
@Team 1
if victim.shieldHealth > 0:
    victim.shieldHealth -= eventDamage*100
    heal(eventPlayer, null, eventDamage)

@Rule "player shield breaks"
@Event eachPlayer
@Team 1
if eventPlayer.shieldHealth <= 0:
    destroyEffect(eventPlayer.effect)
    eventPlayer.setDamageReceived(100)
    destroyHudText(eventPlayer.shieldHud)
