/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

var currentLineNb = 0;
var currentColNb = 0;

//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule. (for decompilation)
var decompilerGotos = []

//Global variable used for the number of tabs.
//Is reset at each rule. (for decompilation)
var nbTabs = 0;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule. (for decompilation)
var lastLoop = -1;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
var currentArrayElementNames = [];

//Dictionary used for for loops.
//Should be empty at the beginning and end of each rule. (for compilation)
var forLoopVariables = {};

//Timer for for loop variables; when it is reached, delete the corresponding variable.
var forLoopTimers = [];

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition. (for decompilation)
var operatorPrecedenceStack = [];

//Arguments of the format() function for strings.
var formatArgs = [];

//Whether the decompilation at this time is under a normal "for" loop (for decompilation).
var isInNormalForLoop = false;

//Operator precedence, from lowest to highest.
var operatorPrecedence = {
	"or":1,
	"and":2,
	"not":3,
	"==":4,
	"!=":4,
	"<=":4,
	">=":4,
	">":4,
	"<":4,
	"+":5,
	"-":5,
	"*":6,
	"/":6,
	
	//Although in Python the modulo operator has the same precedence as * and /,
	//it must have a higher precedence because (a*b)%c is not the same as a*(b%c).
	"%":7,
	"**":8,
};

//Python operators, from lowest to highest precedence.
var pyOperators = [
	"=",
	"+=",
	"-=",
	"*=",
	"/=",
	"%=",
	"**=",
	"min=",
	"max=",
	"++",
	"--",
	"or",
	"and",
	"not",
	"in",
	"==",
	"!=",
	"<=",
	">=",
	">",
	"<",
	"-",
	"+",
	"/",
	"*",
	"%",
	"**",
];
/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

//List of workshop "keywords" (conditions, values, actions).
//Each keyword set is an array containing arrays containing 2 arrays.
//The first array is the OverPy keywords, the second array is the Workshop keywords.
//The keywords are sorted by the english workshop keyword (with the exception of the event keywords).
//Note: each workshop keyword MUST be with no spaces!

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

//Array of languages. As of now, only English is supported. This is only used during compilation.
var languages = [
	"en",
	
	//Not supported yet!
	"fr",
	"es",
	"it",
	"ru",
	"pl",
	"de",
	"pt",
	"ja",
	"kr",
	"zh",
]

var currentLanguage = languages.indexOf("en");

var ruleKw = [
[["@Rule"], [
	"rule",
]],
[["@Event"], [
	"event",
]],
[["_conditions"], [
	"conditions",
]],
[["_actions"], [
	"actions",
]],
];

//Event keywords
var eventKw = [

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
[["playerDealtHealing"], [
	"playerDealtHealing",
]],
[["playerReceivedHealing"], [
	"playerReceivedHealing",
]],
[["playerJoined"], [
	"playerJoinedMatch",
]],
[["playerLeft"], [
	"playerLeftMatch",
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
[["_abortIfConditionIsFalse"], [
	"abortIfConditionIsFalse",
]],
[["_abortIfConditionIsTrue"], [
	"abortIfConditionIsTrue",
]],
[["_&allowButton"], [
	"allowButton",
]],
[["_&applyImpulse"], [
	"applyImpulse",
]],
[["bigMessage"], [
	"bigMessage",
]],
[["_chaseGlobalVariableAtRate"], [
	"chaseGlobalVariableAtRate",
]],
[["_chaseGlobalVariableOverTime"], [
	"chaseGlobalVariableOverTime",
]],
[["_chasePlayerVariableAtRate"], [
	"chasePlayerVariableAtRate",
]],
[["_chasePlayerVariableOverTime"], [
	"chasePlayerVariableOverTime",
]],
[["_&clearStatusEffect"], [
	"clearStatus",
]],
[["_&communicate"], [
	"communicate",
]],
[["createEffect"], [
	"createEffect",
]],
[["hudText"], [
	"createHudText",
]],
[["createIcon"], [
	"createIcon",
]],
[["createInWorldText"], [
	"createIn-WorldText",
]],
[["damage"], [
	"damage",
]],
[["declareDraw"], [
	"declareMatchDraw",
]],
[["declarePlayerVictory"], [
	"declarePlayerVictory",
]],
[["declareRoundVictory"], [
	"declareRoundVictory",
]],
[["declareTeamVictory"], [
	"declareTeamVictory",
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
[["destroyAllInWorldText()"], [
	"destroyAllIn-WorldText",
]],
[["destroyEffect"], [
	"destroyEffect",
]],
[["destroyHudText"], [
	"destroyHudText",
]],
[["destroyIcon"], [
	"destroyIcon",
]],
[["destroyInWorldText"], [
	"destroyIn-WorldText",
]],
[["disableAnnouncer()"], [
	"disableBuilt-inGamemodeAnnouncer",
]],
[["disableGamemodeCompletion()"], [
	"disableBuilt-inGamemodeCompletion",
]],
[["disableMusic()"], [
	"disableBuilt-inGamemodeMusic",
]],
[["_&disableRespawn"], [
	"disableBuilt-inGamemodeRespawning",
]],
[["disableScoring()"], [
	"disableBuilt-inGamemodeScoring",
]],
[["_&disableDeathSpectateAllPlayers"], [
	"disableDeathSpectateAllPlayers",
]],
[["_&disableDeathSpectateTargetHud"], [
	"disableDeathSpectateTargetHud",
]],
[["_&disallowButton"], [
	"disallowButton",
]],
[["enableAnnouncer()"], [
	"enableBuilt-inGamemodeAnnouncer",
]],
[["enableGamemodeCompletion()"], [
	"enableBuilt-inGamemodeCompletion",
]],
[["enableMusic()"], [
	"enableBuilt-inGamemodeMusic",
]],
[["_&enableRespawn"], [
	"enableBuilt-inGamemodeRespawning",
]],
[["enableScoring()"], [
	"enableBuilt-inGamemodeScoring",
]],
[["_&enableDeathSpectateAllPlayers"], [
	"enableDeathSpectateAllPlayers",
]],
[["_&enableDeathSpectateTargetHud"], [
	"enableDeathSpectateTargetHud",
]],
[["goToAssembleHeroes()"], [
	"goToAssembleHeroes",
]],
[["heal"], [
	"heal",
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
[["_loopIfConditionIsFalse"], [
	"loopIfConditionIsFalse",
]],
[["_loopIfConditionIsTrue"], [
	"loopIfConditionIsTrue",
]],
[["_modifyGlobalVar"], [
	"modifyGlobalVariable",
]],
[["_modifyGlobalVarAtIndex"], [
	"modifyGlobalVariableAtIndex",
]],
[["_&addToScore"], [
	"modifyPlayerScore",
]],
[["_modifyPlayerVar"], [
	"modifyPlayerVariable",
]],
[["_modifyPlayerVarAtIndex"], [
	"modifyPlayerVariableAtIndex",
]],
[["addToTeamScore"], [
	"modifyTeamScore",
]],
[["pauseMatchTime()"], [
	"pauseMatchTime",
]],
[["playEffect"], [
	"playEffect",
]],
[["_&preloadHero"], [
	"preloadHero",
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
[["_&setAbility1Enabled"], [
	"setAbility1Enabled",
]],
[["_&setAbility2Enabled"], [
	"setAbility2Enabled",
]],
[["_&setAimSpeed"], [
	"setAimSpeed",
]],
[["_&setDamageDealt"], [
	"setDamageDealt",
]],
[["_&setDamageReceived"], [
	"setDamageReceived",
]],
[["_&setFacing"], [
	"setFacing",
]],
[["_setGlobalVar"], [
	"setGlobalVariable",
]],
[["_setGlobalVarAtIndex"], [
	"setGlobalVariableAtIndex",
]],
[["_&setGravity"], [
	"setGravity",
]],
[["_&setHealingDealt"], [
	"setHealingDealt",
]],
[["_&setHealingReceived"], [
	"setHealingReceived",
]],
[["_&setInvisibility"], [
	"setInvisible",
]],
[["setMatchTime"], [
	"setMatchTime",
]],
[["_&setMaxHealth"], [
	"setMaxHealth",
]],
[["_&setMoveSpeed"], [
	"setMoveSpeed",
]],
[["setObjectiveDescription"], [
	"setObjectiveDescription",
]],
[["_&setAllowedHeroes"], [
	"setPlayerAllowedHeroes",
]],
[["_&setScore"], [
	"setPlayerScore",
]],
[["_setPlayerVar"], [
	"setPlayerVariable",
]],
[["_setPlayerVarAtIndex"], [
	"setPlayerVariableAtIndex",
]],
[["_&setPrimaryFireEnabled"], [
	"setPrimaryFireEnabled",
]],
[["_&setProjectileGravity"], [
	"setProjectileGravity",
]],
[["_&setProjectileSpeed"], [
	"setProjectileSpeed",
]],
[["_&setRespawnTime"], [
	"setRespawnMaxTime",
]],
[["_&setSecondaryFireEnabled"], [
	"setSecondaryFireEnabled",
]],
[["setSlowMotion"], [
	"setSlowMotion",
]],
[["_&setStatusEffect"], [
	"setStatus",
]],
[["setTeamScore"], [
	"setTeamScore",
]],
[["_&setUltEnabled"], [
	"setUltimateAbilityEnabled",
]],
[["_&setUltCharge"], [
	"setUltimateCharge",
]],
[["_skip"], [
	"skip",
]],
[["_skipIf"], [
	"skipIf",
]],
[["smallMessage"], [
	"smallMessage",
]],
[["_&startAcceleration"], [
	"startAccelerating",
]],
[["_&setCamera"], [
	"startCamera",
]],
[["startDamageModification"], [
	"startDamageModification",
]],
[["_&startDoT"], [
	"startDamageOverTime",
]],
[["_&startFacing"], [
	"startFacing",
]],
[["_&startForcingHero"], [
	"startForcingPlayerToBeHero",
]],
[["startForcingSpawn"], [
	"startForcingSpawnRoom",
]],
[["_&startForcingThrottle"], [
	"startForcingThrottle",
]],
[["_&startHoT"], [
	"startHealOverTime",
]],
[["_&startForcingButton"], [
	"startHoldingButton",
]],
[["_&startTransformingThrottle"], [
	"startTransformingThrottle",
]],
[["_&stopAcceleration"], [
	"stopAccelerating",
]],
[["stopAllDamageModifications"], [
	"stopAllDamageModifications",
]],
[["_&stopAllDoT"], [
	"stopAllDamageOverTime",
]],
[["_&stopAllHoT"], [
	"stopAllHealOverTime",
]],
[["_&stopCamera"], [
	"stopCamera",
]],
[["_stopChasingGlobalVariable"], [
	"stopChasingGlobalVariable",
]],
[["_stopChasingPlayerVariable"], [
	"stopChasingPlayerVariable",
]],
[["stopDamageModification"], [
	"stopDamageModification",
]],
[["stopDoT"], [
	"stopDamageOverTime",
]],
[["_&stopFacing"], [
	"stopFacing",
]],
[["_&stopForcingCurrentHero"], [
	"stopForcingPlayerToBeHero",
]],
[["stopForcingSpawn"], [
	"stopForcingSpawnRoom",
]],
[["_&stopForcingThrottle"], [
	"stopForcingThrottle",
]],
[["stopHoT"], [
	"stopHealOverTime",
]],
[["_&stopForcingButton"], [
	"stopHoldingButton",
]],
[["_&stopTransformingThrottle"], [
	"stopTransformingThrottle",
]],
[["_&teleport"], [
	"teleport",
]],
[["unpauseMatchTime()"], [
	"unpauseMatchTime",
]],
[["_wait"], [
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
[["getDeadPlayers"], [
	"allDeadPlayers",
]],
[["getAllHeroes()"], [
	"allHeroes",
]],
[["getLivingPlayers"], [
	"allLivingPlayers",
]],
[["_&getAllowedHeroes"], [
	"allowedHeroes",
]],
[["getPlayers"], [
	"allPlayers",
]],
[["getPlayersNotOnObjective"], [
	"allPlayersNotOnObjective",
]],
[["getPlayersOnObjective"], [
	"allPlayersOnObjective",
]],
[["_&getAltitude"], [
	"altitudeOf",
]],
[["_and"], [
	"and",
]],
[["angleDifference"], [
	"angleDifference",
]],
[["_appendToArray"], [
	"appendToArray",
]],
[["_arrayContains"], [
	"arrayContains",
]],
[["_arraySlice"], [
	"arraySlice",
]],
[["attacker"], [
	"attacker",
]],
[["Vector.BACKWARD"], [
	"backward",
]],
[["_&getClosestPlayer"], [
	"closestPlayerTo",
]],
[["_compare"], [
	"compare",
]],
[["getControlScorePercentage"], [
	"controlModeScoringPercentage",
]],
[["getControlScoringTeam"], [
	"controlModeScoringTeam",
]],
[["cosDeg"], [
	"cosineFromDegrees",
]],
[["cos"], [
	"cosineFromRadians",
]],
[["len"], [
	"countOf",
]],
[["crossProduct"], [
	"crossProduct",
]],
[["_currentArrayElement"], [
	"currentArrayElement",
]],
[["angleToDirection"], [
	"directionFromAngles",
]],
[["directionTowards"], [
	"directionTowards",
]],
[["distance"], [
	"distanceBetween",
]],
[["_divide"], [
	"divide",
]],
[["dotProduct"], [
	"dotProduct",
]],
[["Vector.DOWN"], [
	"down",
]],
[["_emptyArray"], [
	"emptyArray",
]],
[["entityExists"], [
	"entityExists",
]],
[["eventDamage"], [
	"eventDamage",
]],
[["eventHealing"], [
	"eventHealing",
]],
[["eventPlayer"], [
	"eventPlayer",
]],
[["eventWasCriticalHit"], [
	"eventWasCriticalHit",
]],
[["_&getEyePosition"], [
	"eyePosition",
]],
[["_&getFacingDirection"], [
	"facingDirectionOf",
]],
[["getFarthestPlayer"], [
	"farthestPlayerFrom",
]],
[["_filteredArray"], [
	"filteredArray",
]],
[["_firstOf"], [
	"firstOf",
]],
[["getFlagPosition"], [
	"flagPosition",
]],
[["Vector.FORWARD"], [
	"forward",
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
[["healee"], [
	"healee",
]],
[["healer"], [
	"healer",
]],
[["_&getHealth"], [
	"health",
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
[["horizontalAngleFromDirection"], [
	"horizontalAngleFromDirection",
]],
[["horizontalAngleTowards"], [
	"horizontalAngleTowards",
]],
[["_&getHorizontalFacingAngle"], [
	"horizontalFacingAngleOf",
]],
[["_&getHorizontalSpeed"], [
	"horizontalSpeedOf",
]],
[["hostPlayer"], [
	"hostPlayer",
]],
[["_indexOfArrayValue"], [
	"indexOfArrayValue",
]],
[["_&isAlive"], [
	"isAlive",
]],
[["isAssemblingHeroes()"], [
	"isAssemblingHeroes",
]],
[["isMatchBetweenRounds()"], [
	"isBetweenRounds",
]],
[["_&isHoldingButton"], [
	"isButtonHeld",
]],
[["_&isCommunicating"], [
	"isCommunicating",
]],
[["_&isCommunicatingAnything"], [
	"isCommunicatingAny",
]],
[["_&isCommunicatingEmote"], [
	"isCommunicatingAnyEmote",
]],
[["_&isCommunicatingVoiceline"], [
	"isCommunicatingAnyVoiceline",
]],
[["isControlPointLocked()"], [
	"isControlModePointLocked",
]],
[["_&isCrouching"], [
	"isCrouching",
]],
[["isInSuddenDeath()"], [
	"isCtfModeInSuddenDeath",
]],
[["_&isDead"], [
	"isDead",
]],
[["_&isFiringPrimaryFire"], [
	"isFiringPrimary",
]],
[["_&isFiringSecondaryFire"], [
	"isFiringSecondary",
]],
[["isFlagAtBase"], [
	"isFlagAtBase",
]],
[["isFlagBeingCarried"], [
	"isFlagBeingCarried",
]],
[["isGameInProgress()"], [
	"isGameInProgress",
]],
[["_!teamHasHero"], [
	"isHeroBeingPlayed",
]],
[["_&isInAir"], [
	"isInAir",
]],
[["_isInLineOfSight"], [
	"isInLineOfSight",
]],
[["isInSetup()"], [
	"isInSetup",
]],
[["_&isInSpawnRoom"], [
	"isInSpawnRoom",
]],
[["_&isInViewAngle"], [
	"isInViewAngle",
]],
[["isMatchComplete()"], [
	"isMatchComplete",
]],
[["_&isMoving"], [
	"isMoving",
]],
[["isObjectiveComplete"], [
	"isObjectiveComplete",
]],
[["_&isOnGround"], [
	"isOnGround",
]],
[["_&isOnObjective"], [
	"isOnObjective",
]],
[["_&isOnWall"], [
	"isOnWall",
]],
[["_&isOnFire"], [
	"isPortraitOnFire",
]],
[["_&isStanding"], [
	"isStanding",
]],
[["isTeamOnDefense"], [
	"isTeamOnDefense",
]],
[["isTeamOnOffense"], [
	"isTeamOnOffense",
]],
[["_all"], [
	"isTrueForAll",
]],
[["_any"], [
	"isTrueForAny",
]],
[["_&isUsingAbility1"], [
	"isUsingAbility1",
]],
[["_&isUsingAbility2"], [
	"isUsingAbility2",
]],
[["_&isUsingUltimate"], [
	"isUsingUltimate",
]],
[["isWaitingForPlayers()"], [
	"isWaitingForPlayers",
]],
[["getLastCreatedEntity()"], [
	"lastCreatedEntity",
]],
[["getLastDamageModification()"], [
	"lastDamageModificationId",
]],
[["getLastDoT()"], [
	"lastDamageOverTimeId",
]],
[["getLastHoT()"], [
	"lastHealOverTimeId",
]],
[["_lastOf"], [
	"lastOf",
]],
[["getLastCreatedText()"], [
	"lastTextId",
]],
[["Vector.LEFT"], [
	"left",
]],
[["localVector"], [
	"localVectorOf",
]],
[["getMatchRound()"], [
	"matchRound",
]],
[["getMatchTime()"], [
	"matchTime",
]],
[["max"], [
	"max",
]],
[["_&getMaxHealth"], [
	"maxHealth",
]],
[["min"], [
	"min",
]],
[["_modulo"], [
	"modulo",
]],
[["_multiply"], [
	"multiply",
]],
[["nearestWalkablePosition"], [
	"nearestWalkablePosition",
]],
[["normalize"], [
	"normalize",
]],
[["_&getNormalizedHealth"], [
	"normalizedHealth",
]],
[["not"], [
	"not",
]],
[["getNumberOfDeadPlayers"], [
	"numberOfDeadPlayers",
]],
[["_&getNumberOfDeaths"], [
	"numberOfDeaths",
]],
[["_&getNumberOfElims"], [
	"numberOfEliminations",
]],
[["_&getNumberOfFinalBlows"], [
	"numberOfFinalBlows",
]],
[["_!getNumberOfHeroes"], [
	"numberOfHeroes",
]],
[["getNumberOfLivingPlayers"], [
	"numberOfLivingPlayers",
]],
[["getNumberOfPlayers"], [
	"numberOfPlayers",
]],
[["getNumberOfPlayersOnObjective"], [
	"numberOfPlayersOnObjective",
]],
[["getCurrentObjective"], [
	"objectiveIndex",
]],
[["getObjectivePosition"], [
	"objectivePosition",
]],
[["getOppositeTeam"], [
	"oppositeTeamOf",
]],
[["_or"], [
	"or",
]],
[["getPayloadPosition"], [
	"payloadPosition",
]],
[["getPayloadProgressPercentage"], [
	"payloadProgressPercentage",
]],
[["getFlagCarrier"], [
	"playerCarryingFlag",
]],
[["_&getPlayerClosestToReticle"], [
	"playerClosestToReticle",
]],
[["getPlayersInSlot"], [
	"playersInSlot",
]],
[["_&getPlayersInViewAngle"], [
	"playersInViewAngle",
]],
[["_!getPlayersOnHero"], [
	"playersOnHero",
]],
[["getPlayersInRadius"], [
	"playersWithinRadius",
]],
[["_playerVar"], [
	"playerVariable",
]],
[["getCapturePercentage"], [
	"pointCapturePercentage",
]],
[["_&getPosition"], [
	"positionOf",
]],
[["_raiseToPower"], [
	"raiseToPower",
]],
[["random.randint"], [
	"randomInteger",
]],
[["random.shuffle"], [
	"randomizedArray",
]],
[["random.uniform"], [
	"randomReal",
]],
[["random.choice"], [
	"randomValueInArray",
]],
[["_getNormal"], [
	"raycastHitNormal",
]],
[["_getPlayerHit"], [
	"raycastHitPlayer",
]],
[["_getHitPosition"], [
	"raycastHitPosition",
]],
[["_removeFromArray"], [
	"removeFromArray",
]],
[["Vector.RIGHT"], [
	"right",
]],
[["_round"], [
	"roundToInteger",
]],
[["_&getScore"], [
	"scoreOf",
]],
[["getServerLoad()"], [
	"serverLoad",
]],
[["getAverageServerLoad()"], [
	"serverLoadAverage",
]],
[["getPeakServerLoad()"], [
	"serverLoadPeak",
]],
[["sinDeg"], [
	"sineFromDegrees",
]],
[["sin"], [
	"sineFromRadians",
]],
[["_&getSlot"], [
	"slotOf",
]],
[["_sortedArray"], [
	"sortedArray",
]],
[["_&getSpeed"], [
	"speedOf",
]],
[["_&getSpeedInDirection"], [
	"speedOfInDirection",
]],
[["sqrt"], [
	"squareRoot",
]],
[["_string"], [
	"string",
]],
[["_subtract"], [
	"subtract",
]],
[["_&getTeam"], [
	"teamOf",
]],
[["teamScore"], [
	"teamScore",
]],
[["_&getThrottle"], [
	"throttleOf",
]],
[["getTotalTimeElapsed"], [
	"totalTimeElapsed",
]],
[["_&getUltCharge"], [
	"ultimateChargePercent",
]],
[["Vector.UP"], [
	"up",
]],
[["_valueInArray"], [
	"valueInArray",
]],
[["vect"], [
	"vector",
]],
[["vectorTowards"], [
	"vectorTowards",
]],
[["_&getVelocity"], [
	"velocityOf",
]],
[["verticalAngleOfDirection"], [
	"verticalAngleFromDirection",
]],
[["verticalAngleTowards"], [
	"verticalAngleTowards",
]],
[["_&getVerticalFacingAngle"], [
	"verticalFacingAngleOf",
]],
[["_&getVerticalSpeed"], [
	"verticalSpeedOf",
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
[["Hero.SIGMA"], [
    "sigma",
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

[["_roundUp"], [
	"up",
]],
[["_roundDown"], [
	"down",
]],
[["_roundToNearest"], [
	"toNearest",
]],

];

var operationKw = [

[["_add"], [
    "add",
]],
[["_appendToArray"], [
    "appendtoarray",
]],
[["_divide"], [
    "divide",
]],
[["_max"], [
    "max",
]],
[["_min"], [
    "min",
]],
[["_modulo"], [
    "modulo",
]],
[["_multiply"], [
    "multiply",
]],
[["_raiseToPower"], [
    "raisetopower",
]],
[["_removeFromArrayByIndex"], [
    "removefromarraybyindex",
]],
[["_removeFromArrayByValue"], [
    "removefromarraybyvalue",
]],
[["_subtract"], [
    "subtract",
]],

];

var teamKw = [

[["Team.ALL"], [
	"allTeams",
]],
[["Team.1"], [
	"team1",
]],
[["Team.2"], [
	"team2",
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
[["Effect.PICKUP_SOUND"], [
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

var playEffectKw = [

[["Effect.BAD_EXPLOSION"], [
    "badexplosion",
]],
[["Effect.BAD_PICKUP_EFFECT"], [
    "badpickupeffect",
]],
[["Effect.BUFF_EXPLOSION_SOUND"], [
    "buffexplosionsound",
]],
[["Effect.BUFF_IMPACT_SOUND"], [
    "buffimpactsound",
]],
[["Effect.DEBUFF_IMPACT_SOUND"], [
    "debuffimpactsound",
]],
[["Effect.EXPLOSION_SOUND"], [
    "explosionsound",
]],
[["Effect.GOOD_EXPLOSION"], [
    "goodexplosion",
]],
[["Effect.GOOD_PICKUP_EFFECT"], [
    "goodpickupeffect",
]],
[["Effect.RING_EXPLOSION"], [
    "ringexplosion",
]],
[["Effect.RING_EXPLOSION_SOUND"], [
    "ringexplosionsound",
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

[["Reeval.DESTINATION_AND_RATE"], [
	"destinationAndRate",
]],
[["Reeval.DESTINATION_AND_DURATION"], [
	"destinationAndDuration",
]],
[["Reeval.DIRECTION_AND_TURN_RATE"], [
	"directionAndTurnRate",
]],
[["Reeval.DIRECTION_RATE_AND_MAX_SPEED"], [
	"directionRateAndMaxSpeed",
]],
[["Reeval.POSITION"], [
	"position",
]],
[["Reeval.POSITION_AND_RADIUS"], [
	"positionAndRadius",
]],
[["Reeval.NONE"], [
	"none",
]],
[["Reeval.STRING"], [
	"string",
]],
[["Reeval.RECEIVERS_AND_DAMAGERS"], [
	"receiversAndDamagers",
]],
[["Reeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT"], [
	"receiversDamagersAndDamagePercent",
]],
[["Reeval.VISIBILITY"], [
	"visibleTo",
]],
[["Reeval.VISIBILITY_AND_POSITION"], [
	"visibleToAndPosition",
]],
[["Reeval.VISIBILITY_AND_STRING"], [
	"visibleToAndString",
]],
[["Reeval.VISIBILITY_POSITION_AND_RADIUS"], [
	"visibleToPositionAndRadius",
]],
[["Reeval.VISIBILITY_POSITION_AND_STRING"], [
	"visibleToPositionAndString",
]],

];

var relativeKw = [

[["Relativity.TO_PLAYER"], [
	"toPlayer",
]],
[["Relativity.TO_WORLD"], [
	"toWorld",
]],

];

var impulseKw = [

[["Impulse.CANCEL_CONTRARY_MOTION"], [
	"cancelContraryMotion",
]],
[["Impulse.INCORPORATE_CONTRARY_MOTION"], [
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
[["LosCheck.BLOCKED_BY_ENEMY_BARRIERS"], [
    "enemyBarriersBlockLos",
]],
[["LosCheck.BLOCKED_BY_ALL_BARRIERS"], [
    "allBarriersBlockLos",
]],
[["LosCheck.PASS_THROUGH_BARRIERS"], [
    "barriersDoNotBlockLos",
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

var clipKw = [

[["Clip.SURFACES"], [
	"clipAgainstSurfaces",
]],
[["Clip.NONE"], [
	"doNotClip",
]],

];

var invisKw = [

[["Invis.ALL"], [
	"all",
]],
[["Invis.ENEMIES"], [
	"enemies",
]],
[["Invis.NONE"], [
	"none",
]],

];

//Global variables, used to convert to names during decompilation.
var globalVarKw = [

[["A"], [
    "A",
]],
[["B"], [
    "B",
]],
[["C"], [
    "C",
]],
[["D"], [
    "D",
]],
[["E"], [
    "E",
]],
[["F"], [
    "F",
]],
[["G"], [
    "G",
]],
[["H"], [
    "H",
]],
[["I"], [
    "I",
]],
[["J"], [
    "J",
]],
[["K"], [
    "K",
]],
[["L"], [
    "L",
]],
[["M"], [
    "M",
]],
[["N"], [
    "N",
]],
[["O"], [
    "O",
]],
[["P"], [
    "P",
]],
[["Q"], [
    "Q",
]],
[["R"], [
    "R",
]],
[["S"], [
    "S",
]],
[["T"], [
    "T",
]],
[["U"], [
    "U",
]],
[["V"], [
    "V",
]],
[["W"], [
    "W",
]],
[["X"], [
    "X",
]],
[["Y"], [
    "Y",
]],
[["Z"], [
    "Z",
]],

];

var playerVarKw = [

[["A"], [
    "A",
]],
[["B"], [
    "B",
]],
[["C"], [
    "C",
]],
[["D"], [
    "D",
]],
[["E"], [
    "E",
]],
[["F"], [
    "F",
]],
[["G"], [
    "G",
]],
[["H"], [
    "H",
]],
[["I"], [
    "I",
]],
[["J"], [
    "J",
]],
[["K"], [
    "K",
]],
[["L"], [
    "L",
]],
[["M"], [
    "M",
]],
[["N"], [
    "N",
]],
[["O"], [
    "O",
]],
[["P"], [
    "P",
]],
[["Q"], [
    "Q",
]],
[["R"], [
    "R",
]],
[["S"], [
    "S",
]],
[["T"], [
    "T",
]],
[["U"], [
    "U",
]],
[["V"], [
    "V",
]],
[["W"], [
    "W",
]],
[["X"], [
    "X",
]],
[["Y"], [
    "Y",
]],
[["Z"], [
    "Z",
]],

];

//This is not a keyword list like the others (used for translation).
//Rather, it is a list of keywords that can be integrated into strings (eg: hero names, team names, numbers, etc).
var stringKw = [];
for (var i = 0; i < heroKw.length; i++) {
	stringKw.push(heroKw[i][0][0]);
}

//A constant is defined as anything that isn't a function (or variable).
var constantKw = heroKw.concat(boolKw).concat(roundKw).concat(operationKw).concat(teamKw).concat(positionKw).concat(colorKw).concat(reevaluationKw).concat(waitKw).concat(effectKw).concat(iconKw).concat(relativeKw).concat(impulseKw).concat(buttonKw).concat(transformationKw).concat(losCheckKw).concat(statusKw).concat(commsKw).concat(playEffectKw).concat(clipKw).concat(invisKw);


//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw);

var funcKw = actionKw.concat(valueFuncKw);/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var emptyStrKw = [
[[""], [
    "",
]],
]

var normalStrKw = [

[["!"], [
    "!",
]],
[["!!"], [
    "!!",
]],
[["!!!"], [
    "!!!",
]],
[["*"], [
    "*",
]],
[["----------"], [
    "----------",
]],
[["..."], [
    "...",
]],
[["?"], [
    "?",
]],
[["??"], [
    "??",
]],
[["???"], [
    "???",
]],
[["Abilities"], [
    "Abilities",
]],
[["Ability"], [
    "Ability",
]],
[["Ability 1"], [
    "Ability 1",
]],
[["Ability 2"], [
    "Ability 2",
]],
[["Alert"], [
    "Alert",
]],
[["Alive"], [
    "Alive",
]],
[["Allies"], [
    "Allies",
]],
[["Ally"], [
    "Ally",
]],
[["Ammunition"], [
    "Ammunition",
]],
[["Angle"], [
    "Angle",
]],
[["Attack"], [
    "Attack",
]],
[["Attacked"], [
    "Attacked",
]],
[["Attacking"], [
    "Attacking",
]],
[["Attempt"], [
    "Attempt",
]],
[["Attempts"], [
    "Attempts",
]],
[["Average"], [
    "Average",
]],
[["Avoid"], [
    "Avoid",
]],
[["Avoided"], [
    "Avoided",
]],
[["Avoiding"], [
    "Avoiding",
]],
[["Backward"], [
    "Backward",
]],
[["Bad"], [
    "Bad",
]],
[["Ban"], [
    "Ban",
]],
[["Banned"], [
    "Banned",
]],
[["Banning"], [
    "Banning",
]],
[["Best"], [
    "Best",
]],
[["Better"], [
    "Better",
]],
[["Bid"], [
    "Bid",
]],
[["Bids"], [
    "Bids",
]],
[["Block"], [
    "Block",
]],
[["Blocked"], [
    "Blocked",
]],
[["Blocking"], [
    "Blocking",
]],
[["Blue"], [
    "Blue",
]],
[["Bonus"], [
    "Bonus",
]],
[["Bonuses"], [
    "Bonuses",
]],
[["Boss"], [
    "Boss",
]],
[["Bosses"], [
    "Bosses",
]],
[["Bought"], [
    "Bought",
]],
[["Build"], [
    "Build",
]],
[["Building"], [
    "Building",
]],
[["Built"], [
    "Built",
]],
[["Burn"], [
    "Burn",
]],
[["Burning"], [
    "Burning",
]],
[["Burnt"], [
    "Burnt",
]],
[["Buy"], [
    "Buy",
]],
[["Buying"], [
    "Buying",
]],
[["Capture"], [
    "Capture",
]],
[["Captured"], [
    "Captured",
]],
[["Capturing"], [
    "Capturing",
]],
[["Caution"], [
    "Caution",
]],
[["Center"], [
    "Center",
]],
[["Challenge Accepted"], [
    "Challenge Accepted",
]],
[["Charisma"], [
    "Charisma",
]],
[["Chase"], [
    "Chase",
]],
[["Chased"], [
    "Chased",
]],
[["Chasing"], [
    "Chasing",
]],
[["Checkpoint"], [
    "Checkpoint",
]],
[["Checkpoints"], [
    "Checkpoints",
]],
[["Cloud"], [
    "Cloud",
]],
[["Clouds"], [
    "Clouds",
]],
[["Club"], [
    "Club",
]],
[["Clubs"], [
    "Clubs",
]],
[["Combo"], [
    "Combo",
]],
[["Come Here"], [
    "Come Here",
]],
[["Condition"], [
    "Condition",
]],
[["Congratulations"], [
    "Congratulations",
]],
[["Connect"], [
    "Connect",
]],
[["Connected"], [
    "Connected",
]],
[["Connecting"], [
    "Connecting",
]],
[["Constitution"], [
    "Constitution",
]],
[["Control Point"], [
    "Control Point",
]],
[["Control Points"], [
    "Control Points",
]],
[["Cooldown"], [
    "Cooldown",
]],
[["Cooldowns"], [
    "Cooldowns",
]],
[["Corrupt"], [
    "Corrupt",
]],
[["Corrupted"], [
    "Corrupted",
]],
[["Corrupting"], [
    "Corrupting",
]],
[["Credit"], [
    "Credit",
]],
[["Credits"], [
    "Credits",
]],
[["Critical"], [
    "Critical",
]],
[["Crouch"], [
    "Crouch",
]],
[["Crouched"], [
    "Crouched",
]],
[["Crouching"], [
    "Crouching",
]],
[["Current"], [
    "Current",
]],
[["Current Allies"], [
    "Current Allies",
]],
[["Current Ally"], [
    "Current Ally",
]],
[["Current Attempt"], [
    "Current Attempt",
]],
[["Current Checkpoint"], [
    "Current Checkpoint",
]],
[["Current Enemies"], [
    "Current Enemies",
]],
[["Current Enemy"], [
    "Current Enemy",
]],
[["Current Form"], [
    "Current Form",
]],
[["Current Game"], [
    "Current Game",
]],
[["Current Hero"], [
    "Current Hero",
]],
[["Current Heroes"], [
    "Current Heroes",
]],
[["Current Hostage"], [
    "Current Hostage",
]],
[["Current Hostages"], [
    "Current Hostages",
]],
[["Current Level"], [
    "Current Level",
]],
[["Current Mission"], [
    "Current Mission",
]],
[["Current Object"], [
    "Current Object",
]],
[["Current Objective"], [
    "Current Objective",
]],
[["Current Objects"], [
    "Current Objects",
]],
[["Current Phase"], [
    "Current Phase",
]],
[["Current Player"], [
    "Current Player",
]],
[["Current Players"], [
    "Current Players",
]],
[["Current Round"], [
    "Current Round",
]],
[["Current Target"], [
    "Current Target",
]],
[["Current Targets"], [
    "Current Targets",
]],
[["Current Upgrade"], [
    "Current Upgrade",
]],
[["Damage"], [
    "Damage",
]],
[["Damaged"], [
    "Damaged",
]],
[["Damaging"], [
    "Damaging",
]],
[["Danger"], [
    "Danger",
]],
[["Dead"], [
    "Dead",
]],
[["Deal"], [
    "Deal",
]],
[["Dealing"], [
    "Dealing",
]],
[["Dealt"], [
    "Dealt",
]],
[["Deck"], [
    "Deck",
]],
[["Decks"], [
    "Decks",
]],
[["Defeat"], [
    "Defeat",
]],
[["Defend"], [
    "Defend",
]],
[["Defended"], [
    "Defended",
]],
[["Defending"], [
    "Defending",
]],
[["Defence"], [
    "Defence",
]],
[["Deliver"], [
    "Deliver",
]],
[["Delivered"], [
    "Delivered",
]],
[["Delivering"], [
    "Delivering",
]],
[["Depth"], [
    "Depth",
]],
[["Destabilize"], [
    "Destabilize",
]],
[["Destabilized"], [
    "Destabilized",
]],
[["Destabilizing"], [
    "Destabilizing",
]],
[["Destroy"], [
    "Destroy",
]],
[["Destroyed"], [
    "Destroyed",
]],
[["Destroying"], [
    "Destroying",
]],
[["Detect"], [
    "Detect",
]],
[["Detected"], [
    "Detected",
]],
[["Detecting"], [
    "Detecting",
]],
[["Dexterity"], [
    "Dexterity",
]],
[["Diamond"], [
    "Diamond",
]],
[["Diamonds"], [
    "Diamonds",
]],
[["Die"], [
    "Die",
]],
[["Discard"], [
    "Discard",
]],
[["Discarded"], [
    "Discarded",
]],
[["Discarding"], [
    "Discarding",
]],
[["Disconnect"], [
    "Disconnect",
]],
[["Disconnected"], [
    "Disconnected",
]],
[["Disconnecting"], [
    "Disconnecting",
]],
[["Distance"], [
    "Distance",
]],
[["Distances"], [
    "Distances",
]],
[["Dodge"], [
    "Dodge",
]],
[["Dodged"], [
    "Dodged",
]],
[["Dodging"], [
    "Dodging",
]],
[["Dome"], [
    "Dome",
]],
[["Domes"], [
    "Domes",
]],
[["Down"], [
    "Down",
]],
[["Download"], [
    "Download",
]],
[["Downloaded"], [
    "Downloaded",
]],
[["Downloading"], [
    "Downloading",
]],
[["Draw"], [
    "Draw",
]],
[["Drawing"], [
    "Drawing",
]],
[["Drawn"], [
    "Drawn",
]],
[["Drop"], [
    "Drop",
]],
[["Dropped"], [
    "Dropped",
]],
[["Dropping"], [
    "Dropping",
]],
[["Dying"], [
    "Dying",
]],
[["East"], [
    "East",
]],
[["Eliminate"], [
    "Eliminate",
]],
[["Eliminated"], [
    "Eliminated",
]],
[["Eliminating"], [
    "Eliminating",
]],
[["Elimination"], [
    "Elimination",
]],
[["Eliminations"], [
    "Eliminations",
]],
[["Enemies"], [
    "Enemies",
]],
[["Enemy"], [
    "Enemy",
]],
[["Entrance"], [
    "Entrance",
]],
[["Escort"], [
    "Escort",
]],
[["Escorted"], [
    "Escorted",
]],
[["Escorting"], [
    "Escorting",
]],
[["Excellent"], [
    "Excellent",
]],
[["Exit"], [
    "Exit",
]],
[["Experience"], [
    "Experience",
]],
[["Extreme"], [
    "Extreme",
]],
[["Face"], [
    "Face",
]],
[["Faces"], [
    "Faces",
]],
[["Facing"], [
    "Facing",
]],
[["Failed"], [
    "Failed",
]],
[["Failing"], [
    "Failing",
]],
[["Failure"], [
    "Failure",
]],
[["Fall"], [
    "Fall",
]],
[["Fallen"], [
    "Fallen",
]],
[["Falling"], [
    "Falling",
]],
[["Far"], [
    "Far",
]],
[["Fast"], [
    "Fast",
]],
[["Faster"], [
    "Faster",
]],
[["Fastest"], [
    "Fastest",
]],
[["Fault"], [
    "Fault",
]],
[["Faults"], [
    "Faults",
]],
[["Final"], [
    "Final",
]],
[["Final Allies"], [
    "Final Allies",
]],
[["Final Ally"], [
    "Final Ally",
]],
[["Final Attempt"], [
    "Final Attempt",
]],
[["Final Checkpoint"], [
    "Final Checkpoint",
]],
[["Final Enemies"], [
    "Final Enemies",
]],
[["Final Enemy"], [
    "Final Enemy",
]],
[["Final Form"], [
    "Final Form",
]],
[["Final Game"], [
    "Final Game",
]],
[["Final Hero"], [
    "Final Hero",
]],
[["Final Heroes"], [
    "Final Heroes",
]],
[["Final Hostage"], [
    "Final Hostage",
]],
[["Final Hostages"], [
    "Final Hostages",
]],
[["Final Item"], [
    "Final Item",
]],
[["Final Level"], [
    "Final Level",
]],
[["Final Mission"], [
    "Final Mission",
]],
[["Final Object"], [
    "Final Object",
]],
[["Final Objective"], [
    "Final Objective",
]],
[["Final Objects"], [
    "Final Objects",
]],
[["Final Phase"], [
    "Final Phase",
]],
[["Final Player"], [
    "Final Player",
]],
[["Final Players"], [
    "Final Players",
]],
[["Final Round"], [
    "Final Round",
]],
[["Final Target"], [
    "Final Target",
]],
[["Final Targets"], [
    "Final Targets",
]],
[["Final Time"], [
    "Final Time",
]],
[["Final Upgrade"], [
    "Final Upgrade",
]],
[["Find"], [
    "Find",
]],
[["Finding"], [
    "Finding",
]],
[["Finish"], [
    "Finish",
]],
[["Finished"], [
    "Finished",
]],
[["Finishing"], [
    "Finishing",
]],
[["Flown"], [
    "Flown",
]],
[["Fly"], [
    "Fly",
]],
[["Flying"], [
    "Flying",
]],
[["Fold"], [
    "Fold",
]],
[["Folded"], [
    "Folded",
]],
[["Folding"], [
    "Folding",
]],
[["Form"], [
    "Form",
]],
[["Forms"], [
    "Forms",
]],
[["Forward"], [
    "Forward",
]],
[["Found"], [
    "Found",
]],
[["Freeze"], [
    "Freeze",
]],
[["Freezing"], [
    "Freezing",
]],
[["Frozen"], [
    "Frozen",
]],
[["Game"], [
    "Game",
]],
[["Games"], [
    "Games",
]],
[["Games Lost"], [
    "Games Lost",
]],
[["Games Won"], [
    "Games Won",
]],
[["Gg"], [
    "Gg",
]],
[["Go"], [
    "Go",
]],
[["Goal"], [
    "Goal",
]],
[["Goals"], [
    "Goals",
]],
[["Going"], [
    "Going",
]],
[["Good"], [
    "Good",
]],
[["Good Luck"], [
    "Good Luck",
]],
[["Goodbye"], [
    "Goodbye",
]],
[["Green"], [
    "Green",
]],
[["Guilty"], [
    "Guilty",
]],
[["Hack"], [
    "Hack",
]],
[["Hacked"], [
    "Hacked",
]],
[["Hacking"], [
    "Hacking",
]],
[["Hand"], [
    "Hand",
]],
[["Hands"], [
    "Hands",
]],
[["Heal"], [
    "Heal",
]],
[["Healed"], [
    "Healed",
]],
[["Healer"], [
    "Healer",
]],
[["Healers"], [
    "Healers",
]],
[["Healing"], [
    "Healing",
]],
[["Heart"], [
    "Heart",
]],
[["Hearts"], [
    "Hearts",
]],
[["Height"], [
    "Height",
]],
[["Hello"], [
    "Hello",
]],
[["Help"], [
    "Help",
]],
[["Here"], [
    "Here",
]],
[["Hero"], [
    "Hero",
]],
[["Heroes"], [
    "Heroes",
]],
[["Hidden"], [
    "Hidden",
]],
[["Hide"], [
    "Hide",
]],
[["Hiding"], [
    "Hiding",
]],
[["High Score"], [
    "High Score",
]],
[["High Scores"], [
    "High Scores",
]],
[["Hit"], [
    "Hit",
]],
[["Hitting"], [
    "Hitting",
]],
[["Hmmm"], [
    "Hmmm",
]],
[["Hostage"], [
    "Hostage",
]],
[["Hostages"], [
    "Hostages",
]],
[["Huh"], [
    "Huh",
]],
[["Hunt"], [
    "Hunt",
]],
[["Hunted"], [
    "Hunted",
]],
[["Hunter"], [
    "Hunter",
]],
[["Hunters"], [
    "Hunters",
]],
[["Hunting"], [
    "Hunting",
]],
[["I Give Up"], [
    "I Give Up",
]],
[["I Tried"], [
    "I Tried",
]],
[["In View"], [
    "In View",
]],
[["Income"], [
    "Income",
]],
[["Incoming"], [
    "Incoming",
]],
[["Initial"], [
    "Initial",
]],
[["Initial Allies"], [
    "Initial Allies",
]],
[["Initial Ally"], [
    "Initial Ally",
]],
[["Initial Attempt"], [
    "Initial Attempt",
]],
[["Initial Checkpoint"], [
    "Initial Checkpoint",
]],
[["Initial Enemies"], [
    "Initial Enemies",
]],
[["Initial Enemy"], [
    "Initial Enemy",
]],
[["Initial Form"], [
    "Initial Form",
]],
[["Initial Game"], [
    "Initial Game",
]],
[["Initial Hero"], [
    "Initial Hero",
]],
[["Initial Heroes"], [
    "Initial Heroes",
]],
[["Initial Hostage"], [
    "Initial Hostage",
]],
[["Initial Level"], [
    "Initial Level",
]],
[["Initial Mission"], [
    "Initial Mission",
]],
[["Initial Object"], [
    "Initial Object",
]],
[["Initial Objective"], [
    "Initial Objective",
]],
[["Initial Objects"], [
    "Initial Objects",
]],
[["Initial Phase"], [
    "Initial Phase",
]],
[["Initial Player"], [
    "Initial Player",
]],
[["Initial Players"], [
    "Initial Players",
]],
[["Initial Round"], [
    "Initial Round",
]],
[["Initial Target"], [
    "Initial Target",
]],
[["Initial Targets"], [
    "Initial Targets",
]],
[["Initial Upgrade"], [
    "Initial Upgrade",
]],
[["Innocent"], [
    "Innocent",
]],
[["Inside"], [
    "Inside",
]],
[["Intelligence"], [
    "Intelligence",
]],
[["Interact"], [
    "Interact",
]],
[["Invisible"], [
    "Invisible",
]],
[["Item"], [
    "Item",
]],
[["Items"], [
    "Items",
]],
[["Join"], [
    "Join",
]],
[["Joined"], [
    "Joined",
]],
[["Joining"], [
    "Joining",
]],
[["Jump"], [
    "Jump",
]],
[["Jumping"], [
    "Jumping",
]],
[["Kill"], [
    "Kill",
]],
[["Kills"], [
    "Kills",
]],
[["Killstreak"], [
    "Killstreak",
]],
[["Killstreak"], [
    "Killstreak",
]],
[["Killstreaks"], [
    "Killstreaks",
]],
[["Leader"], [
    "Leader",
]],
[["Leaders"], [
    "Leaders",
]],
[["Least"], [
    "Least",
]],
[["Left"], [
    "Left",
]],
[["Less"], [
    "Less",
]],
[["Level"], [
    "Level",
]],
[["Level Down"], [
    "Level Down",
]],
[["Level Up"], [
    "Level Up",
]],
[["Levels"], [
    "Levels",
]],
[["Life"], [
    "Life",
]],
[["Limited"], [
    "Limited",
]],
[["Lives"], [
    "Lives",
]],
[["Load"], [
    "Load",
]],
[["Loaded"], [
    "Loaded",
]],
[["Loading"], [
    "Loading",
]],
[["Location"], [
    "Location",
]],
[["Lock"], [
    "Lock",
]],
[["Locked"], [
    "Locked",
]],
[["Locking"], [
    "Locking",
]],
[["Loser"], [
    "Loser",
]],
[["Losers"], [
    "Losers",
]],
[["Loss"], [
    "Loss",
]],
[["Losses"], [
    "Losses",
]],
[["Max"], [
    "Max",
]],
[["Mild"], [
    "Mild",
]],
[["Min"], [
    "Min",
]],
[["Mission"], [
    "Mission",
]],
[["Mission Aborted"], [
    "Mission Aborted",
]],
[["Mission Accomplished"], [
    "Mission Accomplished",
]],
[["Mission Failed"], [
    "Mission Failed",
]],
[["Missions"], [
    "Missions",
]],
[["Moderate"], [
    "Moderate",
]],
[["Money"], [
    "Money",
]],
[["Monster"], [
    "Monster",
]],
[["Monsters"], [
    "Monsters",
]],
[["More"], [
    "More",
]],
[["Most"], [
    "Most",
]],
[["My Mistake"], [
    "My Mistake",
]],
[["Near"], [
    "Near",
]],
[["New High Score"], [
    "New High Score",
]],
[["New Record"], [
    "New Record",
]],
[["Next"], [
    "Next",
]],
[["Next Allies"], [
    "Next Allies",
]],
[["Next Ally"], [
    "Next Ally",
]],
[["Next Attempt"], [
    "Next Attempt",
]],
[["Next Checkpoint"], [
    "Next Checkpoint",
]],
[["Next Enemies"], [
    "Next Enemies",
]],
[["Next Enemy"], [
    "Next Enemy",
]],
[["Next Form"], [
    "Next Form",
]],
[["Next Game"], [
    "Next Game",
]],
[["Next Hero"], [
    "Next Hero",
]],
[["Next Heroes"], [
    "Next Heroes",
]],
[["Next Hostage"], [
    "Next Hostage",
]],
[["Next Hostages"], [
    "Next Hostages",
]],
[["Next Level"], [
    "Next Level",
]],
[["Next Mission"], [
    "Next Mission",
]],
[["Next Object"], [
    "Next Object",
]],
[["Next Objective"], [
    "Next Objective",
]],
[["Next Objects"], [
    "Next Objects",
]],
[["Next Phase"], [
    "Next Phase",
]],
[["Next Player"], [
    "Next Player",
]],
[["Next Players"], [
    "Next Players",
]],
[["Next Round"], [
    "Next Round",
]],
[["Next Target"], [
    "Next Target",
]],
[["Next Targets"], [
    "Next Targets",
]],
[["Next Upgrade"], [
    "Next Upgrade",
]],
[["Nice Try"], [
    "Nice Try",
]],
[["No"], [
    "No",
]],
[["No Thanks"], [
    "No Thanks",
]],
[["None"], [
    "None",
]],
[["Normal"], [
    "Normal",
]],
[["North"], [
    "North",
]],
[["Northeast"], [
    "Northeast",
]],
[["Northwest"], [
    "Northwest",
]],
[["Not Today"], [
    "Not Today",
]],
[["Object"], [
    "Object",
]],
[["Objective"], [
    "Objective",
]],
[["Objectives"], [
    "Objectives",
]],
[["Objects"], [
    "Objects",
]],
[["Obtain"], [
    "Obtain",
]],
[["Obtained"], [
    "Obtained",
]],
[["Obtaining"], [
    "Obtaining",
]],
[["Off"], [
    "Off",
]],
[["On"], [
    "On",
]],
[["Oof"], [
    "Oof",
]],
[["Oops"], [
    "Oops",
]],
[["Optimal"], [
    "Optimal",
]],
[["Optimize"], [
    "Optimize",
]],
[["Optimized"], [
    "Optimized",
]],
[["Optimizing"], [
    "Optimizing",
]],
[["Out Of View"], [
    "Out Of View",
]],
[["Outgoing"], [
    "Outgoing",
]],
[["Outside"], [
    "Outside",
]],
[["Over"], [
    "Over",
]],
[["Overtime"], [
    "Overtime",
]],
[["Participant"], [
    "Participant",
]],
[["Participants"], [
    "Participants",
]],
[["Payload"], [
    "Payload",
]],
[["Payloads"], [
    "Payloads",
]],
[["Phase"], [
    "Phase",
]],
[["Phases"], [
    "Phases",
]],
[["Pick"], [
    "Pick",
]],
[["Picked"], [
    "Picked",
]],
[["Picking"], [
    "Picking",
]],
[["Pile"], [
    "Pile",
]],
[["Piles"], [
    "Piles",
]],
[["Play"], [
    "Play",
]],
[["Played"], [
    "Played",
]],
[["Player"], [
    "Player",
]],
[["Players"], [
    "Players",
]],
[["Playing"], [
    "Playing",
]],
[["Point"], [
    "Point",
]],
[["Points"], [
    "Points",
]],
[["Points Earned"], [
    "Points Earned",
]],
[["Points Lost"], [
    "Points Lost",
]],
[["Position"], [
    "Position",
]],
[["Power"], [
    "Power",
]],
[["Power-Up"], [
    "Power-Up",
]],
[["Power-Ups"], [
    "Power-Ups",
]],
[["Price"], [
    "Price",
]],
[["Primary Fire"], [
    "Primary Fire",
]],
[["Projectile"], [
    "Projectile",
]],
[["Projectiles"], [
    "Projectiles",
]],
[["Protect"], [
    "Protect",
]],
[["Protected"], [
    "Protected",
]],
[["Protecting"], [
    "Protecting",
]],
[["Purified"], [
    "Purified",
]],
[["Purify"], [
    "Purify",
]],
[["Purifying"], [
    "Purifying",
]],
[["Purple"], [
    "Purple",
]],
[["Raise"], [
    "Raise",
]],
[["Raised"], [
    "Raised",
]],
[["Raising"], [
    "Raising",
]],
[["Rank"], [
    "Rank",
]],
[["Rank A"], [
    "Rank A",
]],
[["Rank B"], [
    "Rank B",
]],
[["Rank C"], [
    "Rank C",
]],
[["Rank D"], [
    "Rank D",
]],
[["Rank E"], [
    "Rank E",
]],
[["Rank F"], [
    "Rank F",
]],
[["Rank S"], [
    "Rank S",
]],
[["Reach"], [
    "Reach",
]],
[["Reached"], [
    "Reached",
]],
[["Reaching"], [
    "Reaching",
]],
[["Ready"], [
    "Ready",
]],
[["Record"], [
    "Record",
]],
[["Records"], [
    "Records",
]],
[["Recover"], [
    "Recover",
]],
[["Recovered"], [
    "Recovered",
]],
[["Recovering"], [
    "Recovering",
]],
[["Red"], [
    "Red",
]],
[["Remain"], [
    "Remain",
]],
[["Remaining"], [
    "Remaining",
]],
[["Rescue"], [
    "Rescue",
]],
[["Rescued"], [
    "Rescued",
]],
[["Rescuing"], [
    "Rescuing",
]],
[["Resource"], [
    "Resource",
]],
[["Resources"], [
    "Resources",
]],
[["Resurrect"], [
    "Resurrect",
]],
[["Resurrected"], [
    "Resurrected",
]],
[["Resurrecting"], [
    "Resurrecting",
]],
[["Reveal"], [
    "Reveal",
]],
[["Revealed"], [
    "Revealed",
]],
[["Revealing"], [
    "Revealing",
]],
[["Right"], [
    "Right",
]],
[["Round"], [
    "Round",
]],
[["Rounds"], [
    "Rounds",
]],
[["Rounds Lost"], [
    "Rounds Lost",
]],
[["Rounds Won"], [
    "Rounds Won",
]],
[["Run"], [
    "Run",
]],
[["Running"], [
    "Running",
]],
[["Safe"], [
    "Safe",
]],
[["Save"], [
    "Save",
]],
[["Saved"], [
    "Saved",
]],
[["Saving"], [
    "Saving",
]],
[["Score"], [
    "Score",
]],
[["Scores"], [
    "Scores",
]],
[["Secondary Fire"], [
    "Secondary Fire",
]],
[["Secure"], [
    "Secure",
]],
[["Secured"], [
    "Secured",
]],
[["Securing"], [
    "Securing",
]],
[["Select"], [
    "Select",
]],
[["Selected"], [
    "Selected",
]],
[["Selecting"], [
    "Selecting",
]],
[["Sell"], [
    "Sell",
]],
[["Selling"], [
    "Selling",
]],
[["Server Load"], [
    "Server Load",
]],
[["Server Load Average"], [
    "Server Load Average",
]],
[["Server Load Peak"], [
    "Server Load Peak",
]],
[["Sever"], [
    "Sever",
]],
[["Severe"], [
    "Severe",
]],
[["Severed"], [
    "Severed",
]],
[["Severing"], [
    "Severing",
]],
[["Shop"], [
    "Shop",
]],
[["Shops"], [
    "Shops",
]],
[["Shuffle"], [
    "Shuffle",
]],
[["Shuffled"], [
    "Shuffled",
]],
[["Sink"], [
    "Sink",
]],
[["Sinking"], [
    "Sinking",
]],
[["Skip"], [
    "Skip",
]],
[["Skipped"], [
    "Skipped",
]],
[["Skipping"], [
    "Skipping",
]],
[["Sleep"], [
    "Sleep",
]],
[["Sleeping"], [
    "Sleeping",
]],
[["Slept"], [
    "Slept",
]],
[["Slow"], [
    "Slow",
]],
[["Slower"], [
    "Slower",
]],
[["Slowest"], [
    "Slowest",
]],
[["Sold"], [
    "Sold",
]],
[["Sorry"], [
    "Sorry",
]],
[["South"], [
    "South",
]],
[["Southeast"], [
    "Southeast",
]],
[["Southwest"], [
    "Southwest",
]],
[["Spade"], [
    "Spade",
]],
[["Spades"], [
    "Spades",
]],
[["Sparkles"], [
    "Sparkles",
]],
[["Spawn"], [
    "Spawn",
]],
[["Spawned"], [
    "Spawned",
]],
[["Spawning"], [
    "Spawning",
]],
[["Speed"], [
    "Speed",
]],
[["Speeds"], [
    "Speeds",
]],
[["Sphere"], [
    "Sphere",
]],
[["Spheres"], [
    "Spheres",
]],
[["Stabilize"], [
    "Stabilize",
]],
[["Stabilized"], [
    "Stabilized",
]],
[["Stabilizing"], [
    "Stabilizing",
]],
[["Stable"], [
    "Stable",
]],
[["Star"], [
    "Star",
]],
[["Stars"], [
    "Stars",
]],
[["Start"], [
    "Start",
]],
[["Started"], [
    "Started",
]],
[["Starting"], [
    "Starting",
]],
[["Status"], [
    "Status",
]],
[["Stay"], [
    "Stay",
]],
[["Stay Away"], [
    "Stay Away",
]],
[["Stayed"], [
    "Stayed",
]],
[["Staying"], [
    "Staying",
]],
[["Stop"], [
    "Stop",
]],
[["Stopped"], [
    "Stopped",
]],
[["Stopping"], [
    "Stopping",
]],
[["Strength"], [
    "Strength",
]],
[["Stun"], [
    "Stun",
]],
[["Stunned"], [
    "Stunned",
]],
[["Stunning"], [
    "Stunning",
]],
[["Suboptimal"], [
    "Suboptimal",
]],
[["Success"], [
    "Success",
]],
[["Sudden Death"], [
    "Sudden Death",
]],
[["Sunk"], [
    "Sunk",
]],
[["Superb"], [
    "Superb",
]],
[["Survive"], [
    "Survive",
]],
[["Survived"], [
    "Survived",
]],
[["Surviving"], [
    "Surviving",
]],
[["Target"], [
    "Target",
]],
[["Targets"], [
    "Targets",
]],
[["Team"], [
    "Team",
]],
[["Teammate"], [
    "Teammate",
]],
[["Teammates"], [
    "Teammates",
]],
[["Teams"], [
    "Teams",
]],
[["Terrible"], [
    "Terrible",
]],
[["Thank You"], [
    "Thank You",
]],
[["Thanks"], [
    "Thanks",
]],
[["That Was Awesome"], [
    "That Was Awesome",
]],
[["Threat"], [
    "Threat",
]],
[["Threat Level"], [
    "Threat Level",
]],
[["Threat Levels"], [
    "Threat Levels",
]],
[["Threats"], [
    "Threats",
]],
[["Tiebreaker"], [
    "Tiebreaker",
]],
[["Time"], [
    "Time",
]],
[["Times"], [
    "Times",
]],
[["Total"], [
    "Total",
]],
[["Trade"], [
    "Trade",
]],
[["Traded"], [
    "Traded",
]],
[["Trading"], [
    "Trading",
]],
[["Traitor"], [
    "Traitor",
]],
[["Traitors"], [
    "Traitors",
]],
[["Transfer"], [
    "Transfer",
]],
[["Transferred"], [
    "Transferred",
]],
[["Transferring"], [
    "Transferring",
]],
[["Try Again"], [
    "Try Again",
]],
[["Turret"], [
    "Turret",
]],
[["Turrets"], [
    "Turrets",
]],
[["Ugh"], [
    "Ugh",
]],
[["Ultimate Ability"], [
    "Ultimate Ability",
]],
[["Under"], [
    "Under",
]],
[["Unknown"], [
    "Unknown",
]],
[["Unlimited"], [
    "Unlimited",
]],
[["Unlock"], [
    "Unlock",
]],
[["Unlocked"], [
    "Unlocked",
]],
[["Unlocking"], [
    "Unlocking",
]],
[["Unsafe"], [
    "Unsafe",
]],
[["Unstable"], [
    "Unstable",
]],
[["Up"], [
    "Up",
]],
[["Upgrade"], [
    "Upgrade",
]],
[["Upgrades"], [
    "Upgrades",
]],
[["Upload"], [
    "Upload",
]],
[["Uploaded"], [
    "Uploaded",
]],
[["Uploading"], [
    "Uploading",
]],
[["Use Ability 1"], [
    "Use Ability 1",
]],
[["Use Ability 2"], [
    "Use Ability 2",
]],
[["Use Ultimate Ability"], [
    "Use Ultimate Ability",
]],
[["Victory"], [
    "Victory",
]],
[["Visible"], [
    "Visible",
]],
[["Vortex"], [
    "Vortex",
]],
[["Vortices"], [
    "Vortices",
]],
[["Wait"], [
    "Wait",
]],
[["Waiting"], [
    "Waiting",
]],
[["Wall"], [
    "Wall",
]],
[["Walls"], [
    "Walls",
]],
[["Warning"], [
    "Warning",
]],
[["Welcome"], [
    "Welcome",
]],
[["Well Played"], [
    "Well Played",
]],
[["West"], [
    "West",
]],
[["White"], [
    "White",
]],
[["Wild"], [
    "Wild",
]],
[["Win"], [
    "Win",
]],
[["Winner"], [
    "Winner",
]],
[["Winners"], [
    "Winners",
]],
[["Wins"], [
    "Wins",
]],
[["Wisdom"], [
    "Wisdom",
]],
[["Worse"], [
    "Worse",
]],
[["Worst"], [
    "Worst",
]],
[["Wow"], [
    "Wow",
]],
[["Yellow"], [
    "Yellow",
]],
[["Yes"], [
    "Yes",
]],
[["You"], [
    "You",
]],
[["You Lose"], [
    "You Lose",
]],
[["You Win"], [
    "You Win",
]],
[["Zone"], [
    "Zone",
]],
[["Zones"], [
    "Zones",
]],

//Reverse alphabetical order to match longest first on tokenization.
].reverse();

var prefixStrKw = [

[["#{0}"], [
    "#{0}",
]],
[["-> {0}"], [
    "-> {0}",
]],
[["<-> {0}"], [
    "<-> {0}",
]],
[["<- {0}"], [
    "<- {0}",
]],
[["Round {0}"], [
    "Round {0}",
]],

];

var postfixStrKw = [
[["{0} ->"], [
    "{0} ->",
]],
[["{0} <->"], [
    "{0} <->",
]],
[["{0} <-"], [
    "{0} <-",
]],
[["{0} M/S"], [
    "{0} M/S",
]],
[["{0} M"], [
    "{0} M",
]],
[["{0} Sec"], [
    "{0} Sec",
]],
[["{0}!!!"], [
    "{0}!!!",
]],
[["{0}!!"], [
    "{0}!!",
]],
[["{0}!"], [
    "{0}!",
]],
[["{0}%"], [
    "{0}%",
]],
[["{0}:"], [
    "{0}:",
]],
[["{0}???"], [
    "{0}???",
]],
[["{0}??"], [
    "{0}??",
]],
[["{0}?"], [
    "{0}?",
]],
];

var binaryStrKw = [

[["{0} -> {1}"], [
    "{0} -> {1}",
]],
[["{0} - {1}"], [
    "{0} - {1}",
]],
[["{0} != {1}"], [
    "{0} != {1}",
]],
[["{0} * {1}"], [
    "{0} * {1}",
]],
[["{0} / {1}"], [
    "{0} / {1}",
]],
[["{0} + {1}"], [
    "{0} + {1}",
]],
[["{0} <-> {1}"], [
    "{0} <-> {1}",
]],
[["{0} <- {1}"], [
    "{0} <- {1}",
]],
[["{0} <= {1}"], [
    "{0} <= {1}",
]],
[["{0} < {1}"], [
    "{0} < {1}",
]],
[["{0} == {1}"], [
    "{0} == {1}",
]],
[["{0} = {1}"], [
    "{0} = {1}",
]],
[["{0} >= {1}"], [
    "{0} >= {1}",
]],
[["{0} > {1}"], [
    "{0} > {1}",
]],
[["{0} And {1}"], [
    "{0} And {1}",
]],
[["{0} Vs {1}"], [
    "{0} Vs {1}",
]],
[["{0}, {1}"], [
    "{0}, {1}",
]],
[["{0}: {1}"], [
    "{0}: {1}",
]],
[["{0}:{1}"], [
    "{0}:{1}",
]],
[["{0} {1}"], [
    "{0} {1}",
]],
];

var ternaryStrKw = [
[["{0} - {1} - {2}"], [
    "{0} - {1} - {2}",
]],
[["{0} : {1} : {2}"], [
    "{0} : {1} : {2}",
]],
[["{0} {1} {2}"], [
    "{0} {1} {2}",
]],
[["{0}, {1}, And {2}"], [
    "{0}, {1}, And {2}",
]],
[["{0}: {1} And {2}"], [
    "{0}: {1} And {2}",
]],
];

var surroundStrKw = [
[["({0})"], [
    "({0})",
]],
[["¡{0}!"], [
    "¡{0}!",
]],
[["¿{0}?"], [
    "¿{0}?",
]],
];

var stringKw = normalStrKw.concat(prefixStrKw).concat(postfixStrKw).concat(binaryStrKw).concat(ternaryStrKw).concat(surroundStrKw).concat(emptyStrKw);

var strTokens = [];

//Generate string tokens
//normal strings
for (var j = 0; j < normalStrKw.length; j++) {
	strTokens.push(normalStrKw[j][0][0].toLowerCase());
}

//prefix strings
for (var j = 0; j < prefixStrKw.length; j++) {
	strTokens.push(prefixStrKw[j][0][0].substring(0, prefixStrKw[j][0][0].indexOf("{0}")).toLowerCase());
}

//postfix strings
for (var j = 0; j < postfixStrKw.length; j++) {
	strTokens.push(postfixStrKw[j][0][0].substring("{0}".length).toLowerCase());
}

//ternary strings
for (var j = 0; j < ternaryStrKw.length; j++) {
	strTokens.push(ternaryStrKw[j][0][0].substring("{0}".length, ternaryStrKw[j][0][0].indexOf("{1}")).toLowerCase());
	strTokens.push(ternaryStrKw[j][0][0].substring(ternaryStrKw[j][0][0].indexOf("{1}")+"{1}".length, ternaryStrKw[j][0][0].indexOf("{2}")).toLowerCase());
}

//binary strings
for (var j = 0; j < binaryStrKw.length; j++) {
	strTokens.push(binaryStrKw[j][0][0].substring("{0}".length, binaryStrKw[j][0][0].indexOf("{1}")).toLowerCase());
}


//surround strings
for (var j = 0; j < surroundStrKw.length; j++) {
	strTokens.push(surroundStrKw[j][0][0][0].toLowerCase())
	strTokens.push(surroundStrKw[j][0][0][surroundStrKw[j][0][0].length-1].toLowerCase())
}

//heroes
for (var j = 0; j < heroKw.length; j++) {
	strTokens.push(heroKw[j][0][0].toLowerCase());
}

//Sort reverse alphabetical order for greediness
strTokens = strTokens.sort().reverse();
/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

//Used for string parsing; splits an array of strings on one or two strings.
//Eg: splitStrTokens(["owo", "uwu", "owo"], "uwu") will return [["owo"], ["owo"]].
function splitStrTokens(tokens, str1, str2) {
	
	var str1Index = -1;
	var str2Index = -1;
	var bracketLevel = 0;
	
	if (str2 !== undefined) {
		debug("Splitting str tokens '"+tokens+"' on '"+str1+"' and '"+str2+"'");
	} else {
		debug("Splitting str tokens '"+tokens+"' on '"+str1+"'");
	}
	
	var i;
	for (i = 0; i < tokens.length; i++) {
		if (tokens[i] === str1 && bracketLevel === 0) {
			str1Index = i;
			break;
		} else if (tokens[i] === "(" || tokens[i] === "¡" || tokens[i] === "¿") {
			bracketLevel++;
		} else if ((tokens[i] === ")" || tokens[i] === "!" || tokens[i] === "?") && bracketLevel > 0) {
			bracketLevel--;
		}
	}
	
	i++;
	
	if (str2 !== undefined) {
		for (; i < tokens.length; i++) {
			if (tokens[i] === str2 && bracketLevel === 0) {
				str2Index = i;
				break;
			} else if (tokens[i] === "(" || tokens[i] === "¡" || tokens[i] === "¿") {
				bracketLevel++;
			} else if ((tokens[i] === ")" || tokens[i] === "!" || tokens[i] === "?") && bracketLevel > 0) {
				bracketLevel--;
			}
		}
	}
	
	//debug("str1Index = "+str1Index+", str2Index = "+str2Index);
	
	if (str1Index === -1) {
		return [tokens];
	} else if (str2Index === -1) {
		return [tokens.slice(0, str1Index), tokens.slice(str1Index+1)]
	} else {
		return [tokens.slice(0, str1Index), tokens.slice(str1Index+1, str2Index), tokens.slice(str2Index+1)]
	}
	
}

//Reverses the comparison operator.
function reverseOperator(content) {
	if (content === "==") return "!=";
	else if (content === '!=') return "==";
	else if (content === '<=') return ">";
	else if (content === '>=') return "<";
	else if (content === '<') return ">=";
	else if (content === '>') return "<=";
	else {
		error("Cannot reverse operator "+content);
	}
}

//Returns true if the given token array is an instruction (not goto/label).
function lineIsInstruction(line, previousLineIsIf) {
	
	//Check for label
	if (line[line.length-1].text === ':' && line[0].text !== "if" && line[0].text !== "for") {
		return false;
	}
	if (line[0].text === "for") {
		return false;
	}
	if (previousLineIsIf && (line[0].text === "goto" || line[0].text === "return" || line[0].text === "continue")) {
		return false;
	}
	
	return true;
}

//Replaces variables A-Z with the provided names (for decompilation).
//Also returns "#define name var" for each name.
function loadVariableNames(names, varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (const [key,value] of Object.entries(names)) {
		var index = alphabet.indexOf(key.toUpperCase());
		if (index < 0) {
			error("Illegal variable "+key);
		} else {
			varKw[index][0][0] = value;
			result += "#!define "+value+" "+key.toUpperCase()+"\n";
		}
	}
	return result;
}

//Resets variable names to A-Z.
function resetVarNames(varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < alphabet.length; i++) {
		varKw[i][0][0] = alphabet[i];
	}
}

//Gets the name of a function.
function getName(content) {
	
	if (content === undefined) {
		error("Trying to get name of undefined function");
	}
	
	var bracketPos = getBracketPositions(content);
	
	if (bracketPos.length == 2) {
		var name = content.substring(0, bracketPos[0]);
	} else {
		var name = content;
	}
	
	return name.replace(/\s/g, "");
}

//Returns "player" if the instruction represents an array of players, else the name of the instruction.
//Note: you must only pass the name of the instruction to this function.
function getPlayerVarName(content) {
	if (isSinglePlayerInstruction(content)) {
		return decompile(content);
	} else {
		return "player";
	}
}

//Checks if the (python) instruction represents only a player.
//Used to differenciate player and player[].
//Note: you must only pass the name to this function.
function isSinglePlayerInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a single player instruction");
	
	var playerInstructions = [
		"attacker",
		"getClosestPlayer",
		"eventPlayer",
		"getFarthestPlayer",
		"_firstOf",
		"_lastOf",
		"getFlagCarrier",
		"getPlayerClosestToReticle",
		"_randomValueInArray",
		"victim",
		"_currentArrayElement",
		"isDead",
		"isAlive",
		"isCommunicating",
		"isCommunicatingAny",
		"isCommunicatingAnyEmote",
		"isCommunicatingAnyVoiceline",
		"isCrouching",
		"isUsingAbility1",
		"isUsingAbility2",
		"isHoldingButton",
		"isFiringPrimary",
		"isFiringSecondary",
		"isInAir",
		"isOnGround",
		"isInSpawnRoom",
		"isMoving",
		"isOnObjective",
		"isOnWall",
		"isOnFire",
		"isStanding",
		"isUsingUltimate",
	];
	
	if (playerInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}

//Same as isSinglePlayerInstruction, but for player arrays.
//However, note that these functions aren't mutually exclusive;
//if one of them returns false, the other one will not necessarily return true.
//This is because variables can hold a player and a player array, and we can't know which.
function isPlayerArrayInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a player array instruction");
	
	var playerArrayInstructions = [
		"getDeadPlayers",
		"getLivingPlayers",
		"getPlayers",
		"getPlayersNotOnObjective",
		"getPlayersOnObjective",
		"getPlayersInSlot",
		"getPlayersInViewAngle",
		"getPlayersOnHero",
		"getPlayersInRadius",
	];
	
	if (playerArrayInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}

//Returns 4 spaces per tab level.
function tabLevel(nbTabs) {
	var result = "";
	for (var i = 0; i < nbTabs; i++) {
		result += "    ";
	}
	return result;
}


//Translates a keyword to the other language.
function translate(keyword, toWorkshop, keywordArray) {
	
	if (!toWorkshop) {
		keyword = keyword.toLowerCase();
		if (keywordArray !== stringKw) {
			keyword = keyword.replace(/\s/g, "");
		}
	}
	debug("Translating keyword '"+keyword+"'");
	debug(keywordArray === stringKw);
	
	//Check for current array element
	if (toWorkshop) {
		for (var i = 0; i < currentArrayElementNames.length; i++) {
			if (keyword === currentArrayElementNames[i]) {
				return translate("_currentArrayElement", true, valueFuncKw);
			}
		}
	}
	
	
	
	for (var i = 0; i < keywordArray.length; i++) {
				
		if (toWorkshop) {
			//for (var j = 0; j < keywordArray[i][0].length; j++) {
				if (keywordArray[i][0][0] === keyword) {
					return keywordArray[i][1][currentLanguage];
				}
			//}
		} else {
			for (var j = 0; j < keywordArray[i][1].length; j++) {
				if (keywordArray[i][1][j].toLowerCase() === keyword) {
					return keywordArray[i][0][0];
				}
			}
		}
		
	}
	
	//Check for numbers
	if (!isNaN(keyword)) {
		//Convert to int then to string to remove unnecessary 0s.
		keyword = Number(keyword).toString();
		return keyword;
	}
	
	error("No match found for keyword '"+keyword+"'");	
}

function topy(keyword, keywordArray) {
	return translate(keyword, false, keywordArray);
}
function tows(keyword, keywordArray) {
	
	//Check if a token was passed, or a string
	if (typeof keyword === "object") {
		currentLineNb = keyword.lineNb;
		currentColNb = keyword.colNb;
		return translate(keyword.text, true, keywordArray);
	} else {
		return translate(keyword, true, keywordArray);
	}
}

//Returns an array of workshop instructions (delimited by a semicolon).
function splitInstructions(content) {
	return splitStrOnDelimiter(content, [';']);
}

//Returns an array of arguments (delimited by a comma).
function getArgs(content) {
	return splitStrOnDelimiter(content, [',']);
}

//Returns an array of strings that are delimited by the given string(s).
//The delimiter is only taken into account if it is not within parentheses and not within a string.
//Example: "azer(1,2), reaz(',,,,')" will return ["azer(1,2)","reaz(',,,,')"] for a comma separator.
function splitStrOnDelimiter(content, delimiter) {
	
	content = content.trim();
	var bracketPos = getBracketPositions(content);
	var bracketPosCheckIndex = 0;
	var delimiterPos = [-delimiter.length];
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	
	for (var i = 0; i < content.length; i++) {
		//Check if the current index is in parentheses
		if (bracketPosCheckIndex < bracketPos.length && i >= bracketPos[bracketPosCheckIndex]) {
			i = bracketPos[bracketPosCheckIndex+1];
			bracketPosCheckIndex += 2;
			
		} else if (!currentPositionIsString && (content.charAt(i) == '"' || content.charAt(i) == '\'')) {
			currentPositionIsString = !currentPositionIsString;
			currentStrDelimiter = content.charAt(i);
		} else if (content.charAt(i) === currentStrDelimiter) {
			currentPositionIsString = !currentPositionIsString;
		} else if (content.charAt(i) == '\\') {
			i++;
		} else if (!currentPositionIsString && content.startsWith(delimiter, i)) {
			delimiterPos.push(i);
		}

	}
	
	delimiterPos.push(content.length);
	
	var result = [];
	for (var i = 0; i < delimiterPos.length-1; i++) {
		var currentStr = content.substring(delimiterPos[i]+delimiter.length, delimiterPos[i+1]);
		currentStr = currentStr.trim();
		if (currentStr.length > 0) {
			result.push(currentStr);
		}
	}
	
	return result;
}

//Same as splitStrOnDelimiter but for a token list.
//If getAllTokens = false, this will only split on the first occurrence of the token.
function splitTokens(tokens, str, getAllTokens=true, rtl=false) {
	
	var result = [];
	var bracketsLevel = 0;
	
	if (rtl) {
		var start = tokens.length-1;
		var end = -1;
		var step = -1;
		var latestDelimiterPos = tokens.length;
	} else {
		var start = 0;
		var end = tokens.length;
		var step = 1;
		var latestDelimiterPos = -1;
	}
	
	//debug("Splitting tokens '"+dispTokens(tokens)+"' on "+str);
	
	for (var i = start; i != end; i+=step) {
		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
			bracketsLevel += step;
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
			bracketsLevel -= step;
		} else if (tokens[i].text === str && bracketsLevel === 0) {
			if (rtl) {
				result.push(tokens.slice(i+1, latestDelimiterPos));
			} else {
				result.push(tokens.slice(latestDelimiterPos+1, i));
			}
			latestDelimiterPos = i;
			if (!getAllTokens) {
				break;
			}
		}
	}
	
	if (bracketsLevel !== 0) {
		error("Lexer broke (bracket level not equal to 0)");
	}
	
	if (rtl) {
		result.push(tokens.slice(end+1, latestDelimiterPos));
	} else {
		result.push(tokens.slice(latestDelimiterPos+1, end));
	}
		
	if (result[0].length === 0 && result.length === 1) {
		return [];
	} else {
		return result;
	}
	
}


//This function returns the index of each first-level opening and closing brackets/parentheses.
//Example: the string "3*(4*(')'))+(4*5)" will return [2, 10, 12, 16].
function getBracketPositions(content, returnFirstPair=false) {
	var bracketsPos = []
	var bracketsLevel = 0;
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	for (var i = 0; i < content.length; i++) {
		if (!currentPositionIsString && startsWithParenthesis(content.substring(i))) {
			bracketsLevel++;
			if (bracketsLevel == 1) {
				bracketsPos.push(i);
			}
		} else if ((content.charAt(i) == ')' || content.charAt(i) == ']' || content.charAt(i) == '}') && !currentPositionIsString) {
			bracketsLevel--;
			if (bracketsLevel == 0) {
				bracketsPos.push(i);
				if (returnFirstPair) {
					break;
				}
			} else if (bracketsLevel < 0) {
				error("Brackets level below 0! (missing opening bracket)");
			}
		} else if (!currentPositionIsString && (content.charAt(i) == '"' || content.charAt(i) == '\'')) {
			currentPositionIsString = !currentPositionIsString;
			currentStrDelimiter = content.charAt(i);
		} else if (content.charAt(i) === currentStrDelimiter) {
			currentPositionIsString = !currentPositionIsString;
		} else if (content.charAt(i) == '\\') {
			i++;
		}
	}
	if (bracketsLevel > 0) {
		error("Brackets level above 0! (missing closing bracket)");
	}
	
	return bracketsPos;
}

//Same as getBracketPositions but for tokens.
function getTokenBracketPos(tokens, returnFirstPair=false) {
	var bracketsPos = []
	var bracketsLevel = 0;
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	for (var i = 0; i < tokens.length; i++) {
		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
			bracketsLevel++;
			if (bracketsLevel == 1) {
				bracketsPos.push(i);
			}
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
			bracketsLevel--;
			if (bracketsLevel === 0) {
				bracketsPos.push(i);
				if (returnFirstPair) {
					break;
				}
			}
		} 
	}
	if (bracketsLevel > 0) {
		error("Brackets level above 0! (missing closing bracket)");
	}
	
	return bracketsPos;
}

//Returns true if the given string starts with a parenthesis (or a bracket/curly bracket).
function startsWithParenthesis(content) {
	if (content[0] == '(' || content[0] == '[' || content[0] == '{') {
		return true;
	}
	return false;
}

//Returns true if c is [A-Za-z\d_].
function isVarChar(c) {
	return c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '@';
}

//Returns the indent, assuming 1 indent = 4 spaces.
function getIndent(content) {
	var indent = 0;
	var i = 0;
	while (content.startsWith("    ", i)) {
		indent++;
		i += 4;
	}
	return indent;
}

//Converts a token list, or a token object to string.
function dispTokens(content) {
	if (content instanceof Array) {
		var result = "";
		for (var i = 0; i < content.length; i++) {
			result += content[i].text;
			if (i < content.length-1) {
				result += " ";
			}
		}
		return result;
	} else if (typeof content === "string") {
		return content;
	} else if (typeof content === "object") {
		if (content.text === undefined) {
			error("Object is not a token or token list");
		} else {
			return content.text;
		}
	} else {
		error("Undefined content "+content);
	}
}

//Logging stuff
function error(str, token) {
	
	if (token !== undefined) {
		currentLineNb = token.lineNb;
		currentColNb = token.colNb;
	}
	
	//var error = "ERROR: ";
	var error = "";
	if (currentLineNb !== undefined && currentLineNb > 0) {
		error += "line "+currentLineNb+", col "+currentColNb+": ";
	}
	error += str;
	if (token !== undefined) {
		error += "'"+dispTokens(token)+"'";
	}
	
	throw new Error(error);
}

function debug(str, arg) {
	return;
	//console.log("DEBUG: "+str);
}

//ty stackoverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";
//OverPy Decompiler (Workshop -> OverPy)


/*var counter = 0;
var counter2 = 0;*/
/*for (var h = 0; h < testvalues.length; h++) {
	var isIn = false;
	for (var i = 0; i < valueKw.length; i++) {
		for (var j = 0; j < valueKw[i][1].length; j++) {
			if (valueKw[i][1][j].toLowerCase() === testvalues[h]["name"].replace(/\s/, "").toLowerCase()) {
				isIn = true;
			}
		}
	}
	if (isIn) {
		counter++;
	} else {
		counter2++;
	}
}*/
/*for (var h = 0; h < testactions.length; h++) {
	var isIn = false;
	for (var i = 0; i < actionKw.length; i++) {
		for (var j = 0; j < actionKw[i][1].length; j++) {
			if (actionKw[i][1][j].toLowerCase() === testactions[h]["name"].replace(/\s/, "").toLowerCase()) {
				isIn = true;
			}
		}
	}
	if (isIn) {
		counter++;
	} else {
		counter2++;
	}
}
console.log(counter);
console.log(counter2);*/

//console.log(decompileAllRules(decompileTest));

/*console.log(decompileAllRules(decompileTest, {
	"a":"currentSectionWalls",
	"b":"tpStarts",
	"c":"tpDests",
	"d":"deathplaneY",
	"e":"roundWinners",
	"f":"mapId",
	"g":"hasFirstInfectionPassed",
	"i":"sectionLoopIndex",
	"j":"level",
	"l":"lateTps",
	"m":"sectionRadiuses",
	"n":"currentSection",
	"o":"firstInfectionLoopIndex",
	"p":"matchTime",
	"q":"countdownProgress",
	"r":"roundProgress",
	"s":"sectionData",
	"t":"triggers",
	"w":"walls",
	"z":"zombieHero",
}, {
	b:"fastFireCountdown",
	c:"tempPos",
	f:"hasWonRound",
	j:"wallLoopIndex",
	l:"wasFirstZombieLastRound",
	z:"team",
}));*/

function decompileAllRules(content, globalVarNames={}, playerVarNames={}) {

	var result = "";
	
	//debug(globalVarNames);
	//debug(playerVarNames);
	
	if (Object.entries(globalVarNames).length !== 0) {
		result += "#Global variables\n\n";
		result += loadVariableNames(globalVarNames, globalVarKw);
		result += "\n\n";
	}
	if (Object.entries(playerVarNames).length !== 0) {
		result += "#Player variables\n\n";
		result += loadVariableNames(playerVarNames, playerVarKw);
		result += "\n\n";
	}

	var bracketPos = [-1].concat(getBracketPositions(content));
	
	//A rule looks like this:
	//rule(title) {...}
	//Therefore, each rule ends every 4th bracket position
	
	
	for (var i = 0; i < bracketPos.length-1; i += 4) {
	//for (var i = 0; i < 4; i += 4) {
		if (i >= bracketPos.length-1) break;
		result += decompileRule(content.substring(bracketPos[i]+1, bracketPos[i+4]+1));
	}
	
	resetVarNames(globalVarKw);
	resetVarNames(playerVarKw);
	
	return result;
	
}

function decompileRule(content) {
	
	//Reset rule-specific global variables
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	
	//Check for potential error
	if (currentArrayElementNames.length != 0) {
		error("Current array element names weren't cleared");
	}
	
	var bracketPos = getBracketPositions(content);
	if (bracketPos.length != 4) {
		error("Invalid rule (mismatched brackets): has "+bracketPos.length+" top-level brackets, should be 4");
	}
	
	var ruleName = content.substring(bracketPos[0]+1, bracketPos[1]);
	
	debug("Decompiling rule "+ruleName);
	
	var result = "@Rule "+ruleName+"\n";
	
	var ruleContent = content.substring(bracketPos[2]+1, bracketPos[3]);
	
	var bracketPos2 = [-1].concat(getBracketPositions(ruleContent));
	
	var eventInst = [];
 	var conditions = "";
	var actions = "";
	
	for (var i = 0; i < bracketPos2.length-2; i += 2) {
		var fieldName = topy(ruleContent.substring(bracketPos2[i]+1, bracketPos2[i+1]), ruleKw);
		if (fieldName === "@Event") {
			eventInst = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
		} else if (fieldName === "_conditions") {
			//conditions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			conditions = "conditions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else if (fieldName === "_actions") {
			//actions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			actions = "actions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else {
			error("Unknown field name "+fieldName+" in rule "+ruleName);
		}
	}
	
	//Parse events
	if (eventInst.length > 0) {
		result += "@Event "+topy(eventInst[0], eventKw)+"\n";
		if (eventInst.length > 1) {
			//There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
			if (topy(eventInst[1], eventKw) !== "all") {
				result += "@Team "+topy(eventInst[1], eventKw)+"\n";
			}
			
			//Parse the 3rd event instruction
			//Detect if it is a slot or hero
			var eventInst3 = topy(eventInst[2], eventKw.concat(heroKw))
			if (eventInst3 !== "all") {
				if (eventInst3.startsWith("slot")) {
					result += "@Slot "+eventInst3.replace("slot", "")+"\n";
				} else {
					//We assume it is a hero
					result += "@Hero "+eventInst3.substring("HERO.".length).toLowerCase() + "\n";
				}
			}
		}
	}
	
	//Parse conditions
	if (conditions !== "") {
		result += decompileConditions(conditions);
	}
		
	//Parse actions
	if (actions !== "") {
		result += decompileActions(actions);
	}
	return result+"\n\n";
}

function decompileConditions(content) {
	
	var conditions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")));
	
	var result = "";
	result += "if ";
	var condStrs = [];
	for (var i = 0; i < conditions.length; i++) {
		
		var currentCond = decompileRuleCondition(conditions[i]);
		//Check for and-ing with true
		if (currentCond === "true") {
			continue;
		}
		
		if (operatorPrecedenceStack[0] < 2) {
			currentCond = "("+currentCond+")";
		}
		condStrs.push(currentCond);
	}
	var condStr = condStrs.join(" and ");
	
	//This happens if everything is true
	if (condStr === "") {
		condStr = "true";
	}
	result += condStr;
	
	result += ":\n"
	nbTabs = 1;
	
	return result;
}

function decompileActions(content) {
	
	var result = "";
	var actions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")));
	
	//Detect the last loop to know where to place the "while"
	for (var i = 0; i < actions.length; i++) {
		if (topy(getName(actions[i]), actionKw).startsWith("_loop")) {
			//It is a loop; update the loop position
			lastLoop = i;
		}
	}
	
	//If a loop was detected, add the "do:" and increment the indentation level.
	if (lastLoop >= 0) {
		result += tabLevel(nbTabs)+"do:\n";
		nbTabs++;
	}
		
	for (var i = 0; i < actions.length; i++) {
		if (i == lastLoop) {
			nbTabs--;
		}
		result += tabLevel(nbTabs) + decompileAction(actions[i], i) + "\n";
	}

	//Add the remaining gotos (caused eg. by a skip 50 in a rule with 10 actions).
	for (var i = 0; i < decompilerGotos.length; i++) {
		if (decompilerGotos[i] > 0) {
			result += tabLevel(nbTabs)+"lbl_"+i+":\n";
		}
	}
	
	return result;
}

function decompileAction(content, actionNb) {
	
	var result = "";
	
	//Reset variable
	operatorPrecedenceStack = [];
	
	//Decrement each goto (for skips)
	for (var i = 0; i < decompilerGotos.length; i++) {
		decompilerGotos[i]--;
		//Check if the goto has reached its destination
		if (decompilerGotos[i] == 0) {
			result += "lbl_"+i+":\n"+tabLevel(nbTabs);
		}
	}
	
	if (actionNb == lastLoop) {
		result += decompile(content, actionKw, {"isLastLoop":true});
	} else {
		
		result += decompile(content, actionKw, 0, {"isLastLoop":false});
	}
	return result;
}

//This function only decompiles conditions that are in the "condition" section of a rule.
//This is needed to handle the binary operators.
function decompileRuleCondition(content) {
	
	debug("Decompiling condition '"+content+"'");
	
	//Reset variable
	operatorPrecedenceStack = [];
	var operators = ["==", "!=", "<=", ">=", "<", ">"];
	
	for (var i = 0; i < operators.length; i++) {
		var operands = splitStrOnDelimiter(content, operators[i]);
		if (operands.length == 2) {
			return decompileCondition(operands[0], operators[i], operands[1]);
		}
	}
	
	error("Could not decompile condition "+content);
	
}

//Decompiles conditions (whether rule conditions or compare() conditions).
//Used to optimise some stuff (eg: condition==true -> condition, condition==false -> not condition).

function decompileCondition(operand1, operator, operand2) {
	var result = "";
	var isOneOperandFalse = false;
	var operands = [operand1, operand2];
	operator = operator.trim();
	if (operator == "==") {
		//condition == true check
		for (var i = 0; i < operands.length; i++) {
			var translated = topy(getName(operands[i]), valueKw);
			if (translated === "true") {
				operands[i] = "";
			} else if (translated === "false") {
				operands[i] = "";
				isOneOperandFalse = true;
			}
		}
	}
	
	
	if (operands[0] !== "" && operands[1] !== "") {
		result = decompileOperator(operands[0], operator, operands[1])
	} else if (operands[0] !== "") {
		if (isOneOperandFalse) {
			result = decompileOperator(operands[0], "not", "");
		} else {
			result = decompile(operands[0]);
		}
	} else if (operands[1] !== "") {
		if (isOneOperandFalse) {
			result = decompileOperator(operands[1], "not", "");
		} else {
			result = decompile(operands[1]);
		}
	} else if (isOneOperandFalse) {
		result = "false";
	} else {
		result = "true";
	}
	
	
	return result;
}

//Main parser function for workshop -> overpy.
function decompile(content, keywordArray=valueKw, decompileArgs={}) {
	
	if (keywordArray === undefined) {
		error("KeywordArray is undefined");
	} else if (content === undefined) {
		error("Content is undefined");
	}
	
	debug("Decompiling '"+content+"'");
	var bracketPos = getBracketPositions(content);
	
	
	var hasArgs = false
	if (bracketPos.length == 2) {
		hasArgs = true;
	} else if (bracketPos.length != 0) {
		error("Mismatched top-level brackets in action "+content+": expected 0 or 2, found "+bracketPos.length)
	}
	
	//Check if there are empty parentheses
	if (bracketPos.length == 2 && content.substring(bracketPos[0]+1, bracketPos[1]).trim().length == 0) {
		hasArgs = false;
		content = content.substring(0, bracketPos[0]);
	}
		
	var name = "";
	if (bracketPos.length == 2) {
		name = content.substring(0, bracketPos[0]);
	} else {
		name = content;
	}
	name = topy(name.toLowerCase().replace(/\s/g, ""), keywordArray);
	
	if (name !== "_compare" && decompileArgs.invertCondition === true) {
		return parseOperator(content, "not", null);
	}
	
	var args = [];
	if (hasArgs) {
		var args = getArgs(content.substring(bracketPos[0]+1, bracketPos[1]));
	}
	debug("Arguments: "+args);
	var result = "";
	
	//Handle special functions that can't be directly translated
	//Special functions are sorted alphabetically.
	
	//Player functions can't be translated, but most of them are generic.
	//They begin by "_&".
	
	if (name.startsWith("_&")) {
		return decompileGenericPlayerFunction(name.substring(2), args, keywordArray === actionKw ? true : false);
	}
	
	//Functions beginning with "_!" have their arguments swapped (assuming there are only 2 arguments).
	if (name.startsWith("_!")) {
		if (args.length !== 2) {
			error("Argument length for swapped function must be 2");
		}
		return name.substring("_!".length)+"("+decompile(args[1])+", "+decompile(args[0])+")";
	}
	
	//Abort if
	if (name === "_abortIf") {
		result = "if " + decompile(args[0]) + ":\n";
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Abort if condition is false/true
	if (name === "_abortIfConditionIsFalse" || name === "_abortIfConditionIsTrue") {
		result = "if ";
		if (name === "_abortIfConditionIsFalse") {
			result += "not ";
		}
		result += "RULE_CONDITION:\n";
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Add
	if (name === "_add") {
		return decompileOperator(args[0], "+", args[1]);
	}
	
	//Is true for all
	if (name === "_all") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "all(["+decompile(args[1])+" for "+varName+" in "+decompile(args[0])+"])";
		currentArrayElementNames.pop();
		return result;
	}
	
	//Is true for any
	if (name === "_any") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "any(["+decompile(args[1])+" for "+varName+" in "+decompile(args[0])+"])";
		currentArrayElementNames.pop();
		return result;
	}
	
	//And
	if (name === "_and") {
		return decompileOperator(args[0], "and", args[1]);
	}
	
	//Append to array
	if (name === "_appendToArray") {
		
		//Check for optimization: [].append(123).append(456) -> [123, 456]
		//Only done if we append a literal number to a literal array.
		
		var decompiledArg0 = decompile(args[0]);
		var decompiledArg1 = decompile(args[1]);
		
		if (decompiledArg0.startsWith('[') && decompiledArg0.endsWith(']') && !isNaN(decompiledArg1)) {
			var result = decompiledArg0.substring(0, decompiledArg0.length-1);
			if (decompiledArg0 !== "[]") {
				result += ", ";
			}
			result += decompiledArg1+"]";
			return result;
		} else {
			return decompiledArg0+".append("+decompiledArg1+")";
		}
	}
	
	//Array contains
	if (name === "_arrayContains") {
		
		return decompile(args[1])+" in "+decompile(args[0]);
	}
	
	//Array slice
	if (name === "_arraySlice") {
		return decompile(args[0]) + ".slice(" + decompile(args[1]) + ", " + decompile(args[2])+")";
	}
	
	//Chase global variable at rate
	if (name === "_chaseGlobalVariableAtRate") {
		
		return "chase("+decompile(args[0], globalVarKw)+", "+decompile(args[1])+", rate="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase global variable over time
	if (name === "_chaseGlobalVariableOverTime") {
		
		return "chase("+decompile(args[0], globalVarKw)+", "+decompile(args[1])+", duration="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase player variable at rate
	if (name === "_chasePlayerVariableAtRate") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, rate={arg2}, {arg3})", args[0], args.slice(1), true)
		
		return result;
	}
	
	//Chase player variable over time
	if (name === "_chasePlayerVariableOverTime") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, duration={arg2}, {arg3})", args[0], args.slice(1), true)
		
		return result;
	}
		
	//Compare
	if (name === "_compare") {
		
		var op = args[1].trim();
		if (decompileArgs.invertCondition === true) {
			op = reverseOperator(op);
		}
		
		return decompileCondition(args[0], op, args[2]);
		//return "("+decompile(args[0]) + ") " + args[1].trim() + " (" + decompile(args[2])+")";
	}
	
	//Current array element
	if (name === "_currentArrayElement") {
		var currentArrayElementName = currentArrayElementNames[currentArrayElementNames.length-1];
		if (currentArrayElementName === undefined) {
			error("currentArrayElementName is undefined");
		}
		return currentArrayElementName;
	}
	
	//Divide
	if (name === "_divide") {
		return decompileOperator(args[0], "/", args[1]);
	}
	
	//Empty array
	if (name === "_emptyArray") {
		return "[]";
	}
	
	//Filtered array
	if (name === "_filteredArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "["+varName+" for "+varName+" in "+decompile(args[0])+" if "+decompile(args[1])+"]";
		currentArrayElementNames.pop();
		return result;
	}
	
	//First of
	if (name === "_firstOf") {
		return decompile(args[0])+"[0]";
	}
	
	//Raycast hit normal
	if (name === "_getNormal") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getNormal()";
	}
	
	//Raycast hit position
	if (name === "_getHitPosition") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getHitPosition()";
	}
	
	//Raycast hit player
	if (name === "_getPlayerHit") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getPlayerHit()";
	}
		
	//Global variable
	if (name === "_globalVar") {
		return decompile(args[0], globalVarKw);
	}
		
	//Hero
	if (name === "_hero") {
		return decompile(args[0], heroKw);
	}
	
	//Index of array value
	if (name === "_indexOfArrayValue") {
		return decompile(args[0])+".index("+decompile(args[1])+")";
	}
	
	//Is in line of sight
	if (name === "_isInLineOfSight") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", los="+decompile(args[2])+").hasLoS()";
	}
	
	//Last of
	if (name === "_lastOf") {
		return decompile(args[0])+"[-1]";
	}
			
	//Loop
	if (name === "_loop") {
		if (decompileArgs.isLastLoop) {
			return "while true";
		} else {
			return "continue";
		}
	}
	
	//Loop if
	if (name === "_loopIf") {
		if (decompileArgs.isLastLoop) {
			return "while "+decompile(args[0]);
		} else {
			var result = "if "+decompile(args[0])+":\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Loop if condition is false
	if (name === "_loopIfConditionIsFalse") {
		if (decompileArgs.isLastLoop) {
			return "while not RULE_CONDITION";
		} else {
			var result = "if not RULE_CONDITION:\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Loop if condition is true
	if (name === "_loopIfConditionIsTrue") {
		if (decompileArgs.isLastLoop) {
			return "while RULE_CONDITION";
		} else {
			var result = "if RULE_CONDITION:\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Modify global var
	if (name === "_modifyGlobalVar") {
		return decompileModifyVar(decompile(args[0], globalVarKw), args[1], decompile(args[2]));
	}
	
	//Modify global var at index
	if (name === "_modifyGlobalVarAtIndex") {
		return decompileModifyVar(decompile(args[0], globalVarKw), args[2], decompile(args[3]), decompile(args[1]));
	}
	
	//Modify player var
	if (name === "_modifyPlayerVar") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+decompile(args[1], playerVarKw), args[2], decompile(args[3]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modify player var at index
	if (name === "_modifyPlayerVarAtIndex") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+decompile(args[1], playerVarKw), args[3], decompile(args[4]), decompile(args[2]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modulo
	if (name === "_modulo") {
		return decompileOperator(args[0], "%", args[1]);
	}
	
	//Multiply
	if (name === "_multiply") {
		return decompileOperator(args[0], "*", args[1]);
	}
	
	//Or
	if (name === "_or") {
		return decompileOperator(args[0], "or", args[1]);
	}
	
	//Player variable
	if (name === "_playerVar") {
		if (isSinglePlayerInstruction(args[0])) {
			return decompile(args[0])+"."+decompile(args[1], playerVarKw);
		} else {
			if (isInNormalForLoop) {
				return "[player2."+decompile(args[1], playerVarKw)+" for player2 in "+decompile(args[0])+"]";
			} else {
				return "[player."+decompile(args[1], playerVarKw)+" for player in "+decompile(args[0])+"]";
			}
		}
	}
	
	//Raise to power
	if (name === "_raiseToPower") {
		return decompileOperator(args[0], "**", args[1]);
	}
	
	//Remove from array
	if (name === "_removeFromArray") {
		return decompile(args[0])+".exclude("+decompile(args[1])+")";
	}
	
	
	//Round
	if (name === "_round") {
		var roundType = topy(args[1], roundKw);
		if (roundType === "_roundUp") {
			return "ceil("+decompile(args[0])+")";
		} else if (roundType === "_roundDown") {
			return "floor("+decompile(args[0])+")";
		} else if (roundType === "_roundToNearest") {
			return "round("+decompile(args[0])+")";
		} else {
			error("Unknown round type "+roundType);
		}
	}
	
	//Set global var
	if (name === "_setGlobalVar") {
		return decompile(args[0], globalVarKw)+" = "+decompile(args[1]);
	}
	
	//Set global var at index
	if (name === "_setGlobalVarAtIndex") {
		return decompile(args[0], globalVarKw)+"["+decompile(args[1])+"] = "+decompile(args[2]);
	}
	
	//Set player var
	if (name === "_setPlayerVar") {
		return decompilePlayerFunction("{player}.{arg0} = {arg1}", args[0], args.slice(1), true);
	}
	
	//Set player var at index
	if (name === "_setPlayerVarAtIndex") {
		return decompilePlayerFunction("{player}.{arg0}[{arg1}] = {arg2}", args[0], args.slice(1), true);
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingGlobalVariable") {
		return "stopChasingVariable("+args[0]+")";
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingPlayerVariable") {
		return decompilePlayerFunction("stopChasingVariable({player}.{args})", args[0], args.slice(1));
	}
					
	//Subtract
	if (name === "_subtract") {
		return decompileOperator(args[0], "-", args[1]);
	}
	
	//Skip
	if (name === "_skip") {
		//Check if the number of skips is hardcoded
		if (!isNaN(args[0].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[0])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[0]);
		}
		
		return "goto "+gotoStr;
	}
	
	//Skip if
	if (name === "_skipIf") {
		result = "if " + decompile(args[0]) + ":\n";
		
		//Check if the number of skips is hardcoded
		if (!isNaN(args[1].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[1])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[1]);
		}
		
		result += tabLevel(nbTabs+1) + "goto "+gotoStr;
		
		return result;
	}
	
	//Sorted array
	if (name === "_sortedArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "sorted("+decompile(args[0]);
		//If key == current array element, do not include it
		if (topy(getName(args[1]).trim(), valueKw) !== "_currentArrayElement") {
			result += ", key=lambda "+varName+": "+decompile(args[1]);
		}
		result += ")";
		currentArrayElementNames.pop();
		return result;
	}
	
	//String
	if (name === "_string") {
		
		//Blizzard likes making parsing difficult apparently,
		//cause the "reevaluation on string" used with hud is the same as the "string" function.
		
		if (args.length == 0) {
			return "Reeval.STRING";
		}
				
		var [str, format] = decompileString(args[0], args[1], args[2], args[3], decompileArgs.strDepth);
				
		if (decompileArgs.strDepth !== 0 && decompileArgs.strDepth !== undefined) {
			return [str, format];
		}
		
		result = '"'+str+'"';
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return result;
	}
				
	//Value in array
	if (name === "_valueInArray") {
		return decompile(args[0])+"["+decompile(args[1])+"]";
	}
	
	//Wait
	if (name === "_wait") {
		var arg2 = decompile(args[1]);
		if (arg2 === "Wait.IGNORE_CONDITION") {
			return "wait("+decompile(args[0])+")";
		}
		else {
			return "wait("+decompile(args[0])+", behavior="+arg2+")";
		}
	}
	
	//X/Y/Z component of
	if (name === "_xComponentOf") {
		return decompile(args[0])+".x";
	}
	if (name === "_yComponentOf") {
		return decompile(args[0])+".y";
	}
	if (name === "_zComponentOf") {
		return decompile(args[0])+".z";
	}
	
	if (name.startsWith('_')) {
		error("Unhandled special function "+name);
	}
	
	//Default case (not a special function).
	result = name;
	if (args.length > 0) {
		result += "("
		for (var i = 0; i < args.length; i++) {
			result += decompile(args[i]);
			if (i < args.length-1) {
				result += ", ";
			}
		}
		result += ")";
	}
	
	return result;
	
}

function decompileString(content, arg1, arg2, arg3, strDepth) {
		
	var result = content;
	var format = [];
	var args = [arg1, arg2, arg3];
	
	var nbArgs = 0;
	if (content.indexOf("{0}") > -1) nbArgs++;
	if (content.indexOf("{1}") > -1) nbArgs++;
	if (content.indexOf("{2}") > -1) nbArgs++;
	
	//debug("Parsing string '"+content+"' with nbargs = "+nbArgs);
	
	//Remove additional quotes
	if (result.startsWith('"') && result.endsWith('"')) {
		result = topy(result.substring(1, result.length-1), stringKw);
	}
	
	for (var i = 0; i < nbArgs; i++) {
		
		//Check if the string result must be put in the format array
		var isInFormat = true;
		
		var decompiledArg = decompile(args[i], valueKw, {"strDepth":1});
		
		//Skip nulls
		/*if (decompiledArg === "null") {
			continue;
		}*/
		
		if (decompiledArg.constructor !== Array) {
			decompiledArg = [decompiledArg];
		}
		
		//If the decompile function returned 2 arguments, the argument is a string
		if (decompiledArg.length > 1) {
			isInFormat = false;
			format = format.concat(decompiledArg[1]);
			
		//Else, check if the argument is a number
		} else if (!isNaN(decompiledArg[0])) {
			isInFormat = false;
			
		//Else, check if the argument is in the list of string keywords
		} else if (stringKw.indexOf(decompiledArg[0]) > -1) {
			isInFormat = false;
		}
		
		if (isInFormat) {
			format = format.concat(decompiledArg);
			result = result.replace("\{"+i+"\}", "{}");
		} else {
			//Remove the "Hero." prefix for heroes
			if (decompiledArg[0].startsWith("Hero.")) {
				decompiledArg[0] = decompiledArg[0].replace("Hero.","").toLowerCase();
				decompiledArg[0] = decompiledArg[0][0].toUpperCase() + decompiledArg[0].substring(1);
			}
			result = result.replace("\{"+i+"\}", decompiledArg[0]);
		}
	}
		
	
	debug("Format = "+format+", arg = "+decompiledArg);
	return [result, format];
	
}

//Function for the player functions, eg set projectile speed, has status, etc.
//There were so many of them, it was polluting the special functions table.
function decompileGenericPlayerFunction(name, args, isAction) {
	if (isAction === undefined) {
		error("isAction is undefined");
	}
	return decompilePlayerFunction("{player}."+name+"({args})", args[0], args.slice(1), false, isAction);
}

//Automatically generates a for loop for player function, if that player function takes an array as argument.
//The content is a python translation and must contain {player} and {args} to replace strings by the args.
//If separateArgs = true, {arg0}, {arg1} etc must be provided instead of {args}.
function decompilePlayerFunction(content, player, args, separateArgs=false, isAction=true) {
	
	var result = "";
	var hasNormalForLoopBeenSetInThisFunction = false;
	
	
	if (isSinglePlayerInstruction(player)) {
		result += content.replace("\{player\}", decompile(player))
		
	} else {
		if (isAction) {
			result += "for player in "+decompile(player)+":\n";
			result += tabLevel(nbTabs+1)+content.replace("\{player\}", "player")
			isInNormalForLoop = true;
			hasNormalForLoopBeenSetInThisFunction = true;
		} else {
			if (isInNormalForLoop) {
				result += "["+content.replace("\{player\}", "player2")+" for player2 in "+decompile(player)+"]";
			} else if (currentArrayElementNames.indexOf("player") > -1) {
				result += "["+content.replace("\{player\}", "player3")+" for player3 in "+decompile(player)+"]";
			} else {
				result += "["+content.replace("\{player\}", "player")+" for player in "+decompile(player)+"]";
			}
		}
	}
	
	
	//Parse arguments
	if (!separateArgs) {
		var argsStr = "";
		for (var i = 0; i < args.length; i++) {
			if (args[i].length === 1) {
				argsStr += decompile(args[i], playerVarKw);
			} else {
				argsStr += decompile(args[i]);
			}
			if (i < args.length-1) {
				argsStr += ", ";
			}
		}
		result = result.replace("\{args\}", argsStr)
	} else {
		for (var i = 0; i < args.length; i++) {
			if (args[i].length === 1) {
				result = result.replace("\{arg"+i+"\}", decompile(args[i], playerVarKw))
			} else {
				result = result.replace("\{arg"+i+"\}", decompile(args[i]))
			}
		}
	}
	if (hasNormalForLoopBeenSetInThisFunction) {
		isInNormalForLoop = false;
	}
	return result;
}

//Function used for "modify player variable" and "modify global variable".
//Note: arguments passed to this function must already be decompiled.
function decompileModifyVar(variable, operation, value, index) {
	if (index !== undefined) {
		variable += "["+index+"]";
	}
	operation = topy(operation, operationKw);
	if (operation === "_appendToArray") {
		return variable+".append("+value+")";
	} else if (operation === "_add") {
		//Handle special "++" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"++";
		} else {
			return variable+" += "+value;
		}
	} else if (operation === "_subtract") {
		//Handle special "--" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"--";
		} else {
			return variable+" -= "+value;
		}
	} else if (operation === "_multiply") {
		return variable+" *= "+value;
	} else if (operation === "_divide") {
		return variable+" /= "+value;
	} else if (operation === "_modulo") {
		return variable+" %= "+value;
	} else if (operation === "_raiseToPower") {
		return variable+" **= "+value;
	} else if (operation === "_min") {
		return variable+" min= "+value;
	} else if (operation === "_max") {
		return variable+" max= "+value;
	} else if (operation === "_removeFromArrayByIndex") {
		return "del "+variable+"["+value+"]";
	} else if (operation === "_removeFromArrayByValue") {
		return variable+".remove("+value+")";
	} else {
		error("Unhandled operation "+operation);
	}
}

//Function to handle operators and check whether any of the operands need parentheses.
//Eg: Decompiling Multiply(Add(1,2), 3) would produce "(1+2)*3". As one operand of the multiply
//function has another operand with lower precedence, it needs parentheses.
function decompileOperator(operand1, operator, operand2) {
	

	
	operatorPrecedenceStack.push(operatorPrecedence[operator]);
	var currentPrecedenceIndex = operatorPrecedenceStack.length-1;
	debug("precedence stack = "+operatorPrecedenceStack);
	
	var operands = [operand1];
	if (operator !== "not") {
		operands.push(operand2);
	}
	
	for (var h = 0; h < operands.length; h++) {
		var operandDecompiled = decompile(operands[h]);
	
		var currentPrecedence = operatorPrecedence[operator];
		var needsParentheses = false;
		
		for (var i = currentPrecedenceIndex+1; i < operatorPrecedenceStack.length; i++) {
			if (operatorPrecedenceStack[i] < currentPrecedence) {
				needsParentheses = true;
				operatorPrecedenceStack[currentPrecedenceIndex] = operatorPrecedenceStack[i];
			}
		}
		operatorPrecedenceStack = operatorPrecedenceStack.slice(0, currentPrecedenceIndex+1);
		if (needsParentheses) {
			operandDecompiled = "("+operandDecompiled+")";
		}
		operands[h] = operandDecompiled;
	}
	
	
	
	if (operator === "not") {
		return "not "+operands[0];
	} else {
		return operands[0] + " "+operator+" "+operands[1];
	}
	
}

/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";
//OverPy Compiler (OverPy -> Workshop)


//console.log(compileTest);

//console.log(compile(compileTest));

function compile(content) {
	
	if (typeof window !== "undefined") {
		var t0 = performance.now();
	}
	var rules = tokenize(content);
	//console.log(rules);
	
	var result = "";
	for (var i = 0; i < rules.length; i++) {
	//for (var i = 26; i < 28; i++) {
		result += compileRule(rules[i]);
	}
	if (typeof window !== "undefined") {
		var t1 = performance.now();
		console.log("Compilation time: "+(t1-t0)+"ms");
	}
	return result;
}

/*
Really a class, but I couldn't manage to make the "class" keyword work.
*/
function Macro(text, replacement, args) {
	
	if (args === undefined || args.length === 0) {
		this.isFunction = false;
	} else {
		this.isFunction = true;
		this.args = args;
	}
	this.text = text;
	this.replacement = replacement;
}

function compileRule(rule) {
	
	currentLineNb = rule.lineStart;
	currentColNb = 1;
	var result = "";
	
	if (currentArrayElementNames.length !== 0) {
		error("Current array element names length isn't 0");
	}
	
	forLoopTimers = [];
	if (Object.entries(forLoopVariables).length !== 0) {
		console.log(forLoopVariables);
		error("For loop variables isn't empty");
	}
	
	//The first line should always start with @Rule.
	if (rule.lines[0].tokens[0].text !== "@Rule") {
		error("Lexer broke (rule not starting with '@Rule'?)");
	} else if (rule.lines[0].tokens.length !== 2) {
		error("Malformed rule declaration (found "+rule.lines[0].tokens.length+") tokens");
	}
	
	result += tows("@Rule", ruleKw)+" ("+rule.lines[0].tokens[1].text+") {\n";
	result += tabLevel(1)+tows("@Event", ruleKw)+" {\n";
	
	var isInEvent = true;
	var isInActions = false;
	var eventType = "";
	var isEventTeamDefined = false;
	var isEventPlayerDefined = false;
	
	for (var i = 1; i < rule.lines.length+1; i++) {
		//Check for loop var timer
		//console.log(forLoopTimers);
		//console.log(i);
		for (var j = 0; j < forLoopTimers.length; j++) {
			if (forLoopTimers[j][0] === i) {
				delete forLoopVariables[forLoopTimers[j][1]];
			}
		}
		
		if (i >= rule.lines.length) {
			break;
		}
		
		
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}
		
		currentLineNb = rule.lines[i].tokens[0].lineNb;
		currentColNb = rule.lines[i].tokens[0].colNb;		
		
		if (rule.lines[i].tokens[0].text.startsWith("@")) {
			if (!isInEvent) {
				error("Annotation found after code");
			} else {
				if (rule.lines[i].tokens[0].text === "@Event") {
					if (rule.lines.length === 2) {
						result += tabLevel(2)+tows("global", eventKw)+";\n";
						eventType = "global";
					} else {
						result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
						eventType = rule.lines[i].tokens[1].text;
					}
					
				} else if (rule.lines[i].tokens[0].text === "@Team") {
					if (isEventTeamDefined) {
						error("Event team defined twice");
					}
					
					isEventTeamDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Hero") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n";
						isEventTeamDefined = true;
					}
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("Hero."+rule.lines[i].tokens[1].text.toUpperCase(), heroKw)+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Slot") {
					if (isEventPlayerDefined) {
						error("Event player defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventKw)+";\n"+tabLevel(2);
						isEventTeamDefined = true;
					}
					
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("slot"+rule.lines[i].tokens[1].text, eventKw)+";\n";
					
				} else {
					error("Unknown annotation");
				}
			}
		} else {
			if (isInEvent) {
				if (!isEventTeamDefined && eventType !== "global") {
					result += tabLevel(2)+tows("all", eventKw)+";\n";
				}
				if (!isEventPlayerDefined && eventType !== "global") {
					result += tabLevel(2)+tows("all", eventKw)+";\n";
				}
				isInEvent = false;
				result += tabLevel(1)+"}\n\n";
			}
			
			var areAllLinesAfterCurrentLineIndented = true;
			//Check if all of the lines have indent level non-0
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel === 0) {
					areAllLinesAfterCurrentLineIndented = false;
					break;
				}
			}
			//If without indentation = (rule) condition
			if (rule.lines[i].tokens[0].text === "if" && rule.lines[i].indentLevel === 0 && areAllLinesAfterCurrentLineIndented) {
				result += tabLevel(1)+tows("_conditions", ruleKw)+" {\n";
				result += parseRuleCondition(rule.lines[i].tokens);
				result += tabLevel(1)+"}\n\n";
			} else {
				
				if (rule.lines[i].tokens[0].text === "do") {
					if (rule.lines[i].tokens.length !== 2 || rule.lines[i].tokens[1].text !== ':') {
						error("Do instruction must be 'do:'");
					} else if (isInActions) {
						error("Do instructions must be at the beginning of the rule");
					}
					continue;
				} 
				
				if (!isInActions) {
					result += tabLevel(1)+tows("_actions", ruleKw)+" {\n";
					isInActions = true;
				}
				
				//Check for "if"
				if (rule.lines[i].tokens[0].text === "if") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("If statement must end with ':'");
					}
					
					var isSkipIf = true;
					var isConditionTrueCheck = false;
					var isConditionFalseCheck = false;
					var invertCondition = false;
					var skipIfOffset;
					var hasGoto = false;
					var hasAbort = false;
					var hasContinue = false;
					//var condition = "(" + parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":true});
					
					//Check if there is a goto
					if (rule.lines[i+1].tokens[0].text === "goto") {
						if (rule.lines[i+1].tokens.length < 2) {
							error("Malformed goto");
						}
						
						//Check if the goto is of the form "goto loc+xxx"
						if (rule.lines[i+1].tokens[1].text === "loc") {
							skipIfOffset = parse(rule.lines[i+1].tokens.slice(3))
							
						} else {
							//Search for label
							var label = rule.lines[i+1].tokens[1].text;
							var labelOffset = 0;
							var foundLabel = false;
							for (var j = i+1; j < rule.lines.length; j++) {
								if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
									labelOffset++;
								} else if (rule.lines[j].tokens[0].text === label) {
									foundLabel = true;
									if (rule.lines[j].tokens.length !== 2 || rule.lines[j].tokens[1].text !== ':') {
										error("Label must end with ':'");
									}
									break;
								}
							}
							if (!foundLabel) {
								error("Could not find label "+label);
							}
							skipIfOffset = labelOffset;
						}
						hasGoto = true;
						
					//Check for return (abort)
					} else if (rule.lines[i+1].tokens[0].text === "return") {
						isSkipIf = false;
						hasAbort = true;
						
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 3) {
							isConditionTrueCheck = true;
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 4) {
							isConditionFalseCheck = true;
						}
						
					} else if (rule.lines[i+1].tokens[0].text === "continue") {
						isSkipIf = false;
						hasContinue = true;
						
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 3) {
							isConditionTrueCheck = true;
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION" && rule.lines[i].tokens.length === 4) {
							isConditionFalseCheck = true;
						}
					} else {
						
						//Check how much instructions there is after the "if" (do not count gotos or lbls)
						var nbInstructionsIf = 0;
						var ifIndent = rule.lines[i].indentLevel;
						var reachedEndOfRule = true;
						var j = i+1;
						for (; j < rule.lines.length; j++) {
							if (rule.lines[j].indentLevel > ifIndent) {
								if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
									nbInstructionsIf++;
								}
							} else {
								reachedEndOfRule = false;
								break;
							}
						}
						
						if (reachedEndOfRule) {
							isSkipIf = false;
							invertCondition = true;
						} else {
							skipIfOffset = nbInstructionsIf;
							if (skipIfOffset <= 0) {
								error("If instruction must have at least one sub-instruction");
							}
							invertCondition = true;
						}
					}
					
					result += tabLevel(2);
					if (isSkipIf) {
						result += tows("_skipIf", actionKw);
					} else if (isConditionTrueCheck) {
						if (hasAbort) {
							result += tows("_abortIfConditionIsTrue", actionKw);
						} else if (hasContinue) {
							result += tows("_loopIfConditionIsTrue", actionKw);
						}
					} else if (isConditionFalseCheck) {
						if (hasAbort) {
							result += tows("_abortIfConditionIsFalse", actionKw);
						} else if (hasContinue) {
							result += tows("_loopIfConditionIsFalse", actionKw);
						}
					} else if (hasContinue) {
						result += tows("_loopIf", actionKw);
					} else if (hasAbort) {
						result += tows("_abortIf", actionKw);
					} else {
						error("weird if");
					}
					result += "(";
					if (!isConditionTrueCheck && !isConditionFalseCheck) {
						result += parse(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), {"isWholeInstruction":true, "invertCondition":invertCondition});
					}
					if (isSkipIf) {
						result += ", "+skipIfOffset;
					}
					result += ");\n";
					if (hasGoto || hasAbort || hasContinue) {
						i++;
					}
					
				//Check for "for"
				} else if (rule.lines[i].tokens[0].text === "for") {
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ':') {
						error("For instruction must end with ':'");
					}
					
					var inOperands = splitTokens(rule.lines[i].tokens.slice(1, rule.lines[i].tokens.length-1), "in", false);
					if (inOperands.length !== 2) {
						error("For instruction must contain 'in'");
					} else if (inOperands[0].length !== 1) {
						error("There can only be 1 token between 'for' and 'in'");
					}
					var forVarName = inOperands[0][0].text;
					if (forLoopVariables[forVarName] !== undefined) {
						error("Variable "+forVarName+" is already used");
					}
					forLoopVariables[forVarName] = inOperands[1];
					//Check amount of lines
					var forIndent = rule.lines[i].indentLevel;
					var j = i+1;
					for (; j < rule.lines.length && rule.lines[j].indentLevel > forIndent; j++);
					if (j === i) {
						error("For loop contains no instructions");
					}
					forLoopTimers.push([j, forVarName]);
					
					
				//Check for "while"
				} else if (rule.lines[i].tokens[0].text === "while") {
					result += tabLevel(2);
					if (rule.lines[i].tokens[1].text === "true" && rule.lines[i].tokens.length === 2) {
						result += tows("_loop", actionKw);
					} else {
						if (rule.lines[i].tokens[1].text === "RULE_CONDITION") {
							result += tows("_loopIfConditionIsTrue", actionKw);
						} else if (rule.lines[i].tokens[1].text === "not" && rule.lines[i].tokens[2].text === "RULE_CONDITION") {
							result += tows("_loopIfConditionIsFalse", actionKw);
						} else {
							result += tows("_loopIf", actionKw)+"("+parse(rule.lines[i].tokens.slice(1))+")";
						}
					}
					
					result += ";\n";
					
				//Check for goto
				} else if (rule.lines[i].tokens[0].text === 'goto') {
					var skipOffset = 0;
					if (rule.lines[i].tokens.length < 2) {
						error("Malformed goto");
					}
					
					//Check if the goto is of the form "goto loc+xxx"
					if (rule.lines[i].tokens[1].text === "loc") {
						skipOffset = parse(rule.lines[i].tokens.slice(3))
						
					} else {
						//Search for label
						var label = rule.lines[i].tokens[1].text;
						var labelOffset = 0;
						var foundLabel = false;
						for (var j = i+1; j < rule.lines.length; j++) {
							if (lineIsInstruction(rule.lines[j].tokens, rule.lines[j-1].tokens[0].text === "if")) {
								labelOffset++;
							} else if (rule.lines[j].tokens[0].text === label) {
								foundLabel = true;
								if (rule.lines[j].tokens.length !== 2 || rule.lines[j].tokens[1].text !== ':') {
									error("Label must end with ':'");
								}
								break;
							}
						}
						if (!foundLabel) {
							error("Could not find label "+label);
						}
						skipOffset = labelOffset;
					}
					result += tabLevel(2)+tows("_skip", actionKw)+"("+skipOffset+");\n";
					
				//Check for del
				} else if (rule.lines[i].tokens[0].text === 'del') {
					
					if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text !== ']') {
						error("Del keyword must be followed by an array membership");
					}
					
					var bracketPos = getTokenBracketPos(rule.lines[i].tokens);
					
					var variable = rule.lines[i].tokens.slice(1, bracketPos[bracketPos.length-2])
					var member = rule.lines[i].tokens.slice(bracketPos[bracketPos.length-2]+1, rule.lines[i].tokens.length-1)
					
					debug("Parsing del keyword with var = '"+dispTokens(variable)+"' and member = '"+dispTokens(member)+"'");
					
					result += tabLevel(2);
					result += parseAssignment(variable, member, true, "_removeFromArrayByIndex");
					result += ";\n";
					
				} else if (rule.lines[i].tokens[rule.lines[i].tokens.length-1].text === ':') {
					continue;
				} else {
					result += tabLevel(2);
					result += parse(rule.lines[i].tokens, {"isWholeInstruction":true});
					result += ";\n";
				}
			}
		}
	}
	
	if (isInActions || isInEvent) {
		//End actions
		result += tabLevel(1)+"}\n";
	}
	
	//End rules
	result += "}\n\n";
	
	return result;
}

/*
The main parse function.
*/
function parse(content, parseArgs={}) {
	
	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty");
	}
	
	currentLineNb = content[0].lineNb;
	currentColNb = content[0].colNb;
	
	debug("Parsing '"+dispTokens(content)+"'");
	
	//Parse operators
	for (var i = 0; i < pyOperators.length; i++) {
		var operands = splitTokens(content, pyOperators[i], false);
		if (operands.length === 2) {
			
			//The operator is present; parse it
			if (pyOperators[i] === "=") {
				return parseAssignment(operands[0], operands[1], false);
			} else if (pyOperators[i] === "or") {
				return tows("_or", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "and") {
				return tows("_and", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "not") {
				return tows("not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "in") {
				return tows("_arrayContains", valueFuncKw)+"("+parse(operands[1])+", "+parse(operands[0])+")";
			} else if (pyOperators[i] === "==" || pyOperators[i] === '!=' || pyOperators[i] === '<=' || pyOperators[i] === '>=' || pyOperators[i] === '<' || pyOperators[i] === '>' ) {
				var pyOperator = pyOperators[i];
				if (parseArgs.invertCondition === true) pyOperator = reverseOperator(pyOperator);
				return tows("_compare", valueFuncKw)+"("+parse(operands[0])+", "+pyOperator+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "+=") {
				return parseAssignment(operands[0], operands[1], true, "_add");
			} else if (pyOperators[i] === "-=") {
				return parseAssignment(operands[0], operands[1], true, "_subtract");
			} else if (pyOperators[i] === "*=") {
				return parseAssignment(operands[0], operands[1], true, "_multiply");
			} else if (pyOperators[i] === "/=") {
				return parseAssignment(operands[0], operands[1], true, "_divide");
			} else if (pyOperators[i] === "%=") {
				return parseAssignment(operands[0], operands[1], true, "_modulo");
			} else if (pyOperators[i] === "**=") {
				return parseAssignment(operands[0], operands[1], true, "_raiseToPower");
			} else if (pyOperators[i] === "min=") {
				return parseAssignment(operands[0], operands[1], true, "_min");
			} else if (pyOperators[i] === "max=") {
				return parseAssignment(operands[0], operands[1], true, "_max");
			} else if (pyOperators[i] === "++") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_add");
			} else if (pyOperators[i] === "--") {
				return parseAssignment(operands[0], [{"lineNb":-1, "colNb":-1,"text":"1"}], true, "_subtract");
			} else if (pyOperators[i] === "/") {
				return tows("_divide", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "*") {
				return tows("_multiply", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "%") {
				return tows("_modulo", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "**") {
				return tows("_raiseToPower", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "-") {
				
				//Check for unary operator
				if (operands[0].length === 0 || pyOperators.indexOf(operands[0][operands[0].length-1].text) >= 0) {
					//Do nothing; parse it later
					continue;
				} else {
					return tows("_subtract", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
				}
				return tows("_not", valueFuncKw)+"("+parse(operands[1])+")";
			} else if (pyOperators[i] === "+") {
				return tows("_add", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else {
				error("Unhandled operator "+pyOperators[i]);
			}
			
			break;
			
		}
	}
	
	//Check for current array element variable name
	if (content.length === 1) {
		if (currentArrayElementNames.indexOf(content[0].text) >= 0) {
			return tows("_currentArrayElement", valueFuncKw);
		}
	}
	
	//Check for for loop variable name
	if (content.length === 1) {
		if (forLoopVariables[content[0].text] !== undefined) {
			//console.log(forLoopVariables[content[0].text]);
			return parse(forLoopVariables[content[0].text]);
		}
	}
	
	//Check for literal number
	var nbTest = dispTokens(content).replace(/ /g, "")
	if (!isNaN(nbTest)) {
		return nbTest;
	}
	
	//Check for global variable
	if (content.length === 1 && content[0].text.length === 1 && content[0].text >= 'A' && content[0].text <= 'Z') {
		return tows("_globalVar", valueFuncKw)+"("+content[0].text+")";
	}
	
	
	//Parse array
	if (content[content.length-1].text === ']') {
		var bracketPos = getTokenBracketPos(content);
		
		if (bracketPos.length === 2 && bracketPos[0] === 0) {
			
			return parseLiteralArray(content);
		} else {
			return parseArrayMembership(content.slice(0, bracketPos[bracketPos.length-2]), content.slice(bracketPos[bracketPos.length-2]+1, content.length-1));
		}
	}
	
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[1], operands[0], parseArgs);
	}
	
	//Check for parentheses
	if (content[0].text === '(') {
		return parse(content.slice(1, content.length-1));
	}
	
	//Parse args and name of function.
	var name = content[0].text;
	var args = [];
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else if (content[1].text === '[') {
			return parseArrayMembership(content);
		}
	} else {
		//Check for booleans
		if (name === "true" || name === "false" || name === "null") {
			return tows(name, boolKw);
		} else if (name.startsWith('"') || name.startsWith("'")) {
			formatArgs = [];
			return parseString(tokenizeString(name.substring(1, name.length-1)));
			//error("owo");
		}
		
		return tows(name, funcKw);
	}
	
	var str = "args: "
	for (var i = 0; i < args.length; i++) {
		str += "'"+dispTokens(args[i])+"'";
		if (i < args.length-1) {
			str += ", ";
		}
	}
	debug(str);
	
	
	
	//Special functions
	
	if (name === "all" || name === "any") {
		var result = tows("_"+name, valueFuncKw)+"(";
		
		if (args[0][0].text !== "[" || args[0][args[0].length-1].text !== "]") {
			error(name+" function must have [x == y for x in z] as argument (no literal array found)")
		}
		
		var forArgs = splitTokens(args[0].slice(1, args[0].length-1), "for");
		if (forArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'for' found)")
		}
		
		var inArgs = splitTokens(forArgs[1], "in", false);
		if (inArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'in' found)")
		}
		result += parse(inArgs[1]) + ", ";
		currentArrayElementNames.push(inArgs[0][0].text);
		result += parse(forArgs[0])
		currentArrayElementNames.pop();
		result += ")";
		return result;
	}
	
	if (name === "ceil") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundUp", roundKw)+")";
	}
	
	if (name === "chase") {
		
		var funcName = "_chase";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
		}
		
		if (args.length !== 4) {
			error("Chase function must have 4 arguments");
		} else if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
			error("3rd argument of chase must be 'rate = xxxx' or 'duration = xxxx'");
		}
		
		if (args[2][0].text === "rate") {
			funcName += "AtRate";
		} else {
			funcName += "OverTime";
		}
		
		return tows(funcName, actionKw)+"("+result+", "+parse(args[1])+", "+parse(args[2].slice(2))+", "+parse(args[3])+")";
	}
	
	if (name === "floor") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundDown", roundKw)+")";
	}
	
	if (name === "round") {
		if (args.length !== 1) {
			error("round() only takes one argument, you maybe meant to use ceil() or floor().");
		} else {
			return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundToNearest", roundKw)+")";
		}
	}
	
	if (name === "raycast") {
		if (parseArgs.raycastType === undefined) {
			error("Raycast function must be followed by a member (eg. getHitPosition)");
		}
		
		if (parseArgs.raycastType === "getHitPosition" || parseArgs.raycastType === "getPlayerHit" || parseArgs.raycastType === "getNormal") {
			var result = tows("_"+parseArgs.raycastType, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			
			if (args[2][0].text !== "include" || args[2][1].text !== "=") {
				error("3rd arg for this raycast must be 'include = xxxx'");
			} else if (args[3][0].text !== "exclude" || args[2][1].text !== "=") {
				error("4th arg for this raycast must be 'exclude = xxxx'");
			} else if (args[4][0].text !== "includePlayerObjects" || args[2][1].text !== "=") {
				error("5th arg for this raycast must be 'includePlayerObjects = xxxx'");
			}
			
			result += parse(args[2].slice(2))+", "+parse(args[3].slice(2))+", "+parse(args[4].slice(2))+")";
			return result;
		} else if (parseArgs.raycastType === "hasLoS") {
			var result = tows("_isInLineOfSight", valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			if (args[2][0].text !== "los" || args[2][1].text !== "=") {
				error("3rd arg for line of sight check must be 'los = LosCheck.xxxx'");
			} 
			result += parse(args[2].slice(2))+")";
			return result;
		} else {
			error("Unknown raycast member '"+parseArgs.raycastType+"'");
		}
	}
	
	if (name === "sorted") {
		if (args.length !== 2) {
			error("sorted() takes 2 arguments");
		} else {
			
			var result = tows("_sortedArray", valueFuncKw)+"("+parse(args[0]);
			
			var lambdaArgs = splitTokens(args[1], ':');
			if (lambdaArgs.length !== 2 || lambdaArgs[0].length !== 4 || lambdaArgs[0][0].text !== "key" || lambdaArgs[0][1].text !== "=" || lambdaArgs[0][2].text !== "lambda") {
				error("Syntax for sorted array condition is 'key=lambda x: condition(x)'");
			}
			
			currentArrayElementNames.push(lambdaArgs[0][3].text);
			result += ", "+parse(lambdaArgs[1])+")";
			currentArrayElementNames.pop();
			return result;
			
		}
	}
	
	if (name === "stopChasingVariable") {
		
		var funcName = "_stopChasing";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
		}
		
		return tows(funcName, actionKw)+"("+result+")";
	}
	
	if (name === "teamHasHero" || name === "getPlayersOnHero" || name === "getNumberOfHeroes") {
		return tows("_!"+name, valueFuncKw)+"("+parse(args[1])+", "+parse(args[0])+")";
	}
	
	
	if (name === "wait") {
		var result = tows("_wait", actionKw)+"("+parse(args[0])+", ";
		if (args.length === 1) {
			result += tows("Wait.IGNORE_CONDITION", waitKw)
		} else {
			if (args[1][0].text !== "behavior" || args[1][1].text !== "=") {
				error("2nd argument of wait() must be 'behavior=Wait.XXXX'");
			}
			result += parse(args[1].slice(2));
		}
		result += ")";
		return result;
	}
	
	//Handle functions with no arguments
	if (args.length === 0) {
		return tows(name+"()", funcKw);
	}
	
	//Default case (not a special function).
	var result = tows(name, funcKw)+"(";
	for (var i = 0; i < args.length; i++) {
		result += parse(args[i]);
		if (i < args.length-1) {
			result += ", ";
		}
	}
	result += ")";
	return result;
	
}

//Parses string
function parseString(content) {
	if (!content instanceof Array) {
		error("Content must be list of str");
	}
	
	var matchStr;
	var tokens = [];
	var hasMatchBeenFound = false;
	
	debug("Parsing string '"+content+"'");
	
	//Test surround strings
	for (var j = 0; j < surroundStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = surroundStrKw[j][0][0].substring(0, surroundStrKw[j][0][0].indexOf("{0}")).toLowerCase();
		var token2 = surroundStrKw[j][0][0].substring(surroundStrKw[j][0][0].indexOf("{0}")+"{0}".length).toLowerCase();
		debug("Testing str match on '"+token1+"{0}"+token2+"'");
		if (content[0] === token1 && content[content.length-1] === token2) {
			hasMatchBeenFound = true;
			matchStr = tows(surroundStrKw[j][0][0], surroundStrKw);
			//Note: it is assumed all surround strings have a length of only 1 character for each side.
			tokens.push(content.slice(1, content.length-1));
			break;
		}
		tokens = []
	}
	
	//Test ternary string
	for (var j = 0; j < ternaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = ternaryStrKw[j][0][0].substring("{0}".length, ternaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
		var token2 = ternaryStrKw[j][0][0].substring(ternaryStrKw[j][0][0].indexOf("{1}")+"{1}".length, ternaryStrKw[j][0][0].indexOf("{2}")).toLowerCase();
		tokens = splitStrTokens(content, token1, token2);
		if (tokens.length === 3) {
			hasMatchBeenFound = true;
			matchStr = tows(ternaryStrKw[j][0][0], ternaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test binary strings
	for (var j = 0; j < binaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = binaryStrKw[j][0][0].substring("{0}".length, binaryStrKw[j][0][0].indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			hasMatchBeenFound = true;
			matchStr = tows(binaryStrKw[j][0][0], binaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test prefix strings
	for (var j = 0; j < prefixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = prefixStrKw[j][0][0].substring(0, prefixStrKw[j][0][0].indexOf("{0}")).toLowerCase();
		if (content[0] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(prefixStrKw[j][0][0], prefixStrKw);
			tokens.push(splitStrTokens(content, token1)[1]);
			break;
		}
		tokens = []
	}
	
	//Test postfix strings
	for (var j = 0; j < postfixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = postfixStrKw[j][0][0].substring("{0}".length).toLowerCase();
		if (content[content.length-1] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(postfixStrKw[j][0][0], postfixStrKw);
			tokens.push(splitStrTokens(content, token1)[0]);
			break;
		}
		tokens = []
	}
	
	
	//Test normal strings
	if (content.length === 1) {
		for (var j = 0; j < normalStrKw.length && !hasMatchBeenFound; j++) {
			var token1 = normalStrKw[j][0][0].toLowerCase();
			if (content[0] === token1) {
				hasMatchBeenFound = true;
				matchStr = token1;
				break;
			}
		}
	}
	
	//Test for empty string
	if (!hasMatchBeenFound && (content.length === 0 || content[0] === "")) {
		hasMatchBeenFound = true;
		matchStr = "";
	}
	
	//Test if no token (probably not a string)
	if (tokens.length === 0 && !hasMatchBeenFound) {
		if (content.length !== 1) {
			error("Parser broke I guess? (content = '"+JSON.stringify(content)+"')");
		}
		
		if (content[0].startsWith("_h")) {
			return tows("_hero", valueFuncKw)+"("+tows(content[0].substring(2), heroKw)+")";
		} else if (!isNaN(content[0])) {
			return parse(content[0]);
		} else if (content[0] === "{}") {
			if (formatArgs.length === 0) {
				error("Too few arguments supplied for string");
			}
			var result = parse(formatArgs[0]);
			formatArgs.shift();
			return result;
			
		}
	}
	
	var result = tows("_string", valueFuncKw)+"(\""+matchStr+'"';
	//debug("tokens = ")
	//console.log(tokens);
	
	if (tokens.length > 0) {
		result += ", "+parseString(tokens[0]);
	} else {
		result += ", "+tows("null", boolKw);
	}
	if (tokens.length > 1) {
		result += ", "+parseString(tokens[1]);
	} else {
		result += ", "+tows("null", boolKw);
	}
	if (tokens.length > 2) {
		result += ", "+parseString(tokens[2]);
	} else {
		result += ", "+tows("null", boolKw);
	}
	
	result += ")";
	return result;
	
}


//Parses membership (the "." operator).
function parseMember(object, member, parseArgs={}) {
	
	//debug("Parsing member "+dispTokens(member)+" of object "+dispTokens(object));
	
	var name = member[0].text;
	//debug("name = "+name);
	var args = [];
	if (member.length > 1 && member[1].text === '(') {
		args = splitTokens(member.slice(2, member.length-1), ",");
	}
	
	if (name.length === 1 && name >= 'A' && name <= 'Z') {
		return tows("_playerVar", valueFuncKw)+"("+parse(object)+", "+name+")";
	} else if (name === "append") {
		if (parseArgs.isWholeInstruction === true) {
			return parseAssignment(object, args[0], true, "_appendToArray");
			
		} else {
			return tows("_appendToArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		}
		
	} else if (object[0].text === "Button") {
		return tows("Button."+name, buttonKw);
		
	} else if (object[0].text === "Clip") {
		return tows("Clip."+name, clipKw);
		
	} else if (object[0].text === "Color") {
		return tows("Color."+name, colorKw);
		
	} else if (object[0].text === "Comms") {
		return tows("Comms."+name, commsKw);
		
	} else if (object[0].text === "Effect") {
		return tows("Effect."+name, effectKw.concat(playEffectKw));
		
	} else if (name === "exclude") {
		return tows("_removeFromArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		
	} else if (name === "format") {
		formatArgs = args;
		var result = parseString(tokenizeString(object[0].text.substring(1, object[0].text.length-1)));
		formatArgs = [];
		return result;
		
	} else if (name === "getHitPosition") {
		return parse(object, {raycastType:"getHitPosition"});
		
	} else if (name === "getNormal") {
		return parse(object, {raycastType:"getNormal"});
		
	} else if (name === "getPlayerHit") {
		return parse(object, {raycastType:"getPlayerHit"});
		
	} else if (name === "hasLoS") {
		return parse(object, {raycastType:"hasLoS"});
		
	} else if (object[0].text === "Hero") {
		return tows("_hero", valueFuncKw)+"("+tows("Hero."+name, heroKw)+")";
		
	} else if (object[0].text === "Icon") {
		return tows("Icon."+name, iconKw);
		
	} else if (object[0].text === "Impulse") {
		return tows("Impulse."+name, impulseKw);
		
	} else if (object[0].text === "Invis") {
		return tows("Invis."+name, invisKw);
		
	} else if (name === "index") {
		return tows("_indexOfArrayValue", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
		
	} else if (object[0].text === "LosCheck") {
		return tows("LosCheck."+name, losCheckKw);
		
	} else if (object[0].text === "Position") {
		return tows("Position."+name, positionKw);
		
	} else if (object[0].text === "random" && object.length === 1) {
		if (name === "randint" || name === "uniform") {
			return tows("random."+name, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+")";
		} else if (name === "shuffle" || name === "choice") {
			return tows("random."+name, valueFuncKw)+"("+parse(args[0])+")";
		} else {
			error("Unhandled member 'random."+name+"'");
		}
		
	} else if (object[0].text === "Reeval") {
		return tows("Reeval."+name, reevaluationKw);
		
	} else if (object[0].text === "Relativity") {
		return tows("Relativity."+name, relativeKw);
		
	} else if (name === "remove") {
		return parseAssignment(object, args[0], true, "_removeFromArrayByValue");
		
	} else if (name === "slice") {
		return tows("_arraySlice", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+", "+parse(args[1])+")";
		
	} else if (object[0].text === "Status") {
		return tows("Status."+name, statusKw);
		
	} else if (object[0].text === "Team") {
		return tows("Team."+name, teamKw);
		
	} else if (object[0].text === "Transform") {
		return tows("Transform."+name, transformationKw);
		
	} else if (object[0].text === "Vector") {
		return tows("Vector."+name, valueFuncKw);
		
	} else if (object[0].text === "Wait") {
		return tows("Wait."+name, waitKw);
		
	} else if (name === "x") {
		return tows("_xComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else if (name === "y") {
		return tows("_yComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else if (name === "z") {
		return tows("_zComponentOf", valueFuncKw)+"("+parse(object)+")";
	} else {
		
		//Check for player function
		try {
			var translation = tows("_&"+name, funcKw);
		} catch (Error) {
			error("Unhandled member ", member[0]);
		}
		
		var result = translation+"("+parse(object);
		for (var i = 0; i < args.length; i++) {
			result += ", "+parse(args[i]);
		}
		result += ")";
		return result;
	}
	
	error("This shouldn't happen");
	
}

//Parses an assignment of value to variable.
//Determines the function to use for modify/set global/player variable (at index).
function parseAssignment(variable, value, modify, modifyArg=null) {
	
	debug("Parsing assignment of '"+dispTokens(value)+"' to '"+dispTokens(variable)+"'");
	
	var func = "";
	if (modify) {
		func += "modify";
	} else {
		func += "set";
	}
	
	var result = "";
	
	if (variable.length === 1) {
		result += tows("_"+func+"GlobalVar", actionKw)+"("+variable[0].text+", ";
		
	} else {
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(variable, ".", false, true);
		if (operands.length === 2) {
			
			//console.log(operands);
			
			//Check for array
			if (operands[0].length > 1 && operands[0][1].text === '[') {
				result += tows("_"+func+"PlayerVarAtIndex", actionKw)
						+"("+parse(operands[1])+", "+operands[0][0].text+", "
						+parse(operands[0].slice(2, operands[0].length-1))+", ";
			} else {
				if (operands[0].length > 1) {
					error("Unauthorised player variable", operands[1]);
				}
				result += tows("_"+func+"PlayerVar", actionKw)+"("+parse(operands[1])+", "+operands[0][0].text+", ";
			}
			
		} else {
			if (variable[1].text === '[') {
				result += tows("_"+func+"GlobalVarAtIndex", actionKw)+"("+variable[0].text+", "+parse(variable.slice(2, variable.length-1))+", ";
			} else {
				error("Unauthorized global variable", variable);
			}
		}
	}
	
	if (modify) {
		result += tows(modifyArg, operationKw)+", ";
	}
	
	result += parse(value)+")";
	return result;
}

//Parses an array index such as A[1].
function parseArrayMembership(array, membership) {
	
	//[0] -> first of
	if (membership.length === 1 && membership[0].text === '0') {
		return tows("_firstOf", valueFuncKw)+"("+parse(array)+")";
		
	//[-1] -> last of
	} else if (membership.length === 2 && membership[0].text === '-' && membership[1].text === '1') {
		return tows("_lastOf", valueFuncKw)+"("+parse(array)+")";
		
	} else {
		return tows("_valueInArray", valueFuncKw)+"("+parse(array)+", "+parse(membership)+")";
	}
	
	
	error("This shouldn't happen");
	
}

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
function parseLiteralArray(content) {
	
	if (content[0].text !== '[' || content[content.length-1].text !== ']') {
		error("Literal array is not actually a literal array");
	}
	
	if (content.length === 2) {
		return tows("_emptyArray", valueFuncKw);
	} else {
		//check for "in" keyword
		//format is "var for var in array if condition"
		var inOperands = splitTokens(content.slice(1, content.length-1), "in", false);
		if (inOperands.length === 2) {
			var ifOperands = splitTokens(inOperands[1], "if");
			if (ifOperands.length !== 2) {
				//Not a filtered array (eg: [player.C for player in playersInRadius()])
				var forOperands = splitTokens(inOperands[0], "for");
				if (forOperands.length !== 2) {
					error("Malformed 'x for y in z'");
				}
				var forVarName = forOperands[1][0].text;
				if (forLoopVariables[forVarName] !== undefined) {
					error("Variable "+forVarName+" is already used");
				}
				forLoopVariables[forVarName] = inOperands[1];
				
				var result = parse(forOperands[0]);
				delete forLoopVariables[forVarName];
				return result;
				
			} else {
				//Filtered array
				if (inOperands[0].length !== 3 || inOperands[0][1].text !== "for" || inOperands[0][0].text !== inOperands[0][2].text) {
					error("Malformed 'x for x in y'");
				}
				debug("Parsing 'x for x in y if z', x='"+inOperands[0][0].text+"', y='"+dispTokens(ifOperands[0])+"', z='"+dispTokens(ifOperands[1])+"'");
				
				currentArrayElementNames.push(inOperands[0][0].text);
				var result = tows("_filteredArray", valueFuncKw)+"("+parse(ifOperands[0])+", "+parse(ifOperands[1])+")";
				currentArrayElementNames.pop();
				return result;
			}
		} else {
			
			//Literal array with only values ([1,2,3])
			var args = splitTokens(content.slice(1, content.length-1), ",");
			var appendFunc = tows("_appendToArray", valueFuncKw);
			var result = tows("_emptyArray", valueFuncKw);
			for (var i = 0; i < args.length; i++) {
				result = appendFunc+"("+result+", "+parse(args[i])+")";
			}
			return result;
		}
	}
	
	error("This shouldn't happen");
	
}

//Parses a rule condition; expects a token list.
function parseRuleCondition(content) {
	
	//console.log(content);
	debug("Parsing rule condition(s) '"+dispTokens(content)+"'");
	
	var result = "";
	
	if (content[content.length-1].text !== ":") {
		error("If statement must end with ':'");
	}
	
	content = content.slice(1, content.length-1);
	
	//If there is any "or" in the condition, there is only one instruction.
	var orOperands = splitTokens(content, "or");
	
	if (orOperands.length > 1) {
		debug("Condition contains 'or'");
		result += tabLevel(2)+parse(content);
	} else {
		var andOperands = splitTokens(content, "and");
		
		for (var i = 0; i < andOperands.length; i++) {
			
			debug("Parsing condition '"+dispTokens(andOperands[i])+"'");
			//console.log(andOperands);
			
			result += tabLevel(2);
			
			var comparisonOperators = ["==", "!=", "<=", ">=", "<", ">"];
			var comparisonOperands;
			var hasComparisonOperand = false;
			
			for (var j = 0; j < comparisonOperators.length; j++) {
				comparisonOperands = splitTokens(andOperands[i], comparisonOperators[j]);
				if (comparisonOperands.length > 1) {
					if (comparisonOperands.length != 2) {
						error("Chained comparisons are not allowed (eg: a == b == c)");
					}
					result += parse(comparisonOperands[0]);
					currentColNb += comparisonOperators[j].length;
					result += " "+comparisonOperators[j]+" "+parse(comparisonOperands[1]);
					hasComparisonOperand = true;
					break;
				}
			}
			
			if (!hasComparisonOperand) {
				if (andOperands[i][0].text === "not") {
					result += parse(andOperands[i].slice(1)) + " == "+tows("false", boolKw);
				} else {
					result += parse(andOperands[i]) + " == "+tows("true", boolKw);
				}
			}
			
			result += ";\n";
		}
	}
	
	return result;
}

/*
Splits the content to return an array of rules, with an array of (effective) lines.
We cannot do split('\n') because we need to handle backslashed lines, and multi-line functions.
For example, the following will count as 1 line:

function(arg1, arg2,
	arg3, arg4)
	
As well as the following:

#!define owo(x) function(x)\
function(y)

While we're at it, this function also automatically removes comments,
and splits rules as well as macros.
It also resolves macros, and tokenizes.
*/

function tokenize(content) {
	
	if (!content.endsWith('\n')) {
		content += '\n';
	}
	
	//Not the full list of tokens; namely, brackets aren't in this list.
	//Sorted by longest first, for greediness.
	var tokens = [
		"==",
		"!=",
		"<=",
		">=",
		"+=",
		"-=",
		"*=",
		"/=",
		"%=",
		"**=",
		"<",
		">",
		"=",
		"++",
		"--",
		"+",
		"-",
		",",
		"/",
		"%",
		"**",
		"*",
		".",
		":",
		"\\",
	];
	
	
	var rules = [];
	var macros = [];
	
	var isInSpecial = false;
	//var isInString = false;
	var currentStrDelimiter = "";
	var isInLineComment = false;
	var isInStrComment = false;
	var isInMacro = false;
	var currentStrCommentDelimiter = "";
	var bracketsLevel = 0;
	var isInRule = false;
	var currentRule = {};
	var currentRuleLine = {};
	//var currentToken = {"text":""};
	var currentMacro = {};
	var isBackslashed = false;
	var isInTextToken = false;
	
	//"Timer" used for end of special zones (eg: the end of a multiline string is 3 characters long).
	var timer = 0;
	
	//Timer used when inside a macro resolution, in order to stop incrementing column+line.
	var macroTimer = 0;
	var macroCols = 0;
	var macroLines = 0;
	
	currentLineNb = 1;
	currentColNb = 0;
	
	var i = 0;
	
	function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		currentRuleLine.tokens.push({
			"lineNb":currentLineNb,
			"colNb":currentColNb,
			"text":text
		});
		
		i += text.length-1;
		currentColNb += text.length-1;
	}
	
	function newRuleLine() {
		
		if (currentRuleLine.tokens !== undefined && currentRuleLine.tokens.length > 0) {
			currentRule.lines.push(currentRuleLine);
		}
		
		currentRuleLine = {
			"indentLevel":0,
			"tokens":[]
		};
	}
	
	newRuleLine();
		
	for (i = 0; i < content.length; i++) {
		
		//console.log(i);
		//await sleep(5);
		
		isInSpecial = (isInLineComment || isInStrComment || isInMacro);
		
		
		if (macroTimer > 0) {
			macroTimer--;
			if (macroTimer === 0) {
				//debug("macro lines = "+macroLines+", macro cols = "+macroCols);
				currentLineNb += macroLines;
				currentColNb = macroCols;
			}
		}
		
		if (macroTimer === 0) {
			currentColNb++;
		}
		
		
		if (timer > 0) {
			timer--;
			if (timer === 0) {
				isInStrComment = false;
			}
		}
		
		if (content[i] === '\n') {
			if (!isBackslashed) {
				if (isInMacro) {
					isInMacro = false;
					macros.push(parseMacro(currentMacro));
				}
			}
			//For some reason, in Python, line comments aren't affected by backslashes before new lines.
			if (isInLineComment) {
				isInLineComment = false;
				
			
			//Do not end the instruction if there is a line break inside a function, or the line is backslashed.
			} else if (bracketsLevel === 0 && isInRule && !isBackslashed) {
				newRuleLine();
				
			}
			if (macroTimer === 0) {
				currentLineNb++;
				currentColNb = 0;
			}
			
		} else if (!isInStrComment && !isInMacro && !isInLineComment) {
			
			if (content.startsWith("    ", i) && currentRuleLine.tokens.length === 0) {
				currentRuleLine.indentLevel++;
				currentColNb += "    ".length-1;
			} else if (content.startsWith("\t", i)) {
				if (currentRuleLine.tokens.length === 0) {
					currentRuleLine.indentLevel++;
				}
			} else if (content[i] === ' ') {
				//do nothing
			} else if (content[i] === '\\') {
				//do nothing
			} else if (content[i] === '(' || content[i] === '[' || content[i] === '{') {
				bracketsLevel++;
				addToken(content[i]);
				
			} else if (content[i] === ')' || content[i] === ']' || content[i] === '}') {
				bracketsLevel--;
				if (bracketsLevel < 0) {
					error("Brackets level below 0");
				}
				addToken(content[i]);
				
			} else if (content.startsWith("#!", i)) {
				if (!isInRule) {
					isInMacro = true;
					currentMacro = {
						"lineStart":currentLineNb,
						"content":""
					};
				} else {
					error("Cannot declare macro inside a rule");
				}
				
			} else if (content[i] === '#') {
				isInLineComment = true;
			
			} else if (content.startsWith("'''", i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = "'''";
				
			} else if (content.startsWith('"""', i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = '"""';
				
			} else if (content[i] === '"' || content[i] === '\'') {
				currentStrDelimiter = content[i];
				//Get to the end of the string
				var j = i+1;
				for (; j < content.length; j++) {
					
					//Test for potentially unclosed string
					if (!isBackslashed && content[j] === '\n') {
						error("Unclosed string");
					}
					
					if (!isBackslashed && content[j] === currentStrDelimiter) {
						break;
					}
						
					if (content[j] === '\\') {
						isBackslashed = true;
					} else {
						isBackslashed = false;
					}
					
					
				}
				
				j += 1; //account for closing delimiter
				
				if (j > i) {
					addToken(content.substring(i, j));
				} else {
					error("Failed to parse string '"+content.substring(i, j)+"' (malformed string?)");
				}
								
			} else {
				//Test each macro
				for (var j = 0; j < macros.length; j++) {
					if (content.startsWith(macros[j].name, i)) {
						
						
						var text;
						var replacement;
						
						if (macros[j].isFunction) {
							//debug("Resolving function macro "+macros[j].name);
							var bracketPos = getBracketPositions(content.substring(i), true);
							text = content.substring(i, i+bracketPos[1]+1);
							var macroArgs = getArgs(content.substring(i+bracketPos[0]+1, i+bracketPos[1]));
							replacement = resolveMacro(macros[j], macroArgs);
							
						} else {
							//debug("Resolving normal macro "+macros[j].name);
							text = macros[j].name;
							replacement = macros[j].replacement;
						}
						
						content = content.substring(0, i) + replacement + content.substring(i+text.length);
						if (macroTimer === 0) {
							if (text.indexOf('\n') >= 0) {
								macroCols = text.length - text.lastIndexOf('\n');
								macroLines = text.split('\n').length-1;
							} else {
								macroCols = text.length;
							}
						}
						macroTimer += replacement.length;
						
						//debug("Text: "+text);
						//debug("Replacement: "+replacement);
						
						j = 0;
					}
				}
				
				//Get token
				var j = i;
				for (; j < content.length && isVarChar(content[j]); j++);
				
				if (j > i) {
					if (content.substring(i, j) === "@Rule") {
						isInRule = true;
						rules.push(currentRule);
						currentRule = {
							"lineStart":currentLineNb,
							"lines":[]
						};
						newRuleLine();
					} else if (!isInRule) {
						error("Found code outside a rule : "+content[i]);
					}
					
					//Handle the special case of min= and max= operators
					if ((content.substring(i,j) === "min" || content.substring(i,j) === "max") && content[i+"min".length] === '=') {
						j++;
					}
					addToken(content.substring(i, j))
				} else {
					
					var hasTokenBeenFound = false;
					//Test each remaining token
					for (var h = 0; h < tokens.length; h++) {
						if (content.startsWith(tokens[h], i)) {
							addToken(content.substring(i, i+tokens[h].length));
							hasTokenBeenFound = true;
							break;
						}
					}
					
					if (!hasTokenBeenFound && content[i] !== '\r') {
						error("Unknown token '"+content[i]+"'");
					}
				}
				
				
				
			}
			
		} else if (isInStrComment && content.startsWith(currentStrCommentDelimiter, i)) {
			timer = 3;
			
		}
		
		
		if (content[i] === '\\') {
			isBackslashed = true;
		} else {
			isBackslashed = false;
		}
		
		if (isInMacro) {
			currentMacro.content += content[i];
		}
	}
	
	rules.push(currentRule);
	
	//console.log("macros = ");
	//console.log(macros);
	
	return rules.slice(1)
	
}

function resolveMacro(macro, args=[]) {
	if (macro.isFunction) {
		
		//debug("Args: "+args);
		if (args.length != macro.args.length) {
			error("Wrong number of arguments for macro "+macro.name);
		}
		
		var result = macro.replacement;
		//debug("result 1 = "+result);
		
		//No lookbehinds; no other way than to manually loop...
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < macro.args.length; j++) {
				if (result.startsWith(macro.args[j], i)) {
					if ((i > 0 && !isVarChar(result[i-1])) && (i < result.length-1 && !isVarChar(result[i+macro.args[j].length]))) {
						result = result.substring(0, i)+args[j]+result.substring(i+macro.args[j].length);
					}
				}
			}
		}
		for (var i = 0; i < macro.args; i++) {
			result = result.replace(new RegExp("^(?!\\w).+"+macro.args[i]+"(?!\\w)", 'g'), args[i]);
		}
		//debug("result 2 = "+result);
		result = result.replace(new RegExp("\\\\\\n", 'g'), '\n');
		//debug("result 3 = "+result);
		return result;
	} else {
		return macro.replacement;
	}
}

function parseMacro(macro) {
	
	macro.content = macro.content.substring("#!define ".length);
	var bracketPos = getBracketPositions(macro.content);
	
	if (bracketPos.length === 0 || macro.content.indexOf(" ") < bracketPos[0]) {
		//Not a function macro
		macro.isFunction = false;
		macro.text = macro.content.substring(0, macro.content.indexOf(" ")).trim();
		macro.name = macro.text;
		macro.replacement = macro.content.substring(macro.content.indexOf(" ")).trim();
		
	} else {
		//Function macro
		macro.isFunction = true;
		macro.text = macro.content.substring(0, bracketPos[1]+1).trim();
		macro.name = macro.content.substring(0, bracketPos[0]).trim();
		macro.replacement = macro.content.substring(bracketPos[1]+1).trim();
		macro.args = getArgs(macro.content.substring(bracketPos[0]+1, bracketPos[1]));
	}
	
	return macro;
	
}

//Tokenizes string
function tokenizeString(str) {
	
	var tokenList = []
	var originalColNb = currentColNb;
	
	debug("Tokenizing string '"+str+"'");
	
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		
		currentColNb = originalColNb+i;
		var currentToken = "";
		var hasTokenBeenFound = false;
		
		//Test tokens
		for (var j = 0; j < strTokens.length; j++) {
			if (str.startsWith(strTokens[j], i)) {
				currentToken = strTokens[j];
				hasTokenBeenFound = true;
				break;
			}
		}
		
		if (!hasTokenBeenFound) {
			//Test numbers
			var j = i;
			for (; (str[j] >= '0' && str[j] <= '9') || str[j] === '.' || str[j] === '-'; j++);
			
			if (j !== i) {
				currentToken = str.substring(i, j);
				hasTokenBeenFound = true;
			}
		}
		
		//Test for formatting
		if (!hasTokenBeenFound) {
			if (str.startsWith("{}", i)) {
				currentToken = "{}";
				hasTokenBeenFound = true;
			}
		}
		
		if (!hasTokenBeenFound) {
			var j = i+1;
			for (; str[j] >= 'a' && str[j] <= 'z'; j++);
			error("No string translation found for '"+str.substring(i, j)+"'");
		}
		
		tokenList.push(currentToken);
		i += currentToken.length-1;
		
	}
	
	return tokenList;
}

module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
    decompileConditions: decompileConditions,
    compile: compile,
};
