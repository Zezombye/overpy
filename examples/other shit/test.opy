
globalvar hexDigits
globalvar space
globalvar spaceChase
#!define rgbText "{}{}{}{}{}{}FF>".format(random.choice(hexDigits),random.choice(hexDigits),random.choice(hexDigits),random.choice(hexDigits),random.choice(hexDigits),random.choice(hexDigits))

rule "omg dps suck":
    @Event eachPlayer
    @Hero moira
    for I in range(20):
        createInWorldText(getAllPlayers(), "{0}C0000000000797E>".format(Team.2), eventPlayer.getEyePosition()+vect(random.uniform(-3, 3), random.uniform(-3, 3), random.uniform(-3,3)), random.uniform(2,4), Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA, SpecVisibility.ALWAYS)

    eventPlayer.setCamera(worldVector(vect(0, 2, -2), eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer.getEyePosition(), 0)

rule "rgb":
    @Event global
    for hexDigits in range("0".concat("1").concat("2").concat("3").concat("4").concat("5").concat("6").concat("7").concat("8").concat("9").concat("A").concat("B").concat("C").concat("D").concat("E").concat("F"), 0):
        pass
    for space in range([].concat(" "), 0):
        pass
    chase(spaceChase, 9999, rate=0.1, ChaseReeval.DESTINATION_AND_RATE)
    hudHeader(getAllPlayers(), "{0}{1}R{0}{2}G{0}{3}B{0}{4}{9}T{0}{5}E{0}{6}X{0}{7}T{0}{8}!".format(Team.1, rgbText, rgbText, rgbText, rgbText, rgbText, rgbText, rgbText, rgbText, space[0*spaceChase]), HudPosition.TOP, 5, Color.WHITE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.ALWAYS)
    hudHeader(null, hostPlayer.getPosition(), HudPosition.TOP, 5, Color.WHITE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.ALWAYS)