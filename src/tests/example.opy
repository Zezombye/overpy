#OverPy starter pack

#!setupTags
#!disableInspector

settings {
    "main": {
        "modeName": "Some awesome game mode",
        "description": "OverPy starter pack"
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopIsland"
            ]
        },
        "general": {
            "heroLimit": "off",
            "respawnTime%": 30
        }
    }
}

globalvar counter = 0

rule "Teleport player on pressing interact":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    counter++
    eventPlayer.teleport(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection()*5)
    #Hold the player in place, to reset falling velocity
    eventPlayer.startForcingPosition(eventPlayer.getPosition(), false)
    wait()
    eventPlayer.stopForcingPosition()

rule "Display position":
    @Event eachPlayer
    print(f"{Texture.ASSAULT}Position of {eventPlayer}: <fg00FFFFFF>{eventPlayer.getPosition()}</fg>")
    debug(counter)
