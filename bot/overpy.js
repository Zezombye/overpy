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

var actionKw = 
//begin-json
[
    {
        "opy": "return",
        "description": "Stops execution of the action list.",
        "args": null,
        "en-US": "Abort",
        "guid": "00000000BB09",
        "es-MX": "Abortar",
        "fr-FR": "Interrompre",
        "ja-JP": "中止",
        "pt-BR": "Anular",
        "zh-CN": "中止"
    },
    {
        "opy": "_abortIf",
        "description": "Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the execution is stopped.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ],
        "en-US": "Abort If",
        "guid": "00000000BB04",
        "es-MX": "Abortar si",
        "fr-FR": "Interrompre si",
        "ja-JP": "中止する条件",
        "pt-BR": "Anular se",
        "zh-CN": "根据条件中止"
    },
    {
        "opy": "_abortIfConditionIsFalse",
        "description": "Stops execution of the action list if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action.",
        "args": [],
        "en-US": "Abort If Condition Is False",
        "guid": "00000000BB02",
        "es-MX": "Abortar si la condición es falsa",
        "fr-FR": "Interrompre si la condition est fausse",
        "ja-JP": "条件が「FALSE」の場合中止",
        "pt-BR": "Anular se a Condição for Falsa",
        "zh-CN": "如条件为“假”则中止"
    },
    {
        "opy": "_abortIfConditionIsTrue",
        "description": "Stops execution of the action list if all conditions in the condition list are true. If any are false, execution continues with the next action.",
        "args": [],
        "en-US": "Abort If Condition Is True",
        "guid": "00000000BB03",
        "es-MX": "Abortar si la condición es verdadera",
        "fr-FR": "Interrompre si la condition est vraie",
        "ja-JP": "条件が「TRUE」の場合中止",
        "pt-BR": "Anular se a Condição for Verdadeira",
        "zh-CN": "如条件为”真“则中止"
    },
    {
        "opy": "_&allowButton",
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
        ],
        "en-US": "Allow Button",
        "guid": "00000000B9D0",
        "es-MX": "Habilitar botón",
        "fr-FR": "Autoriser un bouton",
        "ja-JP": "ボタンを有効化",
        "pt-BR": "Permitir Botão",
        "zh-CN": "可用按钮"
    },
    {
        "opy": "_&applyImpulse",
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
        ],
        "en-US": "Apply Impulse",
        "guid": "0000000078F6",
        "es-MX": "Aplicar impulso",
        "fr-FR": "Appliquer une impulsion",
        "ja-JP": "推進力を適用",
        "pt-BR": "Aplicar Impulso",
        "zh-CN": "施加推力"
    },
    {
        "opy": "bigMessage",
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
        ],
        "en-US": "Big Message",
        "guid": "00000000BA88",
        "es-MX": "Mensaje grande",
        "fr-FR": "Message en grand",
        "ja-JP": "大きなメッセージ",
        "pt-BR": "Mensagem Grande",
        "zh-CN": "大字体信息"
    },
    {
        "opy": "_chaseGlobalVariableAtRate",
        "description": "Gradually modifies the value of a global variable at a specific rate. (A global variable is a variable that belongs to the game itself.)",
        "args": [
            {
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
        ],
        "en-US": "Chase Global Variable At Rate",
        "guid": "00000000B840",
        "es-MX": "Seguir variable global según la tasa",
        "fr-FR": "Modifier une variable globale selon une cadence",
        "ja-JP": "グローバル変数を特定のレートで追跡",
        "pt-BR": "Acompanhar Variável Global na Medida",
        "zh-CN": "追踪全局变量频率"
    },
    {
        "opy": "_chaseGlobalVariableOverTime",
        "description": "Gradually modifies the value of a global variable over time. (A global variable is a variable that belongs to the game itself.)",
        "args": [
            {
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
        ],
        "en-US": "Chase Global Variable Over Time",
        "guid": "00000000B842",
        "es-MX": "Seguir variable global con el tiempo",
        "fr-FR": "Modifier une variable globale sur la durée",
        "ja-JP": "グローバル変数を継続的に追跡",
        "pt-BR": "Acompanhar Variável Global ao Longo do Tempo",
        "zh-CN": "持续追踪全局变量"
    },
    {
        "opy": "_chasePlayerVariableAtRate",
        "description": "Gradually modifies the value of a player variable at a specific rate. (A player variable is a variable that belongs to a specific player.)",
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
                "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
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
        ],
        "en-US": "Chase Player Variable At Rate",
        "guid": "00000000B83F",
        "es-MX": "Seguir variable de jugador según la tasa",
        "fr-FR": "Modifier une variable de joueur selon une cadence",
        "ja-JP": "プレイヤー変数を特定のレートで追跡",
        "pt-BR": "Acompanhar Variável de Jogador na Medida",
        "zh-CN": "追踪玩家变量频率"
    },
    {
        "opy": "_chasePlayerVariableOverTime",
        "description": "Gradually modifies the value of a player variable over time. (A player variable is a variable that belongs to a specific player.)",
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
                "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "CHASE TIME REEVALUATION",
                "default": "DESTINATION AND DURATION"
            }
        ],
        "en-US": "Chase Player Variable Over Time",
        "guid": "00000000B841",
        "es-MX": "Seguir variable del jugador con el tiempo",
        "fr-FR": "Modifier une variable de joueur sur la durée",
        "ja-JP": "プレイヤー変数を継続的に追跡",
        "pt-BR": "Acompanhar Variável de Jogador ao Longo do Tempo",
        "zh-CN": "持续追踪玩家变量"
    },
    {
        "opy": "_&clearStatusEffect",
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
        ],
        "en-US": "Clear Status",
        "guid": "00000000B595",
        "es-MX": "Eliminar estado",
        "fr-FR": "Effacer le statut",
        "ja-JP": "ステータスをクリア",
        "pt-BR": "Apagar Status",
        "zh-CN": "清除状态"
    },
    {
        "opy": "_&communicate",
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
        ],
        "en-US": "Communicate",
        "guid": "00000000B9E3",
        "es-MX": "Comunicar",
        "fr-FR": "Communiquer",
        "ja-JP": "コミュニケーション",
        "pt-BR": "Comunicar",
        "zh-CN": "交流"
    },
    {
        "opy": "createBeam",
        "description": "Creates an in-world beam effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
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
                "type": "BEAM EFFECT",
                "default": "GOOD BEAM"
            },
            {
                "name": "START POSITION",
                "description": "The effect's start position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "EVENT PLAYER"
            },
            {
                "name": "END POSITION",
                "description": "The effect's end position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "POSITION",
                "default": "EVENT PLAYER"
            },
            {
                "name": "COLOR",
                "description": "The color of the beam to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects. Only the \"good\" and \"bad\" beam effects can have color applied.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The effect will keep asking for and using new values from reevaluated inputs.",
                "type": "EFFECT REEVALUATION",
                "default": "VISIBLE TO, POSITION, AND RADIUS"
            }
        ],
        "en-US": "Create Beam Effect",
        "guid": "00000000CE80",
        "es-MX": "Crear efecto de rayo",
        "fr-FR": "Créer un effet de rayon",
        "ja-JP": "ビーム・エフェクトを作成",
        "pl-PL": "Stwórz efekt wiązki",
        "pt-BR": "Criar Efeito de Feixe",
        "zh-CN": "创建光束效果"
    },
    {
        "opy": "createDummy",
        "description": "Adds a new bot to the specified slot on the specified team so long as the slot is available. This bot will only move, fire, or use abilities if executing workshop actions.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero that the bot will be. If more than one hero is provided, one will be chosen at random.",
                "type": "HERO",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team on which to create the bot. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "SLOT",
                "description": "The player slot which will receive the bot (-1 for first available slot). Up to 6 bots may be added to each team, or 12 bots to the free-for-all team, regardless of lobby settings.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "POSITION",
                "description": "The initial position where the bot will appear.",
                "type": "POSITION",
                "default": "VECTOR"
            },
            {
                "name": "FACING",
                "description": "The initial direction that the bot will face.",
                "type": "DIRECTION",
                "default": "VECTOR"
            }
        ],
        "en-US": "Create Dummy Bot",
        "guid": "00000000CA6A",
        "es-MX": "Crear robot de entrenamiento",
        "fr-FR": "Créer une I.A.",
        "it-IT": "Crea bot di prova",
        "ja-JP": "ダミーボットを作成",
        "pl-PL": "Stwórz atrapę bota",
        "pt-BR": "Criar Bot",
        "zh-CN": "生成机器人"
    },
    {
        "opy": "createEffect",
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
        ],
        "en-US": "Create Effect",
        "guid": "00000000B8AF",
        "es-MX": "Crear efecto",
        "fr-FR": "Créer un effet",
        "ja-JP": "エフェクトを作成",
        "pt-BR": "Criar Efeito",
        "zh-CN": "创建效果"
    },
    {
        "opy": "_hudText",
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
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        "en-US": "Create HUD Text",
        "guid": "00000000BAD3",
        "es-MX": "Crear texto del HUD",
        "fr-FR": "Créer du texte d’interface",
        "ja-JP": "HUDテキストを作成",
        "pt-BR": "Criar Texto de HUD",
        "zh-CN": "创建HUD文本"
    },
    {
        "opy": "createIcon",
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
        ],
        "en-US": "Create Icon",
        "guid": "00000000ACFA",
        "es-MX": "Crear ícono",
        "fr-FR": "Créer une icône",
        "ja-JP": "アイコンを作成",
        "pt-BR": "Criar Ícone",
        "zh-CN": "创建图标"
    },
    {
        "opy": "createInWorldText",
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
            },
            {
                "name": "TEXT COLOR",
                "description": "Specifies the color of the in-world text to use.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        "en-US": "Create In-World Text",
        "guid": "00000000BAD0",
        "es-MX": "Crear texto dentro del mundo",
        "fr-FR": "Créer du texte en jeu",
        "ja-JP": "ワールド内テキストを作成",
        "pt-BR": "Criar Texto no Mundo",
        "zh-CN": "创建地图文本"
    },
    {
        "guid": "000000007876",
        "opy": "damage",
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
        ],
        "en-US": "Damage",
        "es-MX": "Infligir daño",
        "fr-FR": "Infliger des dégâts",
        "ja-JP": "ダメージ",
        "pt-BR": "Dano",
        "zh-CN": "伤害"
    },
    {
        "opy": "declareDraw",
        "description": "Instantly ends the match in a draw. This action has no effect in free-for-all modes.",
        "args": [],
        "en-US": "Declare Match Draw",
        "guid": "00000000B9F1",
        "es-MX": "Declarar empate de la partida",
        "fr-FR": "Déclarer le match nul",
        "ja-JP": "マッチの引き分けを宣言",
        "pt-BR": "Declarar Empate na Partida",
        "zh-CN": "宣布比赛为平局"
    },
    {
        "opy": "declarePlayerVictory",
        "description": "Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The winning player.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Declare Player Victory",
        "guid": "00000000AD30",
        "es-MX": "Declarar victoria del jugador",
        "fr-FR": "Déclarer la victoire d’un joueur",
        "ja-JP": "チームの勝利を宣言",
        "pt-BR": "Declarar Vitória do Jogador",
        "zh-CN": "宣告玩家胜利"
    },
    {
        "opy": "declareRoundVictory",
        "description": "Declare a team as the current round winner. This only works in the control and elimination game modes",
        "args": [
            {
                "name": "ROUND WINNING TEAM",
                "description": "Round winning team",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Declare Round Victory",
        "guid": "00000000BF93",
        "es-MX": "Declarar victoria de la ronda",
        "fr-FR": "Déclarer la victoire de la manche",
        "ja-JP": "ラウンドの勝利を宣言",
        "pt-BR": "Declarar Vitória na Rodada",
        "zh-CN": "宣告回合胜利"
    },
    {
        "opy": "declareTeamVictory",
        "description": "Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The winning team.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Declare Team Victory",
        "guid": "0000000078FD",
        "es-MX": "Declarar la victoria del equipo",
        "fr-FR": "Déclarer la victoire d’une équipe",
        "ja-JP": "チームの勝利を宣言",
        "pt-BR": "Declarar Vitória da Equipe",
        "zh-CN": "宣告队伍胜利"
    },
    {
        "opy": "destroyAllDummies()",
        "description": "Removes all dummy bots from the match.",
        "args": [],
        "en-US": "Destroy All Dummy Bots",
        "guid": "00000000D1D4",
        "es-MX": "Destruir todos los robots de entrenamiento",
        "fr-FR": "Détruire toutes les I.A.",
        "it-IT": "Distrugge tutti i bot di prova.",
        "ja-JP": "すべてのダミーボットを破棄",
        "pt-BR": "Destruir Todos os Bots",
        "zh-CN": "移除所有机器人"
    },
    {
        "opy": "destroyAllEffects()",
        "description": "Destroys all effect entities created by create effect.",
        "args": [],
        "en-US": "Destroy All Effects",
        "guid": "00000000B8AD",
        "es-MX": "Destruir todos los efectos",
        "fr-FR": "Détruire tous les effets",
        "ja-JP": "すべてのエフェクトを破棄",
        "pt-BR": "Destruir Todos os Efeitos",
        "zh-CN": "消除所有效果"
    },
    {
        "opy": "destroyAllHudTexts()",
        "description": "Destroys all hud text that was created by the create hud text action.",
        "args": [],
        "en-US": "Destroy All HUD Text",
        "guid": "00000000BAD1",
        "es-MX": "Destruir todo el texto del HUD",
        "fr-FR": "Détruire tous les textes d’interface",
        "ja-JP": "すべてのHUDテキストを破棄",
        "pt-BR": "Destruir Todo o Texto de HUD",
        "zh-CN": "消除所有HUD文本"
    },
    {
        "opy": "destroyAllIcons()",
        "description": "Destroys all icon entities created by create icon.",
        "args": [],
        "en-US": "Destroy All Icons",
        "guid": "00000000B8AC",
        "es-MX": "Destruir todos los íconos",
        "fr-FR": "Détruire toutes les icônes",
        "ja-JP": "すべてのアイコンを破棄",
        "pt-BR": "Destruir Todos os Ícones",
        "zh-CN": "消除所有图标"
    },
    {
        "opy": "destroyAllInWorldText()",
        "description": "Destroys all in-world text created by create in-world text.",
        "args": [],
        "en-US": "Destroy All In-World Text",
        "guid": "00000000B8AB",
        "es-MX": "Destruir todo el texto dentro del mundo",
        "fr-FR": "Détruire tous les textes en jeu",
        "ja-JP": "すべてのワールド内テキストを破棄",
        "pt-BR": "Destruir Todo o Texto no Mundo",
        "zh-CN": "消除所有地图文本"
    },
    {
        "opy": "destroyDummy",
        "description": "Removes the specified dummy bot from the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team to remove the dummy bot from. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "TEAM",
                "default": "TEAM"
            },
            {
                "name": "SLOT",
                "description": "The slot to remove the dummy bot from.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Destroy Dummy Bot",
        "guid": "00000000CC21",
        "es-MX": "Destruir robot de entrenamiento",
        "fr-FR": "Détruire une I.A.",
        "it-IT": "Distruggi bot di prova",
        "ja-JP": "ダミーボットを破壊する",
        "pl-PL": "Zniszcz atrapę bota",
        "pt-BR": "Destruir Bot",
        "zh-CN": "移除机器人"
    },
    {
        "opy": "destroyEffect",
        "description": "Destroys an effect entity that was created by create effect.",
        "args": [
            {
                "name": "ENTITY",
                "description": "Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "PLAYER",
                "default": "LAST CREATED ENTITY"
            }
        ],
        "en-US": "Destroy Effect",
        "guid": "00000000B8AE",
        "es-MX": "Destruir efecto",
        "fr-FR": "Détruire un effet",
        "ja-JP": "エフェクトを破棄",
        "pt-BR": "Destruir Efeito",
        "zh-CN": "消除效果"
    },
    {
        "opy": "destroyHudText",
        "description": "Destroys hud text that was created by create hud text.",
        "args": [
            {
                "name": "TEXT ID",
                "description": "Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST TEXT ID"
            }
        ],
        "en-US": "Destroy HUD Text",
        "guid": "00000000BAD2",
        "es-MX": "Destruir texto del HUD",
        "fr-FR": "Détruire du texte d’interface",
        "ja-JP": "HUDテキストを破棄",
        "pt-BR": "Destruir Texto de HUD",
        "zh-CN": "消除HUD文本"
    },
    {
        "opy": "destroyIcon",
        "description": "Destroys an icon entity that was created by create icon.",
        "args": [
            {
                "name": "ENTITY",
                "description": "Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "PLAYER",
                "default": "LAST CREATED ENTITY"
            }
        ],
        "en-US": "Destroy Icon",
        "guid": "00000000B4E7",
        "es-MX": "Destruir ícono",
        "fr-FR": "Détruire une icône",
        "ja-JP": "アイコンを破棄",
        "pt-BR": "Destruir Ícone",
        "zh-CN": "消除图标"
    },
    {
        "opy": "destroyInWorldText",
        "description": "Destroys in-world text that was created by create in-world text.",
        "args": [
            {
                "name": "TEXT ID",
                "description": "Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST TEXT ID"
            }
        ],
        "en-US": "Destroy In-World Text",
        "guid": "00000000BACF",
        "es-MX": "Destruir texto dentro del mundo",
        "fr-FR": "Détruire du texte en jeu",
        "ja-JP": "ワールド内テキストを破棄",
        "pt-BR": "Destruir Texto no Mundo",
        "zh-CN": "消除地图文本"
    },
    {
        "opy": "disableAnnouncer()",
        "description": "Disables game mode announcements from the announcer until reenabled or the match ends.",
        "args": [],
        "en-US": "Disable Built-In Game Mode Announcer",
        "guid": "00000000C3F8",
        "es-MX": "Deshabilitar el presentador integrado del modo de juego",
        "fr-FR": "Désactiver l’annonceur prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの通知を無効化",
        "pt-BR": "Desativar Narração Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设通告模式"
    },
    {
        "opy": "disableGamemodeCompletion()",
        "description": "Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.",
        "args": [],
        "en-US": "Disable Built-In Game Mode Completion",
        "guid": "00000000AD2D",
        "es-MX": "Deshabilitar la finalización integrada del modo de juego",
        "fr-FR": "Désactiver l’accomplissement prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準完了を無効化",
        "pt-BR": "Desativar Conclusão Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设完成条件"
    },
    {
        "opy": "disableMusic()",
        "description": "Disables all game mode music until reenabled or the match ends.",
        "args": [],
        "en-US": "Disable Built-In Game Mode Music",
        "guid": "00000000C3F4",
        "es-MX": "Deshabilitar la música integrada del modo de juego",
        "fr-FR": "Désactiver la musique prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードのBGMを無効化",
        "pt-BR": "Desativar Música Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设音乐模式"
    },
    {
        "opy": "_&disableRespawn",
        "description": "Disables automatic respawning for one or more players, only allowing respawning by scripting commands.",
        "args": [
            {
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Disable Built-In Game Mode Respawning",
        "guid": "00000000B87A",
        "es-MX": "Deshabilitar la reaparición integrada del modo de juego",
        "fr-FR": "Désactiver la réapparition prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準リスポーンを無効化",
        "pt-BR": "Desativar Ressurgimento Integrado ao Modo de Jogo",
        "zh-CN": "关闭游戏预设重生模式"
    },
    {
        "opy": "disableScoring()",
        "description": "Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.",
        "args": [],
        "en-US": "Disable Built-In Game Mode Scoring",
        "guid": "00000000ABFA",
        "es-MX": "Deshabilitar el sistema de puntuación integrado del modo de juego",
        "fr-FR": "Désactiver le calcul des points prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準スコアリングを無効化",
        "pt-BR": "Desativar Pontuação Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设计分模式"
    },
    {
        "opy": "_&disableDeathSpectateAllPlayers",
        "description": "Undoes the effect of the enable death spectate all players action for or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose default death spectate behavior is restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Disable Death Spectate All Players",
        "guid": "00000000B9B5",
        "es-MX": "Deshabilitar la observación de todos los jugadores como espectador muerto",
        "fr-FR": "Empêcher d’observer n’importe qui après la mort",
        "ja-JP": "観戦時に全プレイヤー選択可能を無効化",
        "pt-BR": "Desativar Visualização de Todos os Jogadores na Morte",
        "zh-CN": "对所有玩家禁用死亡回放"
    },
    {
        "opy": "_&disableDeathSpectateTargetHud",
        "description": "Undoes the effect of the enable death spectate target hud action for or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will revert to seeing their own hud while death spectating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Disable Death Spectate Target HUD",
        "guid": "00000000B9B3",
        "es-MX": "Deshabilitar la observación del HUD objetivo como espectador muerto",
        "fr-FR": "Empêcher de voir l’interface de la cible après la mort",
        "ja-JP": "観戦中のターゲットHUD表示を無効化",
        "pt-BR": "Desativar HUD do Alvo de Visualização na Morte",
        "zh-CN": "禁用死亡回放时目标的HUD"
    },
    {
        "opy": "_&disallowButton",
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
        ],
        "en-US": "Disallow Button",
        "guid": "00000000B9CF",
        "es-MX": "Deshabilitar botón",
        "fr-FR": "Interdire le bouton",
        "ja-JP": "ボタンを無効化",
        "pt-BR": "Proibir Botão",
        "zh-CN": "禁用按钮"
    },
    {
        "opy": "enableAnnouncer()",
        "description": "Undoes the effect of the disable built-in game mode announcer action.",
        "args": [],
        "en-US": "Enable Built-In Game Mode Announcer",
        "guid": "00000000C3FA",
        "es-MX": "Habilitar presentador integrado del modo de juego",
        "fr-FR": "Activer l’annonceur prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの通知を有効化",
        "pt-BR": "Ativar Narração Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设通告模式"
    },
    {
        "opy": "enableGamemodeCompletion()",
        "description": "Undoes the effect of the disable built-in game mode completion action.",
        "args": [],
        "en-US": "Enable Built-In Game Mode Completion",
        "guid": "00000000AD2F",
        "es-MX": "Habilitar la finalización integrada del modo de juego",
        "fr-FR": "Activer l’accomplissement prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準完了を有効化",
        "pt-BR": "Ativar Conclusão Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设完成条件"
    },
    {
        "opy": "enableMusic()",
        "description": "Undoes the effect of the disable built-in game mode music action.",
        "args": [],
        "en-US": "Enable Built-In Game Mode Music",
        "guid": "00000000C3F6",
        "es-MX": "Habilitar la música integrada del modo de juego",
        "fr-FR": "Activer la musique prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードのBGMを有効化",
        "pt-BR": "Ativar Música Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设音乐模式"
    },
    {
        "opy": "_&enableRespawn",
        "description": "Undoes the effect of the disable built-in game mode respawning action for one or more players.",
        "args": [
            {
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Enable Built-In Game Mode Respawning",
        "guid": "00000000B878",
        "es-MX": "Habilitar la reaparición integrada del modo de juego",
        "fr-FR": "Activer la réapparition prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準リスポーンを有効化",
        "pt-BR": "Ativar Ressurgimento Integrado ao Modo de Jogo",
        "zh-CN": "开启游戏预设重生模式"
    },
    {
        "opy": "enableScoring()",
        "description": "Undoes the effect of the disable built-in game mode scoring action.",
        "args": [],
        "en-US": "Enable Built-In Game Mode Scoring",
        "guid": "00000000ABF8",
        "es-MX": "Habilitar el sistema de puntuación integrado del modo de juego",
        "fr-FR": "Activer le calcul des points prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準スコアリングを有効化",
        "pt-BR": "Ativar Pontuação Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设计分模式"
    },
    {
        "opy": "_&enableDeathSpectateAllPlayers",
        "description": "Allows one or more players to spectate all players when dead, as opposed to only allies.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be allowed to spectate all players.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Enable Death Spectate All Players",
        "guid": "00000000B9AE",
        "es-MX": "Habilitar la observación de todos los jugadores como espectador muerto",
        "fr-FR": "Permettre d’observer n’importe qui après la mort",
        "ja-JP": "観戦時に全プレイヤー選択可能を有効化",
        "pt-BR": "Ativar Visualização de Todos os Jogadores na Morte",
        "zh-CN": "对所有玩家启用死亡回放"
    },
    {
        "opy": "_&enableDeathSpectateTargetHud",
        "description": "Causes one or more players to see their spectate target's hud instead of their own while death spectating.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will begin seeing their spectate targets hud while death spectating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Enable Death Spectate Target HUD",
        "guid": "00000000B9B4",
        "es-MX": "Habilitar la observación del HUD objetivo como espectador muerto",
        "fr-FR": "Permettre de voir l’interface de la cible après la mort",
        "ja-JP": "観戦中のターゲットHUD表示を有効化",
        "pt-BR": "Ativar HUD do Alvo de Visualização na Morte",
        "zh-CN": "启用死亡回放时目标的HUD"
    },
    {
        "opy": "goToAssembleHeroes()",
        "description": "Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.",
        "args": [],
        "en-US": "Go To Assemble Heroes",
        "guid": "00000000C5B5",
        "es-MX": "Ir a Forma tu equipo",
        "fr-FR": "Aller à Choisissez vos héros",
        "ja-JP": "「ヒーローを編成しよう」に移行",
        "pt-BR": "Ir para Escolher Heróis",
        "zh-CN": "前往集结英雄"
    },
    {
        "guid": "000000007875",
        "opy": "heal",
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
        ],
        "en-US": "Heal",
        "es-MX": "Sanar",
        "fr-FR": "Soigner",
        "ja-JP": "回復",
        "pt-BR": "Cura",
        "zh-CN": "治疗"
    },
    {
        "guid": "000000007877",
        "opy": "kill",
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
        ],
        "en-US": "Kill",
        "es-MX": "Matar",
        "fr-FR": "Tuer",
        "ja-JP": "キル",
        "pt-BR": "Abater",
        "zh-CN": "击杀"
    },
    {
        "guid": "0000000078F5",
        "opy": "_loop",
        "description": "Restarts the action list from the beginning. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [],
        "en-US": "Loop",
        "es-MX": "Bucle",
        "fr-FR": "Boucle",
        "ja-JP": "ループ",
        "pt-BR": "Gerar Loop",
        "zh-CN": "循环"
    },
    {
        "opy": "_loopIf",
        "description": "Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the loop will occur.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ],
        "en-US": "Loop If",
        "guid": "00000000BB06",
        "es-MX": "Repetir si",
        "fr-FR": "Boucle si",
        "ja-JP": "ループする条件",
        "pt-BR": "Gerar Loop se",
        "zh-CN": "根据条件循环"
    },
    {
        "opy": "_loopIfConditionIsFalse",
        "description": "Restarts the action list from the beginning if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [],
        "en-US": "Loop If Condition Is False",
        "guid": "00000000BB05",
        "es-MX": "Repetir si la condición es falsa",
        "fr-FR": "Boucle si la condition est fausse",
        "ja-JP": "条件が「FALSE」の場合ループ",
        "pt-BR": "Gerar Loop se a Condição for Falsa",
        "zh-CN": "如条件为“假”则循环"
    },
    {
        "opy": "_loopIfConditionIsTrue",
        "description": "Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [],
        "en-US": "Loop If Condition Is True",
        "guid": "000000007874",
        "es-MX": "Repetir si la condición es verdadera",
        "fr-FR": "Boucle si la condition est vraie",
        "ja-JP": "条件が「TRUE」の場合ループ",
        "pt-BR": "Gerar Loop se a Condição for Verdadeira",
        "zh-CN": "如条件为”真“则循环"
    },
    {
        "opy": "_modifyGlobalVar",
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
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ],
        "en-US": "Modify Global Variable",
        "guid": "00000000786E",
        "es-MX": "Modificar variable global",
        "fr-FR": "Modifier une variable globale",
        "ja-JP": "グローバル変数を変更",
        "pt-BR": "Modificar Variável Global",
        "zh-CN": "修改全局变量"
    },
    {
        "opy": "_modifyGlobalVarAtIndex",
        "description": "Modifies the value of a global variable at an index, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The global variable to modify.",
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
        ],
        "en-US": "Modify Global Variable At Index",
        "guid": "00000000C7E1",
        "es-MX": "Modificar variable global según el índice",
        "fr-FR": "Modifier une variable globale à l’index",
        "ja-JP": "インデックスのグローバル変数を変更",
        "pt-BR": "Modificar Variável Global no Índice",
        "zh-CN": "在索引处修改全局变量"
    },
    {
        "opy": "_&addToScore",
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
        ],
        "en-US": "Modify Player Score",
        "guid": "000000007873",
        "es-MX": "Modificar puntuación del jugador",
        "fr-FR": "Modifier le score d’un joueur",
        "ja-JP": "プレイヤー・スコアを変更",
        "pt-BR": "Modificar Pontuação do Jogador",
        "zh-CN": "修改玩家分数"
    },
    {
        "opy": "_modifyPlayerVar",
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
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ],
        "en-US": "Modify Player Variable",
        "guid": "00000000786F",
        "es-MX": "Modificar variable de jugador",
        "fr-FR": "Modifier une variable de joueur",
        "ja-JP": "プレイヤー変数を変更",
        "pt-BR": "Modificar Variável de Jogador",
        "zh-CN": "修改玩家变量"
    },
    {
        "opy": "_modifyPlayerVarAtIndex",
        "description": "Modifies the value of a player variable at an index, which is a variable that belongs to a specific player.",
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
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "NUMBER",
                "default": "NUMBER"
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
        ],
        "en-US": "Modify Player Variable At Index",
        "guid": "00000000C7DF",
        "es-MX": "Modificar variable de jugador según el índice",
        "fr-FR": "Modifier une variable de joueur à l’index",
        "ja-JP": "インデックスのプレイヤー変数を変更",
        "pt-BR": "Modificar Variável de Jogador no Índice",
        "zh-CN": "在索引处修改玩家变量"
    },
    {
        "opy": "addToTeamScore",
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
        ],
        "en-US": "Modify Team Score",
        "guid": "00000000BB24",
        "es-MX": "Modificar puntuación del equipo",
        "fr-FR": "Modifier le score de l’équipe",
        "ja-JP": "チーム・スコアを変更",
        "pt-BR": "Modificar Pontuação da Equipe",
        "zh-CN": "修改队伍分数"
    },
    {
        "opy": "pauseMatchTime()",
        "description": "Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.",
        "args": [],
        "en-US": "Pause Match Time",
        "guid": "00000000B9EF",
        "es-MX": "Pausar tiempo de la partida",
        "fr-FR": "Mettre en pause le temps de jeu",
        "ja-JP": "マッチ時間をポーズする",
        "pt-BR": "Pausar Tempo da Partida",
        "zh-CN": "比赛时间暂停"
    },
    {
        "opy": "playEffect",
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
        ],
        "en-US": "Play Effect",
        "guid": "00000000BB27",
        "es-MX": "Reproducir efecto",
        "fr-FR": "Jouer un effet",
        "ja-JP": "エフェクトを再生",
        "pt-BR": "Reproduzir Efeito",
        "zh-CN": "播放效果"
    },
    {
        "opy": "_&preloadHero",
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
        ],
        "en-US": "Preload Hero",
        "guid": "00000000B9B1",
        "es-MX": "Precargar héroe",
        "fr-FR": "Précharger un héros",
        "ja-JP": "ヒーローをプリロード",
        "pt-BR": "Pré-carregar Herói",
        "zh-CN": "预加载英雄"
    },
    {
        "opy": "_&forceButtonPress",
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
        ],
        "en-US": "Press Button",
        "guid": "0000000078FB",
        "es-MX": "Presionar botón",
        "fr-FR": "Appuyer sur un bouton",
        "ja-JP": "ボタンを押してください",
        "pt-BR": "Pressionar Botão",
        "zh-CN": "按下按键"
    },
    {
        "opy": "_&resetHeroAvailability",
        "description": "Restores the list of heroes available to one or more players to the list specified by the game settings. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose hero list is being reset.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Reset Player Hero Availability",
        "guid": "00000000BA5A",
        "es-MX": "Restablecer disponibilidad de héroes de los jugadores",
        "fr-FR": "Réinitialiser la disponibilité du héros pour un joueur",
        "ja-JP": "プレイヤーが使用できるヒーローをリセット",
        "pt-BR": "Redefinir Disponibilidade de Heróis para o Jogador",
        "zh-CN": "重置玩家英雄可选状态"
    },
    {
        "opy": "_&respawn",
        "description": "Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to respawn.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Respawn",
        "guid": "0000000078FC",
        "es-MX": "Reaparecer",
        "fr-FR": "Réapparaître",
        "ja-JP": "リスポーン",
        "pt-BR": "Ressurgir",
        "zh-CN": "重生"
    },
    {
        "guid": "000000007878",
        "opy": "_&resurrect",
        "description": "Instantly resurrects one or more players at the location they died with no transition.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be resurrected.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Resurrect",
        "es-MX": "Resucitar",
        "fr-FR": "Ressusciter",
        "ja-JP": "蘇生",
        "pt-BR": "Ressuscitar",
        "zh-CN": "重生"
    },
    {
        "opy": "_&setAbility1Enabled",
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
        ],
        "en-US": "Set Ability 1 Enabled",
        "guid": "00000000B9B8",
        "es-MX": "Establecer habilidad 1 habilitada",
        "fr-FR": "Définir l’activation de la capacité 1",
        "ja-JP": "アビリティ1を有効化",
        "pt-BR": "Definir Habilidade 1 como Ativada",
        "zh-CN": "设置启用技能 1"
    },
    {
        "opy": "_&setAbility2Enabled",
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
        ],
        "en-US": "Set Ability 2 Enabled",
        "guid": "00000000B9B7",
        "es-MX": "Establecer habilidad 2 habilitada",
        "fr-FR": "Définir l’activation de la capacité 2",
        "ja-JP": "アビリティ2を有効化",
        "pt-BR": "Definir Habilidade 2 como Ativada",
        "zh-CN": "设置启用技能 2"
    },
    {
        "opy": "_&setAimSpeed",
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
        ],
        "en-US": "Set Aim Speed",
        "guid": "00000000C364",
        "es-MX": "Establecer velocidad al apuntar",
        "fr-FR": "Définir la vitesse de visée",
        "ja-JP": "照準速度を設定",
        "pt-BR": "Definir Velocidade de Mira",
        "zh-CN": "设置瞄准速度"
    },
    {
        "opy": "_&setDamageDealt",
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
        ],
        "en-US": "Set Damage Dealt",
        "guid": "00000000B995",
        "es-MX": "Establecer daño infligido",
        "fr-FR": "Définir les dégâts infligés",
        "ja-JP": "与えるダメージを設定",
        "pt-BR": "Definir Dano Causado",
        "zh-CN": "设置造成伤害"
    },
    {
        "opy": "_&setDamageReceived",
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
        ],
        "en-US": "Set Damage Received",
        "guid": "00000000B997",
        "es-MX": "Establecer daño recibido",
        "fr-FR": "Définir les dégâts subis",
        "ja-JP": "受けるダメージを設定",
        "pt-BR": "Definir Dano Recebido",
        "zh-CN": "设置受到伤害"
    },
    {
        "opy": "_&setFacing",
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
        ],
        "en-US": "Set Facing",
        "guid": "00000000BB29",
        "es-MX": "Establecer orientación",
        "fr-FR": "Définir la direction du regard",
        "ja-JP": "向き変更を設定",
        "pt-BR": "Definir Encarar",
        "zh-CN": "设置朝向"
    },
    {
        "opy": "_setGlobalVar",
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
        ],
        "en-US": "Set Global Variable",
        "guid": "0000000077DE",
        "es-MX": "Establecer variable global",
        "fr-FR": "Définir une variable globale",
        "ja-JP": "グローバル変数を設定",
        "pt-BR": "Definir Variável Global",
        "zh-CN": "设置全局变量"
    },
    {
        "opy": "_setGlobalVarAtIndex",
        "description": "Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.",
        "args": [
            {
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
        ],
        "en-US": "Set Global Variable At Index",
        "guid": "00000000BBAA",
        "es-MX": "Establecer variable global según el índice",
        "fr-FR": "Définir une variable globale à l’index",
        "ja-JP": "インデックスのグローバル変数を設定",
        "pt-BR": "Definir Variável Global no Índice",
        "zh-CN": "在索引处设置全局变量"
    },
    {
        "opy": "_&setGravity",
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
        ],
        "en-US": "Set Gravity",
        "guid": "00000000B999",
        "es-MX": "Establecer gravedad",
        "fr-FR": "Définir la gravité",
        "ja-JP": "重力を設定",
        "pt-BR": "Definir Gravidade",
        "zh-CN": "设置引力"
    },
    {
        "opy": "_&setHealingDealt",
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
        ],
        "en-US": "Set Healing Dealt",
        "guid": "00000000B991",
        "es-MX": "Establecer sanación realizada",
        "fr-FR": "Définir les soins prodigués",
        "ja-JP": "与える回復を設定",
        "pt-BR": "Definir Cura Realizada",
        "zh-CN": "设置造成治疗"
    },
    {
        "opy": "_&setHealingReceived",
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
        ],
        "en-US": "Set Healing Received",
        "guid": "00000000B993",
        "es-MX": "Establecer sanación recibida",
        "fr-FR": "Définir les soins reçus",
        "ja-JP": "受けるヒール量を設定",
        "pt-BR": "Definir Cura Recebida",
        "zh-CN": "设置受到治疗"
    },
    {
        "opy": "_&setInvisibility",
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
        ],
        "en-US": "Set Invisible",
        "guid": "00000000B9ED",
        "es-MX": "Establecer invisibilidad",
        "fr-FR": "Définir l’invisibilité",
        "ja-JP": "目視可否を設定",
        "pt-BR": "Definir como Invisível",
        "zh-CN": "设置不可见"
    },
    {
        "opy": "setMatchTime",
        "description": "Sets the current match time (which is visible at the top of the screen). This can be used to shorten or extend the duration of a match or to change the duration of assemble heroes or setup.",
        "args": [
            {
                "name": "TIME",
                "description": "The match time in seconds.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Set Match Time",
        "guid": "00000000AD31",
        "es-MX": "Establecer tiempo de la partida",
        "fr-FR": "Définir le temps de jeu",
        "ja-JP": "マッチ時間を設定",
        "pt-BR": "Definir Tempo da Partida",
        "zh-CN": "设置比赛时间"
    },
    {
        "opy": "_&setMaxHealth",
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
        ],
        "en-US": "Set Max Health",
        "guid": "0000000078FA",
        "es-MX": "Establecer salud máxima",
        "fr-FR": "Définir les points de vie maximum",
        "ja-JP": "最大ライフを設定",
        "pt-BR": "Definir Vida Máxima",
        "zh-CN": "设置最大生命值"
    },
    {
        "opy": "_&setMoveSpeed",
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
        ],
        "en-US": "Set Move Speed",
        "guid": "00000000B998",
        "es-MX": "Establecer velocidad de movimiento",
        "fr-FR": "Définir la vitesse de déplacement",
        "ja-JP": "移動速度を設定",
        "pt-BR": "Definir Velocidade de Movimento",
        "zh-CN": "设置移动速度"
    },
    {
        "opy": "setObjectiveDescription",
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
        ],
        "en-US": "Set Objective Description",
        "guid": "00000000BA85",
        "es-MX": "Establecer descripción de objetivo",
        "fr-FR": "Définir la description d’objectif",
        "ja-JP": "目標の説明を設定",
        "pt-BR": "Definir Descrição do Objetivo",
        "zh-CN": "设置目标点描述"
    },
    {
        "opy": "_&setAllowedHeroes",
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
        ],
        "en-US": "Set Player Allowed Heroes",
        "guid": "00000000BA5B",
        "es-MX": "Establecer héroes permitidos para los jugadores",
        "fr-FR": "Définir les héros autorisés pour un joueur",
        "ja-JP": "プレイヤーが使用できるヒーローを設定",
        "pt-BR": "Definir Heróis Permitidos para o Jogador",
        "zh-CN": "设置玩家可选的英雄"
    },
    {
        "opy": "_&setScore",
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
        ],
        "en-US": "Set Player Score",
        "guid": "00000000BB22",
        "es-MX": "Establecer puntuación del jugador",
        "fr-FR": "Définir le score d’un joueur",
        "ja-JP": "プレイヤー・スコアを設定する",
        "pt-BR": "Definir Pontuação do Jogador",
        "zh-CN": "设置玩家分数"
    },
    {
        "opy": "_setPlayerVar",
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
        ],
        "en-US": "Set Player Variable",
        "guid": "0000000077DF",
        "es-MX": "Establecer variable de jugador",
        "fr-FR": "Définir une variable de joueur",
        "ja-JP": "プレイヤー変数を設定",
        "pt-BR": "Definir Variável de Jogador",
        "zh-CN": "设置玩家变量"
    },
    {
        "opy": "_setPlayerVarAtIndex",
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
        ],
        "en-US": "Set Player Variable At Index",
        "guid": "00000000BBA9",
        "es-MX": "Establecer variable de jugador según el índice",
        "fr-FR": "Définir une variable de joueur à l’index",
        "ja-JP": "インデックスのプレイヤー変数を設定",
        "pt-BR": "Definir Variável de Jogador no Índice",
        "zh-CN": "在索引处设置玩家变量"
    },
    {
        "opy": "_&setPrimaryFireEnabled",
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
        ],
        "en-US": "Set Primary Fire Enabled",
        "guid": "00000000C6C5",
        "es-MX": "Establecer disparo principal habilitado",
        "fr-FR": "Définir l’activation du tir principal",
        "ja-JP": "メイン攻撃を許可",
        "pt-BR": "Definir Disparo Primário Ativado",
        "zh-CN": "设置主要攻击模式启用"
    },
    {
        "opy": "_&setProjectileGravity",
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
        ],
        "en-US": "Set Projectile Gravity",
        "guid": "00000000B99B",
        "es-MX": "Establecer gravedad del proyectil",
        "fr-FR": "Définir la gravité des projectiles",
        "ja-JP": "弾の重力を設定",
        "pt-BR": "Definir Gravidade de Projétil",
        "zh-CN": "设置弹道引力"
    },
    {
        "opy": "_&setProjectileSpeed",
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
        ],
        "en-US": "Set Projectile Speed",
        "guid": "00000000B99D",
        "es-MX": "Establecer velocidad del proyectil",
        "fr-FR": "Définir la vitesse des projectiles",
        "ja-JP": "弾速を設定",
        "pt-BR": "Definir Velocidade de Projétil",
        "zh-CN": "设置弹道速度"
    },
    {
        "opy": "_&setRespawnTime",
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
        ],
        "en-US": "Set Respawn Max Time",
        "guid": "00000000B9CD",
        "es-MX": "Establecer tiempo máximo de reaparición",
        "fr-FR": "Définir la durée maximum avant réapparition",
        "ja-JP": "最大リスポーン時間を設定",
        "pt-BR": "Definir Tempo Máximo de Ressurgimento",
        "zh-CN": "设置最大重生时间"
    },
    {
        "opy": "_&setSecondaryFireEnabled",
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
        ],
        "en-US": "Set Secondary Fire Enabled",
        "guid": "00000000C6C4",
        "es-MX": "Establecer disparo secundario habilitado",
        "fr-FR": "Définir l’activation du tir secondaire",
        "ja-JP": "サブ攻撃を許可",
        "pt-BR": "Definir Disparo Secundário Ativado",
        "zh-CN": "设置辅助攻击模式启用"
    },
    {
        "opy": "setSlowMotion",
        "description": "Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.",
        "args": [
            {
                "name": "SPEED PERCENT",
                "description": "The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Set Slow Motion",
        "guid": "00000000B9F2",
        "es-MX": "Establecer cámara lenta",
        "fr-FR": "Définir un ralenti",
        "ja-JP": "スローモーションを設定",
        "pt-BR": "Definir Câmera Lenta",
        "zh-CN": "设置慢动作"
    },
    {
        "opy": "_&setStatusEffect",
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
        ],
        "en-US": "Set Status",
        "guid": "00000000B588",
        "es-MX": "Establecer estado",
        "fr-FR": "Définir un statut",
        "ja-JP": "ステータスを設定",
        "pt-BR": "Definir Status",
        "zh-CN": "设置状态"
    },
    {
        "opy": "setTeamScore",
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
        ],
        "en-US": "Set Team Score",
        "guid": "00000000BB25",
        "es-MX": "Establecer puntuación del equipo",
        "fr-FR": "Définir le score d’une équipe",
        "ja-JP": "チーム・スコアを設定",
        "pt-BR": "Definir Pontuação da Equipe",
        "zh-CN": "设置队伍分数"
    },
    {
        "opy": "_&setUltEnabled",
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
        ],
        "en-US": "Set Ultimate Ability Enabled",
        "guid": "00000000B9B6",
        "es-MX": "Establecer habilidad máxima habilitada",
        "fr-FR": "Définir l’activation de la capacité ultime",
        "ja-JP": "アルティメット・アビリティを有効化",
        "pt-BR": "Definir Habilidade Suprema como Ativada",
        "zh-CN": "设置启用终极技能"
    },
    {
        "opy": "_&setUltCharge",
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
        ],
        "en-US": "Set Ultimate Charge",
        "guid": "00000000BB1C",
        "es-MX": "Establecer carga de habilidad máxima",
        "fr-FR": "Définir la charge de la capacité ultime",
        "ja-JP": "アルティメット・チャージを設定",
        "pt-BR": "Definir Carga da Suprema",
        "zh-CN": "设置终极技能充能"
    },
    {
        "guid": "00000000BB01",
        "opy": "_skip",
        "description": "Skips execution of a certain number of actions in the action list.",
        "args": [
            {
                "name": "NUMBER OF ACTIONS",
                "description": "The number of actions to skip, not including this action.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Skip",
        "es-MX": "Omitir",
        "fr-FR": "Passer",
        "ja-JP": "スキップ",
        "pt-BR": "Ignorar",
        "zh-CN": "跳过"
    },
    {
        "opy": "_skipIf",
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
        ],
        "en-US": "Skip If",
        "guid": "00000000BB00",
        "es-MX": "Omitir si",
        "fr-FR": "Passer si",
        "ja-JP": "スキップする条件",
        "pt-BR": "Ignorar se",
        "zh-CN": "根据条件跳过"
    },
    {
        "opy": "smallMessage",
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
        ],
        "en-US": "Small Message",
        "guid": "00000000BA87",
        "es-MX": "Mensaje pequeño",
        "fr-FR": "Message en petit",
        "ja-JP": "小さなメッセージ",
        "pt-BR": "Mensagem Pequena",
        "zh-CN": "小字体信息"
    },
    {
        "opy": "_&startAcceleration",
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
                "type": "ACCELERATION REEVALUATION",
                "default": "DIRECTION, RATE, AND MAX SPEED"
            }
        ],
        "en-US": "Start Accelerating",
        "guid": "00000000BB0D",
        "es-MX": "Comenzar la aceleración",
        "fr-FR": "Accélérer",
        "ja-JP": "加速の開始",
        "pt-BR": "Começar a Acelerar",
        "zh-CN": "开始加速"
    },
    {
        "opy": "_&setCamera",
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
        ],
        "en-US": "Start Camera",
        "guid": "00000000C393",
        "es-MX": "Comenzar cámara",
        "fr-FR": "Lancer la caméra",
        "ja-JP": "カメラの始動",
        "pt-BR": "Iniciar Câmera",
        "zh-CN": "开始镜头"
    },
    {
        "opy": "startDamageModification",
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
        ],
        "en-US": "Start Damage Modification",
        "guid": "00000000C639",
        "es-MX": "Comenzar modificación de daño",
        "fr-FR": "Lancer la modification des dégâts",
        "ja-JP": "ダメージ変更を開始",
        "pt-BR": "Começar Modificação de Dano",
        "zh-CN": "开始伤害调整"
    },
    {
        "opy": "_&startDoT",
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
        ],
        "en-US": "Start Damage Over Time",
        "guid": "00000000B9C5",
        "es-MX": "Comenzar daño con el tiempo",
        "fr-FR": "Infliger des dégâts sur la durée",
        "ja-JP": "継続ダメージを開始",
        "pt-BR": "Começar Dano ao Longo do Tempo",
        "zh-CN": "开始持续伤害"
    },
    {
        "opy": "_&startFacing",
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
        ],
        "en-US": "Start Facing",
        "guid": "00000000BB20",
        "es-MX": "Comenzar orientación",
        "fr-FR": "Regarder vers",
        "ja-JP": "向き変更を開始",
        "pt-BR": "Começar a Encarar",
        "zh-CN": "开始朝向"
    },
    {
        "opy": "_&startForcingHero",
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
        ],
        "en-US": "Start Forcing Player To Be Hero",
        "guid": "00000000ABFB",
        "es-MX": "Comenzar a forzar a un jugador a usar un héroe",
        "fr-FR": "Forcer un héros",
        "ja-JP": "プレイヤーへのヒーロー強制を開始",
        "pt-BR": "Começar a Forçar Jogador a Ser o Herói",
        "zh-CN": "开始强制玩家选择英雄"
    },
    {
        "opy": "startForcingSpawn",
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
        ],
        "en-US": "Start Forcing Spawn Room",
        "guid": "00000000B573",
        "es-MX": "Comenzar a forzar cuarto de reaparición",
        "fr-FR": "Forcer une salle d’apparition",
        "ja-JP": "リスポーンエリアの強制を開始",
        "pt-BR": "Começar a Forçar Sala de Ressurgimento",
        "zh-CN": "开始强制重生室"
    },
    {
        "opy": "_&startForcingThrottle",
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
        ],
        "en-US": "Start Forcing Throttle",
        "guid": "00000000BB0F",
        "es-MX": "Comenzar a forzar la aceleración",
        "fr-FR": "Forcer l’accélération",
        "ja-JP": "強制スロットル開始",
        "pt-BR": "Começar a Forçar Aceleração",
        "zh-CN": "开始限制阈值"
    },
    {
        "opy": "_&startHoT",
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
        ],
        "en-US": "Start Heal Over Time",
        "guid": "00000000B9C2",
        "es-MX": "Comenzar sanación con el tiempo",
        "fr-FR": "Prodiguer des soins sur la durée",
        "ja-JP": "継続ヒールを開始",
        "pt-BR": "Começar Cura ao Longo do Tempo",
        "zh-CN": "开始持续治疗"
    },
    {
        "opy": "_&startForcingButton",
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
        ],
        "en-US": "Start Holding Button",
        "guid": "00000000B9D3",
        "es-MX": "Comenzar a mantener el botón presionado",
        "fr-FR": "Maintenir un bouton enfoncé",
        "ja-JP": "ボタン長押し開始",
        "pt-BR": "Começar a Segurar Botão",
        "zh-CN": "开始按下按钮"
    },
    {
        "opy": "_&startThrottleInDirection",
        "description": "Sets or adds to the throttle (directional input control) of a player or players such that they begin moving in a particular direction. Any previous throttle in direction is cancelled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will be set or added to.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the throttle will be set or added to. This value is normalized internally.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "MAGNITUDE",
                "description": "The amount of throttle (or change to throttle). A value of 1 denotes full throttle.",
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
                "name": "BEHAVIOR",
                "description": "Specifies whether preexisting throttle is replaced or added to.",
                "type": "THROTTLE BEHAVIOR",
                "default": "REPLACE EXISTING THROTTLE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This aciton will keep asking for and using new values from reevaluated inputs.",
                "type": "THROTTLE REEVALUATION",
                "default": "DIRECTION AND MAGNITUDE"
            }
        ],
        "en-US": "Start Throttle In Direction",
        "guid": "00000000CEA4",
        "es-MX": "Comenzar aceleración en dirección",
        "fr-FR": "Commencer l’accélération directionnelle",
        "ja-JP": "指定方向にスロットル開始",
        "pt-BR": "Iniciar Aceleração na Direção",
        "zh-CN": "开始定向阈值"
    },
    {
        "opy": "_&startTransformingThrottle",
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
        ],
        "en-US": "Start Transforming Throttle",
        "guid": "00000000CC26",
        "es-MX": "Comenzar a transformar la aceleración",
        "fr-FR": "Début de modification de l’accélération",
        "ja-JP": "スロットルの変化を開始",
        "pt-BR": "Iniciar Transformação de Aceleração",
        "zh-CN": "开始转换阈值"
    },
    {
        "opy": "_&stopAcceleration",
        "description": "Stops the acceleration started by the start accelerating action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop accelerating.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Accelerating",
        "guid": "00000000BB0C",
        "es-MX": "Detener la aceleración",
        "fr-FR": "Arrêter l’accélération",
        "ja-JP": "加速の中止",
        "pt-BR": "Parar de Acelerar",
        "zh-CN": "停止加速"
    },
    {
        "opy": "stopAllDamageModifications()",
        "description": "Stops all damage modifications that were started using the start damage modification action.",
        "args": [],
        "en-US": "Stop All Damage Modifications",
        "guid": "00000000C647",
        "es-MX": "Detener todas las modificaciones de daño",
        "fr-FR": "Arrêter toutes les modifications de dégâts",
        "ja-JP": "すべてのダメージ変更を停止",
        "pt-BR": "Parar Todas as Modificações de Dano",
        "zh-CN": "停止所有伤害调整"
    },
    {
        "opy": "_&stopAllDoT",
        "description": "Stops all damage over time started by start damage over time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose scripted damage over time will stop.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop All Damage Over Time",
        "guid": "00000000B9C3",
        "es-MX": "Detener todo el daño con el tiempo",
        "fr-FR": "Arrêter tous les dégâts sur la durée",
        "ja-JP": "すべての継続ダメージを停止",
        "pt-BR": "Parar Todo o Dano ao Longo do Tempo",
        "zh-CN": "停止所有持续伤害"
    },
    {
        "opy": "_&stopAllHoT",
        "description": "Stops all heal over time started by start heal over time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose scripted heal over time will stop.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop All Heal Over Time",
        "guid": "00000000B9C0",
        "es-MX": "Detener toda la sanación con el tiempo",
        "fr-FR": "Arrêter tous les soins sur la durée",
        "ja-JP": "すべての継続ヒールを停止",
        "pt-BR": "Parar Toda a Cura ao Longo do Tempo",
        "zh-CN": "停止所有持续治疗"
    },
    {
        "opy": "_&stopCamera",
        "description": "None",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose cameras will be put back to the default view.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Camera",
        "guid": "00000000C3B1",
        "es-MX": "Detener cámara",
        "fr-FR": "Arrêter la caméra",
        "ja-JP": "カメラの停止",
        "pt-BR": "Parar Câmera",
        "zh-CN": "停止镜头"
    },
    {
        "opy": "_stopChasingGlobalVariable",
        "description": "Stops an in-progress chase of a global variable, leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }
        ],
        "en-US": "Stop Chasing Global Variable",
        "guid": "00000000B83E",
        "es-MX": "Detener seguimiento de variable global",
        "fr-FR": "Arrêter de modifier une variable globale",
        "ja-JP": "グローバル変数の追跡を中止",
        "pt-BR": "Parar de Acompanhar Variável Global",
        "zh-CN": "停止追踪全局变量"
    },
    {
        "opy": "_stopChasingPlayerVariable",
        "description": "Stops an in-progress chase of a player variable, leaving it at its current value.",
        "args": [
            {
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
        ],
        "en-US": "Stop Chasing Player Variable",
        "guid": "00000000B83D",
        "es-MX": "Detener seguimiento de variable de jugador",
        "fr-FR": "Arrêter de modifier une variable de joueur",
        "ja-JP": "プレイヤー変数の追跡を中止",
        "pt-BR": "Parar de Acompanhar Variável de Jogador",
        "zh-CN": "停止追踪玩家变量"
    },
    {
        "opy": "stopDamageModification",
        "description": "Stops a damage modification that was started by the start damage modification action.",
        "args": [
            {
                "name": "DAMAGE MODIFICATION",
                "description": "Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE MODIFICATION ID"
            }
        ],
        "en-US": "Stop Damage Modification",
        "guid": "00000000C649",
        "es-MX": "Detener modificación de daño",
        "fr-FR": "Arrêter la modification des dégâts",
        "ja-JP": "ダメージ変更を停止",
        "pt-BR": "Parar Modificação de Dano",
        "zh-CN": "停止伤害调整"
    },
    {
        "opy": "stopDoT",
        "description": "Stops an instance of damage over time started by the start damage over time action.",
        "args": [
            {
                "name": "DAMAGE OVER TIME ID",
                "description": "Specifies which damage over time instance to stop. This id may be last damage over time id or a variable into which last damage over time id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST DAMAGE OVER TIME ID"
            }
        ],
        "en-US": "Stop Damage Over Time",
        "guid": "00000000B9C4",
        "es-MX": "Detener daño con el tiempo",
        "fr-FR": "Arrêter des dégâts sur la durée",
        "ja-JP": "継続ダメージを停止",
        "pt-BR": "Parar Dano ao Longo do Tempo",
        "zh-CN": "停止持续伤害"
    },
    {
        "opy": "_&stopFacing",
        "description": "Stops the turning started by the start facing action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop turning.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Facing",
        "guid": "00000000BB21",
        "es-MX": "Detener orientación",
        "fr-FR": "Arrêter de regarder vers",
        "ja-JP": "向き変更を停止",
        "pt-BR": "Parar de Encarar",
        "zh-CN": "停止朝向"
    },
    {
        "opy": "_&stopForcingCurrentHero",
        "description": "Stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will no longer be forced to be a specific hero.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Forcing Player To Be Hero",
        "guid": "00000000AC1B",
        "es-MX": "Dejar de forzar a un jugador a usar un héroe",
        "fr-FR": "Arrêter de forcer un héros",
        "ja-JP": "プレイヤーへのヒーロー強制を停止",
        "pt-BR": "Parar de Forçar Jogador a Ser o Herói",
        "zh-CN": "停止强制玩家选择英雄"
    },
    {
        "opy": "stopForcingSpawn",
        "description": "Undoes the effect of the start forcing spawn room action for the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team that will resume using their normal spawn room.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Stop Forcing Spawn Room",
        "guid": "00000000B574",
        "es-MX": "Dejar de forzar cuarto de reaparición",
        "fr-FR": "Arrêter de forcer une salle d’apparition",
        "ja-JP": "リスポーンエリアの強制を停止",
        "pt-BR": "Parar de Forçar Sala de Ressurgimento",
        "zh-CN": "停止强制重生室"
    },
    {
        "opy": "_&stopForcingThrottle",
        "description": "Undoes the effect of the start forcing throttle action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement input will be restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Forcing Throttle",
        "guid": "00000000BB0E",
        "es-MX": "Dejar de forzar la aceleración",
        "fr-FR": "Arrêter de forcer l’accélération",
        "ja-JP": "強制スロットル中止",
        "pt-BR": "Parar de Forçar Aceleração",
        "zh-CN": "停止限制阈值"
    },
    {
        "opy": "stopHoT",
        "description": "Stops an instance of heal over time started by the start heal over time action.",
        "args": [
            {
                "name": "HEAL OVER TIME ID",
                "description": "Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.",
                "type": "NUMBER",
                "default": "PLAYER VARIABLE"
            }
        ],
        "en-US": "Stop Heal Over Time",
        "guid": "00000000B9C1",
        "es-MX": "Detener sanación con el tiempo",
        "fr-FR": "Arrêter des soins sur la durée",
        "ja-JP": "継続ヒールを停止",
        "pt-BR": "Parar Cura ao Longo do Tempo",
        "zh-CN": "停止持续治疗"
    },
    {
        "opy": "_&stopForcingButton",
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
        ],
        "en-US": "Stop Holding Button",
        "guid": "00000000B9D2",
        "es-MX": "Dejar de mantener el botón presionado",
        "fr-FR": "Arrêter de maintenir un bouton enfoncé",
        "ja-JP": "ボタン長押し解除",
        "pt-BR": "Parar de Segurar Botão",
        "zh-CN": "停止按下按钮"
    },
    {
        "opy": "_&stopThrottleInDirection",
        "description": "Cancels the behavior caused by start throttle in direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose default throttle control will be restored.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Throttle In Direction",
        "guid": "00000000CEA3",
        "es-MX": "Detener aceleración en dirección",
        "fr-FR": "Arrêter l’accélération directionnelle",
        "ja-JP": "指定方向にスロットル終了",
        "pt-BR": "Parar Aceleração na Direção",
        "zh-CN": "停止定向阈值"
    },
    {
        "opy": "_&stopTransformingThrottle",
        "description": "Stops the throttle transform started by start transforming throttle for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will stop being transformed.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Stop Transforming Throttle",
        "guid": "00000000CC25",
        "es-MX": "Dejar de transformar la aceleración",
        "fr-FR": "Arrêt de modification de l’accélération",
        "ja-JP": "スロットルの変化を停止",
        "pt-BR": "Parar Transformação de Aceleração",
        "zh-CN": "停止转换阈值"
    },
    {
        "guid": "00000000B9BA",
        "opy": "_&teleport",
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
        ],
        "en-US": "Teleport",
        "es-MX": "Transportar",
        "fr-FR": "Téléportation",
        "ja-JP": "テレポート",
        "pt-BR": "Teletransportar",
        "zh-CN": "传送"
    },
    {
        "opy": "unpauseMatchTime()",
        "description": "Unpauses the match time.",
        "args": [],
        "en-US": "Unpause Match Time",
        "guid": "00000000B9F0",
        "es-MX": "Despausar tiempo de la partida",
        "fr-FR": "Reprendre le temps de jeu",
        "ja-JP": "マッチ時間のポーズを解除",
        "pt-BR": "Retomar Tempo da Partida",
        "zh-CN": "比赛时间继续"
    },
    {
        "guid": "000000007872",
        "opy": "_wait",
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
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
        ],
        "en-US": "Wait",
        "es-MX": "Esperar",
        "fr-FR": "Attente",
        "ja-JP": "待機",
        "pt-BR": "Esperar",
        "zh-CN": "等待"
    }
]
//end-json



















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

var valueFuncKw = 
//begin-json
[
    {
        "opy": "abs",
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Absolute Value",
        "guid": "00000000C358",
        "es-MX": "Valor absoluto",
        "fr-FR": "Valeur absolue",
        "ja-JP": "絶対値",
        "pt-BR": "Valor Absoluto",
        "zh-CN": "绝对值"
    },
    {
        "guid": "00000000C408",
        "opy": "_add",
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
        ],
        "en-US": "Add",
        "es-MX": "Sumar",
        "fr-FR": "Addition",
        "ja-JP": "追加",
        "pt-BR": "Somar",
        "zh-CN": "加"
    },
    {
        "opy": "getDeadPlayers",
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Dead Players",
        "guid": "00000000B265",
        "es-MX": "Todos los jugadores muertos",
        "fr-FR": "Tous les joueurs morts",
        "ja-JP": "倒れたプレイヤー全員",
        "pt-BR": "Todos os Jogadores Mortos",
        "zh-CN": "所有死亡玩家"
    },
    {
        "opy": "getDamageHeroes()",
        "description": "The array of all damage heroes in overwatch. The order is as follows:\n        \n        0. Reaper\n        1. Tracer\n        2. Hanzo\n        3. Torbjorn\n        4. Pharah\n        5. Widowmaker\n        6. Bastion\n        7. Symmetra\n        8. Genji\n        9. Mccree\n        10. Junkrat\n        11. Soldier\n        12. Mei\n        13. Sombra\n        14. Doomfist\n        15. Ashe  \n        ",
        "args": [],
        "en-US": "All Damage Heroes",
        "guid": "00000000D40A",
        "de-DE": "Alle Schadenshelden",
        "es-MX": "Todos los héroes de daño",
        "fr-FR": "Tous les héros de dégâts",
        "ja-JP": "全ダメージヒーロー",
        "pl-PL": "Wszyscy bohaterowie natarcia",
        "pt-BR": "Todos os Heróis de Dano",
        "zh-CN": "所有输出英雄"
    },
    {
        "guid": "00000000BF58",
        "opy": "getAllHeroes()",
        "description": "The array of all heroes in overwatch. The order is as follows:\n        \n        0. Reaper   \n        1. Tracer   \n        2. Mercy    \n        3. Hanzo    \n        4. Torbjorn \n        5. Reinhardt\n        6. Pharah   \n        7. Winston  \n        8. Widowmaker\n        9. Bastion  \n        10. Symmetra \n        11. Zenyatta \n        12. Genji    \n        13. Roadhog  \n        14. McCree   \n        15. Junkrat  \n        16. Zarya    \n        17. Soldier  \n        18. Lucio    \n        19. Dva      \n        20. Mei      \n        21. Sombra   \n        22. Doomfist \n        23. Ana      \n        24. Orisa    \n        25. Brigitte \n        26. Moira    \n        27. Hammond  \n        28. Ashe     \n        29. Baptiste \n        30. Sigma    \n        ",
        "args": [],
        "en-US": "All Heroes",
        "es-MX": "Todos los héroes",
        "fr-FR": "Tous les héros",
        "ja-JP": "全ヒーロー",
        "pt-BR": "Todos os Heróis",
        "zh-CN": "全部英雄"
    },
    {
        "opy": "getLivingPlayers",
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Living Players",
        "guid": "00000000B264",
        "es-MX": "Todos los jugadores vivos",
        "fr-FR": "Tous les joueurs en vie",
        "ja-JP": "生存プレイヤー全員",
        "pt-BR": "Todos os Jogadores Vivos",
        "zh-CN": "所有存活玩家"
    },
    {
        "opy": "getPlayers",
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Players",
        "guid": "00000000B261",
        "es-MX": "Todos los jugadores",
        "fr-FR": "Tous les joueurs",
        "ja-JP": "すべてのプレイヤー",
        "pt-BR": "Todos os Jogadores",
        "zh-CN": "所有玩家"
    },
    {
        "opy": "getPlayersNotOnObjective",
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Players Not On Objective",
        "guid": "00000000B267",
        "es-MX": "Todos los jugadores que no están en el objetivo",
        "fr-FR": "Tous les joueurs éloignés de l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中ではない",
        "pt-BR": "Todos os Jogadores Fora do Objetivo",
        "zh-CN": "所有目标点外玩家"
    },
    {
        "opy": "getPlayersOnObjective",
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Players On Objective",
        "guid": "00000000B266",
        "es-MX": "Todos los jugadores que están en el objetivo",
        "fr-FR": "Tous les joueurs sur l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中",
        "pt-BR": "Todos os Jogadores no Objetivo",
        "zh-CN": "所有目标点内玩家"
    },
    {
        "opy": "_&getAllowedHeroes",
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Allowed Heroes",
        "guid": "00000000BBA8",
        "es-MX": "Héroes permitidos",
        "fr-FR": "Héros autorisés",
        "ja-JP": "許可されたヒーロー",
        "pt-BR": "Heróis Permitidos",
        "zh-CN": "可用英雄"
    },
    {
        "opy": "getSupportHeroes()",
        "description": "The array of all support heroes in overwatch. The order is as follows:\n        \n        0. Mercy\n        1. Zenyatta\n        2. Lucio\n        3. Ana\n        4. Brigitte\n        5. Moira\n        6. Baptiste    \n        ",
        "args": [],
        "en-US": "All Support Heroes",
        "guid": "00000000D40B",
        "de-DE": "Alle Unterstützungshelden",
        "es-MX": "Todos los héroes de apoyo",
        "fr-FR": "Tous les héros de soutien",
        "ja-JP": "全サポートヒーロー",
        "pl-PL": "Wszyscy bohaterowie wsparcia",
        "pt-BR": "Todos os Heróis de Suporte",
        "zh-CN": "所有支援英雄"
    },
    {
        "opy": "getTankHeroes()",
        "description": "The array of all tank heroes in overwatch. The order is as follows:\n        \n        0. Reinhardt\n        1. Winston\n        2. Roadhog\n        3. Zarya\n        4. Dva\n        5. Orisa\n        6. Hammond\n        7. Sigma    \n        ",
        "args": [],
        "en-US": "All Tank Heroes",
        "guid": "00000000D40C",
        "de-DE": "Alle Tankhelden",
        "es-MX": "Todos los héroes tanques",
        "fr-FR": "Tous les héros tanks",
        "ja-JP": "全タンクヒーロー",
        "pl-PL": "Wszyscy bohaterowie tanki",
        "pt-BR": "Todos os Heróis de Tanque",
        "zh-CN": "所有重装英雄"
    },
    {
        "opy": "_&getAltitude",
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Altitude Of",
        "guid": "00000000B11D",
        "es-MX": "Altitud de",
        "fr-FR": "Altitude de",
        "ja-JP": "高度: ",
        "pt-BR": "Altitude de",
        "zh-CN": "高度"
    },
    {
        "opy": "_and",
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
        ],
        "en-US": "And",
        "guid": "00000000B273",
        "es-MX": "Y",
        "fr-FR": "Et",
        "ja-JP": "AND",
        "pt-BR": "E",
        "zh-CN": "与"
    },
    {
        "opy": "angleDifference",
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
        ],
        "en-US": "Angle Difference",
        "guid": "00000000B282",
        "es-MX": "Diferencia de ángulo",
        "fr-FR": "Différence entre angles",
        "ja-JP": "角度差",
        "pt-BR": "Diferença de Ângulo",
        "zh-CN": "角度差"
    },
    {
        "guid": "00000000C41A",
        "opy": "_appendToArray",
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
        ],
        "en-US": "Append To Array",
        "es-MX": "Anexar a la matriz",
        "fr-FR": "Ajouter au tableau",
        "ja-JP": "配列に追加",
        "pt-BR": "Juntar à Matriz",
        "zh-CN": "添加至数组"
    },
    {
        "opy": "acosDeg",
        "description": "Arccosine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arccosine In Degrees",
        "guid": "00000000C809",
        "es-MX": "Arcocoseno en grados",
        "fr-FR": "Arc cosinus en degrés",
        "ja-JP": "度単位のアークコサイン",
        "pt-BR": "Arco Cosseno em Graus",
        "zh-CN": "以角度为单位的反余弦值"
    },
    {
        "opy": "acos",
        "description": "Arccosine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arccosine In Radians",
        "guid": "00000000C807",
        "es-MX": "Arcocoseno en radianes",
        "fr-FR": "Arc cosinus en radians",
        "ja-JP": "ラジアンのアークコサイン",
        "pt-BR": "Arco Cosseno em Radianos",
        "zh-CN": "以弧度为单位的反余弦值"
    },
    {
        "opy": "asinDeg",
        "description": "Arcsine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arcsine In Degrees",
        "guid": "00000000C805",
        "es-MX": "Arcoseno en grados",
        "fr-FR": "Arc sinus en degrés",
        "ja-JP": "度単位のアークサイン",
        "pt-BR": "Arco Seno em Graus",
        "zh-CN": "以角度为单位的反正弦值"
    },
    {
        "opy": "asin",
        "description": "Arcsine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arcsine In Radians",
        "guid": "00000000C803",
        "es-MX": "Arcoseno en radianes",
        "fr-FR": "Arc sinus en radians",
        "ja-JP": "ラジアンのアークサイン",
        "pt-BR": "Arco Seno em Radianos",
        "zh-CN": "以弧度为单位的反正弦值"
    },
    {
        "opy": "atan2Deg",
        "description": "Arctangent in degrees of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arctangent In Degrees",
        "guid": "00000000C801",
        "es-MX": "Arcotangente en grados",
        "fr-FR": "Arc tangente en degrés",
        "ja-JP": "度単位のアークタンジェント",
        "pt-BR": "Arco Tangente em Graus",
        "zh-CN": "以角度为单位的反正切值"
    },
    {
        "opy": "atan2",
        "description": "Arctangent in radians of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arctangent In Radians",
        "guid": "00000000C7FF",
        "es-MX": "Arcotangente en radianes",
        "fr-FR": "Arc tangente en radians",
        "ja-JP": "ラジアンのアークタンジェント",
        "pt-BR": "Arco Tangente em Radianos",
        "zh-CN": "以弧度为单位的反正切值"
    },
    {
        "opy": "_arrayContains",
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
        ],
        "en-US": "Array Contains",
        "guid": "00000000C336",
        "es-MX": "La matriz contiene",
        "fr-FR": "Contenu du tableau",
        "ja-JP": "含む配列",
        "pt-BR": "Matriz Contém",
        "zh-CN": "数组包含"
    },
    {
        "opy": "_arraySlice",
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
        ],
        "en-US": "Array Slice",
        "guid": "00000000B597",
        "es-MX": "Extracción de matriz",
        "fr-FR": "Section de tableau",
        "ja-JP": "配列のスライス",
        "pt-BR": "Fatia da Matriz",
        "zh-CN": "数组分割"
    },
    {
        "guid": "00000000B32F",
        "opy": "attacker",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null,
        "en-US": "Attacker",
        "es-MX": "Atacante",
        "fr-FR": "Attaquant",
        "ja-JP": "攻撃者",
        "pt-BR": "Atacante",
        "zh-CN": "攻击方"
    },
    {
        "guid": "00000000B11B",
        "opy": "Vector.BACKWARD",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null,
        "en-US": "Backward",
        "es-MX": "Atrás",
        "fr-FR": "Arrière",
        "ja-JP": "後方",
        "pt-BR": "Para Trás",
        "zh-CN": "后"
    },
    {
        "opy": "getClosestPlayer",
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
        ],
        "en-US": "Closest Player To",
        "guid": "00000000B1DE",
        "es-MX": "Jugador más cercano a",
        "fr-FR": "Joueur le plus proche de",
        "ja-JP": "最も近いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Próximo a",
        "zh-CN": "距离最近的玩家"
    },
    {
        "opy": "_compare",
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
        ],
        "en-US": "Compare",
        "guid": "00000000B276",
        "es-MX": "Comparar",
        "fr-FR": "Comparer",
        "ja-JP": "COMPARE",
        "pt-BR": "Comparar",
        "zh-CN": "比较"
    },
    {
        "opy": "getControlScorePercentage",
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Control Mode Scoring Percentage",
        "guid": "00000000B37C",
        "es-MX": "Porcentaje de puntuación en el modo Control",
        "fr-FR": "Pourcentage du score en mode Contrôle",
        "ja-JP": "コントロール・モードのスコア・パーセンテージ",
        "pt-BR": "Percentual de Pontuação no Modo de Controle",
        "zh-CN": "占领要点模式得分百分比"
    },
    {
        "opy": "getControlScoringTeam",
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": [],
        "en-US": "Control Mode Scoring Team",
        "guid": "00000000B39A",
        "es-MX": "Equipo que anota en el modo Control",
        "fr-FR": "Équipe contrôlant le point en mode Contrôle",
        "ja-JP": "コントロール・モードの得点チーム",
        "pt-BR": "Equipe Pontuando no Modo de Controle",
        "zh-CN": "占领要点模式正在得分的队伍"
    },
    {
        "opy": "cosDeg",
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Cosine From Degrees",
        "guid": "00000000C33E",
        "es-MX": "Coseno en grados",
        "fr-FR": "Cosinus en degrés",
        "ja-JP": "度のコサイン",
        "pt-BR": "Cosseno de Graus",
        "zh-CN": "角度的余弦值"
    },
    {
        "opy": "cos",
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Cosine From Radians",
        "guid": "00000000C342",
        "es-MX": "Coseno en radianes",
        "fr-FR": "Cosinus en radians",
        "ja-JP": "ラジアンのコサイン",
        "pt-BR": "Cosseno de Radianos",
        "zh-CN": "弧度的余弦值"
    },
    {
        "opy": "len",
        "description": "The number of elements in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Count Of",
        "guid": "00000000B26E",
        "es-MX": "Conteo de",
        "fr-FR": "Décompte de",
        "ja-JP": "カウント: ",
        "pt-BR": "Contagem de",
        "zh-CN": "数量"
    },
    {
        "opy": "crossProduct",
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
        ],
        "en-US": "Cross Product",
        "guid": "00000000C35D",
        "es-MX": "Producto vectorial",
        "fr-FR": "Produit croisé",
        "ja-JP": "クロス積",
        "pt-BR": "Produto Vetorial",
        "zh-CN": "矢量积"
    },
    {
        "opy": "_currentArrayElement",
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "en-US": "Current Array Element",
        "guid": "00000000B5B9",
        "es-MX": "Elemento de matriz actual",
        "fr-FR": "Élément de tableau actuel",
        "ja-JP": "現在の配列の要素",
        "pt-BR": "Elemento da Matriz Atual",
        "zh-CN": "当前数组元素"
    },
    {
        "opy": "getCurrentGamemode()",
        "description": "The current game mode of the custom game.",
        "args": [],
        "en-US": "Current Game Mode",
        "guid": "00000000F163",
        "es-ES": "Modo de juego actual",
        "es-MX": "Modo de juego actual",
        "fr-FR": "Mode de jeu actuel",
        "ja-JP": "現在のゲーム・モード",
        "pl-PL": "Bieżący tryb gry",
        "pt-BR": "Modo de jogo atual",
        "ru-RU": "Текущий игровой режим",
        "zh-CN": "当前比赛模式"
    },
    {
        "guid": "00000000D418",
        "opy": "getCurrentMap()",
        "description": "The current map of the custom game.",
        "args": [],
        "en-US": "Current Map",
        "es-MX": "Mapa actual",
        "fr-FR": "Carte actuelle",
        "ja-JP": "現在のマップ",
        "pl-PL": "Aktualna mapa",
        "pt-BR": "Mapa Atual",
        "zh-CN": "当前地图"
    },
    {
        "opy": "_customString",
        "description": "ty magzie for adding that",
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
        ],
        "en-US": "Custom String",
        "guid": "00000000CE3C",
        "es-MX": "Cadena personalizada",
        "fr-FR": "Chaîne personnalisée",
        "ja-JP": "カスタムストリング",
        "pl-PL": "Niestandardowy ciąg",
        "pt-BR": "String Personalizada",
        "zh-CN": "自定义字符串"
    },
    {
        "opy": "angleToDirection",
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
        ],
        "en-US": "Direction From Angles",
        "guid": "00000000BB2D",
        "es-MX": "Dirección desde los ángulos",
        "fr-FR": "Direction depuis des angles",
        "ja-JP": "角度による方向",
        "pt-BR": "Direção a partir dos Ângulos",
        "zh-CN": "与此角度的相对方向"
    },
    {
        "opy": "directionTowards",
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
        ],
        "en-US": "Direction Towards",
        "guid": "00000000B1EA",
        "es-MX": "Dirección hacia",
        "fr-FR": "Direction",
        "ja-JP": "指す方向: ",
        "pt-BR": "Direção Rumo a",
        "zh-CN": "方向"
    },
    {
        "opy": "distance",
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
        ],
        "en-US": "Distance Between",
        "guid": "00000000B1E7",
        "es-MX": "Distancia entre",
        "fr-FR": "Distance entre",
        "ja-JP": "2点間の距離",
        "pt-BR": "Distância entre",
        "zh-CN": "相距距离"
    },
    {
        "guid": "00000000C40F",
        "opy": "_divide",
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
        ],
        "en-US": "Divide",
        "es-MX": "Dividir",
        "fr-FR": "Division",
        "ja-JP": "除算",
        "pt-BR": "Dividir",
        "zh-CN": "除"
    },
    {
        "opy": "dotProduct",
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
        ],
        "en-US": "Dot Product",
        "guid": "00000000C35A",
        "es-MX": "Producto escalar",
        "fr-FR": "Produit scalaire",
        "ja-JP": "ドット積",
        "pt-BR": "Produto Escalar",
        "zh-CN": "标量积"
    },
    {
        "guid": "00000000B119",
        "opy": "Vector.DOWN",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null,
        "en-US": "Down",
        "es-MX": "Abajo",
        "fr-FR": "Bas",
        "ja-JP": "下",
        "pt-BR": "Baixo",
        "zh-CN": "下"
    },
    {
        "opy": "_emptyArray",
        "description": "An array with no elements.",
        "args": [],
        "en-US": "Empty Array",
        "guid": "00000000BF5A",
        "es-MX": "Matriz vacía",
        "fr-FR": "Tableau vide",
        "ja-JP": "空の配列",
        "pt-BR": "Matriz Vazia",
        "zh-CN": "空数组"
    },
    {
        "opy": "entityExists",
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Entity Exists",
        "guid": "00000000B619",
        "es-MX": "La entidad existe",
        "fr-FR": "Existence de l’entité",
        "ja-JP": "エンティティが存在している",
        "pt-BR": "Entidade Existe",
        "zh-CN": "实体存在"
    },
    {
        "opy": "eventDamage",
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Damage",
        "guid": "00000000C635",
        "es-MX": "Daño de evento",
        "fr-FR": "Dégâts d’évènement",
        "ja-JP": "イベント・ダメージ",
        "pt-BR": "Dano do Evento",
        "zh-CN": "事件伤害"
    },
    {
        "opy": "eventHealing",
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Healing",
        "guid": "00000000CC33",
        "es-MX": "Sanación de evento",
        "fr-FR": "Évènement soin",
        "ja-JP": "イベント・ヒール",
        "pl-PL": "Zdarzenie leczenia",
        "pt-BR": "Cura no Evento",
        "zh-CN": "事件治疗"
    },
    {
        "opy": "eventPlayer",
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null,
        "en-US": "Event Player",
        "guid": "00000000B331",
        "es-MX": "Jugador del evento",
        "fr-FR": "Joueur exécutant",
        "ja-JP": "イベント・プレイヤー",
        "pt-BR": "Jogador do Evento",
        "zh-CN": "事件玩家"
    },
    {
        "opy": "eventWasCriticalHit",
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Was Critical Hit",
        "guid": "00000000C637",
        "es-MX": "El evento fue un golpe crítico",
        "fr-FR": "L’évènement était un coup critique",
        "ja-JP": "イベントがクリティカル・ヒットだった",
        "pt-BR": "Evento foi Golpe Crítico",
        "zh-CN": "事件暴击"
    },
    {
        "guid": "00000000C595",
        "opy": "_&getEyePosition",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Eye Position",
        "es-MX": "Posición de la vista",
        "fr-FR": "Position des yeux",
        "ja-JP": "目の位置",
        "pt-BR": "Posição do Olho",
        "zh-CN": "眼睛位置"
    },
    {
        "opy": "_&getFacingDirection",
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Facing Direction Of",
        "guid": "00000000B281",
        "es-MX": "Dirección de orientación de",
        "fr-FR": "Regard en direction de",
        "ja-JP": "プレイヤーが向いている方向: ",
        "pt-BR": "Direção Frontal de",
        "zh-CN": "面朝方向"
    },
    {
        "opy": "false",
        "description": "The boolean value of false.",
        "args": null,
        "en-US": "False",
        "guid": "00000000AC3A",
        "es-MX": "Falso",
        "fr-FR": "Faux",
        "zh-CN": "假"
    },
    {
        "opy": "getFarthestPlayer",
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
        ],
        "en-US": "Farthest Player From",
        "guid": "00000000B1DF",
        "es-MX": "Jugador más lejos de",
        "fr-FR": "Joueur le plus éloigné de",
        "ja-JP": "最も遠いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Distante de",
        "zh-CN": "距离最远的玩家"
    },
    {
        "opy": "_filteredArray",
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
        ],
        "en-US": "Filtered Array",
        "guid": "00000000B5B7",
        "es-MX": "Matriz filtrada",
        "fr-FR": "Tableau filtré",
        "ja-JP": "フィルタリングされた配列",
        "pt-BR": "Matriz Filtrada",
        "zh-CN": "已过滤的数组"
    },
    {
        "opy": "_firstOf",
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "First Of",
        "guid": "00000000B5C2",
        "es-MX": "Primero de",
        "fr-FR": "Premier de",
        "ja-JP": "1番目。最大数は",
        "pt-BR": "Primeiro de",
        "zh-CN": "首个"
    },
    {
        "opy": "getFlagPosition",
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Flag Position",
        "guid": "00000000B3A0",
        "es-MX": "Posición de la bandera",
        "fr-FR": "Position du drapeau",
        "ja-JP": "フラッグの位置",
        "pt-BR": "Posição da Bandeira",
        "zh-CN": "旗帜位置"
    },
    {
        "guid": "00000000B11A",
        "opy": "Vector.FORWARD",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null,
        "en-US": "Forward",
        "es-MX": "Adelante",
        "fr-FR": "Avant",
        "ja-JP": "前方向",
        "pt-BR": "Para a Frente",
        "zh-CN": "前"
    },
    {
        "opy": "_globalVar",
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "VARIABLE",
                "default": "A"
            }
        ],
        "en-US": "Global Variable",
        "guid": "00000000B0F9",
        "es-MX": "Variable global",
        "fr-FR": "Variable globale",
        "ja-JP": "グローバル変数",
        "pt-BR": "Variável Global",
        "zh-CN": "全局变量"
    },
    {
        "opy": "_&hasSpawned",
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Has Spawned",
        "guid": "00000000C192",
        "es-MX": "Ha aparecido",
        "fr-FR": "Apparition",
        "ja-JP": "スポーンした",
        "pt-BR": "Surgiu",
        "zh-CN": "已重生"
    },
    {
        "opy": "_&hasStatusEffect",
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
        ],
        "en-US": "Has Status",
        "guid": "00000000B363",
        "es-MX": "Tiene estado",
        "fr-FR": "Statut",
        "ja-JP": "ステータスがある",
        "pt-BR": "Tem Status",
        "zh-CN": "具有状态"
    },
    {
        "opy": "healee",
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null,
        "en-US": "Healee",
        "guid": "00000000CC1C",
        "es-MX": "Sanado",
        "fr-FR": "Soigné",
        "ja-JP": "ヒール対象",
        "pl-PL": "Leczony",
        "pt-BR": "Curado",
        "zh-CN": "受治疗者"
    },
    {
        "guid": "00000000CC1A",
        "opy": "healer",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null,
        "en-US": "Healer",
        "es-MX": "Sanador",
        "fr-FR": "Soigneur",
        "ja-JP": "ヒーラー",
        "pl-PL": "Leczący",
        "pt-BR": "Curandeiro",
        "zh-CN": "治疗者"
    },
    {
        "guid": "0000000081C2",
        "opy": "_&getHealth",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Health",
        "es-MX": "Salud",
        "fr-FR": "Points de vie",
        "ja-JP": "ライフ",
        "pt-BR": "Vida",
        "zh-CN": "生命值"
    },
    {
        "opy": "_&getNormalizedHealth",
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Normalized Health",
        "guid": "0000000081C3",
        "es-MX": "Salud normalizada",
        "fr-FR": "Points de vie normalisés",
        "ja-JP": "正規化ライフ",
        "pt-BR": "Vida Normalizada",
        "zh-CN": "标准化生命值"
    },
    {
        "guid": "00000000BA5C",
        "opy": "_hero",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "HERO CONSTANT",
                "default": "ANA"
            }
        ],
        "en-US": "Hero",
        "es-ES": "Héroe",
        "es-MX": "Héroe",
        "fr-FR": "Héros",
        "it-IT": "Eroe",
        "ja-JP": "ヒーロー",
        "pl-PL": "Bohater",
        "pt-BR": "Herói",
        "ru-RU": "Герой",
        "zh-CN": "英雄"
    },
    {
        "opy": "heroIcon",
        "description": "Converts a hero parameter into a string that shows up as an icon.",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "HERO",
                "default": "HERO"
            }
        ],
        "en-US": "Hero Icon String",
        "guid": "00000000C1FE",
        "es-MX": "Cadena de ícono de héroe",
        "fr-FR": "Chaîne d’icône du héros",
        "ja-JP": "ヒーローアイコン文字列",
        "pt-BR": "String de Ícone de Herói",
        "zh-CN": "英雄图标字符串"
    },
    {
        "opy": "_&getCurrentHero",
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Hero Of",
        "guid": "00000000ACA9",
        "es-MX": "Héroe de",
        "fr-FR": "Héros de",
        "ja-JP": "ヒーロー",
        "pt-BR": "Herói de",
        "zh-CN": "所用英雄"
    },
    {
        "opy": "horizontalAngleFromDirection",
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Horizontal Angle From Direction",
        "guid": "00000000BB2C",
        "es-MX": "Ángulo horizontal desde la dirección",
        "fr-FR": "Angle horizontal depuis une direction",
        "ja-JP": "方向からの水平角",
        "pt-BR": "Ângulo Horizontal a partir da Direção",
        "zh-CN": "与此方向的水平角度"
    },
    {
        "opy": "horizontalAngleTowards",
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
        ],
        "en-US": "Horizontal Angle Towards",
        "guid": "00000000B27D",
        "es-MX": "Ángulo horizontal en dirección a",
        "fr-FR": "Angle horizontal vers",
        "ja-JP": "水平角の方向: ",
        "pt-BR": "Ângulo Horizontal Rumo a",
        "zh-CN": "水平方向夹角"
    },
    {
        "guid": "00000000F161",
        "opy": "_gamemode",
        "description": "A game mode constant.",
        "args": [
            {
                "name": "GAME MODE",
                "description": "A game mode constant.",
                "type": "GAMEMODE CONSTANT",
                "default": "ASSAULT"
            }
        ],
        "en-US": "Game Mode",
        "es-ES": "Modo de juego",
        "es-MX": "Modo de juego",
        "fr-FR": "Mode de jeu",
        "ja-JP": "ゲーム・モード",
        "pl-PL": "Tryb gry",
        "pt-BR": "Modo de jogo",
        "ru-RU": "Игровой режим",
        "zh-CN": "比赛模式"
    },
    {
        "opy": "_&getHorizontalFacingAngle",
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Horizontal Facing Angle Of",
        "guid": "00000000B27F",
        "es-MX": "Ángulo horizontal de orientación de",
        "fr-FR": "Angle horizontal du regard de",
        "ja-JP": "対面水平角: ",
        "pt-BR": "Ângulo Horizontal Frontal de",
        "zh-CN": "水平朝向角度"
    },
    {
        "opy": "_&getHorizontalSpeed",
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Horizontal Speed Of",
        "guid": "00000000B25E",
        "es-MX": "Velocidad horizontal de",
        "fr-FR": "Vitesse horizontale de",
        "ja-JP": "水平速度: ",
        "pt-BR": "Velocidade Horizontal de",
        "zh-CN": "水平速度"
    },
    {
        "opy": "hostPlayer",
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null,
        "en-US": "Host Player",
        "guid": "00000000CC1E",
        "es-MX": "Jugador anfitrión",
        "fr-FR": "Joueur hôte",
        "ja-JP": "ホスト・プレイヤー",
        "pl-PL": "Gracz gospodarz",
        "pt-BR": "Jogador Anfitrião",
        "zh-CN": "主机玩家"
    },
    {
        "opy": "iconString",
        "description": "Allows you to use an icon inside of a string.",
        "args": [
            {
                "name": "Icon",
                "description": "The icon to display.",
                "type": "ICON",
                "default": "ARROW: DOWN"
            }
        ],
        "en-US": "Icon String",
        "guid": "00000000CCDC",
        "es-MX": "Cadena de ícono",
        "fr-FR": "Chaîne d’icône",
        "it-IT": "Icona",
        "ja-JP": "アイコンストリング",
        "pl-PL": "Symbol w ciągu",
        "pt-BR": "String de Ícone",
        "zh-CN": "图标字符串"
    },
    {
        "opy": "_indexOfArrayValue",
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
        ],
        "en-US": "Index Of Array Value",
        "guid": "00000000C330",
        "es-MX": "Índice del valor de la matriz",
        "fr-FR": "Index de la valeur de tableau",
        "ja-JP": "配列値のインデックス",
        "pt-BR": "Índice do Valor da Matriz",
        "zh-CN": "数组值的索引"
    },
    {
        "opy": "_&isAlive",
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Alive",
        "guid": "00000000B278",
        "es-MX": "Está vivo",
        "fr-FR": "En vie",
        "ja-JP": "生存している",
        "pt-BR": "É Vivo",
        "zh-CN": "存活"
    },
    {
        "opy": "isAssemblingHeroes()",
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": [],
        "en-US": "Is Assembling Heroes",
        "guid": "00000000B35C",
        "es-MX": "En Forma tu equipo",
        "fr-FR": "Phase de choix de héros",
        "ja-JP": "ヒーローを編成中",
        "pt-BR": "É Escolher Heróis",
        "zh-CN": "正在集结英雄"
    },
    {
        "opy": "isMatchBetweenRounds()",
        "description": "Whether the match is between rounds.",
        "args": [],
        "en-US": "Is Between Rounds",
        "guid": "00000000B35F",
        "es-MX": "Entre rondas",
        "fr-FR": "Entre deux manches",
        "ja-JP": "ラウンドの間",
        "pt-BR": "É Entre Rodadas",
        "zh-CN": "处于回合之间"
    },
    {
        "opy": "_&isHoldingButton",
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
        ],
        "en-US": "Is Button Held",
        "guid": "00000000B2F3",
        "es-MX": "Botón presionado",
        "fr-FR": "Bouton maintenu enfoncé",
        "ja-JP": "ボタンが長押しされている",
        "pt-BR": "É Botão Segurado",
        "zh-CN": "按钮被按下"
    },
    {
        "opy": "_&isCommunicating",
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
        ],
        "en-US": "Is Communicating",
        "guid": "00000000B268",
        "es-MX": "Se está comunicando",
        "fr-FR": "Communication",
        "ja-JP": "コミュニケーションしている",
        "pt-BR": "É Comunicando",
        "zh-CN": "正在交流"
    },
    {
        "opy": "_&isCommunicatingAnything",
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Communicating Any",
        "guid": "00000000B9E5",
        "es-MX": "Comunica algo",
        "fr-FR": "N’importe quelle communication",
        "ja-JP": "任意の方法でコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer",
        "zh-CN": "正在与人交流"
    },
    {
        "opy": "_&isCommunicatingEmote",
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Communicating Any Emote",
        "guid": "00000000B9E8",
        "es-MX": "Comunica un gesto",
        "fr-FR": "Communication par emote",
        "ja-JP": "エモートでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Emote",
        "zh-CN": "正在使用表情交流"
    },
    {
        "opy": "_&isCommunicatingVoiceline",
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Communicating Any Voice line",
        "guid": "00000000B9E7",
        "es-MX": "Comunica una línea de voz",
        "fr-FR": "Communication par réplique",
        "ja-JP": "ボイス・ラインでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Fala",
        "zh-CN": "正在使用语音交流"
    },
    {
        "opy": "isControlPointLocked()",
        "description": "Whether the point is locked in control mode.",
        "args": [],
        "en-US": "Is Control Mode Point Locked",
        "guid": "00000000B37B",
        "es-MX": "Punto bloqueado en el modo Control",
        "fr-FR": "Point de contrôle verrouillé",
        "ja-JP": "コントロール・モードでポイントがロックされている",
        "pt-BR": "É Ponto Bloqueado do Modo de Controle",
        "zh-CN": "占领要点模式占领点解锁"
    },
    {
        "opy": "_&isCrouching",
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Crouching",
        "guid": "00000000B289",
        "es-MX": "Agachado",
        "fr-FR": "Accroupi",
        "ja-JP": "しゃがんでいる",
        "pt-BR": "É Agachado",
        "zh-CN": "正在蹲下"
    },
    {
        "opy": "isInSuddenDeath()",
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": [],
        "en-US": "Is CTF Mode In Sudden Death",
        "guid": "00000000B3A4",
        "es-MX": "Modo CLB en muerte súbita",
        "fr-FR": "Capture du drapeau en mort subite",
        "ja-JP": "キャプチャー・ザ・フラッグ・モードがサドンデス中",
        "pt-BR": "É Modo CaB em Morte Súbita",
        "zh-CN": "在夺旗模式中开始绝杀局"
    },
    {
        "opy": "_&isDead",
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Dead",
        "guid": "00000000B277",
        "es-MX": "Está muerto",
        "fr-FR": "Mort",
        "ja-JP": "倒れている",
        "pt-BR": "É Morto",
        "zh-CN": "死亡"
    },
    {
        "opy": "_&isDummy",
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Dummy Bot",
        "guid": "00000000CEDF",
        "es-MX": "Robot de entrenamiento",
        "fr-FR": "Est une I.A.",
        "ja-JP": "ダミーボットである",
        "pl-PL": "Jest atrapą bota.",
        "pt-BR": "É Bot",
        "zh-CN": "是否是机器人"
    },
    {
        "opy": "_&isFiringPrimaryFire",
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Firing Primary",
        "guid": "00000000C3E7",
        "es-MX": "Está usando el disparo principal",
        "fr-FR": "Tir principal",
        "ja-JP": "メイン攻撃を使用中",
        "pt-BR": "É Disparo Primário",
        "zh-CN": "正在使用主要武器"
    },
    {
        "opy": "_&isFiringSecondaryFire",
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Firing Secondary",
        "guid": "00000000C3E9",
        "es-MX": "Está usando el disparo secundario",
        "fr-FR": "Tir secondaire",
        "ja-JP": "サブ攻撃を使用中",
        "pt-BR": "É Disparo Secundário",
        "zh-CN": "正在使用辅助武器"
    },
    {
        "opy": "isFlagAtBase",
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Flag At Base",
        "guid": "00000000B3A1",
        "es-MX": "La bandera está en la base",
        "fr-FR": "Drapeau à la base",
        "ja-JP": "フラッグが陣地にある",
        "pt-BR": "É Bandeira na Base",
        "zh-CN": "旗帜是否在基地中"
    },
    {
        "opy": "isFlagBeingCarried",
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Flag Being Carried",
        "guid": "00000000B3A2",
        "es-MX": "La bandera está siendo transportada",
        "fr-FR": "Drapeau transporté",
        "ja-JP": "フラッグが運ばれている",
        "pt-BR": "É Bandeira Sendo Carregada",
        "zh-CN": "是否有人携带旗帜"
    },
    {
        "opy": "isGameInProgress()",
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": [],
        "en-US": "Is Game In Progress",
        "guid": "00000000B35E",
        "es-MX": "Partida en curso",
        "fr-FR": "Partie en cours",
        "ja-JP": "進行中のゲーム",
        "pt-BR": "É Jogo em Andamento",
        "zh-CN": "游戏正在进行中"
    },
    {
        "opy": "teamHasHero",
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
        ],
        "en-US": "Is Hero Being Played",
        "guid": "00000000B292",
        "es-MX": "Jugando con el héroe",
        "fr-FR": "Héros joué",
        "ja-JP": "ヒーローがプレイされているか",
        "pt-BR": "É o Herói em Jogo",
        "zh-CN": "正在使用英雄"
    },
    {
        "opy": "_&isInAir",
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is In Air",
        "guid": "00000000B28B",
        "es-MX": "En el aire",
        "fr-FR": "Dans les airs",
        "ja-JP": "空中にいる",
        "pt-BR": "É no Ar",
        "zh-CN": "正在空中"
    },
    {
        "opy": "_isInLineOfSight",
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
        ],
        "en-US": "Is In Line of Sight",
        "guid": "00000000B1EC",
        "es-MX": "En la línea de visión",
        "fr-FR": "Dans la ligne de vue",
        "ja-JP": "射線が通っている",
        "pt-BR": "É Na Linha de Visão",
        "zh-CN": "在视线内"
    },
    {
        "opy": "isInSetup()",
        "description": "Whether the match is currently in its setup phase.",
        "args": [],
        "en-US": "Is In Setup",
        "guid": "00000000B35D",
        "es-MX": "En preparación",
        "fr-FR": "Dans les paramètres",
        "ja-JP": "セットアップ中",
        "pt-BR": "É em Organização",
        "zh-CN": "正在设置"
    },
    {
        "opy": "_&isInSpawnRoom",
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is In Spawn Room",
        "guid": "00000000B3B1",
        "es-MX": "En el cuarto de reaparición",
        "fr-FR": "Dans la salle d’apparition",
        "ja-JP": "リスポーンエリアにいる",
        "pt-BR": "É Na Sala de Ressurgimento",
        "zh-CN": "在重生室中"
    },
    {
        "opy": "_&isInViewAngle",
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
        ],
        "en-US": "Is In View Angle",
        "guid": "00000000BF7C",
        "es-MX": "En el ángulo de vista",
        "fr-FR": "Dans le champ de vision",
        "ja-JP": "視角範囲内",
        "pt-BR": "É No Ângulo de Visão",
        "zh-CN": "在视野内"
    },
    {
        "opy": "isMatchComplete()",
        "description": "Whether the match has finished.",
        "args": [],
        "en-US": "Is Match Complete",
        "guid": "00000000B360",
        "es-MX": "Partida Completada",
        "fr-FR": "Partie terminée",
        "ja-JP": "マッチが完了している",
        "pt-BR": "É Partida Concluída",
        "zh-CN": "比赛结束"
    },
    {
        "opy": "_&isMoving",
        "description": "Whether a player is moving (defined as having a nonzero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Moving",
        "guid": "00000000B288",
        "es-MX": "En movimiento",
        "fr-FR": "Se déplace",
        "ja-JP": "移動している",
        "pt-BR": "É Movimentando-se",
        "zh-CN": "正在移动"
    },
    {
        "opy": "isObjectiveComplete",
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Is Objective Complete",
        "guid": "00000000B378",
        "es-MX": "Objetivo completado",
        "fr-FR": "Objectif accompli",
        "ja-JP": "目標をクリアした",
        "pt-BR": "É Objetivo Concluído",
        "zh-CN": "目标是否完成"
    },
    {
        "opy": "_&isOnGround",
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is On Ground",
        "guid": "00000000BF70",
        "es-MX": "En el suelo",
        "fr-FR": "Au sol",
        "ja-JP": "地上にいる",
        "pt-BR": "É No Chão",
        "zh-CN": "在地面上"
    },
    {
        "opy": "_&isOnObjective",
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is On Objective",
        "guid": "00000000B3B2",
        "es-MX": "En el objetivo",
        "fr-FR": "Sur l’objectif",
        "ja-JP": "目標にいる",
        "pt-BR": "É No Objetivo",
        "zh-CN": "在目标点上"
    },
    {
        "opy": "_&isOnWall",
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is On Wall",
        "guid": "00000000BB0B",
        "es-MX": "En el muro",
        "fr-FR": "Sur le mur",
        "ja-JP": "壁の上にいる",
        "pt-BR": "É Na Parede",
        "zh-CN": "在墙上"
    },
    {
        "opy": "_&isOnFire",
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Portrait On Fire",
        "guid": "00000000B3B3",
        "es-MX": "Retrato en llamas",
        "fr-FR": "Portrait « en feu »",
        "ja-JP": "ポートレートに炎エフェクトがついている",
        "pt-BR": "É Retrato Em Chamas",
        "zh-CN": "头像火力全开"
    },
    {
        "opy": "_&isStanding",
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Standing",
        "guid": "00000000B287",
        "es-MX": "De pie",
        "fr-FR": "Debout",
        "ja-JP": "立っている",
        "pt-BR": "É Parado",
        "zh-CN": "正在站立"
    },
    {
        "opy": "isTeamOnDefense",
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Team On Defense",
        "guid": "00000000B359",
        "es-MX": "Equipo defensor",
        "fr-FR": "Équipe en défense",
        "ja-JP": "防衛側のチーム",
        "pt-BR": "É Equipe na Defensa",
        "zh-CN": "正在防守"
    },
    {
        "opy": "isTeamOnOffense",
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Team On Offense",
        "guid": "00000000B354",
        "es-MX": "Equipo atacante",
        "fr-FR": "Équipe en attaque",
        "ja-JP": "攻撃側のチーム",
        "pt-BR": "É Equipe no Ataque",
        "zh-CN": "作为进攻队伍"
    },
    {
        "opy": "_all",
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
        ],
        "en-US": "Is True For All",
        "guid": "00000000B5BA",
        "es-MX": "Es verdadero para todos",
        "fr-FR": "Vrai pour tous",
        "ja-JP": "すべてに対して「TRUE」",
        "pt-BR": "É Verdadeiro para Todos",
        "zh-CN": "对全部为”真“"
    },
    {
        "opy": "_any",
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
        ],
        "en-US": "Is True For Any",
        "guid": "00000000B5BB",
        "es-MX": "Es verdadero para cualquiera",
        "fr-FR": "Vrai pour n’importe qui",
        "ja-JP": "いずれに対しても「TRUE」",
        "pt-BR": "É Verdadeiro para Qualquer",
        "zh-CN": "对任意为”真“"
    },
    {
        "opy": "_&isUsingAbility1",
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Using Ability 1",
        "guid": "00000000C3EB",
        "es-MX": "Está utilizando la habilidad 1",
        "fr-FR": "Capacité 1 utilisée",
        "ja-JP": "アビリティ1を使用",
        "pt-BR": "É Usando Habilidade 1",
        "zh-CN": "正在使用技能 1"
    },
    {
        "opy": "_&isUsingAbility2",
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Using Ability 2",
        "guid": "00000000C3ED",
        "es-MX": "Está utilizando la habilidad 2",
        "fr-FR": "Capacité 2 utilisée",
        "ja-JP": "アビリティ2を使用",
        "pt-BR": "É Usando Habilidade 2",
        "zh-CN": "正在使用技能 2"
    },
    {
        "opy": "_&isUsingUltimate",
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Using Ultimate",
        "guid": "00000000B9D4",
        "es-MX": "Está usando la habilidad máxima",
        "fr-FR": "Capacité ultime utilisée",
        "ja-JP": "アルティメットを使用している",
        "pt-BR": "É Usando Suprema",
        "zh-CN": "正在使用终极技能"
    },
    {
        "opy": "isWaitingForPlayers()",
        "description": "Whether the match is waiting for players to join before starting.",
        "args": [],
        "en-US": "Is Waiting For Players",
        "guid": "00000000B35B",
        "es-MX": "Esperando jugadores",
        "fr-FR": "En attente de joueurs",
        "ja-JP": "ほかのプレイヤーを待っている",
        "pt-BR": "É Aguardando Jogadores",
        "zh-CN": "正在等待玩家"
    },
    {
        "opy": "getLastCreatedEntity()",
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": [],
        "en-US": "Last Created Entity",
        "guid": "00000000B362",
        "es-MX": "Última entidad creada",
        "fr-FR": "Dernière entité créée",
        "ja-JP": "最新のエンティティ",
        "pt-BR": "Entidade Criada por Último",
        "zh-CN": "最后创建的实体"
    },
    {
        "opy": "getLastDamageModification()",
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Damage Modification ID",
        "guid": "00000000C64A",
        "es-MX": "ID de modificación de daño anterior",
        "fr-FR": "Dernier identifiant de modification de dégâts",
        "ja-JP": "最新のダメージ変更ID",
        "pt-BR": "ID de Modificação de Dano Mais Recente",
        "zh-CN": "上一个伤害调整ID"
    },
    {
        "opy": "getLastDoT()",
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Damage Over Time ID",
        "guid": "00000000B263",
        "es-MX": "ID de daño con el tiempo anterior",
        "fr-FR": "Dernier identifiant de dégâts sur la durée",
        "ja-JP": "最新の継続ダメージID",
        "pt-BR": "ID de Dano ao Longo do Tempo Mais Recente",
        "zh-CN": "上一个持续伤害效果ID"
    },
    {
        "opy": "getLastHoT()",
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Heal Over Time ID",
        "guid": "00000000B262",
        "es-MX": "ID de sanación con el tiempo anterior",
        "fr-FR": "Dernier identifiant de soins sur la durée",
        "ja-JP": "最新の継続ヒールID",
        "pt-BR": "ID de Cura ao Longo do Tempo Mais Recente",
        "zh-CN": "上一个持续治疗效果ID"
    },
    {
        "opy": "_lastOf",
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Last Of",
        "guid": "00000000B5C1",
        "es-MX": "Último de",
        "fr-FR": "Dernier",
        "ja-JP": "最後。全体数は",
        "pt-BR": "Último de",
        "zh-CN": "最后"
    },
    {
        "opy": "getLastCreatedText()",
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": [],
        "en-US": "Last Text ID",
        "guid": "00000000BAFE",
        "es-MX": "ID de texto anterior",
        "fr-FR": "Dernier identifiant de texte",
        "ja-JP": "最新のテキストID",
        "pt-BR": "ID de Texto Mais Recente",
        "zh-CN": "上一个文本ID"
    },
    {
        "guid": "00000000B116",
        "opy": "Vector.LEFT",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null,
        "en-US": "Left",
        "es-MX": "Izquierda",
        "fr-FR": "Gauche",
        "ja-JP": "左",
        "pt-BR": "Esquerda",
        "zh-CN": "左"
    },
    {
        "opy": "localVector",
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
        ],
        "en-US": "Local Vector Of",
        "guid": "00000000B342",
        "es-MX": "Vector local de",
        "fr-FR": "Vecteur local de",
        "ja-JP": "ローカルのベクトル: ",
        "pt-BR": "Vetor Local de",
        "zh-CN": "本地矢量"
    },
    {
        "guid": "00000000D411",
        "opy": "_map",
        "description": "A map constant.",
        "args": [
            {
                "name": "MAP",
                "description": "A map constant.",
                "type": "MAP CONSTANT",
                "default": "AYUTTHAYA"
            }
        ],
        "en-US": "Map",
        "es-ES": "Mapa",
        "es-MX": "Mapa",
        "fr-FR": "Carte",
        "it-IT": "Mappa",
        "ja-JP": "マップ",
        "pl-PL": "Mapa",
        "pt-BR": "Mapa",
        "ru-RU": "Поле боя",
        "zh-CN": "地图",
        "zh-TW": "地圖"
    },
    {
        "opy": "getMatchRound()",
        "description": "The current round of the match, counting up from 1.",
        "args": [],
        "en-US": "Match Round",
        "guid": "00000000B375",
        "es-MX": "Ronda de la partida",
        "fr-FR": "Manche de la partie",
        "ja-JP": "マッチのラウンド",
        "pt-BR": "Rodada da Partida",
        "zh-CN": "比赛回合"
    },
    {
        "opy": "getMatchTime()",
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": [],
        "en-US": "Match Time",
        "guid": "00000000AD3B",
        "es-MX": "Tiempo de la partida",
        "fr-FR": "Temps de jeu",
        "ja-JP": "マッチ時間",
        "pt-BR": "Tempo da Partida",
        "zh-CN": "比赛时间"
    },
    {
        "guid": "00000000C418",
        "opy": "max",
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
        ],
        "en-US": "Max",
        "es-MX": "Máximo",
        "fr-FR": "Maximum",
        "ja-JP": "最大",
        "pt-BR": "Máx.",
        "zh-CN": "较大"
    },
    {
        "opy": "_&getMaxHealth",
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Max Health",
        "guid": "0000000081C4",
        "es-MX": "Salud máxima",
        "fr-FR": "Points de vie maximum",
        "ja-JP": "最大ライフ",
        "pt-BR": "Vida Máxima",
        "zh-CN": "最大生命值"
    },
    {
        "guid": "00000000C416",
        "opy": "min",
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
        ],
        "en-US": "Min",
        "es-MX": "Mínimo",
        "fr-FR": "Minimum",
        "ja-JP": "分",
        "pt-BR": "Mín.",
        "zh-CN": "较小"
    },
    {
        "guid": "00000000C410",
        "opy": "_modulo",
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
        ],
        "en-US": "Modulo",
        "es-MX": "Módulo",
        "ja-JP": "剰余",
        "pt-BR": "Modular",
        "zh-CN": "余数"
    },
    {
        "guid": "00000000C40D",
        "opy": "_multiply",
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
        ],
        "en-US": "Multiply",
        "es-MX": "Multiplicar",
        "fr-FR": "Multiplication",
        "ja-JP": "乗算",
        "pt-BR": "Multiplicar",
        "zh-CN": "乘"
    },
    {
        "opy": "nearestWalkablePosition",
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ],
        "en-US": "Nearest Walkable Position",
        "guid": "00000000C324",
        "es-MX": "Posición caminable más cercana",
        "fr-FR": "Position la plus proche en marchant",
        "ja-JP": "最も近い歩行可能な位置",
        "pt-BR": "Posição Transitável Mais Próxima",
        "zh-CN": "最近的可行走位置"
    },
    {
        "opy": "normalize",
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Normalize",
        "guid": "00000000C344",
        "es-MX": "Normalizar",
        "fr-FR": "Normalisation",
        "ja-JP": "正規化",
        "pt-BR": "Normalizar",
        "zh-CN": "归一化"
    },
    {
        "guid": "00000000B275",
        "opy": "not",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ],
        "en-US": "Not",
        "es-MX": "No",
        "fr-FR": "Pas",
        "ja-JP": "NOT",
        "pt-BR": "Não",
        "zh-CN": "非"
    },
    {
        "opy": "null",
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null,
        "en-US": "Null",
        "guid": "00000000B594",
        "es-MX": "Nulo",
        "fr-FR": "Non applicable",
        "ja-JP": "NULL",
        "pt-BR": "Nulo",
        "zh-CN": "无"
    },
    {
        "opy": "getNumberOfDeadPlayers",
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number of Dead Players",
        "guid": "00000000B29A",
        "es-MX": "Cantidad de jugadores muertos",
        "fr-FR": "Nombre de joueurs morts",
        "ja-JP": "倒れたプレイヤーの数",
        "pt-BR": "Número de Jogadores Mortos",
        "zh-CN": "死亡玩家数量"
    },
    {
        "opy": "_&getNumberOfDeaths",
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Number of Deaths",
        "guid": "00000000B103",
        "es-MX": "Cantidad de muertes",
        "fr-FR": "Nombre de morts",
        "ja-JP": "デス数",
        "pt-BR": "Número de Mortes",
        "zh-CN": "死亡数"
    },
    {
        "opy": "_&getNumberOfElims",
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Number of Eliminations",
        "guid": "00000000B101",
        "es-MX": "Cantidad de eliminaciones",
        "fr-FR": "Nombre d’éliminations",
        "ja-JP": "キル数",
        "pt-BR": "Número de Eliminações",
        "zh-CN": "消灭数"
    },
    {
        "opy": "_&getNumberOfFinalBlows",
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Number of Final Blows",
        "guid": "00000000B102",
        "es-MX": "Cantidad de golpes de gracia",
        "fr-FR": "Nombre de coups de grâce",
        "ja-JP": "ファイナル・ブロウ数",
        "pt-BR": "Número de Golpes Finais",
        "zh-CN": "最后一击数"
    },
    {
        "opy": "getNumberOfHeroes",
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
        ],
        "en-US": "Number of Heroes",
        "guid": "00000000B296",
        "es-MX": "Cantidad de héroes",
        "fr-FR": "Nombre de héros",
        "ja-JP": "ヒーローの数",
        "pt-BR": "Número de Heróis",
        "zh-CN": "英雄数量"
    },
    {
        "opy": "getNumberOfLivingPlayers",
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number of Living Players",
        "guid": "00000000B297",
        "es-MX": "Cantidad de jugadores vivos",
        "fr-FR": "Nombre de joueurs en vie",
        "ja-JP": "生存プレイヤーの数",
        "pt-BR": "Número de Jogadores Vivos",
        "zh-CN": "存活玩家数量"
    },
    {
        "opy": "getNumberOfPlayers",
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number of Players",
        "guid": "00000000B295",
        "es-MX": "Cantidad de jugadores",
        "fr-FR": "Nombre de joueurs",
        "ja-JP": "プレイヤーの数",
        "pt-BR": "Número de Jogadores",
        "zh-CN": "玩家数量"
    },
    {
        "opy": "getNumberOfPlayersOnObjective",
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number of Players On Objective",
        "guid": "00000000B29B",
        "es-MX": "Cantidad de jugadores en el objetivo",
        "fr-FR": "Nombre de joueurs sur l’objectif",
        "ja-JP": "目標を確保中のプレイヤーの数",
        "pt-BR": "Número de Jogadores no Objetivo",
        "zh-CN": "目标点上玩家数量"
    },
    {
        "opy": "getCurrentObjective()",
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": [],
        "en-US": "Objective Index",
        "guid": "00000000B37D",
        "es-MX": "Índice de objetivo",
        "fr-FR": "Index de l’objectif",
        "ja-JP": "コントロール・モードのサブマップ番号",
        "pt-BR": "Índice do Objetivo",
        "zh-CN": "对象索引"
    },
    {
        "opy": "getObjectivePosition",
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Objective Position",
        "guid": "00000000B355",
        "es-MX": "Posición del objetivo",
        "fr-FR": "Position de l’objectif",
        "ja-JP": "目標の位置",
        "pt-BR": "Posição do Objetivo",
        "zh-CN": "目标位置"
    },
    {
        "opy": "getOppositeTeam",
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Opposite Team Of",
        "guid": "00000000BB0A",
        "es-MX": "Equipo contrario de",
        "fr-FR": "Équipe opposée à",
        "ja-JP": "相手チーム: ",
        "pt-BR": "Equipe Adversária de",
        "zh-CN": "对方队伍"
    },
    {
        "guid": "00000000B274",
        "opy": "_or",
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
        ],
        "en-US": "Or",
        "es-MX": "O",
        "fr-FR": "Ou",
        "ja-JP": "OR",
        "pt-BR": "Ou",
        "zh-CN": "或"
    },
    {
        "opy": "getPayloadPosition",
        "description": "The position in the world of the active payload.",
        "args": [],
        "en-US": "Payload Position",
        "guid": "00000000B356",
        "es-MX": "Posición de la carga",
        "fr-FR": "Position du convoi",
        "ja-JP": "ペイロードの位置",
        "pt-BR": "Posição da Carga",
        "zh-CN": "运载目标位置"
    },
    {
        "opy": "getPayloadProgressPercentage",
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": [],
        "en-US": "Payload Progress Percentage",
        "guid": "00000000B357",
        "es-MX": "Porcentaje de progreso de la carga",
        "fr-FR": "Pourcentage de progression du convoi",
        "ja-JP": "ペイロード進行のパーセンテージ",
        "pt-BR": "Percentual de Progresso da Carga",
        "zh-CN": "运载目标进度百分比"
    },
    {
        "opy": "getFlagCarrier",
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Player Carrying Flag",
        "guid": "00000000B3A3",
        "es-MX": "Jugador que transporta la bandera",
        "fr-FR": "Joueur portant le drapeau",
        "ja-JP": "フラッグを運んでいる",
        "pt-BR": "Jogador Carregando a Bandeira",
        "zh-CN": "携带旗帜的玩家"
    },
    {
        "opy": "_&getPlayerClosestToReticle",
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
        ],
        "en-US": "Player Closest To Reticle",
        "guid": "00000000C328",
        "es-MX": "Jugador más cercano al retículo",
        "fr-FR": "Joueur le plus proche du réticule",
        "ja-JP": "照準に最も近いプレイヤー",
        "pt-BR": "Jogador Mais Próximo da Mira",
        "zh-CN": "距离准星最近的玩家"
    },
    {
        "opy": "_playerVar",
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
        ],
        "en-US": "Player Variable",
        "guid": "00000000B0FD",
        "es-MX": "Variable de jugador",
        "fr-FR": "Variable de joueur",
        "ja-JP": "プレイヤー変数",
        "pt-BR": "Variável de Jogador",
        "zh-CN": "玩家变量"
    },
    {
        "opy": "getPlayersInSlot",
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
        ],
        "en-US": "Players In Slot",
        "guid": "00000000B334",
        "es-MX": "Jugadores en la posición",
        "fr-FR": "Joueurs dans l’emplacement",
        "ja-JP": "スロットに入ったプレイヤー",
        "pt-BR": "Jogadores no Espaço",
        "zh-CN": "此位置的玩家"
    },
    {
        "opy": "_&getPlayersInViewAngle",
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
        ],
        "en-US": "Players in View Angle",
        "guid": "00000000C32F",
        "es-MX": "Jugadores en el ángulo de vista",
        "fr-FR": "Joueurs dans le champ de vision",
        "ja-JP": "視角範囲内のプレイヤー",
        "pt-BR": "Jogadores no Ângulo de Visão",
        "zh-CN": "视角中的玩家"
    },
    {
        "opy": "getPlayersOnHero",
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
        ],
        "en-US": "Players On Hero",
        "guid": "00000000B338",
        "es-MX": "Jugadores con el héroe",
        "fr-FR": "Joueurs sur le héros",
        "ja-JP": "ヒーローを使用中のプレイヤー",
        "pt-BR": "Jogadores Usando o Herói",
        "zh-CN": "选择英雄的玩家"
    },
    {
        "opy": "getPlayersInRadius",
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
        ],
        "en-US": "Players Within Radius",
        "guid": "00000000B1E0",
        "es-MX": "Jugadores dentro del radio",
        "fr-FR": "Joueurs dans un rayon",
        "ja-JP": "範囲内のプレイヤー",
        "pt-BR": "Jogadores no Raio",
        "zh-CN": "范围内玩家"
    },
    {
        "opy": "getCapturePercentage",
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": [],
        "en-US": "Point Capture Percentage",
        "guid": "00000000B358",
        "es-MX": "Porcentaje de captura de punto",
        "fr-FR": "Pourcentage de capture du point",
        "ja-JP": "ポイント・キャプチャーのパーセンテージ",
        "pt-BR": "Percentual de Captura do Ponto",
        "zh-CN": "目标点占领百分比"
    },
    {
        "opy": "_&getPosition",
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Position Of",
        "guid": "00000000B11C",
        "es-MX": "Posición de",
        "fr-FR": "Position de",
        "ja-JP": "位置: ",
        "pt-BR": "Posição de",
        "zh-CN": "所选位置"
    },
    {
        "guid": "00000000C414",
        "opy": "_raiseToPower",
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
        ],
        "en-US": "Raise To Power",
        "es-MX": "Elevar a la potencia",
        "fr-FR": "Élévation à une puissance ",
        "ja-JP": "累乗",
        "pt-BR": "Elevar à Potência",
        "zh-CN": "乘方"
    },
    {
        "opy": "random.randint",
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
        ],
        "en-US": "Random Integer",
        "guid": "00000000B59B",
        "es-MX": "Número entero aleatorio",
        "fr-FR": "Nombre entier aléatoire",
        "ja-JP": "ランダムな整数",
        "pt-BR": "Inteiro Aleatório",
        "zh-CN": "随机整数"
    },
    {
        "opy": "random.uniform",
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
        ],
        "en-US": "Random Real",
        "guid": "00000000B59A",
        "es-MX": "Número real aleatorio",
        "fr-FR": "Nombre réel aléatoire",
        "ja-JP": "ランダムな実数",
        "pt-BR": "Real Aleatório",
        "zh-CN": "随机实数"
    },
    {
        "opy": "random.choice",
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Random Value In Array",
        "guid": "00000000B599",
        "es-MX": "Valor aleatorio en matriz",
        "fr-FR": "Valeur aléatoire dans le tableau",
        "ja-JP": "配列内のランダムな値",
        "pt-BR": "Valor Aleatório na Matriz",
        "zh-CN": "数组随机取值"
    },
    {
        "opy": "random.shuffle",
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Randomized Array",
        "guid": "00000000B598",
        "es-MX": "Matriz aleatorizada",
        "fr-FR": "Tableau aléatoire",
        "ja-JP": "ランダム化された配列",
        "pt-BR": "Matriz Randomizada",
        "zh-CN": "随机数组"
    },
    {
        "opy": "_getNormal",
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
        ],
        "en-US": "Ray Cast Hit Normal",
        "guid": "00000000C613",
        "es-MX": "Estándar de impacto de lanzamiento de rayo",
        "fr-FR": "Surface intersectée par le rayon émis",
        "ja-JP": "レイ・キャストが当たった法線",
        "pt-BR": "Normal de Acerto do Lançamento de Raio",
        "zh-CN": "射线命中法线"
    },
    {
        "opy": "_getPlayerHit",
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
        ],
        "en-US": "Ray Cast Hit Player",
        "guid": "00000000C611",
        "es-MX": "Jugador de impacto de lanzamiento de rayo",
        "fr-FR": "Joueur intersecté par le rayon émis",
        "ja-JP": "レイ・キャストが当たったプレイヤー",
        "pt-BR": "Jogador Atingido pelo Lançamento de Raio",
        "zh-CN": "射线命中玩家"
    },
    {
        "opy": "_getHitPosition",
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
        ],
        "en-US": "Ray Cast Hit Position",
        "guid": "00000000C597",
        "es-MX": "Posición de impacto de lanzamiento de rayo",
        "fr-FR": "Position d’impact du rayon émis",
        "ja-JP": "レイ・キャストのヒット位置",
        "pt-BR": "Posição de Acerto do Lançamento de Raio",
        "zh-CN": "射线命中位置"
    },
    {
        "opy": "_removeFromArray",
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
        ],
        "en-US": "Remove From Array",
        "guid": "00000000C421",
        "es-MX": "Eliminar de la matriz",
        "fr-FR": "Supprimer du tableau",
        "ja-JP": "配列から削除",
        "pt-BR": "Remover da Matriz",
        "zh-CN": "从数组中移除"
    },
    {
        "guid": "00000000B117",
        "opy": "Vector.RIGHT",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null,
        "en-US": "Right",
        "es-MX": "Derecha",
        "fr-FR": "Droite",
        "ja-JP": "右",
        "pt-BR": "Direita",
        "zh-CN": "右"
    },
    {
        "opy": "_round",
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
        ],
        "en-US": "Round To Integer",
        "guid": "00000000C354",
        "es-MX": "Redondear a número entero",
        "fr-FR": "Arrondir à l’entier",
        "ja-JP": "整数への四捨五入",
        "pt-BR": "Arredondar para Inteiro",
        "zh-CN": "取整"
    },
    {
        "opy": "_&getScore",
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Score Of",
        "guid": "00000000AD3C",
        "es-MX": "Puntuación de",
        "fr-FR": "Score de",
        "ja-JP": "スコア: ",
        "pt-BR": "Pontuação de",
        "zh-CN": "分数"
    },
    {
        "guid": "00000000C961",
        "opy": "getServerLoad()",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "en-US": "Server Load",
        "es-MX": "Uso del servidor",
        "fr-FR": "Charge du serveur",
        "ja-JP": "サーバー負荷",
        "pl-PL": "Obciążenie serwera",
        "pt-BR": "Uso do Servidor",
        "zh-CN": "服务器负载"
    },
    {
        "guid": "00000000C997",
        "opy": "getAverageServerLoad()",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "en-US": "Server Load Average",
        "es-MX": "Uso promedio del servidor",
        "fr-FR": "Charge moyenne du serveur",
        "ja-JP": "サーバー負荷平均",
        "pl-PL": "Średnie obciążenie serwera",
        "pt-BR": "Média de Uso do Servidor",
        "zh-CN": "服务器负载平均值"
    },
    {
        "guid": "00000000C996",
        "opy": "getPeakServerLoad()",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "en-US": "Server Load Peak",
        "es-MX": "Uso máximo del servidor",
        "fr-FR": "Pic de charge du serveur",
        "ja-JP": "サーバー負荷ピーク",
        "pl-PL": "Szczytowe obciążenie serwera",
        "pt-BR": "Pico de Uso do Servidor",
        "zh-CN": "服务器负载峰值"
    },
    {
        "opy": "sinDeg",
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Sine From Degrees",
        "guid": "00000000C33C",
        "es-MX": "Seno en grados",
        "fr-FR": "Sinus en degrés",
        "ja-JP": "度のサイン",
        "pt-BR": "Seno de Graus",
        "zh-CN": "角度的正弦值"
    },
    {
        "opy": "sin",
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Sine From Radians",
        "guid": "00000000C340",
        "es-MX": "Seno en radianes",
        "fr-FR": "Sinus en radians",
        "ja-JP": "ラジアンのサイン",
        "pt-BR": "Seno de Radianos",
        "zh-CN": "弧度的正弦值"
    },
    {
        "opy": "_&getSlot",
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Slot Of",
        "guid": "00000000BB7F",
        "es-MX": "Posición de",
        "fr-FR": "Emplacement de",
        "ja-JP": "スロット: ",
        "pt-BR": "Espaço de",
        "zh-CN": "位置"
    },
    {
        "opy": "_sortedArray",
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
        ],
        "en-US": "Sorted Array",
        "guid": "00000000B5C0",
        "es-MX": "Matriz ordenada",
        "fr-FR": "Tableau trié",
        "ja-JP": "ソートされた配列",
        "pt-BR": "Matriz Ordenada",
        "zh-CN": "已排序的数组"
    },
    {
        "opy": "_&getSpeed",
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Speed Of",
        "guid": "00000000B25D",
        "es-MX": "Velocidad de",
        "fr-FR": "Vitesse de",
        "ja-JP": "速さ: ",
        "pt-BR": "Velocidade de",
        "zh-CN": "速度"
    },
    {
        "opy": "_&getSpeedInDirection",
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
        ],
        "en-US": "Speed Of In Direction",
        "guid": "00000000B260",
        "es-MX": "Velocidad de/en dirección",
        "fr-FR": "Vitesse dans la direction donnée de",
        "ja-JP": "速さと方向: ",
        "pt-BR": "Velocidade de na Direção",
        "zh-CN": "指定方向速度"
    },
    {
        "opy": "sqrt",
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Square Root",
        "guid": "00000000C356",
        "es-MX": "Raíz cuadrada",
        "fr-FR": "Racine carrée",
        "ja-JP": "平方根",
        "pt-BR": "Raiz Quadrada",
        "zh-CN": "平方根"
    },
    {
        "guid": "00000000BA60",
        "opy": "_localizedString",
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
        ],
        "en-US": "String",
        "es-MX": "Cadena",
        "fr-FR": "Chaîne de texte",
        "ja-JP": "文字列",
        "zh-CN": "字符串"
    },
    {
        "guid": "00000000C40A",
        "opy": "_subtract",
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
        ],
        "en-US": "Subtract",
        "es-MX": "Restar",
        "fr-FR": "Soustraction",
        "ja-JP": "減算",
        "pt-BR": "Subtrair",
        "zh-CN": "减"
    },
    {
        "opy": "tanDeg",
        "description": "Tangent of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Tangent From Degrees",
        "guid": "00000000C7F8",
        "es-MX": "Tangente en grados",
        "fr-FR": "Tangente en degrés",
        "ja-JP": "度のタンジェント",
        "pt-BR": "Tangente de Graus",
        "zh-CN": "角度的正切值"
    },
    {
        "opy": "tan",
        "description": "Tangent of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Tangent From Radians",
        "guid": "00000000C7FD",
        "es-MX": "Tangente en radianes",
        "fr-FR": "Tangente en radians",
        "ja-JP": "ラジアンのタンジェント",
        "pt-BR": "Tangente de Radianos",
        "zh-CN": "弧度的正切值"
    },
    {
        "opy": "_&getTeam",
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Team Of",
        "guid": "00000000B279",
        "es-MX": "Equipo de",
        "fr-FR": "Équipe de",
        "ja-JP": "チーム: ",
        "pt-BR": "Equipe de",
        "zh-CN": "所在队伍"
    },
    {
        "guid": "00000000B353",
        "opy": "teamScore",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Team Score",
        "es-MX": "Puntuación del equipo",
        "fr-FR": "Score de l’équipe",
        "ja-JP": "チーム・スコア",
        "pt-BR": "Pontuação da Equipe",
        "zh-CN": "团队得分"
    },
    {
        "opy": "_&getThrottle",
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Throttle Of",
        "guid": "00000000B2F5",
        "es-MX": "Aceleración de",
        "fr-FR": "Accélération de",
        "ja-JP": "スロットル: ",
        "pt-BR": "Aceleração de",
        "zh-CN": "阈值"
    },
    {
        "opy": "getTotalTimeElapsed",
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": [],
        "en-US": "Total Time Elapsed",
        "guid": "00000000B361",
        "es-MX": "Tiempo total transcurrido",
        "fr-FR": "Temps total écoulé",
        "ja-JP": "合計経過時間",
        "pt-BR": "Tempo Total Decorrido",
        "zh-CN": "总计消耗时间"
    },
    {
        "opy": "true",
        "description": "The boolean value of true.",
        "args": null,
        "en-US": "True",
        "guid": "00000000AC39",
        "es-MX": "Verdadero",
        "fr-FR": "Vrai",
        "zh-CN": "真"
    },
    {
        "opy": "_&getUltCharge",
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Ultimate Charge Percent",
        "guid": "0000000081C5",
        "es-MX": "Porcentaje de carga de la habilidad máxima",
        "fr-FR": "Pourcentage de charge de la capacité ultime",
        "ja-JP": "アルティメット・チャージのパーセンテージ",
        "pt-BR": "Percentual de Carga da Suprema",
        "zh-CN": "终极技能充能百分比"
    },
    {
        "guid": "00000000B118",
        "opy": "Vector.UP",
        "description": "Shorthand for the directional vector(0, l, 0), which points upward.",
        "args": null,
        "en-US": "Up",
        "es-MX": "Arriba",
        "fr-FR": "Haut",
        "ja-JP": "上",
        "pt-BR": "Cima",
        "zh-CN": "上"
    },
    {
        "opy": "_valueInArray",
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
        ],
        "en-US": "Value In Array",
        "guid": "00000000B52A",
        "es-MX": "Valor en la matriz",
        "fr-FR": "Valeur dans le tableau",
        "ja-JP": "配列内の値",
        "pt-BR": "Valor na Matriz",
        "zh-CN": "数组中的值"
    },
    {
        "guid": "00000000B0F1",
        "opy": "vect",
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
        ],
        "en-US": "Vector",
        "fr-FR": "Vecteur",
        "ja-JP": "ベクトル",
        "pt-BR": "Vetor",
        "zh-CN": "矢量"
    },
    {
        "opy": "vectorTowards",
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
        ],
        "en-US": "Vector Towards",
        "guid": "00000000B1EB",
        "es-MX": "Vector hacia",
        "fr-FR": "Vecteur vers",
        "ja-JP": "ベクトルの方向: ",
        "pt-BR": "Vetor Rumo a",
        "zh-CN": "向量"
    },
    {
        "opy": "_&getVelocity",
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Velocity Of",
        "guid": "00000000B25C",
        "es-MX": "Velocidad de",
        "fr-FR": "Vélocité de",
        "ja-JP": "速度: ",
        "pt-BR": "Rapidez de",
        "zh-CN": "速率"
    },
    {
        "opy": "verticalAngleOfDirection",
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Vertical Angle From Direction",
        "guid": "00000000BB2B",
        "es-MX": "Ángulo vertical desde la dirección",
        "fr-FR": "Angle vertical depuis une direction",
        "ja-JP": "方向からの頂角",
        "pt-BR": "Ângulo Vertical a partir da Direção",
        "zh-CN": "与此方向的垂直角度"
    },
    {
        "opy": "verticalAngleTowards",
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
        ],
        "en-US": "Vertical Angle Towards",
        "guid": "00000000B27E",
        "es-MX": "Ángulo vertical en dirección a",
        "fr-FR": "Angle vertical vers",
        "ja-JP": "頂角の方向: ",
        "pt-BR": "Ângulo Vertical Rumo a",
        "zh-CN": "垂直方向夹角"
    },
    {
        "opy": "_&getVerticalFacingAngle",
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Vertical Facing Angle Of",
        "guid": "00000000B280",
        "es-MX": "Ángulo vertical de orientación de",
        "fr-FR": "Angle vertical du regard de",
        "ja-JP": "対面頂角: ",
        "pt-BR": "Ângulo Vertical Frontal de",
        "zh-CN": "垂直朝向角度"
    },
    {
        "opy": "_&getVerticalSpeed",
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Vertical Speed Of",
        "guid": "00000000B25F",
        "es-MX": "Velocidad vertical de",
        "fr-FR": "Vitesse verticale de",
        "ja-JP": "垂直速度: ",
        "pt-BR": "Velocidade Vertical de",
        "zh-CN": "垂直速度"
    },
    {
        "guid": "00000000B330",
        "opy": "victim",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null,
        "en-US": "Victim",
        "es-MX": "Víctima",
        "fr-FR": "Victime",
        "ja-JP": "犠牲者",
        "pt-BR": "Vítima",
        "zh-CN": "被攻击方"
    },
    {
        "opy": "worldVector",
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
        ],
        "en-US": "World Vector Of",
        "guid": "00000000B33A",
        "es-MX": "Vector global de",
        "fr-FR": "Vecteur mondial de",
        "ja-JP": "ワールド座標のベクトル: ",
        "pt-BR": "Vetor do Mundo de",
        "zh-CN": "地图矢量"
    },
    {
        "opy": "_xComponentOf",
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "X Component Of",
        "guid": "00000000B26F",
        "es-MX": "Componente X de",
        "fr-FR": "Composante X de",
        "ja-JP": "X成分: ",
        "pt-BR": "Componente X de",
        "zh-CN": "X方向分量"
    },
    {
        "opy": "_yComponentOf",
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Y Component Of",
        "guid": "00000000B270",
        "es-MX": "Componente Y de",
        "fr-FR": "Composante Y de",
        "ja-JP": "Y成分: ",
        "pt-BR": "Componente Y de",
        "zh-CN": "Y方向分量"
    },
    {
        "opy": "_zComponentOf",
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Z Component Of",
        "guid": "00000000B272",
        "es-MX": "Componente Z de",
        "fr-FR": "Composante Z de",
        "ja-JP": "Z成分: ",
        "pt-BR": "Componente Z de",
        "zh-CN": "Z方向分量"
    }
]
//end-json





















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

var constantValues = 
//begin-json
{
    "TRANSFORMATION": {
        "opy": "Transform",
        "values": [
            {
                "opy": "Transform.ROTATION",
                "en-US": "Rotation",
                "guid": "00000000B33B",
                "es-MX": "Rotación",
                "ja-JP": "回転",
                "pt-BR": "Rotação",
                "zh-CN": "旋转"
            },
            {
                "opy": "Transform.ROTATION_AND_TRANSLATION",
                "en-US": "Rotation And Translation",
                "guid": "00000000B33C",
                "es-MX": "Rotación y traslación",
                "fr-FR": "Rotation et Translation",
                "ja-JP": "回転と平行移動",
                "pt-BR": "Rotação e Translação",
                "zh-CN": "旋转并转换"
            }
        ]
    },
    "INVISIBLE TO": {
        "opy": "Invis",
        "values": [
            {
                "guid": "00000000B9EB",
                "opy": "Invis.ALL",
                "en-US": "All",
                "es-MX": "Todos",
                "fr-FR": "Tous",
                "ja-JP": "すべて",
                "pt-BR": "Todos",
                "zh-CN": "全部"
            },
            {
                "guid": "00000000B9EA",
                "opy": "Invis.ENEMIES",
                "en-US": "Enemies",
                "es-MX": "Enemigos",
                "fr-FR": "Ennemis",
                "ja-JP": "敵",
                "pt-BR": "Inimigos",
                "zh-CN": "敌人"
            },
            {
                "guid": "00000000B9EC",
                "opy": "Invis.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Personne",
                "ja-JP": "なし",
                "pt-BR": "Ninguém",
                "zh-CN": "全部禁用"
            }
        ]
    },
    "COLOR": {
        "opy": "Color",
        "values": [
            {
                "guid": "00000000CDB3",
                "opy": "Color.AQUA",
                "en-US": "Aqua",
                "es-MX": "Aguamarina",
                "fr-FR": "Cyan",
                "it-IT": "Acquamarina",
                "ja-JP": "アクア",
                "pl-PL": "Akwamaryna",
                "pt-BR": "Azul-piscina",
                "zh-CN": "水绿色"
            },
            {
                "guid": "00000000B939",
                "opy": "Color.BLUE",
                "en-US": "Blue",
                "es-MX": "Azul",
                "fr-FR": "Bleu",
                "ja-JP": "青",
                "pt-BR": "Azul",
                "zh-CN": "蓝色"
            },
            {
                "guid": "00000000B93A",
                "opy": "Color.GREEN",
                "en-US": "Green",
                "es-MX": "Verde",
                "fr-FR": "Vert",
                "ja-JP": "緑",
                "pt-BR": "Verde",
                "zh-CN": "绿色"
            },
            {
                "guid": "00000000CDB7",
                "opy": "Color.LIME_GREEN",
                "en-US": "Lime Green",
                "es-MX": "Verde lima",
                "fr-FR": "Citron vert",
                "it-IT": "Verde acido",
                "ja-JP": "ライムグリーン",
                "pl-PL": "Limonkowy",
                "pt-BR": "Verde-limão",
                "zh-CN": "灰绿色"
            },
            {
                "guid": "00000000CDB4",
                "opy": "Color.ORANGE",
                "en-US": "Orange",
                "es-MX": "Naranja",
                "it-IT": "Arancione",
                "ja-JP": "オレンジ",
                "pl-PL": "Pomarańczowy",
                "pt-BR": "Laranja",
                "zh-CN": "橙色"
            },
            {
                "guid": "00000000BC1C",
                "opy": "Color.PURPLE",
                "en-US": "Purple",
                "es-MX": "Morado",
                "fr-FR": "Violet",
                "ja-JP": "紫",
                "pt-BR": "Roxo",
                "zh-CN": "紫色"
            },
            {
                "guid": "00000000B938",
                "opy": "Color.RED",
                "en-US": "Red",
                "es-MX": "Rojo",
                "fr-FR": "Rouge",
                "ja-JP": "赤",
                "pt-BR": "Vermelho",
                "zh-CN": "红色"
            },
            {
                "opy": "Color.SKY_BLUE",
                "en-US": "Sky Blue",
                "guid": "00000000CDB5",
                "es-MX": "Azul cielo",
                "fr-FR": "Bleu ciel",
                "it-IT": "Blu cielo",
                "ja-JP": "スカイブルー",
                "pl-PL": "Błękitny",
                "pt-BR": "Azul-celeste",
                "zh-CN": "天蓝色"
            },
            {
                "guid": "00000000B472",
                "opy": "Color.TEAM_1",
                "en-US": "Team 1",
                "es-MX": "Equipo 1",
                "fr-FR": "Équipe 1",
                "ja-JP": "チーム1",
                "pt-BR": "Equipe 1",
                "zh-CN": "队伍1"
            },
            {
                "guid": "00000000B471",
                "opy": "Color.TEAM_2",
                "en-US": "Team 2",
                "es-MX": "Equipo 2",
                "fr-FR": "Équipe 2",
                "ja-JP": "チーム2",
                "pt-BR": "Equipe 2",
                "zh-CN": "队伍2"
            },
            {
                "guid": "00000000CDB6",
                "opy": "Color.TURQUOISE",
                "en-US": "Turquoise",
                "es-MX": "Turquesa",
                "ja-JP": "ターコイズ",
                "pl-PL": "Turkusowy",
                "pt-BR": "Turquesa",
                "zh-CN": "青绿色"
            },
            {
                "guid": "00000000B93C",
                "opy": "Color.WHITE",
                "en-US": "White",
                "es-MX": "Blanco",
                "fr-FR": "Blanc",
                "ja-JP": "白",
                "pt-BR": "Branco",
                "zh-CN": "白色"
            },
            {
                "guid": "00000000B93B",
                "opy": "Color.YELLOW",
                "en-US": "Yellow",
                "es-MX": "Amarillo",
                "fr-FR": "Jaune",
                "ja-JP": "黄色",
                "pt-BR": "Amarelo",
                "zh-CN": "黄色"
            }
        ]
    },
    "BUTTON": {
        "opy": "Button",
        "values": [
            {
                "guid": "00000000B179",
                "opy": "Button.ABILITY_1",
                "en-US": "Ability 1",
                "es-MX": "Habilidad 1",
                "fr-FR": "Capacité 1",
                "ja-JP": "アビリティ1",
                "pt-BR": "Habilidade 1",
                "zh-CN": "技能1"
            },
            {
                "guid": "00000000B178",
                "opy": "Button.ABILITY_2",
                "en-US": "Ability 2",
                "es-MX": "Habilidad 2",
                "fr-FR": "Capacité 2",
                "ja-JP": "アビリティ2",
                "pt-BR": "Habilidade 2",
                "zh-CN": "技能2"
            },
            {
                "guid": "00000000B175",
                "opy": "Button.CROUCH",
                "en-US": "Crouch",
                "es-MX": "Agacharse",
                "fr-FR": "S’accroupir",
                "ja-JP": "しゃがみ",
                "pt-BR": "Agachar",
                "zh-CN": "蹲下"
            },
            {
                "guid": "00000000B31E",
                "opy": "Button.INTERACT",
                "en-US": "Interact",
                "es-MX": "Interactuar",
                "fr-FR": "Interagir",
                "ja-JP": "インタラクト",
                "pt-BR": "Interagir",
                "zh-CN": "互动"
            },
            {
                "guid": "00000000B176",
                "opy": "Button.JUMP",
                "en-US": "Jump",
                "es-MX": "Saltar",
                "fr-FR": "Sauter",
                "ja-JP": "ジャンプ",
                "pt-BR": "Pular",
                "zh-CN": "跳跃"
            },
            {
                "guid": "00000000B17B",
                "opy": "Button.PRIMARY_FIRE",
                "en-US": "Primary Fire",
                "es-MX": "Disparo principal",
                "fr-FR": "Tir principal",
                "ja-JP": "メイン攻撃",
                "pt-BR": "Disparo Primário",
                "zh-CN": "主要攻击模式"
            },
            {
                "guid": "00000000B17A",
                "opy": "Button.SECONDARY_FIRE",
                "en-US": "Secondary Fire",
                "es-MX": "Disparo secundario",
                "fr-FR": "Tir secondaire",
                "ja-JP": "サブ攻撃",
                "pt-BR": "Disparo Secundário",
                "zh-CN": "辅助攻击模式"
            },
            {
                "guid": "00000000B177",
                "opy": "Button.ULTIMATE",
                "en-US": "Ultimate",
                "es-MX": "Habilidad máxima",
                "fr-FR": "Capacité ultime",
                "ja-JP": "アルティメット",
                "pt-BR": "Habilidade Suprema",
                "zh-CN": "终极技能"
            }
        ]
    },
    "OPERATION": {
        "opy": "Operation",
        "values": [
            {
                "guid": "00000000B16D",
                "opy": "_add",
                "en-US": "Add",
                "es-MX": "Agregar",
                "fr-FR": "Addition",
                "ja-JP": "追加",
                "pt-BR": "Adicionar",
                "zh-CN": "加"
            },
            {
                "guid": "00000000B167",
                "opy": "_appendToArray",
                "en-US": "Append To Array",
                "es-MX": "Anexar a la matriz",
                "fr-FR": "Ajouter au tableau",
                "ja-JP": "追加",
                "pt-BR": "Juntar à Matriz",
                "zh-CN": "添加至数组"
            },
            {
                "guid": "00000000B16A",
                "opy": "_divide",
                "en-US": "Divide",
                "es-MX": "Dividir",
                "fr-FR": "Division",
                "ja-JP": "割る",
                "pt-BR": "Dividir",
                "zh-CN": "除"
            },
            {
                "guid": "00000000B18F",
                "opy": "_max",
                "en-US": "Max",
                "es-MX": "Máximo",
                "fr-FR": "Maximum",
                "ja-JP": "最大",
                "pt-BR": "Máx.",
                "zh-CN": "最大"
            },
            {
                "guid": "00000000B190",
                "opy": "_min",
                "en-US": "Min",
                "es-MX": "Mínimo",
                "fr-FR": "Minimum",
                "ja-JP": "分",
                "pt-BR": "Mín.",
                "zh-CN": "最小"
            },
            {
                "guid": "00000000B169",
                "opy": "_modulo",
                "en-US": "Modulo",
                "es-MX": "Módulo",
                "ja-JP": "剰余",
                "pt-BR": "Modular",
                "zh-CN": "余数"
            },
            {
                "guid": "00000000B16B",
                "opy": "_multiply",
                "en-US": "Multiply",
                "es-MX": "Multiplicar",
                "fr-FR": "Multiplication",
                "ja-JP": "掛ける",
                "pt-BR": "Multiplicar",
                "zh-CN": "乘"
            },
            {
                "guid": "00000000B168",
                "opy": "_raiseToPower",
                "en-US": "Raise To Power",
                "es-MX": "Elevar a la potencia",
                "fr-FR": "Élévation à une puissance ",
                "ja-JP": "冪乗",
                "pt-BR": "Elevar à Potência",
                "zh-CN": "乘方"
            },
            {
                "opy": "_removeFromArrayByIndex",
                "en-US": "Remove From Array By Index",
                "guid": "00000000C61B",
                "es-MX": "Eliminar de la matriz por índice",
                "fr-FR": "Supprimer du tableau par index",
                "ja-JP": "インデックスを配列から削除",
                "pt-BR": "Remover da Matriz por Índice",
                "zh-CN": "根据索引从数组中移除"
            },
            {
                "opy": "_removeFromArrayByValue",
                "en-US": "Remove From Array By Value",
                "guid": "00000000B166",
                "es-MX": "Eliminar de la matriz por valor",
                "fr-FR": "Supprimer du tableau par valeur",
                "ja-JP": "削除",
                "pt-BR": "Remover da Matriz por Valor",
                "zh-CN": "根据值从数组中移除"
            },
            {
                "guid": "00000000B16C",
                "opy": "_subtract",
                "en-US": "Subtract",
                "es-MX": "Restar",
                "fr-FR": "Soustraction",
                "ja-JP": "引く",
                "pt-BR": "Subtrair",
                "zh-CN": "减"
            }
        ]
    },
    "TEAM CONSTANT": {
        "opy": "Team",
        "values": [
            {
                "guid": "00000000B470",
                "opy": "Team.ALL",
                "en-US": "All Teams",
                "es-MX": "Todos los equipos",
                "fr-FR": "Toutes les équipes",
                "ja-JP": "すべてのチーム",
                "pt-BR": "Todas as Equipes",
                "zh-CN": "所有队伍"
            },
            {
                "guid": "00000000B472",
                "opy": "Team.1",
                "en-US": "Team 1",
                "es-MX": "Equipo 1",
                "fr-FR": "Équipe 1",
                "ja-JP": "チーム1",
                "pt-BR": "Equipe 1",
                "zh-CN": "队伍1"
            },
            {
                "guid": "00000000B471",
                "opy": "Team.2",
                "en-US": "Team 2",
                "es-MX": "Equipo 2",
                "fr-FR": "Équipe 2",
                "ja-JP": "チーム2",
                "pt-BR": "Equipe 2",
                "zh-CN": "队伍2"
            }
        ]
    },
    "HERO CONSTANT": {
        "opy": "Hero",
        "values": [
            {
                "guid": "0000000029EC",
                "opy": "Hero.ANA",
                "en-US": "Ana",
                "ja-JP": "アナ",
                "ko-KR": "아나",
                "ru-RU": "Ана",
                "zh-CN": "安娜",
                "zh-TW": "安娜"
            },
            {
                "guid": "00000000832E",
                "opy": "Hero.ASHE",
                "en-US": "Ashe",
                "ja-JP": "アッシュ",
                "ko-KR": "애쉬",
                "ru-RU": "Эш",
                "zh-CN": "艾什",
                "zh-TW": "艾西"
            },
            {
                "guid": "000000009411",
                "opy": "Hero.BAPTISTE",
                "en-US": "Baptiste",
                "ja-JP": "バティスト",
                "ko-KR": "바티스트",
                "ru-RU": "Батист",
                "zh-CN": "巴蒂斯特",
                "zh-TW": "巴帝斯特"
            },
            {
                "guid": "000000000023",
                "opy": "Hero.BASTION",
                "en-US": "Bastion",
                "ja-JP": "バスティオン",
                "ko-KR": "바스티온",
                "ru-RU": "Бастион",
                "zh-CN": "堡垒",
                "zh-TW": "壁壘機兵"
            },
            {
                "guid": "000000005D06",
                "opy": "Hero.BRIGITTE",
                "en-US": "Brigitte",
                "ja-JP": "ブリギッテ",
                "ko-KR": "브리기테",
                "ru-RU": "Бригитта",
                "zh-CN": "布丽吉塔",
                "zh-TW": "碧姬"
            },
            {
                "guid": "0000000002E2",
                "opy": "Hero.DVA",
                "en-US": "D.Va",
                "es-MX": "D.VA",
                "it-IT": "D.VA"
            },
            {
                "guid": "0000000015E5",
                "opy": "Hero.DOOMFIST",
                "en-US": "Doomfist",
                "ja-JP": "ドゥームフィスト",
                "ko-KR": "둠피스트",
                "pl-PL": "Pięść Zagłady",
                "ru-RU": "Кулак Смерти",
                "zh-CN": "末日铁拳",
                "zh-TW": "毀滅拳王"
            },
            {
                "guid": "000000000029",
                "opy": "Hero.GENJI",
                "en-US": "Genji",
                "ja-JP": "ゲンジ",
                "ko-KR": "겐지",
                "ru-RU": "Гэндзи",
                "zh-CN": "源氏",
                "zh-TW": "源氏"
            },
            {
                "guid": "000000000021",
                "opy": "Hero.HANZO",
                "en-US": "Hanzo",
                "ja-JP": "ハンゾー",
                "ko-KR": "한조",
                "ru-RU": "Хандзо",
                "zh-CN": "半藏",
                "zh-TW": "半藏"
            },
            {
                "guid": "0000000001AA",
                "opy": "Hero.JUNKRAT",
                "en-US": "Junkrat",
                "fr-FR": "Chacal",
                "ja-JP": "ジャンクラット",
                "ko-KR": "정크랫",
                "pl-PL": "Złomiarz",
                "ru-RU": "Крысавчик",
                "zh-CN": "狂鼠",
                "zh-TW": "炸彈鼠"
            },
            {
                "guid": "0000000002DA",
                "opy": "Hero.LUCIO",
                "en-US": "Lúcio",
                "ja-JP": "ルシオ",
                "ko-KR": "루시우",
                "ru-RU": "Лусио",
                "zh-CN": "卢西奥",
                "zh-TW": "路西歐"
            },
            {
                "guid": "00000000005C",
                "opy": "Hero.MCCREE",
                "en-US": "McCree",
                "ja-JP": "マクリー",
                "ko-KR": "맥크리",
                "ru-RU": "Маккри",
                "zh-CN": "麦克雷",
                "zh-TW": "麥卡利"
            },
            {
                "guid": "00000000083A",
                "opy": "Hero.MEI",
                "en-US": "Mei",
                "ja-JP": "メイ",
                "ko-KR": "메이",
                "ru-RU": "Мэй",
                "zh-CN": "美",
                "zh-TW": "小美"
            },
            {
                "guid": "000000000020",
                "opy": "Hero.MERCY",
                "en-US": "Mercy",
                "fr-FR": "Ange",
                "ja-JP": "マーシー",
                "ko-KR": "메르시",
                "pl-PL": "Łaska",
                "ru-RU": "Ангел",
                "zh-CN": "天使",
                "zh-TW": "慈悲"
            },
            {
                "guid": "000000006339",
                "opy": "Hero.MOIRA",
                "en-US": "Moira",
                "ja-JP": "モイラ",
                "ko-KR": "모이라",
                "ru-RU": "Мойра",
                "zh-CN": "莫伊拉",
                "zh-TW": "莫伊拉"
            },
            {
                "guid": "000000002D21",
                "opy": "Hero.ORISA",
                "en-US": "Orisa",
                "ja-JP": "オリーサ",
                "ko-KR": "오리사",
                "ru-RU": "Ориса",
                "zh-CN": "奥丽莎",
                "zh-TW": "歐瑞莎"
            },
            {
                "guid": "000000000027",
                "opy": "Hero.PHARAH",
                "en-US": "Pharah",
                "ja-JP": "ファラ",
                "ko-KR": "파라",
                "pl-PL": "Fara",
                "ru-RU": "Фарра",
                "zh-CN": "法老之鹰",
                "zh-TW": "法拉"
            },
            {
                "guid": "000000000026",
                "opy": "Hero.REAPER",
                "en-US": "Reaper",
                "fr-FR": "Faucheur",
                "ja-JP": "リーパー",
                "ko-KR": "리퍼",
                "pl-PL": "Żniwiarz",
                "ru-RU": "Жнец",
                "zh-CN": "死神",
                "zh-TW": "死神"
            },
            {
                "guid": "000000000025",
                "opy": "Hero.REINHARDT",
                "en-US": "Reinhardt",
                "ja-JP": "ラインハルト",
                "ko-KR": "라인하르트",
                "ru-RU": "Райнхардт",
                "zh-CN": "莱因哈特",
                "zh-TW": "萊因哈特"
            },
            {
                "guid": "000000000054",
                "opy": "Hero.ROADHOG",
                "en-US": "Roadhog",
                "fr-FR": "Chopper",
                "ja-JP": "ロードホッグ",
                "ko-KR": "로드호그",
                "pl-PL": "Wieprzu",
                "ru-RU": "Турбосвин",
                "zh-CN": "路霸",
                "zh-TW": "攔路豬"
            },
            {
                "guid": "000000009E9E",
                "opy": "Hero.SIGMA",
                "en-US": "Sigma",
                "ja-JP": "シグマ",
                "ko-KR": "시그마",
                "ru-RU": "Сигма",
                "zh-CN": "西格玛",
                "zh-TW": "席格馬"
            },
            {
                "guid": "000000000224",
                "opy": "Hero.SOLDIER",
                "en-US": "Soldier: 76",
                "es-ES": "Soldado: 76",
                "es-MX": "Soldado: 76",
                "fr-FR": "Soldat : 76",
                "it-IT": "Soldato-76",
                "ja-JP": "ソルジャー76",
                "ko-KR": "솔저: 76",
                "pl-PL": "Żołnierz-76",
                "pt-BR": "Soldado: 76",
                "ru-RU": "Солдат-76",
                "zh-CN": "士兵：76",
                "zh-TW": "士兵76"
            },
            {
                "guid": "0000000046F9",
                "opy": "Hero.SOMBRA",
                "en-US": "Sombra",
                "ja-JP": "ソンブラ",
                "ko-KR": "솜브라",
                "ru-RU": "Сомбра",
                "zh-CN": "黑影",
                "zh-TW": "駭影"
            },
            {
                "guid": "00000000002A",
                "opy": "Hero.SYMMETRA",
                "en-US": "Symmetra",
                "ja-JP": "シンメトラ",
                "ko-KR": "시메트라",
                "ru-RU": "Симметра",
                "zh-CN": "秩序之光",
                "zh-TW": "辛梅塔"
            },
            {
                "guid": "000000000024",
                "opy": "Hero.TORBJORN",
                "en-US": "Torbjörn",
                "ja-JP": "トールビョーン",
                "ko-KR": "토르비욘",
                "ru-RU": "Торбьорн",
                "zh-CN": "托比昂",
                "zh-TW": "托比昂"
            },
            {
                "guid": "00000000002B",
                "opy": "Hero.TRACER",
                "en-US": "Tracer",
                "ja-JP": "トレーサー",
                "ko-KR": "트레이서",
                "pl-PL": "Smuga",
                "ru-RU": "Трейсер",
                "zh-CN": "猎空",
                "zh-TW": "閃光"
            },
            {
                "guid": "00000000002C",
                "opy": "Hero.WIDOWMAKER",
                "en-US": "Widowmaker",
                "fr-FR": "Fatale",
                "ja-JP": "ウィドウメイカー",
                "ko-KR": "위도우메이커",
                "pl-PL": "Trupia Wdowa",
                "ru-RU": "Роковая Вдова",
                "zh-CN": "黑百合",
                "zh-TW": "奪命女"
            },
            {
                "guid": "000000000028",
                "opy": "Hero.WINSTON",
                "en-US": "Winston",
                "ja-JP": "ウィンストン",
                "ko-KR": "윈스턴",
                "ru-RU": "Уинстон",
                "zh-CN": "温斯顿",
                "zh-TW": "溫斯頓"
            },
            {
                "guid": "000000007269",
                "opy": "Hero.HAMMOND",
                "en-US": "Wrecking Ball",
                "fr-FR": "Bouldozer",
                "ja-JP": "レッキング・ボール",
                "ko-KR": "레킹볼",
                "pl-PL": "Burzyciel",
                "ru-RU": "Таран",
                "zh-CN": "破坏球",
                "zh-TW": "火爆鋼球"
            },
            {
                "guid": "0000000001EB",
                "opy": "Hero.ZARYA",
                "en-US": "Zarya",
                "ja-JP": "ザリア",
                "ko-KR": "자리야",
                "pl-PL": "Zaria",
                "ru-RU": "Заря",
                "zh-CN": "查莉娅",
                "zh-TW": "札莉雅"
            },
            {
                "guid": "000000000022",
                "opy": "Hero.ZENYATTA",
                "en-US": "Zenyatta",
                "ja-JP": "ゼニヤッタ",
                "ko-KR": "젠야타",
                "ru-RU": "Дзенъятта",
                "zh-CN": "禅雅塔",
                "zh-TW": "禪亞塔"
            }
        ]
    },
    "PLAY EFFECT": {
        "opy": "DynamicEffect",
        "values": [
            {
                "opy": "DynamicEffect.BAD_EXPLOSION",
                "en-US": "Bad Explosion",
                "guid": "00000000BC1A",
                "es-MX": "Mala explosión",
                "fr-FR": "Mauvaise explosion",
                "ja-JP": "悪い爆発",
                "pt-BR": "Explosão Ruim",
                "zh-CN": "有害爆炸"
            },
            {
                "opy": "DynamicEffect.BAD_PICKUP_EFFECT",
                "en-US": "Bad Pickup Effect",
                "guid": "00000000BC18",
                "es-MX": "Mal efecto de captura",
                "fr-FR": "Mauvais effet de ramassage",
                "ja-JP": "悪いピックアップ効果",
                "pt-BR": "Efeito de Coleta Ruim",
                "zh-CN": "有害选择效果 "
            },
            {
                "opy": "DynamicEffect.BUFF_EXPLOSION_SOUND",
                "en-US": "Buff Explosion Sound",
                "guid": "00000000C400",
                "es-MX": "Sonido de explosión de potenciamiento",
                "fr-FR": "Son d’explosion d’amélioration",
                "ja-JP": "爆発音（バフ）",
                "pt-BR": "Som de Explosão para Bônus",
                "zh-CN": "状态爆炸声音"
            },
            {
                "opy": "DynamicEffect.BUFF_IMPACT_SOUND",
                "en-US": "Buff Impact Sound",
                "guid": "00000000C3FE",
                "es-MX": "Sonido de impacto de potenciamiento",
                "fr-FR": "Son d’impact d’amélioration",
                "ja-JP": "衝撃音（バフ）",
                "pt-BR": "Som de Impacto para Bônus",
                "zh-CN": "正面状态施加声音"
            },
            {
                "opy": "DynamicEffect.DEBUFF_IMPACT_SOUND",
                "en-US": "Debuff Impact Sound",
                "guid": "00000000C3FD",
                "es-MX": "Sonido de impacto de despotenciamiento",
                "fr-FR": "Son d’impact d’affaiblissement",
                "ja-JP": "衝撃音（デバフ）",
                "pt-BR": "Som de Impacto para Penalidade",
                "zh-CN": "负面状态施加声音"
            },
            {
                "opy": "DynamicEffect.EXPLOSION_SOUND",
                "en-US": "Explosion Sound",
                "guid": "00000000C401",
                "es-MX": "Sonido de explosión",
                "fr-FR": "Son de l’explosion",
                "ja-JP": "爆発音",
                "pt-BR": "Som de Explosão",
                "zh-CN": "爆炸声音"
            },
            {
                "opy": "DynamicEffect.GOOD_EXPLOSION",
                "en-US": "Good Explosion",
                "guid": "00000000BB28",
                "es-MX": "Buena explosión",
                "fr-FR": "Bonne explosion",
                "ja-JP": "いい爆発",
                "pt-BR": "Explosão Boa",
                "zh-CN": "有益爆炸"
            },
            {
                "opy": "DynamicEffect.GOOD_PICKUP_EFFECT",
                "en-US": "Good Pickup Effect",
                "guid": "00000000BC19",
                "es-MX": "Buen efecto de captura",
                "fr-FR": "Bon effet de ramassage",
                "ja-JP": "いいピックアップ効果",
                "pt-BR": "Efeito de Coleta Bom",
                "zh-CN": "有益选择效果 "
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION",
                "en-US": "Ring Explosion",
                "guid": "00000000BC1B",
                "es-MX": "Explosión en anillo",
                "fr-FR": "Explosion concentrique",
                "ja-JP": "リングの爆発",
                "pt-BR": "Explosão em Anel",
                "zh-CN": "环状爆炸"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION_SOUND",
                "en-US": "Ring Explosion Sound",
                "guid": "00000000C3FF",
                "es-MX": "Sonido de explosión en anillo",
                "fr-FR": "Son d’explosion concentrique",
                "ja-JP": "爆発音（リング）",
                "pt-BR": "Som de Explosão para Anel",
                "zh-CN": "环状爆炸声音"
            }
        ]
    },
    "CREATE EFFECT": {
        "opy": "Effect",
        "values": [
            {
                "opy": "Effect.BAD_AURA",
                "en-US": "Bad Aura",
                "guid": "00000000BC17",
                "es-MX": "Mala Aura",
                "fr-FR": "Mauvaise aura",
                "ja-JP": "悪いオーラ",
                "pt-BR": "Aura Ruim",
                "zh-CN": "有害光环"
            },
            {
                "opy": "Effect.BAD_AURA_SOUND",
                "en-US": "Bad Aura Sound",
                "guid": "00000000C4DA",
                "es-MX": "Sonido de aura mala",
                "fr-FR": "Son de mauvaise aura",
                "ja-JP": "悪いオーラ音",
                "pt-BR": "Som de Aura Ruim",
                "zh-CN": "负面光环音效"
            },
            {
                "opy": "Effect.BEACON_SOUND",
                "en-US": "Beacon Sound",
                "guid": "00000000C4D3",
                "es-MX": "Sonido de baliza",
                "fr-FR": "Son de balise",
                "ja-JP": "ビーコン音",
                "pt-BR": "Som de Sinalizador",
                "zh-CN": "信标声音"
            },
            {
                "guid": "00000000BC15",
                "opy": "Effect.CLOUD",
                "en-US": "Cloud",
                "es-MX": "Nube",
                "fr-FR": "Nuage",
                "ja-JP": "雲",
                "pt-BR": "Nuvem",
                "zh-CN": "云"
            },
            {
                "opy": "Effect.DECAL_SOUND",
                "en-US": "Decal Sound",
                "guid": "00000000C4D4",
                "es-MX": "Sonido de calcomanía",
                "fr-FR": "Son de décal",
                "ja-JP": "デカール音",
                "pt-BR": "Som de Símbolo",
                "zh-CN": "诱饵声音"
            },
            {
                "opy": "Effect.ENERGY_SOUND",
                "en-US": "Energy Sound",
                "guid": "00000000C3FC",
                "es-MX": "Sonido de energía",
                "fr-FR": "Son de l’énergie",
                "ja-JP": "エネルギー音",
                "pt-BR": "Som de Energia",
                "zh-CN": "能量声音"
            },
            {
                "opy": "Effect.GOOD_AURA",
                "en-US": "Good Aura",
                "guid": "00000000BC13",
                "es-MX": "Buena aura",
                "fr-FR": "Bonne aura",
                "ja-JP": "いいオーラ",
                "pt-BR": "Aura Boa",
                "zh-CN": "有益光环"
            },
            {
                "opy": "Effect.GOOD_AURA_SOUND",
                "en-US": "Good Aura Sound",
                "guid": "00000000C4D8",
                "es-MX": "Sonido de aura buena",
                "fr-FR": "Son de bonne aura",
                "ja-JP": "いいオーラ音",
                "pt-BR": "Som de Aura Boa",
                "zh-CN": "有益光环声音"
            },
            {
                "opy": "Effect.LIGHT_SHAFT",
                "en-US": "Light Shaft",
                "guid": "00000000B934",
                "es-MX": "Haz de luz",
                "fr-FR": "Puits de lumière",
                "ja-JP": "光の筋",
                "pt-BR": "Feixe de Luz",
                "zh-CN": "光柱"
            },
            {
                "guid": "00000000B933",
                "opy": "Effect.ORB",
                "en-US": "Orb",
                "es-MX": "Orbe",
                "fr-FR": "Orbe",
                "ja-JP": "オーブ",
                "pt-BR": "Orbe",
                "zh-CN": "球"
            },
            {
                "opy": "Effect.PICKUP_SOUND",
                "en-US": "Pick-up Sound",
                "guid": "00000000C4D9",
                "es-MX": "Sonido de objeto recogido",
                "fr-FR": "Son de ramassage",
                "ja-JP": "ピックアップ音",
                "pt-BR": "Som de Coleta",
                "zh-CN": "拾取音效"
            },
            {
                "opy": "Effect.RING",
                "en-US": "Ring",
                "guid": "00000000BC16",
                "es-MX": "Anillo",
                "fr-FR": "Anneau",
                "ja-JP": "リング",
                "pt-BR": "Anel",
                "zh-CN": "环"
            },
            {
                "opy": "Effect.SMOKE_SOUND",
                "en-US": "Smoke Sound",
                "guid": "00000000C4D5",
                "es-MX": "Sonido de humo",
                "fr-FR": "Son de la fumée",
                "ja-JP": "スモーク音",
                "pt-BR": "Som de Fumaça",
                "zh-CN": "烟雾声音"
            },
            {
                "guid": "00000000BC14",
                "opy": "Effect.SPARKLES",
                "en-US": "Sparkles",
                "es-MX": "Chispas",
                "fr-FR": "Etincelles",
                "ja-JP": "スパークル",
                "pt-BR": "Faíscas",
                "zh-CN": "火花"
            },
            {
                "opy": "Effect.SPARKLES_SOUND",
                "en-US": "Sparkles Sound",
                "guid": "00000000C4D6",
                "es-MX": "Sonido de chispas",
                "fr-FR": "Son des étincelles",
                "ja-JP": "スパークル音",
                "pt-BR": "Som de Faíscas",
                "zh-CN": "火花声音"
            },
            {
                "guid": "00000000B935",
                "opy": "Effect.SPHERE",
                "en-US": "Sphere",
                "es-MX": "Esfera",
                "fr-FR": "Sphère",
                "ja-JP": "球体",
                "pt-BR": "Esfera",
                "zh-CN": "球体"
            }
        ]
    },
    "COMMUNICATE": {
        "opy": "Comms",
        "values": [
            {
                "opy": "Comms.ACKNOWLEDGE",
                "en-US": "Acknowledge",
                "guid": "00000000B9D5",
                "es-MX": "De acuerdo",
                "fr-FR": "Bien reçu",
                "ja-JP": "了解",
                "pt-BR": "Reconhecer",
                "zh-CN": "收到"
            },
            {
                "guid": "00000000B9DB",
                "opy": "Comms.EMOTE_DOWN",
                "en-US": "Emote Down",
                "es-MX": "Gesto hacia abajo",
                "fr-FR": "Emote bas",
                "ja-JP": "エモート下",
                "pt-BR": "Emote Abaixo",
                "zh-CN": "表情（下）"
            },
            {
                "guid": "00000000B9DD",
                "opy": "Comms.EMOTE_LEFT",
                "en-US": "Emote Left",
                "es-MX": "Gesto hacia la izquierda",
                "fr-FR": "Emote gauche",
                "ja-JP": "エモート左",
                "pt-BR": "Emote à Esquerda",
                "zh-CN": "表情（左）"
            },
            {
                "guid": "00000000B9DC",
                "opy": "Comms.EMOTE_RIGHT",
                "en-US": "Emote Right",
                "es-MX": "Gesto hacia la derecha",
                "fr-FR": "Emote droite",
                "ja-JP": "エモート右",
                "pt-BR": "Emote à Direita",
                "zh-CN": "表情（右）"
            },
            {
                "opy": "Comms.EMOTE_UP",
                "en-US": "Emote Up",
                "guid": "00000000B9DE",
                "es-MX": "Gesto hacia arriba",
                "fr-FR": "Emote haut",
                "ja-JP": "エモート上",
                "pt-BR": "Emote Acima",
                "zh-CN": "表情（上）"
            },
            {
                "opy": "Comms.GROUP_UP",
                "en-US": "Group Up",
                "guid": "00000000B9D7",
                "es-MX": "Agrúpense",
                "fr-FR": "Regroupement",
                "ja-JP": "集合",
                "pt-BR": "Agrupem-se",
                "zh-CN": "集合"
            },
            {
                "guid": "00000000B9D9",
                "opy": "Comms.HELLO",
                "en-US": "Hello",
                "es-MX": "Hola",
                "fr-FR": "Bonjour",
                "ja-JP": "こんにちは",
                "pt-BR": "Olá",
                "zh-CN": "问候"
            },
            {
                "opy": "Comms.NEED_HEALING",
                "en-US": "Need Healing",
                "guid": "00000000B9D8",
                "es-MX": "Necesito sanación",
                "fr-FR": "Besoin de soins",
                "ja-JP": "回復が必要",
                "pt-BR": "Preciso de Cura",
                "zh-CN": "需要治疗"
            },
            {
                "guid": "00000000B9D6",
                "opy": "Comms.THANKS",
                "en-US": "Thanks",
                "es-MX": "Gracias",
                "fr-FR": "Merci",
                "ja-JP": "ありがとう",
                "pt-BR": "Obrigado",
                "zh-CN": "感谢"
            },
            {
                "opy": "Comms.ULTIMATE_STATUS",
                "en-US": "Ultimate Status",
                "guid": "00000000B9DA",
                "es-MX": "Estado de habilidad máxima",
                "fr-FR": "Statut de l’ulti",
                "ja-JP": "アルティメットの状態",
                "pt-BR": "Status da Suprema",
                "zh-CN": "终极技能状态"
            },
            {
                "opy": "Comms.VOICE_LINE_DOWN",
                "en-US": "Voice Line Down",
                "guid": "00000000B9DF",
                "es-MX": "Línea de voz hacia abajo",
                "fr-FR": "Réplique bas",
                "ja-JP": "ボイス・ライン下",
                "pt-BR": "Fala Abaixo",
                "zh-CN": "语音（下）"
            },
            {
                "opy": "Comms.VOICE_LINE_LEFT",
                "en-US": "Voice Line Left",
                "guid": "00000000B9E1",
                "es-MX": "Línea de voz hacia la izquierda",
                "fr-FR": "Réplique gauche",
                "ja-JP": "ボイス・ライン左",
                "pt-BR": "Fala à Esquerda",
                "zh-CN": "语音（左）"
            },
            {
                "opy": "Comms.VOICE_LINE_RIGHT",
                "en-US": "Voice Line Right",
                "guid": "00000000B9E0",
                "es-MX": "Línea de voz hacia la derecha",
                "fr-FR": "Réplique droite",
                "ja-JP": "ボイス・ライン右",
                "pt-BR": "Fala à Direita",
                "zh-CN": "语音（右）"
            },
            {
                "opy": "Comms.VOICE_LINE_UP",
                "en-US": "Voice Line Up",
                "guid": "00000000B9E2",
                "es-MX": "Línea de voz hacia arriba",
                "fr-FR": "Réplique haut",
                "ja-JP": "ボイス・ライン上",
                "pt-BR": "Fala Acima",
                "zh-CN": "语音（上）"
            }
        ]
    },
    "ICON": {
        "opy": "Icon",
        "values": [
            {
                "opy": "Icon.ARROW_DOWN",
                "description": "![](https://i.imgur.com/hych4AE.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Down",
                "guid": "00000000C2C9",
                "es-MX": "Flecha: Hacia abajo",
                "fr-FR": "Flèche bas",
                "ja-JP": "矢印:下",
                "pt-BR": "Seta: Baixo",
                "zh-CN": "箭头：向下"
            },
            {
                "opy": "Icon.ARROW_LEFT",
                "description": "![](https://i.imgur.com/jgpW0Nb.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Left",
                "guid": "00000000C2CA",
                "es-MX": "Flecha: Hacia la izquierda",
                "fr-FR": "Flèche gauche",
                "ja-JP": "矢印:左",
                "pt-BR": "Seta: Esquerda",
                "zh-CN": "箭头：向左"
            },
            {
                "opy": "Icon.ARROW_RIGHT",
                "description": "![](https://i.imgur.com/0BttENZ.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Right",
                "guid": "00000000C2CB",
                "es-MX": "Flecha: Hacia la derecha",
                "fr-FR": "Flèche droite",
                "ja-JP": "矢印:右",
                "pt-BR": "Seta: Direita",
                "zh-CN": "箭头：向右"
            },
            {
                "opy": "Icon.ARROW_UP",
                "description": "![](https://i.imgur.com/Pr86Pcf.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Up",
                "guid": "00000000C2CC",
                "es-MX": "Flecha: Hacia arriba",
                "fr-FR": "Flèche haut",
                "ja-JP": "矢印:上",
                "pt-BR": "Seta: Cima",
                "zh-CN": "箭头：向上"
            },
            {
                "opy": "Icon.ASTERISK",
                "description": "![](https://i.imgur.com/XTvINuC.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Asterisk",
                "guid": "00000000C2CD",
                "es-MX": "Asterisco",
                "fr-FR": "Astérisque",
                "ja-JP": "アスタリスク",
                "pt-BR": "Asterisco",
                "zh-CN": "星形"
            },
            {
                "opy": "Icon.BOLT",
                "description": "![](https://i.imgur.com/ekbDxsT.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Bolt",
                "guid": "00000000C2CE",
                "es-MX": "Rayo",
                "fr-FR": "Boulon",
                "ja-JP": "雷光の弓",
                "pt-BR": "Raio",
                "zh-CN": "箭矢"
            },
            {
                "opy": "Icon.CHECKMARK",
                "description": "![](https://i.imgur.com/B7V240H.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Checkmark",
                "guid": "00000000C2CF",
                "es-MX": "Marca de control",
                "fr-FR": "Point d’exclamation",
                "ja-JP": "チェックマーク",
                "pt-BR": "Marca de Verificação",
                "zh-CN": "对号"
            },
            {
                "guid": "00000000C2D0",
                "opy": "Icon.CIRCLE",
                "description": "![](https://i.imgur.com/6lNvrqD.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Circle",
                "es-MX": "Círculo",
                "fr-FR": "Cercle",
                "ja-JP": "サークル",
                "pt-BR": "Círculo",
                "zh-CN": "圆圈"
            },
            {
                "guid": "00000000C2D1",
                "opy": "Icon.CLUB",
                "description": "![](https://i.imgur.com/HYWor8w.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Club",
                "es-MX": "Trébol",
                "fr-FR": "Trèfle",
                "ja-JP": "棍棒",
                "pt-BR": "Paus",
                "zh-CN": "梅花"
            },
            {
                "guid": "00000000C2D2",
                "opy": "Icon.DIAMOND",
                "description": "![](https://i.imgur.com/5aLqsHf.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Diamond",
                "es-MX": "Diamante",
                "fr-FR": "Carreau",
                "ja-JP": "ダイヤモンド",
                "pt-BR": "Ouros",
                "zh-CN": "方块"
            },
            {
                "guid": "00000000C2D3",
                "opy": "Icon.DIZZY",
                "description": "![](https://i.imgur.com/P1Qi43N.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Dizzy",
                "es-MX": "Mareado",
                "fr-FR": "Étourdi",
                "ja-JP": "めまい",
                "pt-BR": "Tonto",
                "zh-CN": "晕眩"
            },
            {
                "opy": "Icon.EXCLAMATION_MARK",
                "description": "![](https://i.imgur.com/1rBcHfz.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Exclamation Mark",
                "guid": "00000000C2D4",
                "es-MX": "Signo de exclamación",
                "fr-FR": "Point d’exclamation",
                "ja-JP": "エクスクラメーションマーク",
                "pt-BR": "Ponto de Exclamação",
                "zh-CN": "感叹号"
            },
            {
                "opy": "Icon.EYE",
                "description": "![](https://i.imgur.com/pVMPtoH.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Eye",
                "guid": "00000000C2D5",
                "es-MX": "Ojo",
                "fr-FR": "Œil",
                "ja-JP": "の眼差し",
                "pt-BR": "Olho",
                "zh-CN": "眼睛"
            },
            {
                "opy": "Icon.FIRE",
                "description": "![](https://i.imgur.com/m3As7B0.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Fire",
                "guid": "00000000C2D6",
                "es-MX": "Fuego",
                "fr-FR": "Flamme",
                "ja-JP": "砲撃",
                "pt-BR": "Fogo",
                "zh-CN": "火焰"
            },
            {
                "opy": "Icon.FLAG",
                "description": "![](https://i.imgur.com/v30lUgy.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Flag",
                "guid": "00000000C2F0",
                "es-MX": "Bandera",
                "fr-FR": "Drapeau",
                "ja-JP": "通報",
                "pt-BR": "Bandeira",
                "zh-CN": "旗帜"
            },
            {
                "guid": "00000000C2D7",
                "opy": "Icon.HALO",
                "description": "![](https://i.imgur.com/FWR9HAQ.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Halo",
                "ja-JP": "光輪",
                "pt-BR": "Auréola",
                "zh-CN": "光晕"
            },
            {
                "opy": "Icon.HAPPY",
                "description": "![](https://i.imgur.com/CNwSwb1.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Happy",
                "guid": "00000000C2D8",
                "es-MX": "Feliz",
                "fr-FR": "Smiley content",
                "ja-JP": "ハッピー",
                "pt-BR": "Feliz",
                "zh-CN": "高兴"
            },
            {
                "guid": "00000000C2D9",
                "opy": "Icon.HEART",
                "description": "![](https://i.imgur.com/1KPOyZa.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Heart",
                "es-MX": "Corazón",
                "fr-FR": "Cœur",
                "ja-JP": "ハート",
                "pt-BR": "Copas",
                "zh-CN": "红桃"
            },
            {
                "guid": "00000000C2DA",
                "opy": "Icon.MOON",
                "description": "![](https://i.imgur.com/2uxcKF0.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Moon",
                "es-MX": "Luna",
                "fr-FR": "Lune",
                "ja-JP": "月",
                "pt-BR": "Lua",
                "zh-CN": "满月"
            },
            {
                "guid": "00000000C2DB",
                "opy": "Icon.NO",
                "description": "![](https://i.imgur.com/TZ4zFso.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "No",
                "fr-FR": "Interdit",
                "ja-JP": "いいえ",
                "pt-BR": "Não",
                "zh-CN": "拒绝"
            },
            {
                "opy": "Icon.PLUS",
                "description": "![](https://i.imgur.com/OLARJ80.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Plus",
                "guid": "00000000C2DC",
                "es-MX": "Signo de suma",
                "ja-JP": "プラス",
                "pt-BR": "Mais",
                "zh-CN": "加号"
            },
            {
                "opy": "Icon.POISON",
                "description": "![](https://i.imgur.com/w2gsTiI.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Poison",
                "guid": "00000000C2DD",
                "es-MX": "Veneno",
                "ja-JP": "ポイズン",
                "pt-BR": "Veneno",
                "zh-CN": "剧毒"
            },
            {
                "opy": "Icon.POISON_2",
                "description": "![](https://i.imgur.com/UWmyDg2.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Poison 2",
                "guid": "00000000C2DE",
                "es-MX": "Veneno 2",
                "fr-FR": "Poison 2",
                "ja-JP": "ポイズン2",
                "pt-BR": "Veneno 2",
                "zh-CN": "剧毒2"
            },
            {
                "opy": "Icon.QUESTION_MARK",
                "description": "![](https://i.imgur.com/CZBV4tx.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Question Mark",
                "guid": "00000000C2DF",
                "es-MX": "Signo de interrogación",
                "fr-FR": "Point d’interrogation",
                "ja-JP": "クエスチョンマーク",
                "pt-BR": "Ponto de Interrogação",
                "zh-CN": "问号"
            },
            {
                "opy": "Icon.RADIOACTIVE",
                "description": "![](https://i.imgur.com/R1bnNcl.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Radioactive",
                "guid": "00000000C2E4",
                "es-MX": "Radiactivo",
                "fr-FR": "Radioactif",
                "ja-JP": "レディオアクティブ",
                "pt-BR": "Radiativo",
                "zh-CN": "辐射"
            },
            {
                "opy": "Icon.RECYCLE",
                "description": "![](https://i.imgur.com/q2fxb2u.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Recycle",
                "guid": "00000000C2E5",
                "es-MX": "Reciclaje",
                "fr-FR": "Recyclage",
                "ja-JP": "リサイクル",
                "pt-BR": "Reciclagem",
                "zh-CN": "回收"
            },
            {
                "opy": "Icon.RING_THICK",
                "description": "![](https://i.imgur.com/lTwuAjX.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Ring Thick",
                "guid": "00000000C2E6",
                "es-MX": "Anillo grueso",
                "fr-FR": "Anneau épais",
                "ja-JP": "リング太",
                "pt-BR": "Anel Grosso",
                "zh-CN": "宽环"
            },
            {
                "opy": "Icon.RING_THIN",
                "description": "![](https://i.imgur.com/NDOrzVS.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Ring Thin",
                "guid": "00000000C2E7",
                "es-MX": "Anillo delgado",
                "fr-FR": "Anneau fin",
                "ja-JP": "リング細",
                "pt-BR": "Anel Fino",
                "zh-CN": "细环"
            },
            {
                "opy": "Icon.SAD",
                "description": "![](https://i.imgur.com/00jyB4n.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Sad",
                "guid": "00000000C2E8",
                "es-MX": "Triste",
                "fr-FR": "Smiley triste",
                "ja-JP": "サッド",
                "pt-BR": "Triste",
                "zh-CN": "难过"
            },
            {
                "guid": "00000000C2E9",
                "opy": "Icon.SKULL",
                "description": "![](https://i.imgur.com/TKKtSIa.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Skull",
                "es-MX": "Cráneo",
                "fr-FR": "Crâne",
                "ja-JP": "スカル",
                "pt-BR": "Caveira",
                "zh-CN": "骷髅"
            },
            {
                "guid": "00000000C2EA",
                "opy": "Icon.SPADE",
                "description": "![](https://i.imgur.com/AJNBYA3.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Spade",
                "es-MX": "Pica",
                "fr-FR": "Pique",
                "ja-JP": "スペード",
                "pt-BR": "Espadas",
                "zh-CN": "黑桃"
            },
            {
                "opy": "Icon.SPIRAL",
                "description": "![](https://i.imgur.com/TQLGPww.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Spiral",
                "guid": "00000000C2EB",
                "es-MX": "Espiral",
                "fr-FR": "Spirale",
                "ja-JP": "螺旋を描く",
                "pt-BR": "Espiral",
                "zh-CN": "螺旋"
            },
            {
                "guid": "00000000C2EC",
                "opy": "Icon.STOP",
                "description": "![](https://i.imgur.com/af56Ghv.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Stop",
                "es-MX": "Alto",
                "ja-JP": "停止",
                "pt-BR": "Parada",
                "zh-CN": "停止"
            },
            {
                "opy": "Icon.TRASHCAN",
                "description": "![](https://i.imgur.com/iEtFvyC.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Trashcan",
                "guid": "00000000C2ED",
                "es-MX": "Tacho de basura",
                "fr-FR": "Poubelle",
                "ja-JP": "ゴミ箱",
                "pt-BR": "Lata de Lixo",
                "zh-CN": "垃圾箱"
            },
            {
                "guid": "00000000C2EE",
                "opy": "Icon.WARNING",
                "description": "![](https://i.imgur.com/SXDld9l.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Warning",
                "es-MX": "Advertencia",
                "fr-FR": "Avertissement",
                "ja-JP": "警告",
                "pt-BR": "Aviso",
                "zh-CN": "警告"
            },
            {
                "guid": "00000000C2EF",
                "opy": "Icon.CROSS",
                "description": "![](https://i.imgur.com/05HFEnd.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "X",
                "fr-FR": "Croix"
            }
        ]
    },
    "RELATIVE": {
        "opy": "Relativity",
        "values": [
            {
                "opy": "Relativity.TO_PLAYER",
                "en-US": "To Player",
                "guid": "00000000B16F",
                "es-MX": "Al jugador",
                "fr-FR": "Au joueur",
                "ja-JP": "対プレイヤー: ",
                "pt-BR": "Ao Jogador",
                "zh-CN": "至玩家"
            },
            {
                "opy": "Relativity.TO_WORLD",
                "en-US": "To World",
                "guid": "00000000B170",
                "es-MX": "Al mundo",
                "fr-FR": "Au monde",
                "ja-JP": "対ワールド: ",
                "pt-BR": "Ao Mundo",
                "zh-CN": "至地图"
            }
        ]
    },
    "MOTION": {
        "opy": "Impulse",
        "values": [
            {
                "opy": "Impulse.CANCEL_CONTRARY_MOTION",
                "en-US": "Cancel Contrary Motion",
                "guid": "00000000B520",
                "es-MX": "Cancelar movimiento contrario",
                "fr-FR": "Annuler le mouvement contraire",
                "ja-JP": "逆モーションをキャンセル",
                "pt-BR": "Cancelar Deslocamento Contrário",
                "zh-CN": "取消相反运动"
            },
            {
                "opy": "Impulse.INCORPORATE_CONTRARY_MOTION",
                "en-US": "Incorporate Contrary Motion",
                "guid": "00000000B521",
                "es-MX": "Incorporar movimiento contrario",
                "fr-FR": "Incorporer un mouvement contraire",
                "ja-JP": "逆モーションを組み込む",
                "pt-BR": "Incorporar Deslocamento Contrário",
                "zh-CN": "合并相反运动"
            }
        ]
    },
    "ROUNDING TYPE": {
        "values": [
            {
                "guid": "00000000C34F",
                "opy": "_roundUp",
                "en-US": "Up",
                "es-MX": "Hacia arriba",
                "fr-FR": "Au-dessus",
                "ja-JP": "上",
                "pt-BR": "Cima",
                "zh-CN": "上"
            },
            {
                "guid": "00000000C34E",
                "opy": "_roundDown",
                "en-US": "Down",
                "es-MX": "Hacia abajo",
                "fr-FR": "En dessous",
                "ja-JP": "下",
                "pt-BR": "Baixo",
                "zh-CN": "下"
            },
            {
                "opy": "_roundToNearest",
                "en-US": "To Nearest",
                "guid": "00000000C34D",
                "es-MX": "Al más cercano",
                "fr-FR": "Au plus près",
                "ja-JP": "最も近い数値へ",
                "pt-BR": "Ao Mais Próximo",
                "zh-CN": "至最近"
            }
        ]
    },
    "LOS CHECK": {
        "opy": "LosCheck",
        "values": [
            {
                "guid": "00000000B1E2",
                "opy": "LosCheck.OFF",
                "en-US": "Off",
                "es-MX": "Apagado",
                "fr-FR": "Désactivé",
                "ja-JP": "オフ",
                "pt-BR": "Desligado",
                "zh-CN": "关闭"
            },
            {
                "opy": "LosCheck.SURFACES",
                "en-US": "Surfaces",
                "guid": "00000000B1E3",
                "es-MX": "Superficies",
                "ja-JP": "表面",
                "pt-BR": "Superfícies",
                "zh-CN": "表面"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ALL_BARRIERS",
                "en-US": "Surfaces And All Barriers",
                "guid": "00000000B1E5",
                "es-MX": "Superficies y todas las barreras",
                "fr-FR": "Surfaces et toutes les barrières",
                "ja-JP": "表面とすべてのバリア",
                "pt-BR": "Superfícies e Todas as Barreiras",
                "zh-CN": "表面及全部屏障"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ENEMY_BARRIERS",
                "en-US": "Surfaces And Enemy Barriers",
                "guid": "00000000B1E4",
                "es-MX": "Superficies y barreras enemigas",
                "fr-FR": "Surfaces et barrières ennemies",
                "ja-JP": "表面と敵のバリア",
                "pt-BR": "Superfícies e Barreiras Inimigas",
                "zh-CN": "表面及敌方屏障"
            }
        ]
    },
    "WORLD TEXT CLIPPING": {
        "opy": "Clip",
        "values": [
            {
                "opy": "Clip.SURFACES",
                "en-US": "Clip Against Surfaces",
                "guid": "00000000BAF5",
                "es-MX": "Atravesar las superficies",
                "fr-FR": "Masquer derrière les surfaces",
                "ja-JP": "表面に対してクリップ",
                "pt-BR": "Cortar nas Superfícies",
                "zh-CN": "根据表面截取"
            },
            {
                "opy": "Clip.NONE",
                "en-US": "Do Not Clip",
                "guid": "00000000BAF4",
                "es-MX": "No atravesar",
                "fr-FR": "Ne pas masquer",
                "ja-JP": "クリップしない",
                "pt-BR": "Não Cortar",
                "zh-CN": "不要截取"
            }
        ]
    },
    "HUD LOCATION": {
        "opy": "Position",
        "values": [
            {
                "guid": "00000000BAF6",
                "opy": "Position.LEFT",
                "en-US": "Left",
                "es-MX": "Izquierda",
                "fr-FR": "Gauche",
                "ja-JP": "左",
                "pt-BR": "Esquerda",
                "zh-CN": "左边"
            },
            {
                "opy": "Position.TOP",
                "en-US": "Top",
                "guid": "00000000BAF7",
                "es-MX": "Arriba",
                "fr-FR": "Haut",
                "ja-JP": "トップ",
                "pt-BR": "Topo",
                "zh-CN": "顶部"
            },
            {
                "guid": "00000000BAF8",
                "opy": "Position.RIGHT",
                "en-US": "Right",
                "es-MX": "Derecha",
                "fr-FR": "Droite",
                "ja-JP": "右",
                "pt-BR": "Direita",
                "zh-CN": "右边"
            }
        ]
    },
    "ICON REEVALUATION": {
        "opy": "IconReeval",
        "values": [
            {
                "guid": "00000000B8D8",
                "opy": "IconReeval.POSITION",
                "en-US": "Position",
                "es-MX": "Posición",
                "ja-JP": "位置",
                "pt-BR": "Posição",
                "zh-CN": "位置"
            },
            {
                "guid": "00000000B8C3",
                "opy": "IconReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "ja-JP": "なし",
                "pt-BR": "Ninguém",
                "zh-CN": "无"
            },
            {
                "guid": "00000000B8C4",
                "opy": "IconReeval.VISIBILITY",
                "en-US": "Visible To",
                "es-MX": "Visible para",
                "fr-FR": "Visible pour",
                "ja-JP": "目視可能: ",
                "pt-BR": "Visível para",
                "zh-CN": "可见"
            },
            {
                "opy": "IconReeval.VISIBILITY_AND_POSITION",
                "en-US": "Visible To and Position",
                "guid": "00000000B8D9",
                "es-MX": "Visible para y posición",
                "fr-FR": "Visible pour et Position",
                "ja-JP": "表示される相手、位置",
                "pt-BR": "Visível para e Posição",
                "zh-CN": "可见和位置"
            }
        ]
    },
    "EFFECT REEVALUATION": {
        "opy": "EffectReeval",
        "values": [
            {
                "opy": "EffectReeval.POSITION_AND_RADIUS",
                "en-US": "Position and Radius",
                "guid": "00000000B8C5",
                "es-MX": "Posición y radio",
                "fr-FR": "Position et Rayon",
                "ja-JP": "位置と範囲",
                "pt-BR": "Posição e Raio",
                "zh-CN": "位置和半径"
            },
            {
                "guid": "00000000B8C3",
                "opy": "EffectReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "ja-JP": "なし",
                "pt-BR": "Ninguém",
                "zh-CN": "无"
            },
            {
                "guid": "00000000B8C4",
                "opy": "EffectReeval.VISIBILITY",
                "en-US": "Visible To",
                "es-MX": "Visible para",
                "fr-FR": "Visible pour",
                "ja-JP": "目視可能: ",
                "pt-BR": "Visível para",
                "zh-CN": "可见"
            },
            {
                "guid": "00000000B8C6",
                "opy": "EffectReeval.VISIBILITY_POSITION_AND_RADIUS",
                "en-US": "Visible To Position and Radius",
                "es-MX": "Visible para posición y radio",
                "fr-FR": "Visible pour Position et Rayon",
                "ja-JP": "表示される相手、位置、範囲",
                "pt-BR": "Visível para Posição e Raio",
                "zh-CN": "可见，位置和半径"
            }
        ]
    },
    "HUD TEXT REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "guid": "00000000BB31",
                "opy": "HudReeval.STRING",
                "en-US": "String",
                "es-MX": "Cadena",
                "fr-FR": "Chaîne de texte",
                "ja-JP": "文字列",
                "zh-CN": "字符串"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "en-US": "Visible To and String",
                "guid": "00000000BA8C",
                "es-MX": "Visible para y cadena",
                "fr-FR": "Visible pour et Chaîne de texte",
                "ja-JP": "表示される相手、文字列",
                "pt-BR": "Visível para e String",
                "zh-CN": "可见和字符串"
            }
        ]
    },
    "WORLD TEXT REEVALUATION": {
        "opy": "WorldTextReeval",
        "values": [
            {
                "guid": "00000000BB31",
                "opy": "WorldTextReeval.STRING",
                "en-US": "String",
                "es-MX": "Cadena",
                "fr-FR": "Chaîne de texte",
                "ja-JP": "文字列",
                "zh-CN": "字符串"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_AND_STRING",
                "en-US": "Visible To and String",
                "guid": "00000000BA8C",
                "es-MX": "Visible para y cadena",
                "fr-FR": "Visible pour et Chaîne de texte",
                "ja-JP": "表示される相手、文字列",
                "pt-BR": "Visível para e String",
                "zh-CN": "可见和字符串"
            },
            {
                "guid": "00000000BAD4",
                "opy": "WorldTextReeval.VISIBILITY_POSITION_AND_STRING",
                "en-US": "Visible To Position and String",
                "es-MX": "Visible para posición y cadena",
                "fr-FR": "Visible pour Position et Chaîne de texte",
                "ja-JP": "表示される相手、位置、文字列",
                "pt-BR": "Visível para Posição e String",
                "zh-CN": "可见，位置和字符串"
            }
        ]
    },
    "CHASE RATE REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_RATE",
                "en-US": "Destination and Rate",
                "guid": "00000000B8CA",
                "es-MX": "Destino y tasa",
                "fr-FR": "Destination et Taux",
                "ja-JP": "目的とレート",
                "pt-BR": "Destino e Taxa",
                "zh-CN": "速率及最终值"
            },
            {
                "guid": "00000000B8C9",
                "opy": "ChaseReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "ja-JP": "なし",
                "pt-BR": "Nenhuma",
                "zh-CN": "全部禁用"
            }
        ]
    },
    "CHASE TIME REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_DURATION",
                "en-US": "Destination and Duration",
                "guid": "00000000C479",
                "es-MX": "Destino y duración",
                "fr-FR": "Destination et Durée",
                "ja-JP": "目的と持続時間",
                "pt-BR": "Destino e Duração",
                "zh-CN": "终点及持续时间"
            },
            {
                "guid": "00000000B8C9",
                "opy": "ChaseReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "ja-JP": "なし",
                "pt-BR": "Nenhuma",
                "zh-CN": "全部禁用"
            }
        ]
    },
    "OBJECTIVE DESCRIPTION REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "guid": "00000000BB31",
                "opy": "HudReeval.STRING",
                "en-US": "String",
                "es-MX": "Cadena",
                "fr-FR": "Chaîne de texte",
                "ja-JP": "文字列",
                "zh-CN": "字符串"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "en-US": "Visible To and String",
                "guid": "00000000BA8C",
                "es-MX": "Visible para y cadena",
                "fr-FR": "Visible pour et Chaîne de texte",
                "ja-JP": "表示される相手、文字列",
                "pt-BR": "Visível para e String",
                "zh-CN": "可见和字符串"
            }
        ]
    },
    "DAMAGE MODIFICATION REEVALUATION": {
        "opy": "DamageReeval",
        "values": [
            {
                "guid": "00000000C643",
                "opy": "DamageReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucun",
                "ja-JP": "なし",
                "pt-BR": "Nenhuma",
                "zh-CN": "无"
            },
            {
                "opy": "DamageReeval.RECEIVERS_AND_DAMAGERS",
                "en-US": "Receivers and Damagers",
                "guid": "00000000C644",
                "es-MX": "Receptores e infligidores de daño",
                "fr-FR": "Récepteurs et émetteurs de dégâts",
                "ja-JP": "レシーバーとダメージャー",
                "pt-BR": "Receptores e Danificadores",
                "zh-CN": "受伤害者和伤害者"
            },
            {
                "guid": "00000000C645",
                "opy": "DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT",
                "en-US": "Receivers Damagers and Damage Percent",
                "es-MX": "Receptores infligidores de daño y porcentaje de daño",
                "fr-FR": "Récepteurs de dégâts émetteurs de dégâts et pourcentage de dégâts",
                "ja-JP": "レシーバー、ダメージャー、ダメージのパーセンテージ",
                "pt-BR": "Receptores Danificadores e Porcentagem de Dano",
                "zh-CN": "受伤害者，伤害者及伤害百分比"
            }
        ]
    },
    "FACING REEVALUATION": {
        "opy": "FacingReeval",
        "values": [
            {
                "opy": "FacingReeval.DIRECTION_AND_TURN_RATE",
                "en-US": "Direction and Turn Rate",
                "guid": "00000000BB1F",
                "es-MX": "Dirección y velocidad de giro",
                "fr-FR": "Direction et Taux de rotation",
                "ja-JP": "方向と回転レート",
                "pt-BR": "Direção e Taxa de Giro",
                "zh-CN": "方向及角速率"
            },
            {
                "guid": "00000000B8C3",
                "opy": "FacingReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "ja-JP": "なし",
                "pt-BR": "Ninguém",
                "zh-CN": "无"
            }
        ]
    },
    "WAIT BEHAVIOR": {
        "opy": "Wait",
        "values": [
            {
                "opy": "Wait.ABORT_WHEN_FALSE",
                "en-US": "Abort When False",
                "guid": "00000000787D",
                "es-ES": "Abortar cuando sea falso",
                "es-MX": "Cancelar cuando es falso",
                "fr-FR": "Interrompre quand faux",
                "it-IT": "Annulla quando è falso",
                "ja-JP": "「FALSE」の場合中止",
                "pl-PL": "Przerwij kiedy to fałsz",
                "pt-BR": "Anular Quando For Falso",
                "zh-CN": "当为“假”时中止"
            },
            {
                "opy": "Wait.IGNORE_CONDITION",
                "en-US": "Ignore Condition",
                "guid": "00000000787C",
                "es-ES": "Ignorar condición",
                "es-MX": "Ignorar condición",
                "fr-FR": "Ignorer la condition",
                "it-IT": "Ignora condizione",
                "ja-JP": "条件無視",
                "pl-PL": "Zignoruj warunek",
                "pt-BR": "Ignorar Condição",
                "zh-CN": "无视条件"
            },
            {
                "opy": "Wait.RESTART_WHEN_TRUE",
                "en-US": "Restart When True",
                "guid": "00000000787E",
                "es-ES": "Reiniciar cuando sea verdadero",
                "es-MX": "Reiniciar cuando es verdadero",
                "fr-FR": "Redémarrer quand vrai",
                "it-IT": "Riparti quando è vero",
                "ja-JP": "「TRUE」の場合リスタート",
                "pl-PL": "Zrestartuj kiedy to prawda",
                "pt-BR": "Reiniciar Quando For Verdadeiro",
                "zh-CN": "当为“真”时重新开始"
            }
        ]
    },
    "BARRIERS LOS": {
        "opy": "BarrierLos",
        "values": [
            {
                "opy": "BarrierLos.BLOCKED_BY_ENEMY_BARRIERS",
                "en-US": "Enemy Barriers Block LOS",
                "guid": "00000000B1EE",
                "es-MX": "Las barreras enemigas bloquean la LDV",
                "fr-FR": "Les barrières ennemies bloquent la ligne de vue",
                "ja-JP": "敵のバリアが射線を妨げる",
                "pt-BR": "Barreiras Inimigas Bloqueiam LdV",
                "zh-CN": "敌方屏障阻挡视线"
            },
            {
                "opy": "BarrierLos.BLOCKED_BY_ALL_BARRIERS",
                "en-US": "All Barriers Block LOS",
                "guid": "00000000B1EF",
                "es-MX": "Todas las barreras bloquean la LDV",
                "fr-FR": "Toutes les barrières bloquent la ligne de vue",
                "ja-JP": "すべてのバリアが射線を妨げる",
                "pt-BR": "Todas as Barreiras Bloqueiam LdV",
                "zh-CN": "所有屏障阻挡视线"
            },
            {
                "opy": "BarrierLos.PASS_THROUGH_BARRIERS",
                "en-US": "Barriers Do Not Block LOS",
                "guid": "00000000B1ED",
                "es-MX": "Las barreras no bloquean la LDV",
                "fr-FR": "Les barrières ne bloquent pas la ligne de vue",
                "ja-JP": "バリアは射線を妨げない",
                "pt-BR": "Barreiras Não Bloqueiam LdV",
                "zh-CN": "屏障不会阻挡视线"
            }
        ]
    },
    "STATUS": {
        "opy": "Status",
        "values": [
            {
                "opy": "Status.ASLEEP",
                "en-US": "Asleep",
                "guid": "00000000B36A",
                "es-MX": "Dormido",
                "fr-FR": "Endormi",
                "ja-JP": "眠っている",
                "pt-BR": "Dormindo",
                "zh-CN": "沉睡"
            },
            {
                "guid": "00000000B36C",
                "opy": "Status.BURNING",
                "en-US": "Burning",
                "es-MX": "En llamas",
                "fr-FR": "Enflammé",
                "ja-JP": "燃焼中",
                "pt-BR": "Queimando",
                "zh-CN": "点燃"
            },
            {
                "guid": "00000000B369",
                "opy": "Status.FROZEN",
                "en-US": "Frozen",
                "es-MX": "Congelado",
                "fr-FR": "Gelé",
                "ja-JP": "凍っている",
                "pt-BR": "Congelado",
                "zh-CN": "冻结"
            },
            {
                "guid": "00000000B36D",
                "opy": "Status.HACKED",
                "en-US": "Hacked",
                "es-MX": "Hackeado",
                "fr-FR": "Piraté",
                "ja-JP": "ハックされている",
                "pt-BR": "Hackeado",
                "zh-CN": "被入侵"
            },
            {
                "opy": "Status.INVINCIBLE",
                "en-US": "Invincible",
                "guid": "00000000B367",
                "es-MX": "Invencible",
                "ja-JP": "無敵",
                "pt-BR": "Invencível",
                "zh-CN": "无敌"
            },
            {
                "opy": "Status.KNOCKED_DOWN",
                "en-US": "Knocked Down",
                "guid": "00000000B36B",
                "es-MX": "Derribado",
                "fr-FR": "Renversé",
                "ja-JP": "ノックダウンされている",
                "pt-BR": "Nocauteado",
                "zh-CN": "击倒"
            },
            {
                "opy": "Status.PHASED_OUT",
                "en-US": "Phased Out",
                "guid": "00000000B366",
                "es-MX": "Forma etérea",
                "fr-FR": "Déphasé",
                "ja-JP": "フェーズアウト中",
                "pt-BR": "Intangível",
                "zh-CN": "消散"
            },
            {
                "opy": "Status.ROOTED",
                "en-US": "Rooted",
                "guid": "00000000B365",
                "es-MX": "Arraigado",
                "fr-FR": "Immobilisé",
                "ja-JP": "固定されている",
                "pt-BR": "Enraizado",
                "zh-CN": "定身"
            },
            {
                "guid": "00000000B565",
                "opy": "Status.STUNNED",
                "en-US": "Stunned",
                "es-MX": "Aturdido",
                "fr-FR": "Étourdi",
                "ja-JP": "スタンされている",
                "pt-BR": "Atordoado",
                "zh-CN": "昏迷"
            },
            {
                "opy": "Status.UNKILLABLE",
                "en-US": "Unkillable",
                "guid": "00000000B368",
                "es-MX": "Inmortal",
                "fr-FR": "Intuable",
                "ja-JP": "キル不可",
                "pt-BR": "Imortal",
                "zh-CN": "无法杀死"
            }
        ]
    },
    "SPECTATOR VISIBILITY": {
        "opy": "SpecVisibility",
        "values": [
            {
                "opy": "SpecVisibility.DEFAULT",
                "en-US": "Default Visibility",
                "guid": "00000000CE55",
                "es-MX": "Visibilidad predeterminada",
                "fr-FR": "Visibilité par défaut",
                "ja-JP": "デフォルト表示",
                "pl-PL": "Domyślna widoczność",
                "pt-BR": "Visibilidade-padrão",
                "zh-CN": "默认可见度"
            },
            {
                "opy": "SpecVisibility.ALWAYS",
                "en-US": "Visible Always",
                "guid": "00000000CE56",
                "es-MX": "Siempre visible",
                "fr-FR": "Toujours visible",
                "ja-JP": "常に表示",
                "pl-PL": "Zawsze widoczny",
                "pt-BR": "Sempre Visível",
                "zh-CN": "始终可见"
            },
            {
                "opy": "SpecVisibility.NEVER",
                "en-US": "Visible Never",
                "guid": "00000000CE57",
                "es-MX": "Nunca visible",
                "fr-FR": "Jamais visible",
                "ja-JP": "表示されない",
                "pl-PL": "Zawsze niewidoczny",
                "pt-BR": "Nunca Visível",
                "zh-CN": "始终不可见"
            }
        ]
    },
    "BEAM EFFECT": {
        "opy": "Beam",
        "values": [
            {
                "opy": "Beam.BAD",
                "en-US": "Bad Beam",
                "guid": "00000000CE85",
                "es-MX": "Rayo malo",
                "fr-FR": "Mauvais rayon",
                "ja-JP": "マイナス効果のビーム",
                "pl-PL": "Zła wiązka",
                "pt-BR": "Feixe Mau",
                "zh-CN": "有害光束"
            },
            {
                "opy": "Beam.GOOD",
                "en-US": "Good Beam",
                "guid": "00000000CE84",
                "es-MX": "Rayo bueno",
                "fr-FR": "Bon rayon",
                "ja-JP": "プラス効果のビーム",
                "pl-PL": "Dobra wiązka",
                "pt-BR": "Feixe Bom",
                "zh-CN": "有益光束"
            },
            {
                "opy": "Beam.GRAPPLE",
                "en-US": "Grapple Beam",
                "guid": "00000000CE9D",
                "es-MX": "Rayo de arpeo",
                "fr-FR": "Rayon du grappin",
                "ja-JP": "グラップリング・ビーム",
                "pl-PL": "Wiązka kotwiczki",
                "pt-BR": "Feixe de Arpéu",
                "zh-CN": "抓钩光束"
            }
        ]
    },
    "THROTTLE BEHAVIOR": {
        "opy": "Throttle",
        "values": [
            {
                "opy": "Throttle.REPLACE_EXISTING",
                "en-US": "Replace existing throttle",
                "guid": "00000000CEB0",
                "es-MX": "Reemplazar aceleración preexistente",
                "fr-FR": "Remplacer l’accélération existante",
                "ja-JP": "既存のスロットルと入れ替え",
                "pl-PL": "Zastąp istniejący pęd",
                "pt-BR": "Substituir a aceleração existente",
                "zh-CN": "替换现有阈值"
            },
            {
                "opy": "Throttle.ADD_TO_EXISTING",
                "en-US": "Add to existing throttle",
                "guid": "00000000CEB1",
                "es-MX": "Agregar a aceleración preexistente",
                "fr-FR": "Ajouter à l’accélération existante",
                "ja-JP": "既存のスロットルに追加",
                "pl-PL": "Dodaj do istniejącego pędu",
                "pt-BR": "Somar à aceleração existente",
                "zh-CN": "添加至现有阈值"
            }
        ]
    },
    "THROTTLE REEVALUATION": {
        "opy": "ThrottleReeval",
        "values": [
            {
                "opy": "ThrottleReeval.DIRECTION_AND_MAGNITUDE",
                "en-US": "Direction and Magnitude",
                "guid": "00000000CEB3",
                "es-MX": "Dirección y magnitud",
                "fr-FR": "Direction et ampleur",
                "ja-JP": "方向と変化の大きさ",
                "pl-PL": "Kierunek i wielkość",
                "pt-BR": "Direção e Magnitude",
                "zh-CN": "方向和幅度"
            },
            {
                "guid": "00000000CEB2",
                "opy": "ThrottleReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "it-IT": "Nessuno",
                "ja-JP": "なし",
                "pl-PL": "Brak",
                "pt-BR": "Nenhum",
                "zh-CN": "无"
            }
        ]
    },
    "ACCELERATION REEVALUATION": {
        "opy": "AccelReeval",
        "values": [
            {
                "guid": "00000000BB1A",
                "opy": "AccelReeval.DIRECTION_RATE_AND_MAX_SPEED",
                "en-US": "Direction Rate and Max Speed",
                "es-MX": "Dirección aceleración y velocidad máxima",
                "fr-FR": "Direction Taux et Vitesse maximum",
                "ja-JP": "方向、レート、最大の速さ",
                "pt-BR": "Direção Taxa e Velocidade Máx.",
                "zh-CN": "方向，速率，及最大速度"
            },
            {
                "guid": "00000000B8C3",
                "opy": "AccelReeval.NONE",
                "en-US": "None",
                "es-MX": "Ninguno",
                "fr-FR": "Aucune",
                "ja-JP": "なし",
                "pt-BR": "Ninguém",
                "zh-CN": "无"
            }
        ]
    },
    "MAP CONSTANT": {
        "opy": "Map",
        "values": [
            {
                "opy": "Map.AYUTTHAYA",
                "en-US": "Ayutthaya",
                "guid": "00000000676E",
                "ja-JP": "AYUTTHAYA",
                "ko-KR": "아유타야",
                "ru-RU": "Аюттайя",
                "zh-CN": "阿育陀耶",
                "zh-TW": "大城"
            },
            {
                "guid": "0000000059C3",
                "opy": "Map.BLACK_FOREST",
                "en-US": "Black Forest",
                "de-DE": "Schwarzwald",
                "es-ES": "Selva Negra",
                "es-MX": "Selva negra",
                "fr-FR": "Forêt-Noire",
                "it-IT": "Foresta Nera",
                "ja-JP": "BLACK FOREST",
                "ko-KR": "검은 숲",
                "pl-PL": "Czarny Las",
                "pt-BR": "Floresta Negra",
                "ru-RU": "Черный лес",
                "zh-CN": "黑森林",
                "zh-TW": "黑森林"
            },
            {
                "guid": "0000000070F4",
                "opy": "Map.BLACK_FOREST_WINTER",
                "en-US": "BLACK FOREST WINTER",
                "de-DE": "Schwarzwald Winter",
                "es-ES": "Selva Negra invierno",
                "es-MX": "Selva Negra Invierno",
                "fr-FR": "Forêt-Noire hiver",
                "it-IT": "Foresta Nera Inverno",
                "ja-JP": "BLACK FOREST （ウィンター）",
                "ko-KR": "검은 숲 겨울",
                "pl-PL": "Czarny las zima",
                "pt-BR": "Floresta Negra Inverno",
                "ru-RU": "Черный лес зима",
                "zh-CN": "圣诞节黑森林",
                "zh-TW": "黑森林（冬境）"
            },
            {
                "guid": "000000006905",
                "opy": "Map.BLIZZ_WORLD",
                "en-US": "Blizzard World",
                "ja-JP": "BLIZZARD WORLD",
                "ko-KR": "블리자드 월드",
                "zh-CN": "暴雪世界",
                "zh-TW": "暴雪樂園"
            },
            {
                "guid": "00000000A933",
                "opy": "Map.BLIZZ_WORLD_WINTER",
                "en-US": "Blizzard World Winter",
                "es-ES": "Blizzard World invierno",
                "es-MX": "Blizzard World invierno",
                "fr-FR": "Blizzard World hiver",
                "it-IT": "Blizzard World Inverno",
                "ja-JP": "BLIZZARD WORLD （ウィンター）",
                "ko-KR": "블리자드 월드 겨울",
                "pl-PL": "Blizzard World Zima",
                "pt-BR": "Blizzard World Inverno",
                "ru-RU": "Blizzard World зима",
                "zh-CN": "圣诞节暴雪世界",
                "zh-TW": "暴雪樂園（冬境）"
            },
            {
                "guid": "000000006D90",
                "opy": "Map.BUSAN",
                "en-US": "Busan",
                "ja-JP": "BUSAN",
                "ko-KR": "부산",
                "pl-PL": "Pusan",
                "ru-RU": "Пусан",
                "zh-CN": "釜山",
                "zh-TW": "釜山"
            },
            {
                "guid": "00000000D2C9",
                "opy": "Map.BUSAN_DOWNTOWN_LNY",
                "en-US": "Busan Downtown Lunar New Year",
                "de-DE": "Stadtzentrum von Busan Neujahr",
                "es-ES": "Centro de Busan Año Nuevo Lunar",
                "es-MX": "Centro de Busan Año Nuevo Lunar",
                "fr-FR": "Busan - Centre-ville nouvel an lunaire",
                "it-IT": "Busan - Centro Capodanno Lunare",
                "ja-JP": "BUSAN DOWNTOWN 旧正月",
                "ko-KR": "부산 시내 설날",
                "pl-PL": "Pusan: Centrum Księżycowy Nowy Rok",
                "pt-BR": "Centro de Busan Ano Novo Lunar",
                "ru-RU": "Центр Пусана Лунный Новый год",
                "zh-CN": "春节釜山城区",
                "zh-TW": "釜山市區（春節）"
            },
            {
                "guid": "00000000D2CA",
                "opy": "Map.BUSAN_SANCTUARY_LNY",
                "en-US": "Busan Sanctuary Lunar New Year",
                "de-DE": "Tempel von Busan Neujahr",
                "es-ES": "Santuario de Busan Año Nuevo Lunar",
                "es-MX": "Santuario de Busan Año Nuevo Lunar",
                "fr-FR": "Busan - Sanctuaire nouvel an lunaire",
                "it-IT": "Busan - Santuario Capodanno Lunare",
                "ja-JP": "BUSAN SANCTUARY 旧正月",
                "ko-KR": "부산 사찰 설날",
                "pl-PL": "Pusan: Sanktuarium Księżycowy Nowy Rok",
                "pt-BR": "Santuário de Busan Ano Novo Lunar",
                "ru-RU": "Святилище Пусана Лунный Новый год",
                "zh-CN": "春节釜山寺院",
                "zh-TW": "釜山寺院（春節）"
            },
            {
                "opy": "Map.BUSAN_STADIUM",
                "en-US": "Busan Stadium",
                "guid": "000000008A19",
                "de-DE": "Stadion von Busan",
                "es-ES": "Estadio de Busan",
                "es-MX": "Estadio de Busan",
                "fr-FR": "Stade de Busan",
                "it-IT": "Busan - Stadio",
                "ja-JP": "BUSAN STADIUM",
                "ko-KR": "부산 스타디움",
                "pl-PL": "Stadion Pusan",
                "pt-BR": "Estádio Busan",
                "ru-RU": "Стадион Пусана",
                "zh-CN": "釜山体育场",
                "zh-TW": "釜山運動場"
            },
            {
                "opy": "Map.CASTILLO",
                "en-US": "Castillo",
                "guid": "000000005C04",
                "ja-JP": "CASTILLO",
                "ko-KR": "카스티요",
                "ru-RU": "Кастильо",
                "zh-CN": "城堡",
                "zh-TW": "城塞"
            },
            {
                "guid": "0000000069CA",
                "opy": "Map.CHATEAU_GUILLARD",
                "en-US": "Château Guillard",
                "es-ES": "Palacio Guillard",
                "ja-JP": "CHATEAU GUILLARD",
                "ko-KR": "샤토 기야르",
                "ru-RU": "Шато-Гийяр",
                "zh-CN": "吉拉德堡",
                "zh-TW": "蓋亞爾城堡"
            },
            {
                "guid": "000000009FA4",
                "opy": "Map.CHATEAU_GUILLARD_HALLOWEEN",
                "en-US": "Château Guillard Halloween",
                "es-ES": "Palacio Guillard Halloween",
                "ja-JP": "CHATEAU GUILLARD ハロウィン",
                "ko-KR": "샤토 기야르 할로윈",
                "pl-PL": "Château Guillard Halloweenowe",
                "ru-RU": "Шато-Гийяр Хеллоуин",
                "zh-CN": "万圣节吉拉德堡",
                "zh-TW": "蓋亞爾城堡（萬聖節）"
            },
            {
                "opy": "Map.DORADO",
                "en-US": "Dorado",
                "guid": "0000000008C1",
                "it-IT": "El Dorado",
                "ja-JP": "DORADO",
                "ko-KR": "도라도",
                "ru-RU": "Дорадо",
                "zh-CN": "多拉多",
                "zh-TW": "多拉多"
            },
            {
                "guid": "0000000047D3",
                "opy": "Map.ECOPOINT_ANTARCTICA",
                "en-US": "Ecopoint: Antarctica",
                "de-DE": "Ecopoint: Antarktis",
                "es-ES": "Ecobase: Antártida",
                "es-MX": "Ecopunto: Antártida",
                "fr-FR": "Écolab : Antarctique",
                "it-IT": "Ecobase: Antartide",
                "ja-JP": "ECOPOINT: ANTARCTICA",
                "ko-KR": "탐사 기지: 남극",
                "pl-PL": "Ekopunkt Antarktyda",
                "pt-BR": "Ecoponto: Antártica",
                "ru-RU": "Экостанция: Антарктика",
                "zh-CN": "生态监测站：南极洲",
                "zh-TW": "南極洲生態觀測站"
            },
            {
                "guid": "0000000075A7",
                "opy": "Map.ECOPOINT_ANTARCTICA_WINTER",
                "en-US": "Ecopoint: Antarctica Winter",
                "de-DE": "Ecopoint: Antarktis Winter",
                "es-ES": "Ecobase: Antártida invierno",
                "es-MX": "Ecopunto: Antártida Invierno",
                "fr-FR": "Écolab : Antarctique hiver",
                "it-IT": "Ecobase: Antartide inverno",
                "ja-JP": "ECOPOINT: ANTARCTICA （ウィンター）",
                "ko-KR": "탐사 기지: 남극 겨울",
                "pl-PL": "Ekopunkt Antarktyda Zima",
                "pt-BR": "Ecoponto: Antártica Inverno",
                "ru-RU": "Экостанция: Антарктика зима",
                "zh-CN": "圣诞节生态监测站：南极洲",
                "zh-TW": "南極洲生態觀測站（冬境）"
            },
            {
                "guid": "0000000029AF",
                "opy": "Map.EICHENWALDE",
                "en-US": "Eichenwalde",
                "ja-JP": "EICHENWALDE",
                "ko-KR": "아이헨발데",
                "ru-RU": "Айхенвальд",
                "zh-CN": "艾兴瓦尔德",
                "zh-TW": "愛西瓦德"
            },
            {
                "guid": "000000006E6B",
                "opy": "Map.EICHENWALDE_HALLOWEEN",
                "en-US": "EICHENWALDE HALLOWEEN",
                "de-DE": "Eichenwalde Halloween",
                "es-ES": "Eichenwalde Halloween",
                "es-MX": "Eichenwalde Halloween",
                "fr-FR": "Eichenwalde Halloween",
                "it-IT": "Eichenwalde Halloween",
                "ja-JP": "EICHENWALDE （ハロウィン）",
                "ko-KR": "아이헨발데 할로윈",
                "pl-PL": "Eichenwalde Halloween",
                "pt-BR": "Eichenwalde Halloween",
                "ru-RU": "Айхенвальд Хеллоуин",
                "zh-CN": "万圣节艾兴瓦尔德",
                "zh-TW": "愛西瓦德（萬聖節）"
            },
            {
                "opy": "Map.ESTADIO_DAS_RAS",
                "en-US": "Estádio das Rãs",
                "guid": "000000004629",
                "es-MX": "Estadio de Rãs",
                "it-IT": "Estádio de Rãs",
                "ja-JP": "ESTADIO DAS RAS",
                "ko-KR": "이스타지우 다스 하스",
                "ru-RU": "«Эстадиу ди Ранс»",
                "zh-CN": "弗格体育场",
                "zh-TW": "青蛙體育場"
            },
            {
                "guid": "000000000138",
                "opy": "Map.HANAMURA",
                "en-US": "Hanamura",
                "ja-JP": "HANAMURA",
                "ko-KR": "하나무라",
                "ru-RU": "Ханамура",
                "zh-CN": "花村",
                "zh-TW": "花村"
            },
            {
                "guid": "000000005479",
                "opy": "Map.HANAMURA_WINTER",
                "en-US": "Hanamura Winter",
                "es-ES": "Hanamura invierno",
                "es-MX": "Hanamura Invierno",
                "fr-FR": "Hanamura hiver",
                "it-IT": "Hanamura Inverno",
                "ja-JP": "HANAMURA （ウィンター）",
                "ko-KR": "하나무라 겨울",
                "pl-PL": "Hanamura zima",
                "pt-BR": "Hanamura Inverno",
                "ru-RU": "Ханамура зима",
                "zh-CN": "圣诞节花村",
                "zh-TW": "花村（冬境）"
            },
            {
                "guid": "00000000B457",
                "opy": "Map.Havana",
                "en-US": "Havana",
                "de-DE": "Havanna",
                "es-ES": "La Habana",
                "es-MX": "La Habana",
                "fr-FR": "La Havane",
                "it-IT": "L'Avana",
                "ja-JP": "HAVANA",
                "ko-KR": "하바나",
                "pl-PL": "Hawana",
                "ru-RU": "Гавана",
                "zh-CN": "哈瓦那",
                "zh-TW": "哈瓦那"
            },
            {
                "guid": "00000000053D",
                "opy": "Map.HOLLYWOOD",
                "en-US": "Hollywood",
                "it-IT": "HOLLYWOOD",
                "ja-JP": "HOLLYWOOD",
                "ko-KR": "할리우드",
                "ru-RU": "Голливуд",
                "zh-CN": "好莱坞",
                "zh-TW": "好萊塢"
            },
            {
                "guid": "000000004EE3",
                "opy": "Map.HOLLYWOOD_HALLOWEEN",
                "en-US": "Hollywood Halloween",
                "ja-JP": "HOLLYWOOD （ハロウィン）",
                "ko-KR": "할리우드 할로윈",
                "ru-RU": "Голливуд Хеллоуин",
                "zh-CN": "万圣节好莱坞",
                "zh-TW": "好萊塢（萬聖節主題）"
            },
            {
                "guid": "000000004EEE",
                "opy": "Map.HORIZON_LUNAR_COLONY",
                "en-US": "Horizon Lunar Colony",
                "de-DE": "Mondkolonie Horizon",
                "es-ES": "Colonia Lunar Horizon",
                "es-MX": "Colonia lunar Horizonte",
                "fr-FR": "Colonie lunaire Horizon",
                "it-IT": "Colonia Lunare Horizon",
                "ja-JP": "HORIZON LUNAR COLONY",
                "ko-KR": "호라이즌 달 기지",
                "pl-PL": "Kolonia księżycowa Horyzont",
                "pt-BR": "Colônia Lunar Horizon",
                "ru-RU": "Лунная колония «Горизонт»",
                "zh-CN": "“地平线”月球基地",
                "zh-TW": "地平線月球殖民地"
            },
            {
                "opy": "Map.ILIOS",
                "en-US": "Ilios",
                "guid": "0000000022FA",
                "it-IT": "Ilio",
                "ja-JP": "ILIOS",
                "ko-KR": "일리오스",
                "ru-RU": "Илиос",
                "zh-CN": "伊利奥斯",
                "zh-TW": "伊利歐斯"
            },
            {
                "opy": "Map.ILIOS_LIGHTHOUSE",
                "en-US": "Ilios Lighthouse",
                "guid": "000000005847",
                "de-DE": "Ilios – Leuchtturm",
                "es-ES": "Faro de Ilios",
                "es-MX": "Faro de Ilios",
                "fr-FR": "Ilios - Phare",
                "it-IT": "Ilio - Faro",
                "ja-JP": "ILIOS LIGHTHOUSE",
                "ko-KR": "일리오스 등대",
                "pl-PL": "Ilios: Latarnia morska",
                "pt-BR": "Farol de Ilios",
                "ru-RU": "Илиос: маяк",
                "zh-CN": "伊利奥斯灯塔",
                "zh-TW": "伊利歐斯燈塔"
            },
            {
                "opy": "Map.ILIOS_RUINS",
                "en-US": "Ilios Ruins",
                "guid": "000000005851",
                "de-DE": "Ilios – Ruinen",
                "es-ES": "Ruinas de Ilios",
                "es-MX": "Ruinas de Ilios",
                "fr-FR": "Ilios - Ruines",
                "it-IT": "Ilio - Rovine",
                "ja-JP": "ILIOS RUINS",
                "ko-KR": "일리오스 폐허",
                "pl-PL": "Ilios: Ruiny",
                "pt-BR": "Ruínas de Ilios",
                "ru-RU": "Илиос: развалины",
                "zh-CN": "伊利奥斯废墟",
                "zh-TW": "伊利歐斯廢墟"
            },
            {
                "opy": "Map.ILIOS_WELL",
                "en-US": "Ilios Well",
                "guid": "00000000583B",
                "de-DE": "Ilios – Brunnen",
                "es-ES": "Pozo de Ilios",
                "es-MX": "Pozo de Ilios",
                "fr-FR": "Ilios - Puits",
                "it-IT": "Ilio - Pozzo",
                "ja-JP": "ILIOS WELL",
                "ko-KR": "일리오스 우물",
                "pl-PL": "Ilios: Studnia",
                "pt-BR": "Poço de Ilios",
                "ru-RU": "Илиос: колодец",
                "zh-CN": "伊利奥斯深井",
                "zh-TW": "伊利歐斯水井"
            },
            {
                "guid": "000000004AF4",
                "opy": "Map.JUNKENSTEIN",
                "en-US": "Junkenstein's Revenge",
                "de-DE": "Junkensteins Rache",
                "es-ES": "La venganza de Junkenstein",
                "es-MX": "La venganza de Junkenstein",
                "fr-FR": "La vengeance du Dr Schakalstein",
                "it-IT": "La vendetta di Junkenstein",
                "ja-JP": "ジャンケン<br>シュタインの<br>復讐",
                "ko-KR": "정켄슈타인의 복수",
                "pl-PL": "Zemsta dr. Złomensteina",
                "pt-BR": "A vingança de Junkenstein",
                "ru-RU": "Месть Крысенштейна",
                "zh-CN": "怪鼠复仇",
                "zh-TW": "鼠肯斯坦復仇記"
            },
            {
                "guid": "000000005D7B",
                "opy": "Map.JUNKERTOWN",
                "en-US": "Junkertown",
                "ja-JP": "JUNKERTOWN",
                "ko-KR": "쓰레기촌",
                "ru-RU": "Джанкертаун",
                "zh-CN": "渣客镇",
                "zh-TW": "垃圾鎮"
            },
            {
                "guid": "000000000133",
                "opy": "Map.KINGS_ROW",
                "en-US": "King's Row",
                "fr-FR": "King’s Row",
                "ja-JP": "KING'S ROW",
                "ko-KR": "왕의 길",
                "ru-RU": "Кингс Роу",
                "zh-CN": "国王大道",
                "zh-TW": "國王大道"
            },
            {
                "guid": "00000000547A",
                "opy": "Map.KINGS_ROW_WINTER",
                "en-US": "King's Row Winter",
                "es-ES": "King's Row invierno",
                "es-MX": "King's Row Invierno",
                "fr-FR": "King's Row hiver",
                "it-IT": "King's Row Inverno",
                "ja-JP": "KING'S ROW （ウィンター）",
                "ko-KR": "왕의 길 겨울",
                "pl-PL": "King's Row zima",
                "pt-BR": "King's Row Inverno",
                "ru-RU": "Кингс Роу зима",
                "zh-CN": "圣诞节国王大道",
                "zh-TW": "國王大道（冬境）"
            },
            {
                "guid": "000000005724",
                "opy": "Map.LIJIANG_CONTROL_CENTER",
                "en-US": "Lijiang Control Center",
                "de-DE": "Lijiang Tower – Kontrollzentrum",
                "es-ES": "Centro de control de Torre Lijiang",
                "es-MX": "Centro de control de Lijiang",
                "fr-FR": "Centre de contrôle de Lijiang",
                "it-IT": "Lijiang - Centro di Controllo",
                "ja-JP": "LIJIANG CONTROL CENTER",
                "ko-KR": "리장 관제 센터",
                "pl-PL": "Wieża Lijiang: Centrum sterowania",
                "pt-BR": "Centro de Controle Lijiang",
                "ru-RU": "Командный центр Лицзян",
                "zh-CN": "漓江塔控制中心",
                "zh-TW": "灕江天塔控制中心"
            },
            {
                "guid": "000000007EFB",
                "opy": "Map.LIJIANG_CONTROL_CENTER_LNY",
                "en-US": "Lijiang Control Center Lunar New Year",
                "de-DE": "Lijiang Tower – Kontrollzentrum Neujahr",
                "es-ES": "Centro de control de Lijiang Año Nuevo Lunar",
                "es-MX": "Centro de control de Lijiang Año Nuevo Lunar",
                "fr-FR": "Lijiang - Centre de contrôle nouvel an lunaire",
                "it-IT": "Lijiang - Centro di Controllo Capodanno Lunare",
                "ja-JP": "LIJIANG CONTROL CENTER 旧正月",
                "ko-KR": "리장 관제 센터 설날",
                "pl-PL": "Wieża Lijiang: Centrum sterowania Księżycowy Nowy Rok",
                "pt-BR": "Centro de Controle Lijiang Ano Novo Lunar",
                "ru-RU": "Командный центр Лицзян Лунный Новый год",
                "zh-CN": "春节漓江塔控制中心",
                "zh-TW": "灕江控制中心（春節）"
            },
            {
                "guid": "000000005623",
                "opy": "Map.LIJIANG_GARDEN",
                "en-US": "Lijiang Garden",
                "de-DE": "Lijiang Tower – Garten",
                "es-ES": "Lijiang: Jardín",
                "es-MX": "Jardín Lijiang",
                "fr-FR": "Jardin de Lijiang",
                "it-IT": "Lijiang - Giardino",
                "ja-JP": "LIJIANG GARDEN",
                "ko-KR": "리장 정원",
                "pl-PL": "Wieża Lijiang: Ogród",
                "pt-BR": "Jardim Lijiang",
                "ru-RU": "Сад Лицзян",
                "zh-CN": "漓江塔庭院",
                "zh-TW": "灕江花園"
            },
            {
                "guid": "000000007EF9",
                "opy": "Map.LIJIANG_GARDEN_LNY",
                "en-US": "Lijiang Garden Lunar New Year",
                "de-DE": "Lijiang Tower – Garten Neujahr",
                "es-ES": "Lijiang: Jardín Año Nuevo Lunar",
                "es-MX": "Jardín Lijiang Año Nuevo Lunar",
                "fr-FR": "Lijiang - Jardin nouvel an lunaire",
                "it-IT": "Lijiang - Giardino Capodanno Lunare",
                "ja-JP": "LIJIANG GARDEN 旧正月",
                "ko-KR": "리장 정원 설날",
                "pl-PL": "Wieża Lijiang: Ogród Księżycowy Nowy Rok",
                "pt-BR": "Jardim Lijiang Ano Novo Lunar",
                "ru-RU": "Сад Лицзян Лунный Новый год",
                "zh-CN": "春节漓江塔庭院",
                "zh-TW": "灕江花園（春節）"
            },
            {
                "guid": "000000005631",
                "opy": "Map.LIJIANG_NIGHT_MARKET",
                "en-US": "Lijiang Night Market",
                "de-DE": "Nachtmarkt von Lijiang",
                "es-ES": "Lijiang: Mercado nocturno",
                "es-MX": "Mercado nocturno de Lijiang",
                "fr-FR": "Marché de nuit de Lijiang",
                "it-IT": "Lijiang - Mercato Notturno",
                "ja-JP": "LIJIANG NIGHT MARKET",
                "ko-KR": "리장 야시장",
                "pl-PL": "Wieża Lijiang: Nocny bazar",
                "pt-BR": "Mercado Noturno de Lijiang",
                "ru-RU": "Ночной рынок Лицзян",
                "zh-CN": "漓江塔夜市",
                "zh-TW": "灕江夜市"
            },
            {
                "guid": "000000007EFA",
                "opy": "Map.LIJIANG_NIGHT_MARKET_LNY",
                "en-US": "Lijiang Night Market Lunar New Year",
                "de-DE": "Lijiang Tower – Nachtmarkt Neujahr",
                "es-ES": "Mercado nocturno de Lijiang Año Nuevo Lunar",
                "es-MX": "Mercado nocturno de Lijiang Año Nuevo Lunar",
                "fr-FR": "Lijiang - Marché de nuit nouvel an lunaire",
                "it-IT": "Lijiang - Mercato Notturno Capodanno Lunare",
                "ja-JP": "LIJIANG NIGHT MARKET 旧正月",
                "ko-KR": "리장 야시장 설날",
                "pl-PL": "Wieża Lijiang: Nocny bazar Księżycowy Nowy Rok",
                "pt-BR": "Mercado Noturno de Lijiang Ano Novo Lunar",
                "ru-RU": "Ночной рынок Лицзян Лунный Новый год",
                "zh-CN": "春节漓江塔夜市",
                "zh-TW": "灕江夜市（春節）"
            },
            {
                "guid": "000000001D22",
                "opy": "Map.LIJIANG_TOWER",
                "en-US": "Lijiang Tower",
                "es-ES": "Torre Lijiang",
                "es-MX": "Torre Lijiang",
                "fr-FR": "Tour de Lijiang",
                "it-IT": "TORRE DI LIJIANG",
                "ja-JP": "LIJIANG TOWER",
                "ko-KR": "리장 타워",
                "pl-PL": "Wieża Lijiang",
                "pt-BR": "Torre Lijiang",
                "ru-RU": "Башня Лицзян",
                "zh-CN": "漓江塔",
                "zh-TW": "灕江天塔"
            },
            {
                "guid": "000000005A33",
                "opy": "Map.LIJIANG_TOWER_LNY",
                "en-US": "Lijiang Tower Lunar New Year",
                "de-DE": "Lijiang Tower Neujahr",
                "es-ES": "Torre Lijiang Año Nuevo Lunar",
                "es-MX": "Torre Lijiang Año Nuevo Lunar",
                "fr-FR": "Tour de Lijiang nouvel an lunaire",
                "it-IT": "Torre di Lijiang Capodanno Lunare",
                "ja-JP": "LIJIANG TOWER LUNAR NEW YEAR",
                "ko-KR": "리장 타워 설날",
                "pl-PL": "Wieża Lijiang Księżycowa",
                "pt-BR": "Torre Lijiang Ano Novo Lunar",
                "ru-RU": "Башня Лицзян Лунный Новый год",
                "zh-CN": "春节漓江塔",
                "zh-TW": "灕江天塔（春節）"
            },
            {
                "opy": "Map.NECROPOLIS",
                "en-US": "Necropolis",
                "guid": "0000000053FB",
                "de-DE": "Nekropole",
                "es-ES": "Necrópolis",
                "es-MX": "Necrópolis",
                "fr-FR": "Nécropole",
                "it-IT": "Necropoli",
                "ja-JP": "NECROPOLIS",
                "ko-KR": "네크로폴리스",
                "pl-PL": "Nekropolia",
                "pt-BR": "Necrópole",
                "ru-RU": "Некрополь",
                "zh-CN": "墓园",
                "zh-TW": "墓室"
            },
            {
                "guid": "00000000138A",
                "opy": "Map.NEPAL",
                "en-US": "Nepal",
                "fr-FR": "Népal",
                "ja-JP": "NEPAL",
                "ko-KR": "네팔",
                "ru-RU": "Непал",
                "zh-CN": "尼泊尔",
                "zh-TW": "尼泊爾"
            },
            {
                "opy": "Map.NEPAL_SANCTUM",
                "en-US": "Nepal Sanctum",
                "guid": "0000000056BA",
                "de-DE": "Nepal – Sanktum",
                "es-ES": "Sagrario de Nepal",
                "es-MX": "Santuario de Nepal",
                "fr-FR": "Népal - Sanctuaire",
                "it-IT": "Nepal - Santuario",
                "ja-JP": "NEPAL SANCTUM",
                "ko-KR": "네팔 성소",
                "pl-PL": "Nepal: Sanktuarium",
                "pt-BR": "Sacrário de Nepal",
                "ru-RU": "Непал: святилище",
                "zh-CN": "尼泊尔圣所",
                "zh-TW": "尼泊爾聖所"
            },
            {
                "opy": "Map.NEPAL_SHRINE",
                "en-US": "Nepal Shrine",
                "guid": "00000000582C",
                "de-DE": "Nepal – Schrein",
                "es-ES": "Santuario de Nepal",
                "es-MX": "Sagrario de Nepal",
                "fr-FR": "Népal - Autel",
                "it-IT": "Nepal - Altare",
                "ja-JP": "NEPAL SHRINE",
                "ko-KR": "네팔 제단",
                "pl-PL": "Nepal: Kapliczka",
                "pt-BR": "Templo de Nepal",
                "ru-RU": "Непал: алтарь",
                "zh-CN": "尼泊尔圣坛",
                "zh-TW": "尼泊爾聖壇"
            },
            {
                "opy": "Map.NEPAL_VILLAGE",
                "en-US": "Nepal Village",
                "guid": "000000005821",
                "de-DE": "Nepal – Dorf",
                "es-ES": "Aldea de Nepal",
                "es-MX": "Pueblo de Nepal",
                "fr-FR": "Népal - Village",
                "it-IT": "Nepal - Villaggio",
                "ja-JP": "NEPAL VILLAGE",
                "ko-KR": "네팔 마을",
                "pl-PL": "Nepal: Wioska",
                "pt-BR": "Vilarejo de Nepal",
                "ru-RU": "Непал: деревня",
                "zh-CN": "尼泊尔村庄",
                "zh-TW": "尼泊爾村落"
            },
            {
                "guid": "000000006E1F",
                "opy": "Map.NEPAL_VILLAGE_WINTER",
                "en-US": "Nepal Village Winter",
                "de-DE": "Nepal – Dorf Winter",
                "es-ES": "Aldea de Nepal invierno",
                "es-MX": "Pueblo de Nepal Invierno",
                "fr-FR": "Népal - Village hiver",
                "it-IT": "Nepal - Villaggio Inverno",
                "ja-JP": "NEPAL VILLAGE （ウィンター）",
                "ko-KR": "네팔 마을 겨울",
                "pl-PL": "Nepal: Wioska zima",
                "pt-BR": "Vilarejo de Nepal Inverno",
                "ru-RU": "Непал: деревня зима",
                "zh-CN": "圣诞节尼泊尔村庄",
                "zh-TW": "尼泊爾村落（冬境）"
            },
            {
                "guid": "0000000002EA",
                "opy": "Map.NUMBANI",
                "en-US": "Numbani",
                "ja-JP": "NUMBANI",
                "ko-KR": "눔바니",
                "ru-RU": "Нумбани",
                "zh-CN": "努巴尼",
                "zh-TW": "努巴尼"
            },
            {
                "guid": "0000000046D5",
                "opy": "Map.OASIS",
                "en-US": "Oasis",
                "it-IT": "Oasi",
                "ja-JP": "OASIS",
                "ko-KR": "오아시스",
                "pl-PL": "Oaza",
                "ru-RU": "Оазис",
                "zh-CN": "绿洲城",
                "zh-TW": "綠洲城"
            },
            {
                "opy": "Map.OASIS_CITY_CENTER",
                "en-US": "Oasis City Center",
                "guid": "000000005905",
                "de-DE": "Oasis – Stadtzentrum",
                "es-ES": "Centro urbano de Oasis",
                "es-MX": "Centro de la ciudad de Oasis",
                "fr-FR": "Oasis - Centre-ville",
                "it-IT": "Oasi - Centro Città",
                "ja-JP": "OASIS CITY CENTER",
                "ko-KR": "오아시스 도심",
                "pl-PL": "Oaza: Centrum miasta",
                "pt-BR": "Centro da cidade de Oásis",
                "ru-RU": "Оазис: центр города",
                "zh-CN": "绿洲城中心",
                "zh-TW": "綠洲城市都心"
            },
            {
                "opy": "Map.OASIS_GARDENS",
                "en-US": "Oasis Gardens",
                "guid": "000000005931",
                "de-DE": "Oasis – Gärten",
                "es-ES": "Jardines de Oasis",
                "es-MX": "Jardines de Oasis",
                "fr-FR": "Oasis - Jardins",
                "it-IT": "Oasi - Giardini",
                "ja-JP": "OASIS GARDENS",
                "ko-KR": "오아시스 정원",
                "pl-PL": "Oaza: Ogrody",
                "pt-BR": "Jardins de Oásis",
                "ru-RU": "Оазис: сады",
                "zh-CN": "绿洲城花园",
                "zh-TW": "綠洲城公園"
            },
            {
                "opy": "Map.OASIS_UNIVERSITY",
                "en-US": "Oasis University",
                "guid": "00000000593F",
                "de-DE": "Oasis – Universität",
                "es-ES": "Universidad de Oasis",
                "es-MX": "Universidad de Oasis",
                "fr-FR": "Oasis - Université",
                "it-IT": "Oasi - Università",
                "ja-JP": "OASIS UNIVERSITY",
                "ko-KR": "오아시스 대학",
                "pl-PL": "Oaza: Uniwersytet",
                "pt-BR": "Universidade de Oásis",
                "ru-RU": "Оазис: университет",
                "zh-CN": "绿洲城大学",
                "zh-TW": "綠洲城大學"
            },
            {
                "guid": "00000000831E",
                "opy": "Map.PARIS",
                "en-US": "Paris",
                "es-MX": "París",
                "it-IT": "Parigi",
                "ja-JP": "PARIS",
                "ko-KR": "파리",
                "pl-PL": "Paryż",
                "ru-RU": "Париж",
                "zh-CN": "巴黎",
                "zh-TW": "巴黎"
            },
            {
                "opy": "Map.PETRA",
                "en-US": "Petra",
                "guid": "0000000081CB",
                "ja-JP": "PETRA",
                "ko-KR": "페트라",
                "ru-RU": "Петра",
                "zh-CN": "佩特拉",
                "zh-TW": "佩特拉"
            },
            {
                "guid": "000000002BA1",
                "opy": "Map.PRACTICE_RANGE",
                "en-US": "Practice Range",
                "de-DE": "Trainingsbereich",
                "es-ES": "Práctica de combate",
                "es-MX": "Campo de pruebas",
                "fr-FR": "Champ de tir",
                "it-IT": "Zona d'addestramento",
                "ja-JP": "練習場",
                "ko-KR": "훈련장",
                "pl-PL": "Obszar treningowy",
                "pt-BR": "Campo de Treinamento",
                "ru-RU": "УЧЕБНЫЙ ПОЛИГОН",
                "zh-CN": "训练靶场",
                "zh-TW": "訓練中心"
            },
            {
                "guid": "000000006906",
                "opy": "Map.RIALTO",
                "en-US": "Rialto",
                "ja-JP": "RIALTO",
                "ko-KR": "리알토",
                "ru-RU": "Риальто",
                "zh-CN": "里阿尔托",
                "zh-TW": "里亞爾托"
            },
            {
                "guid": "0000000011D3",
                "opy": "Map.ROUTE_66",
                "en-US": "Route 66",
                "es-ES": "Ruta 66",
                "es-MX": "Ruta 66",
                "it-IT": "ROUTE 66",
                "ja-JP": "ROUTE 66",
                "ko-KR": "66번 국도",
                "pl-PL": "Droga 66",
                "pt-BR": "Rota 66",
                "ru-RU": "Шоссе 66",
                "zh-CN": "66号公路",
                "zh-TW": "66號公路"
            },
            {
                "opy": "Map.SYDNEY_HARBOUR_ARENA",
                "en-US": "Sydney Harbour Arena",
                "guid": "0000000063D5",
                "es-MX": "Arena Sydney Harbour",
                "fr-FR": "Harbour Arena de Sydney",
                "ja-JP": "SYDNEY HARBOUR ARENA",
                "ko-KR": "시드니 하버 아레나",
                "pl-PL": "Sydney Harbour Park",
                "pt-BR": "Arena Sydney Harbour",
                "ru-RU": "«Арена Сидней-Харбор»",
                "zh-CN": "悉尼海港竞技场",
                "zh-TW": "雪梨海港運動公園"
            },
            {
                "opy": "Map.TEMPLE_OF_ANUBIS",
                "en-US": "Temple of Anubis",
                "guid": "00000000012E",
                "de-DE": "Tempel des Anubis",
                "es-ES": "Templo de Anubis",
                "es-MX": "Templo de Anubis",
                "fr-FR": "Temple d’Anubis",
                "it-IT": "Tempio di Anubi",
                "ja-JP": "TEMPLE OF ANUBIS",
                "ko-KR": "아누비스 신전",
                "pl-PL": "Świątynia Anubisa",
                "pt-BR": "Templo de Anúbis",
                "ru-RU": "Храм Анубиса",
                "zh-CN": "阿努比斯神殿",
                "zh-TW": "阿努比斯神廟"
            },
            {
                "opy": "Map.VOLSKAYA",
                "en-US": "Volskaya Industries",
                "guid": "0000000002EB",
                "es-ES": "Industrias Volskaya",
                "es-MX": "Industrias Volskaya",
                "fr-FR": "Usine Volskaya",
                "it-IT": "Industrie Volskaya",
                "ja-JP": "VOLSKAYA INDUSTRIES",
                "ko-KR": "볼스카야 인더스트리",
                "pl-PL": "Zakłady Volskaya Industries",
                "pt-BR": "Indústrias Volskaya",
                "ru-RU": "КБ Вольской",
                "zh-CN": "沃斯卡娅工业区",
                "zh-TW": "伏斯凱亞工業"
            },
            {
                "opy": "Map.WATCHPOINT_GIBRALTAR",
                "en-US": "Watchpoint: Gibraltar",
                "guid": "0000000002E9",
                "es-ES": "Observatorio: Gibraltar",
                "es-MX": "Observatorio: Gibraltar",
                "fr-FR": "Observatoire : Gibraltar",
                "it-IT": "Osservatorio: Gibilterra",
                "ja-JP": "WATCHPOINT: GIBRALTAR",
                "ko-KR": "감시 기지: 지브롤터",
                "pl-PL": "Posterunek: Gibraltar",
                "pt-BR": "Observatório: Gibraltar",
                "ru-RU": "Пост наблюдения: Гибралтар",
                "zh-CN": "监测站：直布罗陀",
                "zh-TW": "捍衛者基地：直布羅陀"
            }
        ]
    },
    "GAMEMODE CONSTANT": {
        "opy": "Gamemode",
        "values": [
            {
                "guid": "00000000CD59",
                "opy": "Gamemode.ASSAULT",
                "en-US": "Assault",
                "de-DE": "Angriff",
                "es-ES": "Asalto",
                "es-MX": "Asalto",
                "fr-FR": "Attaque",
                "it-IT": "Conquista",
                "ja-JP": "アサルト",
                "ko-KR": "점령",
                "pl-PL": "Szturm",
                "pt-BR": "Ataque",
                "ru-RU": "Захват точек",
                "zh-CN": "攻防作战",
                "zh-TW": "佔領"
            },
            {
                "guid": "000000005A56",
                "opy": "Gamemode.CTF",
                "en-US": "Capture The Flag",
                "de-DE": "Flaggeneroberung",
                "es-ES": "Captura la bandera",
                "es-MX": "Captura la bandera",
                "fr-FR": "Capture du drapeau",
                "it-IT": "Cattura la Bandiera",
                "ja-JP": "キャプチャー・ザ・フラッグ",
                "ko-KR": "깃발 뺏기",
                "pl-PL": "Zdobywanie flagi",
                "pt-BR": "Capture a Bandeira",
                "ru-RU": "Захват флага",
                "zh-CN": "勇夺锦旗",
                "zh-TW": "搶旗"
            },
            {
                "guid": "00000000CD5B",
                "opy": "Gamemode.CONTROL",
                "en-US": "Control",
                "de-DE": "Kontrolle",
                "fr-FR": "Contrôle",
                "it-IT": "Controllo",
                "ja-JP": "コントロール",
                "ko-KR": "쟁탈",
                "pl-PL": "Kontrola",
                "pt-BR": "Controle",
                "ru-RU": "Контроль",
                "zh-CN": "占领要点",
                "zh-TW": "控制"
            },
            {
                "guid": "000000006853",
                "opy": "Gamemode.FFA",
                "en-US": "Deathmatch",
                "es-ES": "Combate a muerte",
                "es-MX": "Combate a muerte",
                "fr-FR": "Combat à mort",
                "ja-JP": "デスマッチ",
                "ko-KR": "데스매치",
                "pt-BR": "Combate até a Morte",
                "ru-RU": "Схватка",
                "zh-CN": "死斗",
                "zh-TW": "死鬥"
            },
            {
                "guid": "000000005887",
                "opy": "Gamemode.ELIMINATION",
                "en-US": "Elimination",
                "de-DE": "Eliminierung",
                "es-ES": "Eliminación",
                "es-MX": "Eliminación",
                "fr-FR": "Élimination",
                "it-IT": "Eliminazione",
                "ja-JP": "エリミネーション",
                "ko-KR": "섬멸전",
                "pl-PL": "Eliminacja",
                "pt-BR": "Eliminação",
                "ru-RU": "Ликвидация",
                "zh-CN": "决斗先锋",
                "zh-TW": "鬥陣對決"
            },
            {
                "guid": "00000000CD5C",
                "opy": "Gamemode.ESCORT",
                "en-US": "Escort",
                "de-DE": "Eskorte",
                "es-ES": "Escolta",
                "es-MX": "Escolta",
                "fr-FR": "Escorte",
                "it-IT": "Trasporto",
                "ja-JP": "エスコート",
                "ko-KR": "호위",
                "pl-PL": "Eskorta",
                "pt-BR": "Escolta",
                "ru-RU": "Сопровождение",
                "zh-CN": "运载目标",
                "zh-TW": "護送"
            },
            {
                "guid": "00000000CD5A",
                "opy": "Gamemode.HYBRID",
                "en-US": "Hybrid",
                "es-ES": "Híbrido",
                "es-MX": "Híbrido",
                "fr-FR": "Hybride",
                "it-IT": "Ibrida",
                "ja-JP": "ハイブリッド",
                "ko-KR": "혼합",
                "pl-PL": "Hybryda",
                "pt-BR": "Híbrido",
                "ru-RU": "Гибридный режим",
                "zh-CN": "攻击/护送",
                "zh-TW": "混合"
            },
            {
                "guid": "000000004AF4",
                "opy": "Gamemode.JUNKENSTEIN",
                "en-US": "Junkenstein's Revenge",
                "de-DE": "Junkensteins Rache",
                "es-ES": "La venganza de Junkenstein",
                "es-MX": "La venganza de Junkenstein",
                "fr-FR": "La vengeance du Dr Schakalstein",
                "it-IT": "La vendetta di Junkenstein",
                "ja-JP": "ジャンケン<br>シュタインの<br>復讐",
                "ko-KR": "정켄슈타인의 복수",
                "pl-PL": "Zemsta dr. Złomensteina",
                "pt-BR": "A vingança de Junkenstein",
                "ru-RU": "Месть Крысенштейна",
                "zh-CN": "怪鼠复仇",
                "zh-TW": "鼠肯斯坦復仇記"
            },
            {
                "guid": "000000004989",
                "opy": "Gamemode.LUCIOBALL",
                "en-US": "Lúcioball",
                "es-ES": "Lúciobol",
                "es-MX": "Lúciobol",
                "ja-JP": "ルシオボール",
                "ko-KR": "루시우볼",
                "pl-PL": "Futbolúcio",
                "pt-BR": "Luciobol",
                "ru-RU": "Лусиобол",
                "zh-CN": "动感斗球",
                "zh-TW": "路西歐競球"
            },
            {
                "guid": "00000000525A",
                "opy": "Gamemode.MEIS_SNOWBALL_OFFENSIVE",
                "en-US": "Mei's Snowball Offensive",
                "de-DE": "Meis Schneeballschlacht",
                "es-ES": "Mei: Operación Bola de Nieve",
                "es-MX": "Mei: Operación Bola de Nieve",
                "fr-FR": "Opération Boule de neige",
                "it-IT": "Mei: Operazione Palle di Neve",
                "ja-JP": "メイの雪合戦",
                "ko-KR": "메이의 눈싸움 대작전",
                "pl-PL": "Śnieżkowa Ofensywa Mei",
                "pt-BR": "Ofensiva de Bola de Neve da Mei",
                "ru-RU": "Операция «Метелица»",
                "zh-CN": "雪球攻势",
                "zh-TW": "小美的雪球大作戰"
            },
            {
                "guid": "0000000040BE",
                "opy": "Gamemode.PRACTICE_RANGE",
                "en-US": "Practice Range",
                "de-DE": "Trainingsbereich",
                "es-ES": "Práctica de combate",
                "es-MX": "Campo de pruebas",
                "fr-FR": "Champ de tir",
                "it-IT": "Zona d'addestramento",
                "ja-JP": "練習場",
                "ko-KR": "훈련장",
                "pl-PL": "Obszar treningowy",
                "pt-BR": "Campo de Treinamento",
                "ru-RU": "Учебный полигон",
                "zh-CN": "训练靶场",
                "zh-TW": "訓練中心"
            },
            {
                "guid": "000000005A61",
                "opy": "Gamemode.SKIRMISH",
                "en-US": "Skirmish",
                "de-DE": "Übungsgefecht",
                "es-ES": "Escaramuza",
                "es-MX": "Escaramuza",
                "fr-FR": "Échauffement",
                "it-IT": "Schermaglia",
                "ja-JP": "スカーミッシュ",
                "ko-KR": "연습 전투",
                "pl-PL": "Potyczka",
                "pt-BR": "Confronto",
                "ru-RU": "Разминка",
                "zh-CN": "突击模式",
                "zh-TW": "衝突戰"
            },
            {
                "guid": "000000006854",
                "opy": "Gamemode.TDM",
                "en-US": "Team Deathmatch",
                "de-DE": "Team-Deathmatch",
                "es-ES": "Combate a muerte por equipos",
                "es-MX": "Combate a muerte por equipos",
                "fr-FR": "Combat à mort par équipe",
                "it-IT": "Deathmatch a squadre",
                "ja-JP": "チーム・デスマッチ",
                "ko-KR": "팀 데스매치",
                "pl-PL": "Drużynowy Deathmatch",
                "pt-BR": "Combate até a Morte em Equipe",
                "ru-RU": "Командная схватка",
                "zh-CN": "团队死斗",
                "zh-TW": "團隊死鬥"
            },
            {
                "guid": "000000006DF1",
                "opy": "Gamemode.YETI_HUNTER",
                "en-US": "Yeti Hunter",
                "de-DE": "Yetijagd",
                "es-ES": "Caza del yeti",
                "es-MX": "Cazadora de yetis",
                "fr-FR": "Chasse au yéti",
                "it-IT": "Caccia allo Yeti",
                "ja-JP": "イエティ・ハント",
                "ko-KR": "예티 사냥꾼",
                "pl-PL": "Polowanie na Yeti",
                "pt-BR": "Caça ao Yeti",
                "ru-RU": "Охота на йети",
                "zh-CN": "雪域狩猎",
                "zh-TW": "雪怪大作戰"
            }
        ]
    }
}
//end-json



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

//List of workshop "keywords" (conditions, values, actions).

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

var ruleKw = 
//begin-json
[
    {
        "opy": "@Rule",
        "en-US": "rule",
        "guid": "00000000C7B4",
        "de-DE": "regel",
        "es-MX": "regla",
        "fr-FR": "règle",
        "it-IT": "regola",
        "ja-JP": "ルール",
        "pl-PL": "reguła",
        "pt-BR": "regra",
        "zh-CN": "规则",
        "zh-TW": "規則"
    },
    {
        "opy": "@Event",
        "en-US": "event",
        "guid": "00000000C7B5",
        "es-MX": "evento",
        "fr-FR": "évènement",
        "it-IT": "evento",
        "ja-JP": "イベント",
        "pl-PL": "zdarzenie",
        "pt-BR": "evento",
        "zh-CN": "事件",
        "zh-TW": "事件"
    },
    {
        "opy": "_conditions",
        "en-US": "conditions",
        "guid": "00000000C7B6",
        "de-DE": "bedingungen",
        "es-MX": "condiciones",
        "it-IT": "condizioni",
        "ja-JP": "条件",
        "ko-KR": "condition",
        "pl-PL": "warunki",
        "pt-BR": "condições",
        "zh-CN": "条件",
        "zh-TW": "條件"
    },
    {
        "opy": "_actions",
        "en-US": "actions",
        "guid": "00000000C7B7",
        "de-DE": "aktionen",
        "es-MX": "acciones",
        "it-IT": "azioni",
        "ja-JP": "アクション",
        "ko-KR": "action",
        "pl-PL": "działania",
        "pt-BR": "ações",
        "zh-CN": "动作",
        "zh-TW": "動作"
    },
    {
        "opy": "_disabled",
        "en-US": "disabled",
        "guid": "00000000C7B8",
        "de-DE": "deaktiviert",
        "es-MX": "deshabilitado",
        "fr-FR": "désactivé",
        "it-IT": "disattivato",
        "ja-JP": "無効",
        "pl-PL": "wył.",
        "pt-BR": "desabilitado",
        "zh-CN": "禁用",
        "zh-TW": "停用"
    },
    {
        "opy": "_variables",
        "en-US": "variables",
        "guid": "00000000EB73",
        "de-DE": "Variablen",
        "it-IT": "variabili",
        "ja-JP": "変数",
        "pl-PL": "zmienne",
        "pt-BR": "variáveis",
        "zh-CN": "变量",
        "zh-TW": "變數"
    },
    {
        "opy": "_global",
        "en-US": "global",
        "guid": "00000000EB74",
        "fr-FR": "globale",
        "it-IT": "globale",
        "ja-JP": "グローバル",
        "pl-PL": "globalne",
        "zh-CN": "全局",
        "zh-TW": "全域"
    },
    {
        "opy": "_player",
        "en-US": "player",
        "guid": "00000000EB75",
        "es-ES": "jugador",
        "es-MX": "jugador",
        "fr-FR": "de joueur",
        "it-IT": "giocatore",
        "ja-JP": "プレイヤー",
        "pl-PL": "gracza",
        "pt-BR": "jogador",
        "zh-CN": "玩家",
        "zh-TW": "玩家"
    }
]
//end-json

//Event keywords
var eventKw = 
//begin-json
[
    {
        "opy": "global",
        "en-US": "Ongoing - Global",
        "guid": "000000007895",
        "es-MX": "En curso - Global",
        "fr-FR": "Toute la partie - Tout le monde",
        "ja-JP": "進行中 - グローバル",
        "pt-BR": "Em andamento - Global",
        "zh-CN": "持续 - 全局"
    },
    {
        "opy": "eachPlayer",
        "en-US": "Ongoing - Each Player",
        "guid": "000000007897",
        "es-MX": "En curso - Cada jugador",
        "fr-FR": "Toute la partie - Chaque joueur",
        "ja-JP": "進行中 - 各プレイヤー",
        "pt-BR": "Em andamento - Cada Jogador",
        "zh-CN": "持续 - 每名玩家"
    },
    {
        "opy": "playerTookDamage",
        "en-US": "Player Took Damage",
        "guid": "00000000B313",
        "es-MX": "El jugador recibió daño",
        "fr-FR": "Un joueur subit des dégâts",
        "ja-JP": "プレイヤーがダメージを受けた",
        "pt-BR": "Jogador Recebeu Dano",
        "ru-RU": "Player took damage",
        "zh-CN": "玩家受到伤害"
    },
    {
        "opy": "playerDealtDamage",
        "en-US": "Player Dealt Damage",
        "guid": "00000000B52D",
        "es-MX": "El jugador infligió daño",
        "fr-FR": "Un joueur inflige des dégâts",
        "ja-JP": "プレイヤーがダメージを与えた",
        "pt-BR": "Jogador Causou Dano",
        "ru-RU": "Player dealt damage",
        "zh-CN": "玩家造成伤害"
    },
    {
        "opy": "playerDealtFinalBlow",
        "en-US": "Player Dealt Final Blow",
        "guid": "0000000078F8",
        "es-MX": "El jugador asestó un golpe de gracia",
        "fr-FR": "Un joueur inflige un coup de grâce",
        "ja-JP": "ファイナル・ブロウを獲得",
        "pt-BR": "Jogador Desferiu Golpe Final",
        "ru-RU": "Player dealt final blow",
        "zh-CN": "玩家造成最后一击"
    },
    {
        "opy": "playerDied",
        "en-US": "Player Died",
        "guid": "00000000B314",
        "es-MX": "El jugador murió",
        "fr-FR": "Un joueur meurt",
        "ja-JP": "プレイヤーが倒れた",
        "pt-BR": "Jogador morreu",
        "zh-CN": "玩家阵亡"
    },
    {
        "opy": "playerEarnedElimination",
        "en-US": "Player Earned Elimination",
        "guid": "0000000078F7",
        "es-MX": "El jugador obtuvo una eliminación",
        "fr-FR": "Un joueur obtient une élimination",
        "ja-JP": "プレイヤーがキルを獲得",
        "pt-BR": "Jogador Conseguiu Eliminação",
        "ru-RU": "Player earned elimination",
        "zh-CN": "玩家参与消灭"
    },
    {
        "opy": "playerDealtHealing",
        "en-US": "Player Dealt Healing",
        "guid": "00000000CC16",
        "es-MX": "El jugador realizó una sanación",
        "fr-FR": "Un joueur a prodigué des soins",
        "ja-JP": "プレイヤーがヒールを与えた",
        "pl-PL": "Gracz wykonał leczenie",
        "pt-BR": "Jogador Realizou Cura",
        "zh-CN": "玩家造成治疗"
    },
    {
        "opy": "playerReceivedHealing",
        "en-US": "Player Received Healing",
        "guid": "00000000CC17",
        "es-MX": "El jugador recibió una sanación",
        "fr-FR": "Un joueur a reçu des soins",
        "ja-JP": "プレイヤーがヒールを受けた",
        "pl-PL": "Gracz otrzymał leczenie",
        "pt-BR": "Jogador Recebeu Cura",
        "zh-CN": "玩家受到治疗"
    },
    {
        "opy": "playerJoined",
        "en-US": "Player Joined Match",
        "guid": "00000000CC18",
        "es-MX": "El jugador se unió a la partida",
        "fr-FR": "Un joueur a rejoint la partie",
        "ja-JP": "プレイヤーがマッチに参加",
        "pl-PL": "Gracz dołączył do meczu",
        "pt-BR": "Jogador Entrou na Partida",
        "zh-CN": "玩家加入比赛"
    },
    {
        "opy": "playerLeft",
        "en-US": "Player Left Match",
        "guid": "00000000CC19",
        "es-MX": "El jugador abandonó la partida",
        "fr-FR": "Un joueur a quitté la partie",
        "ja-JP": "プレイヤーがマッチから離脱",
        "pl-PL": "Gracz opuścił mecz",
        "pt-BR": "Jogador Saiu da Partida",
        "zh-CN": "玩家离开比赛"
    }
]
//end-json

var eventTeamKw = 
//begin-json
[
    {
        "guid": "000000007804",
        "opy": "all",
        "en-US": "All",
        "es-ES": "Todos",
        "es-MX": "Todos",
        "fr-FR": "Les deux",
        "it-IT": "Tutti",
        "ja-JP": "すべて",
        "pl-PL": "Wszystkie",
        "pt-BR": "Todas",
        "zh-CN": "双方"
    },
    {
        "guid": "000000004672",
        "opy": "1",
        "en-US": "Team 1",
        "es-ES": "Equipo 1",
        "es-MX": "Equipo 1",
        "fr-FR": "Équipe 1",
        "it-IT": "Squadra 1",
        "ja-JP": "チーム1",
        "ko-KR": "1팀",
        "pl-PL": "Drużyna 1",
        "pt-BR": "Equipe 1",
        "ru-RU": "Команда 1",
        "zh-CN": "队伍1",
        "zh-TW": "隊伍1"
    },
    {
        "guid": "000000004673",
        "opy": "2",
        "en-US": "Team 2",
        "es-ES": "Equipo 2",
        "es-MX": "Equipo 2",
        "fr-FR": "Équipe 2",
        "it-IT": "Squadra 2",
        "ja-JP": "チーム2",
        "ko-KR": "2팀",
        "pl-PL": "Drużyna 2",
        "pt-BR": "Equipe 2",
        "ru-RU": "Команда 2",
        "zh-CN": "队伍2",
        "zh-TW": "隊伍2"
    }
]
//end-json

var eventSlotKw = Array(12).fill().map(x => (

//begin-json
[
    {
        "guid": "00000000C231",
        "en-US": "Slot %1$s",
        "es-ES": "Ranura %1$s",
        "es-MX": "Posición %1$s",
        "fr-FR": "Emplacement %1$s",
        "ja-JP": "スロット%1$s",
        "pl-PL": "Miejsce %1$s",
        "pt-BR": "Espaço %1$s",
        "ru-RU": "Ячейка %1$s",
        "zh-CN": "位置 %1$s"
    }
]
//end-json
[0]));

eventSlotKw.forEach((element, index) => {
    element.opy = ""+index;
    for (var key of Object.keys(element)) {
        if (key.includes("-")) {
            element[key] = element[key].replace("%1$s", index);
        }
    }
});

var eventPlayerKw = 
//begin-json
[
    {
        "guid": "0000000077FE",
        "opy": "all",
        "en-US": "All",
        "es-ES": "Todos",
        "es-MX": "Todos",
        "fr-FR": "Tout",
        "it-IT": "Tutti",
        "ja-JP": "すべて",
        "pl-PL": "Wszystkie",
        "pt-BR": "Tudo",
        "ru-RU": "Все",
        "zh-CN": "全部"
    }
]
//end-json
.concat(eventSlotKw);

var constantKw = [];
for (var constant of Object.keys(constantValues)) {
	constantKw = constantKw.concat(constantValues[constant].values);
}

//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw);

var funcKw = actionKw.concat(valueFuncKw);







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

var obfuscationMappings = {};
for (var char of ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~') {
	obfuscationMappings[char] = String.fromCodePoint(char.charCodeAt(0)+0xE0000);
}

var obfuscatedVarNames = shuffleArray(Array(4096).fill().map((e,i)=>i).map(x => x.toString(2).padStart(12, "0").replace(/0/g, "I").replace(/1/g, "l"))).slice(0,128);

function addEmptyRules(rules) {
	var nbEmptyRules = (enableNoEdit ? 2500 : 100);
	var nbTotalRules = nbEmptyRules + rules.length;
	var emptyRule = tows("@Rule", ruleKw)+'(""){'+tows("@Event", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	var result = "";
	result += tows("@Rule", ruleKw)+'("This program has been obfuscated by OverPy (https://github.com/Zezombye/OverPy)."){'+tows("@Event", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	result += tows("@Rule", ruleKw)+'("Please respect its author\'s wishes and do not edit it. Thanks!"){'+tows("@Event", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	var putEmptyRuleArray = shuffleArray(Array(nbEmptyRules).fill(true).concat(Array(rules.length).fill(false)));
	var ruleIndex = 0;
	for (var i = 0; i < nbTotalRules; i++) {
		if (putEmptyRuleArray[i]) {
			result += emptyRule;
		} else {
			result += rules[ruleIndex];
			ruleIndex++;
		}
	}
	return result;

}
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

var globalVariables;
var playerVariables;
var currentLanguage;

//Compilation variables - are reset at each compilation.

//The absolute path of the folder containing the main file. Used for relative paths.
var rootPath;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
var currentArrayElementNames;

//Dictionary used for for loops.
//Should be empty at the beginning and end of each rule. (for compilation)
var forLoopVariables;

//Timer for for loop variables; when it is reached, delete the corresponding variable.
var forLoopTimers;

//The keywords "true" and "false", in the workshop.
//Used to avoid translating back when comparing to true/false.
//Generated at each compilation.
var wsTrue ;
var wsFalse;
var wsNull;
var wsNot;
var wsRandInt;
var wsRandReal;
var wsRandShuffle;
var wsRandChoice;

//Set at each rule, to check whether it is legal to use "eventPlayer" and related.
var currentRuleEvent;

//If set to true, sets all rule titles to empty.
var obfuscateRules;

//If set to true, puts 3000 empty rules, effectively making it impossible to open the preset (you get kicked by the server).
var enableNoEdit;

//Contains all macros.
var macros;

var encounteredWarnings;
var suppressedWarnings;
var globalSuppressedWarnings;

//A list of imported files, to prevent import loops.
var importedFiles;

var wasWaitEncountered;

//Decompilation variables

//The stack of the files (macros count as "files").
var fileStack;

//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule.
var decompilerGotos;

//Global variable used for the number of tabs.
//Is reset at each rule.
var nbTabs;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule.
var lastLoop;

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition.
var operatorPrecedenceStack;

//Whether the decompilation at this time is under a normal "for" loop.
var isInNormalForLoop;


function resetGlobalVariables() {
	rootPath = "";
	currentArrayElementNames = [];
	forLoopVariables = {};
	forLoopTimers = [];
	wsTrue = tows("true", valueFuncKw);
	wsFalse = tows("false", valueFuncKw);
	wsNull = tows("null", valueFuncKw);
	wsNot = tows("not", valueFuncKw);
	wsRandInt = tows("random.randint", valueFuncKw);
	wsRandReal = tows("random.uniform", valueFuncKw);
	wsRandShuffle = tows("random.shuffle", valueFuncKw);
	wsRandChoice = tows("random.choice", valueFuncKw);
	currentRuleEvent = "";
	obfuscateRules = false;
	macros = [];
	fileStack = [];
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	operatorPrecedenceStack = [];
	isInNormalForLoop = false;
	globalVariables = [];
	playerVariables = [];
	encounteredWarnings = [];
	suppressedWarnings = [];
	globalSuppressedWarnings = [];
	currentLanguage = "en-US";
	wasWaitEncountered = false;
	importedFiles = [];
	enableNoEdit = false;
}

//Other constants

//Operator precedence, from lowest to highest.
const operatorPrecedence = {
	"or":1,
	"and":2,
	"not":3,
	"==":4,
	"!=":4,
	"<=":4,
	">=":4,
	">":4,
	"<":4,
	"+":5,
	"-":5,
	"*":6,
	"/":6,
	
	//Although in Python the modulo operator has the same precedence as * and /,
	//it must have a higher precedence because (a*b)%c is not the same as a*(b%c).
	"%":7,
	"**":8,
};

//Python operators, from lowest to highest precedence.
const pyOperators = [
	"=",
	"+=",
	"-=",
	"*=",
	"/=",
	"%=",
	"**=",
	"min=",
	"max=",
	"++",
	"--",
	"if",
	"or",
	"and",
	"not",
	"in",
	"==",
	"!=",
	"<=",
	">=",
	">",
	"<",
	"+",
	"-",
	"*",
	"/",
	"%",
	"**",
];

//Text that gets inserted on top of all js scripts.
const builtInJsFunctions = `
function vect(x,y,z) {
    return ({
        x:x,
        y:y,
        z:z,
        toString: function() {
            return "vect("+this.x+","+this.y+","+this.z+")";
        }
    });
}`;

const builtInJsFunctionsNbLines = builtInJsFunctions.split("\n").length-1;

const defaultVarNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX'];

//Names that cannot be used for variables.
const reservedNames = ["if", "else", "elif", "do", "while", "for", "return", "continue", "false", "true", "null", "goto", "lambda", "del", "import", "break", "and", "or", "not", "in", "eventPlayer", "attacker", "victim", "eventDamage", "eventHealing", "eventWasCriticalHit", "healee", "healer", "hostPlayer", "loc", "RULE_CONDITION", "x", "y", "z", "math", "pi", "e", "random", "Vector", "switch", "case", "default"].concat( Object.keys(constantValues).map(x => constantValues[x].opy));

//Characters that are visually the same as normal ASCII characters (when uppercased), but make the string appear in "big letters" (the i18n font).
//For now, only greek letters and the "line separator" character.
//Let me know if you find any other such characters.
const bigLettersMappings = {
	a: "Α",
	A: "Α",
	b: "Β",
	B: "Β",
	e: "Ε",
	E: "Ε",
	h: "Η",
	H: "Η",
	i: "Ι",
	I: "Ι",
	k: "Κ",
	K: "Κ",
	m: "Μ",
	M: "Μ",
	n: "Ν",
	N: "Ν",
	o: "Ο",
	O: "Ο",
	p: "Ρ",
	P: "Ρ",
	t: "Τ",
	T: "Τ",
	x: "Χ",
	X: "Χ",
	y: "Υ",
	Y: "Υ",
	z: "Ζ",
	Z: "Ζ",
	" ": "\u2028", //line separator
}

//Fullwidth characters
var fullwidthMappings = {
	" ": "　",
	"¥": "￥",
	"₩": "￦",
	"¢": "￠",
	"£": "￡",
	"¯": "￣",
	"¬": "￢",
	"¦": "￤",
}
for (var char of '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~') {
	fullwidthMappings[char] = String.fromCodePoint(char.charCodeAt(0)+0xFEE0);
}
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

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getUtf8Length(s){
	//console.log("getting utf8 length of '"+s+"'");
    var b = 0, i = 0, c;
    for(;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
    return b;
}

function translateVarToPy(content, isGlobalVariable) {
	content = content.trim();
	var varArray = isGlobalVariable ? globalVariables : playerVariables;
	if (varArray.map(x => x.name).includes(content)) {
		//modify the name
		if (content.startsWith("_") || reservedNames.includes(content)) {
			content = "_"+content;
		}
		if (!/[A-Za-z_]\w*/.test(content)) {
			error("Unauthorized name for variable: '"+content+"'");
		}
		return content;
	} else if (defaultVarNames.includes(content)) {
		//Add the variable as it doesn't already exist (else it would've been caught by the first if)
		addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content));
		return content;
	} else {
		error("Unknown variable '"+content+"'");
	}
}

function translateVarToWs(content, isGlobalVariable) {

	var varArray = isGlobalVariable ? globalVariables : playerVariables;
	for (var i = 0; i < varArray.length; i++) {
		if (varArray[i].name === content) {
			if (obfuscateRules) {
				return obfuscatedVarNames[varArray[i].index]
			} else {
				return content;
			}
		}
	}
	if (defaultVarNames.includes(content)) {
		//Add the variable as it doesn't already exist (else it would've been caught by the for)
		//However, only do this if it is a default variable name
		addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content));
		if (obfuscateRules) {
			return obfuscatedVarNames[defaultVarNames.indexOf(content)];
		} else {
			return content;
		}
	}
	error("Undeclared "+(isGlobalVariable ? "global" : "player")+" variable '"+content+"'");
}

//Adds a variable to the global/player variable arrays.
function addVariable(content, isGlobalVariable, index) {
	if (index === undefined) {
		error("Index is undefined");
	}
	if (isGlobalVariable) {
		globalVariables.push({
			"name": content,
			"index": index,
		});
	} else {
		playerVariables.push({
			"name": content,
			"index": index,
		});
	}
}

function boolToWs(x) {
	if (x === true) {
		return wsTrue;
	} else if (x === false) {
		return wsFalse;
	} else {
		error("Invalid boolean "+x);
	}
}

function containsRandom(x) {
	return x.includes(wsRandInt) || x.includes(wsRandReal) || x.includes(wsRandShuffle) || x.includes(wsRandChoice);
}

function isWsTrue(x) {
	if (x === wsTrue) {
		return true;
	}
	if (isNumber(x) && parseFloat(x) !== 0) {
		return true;
	}
	return false;
}

function isWsFalse(x) {
	return x === wsFalse || x === wsNull || x === "0";
}

function isWs1(x) {
	return x === "1" || x === wsTrue;
}

function isWs0(x) {
	return x === "0" || x === wsFalse || x === wsNull;
}

//As the workshop does not accept numbers that are too long (such as 0.22585181552505867), trim all numbers to 15 decimal places.
function trimNb(x) {
	var result = ""+x;
	if (result.indexOf('.') >= 0) {
		result = result.substring(0,result.indexOf('.')+16);
	}
	return result;
}

function isNumber(x) {
	if (x.trim() === "") {
		return false;
	}
	return !isNaN(x);
}

function getFilenameFromPath(path) {
	return path.split('\\').pop().split('/').pop();
}

function getFilePath(pathStr) {
	pathStr = pathStr.trim();
	debug("path str = "+pathStr);
	if (!(pathStr.startsWith("'") && pathStr.endsWith("'")) && !(pathStr.startsWith('"') && pathStr.endsWith('"'))) {
		error("Expected a string but found '"+pathStr+"'");
	}
	pathStr = pathStr.substring(1, pathStr.length-1);
	//parse backslashes
	pathStr = pathStr.replace(/\\("|')/g, "$1");
	pathStr = pathStr.replace(/\\\\/g, "\\");

	//convert backslashes to normal slashes
	pathStr = pathStr.replace(/\\/g, "/");
	debug("Path str is now '"+pathStr+"'");

	//Determine if the path is absolute or relative
	if (pathStr.startsWith("/") || /^[A-Za-z]:/.test(pathStr)) {
		//absolute path
		return pathStr;
	} else {
		//relative path
		return rootPath+pathStr;
	}
}

function getFileContent(path) {
	
	var fs;
	try {
		fs = require("fs");
		//glob = require("glob");
	} catch (e) {
		error("Cannot use multiple files in browsers");
	}
	if (path.endsWith(".opy") && importedFiles.includes(path)) {
		warn("w_already_imported", "The file '"+path+"' was already imported and will not be imported again.");
		return "";
	}
	try {
		/*var matchingFiles = glob.sync(path);
		if (matchingFiles.length === 0) {
			error("The path '"+path+"' did not match any file.");
		}
		var result = "";
		for (matchingFile in matchingFiles) {
			importedFiles.push(matchingFile);
			fileContent = ""+fs.readFileSync(matchingFile);
			if (!fileContent.endsWith("\n")) {
				fileContent += "\n";
			}
			result += fileContent;
		}
		return result;*/
		importedFiles.push(path);
		return ""+fs.readFileSync(path)+"\n";


	} catch (e) {
		error(e);
	}
}

function getFileStackCopy() {
	return fileStack.map(x => Object.assign({}, x));
}

function getConstantKw(type) {
	return constantValues[type].values;
}

//Used for string parsing; splits an array of strings on one or two strings.
//Eg: splitStrTokens(["owo", "uwu", "owo"], "uwu") will return [["owo"], ["owo"]].
function splitStrTokens(tokens, str1, str2) {
	
	var str1Index = -1;
	var str2Index = -1;
	var bracketLevel = 0;
	
	if (str2 !== undefined) {
		debug("Splitting str tokens '"+tokens+"' on '"+str1+"' and '"+str2+"'");
	} else {
		debug("Splitting str tokens '"+tokens+"' on '"+str1+"'");
	}
	
	var i;
	for (i = 0; i < tokens.length; i++) {
		if (tokens[i] === str1 && bracketLevel === 0) {
			str1Index = i;
			break;
		} else if (tokens[i] === "(" || tokens[i] === "¡" || tokens[i] === "¿") {
			bracketLevel++;
		} else if ((tokens[i] === ")" || tokens[i] === "!" || tokens[i] === "?") && bracketLevel > 0) {
			bracketLevel--;
		}
	}
	
	i++;
	
	if (str2 !== undefined) {
		for (; i < tokens.length; i++) {
			if (tokens[i] === str2 && bracketLevel === 0) {
				str2Index = i;
				break;
			} else if (tokens[i] === "(" || tokens[i] === "¡" || tokens[i] === "¿") {
				bracketLevel++;
			} else if ((tokens[i] === ")" || tokens[i] === "!" || tokens[i] === "?") && bracketLevel > 0) {
				bracketLevel--;
			}
		}
	}
	
	//debug("str1Index = "+str1Index+", str2Index = "+str2Index);
	
	if (str1Index === -1) {
		return [tokens];
	} else if (str2Index === -1) {
		return [tokens.slice(0, str1Index), tokens.slice(str1Index+1)]
	} else {
		return [tokens.slice(0, str1Index), tokens.slice(str1Index+1, str2Index), tokens.slice(str2Index+1)]
	}
	
}

//Reverses the comparison operator.
function reverseOperator(content) {
	if (content === "==") return "!=";
	else if (content === '!=') return "==";
	else if (content === '<=') return ">";
	else if (content === '>=') return "<";
	else if (content === '<') return ">=";
	else if (content === '>') return "<=";
	else {
		error("Cannot reverse operator "+content);
	}
}

//Replaces variables A-Z with the provided names (for decompilation).
//Also returns "#define name var" for each name.
function loadVariableNames(names, varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (const [key,value] of Object.entries(names)) {
		var index = alphabet.indexOf(key.toUpperCase());
		if (index < 0) {
			error("Illegal variable "+key);
		} else {
			varKw[index].opy = value;
			result += "#!define "+value+" "+key.toUpperCase()+"\n";
		}
	}
	return result;
}

//Resets variable names to A-Z.
function resetVarNames(varKw) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < alphabet.length; i++) {
		varKw[i].opy = alphabet[i];
	}
}

//Gets the name of a function.
function getName(content) {
	
	if (content === undefined) {
		error("Trying to get name of undefined function");
	}
	
	var bracketPos = getBracketPositions(content);
	
	if (bracketPos.length == 2) {
		var name = content.substring(0, bracketPos[0]);
	} else {
		var name = content;
	}
	
	return name.replace(/\s/g, "");
}

//Returns "player" if the instruction represents an array of players, else the name of the instruction.
//Note: you must only pass the name of the instruction to this function.
function getPlayerVarName(content) {
	if (!isPlayerArrayInstruction(content)) {
		return decompile(content);
	} else {
		return "player";
	}
}

//Checks if the (python) instruction represents only a player.
//Used to differenciate player and player[].
//Note: you must only pass the name to this function.
/*function isSinglePlayerInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a single player instruction");
	
	var playerInstructions = [
		"attacker",
		"getClosestPlayer",
		"eventPlayer",
		"getFarthestPlayer",
		"_firstOf",
		"_lastOf",
		"getFlagCarrier",
		"getPlayerClosestToReticle",
		"_randomValueInArray",
		"victim",
		"_currentArrayElement",
		"isDead",
		"isAlive",
		"isCommunicating",
		"isCommunicatingAny",
		"isCommunicatingAnyEmote",
		"isCommunicatingAnyVoiceline",
		"isCrouching",
		"isUsingAbility1",
		"isUsingAbility2",
		"isHoldingButton",
		"isFiringPrimary",
		"isFiringSecondary",
		"isInAir",
		"isOnGround",
		"isInSpawnRoom",
		"isMoving",
		"isOnObjective",
		"isOnWall",
		"isOnFire",
		"isStanding",
		"isUsingUltimate",
	];
	
	if (playerInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}*/

//Same as isSinglePlayerInstruction, but for player arrays.
//However, note that these functions aren't mutually exclusive;
//if one of them returns false, the other one will not necessarily return true.
//This is because variables can hold a player and a player array, and we can't know which.
function isPlayerArrayInstruction(content) {
	
	content = topy(getName(content), valueKw);
	
	debug("Checking if '"+content+"' is a player array instruction");
	
	var playerArrayInstructions = [
		"getDeadPlayers",
		"getLivingPlayers",
		"getPlayers",
		"getPlayersNotOnObjective",
		"getPlayersOnObjective",
		"getPlayersInViewAngle",
		"getPlayersOnHero",
		"getPlayersInRadius",
	];
	
	if (playerArrayInstructions.indexOf(content) > -1) {
		return true;
	}
	return false;
}

//Returns 4 spaces per tab level.
function tabLevel(nbTabs) {
	var result = "";
	for (var i = 0; i < nbTabs; i++) {
		result += "    ";
	}
	return result;
}


//Translates a keyword to the other language.
function translate(keyword, toWorkshop, keywordArray, options={}) {
	
	if (!toWorkshop) {
		keyword = keyword.toLowerCase();
		if (keywordArray !== stringKw) {
			keyword = keyword.replace(/\s/g, "");
		}
	}
	debug("Translating keyword '"+keyword+"'");
	//debug("language = "+currentLanguage);
	//debug(keywordArray === stringKw);
	
	//Check for current array element
	if (toWorkshop) {
		for (var i = 0; i < currentArrayElementNames.length; i++) {
			if (keyword === currentArrayElementNames[i]) {
				return translate("_currentArrayElement", true, valueFuncKw);
			}
		}
	}

	for (var i = 0; i < keywordArray.length; i++) {
		
		if (toWorkshop) {
			if (keywordArray[i].opy === keyword) {

				//Check number of arguments
				if (options.nbArgs) {
					if (keywordArray[i].args === null && options.nbArgs !== 0 || keywordArray[i].args.length !== options.nbArgs) {
						error("Function '"+keyword+"' takes "+(keywordArray[i].args===null?0:keywordArray[i].args.length)+" arguments, received "+options.nbArgs);
					}
				}

				//Fallback to "en-US" if no entry for this language
				if (currentLanguage in keywordArray[i]) {
					return keywordArray[i][currentLanguage];
				} else {
					return keywordArray[i]["en-US"];
				}
			}
		} else {
			var keywordComparing = keywordArray[i];
			
			if (currentLanguage in keywordArray[i]) {
				keywordComparing = keywordComparing[currentLanguage];
			} else {
				keywordComparing = keywordComparing["en-US"];
			}
			keywordComparing = keywordComparing.toLowerCase();
			if (keywordArray !== stringKw) {
				keywordComparing = keywordComparing.replace(/\s/g, "")
			}
			if (keywordComparing === keyword) {
				return keywordArray[i].opy;
			}
		}
		
	}
	
	//Check for numbers
	if (!isNaN(keyword)) {
		//Convert to int then to string to remove unnecessary 0s.
		keyword = trimNb(Number(keyword).toString());
		return keyword;
	}
	
	error("No match found for keyword '"+keyword+"'");	
}

function topy(keyword, keywordArray, options) {
	return translate(keyword, false, keywordArray, options);
}
function tows(keyword, keywordArray, options) {
	
	//Check if a token was passed, or a string
	if (typeof keyword === "object") {
		fileStack = keyword.fileStack;
		return translate(keyword.text, true, keywordArray, options);
	} else {
		return translate(keyword, true, keywordArray, options);
	}
}

//Returns an array of workshop instructions (delimited by a semicolon).
function splitInstructions(content) {
	return splitStrOnDelimiter(content, [';']);
}

//Returns an array of arguments (delimited by a comma).
function getArgs(content) {
	return splitStrOnDelimiter(content, [',']);
}

//Returns an array of strings that are delimited by the given string(s).
//The delimiter is only taken into account if it is not within parentheses and not within a string.
//Example: "azer(1,2), reaz(',,,,')" will return ["azer(1,2)","reaz(',,,,')"] for a comma separator.
function splitStrOnDelimiter(content, delimiter) {
	
	content = content.trim();
	var bracketPos = getBracketPositions(content);
	var bracketPosCheckIndex = 0;
	var delimiterPos = [-delimiter.length];
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	
	for (var i = 0; i < content.length; i++) {
		//Check if the current index is in parentheses
		if (bracketPosCheckIndex < bracketPos.length && i >= bracketPos[bracketPosCheckIndex]) {
			i = bracketPos[bracketPosCheckIndex+1];
			bracketPosCheckIndex += 2;
			
		} else if (!currentPositionIsString && (content.charAt(i) == '"'/* || content.charAt(i) == '\''*/)) {
			currentPositionIsString = !currentPositionIsString;
			currentStrDelimiter = content.charAt(i);
		} else if (content.charAt(i) === currentStrDelimiter) {
			currentPositionIsString = !currentPositionIsString;
		} else if (content.charAt(i) == '\\') {
			i++;
		} else if (!currentPositionIsString && content.startsWith(delimiter, i)) {
			delimiterPos.push(i);
		}

	}
	
	delimiterPos.push(content.length);
	
	var result = [];
	for (var i = 0; i < delimiterPos.length-1; i++) {
		var currentStr = content.substring(delimiterPos[i]+delimiter.length, delimiterPos[i+1]);
		currentStr = currentStr.trim();
		if (currentStr.length > 0) {
			result.push(currentStr);
		}
	}
	
	return result;
}

//Same as splitStrOnDelimiter but for a token list.
//If getAllTokens = false, this will only split on the first occurrence of the token.
function splitTokens(tokens, str, getAllTokens=true, rtl=false) {
	
	var result = [];
	var bracketsLevel = 0;
	
	if (rtl) {
		var start = tokens.length-1;
		var end = -1;
		var step = -1;
		var latestDelimiterPos = tokens.length;
	} else {
		var start = 0;
		var end = tokens.length;
		var step = 1;
		var latestDelimiterPos = -1;
	}
	
	//console.log("Splitting tokens '"+dispTokens(tokens)+"' on "+str);
	
	for (var i = start; i != end; i+=step) {
		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
			bracketsLevel += step;
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
			bracketsLevel -= step;
		} else if (tokens[i].text === str && bracketsLevel === 0) {
			if (rtl) {
				result.push(tokens.slice(i+1, latestDelimiterPos));
			} else {
				result.push(tokens.slice(latestDelimiterPos+1, i));
			}
			latestDelimiterPos = i;
			if (!getAllTokens) {
				break;
			}
		}
	}
	
	if (bracketsLevel !== 0) {
		error("Lexer broke (bracket level is "+bracketsLevel+")");
	}
	
	if (rtl) {
		result.unshift(tokens.slice(end+1, latestDelimiterPos));
	} else {
		result.push(tokens.slice(latestDelimiterPos+1, end));
	}
		
	if (result[0].length === 0 && result.length === 1) {
		return [];
	} else {
		return result;
	}
	
}


//This function returns the index of each first-level opening and closing brackets/parentheses.
//Example: the string "3*(4*(')'))+(4*5)" will return [2, 10, 12, 16].
function getBracketPositions(content, returnFirstPair=false, stringIncludesApos=false) {
	var bracketsPos = []
	var bracketsLevel = 0;
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	for (var i = 0; i < content.length; i++) {
		if (!currentPositionIsString && startsWithParenthesis(content.substring(i))) {
			bracketsLevel++;
			if (bracketsLevel == 1) {
				bracketsPos.push(i);
			}
		} else if ((content.charAt(i) == ')' || content.charAt(i) == ']' || content.charAt(i) == '}') && !currentPositionIsString) {
			bracketsLevel--;
			if (bracketsLevel == 0) {
				bracketsPos.push(i);
				if (returnFirstPair) {
					break;
				}
			} else if (bracketsLevel < 0) {
				error("Brackets level below 0! (missing opening bracket)");
			}
		} else if (!currentPositionIsString && (content.charAt(i) == '"' || (content.charAt(i) == '\'' && stringIncludesApos))) {
			currentPositionIsString = !currentPositionIsString;
			currentStrDelimiter = content.charAt(i);
		} else if (content.charAt(i) === currentStrDelimiter) {
			currentPositionIsString = !currentPositionIsString;
		} else if (content.charAt(i) == '\\') {
			i++;
		}
	}
	if (bracketsLevel > 0) {
		error("Brackets level above 0! (missing closing bracket)");
	}
	
	return bracketsPos;
}

//Same as getBracketPositions but for tokens.
function getTokenBracketPos(tokens, returnFirstPair=false) {
	var bracketsPos = []
	var bracketsLevel = 0;
	var currentPositionIsString = false;
	var currentStrDelimiter = "";
	for (var i = 0; i < tokens.length; i++) {
		if (tokens[i].text === '(' || tokens[i].text === '[' || tokens[i].text === '{') {
			bracketsLevel++;
			if (bracketsLevel == 1) {
				bracketsPos.push(i);
			}
		} else if (tokens[i].text === ')' || tokens[i].text === ']' || tokens[i].text === '}') {
			bracketsLevel--;
			if (bracketsLevel === 0) {
				bracketsPos.push(i);
				if (returnFirstPair) {
					break;
				}
			}
		} 
	}
	if (bracketsLevel > 0) {
		error("Brackets level above 0! (missing closing bracket)");
	}
	
	return bracketsPos;
}

//Returns true if the given string starts with a parenthesis (or a bracket/curly bracket).
function startsWithParenthesis(content) {
	if (content[0] == '(' || content[0] == '[' || content[0] == '{') {
		return true;
	}
	return false;
}

//Returns true if c is [A-Za-z\d_@].
function isVarChar(c) {
	return c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '@';
}

//Returns the indent, assuming 1 indent = 4 spaces.
function getIndent(content) {
	var indent = 0;
	var i = 0;
	while (content.startsWith("    ", i)) {
		indent++;
		i += 4;
	}
	return indent;
}

//Converts a token list, or a token object to string.
function dispTokens(content) {
	if (content instanceof Array) {
		var result = "";
		for (var i = 0; i < content.length; i++) {
			result += content[i].text;
			if (i < content.length-1) {
				result += " ";
			}
		}
		return result;
	} else if (typeof content === "string") {
		return content;
	} else if (typeof content === "object") {
		if (content.text === undefined) {
			error("Object is not a token or token list");
		} else {
			return content.text;
		}
	} else {
		error("Undefined content "+content);
	}
}

//Logging stuff
function error(str, token) {
	
	if (token !== undefined && token.fileStack !== undefined) {
		fileStack = token.fileStack;
	}
	
	//var error = "ERROR: ";
	var error = "";
	error += str;
	if (token !== undefined) {
		error += "'"+dispTokens(token)+"'";
	}
	if (fileStack.length !== 0) {
		fileStack.reverse();
		for (var file of fileStack) {
			error += "\n\t| line "+file.currentLineNb+", col "+file.currentColNb+", at "+file.name;
		}
	}
	
	throw new Error(error);
}

function warn(warnType, message) {
	
	if (!suppressedWarnings.includes(warnType)) {
		var warning = message+" ("+warnType+")";
		if (fileStack.length !== 0) {
			fileStack.reverse();
			for (var file of fileStack) {
				warning += "\n\t| line "+file.currentLineNb+", col "+file.currentColNb+", at "+file.name;
			}
		}
		console.warn(warning);
		encounteredWarnings.push(warning);
	}
}

function debug(str, arg) {
	//return;
	console.debug("DEBUG: "+str);
}

//ty stackoverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


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

//OverPy Decompiler (Workshop -> OverPy)

function decompileAllRules(content, language="en-US") {

	resetGlobalVariables();
	currentLanguage = language;
	var result = "";
	content = content.trim();
	
	
	var bracketPos = getBracketPositions(content);

	//Check for variable names
	if (content.startsWith(tows("_variables", ruleKw))) {
		decompileVarNames(content.substring(bracketPos[0]+1, bracketPos[1]));
		bracketPos = bracketPos.slice(1);

	} else {
		bracketPos.unshift(-1);
	}

	debug("global vars: "+globalVariables);
	debug("player vars: "+playerVariables);
	
	//A rule looks like this:
	//rule(title) {...}
	//Therefore, each rule ends every 4th bracket position
	
	for (var i = 0; i < bracketPos.length-1; i += 4) {
	//for (var i = 0; i < 4; i += 4) {
		if (i >= bracketPos.length-1) break;
		result += decompileRule(content.substring(bracketPos[i]+1, bracketPos[i+4]+1));
	}

	var variableDeclarations = "";	
	if (globalVariables.length > 0) {
		globalVariables.sort((a,b) => a.index-b.index);
		var globalVariableDeclarations = "";
		for (var variable of globalVariables) {
			if (defaultVarNames.indexOf(variable.name) !== variable.index) {
				globalVariableDeclarations += "#!declareGlobal "+translateVarToPy(variable.name, true)+" "+variable.index+"\n";
			}
		}
		if (globalVariableDeclarations !== "") {
			variableDeclarations += "#Global variables\n\n"+globalVariableDeclarations+"\n\n";
		}
	}
	if (playerVariables.length > 0) {
		playerVariables.sort((a,b) => a.index-b.index);
		var playerVariableDeclarations = "";
		for (var variable of playerVariables) {
			if (defaultVarNames.indexOf(variable.name) !== variable.index) {
				playerVariableDeclarations += "#!declarePlayer "+translateVarToPy(variable.name, false)+" "+variable.index+"\n";
			}
		}
		if (playerVariableDeclarations !== "") {
			variableDeclarations += "#Player variables\n\n"+playerVariableDeclarations+"\n\n";
		}
	}
	result = variableDeclarations + result;
		
	return result;
	
}

function decompileVarNames(content) {
	content = content.split(":");
	var isInGlobalVars = true;
	var currentVarIndex = undefined;
	for (var i = 0; i < content.length; i++) {
		content[i] = content[i].trim();
		if (i === 0) {
			//First element is always a var type
			if (content[i] === tows("_global", ruleKw)) {
				isInGlobalVars = true;
			} else if (content[i] === tows("_player", ruleKw)) {
				isInGlobalVars = false;
			} else {
				error("Unrecognized var type '"+content[i]+"'");
			}
		} else {
			if (content[i].search(/\s/) >= 0) {
				var elems = content[i].split(/\s+/);
				if (elems.length !== 2) {
					error("Could not parse variables field: too many elements on '"+content[i]+"'");
				}
				addVariable(elems[0], isInGlobalVars, currentVarIndex);
				if (!isNaN(elems[1])) {
					currentVarIndex = +elems[1];
				} else {
					if (elems[1] === tows("_global", ruleKw)) {
						isInGlobalVars = true;
					} else if (elems[1] === tows("_player", ruleKw)) {
						isInGlobalVars = false;
					} else {
						error("Unrecognized var type '"+elems[1]+"'");
					}
				}
			} else {
				if (!isNaN(content[i])) {
					currentVarIndex = +content[i];
				} else if (i === content.length-1) {
					addVariable(content[i], isInGlobalVars, currentVarIndex);
				} else {
					error("Could not parse variables field");
				}
			}
		}
	}
}

function decompileRule(content) {
	
	//Reset rule-specific global variables
	decompilerGotos = [];
	nbTabs = 0;
	lastLoop = -1;
	
	//Check for potential error
	if (currentArrayElementNames.length != 0) {
		error("Current array element names weren't cleared");
	}
	
	var bracketPos = getBracketPositions(content);
	if (bracketPos.length != 4) {
		error("Invalid rule (mismatched brackets): has "+bracketPos.length+" top-level brackets, should be 4");
	}
	
	var ruleName = content.substring(bracketPos[0]+1, bracketPos[1]);
	var isCurrentRuleDisabled = false;
	if (content.trim().startsWith(tows("_disabled", ruleKw))) {
		isCurrentRuleDisabled = true;
	}
	
	debug("Decompiling rule "+ruleName);
	var result = "";
	if (isCurrentRuleDisabled) {
		result += '"""';
	}
	result += "@Rule "+ruleName+"\n";
	
	var ruleContent = content.substring(bracketPos[2]+1, bracketPos[3]);
	
	var bracketPos2 = [-1].concat(getBracketPositions(ruleContent));
	
	var eventInst = [];
 	var conditions = "";
	var actions = "";
	
	for (var i = 0; i < bracketPos2.length-2; i += 2) {
		var fieldName = topy(ruleContent.substring(bracketPos2[i]+1, bracketPos2[i+1]), ruleKw);
		if (fieldName === "@Event") {
			eventInst = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]), false);
		} else if (fieldName === "_conditions") {
			//conditions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			conditions = "conditions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else if (fieldName === "_actions") {
			//actions = splitInstructions(ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2]));
			actions = "actions {"+ruleContent.substring(bracketPos2[i+1]+1, bracketPos2[i+2])+"}";
		} else {
			error("Unknown field name "+fieldName+" in rule "+ruleName);
		}
	}
	
	//Parse events
	if (eventInst.length > 0) {
		result += "@Event "+topy(eventInst[0], eventKw)+"\n";
		if (eventInst.length > 1) {
			//There cannot be only 2 event instructions: it's either 1 (global) or 3 (every other event).
			if (topy(eventInst[1], eventTeamKw) !== "all") {
				result += "@Team "+topy(eventInst[1], eventTeamKw)+"\n";
			}
			
			//Parse the 3rd event instruction
			//Detect if it is a slot or hero
			var eventInst3 = topy(eventInst[2], eventPlayerKw.concat(getConstantKw("HERO CONSTANT")))
			if (eventInst3 !== "all") {
				if (isNumber(eventInst3)) {
					result += "@Slot "+eventInst3+"\n";
				} else {
					//We assume it is a hero
					result += "@Hero "+eventInst3.substring("HERO.".length).toLowerCase() + "\n";
				}
			}
		}
	}
	
	//Parse conditions
	if (conditions !== "") {
		result += decompileConditions(conditions);
	}
		
	//Parse actions
	if (actions !== "") {
		result += decompileActions(actions);
	}
	
	if (isCurrentRuleDisabled) {
		result += '"""';
	}
	return result+"\n\n";
}

function decompileConditions(content) {
	
	var conditions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")), false);
	
	var result = "";
	result += "if ";
	var condStrs = [];
	for (var i = 0; i < conditions.length; i++) {
		
		var currentCondIsDisabled = false;
		conditions[i] = conditions[i].trim();
		if (conditions[i].startsWith(tows("_disabled", ruleKw))) {
			currentCondIsDisabled = true;
			conditions[i] = conditions[i].substring(tows("_disabled", ruleKw).length);
		}
		var currentCond = decompileRuleCondition(conditions[i]);
		//Check for and-ing with true
		if (currentCond === "true") {
			continue;
		}
		
		if (operatorPrecedenceStack[0] < 2) {
			currentCond = "("+currentCond+")";
		}
		condStrs.push({
			text: currentCond,
			isDisabled: currentCondIsDisabled,
		});
	}
	var condStrResult = "";
	for (var i = 0; i < condStrs.length; i++) {
		console.log(i)
		console.log(condStrs[i]);
		var condStr = condStrs[i].text;
		if (i < condStrs.length-2 && !condStrs[i+1].isDisabled) {
			condStr += " and ";
		} else if (condStrs.length >= 2 && (i === condStrs.length-1 || condStrs[i].isDisabled && i > 0)) {
			condStr = " and "+condStr;
		}
		if (condStrs[i].isDisabled) {
			condStr = "'''"+condStr+"'''";
		}
		condStrResult += condStr;
	}
	
	//This happens if everything is true
	if (condStrResult === "") {
		condStrResult = "true";
	}
	result += condStrResult;
	
	result += ":\n"
	nbTabs = 1;
	
	return result;
}

function decompileActions(content) {
	
	var result = "";
	var actions = splitInstructions(content.substring(content.indexOf("{")+1, content.lastIndexOf("}")), false);
	
	//Detect the last loop to know where to place the "while"
	for (var i = 0; i < actions.length; i++) {
		var actionName = getName(actions[i]);
		if (!actionName.startsWith(tows("_disabled", ruleKw)) && topy(actionName, actionKw).startsWith("_loop")) {
			//It is a loop; update the loop position
			lastLoop = i;
		}
	}
	
	//If a loop was detected, add the "do:" and increment the indentation level.
	if (lastLoop >= 0) {
		result += tabLevel(nbTabs)+"do:\n";
		nbTabs++;
	}
		
	for (var i = 0; i < actions.length; i++) {
		if (i == lastLoop) {
			nbTabs--;
		}
		result += tabLevel(nbTabs) + decompileAction(actions[i], i) + "\n";
	}

	//Add the remaining gotos (caused eg. by a skip 50 in a rule with 10 actions).
	for (var i = 0; i < decompilerGotos.length; i++) {
		if (decompilerGotos[i] > 0) {
			result += tabLevel(nbTabs)+"lbl_"+i+":\n";
		}
	}
	
	return result;
}

function decompileAction(content, actionNb) {
	
	var result = "";
	
	//Reset variable
	operatorPrecedenceStack = [];
	
	//Decrement each goto (for skips)
	for (var i = 0; i < decompilerGotos.length; i++) {
		decompilerGotos[i]--;
		//Check if the goto has reached its destination
		if (decompilerGotos[i] == 0) {
			result += "lbl_"+i+":\n"+tabLevel(nbTabs);
		}
	}
	var isCurrentActionDisabled = false;
	content = content.trim();
	if (content.startsWith(tows("_disabled", ruleKw)+" ")) {
		isCurrentActionDisabled = true;
		content = content.substring((tows("_disabled", ruleKw)+" ").length);
	}
	var decompiledAction = "";
	if (actionNb == lastLoop) {
		decompiledAction = decompile(content, actionKw, {"isLastLoop":true});
	} else {
		
		decompiledAction = decompile(content, actionKw, 0, {"isLastLoop":false});
	}
	if (isCurrentActionDisabled) {
		if (decompiledAction.includes('\n')) {
			decompiledAction = "'''"+decompiledAction+"'''";
		} else {
			decompiledAction = "#"+decompiledAction;
		}
	}
	return result+decompiledAction;
}

//This function only decompiles conditions that are in the "condition" section of a rule.
//This is needed to handle the binary operators.
function decompileRuleCondition(content) {
	
	debug("Decompiling condition '"+content+"'");
	
	//Reset variable
	operatorPrecedenceStack = [];
	var operators = ["==", "!=", "<=", ">=", "<", ">"];
	
	for (var i = 0; i < operators.length; i++) {
		var operands = splitStrOnDelimiter(content, operators[i], false);
		if (operands.length == 2) {
			return decompileCondition(operands[0], operators[i], operands[1]);
		}
	}
	
	error("Could not decompile condition "+content);
	
}

//Decompiles conditions (whether rule conditions or compare() conditions).
//Used to optimise some stuff (eg: condition==true -> condition, condition==false -> not condition).

function decompileCondition(operand1, operator, operand2) {
	var result = "";
	var isOneOperandFalse = false;
	var operands = [operand1, operand2];
	operator = operator.trim();
	if (operator == "==") {
		//condition == true check
		for (var i = 0; i < operands.length; i++) {
			var translated = topy(getName(operands[i]), valueKw);
			if (translated === "true") {
				operands[i] = "";
			} else if (translated === "false") {
				operands[i] = "";
				isOneOperandFalse = true;
			}
		}
	}
	
	
	if (operands[0] !== "" && operands[1] !== "") {
		result = decompileOperator(operands[0], operator, operands[1])
	} else if (operands[0] !== "") {
		if (isOneOperandFalse) {
			result = decompileOperator(operands[0], "not", "");
		} else {
			result = decompile(operands[0]);
		}
	} else if (operands[1] !== "") {
		if (isOneOperandFalse) {
			result = decompileOperator(operands[1], "not", "");
		} else {
			result = decompile(operands[1]);
		}
	} else if (isOneOperandFalse) {
		result = "false";
	} else {
		result = "true";
	}
	
	
	return result;
}

//Main parser function for workshop -> overpy.
function decompile(content, keywordArray=valueKw, decompileArgs={}) {
	
	if (keywordArray === undefined) {
		error("KeywordArray is undefined");
	} else if (content === undefined) {
		error("Content is undefined");
	}
	
	debug("Decompiling '"+content+"'");
	var bracketPos = getBracketPositions(content);
	
	
	var hasArgs = false
	if (bracketPos.length == 2) {
		hasArgs = true;
	} else if (bracketPos.length != 0) {
		error("Mismatched top-level brackets in action "+content+": expected 0 or 2, found "+bracketPos.length)
	}
	
	//Check if there are empty parentheses
	if (bracketPos.length == 2 && content.substring(bracketPos[0]+1, bracketPos[1]).trim().length == 0) {
		hasArgs = false;
		content = content.substring(0, bracketPos[0]);
	}
		
	var name = "";
	if (bracketPos.length == 2) {
		name = content.substring(0, bracketPos[0]);
	} else {
		name = content;
	}
	name = topy(name.toLowerCase().replace(/\s/g, ""), keywordArray);
	
	if (name !== "_compare" && decompileArgs.invertCondition === true) {
		return parseOperator(content, "not", null);
	}
	
	var args = [];
	if (hasArgs) {
		var args = getArgs(content.substring(bracketPos[0]+1, bracketPos[1]), false);
	}
	debug("Arguments: "+args);
	var result = "";
	
	//Handle special functions that can't be directly translated
	//Special functions are sorted alphabetically.
	
	//Player functions can't be translated, but most of them are generic.
	//They begin by "_&".
	
	if (name.startsWith("_&")) {
		return decompileGenericPlayerFunction(name.substring("_&".length), args, keywordArray === actionKw ? true : false);
	}
	
	//Functions beginning with "_!" have their arguments swapped (assuming there are only 2 arguments).
	if (name.startsWith("_!")) {
		if (args.length !== 2) {
			error("Argument length for swapped function must be 2");
		}
		return name.substring("_!".length)+"("+decompile(args[1])+", "+decompile(args[0])+")";
	}
	
	//Abort if
	if (name === "_abortIf") {
		result = "if " + decompile(args[0]) + ":\n";
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Abort if condition is false/true
	if (name === "_abortIfConditionIsFalse" || name === "_abortIfConditionIsTrue") {
		result = "if ";
		if (name === "_abortIfConditionIsFalse") {
			result += "not ";
		}
		result += "RULE_CONDITION:\n";
		result += tabLevel(nbTabs+1) + "return";
		
		return result;
	}
	
	//Add
	if (name === "_add") {
		return decompileOperator(args[0], "+", args[1]);
	}
	
	//Is true for all
	if (name === "_all") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "all(["+decompile(args[1])+" for "+varName+" in "+decompile(args[0])+"])";
		currentArrayElementNames.pop();
		return result;
	}
	
	//Is true for any
	if (name === "_any") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "any(["+decompile(args[1])+" for "+varName+" in "+decompile(args[0])+"])";
		currentArrayElementNames.pop();
		return result;
	}
	
	//And
	if (name === "_and") {
		return decompileOperator(args[0], "and", args[1]);
	}
	
	//Append to array
	if (name === "_appendToArray") {
		
		//Check for optimization: [].append(123).append(456) -> [123, 456]
		//Only done if we append a literal number to a literal array.
		
		var decompiledArg0 = decompile(args[0]);
		var decompiledArg1 = decompile(args[1]);
		
		if (decompiledArg0.startsWith('[') && decompiledArg0.endsWith(']') && !isNaN(decompiledArg1)) {
			var result = decompiledArg0.substring(0, decompiledArg0.length-1);
			if (decompiledArg0 !== "[]") {
				result += ", ";
			}
			result += decompiledArg1+"]";
			return result;
		} else {
			return decompiledArg0+".append("+decompiledArg1+")";
		}
	}
	
	//Array contains
	if (name === "_arrayContains") {
		
		return decompile(args[1])+" in "+decompile(args[0]);
	}
	
	//Array slice
	if (name === "_arraySlice") {
		return decompile(args[0]) + ".slice(" + decompile(args[1]) + ", " + decompile(args[2])+")";
	}
	
	//Chase global variable at rate
	if (name === "_chaseGlobalVariableAtRate") {
		
		return "chase("+translateVarToPy(args[0], true)+", "+decompile(args[1])+", rate="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase global variable over time
	if (name === "_chaseGlobalVariableOverTime") {
		
		return "chase("+translateVarToPy(args[0], true)+", "+decompile(args[1])+", duration="+decompile(args[2])+", "+decompile(args[3])+")";
	}
	
	//Chase player variable at rate
	if (name === "_chasePlayerVariableAtRate") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, rate={arg2}, {arg3})", args[0], args.slice(1), true, true, true)
		
		return result;
	}
	
	//Chase player variable over time
	if (name === "_chasePlayerVariableOverTime") {
		
		var result = decompilePlayerFunction("chase({player}.{arg0}, {arg1}, duration={arg2}, {arg3})", args[0], args.slice(1), true, true, true)
		
		return result;
	}
		
	//Compare
	if (name === "_compare") {
		
		var op = args[1].trim();
		if (decompileArgs.invertCondition === true) {
			op = reverseOperator(op);
		}
		
		return decompileCondition(args[0], op, args[2]);
		//return "("+decompile(args[0]) + ") " + args[1].trim() + " (" + decompile(args[2])+")";
	}
	
	//Current array element
	if (name === "_currentArrayElement") {
		var currentArrayElementName = currentArrayElementNames[currentArrayElementNames.length-1];
		if (currentArrayElementName === undefined) {
			error("currentArrayElementName is undefined");
		}
		return currentArrayElementName;
	}
	
	//Custom String
	if (name === "_customString") {
		
		var result = args[0];
		var format = [];
		if (result.includes("{0}")) {
			format.push(decompile(args[1]));
		}
		if (result.includes("{1}")) {
			if (format.length === 0) {
				result = result.replace("{1}", "{0}");
			}
			format.push(decompile(args[2]));
		}
		if (result.includes("{2}")) {
			if (format.length === 0) {
				result = result.replace("{2}", "{0}");
			} else if (format.length === 1) {
				result = result.replace("{2}", "{1}");
			}
			format.push(decompile(args[3]));
		}
		
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return result;
	}
	
	//Divide
	if (name === "_divide") {
		return decompileOperator(args[0], "/", args[1]);
	}
	
	//Empty array
	if (name === "_emptyArray") {
		return "[]";
	}
	
	//Filtered array
	if (name === "_filteredArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "["+varName+" for "+varName+" in "+decompile(args[0])+" if "+decompile(args[1])+"]";
		currentArrayElementNames.pop();
		return result;
	}
	
	//First of
	if (name === "_firstOf") {
		return decompile(args[0])+"[0]";
	}
	
	//Raycast hit normal
	if (name === "_getNormal") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getNormal()";
	}
	
	//Raycast hit position
	if (name === "_getHitPosition") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getHitPosition()";
	}
	
	//Raycast hit player
	if (name === "_getPlayerHit") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", include="+decompile(args[2])+", exclude="+decompile(args[3])+", includePlayerObjects="+decompile(args[4])+").getPlayerHit()";
	}

	//All Players
	if (name === "getPlayers") {
		var team = decompile(args[0], valueKw);
		if (team === "Team.ALL") {
			return "getAllPlayers()";
		} else {
			return "getPlayers("+team+")";
		}
	}
	
	//Gamemode
	if (name === "_gamemode") {
		return decompile(args[0], getConstantKw("GAMEMODE CONSTANT"));
	}
		
	//Global variable
	if (name === "_globalVar") {
		return translateVarToPy(args[0], true);
	}
		
	//Hero
	if (name === "_hero") {
		return decompile(args[0], getConstantKw("HERO CONSTANT"));
	}

	//Hud text
	if (name === "_hudText") {
		var header = decompile(args[1]);
		var subheader = decompile(args[2]);
		var subtext = decompile(args[3]);
		var specVisibility = "";
		if (args.length > 11) {
			specVisibility = decompile(args[10], getConstantKw("SPECTATOR VISIBILITY"));
			if (specVisibility === "SpecVisibility.DEFAULT") {
				specVisibility = "";
			} else {
				specVisibility = ", "+specVisibility;
			}
		}
		var funcName = "";
		var texts = "";
		var colors = "";
		if (subheader === "null" && subtext === "null") {
			funcName = "hudHeader";
			texts = header;
			colors = decompile(args[6]);
		} else if (header === "null" && subtext === "null") {
			funcName = "hudSubheader";
			texts = subheader;
			colors = decompile(args[7]);
		} else if (subheader === "null" && subheader === "null") {
			funcName = "hudSubtext";
			texts = subtext;
			colors = decompile(args[8]);
		} else {
			funcName = "hudText";
			texts = header+", "+subheader+", "+subtext;
			colors = decompile(args[6])+", "+decompile(args[7])+", "+decompile(args[8]);
		}
		return funcName+"("+decompile(args[0])+", "+texts+", "+decompile(args[4], getConstantKw("HUD LOCATION"))+", "+decompile(args[5])+", "+colors+", "+decompile(args[9])+specVisibility+")";
	}
	
	//Index of array value
	if (name === "_indexOfArrayValue") {
		return decompile(args[0])+".index("+decompile(args[1])+")";
	}
	
	//Is in line of sight
	if (name === "_isInLineOfSight") {
		return "raycast("+decompile(args[0])+", "+decompile(args[1])+", los="+decompile(args[2])+").hasLoS()";
	}
	
	//Last of
	if (name === "_lastOf") {
		return decompile(args[0])+"[-1]";
	}
	
	//Localized String
	if (name === "_localizedString") {
		
		//Blizzard likes making parsing difficult apparently,
		//cause the "reevaluation on string" used with hud is the same as the "string" function.
		
		if (args.length == 0) {
			return "HudReeval.STRING";
		}
				
		var [str, format] = decompileLocalizedString(args[0], args[1], args[2], args[3], decompileArgs.strDepth);
				
		if (decompileArgs.strDepth !== 0 && decompileArgs.strDepth !== undefined) {
			return [str, format];
		}
		
		result = '"'+str+'"';
		if (format.length > 0) {
			result += '.format(' + format.join(", ") + ")";
		}
		return "l"+result+"";
	}
			
	//Loop
	if (name === "_loop") {
		if (decompileArgs.isLastLoop) {
			return "while true";
		} else {
			return "continue";
		}
	}
	
	//Loop if
	if (name === "_loopIf") {
		if (decompileArgs.isLastLoop) {
			return "while "+decompile(args[0]);
		} else {
			var result = "if "+decompile(args[0])+":\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Loop if condition is false
	if (name === "_loopIfConditionIsFalse") {
		if (decompileArgs.isLastLoop) {
			return "while not RULE_CONDITION";
		} else {
			var result = "if not RULE_CONDITION:\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}
	
	//Loop if condition is true
	if (name === "_loopIfConditionIsTrue") {
		if (decompileArgs.isLastLoop) {
			return "while RULE_CONDITION";
		} else {
			var result = "if RULE_CONDITION:\n";
			result += tabLevel(nbTabs+1)+"continue";
			return result;
		}
	}

	//Map
	if (name === "_map") {
		return decompile(args[0], getConstantKw("MAP CONSTANT"));
	}
	
	//Modify global var
	if (name === "_modifyGlobalVar") {
		return decompileModifyVar(translateVarToPy(args[0], true), args[1], decompile(args[2]));
	}
	
	//Modify global var at index
	if (name === "_modifyGlobalVarAtIndex") {
		return decompileModifyVar(translateVarToPy(args[0], true), args[2], decompile(args[3]), decompile(args[1]));
	}
	
	//Modify player var
	if (name === "_modifyPlayerVar") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+translateVarToPy(args[1], false), args[2], decompile(args[3]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modify player var at index
	if (name === "_modifyPlayerVarAtIndex") {
		
		var playerVarName = getPlayerVarName(args[0]);
		var result = decompileModifyVar(playerVarName+"."+translateVarToPy(args[1], false), args[3], decompile(args[4]), decompile(args[2]))
		
		return decompilePlayerFunction(result, args[0], []);
	}
	
	//Modulo
	if (name === "_modulo") {
		return decompileOperator(args[0], "%", args[1]);
	}
	
	//Multiply
	if (name === "_multiply") {
		return decompileOperator(args[0], "*", args[1]);
	}
	
	//Or
	if (name === "_or") {
		return decompileOperator(args[0], "or", args[1]);
	}
	
	//Player variable
	if (name === "_playerVar") {
		if (!isPlayerArrayInstruction(args[0])) {
			return decompile(args[0])+"."+translateVarToPy(args[1], false);
		} else {
			if (isInNormalForLoop) {
				return "[player2."+translateVarToPy(args[1], false)+" for player2 in "+decompile(args[0])+"]";
			} else {
				return "[player."+translateVarToPy(args[1], false)+" for player in "+decompile(args[0])+"]";
			}
		}
	}
	
	//Raise to power
	if (name === "_raiseToPower") {
		return decompileOperator(args[0], "**", args[1]);
	}
	
	//Remove from array
	if (name === "_removeFromArray") {
		return decompile(args[0])+".exclude("+decompile(args[1])+")";
	}
	
	
	//Round
	if (name === "_round") {
		var roundType = topy(args[1], getConstantKw("ROUNDING TYPE"));
		if (roundType === "_roundUp") {
			return "ceil("+decompile(args[0])+")";
		} else if (roundType === "_roundDown") {
			return "floor("+decompile(args[0])+")";
		} else if (roundType === "_roundToNearest") {
			return "round("+decompile(args[0])+")";
		} else {
			error("Unknown round type "+roundType);
		}
	}
	
	//Set global var
	if (name === "_setGlobalVar") {
		return translateVarToPy(args[0], true)+" = "+decompile(args[1]);
	}
	
	//Set global var at index
	if (name === "_setGlobalVarAtIndex") {
		return translateVarToPy(args[0], true)+"["+decompile(args[1])+"] = "+decompile(args[2]);
	}
	
	//Set player var
	if (name === "_setPlayerVar") {
		return decompilePlayerFunction("{player}.{arg0} = {arg1}", args[0], args.slice(1), true, true, true);
	}
	
	//Set player var at index
	if (name === "_setPlayerVarAtIndex") {
		return decompilePlayerFunction("{player}.{arg0}[{arg1}] = {arg2}", args[0], args.slice(1), true, true, true);
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingGlobalVariable") {
		return "stopChasingVariable("+translateVarToPy(args[0], true)+")";
	}
	
	//Stop chasing player variable
	if (name === "_stopChasingPlayerVariable") {
		return decompilePlayerFunction("stopChasingVariable({player}.{args})", args[0], args.slice(1), false, true, true);
	}
					
	//Subtract
	if (name === "_subtract") {
		return decompileOperator(args[0], "-", args[1]);
	}
	
	//Skip
	if (name === "_skip") {
		//Check if the number of skips is hardcoded
		if (!isNaN(args[0].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[0])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[0]);
		}
		
		return "goto "+gotoStr;
	}
	
	//Skip if
	if (name === "_skipIf") {
		result = "if " + decompile(args[0]) + ":\n";
		
		//Check if the number of skips is hardcoded
		if (!isNaN(args[1].trim())) {
			var gotoStr = "lbl_"+decompilerGotos.length;
			//Init the goto countdown
			decompilerGotos.push(parseInt(args[1])+1);
		} else {
			var gotoStr = "loc + "+decompile(args[1]);
		}
		
		result += tabLevel(nbTabs+1) + "goto "+gotoStr;
		
		return result;
	}
	
	//Sorted array
	if (name === "_sortedArray") {
		
		if (isPlayerArrayInstruction(args[0])) {
			var varName = "player";
		} else {
			var varName = "i";
		}
		
		debug("Pushing currentArrayElementName "+varName);
		currentArrayElementNames.push(varName);
		
		var result = "sorted("+decompile(args[0]);
		//If key == current array element, do not include it
		if (topy(getName(args[1]).trim(), valueKw) !== "_currentArrayElement") {
			result += ", key=lambda "+varName+": "+decompile(args[1]);
		}
		result += ")";
		currentArrayElementNames.pop();
		return result;
	}
					
	//Value in array
	if (name === "_valueInArray") {
		return decompile(args[0])+"["+decompile(args[1])+"]";
	}
	
	//Wait
	if (name === "_wait") {
		var arg1 = decompile(args[0]);
		var arg2 = decompile(args[1]);
		var result = "wait(";
		if (arg1 !== "0.016") {
			result += arg1;
		}
		if (arg2 !== "Wait.IGNORE_CONDITION") {
			result += ", "+arg2;
		}
		return result+")";
	}
	
	//X/Y/Z component of
	if (name === "_xComponentOf") {
		return decompile(args[0])+".x";
	}
	if (name === "_yComponentOf") {
		return decompile(args[0])+".y";
	}
	if (name === "_zComponentOf") {
		return decompile(args[0])+".z";
	}
	
	if (name.startsWith('_')) {
		error("Unhandled special function "+name);
	}
	
	//Default case (not a special function).
	result = name;
	if (args.length > 0) {
		result += "("
		for (var i = 0; i < args.length; i++) {
			result += decompile(args[i]);
			if (i < args.length-1) {
				result += ", ";
			}
		}
		result += ")";
	}
	
	return result;
	
}

function decompileLocalizedString(content, arg1, arg2, arg3, strDepth) {
		
	var result = content;
	var format = [];
	var args = [arg1, arg2, arg3];
	
	var nbArgs = 0;
	if (content.indexOf("{0}") > -1) nbArgs++;
	if (content.indexOf("{1}") > -1) nbArgs++;
	if (content.indexOf("{2}") > -1) nbArgs++;
	
	//debug("Parsing string '"+content+"' with nbargs = "+nbArgs);
	
	//Remove additional quotes
	if (result.startsWith('"') && result.endsWith('"')) {
		result = topy(result.substring(1, result.length-1), stringKw);
	}
	
	for (var i = 0; i < nbArgs; i++) {
		
		//Check if the string result must be put in the format array
		var isInFormat = true;
		
		var decompiledArg = decompile(args[i], valueKw, {"strDepth":1});
		
		//Skip nulls
		/*if (decompiledArg === "null") {
			continue;
		}*/
		
		if (decompiledArg.constructor !== Array) {
			decompiledArg = [decompiledArg];
		}
		
		//If the decompile function returned 2 arguments, the argument is a string
		if (decompiledArg.length > 1) {
			isInFormat = false;
			format = format.concat(decompiledArg[1]);
			
		//Else, check if the argument is a number
		} else if (!isNaN(decompiledArg[0])) {
			isInFormat = false;
			
		//Else, check if the argument is in the list of string keywords
		} else if (stringKw.indexOf(decompiledArg[0]) > -1) {
			isInFormat = false;
		}
		
		if (isInFormat) {
			format = format.concat(decompiledArg);
			result = result.replace("\{"+i+"\}", "{}");
		} else {
			//Remove the "Hero." prefix for heroes
			if (decompiledArg[0].startsWith("Hero.")) {
				decompiledArg[0] = decompiledArg[0].replace("Hero.","").toLowerCase();
				decompiledArg[0] = decompiledArg[0][0].toUpperCase() + decompiledArg[0].substring(1);
			}
			result = result.replace("\{"+i+"\}", decompiledArg[0]);
		}
	}
		
	
	debug("Format = "+format+", arg = "+decompiledArg);
	return [result, format];
	
}

//Function for the player functions, eg set projectile speed, has status, etc.
//There were so many of them, it was polluting the special functions table.
function decompileGenericPlayerFunction(name, args, isAction) {
	if (isAction === undefined) {
		error("isAction is undefined");
	}
	return decompilePlayerFunction("{player}."+name+"({args})", args[0], args.slice(1), false, isAction);
}

//Automatically generates a for loop for player function, if that player function takes an array as argument.
//The content is a python translation and must contain {player} and {args} to replace strings by the args.
//If separateArgs = true, {arg0}, {arg1} etc must be provided instead of {args}.
function decompilePlayerFunction(content, player, args, separateArgs=false, isAction=true, firstArgIsVar=false) {
	
	var result = "";
	var hasNormalForLoopBeenSetInThisFunction = false;
	
	
	if (!isPlayerArrayInstruction(player)) {
		result += content.replace("\{player\}", decompile(player))
		
	} else {
		if (isAction) {
			result += "for player in "+decompile(player)+":\n";
			result += tabLevel(nbTabs+1)+content.replace("\{player\}", "player")
			isInNormalForLoop = true;
			hasNormalForLoopBeenSetInThisFunction = true;
		} else {
			if (isInNormalForLoop) {
				result += "["+content.replace("\{player\}", "player2")+" for player2 in "+decompile(player)+"]";
			} else if (currentArrayElementNames.indexOf("player") > -1) {
				result += "["+content.replace("\{player\}", "player3")+" for player3 in "+decompile(player)+"]";
			} else {
				result += "["+content.replace("\{player\}", "player")+" for player in "+decompile(player)+"]";
			}
		}
	}
	
	
	//Parse arguments
	if (!separateArgs) {
		var argsStr = "";
		for (var i = 0; i < args.length; i++) {
			if (i === 0 && firstArgIsVar) {
				argsStr += translateVarToPy(args[i], false);
			} else {
				argsStr += decompile(args[i]);
			}
			if (i < args.length-1) {
				argsStr += ", ";
			}
		}
		result = result.replace("\{args\}", argsStr)
	} else {
		for (var i = 0; i < args.length; i++) {
			if (i === 0 && firstArgIsVar) {
				result = result.replace("\{arg"+i+"\}", translateVarToPy(args[i], false))
			} else {
				result = result.replace("\{arg"+i+"\}", decompile(args[i]))
			}
		}
	}
	if (hasNormalForLoopBeenSetInThisFunction) {
		isInNormalForLoop = false;
	}
	return result;
}

//Function used for "modify player variable" and "modify global variable".
//Note: arguments passed to this function must already be decompiled.
function decompileModifyVar(variable, operation, value, index) {
	if (index !== undefined) {
		variable += "["+index+"]";
	}
	operation = topy(operation, getConstantKw("OPERATION"));
	if (operation === "_appendToArray") {
		return variable+".append("+value+")";
	} else if (operation === "_add") {
		//Handle special "++" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"++";
		} else {
			return variable+" += "+value;
		}
	} else if (operation === "_subtract") {
		//Handle special "--" case
		if (!isNaN(value) && parseInt(value) == 1) {
			return variable+"--";
		} else {
			return variable+" -= "+value;
		}
	} else if (operation === "_multiply") {
		return variable+" *= "+value;
	} else if (operation === "_divide") {
		return variable+" /= "+value;
	} else if (operation === "_modulo") {
		return variable+" %= "+value;
	} else if (operation === "_raiseToPower") {
		return variable+" **= "+value;
	} else if (operation === "_min") {
		return variable+" min= "+value;
	} else if (operation === "_max") {
		return variable+" max= "+value;
	} else if (operation === "_removeFromArrayByIndex") {
		return "del "+variable+"["+value+"]";
	} else if (operation === "_removeFromArrayByValue") {
		return variable+".remove("+value+")";
	} else {
		error("Unhandled operation "+operation);
	}
}

//Function to handle operators and check whether any of the operands need parentheses.
//Eg: Decompiling Multiply(Add(1,2), 3) would produce "(1+2)*3". As one operand of the multiply
//function has another operand with lower precedence, it needs parentheses.
function decompileOperator(operand1, operator, operand2) {
	

	
	operatorPrecedenceStack.push(operatorPrecedence[operator]);
	var currentPrecedenceIndex = operatorPrecedenceStack.length-1;
	debug("precedence stack = "+operatorPrecedenceStack);
	
	var operands = [operand1];
	if (operator !== "not") {
		operands.push(operand2);
	}
	
	for (var h = 0; h < operands.length; h++) {
		var operandDecompiled = decompile(operands[h]);
	
		var currentPrecedence = operatorPrecedence[operator];
		var needsParentheses = false;
		
		for (var i = currentPrecedenceIndex+1; i < operatorPrecedenceStack.length; i++) {
			if (operatorPrecedenceStack[i] < currentPrecedence || (operatorPrecedenceStack[i] == currentPrecedence && (operator === "-" || operator === "/") && h === 1)) {
				needsParentheses = true;
				operatorPrecedenceStack[currentPrecedenceIndex] = operatorPrecedenceStack[i];
			}
		}
		operatorPrecedenceStack = operatorPrecedenceStack.slice(0, currentPrecedenceIndex+1);
		if (needsParentheses) {
			operandDecompiled = "("+operandDecompiled+")";
		}
		operands[h] = operandDecompiled;
	}
	
	
	
	if (operator === "not") {
		return "not "+operands[0];
	} else {
		return operands[0] + " "+operator+" "+operands[1];
	}
	
}

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

/*
Really a class, but I couldn't manage to make the "class" keyword work.
*/
function Macro(text, replacement, args) {
	
	if (args === undefined || args.length === 0) {
		this.isFunction = false;
	} else {
		this.isFunction = true;
		this.args = args;
	}
	this.text = text;
	this.replacement = replacement;
}

/*
Splits the content to return an array of rules, with an array of (effective) lines.
We cannot do split('\n') because we need to handle backslashed lines, and multi-line functions.
For example, the following will count as 1 line:

function(arg1, arg2,
	arg3, arg4)
	
As well as the following:

#!define owo(x) function(x)\
function(y)

While we're at it, this function also automatically removes comments,
and splits rules as well as macros.
It also resolves macros, and tokenizes.
*/

function tokenize(content) {
	
	if (!content.endsWith('\n')) {
		content += '\n';
	}
	
	//Not the full list of tokens; namely, brackets aren't in this list.
	//Sorted by longest first, for greediness.
	var tokens = [
		"==",
		"!=",
		"<=",
		">=",
		"+=",
		"-=",
		"*=",
		"/=",
		"%=",
		"**=",
		"<",
		">",
		"=",
		"++",
		"--",
		"+",
		"-",
		",",
		"/",
		"%",
		"**",
		"*",
		".",
		":",
		"\\",
	];
	
	
	var rules = [];
	macros = [];
	
	var isInSpecial = false;
	//var isInString = false;
	var currentStrDelimiter = "";
	var isInLineComment = false;
	var isInStrComment = false;
	var isInMacro = false;
	var currentStrCommentDelimiter = "";
	var bracketsLevel = 0;
	var isInRule = false;
	var currentRule = {};
	var currentRuleLine = {};
	//var currentToken = {"text":""};
	var currentMacro = {};
	var isBackslashed = false;
	var isInTextToken = false;
	
	//"Timer" used for the end of a multiline string.
    var strCommentTimer = 0;
    
    fileStack = [{
        "name": "<main>",
        "currentLineNb": 1,
        "currentColNb": 0,
        "remainingChars": content.length+1, //does not matter
    }];
	
	var i = 0;
	
	function addToken(text) {
		
		if (text.length === 0) {
			error("Token is empty, lexer broke");
		}
		
		//debug("Adding token '"+text+"' at "+currentLineNb+":"+currentColNb);
		
		currentRuleLine.tokens.push({
			"fileStack": getFileStackCopy(),
			"text":text
		});
		
		i += text.length-1;
		fileStack[fileStack.length-1].currentColNb += text.length-1;
		fileStack[fileStack.length-1].remainingChars -= text.length-1;
    }
    
    //Length = length of the macro resolution
    //callCols, callLines = how many cols/lines the macro CALL takes
    //callNbChars = how many characters the macro call takes
    //Name: used in stack trace, should be macro name or file name
    //startingCol, startingLine: the col/line of the macro start in the file it is declared
    function addFile(length, callNbChars, callCols, callLines, name, startingCol, startingLine) {
        fileStack.push({
            name,
            remainingChars: length,
            callNbChars,
            callCols,
            callLines,
            currentLineNb: 0+startingLine,
            currentColNb: 0+startingCol,
        });
        //console.log(JSON.stringify(fileStack));
    }
	
	function newRuleLine() {
		
		if (currentRuleLine.tokens !== undefined && currentRuleLine.tokens.length > 0) {
			currentRule.lines.push(currentRuleLine);
		}
		
		currentRuleLine = {
			"indentLevel":0,
			"tokens":[]
		};
	}
	
	newRuleLine();
		
	for (i = 0; i < content.length; i++) {
		
		//console.log(i);
        //await sleep(5);
        //console.log(JSON.stringify(fileStack));

        isInSpecial = (isInLineComment || isInStrComment || isInMacro);
		
		if (fileStack[fileStack.length-1].remainingChars > 0) {
			fileStack[fileStack.length-1].remainingChars--;
			if (fileStack[fileStack.length-1].remainingChars === 0) {
				//debug("macro lines = "+macroLines+", macro cols = "+macroCols);
				fileStack[fileStack.length-2].currentLineNb += fileStack[fileStack.length-1].callLines;
                fileStack[fileStack.length-2].currentColNb += fileStack[fileStack.length-1].callLines-1;
                fileStack[fileStack.length-2].remainingChars -= fileStack[fileStack.length-1].callNbChars;
                fileStack.pop();
			}
        }
        
        fileStack[fileStack.length-1].currentColNb++;
				
		if (strCommentTimer > 0) {
			strCommentTimer--;
			if (strCommentTimer === 0) {
				isInStrComment = false;
			}
		}
		
		if (content[i] === '\n') {
			if (!isBackslashed) {
				if (isInMacro) {
					isInMacro = false;
					macros.push(parseMacro(currentMacro));
				}
			}
			//For some reason, in Python, line comments aren't affected by backslashes before new lines.
			if (isInLineComment) {
				isInLineComment = false;
			}
			
			//Do not end the instruction if there is a line break inside a function, or the line is backslashed.
			if (bracketsLevel === 0 && isInRule && !isBackslashed) {
				newRuleLine();
				
            }
            
            fileStack[fileStack.length-1].currentLineNb++;
            fileStack[fileStack.length-1].currentColNb = 0;
			
		} else if (!isInStrComment && !isInMacro && !isInLineComment) {
			
			if (content[i] === "\t") {
				if (currentRuleLine.tokens.length === 0) {
					currentRuleLine.indentLevel += 4;
				}
			} else if (content[i] === ' ') {
                //increase indentation if no token yet; else, do nothing
				if (currentRuleLine.tokens.length === 0) {
			    	currentRuleLine.indentLevel++;
                }
			} else if (content[i] === '\\') {
				//do nothing

			} else if (content[i] === ',') {
				if (bracketsLevel === 0) {
					error("Unexpected token ','");
				}
				addToken(content[i]);
			} else if (content[i] === '(' || content[i] === '[' || content[i] === '{') {
				bracketsLevel++;
				addToken(content[i]);
				
			} else if (content[i] === ')' || content[i] === ']' || content[i] === '}') {
				bracketsLevel--;
				if (bracketsLevel < 0) {
					error("Brackets level below 0");
				}
				addToken(content[i]);
				
			} else if (content.startsWith("#!", i)) {
				if (content.startsWith("#!define ", i) || content.startsWith("#!defineMember ", i)) {
					if (!isInRule) {
						isInMacro = true;
						currentMacro = {
							"fileStack":getFileStackCopy(),
							"content":""
						};
					} else {
						error("Cannot declare macro inside a rule");
					}
				} else if (content.startsWith("#!mainFile ", i)) {
					//we must ignore this preprocessor directive, and it behaves like a line comment
					isInLineComment = true;

				} else if (content.startsWith("#!obfuscate", i)) {
					obfuscateRules = true;
					isInLineComment = true;
				} else if (content.startsWith("#!noEdit", i)) {
					enableNoEdit = true;
					isInLineComment = true;
				} else if (content.startsWith("#!declareGlobal", i) || content.startsWith("#!declarePlayer", i)) {
					var isGlobalVariable = content.startsWith("#!declareGlobal", i);
					var lineIndex = content.indexOf("\n", i);
					var firstSpaceIndex = content.indexOf(" ", i);
					if (lineIndex === -1 || firstSpaceIndex === -1) {
						error("Malformed variable declaration")
					}
					var line = content.substring(firstSpaceIndex, lineIndex).trim();
					var args = line.split(" ");
					if (args.length !== 2) {
						error("Malformed variable declaration (directive should have 2 arguments)");
					}
					var varName = args[0].trim();
					var varIndex = args[1].trim();
					addVariable(varName, isGlobalVariable, varIndex);

					isInLineComment = true;
				} else if (content.startsWith("#!suppressWarnings ", i)) {
					var lineIndex = content.indexOf("\n", i);
					var firstSpaceIndex = content.indexOf(" ", i);
					globalSuppressedWarnings = content.substring(firstSpaceIndex, lineIndex).trim().split(" ").map(x => x.trim());
					isInLineComment = true;
				} else {
					error("Unknown preprocessor directive");
				}
				
			} else if (content[i] === '#') {
				isInLineComment = true;
			
			} else if (content.startsWith("'''", i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = "'''";
				
			} else if (content.startsWith('"""', i)) {
				isInStrComment = true;
				currentStrCommentDelimiter = '"""';
				
			} else if (content[i] === '"' || content[i] === '\'') {
				currentStrDelimiter = content[i];
				//Get to the end of the string
				var j = i+1;
				for (; j < content.length; j++) {
					
					//Test for potentially unclosed string
					if (!isBackslashed && content[j] === '\n') {
						error("Unclosed string");
					}
					
					if (!isBackslashed && content[j] === currentStrDelimiter) {
						break;
					}
						
					if (content[j] === '\\') {
						isBackslashed = true;
					} else {
						isBackslashed = false;
					}
					
					
				}
				
				j += 1; //account for closing delimiter
				
				if (j > i) {
					addToken(content.substring(i, j));
				} else {
					error("Failed to parse string '"+content.substring(i, j)+"' (malformed string?)");
				}
			} else {
				
				
				//Get token
                var j = i;
                //Increases j as long as there are characters that can compose a word
				for (; j < content.length && isVarChar(content[j]); j++);
                
                //If j == i, then there wasn't a word (but an operator)
				if (j > i) {
					if (content.substring(i, j) === "@Rule") {
						if (bracketsLevel > 0) {
							error("Found '@Rule' within brackets (missing closing bracket in previous rule)");
						}
						isInRule = true;
						rules.push(currentRule);
						currentRule = {
							"fileStack":getFileStackCopy(),
							"lines":[]
						};
						newRuleLine();
					} else if (content.substring(i, j) === "import") {

                        var endOfLine = content.indexOf('\n', i);
                        var path = getFilePath(content.substring(j, endOfLine));
                        var importedFileContent = getFileContent(path);
                        
                        content = content.substring(0, i) + importedFileContent + content.substring(endOfLine);
                        addFile(importedFileContent.length, endOfLine-i, endOfLine-i, 0, getFilenameFromPath(path), 0, 0);
                        i--;
                        fileStack[fileStack.length-1].remainingChars++;

                        continue;

                    } else if (!isInRule) {
						error("Found code outside a rule : "+content[i]);
					}

					var macroWasFound = false;

					//Test each macro
					for (var k = 0; k < macros.length; k++) {
						if (content.substring(i,j) === macros[k].name) {

							var text;
							var replacement;
							var macroCols = 0;
							var macroLines = 0;
							
							if (macros[k].isFunction) {
								//debug("Resolving function macro "+macros[k].name);
								var bracketPos = getBracketPositions(content.substring(i), true, true);
								text = content.substring(i, i+bracketPos[1]+1);
								var macroArgs = getArgs(content.substring(i+bracketPos[0]+1, i+bracketPos[1]));
								replacement = resolveMacro(macros[k], macroArgs, currentRuleLine.indentLevel);
								
							} else {
								//debug("Resolving normal macro "+macros[k].name);
								text = macros[k].name;
								replacement = macros[k].replacement;
							}
							
							content = content.substring(0, i) + replacement + content.substring(i+text.length);
							
							if (text.indexOf('\n') >= 0) {
								macroCols = text.length - text.lastIndexOf('\n');
								macroLines = text.split('\n').length-1;
							} else {
								macroCols = text.length;
							}

							if (replacement === undefined) {
								error("Replacement is undefined");
							}

							addFile(replacement.length, text.length, macroCols, macroLines, macros[k].name, macros[k].startingCol, macros[k].fileStack[macros[k].fileStack.length-1].currentLineNb);
							
							//debug("Text: "+text);
							//debug("Replacement: "+replacement);
							
							k = 0;
							i--;
							fileStack[fileStack.length-1].remainingChars++;
							macroWasFound = true;
						}
					}
					
					if (!macroWasFound) {
						//Handle the special case of min= and max= operators
						if ((content.substring(i,j) === "min" || content.substring(i,j) === "max") && content[i+"min".length] === '=') {
							j++;
						}
						addToken(content.substring(i, j))
					}
				} else {
					
					var hasTokenBeenFound = false;
					//Test each remaining token
					for (var h = 0; h < tokens.length; h++) {
						if (content.startsWith(tokens[h], i)) {

							addToken(content.substring(i, i+tokens[h].length));
							hasTokenBeenFound = true;
							break;
						}
					}
					
					if (!hasTokenBeenFound && content[i] !== '\r') {
						error("Unknown token '"+content[i]+"'");
					}
				}
			}
			
		} else if (isInStrComment && content.startsWith(currentStrCommentDelimiter, i)) {
			strCommentTimer = 3;
			
		}
		
		
		if (content[i] === '\\') {
			isBackslashed = true;
		} else {
			isBackslashed = false;
		}
		
		if (isInMacro) {
			currentMacro.content += content[i];
		}
	}
	
	rules.push(currentRule);
	
	//console.log("macros = ");
	//console.log(macros);
	//console.log(rules);
	
	return rules.slice(1)
	
}

function resolveMacro(macro, args=[], indentLevel) {

	var result = "";

	if (macro.isFunction) {
		//debug("Args: "+args);
		if (args.length != macro.args.length) {
			error("Wrong number of arguments for macro "+macro.name);
        }
        
        if (macro.isScript) {
            var scriptContent = getFileContent(macro.scriptPath);
            var vars = "";
            for (var i = 0; i < args.length; i++) {
                vars += "var "+macro.args[i]+"="+args[i]+";";
            }
			scriptContent = vars + '\n'+scriptContent;
			scriptContent = builtInJsFunctions + scriptContent;
            try {
				result = eval(scriptContent);
				if (!result) {
					error("Script '"+getFilenameFromPath(macro.scriptPath)+"' yielded no result");
				}
            } catch (e) {
                var stackTrace = e.stack.split('\n').slice(1).reverse();
                var encounteredEval = false;
                for (var line of stackTrace) {
                    line = line.trim();
                    var name = line.substring("at ".length, line.indexOf("(")).trim();
                    if (name === "eval") {
                        name = getFilenameFromPath(macro.scriptPath);
                        encounteredEval = true;
                    }
                    if (encounteredEval) {
                        var colNb = parseInt(line.substring(line.lastIndexOf(":")+1, line.lastIndexOf(")")));
						var lineNb = parseInt(line.substring(line.substring(0, line.lastIndexOf(":")).lastIndexOf(":")+1, line.lastIndexOf(":")));
						lineNb -= builtInJsFunctionsNbLines;
                        fileStack.push({
                            name: name,
                            currentLineNb: lineNb,
                            currentColNb: colNb,
                        })
                    }
                }
                error(e);
            }
        } else {
		
            result = macro.replacement;
            //debug("result 1 = "+result);
            
            //Replace macro argument names with their values
            for (var i = 0; i < macro.args.length; i++) {
                result = result.replace(new RegExp("\\b"+macro.args[i]+"\\b", 'g'), args[i])
            }
            
            //debug("result 2 = "+result);
            result = result.replace(new RegExp("\\\\\\n", 'g'), '\n');
            //debug("result 3 = "+result);
        }
	} else {
		result = macro.replacement;
	}
	var tabs = "\n"+" ".repeat(indentLevel);
	result = result.replace(/\n/g, tabs);
	return result;
}

function parseMacro(macro) {
	
	if (macro.content.startsWith("#!defineMember ")) {
		macro.isMember = true;
	}
	macro.startingCol = macro.content.indexOf(" ")+1;
	macro.content = macro.content.substring(macro.content.indexOf(" ")+1);
	var bracketPos = getBracketPositions(macro.content, false, true);
	
	if (bracketPos.length === 0 || macro.content.indexOf(" ") < bracketPos[0]) {
		//Not a function macro
		macro.isFunction = false;
		macro.text = macro.content.substring(0, macro.content.indexOf(" ")).trim();
		macro.name = macro.text;
        macro.replacement = macro.content.substring(macro.content.indexOf(" ")).trim();
        macro.startingCol += macro.content.indexOf(" ")+macro.content.substring(macro.content.indexOf(" ")).search(/\S/)+1;
		
	} else {
		//Function macro
		macro.isFunction = true;
		macro.text = macro.content.substring(0, bracketPos[1]+1).trim();
		macro.name = macro.content.substring(0, bracketPos[0]).trim();
		macro.replacement = macro.content.substring(bracketPos[1]+1).trim();
        macro.args = getArgs(macro.content.substring(bracketPos[0]+1, bracketPos[1]));
        macro.startingCol += bracketPos[1]+1+macro.content.substring(bracketPos[1]+1).search(/\S/)+1;

        //Test for script macro
        if (macro.replacement.startsWith("__script__(")) {
            macro.isScript = true;
            macro.scriptPath = getFilePath(macro.replacement.substring("__script__(".length, macro.replacement.length-1));
        } else {
            macro.isScript = false;
        }
	}
	
	if (!macro.text || !macro.replacement) {
		error("Expected a macro declaration (eg: #!define myVar A)");
	}
    
    //console.log(macro);

	return macro;
	
}

//Tokenizes string
function tokenizeLocalizedString(str) {
	
	var tokenList = []
	var originalColNb = fileStack[fileStack.length-1].currentColNb;
	
	debug("Tokenizing string '"+str+"'");
	
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		
		fileStack[fileStack.length-1].currentColNb = originalColNb+i;
		var currentToken = "";
		var hasTokenBeenFound = false;
		
		//Test tokens
		for (var j = 0; j < strTokens.length; j++) {
			if (str.startsWith(strTokens[j], i)) {
				currentToken = strTokens[j];
				hasTokenBeenFound = true;
				break;
			}
		}
		
		if (!hasTokenBeenFound) {
			//Test numbers
			var j = i;
			for (; (str[j] >= '0' && str[j] <= '9') || str[j] === '.' || str[j] === '-'; j++);
			
			if (j !== i) {
				currentToken = str.substring(i, j);
				hasTokenBeenFound = true;
			}
		}
		
		//Test for formatting
		if (!hasTokenBeenFound) {
			if (str.startsWith("{}", i)) {
				currentToken = "{}";
				hasTokenBeenFound = true;
			}
		}

		//Test for heroes
		if (!hasTokenBeenFound) {
			for (var hero of getConstantKw("HERO CONSTANT")) {
				var heroName = hero.opy.substring("Hero.".length).toLowerCase();
				console.log(heroName);
				if (str.startsWith(heroName, i)) {
					currentToken = "_h"+heroName;
					hasTokenBeenFound = true;
				}
			}
		}
				
		if (!hasTokenBeenFound) {
			var j = i+1;
			for (; str[j] >= 'a' && str[j] <= 'z'; j++);
			error("No string translation found for '"+str.substring(i, j)+"'");
		}
		
		tokenList.push(currentToken);
		i += currentToken.length-1;
		
	}
	
	return tokenList;
}
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

//OverPy Compiler (OverPy -> Workshop)


//console.log(compileTest);

//console.log(compile(compileTest));

function compile(content, language="en-US", _rootPath="") {
	
	if (typeof window !== "undefined") {
		var t0 = performance.now();
	}

	resetGlobalVariables();
	currentLanguage = language;
	rootPath = _rootPath;

	//Handle #!mainfile directive
	if (content.startsWith("#!mainFile ")) {
		var mainFilePath = getFilePath(content.substring("#!mainFile ".length, content.indexOf("\n")));
		rootPath = mainFilePath.substring(0, mainFilePath.lastIndexOf("/")+1);
		content = getFileContent(mainFilePath);
		console.log("content = ");
		console.log(content);
	} else {
		importedFiles.push(rootPath);
	}

	var rules = tokenize(content);
	//console.log(rules);

	var result = "";
	var compiledRules = [];
	for (var i = 0; i < rules.length; i++) {
		compiledRules.push(compileRule(rules[i]));
	}

	if (obfuscateRules || enableNoEdit) {
		compiledRules = addEmptyRules(compiledRules);
	} else {
		compiledRules = compiledRules.join("");
	}

	result = generateVariablesField()+compiledRules;

	if (typeof window !== "undefined") {
		var t1 = performance.now();
		console.log("Compilation time: "+(t1-t0)+"ms");
	}
	return {
		result: result,
		macros: macros,
		globalVariables: globalVariables,
		playerVariables: playerVariables,
		encounteredWarnings: encounteredWarnings,
	};
}

function generateVariablesField() {

	var result = tows("_variables", ruleKw)+" {\n";

	for (var varType of ["global", "player"]) {
		var outputVariables = Array(128);
		var varNames = [];
		var varList = varType === "global" ? globalVariables : playerVariables;

		for (var variable of varList) {
			//check name
			if (!/[A-Za-z_]\w*/.test(variable.name)) {
				error("Unauthorized name for "+varType+" variable: '"+variable.name+"'");
			}
			//check duplication
			if (varNames.includes(variable.name)) {
				error("Duplicate declaration of "+varType+" variable '"+variable.name+"'");
			}
			
			if (outputVariables[variable.index] !== undefined) {
				error("Duplicate use of index "+variable.index+" for "+varType+" variables '"+variable.name+"' and '"+outputVariables[variable.index]+"'");
			}
			if (isNaN(variable.index) || variable.index >= 128 || variable.index < 0) {
				error("Invalid index '"+variable.index+"', must be from 0 to 127");
			}
			varNames.push(variable.name);
			outputVariables[variable.index] = variable.name;
		}
		
		if (obfuscateRules) {
			var obfuscatedVarNumbers = shuffleArray(Array(128).fill().map((e,i)=>i));
		}
		result += "\t"+tows("_"+varType, ruleKw)+":\n";
		for (var i = 0; i < 128; i++) {
			if (obfuscateRules) {
				result += "\t\t"+obfuscatedVarNumbers[i]+": "+obfuscatedVarNames[i]+"\n"
			} else {
				if (outputVariables[i] !== undefined) {
					result += "\t\t"+i+": "+outputVariables[i]+"\n";
				} else {
					result += "\t\t"+i+": _unused_var_"+i+"\n";
				}
			}
		}

	}

	result += "}\n";
	return result;

}


function compileRule(rule) {
	
	fileStack = rule.fileStack;
	suppressedWarnings = [...globalSuppressedWarnings];
	var result = "";
	
	if (currentArrayElementNames.length !== 0) {
		error("Current array element names length isn't 0");
	}
	
	forLoopTimers = [];
	wasWaitEncountered = false;
	
	//The first line should always start with @Rule.
	if (rule.lines[0].tokens[0].text !== "@Rule") {
		error("Lexer broke (rule not starting with '@Rule'?)");
	} else if (rule.lines[0].tokens.length !== 2) {
		error("Malformed rule declaration (found "+rule.lines[0].tokens.length+") tokens");
	}
	
	result += tows("@Rule", ruleKw)+" (";
	if (obfuscateRules) {
		result += '""';
	} else {
		result += rule.lines[0].tokens[1].text;
	}
	result += ") {\n";
	result += tabLevel(1)+tows("@Event", ruleKw)+" {\n";
	
	var isInEvent = true;
	var isInActions = false;
	var eventType = "";
	var isEventTeamDefined = false;
	var isEventPlayerDefined = false;

	//Loop until we reach the actions; parse metadata
	var i = 1;
	for (; i < rule.lines.length; i++) {
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}
		fileStack = rule.lines[i].tokens[0].fileStack;

		if (rule.lines[i].tokens[0].text.startsWith("@")) {
			if (!isInEvent) {
				error("Annotation found after code");
			} else {
				if (rule.lines[i].tokens[0].text === "@Event") {
					if (rule.lines.length === 2) {
						result += tabLevel(2)+tows("global", eventKw)+";\n";
						eventType = "global";
					} else {
						result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventKw)+";\n";
						eventType = rule.lines[i].tokens[1].text;
					}
					
				} else if (rule.lines[i].tokens[0].text === "@Team") {
					if (isEventTeamDefined) {
						error("Event team defined twice");
					}
					
					isEventTeamDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1], eventTeamKw)+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Hero") {
					if (isEventPlayerDefined) {
						error("Event player (@Hero/@Slot) defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventTeamKw)+";\n";
						isEventTeamDefined = true;
					}
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows("Hero."+rule.lines[i].tokens[1].text.toUpperCase(), getConstantKw("HERO CONSTANT"))+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@Slot") {
					if (isEventPlayerDefined) {
						error("Event player (@Hero/@Slot) defined twice");
					}
					if (!isEventTeamDefined) {
						result += tabLevel(2)+tows("all", eventTeamKw)+";\n";
						isEventTeamDefined = true;
					}
					
					isEventPlayerDefined = true;
					result += tabLevel(2)+tows(rule.lines[i].tokens[1].text, eventPlayerKw)+";\n";
					
				} else if (rule.lines[i].tokens[0].text === "@SuppressWarnings") {
					for (var j = 1; j < rule.lines[i].tokens.length; j++) {
						suppressedWarnings.push(rule.lines[i].tokens[j].text);
					}
				} else {
					error("Unknown annotation '"+rule.lines[i].tokens[0].text+"'");
				}
			}
		} else {
			break;
		}
	}
	
	//Add missing metadata
	if (!isEventTeamDefined && eventType !== "global") {
		result += tabLevel(2)+tows("all", eventTeamKw)+";\n";
	}
	if (!isEventPlayerDefined && eventType !== "global") {
		result += tabLevel(2)+tows("all", eventPlayerKw)+";\n";
	}
	currentRuleEvent = eventType;
	if (currentRuleEvent === "") {
		error("An event must be specified");
	}
	isInEvent = false;
	result += tabLevel(1)+"}\n\n";

	//Parse the eventual rule condition, as well as the "do:".
	//This loop breaks when it hits an actual action.
	var nbDo = 0;
	for (; i < rule.lines.length; i++) {
		if (rule.lines[i].tokens.length === 0) {
			continue;
		}

		fileStack = rule.lines[i].tokens[0].fileStack;

		//Rule condition: 
		if (rule.lines[i].tokens[0].text === "if" && rule.lines[i].indentLevel === 0 && nbDo === 0) {

			//Check if there are instructions after the if; if not, return nothing as the rule is useless
			if (i+1 >= rule.lines.length) {
				return "";
			}

			//Check if the "if" is special
			if (rule.lines[i+1].tokens[0].text === "goto" || rule.lines[i+1].tokens[0].text === "continue" || rule.lines[i+1].tokens[0].text === "return" || rule.lines[i+1].tokens[0].text === "break") {
				break;
			}

			//Check if the "if" covers the whole rule
			var areAllLinesAfterCurrentLineIndented = true;
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel === 0) {
					areAllLinesAfterCurrentLineIndented = false;
					break;
				}
			}
			if (areAllLinesAfterCurrentLineIndented) {
				var compiledConditions = parseRuleCondition(rule.lines[i].tokens);
				if (compiledConditions === "__false__") {
					return ""; //rule will never execute, as one of the condition is false
				} else if (compiledConditions === "") {
					//do nothing
				} else {
					result += tabLevel(1)+tows("_conditions", ruleKw)+" {\n";
					result += compiledConditions;
					result += tabLevel(1)+"}\n\n";
				}
			} else {
				break;
			}
		} else if (rule.lines[i].tokens[0].text === "do") {
			if (rule.lines[i].tokens.length !== 2 || rule.lines[i].tokens[1].text !== ':') {
				error("Do instruction must be 'do:'");
			}
			nbDo++;

			//Check if the "do" eventually hits a "while"
			var foundWhile = false;
			for (var j = i+1; j < rule.lines.length; j++) {
				if (rule.lines[j].indentLevel > rule.lines[i].indentLevel) {
					continue;
				} else if (rule.lines[j].indentLevel < rule.lines[i].indentLevel){
					error("Unexpected unindent in 'do' body");
				} else {
					if (rule.lines[j].tokens[0].text === "while") {
						foundWhile = true;
					}
				}
			}
			if (!foundWhile) {
				error("'do' instruction does not have a matched 'while'");
			}

		} else {
			break;
		}
	}

	result += tabLevel(1)+tows("_actions", ruleKw)+" {\n";

	var actions = parseInstructions(rule.lines.slice(i), nbDo);
	if (actions === "") {
		//No actions = useless rule.
		return "";
	} else {
		result += actions;
	}
	
	//End actions
	result += tabLevel(1)+"}\n";
	
	//End rules
	result += "}\n\n";
	
	if (Object.entries(forLoopVariables).length !== 0) {
		console.log(forLoopVariables);
		console.log(forLoopTimers);
		error("For loop variables isn't empty");
	}

	return result;
}

//Parses a list of actions (not metadata, rule condition, or "do").
function parseInstructions(lines, nbDo) {

	//Note: a "fake" else is the else that is generated for an elif.
	//A "ghost" else is an else that does not generate a "skip" (if the previous 'if' didn't have its condition inverted).

	//Array of objects: {
	//	"type": "if"|"else"|"fakeelse"|"ghostelse"|"fakeghostelse"|"skip"|"skipif"|"label"|"other"|"forloop"|"optimized"|"switch"|"case"|"break"
	//	"condition": compiled content of the condition, if type not in ["label", "other"] or "skip" is not a skip if
	//	"content": compiled content of the instruction
	//	"label": if type == "skip", the label to search for, if type == "label", the name of the label
	//	"indentLevel": the indent level of the line
	//	"fileStack": the file stack of the first token of the line
	//}
	var resultLines = [];

	//Do a first pass to compile lines and to fill the resultLines array.
	for (var i = 0; i < lines.length; i++) {

		
		if (lines[i].tokens.length === 0) {
			continue;
		}

		

		var currentResultLineType = undefined;
		var currentResultLineContent = undefined;
		var currentResultLineCondition = undefined;
		var currentResultLineSwitch = undefined;
		var currentResultLineCase = undefined;
		var currentResultLineLabel = undefined;
		var skipNextLine = false;
		fileStack = lines[i].tokens[0].fileStack;

		//As we already handled all "do" actions before calling this function, encountering a "do" means it can't be at the beginning of the rule.
		if (lines[i].tokens[0].text === "do") {
			error("Do instructions must be at the beginning of the rule");
		}


		
		//Check for "if"
		if (lines[i].tokens[0].text === "if" || lines[i].tokens[0].text === "elif") {

			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("If/Elif statement must end with ':'");
			}

			var condition = lines[i].tokens.slice(1, lines[i].tokens.length-1);
			if (condition.length === 0) {
				error("If/Elif statement must have a condition");
			}

			if (i+1 >= lines.length) {
				error("If/Elif instruction must have at least one sub-instruction");
			}
 
			if (lines[i+1].tokens[0].text === "goto") {
				if (lines[i+1].tokens.length < 2) {
					error("Malformed goto");
				}
				

				//Check if the goto is of the form "goto loc+xxx"
				if (lines[i+1].tokens[1].text === "loc") {
					var skipIfOffset = parse(lines[i+1].tokens.slice(3))
					var compiledCondition = parse(condition);
					if (isWsFalse(compiledCondition) || isWs0(skipIfOffset)) {
						currentResultLineType = "optimized";
					} else if (isWsTrue(compiledCondition)) {
						currentResultLineType="other";
						currentResultLineContent = tows("_skip", actionKw)+"("+skipIfOffset+")";
					} else {
						currentResultLineType="other";
						currentResultLineContent = tows("_skipIf", actionKw)+"("+compiledCondition+", "+skipIfOffset+")";
					}
					
				} else {
					//Search for label
					var label = lines[i+1].tokens[1].text;
					currentResultLineType = "skipif";
					currentResultLineCondition = parse(condition);
					currentResultLineLabel = label;
				}
				skipNextLine = true;
				
			} else if (lines[i+1].tokens[0].text === "return" || lines[i+1].tokens[0].text === "continue") {
				var ifFunction = "";
				if (lines[i+1].tokens[0].text === "return") {
					ifFunction = "_abortIf";
				} else {
					ifFunction = "_loopIf";
				}

				if (condition[0].text === "RULE_CONDITION" && condition.length === 1) {
					
					currentResultLineType = "other";
					currentResultLineContent = tows(ifFunction+"ConditionIsTrue", actionKw);

				} else if (condition[0].text === "not" && condition[1].text === "RULE_CONDITION" && condition.length === 2) {
					
					currentResultLineType = "other";
					currentResultLineContent = tows(ifFunction+"ConditionIsFalse", actionKw);

				} else {
					var compiledCondition = parse(condition);
					if (isWsFalse(compiledCondition)) {
						currentResultLineType = "optimized";
					} else if (isWsTrue(compiledCondition)) {
						currentResultLineType = "other";
						if (ifFunction === "_abortIf") {
							currentResultLineContent = tows("return", actionKw);
						} else {
							currentResultLineContent = tows("_loop", actionKw);
						}
					} else {
						currentResultLineType = "other";
						currentResultLineContent = tows(ifFunction, actionKw)+"("+compiledCondition+")";
					}
				}
				skipNextLine = true;

				
			} else {
				currentResultLineType = "if";
				currentResultLineCondition = parse(condition, {invertCondition: true, isCondition: true});

			}

			if (lines[i].tokens[0].text === "elif") {
				if (resultLines[resultLines.length-1].indentLevel <= lines[i].indentLevel) {
					resultLines.push({
						type: "fakeghostelse",
						indentLevel: lines[i].indentLevel,
						fileStack: fileStack,
					})
				} else {
					resultLines.push({
						type: "fakeelse",
						indentLevel: lines[i].indentLevel,
						fileStack: fileStack,
					})
				}
			}

		//Check for "else"
		} else if (lines[i].tokens[0].text === "else") {
			
			if (lines[i].tokens.length !== 2 || lines[i].tokens[1].text !== ':') {
				error("Else instruction must be 'else:'");
			}

			if (i === 0) {
				error("Found 'else', but no 'if'");
			} else if (resultLines[resultLines.length-1].indentLevel <= lines[i].indentLevel) {
				//If this is the case, then there is no need to replace the else for a "skip" as the previous if wasn't inverted.
				currentResultLineType = "ghostelse";
			} else {
				currentResultLineType = "else";
			}

		//Check for "switch"
		} else if (lines[i].tokens[0].text === "switch") {

			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("Switch instruction must end with ':'");
			} else if (lines[i].tokens.length <= 2) {
				error("Malformed switch");
			}

			currentResultLineType = "switch";
			currentResultLineSwitch = parse(lines[i].tokens.slice(1, lines[i].tokens.length-1));

		} else if (lines[i].tokens[0].text === "case") {
			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("Case instruction must end with ':'");
			} else if (lines[i].tokens.length <= 2) {
				error("Malformed case");
			}

			currentResultLineType = "case";
			currentResultLineCase = parse(lines[i].tokens.slice(1, lines[i].tokens.length-1));
		} else if (lines[i].tokens[0].text === "default") {
			
			if (lines[i].tokens.length !== 2 || lines[i].tokens[1].text !== ':') {
				error("Default instruction must be 'default:'");
			}
			currentResultLineType = "case";
			currentResultLineCase = "__default__";


		} else if (lines[i].tokens[0].text === "break") {
			if (lines[i].tokens.length !== 1) {
				error("Malformed break statement");
			}
			currentResultLineType = "break";

		//Check for "for"
		} else if (lines[i].tokens[0].text === "for") {
			if (lines[i].tokens[lines[i].tokens.length-1].text !== ':') {
				error("For instruction must end with ':'");
			}
			
			var inOperands = splitTokens(lines[i].tokens.slice(1, lines[i].tokens.length-1), "in", false);
			if (inOperands.length !== 2) {
				error("For instruction must contain 'in'");
			} else if (inOperands[0].length !== 1) {
				error("There can only be 1 token between 'for' and 'in'");
			}
			var forVarName = inOperands[0][0].text;
			if (forLoopVariables[forVarName] !== undefined) {
				error("Variable "+forVarName+" is already used");
			}
			forLoopVariables[forVarName] = inOperands[1];
			//Check amount of lines
			var forIndent = lines[i].indentLevel;
			var j = i+1;
			for (; j < lines.length && lines[j].indentLevel > forIndent; j++);
			if (j === i) {
				error("For loop contains no instructions");
			}
			forLoopTimers.push([j, forVarName]);

			currentResultLineType = "forloop";
			
		//Check for "while"
		} else if (lines[i].tokens[0].text === "while") {

			if (!wasWaitEncountered) {
				error("Found 'while' without a 'wait' before it");
			}
			if (nbDo === 0) {
				error("Found 'while' without matching 'do'");
			}
			nbDo--;

			if (lines[i].tokens.length === 1) {
				error("While what?");
			}
			if (lines[i].tokens[lines[i].tokens.length-1].text === ":") {
				error("While statement must not end by a colon");
			}
			if (lines[i].tokens[1].text === "true" && lines[i].tokens.length === 2) {
				currentResultLineType = "other";
				currentResultLineContent = tows("_loop", actionKw);

			} else {
				if (lines[i].tokens[1].text === "RULE_CONDITION") {
					currentResultLineType = "other";
					currentResultLineContent = tows("_loopIfConditionIsTrue", actionKw);

				} else if (lines[i].tokens[1].text === "not" && lines[i].tokens[2].text === "RULE_CONDITION") {
					currentResultLineType = "other";
					currentResultLineContent = tows("_loopIfConditionIsFalse", actionKw);

				} else {
					var compiledCondition = parse(lines[i].tokens.slice(1));
					if (isWsFalse(compiledCondition)) {
						currentResultLineType = "optimized";
					} else if (isWsTrue(compiledCondition)) {
						currentResultLineType = "other";
						currentResultLineContent = tows("_loop", actionKw);
					} else {
						currentResultLineType = "other";
						currentResultLineContent = tows("_loopIf", actionKw)+"("+compiledCondition+")";
					}
				}
			}

		//Check goto
		} else if (lines[i].tokens[0].text === 'goto') {
			if (lines[i].tokens.length < 2) {
				error("Malformed goto");
			}
			
			//Check if the goto is of the form "goto loc+xxx"
			if (lines[i].tokens[1].text === "loc") {
				skipOffset = parse(lines[i].tokens.slice(3));

				var compiledCondition = parse(condition);
				if (isWsFalse(compiledCondition) || isWs0(skipIfOffset)) {
					currentResultLineType = "optimized";
				} else if (isWsTrue(compiledCondition)) {
					currentResultLineType="other";
					currentResultLineContent = tows("_skip", actionKw)+"("+skipIfOffset+")";
				} else {
					currentResultLineType="other";
					currentResultLineContent = tows("_skipIf", actionKw)+"("+compiledCondition+", "+skipIfOffset+")";
				}

			} else {
				var label = lines[i].tokens[1].text;
				currentResultLineType = "skip";
				currentResultLineLabel = label;
			}

		//Check for del
		} else if (lines[i].tokens[0].text === 'del') {
						
			if (lines[i].tokens[lines[i].tokens.length-1].text !== ']') {
				error("Del keyword must be followed by an array membership");
			}
			
			var bracketPos = getTokenBracketPos(lines[i].tokens);
			
			var variable = lines[i].tokens.slice(1, bracketPos[bracketPos.length-2])
			var member = lines[i].tokens.slice(bracketPos[bracketPos.length-2]+1, lines[i].tokens.length-1)
			
			debug("Parsing del keyword with var = '"+dispTokens(variable)+"' and member = '"+dispTokens(member)+"'");
			
			currentResultLineType = "other";
			currentResultLineContent = parseAssignment(variable, member, true, "_removeFromArrayByIndex");
			
		//Check for label
		} else if (lines[i].tokens[lines[i].tokens.length-1].text === ':') {
			if (lines[i].tokens.length !== 2) {
				error("Incorrectly formatted label");
			}
			var label = lines[i].tokens[0].text;
			currentResultLineType = "label";
			currentResultLineLabel = label;

		//Any other instruction
		} else {
			currentResultLineContent = parse(lines[i].tokens, {"isWholeInstruction":true});
			if (currentResultLineContent.length > 0) {
				currentResultLineType = "other";
			} else {
				currentResultLineType = "optimized";
			}
		}

		resultLines.push({
			type: currentResultLineType,
			condition: currentResultLineCondition,
			switch: currentResultLineSwitch,
			case: currentResultLineCase,
			content: currentResultLineContent,
			label: currentResultLineLabel,
			indentLevel: lines[i].indentLevel,
			fileStack: lines[i].tokens[0].fileStack,
		});

		if (currentResultLineType === "switch") {
			//add an useless instruction cause no skip(0)
			resultLines.push({
				type: "other",
				content: tows("_disabled", ruleKw)+" "+tows("return", actionKw),
				indentLevel: lines[i].indentLevel+4,
				fileStack: lines[i].tokens[0].fileStack,
			});
		}

		//Check for loop var timer
		//console.log(forLoopTimers);
		//console.log(i);
		for (var j = 0; j < forLoopTimers.length; j++) {
			if (forLoopTimers[j][0] === i+1) {
				delete forLoopVariables[forLoopTimers[j][1]];
			}
		}

		if (skipNextLine) {
			i++;
		}
	}

	lines = undefined;
	var result = "";

	function getNbLinesForType(type) {
		if (["label", "ghostelse", "fakeghostelse", "forloop", "optimized", "case"].includes(type)) {
			return 0;
		} else {
			return 1;
		}
	}

	//Then, do a second pass to handle the "if"s.
	//Go in reverse, to be able to optimize away "skip 0" and still calculate the correct length.
	for (var i = resultLines.length-1; i >= 0; i--) {

		fileStack = resultLines[i].fileStack;

		if (resultLines[i].type === "other") {
			result = tabLevel(2)+resultLines[i].content+";\n"+result;

			if (i > 0 && (resultLines[i-1].type === "other" || resultLines[i-1].type === "skip" || resultLines[i-1].type === "label")) {
				if (resultLines[i].indentLevel > resultLines[i-1].indentLevel) {
					error("Unexpected indent or unreachable code");
				}
			}

		} else if (["label", "ghostelse", "fakeghostelse", "forloop", "optimized", "case"].includes(resultLines[i].type)) {
			//do nothing

		} else if (resultLines[i].type === "if") {
			
			var gotoOffset = 0;
			var j = i+1;

			//Get number of indented lines within the if
			for (; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++) {
				gotoOffset += getNbLinesForType(resultLines[j].type);
			}

			if (j < resultLines.length && (resultLines[j].type === "else" || resultLines[j].type === "fakeelse")) {
				gotoOffset++;
			}

			var compiledCondition = resultLines[i].condition;

			if (isWsFalse(compiledCondition) || gotoOffset === 0) {
				//Optimize away
				resultLines[i].type = "optimized";
			} else if (isWsTrue(compiledCondition)) {
				result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;
			} else {
				result = tabLevel(2)+tows("_skipIf", actionKw)+"("+resultLines[i].condition+", "+gotoOffset+");\n"+result;
			}

		} else if (resultLines[i].type === "skip" || resultLines[i].type === "skipif") {
			
			var gotoOffset = 0;
			var foundLabel = false;
			
			for (var j = i+1; j < resultLines.length; j++) {
				gotoOffset += getNbLinesForType(resultLines[j].type);
				if (resultLines[j].type === "label" && resultLines[j].label === resultLines[i].label) {
					foundLabel = true;
					break;
				}
			}

			if (!foundLabel) {
				error("Could not find label "+label);
			}

			var compiledCondition = resultLines[i].type === "skipif" ? resultLines[i].condition : wsTrue;

			if (isWsFalse(compiledCondition) || gotoOffset === 0) {
				//Optimize away
				resultLines[i].type = "optimized";
			} else if (isWsTrue(compiledCondition)) {
				result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;
			} else {
				result = tabLevel(2)+tows("_skipIf", actionKw)+"("+resultLines[i].condition+", "+gotoOffset+");\n"+result;
			}

		} else if (resultLines[i].type === "else") {
			
			//Get number of indented lines within the else
			var gotoOffset = 0;
			for (var j = i+1; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++) {
				gotoOffset += getNbLinesForType(resultLines[j].type);
			}

			if (gotoOffset === 0) {
				error("Else instruction must have at least one sub-instruction");
			}

			result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;


		} else if (resultLines[i].type === "fakeelse") {
			
			var gotoOffset = 0;

			//If the line following the "fake else" is "other" then it's a special elif.
			if (resultLines[i+1].type === "other") {
				gotoOffset++;
			}

			//Go to the end of the elif/else chain.
			//Stop when encountering a line which type is not "else", or preceded by a "fakeelse", that is not on a greater indentation level than the current line.
			for (var j = i+1+gotoOffset; j < resultLines.length; j++) {
				console.log(resultLines[j]);
				if (resultLines[j].indentLevel <= resultLines[i].indentLevel 
						&& resultLines[j-1].type !== "fakeelse" 
						&& resultLines[j-1].type !== "fakeghostelse" 
						&& resultLines[j].type !== "else" 
						&& resultLines[j].type !== "fakeelse" 
						&& resultLines[j].type !== "ghostelse"
						&& resultLines[j].type !== "fakeghostelse") {
					break;
				}
				gotoOffset += getNbLinesForType(resultLines[j].type);
			}

			if (gotoOffset === 0) {
				error("Parser broke (offset for fake else is 0)");
			}
			result = tabLevel(2)+tows("_skip", actionKw)+"("+gotoOffset+");\n"+result;
			
		} else if (resultLines[i].type === "switch") {
			var caseOffsets = [];
			var caseValues = [];
			var currentCaseOffset = 0;
			var wasDefaultEncountered = false;

			if (i === resultLines.length-2 || resultLines[i+2].type !== "case") {
				error("A switch must be followed by a 'case' or 'default' instruction");
			}

			for (var j = i+1; j < resultLines.length && resultLines[j].indentLevel > resultLines[i].indentLevel; j++) {
				if (resultLines[j].type === "case") {
					if (resultLines[j].case === "__default__") {
						if (wasDefaultEncountered) {
							error("The 'default' case was already declared in the switch");
						} else {
							wasDefaultEncountered = true;
						}
						caseOffsets.unshift(currentCaseOffset);

					} else {
						if (caseValues.includes(resultLines[j].case)) {
							error("This case is already declared in the switch");
						}
						caseOffsets.push(currentCaseOffset);
						caseValues.push(resultLines[j].case);

					}

				} else {
					currentCaseOffset += getNbLinesForType(resultLines[j].type);
				}
			}

			if (caseValues.length === 0) {
				error("Switch does not contain cases");
			}
			if (!wasDefaultEncountered) {
				caseOffsets.unshift(currentCaseOffset);
			}

			//[caseOffsets][[caseValues].index(switchValue)+1]
			var switchResult = tows("_valueInArray", valueFuncKw)+"(";
			var caseOffsetsResult = tows("_emptyArray", valueFuncKw);
			var appendFunc = tows("_appendToArray", valueFuncKw);
			for (var caseOffset of caseOffsets) {
				caseOffsetsResult = appendFunc+"("+caseOffsetsResult+", "+caseOffset+")";
			}
			switchResult += caseOffsetsResult+", "+tows("_add", valueFuncKw)+"(1, "+tows("_indexOfArrayValue", valueFuncKw)+"(";
			var caseValuesResult = tows("_emptyArray", valueFuncKw);
			for (var caseValue of caseValues) {
				caseValuesResult = appendFunc+"("+caseValuesResult+", "+caseValue+")";
			}
			switchResult += caseValuesResult + ", "+resultLines[i].switch+")))";

			result = tabLevel(2)+tows("_skip", actionKw)+"("+switchResult+");\n"+result;

		} else if (resultLines[i].type === "break") {
			var breakOutOfSwitch = false;
			var switchIndentLevel = 0;
			var breakOffset = 0;

			//If the indentation level is 0, it cannot be within a switch.
			if (resultLines[i].indentLevel === 0) {
				breakOutOfSwitch = false;

			} else {
				//Go up until we encounter a switch statement
				for (var j = i-1; j >= 0; j--) {
					if (resultLines[j].type === "switch") {
						breakOutOfSwitch = true;
						switchIndentLevel = resultLines[j].indentLevel;
						break;
					}
				}
			}

			if (breakOutOfSwitch) {
				console.log("finding end of switch, indent level = "+switchIndentLevel);
				//Go down until we find the end of the switch
				for (var j = i+1; j < resultLines.length && resultLines[j].indentLevel > switchIndentLevel; j++) {
					breakOffset += getNbLinesForType(resultLines[j].type);
				}

			} else {
				//Go down until we find a "while"
				var loopWs = tows("_loop", actionKw);
				var loopIfWs = tows("_loopIf", actionKw);
				var foundWhile = false;
				for (var j = i+1; j < resultLines.length; j++) {
					breakOffset += getNbLinesForType(resultLines[j].type);
					if (resultLines[j].type === "other" && (resultLines[j].content.startsWith(loopWs) || resultLines[j].content.startsWith(loopIfWs))) {
						foundWhile = true;
						break;
					}
				}
				if (!foundWhile) {
					error("Found 'break', but no switch or loop to break out of");
				}

			}

			if (breakOffset === 0) {
				resultLines[i].type = "optimized";
			} else {
				result = tabLevel(2)+tows("_skip", actionKw)+"("+breakOffset+");\n"+result;
			}

		} else {
			error("Unhandled rule line type "+resultLines[i].type);
		}
	}
	
	return result;
}

/*
The main parse function.

parseArgs options:

- "invertCondition": true/false
- "raycastType": "getHitPosition"|"getNormal"|"getPlayerHit"|"hasLoS"
- "isWholeInstruction": true/false
- "isLocalizedString": true/false
- "isTranslationOfForLoopVariable": string
- "formatArgs": token array
*/
function parse(content, parseArgs={}) {
	
	if (content === undefined) {
		error("Content is undefined");
	} else if (content.length === 0) {
		error("Content is empty (missing operand or argument?)");
	}
	
	fileStack = content[0].fileStack;
	if (parseArgs.invertCondition === true) {
		//add "not(...)"
		content.unshift({text: "(",});
		content.unshift({text: "not"});
		content.push({text: ")"});
	}
	
	debug("Parsing '"+dispTokens(content)+"'");
	
	//Parse operators
	for (var i = 0; i < pyOperators.length; i++) {
		
		if (pyOperators[i] === "not" || pyOperators[i] === "if") {
			var operands = splitTokens(content, pyOperators[i], false, false);
		} else {
			var operands = splitTokens(content, pyOperators[i], false, true);
		}
		if (operands.length === 2) {
			
			//The operator is present; parse it
			if (pyOperators[i] === "=") {
				return parseAssignment(operands[0], operands[1], false);
			} else if (pyOperators[i] === "if") {
				
				var trueExpr = parse(operands[0]);
				var elseOperands = splitTokens(operands[1], "else", false, false);
				if (elseOperands.length !== 2) {
					error("Found 'if', but no 'else'");
				}
				var falseExpr = parse(elseOperands[1]);
				var condition = parse(elseOperands[0]);

				//A if true else B -> A
				if (isWsTrue(condition)) {
					return trueExpr;
				}
				//A if false else B -> B
				if (isWsFalse(condition)) {
					return falseExpr;
				}
				//A if condition else A -> A
				if (trueExpr === falseExpr && !containsRandom(trueExpr)) {
					return trueExpr;
				}
				//A if condition else B -> [B,A][1*not condition]
				return tows("_valueInArray", valueFuncKw)+"("+tows("_appendToArray", valueFuncKw)+"("+tows("_appendToArray", valueFuncKw)+"("+tows("_emptyArray", valueFuncKw)+", "+trueExpr+"), "+falseExpr+"), "+tows("_multiply", valueFuncKw)+"(1, "+tows("not", valueFuncKw)+"("+condition+")))";

			} else if (pyOperators[i] === "or") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//A or false = false or A = A
				if (isWsFalse(op1)) {
					return op2;
				}
				if (isWsFalse(op2)) {
					return op1;
				}
				//A or true = true or A = true
				if (isWsTrue(op1)) {
					return op1;
				}
				if (isWs1(op2)) {
					return wsTrue;
				}
				//A or A = A
				if (op1 === op2 && !containsRandom(op1)) {
					return op1;
				}
				//A or not A = not A or A = true
				if ((op1 === wsNot+"("+op2+")" || wsNot+"("+op1+")" === op2) && !containsRandom(op1)) {
					return wsTrue;
				}

				return tows("_or", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "and") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//A and true = true and A = A
				if (isWsTrue(op1)) {
					return op2;
				}
				//Here, we do not use isWsTrue but isWs1 (strictly true) because "A and 3" returns 3 if A is true.
				if (isWs1(op2)) {
					return op1;
				}
				//A and false = false and A = false
				if (isWsFalse(op1) || isWsFalse(op2)) {
					return wsFalse;
				}
				//A and A = A
				if (op1 === op2 && !containsRandom(op1)) {
					return op1;
				}
				//A and not A = not A and A = true
				if ((op1 === wsNot+"("+op2+")" || wsNot+"("+op1+")" === op2) && !containsRandom(op1)) {
					return wsFalse;
				}
				return tows("_and", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "not") {

				var op1 = parse(operands[1]);

				//not true = false
				if (isWsTrue(op1)) {
					return wsFalse;
				}
				//not false = true
				if (isWsFalse(op1)) {
					return wsTrue;
				}
				//not not A = A
				if (op1.startsWith(wsNot+"(")) {
					return op1.substring((wsNot+"(").length, op1.length-1);
				}
				return tows("not", valueFuncKw)+"("+op1+")";

			} else if (pyOperators[i] === "in") {
				return tows("_arrayContains", valueFuncKw)+"("+parse(operands[1])+", "+parse(operands[0])+")";
			} else if (pyOperators[i] === "==" || pyOperators[i] === '!=' || pyOperators[i] === '<=' || pyOperators[i] === '>=' || pyOperators[i] === '<' || pyOperators[i] === '>' ) {
				var pyOperator = pyOperators[i];
				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				if (pyOperator === "==") {
					//A == A = true
					if (op1 === op2 && !containsRandom(op1)) {
						return wsTrue;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) == parseFloat(op2));
					}
				} else if (pyOperator === "!=") {
					//A != A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsFalse;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) != parseFloat(op2));
					}
				} else if (pyOperator === ">") {
					//A > A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsFalse;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) > parseFloat(op2));
					}
				} else if (pyOperator === "<") {
					//A < A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsFalse;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) < parseFloat(op2));
					}
				} else if (pyOperator === ">=") {
					//A >= A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsTrue;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) >= parseFloat(op2));
					}
				} else if (pyOperator === "<=") {
					//A <= A = false
					if (op1 === op2 && !containsRandom(op1)) {
						return wsTrue;
					} else if (isNumber(op1) && isNumber(op2)) {
						return boolToWs(parseFloat(op1) <= parseFloat(op2));
					}
				}

				return tows("_compare", valueFuncKw)+"("+op1+", "+pyOperator+", "+op2+")";
			} else if (pyOperators[i] === "+=") {
				//A += 0 -> nothing
				if (isWs0(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_add");
			} else if (pyOperators[i] === "-=") {
				//A -= 0 -> nothing
				if (isWs0(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_subtract");
			} else if (pyOperators[i] === "*=") {
				//A *= 1 -> nothing
				if (isWs1(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_multiply");
			} else if (pyOperators[i] === "/=") {
				//A /= 1 -> nothing
				if (isWs1(parse(operands[1]))) {
					return "";
				}
				return parseAssignment(operands[0], operands[1], true, "_divide");
			} else if (pyOperators[i] === "%=") {
				return parseAssignment(operands[0], operands[1], true, "_modulo");
			} else if (pyOperators[i] === "**=") {
				return parseAssignment(operands[0], operands[1], true, "_raiseToPower");
			} else if (pyOperators[i] === "min=") {
				return parseAssignment(operands[0], operands[1], true, "_min");
			} else if (pyOperators[i] === "max=") {
				return parseAssignment(operands[0], operands[1], true, "_max");
			} else if (pyOperators[i] === "++") {
				return parseAssignment(operands[0], [{"text":"1"}], true, "_add");
			} else if (pyOperators[i] === "--") {
				return parseAssignment(operands[0], [{"text":"1"}], true, "_subtract");
			} else if (pyOperators[i] === "/") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb/nb
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)/parseFloat(op2));
				}
				//A/0 = 0/A = 0
				if (isWs0(op1) || isWs0(op2)) {
					return "0";
				}
				//A/1 = A
				if (isWs1(op2)) {
					return op1;
				}
				
				return tows("_divide", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "*") {

				var op1 = parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb*nb
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)*parseFloat(op2));
				}
				//A*0 = 0*A = 0
				if (isWs0(op1) || isWs0(op2)) {
					return "0";
				}
				//A*1 = 1*A = A
				if (isWs1(op1)) {
					return op2;
				}
				if (isWs1(op2)) {
					return op1;
				}
				//A*A = A**2
				//Do not do this because of the weird behavior with negative numbers to power.
				//Eg (-1)*(-1) = 1 but (-1)**2 = 0.
				/*if (op1 === op2 && !containsRandom(op1)) {
					return tows("_raiseToPower", valueFuncKw)+"(2, "+op1+")";
				}*/
				
				return tows("_multiply", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "%") {
				return tows("_modulo", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "**") {
				return tows("_raiseToPower", valueFuncKw)+"("+parse(operands[0])+", "+parse(operands[1])+")";
			} else if (pyOperators[i] === "-") {
				
				//Handle things like "3*-5" by checking if the 1st operand ends by another operator
				if (operands[0].length > 0 && ["*", "/", "%"].includes(operands[0][operands[0].length-1].text)) {
					continue;
				}

				//A - -B -> A+B
				if (operands[0].length > 0 && operands[0][operands[0].length-1].text === "-") {
					return parse(operands[0].slice(0, operands[0].length-1).concat([{"text":"+"}]).concat(operands[1]));
				}

				var op1 = operands[0].length === 0 ? "0" : parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb-nb
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)-parseFloat(op2));
				}
				//A-0 = A
				if (isWs0(op2)) {
					return op1;
				}
				//A-A = 0
				if (op1 === op2 && !containsRandom(op1)) {
					return "0";
				}

				return tows("_subtract", valueFuncKw)+"("+op1+", "+op2+")";

			} else if (pyOperators[i] === "+") {

				var op1 = operands[0].length === 0 ? "0" : parse(operands[0]);
				var op2 = parse(operands[1]);

				//pre-calculate nb+nb
				 
				if (isNumber(op1) && isNumber(op2)) {
					return trimNb(parseFloat(op1)+parseFloat(op2));
				}
				//A+0 = 0+A = A
				if (isWs0(op1)) {
					return op2;
				}
				if (isWs0(op2)) {
					return op1;
				}
				//A+A = 2*A
				if (op1 === op2 && !containsRandom(op1)) {
					return tows("_multiply", valueFuncKw)+"(2, "+op1+")";
				}

				return tows("_add", valueFuncKw)+"("+op1+", "+op2+")";

			} else {
				error("Unhandled operator "+pyOperators[i]);
			}
			
			break;
			
		}
	}
	
	
	//Check for literal number
	var nbTest = dispTokens(content).replace(/ /g, "")
	if (!isNaN(nbTest)) {
		return trimNb(nbTest);
	}
		
	//Parse array
	if (content[content.length-1].text === ']') {
		var bracketPos = getTokenBracketPos(content);
		
		if (bracketPos.length === 2 && bracketPos[0] === 0) {
			
			return parseLiteralArray(content);
		} else {
			return parseArrayMembership(content.slice(0, bracketPos[bracketPos.length-2]), content.slice(bracketPos[bracketPos.length-2]+1, content.length-1));
		}
	}

	//Dictionaries aren't allowed without array indexes
	if (content[0].text === "{") {
		error("Cannot use a dictionary without accessing it");
	}
	
	
	//Check for "." operator, which has the highest precedence.
	//It must be parsed from right to left.
	var operands = splitTokens(content, ".", false, true);
	if (operands.length === 2) {
		return parseMember(operands[0], operands[1], parseArgs);
	}
	
	//Check for parentheses
	if (content[0].text === '(') {
		return parse(content.slice(1, content.length-1));
	}

	//Check for strings
	if (content[content.length-1].text.startsWith('"') || content[content.length-1].text.startsWith("'")) {
		var stringModifiers = {};
		var string = "";
		for (var i = content.length-1; i >= 0; i--) {
			if (content[i].text.startsWith('"') || content[i].text.startsWith("'")) {
				string = content[i].text.substring(1, content[i].text.length-1)+string;

			} else {
				if (i === 0) {
					//string modifier?
					if (content[0].text === "l") {
						stringModifiers.localizedString = true;
					} else if (content[0].text === "b") {
						stringModifiers.bigLetters = true;
					} else if (content[0].text === "w") {
						stringModifiers.fullWidth = true;
					} else {
						error("Invalid string modifier '"+content[0].text+"', valid ones are 'l' (localized), 'b' (big letters) and 'w' (fullwidth)");
					}
				} else {
					error("Syntax error: expected string or string modifier");
				}
			}
		}

		if (stringModifiers.localizedString === true) {
			return parseLocalizedString(tokenizeLocalizedString(string), parseArgs.formatArgs);
		} else {
			return parseString(string, parseArgs.formatArgs, stringModifiers);
		}
	}

	
	//Parse args and name of function.
	var name = content[0].text;
	var args = null;
	if (content.length > 1) {
		if (content[1].text === '(') {
			args = splitTokens(content.slice(2, content.length-1), ",");
		} else if (content[1].text === '[') {
			return parseArrayMembership(content);
		} else {
			error("Syntax error: expected '(' or '[' after '"+name+"'");
		}
	}

	if (args === null) {

		//Check for "continue"
		if (name === "continue") {
			return tows("_loop", actionKw);
		}

		//Check for current array element variable name
		if (currentArrayElementNames.indexOf(name) >= 0) {
			return tows("_currentArrayElement", valueFuncKw);
		}

		//Check for for loop variable name
		if (forLoopVariables[name] !== undefined && parseArgs.isTranslationOfForLoopVariable !== name) {
			//console.log(forLoopVariables[content[0].text]);
			return parse(forLoopVariables[name], {isTranslationOfForLoopVariable: name});
		}

		//Check if it is legal to use the event variables.
		if (name === "eventPlayer") {
			if (!(["eachPlayer", "playerJoined", "playerLeft", "playerEarnedElimination", "playerDealtDamage", "playerTookDamage", "playerDealtFinalBlow", "playerDied", "playerDealtHealing", "playerReceivedHealing"].includes(currentRuleEvent))) {
				error("Cannot use 'eventPlayer' with event type '"+currentRuleEvent+"'");

			} else if (!(["eachPlayer", "playerJoined", "playerLeft"].includes(currentRuleEvent))) {
				warn("w_unsuitable_event", "Use of 'eventPlayer' with event type '"+currentRuleEvent+"' is ambiguous. Use 'attacker' or 'victim' instead.")
			}

		} else if ((name === "attacker" || name === "victim" || name === "eventDamage" || name === "eventWasCriticalHit") && !(["playerEarnedElimination", "playerDealtDamage", "playerTookDamage", "playerDealtFinalBlow", "playerDied"].includes(currentRuleEvent))) {
			error("Cannot use '"+name+"' with event type '"+currentRuleEvent+"'");

		} else if ((name === "healer" || name === "healee" || name === "eventHealing") && !(["playerDealtHealing", "playerReceivedHealing"].includes(currentRuleEvent))) {
			error("Cannot use '"+name+"' with event type '"+currentRuleEvent+"'");

		}

		try {
			return tows(name, funcKw);
		} catch (e) {
			//No translation found? Must be a global variable.
			//encounteredGlobalVars.add(name);
			return tows("_globalVar", valueFuncKw)+"("+translateVarToWs(name, true)+")";
		}
	}

	
	var str = "args: "
	for (var i = 0; i < args.length; i++) {
		str += "'"+dispTokens(args[i])+"'";
		if (i < args.length-1) {
			str += ", ";
		}
	}
	debug(str);
	
	
	//Special functions
	
	if (name === "all" || name === "any") {
		var result = tows("_"+name, valueFuncKw)+"(";
		
		if (args[0][0].text !== "[" || args[0][args[0].length-1].text !== "]") {
			error(name+" function must have [x == y for x in z] as argument (no literal array found)")
		}
		
		var forArgs = splitTokens(args[0].slice(1, args[0].length-1), "for");
		if (forArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'for' found)")
		}
		
		var inArgs = splitTokens(forArgs[1], "in", false);
		if (inArgs.length !== 2) {
			error(name+" function must have [x == y for x in z] as argument (no 'in' found)")
		}
		result += parse(inArgs[1]) + ", ";
		currentArrayElementNames.push(inArgs[0][0].text);
		result += parse(forArgs[0])
		currentArrayElementNames.pop();
		result += ")";
		return result;
	}
	
	if (name === "ceil") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundUp", getConstantKw("ROUNDING TYPE"))+")";
	}
	
	if (name === "chase") {
		
		var funcName = "_chase";
		var result = "";
		
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[0])+", ";
			//encounteredPlayerVars.add(operands[1][0].text);
			result += translateVarToWs(operands[1][0].text, false);
		} else {
			funcName += "GlobalVariable";
			//encounteredGlobalVars.add(args[0][0].text);
			result += translateVarToWs(args[0][0].text, true);
		}
		
		if (args.length !== 4) {
			error("Chase function must have 4 arguments");
		} else if ((args[2][0].text !== "rate" && args[2][0].text !== "duration") || args[2][1].text !== "=") {
			error("3rd argument of chase must be 'rate = xxxx' or 'duration = xxxx'");
		}
		
		if (args[2][0].text === "rate") {
			funcName += "AtRate";
		} else {
			funcName += "OverTime";
		}
		
		return tows(funcName, actionKw)+"("+result+", "+parse(args[1])+", "+parse(args[2].slice(2))+", "+parse(args[3])+")";
	}

	if (name === "debug") {
		//probably the longest line of code in all this codebase
		return tows("_hudText", actionKw)+"("+tows("getPlayers", valueFuncKw)+"("+tows("Team.ALL", getConstantKw("TEAM CONSTANT"))+"), "+parse(args[0])+", "+tows("null", valueFuncKw)+", "+tows("null", valueFuncKw)+", "+tows("Position.LEFT", getConstantKw("HUD LOCATION"))+", 0, "+tows("Color.ORANGE", getConstantKw("COLOR"))+", "+tows("Color.WHITE", getConstantKw("COLOR"))+", "+tows("Color.WHITE", getConstantKw("COLOR"))+", "+tows("HudReeval.VISIBILITY_AND_STRING", getConstantKw("HUD TEXT REEVALUATION"))+", "+tows("SpecVisibility.ALWAYS", getConstantKw("SPECTATOR VISIBILITY"))+")";
	}
	
	if (name === "floor") {
		return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundDown", getConstantKw("ROUNDING TYPE"))+")";
	}

	if (name === "hudHeader" || name === "hudText" || name === "hudSubheader" || name === "hudSubtext") {
		if (name !== "hudText" && (args.length < 6 || args.length > 7)) {
			error("Function "+name+" takes 6 or 7 arguments, received "+args.length);
		} else if (name === "hudText" && (args.length < 10 || args.length > 11)) {
			error("Function "+name+" takes 9 or 10 arguments, received "+args.length);
		}
		var defaultColor = [
			{text: "Color"},
			{text: "."},
			{text: "WHITE"}
		];
		var opynull = [{
			text: "null",
		}]
		if (name === "hudHeader") {
			args.splice(2, 0, opynull);
			args.splice(3, 0, opynull);

			args.splice(7, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudSubheader") {
			args.splice(1, 0, opynull);
			args.splice(3, 0, opynull);

			args.splice(6, 0, defaultColor);
			args.splice(8, 0, defaultColor);
		} else if (name === "hudSubtext") {
			args.splice(1, 0, opynull);
			args.splice(2, 0, opynull);

			args.splice(6, 0, defaultColor);
			args.splice(7, 0, defaultColor);
		}
		if (args.length === 10) {
			//Add the spectator visibility
			args.push([
				{text: "SpecVisibility"},
				{text: "."},
				{text: "DEFAULT"},
			])
		}
		name = "_hudText";
		//go on to treat it as a normal function
	}

	if (name === "getAllPlayers") {
		return tows("getPlayers", valueFuncKw)+"("+tows("Team.ALL", getConstantKw("TEAM CONSTANT"))+")";
	}

	if (name === "getMapId") {
		error("getMapId() has been removed; use getCurrentMap().");
	}

	if (name === "getSign") {
		if (args.length !== 1) {
			error("Function getSign() takes one argument, received "+args.length);
		} else {
			//(((x)>0)-((x)<0))
			return parse([{"text":"("},{"text":"("},{"text":"("}].concat(args[0]).concat([{"text":")"},{"text":">"},{"text":"0"},{"text":")"},{"text":"-"},{"text":"("},{"text":"("}].concat(args[0]).concat([{"text":")"},{"text":"<"},{"text":"0"},{"text":")"},{"text":")"}])));
		}
	}

	if (name === "localizedStr") {
		error("localizedStr() has been removed, use the 'l' string modifier instead.");
	}
	
	if (name === "round") {
		if (args.length !== 1) {
			error("round() only takes one argument, you maybe meant to use ceil() or floor().");
		} else {
			return tows("_round", valueFuncKw)+"("+parse(args[0])+", "+tows("_roundToNearest", getConstantKw("ROUNDING TYPE"))+")";
		}
	}
	
	if (name === "raycast") {
		if (parseArgs.raycastType === undefined) {
			error("Raycast function must be followed by a member (eg. getHitPosition)");
		}
		
		if (parseArgs.raycastType === "getHitPosition" || parseArgs.raycastType === "getPlayerHit" || parseArgs.raycastType === "getNormal") {
			var result = tows("_"+parseArgs.raycastType, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			
			if (args[2][0].text !== "include" || args[2][1].text !== "=") {
				error("3rd arg for this raycast must be 'include = xxxx'");
			} else if (args[3][0].text !== "exclude" || args[3][1].text !== "=") {
				error("4th arg for this raycast must be 'exclude = xxxx'");
			} else if (args[4][0].text !== "includePlayerObjects" || args[4][1].text !== "=") {
				error("5th arg for this raycast must be 'includePlayerObjects = xxxx'");
			}
			
			result += parse(args[2].slice(2))+", "+parse(args[3].slice(2))+", "+parse(args[4].slice(2))+")";
			return result;
		} else if (parseArgs.raycastType === "hasLoS") {
			var result = tows("_isInLineOfSight", valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+", ";
			if (args[2][0].text !== "los" || args[2][1].text !== "=") {
				error("3rd arg for line of sight check must be 'los = LosCheck.xxxx'");
			} 
			result += parse(args[2].slice(2))+")";
			return result;
		} else {
			error("Unknown raycast member '"+parseArgs.raycastType+"'");
		}
	}
	
	if (name === "sorted") {
		if (args.length !== 2) {
			error("sorted() takes 2 arguments");
		} else {
			
			var result = tows("_sortedArray", valueFuncKw)+"("+parse(args[0]);
			
			var lambdaArgs = splitTokens(args[1], ':');
			if (lambdaArgs.length !== 2 || lambdaArgs[0].length !== 4 || lambdaArgs[0][0].text !== "key" || lambdaArgs[0][1].text !== "=" || lambdaArgs[0][2].text !== "lambda") {
				error("Syntax for sorted array condition is 'key=lambda x: condition(x)'");
			}
			
			currentArrayElementNames.push(lambdaArgs[0][3].text);
			result += ", "+parse(lambdaArgs[1])+")";
			currentArrayElementNames.pop();
			return result;
			
		}
	}
	
	if (name === "stopChasingVariable") {
		
		var funcName = "_stopChasing";
		var result = "";
		

		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(args[0], ".", false, true);
		if (operands.length === 2) {
			funcName += "PlayerVariable";
			result += parse(operands[0])+", ";
			//encounteredPlayerVars.add(operands[1][0].text);
			result += translateVarToWs(operands[1][0].text, false);
		} else {
			funcName += "GlobalVariable";
			//encounteredGlobalVars.add(args[0][0].text);
			result += translateVarToWs(args[0][0].text, true);
		}
		
		return tows(funcName, actionKw)+"("+result+")";
	}
		
	
	if (name === "wait") {
		wasWaitEncountered = true;
		var result = tows("_wait", actionKw)+"(";
		if (args.length === 0) {
			result += "0.016, ";
		} else {
			result += parse(args[0])+", ";
		}
		if (args.length <= 1) {
			result += tows("Wait.IGNORE_CONDITION", getConstantKw("WAIT BEHAVIOR"))
		} else {
			result += parse(args[1]);
		}
		result += ")";
		return result;
	}
	
	//Handle functions with no arguments
	if (args.length === 0) {
		return tows(name+"()", funcKw);
	}
	
	//Default case (not a special function).
	var result = tows(name, funcKw, {nbArgs:args.length})+"(";
	for (var i = 0; i < args.length; i++) {
		result += parse(args[i]);
		if (i < args.length-1) {
			result += ", ";
		}
	}
	result += ")";
	return result;
	
}

//Parses localized string
function parseLocalizedString(content, formatArgs) {
	if (!content instanceof Array) {
		error("Content must be list of str");
	}
	if (!formatArgs) {
		formatArgs = [];
	}
	
	var matchStr;
	var tokens = [];
	var hasMatchBeenFound = false;
	
	debug("Parsing string '"+content+"'");
	
	//Test surround strings
	for (var j = 0; j < surroundStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = surroundStrKw[j].opy.substring(0, surroundStrKw[j].opy.indexOf("{0}")).toLowerCase();
		var token2 = surroundStrKw[j].opy.substring(surroundStrKw[j].opy.indexOf("{0}")+"{0}".length).toLowerCase();
		debug("Testing str match on '"+token1+"{0}"+token2+"'");
		if (content[0] === token1 && content[content.length-1] === token2) {
			hasMatchBeenFound = true;
			matchStr = tows(surroundStrKw[j].opy, surroundStrKw);
			//Note: it is assumed all surround strings have a length of only 1 character for each side.
			tokens.push(content.slice(1, content.length-1));
			break;
		}
		tokens = []
	}
	
	//Test ternary string
	for (var j = 0; j < ternaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase();
		var token2 = ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase();
		tokens = splitStrTokens(content, token1, token2);
		if (tokens.length === 3) {
			hasMatchBeenFound = true;
			matchStr = tows(ternaryStrKw[j].opy, ternaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test binary strings
	for (var j = 0; j < binaryStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase();
		var tokens = splitStrTokens(content, token1);
		if (tokens.length === 2) {
			hasMatchBeenFound = true;
			matchStr = tows(binaryStrKw[j].opy, binaryStrKw);
			break;
		}
		tokens = []
	}
	
	//Test prefix strings
	for (var j = 0; j < prefixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase();
		if (content[0] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(prefixStrKw[j].opy, prefixStrKw);
			tokens.push(splitStrTokens(content, token1)[1]);
			break;
		}
		tokens = []
	}
	
	//Test postfix strings
	for (var j = 0; j < postfixStrKw.length && !hasMatchBeenFound; j++) {
		var token1 = postfixStrKw[j].opy.substring("{0}".length).toLowerCase();
		if (content[content.length-1] === token1) {
			hasMatchBeenFound = true;
			matchStr = tows(postfixStrKw[j].opy, postfixStrKw);
			tokens.push(splitStrTokens(content, token1)[0]);
			break;
		}
		tokens = []
	}
	
	
	//Test normal strings
	if (content.length === 1) {
		for (var j = 0; j < normalStrKw.length && !hasMatchBeenFound; j++) {
			var token1 = normalStrKw[j].opy.toLowerCase();
			if (content[0] === token1) {
				hasMatchBeenFound = true;
				if (currentLanguage in normalStrKw[j]) {
					matchStr = normalStrKw[j][currentLanguage];
				} else {
					matchStr = normalStrKw[j]["en-US"];
				}
				break;
			}
		}
	}
	
	//Test for empty string
	if (!hasMatchBeenFound && (content.length === 0 || content[0] === "")) {
		hasMatchBeenFound = true;
		matchStr = "";
	}
	
	//Test if no token (probably not a string)
	if (tokens.length === 0 && !hasMatchBeenFound) {
		if (content.length !== 1) {
			error("Parser broke I guess? (content = '"+JSON.stringify(content)+"')");
		}
		
		if (content[0].startsWith("_h")) {
			return tows("_hero", valueFuncKw)+"("+tows("Hero."+content[0].substring(2).toUpperCase(), getConstantKw("HERO CONSTANT"))+")";
		} else if (!isNaN(content[0])) {
			return parse(content[0]);
		} else if (content[0] === "{}") {
			if (formatArgs.length === 0) {
				error("Too few arguments supplied for string");
			}
			var result = parse(formatArgs[0]);
			formatArgs.shift();
			return result;
			
		}
	}
	
	var result = tows("_localizedString", valueFuncKw)+"(\""+matchStr+'"';
	//debug("tokens = ")
	//console.log(tokens);
	
	for (var i = 0; i < 3; i++) {
		if (tokens.length > i) {
			result += ", "+parseLocalizedString(tokens[i], formatArgs);
		} else {
			result += ", "+tows("null", valueFuncKw);
		}
	}
	
	result += ")";
	return result;
	
}


//Parses membership (the "." operator).
function parseMember(object, member, parseArgs={}) {
	
	//debug("Parsing member "+dispTokens(member)+" of object "+dispTokens(object));
	
	var name = member[0].text;
	//debug("name = "+name);
	var args = null;
	if (member.length > 1) {
		if (member[1].text === '(') {
			args = splitTokens(member.slice(2, member.length-1), ",");
		} else {
			error("Invalid syntax (member function isn't followed by parenthesis)");
		}
	}

	if (args === null) {
		if (name === "x") {
			return tows("_xComponentOf", valueFuncKw)+"("+parse(object)+")";
		} else if (name === "y") {
			return tows("_yComponentOf", valueFuncKw)+"("+parse(object)+")";
		} else if (name === "z") {
			return tows("_zComponentOf", valueFuncKw)+"("+parse(object)+")";
			
		//Check enums
		} else if (Object.values(constantValues).map(x => x.opy).indexOf(object[0].text) >= 0) {
			var result = tows(object[0].text+"."+name, constantKw);
			if (object[0].text === "Hero") {
				result = tows("_hero", valueFuncKw)+"("+result+")";
			} else if (object[0].text === "Map") {
				result = tows("_map", valueFuncKw)+"("+result+")";
			} else if (object[0].text === "Gamemode") {
				result = tows("_gamemode", valueFuncKw)+"("+result+")";
			}
			return result;
		} else if (object[0].text === "math" && object.length === 1) {
			if (name === "pi") {
				return "3.14159265359";
			} else if (name === "e") {
				return "2.71828182846";
			} else {
				error("Unhandled member 'math."+name+"'");
			}
	
		} else if (object[0].text === "Vector") {
			return tows("Vector."+name, valueFuncKw);

		} else {
			//Should be a player variable.
			//encounteredPlayerVars.add(name);
			return tows("_playerVar", valueFuncKw)+"("+parse(object)+", "+translateVarToWs(name, false)+")";
		}
	} else {
	
		if (name === "append") {
			if (parseArgs.isWholeInstruction === true) {
				return parseAssignment(object, args[0], true, "_appendToArray");
				
			} else {
				return tows("_appendToArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
			}
			
		} else if (name === "exclude") {
			return tows("_removeFromArray", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
			
		} else if (name === "format") {
			return parse(object, {formatArgs: args});
			/*if (parseArgs.isLocalizedString === true) {
				var result = parseLocalizedString(tokenizeLocalizedString(object[0].text.substring(1, object[0].text.length-1)), args);
			} else {
				var result = parseString(object[0].text, args);
			}
			return result;*/
			
		} else if (name === "getHitPosition") {
			return parse(object, {raycastType:"getHitPosition"});
			
		} else if (name === "getNormal") {
			return parse(object, {raycastType:"getNormal"});
			
		} else if (name === "getPlayerHit") {
			return parse(object, {raycastType:"getPlayerHit"});
			
		} else if (name === "hasLoS") {
			return parse(object, {raycastType:"hasLoS"});
			
		} else if (name === "index") {
			return tows("_indexOfArrayValue", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+")";
			
		} else if (object[0].text === "random" && object.length === 1) {
			if (name === "randint" || name === "uniform") {
				return tows("random."+name, valueFuncKw)+"("+parse(args[0])+", "+parse(args[1])+")";
			} else if (name === "shuffle" || name === "choice") {
				return tows("random."+name, valueFuncKw)+"("+parse(args[0])+")";
			} else {
				error("Unhandled member 'random."+name+"'");
			}
			
		} else if (name === "remove") {
			return parseAssignment(object, args[0], true, "_removeFromArrayByValue");
			
		} else if (name === "slice") {
			return tows("_arraySlice", valueFuncKw)+"("+parse(object)+", "+parse(args[0])+", "+parse(args[1])+")";
			
		} else {
			
			//Check for player function
			try {
				var translation = tows("_&"+name, funcKw);
			} catch (e) {
				error("Unhandled member ", member[0]);
			}
			
			var result = translation+"("+parse(object);
			for (var i = 0; i < args.length; i++) {
				result += ", "+parse(args[i]);
			}
			result += ")";
			return result;
		}
	}
	
	error("This shouldn't happen");
	
}

//Parses an assignment of value to variable.
//Determines the function to use for modify/set global/player variable (at index).
function parseAssignment(variable, value, modify, modifyArg=null) {
	
	debug("Parsing assignment of '"+dispTokens(value)+"' to '"+dispTokens(variable)+"'");
	
	var func = "";
	if (modify) {
		func += "modify";
	} else {
		func += "set";
	}
	
	var result = "";
	
	if (variable.length === 1) {
		//It is a global variable
		//addVariable(variable[0].text, true)
		result += tows("_"+func+"GlobalVar", actionKw)+"("+translateVarToWs(variable[0].text, true)+", ";
		
	} else {
		//Check for dot; if it is present, it can only be a player variable
		var operands = splitTokens(variable, ".", false, true);
		if (operands.length === 2) {
			
			//console.log(operands);
			
			//Check for array
			if (operands[1].length > 1 && operands[1][1].text === '[') {
				//addVariable(operands[1][0].text, false);
				result += tows("_"+func+"PlayerVarAtIndex", actionKw)
						+"("+parse(operands[0])+", "+translateVarToWs(operands[1][0].text, false)+", "
						+parse(operands[1].slice(2, operands[1].length-1))+", ";
			} else {
				if (operands[1].length > 1) {
					error("Unauthorised player variable ", operands[1]);
				}
				//addVariable(operands[1][0].text, false);
				result += tows("_"+func+"PlayerVar", actionKw)+"("+parse(operands[0])+", "+translateVarToWs(operands[1][0].text, false)+", ";
			}
			
		} else {
			if (variable[1].text === '[') {
				//addVariable(variable[0].text, true)
				result += tows("_"+func+"GlobalVarAtIndex", actionKw)+"("+translateVarToWs(variable[0].text, true)+", "+parse(variable.slice(2, variable.length-1))+", ";
			} else {
				error("Unauthorized global variable", variable);
			}
		}
	}
	
	if (modify) {
		result += tows(modifyArg, getConstantKw("OPERATION"))+", ";
	}
	
	result += parse(value)+")";
	return result;
}

//Parses an array index such as A[1].
function parseArrayMembership(array, membership) {
	
	//check for dictionary
	if (array[0].text === "{" && array[array.length-1].text === "}") {
		array = array.slice(1, array.length-1);
		var elements = splitTokens(array, ",", true, false);
		if (elements[elements.length-1].length === 0) {
			//handle trailing comma
			elements.pop();
		}
		if (elements.length === 0) {
			error("Cannot declare an empty dictionary");
		}
		console.log(elements);
		var keys = [];
		var values = [];
		for (var elem of elements) {
			var keyValue = splitTokens(elem, ":", true, false);
			if (keyValue.length !== 2) {
				error("Malformed entry in dictionary: found "+keyValue.length+" values composing element, expected 2");
			}
			var compiledKey = parse(keyValue[0]);
			if (keys.includes(compiledKey)) {
				error("Duplicate key '"+dispTokens(keyValue[0])+"'");
			}
			keys.push(compiledKey);
			values.push(parse(keyValue[1]));
		}

		var selectedKey = parse(membership);
		//if the chosen value is a constant, optimize the dictionary out
		if (!containsRandom(selectedKey) && keys.includes(selectedKey)) {
			return values[keys.indexOf(selectedKey)];
		}
		
		var wsAppend = tows("_appendToArray", valueFuncKw);
		var result = tows("_valueInArray", valueFuncKw)+"(";
		var valuesResult = tows("_emptyArray", valueFuncKw);
		for (var value of values) {
			valuesResult = wsAppend+"("+valuesResult+", "+value+")";
		}
		result += valuesResult+", "+tows("_indexOfArrayValue", valueFuncKw)+"(";
		var keysResult = tows("_emptyArray", valueFuncKw);
		for (var key of keys) {
			keysResult = wsAppend+"("+keysResult+", "+key+")";
		}
		result += keysResult+", "+parse(membership)+"))";
		return result;

	} else {
		//normal array

		//[0] -> first of
		if (membership.length === 1 && membership[0].text === '0') {
			return tows("_firstOf", valueFuncKw)+"("+parse(array)+")";
			
		//[-1] -> last of
		} else if (membership.length === 2 && membership[0].text === '-' && membership[1].text === '1') {
			return tows("_lastOf", valueFuncKw)+"("+parse(array)+")";
			
		} else {
			return tows("_valueInArray", valueFuncKw)+"("+parse(array)+", "+parse(membership)+")";
		}
	}

	
	
	error("This shouldn't happen");
	
}

//Parses a literal array such as [1,2,3] or [i for i in x if cond].
function parseLiteralArray(content) {
	
	if (content[0].text !== '[' || content[content.length-1].text !== ']') {
		error("Literal array is not actually a literal array");
	}
	
	if (content.length === 2) {
		return tows("_emptyArray", valueFuncKw);
	} else {
		//check for "in" keyword
		//format is "var for var in array if condition"
		var inOperands = splitTokens(content.slice(1, content.length-1), "in", false);
		if (inOperands.length === 2) {
			var ifOperands = splitTokens(inOperands[1], "if");
			if (ifOperands.length !== 2) {
				//Not a filtered array (eg: [player.C for player in playersInRadius()])
				var forOperands = splitTokens(inOperands[0], "for");
				if (forOperands.length !== 2) {
					error("Malformed 'x for y in z'");
				}
				var forVarName = forOperands[1][0].text;
				if (forLoopVariables[forVarName] !== undefined) {
					error("Variable "+forVarName+" is already used");
				}
				forLoopVariables[forVarName] = inOperands[1];
				
				var result = parse(forOperands[0]);
				delete forLoopVariables[forVarName];
				return result;
				
			} else {
				//Filtered array
				if (inOperands[0].length !== 3 || inOperands[0][1].text !== "for" || inOperands[0][0].text !== inOperands[0][2].text) {
					error("Malformed 'x for x in y'");
				}
				debug("Parsing 'x for x in y if z', x='"+inOperands[0][0].text+"', y='"+dispTokens(ifOperands[0])+"', z='"+dispTokens(ifOperands[1])+"'");
				
				currentArrayElementNames.push(inOperands[0][0].text);
				var result = tows("_filteredArray", valueFuncKw)+"("+parse(ifOperands[0])+", "+parse(ifOperands[1])+")";
				currentArrayElementNames.pop();
				return result;
			}
		} else {
			
			//Literal array with only values ([1,2,3])
			var args = splitTokens(content.slice(1, content.length-1), ",");
			//Allow trailing comma
			if (args[args.length-1].length === 0) {
				args = args.slice(0, args.length-1);
			}
			var appendFunc = tows("_appendToArray", valueFuncKw);
			var result = tows("_emptyArray", valueFuncKw);
			for (var i = 0; i < args.length; i++) {
				result = appendFunc+"("+result+", "+parse(args[i])+")";
			}
			return result;
		}
	}
	
	error("This shouldn't happen");
	
}

//Parses a rule condition; expects a token list.
function parseRuleCondition(content) {
	
	//console.log(content);
	debug("Parsing rule condition(s) '"+dispTokens(content)+"'");
	
	var result = "";
	
	if (content[content.length-1].text !== ":") {
		error("If statement must end with ':'");
	}
	
	content = content.slice(1, content.length-1);
	var conditions = [];
	
	//If there is any "or" in the condition, there is only one instruction.
	var orOperands = splitTokens(content, "or");
	
	if (orOperands.length > 1) {
		debug("Condition contains 'or'");
		conditions = [[{text:"("}].concat(content).concat([{text:")"}])];
	} else {
		var andOperands = splitTokens(content, "and");
		conditions = andOperands;
	}


	for (var condition of conditions) {
		
		debug("Parsing condition '"+dispTokens(condition)+"'");
		//console.log(andOperands);

		
		var comparisonOperators = ["==", "!=", "<=", ">=", "<", ">"];
		var comparisonOperands;
		var hasComparisonOperand = false;
		var op1 = "";
		var op2 = "";
		var operator = "";
		
		for (var j = 0; j < comparisonOperators.length; j++) {
			comparisonOperands = splitTokens(condition, comparisonOperators[j]);
			if (comparisonOperands.length > 1) {
				if (comparisonOperands.length != 2) {
					error("Chained comparisons are not allowed (eg: a == b == c)");
				}
				op1 = parse(comparisonOperands[0]);
				op2 = parse(comparisonOperands[1]);
				operator = comparisonOperators[j];
				hasComparisonOperand = true;
				break;
			}
		}
		
		if (!hasComparisonOperand) {
			operator = "==";
			if (condition[0].text === "not") {
				op1 = parse(condition.slice(1));
				op2 = tows("false", valueFuncKw);
			} else {
				op1 = parse(condition);
				op2 = tows("true", valueFuncKw);
			}
		}
		//tests for optimizations
		var isOp1True = isWsTrue(op1);
		var isOp2True = isWsTrue(op2);
		var isOp1False = isWsFalse(op1);
		var isOp2False = isWsFalse(op2);

		if (operator === "==") {
			//true == true or false == false -> true
			if (isOp1True && isOp2True || isOp1False && isOp2False) {
				continue;

			//true == false or false == true -> false
			} else if (isOp1True && isOp2False || isOp1False && isOp2True) {
				return "__false__";
			}
		} else if (operator === "!=") {
			//true != false or false != true -> true
			if (isOp1True && isOp2False || isOp1False && isOp2True) {
				continue;
			
			//true != true or false != false -> false
			} else if (isOp1True && isOp2True || isOp1False && isOp2False) {
				return "__false__";
			}
		}


		result += tabLevel(2)+op1+" "+operator+" "+op2+";\n";
	}
	
	return result;
}


//Parses a custom string.
function parseString(content, formatArgs, stringModifiers) {

	if (!formatArgs) {
		formatArgs = [];
	}
	var result = "";
	var tokens = [];
	var numberIndex = 0;
	var args = [];
	var argsAreNumbered = null;
	var isConvertedToBigLetters = false;

	//Used to reorder args for easier optimization.
	//Eg "{1}{0}" is converted to "{0}{1}", with the arguments obviously switched.
	var numberMapping = {};
	var containsNonFullwidthChar = false;

	function applyStringModifiers(content) {

		//If big letters, try to map letters until we get one
		//We only need one letter to convert to big letters
		if (stringModifiers.bigLetters && !isConvertedToBigLetters) {
			for (var i = 0; i < content.length; i++) {
				if (content[i] in bigLettersMappings) {
					content = content.substring(0,i)+bigLettersMappings[content[i]]+content.substring(i+1);
					isConvertedToBigLetters = true;
					break;
				}
			}
		} else if (stringModifiers.fullWidth) {
			var tmpStr = "";
			for (var char of content) {
				if (char in fullwidthMappings) {
					tmpStr += fullwidthMappings[char];
				} else {
					containsNonFullwidthChar = true;
					tmpStr += char;
				}
			}
	
			content = tmpStr;
			
		}
	
		if (obfuscateRules) {
			var tmpStr = "";
			for (var char of content) {
				if (char in obfuscationMappings) {
					tmpStr += obfuscationMappings[char];
				} else {
					tmpStr += char;
				}
			}
			content = tmpStr;
		}
		return content;
	}

	//Tokenize string
	while (true) {
		var index = content.search(/{\d*}/)
		if (index >= 0) {
			if (index > 0) {
				tokens.push({
					text: applyStringModifiers(content.substring(0, index), stringModifiers, isConvertedToBigLetters),
					type: "string"
				});
				content = content.substring(index);
			}
			var number = content.substring(1, content.indexOf("}"));

			//test for {}
			if (number === "") {
				if (argsAreNumbered === true) {
					error("Cannot switch from automatic field numbering to manual field specification");
				}
				argsAreNumbered = false;
				number = numberIndex;

			} else {
				if (argsAreNumbered === false) {
					error("Cannot switch from automatic field numbering to manual field specification");
				}
				argsAreNumbered = true;
				number = parseInt(number);
			}
			if (!(number in numberMapping)) {
				numberMapping[number] = numberIndex;
				numberIndex++;
			}

			tokens.push({
				index: numberMapping[number],
				type: "arg"
			});
			content = content.substring(content.indexOf("}")+1);

		} else {

			tokens.push({
				text: applyStringModifiers(content, stringModifiers, isConvertedToBigLetters),
				type: "string"
			});
			break;
		}
	}


	//sort args if there was (potentially) a reordering
	for (var key of Object.keys(numberMapping)) {
		if (formatArgs[key]) {
			args[numberMapping[key]] = parse(formatArgs[key]);
		} else {
			error("Too few arguments in format() function: expected "+numberMapping[key]+" but found "+formatArgs.length);
		}
	}
	//console.log("args = ");
	//console.log(args);

	if (containsNonFullwidthChar && stringModifiers.fullWidth) {
		warn("w_not_total_fullwidth", "Could not fully convert this string to fullwidth characters")
	}
	if (stringModifiers.bigLetters && !isConvertedToBigLetters) {
		error("Could not convert the string to big letters. The string must have one of the following chars: '"+Object.keys(bigLettersMappings).join("")+"'");
	}

	console.log(tokens);
	console.log(stringModifiers);

	result = parseStringTokens(tokens, args);

	return result;

}

function parseStringTokens(tokens, args) {
	var result = "";
	var resultArgs = [];
	var numbers = [];
	var numbersEncountered = [];
	var mappings = {};
	var stringLength = 0;
	var currentNbIndex = 0;


	//iterate through tokens and figure out the total number of unique numbers
	for (var token of tokens) {
		if (token.type === "string") {
			continue;
		} else {
			if (!numbers.includes(token.index)) {
				numbers.push(token.index);
			}
		}
	}

	//Add tokens
	//For now, no optimization: just split if more than 3 unique numbers
	for (var i = 0; i < tokens.length; i++) {
		//console.log(tokens[i]);
		//console.log("numbers encountered=");
		//console.log(numbersEncountered);
		//debugger;

		//length check
		if (tokens[i].type === "string" && stringLength+getUtf8Length(tokens[i].text) >= 125 || tokens[i].type === "arg" && stringLength+3 >= 125) {

			var splitString = false;
			if (tokens[i].type === "string" && stringLength+getUtf8Length(tokens[i].text) > 127 || tokens.length > i) {

				var tokenText = [...tokens[i].text]
				var tokenSliceLength = 0;
				var sliceIndex = 0;
				for (var j = 0; stringLength+tokenSliceLength < 122; j++) {
					tokenSliceLength += getUtf8Length(tokenText[j]+"");
					sliceIndex++;
				}

				result += tokenText.slice(0, sliceIndex).join("")
				tokens[i].text = tokenText.slice(sliceIndex).join("");
				splitString = true;

			} else if (tokens[i].type === "arg" && tokens.length > i) {
				splitString = true;
			}

			if (splitString) {
				result += "{"+currentNbIndex+"}";
				resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
				break;
			}
		}

		if (tokens[i].type === "string") {
			result += tokens[i].text;
			stringLength += getUtf8Length(tokens[i].text);
		} else {
			if (numbersEncountered.length >= 2 && numbers.length > 3) {
				//split
				result += "{2}";
				resultArgs.push(parseStringTokens(tokens.slice(i, tokens.length), args));
				break;
			} else {
				if (!(tokens[i].index in mappings)) {
					mappings[tokens[i].index] = numbersEncountered.length;
				}
				if (!numbersEncountered.includes(tokens[i].index)) {
					numbersEncountered.push(tokens[i].index);
					resultArgs.push(args[tokens[i].index]);
				}
				result += "{"+mappings[tokens[i].index]+"}";
				currentNbIndex++;
				stringLength += 3;


			}
		}
	}

	while (resultArgs.length < 3) {
		resultArgs.push(wsNull);
	}

	if (resultArgs.length != 3) {
		error("Custom string parser broke (string args length is "+resultArgs.length+")");
	}

	return tows("_customString", valueFuncKw)+"(\""+result+"\", "+resultArgs.join(", ")+")";
}
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

var emptyStrKw = [
    {
        "opy": "",
        "en-US": ""
    }
];

var normalStrKw = 
//begin-json
[
    {
        "opy": "Zones",
        "en-US": "Zones",
        "guid": "00000000C5CE",
        "de-DE": "Zonen",
        "es-ES": "Zonas",
        "es-MX": "Zonas",
        "it-IT": "Zone",
        "ja-JP": "ゾーン",
        "pl-PL": "Strefy",
        "pt-BR": "Zonas",
        "ru-RU": "Зоны",
        "zh-CN": "区域",
        "zh-TW": "範圍"
    },
    {
        "opy": "Zone",
        "en-US": "Zone",
        "guid": "00000000C5CD",
        "es-ES": "Zona",
        "es-MX": "Zona",
        "it-IT": "Zona",
        "ja-JP": "ゾーン",
        "pl-PL": "Strefa",
        "pt-BR": "Zona",
        "ru-RU": "Зона",
        "zh-CN": "区域",
        "zh-TW": "範圍"
    },
    {
        "opy": "You Win",
        "en-US": "You Win",
        "guid": "00000000C08D",
        "de-DE": "Du hast gewonnen",
        "es-ES": "Ganas",
        "es-MX": "Has ganado",
        "fr-FR": "Vous avez gagné",
        "it-IT": "Hai Vinto",
        "ja-JP": "勝利",
        "pl-PL": "Wygrywasz",
        "pt-BR": "Você Venceu",
        "ru-RU": "Вы победили",
        "zh-CN": "你胜利了",
        "zh-TW": "你贏了"
    },
    {
        "opy": "You Lose",
        "en-US": "You Lose",
        "guid": "00000000C091",
        "de-DE": "Du hast verloren",
        "es-ES": "Pierdes",
        "es-MX": "Has perdido",
        "fr-FR": "Vous avez perdu",
        "it-IT": "Hai Perso",
        "ja-JP": "敗北",
        "pl-PL": "Przegrywasz",
        "pt-BR": "Você Perdeu",
        "ru-RU": "Вы проиграли",
        "zh-CN": "你失败了",
        "zh-TW": "你輸了"
    },
    {
        "opy": "You",
        "en-US": "You",
        "guid": "00000000C08C",
        "de-DE": "Du",
        "es-ES": "Tú",
        "es-MX": "Tú",
        "fr-FR": "Vous",
        "it-IT": "Tu",
        "ja-JP": "あなた",
        "pl-PL": "Ty",
        "pt-BR": "Você",
        "ru-RU": "Вы",
        "zh-CN": "你",
        "zh-TW": "你"
    },
    {
        "guid": "00000000C5F4",
        "opy": "Yes",
        "en-US": "Yes",
        "de-DE": "Ja",
        "es-ES": "Sí",
        "es-MX": "Sí",
        "fr-FR": "Oui",
        "it-IT": "Sì",
        "ja-JP": "はい",
        "pl-PL": "Tak",
        "pt-BR": "Sim",
        "ru-RU": "Да",
        "zh-CN": "是",
        "zh-TW": "是"
    },
    {
        "guid": "00000000C878",
        "opy": "Yellow",
        "en-US": "Yellow",
        "de-DE": "Gelb",
        "es-ES": "Amarillo",
        "es-MX": "Amarillo",
        "fr-FR": "Jaune",
        "it-IT": "Giallo",
        "ja-JP": "黄色",
        "pl-PL": "Żółty",
        "pt-BR": "Amarelo",
        "ru-RU": "Желтый",
        "zh-CN": "黄色",
        "zh-TW": "黃"
    },
    {
        "guid": "00000000C185",
        "opy": "Wow",
        "en-US": "Wow",
        "es-ES": "Guau",
        "es-MX": "Guau",
        "fr-FR": "Waouh",
        "ja-JP": "感動",
        "pt-BR": "Uau",
        "ru-RU": "Ух ты!",
        "zh-CN": "哇哦",
        "zh-TW": "哇"
    },
    {
        "opy": "Worst",
        "en-US": "Worst",
        "guid": "00000000C158",
        "de-DE": "Am schlechtesten",
        "es-ES": "El peor",
        "es-MX": "El peor",
        "fr-FR": "Le pire",
        "it-IT": "Peggiore",
        "ja-JP": "最悪",
        "pl-PL": "Najgorzej",
        "pt-BR": "O Pior",
        "ru-RU": "Худший",
        "zh-CN": "最差",
        "zh-TW": "最差"
    },
    {
        "opy": "Worse",
        "en-US": "Worse",
        "guid": "00000000C157",
        "de-DE": "Schlechter",
        "es-ES": "Peor",
        "es-MX": "Peor",
        "fr-FR": "Pire",
        "it-IT": "Peggio",
        "ja-JP": "より悪い",
        "pl-PL": "Gorzej",
        "pt-BR": "Pior",
        "ru-RU": "Хуже",
        "zh-CN": "较差",
        "zh-TW": "較差"
    },
    {
        "opy": "Wisdom",
        "en-US": "Wisdom",
        "guid": "00000000C989",
        "de-DE": "Weisheit",
        "es-ES": "Sabiduría",
        "es-MX": "Sabiduría",
        "fr-FR": "Sagesse",
        "it-IT": "Saggezza",
        "ja-JP": "知恵",
        "pl-PL": "Mądrość",
        "pt-BR": "Sabedoria",
        "ru-RU": "Мудрость",
        "zh-CN": "感知",
        "zh-TW": "智慧"
    },
    {
        "opy": "Wins",
        "en-US": "Wins",
        "guid": "00000000C299",
        "de-DE": "Siege",
        "es-ES": "Victorias",
        "es-MX": "Victorias",
        "fr-FR": "Victoires",
        "it-IT": "Vittorie",
        "ja-JP": "勝利",
        "pl-PL": "Wygrane",
        "pt-BR": "Vitórias",
        "ru-RU": "Победы",
        "zh-CN": "胜利",
        "zh-TW": "勝利"
    },
    {
        "opy": "Winners",
        "en-US": "Winners",
        "guid": "00000000C086",
        "de-DE": "Gewinner",
        "es-ES": "Vencedores",
        "es-MX": "Ganadores",
        "fr-FR": "Vainqueurs",
        "it-IT": "Vincitori",
        "ja-JP": "勝者",
        "pl-PL": "Wygrani",
        "pt-BR": "Vencedores",
        "ru-RU": "Победители",
        "zh-CN": "胜者",
        "zh-TW": "贏家"
    },
    {
        "opy": "Winner",
        "en-US": "Winner",
        "guid": "00000000C084",
        "de-DE": "Sieger",
        "es-ES": "Vencedor",
        "es-MX": "Ganador",
        "fr-FR": "Gagnant",
        "it-IT": "Vincitore",
        "ja-JP": "勝者",
        "pl-PL": "Wygrany",
        "pt-BR": "Vencedor",
        "ru-RU": "Победитель",
        "zh-CN": "胜者",
        "zh-TW": "贏家"
    },
    {
        "guid": "00000000C298",
        "opy": "Win",
        "en-US": "Win",
        "de-DE": "Gewonnen",
        "es-ES": "Victoria",
        "es-MX": "Victoria",
        "fr-FR": "Victoire",
        "it-IT": "Vittoria",
        "ja-JP": "勝利",
        "pl-PL": "Wygrana",
        "pt-BR": "Vitória",
        "ru-RU": "Победа",
        "zh-CN": "胜利",
        "zh-TW": "勝利"
    },
    {
        "opy": "Wild",
        "en-US": "Wild",
        "guid": "00000000CAC0",
        "es-ES": "Salvaje",
        "es-MX": "Salvaje",
        "fr-FR": "Libre",
        "it-IT": "Jolly",
        "ja-JP": "ワイルド",
        "pl-PL": "Dzicz",
        "pt-BR": "Curinga",
        "ru-RU": "Дикий",
        "zh-CN": "关键牌",
        "zh-TW": "關鍵牌"
    },
    {
        "guid": "00000000C877",
        "opy": "White",
        "en-US": "White",
        "de-DE": "Weiß",
        "es-ES": "Blanco",
        "es-MX": "Blanco",
        "fr-FR": "Blanc",
        "it-IT": "Bianco",
        "ja-JP": "白",
        "pl-PL": "Biały",
        "pt-BR": "Branco",
        "ru-RU": "Белый",
        "zh-CN": "白色",
        "zh-TW": "白"
    },
    {
        "opy": "West",
        "en-US": "West",
        "guid": "00000000C174",
        "de-DE": "Westen",
        "es-ES": "Oeste",
        "es-MX": "Oeste",
        "fr-FR": "Ouest",
        "it-IT": "Ovest",
        "ja-JP": "西",
        "pl-PL": "Zachód",
        "pt-BR": "Oeste",
        "ru-RU": "Запад",
        "zh-CN": "西",
        "zh-TW": "西"
    },
    {
        "guid": "00000000C17E",
        "opy": "Well Played",
        "en-US": "Well Played",
        "de-DE": "Gut gespielt",
        "es-ES": "Bien jugado",
        "es-MX": "Buena jugada",
        "fr-FR": "Bien joué",
        "it-IT": "Ben Fatto",
        "ja-JP": "お見事",
        "pl-PL": "Niezłe zagranie",
        "pt-BR": "Boa Jogo",
        "ru-RU": "Неплохо сыграно",
        "zh-CN": "称赞",
        "zh-TW": "打得不錯"
    },
    {
        "opy": "Welcome",
        "en-US": "Welcome",
        "guid": "00000000C98E",
        "de-DE": "Willkommen",
        "es-ES": "¡Hola!",
        "es-MX": "Bienvenido",
        "fr-FR": "Bienvenue",
        "it-IT": "Benvenuto",
        "ja-JP": "WELCOME",
        "pl-PL": "Witaj",
        "pt-BR": "Bem-vindos",
        "ru-RU": "Добро пожаловать",
        "zh-CN": "欢迎",
        "zh-TW": "歡迎"
    },
    {
        "guid": "00000000C159",
        "opy": "Warning",
        "en-US": "Warning",
        "de-DE": "Warnung",
        "es-ES": "Aviso",
        "es-MX": "Advertencia",
        "fr-FR": "Avertissement",
        "it-IT": "Attenzione",
        "ja-JP": "警告",
        "pl-PL": "Ostrzeżenie",
        "pt-BR": "Aviso",
        "ru-RU": "Предупреждение",
        "zh-CN": "警告",
        "zh-TW": "警告"
    },
    {
        "opy": "Walls",
        "en-US": "Walls",
        "guid": "00000000C28A",
        "de-DE": "Wände",
        "es-ES": "Muros",
        "es-MX": "Muros",
        "fr-FR": "Murs",
        "it-IT": "Muri",
        "ja-JP": "壁",
        "pl-PL": "Ściany",
        "pt-BR": "Paredes",
        "ru-RU": "Стены",
        "zh-CN": "墙壁",
        "zh-TW": "牆壁"
    },
    {
        "opy": "Wall",
        "en-US": "Wall",
        "guid": "00000000C286",
        "de-DE": "Wand",
        "es-ES": "Muro",
        "es-MX": "Muro",
        "fr-FR": "Mur",
        "it-IT": "Muro",
        "ja-JP": "壁",
        "pl-PL": "Ściana",
        "pt-BR": "Parede",
        "ru-RU": "Стена",
        "zh-CN": "墙壁",
        "zh-TW": "牆壁"
    },
    {
        "guid": "00000000C5D2",
        "opy": "Waiting",
        "en-US": "Waiting",
        "de-DE": "Wartezeit",
        "es-ES": "Esperando",
        "es-MX": "Esperando",
        "fr-FR": "Attente",
        "it-IT": "In attesa",
        "ja-JP": "待機している",
        "pl-PL": "Oczekiwanie",
        "pt-BR": "Aguardando",
        "ru-RU": "Ждет",
        "zh-CN": "正在等待",
        "zh-TW": "正在等待"
    },
    {
        "guid": "00000000C5D1",
        "opy": "Wait",
        "en-US": "Wait",
        "de-DE": "Warten",
        "es-ES": "Esperar",
        "es-MX": "Esperar",
        "fr-FR": "Attendre",
        "it-IT": "Attendi",
        "ja-JP": "待機する",
        "pl-PL": "Czekaj",
        "pt-BR": "Esperar",
        "ru-RU": "Ждать",
        "zh-CN": "等待",
        "zh-TW": "等待"
    },
    {
        "opy": "Vortices",
        "en-US": "Vortices",
        "guid": "00000000C28C",
        "de-DE": "Wirbel",
        "es-ES": "Vórtices",
        "es-MX": "Vórtices",
        "fr-FR": "Vortex",
        "it-IT": "Vortici",
        "ja-JP": "渦",
        "pl-PL": "Wiry",
        "pt-BR": "Vórtices",
        "ru-RU": "Воронки",
        "zh-CN": "漩涡",
        "zh-TW": "旋渦"
    },
    {
        "opy": "Vortex",
        "en-US": "Vortex",
        "guid": "00000000C28B",
        "es-ES": "Vórtice",
        "es-MX": "Vórtice",
        "it-IT": "Vortice",
        "ja-JP": "渦",
        "pl-PL": "Wir",
        "pt-BR": "Vórtice",
        "ru-RU": "Воронка",
        "zh-CN": "漩涡",
        "zh-TW": "旋渦"
    },
    {
        "opy": "Visible",
        "en-US": "Visible",
        "guid": "00000000C133",
        "de-DE": "Sichtbar",
        "it-IT": "Visibile",
        "ja-JP": "表示される",
        "pl-PL": "Widzialne",
        "pt-BR": "Visível",
        "ru-RU": "Видимый",
        "zh-CN": "可见",
        "zh-TW": "可見"
    },
    {
        "guid": "00000000C082",
        "opy": "Victory",
        "en-US": "Victory",
        "de-DE": "Sieg",
        "es-ES": "Victoria",
        "es-MX": "Victoria",
        "fr-FR": "Victoire",
        "it-IT": "Vittoria",
        "ja-JP": "勝利",
        "pl-PL": "Zwycięstwo",
        "pt-BR": "Vitória",
        "ru-RU": "Победа",
        "zh-CN": "胜利",
        "zh-TW": "勝利"
    },
    {
        "opy": "Use Ultimate Ability",
        "en-US": "Use Ultimate Ability",
        "guid": "00000000BFF0",
        "de-DE": "Ultimative Fähigkeit einsetzen",
        "es-ES": "Usar habilidad definitiva",
        "es-MX": "Usar habilidad máxima",
        "fr-FR": "Utilisation de la capacité ultime",
        "it-IT": "Usa Abilità Ultra",
        "ja-JP": "アルティメット・アビリティを使う",
        "pl-PL": "Użyj Superzdolności",
        "pt-BR": "Usar Habilidade Suprema",
        "ru-RU": "Использовать суперспособность",
        "zh-CN": "使用终极技能",
        "zh-TW": "使用絕招"
    },
    {
        "opy": "Use Ability 2",
        "en-US": "Use Ability 2",
        "guid": "00000000BFF1",
        "de-DE": "Fähigkeit 2 einsetzen",
        "es-ES": "Usar habilidad 2",
        "es-MX": "Usar habilidad 2",
        "fr-FR": "Utilisation de la capacité 2",
        "it-IT": "Usa Abilità 2",
        "ja-JP": "アビリティ2を使う",
        "pl-PL": "Użyj Zdolności 2",
        "pt-BR": "Usar Habilidade 2",
        "ru-RU": "Использовать способность 2",
        "zh-CN": "使用技能 2",
        "zh-TW": "使用技能2"
    },
    {
        "opy": "Use Ability 1",
        "en-US": "Use Ability 1",
        "guid": "00000000BFF2",
        "de-DE": "Fähigkeit 1 einsetzen",
        "es-ES": "Usar habilidad 1",
        "es-MX": "Usar habilidad 1",
        "fr-FR": "Utilisation de la capacité 1",
        "it-IT": "Usa Abilità 1",
        "ja-JP": "アビリティ1を使う",
        "pl-PL": "Użyj Zdolności 1",
        "pt-BR": "Usar Habilidade 1",
        "ru-RU": "Использовать способность 1",
        "zh-CN": "使用技能 1",
        "zh-TW": "使用技能1"
    },
    {
        "opy": "Uploading",
        "en-US": "Uploading",
        "guid": "00000000C0E8",
        "de-DE": "Upload",
        "es-ES": "Subiendo",
        "es-MX": "Cargando",
        "fr-FR": "Envoi",
        "it-IT": "Upload in Corso",
        "ja-JP": "アップロード中",
        "pl-PL": "Wysyłanie",
        "pt-BR": "Enviando",
        "ru-RU": "Загружает",
        "zh-CN": "正在上传",
        "zh-TW": "正在上傳"
    },
    {
        "opy": "Uploaded",
        "en-US": "Uploaded",
        "guid": "00000000C0E9",
        "de-DE": "Hochgeladen",
        "es-ES": "Subido",
        "es-MX": "Cargado",
        "fr-FR": "Envoyé",
        "it-IT": "Upload Effettuato",
        "ja-JP": "アップロードした",
        "pl-PL": "Wysłano",
        "pt-BR": "Enviado",
        "ru-RU": "Загружен",
        "zh-CN": "已上传",
        "zh-TW": "已上傳"
    },
    {
        "opy": "Upload",
        "en-US": "Upload",
        "guid": "00000000C0E7",
        "de-DE": "Hochladen",
        "es-ES": "Subir",
        "es-MX": "Cargar",
        "fr-FR": "Envoyer",
        "ja-JP": "アップロード",
        "pl-PL": "Wyślij",
        "pt-BR": "Enviar",
        "ru-RU": "Загружать",
        "zh-CN": "上传",
        "zh-TW": "上傳"
    },
    {
        "opy": "Upgrades",
        "en-US": "Upgrades",
        "guid": "00000000BFFF",
        "es-ES": "Mejoras",
        "es-MX": "Mejoras",
        "fr-FR": "Améliorations",
        "it-IT": "Miglioramenti",
        "ja-JP": "アップグレード",
        "pl-PL": "Ulepszenia",
        "pt-BR": "Melhorias",
        "ru-RU": "Улучшения",
        "zh-CN": "升级",
        "zh-TW": "升級"
    },
    {
        "opy": "Upgrade",
        "en-US": "Upgrade",
        "guid": "00000000C000",
        "es-ES": "Mejora",
        "es-MX": "Mejora",
        "fr-FR": "Amélioration",
        "it-IT": "Miglioramento",
        "ja-JP": "アップグレード",
        "pl-PL": "Ulepszenie",
        "pt-BR": "Melhoria",
        "ru-RU": "Улучшение",
        "zh-CN": "升级",
        "zh-TW": "升級"
    },
    {
        "guid": "00000000C169",
        "opy": "Up",
        "en-US": "Up",
        "de-DE": "Nach oben",
        "es-ES": "Arriba",
        "es-MX": "Arriba",
        "fr-FR": "Haut",
        "it-IT": "Su",
        "ja-JP": "上",
        "pl-PL": "Góra",
        "pt-BR": "Cima",
        "ru-RU": "Вверх",
        "zh-CN": "上",
        "zh-TW": "上"
    },
    {
        "opy": "Unstable",
        "en-US": "Unstable",
        "guid": "00000000C140",
        "de-DE": "Instabil",
        "es-ES": "Inestable",
        "es-MX": "Inestable",
        "fr-FR": "Instable",
        "it-IT": "Instabile",
        "ja-JP": "不安定",
        "pl-PL": "Niestabilne",
        "pt-BR": "Instável",
        "ru-RU": "Нестабильный",
        "zh-CN": "不稳定",
        "zh-TW": "不穩定"
    },
    {
        "opy": "Unsafe",
        "en-US": "Unsafe",
        "guid": "00000000C13F",
        "de-DE": "Unsicher",
        "es-ES": "Inseguro",
        "es-MX": "Inseguro",
        "fr-FR": "Dangereux",
        "it-IT": "Non Sicuro",
        "ja-JP": "危険",
        "pl-PL": "Niebezpieczne",
        "pt-BR": "Inseguro",
        "ru-RU": "Небезопасный",
        "zh-CN": "不安全",
        "zh-TW": "不安全"
    },
    {
        "opy": "Unlocking",
        "en-US": "Unlocking",
        "guid": "00000000C112",
        "de-DE": "Freischaltung",
        "es-ES": "Desbloqueando",
        "es-MX": "Desbloqueando",
        "fr-FR": "Déverrouillage",
        "it-IT": "Sblocco in Corso",
        "ja-JP": "アンロック中",
        "pl-PL": "Odblokowanie",
        "pt-BR": "Desbloqueando",
        "ru-RU": "Разблокирует",
        "zh-CN": "正在解锁",
        "zh-TW": "正在解鎖"
    },
    {
        "guid": "00000000C113",
        "opy": "Unlocked",
        "en-US": "Unlocked",
        "de-DE": "Freigeschaltet",
        "es-ES": "Desbloqueado",
        "es-MX": "Desbloqueado",
        "fr-FR": "Déverrouillé",
        "it-IT": "Sbloccato",
        "ja-JP": "アンロックした",
        "pl-PL": "Odblokowano",
        "pt-BR": "Desbloqueado",
        "ru-RU": "Разблокировал",
        "zh-CN": "已解锁",
        "zh-TW": "得到解鎖"
    },
    {
        "guid": "00000000C111",
        "opy": "Unlock",
        "en-US": "Unlock",
        "de-DE": "Freischalten",
        "es-ES": "Desbloquear",
        "es-MX": "Desbloquear",
        "fr-FR": "Déverrouiller",
        "it-IT": "Sblocca",
        "ja-JP": "アンロック",
        "pl-PL": "Odblokuj",
        "pt-BR": "Desbloquear",
        "ru-RU": "Разблокировать",
        "zh-CN": "解锁",
        "zh-TW": "解鎖"
    },
    {
        "opy": "Unlimited",
        "en-US": "Unlimited",
        "guid": "00000000C13B",
        "de-DE": "Unbegrenzt",
        "es-ES": "Ilimitado",
        "es-MX": "Ilimitado",
        "fr-FR": "Illimité",
        "it-IT": "Illimitato",
        "ja-JP": "無制限",
        "pl-PL": "Nieograniczone",
        "pt-BR": "Ilimitado",
        "ru-RU": "Неограниченно",
        "zh-CN": "不受限",
        "zh-TW": "無限制"
    },
    {
        "guid": "00000000C141",
        "opy": "Unknown",
        "en-US": "Unknown",
        "de-DE": "Unbekannt",
        "es-ES": "Desconocido",
        "es-MX": "Desconocido",
        "fr-FR": "Inconnu",
        "it-IT": "Sconosciuto",
        "ja-JP": "不明",
        "pl-PL": "Nieznane",
        "pt-BR": "Desconhecido",
        "ru-RU": "Неизвестно",
        "zh-CN": "未知",
        "zh-TW": "未知"
    },
    {
        "opy": "Under",
        "en-US": "Under",
        "guid": "00000000C165",
        "de-DE": "Unter",
        "es-ES": "Debajo",
        "es-MX": "Debajo",
        "fr-FR": "Sous",
        "it-IT": "Sotto",
        "ja-JP": "下",
        "pl-PL": "Pod",
        "pt-BR": "Abaixo",
        "ru-RU": "Менее",
        "zh-CN": "下方",
        "zh-TW": "下"
    },
    {
        "opy": "Ultimate Ability",
        "en-US": "Ultimate Ability",
        "guid": "00000000BFF3",
        "de-DE": "Ultimative Fähigkeit",
        "es-ES": "Habilidad definitiva",
        "es-MX": "Habilidad máxima",
        "fr-FR": "Capacité ultime",
        "it-IT": "Abilità Ultra",
        "ja-JP": "アルティメット・アビリティ",
        "pl-PL": "Superzdolność",
        "pt-BR": "Habilidade Suprema",
        "ru-RU": "Суперспособность",
        "zh-CN": "终极技能",
        "zh-TW": "絕招"
    },
    {
        "opy": "Ugh",
        "en-US": "Ugh",
        "guid": "00000000C184",
        "de-DE": "Argh",
        "es-ES": "Argh",
        "es-MX": "Agh",
        "fr-FR": "Arg",
        "ja-JP": "あー",
        "pl-PL": "Uch",
        "ru-RU": "Фу",
        "zh-CN": "呃",
        "zh-TW": "呃"
    },
    {
        "guid": "00000000BFE9",
        "opy": "Turrets",
        "en-US": "Turrets",
        "de-DE": "Geschütze",
        "es-ES": "Torretas",
        "es-MX": "Torretas",
        "fr-FR": "Tourelles",
        "it-IT": "Torrette",
        "ja-JP": "タレット",
        "pl-PL": "Wieżyczki",
        "pt-BR": "Torres",
        "ru-RU": "Турели",
        "zh-CN": "炮台",
        "zh-TW": "砲塔"
    },
    {
        "guid": "00000000BFEA",
        "opy": "Turret",
        "en-US": "Turret",
        "de-DE": "Geschütz",
        "es-ES": "Torreta",
        "es-MX": "Torreta",
        "fr-FR": "Tourelle",
        "it-IT": "Torretta",
        "ja-JP": "タレット",
        "pl-PL": "Wieżyczka",
        "pt-BR": "Torre",
        "ru-RU": "Турель",
        "zh-CN": "炮台",
        "zh-TW": "砲塔"
    },
    {
        "opy": "Try Again",
        "en-US": "Try Again",
        "guid": "00000000C18B",
        "de-DE": "Neuer Versuch",
        "es-ES": "Vuelve a intentarlo",
        "es-MX": "Inténtalo de nuevo",
        "fr-FR": "Veuillez réessayer",
        "it-IT": "Riprovaci",
        "ja-JP": "もう一回",
        "pl-PL": "Spróbuj ponownie",
        "pt-BR": "Tente de Novo",
        "ru-RU": "Еще раз",
        "zh-CN": "再来试试",
        "zh-TW": "再一次"
    },
    {
        "opy": "Transferring",
        "en-US": "Transferring",
        "guid": "00000000C0C1",
        "de-DE": "Transfer",
        "es-ES": "Transfiriendo",
        "es-MX": "Transfiriendo",
        "fr-FR": "Transfert",
        "it-IT": "Trasferimento in Corso",
        "ja-JP": "移動中",
        "pl-PL": "Transferowanie",
        "pt-BR": "Transferindo",
        "ru-RU": "Передает",
        "zh-CN": "正在转移",
        "zh-TW": "正在轉移"
    },
    {
        "opy": "Transferred",
        "en-US": "Transferred",
        "guid": "00000000C0C2",
        "de-DE": "Transferiert",
        "es-ES": "Transferido",
        "es-MX": "Transferido",
        "fr-FR": "Transféré",
        "it-IT": "Trasferito",
        "ja-JP": "移動した",
        "pl-PL": "Przetransferowano",
        "pt-BR": "Transferido",
        "ru-RU": "Передал",
        "zh-CN": "已转移",
        "zh-TW": "受到轉移"
    },
    {
        "opy": "Transfer",
        "en-US": "Transfer",
        "guid": "00000000C0BF",
        "de-DE": "Transferieren",
        "es-ES": "Transferir",
        "es-MX": "Transferir",
        "fr-FR": "Transférer",
        "it-IT": "Trasferisci",
        "ja-JP": "移動",
        "pl-PL": "Transferuj",
        "pt-BR": "Transferir",
        "ru-RU": "Передавать",
        "zh-CN": "转移",
        "zh-TW": "轉移"
    },
    {
        "opy": "Traitors",
        "en-US": "Traitors",
        "guid": "00000000C5BE",
        "de-DE": "Spione",
        "es-ES": "Traidores",
        "es-MX": "Traidores",
        "fr-FR": "Traîtres",
        "it-IT": "Traditori",
        "ja-JP": "反逆者",
        "pl-PL": "Zdrajcy",
        "pt-BR": "Traidores",
        "ru-RU": "Предатели",
        "zh-CN": "叛徒",
        "zh-TW": "叛徒"
    },
    {
        "opy": "Traitor",
        "en-US": "Traitor",
        "guid": "00000000C5BD",
        "de-DE": "Verräter",
        "es-ES": "Traidor",
        "es-MX": "Traidor",
        "fr-FR": "Traître",
        "it-IT": "Traditore",
        "ja-JP": "反逆者",
        "pl-PL": "Zdrajca",
        "pt-BR": "Traidor",
        "ru-RU": "Предатель",
        "zh-CN": "叛徒",
        "zh-TW": "叛徒"
    },
    {
        "opy": "Trading",
        "en-US": "Trading",
        "guid": "00000000C106",
        "de-DE": "Tausch",
        "es-ES": "Comerciando",
        "es-MX": "Intercambiando",
        "fr-FR": "Échange",
        "it-IT": "Commercio in Corso",
        "ja-JP": "取引中",
        "pl-PL": "Wymienianie",
        "pt-BR": "Trocando",
        "ru-RU": "Торгует",
        "zh-CN": "正在交易",
        "zh-TW": "正在交易"
    },
    {
        "opy": "Traded",
        "en-US": "Traded",
        "guid": "00000000C107",
        "de-DE": "Getauscht",
        "es-ES": "Comerciado",
        "es-MX": "Intercambiado",
        "fr-FR": "Échangé",
        "it-IT": "Commerciato",
        "ja-JP": "取引した",
        "pl-PL": "Wymieniono",
        "pt-BR": "Trocado",
        "ru-RU": "Провел торговлю",
        "zh-CN": "已交易",
        "zh-TW": "得到交易"
    },
    {
        "opy": "Trade",
        "en-US": "Trade",
        "guid": "00000000C105",
        "de-DE": "Tauschen",
        "es-ES": "Comerciar",
        "es-MX": "Intercambiar",
        "fr-FR": "Échanger",
        "it-IT": "Commercia",
        "ja-JP": "取引",
        "pl-PL": "Wymień",
        "pt-BR": "Trocar",
        "ru-RU": "Торговать",
        "zh-CN": "交易",
        "zh-TW": "交易"
    },
    {
        "opy": "Total",
        "en-US": "Total",
        "guid": "00000000C5DE",
        "de-DE": "Insgesamt",
        "it-IT": "Totale",
        "ja-JP": "合計",
        "pl-PL": "Suma",
        "ru-RU": "Всего",
        "zh-CN": "总计",
        "zh-TW": "總計"
    },
    {
        "opy": "Times",
        "en-US": "Times",
        "guid": "00000000C005",
        "de-DE": "Zeiten",
        "es-ES": "Tiempos",
        "es-MX": "Tiempos",
        "fr-FR": "Temps",
        "it-IT": "Tempi",
        "ja-JP": "時間",
        "pl-PL": "Czasy",
        "pt-BR": "Tempos",
        "ru-RU": "Результаты",
        "zh-CN": "时间",
        "zh-TW": "時間"
    },
    {
        "guid": "00000000C006",
        "opy": "Time",
        "en-US": "Time",
        "de-DE": "Zeit",
        "es-ES": "Tiempo",
        "es-MX": "Tiempo",
        "fr-FR": "Temps",
        "it-IT": "Tempo",
        "ja-JP": "時間",
        "pl-PL": "Czas",
        "pt-BR": "Tempo",
        "ru-RU": "Время",
        "zh-CN": "时间",
        "zh-TW": "時間"
    },
    {
        "opy": "Tiebreaker",
        "en-US": "Tiebreaker",
        "guid": "00000000BFF9",
        "de-DE": "Nächster Punkt entscheidet",
        "es-ES": "Desempate",
        "es-MX": "Desempate",
        "fr-FR": "Décisif",
        "it-IT": "Spareggio",
        "ja-JP": "タイブレイカー",
        "pl-PL": "Rozstrzygnięcie",
        "pt-BR": "Desempate",
        "ru-RU": "Тай-брейк",
        "zh-CN": "绝杀局",
        "zh-TW": "決勝賽局"
    },
    {
        "opy": "Threats",
        "en-US": "Threats",
        "guid": "00000000C07D",
        "de-DE": "Bedrohungen",
        "es-ES": "Amenazas",
        "es-MX": "Amenazas",
        "fr-FR": "Menaces",
        "it-IT": "Minacce",
        "ja-JP": "脅威",
        "pl-PL": "Zagrożenia",
        "pt-BR": "Ameaças",
        "ru-RU": "Угрозы",
        "zh-CN": "威胁",
        "zh-TW": "威脅"
    },
    {
        "opy": "Threat Levels",
        "en-US": "Threat Levels",
        "guid": "00000000C07F",
        "de-DE": "Bedrohungsstufen",
        "es-ES": "Niveles de amenaza",
        "es-MX": "Niveles de amenaza",
        "fr-FR": "Niveaux de menace",
        "it-IT": "Livelli Minaccia",
        "ja-JP": "脅威レベル",
        "pl-PL": "Poziomy zagrożenia",
        "pt-BR": "Níveis de Ameaça",
        "ru-RU": "Уровни угрозы",
        "zh-CN": "威胁等级",
        "zh-TW": "威脅等級"
    },
    {
        "opy": "Threat Level",
        "en-US": "Threat Level",
        "guid": "00000000C07E",
        "de-DE": "Bedrohungsstufe",
        "es-ES": "Nivel de amenaza",
        "es-MX": "Nivel de amenaza",
        "fr-FR": "Niveau de menace",
        "it-IT": "Livello Minaccia",
        "ja-JP": "脅威レベル",
        "pl-PL": "Poziom zagrożenia",
        "pt-BR": "Nível de Ameaça",
        "ru-RU": "Уровень угрозы",
        "zh-CN": "威胁等级",
        "zh-TW": "威脅等級"
    },
    {
        "opy": "Threat",
        "en-US": "Threat",
        "guid": "00000000C07C",
        "de-DE": "Bedrohung",
        "es-ES": "Amenaza",
        "es-MX": "Amenaza",
        "fr-FR": "Menace",
        "it-IT": "Minaccia",
        "ja-JP": "脅威",
        "pl-PL": "Zagrożenie",
        "pt-BR": "Ameaça",
        "ru-RU": "Угроза",
        "zh-CN": "威胁",
        "zh-TW": "威脅"
    },
    {
        "opy": "That Was Awesome",
        "en-US": "That Was Awesome",
        "guid": "00000000C190",
        "de-DE": "Das war der Hammer",
        "es-ES": "Ha sido genial",
        "es-MX": "Eso estuvo increíble",
        "fr-FR": "C’était génial",
        "it-IT": "È Stato Incredibile",
        "ja-JP": "百点満点！",
        "pl-PL": "To było niesamowite",
        "pt-BR": "Essa Foi Demais",
        "ru-RU": "Это было потрясно",
        "zh-CN": "太棒了",
        "zh-TW": "真厲害"
    },
    {
        "guid": "00000000C17C",
        "opy": "Thanks",
        "en-US": "Thanks",
        "de-DE": "Danke",
        "es-ES": "Gracias",
        "es-MX": "Gracias",
        "fr-FR": "Remerciements",
        "it-IT": "Grazie",
        "ja-JP": "ありがとう",
        "pl-PL": "Dzięki",
        "pt-BR": "Valeu",
        "ru-RU": "Спасибо",
        "zh-CN": "感谢",
        "zh-TW": "謝謝"
    },
    {
        "guid": "00000000C17D",
        "opy": "Thank You",
        "en-US": "Thank You",
        "de-DE": "Vielen Dank",
        "es-ES": "Te lo agradezco",
        "es-MX": "Gracias",
        "fr-FR": "Merci",
        "it-IT": "Ti Ringrazio",
        "ja-JP": "ありがとう",
        "pl-PL": "Dziękuję",
        "pt-BR": "Obrigado",
        "ru-RU": "Благодарю",
        "zh-CN": "衷心感谢",
        "zh-TW": "謝謝你"
    },
    {
        "opy": "Terrible",
        "en-US": "Terrible",
        "guid": "00000000C14E",
        "de-DE": "Sehr schlecht",
        "es-MX": "Pésimo",
        "it-IT": "Terribile",
        "ja-JP": "最悪",
        "pl-PL": "Okropnie",
        "pt-BR": "Terrível",
        "ru-RU": "Ужасно",
        "zh-CN": "极差",
        "zh-TW": "差"
    },
    {
        "guid": "00000000BFEE",
        "opy": "Teams",
        "en-US": "Teams",
        "es-ES": "Equipos",
        "es-MX": "Equipos",
        "fr-FR": "Équipes",
        "it-IT": "Squadre",
        "ja-JP": "チーム",
        "pl-PL": "Drużyny",
        "pt-BR": "Equipes",
        "ru-RU": "Команды",
        "zh-CN": "队伍",
        "zh-TW": "隊伍"
    },
    {
        "opy": "Teammates",
        "en-US": "Teammates",
        "guid": "00000000C291",
        "de-DE": "Teammitglieder",
        "es-ES": "Compañeros de equipo",
        "es-MX": "Compañeros de equipo",
        "fr-FR": "Équipiers",
        "it-IT": "Compagni di squadra",
        "ja-JP": "チームメイト",
        "pl-PL": "Członkowie drużyny",
        "pt-BR": "Aliados",
        "ru-RU": "Союзники",
        "zh-CN": "队友",
        "zh-TW": "隊友"
    },
    {
        "opy": "Teammate",
        "en-US": "Teammate",
        "guid": "00000000C28F",
        "de-DE": "Teammitglied",
        "es-ES": "Compañero de equipo",
        "es-MX": "Compañero de equipo",
        "fr-FR": "Équipier",
        "it-IT": "Compagno di squadra",
        "ja-JP": "チームメイト",
        "pl-PL": "Członek drużyny",
        "pt-BR": "Aliado",
        "ru-RU": "Союзник",
        "zh-CN": "队友",
        "zh-TW": "隊友"
    },
    {
        "guid": "00000000C004",
        "opy": "Team",
        "en-US": "Team",
        "es-ES": "Equipo",
        "es-MX": "Equipo",
        "fr-FR": "Équipe",
        "it-IT": "Squadra",
        "ja-JP": "チーム",
        "pl-PL": "Drużyna",
        "pt-BR": "Equipe",
        "ru-RU": "Команда",
        "zh-CN": "队伍",
        "zh-TW": "隊伍"
    },
    {
        "opy": "Targets",
        "en-US": "Targets",
        "guid": "00000000BFDE",
        "de-DE": "Ziele",
        "es-ES": "Objetivos",
        "es-MX": "Objetivos",
        "fr-FR": "Cibles",
        "it-IT": "Bersagli",
        "ja-JP": "ターゲット",
        "pl-PL": "Cele",
        "pt-BR": "Alvos",
        "ru-RU": "Цели",
        "zh-CN": "目标",
        "zh-TW": "目標"
    },
    {
        "guid": "00000000BFDF",
        "opy": "Target",
        "en-US": "Target",
        "de-DE": "Ziel",
        "es-ES": "Objetivo",
        "es-MX": "Objetivo",
        "fr-FR": "Cible",
        "it-IT": "Bersaglio",
        "ja-JP": "ターゲット",
        "pl-PL": "Cel",
        "pt-BR": "Alvo",
        "ru-RU": "Цель",
        "zh-CN": "目标",
        "zh-TW": "目標"
    },
    {
        "opy": "Surviving",
        "en-US": "Surviving",
        "guid": "00000000C117",
        "de-DE": "Überlebe",
        "es-ES": "Sobreviviendo",
        "es-MX": "Sobreviviendo",
        "fr-FR": "Survie",
        "it-IT": "Sopravvivenza in Corso",
        "ja-JP": "生存中",
        "pl-PL": "Przetrwanie",
        "pt-BR": "Sobrevivendo",
        "ru-RU": "Выживает",
        "zh-CN": "正在生存",
        "zh-TW": "存活中"
    },
    {
        "opy": "Survived",
        "en-US": "Survived",
        "guid": "00000000C119",
        "de-DE": "Überlebt",
        "es-ES": "Sobrevivido",
        "es-MX": "Sobrevivido",
        "fr-FR": "Survécu",
        "it-IT": "Sopravvissuto",
        "ja-JP": "生存した",
        "pl-PL": "Przetrwano",
        "pt-BR": "Sobreviveu",
        "ru-RU": "Выжил",
        "zh-CN": "已生存",
        "zh-TW": "生還"
    },
    {
        "opy": "Survive",
        "en-US": "Survive",
        "guid": "00000000C118",
        "de-DE": "Überleben",
        "es-ES": "Sobrevivir",
        "es-MX": "Sobrevivir",
        "fr-FR": "Survivre",
        "it-IT": "Sopravvivi",
        "ja-JP": "生存",
        "pl-PL": "Przetrwaj",
        "pt-BR": "Sobreviver",
        "ru-RU": "Выживать",
        "zh-CN": "生存",
        "zh-TW": "存活"
    },
    {
        "opy": "Superb",
        "en-US": "Superb",
        "guid": "00000000C148",
        "de-DE": "Super",
        "es-ES": "Soberbio",
        "es-MX": "Magnífico",
        "fr-FR": "Superbe",
        "it-IT": "Superbo",
        "ja-JP": "見事",
        "pl-PL": "Super",
        "pt-BR": "Estupendo",
        "ru-RU": "Превосходно",
        "zh-CN": "强烈",
        "zh-TW": "非常"
    },
    {
        "opy": "Sunk",
        "en-US": "Sunk",
        "guid": "00000000C0CE",
        "de-DE": "Versenkt",
        "es-ES": "Hundido",
        "es-MX": "Hundido",
        "fr-FR": "Noyé",
        "it-IT": "Affondato",
        "ja-JP": "下降した",
        "pl-PL": "Zatopiono",
        "pt-BR": "Afundado",
        "ru-RU": "Погрузил",
        "zh-CN": "已击沉",
        "zh-TW": "遭到沉沒"
    },
    {
        "opy": "Sudden Death",
        "en-US": "Sudden Death",
        "guid": "00000000BFF8",
        "de-DE": "K.o.-Runde",
        "es-ES": "Muerte súbita",
        "es-MX": "Muerte súbita",
        "fr-FR": "Mort subite",
        "it-IT": "Scontro decisivo",
        "ja-JP": "サドンデス",
        "pl-PL": "Decydujące starcie",
        "pt-BR": "Morte Súbita",
        "ru-RU": "Внезапная смерть",
        "zh-CN": "绝杀局",
        "zh-TW": "殊死戰"
    },
    {
        "guid": "00000000C080",
        "opy": "Success",
        "en-US": "Success",
        "de-DE": "Erfolg",
        "es-ES": "Éxito",
        "es-MX": "Éxito",
        "fr-FR": "Réussite",
        "it-IT": "Successo",
        "ja-JP": "完了",
        "pl-PL": "Sukces",
        "pt-BR": "Sucesso",
        "ru-RU": "Успех",
        "zh-CN": "成功",
        "zh-TW": "成功"
    },
    {
        "guid": "00000000C138",
        "opy": "Suboptimal",
        "en-US": "Suboptimal",
        "es-ES": "Subóptimo",
        "es-MX": "Casi óptimo",
        "fr-FR": "Sous-optimal",
        "it-IT": "Subottimale",
        "ja-JP": "準最適",
        "pl-PL": "Nieoptymalne",
        "pt-BR": "Abaixo do Ideal",
        "ru-RU": "Неоптимальный",
        "zh-CN": "次佳",
        "zh-TW": "次佳"
    },
    {
        "opy": "Stunning",
        "en-US": "Stunning",
        "guid": "00000000C5F2",
        "de-DE": "Betäuben",
        "es-ES": "Aturdiendo",
        "es-MX": "Aturdiendo",
        "fr-FR": "Étourdissant",
        "it-IT": "Stordimento in Corso",
        "ja-JP": "スタンしている",
        "pl-PL": "Ogłuszanie",
        "pt-BR": "Atordoando",
        "ru-RU": "Оглушает",
        "zh-CN": "正在昏迷",
        "zh-TW": "正在擊昏"
    },
    {
        "guid": "00000000C5F3",
        "opy": "Stunned",
        "en-US": "Stunned",
        "de-DE": "Betäubt",
        "es-ES": "Aturdido",
        "es-MX": "Aturdido",
        "fr-FR": "Étourdi",
        "it-IT": "Stordito",
        "ja-JP": "スタンされている",
        "pl-PL": "Ogłuszono",
        "pt-BR": "Atordoado",
        "ru-RU": "Оглушил",
        "zh-CN": "已昏迷",
        "zh-TW": "遭到擊昏"
    },
    {
        "opy": "Stun",
        "en-US": "Stun",
        "guid": "00000000C5F1",
        "de-DE": "Betäubung",
        "es-ES": "Aturdir",
        "es-MX": "Aturdir",
        "fr-FR": "Étourdir",
        "it-IT": "Stordisce",
        "ja-JP": "スタンする",
        "pl-PL": "Ogłusz",
        "pt-BR": "Atordoar",
        "ru-RU": "Оглушить",
        "zh-CN": "昏迷",
        "zh-TW": "擊昏"
    },
    {
        "guid": "00000000C98C",
        "opy": "Strength",
        "en-US": "Strength",
        "de-DE": "Stärke",
        "es-ES": "Fuerza",
        "es-MX": "Fuerza",
        "fr-FR": "Force",
        "it-IT": "Forza",
        "ja-JP": "腕力",
        "pl-PL": "Siła",
        "pt-BR": "Força",
        "ru-RU": "Сила",
        "zh-CN": "力量",
        "zh-TW": "力量"
    },
    {
        "opy": "Stopping",
        "en-US": "Stopping",
        "guid": "00000000C121",
        "de-DE": "Stopp",
        "es-ES": "Parando",
        "es-MX": "Deteniendo",
        "fr-FR": "Arrêt",
        "it-IT": "Interruzione in Corso",
        "ja-JP": "停止中",
        "pl-PL": "Zatrzymywanie",
        "pt-BR": "Parando",
        "ru-RU": "Останавливает",
        "zh-CN": "正在阻止",
        "zh-TW": "正在停止"
    },
    {
        "opy": "Stopped",
        "en-US": "Stopped",
        "guid": "00000000C122",
        "de-DE": "Gestoppt",
        "es-ES": "Parado",
        "es-MX": "Detenido",
        "fr-FR": "Arrêté",
        "it-IT": "Interrotto",
        "ja-JP": "停止した",
        "pl-PL": "Zatrzymano",
        "pt-BR": "Parado",
        "ru-RU": "Остановил",
        "zh-CN": "已阻止",
        "zh-TW": "已停止"
    },
    {
        "guid": "00000000C120",
        "opy": "Stop",
        "en-US": "Stop",
        "de-DE": "Stoppen",
        "es-ES": "Parar",
        "es-MX": "Detener",
        "fr-FR": "Arrêter",
        "it-IT": "Interrompi",
        "ja-JP": "停止",
        "pl-PL": "Zatrzymaj",
        "pt-BR": "Parar",
        "ru-RU": "Остановить",
        "zh-CN": "阻止",
        "zh-TW": "停止"
    },
    {
        "opy": "Staying",
        "en-US": "Staying",
        "guid": "00000000CABA",
        "de-DE": "Verbleiben",
        "es-ES": "Quedándose",
        "es-MX": "Quedándose",
        "fr-FR": "Suit",
        "it-IT": "Continuazione in Corso",
        "ja-JP": "ステイしている",
        "pl-PL": "Zostawanie",
        "pt-BR": "Permanecendo",
        "ru-RU": "Остается",
        "zh-CN": "正在停止",
        "zh-TW": "不再要牌"
    },
    {
        "opy": "Stayed",
        "en-US": "Stayed",
        "guid": "00000000CABE",
        "de-DE": "Geblieben",
        "es-ES": "Quedado",
        "es-MX": "Se quedó",
        "fr-FR": "Suivi",
        "it-IT": "Continuato",
        "ja-JP": "ステイされた",
        "pl-PL": "Pozostano",
        "pt-BR": "Permaneceu",
        "ru-RU": "Остался",
        "zh-CN": "已停止 ",
        "zh-TW": "不再要牌"
    },
    {
        "opy": "Stay Away",
        "en-US": "Stay Away",
        "guid": "00000000C189",
        "de-DE": "Bleib weg",
        "es-ES": "Aléjate",
        "es-MX": "Aléjate de mí",
        "fr-FR": "Éloignez-vous",
        "it-IT": "Stai alla Larga",
        "ja-JP": "離れていろ",
        "pl-PL": "Trzymaj się z dala",
        "pt-BR": "Fique Longe",
        "ru-RU": "Не подходи",
        "zh-CN": "走开",
        "zh-TW": "走開"
    },
    {
        "opy": "Stay",
        "en-US": "Stay",
        "guid": "00000000CAB9",
        "de-DE": "Bleiben",
        "es-ES": "Quedarse",
        "es-MX": "Quedarse",
        "fr-FR": "Suivre",
        "it-IT": "Continua",
        "ja-JP": "ステイする",
        "pl-PL": "Zostań",
        "pt-BR": "Permanecer",
        "ru-RU": "Остаться",
        "zh-CN": "停止",
        "zh-TW": "不再要牌"
    },
    {
        "guid": "00000000C094",
        "opy": "Status",
        "en-US": "Status",
        "es-ES": "Estado",
        "es-MX": "Estado",
        "fr-FR": "Statut",
        "it-IT": "Stato",
        "ja-JP": "ステータス",
        "ru-RU": "Статус",
        "zh-CN": "状态",
        "zh-TW": "狀態"
    },
    {
        "opy": "Starting",
        "en-US": "Starting",
        "guid": "00000000C2A3",
        "de-DE": "Start",
        "es-ES": "Iniciando",
        "es-MX": "Comenzando",
        "fr-FR": "Commencement",
        "it-IT": "Avvio in Corso",
        "ja-JP": "開始している",
        "pl-PL": "Rozpoczynanie",
        "pt-BR": "Iniciando",
        "ru-RU": "Начинает",
        "zh-CN": "正在开始",
        "zh-TW": "正在開始"
    },
    {
        "opy": "Started",
        "en-US": "Started",
        "guid": "00000000C2A4",
        "de-DE": "Gestartet",
        "es-ES": "Iniciado",
        "es-MX": "Comenzado",
        "fr-FR": "Commencé",
        "it-IT": "Avviato",
        "ja-JP": "開始した",
        "pl-PL": "Rozpoczęto",
        "pt-BR": "Iniciado",
        "ru-RU": "Начал",
        "zh-CN": "已开始",
        "zh-TW": "已開始"
    },
    {
        "opy": "Start",
        "en-US": "Start",
        "guid": "00000000C2A2",
        "de-DE": "Starten",
        "es-ES": "Iniciar",
        "es-MX": "Comenzar",
        "fr-FR": "Commencer",
        "it-IT": "Avvio",
        "ja-JP": "開始",
        "pl-PL": "Rozpocznij",
        "pt-BR": "Iniciar",
        "ru-RU": "Начинать",
        "zh-CN": "开始",
        "zh-TW": "開始"
    },
    {
        "opy": "Stars",
        "en-US": "Stars",
        "guid": "00000000C5C2",
        "de-DE": "Sterne",
        "es-ES": "Estrellas",
        "es-MX": "Estrellas",
        "fr-FR": "Étoiles",
        "it-IT": "Stelle",
        "ja-JP": "スター",
        "pl-PL": "Gwiazdy",
        "pt-BR": "Estrelas",
        "ru-RU": "Звезды",
        "zh-CN": "群星",
        "zh-TW": "星星"
    },
    {
        "guid": "00000000C5C1",
        "opy": "Star",
        "en-US": "Star",
        "de-DE": "Stern",
        "es-ES": "Estrella",
        "es-MX": "Estrella",
        "fr-FR": "Étoile",
        "it-IT": "Stella",
        "ja-JP": "スター",
        "pl-PL": "Gwiazdka",
        "pt-BR": "Estrela",
        "ru-RU": "Звезда",
        "zh-CN": "星星",
        "zh-TW": "星星"
    },
    {
        "opy": "Stable",
        "en-US": "Stable",
        "guid": "00000000C13E",
        "de-DE": "Stabil",
        "es-ES": "Estable",
        "es-MX": "Estable",
        "it-IT": "Stabile",
        "ja-JP": "安定",
        "pl-PL": "Stabilne",
        "pt-BR": "Estável",
        "ru-RU": "Стабильный",
        "zh-CN": "存放宠物",
        "zh-TW": "穩定"
    },
    {
        "opy": "Stabilizing",
        "en-US": "Stabilizing",
        "guid": "00000000C0F1",
        "de-DE": "Stabilisierung",
        "es-ES": "Estabilizando",
        "es-MX": "Estabilizando",
        "fr-FR": "Stabilisation",
        "it-IT": "Stabilizzazione in Corso",
        "ja-JP": "安定化中",
        "pl-PL": "Stabilizowanie",
        "pt-BR": "Estabilizando",
        "ru-RU": "Стабилизирует",
        "zh-CN": "正在稳定",
        "zh-TW": "正在穩定"
    },
    {
        "opy": "Stabilized",
        "en-US": "Stabilized",
        "guid": "00000000C0F2",
        "de-DE": "Stabilisiert",
        "es-ES": "Estabilizado",
        "es-MX": "Estabilizado",
        "fr-FR": "Stabilisé",
        "it-IT": "Stabilizzato",
        "ja-JP": "安定化した",
        "pl-PL": "Ustabilizowano",
        "pt-BR": "Estabilizado",
        "ru-RU": "Стабилизировал",
        "zh-CN": "已稳定",
        "zh-TW": "獲得穩定"
    },
    {
        "opy": "Stabilize",
        "en-US": "Stabilize",
        "guid": "00000000C0F0",
        "de-DE": "Stabilisieren",
        "es-ES": "Estabilizar",
        "es-MX": "Estabilizar",
        "fr-FR": "Stabiliser",
        "it-IT": "Stabilizza",
        "ja-JP": "安定化",
        "pl-PL": "Ustabilizuj",
        "pt-BR": "Estabilizar",
        "ru-RU": "Стабилизировать",
        "zh-CN": "稳定",
        "zh-TW": "穩定"
    },
    {
        "opy": "Spheres",
        "en-US": "Spheres",
        "guid": "00000000C282",
        "de-DE": "Sphären",
        "es-ES": "Esferas",
        "es-MX": "Esferas",
        "fr-FR": "Sphères",
        "it-IT": "Sfere",
        "ja-JP": "球体",
        "pl-PL": "Sfery",
        "pt-BR": "Esferas",
        "ru-RU": "Сферы",
        "zh-CN": "球形",
        "zh-TW": "球體"
    },
    {
        "guid": "00000000C283",
        "opy": "Sphere",
        "en-US": "Sphere",
        "de-DE": "Sphäre",
        "es-ES": "Esfera",
        "es-MX": "Esfera",
        "fr-FR": "Sphère",
        "it-IT": "Sfera",
        "ja-JP": "球体",
        "pl-PL": "Sfera",
        "pt-BR": "Esfera",
        "ru-RU": "Сфера",
        "zh-CN": "球体",
        "zh-TW": "球體"
    },
    {
        "opy": "Speeds",
        "en-US": "Speeds",
        "guid": "00000000C872",
        "de-DE": "Tempo",
        "es-ES": "Velocidades",
        "es-MX": "Velocidades",
        "fr-FR": "Vitesses",
        "it-IT": "Velocità Non Direzionali",
        "ja-JP": "速さ",
        "pl-PL": "Szybkości",
        "pt-BR": "Velocidades",
        "ru-RU": "Скорости",
        "zh-CN": "速度",
        "zh-TW": "速度"
    },
    {
        "guid": "00000000C871",
        "opy": "Speed",
        "en-US": "Speed",
        "de-DE": "Geschwindigkeit",
        "es-ES": "Velocidad",
        "es-MX": "Velocidad",
        "fr-FR": "Vitesse",
        "it-IT": "Velocità Non Direzionale",
        "ja-JP": "速さ",
        "pl-PL": "Szybkość",
        "pt-BR": "Velocidade",
        "ru-RU": "Скорость",
        "zh-CN": "速度",
        "zh-TW": "速度"
    },
    {
        "opy": "Spawning",
        "en-US": "Spawning",
        "guid": "00000000C115",
        "de-DE": "Spawn",
        "es-ES": "Engendrando",
        "es-MX": "Apareciendo",
        "fr-FR": "Apparition",
        "it-IT": "Generazione in Corso",
        "ja-JP": "スポーン中",
        "pl-PL": "Odradzanie",
        "pt-BR": "Surgindo",
        "ru-RU": "Порождает",
        "zh-CN": "正在孵化",
        "zh-TW": "正在重生"
    },
    {
        "opy": "Spawned",
        "en-US": "Spawned",
        "guid": "00000000C116",
        "de-DE": "Gespawnt",
        "es-ES": "Engendrado",
        "es-MX": "Aparecido",
        "fr-FR": "Apparu",
        "it-IT": "Generato",
        "ja-JP": "スポーンした",
        "pl-PL": "Odrodzono",
        "pt-BR": "Surgido",
        "ru-RU": "Породил",
        "zh-CN": "已孵化",
        "zh-TW": "得到重生"
    },
    {
        "opy": "Spawn",
        "en-US": "Spawn",
        "guid": "00000000C114",
        "de-DE": "Spawnen",
        "es-ES": "Engendrar",
        "es-MX": "Aparecer",
        "fr-FR": "Apparaître",
        "it-IT": "Genera",
        "ja-JP": "スポーン",
        "pl-PL": "Odrodź",
        "pt-BR": "Surgir",
        "ru-RU": "Порождать",
        "zh-CN": "孵化",
        "zh-TW": "重生"
    },
    {
        "guid": "00000000C28D",
        "opy": "Sparkles",
        "en-US": "Sparkles",
        "de-DE": "Glitzer",
        "es-ES": "Destellos",
        "es-MX": "Chispas",
        "fr-FR": "Étincelles",
        "it-IT": "Scintille",
        "ja-JP": "スパークル",
        "pl-PL": "Iskry",
        "pt-BR": "Faíscas",
        "ru-RU": "Искры",
        "zh-CN": "火花",
        "zh-TW": "火花"
    },
    {
        "opy": "Spades",
        "en-US": "Spades",
        "guid": "00000000CABD",
        "de-DE": "Pik",
        "es-ES": "Picas",
        "es-MX": "Picas",
        "fr-FR": "Pique",
        "it-IT": "Picche",
        "ja-JP": "スペード",
        "pl-PL": "Pik",
        "pt-BR": "Espadas",
        "ru-RU": "Пики",
        "zh-CN": "黑桃",
        "zh-TW": "黑桃"
    },
    {
        "guid": "00000000CAC3",
        "opy": "Spade",
        "en-US": "Spade",
        "de-DE": "Pik",
        "es-ES": "Pica",
        "es-MX": "Pica",
        "fr-FR": "Pique",
        "it-IT": "Picca",
        "ja-JP": "スペード",
        "pl-PL": "Pik",
        "pt-BR": "Espadas",
        "ru-RU": "Пики",
        "zh-CN": "黑桃",
        "zh-TW": "黑桃"
    },
    {
        "opy": "Southwest",
        "en-US": "Southwest",
        "guid": "00000000C173",
        "de-DE": "Südwesten",
        "es-ES": "Suroeste",
        "es-MX": "Sudoeste",
        "fr-FR": "Sud-ouest",
        "it-IT": "Sud-ovest",
        "ja-JP": "南西",
        "pl-PL": "Południowy zachód",
        "pt-BR": "Sudoeste",
        "ru-RU": "Юго-запад",
        "zh-CN": "西南",
        "zh-TW": "西南"
    },
    {
        "opy": "Southeast",
        "en-US": "Southeast",
        "guid": "00000000C16F",
        "de-DE": "Südosten",
        "es-ES": "Sureste",
        "es-MX": "Sudeste",
        "fr-FR": "Sud-est",
        "it-IT": "Sud-est",
        "ja-JP": "南東",
        "pl-PL": "Południowy wschód",
        "pt-BR": "Sudeste",
        "ru-RU": "Юго-восток",
        "zh-CN": "东南",
        "zh-TW": "東南"
    },
    {
        "opy": "South",
        "en-US": "South",
        "guid": "00000000C171",
        "de-DE": "Süden",
        "es-ES": "Sur",
        "es-MX": "Sur",
        "fr-FR": "Sud",
        "it-IT": "Sud",
        "ja-JP": "南",
        "pl-PL": "Południe",
        "pt-BR": "Sul",
        "ru-RU": "Юг",
        "zh-CN": "南",
        "zh-TW": "南"
    },
    {
        "guid": "00000000C188",
        "opy": "Sorry",
        "en-US": "Sorry",
        "de-DE": "Tut mir leid",
        "es-ES": "Lo siento",
        "es-MX": "Lo siento",
        "fr-FR": "Désolé",
        "it-IT": "Mi Spiace",
        "ja-JP": "謝ればいいのかしら",
        "pl-PL": "Wybacz",
        "pt-BR": "Desculpe",
        "ru-RU": "Извини",
        "zh-CN": "抱歉",
        "zh-TW": "抱歉"
    },
    {
        "opy": "Sold",
        "en-US": "Sold",
        "guid": "00000000C104",
        "de-DE": "Verkauft",
        "es-ES": "Vendido",
        "es-MX": "Vendido",
        "fr-FR": "Vendu",
        "it-IT": "Venduto",
        "ja-JP": "売却した",
        "pl-PL": "Sprzedano",
        "pt-BR": "Vendido",
        "ru-RU": "Продал",
        "zh-CN": "已出售",
        "zh-TW": "遭到出售"
    },
    {
        "opy": "Slowest",
        "en-US": "Slowest",
        "guid": "00000000C151",
        "de-DE": "Am langsamsten",
        "es-ES": "El más lento",
        "es-MX": "Mucho más lento",
        "fr-FR": "Le plus lent",
        "it-IT": "Lentissimo",
        "ja-JP": "最遅",
        "pl-PL": "Najwolniej",
        "pt-BR": "O Mais Lento",
        "ru-RU": "Очень медленно",
        "zh-CN": "最慢",
        "zh-TW": "最慢"
    },
    {
        "opy": "Slower",
        "en-US": "Slower",
        "guid": "00000000C150",
        "de-DE": "Langsamer",
        "es-ES": "Más lento",
        "es-MX": "Más lento",
        "fr-FR": "Plus lent",
        "it-IT": "Più Lento",
        "ja-JP": "より遅い",
        "pl-PL": "Wolniej",
        "pt-BR": "Mais Lento",
        "ru-RU": "Медленнее",
        "zh-CN": "较慢",
        "zh-TW": "較慢"
    },
    {
        "opy": "Slow",
        "en-US": "Slow",
        "guid": "00000000C14F",
        "de-DE": "Langsam",
        "es-ES": "Lento",
        "es-MX": "Lento",
        "fr-FR": "Lent",
        "it-IT": "Lento",
        "ja-JP": "遅い",
        "pl-PL": "Wolno",
        "pt-BR": "Lento",
        "ru-RU": "Медленно",
        "zh-CN": "慢",
        "zh-TW": "慢"
    },
    {
        "opy": "Slept",
        "en-US": "Slept",
        "guid": "00000000C5F0",
        "de-DE": "Eingeschläfert",
        "es-ES": "Dormido",
        "es-MX": "Dormido",
        "fr-FR": "Dormi",
        "it-IT": "Addormentato",
        "ja-JP": "眠った",
        "pl-PL": "Spano",
        "pt-BR": "Adormecido",
        "ru-RU": "Усыплен",
        "zh-CN": "已沉睡",
        "zh-TW": "已睡著"
    },
    {
        "opy": "Sleeping",
        "en-US": "Sleeping",
        "guid": "00000000C5EF",
        "de-DE": "Schlaf",
        "es-ES": "Durmiendo",
        "es-MX": "Durmiendo",
        "fr-FR": "Dort",
        "it-IT": "Dormita in Corso",
        "ja-JP": "眠っている",
        "pl-PL": "Spanie",
        "pt-BR": "Dormindo",
        "ru-RU": "Спит",
        "zh-CN": "正在沉睡",
        "zh-TW": "正在睡眠"
    },
    {
        "opy": "Sleep",
        "en-US": "Sleep",
        "guid": "00000000C5EE",
        "de-DE": "Einschläfern",
        "es-ES": "Dormir",
        "es-MX": "Dormir",
        "fr-FR": "Sommeil",
        "it-IT": "Addormenta",
        "ja-JP": "眠る",
        "pl-PL": "Śpij",
        "pt-BR": "Dormir",
        "ru-RU": "Спать",
        "zh-CN": "沉睡",
        "zh-TW": "睡眠"
    },
    {
        "opy": "Skipping",
        "en-US": "Skipping",
        "guid": "00000000CAB7",
        "de-DE": "Auslassen",
        "es-ES": "Saltando",
        "es-MX": "Omitiendo",
        "fr-FR": "Passe",
        "it-IT": "Salto in Corso",
        "ja-JP": "スキップしている",
        "pl-PL": "Pomijanie",
        "pt-BR": "Passando",
        "ru-RU": "Пропускает",
        "zh-CN": "正在跳过",
        "zh-TW": "跳過"
    },
    {
        "opy": "Skipped",
        "en-US": "Skipped",
        "guid": "00000000CAB8",
        "de-DE": "Übersprungen",
        "es-ES": "Saltado",
        "es-MX": "Omitido",
        "fr-FR": "Passé",
        "it-IT": "Saltato",
        "ja-JP": "スキップされた",
        "pl-PL": "Pominięto",
        "pt-BR": "Passou",
        "ru-RU": "Пропустил",
        "zh-CN": "已跳过",
        "zh-TW": "跳過"
    },
    {
        "guid": "00000000CAB6",
        "opy": "Skip",
        "en-US": "Skip",
        "de-DE": "Überspringen",
        "es-ES": "Saltar",
        "es-MX": "Omitir",
        "fr-FR": "Passer",
        "it-IT": "Salta",
        "ja-JP": "スキップする",
        "pl-PL": "Pomiń",
        "pt-BR": "Passar",
        "ru-RU": "Пропустить",
        "zh-CN": "跳过",
        "zh-TW": "跳過"
    },
    {
        "opy": "Sinking",
        "en-US": "Sinking",
        "guid": "00000000C0CD",
        "de-DE": "Versenkung",
        "es-ES": "Hundiendo",
        "es-MX": "Hundiéndose",
        "fr-FR": "Noyade",
        "it-IT": "Affondamento in Corso",
        "ja-JP": "下降中",
        "pl-PL": "Zatapianie",
        "pt-BR": "Afundando",
        "ru-RU": "Тонет",
        "zh-CN": "正在击沉",
        "zh-TW": "正在沉沒"
    },
    {
        "opy": "Sink",
        "en-US": "Sink",
        "guid": "00000000C0CC",
        "de-DE": "Versenken",
        "es-ES": "Hundir",
        "es-MX": "Hundir",
        "fr-FR": "Noyer",
        "it-IT": "Affonda",
        "ja-JP": "下降",
        "pl-PL": "Zatop",
        "pt-BR": "Afundar",
        "ru-RU": "Тонуть",
        "zh-CN": "击沉",
        "zh-TW": "沉沒"
    },
    {
        "opy": "Shuffled",
        "en-US": "Shuffled",
        "guid": "00000000CAB5",
        "de-DE": "Gemischt",
        "es-ES": "Barajado",
        "es-MX": "Mezclado",
        "fr-FR": "Mélangé",
        "it-IT": "Mescolato",
        "ja-JP": "シャッフルされた",
        "pl-PL": "Przetasowano",
        "pt-BR": "Embaralhado",
        "ru-RU": "Замешал",
        "zh-CN": "已洗牌",
        "zh-TW": "洗牌"
    },
    {
        "opy": "Shuffle",
        "en-US": "Shuffle",
        "guid": "00000000CAB3",
        "de-DE": "Mischen",
        "es-ES": "Barajar",
        "es-MX": "Mezclar",
        "fr-FR": "Mélanger",
        "it-IT": "Mescola",
        "ja-JP": "シャッフルする",
        "pl-PL": "Przetasuj",
        "pt-BR": "Embaralhar",
        "ru-RU": "Замешать",
        "zh-CN": "洗牌",
        "zh-TW": "洗牌"
    },
    {
        "opy": "Shops",
        "en-US": "Shops",
        "guid": "00000000CA0D",
        "es-ES": "Tiendas",
        "es-MX": "Tiendas",
        "fr-FR": "Boutiques",
        "it-IT": "Negozi",
        "ja-JP": "ショップ",
        "pl-PL": "Sklepy",
        "pt-BR": "Lojas",
        "ru-RU": "Магазины",
        "zh-CN": "商店",
        "zh-TW": "商店"
    },
    {
        "guid": "00000000CA0E",
        "opy": "Shop",
        "en-US": "Shop",
        "es-ES": "Tienda",
        "es-MX": "Tienda",
        "fr-FR": "Boutique",
        "it-IT": "Negozio",
        "ja-JP": "ショップ",
        "pl-PL": "Sklep",
        "pt-BR": "Loja",
        "ru-RU": "Магазин",
        "zh-CN": "商店",
        "zh-TW": "商店"
    },
    {
        "opy": "Severing",
        "en-US": "Severing",
        "guid": "00000000C0F7",
        "de-DE": "Trennung",
        "es-ES": "Cortando",
        "es-MX": "Cortando",
        "fr-FR": "Coupure",
        "it-IT": "Taglio in Corso",
        "ja-JP": "切断中",
        "pl-PL": "Oddzielanie",
        "pt-BR": "Separando",
        "ru-RU": "Отсекает",
        "zh-CN": "正在撕裂",
        "zh-TW": "正在截斷"
    },
    {
        "opy": "Severed",
        "en-US": "Severed",
        "guid": "00000000C0F8",
        "de-DE": "Getrennt",
        "es-ES": "Cortado",
        "es-MX": "Cortado",
        "fr-FR": "Coupé",
        "it-IT": "Tagliato",
        "ja-JP": "切断した",
        "pl-PL": "Oddzielono",
        "pt-BR": "Separado",
        "ru-RU": "Отсек",
        "zh-CN": "已撕裂",
        "zh-TW": "受到截斷"
    },
    {
        "opy": "Severe",
        "en-US": "Severe",
        "guid": "00000000C147",
        "de-DE": "Schlimm",
        "es-ES": "Fuerte",
        "es-MX": "Grave",
        "fr-FR": "Grave",
        "it-IT": "Grave",
        "ja-JP": "難しい",
        "pl-PL": "Poważnie",
        "pt-BR": "Severo",
        "ru-RU": "Жесткий",
        "zh-CN": "严重",
        "zh-TW": "嚴重"
    },
    {
        "opy": "Sever",
        "en-US": "Sever",
        "guid": "00000000C0F5",
        "de-DE": "Trennen",
        "es-ES": "Cortar",
        "es-MX": "Cortar",
        "fr-FR": "Couper",
        "it-IT": "Taglia",
        "ja-JP": "切断",
        "pl-PL": "Oddziel",
        "pt-BR": "Separar",
        "ru-RU": "Отсечь",
        "zh-CN": "撕裂",
        "zh-TW": "截斷"
    },
    {
        "guid": "00000000C984",
        "opy": "Server Load Peak",
        "en-US": "Server Load Peak",
        "de-DE": "Maximale Serverauslastung",
        "es-ES": "Carga máxima del servidor",
        "es-MX": "Uso máximo del servidor",
        "fr-FR": "Pic de charge du serveur",
        "it-IT": "Carico massimo del server",
        "ja-JP": "サーバー負荷ピーク",
        "pl-PL": "Szczytowe obciążenie serwera",
        "pt-BR": "Pico de Uso do Servidor",
        "ru-RU": "Пиковая загрузка сервера",
        "zh-CN": "服务器负载峰值",
        "zh-TW": "伺服器最高負載"
    },
    {
        "guid": "00000000C983",
        "opy": "Server Load Average",
        "en-US": "Server Load Average",
        "de-DE": "Durchschnittliche Serverauslastung",
        "es-ES": "Carga media del servidor",
        "es-MX": "Uso promedio del servidor",
        "fr-FR": "Charge moyenne du serveur",
        "it-IT": "Carico medio del server",
        "ja-JP": "サーバー負荷平均",
        "pl-PL": "Średnie obciążenie serwera",
        "pt-BR": "Média de Uso do Servidor",
        "ru-RU": "Средняя загрузка сервера",
        "zh-CN": "服务器负载平均值",
        "zh-TW": "伺服器平均負載"
    },
    {
        "guid": "00000000C982",
        "opy": "Server Load",
        "en-US": "Server Load",
        "de-DE": "Serverauslastung",
        "es-ES": "Carga del servidor",
        "es-MX": "Uso del servidor",
        "fr-FR": "Charge du serveur",
        "it-IT": "Carico del server",
        "ja-JP": "サーバー負荷",
        "pl-PL": "Obciążenie serwera",
        "pt-BR": "Uso do Servidor",
        "ru-RU": "Загрузка сервера",
        "zh-CN": "服务器负载",
        "zh-TW": "伺服器負載"
    },
    {
        "opy": "Selling",
        "en-US": "Selling",
        "guid": "00000000C103",
        "de-DE": "Verkauf",
        "es-ES": "Vendiendo",
        "es-MX": "Vendiendo",
        "fr-FR": "Vente",
        "it-IT": "Vendita in Corso",
        "ja-JP": "売却中",
        "pl-PL": "Sprzedawanie",
        "pt-BR": "Vendendo",
        "ru-RU": "Продает",
        "zh-CN": "正在出售",
        "zh-TW": "正在出售"
    },
    {
        "opy": "Sell",
        "en-US": "Sell",
        "guid": "00000000C102",
        "de-DE": "Verkaufen",
        "es-ES": "Vender",
        "es-MX": "Vender",
        "fr-FR": "Vendre",
        "it-IT": "Vendi",
        "ja-JP": "売却",
        "pl-PL": "Sprzedaj",
        "pt-BR": "Vender",
        "ru-RU": "Продать",
        "zh-CN": "出售",
        "zh-TW": "出售"
    },
    {
        "opy": "Selecting",
        "en-US": "Selecting",
        "guid": "00000000CAB1",
        "de-DE": "Auswahl",
        "es-ES": "Seleccionando",
        "es-MX": "Seleccionando",
        "fr-FR": "Sélectionne",
        "it-IT": "Selezionamento in Corso",
        "ja-JP": "選択している",
        "pl-PL": "Wybieranie",
        "pt-BR": "Selecionando",
        "ru-RU": "Выбирает",
        "zh-CN": "正在选择",
        "zh-TW": "選取"
    },
    {
        "opy": "Selected",
        "en-US": "Selected",
        "guid": "00000000CAB2",
        "de-DE": "Ausgewählt",
        "es-ES": "Seleccionado",
        "es-MX": "Seleccionado",
        "fr-FR": "Sélectionné",
        "it-IT": "Selezionato",
        "ja-JP": "選択された",
        "pl-PL": "Wybrano",
        "pt-BR": "Seleção",
        "ru-RU": "Выбрал",
        "zh-CN": "已选择",
        "zh-TW": "選取"
    },
    {
        "guid": "00000000CAA6",
        "opy": "Select",
        "en-US": "Select",
        "de-DE": "Auswählen",
        "es-ES": "Seleccionar",
        "es-MX": "Seleccionar",
        "fr-FR": "Sélectionner",
        "it-IT": "Seleziona",
        "ja-JP": "選択",
        "pl-PL": "Wybierz",
        "pt-BR": "Selecionar",
        "ru-RU": "Выбрать",
        "zh-CN": "选择",
        "zh-TW": "選擇"
    },
    {
        "opy": "Securing",
        "en-US": "Securing",
        "guid": "00000000C0C0",
        "de-DE": "Sicherung",
        "es-ES": "Tomando",
        "es-MX": "Asegurando",
        "fr-FR": "Sécurisation",
        "it-IT": "Messa in Sicurezza in Corso",
        "ja-JP": "確保中",
        "pl-PL": "Zabezpieczanie",
        "pt-BR": "Tomando",
        "ru-RU": "Берет под контроль",
        "zh-CN": "正在保护",
        "zh-TW": "正在佔領"
    },
    {
        "opy": "Secured",
        "en-US": "Secured",
        "guid": "00000000C0BE",
        "de-DE": "Gesichert",
        "es-ES": "Tomado",
        "es-MX": "Asegurado",
        "fr-FR": "Sécurisé",
        "it-IT": "Messo al Sicuro",
        "ja-JP": "確保した",
        "pl-PL": "Zabezpieczono",
        "pt-BR": "Tomado",
        "ru-RU": "Взял под контроль",
        "zh-CN": "已保护",
        "zh-TW": "遭到佔領"
    },
    {
        "opy": "Secure",
        "en-US": "Secure",
        "guid": "00000000C0BD",
        "de-DE": "Sichern",
        "es-ES": "Tomar",
        "es-MX": "Asegurar",
        "fr-FR": "Sécuriser",
        "it-IT": "Metti al Sicuro",
        "ja-JP": "確保",
        "pl-PL": "Zabezpiecz",
        "pt-BR": "Tomar",
        "ru-RU": "Брать под контроль",
        "zh-CN": "保护",
        "zh-TW": "佔領"
    },
    {
        "guid": "00000000C868",
        "opy": "Secondary Fire",
        "en-US": "Secondary Fire",
        "de-DE": "Sekundärer Feuermodus",
        "es-ES": "Disparo secundario",
        "es-MX": "Disparo secundario",
        "fr-FR": "Tir secondaire",
        "it-IT": "Fuoco Secondario",
        "ja-JP": "サブ攻撃",
        "pl-PL": "Atak alternatywny",
        "pt-BR": "Disparo Secundário",
        "ru-RU": "Дополнительный режим огня",
        "zh-CN": "辅助攻击模式",
        "zh-TW": "次要攻擊"
    },
    {
        "opy": "Scores",
        "en-US": "Scores",
        "guid": "00000000C27E",
        "de-DE": "Punktestände",
        "es-ES": "Puntuaciones",
        "es-MX": "Puntuaciones",
        "fr-FR": "Points",
        "it-IT": "Punteggi",
        "ja-JP": "スコア",
        "pl-PL": "Wyniki",
        "pt-BR": "Pontuações",
        "ru-RU": "Счет",
        "zh-CN": "分数",
        "zh-TW": "分數"
    },
    {
        "guid": "00000000C27D",
        "opy": "Score",
        "en-US": "Score",
        "de-DE": "Punktestand",
        "es-ES": "Puntuación",
        "es-MX": "Puntuación",
        "fr-FR": "Points",
        "it-IT": "Punteggio",
        "ja-JP": "スコア",
        "pl-PL": "Wynik",
        "pt-BR": "Pontuação",
        "ru-RU": "Счет",
        "zh-CN": "分数",
        "zh-TW": "分數"
    },
    {
        "opy": "Saving",
        "en-US": "Saving",
        "guid": "00000000C0DF",
        "de-DE": "Speichern",
        "es-ES": "Guardando",
        "es-MX": "Guardando",
        "fr-FR": "Sauvegarde",
        "it-IT": "Salvataggio in Corso",
        "ja-JP": "保存中",
        "pl-PL": "Zapisywanie",
        "pt-BR": "Salvando",
        "ru-RU": "Сохраняет",
        "zh-CN": "正在保存",
        "zh-TW": "正在儲存"
    },
    {
        "opy": "Saved",
        "en-US": "Saved",
        "guid": "00000000C0E1",
        "de-DE": "Gespeichert",
        "es-ES": "Guardado",
        "es-MX": "Guardado",
        "fr-FR": "Sauvé",
        "it-IT": "Salvato",
        "ja-JP": "保存した",
        "pl-PL": "Zapisano",
        "pt-BR": "Salvo",
        "ru-RU": "Сохранил",
        "zh-CN": "已保存",
        "zh-TW": "已儲存"
    },
    {
        "guid": "00000000C0DE",
        "opy": "Save",
        "en-US": "Save",
        "de-DE": "Speichern",
        "es-ES": "Guardar",
        "es-MX": "Guardar",
        "fr-FR": "Sauver",
        "it-IT": "Salva",
        "ja-JP": "保存",
        "pl-PL": "Zapisz",
        "pt-BR": "Salvar",
        "ru-RU": "Сохранить",
        "zh-CN": "保存",
        "zh-TW": "儲存"
    },
    {
        "opy": "Safe",
        "en-US": "Safe",
        "guid": "00000000C13D",
        "de-DE": "Sicher",
        "es-ES": "A salvo",
        "es-MX": "Seguro",
        "fr-FR": "Sans danger",
        "it-IT": "Sicuro",
        "ja-JP": "安全",
        "pl-PL": "Bezpieczne",
        "pt-BR": "Seguro",
        "ru-RU": "В безопасности",
        "zh-CN": "安全",
        "zh-TW": "安全"
    },
    {
        "guid": "00000000C12C",
        "opy": "Running",
        "en-US": "Running",
        "de-DE": "Renne",
        "es-ES": "Corriendo",
        "es-MX": "Corriendo",
        "fr-FR": "Course",
        "it-IT": "Corsa in Corso",
        "ja-JP": "走行中",
        "pl-PL": "Biegnie",
        "pt-BR": "Correndo",
        "ru-RU": "Бежит",
        "zh-CN": "正在运行",
        "zh-TW": "正在跑"
    },
    {
        "opy": "Run",
        "en-US": "Run",
        "guid": "00000000C12B",
        "de-DE": "Rennen",
        "es-ES": "Correr",
        "es-MX": "Correr",
        "fr-FR": "Courir",
        "it-IT": "Corri",
        "ja-JP": "走行",
        "pl-PL": "Biegnij",
        "pt-BR": "Correr",
        "ru-RU": "Бежать",
        "zh-CN": "运行",
        "zh-TW": "快跑"
    },
    {
        "opy": "Rounds Won",
        "en-US": "Rounds Won",
        "guid": "00000000C089",
        "de-DE": "Runden gewonnen",
        "es-ES": "Rondas ganadas",
        "es-MX": "Rondas ganadas",
        "fr-FR": "Manches gagnées",
        "it-IT": "Round Vinti",
        "ja-JP": "ラウンド勝利",
        "pl-PL": "Wygrane rundy",
        "pt-BR": "Rodadas Vencidas",
        "ru-RU": "Выиграно раундов",
        "zh-CN": "胜利回合数",
        "zh-TW": "獲勝回合"
    },
    {
        "opy": "Rounds Lost",
        "en-US": "Rounds Lost",
        "guid": "00000000C08B",
        "de-DE": "Runden verloren",
        "es-ES": "Rondas perdidas",
        "es-MX": "Rondas perdidas",
        "fr-FR": "Manches perdues",
        "it-IT": "Round Persi",
        "ja-JP": "ラウンド敗北",
        "pl-PL": "Przegrane rundy",
        "pt-BR": "Rodadas Perdidas",
        "ru-RU": "Проиграно раундов",
        "zh-CN": "战败回合数",
        "zh-TW": "落敗回合"
    },
    {
        "opy": "Rounds",
        "en-US": "Rounds",
        "guid": "00000000BFC4",
        "de-DE": "Runden",
        "es-ES": "Rondas",
        "es-MX": "Rondas",
        "fr-FR": "Manches",
        "it-IT": "Round",
        "ja-JP": "ラウンド",
        "pl-PL": "Rundy",
        "pt-BR": "Rodadas",
        "ru-RU": "Раунды",
        "zh-CN": "回合",
        "zh-TW": "回合"
    },
    {
        "guid": "00000000BFC5",
        "opy": "Round",
        "en-US": "Round",
        "de-DE": "Runde",
        "es-ES": "Ronda",
        "es-MX": "Ronda",
        "fr-FR": "Manche",
        "ja-JP": "ラウンド",
        "pl-PL": "Runda",
        "pt-BR": "Rodada",
        "ru-RU": "Раунд",
        "zh-CN": "回合",
        "zh-TW": "回合"
    },
    {
        "guid": "00000000C163",
        "opy": "Right",
        "en-US": "Right",
        "de-DE": "Rechts",
        "es-ES": "Derecha",
        "es-MX": "Derecha",
        "fr-FR": "Droite",
        "it-IT": "Destra",
        "ja-JP": "右",
        "pl-PL": "Prawo",
        "pt-BR": "Direita",
        "ru-RU": "Вправо",
        "zh-CN": "右",
        "zh-TW": "右"
    },
    {
        "opy": "Reversing",
        "en-US": "Reversing",
        "guid": "00000000CAA4",
        "de-DE": "Umdrehen",
        "es-ES": "Invirtiendo",
        "es-MX": "Invirtiendo",
        "fr-FR": "Inverse",
        "it-IT": "Inversione in Corso",
        "ja-JP": "反転している",
        "pl-PL": "Odwracanie",
        "pt-BR": "Invertendo",
        "ru-RU": "Переворачивает",
        "zh-CN": "正在撤销",
        "zh-TW": "反轉"
    },
    {
        "opy": "Reversed",
        "en-US": "Reversed",
        "guid": "00000000CAA5",
        "de-DE": "Umgekehrt",
        "es-ES": "Invertido",
        "es-MX": "Invertido",
        "fr-FR": "Inversé",
        "it-IT": "Invertito",
        "ja-JP": "反転した",
        "pl-PL": "Odwrócono",
        "pt-BR": "Invertido",
        "ru-RU": "Перевернул",
        "zh-CN": "已撤销",
        "zh-TW": "反轉"
    },
    {
        "opy": "Reverse",
        "en-US": "Reverse",
        "guid": "00000000CAA3",
        "de-DE": "Umkehren",
        "es-ES": "Invertir",
        "es-MX": "Invertir",
        "fr-FR": "Inverser",
        "it-IT": "Inverti",
        "ja-JP": "反転する",
        "pl-PL": "Odwróć",
        "pt-BR": "Inverter",
        "ru-RU": "Перевернуть",
        "zh-CN": "撤销",
        "zh-TW": "反轉"
    },
    {
        "opy": "Revealing",
        "en-US": "Revealing",
        "guid": "00000000C0A3",
        "de-DE": "Enttarnung",
        "es-ES": "Revelando",
        "es-MX": "Revelando",
        "fr-FR": "Révélation",
        "it-IT": "Rivelazione in Corso",
        "ja-JP": "表示中",
        "pl-PL": "Ujawnianie",
        "pt-BR": "Revelando",
        "ru-RU": "Обнаруживает",
        "zh-CN": "正在揭示",
        "zh-TW": "正在現身"
    },
    {
        "opy": "Revealed",
        "en-US": "Revealed",
        "guid": "00000000C0A4",
        "de-DE": "Enttarnt",
        "es-ES": "Revelado",
        "es-MX": "Revelado",
        "fr-FR": "Révélé",
        "it-IT": "Rivelato",
        "ja-JP": "表示した",
        "pl-PL": "Ujawniono",
        "pt-BR": "Revelado",
        "ru-RU": "Обнаружил",
        "zh-CN": "已揭示",
        "zh-TW": "已現身"
    },
    {
        "opy": "Reveal",
        "en-US": "Reveal",
        "guid": "00000000C0A2",
        "de-DE": "Enttarnen",
        "es-ES": "Revelar",
        "es-MX": "Revelar",
        "fr-FR": "Révéler",
        "it-IT": "Rivela",
        "ja-JP": "開示",
        "pl-PL": "Ujawnij",
        "pt-BR": "Revelar",
        "ru-RU": "Обнаруживать",
        "zh-CN": "揭示",
        "zh-TW": "現身"
    },
    {
        "opy": "Resurrecting",
        "en-US": "Resurrecting",
        "guid": "00000000C127",
        "de-DE": "Wiederbelebung",
        "es-ES": "Resucitando",
        "es-MX": "Resucitando",
        "fr-FR": "Résurrection",
        "it-IT": "Resurrezione in Corso",
        "ja-JP": "蘇生中",
        "pl-PL": "Wskrzeszanie",
        "pt-BR": "Ressuscitando",
        "ru-RU": "Воскрешает",
        "zh-CN": "正在重生",
        "zh-TW": "正在復活"
    },
    {
        "opy": "Resurrected",
        "en-US": "Resurrected",
        "guid": "00000000C128",
        "de-DE": "Wiederbelebt",
        "es-ES": "Resucitado",
        "es-MX": "Resucitado",
        "fr-FR": "Ressuscité",
        "it-IT": "Resuscitato",
        "ja-JP": "蘇生した",
        "pl-PL": "Wskrzeszono",
        "pt-BR": "Ressuscitado",
        "ru-RU": "Воскресил",
        "zh-CN": "已重生",
        "zh-TW": "獲得復活"
    },
    {
        "guid": "00000000C126",
        "opy": "Resurrect",
        "en-US": "Resurrect",
        "de-DE": "Wiederbeleben",
        "es-ES": "Resurrección",
        "es-MX": "Resucitar",
        "fr-FR": "Ressusciter",
        "it-IT": "Resuscita",
        "ja-JP": "蘇生",
        "pl-PL": "Wskrześ",
        "pt-BR": "Ressuscitar",
        "ru-RU": "Воскресить",
        "zh-CN": "重生",
        "zh-TW": "復活"
    },
    {
        "opy": "Resources",
        "en-US": "Resources",
        "guid": "00000000C995",
        "de-DE": "Ressourcen",
        "es-ES": "Recursos",
        "es-MX": "Recursos",
        "fr-FR": "Ressources ",
        "it-IT": "Risorse",
        "ja-JP": "リソース",
        "pl-PL": "Zasoby systemowe",
        "pt-BR": "Recursos",
        "ru-RU": "Ресурсы",
        "zh-CN": "资源",
        "zh-TW": "資源"
    },
    {
        "opy": "Resource",
        "en-US": "Resource",
        "guid": "00000000C994",
        "de-DE": "Ressource",
        "es-ES": "Recurso",
        "es-MX": "Recurso",
        "fr-FR": "Ressource",
        "it-IT": "Risorsa",
        "ja-JP": "リソース",
        "pl-PL": "Zasób systemowy",
        "pt-BR": "Recurso",
        "ru-RU": "Ресурс",
        "zh-CN": "资源",
        "zh-TW": "資源"
    },
    {
        "opy": "Rescuing",
        "en-US": "Rescuing",
        "guid": "00000000C0B2",
        "de-DE": "Rettung",
        "es-ES": "Rescatando",
        "es-MX": "Rescatando",
        "fr-FR": "Sauvetage",
        "it-IT": "Salvataggio in Corso",
        "ja-JP": "レスキュー中",
        "pl-PL": "Ratowanie",
        "pt-BR": "Resgatando",
        "ru-RU": "Спасает",
        "zh-CN": "正在营救",
        "zh-TW": "正在救援"
    },
    {
        "opy": "Rescued",
        "en-US": "Rescued",
        "guid": "00000000C0B3",
        "de-DE": "Gerettet",
        "es-ES": "Rescatado",
        "es-MX": "Rescatado",
        "fr-FR": "Secouru",
        "it-IT": "Salvato",
        "ja-JP": "レスキューした",
        "pl-PL": "Uratowano",
        "pt-BR": "Resgatado",
        "ru-RU": "Спасен",
        "zh-CN": "已营救 ",
        "zh-TW": "獲得救援"
    },
    {
        "opy": "Rescue",
        "en-US": "Rescue",
        "guid": "00000000C0B1",
        "de-DE": "Retten",
        "es-ES": "Rescatar",
        "es-MX": "Rescatar",
        "fr-FR": "Secourir",
        "it-IT": "Salva",
        "ja-JP": "レスキュー",
        "pl-PL": "Ratuj",
        "pt-BR": "Resgatar",
        "ru-RU": "Спасать",
        "zh-CN": "营救",
        "zh-TW": "救援"
    },
    {
        "guid": "00000000C5EB",
        "opy": "Remaining",
        "en-US": "Remaining",
        "de-DE": "Verbleibend",
        "es-ES": "Restante",
        "es-MX": "Restando",
        "fr-FR": "Restant",
        "it-IT": "Restanti",
        "ja-JP": "残っている",
        "pl-PL": "Pozostawanie",
        "pt-BR": "Restantes",
        "ru-RU": "Осталось",
        "zh-CN": "剩余",
        "zh-TW": "剩餘"
    },
    {
        "opy": "Remain",
        "en-US": "Remain",
        "guid": "00000000C5EA",
        "de-DE": "Bleiben",
        "es-ES": "Quedar",
        "es-MX": "Restar",
        "fr-FR": "Rester",
        "it-IT": "Restante",
        "ja-JP": "残る",
        "pl-PL": "Pozostań",
        "pt-BR": "Restam",
        "ru-RU": "Остаться",
        "zh-CN": "剩余",
        "zh-TW": "剩餘"
    },
    {
        "guid": "00000000C87B",
        "opy": "Red",
        "en-US": "Red",
        "de-DE": "Rot",
        "es-MX": "Rojo",
        "fr-FR": "Rouge",
        "it-IT": "Rosso",
        "ja-JP": "赤",
        "pl-PL": "Czerwony",
        "pt-BR": "Vermelho",
        "ru-RU": "Красный",
        "zh-CN": "红色",
        "zh-TW": "紅"
    },
    {
        "opy": "Recovering",
        "en-US": "Recovering",
        "guid": "00000000C0D4",
        "de-DE": "Wiederherstellung",
        "es-ES": "Recuperando",
        "es-MX": "Recuperándose",
        "fr-FR": "Récupération",
        "it-IT": "Recupero in Corso",
        "ja-JP": "復元中",
        "pl-PL": "Regeneracja",
        "pt-BR": "Recuperando",
        "ru-RU": "Восстанавливает",
        "zh-CN": "正在恢复",
        "zh-TW": "正在恢復"
    },
    {
        "opy": "Recovered",
        "en-US": "Recovered",
        "guid": "00000000C0D3",
        "de-DE": "Wiederhergestellt",
        "es-ES": "Recuperado",
        "es-MX": "Recuperado",
        "fr-FR": "Récupéré",
        "it-IT": "Recuperato",
        "ja-JP": "復元した",
        "pl-PL": "Zregenerowano",
        "pt-BR": "Recuperado",
        "ru-RU": "Восстановил",
        "zh-CN": "已恢复",
        "zh-TW": "獲得恢復"
    },
    {
        "opy": "Recover",
        "en-US": "Recover",
        "guid": "00000000C0CF",
        "de-DE": "Wiederherstellen",
        "es-ES": "Recuperar",
        "es-MX": "Recuperar",
        "fr-FR": "Récupérer",
        "it-IT": "Recupera",
        "ja-JP": "復元",
        "pl-PL": "Zregeneruj",
        "pt-BR": "Recuperar",
        "ru-RU": "Восстановить",
        "zh-CN": "恢复",
        "zh-TW": "恢復"
    },
    {
        "opy": "Records",
        "en-US": "Records",
        "guid": "00000000C284",
        "de-DE": "Rekorde",
        "es-ES": "Récords",
        "es-MX": "Récords",
        "it-IT": "Più Record",
        "ja-JP": "記録",
        "pl-PL": "Rekordy",
        "pt-BR": "Recordes",
        "ru-RU": "Записи",
        "zh-CN": "记录",
        "zh-TW": "紀錄"
    },
    {
        "opy": "Record",
        "en-US": "Record",
        "guid": "00000000C281",
        "de-DE": "Rekord",
        "es-ES": "Récord",
        "es-MX": "Récord",
        "ja-JP": "記録",
        "pl-PL": "Rekord",
        "pt-BR": "Recorde",
        "ru-RU": "Запись",
        "zh-CN": "记录",
        "zh-TW": "紀錄"
    },
    {
        "guid": "00000000C5D3",
        "opy": "Ready",
        "en-US": "Ready",
        "de-DE": "Bereit",
        "es-ES": "Listo",
        "es-MX": "Listo",
        "fr-FR": "Prêt",
        "it-IT": "Pronto",
        "ja-JP": "準備完了",
        "pl-PL": "Przygotuj",
        "pt-BR": "Pronto",
        "ru-RU": "Готов",
        "zh-CN": "就绪",
        "zh-TW": "就緒"
    },
    {
        "opy": "Reaching",
        "en-US": "Reaching",
        "guid": "00000000C875",
        "de-DE": "Reichweite",
        "es-ES": "Alcanzando",
        "es-MX": "Alcanzando",
        "fr-FR": "Atteinte",
        "it-IT": "Raggiungimento in Corso",
        "ja-JP": "到達している",
        "pl-PL": "Sięganie",
        "pt-BR": "Chegando",
        "ru-RU": "Достигает",
        "zh-CN": "正在前往",
        "zh-TW": "正在前往"
    },
    {
        "opy": "Reached",
        "en-US": "Reached",
        "guid": "00000000C874",
        "de-DE": "Erreicht",
        "es-ES": "Alcanzado",
        "es-MX": "Alcanzado",
        "fr-FR": "Atteint",
        "it-IT": "Raggiunto",
        "ja-JP": "到達した",
        "pl-PL": "Sięgnięto",
        "pt-BR": "Chegou",
        "ru-RU": "Достиг",
        "zh-CN": "已抵达",
        "zh-TW": "抵達"
    },
    {
        "opy": "Reach",
        "en-US": "Reach",
        "guid": "00000000C873",
        "de-DE": "Erreichen",
        "es-ES": "Alcanzar",
        "es-MX": "Alcanzar",
        "fr-FR": "Atteindre",
        "it-IT": "Raggiungi",
        "ja-JP": "到達する",
        "pl-PL": "Sięgnij",
        "pt-BR": "Chegar",
        "ru-RU": "Достигнуть",
        "zh-CN": "前往",
        "zh-TW": "前往"
    },
    {
        "opy": "Rank S",
        "en-US": "Rank S",
        "guid": "00000000C07A",
        "de-DE": "Rang S",
        "es-ES": "Rango S",
        "es-MX": "Categoría S",
        "fr-FR": "Rang S",
        "it-IT": "Grado S",
        "ja-JP": "ランクS",
        "pl-PL": "Ranga S",
        "pt-BR": "Ranque S",
        "ru-RU": "Ранг S",
        "zh-CN": "等级 S",
        "zh-TW": "等級S"
    },
    {
        "opy": "Rank F",
        "en-US": "Rank F",
        "guid": "00000000C079",
        "de-DE": "Rang F",
        "es-ES": "Rango F",
        "es-MX": "Categoría F",
        "fr-FR": "Rang F",
        "it-IT": "Grado F",
        "ja-JP": "ランクF",
        "pl-PL": "Ranga F",
        "pt-BR": "Ranque F",
        "ru-RU": "Ранг F",
        "zh-CN": "等级 F",
        "zh-TW": "等級F"
    },
    {
        "opy": "Rank E",
        "en-US": "Rank E",
        "guid": "00000000C078",
        "de-DE": "Rang E",
        "es-ES": "Rango E",
        "es-MX": "Categoría E",
        "fr-FR": "Rang E",
        "it-IT": "Grado E",
        "ja-JP": "ランクE",
        "pl-PL": "Ranga E",
        "pt-BR": "Ranque E",
        "ru-RU": "Ранг E",
        "zh-CN": "等级 E",
        "zh-TW": "等級E"
    },
    {
        "opy": "Rank D",
        "en-US": "Rank D",
        "guid": "00000000C077",
        "de-DE": "Rang D",
        "es-ES": "Rango D",
        "es-MX": "Categoría D",
        "fr-FR": "Rang D",
        "it-IT": "Grado D",
        "ja-JP": "ランクD",
        "pl-PL": "Ranga D",
        "pt-BR": "Ranque D",
        "ru-RU": "Ранг D",
        "zh-CN": "等级 D",
        "zh-TW": "等級D"
    },
    {
        "opy": "Rank C",
        "en-US": "Rank C",
        "guid": "00000000C076",
        "de-DE": "Rang C",
        "es-ES": "Rango C",
        "es-MX": "Categoría C",
        "fr-FR": "Rang C",
        "it-IT": "Grado C",
        "ja-JP": "ランクC",
        "pl-PL": "Ranga C",
        "pt-BR": "Ranque C",
        "ru-RU": "Ранг C",
        "zh-CN": "等级 C",
        "zh-TW": "等級C"
    },
    {
        "opy": "Rank B",
        "en-US": "Rank B",
        "guid": "00000000C075",
        "de-DE": "Rang B",
        "es-ES": "Rango B",
        "es-MX": "Categoría B",
        "fr-FR": "Rang B",
        "it-IT": "Grado B",
        "ja-JP": "ランクB",
        "pl-PL": "Ranga B",
        "pt-BR": "Ranque B",
        "ru-RU": "Ранг B",
        "zh-CN": "等级 B",
        "zh-TW": "等級B"
    },
    {
        "opy": "Rank A",
        "en-US": "Rank A",
        "guid": "00000000C074",
        "de-DE": "Rang A",
        "es-ES": "Rango A",
        "es-MX": "Categoría A",
        "fr-FR": "Rang A",
        "it-IT": "Grado A",
        "ja-JP": "ランクA",
        "pl-PL": "Ranga A",
        "pt-BR": "Ranque A",
        "ru-RU": "Ранг A",
        "zh-CN": "等级 A",
        "zh-TW": "等級A"
    },
    {
        "opy": "Rank",
        "en-US": "Rank",
        "guid": "00000000C073",
        "de-DE": "Rang",
        "es-ES": "Rango",
        "es-MX": "Categoría",
        "fr-FR": "Rang",
        "it-IT": "Grado",
        "ja-JP": "ランク",
        "pl-PL": "Ranga",
        "pt-BR": "Ranque",
        "ru-RU": "Ранг",
        "zh-CN": "排名",
        "zh-TW": "等級"
    },
    {
        "opy": "Raising",
        "en-US": "Raising",
        "guid": "00000000C0CA",
        "de-DE": "Erhöhung",
        "es-ES": "Levantando",
        "es-MX": "Levantando",
        "fr-FR": "Augmentation",
        "it-IT": "Innalzamento in Corso",
        "ja-JP": "上昇中",
        "pl-PL": "Wznoszenie",
        "pt-BR": "Elevando",
        "ru-RU": "Поднимает",
        "zh-CN": "正在复活",
        "zh-TW": "正在提高"
    },
    {
        "opy": "Raised",
        "en-US": "Raised",
        "guid": "00000000C0CB",
        "de-DE": "Erhöht",
        "es-ES": "Levantado",
        "es-MX": "Levantado",
        "fr-FR": "Augmenté",
        "it-IT": "Alzato",
        "ja-JP": "上昇した",
        "pl-PL": "Wzniesiono",
        "pt-BR": "Elevado",
        "ru-RU": "Поднял",
        "zh-CN": "已复活",
        "zh-TW": "獲得提高"
    },
    {
        "opy": "Raise",
        "en-US": "Raise",
        "guid": "00000000C0C9",
        "de-DE": "Erhöhen",
        "es-ES": "Levantar",
        "es-MX": "Levantar",
        "fr-FR": "Augmenter",
        "it-IT": "Alza",
        "ja-JP": "上昇",
        "pl-PL": "Wznieś",
        "pt-BR": "Elevar",
        "ru-RU": "Поднять",
        "zh-CN": "复活",
        "zh-TW": "提高"
    },
    {
        "guid": "00000000C87A",
        "opy": "Purple",
        "en-US": "Purple",
        "de-DE": "Violett",
        "es-ES": "Morado",
        "es-MX": "Morado",
        "fr-FR": "Violet",
        "it-IT": "Viola",
        "ja-JP": "紫",
        "pl-PL": "Fioletowy",
        "pt-BR": "Roxo",
        "ru-RU": "Лиловый",
        "zh-CN": "紫色",
        "zh-TW": "紫"
    },
    {
        "opy": "Purifying",
        "en-US": "Purifying",
        "guid": "00000000C0DC",
        "de-DE": "Reinigung",
        "es-ES": "Purificando",
        "es-MX": "Purificando",
        "fr-FR": "Purification",
        "it-IT": "Purificazione in Corso",
        "ja-JP": "浄化中",
        "pl-PL": "Czyszczenie",
        "pt-BR": "Purificando",
        "ru-RU": "Очищает",
        "zh-CN": "正在净化",
        "zh-TW": "正在淨化"
    },
    {
        "opy": "Purify",
        "en-US": "Purify",
        "guid": "00000000C0DB",
        "de-DE": "Reinigen",
        "es-ES": "Purificar",
        "es-MX": "Purificar",
        "fr-FR": "Purifier",
        "it-IT": "Purifica",
        "ja-JP": "浄化",
        "pl-PL": "Wyczyść",
        "pt-BR": "Purificar",
        "ru-RU": "Очистить",
        "zh-CN": "净化",
        "zh-TW": "淨化"
    },
    {
        "opy": "Purified",
        "en-US": "Purified",
        "guid": "00000000C0DD",
        "de-DE": "Gereinigt",
        "es-ES": "Purificado",
        "es-MX": "Purificado",
        "fr-FR": "Purifié",
        "it-IT": "Purificato",
        "ja-JP": "浄化した",
        "pl-PL": "Wyczyszczono",
        "pt-BR": "Purificado",
        "ru-RU": "Очистил",
        "zh-CN": "已净化",
        "zh-TW": "受到淨化"
    },
    {
        "opy": "Protecting",
        "en-US": "Protecting",
        "guid": "00000000C11E",
        "de-DE": "Schutz",
        "es-ES": "Protegiendo",
        "es-MX": "Protegiendo",
        "fr-FR": "Protection",
        "it-IT": "Protezione in Corso",
        "ja-JP": "守っている",
        "pl-PL": "Chronienie",
        "pt-BR": "Protegendo",
        "ru-RU": "Защищает",
        "zh-CN": "正在保护",
        "zh-TW": "正在保護"
    },
    {
        "opy": "Protected",
        "en-US": "Protected",
        "guid": "00000000C11F",
        "de-DE": "Geschützt",
        "es-ES": "Protegido",
        "es-MX": "Protegido",
        "fr-FR": "Protégé",
        "it-IT": "Protetto",
        "ja-JP": "守った",
        "pl-PL": "Ochroniono",
        "pt-BR": "Protegido",
        "ru-RU": "Защитил",
        "zh-CN": "已保护",
        "zh-TW": "受到保護"
    },
    {
        "opy": "Protect",
        "en-US": "Protect",
        "guid": "00000000C11D",
        "de-DE": "Schützen",
        "es-ES": "Proteger",
        "es-MX": "Proteger",
        "fr-FR": "Protéger",
        "it-IT": "Proteggi",
        "ja-JP": "守る",
        "pl-PL": "Ochroń",
        "pt-BR": "Proteger",
        "ru-RU": "Защищать",
        "zh-CN": "保护",
        "zh-TW": "保護"
    },
    {
        "opy": "Projectiles",
        "en-US": "Projectiles",
        "guid": "00000000C991",
        "de-DE": "Projektile",
        "es-ES": "Proyectiles",
        "es-MX": "Proyectiles",
        "it-IT": "Proiettili",
        "ja-JP": "飛翔物",
        "pl-PL": "Pociski",
        "pt-BR": "Projéteis",
        "ru-RU": "Снаряды",
        "zh-CN": "飞弹",
        "zh-TW": "拋射物"
    },
    {
        "opy": "Projectile",
        "en-US": "Projectile",
        "guid": "00000000C992",
        "de-DE": "Projektil",
        "es-ES": "Proyectil",
        "es-MX": "Proyectil",
        "it-IT": "Proiettile",
        "ja-JP": "飛翔物",
        "pl-PL": "Pocisk",
        "pt-BR": "Projétil",
        "ru-RU": "Снаряд",
        "zh-CN": "飞弹",
        "zh-TW": "拋射物"
    },
    {
        "guid": "00000000C867",
        "opy": "Primary Fire",
        "en-US": "Primary Fire",
        "de-DE": "Primärer Feuermodus",
        "es-ES": "Disparo principal",
        "es-MX": "Disparo principal",
        "fr-FR": "Tir principal",
        "it-IT": "Fuoco Primario",
        "ja-JP": "メイン攻撃",
        "pl-PL": "Atak podstawowy",
        "pt-BR": "Disparo Primário",
        "ru-RU": "Основной режим огня",
        "zh-CN": "主要攻击模式",
        "zh-TW": "主要攻擊"
    },
    {
        "opy": "Price",
        "en-US": "Price",
        "guid": "00000000BFFB",
        "de-DE": "Preis",
        "es-ES": "Precio",
        "es-MX": "Precio",
        "fr-FR": "Prix",
        "it-IT": "Prezzo",
        "ja-JP": "価格",
        "pl-PL": "Cena",
        "pt-BR": "Preço",
        "ru-RU": "Цена",
        "zh-CN": "价格",
        "zh-TW": "價格"
    },
    {
        "opy": "Power-ups",
        "en-US": "Power-ups",
        "guid": "00000000BFDA",
        "es-ES": "Potenciadores",
        "es-MX": "Potenciadores",
        "fr-FR": "Bonus",
        "it-IT": "Potenziamenti",
        "ja-JP": "パワーアップ",
        "pl-PL": "Doładowania",
        "ru-RU": "Усиления",
        "zh-CN": "强化",
        "zh-TW": "強化"
    },
    {
        "opy": "Power-up",
        "en-US": "Power-up",
        "guid": "00000000BFDB",
        "es-ES": "Potenciador",
        "es-MX": "Potenciador",
        "fr-FR": "Bonus",
        "it-IT": "Potenziamento",
        "ja-JP": "パワーアップ",
        "pl-PL": "Doładowanie",
        "ru-RU": "Усиление",
        "zh-CN": "强化",
        "zh-TW": "強化"
    },
    {
        "guid": "00000000C986",
        "opy": "Power",
        "en-US": "Power",
        "de-DE": "Macht",
        "es-ES": "Poder",
        "es-MX": "Poder",
        "fr-FR": "Puissance",
        "it-IT": "Potenza",
        "ja-JP": "パワー",
        "pl-PL": "Moc",
        "pt-BR": "Poder",
        "ru-RU": "Энергия",
        "zh-CN": "能量",
        "zh-TW": "能量"
    },
    {
        "guid": "00000000C87D",
        "opy": "Position",
        "en-US": "Position",
        "es-ES": "Posición",
        "es-MX": "Posición",
        "it-IT": "Posizione",
        "ja-JP": "位置",
        "pl-PL": "Pozycja",
        "pt-BR": "Posição",
        "ru-RU": "Положение",
        "zh-CN": "位置",
        "zh-TW": "位置"
    },
    {
        "opy": "Points Lost",
        "en-US": "Points Lost",
        "guid": "00000000C3E6",
        "de-DE": "Punkte verloren",
        "es-ES": "Puntos perdidos",
        "es-MX": "Puntos perdidos",
        "fr-FR": "Points perdus",
        "it-IT": "Punti Persi",
        "ja-JP": "損失ポイント",
        "pl-PL": "Stracone punkty",
        "pt-BR": "Pontos Perdidos",
        "ru-RU": "Очков потеряно",
        "zh-CN": "失去分数",
        "zh-TW": "失去的點"
    },
    {
        "opy": "Points Earned",
        "en-US": "Points Earned",
        "guid": "00000000C3E5",
        "de-DE": "Punkte erhalten",
        "es-ES": "Puntos ganados",
        "es-MX": "Puntos obtenidos",
        "fr-FR": "Points gagnés",
        "it-IT": "Punti Guadagnati",
        "ja-JP": "獲得ポイント",
        "pl-PL": "Zdobyte punkty",
        "pt-BR": "Pontos Ganhos",
        "ru-RU": "Очков заработано",
        "zh-CN": "获得分数",
        "zh-TW": "獲得的分數"
    },
    {
        "opy": "Points",
        "en-US": "Points",
        "guid": "00000000C27C",
        "de-DE": "Punkte",
        "es-ES": "Puntos",
        "es-MX": "Puntos",
        "it-IT": "Punti",
        "ja-JP": "ポイント",
        "pl-PL": "Punkty",
        "pt-BR": "Pontos",
        "ru-RU": "Очки",
        "zh-CN": "点",
        "zh-TW": "分"
    },
    {
        "opy": "Point",
        "en-US": "Point",
        "guid": "00000000C27B",
        "de-DE": "Punkt",
        "es-ES": "Punto",
        "es-MX": "Punto",
        "it-IT": "Punto",
        "ja-JP": "ポイント",
        "pl-PL": "Punkt",
        "pt-BR": "Ponto",
        "ru-RU": "Очко",
        "zh-CN": "点",
        "zh-TW": "分"
    },
    {
        "opy": "Playing",
        "en-US": "Playing",
        "guid": "00000000CAAF",
        "de-DE": "Spiel",
        "es-ES": "Jugando",
        "es-MX": "Jugando",
        "fr-FR": "Joue",
        "it-IT": "Gioco in Corso",
        "ja-JP": "プレイしている",
        "pl-PL": "Zagranie",
        "pt-BR": "Jogando",
        "ru-RU": "Разыгрывает",
        "zh-CN": "正在打出",
        "zh-TW": "遊玩"
    },
    {
        "guid": "00000000BFDC",
        "opy": "Players",
        "en-US": "Players",
        "de-DE": "Spieler",
        "es-ES": "Jugadores",
        "es-MX": "Jugadores",
        "fr-FR": "Joueurs",
        "it-IT": "Giocatori",
        "ja-JP": "プレイヤー",
        "pl-PL": "Gracze",
        "pt-BR": "Jogadores",
        "ru-RU": "Игроки",
        "zh-CN": "玩家",
        "zh-TW": "玩家"
    },
    {
        "guid": "00000000BFDD",
        "opy": "Player",
        "en-US": "Player",
        "de-DE": "Spieler",
        "es-ES": "Jugador",
        "es-MX": "Jugador",
        "fr-FR": "Joueur",
        "it-IT": "Giocatore",
        "ja-JP": "プレイヤー",
        "pl-PL": "Gracz",
        "pt-BR": "Jogador",
        "ru-RU": "Игрок",
        "zh-CN": "玩家",
        "zh-TW": "玩家"
    },
    {
        "opy": "Played",
        "en-US": "Played",
        "guid": "00000000CAB0",
        "de-DE": "Gespielt",
        "es-ES": "Jugado",
        "es-MX": "Jugado",
        "fr-FR": "Joué",
        "it-IT": "Giocato",
        "ja-JP": "プレイされた",
        "pl-PL": "Zagrano",
        "pt-BR": "Jogada",
        "ru-RU": "Разыграл",
        "zh-CN": "已打出",
        "zh-TW": "遊玩"
    },
    {
        "opy": "Play",
        "en-US": "Play",
        "guid": "00000000CAAE",
        "de-DE": "Spielen",
        "es-ES": "Jugar",
        "es-MX": "Jugar",
        "fr-FR": "Jouer",
        "it-IT": "Gioca",
        "ja-JP": "プレイする",
        "pl-PL": "Zagraj",
        "pt-BR": "Jogar",
        "ru-RU": "Разыграть",
        "zh-CN": "打出",
        "zh-TW": "遊玩"
    },
    {
        "opy": "Piles",
        "en-US": "Piles",
        "guid": "00000000CAAD",
        "de-DE": "Haufen",
        "es-ES": "Pilas",
        "es-MX": "Pilas",
        "it-IT": "Pile",
        "ja-JP": "パイル",
        "pl-PL": "Stosiki",
        "pt-BR": "Bolos",
        "ru-RU": "Отбивает",
        "zh-CN": "堆",
        "zh-TW": "牌堆"
    },
    {
        "opy": "Pile",
        "en-US": "Pile",
        "guid": "00000000CAAC",
        "de-DE": "Stapel",
        "es-ES": "Pila",
        "es-MX": "Pila",
        "it-IT": "Pila",
        "ja-JP": "パイル",
        "pl-PL": "Stosik",
        "pt-BR": "Bolo",
        "ru-RU": "Отбить",
        "zh-CN": "堆",
        "zh-TW": "牌堆"
    },
    {
        "opy": "Picking",
        "en-US": "Picking",
        "guid": "00000000C10C",
        "de-DE": "Wahl",
        "es-ES": "Eligiendo",
        "es-MX": "Eligiendo",
        "fr-FR": "Prise",
        "it-IT": "Scelta in Corso",
        "ja-JP": "選択中",
        "pl-PL": "Wybieranie",
        "pt-BR": "Escolhendo",
        "ru-RU": "Поднимает",
        "zh-CN": "正在选取",
        "zh-TW": "正在挑選"
    },
    {
        "opy": "Picked",
        "en-US": "Picked",
        "guid": "00000000C10D",
        "de-DE": "Gewählt",
        "es-ES": "Elegido",
        "es-MX": "Elegido",
        "fr-FR": "Pris",
        "it-IT": "Scelto",
        "ja-JP": "選択した",
        "pl-PL": "Wybrano",
        "pt-BR": "Escolhido",
        "ru-RU": "Поднял",
        "zh-CN": "已选取",
        "zh-TW": "受到挑選"
    },
    {
        "opy": "Pick",
        "en-US": "Pick",
        "guid": "00000000C10B",
        "de-DE": "Wählen",
        "es-ES": "Elegir",
        "es-MX": "Elegir",
        "fr-FR": "Prendre",
        "it-IT": "Scegli",
        "ja-JP": "選択",
        "pl-PL": "Wybierz",
        "pt-BR": "Escolher",
        "ru-RU": "Поднять",
        "zh-CN": "选取",
        "zh-TW": "挑選"
    },
    {
        "opy": "Phases",
        "en-US": "Phases",
        "guid": "00000000C009",
        "de-DE": "Phasen",
        "es-ES": "Fases",
        "es-MX": "Fases",
        "it-IT": "Fasi",
        "ja-JP": "フェーズ",
        "pl-PL": "Fazy",
        "pt-BR": "Fases",
        "ru-RU": "Фазы",
        "zh-CN": "阶段",
        "zh-TW": "階段"
    },
    {
        "opy": "Phase",
        "en-US": "Phase",
        "guid": "00000000C00A",
        "es-ES": "Fase",
        "es-MX": "Fase",
        "it-IT": "Fase",
        "ja-JP": "フェーズ",
        "pl-PL": "Faza",
        "pt-BR": "Fase",
        "ru-RU": "Фаза",
        "zh-CN": "阶段",
        "zh-TW": "階段"
    },
    {
        "opy": "Payloads",
        "en-US": "Payloads",
        "guid": "00000000BFCC",
        "de-DE": "Frachten",
        "es-ES": "Cargas",
        "es-MX": "Cargas",
        "fr-FR": "Convois",
        "it-IT": "Carichi",
        "ja-JP": "ペイロード",
        "pl-PL": "Ładunki",
        "pt-BR": "Cargas",
        "ru-RU": "Грузы",
        "zh-CN": "运载目标",
        "zh-TW": "護送目標"
    },
    {
        "guid": "00000000BFCD",
        "opy": "Payload",
        "en-US": "Payload",
        "de-DE": "Fracht",
        "es-ES": "Carga",
        "es-MX": "Carga",
        "fr-FR": "Convoi",
        "it-IT": "Carico",
        "ja-JP": "ペイロード",
        "pl-PL": "Ładunek",
        "pt-BR": "Carga",
        "ru-RU": "Груз",
        "zh-CN": "运载目标",
        "zh-TW": "護送目標"
    },
    {
        "opy": "Participants",
        "en-US": "Participants",
        "guid": "00000000C28E",
        "de-DE": "Teilnehmer",
        "es-ES": "Participantes",
        "es-MX": "Participantes",
        "it-IT": "Partecipanti",
        "ja-JP": "参加者",
        "pl-PL": "Uczestnicy",
        "pt-BR": "Participantes",
        "ru-RU": "Участники",
        "zh-CN": "参与者",
        "zh-TW": "參與者"
    },
    {
        "opy": "Participant",
        "en-US": "Participant",
        "guid": "00000000C290",
        "de-DE": "Teilnehmer",
        "es-ES": "Participante",
        "es-MX": "Participante",
        "it-IT": "Partecipante",
        "ja-JP": "参加者",
        "pl-PL": "Uczestnik",
        "pt-BR": "Participante",
        "ru-RU": "Участник",
        "zh-CN": "参与者",
        "zh-TW": "參與者"
    },
    {
        "guid": "00000000BFFA",
        "opy": "Overtime",
        "en-US": "Overtime",
        "de-DE": "Verlängerung",
        "es-ES": "Tiempo extra",
        "es-MX": "Tiempo extra",
        "fr-FR": "Prolongations",
        "it-IT": "Tempo supplementare",
        "ja-JP": "オーバータイム",
        "pl-PL": "Dogrywka",
        "pt-BR": "Prorrogação",
        "ru-RU": "Дополнительное время",
        "zh-CN": "加时",
        "zh-TW": "延長賽"
    },
    {
        "opy": "Over",
        "en-US": "Over",
        "guid": "00000000C166",
        "de-DE": "Über",
        "es-ES": "Encima",
        "es-MX": "Sobre",
        "fr-FR": "Sur",
        "it-IT": "Sopra",
        "ja-JP": "上",
        "pl-PL": "Nad",
        "pt-BR": "Acima",
        "ru-RU": "Более",
        "zh-CN": "上方",
        "zh-TW": "超過"
    },
    {
        "opy": "Outside",
        "en-US": "Outside",
        "guid": "00000000C168",
        "de-DE": "Außerhalb",
        "es-ES": "Fuera",
        "es-MX": "Afuera",
        "fr-FR": "Dehors",
        "it-IT": "Fuori",
        "ja-JP": "外",
        "pl-PL": "Zewnątrz",
        "pt-BR": "Fora",
        "ru-RU": "Снаружи",
        "zh-CN": "外",
        "zh-TW": "外部"
    },
    {
        "opy": "Outgoing",
        "en-US": "Outgoing",
        "guid": "00000000C136",
        "de-DE": "Ausgehend",
        "es-ES": "Saliente",
        "es-MX": "En camino",
        "fr-FR": "Sortant",
        "it-IT": "In Uscita",
        "ja-JP": "送信",
        "pl-PL": "Wychodzące",
        "pt-BR": "Saindo",
        "ru-RU": "Исходящий",
        "zh-CN": "正在远去",
        "zh-TW": "離開"
    },
    {
        "opy": "Out of View",
        "en-US": "Out of View",
        "guid": "00000000C132",
        "de-DE": "Nicht in Sicht",
        "es-ES": "Fuera de la vista",
        "es-MX": "Fuera de vista",
        "fr-FR": "Hors de la vue",
        "it-IT": "Fuori Visuale",
        "ja-JP": "表示外",
        "pl-PL": "Poza pole widzenia",
        "pt-BR": "Fora da Visão",
        "ru-RU": "Вне поля зрения",
        "zh-CN": "不在视野中",
        "zh-TW": "不在視野中"
    },
    {
        "opy": "Optimizing",
        "en-US": "Optimizing",
        "guid": "00000000C0C4",
        "de-DE": "Optimierung",
        "es-ES": "Optimizando",
        "es-MX": "Optimizando",
        "fr-FR": "Optimisation",
        "it-IT": "Ottimizzazione in Corso",
        "ja-JP": "最適化中",
        "pl-PL": "Optymalizowanie",
        "pt-BR": "Otimizando",
        "ru-RU": "Оптимизирует",
        "zh-CN": "正在优化",
        "zh-TW": "正在最佳化"
    },
    {
        "opy": "Optimized",
        "en-US": "Optimized",
        "guid": "00000000C0C5",
        "de-DE": "Optimiert",
        "es-ES": "Optimizado",
        "es-MX": "Optimizado",
        "fr-FR": "Optimisé",
        "it-IT": "Ottimizzato",
        "ja-JP": "最適化した",
        "pl-PL": "Zoptymalizowano",
        "pt-BR": "Otimizado",
        "ru-RU": "Оптимизирован",
        "zh-CN": "已优化",
        "zh-TW": "獲得最佳化"
    },
    {
        "opy": "Optimize",
        "en-US": "Optimize",
        "guid": "00000000C0C3",
        "de-DE": "Optimieren",
        "es-ES": "Optimizar",
        "es-MX": "Optimizar",
        "fr-FR": "Optimiser",
        "it-IT": "Ottimizza",
        "ja-JP": "最適化",
        "pl-PL": "Zoptymalizuj",
        "pt-BR": "Otimizar",
        "ru-RU": "Оптимизировать",
        "zh-CN": "优化",
        "zh-TW": "最佳化"
    },
    {
        "opy": "Optimal",
        "en-US": "Optimal",
        "guid": "00000000C137",
        "es-ES": "Óptimo",
        "es-MX": "Óptimo",
        "it-IT": "Ottimale",
        "ja-JP": "最適",
        "pl-PL": "Optymalne",
        "pt-BR": "Ideal",
        "ru-RU": "Оптимальный",
        "zh-CN": "最佳",
        "zh-TW": "最佳"
    },
    {
        "guid": "00000000C17F",
        "opy": "Oops",
        "en-US": "Oops",
        "de-DE": "Ups",
        "es-ES": "Ay",
        "es-MX": "Ups",
        "fr-FR": "Oups",
        "it-IT": "Ops",
        "ja-JP": "おっと",
        "pl-PL": "Ups",
        "pt-BR": "Ops",
        "ru-RU": "Упс",
        "zh-CN": "啊呀",
        "zh-TW": "哎呀"
    },
    {
        "opy": "Oof",
        "en-US": "Oof",
        "guid": "00000000C182",
        "de-DE": "Uff",
        "es-ES": "Uf",
        "es-MX": "Uff",
        "fr-FR": "Aïe",
        "it-IT": "Ooof",
        "ja-JP": "うーん",
        "pl-PL": "Uch",
        "pt-BR": "Uff",
        "ru-RU": "Ох",
        "zh-CN": "噢",
        "zh-TW": "噢"
    },
    {
        "guid": "00000000C5DC",
        "opy": "On",
        "en-US": "On",
        "de-DE": "Ein",
        "es-ES": "Activado",
        "es-MX": "Activado",
        "fr-FR": "Activé",
        "ja-JP": "オン",
        "pl-PL": "Wł.",
        "pt-BR": "Ligado",
        "ru-RU": "Вкл.",
        "zh-CN": "开启",
        "zh-TW": "開啟"
    },
    {
        "guid": "00000000C5DD",
        "opy": "Off",
        "en-US": "Off",
        "de-DE": "Aus",
        "es-ES": "Desactivado",
        "es-MX": "Desactivado",
        "fr-FR": "Désactivé",
        "ja-JP": "オフ",
        "pl-PL": "Wył.",
        "pt-BR": "Desligado",
        "ru-RU": "Выкл.",
        "zh-CN": "关闭",
        "zh-TW": "關閉"
    },
    {
        "opy": "Obtaining",
        "en-US": "Obtaining",
        "guid": "00000000C0BB",
        "de-DE": "Erhält",
        "es-ES": "Obteniendo",
        "es-MX": "Obteniendo",
        "fr-FR": "Obtention",
        "it-IT": "Ottenimento in Corso",
        "ja-JP": "取得中",
        "pl-PL": "Zdobywanie",
        "pt-BR": "Obtendo",
        "ru-RU": "Получает",
        "zh-CN": "正在获取",
        "zh-TW": "正在取得"
    },
    {
        "opy": "Obtained",
        "en-US": "Obtained",
        "guid": "00000000C0BC",
        "de-DE": "Erlangt",
        "es-ES": "Obtenido",
        "es-MX": "Obtenido",
        "fr-FR": "Obtenu",
        "it-IT": "Ottenuto",
        "ja-JP": "取得した",
        "pl-PL": "Zdobyto",
        "pt-BR": "Obtido",
        "ru-RU": "Получил",
        "zh-CN": "已获取",
        "zh-TW": "取得"
    },
    {
        "opy": "Obtain",
        "en-US": "Obtain",
        "guid": "00000000C0BA",
        "de-DE": "Erhalten",
        "es-ES": "Obtener",
        "es-MX": "Obtener",
        "fr-FR": "Obtenir",
        "it-IT": "Ottieni",
        "ja-JP": "取得",
        "pl-PL": "Zdobądź",
        "pt-BR": "Obter",
        "ru-RU": "Получить",
        "zh-CN": "获取",
        "zh-TW": "取得"
    },
    {
        "opy": "Objects",
        "en-US": "Objects",
        "guid": "00000000BFCA",
        "de-DE": "Objekte",
        "es-ES": "Objetos",
        "es-MX": "Objetos",
        "fr-FR": "Objets",
        "it-IT": "Oggetti",
        "ja-JP": "オブジェクト",
        "pl-PL": "Obiekty",
        "pt-BR": "Objetos",
        "ru-RU": "Объекты",
        "zh-CN": "对象",
        "zh-TW": "目標"
    },
    {
        "opy": "Objectives",
        "en-US": "Objectives",
        "guid": "00000000BFD6",
        "de-DE": "Zielpunkte",
        "es-ES": "Objetivos",
        "es-MX": "Objetivos",
        "fr-FR": "Objectifs",
        "it-IT": "Obiettivi",
        "ja-JP": "目標",
        "pl-PL": "Zadania",
        "pt-BR": "Objetivos",
        "ru-RU": "Задачи",
        "zh-CN": "目标点",
        "zh-TW": "目標"
    },
    {
        "guid": "00000000BFC9",
        "opy": "Objective",
        "en-US": "Objective",
        "de-DE": "Zielpunkt",
        "es-ES": "Objetivo",
        "es-MX": "Objetivo",
        "fr-FR": "Objectif",
        "it-IT": "Obiettivo",
        "ja-JP": "目標",
        "pl-PL": "Zadanie",
        "pt-BR": "Objetivo",
        "ru-RU": "Задача",
        "zh-CN": "目标点",
        "zh-TW": "目標"
    },
    {
        "opy": "Object",
        "en-US": "Object",
        "guid": "00000000BFCB",
        "de-DE": "Objekt",
        "es-ES": "Objeto",
        "es-MX": "Objeto",
        "fr-FR": "Objet",
        "it-IT": "Oggetto",
        "ja-JP": "オブジェクト",
        "pl-PL": "Obiekt",
        "pt-BR": "Objeto",
        "ru-RU": "Объект",
        "zh-CN": "对象",
        "zh-TW": "目標"
    },
    {
        "opy": "Not Today",
        "en-US": "Not Today",
        "guid": "00000000C18C",
        "de-DE": "Nicht heute",
        "es-ES": "Esta vez no",
        "es-MX": "Hoy no",
        "fr-FR": "Pas aujourd’hui",
        "it-IT": "Non Oggi",
        "ja-JP": "やめておこう",
        "pl-PL": "Nie dzisiaj",
        "pt-BR": "Hoje Não",
        "ru-RU": "Не сегодня",
        "zh-CN": "算了吧",
        "zh-TW": "下次再說"
    },
    {
        "opy": "Northwest",
        "en-US": "Northwest",
        "guid": "00000000C175",
        "de-DE": "Nordwesten",
        "es-ES": "Noroeste",
        "es-MX": "Noroeste",
        "fr-FR": "Nord-ouest",
        "it-IT": "Nord-ovest",
        "ja-JP": "北西",
        "pl-PL": "Północny zachód",
        "pt-BR": "Noroeste",
        "ru-RU": "Северо-запад",
        "zh-CN": "西北",
        "zh-TW": "西北"
    },
    {
        "opy": "Northeast",
        "en-US": "Northeast",
        "guid": "00000000C16E",
        "de-DE": "Nordosten",
        "es-ES": "Noreste",
        "es-MX": "Noreste",
        "fr-FR": "Nord-est",
        "it-IT": "Nord-est",
        "ja-JP": "北東",
        "pl-PL": "Północny wschód",
        "pt-BR": "Nordeste",
        "ru-RU": "Северо-восток",
        "zh-CN": "东北",
        "zh-TW": "東北"
    },
    {
        "opy": "North",
        "en-US": "North",
        "guid": "00000000C16D",
        "de-DE": "Norden",
        "es-ES": "Norte",
        "es-MX": "Norte",
        "fr-FR": "Nord",
        "it-IT": "Nord",
        "ja-JP": "北",
        "pl-PL": "Północ",
        "pt-BR": "Norte",
        "ru-RU": "Север",
        "zh-CN": "北",
        "zh-TW": "北"
    },
    {
        "guid": "00000000C139",
        "opy": "Normal",
        "en-US": "Normal",
        "it-IT": "Normale",
        "ja-JP": "ノーマル",
        "pl-PL": "Normalne",
        "ru-RU": "Нормальный",
        "zh-CN": "普通",
        "zh-TW": "普通"
    },
    {
        "guid": "00000000C144",
        "opy": "None",
        "en-US": "None",
        "de-DE": "Nichts",
        "es-ES": "Nada",
        "es-MX": "Ninguno",
        "fr-FR": "Aucun",
        "it-IT": "Nessuno",
        "ja-JP": "なし",
        "pl-PL": "Brak",
        "pt-BR": "Nenhum",
        "ru-RU": "Нет",
        "zh-CN": "无",
        "zh-TW": "無"
    },
    {
        "opy": "No Thanks",
        "en-US": "No Thanks",
        "guid": "00000000C181",
        "de-DE": "Nein danke",
        "es-ES": "No, gracias",
        "es-MX": "No, gracias",
        "fr-FR": "Non merci",
        "it-IT": "No Grazie",
        "ja-JP": "結構です",
        "pl-PL": "Nie, dzięki",
        "pt-BR": "Não, Obrigado",
        "ru-RU": "Нет, спасибо",
        "zh-CN": "不用了",
        "zh-TW": "不，謝謝"
    },
    {
        "guid": "00000000C5F5",
        "opy": "No",
        "en-US": "No",
        "de-DE": "Nein",
        "fr-FR": "Non",
        "ja-JP": "いいえ",
        "pl-PL": "Nie",
        "pt-BR": "Não",
        "ru-RU": "Нет",
        "zh-CN": "否",
        "zh-TW": "否"
    },
    {
        "opy": "Nice Try",
        "en-US": "Nice Try",
        "guid": "00000000C18A",
        "de-DE": "Netter Versuch",
        "es-ES": "Buen intento",
        "es-MX": "Buen intento",
        "fr-FR": "Bien essayé",
        "it-IT": "Bel Tentativo",
        "ja-JP": "ドンマイ",
        "pl-PL": "Niezła próba",
        "pt-BR": "Bela Tentativa",
        "ru-RU": "Хорошая попытка",
        "zh-CN": "表现不错",
        "zh-TW": "差一點"
    },
    {
        "opy": "Next Upgrade",
        "en-US": "Next Upgrade",
        "guid": "00000000C055",
        "de-DE": "Nächstes Upgrade",
        "es-ES": "Siguiente mejora",
        "es-MX": "Siguiente mejora",
        "fr-FR": "Amélioration suivante",
        "it-IT": "Miglioramento Successivo",
        "ja-JP": "次のアップグレード",
        "pl-PL": "Następne ulepszenie",
        "pt-BR": "Próxima Melhoria",
        "ru-RU": "Следующее улучшение",
        "zh-CN": "下一个升级 ",
        "zh-TW": "下個升級"
    },
    {
        "opy": "Next Targets",
        "en-US": "Next Targets",
        "guid": "00000000C045",
        "de-DE": "Nächste Ziele",
        "es-ES": "Siguientes objetivos",
        "es-MX": "Siguientes objetivos",
        "fr-FR": "Cibles suivantes",
        "it-IT": "Bersagli Successivi",
        "ja-JP": "次のターゲット",
        "pl-PL": "Następne cele",
        "pt-BR": "Próximos Alvos",
        "ru-RU": "Следующие цели",
        "zh-CN": "下一批目标",
        "zh-TW": "下個目標"
    },
    {
        "opy": "Next Target",
        "en-US": "Next Target",
        "guid": "00000000C044",
        "de-DE": "Nächstes Ziel",
        "es-ES": "Siguiente objetivo",
        "es-MX": "Siguiente objetivo",
        "fr-FR": "Cible suivante",
        "it-IT": "Bersaglio Successivo",
        "ja-JP": "次のターゲット",
        "pl-PL": "Następny cel",
        "pt-BR": "Próximo Alvo",
        "ru-RU": "Следующая цель",
        "zh-CN": "下一个目标",
        "zh-TW": "下個目標"
    },
    {
        "opy": "Next Round",
        "en-US": "Next Round",
        "guid": "00000000C04E",
        "de-DE": "Nächste Runde",
        "es-ES": "Siguiente ronda",
        "es-MX": "Siguiente ronda",
        "fr-FR": "Manche suivante",
        "it-IT": "Round Successivo",
        "ja-JP": "次のラウンド",
        "pl-PL": "Następna runda",
        "pt-BR": "Próxima Rodada",
        "ru-RU": "Следующий раунд",
        "zh-CN": "下一个回合",
        "zh-TW": "下個回合"
    },
    {
        "opy": "Next Players",
        "en-US": "Next Players",
        "guid": "00000000C043",
        "de-DE": "Nächste Spieler",
        "es-ES": "Siguientes jugadores",
        "es-MX": "Siguientes jugadores",
        "fr-FR": "Joueurs suivants",
        "it-IT": "Giocatori Successivi",
        "ja-JP": "次のプレイヤー",
        "pl-PL": "Następni gracze",
        "pt-BR": "Próximos Jogadores",
        "ru-RU": "Следующие игроки",
        "zh-CN": "下一批玩家",
        "zh-TW": "下個玩家"
    },
    {
        "opy": "Next Player",
        "en-US": "Next Player",
        "guid": "00000000C042",
        "de-DE": "Nächster Spieler",
        "es-ES": "Siguiente jugador",
        "es-MX": "Siguiente jugador",
        "fr-FR": "Joueur suivant",
        "it-IT": "Giocatore Successivo",
        "ja-JP": "次のプレイヤー",
        "pl-PL": "Następny gracz",
        "pt-BR": "Próximo Jogador",
        "ru-RU": "Следующий игрок",
        "zh-CN": "下一个玩家",
        "zh-TW": "下個玩家"
    },
    {
        "opy": "Next Phase",
        "en-US": "Next Phase",
        "guid": "00000000C053",
        "de-DE": "Nächste Phase",
        "es-ES": "Siguiente fase",
        "es-MX": "Siguiente fase",
        "fr-FR": "Phase suivante",
        "it-IT": "Fase Successiva",
        "ja-JP": "次のフェーズ ",
        "pl-PL": "Następna faza",
        "pt-BR": "Próxima Fase",
        "ru-RU": "Следующая фаза",
        "zh-CN": "下一个阶段",
        "zh-TW": "下個階段"
    },
    {
        "opy": "Next Objects",
        "en-US": "Next Objects",
        "guid": "00000000C048",
        "de-DE": "Nächste Objekte",
        "es-ES": "Siguientes objetos",
        "es-MX": "Siguientes objetos",
        "fr-FR": "Objets suivants",
        "it-IT": "Oggetti Successivi",
        "ja-JP": "次のオブジェクト",
        "pl-PL": "Następne obiekty",
        "pt-BR": "Próximos Objetos",
        "ru-RU": "Следующие объекты",
        "zh-CN": "下一个对象",
        "zh-TW": "下個目標"
    },
    {
        "opy": "Next Objective",
        "en-US": "Next Objective",
        "guid": "00000000C04A",
        "de-DE": "Nächster Zielpunkt",
        "es-ES": "Siguiente objetivo",
        "es-MX": "Siguiente objetivo",
        "fr-FR": "Objectif suivant",
        "it-IT": "Obiettivo Successivo",
        "ja-JP": "次の目標",
        "pl-PL": "Następne zadanie",
        "pt-BR": "Próximo Objetivo",
        "ru-RU": "Следующая задача",
        "zh-CN": "下一个目标点",
        "zh-TW": "下個目標"
    },
    {
        "opy": "Next Object",
        "en-US": "Next Object",
        "guid": "00000000C049",
        "de-DE": "Nächstes Objekt",
        "es-ES": "Siguiente objeto",
        "es-MX": "Siguiente objeto",
        "fr-FR": "Objet suivant",
        "it-IT": "Oggetto Successivo",
        "ja-JP": "次のオブジェクト",
        "pl-PL": "Następny obiekt",
        "pt-BR": "Próximo Objeto",
        "ru-RU": "Следующий объект",
        "zh-CN": "下一批对象",
        "zh-TW": "下個目標"
    },
    {
        "opy": "Next Mission",
        "en-US": "Next Mission",
        "guid": "00000000C052",
        "de-DE": "Nächste Mission",
        "es-ES": "Siguiente misión",
        "es-MX": "Siguiente misión",
        "fr-FR": "Mission suivante",
        "it-IT": "Missione Successiva",
        "ja-JP": "次の任務",
        "pl-PL": "Następna misja",
        "pt-BR": "Próxima Missão",
        "ru-RU": "Следующее задание",
        "zh-CN": "下一个任务",
        "zh-TW": "下個任務"
    },
    {
        "opy": "Next Level",
        "en-US": "Next Level",
        "guid": "00000000C057",
        "de-DE": "Nächster Level",
        "es-ES": "Siguiente nivel",
        "es-MX": "Siguiente nivel",
        "fr-FR": "Niveau suivant",
        "it-IT": "Livello Successivo",
        "ja-JP": "次のレベル",
        "pl-PL": "Następny poziom",
        "pt-BR": "Próximo Nível",
        "ru-RU": "Следующий уровень",
        "zh-CN": "下一个等级",
        "zh-TW": "下個等級"
    },
    {
        "opy": "Next Hostages",
        "en-US": "Next Hostages",
        "guid": "00000000C047",
        "de-DE": "Nächste Geiseln",
        "es-ES": "Siguientes rehenes",
        "es-MX": "Siguientes rehenes",
        "fr-FR": "Otages suivants",
        "it-IT": "Ostaggi Successivi",
        "ja-JP": "次の人質",
        "pl-PL": "Następni zakładnicy",
        "pt-BR": "Próximos Reféns",
        "ru-RU": "Следующие заложники",
        "zh-CN": "下一批人质",
        "zh-TW": "下個人質"
    },
    {
        "opy": "Next Hostage",
        "en-US": "Next Hostage",
        "guid": "00000000C046",
        "de-DE": "Nächste Geisel",
        "es-ES": "Siguiente rehén",
        "es-MX": "Siguiente rehén",
        "fr-FR": "Otage suivant",
        "it-IT": "Ostaggio Successivo",
        "ja-JP": "次の人質",
        "pl-PL": "Następny zakładnik",
        "pt-BR": "Próximo Refém",
        "ru-RU": "Следующий заложник",
        "zh-CN": "下一个人质",
        "zh-TW": "下個人質"
    },
    {
        "opy": "Next Heroes",
        "en-US": "Next Heroes",
        "guid": "00000000C041",
        "de-DE": "Nächste Helden",
        "es-ES": "Siguientes héroes",
        "es-MX": "Siguientes héroes",
        "fr-FR": "Héros suivants",
        "it-IT": "Eroi Successivi",
        "ja-JP": "次のヒーロー",
        "pl-PL": "Następni bohaterowie",
        "pt-BR": "Próximos Heróis",
        "ru-RU": "Следующие герои",
        "zh-CN": "下一批英雄",
        "zh-TW": "下個英雄"
    },
    {
        "opy": "Next Hero",
        "en-US": "Next Hero",
        "guid": "00000000C040",
        "de-DE": "Nächster Held",
        "es-ES": "Siguiente héroe",
        "es-MX": "Siguiente héroe",
        "fr-FR": "Héros suivant",
        "it-IT": "Eroe Successivo",
        "ja-JP": "次のヒーロー",
        "pl-PL": "Następny bohater",
        "pt-BR": "Próximo Herói",
        "ru-RU": "Следующий герой",
        "zh-CN": "下一个英雄",
        "zh-TW": "下個英雄"
    },
    {
        "opy": "Next Game",
        "en-US": "Next Game",
        "guid": "00000000C04F",
        "de-DE": "Nächstes Spiel",
        "es-ES": "Siguiente partida",
        "es-MX": "Siguiente partida",
        "fr-FR": "Partie suivante",
        "it-IT": "Partita Successiva",
        "ja-JP": "次のマッチ",
        "pl-PL": "Następna gra",
        "pt-BR": "Próximo Jogo",
        "ru-RU": "Следующий матч",
        "zh-CN": "下一个游戏",
        "zh-TW": "下場遊戲"
    },
    {
        "opy": "Next Form",
        "en-US": "Next Form",
        "guid": "00000000C056",
        "de-DE": "Nächste Form",
        "es-ES": "Siguiente forma",
        "es-MX": "Siguiente forma",
        "fr-FR": "Forme suivante",
        "it-IT": "Forma Successiva",
        "ja-JP": "次のフォーム",
        "pl-PL": "Następna forma",
        "pt-BR": "Próximo Forma",
        "ru-RU": "Следующая форма",
        "zh-CN": "下一个表格",
        "zh-TW": "下個型態"
    },
    {
        "opy": "Next Enemy",
        "en-US": "Next Enemy",
        "guid": "00000000C04D",
        "de-DE": "Nächster Gegner",
        "es-ES": "Siguiente enemigo",
        "es-MX": "Siguiente enemigo",
        "fr-FR": "Ennemi suivant",
        "it-IT": "Nemico Successivo",
        "ja-JP": "次の敵",
        "pl-PL": "Następny wróg",
        "pt-BR": "Próximo Inimigo",
        "ru-RU": "Следующий враг",
        "zh-CN": "下一个敌人",
        "zh-TW": "下個敵人"
    },
    {
        "opy": "Next Enemies",
        "en-US": "Next Enemies",
        "guid": "00000000C050",
        "de-DE": "Nächste Gegner",
        "es-ES": "Siguientes enemigos",
        "es-MX": "Siguientes enemigos",
        "fr-FR": "Ennemis suivants",
        "it-IT": "Nemici Successivi",
        "ja-JP": "次の敵",
        "pl-PL": "Następni wrogowie",
        "pt-BR": "Próximos Inimigos",
        "ru-RU": "Следующие враги",
        "zh-CN": "下一批敌人",
        "zh-TW": "下個敵人"
    },
    {
        "opy": "Next Checkpoint",
        "en-US": "Next Checkpoint",
        "guid": "00000000C054",
        "de-DE": "Nächster Checkpoint",
        "es-ES": "Siguiente punto de control",
        "es-MX": "Siguiente punto de control",
        "fr-FR": "Point de contrôle suivant",
        "it-IT": "Checkpoint Successivo",
        "ja-JP": "次のチェックポイント",
        "pl-PL": "Następny punkt kontrolny",
        "pt-BR": "Próximo Ponto de Verificação",
        "ru-RU": "Следующая контрольная точка",
        "zh-CN": "下一个检查点",
        "zh-TW": "下個檢查點"
    },
    {
        "opy": "Next Attempt",
        "en-US": "Next Attempt",
        "guid": "00000000C051",
        "de-DE": "Nächster Versuch",
        "es-ES": "Siguiente intento",
        "es-MX": "Siguiente intento",
        "fr-FR": "Tentative suivante",
        "it-IT": "Tentativo Successivo",
        "ja-JP": "次の挑戦",
        "pl-PL": "Następna próba",
        "pt-BR": "Próxima Tentativa",
        "ru-RU": "Следующая попытка",
        "zh-CN": "下一次尝试",
        "zh-TW": "下次機會"
    },
    {
        "opy": "Next Ally",
        "en-US": "Next Ally",
        "guid": "00000000C04B",
        "de-DE": "Nächster Verbündeter",
        "es-ES": "Siguiente aliado",
        "es-MX": "Siguiente aliado",
        "fr-FR": "Allié suivant",
        "it-IT": "Alleato Successivo",
        "ja-JP": "次の味方",
        "pl-PL": "Następny sojusznik",
        "pt-BR": "Próximo Aliado",
        "ru-RU": "Следующий союзник",
        "zh-CN": "下一个盟友",
        "zh-TW": "下個盟友"
    },
    {
        "opy": "Next Allies",
        "en-US": "Next Allies",
        "guid": "00000000C04C",
        "de-DE": "Nächste Verbündete",
        "es-ES": "Siguientes objetivos",
        "es-MX": "Siguientes aliados",
        "fr-FR": "Alliés suivants",
        "it-IT": "Alleati Successivi",
        "ja-JP": "次の味方",
        "pl-PL": "Następni sojusznicy",
        "pt-BR": "Próximos Aliados",
        "ru-RU": "Следующие союзники",
        "zh-CN": "下一批盟友",
        "zh-TW": "下個盟友"
    },
    {
        "guid": "00000000C02E",
        "opy": "Next",
        "en-US": "Next",
        "de-DE": "Nächster",
        "es-ES": "Siguiente",
        "es-MX": "Siguiente",
        "fr-FR": "Suivant",
        "it-IT": "Successivo",
        "ja-JP": "次へ",
        "pl-PL": "Dalej",
        "pt-BR": "Próximo",
        "ru-RU": "Следующий",
        "zh-CN": "下一个",
        "zh-TW": "下一個"
    },
    {
        "opy": "New Record",
        "en-US": "New Record",
        "guid": "00000000C29D",
        "de-DE": "Neuer Rekord",
        "es-ES": "Nuevo récord",
        "es-MX": "Nuevo récord",
        "fr-FR": "Nouveau record",
        "it-IT": "Nuovo Record",
        "ja-JP": "新記録",
        "pl-PL": "Nowy rekord",
        "pt-BR": "Novo Recorde",
        "ru-RU": "Новая запись",
        "zh-CN": "最新记录",
        "zh-TW": "全新紀錄"
    },
    {
        "opy": "New High Score",
        "en-US": "New High Score",
        "guid": "00000000C29C",
        "de-DE": "Neuer Highscore",
        "es-ES": "Nueva mejor puntuación",
        "es-MX": "Nueva puntuación alta",
        "fr-FR": "Nouveau meilleur score",
        "it-IT": "Nuovo Punteggio Migliore",
        "ja-JP": "ハイスコア更新",
        "pl-PL": "Nowy najwyższy wynik",
        "pt-BR": "Nova Pontuação Máxima",
        "ru-RU": "Новый рекорд",
        "zh-CN": "最新高分",
        "zh-TW": "全新最高分"
    },
    {
        "opy": "Near",
        "en-US": "Near",
        "guid": "00000000C160",
        "de-DE": "Nahe",
        "es-ES": "Cerca",
        "es-MX": "Cerca",
        "fr-FR": "Près",
        "it-IT": "Vicino",
        "ja-JP": "近く",
        "pl-PL": "Blisko",
        "pt-BR": "Perto",
        "ru-RU": "Рядом",
        "zh-CN": "近",
        "zh-TW": "近"
    },
    {
        "opy": "My Mistake",
        "en-US": "My Mistake",
        "guid": "00000000C18F",
        "de-DE": "Mein Fehler",
        "es-ES": "Mi culpa",
        "es-MX": "Fue mi error",
        "fr-FR": "C’est de ma faute",
        "it-IT": "Errore Mio",
        "ja-JP": "申し訳ない",
        "pl-PL": "Mój błąd",
        "pt-BR": "Erro Meu",
        "ru-RU": "Моя ошибка",
        "zh-CN": "我的错",
        "zh-TW": "是我不好"
    },
    {
        "opy": "Most",
        "en-US": "Most",
        "guid": "00000000C15E",
        "de-DE": "Am meisten",
        "es-ES": "Máximo",
        "es-MX": "Máximo",
        "fr-FR": "Le plus",
        "it-IT": "Il Più",
        "ja-JP": "最高",
        "pl-PL": "Najwięcej",
        "pt-BR": "O Maior",
        "ru-RU": "Больше всего",
        "zh-CN": "最多",
        "zh-TW": "最多"
    },
    {
        "opy": "More",
        "en-US": "More",
        "guid": "00000000C15C",
        "de-DE": "Mehr",
        "es-ES": "Más",
        "es-MX": "Más",
        "fr-FR": "Plus",
        "it-IT": "Più",
        "ja-JP": "多い",
        "pl-PL": "Więcej",
        "pt-BR": "Mais",
        "ru-RU": "Больше",
        "zh-CN": "更多",
        "zh-TW": "較多"
    },
    {
        "opy": "Monsters",
        "en-US": "Monsters",
        "guid": "00000000C98F",
        "de-DE": "Ungeheuer",
        "es-ES": "Monstruos",
        "es-MX": "Monstruos",
        "fr-FR": "Monstres",
        "it-IT": "Mostri",
        "ja-JP": "モンスター",
        "pl-PL": "Potwory",
        "pt-BR": "Monstros",
        "ru-RU": "Монстры",
        "zh-CN": "怪物",
        "zh-TW": "怪物"
    },
    {
        "opy": "Monster",
        "en-US": "Monster",
        "guid": "00000000C990",
        "es-ES": "Monstruo",
        "es-MX": "Monstruo",
        "fr-FR": "Monstre",
        "it-IT": "Mostro",
        "ja-JP": "モンスター",
        "pl-PL": "Potwór",
        "pt-BR": "Monstro",
        "ru-RU": "Монстр",
        "zh-CN": "怪物",
        "zh-TW": "怪物"
    },
    {
        "opy": "Money",
        "en-US": "Money",
        "guid": "00000000BFEB",
        "de-DE": "Geld",
        "es-ES": "Dinero",
        "es-MX": "Dinero",
        "fr-FR": "Argent",
        "it-IT": "Denaro",
        "ja-JP": "金",
        "pl-PL": "Pieniądze",
        "pt-BR": "Dinheiro",
        "ru-RU": "Деньги",
        "zh-CN": "金钱",
        "zh-TW": "金錢"
    },
    {
        "opy": "Moderate",
        "en-US": "Moderate",
        "guid": "00000000C146",
        "de-DE": "Moderat",
        "es-ES": "Moderado",
        "es-MX": "Moderado",
        "fr-FR": "Modéré",
        "it-IT": "Moderato",
        "ja-JP": "中程度",
        "pl-PL": "Umiarkowanie",
        "pt-BR": "Moderado",
        "ru-RU": "Умеренный",
        "zh-CN": "适中",
        "zh-TW": "中等"
    },
    {
        "opy": "Missions",
        "en-US": "Missions",
        "guid": "00000000C00E",
        "de-DE": "Missionen",
        "es-ES": "Misiones",
        "es-MX": "Misiones",
        "it-IT": "Missioni",
        "ja-JP": "任務",
        "pl-PL": "Misje",
        "pt-BR": "Missões",
        "ru-RU": "Задания",
        "zh-CN": "任务",
        "zh-TW": "任務"
    },
    {
        "opy": "Mission Failed",
        "en-US": "Mission Failed",
        "guid": "00000000C092",
        "de-DE": "Mission gescheitert",
        "es-ES": "Misión fracasada",
        "es-MX": "Misión fallida",
        "fr-FR": "Échec de la mission",
        "it-IT": "Missione Fallita",
        "ja-JP": "任務失敗",
        "pl-PL": "Misja nieudana",
        "pt-BR": "Missão Falhou",
        "ru-RU": "Задание провалено",
        "zh-CN": "失败的任务",
        "zh-TW": "任務失敗"
    },
    {
        "opy": "Mission Accomplished",
        "en-US": "Mission Accomplished",
        "guid": "00000000C090",
        "de-DE": "Mission erfüllt",
        "es-ES": "Misión cumplida",
        "es-MX": "Misión cumplida",
        "fr-FR": "Mission accomplie",
        "it-IT": "Missione Compiuta",
        "ja-JP": "任務完了",
        "pl-PL": "Misja wykonana",
        "pt-BR": "Missão Cumprida",
        "ru-RU": "Задание выполнено",
        "zh-CN": "任务完成",
        "zh-TW": "任務完成"
    },
    {
        "opy": "Mission Aborted",
        "en-US": "Mission Aborted",
        "guid": "00000000C093",
        "de-DE": "Mission abgebrochen",
        "es-ES": "Misión abortada",
        "es-MX": "Misión abortada",
        "fr-FR": "Mission annulée",
        "it-IT": "Missione Annullata",
        "ja-JP": "任務中止",
        "pl-PL": "Misja przerwana",
        "pt-BR": "Missão Anulada",
        "ru-RU": "Задание отменено",
        "zh-CN": "放弃的任务",
        "zh-TW": "任務中止"
    },
    {
        "guid": "00000000C00B",
        "opy": "Mission",
        "en-US": "Mission",
        "es-ES": "Misión",
        "es-MX": "Misión",
        "it-IT": "Missione",
        "ja-JP": "任務",
        "pl-PL": "Misja",
        "pt-BR": "Missão",
        "ru-RU": "Задание",
        "zh-CN": "任务",
        "zh-TW": "任務"
    },
    {
        "guid": "00000000C5DF",
        "opy": "Min",
        "en-US": "Min",
        "de-DE": "Min.",
        "es-ES": "Mín",
        "es-MX": "Mínimo",
        "fr-FR": "Minimum",
        "it-IT": "Minimo",
        "ja-JP": "分",
        "pt-BR": "Mín.",
        "ru-RU": "Мин.",
        "zh-CN": "较小",
        "zh-TW": "最小"
    },
    {
        "opy": "Mild",
        "en-US": "Mild",
        "guid": "00000000C145",
        "es-ES": "Leve",
        "es-MX": "Leve",
        "fr-FR": "Modéré",
        "it-IT": "Leggero",
        "ja-JP": "易しい",
        "pl-PL": "Łagodnie",
        "pt-BR": "Brando",
        "ru-RU": "Мягкий",
        "zh-CN": "轻微",
        "zh-TW": "輕微"
    },
    {
        "guid": "00000000C5E0",
        "opy": "Max",
        "en-US": "Max",
        "de-DE": "Max.",
        "es-ES": "Máx",
        "es-MX": "Máximo",
        "fr-FR": "Maximum",
        "it-IT": "Massimo",
        "ja-JP": "最大",
        "pt-BR": "Máx.",
        "ru-RU": "Макс.",
        "zh-CN": "较大",
        "zh-TW": "最大"
    },
    {
        "opy": "Losses",
        "en-US": "Losses",
        "guid": "00000000C29B",
        "de-DE": "Niederlagen",
        "es-ES": "Derrotas",
        "es-MX": "Derrotas",
        "fr-FR": "Défaites",
        "it-IT": "Sconfitte",
        "ja-JP": "敗北",
        "pl-PL": "Przegrane",
        "pt-BR": "Derrotas",
        "ru-RU": "Поражения",
        "zh-CN": "失败",
        "zh-TW": "落敗"
    },
    {
        "guid": "00000000C29A",
        "opy": "Loss",
        "en-US": "Loss",
        "de-DE": "Verloren",
        "es-ES": "Derrota",
        "es-MX": "Derrota",
        "fr-FR": "Défaite",
        "it-IT": "Sconfitta",
        "ja-JP": "敗北",
        "pl-PL": "Przegrana",
        "pt-BR": "Derrota",
        "ru-RU": "Поражение",
        "zh-CN": "失败",
        "zh-TW": "落敗"
    },
    {
        "opy": "Losers",
        "en-US": "Losers",
        "guid": "00000000C087",
        "de-DE": "Unterlegen",
        "es-ES": "Perdedores",
        "es-MX": "Perdedores",
        "fr-FR": "Perdants",
        "it-IT": "Perdenti",
        "ja-JP": "敗者",
        "pl-PL": "Przegrani",
        "pt-BR": "Perdedores",
        "ru-RU": "Проигравшие",
        "zh-CN": "败者",
        "zh-TW": "輸家"
    },
    {
        "opy": "Loser",
        "en-US": "Loser",
        "guid": "00000000C085",
        "de-DE": "Verlierer",
        "es-ES": "Perdedor",
        "es-MX": "Perdedor",
        "fr-FR": "Perdant",
        "it-IT": "Perdente",
        "ja-JP": "敗者",
        "pl-PL": "Przegrany",
        "pt-BR": "Perdedor",
        "ru-RU": "Проигравший",
        "zh-CN": "败者",
        "zh-TW": "輸家"
    },
    {
        "opy": "Locking",
        "en-US": "Locking",
        "guid": "00000000C10F",
        "de-DE": "Sperre",
        "es-ES": "Bloqueando",
        "es-MX": "Bloqueando",
        "fr-FR": "Verrouillage",
        "it-IT": "Blocco in Corso",
        "ja-JP": "ロック中",
        "pl-PL": "Blokowanie",
        "pt-BR": "Bloqueando",
        "ru-RU": "Закрепляет",
        "zh-CN": "正在锁定",
        "zh-TW": "正在鎖定"
    },
    {
        "opy": "Locked",
        "en-US": "Locked",
        "guid": "00000000C110",
        "de-DE": "Gesperrt",
        "es-ES": "Bloqueado",
        "es-MX": "Bloqueado",
        "fr-FR": "Verrouillé",
        "it-IT": "Bloccato",
        "ja-JP": "ロックした",
        "pl-PL": "Zablokowano",
        "pt-BR": "Bloqueado",
        "ru-RU": "Закрепил",
        "zh-CN": "已锁定",
        "zh-TW": "受到鎖定"
    },
    {
        "opy": "Lock",
        "en-US": "Lock",
        "guid": "00000000C10E",
        "de-DE": "Sperren",
        "es-ES": "Bloquear",
        "es-MX": "Bloquear",
        "fr-FR": "Verrouiller",
        "it-IT": "Blocca",
        "ja-JP": "ロック",
        "pl-PL": "Zablokuj",
        "pt-BR": "Bloquear",
        "ru-RU": "Закреплять",
        "zh-CN": "锁定",
        "zh-TW": "鎖定"
    },
    {
        "guid": "00000000C87E",
        "opy": "Location",
        "en-US": "Location",
        "de-DE": "Ort",
        "es-ES": "Ubicación",
        "es-MX": "Ubicación",
        "fr-FR": "Lieu",
        "it-IT": "Luogo",
        "ja-JP": "ロケーション",
        "pl-PL": "Lokalizacja",
        "pt-BR": "Local",
        "ru-RU": "Местоположение",
        "zh-CN": "坐标",
        "zh-TW": "地點"
    },
    {
        "opy": "Loading",
        "en-US": "Loading",
        "guid": "00000000C0E2",
        "de-DE": "Laden",
        "es-ES": "Cargando",
        "es-MX": "Cargando",
        "fr-FR": "Chargement",
        "it-IT": "Caricamento in Corso",
        "ja-JP": "ロード中",
        "pl-PL": "Wczytywanie",
        "pt-BR": "Carregando",
        "ru-RU": "Загружает",
        "zh-CN": "正在读取",
        "zh-TW": "正在讀取"
    },
    {
        "opy": "Loaded",
        "en-US": "Loaded",
        "guid": "00000000C0E3",
        "de-DE": "Geladen",
        "es-ES": "Cargado",
        "es-MX": "Cargado",
        "fr-FR": "Chargé",
        "it-IT": "Caricato",
        "ja-JP": "ロードした",
        "pl-PL": "Wczytano",
        "pt-BR": "Carregado",
        "ru-RU": "Загружен",
        "zh-CN": "已读取",
        "zh-TW": "已讀取"
    },
    {
        "opy": "Load",
        "en-US": "Load",
        "guid": "00000000C0E0",
        "de-DE": "Ladung",
        "es-ES": "Cargar",
        "es-MX": "Cargar",
        "fr-FR": "Charger",
        "it-IT": "Carica",
        "ja-JP": "ロード",
        "pl-PL": "Wczytaj",
        "pt-BR": "Carregar",
        "ru-RU": "Загрузить",
        "zh-CN": "读取",
        "zh-TW": "讀取"
    },
    {
        "guid": "00000000C5ED",
        "opy": "Lives",
        "en-US": "Lives",
        "de-DE": "Leben",
        "es-ES": "Vidas",
        "es-MX": "Vidas",
        "fr-FR": "Vies",
        "it-IT": "Vite",
        "ja-JP": "ライフ",
        "pl-PL": "Życia",
        "pt-BR": "Vidas",
        "ru-RU": "Жизни",
        "zh-CN": "生命",
        "zh-TW": "生命"
    },
    {
        "guid": "00000000C13A",
        "opy": "Limited",
        "en-US": "Limited",
        "de-DE": "Begrenzt",
        "es-ES": "Limitado",
        "es-MX": "Limitado",
        "fr-FR": "Limité",
        "it-IT": "Limitato",
        "ja-JP": "制限",
        "pl-PL": "Ograniczone",
        "pt-BR": "Limitado",
        "ru-RU": "Ограничен",
        "zh-CN": "受限",
        "zh-TW": "有限制"
    },
    {
        "opy": "Life",
        "en-US": "Life",
        "guid": "00000000C5EC",
        "de-DE": "Trefferpunkte",
        "es-ES": "Vida",
        "es-MX": "Vida",
        "fr-FR": "Vie",
        "it-IT": "Vita",
        "ja-JP": "ライフ",
        "pl-PL": "Życie",
        "pt-BR": "Vida",
        "ru-RU": "Жизнь",
        "zh-CN": "生命",
        "zh-TW": "生命"
    },
    {
        "opy": "Levels",
        "en-US": "Levels",
        "guid": "00000000BFFC",
        "es-ES": "Niveles",
        "es-MX": "Niveles",
        "fr-FR": "Niveaux",
        "it-IT": "Livelli",
        "ja-JP": "レベル",
        "pl-PL": "Poziomy",
        "pt-BR": "Níveis",
        "ru-RU": "Уровни",
        "zh-CN": "等级",
        "zh-TW": "等級"
    },
    {
        "opy": "Level Up",
        "en-US": "Level Up",
        "guid": "00000000CA0B",
        "de-DE": "Stufe aufgestiegen",
        "es-ES": "Subir nivel",
        "es-MX": "Subir de nivel",
        "fr-FR": "Gain de niveau",
        "it-IT": "Livello superiore",
        "ja-JP": "レベルアップ",
        "pl-PL": "Awans",
        "pt-BR": "Subiu de Nível",
        "ru-RU": "Новый уровень",
        "zh-CN": "等级提升",
        "zh-TW": "升級"
    },
    {
        "opy": "Level Down",
        "en-US": "Level Down",
        "guid": "00000000CA0A",
        "de-DE": "Stufe abgestiegen",
        "es-ES": "Bajar nivel",
        "es-MX": "Bajar de nivel",
        "fr-FR": "Perte de niveau",
        "it-IT": "Livello inferiore",
        "ja-JP": "レベルダウン",
        "pl-PL": "Degradacja",
        "pt-BR": "Desceu de Nível",
        "ru-RU": "Понижение уровня",
        "zh-CN": "等级下降",
        "zh-TW": "降級"
    },
    {
        "opy": "Level",
        "en-US": "Level",
        "guid": "00000000BFFD",
        "es-ES": "Nivel",
        "es-MX": "Nivel",
        "fr-FR": "Niveau",
        "it-IT": "Livello",
        "ja-JP": "レベル",
        "pl-PL": "Poziom",
        "pt-BR": "Nível",
        "ru-RU": "Уровень",
        "zh-CN": "等级",
        "zh-TW": "等級"
    },
    {
        "opy": "Less",
        "en-US": "Less",
        "guid": "00000000C15D",
        "de-DE": "Weniger",
        "es-ES": "Menos",
        "es-MX": "Menos",
        "fr-FR": "Moins",
        "it-IT": "Meno",
        "ja-JP": "少ない",
        "pl-PL": "Mniej",
        "pt-BR": "Menos",
        "ru-RU": "Меньше",
        "zh-CN": "更少",
        "zh-TW": "較少"
    },
    {
        "guid": "00000000C162",
        "opy": "Left",
        "en-US": "Left",
        "de-DE": "Links",
        "es-ES": "Izquierda",
        "es-MX": "Izquierda",
        "fr-FR": "Gauche",
        "it-IT": "Sinistra",
        "ja-JP": "左",
        "pl-PL": "Lewo",
        "pt-BR": "Esquerda",
        "ru-RU": "Влево",
        "zh-CN": "左",
        "zh-TW": "左"
    },
    {
        "opy": "Least",
        "en-US": "Least",
        "guid": "00000000C15F",
        "de-DE": "Am wenigsten",
        "es-ES": "Mínimo",
        "es-MX": "Mínimo",
        "fr-FR": "Le moins",
        "it-IT": "Il Meno",
        "ja-JP": "最低",
        "pl-PL": "Najmniej",
        "pt-BR": "O Menor",
        "ru-RU": "Меньше всего",
        "zh-CN": "最少",
        "zh-TW": "最少"
    },
    {
        "opy": "Leaders",
        "en-US": "Leaders",
        "guid": "00000000BFE0",
        "de-DE": "Anführer",
        "es-ES": "Líderes",
        "es-MX": "Líderes",
        "fr-FR": "Meneurs",
        "it-IT": "Leader",
        "ja-JP": "リーダー",
        "pl-PL": "Liderzy",
        "pt-BR": "Líderes",
        "ru-RU": "Лидеры",
        "zh-CN": "队长",
        "zh-TW": "領先者"
    },
    {
        "opy": "Leader",
        "en-US": "Leader",
        "guid": "00000000BFE1",
        "de-DE": "Kommandant",
        "es-ES": "Líder",
        "es-MX": "Líder",
        "fr-FR": "Meneur",
        "ja-JP": "リーダー",
        "pl-PL": "Lider",
        "pt-BR": "Líder",
        "ru-RU": "Лидер",
        "zh-CN": "队长",
        "zh-TW": "領先者"
    },
    {
        "opy": "Killstreaks",
        "en-US": "Killstreaks",
        "guid": "00000000C5D0",
        "es-ES": "Rachas de asesinatos",
        "es-MX": "Rachas de muertes",
        "fr-FR": "Séries de victimes",
        "it-IT": "Serie di Uccisioni",
        "ja-JP": "連続キル",
        "pl-PL": "Serie likwidacji",
        "pt-BR": "Séries de Abates",
        "ru-RU": "Серии убийств",
        "zh-CN": "连杀",
        "zh-TW": "連殺"
    },
    {
        "guid": "00000000C5CF",
        "opy": "Killstreak",
        "en-US": "Killstreak",
        "es-ES": "Racha de asesinatos",
        "es-MX": "Racha de muertes",
        "fr-FR": "Série de victimes",
        "it-IT": "Serie di Uccisioni",
        "ja-JP": "連続キル",
        "pl-PL": "Seria likwidacji",
        "pt-BR": "Série de Abates",
        "ru-RU": "Серия убийств",
        "zh-CN": "连杀",
        "zh-TW": "連殺"
    },
    {
        "guid": "00000000C293",
        "opy": "Kills",
        "en-US": "Kills",
        "es-ES": "Asesinatos",
        "es-MX": "Muertes",
        "fr-FR": "Victimes",
        "it-IT": "Uccisioni",
        "ja-JP": "キル",
        "pl-PL": "Zabójstwa",
        "pt-BR": "Abates",
        "ru-RU": "Убийства",
        "zh-CN": "击杀",
        "zh-TW": "擊殺"
    },
    {
        "guid": "00000000C292",
        "opy": "Kill",
        "en-US": "Kill",
        "es-ES": "Asesinato",
        "es-MX": "Muerte",
        "fr-FR": "Victime",
        "it-IT": "Uccisione",
        "ja-JP": "キル",
        "pl-PL": "Zabójstwo",
        "pt-BR": "Abater",
        "ru-RU": "Убийство",
        "zh-CN": "击杀",
        "zh-TW": "擊殺"
    },
    {
        "opy": "Jumping",
        "en-US": "Jumping",
        "guid": "00000000C2A9",
        "de-DE": "Sprung",
        "es-ES": "Saltando",
        "es-MX": "Saltando",
        "fr-FR": "Saut",
        "it-IT": "Salto in Corso",
        "ja-JP": "ジャンプ中",
        "pl-PL": "Skakanie",
        "pt-BR": "Pulando",
        "ru-RU": "Прыгает",
        "zh-CN": "正在跳跃",
        "zh-TW": "正在跳躍"
    },
    {
        "guid": "00000000C2A8",
        "opy": "Jump",
        "en-US": "Jump",
        "de-DE": "Springen",
        "es-ES": "Saltar",
        "es-MX": "Saltar",
        "fr-FR": "Sauter",
        "it-IT": "Salta",
        "ja-JP": "ジャンプ",
        "pl-PL": "Skocz",
        "pt-BR": "Pular",
        "ru-RU": "Прыгать",
        "zh-CN": "跳跃",
        "zh-TW": "跳躍"
    },
    {
        "opy": "Joining",
        "en-US": "Joining",
        "guid": "00000000C5E6",
        "de-DE": "Beitritt",
        "es-ES": "Uniéndose",
        "es-MX": "Uniéndose",
        "fr-FR": "Rejoint",
        "it-IT": "Unione in Corso",
        "ja-JP": "参加している",
        "pl-PL": "Dołączanie",
        "pt-BR": "Entrando",
        "ru-RU": "Присоединяется",
        "zh-CN": "正在加入",
        "zh-TW": "正在加入"
    },
    {
        "opy": "Joined",
        "en-US": "Joined",
        "guid": "00000000C5E7",
        "de-DE": "Beigetreten",
        "es-ES": "Unido",
        "es-MX": "Se unió",
        "fr-FR": "A rejoint",
        "it-IT": "Unito",
        "ja-JP": "参加した",
        "pl-PL": "Dołączono",
        "pt-BR": "Entrou",
        "ru-RU": "Присоединился",
        "zh-CN": "已加入",
        "zh-TW": "已加入"
    },
    {
        "guid": "00000000C5E5",
        "opy": "Join",
        "en-US": "Join",
        "de-DE": "Beitreten",
        "es-ES": "Unirse",
        "es-MX": "Unirse",
        "fr-FR": "Rejoindre",
        "it-IT": "Unisce",
        "ja-JP": "参加する",
        "pl-PL": "Dołącz",
        "pt-BR": "Entrar",
        "ru-RU": "Присоединиться",
        "zh-CN": "加入",
        "zh-TW": "加入"
    },
    {
        "opy": "Items",
        "en-US": "Items",
        "guid": "00000000BFBA",
        "de-DE": "Gegenstände",
        "es-ES": "Objetos",
        "es-MX": "Objetos",
        "fr-FR": "Articles",
        "it-IT": "Oggetti",
        "ja-JP": "アイテム",
        "pl-PL": "Elementy",
        "pt-BR": "Itens",
        "ru-RU": "Предметы",
        "zh-CN": "物品",
        "zh-TW": "物品"
    },
    {
        "opy": "Item",
        "en-US": "Item",
        "guid": "00000000BFD5",
        "de-DE": "Gegenstand",
        "es-ES": "Objeto",
        "es-MX": "Objeto",
        "fr-FR": "Article",
        "it-IT": "Oggetto",
        "ja-JP": "アイテム",
        "pl-PL": "Element",
        "ru-RU": "Предмет",
        "zh-CN": "物品",
        "zh-TW": "物品"
    },
    {
        "guid": "00000000C134",
        "opy": "Invisible",
        "en-US": "Invisible",
        "de-DE": "Unsichtbar",
        "it-IT": "Invisibile",
        "ja-JP": "表示されない",
        "pl-PL": "Niewidzialne",
        "pt-BR": "Invisível",
        "ru-RU": "Невидимый",
        "zh-CN": "不可见",
        "zh-TW": "隱形"
    },
    {
        "guid": "00000000C866",
        "opy": "Interact",
        "en-US": "Interact",
        "de-DE": "Interagieren",
        "es-ES": "Interactuar",
        "es-MX": "Interactuar",
        "fr-FR": "Interagir",
        "it-IT": "Interagisci",
        "ja-JP": "インタラクト",
        "pl-PL": "Interakcja",
        "pt-BR": "Interagir",
        "ru-RU": "Взаимодействие",
        "zh-CN": "互动",
        "zh-TW": "互動"
    },
    {
        "opy": "Intelligence",
        "en-US": "Intelligence",
        "guid": "00000000C98A",
        "de-DE": "Intelligenz",
        "es-ES": "Inteligencia",
        "es-MX": "Inteligencia",
        "it-IT": "Intelligenza",
        "ja-JP": "知力",
        "pl-PL": "Inteligencja",
        "pt-BR": "Inteligência",
        "ru-RU": "Интеллект",
        "zh-CN": "智力",
        "zh-TW": "智力"
    },
    {
        "opy": "Inside",
        "en-US": "Inside",
        "guid": "00000000C167",
        "de-DE": "Innerhalb",
        "es-ES": "Dentro",
        "es-MX": "Adentro",
        "fr-FR": "À l’intérieur",
        "it-IT": "Dentro",
        "ja-JP": "中",
        "pl-PL": "Wewnątrz",
        "pt-BR": "Dentro",
        "ru-RU": "Внутри",
        "zh-CN": "内",
        "zh-TW": "內部"
    },
    {
        "opy": "Innocent",
        "en-US": "Innocent",
        "guid": "00000000C5BB",
        "de-DE": "Unschuldig",
        "es-ES": "Inocente",
        "es-MX": "Inocente",
        "it-IT": "Innocente",
        "ja-JP": "無罪",
        "pl-PL": "Niewinny",
        "pt-BR": "Inocente",
        "ru-RU": "Невиновен",
        "zh-CN": "无罪",
        "zh-TW": "無辜"
    },
    {
        "opy": "Initial Upgrade",
        "en-US": "Initial Upgrade",
        "guid": "00000000C021",
        "de-DE": "Erstes Upgrade",
        "es-ES": "Mejora inicial",
        "es-MX": "Mejora inicial",
        "fr-FR": "Amélioration initiale",
        "it-IT": "Miglioramento Iniziale",
        "ja-JP": "初期アップグレード",
        "pl-PL": "Wstępne ulepszenie",
        "pt-BR": "Melhoria Inicial",
        "ru-RU": "Начальное улучшение",
        "zh-CN": "初始升级",
        "zh-TW": "初始升級"
    },
    {
        "opy": "Initial Targets",
        "en-US": "Initial Targets",
        "guid": "00000000C014",
        "de-DE": "Erste Ziele",
        "es-ES": "Objetivos iniciales",
        "es-MX": "Objetivos iniciales",
        "fr-FR": "Cibles initiales",
        "it-IT": "Bersagli Iniziali",
        "ja-JP": "初期ターゲット",
        "pl-PL": "Wstępne cele",
        "pt-BR": "Alvos Iniciais",
        "ru-RU": "Начальные цели",
        "zh-CN": "初始目标",
        "zh-TW": "初始目標"
    },
    {
        "opy": "Initial Target",
        "en-US": "Initial Target",
        "guid": "00000000C012",
        "de-DE": "Erstes Ziel",
        "es-ES": "Objetivo inicial",
        "es-MX": "Objetivo inicial",
        "fr-FR": "Cible initiale",
        "it-IT": "Bersaglio Iniziale",
        "ja-JP": "初期ターゲット",
        "pl-PL": "Wstępny cel",
        "pt-BR": "Alvo Inicial",
        "ru-RU": "Начальная цель",
        "zh-CN": "初始目标",
        "zh-TW": "初始目標"
    },
    {
        "opy": "Initial Round",
        "en-US": "Initial Round",
        "guid": "00000000C019",
        "de-DE": "Erste Runde",
        "es-ES": "Ronda inicial",
        "es-MX": "Ronda inicial",
        "fr-FR": "Manche initiale",
        "it-IT": "Round Iniziale",
        "ja-JP": "初期ラウンド",
        "pl-PL": "Wstępna runda",
        "pt-BR": "Rodada Inicial",
        "ru-RU": "Начальный раунд",
        "zh-CN": "初始回合",
        "zh-TW": "初始回合"
    },
    {
        "opy": "Initial Players",
        "en-US": "Initial Players",
        "guid": "00000000C013",
        "de-DE": "Erste Spieler",
        "es-ES": "Jugadores iniciales",
        "es-MX": "Jugadores iniciales",
        "fr-FR": "Joueurs initiaux",
        "it-IT": "Giocatori Iniziali",
        "ja-JP": "初期プレイヤー",
        "pl-PL": "Wstępni gracze",
        "pt-BR": "Jogadores Iniciais",
        "ru-RU": "Начальные игроки",
        "zh-CN": "初始玩家",
        "zh-TW": "初始玩家"
    },
    {
        "opy": "Initial Player",
        "en-US": "Initial Player",
        "guid": "00000000C011",
        "de-DE": "Erster Spieler",
        "es-ES": "Jugador inicial",
        "es-MX": "Jugador inicial",
        "fr-FR": "Joueur initial",
        "it-IT": "Giocatore Iniziale",
        "ja-JP": "初期プレイヤー",
        "pl-PL": "Wstępny gracz",
        "pt-BR": "Jogador Inicial",
        "ru-RU": "Начальный игрок",
        "zh-CN": "初始玩家",
        "zh-TW": "初始玩家"
    },
    {
        "opy": "Initial Phase",
        "en-US": "Initial Phase",
        "guid": "00000000C025",
        "de-DE": "Erste Phase",
        "es-ES": "Fase inicial",
        "es-MX": "Fase inicial",
        "fr-FR": "Phase initiale",
        "it-IT": "Fase Iniziale",
        "ja-JP": "初期フェーズ",
        "pl-PL": "Wstępna faza",
        "pt-BR": "Fase Inicial",
        "ru-RU": "Начальная фаза",
        "zh-CN": "初始阶段",
        "zh-TW": "初始階段"
    },
    {
        "opy": "Initial Objects",
        "en-US": "Initial Objects",
        "guid": "00000000C017",
        "de-DE": "Erste Objekte",
        "es-ES": "Objetos iniciales",
        "es-MX": "Objetos iniciales",
        "fr-FR": "Objets initiaux",
        "it-IT": "Oggetti Iniziali",
        "ja-JP": "初期オブジェクト",
        "pl-PL": "Wstępne obiekty",
        "pt-BR": "Objetos Iniciais",
        "ru-RU": "Начальные объекты",
        "zh-CN": "初始对象",
        "zh-TW": "初始目標"
    },
    {
        "opy": "Initial Objective",
        "en-US": "Initial Objective",
        "guid": "00000000C01E",
        "de-DE": "Erster Zielpunkt",
        "es-ES": "Objetivo inicial",
        "es-MX": "Objetivo inicial",
        "fr-FR": "Objectif initial",
        "it-IT": "Obiettivo Iniziale",
        "ja-JP": "初期目標",
        "pl-PL": "Wstępne zadanie",
        "pt-BR": "Objetivo Inicial",
        "ru-RU": "Начальная задача",
        "zh-CN": "初始目标点",
        "zh-TW": "初始目標"
    },
    {
        "opy": "Initial Object",
        "en-US": "Initial Object",
        "guid": "00000000C016",
        "de-DE": "Erstes Objekt",
        "es-ES": "Objeto inicial",
        "es-MX": "Objeto inicial",
        "fr-FR": "Objet initial",
        "it-IT": "Oggetto Iniziale",
        "ja-JP": "初期オブジェクト",
        "pl-PL": "Wstępny obiekt",
        "pt-BR": "Objeto Inicial",
        "ru-RU": "Начальный объект",
        "zh-CN": "初始对象",
        "zh-TW": "初始目標"
    },
    {
        "opy": "Initial Mission",
        "en-US": "Initial Mission",
        "guid": "00000000C020",
        "de-DE": "Erste Mission",
        "es-ES": "Misión inicial",
        "es-MX": "Misión inicial",
        "fr-FR": "Mission initiale",
        "it-IT": "Missione Iniziale",
        "ja-JP": "初期任務",
        "pl-PL": "Wstępna misja",
        "pt-BR": "Missão Inicial",
        "ru-RU": "Начальное задание",
        "zh-CN": "初始任务",
        "zh-TW": "初始任務"
    },
    {
        "opy": "Initial Level",
        "en-US": "Initial Level",
        "guid": "00000000C028",
        "de-DE": "Erster Level",
        "es-ES": "Nivel inicial",
        "es-MX": "Nivel inicial",
        "fr-FR": "Niveau initial",
        "it-IT": "Livello Iniziale",
        "ja-JP": "初期レベル",
        "pl-PL": "Wstępny poziom",
        "pt-BR": "Nível Inicial",
        "ru-RU": "Начальный уровень",
        "zh-CN": "初始等级",
        "zh-TW": "初始等級"
    },
    {
        "opy": "Initial Hostage",
        "en-US": "Initial Hostage",
        "guid": "00000000C015",
        "de-DE": "Erste Geisel",
        "es-ES": "Rehén inicial",
        "es-MX": "Rehén inicial",
        "fr-FR": "Otage initial",
        "it-IT": "Ostaggio Iniziale",
        "ja-JP": "初期の人質",
        "pl-PL": "Wstępny zakładnik",
        "pt-BR": "Refém Inicial",
        "ru-RU": "Начальный заложник",
        "zh-CN": "初始人质",
        "zh-TW": "初始人質"
    },
    {
        "opy": "Initial Heroes",
        "en-US": "Initial Heroes",
        "guid": "00000000C010",
        "de-DE": "Erste Helden",
        "es-ES": "Héroes iniciales",
        "es-MX": "Héroes iniciales",
        "fr-FR": "Héros initiaux",
        "it-IT": "Eroi Iniziali",
        "ja-JP": "初期ヒーロー",
        "pl-PL": "Wstępni bohaterowie",
        "pt-BR": "Heróis Iniciais",
        "ru-RU": "Начальные герои",
        "zh-CN": "初始英雄",
        "zh-TW": "初始英雄"
    },
    {
        "opy": "Initial Hero",
        "en-US": "Initial Hero",
        "guid": "00000000C00F",
        "de-DE": "Erster Held",
        "es-ES": "Héroe inicial",
        "es-MX": "Héroe inicial",
        "fr-FR": "Héros initial",
        "it-IT": "Eroe Iniziale",
        "ja-JP": "初期ヒーロー",
        "pl-PL": "Wstępny bohater",
        "pt-BR": "Herói Inicial",
        "ru-RU": "Начальный герой",
        "zh-CN": "初始英雄",
        "zh-TW": "初始英雄"
    },
    {
        "opy": "Initial Game",
        "en-US": "Initial Game",
        "guid": "00000000C018",
        "de-DE": "Erstes Spiel",
        "es-ES": "Partida inicial",
        "es-MX": "Partida inicial",
        "fr-FR": "Partie initiale",
        "it-IT": "Partita Iniziale",
        "ja-JP": "初期マッチ",
        "pl-PL": "Wstępna gra",
        "pt-BR": "Jogo Inicial",
        "ru-RU": "Начальный матч",
        "zh-CN": "初始游戏",
        "zh-TW": "初始遊戲"
    },
    {
        "opy": "Initial Form",
        "en-US": "Initial Form",
        "guid": "00000000C029",
        "de-DE": "Erste Form",
        "es-ES": "Forma inicial",
        "es-MX": "Forma inicial",
        "fr-FR": "Forme initiale",
        "it-IT": "Forma Iniziale",
        "ja-JP": "初期フォーム",
        "pl-PL": "Wstępna forma",
        "pt-BR": "Forma Inicial",
        "ru-RU": "Начальная форма",
        "zh-CN": "初始形态",
        "zh-TW": "初始型態"
    },
    {
        "opy": "Initial Enemy",
        "en-US": "Initial Enemy",
        "guid": "00000000C01D",
        "de-DE": "Erster Gegner",
        "es-ES": "Enemigo inicial",
        "es-MX": "Enemigo inicial",
        "fr-FR": "Ennemi initial",
        "it-IT": "Nemico Iniziale",
        "ja-JP": "初期の敵",
        "pl-PL": "Wstępny wróg",
        "pt-BR": "Inimigo Inicial",
        "ru-RU": "Начальный враг",
        "zh-CN": "初始敌人",
        "zh-TW": "初始敵人"
    },
    {
        "opy": "Initial Enemies",
        "en-US": "Initial Enemies",
        "guid": "00000000C01C",
        "de-DE": "Erste Gegner",
        "es-ES": "Enemigos iniciales",
        "es-MX": "Enemigos iniciales",
        "fr-FR": "Ennemis initiaux",
        "it-IT": "Nemici Iniziali",
        "ja-JP": "初期の敵",
        "pl-PL": "Wstępni wrogowie",
        "pt-BR": "Inimigos Iniciais",
        "ru-RU": "Начальные враги",
        "zh-CN": "初始敌人",
        "zh-TW": "初始敵人"
    },
    {
        "opy": "Initial Checkpoint",
        "en-US": "Initial Checkpoint",
        "guid": "00000000C024",
        "de-DE": "Erster Checkpoint",
        "es-ES": "Punto de control inicial",
        "es-MX": "Punto de control inicial",
        "fr-FR": "Point de contrôle initial",
        "it-IT": "Checkpoint Iniziale",
        "ja-JP": "初期チェックポイント",
        "pl-PL": "Wstępny punkt kontrolny",
        "pt-BR": "Ponto de Verificação Inicial",
        "ru-RU": "Начальная контрольная точка",
        "zh-CN": "初始检查点",
        "zh-TW": "初始檢查點"
    },
    {
        "opy": "Initial Attempt",
        "en-US": "Initial Attempt",
        "guid": "00000000C01F",
        "de-DE": "Erster Versuch",
        "es-ES": "Intento inicial",
        "es-MX": "Intento inicial",
        "fr-FR": "Tentative initiale",
        "it-IT": "Tentativo Iniziale",
        "ja-JP": "初期挑戦",
        "pl-PL": "Wstępna próba",
        "pt-BR": "Tentativa Inicial",
        "ru-RU": "Начальная попытка",
        "zh-CN": "初始尝试",
        "zh-TW": "初次機會"
    },
    {
        "opy": "Initial Ally",
        "en-US": "Initial Ally",
        "guid": "00000000C01B",
        "de-DE": "Erster Verbündeter",
        "es-ES": "Aliado inicial",
        "es-MX": "Aliado inicial",
        "fr-FR": "Allié initial",
        "it-IT": "Alleato Iniziale",
        "ja-JP": "初期の味方",
        "pl-PL": "Wstępny sojusznik",
        "pt-BR": "Aliado Inicial",
        "ru-RU": "Начальный союзник",
        "zh-CN": "初始盟友",
        "zh-TW": "初始盟友"
    },
    {
        "opy": "Initial Allies",
        "en-US": "Initial Allies",
        "guid": "00000000C01A",
        "de-DE": "Erste Verbündete",
        "es-ES": "Aliados iniciales",
        "es-MX": "Aliados iniciales",
        "fr-FR": "Alliés initiaux",
        "it-IT": "Alleati Iniziali",
        "ja-JP": "初期の味方",
        "pl-PL": "Wstępni sojusznicy",
        "pt-BR": "Aliados Iniciais",
        "ru-RU": "Начальные союзники",
        "zh-CN": "初始盟友",
        "zh-TW": "初始盟友"
    },
    {
        "opy": "Initial",
        "en-US": "Initial",
        "guid": "00000000BFEF",
        "de-DE": "Zuerst",
        "es-ES": "Inicial",
        "es-MX": "Inicial",
        "it-IT": "Iniziale",
        "ja-JP": "初期",
        "pl-PL": "Wstępne",
        "pt-BR": "Inicial",
        "ru-RU": "Начальный",
        "zh-CN": "初始",
        "zh-TW": "初始"
    },
    {
        "guid": "00000000C135",
        "opy": "Incoming",
        "en-US": "Incoming",
        "de-DE": "Eingehend",
        "es-ES": "Entrante",
        "es-MX": "Fuera",
        "fr-FR": "En approche",
        "it-IT": "In Arrivo",
        "ja-JP": "受信",
        "pl-PL": "Przychodzące",
        "pt-BR": "Chegando",
        "ru-RU": "Опасность",
        "zh-CN": "正在前来",
        "zh-TW": "來襲"
    },
    {
        "opy": "Income",
        "en-US": "Income",
        "guid": "00000000C876",
        "de-DE": "Einkommen",
        "es-ES": "Ingresos",
        "es-MX": "Ingreso",
        "fr-FR": "Revenu",
        "it-IT": "Reddito",
        "ja-JP": "受ける",
        "pl-PL": "Dochód",
        "pt-BR": "A caminho",
        "ru-RU": "Доход",
        "zh-CN": "收入",
        "zh-TW": "收入"
    },
    {
        "opy": "In View",
        "en-US": "In View",
        "guid": "00000000C131",
        "de-DE": "In Sicht",
        "es-ES": "A la vista",
        "es-MX": "A la vista",
        "fr-FR": "En vue",
        "it-IT": "In Visuale",
        "ja-JP": "表示内",
        "pl-PL": "W polu widzenia",
        "pt-BR": "Na Visão",
        "ru-RU": "В поле зрения",
        "zh-CN": "在视野中",
        "zh-TW": "在視野中"
    },
    {
        "opy": "I Tried",
        "en-US": "I Tried",
        "guid": "00000000C180",
        "de-DE": "Ich hab's versucht",
        "es-ES": "Lo he intentado",
        "es-MX": "Lo intenté",
        "fr-FR": "J’ai essayé",
        "it-IT": "Ho Provato",
        "ja-JP": "やるだけやった",
        "pl-PL": "Próbowałem",
        "pt-BR": "Eu Tentei",
        "ru-RU": "Попытка – не пытка",
        "zh-CN": "我尽力了",
        "zh-TW": "努力了"
    },
    {
        "opy": "I Give Up",
        "en-US": "I Give Up",
        "guid": "00000000C18E",
        "de-DE": "Ich gebe auf",
        "es-ES": "Me rindo",
        "es-MX": "Me rindo",
        "fr-FR": "J’abandonne",
        "it-IT": "Mi Arrendo",
        "ja-JP": "もう諦めた",
        "pl-PL": "Poddaję się",
        "pt-BR": "Desisto",
        "ru-RU": "Я сдаюсь",
        "zh-CN": "我放弃了",
        "zh-TW": "放棄"
    },
    {
        "opy": "Hunting",
        "en-US": "Hunting",
        "guid": "00000000C0A9",
        "de-DE": "Jagd",
        "es-ES": "Dando caza",
        "es-MX": "Cazando",
        "fr-FR": "Chasse",
        "it-IT": "Caccia in Corso",
        "ja-JP": "狩り中",
        "pl-PL": "Polowanie",
        "pt-BR": "Caçando",
        "ru-RU": "Охотится",
        "zh-CN": "正在狩猎",
        "zh-TW": "正在狩獵"
    },
    {
        "guid": "00000000C297",
        "opy": "Hunters",
        "en-US": "Hunters",
        "de-DE": "Verfolger",
        "es-ES": "Cazadoras",
        "es-MX": "Cazadores",
        "fr-FR": "Chasseurs",
        "it-IT": "Cacciatori",
        "ja-JP": "ハンター",
        "pl-PL": "Łowcy",
        "pt-BR": "Caçadores",
        "ru-RU": "Охотники",
        "zh-CN": "猎人",
        "zh-TW": "獵人"
    },
    {
        "opy": "Hunter",
        "en-US": "Hunter",
        "guid": "00000000C296",
        "de-DE": "Jäger",
        "es-ES": "Cazadora",
        "es-MX": "Cazador",
        "fr-FR": "Chasseur",
        "it-IT": "Cacciatore",
        "ja-JP": "ハンター",
        "pl-PL": "Łowca",
        "pt-BR": "Caçador",
        "ru-RU": "Охотник",
        "zh-CN": "猎人",
        "zh-TW": "獵人"
    },
    {
        "opy": "Hunted",
        "en-US": "Hunted",
        "guid": "00000000C0AA",
        "de-DE": "Gejagt",
        "es-ES": "Cazado",
        "es-MX": "Cazado",
        "fr-FR": "Pourchassé",
        "it-IT": "Cacciato",
        "ja-JP": "狩りをした",
        "pl-PL": "Upolowano",
        "pt-BR": "Caçado",
        "ru-RU": "Жертва",
        "zh-CN": "已狩猎 ",
        "zh-TW": "遭到狩獵"
    },
    {
        "opy": "Hunt",
        "en-US": "Hunt",
        "guid": "00000000C0A8",
        "de-DE": "Jagen",
        "es-ES": "Dar caza",
        "es-MX": "Cazar",
        "fr-FR": "Chasser",
        "it-IT": "Caccia",
        "ja-JP": "狩り",
        "pl-PL": "Upoluj",
        "pt-BR": "Caçar",
        "ru-RU": "Охотиться",
        "zh-CN": "狩猎",
        "zh-TW": "狩獵"
    },
    {
        "opy": "Huh",
        "en-US": "Huh",
        "guid": "00000000C29E",
        "de-DE": "Hä",
        "es-ES": "Ein",
        "es-MX": "¿Eh?",
        "fr-FR": "Euh",
        "it-IT": "Eh",
        "ja-JP": "ふうん",
        "pl-PL": "Hę",
        "pt-BR": "Hã",
        "ru-RU": "Хех",
        "zh-CN": "哈",
        "zh-TW": "哼"
    },
    {
        "opy": "Hostages",
        "en-US": "Hostages",
        "guid": "00000000BFD1",
        "de-DE": "Geiseln",
        "es-ES": "Rehenes",
        "es-MX": "Rehenes",
        "fr-FR": "Otages",
        "it-IT": "Ostaggi",
        "ja-JP": "人質",
        "pl-PL": "Zakładnicy",
        "pt-BR": "Reféns",
        "ru-RU": "Заложники",
        "zh-CN": "人质",
        "zh-TW": "人質"
    },
    {
        "opy": "Hostage",
        "en-US": "Hostage",
        "guid": "00000000BFD7",
        "de-DE": "Geisel",
        "es-ES": "Rehén",
        "es-MX": "Rehén",
        "fr-FR": "Otage",
        "it-IT": "Ostaggio",
        "ja-JP": "人質",
        "pl-PL": "Zakładnik",
        "pt-BR": "Refém",
        "ru-RU": "Заложник",
        "zh-CN": "人质",
        "zh-TW": "人質"
    },
    {
        "opy": "Hmmm",
        "en-US": "Hmmm",
        "guid": "00000000C183",
        "es-ES": "Mmm",
        "it-IT": "Mmm",
        "ja-JP": "ふーむ",
        "pl-PL": "Hm",
        "ru-RU": "Хм-м-м",
        "zh-CN": "嗯",
        "zh-TW": "嗯"
    },
    {
        "opy": "Hitting",
        "en-US": "Hitting",
        "guid": "00000000CAAA",
        "de-DE": "Treffer",
        "es-ES": "Golpeando",
        "es-MX": "Golpeando",
        "fr-FR": "Touche",
        "it-IT": "Colpo in Corso",
        "ja-JP": "ヒットしている",
        "pl-PL": "Uderzanie",
        "pt-BR": "Acertando",
        "ru-RU": "Попадает",
        "zh-CN": "正在击中",
        "zh-TW": "擊中"
    },
    {
        "opy": "Hit",
        "en-US": "Hit",
        "guid": "00000000CAA9",
        "de-DE": "Treffen",
        "es-ES": "Golpear",
        "es-MX": "Golpear",
        "fr-FR": "Toucher",
        "it-IT": "Colpisci",
        "ja-JP": "ヒットする",
        "pl-PL": "Uderz",
        "pt-BR": "Acertar",
        "ru-RU": "Попадание",
        "zh-CN": "击中",
        "zh-TW": "擊中"
    },
    {
        "opy": "High Scores",
        "en-US": "High Scores",
        "guid": "00000000C280",
        "de-DE": "Highscores",
        "es-ES": "Mejores puntuaciones",
        "es-MX": "Puntuaciones altas",
        "fr-FR": "Meilleurs scores",
        "it-IT": "Punteggi Migliori",
        "ja-JP": "ハイスコア",
        "pl-PL": "Najwyższe wyniki",
        "pt-BR": "Pontuações Máximas",
        "ru-RU": "Рекорды",
        "zh-CN": "最高得分",
        "zh-TW": "最高分"
    },
    {
        "opy": "High Score",
        "en-US": "High Score",
        "guid": "00000000C27F",
        "de-DE": "Highscore",
        "es-ES": "Mejor puntuación",
        "es-MX": "Puntuación alta",
        "fr-FR": "Meilleur score",
        "it-IT": "Punteggio Migliore",
        "ja-JP": "ハイスコア",
        "pl-PL": "Najwyższy wynik",
        "pt-BR": "Pontuação Máxima",
        "ru-RU": "Рекорд",
        "zh-CN": "最高得分",
        "zh-TW": "最高分"
    },
    {
        "opy": "Hiding",
        "en-US": "Hiding",
        "guid": "00000000C0A0",
        "de-DE": "Versteck",
        "es-ES": "Ocultando",
        "es-MX": "Ocultando",
        "fr-FR": "Cache",
        "it-IT": "Nascondimento in Corso",
        "ja-JP": "非表示にしている",
        "pl-PL": "Ukrywanie",
        "pt-BR": "Escondendo",
        "ru-RU": "Скрывается",
        "zh-CN": "正在隐藏",
        "zh-TW": "正在躲藏"
    },
    {
        "guid": "00000000C09F",
        "opy": "Hide",
        "en-US": "Hide",
        "de-DE": "Verstecken",
        "es-ES": "Ocultar",
        "es-MX": "Ocultar",
        "fr-FR": "Cacher",
        "it-IT": "Nascondi",
        "ja-JP": "非表示",
        "pl-PL": "Ukryj",
        "pt-BR": "Esconder",
        "ru-RU": "Скрыть",
        "zh-CN": "隐藏",
        "zh-TW": "躲藏"
    },
    {
        "opy": "Hidden",
        "en-US": "Hidden",
        "guid": "00000000C0A1",
        "de-DE": "Versteckt",
        "es-ES": "Ocultado",
        "es-MX": "Oculto",
        "fr-FR": "Caché",
        "it-IT": "Nascosto",
        "ja-JP": "非表示にした",
        "pl-PL": "Ukryto",
        "pt-BR": "Escondido",
        "ru-RU": "Скрытый",
        "zh-CN": "已隐藏",
        "zh-TW": "躲藏"
    },
    {
        "guid": "00000000BFCF",
        "opy": "Heroes",
        "en-US": "Heroes",
        "de-DE": "Helden",
        "es-ES": "Héroes",
        "es-MX": "Héroes",
        "fr-FR": "Héros",
        "it-IT": "Eroi",
        "ja-JP": "ヒーロー",
        "pl-PL": "Bohaterowie",
        "pt-BR": "Heróis",
        "ru-RU": "Герои",
        "zh-CN": "英雄",
        "zh-TW": "英雄"
    },
    {
        "guid": "00000000BFD0",
        "opy": "Hero",
        "en-US": "Hero",
        "de-DE": "Held",
        "es-ES": "Héroe",
        "es-MX": "Héroe",
        "fr-FR": "Héros",
        "it-IT": "Eroe",
        "ja-JP": "ヒーロー",
        "pl-PL": "Bohater",
        "pt-BR": "Herói",
        "ru-RU": "Герой",
        "zh-CN": "英雄",
        "zh-TW": "英雄"
    },
    {
        "opy": "Here",
        "en-US": "Here",
        "guid": "00000000C2AA",
        "de-DE": "Hier",
        "es-ES": "Aquí",
        "es-MX": "Aquí",
        "fr-FR": "Ici",
        "it-IT": "Qui",
        "ja-JP": "ここ",
        "pl-PL": "Tutaj",
        "pt-BR": "Aqui",
        "ru-RU": "Сюда",
        "zh-CN": "此处",
        "zh-TW": "這裡"
    },
    {
        "opy": "Help",
        "en-US": "Help",
        "guid": "00000000C187",
        "de-DE": "Hilfe",
        "es-ES": "Ayuda",
        "es-MX": "Ayuda",
        "fr-FR": "Aide",
        "it-IT": "Aiuto",
        "ja-JP": "助けて",
        "pl-PL": "Pomocy",
        "pt-BR": "Socorro",
        "ru-RU": "На помощь",
        "zh-CN": "求助",
        "zh-TW": "幫我"
    },
    {
        "guid": "00000000C178",
        "opy": "Hello",
        "en-US": "Hello",
        "de-DE": "Hallo",
        "es-ES": "Hola",
        "es-MX": "Hola",
        "fr-FR": "Bonjour",
        "it-IT": "Ciao",
        "ja-JP": "こんにちは",
        "pl-PL": "Witaj",
        "pt-BR": "Olá",
        "ru-RU": "Привет",
        "zh-CN": "问候",
        "zh-TW": "哈囉"
    },
    {
        "opy": "Height",
        "en-US": "Height",
        "guid": "00000000C86B",
        "de-DE": "Höhe",
        "es-ES": "Altura",
        "es-MX": "Altura",
        "fr-FR": "Hauteur",
        "it-IT": "Altezza",
        "ja-JP": "高さ",
        "pl-PL": "Wysokość",
        "pt-BR": "Altura",
        "ru-RU": "Высота",
        "zh-CN": "高度",
        "zh-TW": "高度"
    },
    {
        "opy": "Hearts",
        "en-US": "Hearts",
        "guid": "00000000CAAB",
        "de-DE": "Herz",
        "es-ES": "Corazones",
        "es-MX": "Corazones",
        "fr-FR": "Cœur",
        "it-IT": "Cuori",
        "ja-JP": "ハート",
        "pl-PL": "Kier",
        "pt-BR": "Copas",
        "ru-RU": "Червы",
        "zh-CN": "心",
        "zh-TW": "紅心"
    },
    {
        "guid": "00000000CAC4",
        "opy": "Heart",
        "en-US": "Heart",
        "de-DE": "Herz",
        "es-ES": "Corazón",
        "es-MX": "Corazón",
        "fr-FR": "Cœur",
        "it-IT": "Cuore",
        "ja-JP": "ハート",
        "pl-PL": "Kier",
        "pt-BR": "Copas",
        "ru-RU": "Червы",
        "zh-CN": "红桃",
        "zh-TW": "紅心"
    },
    {
        "opy": "Healing",
        "en-US": "Healing",
        "guid": "00000000C5D8",
        "de-DE": "Heilung",
        "es-ES": "Sanando",
        "es-MX": "Sanando",
        "fr-FR": "Soigne",
        "it-IT": "Cura in Corso",
        "ja-JP": "回復している",
        "pl-PL": "Leczenie",
        "pt-BR": "Curando",
        "ru-RU": "Лечит",
        "zh-CN": "正在治疗",
        "zh-TW": "正在治療"
    },
    {
        "opy": "Healers",
        "en-US": "Healers",
        "guid": "00000000C5E2",
        "de-DE": "Sanitäter",
        "es-ES": "Sanadores",
        "es-MX": "Sanadores",
        "fr-FR": "Soigneurs",
        "it-IT": "Guaritori",
        "ja-JP": "ヒーラー",
        "pl-PL": "Leczący",
        "pt-BR": "Curandeiros",
        "ru-RU": "Медики",
        "zh-CN": "治疗者",
        "zh-TW": "治療者"
    },
    {
        "guid": "00000000C5E1",
        "opy": "Healer",
        "en-US": "Healer",
        "de-DE": "Heiler",
        "es-ES": "Sanador",
        "es-MX": "Sanador",
        "fr-FR": "Soigneur",
        "it-IT": "Guaritore",
        "ja-JP": "ヒーラー",
        "pl-PL": "Leczący",
        "pt-BR": "Curandeiro",
        "ru-RU": "Медик",
        "zh-CN": "治疗者",
        "zh-TW": "治療者"
    },
    {
        "opy": "Healed",
        "en-US": "Healed",
        "guid": "00000000C5D9",
        "de-DE": "Geheilt",
        "es-ES": "Sanado",
        "es-MX": "Sanado",
        "fr-FR": "Soigné",
        "it-IT": "Curato",
        "ja-JP": "回復された",
        "pl-PL": "Wyleczono",
        "pt-BR": "Curado",
        "ru-RU": "Вылечен",
        "zh-CN": "已治疗",
        "zh-TW": "受到治療"
    },
    {
        "guid": "00000000C5D7",
        "opy": "Heal",
        "en-US": "Heal",
        "de-DE": "Heilen",
        "es-ES": "Sanar",
        "es-MX": "Sanar",
        "fr-FR": "Soigner",
        "it-IT": "Cura",
        "ja-JP": "回復する",
        "pl-PL": "Wylecz",
        "pt-BR": "Curar",
        "ru-RU": "Лечить",
        "zh-CN": "治疗",
        "zh-TW": "治療"
    },
    {
        "opy": "Hands",
        "en-US": "Hands",
        "guid": "00000000CAA8",
        "de-DE": "Hände",
        "es-ES": "Manos",
        "es-MX": "Manos",
        "fr-FR": "Mains",
        "it-IT": "Mani",
        "ja-JP": "手",
        "pl-PL": "Dłonie",
        "pt-BR": "Mãos",
        "ru-RU": "Руки",
        "zh-CN": "手牌",
        "zh-TW": "手牌"
    },
    {
        "guid": "00000000CAA7",
        "opy": "Hand",
        "en-US": "Hand",
        "es-ES": "Mano",
        "es-MX": "Mano",
        "fr-FR": "Main",
        "it-IT": "Mano",
        "ja-JP": "手",
        "pl-PL": "Dłoń",
        "pt-BR": "Mão",
        "ru-RU": "Рука",
        "zh-CN": "手牌",
        "zh-TW": "手牌"
    },
    {
        "guid": "00000000C0EB",
        "opy": "Hacking",
        "en-US": "Hacking",
        "de-DE": "Hack",
        "es-ES": "Hackeando",
        "es-MX": "Hackeando",
        "fr-FR": "Piratage",
        "it-IT": "Sabotaggio in Corso",
        "ja-JP": "ハッキング中",
        "pl-PL": "Hakowanie",
        "pt-BR": "Hackeando",
        "ru-RU": "Взламывает",
        "zh-CN": "正在入侵",
        "zh-TW": "正在駭入"
    },
    {
        "guid": "00000000C0EC",
        "opy": "Hacked",
        "en-US": "Hacked",
        "de-DE": "Gehackt",
        "es-ES": "Hackeado",
        "es-MX": "Hackeado",
        "fr-FR": "Piraté",
        "it-IT": "Sabotato",
        "ja-JP": "ハックされている",
        "pl-PL": "Zhakowano",
        "pt-BR": "Hackeado",
        "ru-RU": "Взломал",
        "zh-CN": "已入侵",
        "zh-TW": "被駭入"
    },
    {
        "guid": "00000000C0EA",
        "opy": "Hack",
        "en-US": "Hack",
        "de-DE": "Hacken",
        "es-ES": "Hackear",
        "es-MX": "Hackear",
        "fr-FR": "Pirater",
        "it-IT": "Sabota",
        "ja-JP": "ハッキング",
        "pl-PL": "Zhakuj",
        "pt-BR": "Hackear",
        "ru-RU": "Взломать",
        "zh-CN": "入侵",
        "zh-TW": "駭入"
    },
    {
        "opy": "Guilty",
        "en-US": "Guilty",
        "guid": "00000000C5BC",
        "de-DE": "Schuldig",
        "es-ES": "Culpable",
        "es-MX": "Culpable",
        "fr-FR": "Coupable",
        "it-IT": "Colpevole",
        "ja-JP": "有罪",
        "pl-PL": "Winny",
        "pt-BR": "Culpado",
        "ru-RU": "Виновен",
        "zh-CN": "有罪",
        "zh-TW": "有罪"
    },
    {
        "guid": "00000000C879",
        "opy": "Green",
        "en-US": "Green",
        "de-DE": "Grün",
        "es-ES": "Verde",
        "es-MX": "Verde",
        "fr-FR": "Vert",
        "it-IT": "Verde",
        "ja-JP": "緑",
        "pl-PL": "Zielony",
        "pt-BR": "Verde",
        "ru-RU": "Зеленый",
        "zh-CN": "绿色",
        "zh-TW": "綠"
    },
    {
        "opy": "Goodbye",
        "en-US": "Goodbye",
        "guid": "00000000C179",
        "de-DE": "Tschüss",
        "es-ES": "Adiós",
        "es-MX": "Adiós",
        "fr-FR": "Au revoir",
        "it-IT": "Arrivederci",
        "ja-JP": "さようなら",
        "pl-PL": "Na razie",
        "pt-BR": "Tchau",
        "ru-RU": "До свидания",
        "zh-CN": "再见",
        "zh-TW": "再見"
    },
    {
        "opy": "Good Luck",
        "en-US": "Good Luck",
        "guid": "00000000C17A",
        "de-DE": "Viel Glück",
        "es-ES": "Buena suerte",
        "es-MX": "Buena suerte",
        "fr-FR": "Bonne chance",
        "it-IT": "Buona Fortuna",
        "ja-JP": "グッド・ラック",
        "pl-PL": "Powodzenia",
        "pt-BR": "Boa Sorte",
        "ru-RU": "Удачи",
        "zh-CN": "好运",
        "zh-TW": "祝好運"
    },
    {
        "guid": "00000000C14B",
        "opy": "Good",
        "en-US": "Good",
        "de-DE": "Gut",
        "es-ES": "Bueno",
        "es-MX": "Bien",
        "fr-FR": "Bon",
        "it-IT": "Buono",
        "ja-JP": "良い",
        "pl-PL": "Dobrze",
        "pt-BR": "Bom",
        "ru-RU": "Хорошо",
        "zh-CN": "好",
        "zh-TW": "好"
    },
    {
        "opy": "Going",
        "en-US": "Going",
        "guid": "00000000C12F",
        "de-DE": "Los",
        "es-ES": "Yendo",
        "es-MX": "En camino",
        "fr-FR": "Aller",
        "it-IT": "Movimento in Corso",
        "ja-JP": "行く",
        "pl-PL": "Idzie",
        "pt-BR": "Indo",
        "ru-RU": "Идет",
        "zh-CN": "正在前往",
        "zh-TW": "正在前往"
    },
    {
        "opy": "Goals",
        "en-US": "Goals",
        "guid": "00000000BFD8",
        "de-DE": "Ziele",
        "es-ES": "Objetivos",
        "es-MX": "Objetivos",
        "fr-FR": "Buts",
        "it-IT": "Obiettivi",
        "ja-JP": "目標",
        "pl-PL": "Wytyczne",
        "pt-BR": "Metas",
        "ru-RU": "Голы",
        "zh-CN": "终点",
        "zh-TW": "目標"
    },
    {
        "guid": "00000000BFD9",
        "opy": "Goal",
        "en-US": "Goal",
        "de-DE": "Ziel",
        "es-ES": "Objetivo",
        "es-MX": "Objetivo",
        "fr-FR": "But",
        "it-IT": "Obiettivo",
        "ja-JP": "目標",
        "pl-PL": "Wytyczna",
        "pt-BR": "Meta",
        "ru-RU": "Гол",
        "zh-CN": "终点",
        "zh-TW": "目標"
    },
    {
        "opy": "Go",
        "en-US": "Go",
        "guid": "00000000C12E",
        "de-DE": "Gehen",
        "es-ES": "Ir",
        "es-MX": "Ir",
        "fr-FR": "Aller",
        "it-IT": "Vai",
        "ja-JP": "行く",
        "pl-PL": "Idź",
        "pt-BR": "Ir",
        "ru-RU": "Вперед",
        "zh-CN": "前往",
        "zh-TW": "前往"
    },
    {
        "guid": "00000000C17B",
        "opy": "GG",
        "en-US": "GG",
        "es-MX": "Buen juego",
        "fr-FR": "BRAVO",
        "pl-PL": "Dobra gra",
        "ru-RU": "ГГ"
    },
    {
        "opy": "Games Won",
        "en-US": "Games Won",
        "guid": "00000000C088",
        "de-DE": "Spiele gewonnen",
        "es-ES": "Partidas ganadas",
        "es-MX": "Partidas ganadas",
        "fr-FR": "Parties gagnées",
        "it-IT": "Partite Vinte",
        "ja-JP": "マッチ勝利",
        "pl-PL": "Wygrane gry",
        "pt-BR": "Jogos Vencidos",
        "ru-RU": "Выиграно матчей",
        "zh-CN": "胜利场数",
        "zh-TW": "勝場"
    },
    {
        "opy": "Games Lost",
        "en-US": "Games Lost",
        "guid": "00000000C08A",
        "de-DE": "Spiele verloren",
        "es-ES": "Partidas perdidas",
        "es-MX": "Partidas perdidas",
        "fr-FR": "Parties perdues",
        "it-IT": "Partite Perse",
        "ja-JP": "マッチ敗北",
        "pl-PL": "Przegrane gry",
        "pt-BR": "Jogos Perdidos",
        "ru-RU": "Проиграно матчей",
        "zh-CN": "战败场数",
        "zh-TW": "敗場"
    },
    {
        "opy": "Games",
        "en-US": "Games",
        "guid": "00000000BFB8",
        "de-DE": "Spiele",
        "es-ES": "Partidas",
        "es-MX": "Partidas",
        "fr-FR": "Parties",
        "it-IT": "Partite",
        "ja-JP": "マッチ",
        "pl-PL": "Gry",
        "pt-BR": "Jogos",
        "ru-RU": "Матчи",
        "zh-CN": "比赛",
        "zh-TW": "遊戲"
    },
    {
        "opy": "Game",
        "en-US": "Game",
        "guid": "00000000BFB9",
        "de-DE": "Spiel",
        "es-ES": "Partida",
        "es-MX": "Partida",
        "fr-FR": "Partie",
        "it-IT": "Partita",
        "ja-JP": "マッチ",
        "pl-PL": "Gra",
        "pt-BR": "Jogo",
        "ru-RU": "Матч",
        "zh-CN": "比赛",
        "zh-TW": "遊戲"
    },
    {
        "guid": "00000000C0D7",
        "opy": "Frozen",
        "en-US": "Frozen",
        "de-DE": "Eingefroren",
        "es-ES": "Congelado",
        "es-MX": "Congelado",
        "fr-FR": "Gelé",
        "it-IT": "Congelato",
        "ja-JP": "凍らされた",
        "pl-PL": "Zamrożono",
        "pt-BR": "Congelado",
        "ru-RU": "Заморозил",
        "zh-CN": "已冰冻",
        "zh-TW": "受到冰凍"
    },
    {
        "opy": "Freezing",
        "en-US": "Freezing",
        "guid": "00000000C0D6",
        "de-DE": "Frost",
        "es-ES": "Congelando",
        "es-MX": "Congelando",
        "fr-FR": "Gel",
        "it-IT": "Congelamento in Corso",
        "ja-JP": "フリーズ中",
        "pl-PL": "Zamrażanie",
        "pt-BR": "Congelando",
        "ru-RU": "Замораживает",
        "zh-CN": "正在冰冻",
        "zh-TW": "正在冰凍"
    },
    {
        "opy": "Freeze",
        "en-US": "Freeze",
        "guid": "00000000C0D5",
        "de-DE": "Einfrieren",
        "es-ES": "Congelar",
        "es-MX": "Congelar",
        "fr-FR": "Geler",
        "it-IT": "Congela",
        "ja-JP": "フリーズ",
        "pl-PL": "Zamroź",
        "pt-BR": "Congelar",
        "ru-RU": "Заморозить",
        "zh-CN": "冰冻",
        "zh-TW": "冰凍"
    },
    {
        "opy": "Found",
        "en-US": "Found",
        "guid": "00000000C09C",
        "de-DE": "Gefunden",
        "es-ES": "Encontrado",
        "es-MX": "Encontrado",
        "fr-FR": "Trouvé",
        "it-IT": "Trovato",
        "ja-JP": "検索した",
        "pl-PL": "Znaleziono",
        "pt-BR": "Encontrado",
        "ru-RU": "Нашел",
        "zh-CN": "已找到",
        "zh-TW": "被發現"
    },
    {
        "guid": "00000000C176",
        "opy": "Forward",
        "en-US": "Forward",
        "de-DE": "Vorwärts",
        "es-ES": "Hacia adelante",
        "es-MX": "Adelante",
        "fr-FR": "Avant",
        "it-IT": "Avanti",
        "ja-JP": "前方",
        "pl-PL": "Do przodu",
        "pt-BR": "Para a Frente",
        "ru-RU": "Вперед",
        "zh-CN": "前",
        "zh-TW": "前進"
    },
    {
        "opy": "Forms",
        "en-US": "Forms",
        "guid": "00000000BFFE",
        "de-DE": "Formen",
        "es-ES": "Forma",
        "es-MX": "Formas",
        "fr-FR": "Formes",
        "it-IT": "Forme",
        "ja-JP": "フォーム",
        "pl-PL": "Formy",
        "pt-BR": "Formas",
        "ru-RU": "Формы",
        "zh-CN": "表格",
        "zh-TW": "型態"
    },
    {
        "opy": "Form",
        "en-US": "Form",
        "guid": "00000000BFEC",
        "es-ES": "Forma",
        "es-MX": "Forma",
        "fr-FR": "Forme",
        "it-IT": "Forma",
        "ja-JP": "フォーム",
        "pl-PL": "Forma",
        "pt-BR": "Forma",
        "ru-RU": "Форма",
        "zh-CN": "表格",
        "zh-TW": "型態"
    },
    {
        "opy": "Folding",
        "en-US": "Folding",
        "guid": "00000000CAA1",
        "de-DE": "Passen",
        "es-ES": "Retirándose",
        "es-MX": "Retirándose",
        "fr-FR": "Se couche",
        "it-IT": "Abbandono in Corso",
        "ja-JP": "フォールドしている",
        "pl-PL": "Składania",
        "pt-BR": "Fugindo",
        "ru-RU": "Сбрасывает",
        "zh-CN": "正在收起",
        "zh-TW": "蓋牌"
    },
    {
        "opy": "Folded",
        "en-US": "Folded",
        "guid": "00000000CAA2",
        "de-DE": "Ausgestiegen",
        "es-ES": "Retirado",
        "es-MX": "Se retiró",
        "fr-FR": "S’est couché",
        "it-IT": "Lasciato",
        "ja-JP": "フォールドされた",
        "pl-PL": "Złożono",
        "pt-BR": "Fugiu",
        "ru-RU": "Сбросил",
        "zh-CN": "已收起",
        "zh-TW": "蓋牌"
    },
    {
        "opy": "Fold",
        "en-US": "Fold",
        "guid": "00000000CAA0",
        "de-DE": "Aussteigen",
        "es-ES": "Retirarse",
        "es-MX": "Retirarse",
        "fr-FR": "Se coucher",
        "it-IT": "Lascia",
        "ja-JP": "フォールドする",
        "pl-PL": "Złóż",
        "pt-BR": "Fugir",
        "ru-RU": "Сбросить",
        "zh-CN": "收起",
        "zh-TW": "蓋牌"
    },
    {
        "opy": "Flying",
        "en-US": "Flying",
        "guid": "00000000C5CB",
        "de-DE": "Flug",
        "es-ES": "Volando",
        "es-MX": "Volando",
        "fr-FR": "Vole",
        "it-IT": "Volo in Corso",
        "ja-JP": "飛んでいる",
        "pl-PL": "Latanie",
        "pt-BR": "Voando",
        "ru-RU": "Летит",
        "zh-CN": "正在飞行",
        "zh-TW": "正在飛行"
    },
    {
        "opy": "Fly",
        "en-US": "Fly",
        "guid": "00000000C5CA",
        "de-DE": "Fliegen",
        "es-ES": "Volar",
        "es-MX": "Volar",
        "fr-FR": "Voler",
        "it-IT": "Vola",
        "ja-JP": "飛ぶ",
        "pl-PL": "Leć",
        "pt-BR": "Voar",
        "ru-RU": "Лететь",
        "zh-CN": "飞行",
        "zh-TW": "飛行"
    },
    {
        "opy": "Flown",
        "en-US": "Flown",
        "guid": "00000000C5CC",
        "de-DE": "Geflogen",
        "es-ES": "Volado",
        "es-MX": "Voló",
        "fr-FR": "Volé",
        "it-IT": "Volato",
        "ja-JP": "飛ばされた",
        "pl-PL": "Poleciano",
        "pt-BR": "Em Voo",
        "ru-RU": "Улетел",
        "zh-CN": "已飞行",
        "zh-TW": "已飛行"
    },
    {
        "opy": "Finishing",
        "en-US": "Finishing",
        "guid": "00000000C124",
        "de-DE": "Ende",
        "es-ES": "Acabando",
        "es-MX": "Terminando",
        "fr-FR": "Fin",
        "it-IT": "Conclusione in Corso",
        "ja-JP": "終了中",
        "pl-PL": "Kończenie",
        "pt-BR": "Concluindo",
        "ru-RU": "Завершает",
        "zh-CN": "正在结束",
        "zh-TW": "正在完成"
    },
    {
        "opy": "Finished",
        "en-US": "Finished",
        "guid": "00000000C125",
        "de-DE": "Beendet",
        "es-ES": "Acabado",
        "es-MX": "Terminado",
        "fr-FR": "Fini",
        "it-IT": "Concluso",
        "ja-JP": "終了した",
        "pl-PL": "Zakończono",
        "pt-BR": "Concluído",
        "ru-RU": "Завершил",
        "zh-CN": "已结束",
        "zh-TW": "已完成"
    },
    {
        "opy": "Finish",
        "en-US": "Finish",
        "guid": "00000000C123",
        "de-DE": "Beenden",
        "es-ES": "Acabar",
        "es-MX": "Terminar",
        "fr-FR": "Finir",
        "it-IT": "Concludi",
        "ja-JP": "終了",
        "pl-PL": "Zakończ",
        "pt-BR": "Concluir",
        "ru-RU": "Завершать",
        "zh-CN": "结束",
        "zh-TW": "完成"
    },
    {
        "opy": "Finding",
        "en-US": "Finding",
        "guid": "00000000C09A",
        "de-DE": "Fund",
        "es-ES": "Buscando",
        "es-MX": "Encontrando",
        "fr-FR": "Découverte",
        "it-IT": "Ritrovamento in Corso",
        "ja-JP": "検索中",
        "pl-PL": "Znajdywanie",
        "pt-BR": "Encontrando",
        "ru-RU": "Находит",
        "zh-CN": "正在寻找",
        "zh-TW": "正在尋找"
    },
    {
        "opy": "Find",
        "en-US": "Find",
        "guid": "00000000C099",
        "de-DE": "Finden",
        "es-ES": "Buscar",
        "es-MX": "Encontrar",
        "fr-FR": "Trouver",
        "it-IT": "Trova",
        "ja-JP": "検索",
        "pl-PL": "Znajdź",
        "pt-BR": "Encontrar",
        "ru-RU": "Найти",
        "zh-CN": "寻找",
        "zh-TW": "尋找"
    },
    {
        "opy": "Final Upgrade",
        "en-US": "Final Upgrade",
        "guid": "00000000C070",
        "de-DE": "Letztes Upgrade",
        "es-ES": "Mejora final",
        "es-MX": "Mejora final",
        "fr-FR": "Amélioration finale",
        "it-IT": "Miglioramento Finale",
        "ja-JP": "最終アップグレード",
        "pl-PL": "Finalne ulepszenie",
        "pt-BR": "Melhoria Final",
        "ru-RU": "Конечное улучшение",
        "zh-CN": "最终升级",
        "zh-TW": "最終升級"
    },
    {
        "opy": "Final Time",
        "en-US": "Final Time",
        "guid": "00000000C06C",
        "de-DE": "Finale Zeit",
        "es-ES": "Tiempo final",
        "es-MX": "Tiempo final",
        "fr-FR": "Temps final",
        "it-IT": "Tempo Finale",
        "ja-JP": "最終時間",
        "pl-PL": "Finalny czas",
        "pt-BR": "Tempo Final",
        "ru-RU": "Конечное время",
        "zh-CN": "最终时间",
        "zh-TW": "最終時間"
    },
    {
        "opy": "Final Targets",
        "en-US": "Final Targets",
        "guid": "00000000C05E",
        "de-DE": "Letzte Ziele",
        "es-ES": "Objetivos finales",
        "es-MX": "Objetivos finales",
        "fr-FR": "Cibles finales",
        "it-IT": "Bersagli Finali",
        "ja-JP": "最終ターゲット",
        "pl-PL": "Finalne cele",
        "pt-BR": "Alvos Finais",
        "ru-RU": "Конечные цели",
        "zh-CN": "最终目标",
        "zh-TW": "最終目標"
    },
    {
        "opy": "Final Target",
        "en-US": "Final Target",
        "guid": "00000000C05D",
        "de-DE": "Letztes Ziel",
        "es-ES": "Objetivo final",
        "es-MX": "Objetivo final",
        "fr-FR": "Cible finale",
        "it-IT": "Bersaglio Finale",
        "ja-JP": "最終ターゲット",
        "pl-PL": "Finalny cel",
        "pt-BR": "Alvo Final",
        "ru-RU": "Конечная цель",
        "zh-CN": "最终目标",
        "zh-TW": "最終目標"
    },
    {
        "opy": "Final Round",
        "en-US": "Final Round",
        "guid": "00000000C069",
        "de-DE": "Letzte Runde",
        "es-ES": "Ronda final",
        "es-MX": "Ronda final",
        "fr-FR": "Manche finale",
        "it-IT": "Round Finale",
        "ja-JP": "最終ラウンド",
        "pl-PL": "Finalna runda",
        "pt-BR": "Rodada Final",
        "ru-RU": "Конечный раунд",
        "zh-CN": "最终回合",
        "zh-TW": "最終回合"
    },
    {
        "opy": "Final Players",
        "en-US": "Final Players",
        "guid": "00000000C05C",
        "de-DE": "Letzte Spieler",
        "es-ES": "Jugadores finales",
        "es-MX": "Jugadores finales",
        "fr-FR": "Joueurs finaux",
        "it-IT": "Giocatori Finali",
        "ja-JP": "最終プレイヤー",
        "pl-PL": "Finalni gracze",
        "pt-BR": "Jogadores Finais",
        "ru-RU": "Конечные игроки",
        "zh-CN": "最终玩家",
        "zh-TW": "最終玩家"
    },
    {
        "opy": "Final Player",
        "en-US": "Final Player",
        "guid": "00000000C05B",
        "de-DE": "Letzter Spieler",
        "es-ES": "Jugador final",
        "es-MX": "Jugador final",
        "fr-FR": "Joueur final",
        "it-IT": "Giocatore Finale",
        "ja-JP": "最終プレイヤー",
        "pl-PL": "Finalny gracz",
        "pt-BR": "Jogador Final",
        "ru-RU": "Конечный игрок",
        "zh-CN": "最终玩家",
        "zh-TW": "最終玩家"
    },
    {
        "opy": "Final Phase",
        "en-US": "Final Phase",
        "guid": "00000000C06E",
        "de-DE": "Letzte Phase",
        "es-ES": "Fase final",
        "es-MX": "Fase final",
        "fr-FR": "Phase finale",
        "it-IT": "Fase Finale",
        "ja-JP": "最終フェーズ",
        "pl-PL": "Finalna faza",
        "pt-BR": "Fase Final",
        "ru-RU": "Конечная фаза",
        "zh-CN": "最终阶段",
        "zh-TW": "最終階段"
    },
    {
        "opy": "Final Objects",
        "en-US": "Final Objects",
        "guid": "00000000C063",
        "de-DE": "Letzte Objekte",
        "es-ES": "Objetos finales",
        "es-MX": "Objetos finales",
        "fr-FR": "Objets finaux",
        "it-IT": "Oggetti Finali",
        "ja-JP": "最終オブジェクト",
        "pl-PL": "Finalne obiekty",
        "pt-BR": "Objetos Finais",
        "ru-RU": "Конечные объекты",
        "zh-CN": "最终对象",
        "zh-TW": "最終目標"
    },
    {
        "opy": "Final Objective",
        "en-US": "Final Objective",
        "guid": "00000000C062",
        "de-DE": "Letzter Zielpunkt",
        "es-ES": "Objetivo final",
        "es-MX": "Objetivo final",
        "fr-FR": "Objectif final",
        "it-IT": "Obiettivo Finale",
        "ja-JP": "最終目標",
        "pl-PL": "Finalne zadanie",
        "pt-BR": "Objetivo Final",
        "ru-RU": "Конечная задача",
        "zh-CN": "最终目标点",
        "zh-TW": "最終目標"
    },
    {
        "opy": "Final Object",
        "en-US": "Final Object",
        "guid": "00000000C061",
        "de-DE": "Letztes Objekt",
        "es-ES": "Objeto final",
        "es-MX": "Objeto final",
        "fr-FR": "Objet final",
        "it-IT": "Oggetto Finale",
        "ja-JP": "最終オブジェクト",
        "pl-PL": "Finalny obiekt",
        "pt-BR": "Objeto Final",
        "ru-RU": "Конечный объект",
        "zh-CN": "最终对象",
        "zh-TW": "最終目標"
    },
    {
        "opy": "Final Mission",
        "en-US": "Final Mission",
        "guid": "00000000C06D",
        "de-DE": "Letzte Mission",
        "es-ES": "Misión final",
        "es-MX": "Misión final",
        "fr-FR": "Mission finale",
        "it-IT": "Missione Finale",
        "ja-JP": "最終任務",
        "pl-PL": "Finalna misja",
        "pt-BR": "Missão Final",
        "ru-RU": "Конечное задание",
        "zh-CN": "最终任务",
        "zh-TW": "最終任務"
    },
    {
        "opy": "Final Level",
        "en-US": "Final Level",
        "guid": "00000000C072",
        "de-DE": "Letzter Level",
        "es-ES": "Nivel final",
        "es-MX": "Nivel final",
        "fr-FR": "Niveau final",
        "it-IT": "Livello Finale",
        "ja-JP": "最終レベル",
        "pl-PL": "Finalny poziom",
        "pt-BR": "Nível Final",
        "ru-RU": "Конечный уровень",
        "zh-CN": "最终等级",
        "zh-TW": "最終等級"
    },
    {
        "opy": "Final Item",
        "en-US": "Final Item",
        "guid": "00000000C064",
        "de-DE": "Letzter Gegenstand",
        "es-ES": "Objeto final",
        "es-MX": "Objeto final",
        "fr-FR": "Article final",
        "it-IT": "Oggetto Finale",
        "ja-JP": "最終アイテム",
        "pl-PL": "Finalny element",
        "pt-BR": "Item Final",
        "ru-RU": "Конечный предмет",
        "zh-CN": "最终物品",
        "zh-TW": "最終物品"
    },
    {
        "opy": "Final Hostages",
        "en-US": "Final Hostages",
        "guid": "00000000C060",
        "de-DE": "Letzte Geiseln",
        "es-ES": "Rehenes finales",
        "es-MX": "Rehenes finales",
        "fr-FR": "Otages finaux",
        "it-IT": "Ostaggi Finali",
        "ja-JP": "最終人質",
        "pl-PL": "Finalni zakładnicy",
        "pt-BR": "Reféns Finais",
        "ru-RU": "Конечные заложники",
        "zh-CN": "最终人质",
        "zh-TW": "最終人質"
    },
    {
        "opy": "Final Hostage",
        "en-US": "Final Hostage",
        "guid": "00000000C05F",
        "de-DE": "Letzte Geisel",
        "es-ES": "Rehén final",
        "es-MX": "Rehén final",
        "fr-FR": "Otage final",
        "it-IT": "Ostaggio Finale",
        "ja-JP": "最終人質",
        "pl-PL": "Finalny zakładnik",
        "pt-BR": "Refém Final",
        "ru-RU": "Конечный заложник",
        "zh-CN": "最终人质",
        "zh-TW": "最終人質"
    },
    {
        "opy": "Final Heroes",
        "en-US": "Final Heroes",
        "guid": "00000000C05A",
        "de-DE": "Letzte Helden",
        "es-ES": "Héroes finales",
        "es-MX": "Héroes finales",
        "fr-FR": "Héros finaux",
        "it-IT": "Eroi Finali",
        "ja-JP": "最終ヒーロー",
        "pl-PL": "Finalni bohaterowie",
        "pt-BR": "Heróis Finais",
        "ru-RU": "Конечные герои",
        "zh-CN": "最终英雄",
        "zh-TW": "最終英雄"
    },
    {
        "opy": "Final Hero",
        "en-US": "Final Hero",
        "guid": "00000000C059",
        "de-DE": "Letzter Held",
        "es-ES": "Héroe final",
        "es-MX": "Héroe final",
        "fr-FR": "Héros final",
        "it-IT": "Eroe Finale",
        "ja-JP": "最終ヒーロー",
        "pl-PL": "Finalny bohater",
        "pt-BR": "Herói Final",
        "ru-RU": "Конечный герой",
        "zh-CN": "最终英雄",
        "zh-TW": "最終英雄"
    },
    {
        "opy": "Final Game",
        "en-US": "Final Game",
        "guid": "00000000C06A",
        "de-DE": "Letztes Spiel",
        "es-ES": "Partida final",
        "es-MX": "Partida final",
        "fr-FR": "Partie finale",
        "it-IT": "Partita Finale",
        "ja-JP": "最終マッチ",
        "pl-PL": "Finalna gra",
        "pt-BR": "Jogo Final",
        "ru-RU": "Конечный матч",
        "zh-CN": "最终游戏",
        "zh-TW": "最終遊戲"
    },
    {
        "opy": "Final Form",
        "en-US": "Final Form",
        "guid": "00000000C071",
        "de-DE": "Letzte Form",
        "es-ES": "Forma final",
        "es-MX": "Forma final",
        "fr-FR": "Forme finale",
        "it-IT": "Forma Finale",
        "ja-JP": "最終フォーム",
        "pl-PL": "Finalna postać",
        "pt-BR": "Forma Final",
        "ru-RU": "Конечная форма",
        "zh-CN": "最终形态",
        "zh-TW": "最終型態"
    },
    {
        "opy": "Final Enemy",
        "en-US": "Final Enemy",
        "guid": "00000000C067",
        "de-DE": "Letzter Gegner",
        "es-ES": "Enemigo final",
        "es-MX": "Enemigo final",
        "fr-FR": "Ennemi final",
        "it-IT": "Nemico Finale",
        "ja-JP": "最終の敵",
        "pl-PL": "Finalny wróg",
        "pt-BR": "Inimigo Final",
        "ru-RU": "Конечный враг",
        "zh-CN": "最终敌人",
        "zh-TW": "最終敵人"
    },
    {
        "opy": "Final Enemies",
        "en-US": "Final Enemies",
        "guid": "00000000C068",
        "de-DE": "Letzte Gegner",
        "es-ES": "Enemigos finales",
        "es-MX": "Enemigos finales",
        "fr-FR": "Ennemis finaux",
        "it-IT": "Nemici Finali",
        "ja-JP": "最終の敵",
        "pl-PL": "Finalni wrogowie",
        "pt-BR": "Inimigos Finais",
        "ru-RU": "Конечные враги",
        "zh-CN": "最终敌人",
        "zh-TW": "最終敵人"
    },
    {
        "opy": "Final Checkpoint",
        "en-US": "Final Checkpoint",
        "guid": "00000000C06F",
        "de-DE": "Letzter Checkpoint",
        "es-ES": "Punto de control final",
        "es-MX": "Punto de control final",
        "fr-FR": "Point de contrôle final",
        "it-IT": "Checkpoint Finale",
        "ja-JP": "最終チェックポイント",
        "pl-PL": "Finalny punkt kontrolny",
        "pt-BR": "Ponto de Verificação Final",
        "ru-RU": "Конечная контрольная точка",
        "zh-CN": "最终检查点",
        "zh-TW": "最終檢查點"
    },
    {
        "guid": "00000000C06B",
        "opy": "Final Attempt",
        "en-US": "Final Attempt",
        "de-DE": "Letzter Versuch",
        "es-ES": "Intento final",
        "es-MX": "Intento final",
        "fr-FR": "Tentative finale",
        "it-IT": "Tentativo Finale",
        "ja-JP": "最終挑戦",
        "pl-PL": "Finalna próba",
        "pt-BR": "Tentativa Final",
        "ru-RU": "Конечная попытка",
        "zh-CN": "最终尝试",
        "zh-TW": "最終機會"
    },
    {
        "opy": "Final Ally",
        "en-US": "Final Ally",
        "guid": "00000000C065",
        "de-DE": "Letzter Verbündeter",
        "es-ES": "Aliado final",
        "es-MX": "Aliado final",
        "fr-FR": "Allié final",
        "it-IT": "Alleato Finale",
        "ja-JP": "最終の味方",
        "pl-PL": "Finalny sojusznik",
        "pt-BR": "Aliado Final",
        "ru-RU": "Конечный союзник",
        "zh-CN": "最终盟友",
        "zh-TW": "最終盟友"
    },
    {
        "opy": "Final Allies",
        "en-US": "Final Allies",
        "guid": "00000000C066",
        "de-DE": "Letzte Verbündete",
        "es-ES": "Aliados finales",
        "es-MX": "Aliados finales",
        "fr-FR": "Alliés finaux",
        "it-IT": "Alleati Finali",
        "ja-JP": "最終の味方",
        "pl-PL": "Finalni sojusznicy",
        "pt-BR": "Aliados Finais",
        "ru-RU": "Конечные союзники",
        "zh-CN": "最终盟友",
        "zh-TW": "最終盟友"
    },
    {
        "guid": "00000000C058",
        "opy": "Final",
        "en-US": "Final",
        "de-DE": "Zuletzt",
        "it-IT": "Finale",
        "ja-JP": "最終",
        "pl-PL": "Finalny",
        "ru-RU": "Конечный",
        "zh-CN": "最终",
        "zh-TW": "最終"
    },
    {
        "opy": "Faults",
        "en-US": "Faults",
        "guid": "00000000C5C0",
        "de-DE": "Schuld",
        "es-ES": "Faltas",
        "es-MX": "Fallas",
        "fr-FR": "Fautes",
        "it-IT": "Colpe",
        "ja-JP": "失敗",
        "pl-PL": "Uskoki",
        "pt-BR": "Faltas",
        "ru-RU": "Дефекты",
        "zh-CN": "失误",
        "zh-TW": "錯誤"
    },
    {
        "opy": "Fault",
        "en-US": "Fault",
        "guid": "00000000C5BF",
        "de-DE": "Fehler",
        "es-ES": "Falta",
        "es-MX": "Falla",
        "fr-FR": "Faute",
        "it-IT": "Colpa",
        "ja-JP": "失敗",
        "pl-PL": "Uskok",
        "pt-BR": "Falta",
        "ru-RU": "Дефект",
        "zh-CN": "失误",
        "zh-TW": "錯誤"
    },
    {
        "opy": "Fastest",
        "en-US": "Fastest",
        "guid": "00000000C154",
        "de-DE": "Am schnellsten",
        "es-ES": "El más rápido",
        "es-MX": "Mucho más rápido",
        "fr-FR": "Le plus rapide",
        "it-IT": "Velocissimo",
        "ja-JP": "最速",
        "pl-PL": "Najszybciej",
        "pt-BR": "O Mais Rápido",
        "ru-RU": "Очень быстро",
        "zh-CN": "最快",
        "zh-TW": "最快"
    },
    {
        "opy": "Faster",
        "en-US": "Faster",
        "guid": "00000000C153",
        "de-DE": "Schneller",
        "es-ES": "Más rápido",
        "es-MX": "Más rápido",
        "fr-FR": "Plus rapide",
        "it-IT": "Più Veloce",
        "ja-JP": "より速い",
        "pl-PL": "Szybciej",
        "pt-BR": "Mais Rápido",
        "ru-RU": "Быстрее",
        "zh-CN": "较快",
        "zh-TW": "較快"
    },
    {
        "opy": "Fast",
        "en-US": "Fast",
        "guid": "00000000C152",
        "de-DE": "Schnell",
        "es-ES": "Rápido",
        "es-MX": "Rápido",
        "fr-FR": "Rapide",
        "it-IT": "Veloce",
        "ja-JP": "速い",
        "pl-PL": "Szybko",
        "pt-BR": "Rápido",
        "ru-RU": "Быстро",
        "zh-CN": "快",
        "zh-TW": "快"
    },
    {
        "opy": "Far",
        "en-US": "Far",
        "guid": "00000000C161",
        "de-DE": "Entfernt",
        "es-ES": "Lejos",
        "es-MX": "Lejos",
        "fr-FR": "Loin",
        "it-IT": "Lontano",
        "ja-JP": "遠く",
        "pl-PL": "Daleko",
        "pt-BR": "Longe",
        "ru-RU": "Далеко",
        "zh-CN": "远",
        "zh-TW": "遠"
    },
    {
        "guid": "00000000C5C8",
        "opy": "Falling",
        "en-US": "Falling",
        "de-DE": "Falle",
        "es-ES": "Cayendo",
        "es-MX": "Cayendo",
        "fr-FR": "Chute",
        "it-IT": "Caduta in Corso",
        "ja-JP": "落下",
        "pl-PL": "Upadanie",
        "pt-BR": "Caindo",
        "ru-RU": "Падает",
        "zh-CN": "正在跌落",
        "zh-TW": "正在墜落"
    },
    {
        "opy": "Fallen",
        "en-US": "Fallen",
        "guid": "00000000C5C9",
        "de-DE": "Gefallen",
        "es-ES": "Caído",
        "es-MX": "Caído",
        "fr-FR": "Tombé",
        "it-IT": "Caduto",
        "ja-JP": "落下した",
        "pl-PL": "Upadnięto",
        "pt-BR": "Caído",
        "ru-RU": "Упал",
        "zh-CN": "已跌落",
        "zh-TW": "已墜落"
    },
    {
        "guid": "00000000C5C7",
        "opy": "Fall",
        "en-US": "Fall",
        "de-DE": "Fallen",
        "es-ES": "Caer",
        "es-MX": "Caer",
        "fr-FR": "Tomber",
        "it-IT": "Cade",
        "ja-JP": "落下する",
        "pl-PL": "Upadnij",
        "pt-BR": "Cair",
        "ru-RU": "Упасть",
        "zh-CN": "跌落",
        "zh-TW": "墜落"
    },
    {
        "opy": "Failure",
        "en-US": "Failure",
        "guid": "00000000C081",
        "de-DE": "Fehlschlag",
        "es-ES": "Fallo",
        "es-MX": "Fracaso",
        "fr-FR": "Échec",
        "it-IT": "Fallimento",
        "ja-JP": "失敗",
        "pl-PL": "Porażka",
        "pt-BR": "Fracasso",
        "ru-RU": "Неудача",
        "zh-CN": "失败",
        "zh-TW": "失敗"
    },
    {
        "opy": "Failing",
        "en-US": "Failing",
        "guid": "00000000C142",
        "de-DE": "Scheitern",
        "es-ES": "Fallando",
        "es-MX": "Fallando",
        "fr-FR": "Échec",
        "it-IT": "Fallimento in Corso",
        "ja-JP": "失敗している",
        "pl-PL": "Zawodzi",
        "pt-BR": "Falhando",
        "ru-RU": "Терпит неудачу",
        "zh-CN": "即将失败",
        "zh-TW": "失敗"
    },
    {
        "guid": "00000000C143",
        "opy": "Failed",
        "en-US": "Failed",
        "de-DE": "Gescheitert",
        "es-ES": "Fallido",
        "es-MX": "Fallido",
        "fr-FR": "Échoué",
        "it-IT": "Fallito",
        "ja-JP": "失敗",
        "pl-PL": "Nieudane",
        "pt-BR": "Falhou",
        "ru-RU": "Потерпел неудачу",
        "zh-CN": "已失败",
        "zh-TW": "失敗"
    },
    {
        "guid": "00000000C881",
        "opy": "Facing",
        "en-US": "Facing",
        "de-DE": "Ausrichtung",
        "es-ES": "Mirando a",
        "es-MX": "Mirando",
        "fr-FR": "Face à",
        "it-IT": "Sguardo in Corso",
        "ja-JP": "向いている",
        "pl-PL": "Skierowanie",
        "pt-BR": "Encarando",
        "ru-RU": "Смотрит в сторону",
        "zh-CN": "正在面向",
        "zh-TW": "面向"
    },
    {
        "opy": "Faces",
        "en-US": "Faces",
        "guid": "00000000C880",
        "de-DE": "Gesicht",
        "es-ES": "Mira a",
        "es-MX": "Mira",
        "fr-FR": "Regarde vers",
        "it-IT": "Guardato",
        "ja-JP": "向く",
        "pl-PL": "Skierowano",
        "pt-BR": "Encara",
        "ru-RU": "Смотрит на",
        "zh-CN": "面向",
        "zh-TW": "面向"
    },
    {
        "opy": "Face",
        "en-US": "Face",
        "guid": "00000000C87F",
        "de-DE": "Ansehen",
        "es-ES": "Mirar a",
        "es-MX": "Mirar",
        "fr-FR": "Regarder vers",
        "it-IT": "Guarda",
        "ja-JP": "向く",
        "pl-PL": "Skieruj",
        "pt-BR": "Encarar",
        "ru-RU": "Смотреть на",
        "zh-CN": "面向",
        "zh-TW": "面向"
    },
    {
        "opy": "Extreme",
        "en-US": "Extreme",
        "guid": "00000000C14A",
        "de-DE": "Extrem",
        "es-ES": "Extremo",
        "es-MX": "Extremo",
        "fr-FR": "Extrême",
        "it-IT": "Estremo",
        "ja-JP": "最高",
        "pl-PL": "Ekstremalnie",
        "pt-BR": "Extremo",
        "ru-RU": "Предельный",
        "zh-CN": "极端",
        "zh-TW": "極致"
    },
    {
        "opy": "Experience",
        "en-US": "Experience",
        "guid": "00000000CA08",
        "de-DE": "Erfahrung",
        "es-ES": "Experiencia",
        "es-MX": "Experiencia",
        "fr-FR": "Expérience",
        "it-IT": "Esperienza",
        "ja-JP": "経験値",
        "pl-PL": "Doświadczenie",
        "pt-BR": "Experiência",
        "ru-RU": "Опыт",
        "zh-CN": "经验值",
        "zh-TW": "經驗值"
    },
    {
        "guid": "00000000C5E8",
        "opy": "Exit",
        "en-US": "Exit",
        "de-DE": "Verlassen",
        "es-ES": "Salida",
        "es-MX": "Salida",
        "fr-FR": "Sortie",
        "it-IT": "Uscita",
        "ja-JP": "終了",
        "pl-PL": "Wyjście",
        "pt-BR": "Saída",
        "ru-RU": "Выход",
        "zh-CN": "离开",
        "zh-TW": "出口"
    },
    {
        "guid": "00000000C149",
        "opy": "Excellent",
        "en-US": "Excellent",
        "de-DE": "Ausgezeichnet",
        "es-ES": "Excelente",
        "es-MX": "Excelente",
        "it-IT": "Eccellente",
        "ja-JP": "素晴らしい",
        "pl-PL": "Doskonale",
        "pt-BR": "Excelente",
        "ru-RU": "Отлично",
        "zh-CN": "优秀",
        "zh-TW": "優異"
    },
    {
        "opy": "Escorting",
        "en-US": "Escorting",
        "guid": "00000000C09D",
        "de-DE": "Eskorte",
        "es-ES": "Escoltando",
        "es-MX": "Escoltando",
        "fr-FR": "Escorte",
        "it-IT": "Trasporto in Corso",
        "ja-JP": "エスコート中",
        "pl-PL": "Eskortowanie",
        "pt-BR": "Escoltando",
        "ru-RU": "Сопровождает",
        "zh-CN": "正在护送",
        "zh-TW": "正在護送"
    },
    {
        "opy": "Escorted",
        "en-US": "Escorted",
        "guid": "00000000C09E",
        "de-DE": "Eskortiert",
        "es-ES": "Escoltado",
        "es-MX": "Escoltado",
        "fr-FR": "Escorté",
        "it-IT": "Trasportato",
        "ja-JP": "エスコートした",
        "pl-PL": "Eskortowano",
        "pt-BR": "Escoltado",
        "ru-RU": "Сопроводил",
        "zh-CN": "已护送",
        "zh-TW": "護送"
    },
    {
        "guid": "00000000C09B",
        "opy": "Escort",
        "en-US": "Escort",
        "de-DE": "Eskortieren",
        "es-ES": "Escoltar",
        "es-MX": "Escoltar",
        "fr-FR": "Escorter",
        "it-IT": "Trasporta",
        "ja-JP": "エスコート",
        "pl-PL": "Eskortuj",
        "pt-BR": "Escolta",
        "ru-RU": "Сопровождать",
        "zh-CN": "护送",
        "zh-TW": "護送"
    },
    {
        "opy": "Entrance",
        "en-US": "Entrance",
        "guid": "00000000C5E9",
        "de-DE": "Eingang",
        "es-ES": "Entrada",
        "es-MX": "Entrada",
        "fr-FR": "Entrée",
        "it-IT": "Entrata",
        "ja-JP": "入口",
        "pl-PL": "Wejście",
        "pt-BR": "Entrada",
        "ru-RU": "Вход",
        "zh-CN": "进入",
        "zh-TW": "入口"
    },
    {
        "opy": "Enemy",
        "en-US": "Enemy",
        "guid": "00000000BFD3",
        "de-DE": "Gegner",
        "es-ES": "Enemigo",
        "es-MX": "Enemigo",
        "fr-FR": "Ennemi",
        "it-IT": "Nemico",
        "ja-JP": "敵",
        "pl-PL": "Wróg",
        "pt-BR": "Inimigo",
        "ru-RU": "Враг",
        "zh-CN": "敌人",
        "zh-TW": "敵人"
    },
    {
        "guid": "00000000BFD2",
        "opy": "Enemies",
        "en-US": "Enemies",
        "de-DE": "Feinde",
        "es-ES": "Enemigos",
        "es-MX": "Enemigos",
        "fr-FR": "Ennemis",
        "it-IT": "Nemici",
        "ja-JP": "敵",
        "pl-PL": "Wrogowie",
        "pt-BR": "Inimigos",
        "ru-RU": "Враги",
        "zh-CN": "敌人",
        "zh-TW": "敵人"
    },
    {
        "guid": "00000000C295",
        "opy": "Eliminations",
        "en-US": "Eliminations",
        "de-DE": "Eliminierungen",
        "es-ES": "Eliminaciones",
        "es-MX": "Eliminaciones",
        "fr-FR": "Éliminations",
        "it-IT": "Eliminazioni",
        "ja-JP": "排除",
        "pl-PL": "Likwidacje",
        "pt-BR": "Eliminações",
        "ru-RU": "Убийства",
        "zh-CN": "消灭",
        "zh-TW": "擊殺"
    },
    {
        "guid": "00000000C294",
        "opy": "Elimination",
        "en-US": "Elimination",
        "de-DE": "Eliminierung",
        "es-ES": "Eliminación",
        "es-MX": "Eliminación",
        "fr-FR": "Élimination",
        "it-IT": "Eliminazione",
        "ja-JP": "排除",
        "pl-PL": "Likwidacja",
        "pt-BR": "Eliminação",
        "ru-RU": "Убийство",
        "zh-CN": "消灭",
        "zh-TW": "擊殺"
    },
    {
        "opy": "Eliminating",
        "en-US": "Eliminating",
        "guid": "00000000C2A0",
        "de-DE": "Ausschalten",
        "es-ES": "Eliminando",
        "es-MX": "Eliminando",
        "fr-FR": "Élimination",
        "it-IT": "Eliminazione in Corso",
        "ja-JP": "排除中",
        "pl-PL": "Eliminowanie",
        "pt-BR": "Eliminando",
        "ru-RU": "Убивает",
        "zh-CN": "正在消灭",
        "zh-TW": "正在擊殺"
    },
    {
        "guid": "00000000C2A1",
        "opy": "Eliminated",
        "en-US": "Eliminated",
        "de-DE": "Eliminiert",
        "es-ES": "Eliminado",
        "es-MX": "Eliminado",
        "fr-FR": "Éliminé",
        "it-IT": "Eliminato",
        "ja-JP": "排除した",
        "pl-PL": "Wyeliminowano",
        "pt-BR": "Eliminado",
        "ru-RU": "Убит",
        "zh-CN": "已消灭",
        "zh-TW": "遭到擊殺"
    },
    {
        "opy": "Eliminate",
        "en-US": "Eliminate",
        "guid": "00000000C29F",
        "de-DE": "Eliminieren",
        "es-ES": "Eliminar",
        "es-MX": "Eliminar",
        "fr-FR": "Éliminer",
        "it-IT": "Elimina",
        "ja-JP": "排除",
        "pl-PL": "Eliminuj",
        "pt-BR": "Eliminar",
        "ru-RU": "Убить",
        "zh-CN": "消灭",
        "zh-TW": "擊殺"
    },
    {
        "opy": "East",
        "en-US": "East",
        "guid": "00000000C170",
        "de-DE": "Osten",
        "es-ES": "Este",
        "es-MX": "Este",
        "fr-FR": "Est",
        "it-IT": "Est",
        "ja-JP": "東",
        "pl-PL": "Wschód",
        "pt-BR": "Leste",
        "ru-RU": "Восток",
        "zh-CN": "东",
        "zh-TW": "東"
    },
    {
        "opy": "Dying",
        "en-US": "Dying",
        "guid": "00000000C11B",
        "de-DE": "Stirb",
        "es-ES": "Muriendo",
        "es-MX": "Muriéndose",
        "fr-FR": "Mort",
        "it-IT": "Morte in Corso",
        "ja-JP": "死亡中",
        "pl-PL": "Umiera",
        "pt-BR": "Morrendo",
        "ru-RU": "Умирает",
        "zh-CN": "正在死亡",
        "zh-TW": "正在死亡"
    },
    {
        "opy": "Dropping",
        "en-US": "Dropping",
        "guid": "00000000C5C5",
        "de-DE": "Fall",
        "es-ES": "Soltando",
        "es-MX": "Soltando",
        "fr-FR": "Largage",
        "it-IT": "Rilascio in Corso",
        "ja-JP": "落としている",
        "pl-PL": "Upuszczanie",
        "pt-BR": "Largando",
        "ru-RU": "Бросает",
        "zh-CN": "正在掉落",
        "zh-TW": "正在掉落"
    },
    {
        "guid": "00000000C5C6",
        "opy": "Dropped",
        "en-US": "Dropped",
        "de-DE": "Fallen gelassen",
        "es-ES": "Soltado",
        "es-MX": "Soltado",
        "fr-FR": "Largué",
        "it-IT": "Lasciato",
        "ja-JP": "落とされた",
        "pl-PL": "Upuszczono",
        "pt-BR": "Largado",
        "ru-RU": "Бросил",
        "zh-CN": "已掉落",
        "zh-TW": "已掉落"
    },
    {
        "opy": "Drop",
        "en-US": "Drop",
        "guid": "00000000C5C4",
        "de-DE": "Fallen lassen",
        "es-ES": "Soltar",
        "es-MX": "Soltar",
        "fr-FR": "Larguer",
        "it-IT": "Lascia",
        "ja-JP": "落とす",
        "pl-PL": "Upuść",
        "pt-BR": "Largar",
        "ru-RU": "Бросить",
        "zh-CN": "掉落",
        "zh-TW": "掉落"
    },
    {
        "guid": "00000000CA9F",
        "opy": "Drawn",
        "en-US": "Drawn",
        "de-DE": "Gezogen",
        "es-ES": "Robado",
        "es-MX": "Revelado",
        "fr-FR": "Pioché",
        "it-IT": "Pescato",
        "ja-JP": "ドローした",
        "pl-PL": "Dobyto",
        "pt-BR": "Comprada",
        "ru-RU": "Взял",
        "zh-CN": "已抽牌",
        "zh-TW": "抽牌"
    },
    {
        "opy": "Drawing",
        "en-US": "Drawing",
        "guid": "00000000CA9E",
        "de-DE": "Ziehen",
        "es-ES": "Robando",
        "es-MX": "Revelando",
        "fr-FR": "Pioche",
        "it-IT": "Pescare",
        "ja-JP": "ドローしている",
        "pl-PL": "Dobywanie",
        "pt-BR": "Comprando",
        "ru-RU": "Берет",
        "zh-CN": "正在抽牌",
        "zh-TW": "抽牌"
    },
    {
        "guid": "00000000C07B",
        "opy": "Draw",
        "en-US": "Draw",
        "de-DE": "Unentschieden",
        "es-ES": "Empate",
        "es-MX": "Empate",
        "fr-FR": "Match nul",
        "it-IT": "Pareggio",
        "ja-JP": "引き分け",
        "pl-PL": "Remis",
        "pt-BR": "Empate",
        "ru-RU": "Ничья",
        "zh-CN": "平局",
        "zh-TW": "平手"
    },
    {
        "opy": "Downloading",
        "en-US": "Downloading",
        "guid": "00000000C0E5",
        "de-DE": "Download",
        "es-ES": "Descargando",
        "es-MX": "Descargando",
        "fr-FR": "Téléchargement",
        "it-IT": "Download in Corso",
        "ja-JP": "ダウンロード中",
        "pl-PL": "Pobieranie",
        "pt-BR": "Baixando",
        "ru-RU": "Загружает",
        "zh-CN": "正在下载",
        "zh-TW": "正在下載"
    },
    {
        "opy": "Downloaded",
        "en-US": "Downloaded",
        "guid": "00000000C0E6",
        "de-DE": "Heruntergeladen",
        "es-ES": "Descargado",
        "es-MX": "Descargado",
        "fr-FR": "Téléchargé",
        "it-IT": "Download Effettuato",
        "ja-JP": "ダウンロードした",
        "pl-PL": "Pobrano",
        "pt-BR": "Baixado",
        "ru-RU": "Загрузил",
        "zh-CN": "已下载",
        "zh-TW": "已下載"
    },
    {
        "guid": "00000000C0E4",
        "opy": "Download",
        "en-US": "Download",
        "de-DE": "Herunterladen",
        "es-ES": "Descargar",
        "es-MX": "Descargar",
        "fr-FR": "Télécharger",
        "ja-JP": "ダウンロード",
        "pl-PL": "Pobierz",
        "pt-BR": "Baixar",
        "ru-RU": "Загрузить",
        "zh-CN": "下载",
        "zh-TW": "下載"
    },
    {
        "guid": "00000000C16A",
        "opy": "Down",
        "en-US": "Down",
        "de-DE": "Nach unten",
        "es-ES": "Abajo",
        "es-MX": "Abajo",
        "fr-FR": "Bas",
        "it-IT": "Giù",
        "ja-JP": "下",
        "pl-PL": "Dół",
        "pt-BR": "Baixo",
        "ru-RU": "Вниз",
        "zh-CN": "下",
        "zh-TW": "下"
    },
    {
        "opy": "Domes",
        "en-US": "Domes",
        "guid": "00000000C285",
        "de-DE": "Kuppeln",
        "es-ES": "Cúpula",
        "es-MX": "Domos",
        "fr-FR": "Dômes",
        "it-IT": "Cupole",
        "ja-JP": "ドーム",
        "pl-PL": "Kopuły",
        "pt-BR": "Domos",
        "ru-RU": "Купола",
        "zh-CN": "罩子",
        "zh-TW": "穹頂"
    },
    {
        "opy": "Dome",
        "en-US": "Dome",
        "guid": "00000000C287",
        "de-DE": "Kuppel",
        "es-ES": "Cúpula",
        "es-MX": "Domo",
        "fr-FR": "Dôme",
        "it-IT": "Cupola",
        "ja-JP": "ドーム",
        "pl-PL": "Kopuła",
        "pt-BR": "Domo",
        "ru-RU": "Купол",
        "zh-CN": "罩子",
        "zh-TW": "穹頂"
    },
    {
        "opy": "Dodging",
        "en-US": "Dodging",
        "guid": "00000000C0B8",
        "de-DE": "Ausweichen",
        "es-ES": "Esquivando",
        "es-MX": "Esquivando",
        "fr-FR": "Esquive",
        "it-IT": "Schivata in Corso",
        "ja-JP": "回避中",
        "pl-PL": "Uskakiwanie",
        "pt-BR": "Esquivando",
        "ru-RU": "Уклоняется",
        "zh-CN": "正在躲闪",
        "zh-TW": "正在閃躲"
    },
    {
        "opy": "Dodged",
        "en-US": "Dodged",
        "guid": "00000000C0B9",
        "de-DE": "Ausgewichen",
        "es-ES": "Esquivado",
        "es-MX": "Esquivado",
        "fr-FR": "Esquivé",
        "it-IT": "Schivato",
        "ja-JP": "回避した",
        "pl-PL": "Uskoczono",
        "pt-BR": "Esquivado",
        "ru-RU": "Уклонился",
        "zh-CN": "已躲闪",
        "zh-TW": "遭到閃躲"
    },
    {
        "opy": "Dodge",
        "en-US": "Dodge",
        "guid": "00000000C0B7",
        "de-DE": "Ausweichen",
        "es-ES": "Esquivar",
        "es-MX": "Esquivar",
        "fr-FR": "Esquiver",
        "it-IT": "Schiva",
        "ja-JP": "回避",
        "pl-PL": "Uskocz",
        "pt-BR": "Esquivar",
        "ru-RU": "Уклониться",
        "zh-CN": "躲闪",
        "zh-TW": "閃躲"
    },
    {
        "opy": "Distances",
        "en-US": "Distances",
        "guid": "00000000C002",
        "de-DE": "Distanzen",
        "es-ES": "Distancias",
        "es-MX": "Distancias",
        "it-IT": "Distanze",
        "ja-JP": "距離",
        "pl-PL": "Odległości",
        "pt-BR": "Distâncias",
        "ru-RU": "Расстояния",
        "zh-CN": "距离",
        "zh-TW": "距離"
    },
    {
        "opy": "Distance",
        "en-US": "Distance",
        "guid": "00000000C003",
        "de-DE": "Distanz",
        "es-ES": "Distancia",
        "es-MX": "Distancia",
        "it-IT": "Distanza",
        "ja-JP": "距離",
        "pl-PL": "Odległość",
        "pt-BR": "Distância",
        "ru-RU": "Расстояние",
        "zh-CN": "距离",
        "zh-TW": "距離"
    },
    {
        "opy": "Disconnecting",
        "en-US": "Disconnecting",
        "guid": "00000000C0FD",
        "de-DE": "Unterbrechung",
        "es-ES": "Desconectando",
        "es-MX": "Desconectándose",
        "fr-FR": "Déconnexion",
        "it-IT": "Disconnessione in Corso",
        "ja-JP": "接続を解除中",
        "pl-PL": "Rozłączanie",
        "pt-BR": "Desconectando",
        "ru-RU": "Отключается",
        "zh-CN": "正在断开",
        "zh-TW": "正在中斷連接"
    },
    {
        "guid": "00000000C0FE",
        "opy": "Disconnected",
        "en-US": "Disconnected",
        "de-DE": "Unterbrochen",
        "es-ES": "Desconectado",
        "es-MX": "Desconectado",
        "fr-FR": "Déconnecté",
        "it-IT": "Disconnesso",
        "ja-JP": "接続を解除した",
        "pl-PL": "Rozłączono",
        "pt-BR": "Desconectado",
        "ru-RU": "Отключен",
        "zh-CN": "已断开",
        "zh-TW": "中斷連接"
    },
    {
        "opy": "Disconnect",
        "en-US": "Disconnect",
        "guid": "00000000C0FC",
        "de-DE": "Unterbrechen",
        "es-ES": "Desconectar",
        "es-MX": "Desconectar",
        "fr-FR": "Déconnecter",
        "it-IT": "Disconnetti",
        "ja-JP": "接続を解除",
        "pl-PL": "Rozłącz",
        "pt-BR": "Desconectar",
        "ru-RU": "Отключиться",
        "zh-CN": "断开",
        "zh-TW": "中斷連接"
    },
    {
        "opy": "Discarding",
        "en-US": "Discarding",
        "guid": "00000000CA9C",
        "de-DE": "Verwerfen",
        "es-ES": "Descartando",
        "es-MX": "Descartando",
        "fr-FR": "Défausse",
        "it-IT": "Scarto in Corso",
        "ja-JP": "破棄している",
        "pl-PL": "Odrzucanie",
        "pt-BR": "Descartando",
        "ru-RU": "Сбрасывает",
        "zh-CN": "正在弃牌",
        "zh-TW": "棄牌"
    },
    {
        "opy": "Discarded",
        "en-US": "Discarded",
        "guid": "00000000CA9D",
        "de-DE": "Abgeworfen",
        "es-ES": "Descartado",
        "es-MX": "Descartado",
        "fr-FR": "Défaussé",
        "it-IT": "Scartato",
        "ja-JP": "破棄された",
        "pl-PL": "Odrzucono",
        "pt-BR": "Descartada",
        "ru-RU": "Сбросил",
        "zh-CN": "已弃牌",
        "zh-TW": "棄牌"
    },
    {
        "guid": "00000000CA9B",
        "opy": "Discard",
        "en-US": "Discard",
        "de-DE": "Abwerfen",
        "es-ES": "Descartar",
        "es-MX": "Descartar",
        "fr-FR": "Défausser",
        "it-IT": "Scarta",
        "ja-JP": "破棄",
        "pl-PL": "Odrzuć",
        "pt-BR": "Descartar",
        "ru-RU": "Сбросить",
        "zh-CN": "弃牌",
        "zh-TW": "棄牌"
    },
    {
        "opy": "Die",
        "en-US": "Die",
        "guid": "00000000C11A",
        "de-DE": "Sterben",
        "es-ES": "Morir",
        "es-MX": "Morir",
        "fr-FR": "Mourir",
        "it-IT": "Muori",
        "ja-JP": "死亡",
        "pl-PL": "Zgiń",
        "pt-BR": "Morrer",
        "ru-RU": "Умереть",
        "zh-CN": "死亡",
        "zh-TW": "死亡"
    },
    {
        "opy": "Diamonds",
        "en-US": "Diamonds",
        "guid": "00000000CA9A",
        "de-DE": "Karo",
        "es-ES": "Diamantes",
        "es-MX": "Diamantes",
        "fr-FR": "Carreau",
        "it-IT": "Quadri",
        "ja-JP": "ダイヤモンド",
        "pl-PL": "Karo",
        "pt-BR": "Ouros",
        "ru-RU": "Бубны",
        "zh-CN": "方块",
        "zh-TW": "方塊"
    },
    {
        "guid": "00000000CAC2",
        "opy": "Diamond",
        "en-US": "Diamond",
        "de-DE": "Karo",
        "es-ES": "Diamante",
        "es-MX": "Diamante",
        "fr-FR": "Carreau",
        "it-IT": "Quadro",
        "ja-JP": "ダイヤモンド",
        "pl-PL": "Karo",
        "pt-BR": "Ouros",
        "ru-RU": "Бубны",
        "zh-CN": "方块",
        "zh-TW": "方塊"
    },
    {
        "opy": "Dexterity",
        "en-US": "Dexterity",
        "guid": "00000000C98B",
        "de-DE": "Geschicklichkeit",
        "es-ES": "Destreza",
        "es-MX": "Destreza",
        "fr-FR": "Dextérité",
        "it-IT": "Destrezza",
        "ja-JP": "敏捷性",
        "pl-PL": "Zręczność",
        "pt-BR": "Destreza",
        "ru-RU": "Ловкость",
        "zh-CN": "灵巧",
        "zh-TW": "靈敏"
    },
    {
        "opy": "Detecting",
        "en-US": "Detecting",
        "guid": "00000000C86F",
        "de-DE": "Entdeckung",
        "es-ES": "Detectando",
        "es-MX": "Detectando",
        "fr-FR": "Détection",
        "it-IT": "Individuazione in Corso",
        "ja-JP": "発見している",
        "pl-PL": "Wykrywanie",
        "pt-BR": "Detectando",
        "ru-RU": "Обнаружение",
        "zh-CN": "正在探测",
        "zh-TW": "正在偵測"
    },
    {
        "guid": "00000000C86D",
        "opy": "Detected",
        "en-US": "Detected",
        "de-DE": "Entdeckt",
        "es-ES": "Detectado",
        "es-MX": "Detectado",
        "fr-FR": "Détecté",
        "it-IT": "Individuato",
        "ja-JP": "発見された",
        "pl-PL": "Wykryto",
        "pt-BR": "Detectado",
        "ru-RU": "Обнаружили",
        "zh-CN": "被探测",
        "zh-TW": "遭到偵測"
    },
    {
        "opy": "Detect",
        "en-US": "Detect",
        "guid": "00000000C86E",
        "de-DE": "Entdecken",
        "es-ES": "Detectar",
        "es-MX": "Detectar",
        "fr-FR": "Détecter",
        "it-IT": "Individua",
        "ja-JP": "発見する",
        "pl-PL": "Wykryj",
        "pt-BR": "Detectar",
        "ru-RU": "Обнаружить",
        "zh-CN": "探测",
        "zh-TW": "偵測"
    },
    {
        "opy": "Destroying",
        "en-US": "Destroying",
        "guid": "00000000C0EE",
        "de-DE": "Zerstörung",
        "es-ES": "Destruyendo",
        "es-MX": "Destruyendo",
        "fr-FR": "Destruction",
        "it-IT": "Distruzione in Corso",
        "ja-JP": "破壊中",
        "pl-PL": "Niszczenie",
        "pt-BR": "Destruindo",
        "ru-RU": "Уничтожает",
        "zh-CN": "正在摧毁",
        "zh-TW": "正在摧毀"
    },
    {
        "opy": "Destroyed",
        "en-US": "Destroyed",
        "guid": "00000000C0EF",
        "de-DE": "Zerstört",
        "es-ES": "Destruido",
        "es-MX": "Destruido",
        "fr-FR": "Détruit",
        "it-IT": "Distrutto",
        "ja-JP": "破壊した",
        "pl-PL": "Zniszczono",
        "pt-BR": "Destruído",
        "ru-RU": "Уничтожен",
        "zh-CN": "已摧毁",
        "zh-TW": "遭到摧毀"
    },
    {
        "opy": "Destroy",
        "en-US": "Destroy",
        "guid": "00000000C0ED",
        "de-DE": "Zerstören",
        "es-ES": "Destruir",
        "es-MX": "Destruir",
        "fr-FR": "Détruire",
        "it-IT": "Distruggi",
        "ja-JP": "破壊",
        "pl-PL": "Zniszcz",
        "pt-BR": "Destruir",
        "ru-RU": "Уничтожить",
        "zh-CN": "摧毁",
        "zh-TW": "摧毀"
    },
    {
        "opy": "Destabilizing",
        "en-US": "Destabilizing",
        "guid": "00000000C0F4",
        "de-DE": "Destabilisierung",
        "es-ES": "Desestabilizando",
        "es-MX": "Desestabilizando",
        "fr-FR": "Déstabilisation",
        "it-IT": "Destabilizzazione in Corso",
        "ja-JP": "不安定化している",
        "pl-PL": "Destablizowanie",
        "pt-BR": "Desestabilizando",
        "ru-RU": "Дестабилизирует",
        "zh-CN": "正在干扰",
        "zh-TW": "正在動搖"
    },
    {
        "opy": "Destabilized",
        "en-US": "Destabilized",
        "guid": "00000000C0F6",
        "de-DE": "Destabilisiert",
        "es-ES": "Desestabilizado",
        "es-MX": "Desestabilizado",
        "fr-FR": "Déstabilisé",
        "it-IT": "Destabilizzato",
        "ja-JP": "不安定化した",
        "pl-PL": "Zdestabilizowano",
        "pt-BR": "Desestabilizado",
        "ru-RU": "Дестабилизировал",
        "zh-CN": "已干扰",
        "zh-TW": "受到動搖"
    },
    {
        "opy": "Destabilize",
        "en-US": "Destabilize",
        "guid": "00000000C0F3",
        "de-DE": "Destabilisieren",
        "es-ES": "Desestabilizar",
        "es-MX": "Desestabilizar",
        "fr-FR": "Déstabiliser",
        "it-IT": "Destabilizza",
        "ja-JP": "不安定化",
        "pl-PL": "Destabilizuj",
        "pt-BR": "Desestabilizar",
        "ru-RU": "Дестабилизировать",
        "zh-CN": "干扰",
        "zh-TW": "動搖"
    },
    {
        "opy": "Depth",
        "en-US": "Depth",
        "guid": "00000000C86C",
        "de-DE": "Tiefe",
        "es-ES": "Profundidad",
        "es-MX": "Profundidad",
        "fr-FR": "Profondeur",
        "it-IT": "Profondità",
        "ja-JP": "深さ",
        "pl-PL": "Głębokość",
        "pt-BR": "Profundidade",
        "ru-RU": "Глубина",
        "zh-CN": "深度",
        "zh-TW": "深度"
    },
    {
        "opy": "Delivering",
        "en-US": "Delivering",
        "guid": "00000000C097",
        "de-DE": "Lieferung",
        "es-ES": "Entregando",
        "es-MX": "Entregando",
        "fr-FR": "Livraison",
        "it-IT": "Consegna in Corso",
        "ja-JP": "移送中",
        "pl-PL": "Dostarczanie",
        "pt-BR": "Entregando",
        "ru-RU": "Доставляет",
        "zh-CN": "正在送达",
        "zh-TW": "正在抵達"
    },
    {
        "opy": "Delivered",
        "en-US": "Delivered",
        "guid": "00000000C098",
        "de-DE": "Geliefert",
        "es-ES": "Entregado",
        "es-MX": "Entregado",
        "fr-FR": "Livré",
        "it-IT": "Consegnato",
        "ja-JP": "移送した",
        "pl-PL": "Dostarczono",
        "pt-BR": "Entregue",
        "ru-RU": "Доставил",
        "zh-CN": "已送达",
        "zh-TW": "已抵達"
    },
    {
        "opy": "Deliver",
        "en-US": "Deliver",
        "guid": "00000000C096",
        "de-DE": "Liefern",
        "es-ES": "Entregar",
        "es-MX": "Entregar",
        "fr-FR": "Livrer",
        "it-IT": "Consegna",
        "ja-JP": "移送",
        "pl-PL": "Dostarcz",
        "pt-BR": "Entregar",
        "ru-RU": "Доставить",
        "zh-CN": "送达",
        "zh-TW": "抵達"
    },
    {
        "guid": "00000000C985",
        "opy": "Defense",
        "en-US": "Defense",
        "de-DE": "Verteidigung",
        "es-ES": "Defensa",
        "es-MX": "Defensa",
        "fr-FR": "Défense",
        "it-IT": "Difesa",
        "ja-JP": "ディフェンス",
        "pl-PL": "Obrona",
        "pt-BR": "Defesa",
        "ru-RU": "Защита",
        "zh-CN": "防御",
        "zh-TW": "防禦"
    },
    {
        "opy": "Defending",
        "en-US": "Defending",
        "guid": "00000000C0AC",
        "de-DE": "Beschützen",
        "es-ES": "Defendiendo",
        "es-MX": "Defendiendo",
        "fr-FR": "Défense",
        "it-IT": "Difesa in Corso",
        "ja-JP": "防衛中",
        "pl-PL": "Bronienie",
        "pt-BR": "Defendendo",
        "ru-RU": "Обороняет",
        "zh-CN": "正在防守",
        "zh-TW": "正在防守"
    },
    {
        "opy": "Defended",
        "en-US": "Defended",
        "guid": "00000000C0AD",
        "de-DE": "Verteidigt",
        "es-ES": "Defendido",
        "es-MX": "Defendido",
        "fr-FR": "Défendu",
        "it-IT": "Difeso",
        "ja-JP": "防衛した",
        "pl-PL": "Obroniono",
        "pt-BR": "Defendido",
        "ru-RU": "Оборонил",
        "zh-CN": "已防守",
        "zh-TW": "受到防守"
    },
    {
        "guid": "00000000C0AB",
        "opy": "Defend",
        "en-US": "Defend",
        "de-DE": "Verteidigen",
        "es-ES": "Defender",
        "es-MX": "Defender",
        "fr-FR": "Défendre",
        "it-IT": "Difendi",
        "ja-JP": "防衛",
        "pl-PL": "Obroń",
        "pt-BR": "Defender",
        "ru-RU": "Оборонять",
        "zh-CN": "防守",
        "zh-TW": "防守"
    },
    {
        "guid": "00000000C083",
        "opy": "Defeat",
        "en-US": "Defeat",
        "de-DE": "Niederlage",
        "es-ES": "Derrota",
        "es-MX": "Derrota",
        "fr-FR": "Défaite",
        "it-IT": "Sconfitta",
        "ja-JP": "敗北",
        "pl-PL": "Przegrana",
        "pt-BR": "Derrota",
        "ru-RU": "Поражение",
        "zh-CN": "战败",
        "zh-TW": "落敗"
    },
    {
        "opy": "Decks",
        "en-US": "Decks",
        "guid": "00000000CA99",
        "es-ES": "Mazos",
        "es-MX": "Barajas",
        "fr-FR": "Tas",
        "it-IT": "Mazzi",
        "ja-JP": "デッキ",
        "pl-PL": "Talie",
        "pt-BR": "Baralhos",
        "ru-RU": "Колоды",
        "zh-CN": "牌堆",
        "zh-TW": "牌庫"
    },
    {
        "guid": "00000000CA98",
        "opy": "Deck",
        "en-US": "Deck",
        "es-ES": "Mazo",
        "es-MX": "Baraja",
        "fr-FR": "Tas",
        "it-IT": "Mazzo",
        "ja-JP": "デッキ",
        "pl-PL": "Talia",
        "pt-BR": "Baralho",
        "ru-RU": "Колода",
        "zh-CN": "牌堆",
        "zh-TW": "牌庫"
    },
    {
        "opy": "Dealt",
        "en-US": "Dealt",
        "guid": "00000000CA97",
        "de-DE": "Ausgeteilt",
        "es-ES": "Repartido",
        "es-MX": "Repartido",
        "fr-FR": "Distribué",
        "it-IT": "Distribuito",
        "ja-JP": "与えた",
        "pl-PL": "Rozdano",
        "pt-BR": "Dada",
        "ru-RU": "Нанес",
        "zh-CN": "已发牌",
        "zh-TW": "發牌"
    },
    {
        "opy": "Dealing",
        "en-US": "Dealing",
        "guid": "00000000CA96",
        "de-DE": "Geben",
        "es-ES": "Repartiendo",
        "es-MX": "Repartiendo",
        "fr-FR": "Distribution",
        "it-IT": "Distribuzione in Corso",
        "ja-JP": "ディールする",
        "pl-PL": "Rozdanie",
        "pt-BR": "Dando",
        "ru-RU": "Наносит",
        "zh-CN": "正在发牌",
        "zh-TW": "發牌"
    },
    {
        "opy": "Deal",
        "en-US": "Deal",
        "guid": "00000000CA95",
        "de-DE": "Austeilen",
        "es-ES": "Repartir",
        "es-MX": "Repartir",
        "fr-FR": "Distribuer",
        "it-IT": "Distribuisci",
        "ja-JP": "ディール",
        "pl-PL": "Rozdaj",
        "pt-BR": "Dar",
        "ru-RU": "Нанести",
        "zh-CN": "发牌",
        "zh-TW": "發牌"
    },
    {
        "opy": "Dead",
        "en-US": "Dead",
        "guid": "00000000C11C",
        "de-DE": "Tot",
        "es-ES": "Muerto",
        "es-MX": "Muerto",
        "fr-FR": "Mort",
        "it-IT": "Morto",
        "ja-JP": "死亡した",
        "pl-PL": "Martwy",
        "pt-BR": "Morto",
        "ru-RU": "Мертвый",
        "zh-CN": "已死亡",
        "zh-TW": "死亡"
    },
    {
        "opy": "Danger",
        "en-US": "Danger",
        "guid": "00000000C15A",
        "de-DE": "Gefahr",
        "es-ES": "Peligro",
        "es-MX": "Peligro",
        "it-IT": "Pericolo",
        "ja-JP": "危険",
        "pl-PL": "Zagrożenie",
        "pt-BR": "Perigo",
        "ru-RU": "Опасность",
        "zh-CN": "危险",
        "zh-TW": "危險"
    },
    {
        "opy": "Damaging",
        "en-US": "Damaging",
        "guid": "00000000C5D5",
        "de-DE": "Beschädigen",
        "es-ES": "Dañando",
        "es-MX": "Infligiendo daño",
        "fr-FR": "Inflige des dégâts",
        "it-IT": "Danneggiamento in Corso",
        "ja-JP": "ダメージを与えている",
        "pl-PL": "Ranienie",
        "pt-BR": "Danificando",
        "ru-RU": "Наносит урон",
        "zh-CN": "正在伤害",
        "zh-TW": "正在攻擊"
    },
    {
        "opy": "Damaged",
        "en-US": "Damaged",
        "guid": "00000000C5D6",
        "de-DE": "Beschädigt",
        "es-ES": "Dañado",
        "es-MX": "Dañado",
        "fr-FR": "Endommagé",
        "it-IT": "Danneggiato",
        "ja-JP": "ダメージを受けた",
        "pl-PL": "Zraniono",
        "pt-BR": "Danificado",
        "ru-RU": "Нанес урон",
        "zh-CN": "已伤害",
        "zh-TW": "受到攻擊"
    },
    {
        "guid": "00000000C5D4",
        "opy": "Damage",
        "en-US": "Damage",
        "de-DE": "Schaden",
        "es-ES": "Dañar",
        "es-MX": "Infligir daño",
        "fr-FR": "Infliger des dégâts",
        "it-IT": "Danneggia",
        "ja-JP": "ダメージを与える",
        "pl-PL": "Zrań",
        "pt-BR": "Danificar",
        "ru-RU": "Наносить урон",
        "zh-CN": "伤害",
        "zh-TW": "攻擊"
    },
    {
        "opy": "Current Upgrade",
        "en-US": "Current Upgrade",
        "guid": "00000000C031",
        "de-DE": "Aktuelles Upgrade",
        "es-ES": "Mejora actual",
        "es-MX": "Mejora actual",
        "fr-FR": "Amélioration actuelle",
        "it-IT": "Miglioramento Attuale",
        "ja-JP": "現在のアップグレード",
        "pl-PL": "Bieżące ulepszenie",
        "pt-BR": "Melhoria Atual",
        "ru-RU": "Текущее улучшение",
        "zh-CN": "当前升级",
        "zh-TW": "目前升級"
    },
    {
        "opy": "Current Targets",
        "en-US": "Current Targets",
        "guid": "00000000C02D",
        "de-DE": "Aktuelle Ziele",
        "es-ES": "Objetivos actuales",
        "es-MX": "Objetivos actuales",
        "fr-FR": "Cibles actuelles",
        "it-IT": "Bersagli Attuali",
        "ja-JP": "現在のターゲット",
        "pl-PL": "Bieżące cele",
        "pt-BR": "Alvos Atuais",
        "ru-RU": "Текущие цели",
        "zh-CN": "当前目标",
        "zh-TW": "目前目標"
    },
    {
        "opy": "Current Target",
        "en-US": "Current Target",
        "guid": "00000000C02C",
        "de-DE": "Aktuelles Ziel",
        "es-ES": "Objetivo actual",
        "es-MX": "Objetivo actual",
        "fr-FR": "Cible actuelle",
        "it-IT": "Bersaglio Attuale",
        "ja-JP": "現在のターゲット",
        "pl-PL": "Bieżący cel",
        "pt-BR": "Alvo Atual",
        "ru-RU": "Текущая цель",
        "zh-CN": "当前目标",
        "zh-TW": "目前目標"
    },
    {
        "opy": "Current Round",
        "en-US": "Current Round",
        "guid": "00000000C036",
        "de-DE": "Aktuelle Runde",
        "es-ES": "Ronda actual",
        "es-MX": "Ronda actual",
        "fr-FR": "Manche actuelle",
        "it-IT": "Round Attuale",
        "ja-JP": "現在のラウンド",
        "pl-PL": "Bieżąca runda",
        "pt-BR": "Rodada Atual",
        "ru-RU": "Текущий раунд",
        "zh-CN": "当前回合",
        "zh-TW": "目前回合"
    },
    {
        "opy": "Current Players",
        "en-US": "Current Players",
        "guid": "00000000C02B",
        "de-DE": "Aktuelle Spieler",
        "es-ES": "Jugadores actuales",
        "es-MX": "Jugadores actuales",
        "fr-FR": "Joueurs actuels",
        "it-IT": "Giocatori Attuali",
        "ja-JP": "現在のプレイヤー",
        "pl-PL": "Bieżący gracze",
        "pt-BR": "Jogadores Atuais",
        "ru-RU": "Текущие игроки",
        "zh-CN": "当前玩家",
        "zh-TW": "目前玩家"
    },
    {
        "opy": "Current Player",
        "en-US": "Current Player",
        "guid": "00000000C02A",
        "de-DE": "Aktueller Spieler",
        "es-ES": "Jugador actual",
        "es-MX": "Jugador actual",
        "fr-FR": "Joueur actuel",
        "it-IT": "Giocatore Attuale",
        "ja-JP": "現在のプレイヤー",
        "pl-PL": "Bieżący gracz",
        "pt-BR": "Jogador Atual",
        "ru-RU": "Текущий игрок",
        "zh-CN": "当前玩家",
        "zh-TW": "目前玩家"
    },
    {
        "opy": "Current Phase",
        "en-US": "Current Phase",
        "guid": "00000000C032",
        "de-DE": "Aktuelle Phase",
        "es-ES": "Fase actual",
        "es-MX": "Fase actual",
        "fr-FR": "Phase actuelle",
        "it-IT": "Fase Attuale",
        "ja-JP": "現在のフェーズ",
        "pl-PL": "Bieżąca faza",
        "pt-BR": "Fase Atual",
        "ru-RU": "Текущая фаза",
        "zh-CN": "当前阶段",
        "zh-TW": "目前階段"
    },
    {
        "opy": "Current Objects",
        "en-US": "Current Objects",
        "guid": "00000000C03D",
        "de-DE": "Aktuelle Objekte",
        "es-ES": "Objetos actuales",
        "es-MX": "Objetos actuales",
        "fr-FR": "Objets actuels",
        "it-IT": "Oggetti Attuali",
        "ja-JP": "現在のオブジェクト",
        "pl-PL": "Bieżące obiekty",
        "pt-BR": "Objetos Atuais",
        "ru-RU": "Текущие объекты",
        "zh-CN": "当前对象",
        "zh-TW": "目前目標"
    },
    {
        "opy": "Current Objective",
        "en-US": "Current Objective",
        "guid": "00000000C03C",
        "de-DE": "Aktueller Zielpunkt",
        "es-ES": "Objetivo actual",
        "es-MX": "Objetivo actual",
        "fr-FR": "Objectif actuel",
        "it-IT": "Obiettivo Attuale",
        "ja-JP": "現在の目標",
        "pl-PL": "Bieżące zadanie",
        "pt-BR": "Objetivo Atual",
        "ru-RU": "Текущая задача",
        "zh-CN": "当前目标点",
        "zh-TW": "目前目標"
    },
    {
        "opy": "Current Object",
        "en-US": "Current Object",
        "guid": "00000000C03E",
        "de-DE": "Aktuelles Objekt",
        "es-ES": "Objeto actual",
        "es-MX": "Objeto actual",
        "fr-FR": "Object actuel",
        "it-IT": "Oggetto Attuale",
        "ja-JP": "現在のオブジェクト",
        "pl-PL": "Bieżący obiekt",
        "pt-BR": "Objeto Atual",
        "ru-RU": "Текущий объект",
        "zh-CN": "当前对象",
        "zh-TW": "目前目標"
    },
    {
        "opy": "Current Mission",
        "en-US": "Current Mission",
        "guid": "00000000C033",
        "de-DE": "Aktuelle Mission",
        "es-ES": "Misión actual",
        "es-MX": "Misión actual",
        "fr-FR": "Mission actuelle",
        "it-IT": "Missione Attuale",
        "ja-JP": "現在の任務",
        "pl-PL": "Bieżąca misja",
        "pt-BR": "Missão Atual",
        "ru-RU": "Текущее задание",
        "zh-CN": "当前任务",
        "zh-TW": "目前任務"
    },
    {
        "opy": "Current Level",
        "en-US": "Current Level",
        "guid": "00000000C02F",
        "de-DE": "Aktueller Level",
        "es-ES": "Nivel actual",
        "es-MX": "Nivel actual",
        "fr-FR": "Niveau actuel",
        "it-IT": "Livello Attuale",
        "ja-JP": "現在のレベル",
        "pl-PL": "Bieżący poziom",
        "pt-BR": "Nível Atual",
        "ru-RU": "Текущий уровень",
        "zh-CN": "当前等级",
        "zh-TW": "目前等級"
    },
    {
        "opy": "Current Hostages",
        "en-US": "Current Hostages",
        "guid": "00000000C03F",
        "de-DE": "Aktuelle Geiseln",
        "es-ES": "Rehenes actuales",
        "es-MX": "Rehenes actuales",
        "fr-FR": "Otages actuels",
        "it-IT": "Ostaggi Attuali",
        "ja-JP": "現在の人質",
        "pl-PL": "Bieżący zakładnicy",
        "pt-BR": "Reféns Atuais",
        "ru-RU": "Текущие заложники",
        "zh-CN": "当前人质",
        "zh-TW": "目前人質"
    },
    {
        "opy": "Current Hostage",
        "en-US": "Current Hostage",
        "guid": "00000000C023",
        "de-DE": "Aktuelle Geisel",
        "es-ES": "Rehén actual",
        "es-MX": "Rehén actual",
        "fr-FR": "Otage actuel",
        "it-IT": "Ostaggio Attuale",
        "ja-JP": "現在の人質",
        "pl-PL": "Bieżący zakładnik",
        "pt-BR": "Refém Atual",
        "ru-RU": "Текущий заложник",
        "zh-CN": "当前人质",
        "zh-TW": "目前人質"
    },
    {
        "opy": "Current Heroes",
        "en-US": "Current Heroes",
        "guid": "00000000C022",
        "de-DE": "Aktuelle Helden",
        "es-ES": "Héroes actuales",
        "es-MX": "Héroes actuales",
        "fr-FR": "Héros actuels",
        "it-IT": "Eroi Attuali",
        "ja-JP": "現在のヒーロー",
        "pl-PL": "Bieżący bohaterowie",
        "pt-BR": "Heróis Atuais",
        "ru-RU": "Текущие герои",
        "zh-CN": "当前英雄",
        "zh-TW": "目前英雄"
    },
    {
        "opy": "Current Hero",
        "en-US": "Current Hero",
        "guid": "00000000C026",
        "de-DE": "Aktueller Held",
        "es-ES": "Héroe actual",
        "es-MX": "Héroe actual",
        "fr-FR": "Héros actuel",
        "it-IT": "Eroe Attuale",
        "ja-JP": "現在のヒーロー",
        "pl-PL": "Bieżący bohater",
        "pt-BR": "Herói Atual",
        "ru-RU": "Текущий герой",
        "zh-CN": "当前英雄",
        "zh-TW": "目前英雄"
    },
    {
        "opy": "Current Game",
        "en-US": "Current Game",
        "guid": "00000000C037",
        "de-DE": "Aktuelles Spiel",
        "es-ES": "Partida actual",
        "es-MX": "Partida actual",
        "fr-FR": "Partie actuelle",
        "it-IT": "Partita Attuale",
        "ja-JP": "現在のマッチ",
        "pl-PL": "Bieżąca gra",
        "pt-BR": "Jogo Atual",
        "ru-RU": "Текущий матч",
        "zh-CN": "当前游戏",
        "zh-TW": "目前遊戲"
    },
    {
        "opy": "Current Form",
        "en-US": "Current Form",
        "guid": "00000000C030",
        "de-DE": "Aktuelle Form",
        "es-ES": "Forma actual",
        "es-MX": "Forma actual",
        "fr-FR": "Forme actuelle",
        "it-IT": "Forma Attuale",
        "ja-JP": "現在のフォーム",
        "pl-PL": "Bieżąca forma",
        "pt-BR": "Forma Atual",
        "ru-RU": "Текущая форма",
        "zh-CN": "当前形态",
        "zh-TW": "目前型態"
    },
    {
        "opy": "Current Enemy",
        "en-US": "Current Enemy",
        "guid": "00000000C039",
        "de-DE": "Aktueller Gegner",
        "es-ES": "Enemigo actual",
        "es-MX": "Enemigo actual",
        "fr-FR": "Ennemi actuel",
        "it-IT": "Nemico Attuale",
        "ja-JP": "現在の敵",
        "pl-PL": "Bieżący wróg",
        "pt-BR": "Inimigo Atual",
        "ru-RU": "Текущий враг",
        "zh-CN": "当前敌人",
        "zh-TW": "目前敵人"
    },
    {
        "opy": "Current Enemies",
        "en-US": "Current Enemies",
        "guid": "00000000C038",
        "de-DE": "Aktuelle Gegner",
        "es-ES": "Enemigos actuales",
        "es-MX": "Enemigos actuales",
        "fr-FR": "Ennemis actuels",
        "it-IT": "Nemici Attuali",
        "ja-JP": "現在の敵",
        "pl-PL": "Bieżący wrogowie",
        "pt-BR": "Inimigos Atuais",
        "ru-RU": "Текущие враги",
        "zh-CN": "当前敌人",
        "zh-TW": "目前敵人"
    },
    {
        "opy": "Current Checkpoint",
        "en-US": "Current Checkpoint",
        "guid": "00000000C034",
        "de-DE": "Aktueller Checkpoint",
        "es-ES": "Punto de control actual",
        "es-MX": "Punto de control actual",
        "fr-FR": "Point de contrôle actuel",
        "it-IT": "Checkpoint Attuale",
        "ja-JP": "現在のチェックポイント",
        "pl-PL": "Bieżący punkt kontrolny",
        "pt-BR": "Ponto de Verificação Atual",
        "ru-RU": "Текущая контрольная точка",
        "zh-CN": "当前检查点",
        "zh-TW": "目前檢查點"
    },
    {
        "opy": "Current Attempt",
        "en-US": "Current Attempt",
        "guid": "00000000C035",
        "de-DE": "Aktueller Versuch",
        "es-ES": "Intento actual",
        "es-MX": "Intento actual",
        "fr-FR": "Tentative actuelle",
        "it-IT": "Tentativo Attuale",
        "ja-JP": "現在の挑戦",
        "pl-PL": "Bieżąca próba",
        "pt-BR": "Tentativa Atual",
        "ru-RU": "Текущая попытка",
        "zh-CN": "当前尝试",
        "zh-TW": "目前機會"
    },
    {
        "opy": "Current Ally",
        "en-US": "Current Ally",
        "guid": "00000000C03B",
        "de-DE": "Aktueller Verbündeter",
        "es-ES": "Aliado actual",
        "es-MX": "Aliado actual",
        "fr-FR": "Allié actuel",
        "it-IT": "Alleato Attuale",
        "ja-JP": "現在の味方",
        "pl-PL": "Bieżący sojusznik",
        "pt-BR": "Aliado Atual",
        "ru-RU": "Текущий союзник",
        "zh-CN": "当前盟友",
        "zh-TW": "目前盟友"
    },
    {
        "opy": "Current Allies",
        "en-US": "Current Allies",
        "guid": "00000000C03A",
        "de-DE": "Aktuelle Verbündete",
        "es-ES": "Aliados actuales",
        "es-MX": "Aliados actuales",
        "fr-FR": "Alliés actuels",
        "it-IT": "Alleati Attuali",
        "ja-JP": "現在の味方",
        "pl-PL": "Bieżący sojusznicy",
        "pt-BR": "Aliados Atuais",
        "ru-RU": "Текущие союзники",
        "zh-CN": "当前盟友",
        "zh-TW": "目前盟友"
    },
    {
        "guid": "00000000C027",
        "opy": "Current",
        "en-US": "Current",
        "de-DE": "Aktuell",
        "es-ES": "Actual",
        "es-MX": "Actual",
        "fr-FR": "Actuel",
        "it-IT": "Attuale",
        "ja-JP": "現在",
        "pl-PL": "Bieżący",
        "pt-BR": "Atual",
        "ru-RU": "Текущий",
        "zh-CN": "当前",
        "zh-TW": "目前"
    },
    {
        "opy": "Crouching",
        "en-US": "Crouching",
        "guid": "00000000C2A6",
        "de-DE": "Ducken",
        "es-ES": "Agachándose",
        "es-MX": "Agachándose",
        "fr-FR": "Accroupissement",
        "it-IT": "Accovacciamento in Corso",
        "ja-JP": "しゃがんでいる",
        "pl-PL": "Kucanie",
        "pt-BR": "Agachando",
        "ru-RU": "Пригибается",
        "zh-CN": "正在蹲下",
        "zh-TW": "正在蹲下"
    },
    {
        "opy": "Crouched",
        "en-US": "Crouched",
        "guid": "00000000C2A7",
        "de-DE": "Geduckt",
        "es-ES": "Agachado",
        "es-MX": "Agachado",
        "fr-FR": "Accroupi",
        "it-IT": "Accovacciato",
        "ja-JP": "しゃがんだ",
        "pl-PL": "Kucnięto",
        "pt-BR": "Agachado",
        "ru-RU": "Пригнулся",
        "zh-CN": "已蹲下",
        "zh-TW": "已蹲下"
    },
    {
        "guid": "00000000C2A5",
        "opy": "Crouch",
        "en-US": "Crouch",
        "de-DE": "Ducken",
        "es-ES": "Agacharse",
        "es-MX": "Agacharse",
        "fr-FR": "S’accroupir",
        "it-IT": "Accovacciati",
        "ja-JP": "しゃがみ",
        "pl-PL": "Kucnij",
        "pt-BR": "Agachar",
        "ru-RU": "Пригибаться",
        "zh-CN": "蹲下",
        "zh-TW": "蹲下"
    },
    {
        "opy": "Critical",
        "en-US": "Critical",
        "guid": "00000000C13C",
        "de-DE": "Kritisch",
        "es-ES": "Crítico",
        "es-MX": "Crítico",
        "fr-FR": "Critique",
        "it-IT": "Critico",
        "ja-JP": "クリティカル",
        "pl-PL": "Krytyczne",
        "pt-BR": "Crítico",
        "ru-RU": "Критический",
        "zh-CN": "严重",
        "zh-TW": "致命"
    },
    {
        "guid": "00000000BFED",
        "opy": "Credits",
        "en-US": "Credits",
        "es-ES": "Créditos",
        "es-MX": "Créditos",
        "fr-FR": "Crédits",
        "it-IT": "Crediti",
        "ja-JP": "ヒーロー・ダスト",
        "pl-PL": "Kredyty",
        "pt-BR": "Créditos",
        "ru-RU": "Кредиты",
        "zh-CN": "货币",
        "zh-TW": "次數"
    },
    {
        "guid": "00000000C001",
        "opy": "Credit",
        "en-US": "Credit",
        "es-ES": "Crédito",
        "es-MX": "Crédito",
        "fr-FR": "Crédit",
        "it-IT": "Credito",
        "ja-JP": "ヒーロー・ダスト",
        "pl-PL": "Kredyt",
        "pt-BR": "Crédito",
        "ru-RU": "Кредит",
        "zh-CN": "货币",
        "zh-TW": "次數"
    },
    {
        "opy": "Corrupting",
        "en-US": "Corrupting",
        "guid": "00000000C0D9",
        "de-DE": "Verderbnis",
        "es-ES": "Corrompiendo",
        "es-MX": "Corrompiendo",
        "fr-FR": "Corruption",
        "it-IT": "Corruzione in Corso",
        "ja-JP": "破損中",
        "pl-PL": "Uszkadzanie",
        "pt-BR": "Corrompendo",
        "ru-RU": "Нарушает",
        "zh-CN": "正在腐化",
        "zh-TW": "正在腐化"
    },
    {
        "opy": "Corrupted",
        "en-US": "Corrupted",
        "guid": "00000000C0DA",
        "de-DE": "Verdorben",
        "es-ES": "Corrupto",
        "es-MX": "Corrupto",
        "fr-FR": "Corrompu",
        "it-IT": "Corrotto",
        "ja-JP": "破損した",
        "pl-PL": "Uszkodzono",
        "pt-BR": "Corrompido",
        "ru-RU": "Нарушен",
        "zh-CN": "已腐化",
        "zh-TW": "受到腐化"
    },
    {
        "opy": "Corrupt",
        "en-US": "Corrupt",
        "guid": "00000000C0D8",
        "de-DE": "Verderben",
        "es-ES": "Corromper",
        "es-MX": "Corromper",
        "fr-FR": "Corrompre",
        "it-IT": "Corrompi",
        "ja-JP": "破損",
        "pl-PL": "Uszkodź",
        "pt-BR": "Corromper",
        "ru-RU": "Нарушить",
        "zh-CN": "腐化",
        "zh-TW": "腐化"
    },
    {
        "opy": "Cooldowns",
        "en-US": "Cooldowns",
        "guid": "00000000C5DB",
        "de-DE": "Abklingzeiten",
        "es-ES": "Tiempos de reutilización",
        "es-MX": "Tiempos de reutilización",
        "fr-FR": "Temps de recharge",
        "it-IT": "Tempi di recupero",
        "ja-JP": "クールダウン",
        "pt-BR": "Tempos de Recarga",
        "ru-RU": "Время восстановления способностей",
        "zh-CN": "冷却时间",
        "zh-TW": "冷卻時間"
    },
    {
        "opy": "Cooldown",
        "en-US": "Cooldown",
        "guid": "00000000C5DA",
        "de-DE": "Abklingzeit",
        "es-ES": "Tiempo de reutilización",
        "es-MX": "Tiempo de reutilización",
        "fr-FR": "Temps de recharge",
        "it-IT": "Tempo di recupero",
        "ja-JP": "クールダウン",
        "pl-PL": "Czas odnowienia",
        "pt-BR": "Tempo de Recarga",
        "ru-RU": "Время восстановления",
        "zh-CN": "冷却时间",
        "zh-TW": "冷卻時間"
    },
    {
        "opy": "Control Points",
        "en-US": "Control Points",
        "guid": "00000000BFC7",
        "de-DE": "Kontrollpunkte",
        "es-ES": "Puntos de control",
        "es-MX": "Puntos de control",
        "fr-FR": "Points de contrôle",
        "it-IT": "Punti di Controllo",
        "ja-JP": "コントロール・ポイント",
        "pl-PL": "Punkty kontrolne",
        "pt-BR": "Pontos de Controle",
        "ru-RU": "Контрольные точки",
        "zh-CN": "控制点",
        "zh-TW": "控制點"
    },
    {
        "opy": "Control Point",
        "en-US": "Control Point",
        "guid": "00000000BFC8",
        "de-DE": "Kontrollpunkt",
        "es-ES": "Punto de control",
        "es-MX": "Punto de control",
        "fr-FR": "Point de contrôle",
        "it-IT": "Punto di Controllo",
        "ja-JP": "コントロール・ポイント",
        "pl-PL": "Punkt kontrolny",
        "pt-BR": "Ponto de Controle",
        "ru-RU": "Контрольная точка",
        "zh-CN": "控制点",
        "zh-TW": "控制點"
    },
    {
        "opy": "Constitution",
        "en-US": "Constitution",
        "guid": "00000000C987",
        "de-DE": "Konstitution",
        "es-ES": "Constitución",
        "es-MX": "Constitución",
        "it-IT": "Costituzione",
        "ja-JP": "体格",
        "pl-PL": "Kondycja",
        "pt-BR": "Constituição",
        "ru-RU": "Телосложение",
        "zh-CN": "建筑",
        "zh-TW": "體質"
    },
    {
        "opy": "Connecting",
        "en-US": "Connecting",
        "guid": "00000000C0FA",
        "de-DE": "Verbindung",
        "es-ES": "Conectando",
        "es-MX": "Conectándose",
        "fr-FR": "Connexion",
        "it-IT": "Connessione in Corso",
        "ja-JP": "接続中",
        "pl-PL": "Łączenie",
        "pt-BR": "Conectando",
        "ru-RU": "Подключается",
        "zh-CN": "正在连接",
        "zh-TW": "正在連接"
    },
    {
        "opy": "Connected",
        "en-US": "Connected",
        "guid": "00000000C0FB",
        "de-DE": "Verbunden",
        "es-ES": "Conectado",
        "es-MX": "Conectado",
        "fr-FR": "Connecté",
        "it-IT": "Connesso",
        "ja-JP": "接続した",
        "pl-PL": "Połączono",
        "pt-BR": "Conectado",
        "ru-RU": "Подключен",
        "zh-CN": "已连接",
        "zh-TW": "獲得連接"
    },
    {
        "opy": "Connect",
        "en-US": "Connect",
        "guid": "00000000C0F9",
        "de-DE": "Verbinden",
        "es-ES": "Conectar",
        "es-MX": "Conectar",
        "fr-FR": "Connecter",
        "it-IT": "Connetti",
        "ja-JP": "接続",
        "pl-PL": "Połącz",
        "pt-BR": "Conectar",
        "ru-RU": "Подключиться",
        "zh-CN": "连接",
        "zh-TW": "連接"
    },
    {
        "opy": "Congratulations",
        "en-US": "Congratulations",
        "guid": "00000000C323",
        "de-DE": "Glückwunsch",
        "es-ES": "Enhorabuena",
        "es-MX": "Felicitaciones",
        "fr-FR": "Félicitations",
        "it-IT": "Congratulazioni",
        "ja-JP": "おめでとう！",
        "pl-PL": "Gratulacje",
        "pt-BR": "Parabéns",
        "ru-RU": "Поздравляем",
        "zh-CN": "恭喜",
        "zh-TW": "恭喜"
    },
    {
        "guid": "00000000C095",
        "opy": "Condition",
        "en-US": "Condition",
        "de-DE": "Zustand",
        "es-ES": "Condición",
        "es-MX": "Condición",
        "it-IT": "Condizione",
        "ja-JP": "条件",
        "pl-PL": "Warunek",
        "pt-BR": "Condição",
        "ru-RU": "Условие",
        "zh-CN": "条件",
        "zh-TW": "狀況"
    },
    {
        "opy": "Come Here",
        "en-US": "Come Here",
        "guid": "00000000C186",
        "de-DE": "Hierher kommen",
        "es-ES": "Ven aquí",
        "es-MX": "Ven aquí",
        "fr-FR": "Venez ici",
        "it-IT": "Vieni Qui",
        "ja-JP": "こっちに来い",
        "pl-PL": "Dawać tutaj",
        "pt-BR": "Venha Aqui",
        "ru-RU": "Иди сюда",
        "zh-CN": "到这儿来",
        "zh-TW": "過來"
    },
    {
        "guid": "00000000C870",
        "opy": "Combo",
        "en-US": "Combo",
        "it-IT": "Combinazione",
        "ja-JP": "コンボ",
        "pl-PL": "Kombos",
        "ru-RU": "Комбо",
        "zh-CN": "连击",
        "zh-TW": "連擊"
    },
    {
        "opy": "Clubs",
        "en-US": "Clubs",
        "guid": "00000000CA94",
        "de-DE": "Kreuz",
        "es-ES": "Bastos",
        "es-MX": "Tréboles",
        "fr-FR": "Trèfle",
        "it-IT": "Fiori",
        "ja-JP": "クラブ",
        "pl-PL": "Trefl",
        "pt-BR": "Paus",
        "ru-RU": "Трефы",
        "zh-CN": "梅花",
        "zh-TW": "梅花"
    },
    {
        "guid": "00000000CAC1",
        "opy": "Club",
        "en-US": "Club",
        "de-DE": "Kreuz",
        "es-ES": "Basto",
        "es-MX": "Trébol",
        "fr-FR": "Trèfle",
        "it-IT": "Fiore",
        "ja-JP": "クラブ",
        "pl-PL": "Trefl",
        "pt-BR": "Paus",
        "ru-RU": "Трефы",
        "zh-CN": "梅花",
        "zh-TW": "梅花"
    },
    {
        "opy": "Clouds",
        "en-US": "Clouds",
        "guid": "00000000C289",
        "de-DE": "Wolken",
        "es-ES": "Nubes",
        "es-MX": "Nubes",
        "fr-FR": "Nuages",
        "it-IT": "Nuvole",
        "ja-JP": "雲",
        "pl-PL": "Chmury",
        "pt-BR": "Nuvens",
        "ru-RU": "Облака",
        "zh-CN": "云朵",
        "zh-TW": "雲"
    },
    {
        "guid": "00000000C288",
        "opy": "Cloud",
        "en-US": "Cloud",
        "de-DE": "Wolke",
        "es-ES": "Nube",
        "es-MX": "Nube",
        "fr-FR": "Nuage",
        "it-IT": "Nuvola",
        "ja-JP": "雲",
        "pl-PL": "Chmura",
        "pt-BR": "Nuvem",
        "ru-RU": "Облако",
        "zh-CN": "云朵",
        "zh-TW": "雲"
    },
    {
        "opy": "Checkpoints",
        "en-US": "Checkpoints",
        "guid": "00000000C007",
        "es-ES": "Puntos de control",
        "es-MX": "Puntos de control",
        "fr-FR": "Points de contrôle",
        "it-IT": "Checkpoint",
        "ja-JP": "チェックポイント",
        "pl-PL": "Punkty kontrolne",
        "pt-BR": "Pontos de Verificação",
        "ru-RU": "Контрольные точки",
        "zh-CN": "检查点",
        "zh-TW": "檢查點"
    },
    {
        "opy": "Checkpoint",
        "en-US": "Checkpoint",
        "guid": "00000000C008",
        "es-ES": "Punto de control",
        "es-MX": "Punto de control",
        "fr-FR": "Point de contrôle",
        "ja-JP": "チェックポイント",
        "pl-PL": "Punkt kontrolny",
        "pt-BR": "Ponto de Verificação",
        "ru-RU": "Контрольная точка",
        "zh-CN": "检查点",
        "zh-TW": "檢查點"
    },
    {
        "opy": "Chasing",
        "en-US": "Chasing",
        "guid": "00000000C0B5",
        "de-DE": "Verfolgung",
        "es-ES": "Persiguiendo",
        "es-MX": "Persiguiendo",
        "fr-FR": "Poursuite",
        "it-IT": "Inseguimento in Corso",
        "ja-JP": "追跡中",
        "pl-PL": "Gonienie",
        "pt-BR": "Acompanhando",
        "ru-RU": "Преследует",
        "zh-CN": "正在追击",
        "zh-TW": "正在追逐"
    },
    {
        "opy": "Chased",
        "en-US": "Chased",
        "guid": "00000000C0B6",
        "de-DE": "Verfolgt",
        "es-ES": "Perseguido",
        "es-MX": "Perseguido",
        "fr-FR": "Poursuivi",
        "it-IT": "Seguito",
        "ja-JP": "追跡した",
        "pl-PL": "Dogoniono",
        "pt-BR": "Acompanhado",
        "ru-RU": "Преследовал",
        "zh-CN": "已追击",
        "zh-TW": "被追逐"
    },
    {
        "opy": "Chase",
        "en-US": "Chase",
        "guid": "00000000C0B4",
        "de-DE": "Verfolgen",
        "es-ES": "Perseguir",
        "es-MX": "Perseguir",
        "fr-FR": "Poursuivre",
        "it-IT": "Segui",
        "ja-JP": "追跡",
        "pl-PL": "Dogoń",
        "pt-BR": "Acompanhar",
        "ru-RU": "Преследовать",
        "zh-CN": "追击",
        "zh-TW": "追逐"
    },
    {
        "opy": "Charisma",
        "en-US": "Charisma",
        "guid": "00000000C988",
        "es-ES": "Carisma",
        "es-MX": "Encanto",
        "fr-FR": "Charisme",
        "it-IT": "Carisma",
        "ja-JP": "カリスマ",
        "pl-PL": "Charyzma",
        "pt-BR": "Carisma",
        "ru-RU": "Обаяние",
        "zh-CN": "魅力",
        "zh-TW": "魅力"
    },
    {
        "opy": "Challenge Accepted",
        "en-US": "Challenge Accepted",
        "guid": "00000000C18D",
        "de-DE": "Herausforderung angenommen",
        "es-ES": "Desafío aceptado",
        "es-MX": "Desafío aceptado",
        "fr-FR": "Défi accepté",
        "it-IT": "Sfida Accettata",
        "ja-JP": "売られた喧嘩は買うぞ",
        "pl-PL": "Przyjmuję wyzwanie",
        "pt-BR": "Desafio Aceito",
        "ru-RU": "Вызов принят",
        "zh-CN": "接受挑战",
        "zh-TW": "接受挑戰"
    },
    {
        "guid": "00000000C164",
        "opy": "Center",
        "en-US": "Center",
        "de-DE": "Mitte",
        "es-ES": "Centro",
        "es-MX": "Centro",
        "fr-FR": "Centre",
        "it-IT": "Centro",
        "ja-JP": "中心",
        "pl-PL": "Środek",
        "pt-BR": "Centro",
        "ru-RU": "Центр",
        "zh-CN": "中",
        "zh-TW": "中央"
    },
    {
        "guid": "00000000C5C3",
        "opy": "Caution",
        "en-US": "Caution",
        "de-DE": "Vorsicht",
        "es-ES": "Precaución",
        "es-MX": "Peligro",
        "fr-FR": "Prudence",
        "it-IT": "Attenzione",
        "ja-JP": "注意",
        "pl-PL": "Uwaga",
        "pt-BR": "Perigo",
        "ru-RU": "Осторожно",
        "zh-CN": "危险",
        "zh-TW": "注意"
    },
    {
        "opy": "Capturing",
        "en-US": "Capturing",
        "guid": "00000000C12A",
        "de-DE": "Eroberung",
        "es-ES": "Capturando",
        "es-MX": "Capturando",
        "fr-FR": "Capture",
        "it-IT": "Cattura in Corso",
        "ja-JP": "確保中",
        "pl-PL": "Przejmowanie",
        "pt-BR": "Capturando",
        "ru-RU": "Захватывает",
        "zh-CN": "正在夺取",
        "zh-TW": "正在捕捉"
    },
    {
        "guid": "00000000C12D",
        "opy": "Captured",
        "en-US": "Captured",
        "de-DE": "Erobert",
        "es-ES": "Capturado",
        "es-MX": "Capturado",
        "fr-FR": "Capturé",
        "it-IT": "Catturato",
        "ja-JP": "確保した",
        "pl-PL": "Przejęto",
        "pt-BR": "Capturado",
        "ru-RU": "Захвачен",
        "zh-CN": "已夺取",
        "zh-TW": "遭到捕捉"
    },
    {
        "opy": "Capture",
        "en-US": "Capture",
        "guid": "00000000C129",
        "de-DE": "Erobern",
        "es-ES": "Capturar",
        "es-MX": "Capturar",
        "fr-FR": "Capturer",
        "it-IT": "Cattura",
        "ja-JP": "確保",
        "pl-PL": "Przejmij",
        "pt-BR": "Capturar",
        "ru-RU": "Захват",
        "zh-CN": "夺取",
        "zh-TW": "捕捉"
    },
    {
        "opy": "Buying",
        "en-US": "Buying",
        "guid": "00000000C0FF",
        "de-DE": "Kauf",
        "es-ES": "Comprando",
        "es-MX": "Comprando",
        "fr-FR": "Achat",
        "it-IT": "Acquisto in Corso",
        "ja-JP": "購入中",
        "pl-PL": "Kupowanie",
        "pt-BR": "Comprando",
        "ru-RU": "Покупает",
        "zh-CN": "正在购买",
        "zh-TW": "正在購買"
    },
    {
        "guid": "00000000C101",
        "opy": "Buy",
        "en-US": "Buy",
        "de-DE": "Kaufen",
        "es-ES": "Comprar",
        "es-MX": "Comprar",
        "fr-FR": "Acheter",
        "it-IT": "Acquista",
        "ja-JP": "購入",
        "pl-PL": "Kup",
        "pt-BR": "Comprar",
        "ru-RU": "Купить",
        "zh-CN": "购买",
        "zh-TW": "購買"
    },
    {
        "opy": "Burnt",
        "en-US": "Burnt",
        "guid": "00000000C0D0",
        "de-DE": "Verbrannt",
        "es-ES": "Quemado",
        "es-MX": "Quemado",
        "fr-FR": "Brûlé",
        "it-IT": "Bruciato",
        "ja-JP": "燃焼した",
        "pl-PL": "Spalono",
        "pt-BR": "Queimado",
        "ru-RU": "Сгорел",
        "zh-CN": "已点燃",
        "zh-TW": "受到燃燒"
    },
    {
        "guid": "00000000C0D1",
        "opy": "Burning",
        "en-US": "Burning",
        "de-DE": "Brand",
        "es-ES": "Quemando",
        "es-MX": "Quemándose",
        "fr-FR": "Enflammé",
        "it-IT": "Bruciatura in Corso",
        "ja-JP": "燃焼中",
        "pl-PL": "Palenie",
        "pt-BR": "Queimando",
        "ru-RU": "Горит",
        "zh-CN": "正在点燃",
        "zh-TW": "正在燃燒"
    },
    {
        "opy": "Burn",
        "en-US": "Burn",
        "guid": "00000000C0D2",
        "de-DE": "Verbrennen",
        "es-ES": "Quemar",
        "es-MX": "Quemar",
        "fr-FR": "Brûler",
        "it-IT": "Brucia",
        "ja-JP": "燃焼",
        "pl-PL": "Spal",
        "pt-BR": "Queimar",
        "ru-RU": "Горение",
        "zh-CN": "点燃",
        "zh-TW": "燃燒"
    },
    {
        "opy": "Built",
        "en-US": "Built",
        "guid": "00000000C0C8",
        "de-DE": "Gebaut",
        "es-ES": "Construido",
        "es-MX": "Construido",
        "fr-FR": "Construit",
        "it-IT": "Costruito",
        "ja-JP": "設置した",
        "pl-PL": "Zbudowano",
        "pt-BR": "Construído",
        "ru-RU": "Построен",
        "zh-CN": "已建造",
        "zh-TW": "已建造"
    },
    {
        "guid": "00000000C0C7",
        "opy": "Building",
        "en-US": "Building",
        "de-DE": "Gebäude",
        "es-ES": "Construyendo",
        "es-MX": "Construyendo",
        "fr-FR": "Construction",
        "it-IT": "Costruzione in Corso",
        "ja-JP": "設置中",
        "pl-PL": "Budowanie",
        "pt-BR": "Construindo",
        "ru-RU": "Строение",
        "zh-CN": "正在建造",
        "zh-TW": "正在建造"
    },
    {
        "opy": "Build",
        "en-US": "Build",
        "guid": "00000000C0C6",
        "de-DE": "Bauen",
        "es-ES": "Construir",
        "es-MX": "Construir",
        "fr-FR": "Construire",
        "it-IT": "Costruisci",
        "ja-JP": "設置",
        "pl-PL": "Zbuduj",
        "pt-BR": "Construir",
        "ru-RU": "Строить",
        "zh-CN": "建造",
        "zh-TW": "建造"
    },
    {
        "opy": "Bought",
        "en-US": "Bought",
        "guid": "00000000C100",
        "de-DE": "Gekauft",
        "es-ES": "Comprado",
        "es-MX": "Comprado",
        "fr-FR": "Acheté",
        "it-IT": "Acquistato",
        "ja-JP": "購入した",
        "pl-PL": "Kupiono",
        "pt-BR": "Comprado",
        "ru-RU": "Куплен",
        "zh-CN": "已购买",
        "zh-TW": "已購買"
    },
    {
        "opy": "Bosses",
        "en-US": "Bosses",
        "guid": "00000000C5E4",
        "de-DE": "Bosse",
        "es-ES": "Jefes",
        "es-MX": "Jefes",
        "fr-FR": "Boss",
        "it-IT": "Boss",
        "ja-JP": "ボス",
        "pl-PL": "Bossowie",
        "pt-BR": "Chefes",
        "ru-RU": "Боссы",
        "zh-CN": "首领",
        "zh-TW": "首領"
    },
    {
        "opy": "Boss",
        "en-US": "Boss",
        "guid": "00000000C5E3",
        "es-ES": "Jefe",
        "es-MX": "Jefe",
        "ja-JP": "ボス",
        "pt-BR": "Chefe",
        "ru-RU": "Босс",
        "zh-CN": "首领",
        "zh-TW": "首領"
    },
    {
        "opy": "Bonuses",
        "en-US": "Bonuses",
        "guid": "00000000CA93",
        "de-DE": "Boni",
        "es-ES": "Bonificaciones",
        "es-MX": "Bonificaciones",
        "fr-FR": "Primes",
        "it-IT": "Bonus",
        "ja-JP": "ボーナス",
        "pl-PL": "Premie",
        "pt-BR": "Bônus",
        "ru-RU": "Бонусы",
        "zh-CN": "奖励",
        "zh-TW": "獎勵"
    },
    {
        "opy": "Bonus",
        "en-US": "Bonus",
        "guid": "00000000CA92",
        "es-ES": "Bonificación",
        "es-MX": "Bonificación",
        "fr-FR": "Prime",
        "ja-JP": "ボーナス",
        "pl-PL": "Premia",
        "pt-BR": "Bônus",
        "ru-RU": "Бонус",
        "zh-CN": "奖励",
        "zh-TW": "獎勵"
    },
    {
        "guid": "00000000C87C",
        "opy": "Blue",
        "en-US": "Blue",
        "de-DE": "Blau",
        "es-MX": "Azul",
        "fr-FR": "Bleu",
        "it-IT": "Blu",
        "ja-JP": "青",
        "pl-PL": "Niebieski",
        "pt-BR": "Azul",
        "ru-RU": "Синий",
        "zh-CN": "蓝色",
        "zh-TW": "藍"
    },
    {
        "opy": "Blocking",
        "en-US": "Blocking",
        "guid": "00000000C884",
        "de-DE": "Block",
        "es-ES": "Bloqueando",
        "es-MX": "Bloqueando",
        "fr-FR": "Bloque",
        "it-IT": "Fermata in Corso",
        "ja-JP": "ブロックしている",
        "pl-PL": "Blokowanie",
        "pt-BR": "Bloqueando",
        "ru-RU": "Блокирует",
        "zh-CN": "正在阻挡",
        "zh-TW": "正在阻擋"
    },
    {
        "opy": "Blocked",
        "en-US": "Blocked",
        "guid": "00000000C883",
        "de-DE": "Blockiert",
        "es-ES": "Bloqueado",
        "es-MX": "Bloqueado",
        "fr-FR": "Bloqué",
        "it-IT": "Fermato",
        "ja-JP": "ブロックした",
        "pl-PL": "Zablokowano",
        "pt-BR": "Bloqueado",
        "ru-RU": "Заблокировал",
        "zh-CN": "已阻挡",
        "zh-TW": "被阻擋"
    },
    {
        "guid": "00000000C882",
        "opy": "Block",
        "en-US": "Block",
        "de-DE": "Blockieren",
        "es-ES": "Bloquear",
        "es-MX": "Bloquear",
        "fr-FR": "Bloquer",
        "it-IT": "Ferma",
        "ja-JP": "ブロックする",
        "pl-PL": "Zablokuj",
        "pt-BR": "Bloquear",
        "ru-RU": "Блокировать",
        "zh-CN": "阻挡",
        "zh-TW": "阻擋"
    },
    {
        "opy": "Bids",
        "en-US": "Bids",
        "guid": "00000000CA91",
        "de-DE": "Gebote",
        "es-ES": "Pujas",
        "es-MX": "Apuestas",
        "fr-FR": "Enchères",
        "it-IT": "Puntate",
        "ja-JP": "ビッド",
        "pl-PL": "Zakłady",
        "pt-BR": "Apostas",
        "ru-RU": "Ставки",
        "zh-CN": "加注",
        "zh-TW": "競標"
    },
    {
        "opy": "Bid",
        "en-US": "Bid",
        "guid": "00000000CA90",
        "de-DE": "Gebot",
        "es-ES": "Puja",
        "es-MX": "Apuesta",
        "fr-FR": "Enchère",
        "it-IT": "Puntata",
        "ja-JP": "ビッド",
        "pl-PL": "Zakład",
        "pt-BR": "Aposta",
        "ru-RU": "Ставка",
        "zh-CN": "加注",
        "zh-TW": "競標"
    },
    {
        "opy": "Better",
        "en-US": "Better",
        "guid": "00000000C155",
        "de-DE": "Besser",
        "es-ES": "Mejor",
        "es-MX": "Mejor",
        "fr-FR": "Meilleur",
        "it-IT": "Meglio",
        "ja-JP": "より良い",
        "pl-PL": "Lepiej",
        "pt-BR": "Melhor",
        "ru-RU": "Лучше",
        "zh-CN": "优秀",
        "zh-TW": "較佳"
    },
    {
        "opy": "Best",
        "en-US": "Best",
        "guid": "00000000C156",
        "de-DE": "Am besten",
        "es-ES": "El mejor",
        "es-MX": "El mejor",
        "fr-FR": "Le meilleur",
        "it-IT": "Migliore",
        "ja-JP": "最高",
        "pl-PL": "Najlepiej",
        "pt-BR": "O Melhor",
        "ru-RU": "Лучший",
        "zh-CN": "最佳",
        "zh-TW": "最佳"
    },
    {
        "opy": "Banning",
        "en-US": "Banning",
        "guid": "00000000C109",
        "de-DE": "Bann",
        "es-ES": "Bloqueando",
        "es-MX": "Prohibiendo",
        "fr-FR": "Bannissement",
        "it-IT": "Sospensione in Corso",
        "ja-JP": "BAN中",
        "pl-PL": "Zawieszanie",
        "pt-BR": "Banindo",
        "ru-RU": "Блокирует",
        "zh-CN": "正在屏蔽",
        "zh-TW": "正在禁止"
    },
    {
        "opy": "Banned",
        "en-US": "Banned",
        "guid": "00000000C10A",
        "de-DE": "Gebannt",
        "es-ES": "Bloqueado",
        "es-MX": "Prohibido",
        "fr-FR": "Banni",
        "it-IT": "Sospeso",
        "ja-JP": "BANした",
        "pl-PL": "Zawieszono",
        "pt-BR": "Banido",
        "ru-RU": "Заблокирован",
        "zh-CN": "已屏蔽",
        "zh-TW": "被禁止"
    },
    {
        "opy": "Ban",
        "en-US": "Ban",
        "guid": "00000000C108",
        "de-DE": "Bannen",
        "es-ES": "Bloquear",
        "es-MX": "Prohibir",
        "fr-FR": "Bannir",
        "it-IT": "Sospendi",
        "ja-JP": "BAN",
        "pl-PL": "Zawieś",
        "pt-BR": "Banir",
        "ru-RU": "Блокировка",
        "zh-CN": "屏蔽",
        "zh-TW": "禁止"
    },
    {
        "opy": "Bad",
        "en-US": "Bad",
        "guid": "00000000C14D",
        "de-DE": "Schlecht",
        "es-ES": "Malo",
        "es-MX": "Malo",
        "fr-FR": "Mauvais",
        "it-IT": "Brutto",
        "ja-JP": "悪い",
        "pl-PL": "Źle",
        "pt-BR": "Ruim",
        "ru-RU": "Плохо",
        "zh-CN": "差",
        "zh-TW": "壞"
    },
    {
        "guid": "00000000C177",
        "opy": "Backward",
        "en-US": "Backward",
        "de-DE": "Rückwärts",
        "es-ES": "Hacia atrás",
        "es-MX": "Atrás",
        "fr-FR": "Arrière",
        "it-IT": "Indietro",
        "ja-JP": "後方",
        "pl-PL": "Do tyłu",
        "pt-BR": "Para Trás",
        "ru-RU": "Назад",
        "zh-CN": "后",
        "zh-TW": "後退"
    },
    {
        "opy": "Avoiding",
        "en-US": "Avoiding",
        "guid": "00000000C0A6",
        "de-DE": "Vermeidung",
        "es-ES": "Evitando",
        "es-MX": "Evitando",
        "fr-FR": "Évitement",
        "it-IT": "Evitamento in Corso",
        "ja-JP": "回避中",
        "pl-PL": "Unikanie",
        "pt-BR": "Evitando",
        "ru-RU": "Избегает",
        "zh-CN": "正在躲避",
        "zh-TW": "正在避開"
    },
    {
        "opy": "Avoided",
        "en-US": "Avoided",
        "guid": "00000000C0A7",
        "de-DE": "Gemieden",
        "es-ES": "Evitado",
        "es-MX": "Evitado",
        "fr-FR": "Évité",
        "it-IT": "Evitato",
        "ja-JP": "回避した",
        "pl-PL": "Uniknięto",
        "pt-BR": "Evitado",
        "ru-RU": "Избежал",
        "zh-CN": "已躲避",
        "zh-TW": "被避開"
    },
    {
        "opy": "Avoid",
        "en-US": "Avoid",
        "guid": "00000000C0A5",
        "de-DE": "Meiden",
        "es-ES": "Evitar",
        "es-MX": "Evitar",
        "fr-FR": "Éviter",
        "it-IT": "Evita",
        "ja-JP": "回避",
        "pl-PL": "Uniknij",
        "pt-BR": "Evitar",
        "ru-RU": "Избегание",
        "zh-CN": "躲避",
        "zh-TW": "避開"
    },
    {
        "guid": "00000000C14C",
        "opy": "Average",
        "en-US": "Average",
        "de-DE": "Durchschnitt",
        "es-ES": "Medio",
        "es-MX": "Promedio",
        "fr-FR": "Moyenne",
        "it-IT": "Medio",
        "ja-JP": "平均",
        "pl-PL": "Średnio",
        "pt-BR": "Médio",
        "ru-RU": "В среднем",
        "zh-CN": "平均",
        "zh-TW": "平均"
    },
    {
        "opy": "Attempts",
        "en-US": "Attempts",
        "guid": "00000000C00C",
        "de-DE": "Versuche",
        "es-ES": "Intentos",
        "es-MX": "Intentos",
        "fr-FR": "Tentatives",
        "it-IT": "Tentativi",
        "ja-JP": "挑戦",
        "pl-PL": "Próby",
        "pt-BR": "Tentativas",
        "ru-RU": "Попытки",
        "zh-CN": "尝试",
        "zh-TW": "機會"
    },
    {
        "opy": "Attempt",
        "en-US": "Attempt",
        "guid": "00000000C00D",
        "de-DE": "Versuch",
        "es-ES": "Intento",
        "es-MX": "Intento",
        "fr-FR": "Tentative",
        "it-IT": "Tentativo",
        "ja-JP": "挑戦",
        "pl-PL": "Próba",
        "pt-BR": "Tentativa",
        "ru-RU": "Попытка",
        "zh-CN": "尝试",
        "zh-TW": "機會"
    },
    {
        "opy": "Attacking",
        "en-US": "Attacking",
        "guid": "00000000C0AF",
        "de-DE": "Angriff",
        "es-ES": "Atacando",
        "es-MX": "Atacando",
        "fr-FR": "Attaque",
        "it-IT": "Attacco in Corso",
        "ja-JP": "攻撃中",
        "pl-PL": "Atakowanie",
        "pt-BR": "Atacando",
        "ru-RU": "Атакует",
        "zh-CN": "正在进攻",
        "zh-TW": "正在攻擊"
    },
    {
        "opy": "Attacked",
        "en-US": "Attacked",
        "guid": "00000000C0B0",
        "de-DE": "Angegriffen",
        "es-ES": "Atacado",
        "es-MX": "Atacado",
        "fr-FR": "Attaqué",
        "it-IT": "Attaccato",
        "ja-JP": "攻撃した",
        "pl-PL": "Zaatakowano",
        "pt-BR": "Atacado",
        "ru-RU": "Атакован",
        "zh-CN": "已进攻",
        "zh-TW": "被攻擊"
    },
    {
        "guid": "00000000C0AE",
        "opy": "Attack",
        "en-US": "Attack",
        "de-DE": "Angreifen",
        "es-ES": "Atacar",
        "es-MX": "Atacar",
        "fr-FR": "Attaquer",
        "it-IT": "Attacca",
        "ja-JP": "攻撃",
        "pl-PL": "Atakuj",
        "pt-BR": "Atacar",
        "ru-RU": "Атаковать",
        "zh-CN": "进攻",
        "zh-TW": "攻擊"
    },
    {
        "guid": "00000000C86A",
        "opy": "Angle",
        "en-US": "Angle",
        "de-DE": "Winkel",
        "es-ES": "Ángulo",
        "es-MX": "Ángulo",
        "it-IT": "Angolo",
        "ja-JP": "角度",
        "pl-PL": "Kąt",
        "pt-BR": "Ângulo",
        "ru-RU": "Угол",
        "zh-CN": "角度",
        "zh-TW": "角度"
    },
    {
        "opy": "Ammunition",
        "en-US": "Ammunition",
        "guid": "00000000C993",
        "de-DE": "Munition",
        "es-ES": "Munición",
        "es-MX": "Munición",
        "fr-FR": "Munitions",
        "it-IT": "Munizioni",
        "ja-JP": "矢/弾",
        "pl-PL": "Amunicja",
        "pt-BR": "Munição",
        "ru-RU": "Боеприпасы",
        "zh-CN": "弹药",
        "zh-TW": "彈藥"
    },
    {
        "opy": "Ally",
        "en-US": "Ally",
        "guid": "00000000BFD4",
        "de-DE": "Verbündeter",
        "es-ES": "Aliado",
        "es-MX": "Aliado",
        "fr-FR": "Allié",
        "it-IT": "Alleato",
        "ja-JP": "味方",
        "pl-PL": "Sojusznik",
        "pt-BR": "Aliado",
        "ru-RU": "Союзник",
        "zh-CN": "盟友",
        "zh-TW": "盟友"
    },
    {
        "opy": "Allies",
        "en-US": "Allies",
        "guid": "00000000BFC6",
        "de-DE": "Verbündete",
        "es-ES": "Aliados",
        "es-MX": "Aliados",
        "fr-FR": "Alliés",
        "it-IT": "Alleati",
        "ja-JP": "味方",
        "pl-PL": "Sojusznicy",
        "pt-BR": "Aliados",
        "ru-RU": "Союзники",
        "zh-CN": "盟友",
        "zh-TW": "盟友"
    },
    {
        "opy": "Alive",
        "en-US": "Alive",
        "guid": "00000000C130",
        "de-DE": "Lebendig",
        "es-ES": "Con vida",
        "es-MX": "Vivo",
        "fr-FR": "En vie",
        "it-IT": "Vivo",
        "ja-JP": "生存",
        "pl-PL": "Żyje",
        "pt-BR": "Vivo",
        "ru-RU": "В живых",
        "zh-CN": "存活",
        "zh-TW": "生存"
    },
    {
        "opy": "Alert",
        "en-US": "Alert",
        "guid": "00000000C15B",
        "de-DE": "Achtung",
        "es-ES": "Alerta",
        "es-MX": "Alerta",
        "fr-FR": "Alerte",
        "it-IT": "Allerta",
        "ja-JP": "注意",
        "pt-BR": "Alerta",
        "ru-RU": "Оповещение",
        "zh-CN": "警报",
        "zh-TW": "警報"
    },
    {
        "guid": "00000000BFF4",
        "opy": "Ability 2",
        "en-US": "Ability 2",
        "de-DE": "Fähigkeit 2",
        "es-ES": "Habilidad 2",
        "es-MX": "Habilidad 2",
        "fr-FR": "Capacité 2",
        "it-IT": "Abilità 2",
        "ja-JP": "アビリティ2",
        "pl-PL": "Zdolność 2",
        "pt-BR": "Habilidade 2",
        "ru-RU": "Способность 2",
        "zh-CN": "技能2",
        "zh-TW": "技能2"
    },
    {
        "guid": "00000000BFF7",
        "opy": "Ability 1",
        "en-US": "Ability 1",
        "de-DE": "Fähigkeit 1",
        "es-ES": "Habilidad 1",
        "es-MX": "Habilidad 1",
        "fr-FR": "Capacité 1",
        "it-IT": "Abilità 1",
        "ja-JP": "アビリティ1",
        "pl-PL": "Zdolność 1",
        "pt-BR": "Habilidade 1",
        "ru-RU": "Способность 1",
        "zh-CN": "技能1",
        "zh-TW": "技能1"
    },
    {
        "opy": "Ability",
        "en-US": "Ability",
        "guid": "00000000BFF6",
        "de-DE": "Fähigkeit",
        "es-ES": "Habilidad",
        "es-MX": "Habilidad",
        "fr-FR": "Capacité",
        "it-IT": "Abilità",
        "ja-JP": "アビリティ",
        "pl-PL": "Zdolność",
        "pt-BR": "Habilidade",
        "ru-RU": "Способность",
        "zh-CN": "技能",
        "zh-TW": "技能"
    },
    {
        "guid": "00000000BFF5",
        "opy": "Abilities",
        "en-US": "Abilities",
        "de-DE": "Fähigkeiten",
        "es-ES": "Habilidades",
        "es-MX": "Habilidades",
        "fr-FR": "Capacités",
        "it-IT": "Abilità",
        "ja-JP": "アビリティ",
        "pl-PL": "Zdolności",
        "pt-BR": "Habilidades",
        "ru-RU": "Способности",
        "zh-CN": "技能",
        "zh-TW": "技能"
    },
    {
        "opy": "???",
        "en-US": "???",
        "guid": "00000000BFE5",
        "ja-JP": "？？？",
        "zh-CN": "？？？"
    },
    {
        "opy": "??",
        "en-US": "??",
        "guid": "00000000BFE6",
        "ja-JP": "？？",
        "zh-CN": "？？"
    },
    {
        "guid": "00000000BFE7",
        "opy": "?",
        "en-US": "?",
        "ja-JP": "？",
        "zh-CN": "？"
    },
    {
        "opy": "...",
        "en-US": "...",
        "guid": "00000000BFC1",
        "fr-FR": "…",
        "ja-JP": "…",
        "zh-CN": "……"
    },
    {
        "opy": "----------",
        "en-US": "----------",
        "guid": "00000000BFC0"
    },
    {
        "guid": "00000000BFE8",
        "opy": "*",
        "en-US": "*"
    },
    {
        "opy": "!!!",
        "en-US": "!!!",
        "guid": "00000000BFE2",
        "ja-JP": "！！！",
        "zh-CN": "！！！"
    },
    {
        "opy": "!!",
        "en-US": "!!",
        "guid": "00000000BFE3",
        "ja-JP": "！！",
        "zh-CN": "！！"
    },
    {
        "guid": "00000000BFE4",
        "opy": "!",
        "en-US": "!",
        "ja-JP": "！",
        "zh-CN": "！"
    }
]
//end-json

var prefixStrKw = 
//begin-json
[
    {
        "opy": "#{0}",
        "en-US": "#{0}",
        "guid": "00000000BFC2"
    },
    {
        "opy": "-> {0}",
        "en-US": "-> {0}",
        "guid": "00000000BFB0"
    },
    {
        "opy": "<-> {0}",
        "en-US": "<-> {0}",
        "guid": "00000000BFAE"
    },
    {
        "opy": "<- {0}",
        "en-US": "<- {0}",
        "guid": "00000000BFAF"
    },
    {
        "opy": "Round {0}",
        "en-US": "Round {0}",
        "guid": "00000000C322",
        "de-DE": "Runde {0}",
        "es-ES": "Ronda {0}",
        "es-MX": "Ronda {0}",
        "fr-FR": "Manche {0}",
        "ja-JP": "ラウンド{0}",
        "pl-PL": "Runda {0}",
        "pt-BR": "Rodada {0}",
        "ru-RU": "{0}-й раунд",
        "zh-CN": "第{0}回合",
        "zh-TW": "第{0}回合"
    }
]
//end-json

var postfixStrKw = 
//begin-json
[
    {
        "opy": "{0} ->",
        "en-US": "{0} ->",
        "guid": "00000000BFAD"
    },
    {
        "opy": "{0} <->",
        "en-US": "{0} <->",
        "guid": "00000000BF99"
    },
    {
        "opy": "{0} <-",
        "en-US": "{0} <-",
        "guid": "00000000BFAC"
    },
    {
        "opy": "{0} m/s",
        "en-US": "{0} m/s",
        "guid": "00000000BFBF",
        "ja-JP": "{0}メートル/秒",
        "ru-RU": "{0} м/сек.",
        "zh-CN": "{0} 米/秒",
        "zh-TW": "{0}公尺/秒"
    },
    {
        "opy": "{0} m",
        "en-US": "{0} m",
        "guid": "00000000BFBE",
        "ja-JP": "{0}メートル",
        "ru-RU": "{0} м",
        "zh-CN": "{0} 米",
        "zh-TW": "{0}公尺"
    },
    {
        "opy": "{0} sec",
        "en-US": "{0} sec",
        "guid": "00000000BFC3",
        "de-DE": "{0} Sek.",
        "es-ES": "{0} s",
        "es-MX": "{0} seg.",
        "fr-FR": "{0} s",
        "it-IT": "{0} s",
        "ja-JP": "{0}秒",
        "pl-PL": "{0} sek.",
        "pt-BR": "{0} s",
        "ru-RU": "{0} сек.",
        "zh-CN": "{0}秒",
        "zh-TW": "{0}秒"
    },
    {
        "opy": "{0}!!!",
        "en-US": "{0}!!!",
        "guid": "00000000BF97",
        "es-ES": "¡¡¡{0}!!!",
        "fr-FR": "{0} !!!",
        "ja-JP": "{0}！！！",
        "zh-CN": "{0}！！！"
    },
    {
        "opy": "{0}!!",
        "en-US": "{0}!!",
        "guid": "00000000BF98",
        "es-ES": "¡¡{0}!!",
        "fr-FR": "{0} !!",
        "ja-JP": "{0}！！",
        "zh-CN": "{0}！！"
    },
    {
        "opy": "{0}!",
        "en-US": "{0}!",
        "guid": "00000000BFA5",
        "es-ES": "¡{0}!",
        "fr-FR": "{0} !",
        "ja-JP": "{0}！",
        "zh-CN": "{0}！"
    },
    {
        "guid": "00000000BFBC",
        "opy": "{0}%",
        "en-US": "{0}%",
        "fr-FR": "{0} %"
    },
    {
        "opy": "{0}:",
        "en-US": "{0}:",
        "guid": "00000000BA64",
        "fr-FR": "{0} :",
        "ja-JP": "{0}: "
    },
    {
        "opy": "{0}???",
        "en-US": "{0}???",
        "guid": "00000000BFA7",
        "es-ES": "¿¿¿{0}???",
        "fr-FR": "{0} ???",
        "ja-JP": "{0}？？？",
        "zh-CN": "{0}？？？"
    },
    {
        "opy": "{0}??",
        "en-US": "{0}??",
        "guid": "00000000BFA8",
        "es-ES": "¿¿{0}??",
        "fr-FR": "{0} ??",
        "ja-JP": "{0}？？",
        "zh-CN": "{0}？？"
    },
    {
        "opy": "{0}?",
        "en-US": "{0}?",
        "guid": "00000000BFAA",
        "es-ES": "¿{0}?",
        "fr-FR": "{0} ?",
        "ja-JP": "{0}？",
        "zh-CN": "{0}？"
    }
]
//end-json

var binaryStrKw = 
//begin-json
[
    {
        "opy": "{0} -> {1}",
        "en-US": "{0} -> {1}",
        "guid": "00000000BFB2"
    },
    {
        "opy": "{0} - {1}",
        "en-US": "{0} - {1}",
        "guid": "00000000BF9D"
    },
    {
        "opy": "{0} != {1}",
        "en-US": "{0} != {1}",
        "guid": "00000000BFA2"
    },
    {
        "opy": "{0} * {1}",
        "en-US": "{0} * {1}",
        "guid": "00000000BF9C"
    },
    {
        "opy": "{0} / {1}",
        "en-US": "{0} / {1}",
        "guid": "00000000BFBB"
    },
    {
        "opy": "{0} + {1}",
        "en-US": "{0} + {1}",
        "guid": "00000000BF9E"
    },
    {
        "opy": "{0} <-> {1}",
        "en-US": "{0} <-> {1}",
        "guid": "00000000BF9A"
    },
    {
        "opy": "{0} <- {1}",
        "en-US": "{0} <- {1}",
        "guid": "00000000BFB1"
    },
    {
        "opy": "{0} <= {1}",
        "en-US": "{0} <= {1}",
        "guid": "00000000BFA1"
    },
    {
        "opy": "{0} < {1}",
        "en-US": "{0} < {1}",
        "guid": "00000000BFA6"
    },
    {
        "opy": "{0} == {1}",
        "en-US": "{0} == {1}",
        "guid": "00000000BFA3"
    },
    {
        "opy": "{0} = {1}",
        "en-US": "{0} = {1}",
        "guid": "00000000BFA4"
    },
    {
        "opy": "{0} >= {1}",
        "en-US": "{0} >= {1}",
        "guid": "00000000BF9F"
    },
    {
        "opy": "{0} > {1}",
        "en-US": "{0} > {1}",
        "guid": "00000000BFA0"
    },
    {
        "opy": "{0} and {1}",
        "en-US": "{0} and {1}",
        "guid": "00000000BFB5",
        "de-DE": "{0} und {1}",
        "es-ES": "{0} y {1}",
        "es-MX": "{0} y {1}",
        "fr-FR": "{0} et {1}",
        "it-IT": "{0} e {1}",
        "ja-JP": "{0}と{1}",
        "pl-PL": "{0} i {1}",
        "pt-BR": "{0} e {1}",
        "ru-RU": "{0} и {1}",
        "zh-CN": "{0}和{1}",
        "zh-TW": "{0}以及{1}"
    },
    {
        "opy": "{0} vs {1}",
        "en-US": "{0} vs {1}",
        "guid": "00000000BFB4",
        "es-ES": "{0} contra {1}",
        "es-MX": "{0} vs. {1}",
        "ja-JP": "{0}対{1}",
        "pt-BR": "{0} vs. {1}",
        "ru-RU": "{0} х {1}",
        "zh-CN": "{0}对阵{1}"
    },
    {
        "opy": "{0}, {1}",
        "en-US": "{0}, {1}",
        "guid": "00000000BF9B",
        "ja-JP": "{0}、{1}",
        "zh-CN": "{0}，{1}"
    },
    {
        "opy": "{0}: {1}",
        "en-US": "{0}: {1}",
        "guid": "00000000BFB3",
        "fr-FR": "{0} : {1}",
        "zh-CN": "{0}：{1}"
    },
    {
        "opy": "{0}:{1}",
        "en-US": "{0}:{1}",
        "guid": "00000000BA63",
        "ja-JP": "{0}: {1}"
    },
    {
        "opy": "{0} {1}",
        "en-US": "{0} {1}",
        "guid": "00000000C43C"
    }
]
//end-json

var ternaryStrKw = 
//begin-json
[
    {
        "opy": "{0} - {1} - {2}",
        "en-US": "{0} - {1} - {2}",
        "guid": "00000000C5BA",
        "ru-RU": "{0} – {1} – {2}"
    },
    {
        "opy": "{0} : {1} : {2}",
        "en-US": "{0} : {1} : {2}",
        "guid": "00000000C5B9"
    },
    {
        "opy": "{0} {1} {2}",
        "en-US": "{0} {1} {2}",
        "guid": "00000000C5B8"
    },
    {
        "opy": "{0}, {1}, and {2}",
        "en-US": "{0}, {1}, and {2}",
        "guid": "00000000BFB6",
        "de-DE": "{0}, {1} und {2}",
        "es-ES": "{0}, {1} y {2}",
        "es-MX": "{0}, {1} y {2}",
        "fr-FR": "{0}, {1} et {2}",
        "it-IT": "{0}, {1}, e {2}",
        "ja-JP": "{0}、{1}、{2}",
        "pl-PL": "{0}, {1} i {2}",
        "pt-BR": "{0}, {1} e {2}",
        "ru-RU": "{0}, {1} и {2}",
        "zh-CN": "{0}，{1}和{2}",
        "zh-TW": "{0}, {1}, 以及{2}"
    },
    {
        "opy": "{0}: {1} and {2}",
        "en-US": "{0}: {1} and {2}",
        "guid": "00000000BFB7",
        "de-DE": "{0}: {1} und {2}",
        "es-ES": "{0}: {1} y {2}",
        "es-MX": "{0}: {1} y {2}",
        "fr-FR": "{0} : {1} et {2}",
        "it-IT": "{0}: {1} e {2}",
        "ja-JP": "{0}: {1}と{2}",
        "pl-PL": "{0}: {1} i {2}",
        "pt-BR": "{0}: {1} e {2}",
        "ru-RU": "{0}: {1} и {2}",
        "zh-CN": "{0}：{1}和{2}",
        "zh-TW": "{0}: {1} 以及{2}"
    }
]
//end-json

var surroundStrKw = 
//begin-json
[
    {
        "opy": "({0})",
        "en-US": "({0})",
        "guid": "00000000BFBD"
    },
    {
        "opy": "¡{0}!",
        "en-US": "¡{0}!",
        "guid": "00000000BFA9"
    },
    {
        "opy": "¿{0}?",
        "en-US": "¿{0}?",
        "guid": "00000000BFAB"
    }
]
//end-json

var stringKw = normalStrKw.concat(prefixStrKw).concat(postfixStrKw).concat(binaryStrKw).concat(ternaryStrKw).concat(surroundStrKw).concat(emptyStrKw);

/*for (var hero of getConstantKw("HERO CONSTANT")) {
	stringKw.push(hero.opy);
}*/

var strTokens = [];

//Generate string tokens
//normal strings
for (var j = 0; j < normalStrKw.length; j++) {
	strTokens.push(normalStrKw[j].opy.toLowerCase());
}

//prefix strings
for (var j = 0; j < prefixStrKw.length; j++) {
	strTokens.push(prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase());
}

//postfix strings
for (var j = 0; j < postfixStrKw.length; j++) {
	strTokens.push(postfixStrKw[j].opy.substring("{0}".length).toLowerCase());
}

//ternary strings
for (var j = 0; j < ternaryStrKw.length; j++) {
	strTokens.push(ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
	strTokens.push(ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase());
}

//binary strings
for (var j = 0; j < binaryStrKw.length; j++) {
	strTokens.push(binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
}


//surround strings
for (var j = 0; j < surroundStrKw.length; j++) {
	strTokens.push(surroundStrKw[j].opy[0].toLowerCase())
	strTokens.push(surroundStrKw[j].opy[surroundStrKw[j].opy.length-1].toLowerCase())
}

//heroes
for (var hero of getConstantKw("HERO CONSTANT")) {
	strTokens.push(hero.opy.toLowerCase().substring("Hero.".length));
}

//Sort reverse alphabetical order for greediness
strTokens = strTokens.sort().reverse();







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

//This file is only used for the vs code extension.

const specialFuncs = [
    //Special functions and built-in macros
    {
        opy: "chase",
        "description": "Gradually modifies the value of a variable (global or player) at a specific rate, or over time.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to modify gradually.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": "ANY",
                "default": "NUMBER"
            },
            {
                "name": "RATE OR DURATION",
                "description": "The amount of change that will happen to the variable's value each second, or the amount of time, in seconds, over which the variable's value will approach the destination.\n\nPut `rate=xxxx` or `duration=xxxx` as argument.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "CHASE RATE REEVALUATION",
                "default": "DESTINATION AND RATE"
            }
        ],
    },{
        opy: "stopChasingVariable",
        "description": "Stops an in-progress chase of a variable (global or player), leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to stop modifying.",
                "type": "VARIABLE",
                "default": "A"
            }
        ]
    },{
        opy: "getSign",
        "description": "Built-in macro for calculating the sign of a number. Resolves to `(((x)>0)-((x)<0))`. Returns -1, 0 or 1.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The number to calculate the sign of.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "math.pi",
        "description": "The number pi = 3.14159265359.",
        "args": null
    },{
        opy: "math.e",
        "description": "The number e = 2.71828182846.",
        "args": null
    },{
        opy: "wait",
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause. If omitted, defaults to 0.016.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart. If omitted, defaults to `Wait.IGNORE_CONDITION`.",
                "type": "WAIT BEHAVIOR",
                "default": "IGNORE CONDITION"
            }
        ]
    },
    {
        "opy": "localizedStr",
        "description": "Defines a localized string. The text inside the string is restricted to preset strings, and is translated according to the language of each player.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "STRING CONSTANT",
                "default": "HELLO"
            },
        ]
    },
    {
        opy: "raycast",
        description: 
`Defines a raycast to be then used with \`hasLoS()\`, \`getPlayerHit()\`, \`getNormal()\` or \`getHitPosition()\`.
For line of sight, the 3rd argument must be \`los=\` and the 4th and 5th arguments must be omitted.

Examples:
- \`raycast(A, B, include=C, exclude=D, includePlayerObjects=false).getHitPosition()\`
- \`raycast(A, B, los=BarrierLos.BLOCKED_BY_ALL_BARRIERS).hasLoS()\``,
        args: [
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
                "name": "include=players To Include",
                "description": "Which players can be hit by this ray cast. Note: if doing a line-of-sight check, use `los=BarrierLos.xxxx` instead.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "exclude=players To Exclude",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "include Player Objects=bool",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ]
    },{
        opy: "all",
        "description": "Whether the specified condition evaluates to true for every value in the specified iterable. Requires a condition.\n\nExample: `all(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "ITERABLE",
                "default": "GLOBAL VARIABLE"
            },
        ]
    },{
        opy: "any",
        "description": "Whether the specified condition evaluates to true for any value in the specified iterable. Requires a condition.\n\nExample: `any(player for player in getAllPlayers() if player.A == 2)`",
        "args": [
            {
                "name": "iterable",
                "description": "The iterable whose values will be considered.",
                "type": "ITERABLE",
                "default": "GLOBAL VARIABLE"
            },
        ]
    },{
        opy: "floor",
        "description": "The integer that is the floor of the specified value (equivalent to rounding down).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the floor of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "round",
        "description": "The integer that is closest to the specified value (equivalent to rounding to nearest).\n\nTo round up or down, use `ceil()` or `floor()`.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the nearest integer of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "ceil",
        "description": "The integer that is the ceiling of the specified value (equivalent to rounding up).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the ceiling of.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
        ],
    },{
        opy: "sorted",
        "description": "A copy of the specified array with the values sorted according to the lambda function that is evaluated for each element.\n\nExample: `sorted(getAllPlayers(), key=lambda x: x.getScore())`",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "key=lambda",
                "description": "The lambda function that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Can be omitted if the array is sorted without a special key (equivalent to `lambda x: x`).",
                "type": "LAMBDA",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ]
    },{
        opy: "getAllPlayers",
        description: "Built-in macro for `getPlayers(Team.ALL)`.",
        args: [],
    },{
        opy: "hudText",
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.\n\nNote: you can use the macros `hudHeader`, `hudSubheader` and `hudSubtext` to reduce the number of arguments.",
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
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],

    },{
        opy: "debug",
        description: "Creates an orange HUD text at the top left. Should be used for quick debugging of a value.",
        args: [
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "ANY",
                "default": "STRING"
            },
        ]
    },{
        opy: "hudHeader",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
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
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudSubtext",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBTEXT",
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
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "hudSubheader",
        description: "Built-in macro for `hudText` to reduce the number of arguments.",
        args: [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
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
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "COLOR",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HUD TEXT REEVALUATION",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SPECTATOR VISIBILITY",
                "default": "DEFAULT VISIBILITY"
            }
        ],
    },{
        opy: "RULE_CONDITION",
        "description": 
`Equivalent to true if every condition in the rule is true. Can only be used in the following cases:

- \`while RULE_CONDITION\`
- \`while not RULE_CONDITION\`
- \`if RULE_CONDITION: continue\`
- \`if not RULE_CONDITION: continue\`
- \`if RULE_CONDITION: abort\`
- \`if not RULE_CONDITION: abort\``,
        "args": null
    }
];

const specialMemberFuncs = [
    
    {
        opy: "append",
        "description": "Appends the specified value to the specified array. Note that this function is really the equivalent of `extend()`, that is, `[1,2].append([3,4])` will produce `[1,2,3,4]` instead of `[1,2,[3,4]]`. If used without an assignment, modifies the array in-place.\n\nExample: `A.append(3)`",
        "args": [
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "ANY",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "slice",
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
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
    },{
        opy: "index",
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ]
    },{
        opy: "hasLoS",
        description: "Whether the start and end position of a raycast have line of sight with each other.",
        args: [],
    },{
        opy: "getNormal",
        description: "The surface normal at the raycast hit position (or from end pos to start pos if no hit occurs).",
        args: [],
    },{
        opy: "getPlayerHit",
        description: "The player hit by the raycast (or null if no player is hit).",
        args: [],
    },{
        opy: "getHitPosition",
        description: "The position where the raycast hits a surface, object, or player (or the end pos if no hit occurs).",
        args: [],
    }
];

const preprocessingDirectives = [
    {
        opy: "define",
        description:
`Creates a macro, like in C/C++. Macros must be defined before any code. Examples:

    #!define currentSectionWalls A
    #!define GAME_NOT_STARTED 3\`

Function macros are supported as well:

    #!define getFirstAvailableMei() [player for player in getPlayers(Team.2) if not player.isFighting][0]
    #!define spawnMei(type, location) \
    getFirstAvailableMei().meiType = type\
    wait(0.1)\
    getFirstAvailableMei().teleport(location)\
    getFirstAvailableMei().isFighting = true

Note the usage of the backslashed lines.

JS scripts can be inserted with the special __script__ function:

    #!define addFive(x) __script__("addfive.js")

where the \`addfive.js\` script contains \`x+5\` (no \`return\`).

Arguments of JS scripts are inserted automatically at the beginning (so \`addFive(123)\` would cause \`var x = 123;\` to be inserted). The script is then evaluated using \`eval()\`.

A \`vect()\` function is also inserted, so that \`vect(1,2,3)\` returns an object with the correct properties and \`toString()\` function.

When resolving the macro, the indentation on the macro call is prepended to each line of the replacement.
`
    },{
        opy: "defineMember",
        description: "Same as the `#!define` directive, but tells the VS Code extension to include this macro in the member autocompletion."
    },{
        opy: "obfuscate",
        description:
`Obfuscates the resulting code. This directive assumes all your code is in the overpy file, meaning you should not combine the generated code with code that is only in the workshop GUI.

Usage of this directive will result in a size increase, and a very low performance decrease, but should not in any case alter how the existing code functions. (if it does, please report that as a bug)

The following obfuscation methods are applied:

- Rule filling: several empty rules are inserted.
- Comment removing: all rule titles are replaced with the empty string.
- Variable barcoding: all variable names are replaced with a combination of capital i and lowercase L.
- Character replacement: characters in custom strings are replaced with special characters that display in Overwatch, but not text editors.
`
    },{
        opy: "noEdit",
        description:
`Adds 2500 empty rules to the preset, which should make it absolutely impossible to open the rules (as you get a "connection lost" error). Therefore, it is the ultimate form of obfuscation, as you simply cannot even see the code.

However, pasting the generated code could trigger a "connection lost" error as well, and a huge lag. As such, this directive should only be used on finalized gamemodes, before you publish it; it should not be used every time.

You will very likely have to paste the generated code in an editor, then paste the rules by sets of 800, 1200 then 500 to be able to insert them.
`
    },{
        opy: "declareGlobal",
        description:
`Declares a global variable. The index (0-127) must be specified. Example:

    #!declareGlobal myVar 127
`
    },{
        opy: "declarePlayer",
        description:
`Declares a player variable. The index (0-127) must be specified. Example:

    #!declarePlayer myVar 127
`
    },{
        opy: "suppressWarnings",
        description: "Suppresses the specified warnings globally across the program. Warnings must be separated by a space."
    },{
        opy: "mainFile",
        description: "Specifies an .opy file as the main file (implying the current file is a module). This directive MUST be placed at the very beginning of the file."
    }
]

module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
    decompileConditions: decompileConditions,
	compile: compile,
	actionKw: actionKw,
	valueFuncKw: valueFuncKw,
	constantValues: constantValues,
	eventKw: eventKw,
	eventTeamKw: eventTeamKw,
	eventSlotKw: eventSlotKw,
	eventPlayerKw: eventPlayerKw,
	ruleKw: ruleKw,
	stringKw: stringKw,
	specialFuncs: specialFuncs,
	specialMemberFuncs: specialMemberFuncs,
	currentLanguage: currentLanguage,
	macros: macros,
	resetGlobalVariables: resetGlobalVariables,
	preprocessingDirectives: preprocessingDirectives,

};
