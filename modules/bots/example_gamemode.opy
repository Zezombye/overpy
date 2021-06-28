
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

#!define NB_NODES len(alphabet)

#!include "pathfinding/compressedPathmaps/necropolis.opy"

globalvar i
globalvar j
globalvar uncompressedData = []
globalvar timer
globalvar currentNodeArray
globalvar currentCharIdx
globalvar message

playervar targetPosition
playervar destNode
playervar targetPlayer = null

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
globalvar data
globalvar nodePositions

#!define NODE_RADIUS 1



rule "init":
    print("load: {} | avg: {} | max: {}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()))
    print("No pathmap for map {}".format(getCurrentMap()) if message == Message.NO_PATHMAP else "Node graph out of date. Rebuilding... {}s elapsed".format(timer) if message == Message.DECOMPRESSING else "Finished loading pathmap in {}s".format(timer))

    #Load the pathmap based on the map
    if getCurrentMap() == Map.NECROPOLIS:
        alphabet = ALPHABET_NECROPOLIS
        data = DATA_NECROPOLIS
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
    for i in range(len(data)):
        for j in range(strLen(data[i])):
            currentNodeArray[currentCharIdx % NB_NODES] = alphabet.index(data[i].substring(j, 1))
            currentCharIdx++
            if currentCharIdx % NB_NODES == 0:
                uncompressedData[floor((currentCharIdx-1)/NB_NODES)] = currentNodeArray
        
        wait()
    
    stopChasingVariable(timer)
    enableInspector()
    message = Message.FINISHED_DECOMPRESSION

    #Now that we have finished decompressing, spawn the bot.
    createDummy(Hero.REINHARDT, Team.2 if getCurrentGamemode() != Gamemode.FFA else Team.ALL, 1, vect(0, -1000, 0), null)


rule "dummy find enemy":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer == null
    do:
        eventPlayer.targetPlayer = sorted([p for p in getPlayers(getOppositeTeam(eventPlayer.getTeam())) if p != eventPlayer and p.isAlive() and p.hasSpawned()], lambda x: distance(eventPlayer, x))[0]
        wait(0.5)
    while RULE_CONDITION


rule "dummy found enemy - set facing and throttle":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.targetPlayer.getPosition()+vect(0,1.5,0)), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getPosition(), eventPlayer.targetPosition), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)

rule "dummy found enemy - set target position":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.targetPlayer != null
    #todo


rule "dummy enemy dead":
    @Event eachPlayer
    @Condition eventPlayer.targetPlayer.isDead() or not eventPlayer.targetPlayer.hasSpawned()
    eventPlayer.targetPlayer = null
    eventPlayer.stopFacing()
    eventPlayer.stopThrottleInDirection()


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
    

rule "dummy made it":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.getPosition().y > eventPlayer.targetPosition.y - NODE_RADIUS
    @Condition updateEveryTick(distance(eventPlayer.getPosition()*vect(1,0,1), eventPlayer.targetPosition*vect(1,0,1))) < NODE_RADIUS
    @Condition updateEveryTick(isInLoS(eventPlayer.getEyePosition(), eventPlayer.targetPosition+vect(0,1,0), BarrierLos.PASS_THROUGH_BARRIERS))


