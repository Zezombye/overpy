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
                "en-US": "Max Team 1 Players",
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
                        "values": 
                    }
                }
            }
        }
    }
}