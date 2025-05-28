
rule "array literals":
    A = [] #empty array
    A = [1,2,3]
    A = A[B]
    A = B[0] #first of(B)
    A = [B,C,D][0] #B
    A = [B,C,D][1] #C
    A = [B,C,D][3] #0
    A = [B,C,D][1.3] #C
    A = [B,C,D][1.5] #D
    A = [B,C,D][1.7] #D
    A = [B,C,D][2.6] #0
    A = [[1,2],[3,4]]
    A[0] = B[0]

rule "last":
    A = B.last()
    A = [B,C,D].last() #D

rule "filtered array":
    A = [player for player in getAllPlayers() if player.A == 2]
    A = [player for player in getAllPlayers() if player != (B == player)]
    A = [player for player in getAllPlayers() if player != B] #getAllPlayers.remove(B)
    A = [player for player in getAllPlayers() if A == B] #getAllPlayers() if A == B else []
    A = [player for player in getAllPlayers() if true] #getAllPlayers()
    A = [player for player, i in getAllPlayers() if player != i]
    A = [player.getHealth() for player in getAllPlayers() if player.A == 2]
    A = [player.getHealth() for player in getAllPlayers() if true] #mapped array()

rule "mapped array":
    A = [player.getHealth() for player in getAllPlayers()]
    A = [player for player in getAllPlayers()] #getAllPlayers()

rule "index":
    A = B.index(3)
    A = [A,B,C].index(B) #[A,B].index(B)
    A = [].index(B) #-1
    A = [1,2,3,B].index(3) #2
    A = [1,2,B,3].index(3) #should not be optimized
    A = [1,2,3].index(123) #-1
    A = [1,2,3,B].index(123) #should not be optimized

rule "slice":
    A = B.slice(1,3)
    A = [1,2,3,4,5].slice(3, 1) #[4]
    A = [1,2,3,4,5].slice(3, 5) #[4,5]
    A = [1,2,3,4,5].slice(3, -2) #[]
    A = [1,2,3,4,5].slice(5, 2) #[]
    A = [1,2,3,4,5].slice(-2, 3) #[1]
    A = [1,2,3,4,5].slice(0.4, 2.5) #[1,2,3]

rule "in":
    A = 123 in [432, C, 123, B] #true
    A = B in [432, C, 123, B] #true
    A = B in [] #false
    A = 123 in [432, 643, 124] #false
    A = 123 in [432, 643, B, 124] #123 == B

rule "exclude":
    A = B.exclude(3)
    A = [B,C,D].exclude(C) #should not be optimized
    A = [1,2,3].exclude(2) #[1,3]
    A = [1,2,D].exclude(2) #[1,D].exclude(2)
    A = [1,2,3].exclude([1,3]) #[2]
    A = [1,2,3].exclude([1,D]) #[2,3].exclude([D])

rule "concat":
    A = B.concat(2)
    A = [B,C].concat(123) # [B,C,123]
    A = [B,C].concat(A) #should not be optimized
    A = [B,C].concat([D,E]) # [B,C,D,E]

rule "other array functions":
    A = all([player.A == 2 for player in getAllPlayers()])
    A = any([player.A == 2 for player in getAllPlayers()])
    A = any([i in C for i in A and B])
    A = any([i == 2 for i in (A if B else C)])
    A = all(getAllPlayers())
    A = sorted(A, lambda x: x+2)
    A = sorted(A)
    del A[1]
    A.append(3)
    A.remove(3)
    A = [X,Y,Z].reverse() #Z,Y,X
    A = B.reverse()

rule "array to string":
    A = [10,20,30]
    B = [100]
    print(arrayToString(A, 0))
    print(arrayToString(A, 1))
    print(arrayToString(A, 2))
    print(arrayToString(A, 3))
    print(arrayToString(A, 4))
    print(arrayToString([], 0))
    print(arrayToString([], 1))
    print(arrayToString([], 2))
    print(arrayToString(B, 0))
    print(arrayToString(B, 1))
    print(arrayToString(B, 2))
