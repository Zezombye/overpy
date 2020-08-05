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
            "guid": "00000000B33B",
            "description": "The resulting vector will be rotated to the new frame of reference. Use this option when the provided vector is a direction or velocity.",
            "en-US": "Rotation",
            "es-MX": "Rotación",
            "ja-JP": "回転",
            "pt-BR": "Rotação",
            "zh-CN": "旋转"
        },
        "ROTATION_AND_TRANSLATION": {
            "guid": "00000000B33C",
            "description": "The resulting vector will be rotated and translated to the new frame of reference. Use this option when the provided vector is a position.",
            "en-US": "Rotation And Translation",
            "es-MX": "Rotación y traslación",
            "fr-FR": "Rotation et Translation",
            "ja-JP": "回転と平行移動",
            "pt-BR": "Rotação e Translação",
            "zh-CN": "旋转并转换"
        }
    },
    "TeamLiteral": {
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
            "ja-JP": "アクア",
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
            "ja-JP": "ライムグリーン",
            "pt-BR": "Verde-limão",
            "zh-CN": "灰绿色"
        },
        "ORANGE": {
            "guid": "00000000CDB4",
            "en-US": "Orange",
            "es-MX": "Naranja",
            "ja-JP": "オレンジ",
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
            "guid": "00000000CDB5",
            "en-US": "Sky Blue",
            "es-MX": "Azul cielo",
            "fr-FR": "Bleu ciel",
            "ja-JP": "スカイブルー",
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
    "ButtonLiteral": {
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
            "guid": "00000000FC8D",
            "en-US": "Melee",
            "es-MX": "Melé",
            "fr-FR": "Mêlée",
            "ja-JP": "近接",
            "pt-BR": "Corpo a corpo",
            "zh-CN": "近身攻击"
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
            "guid": "00000000FC8E",
            "en-US": "Reload",
            "es-MX": "Recargar",
            "fr-FR": "Rechargement",
            "ja-JP": "リロード",
            "pt-BR": "Recarregar",
            "zh-CN": "装填"
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
    "__Operation__": {
        "__add__": {
            "guid": "00000000B16D",
            "en-US": "Add",
            "es-MX": "Agregar",
            "fr-FR": "Addition",
            "ja-JP": "追加",
            "pt-BR": "Adicionar",
            "zh-CN": "加"
        },
        "__appendToArray__": {
            "guid": "00000000B167",
            "en-US": "Append To Array",
            "es-MX": "Anexar a la matriz",
            "fr-FR": "Ajouter au tableau",
            "ja-JP": "追加",
            "pt-BR": "Juntar à Matriz",
            "zh-CN": "添加至数组"
        },
        "__divide__": {
            "guid": "00000000B16A",
            "en-US": "Divide",
            "es-MX": "Dividir",
            "fr-FR": "Division",
            "ja-JP": "割る",
            "pt-BR": "Dividir",
            "zh-CN": "除"
        },
        "__max__": {
            "guid": "00000000B18F",
            "en-US": "Max",
            "es-MX": "Máximo",
            "fr-FR": "Maximum",
            "ja-JP": "最大",
            "pt-BR": "Máx.",
            "zh-CN": "最大"
        },
        "__min__": {
            "guid": "00000000B190",
            "en-US": "Min",
            "es-MX": "Mínimo",
            "fr-FR": "Minimum",
            "ja-JP": "分",
            "pt-BR": "Mín.",
            "zh-CN": "最小"
        },
        "__modulo__": {
            "guid": "00000000B169",
            "en-US": "Modulo",
            "es-MX": "Módulo",
            "ja-JP": "剰余",
            "pt-BR": "Modular",
            "zh-CN": "余数"
        },
        "__multiply__": {
            "guid": "00000000B16B",
            "en-US": "Multiply",
            "es-MX": "Multiplicar",
            "fr-FR": "Multiplication",
            "ja-JP": "掛ける",
            "pt-BR": "Multiplicar",
            "zh-CN": "乘"
        },
        "__raiseToPower__": {
            "guid": "00000000B168",
            "en-US": "Raise To Power",
            "es-MX": "Elevar a la potencia",
            "fr-FR": "Élévation à une puissance ",
            "ja-JP": "冪乗",
            "pt-BR": "Elevar à Potência",
            "zh-CN": "乘方"
        },
        "__removeFromArrayByIndex__": {
            "guid": "00000000C61B",
            "en-US": "Remove From Array By Index",
            "es-MX": "Eliminar de la matriz por índice",
            "fr-FR": "Supprimer du tableau par index",
            "ja-JP": "インデックスを配列から削除",
            "pt-BR": "Remover da Matriz por Índice",
            "zh-CN": "根据索引从数组中移除"
        },
        "__removeFromArrayByValue__": {
            "guid": "00000000B166",
            "en-US": "Remove From Array By Value",
            "es-MX": "Eliminar de la matriz por valor",
            "fr-FR": "Supprimer du tableau par valeur",
            "ja-JP": "削除",
            "pt-BR": "Remover da Matriz por Valor",
            "zh-CN": "根据值从数组中移除"
        },
        "__subtract__": {
            "guid": "00000000B16C",
            "en-US": "Subtract",
            "es-MX": "Restar",
            "fr-FR": "Soustraction",
            "ja-JP": "引く",
            "pt-BR": "Subtrair",
            "zh-CN": "减"
        }
    },
    "DynamicEffect": {
        "BAD_EXPLOSION": {
            "guid": "00000000BC1A",
            "en-US": "Bad Explosion",
            "es-MX": "Mala explosión",
            "fr-FR": "Mauvaise explosion",
            "ja-JP": "悪い爆発",
            "pt-BR": "Explosão Ruim",
            "zh-CN": "有害爆炸"
        },
        "BAD_PICKUP_EFFECT": {
            "guid": "00000000BC18",
            "en-US": "Bad Pickup Effect",
            "es-MX": "Mal efecto de captura",
            "fr-FR": "Mauvais effet de ramassage",
            "ja-JP": "悪いピックアップ効果",
            "pt-BR": "Efeito de Coleta Ruim",
            "zh-CN": "有害选择效果 "
        },
        "BUFF_EXPLOSION_SOUND": {
            "guid": "00000000C400",
            "en-US": "Buff Explosion Sound",
            "es-MX": "Sonido de explosión de potenciamiento",
            "fr-FR": "Son d’explosion d’amélioration",
            "ja-JP": "爆発音（バフ）",
            "pt-BR": "Som de Explosão para Bônus",
            "zh-CN": "状态爆炸声音"
        },
        "BUFF_IMPACT_SOUND": {
            "guid": "00000000C3FE",
            "en-US": "Buff Impact Sound",
            "es-MX": "Sonido de impacto de potenciamiento",
            "fr-FR": "Son d’impact d’amélioration",
            "ja-JP": "衝撃音（バフ）",
            "pt-BR": "Som de Impacto para Bônus",
            "zh-CN": "正面状态施加声音"
        },
        "DEBUFF_IMPACT_SOUND": {
            "guid": "00000000C3FD",
            "en-US": "Debuff Impact Sound",
            "es-MX": "Sonido de impacto de despotenciamiento",
            "fr-FR": "Son d’impact d’affaiblissement",
            "ja-JP": "衝撃音（デバフ）",
            "pt-BR": "Som de Impacto para Penalidade",
            "zh-CN": "负面状态施加声音"
        },
        "EXPLOSION_SOUND": {
            "guid": "00000000C401",
            "en-US": "Explosion Sound",
            "es-MX": "Sonido de explosión",
            "fr-FR": "Son de l’explosion",
            "ja-JP": "爆発音",
            "pt-BR": "Som de Explosão",
            "zh-CN": "爆炸声音"
        },
        "GOOD_EXPLOSION": {
            "guid": "00000000BB28",
            "en-US": "Good Explosion",
            "es-MX": "Buena explosión",
            "fr-FR": "Bonne explosion",
            "ja-JP": "いい爆発",
            "pt-BR": "Explosão Boa",
            "zh-CN": "有益爆炸"
        },
        "GOOD_PICKUP_EFFECT": {
            "guid": "00000000BC19",
            "en-US": "Good Pickup Effect",
            "es-MX": "Buen efecto de captura",
            "fr-FR": "Bon effet de ramassage",
            "ja-JP": "いいピックアップ効果",
            "pt-BR": "Efeito de Coleta Bom",
            "zh-CN": "有益选择效果 "
        },
        "RING_EXPLOSION": {
            "guid": "00000000BC1B",
            "en-US": "Ring Explosion",
            "es-MX": "Explosión en anillo",
            "fr-FR": "Explosion concentrique",
            "ja-JP": "リングの爆発",
            "pt-BR": "Explosão em Anel",
            "zh-CN": "环状爆炸"
        },
        "RING_EXPLOSION_SOUND": {
            "guid": "00000000C3FF",
            "en-US": "Ring Explosion Sound",
            "es-MX": "Sonido de explosión en anillo",
            "fr-FR": "Son d’explosion concentrique",
            "ja-JP": "爆発音（リング）",
            "pt-BR": "Som de Explosão para Anel",
            "zh-CN": "环状爆炸声音"
        }
    },
    "Effect": {
        "BAD_AURA": {
            "guid": "00000000BC17",
            "en-US": "Bad Aura",
            "es-MX": "Mala Aura",
            "fr-FR": "Mauvaise aura",
            "ja-JP": "悪いオーラ",
            "pt-BR": "Aura Ruim",
            "zh-CN": "有害光环"
        },
        "BAD_AURA_SOUND": {
            "guid": "00000000C4DA",
            "en-US": "Bad Aura Sound",
            "es-MX": "Sonido de aura mala",
            "fr-FR": "Son de mauvaise aura",
            "ja-JP": "悪いオーラ音",
            "pt-BR": "Som de Aura Ruim",
            "zh-CN": "负面光环音效"
        },
        "BEACON_SOUND": {
            "guid": "00000000C4D3",
            "en-US": "Beacon Sound",
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
            "guid": "00000000C4D4",
            "en-US": "Decal Sound",
            "es-MX": "Sonido de calcomanía",
            "fr-FR": "Son de décal",
            "ja-JP": "デカール音",
            "pt-BR": "Som de Símbolo",
            "zh-CN": "诱饵声音"
        },
        "ENERGY_SOUND": {
            "guid": "00000000C3FC",
            "en-US": "Energy Sound",
            "es-MX": "Sonido de energía",
            "fr-FR": "Son de l’énergie",
            "ja-JP": "エネルギー音",
            "pt-BR": "Som de Energia",
            "zh-CN": "能量声音"
        },
        "GOOD_AURA": {
            "guid": "00000000BC13",
            "en-US": "Good Aura",
            "es-MX": "Buena aura",
            "fr-FR": "Bonne aura",
            "ja-JP": "いいオーラ",
            "pt-BR": "Aura Boa",
            "zh-CN": "有益光环"
        },
        "GOOD_AURA_SOUND": {
            "guid": "00000000C4D8",
            "en-US": "Good Aura Sound",
            "es-MX": "Sonido de aura buena",
            "fr-FR": "Son de bonne aura",
            "ja-JP": "いいオーラ音",
            "pt-BR": "Som de Aura Boa",
            "zh-CN": "有益光环声音"
        },
        "LIGHT_SHAFT": {
            "guid": "00000000B934",
            "en-US": "Light Shaft",
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
            "guid": "00000000C4D9",
            "en-US": "Pick-up Sound",
            "es-MX": "Sonido de objeto recogido",
            "fr-FR": "Son de ramassage",
            "ja-JP": "ピックアップ音",
            "pt-BR": "Som de Coleta",
            "zh-CN": "拾取音效"
        },
        "RING": {
            "guid": "00000000BC16",
            "en-US": "Ring",
            "es-MX": "Anillo",
            "fr-FR": "Anneau",
            "ja-JP": "リング",
            "pt-BR": "Anel",
            "zh-CN": "环"
        },
        "SMOKE_SOUND": {
            "guid": "00000000C4D5",
            "en-US": "Smoke Sound",
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
            "guid": "00000000C4D6",
            "en-US": "Sparkles Sound",
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
            "guid": "00000000B9D5",
            "en-US": "Acknowledge",
            "es-MX": "De acuerdo",
            "fr-FR": "Bien reçu",
            "ja-JP": "了解",
            "pt-BR": "Reconhecer",
            "zh-CN": "收到"
        },
        "ATTACKING": {
            "guid": "000000010BEF",
            "en-US": "Attacking",
            "es-MX": "Atacando",
            "fr-FR": "J’attaque",
            "ja-JP": "攻撃中",
            "pt-BR": "Atacando",
            "zh-CN": "正在进攻"
        },
        "COUNTDOWN": {
            "guid": "000000010BF3",
            "en-US": "Countdown",
            "es-MX": "Conteo regresivo",
            "fr-FR": "Compte à rebours",
            "ja-JP": "カウントダウン",
            "pt-BR": "Contagem Regressiva",
            "zh-CN": "倒计时"
        },
        "DEFENDING": {
            "guid": "000000010BF0",
            "en-US": "Defending",
            "es-MX": "Defendiendo",
            "fr-FR": "Je défends",
            "ja-JP": "防衛中",
            "pt-BR": "Defendendo",
            "zh-CN": "正在防守"
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
            "guid": "00000000B9DE",
            "en-US": "Emote Up",
            "es-MX": "Gesto hacia arriba",
            "fr-FR": "Emote haut",
            "ja-JP": "エモート上",
            "pt-BR": "Emote Acima",
            "zh-CN": "表情（上）"
        },
        "FALL_BACK": {
            "guid": "000000010BE9",
            "en-US": "Fall Back",
            "es-MX": "Retroceder",
            "fr-FR": "Repli",
            "ja-JP": "退却しよう",
            "pt-BR": "Recuar",
            "zh-CN": "撤退"
        },
        "GO": {
            "guid": "000000010BE7",
            "en-US": "Go",
            "es-MX": "Vamos",
            "fr-FR": "On y va",
            "ja-JP": "行け",
            "pt-BR": "Vai",
            "zh-CN": "前进"
        },
        "GOING_IN": {
            "guid": "000000010BED",
            "en-US": "Going In",
            "es-MX": "Entrando",
            "fr-FR": "J’y vais",
            "ja-JP": "突入する",
            "pt-BR": "Vou Avançar",
            "zh-CN": "我上了"
        },
        "GOODBYE": {
            "guid": "000000010BE6",
            "en-US": "Goodbye",
            "es-MX": "Adiós",
            "fr-FR": "Au revoir",
            "ja-JP": "さようなら",
            "pt-BR": "Tchau",
            "zh-CN": "再见"
        },
        "GROUP_UP": {
            "guid": "00000000B9D7",
            "en-US": "Group Up",
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
        "INCOMING": {
            "guid": "000000010BEB",
            "en-US": "Incoming",
            "es-MX": "Enemigos aproximándose",
            "fr-FR": "En approche",
            "ja-JP": "敵接近中",
            "pt-BR": "Chegando",
            "zh-CN": "敌人来袭"
        },
        "NEED_HEALING": {
            "guid": "00000000B9D8",
            "en-US": "Need Healing",
            "es-MX": "Necesito sanación",
            "fr-FR": "Besoin de soins",
            "ja-JP": "回復が必要",
            "pt-BR": "Preciso de Cura",
            "zh-CN": "需要治疗"
        },
        "NEED_HELP": {
            "guid": "000000010BF1",
            "en-US": "Need Help",
            "es-MX": "Necesito ayuda",
            "fr-FR": "À l’aide",
            "ja-JP": "手を貸して",
            "pt-BR": "Preciso de Ajuda",
            "zh-CN": "需要帮助"
        },
        "NO": {
            "guid": "000000010BE5",
            "en-US": "No",
            "fr-FR": "Non",
            "ja-JP": "いいえ",
            "pt-BR": "Não",
            "zh-CN": "不行"
        },
        "ON_MY_WAY": {
            "guid": "000000010BEE",
            "en-US": "On My Way",
            "es-MX": "En camino",
            "fr-FR": "J’arrive",
            "ja-JP": "今向かう",
            "pt-BR": "A Caminho",
            "zh-CN": "正在赶来"
        },
        "PRESS_THE_ATTACK": {
            "guid": "000000010BE2",
            "en-US": "Press the Attack",
            "es-MX": "Al ataque",
            "fr-FR": "Poursuivons l’offensive",
            "ja-JP": "攻撃の手を緩めるな",
            "pt-BR": "Force o Ataque",
            "zh-CN": "继续攻击"
        },
        "PUSH_FORWARD": {
            "guid": "000000010BEA",
            "en-US": "Push Forward",
            "es-MX": "Avancen",
            "fr-FR": "En avant",
            "ja-JP": "前進しよう",
            "pt-BR": "Avançar",
            "zh-CN": "推进"
        },
        "READY": {
            "guid": "000000010BE8",
            "en-US": "Ready",
            "es-MX": "Listo",
            "fr-FR": "Prêt",
            "ja-JP": "準備完了",
            "pt-BR": "Pronto",
            "zh-CN": "做好准备"
        },
        "SORRY": {
            "guid": "000000010BF2",
            "en-US": "Sorry",
            "es-MX": "Lo siento",
            "fr-FR": "Désolé",
            "ja-JP": "ごめん",
            "pt-BR": "Desculpe",
            "zh-CN": "抱歉"
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
            "guid": "00000000B9DA",
            "en-US": "Ultimate Status",
            "es-MX": "Estado de habilidad máxima",
            "fr-FR": "Statut de l’ulti",
            "ja-JP": "アルティメットの状態",
            "pt-BR": "Status da Suprema",
            "zh-CN": "终极技能状态"
        },
        "VOICE_LINE_DOWN": {
            "guid": "00000000B9DF",
            "en-US": "Voice Line Down",
            "es-MX": "Línea de voz hacia abajo",
            "fr-FR": "Réplique bas",
            "ja-JP": "ボイス・ライン下",
            "pt-BR": "Fala Abaixo",
            "zh-CN": "语音（下）"
        },
        "VOICE_LINE_LEFT": {
            "guid": "00000000B9E1",
            "en-US": "Voice Line Left",
            "es-MX": "Línea de voz hacia la izquierda",
            "fr-FR": "Réplique gauche",
            "ja-JP": "ボイス・ライン左",
            "pt-BR": "Fala à Esquerda",
            "zh-CN": "语音（左）"
        },
        "VOICE_LINE_RIGHT": {
            "guid": "00000000B9E0",
            "en-US": "Voice Line Right",
            "es-MX": "Línea de voz hacia la derecha",
            "fr-FR": "Réplique droite",
            "ja-JP": "ボイス・ライン右",
            "pt-BR": "Fala à Direita",
            "zh-CN": "语音（右）"
        },
        "VOICE_LINE_UP": {
            "guid": "00000000B9E2",
            "en-US": "Voice Line Up",
            "es-MX": "Línea de voz hacia arriba",
            "fr-FR": "Réplique haut",
            "ja-JP": "ボイス・ライン上",
            "pt-BR": "Fala Acima",
            "zh-CN": "语音（上）"
        },
        "WITH_YOU": {
            "guid": "000000010BEC",
            "en-US": "With You",
            "es-MX": "Contigo",
            "fr-FR": "Je te suis",
            "ja-JP": "ついていく",
            "pt-BR": "Com Você",
            "zh-CN": "你先上"
        },
        "YES": {
            "guid": "000000010BE4",
            "en-US": "Yes",
            "es-MX": "Sí",
            "fr-FR": "Oui",
            "ja-JP": "はい",
            "pt-BR": "Sim",
            "zh-CN": "好的"
        },
        "YOURE_WELCOME": {
            "guid": "000000010BE3",
            "en-US": "You are Welcome",
            "es-MX": "De nada",
            "fr-FR": "C’est tout naturel",
            "ja-JP": "どういたしまして",
            "pt-BR": "De Nada",
            "zh-CN": "不用谢"
        }
    },
    "Icon": {
        "ARROW_DOWN": {
            "description": "__iconDescription__",
            "guid": "00000000C2C9",
            "en-US": "Arrow: Down",
            "es-MX": "Flecha: Hacia abajo",
            "fr-FR": "Flèche bas",
            "ja-JP": "矢印:下",
            "pt-BR": "Seta: Baixo",
            "zh-CN": "箭头：向下"
        },
        "ARROW_LEFT": {
            "description": "__iconDescription__",
            "guid": "00000000C2CA",
            "en-US": "Arrow: Left",
            "es-MX": "Flecha: Hacia la izquierda",
            "fr-FR": "Flèche gauche",
            "ja-JP": "矢印:左",
            "pt-BR": "Seta: Esquerda",
            "zh-CN": "箭头：向左"
        },
        "ARROW_RIGHT": {
            "description": "__iconDescription__",
            "guid": "00000000C2CB",
            "en-US": "Arrow: Right",
            "es-MX": "Flecha: Hacia la derecha",
            "fr-FR": "Flèche droite",
            "ja-JP": "矢印:右",
            "pt-BR": "Seta: Direita",
            "zh-CN": "箭头：向右"
        },
        "ARROW_UP": {
            "description": "__iconDescription__",
            "guid": "00000000C2CC",
            "en-US": "Arrow: Up",
            "es-MX": "Flecha: Hacia arriba",
            "fr-FR": "Flèche haut",
            "ja-JP": "矢印:上",
            "pt-BR": "Seta: Cima",
            "zh-CN": "箭头：向上"
        },
        "ASTERISK": {
            "description": "__iconDescription__",
            "guid": "00000000C2CD",
            "en-US": "Asterisk",
            "es-MX": "Asterisco",
            "fr-FR": "Astérisque",
            "ja-JP": "アスタリスク",
            "pt-BR": "Asterisco",
            "zh-CN": "星形"
        },
        "BOLT": {
            "description": "__iconDescription__",
            "guid": "00000000C2CE",
            "en-US": "Bolt",
            "es-MX": "Rayo",
            "fr-FR": "Boulon",
            "ja-JP": "雷光の弓",
            "pt-BR": "Raio",
            "zh-CN": "箭矢"
        },
        "CHECKMARK": {
            "description": "__iconDescription__",
            "guid": "00000000C2CF",
            "en-US": "Checkmark",
            "es-MX": "Marca de control",
            "fr-FR": "Point d’exclamation",
            "ja-JP": "チェックマーク",
            "pt-BR": "Marca de Verificação",
            "zh-CN": "对号"
        },
        "CIRCLE": {
            "guid": "00000000C2D0",
            "description": "__iconDescription__",
            "en-US": "Circle",
            "es-MX": "Círculo",
            "fr-FR": "Cercle",
            "ja-JP": "サークル",
            "pt-BR": "Círculo",
            "zh-CN": "圆圈"
        },
        "CLUB": {
            "guid": "00000000C2D1",
            "description": "__iconDescription__",
            "en-US": "Club",
            "es-MX": "Trébol",
            "fr-FR": "Trèfle",
            "ja-JP": "棍棒",
            "pt-BR": "Paus",
            "zh-CN": "梅花"
        },
        "DIAMOND": {
            "guid": "00000000C2D2",
            "description": "__iconDescription__",
            "en-US": "Diamond",
            "es-MX": "Diamante",
            "fr-FR": "Carreau",
            "ja-JP": "ダイヤモンド",
            "pt-BR": "Ouros",
            "zh-CN": "方块"
        },
        "DIZZY": {
            "guid": "00000000C2D3",
            "description": "__iconDescription__",
            "en-US": "Dizzy",
            "es-MX": "Mareado",
            "fr-FR": "Étourdi",
            "ja-JP": "めまい",
            "pt-BR": "Tonto",
            "zh-CN": "晕眩"
        },
        "EXCLAMATION_MARK": {
            "description": "__iconDescription__",
            "guid": "00000000C2D4",
            "en-US": "Exclamation Mark",
            "es-MX": "Signo de exclamación",
            "fr-FR": "Point d’exclamation",
            "ja-JP": "エクスクラメーションマーク",
            "pt-BR": "Ponto de Exclamação",
            "zh-CN": "感叹号"
        },
        "EYE": {
            "description": "__iconDescription__",
            "guid": "00000000C2D5",
            "en-US": "Eye",
            "es-MX": "Ojo",
            "fr-FR": "Œil",
            "ja-JP": "眼差し",
            "pt-BR": "Olho",
            "zh-CN": "眼睛"
        },
        "FIRE": {
            "description": "__iconDescription__",
            "guid": "00000000C2D6",
            "en-US": "Fire",
            "es-MX": "Fuego",
            "fr-FR": "Flamme",
            "ja-JP": "砲撃",
            "pt-BR": "Fogo",
            "zh-CN": "火焰"
        },
        "FLAG": {
            "description": "__iconDescription__",
            "guid": "00000000C2F0",
            "en-US": "Flag",
            "es-MX": "Bandera",
            "fr-FR": "Drapeau",
            "ja-JP": "通報",
            "pt-BR": "Bandeira",
            "zh-CN": "旗帜"
        },
        "HALO": {
            "guid": "00000000C2D7",
            "description": "__iconDescription__",
            "en-US": "Halo",
            "ja-JP": "光輪",
            "pt-BR": "Auréola",
            "zh-CN": "光晕"
        },
        "HAPPY": {
            "description": "__iconDescription__",
            "guid": "00000000C2D8",
            "en-US": "Happy",
            "es-MX": "Feliz",
            "fr-FR": "Smiley content",
            "ja-JP": "ハッピー",
            "pt-BR": "Feliz",
            "zh-CN": "高兴"
        },
        "HEART": {
            "guid": "00000000C2D9",
            "description": "__iconDescription__",
            "en-US": "Heart",
            "es-MX": "Corazón",
            "fr-FR": "Cœur",
            "ja-JP": "ハート",
            "pt-BR": "Copas",
            "zh-CN": "红桃"
        },
        "MOON": {
            "guid": "00000000C2DA",
            "description": "__iconDescription__",
            "en-US": "Moon",
            "es-MX": "Luna",
            "fr-FR": "Lune",
            "ja-JP": "月",
            "pt-BR": "Lua",
            "zh-CN": "满月"
        },
        "NO": {
            "guid": "00000000C2DB",
            "description": "__iconDescription__",
            "en-US": "No",
            "fr-FR": "Interdit",
            "ja-JP": "いいえ",
            "pt-BR": "Não",
            "zh-CN": "拒绝"
        },
        "PLUS": {
            "description": "__iconDescription__",
            "guid": "00000000C2DC",
            "en-US": "Plus",
            "es-MX": "Signo de suma",
            "ja-JP": "プラス",
            "pt-BR": "Mais",
            "zh-CN": "加号"
        },
        "POISON": {
            "description": "__iconDescription__",
            "guid": "00000000C2DD",
            "en-US": "Poison",
            "es-MX": "Veneno",
            "ja-JP": "ポイズン",
            "pt-BR": "Veneno",
            "zh-CN": "剧毒"
        },
        "POISON_2": {
            "description": "__iconDescription__",
            "guid": "00000000C2DE",
            "en-US": "Poison 2",
            "es-MX": "Veneno 2",
            "fr-FR": "Poison 2",
            "ja-JP": "ポイズン2",
            "pt-BR": "Veneno 2",
            "zh-CN": "剧毒2"
        },
        "QUESTION_MARK": {
            "description": "__iconDescription__",
            "guid": "00000000C2DF",
            "en-US": "Question Mark",
            "es-MX": "Signo de interrogación",
            "fr-FR": "Point d’interrogation",
            "ja-JP": "クエスチョンマーク",
            "pt-BR": "Ponto de Interrogação",
            "zh-CN": "问号"
        },
        "RADIOACTIVE": {
            "description": "__iconDescription__",
            "guid": "00000000C2E4",
            "en-US": "Radioactive",
            "es-MX": "Radiactivo",
            "fr-FR": "Radioactif",
            "ja-JP": "レディオアクティブ",
            "pt-BR": "Radiativo",
            "zh-CN": "辐射"
        },
        "RECYCLE": {
            "description": "__iconDescription__",
            "guid": "00000000C2E5",
            "en-US": "Recycle",
            "es-MX": "Reciclaje",
            "fr-FR": "Recyclage",
            "ja-JP": "リサイクル",
            "pt-BR": "Reciclagem",
            "zh-CN": "回收"
        },
        "RING_THICK": {
            "description": "__iconDescription__",
            "guid": "00000000C2E6",
            "en-US": "Ring Thick",
            "es-MX": "Anillo grueso",
            "fr-FR": "Anneau épais",
            "ja-JP": "リング太",
            "pt-BR": "Anel Grosso",
            "zh-CN": "宽环"
        },
        "RING_THIN": {
            "description": "__iconDescription__",
            "guid": "00000000C2E7",
            "en-US": "Ring Thin",
            "es-MX": "Anillo delgado",
            "fr-FR": "Anneau fin",
            "ja-JP": "リング細",
            "pt-BR": "Anel Fino",
            "zh-CN": "细环"
        },
        "SAD": {
            "description": "__iconDescription__",
            "guid": "00000000C2E8",
            "en-US": "Sad",
            "es-MX": "Triste",
            "fr-FR": "Smiley triste",
            "ja-JP": "サッド",
            "pt-BR": "Triste",
            "zh-CN": "难过"
        },
        "SKULL": {
            "guid": "00000000C2E9",
            "description": "__iconDescription__",
            "en-US": "Skull",
            "es-MX": "Cráneo",
            "fr-FR": "Crâne",
            "ja-JP": "スカル",
            "pt-BR": "Caveira",
            "zh-CN": "骷髅"
        },
        "SPADE": {
            "guid": "00000000C2EA",
            "description": "__iconDescription__",
            "en-US": "Spade",
            "es-MX": "Pica",
            "fr-FR": "Pique",
            "ja-JP": "スペード",
            "pt-BR": "Espadas",
            "zh-CN": "黑桃"
        },
        "SPIRAL": {
            "description": "__iconDescription__",
            "guid": "00000000C2EB",
            "en-US": "Spiral",
            "es-MX": "Espiral",
            "fr-FR": "Spirale",
            "ja-JP": "螺旋を描く",
            "pt-BR": "Espiral",
            "zh-CN": "螺旋"
        },
        "STOP": {
            "guid": "00000000C2EC",
            "description": "__iconDescription__",
            "en-US": "Stop",
            "es-MX": "Alto",
            "ja-JP": "停止",
            "pt-BR": "Parada",
            "zh-CN": "停止"
        },
        "TRASHCAN": {
            "description": "__iconDescription__",
            "guid": "00000000C2ED",
            "en-US": "Trashcan",
            "es-MX": "Tacho de basura",
            "fr-FR": "Poubelle",
            "ja-JP": "ゴミ箱",
            "pt-BR": "Lata de Lixo",
            "zh-CN": "垃圾箱"
        },
        "WARNING": {
            "guid": "00000000C2EE",
            "description": "__iconDescription__",
            "en-US": "Warning",
            "es-MX": "Advertencia",
            "fr-FR": "Avertissement",
            "ja-JP": "警告",
            "pt-BR": "Aviso",
            "zh-CN": "警告"
        },
        "CROSS": {
            "guid": "00000000C2EF",
            "description": "__iconDescription__",
            "en-US": "X",
            "fr-FR": "Croix"
        }
    },
    "Relativity": {
        "TO_PLAYER": {
            "guid": "00000000B16F",
            "description": "Relative to the player's local coordinate system (which moves and rotates with the player).",
            "en-US": "To Player",
            "es-MX": "Al jugador",
            "fr-FR": "Au joueur",
            "ja-JP": "対プレイヤー: ",
            "pt-BR": "Ao Jogador",
            "zh-CN": "至玩家"
        },
        "TO_WORLD": {
            "guid": "00000000B170",
            "description": "Relative to the world's coordinate system.",
            "en-US": "To World",
            "es-MX": "Al mundo",
            "fr-FR": "Au monde",
            "ja-JP": "対ワールド: ",
            "pt-BR": "Ao Mundo",
            "zh-CN": "至地图"
        }
    },
    "Impulse": {
        "CANCEL_CONTRARY_MOTION": {
            "guid": "00000000B520",
            "description": "If the target is moving against the direction of the impulse, this relative velocity is negated before the impulse is applied.",
            "en-US": "Cancel Contrary Motion",
            "es-MX": "Cancelar movimiento contrario",
            "fr-FR": "Annuler le mouvement contraire",
            "ja-JP": "逆モーションをキャンセル",
            "pt-BR": "Cancelar Deslocamento Contrário",
            "zh-CN": "取消相反运动"
        },
        "INCORPORATE_CONTRARY_MOTION": {
            "guid": "00000000B521",
            "description": "The impulse is added directly to the velocity of the target, so if the target is moving against the direction of the impulse, it might seem like the impulse has less of an effect.",
            "en-US": "Incorporate Contrary Motion",
            "es-MX": "Incorporar movimiento contrario",
            "fr-FR": "Incorporer un mouvement contraire",
            "ja-JP": "逆モーションを組み込む",
            "pt-BR": "Incorporar Deslocamento Contrário",
            "zh-CN": "合并相反运动"
        }
    },
    "__Rounding__": {
        "__roundUp__": {
            "guid": "00000000C34F",
            "en-US": "Up",
            "es-MX": "Hacia arriba",
            "fr-FR": "Au-dessus",
            "ja-JP": "上",
            "pt-BR": "Cima",
            "zh-CN": "上"
        },
        "__roundDown__": {
            "guid": "00000000C34E",
            "en-US": "Down",
            "es-MX": "Hacia abajo",
            "fr-FR": "En dessous",
            "ja-JP": "下",
            "pt-BR": "Baixo",
            "zh-CN": "下"
        },
        "__roundToNearest__": {
            "guid": "00000000C34D",
            "en-US": "To Nearest",
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
            "description": "Line of sight is never blocked, allowing results through walls.",
            "en-US": "Off",
            "es-MX": "Apagado",
            "fr-FR": "Désactivé",
            "ja-JP": "OFF",
            "pt-BR": "Desligado",
            "zh-CN": "关闭"
        },
        "SURFACES": {
            "guid": "00000000B1E3",
            "description": "Line of sight is blocked by ceilings, walls, floors, platforms, and any fixed object that blocks projectiles.",
            "en-US": "Surfaces",
            "es-MX": "Superficies",
            "ja-JP": "表面",
            "pt-BR": "Superfícies",
            "zh-CN": "表面"
        },
        "SURFACES_AND_ALL_BARRIERS": {
            "guid": "00000000B1E5",
            "description": "Line of sight is blocked by ceilings, walls, floors, platforms, any fixed object that blocks projectiles, and all barriers.",
            "en-US": "Surfaces And All Barriers",
            "es-MX": "Superficies y todas las barreras",
            "fr-FR": "Surfaces et toutes les barrières",
            "ja-JP": "表面とすべてのバリア",
            "pt-BR": "Superfícies e Todas as Barreiras",
            "zh-CN": "表面及全部屏障"
        },
        "SURFACES_AND_ENEMY_BARRIERS": {
            "guid": "00000000B1E4",
            "description": "Line of sight is blocked by ceilings, walls, floors, platforms, any fixed object that blocks projectiles, and barriers created by the enemy team.",
            "en-US": "Surfaces And Enemy Barriers",
            "es-MX": "Superficies y barreras enemigas",
            "fr-FR": "Surfaces et barrières ennemies",
            "ja-JP": "表面と敵のバリア",
            "pt-BR": "Superfícies e Barreiras Inimigas",
            "zh-CN": "表面及敌方屏障"
        }
    },
    "Clip": {
        "SURFACES": {
            "guid": "00000000BAF5",
            "description": "The text may be partially or completely obscured by walls, floors, ceilings, players, or other solid objects.",
            "en-US": "Clip Against Surfaces",
            "es-MX": "Atravesar las superficies",
            "fr-FR": "Masquer derrière les surfaces",
            "ja-JP": "表面に対してクリップ",
            "pt-BR": "Cortar nas Superfícies",
            "zh-CN": "根据表面截取"
        },
        "NONE": {
            "guid": "00000000BAF4",
            "description": "The text will always be fully visible, even if it is behind a wall or solid object.",
            "en-US": "Do Not Clip",
            "es-MX": "No atravesar",
            "fr-FR": "Ne pas masquer",
            "ja-JP": "クリップしない",
            "pt-BR": "Não Cortar",
            "zh-CN": "不要截取"
        }
    },
    "HudPosition": {
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
            "guid": "00000000BAF7",
            "en-US": "Top",
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
            "guid": "00000000B8D9",
            "en-US": "Visible To and Position",
            "es-MX": "Visible para y posición",
            "fr-FR": "Visible pour et Position",
            "ja-JP": "表示される相手、位置",
            "pt-BR": "Visível para e Posição",
            "zh-CN": "可见和位置"
        }
    },
    "EffectReeval": {
        "POSITION_AND_RADIUS": {
            "guid": "00000000B8C5",
            "en-US": "Position and Radius",
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
        "NONE": {
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        },
        "SORT_ORDER": {
            "guid": "00000001095F",
            "en-US": "Sort Order",
            "es-MX": "Orden de vista",
            "fr-FR": "Tri",
            "ja-JP": "ソート順",
            "pt-BR": "Ordem de Classificação",
            "zh-CN": "排序"
        },
        "SORT_ORDER_AND_STRING": {
            "guid": "00000000FCA6",
            "en-US": "Sort Order and String",
            "es-MX": "Clasificar orden y cadena",
            "fr-FR": "Tri et Chaîne de texte",
            "ja-JP": "ソート順、文字列",
            "pt-BR": "Ordem de classificação e string",
            "zh-CN": "排序规则与字符串"
        },
        "STRING": {
            "guid": "00000000BB31",
            "en-US": "String",
            "es-MX": "Cadena",
            "fr-FR": "Chaîne de texte",
            "ja-JP": "文字列",
            "zh-CN": "字符串"
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
        "VISIBILITY_AND_SORT_ORDER": {
            "guid": "00000001095E",
            "en-US": "Visible To and Sort Order",
            "es-MX": "Visible para y orden de vista",
            "fr-FR": "Visible pour et Tri",
            "ja-JP": "表示される相手、ソート順",
            "pt-BR": "Visível para e Ordem de Classificação",
            "zh-CN": "可见性和排序"
        },
        "VISIBILITY_AND_STRING": {
            "guid": "00000000BA8C",
            "en-US": "Visible To and String",
            "es-MX": "Visible para y cadena",
            "fr-FR": "Visible pour et Chaîne de texte",
            "ja-JP": "表示される相手、文字列",
            "pt-BR": "Visível para e String",
            "zh-CN": "可见和字符串"
        },
        "VISIBILITY_SORT_ORDER_AND_STRING": {
            "guid": "00000000FCA5",
            "en-US": "Visible To Sort Order and String",
            "es-MX": "Visible para clasificar orden y cadena",
            "fr-FR": "Visible pour Tri et Chaîne de texte",
            "it-IT": "Sort Order and String",
            "ja-JP": "表示される相手、ソート順、文字列",
            "ko-KR": "Visible To Sort Order String",
            "pt-BR": "Visível para ordem de classificação e string",
            "zh-CN": "可见性，排序规则，以及字符串"
        }
    },
    "WorldTextReeval": {
        "NONE": {
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        },
        "STRING": {
            "guid": "00000000BB31",
            "en-US": "String",
            "es-MX": "Cadena",
            "fr-FR": "Chaîne de texte",
            "ja-JP": "文字列",
            "zh-CN": "字符串"
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
            "guid": "00000000B8D9",
            "en-US": "Visible To and Position",
            "es-MX": "Visible para y posición",
            "fr-FR": "Visible pour et Position",
            "ja-JP": "表示される相手、位置",
            "pt-BR": "Visível para e Posição",
            "zh-CN": "可见和位置"
        },
        "VISIBILITY_AND_STRING": {
            "guid": "00000000BA8C",
            "en-US": "Visible To and String",
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
    "ChaseReeval": {},
    "__ChaseRateReeval__": {
        "DESTINATION_AND_RATE": {
            "guid": "00000000B8CA",
            "en-US": "Destination and Rate",
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
    "__ChaseTimeReeval__": {
        "DESTINATION_AND_DURATION": {
            "guid": "00000000C479",
            "en-US": "Destination and Duration",
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
            "guid": "00000000C644",
            "en-US": "Receivers and Damagers",
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
            "guid": "00000000FD25",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Nenhum",
            "zh-CN": "全部禁用"
        },
        "RECEIVERS_AND_HEALERS": {
            "guid": "00000000FD26",
            "en-US": "Receivers and Healers",
            "es-MX": "Receptores y sanadores",
            "fr-FR": "Récepteurs de soins et soigneurs",
            "ja-JP": "レシーバーとヒーラー",
            "pt-BR": "Receptores e Curandeiros",
            "zh-CN": "受治疗者和治疗者"
        },
        "RECEIVERS_HEALERS_AND_HEALPERCENT": {
            "guid": "00000000FD27",
            "en-US": "Receivers Healers and Healing Percent",
            "es-MX": "Receptores sanadores y porcentaje de sanación",
            "fr-FR": "Récepteurs de soins soigneurs et pourcentage de soins",
            "ja-JP": "レシーバー、ヒーラー、回復量のパーセンテージ",
            "pt-BR": "Receptores Curandeiros e percentual de cura",
            "zh-CN": "受治疗者，治疗者及治疗百分比"
        }
    },
    "FacingReeval": {
        "DIRECTION_AND_TURN_RATE": {
            "guid": "00000000BB1F",
            "en-US": "Direction and Turn Rate",
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
            "guid": "00000000787D",
            "description": "The execution of the action list is aborted if any condition on this rule becomes false.",
            "en-US": "Abort When False",
            "es-ES": "Abortar cuando sea falso",
            "es-MX": "Cancelar cuando es falso",
            "fr-FR": "Interrompre quand faux",
            "it-IT": "Annulla quando è False",
            "ja-JP": "「FALSE」の場合中止",
            "pl-PL": "Przerwij kiedy to fałsz",
            "pt-BR": "Anular Quando For Falso",
            "zh-CN": "当为“假”时中止"
        },
        "IGNORE_CONDITION": {
            "guid": "00000000787C",
            "description": "The execution of the action list is never interrupted.",
            "en-US": "Ignore Condition",
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
            "guid": "00000000787E",
            "description": "The execution of the action list restarts from the first action if the condition list transitions from false to true or if the rule's event occurs again with true conditions.",
            "en-US": "Restart When True",
            "es-ES": "Reiniciar cuando sea verdadero",
            "es-MX": "Reiniciar cuando es verdadero",
            "fr-FR": "Redémarrer quand vrai",
            "it-IT": "Riparti quando è True",
            "ja-JP": "「TRUE」の場合リスタート",
            "pl-PL": "Zrestartuj kiedy to prawda",
            "pt-BR": "Reiniciar Quando For Verdadeiro",
            "zh-CN": "当为“真”时重新开始"
        }
    },
    "BarrierLos": {
        "BLOCKED_BY_ENEMY_BARRIERS": {
            "guid": "00000000B1EE",
            "description": "Line of sight is blocked by barriers created by the enemy team.",
            "en-US": "Enemy Barriers Block LOS",
            "es-MX": "Las barreras enemigas bloquean la LDV",
            "fr-FR": "Les barrières ennemies bloquent la ligne de vue",
            "ja-JP": "敵のバリアが射線を妨げる",
            "pt-BR": "Barreiras Inimigas Bloqueiam LdV",
            "zh-CN": "敌方屏障阻挡视线"
        },
        "BLOCKED_BY_ALL_BARRIERS": {
            "guid": "00000000B1EF",
            "description": "Line of sight is blocked by all barriers.",
            "en-US": "All Barriers Block LOS",
            "es-MX": "Todas las barreras bloquean la LDV",
            "fr-FR": "Toutes les barrières bloquent la ligne de vue",
            "ja-JP": "すべてのバリアが射線を妨げる",
            "pt-BR": "Todas as Barreiras Bloqueiam LdV",
            "zh-CN": "所有屏障阻挡视线"
        },
        "PASS_THROUGH_BARRIERS": {
            "guid": "00000000B1ED",
            "description": "Line of sight is not blocked by any barriers.",
            "en-US": "Barriers Do Not Block LOS",
            "es-MX": "Las barreras no bloquean la LDV",
            "fr-FR": "Les barrières ne bloquent pas la ligne de vue",
            "ja-JP": "バリアは射線を妨げない",
            "pt-BR": "Barreiras Não Bloqueiam LdV",
            "zh-CN": "屏障不会阻挡视线"
        }
    },
    "Status": {
        "ASLEEP": {
            "guid": "00000000B36A",
            "description": "The player cannot move, aim, or use weapons or abilities. For example, Ana's sleep dart causes this status.",
            "en-US": "Asleep",
            "es-MX": "Dormido",
            "fr-FR": "Endormi",
            "ja-JP": "眠っている",
            "pt-BR": "Dormindo",
            "zh-CN": "沉睡"
        },
        "BURNING": {
            "guid": "00000000B36C",
            "description": "The player is burning. For example, Ashe's dynamite causes this status.",
            "en-US": "Burning",
            "es-MX": "En llamas",
            "fr-FR": "Enflammé",
            "ja-JP": "燃焼中",
            "pt-BR": "Queimando",
            "zh-CN": "点燃"
        },
        "FROZEN": {
            "guid": "00000000B369",
            "description": "The player cannot move, aim, or use weapons or abilities. For example, Mei's endothermic blaster causes this status.",
            "en-US": "Frozen",
            "es-MX": "Congelado",
            "fr-FR": "Gelé",
            "ja-JP": "凍っている",
            "pt-BR": "Congelado",
            "zh-CN": "冻结"
        },
        "HACKED": {
            "guid": "00000000B36D",
            "description": "The player is unable to use abilities or ultimate abilities. Weapon attacks are unaffected. For example, Sombra can cause this status.",
            "en-US": "Hacked",
            "es-MX": "Hackeado",
            "fr-FR": "Piraté",
            "ja-JP": "ハックされている",
            "pt-BR": "Hackeado",
            "zh-CN": "被入侵"
        },
        "INVINCIBLE": {
            "guid": "00000000B367",
            "description": "The player does not take damage.",
            "en-US": "Invincible",
            "es-MX": "Invencible",
            "ja-JP": "無敵",
            "pt-BR": "Invencível",
            "zh-CN": "无敌"
        },
        "KNOCKED_DOWN": {
            "guid": "00000000B36B",
            "description": "The player cannot move, aim, or use weapons or abilities. For example, Reinhardt's Earthshatter causes this status.",
            "en-US": "Knocked Down",
            "es-MX": "Derribado",
            "fr-FR": "Renversé",
            "ja-JP": "ノックダウンされている",
            "pt-BR": "Nocauteado",
            "zh-CN": "击倒"
        },
        "PHASED_OUT": {
            "guid": "00000000B366",
            "description": "The player passes through other players and avoids all enemy attacks. For example, Reaper's wraith form causes this status.",
            "en-US": "Phased Out",
            "es-MX": "Forma etérea",
            "fr-FR": "Déphasé",
            "ja-JP": "フェーズアウト中",
            "pt-BR": "Intangível",
            "zh-CN": "消散"
        },
        "ROOTED": {
            "guid": "00000000B365",
            "description": "The player cannot move unless moved by another player or object. Aiming is unaffected.",
            "en-US": "Rooted",
            "es-MX": "Arraigado",
            "fr-FR": "Immobilisé",
            "ja-JP": "固定されている",
            "pt-BR": "Enraizado",
            "zh-CN": "定身"
        },
        "STUNNED": {
            "guid": "00000000B565",
            "description": "The player cannot move, aim, or use weapons or abilities. For example, McCree's flashbang causes this status.",
            "en-US": "Stunned",
            "es-MX": "Aturdido",
            "fr-FR": "Étourdi",
            "ja-JP": "スタンされている",
            "pt-BR": "Atordoado",
            "zh-CN": "昏迷"
        },
        "UNKILLABLE": {
            "guid": "00000000B368",
            "description": "The player's health will not drop below 1.",
            "en-US": "Unkillable",
            "es-MX": "Inmortal",
            "fr-FR": "Intuable",
            "ja-JP": "キル不可",
            "pt-BR": "Imortal",
            "zh-CN": "无法杀死"
        }
    },
    "SpecVisibility": {
        "DEFAULT": {
            "guid": "00000000CE55",
            "description": "Non-team spectators can see text when all players can see it.",
            "en-US": "Default Visibility",
            "es-MX": "Visibilidad predeterminada",
            "fr-FR": "Visibilité par défaut",
            "ja-JP": "デフォルト表示",
            "pt-BR": "Visibilidade-padrão",
            "zh-CN": "默认可见度"
        },
        "ALWAYS": {
            "guid": "00000000CE56",
            "description": "Non-team spectators can always see text.",
            "en-US": "Visible Always",
            "es-MX": "Siempre visible",
            "fr-FR": "Toujours visible",
            "ja-JP": "常に表示",
            "pt-BR": "Sempre Visível",
            "zh-CN": "始终可见"
        },
        "NEVER": {
            "guid": "00000000CE57",
            "description": "Non-team spectators can never see text.",
            "en-US": "Visible Never",
            "es-MX": "Nunca visible",
            "fr-FR": "Jamais visible",
            "ja-JP": "表示されない",
            "pt-BR": "Nunca Visível",
            "zh-CN": "始终不可见"
        }
    },
    "Beam": {
        "BAD": {
            "guid": "00000000CE85",
            "en-US": "Bad Beam",
            "es-MX": "Rayo malo",
            "fr-FR": "Mauvais rayon",
            "ja-JP": "マイナス効果のビーム",
            "pt-BR": "Feixe Mau",
            "zh-CN": "有害光束"
        },
        "GOOD": {
            "guid": "00000000CE84",
            "en-US": "Good Beam",
            "es-MX": "Rayo bueno",
            "fr-FR": "Bon rayon",
            "ja-JP": "プラス効果のビーム",
            "pt-BR": "Feixe Bom",
            "zh-CN": "有益光束"
        },
        "GRAPPLE": {
            "guid": "00000000CE9D",
            "en-US": "Grapple Beam",
            "es-MX": "Rayo de arpeo",
            "fr-FR": "Rayon du grappin",
            "ja-JP": "グラップリング・ビーム",
            "pt-BR": "Feixe de Arpéu",
            "zh-CN": "抓钩光束"
        }
    },
    "Throttle": {
        "REPLACE_EXISTING": {
            "guid": "00000000CEB0",
            "en-US": "Replace existing throttle",
            "es-MX": "Reemplazar aceleración preexistente",
            "fr-FR": "Remplacer l’accélération existante",
            "ja-JP": "既存のスロットルと入れ替え",
            "pt-BR": "Substituir a aceleração existente",
            "zh-CN": "替换现有阈值"
        },
        "ADD_TO_EXISTING": {
            "guid": "00000000CEB1",
            "en-US": "Add to existing throttle",
            "es-MX": "Agregar a aceleración preexistente",
            "fr-FR": "Ajouter à l’accélération existante",
            "ja-JP": "既存のスロットルに追加",
            "pt-BR": "Somar à aceleração existente",
            "zh-CN": "添加至现有阈值"
        }
    },
    "ThrottleReeval": {
        "DIRECTION_AND_MAGNITUDE": {
            "guid": "00000000CEB3",
            "en-US": "Direction and Magnitude",
            "es-MX": "Dirección y magnitud",
            "fr-FR": "Direction et ampleur",
            "ja-JP": "方向と変化の大きさ",
            "pt-BR": "Direção e Magnitude",
            "zh-CN": "方向和幅度"
        },
        "NONE": {
            "guid": "00000000CEB2",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
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
            "guid": "000000010025",
            "description": "Restart the specified rule with new contextual values (including event player, attacker, victim, etc).",
            "en-US": "Restart Rule",
            "es-MX": "Reiniciar regla",
            "fr-FR": "Relancer la règle",
            "ja-JP": "ルールをやり直す",
            "pt-BR": "Regra de reinício",
            "zh-CN": "重新开始规则"
        },
        "NOOP": {
            "guid": "000000010026",
            "description": "Allow the rule to finish executing without changing its contextual values.",
            "en-US": "Do Nothing",
            "es-MX": "Hacer nada",
            "fr-FR": "Ne rien faire",
            "ja-JP": "何もしない",
            "pt-BR": "Não fazer nada",
            "zh-CN": "无动作"
        }
    },
    "__Operator__": {
        "==": {
            "en-US": "=="
        },
        "!=": {
            "en-US": "!="
        },
        "<=": {
            "en-US": "<="
        },
        ">=": {
            "en-US": ">="
        },
        "<": {
            "en-US": "<"
        },
        ">": {
            "en-US": ">"
        }
    },
    "Health": {
        "NORMAL": {
            "guid": "000000011449",
            "en-US": "Health",
            "es-MX": "Salud",
            "fr-FR": "Vie",
            "ja-JP": "ライフ",
            "pt-BR": "Vida",
            "zh-CN": "生命值"
        },
        "ARMOR": {
            "guid": "000000011427",
            "en-US": "Armor",
            "es-MX": "Armadura",
            "fr-FR": "Armure",
            "it-IT": "Armatura",
            "ja-JP": "アーマー",
            "pt-BR": "Armadura",
            "zh-CN": "护甲"
        },
        "SHIELDS": {
            "guid": "000000011428",
            "en-US": "Shields",
            "es-MX": "Escudos",
            "fr-FR": "Bouclier",
            "it-IT": "Scudi",
            "ja-JP": "シールド",
            "pt-BR": "Escudos",
            "zh-CN": "护盾"
        }
    }
}
//end-json

constantValues["HeroLiteral"] = {};
for (var key of Object.keys(heroKw)) {
    constantValues["HeroLiteral"][camelCaseToUpperCase(key)] = heroKw[key]
}
constantValues["MapLiteral"] = {};
for (var key of Object.keys(mapKw)) {
    constantValues["MapLiteral"][camelCaseToUpperCase(key)] = mapKw[key]
}
constantValues["GamemodeLiteral"] = {};
for (var key of Object.keys(gamemodeKw)) {
    constantValues["GamemodeLiteral"][camelCaseToUpperCase(key)] = gamemodeKw[key]
}

constantValues["ChaseReeval"] = Object.assign({}, constantValues["__ChaseRateReeval__"], constantValues["__ChaseTimeReeval__"])
