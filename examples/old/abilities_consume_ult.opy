settings {
    "gamemodes": {
        "assault": {},
        "control": {},
        "escort": {},
        "hybrid": {},
        "general": {
            "gamemodeStartTrigger": "manual"
        }
    },
    "heroes": {
        "allTeams": {
            "brigitte": {
                "secondaryFireCooldown%": 99,
                "shieldBashCooldown%": 99
            },
            "doomfist": {
                "secondaryFireCooldown%": 99
            },
            "hanzo": {
                "ability3Cooldown%": 99
            },
            "lucio": {
                "secondaryFireCooldown%": 99
            },
            "orisa": {
                "secondaryFireCooldown%": 99
            },
            "reinhardt": {
                "secondaryFireCooldown%": 99
            },
            "sigma": {
                "secondaryFireCooldown%": 99
            },
            "soldier": {
                "secondaryFireCooldown%": 99
            },
            "sombra": {
                "secondaryFireCooldown%": 99
            },
            "hammond": {
                "secondaryFireCooldown%": 99,
                "ability3Cooldown%": 99
            },
            "general": {
                "abilityCooldown%": 1
            }
        }
    }
}

#!define ABILITY_1_COST 5
#!define ABILITY_2_COST 10


@Rule "disable ability 2"
@Event eachPlayer
if eventPlayer.getUltCharge() < ABILITY_2_COST:
    eventPlayer.setAbility2Enabled(false)


@Rule "enable ability 2"
@Event eachPlayer
if eventPlayer.getUltCharge() >= ABILITY_2_COST:
    eventPlayer.setAbility2Enabled(true)


@Rule "ability 2 cost"
@Event eachPlayer
if eventPlayer.isUsingAbility2():
    eventPlayer.setUltCharge(eventPlayer.getUltCharge() - ABILITY_2_COST)


@Rule "disable ability 1"
@Event eachPlayer
if eventPlayer.getUltCharge() < ABILITY_1_COST:
    eventPlayer.setAbility1Enabled(false)


@Rule "enable ability 1"
@Event eachPlayer
if eventPlayer.getUltCharge() >= ABILITY_1_COST:
    eventPlayer.setAbility1Enabled(true)


@Rule "ability 1 cost"
@Event eachPlayer
if eventPlayer.isUsingAbility1():
    eventPlayer.setUltCharge(eventPlayer.getUltCharge() - ABILITY_1_COST)
