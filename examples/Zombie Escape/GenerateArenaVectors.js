
function calculateVectMagnitude(vector) {
    return Math.sqrt(Math.pow(vector.x, 2)+Math.pow(vector.z, 2));
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
arenaBottomRight = ${bottomRight.toString()}
arenaBottomLeft = ${bottomLeft.toString()}
arenaTopLeft = ${topLeft.toString()}
arenaLeftRightVect = ${leftRightVect.toString()}
arenaBottomTopVect = ${bottomTopVect.toString()}
`;

var dist = calculateVectMagnitude(leftRightVect);
var stepvectx = leftRightVect.x/(dist/spacing);
var stepvectz = leftRightVect.z/(dist/spacing);
result += "arenaLeftRightNbBeams = "+(dist/spacing)+"\n";
result += "arenaLeftRightVectSpace = vect("+(stepvectx)+",0,"+(stepvectz)+")\n";

var dist = calculateVectMagnitude(bottomTopVect);
var stepvectx = bottomTopVect.x/(dist/spacing);
var stepvectz = bottomTopVect.z/(dist/spacing);

result += "arenaBottomTopNbBeams = "+(dist/spacing)+"\n";
result += "arenaBottomTopVectSpace = vect("+(stepvectx)+",0,"+(stepvectz)+")\n";

console.log(result);
result;