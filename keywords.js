"use strict";

//List of workshop "keywords" (conditions, values, actions).
//Each keyword set is an array containing arrays containing 2 arrays.
//The first array is the OverPy keywords, the second array is the Workshop keywords.
//The keywords are sorted by the english workshop keyword (with the exception of the event keywords).
//Note: each workshop keyword MUST be with no spaces!

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

var ruleKw = [
[["@Rule"], [
	"rule",
]],
];

//Event keywords
var eventKw = [

//The "event" keyword itself
[["@Event"], [
	"event",
]],
[["global"], [
	"ongoing-global",
]],
[["eachPlayer"], [
	"ongoing-eachplayer",
]],
[["playerTookDamage"], [
	"playerTookDamage",
]],
[["playerDealtDamage"], [
	"playerDealtDamage",
]],
[["playerDealtFinalBlow"], [
	"playerDealtFinalBlow",
]],
[["playerDied"], [
	"playerDied",
]],
[["playerEarnedElimination"], [
	"playerEarnedElimination",
]],
//Team All
[["all"], [
	"all",
]],
//Team 1
[["1"], [
	"team1",
]],
//Team 2
[["2"], [
	"team2",
]],
//Slots
[["slot0"], [
    "slot0",
]],
[["slot1"], [
    "slot1",
]],
[["slot2"], [
    "slot2",
]],
[["slot3"], [
    "slot3",
]],
[["slot4"], [
    "slot4",
]],
[["slot5"], [
    "slot5",
]],
[["slot6"], [
    "slot6",
]],
[["slot7"], [
    "slot7",
]],
[["slot8"], [
    "slot8",
]],
[["slot9"], [
    "slot9",
]],
[["slot10"], [
    "slot10",
]],
[["slot11"], [
    "slot11",
]],

];

//Action keywords. An action is defined as a function that does not return a value.
var actionKw = [

[["return"], [
	"abort",
]],
[["_abortIf"], [
	"abortIf",
]],
[["_&allowButton"], [
	"allowButton",
]],
[["impulse"], [
	"applyImpulse",
]],
[["bigMessage"], [
	"bigMessage",
]],
[["_&clearStatusEffect"], [
	"clearStatus",
]],
[["createEffect"], [
	"createEffect",
]],
[["createIcon"], [
	"createIcon",
]],
[["hudText"], [
	"createHudText",
]],
[["declarePlayerVictory"], [
	"declarePlayerVictory",
]],
[["destroyAllEffects()"], [
	"destroyAllEffects",
]],
[["destroyAllHudTexts()"], [
	"destroyAllHudText",
]],
[["destroyAllIcons()"], [
	"destroyAllIcons",
]],
[["disableGamemodeCompletion()"], [
	"disableBuilt-inGamemodeCompletion",
]],
[["_&disallowButton"], [
	"disallowButton",
]],
[["goToAssembleHeroes()"], [
	"goToAssembleHeroes",
]],
[["kill"], [
	"kill",
]],
[["_loop"], [
	"loop",
]],
[["_loopIf"], [
	"loopIf",
]],
[["_modifyGlobalVar"], [
	"modifyGlobalVariable",
]],
[["_&addToScore"], [
	"modifyPlayerScore",
]],
[["_modifyPlayerVar"], [
	"modifyPlayerVariable",
]],
[["_&forceButtonPress"], [
	"pressButton",
]],
[["_&resetHeroAvailability"], [
	"resetPlayerHeroAvailability",
]],
[["_&respawn"], [
	"respawn",
]],
[["_&resurrect"], [
	"resurrect",
]],
[["_setGlobalVar"], [
	"setGlobalVariable",
]],
[["setMatchTime"], [
	"setMatchTime",
]],
[["_&setMoveSpeed"], [
	"setMoveSpeed",
]],
[["_setPlayerVar"], [
	"setPlayerVariable",
]],
[["_&setProjectileGravity"], [
	"setProjectileGravity",
]],
[["_&setProjectileSpeed"], [
	"setProjectileSpeed",
]],
[["_&setStatusEffect"], [
	"setStatus",
]],
[["_skip"], [
	"skip",
]],
[["_skipIf"], [
	"skipIf",
]],
[["startDamageModification"], [
	"startDamageModification",
]],
[["_&startForcingHero"], [
	"startForcingPlayerToBeHero",
]],
[["stopAllDamageModifications"], [
	"stopAllDamageModifications",
]],
[["_&stopAllHoT"], [
	"stopAllHealOverTime",
]],
[["_&stopForcingCurrentHero"], [
	"stopForcingPlayerToBeHero",
]],
[["_&teleportTo"], [
	"teleport",
]],
[["wait"], [
	"wait",
]],

];

//A value function is defined as a function that returns a value.
var valueFuncKw = [

[["abs"], [
	"absoluteValue",
]],
[["_add"], [
	"add",
]],
[["_and"], [
	"and",
]],
[["attacker"], [
	"attacker",
]],
[["getAllPlayers"], [
	"allPlayers",
]],
[["_arrayContains"], [
	"arrayContains",
]],
[["_arraySlice"], [
	"arraySlice",
]],
[["_compare"], [
	"compare",
]],
[["_currentArrayElement"], [
	"currentArrayElement",
]],
[["len"], [
	"countOf",
]],
[["distance"], [
	"distanceBetween",
]],
[["_divide"], [
	"divide",
]],
[["_emptyArray"], [
	"emptyArray",
]],
[["eventDamage"], [
	"eventDamage",
]],
[["eventPlayer"], [
	"eventPlayer",
]],
[["_filteredArray"], [
	"filteredArray",
]],
[["_globalVar"], [
	"globalVariable",
]],
[["_&hasSpawned"], [
	"hasSpawned",
]],
[["_&hasStatusEffect"], [
	"hasStatus",
]],
[["_hero"], [
	"hero",
]],
[["heroIcon"], [
	"heroIconString",
]],
[["_&getCurrentHero"], [
	"heroOf",
]],
[["_&getHorizontalSpeed"], [
	"horizontalSpeedOf",
]],
[["_&isCommunicating"], [
	"isCommunicating",
]],
[["_&isCrouching"], [
	"isCrouching",
]],
[["_&isHoldingButton"], [
	"isButtonHeld",
]],
[["_&isUsingShift"], [
	"isUsingAbility1",
]],
[["_&isUsingE"], [
	"isUsingAbility2",
]],
[["isGameInProgress()"], [
	"isGameInProgress",
]],
[["getMatchTime()"], [
	"matchTime",
]],
[["_lastOf"], [
	"lastOf",
]],
[["_multiply"], [
	"multiply",
]],
[["nearestWalkablePosition"], [
	"nearestWalkablePosition",
]],
[["not "], [
	"not",
]],
[["_or"], [
	"or",
]],
[["_playerVar"], [
	"playerVariable",
]],
[["getPlayersInRadius"], [
	"playersWithinRadius",
]],
[["_&getPosition"], [
	"positionOf",
]],
[["random.randint"], [
	"randomInteger",
]],
[["random.shuffle"], [
	"randomizedArray",
]],
[["round"], [
	"roundToInteger",
]],
[["_&getScore"], [
	"scoreOf",
]],
[["_sortedArray"], [
	"sortedArray",
]],
[["_string"], [
	"string",
]],
[["_subtract"], [
	"subtract",
]],
[["_valueInArray"], [
	"valueInArray",
]],
[["vectorTowards"], [
	"vectorTowards",
]],
[["vector"], [
	"vector",
]],
[["_&getVelocity"], [
	"velocityOf",
]],
[["victim"], [
	"victim",
]],
[["worldVector"], [
	"worldVectorOf",
]],
[["_xComponentOf"], [
	"xComponentOf",
]],
[["_yComponentOf"], [
	"yComponentOf",
]],
[["_zComponentOf"], [
	"zComponentOf",
]],

];

var heroKw = [

[["Hero.ANA"], [
    "ana",
]],
[["Hero.ASHE"], [
    "ashe",
]],
[["Hero.BAPTISTE"], [
    "baptiste",
]],
[["Hero.BASTION"], [
    "bastion",
]],
[["Hero.BRIGITTE"], [
    "brigitte",
]],
[["Hero.DVA"], [
    "d.va",
]],
[["Hero.DOOMFIST"], [
    "doomfist",
]],
[["Hero.GENJI"], [
    "genji",
]],
[["Hero.HANZO"], [
    "hanzo",
]],
[["Hero.JUNKRAT"], [
    "junkrat",
]],
[["Hero.LUCIO"], [
    "lúcio",
]],
[["Hero.MCCREE"], [
    "mccree",
]],
[["Hero.MEI"], [
    "mei",
]],
[["Hero.MERCY"], [
    "mercy",
]],
[["Hero.MOIRA"], [
    "moira",
]],
[["Hero.ORISA"], [
    "orisa",
]],
[["Hero.PHARAH"], [
    "pharah",
]],
[["Hero.REAPER"], [
    "reaper",
]],
[["Hero.REINHARDT"], [
    "reinhardt",
]],
[["Hero.ROADHOG"], [
    "roadhog",
]],
[["Hero.SOLDIER"], [
    "soldier:76",
]],
[["Hero.SOMBRA"], [
    "sombra",
]],
[["Hero.SYMMETRA"], [
    "symmetra",
]],
[["Hero.TORBJORN"], [
    "torbjörn",
]],
[["Hero.TRACER"], [
    "tracer",
]],
[["Hero.WIDOWMAKER"], [
    "widowmaker",
]],
[["Hero.WINSTON"], [
    "winston",
]],
[["Hero.HAMMOND"], [
    "wreckingball",
]],
[["Hero.ZARYA"], [
    "zarya",
]],
[["Hero.ZENYATTA"], [
    "zenyatta",
]],

];

var boolKw = [

[["false"], [
	"false",
]],
[["null"], [
	"null",
]],
[["true"], [
	"true",
]],

];

var roundKw = [

[["ROUND_UP"], [
	"up",
]],

];

var operationKw = [

[["_appendToArray"], [
	"appendToArray",
]],

];

var visibleToKw = [


];

var teamKw = [

[["TEAM_ALL"], [
	"allTeams",
]],

];

var positionKw = [

[["Position.LEFT"], [
	"left",
]],
[["Position.TOP"], [
	"top",
]],
[["Position.RIGHT"], [
	"right",
]],

];

var colorKw = [

[["Color.BLUE"], [
	"blue",
]],
[["Color.GREEN"], [
	"green",
]],
[["Color.PURPLE"], [
	"purple",
]],
[["Color.RED"], [
	"red",
]],
[["Color.TEAM_1"], [
	"team1",
]],
[["Color.TEAM_2"], [
	"team2",
]],
[["Color.WHITE"], [
	"white",
]],
[["Color.YELLOW"], [
	"yellow",
]],

];

var effectKw = [

[["Effect.BAD_AURA"], [
    "badaura",
]],
[["Effect.BAD_AURA_SOUND"], [
    "badaurasound",
]],
[["Effect.BEACON_SOUND"], [
    "beaconsound",
]],
[["Effect.CLOUD"], [
    "cloud",
]],
[["Effect.DECAL_SOUND"], [
    "decalsound",
]],
[["Effect.ENERGY_SOUND"], [
    "energysound",
]],
[["Effect.GOOD_AURA"], [
    "goodaura",
]],
[["Effect.GOOD_AURA_SOUND"], [
    "goodaurasound",
]],
[["Effect.LIGHT_SHAFT"], [
    "lightshaft",
]],
[["Effect.ORB"], [
    "orb",
]],
[["Effect.PICK-UP_SOUND"], [
    "pick-upsound",
]],
[["Effect.RING"], [
    "ring",
]],
[["Effect.SMOKE_SOUND"], [
    "smokesound",
]],
[["Effect.SPARKLES"], [
    "sparkles",
]],
[["Effect.SPARKLES_SOUND"], [
    "sparklessound",
]],
[["Effect.SPHERE"], [
    "sphere",
]],

];

var iconKw = [

[["Icon.ARROW_DOWN"], [
    "arrow:down",
]],
[["Icon.ARROW_LEFT"], [
    "arrow:left",
]],
[["Icon.ARROW_RIGHT"], [
    "arrow:right",
]],
[["Icon.ARROW_UP"], [
    "arrow:up",
]],
[["Icon.ASTERISK"], [
    "asterisk",
]],
[["Icon.BOLT"], [
    "bolt",
]],
[["Icon.CHECKMARK"], [
    "checkmark",
]],
[["Icon.CIRCLE"], [
    "circle",
]],
[["Icon.CLUB"], [
    "club",
]],
[["Icon.DIAMOND"], [
    "diamond",
]],
[["Icon.DIZZY"], [
    "dizzy",
]],
[["Icon.EXCLAMATION_MARK"], [
    "exclamationmark",
]],
[["Icon.EYE"], [
    "eye",
]],
[["Icon.FIRE"], [
    "fire",
]],
[["Icon.FLAG"], [
    "flag",
]],
[["Icon.HALO"], [
    "halo",
]],
[["Icon.HAPPY"], [
    "happy",
]],
[["Icon.HEART"], [
    "heart",
]],
[["Icon.MOON"], [
    "moon",
]],
[["Icon.NO"], [
    "no",
]],
[["Icon.PLUS"], [
    "plus",
]],
[["Icon.POISON"], [
    "poison",
]],
[["Icon.POISON_2"], [
    "poison2",
]],
[["Icon.QUESTION_MARK"], [
    "questionmark",
]],
[["Icon.RADIOACTIVE"], [
    "radioactive",
]],
[["Icon.RECYCLE"], [
    "recycle",
]],
[["Icon.RING_THICK"], [
    "ringthick",
]],
[["Icon.RING_THIN"], [
    "ringthin",
]],
[["Icon.SAD"], [
    "sad",
]],
[["Icon.SKULL"], [
    "skull",
]],
[["Icon.SPADE"], [
    "spade",
]],
[["Icon.SPIRAL"], [
    "spiral",
]],
[["Icon.STOP"], [
    "stop",
]],
[["Icon.TRASHCAN"], [
    "trashcan",
]],
[["Icon.WARNING"], [
    "warning",
]],
[["Icon.CROSS"], [
    "x",
]],

];

var reevaluationKw = [

[["RECEIVERS_DAMAGERS_AND_DMGPERCENT"], [
	"receiversDamagersAndDamagePercent",
]],
[["VISIBILITY"], [
	"visibleTo",
]],
[["VISIBILITY_AND_POSITION"], [
	"visibleToAndPosition",
]],
[["VISIBILITY_AND_STRING"], [
	"visibleToAndString",
]],
[["VISIBILITY_POSITION_AND_RADIUS"], [
	"visibleToPositionAndRadius",
]],

];

var relativeKw = [

[["RELATIVE_TO_PLAYER"], [
	"toPlayer",
]],
[["RELATIVE_TO_WORLD"], [
	"toWorld",
]],

];

var impulseKw = [

[["CANCEL_CONTRARY_MOTION"], [
	"cancelContraryMotion",
]],
[["INCORPORATE_CONTRARY_MOTION"], [
	"incorporateContraryMotion",
]],

];

var buttonKw = [

[["Button.ABILITY_1"], [
    "ability1",
]],
[["Button.ABILITY_2"], [
    "ability2",
]],
[["Button.CROUCH"], [
    "crouch",
]],
[["Button.INTERACT"], [
    "interact",
]],
[["Button.JUMP"], [
    "jump",
]],
[["Button.PRIMARY_FIRE"], [
    "primaryfire",
]],
[["Button.SECONDARY_FIRE"], [
    "secondaryfire",
]],
[["Button.ULTIMATE"], [
    "ultimate",
]],

];


var waitKw = [

[["Wait.ABORT_WHEN_FALSE"], [
	"abortWhenFalse",
]],
[["Wait.IGNORE_CONDITION"], [
	"ignoreCondition",
]],
[["Wait.RESTART_WHEN_TRUE"], [
	"restartWhenTrue",
]],

];

var transformationKw = [

[["Transform.ROTATION"], [
	"rotation",
]],
[["Transform.ROTATION_AND_TRANSLATION"], [
	"rotationAndTranslation",
]],

];

var losCheckKw = [

[["LosCheck.OFF"], [
    "off",
]],
[["LosCheck.SURFACES"], [
    "surfaces",
]],
[["LosCheck.SURFACES_AND_ALL_BARRIERS"], [
    "surfacesandallbarriers",
]],
[["LosCheck.SURFACES_AND_ENEMY_BARRIERS"], [
    "surfacesandenemybarriers",
]],

];

var statusKw = [

[["Status.ASLEEP"], [
    "asleep",
]],
[["Status.BURNING"], [
    "burning",
]],
[["Status.FROZEN"], [
    "frozen",
]],
[["Status.HACKED"], [
    "hacked",
]],
[["Status.INVINCIBLE"], [
    "invincible",
]],
[["Status.KNOCKED_DOWN"], [
    "knockeddown",
]],
[["Status.PHASED_OUT"], [
    "phasedout",
]],
[["Status.ROOTED"], [
    "rooted",
]],
[["Status.STUNNED"], [
    "stunned",
]],
[["Status.UNKILLABLE"], [
    "unkillable",
]],

];

var commsKw = [

[["Comms.ACKNOWLEDGE"], [
    "acknowledge",
]],
[["Comms.EMOTE_DOWN"], [
    "emotedown",
]],
[["Comms.EMOTE_LEFT"], [
    "emoteleft",
]],
[["Comms.EMOTE_RIGHT"], [
    "emoteright",
]],
[["Comms.EMOTE_UP"], [
    "emoteup",
]],
[["Comms.GROUP_UP"], [
    "groupup",
]],
[["Comms.HELLO"], [
    "hello",
]],
[["Comms.NEED_HEALING"], [
    "needhealing",
]],
[["Comms.THANKS"], [
    "thanks",
]],
[["Comms.ULTIMATE_STATUS"], [
    "ultimatestatus",
]],
[["Comms.VOICE_LINE_DOWN"], [
    "voicelinedown",
]],
[["Comms.VOICE_LINE_LEFT"], [
    "voicelineleft",
]],
[["Comms.VOICE_LINE_RIGHT"], [
    "voicelineright",
]],
[["Comms.VOICE_LINE_UP"], [
    "voicelineup",
]],

];

//This is not a keyword list like the others (used for translation).
//Rather, it is a list of keywords that can be integrated into strings (eg: hero names, team names, numbers, etc).
var stringKw = [];
for (var i = 0; i < heroKw.length; i++) {
	stringKw.push(heroKw[i][0][0]);
}

//A constant is defined as anything that isn't a function (or variable).
var constantKw = heroKw.concat(boolKw).concat(roundKw).concat(operationKw).concat(visibleToKw).concat(teamKw).concat(positionKw).concat(colorKw).concat(reevaluationKw).concat(waitKw).concat(effectKw).concat(iconKw).concat(relativeKw).concat(impulseKw).concat(buttonKw).concat(transformationKw).concat(losCheckKw).concat(statusKw).concat(commsKw);


//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw).concat(heroKw);