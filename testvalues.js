testactions = [
        {
            "name": "ABORT",
            "description": "Stops execution of the action list.",
            "args": []
        },
        {
            "name": "ABORT IF",
            "description": "Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
            "args": [
                {
                    "name": "CONDITION",
                    "description": "Specifies whether the execution is stopped.",
                    "type": "BOOLEAN",
                    "default": "COMPARE"
                }
            ]
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
            "args": [
                {
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
            "args": [
                {
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
                    "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                    "type": "MOTION",
                    "default": "CANCEL CONTRARY MOTION"
                }
            ]
        },
        {
            "name": "BIG MESSAGE",
            "description": "Displays a large message above the reticle that is visible to specific players.",
            "args": [
                {
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
            "description": "Gradually modifies the value of a global variable at a specific rate. Global variable is a variable that belongs to the game itself.)",
            "args": [
                {
                    "name": "VARIABLE",
                    "description": "Specifies which global variable to modify gradually.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "DESTINATION",
                    "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.",
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
            "description": "Gradually modifies the value of a global variable over time. (a global variable is a variable that belongs to the game itself.)",
            "args": [
                {
                    "name": "VARIABLE",
                    "description": "Specifies which global variable to modify gradually.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "DESTINATION",
                    "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.",
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
            "description": "Gradually modifies the value of a player variable at a specific rate. (a player variable is a variable that belongs to a specific player.)",
            "args": [
                {
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
                    "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.",
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
            "description": "Gradually modifies the value of a player variable over time. (a player variable is a variable that belongs to a specific player.)",
            "args": [
                {
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
                    "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.",
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
                    "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue. Depending on whether the team is hostile to the viewer. Does not apply to sound effects.",
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
            "description": "Reates hud text visible to specific players at a specific location on screen. This text will persist until destroyed. To obtain a eference to this text, use the last text id value. This action will fail if do many text elements have been created.",
            "args": [
                {
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
            "args": [
                {
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
                    "name": "SHOW WHEN OFFSCREEN",
                    "description": "Should this icon appear even when it is behind you?",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "CREATE IN-WORLD TEXT",
            "description": "Creates in-world text visible to specific players at a specific position the world. This text will persist until destroyed. To obtain a eference to this text, use the last text id value. This action will fail if do many text elements have been created.",
            "args": [
                {
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
                    "description": "The texts position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "SCALE",
                    "description": "The texts scale.",
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
            "args": [
                {
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
                    "description": "The amount of damage to apply. This amount may be modified by buffs, debuffs. Or armor.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "DECLARE MATCH DRAW",
            "description": "Qstantly ends the match in a draw. This action has no effect in free- or-all modes.",
            "args": []
        },
        {
            "name": "DECLARE PLAYER VICTORY",
            "description": "Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The winning player.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "DECLARE ROUND VICTORY",
            "description": "Declare a team as the current round winner. This only works in the ontrol and elimination game modes",
            "args": [
                {
                    "name": "ROUND WINNING TEAM",
                    "description": "Round winning team",
                    "type": "TEAM",
                    "default": "TEAM"
                }
            ]
        },
        {
            "name": "DECLARE TEAM VICTORY",
            "description": "Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.",
            "args": [
                {
                    "name": "TEAM",
                    "description": "The winning team.",
                    "type": "TEAM",
                    "default": "TEAM"
                }
            ]
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
            "args": [
                {
                    "name": "ENTITY",
                    "description": "Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                    "type": "PLAYER",
                    "default": "LAST CREATED ENTITY"
                }
            ]
        },
        {
            "name": "DESTROY HUD TEXT",
            "description": "Destroys hud text that was created by create hud text.",
            "args": [
                {
                    "name": "TEXT ID",
                    "description": "Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                    "type": "NUMBER",
                    "default": "LAST TEXT ID"
                }
            ]
        },
        {
            "name": "DESTROY ICON",
            "description": "Destroys an icon entity that was created by create icon.",
            "args": [
                {
                    "name": "ENTITY",
                    "description": "Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                    "type": "PLAYER",
                    "default": "LAST CREATED ENTITY"
                }
            ]
        },
        {
            "name": "DESTROY IN-WORLD TEXT",
            "description": "Destroys in-world text that was created by create in-world text.",
            "args": [
                {
                    "name": "TEXT ID",
                    "description": "Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                    "type": "NUMBER",
                    "default": "LAST TEXT ID"
                }
            ]
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
            "args": [
                {
                    "name": "PLAYERS",
                    "description": "The player or players whose respawning is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "DISABLE BUILT-IN GAME MODE SCORING",
            "description": "Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.",
            "args": []
        },
        {
            "name": "DISABLE DEATH SPECTATE ALL PLAYERS",
            "description": "Undoes the effect of the enable death spectate all players action for or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose default death spectate behavior is restored.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "DISABLE DEATH SPECTATE TARGET HUD",
            "description": "Undoes the effect of the enable death spectate target hud action for or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will revert to seeing their own hud while death spectating.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "DISALLOW BUTTON",
            "description": "Disables a logical button for one or more players such that pressing it has no effect.",
            "args": [
                {
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
            "args": [
                {
                    "name": "PLAYERS",
                    "description": "The player or players whose respawning is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "ENABLE BUILT-IN GAME MODE SCORING",
            "description": "Undoes the effect of the disable built-in game mode scoring action.",
            "args": []
        },
        {
            "name": "ENABLE DEATH SPECTATE ALL PLAYERS",
            "description": "Allows one or more players to spectate all players when dead, as opposed to only allies.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will be allowed to spectate all players.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "ENABLE DEATH SPECTATE TARGET HUD",
            "description": "'auses one or more players to see their spectate target's hud instead their own while death spectating.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will begin seeing their spectate targets hud while death spectating.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "GO TO ASSEMBLE HEROES",
            "description": "Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.",
            "args": []
        },
        {
            "name": "HEAL",
            "description": "Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.",
            "args": [
                {
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
                    "description": "The amount of healing to apply. This amount may be modified by bufi or debuffs. Healing is capped by each player's max health.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "KILL",
            "description": "Instantly kills one or more players.",
            "args": [
                {
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
            "description": "Restarts the action list from the beginning. To prevent an infinite .oop, a wait action must execute between the start of the action list this action.",
            "args": []
        },
        {
            "name": "LOOP IF",
            "description": "Restarts the action list from the beginning if this action's condition valuates to true. If it does not, execution continues with the next ction. To prevent an infinite loop, a wait action must execute etween the start of the action list and this action.",
            "args": [
                {
                    "name": "CONDITION",
                    "description": "Specifies whether the loop will occur.",
                    "type": "BOOLEAN",
                    "default": "COMPARE"
                }
            ]
        },
        {
            "name": "LOOP IF CONDITION IS FALSE",
            "description": "Restarts the action list from the beginning if at least one condition the condition list is false. If all conditions are true, execution",
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
            "args": [
                {
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
                    "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands. With the other being the variable's existing value. For array operations, this is the value to",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "MODIFY PLAYER SCORE",
            "description": "Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose score will change.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "SCORE",
                    "description": "The amount the score will increase or decrease. If positive, the score wu increase. If negative. The score will decrease.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "MODIFY PLAYER VARIABLE",
            "description": "Modifies the value of a player variable, which is a variable that belongs to a specific player.",
            "args": [
                {
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
                    "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands. With the other being the variable's existing value. For array operations, this is the value to",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "MODIFY TEAM SCORE",
            "description": "Modifies the score of one or both teams. This action has no effect in ree-for-all modes or modes without a team score.",
            "args": [
                {
                    "name": "TEAM",
                    "description": "The team or teams whose score will be changed.",
                    "type": "TEAM",
                    "default": "TEAM"
                },
                {
                    "name": "SCORE",
                    "description": "The amount the score will increase or decrease. If positive, the score wu increase. If negative. The score will decrease.",
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
            "description": "Plays an effect at a position in the world. The lifetime of this effect is hort, so it does not need to be updated or destroyed.",
            "args": [
                {
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
                    "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue. Depending on whether the team is hostile to the viewer.",
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
            "description": "Reemptively loads the specified hero or heroes into memory using he skins of the specified player or players, available memory ermitting. Useful whenever rapid hero changing is possible and the 'ext hero is known.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HERO",
                    "description": "The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array. The heroes towards the beginning of the array are prioritized.",
                    "type": "HERO",
                    "default": "HERO"
                }
            ]
        },
        {
            "name": "PRESS BUTTON",
            "description": "Forces one or more players to press a button virtually for a single frame.",
            "args": [
                {
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
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose hero list is being reset.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "RESPAWN",
            "description": "Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players to respawn.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "RESURRECT",
            "description": "Instantly resurrects one or more players at the location they died with no transition.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will be resurrected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "SET ABILITY 1 ENABLED",
            "description": "Enables or disables ability 1 for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose access to ability 1 is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use ability 1 . Expects a boolean value such as true. False. Or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET ABILITY 2 ENABLED",
            "description": "Enables or disables ability 2 for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose access to ability 2 is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true. False. Or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET AIM SPEED",
            "description": "Sets the aim speed of one or more players to a percentage of their normal aim speed.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose aim speed will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "TURN SPEED PERCENT",
                    "description": "The percentage of normal aim speed to which the player or players wu set their aim speed.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET DAMAGE DEALT",
            "description": "Sets the damage dealt of one or more players to a percentage of their raw damage dealt.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose damage dealt will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "DAMAGE DEALT PERCENT",
                    "description": "The percentage of raw damage dealt to which the player or players wu set their damage dealt.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET DAMAGE RECEIVED",
            "description": "Sets the damage received of one or more players to a percentage of their raw damage received.",
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
                    "name": "VARIABLE",
                    "description": "Specifies which global variable's value is the array to modify. If the variable's value is not an array. Then its value becomes an empty array.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "INDEX",
                    "description": "The index of the array to modify. If the index is beyond the end of the array. The array is extended with new elements given a value of zero.",
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
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose movement gravity will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "GRAVITY PERCENT",
                    "description": "The percentage of regular movement gravity to which the player 0' players will set their personal movement gravity.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET HEALING DEALT",
            "description": "Sets the healing dealt of one or more players to a percentage of their raw healing dealt.",
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
                    "name": "TIME",
                    "description": "The match time in seconds.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET MAX HEALTH",
            "description": "Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose max health will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HEALTH PERCENT",
                    "description": "The percentage of raw max health to which the player or players wu set their max health.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET MOVE SPEED",
            "description": "Sets the move speed of one or more players to a percentage of their raw move speed.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose move speed will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "MOVE SPEED PERCENT",
                    "description": "The percentage of raw move speed to which the player or players wu set their move speed.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET OBJECTIVE DESCRIPTION",
            "description": "Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.",
            "args": [
                {
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
            "description": "Iets the list of heroes available to one or more players. If a player's iirrent hero becomes unavailable, the player is forced to choose a )ifferent hero and respawn at an appropriate spawn location.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose hero list is being set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "HERO",
                    "description": "The hero or heroes that will be available. If no heroes are provided. The action has no effect.",
                    "type": "HERO",
                    "default": "HERO"
                }
            ]
        },
        {
            "name": "SET PLAYER SCORE",
            "description": "Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "VARIABLE",
                    "description": "Specifies which player variable's value is the array to modify. If the variable's value is not an array. Then its value becomes an empty array.",
                    "type": "VARIABLE",
                    "default": "A"
                },
                {
                    "name": "INDEX",
                    "description": "The index of the array to modify. If the index is beyond the end of the array. The array is extended with new elements given a value of zero.",
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose access to secondary fire is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false. Or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET SECONDARY FIRE ENABLED",
            "description": "Enables or disables secondary fire for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose access to secondary fire is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false. Or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET SLOW MOTION",
            "description": "Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.",
            "args": [
                {
                    "name": "SPEED PERCENT",
                    "description": "The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET STATUS",
            "description": "Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the clear status action.",
            "args": [
                {
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
                    "description": "The duration of the status in seconds. To have a status that lasts until a clear status action is executed. Provide an arbitrarily long duration such as 9999.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SET TEAM SCORE",
            "description": "Sets the score for one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
            "args": [
                {
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
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose access to their ultimate ability is affected.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "ENABLED",
                    "description": "Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true. False, or compare.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "SET ULTIMATE CHARGE",
            "description": "Sets the ultimate charge for one or more players as a percentage of iaximum charge.",
            "args": [
                {
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
            "args": [
                {
                    "name": "NUMBER OF ACTIONS",
                    "description": "The number of actions to skip, not including this action.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "SKIP IF",
            "description": "Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "description": "Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage aodification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.",
            "args": [
                {
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
            "description": "Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference ro this dot, use the last damage over time id value.",
            "args": [
                {
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
                    "description": "The duration of the damage over time in seconds. To have a dot thai lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
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
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will start iurning.",
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
                }
            ]
        },
        {
            "name": "START FORCING PLAYER TO BE HERO",
            "description": "Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the top forcing player to be hero action is executed.",
            "args": [
                {
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
            "args": [
                {
                    "name": "TEAM",
                    "description": "The team whose spawn room will be forced.",
                    "type": "TEAM",
                    "default": "TEAM"
                },
                {
                    "name": "ROOM",
                    "description": "The number of the spawn room to be forced. O is the first spawn room, 1 the second. And 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "START FORCING THROTTLE",
            "description": "Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.",
            "args": [
                {
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
            "args": [
                {
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
            "args": [
                {
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
            "name": "STOP ACCELERATING",
            "description": "Stops the acceleration started by the start accelerating action for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will stop accelerating.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP ALL DAMAGE MODIFICATIONS",
            "description": "Stops all damage modifications that were started using the start damage modification action.",
            "args": []
        },
        {
            "name": "STOP ALL DAMAGE OVER TIME",
            "description": "Stops all damage over time started by start damage over time for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose scripted damage over time will stop.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP ALL HEAL OVER TIME",
            "description": "Stops all heal over time started by start heal over time for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose scripted heal over time will stop.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP CAMERA",
            "description": "None",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose cameras will be put back to the default view.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP CHASING GLOBAL VARIABLE",
            "description": "Stops an in-progress chase of a global variable, leaving it at its current value.",
            "args": [
                {
                    "name": "VARIABLE",
                    "description": "Specifies which global variable to stop modifying.",
                    "type": "VARIABLE",
                    "default": "A"
                }
            ]
        },
        {
            "name": "STOP CHASING PLAYER VARIABLE",
            "description": "Stops an in-progress chase of a player variable, leaving it at its current value.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose variable will stop changing. If multiple players ari provided, each of their variables will stop changing.",
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
            "args": [
                {
                    "name": "DAMAGE MODIFICATION",
                    "description": "Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.",
                    "type": "NUMBER",
                    "default": "LAST DAMAGE MODIFICATION ID"
                }
            ]
        },
        {
            "name": "STOP DAMAGE OVER TIME",
            "description": "Stops an instance of damage over time started by the start damage over time action.",
            "args": [
                {
                    "name": "DAMAGE OVER TIME ID",
                    "description": "Specifies which damage over time instance to stop. This id may be lasi damage over time id or a variable into which last damage over time id was earlier stored.",
                    "type": "NUMBER",
                    "default": "LAST DAMAGE OVER TIME ID"
                }
            ]
        },
        {
            "name": "STOP FACING",
            "description": "Stops the turning started by the start facing action for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will stop wrning.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP FORCING PLAYER TO BE HERO",
            "description": "- stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players who will no longer be forced to be a specific hero.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP FORCING SPAWN ROOM",
            "description": "Undoes the effect of the start forcing spawn room action for the specified team.",
            "args": [
                {
                    "name": "TEAM",
                    "description": "The team that will resume using their normal spawn room.",
                    "type": "TEAM",
                    "default": "TEAM"
                }
            ]
        },
        {
            "name": "STOP FORCING THROTTLE",
            "description": "Undoes the effect of the start forcing throttle action for one or more players.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player or players whose movement input will be restored.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "STOP HEAL OVER TIME",
            "description": "Stops an instance of heal over time started by the start heal over time action.",
            "args": [
                {
                    "name": "HEAL OVER TIME ID",
                    "description": "Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.",
                    "type": "NUMBER",
                    "default": "PLAYER VARIABLE"
                }
            ]
        },
        {
            "name": "STOP HOLDING BUTTON",
            "description": "Undoes the effect of the start holding button action for one or more players.",
            "args": [
                {
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
            "name": "TELEPORT",
            "description": "Teleports one or more players to the specified position.",
            "args": [
                {
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
            "description": "Pauses the execution of the action list. Unless the wait is interrupted, he remainder of the actions will execute after the pause.",
            "args": [
                {
                    "name": "TIME",
                    "description": "The duration of the pause.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "WAIT BEHAVIOR",
                    "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored. The wait will not be interrupted. Otherwise. The condition list will determine if and when the action list will abort or restart.",
                    "type": "WAIT BEHAVIOR",
                    "default": "IGNORE CONDITION"
                }
            ]
        }
];

testvalues = [
        {
            "name": "ABSOLUTE VALUE",
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
            "name": "ADD",
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
            "name": "ALL DEAD PLAYERS",
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
            "name": "ALL HEROES",
            "description": "The array of all heroes in overwatch.",
            "args": []
        },
        {
            "name": "ALL LIVING PLAYERS",
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
            "name": "ALL PLAYERS",
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
            "name": "ALL PLAYERS NOT ON OBJECTIVE",
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
            "name": "ALL PLAYERS ON OBJECTIVE",
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
            "name": "ALLOWED HEROES",
            "description": "The array of heroes from which the specified player is currently allowed to select.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose auowed heroes to acquire.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "ALTITUDE OF",
            "description": "The player's current height in meters above a surface. Results in o whenever the player is on a surface.",
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
            "name": "AND",
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
            "name": "ANGLE DIFFERENCE",
            "description": "The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.",
            "args": [
                {
                    "name": "ANGLE",
                    "description": "One of the two angles between which to measure the resulting anole.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "ANGLE",
                    "description": "One of the two angles between which to measure the resulting anole.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "APPEND TO ARRAY",
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
                    "description": "The value to append to the end of the array. If this value is itself an array. Each element is appended.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "ARRAY SLICE",
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
                    "description": "The number of elements in the resulting array. The resulting array wu contain fewer elements if the specified range exceeds the bounds of the array.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "ATTACKER",
            "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
            "args": []
        },
        {
            "name": "BACKWARD",
            "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
            "args": []
        },
        {
            "name": "CLOSEST PLAYER TO",
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
            "name": "COMPARE",
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
            "name": "CONTROL MODE SCORING PERCENTAGE",
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
            "name": "CONTROL MODE SCORING TEAM",
            "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
            "args": []
        },
        {
            "name": "COSINE FROM DEGREES",
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
            "name": "COSINE FROM RADIANS",
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
            "name": "COUNT OF",
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
            "name": "CROSS PRODUCT",
            "description": "The cross product of the specified values. (left cross up equals forward.)",
            "args": [
                {
                    "name": "VALUE",
                    "description": "The left-hand-side vector operand of the cross product.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "VALUE",
                    "description": "The right-hand-side vector operand of the cross product.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "CURRENT ARRAY ELEMENT",
            "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
            "args": []
        },
        {
            "name": "DIRECTION FROM ANGLES",
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
            "name": "DIRECTION TOWARDS",
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
            "name": "DISTANCE BETWEEN",
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
            "name": "DIVIDE",
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
            "name": "DOT PRODUCT",
            "description": "The dot product of the specified values.",
            "args": [
                {
                    "name": "VALUE",
                    "description": "One of mo vector operands of the dot product.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "VALUE",
                    "description": "One of mo vector operands of the dot product.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "DOWN",
            "description": "Shorthand for the directional vector(0, -1 , 0), which points downward.",
            "args": []
        },
        {
            "name": "EMPTY ARRAY",
            "description": "An array with no elements.",
            "args": []
        },
        {
            "name": "ENTITY EXISTS",
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
            "name": "EVENT DAMAGE",
            "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
            "args": []
        },
        {
            "name": "EVENT PLAYER",
            "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
            "args": []
        },
        {
            "name": "EVENT WAS CRITICAL HIT",
            "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
            "args": []
        },
        {
            "name": "EYE POSITION",
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
            "name": "FACING DIRECTION OF",
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
            "name": "FALSE",
            "description": "The boolean value of false.",
            "args": []
        },
        {
            "name": "FARTHEST PLAYER FROM",
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
            "name": "FILTERED ARRAY",
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
            "name": "FIRST OF",
            "description": "The value at the start of the specified array. Results in o if the specified array is empty.",
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
            "name": "FLAG POSITION",
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
            "name": "FORWARD",
            "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
            "args": []
        },
        {
            "name": "GLOBAL VARIABLE",
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
            "name": "HAS SPAWNED",
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
            "name": "HAS STATUS",
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
            "name": "HEALTH",
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
            "name": "HEALTH PERCENT",
            "description": "The current health of a player as a percentage of their max health, including armor and shields.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose health percentage to acquire.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "HERO",
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
            "name": "HERO ICON STRING",
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
            "name": "HERO OF",
            "description": "The current hero of a player.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose hero ro acquire.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                }
            ]
        },
        {
            "name": "HORIZONTAL ANGLE FROM DIRECTION",
            "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
            "args": [
                {
                    "name": "DIRECTION",
                    "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                    "type": "DIRECTION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "HORIZONTAL ANGLE TOWARDS",
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
            "name": "HORIZONTAL FACING ANGLE OF",
            "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 1 80).",
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
            "name": "HORIZONTAL SPEED OF",
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
            "name": "INDEX OF ARRAY VALUE",
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
            "name": "IS ALIVE",
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
            "name": "IS ASSEMBLING HEROES",
            "description": "Whether the match is currently in its assemble heroes phase.",
            "args": []
        },
        {
            "name": "IS BETWEEN ROUNDS",
            "description": "Whether the match is between rounds.",
            "args": []
        },
        {
            "name": "IS BUTTON HELD",
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
            "name": "IS COMMUNICATING",
            "description": "Whether a player is using a specific communication type (such as emoting, using a voice line, etc. ).",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose communication status to check.",
                    "type": "PLAYER",
                    "default": "EVENT PLAYER"
                },
                {
                    "name": "TYPE",
                    "description": "The type of communication to consider. The duration of emotes is exact. The duration of voice lines is assumed to be 4 seconds. And all other durations are assumed to be 2 seconds.",
                    "type": "COMMUNICATE",
                    "default": "VOICE LINE UP"
                }
            ]
        },
        {
            "name": "IS COMMUNICATING ANY",
            "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc. ).",
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
            "name": "IS COMMUNICATING ANY EMOTE",
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
            "name": "IS COMMUNICATING ANY VOICE LINE",
            "description": "Whether a player is using a voice line. (the duration of voice lines is assumed to be 4 seconds.)",
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
            "name": "IS CONTROL MODE POINT LOCKED",
            "description": "Whether the point is locked in control mode.",
            "args": []
        },
        {
            "name": "IS CROUCHING",
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
            "name": "IS CTF MODE IN SUDDEN DEATH",
            "description": "Whether the current game of capture the flag is in sudden death.",
            "args": []
        },
        {
            "name": "IS DEAD",
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
            "name": "IS FIRING PRIMARY",
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
            "name": "IS FIRING SECONDARY",
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
            "name": "IS FLAG AT BASE",
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
            "name": "IS FLAG BEING CARRIED",
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
            "name": "IS GAME IN PROGRESS",
            "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
            "args": []
        },
        {
            "name": "IS HERO BEING PLAYED",
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
            "name": "IS IN AIR",
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
            "name": "IS IN LINE OF SIGHT",
            "description": "Whether two positions have line of sight with each other.",
            "args": [
                {
                    "name": "START POS",
                    "description": "The start position for the lineof-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                    "type": "POSITION",
                    "default": "VECTOR"
                },
                {
                    "name": "END POS",
                    "description": "The end position for the line-of-sight check. If a player is provided. A position 2 meters above the player's feet is used.",
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
            "name": "IS IN SETUP",
            "description": "Whether the match is currently in its setup phase.",
            "args": []
        },
        {
            "name": "IS IN SPAWN ROOM",
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
            "name": "IS IN VIEW ANGLE",
            "description": "Whether a location is within view of a player.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose view to use for n-le check.",
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
            "name": "IS MATCH COMPLETE",
            "description": "Whether the match has finished.",
            "args": []
        },
        {
            "name": "IS MOVING",
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
            "name": "IS OBJECTIVE COMPLETE",
            "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
            "args": [
                {
                    "name": "NUMBER",
                    "description": "The index of the objective to consider. Starting at o and counting up. Each control point. Payload checkpoint, and payload destination has its own index.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "IS ON GROUND",
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
            "name": "IS ON OBJECTIVE",
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
            "name": "IS ON WALL",
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
            "name": "IS PORTRAIT ON FIRE",
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
            "name": "IS STANDING",
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
            "name": "IS TEAM ON DEFENSE",
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
            "name": "IS TEAM ON OFFENSE",
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
            "name": "IS TRUE FOR ALL",
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
            "name": "IS TRUE FOR ANY",
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
            "name": "IS USING ABILITY 1",
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
            "name": "IS USING ABILITY 2",
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
            "name": "IS USING ULTIMATE",
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
            "name": "IS WAITING FOR PLAYERS",
            "description": "Whether the match is waiting for players to join before starting.",
            "args": []
        },
        {
            "name": "LAST CREATED ENTITY",
            "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
            "args": []
        },
        {
            "name": "LAST DAMAGE MODIFICATION ID",
            "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
            "args": []
        },
        {
            "name": "LAST DAMAGE OVER TIME ID",
            "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
            "args": []
        },
        {
            "name": "LAST HEAL OVER TIME ID",
            "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
            "args": []
        },
        {
            "name": "LAST OF",
            "description": "The value at the end of the specified array. Results in o if the specified array is empty.",
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
            "name": "LAST TEXT ID",
            "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in- world text action.",
            "args": []
        },
        {
            "name": "LEFT",
            "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
            "args": []
        },
        {
            "name": "LOCAL VECTOR OF",
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
            "name": "MATCH ROUND",
            "description": "The current round of the match, counting up from 1",
            "args": []
        },
        {
            "name": "MATCH TIME",
            "description": "The amount of time in seconds remaining in the current game mode phase.",
            "args": []
        },
        {
            "name": "MAX",
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
            "name": "MAX HEALTH",
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
            "name": "MIN",
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
            "name": "MODULO",
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
            "name": "MULTIPLY",
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
            "name": "NEAREST WALKABLE POSITION",
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
            "name": "NORMALIZE",
            "description": "The unit-length normalization of a vector.",
            "args": [
                {
                    "name": "VECTOR",
                    "description": "The vector to normalize.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "NOT",
            "description": "Whether the input is false (or equivalent to false).",
            "args": [
                {
                    "name": "VALUE",
                    "description": "When this input is false (or equivalent to false). Then the not value is true. Otherwise. The not value is false.",
                    "type": "BOOLEAN",
                    "default": "TRUE"
                }
            ]
        },
        {
            "name": "NULL",
            "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
            "args": []
        },
        {
            "name": "NUMBER",
            "description": "A real number constant.",
            "args": [
                {
                    "name": "NUMBER",
                    "description": "",
                    "type": "NUMBER CONSTANT",
                    "default": "0.00"
                }
            ]
        },
        {
            "name": "NUMBER OF DEAD PLAYERS",
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
            "name": "NUMBER OF DEATHS",
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
            "name": "NUMBER OF ELIMINATIONS",
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
            "name": "NUMBER OF FINAL BLOWS",
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
            "name": "NUMBER OF HEROES",
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
            "name": "NUMBER OF LIVING PLAYERS",
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
            "name": "NUMBER OF PLAYERS",
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
            "name": "NUMBER OF PLAYERS ON OBJECTIVE",
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
            "name": "OBJECTIVE INDEX",
            "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
            "args": []
        },
        {
            "name": "OBJECTIVE POSITION",
            "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
            "args": [
                {
                    "name": "NUMBER",
                    "description": "The index of the objective to consider. Starting at 0 and counting up. Each control point. Payload checkpoint, and payload destination has its own index.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "OPPOSITE TEAM OF",
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
            "name": "OR",
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
            "name": "PAYLOAD POSITION",
            "description": "The position in the world of the active payload.",
            "args": []
        },
        {
            "name": "PAYLOAD PROGRESS PERCENTAGE",
            "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
            "args": []
        },
        {
            "name": "PLAYER CARRYING FLAG",
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
            "name": "PLAYER CLOSEST TO RETICLE",
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
            "name": "PLAYER VARIABLE",
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
            "name": "PLAYERS IN SLOT",
            "description": "The player or array of players who occupy a specific slot in the game.",
            "args": [
                {
                    "name": "SLOT",
                    "description": "The slot number from which to acquire a player or players. In team games. Each team has slots o through 5. In free-for-au games. Slots are numbered o through 1 1.",
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
            "name": "PLAYERS IN VIEW ANGLE",
            "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.",
            "args": [
                {
                    "name": "PLAYER",
                    "description": "The player whose view to use for ne check.",
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
            "name": "PLAYERS ON HERO",
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
            "name": "PLAYERS WITHIN RADIUS",
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
            "name": "POINT CAPTURE PERCENTAGE",
            "description": "The current progress towards capture for the active control point (expressed as a percentage).",
            "args": []
        },
        {
            "name": "POSITION OF",
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
            "name": "RAISE TO POWER",
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
            "name": "RANDOM INTEGER",
            "description": "A random integer between the specified min and max, inclusive.",
            "args": [
                {
                    "name": "MIN",
                    "description": "The smallest integer allowed. If a real number is provided to this input. It is rounded to the nearest integer.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                },
                {
                    "name": "MAX",
                    "description": "The largest integer allowed. If a real number is provided to this input. It is rounded to the nearest integer.",
                    "type": "NUMBER",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "RANDOM REAL",
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
            "name": "RANDOM VALUE IN ARRAY",
            "description": "A random value from the specified array.",
            "args": [
                {
                    "name": "ARRAY",
                    "description": "The array from which to randomly take a value. If a non-array value is provided. The result is simply the provided value.",
                    "type": "ANY",
                    "default": "GLOBAL VARIABLE"
                }
            ]
        },
        {
            "name": "RANDOMIZED ARRAY",
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
            "name": "RAY CAST HIT NORMAL",
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
                    "description": "The end position for the ray cast. If a player is provided. A position 2 meters above the player's feet is used.",
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
            "name": "RAY CAST HIT PLAYER",
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
                    "description": "The end position for the ray cast. If a player is provided. A position 2 meters above the player's feet is used.",
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
            "name": "RAY CAST HIT POSITION",
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
                    "description": "The end position for the ray cast. If a player is provided. A position 2 meters above the player's feet is used.",
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
            "name": "REMOVE FROM ARRAY",
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
                    "description": "The value to remove from the array (if found). If this value is itself an array. Each matching element is removed.",
                    "type": "ANY",
                    "default": "NUMBER"
                }
            ]
        },
        {
            "name": "RIGHT",
            "description": "Shorthand for the directional vector(-1 , 0, 0), which points to the right.",
            "args": []
        },
        {
            "name": "ROUND TO INTEGER",
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
            "name": "SCORE OF",
            "description": "The current score of a player. Results in o if the game mode is not free-for-all.",
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
            "name": "SINE FROM DEGREES",
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
            "name": "SINE FROM RADIANS",
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
            "name": "SLOT OF",
            "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11",
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
            "name": "SORTED ARRAY",
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
            "name": "SPEED OF",
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
            "name": "SPEED OF IN DIRECTION",
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
            "name": "SQUARE ROOT",
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
            "name": "STRING",
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
                    "description": "The value that will be converted to text and used to replace",
                    "type": "ANY",
                    "default": "NULL"
                },
                {
                    "name": "{1}",
                    "description": "The value that will be converted to text and used to replace",
                    "type": "ANY",
                    "default": "NULL"
                },
                {
                    "name": "{2}",
                    "description": "The value that will be converted to text and used to replace",
                    "type": "ANY",
                    "default": "NULL"
                }
            ]
        },
        {
            "name": "SUBTRACT",
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
            "name": "TEAM",
            "description": "A team constant. The all option represents both teams in a team game or all players in a free-for-all game.",
            "args": [
                {
                    "name": "TEAM",
                    "description": "A team constant. The all option represents both teams in a team game or all players in a free-for-all game.",
                    "type": "TEAM CONSTANT",
                    "default": "ALL"
                }
            ]
        },
        {
            "name": "TEAM OF",
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
            "name": "TEAM SCORE",
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
            "name": "THROTTLE OF",
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
            "name": "TOTAL TIME ELAPSED",
            "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
            "args": []
        },
        {
            "name": "TRUE",
            "description": "The boolean value of true.",
            "args": []
        },
        {
            "name": "ULTIMATE CHARGE PERCENT",
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
            "name": "UP",
            "description": "Shorthand for the directional vector(0, l, 0), which points upward.",
            "args": []
        },
        {
            "name": "VALUE IN ARRAY",
            "description": "The value found at a specific element of an array. Results in o if the element does not exist.",
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
            "name": "VECTOR",
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
            "name": "VECTOR TOWARDS",
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
            "name": "VELOCITY OF",
            "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be o, even when traveling up or down a slope.",
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
            "name": "VERTICAL ANGLE FROM DIRECTION",
            "description": "The vertical angle in degrees corresponding to the specified direction vector.",
            "args": [
                {
                    "name": "DIRECTION",
                    "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                    "type": "DIRECTION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "VERTICAL ANGLE TOWARDS",
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
            "name": "VERTICAL FACING ANGLE OF",
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
            "name": "VERTICAL SPEED OF",
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
            "name": "VICTIM",
            "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
            "args": []
        },
        {
            "name": "WORLD VECTOR OF",
            "description": "The vector in world coordinates corresponding to the provided vector in local coordinates.",
            "args": [
                {
                    "name": "LOCAL VECTOR",
                    "description": "The vector in local coordinates that will be converted to world coordinates.",
                    "type": "POSITION",
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
            "name": "X COMPONENT OF",
            "description": "The x component of the specified vector, usually representing a leftward amount.",
            "args": [
                {
                    "name": "VALUE",
                    "description": "The vector from which to acquire the x component.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "Y COMPONENT OF",
            "description": "The y component of the specified vector, usually representing an upward amount.",
            "args": [
                {
                    "name": "VALUE",
                    "description": "The vector from which to acquire the y component.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        },
        {
            "name": "Z COMPONENT OF",
            "description": "The z component of the specified vector, usually representing a forward amount.",
            "args": [
                {
                    "name": "VALUE",
                    "description": "The vector from which to acquire the z component.",
                    "type": "POSITION",
                    "default": "VECTOR"
                }
            ]
        }
];