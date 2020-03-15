#!mainFile "../ZombieEscape.opy"

@Rule "eichenwalde"
@Event global
if getCurrentMap() == Map.EICHENWALDE or getCurrentMap() == Map.EICHENWALDE_HALLOWEEN:

    generateMapData({
        deathplaneY: -2.05,
        sections: [
            {
                //#section 0 - before choke
                holdTime: 15,
                spawn: vect(-11.842, 1.351, -9.35),
                radius: 15,
                trigger: vect(-4.208, 3.352, -36.936),
                walls: [
                    {
                        location: vect(8.603, 5.397, -34.937)
                    },{
                        location: vect(-0.034, 4.28, -25.379)
                    },{
                        location: vect(-1.348, 3.689, -27.841)
                    },{
                        location: vect(-1.492, 1.359, -11.064)
                    },{
                        location: vect(-1.939, 1.356, -6.578)
                    }
                ]
            },{
                //#section 1 - after choke
                holdTime: 15,
                spawn: vect(-7.643, 3.377, -28.96),
                radius: 22,
                trigger: vect(31.75, 8.819, -49.356),
                walls: [
                    {
                        location: vect(38.464, 10.852, -51.943)
                    },{
                        location: vect(13, 5.554, -39.5)
                    },{
                        location: vect(8.708, 6.434, -45.911)
                    },{
                        location: vect(7.928, 6.38, -52.23),
                        carryToNextSection: true,
                    },{
                        location: vect(22, 6.398, -58.962),
                        carryToNextSection: true,
                    },{
                        location: vect(27.209, 6.395, -59.248),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 2 - point A
                holdTime: 25,
                spawn: vect(17.593, 6.142, -51.242),
                radius: 11,
                trigger: vect(17.581, 12.364, -88.729),
                tp: {
                    start: vect(21, 11.208, -99),
                    dest: vect(5.125, 12.613, -84.363),
                },
                walls: []
            },{
                //#section 3 - 2nd point
                holdTime: 15,
                spawn: vect(10.165, 12.363, -96.497),
                radius: 20,
                trigger: vect(67.373, 6.071, -83.719),
                tp: {
                    start: vect(26.932, 10.006, -87.287),
                    dest: vect(28.763, 9.349, -86.46),
                },
                walls: [
                    {
                        location: vect(70.735, 8, -78.1)
                    },{
                        location: vect(67.838, 8, -89.479)
                    },{
                        location: vect(72.732, 8, -85.123)
                    },{
                        location: vect(65.018, 18.071, -81.605)
                    },{
                        location: vect(51.731, 8.021, -66.974)
                    },{
                        location: vect(60.254, 12.454, -94.021)
                    }
                ]
            },{
                //#section 4 - 3rd point start
                holdTime: 20,
                spawn: vect(56.275, 6.161, -98),
                radius: 15,
                trigger: vect(105.776, 14.071, -46.755),
                tp: {
                    start: vect(67.503, 6.071, -83.707),
                    dest: vect(73.259, 14.071, -50.833)
                },
                walls: [
                    {
                        location: vect(104.171, 14.071, -53.97)
                    },{
                        location: vect(100.794, 12.071, -29.289)
                    },{
                        location: vect(98.65, 12.071, -37.693),
                        carryToNextSection: true,
                    },{
                        location: vect(95.719, 12.071, -44.037),
                        carryToNextSection: true,
                    },{
                        location: vect(115.603, 10.072, -40.858),
                        carryToNextSection: true,
                    },{
                        location: vect(115.165, 10.073, -48.097),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 5 - 3rd point end
                holdTime: 20,
                spawn: vect(107.763, 12.071, -32.7),
                radius: 11,
                trigger: vect(126.503, 17.516, -15.358),
                walls: [
                    {
                        location: vect(111.677, 12.09, -7.81)
                    },{
                        location: vect(142.352, 12.09, -16.331)
                    }
                ]
            },{
                //#section 6 - end
                holdTime: 0,
                spawn: vect(128.931, 15.071, -6.823),
                radius: 20,
                trigger: vect(111.545, 16.071, -33.741),
                tp: {
                    start: vect(125.858, 16.083, -19.069),
                    dest: vect(113.351, 16.071, -27.425),
                },
                walls: []
            }
        ]
    })

