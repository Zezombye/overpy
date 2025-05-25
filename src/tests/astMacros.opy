
macro testconst = (543
+B)
globalvar owo

macro Player.testconst = self.x + self.y

macro annotations():
    @Event eachPlayer
    @Condition A == B

macro test1():
    A = 2
    B = 3

macro test2(a, b):
    a + b + C

macro test3(a, b=3):
    a - b

macro test4(a=5, b):
    A = a
    B = test3(a+B, b)

macro Player.test2(b):
    self.A = b

macro Player.test3(self):
    self.A = 4

macro createRule(a):
    rule "2":
        A = a

macro createRules(a, b):
    rule "3":
        A = a
    rule "4":
        B = b

macro loneCondition():
    if A:
        B = 3

macro loneLoop():
    while B:
        C++

rule "1":
    annotations()
    #A = 543+B
    A = testconst
    #A = A.x + A.y
    A = A.testconst
    #A = 2, B = 3
    test1()
    # A = 2 + B + C
    A = test2(2, B)
    # A = B - 3
    A = test3(B)
    # A = B - C
    A = test3(B,C)
    # A = B - C
    A = test3(b=C, a=B)
    # A = 5, B = (5+B) - 6
    test4(b=6)
    # hostPlayer.A = 3
    hostPlayer.test2(3)
    if A:
        loneCondition()
        loneLoop()
    while A:
        loneCondition()
    loneCondition()
    # hostPlayer.A = 4
    hostPlayer.test3()

createRule(123)
createRules(456, 789)
