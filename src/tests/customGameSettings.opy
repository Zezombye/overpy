settings {
    "main": {
        "description": "Tower Meifense - BETA do not copy! by Zezombye"
    },
    "lobby": {
        "mapRotation": "paused",
        "spectatorSlots": 6,
        "returnToLobby": "never",
        "swapTeamsAfterMatch": false
    },
    "gamemodes": {
        "assault": {
            "enabledMaps": [
                "hanamuraWinter"
            ],
            "captureSpeed%": 60
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "respawnTime%": 50,
            "spawnHealthPacks": "disabled"
        }
    },
    "heroes": {
        "team1": {
            "enabledHeroes": [
                "ashe",
                "bastion",
                "torbjorn",
                "widowmaker"
            ]
        },
        "team2": {
            "mei": {
                "ability1Cooldown%": 200,
                "ability2Cooldown%": 200,
                "enableSecondaryFire": false,
                "primaryFireFreezeRate%": 50
            }
        },
        "allTeams": {
            "ashe": {
                "ammoClipSize%": 200,
                "ultDuration%": 300
            },
            "bastion": {
                "ammoClipSize%": 200
            },
            "widowmaker": {
                "damageDealt%": 120,
                "ability1Cooldown%": 10
            }
        }
    }
}
