
rule "simple if/else":
    if A:
        A++
    elif B:
        B++
    else:
        C++
    D++

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

