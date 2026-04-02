#!optimizeForSize

globalvar foo 
globalvar bar 2
playervar foo #comment
playervar bar 2 #comment

rule "variables":
    @Event eachPlayer
    
    foo = bar+A+E
    eventPlayer.foo = eventPlayer.bar+eventPlayer.A+eventPlayer.E

rule "numbers":
    A = --0x124BC
    A = -0x124BC
    A = -0x124
    A = 0x124BC
    A = 0x124
    A = 1e10
