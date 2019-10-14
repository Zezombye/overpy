
@Rule "oasis city center"
@Event global
if mapId == 186:
    walls = []
    X = 1
    walls.append(vect(138.166, 2, 209.031))
    walls.append(vect(173.918, 5.451, 238.435))
    walls.append(vect(153.992, 4.105, 211.989))
    walls.append(vect(170.979, 5.348, 232.41))
    walls.append(vect(169.23, 4.23, 221.512))
    X = 2
    walls.append(vect(146.914, 5.353, 269.272))
    walls.append(vect(165.43, 5.353, 251.3))
    walls.append(vect(174.073, 5.453, 244.755))
    walls.append(vect(152.772, 4.353, 256.83))
    X = 3
    walls.append(vect(152.202, 5.453, 277.696))
    walls.append(vect(169.966, 5.352, 239.374))
    walls.append(vect(154.181, 4.298, 236.817))
    X = 4
    walls.append(vect(80.529, 21, 321.752))
    walls.append(vect(58.479, 14, 315.438))
    walls.append(vect(68.252, 10, 321.405))
    walls.append(vect(73.934, 14, 309.11))
    X = 5
    walls.append(vect(144.727, 5.348, 216.623))
    walls.append(vect(112.532, 5.348, 248.279))
    walls.append(vect(124.038, 4.408, 228.053))
    walls.append(vect(122.864, 5.352, 246.109))
    walls.append(vect(142.109, 5.352, 226.935))
    walls.append(vect(137.603, 2, 210.548))
    sectionData = []
    sectionData.append(vect(0, 0, 15))
    sectionData.append(vect(0, 5, 20))
    sectionData.append(vect(4, 7, 15))
    sectionData.append(vect(9, 3, 25))
    sectionData.append(vect(12, 4, 20))
    sectionData.append(vect(16, 5, 15))
    sectionData.append(vect(0, 0, 15))
    sectionData.append(vect(0, 0, 0))
    lateTps = []
    lateTps.append(vect(220.224, 2.351, 167.747))
    lateTps.append(vect(211.228, 2.351, 181.767))
    lateTps.append(vect(194.838, 2.995, 221.516))
    lateTps.append(vect(153.317, 5.353, 228.67))
    lateTps.append(vect(157.114, 12.871, 256.487))
    lateTps.append(vect(81.267, 8.348, 305.765))
    lateTps.append(vect(139.865, 3.553, 243.895))
    lateTps.append(vect(37.6, -5.314, 141.744))
    sectionRadiuses = []
    sectionRadiuses.append(15)
    sectionRadiuses.append(15)
    sectionRadiuses.append(22)
    sectionRadiuses.append(20)
    sectionRadiuses.append(15)
    sectionRadiuses.append(25)
    sectionRadiuses.append(20)
    sectionRadiuses.append(20)
    triggers = []
    triggers.append(vect(203.838, 2.351, 193.103))
    triggers.append(vect(187.465, 3.197, 228.936))
    triggers.append(vect(164.01, 5.352, 246.529))
    triggers.append(vect(146.688, 12.871, 272.18))
    triggers.append(vect(62.132, 9.21, 309.589))
    triggers.append(vect(128.289, 5.349, 232.291))
    triggers.append(vect(16.617, -8.5, 120.524))
    triggers.append(vect(16.617, -8.5, 120.524))
    tpStarts = []
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(202.897, 2.351, 194.546))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(146.278, 12.871, 273.901))
    tpStarts.append(vect(62.114, 9.21, 309.601))
    tpStarts.append(vect(113.736, 2.148, 217.728))
    tpStarts.append(vect(0, -30, 0))
    tpDests = []
    tpDests.append(vect(201.216, 2.354, 197.171))
    tpDests.append(vect(202.001, 2.349, 195.913))
    tpDests.append(vect(5.125, 12.613, -84.363))
    tpDests.append(vect(28.763, 9.349, -86.46))
    tpDests.append(vect(87.876, 19.998, 314.105))
    tpDests.append(vect(153.019, 5.453, 281.754))
    tpDests.append(vect(112, 2.148, 216))
    tpDests.append(vect(112, 2.148, 216))
    deathplaneY = -8.9


@Rule "oasis city center death plane modif 1"
@Event global
if mapId == 186 and currentSection == 3:
    deathplaneY = 3


@Rule "oasis city center death plane modif 2"
@Event global
if mapId == 186 and currentSection == 4:
    deathplaneY = 1.5
    wait(0.25)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(73.298, -96.5, 318.105), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "oasis city center death plane modif 3"
@Event global
if mapId == 186 and (currentSection < 3 or currentSection > 5):
    deathplaneY = -8.9
