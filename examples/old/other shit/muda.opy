
rule "muda":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    do:
        eventPlayer.cancelPrimaryAction()
        eventPlayer.setAbilityCooldown(Button.MELEE, 0)
        eventPlayer.forceButtonPress(Button.MELEE)
        wait(0.048)
    while RULE_CONDITION
