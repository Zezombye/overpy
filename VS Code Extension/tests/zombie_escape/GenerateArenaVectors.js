
function vect(x,y,z) {
    return ({
        x:x,
        y:y,
        z:z,
        toStr: function() {
            return "vect("+trimnb(this.x)+","+trimnb(this.y)+","+trimnb(this.z)+")";
        }
    });
}

function calculateVectMagnitude(vector) {
    return Math.sqrt(Math.pow(vector.x, 2)+Math.pow(vector.z, 2));
}

function trimnb(nb) {
    //nb = ""+nb;
    //return nb.substring(0, nb.indexOf('.')+4);
    return nb;
}

function calculateVect(pos1, pos2) {
    return vect(
        pos2.x-pos1.x,
        pos2.y-pos1.y,
        pos2.z-pos1.z
    );
}

var spacing = 1;
var leftRightVect = calculateVect(bottomLeft, bottomRight);
var bottomTopVect = calculateVect(bottomLeft, topLeft);

var result = `
arenaBottomRight = ${bottomRight.toStr()}
arenaBottomLeft = ${bottomLeft.toStr()}
arenaTopLeft = ${topLeft.toStr()}
arenaLeftRightVect = ${leftRightVect.toStr()}
arenaBottomTopVect = ${bottomTopVect.toStr()}
`;

var dist = calculateVectMagnitude(leftRightVect);
var stepvectx = leftRightVect.x/(dist/spacing);
var stepvectz = leftRightVect.z/(dist/spacing);
result += "arenaLeftRightNbBeams = "+trimnb((dist/spacing))+"\n";
result += "arenaLeftRightVectSpace = vect("+trimnb(stepvectx)+",0,"+trimnb(stepvectz)+")\n";

var dist = calculateVectMagnitude(bottomTopVect);
var stepvectx = bottomTopVect.x/(dist/spacing);
var stepvectz = bottomTopVect.z/(dist/spacing);

result += "arenaBottomTopNbBeams = "+trimnb(dist/spacing)+"\n";
result += "arenaBottomTopVectSpace = vect("+trimnb(stepvectx)+",0,"+trimnb(stepvectz)+")\n";

console.log(result);
result;