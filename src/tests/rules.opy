
rule "normal":
    A++
    B++

rule "event player":
    @Event eachPlayer

    eventPlayer.A++

rule "filter on team+hero":
    @Event playerTookDamage
    @Team 1
    @Hero ana
    
    victim.A++

rule "filter on team+slot":
    @Event playerReceivedHealing
    @Team all
    @Slot 3

    healer.B++

rule "other directives":
    @Event playerDied
    @Disabled
    @SuppressWarnings w_type_check

rule "conditions":
    @Condition A and B
    @Condition C
    B++
