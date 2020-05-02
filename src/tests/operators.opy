
rule "comparison":
    A = B == C
    A = 1 == 0 #false
    A = B == B #true

    A = B != C
    A = 1 != 0 #true
    A = B != B #false

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
    A = vect(B,C,D)+vect(1,2,3)
    A = vect(1,2,3)+vect(4,5,6) #vect(5,7,9)
    
rule "subtract":
    A = B-C
    A = B-0 #B
    A = B-B #0
    A = 1-2 #-1
    A = vect(B,C,D)-vect(1,2,3)
    A = vect(1,2,3)-vect(4,5,6) #vect(-3,-3,-3)

rule "negate":
    A = -B
    A = -vect(1,B,-2)
    A = -vect(1,2,-3) #vect(-1,-2,3)
    A = -1
    A = -1*B
    A = -(-A) #A
    A = --1 #1
    A = --A #A
    A = ---1 #-1
    A = ---A #-A

rule "multiply":
    A = B*C
    A = B*1 #B
    A = B*B #B**2
    A = B*0 #0
    A = 2*3 #6
    A = 2*vect(3,4,5) #vect(6,8,10)
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
    A = B**0 #1
    A = B**1 #B
    A = 0**B #0
    A = 1**B #1
    A = (-1)**B #0
    A = 2**3 #8
    
rule "assignment":
    A += B
    A -= B
    A *= B
    A /= B
    A %= B
    A **= B
    A max= B
    A min= B

rule "ternaries":
    A = B if C else D
    A = B if 0 == 0 else D #B
    A = B if 0 != 0 else D #D
    A = B if 0 != 0 else C if 0 != 0 else D #D

