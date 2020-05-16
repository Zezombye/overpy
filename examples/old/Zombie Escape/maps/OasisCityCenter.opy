#!mainFile "../ZombieEscape.opy"
@Rule "oasis city center"
@Event global
if getCurrentMap() == Map.OASIS_CITY_CENTER:

    generateMapData({
        deathplaneY: -8.9,
        sections: [
            {
                //#section 0 - spawn
                holdTime: 15,
                spawn: vect(220.224, 2.351, 167.747),
                radius: 15,
                trigger: vect(203.838, 2.351, 193.103),
                walls: []
            },{
                //#section 1 - before choke
                holdTime: 20,
                spawn: vect(211.228, 2.351, 181.767),
                radius: 15,
                trigger: vect(187.465, 3.197, 228.936),
                tp: {
                    start: vect(202.897, 2.351, 194.546),
                    dest: vect(202.001, 2.349, 195.913),
                },
                walls: [
                    {
                        location: vect(138.166, 2, 209.031)
                    },{
                        location: vect(173.918, 5.451, 238.435)
                    },{
                        location: vect(153.992, 4.105, 211.989)
                    },{
                        location: vect(170.979, 5.348, 232.41)
                    },{
                        location: vect(169.23, 4.23, 221.512),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 2 - before jump pad
                holdTime: 15,
                spawn: vect(194.838, 2.995, 221.516),
                radius: 22,
                trigger: vect(164.01, 5.352, 246.529),
                walls: [
                    {
                        location: vect(146.914, 5.353, 269.272),
                    },{
                        location: vect(165.43, 5.353, 251.3),
                    },{
                        location: vect(174.073, 5.453, 244.755)
                    },{
                        location: vect(152.772, 4.353, 256.83)
                    },{
                        location: vect(152.202, 5.453, 277.696),
                        carryToNextSection: true,
                    },{
                        location: vect(169.966, 5.352, 239.374),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 3 - jump pad
                holdTime: 25,
                spawn: vect(153.317, 5.353, 228.67),
                radius: 20,
                trigger: vect(146.688, 12.871, 272.18),
                walls: [
                    {
                        location: vect(154.181, 4.298, 236.817)
                    }
                ]
            },{
                //#section 4 - fall down building in spawn
                holdTime: 20,
                spawn: vect(157.114, 12.871, 256.487),
                radius: 15,
                trigger: vect(62.132, 9.21, 309.589),
                tp: {
                    start: vect(146.278, 12.871, 273.901),
                    dest: vect(87.876, 19.998, 314.105),
                },
                walls: [
                    {
                        location: vect(80.529, 21, 321.752)
                    },{
                        location: vect(58.479, 14, 315.438)
                    },{
                        location: vect(68.252, 10, 321.405)
                    },{
                        location: vect(73.934, 14, 309.11)
                    }
                ]
            },{
                //#section 5 - before cars
                holdTime: 15,
                spawn: vect(81.267, 8.348, 305.765),
                radius: 25,
                trigger: vect(128.289, 5.349, 232.291),
                tp: {
                    start: vect(62.114, 9.21, 309.601),
                    dest: vect(153.019, 5.453, 281.754)
                },
                walls: [
                    {
                        location: vect(144.727, 5.348, 216.623)
                    },{
                        location: vect(112.532, 5.348, 248.279)
                    },{
                        location: vect(124.038, 4.408, 228.053)
                    },{
                        location: vect(122.864, 5.352, 246.109)
                    },{
                        location: vect(142.109, 5.352, 226.935)
                    }
                ]
            },{
                //#section 6 - cars
                holdTime: 15,
                spawn: vect(139.865, 3.553, 243.895),
                radius: 20,
                trigger: vect(16.617, -8.5, 120.524),
                tp: {
                    start: vect(113.736, 2.148, 217.728),
                    dest: vect(112, 2.148, 216),
                },
                walls: []
            },{
                //#section 7 - end
                holdTime: 0,
                spawn: vect(37.6, -5.314, 141.744),
                radius: 20,
                trigger: vect(16.617, -8.5, 120.524),
                walls: []
            }
        ]
    })


@Rule "oasis city center death plane modif 1"
@Event global
if getCurrentMap() == Map.OASIS_CITY_CENTER and currentSection == 3:
    deathplaneY = 3


@Rule "oasis city center death plane modif 2"
@Event global
if getCurrentMap() == Map.OASIS_CITY_CENTER and currentSection == 4:
    deathplaneY = 1.5
    wait(0.25)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(73.298, -96.5, 318.105), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "oasis city center death plane modif 3"
@Event global
if getCurrentMap() == Map.OASIS_CITY_CENTER and (currentSection < 3 or currentSection > 5):
    deathplaneY = -8.9
