
/*
A simple HUD crosshair.
https://workshop.codes/Z3XBS
*/

settings {
    "main": {
        "description": "HUD Text Crosshair | by Zezombye"
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

#๏※⊙¤+x

#!define FSP " "
#!define NSP " "

rule "crosshair":
    #hudSubtext(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n", HudPosition.TOP, -999, Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
    hudSubheader(getAllPlayers(), b" \n", HudPosition.TOP, -998, Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
    hudSubheader(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", HudPosition.TOP, -997, Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
    hudSubtext(getAllPlayers(), 
    FSP FSP FSP FSP FSP FSP FSP FSP FSP
    "⊙" 
    NSP NSP NSP NSP NSP NSP NSP NSP NSP NSP
    NSP NSP NSP NSP NSP NSP
    , HudPosition.TOP, -996, Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)

rule "disable hud":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.disableHeroHUD()

    
rule "enable hud":
    @Event eachPlayer
    @Condition not eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.enableHeroHud()