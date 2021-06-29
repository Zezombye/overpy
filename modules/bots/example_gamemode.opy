
/*
This is an example gamemode that uses the dummy bots to make an FFA that you can play alone.
*/

settings {
    "main": {
        "description": "https://github.com/Zezombye/OverPy | Example gamemode for the bots module"
    },
    "lobby": {
        "ffaSlots": 1
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                "necropolis"
            ]
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "respawnTime%": 10
        }
    },
    "heroes": {
        "allTeams": {
            "general": {
                "abilityCooldown%": 0,
                "health%": 500,
                "damageReceived%": 10,
            }
        }
    }
}

#!define NB_NODES len(alphabet)

#!include "pathfinding/compressedPathmaps/necropolis.opy"
#!include "pathfinding/pathmaps/necropolis.opy"

globalvar i
globalvar j
globalvar uncompressedData = []
globalvar timer
globalvar currentNodeArray
globalvar currentCharIdx
globalvar message

playervar targetNode
playervar destNode
playervar targetPlayer = null
playervar walkBehavior

enum Message:
    NO_PATHMAP,
    DECOMPRESSING,
    FINISHED_DECOMPRESSION,

#Walking: The bot walks towards the targeted enemy, following the node graph.
#Fighting: The bot can directly reach the targeted enemy (no more pathfinding needed). The node graph is no longer used until the enemy is out of range.
enum BotWalkBehavior:
    WALKING,
    FIGHTING, 

globalvar alphabet
globalvar compressedData
globalvar nodePositions

#!define NODE_RADIUS 1



rule "init":
    print("load: {} | avg: {} | max: {}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()))
    print("No pathmap for map {}".format(getCurrentMap()) if message == Message.NO_PATHMAP else "Node graph out of date. Rebuilding... {}s elapsed".format(timer) if message == Message.DECOMPRESSING else "Finished loading pathmap in {}s".format(timer))

    #Load the pathmap based on the map
    if getCurrentMap() == Map.NECROPOLIS:
        alphabet = ALPHABET_NECROPOLIS
        compressedData = DATA_NECROPOLIS
        nodePositions = POSITIONS_NECROPOLIS
    else:
        message = Message.NO_PATHMAP
        return

    #Uncompress the pathmap
    message = Message.DECOMPRESSING
    disableInspector()
    chase(timer, 9999, rate=1, ChaseReeval.NONE)

    uncompressedData[NB_NODES-1] = 0
    currentNodeArray[NB_NODES-1] = 0

    currentCharIdx = 0
    for i in range(len(compressedData)):
        for j in range(strLen(compressedData[i])):
            currentNodeArray[currentCharIdx % NB_NODES] = alphabet.index(compressedData[i].substring(j, 1))
            currentCharIdx++
            if currentCharIdx % NB_NODES == 0:
                uncompressedData[floor((currentCharIdx-1)/NB_NODES)] = currentNodeArray
        
        wait()

    #Remove compressed strings to make the server less laggy.
    alphabet = null
    compressedData = null
    
    stopChasingVariable(timer)
    enableInspector()
    message = Message.FINISHED_DECOMPRESSION

    #Now that we have finished decompressing, spawn the bot.
    createDummy(Hero.REINHARDT, Team.2 if getCurrentGamemode() != Gamemode.FFA else Team.ALL, 1, vect(0, -1000, 0), null)


rule "init dummy - print debug stuff":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    print("Targeting player: {}, mode: {}".format(eventPlayer.targetPlayer, "walking" if eventPlayer.walkBehavior == BotWalkBehavior.WALKING else "fighting"))
    print("Target node: {}, dest node: {}".format(eventPlayer.targetNode, eventPlayer.destNode))
    createEffect(getAllPlayers(), Effect.SPHERE, Color.GREEN, nodePositions[eventPlayer.destNode], NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, nodePositions[eventPlayer.targetNode], NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createIcon(getAllPlayers(), eventPlayer, Icon.SKULL, IconReeval.VISIBILITY_AND_POSITION, Color.RED, true)

rule "dummy find enemy":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer == null
    @Condition eventPlayer.hasSpawned()
    @Condition eventPlayer.isAlive()
    do:
        eventPlayer.targetPlayer = sorted([p for p in getPlayers(getOppositeTeam(eventPlayer.getTeam())) if p != eventPlayer and p.isAlive() and p.hasSpawned()], lambda x: distance(eventPlayer, x))[0]
        wait(0.5)
    while RULE_CONDITION

rule "dummy periodically update destination node":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    @Condition eventPlayer.walkBehavior == BotWalkBehavior.WALKING
    do:
        eventPlayer.destNode = nodePositions.index(sorted([pos for pos in nodePositions if isInLoS(pos+vect(0,NODE_RADIUS,0), eventPlayer.targetPlayer.getEyePosition(), BarrierLos.PASS_THROUGH_BARRIERS)], lambda pos: distance(eventPlayer.targetPlayer.getPosition(), pos))[0])
        wait(1)
    while RULE_CONDITION


rule "dummy found enemy - set facing, throttle and target node":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    @Condition eventPlayer.walkBehavior == BotWalkBehavior.WALKING
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.targetPlayer.getPosition()+vect(0,1.5,0)), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getPosition(), nodePositions[eventPlayer.targetNode]), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)
    eventPlayer.targetNode = nodePositions.index(sorted([pos for pos in nodePositions if pos.y - eventPlayer.getPosition().y < 1.2 and isInLoS(pos+vect(0,NODE_RADIUS,0), eventPlayer.getEyePosition(), BarrierLos.PASS_THROUGH_BARRIERS)], lambda pos: distance(eventPlayer.getPosition(), pos))[0])
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)

rule "dummy found enemy - set target position":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    @Condition abs(eventPlayer.getPosition().y - eventPlayer.targetPlayer.getPosition().y) < 1.2
    @Condition distance(eventPlayer, eventPlayer.targetPlayer) < 7
    @Condition isInLoS(eventPlayer.getEyePosition(), eventPlayer.targetPlayer.getEyePosition(), BarrierLos.PASS_THROUGH_BARRIERS)
    eventPlayer.walkBehavior = BotWalkBehavior.FIGHTING
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getPosition(), eventPlayer.targetPlayer.getPosition()), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)

rule "dummy enemy escaped - set back to walking":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.walkBehavior == BotWalkBehavior.FIGHTING
    @Condition abs(eventPlayer.getPosition().y - eventPlayer.targetPlayer.getPosition().y) >= 1.2 or distance(eventPlayer, eventPlayer.targetPlayer) >= 7 or isInLoS(eventPlayer.getEyePosition(), eventPlayer.targetPlayer.getEyePosition(), BarrierLos.PASS_THROUGH_BARRIERS)
    wait(5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.walkBehavior = BotWalkBehavior.WALKING

rule "dummy fire on player":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.walkBehavior == BotWalkBehavior.WALKING
    @Condition isInLoS(eventPlayer.getEyePosition(), eventPlayer.targetPlayer.getEyePosition(), BarrierLos.PASS_THROUGH_BARRIERS)
    do:
        eventPlayer.forceButtonPress(Button.ABILITY_2)
        wait(random.uniform(0.5, 5), Wait.ABORT_WHEN_FALSE)
    while RULE_CONDITION

rule "dummy enemy dead":
    @Event eachPlayer
    @Condition eventPlayer.targetPlayer.isDead() or not eventPlayer.targetPlayer.hasSpawned()
    eventPlayer.targetPlayer = null
    eventPlayer.stopFacing()
    eventPlayer.stopThrottleInDirection()
    eventPlayer.walkBehavior = BotWalkBehavior.WALKING


rule "dummy jump over cliffs":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    @Condition updateEveryTick(isInLoS(eventPlayer.getPosition()+normalize(eventPlayer.getThrottle())*0.2+vect(0,0.5,0), eventPlayer.getPosition()+normalize(eventPlayer.getThrottle())*0.2-vect(0,0.5,0), BarrierLos.PASS_THROUGH_BARRIERS))
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait()
    while RULE_CONDITION


rule "dummy jump over obstacles":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    @Condition eventPlayer.getHorizontalSpeed() < 3
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait()
    while RULE_CONDITION
    

rule "dummy reached node":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.getPosition().y > nodePositions[eventPlayer.targetNode].y - NODE_RADIUS
    @Condition updateEveryTick(distance(eventPlayer.getPosition()*vect(1,0,1), nodePositions[eventPlayer.targetNode]*vect(1,0,1))) < NODE_RADIUS
    @Condition updateEveryTick(isInLoS(eventPlayer.getEyePosition(), nodePositions[eventPlayer.targetNode]+vect(0,1,0), BarrierLos.PASS_THROUGH_BARRIERS))
    do:
        eventPlayer.targetNode = uncompressedData[eventPlayer.targetNode][eventPlayer.destNode]
        wait()
    while RULE_CONDITION

