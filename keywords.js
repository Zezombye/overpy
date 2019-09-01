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

var funcKw = actionKw.concat(valueFuncKw);