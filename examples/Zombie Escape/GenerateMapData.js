
var result = "";
var sectionWallStarts = [];
var sectionWallLengths = [];
var sectionHoldTimes = [];
var sectionSpawns = [];
var sectionRadiuses = [];
var triggers = [];
var walls = [];
var tpStarts = [];
var tpDests = [];

result += "deathplaneY = "+mapData.deathplaneY+"\n";
var sectionWallStartIndex = 0;
var pastSectionWallLength = 0;

if (mapData.bossFight) {
    result += "bossSpawn = "+mapData.bossFight.bossSpawn+"\n";
    result += "bossFightHero = "+mapData.bossFight.bossFightHero+"\n";
    result += "bossFightType = "+mapData.bossFight.type+"\n";
    result += "bossFightZombieDeathplane = "+mapData.bossFight.zombieDeathplane+"\n";

    result += "generateArenaVectors("+mapData.bossFight.arena.bottomRight+", "+mapData.bossFight.arena.bottomLeft+", "+mapData.bossFight.arena.topLeft+")\n";

    result += "arenaLeftRightCrossThreshold = "+((mapData.bossFight.arena.leftRightCross[0]-mapData.bossFight.arena.leftRightCross[1])/2)+"\n";
    result += "arenaBottomTopCrossThreshold = "+((mapData.bossFight.arena.bottomTopCross[0]-mapData.bossFight.arena.bottomTopCross[1])/2)+"\n";
    result += "arenaLeftRightCrossDiff = arenaLeftRightCrossThreshold+("+mapData.bossFight.arena.leftRightCross[1]+")\n";
    result += "arenaBottomTopCrossDiff = arenaBottomTopCrossThreshold+("+mapData.bossFight.arena.bottomTopCross[1]+")\n";
    result += "arenaFloor = "+mapData.bossFight.arena.floor+"\n";
    result += "arenaCeiling = "+mapData.bossFight.arena.ceiling+"\n";
}

for (var section of mapData.sections) {
    sectionHoldTimes.push(section.holdTime);
    sectionSpawns.push(section.spawn);
    sectionRadiuses.push(section.radius);
    triggers.push(section.trigger);

    if (section.tp) {
        tpStarts.push(section.tp.start);
        tpDests.push(section.tp.dest);
    } else {
        tpStarts.push(vect(0, -1000, 0));
        tpDests.push(vect(0, -1000, 0));
    }
    sectionWallStarts.push(sectionWallStartIndex);
    sectionWallStartIndex += pastSectionWallLength;
    var sectionWallLength = pastSectionWallLength;
    var additionalSectionWallLength = 0;
    for (var wall of section.walls) {
        if (!wall.carryToNextSection) {
            sectionWallStartIndex++;
        } else {
            additionalSectionWallLength++;
        }
        sectionWallLength++;
        walls.push(wall.location);
    }
    sectionWallLengths.push(sectionWallLength);
    pastSectionWallLength = additionalSectionWallLength;
}

result += "sectionWallStarts = ["+sectionWallStarts.join(", ")+"]\n";
result += "sectionWallLengths = ["+sectionWallLengths.join(", ")+"]\n";
result += "sectionHoldTimes = ["+sectionHoldTimes.join(", ")+"]\n";
result += "sectionSpawns = ["+sectionSpawns.join(", ")+"]\n";
result += "sectionRadiuses = ["+sectionRadiuses.join(", ")+"]\n";
result += "triggers = ["+triggers.join(", ")+"]\n";
result += "walls = ["+walls.join(", ")+"]\n";
result += "tpStarts = ["+tpStarts.join(", ")+"]\n";
result += "tpDests = ["+tpDests.join(", ")+"]\n";

result;