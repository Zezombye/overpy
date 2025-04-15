#!optimizeForSize

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
    @Delimiter

rule "conditions":
    @Condition A and B
    @Condition (X and Y) and (Z and W)
    @Condition C
    B++

rule "condition that is always true":
    @Condition A == A
    B++

rule "condition that is always false":
    @Condition A != A
    B++

rule "rule condition test 1":
    A = ruleCondition #true

rule "rule condition test 2":
    @Condition A
    @Condition B and C
    @Condition D == 2
    A = ruleCondition #A and B and C and D == 2

rule "rule condition test 3":
    @Condition A
    A = ruleCondition
