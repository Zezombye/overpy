#!mainFile "../zombieescape.opy"

@Rule "dorado part 1&3"
@Event global
if getCurrentMap() == Map.DORADO and (level == 0 or level == 2) and roundStatus == IS_ASSEMBLING_HEROES:
    wait(3)
    generateMapData({
        deathplaneY: -3,
        sections: [
            {
                //#section 0 - attack spawn
                holdTime: 15,
                spawn: vect(-24.091, 0.948, -13.063),
                radius: 15,
                trigger: vect(-6.798, -0.636, 22.805),
                walls: []
            },{
                //#section 1 - tunnel
                holdTime: 15,
                spawn: vect(-17.663, 1.363, 15.329),
                radius: 13,
                trigger: vect(25.913, 1.363, -22.195),
                tp: {
                    start: vect(-4.722, -0.637, 23.487),
                    dest: vect(-3.178, -0.632, 23.306),
                },
                walls: [
                    {
                        location: vect(12.41, -0.632, 23.647),
                    },{
                        location: vect(13.797, 1.556, 5.716),
                    },{
                        location: vect(14.091, 2.364, -4.894),
                    },{
                        location: vect(20.744, 6, -10.905),
                    },{
                        location: vect(25.865, 1.363, -28.006),
                    }
                ]
            },{
                //#section 2 - stairs
                holdTime: 20,
                spawn: vect(17.61, 0.3, -13.06),
                radius: 15,
                trigger: vect(32.164, 9.352, -48.708),
                walls: [
                    {
                        location: vect(32.705, 11.352, -40.458)
                    },{
                        location: vect(13.915, 1.069, -12.951)
                    },{
                        location: vect(31.124, 5.269, -19.999)
                    },{
                        location: vect(21.23, 5.422, -19.641)
                    }
                ]
            },{
                //#section 3 - other stairs
                holdTime: 25,
                spawn: vect(26.117, 4, -41.122),
                radius: 14,
                trigger: vect(55.11, 7, 11),
                walls: [
                    {
                        location: vect(55, 7, 5.75),
                    },{
                        location: vect(26.178, 5.363, -31.329),
                    },{
                        location: vect(25.042, 2.076, 2.763),
                    },{
                        location: vect(29.07, 2.369, 4.184),
                    },{
                        location: vect(38.879, 11.016, -31.907),
                        carryToNextSection: true,
                    },{
                        location: vect(35.266, 5.242, -17.739),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 4 - before fountain
                holdTime: 20,
                spawn: vect(45.758, 3.349, 1.928),
                radius: 23,
                trigger: vect(68.383, 9.094, -44.804),
                walls: [
                    {
                        location: vect(74.821, 10.126, -48.785),
                    },{
                        location: vect(46.324, 8.364, -9.905),
                        carryToNextSection: true,
                    },{
                        location: vect(70.192, 8.333, -23.901),
                        carryToNextSection: true,
                    },{
                        location: vect(65.059, 7.601, -18.487),
                        carryToNextSection: true,
                    },{
                        location: vect(62.994, 8.135, -11.591),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 5 - 1st point
                holdTime: 20,
                spawn: vect(53.212, 8.349, -30.774),
                radius: 15,
                trigger: vect(72.108, 9.351, 4.322),
                tp: {
                    start: vect(82.56, 10.114, -51.925),
                    dest: vect(67.771, 12.363, -34.732),
                },
                walls: [
                    {
                        location: vect(73.903, 12.363, -38.837)
                    }
                ]
            },{
                //#section 6 - end
                holdTime: 0,
                spawn: vect(73.655, 8.307, -11.372),
                radius: 15,
                trigger: vect(89.482, 8.086, -0.043),
                tp: {
                    start: vect(73.133, 9.351, 4.783),
                    dest: vect(74.389, 9.351, 5.621)
                },
                walls: []
            }
        ]
    })


@Rule "dorado part 2&4"
@Event global
if getCurrentMap() == Map.DORADO and (level == 1 or level == 3) and roundStatus == IS_ASSEMBLING_HEROES:
    wait(3)
    generateMapData({
        deathplaneY: 6,
        bossFight: {
            bossSpawn: vect(136.06, 12.398, 27.534),
            bossFightHero: "Hero.REINHARDT",
            zombieDeathplane: 17.7,
            type: "BOSS_FIGHT_DORADO",
            arena: {
                bottomLeft: vect(117.42, 0, 11.63),
                bottomRight: vect(112.6, 0, 32.42),
                topLeft: vect(142.06, 0, 18.38),
                leftRightCross: [500, -35],
                bottomTopCross: [3010, 2500],
                floor: 10,
                ceiling: 24
            }
        },
        sections: [
            {
                //#section 0 - beginning
                holdTime: 15,
                spawn: vect(77.9, 9, 8),
                radius: 15,
                trigger: vect(100, 10, -19.86),
                walls: [
                    {
                        location: vect(85.80, 13.12, 16)
                    },{
                        location: vect(103.29, 11, -4.42)
                    },{
                        location: vect(106.08, 9, -11.17)
                    },{
                        location: vect(108.12, 9, -15.49)
                    },{
                        location: vect(104.4, 11, -25.5)
                    }
                ]
            },{
                //#section 1 - to the bank
                holdTime: 15,
                spawn: vect(96, 10, -7),
                radius: 10,
                trigger: vect(143.10, 12, -17),
                walls: [
                    {
                        location: vect(131.44, 10, 0.32)
                    },{
                        location: vect(143.46, 10.63, -4.17)
                    },{
                        location: vect(143.71, 10, -8.61)
                    }
                ]
            },{
                //#section 2 - on top
                holdTime: 20,
                spawn: vect(127.49, 9, -22.70),
                radius: 15,
                trigger: vect(103.10, 19, 8.73),
                tp: {
                    start: vect(138.37, 12, 14.86),
                    dest: vect(106.49, 19, -8.23),
                },
                walls: [
                    {
                        location: vect(101.22, 14, 11.10)
                    },{
                        location: vect(105, 14, 6.34)
                    },{
                        location: vect(95.34, 13, 23.64)
                    },{
                        location: vect(90.79, 21, 16.5),
                        carryToNextSection: true,
                    }
                ]
            },{
                //#section 3 - before boss fight
                holdTime: 15,
                spawn: vect(110.58, 19, -0.74),
                radius: 13,
                trigger: vect(99.42, 21, 29.52),
                walls: [
                    {
                        location: vect(108.67, 19, 33.98)
                    },{
                        location: vect(103.24, 15, 25.02)
                    },{
                        location: vect(107.68, 15, 27.63)
                    },{
                        location: vect(101.6, 13, 41.84)
                    },{
                        location: vect(87.23, 13, 14.5)
                    }
                ]
            },{
                //#section 4 - boss fight
                holdTime: -1,
                spawn: vect(89.69, 21, 21.70),
                radius: 15,
                trigger: vect(128.51, 19, 39.25),
                walls: []
            },{
                //#section 5 - 3rd point start
                holdTime: 15,
                spawn: vect(120.89, 11, 22.91),
                radius: 15,
                trigger: vect(160, 20, 62),
                tp: {
                    start: vect(137.99, 12, 27.97),
                    dest: vect(140.59, 11, 28.81),
                },
                walls: [
                    {
                        location: vect(170.58, 14, 55.5)
                    },{
                        location: vect(169.58, 14, 59.35)
                    },{
                        location: vect(168.06, 14, 64.48)
                    }
                ]
            },{
                //#section 6 - 3rd point end
                holdTime: 15,
                spawn: vect(150.11, 15, 58.27),
                radius: 15,
                trigger: vect(221.53, 17, 42.85),
                tp: {
                    start: vect(168.20, 19, 64.3),
                    dest: vect(193.94, 16, 43.45),
                },
                walls: [
                    {
                        location: vect(227.78, 15, 44.59),
                    }
                ]
            },{
                //#section 7 - end
                holdTime: 0,
                spawn: vect(213.68, 16, 32.31),
                radius: 10,
                trigger: vect(233.13, 17, 46),
                walls: []
            }
        ]
    })

