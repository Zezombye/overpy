
@Rule "dorado part 1&3"
@Event global
if mapId == 144 and (level == 0 or level == 2):
    K = []
    walls = []
    X = 1
    walls.append(vect(12.41, -0.632, 23.647))
    walls.append(vect(13.797, 1.556, 5.716))
    walls.append(vect(14.091, 2.364, -4.894))
    walls.append(vect(20.744, 6, -10.905))
    walls.append(vect(25.865, 1.363, -28.006))
    X = 2
    walls.append(vect(32.705, 11.352, -40.458))
    walls.append(vect(13.915, 1.069, -12.951))
    walls.append(vect(31.124, 5.269, -19.999))
    walls.append(vect(21.23, 5.422, -19.641))
    X = 3
    walls.append(vect(55.469, 7.243, 11.299))
    walls.append(vect(26.178, 5.363, -31.329))
    walls.append(vect(25.042, 2.076, 2.763))
    walls.append(vect(29.07, 2.369, 4.184))
    X = 4
    walls.append(vect(38.879, 11.016, -31.907))
    walls.append(vect(35.266, 5.242, -17.739))
    walls.append(vect(74.821, 10.126, -48.785))
    X = 5
    walls.append(vect(46.324, 8.364, -9.905))
    walls.append(vect(70.192, 8.333, -23.901))
    walls.append(vect(65.059, 7.601, -18.487))
    walls.append(vect(62.994, 8.135, -11.591))
    walls.append(vect(73.903, 12.363, -38.837))
    sectionData = []
    sectionData.append(vect(0, 0, 15))
    sectionData.append(vect(0, 5, 20))
    sectionData.append(vect(5, 4, 20))
    sectionData.append(vect(9, 6, 25))
    sectionData.append(vect(13, 7, 20))
    sectionData.append(vect(16, 6, 20))
    sectionData.append(vect(0, 0, 0))
    lateTps = []
    lateTps.append(vect(-24.091, 0.948, -13.063))
    lateTps.append(vect(-17.663, 1.363, 15.329))
    lateTps.append(vect(19.562, 0.363, -12.991))
    lateTps.append(vect(26.117, 4, -41.122))
    lateTps.append(vect(45.758, 3.349, 1.928))
    lateTps.append(vect(53.212, 8.349, -30.774))
    lateTps.append(vect(73.655, 8.307, -11.372))
    sectionRadiuses = []
    sectionRadiuses.append(15)
    sectionRadiuses.append(13)
    sectionRadiuses.append(15)
    sectionRadiuses.append(14)
    sectionRadiuses.append(23)
    sectionRadiuses.append(15)
    sectionRadiuses.append(20)
    triggers = []
    triggers.append(vect(-6.798, -0.636, 22.805))
    triggers.append(vect(25.913, 1.363, -22.195))
    triggers.append(vect(32.164, 9.352, -48.708))
    triggers.append(vect(47.77, 3.349, 13.372))
    triggers.append(vect(68.383, 9.094, -44.804))
    triggers.append(vect(72.108, 9.351, 4.322))
    triggers.append(vect(89.482, 8.086, -0.043))
    tpStarts = []
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(-4.722, -0.637, 23.487))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(82.56, 10.114, -51.925))
    tpStarts.append(vect(73.133, 9.351, 4.783))
    tpDests = []
    tpDests.append(vect(201.216, 2.354, 197.171))
    tpDests.append(vect(-3.178, -0.632, 23.306))
    tpDests.append(vect(5.125, 12.613, -84.363))
    tpDests.append(vect(28.763, 9.349, -86.46))
    tpDests.append(vect(88.041, 24.348, 313.927))
    tpDests.append(vect(67.771, 12.363, -34.732))
    tpDests.append(vect(74.389, 9.351, 5.621))
    deathplaneY = -3


@Rule "dorado part 2&4"
@Event global
if mapId == 144 and (level == 1 or level == 3):
    
    K = []
    generateArenaVectors(vect(112.6, 0, 32.42), vect(117.42, 0, 11.63), vect(142.06, 0, 18.38))
    bossSpawn = vect(136.06, 12.398, 27.534)
    bossFightHero = Hero.REINHARDT
    bossFightZombieDeathPlane = 17.7
    arenaLeftRightCrossThreshold = (500-(-35))/2
    arenaBottomTopCrossThreshold = (3010-2500)/2
    arenaLeftRightCrossDiff = arenaLeftRightCrossThreshold+-35
    arenaBottomTopCrossDiff = arenaBottomTopCrossThreshold+2500
    bossFightType = BOSS_FIGHT_DORADO

    walls = []
    tpDests = []
    triggers = []
    sectionData = []
    lateTps = []
    sectionRadiuses = []
    tpStarts = []
    deathplaneY = 6

    #Section 0 - beginning

    walls.append(vect(85.80, 13.12, 16))
    walls.append(vect(103.29, 11, -4.42))
    walls.append(vect(106.08, 9, -11.17))
    walls.append(vect(108.12, 9, -15.49))
    walls.append(vect(104.4, 11, -25.5))

    sectionData.append(vect(0, 5, 15))
    tpDests.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    lateTps.append(vect(77.9, 9, 8))
    sectionRadiuses.append(15)
    triggers.append(vect(100, 10, -19.86))

    #Section 1 - to the bank

    walls.append(vect(131.44, 10, 0.32))
    walls.append(vect(143.46, 10.63, -4.17))
    walls.append(vect(143.71, 10, -8.61))

    sectionData.append(vect(5, 3, 10))
    tpDests.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    lateTps.append(vect(96, 10, -7))
    sectionRadiuses.append(10)
    triggers.append(vect(143.10, 12, -17))

    #Section 2 - on top
    
    walls.append(vect(101.22, 14, 11.10))
    walls.append(vect(105, 14, 6.34))
    walls.append(vect(95.34, 13, 23.64))

    sectionData.append(vect(8, 4, 10))
    tpDests.append(vect(106.49, 19, -8.23))
    tpStarts.append(vect(138.37, 12, 14.86))
    lateTps.append(vect(134.26, 12, -9.31))
    sectionRadiuses.append(15)
    triggers.append(vect(103.10, 19, 8.73))

    #Section 3 - just before boss fight

    #shared with 2
    
    walls.append(vect(99.21, 20, 21.74))

    walls.append(vect(108.67, 19, 33.98))
    walls.append(vect(103.24, 15, 25.02))
    walls.append(vect(107.68, 15, 27.63))
    walls.append(vect(101.6, 13, 41.84))

    sectionData.append(vect(11, 5, 10))
    tpDests.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    lateTps.append(vect(110.58, 19, -0.74))
    sectionRadiuses.append(15)
    triggers.append(vect(101.29, 21, 30.33))

    #Section 4 - Boss Fight
    
    sectionData.append(vect(16, 0, -1))
    tpDests.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    lateTps.append(vect(89.69, 21, 21.70))
    sectionRadiuses.append(15)
    triggers.append(vect(128.51, 19, 39.25))

    #Section 5
    
    walls.append(vect(170.58, 14, 55.5))
    walls.append(vect(169.58, 14, 59.35))
    walls.append(vect(168.06, 14, 64.48))

    sectionData.append(vect(16, 3, 15))
    tpDests.append(vect(140.59, 11, 28.81))
    tpStarts.append(vect(137.99, 12, 27.97))
    lateTps.append(vect(120.89, 11, 22.91))
    sectionRadiuses.append(15)
    triggers.append(vect(160, 20, 62))

    #Section 6

    walls.append(vect(227.78, 15, 44.59))

    sectionData.append(vect(19, 1, 15))
    tpDests.append(vect(193.94, 16, 43.45))
    tpStarts.append(vect(168.20, 19, 64.3))
    lateTps.append(vect(150.11, 15, 58.27))
    sectionRadiuses.append(15)
    triggers.append(vect(221.53, 17, 42.85))

    
    #Section 7 (last)

    sectionData.append(vect(20, 0, 0))
    tpDests.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    lateTps.append(vect(213.68, 16, 32.31))
    sectionRadiuses.append(10)
    triggers.append(vect(233.13, 17, 46))

