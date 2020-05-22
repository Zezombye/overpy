
rule "test":
    print(round(0.001*1000) == 1)
    print(round(0.0001*10000) == 1)
    print(round(0.0002*10000) == 2)
    print(round(0.0003*10000) == 3)
    print(round(0.0004*10000) == 4)
    print(round(0.0005*10000) == 5)
    print(round(0.0006*10000) == 6)
    print(round(0.0007*10000) == 7)
    print(round(0.0008*10000) == 8)
    print(round(0.0009*10000) == 9)