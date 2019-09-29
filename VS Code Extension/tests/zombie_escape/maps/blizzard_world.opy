

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
