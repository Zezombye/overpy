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

var customGameSettingsSchema = 
{
    "lobby": {
        "en-US": "lobby",
        "values": {
            "mapRotation": {
                "en-US": "Map Rotation",
                "values": [
                    {
                        "opy": "afterMirrorMatch",
                        "en-US": "After A Mirror Match",
                        "default": true,
                    },{
                        "opy": "afterGame",
                        "en-US": "After A Game",
                    },{
                        "opy": "paused",
                        "en-US": "Paused",
                    }
                ]
            },
            "returnToLobby": {
                "en-US": "Return To Lobby",
                "values": [
                    {
                        "opy": "never",
                        "en-US": "Never",
                        "default": true,
                    },{
                        "opy": "afterGame",
                        "en-US": "After A Game",
                    },{
                        "opy": "afterMirrorMatch",
                        "en-US": "After A Mirror Match",
                    }
                ]
            },
            "teamBalancing": {
                "en-US": "Team Balancing",
                "values": [
                    {
                        "opy": "off",
                        "en-US": "Off",
                        "default": true,
                    },{
                        "opy": "afterMirrorMatch",
                        "en-US": "After A Mirror Match",
                    },{
                        "opy": "afterGame",
                        "en-US": "After A Game",
                    }
                ]
            },
            "swapTeamsAfterMatch": {
                "en-US": "Swap Teams After Match",
                "values": "_boolYesNo",
                "default": "yes",
            },
            "team1Slots": {
                "en-US": "Max Team 1 Players",
                "values": "_int",
                "min": 0,
                "max": 6,
                "default": 6,
            },
            "team2Slots": {
                "en-US": "Max Team 2 Players",
                "values": "_int",
                "min": 0,
                "max": 6,
                "default": 6,
            },
            "ffaSlots": {
                "en-US": "Max FFA Players",
                "values": "_int",
                "min": 0,
                "max": 12,
                "default": 12,
            },
            "spectatorSlots": {
                "en-US": "Max Spectators",
                "values": "_int",
                "min": 0,
                "max": 12,
                "default": 2,
            },
            "allowPlayersInQueue": {
                "en-US": "Allow Players Who Are In Queue",
                "values": "_boolYesNo",
                "default": "no"
            },
            "useExperimentalUpdate": {
                "en-US": "Use Experimental Update If Available",
                "values": "_boolYesNo",
                "default": "no"
            },
            "enableMatchVoiceChat": {
                "en-US": "Match Voice Chat",
                "values": "_boolEnabled",
                "default": "disabled",
            },
            "pauseGameOnDisconnect": {
                "en-US": "Pause Game On Player Disconnect",
                "values": "_boolYesNo",
                "default": "no",
            },
            "dataCenterPreference": {
                "en-US": "Data Center Preference",
                "values": [
                    {
                        "opy": "bestAvailable",
                        "en-US": "Best Available",
                        "default": true,
                    },{
                        "opy": "USCentral",
                        "en-US": "USA - Central",
                    },{
                        "opy": "France",
                        "en-US": "France"
                    },{
                        "opy": "SouthKorea",
                        "en-US": "South Korea",
                    },{
                        "opy": "Bahrain",
                        "en-US": "Bahrain",
                    },{
                        "opy": "Netherlands",
                        "en-US": "Netherlands",
                    },{
                        "opy": "USWest",
                        "en-US": "USA - West",
                    },{
                        "opy": "Australia3",
                        "en-US": "Australia 3",
                    }
                ]
            }
        }
    },
    "modes": {
        "en-US": "modes",
        "values": {
            "general": {
                "en-US": "General",
                "values": {
                    "enableEnemyHealthBars": {
                        "en-US": "Enemy Health Bars",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "gamemodeStartTrigger": {
                        "en-US": "Game Mode Start",
                        "values": [
                            {
                                "opy": "allSlotsFilled",
                                "en-US": "All Slots Filled",
                                "default": true,
                            },{
                                "opy": "immediately",
                                "en-US": "Immediately"
                            },{
                                "opy": "manual",
                                "en-US": "Manual",
                            }
                        ]
                    },
                    "healthPackRespawnTime%": {
                        "en-US": "Health Pack Respawn Time Scalar",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                    "enableKillCam": {
                        "en-US": "Kill Cam",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "enableKillFeed": {
                        "en-US": "Kill Feed",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "enableSkins": {
                        "en-US": "Skins",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "spawnHealthPacks": {
                        "en-US": "Spawn Health Packs",
                        "values": [
                            {
                                "opy": "modeDependent",
                                "en-US": "Determined By Mode",
                                "default": true,
                            },{
                                "opy": "enabled",
                                "en-US": "Enabled",
                            },{
                                "opy": "disabled",
                                "en-US": "Disabled"
                            }
                        ]
                    },
                    "enableHeroSwitching": {
                        "en-US": "Allow Hero Switching",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "heroLimit": {
                        "en-US": "Hero Limit",
                        "values": [
                            {
                                "opy": "off",
                                "en-US": "Off",
                            },{
                                "opy": "1PerTeam",
                                "en-US": "1 Per Team",
                                "default": true,
                            },{
                                "opy": "2PerTeam",
                                "en-US": "2 Per Team",
                            },{
                                "opy": "1PerGame",
                                "en-US": "1 Per Game",
                            },{
                                "opy": "2PerGame",
                                "en-US": "2 Per Game",
                            }
                        ]
                    },
                    "roleLimit": {
                        "en-US": "Limit Roles",
                        "values": [
                            {
                                "opy": "off",
                                "en-US": "Off",
                                "default": true,
                            },{
                                "opy": "2OfEachRolePerTeam",
                                "en-US": "2 Of Each Role Per Team",
                            }
                        ]
                    },
                    "enableRandomHeroes": {
                        "en-US": "Respawn As Random Hero",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "respawnTime%": {
                        "en-US": "Respawn Time Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 100,
                        "default": 100,
                    },
                    "_maps": {
                        "en-US": "maps",
                    },
                }
            },
            "assault": {
                "en-US": "Assault",
                "values": {
                    "captureSpeed%": {
                        "en-US": "Capture Speed Modifier",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                    "enableCompetitiveRules": {
                        "en-US": "Competitive Rules",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    }
                }
            },
            "control": {
                "en-US": "Control",
                "values": {
                    "captureSpeed%": {
                        "en-US": "Capture Speed Modifier",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                    "enableCompetitiveRules": {
                        "en-US": "Competitive Rules",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "setValidControlPoints": {
                        "en-US": "Limit Valid Control Points",
                        "values": [
                            {
                                "opy": "all",
                                "en-US": "All",
                                "default": true,
                            },{
                                "opy": "first",
                                "en-US": "First",
                            },{
                                "opy": "second",
                                "en-US": "Second",
                            },{
                                "opy": "third",
                                "en-US": "Third",
                            }
                        ]
                    },
                    "scoreToWin": {
                        "en-US": "Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 3,
                        "default": 2,
                    },
                    "scoringSpeed%": {
                        "en-US": "Scoring Speed Modifier",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    }
                }
            },
            "escort": {
                "en-US": "Escort",
                "values": {
                    "enableCompetitiveRules": {
                        "en-US": "Competitive Rules",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "payloadSpeed%": {
                        "en-US": "Payload Speed Modifier",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                }
            },
            "hybrid": {
                "en-US": "Hybrid",
                "values": {
                    "captureSpeed%": {
                        "en-US": "Capture Speed Modifier",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                    "enableCompetitiveRules": {
                        "en-US": "Competitive Rules",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "payloadSpeed%": {
                        "en-US": "Payload Speed Modifier",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                }
            },
            "ctf": {
                "en-US": "Capture The Flag",
                "values": {
                    "enableBlitzFlagLocations": {
                        "en-US": "Blitz Flag Locations",
                        "values": "_boolYesNo",
                        "default": "no",
                    },
                    "enableDropFlagOnDmg": {
                        "en-US": "Damage Interrupts Flag Interaction",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "flagCarrierAbilities": {
                        "en-US": "Flag Carrier Abilities",
                        "values": [
                            {
                                "opy": "all",
                                "en-US": "All",
                            },{
                                "opy": "none",
                                "en-US": "None",
                            },{
                                "opy": "restricted",
                                "en-US": "Restricted",
                                "default": true,
                            },
                        ]
                    },
                    "flagDroppedLockTime": {
                        "en-US": "Flag Dropped Lock Time",
                        "values": "_float",
                        "min": 0,
                        "max": 10,
                        "default": 5,
                    },
                    "flagPickupTime": {
                        "en-US": "Flag Pickup Time",
                        "values": "_float",
                        "min": 0,
                        "max": 5,
                        "default": 0,
                    },
                    "flagReturnTime": {
                        "en-US": "Flag Return Time",
                        "values": "_float",
                        "min": 0,
                        "max": 5,
                        "default": 4,
                    },
                    "flagScoreRespawnTime": {
                        "en-US": "Flag Score Respawn Time",
                        "values": "_float",
                        "min": 0,
                        "max": 20,
                        "default": 15,
                    },
                    "gameLengthInMn": {
                        "en-US": "Game Length Minutes",
                        "values": "_int",
                        "min": 5,
                        "max": 15,
                        "default": 8,
                    },
                    "respawnSpeedBuffDuration": {
                        "en-US": "Respawn Speed Buff Duration",
                        "values": "_float",
                        "min": 0,
                        "max": 60,
                        "default": 0,
                    },
                    "scoreToWin": {
                        "en-US": "Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 9,
                        "default": 3,
                    },
                    "teamNeedsFlagAtBaseToScore": {
                        "en-US": "Team Needs Flag At Base To Score",
                        "values": "_boolYesNo",
                        "default": "no",
                    },
                }
            },
            "ffa": {
                "en-US": "Deathmatch",
                "values": {
                    "gameLengthInMn": {
                        "en-US": "Game Length In Minutes",
                        "values": "_int",
                        "min": 5,
                        "max": 15,
                        "default": 10,
                    },
                    "scoreToWin": {
                        "en-US": "Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 50,
                        "default": 20,
                    },
                    "enableSelfInitiatedRespawn": {
                        "en-US": "Self Initiated Respawn",
                        "values": "_boolOnOff",
                        "default": "on",
                    }
                }
            },
            "elimination": {
                "en-US": "Elimination",
                "values": {
                    "heroSelectionTime": {
                        "en-US": "Hero Selection Time",
                        "values": "_int",
                        "min": 20,
                        "max": 60,
                        "default": 20,
                    },
                    "scoreToWin": {
                        "en-US": "Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 9,
                        "default": 3,
                    },
                    "restrictPreviouslyPlayedHeroes": {
                        "en-US": "Restrict Previously Used Heroes",
                        "values": [
                            {
                                "opy": "off",
                                "en-US": "Off",
                                "default": true,
                            },{
                                "opy": "afterRoundWon",
                                "en-US": "After Round Won",
                            },{
                                "opy": "afterRoundPlayed",
                                "en-US": "After Round Played",
                            }
                        ]
                    },
                    "heroesAvailable": {
                        "en-US": "Hero Selection",
                        "values": [
                            {
                                "opy": "any",
                                "en-US": "Any",
                                "default": true,
                            },{
                                "opy": "limited",
                                "en-US": "Limited",
                            },{
                                "opy": "random",
                                "en-US": "Random",
                            },{
                                "opy": "mirroredRandom",
                                "en-US": "Random Mirrored",
                            }
                        ]
                    },
                    "heroPoolSize": {
                        "en-US": "Limited Choice Pool",
                        "values": [
                            {
                                "opy": "teamSize",
                                "en-US": "Team Size",
                            },{
                                "opy": "teamSize+1",
                                "en-US": "Team Size +1",
                            },{
                                "opy": "teamSize+2",
                                "en-US": "Team Size +2",
                            },{
                                "opy": "teamSize+3",
                                "en-US": "Team Size +3",
                            },
                        ]
                    },
                    "enableTiebreaker": {
                        "en-US": "Capture Objective Tiebreaker",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "tiebreakerTime": {
                        "en-US": "Tiebreaker After Match Time Elapsed",
                        "values": "_int",
                        "min": 30,
                        "max": 300,
                        "default": 105,
                    },
                    "tiebreakerCaptureTime": {
                        "en-US": "Time To Capture",
                        "values": "_int",
                        "min": 1,
                        "max": 7,
                        "default": 3,
                    },
                    "drawTime": {
                        "en-US": "Draw After Match Time Elapsed With No Tiebreaker",
                        "values": "_int",
                        "min": 60,
                        "max": 300,
                        "default": 135,
                    },
                    "enableWallhack": {
                        "en-US": "Reveal Heroes",
                        "values": "_boolEnabled",
                        "default": "diabled",
                    },
                    "wallhackEnabledTime": {
                        "en-US": "Reveal Heroes After Match Time Elapsed",
                        "values": "_int",
                        "min": 0,
                        "max": 180,
                        "default": 75,
                    },
                }
            },
            "tdm": {
                "en-US": "Team Deathmatch",
                "values": {
                    "gameLengthInMn": {
                        "en-US": "Game Length In Minutes",
                        "values": "_int",
                        "min": 5,
                        "max": 15,
                        "default": 10,
                    },
                    "enableMercyRezKillCancel": {
                        "en-US": "Mercy Resurrect Counteracts Kills",
                        "values": "_boolOnOff",
                        "default": "on",
                    },
                    "scoreToWin": {
                        "en-US": "Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 200,
                        "default": 30,
                    },
                    "enableSelfInitiatedRespawn": {
                        "en-US": "Self Initiated Respawn",
                        "values": "_boolOnOff",
                        "default": "on",
                    },
                    "needsImbalancedTeamScoreToWin": {
                        "en-US": "Imbalanced Team Score To Win",
                        "values": "_boolOnOff",
                        "default": "off",
                    },
                    "team1ScoreToWin": {
                        "en-US": "Team 1 Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 200,
                        "default": 30,
                    },
                    "team2ScoreToWin": {
                        "en-US": "Team 2 Score To Win",
                        "values": "_int",
                        "min": 1,
                        "max": 200,
                        "default": 30,
                    },
                }
            },
            "skirmish": {
                "en-US": "Skirmish",
                "values": [],
            },
            "practiceRange": {
                "en-US": "Practice Range",
                "values": {
                    "spawnTrainingBots": {
                        "en-US": "Spawn Training Bots",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "trainingBotsRespawnTime%": {
                        "en-US": "Training Bot Respawn Time Scalar",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    }
                }
            }
        }
    },
    "heroes": {
        "en-US": "heroes",
        "teams": [
            {
                "opy": "allTeams",
                "en-US": "General",
            },{
                "opy": "team1",
                "en-US": "Team 1",
            },{
                "opy": "team2",
                "en-US": "Team 2",
            },{
                "opy": "ffa",
                "en-US": "Team FFA",
            }
        ],
        "values": {
            "_generalButNotEachHero": {
                "abilityCooldown%": {
                    "en-US": "Ability Cooldown Time",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                },
            },
            "_generalAndEachHero": {
                "enableMelee": {
                    "en-US": "Quick Melee",
                    "values": "_boolEnabled",
                    "default": "enabled",
                },
                "enableUlt": {
                    "en-US": "Ultimate Ability",
                    "values": "_boolEnabled",
                    "default": "enabled",
                },
                "ultGen%": {
                    "en-US": "Ultimate Generation",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                },
                "combatUltGen%": {
                    "en-US": "Ultimate Generation - Combat",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                },
                "passiveUltGen%": {
                    "en-US": "Ultimate Generation - Passive",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                },
                "enableSpawningWithUlt": {
                    "en-US": "Spawn With Ultimate Ready",
                    "values": "_boolEnabled",
                    "default": "disabled",
                },
                "ultDuration%": {
                    "en-US": "Ultimate Duration",
                    "values": "_percent",
                    "min": 25,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "ashe",
                        "bastion",
                        "doomfist",
                        "genji",
                        "junkrat",
                        "moira",
                        "soldier",
                        "torbjorn",
                        "widowmaker",
                        "winston",
                        "hammond",
                    ]
                },
                "enableInfiniteUlt": {
                    "en-US": "Infinite Ultimate Duration",
                    "values": "_boolEnabled",
                    "default": "disabled",
                    "include": [
                        "ashe",
                        "bastion",
                        "doomfist",
                        "genji",
                        "junkrat",
                        "moira",
                        "soldier",
                        "torbjorn",
                        "widowmaker",
                        "winston",
                        "hammond",
                    ]
                },
                "damageDealt%": {
                    "en-US": "Damage Dealt",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                },
                "damageReceived%": {
                    "en-US": "Damage Received",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                },
                "healingDealt%": {
                    "en-US": "Healing Dealt",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                },
                "healingReceived%": {
                    "en-US": "Healing Received",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                },
                "health%": {
                    "en-US": "Health",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                },
                "jumpVerticalSpeed%": {
                    "en-US": "Jump Vertical Speed",
                    "values": "_percent",
                    "min": 25,
                    "max": 800,
                    "default": 100,
                },
                "movementGravity%": {
                    "en-US": "Movement Gravity",
                    "values": "_percent",
                    "min": 25,
                    "max": 400,
                    "default": 100,
                },
                "movementSpeed%": {
                    "en-US": "Movement Speed",
                    "values": "_percent",
                    "min": 50,
                    "max": 300,
                    "default": 100,
                },
                "projectileGravity%": {
                    "en-US": "Projectile Gravity",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                },
                "projectileSpeed%": {
                    "en-US": "Projectile Speed",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                },
                "enableHeadshotsOnly": {
                    "en-US": "Receive Headshots Only",
                    "values": "_boolEnabled",
                    "default": "disabled",
                },
                "enablePrimaryFire": {
                    "en-US": "Primary Fire",
                    "values": "_boolEnabled",
                    "default": "enabled",
                },
                "ammoClipSize%": {
                    "en-US": "Ammunition Clip Size Scalar",
                    "values": "_percent",
                    "min": 25,
                    "max": 500,
                    "default": 100,
                    "exclude": [
                        "brigitte",
                        "dva",
                        "hanzo",
                        "reinhardt",
                        "sigma",
                    ]
                },
                "enableInfiniteAmmo": {
                    "en-US": "No Ammunition Requirement",
                    "values": "_boolOnOff",
                    "default": "off",
                    "exclude": [
                        "brigitte",
                        "dva",
                        "hanzo",
                        "moira",
                        "reinhardt",
                        "sigma",
                    ]
                },
            },
            "_eachHero": {
                "enableAbility1": {
                    "values": "_boolEnabled",
                    "default": "enabled",
                },
                "ability1Cooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "exclude": [
                        "bastion",
                        "lucio",
                        "soldier",
                        "hammond",
                        "zenyatta",
                    ]
                },
                "enableAbility2": {
                    "values": "_boolEnabled",
                    "default": "enabled",
                    "exclude": [
                        "bastion",
                    ]
                },
                "ability2Cooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "exclude": [
                        "bastion",
                        "zenyatta",
                    ]
                },
                "enableSecondaryFire": {
                    "values": "_boolEnabled",
                    "default": "enabled",
                    "include": [
                        "bastion",
                        "brigitte",
                        "dva",
                        "doomfist",
                        "lucio",
                        "orisa",
                        "pharah",
                        "reinhardt",
                        "sigma",
                        "soldier",
                        "sombra",
                        "hammond",
                    ]
                },
                "secondaryFireCooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "bastion",
                        "brigitte",
                        "doomfist",
                        "lucio",
                        "orisa",
                        "reinhardt",
                        "sigma",
                        "soldier",
                        "sombra",
                        "hammond",
                    ]
                },
                "enableGenericSecondaryFire": {
                    "en-US": "Secondary Fire",
                    "values": "_boolEnabled",
                    "default": "enabled",
                    "include": [
                        "baptiste",
                        "genji",
                        "mccree",
                        "mei",
                        "mercy",
                        "moira",
                        "roadhog",
                        "symmetra",
                        "torbjorn",
                        "zarya",
                        "zenyatta",
                    ]
                },
                "enableAutomaticFire": {
                    "en-US": "No Automatic Fire",
                    "values": "_boolReverseEnabled",
                    "default": "enabled",
                    "include": [
                        "ana",
                        "ashe",
                        "widowmaker",
                    ]
                },
                "enableScoping": {
                    "en-US": "No Scope",
                    "values": "_boolReverseEnabled",
                    "default": "enabled",
                    "include": [
                        "ana",
                        "ashe",
                        "widowmaker",
                    ]
                },
            },
            "_heroes": {
                "en-US": "heroes",
            },
            "ashe": {
                "values": {
                    "ability1EnemyKb%": {
                        "en-US": "Coach Gun Knockback Scalar Enemy",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "ability1SelfKb%": {
                        "en-US": "Coach Gun Knockback Scalar Self",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "ability2FuseTime%": {
                        "en-US": "Dynamite Fuse Time Scalar",
                        "values": "_percent",
                        "min": 1,
                        "max": 500,
                        "default": 100,
                    }
                }
            },
            "bastion": {
                "values": {
                    "secondaryFireMaximumTime%": {
                        "en-US": "Self-Repair Maximum Time",
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                    },
                    "secondaryFireRechargeRate%": {
                        "en-US": "Self-Repair Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "ultKb%": {
                        "en-US": "Configuration: Tank Weapon Knockback Scalar",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    }
                }
            },
            "brigitte": {
                "values": {
                    "secondaryFireRechargeRate%": {
                        "en-US": "Self-Repair Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "enableShieldBash": {
                        "en-US": "Shield Bash",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "shieldBashCooldown%": {
                        "en-US": "Shield Bash Cooldown Time",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "shieldBashKb%": {
                        "en-US": "Shield Bash Knockback Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    },
                    "ability1Kb%": {
                        "en-US": "Whip Shot Knockback Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    }
                }
            },
            "dva": {
                "values": {
                    "secondaryFireMaximumTime%": {
                        "en-US": "Defense Matrix Maximum Time",
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                    },
                    "secondaryFireRechargeRate%": {
                        "en-US": "Defense Matrix Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "ability1Kb%": {
                        "en-US": "Boosters Knockback Scalar",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                    "callMechKb%": {
                        "en-US": "Call Mech Knockback Scalar",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                    "selfDestructKb%": {
                        "en-US": "Self Destruct Knockback Scalar",
                        "min": 0,
                        "max": 200,
                        "default": 100,
                    },
                    "spawnWithoutMech": {
                        "en-US": "Spawn Without Mech",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    }
                }
            },
            "doomfist": {
                "values": {
                    "ability1Kb%": {
                        "en-US": "Rising Uppercut Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "secondaryFireKb%": {
                        "en-US": "Rocket Punch Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "ultKb%": {
                        "en-US": "Meteor Strike Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "ammoRegenerationTime%": {
                        "en-US": "Ammunition Regeneration Time Scalar",
                        "values": "_percent",
                        "min": 33,
                        "max": 500,
                        "default": 100,
                    },
                }
            },
            "hanzo": {
                "values": {
                    "enableLunge": {
                        "en-US": "Lunge",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "lungeCooldown%": {
                        "en-US": "Lunge Cooldown Time",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "lungeDistance%": {
                        "en-US": "Lunge Distance Time",
                        "values": "_percent",
                        "min": 20,
                        "max": 300,
                        "default": 100,
                    },
                    "ability2Quantity%": {
                        "en-US": "Storm Arrows Quantity",
                        "values": "_int",
                        "min": 3,
                        "max": 12,
                        "default": 100,
                    },
                }
            },
            "junkrat": {
                "values": {
                    "ability1Kb%": {
                        "en-US": "Concussion Mine Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 200,
                        "default": 100,
                    },
                    "primaryFireKb%": {
                        "en-US": "Frag Launcher Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    }
                }
            },
            "lucio": {
                "values": {
                    "secondaryFireKb%": {
                        "en-US": "Soundwave Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                }
            },
            "mei": {
                "values": {
                    "ultFreezeMinimum%": {
                        "en-US": "Blizzard Freeze Minimum",
                        "values": "_percent",
                        "min": 0,
                        "max": 100,
                        "default": 50,
                    },
                    "ultFreezeRate%": {
                        "en-US": "Blizzard Freeze Rate Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "enablePrimaryFireFreezeStack": {
                        "en-US": "Freeze Stacking",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "primaryFireFreezeDuration%": {
                        "en-US": "Weapon Freeze Duration Scalar",
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                    },
                    "primaryFireFreezeMinimum%": {
                        "en-US": "Weapon Freeze Minimum",
                        "values": "_percent",
                        "min": 0,
                        "max": 100,
                        "default": 30,
                    },
                    "primaryFireFreezeRate%": {
                        "en-US": "Weapon Freeze Rate Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                }
            },
            "mercy": {
                "values": {
                    "enablePassiveRegeneration": {
                        "en-US": "Regeneration",
                        "values": "_boolEnabled",
                        "default": "enabled",
                    },
                    "weaponsEnabled": {
                        "en-US": "Weapons Enabled",
                        "values": [
                            {
                                "opy": "all",
                                "en-US": "All",
                                "default": true,
                            },{
                                "opy": "staff",
                                "en-US": "Caduceus Staff Only",
                            },{
                                "opy": "blaster",
                                "en-US": "Caduceus Blaster Only",
                            }
                        ]
                    },
                }
            },
            "moira": {
                "values": {
                    "ability2MaxDamage%": {
                        "en-US": "Biotic Orb Max Damage Scalar",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                    "ability2MaxHealing%": {
                        "en-US": "Biotic Orb Max Healing Scalar",
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                    },
                    "primaryFireMaximumTime%": {
                        "en-US": "Biotic Energy Maximum",
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                    },
                    "primaryFireRechargeRate%": {
                        "en-US": "Biotic Energy Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                }
            },
            "pharah": {
                "values": {
                    "ability2Kb%": {
                        "en-US": "Concussive Blast Knockback Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    },
                    "secondaryFireMaximumTime%": {
                        "en-US": "Hover Jets Maximum Time",
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                    },
                    "secondaryFireRechargeRate%": {
                        "en-US": "Hover Jets Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "enableSecondaryFireUnlimitedFuel": {
                        "en-US": "Hover Jets Unlimited Fuel",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "secondaryFireVerticalSpeed%": {
                        "en-US": "Hover Jets Vertical Speed Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    },
                    "ability1Acceleration%": {
                        "en-US": "Jump Jet Acceleration Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    },
                    "primaryFireKb%": {
                        "en-US": "Rocket Launcher Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                }
            },
            "reinhardt": {
                "values": {
                    "secondaryFireRechargeRate%": {
                        "en-US": "Barrier Field Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "ability1Kb%": {
                        "en-US": "Charge Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "primaryFireKb%": {
                        "en-US": "Rocket Hammer Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                }
            },
            "roadhog": {
                "values": {
                    "ultKb%": {
                        "en-US": "Whole Hog Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    }
                }
            },
            "sigma": {
                "values": {
                    "ability2Kb%": {
                        "en-US": "Accretion Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                    },
                    "secondaryFireRechargeRate%": {
                        "en-US": "Experimental Barrier Recharge Rate",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                }
            },
            "soldier": {
                "values": {
                    "secondaryFireKb%": {
                        "en-US": "Helix Rockets Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    }
                }
            },
            "torbjorn": {
                "values": {
                    "ability2Duration%": {
                        "en-US": "Overload Duration Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                    },
                    "weaponsEnabled": {
                        "en-US": "Weapons Enabled",
                        "values": [
                            {
                                "opy": "all",
                                "en-US": "All",
                                "default": true,
                            },{
                                "opy": "rivetGun",
                                "en-US": "Rivet Gun Only",
                            },{
                                "opy": "hammer",
                                "en-US": "Forge Hammer Only",
                            }
                        ]
                    },
                }
            },
            "winston": {
                "values": {
                    "ability1Acceleration%": {
                        "en-US": "Jump Pack Acceleration Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    },
                    "ability1Kb%": {
                        "en-US": "Jump Pack Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                    "ultKb%": {
                        "en-US": "Primal Rage Melee Knockback Scalar",
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                    }
                }
            },
            "hammond": {
                "values": {
                    "enableRollOnly": {
                        "en-US": "Roll Always Active",
                        "values": "_boolEnabled",
                        "default": "disabled",
                    },
                    "ability1Kb%": {
                        "en-US": "Grappling Claw Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                    "ultKb%": {
                        "en-US": "Minefield Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    }
                }
            },
            "zarya": {
                "values": {
                    "secondaryFireKb%": {
                        "en-US": "Particle Cannon Secondary Knockback Scalar",
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                    },
                }
            }
        }
    },
    "maps": {
        "en-US": "maps",
    }
}