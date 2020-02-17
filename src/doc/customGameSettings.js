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
                    }
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

        }
    }
}