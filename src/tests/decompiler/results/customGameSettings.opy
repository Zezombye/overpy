settings {
    "lobby": {
        "allowPlayersInQueue": true,
        "enableMatchVoiceChat": true,
        "team1Slots": 1,
        "pauseGameOnDisconnect": true
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopChamber"
            ],
            "setValidControlPoints": "fourth",
            "randomHeroRoleLimitPerTeam": 3
        }
    },
    "heroes": {
        "team1": {
            "enabledHeroes": [
                "baptiste"
            ]
        },
        "allTeams": {
            "baptiste": {
                "ability2Cooldown%": 215,
                "ability1Cooldown%": 60
            },
            "pharah": {
                "passiveMaxTime%": 300
            },
            "roadhog": {
                "secondaryFireCooldown%": 0,
                "ultKb%": 200
            },
            "general": {
                "abilityCooldown%": 137
            }
        }
    }
}

#Only remove the following directive if the gamemode does not use type casting tricks such as A+0, A*0, A and true, etc which would otherwise be optimized out.
#!optimizeStrict


rule "Empty Rule":
    @Delimiter
    


