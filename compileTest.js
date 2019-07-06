/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

compileTest = `
#Global variables

#!define currentSectionWalls A
#!define tpStarts B
#!define tpDests C
#!define deathplaneY D
#!define roundWinners E
#!define mapId F
#!define hasFirstInfectionPassed G
#!define sectionLoopIndex I
#!define level J
#!define lateTps L
#!define sectionRadiuses M
#!define currentSection N
#!define firstInfectionLoopIndex O
#!define matchTime P
#!define countdownProgress Q
#!define roundProgress R
#!define sectionData S
#!define triggers T
#!define walls W
#!define zombieHero Z


#Player variables

#!define fastFireCountdown B
#!define tempPos C
#!define hasWonRound F
#!define wallLoopIndex J
#!define wasFirstZombieLastRound L
#!define team Z

#!define testMacroFunc(a, b_9owo3,c)     sectionData.append(vect(0, 6, 15))\\
    sectionData.append(vect(a, 6, b_9owo3))\\
    sectionData.append(vect(7, 5, b_9owo3))\\
    sectionData.append(vect(12, 6, b_9owo3))\\
    sectionData.append(vect(18, 5, 15))\\
    sectionData.append(vect(23, 2, b_9owo3))\\
    sectionData.append(vect(25, 0, 10))

@Rule "cs:s zombie escape - made by /u/zezombye - discord in description"
@Event global
mapId = ceil(nearestWalkablePosition(vect(100, 100, 100)).x)


@Rule "kings row"
@Event global
if mapId == 17:
    sectionData \\
	= []
    testMacroFunc(1, 20, 3)
    lateTps = []
    lateTps.append(vect(62.73, 5.86, -55.22))
    lateTps.append(vect(32.71, 7.46, -31.96))
    lateTps.append(vect(-10.513, 0.937, 41.313))
    lateTps.append(vect(24.319, 5.35, -4.521))
    lateTps.append(vect(-25.564, 1.336, -34.058))
    lateTps.append(vect(-92.891, 2.859, -28.7))
    lateTps.append(vect(-156.65, 1.479, 48.01))
    H = vect(21.27, 0.58, -48.48)
    deathplaneY = -15
    sectionRadiuses = []
    sectionRadiuses.append(21)
    sectionRadiuses.append(16)
    sectionRadiuses.append(17)
    sectionRadiuses.append(20)
    sectionRadiuses.append(25)
    sectionRadiuses.append(35)
    sectionRadiuses.append(10)
    triggers = []
    triggers.append(vect(30.029, 7.399, -15.74))
    triggers.append(vect(-17.2, 0.55, 42.439))
    triggers.append(vect(9.729, 9.35, -8.53))
    triggers.append(vect(-22.48, 2.35, -16.36))
    triggers.append(vect(-95.54, -1.141, -46.36))
    triggers.append(vect(-168.86, 1.16, 35.54))
    triggers.append(vect(-178.84, 1.54, 37.25))
    walls = []
    walls.append(vect(30.77, 5.96, -8))
    X = 1
    walls.append(vect(27.6, 5.859, -39.78))
    walls.append(vect(31.81, 0.24, -63.221))
    walls.append(vect(25, 5.96, -10.971))
    walls.append(vect(25.359, 5.859, -51.5))
    walls.append(vect(24.88, 5.96, -16.25))
    walls.append(vect(19.22, 4, -6.98))
    X = 2
    walls.append(vect(10.5, 7.35, -16.181))
    walls.append(vect(-8.021, 1.24, 3.88))
    walls.append(vect(1.109, 1.42, 4.25))
    walls.append(vect(-1.59, 1.24, -12.7))
    walls.append(vect(4.67, 7, -13.62))
    X = 3
    walls.append(vect(-11.931, 1.41, -15.03))
    walls.append(vect(-2.94, 1.41, -38.69))
    walls.append(vect(-19.63, 2.35, -54.021))
    walls.append(vect(-15.25, 1.229, -27.73))
    walls.append(vect(-15.471, 1.22, -31.96))
    walls.append(vect(-17.3, 1.22, -37))
    X = 4
    walls.append(vect(-62.45, 6.3, -17.04))
    walls.append(vect(-66.01, 6.37, -12.891))
    walls.append(vect(-52.851, 1.2, -36.07))
    walls.append(vect(-55.46, 0.95, -32.54))
    walls.append(vect(-72.33, 1.16, -12.42))
    X = 5
    walls.append(vect(-170.521, 1.479, 39.27))
    walls.append(vect(-171.641, 1.479, 32.51))
    tpStarts = []
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(42.16, 0.67, 31.96))
    tpStarts.append(vect(-20.25, 1.26, 27.649))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(-19.271, 2.35, -16.34))
    tpStarts.append(vect(-97.971, -1.141, -47.771))
    tpStarts.append(vect(0, -30, 0))
    tpDests = []
    tpDests.append(vect(62.729, 5.859, -55.221))
    tpDests.append(vect(3.63, 3.55, 52.29))
    tpDests.append(vect(7.409, 1.488, 13.761))
    tpDests.append(vect(11.27, 7.35, -2.21))
    tpDests.append(vect(-29.23, 10.35, -12.99))
    tpDests.append(vect(-102.94, 2.24, -8.07))
    tpDests.append(vect(-102.94, 2.24, -8.07))


@Rule "blizz world"
@Event global
if mapId == 54:
    walls = []
    X = 1
    walls.append(vect(3, 1.25, 24.29))
    walls.append(vect(16.91, -2.65, 25.75))
    X = 2
    walls.append(vect(-9.13, 3.15, 64.19))
    walls.append(vect(-5.1, 2.47, 59.9))
    X = 3
    walls.append(vect(-1.24, 1.86, 55.56))
    walls.append(vect(5.64, 1.77, 55.98))
    walls.append(vect(8.03, 1.44, 52.01))
    walls.append(vect(16.46, 4.44, 83))
    walls.append(vect(16.27, 0.63, 88.9))
    walls.append(vect(16.38, 0.38, 95.98))
    X = 4
    walls.append(vect(-69.17, 7.93, 103.97))
    walls.append(vect(-53.75, 1.14, 126.34))
    X = 5
    walls.append(vect(-59.73, 2.16, 120.33))
    walls.append(vect(-63.11, 2.17, 115.72))
    X = 6
    walls.append(vect(-115.74, 0.27, 95.59))
    walls.append(vect(-135.51, 2.1, 118.18))
    walls.append(vect(-125.93, 0.95, 118.13))
    walls.append(vect(-120.98, 1.1, 119.23))
    walls.append(vect(-145.59, 2.15, 115.9))
    walls.append(vect(-147.46, 2.23, 90.87))
    sectionData = []
    sectionData.append(vect(0, 0, 15))
    sectionData.append(vect(0, 2, 20))
    sectionData.append(vect(2, 5, 15))
    sectionData.append(vect(4, 6, 15))
    sectionData.append(vect(10, 4, 25))
    sectionData.append(vect(12, 6, 20))
    sectionData.append(vect(14, 6, 15))
    sectionData.append(vect(0, 0, 0))
    lateTps = []
    lateTps.append(vect(2.97, -4.65, -85.64))
    lateTps.append(vect(-12.371, -4.201, -57.627))
    lateTps.append(vect(-10.511, -2.848, -0.823))
    lateTps.append(vect(-25.075, 5.251, 39.109))
    lateTps.append(vect(35.927, 3.303, 78.218))
    lateTps.append(vect(-50.66, 5.87, 88.57))
    lateTps.append(vect(-115.069, 2.995, 156.563))
    lateTps.append(vect(-123.48, 1.2, 110.01))
    sectionRadiuses = []
    sectionRadiuses.append(21)
    sectionRadiuses.append(16)
    sectionRadiuses.append(17)
    sectionRadiuses.append(20)
    sectionRadiuses.append(15)
    sectionRadiuses.append(15)
    sectionRadiuses.append(20)
    sectionRadiuses.append(20)
    triggers = []
    triggers.append(vect(-12.49, -2.65, -34.07))
    triggers.append(vect(2.73, 1.25, 16.76))
    triggers.append(vect(-8.83, 7.42, 51.64))
    triggers.append(vect(22.19, 1.38, 97.41))
    triggers.append(vect(-55.68, 5.87, 98.16))
    triggers.append(vect(-109.04, 8, 131.87))
    triggers.append(vect(-145.55, 2.1, 103.96))
    triggers.append(vect(-145.55, 2.1, 103.96))
    tpStarts = []
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(-12.51, -2.65, -33.5))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(22.18, 1.52, 96.16))
    tpStarts.append(vect(-78.4, 1.95, 129.36))
    tpStarts.append(vect(-113.26, 6.1, 130.81))
    tpStarts.append(vect(0, -30, 0))
    tpDests = []
    tpDests.append(vect(2.97, -4.65, -85.64))
    tpDests.append(vect(-12.48, -2.72, -32.04))
    tpDests.append(vect(5.41, 1.42, 11.439))
    tpDests.append(vect(11.27, 7.35, -2.21))
    tpDests.append(vect(-17.94, 3.35, 65.14))
    tpDests.append(vect(-85.12, 0.1, 108.35))
    tpDests.append(vect(-116.57, 1.2, 112.06))
    tpDests.append(vect(-116.57, 1.2, 112.06))
    deathplaneY = -6.1


@Rule "eichenwalde"
@Event global
if mapId == 124:
    walls = []
    walls.append(vect(8.603, 5.397, -34.937))
    walls.append(vect(-0.034, 4.28, -25.379))
    walls.append(vect(-1.348, 3.689, -27.841))
    walls.append(vect(-1.492, 1.359, -11.064))
    walls.append(vect(-1.939, 1.356, -6.578))
    X = 1
    walls.append(vect(38.464, 10.852, -51.943))
    walls.append(vect(13, 5.554, -39.5))
    walls.append(vect(8.708, 6.434, -45.911))
    X = 2
    walls.append(vect(7.928, 6.38, -52.23))
    walls.append(vect(22, 6.398, -58.962))
    walls.append(vect(27.209, 6.395, -59.248))
    X = 3
    walls.append(vect(70.735, 8, -78.1))
    walls.append(vect(67.838, 8, -89.479))
    walls.append(vect(72.732, 8, -85.123))
    walls.append(vect(65.018, 18.071, -81.605))
    walls.append(vect(51.731, 8.021, -66.974))
    walls.append(vect(60.254, 12.454, -94.021))
    X = 4
    walls.append(vect(104.171, 14.071, -53.97))
    walls.append(vect(100.794, 12.071, -29.289))
    X = 5
    walls.append(vect(98.65, 12.071, -37.693))
    walls.append(vect(95.719, 12.071, -44.037))
    walls.append(vect(115.603, 10.072, -40.858))
    walls.append(vect(115.165, 10.073, -48.097))
    walls.append(vect(111.677, 12.09, -7.81))
    walls.append(vect(142.352, 12.09, -16.331))
    X = 6
    sectionData = []
    sectionData.append(vect(0, 5, 15))
    sectionData.append(vect(5, 6, 15))
    sectionData.append(vect(8, 3, 25))
    sectionData.append(vect(11, 6, 15))
    sectionData.append(vect(17, 6, 20))
    sectionData.append(vect(19, 6, 20))
    sectionData.append(vect(0, 0, 0))
    lateTps = []
    lateTps.append(vect(-11.842, 1.351, -9.35))
    lateTps.append(vect(-7.643, 3.377, -28.96))
    lateTps.append(vect(17.593, 6.142, -51.242))
    lateTps.append(vect(10.165, 12.363, -96.497))
    lateTps.append(vect(56.275, 6.161, -98))
    lateTps.append(vect(107.763, 12.071, -32.7))
    lateTps.append(vect(128.931, 15.071, -6.823))
    sectionRadiuses = []
    sectionRadiuses.append(15)
    sectionRadiuses.append(22)
    sectionRadiuses.append(11)
    sectionRadiuses.append(20)
    sectionRadiuses.append(15)
    sectionRadiuses.append(11)
    sectionRadiuses.append(20)
    triggers = []
    triggers.append(vect(-4.208, 3.352, -36.936))
    triggers.append(vect(31.75, 8.819, -49.356))
    triggers.append(vect(17.581, 12.364, -88.729))
    triggers.append(vect(67.373, 6.071, -83.719))
    triggers.append(vect(105.776, 14.071, -46.755))
    triggers.append(vect(126.503, 17.516, -15.358))
    triggers.append(vect(111.545, 16.071, -33.741))
    tpStarts = []
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(21, 11.208, -99))
    tpStarts.append(vect(26.932, 10.006, -87.287))
    tpStarts.append(vect(67.503, 6.071, -83.707))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(125.858, 16.083, -19.069))
    tpDests = []
    tpDests.append(vect(-12.112, 2.165, -7.337))
    tpDests.append(vect(-12.48, -2.72, -32.04))
    tpDests.append(vect(5.125, 12.613, -84.363))
    tpDests.append(vect(28.763, 9.349, -86.46))
    tpDests.append(vect(73.259, 14.071, -50.833))
    tpDests.append(vect(-85.12, 0.1, 108.35))
    tpDests.append(vect(113.351, 16.071, -27.425))
    deathplaneY = -2.05


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


@Rule "list walls (W)"
@Event global
if true:
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
    X = 6
    walls.append(vect(137.603, 2, 210.548))
    walls.append(vect(137.603, 2, 210.548))
    walls.append(vect(137.603, 2, 210.548))
    walls.append(vect(137.603, 2, 210.548))
    walls.append(vect(137.603, 2, 210.548))


@Rule "list of sections S(wall index start; wall index len; time)"
@Event global
if true:
    sectionData = []
    sectionData.append(vect(0, 0, 15))
    sectionData.append(vect(0, 5, 20))
    sectionData.append(vect(5, 4, 20))
    sectionData.append(vect(9, 6, 25))
    sectionData.append(vect(13, 7, 20))
    sectionData.append(vect(16, 6, 20))
    sectionData.append(vect(0, 0, 0))


@Rule "tps when 5 seconds left"
@Event global
if true:
    lateTps = []
    lateTps.append(vect(-24.091, 0.948, -13.063))
    lateTps.append(vect(-17.663, 1.363, 15.329))
    lateTps.append(vect(19.562, 0.363, -12.991))
    lateTps.append(vect(26.117, 4, -41.122))
    lateTps.append(vect(45.758, 3.349, 1.928))
    lateTps.append(vect(53.212, 8.349, -30.774))
    lateTps.append(vect(73.655, 8.307, -11.372))


@Rule "list m"
@Event global
if true:
    sectionRadiuses = []
    sectionRadiuses.append(15)
    sectionRadiuses.append(13)
    sectionRadiuses.append(15)
    sectionRadiuses.append(14)
    sectionRadiuses.append(23)
    sectionRadiuses.append(15)
    sectionRadiuses.append(20)


@Rule "list triggers (t)"
@Event global
if true:
    triggers = []
    triggers.append(vect(-6.798, -0.636, 22.805))
    triggers.append(vect(25.913, 1.363, -22.195))
    triggers.append(vect(32.164, 9.352, -48.708))
    triggers.append(vect(47.77, 3.349, 13.372))
    triggers.append(vect(68.383, 9.094, -44.804))
    triggers.append(vect(72.108, 9.351, 4.322))
    triggers.append(vect(89.482, 8.086, -0.043))


@Rule "list tp starts (B)"
@Event global
if true:
    tpStarts = []
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(-4.722, -0.637, 23.487))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(0, -30, 0))
    tpStarts.append(vect(82.56, 10.114, -51.925))
    tpStarts.append(vect(73.133, 9.351, 4.783))


@Rule "list tp dest (C)"
@Event global
if true:
    tpDests = []
    tpDests.append(vect(201.216, 2.354, 197.171))
    tpDests.append(vect(-3.178, -0.632, 23.306))
    tpDests.append(vect(5.125, 12.613, -84.363))
    tpDests.append(vect(28.763, 9.349, -86.46))
    tpDests.append(vect(88.041, 24.348, 313.927))
    tpDests.append(vect(67.771, 12.363, -34.732))
    tpDests.append(vect(74.389, 9.351, 5.621))


@Rule "initial zombie hero"
@Event global
zombieHero = Hero.TORBJORN
currentSection = 4
deathplaneY = -4
hudText(getAllPlayers(Team.ALL), "Waiting 4 Players 2 Start ...", null, null, Vector.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "list kb for each hero (k)"
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


@Rule "init round"
@Event global
if roundProgress <= 1 and getMatchTime() != 0:
    matchTime = getMatchTime()
    if roundProgress != 0:
        goto lbl_0
    matchTime = 1200
    lbl_0:
    hasFirstInfectionPassed = 0
    sectionLoopIndex = 1
    currentSection = 0
    firstInfectionLoopIndex = 0
    countdownProgress = 0
    roundWinners = 0
    for player in getAllPlayers(Team.ALL):
        player.hasWonRound = 0
    for player in getAllPlayers(Team.ALL):
        player.team = 0
    if false:
        goto lbl_1
    destroyAllHudTexts()
    lbl_1:
    for player in getAllPlayers(Team.ALL):
        player.resurrect()
    wait(0.25)
    goToAssembleHeroes()
    setMatchTime(8.9)
    for player in getAllPlayers(Team.ALL):
        player.resetHeroAvailability()
    for player in getAllPlayers(Team.ALL):
        player.stopForcingCurrentHero()
    disableGamemodeCompletion()
    wait(9)
    sectionLoopIndex = 0
    roundProgress = 3
    setMatchTime(matchTime)
    if getMatchTime() > 0:
        goto lbl_2
    level = 4
    lbl_2:
    hasFirstInfectionPassed = 0
    currentSection = 0
    firstInfectionLoopIndex = 0
    countdownProgress = 0
    roundWinners = 0


@Rule "init section (slice + draw tp)"
@Event global
if sectionLoopIndex == 0:
    currentSectionWalls = walls.slice(sectionData[currentSection].x, sectionData[currentSection].y)
    createEffect(getAllPlayers(Team.ALL), Effect.ORB, Color.GREEN, tpStarts[currentSection], 0.25, Reeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "(debug) section spheres draw"
@Event global
if sectionLoopIndex == 0:
    createEffect(getAllPlayers(Team.ALL), Effect.SPHERE, Color.WHITE, triggers[currentSection], sectionRadiuses[currentSection], Reeval.VISIBILITY)


@Rule "trigger draw"
@Event global
if sectionLoopIndex == 0:
    destroyAllIcons()
    createEffect(getAllPlayers(Team.ALL), Effect.SPHERE, Color.BLUE, triggers[currentSection], 4, Reeval.VISIBILITY)
    createIcon(getAllPlayers(Team.ALL), triggers[currentSection], Icon.ARROW_DOWN, Reeval.VISIBILITY_AND_POSITION, Color.BLUE, true)


@Rule "walls visual effect"
@Event global
if sectionLoopIndex == 0:
    do:
        createEffect(getAllPlayers(Team.ALL), Effect.SPHERE, Color.YELLOW, currentSectionWalls[sectionLoopIndex], 4, Reeval.VISIBILITY)
        createEffect(getAllPlayers(Team.ALL), Effect.SPHERE, Color.YELLOW, currentSectionWalls[sectionLoopIndex] + vect(0, 4, 0), 4, Reeval.VISIBILITY)
        sectionLoopIndex++
        wait(0.05)
    while sectionLoopIndex < len(currentSectionWalls)
    goto lbl_0
    lbl_0:


@Rule "walls kb effect"
@Event eachPlayer
if true:
    do:
        if eventPlayer.getPosition().y < currentSectionWalls[eventPlayer.wallLoopIndex].y - 4:
            goto lbl_0
        if distance(vect(eventPlayer.getPosition().x, 0, eventPlayer.getPosition().z), vect(currentSectionWalls[eventPlayer.wallLoopIndex].x, 0, currentSectionWalls[eventPlayer.wallLoopIndex].z)) > 4.5:
            goto lbl_1
        eventPlayer.applyImpulse(vect(0, 1, 0), 1, Relativity.TO_PLAYER, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(vect(vectorTowards(currentSectionWalls[eventPlayer.wallLoopIndex], eventPlayer.getPosition()).x, 0, vectorTowards(currentSectionWalls[eventPlayer.wallLoopIndex], eventPlayer.getPosition()).z), 2.5 + eventPlayer.getHorizontalSpeed() * 1.5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        if true:
            goto lbl_2
        eventPlayer.applyImpulse(eventPlayer.getVelocity() / vect(abs(eventPlayer.getVelocity().x), abs(eventPlayer.getVelocity().y), abs(eventPlayer.getVelocity().z)), -10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        lbl_0:
        lbl_1:
        lbl_2:
        eventPlayer.wallLoopIndex++
        if eventPlayer.wallLoopIndex < len(currentSectionWalls):
            goto lbl_3
        eventPlayer.wallLoopIndex = 0
        lbl_3:
        wait(0.016)
    while true


@Rule "(debug) print coords"
@Event eachPlayer
if true:
    hudText(getAllPlayers(Team.ALL), eventPlayer.getHorizontalSpeed(), null, null, Vector.LEFT, 0, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(Team.ALL), eventPlayer.getPosition(), null, null, Vector.LEFT, 0, Color.GREEN, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(Team.ALL), distance(eventPlayer.getPosition(), lateTps[currentSection + 1]), null, null, Vector.LEFT, 0, Color.PURPLE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)


@Rule "(debug) tp"
@Event eachPlayer
if eventPlayer.isHoldingButton(Button.INTERACT) and eventPlayer.getCurrentHero() == Hero.PHARAH:
    eventPlayer.teleportTo(worldVector(vect(0, 0, 5), eventPlayer, Transform.ROTATION_AND_TRANSLATION))


@Rule "use tp"
@Event eachPlayer
if eventPlayer in getPlayersInRadius(tpStarts[currentSection] - vect(0, 1, 0), 2, Team.ALL, LosCheck.OFF):
    eventPlayer.teleportTo(tpDests[currentSection])


@Rule "trigger"
@Event global
if len(getPlayersInRadius(triggers[currentSection], 5, Team.ALL, LosCheck.OFF)) > 0 and countdownProgress == 0:
    countdownProgress = 1
    if len([player for player in getPlayersInRadius(triggers[currentSection], 5, Team.ALL, LosCheck.OFF) if player.team == 1]) != 0:
        goto lbl_0
    if currentSection == len(sectionData) + -1:
        goto lbl_1
    bigMessage(getAllPlayers(Team.ALL), "Defend: {} sec".format(sectionData[currentSection].z))
    wait(sectionData[currentSection].z - 8)
    if roundProgress <= 2:
        return
    bigMessage(getAllPlayers(Team.ALL), "Defend: 8 sec")
    countdownProgress = 1.5
    wait(7)
    if roundProgress <= 2:
        return
    bigMessage(getAllPlayers(Team.ALL), "Defend: 1 sec")
    countdownProgress = 2
    wait(1)
    if roundProgress <= 2:
        return
    lbl_1:
    countdownProgress = 3
    currentSection++
    if currentSection == len(sectionData) + 0:
        goto lbl_2
    bigMessage(getAllPlayers(Team.ALL), "Run!!!")
    lbl_2:
    destroyAllEffects()
    wait(0.25)
    sectionLoopIndex = 0
    countdownProgress = 0
    if currentSection != len(sectionData) + 0:
        goto lbl_3
    roundWinners = 2
    return
    lbl_0:
    roundWinners = 1
    lbl_3:


@Rule "first infection"
@Event global
if roundProgress == 3:
    do:
        wait(1)
        bigMessage(getAllPlayers(Team.ALL), "Initial Dead: {} sec".format(10 - firstInfectionLoopIndex))
        firstInfectionLoopIndex++
    while firstInfectionLoopIndex < 10
    if len([player for player in getAllPlayers(Team.ALL) if player.hasSpawned()]) <= 10:
        goto lbl_0
    for player in random.shuffle([player for player in getAllPlayers(Team.ALL) if player.hasSpawned() and player.wasFirstZombieLastRound == 0]).slice(0, 2):
        player.team = 1
    lbl_0:
    if len([player for player in getAllPlayers(Team.ALL) if player.hasSpawned()]) > 10:
        goto lbl_1
    for player in random.shuffle([player for player in getAllPlayers(Team.ALL) if player.hasSpawned() and player.wasFirstZombieLastRound == 0]).slice(0, 1):
        player.team = 1
    lbl_1:
    for player in [player for player in getAllPlayers(Team.ALL) if player.team == 1]:
        player.teleportTo(lateTps[0])
    hasFirstInfectionPassed = 1
    for player in [player for player in getAllPlayers(Team.ALL) if player.team == 1]:
        player.wasFirstZombieLastRound = 1
    for player in [player for player in getAllPlayers(Team.ALL) if player.team == 0]:
        player.wasFirstZombieLastRound = 0


@Rule "tp players at 1 sec left"
@Event eachPlayer
if countdownProgress == 2 and not (eventPlayer in getPlayersInRadius(triggers[currentSection], sectionRadiuses[currentSection], Team.ALL, LosCheck.OFF)):
    eventPlayer.teleportTo(lateTps[currentSection + 1])


@Rule "deathplane tp"
@Event eachPlayer
if eventPlayer.getPosition().y < deathplaneY and roundProgress != 0 and roundWinners == 0:
    eventPlayer.teleportTo(lateTps[currentSection])
    eventPlayer.resurrect()


@Rule "infect players"
@Event playerTookDamage
if attacker.team == 1 and victim.team == 0 and roundWinners == 0 and distance(attacker.getPosition(), victim.getPosition()) <= 5.5:
    victim.team = 1
    attacker.addToScore(1)
    victim.H = victim.getCurrentHero()
    hudText(getAllPlayers(Team.ALL), "{} {} -> {} {}".format(heroIcon(attacker.getCurrentHero()), attacker, heroIcon(victim.H), victim), null, null, Vector.RIGHT, 0, Color.WHITE, Color.WHITE, Color.WHITE, Reeval.VISIBILITY_AND_STRING)
    if len([i for i in [player for player in getAllPlayers(Team.ALL) if player.hasSpawned()] if i.team == 0]) != 0:
        goto lbl_0
    roundWinners = 1
    eventPlayer.resurrect()
    lbl_0:


@Rule "player dies = gets tp'd, +10 pts if zombie kill"
@Event playerDied
if roundWinners == 0 and roundProgress != 0:
    victim.resurrect()
    victim.teleportTo(lateTps[currentSection])
    if victim == attacker:
        goto lbl_0
    if attacker.team == 1:
        goto lbl_1
    attacker.addToScore(9)
    lbl_0:
    lbl_1:


@Rule "humans and zombies cant hurt same"
@Event global
if isGameInProgress():
    startDamageModification([player for player in getAllPlayers(Team.ALL) if player.team == 0], [player for player in getAllPlayers(Team.ALL) if player.team == 0], 0, Reeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)
    startDamageModification([player for player in getAllPlayers(Team.ALL) if player.team == 1], [player for player in getAllPlayers(Team.ALL) if player.team == 1], 0, Reeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT)


@Rule "humans and zombies can hurt each other + kb"
@Event playerDealtDamage
if attacker.team != victim.team and victim.team == 1:
    if random.randint(1, 4) != 1:
        goto lbl_0
    victim.applyImpulse(vect(0, 1, 0), 1.5, Relativity.TO_PLAYER, Impulse.CANCEL_CONTRARY_MOTION)
    lbl_0:
    victim.applyImpulse(vect(vectorTowards(attacker.getPosition(), victim.getPosition()).x, 0, vectorTowards(attacker.getPosition(), victim.getPosition()).z), eventDamage * 0.9, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)


@Rule "tp dest"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isUsingAbility1():
    do:
        eventPlayer.setProjectileSpeed(100)
        wait(0.016)
        eventPlayer.fastFireCountdown++
    while eventPlayer.fastFireCountdown < 105
    eventPlayer.fastFireCountdown = 0


@Rule "zombie behavior"
@Event eachPlayer
if eventPlayer.team == 1:
    eventPlayer.tempPos = eventPlayer.getPosition()
    eventPlayer.startForcingHero(zombieHero)
    eventPlayer.teleportTo(eventPlayer.tempPos)
    eventPlayer.stopAllHoT()
    eventPlayer.setStatusEffect(null, Status.ROOTED, 2)
    bigMessage(eventPlayer, "You Dead")
    wait(1)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    if len([i for i in [player for player in getAllPlayers(Team.ALL) if player.hasSpawned()] if i.team == 0]) != 0:
        goto lbl_0
    roundWinners = 1
    lbl_0:


@Rule "player selected hero"
@Event eachPlayer
if eventPlayer.hasSpawned() and roundProgress >= 3:
    eventPlayer.disallowButton(Button.CROUCH)
    wait(0.1)
    eventPlayer.teleportTo(lateTps[currentSection])
    if hasFirstInfectionPassed == 0:
        goto lbl_0
    eventPlayer.team = 1
    lbl_0:
    wait(2)
    eventPlayer.allowButton(Button.CROUCH)


@Rule "burn = slow"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.BURNING) and eventPlayer.team == 1:
    eventPlayer.setMoveSpeed(75)
    wait(5)
    eventPlayer.setMoveSpeed(100)


@Rule "no hax for humans"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.HACKED) and false:
    eventPlayer.setStatusEffect(null, Status.HACKED, 9999)
    wait(0.25)
    eventPlayer.clearStatusEffect(Status.HACKED)


@Rule "no stun for humans"
@Event eachPlayer
if eventPlayer.hasStatusEffect(Status.STUNNED) and eventPlayer.team == 0:
    eventPlayer.clearStatusEffect(Status.STUNNED)


@Rule "red orb"
@Event global
if countdownProgress == 1.5:
    createEffect(getAllPlayers(Team.ALL), Effect.ORB, Color.RED, lateTps[currentSection + 1], 1, Reeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "normal zombies: rein"
@Event global
if level == 1:
    zombieHero = Hero.REINHARDT
    bigMessage(getAllPlayers(Team.ALL), "Level 2: Reinhardt")


@Rule "hard zombies: winston"
@Event global
if level == 2:
    zombieHero = Hero.WINSTON
    bigMessage(getAllPlayers(Team.ALL), "Level 3: Winston")


@Rule "expert zombies: brig"
@Event global
if level == 3:
    zombieHero = Hero.BRIGITTE
    bigMessage(getAllPlayers(Team.ALL), "Final Level: Brigitte")


@Rule "map finished"
@Event global
if level == 4:
    declarePlayerVictory(sorted(getAllPlayers(Team.ALL), key=lambda player: player.getScore())[-1])


@Rule "zombies win"
@Event global
if roundWinners == 1:
    stopAllDamageModifications
    bigMessage(getAllPlayers(Team.ALL), "Dead Win")
    wait(5)
    if getMatchTime() > 0:
        goto lbl_0
    level = 4
    lbl_0:
    roundProgress = 1


@Rule "humans win"
@Event global
if roundWinners == 2:
    stopAllDamageModifications
    bigMessage(getAllPlayers(Team.ALL), "Heroes Win")
    wait(0)
    kill([player for player in getAllPlayers(Team.ALL) if player.team == 1], null)
    for player in [player for player in getAllPlayers(Team.ALL) if player.team == 0]:
        player.addToScore(100)
    wait(1.5)
    level++
    wait(3.5)
    setMatchTime(1200)
    roundProgress = 1
    for player in [player for player in getAllPlayers(Team.ALL) if player.team == 1]:
        player.teleportTo(vect(0, -500, 0))


@Rule "skirmish rez"
@Event playerDied
if getMatchTime() == 0 and roundProgress == 0:
    wait(4)
    victim.respawn()


@Rule "oasis city center death plane modif 1"
@Event global
if mapId == 186 and currentSection == 3:
    deathplaneY = 3


@Rule "oasis city center death plane modif 2"
@Event global
if mapId == 186 and currentSection == 4:
    deathplaneY = 1.5
    wait(0.25)
    createEffect(getAllPlayers(Team.ALL), Effect.SPHERE, Color.RED, vect(73.298, -96.5, 318.105), 100, Reeval.VISIBILITY_POSITION_AND_RADIUS)


@Rule "oasis city center death plane modif 3"
@Event global
if mapId == 186 and currentSection < 3orcurrentSection > 5:
    deathplaneY = -8.9


@Rule "baptiste no crouch jump"
@Event eachPlayer
if eventPlayer.getCurrentHero() == Hero.BAPTISTE and eventPlayer.isCrouching():
    eventPlayer.setStatusEffect(null, Status.HACKED, 0.016)


@Rule "pharah debug"
@Event eachPlayer
if eventPlayer.isCommunicating(Comms.NEED_HEALING) and eventPlayer.getCurrentHero() == Hero.PHARAH:
    destroyAllEffects()
    wait(1)
    currentSection++
    sectionLoopIndex = 0

`