
settings {
    "lobby": {
        "team1Slots": 0,
        "team2Slots": 0
    },
    "gamemodes": {
        "tdm": {
            "enabledMaps": [
                "workshopChamber",
                "workshopExpanse",
                "workshopExpanseNight",
                "workshopGreenScreen",
                "workshopIsland",
                "workshopIslandNight"
            ]
        }
    }
}

#Global variables

globalvar Afqdsfdsq 0

#Activated extensions

#!extension beamEffects
#!extension beamSounds
#!extension buffAndDebuffSounds
#!extension spawnMoreDummyBots


rule "Rule 1":
    @Event eachPlayer
    @Hero all
    
    createBeam(getAllPlayers(), Beam.BRIGITTE_FLAIL_CHAIN, eventPlayer, eventPlayer, Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.ECHO_FOCUSING_BEAM_SOUND, Color.WHITE, eventPlayer, Afqdsfdsq, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_INCREASED_HEALING_SOUND, Color.WHITE, eventPlayer, 1)
