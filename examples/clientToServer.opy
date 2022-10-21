
/*
A proof of concept for transferring data from client to server-side.
This can be done to obtain:
- Key bindings (that then can be combined with https://workshop.codes/6AVGY to detect kb vs console)
- Language (for translations).

Combining this data also allows for more accurate fingerprinting (vs just storing the name of the player).

The only usable function is sadly "start facing" which is relatively intrusive.
You can mitigate the effect by using "start camera" while the data is collected, to avoid screen flashes.
*/

settings {
    "main": {
        "modeName": "https://workshop.codes/5AWEW",
        "description": "Proof of concept for client -> server data transfer. Upon pressing your interact key, you will be switched to a different hero depending on what key interact is bound to."
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

globalvar horizontalAngle1
globalvar horizontalAngle2
playervar oldFacing

rule "print stuff":
    print("interact = F -> bastion, U -> reinhardt, O -> ana")
    print("server side horizontal angles: {}, {}".format(horizontalAngle1, horizontalAngle2))

rule "init host":
    @Event eachPlayer
    @Condition not eventPlayer.isDummy()
    @Condition eventPlayer.hasSpawned()
    while true:
        #Both of these have different precisions for some reason. But both are not accurate enough (or start facing is not accurate enough).
        horizontalAngle1 = eventPlayer.getHorizontalFacingAngle()*100
        horizontalAngle2 = horizontalAngleOfDirection(eventPlayer.getFacingDirection())*100
        wait()
    
rule "press f":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.oldFacing = eventPlayer.getFacingDirection()

    eventPlayer.startFacing(angleToDirection(30, 0) if buttonString(Button.INTERACT) == "F" else angleToDirection(60, 0) if buttonString(Button.INTERACT) == "U" else angleToDirection(90, 0) if buttonString(Button.INTERACT) == "O" else angleToDirection(120, 0), 999999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)

    #Because of precision errors, we round to the hundredth.
    waitUntil(round(eventPlayer.getHorizontalFacingAngle()*100)/100 in [30, 60, 90], 3)

    if round(eventPlayer.getHorizontalFacingAngle()*100)/100 == 30:
        eventPlayer.startForcingHero(Hero.BASTION)
    elif round(eventPlayer.getHorizontalFacingAngle()*100)/100 == 60:
        eventPlayer.startForcingHero(Hero.REINHARDT)
    elif round(eventPlayer.getHorizontalFacingAngle()*100)/100 == 90:
        eventPlayer.startForcingHero(Hero.ANA)
    else:
        smallMessage(eventPlayer, "Could not detect interact button, or button not 'F', 'U' or 'O'")

    eventPlayer.stopFacing()
    eventPlayer.stopForcingCurrentHero()
    eventPlayer.setFacing(eventPlayer.oldFacing, Relativity.TO_WORLD)
