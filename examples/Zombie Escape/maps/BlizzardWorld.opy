#!mainFile "../ZombieEscape.opy"

@Rule "blizz world"
@Event global
if getCurrentMap() == Map.BLIZZ_WORLD or getCurrentMap() == Map.BLIZZ_WORLD_WINTER:

    generateMapData({
        deathplaneY: -6.1,
        sections: [
            {
                //#section 0 - oob
                holdTime: 15,
                spawn: vect(2.97, -4.65, -85.64),
                radius: 21,
                trigger: vect(-12.49, -2.65, -34.07),
                walls: []
            },{
                //#section 1 - before choke
                holdTime: 20,
                spawn: vect(-12.371, -4.201, -57.627),
                radius: 16,
                trigger: vect(2.73, 1.25, 16.76),
                tp: {
                    start: vect(-12.51, -2.65, -33.5),
                    dest: vect(-12.48, -2.72, -32.04),
                },
                walls: [
                    {
                        location: vect(3, 1.25, 24.29)
                    },{
                        location: vect(16.91, -2.65, 25.75)
                    }
                ]
            },{
                //#section 2 - after choke
                holdTime: 15,
                spawn: vect(-10.511, -2.848, -0.823),
                radius: 17,
                trigger: vect(-8.83, 7.42, 51.64),
                walls: [
                    {
                        location: vect(-9.13, 3.15, 64.19)
                    },{
                        location: vect(-5.1, 2.47, 59.9)
                    },{
                        location: vect(-1.24, 1.86, 55.56),
                        carryToNextSection: true,
                    },{
                        location: vect(5.64, 1.77, 55.98),
                        carryToNextSection: true,
                    },{
                        location: vect(8.03, 1.44, 52.01),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 3 - point A
                holdTime: 15,
                spawn: vect(-25.075, 5.251, 39.109),
                radius: 20,
                trigger: vect(22.19, 1.38, 97.41),
                walls: [
                    {
                        location: vect(16.46, 4.44, 83)
                    },{
                        location: vect(16.27, 0.63, 88.9)
                    },{
                        location: vect(16.38, 0.38, 95.98)
                    }
                ]
            },{
                //#section 4 - 2nd point
                holdTime: 25,
                spawn: vect(35.927, 3.303, 78.218),
                radius: 15,
                trigger: vect(-55.68, 5.87, 98.16),
                tp: {
                    start: vect(22.18, 1.52, 96.16),
                    dest: vect(-17.94, 3.35, 65.14), 
                },
                walls: [
                    {
                        location: vect(-69.17, 7.93, 103.97)
                    },{
                        location: vect(-53.75, 1.14, 126.34)
                    },{
                        location: vect(-59.73, 2.16, 120.33),
                        carryToNextSection: true,
                    },{
                        location: vect(-63.11, 2.17, 115.72),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 5 - 3rd point start
                holdTime: 20,
                spawn: vect(-50.66, 5.87, 88.57),
                radius: 15,
                trigger: vect(-109.04, 8, 131.87),
                tp: {
                    start: vect(-78.4, 1.95, 129.36),
                    dest: vect(-85.12, 0.1, 108.35),
                },
                walls: [
                    {
                        location: vect(-115.74, 0.27, 95.59),
                        carryToNextSection: true,
                    },{
                        location: vect(-135.51, 2.1, 118.18),
                        carryToNextSection: true,
                    },{
                        location: vect(-125.93, 0.95, 118.13),
                        carryToNextSection: true,
                    },{
                        location: vect(-120.98, 1.1, 119.23),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 6 - 3rd point end
                holdTime: 15,
                spawn: vect(-115.069, 2.995, 156.563),
                radius: 20,
                trigger: vect(-145.55, 2.1, 103.96),
                tp: {
                    start: vect(-113.26, 6.1, 130.81),
                    dest: vect(-116.57, 1.2, 112.06),
                },
                walls: [
                    {
                        location: vect(-145.59, 2.15, 115.9)
                    },{
                        location: vect(-147.46, 2.23, 90.87)
                    }
                ]
            },{
                //#section 7 - end
                holdTime: 0,
                spawn: vect(-123.48, 1.2, 110.01),
                radius: 20,
                trigger: vect(-145.55, 2.1, 103.96),
                walls: []
            }
        ]
    })
