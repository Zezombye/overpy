
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

#!define strCompression() __script__("str_compression.js")
strCompression()

globalvar charTest = []
globalvar owo = []
globalvar i
globalvar j
globalvar uncompressedData
globalvar timer
globalvar currentNodeArray

rule "":
    print("load: {}".format(getServerLoad()))
    print("avg: {}".format(getAverageServerLoad()))
    print("max: {}".format(getPeakServerLoad()))

rule "":
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    disableInspector()
    #Test if all chars work. charTest should only contain 0
    for i in range(150):
        charTest.append(alphabet.index(testStr.substring(i, 1)) - i)
        owo.append(testStr.substring(i, 1))
    
    wait()
    print(timer)

    #uncompress the data
    chase(timer, 9999, rate=1, ChaseReeval.NONE)

    uncompressedData[150-1] = 0
    currentNodeArray[150-1] = 0

    for i in range(150):
        for j in range(75):
            currentNodeArray[j] = alphabet.index(data[2*i].substring(j, 1))
        
        for j in range(75):
            currentNodeArray[j+75] = alphabet.index(data[2*i+1].substring(j, 1))
        
        uncompressedData[i] = currentNodeArray
        wait()
    
    stopChasingVariable(timer)
    enableInspector()
