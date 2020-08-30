
rule "cs:s zombie escape - made by /u/zezombye - discord in description":
	@Event global
    F = ceil(nearestWalkablePosition(vect(100, 100, 100)).x)


rule "kings row":
	@Event global
	@Condition F == 17
    S = []
    S.append(vect(0, 6, 15))
    S.append(vect(1, 6, 20))
    S.append(vect(7, 5, 20))
    S.append(vect(12, 6, 20))
    S.append(vect(18, 5, 15))
    S.append(vect(23, 2, 20))
    S.append(vect(25, 0, 10))
    L = []
    L.append(vect(62.73, 5.86, -55.22))
    L.append(vect(32.71, 7.46, -31.96))
    L.append(vect(-10.513, 0.937, 41.313))
    L.append(vect(24.319, 5.35, -4.521))
    L.append(vect(-25.564, 1.336, -34.058))
    L.append(vect(-92.891, 2.859, -28.7))
    L.append(vect(-156.65, 1.479, 48.01))
    H = vect(21.27, 0.58, -48.48)
    D = -15
    M = []
    M.append(21)
    M.append(16)
    M.append(17)
    M.append(20)
    M.append(25)
    M.append(35)
    M.append(10)
    T = []
    T.append(vect(30.029, 7.399, -15.74))
    T.append(vect(-17.2, 0.55, 42.439))
    T.append(vect(9.729, 9.35, -8.53))
    T.append(vect(-22.48, 2.35, -16.36))
    T.append(vect(-95.54, -1.141, -46.36))
    T.append(vect(-168.86, 1.16, 35.54))
    T.append(vect(-178.84, 1.54, 37.25))
    W = []
    W.append(vect(30.77, 5.96, -8))
    X = 1
    W.append(vect(27.6, 5.859, -39.78))
    W.append(vect(31.81, 0.24, -63.221))
    W.append(vect(25, 5.96, -10.971))
    W.append(vect(25.359, 5.859, -51.5))
    W.append(vect(24.88, 5.96, -16.25))
    W.append(vect(19.22, 4, -6.98))
    X = 2
    W.append(vect(10.5, 7.35, -16.181))
    W.append(vect(-8.021, 1.24, 3.88))
    W.append(vect(1.109, 1.42, 4.25))
    W.append(vect(-1.59, 1.24, -12.7))
    W.append(vect(4.67, 7, -13.62))
    X = 3
    W.append(vect(-11.931, 1.41, -15.03))
    W.append(vect(-2.94, 1.41, -38.69))
    W.append(vect(-19.63, 2.35, -54.021))
    W.append(vect(-15.25, 1.229, -27.73))
    W.append(vect(-15.471, 1.22, -31.96))
    W.append(vect(-17.3, 1.22, -37))
    X = 4
    W.append(vect(-62.45, 6.3, -17.04))
    W.append(vect(-66.01, 6.37, -12.891))
    W.append(vect(-52.851, 1.2, -36.07))
    W.append(vect(-55.46, 0.95, -32.54))
    W.append(vect(-72.33, 1.16, -12.42))
    X = 5
    W.append(vect(-170.521, 1.479, 39.27))
    W.append(vect(-171.641, 1.479, 32.51))
    B = []
    B.append(vect(0, -30, 0))
    B.append(vect(42.16, 0.67, 31.96))
    B.append(vect(-20.25, 1.26, 27.649))
    B.append(vect(0, -30, 0))
    B.append(vect(-19.271, 2.35, -16.34))
    B.append(vect(-97.971, -1.141, -47.771))
    B.append(vect(0, -30, 0))
    C = []
    C.append(vect(62.729, 5.859, -55.221))
    C.append(vect(3.63, 3.55, 52.29))
    C.append(vect(7.409, 1.488, 13.761))
    C.append(vect(11.27, 7.35, -2.21))
    C.append(vect(-29.23, 10.35, -12.99))
    C.append(vect(-102.94, 2.24, -8.07))
    C.append(vect(-102.94, 2.24, -8.07))


rule "blizz world":
	@Event global
	@Condition F == 54
    W = []
    X = 1
    W.append(vect(3, 1.25, 24.29))
    W.append(vect(16.91, -2.65, 25.75))
    X = 2
    W.append(vect(-9.13, 3.15, 64.19))
    W.append(vect(-5.1, 2.47, 59.9))
    X = 3
    W.append(vect(-1.24, 1.86, 55.56))
    W.append(vect(5.64, 1.77, 55.98))
    W.append(vect(8.03, 1.44, 52.01))
    W.append(vect(16.46, 4.44, 83))
    W.append(vect(16.27, 0.63, 88.9))
    W.append(vect(16.38, 0.38, 95.98))
    X = 4
    W.append(vect(-69.17, 7.93, 103.97))
    W.append(vect(-53.75, 1.14, 126.34))
    X = 5
    W.append(vect(-59.73, 2.16, 120.33))
    W.append(vect(-63.11, 2.17, 115.72))
    X = 6
    W.append(vect(-115.74, 0.27, 95.59))
    W.append(vect(-135.51, 2.1, 118.18))
    W.append(vect(-125.93, 0.95, 118.13))
    W.append(vect(-120.98, 1.1, 119.23))
    W.append(vect(-145.59, 2.15, 115.9))
    W.append(vect(-147.46, 2.23, 90.87))
    S = []
    S.append(vect(0, 0, 15))
    S.append(vect(0, 2, 20))
    S.append(vect(2, 5, 15))
    S.append(vect(4, 6, 15))
    S.append(vect(10, 4, 25))
    S.append(vect(12, 6, 20))
    S.append(vect(14, 6, 15))
    S.append(vect(0, 0, 0))
    L = []
    L.append(vect(2.97, -4.65, -85.64))
    L.append(vect(-12.371, -4.201, -57.627))
    L.append(vect(-10.511, -2.848, -0.823))
    L.append(vect(-25.075, 5.251, 39.109))
    L.append(vect(35.927, 3.303, 78.218))
    L.append(vect(-50.66, 5.87, 88.57))
    L.append(vect(-115.069, 2.995, 156.563))
    L.append(vect(-123.48, 1.2, 110.01))
    M = []
    M.append(21)
    M.append(16)
    M.append(17)
    M.append(20)
    M.append(15)
    M.append(15)
    M.append(20)
    M.append(20)
    T = []
    T.append(vect(-12.49, -2.65, -34.07))
    T.append(vect(2.73, 1.25, 16.76))
    T.append(vect(-8.83, 7.42, 51.64))
    T.append(vect(22.19, 1.38, 97.41))
    T.append(vect(-55.68, 5.87, 98.16))
    T.append(vect(-109.04, 8, 131.87))
    T.append(vect(-145.55, 2.1, 103.96))
    T.append(vect(-145.55, 2.1, 103.96))
    B = []
    B.append(vect(0, -30, 0))
    B.append(vect(-12.51, -2.65, -33.5))
    B.append(vect(0, -30, 0))
    B.append(vect(0, -30, 0))
    B.append(vect(22.18, 1.52, 96.16))
    B.append(vect(-78.4, 1.95, 129.36))
    B.append(vect(-113.26, 6.1, 130.81))
    B.append(vect(0, -30, 0))
    C = []
    C.append(vect(2.97, -4.65, -85.64))
    C.append(vect(-12.48, -2.72, -32.04))
    C.append(vect(5.41, 1.42, 11.439))
    C.append(vect(11.27, 7.35, -2.21))
    C.append(vect(-17.94, 3.35, 65.14))
    C.append(vect(-85.12, 0.1, 108.35))
    C.append(vect(-116.57, 1.2, 112.06))
    C.append(vect(-116.57, 1.2, 112.06))
    D = -6.1


rule "eichenwalde":
	@Event global
	@Condition F == 124
    W = []
    W.append(vect(8.603, 5.397, -34.937))
    W.append(vect(-0.034, 4.28, -25.379))
    W.append(vect(-1.348, 3.689, -27.841))
    W.append(vect(-1.492, 1.359, -11.064))
    W.append(vect(-1.939, 1.356, -6.578))
    X = 1
    W.append(vect(38.464, 10.852, -51.943))
    W.append(vect(13, 5.554, -39.5))
    W.append(vect(8.708, 6.434, -45.911))
    X = 2
    W.append(vect(7.928, 6.38, -52.23))
    W.append(vect(22, 6.398, -58.962))
    W.append(vect(27.209, 6.395, -59.248))
    X = 3
    W.append(vect(70.735, 8, -78.1))
    W.append(vect(67.838, 8, -89.479))
    W.append(vect(72.732, 8, -85.123))
    W.append(vect(65.018, 18.071, -81.605))
    W.append(vect(51.731, 8.021, -66.974))
    W.append(vect(60.254, 12.454, -94.021))
    X = 4
    W.append(vect(104.171, 14.071, -53.97))
    W.append(vect(100.794, 12.071, -29.289))
    X = 5
    W.append(vect(98.65, 12.071, -37.693))
    W.append(vect(95.719, 12.071, -44.037))
    W.append(vect(115.603, 10.072, -40.858))
    W.append(vect(115.165, 10.073, -48.097))
    W.append(vect(111.677, 12.09, -7.81))
    W.append(vect(142.352, 12.09, -16.331))
    X = 6
    S = []
    S.append(vect(0, 5, 15))
    S.append(vect(5, 6, 15))
    S.append(vect(8, 3, 25))
    S.append(vect(11, 6, 15))
    S.append(vect(17, 6, 20))
    S.append(vect(19, 6, 20))
    S.append(vect(0, 0, 0))
    L = []
    L.append(vect(-11.842, 1.351, -9.35))
    L.append(vect(-7.643, 3.377, -28.96))
    L.append(vect(17.593, 6.142, -51.242))
    L.append(vect(10.165, 12.363, -96.497))
    L.append(vect(56.275, 6.161, -98))
    L.append(vect(107.763, 12.071, -32.7))
    L.append(vect(128.931, 15.071, -6.823))
    M = []
    M.append(15)
    M.append(22)
    M.append(11)
    M.append(20)
    M.append(15)
    M.append(11)
    M.append(20)
    T = []
    T.append(vect(-4.208, 3.352, -36.936))
    T.append(vect(31.75, 8.819, -49.356))
    T.append(vect(17.581, 12.364, -88.729))
    T.append(vect(67.373, 6.071, -83.719))
    T.append(vect(105.776, 14.071, -46.755))
    T.append(vect(126.503, 17.516, -15.358))
    T.append(vect(111.545, 16.071, -33.741))
    B = []
    B.append(vect(0, -30, 0))
    B.append(vect(0, -30, 0))
    B.append(vect(21, 11.208, -99))
    B.append(vect(26.932, 10.006, -87.287))
    B.append(vect(67.503, 6.071, -83.707))
    B.append(vect(0, -30, 0))
    B.append(vect(125.858, 16.083, -19.069))
    C = []
    C.append(vect(-12.112, 2.165, -7.337))
    C.append(vect(-12.48, -2.72, -32.04))
    C.append(vect(5.125, 12.613, -84.363))
    C.append(vect(28.763, 9.349, -86.46))
    C.append(vect(73.259, 14.071, -50.833))
    C.append(vect(-85.12, 0.1, 108.35))
    C.append(vect(113.351, 16.071, -27.425))
    D = -2.05


rule "oasis city center":
	@Event global
	@Condition F == 186
    W = []
    X = 1
    W.append(vect(138.166, 2, 209.031))
    W.append(vect(173.918, 5.451, 238.435))
    W.append(vect(153.992, 4.105, 211.989))
    W.append(vect(170.979, 5.348, 232.41))
    W.append(vect(169.23, 4.23, 221.512))
    X = 2
    W.append(vect(146.914, 5.353, 269.272))
    W.append(vect(165.43, 5.353, 251.3))
    W.append(vect(174.073, 5.453, 244.755))
    W.append(vect(152.772, 4.353, 256.83))
    X = 3
    W.append(vect(152.202, 5.453, 277.696))
    W.append(vect(169.966, 5.352, 239.374))
    W.append(vect(154.181, 4.298, 236.817))
    X = 4
    W.append(vect(80.529, 21, 321.752))
    W.append(vect(58.479, 14, 315.438))
    W.append(vect(68.252, 10, 321.405))
    W.append(vect(73.934, 14, 309.11))
    X = 5
    W.append(vect(144.727, 5.348, 216.623))
    W.append(vect(112.532, 5.348, 248.279))
    W.append(vect(124.038, 4.408, 228.053))
    W.append(vect(122.864, 5.352, 246.109))
    W.append(vect(142.109, 5.352, 226.935))
    W.append(vect(137.603, 2, 210.548))
    S = []
    S.append(vect(0, 0, 15))
    S.append(vect(0, 5, 20))
    S.append(vect(4, 7, 15))
    S.append(vect(9, 3, 25))
    S.append(vect(12, 4, 20))
    S.append(vect(16, 5, 15))
    S.append(vect(0, 0, 15))
    S.append(vect(0, 0, 0))
    L = []
    L.append(vect(220.224, 2.351, 167.747))
    L.append(vect(211.228, 2.351, 181.767))
    L.append(vect(194.838, 2.995, 221.516))
    L.append(vect(153.317, 5.353, 228.67))
    L.append(vect(157.114, 12.871, 256.487))
    L.append(vect(81.267, 8.348, 305.765))
    L.append(vect(139.865, 3.553, 243.895))
    L.append(vect(37.6, -5.314, 141.744))
    M = []
    M.append(15)
    M.append(15)
    M.append(22)
    M.append(20)
    M.append(15)
    M.append(25)
    M.append(20)
    M.append(20)
    T = []
    T.append(vect(203.838, 2.351, 193.103))
    T.append(vect(187.465, 3.197, 228.936))
    T.append(vect(164.01, 5.352, 246.529))
    T.append(vect(146.688, 12.871, 272.18))
    T.append(vect(62.132, 9.21, 309.589))
    T.append(vect(128.289, 5.349, 232.291))
    T.append(vect(16.617, -8.5, 120.524))
    T.append(vect(16.617, -8.5, 120.524))
    B = []
    B.append(vect(0, -30, 0))
    B.append(vect(202.897, 2.351, 194.546))
    B.append(vect(0, -30, 0))
    B.append(vect(0, -30, 0))
    B.append(vect(146.278, 12.871, 273.901))
    B.append(vect(62.114, 9.21, 309.601))
    B.append(vect(113.736, 2.148, 217.728))
    B.append(vect(0, -30, 0))
    C = []
    C.append(vect(201.216, 2.354, 197.171))
    C.append(vect(202.001, 2.349, 195.913))
    C.append(vect(5.125, 12.613, -84.363))
    C.append(vect(28.763, 9.349, -86.46))
    C.append(vect(87.876, 19.998, 314.105))
    C.append(vect(153.019, 5.453, 281.754))
    C.append(vect(112, 2.148, 216))
    C.append(vect(112, 2.148, 216))
    D = -8.9


rule "list walls (W)":
	@Event global
	@Condition false
    W = []
    X = 1
    W.append(vect(138.166, 2, 209.031))
    W.append(vect(173.918, 5.451, 238.435))
    W.append(vect(153.992, 4.105, 211.989))
    W.append(vect(170.979, 5.348, 232.41))
    W.append(vect(169.23, 4.23, 221.512))
    X = 2
    W.append(vect(146.914, 5.353, 269.272))
    W.append(vect(165.43, 5.353, 251.3))
    W.append(vect(174.073, 5.453, 244.755))
    W.append(vect(152.772, 4.353, 256.83))
    X = 3
    W.append(vect(152.202, 5.453, 277.696))
    W.append(vect(169.966, 5.352, 239.374))
    W.append(vect(154.181, 4.298, 236.817))
    X = 4
    W.append(vect(58.479, 14, 315.438))
    W.append(vect(68.252, 16, 321.405))
    W.append(vect(73.934, 14, 309.11))
    X = 5
    W.append(vect(144.727, 5.348, 216.623))
    W.append(vect(112.532, 5.348, 248.279))
    W.append(vect(124.038, 4.408, 228.053))
    W.append(vect(122.864, 5.352, 246.109))
    W.append(vect(142.109, 5.352, 226.935))
    W.append(vect(137.603, 2, 210.548))
    X = 6


rule "list of sections S(wall index start; wall index len; time)":
	@Event global
	@Condition false
    S = []
    S.append(vect(0, 0, 15))
    S.append(vect(0, 5, 20))
    S.append(vect(4, 7, 15))
    S.append(vect(9, 3, 25))
    S.append(vect(12, 3, 20))
    S.append(vect(15, 5, 15))
    S.append(vect(0, 0, 10))
    S.append(vect(0, 0, 0))


rule "tps when 5 seconds left":
	@Event global
	@Condition false
    L = []
    L.append(vect(220.224, 2.351, 167.747))
    L.append(vect(211.228, 2.351, 181.767))
    L.append(vect(194.838, 2.995, 221.516))
    L.append(vect(153.317, 5.353, 228.67))
    L.append(vect(157.114, 12.871, 256.487))
    L.append(vect(81.267, 8.348, 305.765))
    L.append(vect(139.865, 3.553, 243.895))
    L.append(vect(37.6, -5.314, 141.744))


rule "list m":
	@Event global
	@Condition false
    M = []
    M.append(15)
    M.append(15)
    M.append(22)
    M.append(20)
    M.append(15)
    M.append(25)
    M.append(20)
    M.append(20)


rule "list triggers (t)":
	@Event global
	@Condition false
    T = []
    T.append(vect(203.838, 2.351, 193.103))
    T.append(vect(187.465, 3.197, 228.936))
    T.append(vect(164.01, 5.352, 246.529))
    T.append(vect(146.688, 12.871, 272.18))
    T.append(vect(62.132, 9.21, 309.589))
    T.append(vect(128.289, 5.349, 232.291))
    T.append(vect(3.1, -9, 107.4))
    T.append(vect(3.1, -9, 107.4))


rule "list tp starts (B)":
	@Event global
	@Condition false
    B = []
    B.append(vect(0, -30, 0))
    B.append(vect(202.897, 2.351, 194.546))
    B.append(vect(0, -30, 0))
    B.append(vect(0, -30, 0))
    B.append(vect(146.278, 12.871, 273.901))
    B.append(vect(62.114, 9.21, 309.601))
    B.append(vect(113.736, 2.148, 217.728))
    B.append(vect(0, -30, 0))


rule "list tp dest (C)":
	@Event global
	@Condition false
    C = []
    C.append(vect(201.216, 2.354, 197.171))
    C.append(vect(202.001, 2.349, 195.913))
    C.append(vect(5.125, 12.613, -84.363))
    C.append(vect(28.763, 9.349, -86.46))
    C.append(vect(88.041, 24.348, 313.927))
    C.append(vect(153.019, 5.453, 281.754))
    C.append(vect(112, 2.148, 216))
    C.append(vect(112, 2.148, 216))


rule "initial zombie hero":
	@Event global
    Z = Hero.TORBJORN
    N = 0
    hudHeader(getAllPlayers(), "Waiting 4 Players 2 Start ...", HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "list kb for each hero (k)":
	@Event global
    K = []
    K.append(30)
    K.append(15)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(300)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(50)
    K.append(0)
    K.append(0)
    K.append(15)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(10)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(0)
    K.append(25)
    K.append(20)


rule "init round":
	@Event global
	@Condition R <= 1 and getMatchTime() != 0
    P = getMatchTime()
    if R != 0:
        goto lbl_0
    P = 1200
    lbl_0:
    G = 0
    I = 1
    N = 0
    O = 0
    Q = 0
    E = 0
    getAllPlayers().F = 0
    getAllPlayers().Z = 0
    if false:
        goto lbl_1
    destroyAllHudTexts()
    lbl_1:
    getAllPlayers().resurrect()
    wait(0.25)
    goToAssembleHeroes()
    setMatchTime(8.9)
    getAllPlayers().resetHeroAvailability()
    getAllPlayers().stopForcingCurrentHero()
    disableGamemodeCompletion()
    wait(9)
    I = 0
    R = 3
    setMatchTime(P)
    if getMatchTime() > 0:
        goto lbl_2
    J = 4
    lbl_2:
    G = 0
    N = 0
    O = 0
    Q = 0
    E = 0


rule "init section (slice + draw tp)":
	@Event global
	@Condition I == 0
    A = W.slice(S[N].x, S[N].y)
    createEffect(getAllPlayers(), Effect.ORB, Color.GREEN, B[N], 0.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "(debug) section spheres draw":
	@Event global
	@Condition I == 0 and false
    createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, T[N], M[N], EffectReeval.VISIBILITY)


rule "trigger draw":
	@Event global
	@Condition I == 0
    destroyAllIcons()
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLUE, T[N], 4, EffectReeval.VISIBILITY)
    createIcon(getAllPlayers(), T[N], Icon.ARROW_DOWN, IconReeval.VISIBILITY_AND_POSITION, Color.BLUE, true)


rule "walls visual effect":
	@Event global
	@Condition I == 0
    do:
        createEffect(getAllPlayers(), Effect.SPHERE, Color.YELLOW, A[I], 4, EffectReeval.VISIBILITY)
        createEffect(getAllPlayers(), Effect.SPHERE, Color.YELLOW, A[I] + vect(0, 4, 0), 4, EffectReeval.VISIBILITY)
        I++
        wait(0.05)
    while I < len(A)
    goto lbl_0
    lbl_0:


rule "walls kb effect":
	@Event eachPlayer
	@Condition true
    do:
        if eventPlayer.getPosition().y < A[eventPlayer.J].y - 4:
            goto lbl_0
        if distance(vect(eventPlayer.getPosition().x, 0, eventPlayer.getPosition().z), vect(A[eventPlayer.J].x, 0, A[eventPlayer.J].z)) > 4.5:
            goto lbl_1
        eventPlayer.applyImpulse(vect(0, 1, 0), 1, Relativity.TO_PLAYER, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(vect(vectorTowards(A[eventPlayer.J], eventPlayer.getPosition()).x, 0, vectorTowards(A[eventPlayer.J], eventPlayer.getPosition()).z), 2.5 + eventPlayer.getHorizontalSpeed() * 1.5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        if true:
            goto lbl_2
        eventPlayer.applyImpulse(eventPlayer.getVelocity() / vect(abs(eventPlayer.getVelocity().x), abs(eventPlayer.getVelocity().y), abs(eventPlayer.getVelocity().z)), -10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        lbl_0:
        lbl_1:
        lbl_2:
        eventPlayer.J++
        if eventPlayer.J < len(A):
            goto lbl_3
        eventPlayer.J = 0
        lbl_3:
        wait()
    while true


rule "(debug) print coords":
	@Event eachPlayer
	@Condition false
    hudHeader(getAllPlayers(), eventPlayer.getHorizontalSpeed(), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), eventPlayer.getPosition(), HudPosition.LEFT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    hudHeader(getAllPlayers(), distance(eventPlayer.getPosition(), L[N + 1]), HudPosition.LEFT, 0, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)


rule "(debug) tp":
	@Event eachPlayer
	@Condition eventPlayer.isHoldingButton(Button.INTERACT) and false
    eventPlayer.teleport(worldVector(vect(0, 0, 5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))


rule "use tp":
	@Event eachPlayer
	@Condition eventPlayer in getPlayersInRadius(B[N] - vect(0, 1, 0), 2, Team.ALL, LosCheck.OFF)
    eventPlayer.teleport(C[N])


rule "trigger":
	@Event global
	@Condition len(getPlayersInRadius(T[N], 5, Team.ALL, LosCheck.OFF)) > 0 and Q == 0
    Q = 1
    if len([player for player in getPlayersInRadius(T[N], 5, Team.ALL, LosCheck.OFF) if player.Z == 1]) != 0:
        goto lbl_0
    if N == len(S) + -1:
        goto lbl_1
    bigMessage(getAllPlayers(), "Defend: {} sec".format(S[N].z))
    wait(S[N].z - 8)
    if R <= 2:
        return
    bigMessage(getAllPlayers(), "Defend: 8 sec")
    Q = 1.5
    wait(7)
    if R <= 2:
        return
    bigMessage(getAllPlayers(), "Defend: 1 sec")
    Q = 2
    wait(1)
    if R <= 2:
        return
    lbl_1:
    Q = 3
    N++
    if N == len(S) + 0:
        goto lbl_2
    bigMessage(getAllPlayers(), "Run!!!")
    lbl_2:
    destroyAllEffects()
    wait(0.25)
    I = 0
    Q = 0
    if N != len(S) + 0:
        goto lbl_3
    E = 2
    return
    lbl_0:
    E = 1
    lbl_3:


rule "first infection":
	@Event global
	@Condition R == 3
    do:
        wait(1)
        bigMessage(getAllPlayers(), "Initial Dead: {} sec".format(10 - O))
        O++
    while O < 10
    if len([player for player in getAllPlayers() if player.hasSpawned()]) <= 10:
        goto lbl_0
    random.shuffle([player for player in getAllPlayers() if player.hasSpawned() and player.L == 0]).slice(0, 2).Z = 1
    lbl_0:
    if len([player for player in getAllPlayers() if player.hasSpawned()]) > 10:
        goto lbl_1
    random.shuffle([player for player in getAllPlayers() if player.hasSpawned() and player.L == 0]).slice(0, 1).Z = 1
    lbl_1:
    [player for player in getAllPlayers() if player.Z == 1].teleport(L[0])
    G = 1
    [player for player in getAllPlayers() if player.Z == 1].L = 1
    [player for player in getAllPlayers() if player.Z == 0].L = 0


rule "tp players at 1 sec left":
	@Event eachPlayer
	@Condition Q == 2 and not eventPlayer in getPlayersInRadius(T[N], M[N], Team.ALL, LosCheck.OFF)
    eventPlayer.teleport(L[N + 1])


rule "deathplane tp":
	@Event eachPlayer
	@Condition eventPlayer.getPosition().y < D and R != 0 and E == 0
    eventPlayer.teleport(L[N])
    eventPlayer.resurrect()


rule "infect players":
	@Event playerTookDamage
	@Condition attacker.Z == 1 and victim.Z == 0 and E == 0 and distance(attacker.getPosition(), victim.getPosition()) <= 5.5
    victim.Z = 1
    attacker.addToScore(1)
    victim.H = victim.getCurrentHero()
    hudHeader(getAllPlayers(), "{} {} -> {} {}".format(heroIcon(attacker.getCurrentHero()), attacker, heroIcon(victim.H), victim), HudPosition.RIGHT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    if len([i for i in [player for player in getAllPlayers() if player.hasSpawned()] if i.Z == 0]) != 0:
        goto lbl_0
    E = 1
    eventPlayer.resurrect()
    lbl_0:


rule "player dies = gets tp'd, +10 pts if zombie kill":
	@Event playerDied
	@Condition E == 0 and R != 0
    victim.resurrect()
    victim.teleport(L[N])
    if victim == attacker:
        goto lbl_0
    if attacker.Z == 1:
        goto lbl_1
    attacker.addToScore(9)
    lbl_0:
    lbl_1:


rule "humans and zombies cant hurt same":
	@Event global
	@Condition isGameInProgress()
    startDamageModification([player for player in getAllPlayers() if player.Z == 0], [player for player in getAllPlayers() if player.Z == 0], 0, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification([player for player in getAllPlayers() if player.Z == 1], [player for player in getAllPlayers() if player.Z == 1], 0, DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)


rule "humans and zombies can hurt each other + kb":
	@Event playerDealtDamage
	@Condition attacker.Z != victim.Z and victim.Z == 1
    if random.randint(1, 4) != 1:
        goto lbl_0
    victim.applyImpulse(vect(0, 1, 0), 1.5, Relativity.TO_PLAYER, Impulse.CANCEL_CONTRARY_MOTION)
    lbl_0:
    victim.applyImpulse(vectorTowards(attacker.getPosition(), victim.getPosition()) / vect(abs(vectorTowards(attacker.getPosition(), victim.getPosition()).x), 0, abs(vectorTowards(attacker.getPosition(), victim.getPosition()).z)), eventDamage * 1.05, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)


rule "tp dest":
	@Event eachPlayer
	@Condition eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isUsingAbility1()
    do:
        eventPlayer.setProjectileSpeed(100)
        wait()
        eventPlayer.B++
    while eventPlayer.B < 105
    eventPlayer.B = 0


rule "zombie behavior":
	@Event eachPlayer
	@Condition eventPlayer.Z == 1
    eventPlayer.C = eventPlayer.getPosition()
    eventPlayer.startForcingHero(Z)
    eventPlayer.teleport(eventPlayer.C)
    eventPlayer.stopAllHoT()
    eventPlayer.setStatusEffect(null, Status.ROOTED, 2)
    bigMessage(eventPlayer, "You Dead")
    wait(1)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    if len([i for i in [player for player in getAllPlayers() if player.hasSpawned()] if i.Z == 0]) != 0:
        goto lbl_0
    E = 1
    lbl_0:


rule "player selected hero":
	@Event eachPlayer
	@Condition eventPlayer.hasSpawned() and R >= 3
    eventPlayer.disallowButton(Button.CROUCH)
    wait(0.1)
    eventPlayer.teleport(L[N])
    if G == 0:
        goto lbl_0
    eventPlayer.Z = 1
    lbl_0:
    eventPlayer.startHoT(null, 9999, 20)
    wait(2)
    eventPlayer.allowButton(Button.CROUCH)


rule "burn = slow":
	@Event eachPlayer
	@Condition eventPlayer.hasStatusEffect(Status.BURNING) and eventPlayer.Z == 1
    eventPlayer.setMoveSpeed(75)
    wait(5)
    eventPlayer.setMoveSpeed(100)


rule "no hax for humans":
	@Event eachPlayer
	@Condition eventPlayer.hasStatusEffect(Status.HACKED) and false
    eventPlayer.setStatusEffect(null, Status.HACKED, 9999)
    wait(0.25)
    eventPlayer.clearStatusEffect(Status.HACKED)


rule "no stun for humans":
	@Event eachPlayer
	@Condition eventPlayer.hasStatusEffect(Status.STUNNED) and eventPlayer.Z == 0
    eventPlayer.clearStatusEffect(Status.STUNNED)


rule "red orb":
	@Event global
	@Condition Q == 1.5
    createEffect(getAllPlayers(), Effect.ORB, Color.RED, L[N + 1], 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "normal zombies: rein":
	@Event global
	@Condition J == 1
    Z = Hero.REINHARDT
    bigMessage(getAllPlayers(), "Level 2: {}".format(Hero.REINHARDT))


rule "hard zombies: winston":
	@Event global
	@Condition J == 2
    Z = Hero.WINSTON
    bigMessage(getAllPlayers(), "Level 3: {}".format(Hero.WINSTON))


rule "expert zombies: brig":
	@Event global
	@Condition J == 3
    Z = Hero.BRIGITTE
    bigMessage(getAllPlayers(), "Final Level: {}".format(Hero.BRIGITTE))


rule "map finished":
	@Event global
	@Condition J == 4
    declarePlayerVictory(sorted(getAllPlayers(), key=lambda player: player.getScore()).last())


rule "zombies win":
	@Event global
	@Condition E == 1
    stopAllDamageModifications()
    bigMessage(getAllPlayers(), "Dead Win")
    wait(5)
    if getMatchTime() > 0:
        goto lbl_0
    J = 4
    lbl_0:
    R = 1


rule "humans win":
	@Event global
	@Condition E == 2
    stopAllDamageModifications()
    bigMessage(getAllPlayers(), "Heroes Win")
    wait(0)
    kill([player for player in getAllPlayers() if player.Z == 1], null)
    [player for player in getAllPlayers() if player.Z == 0].addToScore(100)
    wait(1.5)
    J++
    wait(3.5)
    setMatchTime(1200)
    R = 1
    [player for player in getAllPlayers() if player.Z == 1].teleport(vect(0, -500, 0))


rule "kings row":
	@Event global
	@Condition false
    S = []
    S.append(vect(0, 6, 15))
    S.append(vect(1, 6, 20))
    S.append(vect(7, 5, 20))
    S.append(vect(12, 6, 20))
    S.append(vect(18, 5, 15))
    S.append(vect(23, 2, 20))
    S.append(vect(25, 0, 10))
    L = []
    L.append(vect(62.73, 5.86, -55.22))
    L.append(vect(32.71, 7.46, -31.96))
    L.append(vect(-14.95, 0.35, 43.63))
    L.append(vect(24.319, 5.35, -4.521))
    L.append(vect(-25.471, 1.24, -32))
    L.append(vect(-92.891, 2.859, -28.7))
    L.append(vect(-156.65, 1.479, 48.01))
    H = vect(21.27, 0.58, -48.48)
    D = -15
    M = []
    M.append(21)
    M.append(16)
    M.append(17)
    M.append(20)
    M.append(25)
    M.append(35)
    M.append(10)
    T = []
    T.append(vect(30.029, 7.399, -15.74))
    T.append(vect(-17.2, 0.55, 42.439))
    T.append(vect(9.729, 9.35, -8.53))
    T.append(vect(-22.48, 2.35, -16.36))
    T.append(vect(-95.54, -1.141, -46.36))
    T.append(vect(-168.86, 1.16, 35.54))
    T.append(vect(-178.84, 1.54, 37.25))
    W = []
    W.append(vect(30.77, 5.96, -8))
    X = 1
    W.append(vect(27.6, 5.859, -39.78))
    W.append(vect(31.81, 0.24, -63.221))
    W.append(vect(25, 5.96, -10.971))
    W.append(vect(25.359, 5.859, -51.5))
    W.append(vect(24.88, 5.96, -16.25))
    W.append(vect(19.22, 4, -6.98))
    X = 2
    W.append(vect(10.5, 7.35, -16.181))
    W.append(vect(-8.021, 1.24, 3.88))
    W.append(vect(1.109, 1.42, 4.25))
    W.append(vect(-1.59, 1.24, -12.7))
    W.append(vect(4.67, 7, -13.62))
    X = 3
    W.append(vect(-11.931, 1.41, -15.03))
    W.append(vect(-2.94, 1.41, -38.69))
    W.append(vect(-19.63, 2.35, -54.021))
    W.append(vect(-15.25, 1.229, -27.73))
    W.append(vect(-15.471, 1.22, -31.96))
    W.append(vect(-17.3, 1.22, -37))
    X = 4
    W.append(vect(-62.45, 6.3, -17.04))
    W.append(vect(-66.01, 6.37, -12.891))
    W.append(vect(-52.851, 1.2, -36.07))
    W.append(vect(-55.46, 0.95, -32.54))
    W.append(vect(-72.33, 1.16, -12.42))
    X = 5
    W.append(vect(-170.521, 1.479, 39.27))
    W.append(vect(-171.641, 1.479, 32.51))
    B = []
    B.append(vect(0, -30, 0))
    B.append(vect(42.16, 0.67, 31.96))
    B.append(vect(-20.25, 1.26, 27.649))
    B.append(vect(0, -30, 0))
    B.append(vect(-19.271, 2.35, -16.34))
    B.append(vect(-97.971, -1.141, -47.771))
    B.append(vect(0, -30, 0))
    C = []
    C.append(vect(62.729, 5.859, -55.221))
    C.append(vect(3.63, 3.55, 52.29))
    C.append(vect(5.41, 1.42, 11.439))
    C.append(vect(11.27, 7.35, -2.21))
    C.append(vect(-29.23, 10.35, -12.99))
    C.append(vect(-102.94, 2.24, -8.07))
    C.append(vect(-102.94, 2.24, -8.07))


rule "skirmish rez":
	@Event playerDied
	@Condition getMatchTime() == 0 and R == 0
    wait(4)
    victim.respawn()


rule "oasis city center death plane modif 1":
	@Event global
	@Condition F == 186 and N == 3
    D = 3


rule "oasis city center death plane modif 2":
	@Event global
	@Condition F == 186 and N == 4
    D = 1.5
    wait(0.25)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, vect(73.298, -96.5, 318.105), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "oasis city center death plane modif 3":
	@Event global
	@Condition F == 186 and (N < 3 or N > 5)
    D = -8.9


rule "baptiste no crouch jump":
	@Event eachPlayer
	@Condition eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isCrouching()
    eventPlayer.setStatusEffect(null, Status.HACKED, 0.016)


