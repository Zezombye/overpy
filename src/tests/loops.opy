
rule "while loop":
    while A == B:
        while B == C:
            A++
            if D:
                break
    B++


rule "while to the end":
    while A == B:
        A++


rule "while to the end nested":
    while A == B:
        while B == C:
            A++
    

rule "while false":
    while false:
        A++
    B++


rule "for loop":
    for I in range(1,3,2):
        A++
    for I in range(1,3):
        A++
    for I in range(3):
        A++
    for hostPlayer.I in range(3):
        A++

rule "do/while":
    do:
        A++
        break
    while A == B
    B++

rule "nested do/while":
    do:
        do:
            A++
            break
        while true
        break
    while A == B
    B++

rule "do/while rule condition":
    @Condition A == B
    do:
        wait()
        A++
        if A > getNumberOfPlayers(Team.2):
            A = 0
    while RULE_CONDITION