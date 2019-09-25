var wallBeams = [
    //x1, y1, z1, x2, y2, z2

    //-1.84 23 - choke wall
    [30.61, -1, -9.19, 28.77, 15, 13.81],

    //-9.38 0.02 - wall to 2nd point
    [18.38, -1, -24.5, 9, 20, -24.5],

    //-2 -0.03 - wall in building
    [-9.01, -1, -28.41, -11.01, 11, -28.44],

    //-36.08 -0.38 - wall to flank
    [-12.13, -30, -20.22, -27.21, 20, -20.60],
]

function calculateDist(x1, z1, x2, z2) {
    return Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(z1-z2, 2))
}

function trimnb(nb) {
    nb = ""+nb;
    return nb.substring(0, nb.indexOf('.')+4);
}

var result = "";
var spacing = 0.7;

for (var wallBeam of wallBeams) {
    var startx = wallBeam[0]
    var starty = wallBeam[1]
    var startz = wallBeam[2]
    var endx = wallBeam[3]
    var endy = wallBeam[4]
    var endz = wallBeam[5]
    var vectx = endx-startx;
    var vectz = endz-startz;

    console.log(vectx+" "+vectz);

    var dist = calculateDist(startx, startz, endx, endz);
    var nbBeams = dist/spacing+1;

    var stepvectx = vectx/(dist/spacing);
    var stepvectz = vectz/(dist/spacing);

    console.log("dist = "+dist);
    console.log("stepvectx = "+stepvectx);
    console.log("stepvectz = "+stepvectz);

    var currentx = startx;
    var currentz = startz;

    for (var i = 0; i < nbBeams; i++) {
        result += "createBeam(getAllPlayers(), Beam.GRAPPLE, vect("
                +trimnb(currentx+0.01)
                +","+trimnb(starty)
                +","+trimnb(currentz)
                +"),vect("+trimnb(currentx)
                +","+trimnb(endy)
                +","+trimnb(currentz)
        +"), Color.ORANGE, EffectReeval.VISIBILITY)\n"
        currentx += stepvectx;
        currentz += stepvectz;
    }
}

console.log(result);
result;