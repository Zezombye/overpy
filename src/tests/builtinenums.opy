
rule "enums":
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    @Condition A
    A = Team.ALL
    B = Hero.BRIGITTE
    C = Map.BLACK_FOREST_WINTER
    D = getCurrentGamemode() == Gamemode.ASSAULT
    E = Button.INTERACT

    F = eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.startForcingButton(Button.MELEE)
    eventPlayer.startForcingHero(Hero.ANA)
    wait(0.016, Wait.ABORT_WHEN_FALSE)

    G = Vector.BACKWARD
    H = random.randint(1, 2)
    I = math.e
    J = math.pi
    