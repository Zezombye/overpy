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

const constantValues = 
//begin-json
{
    "Transform": {
        "ROTATION": {
            "en-US": "Rotation",
            "guid": "00000000B33B",
            "es-MX": "Rotación",
            "ja-JP": "回転",
            "pt-BR": "Rotação",
            "zh-CN": "旋转"
        },
        "ROTATION_AND_TRANSLATION": {
            "en-US": "Rotation And Translation",
            "guid": "00000000B33C",
            "es-MX": "Rotación y traslación",
            "fr-FR": "Rotation et Translation",
            "ja-JP": "回転と平行移動",
            "pt-BR": "Rotação e Translação",
            "zh-CN": "旋转并转换"
        }
    },
    "Invis": {
        "ALL": {
            "guid": "00000000B9EB",
            "en-US": "All",
            "es-MX": "Todos",
            "fr-FR": "Tous",
            "ja-JP": "すべて",
            "pt-BR": "Todos",
            "zh-CN": "全部"
        },
        "ENEMIES": {
            "guid": "00000000B9EA",
            "en-US": "Enemies",
            "es-MX": "Enemigos",
            "fr-FR": "Ennemis",
            "ja-JP": "敵",
            "pt-BR": "Inimigos",
            "zh-CN": "敌人"
        },
        "NONE": {
            "guid": "00000000B9EC",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Personne",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "全部禁用"
        }
    },
    "Color": {
        "AQUA": {
            "guid": "00000000CDB3",
            "en-US": "Aqua",
            "es-MX": "Aguamarina",
            "fr-FR": "Cyan",
            "it-IT": "Acquamarina",
            "ja-JP": "アクア",
            "pl-PL": "Akwamaryna",
            "pt-BR": "Azul-piscina",
            "zh-CN": "水绿色"
        },
        "BLUE": {
            "guid": "00000000B939",
            "en-US": "Blue",
            "es-MX": "Azul",
            "fr-FR": "Bleu",
            "ja-JP": "青",
            "pt-BR": "Azul",
            "zh-CN": "蓝色"
        },
        "GREEN": {
            "guid": "00000000B93A",
            "en-US": "Green",
            "es-MX": "Verde",
            "fr-FR": "Vert",
            "ja-JP": "緑",
            "pt-BR": "Verde",
            "zh-CN": "绿色"
        },
        "LIME_GREEN": {
            "guid": "00000000CDB7",
            "en-US": "Lime Green",
            "es-MX": "Verde lima",
            "fr-FR": "Citron vert",
            "it-IT": "Verde acido",
            "ja-JP": "ライムグリーン",
            "pl-PL": "Limonkowy",
            "pt-BR": "Verde-limão",
            "zh-CN": "灰绿色"
        },
        "ORANGE": {
            "guid": "00000000CDB4",
            "en-US": "Orange",
            "es-MX": "Naranja",
            "it-IT": "Arancione",
            "ja-JP": "オレンジ",
            "pl-PL": "Pomarańczowy",
            "pt-BR": "Laranja",
            "zh-CN": "橙色"
        },
        "PURPLE": {
            "guid": "00000000BC1C",
            "en-US": "Purple",
            "es-MX": "Morado",
            "fr-FR": "Violet",
            "ja-JP": "紫",
            "pt-BR": "Roxo",
            "zh-CN": "紫色"
        },
        "RED": {
            "guid": "00000000B938",
            "en-US": "Red",
            "es-MX": "Rojo",
            "fr-FR": "Rouge",
            "ja-JP": "赤",
            "pt-BR": "Vermelho",
            "zh-CN": "红色"
        },
        "SKY_BLUE": {
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
        "TEAM_1": {
            "guid": "00000000B472",
            "en-US": "Team 1",
            "es-MX": "Equipo 1",
            "fr-FR": "Équipe 1",
            "ja-JP": "チーム1",
            "pt-BR": "Equipe 1",
            "zh-CN": "队伍1"
        },
        "TEAM_2": {
            "guid": "00000000B471",
            "en-US": "Team 2",
            "es-MX": "Equipo 2",
            "fr-FR": "Équipe 2",
            "ja-JP": "チーム2",
            "pt-BR": "Equipe 2",
            "zh-CN": "队伍2"
        },
        "TURQUOISE": {
            "guid": "00000000CDB6",
            "en-US": "Turquoise",
            "es-MX": "Turquesa",
            "ja-JP": "ターコイズ",
            "pl-PL": "Turkusowy",
            "pt-BR": "Turquesa",
            "zh-CN": "青绿色"
        },
        "WHITE": {
            "guid": "00000000B93C",
            "en-US": "White",
            "es-MX": "Blanco",
            "fr-FR": "Blanc",
            "ja-JP": "白",
            "pt-BR": "Branco",
            "zh-CN": "白色"
        },
        "YELLOW": {
            "guid": "00000000B93B",
            "en-US": "Yellow",
            "es-MX": "Amarillo",
            "fr-FR": "Jaune",
            "ja-JP": "黄色",
            "pt-BR": "Amarelo",
            "zh-CN": "黄色"
        }
    },
    "Button": {
        "ABILITY_1": {
            "guid": "00000000B179",
            "en-US": "Ability 1",
            "es-MX": "Habilidad 1",
            "fr-FR": "Capacité 1",
            "ja-JP": "アビリティ1",
            "pt-BR": "Habilidade 1",
            "zh-CN": "技能1"
        },
        "ABILITY_2": {
            "guid": "00000000B178",
            "en-US": "Ability 2",
            "es-MX": "Habilidad 2",
            "fr-FR": "Capacité 2",
            "ja-JP": "アビリティ2",
            "pt-BR": "Habilidade 2",
            "zh-CN": "技能2"
        },
        "CROUCH": {
            "guid": "00000000B175",
            "en-US": "Crouch",
            "es-MX": "Agacharse",
            "fr-FR": "S’accroupir",
            "ja-JP": "しゃがみ",
            "pt-BR": "Agachar",
            "zh-CN": "蹲下"
        },
        "INTERACT": {
            "guid": "00000000B31E",
            "en-US": "Interact",
            "es-MX": "Interactuar",
            "fr-FR": "Interaction",
            "ja-JP": "インタラクト",
            "pt-BR": "Interagir",
            "zh-CN": "互动"
        },
        "JUMP": {
            "guid": "00000000B176",
            "en-US": "Jump",
            "es-MX": "Saltar",
            "fr-FR": "Sauter",
            "ja-JP": "ジャンプ",
            "pt-BR": "Pular",
            "zh-CN": "跳跃"
        },
        "MELEE": {
            "en-US": "Melee"
        },
        "PRIMARY_FIRE": {
            "guid": "00000000B17B",
            "en-US": "Primary Fire",
            "es-MX": "Disparo principal",
            "fr-FR": "Tir principal",
            "ja-JP": "メイン攻撃",
            "pt-BR": "Disparo Primário",
            "zh-CN": "主要攻击模式"
        },
        "RELOAD": {
            "en-US": "Reload"
        },
        "SECONDARY_FIRE": {
            "guid": "00000000B17A",
            "en-US": "Secondary Fire",
            "es-MX": "Disparo secundario",
            "fr-FR": "Tir secondaire",
            "ja-JP": "サブ攻撃",
            "pt-BR": "Disparo Secundário",
            "zh-CN": "辅助攻击模式"
        },
        "ULTIMATE": {
            "guid": "00000000B177",
            "en-US": "Ultimate",
            "es-MX": "Habilidad máxima",
            "fr-FR": "Capacité ultime",
            "ja-JP": "アルティメット",
            "pt-BR": "Habilidade Suprema",
            "zh-CN": "终极技能"
        }
    },
    "_Operation": {	
        "_add": {	
            "guid": "00000000B16D",	
            "en-US": "Add",	
            "es-MX": "Agregar",	
            "fr-FR": "Addition",	
            "ja-JP": "追加",	
            "pt-BR": "Adicionar",	
            "zh-CN": "加"	
        },	
        "_appendToArray": {	
            "guid": "00000000B167",	
            "en-US": "Append To Array",	
            "es-MX": "Anexar a la matriz",	
            "fr-FR": "Ajouter au tableau",	
            "ja-JP": "追加",	
            "pt-BR": "Juntar à Matriz",	
            "zh-CN": "添加至数组"	
        },	
        "_divide": {	
            "guid": "00000000B16A",	
            "en-US": "Divide",	
            "es-MX": "Dividir",	
            "fr-FR": "Division",	
            "ja-JP": "割る",	
            "pt-BR": "Dividir",	
            "zh-CN": "除"	
        },	
        "_max": {	
            "guid": "00000000B18F",	
            "en-US": "Max",	
            "es-MX": "Máximo",	
            "fr-FR": "Maximum",	
            "ja-JP": "最大",	
            "pt-BR": "Máx.",	
            "zh-CN": "最大"	
        },	
        "_min": {	
            "guid": "00000000B190",	
            "en-US": "Min",	
            "es-MX": "Mínimo",	
            "fr-FR": "Minimum",	
            "ja-JP": "分",	
            "pt-BR": "Mín.",	
            "zh-CN": "最小"	
        },	
        "_modulo": {	
            "guid": "00000000B169",	
            "en-US": "Modulo",	
            "es-MX": "Módulo",	
            "ja-JP": "剰余",	
            "pt-BR": "Modular",	
            "zh-CN": "余数"	
        },	
        "_multiply": {	
            "guid": "00000000B16B",	
            "en-US": "Multiply",	
            "es-MX": "Multiplicar",	
            "fr-FR": "Multiplication",	
            "ja-JP": "掛ける",	
            "pt-BR": "Multiplicar",	
            "zh-CN": "乘"	
        },	
        "_raiseToPower": {	
            "guid": "00000000B168",	
            "en-US": "Raise To Power",	
            "es-MX": "Elevar a la potencia",	
            "fr-FR": "Élévation à une puissance ",	
            "ja-JP": "冪乗",	
            "pt-BR": "Elevar à Potência",	
            "zh-CN": "乘方"	
        },	
        "_removeFromArrayByIndex": {	
            "en-US": "Remove From Array By Index",	
            "guid": "00000000C61B",	
            "es-MX": "Eliminar de la matriz por índice",	
            "fr-FR": "Supprimer du tableau par index",	
            "ja-JP": "インデックスを配列から削除",	
            "pt-BR": "Remover da Matriz por Índice",	
            "zh-CN": "根据索引从数组中移除"	
        },	
        "_removeFromArrayByValue": {	
            "en-US": "Remove From Array By Value",	
            "guid": "00000000B166",	
            "es-MX": "Eliminar de la matriz por valor",	
            "fr-FR": "Supprimer du tableau par valeur",	
            "ja-JP": "削除",	
            "pt-BR": "Remover da Matriz por Valor",	
            "zh-CN": "根据值从数组中移除"	
        },	
        "_subtract": {	
            "guid": "00000000B16C",	
            "en-US": "Subtract",	
            "es-MX": "Restar",	
            "fr-FR": "Soustraction",	
            "ja-JP": "引く",	
            "pt-BR": "Subtrair",	
            "zh-CN": "减"	
        }	
    },
    "Team": {
        "1": {
            "guid": "00000000B472",
            "en-US": "Team 1",
            "es-MX": "Equipo 1",
            "fr-FR": "Équipe 1",
            "ja-JP": "チーム1",
            "pt-BR": "Equipe 1",
            "zh-CN": "队伍1"
        },
        "2": {
            "guid": "00000000B471",
            "en-US": "Team 2",
            "es-MX": "Equipo 2",
            "fr-FR": "Équipe 2",
            "ja-JP": "チーム2",
            "pt-BR": "Equipe 2",
            "zh-CN": "队伍2"
        },
        "ALL": {
            "guid": "00000000B470",
            "en-US": "All Teams",
            "es-MX": "Todos los equipos",
            "fr-FR": "Toutes les équipes",
            "ja-JP": "すべてのチーム",
            "pt-BR": "Todas as Equipes",
            "zh-CN": "所有队伍"
        }
    },
    "DynamicEffect": {
        "BAD_EXPLOSION": {
            "en-US": "Bad Explosion",
            "guid": "00000000BC1A",
            "es-MX": "Mala explosión",
            "fr-FR": "Mauvaise explosion",
            "ja-JP": "悪い爆発",
            "pt-BR": "Explosão Ruim",
            "zh-CN": "有害爆炸"
        },
        "BAD_PICKUP_EFFECT": {
            "en-US": "Bad Pickup Effect",
            "guid": "00000000BC18",
            "es-MX": "Mal efecto de captura",
            "fr-FR": "Mauvais effet de ramassage",
            "ja-JP": "悪いピックアップ効果",
            "pt-BR": "Efeito de Coleta Ruim",
            "zh-CN": "有害选择效果 "
        },
        "BUFF_EXPLOSION_SOUND": {
            "en-US": "Buff Explosion Sound",
            "guid": "00000000C400",
            "es-MX": "Sonido de explosión de potenciamiento",
            "fr-FR": "Son d’explosion d’amélioration",
            "ja-JP": "爆発音（バフ）",
            "pt-BR": "Som de Explosão para Bônus",
            "zh-CN": "状态爆炸声音"
        },
        "BUFF_IMPACT_SOUND": {
            "en-US": "Buff Impact Sound",
            "guid": "00000000C3FE",
            "es-MX": "Sonido de impacto de potenciamiento",
            "fr-FR": "Son d’impact d’amélioration",
            "ja-JP": "衝撃音（バフ）",
            "pt-BR": "Som de Impacto para Bônus",
            "zh-CN": "正面状态施加声音"
        },
        "DEBUFF_IMPACT_SOUND": {
            "en-US": "Debuff Impact Sound",
            "guid": "00000000C3FD",
            "es-MX": "Sonido de impacto de despotenciamiento",
            "fr-FR": "Son d’impact d’affaiblissement",
            "ja-JP": "衝撃音（デバフ）",
            "pt-BR": "Som de Impacto para Penalidade",
            "zh-CN": "负面状态施加声音"
        },
        "EXPLOSION_SOUND": {
            "en-US": "Explosion Sound",
            "guid": "00000000C401",
            "es-MX": "Sonido de explosión",
            "fr-FR": "Son de l’explosion",
            "ja-JP": "爆発音",
            "pt-BR": "Som de Explosão",
            "zh-CN": "爆炸声音"
        },
        "GOOD_EXPLOSION": {
            "en-US": "Good Explosion",
            "guid": "00000000BB28",
            "es-MX": "Buena explosión",
            "fr-FR": "Bonne explosion",
            "ja-JP": "いい爆発",
            "pt-BR": "Explosão Boa",
            "zh-CN": "有益爆炸"
        },
        "GOOD_PICKUP_EFFECT": {
            "en-US": "Good Pickup Effect",
            "guid": "00000000BC19",
            "es-MX": "Buen efecto de captura",
            "fr-FR": "Bon effet de ramassage",
            "ja-JP": "いいピックアップ効果",
            "pt-BR": "Efeito de Coleta Bom",
            "zh-CN": "有益选择效果 "
        },
        "RING_EXPLOSION": {
            "en-US": "Ring Explosion",
            "guid": "00000000BC1B",
            "es-MX": "Explosión en anillo",
            "fr-FR": "Explosion concentrique",
            "ja-JP": "リングの爆発",
            "pt-BR": "Explosão em Anel",
            "zh-CN": "环状爆炸"
        },
        "RING_EXPLOSION_SOUND": {
            "en-US": "Ring Explosion Sound",
            "guid": "00000000C3FF",
            "es-MX": "Sonido de explosión en anillo",
            "fr-FR": "Son d’explosion concentrique",
            "ja-JP": "爆発音（リング）",
            "pt-BR": "Som de Explosão para Anel",
            "zh-CN": "环状爆炸声音"
        }
    },
    "Effect": {
        "BAD_AURA": {
            "en-US": "Bad Aura",
            "guid": "00000000BC17",
            "es-MX": "Mala Aura",
            "fr-FR": "Mauvaise aura",
            "ja-JP": "悪いオーラ",
            "pt-BR": "Aura Ruim",
            "zh-CN": "有害光环"
        },
        "BAD_AURA_SOUND": {
            "en-US": "Bad Aura Sound",
            "guid": "00000000C4DA",
            "es-MX": "Sonido de aura mala",
            "fr-FR": "Son de mauvaise aura",
            "ja-JP": "悪いオーラ音",
            "pt-BR": "Som de Aura Ruim",
            "zh-CN": "负面光环音效"
        },
        "BEACON_SOUND": {
            "en-US": "Beacon Sound",
            "guid": "00000000C4D3",
            "es-MX": "Sonido de baliza",
            "fr-FR": "Son de balise",
            "ja-JP": "ビーコン音",
            "pt-BR": "Som de Sinalizador",
            "zh-CN": "信标声音"
        },
        "CLOUD": {
            "guid": "00000000BC15",
            "en-US": "Cloud",
            "es-MX": "Nube",
            "fr-FR": "Nuage",
            "ja-JP": "雲",
            "pt-BR": "Nuvem",
            "zh-CN": "云"
        },
        "DECAL_SOUND": {
            "en-US": "Decal Sound",
            "guid": "00000000C4D4",
            "es-MX": "Sonido de calcomanía",
            "fr-FR": "Son de décal",
            "ja-JP": "デカール音",
            "pt-BR": "Som de Símbolo",
            "zh-CN": "诱饵声音"
        },
        "ENERGY_SOUND": {
            "en-US": "Energy Sound",
            "guid": "00000000C3FC",
            "es-MX": "Sonido de energía",
            "fr-FR": "Son de l’énergie",
            "ja-JP": "エネルギー音",
            "pt-BR": "Som de Energia",
            "zh-CN": "能量声音"
        },
        "GOOD_AURA": {
            "en-US": "Good Aura",
            "guid": "00000000BC13",
            "es-MX": "Buena aura",
            "fr-FR": "Bonne aura",
            "ja-JP": "いいオーラ",
            "pt-BR": "Aura Boa",
            "zh-CN": "有益光环"
        },
        "GOOD_AURA_SOUND": {
            "en-US": "Good Aura Sound",
            "guid": "00000000C4D8",
            "es-MX": "Sonido de aura buena",
            "fr-FR": "Son de bonne aura",
            "ja-JP": "いいオーラ音",
            "pt-BR": "Som de Aura Boa",
            "zh-CN": "有益光环声音"
        },
        "LIGHT_SHAFT": {
            "en-US": "Light Shaft",
            "guid": "00000000B934",
            "es-MX": "Haz de luz",
            "fr-FR": "Puits de lumière",
            "ja-JP": "光の筋",
            "pt-BR": "Feixe de Luz",
            "zh-CN": "光柱"
        },
        "ORB": {
            "guid": "00000000B933",
            "en-US": "Orb",
            "es-MX": "Orbe",
            "fr-FR": "Orbe",
            "ja-JP": "オーブ",
            "pt-BR": "Orbe",
            "zh-CN": "球"
        },
        "PICKUP_SOUND": {
            "en-US": "Pick-up Sound",
            "guid": "00000000C4D9",
            "es-MX": "Sonido de objeto recogido",
            "fr-FR": "Son de ramassage",
            "ja-JP": "ピックアップ音",
            "pt-BR": "Som de Coleta",
            "zh-CN": "拾取音效"
        },
        "RING": {
            "en-US": "Ring",
            "guid": "00000000BC16",
            "es-MX": "Anillo",
            "fr-FR": "Anneau",
            "ja-JP": "リング",
            "pt-BR": "Anel",
            "zh-CN": "环"
        },
        "SMOKE_SOUND": {
            "en-US": "Smoke Sound",
            "guid": "00000000C4D5",
            "es-MX": "Sonido de humo",
            "fr-FR": "Son de la fumée",
            "ja-JP": "スモーク音",
            "pt-BR": "Som de Fumaça",
            "zh-CN": "烟雾声音"
        },
        "SPARKLES": {
            "guid": "00000000BC14",
            "en-US": "Sparkles",
            "es-MX": "Chispas",
            "fr-FR": "Etincelles",
            "ja-JP": "スパークル",
            "pt-BR": "Faíscas",
            "zh-CN": "火花"
        },
        "SPARKLES_SOUND": {
            "en-US": "Sparkles Sound",
            "guid": "00000000C4D6",
            "es-MX": "Sonido de chispas",
            "fr-FR": "Son des étincelles",
            "ja-JP": "スパークル音",
            "pt-BR": "Som de Faíscas",
            "zh-CN": "火花声音"
        },
        "SPHERE": {
            "guid": "00000000B935",
            "en-US": "Sphere",
            "es-MX": "Esfera",
            "fr-FR": "Sphère",
            "ja-JP": "球体",
            "pt-BR": "Esfera",
            "zh-CN": "球体"
        }
    },
    "Comms": {
        "ACKNOWLEDGE": {
            "en-US": "Acknowledge",
            "guid": "00000000B9D5",
            "es-MX": "De acuerdo",
            "fr-FR": "Bien reçu",
            "ja-JP": "了解",
            "pt-BR": "Reconhecer",
            "zh-CN": "收到"
        },
        "EMOTE_DOWN": {
            "guid": "00000000B9DB",
            "en-US": "Emote Down",
            "es-MX": "Gesto hacia abajo",
            "fr-FR": "Emote bas",
            "ja-JP": "エモート下",
            "pt-BR": "Emote Abaixo",
            "zh-CN": "表情（下）"
        },
        "EMOTE_LEFT": {
            "guid": "00000000B9DD",
            "en-US": "Emote Left",
            "es-MX": "Gesto hacia la izquierda",
            "fr-FR": "Emote gauche",
            "ja-JP": "エモート左",
            "pt-BR": "Emote à Esquerda",
            "zh-CN": "表情（左）"
        },
        "EMOTE_RIGHT": {
            "guid": "00000000B9DC",
            "en-US": "Emote Right",
            "es-MX": "Gesto hacia la derecha",
            "fr-FR": "Emote droite",
            "ja-JP": "エモート右",
            "pt-BR": "Emote à Direita",
            "zh-CN": "表情（右）"
        },
        "EMOTE_UP": {
            "en-US": "Emote Up",
            "guid": "00000000B9DE",
            "es-MX": "Gesto hacia arriba",
            "fr-FR": "Emote haut",
            "ja-JP": "エモート上",
            "pt-BR": "Emote Acima",
            "zh-CN": "表情（上）"
        },
        "GROUP_UP": {
            "en-US": "Group Up",
            "guid": "00000000B9D7",
            "es-MX": "Agrúpense",
            "fr-FR": "Regroupement",
            "ja-JP": "集合",
            "pt-BR": "Agrupem-se",
            "zh-CN": "集合"
        },
        "HELLO": {
            "guid": "00000000B9D9",
            "en-US": "Hello",
            "es-MX": "Hola",
            "fr-FR": "Bonjour",
            "ja-JP": "こんにちは",
            "pt-BR": "Olá",
            "zh-CN": "问候"
        },
        "NEED_HEALING": {
            "en-US": "Need Healing",
            "guid": "00000000B9D8",
            "es-MX": "Necesito sanación",
            "fr-FR": "Besoin de soins",
            "ja-JP": "回復が必要",
            "pt-BR": "Preciso de Cura",
            "zh-CN": "需要治疗"
        },
        "THANKS": {
            "guid": "00000000B9D6",
            "en-US": "Thanks",
            "es-MX": "Gracias",
            "fr-FR": "Merci",
            "ja-JP": "ありがとう",
            "pt-BR": "Obrigado",
            "zh-CN": "感谢"
        },
        "ULTIMATE_STATUS": {
            "en-US": "Ultimate Status",
            "guid": "00000000B9DA",
            "es-MX": "Estado de habilidad máxima",
            "fr-FR": "Statut de l’ulti",
            "ja-JP": "アルティメットの状態",
            "pt-BR": "Status da Suprema",
            "zh-CN": "终极技能状态"
        },
        "VOICE_LINE_DOWN": {
            "en-US": "Voice Line Down",
            "guid": "00000000B9DF",
            "es-MX": "Línea de voz hacia abajo",
            "fr-FR": "Réplique bas",
            "ja-JP": "ボイス・ライン下",
            "pt-BR": "Fala Abaixo",
            "zh-CN": "语音（下）"
        },
        "VOICE_LINE_LEFT": {
            "en-US": "Voice Line Left",
            "guid": "00000000B9E1",
            "es-MX": "Línea de voz hacia la izquierda",
            "fr-FR": "Réplique gauche",
            "ja-JP": "ボイス・ライン左",
            "pt-BR": "Fala à Esquerda",
            "zh-CN": "语音（左）"
        },
        "VOICE_LINE_RIGHT": {
            "en-US": "Voice Line Right",
            "guid": "00000000B9E0",
            "es-MX": "Línea de voz hacia la derecha",
            "fr-FR": "Réplique droite",
            "ja-JP": "ボイス・ライン右",
            "pt-BR": "Fala à Direita",
            "zh-CN": "语音（右）"
        },
        "VOICE_LINE_UP": {
            "en-US": "Voice Line Up",
            "guid": "00000000B9E2",
            "es-MX": "Línea de voz hacia arriba",
            "fr-FR": "Réplique haut",
            "ja-JP": "ボイス・ライン上",
            "pt-BR": "Fala Acima",
            "zh-CN": "语音（上）"
        }
    },
    "Icon": {
        "ARROW_DOWN": {
            "description": "![](https://i.imgur.com/hych4AE.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Arrow: Down",
            "guid": "00000000C2C9",
            "es-MX": "Flecha: Hacia abajo",
            "fr-FR": "Flèche bas",
            "ja-JP": "矢印:下",
            "pt-BR": "Seta: Baixo",
            "zh-CN": "箭头：向下"
        },
        "ARROW_LEFT": {
            "description": "![](https://i.imgur.com/jgpW0Nb.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Arrow: Left",
            "guid": "00000000C2CA",
            "es-MX": "Flecha: Hacia la izquierda",
            "fr-FR": "Flèche gauche",
            "ja-JP": "矢印:左",
            "pt-BR": "Seta: Esquerda",
            "zh-CN": "箭头：向左"
        },
        "ARROW_RIGHT": {
            "description": "![](https://i.imgur.com/0BttENZ.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Arrow: Right",
            "guid": "00000000C2CB",
            "es-MX": "Flecha: Hacia la derecha",
            "fr-FR": "Flèche droite",
            "ja-JP": "矢印:右",
            "pt-BR": "Seta: Direita",
            "zh-CN": "箭头：向右"
        },
        "ARROW_UP": {
            "description": "![](https://i.imgur.com/Pr86Pcf.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Arrow: Up",
            "guid": "00000000C2CC",
            "es-MX": "Flecha: Hacia arriba",
            "fr-FR": "Flèche haut",
            "ja-JP": "矢印:上",
            "pt-BR": "Seta: Cima",
            "zh-CN": "箭头：向上"
        },
        "ASTERISK": {
            "description": "![](https://i.imgur.com/XTvINuC.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Asterisk",
            "guid": "00000000C2CD",
            "es-MX": "Asterisco",
            "fr-FR": "Astérisque",
            "ja-JP": "アスタリスク",
            "pt-BR": "Asterisco",
            "zh-CN": "星形"
        },
        "BOLT": {
            "description": "![](https://i.imgur.com/ekbDxsT.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Bolt",
            "guid": "00000000C2CE",
            "es-MX": "Rayo",
            "fr-FR": "Boulon",
            "ja-JP": "雷光の弓",
            "pt-BR": "Raio",
            "zh-CN": "箭矢"
        },
        "CHECKMARK": {
            "description": "![](https://i.imgur.com/B7V240H.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Checkmark",
            "guid": "00000000C2CF",
            "es-MX": "Marca de control",
            "fr-FR": "Point d’exclamation",
            "ja-JP": "チェックマーク",
            "pt-BR": "Marca de Verificação",
            "zh-CN": "对号"
        },
        "CIRCLE": {
            "guid": "00000000C2D0",
            "description": "![](https://i.imgur.com/6lNvrqD.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Circle",
            "es-MX": "Círculo",
            "fr-FR": "Cercle",
            "ja-JP": "サークル",
            "pt-BR": "Círculo",
            "zh-CN": "圆圈"
        },
        "CLUB": {
            "guid": "00000000C2D1",
            "description": "![](https://i.imgur.com/HYWor8w.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Club",
            "es-MX": "Trébol",
            "fr-FR": "Trèfle",
            "ja-JP": "棍棒",
            "pt-BR": "Paus",
            "zh-CN": "梅花"
        },
        "DIAMOND": {
            "guid": "00000000C2D2",
            "description": "![](https://i.imgur.com/5aLqsHf.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Diamond",
            "es-MX": "Diamante",
            "fr-FR": "Carreau",
            "ja-JP": "ダイヤモンド",
            "pt-BR": "Ouros",
            "zh-CN": "方块"
        },
        "DIZZY": {
            "guid": "00000000C2D3",
            "description": "![](https://i.imgur.com/P1Qi43N.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Dizzy",
            "es-MX": "Mareado",
            "fr-FR": "Étourdi",
            "ja-JP": "めまい",
            "pt-BR": "Tonto",
            "zh-CN": "晕眩"
        },
        "EXCLAMATION_MARK": {
            "description": "![](https://i.imgur.com/1rBcHfz.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Exclamation Mark",
            "guid": "00000000C2D4",
            "es-MX": "Signo de exclamación",
            "fr-FR": "Point d’exclamation",
            "ja-JP": "エクスクラメーションマーク",
            "pt-BR": "Ponto de Exclamação",
            "zh-CN": "感叹号"
        },
        "EYE": {
            "description": "![](https://i.imgur.com/pVMPtoH.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Eye",
            "guid": "00000000C2D5",
            "es-MX": "Ojo",
            "fr-FR": "Œil",
            "ja-JP": "の眼差し",
            "pt-BR": "Olho",
            "zh-CN": "眼睛"
        },
        "FIRE": {
            "description": "![](https://i.imgur.com/m3As7B0.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Fire",
            "guid": "00000000C2D6",
            "es-MX": "Fuego",
            "fr-FR": "Flamme",
            "ja-JP": "砲撃",
            "pt-BR": "Fogo",
            "zh-CN": "火焰"
        },
        "FLAG": {
            "description": "![](https://i.imgur.com/v30lUgy.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Flag",
            "guid": "00000000C2F0",
            "es-MX": "Bandera",
            "fr-FR": "Drapeau",
            "ja-JP": "通報",
            "pt-BR": "Bandeira",
            "zh-CN": "旗帜"
        },
        "HALO": {
            "guid": "00000000C2D7",
            "description": "![](https://i.imgur.com/FWR9HAQ.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Halo",
            "ja-JP": "光輪",
            "pt-BR": "Auréola",
            "zh-CN": "光晕"
        },
        "HAPPY": {
            "description": "![](https://i.imgur.com/CNwSwb1.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Happy",
            "guid": "00000000C2D8",
            "es-MX": "Feliz",
            "fr-FR": "Smiley content",
            "ja-JP": "ハッピー",
            "pt-BR": "Feliz",
            "zh-CN": "高兴"
        },
        "HEART": {
            "guid": "00000000C2D9",
            "description": "![](https://i.imgur.com/1KPOyZa.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Heart",
            "es-MX": "Corazón",
            "fr-FR": "Cœur",
            "ja-JP": "ハート",
            "pt-BR": "Copas",
            "zh-CN": "红桃"
        },
        "MOON": {
            "guid": "00000000C2DA",
            "description": "![](https://i.imgur.com/2uxcKF0.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Moon",
            "es-MX": "Luna",
            "fr-FR": "Lune",
            "ja-JP": "月",
            "pt-BR": "Lua",
            "zh-CN": "满月"
        },
        "NO": {
            "guid": "00000000C2DB",
            "description": "![](https://i.imgur.com/TZ4zFso.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "No",
            "fr-FR": "Interdit",
            "ja-JP": "いいえ",
            "pt-BR": "Não",
            "zh-CN": "拒绝"
        },
        "PLUS": {
            "description": "![](https://i.imgur.com/OLARJ80.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Plus",
            "guid": "00000000C2DC",
            "es-MX": "Signo de suma",
            "ja-JP": "プラス",
            "pt-BR": "Mais",
            "zh-CN": "加号"
        },
        "POISON": {
            "description": "![](https://i.imgur.com/w2gsTiI.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Poison",
            "guid": "00000000C2DD",
            "es-MX": "Veneno",
            "ja-JP": "ポイズン",
            "pt-BR": "Veneno",
            "zh-CN": "剧毒"
        },
        "POISON_2": {
            "description": "![](https://i.imgur.com/UWmyDg2.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Poison 2",
            "guid": "00000000C2DE",
            "es-MX": "Veneno 2",
            "fr-FR": "Poison 2",
            "ja-JP": "ポイズン2",
            "pt-BR": "Veneno 2",
            "zh-CN": "剧毒2"
        },
        "QUESTION_MARK": {
            "description": "![](https://i.imgur.com/CZBV4tx.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Question Mark",
            "guid": "00000000C2DF",
            "es-MX": "Signo de interrogación",
            "fr-FR": "Point d’interrogation",
            "ja-JP": "クエスチョンマーク",
            "pt-BR": "Ponto de Interrogação",
            "zh-CN": "问号"
        },
        "RADIOACTIVE": {
            "description": "![](https://i.imgur.com/R1bnNcl.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Radioactive",
            "guid": "00000000C2E4",
            "es-MX": "Radiactivo",
            "fr-FR": "Radioactif",
            "ja-JP": "レディオアクティブ",
            "pt-BR": "Radiativo",
            "zh-CN": "辐射"
        },
        "RECYCLE": {
            "description": "![](https://i.imgur.com/q2fxb2u.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Recycle",
            "guid": "00000000C2E5",
            "es-MX": "Reciclaje",
            "fr-FR": "Recyclage",
            "ja-JP": "リサイクル",
            "pt-BR": "Reciclagem",
            "zh-CN": "回收"
        },
        "RING_THICK": {
            "description": "![](https://i.imgur.com/lTwuAjX.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Ring Thick",
            "guid": "00000000C2E6",
            "es-MX": "Anillo grueso",
            "fr-FR": "Anneau épais",
            "ja-JP": "リング太",
            "pt-BR": "Anel Grosso",
            "zh-CN": "宽环"
        },
        "RING_THIN": {
            "description": "![](https://i.imgur.com/NDOrzVS.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Ring Thin",
            "guid": "00000000C2E7",
            "es-MX": "Anillo delgado",
            "fr-FR": "Anneau fin",
            "ja-JP": "リング細",
            "pt-BR": "Anel Fino",
            "zh-CN": "细环"
        },
        "SAD": {
            "description": "![](https://i.imgur.com/00jyB4n.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Sad",
            "guid": "00000000C2E8",
            "es-MX": "Triste",
            "fr-FR": "Smiley triste",
            "ja-JP": "サッド",
            "pt-BR": "Triste",
            "zh-CN": "难过"
        },
        "SKULL": {
            "guid": "00000000C2E9",
            "description": "![](https://i.imgur.com/TKKtSIa.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Skull",
            "es-MX": "Cráneo",
            "fr-FR": "Crâne",
            "ja-JP": "スカル",
            "pt-BR": "Caveira",
            "zh-CN": "骷髅"
        },
        "SPADE": {
            "guid": "00000000C2EA",
            "description": "![](https://i.imgur.com/AJNBYA3.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Spade",
            "es-MX": "Pica",
            "fr-FR": "Pique",
            "ja-JP": "スペード",
            "pt-BR": "Espadas",
            "zh-CN": "黑桃"
        },
        "SPIRAL": {
            "description": "![](https://i.imgur.com/TQLGPww.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Spiral",
            "guid": "00000000C2EB",
            "es-MX": "Espiral",
            "fr-FR": "Spirale",
            "ja-JP": "螺旋を描く",
            "pt-BR": "Espiral",
            "zh-CN": "螺旋"
        },
        "STOP": {
            "guid": "00000000C2EC",
            "description": "![](https://i.imgur.com/af56Ghv.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Stop",
            "es-MX": "Alto",
            "ja-JP": "停止",
            "pt-BR": "Parada",
            "zh-CN": "停止"
        },
        "TRASHCAN": {
            "description": "![](https://i.imgur.com/iEtFvyC.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Trashcan",
            "guid": "00000000C2ED",
            "es-MX": "Tacho de basura",
            "fr-FR": "Poubelle",
            "ja-JP": "ゴミ箱",
            "pt-BR": "Lata de Lixo",
            "zh-CN": "垃圾箱"
        },
        "WARNING": {
            "guid": "00000000C2EE",
            "description": "![](https://i.imgur.com/SXDld9l.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "Warning",
            "es-MX": "Advertencia",
            "fr-FR": "Avertissement",
            "ja-JP": "警告",
            "pt-BR": "Aviso",
            "zh-CN": "警告"
        },
        "CROSS": {
            "guid": "00000000C2EF",
            "description": "![](https://i.imgur.com/05HFEnd.jpg) \n\n \n\n \n\n \n\n ",
            "en-US": "X",
            "fr-FR": "Croix"
        }
    },
    "Relativity": {
        "TO_PLAYER": {
            "en-US": "To Player",
            "guid": "00000000B16F",
            "es-MX": "Al jugador",
            "fr-FR": "Au joueur",
            "ja-JP": "対プレイヤー: ",
            "pt-BR": "Ao Jogador",
            "zh-CN": "至玩家"
        },
        "TO_WORLD": {
            "en-US": "To World",
            "guid": "00000000B170",
            "es-MX": "Al mundo",
            "fr-FR": "Au monde",
            "ja-JP": "対ワールド: ",
            "pt-BR": "Ao Mundo",
            "zh-CN": "至地图"
        }
    },
    "Impulse": {
        "CANCEL_CONTRARY_MOTION": {
            "en-US": "Cancel Contrary Motion",
            "guid": "00000000B520",
            "es-MX": "Cancelar movimiento contrario",
            "fr-FR": "Annuler le mouvement contraire",
            "ja-JP": "逆モーションをキャンセル",
            "pt-BR": "Cancelar Deslocamento Contrário",
            "zh-CN": "取消相反运动"
        },
        "INCORPORATE_CONTRARY_MOTION": {
            "en-US": "Incorporate Contrary Motion",
            "guid": "00000000B521",
            "es-MX": "Incorporar movimiento contrario",
            "fr-FR": "Incorporer un mouvement contraire",
            "ja-JP": "逆モーションを組み込む",
            "pt-BR": "Incorporar Deslocamento Contrário",
            "zh-CN": "合并相反运动"
        }
    },
    "_Rounding": {	
        "_roundUp": {	
            "guid": "00000000C34F",	
            "en-US": "Up",	
            "es-MX": "Hacia arriba",	
            "fr-FR": "Au-dessus",	
            "ja-JP": "上",	
            "pt-BR": "Cima",	
            "zh-CN": "上"	
        },	
        "_roundDown": {	
            "guid": "00000000C34E",	
            "en-US": "Down",	
            "es-MX": "Hacia abajo",	
            "fr-FR": "En dessous",	
            "ja-JP": "下",	
            "pt-BR": "Baixo",	
            "zh-CN": "下"	
        },	
        "_roundToNearest": {	
            "en-US": "To Nearest",	
            "guid": "00000000C34D",	
            "es-MX": "Al más cercano",	
            "fr-FR": "Au plus près",	
            "ja-JP": "最も近い数値へ",	
            "pt-BR": "Ao Mais Próximo",	
            "zh-CN": "至最近"	
        }	
    },
    "LosCheck": {
        "OFF": {
            "guid": "00000000B1E2",
            "en-US": "Off",
            "es-MX": "Apagado",
            "fr-FR": "Désactivé",
            "ja-JP": "オフ",
            "pt-BR": "Desligado",
            "zh-CN": "关闭"
        },
        "SURFACES": {
            "en-US": "Surfaces",
            "guid": "00000000B1E3",
            "es-MX": "Superficies",
            "ja-JP": "表面",
            "pt-BR": "Superfícies",
            "zh-CN": "表面"
        },
        "SURFACES_AND_ALL_BARRIERS": {
            "en-US": "Surfaces And All Barriers",
            "guid": "00000000B1E5",
            "es-MX": "Superficies y todas las barreras",
            "fr-FR": "Surfaces et toutes les barrières",
            "ja-JP": "表面とすべてのバリア",
            "pt-BR": "Superfícies e Todas as Barreiras",
            "zh-CN": "表面及全部屏障"
        },
        "SURFACES_AND_ENEMY_BARRIERS": {
            "en-US": "Surfaces And Enemy Barriers",
            "guid": "00000000B1E4",
            "es-MX": "Superficies y barreras enemigas",
            "fr-FR": "Surfaces et barrières ennemies",
            "ja-JP": "表面と敵のバリア",
            "pt-BR": "Superfícies e Barreiras Inimigas",
            "zh-CN": "表面及敌方屏障"
        }
    },
    "Clip": {
        "SURFACES": {
            "en-US": "Clip Against Surfaces",
            "guid": "00000000BAF5",
            "es-MX": "Atravesar las superficies",
            "fr-FR": "Masquer derrière les surfaces",
            "ja-JP": "表面に対してクリップ",
            "pt-BR": "Cortar nas Superfícies",
            "zh-CN": "根据表面截取"
        },
        "NONE": {
            "en-US": "Do Not Clip",
            "guid": "00000000BAF4",
            "es-MX": "No atravesar",
            "fr-FR": "Ne pas masquer",
            "ja-JP": "クリップしない",
            "pt-BR": "Não Cortar",
            "zh-CN": "不要截取"
        }
    },
    "Position": {
        "LEFT": {
            "guid": "00000000BAF6",
            "en-US": "Left",
            "es-MX": "Izquierda",
            "fr-FR": "Gauche",
            "ja-JP": "左",
            "pt-BR": "Esquerda",
            "zh-CN": "左边"
        },
        "TOP": {
            "en-US": "Top",
            "guid": "00000000BAF7",
            "es-MX": "Arriba",
            "fr-FR": "Haut",
            "ja-JP": "トップ",
            "pt-BR": "Topo",
            "zh-CN": "顶部"
        },
        "RIGHT": {
            "guid": "00000000BAF8",
            "en-US": "Right",
            "es-MX": "Derecha",
            "fr-FR": "Droite",
            "ja-JP": "右",
            "pt-BR": "Direita",
            "zh-CN": "右边"
        }
    },
    "IconReeval": {
        "POSITION": {
            "guid": "00000000B8D8",
            "en-US": "Position",
            "es-MX": "Posición",
            "ja-JP": "位置",
            "pt-BR": "Posição",
            "zh-CN": "位置"
        },
        "NONE": {
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        },
        "VISIBILITY": {
            "guid": "00000000B8C4",
            "en-US": "Visible To",
            "es-MX": "Visible para",
            "fr-FR": "Visible pour",
            "ja-JP": "目視可能: ",
            "pt-BR": "Visível para",
            "zh-CN": "可见"
        },
        "VISIBILITY_AND_POSITION": {
            "en-US": "Visible To and Position",
            "guid": "00000000B8D9",
            "es-MX": "Visible para y posición",
            "fr-FR": "Visible pour et Position",
            "ja-JP": "表示される相手、位置",
            "pt-BR": "Visível para e Posição",
            "zh-CN": "可见和位置"
        }
    },
    "EffectReeval": {
        "POSITION_AND_RADIUS": {
            "en-US": "Position and Radius",
            "guid": "00000000B8C5",
            "es-MX": "Posición y radio",
            "fr-FR": "Position et Rayon",
            "ja-JP": "位置と範囲",
            "pt-BR": "Posição e Raio",
            "zh-CN": "位置和半径"
        },
        "NONE": {
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        },
        "VISIBILITY": {
            "guid": "00000000B8C4",
            "en-US": "Visible To",
            "es-MX": "Visible para",
            "fr-FR": "Visible pour",
            "ja-JP": "目視可能: ",
            "pt-BR": "Visível para",
            "zh-CN": "可见"
        },
        "VISIBILITY_POSITION_AND_RADIUS": {
            "guid": "00000000B8C6",
            "en-US": "Visible To Position and Radius",
            "es-MX": "Visible para posición y radio",
            "fr-FR": "Visible pour Position et Rayon",
            "ja-JP": "表示される相手、位置、範囲",
            "pt-BR": "Visível para Posição e Raio",
            "zh-CN": "可见，位置和半径"
        }
    },
    "HudReeval": {
        "STRING": {
            "guid": "00000000BB31",
            "en-US": "String",
            "es-MX": "Cadena",
            "fr-FR": "Chaîne de texte",
            "ja-JP": "文字列",
            "zh-CN": "字符串"
        },
        "VISIBILITY_AND_STRING": {
            "en-US": "Visible To and String",
            "guid": "00000000BA8C",
            "es-MX": "Visible para y cadena",
            "fr-FR": "Visible pour et Chaîne de texte",
            "ja-JP": "表示される相手、文字列",
            "pt-BR": "Visível para e String",
            "zh-CN": "可见和字符串"
        }
    },
    "WorldTextReeval": {
        "STRING": {
            "guid": "00000000BB31",
            "en-US": "String",
            "es-MX": "Cadena",
            "fr-FR": "Chaîne de texte",
            "ja-JP": "文字列",
            "zh-CN": "字符串"
        },
        "VISIBILITY_AND_STRING": {
            "en-US": "Visible To and String",
            "guid": "00000000BA8C",
            "es-MX": "Visible para y cadena",
            "fr-FR": "Visible pour et Chaîne de texte",
            "ja-JP": "表示される相手、文字列",
            "pt-BR": "Visível para e String",
            "zh-CN": "可见和字符串"
        },
        "VISIBILITY_POSITION_AND_STRING": {
            "guid": "00000000BAD4",
            "en-US": "Visible To Position and String",
            "es-MX": "Visible para posición y cadena",
            "fr-FR": "Visible pour Position et Chaîne de texte",
            "ja-JP": "表示される相手、位置、文字列",
            "pt-BR": "Visível para Posição e String",
            "zh-CN": "可见，位置和字符串"
        }
    },
    "_ChaseRateReeval": {
        "DESTINATION_AND_RATE": {
            "en-US": "Destination and Rate",
            "guid": "00000000B8CA",
            "es-MX": "Destino y tasa",
            "fr-FR": "Destination et Taux",
            "ja-JP": "目的とレート",
            "pt-BR": "Destino e Taxa",
            "zh-CN": "速率及最终值"
        },
        "NONE": {
            "guid": "00000000B8C9",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Nenhuma",
            "zh-CN": "全部禁用"
        }
    },
    "_ChaseTimeReeval": {
        "DESTINATION_AND_DURATION": {
            "en-US": "Destination and Duration",
            "guid": "00000000C479",
            "es-MX": "Destino y duración",
            "fr-FR": "Destination et Durée",
            "ja-JP": "目的と持続時間",
            "pt-BR": "Destino e Duração",
            "zh-CN": "终点及持续时间"
        },
        "NONE": {
            "guid": "00000000B8C9",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Nenhuma",
            "zh-CN": "全部禁用"
        }
    },
    "DamageReeval": {
        "NONE": {
            "guid": "00000000C643",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucun",
            "ja-JP": "なし",
            "pt-BR": "Nenhuma",
            "zh-CN": "无"
        },
        "RECEIVERS_AND_DAMAGERS": {
            "en-US": "Receivers and Damagers",
            "guid": "00000000C644",
            "es-MX": "Receptores e infligidores de daño",
            "fr-FR": "Récepteurs et émetteurs de dégâts",
            "ja-JP": "レシーバーとダメージャー",
            "pt-BR": "Receptores e Danificadores",
            "zh-CN": "受伤害者和伤害者"
        },
        "RECEIVERS_DAMAGERS_AND_DMGPERCENT": {
            "guid": "00000000C645",
            "en-US": "Receivers Damagers and Damage Percent",
            "es-MX": "Receptores infligidores de daño y porcentaje de daño",
            "fr-FR": "Récepteurs de dégâts émetteurs de dégâts et pourcentage de dégâts",
            "ja-JP": "レシーバー、ダメージャー、ダメージのパーセンテージ",
            "pt-BR": "Receptores Danificadores e Porcentagem de Dano",
            "zh-CN": "受伤害者，伤害者及伤害百分比"
        }
    },
    "HealingReeval": {
        "NONE": {
            "en-US": "None"
        },
        "RECEIVERS_AND_HEALERS": {
            "en-US": "Receivers and Healers"
        },
        "RECEIVERS_HEALERS_AND_HEALPERCENT": {
            "en-US": "Receivers Healers and Healing Percent"
        }
    },
    "FacingReeval": {
        "DIRECTION_AND_TURN_RATE": {
            "en-US": "Direction and Turn Rate",
            "guid": "00000000BB1F",
            "es-MX": "Dirección y velocidad de giro",
            "fr-FR": "Direction et Taux de rotation",
            "ja-JP": "方向と回転レート",
            "pt-BR": "Direção e Taxa de Giro",
            "zh-CN": "方向及角速率"
        },
        "NONE": {
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        }
    },
    "Wait": {
        "ABORT_WHEN_FALSE": {
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
        "IGNORE_CONDITION": {
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
        "RESTART_WHEN_TRUE": {
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
    },
    "BarrierLos": {
        "BLOCKED_BY_ENEMY_BARRIERS": {
            "en-US": "Enemy Barriers Block LOS",
            "guid": "00000000B1EE",
            "es-MX": "Las barreras enemigas bloquean la LDV",
            "fr-FR": "Les barrières ennemies bloquent la ligne de vue",
            "ja-JP": "敵のバリアが射線を妨げる",
            "pt-BR": "Barreiras Inimigas Bloqueiam LdV",
            "zh-CN": "敌方屏障阻挡视线"
        },
        "BLOCKED_BY_ALL_BARRIERS": {
            "en-US": "All Barriers Block LOS",
            "guid": "00000000B1EF",
            "es-MX": "Todas las barreras bloquean la LDV",
            "fr-FR": "Toutes les barrières bloquent la ligne de vue",
            "ja-JP": "すべてのバリアが射線を妨げる",
            "pt-BR": "Todas as Barreiras Bloqueiam LdV",
            "zh-CN": "所有屏障阻挡视线"
        },
        "PASS_THROUGH_BARRIERS": {
            "en-US": "Barriers Do Not Block LOS",
            "guid": "00000000B1ED",
            "es-MX": "Las barreras no bloquean la LDV",
            "fr-FR": "Les barrières ne bloquent pas la ligne de vue",
            "ja-JP": "バリアは射線を妨げない",
            "pt-BR": "Barreiras Não Bloqueiam LdV",
            "zh-CN": "屏障不会阻挡视线"
        }
    },
    "Status": {
        "ASLEEP": {
            "en-US": "Asleep",
            "guid": "00000000B36A",
            "es-MX": "Dormido",
            "fr-FR": "Endormi",
            "ja-JP": "眠っている",
            "pt-BR": "Dormindo",
            "zh-CN": "沉睡"
        },
        "BURNING": {
            "guid": "00000000B36C",
            "en-US": "Burning",
            "es-MX": "En llamas",
            "fr-FR": "Enflammé",
            "ja-JP": "燃焼中",
            "pt-BR": "Queimando",
            "zh-CN": "点燃"
        },
        "FROZEN": {
            "guid": "00000000B369",
            "en-US": "Frozen",
            "es-MX": "Congelado",
            "fr-FR": "Gelé",
            "ja-JP": "凍っている",
            "pt-BR": "Congelado",
            "zh-CN": "冻结"
        },
        "HACKED": {
            "guid": "00000000B36D",
            "en-US": "Hacked",
            "es-MX": "Hackeado",
            "fr-FR": "Piraté",
            "ja-JP": "ハックされている",
            "pt-BR": "Hackeado",
            "zh-CN": "被入侵"
        },
        "INVINCIBLE": {
            "en-US": "Invincible",
            "guid": "00000000B367",
            "es-MX": "Invencible",
            "ja-JP": "無敵",
            "pt-BR": "Invencível",
            "zh-CN": "无敌"
        },
        "KNOCKED_DOWN": {
            "en-US": "Knocked Down",
            "guid": "00000000B36B",
            "es-MX": "Derribado",
            "fr-FR": "Renversé",
            "ja-JP": "ノックダウンされている",
            "pt-BR": "Nocauteado",
            "zh-CN": "击倒"
        },
        "PHASED_OUT": {
            "en-US": "Phased Out",
            "guid": "00000000B366",
            "es-MX": "Forma etérea",
            "fr-FR": "Déphasé",
            "ja-JP": "フェーズアウト中",
            "pt-BR": "Intangível",
            "zh-CN": "消散"
        },
        "ROOTED": {
            "en-US": "Rooted",
            "guid": "00000000B365",
            "es-MX": "Arraigado",
            "fr-FR": "Immobilisé",
            "ja-JP": "固定されている",
            "pt-BR": "Enraizado",
            "zh-CN": "定身"
        },
        "STUNNED": {
            "guid": "00000000B565",
            "en-US": "Stunned",
            "es-MX": "Aturdido",
            "fr-FR": "Étourdi",
            "ja-JP": "スタンされている",
            "pt-BR": "Atordoado",
            "zh-CN": "昏迷"
        },
        "UNKILLABLE": {
            "en-US": "Unkillable",
            "guid": "00000000B368",
            "es-MX": "Inmortal",
            "fr-FR": "Intuable",
            "ja-JP": "キル不可",
            "pt-BR": "Imortal",
            "zh-CN": "无法杀死"
        }
    },
    "SpecVisibility": {
        "DEFAULT": {
            "en-US": "Default Visibility",
            "guid": "00000000CE55",
            "es-MX": "Visibilidad predeterminada",
            "fr-FR": "Visibilité par défaut",
            "ja-JP": "デフォルト表示",
            "pl-PL": "Domyślna widoczność",
            "pt-BR": "Visibilidade-padrão",
            "zh-CN": "默认可见度"
        },
        "ALWAYS": {
            "en-US": "Visible Always",
            "guid": "00000000CE56",
            "es-MX": "Siempre visible",
            "fr-FR": "Toujours visible",
            "ja-JP": "常に表示",
            "pl-PL": "Zawsze widoczny",
            "pt-BR": "Sempre Visível",
            "zh-CN": "始终可见"
        },
        "NEVER": {
            "en-US": "Visible Never",
            "guid": "00000000CE57",
            "es-MX": "Nunca visible",
            "fr-FR": "Jamais visible",
            "ja-JP": "表示されない",
            "pl-PL": "Zawsze niewidoczny",
            "pt-BR": "Nunca Visível",
            "zh-CN": "始终不可见"
        }
    },
    "Beam": {
        "BAD": {
            "en-US": "Bad Beam",
            "guid": "00000000CE85",
            "es-MX": "Rayo malo",
            "fr-FR": "Mauvais rayon",
            "ja-JP": "マイナス効果のビーム",
            "pl-PL": "Zła wiązka",
            "pt-BR": "Feixe Mau",
            "zh-CN": "有害光束"
        },
        "GOOD": {
            "en-US": "Good Beam",
            "guid": "00000000CE84",
            "es-MX": "Rayo bueno",
            "fr-FR": "Bon rayon",
            "ja-JP": "プラス効果のビーム",
            "pl-PL": "Dobra wiązka",
            "pt-BR": "Feixe Bom",
            "zh-CN": "有益光束"
        },
        "GRAPPLE": {
            "en-US": "Grapple Beam",
            "guid": "00000000CE9D",
            "es-MX": "Rayo de arpeo",
            "fr-FR": "Rayon du grappin",
            "ja-JP": "グラップリング・ビーム",
            "pl-PL": "Wiązka kotwiczki",
            "pt-BR": "Feixe de Arpéu",
            "zh-CN": "抓钩光束"
        }
    },
    "Throttle": {
        "REPLACE_EXISTING": {
            "en-US": "Replace existing throttle",
            "guid": "00000000CEB0",
            "es-MX": "Reemplazar aceleración preexistente",
            "fr-FR": "Remplacer l’accélération existante",
            "ja-JP": "既存のスロットルと入れ替え",
            "pl-PL": "Zastąp istniejący pęd",
            "pt-BR": "Substituir a aceleração existente",
            "zh-CN": "替换现有阈值"
        },
        "ADD_TO_EXISTING": {
            "en-US": "Add to existing throttle",
            "guid": "00000000CEB1",
            "es-MX": "Agregar a aceleración preexistente",
            "fr-FR": "Ajouter à l’accélération existante",
            "ja-JP": "既存のスロットルに追加",
            "pl-PL": "Dodaj do istniejącego pędu",
            "pt-BR": "Somar à aceleração existente",
            "zh-CN": "添加至现有阈值"
        }
    },
    "ThrottleReeval": {
        "DIRECTION_AND_MAGNITUDE": {
            "en-US": "Direction and Magnitude",
            "guid": "00000000CEB3",
            "es-MX": "Dirección y magnitud",
            "fr-FR": "Direction et ampleur",
            "ja-JP": "方向と変化の大きさ",
            "pl-PL": "Kierunek i wielkość",
            "pt-BR": "Direção e Magnitude",
            "zh-CN": "方向和幅度"
        },
        "NONE": {
            "guid": "00000000CEB2",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "it-IT": "Nessuno",
            "ja-JP": "なし",
            "pl-PL": "Brak",
            "pt-BR": "Nenhum",
            "zh-CN": "无"
        }
    },
    "AccelReeval": {
        "DIRECTION_RATE_AND_MAX_SPEED": {
            "guid": "00000000BB1A",
            "en-US": "Direction Rate and Max Speed",
            "es-MX": "Dirección aceleración y velocidad máxima",
            "fr-FR": "Direction Taux et Vitesse maximum",
            "ja-JP": "方向、レート、最大の速さ",
            "pt-BR": "Direção Taxa e Velocidade Máx.",
            "zh-CN": "方向，速率，及最大速度"
        },
        "NONE": {
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        }
    },
    "AsyncBehavior": {
        "RESTART": {
            "en-US": "Restart Rule"
        },
        "NOOP": {
            "en-US": "Do Nothing"
        }
    }
}
//end-json

constantValues["Hero"] = {};
for (var key of Object.keys(heroKw)) {
    constantValues["Hero"][camelCaseToUpperCase(key)] = heroKw[key]
}
constantValues["Map"] = {};
for (var key of Object.keys(mapKw)) {
    constantValues["Map"][camelCaseToUpperCase(key)] = mapKw[key]
}
constantValues["Gamemode"] = {};
for (var key of Object.keys(gamemodeKw)) {
    constantValues["Gamemode"][camelCaseToUpperCase(key)] = gamemodeKw[key]
}
