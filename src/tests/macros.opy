
globalvar displayFinalScores
globalvar gameStatus
playervar score
playervar currentCheckpoint

#!define GAME_FINISHED 2

#!define participatingPlayers() ([p for p in getAllPlayers() if p.currentCheckpoint > 0])

#!define sortedPlayersByScore() (sorted(participatingPlayers(), lambda x: -x.score))
#!define playerInSpot(nb) (sorted(participatingPlayers(), lambda x: -x.currentCheckpoint)[nb])
#!define playersInSpot(min, max) (sorted(participatingPlayers(), lambda x: -x.currentCheckpoint).slice((min), (max)-(min)))


#!define spotHud(func, nb) \
_spotHud(func, getAllPlayers().exclude(playerInSpot(nb)) if (nb) <= 2 else playerInSpot((nb)+1), nb, Color.ORANGE)\
_spotHud(func, playerInSpot(nb), nb, Color.PURPLE)
#!define _spotHud(func, visibility, nb, color) func((visibility) if gameStatus == GAME_STARTED else [], "#{} | {}".format(nb+1, playerInSpot(nb)), HudPosition.TOP, (nb)-100, color, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.ALWAYS)

#!define finishHud(nb) \
_finishHud(getAllPlayers().exclude(sortedPlayersByScore()[nb]) if displayFinalScores else getAllPlayers().exclude(playerInSpot(nb)), nb, Color.ORANGE)\
_finishHud(sortedPlayersByScore()[nb] if displayFinalScores else playerInSpot(nb), nb, Color.PURPLE)
#!define _finishHud(visibility, nb, color) hudSubtext((visibility) if gameStatus == GAME_FINISHED and len(participatingPlayers() > (nb)) else [], "{}: {}".format(sortedPlayersByScore()[nb], floor(sortedPlayersByScore()[nb].score)) if displayFinalScores else "{}: #{}".format(playerInSpot(nb), (nb)+1), HudPosition.TOP, -100-sortedPlayersByScore()[nb].score if displayFinalScores else (nb)-500, color, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.ALWAYS)

rule "macros":
    
    finishHud(0)
    finishHud(1)
    finishHud(2)
    finishHud(3)
    finishHud(4)
    finishHud(5)
    finishHud(6)
    finishHud(7)
    finishHud(8)
    finishHud(9)
    finishHud(10)
    finishHud(11)
