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
        "opy": "_callSubroutine",
        "description": "Pauses execution of the current rule and begins executing a subroutine rule (which is a rule with a subroutine event type). When the subroutine rule finishes, the original rule resumes execution. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        "args": [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to call. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "SUBROUTINE",
                "default": "Sub0",
            }
        ],
        "en-US": "Call Subroutine",
        "es-MX": "Llamada a subrutina",
        "fr-FR": "Sous-programme à appeler",
        "ja-JP": "サブルーチンの呼び出し",
        "pl-PL": "Wywołaj podprogram",
        "pt-BR": "Chamar sub-rotina",
        "zh-CN": "调用子程序",
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
        "opy": "destroyAllDummies",
        "description": "Removes all dummy bots from the match.",
        "args": [],
        "en-US": "Destroy All Dummy Bots",
        "guid": "00000000D1D4",
        "es-MX": "Destruir todos los robots de entrenamiento",
        "fr-FR": "Détruire toutes les I.A.",
        "ja-JP": "すべてのダミーボットを破棄",
        "pt-BR": "Destruir Todos os Bots",
        "zh-CN": "移除所有机器人"
    },
    {
        "opy": "destroyAllEffects",
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
        "opy": "destroyAllHudTexts",
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
        "opy": "destroyAllIcons",
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
        "opy": "destroyAllInWorldText",
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
        "opy": "disableAnnouncer",
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
        "opy": "disableGamemodeCompletion",
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
        "opy": "disableMusic",
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
        "opy": "disableScoring",
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
        "opy": "disableInspector",
        "description": "Causes the workshop inspector to stop recording new entries. This has the benefit of reducing your script's server load, particularly when modifying arrays.",
        "args": [],
        "en-US": "Disable Inspector Recording",
        "es-MX": "Desactivar registro de Inspector",
        "fr-FR": "Désactiver l’enregistrement du contrôleur",
        "ja-JP": "インスペクターでの記録を無効化",
        "pl-PL": "Wyłącz nagrywanie Inspektora",
        "pt-BR": "Desativar gravação do Inspetor",
        "zh-CN": "禁用查看器录制"
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
        "opy": "__else__",
        "description": "Denotes the beginning of a series of actions that will only execute if the previous If or Else If action's condition was false.",
        "args": [],
        "en-US": "Else",
        "es-MX": "Si no",
        "fr-FR": "Sinon",
        "pl-PL": "Inaczej",
    },
    {
        "opy": "__elif__",
        "description": "Denotes the beginning of a series of actions that will only execute if the specified condition is true and the previous If or Else If action's condition was false.",
        "args": [
            {
                "name": "CONDITION",
                "description": "If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next else if, else, or end action at the current level.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ],
        "en-US": "Else If",
        "es-MX": "Si no si",
        "fr-FR": "Sinon Si",
        "pl-PL": "Inaczej jeśli",
    },
    {
        "opy": "enableAnnouncer",
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
        "opy": "enableGamemodeCompletion",
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
        "opy": "enableMusic",
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
        "opy": "enableScoring",
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
        "opy": "enableInspector",
        "description": "Causes the workshop inspector to resume recording new entries (in case it had been disabled earlier). Enabling recording at specific times may make it easier to debug problematic areas in your logic.",
        "args": [],
        "en-US": "Enable Inspector Recording",
        "es-MX": "Activar registro de Inspector",
        "fr-FR": "Activer l’enregistrement du contrôleur",
        "ja-JP": "インスペクターでの記録を有効化",
        "pl-PL": "Włącz nagrywanie Inspektora",
        "pt-BR": "Ativar gravação do Inspetor",
        "zh-CN": "启用查看器录制"
    },
    {
        "opy": "__end__",
        "description": "Denotes the end of a series of actions started by an if, else if, else, while, or for action.",
        "args": [],
        "en-US": "End",
        "es-MX": "Fin",
        "fr-FR": "Fin",
        "ja-JP": "終了",
        "pt-BR": "Término",
    },
    {
        "opy": "_forGlobalVar",
        "description": "Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.",
        "args": [
            {
                "name": "CONTROL VARIABLE",
                "description": "The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "RANGE START",
                "description": "The control variable is set to this value when the loop begins.",
                "type": "NUMBER",
                "default": "NUMBER",
            },{
                "name": "RANGE STOP",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "NUMBER",
                "default": "COUNT OF",
            },{
                "name": "STEP",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.",
                "type": "NUMBER",
                "default": "NUMBER",
            }
        ],
        "en-US": "For Global Variable",
        "es-MX": "Para variable global",
        "fr-FR": "Pour variable globale",
        "ja-JP": "グローバル変数",
        "pt-BR": "For variável global",
        "zh-CN": "For 全局变量"
    },
    {
        "opy": "_forPlayerVar",
        "description": "Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.",
        "args": [
            {
                "name": "CONTROL PLAYER",
                "description": "The player whose variable is being modified in this loop. If multiple players are specified, the first player is used.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "CONTROL VARIABLE",
                "description": "The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.",
                "type": "VARIABLE",
                "default": "A"
            },
            {
                "name": "RANGE START",
                "description": "The control variable is set to this value when the loop begins.",
                "type": "NUMBER",
                "default": "NUMBER",
            },{
                "name": "RANGE STOP",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "NUMBER",
                "default": "COUNT OF",
            },{
                "name": "STEP",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.",
                "type": "NUMBER",
                "default": "NUMBER",
            }
        ],
        "en-US": "For Player Variable",
        "es-MX": "Para variable de jugador",
        "fr-FR": "Pour variable de joueur",
        "ja-JP": "プレイヤー変数",
        "pt-BR": "For variável de jogador",
        "zh-CN": "For 玩家变量"
    },
    {
        "opy": "goToAssembleHeroes",
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
        "opy": "__if__",
        "description": "Denotes the beginning of a series of actions that will only execute if the specified condition is true.",
        "args": [
            {
                "name": "CONDITION",
                "description": "If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next else if, else, or end action at the current level.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ],
        "en-US": "If",
        "es-MX": "Si",
        "fr-FR": "Si",
        "pl-PL": "Jeśli",
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
        "opy": "pauseMatchTime",
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
        "opy": "startHealingModification",
        "description": "Starts modifying how much healing one or more receivers will receive from one or more healers. A reference to this healing modification can be obtained from the last healing modification id value. This action will fail if too many healing modifications have been started.",
        "args": [
            {
                "name": "RECEIVERS",
                "description": "The player or players whose incoming healing will be modified (when healed by the healers).",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALERS",
                "description": "The player or players whose outgoing healing will be modified (when healing the receivers).",
                "type": "PLAYER",
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEALING PERCENT",
                "description": "The percentage of healing that will apply to receivers when healed by healers.",
                "type": "NUMBER",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "HEALING MODIFICATION REEVALUATION",
                "default": "RECEIVERS, HEALERS, AND HEALING PERCENT"
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
        "opy": "_startRule",
        "description": "Begins simultaneous execution of a subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        "args": [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "SUBROUTINE",
                "default": "Sub0",
            },{
                "name": "IF ALREADY EXECUTING",
                "description": "Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.",
                "type": "START RULE BEHAVIOR",
                "default": "RESTART RULE",
            }
        ],
        "en-US": "Start Rule",
        "es-MX": "Comenzar regla",
        "fr-FR": "Lancer la règle",
        "ja-JP": "ルールを開始",
        "pt-BR": "Regra de início",
        "zh-CN": "开始规则"
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
        "opy": "stopAllDamageModifications",
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
        "opy": "stopAllHealingModifications",
        "description": "Stops all healing modifications that were started using the start healing modification action.",
        "args": [],
        "en-US": "Stop All Healing Modifications",
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
        "opy": "stopHealingModification",
        "description": "Stops a healing modification that was started by the start healing modification action.",
        "args": [
            {
                "name": "HEALING MODIFICATION ID",
                "description": "Specifies which healing modification instance to stop. This id may be last healing modification id or a variable into which last healing modification id was earlier stored.",
                "type": "NUMBER",
                "default": "LAST HEALING MODIFICATION ID"
            }
        ],
        "en-US": "Stop Healing Modification",
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
        "opy": "unpauseMatchTime",
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
    },
    {
        "opy": "__while__",
        "description": "Denotes the beginning of a series of actions that will execute in a loop as long as the specified condition is true. The next end action at the current level denotes the end of the loop. If the condition evaluates to false when execution is at the top of the loop, then the loop exits, and execution jumps to the next action after the end action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next end action at the current level.",
                "type": "BOOLEAN",
                "default": "COMPARE"
            }
        ],
        "en-US": "While",
        "es-MX": "Mientras",
        "fr-FR": "Tant que",
        "pl-PL": "Kiedy",
    }
]
//end-json






















