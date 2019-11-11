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
//Note: each workshop keyword MUST be with no spaces!

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

//Array of languages.
var languages = [
	"en",
	"fr", //everything
    //"es-eu", //strings, heroes (only soldier), some enums (eg "ignore condition"), meta (player event and team event)
    //"es-al", //everything
	//"it", //strings, heroes (only soldier), some enums (eg "ignore condition"), meta (rule/event/condition/actions, player event and team event)
	//"ru", //strings, heroes, meta (player event)
	//"pl", //strings, heroes, meta (rule/event/condition/actions, player event and team event)
	//"de", //strings, meta(rule/event/condition/actions)
	//"pt", //everything
	//"ja", //everything
	"kr", //heroes and meta ("conditions"/"actions")
    //"zh1", //strings, heroes, meta(rule/event/condition/actions)
    //"zh2", //everything
]

var currentLanguage = "en";

var ruleKw = 
//begin-json
[
    {
        "opy": "@Rule",
        "en": "rule",
        "fr": "règle",
    },
    {
        "opy": "@Event",
        "en": "event",
        "fr": "évènement",
    },
    {
        "opy": "_conditions",
        "en": "conditions",
        "fr": "conditions",
        "kr": "condition",
    },
    {
        "opy": "_actions",
        "en": "actions",
        "fr": "actions",
        "kr": "action",
    },{
        "opy": "_disabled",
        "en": "disabled",
        "fr": "désactivé",
    }
]
//end-json

//Event keywords
var eventKw = 
//begin-json
[
    {
        "opy": "global",
        "en": "ongoing-global",
        "fr": "toutelapartie-toutlemonde",
    },
    {
        "opy": "eachPlayer",
        "en": "ongoing-eachplayer",
        "fr": "toutelapartie-chaquejoueur",
    },
    {
        "opy": "playerTookDamage",
        "en": "playerTookDamage",
        "fr": "unjoueursubitdesdégâts",
    },
    {
        "opy": "playerDealtDamage",
        "en": "playerDealtDamage",
        "fr": "unjoueurinfligedesdégâts",
    },
    {
        "opy": "playerDealtFinalBlow",
        "en": "playerDealtFinalBlow",
        "fr": "unjoueurinfligeuncoupdegrâce",
    },
    {
        "opy": "playerDied",
        "en": "playerDied",
        "fr": "unjoueurmeurt",
    },
    {
        "opy": "playerEarnedElimination",
        "en": "playerEarnedElimination",
        "fr": "unjoueurobtientuneélimination",
    },
    {
        "opy": "playerDealtHealing",
        "en": "playerDealtHealing",
        "fr": "unjoueuraprodiguédessoins",
    },
    {
        "opy": "playerReceivedHealing",
        "en": "playerReceivedHealing",
        "fr": "unjoueurareçudessoins",
    },
    {
        "opy": "playerJoined",
        "en": "playerJoinedMatch",
        "fr": "unjoueurarejointlapartie",
    },
    {
        "opy": "playerLeft",
        "en": "playerLeftMatch",
        "fr": "unjoueuraquittélapartie",
    }
]
//end-json

var eventTeamKw = 
//begin-json
[
    {
        "opy": "all",
        "en": "all",
        "fr": "lesdeux",
    },
    {
        "opy": "1",
        "en": "team1",
        "fr": "Équipe1",
    },
    {
        "opy": "2",
        "en": "team2",
        "fr": "Équipe2",
    },
]
//end-json

var eventSlotKw = 
//begin-json
[
    {
        "opy": "0",
        "en": "slot0",
        "fr": "emplacement0",
    },
    {
        "opy": "1",
        "en": "slot1",
        "fr": "emplacement1",
    },
    {
        "opy": "2",
        "en": "slot2",
        "fr": "emplacement2",
    },
    {
        "opy": "3",
        "en": "slot3",
        "fr": "emplacement3",
    },
    {
        "opy": "4",
        "en": "slot4",
        "fr": "emplacement4",
    },
    {
        "opy": "5",
        "en": "slot5",
        "fr": "emplacement5",
    },
    {
        "opy": "6",
        "en": "slot6",
        "fr": "emplacement6",
    },
    {
        "opy": "7",
        "en": "slot7",
        "fr": "emplacement7",
    },
    {
        "opy": "8",
        "en": "slot8",
        "fr": "emplacement8",
    },
    {
        "opy": "9",
        "en": "slot9",
        "fr": "emplacement9",
    },
    {
        "opy": "10",
        "en": "slot10",
        "fr": "emplacement10",
    },
    {
        "opy": "11",
        "en": "slot11",
        "fr": "emplacement11",
    }
]
//end-json

var eventPlayerKw = 
//begin-json
[
    {
        "opy": "all",
        "en": "all",
        "fr": "tout",
    },
]
//end-json
.concat(eventSlotKw);

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