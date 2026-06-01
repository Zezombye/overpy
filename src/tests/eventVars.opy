#too lazy to put every single event-related variables
#list: eventPlayer, attacker, victim, eventDamage, eventWasEnvironment, healer, healee, eventHealing, eventWasHealthPack, eventWasCriticalHit, eventAbility, eventDirection

def epSub2():
    A = eventPlayer

def epSub():
    A = eventPlayer

def globalSub():
    epSub2()

def actuallyEpSub():
    epSub2()

subroutine recursion2

def recursion1():
    recursion2()

def recursion2():
    A = eventDamage
    recursion1()

rule "global":
    epSub() #should throw warning
    globalSub() #should also throw warning
    
rule "ep":
    @Event eachPlayer
    actuallyEpSub() #should not throw warning
    A = eventWasCriticalHit
    recursion1() #should throw warning
    