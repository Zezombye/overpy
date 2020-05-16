var result = "";


function calculateDist(x1, z1, x2, z2) {
    return Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(z1-z2, 2))
}
var spacing = 0.7;

var yWalls = [{
    "low": 9,
    "high": 30,
},{
    "low": -100,
    "high": -80,
},{
    "low": 125,
    "high": 140,
}]

for (var wall of walls) {

    //generate impulse rule
    result += '@Rule "map '+map+', zone '+wall.minZone+' - '+wall.maxZone+'"\n';
    result += "@Event eachPlayer\n"
    result += "@Team 1\n"

    if (wall.start > wall.end) {
        var tmp = wall.start;
        wall.start = wall.end;
        wall.end = tmp;
    }
    result += "if currentMap == "+map+" and currentZone >= "+wall.minZone+" and currentZone <= "+wall.maxZone+" and eventPlayer.getPosition()." + wall.axis + " " + (wall.block === "up" ? ">" : "<")+" "+(wall.value+(wall.block === "up" ? -1 : +1))+" and eventPlayer.getPosition()."+(wall.axis === "x" ? "z" : "x")+" > "+wall.start+" and eventPlayer.getPosition()."+(wall.axis === "x" ? "z" : "x")+" < "+wall.end+":\n";
    result += "\tdo:\n";
    result += "\t\teventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 0.016)\n";
    result += "\t\teventPlayer.applyImpulse(";
    if (wall.axis === "z" && wall.block === "up") {
        result += "Vector.BACKWARD";
    } else if (wall.axis === "z" && wall.block === "down") {
        result += "Vector.FORWARD";
    } else if (wall.axis === "x" && wall.block === "up") {
        result += "Vector.RIGHT";
    } else {
        result += "Vector.LEFT";
    } 
    result += ", 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)\n";
    result += "\t\twait(0.016)\n";
    result += "\twhile RULE_CONDITION\n\n"
    
    //generate create beams rule
    result += "@Rule \"create beams for map "+map+", zone "+wall.minZone+" - "+wall.maxZone+"\"\n";
    result += "@Event global\n";



    //x1, y1, z1, x2, y2, z2
    if (wall.axis === "x") {
        var wallBeam = [wall.value, yWalls[map].low, wall.start, wall.value, yWalls[map].high, wall.end];
    } else {
        var wallBeam = [wall.start, yWalls[map].low, wall.value, wall.end, yWalls[map].high, wall.value];
    }
    var startx = wallBeam[0]
    var starty = wallBeam[1]
    var startz = wallBeam[2]
    var endx = wallBeam[3]
    var endy = wallBeam[4]
    var endz = wallBeam[5]
    var vectx = endx-startx;
    var vectz = endz-startz;

    var dist = calculateDist(startx, startz, endx, endz);
    var nbBeams = dist/spacing+1;

    var stepvectx = vectx/(dist/spacing);
    var stepvectz = vectz/(dist/spacing);


    var currentx = startx;
    var currentz = startz;

    for (var i = 0; i < nbBeams; i++) {
        result += "createBeam(getAllPlayers(), Beam.GRAPPLE, vect("
                +(currentx+0.01)
                +","+starty
                +","+currentz
                +"),vect("+currentx
                +","+endy
                +","+currentz
        +"), Color.ORANGE, EffectReeval.VISIBILITY)\n"
        currentx += stepvectx;
        currentz += stepvectz;
    }

}

result;
