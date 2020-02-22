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
        "opy": "getDamageHeroes",
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
        "opy": "getAllHeroes",
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
        "opy": "getSupportHeroes",
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
        "opy": "getTankHeroes",
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
        "opy": "angleBetweenVectors",
        "description": "The angle in degrees between two directional vectors (no normalization required).",
        "args": [
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "VECTOR",
                "default": "VECTOR"
            },
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "VECTOR",
                "default": "VECTOR"
            }
        ],
        "en-US": "Angle Between Vectors",
        "guid": "00000000C813",
        "es-MX": "Ángulo entre vectores",
        "fr-FR": "Angle entre deux vecteurs",
        "ja-JP": "ベクトル間角度",
        "pt-BR": "Ângulo entre Vetores",
        "zh-CN": "矢量间夹角"
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
        "opy": "getCurrentGamemode",
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
        "opy": "getCurrentMap",
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
        "opy": "eventWasHealthPack",
        "description": "Whether the healing was a health pack for the event currently being processed by this rule.",
        "args": null,
        "en-US": "Event Was Health Pack",
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
        "es-MX": "Héroe",
        "fr-FR": "Héros",
        "ja-JP": "ヒーロー",
        "pt-BR": "Herói",
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
        "opy": "isAssemblingHeroes",
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
        "opy": "isMatchBetweenRounds",
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
        "opy": "isControlPointLocked",
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
        "opy": "isInSuddenDeath",
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
        "opy": "isGameInProgress",
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
        "opy": "isInSetup",
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
        "opy": "isMatchComplete",
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
        "opy": "isWaitingForPlayers",
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
        "opy": "getLastCreatedEntity",
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
        "opy": "getLastDamageModification",
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
        "opy": "getLastDoT",
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
        "opy": "getLastHoT",
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
        "opy": "getLastHealingModification",
        "description": "An id representing the most recent start healing modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "en-US": "Last Healing Modification ID",
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
        "opy": "getLastCreatedText",
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
        "opy": "getMatchRound",
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
        "opy": "getMatchTime",
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
        "opy": "getCurrentObjective",
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
        "opy": "getServerLoad",
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
        "opy": "getAverageServerLoad",
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
        "opy": "getPeakServerLoad",
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























