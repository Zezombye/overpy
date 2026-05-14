
function abilityIconString(hero, button) {
    return "abilityIconString(" + hero + ", Button.ABILITY_1" + ")";
}
function rgb(r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


result = "eventPlayer.HeroSpecificShopInfo = " + JSON.stringify(`{}|${array[1]}|${array[2]}|{}|${array[4]}|${array[5]}|{}|${array[7]}|${array[8]}`) + ".format("+array[0]+", "+array[3]+", "+array[6]+`).split('|').concat(${array[9]})`;
