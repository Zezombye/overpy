try{

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require("path");
const overpy = require("./overpy.js");
const clipboard = require("copy-paste");

//Defined as an array because VSCode doesn't collapse multiline strings.
const decompilerUI = [`

<head>
    <meta charset="utf-8">
</head>
<body>
    <div id="wrapper">
        <div id="decompiler-input">
            <textarea id="decompiler-input-text" placeholder="Copy paste your workshop code here"></textarea>
        </div>
        <div id="var-input">
            <p>Global var names</p>
            <div id="global-var-input">
                <p>A: <input type='text' id='global-var-a'/></p>
                <p>B: <input type='text' id='global-var-b'/></p>
                <p>C: <input type='text' id='global-var-c'/></p>
                <p>D: <input type='text' id='global-var-d'/></p>
                <p>E: <input type='text' id='global-var-e'/></p>
                <p>F: <input type='text' id='global-var-f'/></p>
                <p>G: <input type='text' id='global-var-g'/></p>
                <p>H: <input type='text' id='global-var-h'/></p>
                <p>I: <input type='text' id='global-var-i'/></p>
                <p>J: <input type='text' id='global-var-j'/></p>
                <p>K: <input type='text' id='global-var-k'/></p>
                <p>L: <input type='text' id='global-var-l'/></p>
                <p>M: <input type='text' id='global-var-m'/></p>
                <p>N: <input type='text' id='global-var-n'/></p>
                <p>O: <input type='text' id='global-var-o'/></p>
                <p>P: <input type='text' id='global-var-p'/></p>
                <p>Q: <input type='text' id='global-var-q'/></p>
                <p>R: <input type='text' id='global-var-r'/></p>
                <p>S: <input type='text' id='global-var-s'/></p>
                <p>T: <input type='text' id='global-var-t'/></p>
                <p>U: <input type='text' id='global-var-u'/></p>
                <p>V: <input type='text' id='global-var-v'/></p>
                <p>W: <input type='text' id='global-var-w'/></p>
                <p>X: <input type='text' id='global-var-x'/></p>
                <p>Y: <input type='text' id='global-var-y'/></p>
                <p>Z: <input type='text' id='global-var-z'/></p>
            </div>
            <p>Player var names</p>
            <div id="player-var-input">
                <p>A: <input type='text' id='player-var-a'/></p>
                <p>B: <input type='text' id='player-var-b'/></p>
                <p>C: <input type='text' id='player-var-c'/></p>
                <p>D: <input type='text' id='player-var-d'/></p>
                <p>E: <input type='text' id='player-var-e'/></p>
                <p>F: <input type='text' id='player-var-f'/></p>
                <p>G: <input type='text' id='player-var-g'/></p>
                <p>H: <input type='text' id='player-var-h'/></p>
                <p>I: <input type='text' id='player-var-i'/></p>
                <p>J: <input type='text' id='player-var-j'/></p>
                <p>K: <input type='text' id='player-var-k'/></p>
                <p>L: <input type='text' id='player-var-l'/></p>
                <p>M: <input type='text' id='player-var-m'/></p>
                <p>N: <input type='text' id='player-var-n'/></p>
                <p>O: <input type='text' id='player-var-o'/></p>
                <p>P: <input type='text' id='player-var-p'/></p>
                <p>Q: <input type='text' id='player-var-q'/></p>
                <p>R: <input type='text' id='player-var-r'/></p>
                <p>S: <input type='text' id='player-var-s'/></p>
                <p>T: <input type='text' id='player-var-t'/></p>
                <p>U: <input type='text' id='player-var-u'/></p>
                <p>V: <input type='text' id='player-var-v'/></p>
                <p>W: <input type='text' id='player-var-w'/></p>
                <p>X: <input type='text' id='player-var-x'/></p>
                <p>Y: <input type='text' id='player-var-y'/></p>
                <p>Z: <input type='text' id='player-var-z'/></p>
            </div>
        </div>
        
    </div>
    <div id="button-container">
        <button type="button" onclick="decompile()">Decompile</button>
    </div>

    <style>
        
        body {
            text-align: center;
        }

        div#wrapper {
            text-align: center;
            display: inline-block;
            width: 650px;
            height: 500px;
        }

        div#decompiler-input {
            position: relative;
            float: left;
            width: 400px;
            height: 450px;
            top: 50%;
            transform: translateY(-50%);
        }

        div#var-input {
            float: right;
            width: 250px;
        }

        #global-var-input, #player-var-input {
            height: 200px;
            overflow-y: scroll;
            text-align: right;
            font-family: monospace;
        }

        textarea#decompiler-input-text {
            width: 100%;
            height: 100%;
            resize: none;
        }

        #button-container {
            display: inline-block;
            text-align: center;
            width: 100%;
        }


    
    </style>

    <script>
    
        function decompile() {

            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var workshopCode = document.getElementById("decompiler-input-text").value;
            var globalVars = {};
            for (var letter of alphabet) {
                var varText = document.getElementById("global-var-"+letter).value.trim();
                if (varText !== "") {
                    globalVars[letter] = varText;
                }
            }

            var playerVars = {};
            for (var letter of alphabet) {
                var varText = document.getElementById("player-var-"+letter).value.trim();
                if (varText !== "") {
                    playerVars[letter] = varText;
                }
            }

            const vscode = acquireVsCodeApi();
            vscode.postMessage({
                content: workshopCode,
                globalVars: globalVars,
                playerVars: playerVars,
            });

        }
    
    </script>
</body>

`];

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

const funcDoc =  [
    {
        "name": "allowButton",
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
        "name": "applyImpulse",
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
                "description": "Specifies whether existing velocity that is counter to direction should first be cancelled out before applying the impulse.",
                "type": "MOTION",
                "default": "CANCEL CONTRARY MOTION"
            }
        ]
    },
    {
        "name": "bigMessage",
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
        "name": "clearStatusEffect",
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
        "name": "communicate",
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
        "name": "createEffect",
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
        "name": "hudText",
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
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
        "name": "createIcon",
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
        "name": "createInWorldText",
        "description": "Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
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
        "name": "damage",
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
                "description": "The amount of damage to apply. This amount may be modified by buffs, debuffs, or armor.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "declareDraw",
        "description": "Instantly ends the match in a draw. This action has no effect in free-for-all modes.",
        "args": []
    },
    {
        "name": "declarePlayerVictory",
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
        "name": "declareRoundVictory",
        "description": "Declare a team as the current round winner. This only works in the control and elimination game modes",
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
        "name": "declareTeamVictory",
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
        "name": "destroyAllEffects",
        "description": "Destroys all effect entities created by create effect.",
        "args": []
    },
    {
        "name": "destroyAllHudTexts",
        "description": "Destroys all hud text that was created by the create hud text action.",
        "args": []
    },
    {
        "name": "destroyAllIcons",
        "description": "Destroys all icon entities created by create icon.",
        "args": []
    },
    {
        "name": "destroyAllInWorldText",
        "description": "Destroys all in-world text created by create in-world text.",
        "args": []
    },
    {
        "name": "destroyEffect",
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
        "name": "destroyHudText",
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
        "name": "destroyIcon",
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
        "name": "destroyInWorldText",
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
        "name": "disableAnnouncer",
        "description": "Disables game mode announcements from the announcer until reenabled or the match ends.",
        "args": []
    },
    {
        "name": "disableGamemodeCompletion",
        "description": "Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.",
        "args": []
    },
    {
        "name": "disableMusic",
        "description": "Disables all game mode music until reenabled or the match ends.",
        "args": []
    },
    {
        "name": "disableRespawn",
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
        "name": "disableScoring",
        "description": "Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.",
        "args": []
    },
    {
        "name": "disableDeathSpectateAllPlayers",
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
        "name": "disableDeathSpectateTargetHud",
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
        "name": "disallowButton",
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
        "name": "enableAnnouncer",
        "description": "Undoes the effect of the disable built-in game mode announcer action.",
        "args": []
    },
    {
        "name": "enableGamemodeCompletion",
        "description": "Undoes the effect of the disable built-in game mode completion action.",
        "args": []
    },
    {
        "name": "enableMusic",
        "description": "Undoes the effect of the disable built-in game mode music action.",
        "args": []
    },
    {
        "name": "enableRespawn",
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
        "name": "enableScoring",
        "description": "Undoes the effect of the disable built-in game mode scoring action.",
        "args": []
    },
    {
        "name": "enableDeathSpectateAllPlayers",
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
        "name": "enableDeathSpectateTargetHud",
        "description": "Causes one or more players to see their spectate target's hud instead of their own while death spectating.",
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
        "name": "goToAssembleHeroes",
        "description": "Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.",
        "args": []
    },
    {
        "name": "heal",
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
                "description": "The amount of healing to apply. This amount may be modified by buff or debuffs. Healing is capped by each player's max health.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "kill",
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
        "name": "addToScore",
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
                "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "addToTeamScore",
        "description": "Modifies the score of one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
        "args": [
            {
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
        "name": "pauseMatchTime",
        "description": "Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.",
        "args": []
    },
    {
        "name": "playEffect",
        "description": "Plays an effect at a position in the world. The lifetime of this effect is short, so it does not need to be updated or destroyed.",
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
        "name": "preloadHero",
        "description": "Preemptively loads the specified hero or heroes into memory using the skins of the specified player or players, available memory permitting. Useful whenever rapid hero changing is possible and the next hero is known.",
        "args": [
            {
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
        "name": "forceButtonPress",
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
        "name": "resetHeroAvailability",
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
        "name": "respawn",
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
        "name": "resurrect",
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
        "name": "setAbility1Enabled",
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
                "description": "Specifies whether the player or players are able to use ability 1. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "name": "setAbility2Enabled",
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
                "description": "Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "name": "setAimSpeed",
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
                "description": "The percentage of normal aim speed to which the player or players will set their aim speed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "setDamageDealt",
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
                "description": "The percentage of raw damage dealt to which the player or players will set their damage dealt.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "setDamageReceived",
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
        "name": "setFacing",
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
        "name": "setGravity",
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
                "description": "The percentage of regular movement gravity to which the player or players will set their personal movement gravity.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "setHealingDealt",
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
        "name": "setHealingReceived",
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
        "name": "setInvisibility",
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
        "name": "setMatchTime",
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
        "name": "setMaxHealth",
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
                "description": "The percentage of raw max health to which the player or players will set their max health.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "setMoveSpeed",
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
                "description": "The percentage of raw move speed to which the player or players will set their move speed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "setObjectiveDescription",
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
        "name": "setAllowedHeroes",
        "description": "Sets the list of heroes available to one or more players. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
        "args": [
            {
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
        "name": "setScore",
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
        "name": "setPrimaryFireEnabled",
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
        "name": "setProjectileGravity",
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
        "name": "setProjectileSpeed",
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
        "name": "setRespawnTime",
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
        "name": "setSecondaryFireEnabled",
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
                "description": "Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "name": "setSlowMotion",
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
        "name": "setStatusEffect",
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
                "description": "The duration of the status in seconds. To have a status that lasts until a clear status action is executed, provide an arbitrarily long duration such as 9999.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "setTeamScore",
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
        "name": "setUltEnabled",
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
                "description": "Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true, false, or compare.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },
    {
        "name": "setUltCharge",
        "description": "Sets the ultimate charge for one or more players as a percentage of maximum charge.",
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
        "name": "smallMessage",
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
        "name": "startAcceleration",
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
        "name": "setCamera",
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
        "name": "startDamageModification",
        "description": "Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage modification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.",
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
        "name": "startDoT",
        "description": "Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference to this dot, use the last damage over time id value.",
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
        "name": "startFacing",
        "description": "Starts turning one or more players to face the specified direction.",
        "args": [
            {
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
        "name": "startForcingHero",
        "description": "Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the stop forcing player to be hero action is executed.",
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
        "name": "startForcingSpawn",
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
                "description": "The number of the spawn room to be forced. 0 is the first spawn room, 1 the second, and 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },
    {
        "name": "startForcingThrottle",
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
        "name": "startHoT",
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
        "name": "startForcingButton",
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
        "name": "startTransformingThrottle",
        "description": "Starts transforming (scaling and rotating) the throttle (directional input control) of a player or players. Cancels any existing start transforming throttle behavior.",
        "args": [
            {
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
        "name": "stopAcceleration",
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
        "name": "stopAllDamageModifications",
        "description": "Stops all damage modifications that were started using the start damage modification action.",
        "args": []
    },
    {
        "name": "stopAllDoT",
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
        "name": "stopAllHoT",
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
        "name": "stopCamera",
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
        "name": "stopDamageModification",
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
        "name": "stopDoT",
        "description": "Stops an instance of damage over time started by the start damage over time action.",
        "args": [
            {
                "name": "DAMAGE OVER TIME ID",
                "description": "Specifies which damage over time instance to stop. This id may be last damage over time id or a variable into which last damage over time id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE OVER TIME ID"
            }
        ]
    },
    {
        "name": "stopFacing",
        "description": "Stops the turning started by the start facing action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop turning.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "name": "stopForcingCurrentHero",
        "description": "Stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.",
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
        "name": "stopForcingSpawn",
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
        "name": "stopForcingThrottle",
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
        "name": "stopHoT",
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
        "name": "stopForcingButton",
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
        "name": "stopTransformingThrottle",
        "description": "Stops the throttle transform started by start transforming throttle for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will stop being transformed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ]
    },
    {
        "name": "teleport",
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
        "name": "unpauseMatchTime",
        "description": "Unpauses the match time.",
        "args": []
    },
    {
        "name": "abs",
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
        "name": "getDeadPlayers",
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
        "name": "getAllHeroes",
        "description": "The array of all heroes in overwatch.",
        "args": []
    },
    {
        "name": "getLivingPlayers",
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
        "name": "getAllowedHeroes",
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
        "name": "getPlayers",
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
        "name": "getPlayersNotOnObjective",
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
        "name": "getPlayersOnObjective",
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
        "name": "getAltitude",
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
        "name": "angleDifference",
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
        "name": "getClosestPlayer",
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
        "name": "getControlScorePercentage",
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
        "name": "getControlScoringTeam",
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": []
    },
    {
        "name": "cosDeg",
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
        "name": "cos",
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
        "name": "len",
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
        "name": "crossProduct",
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
        "name": "angleToDirection",
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
        "name": "directionTowards",
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
        "name": "distance",
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
        "name": "dotProduct",
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
        "name": "entityExists",
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
        "name": "eventDamage",
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": []
    },
    {
        "name": "eventHealing",
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": []
    },
    {
        "name": "eventPlayer",
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": []
    },
    {
        "name": "eventWasCriticalHit",
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": []
    },
    {
        "name": "getEyePosition",
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
        "name": "getFacingDirection",
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
        "name": "getFarthestPlayer",
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
        "name": "getFlagPosition",
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
        "name": "hasSpawned",
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
        "name": "hasStatusEffect",
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
        "name": "getHealth",
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
        "name": "heroIcon",
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
        "name": "getCurrentHero",
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
        "name": "horizontalAngleFromDirection",
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
        "name": "horizontalAngleTowards",
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
        "name": "getHorizontalFacingAngle",
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
        "name": "getHorizontalSpeed",
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
        "name": "hostPlayer",
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": []
    },
    {
        "name": "isAlive",
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
        "name": "isAssemblingHeroes",
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": []
    },
    {
        "name": "isMatchBetweenRounds",
        "description": "Whether the match is between rounds.",
        "args": []
    },
    {
        "name": "isHoldingButton",
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
        "name": "isCommunicating",
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
        "name": "isCommunicatingAnything",
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
        "name": "isCommunicatingEmote",
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
        "name": "isCommunicatingVoiceline",
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
        "name": "isControlPointLocked",
        "description": "Whether the point is locked in control mode.",
        "args": []
    },
    {
        "name": "isCrouching",
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
        "name": "isInSuddenDeath",
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": []
    },
    {
        "name": "isDead",
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
        "name": "isFiringPrimaryFire",
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
        "name": "isFiringSecondaryFire",
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
        "name": "isFlagAtBase",
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
        "name": "isFlagBeingCarried",
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
        "name": "isGameInProgress",
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": []
    },
    {
        "name": "isInAir",
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
        "name": "isInSetup",
        "description": "Whether the match is currently in its setup phase.",
        "args": []
    },
    {
        "name": "isInSpawnRoom",
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
        "name": "isInViewAngle",
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
        "name": "isMatchComplete",
        "description": "Whether the match has finished.",
        "args": []
    },
    {
        "name": "isMoving",
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
        "name": "isObjectiveComplete",
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
        "name": "isOnGround",
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
        "name": "isOnObjective",
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
        "name": "isOnWall",
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
        "name": "isOnFire",
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
        "name": "isStanding",
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
        "name": "isTeamOnDefense",
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
        "name": "isTeamOnOffense",
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
        "name": "isUsingAbility1",
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
        "name": "isUsingAbility2",
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
        "name": "isUsingUltimate",
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
        "name": "isWaitingForPlayers",
        "description": "Whether the match is waiting for players to join before starting.",
        "args": []
    },
    {
        "name": "getLastCreatedEntity",
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": []
    },
    {
        "name": "getLastDamageModification",
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "name": "getLastDoT",
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "name": "getLastHoT",
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": []
    },
    {
        "name": "getLastCreatedText",
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": []
    },
    {
        "name": "localVector",
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
        "name": "getMatchRound",
        "description": "The current round of the match, counting up from 1.",
        "args": []
    },
    {
        "name": "getMatchTime",
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": []
    },
    {
        "name": "max",
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
        "name": "getMaxHealth",
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
        "name": "min",
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
        "name": "nearestWalkablePosition",
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
        "name": "normalize",
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
        "name": "getNumberOfDeadPlayers",
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
        "name": "getNumberOfDeaths",
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
        "name": "getNumberOfElims",
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
        "name": "getNumberOfFinalBlows",
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
        "name": "getNumberOfLivingPlayers",
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
        "name": "getNumberOfPlayers",
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
        "name": "getNumberOfPlayersOnObjective",
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
        "name": "getCurrentObjective",
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": []
    },
    {
        "name": "getObjectivePosition",
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
        "name": "getOppositeTeam",
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
        "name": "getPayloadPosition",
        "description": "The position in the world of the active payload.",
        "args": []
    },
    {
        "name": "getPayloadProgressPercentage",
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": []
    },
    {
        "name": "getFlagCarrier",
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
        "name": "getPlayerClosestToReticle",
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
        "name": "getPlayersInSlot",
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
        "name": "getPlayersInViewAngle",
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
        "name": "getPlayersInRadius",
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
        "name": "getCapturePercentage",
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": []
    },
    {
        "name": "getPosition",
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
        "name": "random.randint",
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
        "name": "random.shuffle",
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
        "name": "random.uniform",
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
        "name": "random.choice",
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
        "name": "getScore",
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
        "name": "sinDeg",
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
        "name": "sin",
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
        "name": "getSlot",
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
        "name": "getSpeed",
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
        "name": "getSpeedInDirection",
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
        "name": "sqrt",
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
        "name": "getTeam",
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
        "name": "teamScore",
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
        "name": "getThrottle",
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
        "name": "getTotalTimeElapsed",
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": []
    },
    {
        "name": "getUltCharge",
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
        "name": "vect",
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
        "name": "vectorTowards",
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
        "name": "getVelocity",
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
        "name": "verticalAngleOfDirection",
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
        "name": "verticalAngleTowards",
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
        "name": "getVerticalFacingAngle",
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
        "name": "getVerticalSpeed",
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
        "name": "worldVector",
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
    }
];

const constTypes = [
    {
        "name": "TRANSFORMATION",
        "opy": "Transform",
        "values": [
            "ROTATION",
            "ROTATION AND TRANSLATION"
        ]
    },
    {
        "name": "INVISIBLE TO",
        "opy": "Invis",
        "values": [
            "ALL",
            "ENEMIES",
            "NONE"
        ]
    },
    {
        "name": "COLOR",
        "opy": "Color",
        "values": [
            "WHITE",
            "YELLOW",
            "GREEN",
            "PURPLE",
            "RED",
            "BLUE",
            "TEAM 1",
            "TEAM 2"
        ]
    },
    {
        "name": "BUTTON",
        "opy": "Button",
        "values": [
            "PRIMARY FIRE",
            "SECONDARY FIRE",
            "ABILITY 1",
            "ABILITY 2",
            "ULTIMATE",
            "INTERACT",
            "JUMP",
            "CROUCH",
        ]
    },
    {
        "name": "TEAM CONSTANT",
        "opy": "Team",
        "values": [
            "ALL",
            "1",
            "2"
        ]
    },
    {
        "name": "HERO CONSTANT",
        "opy": "Hero",
        "values": [
            "ANA",
            "ASHE",
            "BAPTISTE",
            "BASTION",
            "BRIGITTE",
            "DVA",
            "DOOMFIST",
            "GENJI",
            "HANZO",
            "JUNKRAT",
            "LUCIO",
            "MCCREE",
            "MEI",
            "MERCY",
            "MOIRA",
            "ORISA",
            "PHARAH",
            "REAPER",
            "REINHARDT",
            "ROADHOG",
            "SIGMA",
            "SOLDIER",
            "SOMBRA",
            "SYMMETRA",
            "TORBJORN",
            "TRACER",
            "WIDOWMAKER",
            "WINSTON",
            "HAMMOND",
            "ZARYA",
            "ZENYATTA"
        ]
    },
    {
        "name": "PLAY EFFECT",
        "opy": "Effect",
        "values": [
            "GOOD EXPLOSION",
            "BAD EXPLOSION",
            "RING EXPLOSION",
            "GOOD PICKUP EFFECT",
            "BAD PICKUP EFFECT",
            "DEBUFF IMPACT SOUND",
            "BUFF IMPACT SOUND",
            "RING EXPLOSION SOUND",
            "BUFF EXPLOSION SOUND",
            "EXPLOSION SOUND",
        ]
    },
    {
        "name": "CREATE EFFECT",
        "opy": "Effect",
        "values": [
            "SPHERE",
            "LIGHT SHAFT",
            "ORB",
            "RING",
            "CLOUD",
            "SPARKLES",
            "GOOD AURA",
            "BAD AURA",
            "ENERGY SOUND",
            "PICKUP SOUND",
            "GOOD AURA SOUND",
            "BAD AURA SOUND",
            "SPARKLES SOUND",
            "SMOKE SOUND",
            "DECAL SOUND",
            "BEACON SOUND",
        ]
    },
    {
        "name": "COMMUNICATE",
        "opy": "Comms",
        "values": [
            "VOICE LINE UP",
            "VOICE LINE LEFT",
            "VOICE LINE RIGHT",
            "VOICE LINE DOWN",
            "EMOTE UP",
            "EMOTE LEFT",
            "EMOTE RIGHT",
            "EMOTE DOWN",
            "ULTIMATE STATUS",
            "HELLO",
            "NEED HEALING",
            "GROUP UP",
            "THANKS",
            "ACKNOWLEDGE",
        ]
    },
    {
        "name": "ICON",
        "opy": "Icon",
        "values": [
            "ARROW DOWN",
            "ARROW LEFT",
            "ARROW RIGHT",
            "ARROW UP",
            "ASTERISK",
            "BOLT",
            "CHECKMARK",
            "CIRCLE",
            "CLUB",
            "DIAMOND",
            "DIZZY",
            "EXCLAMATION MARK",
            "EYE",
            "FIRE",
            "FLAG",
            "HALO",
            "HAPPY",
            "HEART",
            "MOON",
            "NO",
            "PLUS",
            "POISON",
            "POISON 2",
            "QUESTION MARK",
            "RADIOACTIVE",
            "RECYCLE",
            "RING THICK",
            "RING THIN",
            "SAD",
            "SKULL",
            "SPADE",
            "SPIRAL",
            "STOP",
            "TRASHCAN",
            "WARNING",
            "CROSS"
        ]
    },
    {
        "name": "RELATIVE",
        "opy": "Relativity",
        "values": [
            "TO WORLD",
            "TO PLAYER",
        ]
    },
    {
        "name": "MOTION",
        "opy": "Impulse",
        "values": [
            "CANCEL CONTRARY MOTION",
            "INCORPORATE CONTRARY MOTION"
        ]
    },
    {
        "name": "LOS CHECK",
        "opy": "LosCheck",
        "values": [
            "OFF",
            "SURFACES",
            "SURFACES AND ENEMY BARRIERS",
            "SURFACES AND ALL BARRIERS",
        ]
    },
    {
        "name": "WORLD TEXT CLIPPING",
        "opy": "Clip",
        "values": [
            "SURFACES",
            "NONE"
        ]
    },
    {
        "name": "HUD LOCATION",
        "opy": "Position",
        "values": [
            "LEFT",
            "TOP",
            "RIGHT",
        ]
    },
    {
        "name": "ICON REEVALUATION",
        "opy": "Reeval",
        "values": [
            "VISIBILITY AND POSITION",
            "POSITION",
            "VISIBILITY",
            "NONE",
        ]
    },
    {
        "name": "EFFECT REEVALUATION",
        "opy": "Reeval",
        "values": [
            "VISIBILITY POSITION AND RADIUS",
            "POSITION AND RADIUS",
            "VISIBILITY",
            "NONE",
        ]
    },
    {
        "name": "HUD TEXT REEVALUATION",
        "opy": "Reeval",
        "values": [
            "VISIBILITY AND STRING",
            "STRING",
        ]
    },
    {
        "name": "WORLD TEXT REEVALUATION",
        "opy": "Reeval",
        "values": [
            "VISIBILITY POSITION AND STRING",
            "VISIBILITY AND STRING",
            "STRING",
        ]
    },
    {
        "name": "CHASE RATE REEVALUATION",
        "opy": "Reeval",
        "values": [
            "DESTINATION AND RATE",
            "NONE"
        ]
    },
    {
        "name": "CHASE TIME REEVALUATION",
        "opy": "Reeval",
        "values": [
            "DESTINATION AND DURATION",
            "NONE"
        ]
    },
    {
        "name": "OBJECTIVE DESCRIPTION REEVALUATION",
        "opy": "Reeval",
        "values": [
            "VISIBILITY AND STRING",
            "STRING",
        ]
    },
    {
        "name": "DAMAGE MODIFICATION REEVALUATION",
        "opy": "Reeval",
        "values": [
            "RECEIVERS DAMAGERS AND DMGPERCENT",
            "RECEIVERS AND DAMAGERS",
            "NONE",
        ]
    },
    {
        "name": "FACING REEVALUATION",
        "opy": "Reeval",
        "values": [
            "DIRECTION AND TURN RATE",
            "NONE",
        ]
    },
    {
        "name": "WAIT BEHAVIOR",
        "opy": "Wait",
        "values": [
            "IGNORE CONDITION",
            "ABORT WHEN FALSE",
            "RESTART WHEN TRUE",
        ]
    },
    {
        "name": "BARRIERS LOS",
        "opy": "LosCheck",
        "values": [
            "PASS_THROUGH_BARRIERS",
            "BLOCKED_BY_ENEMY_BARRIERS",
            "BLOCKED_BY_ALL_BARRIERS",
        ]
    },
    {
        "name": "STATUS",
        "opy": "Status",
        "values": [
            "HACKED",
            "BURNING",
            "KNOCKED DOWN",
            "ASLEEP",
            "FROZEN",
            "UNKILLABLE",
            "INVINCIBLE",
            "PHASED OUT",
            "ROOTED",
            "STUNNED",
        ]
    }
];

const funcList = [
    "abs","getDeadPlayers","getAllHeroes","getLivingPlayers","getPlayers","getPlayersNotOnObjective","getPlayersOnObjective","angleDifference","bigMessage","getControlScorePercentage","getControlScoringTeam","cosDeg","cos","len","createEffect","hudText","createIcon","createInWorldText","crossProduct","damage","declareDraw","declarePlayerVictory","declareRoundVictory","declareTeamVictory","destroyAllEffects","destroyAllHudTexts","destroyAllIcons","destroyAllInWorldText","destroyEffect","destroyHudText","destroyIcon","destroyInWorldText","angleToDirection","directionTowards","disableAnnouncer","disableGamemodeCompletion","disableMusic","disableScoring","distance","dotProduct","enableAnnouncer","enableGamemodeCompletion","enableMusic","enableScoring","entityExists","eventHealing","eventWasCriticalHit","getFarthestPlayer","getFlagPosition","goToAssembleHeroes","heal","heroIcon","horizontalAngleFromDirection","horizontalAngleTowards","hostPlayer","isAssemblingHeroes","isMatchBetweenRounds","isControlPointLocked","isInSuddenDeath","isFlagAtBase","isFlagBeingCarried","isGameInProgress","teamHasHero","isInSetup","isMatchComplete","isObjectiveComplete","isTeamOnDefense","isTeamOnOffense","isWaitingForPlayers","kill","getLastCreatedEntity","getLastDamageModification","getLastDoT","getLastHoT","getLastCreatedText","localVector","getMatchRound","getMatchTime","max","min","addToTeamScore","nearestWalkablePosition","normalize","getNumberOfDeadPlayers","getNumberOfHeroes","getNumberOfLivingPlayers","getNumberOfPlayers","getNumberOfPlayersOnObjective","getCurrentObjective","getObjectivePosition","getOppositeTeam","pauseMatchTime","getPayloadPosition","getPayloadProgressPercentage","playEffect","getFlagCarrier","getPlayersInSlot","getPlayersOnHero","getPlayersInRadius","getCapturePercentage","getServerLoad","getAverageServerLoad","getPeakServerLoad","setMatchTime","setObjectiveDescription","setSlowMotion","setTeamScore","sinDeg","sin","smallMessage","sqrt","startDamageModification","startForcingSpawn","stopAllDamageModifications","stopDamageModification","stopDoT","stopForcingSpawn","stopHoT","teamScore","getTotalTimeElapsed","unpauseMatchTime","vect","vectorTowards","verticalAngleOfDirection","verticalAngleTowards","worldVector",
    "chase",
    "stopChasingVariable",
    "wait",
    "raycast",
    "all",
    "any",
    "floor",
    "round",
    "ceil",
    "sorted",
];

const metaRuleParams = [
    {
        "name": "@Rule",
        "values": []
    },{
        "name": "@Event",
        "values": [
            "global",
            "eachPlayer",
            "playerTookDamage",
            "playerDealtDamage",
            "playerDealtFinalBlow",
            "playerDied",
            "playerEarnedElimination",
            "playerDealtHealing",
            "playerReceivedHealing",
            "playerJoined",
            "playerLeft",
        ]
    },{
        "name": "@Team",
        "values": [
            "all",
            "1",
            "2",
        ]
    },{
        "name": "@Slot",
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
        ]
    },{
        "name": "@Hero",
        "values": constTypes.filter(x => x.opy === "Hero")[0].values.map(x => x.toLowerCase()),
    }
]

//Functions that come after a dot.
const memberFuncList = [
    //Array functions
    "append",
    "slice",
    "index",

    //Raycast functions
    "hasLoS",
    "getNormal",
    "getPlayerHit",
    "getHitPosition",

    //Player functions
    "allowButton","getAllowedHeroes","getAltitude","applyImpulse","clearStatusEffect","getClosestPlayer","communicate","disableRespawn","disableDeathSpectateAllPlayers","disableDeathSpectateTargetHud","disallowButton","enableRespawn","enableDeathSpectateAllPlayers","enableDeathSpectateTargetHud","getEyePosition","getFacingDirection","hasSpawned","hasStatusEffect","getHealth","getCurrentHero","getHorizontalFacingAngle","getHorizontalSpeed","isAlive","isHoldingButton","isCommunicating","isCommunicatingAnything","isCommunicatingEmote","isCommunicatingVoiceline","isCrouching","isDead","isFiringPrimaryFire","isFiringSecondaryFire","isInAir","isInSpawnRoom","isInViewAngle","isMoving","isOnGround","isOnObjective","isOnWall","isOnFire","isStanding","isUsingAbility1","isUsingAbility2","isUsingUltimate","getMaxHealth","addToScore","getNormalizedHealth","getNumberOfDeaths","getNumberOfElims","getNumberOfFinalBlows","getPlayerClosestToReticle","getPlayersInViewAngle","getPosition","preloadHero","forceButtonPress","randint","uniform","choice","shuffle","resetHeroAvailability","respawn","resurrect","getScore","setAbility1Enabled","setAbility2Enabled","setAimSpeed","setDamageDealt","setDamageReceived","setFacing","setGravity","setHealingDealt","setHealingReceived","setInvisibility","setMaxHealth","setMoveSpeed","setAllowedHeroes","setScore","setPrimaryFireEnabled","setProjectileGravity","setProjectileSpeed","setRespawnTime","setSecondaryFireEnabled","setStatusEffect","setUltEnabled","setUltCharge","getSlot","getSpeed","getSpeedInDirection","startAcceleration","setCamera","startDoT","startFacing","startForcingHero","startForcingThrottle","startHoT","startForcingButton","startTransformingThrottle","stopAcceleration","stopAllDoT","stopAllHoT","stopCamera","stopFacing","stopForcingCurrentHero","stopForcingThrottle","stopForcingButton","stopTransformingThrottle","getTeam","teleport","getThrottle","getUltCharge","getVelocity","getVerticalFacingAngle","getVerticalSpeed",
];

const memberConstList = [
    //Vector constants
    "x",
    "y",
    "z",
];

const memberCompItem = makeCompList(memberFuncList.concat(memberConstList));

const constValues = getConstValues();
const metaRuleParamsCompList = makeCompList(metaRuleParams.map(x => x.name));
const defaultCompList = makeCompList(funcList.concat(Object.keys(constValues)));

function activate(context) {

    vscode.commands.registerCommand("extension.decompile", () => {
        var panel = vscode.window.createWebviewPanel("overpyDecompilerWebview", "OverPy Decompiler", vscode.ViewColumn.Active, {
            enableScripts: true,
        });
        panel.webview.html = decompilerUI[0];
        panel.webview.onDidReceiveMessage(message => {

            try {
                var decompiled = overpy.decompileAllRules(message.content, message.globalVars, message.playerVars);

                vscode.window.showSaveDialog({
                    canSelectMany: false,
                    saveLabel: "Choose the destination file (.opy)",
                    filters: {
                        "OverPy files": ["opy"],
                    },
                }).then(fileUri => {
                    //console.log(fileUri);
                    if (fileUri) {
                        //console.log('Selected file: ' + fileUri.fsPath);
                        const newFile = vscode.Uri.parse("untitled:"+fileUri.fsPath);
                        vscode.workspace.openTextDocument(newFile).then(document => {
                            const edit = new vscode.WorkspaceEdit();
                            edit.insert(newFile, new vscode.Position(0, 0), decompiled);
                            return vscode.workspace.applyEdit(edit).then(success => {
                                if (success) {
                                    vscode.window.showTextDocument(document);
                                } else {
                                    vscode.window.showInformationMessage('Error!');
                                }
                            });
                        });
                    }
                });

                panel.dispose();
                

            } catch (e) {
                if (e instanceof Error) {
                    vscode.window.showErrorMessage("Error: "+e.message+", contact Zezombye about this");
                } else {
                    console.error(e);
                }
            }
        })
    });

    vscode.commands.registerCommand('extension.compile', () => {
        try {
            var compiledText = overpy.compile(vscode.window.activeTextEditor.document.getText());
            clipboard.copy(compiledText);
            vscode.window.showInformationMessage("Successfully compiled! (copied into clipboard)");
        } catch (e) {
            if (e instanceof Error) {
                vscode.window.showErrorMessage("Error: "+e.message);
                try {
                    var errorLine = parseInt(e.message.substring(e.message.indexOf("line ")+"line ".length, e.message.indexOf(",")))-1;
                    var errorCol = parseInt(e.message.substring(e.message.indexOf("col ")+"col ".length, e.message.indexOf(":")))-1;

                    //Position the cursor to the error location
                    vscode.window.activeTextEditor.selection = new vscode.Selection(errorLine, errorCol, errorLine, errorCol);
                    vscode.window.activeTextEditor.revealRange(new vscode.Range((errorLine > 10 ? errorLine-10 : 0), errorCol, errorLine+10, errorCol));
                } catch (e) {
                    console.error(e);
                }
                //vscode.window.activeTextEditor.document.
            } else {
                console.error(e);
            }
        }

    });

    vscode.languages.registerCompletionItemProvider("overpy", {
        provideCompletionItems(document, position, token, context) {
            //console.log(document.getText(document.getWordRangeAtPosition(position)));
            try {
                if (context.triggerCharacter === '.') {

                    var range = document.getWordRangeAtPosition(position.translate(0, -1));

                    if (range === undefined) {
                        //No word; probably a parenthesis.
                        return memberCompItem;
                    } else {
                        var word = document.getText(range);
                        console.log("Autocomplete for class "+word);
                        console.log(constValues[word]);
                        try {
                            return constValues[word];
                        } catch (KeyError) {
                            return;
                        }
                    }
                } else if (context.triggerCharacter === '@') {
                    return metaRuleParamsCompList;
                } else {
                    return defaultCompList;
                }
            } catch (e) {
                console.error(e);
            }
            
        }
    }, '.', '@'/*, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'*/);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

//Populates all consts (LosCheck, Reeval, Button etc) based on the doc.
//This is needed because some consts (LosCheck/Reeval) are divided into different consts in the doc.
function getConstValues() {
    var result = {};
    for (constType of constTypes) {
        if (!result.hasOwnProperty(constType.opy)) {
            result[constType.opy] = [];
        }
        result[constType.opy] = result[constType.opy].concat(constType.values.map(x => x.replace(/ /g, '_')));
    }

    //Remove duplicates
    Object.keys(result).forEach(function(key, index) {
        result[key] = result[key].filter(function(item, pos) {
            return result[key].indexOf(item) === pos;
        })
        result[key] = makeCompList(result[key]);
    })
    //console.log(result);
    return result;
}

function makeCompList(array) {
    return new vscode.CompletionList(array.map(x => makeCompItem(x)));
}

function makeCompItem(text) {
    var compItem = new vscode.CompletionItem();
    compItem.label = text;
    compItem.documentation = generateDocFromDoc(text);
    compItem.insertText = generateSnippetFromDoc(text);
    return compItem;
}

function generateDocFromDoc(text) {
    var isMemberFunction = false;
    if (funcList.indexOf(text) === -1) {
        if (memberFuncList.indexOf(text) === -1) {
            return "No documentation was found for this function.";
        } else {
            isMemberFunction = true;
        }
    }

    var doc = null;
    for (var func of funcDoc) {
        if (func.name === text) {
            doc = func;
            break;
        }
    }
    if (doc === null) {
        return "No documentation was found for this function.";
    }

    
    var result = "";

    result += doc.description;
    if (doc.args.length > 0) {
        result += "\n\nArguments:\n";
        //TODO 1er arg player
        for (var arg of doc.args) {
            if (!(isMemberFunction && arg.type === "PLAYER")) {
                result += "- `"+getSuitableArgName(arg.name)+"`: "+arg.description+"\n";
            }
        }
    }

    return new vscode.MarkdownString(result);

}

function generateSnippetFromDoc(text) {
    
    if (text.startsWith('@')) {
        return new vscode.SnippetString(getSnippetForMetaRuleParam(text));
    }
    var isFunction = false;
    if (funcList.indexOf(text) > -1 || memberFuncList.indexOf(text) > -1) {
        isFunction = true;
    }
    if (!isFunction) {
        return new vscode.SnippetString(text);
    }


    var snippet = text + "(";
    var doc = null;
    for (var func of funcDoc) {
        if (func.name === text) {
            doc = func;
            break;
        }
    }
    if (doc === null) {
        console.log("Could not find documentation for function "+text);
        return new vscode.SnippetString(text+"()");
    }
    for (var i = 0; i < doc.args.length; i++) {
        var type = doc.args[i].type;
        snippet += getSnippetFromArg(i+1, doc.args[i]);

        if (i < doc.args.length-1) {
            snippet += ", ";
        }
    }
    snippet += ")";
    //console.log("Snippet for "+text+" is "+snippet);
    return new vscode.SnippetString(snippet);
    
}

function getSnippetForMetaRuleParam(param) {

    if (param === "@Rule") {
        return 'Rule "$0"';
    }

    var result = param.substring(1) + " ${1|";
    var ruleParam = null;
    for (metaRuleParam of metaRuleParams) {
        if (metaRuleParam.name === param) {
            ruleParam = metaRuleParam;
            break;
        }
    }
    if (ruleParam === null) {
        console.log("Could not find param "+param);
        return param;
    }
    result += ruleParam.values.join(",");
    result += "|}$0";
    return result;
}

function getSnippetFromArg(index, arg) {

    var result = "";

    if ([
        "PLAYER",
        "POSITION",
        "ANY",
        "NUMBER",
        "TEAM",
        "BOOLEAN",
        "VECTOR",
        "HERO",
        "DIRECTION",
    ].indexOf(arg.type) > -1) {
        //Generic type (not an enum)
        return "${"+index+":"+getSuitableArgName(arg.name)+"}";
    } else {
        //Enum
        var constTypeMatch = null;
        for (var constType of constTypes) {
            if (constType.name === arg.type) {
                constTypeMatch = constType;
                break;
            }
        }
        if (constTypeMatch === null) {
            console.log("Could not find arg type "+arg.type);
            return "${"+index+":"+getSuitableArgName(arg.name)+"}";
        }
        return constTypeMatch.opy+"."+"${"+index+"|"+constTypeMatch.values.map(x => x.replace(/ /g, "_")).join(",")+"|}";

    }

}

function getSuitableArgName(arg) {
    arg = arg.toLowerCase()
    if (arg === "visible to") {
        arg = "visibility";
    }
    arg = arg.replace(/ /g, "_");
    return arg;
}

module.exports = {
	activate,
	deactivate
}

} catch (e) {
    console.log(e);
}