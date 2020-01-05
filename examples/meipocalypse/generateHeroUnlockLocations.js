var result = "";

for (var i = 0; i < 31; i++) {
    result += `createInWorldText(getAllPlayers(), "Buy {}: \${}".format(heroIcon(getAllHeroes()[${i}]), costs[${i}]), unlockLocations[${i}]+vect(0,1,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_AND_STRING, Color.LIME_GREEN, SpecVisibility.ALWAYS)\n`;
}
result;