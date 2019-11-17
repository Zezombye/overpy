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

var ruleKw = 
//begin-json
[
    {
        "opy": "@Rule",
        "fr": "règle",
        "en-US": "Rule"
    },
    {
        "opy": "@Event",
        "fr": "évènement",
        "en-US": "Event"
    },
    {
        "opy": "_conditions",
        "fr": "conditions",
        "kr": "condition",
        "en-US": "Conditions"
    },
    {
        "opy": "_actions",
        "fr": "actions",
        "kr": "action",
        "en-US": "Actions"
    },
    {
        "opy": "_disabled",
        "fr": "désactivé",
        "en-US": "Disabled"
    },
    {
        "opy": "_variables",
        "en-US": "Variables"
    },
    {
        "opy": "_global",
        "en-US": "Global"
    },
    {
        "opy": "_player",
        "en-US": "Player"
    }
]
//end-json

//Event keywords
var eventKw = 
//begin-json
[
    {
        "opy": "global",
        "fr": "toutelapartie-toutlemonde",
        "en-US": "Ongoing - Global"
    },
    {
        "opy": "eachPlayer",
        "fr": "toutelapartie-chaquejoueur",
        "en-US": "Ongoing - Eachplayer"
    },
    {
        "opy": "playerTookDamage",
        "fr": "unjoueursubitdesdégâts",
        "en-US": "Player Took Damage"
    },
    {
        "opy": "playerDealtDamage",
        "fr": "unjoueurinfligedesdégâts",
        "en-US": "Player Dealt Damage"
    },
    {
        "opy": "playerDealtFinalBlow",
        "fr": "unjoueurinfligeuncoupdegrâce",
        "en-US": "Player Dealt Final Blow"
    },
    {
        "opy": "playerDied",
        "fr": "unjoueurmeurt",
        "en-US": "Player Died"
    },
    {
        "opy": "playerEarnedElimination",
        "fr": "unjoueurobtientuneélimination",
        "en-US": "Player Earned Elimination"
    },
    {
        "opy": "playerDealtHealing",
        "fr": "unjoueuraprodiguédessoins",
        "en-US": "Player Dealt Healing"
    },
    {
        "opy": "playerReceivedHealing",
        "fr": "unjoueurareçudessoins",
        "en-US": "Player Received Healing"
    },
    {
        "opy": "playerJoined",
        "fr": "unjoueurarejointlapartie",
        "en-US": "Player Joined Match"
    },
    {
        "opy": "playerLeft",
        "fr": "unjoueuraquittélapartie",
        "en-US": "Player Left Match"
    }
]
//end-json

var eventTeamKw = 
//begin-json
[
    {
        "opy": "all",
        "fr": "lesdeux",
        "en-US": "All"
    },
    {
        "opy": "1",
        "fr": "Équipe1",
        "en-US": "Team 1"
    },
    {
        "opy": "2",
        "fr": "Équipe2",
        "en-US": "Team 2"
    }
]
//end-json

var eventSlotKw = 
//begin-json
[
    {
        "opy": "0",
        "fr": "emplacement0",
        "en-US": "Slot 0"
    },
    {
        "opy": "1",
        "fr": "emplacement1",
        "en-US": "Slot 1"
    },
    {
        "opy": "2",
        "fr": "emplacement2",
        "en-US": "Slot 2"
    },
    {
        "opy": "3",
        "fr": "emplacement3",
        "en-US": "Slot 3"
    },
    {
        "opy": "4",
        "fr": "emplacement4",
        "en-US": "Slot 4"
    },
    {
        "opy": "5",
        "fr": "emplacement5",
        "en-US": "Slot 5"
    },
    {
        "opy": "6",
        "fr": "emplacement6",
        "en-US": "Slot 6"
    },
    {
        "opy": "7",
        "fr": "emplacement7",
        "en-US": "Slot 7"
    },
    {
        "opy": "8",
        "fr": "emplacement8",
        "en-US": "Slot 8"
    },
    {
        "opy": "9",
        "fr": "emplacement9",
        "en-US": "Slot 9"
    },
    {
        "opy": "10",
        "fr": "emplacement10",
        "en-US": "Slot 10"
    },
    {
        "opy": "11",
        "fr": "emplacement11",
        "en-US": "Slot 11"
    }
]
//end-json

var eventPlayerKw = 
//begin-json
[
    {
        "opy": "all",
        "fr": "tout",
        "en-US": "All"
    }
]
//end-json
.concat(eventSlotKw);

var constantKw = [];
for (var constant of Object.keys(constantValues)) {
	constantKw = constantKw.concat(constantValues[constant].values);
}

//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw);

var funcKw = actionKw.concat(valueFuncKw);



