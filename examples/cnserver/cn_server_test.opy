#!postCompileHook "script.js"
settings {
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopChamber"
            ]
        }
    }
}

#Activated extensions
#!extension projectiles

rule "set player invis":
    @Event eachPlayer

    eventPlayer.setInvisibility(Invis.NONE)