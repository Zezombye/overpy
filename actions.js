var actionList = [{
            "name": "ABORT",
            "description": "Stops execution of the action list.",
            "args": []
        },
        {
            "name": "ABORT IF",
            "description": "Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
            "args": [{
                "name": "CONDITION",
                "description": "Specifies whether the execution is stopped.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }]
        },
        {
            "name": "ABORT IF CONDITION IS FALSE",
            "description": "Stops execution of the action list if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action.",
            "args": []
        },
        {
            "name": "ABORT IF CONDITION IS TRUE",
            "description": "Stops execution of the action list if all conditions in the condition list are true. If any are false, execution continues with the next action.",
            "args": []
        },
        {
            "name": "ALLOW BUTTON",
            "description": "Undoes the effect of the disallow button action for one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose button is being reenabled.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "BUTTON",
                    "description": "The logical button that is being reenabled.",
                    "type": "BUTTON",
                    "default": "PRIMARY FIRE"
                }
            ]
        },
        {
            "name": "APPLY IMPULSE",
            "description": "Applies an instantaneous change in velocity to the movement of one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose velocity will be changed.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DIRECTION",
                    "description": "The unit direction in which the impulse will be applied. This value is normalized internally.",
                    "type": "DIRECTION",
                    "default": "VECTOR"
                },
                {
                    "name": "SPEED",
                    "description": "The magnitude of the change to the velocities of the player or players.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "RELATIVE",
                    "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                    "type": "RELATIVE",
                    "default": "TO WORLD"
                },
                {
                    "name": "MOTION",
                    "description": "Specifies whether existing velocity that is counter to direction should first be cancelled out before applying the impulse.",
                    "type": "MOTION",
                    "default": "CANCEL CONTRARY MOTION"
                }
            ]
        },
        {
            "name": "BIG MESSAGE",
            "description": "Displays a large message above the reticle that is visible to specific players.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will see the message.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "HEADER",
                    "description": "The message to be displayed.",
                    "type": "ANY",
                    "default": "STRING"
                }
            ]
        },
        {
            "name": "CHASE GLOBAL VARIABLE AT RATE",
            "description": "Gradually modifies the value of a global variable at a specific rate. (A global variable is a variable that belongs to the game itself.)",
            "args": [{
                    "name": "VARIABLE",
                    "description": "Specifies which global variable to modify gradually.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "DESTINATION",
                    "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                    "type": "ANY",
                    "default": "NUMBER"
                },
                {
                    "name": "RATE",
                    "description": "The amount of change that will happen to the variable's value each second.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                    "type": "CHASE RATE REEVALUATION",
                    "default": "DESTINATION AND RATE"
                }
            ]
        },
        {
            "name": "CHASE GLOBAL VARIABLE OVER TIME",
            "description": "Gradually modifies the value of a global variable over time. (A global variable is a variable that belongs to the game itself.)",
            "args": [{
                    "name": "VARIABLE",
                    "description": "Specifies which global variable to modify gradually.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "DESTINATION",
                    "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                    "type": "ANY",
                    "default": "NUMBER"
                },
                {
                    "name": "DURATION",
                    "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                    "type": "CHASE TIME REEVALUATION",
                    "default": "DESTINATION AND DURATION"
                }
            ]
        },
        {
            "name": "CHASE PLAYER VARIABLE AT RATE",
            "description": "Gradually modifies the value of a player variable at a specific rate. (A player variable is a variable that belongs to a specific player.)",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which of the player's variables to modify gradually.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "DESTINATION",
                    "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                    "type": "ANY",
                    "default": "NUMBER"
                },
                {
                    "name": "RATE",
                    "description": "The amount of change that will happen to the variable's value each second.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "CHASE PLAYER VARIABLE OVER TIME",
            "description": "Gradually modifies the value of a player variable over time. (A player variable is a variable that belongs to a specific player.)",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which of the player's variables to modify gradually.",
                    "type": "VARIABLE",
                    "default": "VARIABLE"
                },
                {
                    "name": "DESTINATION",
                    "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                    "type": "ANY",
                    "default": "NUMBER"
                },
                {
                    "name": "DURATION",
                    "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "CLEAR STATUS",
            "description": "Clears a status that was applied from a set status action from one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players from whom the status will be removed.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "STATUS",
                    "description": "The status to be removed from the player or players.",
                    "type": "STATUS",
                    "default": "HACKED"
                }
            ]
        },
        {
            "name": "COMMUNICATE",
            "description": "Causes one or more players to use an emote, voice line, or other equipped communication.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players to perform the communication.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "TYPE",
                    "description": "The type of communication.",
                    "type": "COMMUNICATE",
                    "default": "VOICE LINE UP"
                }
            ]
        },
        {
            "name": "CREATE EFFECT",
            "description": "Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will be able to see the effect.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "TYPE",
                    "description": "The type of effect to be created.",
                    "type": "CREATE EFFECT",
                    "default": "SPHERE"
                },
                {
                    "name": "COLOR",
                    "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects.",
                    "type": "COLOR",
                    "default": "WHITE"
                },
                {
                    "name": "POSITION",
                    "description": "The effect's position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "RADIUS",
                    "description": "The radius of this effect.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                    "type": "EFFECT REEVALUATION",
                    "default": "VISIBLE TO, POSITION, AND RADIUS"
                }
            ]
        },
        {
            "name": "CREATE HUD TEXT",
            "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will see the hud text.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "HEADER",
                    "description": "The text to be displayed (can be blank)",
                    "type": "ANY",
                    "default": "STRING"
                },
                {
                    "name": "SUBHEADER",
                    "description": "The subheader text to be displayed (can be blank)",
                    "type": "ANY",
                    "default": "NULL"
                },
                {
                    "name": "TEXT",
                    "description": "The body text to be displayed (can be blank)",
                    "type": "ANY",
                    "default": "NULL"
                },
                {
                    "name": "LOCATION",
                    "description": "The location on the screen where the text will appear.",
                    "type": "HUD LOCATION",
                    "default": "LEFT"
                },
                {
                    "name": "SORT ORDER",
                    "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "HEADER COLOR",
                    "description": "The color of the header.",
                    "type": "COLOR",
                    "default": "WHITE"
                },
                {
                    "name": "SUBHEADER COLOR",
                    "description": "The color of the subheader.",
                    "type": "COLOR",
                    "default": "WHITE"
                },
                {
                    "name": "TEXT COLOR",
                    "description": "The color of the text.",
                    "type": "COLOR",
                    "default": "WHITE"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                    "type": "HUD TEXT REEVALUATION",
                    "default": "VISIBLE TO AND STRING"
                }
            ]
        },
        {
            "name": "CREATE ICON",
            "description": "Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will be able to see the icon.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "POSITION",
                    "description": "The icon's position. If this value is a player, then the icon will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "ICON",
                    "description": "The icon to be created.",
                    "type": "ICON",
                    "default": "ARROW: DOWN"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. The icon will keep asking for and using new values from reevaluated inputs.",
                    "type": "ICON REEVALUATION",
                    "default": "VISIBLE TO AND POSITION"
                },
                {
                    "name": "ICON COLOR",
                    "description": "The color of the icon to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                    "type": "COLOR",
                    "default": "WHITE"
                },
                {
                    "name": "SHOW WHEN OFFSCREEN",
                    "description": "Should this icon appear even when it is behind you?",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "CREATE IN-WORLD TEXT",
            "description": "Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will see the in-world text.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "HEADER",
                    "description": "The text to be displayed.",
                    "type": "ANY",
                    "default": "STRING"
                },
                {
                    "name": "POSITION",
                    "description": "The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "SCALE",
                    "description": "The text's scale.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "CLIPPING",
                    "description": "Specifies whether the text can be seen through walls or is instead clipped.",
                    "type": "WORLD TEXT CLIPPING",
                    "default": "CLIP AGAINST SURFACES"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.",
                    "type": "WORLD TEXT REEVALUATION",
                    "default": "VISIBLE TO, POSITION, AND STRING"
                }
            ]
        },
        {
            "name": "DAMAGE",
            "description": "Applies instantaneous damage to one or more players, possibly killing the players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who will receive damage.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DAMAGER",
                    "description": "The player who will receive credit for the damage. A damager of null indicates no player will receive credit.",
                    "type": "PLAYER",
                    "default": "NULL"
                },
                {
                    "name": "AMOUNT",
                    "description": "The amount of damage to apply. This amount may be modified by buffs, debuffs, or armor.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "DECLARE MATCH DRAW",
            "description": "Instantly ends the match in a draw. This action has no effect in free-for-all modes.",
            "args": []
        },
        {
            "name": "DECLARE PLAYER VICTORY",
            "description": "Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.",
            "args": [{
                "name": "PLAYER",
                "description": "The winning player.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "DECLARE ROUND VICTORY",
            "description": "Declare a team as the current round winner. This only works in the control and elimination game modes",
            "args": [{
                "name": "ROUND WINNING TEAM",
                "description": "Round winning team",
                "type": "TEAM",
                "default": "TEAM"
            }]
        },
        {
            "name": "DECLARE TEAM VICTORY",
            "description": "Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.",
            "args": [{
                "name": "TEAM",
                "description": "The winning team.",
                "type": "TEAM",
                "default": "TEAM"
            }]
        },
        {
            "name": "DESTROY ALL EFFECTS",
            "description": "Destroys all effect entities created by create effect.",
            "args": []
        },
        {
            "name": "DESTROY ALL HUD TEXT",
            "description": "Destroys all hud text that was created by the create hud text action.",
            "args": []
        },
        {
            "name": "DESTROY ALL ICONS",
            "description": "Destroys all icon entities created by create icon.",
            "args": []
        },
        {
            "name": "DESTROY ALL IN-WORLD TEXT",
            "description": "Destroys all in-world text created by create in-world text.",
            "args": []
        },
        {
            "name": "DESTROY EFFECT",
            "description": "Destroys an effect entity that was created by create effect.",
            "args": [{
                "name": "ENTITY",
                "description": "Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "PLAYER",
                "default": "LAST CREATED ENTITY"
            }]
        },
        {
            "name": "DESTROY HUD TEXT",
            "description": "Destroys hud text that was created by create hud text.",
            "args": [{
                "name": "TEXT ID",
                "description": "Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST TEXT ID"
            }]
        },
        {
            "name": "DESTROY ICON",
            "description": "Destroys an icon entity that was created by create icon.",
            "args": [{
                "name": "ENTITY",
                "description": "Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "PLAYER",
                "default": "LAST CREATED ENTITY"
            }]
        },
        {
            "name": "DESTROY IN-WORLD TEXT",
            "description": "Destroys in-world text that was created by create in-world text.",
            "args": [{
                "name": "TEXT ID",
                "description": "Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST TEXT ID"
            }]
        },
        {
            "name": "DISABLE BUILT-IN GAME MODE ANNOUNCER",
            "description": "Disables game mode announcements from the announcer until reenabled or the match ends.",
            "args": []
        },
        {
            "name": "DISABLE BUILT-IN GAME MODE COMPLETION",
            "description": "Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.",
            "args": []
        },
        {
            "name": "DISABLE BUILT-IN GAME MODE MUSIC",
            "description": "Disables all game mode music until reenabled or the match ends.",
            "args": []
        },
        {
            "name": "DISABLE BUILT-IN GAME MODE RESPAWNING",
            "description": "Disables automatic respawning for one or more players, only allowing respawning by scripting commands.",
            "args": [{
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "DISABLE BUILT-IN GAME MODE SCORING",
            "description": "Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.",
            "args": []
        },
        {
            "name": "DISABLE DEATH SPECTATE ALL PLAYERS",
            "description": "Undoes the effect of the enable death spectate all players action for or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose default death spectate behavior is restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "DISABLE DEATH SPECTATE TARGET HUD",
            "description": "Undoes the effect of the enable death spectate target hud action for or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will revert to seeing their own hud while death spectating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "DISALLOW BUTTON",
            "description": "Disables a logical button for one or more players such that pressing it has no effect.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose button is being disabled.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "BUTTON",
                    "description": "The logical button that is being disabled.",
                    "type": "BUTTON",
                    "default": "PRIMARY FIRE"
                }
            ]
        },
        {
            "name": "ENABLE BUILT-IN GAME MODE ANNOUNCER",
            "description": "Undoes the effect of the disable built-in game mode announcer action.",
            "args": []
        },
        {
            "name": "ENABLE BUILT-IN GAME MODE COMPLETION",
            "description": "Undoes the effect of the disable built-in game mode completion action.",
            "args": []
        },
        {
            "name": "ENABLE BUILT-IN GAME MODE MUSIC",
            "description": "Undoes the effect of the disable built-in game mode music action.",
            "args": []
        },
        {
            "name": "ENABLE BUILT-IN GAME MODE RESPAWNING",
            "description": "Undoes the effect of the disable built-in game mode respawning action for one or more players.",
            "args": [{
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "ENABLE BUILT-IN GAME MODE SCORING",
            "description": "Undoes the effect of the disable built-in game mode scoring action.",
            "args": []
        },
        {
            "name": "ENABLE DEATH SPECTATE ALL PLAYERS",
            "description": "Allows one or more players to spectate all players when dead, as opposed to only allies.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will be allowed to spectate all players.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "ENABLE DEATH SPECTATE TARGET HUD",
            "description": "Causes one or more players to see their spectate target's hud instead of their own while death spectating.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will begin seeing their spectate targets hud while death spectating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "GO TO ASSEMBLE HEROES",
            "description": "Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.",
            "args": []
        },
        {
            "name": "HEAL",
            "description": "Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose health will be restored.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HEALER",
                    "description": "The player who will receive credit for the healing. A healer of null indicates no player will receive credit.",
                    "type": "PLAYER",
                    "default": "NULL"
                },
                {
                    "name": "AMOUNT",
                    "description": "The amount of healing to apply. This amount may be modified by buff or debuffs. Healing is capped by each player's max health.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "KILL",
            "description": "Instantly kills one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who will be killed.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "KILLER",
                    "description": "The player who will receive credit for the kill. A killer of null indicates no player will receive credit.",
                    "type": "PLAYER",
                    "default": "NULL"
                }
            ]
        },
        {
            "name": "LOOP",
            "description": "Restarts the action list from the beginning. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "args": []
        },
        {
            "name": "LOOP IF",
            "description": "Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "args": [{
                "name": "CONDITION",
                "description": "Specifies whether the loop will occur.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }]
        },
        {
            "name": "LOOP IF CONDITION IS FALSE",
            "description": "Restarts the action list from the beginning if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "args": []
        },
        {
            "name": "LOOP IF CONDITION IS TRUE",
            "description": "Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "args": []
        },
        {
            "name": "MODIFY GLOBAL VARIABLE",
            "description": "Modifies the value of a global variable, which is a variable that belongs to the game itself.",
            "args": [{
                    "name": "VARIABLE",
                    "description": "The global variable to modify.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "OPERATION",
                    "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                    "type": "OPERATION",
                    "default": "ADD"
                },
                {
                    "name": "VALUE",
                    "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "MODIFY PLAYER SCORE",
            "description": "Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose score will change.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "SCORE",
                    "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "MODIFY PLAYER VARIABLE",
            "description": "Modifies the value of a player variable, which is a variable that belongs to a specific player.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which of the player's variables to modify.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "OPERATION",
                    "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                    "type": "OPERATION",
                    "default": "ADD"
                },
                {
                    "name": "VALUE",
                    "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "MODIFY TEAM SCORE",
            "description": "Modifies the score of one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
            "args": [{
                    "name": "TEAM",
                    "description": "The team or teams whose score will be changed.",
                    "type": "TEAM",
                    "default": "TEAM"
                },
                {
                    "name": "SCORE",
                    "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "PAUSE MATCH TIME",
            "description": "Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.",
            "args": []
        },
        {
            "name": "PLAY EFFECT",
            "description": "Plays an effect at a position in the world. The lifetime of this effect is short, so it does not need to be updated or destroyed.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will be able to see the effect.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "TYPE",
                    "description": "The type of effect to be created.",
                    "type": "PLAY EFFECT",
                    "default": "GOOD EXPLOSION"
                },
                {
                    "name": "COLOR",
                    "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                    "type": "COLOR",
                    "default": "WHITE"
                },
                {
                    "name": "POSITION",
                    "description": "The effect's position. If this value is a player, then the effect will play at the player's position. Otherwise, the value is interpreted as a position in the world.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "RADIUS",
                    "description": "The effect's radius in meters.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "PRELOAD HERO",
            "description": "Preemptively loads the specified hero or heroes into memory using the skins of the specified player or players, available memory permitting. Useful whenever rapid hero changing is possible and the next hero is known.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HERO",
                    "description": "The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array, the heroes towards the beginning of the array are prioritized.",
                    "type": "HERO",
                    "default": "HERO"
                }
            ]
        },
        {
            "name": "PRESS BUTTON",
            "description": "Forces one or more players to press a button virtually for a single frame.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players for whom the virtual button input will be forced.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "BUTTON",
                    "description": "The button to be pressed.",
                    "type": "BUTTON",
                    "default": "PRIMARY FIRE"
                }
            ]
        },
        {
            "name": "RESET PLAYER HERO AVAILABILITY",
            "description": "Restores the list of heroes available to one or more players to the list specified by the game settings. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose hero list is being reset.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "RESPAWN",
            "description": "Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players to respawn.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "RESURRECT",
            "description": "Instantly resurrects one or more players at the location they died with no transition.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will be resurrected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "SET ABILITY 1 ENABLED",
            "description": "Enables or disables ability 1 for one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose access to ability 1 is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use ability 1. Expects a boolean value such as true, false, or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET ABILITY 2 ENABLED",
            "description": "Enables or disables ability 2 for one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose access to ability 2 is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true, false, or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET AIM SPEED",
            "description": "Sets the aim speed of one or more players to a percentage of their normal aim speed.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose aim speed will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "TURN SPEED PERCENT",
                    "description": "The percentage of normal aim speed to which the player or players will set their aim speed.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET DAMAGE DEALT",
            "description": "Sets the damage dealt of one or more players to a percentage of their raw damage dealt.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose damage dealt will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DAMAGE DEALT PERCENT",
                    "description": "The percentage of raw damage dealt to which the player or players will set their damage dealt.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET DAMAGE RECEIVED",
            "description": "Sets the damage received of one or more players to a percentage of their raw damage received.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose damage received will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DAMAGE RECEIVED PERCENT",
                    "description": "The percentage of raw damage received to which the player or players will set their damage received.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET FACING",
            "description": "Sets the facing of one or more players to the specified direction.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose facing will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DIRECTION",
                    "description": "The unit direction in which the player or players will face. This value is normalized internally.",
                    "type": "DIRECTION",
                    "default": "VECTOR"
                },
                {
                    "name": "RELATIVE",
                    "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                    "type": "RELATIVE",
                    "default": "TO WORLD"
                }
            ]
        },
        {
            "name": "SET GLOBAL VARIABLE",
            "description": "Stores a value into a global variable, which is a variable that belongs to the game itself.",
            "args": [{
                    "name": "VARIABLE",
                    "description": "Specifies which global variable to store the value into.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "VALUE",
                    "description": "The value that will be stored.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET GLOBAL VARIABLE AT INDEX",
            "description": "Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.",
            "args": [{
                    "name": "VARIABLE",
                    "description": "Specifies which global variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "INDEX",
                    "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "VALUE",
                    "description": "The value that will be stored into the array.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET GRAVITY",
            "description": "Sets the movement gravity for one or more players to a percentage regular movement gravity.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose movement gravity will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "GRAVITY PERCENT",
                    "description": "The percentage of regular movement gravity to which the player or players will set their personal movement gravity.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET HEALING DEALT",
            "description": "Sets the healing dealt of one or more players to a percentage of their raw healing dealt.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose healing dealt will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HEALING DEALT PERCENT",
                    "description": "",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET HEALING RECEIVED",
            "description": "Sets the healing received of one or more players to a percentage of their raw healing received.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose healing received will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HEALING RECEIVED PERCENT",
                    "description": "The percentage of raw healing received to which the player or players will set their healing received.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET INVISIBLE",
            "description": "Causes one or more players to become invisible to either all other players or just enemies.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who will become invisible.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "INVISIBLE TO",
                    "description": "Specifies for whom the player or players will be invisible.",
                    "type": "INVISIBLE TO",
                    "default": "ALL"
                }
            ]
        },
        {
            "name": "SET MATCH TIME",
            "description": "Sets the current match time (which is visible at the top of the screen). This can be used to shorten or extend the duration of a match or to change the duration of assemble heroes or setup.",
            "args": [{
                "name": "TIME",
                "description": "The match time in seconds.",
                "type": "NUMBER",
                "default": "NUMBER"
            }]
        },
        {
            "name": "SET MAX HEALTH",
            "description": "Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose max health will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HEALTH PERCENT",
                    "description": "The percentage of raw max health to which the player or players will set their max health.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET MOVE SPEED",
            "description": "Sets the move speed of one or more players to a percentage of their raw move speed.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose move speed will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "MOVE SPEED PERCENT",
                    "description": "The percentage of raw move speed to which the player or players will set their move speed.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET OBJECTIVE DESCRIPTION",
            "description": "Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will see the message.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "HEADER",
                    "description": "The message to be displayed.",
                    "type": "ANY",
                    "default": "STRING"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. The message will keep asking for and using new values from reevaluated inputs.",
                    "type": "OBJECTIVE DESCRIPTION REEVALUATION",
                    "default": "VISIBLE TO AND STRING"
                }
            ]
        },
        {
            "name": "SET PLAYER ALLOWED HEROES",
            "description": "Sets the list of heroes available to one or more players. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose hero list is being set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HERO",
                    "description": "The hero or heroes that will be available. If no heroes are provided, the action has no effect.",
                    "type": "HERO",
                    "default": "HERO"
                }
            ]
        },
        {
            "name": "SET PLAYER SCORE",
            "description": "Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose score will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "SCORE",
                    "description": "The score that will be set.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET PLAYER VARIABLE",
            "description": "Stores a value into a player variable, which is a variable that belongs to a specific player.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player whose variable will be set. If multiple players are provided, each of their variables will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which of the player's variables to store the value into.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "VALUE",
                    "description": "The value that will be stored.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET PLAYER VARIABLE AT INDEX",
            "description": "Finds or creates an array on a player variable, which is a variable that belongs to a specific player, then stores a value in the array at the specified index.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which player variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "INDEX",
                    "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "VALUE",
                    "description": "The value that will be stored into the array.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET PRIMARY FIRE ENABLED",
            "description": "Enables or disables primary fire for one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose access to primary fire is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use primary fire. Expects a boolean value such as true, false, or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET PROJECTILE GRAVITY",
            "description": "Sets the projectile gravity for one or more players to a percentage of regular projectile gravity.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose projectile gravity will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "PROJECTILE GRAVITY PERCENT",
                    "description": "The percentage of regular projectile gravity to which the player or players will set their personal projectile gravity.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET PROJECTILE SPEED",
            "description": "Iets the projectile speed for one or more players to a percentage of projectile speed.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose projectile speed will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "PROJECTILE SPEED PERCENT",
                    "description": "The percentage of regular projectile speed to which the player or players will set their personal projectile speed.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET RESPAWN MAX TIME",
            "description": "Sets the duration between death and respawn for one or more players. For players that are already dead when this action is executed, the change takes effect on their next death.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose respawn max time is being defined.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "TIME",
                    "description": "The duration between death and respawn in seconds.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET SECONDARY FIRE ENABLED",
            "description": "Enables or disables secondary fire for one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose access to secondary fire is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false, or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET SLOW MOTION",
            "description": "Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.",
            "args": [{
                "name": "SPEED PERCENT",
                "description": "The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }]
        },
        {
            "name": "SET STATUS",
            "description": "Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the clear status action.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players to whom the status will be applied.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ASSISTER",
                    "description": "Specifies a player to be awarded assist credit should the affected player or players be killed while the status is in effect. An assister of null indicates no player will receive credit.",
                    "type": "PLAYER",
                    "default": "NULL"
                },
                {
                    "name": "STATUS",
                    "description": "The status to be applied to the player or players. These behave similarly to statuses applied from hero abilities.",
                    "type": "STATUS",
                    "default": "HACKED"
                },
                {
                    "name": "DURATION",
                    "description": "The duration of the status in seconds. To have a status that lasts until a clear status action is executed, provide an arbitrarily long duration such as 9999.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET TEAM SCORE",
            "description": "Sets the score for one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
            "args": [{
                    "name": "TEAM",
                    "description": "The team or teams whose score will be set.",
                    "type": "TEAM",
                    "default": "TEAM"
                },
                {
                    "name": "SCORE",
                    "description": "The score that will be set.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET ULTIMATE ABILITY ENABLED",
            "description": "Enables or disables the ultimate ability of one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose access to their ultimate ability is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true, false, or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET ULTIMATE CHARGE",
            "description": "Sets the ultimate charge for one or more players as a percentage of maximum charge.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose ultimate charge will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "CHARGE PERCENT",
                    "description": "The percentage of maximum charge.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SKIP",
            "description": "Skips execution of a certain number of actions in the action list.",
            "args": [{
                "name": "NUMBER OF ACTIONS",
                "description": "The number of actions to skip, not including this action.",
                "type": "NUMBER",
                "default": "NUMBER"
            }]
        },
        {
            "name": "SKIP IF",
            "description": "Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
            "args": [{
                    "name": "CONDITION",
                    "description": "Specifies whether the skip occurs.",
                    "type": "BOOLEAN",
                    "default": "COMPARE"
                },
                {
                    "name": "NUMBER OF ACTIONS",
                    "description": "The number of actions to skip, not including this action.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SMALL MESSAGE",
            "description": "Displays a small message beneath the reticle that is visible to specific players.",
            "args": [{
                    "name": "VISIBLE TO",
                    "description": "One or more players who will see the message.",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "HEADER",
                    "description": "The message to be displayed.",
                    "type": "ANY",
                    "default": "STRING"
                }
            ]
        },
        {
            "name": "START ACCELERATING",
            "description": "Starts accelerating one or more players in a specified direction.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players that will begin accelerating.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DIRECTION",
                    "description": "The unit direction in which the acceleration will be applied. This value is normalized internally.",
                    "type": "DIRECTION",
                    "default": "VECTOR"
                },
                {
                    "name": "RATE",
                    "description": "The rate of acceleration in meters per second squared. This value may need to be quite high in order to overcome gravity and/or surface friction.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MAX SPEED",
                    "description": "The speed at which acceleration will stop for the player or players. It may not be possible to reach this speed due to gravity and/or surface friction.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START CAMERA",
            "description": "Places your camera at a location, facing a direction.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose cameras will be placed at the location.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "EYE POSITION",
                    "description": "The position of the camera. Reevaluates continuously.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "LOOK AT POSITION",
                    "description": "Where the camera looks at. Reevaluates continuously.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "BLEND SPEED",
                    "description": "How fast to blend the camera speed as positions change. 0 means do not blend at all, and just change positions instantly.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START DAMAGE MODIFICATION",
            "description": "Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage modification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.",
            "args": [{
                    "name": "RECEIVERS",
                    "description": "The player or players whose incoming damage will be modified (when attacked by the damagers).",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DAMAGERS",
                    "description": "The player or players whose outgoing damage will be modified (when attacking the receivers).",
                    "type": "PLAYER",
                    "default": "ALL PLAYERS"
                },
                {
                    "name": "DAMAGE PERCENT",
                    "description": "The percentage of damage that will apply to receivers when attacked by damagers.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                    "type": "DAMAGE MODIFICATION REEVALUATION",
                    "default": "RECEIVERS, DAMAGERS, AND DAMAGE PERCENT"
                }
            ]
        },
        {
            "name": "START DAMAGE OVER TIME",
            "description": "Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference to this dot, use the last damage over time id value.",
            "args": [{
                    "name": "PLAYER",
                    "description": "One or more players who will receive the damage over time.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DAMAGER",
                    "description": "The player who will receive credit for the damage. A damager of null indicates no player will receive credit.",
                    "type": "PLAYER",
                    "default": "NULL"
                },
                {
                    "name": "DURATION",
                    "description": "The duration of the damage over time in seconds. To have a dot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "DAMAGE PER SECOND",
                    "description": "The damage per second for the damage over time.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START FACING",
            "description": "Starts turning one or more players to face the specified direction.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who will start turning.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DIRECTION",
                    "description": "The unit direction in which the player or players will eventually face. This value is normalized internally.",
                    "type": "DIRECTION",
                    "default": "VECTOR"
                },
                {
                    "name": "TURN RATE",
                    "description": "The turn rate in degrees per second.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "RELATIVE",
                    "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                    "type": "RELATIVE",
                    "default": "TO WORLD"
                },
                {
                    "name": "REEVALUATION",
                    "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                    "type": "FACING REEVALUATION",
                    "default": "DIRECTION AND TURN RATE"
                }
            ]
        },
        {
            "name": "START FORCING PLAYER TO BE HERO",
            "description": "Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the stop forcing player to be hero action is executed.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who will be forced to be a specific hero.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HERO",
                    "description": "The hero that the player or players will be forced to be.",
                    "type": "HERO",
                    "default": "HERO"
                }
            ]
        },
        {
            "name": "START FORCING SPAWN ROOM",
            "description": "Forces a team to spawn in a particular spawn room, regardless of the spawn room normally used by the game mode. This action only has an effect in assault, hybrid, and payload maps.",
            "args": [{
                    "name": "TEAM",
                    "description": "The team whose spawn room will be forced.",
                    "type": "TEAM",
                    "default": "TEAM"
                },
                {
                    "name": "ROOM",
                    "description": "The number of the spawn room to be forced. 0 is the first spawn room, 1 the second, and 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START FORCING THROTTLE",
            "description": "Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose movement will be forced or limited.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "MIN FORWARD",
                    "description": "Sets the minimum run forward amount. 0 allows the player or players to stop while 1 forces full forward movement.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MAX FORWARD",
                    "description": "Sets the maximum run forward amount. 0 prevents the player or players from moving forward while 1 allows full forward movement.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MIN BACKWARD",
                    "description": "Sets the minimum run backward amount. 0 allows the player or players to stop while 1 forces full backward movement.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MAX BACKWARD",
                    "description": "Sets the maximum run backward amount. 0 prevents the player or players from moving backward while 1 allows full backward movement.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MIN SIDEWAYS",
                    "description": "Sets the minimum run sideways amount. 0 allows the player or players to stop while 1 forces full sideways movement.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MAX SIDEWAYS",
                    "description": "Sets the maximum run sideways amount. 0 prevents the player or players from moving SIDEWAYS while 1 allows full sideways movement.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START HEAL OVER TIME",
            "description": "Starts an instance of heal over time. This hot will persist for the specified duration or until stopped by script. To obtain a reference to this hot, use the last heal over time id value.",
            "args": [{
                    "name": "PLAYER",
                    "description": "One or more players who will receive the heal over time.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HEALER",
                    "description": "The player who will receive credit for the healing. A healer of null indicates no player will receive credit.",
                    "type": "PLAYER",
                    "default": "NULL"
                },
                {
                    "name": "DURATION",
                    "description": "The duration of the heal over time in seconds. To have a hot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "HEALING PER SECOND",
                    "description": "The healing per second for the heal over time.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START HOLDING BUTTON",
            "description": "Forces one or more players to hold a button virtually until stopped by the stop holding button action.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who are holding a button virtually.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "BUTTON",
                    "description": "The logical button that is being held virtually.",
                    "type": "BUTTON",
                    "default": "PRIMARY FIRE"
                }
            ]
        },
        {
            "name": "START TRANSFORMING THROTTLE",
            "description": "Starts transforming (scaling and rotating) the throttle (directional input control) of a player or players. Cancels any existing start transforming throttle behavior.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players whose throttle will be transformed.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "X AXIS SCALAR",
                    "description": "The player or players will have their throttle X axis (left to right) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "Y AXIS SCALAR",
                    "description": "The player or players will have their throttle Y axis (front to back) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "RELATIVE DIRECTION",
                    "description": "After the axis scalars are applied, the player or players will have their throttle transformed so that it is relative to this unit direction vector. For example, to make the throttle camera relative, provide the direction that the camera is facing. This value is evaluated continuously (meaning it updates every frame) and normalized internally.",
                    "type": "VECTOR",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "STOP ACCELERATING",
            "description": "Stops the acceleration started by the start accelerating action for one or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will stop accelerating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP ALL DAMAGE MODIFICATIONS",
            "description": "Stops all damage modifications that were started using the start damage modification action.",
            "args": []
        },
        {
            "name": "STOP ALL DAMAGE OVER TIME",
            "description": "Stops all damage over time started by start damage over time for one or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose scripted damage over time will stop.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP ALL HEAL OVER TIME",
            "description": "Stops all heal over time started by start heal over time for one or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose scripted heal over time will stop.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP CAMERA",
            "description": "None",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose cameras will be put back to the default view.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP CHASING GLOBAL VARIABLE",
            "description": "Stops an in-progress chase of a global variable, leaving it at its current value.",
            "args": [{
                "name": "VARIABLE",
                "description": "Specifies which global variable to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }]
        },
        {
            "name": "STOP CHASING PLAYER VARIABLE",
            "description": "Stops an in-progress chase of a player variable, leaving it at its current value.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player whose variable will stop changing. If multiple players are provided, each of their variables will stop changing.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which of the player's variables to stop modifying.",
                    "type": "VARIABLE",
                    "default": "A"
                }
            ]
        },
        {
            "name": "STOP DAMAGE MODIFICATION",
            "description": "Stops a damage modification that was started by the start damage modification action.",
            "args": [{
                "name": "DAMAGE MODIFICATION",
                "description": "Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE MODIFICATION ID"
            }]
        },
        {
            "name": "STOP DAMAGE OVER TIME",
            "description": "Stops an instance of damage over time started by the start damage over time action.",
            "args": [{
                "name": "DAMAGE OVER TIME ID",
                "description": "Specifies which damage over time instance to stop. This id may be last damage over time id or a variable into which last damage over time id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE OVER TIME ID"
            }]
        },
        {
            "name": "STOP FACING",
            "description": "Stops the turning started by the start facing action for one or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will stop turning.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP FORCING PLAYER TO BE HERO",
            "description": "Stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players who will no longer be forced to be a specific hero.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP FORCING SPAWN ROOM",
            "description": "Undoes the effect of the start forcing spawn room action for the specified team.",
            "args": [{
                "name": "TEAM",
                "description": "The team that will resume using their normal spawn room.",
                "type": "TEAM",
                "default": "TEAM"
            }]
        },
        {
            "name": "STOP FORCING THROTTLE",
            "description": "Undoes the effect of the start forcing throttle action for one or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose movement input will be restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "STOP HEAL OVER TIME",
            "description": "Stops an instance of heal over time started by the start heal over time action.",
            "args": [{
                "name": "HEAL OVER TIME ID",
                "description": "Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.",
                "type": "NUMBER",
                "default": "PLAYER VARIABLE"
            }]
        },
        {
            "name": "STOP HOLDING BUTTON",
            "description": "Undoes the effect of the start holding button action for one or more players.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players who are no longer holding a button virtually.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "BUTTON",
                    "description": "The logical button that is no longer being held virtually.",
                    "type": "BUTTON",
                    "default": "PRIMARY FIRE"
                }
            ]
        },
        {
            "name": "STOP TRANSFORMING THROTTLE",
            "description": "Stops the throttle transform started by start transforming throttle for one or more players.",
            "args": [{
                "name": "PLAYER",
                "description": "The player or players whose throttle will stop being transformed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }]
        },
        {
            "name": "TELEPORT",
            "description": "Teleports one or more players to the specified position.",
            "args": [{
                    "name": "PLAYER",
                    "description": "The player or players to teleport.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "POSITION",
                    "description": "The position to which the player or players will teleport. If a player is provided, the position of the player is used.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "UNPAUSE MATCH TIME",
            "description": "Unpauses the match time.",
            "args": []
        },
        {
            "name": "WAIT",
            "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
            "args": [{
                    "name": "TIME",
                    "description": "The duration of the pause.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "WAIT BEHAVIOR",
                    "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart.",
                    "type": "WAIT BEHAVIOR",
                    "default": "IGNORE CONDITION"
                }
            ]
        }
    ];