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

var valueFuncKw = [
    {
        "opy": "abs",
        "en": "absoluteValue",
        "fr": "ValeurAbsolue",
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_add",
        "en": "add",
        "fr": "Addition",
        "description": "The sum of two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getDeadPlayers",
        "en": "allDeadPlayers",
        "fr": "TousLesJoueursMorts",
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getAllHeroes()",
        "en": "allHeroes",
        "fr": "TousLesHéros",
        "description": "The array of all heroes in overwatch.",
        "args": []
    },
    {
        "opy": "getLivingPlayers",
        "en": "allLivingPlayers",
        "fr": "TousLesJoueursEnVie",
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayers",
        "en": "allPlayers",
        "fr": "TousLesJoueurs",
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayersNotOnObjective",
        "en": "allPlayersNotOnObjective",
        "fr": "TousLesJoueurséloignésDeL’objectif",
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayersOnObjective",
        "en": "allPlayersOnObjective",
        "fr": "TousLesJoueursSurL’objectif",
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getAllowedHeroes",
        "en": "allowedHeroes",
        "fr": "HérosAutorisés",
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getAltitude",
        "en": "altitudeOf",
        "fr": "AltitudeDe",
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_and",
        "en": "and",
        "fr": "Et",
        "description": "Whether both of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "angleDifference",
        "en": "angleDifference",
        "fr": "DifférenceEntreAngles",
        "description": "The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_appendToArray",
        "en": "appendToArray",
        "fr": "AjouterAuTableau",
        "description": "A copy of an array with one or more values appended to the end.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array to which to append.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_arrayContains",
        "en": "arrayContains",
        "fr": "ContenuDuTableau",
        "description": "Whether the specified array contains the specified value.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_arraySlice",
        "en": "arraySlice",
        "fr": "SectionDeTableau",
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to make a copy.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "attacker",
        "en": "attacker",
        "fr": "Attaquant",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null
    },
    {
        "opy": "Vector.BACKWARD",
        "en": "backward",
        "fr": "Arrière",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null
    },
    {
        "opy": "getClosestPlayer",
        "en": "closestPlayerTo",
        "fr": "JoueurLePlusProcheDe",
        "description": "The player closest to a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure proximity.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the closest player will come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_compare",
        "en": "compare",
        "fr": "Comparer",
        "description": "Whether the comparison of the two inputs is true.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "COMPARISON",
                "description": "",
                "type": "COMPARE OPERATOR",
                "default": "=="
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getControlScorePercentage",
        "en": "controlModeScoringPercentage",
        "fr": "PourcentageDuScoreEnModeContrôle",
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getControlScoringTeam",
        "en": "controlModeScoringTeam",
        "fr": "ÉquipeContrôlantLePointEnModeContrôle",
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": []
    },
    {
        "opy": "cosDeg",
        "en": "cosineFromDegrees",
        "fr": "CosinusEnDegrés",
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "cos",
        "en": "cosineFromRadians",
        "fr": "CosinusEnRadians",
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "len",
        "en": "countOf",
        "fr": "DécompteDe",
        "description": "The number of elements in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "crossProduct",
        "en": "crossProduct",
        "fr": "ProduitCroisé",
        "description": "The cross product of the specified values. (Left cross up equals forward.)",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand-side vector operand of the cross product.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "The right-hand-side vector operand of the cross product.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_currentArrayElement",
        "en": "currentArrayElement",
        "fr": "ÉlémentDeTableauActuel",
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": []
    },
    {
        "opy": "angleToDirection",
        "en": "directionFromAngles",
        "fr": "DirectionDepuisDesAngles",
        "description": "The unit-length direction vector corresponding to the specified angles.",
        "args": [
            {
                "name": "HORIZONTAL ANGLE",
                "description": "The horizontal angle in degrees used to construct the resulting vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VERTICAL ANGLE",
                "description": "The vertical angle in degrees used to construct the resulting vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "directionTowards",
        "en": "directionTowards",
        "fr": "Direction",
        "description": "The unit-length direction vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting direction vector will point.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position to which the resulting direction vector will point.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "distance",
        "en": "distanceBetween",
        "fr": "DistanceEntre",
        "description": "The distance between two positions in meters.",
        "args": [
            {
                "name": "START POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_divide",
        "en": "divide",
        "fr": "Division",
        "description": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "dotProduct",
        "en": "dotProduct",
        "fr": "ProduitScalaire",
        "description": "The dot product of the specified values.",
        "args": [
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "Vector.DOWN",
        "en": "down",
        "fr": "Bas",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null
    },
    {
        "opy": "_emptyArray",
        "en": "emptyArray",
        "fr": "TableauVide",
        "description": "An array with no elements.",
        "args": []
    },
    {
        "opy": "entityExists",
        "en": "entityExists",
        "fr": "ExistenceDeL’entité",
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "eventDamage",
        "en": "eventDamage",
        "fr": "DégâtsD’évènement",
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null
    },
    {
        "opy": "eventHealing",
        "en": "eventHealing",
        "fr": "ÉvènementSoin",
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null
    },
    {
        "opy": "eventPlayer",
        "en": "eventPlayer",
        "fr": "JoueurExécutant",
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null
    },
    {
        "opy": "eventWasCriticalHit",
        "en": "eventWasCriticalHit",
        "fr": "L’évènementétaitUnCoupCritique",
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null
    },
    {
        "opy": "_&getEyePosition",
        "en": "eyePosition",
        "fr": "PositionDesYeux",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getFacingDirection",
        "en": "facingDirectionOf",
        "fr": "RegardEnDirectionDe",
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "false",
        "en": "false",
        "fr": "Faux",
        "description": "The boolean value of false.",
        "args": null
    },
    {
        "opy": "getFarthestPlayer",
        "en": "farthestPlayerFrom",
        "fr": "JoueurLePluséloignéDe",
        "description": "The player farthest from a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure distance.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the farthest player will come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_filteredArray",
        "en": "filteredArray",
        "fr": "TableauFiltré",
        "description": "A copy of the specified array with any values that do not match the specified condition removed.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be filtered.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_firstOf",
        "en": "firstOf",
        "fr": "PremierDe",
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "getFlagPosition",
        "en": "flagPosition",
        "fr": "PositionDuDrapeau",
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "Vector.FORWARD",
        "en": "forward",
        "fr": "Avant",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null
    },
    {
        "opy": "_globalVar",
        "en": "globalVariable",
        "fr": "VariableGlobale",
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },
    {
        "opy": "_&hasSpawned",
        "en": "hasSpawned",
        "fr": "Apparition",
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&hasStatusEffect",
        "en": "hasStatus",
        "fr": "Statut",
        "description": "Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "STATUS",
                "description": "The status to check for.",
                "type": "STATUS",
                "default": "HACKED"
            }
        ]
    },
    {
        "opy": "healee",
        "en": "healee",
        "fr": "Soigné",
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null
    },
    {
        "opy": "healer",
        "en": "healer",
        "fr": "Soigneur",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null
    },
    {
        "opy": "_&getHealth",
        "en": "health",
        "fr": "PointsDeVie",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getNormalizedHealth",
        "en": "normalizedHealth",
        "fr": "PointsDeVieNormalisés",
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_hero",
        "en": "hero",
        "fr": "Héros",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "HERO CONSTANT",
                "default": "ANA"
            }
        ]
    },
    {
        "opy": "heroIcon",
        "en": "heroIconString",
        "fr": "ChaîneD’icôneDuHéros",
        "description": "Converts a hero parameter into a string that shows up as an icon.",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "HERO",
                "default": "HERO"
            }
        ]
    },
    {
        "opy": "_&getCurrentHero",
        "en": "heroOf",
        "fr": "HérosDe",
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "horizontalAngleFromDirection",
        "en": "horizontalAngleFromDirection",
        "fr": "AngleHorizontalDepuisUneDirection",
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "horizontalAngleTowards",
        "en": "horizontalAngleTowards",
        "fr": "AngleHorizontalVers",
        "description": "The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&getHorizontalFacingAngle",
        "en": "horizontalFacingAngleOf",
        "fr": "AngleHorizontalDuRegardDe",
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getHorizontalSpeed",
        "en": "horizontalSpeedOf",
        "fr": "VitesseHorizontaleDe",
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "hostPlayer",
        "en": "hostPlayer",
        "fr": "JoueurHôte",
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null
    },
    {
        "opy": "iconString",
        "en": "iconString",
        "fr": "ChaîneD’icône",
        "description": "Allows you to use an icon inside of a string.",
        "args": [
            {
                "name": "Icon",
                "description": "The icon to display.",
                "type": "ICON",
                "default": "ARROW: DOWN"
            }
        ]
    },
    {
        "opy": "_indexOfArrayValue",
        "en": "indexOfArrayValue",
        "fr": "IndexDeLaValeurDeTableau",
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&isAlive",
        "en": "isAlive",
        "fr": "EnVie",
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isAssemblingHeroes()",
        "en": "isAssemblingHeroes",
        "fr": "PhaseDeChoixDeHéros",
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": []
    },
    {
        "opy": "isMatchBetweenRounds()",
        "en": "isBetweenRounds",
        "fr": "EntreDeuxManches",
        "description": "Whether the match is between rounds.",
        "args": []
    },
    {
        "opy": "_&isHoldingButton",
        "en": "isButtonHeld",
        "fr": "BoutonMaintenuEnfoncé",
        "description": "Whether a player is holding a specific button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose button to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The button to check.",
                "type": "BUTTON",
                "default": "PRIMARY FIRE"
            }
        ]
    },
    {
        "opy": "_&isCommunicating",
        "en": "isCommunicating",
        "fr": "Communication",
        "description": "Whether a player is using a specific communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TYPE",
                "description": "The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.",
                "type": "COMMUNICATE",
                "default": "VOICE LINE UP"
            }
        ]
    },
    {
        "opy": "_&isCommunicatingAnything",
        "en": "isCommunicatingAny",
        "fr": "N’importeQuelleCommunication",
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isCommunicatingEmote",
        "en": "isCommunicatingAnyEmote",
        "fr": "CommunicationParEmote",
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isCommunicatingVoiceline",
        "en": "isCommunicatingAnyVoiceline",
        "fr": "CommunicationParRéplique",
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isControlPointLocked()",
        "en": "isControlModePointLocked",
        "fr": "PointDeContrôleVerrouillé",
        "description": "Whether the point is locked in control mode.",
        "args": []
    },
    {
        "opy": "_&isCrouching",
        "en": "isCrouching",
        "fr": "Accroupi",
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isInSuddenDeath()",
        "en": "isCtfModeInSuddenDeath",
        "fr": "CaptureDuDrapeauEnMortSubite",
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": []
    },
    {
        "opy": "_&isDead",
        "en": "isDead",
        "fr": "Mort",
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isDummy",
        "en": "isDummyBot",
        "fr": "EstUnBot",
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isFiringPrimaryFire",
        "en": "isFiringPrimary",
        "fr": "TirPrincipal",
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isFiringSecondaryFire",
        "en": "isFiringSecondary",
        "fr": "TirSecondaire",
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isFlagAtBase",
        "en": "isFlagAtBase",
        "fr": "DrapeauàLaBase",
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "isFlagBeingCarried",
        "en": "isFlagBeingCarried",
        "fr": "DrapeauTransporté",
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "isGameInProgress()",
        "en": "isGameInProgress",
        "fr": "PartieEnCours",
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": []
    },
    {
        "opy": "teamHasHero",
        "en": "isHeroBeingPlayed",
        "fr": "HérosJoué",
        "description": "Whether a specific hero is being played (either on a team or in the match).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&isInAir",
        "en": "isInAir",
        "fr": "DansLesAirs",
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_isInLineOfSight",
        "en": "isInLineOfSight",
        "fr": "DansLaLigneDeVue",
        "description": "Whether two positions have line of sight with each other.",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "BARRIERS",
                "description": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.",
                "type": "BARRIERS LOS",
                "default": "BARRIERS DO NOT BLOCK LOS"
            }
        ]
    },
    {
        "opy": "isInSetup()",
        "en": "isInSetup",
        "fr": "DansLesParamètres",
        "description": "Whether the match is currently in its setup phase.",
        "args": []
    },
    {
        "opy": "_&isInSpawnRoom",
        "en": "isInSpawnRoom",
        "fr": "DansLaSalleD’apparition",
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isInViewAngle",
        "en": "isInViewAngle",
        "fr": "DansLeChampDeVision",
        "description": "Whether a location is within view of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "LOCATION",
                "description": "The location to test if it's within view.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "isMatchComplete()",
        "en": "isMatchComplete",
        "fr": "PartieTerminée",
        "description": "Whether the match has finished.",
        "args": []
    },
    {
        "opy": "_&isMoving",
        "en": "isMoving",
        "fr": "SeDéplace",
        "description": "Whether a player is moving (defined as having a nonzero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isObjectiveComplete",
        "en": "isObjectiveComplete",
        "fr": "ObjectifAccompli",
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&isOnGround",
        "en": "isOnGround",
        "fr": "AuSol",
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isOnObjective",
        "en": "isOnObjective",
        "fr": "SurL’objectif",
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isOnWall",
        "en": "isOnWall",
        "fr": "SurLeMur",
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isOnFire",
        "en": "isPortraitOnFire",
        "fr": "Portrait«EnFeu»",
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isStanding",
        "en": "isStanding",
        "fr": "Debout",
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isTeamOnDefense",
        "en": "isTeamOnDefense",
        "fr": "ÉquipeEnDéfense",
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "isTeamOnOffense",
        "en": "isTeamOnOffense",
        "fr": "ÉquipeEnAttaque",
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_all",
        "en": "isTrueForAll",
        "fr": "VraiPourTous",
        "description": "Whether the specified condition evaluates to true for every value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_any",
        "en": "isTrueForAny",
        "fr": "VraiPourN’importeQui",
        "description": "Whether the specified condition evaluates to true for any value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ]
    },
    {
        "opy": "_&isUsingAbility1",
        "en": "isUsingAbility1",
        "fr": "Capacité1Utilisée",
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isUsingAbility2",
        "en": "isUsingAbility2",
        "fr": "Capacité2Utilisée",
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&isUsingUltimate",
        "en": "isUsingUltimate",
        "fr": "CapacitéUltimeUtilisée",
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "isWaitingForPlayers()",
        "en": "isWaitingForPlayers",
        "fr": "EnAttenteDeJoueurs",
        "description": "Whether the match is waiting for players to join before starting.",
        "args": []
    },
    {
        "opy": "getLastCreatedEntity()",
        "en": "lastCreatedEntity",
        "fr": "DernièreEntitéCréée",
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": []
    },
    {
        "opy": "getLastDamageModification()",
        "en": "lastDamageModificationId",
        "fr": "DernierIdentifiantDeModificationDeDégâts",
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "opy": "getLastDoT()",
        "en": "lastDamageOverTimeId",
        "fr": "DernierIdentifiantDeDégâtsSurLaDurée",
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "opy": "getLastHoT()",
        "en": "lastHealOverTimeId",
        "fr": "DernierIdentifiantDeSoinsSurLaDurée",
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "opy": "_lastOf",
        "en": "lastOf",
        "fr": "Dernier",
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "getLastCreatedText()",
        "en": "lastTextId",
        "fr": "DernierIdentifiantDeTexte",
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": []
    },
    {
        "opy": "Vector.LEFT",
        "en": "left",
        "fr": "Gauche",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null
    },
    {
        "opy": "localVector",
        "en": "localVectorOf",
        "fr": "VecteurLocalDe",
        "description": "The vector in local coordinates corresponding to the provided vector in world coordinates.",
        "args": [
            {
                "name": "WORLD VECTOR",
                "description": "The vector in world coordinates that will be converted to local coordinates.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the resulting vector will be relative.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "TRANSFORMATION",
                "default": "ROTATION"
            }
        ]
    },
    {
        "opy": "getMatchRound()",
        "en": "matchRound",
        "fr": "MancheDeLaPartie",
        "description": "The current round of the match, counting up from 1.",
        "args": []
    },
    {
        "opy": "getMatchTime()",
        "en": "matchTime",
        "fr": "TempsDeJeu",
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": []
    },
    {
        "opy": "max",
        "en": "max",
        "fr": "Maximum",
        "description": "The greater of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&getMaxHealth",
        "en": "maxHealth",
        "fr": "PointsDeVieMaximum",
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "min",
        "en": "min",
        "fr": "Minimum",
        "description": "The lesser of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_modulo",
        "en": "modulo",
        "fr": "Modulo",
        "description": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_multiply",
        "en": "multiply",
        "fr": "Multiplication",
        "description": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "nearestWalkablePosition",
        "en": "nearestWalkablePosition",
        "fr": "PositionLaPlusProcheEnMarchant",
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "normalize",
        "en": "normalize",
        "fr": "Normalisation",
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "not",
        "en": "not",
        "fr": "Pas",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "null",
        "en": "null",
        "fr": "NonApplicable",
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null
    },
    {
        "opy": "getNumberOfDeadPlayers",
        "en": "numberOfDeadPlayers",
        "fr": "NombreDeJoueursMorts",
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getNumberOfDeaths",
        "en": "numberOfDeaths",
        "fr": "NombreDeMorts",
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getNumberOfElims",
        "en": "numberOfEliminations",
        "fr": "NombreD’éliminations",
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getNumberOfFinalBlows",
        "en": "numberOfFinalBlows",
        "fr": "NombreDeCoupsDeGrâce",
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "getNumberOfHeroes",
        "en": "numberOfHeroes",
        "fr": "NombreDeHéros",
        "description": "The number of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getNumberOfLivingPlayers",
        "en": "numberOfLivingPlayers",
        "fr": "NombreDeJoueursEnVie",
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getNumberOfPlayers",
        "en": "numberOfPlayers",
        "fr": "NombreDeJoueurs",
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getNumberOfPlayersOnObjective",
        "en": "numberOfPlayersOnObjective",
        "fr": "NombreDeJoueursSurL’objectif",
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getCurrentObjective()",
        "en": "objectiveIndex",
        "fr": "IndexDeL’objectif",
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": []
    },
    {
        "opy": "getObjectivePosition",
        "en": "objectivePosition",
        "fr": "PositionDeL’objectif",
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getOppositeTeam",
        "en": "oppositeTeamOf",
        "fr": "ÉquipeOpposéeà",
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_or",
        "en": "or",
        "fr": "Ou",
        "description": "Whether either of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "getPayloadPosition",
        "en": "payloadPosition",
        "fr": "PositionDuConvoi",
        "description": "The position in the world of the active payload.",
        "args": []
    },
    {
        "opy": "getPayloadProgressPercentage",
        "en": "payloadProgressPercentage",
        "fr": "PourcentageDeProgressionDuConvoi",
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": []
    },
    {
        "opy": "getFlagCarrier",
        "en": "playerCarryingFlag",
        "fr": "JoueurPortantLeDrapeau",
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getPlayerClosestToReticle",
        "en": "playerClosestToReticle",
        "fr": "JoueurLePlusProcheDuRéticule",
        "description": "The player closest to the reticle of the specified player, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to search for the closest player.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_playerVar",
        "en": "playerVariable",
        "fr": "VariableDeJoueur",
        "description": "The current value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable value to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },
    {
        "opy": "getPlayersInSlot",
        "en": "playersInSlot",
        "fr": "JoueursDansL’emplacement",
        "description": "The player or array of players who occupy a specific slot in the game.",
        "args": [
            {
                "name": "SLOT",
                "description": "The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which to acquire a player or players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getPlayersInViewAngle",
        "en": "playersInViewAngle",
        "fr": "JoueursDansLeChampDeVision",
        "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to consider players.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "getPlayersOnHero",
        "en": "playersOnHero",
        "fr": "JoueursSurLeHéros",
        "description": "The array of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "getPlayersInRadius",
        "en": "playersWithinRadius",
        "fr": "JoueursDansUnRayon",
        "description": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.",
        "args": [
            {
                "name": "CENTER",
                "description": "The center position from which to measure distance.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The radius in meters inside which players must be in order to be included in the resulting array.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams to which a player must belong to be included in the resulting array.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "LOS CHECK",
                "description": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.",
                "type": "LOS CHECK",
                "default": "OFF"
            }
        ]
    },
    {
        "opy": "getCapturePercentage",
        "en": "pointCapturePercentage",
        "fr": "PourcentageDeCaptureDuPoint",
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": []
    },
    {
        "opy": "_&getPosition",
        "en": "positionOf",
        "fr": "PositionDe",
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_raiseToPower",
        "en": "raiseToPower",
        "fr": "ÉlévationàUnePuissance",
        "description": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_randomWs",
        "en": "random",
        "fr": "Aléatoire",
        "description": "An internal value that is the word 'random' used by all 4 random functions, no matter the language.",
        "args": [],
    },
    {
        "opy": "random.randint",
        "en": "randomInteger",
        "fr": "NombreEntierAléatoire",
        "description": "A random integer between the specified min and max, inclusive.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "random.uniform",
        "en": "randomReal",
        "fr": "NombreRéelAléatoire",
        "description": "A random real number between the specified min and max.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest real number allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest real number allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "random.choice",
        "en": "randomValueInArray",
        "fr": "ValeurAléatoireDansLeTableau",
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "random.shuffle",
        "en": "randomizedArray",
        "fr": "TableauAléatoire",
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ]
    },
    {
        "opy": "_getNormal",
        "en": "raycastHitNormal",
        "fr": "SurfaceIntersectéeParLeRayonémis",
        "description": "The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_getPlayerHit",
        "en": "raycastHitPlayer",
        "fr": "JoueurIntersectéParLeRayonémis",
        "description": "The player hit by the ray cast (or null if no player is hit).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_getHitPosition",
        "en": "raycastHitPosition",
        "fr": "PositionD’impactDuRayonémis",
        "description": "The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "opy": "_removeFromArray",
        "en": "removeFromArray",
        "fr": "SupprimerDuTableau",
        "description": "A copy of an array with one or more values removed (if found).",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to remove values.",
                "type": "ANY",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "Vector.RIGHT",
        "en": "right",
        "fr": "Droite",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null
    },
    {
        "opy": "_round",
        "en": "roundToInteger",
        "fr": "ArrondiràL’entier",
        "description": "The integer to which the specified value rounds.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to round.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "ROUNDING TYPE",
                "description": "Determines the direction in which the value will be rounded.",
                "type": "ROUNDING TYPE",
                "default": "UP"
            }
        ]
    },
    {
        "opy": "_&getScore",
        "en": "scoreOf",
        "fr": "ScoreDe",
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "getServerLoad()",
        "en": "serverLoad",
        "fr": "ChargeDuServeur",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": []
    },
    {
        "opy": "getAverageServerLoad()",
        "en": "serverLoadAverage",
        "fr": "ChargeMoyenneDuServeur",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": []
    },
    {
        "opy": "getPeakServerLoad()",
        "en": "serverLoadPeak",
        "fr": "PicDeChargeDuServeur",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": []
    },
    {
        "opy": "sinDeg",
        "en": "sineFromDegrees",
        "fr": "SinusEnDegrés",
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "sin",
        "en": "sineFromRadians",
        "fr": "SinusEnRadians",
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&getSlot",
        "en": "slotOf",
        "fr": "EmplacementDe",
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_sortedArray",
        "en": "sortedArray",
        "fr": "TableauTrié",
        "description": "A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "VALUE RANK",
                "description": "The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.",
                "type": "NUMBER",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ]
    },
    {
        "opy": "_&getSpeed",
        "en": "speedOf",
        "fr": "VitesseDe",
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getSpeedInDirection",
        "en": "speedOfInDirection",
        "fr": "VitesseDansLaDirectionDonnéeDe",
        "description": "The current speed of a player in a specific direction in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The direction of travel in which to measure the player's speed.",
                "type": "DIRECTION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "sqrt",
        "en": "squareRoot",
        "fr": "RacineCarrée",
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_string",
        "en": "string",
        "fr": "ChaîneDeTexte",
        "description": "Text formed from a selection of strings and specified values.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "STRING CONSTANT",
                "default": "HELLO"
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "ANY",
                "default": "NULL"
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "ANY",
                "default": "NULL"
            }
        ]
    },
    {
        "opy": "_subtract",
        "en": "subtract",
        "fr": "Soustraction",
        "description": "The difference between two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "_&getTeam",
        "en": "teamOf",
        "fr": "ÉquipeDe",
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "teamScore",
        "en": "teamScore",
        "fr": "ScoreDeL’équipe",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ]
    },
    {
        "opy": "_&getThrottle",
        "en": "throttleOf",
        "fr": "AccélérationDe",
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "getTotalTimeElapsed",
        "en": "totalTimeElapsed",
        "fr": "TempsTotalécoulé",
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": []
    },
    {
        "opy": "true",
        "en": "true",
        "fr": "Vrai",
        "description": "The boolean value of true.",
        "args": null
    },
    {
        "opy": "_&getUltCharge",
        "en": "ultimateChargePercent",
        "fr": "PourcentageDeChargeDeLaCapacitéUltime",
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "Vector.UP",
        "en": "up",
        "fr": "Haut",
        "description": "Shorthand for the directional vector(0, l, 0), which points upward.",
        "args": null
    },
    {
        "opy": "_valueInArray",
        "en": "valueInArray",
        "fr": "ValeurDansLeTableau",
        "description": "The value found at a specific element of an array. Results in 0 if the element does not exist.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose element to acquire.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "INDEX",
                "description": "The index of the element to acquire.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "vect",
        "en": "vector",
        "fr": "Vecteur",
        "description": "A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.",
        "args": [
            {
                "name": "X",
                "description": "The x value of the vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "Y",
                "description": "The y value of the vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "Z",
                "description": "The z value of the vector.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "opy": "vectorTowards",
        "en": "vectorTowards",
        "fr": "VecteurVers",
        "description": "The displacement vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting displacement vector begins.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position at which the resulting displacement vector ends.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&getVelocity",
        "en": "velocityOf",
        "fr": "VélocitéDe",
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "verticalAngleOfDirection",
        "en": "verticalAngleFromDirection",
        "fr": "AngleVerticalDepuisUneDirection",
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "verticalAngleTowards",
        "en": "verticalAngleTowards",
        "fr": "AngleVerticalVers",
        "description": "The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_&getVerticalFacingAngle",
        "en": "verticalFacingAngleOf",
        "fr": "AngleVerticalDuRegardDe",
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "_&getVerticalSpeed",
        "en": "verticalSpeedOf",
        "fr": "VitesseVerticaleDe",
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "opy": "victim",
        "en": "victim",
        "fr": "Victime",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null
    },
    {
        "opy": "worldVector",
        "en": "worldVectorOf",
        "fr": "VecteurMondialDe",
        "description": "The vector in world coordinates corresponding to the provided vector in local coordinates.",
        "args": [
            {
                "name": "LOCAL VECTOR",
                "description": "The vector in local coordinates that will be converted to world coordinates.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the local vector is relative.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "TRANSFORMATION",
                "default": "ROTATION"
            }
        ]
    },
    {
        "opy": "_xComponentOf",
        "en": "xComponentOf",
        "fr": "ComposanteXDe",
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_yComponentOf",
        "en": "yComponentOf",
        "fr": "ComposanteYDe",
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    },
    {
        "opy": "_zComponentOf",
        "en": "zComponentOf",
        "fr": "ComposanteZDe",
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ]
    }
];
