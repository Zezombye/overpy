globalvar foo 
globalvar bar 2
playervar foo
playervar bar 2

rule "variables":
    @Event eachPlayer
    
    foo = bar+A+E
    eventPlayer.foo = eventPlayer.bar+eventPlayer.A+eventPlayer.E
