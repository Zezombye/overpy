#!mainFile "meipocalypse.opy"

/*
rule "debug tp":
	@Event eachPlayer
	@Condition DEBUG and eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.teleport(worldVector(vect(0,0,5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))
*/

rule "display coords":
    @Condition DEBUG_HUD
    #if DEBUG:
    hudSubheader(getAllPlayers(), "avg: {} | peak: {} | load: {}".format(getAverageServerLoad(), getPeakServerLoad(), getServerLoad()), HudPosition.LEFT, 2, Color.GREEN, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudSubheader(getAllPlayers(), "game status: {}".format(gameStatus), HudPosition.LEFT, 2, Color.GREEN, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    print(hostPlayer.getPosition())


rule "":
    @Condition DEBUG_SHOP
    createEffect(getAllPlayers(), Effect.RING, Color.GREEN, hostPlayer.getPosition(), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

rule "host player op":
    @Condition DEBUG_INVINCIBLE
    @Condition hostPlayer.hasSpawned()
    wait()
    hostPlayer.setDamageReceived(0.1)
/*
rule "kill teammates":
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    damage(getPlayers(Team.1), null, 9999)
    */
rule "insta money":
    @Event eachPlayer
    @Condition DEBUG_MONEY
    eventPlayer.money = Math.INFINITY

rule "debug mei":
    @Event eachPlayer
    @Team 2
    @Condition DEBUG_HUD
    hudSubheader(getAllPlayers(), "{}: {} | type: {}".format(eventPlayer, eventPlayer.getPosition(), eventPlayer.meiType), HudPosition.RIGHT, 2, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

/*
rule "debug place spheres":
	@Event global
    hudHeader(getAllPlayers(), hostPlayer.getPosition(), Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(getAllPlayers(), currentMeiType, Position.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)

rule "debug tp bots":
	@Event global
	@Condition hostPlayer.isHoldingButton(Button.CROUCH)
    getPlayersOnHero(Hero.MEI, Team.2).meiType = currentMeiType
    getPlayersOnHero(Hero.MEI, Team.2).teleport(spawnA11)
*/
/*rule "update location":
	@Event global
	@Condition hostPlayer.isHoldingButton(Button.SECONDARY_FIRE)
    do:
        #debugSphereLocation = normalize(vect(hostPlayer.getFacingDirection().x, 0, hostPlayer.getFacingDirection().z))*200+hostPlayer.getPosition()
        debugSphereLocation = hostPlayer.getPosition()-vect(0,1,0)
        wait(0.016)
    while not hostPlayer.isHoldingButton(Button.ULTIMATE)*/
    