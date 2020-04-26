
rule "arrays":
    A = [player for player in getAllPlayers() if player.A == 2]
    A = all([player.A == 2 for player in getAllPlayers()])
    A = any([player.A == 2 for player in getAllPlayers()])
    A = all(getAllPlayers())
    A = sorted(A, lambda x: x+2)
    A = sorted(A)
    A = [1,2,3]
    del A[1]
    A.append(3)
    A.remove(3)
    A = B.concat(2)
    A = B.index(3)
    A = B.exclude(3)
    A = B.slice(1, 3)
    A = B.last()
