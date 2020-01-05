var result = "";

result += "playerSpawns = ["+zoneData.map(x => x.playerSpawn).join(", ")+"]\n";
result += "zoneZWalls = [1000,1000,"+zoneData.map(x => x.zWallPos).join(", ")+"]\n";
result += "zonesUnlockLocation = ["+zoneData.map(x => x.unlockLocation).join(", ")+"]\n";
result += "zonesUnlockMoney = ["+zoneData.map(x => x.unlockMoney).join(", ")+"]\n";
for (var i = 0; i < zoneData.length; i++) {
    result += "meiSpawns["+i+"] = ["+zoneData[i].meiSpawns.join(", ")+"]\n";
}
result;