
/*
This is an example gamemode that uses the dummy bots to make an FFA that you can play alone.
*/

settings {
    "main": {
        "description": "https://github.com/Zezombye/OverPy | Example gamemode for the bots module"
    },
    "lobby": {
        "ffaSlots": 1
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                "necropolis"
            ]
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "respawnTime%": 30
        }
    },
    "heroes": {
        "allTeams": {
            "general": {
                "abilityCooldown%": 0
            }
        }
    }
}


