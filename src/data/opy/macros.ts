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

import { Argument, LocalizableString, Type } from "../../types";

export const opyMacros: Record<string, {
    args: Argument[] | null,
    macro: string,
    class?: string,
    return: Type,
    description: string
} & LocalizableString> = {


    "getRealClosestPlayer": {
        "description": "The alive and spawned player closest to a position, optionally restricted by team.\n\nNote: the workshop `Closest Player To` function targets dead and unspawned players (at 0,0,0). Use this function instead.",
        "args": [
            {
                "name": "center",
                "description": "The position from which to measure proximity.",
                "type": "Position",
            },
            {
                "name": "team",
                "description": "The team or teams from which the closest player will come.",
                "type": "Team",
                "default": "ALL"
            }
        ],
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned()], key=lambda p: distance(p, $center))[0]",
        "return": "Player"
    },
    "getRealClosestPlayers": {
        "description": "The alive and spawned players closest to a position, optionally restricted by team and sorted by ascending distance.",
        "args": [
            {
                "name": "center",
                "description": "The position from which to measure proximity.",
                "type": "Position",
            },
            {
                "name": "team",
                "description": "The team or teams from which the closest player will come.",
                "type": "Team",
                "default": "ALL"
            }
        ],
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned()], key=lambda p: distance(p, $center))",
        "return": "Player"
    },
    "getRealFarthestPlayer": {
        "description": "The alive and spawned player farthest from a position, optionally restricted by team.\n\nNote: the workshop `Farthest Player From` function targets dead and unspawned players (at 0,0,0). Use this function instead.",
        "args": [
            {
                "name": "center",
                "description": "The position from which to measure distance.",
                "type": "Position",
            },
            {
                "name": "team",
                "description": "The team or teams from which the farthest player will come.",
                "type": "Team",
                "default": "ALL"
            }
        ],
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned()], key=lambda p: -distance(p, $center))[0]",
        "return": "Player"
    },

    "getRealFarthestPlayers": {
        "description": "The alive and spawned players farthest from a position, optionally restricted by team and sorted by descending distance.",
        "args": [
            {
                "name": "center",
                "description": "The position from which to measure distance.",
                "type": "Position",
            },
            {
                "name": "team",
                "description": "The team or teams from which the farthest player will come.",
                "type": "Team",
                "default": "ALL"
            }
        ],
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned()], key=lambda p: -distance(p, $center))",
        "return": "Player"
    },

    ".getRealPlayerClosestToReticle": {
        "description": "The alive and spawned player closest to the reticle of the specified player, optionally restricted by team.\n\nNote: the workshop `Player Closest To Reticle` function targets dead and unspawned players (at 0,0,0). Use this function instead.",
        "args": [
            {
                "name": "player",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "Player",
            },
            {
                "name": "team",
                "description": "The team or teams on which to search for the closest player.",
                "type": "Team",
                "default": "ALL",
            }
        ],
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned() and p != $player], key=lambda x: angleBetweenVectors($player.getFacingDirection(), x - $player.getEyePosition()))[0]",
        "return": "Player",
    },
    ".getRealPlayersClosestToReticle": {
        "description": "The alive and spawned players closest to the reticle of the specified player, optionally restricted by team and sorted by ascending distance to reticle.",
        "args": [
            {
                "name": "player",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "Player",
            },
            {
                "name": "team",
                "description": "The team or teams on which to search for the closest player.",
                "type": "Team",
                "default": "ALL",
            }
        ],
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned() and p != $player], key=lambda x: angleBetweenVectors($player.getFacingDirection(), x - $player.getEyePosition()))",
        "return": "Player",
    },
    "getSign": {
        "description": "Built-in macro for calculating the sign of a number. Returns -1, 0 or 1.",
        "args": [
            {
                "name": "number",
                "description": "The number to calculate the sign of.",
                "type": "float",
            }
        ],
        macro: "$number * Math.INFINITY * Math.INFINITY / Math.INFINITY / 10",
        "return": "int"
    },
    "getAllPlayers": {
        "description": "Built-in macro for `getPlayers(Team.ALL)`.",
        "args": [],
        macro: "getPlayers(Team.ALL)",
        "return": {
            "Array": "Player"
        }
    },

    "hudHeader": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "visibleTo",
                "description": "One or more players who will see the hud text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "getAllPlayers()"
            },
            {
                "name": "text",
                "description": "The text to be displayed.",
                "type": "Object",
            },
            {
                "name": "location",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "sortOrder",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            },
            {
                "name": "color",
                "description": "The color of the header.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBILITY_SORT_ORDER_STRING_AND_COLOR"
            },
            {
                "name": "specVisibility",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT"
            }
        ],
        macro: "hudText($visibleTo, $text, null, null, $location, $sortOrder, $color, null, null, $reevaluation, $specVisibility)",
        "return": "void"
    },
    "hudSubheader": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "visibleTo",
                "description": "One or more players who will see the hud text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "getAllPlayers()"
            },
            {
                "name": "text",
                "description": "The subheader text to be displayed.",
                "type": "Object",
            },
            {
                "name": "location",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "sortOrder",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            },
            {
                "name": "color",
                "description": "The color of the subheader.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBILITY_SORT_ORDER_STRING_AND_COLOR"
            },
            {
                "name": "specVisibility",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT"
            }
        ],
        macro: "hudText($visibleTo, null, $text, null, $location, $sortOrder, null, $color, null, $reevaluation, $specVisibility)",
        "return": "void"
    },
    "hudSubtext": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "visibleTo",
                "description": "One or more players who will see the hud text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "getAllPlayers()"
            },
            {
                "name": "text",
                "description": "The text to be displayed.",
                "type": "Object",
            },
            {
                "name": "location",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "sortOrder",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            },
            {
                "name": "color",
                "description": "The color of the text.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBILITY_SORT_ORDER_STRING_AND_COLOR"
            },
            {
                "name": "specVisibility",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT"
            }
        ],
        macro: "hudText($visibleTo, null, null, $text, $location, $sortOrder, null, null, $color, $reevaluation, $specVisibility)",
        "return": "void"
    },
    "lineIntersectsSphere": {
        "description": "Built-in macro to determine whether a line intersects a sphere. Can be used to check if a player is looking at a specific point. Note that this function is inaccurate around the edges of a sphere if `lineStart` is too close to `sphereCenter`.\n\nThanks to LazyLion for the formula.",
        "args": [
            {
                "name": "lineStart",
                "description": "The starting position of the line.",
                "type": "Position",
            },{
                "name": "lineDirection",
                "description": "The direction from the starting position to the ending position of the line.",
                "type": "Direction",
            },{
                "name": "sphereCenter",
                "description": "The center of the sphere.",
                "type": "Position",
            },{
                "name": "sphereRadius",
                "description": "The radius of the sphere.",
                "type": "unsigned float",
            }
        ],
        macro: "distance(distance($lineStart, $sphereCenter) * $lineDirection + $lineStart, $sphereCenter) <= $sphereRadius",
        return: "bool",
    },
    "print": {
        "description": "Creates an orange HUD text at the top left. Should be used for quick debugging of a value.",
        "args": [
            {
                "name": "text",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
            }
        ],
        macro: "hudText(getAllPlayers(), $text, Math.FUCKTON_OF_SPACES, null, HudPosition.LEFT, -9999, Color.ORANGE, null, null, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)",
        "return": "void"
    },
    ".reverse": {
        "description": "Reverses the array.",
        "args": [
            {
                "name": "array",
                "description": "The array to reverse.",
                "type": "Array",
            }
        ],
        class: "Array",
        macro: "sorted($array, key=lambda _, i: -i)",
        "return": "Array"
    },
    "timeToString": {
        "description": "Converts a time (in seconds) to a H:MM:SS format with decimals included (unless you use the `floor()` function). For example, `timeToString(3600+120+37)` will return `1:02:37.000`.",
        "args": [
            {
                "name": "time",
                "description": "The time in seconds to display.",
                "type": "unsigned float",
            }
        ],
        macro: `
            "{}:{}:{}".format(
            floor($time / 3600),
            ($time % 3600 / 60 + 100).substring(true, 2),
            ($time % 60 + 100).substring(true, 9999)
        )`,
        "return": "String"
    }

};
