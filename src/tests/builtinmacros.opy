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
