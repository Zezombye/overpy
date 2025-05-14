#!optimizeForSize

rule "if/else":
    if A == B:
        A++
    else:
        B++
    C++

rule "if/elif/else":
    if A == B:
        A++
    elif B == C:
        B++
    elif C == D:
        C++
    else:
        D++
    E++

rule "nested if/elif/else":
    if A == B:
        A++
        if B == C:
            B++
        elif C == D:
            C++
        else:
            D++
    elif B == C:
        B++
    else:
        C++
    D++

rule "if/elif multiple elses":
    if A == B:
        A++
    elif B == C:
        B++
    else:
        C++
    else:
        D++
    E++

rule "lone else":
    else:
        A++
    B++
    else:
        C++
    else:
        D++

rule "lone elif/else":
    elif A == B:
        A++
    elif B == C:
        B++
    else:
        C++
    D++
    else:
        E++
    elif F == G:
        F++
    else:
        G++
    for H in range(1, 3):
        H++
        else:
            I++
    J++
