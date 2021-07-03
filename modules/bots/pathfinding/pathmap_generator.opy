
/*

This is a standalone pathmap generator, used to generate pathmaps for use in this module.
Make sure to save often and to report any buggy behavior by the bot.

*/

settings {
    "main": {
        "description": "Zez's Pathmap Editor | v1.1.1 | FNTOS | For use with OverPy:\nhttps://github.com/Zezombye/OverPy"
    },
    "lobby": {
        "ffaSlots": 1,
        "team1Slots": 1,
        "team2Slots": 0,
    },
    "gamemodes": {
        "ffa": {
        },
        "skirmish": {
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "respawnTime%": 30
        }
    },
    "heroes": {
        "allTeams": {
            "general": {
                "abilityCooldown%": 0
            }
        }
    }
}

#!extension playMoreEffects
#!extension beamEffects

#!define RENDER_DISTANCE 50
#!define CONNECTION_DISTANCE 15
#!define NB_BEAM_RENDER 20
#!define NODE_RADIUS 1

enum ConnectionTest:
    IN_PROGRESS,
    FAIL,
    SUCCESS,


globalvar nodePositions = []

globalvar nodeConnections = []

globalvar nodeEffects = []
globalvar nodeTexts = []
globalvar iwtPosIdx
globalvar nodeRemoveIdx
globalvar nodeIdx
globalvar neighborNodeIdx
globalvar spherePosIdx
globalvar raycastTestIdx
globalvar i
globalvar isGenerating = false
globalvar testDummy
globalvar makeBotWalk
globalvar wasOffGround
globalvar connectionTestStatus
globalvar lastTestedNode = 0
globalvar nodeToShowBeams = -1
globalvar nearestNodeToHostIdx
globalvar beamIdx


rule "paste your save here (nodePositions + nodeConnections)":
    @Delimiter
    /*
    #workshop island
    nodePositions = [vect(-13.791, 0, 14.018), vect(-10.428, 0, 5.54), vect(-9.136, 0, 10.537), vect(-9.47, 0, -1.598)]
    nodeConnections = [[1, 2], [0, 2, 3], [0, 1, 3], [1, 2]]
    */


def updateIwts():

    for iwtPosIdx in range(len(nodePositions)):
        if distance(hostPlayer, nodePositions[iwtPosIdx]) > RENDER_DISTANCE:
            if nodeTexts[iwtPosIdx] != null:
                destroyInWorldText(nodeTexts[iwtPosIdx])
                nodeTexts[iwtPosIdx] = null
        else:
            if nodeTexts[iwtPosIdx] == null:
                createInWorldText(hostPlayer, iwtPosIdx, nodePositions[iwtPosIdx], 1.5, Clip.SURFACES, WorldTextReeval.VISIBILITY, Color.BLUE, SpecVisibility.DEFAULT)
                nodeTexts[iwtPosIdx] = getLastCreatedText()
        

rule "init":
    disableInspector()
    print("{} to place nodes\n{} to undo latest node\n{}+{} to generate connections".format(buttonString(Button.PRIMARY_FIRE), buttonString(Button.SECONDARY_FIRE), buttonString(Button.CROUCH), buttonString(Button.INTERACT)))
    print("nb of nodes: {}".format(len(nodePositions)))
    print("bot speed: {}".format(testDummy.getHorizontalSpeed()))

    createDummy(Hero.REINHARDT, Team.1 if getCurrentGamemode() != Gamemode.FFA else Team.ALL, 1, vect(0, -1000, 0), null)
    testDummy = getLastCreatedEntity()

    createEffect(hostPlayer, Effect.SPHERE, Color.ORANGE, updateEveryTick(hostPlayer.getPosition()), NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    progressBarHud(hostPlayer if isGenerating else [], nodeIdx/len(nodePositions)*100, "{} / {} nodes processed".format(nodeIdx, len(nodePositions)), HudPosition.TOP, 1, Color.BLUE, Color.BLUE, ProgressHudReeval.VISIBILITY_AND_VALUES, SpecVisibility.DEFAULT)

    updateIwts()

    lastTestedNode = len(nodeConnections) - 1
    for i in range(len(nodeConnections), len(nodePositions)):
        nodeConnections[i] = []

    for i in range(NB_BEAM_RENDER):
        createBeam(hostPlayer if nodeToShowBeams >= 0 and len(nodeConnections[nodeToShowBeams]) > evalOnce(i) else [], Beam.GRAPPLE, nodePositions[nodeToShowBeams]+vect(0,1,0), nodePositions[nodeConnections[nodeToShowBeams][evalOnce(i)]]+vect(0,1,0), null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    createEffect(hostPlayer if nodeToShowBeams >= 0 else [], Effect.SPHERE, Color.AQUA, nodePositions[nodeToShowBeams]+vect(0,1,0), 0.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    hudHeader(hostPlayer if nodeToShowBeams >= 0 and len(nodeConnections[nodeToShowBeams]) > NB_BEAM_RENDER else [], "showing {}/{} beams".format(NB_BEAM_RENDER, len(nodeConnections[nodeToShowBeams])), HudPosition.TOP, 3, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)

    #create effects from save
    for spherePosIdx in range(len(nodePositions)):
        createEffect(hostPlayer, Effect.SPHERE, Color.BLUE, evalOnce(nodePositions[spherePosIdx]), NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        nodeEffects[iwtPosIdx] = getLastCreatedEntity()
        wait()
        
rule "dummy init":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), nodePositions[neighborNodeIdx]), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
    

rule "dummy walk":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    eventPlayer.teleport(nodePositions[nodeIdx])
    eventPlayer.startForcingPosition(nodePositions[nodeIdx], false)
    wait()
    eventPlayer.stopForcingPosition()
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getPosition(), nodePositions[neighborNodeIdx]), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)

rule "dummy detect off ground":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition not updateEveryTick(eventPlayer.isOnGround())
    wait(0.05, Wait.ABORT_WHEN_FALSE)
    wasOffGround = true

rule "dummy no longer walk":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition not makeBotWalk
    eventPlayer.stopThrottleInDirection()

rule "dummy made it":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition eventPlayer.getPosition().y > nodePositions[neighborNodeIdx].y - NODE_RADIUS
    @Condition updateEveryTick(distance(eventPlayer.getPosition()*vect(1,0,1), nodePositions[neighborNodeIdx]*vect(1,0,1))) < NODE_RADIUS
    @Condition updateEveryTick(isInLoS(eventPlayer.getEyePosition(), nodePositions[neighborNodeIdx]+vect(0,1,0), BarrierLos.PASS_THROUGH_BARRIERS))
    connectionTestStatus = ConnectionTest.SUCCESS

rule "dummy jump over cliffs":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition updateEveryTick(isInLoS(eventPlayer.getPosition()+normalize(eventPlayer.getThrottle())*0.2+vect(0,0.5,0), eventPlayer.getPosition()+normalize(eventPlayer.getThrottle())*0.2-vect(0,0.5,0), BarrierLos.PASS_THROUGH_BARRIERS))
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait()
    while RULE_CONDITION

rule "dummy jump over obstacles":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition eventPlayer.getHorizontalSpeed() < 3
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait()
    while RULE_CONDITION

rule "fail if stuck for 0.5 second":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition eventPlayer.getHorizontalSpeed() < 3
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    connectionTestStatus = ConnectionTest.FAIL

rule "dummy died":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.isDead()
    do:
        eventPlayer.respawn()
        connectionTestStatus = ConnectionTest.FAIL
        wait()
    while RULE_CONDITION

rule "disable primary and secondary":
    @Event eachPlayer
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)

rule "show beams":
    @Condition not isGenerating
    do:
        for nearestNodeToHostIdx in range(len(nodePositions)):
            if distance(hostPlayer.getPosition(), nodePositions[nearestNodeToHostIdx]) <= NODE_RADIUS:
                nodeToShowBeams = nearestNodeToHostIdx
                break
        
        wait(0.5)

    while RULE_CONDITION

rule "place node":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE)
    @Condition not isGenerating
    nodePositions.append(eventPlayer.getPosition())
    nodeConnections[len(nodePositions)-1] = []
    createEffect(hostPlayer, Effect.SPHERE, Color.BLUE, evalOnce(nodePositions.last()), NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    nodeEffects[len(nodePositions)-1] = getLastCreatedEntity()
    updateIwts()

rule "delete node":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)
    @Condition not isGenerating
    @Condition len(nodePositions) > 0
    #remove connections
    for nodeRemoveIdx in range(len(nodePositions)):
        nodeConnections[nodeRemoveIdx].remove(len(nodePositions)-1)

    del nodeConnections[len(nodePositions)-1]
    nodePositions = nodePositions.slice(0, len(nodePositions)-1)
    destroyEffect(nodeEffects.last())
    nodeEffects = nodeEffects.slice(0, len(nodeEffects)-1)
    destroyInWorldText(nodeTexts.last())
    nodeTexts = nodeTexts.slice(0, len(nodeTexts)-1)
    lastTestedNode--
    lastTestedNode max= 0


rule "update spheres periodically":
    while true:
        updateIwts()
        wait(1)

rule "generate connections":
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    @Condition hostPlayer.isHoldingButton(Button.CROUCH)
    moveToTeam(testDummy, hostPlayer.getTeam(), -1)
    isGenerating = true
    lastTestedNode min= len(nodePositions)-1
    for nodeIdx in range(0, len(nodePositions)):
        for neighborNodeIdx in range(0 if nodeIdx > lastTestedNode else lastTestedNode+1, len(nodePositions)):
            if nodeIdx == neighborNodeIdx:
                goto endloop
            if neighborNodeIdx in nodeConnections[nodeIdx]:
                goto endloop

            if distance(nodePositions[nodeIdx], nodePositions[neighborNodeIdx]) < CONNECTION_DISTANCE:
                #First, check if the nodes are in direct line of sight
                if isInLoS(nodePositions[nodeIdx]+vect(0,1.5,0), nodePositions[neighborNodeIdx]+vect(0,1,0), BarrierLos.PASS_THROUGH_BARRIERS):
                    #Check if there is a gap of more than 0.2m. 1m interval is plenty, if there is a gap smaller than that, the bots can easily jump over it
                    for raycastTestIdx in range(0, distance(nodePositions[nodeIdx], nodePositions[neighborNodeIdx]), 1):
                        if isInLoS(nodePositions[nodeIdx]+directionTowards(nodePositions[nodeIdx], nodePositions[neighborNodeIdx])*raycastTestIdx+vect(0,1.5,0), nodePositions[nodeIdx]+directionTowards(nodePositions[nodeIdx], nodePositions[neighborNodeIdx])*raycastTestIdx-vect(0,0.2,0), BarrierLos.PASS_THROUGH_BARRIERS):
                            goto botCheck
                    
                    #There is no gap, so no need to run the bot check, a reinhardt should be able to go between the nodes
                    #Do it for both sides as that shouldn't be a one-way node
                    nodeConnections[nodeIdx].append(neighborNodeIdx)
                    nodeConnections[neighborNodeIdx].append(nodeIdx)
                    wait()
                    goto endloop

                #Else, check if the topmost node has vertical then horizontal LoS.
                elif nodePositions[nodeIdx].y - nodePositions[neighborNodeIdx].y > 1:
                    #check vertical
                    if isInLoS(nodePositions[nodeIdx]+vect(0,1.5,0), vect(nodePositions[neighborNodeIdx].x, nodePositions[nodeIdx].y+1.5, nodePositions[neighborNodeIdx].z), BarrierLos.PASS_THROUGH_BARRIERS):
                        #check horizontal
                        if isInLoS(vect(nodePositions[neighborNodeIdx].x, nodePositions[nodeIdx].y+1.5, nodePositions[neighborNodeIdx].z), nodePositions[neighborNodeIdx]+vect(0,1.5,0), BarrierLos.PASS_THROUGH_BARRIERS):
                            #make the bot have the final say
                            goto botCheck
                
                #Else, do not connect the nodes. If we have the bot check, it will result in bots hugging walls too much.
                goto endloop

                botCheck:
                #Make a reinhardt walk for a more precise check
                smallMessage(hostPlayer, "bot check for node {} and neighbor {}".format(nodeIdx, neighborNodeIdx))
                makeBotWalk = true
                wasOffGround = false
                connectionTestStatus = ConnectionTest.IN_PROGRESS
                waitUntil(connectionTestStatus == ConnectionTest.FAIL or connectionTestStatus == ConnectionTest.SUCCESS, 10)
                if connectionTestStatus == ConnectionTest.SUCCESS:
                    nodeConnections[nodeIdx].append(neighborNodeIdx)
                    /*if not wasOffGround and abs(nodePositions[nodeIdx].y - nodePositions[neighborNodeIdx].y) < 1:
                        #cannot be a one-way node
                        nodeConnections[neighborNodeIdx].append(nodeIdx)*/

                makeBotWalk = false
                wait(0.1)

            endloop:


        wait()
    
    isGenerating = false
    lastTestedNode = len(nodePositions)-1
    
    enableInspector()
    disableInspector()


