#!optimizeForSize

globalvar waveHeroes
globalvar waveLengths

rule "splitDictArray":
    splitDictArray({
        hero: waveHeroes,
        length: waveLengths
    }, [
        {
            hero: Hero.ANA,
            length: 3,
        }, {
            length: 8,
            hero: Hero.SOLDIER,
        }, {
            hero: Hero.HAMMOND,
        }
    ])

rule "tabular":
    tabular([waveHeroes, waveLengths], [
        Hero.ANA, 3,
        Hero.SOLDIER, 8,
        Hero.WRECKING_BALL, null,
    ])
