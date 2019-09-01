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

//Array of languages. As of now, only English is supported.
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

var currentLanguage = "en";

var ruleKw = [
    {
        "opy": "@Rule",
        "en": "rule"
    },
    {
        "opy": "@Event",
        "en": "event"
    },
    {
        "opy": "_conditions",
        "en": "conditions"
    },
    {
        "opy": "_actions",
        "en": "actions"
    }
];

//Event keywords
var eventKw = [
    {
        "opy": "global",
        "en": "ongoing-global"
    },
    {
        "opy": "eachPlayer",
        "en": "ongoing-eachplayer"
    },
    {
        "opy": "playerTookDamage",
        "en": "playerTookDamage"
    },
    {
        "opy": "playerDealtDamage",
        "en": "playerDealtDamage"
    },
    {
        "opy": "playerDealtFinalBlow",
        "en": "playerDealtFinalBlow"
    },
    {
        "opy": "playerDied",
        "en": "playerDied"
    },
    {
        "opy": "playerEarnedElimination",
        "en": "playerEarnedElimination"
    },
    {
        "opy": "playerDealtHealing",
        "en": "playerDealtHealing"
    },
    {
        "opy": "playerReceivedHealing",
        "en": "playerReceivedHealing"
    },
    {
        "opy": "playerJoined",
        "en": "playerJoinedMatch"
    },
    {
        "opy": "playerLeft",
        "en": "playerLeftMatch"
    },
    {
        "opy": "all",
        "en": "all"
    },
    {
        "opy": "1",
        "en": "team1"
    },
    {
        "opy": "2",
        "en": "team2"
    },
    {
        "opy": "slot0",
        "en": "slot0"
    },
    {
        "opy": "slot1",
        "en": "slot1"
    },
    {
        "opy": "slot2",
        "en": "slot2"
    },
    {
        "opy": "slot3",
        "en": "slot3"
    },
    {
        "opy": "slot4",
        "en": "slot4"
    },
    {
        "opy": "slot5",
        "en": "slot5"
    },
    {
        "opy": "slot6",
        "en": "slot6"
    },
    {
        "opy": "slot7",
        "en": "slot7"
    },
    {
        "opy": "slot8",
        "en": "slot8"
    },
    {
        "opy": "slot9",
        "en": "slot9"
    },
    {
        "opy": "slot10",
        "en": "slot10"
    },
    {
        "opy": "slot11",
        "en": "slot11"
    }
];

//Global variables, used to convert to names during decompilation.
var globalVarKw = [
    {
        "opy": "A",
        "en": "A"
    },
    {
        "opy": "B",
        "en": "B"
    },
    {
        "opy": "C",
        "en": "C"
    },
    {
        "opy": "D",
        "en": "D"
    },
    {
        "opy": "E",
        "en": "E"
    },
    {
        "opy": "F",
        "en": "F"
    },
    {
        "opy": "G",
        "en": "G"
    },
    {
        "opy": "H",
        "en": "H"
    },
    {
        "opy": "I",
        "en": "I"
    },
    {
        "opy": "J",
        "en": "J"
    },
    {
        "opy": "K",
        "en": "K"
    },
    {
        "opy": "L",
        "en": "L"
    },
    {
        "opy": "M",
        "en": "M"
    },
    {
        "opy": "N",
        "en": "N"
    },
    {
        "opy": "O",
        "en": "O"
    },
    {
        "opy": "P",
        "en": "P"
    },
    {
        "opy": "Q",
        "en": "Q"
    },
    {
        "opy": "R",
        "en": "R"
    },
    {
        "opy": "S",
        "en": "S"
    },
    {
        "opy": "T",
        "en": "T"
    },
    {
        "opy": "U",
        "en": "U"
    },
    {
        "opy": "V",
        "en": "V"
    },
    {
        "opy": "W",
        "en": "W"
    },
    {
        "opy": "X",
        "en": "X"
    },
    {
        "opy": "Y",
        "en": "Y"
    },
    {
        "opy": "Z",
        "en": "Z"
    }
];

var playerVarKw = [
    {
        "opy": "A",
        "en": "A"
    },
    {
        "opy": "B",
        "en": "B"
    },
    {
        "opy": "C",
        "en": "C"
    },
    {
        "opy": "D",
        "en": "D"
    },
    {
        "opy": "E",
        "en": "E"
    },
    {
        "opy": "F",
        "en": "F"
    },
    {
        "opy": "G",
        "en": "G"
    },
    {
        "opy": "H",
        "en": "H"
    },
    {
        "opy": "I",
        "en": "I"
    },
    {
        "opy": "J",
        "en": "J"
    },
    {
        "opy": "K",
        "en": "K"
    },
    {
        "opy": "L",
        "en": "L"
    },
    {
        "opy": "M",
        "en": "M"
    },
    {
        "opy": "N",
        "en": "N"
    },
    {
        "opy": "O",
        "en": "O"
    },
    {
        "opy": "P",
        "en": "P"
    },
    {
        "opy": "Q",
        "en": "Q"
    },
    {
        "opy": "R",
        "en": "R"
    },
    {
        "opy": "S",
        "en": "S"
    },
    {
        "opy": "T",
        "en": "T"
    },
    {
        "opy": "U",
        "en": "U"
    },
    {
        "opy": "V",
        "en": "V"
    },
    {
        "opy": "W",
        "en": "W"
    },
    {
        "opy": "X",
        "en": "X"
    },
    {
        "opy": "Y",
        "en": "Y"
    },
    {
        "opy": "Z",
        "en": "Z"
    }
];

var constantKw = [];
for (var constant of Object.keys(constantValues)) {
	constantKw = constantKw.concat(constantValues[constant].values);
}

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
    {
        "opy": "",
        "en": ""
    }
];

var normalStrKw = [
    {
        "opy": "Zones",
        "en": "Zones"
    },
    {
        "opy": "Zone",
        "en": "Zone"
    },
    {
        "opy": "You Win",
        "en": "You Win"
    },
    {
        "opy": "You Lose",
        "en": "You Lose"
    },
    {
        "opy": "You",
        "en": "You"
    },
    {
        "opy": "Yes",
        "en": "Yes"
    },
    {
        "opy": "Yellow",
        "en": "Yellow"
    },
    {
        "opy": "Wow",
        "en": "Wow"
    },
    {
        "opy": "Worst",
        "en": "Worst"
    },
    {
        "opy": "Worse",
        "en": "Worse"
    },
    {
        "opy": "Wisdom",
        "en": "Wisdom"
    },
    {
        "opy": "Wins",
        "en": "Wins"
    },
    {
        "opy": "Winners",
        "en": "Winners"
    },
    {
        "opy": "Winner",
        "en": "Winner"
    },
    {
        "opy": "Win",
        "en": "Win"
    },
    {
        "opy": "Wild",
        "en": "Wild"
    },
    {
        "opy": "White",
        "en": "White"
    },
    {
        "opy": "West",
        "en": "West"
    },
    {
        "opy": "Well Played",
        "en": "Well Played"
    },
    {
        "opy": "Welcome",
        "en": "Welcome"
    },
    {
        "opy": "Warning",
        "en": "Warning"
    },
    {
        "opy": "Walls",
        "en": "Walls"
    },
    {
        "opy": "Wall",
        "en": "Wall"
    },
    {
        "opy": "Waiting",
        "en": "Waiting"
    },
    {
        "opy": "Wait",
        "en": "Wait"
    },
    {
        "opy": "Vortices",
        "en": "Vortices"
    },
    {
        "opy": "Vortex",
        "en": "Vortex"
    },
    {
        "opy": "Visible",
        "en": "Visible"
    },
    {
        "opy": "Victory",
        "en": "Victory"
    },
    {
        "opy": "Use Ultimate Ability",
        "en": "Use Ultimate Ability"
    },
    {
        "opy": "Use Ability 2",
        "en": "Use Ability 2"
    },
    {
        "opy": "Use Ability 1",
        "en": "Use Ability 1"
    },
    {
        "opy": "Uploading",
        "en": "Uploading"
    },
    {
        "opy": "Uploaded",
        "en": "Uploaded"
    },
    {
        "opy": "Upload",
        "en": "Upload"
    },
    {
        "opy": "Upgrades",
        "en": "Upgrades"
    },
    {
        "opy": "Upgrade",
        "en": "Upgrade"
    },
    {
        "opy": "Up",
        "en": "Up"
    },
    {
        "opy": "Unstable",
        "en": "Unstable"
    },
    {
        "opy": "Unsafe",
        "en": "Unsafe"
    },
    {
        "opy": "Unlocking",
        "en": "Unlocking"
    },
    {
        "opy": "Unlocked",
        "en": "Unlocked"
    },
    {
        "opy": "Unlock",
        "en": "Unlock"
    },
    {
        "opy": "Unlimited",
        "en": "Unlimited"
    },
    {
        "opy": "Unknown",
        "en": "Unknown"
    },
    {
        "opy": "Under",
        "en": "Under"
    },
    {
        "opy": "Ultimate Ability",
        "en": "Ultimate Ability"
    },
    {
        "opy": "Ugh",
        "en": "Ugh"
    },
    {
        "opy": "Turrets",
        "en": "Turrets"
    },
    {
        "opy": "Turret",
        "en": "Turret"
    },
    {
        "opy": "Try Again",
        "en": "Try Again"
    },
    {
        "opy": "Transferring",
        "en": "Transferring"
    },
    {
        "opy": "Transferred",
        "en": "Transferred"
    },
    {
        "opy": "Transfer",
        "en": "Transfer"
    },
    {
        "opy": "Traitors",
        "en": "Traitors"
    },
    {
        "opy": "Traitor",
        "en": "Traitor"
    },
    {
        "opy": "Trading",
        "en": "Trading"
    },
    {
        "opy": "Traded",
        "en": "Traded"
    },
    {
        "opy": "Trade",
        "en": "Trade"
    },
    {
        "opy": "Total",
        "en": "Total"
    },
    {
        "opy": "Times",
        "en": "Times"
    },
    {
        "opy": "Time",
        "en": "Time"
    },
    {
        "opy": "Tiebreaker",
        "en": "Tiebreaker"
    },
    {
        "opy": "Threats",
        "en": "Threats"
    },
    {
        "opy": "Threat Levels",
        "en": "Threat Levels"
    },
    {
        "opy": "Threat Level",
        "en": "Threat Level"
    },
    {
        "opy": "Threat",
        "en": "Threat"
    },
    {
        "opy": "That Was Awesome",
        "en": "That Was Awesome"
    },
    {
        "opy": "Thanks",
        "en": "Thanks"
    },
    {
        "opy": "Thank You",
        "en": "Thank You"
    },
    {
        "opy": "Terrible",
        "en": "Terrible"
    },
    {
        "opy": "Teams",
        "en": "Teams"
    },
    {
        "opy": "Teammates",
        "en": "Teammates"
    },
    {
        "opy": "Teammate",
        "en": "Teammate"
    },
    {
        "opy": "Team",
        "en": "Team"
    },
    {
        "opy": "Targets",
        "en": "Targets"
    },
    {
        "opy": "Target",
        "en": "Target"
    },
    {
        "opy": "Surviving",
        "en": "Surviving"
    },
    {
        "opy": "Survived",
        "en": "Survived"
    },
    {
        "opy": "Survive",
        "en": "Survive"
    },
    {
        "opy": "Superb",
        "en": "Superb"
    },
    {
        "opy": "Sunk",
        "en": "Sunk"
    },
    {
        "opy": "Sudden Death",
        "en": "Sudden Death"
    },
    {
        "opy": "Success",
        "en": "Success"
    },
    {
        "opy": "Suboptimal",
        "en": "Suboptimal"
    },
    {
        "opy": "Stunning",
        "en": "Stunning"
    },
    {
        "opy": "Stunned",
        "en": "Stunned"
    },
    {
        "opy": "Stun",
        "en": "Stun"
    },
    {
        "opy": "Strength",
        "en": "Strength"
    },
    {
        "opy": "Stopping",
        "en": "Stopping"
    },
    {
        "opy": "Stopped",
        "en": "Stopped"
    },
    {
        "opy": "Stop",
        "en": "Stop"
    },
    {
        "opy": "Staying",
        "en": "Staying"
    },
    {
        "opy": "Stayed",
        "en": "Stayed"
    },
    {
        "opy": "Stay Away",
        "en": "Stay Away"
    },
    {
        "opy": "Stay",
        "en": "Stay"
    },
    {
        "opy": "Status",
        "en": "Status"
    },
    {
        "opy": "Starting",
        "en": "Starting"
    },
    {
        "opy": "Started",
        "en": "Started"
    },
    {
        "opy": "Start",
        "en": "Start"
    },
    {
        "opy": "Stars",
        "en": "Stars"
    },
    {
        "opy": "Star",
        "en": "Star"
    },
    {
        "opy": "Stable",
        "en": "Stable"
    },
    {
        "opy": "Stabilizing",
        "en": "Stabilizing"
    },
    {
        "opy": "Stabilized",
        "en": "Stabilized"
    },
    {
        "opy": "Stabilize",
        "en": "Stabilize"
    },
    {
        "opy": "Spheres",
        "en": "Spheres"
    },
    {
        "opy": "Sphere",
        "en": "Sphere"
    },
    {
        "opy": "Speeds",
        "en": "Speeds"
    },
    {
        "opy": "Speed",
        "en": "Speed"
    },
    {
        "opy": "Spawning",
        "en": "Spawning"
    },
    {
        "opy": "Spawned",
        "en": "Spawned"
    },
    {
        "opy": "Spawn",
        "en": "Spawn"
    },
    {
        "opy": "Sparkles",
        "en": "Sparkles"
    },
    {
        "opy": "Spades",
        "en": "Spades"
    },
    {
        "opy": "Spade",
        "en": "Spade"
    },
    {
        "opy": "Southwest",
        "en": "Southwest"
    },
    {
        "opy": "Southeast",
        "en": "Southeast"
    },
    {
        "opy": "South",
        "en": "South"
    },
    {
        "opy": "Sorry",
        "en": "Sorry"
    },
    {
        "opy": "Sold",
        "en": "Sold"
    },
    {
        "opy": "Slowest",
        "en": "Slowest"
    },
    {
        "opy": "Slower",
        "en": "Slower"
    },
    {
        "opy": "Slow",
        "en": "Slow"
    },
    {
        "opy": "Slept",
        "en": "Slept"
    },
    {
        "opy": "Sleeping",
        "en": "Sleeping"
    },
    {
        "opy": "Sleep",
        "en": "Sleep"
    },
    {
        "opy": "Skipping",
        "en": "Skipping"
    },
    {
        "opy": "Skipped",
        "en": "Skipped"
    },
    {
        "opy": "Skip",
        "en": "Skip"
    },
    {
        "opy": "Sinking",
        "en": "Sinking"
    },
    {
        "opy": "Sink",
        "en": "Sink"
    },
    {
        "opy": "Shuffled",
        "en": "Shuffled"
    },
    {
        "opy": "Shuffle",
        "en": "Shuffle"
    },
    {
        "opy": "Shops",
        "en": "Shops"
    },
    {
        "opy": "Shop",
        "en": "Shop"
    },
    {
        "opy": "Severing",
        "en": "Severing"
    },
    {
        "opy": "Severed",
        "en": "Severed"
    },
    {
        "opy": "Severe",
        "en": "Severe"
    },
    {
        "opy": "Sever",
        "en": "Sever"
    },
    {
        "opy": "Server Load Peak",
        "en": "Server Load Peak"
    },
    {
        "opy": "Server Load Average",
        "en": "Server Load Average"
    },
    {
        "opy": "Server Load",
        "en": "Server Load"
    },
    {
        "opy": "Selling",
        "en": "Selling"
    },
    {
        "opy": "Sell",
        "en": "Sell"
    },
    {
        "opy": "Selecting",
        "en": "Selecting"
    },
    {
        "opy": "Selected",
        "en": "Selected"
    },
    {
        "opy": "Select",
        "en": "Select"
    },
    {
        "opy": "Securing",
        "en": "Securing"
    },
    {
        "opy": "Secured",
        "en": "Secured"
    },
    {
        "opy": "Secure",
        "en": "Secure"
    },
    {
        "opy": "Secondary Fire",
        "en": "Secondary Fire"
    },
    {
        "opy": "Scores",
        "en": "Scores"
    },
    {
        "opy": "Score",
        "en": "Score"
    },
    {
        "opy": "Saving",
        "en": "Saving"
    },
    {
        "opy": "Saved",
        "en": "Saved"
    },
    {
        "opy": "Save",
        "en": "Save"
    },
    {
        "opy": "Safe",
        "en": "Safe"
    },
    {
        "opy": "Running",
        "en": "Running"
    },
    {
        "opy": "Run",
        "en": "Run"
    },
    {
        "opy": "Rounds Won",
        "en": "Rounds Won"
    },
    {
        "opy": "Rounds Lost",
        "en": "Rounds Lost"
    },
    {
        "opy": "Rounds",
        "en": "Rounds"
    },
    {
        "opy": "Round",
        "en": "Round"
    },
    {
        "opy": "Right",
        "en": "Right"
    },
    {
        "opy": "Revealing",
        "en": "Revealing"
    },
    {
        "opy": "Revealed",
        "en": "Revealed"
    },
    {
        "opy": "Reveal",
        "en": "Reveal"
    },
    {
        "opy": "Resurrecting",
        "en": "Resurrecting"
    },
    {
        "opy": "Resurrected",
        "en": "Resurrected"
    },
    {
        "opy": "Resurrect",
        "en": "Resurrect"
    },
    {
        "opy": "Resources",
        "en": "Resources"
    },
    {
        "opy": "Resource",
        "en": "Resource"
    },
    {
        "opy": "Rescuing",
        "en": "Rescuing"
    },
    {
        "opy": "Rescued",
        "en": "Rescued"
    },
    {
        "opy": "Rescue",
        "en": "Rescue"
    },
    {
        "opy": "Remaining",
        "en": "Remaining"
    },
    {
        "opy": "Remain",
        "en": "Remain"
    },
    {
        "opy": "Red",
        "en": "Red"
    },
    {
        "opy": "Recovering",
        "en": "Recovering"
    },
    {
        "opy": "Recovered",
        "en": "Recovered"
    },
    {
        "opy": "Recover",
        "en": "Recover"
    },
    {
        "opy": "Records",
        "en": "Records"
    },
    {
        "opy": "Record",
        "en": "Record"
    },
    {
        "opy": "Ready",
        "en": "Ready"
    },
    {
        "opy": "Reaching",
        "en": "Reaching"
    },
    {
        "opy": "Reached",
        "en": "Reached"
    },
    {
        "opy": "Reach",
        "en": "Reach"
    },
    {
        "opy": "Rank S",
        "en": "Rank S"
    },
    {
        "opy": "Rank F",
        "en": "Rank F"
    },
    {
        "opy": "Rank E",
        "en": "Rank E"
    },
    {
        "opy": "Rank D",
        "en": "Rank D"
    },
    {
        "opy": "Rank C",
        "en": "Rank C"
    },
    {
        "opy": "Rank B",
        "en": "Rank B"
    },
    {
        "opy": "Rank A",
        "en": "Rank A"
    },
    {
        "opy": "Rank",
        "en": "Rank"
    },
    {
        "opy": "Raising",
        "en": "Raising"
    },
    {
        "opy": "Raised",
        "en": "Raised"
    },
    {
        "opy": "Raise",
        "en": "Raise"
    },
    {
        "opy": "Purple",
        "en": "Purple"
    },
    {
        "opy": "Purifying",
        "en": "Purifying"
    },
    {
        "opy": "Purify",
        "en": "Purify"
    },
    {
        "opy": "Purified",
        "en": "Purified"
    },
    {
        "opy": "Protecting",
        "en": "Protecting"
    },
    {
        "opy": "Protected",
        "en": "Protected"
    },
    {
        "opy": "Protect",
        "en": "Protect"
    },
    {
        "opy": "Projectiles",
        "en": "Projectiles"
    },
    {
        "opy": "Projectile",
        "en": "Projectile"
    },
    {
        "opy": "Primary Fire",
        "en": "Primary Fire"
    },
    {
        "opy": "Price",
        "en": "Price"
    },
    {
        "opy": "Power-Ups",
        "en": "Power-Ups"
    },
    {
        "opy": "Power-Up",
        "en": "Power-Up"
    },
    {
        "opy": "Power",
        "en": "Power"
    },
    {
        "opy": "Position",
        "en": "Position"
    },
    {
        "opy": "Points Lost",
        "en": "Points Lost"
    },
    {
        "opy": "Points Earned",
        "en": "Points Earned"
    },
    {
        "opy": "Points",
        "en": "Points"
    },
    {
        "opy": "Point",
        "en": "Point"
    },
    {
        "opy": "Playing",
        "en": "Playing"
    },
    {
        "opy": "Players",
        "en": "Players"
    },
    {
        "opy": "Player",
        "en": "Player"
    },
    {
        "opy": "Played",
        "en": "Played"
    },
    {
        "opy": "Play",
        "en": "Play"
    },
    {
        "opy": "Piles",
        "en": "Piles"
    },
    {
        "opy": "Pile",
        "en": "Pile"
    },
    {
        "opy": "Picking",
        "en": "Picking"
    },
    {
        "opy": "Picked",
        "en": "Picked"
    },
    {
        "opy": "Pick",
        "en": "Pick"
    },
    {
        "opy": "Phases",
        "en": "Phases"
    },
    {
        "opy": "Phase",
        "en": "Phase"
    },
    {
        "opy": "Payloads",
        "en": "Payloads"
    },
    {
        "opy": "Payload",
        "en": "Payload"
    },
    {
        "opy": "Participants",
        "en": "Participants"
    },
    {
        "opy": "Participant",
        "en": "Participant"
    },
    {
        "opy": "Overtime",
        "en": "Overtime"
    },
    {
        "opy": "Over",
        "en": "Over"
    },
    {
        "opy": "Outside",
        "en": "Outside"
    },
    {
        "opy": "Outgoing",
        "en": "Outgoing"
    },
    {
        "opy": "Out Of View",
        "en": "Out Of View"
    },
    {
        "opy": "Optimizing",
        "en": "Optimizing"
    },
    {
        "opy": "Optimized",
        "en": "Optimized"
    },
    {
        "opy": "Optimize",
        "en": "Optimize"
    },
    {
        "opy": "Optimal",
        "en": "Optimal"
    },
    {
        "opy": "Oops",
        "en": "Oops"
    },
    {
        "opy": "Oof",
        "en": "Oof"
    },
    {
        "opy": "On",
        "en": "On"
    },
    {
        "opy": "Off",
        "en": "Off"
    },
    {
        "opy": "Obtaining",
        "en": "Obtaining"
    },
    {
        "opy": "Obtained",
        "en": "Obtained"
    },
    {
        "opy": "Obtain",
        "en": "Obtain"
    },
    {
        "opy": "Objects",
        "en": "Objects"
    },
    {
        "opy": "Objectives",
        "en": "Objectives"
    },
    {
        "opy": "Objective",
        "en": "Objective"
    },
    {
        "opy": "Object",
        "en": "Object"
    },
    {
        "opy": "Not Today",
        "en": "Not Today"
    },
    {
        "opy": "Northwest",
        "en": "Northwest"
    },
    {
        "opy": "Northeast",
        "en": "Northeast"
    },
    {
        "opy": "North",
        "en": "North"
    },
    {
        "opy": "Normal",
        "en": "Normal"
    },
    {
        "opy": "None",
        "en": "None"
    },
    {
        "opy": "No Thanks",
        "en": "No Thanks"
    },
    {
        "opy": "No",
        "en": "No"
    },
    {
        "opy": "Nice Try",
        "en": "Nice Try"
    },
    {
        "opy": "Next Upgrade",
        "en": "Next Upgrade"
    },
    {
        "opy": "Next Targets",
        "en": "Next Targets"
    },
    {
        "opy": "Next Target",
        "en": "Next Target"
    },
    {
        "opy": "Next Round",
        "en": "Next Round"
    },
    {
        "opy": "Next Players",
        "en": "Next Players"
    },
    {
        "opy": "Next Player",
        "en": "Next Player"
    },
    {
        "opy": "Next Phase",
        "en": "Next Phase"
    },
    {
        "opy": "Next Objects",
        "en": "Next Objects"
    },
    {
        "opy": "Next Objective",
        "en": "Next Objective"
    },
    {
        "opy": "Next Object",
        "en": "Next Object"
    },
    {
        "opy": "Next Mission",
        "en": "Next Mission"
    },
    {
        "opy": "Next Level",
        "en": "Next Level"
    },
    {
        "opy": "Next Hostages",
        "en": "Next Hostages"
    },
    {
        "opy": "Next Hostage",
        "en": "Next Hostage"
    },
    {
        "opy": "Next Heroes",
        "en": "Next Heroes"
    },
    {
        "opy": "Next Hero",
        "en": "Next Hero"
    },
    {
        "opy": "Next Game",
        "en": "Next Game"
    },
    {
        "opy": "Next Form",
        "en": "Next Form"
    },
    {
        "opy": "Next Enemy",
        "en": "Next Enemy"
    },
    {
        "opy": "Next Enemies",
        "en": "Next Enemies"
    },
    {
        "opy": "Next Checkpoint",
        "en": "Next Checkpoint"
    },
    {
        "opy": "Next Attempt",
        "en": "Next Attempt"
    },
    {
        "opy": "Next Ally",
        "en": "Next Ally"
    },
    {
        "opy": "Next Allies",
        "en": "Next Allies"
    },
    {
        "opy": "Next",
        "en": "Next"
    },
    {
        "opy": "New Record",
        "en": "New Record"
    },
    {
        "opy": "New High Score",
        "en": "New High Score"
    },
    {
        "opy": "Near",
        "en": "Near"
    },
    {
        "opy": "My Mistake",
        "en": "My Mistake"
    },
    {
        "opy": "Most",
        "en": "Most"
    },
    {
        "opy": "More",
        "en": "More"
    },
    {
        "opy": "Monsters",
        "en": "Monsters"
    },
    {
        "opy": "Monster",
        "en": "Monster"
    },
    {
        "opy": "Money",
        "en": "Money"
    },
    {
        "opy": "Moderate",
        "en": "Moderate"
    },
    {
        "opy": "Missions",
        "en": "Missions"
    },
    {
        "opy": "Mission Failed",
        "en": "Mission Failed"
    },
    {
        "opy": "Mission Accomplished",
        "en": "Mission Accomplished"
    },
    {
        "opy": "Mission Aborted",
        "en": "Mission Aborted"
    },
    {
        "opy": "Mission",
        "en": "Mission"
    },
    {
        "opy": "Min",
        "en": "Min"
    },
    {
        "opy": "Mild",
        "en": "Mild"
    },
    {
        "opy": "Max",
        "en": "Max"
    },
    {
        "opy": "Losses",
        "en": "Losses"
    },
    {
        "opy": "Loss",
        "en": "Loss"
    },
    {
        "opy": "Losers",
        "en": "Losers"
    },
    {
        "opy": "Loser",
        "en": "Loser"
    },
    {
        "opy": "Locking",
        "en": "Locking"
    },
    {
        "opy": "Locked",
        "en": "Locked"
    },
    {
        "opy": "Lock",
        "en": "Lock"
    },
    {
        "opy": "Location",
        "en": "Location"
    },
    {
        "opy": "Loading",
        "en": "Loading"
    },
    {
        "opy": "Loaded",
        "en": "Loaded"
    },
    {
        "opy": "Load",
        "en": "Load"
    },
    {
        "opy": "Lives",
        "en": "Lives"
    },
    {
        "opy": "Limited",
        "en": "Limited"
    },
    {
        "opy": "Life",
        "en": "Life"
    },
    {
        "opy": "Levels",
        "en": "Levels"
    },
    {
        "opy": "Level Up",
        "en": "Level Up"
    },
    {
        "opy": "Level Down",
        "en": "Level Down"
    },
    {
        "opy": "Level",
        "en": "Level"
    },
    {
        "opy": "Less",
        "en": "Less"
    },
    {
        "opy": "Left",
        "en": "Left"
    },
    {
        "opy": "Least",
        "en": "Least"
    },
    {
        "opy": "Leaders",
        "en": "Leaders"
    },
    {
        "opy": "Leader",
        "en": "Leader"
    },
    {
        "opy": "Killstreaks",
        "en": "Killstreaks"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak"
    },
    {
        "opy": "Kills",
        "en": "Kills"
    },
    {
        "opy": "Kill",
        "en": "Kill"
    },
    {
        "opy": "Jumping",
        "en": "Jumping"
    },
    {
        "opy": "Jump",
        "en": "Jump"
    },
    {
        "opy": "Joining",
        "en": "Joining"
    },
    {
        "opy": "Joined",
        "en": "Joined"
    },
    {
        "opy": "Join",
        "en": "Join"
    },
    {
        "opy": "Items",
        "en": "Items"
    },
    {
        "opy": "Item",
        "en": "Item"
    },
    {
        "opy": "Invisible",
        "en": "Invisible"
    },
    {
        "opy": "Interact",
        "en": "Interact"
    },
    {
        "opy": "Intelligence",
        "en": "Intelligence"
    },
    {
        "opy": "Inside",
        "en": "Inside"
    },
    {
        "opy": "Innocent",
        "en": "Innocent"
    },
    {
        "opy": "Initial Upgrade",
        "en": "Initial Upgrade"
    },
    {
        "opy": "Initial Targets",
        "en": "Initial Targets"
    },
    {
        "opy": "Initial Target",
        "en": "Initial Target"
    },
    {
        "opy": "Initial Round",
        "en": "Initial Round"
    },
    {
        "opy": "Initial Players",
        "en": "Initial Players"
    },
    {
        "opy": "Initial Player",
        "en": "Initial Player"
    },
    {
        "opy": "Initial Phase",
        "en": "Initial Phase"
    },
    {
        "opy": "Initial Objects",
        "en": "Initial Objects"
    },
    {
        "opy": "Initial Objective",
        "en": "Initial Objective"
    },
    {
        "opy": "Initial Object",
        "en": "Initial Object"
    },
    {
        "opy": "Initial Mission",
        "en": "Initial Mission"
    },
    {
        "opy": "Initial Level",
        "en": "Initial Level"
    },
    {
        "opy": "Initial Hostage",
        "en": "Initial Hostage"
    },
    {
        "opy": "Initial Heroes",
        "en": "Initial Heroes"
    },
    {
        "opy": "Initial Hero",
        "en": "Initial Hero"
    },
    {
        "opy": "Initial Game",
        "en": "Initial Game"
    },
    {
        "opy": "Initial Form",
        "en": "Initial Form"
    },
    {
        "opy": "Initial Enemy",
        "en": "Initial Enemy"
    },
    {
        "opy": "Initial Enemies",
        "en": "Initial Enemies"
    },
    {
        "opy": "Initial Checkpoint",
        "en": "Initial Checkpoint"
    },
    {
        "opy": "Initial Attempt",
        "en": "Initial Attempt"
    },
    {
        "opy": "Initial Ally",
        "en": "Initial Ally"
    },
    {
        "opy": "Initial Allies",
        "en": "Initial Allies"
    },
    {
        "opy": "Initial",
        "en": "Initial"
    },
    {
        "opy": "Incoming",
        "en": "Incoming"
    },
    {
        "opy": "Income",
        "en": "Income"
    },
    {
        "opy": "In View",
        "en": "In View"
    },
    {
        "opy": "I Tried",
        "en": "I Tried"
    },
    {
        "opy": "I Give Up",
        "en": "I Give Up"
    },
    {
        "opy": "Hunting",
        "en": "Hunting"
    },
    {
        "opy": "Hunters",
        "en": "Hunters"
    },
    {
        "opy": "Hunter",
        "en": "Hunter"
    },
    {
        "opy": "Hunted",
        "en": "Hunted"
    },
    {
        "opy": "Hunt",
        "en": "Hunt"
    },
    {
        "opy": "Huh",
        "en": "Huh"
    },
    {
        "opy": "Hostages",
        "en": "Hostages"
    },
    {
        "opy": "Hostage",
        "en": "Hostage"
    },
    {
        "opy": "Hmmm",
        "en": "Hmmm"
    },
    {
        "opy": "Hitting",
        "en": "Hitting"
    },
    {
        "opy": "Hit",
        "en": "Hit"
    },
    {
        "opy": "High Scores",
        "en": "High Scores"
    },
    {
        "opy": "High Score",
        "en": "High Score"
    },
    {
        "opy": "Hiding",
        "en": "Hiding"
    },
    {
        "opy": "Hide",
        "en": "Hide"
    },
    {
        "opy": "Hidden",
        "en": "Hidden"
    },
    {
        "opy": "Heroes",
        "en": "Heroes"
    },
    {
        "opy": "Hero",
        "en": "Hero"
    },
    {
        "opy": "Here",
        "en": "Here"
    },
    {
        "opy": "Help",
        "en": "Help"
    },
    {
        "opy": "Hello",
        "en": "Hello"
    },
    {
        "opy": "Height",
        "en": "Height"
    },
    {
        "opy": "Hearts",
        "en": "Hearts"
    },
    {
        "opy": "Heart",
        "en": "Heart"
    },
    {
        "opy": "Healing",
        "en": "Healing"
    },
    {
        "opy": "Healers",
        "en": "Healers"
    },
    {
        "opy": "Healer",
        "en": "Healer"
    },
    {
        "opy": "Healed",
        "en": "Healed"
    },
    {
        "opy": "Heal",
        "en": "Heal"
    },
    {
        "opy": "Hands",
        "en": "Hands"
    },
    {
        "opy": "Hand",
        "en": "Hand"
    },
    {
        "opy": "Hacking",
        "en": "Hacking"
    },
    {
        "opy": "Hacked",
        "en": "Hacked"
    },
    {
        "opy": "Hack",
        "en": "Hack"
    },
    {
        "opy": "Guilty",
        "en": "Guilty"
    },
    {
        "opy": "Green",
        "en": "Green"
    },
    {
        "opy": "Goodbye",
        "en": "Goodbye"
    },
    {
        "opy": "Good Luck",
        "en": "Good Luck"
    },
    {
        "opy": "Good",
        "en": "Good"
    },
    {
        "opy": "Going",
        "en": "Going"
    },
    {
        "opy": "Goals",
        "en": "Goals"
    },
    {
        "opy": "Goal",
        "en": "Goal"
    },
    {
        "opy": "Go",
        "en": "Go"
    },
    {
        "opy": "Gg",
        "en": "Gg"
    },
    {
        "opy": "Games Won",
        "en": "Games Won"
    },
    {
        "opy": "Games Lost",
        "en": "Games Lost"
    },
    {
        "opy": "Games",
        "en": "Games"
    },
    {
        "opy": "Game",
        "en": "Game"
    },
    {
        "opy": "Frozen",
        "en": "Frozen"
    },
    {
        "opy": "Freezing",
        "en": "Freezing"
    },
    {
        "opy": "Freeze",
        "en": "Freeze"
    },
    {
        "opy": "Found",
        "en": "Found"
    },
    {
        "opy": "Forward",
        "en": "Forward"
    },
    {
        "opy": "Forms",
        "en": "Forms"
    },
    {
        "opy": "Form",
        "en": "Form"
    },
    {
        "opy": "Folding",
        "en": "Folding"
    },
    {
        "opy": "Folded",
        "en": "Folded"
    },
    {
        "opy": "Fold",
        "en": "Fold"
    },
    {
        "opy": "Flying",
        "en": "Flying"
    },
    {
        "opy": "Fly",
        "en": "Fly"
    },
    {
        "opy": "Flown",
        "en": "Flown"
    },
    {
        "opy": "Finishing",
        "en": "Finishing"
    },
    {
        "opy": "Finished",
        "en": "Finished"
    },
    {
        "opy": "Finish",
        "en": "Finish"
    },
    {
        "opy": "Finding",
        "en": "Finding"
    },
    {
        "opy": "Find",
        "en": "Find"
    },
    {
        "opy": "Final Upgrade",
        "en": "Final Upgrade"
    },
    {
        "opy": "Final Time",
        "en": "Final Time"
    },
    {
        "opy": "Final Targets",
        "en": "Final Targets"
    },
    {
        "opy": "Final Target",
        "en": "Final Target"
    },
    {
        "opy": "Final Round",
        "en": "Final Round"
    },
    {
        "opy": "Final Players",
        "en": "Final Players"
    },
    {
        "opy": "Final Player",
        "en": "Final Player"
    },
    {
        "opy": "Final Phase",
        "en": "Final Phase"
    },
    {
        "opy": "Final Objects",
        "en": "Final Objects"
    },
    {
        "opy": "Final Objective",
        "en": "Final Objective"
    },
    {
        "opy": "Final Object",
        "en": "Final Object"
    },
    {
        "opy": "Final Mission",
        "en": "Final Mission"
    },
    {
        "opy": "Final Level",
        "en": "Final Level"
    },
    {
        "opy": "Final Item",
        "en": "Final Item"
    },
    {
        "opy": "Final Hostages",
        "en": "Final Hostages"
    },
    {
        "opy": "Final Hostage",
        "en": "Final Hostage"
    },
    {
        "opy": "Final Heroes",
        "en": "Final Heroes"
    },
    {
        "opy": "Final Hero",
        "en": "Final Hero"
    },
    {
        "opy": "Final Game",
        "en": "Final Game"
    },
    {
        "opy": "Final Form",
        "en": "Final Form"
    },
    {
        "opy": "Final Enemy",
        "en": "Final Enemy"
    },
    {
        "opy": "Final Enemies",
        "en": "Final Enemies"
    },
    {
        "opy": "Final Checkpoint",
        "en": "Final Checkpoint"
    },
    {
        "opy": "Final Attempt",
        "en": "Final Attempt"
    },
    {
        "opy": "Final Ally",
        "en": "Final Ally"
    },
    {
        "opy": "Final Allies",
        "en": "Final Allies"
    },
    {
        "opy": "Final",
        "en": "Final"
    },
    {
        "opy": "Faults",
        "en": "Faults"
    },
    {
        "opy": "Fault",
        "en": "Fault"
    },
    {
        "opy": "Fastest",
        "en": "Fastest"
    },
    {
        "opy": "Faster",
        "en": "Faster"
    },
    {
        "opy": "Fast",
        "en": "Fast"
    },
    {
        "opy": "Far",
        "en": "Far"
    },
    {
        "opy": "Falling",
        "en": "Falling"
    },
    {
        "opy": "Fallen",
        "en": "Fallen"
    },
    {
        "opy": "Fall",
        "en": "Fall"
    },
    {
        "opy": "Failure",
        "en": "Failure"
    },
    {
        "opy": "Failing",
        "en": "Failing"
    },
    {
        "opy": "Failed",
        "en": "Failed"
    },
    {
        "opy": "Facing",
        "en": "Facing"
    },
    {
        "opy": "Faces",
        "en": "Faces"
    },
    {
        "opy": "Face",
        "en": "Face"
    },
    {
        "opy": "Extreme",
        "en": "Extreme"
    },
    {
        "opy": "Experience",
        "en": "Experience"
    },
    {
        "opy": "Exit",
        "en": "Exit"
    },
    {
        "opy": "Excellent",
        "en": "Excellent"
    },
    {
        "opy": "Escorting",
        "en": "Escorting"
    },
    {
        "opy": "Escorted",
        "en": "Escorted"
    },
    {
        "opy": "Escort",
        "en": "Escort"
    },
    {
        "opy": "Entrance",
        "en": "Entrance"
    },
    {
        "opy": "Enemy",
        "en": "Enemy"
    },
    {
        "opy": "Enemies",
        "en": "Enemies"
    },
    {
        "opy": "Eliminations",
        "en": "Eliminations"
    },
    {
        "opy": "Elimination",
        "en": "Elimination"
    },
    {
        "opy": "Eliminating",
        "en": "Eliminating"
    },
    {
        "opy": "Eliminated",
        "en": "Eliminated"
    },
    {
        "opy": "Eliminate",
        "en": "Eliminate"
    },
    {
        "opy": "East",
        "en": "East"
    },
    {
        "opy": "Dying",
        "en": "Dying"
    },
    {
        "opy": "Dropping",
        "en": "Dropping"
    },
    {
        "opy": "Dropped",
        "en": "Dropped"
    },
    {
        "opy": "Drop",
        "en": "Drop"
    },
    {
        "opy": "Drawn",
        "en": "Drawn"
    },
    {
        "opy": "Drawing",
        "en": "Drawing"
    },
    {
        "opy": "Draw",
        "en": "Draw"
    },
    {
        "opy": "Downloading",
        "en": "Downloading"
    },
    {
        "opy": "Downloaded",
        "en": "Downloaded"
    },
    {
        "opy": "Download",
        "en": "Download"
    },
    {
        "opy": "Down",
        "en": "Down"
    },
    {
        "opy": "Domes",
        "en": "Domes"
    },
    {
        "opy": "Dome",
        "en": "Dome"
    },
    {
        "opy": "Dodging",
        "en": "Dodging"
    },
    {
        "opy": "Dodged",
        "en": "Dodged"
    },
    {
        "opy": "Dodge",
        "en": "Dodge"
    },
    {
        "opy": "Distances",
        "en": "Distances"
    },
    {
        "opy": "Distance",
        "en": "Distance"
    },
    {
        "opy": "Disconnecting",
        "en": "Disconnecting"
    },
    {
        "opy": "Disconnected",
        "en": "Disconnected"
    },
    {
        "opy": "Disconnect",
        "en": "Disconnect"
    },
    {
        "opy": "Discarding",
        "en": "Discarding"
    },
    {
        "opy": "Discarded",
        "en": "Discarded"
    },
    {
        "opy": "Discard",
        "en": "Discard"
    },
    {
        "opy": "Die",
        "en": "Die"
    },
    {
        "opy": "Diamonds",
        "en": "Diamonds"
    },
    {
        "opy": "Diamond",
        "en": "Diamond"
    },
    {
        "opy": "Dexterity",
        "en": "Dexterity"
    },
    {
        "opy": "Detecting",
        "en": "Detecting"
    },
    {
        "opy": "Detected",
        "en": "Detected"
    },
    {
        "opy": "Detect",
        "en": "Detect"
    },
    {
        "opy": "Destroying",
        "en": "Destroying"
    },
    {
        "opy": "Destroyed",
        "en": "Destroyed"
    },
    {
        "opy": "Destroy",
        "en": "Destroy"
    },
    {
        "opy": "Destabilizing",
        "en": "Destabilizing"
    },
    {
        "opy": "Destabilized",
        "en": "Destabilized"
    },
    {
        "opy": "Destabilize",
        "en": "Destabilize"
    },
    {
        "opy": "Depth",
        "en": "Depth"
    },
    {
        "opy": "Delivering",
        "en": "Delivering"
    },
    {
        "opy": "Delivered",
        "en": "Delivered"
    },
    {
        "opy": "Deliver",
        "en": "Deliver"
    },
    {
        "opy": "Defence",
        "en": "Defence"
    },
    {
        "opy": "Defending",
        "en": "Defending"
    },
    {
        "opy": "Defended",
        "en": "Defended"
    },
    {
        "opy": "Defend",
        "en": "Defend"
    },
    {
        "opy": "Defeat",
        "en": "Defeat"
    },
    {
        "opy": "Decks",
        "en": "Decks"
    },
    {
        "opy": "Deck",
        "en": "Deck"
    },
    {
        "opy": "Dealt",
        "en": "Dealt"
    },
    {
        "opy": "Dealing",
        "en": "Dealing"
    },
    {
        "opy": "Deal",
        "en": "Deal"
    },
    {
        "opy": "Dead",
        "en": "Dead"
    },
    {
        "opy": "Danger",
        "en": "Danger"
    },
    {
        "opy": "Damaging",
        "en": "Damaging"
    },
    {
        "opy": "Damaged",
        "en": "Damaged"
    },
    {
        "opy": "Damage",
        "en": "Damage"
    },
    {
        "opy": "Current Upgrade",
        "en": "Current Upgrade"
    },
    {
        "opy": "Current Targets",
        "en": "Current Targets"
    },
    {
        "opy": "Current Target",
        "en": "Current Target"
    },
    {
        "opy": "Current Round",
        "en": "Current Round"
    },
    {
        "opy": "Current Players",
        "en": "Current Players"
    },
    {
        "opy": "Current Player",
        "en": "Current Player"
    },
    {
        "opy": "Current Phase",
        "en": "Current Phase"
    },
    {
        "opy": "Current Objects",
        "en": "Current Objects"
    },
    {
        "opy": "Current Objective",
        "en": "Current Objective"
    },
    {
        "opy": "Current Object",
        "en": "Current Object"
    },
    {
        "opy": "Current Mission",
        "en": "Current Mission"
    },
    {
        "opy": "Current Level",
        "en": "Current Level"
    },
    {
        "opy": "Current Hostages",
        "en": "Current Hostages"
    },
    {
        "opy": "Current Hostage",
        "en": "Current Hostage"
    },
    {
        "opy": "Current Heroes",
        "en": "Current Heroes"
    },
    {
        "opy": "Current Hero",
        "en": "Current Hero"
    },
    {
        "opy": "Current Game",
        "en": "Current Game"
    },
    {
        "opy": "Current Form",
        "en": "Current Form"
    },
    {
        "opy": "Current Enemy",
        "en": "Current Enemy"
    },
    {
        "opy": "Current Enemies",
        "en": "Current Enemies"
    },
    {
        "opy": "Current Checkpoint",
        "en": "Current Checkpoint"
    },
    {
        "opy": "Current Attempt",
        "en": "Current Attempt"
    },
    {
        "opy": "Current Ally",
        "en": "Current Ally"
    },
    {
        "opy": "Current Allies",
        "en": "Current Allies"
    },
    {
        "opy": "Current",
        "en": "Current"
    },
    {
        "opy": "Crouching",
        "en": "Crouching"
    },
    {
        "opy": "Crouched",
        "en": "Crouched"
    },
    {
        "opy": "Crouch",
        "en": "Crouch"
    },
    {
        "opy": "Critical",
        "en": "Critical"
    },
    {
        "opy": "Credits",
        "en": "Credits"
    },
    {
        "opy": "Credit",
        "en": "Credit"
    },
    {
        "opy": "Corrupting",
        "en": "Corrupting"
    },
    {
        "opy": "Corrupted",
        "en": "Corrupted"
    },
    {
        "opy": "Corrupt",
        "en": "Corrupt"
    },
    {
        "opy": "Cooldowns",
        "en": "Cooldowns"
    },
    {
        "opy": "Cooldown",
        "en": "Cooldown"
    },
    {
        "opy": "Control Points",
        "en": "Control Points"
    },
    {
        "opy": "Control Point",
        "en": "Control Point"
    },
    {
        "opy": "Constitution",
        "en": "Constitution"
    },
    {
        "opy": "Connecting",
        "en": "Connecting"
    },
    {
        "opy": "Connected",
        "en": "Connected"
    },
    {
        "opy": "Connect",
        "en": "Connect"
    },
    {
        "opy": "Congratulations",
        "en": "Congratulations"
    },
    {
        "opy": "Condition",
        "en": "Condition"
    },
    {
        "opy": "Come Here",
        "en": "Come Here"
    },
    {
        "opy": "Combo",
        "en": "Combo"
    },
    {
        "opy": "Clubs",
        "en": "Clubs"
    },
    {
        "opy": "Club",
        "en": "Club"
    },
    {
        "opy": "Clouds",
        "en": "Clouds"
    },
    {
        "opy": "Cloud",
        "en": "Cloud"
    },
    {
        "opy": "Checkpoints",
        "en": "Checkpoints"
    },
    {
        "opy": "Checkpoint",
        "en": "Checkpoint"
    },
    {
        "opy": "Chasing",
        "en": "Chasing"
    },
    {
        "opy": "Chased",
        "en": "Chased"
    },
    {
        "opy": "Chase",
        "en": "Chase"
    },
    {
        "opy": "Charisma",
        "en": "Charisma"
    },
    {
        "opy": "Challenge Accepted",
        "en": "Challenge Accepted"
    },
    {
        "opy": "Center",
        "en": "Center"
    },
    {
        "opy": "Caution",
        "en": "Caution"
    },
    {
        "opy": "Capturing",
        "en": "Capturing"
    },
    {
        "opy": "Captured",
        "en": "Captured"
    },
    {
        "opy": "Capture",
        "en": "Capture"
    },
    {
        "opy": "Buying",
        "en": "Buying"
    },
    {
        "opy": "Buy",
        "en": "Buy"
    },
    {
        "opy": "Burnt",
        "en": "Burnt"
    },
    {
        "opy": "Burning",
        "en": "Burning"
    },
    {
        "opy": "Burn",
        "en": "Burn"
    },
    {
        "opy": "Built",
        "en": "Built"
    },
    {
        "opy": "Building",
        "en": "Building"
    },
    {
        "opy": "Build",
        "en": "Build"
    },
    {
        "opy": "Bought",
        "en": "Bought"
    },
    {
        "opy": "Bosses",
        "en": "Bosses"
    },
    {
        "opy": "Boss",
        "en": "Boss"
    },
    {
        "opy": "Bonuses",
        "en": "Bonuses"
    },
    {
        "opy": "Bonus",
        "en": "Bonus"
    },
    {
        "opy": "Blue",
        "en": "Blue"
    },
    {
        "opy": "Blocking",
        "en": "Blocking"
    },
    {
        "opy": "Blocked",
        "en": "Blocked"
    },
    {
        "opy": "Block",
        "en": "Block"
    },
    {
        "opy": "Bids",
        "en": "Bids"
    },
    {
        "opy": "Bid",
        "en": "Bid"
    },
    {
        "opy": "Better",
        "en": "Better"
    },
    {
        "opy": "Best",
        "en": "Best"
    },
    {
        "opy": "Banning",
        "en": "Banning"
    },
    {
        "opy": "Banned",
        "en": "Banned"
    },
    {
        "opy": "Ban",
        "en": "Ban"
    },
    {
        "opy": "Bad",
        "en": "Bad"
    },
    {
        "opy": "Backward",
        "en": "Backward"
    },
    {
        "opy": "Avoiding",
        "en": "Avoiding"
    },
    {
        "opy": "Avoided",
        "en": "Avoided"
    },
    {
        "opy": "Avoid",
        "en": "Avoid"
    },
    {
        "opy": "Average",
        "en": "Average"
    },
    {
        "opy": "Attempts",
        "en": "Attempts"
    },
    {
        "opy": "Attempt",
        "en": "Attempt"
    },
    {
        "opy": "Attacking",
        "en": "Attacking"
    },
    {
        "opy": "Attacked",
        "en": "Attacked"
    },
    {
        "opy": "Attack",
        "en": "Attack"
    },
    {
        "opy": "Angle",
        "en": "Angle"
    },
    {
        "opy": "Ammunition",
        "en": "Ammunition"
    },
    {
        "opy": "Ally",
        "en": "Ally"
    },
    {
        "opy": "Allies",
        "en": "Allies"
    },
    {
        "opy": "Alive",
        "en": "Alive"
    },
    {
        "opy": "Alert",
        "en": "Alert"
    },
    {
        "opy": "Ability 2",
        "en": "Ability 2"
    },
    {
        "opy": "Ability 1",
        "en": "Ability 1"
    },
    {
        "opy": "Ability",
        "en": "Ability"
    },
    {
        "opy": "Abilities",
        "en": "Abilities"
    },
    {
        "opy": "???",
        "en": "???"
    },
    {
        "opy": "??",
        "en": "??"
    },
    {
        "opy": "?",
        "en": "?"
    },
    {
        "opy": "...",
        "en": "..."
    },
    {
        "opy": "----------",
        "en": "----------"
    },
    {
        "opy": "*",
        "en": "*"
    },
    {
        "opy": "!!!",
        "en": "!!!"
    },
    {
        "opy": "!!",
        "en": "!!"
    },
    {
        "opy": "!",
        "en": "!"
    }
];

var prefixStrKw = [
    {
        "opy": "#{0}",
        "en": "#{0}"
    },
    {
        "opy": "-> {0}",
        "en": "-> {0}"
    },
    {
        "opy": "<-> {0}",
        "en": "<-> {0}"
    },
    {
        "opy": "<- {0}",
        "en": "<- {0}"
    },
    {
        "opy": "Round {0}",
        "en": "Round {0}"
    }
];

var postfixStrKw = [
    {
        "opy": "{0} ->",
        "en": "{0} ->"
    },
    {
        "opy": "{0} <->",
        "en": "{0} <->"
    },
    {
        "opy": "{0} <-",
        "en": "{0} <-"
    },
    {
        "opy": "{0} M/S",
        "en": "{0} M/S"
    },
    {
        "opy": "{0} M",
        "en": "{0} M"
    },
    {
        "opy": "{0} Sec",
        "en": "{0} Sec"
    },
    {
        "opy": "{0}!!!",
        "en": "{0}!!!"
    },
    {
        "opy": "{0}!!",
        "en": "{0}!!"
    },
    {
        "opy": "{0}!",
        "en": "{0}!"
    },
    {
        "opy": "{0}%",
        "en": "{0}%"
    },
    {
        "opy": "{0}:",
        "en": "{0}:"
    },
    {
        "opy": "{0}???",
        "en": "{0}???"
    },
    {
        "opy": "{0}??",
        "en": "{0}??"
    },
    {
        "opy": "{0}?",
        "en": "{0}?"
    }
];

var binaryStrKw = [
    {
        "opy": "{0} -> {1}",
        "en": "{0} -> {1}"
    },
    {
        "opy": "{0} - {1}",
        "en": "{0} - {1}"
    },
    {
        "opy": "{0} != {1}",
        "en": "{0} != {1}"
    },
    {
        "opy": "{0} * {1}",
        "en": "{0} * {1}"
    },
    {
        "opy": "{0} / {1}",
        "en": "{0} / {1}"
    },
    {
        "opy": "{0} + {1}",
        "en": "{0} + {1}"
    },
    {
        "opy": "{0} <-> {1}",
        "en": "{0} <-> {1}"
    },
    {
        "opy": "{0} <- {1}",
        "en": "{0} <- {1}"
    },
    {
        "opy": "{0} <= {1}",
        "en": "{0} <= {1}"
    },
    {
        "opy": "{0} < {1}",
        "en": "{0} < {1}"
    },
    {
        "opy": "{0} == {1}",
        "en": "{0} == {1}"
    },
    {
        "opy": "{0} = {1}",
        "en": "{0} = {1}"
    },
    {
        "opy": "{0} >= {1}",
        "en": "{0} >= {1}"
    },
    {
        "opy": "{0} > {1}",
        "en": "{0} > {1}"
    },
    {
        "opy": "{0} And {1}",
        "en": "{0} And {1}"
    },
    {
        "opy": "{0} Vs {1}",
        "en": "{0} Vs {1}"
    },
    {
        "opy": "{0}, {1}",
        "en": "{0}, {1}"
    },
    {
        "opy": "{0}: {1}",
        "en": "{0}: {1}"
    },
    {
        "opy": "{0}:{1}",
        "en": "{0}:{1}"
    },
    {
        "opy": "{0} {1}",
        "en": "{0} {1}"
    }
];

var ternaryStrKw = [
    {
        "opy": "{0} - {1} - {2}",
        "en": "{0} - {1} - {2}"
    },
    {
        "opy": "{0} : {1} : {2}",
        "en": "{0} : {1} : {2}"
    },
    {
        "opy": "{0} {1} {2}",
        "en": "{0} {1} {2}"
    },
    {
        "opy": "{0}, {1}, And {2}",
        "en": "{0}, {1}, And {2}"
    },
    {
        "opy": "{0}: {1} And {2}",
        "en": "{0}: {1} And {2}"
    }
];

var surroundStrKw = [
    {
        "opy": "({0})",
        "en": "({0})"
    },
    {
        "opy": "¡{0}!",
        "en": "¡{0}!"
    },
    {
        "opy": "¿{0}?",
        "en": "¿{0}?"
    }
];

var stringKw = normalStrKw.concat(prefixStrKw).concat(postfixStrKw).concat(binaryStrKw).concat(ternaryStrKw).concat(surroundStrKw).concat(emptyStrKw);

/*for (var hero of getConstantKw("HERO CONSTANT")) {
	stringKw.push(hero.opy);
}*/

var strTokens = [];

//Generate string tokens
//normal strings
for (var j = 0; j < normalStrKw.length; j++) {
	strTokens.push(normalStrKw[j].opy.toLowerCase());
}

//prefix strings
for (var j = 0; j < prefixStrKw.length; j++) {
	strTokens.push(prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase());
}

//postfix strings
for (var j = 0; j < postfixStrKw.length; j++) {
	strTokens.push(postfixStrKw[j].opy.substring("{0}".length).toLowerCase());
}

//ternary strings
for (var j = 0; j < ternaryStrKw.length; j++) {
	strTokens.push(ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
	strTokens.push(ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase());
}

//binary strings
for (var j = 0; j < binaryStrKw.length; j++) {
	strTokens.push(binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
}


//surround strings
for (var j = 0; j < surroundStrKw.length; j++) {
	strTokens.push(surroundStrKw[j].opy[0].toLowerCase())
	strTokens.push(surroundStrKw[j].opy[surroundStrKw[j].opy.length-1].toLowerCase())
}

//heroes
for (var hero of getConstantKw("HERO CONSTANT")) {
	strTokens.push(hero.opy.toLowerCase().substring("Hero.".length));
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

function getConstantKw(type) {
	return constantValues[type].values;
}

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
			varKw[index].opy = value;
			result += "#!define "+value+" "+key.toUpperCase()+"\n";
		}
	}
	return result;
}

//Resets variable names to A-Z.
function resetVarNames(varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < alphabet.length; i++) {
		varKw[i].opy = alphabet[i];
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
			if (keywordArray[i].opy === keyword) {
				return keywordArray[i][currentLanguage];
			}
		} else {
			if (keywordArray[i][currentLanguage].toLowerCase() === keyword) {
				return keywordArray[i].opy;
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

//Returns true if c is [A-Za-z\d_@].
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
	//return;
	console.log("DEBUG: "+str);
}

//ty stackoverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
			var eventInst3 = topy(eventInst[2], eventKw.concat(getConstantKw("HERO CONSTANT")))
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
		return decompileGenericPlayerFunction(name.substring("_&".length), args, keywordArray === actionKw ? true : false);
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

	//All Players
	if (name === "getPlayers") {
		var team = decompile(args[0], getConstantKw("TEAM CONSTANT"));
		if (team === "Team.ALL") {
			return "getAllPlayers()";
		} else {
			return "getPlayers("+team+")";
		}
	}
		
	//Global variable
	if (name === "_globalVar") {
		return decompile(args[0], globalVarKw);
	}
		
	//Hero
	if (name === "_hero") {
		return decompile(args[0], getConstantKw("HERO CONSTANT"));
	}

	//Hud text
	if (name === "_hudText") {
		var header = decompile(args[1]);
		var subheader = decompile(args[2]);
		var subtext = decompile(args[3]);
		var specVisibility = "";
		if (args.length > 11) {
			specVisibility = decompile(args[10], getConstantKw("SPECTATOR VISIBILITY"));
			if (specVisibility === "SpecVisibility.DEFAULT") {
				specVisibility = "";
			} else {
				specVisibility = ", "+specVisibility;
			}
		}
		var funcName = "";
		var texts = "";
		var colors = "";
		if (subheader === "null" && subtext === "null") {
			funcName = "hudHeader";
			texts = header;
			colors = decompile(args[6]);
		} else if (header === "null" && subtext === "null") {
			funcName = "hudSubheader";
			texts = subheader;
			colors = decompile(args[7]);
		} else if (subheader === "null" && subheader === "null") {
			funcName = "hudSubtext";
			texts = subtext;
			colors = decompile(args[8]);
		} else {
			funcName = "hudText";
			texts = header+", "+subheader+", "+subtext;
			colors = decompile(args[6])+", "+decompile(args[7])+", "+decompile(args[8]);
		}
		return funcName+"("+decompile(args[0])+", "+texts+", "+decompile(args[4], getConstantKw("HUD LOCATION"))+", "+decompile(args[5])+", "+colors+", "+decompile(args[9])+specVisibility+")";
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
		var roundType = topy(args[1], getConstantKw("ROUNDING TYPE"));
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
			return "wait("+decompile(args[0])+", "+arg2+")";
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
	operation = topy(operation, getConstantKw("OPERATION"));
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


module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
	decompileConditions: decompileConditions,
};

