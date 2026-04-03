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

rule "optimized out empty ifs & if/elif false/true":
    if false:
        A = 2
        A = 2
    if true:
        A = 2
        A = 2
    B = 3
    if false:
        B = 5
    else:
        C = 6
        if true:
            D++
        else:
            E++

    if true:
        A = 2
    elif A:
        A = 3
    B = 4
    if false:
        B = 5
    elif A:
        B = 6
    elif false:
        H++
    else:
        K++

    if false:
        B++
    elif false:
        C++
    elif true:
        D++

    if A:
        B++
    elif C:
        D++
    elif true:
        E++
    elif F:
        G++

    goto lbl_1
    if false:
        B = 5
    if true:
        A = 2
    elif A:
        lbl_1:
        A = 3
    B = 3
    goto lbl_2
    if false:
        B = 5
        lbl_2:
        B = 6
    B = 9
    if C:
        D = D
        if false:
            B++
    C = 4
    #goto loc+A
    if false:
        B = 4
    if false:
    A = 3
    if G:

rule "optimized out empty if at end of rule":
    A++
    if B:
        A = A
