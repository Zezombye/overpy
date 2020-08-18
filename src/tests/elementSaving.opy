
rule "0 to null":
    A = B.concat(0)
    A = [0,1,0]
    A = 0 in B
    A = B == 0
    A = 0 == B
    A = B != 0
    A = 0 != B
    A = "{}{}{}".format(0,0,0)
    A = l"{0}, {1}, and {2}".format(0,0,0)
    bigMessage(getAllPlayers(), 0)
    A = 0
    A[B] = 0
    B.A = 0
    B.A[C] = 0
    smallMessage(getAllPlayers(), 0)

rule "0 to false":
    A = B > 0
    A = 0 > B
    A = B >= 0
    A = 0 >= B
    A = B < 0
    A = 0 < B
    A = B <= 0
    A = 0 <= B
    A = max(0, B)
    A = max(B, 0)
    A = min(0, B)
    A = min(B, 0)
    A = random.randint(0, B)
    A = random.randint(B, 0)
    A = 0-B
    A = vect(0,0,0)
    chase(A, 0, rate=0, ChaseReeval.NONE)
    chase(A, 0, duration=0, ChaseReeval.NONE)
    chase(B.A, 0, rate=0, ChaseReeval.NONE)
    chase(B.A, 0, duration=0, ChaseReeval.NONE)
    createDummy(Hero.ANA, Team.2, 0, B, C)
    hudHeader(getAllPlayers(), "", HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY, SpecVisibility.ALWAYS)
    for A in range(0,0,0):
    for B.A in range(0,0,0):
    A[0] = B
    B.A[0] = C
    wait(0)
    wait(0.016)
    wait()

rule "1 to true":
    A = B+1
    A = 1+B
    A = B > 1
    A = 1 > B
    A = B >= 1
    A = 1 >= B
    A = B < 1
    A = 1 < B
    A = B <= 1
    A = 1 <= B
    A = 1/B
    A = max(1, B)
    A = max(B, 1)
    A = min(1, B)
    A = min(B, 1)
    A = random.randint(1, B)
    A = random.randint(B, 1)
    A = 1-B
    A = B-1
    A = B[1]
    A = vect(1,1,1)
    chase(A, 1, rate=1, ChaseReeval.NONE)
    chase(A, 1, duration=1, ChaseReeval.NONE)
    chase(B.A, 1, rate=1, ChaseReeval.NONE)
    chase(B.A, 1, duration=1, ChaseReeval.NONE)
    createDummy(Hero.ANA, Team.2, 1, B, C)
    hudHeader(getAllPlayers(), "", HudPosition.LEFT, 1, Color.WHITE, HudReeval.VISIBILITY, SpecVisibility.ALWAYS)
    for A in range(1,1,1):
    for B.A in range(1,1,1):
    A[1] = B
    B.A[1] = C
    wait(1)

rule "null vector to null":
    createDummy(Hero.ANA, Team.2, A, vect(0,0,0), vect(0,0,0))
