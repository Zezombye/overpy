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
        "fr": "Interrompre",
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
        "fr": "InterrompreSi",
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
        "fr": "InterrompreSiLaConditionEstFausse",
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
        "fr": "InterrompreSiLaConditionEstVraie",
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
        "fr": "AutoriserUnBouton",
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
        "fr": "AppliquerUneImpulsion",
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
        "fr": "MessageEnGrand",
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
        "fr": "ModifierUneVariableGlobaleSelonUneCadence",
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
        "fr": "ModifierUneVariableGlobaleSurLaDurée",
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
        "fr": "ModifierUneVariableDeJoueurSelonUneCadence",
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
        "fr": "ModifierUneVariableDeJoueurSurLaDurée",
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
        "fr": "EffacerLeStatut",
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
        "fr": "Communiquer",
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
        "fr": "CréerUnEffetDeRayon",
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
        "fr": "CréerUnBot",
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
        "fr-FR": "Créer un bot",
        "it-IT": "Crea bot di prova",
        "ja-JP": "ダミーボットを作成",
        "pl-PL": "Stwórz atrapę bota",
        "pt-BR": "Criar Bot",
        "zh-CN": "生成机器人"
    },
    {
        "opy": "createEffect",
        "fr": "CréerUnEffet",
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
        "fr": "CréerDuTexteD’interface",
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
        "fr": "CréerUneIcône",
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
        "fr": "CréerDuTexteEnJeu",
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
        "fr": "InfligerDesDégâts",
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
        "fr": "DéclarerLeMatchNul",
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
        "fr": "DéclarerLaVictoireD’unJoueur",
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
        "fr": "DéclarerLaVictoireDeLaManche",
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
        "fr": "DéclarerLaVictoireD’uneéquipe",
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
        "fr": "DétruireTousLesBots",
        "description": "Removes all dummy bots from the match.",
        "args": [],
        "en-US": "Destroy All Dummy Bots",
        "guid": "00000000D1D4",
        "es-MX": "Destruir todos los robots de entrenamiento",
        "fr-FR": "Détruire tous les bots",
        "it-IT": "Distrugge tutti i bot di prova.",
        "ja-JP": "すべてのダミーボットを破棄",
        "pt-BR": "Destruir Todos os Bots",
        "zh-CN": "移除所有机器人"
    },
    {
        "opy": "destroyAllEffects()",
        "fr": "DétruireTousLesEffets",
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
        "fr": "DétruireTousLesTextesD’interface",
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
        "fr": "DétruireToutesLesIcônes",
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
        "fr": "DétruireTousLesTextesEnJeu",
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
        "fr": "DétruireUnBot",
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
        "fr-FR": "Détruire un bot",
        "it-IT": "Distruggi bot di prova",
        "ja-JP": "ダミーボットを破壊する",
        "pl-PL": "Zniszcz atrapę bota",
        "pt-BR": "Destruir Bot",
        "zh-CN": "移除机器人"
    },
    {
        "opy": "destroyEffect",
        "fr": "DétruireUnEffet",
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
        "fr": "DétruireDuTexteD’interface",
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
        "fr": "DétruireUneIcône",
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
        "fr": "DétruireDuTexteEnJeu",
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
        "fr": "DésactiverL’annonceurPrédéfiniParLeModeDeJeu",
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
        "fr": "DésactiverL’accomplissementPrédéfiniParLeModeDeJeu",
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
        "fr": "DésactiverLaMusiquePrédéfinieParLeModeDeJeu",
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
        "fr": "DésactiverLaRéapparitionPrédéfinieParLeModeDeJeu",
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
        "fr": "DésactiverLeCalculDesPointsPrédéfiniParLeModeDeJeu",
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
        "fr": "EmpêcherD’observerN’importeQuiAprèsLaMort",
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
        "fr": "EmpêcherDeVoirL’interfaceDeLaCibleAprèsLaMort",
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
        "fr": "InterdireLeBouton",
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
        "fr": "ActiverL’annonceurPrédéfiniParLeModeDeJeu",
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
        "fr": "ActiverL’accomplissementPrédéfiniParLeModeDeJeu",
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
        "fr": "ActiverLaMusiquePrédéfinieParLeModeDeJeu",
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
        "fr": "ActiverLaRéapparitionPrédéfinieParLeModeDeJeu",
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
        "fr": "ActiverLeCalculDesPointsPrédéfiniParLeModeDeJeu",
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
        "fr": "PermettreD’observerN’importeQuiAprèsLaMort",
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
        "fr": "PermettreDeVoirL’interfaceDeLaCibleAprèsLaMort",
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
        "fr": "AlleràChoisissezVosHéros",
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
        "fr": "Soigner",
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
        "fr": "Tuer",
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
        "fr": "Boucle",
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
        "fr": "BoucleSi",
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
        "fr": "BoucleSiLaConditionEstFausse",
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
        "fr": "BoucleSiLaConditionEstVraie",
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
        "fr": "ModifierUneVariableGlobale",
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
        "fr": "ModifierUneVariableGlobaleàL’index",
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
        "fr": "ModifierLeScoreD’unJoueur",
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
        "fr": "ModifierUneVariableDeJoueur",
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
        "fr": "ModifierUneVariableDeJoueuràL’index",
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
        "fr": "ModifierLeScoreDeL’équipe",
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
        "fr": "MettreEnPauseLeTempsDeJeu",
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
        "fr": "JouerUnEffet",
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
        "fr": "PréchargerUnHéros",
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
        "fr": "AppuyerSurUnBouton",
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
        "fr": "RéinitialiserLaDisponibilitéDuHérosPourUnJoueur",
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
        "fr": "Réapparaître",
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
        "fr": "Ressusciter",
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
        "fr": "DéfinirL’activationDeLaCapacité1",
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
        "fr": "DéfinirL’activationDeLaCapacité2",
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
        "fr": "DéfinirLaVitesseDeVisée",
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
        "fr": "DéfinirLesDégâtsInfligés",
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
        "fr": "DéfinirLesDégâtsSubis",
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
        "fr": "DéfinirLaDirectionDuRegard",
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
        "fr": "DéfinirUneVariableGlobale",
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
        "fr": "DéfinirUneVariableGlobaleàL’index",
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
        "fr": "DéfinirLaGravité",
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
        "fr": "DéfinirLesSoinsProdigués",
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
        "fr": "DéfinirLesSoinsReçus",
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
        "fr": "DéfinirL’invisibilité",
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
        "fr": "DéfinirLeTempsDeJeu",
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
        "fr": "DéfinirLesPointsDeVieMaximum",
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
        "fr": "DéfinirLaVitesseDeDéplacement",
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
        "fr": "DéfinirLaDescriptionD’objectif",
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
        "fr": "DéfinirLesHérosAutorisésPourUnJoueur",
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
        "fr": "DéfinirLeScoreD’unJoueur",
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
        "fr": "DéfinirUneVariableDeJoueur",
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
        "fr": "DéfinirUneVariableDeJoueuràL’index",
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
        "fr": "DéfinirL’activationDuTirPrincipal",
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
        "fr": "DéfinirLaGravitéDesProjectiles",
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
        "fr": "DéfinirLaVitesseDesProjectiles",
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
        "fr": "DéfinirLaDuréeMaximumAvantRéapparition",
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
        "fr": "DéfinirL’activationDuTirSecondaire",
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
        "fr": "DéfinirUnRalenti",
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
        "fr": "DéfinirUnStatut",
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
        "fr": "DéfinirLeScoreD’uneéquipe",
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
        "fr": "DéfinirL’activationDeLaCapacitéUltime",
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
        "fr": "DéfinirLaChargeDeLaCapacitéUltime",
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
        "fr": "Passer",
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
        "fr": "PasserSi",
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
        "fr": "MessageEnPetit",
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
        "fr": "Accélérer",
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
        "fr": "LancerLaCaméra",
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
        "fr": "LancerLaModificationDesDégâts",
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
        "fr": "InfligerDesDégâtsSurLaDurée",
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
        "fr": "RegarderVers",
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
        "fr": "ForcerUnHéros",
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
        "fr": "ForcerUneSalleD’apparition",
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
        "fr": "ForcerL’accélération",
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
        "fr": "ProdiguerDesSoinsSurLaDurée",
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
        "fr": "MaintenirUnBoutonEnfoncé",
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
        "fr": "CommencerL’accélérationDirectionnelle",
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
        "fr": "DébutDeModificationDeL’accélération",
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
        "fr": "ArrêterL’accélération",
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
        "fr": "ArrêterToutesLesModificationsDeDégâts",
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
        "fr": "ArrêterTousLesDégâtsSurLaDurée",
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
        "fr": "ArrêterTousLesSoinsSurLaDurée",
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
        "fr": "ArrêterLaCaméra",
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
        "fr": "ArrêterDeModifierUneVariableGlobale",
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
        "fr": "ArrêterDeModifierUneVariableDeJoueur",
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
        "fr": "ArrêterLaModificationDesDégâts",
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
        "fr": "ArrêterDesDégâtsSurLaDurée",
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
        "fr": "ArrêterDeRegarderVers",
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
        "fr": "ArrêterDeForcerUnHéros",
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
        "fr": "ArrêterDeForcerUneSalleD’apparition",
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
        "fr": "ArrêterDeForcerL’accélération",
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
        "fr": "ArrêterDesSoinsSurLaDurée",
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
        "fr": "ArrêterDeMaintenirUnBoutonEnfoncé",
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
        "fr": "ArrêterL’accélérationDirectionnelle",
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
        "fr": "ArrêtDeModificationDeL’accélération",
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
        "fr": "Téléportation",
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
        "fr": "ReprendreLeTempsDeJeu",
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
        "fr": "Attente",
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
        "fr": "ValeurAbsolue",
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Absolute Value"
    },
    {
        "opy": "_add",
        "fr": "Addition",
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
        "en-US": "Add"
    },
    {
        "opy": "getDeadPlayers",
        "fr": "TousLesJoueursMorts",
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Dead Players"
    },
    {
        "opy": "getDamageHeroes()",
        "fr": "todo",
        "description": "The array of all damage heroes in overwatch. The order is as follows:\n        \n        0. Reaper\n        1. Tracer\n        2. Hanzo\n        3. Torbjorn\n        4. Pharah\n        5. Widowmaker\n        6. Bastion\n        7. Symmetra\n        8. Genji\n        9. Mccree\n        10. Junkrat\n        11. Soldier\n        12. Mei\n        13. Sombra\n        14. Doomfist\n        15. Ashe  \n        ",
        "args": [],
        "en-US": "All Damage Heroes"
    },
    {
        "opy": "getAllHeroes()",
        "fr": "TousLesHéros",
        "description": "The array of all heroes in overwatch. The order is as follows:\n        \n        0. Reaper   \n        1. Tracer   \n        2. Mercy    \n        3. Hanzo    \n        4. Torbjorn \n        5. Reinhardt\n        6. Pharah   \n        7. Winston  \n        8. Widowmaker\n        9. Bastion  \n        10. Symmetra \n        11. Zenyatta \n        12. Genji    \n        13. Roadhog  \n        14. McCree   \n        15. Junkrat  \n        16. Zarya    \n        17. Soldier  \n        18. Lucio    \n        19. Dva      \n        20. Mei      \n        21. Sombra   \n        22. Doomfist \n        23. Ana      \n        24. Orisa    \n        25. Brigitte \n        26. Moira    \n        27. Hammond  \n        28. Ashe     \n        29. Baptiste \n        30. Sigma    \n        ",
        "args": [],
        "en-US": "All Heroes"
    },
    {
        "opy": "getLivingPlayers",
        "fr": "TousLesJoueursEnVie",
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Living Players"
    },
    {
        "opy": "getPlayers",
        "fr": "TousLesJoueurs",
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Players"
    },
    {
        "opy": "getPlayersNotOnObjective",
        "fr": "TousLesJoueurséloignésDeL’objectif",
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Players Not On Objective"
    },
    {
        "opy": "getPlayersOnObjective",
        "fr": "TousLesJoueursSurL’objectif",
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "All Players On Objective"
    },
    {
        "opy": "_&getAllowedHeroes",
        "fr": "HérosAutorisés",
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Allowed Heroes"
    },
    {
        "opy": "getSupportHeroes()",
        "fr": "todo",
        "description": "The array of all support heroes in overwatch. The order is as follows:\n        \n        0. Mercy\n        1. Zenyatta\n        2. Lucio\n        3. Ana\n        4. Brigitte\n        5. Moira\n        6. Baptiste    \n        ",
        "args": [],
        "en-US": "All Support Heroes"
    },
    {
        "opy": "getTankHeroes()",
        "fr": "todo",
        "description": "The array of all tank heroes in overwatch. The order is as follows:\n        \n        0. Reinhardt\n        1. Winston\n        2. Roadhog\n        3. Zarya\n        4. Dva\n        5. Orisa\n        6. Hammond\n        7. Sigma    \n        ",
        "args": [],
        "en-US": "All Tank Heroes"
    },
    {
        "opy": "_&getAltitude",
        "fr": "AltitudeDe",
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Altitude Of"
    },
    {
        "opy": "_and",
        "fr": "Et",
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
        "en-US": "And"
    },
    {
        "opy": "angleDifference",
        "fr": "DifférenceEntreAngles",
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
        "en-US": "Angle Difference"
    },
    {
        "opy": "_appendToArray",
        "fr": "AjouterAuTableau",
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
        "en-US": "Append To Array"
    },
    {
        "opy": "acosDeg",
        "fr": "todo",
        "description": "Arccosine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arccosine In Degrees"
    },
    {
        "opy": "acos",
        "fr": "todo",
        "description": "Arccosine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arccosine In Radians"
    },
    {
        "opy": "asinDeg",
        "fr": "todo",
        "description": "Arcsine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arcsine In Degrees"
    },
    {
        "opy": "asin",
        "fr": "todo",
        "description": "Arcsine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Arcsine In Radians"
    },
    {
        "opy": "atan2Deg",
        "fr": "todo",
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
        "en-US": "Arctangent In Degrees"
    },
    {
        "opy": "atan2",
        "fr": "todo",
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
        "en-US": "Arctangent In Radians"
    },
    {
        "opy": "_arrayContains",
        "fr": "ContenuDuTableau",
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
        "en-US": "Array Contains"
    },
    {
        "opy": "_arraySlice",
        "fr": "SectionDeTableau",
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
        "en-US": "Array Slice"
    },
    {
        "opy": "attacker",
        "fr": "Attaquant",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null,
        "en-US": "Attacker"
    },
    {
        "opy": "Vector.BACKWARD",
        "fr": "Arrière",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null,
        "en-US": "Backward"
    },
    {
        "opy": "getClosestPlayer",
        "fr": "JoueurLePlusProcheDe",
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
        "en-US": "Closest Player To"
    },
    {
        "opy": "_compare",
        "fr": "Comparer",
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
        "en-US": "Compare"
    },
    {
        "opy": "getControlScorePercentage",
        "fr": "PourcentageDuScoreEnModeContrôle",
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Control Mode Scoring Percentage"
    },
    {
        "opy": "getControlScoringTeam",
        "fr": "ÉquipeContrôlantLePointEnModeContrôle",
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": [],
        "en-US": "Control Mode Scoring Team"
    },
    {
        "opy": "cosDeg",
        "fr": "CosinusEnDegrés",
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Cosine From Degrees"
    },
    {
        "opy": "cos",
        "fr": "CosinusEnRadians",
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Cosine From Radians"
    },
    {
        "opy": "len",
        "fr": "DécompteDe",
        "description": "The number of elements in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Count Of"
    },
    {
        "opy": "crossProduct",
        "fr": "ProduitCroisé",
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
        "en-US": "Cross Product"
    },
    {
        "opy": "_currentArrayElement",
        "fr": "ÉlémentDeTableauActuel",
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "en-US": "Current Array Element"
    },
    {
        "opy": "getCurrentGamemode()",
        "description": "The current game mode of the custom game.",
        "args": [],
        "en-US": "Current Game Mode"
    },
    {
        "opy": "getCurrentMap()",
        "description": "The current map of the custom game.",
        "args": [],
        "en-US": "Current Map"
    },
    {
        "opy": "_customString",
        "fr": "todo",
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
        "en-US": "Custom String"
    },
    {
        "opy": "angleToDirection",
        "fr": "DirectionDepuisDesAngles",
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
        "en-US": "Direction From Angles"
    },
    {
        "opy": "directionTowards",
        "fr": "Direction",
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
        "en-US": "Direction Towards"
    },
    {
        "opy": "distance",
        "fr": "DistanceEntre",
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
        "en-US": "Distance Between"
    },
    {
        "opy": "_divide",
        "fr": "Division",
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
        "en-US": "Divide"
    },
    {
        "opy": "dotProduct",
        "fr": "ProduitScalaire",
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
        "en-US": "Dot Product"
    },
    {
        "opy": "Vector.DOWN",
        "fr": "Bas",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null,
        "en-US": "Down"
    },
    {
        "opy": "_emptyArray",
        "fr": "TableauVide",
        "description": "An array with no elements.",
        "args": [],
        "en-US": "Empty Array"
    },
    {
        "opy": "entityExists",
        "fr": "ExistenceDeL’entité",
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Entity Exists"
    },
    {
        "opy": "eventDamage",
        "fr": "DégâtsD’évènement",
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Damage"
    },
    {
        "opy": "eventHealing",
        "fr": "ÉvènementSoin",
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Healing"
    },
    {
        "opy": "eventPlayer",
        "fr": "JoueurExécutant",
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null,
        "en-US": "Event Player"
    },
    {
        "opy": "eventWasCriticalHit",
        "fr": "L’évènementétaitUnCoupCritique",
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Was Critical Hit"
    },
    {
        "opy": "_&getEyePosition",
        "fr": "PositionDesYeux",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Eye Position"
    },
    {
        "opy": "_&getFacingDirection",
        "fr": "RegardEnDirectionDe",
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Facing Direction Of"
    },
    {
        "opy": "false",
        "fr": "Faux",
        "description": "The boolean value of false.",
        "args": null,
        "en-US": "False"
    },
    {
        "opy": "getFarthestPlayer",
        "fr": "JoueurLePluséloignéDe",
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
        "en-US": "Farthest Player From"
    },
    {
        "opy": "_filteredArray",
        "fr": "TableauFiltré",
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
        "en-US": "Filtered Array"
    },
    {
        "opy": "_firstOf",
        "fr": "PremierDe",
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "First Of"
    },
    {
        "opy": "getFlagPosition",
        "fr": "PositionDuDrapeau",
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Flag Position"
    },
    {
        "opy": "Vector.FORWARD",
        "fr": "Avant",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null,
        "en-US": "Forward"
    },
    {
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
        "en-US": "Game Mode"
    },
    {
        "opy": "_globalVar",
        "fr": "VariableGlobale",
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "VARIABLE",
                "default": "A"
            }
        ],
        "en-US": "Global Variable"
    },
    {
        "opy": "_&hasSpawned",
        "fr": "Apparition",
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Has Spawned"
    },
    {
        "opy": "_&hasStatusEffect",
        "fr": "Statut",
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
        "en-US": "Has Status"
    },
    {
        "opy": "healee",
        "fr": "Soigné",
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null,
        "en-US": "Healee"
    },
    {
        "opy": "healer",
        "fr": "Soigneur",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null,
        "en-US": "Healer"
    },
    {
        "opy": "_&getHealth",
        "fr": "PointsDeVie",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Health"
    },
    {
        "opy": "_&getNormalizedHealth",
        "fr": "PointsDeVieNormalisés",
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Normalized Health"
    },
    {
        "opy": "_hero",
        "fr": "Héros",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "HERO CONSTANT",
                "default": "ANA"
            }
        ],
        "en-US": "Hero"
    },
    {
        "opy": "heroIcon",
        "fr": "ChaîneD’icôneDuHéros",
        "description": "Converts a hero parameter into a string that shows up as an icon.",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "HERO",
                "default": "HERO"
            }
        ],
        "en-US": "Hero Icon String"
    },
    {
        "opy": "_&getCurrentHero",
        "fr": "HérosDe",
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Hero Of"
    },
    {
        "opy": "horizontalAngleFromDirection",
        "fr": "AngleHorizontalDepuisUneDirection",
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Horizontal Angle From Direction"
    },
    {
        "opy": "horizontalAngleTowards",
        "fr": "AngleHorizontalVers",
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
        "en-US": "Horizontal Angle Towards"
    },
    {
        "opy": "_&getHorizontalFacingAngle",
        "fr": "AngleHorizontalDuRegardDe",
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Horizontal Facing Angle Of"
    },
    {
        "opy": "_&getHorizontalSpeed",
        "fr": "VitesseHorizontaleDe",
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Horizontal Speed Of"
    },
    {
        "opy": "hostPlayer",
        "fr": "JoueurHôte",
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null,
        "en-US": "Host Player"
    },
    {
        "opy": "iconString",
        "fr": "ChaîneD’icône",
        "description": "Allows you to use an icon inside of a string.",
        "args": [
            {
                "name": "Icon",
                "description": "The icon to display.",
                "type": "ICON",
                "default": "ARROW: DOWN"
            }
        ],
        "en-US": "Icon String"
    },
    {
        "opy": "_indexOfArrayValue",
        "fr": "IndexDeLaValeurDeTableau",
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
        "en-US": "Index Of Array Value"
    },
    {
        "opy": "_&isAlive",
        "fr": "EnVie",
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Alive"
    },
    {
        "opy": "isAssemblingHeroes()",
        "fr": "PhaseDeChoixDeHéros",
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": [],
        "en-US": "Is Assembling Heroes"
    },
    {
        "opy": "isMatchBetweenRounds()",
        "fr": "EntreDeuxManches",
        "description": "Whether the match is between rounds.",
        "args": [],
        "en-US": "Is Between Rounds"
    },
    {
        "opy": "_&isHoldingButton",
        "fr": "BoutonMaintenuEnfoncé",
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
        "en-US": "Is Button Held"
    },
    {
        "opy": "_&isCommunicating",
        "fr": "Communication",
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
        "en-US": "Is Communicating"
    },
    {
        "opy": "_&isCommunicatingAnything",
        "fr": "N’importeQuelleCommunication",
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Communicating Any"
    },
    {
        "opy": "_&isCommunicatingEmote",
        "fr": "CommunicationParEmote",
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Communicating Any Emote"
    },
    {
        "opy": "_&isCommunicatingVoiceline",
        "fr": "CommunicationParRéplique",
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Communicating Any Voiceline"
    },
    {
        "opy": "isControlPointLocked()",
        "fr": "PointDeContrôleVerrouillé",
        "description": "Whether the point is locked in control mode.",
        "args": [],
        "en-US": "Is Control Mode Point Locked"
    },
    {
        "opy": "_&isCrouching",
        "fr": "Accroupi",
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Crouching"
    },
    {
        "opy": "isInSuddenDeath()",
        "fr": "CaptureDuDrapeauEnMortSubite",
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": [],
        "en-US": "Is Ctf Mode In Sudden Death"
    },
    {
        "opy": "_&isDead",
        "fr": "Mort",
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Dead"
    },
    {
        "opy": "_&isDummy",
        "fr": "EstUnBot",
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Dummy Bot"
    },
    {
        "opy": "_&isFiringPrimaryFire",
        "fr": "TirPrincipal",
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Firing Primary"
    },
    {
        "opy": "_&isFiringSecondaryFire",
        "fr": "TirSecondaire",
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Firing Secondary"
    },
    {
        "opy": "isFlagAtBase",
        "fr": "DrapeauàLaBase",
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Flag At Base"
    },
    {
        "opy": "isFlagBeingCarried",
        "fr": "DrapeauTransporté",
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Flag Being Carried"
    },
    {
        "opy": "isGameInProgress()",
        "fr": "PartieEnCours",
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": [],
        "en-US": "Is Game In Progress"
    },
    {
        "opy": "teamHasHero",
        "fr": "HérosJoué",
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
        "en-US": "Is Hero Being Played"
    },
    {
        "opy": "_&isInAir",
        "fr": "DansLesAirs",
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is In Air"
    },
    {
        "opy": "_isInLineOfSight",
        "fr": "DansLaLigneDeVue",
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
        "en-US": "Is In Line Of Sight"
    },
    {
        "opy": "isInSetup()",
        "fr": "DansLesParamètres",
        "description": "Whether the match is currently in its setup phase.",
        "args": [],
        "en-US": "Is In Setup"
    },
    {
        "opy": "_&isInSpawnRoom",
        "fr": "DansLaSalleD’apparition",
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is In Spawn Room"
    },
    {
        "opy": "_&isInViewAngle",
        "fr": "DansLeChampDeVision",
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
        "en-US": "Is In View Angle"
    },
    {
        "opy": "isMatchComplete()",
        "fr": "PartieTerminée",
        "description": "Whether the match has finished.",
        "args": [],
        "en-US": "Is Match Complete"
    },
    {
        "opy": "_&isMoving",
        "fr": "SeDéplace",
        "description": "Whether a player is moving (defined as having a nonzero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Moving"
    },
    {
        "opy": "isObjectiveComplete",
        "fr": "ObjectifAccompli",
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Is Objective Complete"
    },
    {
        "opy": "_&isOnGround",
        "fr": "AuSol",
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is On Ground"
    },
    {
        "opy": "_&isOnObjective",
        "fr": "SurL’objectif",
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is On Objective"
    },
    {
        "opy": "_&isOnWall",
        "fr": "SurLeMur",
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is On Wall"
    },
    {
        "opy": "_&isOnFire",
        "fr": "Portrait«EnFeu»",
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Portrait On Fire"
    },
    {
        "opy": "_&isStanding",
        "fr": "Debout",
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Standing"
    },
    {
        "opy": "isTeamOnDefense",
        "fr": "ÉquipeEnDéfense",
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Team On Defense"
    },
    {
        "opy": "isTeamOnOffense",
        "fr": "ÉquipeEnAttaque",
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Is Team On Offense"
    },
    {
        "opy": "_all",
        "fr": "VraiPourTous",
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
        "en-US": "Is True For All"
    },
    {
        "opy": "_any",
        "fr": "VraiPourN’importeQui",
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
        "en-US": "Is True For Any"
    },
    {
        "opy": "_&isUsingAbility1",
        "fr": "Capacité1Utilisée",
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Using Ability 1"
    },
    {
        "opy": "_&isUsingAbility2",
        "fr": "Capacité2Utilisée",
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Using Ability 2"
    },
    {
        "opy": "_&isUsingUltimate",
        "fr": "CapacitéUltimeUtilisée",
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Is Using Ultimate"
    },
    {
        "opy": "isWaitingForPlayers()",
        "fr": "EnAttenteDeJoueurs",
        "description": "Whether the match is waiting for players to join before starting.",
        "args": [],
        "en-US": "Is Waiting For Players"
    },
    {
        "opy": "getLastCreatedEntity()",
        "fr": "DernièreEntitéCréée",
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": [],
        "en-US": "Last Created Entity"
    },
    {
        "opy": "getLastDamageModification()",
        "fr": "DernierIdentifiantDeModificationDeDégâts",
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Damage Modification Id"
    },
    {
        "opy": "getLastDoT()",
        "fr": "DernierIdentifiantDeDégâtsSurLaDurée",
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Damage Over Time Id"
    },
    {
        "opy": "getLastHoT()",
        "fr": "DernierIdentifiantDeSoinsSurLaDurée",
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Heal Over Time Id"
    },
    {
        "opy": "_lastOf",
        "fr": "Dernier",
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Last Of"
    },
    {
        "opy": "getLastCreatedText()",
        "fr": "DernierIdentifiantDeTexte",
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": [],
        "en-US": "Last Text Id"
    },
    {
        "opy": "Vector.LEFT",
        "fr": "Gauche",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null,
        "en-US": "Left"
    },
    {
        "opy": "localVector",
        "fr": "VecteurLocalDe",
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
        "en-US": "Local Vector Of"
    },
    {
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
        "en-US": "Map"
    },
    {
        "opy": "getMatchRound()",
        "fr": "MancheDeLaPartie",
        "description": "The current round of the match, counting up from 1.",
        "args": [],
        "en-US": "Match Round"
    },
    {
        "opy": "getMatchTime()",
        "fr": "TempsDeJeu",
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": [],
        "en-US": "Match Time"
    },
    {
        "opy": "max",
        "fr": "Maximum",
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
        "en-US": "Max"
    },
    {
        "opy": "_&getMaxHealth",
        "fr": "PointsDeVieMaximum",
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Max Health"
    },
    {
        "opy": "min",
        "fr": "Minimum",
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
        "en-US": "Min"
    },
    {
        "opy": "_modulo",
        "fr": "Modulo",
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
        "en-US": "Modulo"
    },
    {
        "opy": "_multiply",
        "fr": "Multiplication",
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
        "en-US": "Multiply"
    },
    {
        "opy": "nearestWalkablePosition",
        "fr": "PositionLaPlusProcheEnMarchant",
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "POSITION",
                "default": "VECTOR"
            }
        ],
        "en-US": "Nearest Walkable Position"
    },
    {
        "opy": "normalize",
        "fr": "Normalisation",
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Normalize"
    },
    {
        "opy": "not",
        "fr": "Pas",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "BOOLEAN",
                "default": "TRUE"
            }
        ],
        "en-US": "Not"
    },
    {
        "opy": "null",
        "fr": "NonApplicable",
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null,
        "en-US": "Null"
    },
    {
        "opy": "getNumberOfDeadPlayers",
        "fr": "NombreDeJoueursMorts",
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number Of Dead Players"
    },
    {
        "opy": "_&getNumberOfDeaths",
        "fr": "NombreDeMorts",
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Number Of Deaths"
    },
    {
        "opy": "_&getNumberOfElims",
        "fr": "NombreD’éliminations",
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Number Of Eliminations"
    },
    {
        "opy": "_&getNumberOfFinalBlows",
        "fr": "NombreDeCoupsDeGrâce",
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Number Of Final Blows"
    },
    {
        "opy": "getNumberOfHeroes",
        "fr": "NombreDeHéros",
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
        "en-US": "Number Of Heroes"
    },
    {
        "opy": "getNumberOfLivingPlayers",
        "fr": "NombreDeJoueursEnVie",
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number Of Living Players"
    },
    {
        "opy": "getNumberOfPlayers",
        "fr": "NombreDeJoueurs",
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number Of Players"
    },
    {
        "opy": "getNumberOfPlayersOnObjective",
        "fr": "NombreDeJoueursSurL’objectif",
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Number Of Players On Objective"
    },
    {
        "opy": "getCurrentObjective()",
        "fr": "IndexDeL’objectif",
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": [],
        "en-US": "Objective Index"
    },
    {
        "opy": "getObjectivePosition",
        "fr": "PositionDeL’objectif",
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Objective Position"
    },
    {
        "opy": "getOppositeTeam",
        "fr": "ÉquipeOpposéeà",
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Opposite Team Of"
    },
    {
        "opy": "_or",
        "fr": "Ou",
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
        "en-US": "Or"
    },
    {
        "opy": "getPayloadPosition",
        "fr": "PositionDuConvoi",
        "description": "The position in the world of the active payload.",
        "args": [],
        "en-US": "Payload Position"
    },
    {
        "opy": "getPayloadProgressPercentage",
        "fr": "PourcentageDeProgressionDuConvoi",
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": [],
        "en-US": "Payload Progress Percentage"
    },
    {
        "opy": "getFlagCarrier",
        "fr": "JoueurPortantLeDrapeau",
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Player Carrying Flag"
    },
    {
        "opy": "_&getPlayerClosestToReticle",
        "fr": "JoueurLePlusProcheDuRéticule",
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
        "en-US": "Player Closest To Reticle"
    },
    {
        "opy": "_playerVar",
        "fr": "VariableDeJoueur",
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
        "en-US": "Player Variable"
    },
    {
        "opy": "getPlayersInSlot",
        "fr": "JoueursDansL’emplacement",
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
        "en-US": "Players In Slot"
    },
    {
        "opy": "_&getPlayersInViewAngle",
        "fr": "JoueursDansLeChampDeVision",
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
        "en-US": "Players In View Angle"
    },
    {
        "opy": "getPlayersOnHero",
        "fr": "JoueursSurLeHéros",
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
        "en-US": "Players On Hero"
    },
    {
        "opy": "getPlayersInRadius",
        "fr": "JoueursDansUnRayon",
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
        "en-US": "Players Within Radius"
    },
    {
        "opy": "getCapturePercentage",
        "fr": "PourcentageDeCaptureDuPoint",
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": [],
        "en-US": "Point Capture Percentage"
    },
    {
        "opy": "_&getPosition",
        "fr": "PositionDe",
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Position Of"
    },
    {
        "opy": "_raiseToPower",
        "fr": "ÉlévationàUnePuissance",
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
        "en-US": "Raise To Power"
    },
    {
        "opy": "_randomWs",
        "fr": "Aléatoire",
        "description": "An internal value that is the word 'random' used by all 4 random functions, no matter the language.",
        "args": [],
        "en-US": "Random"
    },
    {
        "opy": "random.randint",
        "fr": "NombreEntierAléatoire",
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
        "en-US": "Random Integer"
    },
    {
        "opy": "random.uniform",
        "fr": "NombreRéelAléatoire",
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
        "en-US": "Random Real"
    },
    {
        "opy": "random.choice",
        "fr": "ValeurAléatoireDansLeTableau",
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Random Value In Array"
    },
    {
        "opy": "random.shuffle",
        "fr": "TableauAléatoire",
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "ANY",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "en-US": "Randomized Array"
    },
    {
        "opy": "_getNormal",
        "fr": "SurfaceIntersectéeParLeRayonémis",
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
        "en-US": "Raycast Hit Normal"
    },
    {
        "opy": "_getPlayerHit",
        "fr": "JoueurIntersectéParLeRayonémis",
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
        "en-US": "Raycast Hit Player"
    },
    {
        "opy": "_getHitPosition",
        "fr": "PositionD’impactDuRayonémis",
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
        "en-US": "Raycast Hit Position"
    },
    {
        "opy": "_removeFromArray",
        "fr": "SupprimerDuTableau",
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
        "en-US": "Remove From Array"
    },
    {
        "opy": "Vector.RIGHT",
        "fr": "Droite",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null,
        "en-US": "Right"
    },
    {
        "opy": "_round",
        "fr": "ArrondiràL’entier",
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
        "en-US": "Round To Integer"
    },
    {
        "opy": "_&getScore",
        "fr": "ScoreDe",
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Score Of"
    },
    {
        "opy": "getServerLoad()",
        "fr": "ChargeDuServeur",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "en-US": "Server Load"
    },
    {
        "opy": "getAverageServerLoad()",
        "fr": "ChargeMoyenneDuServeur",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "en-US": "Server Load Average"
    },
    {
        "opy": "getPeakServerLoad()",
        "fr": "PicDeChargeDuServeur",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "en-US": "Server Load Peak"
    },
    {
        "opy": "sinDeg",
        "fr": "SinusEnDegrés",
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Sine From Degrees"
    },
    {
        "opy": "sin",
        "fr": "SinusEnRadians",
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Sine From Radians"
    },
    {
        "opy": "_&getSlot",
        "fr": "EmplacementDe",
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Slot Of"
    },
    {
        "opy": "_sortedArray",
        "fr": "TableauTrié",
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
        "en-US": "Sorted Array"
    },
    {
        "opy": "_&getSpeed",
        "fr": "VitesseDe",
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Speed Of"
    },
    {
        "opy": "_&getSpeedInDirection",
        "fr": "VitesseDansLaDirectionDonnéeDe",
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
        "en-US": "Speed Of In Direction"
    },
    {
        "opy": "sqrt",
        "fr": "RacineCarrée",
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Square Root"
    },
    {
        "opy": "_localizedString",
        "fr": "ChaîneDeTexte",
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
        "en-US": "String"
    },
    {
        "opy": "_subtract",
        "fr": "Soustraction",
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
        "en-US": "Subtract"
    },
    {
        "opy": "tanDeg",
        "fr": "todo",
        "description": "Tangent of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Tangent From Degrees"
    },
    {
        "opy": "tan",
        "fr": "todo",
        "description": "Tangent of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "NUMBER",
                "default": "NUMBER"
            }
        ],
        "en-US": "Tangent From Radians"
    },
    {
        "opy": "_&getTeam",
        "fr": "ÉquipeDe",
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Team Of"
    },
    {
        "opy": "teamScore",
        "fr": "ScoreDeL’équipe",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "TEAM",
                "default": "TEAM"
            }
        ],
        "en-US": "Team Score"
    },
    {
        "opy": "_&getThrottle",
        "fr": "AccélérationDe",
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Throttle Of"
    },
    {
        "opy": "getTotalTimeElapsed",
        "fr": "TempsTotalécoulé",
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": [],
        "en-US": "Total Time Elapsed"
    },
    {
        "opy": "true",
        "fr": "Vrai",
        "description": "The boolean value of true.",
        "args": null,
        "en-US": "True"
    },
    {
        "opy": "_&getUltCharge",
        "fr": "PourcentageDeChargeDeLaCapacitéUltime",
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Ultimate Charge Percent"
    },
    {
        "opy": "Vector.UP",
        "fr": "Haut",
        "description": "Shorthand for the directional vector(0, l, 0), which points upward.",
        "args": null,
        "en-US": "Up"
    },
    {
        "opy": "_valueInArray",
        "fr": "ValeurDansLeTableau",
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
        "en-US": "Value In Array"
    },
    {
        "opy": "vect",
        "fr": "Vecteur",
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
        "en-US": "Vector"
    },
    {
        "opy": "vectorTowards",
        "fr": "VecteurVers",
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
        "en-US": "Vector Towards"
    },
    {
        "opy": "_&getVelocity",
        "fr": "VélocitéDe",
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Velocity Of"
    },
    {
        "opy": "verticalAngleOfDirection",
        "fr": "AngleVerticalDepuisUneDirection",
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Vertical Angle From Direction"
    },
    {
        "opy": "verticalAngleTowards",
        "fr": "AngleVerticalVers",
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
        "en-US": "Vertical Angle Towards"
    },
    {
        "opy": "_&getVerticalFacingAngle",
        "fr": "AngleVerticalDuRegardDe",
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Vertical Facing Angle Of"
    },
    {
        "opy": "_&getVerticalSpeed",
        "fr": "VitesseVerticaleDe",
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "PLAYER",
                "default": "EVENT PLAYER"
            }
        ],
        "en-US": "Vertical Speed Of"
    },
    {
        "opy": "victim",
        "fr": "Victime",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null,
        "en-US": "Victim"
    },
    {
        "opy": "worldVector",
        "fr": "VecteurMondialDe",
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
        "en-US": "World Vector Of"
    },
    {
        "opy": "_xComponentOf",
        "fr": "ComposanteXDe",
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "X Component Of"
    },
    {
        "opy": "_yComponentOf",
        "fr": "ComposanteYDe",
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Y Component Of"
    },
    {
        "opy": "_zComponentOf",
        "fr": "ComposanteZDe",
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Z Component Of"
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
                "en-US": "Rotation"
            },
            {
                "opy": "Transform.ROTATION_AND_TRANSLATION",
                "fr": "RotationEtTranslation",
                "en-US": "Rotation And Translation"
            }
        ]
    },
    "INVISIBLE TO": {
        "opy": "Invis",
        "values": [
            {
                "opy": "Invis.ALL",
                "fr": "Tous",
                "en-US": "All"
            },
            {
                "opy": "Invis.ENEMIES",
                "fr": "Ennemis",
                "en-US": "Enemies"
            },
            {
                "opy": "Invis.NONE",
                "fr": "Personne",
                "en-US": "None"
            }
        ]
    },
    "COLOR": {
        "opy": "Color",
        "values": [
            {
                "opy": "Color.AQUA",
                "fr": "Cyan",
                "en-US": "Aqua"
            },
            {
                "opy": "Color.BLUE",
                "fr": "Bleu",
                "en-US": "Blue"
            },
            {
                "opy": "Color.GREEN",
                "fr": "Vert",
                "en-US": "Green"
            },
            {
                "opy": "Color.LIME_GREEN",
                "fr": "CitronVert",
                "en-US": "Limegreen"
            },
            {
                "opy": "Color.ORANGE",
                "fr": "Orange",
                "en-US": "Orange"
            },
            {
                "opy": "Color.PURPLE",
                "fr": "Violet",
                "en-US": "Purple"
            },
            {
                "opy": "Color.RED",
                "fr": "Rouge",
                "en-US": "Red"
            },
            {
                "opy": "Color.SKY_BLUE",
                "fr": "BleuCiel",
                "en-US": "Skyblue"
            },
            {
                "opy": "Color.TEAM_1",
                "fr": "Équipe1",
                "en-US": "Team 1"
            },
            {
                "opy": "Color.TEAM_2",
                "fr": "Équipe2",
                "en-US": "Team 2"
            },
            {
                "opy": "Color.TURQUOISE",
                "fr": "Turquoise",
                "en-US": "Turquoise"
            },
            {
                "opy": "Color.WHITE",
                "fr": "Blanc",
                "en-US": "White"
            },
            {
                "opy": "Color.YELLOW",
                "fr": "Jaune",
                "en-US": "Yellow"
            }
        ]
    },
    "BUTTON": {
        "opy": "Button",
        "values": [
            {
                "opy": "Button.ABILITY_1",
                "fr": "Capacité1",
                "en-US": "Ability 1"
            },
            {
                "opy": "Button.ABILITY_2",
                "fr": "Capacité2",
                "en-US": "Ability 2"
            },
            {
                "opy": "Button.CROUCH",
                "fr": "S’accroupir",
                "en-US": "Crouch"
            },
            {
                "opy": "Button.INTERACT",
                "fr": "Interagir",
                "en-US": "Interact"
            },
            {
                "opy": "Button.JUMP",
                "fr": "Sauter",
                "en-US": "Jump"
            },
            {
                "opy": "Button.PRIMARY_FIRE",
                "fr": "TirPrincipal",
                "en-US": "Primary Fire"
            },
            {
                "opy": "Button.SECONDARY_FIRE",
                "fr": "TirSecondaire",
                "en-US": "Secondary Fire"
            },
            {
                "opy": "Button.ULTIMATE",
                "fr": "CapacitéUltime",
                "en-US": "Ultimate"
            }
        ]
    },
    "OPERATION": {
        "opy": "Operation",
        "values": [
            {
                "opy": "_add",
                "fr": "Addition",
                "en-US": "Add"
            },
            {
                "opy": "_appendToArray",
                "fr": "AjouterAuTableau",
                "en-US": "Append To Array"
            },
            {
                "opy": "_divide",
                "fr": "Division",
                "en-US": "Divide"
            },
            {
                "opy": "_max",
                "fr": "Maximum",
                "en-US": "Max"
            },
            {
                "opy": "_min",
                "fr": "Minimum",
                "en-US": "Min"
            },
            {
                "opy": "_modulo",
                "fr": "Modulo",
                "en-US": "Modulo"
            },
            {
                "opy": "_multiply",
                "fr": "Multiplication",
                "en-US": "Multiply"
            },
            {
                "opy": "_raiseToPower",
                "fr": "ÉlévationàUnePuissance",
                "en-US": "Raise To Power"
            },
            {
                "opy": "_removeFromArrayByIndex",
                "fr": "SupprimerDuTableauParIndex",
                "en-US": "Remove From Array By Index"
            },
            {
                "opy": "_removeFromArrayByValue",
                "fr": "SupprimerDuTableauParValeur",
                "en-US": "Remove From Array By Value"
            },
            {
                "opy": "_subtract",
                "fr": "Soustraction",
                "en-US": "Subtract"
            }
        ]
    },
    "TEAM CONSTANT": {
        "opy": "Team",
        "values": [
            {
                "opy": "Team.ALL",
                "fr": "ToutesLeséquipes",
                "en-US": "All Teams"
            },
            {
                "opy": "Team.1",
                "fr": "Équipe1",
                "en-US": "Team 1"
            },
            {
                "opy": "Team.2",
                "fr": "Équipe2",
                "en-US": "Team 2"
            }
        ]
    },
    "HERO CONSTANT": {
        "opy": "Hero",
        "values": [
            {
                "opy": "Hero.ANA",
                "fr": "Ana",
                "kr": "아나",
                "en-US": "Ana"
            },
            {
                "opy": "Hero.ASHE",
                "fr": "Ashe",
                "kr": "애쉬",
                "en-US": "Ashe"
            },
            {
                "opy": "Hero.BAPTISTE",
                "fr": "Baptiste",
                "kr": "바티스트",
                "en-US": "Baptiste"
            },
            {
                "opy": "Hero.BASTION",
                "fr": "Bastion",
                "kr": "바스티온",
                "en-US": "Bastion"
            },
            {
                "opy": "Hero.BRIGITTE",
                "fr": "Brigitte",
                "kr": "브리기테",
                "en-US": "Brigitte"
            },
            {
                "opy": "Hero.DVA",
                "fr": "D.va",
                "kr": "D.Va",
                "en-US": "D.va"
            },
            {
                "opy": "Hero.DOOMFIST",
                "fr": "Doomfist",
                "kr": "둠피스트",
                "en-US": "Doomfist"
            },
            {
                "opy": "Hero.GENJI",
                "fr": "Genji",
                "kr": "겐지",
                "en-US": "Genji"
            },
            {
                "opy": "Hero.HANZO",
                "fr": "Hanzo",
                "kr": "한조",
                "en-US": "Hanzo"
            },
            {
                "opy": "Hero.JUNKRAT",
                "fr": "Chacal",
                "kr": "정크랫",
                "en-US": "Junkrat"
            },
            {
                "opy": "Hero.LUCIO",
                "fr": "Lúcio",
                "kr": "루시우",
                "en-US": "Lúcio"
            },
            {
                "opy": "Hero.MCCREE",
                "fr": "Mccree",
                "kr": "맥크리",
                "en-US": "Mccree"
            },
            {
                "opy": "Hero.MEI",
                "fr": "Mei",
                "kr": "메이",
                "en-US": "Mei"
            },
            {
                "opy": "Hero.MERCY",
                "fr": "Ange",
                "kr": "메르시",
                "en-US": "Mercy"
            },
            {
                "opy": "Hero.MOIRA",
                "fr": "Moira",
                "kr": "모이라",
                "en-US": "Moira"
            },
            {
                "opy": "Hero.ORISA",
                "fr": "Orisa",
                "kr": "오리사",
                "en-US": "Orisa"
            },
            {
                "opy": "Hero.PHARAH",
                "fr": "Pharah",
                "kr": "파라",
                "en-US": "Pharah"
            },
            {
                "opy": "Hero.REAPER",
                "fr": "Faucheur",
                "kr": "리퍼",
                "en-US": "Reaper"
            },
            {
                "opy": "Hero.REINHARDT",
                "fr": "Reinhardt",
                "kr": "라인하르트",
                "en-US": "Reinhardt"
            },
            {
                "opy": "Hero.ROADHOG",
                "fr": "Chopper",
                "kr": "로드호그",
                "en-US": "Roadhog"
            },
            {
                "opy": "Hero.SIGMA",
                "fr": "Sigma",
                "kr": "시그마",
                "en-US": "Sigma"
            },
            {
                "opy": "Hero.SOLDIER",
                "fr": "Soldat:76",
                "kr": "솔저: 76",
                "en-US": "Soldier: 76"
            },
            {
                "opy": "Hero.SOMBRA",
                "fr": "Sombra",
                "kr": "솜브라",
                "en-US": "Sombra"
            },
            {
                "opy": "Hero.SYMMETRA",
                "fr": "Symmetra",
                "kr": "시메트라",
                "en-US": "Symmetra"
            },
            {
                "opy": "Hero.TORBJORN",
                "fr": "Torbjörn",
                "kr": "토르비욘",
                "en-US": "Torbjörn"
            },
            {
                "opy": "Hero.TRACER",
                "fr": "Tracer",
                "kr": "트레이서",
                "en-US": "Tracer"
            },
            {
                "opy": "Hero.WIDOWMAKER",
                "fr": "Fatale",
                "kr": "위도우메이커",
                "en-US": "Widowmaker"
            },
            {
                "opy": "Hero.WINSTON",
                "fr": "Winston",
                "kr": "윈스턴",
                "en-US": "Winston"
            },
            {
                "opy": "Hero.HAMMOND",
                "fr": "Bouldozer",
                "kr": "레킹볼",
                "en-US": "Wrecking Ball"
            },
            {
                "opy": "Hero.ZARYA",
                "fr": "Zarya",
                "kr": "자리야",
                "en-US": "Zarya"
            },
            {
                "opy": "Hero.ZENYATTA",
                "fr": "Zenyatta",
                "kr": "젠야타",
                "en-US": "Zenyatta"
            }
        ]
    },
    "VARIABLE": {
        "opy": "Variable",
        "values": [
            {
                "opy": "A",
                "en-US": "A"
            },
            {
                "opy": "B",
                "en-US": "B"
            },
            {
                "opy": "C",
                "en-US": "C"
            },
            {
                "opy": "D",
                "en-US": "D"
            },
            {
                "opy": "E",
                "en-US": "E"
            },
            {
                "opy": "F",
                "en-US": "F"
            },
            {
                "opy": "G",
                "en-US": "G"
            },
            {
                "opy": "H",
                "en-US": "H"
            },
            {
                "opy": "I",
                "en-US": "I"
            },
            {
                "opy": "J",
                "en-US": "J"
            },
            {
                "opy": "K",
                "en-US": "K"
            },
            {
                "opy": "L",
                "en-US": "L"
            },
            {
                "opy": "M",
                "en-US": "M"
            },
            {
                "opy": "N",
                "en-US": "N"
            },
            {
                "opy": "O",
                "en-US": "O"
            },
            {
                "opy": "P",
                "en-US": "P"
            },
            {
                "opy": "Q",
                "en-US": "Q"
            },
            {
                "opy": "R",
                "en-US": "R"
            },
            {
                "opy": "S",
                "en-US": "S"
            },
            {
                "opy": "T",
                "en-US": "T"
            },
            {
                "opy": "U",
                "en-US": "U"
            },
            {
                "opy": "V",
                "en-US": "V"
            },
            {
                "opy": "W",
                "en-US": "W"
            },
            {
                "opy": "X",
                "en-US": "X"
            },
            {
                "opy": "Y",
                "en-US": "Y"
            },
            {
                "opy": "Z",
                "en-US": "Z"
            }
        ]
    },
    "PLAY EFFECT": {
        "opy": "DynamicEffect",
        "values": [
            {
                "opy": "DynamicEffect.BAD_EXPLOSION",
                "fr": "MauvaiseExplosion",
                "en-US": "Bad Explosion"
            },
            {
                "opy": "DynamicEffect.BAD_PICKUP_EFFECT",
                "fr": "MauvaisEffetDeRamassage",
                "en-US": "Bad Pickup Effect"
            },
            {
                "opy": "DynamicEffect.BUFF_EXPLOSION_SOUND",
                "fr": "SonD’explosionD’amélioration",
                "en-US": "Buff Explosion Sound"
            },
            {
                "opy": "DynamicEffect.BUFF_IMPACT_SOUND",
                "fr": "SonD’impactD’amélioration",
                "en-US": "Buff Impact Sound"
            },
            {
                "opy": "DynamicEffect.DEBUFF_IMPACT_SOUND",
                "fr": "SonD’impactD’affaiblissement",
                "en-US": "Debuff Impact Sound"
            },
            {
                "opy": "DynamicEffect.EXPLOSION_SOUND",
                "fr": "SonDeL’explosion",
                "en-US": "Explosion Sound"
            },
            {
                "opy": "DynamicEffect.GOOD_EXPLOSION",
                "fr": "BonneExplosion",
                "en-US": "Good Explosion"
            },
            {
                "opy": "DynamicEffect.GOOD_PICKUP_EFFECT",
                "fr": "BonEffetDeRamassage",
                "en-US": "Good Pickup Effect"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION",
                "fr": "ExplosionConcentrique",
                "en-US": "Ring Explosion"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION_SOUND",
                "fr": "SonD’explosionConcentrique",
                "en-US": "Ring Explosion Sound"
            }
        ]
    },
    "CREATE EFFECT": {
        "opy": "Effect",
        "values": [
            {
                "opy": "Effect.BAD_AURA",
                "fr": "MauvaiseAura",
                "en-US": "Bad Aura"
            },
            {
                "opy": "Effect.BAD_AURA_SOUND",
                "fr": "SonDeMauvaiseAura",
                "en-US": "Bad Aura Sound"
            },
            {
                "opy": "Effect.BEACON_SOUND",
                "fr": "SonDeBalise",
                "en-US": "Beacon Sound"
            },
            {
                "opy": "Effect.CLOUD",
                "fr": "Nuage",
                "en-US": "Cloud"
            },
            {
                "opy": "Effect.DECAL_SOUND",
                "fr": "SonDeDécal",
                "en-US": "Decal Sound"
            },
            {
                "opy": "Effect.ENERGY_SOUND",
                "fr": "SonDeL’énergie",
                "en-US": "Energy Sound"
            },
            {
                "opy": "Effect.GOOD_AURA",
                "fr": "BonneAura",
                "en-US": "Good Aura"
            },
            {
                "opy": "Effect.GOOD_AURA_SOUND",
                "fr": "SonDeBonneAura",
                "en-US": "Good Aura Sound"
            },
            {
                "opy": "Effect.LIGHT_SHAFT",
                "fr": "PuitsDeLumière",
                "en-US": "Light Shaft"
            },
            {
                "opy": "Effect.ORB",
                "fr": "Orbe",
                "en-US": "Orb"
            },
            {
                "opy": "Effect.PICKUP_SOUND",
                "fr": "SonDeRamassage",
                "en-US": "Pick - Up Sound"
            },
            {
                "opy": "Effect.RING",
                "fr": "Anneau",
                "en-US": "Ring"
            },
            {
                "opy": "Effect.SMOKE_SOUND",
                "fr": "SonDeLaFumée",
                "en-US": "Smoke Sound"
            },
            {
                "opy": "Effect.SPARKLES",
                "fr": "Etincelles",
                "en-US": "Sparkles"
            },
            {
                "opy": "Effect.SPARKLES_SOUND",
                "fr": "SonDesétincelles",
                "en-US": "Sparkles Sound"
            },
            {
                "opy": "Effect.SPHERE",
                "fr": "Sphère",
                "en-US": "Sphere"
            }
        ]
    },
    "COMMUNICATE": {
        "opy": "Comms",
        "values": [
            {
                "opy": "Comms.ACKNOWLEDGE",
                "fr": "BienReçu",
                "en-US": "Acknowledge"
            },
            {
                "opy": "Comms.EMOTE_DOWN",
                "fr": "EmoteBas",
                "en-US": "Emote Down"
            },
            {
                "opy": "Comms.EMOTE_LEFT",
                "fr": "EmoteGauche",
                "en-US": "Emote Left"
            },
            {
                "opy": "Comms.EMOTE_RIGHT",
                "fr": "EmoteDroite",
                "en-US": "Emote Right"
            },
            {
                "opy": "Comms.EMOTE_UP",
                "fr": "EmoteHaut",
                "en-US": "Emote Up"
            },
            {
                "opy": "Comms.GROUP_UP",
                "fr": "Regroupement",
                "en-US": "Group Up"
            },
            {
                "opy": "Comms.HELLO",
                "fr": "Bonjour",
                "en-US": "Hello"
            },
            {
                "opy": "Comms.NEED_HEALING",
                "fr": "BesoinDeSoins",
                "en-US": "Need Healing"
            },
            {
                "opy": "Comms.THANKS",
                "fr": "Merci",
                "en-US": "Thanks"
            },
            {
                "opy": "Comms.ULTIMATE_STATUS",
                "fr": "StatutDeL’ulti",
                "en-US": "Ultimate Status"
            },
            {
                "opy": "Comms.VOICE_LINE_DOWN",
                "fr": "RépliqueBas",
                "en-US": "Voice Line Down"
            },
            {
                "opy": "Comms.VOICE_LINE_LEFT",
                "fr": "RépliqueGauche",
                "en-US": "Voice Line Left"
            },
            {
                "opy": "Comms.VOICE_LINE_RIGHT",
                "fr": "RépliqueDroite",
                "en-US": "Voice Line Right"
            },
            {
                "opy": "Comms.VOICE_LINE_UP",
                "fr": "RépliqueHaut",
                "en-US": "Voice Line Up"
            }
        ]
    },
    "ICON": {
        "opy": "Icon",
        "values": [
            {
                "opy": "Icon.ARROW_DOWN",
                "fr": "FlècheBas",
                "description": "![](https://i.imgur.com/hych4AE.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Down"
            },
            {
                "opy": "Icon.ARROW_LEFT",
                "fr": "FlècheGauche",
                "description": "![](https://i.imgur.com/jgpW0Nb.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Left"
            },
            {
                "opy": "Icon.ARROW_RIGHT",
                "fr": "FlècheDroite",
                "description": "![](https://i.imgur.com/0BttENZ.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Right"
            },
            {
                "opy": "Icon.ARROW_UP",
                "fr": "FlècheHaut",
                "description": "![](https://i.imgur.com/Pr86Pcf.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Arrow: Up"
            },
            {
                "opy": "Icon.ASTERISK",
                "fr": "Astérisque",
                "description": "![](https://i.imgur.com/XTvINuC.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Asterisk"
            },
            {
                "opy": "Icon.BOLT",
                "fr": "Boulon",
                "description": "![](https://i.imgur.com/ekbDxsT.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Bolt"
            },
            {
                "opy": "Icon.CHECKMARK",
                "fr": "PointD’exclamation",
                "description": "![](https://i.imgur.com/B7V240H.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Checkmark"
            },
            {
                "opy": "Icon.CIRCLE",
                "fr": "Cercle",
                "description": "![](https://i.imgur.com/6lNvrqD.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Circle"
            },
            {
                "opy": "Icon.CLUB",
                "fr": "Trèfle",
                "description": "![](https://i.imgur.com/HYWor8w.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Club"
            },
            {
                "opy": "Icon.DIAMOND",
                "fr": "Carreau",
                "description": "![](https://i.imgur.com/5aLqsHf.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Diamond"
            },
            {
                "opy": "Icon.DIZZY",
                "fr": "Étourdi",
                "description": "![](https://i.imgur.com/P1Qi43N.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Dizzy"
            },
            {
                "opy": "Icon.EXCLAMATION_MARK",
                "fr": "PointD’exclamation",
                "description": "![](https://i.imgur.com/1rBcHfz.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Exclamation Mark"
            },
            {
                "opy": "Icon.EYE",
                "fr": "Œil",
                "description": "![](https://i.imgur.com/pVMPtoH.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Eye"
            },
            {
                "opy": "Icon.FIRE",
                "fr": "Flamme",
                "description": "![](https://i.imgur.com/m3As7B0.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Fire"
            },
            {
                "opy": "Icon.FLAG",
                "fr": "Drapeau",
                "description": "![](https://i.imgur.com/v30lUgy.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Flag"
            },
            {
                "opy": "Icon.HALO",
                "fr": "Halo",
                "description": "![](https://i.imgur.com/FWR9HAQ.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Halo"
            },
            {
                "opy": "Icon.HAPPY",
                "fr": "SmileyContent",
                "description": "![](https://i.imgur.com/CNwSwb1.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Happy"
            },
            {
                "opy": "Icon.HEART",
                "fr": "Cœur",
                "description": "![](https://i.imgur.com/1KPOyZa.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Heart"
            },
            {
                "opy": "Icon.MOON",
                "fr": "Lune",
                "description": "![](https://i.imgur.com/2uxcKF0.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Moon"
            },
            {
                "opy": "Icon.NO",
                "fr": "Interdit",
                "description": "![](https://i.imgur.com/TZ4zFso.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "No"
            },
            {
                "opy": "Icon.PLUS",
                "fr": "Plus",
                "description": "![](https://i.imgur.com/OLARJ80.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Plus"
            },
            {
                "opy": "Icon.POISON",
                "fr": "Poison",
                "description": "![](https://i.imgur.com/w2gsTiI.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Poison"
            },
            {
                "opy": "Icon.POISON_2",
                "fr": "Poison2",
                "description": "![](https://i.imgur.com/UWmyDg2.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Poison 2"
            },
            {
                "opy": "Icon.QUESTION_MARK",
                "fr": "PointD’interrogation",
                "description": "![](https://i.imgur.com/CZBV4tx.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Question Mark"
            },
            {
                "opy": "Icon.RADIOACTIVE",
                "fr": "Radioactif",
                "description": "![](https://i.imgur.com/R1bnNcl.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Radioactive"
            },
            {
                "opy": "Icon.RECYCLE",
                "fr": "Recyclage",
                "description": "![](https://i.imgur.com/q2fxb2u.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Recycle"
            },
            {
                "opy": "Icon.RING_THICK",
                "fr": "Anneauépais",
                "description": "![](https://i.imgur.com/lTwuAjX.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Ring Thick"
            },
            {
                "opy": "Icon.RING_THIN",
                "fr": "AnneauFin",
                "description": "![](https://i.imgur.com/NDOrzVS.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Ring Thin"
            },
            {
                "opy": "Icon.SAD",
                "fr": "SmileyTriste",
                "description": "![](https://i.imgur.com/00jyB4n.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Sad"
            },
            {
                "opy": "Icon.SKULL",
                "fr": "Crâne",
                "description": "![](https://i.imgur.com/TKKtSIa.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Skull"
            },
            {
                "opy": "Icon.SPADE",
                "fr": "Pique",
                "description": "![](https://i.imgur.com/AJNBYA3.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Spade"
            },
            {
                "opy": "Icon.SPIRAL",
                "fr": "Spirale",
                "description": "![](https://i.imgur.com/TQLGPww.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Spiral"
            },
            {
                "opy": "Icon.STOP",
                "fr": "Stop",
                "description": "![](https://i.imgur.com/af56Ghv.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Stop"
            },
            {
                "opy": "Icon.TRASHCAN",
                "fr": "Poubelle",
                "description": "![](https://i.imgur.com/iEtFvyC.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Trashcan"
            },
            {
                "opy": "Icon.WARNING",
                "fr": "Avertissement",
                "description": "![](https://i.imgur.com/SXDld9l.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "Warning"
            },
            {
                "opy": "Icon.CROSS",
                "fr": "Croix",
                "description": "![](https://i.imgur.com/05HFEnd.jpg) \n\n \n\n \n\n \n\n ",
                "en-US": "X"
            }
        ]
    },
    "RELATIVE": {
        "opy": "Relativity",
        "values": [
            {
                "opy": "Relativity.TO_PLAYER",
                "fr": "AuMonde",
                "en-US": "To Player"
            },
            {
                "opy": "Relativity.TO_WORLD",
                "fr": "AuJoueur",
                "en-US": "To World"
            }
        ]
    },
    "MOTION": {
        "opy": "Impulse",
        "values": [
            {
                "opy": "Impulse.CANCEL_CONTRARY_MOTION",
                "fr": "AnnulerLeMouvementContraire",
                "en-US": "Cancel Contrary Motion"
            },
            {
                "opy": "Impulse.INCORPORATE_CONTRARY_MOTION",
                "fr": "IncorporerUnMouvementContraire",
                "en-US": "Incorporate Contrary Motion"
            }
        ]
    },
    "ROUNDING TYPE": {
        "values": [
            {
                "opy": "_roundUp",
                "fr": "Au-dessus",
                "en-US": "Up"
            },
            {
                "opy": "_roundDown",
                "fr": "En-dessous",
                "en-US": "Down"
            },
            {
                "opy": "_roundToNearest",
                "fr": "AuPlusPrès",
                "en-US": "To Nearest"
            }
        ]
    },
    "LOS CHECK": {
        "opy": "LosCheck",
        "values": [
            {
                "opy": "LosCheck.OFF",
                "fr": "Désactivé",
                "en-US": "Off"
            },
            {
                "opy": "LosCheck.SURFACES",
                "fr": "Surfaces",
                "en-US": "Surfaces"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ALL_BARRIERS",
                "fr": "SurfacesEtBarrièresEnnemies",
                "en-US": "Surfaces And All Barriers"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ENEMY_BARRIERS",
                "fr": "SurfacesEtToutesLesBarrières",
                "en-US": "Surfaces And Enemy Barriers"
            }
        ]
    },
    "WORLD TEXT CLIPPING": {
        "opy": "Clip",
        "values": [
            {
                "opy": "Clip.SURFACES",
                "fr": "MasquerDerrièreLesSurfaces",
                "en-US": "Clip Against Surfaces"
            },
            {
                "opy": "Clip.NONE",
                "fr": "NePasMasquer",
                "en-US": "Do Not Clip"
            }
        ]
    },
    "HUD LOCATION": {
        "opy": "Position",
        "values": [
            {
                "opy": "Position.LEFT",
                "fr": "Gauche",
                "en-US": "Left"
            },
            {
                "opy": "Position.TOP",
                "fr": "Haut",
                "en-US": "Top"
            },
            {
                "opy": "Position.RIGHT",
                "fr": "Droite",
                "en-US": "Right"
            }
        ]
    },
    "ICON REEVALUATION": {
        "opy": "IconReeval",
        "values": [
            {
                "opy": "IconReeval.POSITION",
                "en-US": "Position"
            },
            {
                "opy": "IconReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            },
            {
                "opy": "IconReeval.VISIBILITY",
                "fr": "VisiblePour",
                "en-US": "Visible To"
            },
            {
                "opy": "IconReeval.VISIBILITY_AND_POSITION",
                "fr": "VisiblePourEtPosition",
                "en-US": "Visible To And Position"
            }
        ]
    },
    "EFFECT REEVALUATION": {
        "opy": "EffectReeval",
        "values": [
            {
                "opy": "EffectReeval.POSITION_AND_RADIUS",
                "fr": "PositionEtRayon",
                "en-US": "Position And Radius"
            },
            {
                "opy": "EffectReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            },
            {
                "opy": "EffectReeval.VISIBILITY",
                "fr": "VisiblePour",
                "en-US": "Visible To"
            },
            {
                "opy": "EffectReeval.VISIBILITY_POSITION_AND_RADIUS",
                "fr": "VisiblePourPositionEtRayon",
                "en-US": "Visible To Position And Radius"
            }
        ]
    },
    "HUD TEXT REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "opy": "HudReeval.STRING",
                "fr": "ChaîneDeTexte",
                "en-US": "String"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "fr": "VisiblePourEtChaîneDeTexte",
                "en-US": "Visible To And String"
            }
        ]
    },
    "WORLD TEXT REEVALUATION": {
        "opy": "WorldTextReeval",
        "values": [
            {
                "opy": "WorldTextReeval.STRING",
                "fr": "ChaîneDeTexte",
                "en-US": "String"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_AND_STRING",
                "fr": "VisiblePourEtChaîneDeTexte",
                "en-US": "Visible To And String"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_POSITION_AND_STRING",
                "fr": "VisiblePourPositionEtChaîneDeTexte",
                "en-US": "Visible To Position And String"
            }
        ]
    },
    "CHASE RATE REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_RATE",
                "fr": "DestinationEtTaux",
                "en-US": "Destination And Rate"
            },
            {
                "opy": "ChaseReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            }
        ]
    },
    "CHASE TIME REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_DURATION",
                "fr": "DestinationEtDurée",
                "en-US": "Destination And Duration"
            },
            {
                "opy": "ChaseReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            }
        ]
    },
    "OBJECTIVE DESCRIPTION REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "opy": "HudReeval.STRING",
                "fr": "ChaîneDeTexte",
                "en-US": "String"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "fr": "VisiblePourEtChaîneDeTexte",
                "en-US": "Visible To And String"
            }
        ]
    },
    "DAMAGE MODIFICATION REEVALUATION": {
        "opy": "DamageReeval",
        "values": [
            {
                "opy": "DamageReeval.NONE",
                "fr": "Aucun",
                "en-US": "None"
            },
            {
                "opy": "DamageReeval.RECEIVERS_AND_DAMAGERS",
                "fr": "RécepteursEtémetteursDeDégâts",
                "en-US": "Receivers And Damagers"
            },
            {
                "opy": "DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT",
                "fr": "RécepteursDeDégâtsémetteursDeDégâtsEtPourcentageDeDégâts",
                "en-US": "Receivers Damagers And Damage Percent"
            }
        ]
    },
    "FACING REEVALUATION": {
        "opy": "FacingReeval",
        "values": [
            {
                "opy": "FacingReeval.DIRECTION_AND_TURN_RATE",
                "fr": "DirectionEtTauxDeRotation",
                "en-US": "Direction And Turn Rate"
            },
            {
                "opy": "FacingReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            }
        ]
    },
    "WAIT BEHAVIOR": {
        "opy": "Wait",
        "values": [
            {
                "opy": "Wait.ABORT_WHEN_FALSE",
                "fr": "InterrompreQuandFaux",
                "en-US": "Abort When False"
            },
            {
                "opy": "Wait.IGNORE_CONDITION",
                "fr": "IgnorerLaCondition",
                "en-US": "Ignore Condition"
            },
            {
                "opy": "Wait.RESTART_WHEN_TRUE",
                "fr": "RedémarrerQuandVrai",
                "en-US": "Restart When True"
            }
        ]
    },
    "BARRIERS LOS": {
        "opy": "BarrierLos",
        "values": [
            {
                "opy": "BarrierLos.BLOCKED_BY_ENEMY_BARRIERS",
                "fr": "LesBarrièresEnnemiesBloquentLaLigneDeVue",
                "en-US": "Enemy Barriers Block Los"
            },
            {
                "opy": "BarrierLos.BLOCKED_BY_ALL_BARRIERS",
                "fr": "ToutesLesBarrièresBloquentLaLigneDeVue",
                "en-US": "All Barriers Block Los"
            },
            {
                "opy": "BarrierLos.PASS_THROUGH_BARRIERS",
                "fr": "LesBarrièresNeBloquentPasLaLigneDeVue",
                "en-US": "Barriers Do Not Block Los"
            }
        ]
    },
    "STATUS": {
        "opy": "Status",
        "values": [
            {
                "opy": "Status.ASLEEP",
                "fr": "Endormi",
                "en-US": "Asleep"
            },
            {
                "opy": "Status.BURNING",
                "fr": "Enflammé",
                "en-US": "Burning"
            },
            {
                "opy": "Status.FROZEN",
                "fr": "Gelé",
                "en-US": "Frozen"
            },
            {
                "opy": "Status.HACKED",
                "fr": "Piraté",
                "en-US": "Hacked"
            },
            {
                "opy": "Status.INVINCIBLE",
                "fr": "Invincible",
                "en-US": "Invincible"
            },
            {
                "opy": "Status.KNOCKED_DOWN",
                "fr": "Renversé",
                "en-US": "Knocked Down"
            },
            {
                "opy": "Status.PHASED_OUT",
                "fr": "Déphasé",
                "en-US": "Phased Out"
            },
            {
                "opy": "Status.ROOTED",
                "fr": "Immobilisé",
                "en-US": "Rooted"
            },
            {
                "opy": "Status.STUNNED",
                "fr": "Étourdi",
                "en-US": "Stunned"
            },
            {
                "opy": "Status.UNKILLABLE",
                "fr": "Intuable",
                "en-US": "Unkillable"
            }
        ]
    },
    "SPECTATOR VISIBILITY": {
        "opy": "SpecVisibility",
        "values": [
            {
                "opy": "SpecVisibility.DEFAULT",
                "fr": "VisibilitéParDéfaut",
                "en-US": "Default Visibility"
            },
            {
                "opy": "SpecVisibility.ALWAYS",
                "fr": "ToujoursVisible",
                "en-US": "Visible Always"
            },
            {
                "opy": "SpecVisibility.NEVER",
                "fr": "JamaisVisible",
                "en-US": "Visible Never"
            }
        ]
    },
    "BEAM EFFECT": {
        "opy": "Beam",
        "values": [
            {
                "opy": "Beam.BAD",
                "fr": "MauvaisRayon",
                "en-US": "Bad Beam"
            },
            {
                "opy": "Beam.GOOD",
                "fr": "BonRayon",
                "en-US": "Good Beam"
            },
            {
                "opy": "Beam.GRAPPLE",
                "fr": "RayonDuGrappin",
                "en-US": "Grapple Beam"
            }
        ]
    },
    "THROTTLE BEHAVIOR": {
        "opy": "Throttle",
        "values": [
            {
                "opy": "Throttle.REPLACE_EXISTING",
                "fr": "RemplacerL’accélérationExistante",
                "en-US": "Replace Existing Throttle"
            },
            {
                "opy": "Throttle.ADD_TO_EXISTING",
                "fr": "AjouteràL’accélérationExistante",
                "en-US": "Add To Existing Throttle"
            }
        ]
    },
    "THROTTLE REEVALUATION": {
        "opy": "ThrottleReeval",
        "values": [
            {
                "opy": "ThrottleReeval.DIRECTION_AND_MAGNITUDE",
                "fr": "DirectionEtAmpleur",
                "en-US": "Direction And Magnitude"
            },
            {
                "opy": "ThrottleReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            }
        ]
    },
    "ACCELERATION REEVALUATION": {
        "opy": "AccelReeval",
        "values": [
            {
                "opy": "AccelReeval.DIRECTION_RATE_AND_MAX_SPEED",
                "fr": "DirectionTauxEtVitesseMaximum",
                "en-US": "Direction Rate And Max Speed"
            },
            {
                "opy": "AccelReeval.NONE",
                "fr": "Aucune",
                "en-US": "None"
            }
        ]
    },
    "MAP CONSTANT": {
        "opy": "Map",
        "values": [
            {
                "opy": "Map.AYUTTHAYA",
                "en-US": "Ayutthaya"
            },
            {
                "opy": "Map.BLACK_FOREST",
                "en-US": "Black Forest"
            },
            {
                "opy": "Map.BLACK_FOREST_WINTER",
                "en-US": "Black Forest Winter"
            },
            {
                "opy": "Map.BLIZZ_WORLD",
                "en-US": "Blizzard World"
            },
            {
                "opy": "Map.BLIZZ_WORLD_WINTER",
                "en-US": "Blizzard World Winter"
            },
            {
                "opy": "Map.BUSAN",
                "en-US": "Busan"
            },
            {
                "opy": "Map.BUSAN_DOWNTOWN_LNY",
                "en-US": "Busan Downtown Lunar New Year"
            },
            {
                "opy": "Map.BUSAN_SANCTUARY_LNY",
                "en-US": "Busan Sanctuary Lunar New Year"
            },
            {
                "opy": "Map.BUSAN_STADIUM",
                "en-US": "Busan Stadium"
            },
            {
                "opy": "Map.CASTILLO",
                "en-US": "Castillo"
            },
            {
                "opy": "Map.CHATEAU_GUILLARD",
                "en-US": "Château Guillard"
            },
            {
                "opy": "Map.CHATEAU_GUILLARD_HALLOWEEN",
                "en-US": "Château Guillard Halloween"
            },
            {
                "opy": "Map.DORADO",
                "en-US": "Dorado"
            },
            {
                "opy": "Map.ECOPOINT_ANTARCTICA",
                "en-US": "Ecopoint: Antarctica"
            },
            {
                "opy": "Map.ECOPOINT_ANTARCTICA_WINTER",
                "en-US": "Ecopoint: Antarctica Winter"
            },
            {
                "opy": "Map.EICHENWALDE",
                "en-US": "Eichenwalde"
            },
            {
                "opy": "Map.EICHENWALDE_HALLOWEEN",
                "en-US": "Eichenwalde Halloween"
            },
            {
                "opy": "Map.ESTADIO_DAS_RAS",
                "en-US": "Estádio Das Rãs"
            },
            {
                "opy": "Map.HANAMURA",
                "en-US": "Hanamura"
            },
            {
                "opy": "Map.HANAMURA_WINTER",
                "en-US": "Hanamura Winter"
            },
            {
                "opy": "Map.Havana",
                "en-US": "Havana"
            },
            {
                "opy": "Map.HOLLYWOOD",
                "en-US": "Hollywood"
            },
            {
                "opy": "Map.HOLLYWOOD_HALLOWEEN",
                "en-US": "Hollywood Halloween"
            },
            {
                "opy": "Map.HORIZON_LUNAR_COLONY",
                "en-US": "Horizon Lunar Colony"
            },
            {
                "opy": "Map.ILIOS",
                "en-US": "Ilios"
            },
            {
                "opy": "Map.ILIOS_LIGHTHOUSE",
                "en-US": "Ilios Lighthouse"
            },
            {
                "opy": "Map.ILIOS_RUINS",
                "en-US": "Ilios Ruins"
            },
            {
                "opy": "Map.ILIOS_WELL",
                "en-US": "Ilios Well"
            },
            {
                "opy": "Map.JUNKENSTEIN",
                "en-US": "Junkenstein's Revenge"
            },
            {
                "opy": "Map.JUNKERTOWN",
                "en-US": "Junkertown"
            },
            {
                "opy": "Map.KINGS_ROW",
                "en-US": "King's Row"
            },
            {
                "opy": "Map.KINGS_ROW_WINTER",
                "en-US": "King's Row Winter"
            },
            {
                "opy": "Map.LIJIANG_CONTROL_CENTER",
                "en-US": "Lijiang Control Center"
            },
            {
                "opy": "Map.LIJIANG_CONTROL_CENTER_LNY",
                "en-US": "Lijiang Control Center Lunar New Year"
            },
            {
                "opy": "Map.LIJIANG_GARDEN",
                "en-US": "Lijiang Garden"
            },
            {
                "opy": "Map.LIJIANG_GARDEN_LNY",
                "en-US": "Lijiang Garden Lunar New Year"
            },
            {
                "opy": "Map.LIJIANG_NIGHT_MARKET",
                "en-US": "Lijiang Night Market"
            },
            {
                "opy": "Map.LIJIANG_NIGHT_MARKET_LNY",
                "en-US": "Lijiang Night Market Lunar New Year"
            },
            {
                "opy": "Map.LIJIANG_TOWER",
                "en-US": "Lijiang Tower"
            },
            {
                "opy": "Map.LIJIANG_TOWER_LNY",
                "en-US": "Lijiang Tower Lunar New Year"
            },
            {
                "opy": "Map.NECROPOLIS",
                "en-US": "Necropolis"
            },
            {
                "opy": "Map.NEPAL",
                "en-US": "Nepal"
            },
            {
                "opy": "Map.NEPAL_SANCTUM",
                "en-US": "Nepal Sanctum"
            },
            {
                "opy": "Map.NEPAL_SHRINE",
                "en-US": "Nepal Shrine"
            },
            {
                "opy": "Map.NEPAL_VILLAGE",
                "en-US": "Nepal Village"
            },
            {
                "opy": "Map.NEPAL_VILLAGE_WINTER",
                "en-US": "Nepal Village Winter"
            },
            {
                "opy": "Map.NUMBANI",
                "en-US": "Numbani"
            },
            {
                "opy": "Map.OASIS",
                "en-US": "Oasis"
            },
            {
                "opy": "Map.OASIS_CITY_CENTER",
                "en-US": "Oasis City Center"
            },
            {
                "opy": "Map.OASIS_GARDENS",
                "en-US": "Oasis Gardens"
            },
            {
                "opy": "Map.OASIS_UNIVERSITY",
                "en-US": "Oasis University"
            },
            {
                "opy": "Map.PARIS",
                "en-US": "Paris"
            },
            {
                "opy": "Map.PETRA",
                "en-US": "Petra"
            },
            {
                "opy": "Map.PRACTICE_RANGE",
                "en-US": "Practice Range"
            },
            {
                "opy": "Map.RIALTO",
                "en-US": "Rialto"
            },
            {
                "opy": "Map.ROUTE_66",
                "en-US": "Route 66"
            },
            {
                "opy": "Map.SYDNEY_HARBOUR_ARENA",
                "en-US": "Sydney Harbour Arena"
            },
            {
                "opy": "Map.TEMPLE_OF_ANUBIS",
                "en-US": "Temple Of Anubis"
            },
            {
                "opy": "Map.VOLSKAYA",
                "en-US": "Volskaya Industries"
            },
            {
                "opy": "Map.WATCHPOINT_GIBRALTAR",
                "en-US": "Watchpoint: Gibraltar"
            }
        ]
    },
    "GAMEMODE CONSTANT": {
        "opy": "Gamemode",
        "values": [
            {
                "opy": "Gamemode.ASSAULT",
                "en-US": "Assault"
            },
            {
                "opy": "Gamemode.CTF",
                "en-US": "Capture The Flag"
            },
            {
                "opy": "Gamemode.CONTROL",
                "en-US": "Control"
            },
            {
                "opy": "Gamemode.FFA",
                "en-US": "Deathmatch"
            },
            {
                "opy": "Gamemode.ELIMINATION",
                "en-US": "Elimination"
            },
            {
                "opy": "Gamemode.ESCORT",
                "en-US": "Escort"
            },
            {
                "opy": "Gamemode.HYBRID",
                "en-US": "Hybrid"
            },
            {
                "opy": "Gamemode.JUNKENSTEIN",
                "en-US": "Junkenstein's Revenge"
            },
            {
                "opy": "Gamemode.LUCIOBALL",
                "en-US": "Lúcioball"
            },
            {
                "opy": "Gamemode.MEIS_SNOWBALL_OFFENSIVE",
                "en-US": "Mei's Snowball Offensive"
            },
            {
                "opy": "Gamemode.PRACTICE_RANGE",
                "en-US": "Practice Range"
            },
            {
                "opy": "Gamemode.SKIRMISH",
                "en-US": "Skirmish"
            },
            {
                "opy": "Gamemode.TDM",
                "en-US": "Team Deathmatch"
            },
            {
                "opy": "Gamemode.YETI_HUNTER",
                "en-US": "Yeti Hunter"
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
//Note: each workshop keyword MUST be with no spaces!

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

var ruleKw = 
//begin-json
[
    {
        "opy": "@Rule",
        "fr": "règle",
        "en-US": "Rule"
    },
    {
        "opy": "@Event",
        "fr": "évènement",
        "en-US": "Event"
    },
    {
        "opy": "_conditions",
        "fr": "conditions",
        "kr": "condition",
        "en-US": "Conditions"
    },
    {
        "opy": "_actions",
        "fr": "actions",
        "kr": "action",
        "en-US": "Actions"
    },
    {
        "opy": "_disabled",
        "fr": "désactivé",
        "en-US": "Disabled"
    },
    {
        "opy": "_variables",
        "en-US": "Variables"
    },
    {
        "opy": "_global",
        "en-US": "Global"
    },
    {
        "opy": "_player",
        "en-US": "Player"
    }
]
//end-json

//Event keywords
var eventKw = 
//begin-json
[
    {
        "opy": "global",
        "fr": "toutelapartie-toutlemonde",
        "en-US": "Ongoing - Global"
    },
    {
        "opy": "eachPlayer",
        "fr": "toutelapartie-chaquejoueur",
        "en-US": "Ongoing - Eachplayer"
    },
    {
        "opy": "playerTookDamage",
        "fr": "unjoueursubitdesdégâts",
        "en-US": "Player Took Damage"
    },
    {
        "opy": "playerDealtDamage",
        "fr": "unjoueurinfligedesdégâts",
        "en-US": "Player Dealt Damage"
    },
    {
        "opy": "playerDealtFinalBlow",
        "fr": "unjoueurinfligeuncoupdegrâce",
        "en-US": "Player Dealt Final Blow"
    },
    {
        "opy": "playerDied",
        "fr": "unjoueurmeurt",
        "en-US": "Player Died"
    },
    {
        "opy": "playerEarnedElimination",
        "fr": "unjoueurobtientuneélimination",
        "en-US": "Player Earned Elimination"
    },
    {
        "opy": "playerDealtHealing",
        "fr": "unjoueuraprodiguédessoins",
        "en-US": "Player Dealt Healing"
    },
    {
        "opy": "playerReceivedHealing",
        "fr": "unjoueurareçudessoins",
        "en-US": "Player Received Healing"
    },
    {
        "opy": "playerJoined",
        "fr": "unjoueurarejointlapartie",
        "en-US": "Player Joined Match"
    },
    {
        "opy": "playerLeft",
        "fr": "unjoueuraquittélapartie",
        "en-US": "Player Left Match"
    }
]
//end-json

var eventTeamKw = 
//begin-json
[
    {
        "opy": "all",
        "fr": "lesdeux",
        "en-US": "All"
    },
    {
        "opy": "1",
        "fr": "Équipe1",
        "en-US": "Team 1"
    },
    {
        "opy": "2",
        "fr": "Équipe2",
        "en-US": "Team 2"
    }
]
//end-json

var eventSlotKw = 
//begin-json
[
    {
        "opy": "0",
        "fr": "emplacement0",
        "en-US": "Slot 0"
    },
    {
        "opy": "1",
        "fr": "emplacement1",
        "en-US": "Slot 1"
    },
    {
        "opy": "2",
        "fr": "emplacement2",
        "en-US": "Slot 2"
    },
    {
        "opy": "3",
        "fr": "emplacement3",
        "en-US": "Slot 3"
    },
    {
        "opy": "4",
        "fr": "emplacement4",
        "en-US": "Slot 4"
    },
    {
        "opy": "5",
        "fr": "emplacement5",
        "en-US": "Slot 5"
    },
    {
        "opy": "6",
        "fr": "emplacement6",
        "en-US": "Slot 6"
    },
    {
        "opy": "7",
        "fr": "emplacement7",
        "en-US": "Slot 7"
    },
    {
        "opy": "8",
        "fr": "emplacement8",
        "en-US": "Slot 8"
    },
    {
        "opy": "9",
        "fr": "emplacement9",
        "en-US": "Slot 9"
    },
    {
        "opy": "10",
        "fr": "emplacement10",
        "en-US": "Slot 10"
    },
    {
        "opy": "11",
        "fr": "emplacement11",
        "en-US": "Slot 11"
    }
]
//end-json

var eventPlayerKw = 
//begin-json
[
    {
        "opy": "all",
        "fr": "tout",
        "en-US": "All"
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
//Note: assumes "randInt", "randReal", "randShuffle" and "randChoice" all have the same "random" word, no matter the language.
var wsRand;

//Set at each rule, to check whether it is legal to use "eventPlayer" and related.
var currentRuleEvent;

//If set to true, sets all rule titles to empty.
var obfuscateRules;

//Contains all macros.
var macros;

var encounteredWarnings;
var suppressedWarnings;
var globalSuppressedWarnings;


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
	wsRand = tows("_randomWs", valueFuncKw);
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
const reservedNames = ["if", "else", "elif", "do", "while", "for", "return", "continue", "false", "true", "null", "goto", "lambda", "del", "import", "break", "and", "or", "not", "in", "eventPlayer", "attacker", "victim", "eventDamage", "eventHealing", "eventWasCriticalHit", "healee", "healer", "hostPlayer", "loc", "RULE_CONDITION", "x", "y", "z", "math", "pi", "e", "random", "Vector"].concat( Object.keys(constantValues).map(x => constantValues[x].opy));

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
	fullwidthMappings[char] = String.fromCharCode(char.charCodeAt(0)+0xFEE0);
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
	for (var variable of varArray) {
		if (variable.name === content) {
			return content;
		}
	}
	if (defaultVarNames.includes(content)) {
		//Add the variable as it doesn't already exist (else it would've been caught by the for)
		addVariable(content, isGlobalVariable, defaultVarNames.indexOf(content));
		return content;
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
	return x.includes(wsRand);
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
	} catch (e) {
		error("Cannot use multiple files in browsers");
	}
	try {
		return ""+fs.readFileSync(path);
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
		
		var currentCond = decompileRuleCondition(conditions[i]);
		//Check for and-ing with true
		if (currentCond === "true") {
			continue;
		}
		
		if (operatorPrecedenceStack[0] < 2) {
			currentCond = "("+currentCond+")";
		}
		condStrs.push(currentCond);
	}
	var condStr = condStrs.join(" and ");
	
	//This happens if everything is true
	if (condStr === "") {
		condStr = "true";
	}
	result += condStr;
	
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
	}

	var rules = tokenize(content);
	//console.log(rules);

	var result = "";
	for (var i = 0; i < rules.length; i++) {
		result += compileRule(rules[i]);
	}

	result = generateVariablesField()+result;

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
		
		result += "\t"+tows("_"+varType, ruleKw)+":\n";
		for (var i = 0; i < 128; i++) {
			if (outputVariables[i] !== undefined) {
				result += "\t\t"+i+": "+outputVariables[i]+"\n";
			} else {
				result += "\t\t"+i+": _unused_var_"+i+"\n";
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
	//	"type": "if"|"else"|"fakeelse"|"ghostelse"|"fakeghostelse"|"skip"|"skipif"|"label"|"other"|"forloop"|"optimized"
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
			content: currentResultLineContent,
			label: currentResultLineLabel,
			indentLevel: lines[i].indentLevel,
			fileStack: lines[i].tokens[0].fileStack,
		});

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
		if (["label", "ghostelse", "fakeghostelse", "forloop", "optimized"].includes(type)) {
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

		} else if (["label", "ghostelse", "fakeghostelse", "forloop", "optimized"].includes(resultLines[i].type)) {
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
				
				error("Ternary operator (A if B else C) is disabled as it is not possible to put a boolean in an array index.");
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
				//A if condition else B -> [B,A][not condition]
				return tows("_valueInArray", valueFuncKw)+"("+tows("_appendToArray", valueFuncKw)+"("+tows("_appendToArray", valueFuncKw)+"("+tows("_emptyArray", valueFuncKw)+", "+falseExpr+"), "+trueExpr+"), "+tows("not", valueFuncKw)+"("+condition+"))";

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
				if (isWsTrue(op1) || isWsTrue(op2)) {
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
				if (isWsTrue(op2)) {
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
		var string;
		if (content.length === 1) {
			string = content[0].text;
		} else if (content.length === 2) {
			string = content[1].text;
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
			error("Failed to parse string: amount of tokens is "+content.length);
		}
		if (stringModifiers.localizedString === true) {
			return parseLocalizedString(tokenizeLocalizedString(string.substring(1, string.length-1)), parseArgs.formatArgs);
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
		if (name === "eventPlayer" && !(["eachPlayer", "playerJoined", "playerLeft", "playerEarnedElimination", "playerDealtDamage", "playerTookDamage", "playerDealtFinalBlow", "playerDied", "playerDealtHealing", "playerReceivedHealing"].includes(currentRuleEvent))) {
			error("Cannot use 'eventPlayer' with event type '"+currentRuleEvent+"'");

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
			result += parse(operands[1])+", "+operands[0][0].text;
		} else {
			funcName += "GlobalVariable";
			result += args[0][0].text;
		}
		
		return tows(funcName, actionKw)+"("+result+")";
	}
		
	
	if (name === "wait") {
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
	
	//[0] -> first of
	if (membership.length === 1 && membership[0].text === '0') {
		return tows("_firstOf", valueFuncKw)+"("+parse(array)+")";
		
	//[-1] -> last of
	} else if (membership.length === 2 && membership[0].text === '-' && membership[1].text === '1') {
		return tows("_lastOf", valueFuncKw)+"("+parse(array)+")";
		
	} else {
		return tows("_valueInArray", valueFuncKw)+"("+parse(array)+", "+parse(membership)+")";
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
	content = content.substring(1, content.length-1);

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

	//Tokenize string
	while (true) {
		var index = content.search(/{\d*}/)
		if (index >= 0) {
			if (index > 0) {
				tokens.push({
					text: content.substring(0, index),
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
				var containsNonFullwidthChar = false;
				for (var char of content) {
					if (char in fullwidthMappings) {
						tmpStr += fullwidthMappings[char];
					} else {
						containsNonFullwidthChar = true;
						tmpStr += char;
					}
				}
				content = tmpStr;
				if (containsNonFullwidthChar) {
					warn("w_not_total_fullwidth", "Could not fully convert this string to fullwidth characters")
				}
			}

			tokens.push({
				text: content,
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

	if (stringModifiers.bigLetters && !isConvertedToBigLetters) {
		error("Could not convert the string to big letters. The string must have one of the following chars: '"+Object.keys(bigLettersMappings).join("")+"'");
	}

	result = parseStringTokens(tokens, args);

	return result;

}

function parseStringTokens(tokens, args) {
	var result = "";
	var resultArgs = [];
	var numbers = [];
	var numbersEncountered = [];
	var mappings = {};


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
		if (tokens[i].type === "string") {
			result += tokens[i].text;
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
        "fr": "Zones",
        "en-US": "Zones"
    },
    {
        "opy": "Zone",
        "fr": "Zone",
        "en-US": "Zone"
    },
    {
        "opy": "You Win",
        "fr": "Vous avez gagné",
        "en-US": "You Win"
    },
    {
        "opy": "You Lose",
        "fr": "Vous avez perdu",
        "en-US": "You Lose"
    },
    {
        "opy": "You",
        "fr": "Vous",
        "en-US": "You"
    },
    {
        "opy": "Yes",
        "fr": "Oui",
        "en-US": "Yes"
    },
    {
        "opy": "Yellow",
        "fr": "Jaune",
        "en-US": "Yellow"
    },
    {
        "opy": "Wow",
        "fr": "Waouh",
        "en-US": "Wow"
    },
    {
        "opy": "Worst",
        "fr": "Le pire",
        "en-US": "Worst"
    },
    {
        "opy": "Worse",
        "fr": "Pire",
        "en-US": "Worse"
    },
    {
        "opy": "Wisdom",
        "fr": "Sagesse",
        "en-US": "Wisdom"
    },
    {
        "opy": "Wins",
        "fr": "Victoires",
        "en-US": "Wins"
    },
    {
        "opy": "Winners",
        "fr": "Vainqueurs",
        "en-US": "Winners"
    },
    {
        "opy": "Winner",
        "fr": "Gagnant",
        "en-US": "Winner"
    },
    {
        "opy": "Win",
        "fr": "Victoire",
        "en-US": "Win"
    },
    {
        "opy": "Wild",
        "fr": "Libre",
        "en-US": "Wild"
    },
    {
        "opy": "White",
        "fr": "Blanc",
        "en-US": "White"
    },
    {
        "opy": "West",
        "fr": "Ouest",
        "en-US": "West"
    },
    {
        "opy": "Well Played",
        "fr": "Bien joué",
        "en-US": "Well Played"
    },
    {
        "opy": "Welcome",
        "fr": "Bienvenue",
        "en-US": "Welcome"
    },
    {
        "opy": "Warning",
        "fr": "Avertissement",
        "en-US": "Warning"
    },
    {
        "opy": "Walls",
        "fr": "Murs",
        "en-US": "Walls"
    },
    {
        "opy": "Wall",
        "fr": "Mur",
        "en-US": "Wall"
    },
    {
        "opy": "Waiting",
        "fr": "Attente",
        "en-US": "Waiting"
    },
    {
        "guid": "00000000C5D1",
        "opy": "Wait",
        "fr": "Attendre",
        "en-US": "Wait"
    },
    {
        "opy": "Vortices",
        "fr": "Vortex",
        "en-US": "Vortices"
    },
    {
        "opy": "Vortex",
        "fr": "Vortex",
        "en-US": "Vortex"
    },
    {
        "opy": "Visible",
        "fr": "Visible",
        "en-US": "Visible"
    },
    {
        "opy": "Victory",
        "fr": "Victoire",
        "en-US": "Victory"
    },
    {
        "opy": "Use Ultimate Ability",
        "fr": "Utilisation de la capacité ultime",
        "en-US": "Use Ultimate Ability"
    },
    {
        "opy": "Use Ability 2",
        "fr": "Utilisation de la capacité 2",
        "en-US": "Use Ability 2"
    },
    {
        "opy": "Use Ability 1",
        "fr": "Utilisation de la capacité 1",
        "en-US": "Use Ability 1"
    },
    {
        "opy": "Uploading",
        "fr": "Envoi",
        "en-US": "Uploading"
    },
    {
        "opy": "Uploaded",
        "fr": "Envoyé",
        "en-US": "Uploaded"
    },
    {
        "opy": "Upload",
        "fr": "Envoyer",
        "en-US": "Upload"
    },
    {
        "opy": "Upgrades",
        "fr": "Améliorations",
        "en-US": "Upgrades"
    },
    {
        "opy": "Upgrade",
        "fr": "Amélioration",
        "en-US": "Upgrade"
    },
    {
        "opy": "Up",
        "fr": "Haut",
        "en-US": "Up"
    },
    {
        "opy": "Unstable",
        "fr": "Instable",
        "en-US": "Unstable"
    },
    {
        "opy": "Unsafe",
        "fr": "Dangereux",
        "en-US": "Unsafe"
    },
    {
        "opy": "Unlocking",
        "fr": "Déverrouillage",
        "en-US": "Unlocking"
    },
    {
        "opy": "Unlocked",
        "fr": "Déverrouillé",
        "en-US": "Unlocked"
    },
    {
        "opy": "Unlock",
        "fr": "Déverrouiller",
        "en-US": "Unlock"
    },
    {
        "opy": "Unlimited",
        "fr": "Illimité",
        "en-US": "Unlimited"
    },
    {
        "opy": "Unknown",
        "fr": "Inconnu",
        "en-US": "Unknown"
    },
    {
        "opy": "Under",
        "fr": "Sous",
        "en-US": "Under"
    },
    {
        "opy": "Ultimate Ability",
        "fr": "Capacité ultime",
        "en-US": "Ultimate Ability"
    },
    {
        "opy": "Ugh",
        "fr": "Arg",
        "en-US": "Ugh"
    },
    {
        "opy": "Turrets",
        "fr": "Tourelles",
        "en-US": "Turrets"
    },
    {
        "opy": "Turret",
        "fr": "Tourelle",
        "en-US": "Turret"
    },
    {
        "opy": "Try Again",
        "fr": "Veuillez réessayer",
        "en-US": "Try Again"
    },
    {
        "opy": "Transferring",
        "fr": "Transfert",
        "en-US": "Transferring"
    },
    {
        "opy": "Transferred",
        "fr": "Transféré",
        "en-US": "Transferred"
    },
    {
        "opy": "Transfer",
        "fr": "Transférer",
        "en-US": "Transfer"
    },
    {
        "opy": "Traitors",
        "fr": "Traîtres",
        "en-US": "Traitors"
    },
    {
        "opy": "Traitor",
        "fr": "Traître",
        "en-US": "Traitor"
    },
    {
        "opy": "Trading",
        "fr": "Échange",
        "en-US": "Trading"
    },
    {
        "opy": "Traded",
        "fr": "Échangé",
        "en-US": "Traded"
    },
    {
        "opy": "Trade",
        "fr": "Échanger",
        "en-US": "Trade"
    },
    {
        "opy": "Total",
        "fr": "Total",
        "en-US": "Total"
    },
    {
        "opy": "Times",
        "fr": "Temps",
        "en-US": "Times"
    },
    {
        "opy": "Time",
        "fr": "Temps",
        "en-US": "Time"
    },
    {
        "opy": "Tiebreaker",
        "fr": "Décisif",
        "en-US": "Tiebreaker"
    },
    {
        "opy": "Threats",
        "fr": "Menaces",
        "en-US": "Threats"
    },
    {
        "opy": "Threat Levels",
        "fr": "Niveaux de menace",
        "en-US": "Threat Levels"
    },
    {
        "opy": "Threat Level",
        "fr": "Niveau de menace",
        "en-US": "Threat Level"
    },
    {
        "opy": "Threat",
        "fr": "Menace",
        "en-US": "Threat"
    },
    {
        "opy": "That Was Awesome",
        "fr": "C’était génial",
        "en-US": "That Was Awesome"
    },
    {
        "opy": "Thanks",
        "fr": "Remerciements",
        "en-US": "Thanks"
    },
    {
        "opy": "Thank You",
        "fr": "Merci",
        "en-US": "Thank You"
    },
    {
        "opy": "Terrible",
        "fr": "Terrible",
        "en-US": "Terrible"
    },
    {
        "opy": "Teams",
        "fr": "Équipes",
        "en-US": "Teams"
    },
    {
        "opy": "Teammates",
        "fr": "Équipiers",
        "en-US": "Teammates"
    },
    {
        "opy": "Teammate",
        "fr": "Équipier",
        "en-US": "Teammate"
    },
    {
        "opy": "Team",
        "fr": "Équipe",
        "en-US": "Team"
    },
    {
        "opy": "Targets",
        "fr": "Cibles",
        "en-US": "Targets"
    },
    {
        "opy": "Target",
        "fr": "Cible",
        "en-US": "Target"
    },
    {
        "opy": "Surviving",
        "fr": "Survie",
        "en-US": "Surviving"
    },
    {
        "opy": "Survived",
        "fr": "Survécu",
        "en-US": "Survived"
    },
    {
        "opy": "Survive",
        "fr": "Survivre",
        "en-US": "Survive"
    },
    {
        "opy": "Superb",
        "fr": "Superbe",
        "en-US": "Superb"
    },
    {
        "opy": "Sunk",
        "fr": "Noyé",
        "en-US": "Sunk"
    },
    {
        "opy": "Sudden Death",
        "fr": "Mort subite",
        "en-US": "Sudden Death"
    },
    {
        "opy": "Success",
        "fr": "Réussite",
        "en-US": "Success"
    },
    {
        "opy": "Suboptimal",
        "fr": "Sous-optimal",
        "en-US": "Suboptimal"
    },
    {
        "opy": "Stunning",
        "fr": "Étourdissant",
        "en-US": "Stunning"
    },
    {
        "opy": "Stunned",
        "fr": "Étourdi",
        "en-US": "Stunned"
    },
    {
        "opy": "Stun",
        "fr": "Étourdir",
        "en-US": "Stun"
    },
    {
        "opy": "Strength",
        "fr": "Force",
        "en-US": "Strength"
    },
    {
        "opy": "Stopping",
        "fr": "Arrêt",
        "en-US": "Stopping"
    },
    {
        "opy": "Stopped",
        "fr": "Arrêté",
        "en-US": "Stopped"
    },
    {
        "opy": "Stop",
        "fr": "Arrêter",
        "en-US": "Stop"
    },
    {
        "opy": "Staying",
        "fr": "Suit",
        "en-US": "Staying"
    },
    {
        "opy": "Stayed",
        "fr": "Suivi",
        "en-US": "Stayed"
    },
    {
        "opy": "Stay Away",
        "fr": "Éloignez-vous",
        "en-US": "Stay Away"
    },
    {
        "opy": "Stay",
        "fr": "Suivre",
        "en-US": "Stay"
    },
    {
        "opy": "Status",
        "fr": "Statut",
        "en-US": "Status"
    },
    {
        "opy": "Starting",
        "fr": "Commencement",
        "en-US": "Starting"
    },
    {
        "opy": "Started",
        "fr": "Commencé",
        "en-US": "Started"
    },
    {
        "opy": "Start",
        "fr": "Commencer",
        "en-US": "Start"
    },
    {
        "opy": "Stars",
        "fr": "Étoiles",
        "en-US": "Stars"
    },
    {
        "opy": "Star",
        "fr": "Étoile",
        "en-US": "Star"
    },
    {
        "opy": "Stable",
        "fr": "Stable",
        "en-US": "Stable"
    },
    {
        "opy": "Stabilizing",
        "fr": "Stabilisation",
        "en-US": "Stabilizing"
    },
    {
        "opy": "Stabilized",
        "fr": "Stabilisé",
        "en-US": "Stabilized"
    },
    {
        "opy": "Stabilize",
        "fr": "Stabiliser",
        "en-US": "Stabilize"
    },
    {
        "opy": "Spheres",
        "fr": "Sphères",
        "en-US": "Spheres"
    },
    {
        "opy": "Sphere",
        "fr": "Sphère",
        "en-US": "Sphere"
    },
    {
        "opy": "Speeds",
        "fr": "Vitesses",
        "en-US": "Speeds"
    },
    {
        "opy": "Speed",
        "fr": "Vitesse",
        "en-US": "Speed"
    },
    {
        "opy": "Spawning",
        "fr": "Apparition",
        "en-US": "Spawning"
    },
    {
        "opy": "Spawned",
        "fr": "Apparu",
        "en-US": "Spawned"
    },
    {
        "opy": "Spawn",
        "fr": "Apparaître",
        "en-US": "Spawn"
    },
    {
        "opy": "Sparkles",
        "fr": "Étincelles",
        "en-US": "Sparkles"
    },
    {
        "opy": "Spades",
        "fr": "Pique",
        "en-US": "Spades"
    },
    {
        "opy": "Spade",
        "fr": "Pique",
        "en-US": "Spade"
    },
    {
        "opy": "Southwest",
        "fr": "Sud-ouest",
        "en-US": "Southwest"
    },
    {
        "opy": "Southeast",
        "fr": "Sud-est",
        "en-US": "Southeast"
    },
    {
        "opy": "South",
        "fr": "Sud",
        "en-US": "South"
    },
    {
        "opy": "Sorry",
        "fr": "Désolé",
        "en-US": "Sorry"
    },
    {
        "opy": "Sold",
        "fr": "Vendu",
        "en-US": "Sold"
    },
    {
        "opy": "Slowest",
        "fr": "Le plus lent",
        "en-US": "Slowest"
    },
    {
        "opy": "Slower",
        "fr": "Plus lent",
        "en-US": "Slower"
    },
    {
        "opy": "Slow",
        "fr": "Lent",
        "en-US": "Slow"
    },
    {
        "opy": "Slept",
        "fr": "Dormi",
        "en-US": "Slept"
    },
    {
        "opy": "Sleeping",
        "fr": "Dort",
        "en-US": "Sleeping"
    },
    {
        "opy": "Sleep",
        "fr": "Sommeil",
        "en-US": "Sleep"
    },
    {
        "opy": "Skipping",
        "fr": "Passe",
        "en-US": "Skipping"
    },
    {
        "opy": "Skipped",
        "fr": "Passé",
        "en-US": "Skipped"
    },
    {
        "guid": "00000000CAB6",
        "opy": "Skip",
        "fr": "Passer",
        "en-US": "Skip"
    },
    {
        "opy": "Sinking",
        "fr": "Noyade",
        "en-US": "Sinking"
    },
    {
        "opy": "Sink",
        "fr": "Noyer",
        "en-US": "Sink"
    },
    {
        "opy": "Shuffled",
        "fr": "Mélangé",
        "en-US": "Shuffled"
    },
    {
        "opy": "Shuffle",
        "fr": "Mélanger",
        "en-US": "Shuffle"
    },
    {
        "opy": "Shops",
        "fr": "Boutiques",
        "en-US": "Shops"
    },
    {
        "opy": "Shop",
        "fr": "Boutique",
        "en-US": "Shop"
    },
    {
        "opy": "Severing",
        "fr": "Coupure",
        "en-US": "Severing"
    },
    {
        "opy": "Severed",
        "fr": "Coupé",
        "en-US": "Severed"
    },
    {
        "opy": "Severe",
        "fr": "Grave",
        "en-US": "Severe"
    },
    {
        "opy": "Sever",
        "fr": "Couper",
        "en-US": "Sever"
    },
    {
        "opy": "Server Load Peak",
        "fr": "Pic de charge du serveur",
        "en-US": "Server Load Peak"
    },
    {
        "opy": "Server Load Average",
        "fr": "Charge moyenne du serveur",
        "en-US": "Server Load Average"
    },
    {
        "opy": "Server Load",
        "fr": "Charge du serveur",
        "en-US": "Server Load"
    },
    {
        "opy": "Selling",
        "fr": "Vente",
        "en-US": "Selling"
    },
    {
        "opy": "Sell",
        "fr": "Vendre",
        "en-US": "Sell"
    },
    {
        "opy": "Selecting",
        "fr": "Sélectionne",
        "en-US": "Selecting"
    },
    {
        "opy": "Selected",
        "fr": "Sélectionné",
        "en-US": "Selected"
    },
    {
        "opy": "Select",
        "fr": "Sélectionner",
        "en-US": "Select"
    },
    {
        "opy": "Securing",
        "fr": "Sécurisation",
        "en-US": "Securing"
    },
    {
        "opy": "Secured",
        "fr": "Sécurisé",
        "en-US": "Secured"
    },
    {
        "opy": "Secure",
        "fr": "Sécuriser",
        "en-US": "Secure"
    },
    {
        "opy": "Secondary Fire",
        "fr": "Tir secondaire",
        "en-US": "Secondary Fire"
    },
    {
        "opy": "Scores",
        "fr": "Points",
        "en-US": "Scores"
    },
    {
        "opy": "Score",
        "fr": "Points",
        "en-US": "Score"
    },
    {
        "opy": "Saving",
        "fr": "Sauvegarde",
        "en-US": "Saving"
    },
    {
        "opy": "Saved",
        "fr": "Sauvé",
        "en-US": "Saved"
    },
    {
        "opy": "Save",
        "fr": "Sauver",
        "en-US": "Save"
    },
    {
        "opy": "Safe",
        "fr": "Sans danger",
        "en-US": "Safe"
    },
    {
        "opy": "Running",
        "fr": "Course",
        "en-US": "Running"
    },
    {
        "opy": "Run",
        "fr": "Courir",
        "en-US": "Run"
    },
    {
        "opy": "Rounds Won",
        "fr": "Manches gagnées",
        "en-US": "Rounds Won"
    },
    {
        "opy": "Rounds Lost",
        "fr": "Manches perdues",
        "en-US": "Rounds Lost"
    },
    {
        "opy": "Rounds",
        "fr": "Manches",
        "en-US": "Rounds"
    },
    {
        "opy": "Round",
        "fr": "Manche",
        "en-US": "Round"
    },
    {
        "opy": "Right",
        "fr": "Droite",
        "en-US": "Right"
    },
    {
        "opy": "Reversing",
        "fr": "Inverse",
        "en-US": "Reversing"
    },
    {
        "opy": "Reversed",
        "fr": "Inversé",
        "en-US": "Reversed"
    },
    {
        "opy": "Reverse",
        "fr": "Inverser",
        "en-US": "Reverse"
    },
    {
        "opy": "Revealing",
        "fr": "Révélation",
        "en-US": "Revealing"
    },
    {
        "opy": "Revealed",
        "fr": "Révélé",
        "en-US": "Revealed"
    },
    {
        "opy": "Reveal",
        "fr": "Révéler",
        "en-US": "Reveal"
    },
    {
        "opy": "Resurrecting",
        "fr": "Résurrection",
        "en-US": "Resurrecting"
    },
    {
        "opy": "Resurrected",
        "fr": "Ressuscité",
        "en-US": "Resurrected"
    },
    {
        "guid": "00000000C126",
        "opy": "Resurrect",
        "fr": "Ressusciter",
        "en-US": "Resurrect"
    },
    {
        "opy": "Resources",
        "fr": "Ressources ",
        "en-US": "Resources"
    },
    {
        "opy": "Resource",
        "fr": "Ressource",
        "en-US": "Resource"
    },
    {
        "opy": "Rescuing",
        "fr": "Sauvetage",
        "en-US": "Rescuing"
    },
    {
        "opy": "Rescued",
        "fr": "Secouru",
        "en-US": "Rescued"
    },
    {
        "opy": "Rescue",
        "fr": "Secourir",
        "en-US": "Rescue"
    },
    {
        "opy": "Remaining",
        "fr": "Restant",
        "en-US": "Remaining"
    },
    {
        "opy": "Remain",
        "fr": "Rester",
        "en-US": "Remain"
    },
    {
        "opy": "Red",
        "fr": "Rouge",
        "en-US": "Red"
    },
    {
        "opy": "Recovering",
        "fr": "Récupération",
        "en-US": "Recovering"
    },
    {
        "opy": "Recovered",
        "fr": "Récupéré",
        "en-US": "Recovered"
    },
    {
        "opy": "Recover",
        "fr": "Récupérer",
        "en-US": "Recover"
    },
    {
        "opy": "Records",
        "fr": "Records",
        "en-US": "Records"
    },
    {
        "opy": "Record",
        "fr": "Record",
        "en-US": "Record"
    },
    {
        "opy": "Ready",
        "fr": "Prêt",
        "en-US": "Ready"
    },
    {
        "opy": "Reaching",
        "fr": "Atteinte",
        "en-US": "Reaching"
    },
    {
        "opy": "Reached",
        "fr": "Atteint",
        "en-US": "Reached"
    },
    {
        "opy": "Reach",
        "fr": "Atteindre",
        "en-US": "Reach"
    },
    {
        "opy": "Rank S",
        "fr": "Rang S",
        "en-US": "Rank S"
    },
    {
        "opy": "Rank F",
        "fr": "Rang F",
        "en-US": "Rank F"
    },
    {
        "opy": "Rank E",
        "fr": "Rang E",
        "en-US": "Rank E"
    },
    {
        "opy": "Rank D",
        "fr": "Rang D",
        "en-US": "Rank D"
    },
    {
        "opy": "Rank C",
        "fr": "Rang C",
        "en-US": "Rank C"
    },
    {
        "opy": "Rank B",
        "fr": "Rang B",
        "en-US": "Rank B"
    },
    {
        "opy": "Rank A",
        "fr": "Rang A",
        "en-US": "Rank A"
    },
    {
        "opy": "Rank",
        "fr": "Rang",
        "en-US": "Rank"
    },
    {
        "opy": "Raising",
        "fr": "Augmentation",
        "en-US": "Raising"
    },
    {
        "opy": "Raised",
        "fr": "Augmenté",
        "en-US": "Raised"
    },
    {
        "opy": "Raise",
        "fr": "Augmenter",
        "en-US": "Raise"
    },
    {
        "opy": "Purple",
        "fr": "Violet",
        "en-US": "Purple"
    },
    {
        "opy": "Purifying",
        "fr": "Purification",
        "en-US": "Purifying"
    },
    {
        "opy": "Purify",
        "fr": "Purifier",
        "en-US": "Purify"
    },
    {
        "opy": "Purified",
        "fr": "Purifié",
        "en-US": "Purified"
    },
    {
        "opy": "Protecting",
        "fr": "Protection",
        "en-US": "Protecting"
    },
    {
        "opy": "Protected",
        "fr": "Protégé",
        "en-US": "Protected"
    },
    {
        "opy": "Protect",
        "fr": "Protéger",
        "en-US": "Protect"
    },
    {
        "opy": "Projectiles",
        "fr": "Projectiles",
        "en-US": "Projectiles"
    },
    {
        "opy": "Projectile",
        "fr": "Projectile",
        "en-US": "Projectile"
    },
    {
        "opy": "Primary Fire",
        "fr": "Tir principal",
        "en-US": "Primary Fire"
    },
    {
        "opy": "Price",
        "fr": "Prix",
        "en-US": "Price"
    },
    {
        "opy": "Power-Ups",
        "fr": "Bonus",
        "en-US": "Power-Ups"
    },
    {
        "opy": "Power-Up",
        "fr": "Bonus",
        "en-US": "Power-Up"
    },
    {
        "opy": "Power",
        "fr": "Puissance",
        "en-US": "Power"
    },
    {
        "opy": "Position",
        "fr": "Position",
        "en-US": "Position"
    },
    {
        "opy": "Points Lost",
        "fr": "Points perdus",
        "en-US": "Points Lost"
    },
    {
        "opy": "Points Earned",
        "fr": "Points gagnés",
        "en-US": "Points Earned"
    },
    {
        "opy": "Points",
        "fr": "Points",
        "en-US": "Points"
    },
    {
        "opy": "Point",
        "fr": "Point",
        "en-US": "Point"
    },
    {
        "opy": "Playing",
        "fr": "Joue",
        "en-US": "Playing"
    },
    {
        "opy": "Players",
        "fr": "Joueurs",
        "en-US": "Players"
    },
    {
        "opy": "Player",
        "fr": "Joueur",
        "en-US": "Player"
    },
    {
        "opy": "Played",
        "fr": "Joué",
        "en-US": "Played"
    },
    {
        "opy": "Play",
        "fr": "Jouer",
        "en-US": "Play"
    },
    {
        "opy": "Piles",
        "fr": "Piles",
        "en-US": "Piles"
    },
    {
        "opy": "Pile",
        "fr": "Pile",
        "en-US": "Pile"
    },
    {
        "opy": "Picking",
        "fr": "Prise",
        "en-US": "Picking"
    },
    {
        "opy": "Picked",
        "fr": "Pris",
        "en-US": "Picked"
    },
    {
        "opy": "Pick",
        "fr": "Prendre",
        "en-US": "Pick"
    },
    {
        "opy": "Phases",
        "fr": "Phases",
        "en-US": "Phases"
    },
    {
        "opy": "Phase",
        "fr": "Phase",
        "en-US": "Phase"
    },
    {
        "opy": "Payloads",
        "fr": "Convois",
        "en-US": "Payloads"
    },
    {
        "opy": "Payload",
        "fr": "Convoi",
        "en-US": "Payload"
    },
    {
        "opy": "Participants",
        "fr": "Participants",
        "en-US": "Participants"
    },
    {
        "opy": "Participant",
        "fr": "Participant",
        "en-US": "Participant"
    },
    {
        "opy": "Overtime",
        "fr": "Prolongations",
        "en-US": "Overtime"
    },
    {
        "opy": "Over",
        "fr": "Sur",
        "en-US": "Over"
    },
    {
        "opy": "Outside",
        "fr": "Dehors",
        "en-US": "Outside"
    },
    {
        "opy": "Outgoing",
        "fr": "Sortant",
        "en-US": "Outgoing"
    },
    {
        "opy": "Out Of View",
        "fr": "Hors de la vue",
        "en-US": "Out Of View"
    },
    {
        "opy": "Optimizing",
        "fr": "Optimisation",
        "en-US": "Optimizing"
    },
    {
        "opy": "Optimized",
        "fr": "Optimisé",
        "en-US": "Optimized"
    },
    {
        "opy": "Optimize",
        "fr": "Optimiser",
        "en-US": "Optimize"
    },
    {
        "opy": "Optimal",
        "fr": "Optimal",
        "en-US": "Optimal"
    },
    {
        "opy": "Oops",
        "fr": "Oups",
        "en-US": "Oops"
    },
    {
        "opy": "Oof",
        "fr": "Aïe",
        "en-US": "Oof"
    },
    {
        "opy": "On",
        "fr": "Activé",
        "en-US": "On"
    },
    {
        "opy": "Off",
        "fr": "Désactivé",
        "en-US": "Off"
    },
    {
        "opy": "Obtaining",
        "fr": "Obtention",
        "en-US": "Obtaining"
    },
    {
        "opy": "Obtained",
        "fr": "Obtenu",
        "en-US": "Obtained"
    },
    {
        "opy": "Obtain",
        "fr": "Obtenir",
        "en-US": "Obtain"
    },
    {
        "opy": "Objects",
        "fr": "Objets",
        "en-US": "Objects"
    },
    {
        "opy": "Objectives",
        "fr": "Objectifs",
        "en-US": "Objectives"
    },
    {
        "opy": "Objective",
        "fr": "Objectif",
        "en-US": "Objective"
    },
    {
        "opy": "Object",
        "fr": "Objet",
        "en-US": "Object"
    },
    {
        "opy": "Not Today",
        "fr": "Pas aujourd’hui",
        "en-US": "Not Today"
    },
    {
        "opy": "Northwest",
        "fr": "Nord-ouest",
        "en-US": "Northwest"
    },
    {
        "opy": "Northeast",
        "fr": "Nord-est",
        "en-US": "Northeast"
    },
    {
        "opy": "North",
        "fr": "Nord",
        "en-US": "North"
    },
    {
        "opy": "Normal",
        "fr": "Normal",
        "en-US": "Normal"
    },
    {
        "opy": "None",
        "fr": "Aucun",
        "en-US": "None"
    },
    {
        "opy": "No Thanks",
        "fr": "Non merci",
        "en-US": "No Thanks"
    },
    {
        "opy": "No",
        "fr": "Non",
        "en-US": "No"
    },
    {
        "opy": "Nice Try",
        "fr": "Bien essayé",
        "en-US": "Nice Try"
    },
    {
        "opy": "Next Upgrade",
        "fr": "Amélioration suivante",
        "en-US": "Next Upgrade"
    },
    {
        "opy": "Next Targets",
        "fr": "Cibles suivantes",
        "en-US": "Next Targets"
    },
    {
        "opy": "Next Target",
        "fr": "Cible suivante",
        "en-US": "Next Target"
    },
    {
        "opy": "Next Round",
        "fr": "Manche suivante",
        "en-US": "Next Round"
    },
    {
        "opy": "Next Players",
        "fr": "Joueurs suivants",
        "en-US": "Next Players"
    },
    {
        "opy": "Next Player",
        "fr": "Joueur suivant",
        "en-US": "Next Player"
    },
    {
        "opy": "Next Phase",
        "fr": "Phase suivante",
        "en-US": "Next Phase"
    },
    {
        "opy": "Next Objects",
        "fr": "Objets suivants",
        "en-US": "Next Objects"
    },
    {
        "opy": "Next Objective",
        "fr": "Objectif suivant",
        "en-US": "Next Objective"
    },
    {
        "opy": "Next Object",
        "fr": "Objet suivant",
        "en-US": "Next Object"
    },
    {
        "opy": "Next Mission",
        "fr": "Mission suivante",
        "en-US": "Next Mission"
    },
    {
        "opy": "Next Level",
        "fr": "Niveau suivant",
        "en-US": "Next Level"
    },
    {
        "opy": "Next Hostages",
        "fr": "Otages suivants",
        "en-US": "Next Hostages"
    },
    {
        "opy": "Next Hostage",
        "fr": "Otage suivant",
        "en-US": "Next Hostage"
    },
    {
        "opy": "Next Heroes",
        "fr": "Héros suivants",
        "en-US": "Next Heroes"
    },
    {
        "opy": "Next Hero",
        "fr": "Héros suivant",
        "en-US": "Next Hero"
    },
    {
        "opy": "Next Game",
        "fr": "Partie suivante",
        "en-US": "Next Game"
    },
    {
        "opy": "Next Form",
        "fr": "Forme suivante",
        "en-US": "Next Form"
    },
    {
        "opy": "Next Enemy",
        "fr": "Ennemi suivant",
        "en-US": "Next Enemy"
    },
    {
        "opy": "Next Enemies",
        "fr": "Ennemis suivants",
        "en-US": "Next Enemies"
    },
    {
        "opy": "Next Checkpoint",
        "fr": "Point de contrôle suivant",
        "en-US": "Next Checkpoint"
    },
    {
        "opy": "Next Attempt",
        "fr": "Tentative suivante",
        "en-US": "Next Attempt"
    },
    {
        "opy": "Next Ally",
        "fr": "Allié suivant",
        "en-US": "Next Ally"
    },
    {
        "opy": "Next Allies",
        "fr": "Alliés suivants",
        "en-US": "Next Allies"
    },
    {
        "opy": "Next",
        "fr": "Suivant",
        "en-US": "Next"
    },
    {
        "opy": "New Record",
        "fr": "Nouveau record",
        "en-US": "New Record"
    },
    {
        "opy": "New High Score",
        "fr": "Nouveau meilleur score",
        "en-US": "New High Score"
    },
    {
        "opy": "Near",
        "fr": "Près",
        "en-US": "Near"
    },
    {
        "opy": "My Mistake",
        "fr": "C’est de ma faute",
        "en-US": "My Mistake"
    },
    {
        "opy": "Most",
        "fr": "Le plus",
        "en-US": "Most"
    },
    {
        "opy": "More",
        "fr": "Plus",
        "en-US": "More"
    },
    {
        "opy": "Monsters",
        "fr": "Monstres",
        "en-US": "Monsters"
    },
    {
        "opy": "Monster",
        "fr": "Monstre",
        "en-US": "Monster"
    },
    {
        "opy": "Money",
        "fr": "Argent",
        "en-US": "Money"
    },
    {
        "opy": "Moderate",
        "fr": "Modéré",
        "en-US": "Moderate"
    },
    {
        "opy": "Missions",
        "fr": "Missions",
        "en-US": "Missions"
    },
    {
        "opy": "Mission Failed",
        "fr": "Échec de la mission",
        "en-US": "Mission Failed"
    },
    {
        "opy": "Mission Accomplished",
        "fr": "Mission accomplie",
        "en-US": "Mission Accomplished"
    },
    {
        "opy": "Mission Aborted",
        "fr": "Mission annulée",
        "en-US": "Mission Aborted"
    },
    {
        "opy": "Mission",
        "fr": "Mission",
        "en-US": "Mission"
    },
    {
        "opy": "Min",
        "fr": "Minimum",
        "en-US": "Min"
    },
    {
        "opy": "Mild",
        "fr": "Modéré",
        "en-US": "Mild"
    },
    {
        "opy": "Max",
        "fr": "Maximum",
        "en-US": "Max"
    },
    {
        "opy": "Losses",
        "fr": "Défaites",
        "en-US": "Losses"
    },
    {
        "opy": "Loss",
        "fr": "Défaite",
        "en-US": "Loss"
    },
    {
        "opy": "Losers",
        "fr": "Perdants",
        "en-US": "Losers"
    },
    {
        "opy": "Loser",
        "fr": "Perdant",
        "en-US": "Loser"
    },
    {
        "opy": "Locking",
        "fr": "Verrouillage",
        "en-US": "Locking"
    },
    {
        "opy": "Locked",
        "fr": "Verrouillé",
        "en-US": "Locked"
    },
    {
        "opy": "Lock",
        "fr": "Verrouiller",
        "en-US": "Lock"
    },
    {
        "opy": "Location",
        "fr": "Lieu",
        "en-US": "Location"
    },
    {
        "opy": "Loading",
        "fr": "Chargement",
        "en-US": "Loading"
    },
    {
        "opy": "Loaded",
        "fr": "Chargé",
        "en-US": "Loaded"
    },
    {
        "opy": "Load",
        "fr": "Charger",
        "en-US": "Load"
    },
    {
        "opy": "Lives",
        "fr": "Vies",
        "en-US": "Lives"
    },
    {
        "opy": "Limited",
        "fr": "Limité",
        "en-US": "Limited"
    },
    {
        "opy": "Life",
        "fr": "Vie",
        "en-US": "Life"
    },
    {
        "opy": "Levels",
        "fr": "Niveaux",
        "en-US": "Levels"
    },
    {
        "opy": "Level Up",
        "fr": "Gain de niveau",
        "en-US": "Level Up"
    },
    {
        "opy": "Level Down",
        "fr": "Perte de niveau",
        "en-US": "Level Down"
    },
    {
        "opy": "Level",
        "fr": "Niveau",
        "en-US": "Level"
    },
    {
        "opy": "Less",
        "fr": "Moins",
        "en-US": "Less"
    },
    {
        "opy": "Left",
        "fr": "Gauche",
        "en-US": "Left"
    },
    {
        "opy": "Least",
        "fr": "Le moins",
        "en-US": "Least"
    },
    {
        "opy": "Leaders",
        "fr": "Meneurs",
        "en-US": "Leaders"
    },
    {
        "opy": "Leader",
        "fr": "Meneur",
        "en-US": "Leader"
    },
    {
        "opy": "Killstreaks",
        "fr": "Séries de victimes",
        "en-US": "Killstreaks"
    },
    {
        "opy": "Killstreak",
        "fr": "Série de victimes",
        "en-US": "Killstreak"
    },
    {
        "opy": "Killstreak",
        "fr": "Série de victimes",
        "en-US": "Killstreak"
    },
    {
        "opy": "Kills",
        "fr": "Victimes",
        "en-US": "Kills"
    },
    {
        "guid": "00000000C292",
        "opy": "Kill",
        "fr": "Victime",
        "en-US": "Kill"
    },
    {
        "opy": "Jumping",
        "fr": "Saut",
        "en-US": "Jumping"
    },
    {
        "opy": "Jump",
        "fr": "Sauter",
        "en-US": "Jump"
    },
    {
        "opy": "Joining",
        "fr": "Rejoint",
        "en-US": "Joining"
    },
    {
        "opy": "Joined",
        "fr": "A rejoint",
        "en-US": "Joined"
    },
    {
        "opy": "Join",
        "fr": "Rejoindre",
        "en-US": "Join"
    },
    {
        "opy": "Items",
        "fr": "Articles",
        "en-US": "Items"
    },
    {
        "opy": "Item",
        "fr": "Article",
        "en-US": "Item"
    },
    {
        "opy": "Invisible",
        "fr": "Invisible",
        "en-US": "Invisible"
    },
    {
        "opy": "Interact",
        "fr": "Interagir",
        "en-US": "Interact"
    },
    {
        "opy": "Intelligence",
        "fr": "Intelligence",
        "en-US": "Intelligence"
    },
    {
        "opy": "Inside",
        "fr": "À l’intérieur",
        "en-US": "Inside"
    },
    {
        "opy": "Innocent",
        "fr": "Innocent",
        "en-US": "Innocent"
    },
    {
        "opy": "Initial Upgrade",
        "fr": "Amélioration initiale",
        "en-US": "Initial Upgrade"
    },
    {
        "opy": "Initial Targets",
        "fr": "Cibles initiales",
        "en-US": "Initial Targets"
    },
    {
        "opy": "Initial Target",
        "fr": "Cible initiale",
        "en-US": "Initial Target"
    },
    {
        "opy": "Initial Round",
        "fr": "Manche initiale",
        "en-US": "Initial Round"
    },
    {
        "opy": "Initial Players",
        "fr": "Joueurs initiaux",
        "en-US": "Initial Players"
    },
    {
        "opy": "Initial Player",
        "fr": "Joueur initial",
        "en-US": "Initial Player"
    },
    {
        "opy": "Initial Phase",
        "fr": "Phase initiale",
        "en-US": "Initial Phase"
    },
    {
        "opy": "Initial Objects",
        "fr": "Objets initiaux",
        "en-US": "Initial Objects"
    },
    {
        "opy": "Initial Objective",
        "fr": "Objectif initial",
        "en-US": "Initial Objective"
    },
    {
        "opy": "Initial Object",
        "fr": "Objet initial",
        "en-US": "Initial Object"
    },
    {
        "opy": "Initial Mission",
        "fr": "Mission initiale",
        "en-US": "Initial Mission"
    },
    {
        "opy": "Initial Level",
        "fr": "Niveau initial",
        "en-US": "Initial Level"
    },
    {
        "opy": "Initial Hostage",
        "fr": "Otage initial",
        "en-US": "Initial Hostage"
    },
    {
        "opy": "Initial Heroes",
        "fr": "Héros initiaux",
        "en-US": "Initial Heroes"
    },
    {
        "opy": "Initial Hero",
        "fr": "Héros initial",
        "en-US": "Initial Hero"
    },
    {
        "opy": "Initial Game",
        "fr": "Partie initiale",
        "en-US": "Initial Game"
    },
    {
        "opy": "Initial Form",
        "fr": "Forme initiale",
        "en-US": "Initial Form"
    },
    {
        "opy": "Initial Enemy",
        "fr": "Ennemi initial",
        "en-US": "Initial Enemy"
    },
    {
        "opy": "Initial Enemies",
        "fr": "Ennemis initiaux",
        "en-US": "Initial Enemies"
    },
    {
        "opy": "Initial Checkpoint",
        "fr": "Point de contrôle initial",
        "en-US": "Initial Checkpoint"
    },
    {
        "opy": "Initial Attempt",
        "fr": "Tentative initiale",
        "en-US": "Initial Attempt"
    },
    {
        "opy": "Initial Ally",
        "fr": "Allié initial",
        "en-US": "Initial Ally"
    },
    {
        "opy": "Initial Allies",
        "fr": "Alliés initiaux",
        "en-US": "Initial Allies"
    },
    {
        "opy": "Initial",
        "fr": "Initial",
        "en-US": "Initial"
    },
    {
        "opy": "Incoming",
        "fr": "En approche",
        "en-US": "Incoming"
    },
    {
        "opy": "Income",
        "fr": "Revenu",
        "en-US": "Income"
    },
    {
        "opy": "In View",
        "fr": "En vue",
        "en-US": "In View"
    },
    {
        "opy": "I Tried",
        "fr": "J’ai essayé",
        "en-US": "I Tried"
    },
    {
        "opy": "I Give Up",
        "fr": "J’abandonne",
        "en-US": "I Give Up"
    },
    {
        "opy": "Hunting",
        "fr": "Chasse",
        "en-US": "Hunting"
    },
    {
        "opy": "Hunters",
        "fr": "Chasseurs",
        "en-US": "Hunters"
    },
    {
        "opy": "Hunter",
        "fr": "Chasseur",
        "en-US": "Hunter"
    },
    {
        "opy": "Hunted",
        "fr": "Pourchassé",
        "en-US": "Hunted"
    },
    {
        "opy": "Hunt",
        "fr": "Chasser",
        "en-US": "Hunt"
    },
    {
        "opy": "Huh",
        "fr": "Euh",
        "en-US": "Huh"
    },
    {
        "opy": "Hostages",
        "fr": "Otages",
        "en-US": "Hostages"
    },
    {
        "opy": "Hostage",
        "fr": "Otage",
        "en-US": "Hostage"
    },
    {
        "opy": "Hmmm",
        "fr": "Hmmm",
        "en-US": "Hmmm"
    },
    {
        "opy": "Hitting",
        "fr": "Touche",
        "en-US": "Hitting"
    },
    {
        "opy": "Hit",
        "fr": "Toucher",
        "en-US": "Hit"
    },
    {
        "opy": "High Scores",
        "fr": "Meilleurs scores",
        "en-US": "High Scores"
    },
    {
        "opy": "High Score",
        "fr": "Meilleur score",
        "en-US": "High Score"
    },
    {
        "opy": "Hiding",
        "fr": "Cache",
        "en-US": "Hiding"
    },
    {
        "opy": "Hide",
        "fr": "Cacher",
        "en-US": "Hide"
    },
    {
        "opy": "Hidden",
        "fr": "Caché",
        "en-US": "Hidden"
    },
    {
        "opy": "Heroes",
        "fr": "Héros",
        "en-US": "Heroes"
    },
    {
        "opy": "Hero",
        "fr": "Héros",
        "en-US": "Hero"
    },
    {
        "opy": "Here",
        "fr": "Ici",
        "en-US": "Here"
    },
    {
        "opy": "Help",
        "fr": "Aide",
        "en-US": "Help"
    },
    {
        "opy": "Hello",
        "fr": "Bonjour",
        "en-US": "Hello"
    },
    {
        "opy": "Height",
        "fr": "Hauteur",
        "en-US": "Height"
    },
    {
        "opy": "Hearts",
        "fr": "Cœur",
        "en-US": "Hearts"
    },
    {
        "opy": "Heart",
        "fr": "Cœur",
        "en-US": "Heart"
    },
    {
        "opy": "Healing",
        "fr": "Soigne",
        "en-US": "Healing"
    },
    {
        "opy": "Healers",
        "fr": "Soigneurs",
        "en-US": "Healers"
    },
    {
        "opy": "Healer",
        "fr": "Soigneur",
        "en-US": "Healer"
    },
    {
        "opy": "Healed",
        "fr": "Soigné",
        "en-US": "Healed"
    },
    {
        "guid": "00000000C5D7",
        "opy": "Heal",
        "fr": "Soigner",
        "en-US": "Heal"
    },
    {
        "opy": "Hands",
        "fr": "Mains",
        "en-US": "Hands"
    },
    {
        "opy": "Hand",
        "fr": "Main",
        "en-US": "Hand"
    },
    {
        "opy": "Hacking",
        "fr": "Piratage",
        "en-US": "Hacking"
    },
    {
        "opy": "Hacked",
        "fr": "Piraté",
        "en-US": "Hacked"
    },
    {
        "opy": "Hack",
        "fr": "Pirater",
        "en-US": "Hack"
    },
    {
        "opy": "Guilty",
        "fr": "Coupable",
        "en-US": "Guilty"
    },
    {
        "opy": "Green",
        "fr": "Vert",
        "en-US": "Green"
    },
    {
        "opy": "Goodbye",
        "fr": "Au revoir",
        "en-US": "Goodbye"
    },
    {
        "opy": "Good Luck",
        "fr": "Bonne chance",
        "en-US": "Good Luck"
    },
    {
        "opy": "Good",
        "fr": "Bon",
        "en-US": "Good"
    },
    {
        "opy": "Going",
        "fr": "Aller",
        "en-US": "Going"
    },
    {
        "opy": "Goals",
        "fr": "Buts",
        "en-US": "Goals"
    },
    {
        "opy": "Goal",
        "fr": "But",
        "en-US": "Goal"
    },
    {
        "opy": "Go",
        "fr": "Aller",
        "en-US": "Go"
    },
    {
        "opy": "Gg",
        "fr": "BRAVO",
        "en-US": "Gg"
    },
    {
        "opy": "Games Won",
        "fr": "Parties gagnées",
        "en-US": "Games Won"
    },
    {
        "opy": "Games Lost",
        "fr": "Parties perdues",
        "en-US": "Games Lost"
    },
    {
        "opy": "Games",
        "fr": "Parties",
        "en-US": "Games"
    },
    {
        "opy": "Game",
        "fr": "Partie",
        "en-US": "Game"
    },
    {
        "opy": "Frozen",
        "fr": "Gelé",
        "en-US": "Frozen"
    },
    {
        "opy": "Freezing",
        "fr": "Gel",
        "en-US": "Freezing"
    },
    {
        "opy": "Freeze",
        "fr": "Geler",
        "en-US": "Freeze"
    },
    {
        "opy": "Found",
        "fr": "Trouvé",
        "en-US": "Found"
    },
    {
        "opy": "Forward",
        "fr": "Avant",
        "en-US": "Forward"
    },
    {
        "opy": "Forms",
        "fr": "Formes",
        "en-US": "Forms"
    },
    {
        "opy": "Form",
        "fr": "Forme",
        "en-US": "Form"
    },
    {
        "opy": "Folding",
        "fr": "Se couche",
        "en-US": "Folding"
    },
    {
        "opy": "Folded",
        "fr": "S’est couché",
        "en-US": "Folded"
    },
    {
        "opy": "Fold",
        "fr": "Se coucher",
        "en-US": "Fold"
    },
    {
        "opy": "Flying",
        "fr": "Vole",
        "en-US": "Flying"
    },
    {
        "opy": "Fly",
        "fr": "Voler",
        "en-US": "Fly"
    },
    {
        "opy": "Flown",
        "fr": "Volé",
        "en-US": "Flown"
    },
    {
        "opy": "Finishing",
        "fr": "Fin",
        "en-US": "Finishing"
    },
    {
        "opy": "Finished",
        "fr": "Fini",
        "en-US": "Finished"
    },
    {
        "opy": "Finish",
        "fr": "Finir",
        "en-US": "Finish"
    },
    {
        "opy": "Finding",
        "fr": "Découverte",
        "en-US": "Finding"
    },
    {
        "opy": "Find",
        "fr": "Trouver",
        "en-US": "Find"
    },
    {
        "opy": "Final Upgrade",
        "fr": "Amélioration finale",
        "en-US": "Final Upgrade"
    },
    {
        "opy": "Final Time",
        "fr": "Temps final",
        "en-US": "Final Time"
    },
    {
        "opy": "Final Targets",
        "fr": "Cibles finales",
        "en-US": "Final Targets"
    },
    {
        "opy": "Final Target",
        "fr": "Cible finale",
        "en-US": "Final Target"
    },
    {
        "opy": "Final Round",
        "fr": "Manche finale",
        "en-US": "Final Round"
    },
    {
        "opy": "Final Players",
        "fr": "Joueurs finaux",
        "en-US": "Final Players"
    },
    {
        "opy": "Final Player",
        "fr": "Joueur final",
        "en-US": "Final Player"
    },
    {
        "opy": "Final Phase",
        "fr": "Phase finale",
        "en-US": "Final Phase"
    },
    {
        "opy": "Final Objects",
        "fr": "Objets finaux",
        "en-US": "Final Objects"
    },
    {
        "opy": "Final Objective",
        "fr": "Objectif final",
        "en-US": "Final Objective"
    },
    {
        "opy": "Final Object",
        "fr": "Objet final",
        "en-US": "Final Object"
    },
    {
        "opy": "Final Mission",
        "fr": "Mission finale",
        "en-US": "Final Mission"
    },
    {
        "opy": "Final Level",
        "fr": "Niveau final",
        "en-US": "Final Level"
    },
    {
        "opy": "Final Item",
        "fr": "Article final",
        "en-US": "Final Item"
    },
    {
        "opy": "Final Hostages",
        "fr": "Otages finaux",
        "en-US": "Final Hostages"
    },
    {
        "opy": "Final Hostage",
        "fr": "Otage final",
        "en-US": "Final Hostage"
    },
    {
        "opy": "Final Heroes",
        "fr": "Héros finaux",
        "en-US": "Final Heroes"
    },
    {
        "opy": "Final Hero",
        "fr": "Héros final",
        "en-US": "Final Hero"
    },
    {
        "opy": "Final Game",
        "fr": "Partie finale",
        "en-US": "Final Game"
    },
    {
        "opy": "Final Form",
        "fr": "Forme finale",
        "en-US": "Final Form"
    },
    {
        "opy": "Final Enemy",
        "fr": "Ennemi final",
        "en-US": "Final Enemy"
    },
    {
        "opy": "Final Enemies",
        "fr": "Ennemis finaux",
        "en-US": "Final Enemies"
    },
    {
        "opy": "Final Checkpoint",
        "fr": "Point de contrôle final",
        "en-US": "Final Checkpoint"
    },
    {
        "opy": "Final Attempt",
        "fr": "Tentative finale",
        "en-US": "Final Attempt"
    },
    {
        "opy": "Final Ally",
        "fr": "Allié final",
        "en-US": "Final Ally"
    },
    {
        "opy": "Final Allies",
        "fr": "Alliés finaux",
        "en-US": "Final Allies"
    },
    {
        "opy": "Final",
        "fr": "Final",
        "en-US": "Final"
    },
    {
        "opy": "Faults",
        "fr": "Fautes",
        "en-US": "Faults"
    },
    {
        "opy": "Fault",
        "fr": "Faute",
        "en-US": "Fault"
    },
    {
        "opy": "Fastest",
        "fr": "Le plus rapide",
        "en-US": "Fastest"
    },
    {
        "opy": "Faster",
        "fr": "Plus rapide",
        "en-US": "Faster"
    },
    {
        "opy": "Fast",
        "fr": "Rapide",
        "en-US": "Fast"
    },
    {
        "opy": "Far",
        "fr": "Loin",
        "en-US": "Far"
    },
    {
        "opy": "Falling",
        "fr": "Chute",
        "en-US": "Falling"
    },
    {
        "opy": "Fallen",
        "fr": "Tombé",
        "en-US": "Fallen"
    },
    {
        "opy": "Fall",
        "fr": "Tomber",
        "en-US": "Fall"
    },
    {
        "opy": "Failure",
        "fr": "Échec",
        "en-US": "Failure"
    },
    {
        "opy": "Failing",
        "fr": "Échec",
        "en-US": "Failing"
    },
    {
        "opy": "Failed",
        "fr": "Échoué",
        "en-US": "Failed"
    },
    {
        "opy": "Facing",
        "fr": "Face à",
        "en-US": "Facing"
    },
    {
        "opy": "Faces",
        "fr": "Regarde vers",
        "en-US": "Faces"
    },
    {
        "opy": "Face",
        "fr": "Regarder vers",
        "en-US": "Face"
    },
    {
        "opy": "Extreme",
        "fr": "Extrême",
        "en-US": "Extreme"
    },
    {
        "opy": "Experience",
        "fr": "Expérience",
        "en-US": "Experience"
    },
    {
        "opy": "Exit",
        "fr": "Sortie",
        "en-US": "Exit"
    },
    {
        "opy": "Excellent",
        "fr": "Excellent",
        "en-US": "Excellent"
    },
    {
        "opy": "Escorting",
        "fr": "Escorte",
        "en-US": "Escorting"
    },
    {
        "opy": "Escorted",
        "fr": "Escorté",
        "en-US": "Escorted"
    },
    {
        "opy": "Escort",
        "fr": "Escorter",
        "en-US": "Escort"
    },
    {
        "opy": "Entrance",
        "fr": "Entrée",
        "en-US": "Entrance"
    },
    {
        "opy": "Enemy",
        "fr": "Ennemi",
        "en-US": "Enemy"
    },
    {
        "opy": "Enemies",
        "fr": "Ennemis",
        "en-US": "Enemies"
    },
    {
        "opy": "Eliminations",
        "fr": "Éliminations",
        "en-US": "Eliminations"
    },
    {
        "opy": "Elimination",
        "fr": "Élimination",
        "en-US": "Elimination"
    },
    {
        "opy": "Eliminating",
        "fr": "Élimination",
        "en-US": "Eliminating"
    },
    {
        "opy": "Eliminated",
        "fr": "Éliminé",
        "en-US": "Eliminated"
    },
    {
        "opy": "Eliminate",
        "fr": "Éliminer",
        "en-US": "Eliminate"
    },
    {
        "opy": "East",
        "fr": "Est",
        "en-US": "East"
    },
    {
        "opy": "Dying",
        "fr": "Mort",
        "en-US": "Dying"
    },
    {
        "opy": "Dropping",
        "fr": "Largage",
        "en-US": "Dropping"
    },
    {
        "opy": "Dropped",
        "fr": "Largué",
        "en-US": "Dropped"
    },
    {
        "opy": "Drop",
        "fr": "Larguer",
        "en-US": "Drop"
    },
    {
        "opy": "Drawn",
        "fr": "Pioché",
        "en-US": "Drawn"
    },
    {
        "opy": "Drawing",
        "fr": "Pioche",
        "en-US": "Drawing"
    },
    {
        "opy": "Draw",
        "fr": "Match nul",
        "en-US": "Draw"
    },
    {
        "opy": "Downloading",
        "fr": "Téléchargement",
        "en-US": "Downloading"
    },
    {
        "opy": "Downloaded",
        "fr": "Téléchargé",
        "en-US": "Downloaded"
    },
    {
        "opy": "Download",
        "fr": "Télécharger",
        "en-US": "Download"
    },
    {
        "opy": "Down",
        "fr": "Bas",
        "en-US": "Down"
    },
    {
        "opy": "Domes",
        "fr": "Dômes",
        "en-US": "Domes"
    },
    {
        "opy": "Dome",
        "fr": "Dôme",
        "en-US": "Dome"
    },
    {
        "opy": "Dodging",
        "fr": "Esquive",
        "en-US": "Dodging"
    },
    {
        "opy": "Dodged",
        "fr": "Esquivé",
        "en-US": "Dodged"
    },
    {
        "opy": "Dodge",
        "fr": "Esquiver",
        "en-US": "Dodge"
    },
    {
        "opy": "Distances",
        "fr": "Distances",
        "en-US": "Distances"
    },
    {
        "opy": "Distance",
        "fr": "Distance",
        "en-US": "Distance"
    },
    {
        "opy": "Disconnecting",
        "fr": "Déconnexion",
        "en-US": "Disconnecting"
    },
    {
        "opy": "Disconnected",
        "fr": "Déconnecté",
        "en-US": "Disconnected"
    },
    {
        "opy": "Disconnect",
        "fr": "Déconnecter",
        "en-US": "Disconnect"
    },
    {
        "opy": "Discarding",
        "fr": "Défausse",
        "en-US": "Discarding"
    },
    {
        "opy": "Discarded",
        "fr": "Défaussé",
        "en-US": "Discarded"
    },
    {
        "opy": "Discard",
        "fr": "Défausser",
        "en-US": "Discard"
    },
    {
        "opy": "Die",
        "fr": "Mourir",
        "en-US": "Die"
    },
    {
        "opy": "Diamonds",
        "fr": "Carreau",
        "en-US": "Diamonds"
    },
    {
        "opy": "Diamond",
        "fr": "Carreau",
        "en-US": "Diamond"
    },
    {
        "opy": "Dexterity",
        "fr": "Dextérité",
        "en-US": "Dexterity"
    },
    {
        "opy": "Detecting",
        "fr": "Détection",
        "en-US": "Detecting"
    },
    {
        "opy": "Detected",
        "fr": "Détecté",
        "en-US": "Detected"
    },
    {
        "opy": "Detect",
        "fr": "Détecter",
        "en-US": "Detect"
    },
    {
        "opy": "Destroying",
        "fr": "Destruction",
        "en-US": "Destroying"
    },
    {
        "opy": "Destroyed",
        "fr": "Détruit",
        "en-US": "Destroyed"
    },
    {
        "opy": "Destroy",
        "fr": "Détruire",
        "en-US": "Destroy"
    },
    {
        "opy": "Destabilizing",
        "fr": "Déstabilisation",
        "en-US": "Destabilizing"
    },
    {
        "opy": "Destabilized",
        "fr": "Déstabilisé",
        "en-US": "Destabilized"
    },
    {
        "opy": "Destabilize",
        "fr": "Déstabiliser",
        "en-US": "Destabilize"
    },
    {
        "opy": "Depth",
        "fr": "Profondeur",
        "en-US": "Depth"
    },
    {
        "opy": "Delivering",
        "fr": "Livraison",
        "en-US": "Delivering"
    },
    {
        "opy": "Delivered",
        "fr": "Livré",
        "en-US": "Delivered"
    },
    {
        "opy": "Deliver",
        "fr": "Livrer",
        "en-US": "Deliver"
    },
    {
        "opy": "Defense",
        "fr": "Défense",
        "en-US": "Defense"
    },
    {
        "opy": "Defending",
        "fr": "Défense",
        "en-US": "Defending"
    },
    {
        "opy": "Defended",
        "fr": "Défendu",
        "en-US": "Defended"
    },
    {
        "opy": "Defend",
        "fr": "Défendre",
        "en-US": "Defend"
    },
    {
        "opy": "Defeat",
        "fr": "Défaite",
        "en-US": "Defeat"
    },
    {
        "opy": "Decks",
        "fr": "Tas",
        "en-US": "Decks"
    },
    {
        "opy": "Deck",
        "fr": "Tas",
        "en-US": "Deck"
    },
    {
        "opy": "Dealt",
        "fr": "Distribué",
        "en-US": "Dealt"
    },
    {
        "opy": "Dealing",
        "fr": "Distribution",
        "en-US": "Dealing"
    },
    {
        "opy": "Deal",
        "fr": "Distribuer",
        "en-US": "Deal"
    },
    {
        "opy": "Dead",
        "fr": "Mort",
        "en-US": "Dead"
    },
    {
        "opy": "Danger",
        "fr": "Danger",
        "en-US": "Danger"
    },
    {
        "opy": "Damaging",
        "fr": "Inflige des dégâts",
        "en-US": "Damaging"
    },
    {
        "opy": "Damaged",
        "fr": "Endommagé",
        "en-US": "Damaged"
    },
    {
        "guid": "00000000C5D4",
        "opy": "Damage",
        "fr": "Infliger des dégâts",
        "en-US": "Damage"
    },
    {
        "opy": "Current Upgrade",
        "fr": "Amélioration actuelle",
        "en-US": "Current Upgrade"
    },
    {
        "opy": "Current Targets",
        "fr": "Cibles actuelles",
        "en-US": "Current Targets"
    },
    {
        "opy": "Current Target",
        "fr": "Cible actuelle",
        "en-US": "Current Target"
    },
    {
        "opy": "Current Round",
        "fr": "Manche actuelle",
        "en-US": "Current Round"
    },
    {
        "opy": "Current Players",
        "fr": "Joueurs actuels",
        "en-US": "Current Players"
    },
    {
        "opy": "Current Player",
        "fr": "Joueur actuel",
        "en-US": "Current Player"
    },
    {
        "opy": "Current Phase",
        "fr": "Phase actuelle",
        "en-US": "Current Phase"
    },
    {
        "opy": "Current Objects",
        "fr": "Objets actuels",
        "en-US": "Current Objects"
    },
    {
        "opy": "Current Objective",
        "fr": "Objectif actuel",
        "en-US": "Current Objective"
    },
    {
        "opy": "Current Object",
        "fr": "Object actuel",
        "en-US": "Current Object"
    },
    {
        "opy": "Current Mission",
        "fr": "Mission actuelle",
        "en-US": "Current Mission"
    },
    {
        "opy": "Current Level",
        "fr": "Niveau actuel",
        "en-US": "Current Level"
    },
    {
        "opy": "Current Hostages",
        "fr": "Otages actuels",
        "en-US": "Current Hostages"
    },
    {
        "opy": "Current Hostage",
        "fr": "Otage actuel",
        "en-US": "Current Hostage"
    },
    {
        "opy": "Current Heroes",
        "fr": "Héros actuels",
        "en-US": "Current Heroes"
    },
    {
        "opy": "Current Hero",
        "fr": "Héros actuel",
        "en-US": "Current Hero"
    },
    {
        "opy": "Current Game",
        "fr": "Partie actuelle",
        "en-US": "Current Game"
    },
    {
        "opy": "Current Form",
        "fr": "Forme actuelle",
        "en-US": "Current Form"
    },
    {
        "opy": "Current Enemy",
        "fr": "Ennemi actuel",
        "en-US": "Current Enemy"
    },
    {
        "opy": "Current Enemies",
        "fr": "Ennemis actuels",
        "en-US": "Current Enemies"
    },
    {
        "opy": "Current Checkpoint",
        "fr": "Point de contrôle actuel",
        "en-US": "Current Checkpoint"
    },
    {
        "opy": "Current Attempt",
        "fr": "Tentative actuelle",
        "en-US": "Current Attempt"
    },
    {
        "opy": "Current Ally",
        "fr": "Allié actuel",
        "en-US": "Current Ally"
    },
    {
        "opy": "Current Allies",
        "fr": "Alliés actuels",
        "en-US": "Current Allies"
    },
    {
        "opy": "Current",
        "fr": "Actuel",
        "en-US": "Current"
    },
    {
        "opy": "Crouching",
        "fr": "Accroupissement",
        "en-US": "Crouching"
    },
    {
        "opy": "Crouched",
        "fr": "Accroupi",
        "en-US": "Crouched"
    },
    {
        "opy": "Crouch",
        "fr": "S’accroupir",
        "en-US": "Crouch"
    },
    {
        "opy": "Critical",
        "fr": "Critique",
        "en-US": "Critical"
    },
    {
        "opy": "Credits",
        "fr": "Crédits",
        "en-US": "Credits"
    },
    {
        "opy": "Credit",
        "fr": "Crédit",
        "en-US": "Credit"
    },
    {
        "opy": "Corrupting",
        "fr": "Corruption",
        "en-US": "Corrupting"
    },
    {
        "opy": "Corrupted",
        "fr": "Corrompu",
        "en-US": "Corrupted"
    },
    {
        "opy": "Corrupt",
        "fr": "Corrompre",
        "en-US": "Corrupt"
    },
    {
        "opy": "Cooldowns",
        "fr": "Temps de recharge",
        "en-US": "Cooldowns"
    },
    {
        "opy": "Cooldown",
        "fr": "Temps de recharge",
        "en-US": "Cooldown"
    },
    {
        "opy": "Control Points",
        "fr": "Points de contrôle",
        "en-US": "Control Points"
    },
    {
        "opy": "Control Point",
        "fr": "Point de contrôle",
        "en-US": "Control Point"
    },
    {
        "opy": "Constitution",
        "fr": "Constitution",
        "en-US": "Constitution"
    },
    {
        "opy": "Connecting",
        "fr": "Connexion",
        "en-US": "Connecting"
    },
    {
        "opy": "Connected",
        "fr": "Connecté",
        "en-US": "Connected"
    },
    {
        "opy": "Connect",
        "fr": "Connecter",
        "en-US": "Connect"
    },
    {
        "opy": "Congratulations",
        "fr": "Félicitations",
        "en-US": "Congratulations"
    },
    {
        "opy": "Condition",
        "fr": "Condition",
        "en-US": "Condition"
    },
    {
        "opy": "Come Here",
        "fr": "Venez ici",
        "en-US": "Come Here"
    },
    {
        "opy": "Combo",
        "fr": "Combo",
        "en-US": "Combo"
    },
    {
        "opy": "Clubs",
        "fr": "Trèfle",
        "en-US": "Clubs"
    },
    {
        "opy": "Club",
        "fr": "Trèfle",
        "en-US": "Club"
    },
    {
        "opy": "Clouds",
        "fr": "Nuages",
        "en-US": "Clouds"
    },
    {
        "opy": "Cloud",
        "fr": "Nuage",
        "en-US": "Cloud"
    },
    {
        "opy": "Checkpoints",
        "fr": "Points de contrôle",
        "en-US": "Checkpoints"
    },
    {
        "opy": "Checkpoint",
        "fr": "Point de contrôle",
        "en-US": "Checkpoint"
    },
    {
        "opy": "Chasing",
        "fr": "Poursuite",
        "en-US": "Chasing"
    },
    {
        "opy": "Chased",
        "fr": "Poursuivi",
        "en-US": "Chased"
    },
    {
        "opy": "Chase",
        "fr": "Poursuivre",
        "en-US": "Chase"
    },
    {
        "opy": "Charisma",
        "fr": "Charisme",
        "en-US": "Charisma"
    },
    {
        "opy": "Challenge Accepted",
        "fr": "Défi accepté",
        "en-US": "Challenge Accepted"
    },
    {
        "opy": "Center",
        "fr": "Centre",
        "en-US": "Center"
    },
    {
        "opy": "Caution",
        "fr": "Prudence",
        "en-US": "Caution"
    },
    {
        "opy": "Capturing",
        "fr": "Capture",
        "en-US": "Capturing"
    },
    {
        "opy": "Captured",
        "fr": "Capturé",
        "en-US": "Captured"
    },
    {
        "opy": "Capture",
        "fr": "Capturer",
        "en-US": "Capture"
    },
    {
        "opy": "Buying",
        "fr": "Achat",
        "en-US": "Buying"
    },
    {
        "opy": "Buy",
        "fr": "Acheter",
        "en-US": "Buy"
    },
    {
        "opy": "Burnt",
        "fr": "Brûlé",
        "en-US": "Burnt"
    },
    {
        "opy": "Burning",
        "fr": "Enflammé",
        "en-US": "Burning"
    },
    {
        "opy": "Burn",
        "fr": "Brûler",
        "en-US": "Burn"
    },
    {
        "opy": "Built",
        "fr": "Construit",
        "en-US": "Built"
    },
    {
        "opy": "Building",
        "fr": "Construction",
        "en-US": "Building"
    },
    {
        "opy": "Build",
        "fr": "Construire",
        "en-US": "Build"
    },
    {
        "opy": "Bought",
        "fr": "Acheté",
        "en-US": "Bought"
    },
    {
        "opy": "Bosses",
        "fr": "Boss",
        "en-US": "Bosses"
    },
    {
        "opy": "Boss",
        "fr": "Boss",
        "en-US": "Boss"
    },
    {
        "opy": "Bonuses",
        "fr": "Primes",
        "en-US": "Bonuses"
    },
    {
        "opy": "Bonus",
        "fr": "Prime",
        "en-US": "Bonus"
    },
    {
        "opy": "Blue",
        "fr": "Bleu",
        "en-US": "Blue"
    },
    {
        "opy": "Blocking",
        "fr": "Bloque",
        "en-US": "Blocking"
    },
    {
        "opy": "Blocked",
        "fr": "Bloqué",
        "en-US": "Blocked"
    },
    {
        "opy": "Block",
        "fr": "Bloquer",
        "en-US": "Block"
    },
    {
        "opy": "Bids",
        "fr": "Enchères",
        "en-US": "Bids"
    },
    {
        "opy": "Bid",
        "fr": "Enchère",
        "en-US": "Bid"
    },
    {
        "opy": "Better",
        "fr": "Meilleur",
        "en-US": "Better"
    },
    {
        "opy": "Best",
        "fr": "Le meilleur",
        "en-US": "Best"
    },
    {
        "opy": "Banning",
        "fr": "Bannissement",
        "en-US": "Banning"
    },
    {
        "opy": "Banned",
        "fr": "Banni",
        "en-US": "Banned"
    },
    {
        "opy": "Ban",
        "fr": "Bannir",
        "en-US": "Ban"
    },
    {
        "opy": "Bad",
        "fr": "Mauvais",
        "en-US": "Bad"
    },
    {
        "opy": "Backward",
        "fr": "Arrière",
        "en-US": "Backward"
    },
    {
        "opy": "Avoiding",
        "fr": "Évitement",
        "en-US": "Avoiding"
    },
    {
        "opy": "Avoided",
        "fr": "Évité",
        "en-US": "Avoided"
    },
    {
        "opy": "Avoid",
        "fr": "Éviter",
        "en-US": "Avoid"
    },
    {
        "opy": "Average",
        "fr": "Moyenne",
        "en-US": "Average"
    },
    {
        "opy": "Attempts",
        "fr": "Tentatives",
        "en-US": "Attempts"
    },
    {
        "opy": "Attempt",
        "fr": "Tentative",
        "en-US": "Attempt"
    },
    {
        "opy": "Attacking",
        "fr": "Attaque",
        "en-US": "Attacking"
    },
    {
        "opy": "Attacked",
        "fr": "Attaqué",
        "en-US": "Attacked"
    },
    {
        "opy": "Attack",
        "fr": "Attaquer",
        "en-US": "Attack"
    },
    {
        "opy": "Angle",
        "fr": "Angle",
        "en-US": "Angle"
    },
    {
        "opy": "Ammunition",
        "fr": "Munitions",
        "en-US": "Ammunition"
    },
    {
        "opy": "Ally",
        "fr": "Allié",
        "en-US": "Ally"
    },
    {
        "opy": "Allies",
        "fr": "Alliés",
        "en-US": "Allies"
    },
    {
        "opy": "Alive",
        "fr": "En vie",
        "en-US": "Alive"
    },
    {
        "opy": "Alert",
        "fr": "Alerte",
        "en-US": "Alert"
    },
    {
        "opy": "Ability 2",
        "fr": "Capacité 2",
        "en-US": "Ability 2"
    },
    {
        "opy": "Ability 1",
        "fr": "Capacité 1",
        "en-US": "Ability 1"
    },
    {
        "opy": "Ability",
        "fr": "Capacité",
        "en-US": "Ability"
    },
    {
        "opy": "Abilities",
        "fr": "Capacités",
        "en-US": "Abilities"
    },
    {
        "opy": "???",
        "fr": "???",
        "en-US": "???"
    },
    {
        "opy": "??",
        "fr": "??",
        "en-US": "??"
    },
    {
        "opy": "?",
        "fr": "?",
        "en-US": "?"
    },
    {
        "opy": "...",
        "fr": "…",
        "en-US": "..."
    },
    {
        "opy": "----------",
        "fr": "----------",
        "en-US": "----------"
    },
    {
        "opy": "*",
        "fr": "*",
        "en-US": "*"
    },
    {
        "opy": "!!!",
        "fr": "!!!",
        "en-US": "!!!"
    },
    {
        "opy": "!!",
        "fr": "!!",
        "en-US": "!!"
    },
    {
        "opy": "!",
        "fr": "!",
        "en-US": "!"
    }
]
//end-json

var prefixStrKw = 
//begin-json
[
    {
        "opy": "#{0}",
        "en-US": "#{0}"
    },
    {
        "opy": "-> {0}",
        "en-US": "-> {0}"
    },
    {
        "opy": "<-> {0}",
        "en-US": "<-> {0}"
    },
    {
        "opy": "<- {0}",
        "en-US": "<- {0}"
    },
    {
        "opy": "Round {0}",
        "fr": "Manche {0}",
        "en-US": "Round {0}"
    }
]
//end-json

var postfixStrKw = 
//begin-json
[
    {
        "opy": "{0} ->",
        "en-US": "{0} ->"
    },
    {
        "opy": "{0} <->",
        "en-US": "{0} <->"
    },
    {
        "opy": "{0} <-",
        "en-US": "{0} <-"
    },
    {
        "opy": "{0} M/S",
        "en-US": "{0} M/S"
    },
    {
        "opy": "{0} M",
        "en-US": "{0} M"
    },
    {
        "opy": "{0} Sec",
        "fr": "{0} s",
        "en-US": "{0} Sec"
    },
    {
        "opy": "{0}!!!",
        "fr": "{0} !!!",
        "en-US": "{0}!!!"
    },
    {
        "opy": "{0}!!",
        "fr": "{0} !!",
        "en-US": "{0}!!"
    },
    {
        "opy": "{0}!",
        "fr": "{0} !",
        "en-US": "{0}!"
    },
    {
        "opy": "{0}%",
        "fr": "{0} %",
        "en-US": "{0}%"
    },
    {
        "opy": "{0}:",
        "fr": "{0} :",
        "en-US": "{0}:"
    },
    {
        "opy": "{0}???",
        "fr": "{0} ???",
        "en-US": "{0}???"
    },
    {
        "opy": "{0}??",
        "fr": "{0} ??",
        "en-US": "{0}??"
    },
    {
        "opy": "{0}?",
        "fr": "{0} ?",
        "en-US": "{0}?"
    }
]
//end-json

var binaryStrKw = 
//begin-json
[
    {
        "opy": "{0} -> {1}",
        "en-US": "{0} -> {1}"
    },
    {
        "opy": "{0} - {1}",
        "en-US": "{0} - {1}"
    },
    {
        "opy": "{0} != {1}",
        "en-US": "{0} != {1}"
    },
    {
        "opy": "{0} * {1}",
        "en-US": "{0} * {1}"
    },
    {
        "opy": "{0} / {1}",
        "en-US": "{0} / {1}"
    },
    {
        "opy": "{0} + {1}",
        "en-US": "{0} + {1}"
    },
    {
        "opy": "{0} <-> {1}",
        "en-US": "{0} <-> {1}"
    },
    {
        "opy": "{0} <- {1}",
        "en-US": "{0} <- {1}"
    },
    {
        "opy": "{0} <= {1}",
        "en-US": "{0} <= {1}"
    },
    {
        "opy": "{0} < {1}",
        "en-US": "{0} < {1}"
    },
    {
        "opy": "{0} == {1}",
        "en-US": "{0} == {1}"
    },
    {
        "opy": "{0} = {1}",
        "en-US": "{0} = {1}"
    },
    {
        "opy": "{0} >= {1}",
        "en-US": "{0} >= {1}"
    },
    {
        "opy": "{0} > {1}",
        "en-US": "{0} > {1}"
    },
    {
        "opy": "{0} And {1}",
        "fr": "{0} et {1}",
        "en-US": "{0} And {1}"
    },
    {
        "opy": "{0} Vs {1}",
        "en-US": "{0} Vs {1}"
    },
    {
        "opy": "{0}, {1}",
        "en-US": "{0}, {1}"
    },
    {
        "opy": "{0}: {1}",
        "fr": "{0} : {1}",
        "en-US": "{0}: {1}"
    },
    {
        "opy": "{0}:{1}",
        "en-US": "{0}:{1}"
    },
    {
        "opy": "{0} {1}",
        "en-US": "{0} {1}"
    }
]
//end-json

var ternaryStrKw = 
//begin-json
[
    {
        "opy": "{0} - {1} - {2}",
        "en-US": "{0} - {1} - {2}"
    },
    {
        "opy": "{0} : {1} : {2}",
        "en-US": "{0} : {1} : {2}"
    },
    {
        "opy": "{0} {1} {2}",
        "en-US": "{0} {1} {2}"
    },
    {
        "opy": "{0}, {1}, And {2}",
        "fr": "{0}, {1}, et {2}",
        "en-US": "{0}, {1}, And {2}"
    },
    {
        "opy": "{0}: {1} And {2}",
        "fr": "{0} : {1} et {2}",
        "en-US": "{0}: {1} And {2}"
    }
]
//end-json

var surroundStrKw = 
//begin-json
[
    {
        "opy": "({0})",
        "en-US": "({0})"
    },
    {
        "opy": "¡{0}!",
        "en-US": "¡{0}!"
    },
    {
        "opy": "¿{0}?",
        "en-US": "¿{0}?"
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

};
