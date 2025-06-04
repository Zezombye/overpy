settings {
    "lobby": {
        "allowPlayersInQueue": true,
        "enableMatchVoiceChat": true,
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopChamber"
            ],
        }
    },
}
#!setupTags
#!translations de fr zh es_es tr th ja ko pl pt ru it en
#!translateWithPlayerVar
rule "owo\nuwu":
    A = _("host player: {}").format(hostPlayer)
    debug(t"some string")

rule "":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    bigMessage(getAllPlayers, "{}{}".format(_(A), buttonString(Button.INTERACT)))
    smallMessage(getAllPlayers, "{}{}".format(_(A), buttonString(Button.INTERACT)))
