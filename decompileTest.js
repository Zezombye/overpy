decompileTest = `

rule("cs:s zombie escape - made by /u/zezombye - discord in description") {
    event {
        Ongoing - Global;
    }

    actions {
        Set Global Variable(F, Round To Integer(X Component Of(Nearest Walkable Position(Vector(100, 100, 100))), Up));
    }
}

rule("kings row")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 17;
    }

    actions
    {
        Set Global Variable(S, Empty Array);
        Modify Global Variable(S, Append To Array, Vector(0, 6, 15));
        Modify Global Variable(S, Append To Array, Vector(1, 6, 20));
        Modify Global Variable(S, Append To Array, Vector(7, 5, 20));
        Modify Global Variable(S, Append To Array, Vector(12, 6, 20));
        Modify Global Variable(S, Append To Array, Vector(18, 5, 15));
        Modify Global Variable(S, Append To Array, Vector(23, 2, 20));
        Modify Global Variable(S, Append To Array, Vector(25, 0, 10));
        Set Global Variable(L, Empty Array);
        Modify Global Variable(L, Append To Array, Vector(62.73, 5.86, -55.22));
        Modify Global Variable(L, Append To Array, Vector(32.71, 7.46, -31.96));
        Modify Global Variable(L, Append To Array, Vector(-10.513, 0.937, 41.313));
        Modify Global Variable(L, Append To Array, Vector(24.319, 5.35, -4.521));
        Modify Global Variable(L, Append To Array, Vector(-25.564, 1.336, -34.058));
        Modify Global Variable(L, Append To Array, Vector(-92.891, 2.859, -28.7));
        Modify Global Variable(L, Append To Array, Vector(-156.65, 1.479, 48.01));
        Set Global Variable(H, Vector(21.27, 0.58, -48.48));
        Set Global Variable(D, -15);
        Set Global Variable(M, Empty Array);
        Modify Global Variable(M, Append To Array, 21);
        Modify Global Variable(M, Append To Array, 16);
        Modify Global Variable(M, Append To Array, 17);
        Modify Global Variable(M, Append To Array, 20);
        Modify Global Variable(M, Append To Array, 25);
        Modify Global Variable(M, Append To Array, 35);
        Modify Global Variable(M, Append To Array, 10);
        Set Global Variable(T, Empty Array);
        Modify Global Variable(T, Append To Array, Vector(30.029, 7.399, -15.74));
        Modify Global Variable(T, Append To Array, Vector(-17.2, 0.55, 42.439));
        Modify Global Variable(T, Append To Array, Vector(9.729, 9.35, -8.53));
        Modify Global Variable(T, Append To Array, Vector(-22.48, 2.35, -16.36));
        Modify Global Variable(T, Append To Array, Vector(-95.54, -1.141, -46.36));
        Modify Global Variable(T, Append To Array, Vector(-168.86, 1.16, 35.54));
        Modify Global Variable(T, Append To Array, Vector(-178.84, 1.54, 37.25));
        Set Global Variable(W, Empty Array);
        Modify Global Variable(W, Append To Array, Vector(30.77, 5.96, -8));
        Set Global Variable(X, 1);
        Modify Global Variable(W, Append To Array, Vector(27.6, 5.859, -39.78));
        Modify Global Variable(W, Append To Array, Vector(31.81, 0.24, -63.221));
        Modify Global Variable(W, Append To Array, Vector(25, 5.96, -10.971));
        Modify Global Variable(W, Append To Array, Vector(25.359, 5.859, -51.5));
        Modify Global Variable(W, Append To Array, Vector(24.88, 5.96, -16.25));
        Modify Global Variable(W, Append To Array, Vector(19.22, 4, -6.98));
        Set Global Variable(X, 2);
        Modify Global Variable(W, Append To Array, Vector(10.5, 7.35, -16.181));
        Modify Global Variable(W, Append To Array, Vector(-8.021, 1.24, 3.88));
        Modify Global Variable(W, Append To Array, Vector(1.109, 1.42, 4.25));
        Modify Global Variable(W, Append To Array, Vector(-1.59, 1.24, -12.7));
        Modify Global Variable(W, Append To Array, Vector(4.67, 7, -13.62));
        Set Global Variable(X, 3);
        Modify Global Variable(W, Append To Array, Vector(-11.931, 1.41, -15.03));
        Modify Global Variable(W, Append To Array, Vector(-2.94, 1.41, -38.69));
        Modify Global Variable(W, Append To Array, Vector(-19.63, 2.35, -54.021));
        Modify Global Variable(W, Append To Array, Vector(-15.25, 1.229, -27.73));
        Modify Global Variable(W, Append To Array, Vector(-15.471, 1.22, -31.96));
        Modify Global Variable(W, Append To Array, Vector(-17.3, 1.22, -37));
        Set Global Variable(X, 4);
        Modify Global Variable(W, Append To Array, Vector(-62.45, 6.3, -17.04));
        Modify Global Variable(W, Append To Array, Vector(-66.01, 6.37, -12.891));
        Modify Global Variable(W, Append To Array, Vector(-52.851, 1.2, -36.07));
        Modify Global Variable(W, Append To Array, Vector(-55.46, 0.95, -32.54));
        Modify Global Variable(W, Append To Array, Vector(-72.33, 1.16, -12.42));
        Set Global Variable(X, 5);
        Modify Global Variable(W, Append To Array, Vector(-170.521, 1.479, 39.27));
        Modify Global Variable(W, Append To Array, Vector(-171.641, 1.479, 32.51));
        Set Global Variable(B, Empty Array);
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(42.16, 0.67, 31.96));
        Modify Global Variable(B, Append To Array, Vector(-20.25, 1.26, 27.649));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(-19.271, 2.35, -16.34));
        Modify Global Variable(B, Append To Array, Vector(-97.971, -1.141, -47.771));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Set Global Variable(C, Empty Array);
        Modify Global Variable(C, Append To Array, Vector(62.729, 5.859, -55.221));
        Modify Global Variable(C, Append To Array, Vector(3.63, 3.55, 52.29));
        Modify Global Variable(C, Append To Array, Vector(7.409, 1.488, 13.761));
        Modify Global Variable(C, Append To Array, Vector(11.27, 7.35, -2.21));
        Modify Global Variable(C, Append To Array, Vector(-29.23, 10.35, -12.99));
        Modify Global Variable(C, Append To Array, Vector(-102.94, 2.24, -8.07));
        Modify Global Variable(C, Append To Array, Vector(-102.94, 2.24, -8.07));
    }
}

rule("blizz world")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 54;
    }

    actions
    {
        Set Global Variable(W, Empty Array);
        Set Global Variable(X, 1);
        Modify Global Variable(W, Append To Array, Vector(3, 1.25, 24.29));
        Modify Global Variable(W, Append To Array, Vector(16.91, -2.65, 25.75));
        Set Global Variable(X, 2);
        Modify Global Variable(W, Append To Array, Vector(-9.13, 3.15, 64.19));
        Modify Global Variable(W, Append To Array, Vector(-5.1, 2.47, 59.9));
        Set Global Variable(X, 3);
        Modify Global Variable(W, Append To Array, Vector(-1.24, 1.86, 55.56));
        Modify Global Variable(W, Append To Array, Vector(5.64, 1.77, 55.98));
        Modify Global Variable(W, Append To Array, Vector(8.03, 1.44, 52.01));
        Modify Global Variable(W, Append To Array, Vector(16.46, 4.44, 83));
        Modify Global Variable(W, Append To Array, Vector(16.27, 0.63, 88.9));
        Modify Global Variable(W, Append To Array, Vector(16.38, 0.38, 95.98));
        Set Global Variable(X, 4);
        Modify Global Variable(W, Append To Array, Vector(-69.17, 7.93, 103.97));
        Modify Global Variable(W, Append To Array, Vector(-53.75, 1.14, 126.34));
        Set Global Variable(X, 5);
        Modify Global Variable(W, Append To Array, Vector(-59.73, 2.16, 120.33));
        Modify Global Variable(W, Append To Array, Vector(-63.11, 2.17, 115.72));
        Set Global Variable(X, 6);
        Modify Global Variable(W, Append To Array, Vector(-115.74, 0.27, 95.59));
        Modify Global Variable(W, Append To Array, Vector(-135.51, 2.1, 118.18));
        Modify Global Variable(W, Append To Array, Vector(-125.93, 0.95, 118.13));
        Modify Global Variable(W, Append To Array, Vector(-120.98, 1.1, 119.23));
        Modify Global Variable(W, Append To Array, Vector(-145.59, 2.15, 115.9));
        Modify Global Variable(W, Append To Array, Vector(-147.46, 2.23, 90.87));
        Set Global Variable(S, Empty Array);
        Modify Global Variable(S, Append To Array, Vector(0, 0, 15));
        Modify Global Variable(S, Append To Array, Vector(0, 2, 20));
        Modify Global Variable(S, Append To Array, Vector(2, 5, 15));
        Modify Global Variable(S, Append To Array, Vector(4, 6, 15));
        Modify Global Variable(S, Append To Array, Vector(10, 4, 25));
        Modify Global Variable(S, Append To Array, Vector(12, 6, 20));
        Modify Global Variable(S, Append To Array, Vector(14, 6, 15));
        Modify Global Variable(S, Append To Array, Vector(0, 0, 0));
        Set Global Variable(L, Empty Array);
        Modify Global Variable(L, Append To Array, Vector(2.97, -4.65, -85.64));
        Modify Global Variable(L, Append To Array, Vector(-12.371, -4.201, -57.627));
        Modify Global Variable(L, Append To Array, Vector(-10.511, -2.848, -0.823));
        Modify Global Variable(L, Append To Array, Vector(-25.075, 5.251, 39.109));
        Modify Global Variable(L, Append To Array, Vector(35.927, 3.303, 78.218));
        Modify Global Variable(L, Append To Array, Vector(-50.66, 5.87, 88.57));
        Modify Global Variable(L, Append To Array, Vector(-115.069, 2.995, 156.563));
        Modify Global Variable(L, Append To Array, Vector(-123.48, 1.2, 110.01));
        Set Global Variable(M, Empty Array);
        Modify Global Variable(M, Append To Array, 21);
        Modify Global Variable(M, Append To Array, 16);
        Modify Global Variable(M, Append To Array, 17);
        Modify Global Variable(M, Append To Array, 20);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 20);
        Modify Global Variable(M, Append To Array, 20);
        Set Global Variable(T, Empty Array);
        Modify Global Variable(T, Append To Array, Vector(-12.49, -2.65, -34.07));
        Modify Global Variable(T, Append To Array, Vector(2.73, 1.25, 16.76));
        Modify Global Variable(T, Append To Array, Vector(-8.83, 7.42, 51.64));
        Modify Global Variable(T, Append To Array, Vector(22.19, 1.38, 97.41));
        Modify Global Variable(T, Append To Array, Vector(-55.68, 5.87, 98.16));
        Modify Global Variable(T, Append To Array, Vector(-109.04, 8, 131.87));
        Modify Global Variable(T, Append To Array, Vector(-145.55, 2.1, 103.96));
        Modify Global Variable(T, Append To Array, Vector(-145.55, 2.1, 103.96));
        Set Global Variable(B, Empty Array);
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(-12.51, -2.65, -33.5));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(22.18, 1.52, 96.16));
        Modify Global Variable(B, Append To Array, Vector(-78.4, 1.95, 129.36));
        Modify Global Variable(B, Append To Array, Vector(-113.26, 6.1, 130.81));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Set Global Variable(C, Empty Array);
        Modify Global Variable(C, Append To Array, Vector(2.97, -4.65, -85.64));
        Modify Global Variable(C, Append To Array, Vector(-12.48, -2.72, -32.04));
        Modify Global Variable(C, Append To Array, Vector(5.41, 1.42, 11.439));
        Modify Global Variable(C, Append To Array, Vector(11.27, 7.35, -2.21));
        Modify Global Variable(C, Append To Array, Vector(-17.94, 3.35, 65.14));
        Modify Global Variable(C, Append To Array, Vector(-85.12, 0.1, 108.35));
        Modify Global Variable(C, Append To Array, Vector(-116.57, 1.2, 112.06));
        Modify Global Variable(C, Append To Array, Vector(-116.57, 1.2, 112.06));
        Set Global Variable(D, -6.1);
    }
}

rule("eichenwalde")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 124;
    }

    actions
    {
        Set Global Variable(W, Empty Array);
        Modify Global Variable(W, Append To Array, Vector(8.603, 5.397, -34.937));
        Modify Global Variable(W, Append To Array, Vector(-0.034, 4.28, -25.379));
        Modify Global Variable(W, Append To Array, Vector(-1.348, 3.689, -27.841));
        Modify Global Variable(W, Append To Array, Vector(-1.492, 1.359, -11.064));
        Modify Global Variable(W, Append To Array, Vector(-1.939, 1.356, -6.578));
        Set Global Variable(X, 1);
        Modify Global Variable(W, Append To Array, Vector(38.464, 10.852, -51.943));
        Modify Global Variable(W, Append To Array, Vector(13, 5.554, -39.5));
        Modify Global Variable(W, Append To Array, Vector(8.708, 6.434, -45.911));
        Set Global Variable(X, 2);
        Modify Global Variable(W, Append To Array, Vector(7.928, 6.38, -52.23));
        Modify Global Variable(W, Append To Array, Vector(22, 6.398, -58.962));
        Modify Global Variable(W, Append To Array, Vector(27.209, 6.395, -59.248));
        Set Global Variable(X, 3);
        Modify Global Variable(W, Append To Array, Vector(70.735, 8, -78.1));
        Modify Global Variable(W, Append To Array, Vector(67.838, 8, -89.479));
        Modify Global Variable(W, Append To Array, Vector(72.732, 8, -85.123));
        Modify Global Variable(W, Append To Array, Vector(65.018, 18.071, -81.605));
        Modify Global Variable(W, Append To Array, Vector(51.731, 8.021, -66.974));
        Modify Global Variable(W, Append To Array, Vector(60.254, 12.454, -94.021));
        Set Global Variable(X, 4);
        Modify Global Variable(W, Append To Array, Vector(104.171, 14.071, -53.97));
        Modify Global Variable(W, Append To Array, Vector(100.794, 12.071, -29.289));
        Set Global Variable(X, 5);
        Modify Global Variable(W, Append To Array, Vector(98.65, 12.071, -37.693));
        Modify Global Variable(W, Append To Array, Vector(95.719, 12.071, -44.037));
        Modify Global Variable(W, Append To Array, Vector(115.603, 10.072, -40.858));
        Modify Global Variable(W, Append To Array, Vector(115.165, 10.073, -48.097));
        Modify Global Variable(W, Append To Array, Vector(111.677, 12.09, -7.81));
        Modify Global Variable(W, Append To Array, Vector(142.352, 12.09, -16.331));
        Set Global Variable(X, 6);
        Set Global Variable(S, Empty Array);
        Modify Global Variable(S, Append To Array, Vector(0, 5, 15));
        Modify Global Variable(S, Append To Array, Vector(5, 6, 15));
        Modify Global Variable(S, Append To Array, Vector(8, 3, 25));
        Modify Global Variable(S, Append To Array, Vector(11, 6, 15));
        Modify Global Variable(S, Append To Array, Vector(17, 6, 20));
        Modify Global Variable(S, Append To Array, Vector(19, 6, 20));
        Modify Global Variable(S, Append To Array, Vector(0, 0, 0));
        Set Global Variable(L, Empty Array);
        Modify Global Variable(L, Append To Array, Vector(-11.842, 1.351, -9.35));
        Modify Global Variable(L, Append To Array, Vector(-7.643, 3.377, -28.96));
        Modify Global Variable(L, Append To Array, Vector(17.593, 6.142, -51.242));
        Modify Global Variable(L, Append To Array, Vector(10.165, 12.363, -96.497));
        Modify Global Variable(L, Append To Array, Vector(56.275, 6.161, -98));
        Modify Global Variable(L, Append To Array, Vector(107.763, 12.071, -32.7));
        Modify Global Variable(L, Append To Array, Vector(128.931, 15.071, -6.823));
        Set Global Variable(M, Empty Array);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 22);
        Modify Global Variable(M, Append To Array, 11);
        Modify Global Variable(M, Append To Array, 20);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 11);
        Modify Global Variable(M, Append To Array, 20);
        Set Global Variable(T, Empty Array);
        Modify Global Variable(T, Append To Array, Vector(-4.208, 3.352, -36.936));
        Modify Global Variable(T, Append To Array, Vector(31.75, 8.819, -49.356));
        Modify Global Variable(T, Append To Array, Vector(17.581, 12.364, -88.729));
        Modify Global Variable(T, Append To Array, Vector(67.373, 6.071, -83.719));
        Modify Global Variable(T, Append To Array, Vector(105.776, 14.071, -46.755));
        Modify Global Variable(T, Append To Array, Vector(126.503, 17.516, -15.358));
        Modify Global Variable(T, Append To Array, Vector(111.545, 16.071, -33.741));
        Set Global Variable(B, Empty Array);
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(21, 11.208, -99));
        Modify Global Variable(B, Append To Array, Vector(26.932, 10.006, -87.287));
        Modify Global Variable(B, Append To Array, Vector(67.503, 6.071, -83.707));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(125.858, 16.083, -19.069));
        Set Global Variable(C, Empty Array);
        Modify Global Variable(C, Append To Array, Vector(-12.112, 2.165, -7.337));
        Modify Global Variable(C, Append To Array, Vector(-12.48, -2.72, -32.04));
        Modify Global Variable(C, Append To Array, Vector(5.125, 12.613, -84.363));
        Modify Global Variable(C, Append To Array, Vector(28.763, 9.349, -86.46));
        Modify Global Variable(C, Append To Array, Vector(73.259, 14.071, -50.833));
        Modify Global Variable(C, Append To Array, Vector(-85.12, 0.1, 108.35));
        Modify Global Variable(C, Append To Array, Vector(113.351, 16.071, -27.425));
        Set Global Variable(D, -2.05);
    }
}

rule("oasis city center")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 186;
    }

    actions
    {
        Set Global Variable(W, Empty Array);
        Set Global Variable(X, 1);
        Modify Global Variable(W, Append To Array, Vector(138.166, 2, 209.031));
        Modify Global Variable(W, Append To Array, Vector(173.918, 5.451, 238.435));
        Modify Global Variable(W, Append To Array, Vector(153.992, 4.105, 211.989));
        Modify Global Variable(W, Append To Array, Vector(170.979, 5.348, 232.41));
        Modify Global Variable(W, Append To Array, Vector(169.23, 4.23, 221.512));
        Set Global Variable(X, 2);
        Modify Global Variable(W, Append To Array, Vector(146.914, 5.353, 269.272));
        Modify Global Variable(W, Append To Array, Vector(165.43, 5.353, 251.3));
        Modify Global Variable(W, Append To Array, Vector(174.073, 5.453, 244.755));
        Modify Global Variable(W, Append To Array, Vector(152.772, 4.353, 256.83));
        Set Global Variable(X, 3);
        Modify Global Variable(W, Append To Array, Vector(152.202, 5.453, 277.696));
        Modify Global Variable(W, Append To Array, Vector(169.966, 5.352, 239.374));
        Modify Global Variable(W, Append To Array, Vector(154.181, 4.298, 236.817));
        Set Global Variable(X, 4);
        Modify Global Variable(W, Append To Array, Vector(80.529, 21, 321.752));
        Modify Global Variable(W, Append To Array, Vector(58.479, 14, 315.438));
        Modify Global Variable(W, Append To Array, Vector(68.252, 10, 321.405));
        Modify Global Variable(W, Append To Array, Vector(73.934, 14, 309.11));
        Set Global Variable(X, 5);
        Modify Global Variable(W, Append To Array, Vector(144.727, 5.348, 216.623));
        Modify Global Variable(W, Append To Array, Vector(112.532, 5.348, 248.279));
        Modify Global Variable(W, Append To Array, Vector(124.038, 4.408, 228.053));
        Modify Global Variable(W, Append To Array, Vector(122.864, 5.352, 246.109));
        Modify Global Variable(W, Append To Array, Vector(142.109, 5.352, 226.935));
        Modify Global Variable(W, Append To Array, Vector(137.603, 2, 210.548));
        Set Global Variable(S, Empty Array);
        Modify Global Variable(S, Append To Array, Vector(0, 0, 15));
        Modify Global Variable(S, Append To Array, Vector(0, 5, 20));
        Modify Global Variable(S, Append To Array, Vector(4, 7, 15));
        Modify Global Variable(S, Append To Array, Vector(9, 3, 25));
        Modify Global Variable(S, Append To Array, Vector(12, 4, 20));
        Modify Global Variable(S, Append To Array, Vector(16, 5, 15));
        Modify Global Variable(S, Append To Array, Vector(0, 0, 15));
        Modify Global Variable(S, Append To Array, Vector(0, 0, 0));
        Set Global Variable(L, Empty Array);
        Modify Global Variable(L, Append To Array, Vector(220.224, 2.351, 167.747));
        Modify Global Variable(L, Append To Array, Vector(211.228, 2.351, 181.767));
        Modify Global Variable(L, Append To Array, Vector(194.838, 2.995, 221.516));
        Modify Global Variable(L, Append To Array, Vector(153.317, 5.353, 228.67));
        Modify Global Variable(L, Append To Array, Vector(157.114, 12.871, 256.487));
        Modify Global Variable(L, Append To Array, Vector(81.267, 8.348, 305.765));
        Modify Global Variable(L, Append To Array, Vector(139.865, 3.553, 243.895));
        Modify Global Variable(L, Append To Array, Vector(37.6, -5.314, 141.744));
        Set Global Variable(M, Empty Array);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 22);
        Modify Global Variable(M, Append To Array, 20);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 25);
        Modify Global Variable(M, Append To Array, 20);
        Modify Global Variable(M, Append To Array, 20);
        Set Global Variable(T, Empty Array);
        Modify Global Variable(T, Append To Array, Vector(203.838, 2.351, 193.103));
        Modify Global Variable(T, Append To Array, Vector(187.465, 3.197, 228.936));
        Modify Global Variable(T, Append To Array, Vector(164.01, 5.352, 246.529));
        Modify Global Variable(T, Append To Array, Vector(146.688, 12.871, 272.18));
        Modify Global Variable(T, Append To Array, Vector(62.132, 9.21, 309.589));
        Modify Global Variable(T, Append To Array, Vector(128.289, 5.349, 232.291));
        Modify Global Variable(T, Append To Array, Vector(16.617, -8.5, 120.524));
        Modify Global Variable(T, Append To Array, Vector(16.617, -8.5, 120.524));
        Set Global Variable(B, Empty Array);
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(202.897, 2.351, 194.546));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(146.278, 12.871, 273.901));
        Modify Global Variable(B, Append To Array, Vector(62.114, 9.21, 309.601));
        Modify Global Variable(B, Append To Array, Vector(113.736, 2.148, 217.728));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Set Global Variable(C, Empty Array);
        Modify Global Variable(C, Append To Array, Vector(201.216, 2.354, 197.171));
        Modify Global Variable(C, Append To Array, Vector(202.001, 2.349, 195.913));
        Modify Global Variable(C, Append To Array, Vector(5.125, 12.613, -84.363));
        Modify Global Variable(C, Append To Array, Vector(28.763, 9.349, -86.46));
        Modify Global Variable(C, Append To Array, Vector(87.876, 19.998, 314.105));
        Modify Global Variable(C, Append To Array, Vector(153.019, 5.453, 281.754));
        Modify Global Variable(C, Append To Array, Vector(112, 2.148, 216));
        Modify Global Variable(C, Append To Array, Vector(112, 2.148, 216));
        Set Global Variable(D, -8.9);
    }
}

rule("list walls (W)")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(W, Empty Array);
        Set Global Variable(X, 1);
        Modify Global Variable(W, Append To Array, Vector(12.41, -0.632, 23.647));
        Modify Global Variable(W, Append To Array, Vector(13.797, 1.556, 5.716));
        Modify Global Variable(W, Append To Array, Vector(14.091, 2.364, -4.894));
        Modify Global Variable(W, Append To Array, Vector(20.744, 6, -10.905));
        Modify Global Variable(W, Append To Array, Vector(25.865, 1.363, -28.006));
        Set Global Variable(X, 2);
        Modify Global Variable(W, Append To Array, Vector(32.705, 11.352, -40.458));
        Modify Global Variable(W, Append To Array, Vector(13.915, 1.069, -12.951));
        Modify Global Variable(W, Append To Array, Vector(31.124, 5.269, -19.999));
        Modify Global Variable(W, Append To Array, Vector(21.23, 5.422, -19.641));
        Set Global Variable(X, 3);
        Modify Global Variable(W, Append To Array, Vector(55.469, 7.243, 11.299));
        Modify Global Variable(W, Append To Array, Vector(26.178, 5.363, -31.329));
        Modify Global Variable(W, Append To Array, Vector(25.042, 2.076, 2.763));
        Modify Global Variable(W, Append To Array, Vector(29.07, 2.369, 4.184));
        Set Global Variable(X, 4);
        Modify Global Variable(W, Append To Array, Vector(38.879, 11.016, -31.907));
        Modify Global Variable(W, Append To Array, Vector(35.266, 5.242, -17.739));
        Modify Global Variable(W, Append To Array, Vector(74.821, 10.126, -48.785));
        Set Global Variable(X, 5);
        Modify Global Variable(W, Append To Array, Vector(46.324, 8.364, -9.905));
        Modify Global Variable(W, Append To Array, Vector(70.192, 8.333, -23.901));
        Modify Global Variable(W, Append To Array, Vector(65.059, 7.601, -18.487));
        Modify Global Variable(W, Append To Array, Vector(62.994, 8.135, -11.591));
        Modify Global Variable(W, Append To Array, Vector(73.903, 12.363, -38.837));
        Set Global Variable(X, 6);
        Modify Global Variable(W, Append To Array, Vector(137.603, 2, 210.548));
        Modify Global Variable(W, Append To Array, Vector(137.603, 2, 210.548));
        Modify Global Variable(W, Append To Array, Vector(137.603, 2, 210.548));
        Modify Global Variable(W, Append To Array, Vector(137.603, 2, 210.548));
        Modify Global Variable(W, Append To Array, Vector(137.603, 2, 210.548));
    }
}

rule("list of sections S(wall index start; wall index len; time)")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(S, Empty Array);
        Modify Global Variable(S, Append To Array, Vector(0, 0, 15));
        Modify Global Variable(S, Append To Array, Vector(0, 5, 20));
        Modify Global Variable(S, Append To Array, Vector(5, 4, 20));
        Modify Global Variable(S, Append To Array, Vector(9, 6, 25));
        Modify Global Variable(S, Append To Array, Vector(13, 7, 20));
        Modify Global Variable(S, Append To Array, Vector(16, 6, 20));
        Modify Global Variable(S, Append To Array, Vector(0, 0, 0));
    }
}

rule("tps when 5 seconds left")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(L, Empty Array);
        Modify Global Variable(L, Append To Array, Vector(-24.091, 0.948, -13.063));
        Modify Global Variable(L, Append To Array, Vector(-17.663, 1.363, 15.329));
        Modify Global Variable(L, Append To Array, Vector(19.562, 0.363, -12.991));
        Modify Global Variable(L, Append To Array, Vector(26.117, 4, -41.122));
        Modify Global Variable(L, Append To Array, Vector(45.758, 3.349, 1.928));
        Modify Global Variable(L, Append To Array, Vector(53.212, 8.349, -30.774));
        Modify Global Variable(L, Append To Array, Vector(73.655, 8.307, -11.372));
    }
}

rule("list m")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(M, Empty Array);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 13);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 14);
        Modify Global Variable(M, Append To Array, 23);
        Modify Global Variable(M, Append To Array, 15);
        Modify Global Variable(M, Append To Array, 20);
    }
}

rule("list triggers (t)")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(T, Empty Array);
        Modify Global Variable(T, Append To Array, Vector(-6.798, -0.636, 22.805));
        Modify Global Variable(T, Append To Array, Vector(25.913, 1.363, -22.195));
        Modify Global Variable(T, Append To Array, Vector(32.164, 9.352, -48.708));
        Modify Global Variable(T, Append To Array, Vector(47.77, 3.349, 13.372));
        Modify Global Variable(T, Append To Array, Vector(68.383, 9.094, -44.804));
        Modify Global Variable(T, Append To Array, Vector(72.108, 9.351, 4.322));
        Modify Global Variable(T, Append To Array, Vector(89.482, 8.086, -0.043));
    }
}

rule("list tp starts (B)")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(B, Empty Array);
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(-4.722, -0.637, 23.487));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(0, -30, 0));
        Modify Global Variable(B, Append To Array, Vector(82.56, 10.114, -51.925));
        Modify Global Variable(B, Append To Array, Vector(73.133, 9.351, 4.783));
    }
}

rule("list tp dest (C)")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Set Global Variable(C, Empty Array);
        Modify Global Variable(C, Append To Array, Vector(201.216, 2.354, 197.171));
        Modify Global Variable(C, Append To Array, Vector(-3.178, -0.632, 23.306));
        Modify Global Variable(C, Append To Array, Vector(5.125, 12.613, -84.363));
        Modify Global Variable(C, Append To Array, Vector(28.763, 9.349, -86.46));
        Modify Global Variable(C, Append To Array, Vector(88.041, 24.348, 313.927));
        Modify Global Variable(C, Append To Array, Vector(67.771, 12.363, -34.732));
        Modify Global Variable(C, Append To Array, Vector(74.389, 9.351, 5.621));
    }
}

rule("initial zombie hero")
{
    event
    {
        Ongoing - Global;
    }

    actions
    {
        Set Global Variable(Z, Hero(Torbjörn));
        Set Global Variable(N, 4);
        Set Global Variable(D, -4);
    }
}

rule("list kb for each hero (k)")
{
    event
    {
        Ongoing - Global;
    }

    actions
    {
        Set Global Variable(K, Empty Array);
        Modify Global Variable(K, Append To Array, 30);
        Modify Global Variable(K, Append To Array, 15);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 300);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 50);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 15);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 10);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 0);
        Modify Global Variable(K, Append To Array, 25);
        Modify Global Variable(K, Append To Array, 20);
    }
}

rule("init round")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(R) <= 1;
        Match Time != 0;
    }

    actions
    {
        Set Global Variable(P, Match Time);
        Skip If(Compare(Global Variable(R), !=, 0), 1);
        Set Global Variable(P, 1200);
        Set Global Variable(G, 0);
        Set Global Variable(I, 1);
        Set Global Variable(N, 0);
        Set Global Variable(O, 0);
        Set Global Variable(Q, 0);
        Set Global Variable(E, 0);
        Set Player Variable(All Players(All Teams), F, 0);
        Set Player Variable(All Players(All Teams), Z, 0);
        Skip If(False, 1);
        Destroy All HUD Text;
        Resurrect(All Players(All Teams));
        Wait(0.25, Ignore Condition);
        Go To Assemble Heroes;
        Set Match Time(8.9);
        Reset Player Hero Availability(All Players(All Teams));
        Stop Forcing Player To Be Hero(All Players(All Teams));
        Disable Built-In Game Mode Completion;
        Wait(9, Ignore Condition);
        Set Global Variable(I, 0);
        Set Global Variable(R, 3);
        Set Match Time(Global Variable(P));
        Skip If(Compare(Match Time, >, 0), 1);
        Set Global Variable(J, 4);
        Set Global Variable(G, 0);
        Set Global Variable(N, 0);
        Set Global Variable(O, 0);
        Set Global Variable(Q, 0);
        Set Global Variable(E, 0);
    }
}

rule("init section (slice + draw tp)")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(I) == 0;
    }

    actions
    {
        Set Global Variable(A, Array Slice(Global Variable(W), X Component Of(Value In Array(Global Variable(S), Global Variable(N))),
            Y Component Of(Value In Array(Global Variable(S), Global Variable(N)))));
        Create Effect(All Players(All Teams), Orb, Green, Value In Array(Global Variable(B), Global Variable(N)), 0.25,
            Visible To Position and Radius);
    }
}

rule("(debug) section spheres draw")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(I) == 0;
    }

    actions
    {
        Create Effect(All Players(All Teams), Sphere, White, Value In Array(Global Variable(T), Global Variable(N)), Value In Array(
            Global Variable(M), Global Variable(N)), Visible To);
    }
}

rule("trigger draw")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(I) == 0;
    }

    actions
    {
        Destroy All Icons;
        Create Effect(All Players(All Teams), Sphere, Blue, Value In Array(Global Variable(T), Global Variable(N)), 4, Visible To);
        Create Icon(All Players(All Teams), Value In Array(Global Variable(T), Global Variable(N)), Arrow: Down, Visible To and Position,
            Blue, True);
    }
}

rule("walls visual effect")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(I) == 0;
    }

    actions
    {
        Create Effect(All Players(All Teams), Sphere, Yellow, Value In Array(Global Variable(A), Global Variable(I)), 4, Visible To);
        Create Effect(All Players(All Teams), Sphere, Yellow, Add(Value In Array(Global Variable(A), Global Variable(I)), Vector(0, 4, 0)),
            4, Visible To);
        Modify Global Variable(I, Add, 1);
        Wait(0.05, Ignore Condition);
        Loop If(Compare(Global Variable(I), <, Count Of(Global Variable(A))));
        Skip(0);
    }
}

rule("walls kb effect")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        True == True;
    }

    actions
    {
        Skip If(Compare(Y Component Of(Position Of(Event Player)), <, Subtract(Y Component Of(Value In Array(Global Variable(A),
            Player Variable(Event Player, J))), 4)), 5);
        Skip If(Compare(Distance Between(Vector(X Component Of(Position Of(Event Player)), 0, Z Component Of(Position Of(Event Player))),
            Vector(X Component Of(Value In Array(Global Variable(A), Player Variable(Event Player, J))), 0, Z Component Of(Value In Array(
            Global Variable(A), Player Variable(Event Player, J))))), >, 4.5), 4);
        Apply Impulse(Event Player, Vector(0, 1, 0), 1, To Player, Cancel Contrary Motion);
        Apply Impulse(Event Player, Vector(X Component Of(Vector Towards(Value In Array(Global Variable(A), Player Variable(Event Player,
            J)), Position Of(Event Player))), 0, Z Component Of(Vector Towards(Value In Array(Global Variable(A), Player Variable(
            Event Player, J)), Position Of(Event Player)))), Add(2.5, Multiply(Horizontal Speed Of(Event Player), 1.5)), To World,
            Cancel Contrary Motion);
        Skip If(True, 1);
        Apply Impulse(Event Player, Divide(Velocity Of(Event Player), Vector(Absolute Value(X Component Of(Velocity Of(Event Player))),
            Absolute Value(Y Component Of(Velocity Of(Event Player))), Absolute Value(Z Component Of(Velocity Of(Event Player))))),
            -10, To World, Cancel Contrary Motion);
        Modify Player Variable(Event Player, J, Add, 1);
        Skip If(Compare(Player Variable(Event Player, J), <, Count Of(Global Variable(A))), 1);
        Set Player Variable(Event Player, J, 0);
        Wait(0.016, Ignore Condition);
        Loop;
    }
}

rule("(debug) print coords")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        True == True;
    }
}

rule("(debug) tp")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Is Button Held(Event Player, Interact) == True;
        Hero Of(Event Player) == Hero(Pharah);
    }

    actions
    {
        Teleport(Event Player, World Vector Of(Vector(0, 0, 5), Event Player, Rotation And Translation));
    }
}

rule("use tp")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Array Contains(Players Within Radius(Subtract(Value In Array(Global Variable(B), Global Variable(N)), Vector(0, 1, 0)), 2,
            All Teams, Off), Event Player) == True;
    }

    actions
    {
        Teleport(Event Player, Value In Array(Global Variable(C), Global Variable(N)));
    }
}

rule("trigger")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Count Of(Players Within Radius(Value In Array(Global Variable(T), Global Variable(N)), 5, All Teams, Off)) > 0;
        Global Variable(Q) == 0;
    }

    actions
    {
        Set Global Variable(Q, 1);
        Skip If(Compare(Count Of(Filtered Array(Players Within Radius(Value In Array(Global Variable(T), Global Variable(N)), 5, All Teams,
            Off), Compare(Player Variable(Current Array Element, Z), ==, 1))), !=, 0), 20);
        Skip If(Compare(Global Variable(N), ==, Add(Count Of(Global Variable(S)), -1)), 11);
        Wait(Subtract(Z Component Of(Value In Array(Global Variable(S), Global Variable(N))), 8), Ignore Condition);
        Abort If(Compare(Global Variable(R), <=, 2));
        Set Global Variable(Q, 1.5);
        Wait(7, Ignore Condition);
        Abort If(Compare(Global Variable(R), <=, 2));
        Set Global Variable(Q, 2);
        Wait(1, Ignore Condition);
        Abort If(Compare(Global Variable(R), <=, 2));
        Set Global Variable(Q, 3);
        Modify Global Variable(N, Add, 1);
        Skip If(Compare(Global Variable(N), ==, Add(Count Of(Global Variable(S)), 0)), 1);
        Destroy All Effects;
        Wait(0.25, Ignore Condition);
        Set Global Variable(I, 0);
        Set Global Variable(Q, 0);
        Skip If(Compare(Global Variable(N), !=, Add(Count Of(Global Variable(S)), 0)), 3);
        Set Global Variable(E, 2);
        Abort;
        Set Global Variable(E, 1);
    }
}

rule("first infection")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(R) == 3;
    }

    actions
    {
        Wait(1, Ignore Condition);
        Modify Global Variable(O, Add, 1);
        Loop If(Compare(Global Variable(O), <, 10));
        Skip If(Compare(Count Of(Filtered Array(All Players(All Teams), Has Spawned(Current Array Element))), <=, 10), 1);
        Set Player Variable(Array Slice(Randomized Array(Filtered Array(All Players(All Teams), And(Has Spawned(Current Array Element),
            Compare(Player Variable(Current Array Element, L), ==, 0)))), 0, 2), Z, 1);
        Skip If(Compare(Count Of(Filtered Array(All Players(All Teams), Has Spawned(Current Array Element))), >, 10), 1);
        Set Player Variable(Array Slice(Randomized Array(Filtered Array(All Players(All Teams), And(Has Spawned(Current Array Element),
            Compare(Player Variable(Current Array Element, L), ==, 0)))), 0, 1), Z, 1);
        Teleport(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 1)), first of(
            Global Variable(L)));
        Set Global Variable(G, 1);
        Set Player Variable(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 1)), L, 1);
        Set Player Variable(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 0)), L, 0);
    }
}

rule("tp players at 1 sec left")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Global Variable(Q) == 2;
        Not(Array Contains(Players Within Radius(Value In Array(Global Variable(T), Global Variable(N)), Value In Array(Global Variable(M),
            Global Variable(N)), All Teams, Off), Event Player)) == True;
    }

    actions
    {
        Teleport(Event Player, Value In Array(Global Variable(L), Add(Global Variable(N), 1)));
    }
}

rule("deathplane tp")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Y Component Of(Position Of(Event Player)) < Global Variable(D);
        Global Variable(R) != 0;
        Global Variable(E) == 0;
    }

    actions
    {
        Teleport(Event Player, Value In Array(Global Variable(L), Global Variable(N)));
        Resurrect(Event Player);
    }
}

rule("infect players")
{
    event
    {
        Player took damage;
        All;
        All;
    }

    conditions
    {
        Player Variable(Attacker, Z) == 1;
        Player Variable(Victim, Z) == 0;
        Global Variable(E) == 0;
        Distance Between(Position Of(Attacker), Position Of(Victim)) <= 5.5;
    }

    actions
    {
        Set Player Variable(Victim, Z, 1);
        Modify Player Score(Attacker, 1);
        Set Player Variable(Victim, H, Hero Of(Victim));
        Skip If(Compare(Count Of(Filtered Array(Filtered Array(All Players(All Teams), Has Spawned(Current Array Element)), Compare(
            Player Variable(Current Array Element, Z), ==, 0))), !=, 0), 2);
        Set Global Variable(E, 1);
        Resurrect(Event Player);
    }
}

rule("player dies = gets tp'd, +10 pts if zombie kill")
{
    event
    {
        Player Died;
        All;
        All;
    }

    conditions
    {
        Global Variable(E) == 0;
        Global Variable(R) != 0;
    }

    actions
    {
        Resurrect(Victim);
        Teleport(Victim, Value In Array(Global Variable(L), Global Variable(N)));
        Skip If(Compare(Victim, ==, Attacker), 2);
        Skip If(Compare(Player Variable(Attacker, Z), ==, 1), 1);
        Modify Player Score(Attacker, 9);
    }
}

rule("humans and zombies cant hurt same")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Is Game In Progress == True;
    }

    actions
    {
        Start Damage Modification(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 0)),
            Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 0)), 0,
            Receivers Damagers and Damage Percent);
        Start Damage Modification(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 1)),
            Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 1)), 0,
            Receivers Damagers and Damage Percent);
    }
}

rule("humans and zombies can hurt each other + kb")
{
    event
    {
        Player dealt damage;
        All;
        All;
    }

    conditions
    {
        Player Variable(Attacker, Z) != Player Variable(Victim, Z);
        Player Variable(Victim, Z) == 1;
    }

    actions
    {
        Skip If(Compare(Random Integer(1, 4), !=, 1), 1);
        Apply Impulse(Victim, Vector(0, 1, 0), 1.5, To Player, Cancel Contrary Motion);
        Apply Impulse(Victim, Vector(X Component Of(Vector Towards(Position Of(Attacker), Position Of(Victim))), 0, Z Component Of(
            Vector Towards(Position Of(Attacker), Position Of(Victim)))), Multiply(Event Damage, 0.9), To World, Cancel Contrary Motion);
    }
}

rule("tp dest")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Hero Of(Event Player) == Hero(Baptiste);
        Is Using Ability 1(Event Player) == True;
    }

    actions
    {
        Set Projectile Speed(Event Player, 100);
        Wait(0.016, Ignore Condition);
        Modify Player Variable(Event Player, B, Add, 1);
        Loop If(Compare(Player Variable(Event Player, B), <, 105));
        Set Player Variable(Event Player, B, 0);
    }
}

rule("zombie behavior")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Player Variable(Event Player, Z) == 1;
    }

    actions
    {
        Set Player Variable(Event Player, C, Position Of(Event Player));
        Start Forcing Player To Be Hero(Event Player, Global Variable(Z));
        Teleport(Event Player, Player Variable(Event Player, C));
        Stop All Heal Over Time(Event Player);
        Set Status(Event Player, Null, Rooted, 2);
        Wait(1, Ignore Condition);
        Clear Status(Event Player, Rooted);
        Press Button(Event Player, Ultimate);
        Skip If(Compare(Count Of(Filtered Array(Filtered Array(All Players(All Teams), Has Spawned(Current Array Element)), Compare(
            Player Variable(Current Array Element, Z), ==, 0))), !=, 0), 1);
        Set Global Variable(E, 1);
    }
}

rule("player selected hero")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Has Spawned(Event Player) == True;
        Global Variable(R) >= 3;
    }

    actions
    {
        Disallow Button(Event Player, Crouch);
        Wait(0.1, Ignore Condition);
        Teleport(Event Player, Value In Array(Global Variable(L), Global Variable(N)));
        Skip If(Compare(Global Variable(G), ==, 0), 1);
        Set Player Variable(Event Player, Z, 1);
        Wait(2, Ignore Condition);
        Allow Button(Event Player, Crouch);
    }
}

rule("burn = slow")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Has Status(Event Player, Burning) == True;
        Player Variable(Event Player, Z) == 1;
    }

    actions
    {
        Set Move Speed(Event Player, 75);
        Wait(5, Ignore Condition);
        Set Move Speed(Event Player, 100);
    }
}

rule("no hax for humans")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Has Status(Event Player, Hacked) == True;
        False == True;
    }

    actions
    {
        Set Status(Event Player, Null, Hacked, 9999);
        Wait(0.25, Ignore Condition);
        Clear Status(Event Player, Hacked);
    }
}

rule("no stun for humans")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Has Status(Event Player, Stunned) == True;
        Player Variable(Event Player, Z) == 0;
    }

    actions
    {
        Clear Status(Event Player, Stunned);
    }
}

rule("red orb")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(Q) == 1.5;
    }

    actions
    {
        Create Effect(All Players(All Teams), Orb, Red, Value In Array(Global Variable(L), Add(Global Variable(N), 1)), 1,
            Visible To Position and Radius);
    }
}

rule("normal zombies: rein")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(J) == 1;
    }

    actions
    {
        Set Global Variable(Z, Hero(Reinhardt));
    }
}

rule("hard zombies: winston")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(J) == 2;
    }

    actions
    {
        Set Global Variable(Z, Hero(Winston));
    }
}

rule("expert zombies: brig")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(J) == 3;
    }

    actions
    {
        Set Global Variable(Z, Hero(Brigitte));
    }
}

rule("map finished")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(J) == 4;
    }

    actions
    {
        Declare Player Victory(Last Of(Sorted Array(All Players(All Teams), Score Of(Current Array Element))));
    }
}

rule("zombies win")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(E) == 1;
    }

    actions
    {
        Stop All Damage Modifications;
        Wait(5, Ignore Condition);
        Skip If(Compare(Match Time, >, 0), 1);
        Set Global Variable(J, 4);
        Set Global Variable(R, 1);
    }
}

rule("humans win")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(E) == 2;
    }

    actions
    {
        Stop All Damage Modifications;
        Wait(0, Ignore Condition);
        Kill(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 1)), Null);
        Modify Player Score(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 0)), 100);
        Wait(1.5, Ignore Condition);
        Modify Global Variable(J, Add, 1);
        Wait(3.5, Ignore Condition);
        Set Match Time(1200);
        Set Global Variable(R, 1);
        Teleport(Filtered Array(All Players(All Teams), Compare(Player Variable(Current Array Element, Z), ==, 1)), Vector(0, -500,
            0));
    }
}

rule("skirmish rez")
{
    event
    {
        Player Died;
        All;
        All;
    }

    conditions
    {
        Match Time == 0;
        Global Variable(R) == 0;
    }

    actions
    {
        Wait(4, Ignore Condition);
        Respawn(Victim);
    }
}

rule("oasis city center death plane modif 1")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 186;
        Global Variable(N) == 3;
    }

    actions
    {
        Set Global Variable(D, 3);
    }
}

rule("oasis city center death plane modif 2")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 186;
        Global Variable(N) == 4;
    }

    actions
    {
        Set Global Variable(D, 1.5);
        Wait(0.25, Ignore Condition);
        Create Effect(All Players(All Teams), Sphere, Red, Vector(73.298, -96.5, 318.105), 100, Visible To Position and Radius);
    }
}

rule("oasis city center death plane modif 3")
{
    event
    {
        Ongoing - Global;
    }

    conditions
    {
        Global Variable(F) == 186;
        Or(Compare(Global Variable(N), <, 3), Compare(Global Variable(N), >, 5)) == True;
    }

    actions
    {
        Set Global Variable(D, -8.9);
    }
}

rule("baptiste no crouch jump")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Hero Of(Event Player) == Hero(Baptiste);
        Is Crouching(Event Player) == True;
    }

    actions
    {
        Set Status(Event Player, Null, Hacked, 0.016);
    }
}

rule("pharah debug")
{
    event
    {
        Ongoing - Each Player;
        All;
        All;
    }

    conditions
    {
        Is Communicating(Event Player, Need Healing) == True;
        Hero Of(Event Player) == Hero(Pharah);
    }

    actions
    {
        Destroy All Effects;
        Wait(1, Ignore Condition);
        Modify Global Variable(N, Add, 1);
        Set Global Variable(I, 0);
    }
}

`