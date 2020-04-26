
rule "enums":
    A = Team.ALL
    B = Hero.BRIGITTE
    C = Map.BLACK_FOREST_WINTER
    D = Gamemode.ASSAULT
    E = Button.INTERACT

    F = eventPlayer.isHoldingButton(Button.INTERACT)
    wait(0.016, Wait.ABORT_WHEN_FALSE)