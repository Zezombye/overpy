#!mainFile "../ZombieEscape.opy"
@Rule "kings row"
@Event global
if getCurrentMap() == Map.KINGS_ROW or getCurrentMap() == Map.KINGS_ROW_WINTER:
    generateMapData({
        deathplaneY: -15,
        sections: [
            {
                //#section 0 - oob
                holdTime: 15,
                spawn: vect(62.73, 5.86, -55.22),
                radius: 21,
                trigger: vect(30.029, 7.399, -15.74),
                walls: [
                    {
                        location: vect(30.77, 5.96, -8)
                    },{
                        location: vect(27.6, 5.859, -39.78),
                        carryToNextSection: true,
                    },{
                        location: vect(31.81, 0.24, -63.221),
                        carryToNextSection: true,
                    },{
                        location: vect(25, 5.96, -10.971),
                        carryToNextSection: true,
                    },{
                        location: vect(25.359, 5.859, -51.5),
                        carryToNextSection: true,
                    },{
                        location: vect(24.88, 5.96, -16.25),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 1 - attack spawn
                holdTime: 20,
                spawn: vect(32.71, 7.46, -31.96),
                radius: 16,
                trigger: vect(-17.2, 0.55, 42.439),
                tp: {
                    start: vect(42.16, 0.67, 31.96),
                    dest: vect(3.63, 3.55, 52.29),
                },
                walls: [
                    {
                        location: vect(19.22, 4, -6.98),
                    }
                ]
            },{
                //#section 2 - before choke
                holdTime: 20,
                spawn: vect(-10.513, 0.937, 41.313),
                radius: 17,
                trigger: vect(9.729, 9.35, -8.53),
                tp: {
                    start: vect(-20.25, 1.26, 27.649),
                    dest: vect(7.409, 1.488, 13.761),
                },
                walls: [
                    {
                        location: vect(10.5, 7.35, -16.181)
                    },{
                        location: vect(-8.021, 1.24, 3.88)
                    },{
                        location: vect(1.109, 1.42, 4.25)
                    },{
                        location: vect(-1.59, 1.24, -12.7)
                    },{
                        location: vect(4.67, 7, -13.62)
                    }
                ]
            },{
                //#section 3 - point A
                holdTime: 20,
                spawn: vect(24.319, 5.35, -4.521),
                radius: 20,
                trigger: vect(-22.48, 2.35, -16.36),
                walls: [
                    {
                        location: vect(-11.931, 1.41, -15.03)
                    },{
                        location: vect(-2.94, 1.41, -38.69)
                    },{
                        location: vect(-19.63, 2.35, -54.021)
                    },{
                        location: vect(-15.25, 1.229, -27.73)
                    },{
                        location: vect(-15.471, 1.22, -31.96)
                    },{
                        location: vect(-17.3, 1.22, -37)
                    }
                ]
            },{
                //#section 4 - 2nd point
                holdTime: 15,
                spawn: vect(-25.564, 1.336, -34.058),
                radius: 25,
                trigger: vect(-95.54, -1.141, -46.36),
                tp: {
                    start: vect(-19.271, 2.35, -16.34),
                    dest: vect(-29.23, 10.35, -12.99),
                },
                walls: [
                    {
                        location: vect(-62.45, 6.3, -17.04)
                    },{
                        location: vect(-66.01, 6.37, -12.891)
                    },{
                        location: vect(-52.851, 1.2, -36.07)
                    },{
                        location: vect(-55.46, 0.95, -32.54)
                    },{
                        location: vect(-72.33, 1.16, -12.42)
                    }
                ]
            },{
                //#section 5 - 3rd point
                holdTime: 20,
                spawn: vect(-92.891, 2.859, -28.7),
                radius: 35,
                trigger: vect(-168.86, 1.16, 35.54),
                tp: {
                    start: vect(-97.971, -1.141, -47.771),
                    dest: vect(-102.94, 2.24, -8.07),
                },
                walls: [
                    {
                        location: vect(-170.521, 1.479, 39.27)
                    },{
                        location: vect(-171.641, 1.479, 32.51)
                    }
                ]
            },{
                //#section 6 - final
                holdTime: 0,
                spawn: vect(-156.65, 1.479, 48.01),
                radius: 10,
                trigger: vect(-178.84, 1.54, 37.25),
                walls: []
            }
        ]
    })