
/*
Made for Magzie's birthday
*/

globalvar cakePos 100
globalvar i2 101
globalvar candlePos 102

#!define CAKE_SIDE_LENGTH 1.5
#!define CAKE_LONG (CAKE_SIDE_LENGTH/sqrt(2) + CAKE_SIDE_LENGTH/2)
#!define CAKE_SHORT (CAKE_SIDE_LENGTH/2)

#!define CANDLE_SQUARE_LENGTH (CAKE_SIDE_LENGTH/2 + CAKE_SIDE_LENGTH/sqrt(2)/2)

#!define cakeBeam(start, end, yPos) createBeam(getAllPlayers(), Beam.GOOD, start+vect(0, yPos, 0), end+vect(0, yPos, 0), Color.YELLOW, EffectReeval.VISIBILITY)

rule "cake":
    cakePos = [
        vect(CAKE_SHORT, 0, CAKE_LONG),
        vect(CAKE_LONG, 0, CAKE_SHORT),
        vect(CAKE_LONG, 0, -CAKE_SHORT),
        vect(CAKE_SHORT, 0, -CAKE_LONG),
        vect(-CAKE_SHORT, 0, -CAKE_LONG),
        vect(-CAKE_LONG, 0, -CAKE_SHORT),
        vect(-CAKE_LONG, 0, CAKE_SHORT),
        vect(-CAKE_SHORT, 0, CAKE_LONG),
    ]

    candlePos = []
    for i2 in range(28):
        candlePos.append(vect(random.uniform(-CANDLE_SQUARE_LENGTH, CANDLE_SQUARE_LENGTH), 0, random.uniform(-CANDLE_SQUARE_LENGTH, CANDLE_SQUARE_LENGTH)))

    for i2 in range(len(candlePos)):
        createBeam(getAllPlayers(), Beam.GRAPPLE, candlePos[i2]+vect(0.001, 1, 0), candlePos[i2]+vect(0, 2, 0), Color.WHITE, EffectReeval.VISIBILITY)

    for i2 in range(0.125, 1, 0.125):
        cakeBeam(cakePos[0], cakePos[1], i2)
        cakeBeam(cakePos[1], cakePos[2], i2)
        cakeBeam(cakePos[2], cakePos[3], i2)
        cakeBeam(cakePos[3], cakePos[4], i2)
        cakeBeam(cakePos[4], cakePos[5], i2)
        cakeBeam(cakePos[5], cakePos[6], i2)
        cakeBeam(cakePos[6], cakePos[7], i2)
        cakeBeam(cakePos[7], cakePos[0], i2)

    for i2 in range(-CAKE_LONG+0.125, CAKE_LONG, 0.125):
        if abs(i2) > CAKE_SIDE_LENGTH/2:
            cakeBeam(vect(i2, 0, CAKE_LONG-(abs(i2)-CAKE_SIDE_LENGTH/2)), vect(i2, 0, -(CAKE_LONG-(abs(i2)-CAKE_SIDE_LENGTH/2))), 1)
        else:
            cakeBeam(vect(i2, 0, CAKE_LONG), vect(i2, 0, -CAKE_LONG), 1)

rule "candles":
    while true:
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, random.choice(candlePos)+vect(0, 2.1, 0), 0.1)
        wait(0.016)