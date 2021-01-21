
#OverPy starter pack

settings {
    "main": {
        "description": "Some awesome game mode"
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

#!define strCompression() __script__("generatePathmap.js")
strCompression()

#!define NB_NODES 16

globalvar charTest = []
globalvar owo = []
globalvar i
globalvar j
globalvar uncompressedData
globalvar timer
globalvar currentNodeArray
globalvar currentCharIdx

enum SpectatorButton:
    Q = Button.ABILITY_1,
    E = Button.INTERACT,
    Shift = Button.SecondaryFire,
    Ctrl = Button.PrimaryFire,
    M1 = Button.Ability2,
    B = Button.Jump,
    Z = Button.Ultimate

rule "":
    print("load: {}".format(getServerLoad()))
    print("avg: {}".format(getAverageServerLoad()))
    print("max: {}".format(getPeakServerLoad()))
    print(SpectatorButton.Q)

rule "Extract pathmap":
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    #disableInspector()
    #Test if all chars work. charTest should only contain 0
    currentCharIdx = 0
    for i in range(len(testStrs)):
        for j in range(strLen(testStrs[i])):
            charTest.append(alphabet.index(testStrs[i].substring(j, 1)) - (i*128+j))
            #owo.append(testStrs[i].substring(j, 1))
            wait()
        wait()

    wait()
    print(timer)

    #uncompress the data
    chase(timer, 9999, rate=1, ChaseReeval.NONE)

    uncompressedData[NB_NODES-1] = 0
    currentNodeArray[NB_NODES-1] = 0

    currentCharIdx = 0
    for i in range(len(data)):
        for j in range(strLen(data[i])):
            currentNodeArray[currentCharIdx % NB_NODES] = alphabet.index(data[i].substring(j, 1))
            currentCharIdx++
            if currentCharIdx % NB_NODES == 0:
                uncompressedData[floor((currentCharIdx-1)/NB_NODES)] = currentNodeArray
        
        wait()
    
    stopChasingVariable(timer)
    enableInspector()
