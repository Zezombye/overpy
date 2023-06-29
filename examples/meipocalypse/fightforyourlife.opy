#!mainFile "meipocalypse.opy"

playervar isDown
playervar secondWindRezTimer
playervar downTimer
playervar nbRez
playervar isRezzing
playervar progressHudText
playervar ffylInWorldText
playervar maxDownTimer
playervar rezTarget
playervar rezTimer
playervar shieldHealth
playervar ffylHealthPool
#!define REZ_DURATION 4



rule "detect down player":
	@Event eachPlayer
	@Team 1
	@Condition eventPlayer.getHealth() < 2 and gameStatus == GameStatus.IN_WAVE and eventPlayer.isAlive() and eventPlayer.hasSpawned()
    wait(0.032, Wait.ABORT_WHEN_FALSE)
    eventPlayer.isDown = true


rule "player is down":
	@Event eachPlayer
	@Team 1
	@Condition eventPlayer.isDown
    eventPlayer.setMoveSpeed(15)
    eventPlayer.isRezzing = false
    removeHealthPool(eventPlayer.ffylHealthPool)
    eventPlayer.startForcingButton(Button.CROUCH)
    bigMessage(getPlayers(Team.1).exclude(eventPlayer), "{} down!".format(eventPlayer))
    smallMessage(getPlayers(Team.1).exclude(eventPlayer), "Hold Crouch to resurrect".format(eventPlayer))
    bigMessage(eventPlayer, "Fight for your life!")
    eventPlayer.nbRez = (eventPlayer.nbRez+1)*(eventPlayer.secondWindRezTimer < 30)
    eventPlayer.maxDownTimer = 13 - 3*(eventPlayer.nbRez >= 1) - 3*(eventPlayer.nbRez >= 2) - 3*(eventPlayer.nbRez >= 3) - 2.5*(eventPlayer.nbRez >= 4)
    eventPlayer.downTimer = eventPlayer.maxDownTimer
    eventPlayer.setStatusEffect(null, Status.HACKED, 9999)
    eventPlayer.setHealingReceived(100)
    eventPlayer.setInvisibility(Invis.ENEMIES)
    damage(eventPlayer, null, 9999)
    chase(eventPlayer.downTimer, 0, rate=1, ChaseReeval.NONE)
    

rule "player is down - randomize aim & display hud texts":
	@Event eachPlayer
	@Team 1
	@Condition eventPlayer.isDown
    do:
        eventPlayer.setAimSpeed(random.randint(10, 200))
        wait(0.1)
    while RULE_CONDITION

    #player is back up

    destroyProgressBarHud(eventPlayer.progressHudText)
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
        wait(0.1)
        eventPlayer.addHealthPool(Health.SHIELDS, eventPlayer.shieldHealth, false, true)
        eventPlayer.ffylHealthPool = getLastCreatedHealthPool()


rule "player is down - display timer bar":
	@Event eachPlayer
	@Team 1
    @Condition eventPlayer.isDown
    progressBarHud(eventPlayer, eventPlayer.downTimer/eventPlayer.maxDownTimer*100, "Kill an enemy to revive", HudPosition.TOP, SortOrderTop.FFYL_HUD, Color.RED, Color.RED, ProgressHudReeval.VISIBILITY_AND_VALUES, SpecVisibility.DEFAULT)
    eventPlayer.progressHudText = getLastCreatedText()

rule "player no longer down, delete health pool after 5 seconds":
	@Event eachPlayer
	@Team 1
    @Condition not eventPlayer.isDown
    wait(5, Wait.ABORT_WHEN_FALSE)
    removeHealthPool(eventPlayer.ffylHealthPool)


rule "player is dead":
	@Event eachPlayer
	@Team 1
	@Condition eventPlayer.isDead()
    eventPlayer.isDown = false
    eventPlayer.isRezzing = false
    eventPlayer.nbRez = 0

rule "player is rezzing?":
	@Event eachPlayer
	@Team 1
	@Condition gameStatus == GameStatus.IN_WAVE
    @Condition not eventPlayer.isDown 
    @Condition eventPlayer.isAlive() 
    @Condition eventPlayer.isCrouching()
    eventPlayer.rezTarget = [player for player in getPlayers(Team.1) if player.isDown and distance(player.getPosition(), eventPlayer.getPosition()) < 4][0]
    if eventPlayer.rezTarget != null:
        eventPlayer.isRezzing = true
        eventPlayer.setPrimaryFireEnabled(false)
        eventPlayer.setSecondaryFireEnabled(false)
        eventPlayer.setAbility1Enabled(false)
        eventPlayer.setAbility2Enabled(false)
        eventPlayer.setUltEnabled(false)
        stopChasingVariable(eventPlayer.rezTarget.downTimer)
        eventPlayer.rezTimer = 0
        chase(eventPlayer.rezTimer, 9999, rate=1, ChaseReeval.NONE)
        eventPlayer.setMoveSpeed(50)
        progressBarHud(eventPlayer, eventPlayer.rezTimer/REZ_DURATION*100, "Resurrecting {}".format(eventPlayer.rezTarget), HudPosition.TOP, SortOrderTop.FFYL_HUD, Color.YELLOW, Color.YELLOW, ProgressHudReeval.VISIBILITY_AND_VALUES, SpecVisibility.DEFAULT)
        eventPlayer.progressHudText = getLastCreatedText()


rule "player is no longer rezzing":
	@Event eachPlayer
	@Team 1
	@Condition not (eventPlayer.isRezzing and eventPlayer.isCrouching() and eventPlayer.rezTarget.isDown and distance(eventPlayer.getPosition(), eventPlayer.rezTarget.getPosition()) < 4 and eventPlayer.rezTimer < REZ_DURATION)
    destroyProgressBarHud(eventPlayer.progressHudText)
    if eventPlayer.rezTimer >= REZ_DURATION:
        stopChasingVariable(eventPlayer.rezTimer)
        eventPlayer.rezTarget.isDown = false
        smallMessage(eventPlayer, "Resurrected {}".format(eventPlayer.rezTarget))
        bigMessage(eventPlayer.rezTarget, "Resurrected by {}".format(eventPlayer))
    eventPlayer.isRezzing = false

    
rule "player is no longer rezzing":
	@Event eachPlayer
	@Team 1
	@Condition not eventPlayer.isRezzing
    stopChasingVariable(eventPlayer.rezTimer)
    if eventPlayer.rezTarget.isDown:
        chase(eventPlayer.rezTarget.downTimer, 0, rate=1, ChaseReeval.NONE)
    if not eventPlayer.isDown:
        resetPlayerAbilities()

rule "second wind":
	@Event playerDealtFinalBlow
	@Team 1
	@Condition attacker.isDown
    attacker.isDown = false
    bigMessage(attacker, "Second wind")

rule "player dead":
	@Event eachPlayer
	@Team 1
	@Condition eventPlayer.isDown and eventPlayer.downTimer <= 0
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    eventPlayer.startDoT(random.choice(getPlayers(Team.2)), 1, 9999)
