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

    "buttonToString": {
        "description": "Displays a button with [ ] if not a texture, and replaces LSHIFT/LCONTROL/LALT by SHIFT/CTRL/ALT.\n\nYou will likely want to use this instead of `inputBindingString()`.",
        "args": [
            {
                "name": "button",
                "description": "The button to display.",
                "type": "Button",
            }
        ],
        /*macro: `(
    inputBindingString($button)
        if "\\\\{}".format(inputBindingString($button)).substring(0, 3) == "\\\\{}".format(iconString(Icon.ARROW_DOWN)).substring(0, 3)
        else "[{}]".format(inputBindingString($button).replace("LSHIFT", "SHIFT").replace("LCONTROL", "CTRL").replace("LALT", "ALT"))
    )`,*/
        macro: `["{0}(0.00, 1.00, 0.00)[{0}](0.00, 1.00, 0.00)[SHIFT](0.00, 1.00, 0.00)[CTRL](0.00, 1.00, 0.00)[ALT]".format(b).split(Vector.UP[0])[
            strLen("\\\\{0}{0}{0}{0}{0}{0}{0}".format(b)) % 7 == 1 and
            abs("\uEC470\uEC470LSHIFT0LCONTROL0LALT".split(null[0]).index(b))
        ] for b in inputBindingString($button)]`,
        return: "String",
    },
    ".getEffectiveHero": {
        "description": "Gets the effective hero of a player (if playing Echo, it returns the hero they are currently duplicating).\n\nYou will likely want to use this instead of `getHero()`.",
        "args": [
            {
                "name": "self",
                "description": "The player whose effective hero you want to get.",
                "type": "Player",
            }
        ],
        macro: "$self.getHeroOfDuplication() or $self.getHero()",
        "class": "Player",
        return: "Hero",
    },
    ".getOppositeTeam": {
        "description": "Gets the opposite team of the team of a player. If the team is `Team.ALL`, it returns `Team.ALL`.",
        "args": [
            {
                "name": "player",
                "description": "The player whose opposite team you want to get.",
                "type": "Player",
            }
        ],
        macro: "getOppositeTeam($self.getTeam())",
        "class": "Player",
        "return": "Team",
    },
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
                "name": "self",
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
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned() and p != $self], key=lambda x: angleBetweenVectors($self.getFacingDirection(), x - $self.getEyePosition()))[0]",
        "return": "Player",
    },
    ".getRealPlayersClosestToReticle": {
        "description": "The alive and spawned players closest to the reticle of the specified player, optionally restricted by team and sorted by ascending distance to reticle.",
        "args": [
            {
                "name": "self",
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
        macro: "sorted([p for p in getLivingPlayers($team) if p.hasSpawned() and p != $self], key=lambda x: angleBetweenVectors($self.getFacingDirection(), x - $self.getEyePosition()))",
        "return": "Player",
    },

    "getRealPlayersInRadius": {
        "description": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.\n\nNote: the workshop `Players In Radius` function targets dead players. Use this function instead.",
        "args": [
            {
                "name": "center",
                "description": "The center position from which to measure distance.",
                "type": "Position",
            },
            {
                "name": "radius",
                "description": "The radius in meters inside which players must be in order to be included in the resulting array.",
                "type": "unsigned float",
            },
            {
                "name": "team",
                "description": "The team or teams to which a player must belong to be included in the resulting array.",
                "type": "Team",
                "default": "ALL"
            },
            {
                "name": "losCheck",
                "description": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.",
                "type": "LosCheck",
                "default": "OFF"
            }
        ],
        macro: "[p for p in getPlayersInRadius($center, $radius, $team, $losCheck) if p.isAlive() and p.hasSpawned()]",
        "return": {
            "Array": "Player"
        },
    },
    ".getRealPlayersInViewAngle": {
        "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.\n\nNote: the workshop `Players in View Angle` function targets dead and unspawned players (at 0,0,0). Use this function instead.",
        "args": [
            {
                "name": "self",
                "description": "The player whose view to use for the check.",
                "type": "Player",
            },
            {
                "name": "team",
                "description": "The team or teams on which to consider players.",
                "type": "Team",
            },
            {
                "name": "viewAngle",
                "description": "The view angle to compare against in degrees.",
                "type": "float",
            }
        ],
        macro: "[p for p in $self.getPlayersInViewAngle($team, $viewAngle) if p.isAlive() and p.hasSpawned()]",
        "return": {
            "Array": "Player"
        },
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
    "lerp": {
        "description": "Built-in macro for linear interpolation between two values. The value of `t` must be between 0 and 1.",
        "args": [
            {
                "name": "start",
                "description": "The starting value.",
                "type": "float",
            },{
                "name": "end",
                "description": "The ending value.",
                "type": "float",
            },{
                "name": "t",
                "description": "The interpolation factor. Must be between 0 and 1.",
                "type": "unsigned float",
            }
        ],
        macro: "$start * (1 - $t) + $end * $t",
        return: "float"
    },
    "lineIntersectsSphere": {
        "description": "Built-in macro to determine whether a line intersects a sphere. Can be used to check if a player is looking at a specific point. Note that this function is inaccurate if the line starting point is already inside the sphere.\n\nThanks to Mira for the formula.",
        "args": [
            {
                "name": "lineStart",
                "description": "The starting position of the line. It must be outside the sphere for the function to work.",
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
        macro: "angleBetweenVectors($lineStart, $lineDirection) <= asinDeg($sphereRadius / distance($lineStart, $sphereCenter))",
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
                "name": "self",
                "description": "The array to reverse.",
                "type": "Array",
            }
        ],
        class: "Array",
        macro: "sorted($self, key=lambda _, i: -i)",
        "return": "Array"
    },
    "timeToString": {
        "description": "Converts a time (in seconds) to a H:MM:SS format with decimals included (unless you use the `floor()` function). For example, `timeToString(3600+120+37.65)` will return `1:02:37.65`.",
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
    },
    ".unique": {
        "description": "Returns a copy of the array with duplicate values removed (the first value is kept).\n\nThanks to LazyLion for the formula.",
        "args": [
            {

                "name": "self",
                "description": "The array to get the unique values from.",
                "type": "Array",
            }
        ],
        macro: "[elem for elem, idx in $self if $self.index(elem) == idx]",
        class: "Array",
        "return": "Array",
    },

};
