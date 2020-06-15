
rule "simple if/else":
    if A:
        A++
    elif B:
        B++
    else:
        C++
    D++

rule "multiple elif":
    if A:
        E++
    elif B:
        E++
    elif C:
        E++
    elif D:
        E++

rule "nested if":
    if A:
        if B:
            if C:
                D++
        else:
            E++
    F++

rule "if that goes to the end":
    if A:
        if B:
            C++

rule "special if with RULE_CONDITION":
    do:
        if RULE_CONDITION:
            return
        if RULE_CONDITION:
            goto RULE_START
        if RULE_CONDITION:
            continue
        if A == 2:
            B = 3
        else:
            if not RULE_CONDITION:
                return
            if not RULE_CONDITION:
                goto RULE_START
            A = 1
            if not RULE_CONDITION:
                continue
            A = 2
        

    while RULE_CONDITION