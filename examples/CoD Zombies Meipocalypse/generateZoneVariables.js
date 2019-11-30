var result = "";

result += "playerSpawns = ["+zoneData.map(x => x.playerSpawn).join(", ")+"]\n";
result += "zoneZWalls = [1000,1000,"+zoneData.map(x => x.zWallPos).join(", ")+"]\n";
result += "zoneUnlockLocations = ["+zoneData.map(x => x.unlockLocation).join(", ")+"]\n";
result += "zoneMinScores = ["+zoneData.map(x => x.cost).join(", ")+"]\n";
for (var i = 0; i < zoneData.length; i++) {
    result += "meiSpawns["+i+"] = ["+zoneData[i].meiSpawns.join(", ")+"]\n";
}
result;