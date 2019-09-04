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

var constantValues = {
    "TRANSFORMATION": {
        "opy": "Transform",
        "values": [
            {
                "opy": "Transform.ROTATION",
                "en": "Rotation"
            },
            {
                "opy": "Transform.ROTATION_AND_TRANSLATION",
                "en": "RotationAndTranslation"
            }
        ]
    },
    "INVISIBLE TO": {
        "opy": "Invis",
        "values": [
            {
                "opy": "Invis.ALL",
                "en": "All"
            },
            {
                "opy": "Invis.ENEMIES",
                "en": "Enemies"
            },
            {
                "opy": "Invis.NONE",
                "en": "None"
            }
        ]
    },
    "COLOR": {
        "opy": "Color",
        "values": [
            {
                "opy": "Color.AQUA",
                "en": "Aqua"
            },
            {
                "opy": "Color.BLUE",
                "en": "Blue"
            },
            {
                "opy": "Color.GREEN",
                "en": "Green"
            },
            {
                "opy": "Color.LIME_GREEN",
                "en": "Limegreen"
            },
            {
                "opy": "Color.ORANGE",
                "en": "Orange"
            },
            {
                "opy": "Color.PURPLE",
                "en": "Purple"
            },
            {
                "opy": "Color.RED",
                "en": "Red"
            },
            {
                "opy": "Color.SKY_BLUE",
                "en": "Skyblue"
            },
            {
                "opy": "Color.TEAM_1",
                "en": "Team1"
            },
            {
                "opy": "Color.TEAM_2",
                "en": "Team2"
            },
            {
                "opy": "Color.TURQUOISE",
                "en": "Turquoise"
            },
            {
                "opy": "Color.WHITE",
                "en": "White"
            },
            {
                "opy": "Color.YELLOW",
                "en": "Yellow"
            }
        ]
    },
    "BUTTON": {
        "opy": "Button",
        "values": [
            {
                "opy": "Button.ABILITY_1",
                "en": "Ability1"
            },
            {
                "opy": "Button.ABILITY_2",
                "en": "Ability2"
            },
            {
                "opy": "Button.CROUCH",
                "en": "Crouch"
            },
            {
                "opy": "Button.INTERACT",
                "en": "Interact"
            },
            {
                "opy": "Button.JUMP",
                "en": "Jump"
            },
            {
                "opy": "Button.PRIMARY_FIRE",
                "en": "PrimaryFire"
            },
            {
                "opy": "Button.SECONDARY_FIRE",
                "en": "SecondaryFire"
            },
            {
                "opy": "Button.ULTIMATE",
                "en": "Ultimate"
            }
        ]
    },
    "OPERATION": {
        "values": [
            {
                "opy": "_add",
                "en": "Add"
            },
            {
                "opy": "_appendToArray",
                "en": "AppendToArray"
            },
            {
                "opy": "_divide",
                "en": "Divide"
            },
            {
                "opy": "_max",
                "en": "Max"
            },
            {
                "opy": "_min",
                "en": "Min"
            },
            {
                "opy": "_modulo",
                "en": "Modulo"
            },
            {
                "opy": "_multiply",
                "en": "Multiply"
            },
            {
                "opy": "_raiseToPower",
                "en": "RaiseToPower"
            },
            {
                "opy": "_removeFromArrayByIndex",
                "en": "RemoveFromArrayByIndex"
            },
            {
                "opy": "_removeFromArrayByValue",
                "en": "RemoveFromArrayByValue"
            },
            {
                "opy": "_subtract",
                "en": "Subtract"
            }
        ]
    },
    "TEAM CONSTANT": {
        "opy": "Team",
        "values": [
            {
                "opy": "Team.ALL",
                "en": "AllTeams"
            },
            {
                "opy": "Team.1",
                "en": "Team1"
            },
            {
                "opy": "Team.2",
                "en": "Team2"
            }
        ]
    },
    "HERO CONSTANT": {
        "opy": "Hero",
        "values": [
            {
                "opy": "Hero.ANA",
                "en": "Ana"
            },
            {
                "opy": "Hero.ASHE",
                "en": "Ashe"
            },
            {
                "opy": "Hero.BAPTISTE",
                "en": "Baptiste"
            },
            {
                "opy": "Hero.BASTION",
                "en": "Bastion"
            },
            {
                "opy": "Hero.BRIGITTE",
                "en": "Brigitte"
            },
            {
                "opy": "Hero.DVA",
                "en": "D.va"
            },
            {
                "opy": "Hero.DOOMFIST",
                "en": "Doomfist"
            },
            {
                "opy": "Hero.GENJI",
                "en": "Genji"
            },
            {
                "opy": "Hero.HANZO",
                "en": "Hanzo"
            },
            {
                "opy": "Hero.JUNKRAT",
                "en": "Junkrat"
            },
            {
                "opy": "Hero.LUCIO",
                "en": "Lúcio"
            },
            {
                "opy": "Hero.MCCREE",
                "en": "Mccree"
            },
            {
                "opy": "Hero.MEI",
                "en": "Mei"
            },
            {
                "opy": "Hero.MERCY",
                "en": "Mercy"
            },
            {
                "opy": "Hero.MOIRA",
                "en": "Moira"
            },
            {
                "opy": "Hero.ORISA",
                "en": "Orisa"
            },
            {
                "opy": "Hero.PHARAH",
                "en": "Pharah"
            },
            {
                "opy": "Hero.REAPER",
                "en": "Reaper"
            },
            {
                "opy": "Hero.REINHARDT",
                "en": "Reinhardt"
            },
            {
                "opy": "Hero.ROADHOG",
                "en": "Roadhog"
            },
            {
                "opy": "Hero.SIGMA",
                "en": "Sigma"
            },
            {
                "opy": "Hero.SOLDIER",
                "en": "Soldier:76"
            },
            {
                "opy": "Hero.SOMBRA",
                "en": "Sombra"
            },
            {
                "opy": "Hero.SYMMETRA",
                "en": "Symmetra"
            },
            {
                "opy": "Hero.TORBJORN",
                "en": "Torbjörn"
            },
            {
                "opy": "Hero.TRACER",
                "en": "Tracer"
            },
            {
                "opy": "Hero.WIDOWMAKER",
                "en": "Widowmaker"
            },
            {
                "opy": "Hero.WINSTON",
                "en": "Winston"
            },
            {
                "opy": "Hero.HAMMOND",
                "en": "WreckingBall"
            },
            {
                "opy": "Hero.ZARYA",
                "en": "Zarya"
            },
            {
                "opy": "Hero.ZENYATTA",
                "en": "Zenyatta"
            }
        ]
    },
    "VARIABLE": {
        "values": [
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
        ]
    },
    "PLAY EFFECT": {
        "opy": "Effect",
        "values": [
            {
                "opy": "Effect.BAD_EXPLOSION",
                "en": "BadExplosion"
            },
            {
                "opy": "Effect.BAD_PICKUP_EFFECT",
                "en": "BadPickupEffect"
            },
            {
                "opy": "Effect.BUFF_EXPLOSION_SOUND",
                "en": "BuffExplosionSound"
            },
            {
                "opy": "Effect.BUFF_IMPACT_SOUND",
                "en": "BuffImpactSound"
            },
            {
                "opy": "Effect.DEBUFF_IMPACT_SOUND",
                "en": "DebuffImpactSound"
            },
            {
                "opy": "Effect.EXPLOSION_SOUND",
                "en": "ExplosionSound"
            },
            {
                "opy": "Effect.GOOD_EXPLOSION",
                "en": "GoodExplosion"
            },
            {
                "opy": "Effect.GOOD_PICKUP_EFFECT",
                "en": "GoodPickupEffect"
            },
            {
                "opy": "Effect.RING_EXPLOSION",
                "en": "RingExplosion"
            },
            {
                "opy": "Effect.RING_EXPLOSION_SOUND",
                "en": "RingExplosionSound"
            }
        ]
    },
    "CREATE EFFECT": {
        "opy": "Effect",
        "values": [
            {
                "opy": "Effect.BAD_AURA",
                "en": "BadAura"
            },
            {
                "opy": "Effect.BAD_AURA_SOUND",
                "en": "BadAuraSound"
            },
            {
                "opy": "Effect.BEACON_SOUND",
                "en": "BeaconSound"
            },
            {
                "opy": "Effect.CLOUD",
                "en": "Cloud"
            },
            {
                "opy": "Effect.DECAL_SOUND",
                "en": "DecalSound"
            },
            {
                "opy": "Effect.ENERGY_SOUND",
                "en": "EnergySound"
            },
            {
                "opy": "Effect.GOOD_AURA",
                "en": "GoodAura"
            },
            {
                "opy": "Effect.GOOD_AURA_SOUND",
                "en": "GoodAuraSound"
            },
            {
                "opy": "Effect.LIGHT_SHAFT",
                "en": "LightShaft"
            },
            {
                "opy": "Effect.ORB",
                "en": "Orb"
            },
            {
                "opy": "Effect.PICKUP_SOUND",
                "en": "Pick-upSound"
            },
            {
                "opy": "Effect.RING",
                "en": "Ring"
            },
            {
                "opy": "Effect.SMOKE_SOUND",
                "en": "SmokeSound"
            },
            {
                "opy": "Effect.SPARKLES",
                "en": "Sparkles"
            },
            {
                "opy": "Effect.SPARKLES_SOUND",
                "en": "SparklesSound"
            },
            {
                "opy": "Effect.SPHERE",
                "en": "Sphere"
            }
        ]
    },
    "COMMUNICATE": {
        "opy": "Comms",
        "values": [
            {
                "opy": "Comms.ACKNOWLEDGE",
                "en": "Acknowledge"
            },
            {
                "opy": "Comms.EMOTE_DOWN",
                "en": "EmoteDown"
            },
            {
                "opy": "Comms.EMOTE_LEFT",
                "en": "EmoteLeft"
            },
            {
                "opy": "Comms.EMOTE_RIGHT",
                "en": "EmoteRight"
            },
            {
                "opy": "Comms.EMOTE_UP",
                "en": "EmoteUp"
            },
            {
                "opy": "Comms.GROUP_UP",
                "en": "GroupUp"
            },
            {
                "opy": "Comms.HELLO",
                "en": "Hello"
            },
            {
                "opy": "Comms.NEED_HEALING",
                "en": "NeedHealing"
            },
            {
                "opy": "Comms.THANKS",
                "en": "Thanks"
            },
            {
                "opy": "Comms.ULTIMATE_STATUS",
                "en": "UltimateStatus"
            },
            {
                "opy": "Comms.VOICE_LINE_DOWN",
                "en": "VoiceLineDown"
            },
            {
                "opy": "Comms.VOICE_LINE_LEFT",
                "en": "VoiceLineLeft"
            },
            {
                "opy": "Comms.VOICE_LINE_RIGHT",
                "en": "VoiceLineRight"
            },
            {
                "opy": "Comms.VOICE_LINE_UP",
                "en": "VoiceLineUp"
            }
        ]
    },
    "ICON": {
        "opy": "Icon",
        "values": [
            {
                "opy": "Icon.ARROW_DOWN",
                "en": "Arrow:Down"
            },
            {
                "opy": "Icon.ARROW_LEFT",
                "en": "Arrow:Left"
            },
            {
                "opy": "Icon.ARROW_RIGHT",
                "en": "Arrow:Right"
            },
            {
                "opy": "Icon.ARROW_UP",
                "en": "Arrow:Up"
            },
            {
                "opy": "Icon.ASTERISK",
                "en": "Asterisk"
            },
            {
                "opy": "Icon.BOLT",
                "en": "Bolt"
            },
            {
                "opy": "Icon.CHECKMARK",
                "en": "Checkmark"
            },
            {
                "opy": "Icon.CIRCLE",
                "en": "Circle"
            },
            {
                "opy": "Icon.CLUB",
                "en": "Club"
            },
            {
                "opy": "Icon.DIAMOND",
                "en": "Diamond"
            },
            {
                "opy": "Icon.DIZZY",
                "en": "Dizzy"
            },
            {
                "opy": "Icon.EXCLAMATION_MARK",
                "en": "ExclamationMark"
            },
            {
                "opy": "Icon.EYE",
                "en": "Eye"
            },
            {
                "opy": "Icon.FIRE",
                "en": "Fire"
            },
            {
                "opy": "Icon.FLAG",
                "en": "Flag"
            },
            {
                "opy": "Icon.HALO",
                "en": "Halo"
            },
            {
                "opy": "Icon.HAPPY",
                "en": "Happy"
            },
            {
                "opy": "Icon.HEART",
                "en": "Heart"
            },
            {
                "opy": "Icon.MOON",
                "en": "Moon"
            },
            {
                "opy": "Icon.NO",
                "en": "No"
            },
            {
                "opy": "Icon.PLUS",
                "en": "Plus"
            },
            {
                "opy": "Icon.POISON",
                "en": "Poison"
            },
            {
                "opy": "Icon.POISON_2",
                "en": "Poison2"
            },
            {
                "opy": "Icon.QUESTION_MARK",
                "en": "QuestionMark"
            },
            {
                "opy": "Icon.RADIOACTIVE",
                "en": "Radioactive"
            },
            {
                "opy": "Icon.RECYCLE",
                "en": "Recycle"
            },
            {
                "opy": "Icon.RING_THICK",
                "en": "RingThick"
            },
            {
                "opy": "Icon.RING_THIN",
                "en": "RingThin"
            },
            {
                "opy": "Icon.SAD",
                "en": "Sad"
            },
            {
                "opy": "Icon.SKULL",
                "en": "Skull"
            },
            {
                "opy": "Icon.SPADE",
                "en": "Spade"
            },
            {
                "opy": "Icon.SPIRAL",
                "en": "Spiral"
            },
            {
                "opy": "Icon.STOP",
                "en": "Stop"
            },
            {
                "opy": "Icon.TRASHCAN",
                "en": "Trashcan"
            },
            {
                "opy": "Icon.WARNING",
                "en": "Warning"
            },
            {
                "opy": "Icon.CROSS",
                "en": "X"
            }
        ]
    },
    "RELATIVE": {
        "opy": "Relativity",
        "values": [
            {
                "opy": "Relativity.TO_PLAYER",
                "en": "ToPlayer"
            },
            {
                "opy": "Relativity.TO_WORLD",
                "en": "ToWorld"
            }
        ]
    },
    "MOTION": {
        "opy": "Impulse",
        "values": [
            {
                "opy": "Impulse.CANCEL_CONTRARY_MOTION",
                "en": "CancelContraryMotion"
            },
            {
                "opy": "Impulse.INCORPORATE_CONTRARY_MOTION",
                "en": "IncorporateContraryMotion"
            }
        ]
    },
    "ROUNDING TYPE": {
        "values": [
            {
                "opy": "_roundUp",
                "en": "Up"
            },
            {
                "opy": "_roundDown",
                "en": "Down"
            },
            {
                "opy": "_roundToNearest",
                "en": "ToNearest"
            }
        ]
    },
    "LOS CHECK": {
        "opy": "LosCheck",
        "values": [
            {
                "opy": "LosCheck.OFF",
                "en": "Off"
            },
            {
                "opy": "LosCheck.SURFACES",
                "en": "Surfaces"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ALL_BARRIERS",
                "en": "SurfacesAndAllBarriers"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ENEMY_BARRIERS",
                "en": "SurfacesAndEnemyBarriers"
            }
        ]
    },
    "WORLD TEXT CLIPPING": {
        "opy": "Clip",
        "values": [
            {
                "opy": "Clip.SURFACES",
                "en": "ClipAgainstSurfaces"
            },
            {
                "opy": "Clip.NONE",
                "en": "DoNotClip"
            }
        ]
    },
    "HUD LOCATION": {
        "opy": "Position",
        "values": [
            {
                "opy": "Position.LEFT",
                "en": "Left"
            },
            {
                "opy": "Position.TOP",
                "en": "Top"
            },
            {
                "opy": "Position.RIGHT",
                "en": "Right"
            }
        ]
    },
    "ICON REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.POSITION",
                "en": "Position"
            },
            {
                "opy": "Reeval.NONE",
                "en": "None"
            },
            {
                "opy": "Reeval.VISIBILITY",
                "en": "VisibleTo"
            },
            {
                "opy": "Reeval.VISIBILITY_AND_POSITION",
                "en": "VisibleToAndPosition"
            }
        ]
    },
    "EFFECT REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.POSITION_AND_RADIUS",
                "en": "PositionAndRadius"
            },
            {
                "opy": "Reeval.NONE",
                "en": "None"
            },
            {
                "opy": "Reeval.VISIBILITY",
                "en": "VisibleTo"
            },
            {
                "opy": "Reeval.VISIBILITY_POSITION_AND_RADIUS",
                "en": "VisibleToPositionAndRadius"
            }
        ]
    },
    "HUD TEXT REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.STRING",
                "en": "String"
            },
            {
                "opy": "Reeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString"
            }
        ]
    },
    "WORLD TEXT REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.STRING",
                "en": "String"
            },
            {
                "opy": "Reeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString"
            },
            {
                "opy": "Reeval.VISIBILITY_POSITION_AND_STRING",
                "en": "VisibleToPositionAndString"
            }
        ]
    },
    "CHASE RATE REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.DESTINATION_AND_RATE",
                "en": "DestinationAndRate"
            },
            {
                "opy": "Reeval.NONE",
                "en": "None"
            }
        ]
    },
    "CHASE TIME REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.DESTINATION_AND_DURATION",
                "en": "DestinationAndDuration"
            },
            {
                "opy": "Reeval.NONE",
                "en": "None"
            }
        ]
    },
    "OBJECTIVE DESCRIPTION REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.STRING",
                "en": "String"
            },
            {
                "opy": "Reeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString"
            }
        ]
    },
    "DAMAGE MODIFICATION REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.NONE",
                "en": "None"
            },
            {
                "opy": "Reeval.RECEIVERS_AND_DAMAGERS",
                "en": "ReceiversAndDamagers"
            },
            {
                "opy": "Reeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT",
                "en": "ReceiversDamagersAndDamagePercent"
            }
        ]
    },
    "FACING REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.DIRECTION_AND_TURN_RATE",
                "en": "DirectionAndTurnRate"
            },
            {
                "opy": "Reeval.NONE",
                "en": "None"
            }
        ]
    },
    "WAIT BEHAVIOR": {
        "opy": "Wait",
        "values": [
            {
                "opy": "Wait.ABORT_WHEN_FALSE",
                "en": "AbortWhenFalse"
            },
            {
                "opy": "Wait.IGNORE_CONDITION",
                "en": "IgnoreCondition"
            },
            {
                "opy": "Wait.RESTART_WHEN_TRUE",
                "en": "RestartWhenTrue"
            }
        ]
    },
    "BARRIERS LOS": {
        "opy": "LosCheck",
        "values": [
            {
                "opy": "LosCheck.BLOCKED_BY_ENEMY_BARRIERS",
                "en": "EnemyBarriersBlockLos"
            },
            {
                "opy": "LosCheck.BLOCKED_BY_ALL_BARRIERS",
                "en": "AllBarriersBlockLos"
            },
            {
                "opy": "LosCheck.PASS_THROUGH_BARRIERS",
                "en": "BarriersDoNotBlockLos"
            }
        ]
    },
    "STATUS": {
        "opy": "Status",
        "values": [
            {
                "opy": "Status.ASLEEP",
                "en": "Asleep"
            },
            {
                "opy": "Status.BURNING",
                "en": "Burning"
            },
            {
                "opy": "Status.FROZEN",
                "en": "Frozen"
            },
            {
                "opy": "Status.HACKED",
                "en": "Hacked"
            },
            {
                "opy": "Status.INVINCIBLE",
                "en": "Invincible"
            },
            {
                "opy": "Status.KNOCKED_DOWN",
                "en": "KnockedDown"
            },
            {
                "opy": "Status.PHASED_OUT",
                "en": "PhasedOut"
            },
            {
                "opy": "Status.ROOTED",
                "en": "Rooted"
            },
            {
                "opy": "Status.STUNNED",
                "en": "Stunned"
            },
            {
                "opy": "Status.UNKILLABLE",
                "en": "Unkillable"
            }
        ]
    },
    "SPECTATOR VISIBILITY": {
        "opy": "SpecVisibility",
        "values": [
            {
                "opy": "SpecVisibility.DEFAULT",
                "en": "Defaultvisibility"
            },
            {
                "opy": "SpecVisibility.ALWAYS",
                "en": "Visiblealways"
            },
            {
                "opy": "SpecVisibility.NEVER",
                "en": "Visiblenever"
            }
        ]
    },
    "BEAM EFFECT": {
        "opy": "Beam",
        "values": [
            {
                "opy": "Beam.BAD",
                "en": "Badbeam"
            },
            {
                "opy": "Beam.GOOD",
                "en": "Goodbeam"
            },
            {
                "opy": "Beam.GRAPPLE",
                "en": "Grapplebeam"
            }
        ]
    },
    "THROTTLE BEHAVIOR": {
        "opy": "Throttle",
        "values": [
            {
                "opy": "Throttle.REPLACE_EXISTING",
                "en": "Replaceexistingthrottle"
            },
            {
                "opy": "Throttle.ADD_TO_EXISTING",
                "en": "Addtoexistingthrottle"
            }
        ]
    },
    "THROTTLE REEVALUATION": {
        "opy": "Reeval",
        "values": [
            {
                "opy": "Reeval.DIRECTION_AND_MAGNITUDE",
                "en": "Directionandmagnitude"
            },
            {
                "opy": "Reeval.NONE",
                "en": "None"
            }
        ]
    }
};

