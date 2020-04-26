
rule "gotos":
    goto lbl_0 #skip 3
    if false:
        goto lbl_1 #skip 5
        A = 1
        lbl_0:
        A = 2

    if false:
        A = 1
        lbl_1:
        A = 2

    goto loc+A
    goto lbl_2 #skip 3
    goto lbl_3 #skip 0
    lbl_3:

    if false:
        A = 1
        lbl_2:
        A = 2
