macro PAYLOAD_SPEED_MODIFIER = 2
macro VERSION = "1.4.3"
macro DEBUG = false
enum HeroUltModifiers:
    ASHE = 400

settings {
    /*"main": require("child_process").exec("calc"),*/
    "main": {
        "modeName": w"Tower Meifense", #comment
        "description": f"Tower Meifense - BETA do not copy! by Zezombye v{VERSION}",
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
                "templeOfAnubis"
            ],
            "captureSpeed%": 60
        },
        "escort": {
            "enabledMaps": [
                "dorado"
            ],
            "payloadSpeed%": 100 * PAYLOAD_SPEED_MODIFIER,
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "respawnTime%": 50 if DEBUG else 100,
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
                "ultDuration%": HeroUltModifiers.ASHE
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
