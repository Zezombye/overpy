#!mainFile "meipocalypse.opy"


globalvar playersWithBarricades

#!define BARRICADE_HEALTH 200
#!define BARRICADE_COST 150
#!define MAX_BARRICADE_HEALTH 600

#!define BARRICADE_LENGTH 8
#!define BARRICADE_HEIGHT 4
#!define BARRICADE_DEPTH -0.1
#!define MEI_HEIGHT 1.6
#!define MEI_RADIUS 1

playervar barricadeHealth
playervar barricadeMaxHealth = BARRICADE_HEALTH
playervar hasUnlockedBarricade
playervar hasBarricadeDeployed

playervar wallIndex

playervar filterpos

playervar moveSpeed = 100
playervar isPlacingBarricade

playervar barricadeBottomLeft
playervar barricadeTopLeft
playervar barricadeBottomRight
playervar barricadeTopRight
playervar barricadeBottomLeftEffect
playervar barricadeTopLeftEffect
playervar barricadeBottomRightEffect
playervar barricadeTopRightEffect
playervar barricadePos
playervar barricadeDir
playervar barricadeDirPerpendicular
playervar barricadeDirPerpDotProduct
playervar barricadePlacingEffects
playervar isInWall

playervar barricadeMinX
playervar barricadeMaxX
playervar barricadeMinY
playervar barricadeMaxY
playervar barricadeMinZ
playervar barricadeMaxZ


#!define generateBarricadeRules() __script__("generateBarricadeRules.js")

rule "init barricades":
    hudSubtext([p for p in getAllPlayers() if p.isPlacingBarricade], " \n\n\n\n\n\n\n\n\n\n   build  {}                      {}  cancel".format(buttonString(Button.PRIMARY_FIRE), buttonString(Button.SECONDARY_FIRE)), HudPosition.TOP, -1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)

rule "init barricade effects":
    @Event eachPlayer
    @Team 1
    createBeam(getAllPlayers(), Beam.GRAPPLE, eventPlayer.barricadeBottomLeftEffect, eventPlayer.barricadeBottomRightEffect, null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, eventPlayer.barricadeBottomLeftEffect, eventPlayer.barricadeTopLeftEffect, null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, eventPlayer.barricadeTopRightEffect, eventPlayer.barricadeBottomRightEffect, null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, eventPlayer.barricadeTopRightEffect, eventPlayer.barricadeTopLeftEffect, null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, eventPlayer.barricadeTopRightEffect, eventPlayer.barricadeBottomLeftEffect, null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, eventPlayer.barricadeBottomRightEffect, eventPlayer.barricadeTopLeftEffect, null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.ORANGE, eventPlayer.filterpos, 0.5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createInWorldText(getAllPlayers(), "{}/{}".format(eventPlayer.barricadeHealth, eventPlayer.barricadeMaxHealth), eventPlayer.barricadePos, 1.5, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(eventPlayer.barricadeMaxHealth/eventPlayer.barricadeHealth*255, eventPlayer.barricadeHealth/eventPlayer.barricadeMaxHealth*255, 0), SpecVisibility.DEFAULT)

rule "placing barricade":
    @Event eachPlayer
    @Team 1
    @Condition gameStatus == GameStatus.IN_WAVE
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    @Condition eventPlayer.isHoldingButton(Button.CROUCH)
    @Condition not eventPlayer.isPlacingBarricade
    eventPlayer.isPlacingBarricade = true
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    
    #bottom
    createBeam(eventPlayer, Beam.BAD, 
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(BARRICADE_LENGTH/2, -BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION),
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-BARRICADE_LENGTH/2, -BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION), null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.barricadePlacingEffects[0] = getLastCreatedEntity()
    #left
    createBeam(eventPlayer, Beam.BAD, 
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(BARRICADE_LENGTH/2, -BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION),
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(BARRICADE_LENGTH/2+0.001, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION), null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.barricadePlacingEffects[1] = getLastCreatedEntity()
    #right
    createBeam(eventPlayer, Beam.BAD, 
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-BARRICADE_LENGTH/2, -BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION),
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-BARRICADE_LENGTH/2+0.001, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION), null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.barricadePlacingEffects[2] = getLastCreatedEntity()
    #top
    createBeam(eventPlayer, Beam.BAD, 
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-BARRICADE_LENGTH/2, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION),
    raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(BARRICADE_LENGTH/2, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION), null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.barricadePlacingEffects[3] = getLastCreatedEntity()


rule "place barricade":
	@Event eachPlayer
    @Team 1
    @Condition eventPlayer.isPlacingBarricade
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE)
    eventPlayer.isPlacingBarricade = false
    eventPlayer.barricadeBottomLeftEffect = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(BARRICADE_LENGTH/2, -BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION)
    eventPlayer.barricadeTopLeftEffect = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(BARRICADE_LENGTH/2+0.001, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION)
    eventPlayer.barricadeBottomRightEffect = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-BARRICADE_LENGTH/2, -BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION)
    eventPlayer.barricadeTopRightEffect = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-BARRICADE_LENGTH/2+0.001, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION)
    
    eventPlayer.barricadeMinX = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition().x + min(worldVector(vect((BARRICADE_LENGTH+1)/2, 0, 0), eventPlayer, Transform.ROTATION).x, worldVector(vect(-(BARRICADE_LENGTH+1)/2, -BARRICADE_DEPTH-MEI_HEIGHT, 0), eventPlayer, Transform.ROTATION).x)
    eventPlayer.barricadeMaxX = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition().x + max(worldVector(vect((BARRICADE_LENGTH+1)/2, 0, 0), eventPlayer, Transform.ROTATION).x, worldVector(vect(-(BARRICADE_LENGTH+1)/2, -BARRICADE_DEPTH-MEI_HEIGHT, 0), eventPlayer, Transform.ROTATION).x)
    eventPlayer.barricadeMinY = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition().y + -BARRICADE_DEPTH-MEI_HEIGHT
    eventPlayer.barricadeMaxY = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition().y + BARRICADE_HEIGHT-BARRICADE_DEPTH
    eventPlayer.barricadeMinZ = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition().z + min(worldVector(vect((BARRICADE_LENGTH+1)/2, 0, 0), eventPlayer, Transform.ROTATION).z, worldVector(vect(-(BARRICADE_LENGTH+1)/2, -BARRICADE_DEPTH-MEI_HEIGHT, 0), eventPlayer, Transform.ROTATION).z)
    eventPlayer.barricadeMaxZ = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition().z + max(worldVector(vect((BARRICADE_LENGTH+1)/2, 0, 0), eventPlayer, Transform.ROTATION).z, worldVector(vect(-(BARRICADE_LENGTH+1)/2, -BARRICADE_DEPTH-MEI_HEIGHT, 0), eventPlayer, Transform.ROTATION).z)

    
    eventPlayer.barricadeBottomLeft = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect((BARRICADE_LENGTH+1)/2, -BARRICADE_DEPTH-MEI_HEIGHT, 0), eventPlayer, Transform.ROTATION)
    eventPlayer.barricadeTopLeft = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect((BARRICADE_LENGTH+1)/2+0.001, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION)
    eventPlayer.barricadeBottomRight = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-(BARRICADE_LENGTH+1)/2, -BARRICADE_DEPTH-MEI_HEIGHT, 0), eventPlayer, Transform.ROTATION)
    eventPlayer.barricadeTopRight = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition()+eventPlayer.getFacingDirection()*200, [], [], false).getHitPosition()+worldVector(vect(-(BARRICADE_LENGTH+1)/2+0.001, BARRICADE_HEIGHT-BARRICADE_DEPTH, 0), eventPlayer, Transform.ROTATION)
    
    eventPlayer.barricadePos = (eventPlayer.barricadeBottomLeft+eventPlayer.barricadeTopRight)/2
    eventPlayer.barricadeDir = directionTowards(eventPlayer.barricadeBottomLeft, eventPlayer.barricadeBottomRight)
    eventPlayer.barricadeDirPerpendicular = angleToDirection(horizontalAngleOfDirection(directionTowards(eventPlayer.barricadeBottomLeft, eventPlayer.barricadeBottomRight))+90, 0)
    eventPlayer.barricadeDirPerpDotProduct = dotProduct(eventPlayer.barricadeDirPerpendicular, eventPlayer.barricadeDirPerpendicular)
    eventPlayer.barricadeHealth = eventPlayer.barricadeMaxHealth
    eventPlayer.hasBarricadeDeployed = true
    playersWithBarricades = [p for p in getPlayers(Team.1) if p.hasBarricadeDeployed]


rule "cancel placing barricade":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isPlacingBarricade
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)
    eventPlayer.isPlacingBarricade = false

rule "no longer placing barricade":
    @Event eachPlayer
    @Team 1
    @Condition not eventPlayer.isPlacingBarricade
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)
    destroyEffect(eventPlayer.barricadePlacingEffects[0])
    destroyEffect(eventPlayer.barricadePlacingEffects[1])
    destroyEffect(eventPlayer.barricadePlacingEffects[2])
    destroyEffect(eventPlayer.barricadePlacingEffects[3])

rule "barricade broke":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.barricadeHealth <= 0
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, eventPlayer.barricadePos, 8)
    eventPlayer.hasBarricadeDeployed = false
    playersWithBarricades = [p for p in getPlayers(Team.1) if p.hasBarricadeDeployed]
    eventPlayer.barricadeBottomLeftEffect = vect(-1000, -1000, -1000)
    eventPlayer.barricadeTopLeftEffect = vect(-1000, -1000, -1000)
    eventPlayer.barricadeBottomRightEffect = vect(-1000, -1000, -1000)
    eventPlayer.barricadeTopRightEffect = vect(-1000, -1000, -1000)
    eventPlayer.barricadePos = vect(-1000, -1000, -1000)

rule "update on player left":
    @Event playerLeft
    playersWithBarricades = [p for p in getPlayers(Team.1) if p.hasBarricadeDeployed]

rule "barricade collision":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned() == true
    
    wait()
    eventPlayer.isInWall = false

    for eventPlayer.wallIndex in range(len(playersWithBarricades)):
        if distance(eventPlayer.getPosition(), playersWithBarricades[eventPlayer.wallIndex].barricadePos) > sqrt((BARRICADE_HEIGHT/2+MEI_HEIGHT+1)**2+(BARRICADE_LENGTH/2+1)**2):
            continue

        #player pos transposed to the plane of the barricade
        eventPlayer.filterpos = eventPlayer.getPosition() - playersWithBarricades[eventPlayer.wallIndex].barricadeDirPerpendicular * dotProduct(playersWithBarricades[eventPlayer.wallIndex].barricadeDirPerpendicular, eventPlayer.getPosition() - playersWithBarricades[eventPlayer.wallIndex].barricadePos)
        
        if eventPlayer.getPosition().y < playersWithBarricades[eventPlayer.wallIndex].barricadeMaxY:
            if eventPlayer.getPosition().y > playersWithBarricades[eventPlayer.wallIndex].barricadeMinY:
                if distance(eventPlayer.getPosition(), eventPlayer.filterpos) <= MEI_RADIUS:
                    if eventPlayer.filterpos.x >= playersWithBarricades[eventPlayer.wallIndex].barricadeMinX:
                        if eventPlayer.filterpos.x <= playersWithBarricades[eventPlayer.wallIndex].barricadeMaxX:
                            if eventPlayer.filterpos.z >= playersWithBarricades[eventPlayer.wallIndex].barricadeMinZ:
                                if eventPlayer.filterpos.z <= playersWithBarricades[eventPlayer.wallIndex].barricadeMaxZ:
                                    goto inWall
            
        continue
        
        inWall:
        eventPlayer.isInWall = true
        playersWithBarricades[eventPlayer.wallIndex].barricadeHealth--
        eventPlayer.applyImpulse(directionTowards(eventPlayer.filterpos, eventPlayer.getPosition()), 1, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.setMoveSpeed(eventPlayer.moveSpeed * (1 + (dotProduct(normalize(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION)), directionTowards(eventPlayer.filterpos, eventPlayer.getPosition())))))

    if not eventPlayer.isInWall:
        #reset
        eventPlayer.setMoveSpeed(eventPlayer.moveSpeed)

    goto RULE_START