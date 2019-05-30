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

//Ongoing - Global
[["global"], [
	"ongoing-global",
]],

//Ongoing - Each Player
[["eachPlayer"], [
	"ongoing-eachplayer",
]],

];

//Action keywords. An action is defined as a function that does not return a value.
var actionKw = [


[["hudText"], [
	"createHudText",
]],
[["_modifyGlobalVar"], [
	"modifyGlobalVariable",
]],
[["_setGlobalVar"], [
	"setGlobalVariable",
]],

];

//A value function is defined as a function that returns a value.
var valueFuncKw = [

[["_emptyArray"], [
	"emptyArray",
]],
[["_globalVar"], [
	"globalVariable",
]],
[["_hero"], [
	"hero",
]],
[["getMatchTime()"], [
	"matchTime",
]],
[["nearestWalkablePosition"], [
	"nearestWalkablePosition",
]],
[["round"], [
	"roundToInteger",
]],
[["_string"], [
	"string",
]],
[["vector"], [
	"vector",
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

[["torbjorn"], [
	"Torbjörn",
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
]]

];

var visibleToKw = [

[["ALL_PLAYERS"], [
	"allPlayers",
]]

];

var teamKw = [

[["ALL_TEAMS"], [
	"allTeams",
]]

];

var positionKw = [

[["LEFT"], [
	"left",
]]

];

var colorKw = [

[["Color.WHITE"], [
	"white",
]]

];

var reevaluationKb = [

[["VISIBILITY_AND_STRING"], [
	"visibleToAndString",
]]

];

//This is not a keyword list like the others (used for translation).
//Rather, it is a list of keywords that can be integrated into strings (eg: hero names, team names, numbers, etc).
var stringKw = [];
for (var i = 0; i < heroKw.length; i++) {
	stringKw.push(heroKw[i][0][0]);
}

//A constant is defined as anything that isn't a function (or variable).
var constantKw = heroKw.concat(boolKw).concat(roundKw).concat(operationKw).concat(visibleToKw).concat(teamKw).concat(positionKw).concat(colorKw).concat(reevaluationKb);


//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw).concat(heroKw);