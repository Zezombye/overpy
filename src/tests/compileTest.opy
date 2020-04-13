
globalvar owo
globalvar uwu

subroutine sub

rule "operators":
    A = B+C
    A = B-C
    A = B*C
    A = B/C
    A = B%C
    A = B**C
    A = -B
    A = +B
    A += B
    A -= B
    A *= B
    A /= B
    A %= B
    A **= B
    A max= B
    A min= B
    del A[1]
    A.remove(B)
    A = A.index(B)
    A.append(B)
    A = A.append(B)


rule "strings":
    print("custom string")
    print(w"fullwidth string")
    print(b"big letters string")
    print(l"{0} {1}".format("localized", "string"))
    print(l"{0}, {1}, and {2}".format(0,1,2))

rule "l00p":
    while true:
        A = 2

rule "arrays":
    A = [player for player in getAllPlayers() if player.A == 2]
    A = all([player.A == 2 for player in getAllPlayers()])
    A = any([player.A == 2 for player in getAllPlayers()])
    A = all(getAllPlayers())
    A = sorted(A, key=lambda x: x+2)
    A = sorted(A)

def sub():
    D = -3*5

rule "gotos":
    goto lbl_0
    if false:
        goto lbl_1
        A = 1
        lbl_0:
        A = 2

    if false:
        A = 1
        lbl_1:
        A = 2

    goto loc+A
    goto lbl_2

    if false:
        A = 1
        lbl_2:
        A = 2
