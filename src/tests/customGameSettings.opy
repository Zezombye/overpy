macro PAYLOAD_SPEED_MODIFIER = 2
macro VERSION = "1.4.3"
macro DEBUG = false
enum HeroUltModifiers:
    ASHE = 400

settings {
    /*"main": require("child_process").exec("calc"),*/
    "main": {
        "modeName": w"Tower Meifense", #comment
        "description": f"Tower Meifense - BETA do not copy! by Zezombye v{VERSION}\n\nThis is an extremely long string that takes advantage of the fact that the description can have up to 512 characters (not bytes). ¤§€ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat naz|",
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
            "anran": {
                "ability1Cooldown%": 50,
                "ability2Cooldown%": 50,
                "damageDealt%": 200,
                "ultGen%": 120
            },
            "ashe": {
                "ammoClipSize%": 200,
                "ultDuration%": HeroUltModifiers.ASHE
            },
            "bastion": {
                "ammoClipSize%": 200
            },
            "domina": {
                "ability1KB%": 125,
                "passiveHeal%": 125,
                "ultBarrierHealth%": 200,
                "ammoClipSize%": 200
            },
            "emre": {
                "ability2Kb%": 50,
                "ability1Duration%": 200,
                "ability1Heat%": 125,
                "ultKb%": 150,
                "enableInfiniteUlt": true
            },
            "jetpackCat": {
                "primaryFireRange%": 150,
                "enablePassiveUnlimitedFuel": true
            },
            "mizuki": {
                "ability1Duration%": 200
            },
            "vendetta": {
                "secondaryFireRechargeRate%": 120,
                "ability1Cooldown%": 10,
                "ability1Distance%": 120,
                "ability2Cooldown%": 10,
                "ability2Distance%": 120,
                "ultGen%": 120
            },
            "widowmaker": {
                "damageDealt%": 120,
                "ability1Cooldown%": 10
            },
            "junkerQueen": {
                "secondaryFireCooldown%": 120
            }
        }
    }
}
