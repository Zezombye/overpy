#!optimizeForSize

rule "strict optimizations":
    #!optimizeStrict
    #Unless specified otherwise, none of these should be optimized
    A = "am" == "**"
    A = B + 0
    A = B + vect(0,0,0)
    A = B - B
    A = B * 0
    A = len(B)*0 #0
    A = B * 1
    A = B / 1
    A = 0 / B
    A = B and false
    A = B and true
    A = B and not B
    A = B or false
    A = B or true
    A = B or not B

rule "comparison":
    A = B == C
    A = 1 == 0 #false
    A = B == B #true
    A = B == 0 #not B
    A = isGameInProgress() == true #isGameInProgress()
    A = Hero.ANA == Map.KINGS_ROW #false
    A = Hero.ANA == "azer{}".format(A) #should not be optimized

    A = B != C
    A = 1 != 0 #true
    A = B != B #false
    A = B != 0
    A = not(B != 0) #not B
    A = isGameInProgress() != true #not isGameInProgress()
    A = Hero.ANA != Map.KINGS_ROW #true
    A = Hero.ANA != "azer{}".format(A) #should not be optimized

    A = B >= C
    A = 1 >= 0 #true
    A = B >= B #true

    A = B <= C
    A = 1 <= 0 #false
    A = B <= B #true

    A = B > C
    A = 1 > 0 #true
    A = B > B #false

    A = B < C
    A = 1 < 0 #false
    A = B < B #false

rule "add":
    A = B+C
    A = B+0 #B
    A = B+B #B*2
    A = 1+2 #3
    A = B+vect(0,0,0) #B
    A = vect(0,0,0)+B #B
    A = vect(B,C,D)+vect(1,2,3)
    A = vect(1,2,3)+vect(4,5,6) #vect(5,7,9)
    A = vect(0,0,0) #left + right
    A = vect(0,1,0) #up
    B = Vector.LEFT + Vector.DOWN + Vector.BACKWARD #vect(1, -1, -1)
    C = Vector.RIGHT + Vector.UP + Vector.FORWARD #vect(-1, 1, 1)

rule "subtract":
    A = B-C
    A = B-C-D
    A = B-0 #B
    A = B-B #0
    A = 1-2 #-1
    A = B-vect(0,0,0) #B
    A = vect(B,C,D)-vect(1,2,3)
    A = vect(1,2,3)-vect(4,5,6) #vect(-3,-3,-3)

rule "negate":
    A = -B
    A = -B%C
    A = -vect(1,B,-2)
    A = -vect(1,2,-3) #vect(-1,-2,3)
    A = -1
    A = -1*B
    A = -(-B) #B
    A = --1 #1
    A = --B #B
    A = ---1 #-1
    A = ---B #-B
    A = - - 0.01 #0.01
    A = B + - C
    A = not -C
    A = B * - C

rule "multiply":
    A = B*C
    A = B*1 #B
    A = B*B #B**2
    A = B*0 #0
    A = 2*3 #6
    A = 2*vect(3,4,5) #vect(6,8,10)
    A = vect(3,4,5)*2 #vect(6,8,10)
    A = vect(1,2,3)*vect(4,5,6) #vect(4,10,18)

rule "divide":
    A = B/C
    A = B/1 #B
    A = B/0 #0
    A = 0/B #0
    A = 1/2 #0.5
    A = -3/B
    A = vect(3,3,3)/vect(1,2,3) #vect(3,1.5,1)
    A = vect(1,2,3)/2 #vect(0.5,1,1.5)

rule "modulo":
    A = B%C
    A = B%0 #0
    A = 0%B #0
    A = B%B #0
    A = 7%3 #1
    A = (-7)%3 #-1
    A = (-7)%(-3) #-1
    A = 7%(-3) #1

rule "power":
    A = B**C
    A = B**C**D
    A = B**1 #B
    A = 0**B #0
    A = 1**B #1
    A = (-1)**B #0
    A = 2**3 #8
    A = (-2)**3 #0

rule "assignment":
    @Event eachPlayer
    A = B
    A[0] = B
    eventPlayer.A = B
    eventPlayer.A[0] = B
    A = A #pass
    A += B
    eventPlayer.A += B
    A += 0 #pass
    A -= B
    A *= B
    A /= B
    A %= B
    A **= B
    A max= B
    A min= B
    A++
    A--

rule "and":
    A = A and B
    A = B and true #B
    A = B and false #false
    A = B and B #B
    A = B and not B #false
    A = not B and not C #not (B or C)

rule "or":
    A = A or B
    A = B or B #B
    A = A or true #true
    A = B or false #B
    A = B or not B #true
    A = not B or not C #not (B and C)

rule "not":
    A = not B
    A = not not B #not not B
    A = not not (B == C) #B == C
    A = not true #false
    A = not false #true
    A = 3 * not B

rule "in":
    A = A in B
    A = 3 in [1,A,3] #true
    A = 3 in [A,5,6]
    A = B not in C

rule "ternaries":
    A = B if C else D
    A = B if 0 == 0 else D #B
    A = B if 0 != 0 else D #D
    A = B if C else B #B
    A = B if not C else D #if-then-else(C, D, B)
    A = B if 0 != 0 else C if 0 != 0 else D #D

rule "handling random values":
    random.choice(getAllPlayers()).A += 0 #pass
    random.choice(getAllPlayers()).A += 1
    random.choice(getAllPlayers()).A = random.choice(getAllPlayers()).A + 1
    random.choice(getAllPlayers()).A max= B
