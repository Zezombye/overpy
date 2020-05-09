globalvar foo 
globalvar bar 2
playervar foo #comment
playervar bar 2 #comment

rule "variables":
    @Event eachPlayer
    
    foo = bar+A+E
    eventPlayer.foo = eventPlayer.bar+eventPlayer.A+eventPlayer.E
