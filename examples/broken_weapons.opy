
/*
Used an old glitch where setting weapon to 1.1 made your weapon disappear.
Sadly this glitch is fixed, can't have fun in OW.
*/

settings {
    "main": {
        "description": "Your weapon has a chance to break when you fire it. Kill someone who still has their weapon to get it back! Made by Zezombye | credit to NyaWalking for the weapon removal"
    },
    "gamemodes": {
        "assault": {
            "enabled": false,
            "enableCompetitiveRules": true,
            "roleLimit": "2OfEachRolePerTeam"
        },
        "control": {
            "enabled": false,
            "enableCompetitiveRules": true,
            "roleLimit": "2OfEachRolePerTeam"
        },
        "escort": {
            "enableCompetitiveRules": true,
            "roleLimit": "2OfEachRolePerTeam"
        },
        "hybrid": {
            "enableCompetitiveRules": true,
            "roleLimit": "2OfEachRolePerTeam"
        }
    },
    "heroes": {
        "allTeams": {
            "disabledHeroes": [
                "ashe",
                "bastion",
                "dva",
                "doomfist",
                "echo",
                "moira",
                "reinhardt",
                "hammond",
                "zenyatta"
            ]
        }
    }
}

playervar ammo0
playervar ammo1
playervar hero
playervar isWeaponBroken

globalvar baseChance = createWorkshopSetting(float[0.5:10], "", "Base chance to break 1/(x * max ammo)", 4, 0)
globalvar hanzoChance = createWorkshopSetting(float[1:50], "", "Hanzo chance to break (each arrow fired) 1/x", 20, 1)
globalvar sigmaChance = createWorkshopSetting(float[1:50], "", "Sigma chance to break (each ball fired) 1/x", 30, 1)
globalvar brigChance = createWorkshopSetting(float[1:50], "", "Brigitte chance to break (each hit) 1/x", 20, 2)
globalvar mercyChance = createWorkshopSetting(float[100:4000], "", "Mercy chance to break (each tick) 1/x", 1000, 2)

rule "magz why is assemble hero time 30 seconds":
    @Condition isAssemblingHeroes()
    setMatchTime(10)

rule "changing hero resets weapon":
    @Event eachPlayer
    @Condition eventPlayer.hero != eventPlayer.getCurrentHero()
    do:
        wait()
        eventPlayer.isWeaponBroken = false
        eventPlayer.setWeapon(1)
        eventPlayer.hero = eventPlayer.getCurrentHero()
        eventPlayer.ammo0 = eventPlayer.getAmmo(0)
        eventPlayer.ammo1 = eventPlayer.getAmmo(1)
    while RULE_CONDITION

rule "reset weapon broken":
    @Event eachPlayer
    @Condition eventPlayer.hasSpawned()
    @Condition eventPlayer.isAlive()
    eventPlayer.isWeaponBroken = false
    eventPlayer.setWeapon(1)

rule "kill someone who has weapon":
    @Event playerDealtFinalBlow
    @Condition attacker.isWeaponBroken
    @Condition not victim.isWeaponBroken
    attacker.isWeaponBroken = false
    attacker.setWeapon(1)
    bigMessage(attacker, "Stole {}'s weapon".format(victim))

rule "keep weapon broken":
    @Event eachPlayer
    @Condition eventPlayer.isWeaponBroken
    @Condition eventPlayer.getCurrentWeapon() != 1.1
    do:
        eventPlayer.setWeapon(1.1)
        wait()
    while RULE_CONDITION

rule "weapon broke":
    @Event eachPlayer
    @Condition eventPlayer.isWeaponBroken
    bigMessage(eventPlayer, "Your weapon broke!")

rule "detect ammo change for clip 0, and potentially break weapon":
    @Event eachPlayer
    @Condition eventPlayer.getCurrentHero() == eventPlayer.hero
    @Condition eventPlayer.getCurrentHero() not in [Hero.HANZO, Hero.BRIGITTE]
    @Condition eventPlayer.getCurrentWeapon() == 2 or eventPlayer.getCurrentHero() not in [Hero.TORBJORN, Hero.MERCY]
    @Condition eventPlayer.ammo0 != eventPlayer.getAmmo(0)
    @Condition eventPlayer.isWeaponBroken == false
    do:
        if eventPlayer.ammo0 > eventPlayer.getAmmo(0):
            if random.randint(0, eventPlayer.getMaxAmmo(0)*baseChance) < eventPlayer.ammo0 - eventPlayer.getAmmo(0):
                eventPlayer.isWeaponBroken = true
        eventPlayer.ammo0 = eventPlayer.getAmmo(0)
        wait()
    while RULE_CONDITION

rule "detect ammo change for clip 1, and potentially break weapon":
    @Event eachPlayer
    @Condition eventPlayer.getCurrentHero() == eventPlayer.hero
    @Condition eventPlayer.getCurrentHero() not in [Hero.HANZO, Hero.BRIGITTE]
    @Condition eventPlayer.getCurrentWeapon() == 2 or eventPlayer.getCurrentHero() not in [Hero.TORBJORN, Hero.MERCY]
    @Condition eventPlayer.ammo1 != eventPlayer.getAmmo(1)
    @Condition eventPlayer.isWeaponBroken == false
    do:
        if eventPlayer.ammo1 > eventPlayer.getAmmo(1):
            if random.randint(0, eventPlayer.getMaxAmmo(1)*baseChance) < eventPlayer.ammo1 - eventPlayer.getAmmo(1):
                eventPlayer.isWeaponBroken = true
        eventPlayer.ammo1 = eventPlayer.getAmmo(1)
        wait()
    while RULE_CONDITION

rule "hanzo break":
    @Event eachPlayer
    @Condition eventPlayer.getCurrentHero() == Hero.HANZO
    @Condition eventPlayer.isFiringPrimaryFire()
    @Condition eventPlayer.isWeaponBroken == false
    do:
        waitUntil(not eventPlayer.isFiringPrimaryFire(), 999)
        if eventPlayer.getCurrentHero() != Hero.HANZO or eventPlayer.isWeaponBroken:
            return
        if random.randint(0, hanzoChance) == 0:
            eventPlayer.isWeaponBroken = true
        wait()
    while RULE_CONDITION
    
rule "sigma break":
    @Event eachPlayer
    @Condition eventPlayer.getCurrentHero() == Hero.SIGMA
    @Condition eventPlayer.isFiringPrimaryFire()
    @Condition eventPlayer.isWeaponBroken == false
    do:
        waitUntil(not eventPlayer.isFiringPrimaryFire(), 999)
        if eventPlayer.getCurrentHero() != Hero.SIGMA or eventPlayer.isWeaponBroken:
            return
        if random.randint(0, sigmaChance) == 0:
            eventPlayer.isWeaponBroken = true
        wait()
    while RULE_CONDITION

rule "torb or brig deal dmg":
    @Event playerDealtDamage
    @Condition eventPlayer.getCurrentHero() == Hero.BRIGITTE or eventPlayer.getCurrentHero() == Hero.TORBJORN and eventPlayer.getCurrentWeapon() == 2
    #@Condition eventAbility == Button.PRIMARY_FIRE
    @Condition eventPlayer.isWeaponBroken == false
    print(eventAbility)
    if random.randint(0, brigChance) == 0:
        eventPlayer.isWeaponBroken = true
        

rule "mercy deal healing":
    @Event eachPlayer
    @Condition eventPlayer.getCurrentHero() == Hero.MERCY
    @Condition eventPlayer.getCurrentWeapon() == 1
    @Condition eventPlayer.isFiringPrimaryFire() or eventPlayer.isFiringSecondaryFire()
    @Condition eventPlayer.isWeaponBroken == false
    do:
        if random.randint(0, mercyChance) == 0:
            eventPlayer.isWeaponBroken = true
        wait()
    while RULE_CONDITION