
#OverPy starter pack

settings {
    "main": {
        "modeName": "https://workshop.codes/6AVGY",
        "description": "Keyboard/Controller detector by Zezombye.\n\nYou are considered as using a keyboard if any of the buttons that can be detected with the workshop are on the keyboard (if all buttons are either unbounded or on your mouse, you will be detected as using a controller).\n\nIt should work with any keys on any language - feel free to test!\n\nPlease report to me any inaccurate detection."
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

/*globalvar buttons = [
    Button.ABILITY_1,
    Button.ABILITY_2,
    Button.CROUCH,
    Button.INTERACT,
    Button.JUMP,
    Button.MELEE,
    Button.PRIMARY_FIRE,
    Button.RELOAD,
    Button.SECONDARY_FIRE,
    Button.ULTIMATE,
]*/

rule "Detection":

    /*print(strContains("qsdf", "".charAt(0)))
    for I in range(len(buttons)):
        print("{}: '{}'".format(buttons[evalOnce(I)], buttonString(buttons[evalOnce(I)])))*/

    print("{}{}".format("You are currently using a keyboard." if any([buttonString(b) and strContains(

        #GUIDs: 241 to 2D7
        #Note: It will fail if a key is not bounded (as it is empty string).

        #Basic chars
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "0123456789"
        
        #Who tf will put keys on these
        #Note: I couldn't put "!" and "<", I haven't tested if some of these can be inputted
        "&~\"#'{([-|`_\\^@)]=}^$%*,?.;/:>"

        #French chars I could put and that are in the GUIDs
        "²ÉÈÇÀÙ+¤"

        #German
        "^ßÜÖÄ"

        #Spanish
        "Ñ¡´¿"

        #Italian
        "ÒÌ"

        #Polish and portuguese has nothing more
        
        #Russian
        "СЛП"

        #Japanese
        "↓←→↑"

        #Korean
        "스아좌왼숫우오위"

        #Simplified chinese
        "空回退大下左暂右上"
        
        #Traditional chinese
        "；，向數"
        
    , buttonString(b).charAt(0)) for b in [
        Button.ABILITY_1,
        Button.ABILITY_2,
        Button.CROUCH,
        Button.INTERACT,
        Button.JUMP,
        Button.MELEE,
        Button.PRIMARY_FIRE,
        Button.RELOAD,
        Button.SECONDARY_FIRE,
        Button.ULTIMATE,
    ]]) else "You are currently using a controller.", "\n\nIs this correct?\nIf not, please leave a comment on workshop.codes/6AVGY :)"))
