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
[["_&getNormalizedHealth"], [
	"normalizedHealth",
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
[["hostPlayer"], [
	"hostPlayer",
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

var funcKw = actionKw.concat(valueFuncKw);