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
// @ts-check

import { Value } from "../types";

export const valueFuncKw: Record<string, Value> =
//begin-json
{
    "Vector.BACKWARD": {
        "guid": "00000000B11B",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "signed int"
            ]
        },
        "canBePutInBoolean": false,
        "isConstant": true,
        "en-US": "Backward",
        "es-MX": "Atrás",
        "fr-FR": "Arrière",
        "ja-JP": "後方",
        "pt-BR": "Para Trás",
        "tr-TR": "Geri",
        "zh-CN": "后",
        "de-DE": "Backward",
        "es-ES": "Backward",
        "it-IT": "Backward",
        "ko-KR": "Backward",
        "pl-PL": "Backward",
        "ru-RU": "Backward",
        "th-TH": "Backward",
        "zh-TW": "Backward"
    },
    "Vector.DOWN": {
        "guid": "00000000B119",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null,
        "return": {
            "Direction": [
                "unsigned int",
                "signed int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "isConstant": true,
        "en-US": "Down",
        "es-MX": "Abajo",
        "fr-FR": "Bas",
        "ja-JP": "下",
        "pt-BR": "Baixo",
        "tr-TR": "Ekle",
        "zh-CN": "下",
        "de-DE": "Down",
        "es-ES": "Down",
        "it-IT": "Down",
        "ko-KR": "Down",
        "pl-PL": "Down",
        "ru-RU": "Down",
        "th-TH": "Down",
        "zh-TW": "Down"
    },
    "Vector.FORWARD": {
        "guid": "00000000B11A",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Forward",
        "es-MX": "Adelante",
        "fr-FR": "Avant",
        "ja-JP": "前方向",
        "pt-BR": "Para a Frente",
        "tr-TR": "İleri",
        "zh-CN": "前",
        "de-DE": "Forward",
        "es-ES": "Forward",
        "it-IT": "Forward",
        "ko-KR": "Forward",
        "pl-PL": "Forward",
        "ru-RU": "Forward",
        "th-TH": "Forward",
        "zh-TW": "Forward"
    },
    "Vector.LEFT": {
        "guid": "00000000B116",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Left",
        "es-MX": "Izquierda",
        "fr-FR": "Gauche",
        "ja-JP": "左",
        "pt-BR": "Esquerda",
        "tr-TR": "Sol",
        "zh-CN": "左",
        "de-DE": "Left",
        "es-ES": "Left",
        "it-IT": "Left",
        "ko-KR": "Left",
        "pl-PL": "Left",
        "ru-RU": "Left",
        "th-TH": "Left",
        "zh-TW": "Left"
    },
    "Vector.RIGHT": {
        "guid": "00000000B117",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "signed int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Right",
        "es-MX": "Derecha",
        "fr-FR": "Droite",
        "ja-JP": "右",
        "pt-BR": "Direita",
        "tr-TR": "Sağ",
        "zh-CN": "右",
        "de-DE": "Right",
        "es-ES": "Right",
        "it-IT": "Right",
        "ko-KR": "Right",
        "pl-PL": "Right",
        "ru-RU": "Right",
        "th-TH": "Right",
        "zh-TW": "Right"
    },
    "Vector.UP": {
        "guid": "00000000B118",
        "description": "Shorthand for the directional vector(0, 1, 0), which points upward.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Up",
        "es-MX": "Arriba",
        "fr-FR": "Haut",
        "ja-JP": "上",
        "pt-BR": "Cima",
        "tr-TR": "At",
        "zh-CN": "上",
        "de-DE": "Up",
        "es-ES": "Up",
        "it-IT": "Up",
        "ko-KR": "Up",
        "pl-PL": "Up",
        "ru-RU": "Up",
        "th-TH": "Up",
        "zh-TW": "Up"
    },
    "_&getAbilityCharge": {
        "description": "The ability charge count for a player associated by button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The ability to check associated by button.",
                "type": "Button",
                "default": "BUTTON"
            }
        ],
        "return": "unsigned int",
        "guid": "000000011216",
        "en-US": "Ability Charge",
        "es-MX": "Carga de habilidad",
        "fr-FR": "Charge de la capacité",
        "ja-JP": "アビリティのチャージ",
        "pt-BR": "Cargas de Habilidade",
        "tr-TR": "Kabiliyet Dolum Oranı",
        "zh-CN": "技能充能",
        "de-DE": "Ability Charge",
        "es-ES": "Ability Charge",
        "it-IT": "Ability Charge",
        "ko-KR": "Ability Charge",
        "pl-PL": "Ability Charge",
        "ru-RU": "Ability Charge",
        "th-TH": "Ability Charge",
        "zh-TW": "Ability Charge"
    },
    "_&getAbilityCooldown": {
        "description": "The ability cooldown time in seconds for a player associated by button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The ability to check associated by button.",
                "type": "Button",
                "default": "BUTTON"
            }
        ],
        "return": "unsigned float",
        "guid": "0000000109B3",
        "en-US": "Ability Cooldown",
        "es-MX": "Reutilización de habilidad",
        "fr-FR": "Temps de recharge de la capacité",
        "ja-JP": "アビリティのクールダウン",
        "pt-BR": "Tempo de Recarga da Habilidade",
        "tr-TR": "Kabiliyet Dolum Süresi",
        "zh-CN": "技能冷却时间",
        "de-DE": "Ability Cooldown",
        "es-ES": "Ability Cooldown",
        "it-IT": "Ability Cooldown",
        "ko-KR": "Ability Cooldown",
        "pl-PL": "Ability Cooldown",
        "ru-RU": "Ability Cooldown",
        "th-TH": "Ability Cooldown",
        "zh-TW": "Ability Cooldown"
    },
    "_&getAbilityResource": {
        "description": "The ability resource percent for a player associated by button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The ability to check associated by button.",
                "type": "Button",
                "default": "BUTTON"
            }
        ],
        "return": "unsigned float",
        "guid": "000000011218",
        "en-US": "Ability Resource",
        "es-MX": "Recurso de habilidad",
        "fr-FR": "Ressource de la capacité",
        "ja-JP": "アビリティのリソース",
        "pt-BR": "Recurso de Habilidade",
        "tr-TR": "Kabiliyet Kaynağı",
        "zh-CN": "技能资源",
        "de-DE": "Ability Resource",
        "es-ES": "Ability Resource",
        "it-IT": "Ability Resource",
        "ko-KR": "Ability Resource",
        "pl-PL": "Ability Resource",
        "ru-RU": "Ability Resource",
        "th-TH": "Ability Resource",
        "zh-TW": "Ability Resource"
    },
    "_&getAllowedHeroes": {
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000BBA8",
        "en-US": "Allowed Heroes",
        "es-MX": "Héroes permitidos",
        "fr-FR": "Héros autorisés",
        "ja-JP": "許可されたヒーロー",
        "pt-BR": "Heróis Permitidos",
        "tr-TR": "Seçilebilen Kahramanlar",
        "zh-CN": "可用英雄",
        "de-DE": "Allowed Heroes",
        "es-ES": "Allowed Heroes",
        "it-IT": "Allowed Heroes",
        "ko-KR": "Allowed Heroes",
        "pl-PL": "Allowed Heroes",
        "ru-RU": "Allowed Heroes",
        "th-TH": "Allowed Heroes",
        "zh-TW": "Allowed Heroes"
    },
    "_&getAltitude": {
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B11D",
        "en-US": "Altitude Of",
        "es-MX": "Altitud de",
        "fr-FR": "Altitude de",
        "ja-JP": "高度: ",
        "pt-BR": "Altitude de",
        "tr-TR": "İrtifa",
        "zh-CN": "高度",
        "de-DE": "Altitude Of",
        "es-ES": "Altitude Of",
        "it-IT": "Altitude Of",
        "ko-KR": "Altitude Of",
        "pl-PL": "Altitude Of",
        "ru-RU": "Altitude Of",
        "th-TH": "Altitude Of",
        "zh-TW": "Altitude Of"
    },
    "_&getAmmo": {
        "description": "The current ammo of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ammo to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "CLIP",
                "description": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "unsigned float",
        "guid": "0000000110E8",
        "en-US": "Ammo",
        "es-ES": "Munición",
        "es-MX": "Munición",
        "fr-FR": "Munitions",
        "ja-JP": "弾薬数",
        "pt-BR": "Munição",
        "tr-TR": "Cephane",
        "zh-CN": "弹药",
        "de-DE": "Ammo",
        "it-IT": "Ammo",
        "ko-KR": "Ammo",
        "pl-PL": "Ammo",
        "ru-RU": "Ammo",
        "th-TH": "Ammo",
        "zh-TW": "Ammo"
    },
    "_&getCurrentHero": {
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Hero",
        "guid": "00000000ACA9",
        "en-US": "Hero Of",
        "es-MX": "Héroe de",
        "fr-FR": "Héroïsme de",
        "ja-JP": "ヒーロー: ",
        "pt-BR": "Herói de",
        "tr-TR": "Kahraman",
        "zh-CN": "所用英雄",
        "de-DE": "Hero Of",
        "es-ES": "Hero Of",
        "it-IT": "Hero Of",
        "ko-KR": "Hero Of",
        "pl-PL": "Hero Of",
        "ru-RU": "Hero Of",
        "th-TH": "Hero Of",
        "zh-TW": "Hero Of"
    },
    "_&getCurrentWeapon": {
        "description": "The currently held weapon of a player. Returns 2 for Baby Dva's gun, Torbjorn's hammer, and Mercy's pistol; 1 otherwise.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose weapon to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned int",
        "guid": "000000011059",
        "en-US": "Weapon",
        "es-MX": "Arma",
        "fr-FR": "Arme",
        "ja-JP": "武器",
        "pt-BR": "Arma",
        "tr-TR": "Silah",
        "zh-CN": "武器",
        "de-DE": "Weapon",
        "es-ES": "Weapon",
        "it-IT": "Weapon",
        "ko-KR": "Weapon",
        "pl-PL": "Weapon",
        "ru-RU": "Weapon",
        "th-TH": "Weapon",
        "zh-TW": "Weapon"
    },
    "_&getEyePosition": {
        "guid": "00000000C595",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "Position",
        "canBePutInBoolean": false,
        "en-US": "Eye Position",
        "es-MX": "Posición de la vista",
        "fr-FR": "Position des yeux",
        "ja-JP": "目の位置",
        "pt-BR": "Posição do Olho",
        "th-TH": "ตำแหน่งตา",
        "tr-TR": "Göz Konumu",
        "zh-CN": "眼睛位置",
        "de-DE": "Eye Position",
        "es-ES": "Eye Position",
        "it-IT": "Eye Position",
        "ko-KR": "Eye Position",
        "pl-PL": "Eye Position",
        "ru-RU": "Eye Position",
        "zh-TW": "Eye Position"
    },
    "_&getFacingDirection": {
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B281",
        "en-US": "Facing Direction Of",
        "es-MX": "Dirección de orientación de",
        "fr-FR": "Regard en direction de",
        "ja-JP": "プレイヤーが向いている方向: ",
        "pt-BR": "Direção Frontal de",
        "tr-TR": "Doğrultulduğu Yön",
        "zh-CN": "面朝方向",
        "de-DE": "Facing Direction Of",
        "es-ES": "Facing Direction Of",
        "it-IT": "Facing Direction Of",
        "ko-KR": "Facing Direction Of",
        "pl-PL": "Facing Direction Of",
        "ru-RU": "Facing Direction Of",
        "th-TH": "Facing Direction Of",
        "zh-TW": "Facing Direction Of"
    },
    "_&getHealth": {
        "guid": "0000000081C2",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "en-US": "Health",
        "es-MX": "Salud",
        "fr-FR": "Points de vie",
        "ja-JP": "ライフ",
        "pt-BR": "Vida",
        "tr-TR": "Can",
        "zh-CN": "生命值",
        "de-DE": "Health",
        "es-ES": "Health",
        "it-IT": "Health",
        "ko-KR": "Health",
        "pl-PL": "Health",
        "ru-RU": "Health",
        "th-TH": "Health",
        "zh-TW": "Health"
    },
    "_&getHealthOfType": {
        "description": "The current health of the specified player, filtered by the given health type.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALTH",
                "description": "The type of health to acquire.",
                "type": "Health",
                "default": "HEALTH"
            }
        ],
        "return": "unsigned float",
        "guid": "000000011448",
        "en-US": "Health Of Type",
        "es-MX": "Salud según tipo",
        "fr-FR": "Points de vie par type",
        "ja-JP": "タイプごとのライフ",
        "pt-BR": "Vida do Tipo",
        "th-TH": "พลังชีวิตของประเภท",
        "tr-TR": "Türe Göre Can",
        "zh-CN": "类型的生命值",
        "de-DE": "Health Of Type",
        "es-ES": "Health Of Type",
        "it-IT": "Health Of Type",
        "ko-KR": "Health Of Type",
        "pl-PL": "Health Of Type",
        "ru-RU": "Health Of Type",
        "zh-TW": "Health Of Type"
    },
    "_&getHeroOfDuplication": {
        "description": "The hero currently being duplicated by the specified player. If no hero is being duplicated, the resulting value is 0.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player performing the duplication.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Hero",
        "guid": "000000010E6A",
        "en-US": "Hero Being Duplicated",
        "es-MX": "Héroe que está siendo copiado",
        "fr-FR": "Héros dupliqué",
        "ja-JP": "コピーされているヒーロー",
        "pt-BR": "Herói Sendo Duplicado",
        "th-TH": "ฮีโร่ที่กำลังถูกดูพลิเคต",
        "tr-TR": "Kopyalanan Kahraman",
        "zh-CN": "正在复制的英雄",
        "de-DE": "Hero Being Duplicated",
        "es-ES": "Hero Being Duplicated",
        "it-IT": "Hero Being Duplicated",
        "ko-KR": "Hero Being Duplicated",
        "pl-PL": "Hero Being Duplicated",
        "ru-RU": "Hero Being Duplicated",
        "zh-TW": "Hero Being Duplicated"
    },
    "_&getHeroStatistic": {
        "description": "Provides a statistic of the specified player's time playing a specific hero (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.",
        "args": [
            {
                "name": "Player",
                "description": "The Player whose statistic to acquire.",
                "type": "Player",
                "default": "Event Player"
            },
            {
                "name": "Hero",
                "description": "The hero whose statistic to acquire",
                "type": "Hero",
                "default": "Hero"
            },
            {
                "name": "Stat",
                "description": "The statistic to acquire.",
                "type": "HeroStat",
                "default": "All Damage Dealt"
            }
        ],
        "return": "unsigned float",
        "guid": "000000012505",
        "en-US": "Player Hero Stat",
        "es-MX": "Estadística de héroe del jugador",
        "fr-FR": "Stats de héros de joueur",
        "ja-JP": "プレイヤー・ヒーロー統計",
        "pt-BR": "Estatística de Herói do Jogador",
        "tr-TR": "Oyuncu Kahraman İstatistiği",
        "zh-CN": "玩家英雄数据",
        "de-DE": "Player Hero Stat",
        "es-ES": "Player Hero Stat",
        "it-IT": "Player Hero Stat",
        "ko-KR": "Player Hero Stat",
        "pl-PL": "Player Hero Stat",
        "ru-RU": "Player Hero Stat",
        "th-TH": "Player Hero Stat",
        "zh-TW": "Player Hero Stat"
    },
    "_&getHorizontalFacingAngle": {
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "float",
        "guid": "00000000B27F",
        "en-US": "Horizontal Facing Angle Of",
        "es-MX": "Ángulo horizontal de orientación de",
        "fr-FR": "Angle horizontal du regard de",
        "ja-JP": "対面水平角: ",
        "pt-BR": "Ângulo Horizontal Frontal de",
        "tr-TR": "Yatay Konumlandırma Açısı",
        "zh-CN": "水平朝向角度",
        "de-DE": "Horizontal Facing Angle Of",
        "es-ES": "Horizontal Facing Angle Of",
        "it-IT": "Horizontal Facing Angle Of",
        "ko-KR": "Horizontal Facing Angle Of",
        "pl-PL": "Horizontal Facing Angle Of",
        "ru-RU": "Horizontal Facing Angle Of",
        "th-TH": "Horizontal Facing Angle Of",
        "zh-TW": "Horizontal Facing Angle Of"
    },
    "_&getHorizontalSpeed": {
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25E",
        "en-US": "Horizontal Speed Of",
        "es-MX": "Velocidad horizontal de",
        "fr-FR": "Vitesse horizontale de",
        "ja-JP": "水平速度: ",
        "pt-BR": "Velocidade Horizontal de",
        "tr-TR": "Yatay Hız",
        "zh-CN": "水平速度",
        "de-DE": "Horizontal Speed Of",
        "es-ES": "Horizontal Speed Of",
        "it-IT": "Horizontal Speed Of",
        "ko-KR": "Horizontal Speed Of",
        "pl-PL": "Horizontal Speed Of",
        "ru-RU": "Horizontal Speed Of",
        "th-TH": "Horizontal Speed Of",
        "zh-TW": "Horizontal Speed Of"
    },
    "_&getMaxAmmo": {
        "description": "The current max ammo of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max ammo to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "CLIP",
                "description": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "unsigned float",
        "guid": "0000000110EA",
        "en-US": "Max Ammo",
        "es-MX": "Munición máxima",
        "fr-FR": "Munitions maximum",
        "ja-JP": "最大弾薬数",
        "pt-BR": "Munição Máxima",
        "th-TH": "กระสุนสูงสุด",
        "tr-TR": "Maks. Cephane",
        "zh-CN": "最大弹药",
        "de-DE": "Max Ammo",
        "es-ES": "Max Ammo",
        "it-IT": "Max Ammo",
        "ko-KR": "Max Ammo",
        "pl-PL": "Max Ammo",
        "ru-RU": "Max Ammo",
        "zh-TW": "Max Ammo"
    },
    "_&getMaxHealth": {
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "guid": "0000000081C4",
        "en-US": "Max Health",
        "es-MX": "Salud máxima",
        "fr-FR": "Points de vie maximum",
        "ja-JP": "最大ライフ",
        "pt-BR": "Vida Máxima",
        "tr-TR": "Maks. Can",
        "zh-CN": "最大生命值",
        "de-DE": "Max Health",
        "es-ES": "Max Health",
        "it-IT": "Max Health",
        "ko-KR": "Max Health",
        "pl-PL": "Max Health",
        "ru-RU": "Max Health",
        "th-TH": "Max Health",
        "zh-TW": "Max Health"
    },
    "_&getMaxHealthOfType": {
        "description": "The max health of the specified player, filtered by the given health type.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALTH",
                "description": "The type of max health to acquire.",
                "type": "Health",
                "default": "HEALTH"
            }
        ],
        "return": "unsigned float",
        "guid": "000000011446",
        "en-US": "Max Health Of Type",
        "es-MX": "Salud máxima según tipo",
        "fr-FR": "Points de vie maximum par type",
        "ja-JP": "タイプごとの最大ライフ",
        "pt-BR": "Vida Máxima do Tipo",
        "tr-TR": "Türe Göre Maks. Can",
        "zh-CN": "类型的最大生命值",
        "de-DE": "Max Health Of Type",
        "es-ES": "Max Health Of Type",
        "it-IT": "Max Health Of Type",
        "ko-KR": "Max Health Of Type",
        "pl-PL": "Max Health Of Type",
        "ru-RU": "Max Health Of Type",
        "th-TH": "Max Health Of Type",
        "zh-TW": "Max Health Of Type"
    },
    "_&getNormalizedHealth": {
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "guid": "0000000081C3",
        "en-US": "Normalized Health",
        "es-MX": "Salud normalizada",
        "fr-FR": "Points de vie normalisés",
        "ja-JP": "正規化ライフ",
        "pt-BR": "Vida Normalizada",
        "tr-TR": "Normalleştirilen Can",
        "zh-CN": "标准化生命值",
        "de-DE": "Normalized Health",
        "es-ES": "Normalized Health",
        "it-IT": "Normalized Health",
        "ko-KR": "Normalized Health",
        "pl-PL": "Normalized Health",
        "ru-RU": "Normalized Health",
        "th-TH": "Normalized Health",
        "zh-TW": "Normalized Health"
    },
    "_&getNumberOfDeaths": {
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B103",
        "en-US": "Number Of Deaths",
        "de-DE": "Number of Deaths",
        "es-MX": "Cantidad de muertes",
        "fr-FR": "Nombre de morts",
        "it-IT": "Number of Deaths",
        "ja-JP": "デス数",
        "pt-BR": "Número de Mortes",
        "tr-TR": "Ölüm Sayısı",
        "zh-CN": "死亡数",
        "es-ES": "Number Of Deaths",
        "ko-KR": "Number Of Deaths",
        "pl-PL": "Number Of Deaths",
        "ru-RU": "Number Of Deaths",
        "th-TH": "Number Of Deaths",
        "zh-TW": "Number Of Deaths"
    },
    "_&getNumberOfElims": {
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B101",
        "en-US": "Number Of Eliminations",
        "de-DE": "Number of Eliminations",
        "es-MX": "Cantidad de eliminaciones",
        "fr-FR": "Nombre d’éliminations",
        "it-IT": "Number of Eliminations",
        "ja-JP": "エリミネーション数",
        "pt-BR": "Número de Eliminações",
        "tr-TR": "Bertaraf Sayısı",
        "zh-CN": "消灭数",
        "es-ES": "Number Of Eliminations",
        "ko-KR": "Number Of Eliminations",
        "pl-PL": "Number Of Eliminations",
        "ru-RU": "Number Of Eliminations",
        "th-TH": "Number Of Eliminations",
        "zh-TW": "Number Of Eliminations"
    },
    "_&getNumberOfFinalBlows": {
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B102",
        "en-US": "Number Of Final Blows",
        "de-DE": "Number of Final Blows",
        "es-MX": "Cantidad de golpes de gracia",
        "fr-FR": "Nombre de coups de grâce",
        "it-IT": "Number of Final Blows",
        "ja-JP": "ファイナル・ブロウ数",
        "pt-BR": "Número de Golpes Finais",
        "tr-TR": "Son Vuruş Sayısı",
        "zh-CN": "最后一击数",
        "es-ES": "Number Of Final Blows",
        "ko-KR": "Number Of Final Blows",
        "pl-PL": "Number Of Final Blows",
        "ru-RU": "Number Of Final Blows",
        "th-TH": "Number Of Final Blows",
        "zh-TW": "Number Of Final Blows"
    },
    "_&getPlayerClosestToReticle": {
        "description": "The player closest to the reticle of the specified player, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to search for the closest player.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "Player",
        "guid": "00000000C328",
        "hideFromAutocomplete": true,
        "en-US": "Player Closest To Reticle",
        "es-MX": "Jugador más cercano al retículo",
        "fr-FR": "Joueur le plus proche du réticule",
        "ja-JP": "照準に最も近いプレイヤー",
        "pt-BR": "Jogador Mais Próximo da Mira",
        "tr-TR": "Retiküle En Yakın Oyuncu",
        "zh-CN": "距离准星最近的玩家",
        "de-DE": "Player Closest To Reticle",
        "es-ES": "Player Closest To Reticle",
        "it-IT": "Player Closest To Reticle",
        "ko-KR": "Player Closest To Reticle",
        "pl-PL": "Player Closest To Reticle",
        "ru-RU": "Player Closest To Reticle",
        "th-TH": "Player Closest To Reticle",
        "zh-TW": "Player Closest To Reticle"
    },
    "_&getPlayersInViewAngle": {
        "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to consider players.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "guid": "00000000C32F",
        "en-US": "Players in View Angle",
        "es-MX": "Jugadores en el ángulo de vista",
        "fr-FR": "Joueurs dans le champ de vision",
        "ja-JP": "視角範囲内のプレイヤー",
        "pt-BR": "Jogadores no Ângulo de Visão",
        "tr-TR": "Oyuncuların Görüş Açısı",
        "zh-CN": "视角中的玩家",
        "de-DE": "Players in View Angle",
        "es-ES": "Players in View Angle",
        "it-IT": "Players in View Angle",
        "ko-KR": "Players in View Angle",
        "pl-PL": "Players in View Angle",
        "ru-RU": "Players in View Angle",
        "th-TH": "Players in View Angle",
        "zh-TW": "Players in View Angle"
    },
    "_&getPosition": {
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B11C",
        "en-US": "Position Of",
        "es-MX": "Posición de",
        "fr-FR": "Position de",
        "ja-JP": "位置: ",
        "pt-BR": "Posição de",
        "tr-TR": "Konum",
        "zh-CN": "所选位置",
        "de-DE": "Position Of",
        "es-ES": "Position Of",
        "it-IT": "Position Of",
        "ko-KR": "Position Of",
        "pl-PL": "Position Of",
        "ru-RU": "Position Of",
        "th-TH": "Position Of",
        "zh-TW": "Position Of"
    },
    "_&getScore": {
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "int",
        "guid": "00000000AD3C",
        "en-US": "Score Of",
        "es-MX": "Puntuación de",
        "fr-FR": "Score de",
        "ja-JP": "スコア: ",
        "pt-BR": "Pontuação de",
        "tr-TR": "Skor",
        "zh-CN": "分数",
        "de-DE": "Score Of",
        "es-ES": "Score Of",
        "it-IT": "Score Of",
        "ko-KR": "Score Of",
        "pl-PL": "Score Of",
        "ru-RU": "Score Of",
        "th-TH": "Score Of",
        "zh-TW": "Score Of"
    },
    "_&getSlot": {
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000BB7F",
        "en-US": "Slot Of",
        "es-MX": "Puesto de",
        "fr-FR": "Emplacement de",
        "ja-JP": "スロット: ",
        "pt-BR": "Espaço de",
        "tr-TR": "Yuvası",
        "zh-CN": "栏位",
        "de-DE": "Slot Of",
        "es-ES": "Slot Of",
        "it-IT": "Slot Of",
        "ko-KR": "Slot Of",
        "pl-PL": "Slot Of",
        "ru-RU": "Slot Of",
        "th-TH": "Slot Of",
        "zh-TW": "Slot Of"
    },
    "_&getSpeed": {
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25D",
        "en-US": "Speed Of",
        "es-MX": "Velocidad de",
        "fr-FR": "Vitesse de",
        "ja-JP": "速さ: ",
        "pt-BR": "Velocidade de",
        "tr-TR": "Hız",
        "zh-CN": "速度",
        "de-DE": "Speed Of",
        "es-ES": "Speed Of",
        "it-IT": "Speed Of",
        "ko-KR": "Speed Of",
        "pl-PL": "Speed Of",
        "ru-RU": "Speed Of",
        "th-TH": "Speed Of",
        "zh-TW": "Speed Of"
    },
    "_&getSpeedInDirection": {
        "description": "The current speed of a player in a specific direction in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The direction of travel in which to measure the player's speed.",
                "type": "Direction",
                "default": "VECTOR"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B260",
        "en-US": "Speed Of In Direction",
        "es-MX": "Velocidad deen dirección",
        "fr-FR": "Vitesse dans la direction donnée de",
        "ja-JP": "速さと方向: ",
        "pt-BR": "Velocidade de na Direção",
        "tr-TR": "Yön Hız",
        "zh-CN": "指定方向速度",
        "de-DE": "Speed Of In Direction",
        "es-ES": "Speed Of In Direction",
        "it-IT": "Speed Of In Direction",
        "ko-KR": "Speed Of In Direction",
        "pl-PL": "Speed Of In Direction",
        "ru-RU": "Speed Of In Direction",
        "th-TH": "Speed Of In Direction",
        "zh-TW": "Speed Of In Direction"
    },
    "_&getStatistic": {
        "description": "Provides a statistic of the specified player (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.",
        "args": [
            {
                "name": "Player",
                "description": "The Player whose statistic to acquire.",
                "type": "Player",
                "default": "Event Player"
            },
            {
                "name": "Statistic",
                "description": "The statistic to acquire.",
                "type": "Stat",
                "default": "All Damage Dealt"
            }
        ],
        "return": "unsigned float",
        "guid": "000000012507",
        "en-US": "Player Stat",
        "es-MX": "Estadística de jugador",
        "fr-FR": "Stats de joueur",
        "ja-JP": "プレイヤーの統計",
        "pt-BR": "Estatística de Jogador",
        "tr-TR": "Oyuncu İstatistiği",
        "zh-CN": "玩家数据",
        "de-DE": "Player Stat",
        "es-ES": "Player Stat",
        "it-IT": "Player Stat",
        "ko-KR": "Player Stat",
        "pl-PL": "Player Stat",
        "ru-RU": "Player Stat",
        "th-TH": "Player Stat",
        "zh-TW": "Player Stat"
    },
    "_&getTeam": {
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Team",
        "guid": "00000000B279",
        "en-US": "Team Of",
        "es-MX": "Equipo de",
        "fr-FR": "Équipe de",
        "ja-JP": "チーム: ",
        "pt-BR": "Equipe de",
        "tr-TR": "Takım",
        "zh-CN": "所在队伍",
        "de-DE": "Team Of",
        "es-ES": "Team Of",
        "it-IT": "Team Of",
        "ko-KR": "Team Of",
        "pl-PL": "Team Of",
        "ru-RU": "Team Of",
        "th-TH": "Team Of",
        "zh-TW": "Team Of"
    },
    "_&getThrottle": {
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B2F5",
        "en-US": "Throttle Of",
        "es-MX": "Aceleración de",
        "fr-FR": "Accélération de",
        "ja-JP": "スロットル: ",
        "pt-BR": "Aceleração de",
        "tr-TR": "Hızlanma:",
        "zh-CN": "阈值",
        "de-DE": "Throttle Of",
        "es-ES": "Throttle Of",
        "it-IT": "Throttle Of",
        "ko-KR": "Throttle Of",
        "pl-PL": "Throttle Of",
        "ru-RU": "Throttle Of",
        "th-TH": "Throttle Of",
        "zh-TW": "Throttle Of"
    },
    "_&getUltCharge": {
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned int",
        "guid": "0000000081C5",
        "en-US": "Ultimate Charge Percent",
        "es-MX": "Porcentaje de carga de la habilidad máxima",
        "fr-FR": "Pourcentage de charge de la capacité ultime",
        "ja-JP": "アルティメット・チャージのパーセンテージ",
        "pt-BR": "Percentual de Carga da Suprema",
        "tr-TR": "Ulti Dolum Oranı Yüzdesi",
        "zh-CN": "终极技能充能百分比",
        "de-DE": "Ultimate Charge Percent",
        "es-ES": "Ultimate Charge Percent",
        "it-IT": "Ultimate Charge Percent",
        "ko-KR": "Ultimate Charge Percent",
        "pl-PL": "Ultimate Charge Percent",
        "ru-RU": "Ultimate Charge Percent",
        "th-TH": "Ultimate Charge Percent",
        "zh-TW": "Ultimate Charge Percent"
    },
    "_&getVelocity": {
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Velocity",
        "guid": "00000000B25C",
        "en-US": "Velocity Of",
        "es-MX": "Rapidez de",
        "fr-FR": "Vélocité de",
        "ja-JP": "速度: ",
        "pt-BR": "Rapidez de",
        "tr-TR": "Hız",
        "zh-CN": "速率",
        "de-DE": "Velocity Of",
        "es-ES": "Velocity Of",
        "it-IT": "Velocity Of",
        "ko-KR": "Velocity Of",
        "pl-PL": "Velocity Of",
        "ru-RU": "Velocity Of",
        "th-TH": "Velocity Of",
        "zh-TW": "Velocity Of"
    },
    "_&getVerticalFacingAngle": {
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "float",
        "guid": "00000000B280",
        "en-US": "Vertical Facing Angle Of",
        "es-MX": "Ángulo vertical de orientación de",
        "fr-FR": "Angle vertical du regard de",
        "ja-JP": "対面頂角: ",
        "pt-BR": "Ângulo Vertical Frontal de",
        "tr-TR": "Dikey Konumlandırma Açısı",
        "zh-CN": "垂直朝向角度",
        "de-DE": "Vertical Facing Angle Of",
        "es-ES": "Vertical Facing Angle Of",
        "it-IT": "Vertical Facing Angle Of",
        "ko-KR": "Vertical Facing Angle Of",
        "pl-PL": "Vertical Facing Angle Of",
        "ru-RU": "Vertical Facing Angle Of",
        "th-TH": "Vertical Facing Angle Of",
        "zh-TW": "Vertical Facing Angle Of"
    },
    "_&getVerticalSpeed": {
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25F",
        "en-US": "Vertical Speed Of",
        "es-MX": "Velocidad vertical de",
        "fr-FR": "Vitesse verticale de",
        "ja-JP": "垂直速度: ",
        "pt-BR": "Velocidade Vertical de",
        "tr-TR": "Dikey Hız",
        "zh-CN": "垂直速度",
        "de-DE": "Vertical Speed Of",
        "es-ES": "Vertical Speed Of",
        "it-IT": "Vertical Speed Of",
        "ko-KR": "Vertical Speed Of",
        "pl-PL": "Vertical Speed Of",
        "ru-RU": "Vertical Speed Of",
        "th-TH": "Vertical Speed Of",
        "zh-TW": "Vertical Speed Of"
    },
    "_&hasSpawned": {
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000C192",
        "en-US": "Has Spawned",
        "es-MX": "Ha aparecido",
        "fr-FR": "Apparition",
        "ja-JP": "スポーンした",
        "pt-BR": "Surgiu",
        "tr-TR": "Doğdu",
        "zh-CN": "已重生",
        "de-DE": "Has Spawned",
        "es-ES": "Has Spawned",
        "it-IT": "Has Spawned",
        "ko-KR": "Has Spawned",
        "pl-PL": "Has Spawned",
        "ru-RU": "Has Spawned",
        "th-TH": "Has Spawned",
        "zh-TW": "Has Spawned"
    },
    "_&hasStatusEffect": {
        "description": "Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "STATUS",
                "description": "The status to check for.",
                "type": "Status",
                "default": "HACKED"
            }
        ],
        "return": "bool",
        "guid": "00000000B363",
        "en-US": "Has Status",
        "es-MX": "Tiene estado",
        "fr-FR": "Statut",
        "ja-JP": "ステータスがある",
        "pt-BR": "Tem Status",
        "tr-TR": "Durumu Olan",
        "zh-CN": "具有状态",
        "de-DE": "Has Status",
        "es-ES": "Has Status",
        "it-IT": "Has Status",
        "ko-KR": "Has Status",
        "pl-PL": "Has Status",
        "ru-RU": "Has Status",
        "th-TH": "Has Status",
        "zh-TW": "Has Status"
    },
    "_&isAlive": {
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B278",
        "en-US": "Is Alive",
        "es-MX": "Está vivo",
        "fr-FR": "En vie",
        "ja-JP": "生存している",
        "pt-BR": "É Vivo",
        "tr-TR": "Hayatta",
        "zh-CN": "存活",
        "de-DE": "Is Alive",
        "es-ES": "Is Alive",
        "it-IT": "Is Alive",
        "ko-KR": "Is Alive",
        "pl-PL": "Is Alive",
        "ru-RU": "Is Alive",
        "th-TH": "Is Alive",
        "zh-TW": "Is Alive"
    },
    "_&isCommunicating": {
        "description": "Whether a player is using a specific communication type (such as emoting, using a voice line, using a spray, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TYPE",
                "description": "The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.",
                "type": "Comms",
                "default": "VOICE LINE UP"
            }
        ],
        "return": "bool",
        "guid": "00000000B268",
        "en-US": "Is Communicating",
        "es-MX": "Se está comunicando",
        "fr-FR": "Communication",
        "ja-JP": "コミュニケーションしている",
        "pt-BR": "É Comunicando",
        "tr-TR": "İletişim Kuruyor",
        "zh-CN": "正在交流",
        "de-DE": "Is Communicating",
        "es-ES": "Is Communicating",
        "it-IT": "Is Communicating",
        "ko-KR": "Is Communicating",
        "pl-PL": "Is Communicating",
        "ru-RU": "Is Communicating",
        "th-TH": "Is Communicating",
        "zh-TW": "Is Communicating"
    },
    "_&isCommunicatingAnything": {
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, using a spray, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B9E5",
        "en-US": "Is Communicating Any",
        "es-MX": "Comunica algo",
        "fr-FR": "N’importe quelle communication",
        "ja-JP": "任意の方法でコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer",
        "tr-TR": "Herhangi Bir Şekilde İletişim Kuruyor",
        "zh-CN": "正在与人交流",
        "de-DE": "Is Communicating Any",
        "es-ES": "Is Communicating Any",
        "it-IT": "Is Communicating Any",
        "ko-KR": "Is Communicating Any",
        "pl-PL": "Is Communicating Any",
        "ru-RU": "Is Communicating Any",
        "th-TH": "Is Communicating Any",
        "zh-TW": "Is Communicating Any"
    },
    "_&isCommunicatingEmote": {
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B9E8",
        "en-US": "Is Communicating Any Emote",
        "es-MX": "Comunica un gesto",
        "fr-FR": "Communication par emote",
        "ja-JP": "エモートでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Emote",
        "tr-TR": "İfadeyle İletişim Kuruyor",
        "zh-CN": "正在使用表情交流",
        "de-DE": "Is Communicating Any Emote",
        "es-ES": "Is Communicating Any Emote",
        "it-IT": "Is Communicating Any Emote",
        "ko-KR": "Is Communicating Any Emote",
        "pl-PL": "Is Communicating Any Emote",
        "ru-RU": "Is Communicating Any Emote",
        "th-TH": "Is Communicating Any Emote",
        "zh-TW": "Is Communicating Any Emote"
    },
    "_&isCommunicatingSpray": {
        "description": "Whether a Player is using a spray.",
        "args": [
            {
                "name": "Player",
                "description": "The Player whose spray status to check.",
                "type": "Player",
                "default": "Event Player"
            }
        ],
        "return": "bool",
        "guid": "000000012290",
        "en-US": "Is Communicating Any Spray",
        "es-MX": "Comunica un spray",
        "fr-FR": "Communication par tag",
        "ja-JP": "スプレーでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Spray",
        "tr-TR": "Grafitiyle İletişim Kuruyor",
        "zh-CN": "正在使用喷漆交流",
        "de-DE": "Is Communicating Any Spray",
        "es-ES": "Is Communicating Any Spray",
        "it-IT": "Is Communicating Any Spray",
        "ko-KR": "Is Communicating Any Spray",
        "pl-PL": "Is Communicating Any Spray",
        "ru-RU": "Is Communicating Any Spray",
        "th-TH": "Is Communicating Any Spray",
        "zh-TW": "Is Communicating Any Spray"
    },
    "_&isCommunicatingVoiceline": {
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B9E7",
        "en-US": "Is Communicating Any Voice line",
        "es-MX": "Comunica una línea de voz",
        "fr-FR": "Communication par réplique",
        "ja-JP": "ボイス・ラインでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Fala",
        "tr-TR": "Replikle İletişim Kuruyor",
        "zh-CN": "正在使用语音交流",
        "de-DE": "Is Communicating Any Voice line",
        "es-ES": "Is Communicating Any Voice line",
        "it-IT": "Is Communicating Any Voice line",
        "ko-KR": "Is Communicating Any Voice line",
        "pl-PL": "Is Communicating Any Voice line",
        "ru-RU": "Is Communicating Any Voice line",
        "th-TH": "Is Communicating Any Voice line",
        "zh-TW": "Is Communicating Any Voice line"
    },
    "_&isCrouching": {
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B289",
        "en-US": "Is Crouching",
        "es-MX": "Agachado",
        "fr-FR": "Accroupi",
        "ja-JP": "しゃがんでいる",
        "pt-BR": "É Agachado",
        "tr-TR": "Çömeliyor",
        "zh-CN": "正在蹲下",
        "de-DE": "Is Crouching",
        "es-ES": "Is Crouching",
        "it-IT": "Is Crouching",
        "ko-KR": "Is Crouching",
        "pl-PL": "Is Crouching",
        "ru-RU": "Is Crouching",
        "th-TH": "Is Crouching",
        "zh-TW": "Is Crouching"
    },
    "_&isDead": {
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B277",
        "en-US": "Is Dead",
        "es-MX": "Está muerto",
        "fr-FR": "Mort",
        "ja-JP": "倒れている",
        "pt-BR": "É Morto",
        "tr-TR": "Öldü",
        "zh-CN": "死亡",
        "de-DE": "Is Dead",
        "es-ES": "Is Dead",
        "it-IT": "Is Dead",
        "ko-KR": "Is Dead",
        "pl-PL": "Is Dead",
        "ru-RU": "Is Dead",
        "th-TH": "Is Dead",
        "zh-TW": "Is Dead"
    },
    "_&isDummy": {
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000CEDF",
        "en-US": "Is Dummy Bot",
        "es-MX": "Robot de entrenamiento",
        "fr-FR": "Est une I.A.",
        "ja-JP": "ダミーボットである",
        "pt-BR": "É Bot",
        "th-TH": "เป็นบอตฝึกซ้อม",
        "tr-TR": "Eğitim Robotu",
        "zh-CN": "是否是机器人",
        "de-DE": "Is Dummy Bot",
        "es-ES": "Is Dummy Bot",
        "it-IT": "Is Dummy Bot",
        "ko-KR": "Is Dummy Bot",
        "pl-PL": "Is Dummy Bot",
        "ru-RU": "Is Dummy Bot",
        "zh-TW": "Is Dummy Bot"
    },
    "_&isDuplicatingAHero": {
        "description": "Whether the specified player is duplicating another hero. To check which hero, use the Hero Being Duplicated value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose duplication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "000000010E65",
        "en-US": "Is Duplicating",
        "es-MX": "Está copiando",
        "fr-FR": "Effectue une duplication",
        "ja-JP": "コピー中",
        "pt-BR": "Está Duplicando",
        "th-TH": "ถูกทำซ้ำอยู่",
        "tr-TR": "Kopyalıyor",
        "zh-CN": "正在人格复制",
        "de-DE": "Is Duplicating",
        "es-ES": "Is Duplicating",
        "it-IT": "Is Duplicating",
        "ko-KR": "Is Duplicating",
        "pl-PL": "Is Duplicating",
        "ru-RU": "Is Duplicating",
        "zh-TW": "Is Duplicating"
    },
    "_&isFiringPrimaryFire": {
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000C3E7",
        "en-US": "Is Firing Primary",
        "es-MX": "Está usando el disparo principal",
        "fr-FR": "Tir principal",
        "ja-JP": "メイン攻撃を使用中",
        "pt-BR": "É Disparo Primário",
        "tr-TR": "Birincil Saldırıyı Kullanıyor",
        "zh-CN": "正在使用主要武器",
        "de-DE": "Is Firing Primary",
        "es-ES": "Is Firing Primary",
        "it-IT": "Is Firing Primary",
        "ko-KR": "Is Firing Primary",
        "pl-PL": "Is Firing Primary",
        "ru-RU": "Is Firing Primary",
        "th-TH": "Is Firing Primary",
        "zh-TW": "Is Firing Primary"
    },
    "_&isFiringSecondaryFire": {
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000C3E9",
        "en-US": "Is Firing Secondary",
        "es-MX": "Está usando el disparo secundario",
        "fr-FR": "Tir secondaire",
        "ja-JP": "サブ攻撃を使用中",
        "pt-BR": "É Disparo Secundário",
        "tr-TR": "İkincil Saldırıyı Kullanıyor",
        "zh-CN": "正在使用辅助武器",
        "de-DE": "Is Firing Secondary",
        "es-ES": "Is Firing Secondary",
        "it-IT": "Is Firing Secondary",
        "ko-KR": "Is Firing Secondary",
        "pl-PL": "Is Firing Secondary",
        "ru-RU": "Is Firing Secondary",
        "th-TH": "Is Firing Secondary",
        "zh-TW": "Is Firing Secondary"
    },
    "_&isHoldingButton": {
        "description": "Whether a player is holding a specific button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose button to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The button to check.",
                "type": "Button",
                "default": "BUTTON"
            }
        ],
        "return": "bool",
        "guid": "00000000B2F3",
        "en-US": "Is Button Held",
        "es-MX": "Botón presionado",
        "fr-FR": "Bouton maintenu enfoncé",
        "ja-JP": "ボタンが長押しされている",
        "pt-BR": "É Botão Segurado",
        "tr-TR": "Basılı Tutulan Düğme",
        "zh-CN": "按钮被按下",
        "de-DE": "Is Button Held",
        "es-ES": "Is Button Held",
        "it-IT": "Is Button Held",
        "ko-KR": "Is Button Held",
        "pl-PL": "Is Button Held",
        "ru-RU": "Is Button Held",
        "th-TH": "Is Button Held",
        "zh-TW": "Is Button Held"
    },
    "_&isInAir": {
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B28B",
        "en-US": "Is In Air",
        "es-MX": "En el aire",
        "fr-FR": "Dans les airs",
        "ja-JP": "空中にいる",
        "pt-BR": "É no Ar",
        "tr-TR": "Havada",
        "zh-CN": "正在空中",
        "de-DE": "Is In Air",
        "es-ES": "Is In Air",
        "it-IT": "Is In Air",
        "ko-KR": "Is In Air",
        "pl-PL": "Is In Air",
        "ru-RU": "Is In Air",
        "th-TH": "Is In Air",
        "zh-TW": "Is In Air"
    },
    "_&isInAlternateForm": {
        "description": "Whether the specified player is currently in an alternate form:\n        \n- Hammond's ball form\n- Baby Dva\n- Bastion's turret and tank forms\n- Lucio's speed song\n- Mercy's pistol\n- Torbjorn's hammer\n\nFor Echo duplication, use the Is Duplicating value instead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose form to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "000000010E62",
        "en-US": "Is In Alternate Form",
        "es-MX": "Está en su forma alterna",
        "fr-FR": "Est dans une forme alternative",
        "ja-JP": "異なる形態である",
        "pt-BR": "Está em uma Forma Alternativa",
        "th-TH": "อยู่ในรูปแบบอื่น",
        "tr-TR": "Alternatif Bir Formda",
        "zh-CN": "处于非初始状态",
        "de-DE": "Is In Alternate Form",
        "es-ES": "Is In Alternate Form",
        "it-IT": "Is In Alternate Form",
        "ko-KR": "Is In Alternate Form",
        "pl-PL": "Is In Alternate Form",
        "ru-RU": "Is In Alternate Form",
        "zh-TW": "Is In Alternate Form"
    },
    "_&isInSpawnRoom": {
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B3B1",
        "en-US": "Is In Spawn Room",
        "es-MX": "En el cuarto de reaparición",
        "fr-FR": "Dans la salle d’apparition",
        "ja-JP": "リスポーンエリアにいる",
        "pt-BR": "É Na Sala de Ressurgimento",
        "tr-TR": "Başlangıç Odası'nda",
        "zh-CN": "在重生室中",
        "de-DE": "Is In Spawn Room",
        "es-ES": "Is In Spawn Room",
        "it-IT": "Is In Spawn Room",
        "ko-KR": "Is In Spawn Room",
        "pl-PL": "Is In Spawn Room",
        "ru-RU": "Is In Spawn Room",
        "th-TH": "Is In Spawn Room",
        "zh-TW": "Is In Spawn Room"
    },
    "_&isInViewAngle": {
        "description": "Whether a location is within view of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "LOCATION",
                "description": "The location to test if it's within view.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "return": "bool",
        "guid": "00000000BF7C",
        "en-US": "Is In View Angle",
        "es-MX": "En el ángulo de vista",
        "fr-FR": "Dans le champ de vision",
        "ja-JP": "視角範囲内",
        "pt-BR": "É No Ângulo de Visão",
        "tr-TR": "Görüş Açısında",
        "zh-CN": "在视野内",
        "de-DE": "Is In View Angle",
        "es-ES": "Is In View Angle",
        "it-IT": "Is In View Angle",
        "ko-KR": "Is In View Angle",
        "pl-PL": "Is In View Angle",
        "ru-RU": "Is In View Angle",
        "th-TH": "Is In View Angle",
        "zh-TW": "Is In View Angle"
    },
    "_&isJumping": {
        "description": "Whether the specified player is jumping.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose jump usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "0000000105A0",
        "en-US": "Is Jumping",
        "es-MX": "Está saltando",
        "fr-FR": "Utilise Saut",
        "ja-JP": "ジャンプ中",
        "pt-BR": "Está Pulando",
        "tr-TR": "Zıplıyor",
        "zh-CN": "正在跳跃",
        "de-DE": "Is Jumping",
        "es-ES": "Is Jumping",
        "it-IT": "Is Jumping",
        "ko-KR": "Is Jumping",
        "pl-PL": "Is Jumping",
        "ru-RU": "Is Jumping",
        "th-TH": "Is Jumping",
        "zh-TW": "Is Jumping"
    },
    "_&isMeleeing": {
        "description": "Whether the specified player is meleeing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose melee usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000001059A",
        "en-US": "Is Meleeing",
        "es-MX": "Está usando un ataque melé",
        "fr-FR": "Utilise Mêlée",
        "ja-JP": "近接攻撃中",
        "pt-BR": "Está Usando Corpo a Corpo",
        "tr-TR": "Yakın Saldırı Kullanıyor",
        "zh-CN": "正在近战攻击",
        "de-DE": "Is Meleeing",
        "es-ES": "Is Meleeing",
        "it-IT": "Is Meleeing",
        "ko-KR": "Is Meleeing",
        "pl-PL": "Is Meleeing",
        "ru-RU": "Is Meleeing",
        "th-TH": "Is Meleeing",
        "zh-TW": "Is Meleeing"
    },
    "_&isMoving": {
        "description": "Whether a player is moving (defined as having a non-zero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B288",
        "en-US": "Is Moving",
        "es-MX": "En movimiento",
        "fr-FR": "Se déplace",
        "ja-JP": "移動している",
        "pt-BR": "É Movimentando-se",
        "tr-TR": "Hareket Ediyor",
        "zh-CN": "正在移动",
        "de-DE": "Is Moving",
        "es-ES": "Is Moving",
        "it-IT": "Is Moving",
        "ko-KR": "Is Moving",
        "pl-PL": "Is Moving",
        "ru-RU": "Is Moving",
        "th-TH": "Is Moving",
        "zh-TW": "Is Moving"
    },
    "_&isOnFire": {
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B3B3",
        "en-US": "Is Portrait On Fire",
        "es-MX": "Retrato en llamas",
        "fr-FR": "Portrait « en feu »",
        "ja-JP": "ポートレートに炎エフェクトがついている",
        "pt-BR": "É Retrato Em Chamas",
        "tr-TR": "Alevli Portre",
        "zh-CN": "头像火力全开",
        "de-DE": "Is Portrait On Fire",
        "es-ES": "Is Portrait On Fire",
        "it-IT": "Is Portrait On Fire",
        "ko-KR": "Is Portrait On Fire",
        "pl-PL": "Is Portrait On Fire",
        "ru-RU": "Is Portrait On Fire",
        "th-TH": "Is Portrait On Fire",
        "zh-TW": "Is Portrait On Fire"
    },
    "_&isOnGround": {
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000BF70",
        "en-US": "Is On Ground",
        "es-MX": "En el suelo",
        "fr-FR": "Au sol",
        "ja-JP": "地上にいる",
        "pt-BR": "É No Chão",
        "tr-TR": "Yerde",
        "zh-CN": "在地面上",
        "de-DE": "Is On Ground",
        "es-ES": "Is On Ground",
        "it-IT": "Is On Ground",
        "ko-KR": "Is On Ground",
        "pl-PL": "Is On Ground",
        "ru-RU": "Is On Ground",
        "th-TH": "Is On Ground",
        "zh-TW": "Is On Ground"
    },
    "_&isOnObjective": {
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B3B2",
        "en-US": "Is On Objective",
        "es-MX": "En el objetivo",
        "fr-FR": "Sur l’objectif",
        "ja-JP": "目標にいる",
        "pt-BR": "É No Objetivo",
        "tr-TR": "Hedefte",
        "zh-CN": "在目标点上",
        "de-DE": "Is On Objective",
        "es-ES": "Is On Objective",
        "it-IT": "Is On Objective",
        "ko-KR": "Is On Objective",
        "pl-PL": "Is On Objective",
        "ru-RU": "Is On Objective",
        "th-TH": "Is On Objective",
        "zh-TW": "Is On Objective"
    },
    "_&isOnWall": {
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000BB0B",
        "en-US": "Is On Wall",
        "es-MX": "En el muro",
        "fr-FR": "Sur le mur",
        "ja-JP": "壁の上にいる",
        "pt-BR": "É Na Parede",
        "tr-TR": "Duvarda",
        "zh-CN": "在墙上",
        "de-DE": "Is On Wall",
        "es-ES": "Is On Wall",
        "it-IT": "Is On Wall",
        "ko-KR": "Is On Wall",
        "pl-PL": "Is On Wall",
        "ru-RU": "Is On Wall",
        "th-TH": "Is On Wall",
        "zh-TW": "Is On Wall"
    },
    "_&isReloading": {
        "description": "Whether the specified player is reloading.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose reload usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "000000011065",
        "en-US": "Is Reloading",
        "es-MX": "Está recargando",
        "fr-FR": "Utilise Recharger",
        "ja-JP": "リロード中",
        "pt-BR": "Está Recarregando",
        "tr-TR": "Dolduruyor",
        "zh-CN": "正在装填",
        "de-DE": "Is Reloading",
        "es-ES": "Is Reloading",
        "it-IT": "Is Reloading",
        "ko-KR": "Is Reloading",
        "pl-PL": "Is Reloading",
        "ru-RU": "Is Reloading",
        "th-TH": "Is Reloading",
        "zh-TW": "Is Reloading"
    },
    "_&isStanding": {
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B287",
        "en-US": "Is Standing",
        "es-MX": "De pie",
        "fr-FR": "Debout",
        "ja-JP": "立っている",
        "pt-BR": "É Parado",
        "tr-TR": "Ayakta",
        "zh-CN": "正在站立",
        "de-DE": "Is Standing",
        "es-ES": "Is Standing",
        "it-IT": "Is Standing",
        "ko-KR": "Is Standing",
        "pl-PL": "Is Standing",
        "ru-RU": "Is Standing",
        "th-TH": "Is Standing",
        "zh-TW": "Is Standing"
    },
    "_&isUsingAbility1": {
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000C3EB",
        "en-US": "Is Using Ability 1",
        "es-MX": "Está utilizando la habilidad 1",
        "fr-FR": "Capacité 1 utilisée",
        "ja-JP": "アビリティ1を使用",
        "pt-BR": "É Usando Habilidade 1",
        "tr-TR": "1. Kabiliyeti Kullanıyor",
        "zh-CN": "正在使用技能 1",
        "de-DE": "Is Using Ability 1",
        "es-ES": "Is Using Ability 1",
        "it-IT": "Is Using Ability 1",
        "ko-KR": "Is Using Ability 1",
        "pl-PL": "Is Using Ability 1",
        "ru-RU": "Is Using Ability 1",
        "th-TH": "Is Using Ability 1",
        "zh-TW": "Is Using Ability 1"
    },
    "_&isUsingAbility2": {
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000C3ED",
        "en-US": "Is Using Ability 2",
        "es-MX": "Está utilizando la habilidad 2",
        "fr-FR": "Capacité 2 utilisée",
        "ja-JP": "アビリティ2を使用",
        "pt-BR": "É Usando Habilidade 2",
        "tr-TR": "2. Kabiliyeti Kullanıyor",
        "zh-CN": "正在使用技能 2",
        "de-DE": "Is Using Ability 2",
        "es-ES": "Is Using Ability 2",
        "it-IT": "Is Using Ability 2",
        "ko-KR": "Is Using Ability 2",
        "pl-PL": "Is Using Ability 2",
        "ru-RU": "Is Using Ability 2",
        "th-TH": "Is Using Ability 2",
        "zh-TW": "Is Using Ability 2"
    },
    "_&isUsingUltimate": {
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B9D4",
        "en-US": "Is Using Ultimate",
        "es-MX": "Está usando la habilidad máxima",
        "fr-FR": "Capacité ultime utilisée",
        "ja-JP": "アルティメットを使用している",
        "pt-BR": "É Usando Suprema",
        "tr-TR": "Ulti Kullanıyor",
        "zh-CN": "正在使用终极技能",
        "de-DE": "Is Using Ultimate",
        "es-ES": "Is Using Ultimate",
        "it-IT": "Is Using Ultimate",
        "ko-KR": "Is Using Ultimate",
        "pl-PL": "Is Using Ultimate",
        "ru-RU": "Is Using Ultimate",
        "th-TH": "Is Using Ultimate",
        "zh-TW": "Is Using Ultimate"
    },
    "__add__": {
        "guid": "00000000C408",
        "description": "The sum of two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Add",
        "es-MX": "Agregar",
        "fr-FR": "Addition",
        "ja-JP": "追加",
        "pt-BR": "Somar",
        "th-TH": "เพิ่ม",
        "tr-TR": "Topla",
        "zh-CN": "加",
        "de-DE": "Add",
        "es-ES": "Add",
        "it-IT": "Add",
        "ko-KR": "Add",
        "pl-PL": "Add",
        "ru-RU": "Add",
        "zh-TW": "Add"
    },
    "__all__": {
        "description": "Whether the specified condition evaluates to true for every value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B5BA",
        "en-US": "Is True For All",
        "es-MX": "Es verdadero para todos",
        "fr-FR": "Vrai pour tous",
        "ja-JP": "すべてに対して「TRUE」",
        "pt-BR": "É Verdadeiro para Todos",
        "tr-TR": "Tümü İçin Doğru",
        "zh-CN": "对全部为“真”",
        "de-DE": "Is True For All",
        "es-ES": "Is True For All",
        "it-IT": "Is True For All",
        "ko-KR": "Is True For All",
        "pl-PL": "Is True For All",
        "ru-RU": "Is True For All",
        "th-TH": "Is True For All",
        "zh-TW": "Is True For All"
    },
    "__and__": {
        "description": "Whether both of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "bool",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B273",
        "en-US": "And",
        "es-MX": "Y",
        "fr-FR": "Et",
        "ja-JP": "AND",
        "pt-BR": "E",
        "tr-TR": "Ve",
        "zh-CN": "与",
        "de-DE": "And",
        "es-ES": "And",
        "it-IT": "And",
        "ko-KR": "And",
        "pl-PL": "And",
        "ru-RU": "And",
        "th-TH": "And",
        "zh-TW": "And"
    },
    "__any__": {
        "description": "Whether the specified condition evaluates to true for any value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B5BB",
        "en-US": "Is True For Any",
        "es-MX": "Es verdadero para cualquiera",
        "fr-FR": "Vrai pour n’importe qui",
        "ja-JP": "いずれに対しても「TRUE」",
        "pt-BR": "É Verdadeiro para Qualquer",
        "tr-TR": "Her Değer İçin Doğru",
        "zh-CN": "对任意为“真”",
        "de-DE": "Is True For Any",
        "es-ES": "Is True For Any",
        "it-IT": "Is True For Any",
        "ko-KR": "Is True For Any",
        "pl-PL": "Is True For Any",
        "ru-RU": "Is True For Any",
        "th-TH": "Is True For Any",
        "zh-TW": "Is True For Any"
    },
    "__arrayContains__": {
        "description": "Whether the specified array contains the specified value.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "Array",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000C336",
        "en-US": "Array Contains",
        "es-MX": "La matriz contiene",
        "fr-FR": "Contenu du tableau",
        "ja-JP": "含む配列",
        "pt-BR": "Matriz Contém",
        "tr-TR": "Dizin İçeriği",
        "zh-CN": "数组包含",
        "de-DE": "Array Contains",
        "es-ES": "Array Contains",
        "it-IT": "Array Contains",
        "ko-KR": "Array Contains",
        "pl-PL": "Array Contains",
        "ru-RU": "Array Contains",
        "th-TH": "Array Contains",
        "zh-TW": "Array Contains"
    },
    "__arraySlice__": {
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to make a copy.",
                "type": {
                    "Array": "Object"
                },
                "default": "ALL PLAYERS"
            },
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": {
            "Array": "Object"
        },
        "guid": "00000000B597",
        "en-US": "Array Slice",
        "es-MX": "Extracción de matriz",
        "fr-FR": "Section de tableau",
        "ja-JP": "配列のスライス",
        "pt-BR": "Fatia da Matriz",
        "tr-TR": "Dizin Kesiti",
        "zh-CN": "数组分割",
        "de-DE": "Array Slice",
        "es-ES": "Array Slice",
        "it-IT": "Array Slice",
        "ko-KR": "Array Slice",
        "pl-PL": "Array Slice",
        "ru-RU": "Array Slice",
        "th-TH": "Array Slice",
        "zh-TW": "Array Slice"
    },
    "__array__": {
        "description": "An array constructed from the listed values.",
        "args": [
            {
                "name": "[0]",
                "description": "The value that will be stored in the array at index [0].",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NULL"
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000B836",
        "en-US": "Array",
        "es-MX": "Matriz",
        "fr-FR": "Tableau",
        "ja-JP": "配列",
        "pt-BR": "Matriz",
        "tr-TR": "Dizin",
        "zh-CN": "数组",
        "de-DE": "Array",
        "es-ES": "Array",
        "it-IT": "Array",
        "ko-KR": "Array",
        "pl-PL": "Array",
        "ru-RU": "Array",
        "th-TH": "Array",
        "zh-TW": "Array"
    },
    "__button__": {
        "description": "A button constant.",
        "args": [
            {
                "name": "BUTTON",
                "description": "A button constant.",
                "type": "ButtonLiteral",
                "default": "PRIMARY FIRE"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Button",
        "guid": "000000010B3B",
        "en-US": "Button",
        "es-MX": "Botón",
        "fr-FR": "Bouton",
        "ja-JP": "ボタン",
        "pt-BR": "Botão",
        "tr-TR": "Düğme",
        "zh-CN": "按钮",
        "de-DE": "Button",
        "es-ES": "Button",
        "it-IT": "Button",
        "ko-KR": "Button",
        "pl-PL": "Button",
        "ru-RU": "Button",
        "th-TH": "Button",
        "zh-TW": "Button"
    },
    "__color__": {
        "description": "A Color Constant",
        "args": [
            {
                "name": "Color",
                "description": "A Color Constant",
                "type": "ColorLiteral",
                "default": "White"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Color",
        "guid": "000000011D42",
        "en-US": "Color",
        "fr-FR": "Couleur",
        "ja-JP": "色",
        "pt-BR": "Cor",
        "tr-TR": "Renk",
        "zh-CN": "颜色",
        "de-DE": "Color",
        "es-ES": "Color",
        "es-MX": "Color",
        "it-IT": "Color",
        "ko-KR": "Color",
        "pl-PL": "Color",
        "ru-RU": "Color",
        "th-TH": "Color",
        "zh-TW": "Color"
    },
    "__compare__": {
        "description": "Whether the comparison of the two inputs is true.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            },
            {
                "name": "COMPARISON",
                "description": "",
                "type": "__Operator__",
                "default": "=="
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B276",
        "en-US": "Compare",
        "es-MX": "Comparar",
        "fr-FR": "Comparer",
        "ja-JP": "COMPARE",
        "pt-BR": "Comparar",
        "tr-TR": "Karşılaştır",
        "zh-CN": "比较",
        "de-DE": "Compare",
        "es-ES": "Compare",
        "it-IT": "Compare",
        "ko-KR": "Compare",
        "pl-PL": "Compare",
        "ru-RU": "Compare",
        "th-TH": "Compare",
        "zh-TW": "Compare"
    },
    "__concat__": {
        "guid": "00000000C41A",
        "description": "A copy of an array with one or more values appended to the end.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array to which to append.",
                "type": "Array",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": [
                    "Object",
                    {
                        "Array": "Object"
                    }
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "Array",
        "en-US": "Append To Array",
        "es-MX": "Anexar a la matriz",
        "fr-FR": "Ajouter au tableau",
        "ja-JP": "配列に追加",
        "pt-BR": "Juntar à Matriz",
        "tr-TR": "Dizine Ekle",
        "zh-CN": "添加至数组",
        "de-DE": "Append To Array",
        "es-ES": "Append To Array",
        "it-IT": "Append To Array",
        "ko-KR": "Append To Array",
        "pl-PL": "Append To Array",
        "ru-RU": "Append To Array",
        "th-TH": "Append To Array",
        "zh-TW": "Append To Array"
    },
    "__currentArrayElement__": {
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5B9",
        "en-US": "Current Array Element",
        "es-MX": "Elemento de matriz actual",
        "fr-FR": "Élément de tableau actuel",
        "ja-JP": "現在の配列の要素",
        "pt-BR": "Elemento da Matriz Atual",
        "tr-TR": "Mevcut Dizin Unsuru",
        "zh-CN": "当前数组元素",
        "de-DE": "Current Array Element",
        "es-ES": "Current Array Element",
        "it-IT": "Current Array Element",
        "ko-KR": "Current Array Element",
        "pl-PL": "Current Array Element",
        "ru-RU": "Current Array Element",
        "th-TH": "Current Array Element",
        "zh-TW": "Current Array Element"
    },
    "__currentArrayIndex__": {
        "description": "The current array index being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "0000000111B5",
        "en-US": "Current Array Index",
        "es-MX": "Índice de matriz actual",
        "fr-FR": "Index de tableau actuel",
        "ja-JP": "現在の配列のインデックス",
        "pt-BR": "Índice da Matriz Atual",
        "th-TH": "ดัชนีอาร์เรย์ปัจจุบัน",
        "tr-TR": "Mevcut Dizin İndeksi",
        "zh-CN": "当前数组索引",
        "de-DE": "Current Array Index",
        "es-ES": "Current Array Index",
        "it-IT": "Current Array Index",
        "ko-KR": "Current Array Index",
        "pl-PL": "Current Array Index",
        "ru-RU": "Current Array Index",
        "zh-TW": "Current Array Index"
    },
    "__customString__": {
        "description": "ty magzie for adding that",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "CustomStringLiteral",
                "default": ""
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL"
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL"
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "00000000CE3C",
        "en-US": "Custom String",
        "es-MX": "Cadena personalizada",
        "fr-FR": "Chaîne personnalisée",
        "ja-JP": "カスタムストリング",
        "pt-BR": "String Personalizada",
        "tr-TR": "Özel Dizgi",
        "zh-CN": "自定义字符串",
        "de-DE": "Custom String",
        "es-ES": "Custom String",
        "it-IT": "Custom String",
        "ko-KR": "Custom String",
        "pl-PL": "Custom String",
        "ru-RU": "Custom String",
        "th-TH": "Custom String",
        "zh-TW": "Custom String"
    },
    "__divide__": {
        "guid": "00000000C40F",
        "description": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Divide",
        "es-MX": "Dividir",
        "fr-FR": "Division",
        "ja-JP": "除算",
        "pt-BR": "Dividir",
        "tr-TR": "Böl",
        "zh-CN": "除",
        "de-DE": "Divide",
        "es-ES": "Divide",
        "it-IT": "Divide",
        "ko-KR": "Divide",
        "pl-PL": "Divide",
        "ru-RU": "Divide",
        "th-TH": "Divide",
        "zh-TW": "Divide"
    },
    "__emptyArray__": {
        "description": "An array with no elements.",
        "args": [],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000BF5A",
        "en-US": "Empty Array",
        "es-MX": "Matriz vacía",
        "fr-FR": "Tableau vide",
        "ja-JP": "空の配列",
        "pt-BR": "Matriz Vazia",
        "tr-TR": "Boş Dizin",
        "zh-CN": "空数组",
        "de-DE": "Empty Array",
        "es-ES": "Empty Array",
        "it-IT": "Empty Array",
        "ko-KR": "Empty Array",
        "pl-PL": "Empty Array",
        "ru-RU": "Empty Array",
        "th-TH": "Empty Array",
        "zh-TW": "Empty Array"
    },
    "__filteredArray__": {
        "description": "A copy of the specified array with any values that do not match the specified condition removed.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be filtered.",
                "type": "Array",
                "default": "ALL PLAYERS"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000B5B7",
        "en-US": "Filtered Array",
        "es-MX": "Matriz filtrada",
        "fr-FR": "Tableau filtré",
        "ja-JP": "フィルタリングされた配列",
        "pt-BR": "Matriz Filtrada",
        "tr-TR": "Filtreli Dizin",
        "zh-CN": "已过滤的数组",
        "de-DE": "Filtered Array",
        "es-ES": "Filtered Array",
        "it-IT": "Filtered Array",
        "ko-KR": "Filtered Array",
        "pl-PL": "Filtered Array",
        "ru-RU": "Filtered Array",
        "th-TH": "Filtered Array",
        "zh-TW": "Filtered Array"
    },
    "__firstOf__": {
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5C2",
        "en-US": "First Of",
        "es-MX": "Primero de",
        "fr-FR": "Premier de",
        "ja-JP": "最初の値",
        "pt-BR": "Primeiro de",
        "tr-TR": "İlk",
        "zh-CN": "首个",
        "de-DE": "First Of",
        "es-ES": "First Of",
        "it-IT": "First Of",
        "ko-KR": "First Of",
        "pl-PL": "First Of",
        "ru-RU": "First Of",
        "th-TH": "First Of",
        "zh-TW": "First Of"
    },
    "__gamemode__": {
        "guid": "00000000F161",
        "description": "A game mode constant.",
        "args": [
            {
                "name": "GAME MODE",
                "description": "A game mode constant.",
                "type": "GamemodeLiteral",
                "default": "ASSAULT"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Gamemode",
        "en-US": "Game Mode",
        "es-MX": "Modo de juego",
        "fr-FR": "Mode de jeu",
        "ja-JP": "ゲーム・モード",
        "pt-BR": "Modo de jogo",
        "tr-TR": "Oyun Modu",
        "zh-CN": "游戏模式",
        "de-DE": "Game Mode",
        "es-ES": "Game Mode",
        "it-IT": "Game Mode",
        "ko-KR": "Game Mode",
        "pl-PL": "Game Mode",
        "ru-RU": "Game Mode",
        "th-TH": "Game Mode",
        "zh-TW": "Game Mode"
    },
    "__globalVar__": {
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "GlobalVariable",
                "default": "A"
            }
        ],
        "return": "Value",
        "guid": "00000000B0F9",
        "en-US": "Global Variable",
        "es-MX": "Variable global",
        "fr-FR": "Variable globale",
        "ja-JP": "グローバル変数",
        "pt-BR": "Variável Global",
        "tr-TR": "Küresel Değişken",
        "zh-CN": "全局变量",
        "de-DE": "Global Variable",
        "es-ES": "Global Variable",
        "it-IT": "Global Variable",
        "ko-KR": "Global Variable",
        "pl-PL": "Global Variable",
        "ru-RU": "Global Variable",
        "th-TH": "Global Variable",
        "zh-TW": "Global Variable"
    },
    "__global__": {
        "return": "GlobalVariable",
        "args": null,
        "guid": "00000000EB1F",
        "en-US": "Global",
        "it-IT": "Globale",
        "ja-JP": "グローバル",
        "pl-PL": "Globalnie",
        "th-TH": "ทั่วโลก",
        "tr-TR": "Küresel",
        "zh-CN": "全局",
        "de-DE": "Global",
        "es-ES": "Global",
        "es-MX": "Global",
        "fr-FR": "Global",
        "ko-KR": "Global",
        "pt-BR": "Global",
        "ru-RU": "Global",
        "zh-TW": "Global"
    },
    "__hero__": {
        "guid": "00000000ACAA",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "HeroLiteral",
                "default": "ANA"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Hero",
        "en-US": "Hero",
        "es-MX": "Héroe",
        "fr-FR": "Personnage",
        "ja-JP": "ヒーロー",
        "pt-BR": "Herói",
        "tr-TR": "Kahraman",
        "zh-CN": "英雄",
        "de-DE": "Hero",
        "es-ES": "Hero",
        "it-IT": "Hero",
        "ko-KR": "Hero",
        "pl-PL": "Hero",
        "ru-RU": "Hero",
        "th-TH": "Hero",
        "zh-TW": "Hero"
    },
    "__ifThenElse__": {
        "description": "Results in the Then value when the If condition is true; otherwise, results in the Else value.",
        "args": [
            {
                "name": "IF",
                "description": "If this condition evaluates to true, the result of the value is then; otherwise, the result is else.",
                "type": "bool",
                "default": "TRUE"
            },
            {
                "name": "THEN",
                "description": "The result of the value when the if condition evaluates to true.",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
            },
            {
                "name": "ELSE",
                "description": "The result of the value when the if condition evaluates to false.",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "000000010BC7",
        "en-US": "If-Then-Else",
        "fr-FR": "Si-Alors-Sinon",
        "ja-JP": "IF-THEN-ELSE",
        "tr-TR": "Eğer-İse-Değilse",
        "de-DE": "If-Then-Else",
        "es-ES": "If-Then-Else",
        "es-MX": "If-Then-Else",
        "it-IT": "If-Then-Else",
        "ko-KR": "If-Then-Else",
        "pl-PL": "If-Then-Else",
        "pt-BR": "If-Then-Else",
        "ru-RU": "If-Then-Else",
        "th-TH": "If-Then-Else",
        "zh-CN": "If-Then-Else",
        "zh-TW": "If-Then-Else"
    },
    "__indexOfArrayValue__": {
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": {
                    "Array": "Object"
                },
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "00000000C330",
        "en-US": "Index Of Array Value",
        "es-MX": "Índice del valor de la matriz",
        "fr-FR": "Index de la valeur de tableau",
        "ja-JP": "配列値のインデックス",
        "pt-BR": "Índice do Valor da Matriz",
        "tr-TR": "Dizin Değeri İndeksi",
        "zh-CN": "数组值的索引",
        "de-DE": "Index Of Array Value",
        "es-ES": "Index Of Array Value",
        "it-IT": "Index Of Array Value",
        "ko-KR": "Index Of Array Value",
        "pl-PL": "Index Of Array Value",
        "ru-RU": "Index Of Array Value",
        "th-TH": "Index Of Array Value",
        "zh-TW": "Index Of Array Value"
    },
    "__lastOf__": {
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5C1",
        "en-US": "Last Of",
        "es-MX": "Último de",
        "fr-FR": "Dernier",
        "ja-JP": "最後の値",
        "pt-BR": "Último de",
        "tr-TR": "Son",
        "zh-CN": "最后",
        "de-DE": "Last Of",
        "es-ES": "Last Of",
        "it-IT": "Last Of",
        "ko-KR": "Last Of",
        "pl-PL": "Last Of",
        "ru-RU": "Last Of",
        "th-TH": "Last Of",
        "zh-TW": "Last Of"
    },
    "__localizedString__": {
        "guid": "00000000BA60",
        "description": "Text formed from a selection of strings and specified values.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "LocalizedStringLiteral",
                "default": "HELLO"
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL"
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL"
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "en-US": "String",
        "es-MX": "Cadena",
        "fr-FR": "Chaîne de texte",
        "ja-JP": "文字列",
        "tr-TR": "Dizgi",
        "zh-CN": "字符串",
        "de-DE": "String",
        "es-ES": "String",
        "it-IT": "String",
        "ko-KR": "String",
        "pl-PL": "String",
        "pt-BR": "String",
        "ru-RU": "String",
        "th-TH": "String",
        "zh-TW": "String"
    },
    "__map__": {
        "guid": "00000000D415",
        "description": "A map constant.",
        "args": [
            {
                "name": "MAP",
                "description": "A map constant.",
                "type": "MapLiteral",
                "default": "AYUTTHAYA"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Map",
        "en-US": "Map",
        "es-MX": "Mapa",
        "fr-FR": "Carte",
        "ja-JP": "マップ",
        "pt-BR": "Mapa",
        "tr-TR": "Harita",
        "zh-CN": "地图",
        "de-DE": "Map",
        "es-ES": "Map",
        "it-IT": "Map",
        "ko-KR": "Map",
        "pl-PL": "Map",
        "ru-RU": "Map",
        "th-TH": "Map",
        "zh-TW": "Map"
    },
    "__mappedArray__": {
        "description": "A copy of the specified array with the values mapped according to the mapping expression that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be mapped.",
                "type": "Array",
                "default": "ALL PLAYERS"
            },
            {
                "name": "CONDITION",
                "description": "The mapping expression that is evaluated for each element of the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "000000011228",
        "en-US": "Mapped Array",
        "es-MX": "Matriz mapeada",
        "fr-FR": "Tableau appliqué",
        "ja-JP": "マッピングされた配列",
        "pt-BR": "Matriz Mapeada",
        "tr-TR": "Haritalanmış Dizin",
        "zh-CN": "映射的数组",
        "de-DE": "Mapped Array",
        "es-ES": "Mapped Array",
        "it-IT": "Mapped Array",
        "ko-KR": "Mapped Array",
        "pl-PL": "Mapped Array",
        "ru-RU": "Mapped Array",
        "th-TH": "Mapped Array",
        "zh-TW": "Mapped Array"
    },
    "__modulo__": {
        "guid": "00000000C410",
        "description": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "unsigned float",
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "en-US": "Modulo",
        "es-MX": "Módulo",
        "ja-JP": "剰余",
        "pt-BR": "Modular",
        "tr-TR": "Modülo",
        "zh-CN": "余数",
        "de-DE": "Modulo",
        "es-ES": "Modulo",
        "fr-FR": "Modulo",
        "it-IT": "Modulo",
        "ko-KR": "Modulo",
        "pl-PL": "Modulo",
        "ru-RU": "Modulo",
        "th-TH": "Modulo",
        "zh-TW": "Modulo"
    },
    "__multiply__": {
        "guid": "00000000C40D",
        "description": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Multiply",
        "es-MX": "Multiplicar",
        "fr-FR": "Multiplication",
        "ja-JP": "乗算",
        "pt-BR": "Multiplicar",
        "tr-TR": "Çarp",
        "zh-CN": "乘",
        "de-DE": "Multiply",
        "es-ES": "Multiply",
        "it-IT": "Multiply",
        "ko-KR": "Multiply",
        "pl-PL": "Multiply",
        "ru-RU": "Multiply",
        "th-TH": "Multiply",
        "zh-TW": "Multiply"
    },
    "__not__": {
        "guid": "00000000B275",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "en-US": "Not",
        "es-MX": "No",
        "fr-FR": "Pas",
        "ja-JP": "NOT",
        "pt-BR": "Não",
        "tr-TR": "Değil",
        "zh-CN": "非",
        "de-DE": "Not",
        "es-ES": "Not",
        "it-IT": "Not",
        "ko-KR": "Not",
        "pl-PL": "Not",
        "ru-RU": "Not",
        "th-TH": "Not",
        "zh-TW": "Not"
    },
    "__number__": {
        "args": [
            {
                "name": "NUMBER",
                "type": "FloatLiteral",
                "default": "0"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000AC38",
        "en-US": "Number",
        "es-MX": "Número",
        "fr-FR": "Nombre",
        "ja-JP": "数値",
        "pt-BR": "Número",
        "tr-TR": "Sayı",
        "zh-CN": "数字",
        "de-DE": "Number",
        "es-ES": "Number",
        "it-IT": "Number",
        "ko-KR": "Number",
        "pl-PL": "Number",
        "ru-RU": "Number",
        "th-TH": "Number",
        "zh-TW": "Number"
    },
    "__or__": {
        "guid": "00000000B274",
        "description": "Whether either of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "bool",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "en-US": "Or",
        "es-MX": "O",
        "fr-FR": "Ou",
        "ja-JP": "OR",
        "pt-BR": "Ou",
        "tr-TR": "Veya",
        "zh-CN": "或",
        "de-DE": "Or",
        "es-ES": "Or",
        "it-IT": "Or",
        "ko-KR": "Or",
        "pl-PL": "Or",
        "ru-RU": "Or",
        "th-TH": "Or",
        "zh-TW": "Or"
    },
    "__playerVar__": {
        "description": "The current value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable value to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "PlayerVariable",
                "default": "A"
            }
        ],
        "return": "Value",
        "guid": "00000000B0FD",
        "en-US": "Player Variable",
        "es-MX": "Variable de jugador",
        "fr-FR": "Variable de joueur",
        "ja-JP": "プレイヤー変数",
        "pt-BR": "Variável de Jogador",
        "tr-TR": "Oyuncu Değişkeni",
        "zh-CN": "玩家变量",
        "de-DE": "Player Variable",
        "es-ES": "Player Variable",
        "it-IT": "Player Variable",
        "ko-KR": "Player Variable",
        "pl-PL": "Player Variable",
        "ru-RU": "Player Variable",
        "th-TH": "Player Variable",
        "zh-TW": "Player Variable"
    },
    "__raiseToPower__": {
        "guid": "00000000C414",
        "description": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "en-US": "Raise To Power",
        "es-MX": "Elevar a la potencia",
        "fr-FR": "Élévation à une puissance ",
        "ja-JP": "累乗",
        "pt-BR": "Elevar à Potência",
        "tr-TR": "Üssünü Al",
        "zh-CN": "乘方",
        "de-DE": "Raise To Power",
        "es-ES": "Raise To Power",
        "it-IT": "Raise To Power",
        "ko-KR": "Raise To Power",
        "pl-PL": "Raise To Power",
        "ru-RU": "Raise To Power",
        "th-TH": "Raise To Power",
        "zh-TW": "Raise To Power"
    },
    "__raycastHitNormal__": {
        "description": "The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": {
                    "Array": "Player"
                },
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000C613",
        "en-US": "Ray Cast Hit Normal",
        "es-MX": "Estándar de impacto de lanzamiento de rayo",
        "fr-FR": "Surface intersectée par le rayon émis",
        "ja-JP": "レイ・キャストが当たった法線",
        "pt-BR": "Normal de Acerto do Lançamento de Raio",
        "tr-TR": "Işın Dökümü İsabet Normali",
        "zh-CN": "射线命中法线",
        "de-DE": "Ray Cast Hit Normal",
        "es-ES": "Ray Cast Hit Normal",
        "it-IT": "Ray Cast Hit Normal",
        "ko-KR": "Ray Cast Hit Normal",
        "pl-PL": "Ray Cast Hit Normal",
        "ru-RU": "Ray Cast Hit Normal",
        "th-TH": "Ray Cast Hit Normal",
        "zh-TW": "Ray Cast Hit Normal"
    },
    "__raycastHitPlayer__": {
        "description": "The player hit by the ray cast (or null if no player is hit).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": {
                    "Array": "Player"
                },
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000C611",
        "en-US": "Ray Cast Hit Player",
        "es-MX": "Jugador de impacto de lanzamiento de rayo",
        "fr-FR": "Joueur intersecté par le rayon émis",
        "ja-JP": "レイ・キャストが当たったプレイヤー",
        "pt-BR": "Jogador Atingido pelo Lançamento de Raio",
        "tr-TR": "Işın Dökümü Oyuncu İsabeti",
        "zh-CN": "射线命中玩家",
        "de-DE": "Ray Cast Hit Player",
        "es-ES": "Ray Cast Hit Player",
        "it-IT": "Ray Cast Hit Player",
        "ko-KR": "Ray Cast Hit Player",
        "pl-PL": "Ray Cast Hit Player",
        "ru-RU": "Ray Cast Hit Player",
        "th-TH": "Ray Cast Hit Player",
        "zh-TW": "Ray Cast Hit Player"
    },
    "__raycastHitPosition__": {
        "description": "The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": {
                    "Array": "Player"
                },
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000C597",
        "en-US": "Ray Cast Hit Position",
        "es-MX": "Posición de impacto de lanzamiento de rayo",
        "fr-FR": "Position d’impact du rayon émis",
        "ja-JP": "レイ・キャストのヒット位置",
        "pt-BR": "Posição de Acerto do Lançamento de Raio",
        "tr-TR": "Işın Dökümü İsabet Konumu",
        "zh-CN": "射线命中位置",
        "de-DE": "Ray Cast Hit Position",
        "es-ES": "Ray Cast Hit Position",
        "it-IT": "Ray Cast Hit Position",
        "ko-KR": "Ray Cast Hit Position",
        "pl-PL": "Ray Cast Hit Position",
        "ru-RU": "Ray Cast Hit Position",
        "th-TH": "Ray Cast Hit Position",
        "zh-TW": "Ray Cast Hit Position"
    },
    "__removeFromArray__": {
        "description": "A copy of an array with one or more values removed (if found).",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to remove values.",
                "type": "Array",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000C421",
        "en-US": "Remove From Array",
        "es-MX": "Eliminar de la matriz",
        "fr-FR": "Supprimer du tableau",
        "ja-JP": "配列から削除",
        "pt-BR": "Remover da Matriz",
        "tr-TR": "Dizinden Kaldır",
        "zh-CN": "从数组中移除",
        "de-DE": "Remove From Array",
        "es-ES": "Remove From Array",
        "it-IT": "Remove From Array",
        "ko-KR": "Remove From Array",
        "pl-PL": "Remove From Array",
        "ru-RU": "Remove From Array",
        "th-TH": "Remove From Array",
        "zh-TW": "Remove From Array"
    },
    "__round__": {
        "description": "The integer to which the specified value rounds.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to round.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "ROUNDING TYPE",
                "description": "Determines the direction in which the value will be rounded.",
                "type": "__Rounding__",
                "default": "UP"
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "00000000C354",
        "en-US": "Round To Integer",
        "es-MX": "Redondear a número entero",
        "fr-FR": "Arrondir à l’entier",
        "ja-JP": "整数への四捨五入",
        "pt-BR": "Arredondar para Inteiro",
        "tr-TR": "Tam Sayıya Yuvarla",
        "zh-CN": "取整",
        "de-DE": "Round To Integer",
        "es-ES": "Round To Integer",
        "it-IT": "Round To Integer",
        "ko-KR": "Round To Integer",
        "pl-PL": "Round To Integer",
        "ru-RU": "Round To Integer",
        "th-TH": "Round To Integer",
        "zh-TW": "Round To Integer"
    },
    "__sortedArray__": {
        "description": "A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": {
                    "Array": "Object"
                },
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "VALUE RANK",
                "description": "The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.",
                "type": "Object",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ],
        "isConstant": true,
        "return": {
            "Array": "Object"
        },
        "guid": "00000000B5C0",
        "en-US": "Sorted Array",
        "es-MX": "Matriz ordenada",
        "fr-FR": "Tableau trié",
        "ja-JP": "ソートされた配列",
        "pt-BR": "Matriz Ordenada",
        "tr-TR": "Sıralı Dizin",
        "zh-CN": "已排序的数组",
        "de-DE": "Sorted Array",
        "es-ES": "Sorted Array",
        "it-IT": "Sorted Array",
        "ko-KR": "Sorted Array",
        "pl-PL": "Sorted Array",
        "ru-RU": "Sorted Array",
        "th-TH": "Sorted Array",
        "zh-TW": "Sorted Array"
    },
    "__strCharAt__": {
        "description": "The character found at a specified index of a String.",
        "args": [
            {
                "name": "String",
                "description": "The String value whose character to acquire.",
                "type": "String",
                "default": "Global Variable"
            },
            {
                "name": "Index",
                "description": "The index of the character to be acquired (with 0 as the first character, 1 as the second character, etc.).",
                "type": "unsigned int",
                "default": 0
            }
        ],
        "return": "String",
        "guid": "000000012D5E",
        "en-US": "Char In String",
        "es-MX": "Personaje en cadena",
        "fr-FR": "Caractère dans la chaîne",
        "ja-JP": "配列の文字",
        "pt-BR": "Caractere na String",
        "tr-TR": "Karakter Dizgide",
        "zh-CN": "字符串中字符",
        "de-DE": "Char In String",
        "es-ES": "Char In String",
        "it-IT": "Char In String",
        "ko-KR": "Char In String",
        "pl-PL": "Char In String",
        "ru-RU": "Char In String",
        "th-TH": "Char In String",
        "zh-TW": "Char In String"
    },
    "__strIndex__": {
        "description": "The index of a character within a String or -1 if no such character can be found.",
        "args": [
            {
                "name": "String",
                "description": "The String Value from which to search for the character.",
                "type": "String",
                "default": "Global Variable"
            },
            {
                "name": "Character",
                "description": "The character for which to search",
                "type": "String",
                "default": "Global Variable"
            }
        ],
        "return": "int",
        "guid": "000000012D5F",
        "en-US": "Index Of String Char",
        "es-MX": "Índice del personaje de la cadena",
        "fr-FR": "Index de la chaîne de caractère",
        "ja-JP": "文字列の文字のインデックス",
        "pt-BR": "Índice de Caractere de String",
        "tr-TR": "Dizgi Karakter İndeksi",
        "zh-CN": "字符串字符索引",
        "de-DE": "Index Of String Char",
        "es-ES": "Index Of String Char",
        "it-IT": "Index Of String Char",
        "ko-KR": "Index Of String Char",
        "pl-PL": "Index Of String Char",
        "ru-RU": "Index Of String Char",
        "th-TH": "Index Of String Char",
        "zh-TW": "Index Of String Char"
    },
    "__strReplace__": {
        "description": "Results in a String Value. This String Value will be built from the specified String Value, where all occurrences of the pattern String are replaced with the replacement String.",
        "args": [
            {
                "name": "String",
                "description": "The String Value with which to search for replacements.",
                "type": "String",
                "default": "Global Variable"
            },
            {
                "name": "Pattern",
                "description": "The String pattern to be replaced.",
                "type": "String",
                "default": "Global Variable"
            },
            {
                "name": "Replacement",
                "description": "The String Value with which to replace the pattern String",
                "type": "String",
                "default": "Global Variable"
            }
        ],
        "return": "String",
        "guid": "000000012D61",
        "en-US": "String Replace",
        "es-MX": "Reemplazo de cadena",
        "fr-FR": "Remplacement de la chaîne",
        "ja-JP": "文字列の置換",
        "pt-BR": "Substituição de String",
        "tr-TR": "Dizgi Değiştir",
        "zh-CN": "字符串替换",
        "de-DE": "String Replace",
        "es-ES": "String Replace",
        "it-IT": "String Replace",
        "ko-KR": "String Replace",
        "pl-PL": "String Replace",
        "ru-RU": "String Replace",
        "th-TH": "String Replace",
        "zh-TW": "String Replace"
    },
    "__strSplit__": {
        "description": "Results in an Array of String Values. These String Values will be built from the specified String Value, split around the separator String.",
        "args": [
            {
                "name": "String",
                "description": "The String Value to split.",
                "type": "String",
                "default": "Global Variable"
            },
            {
                "name": "Separator",
                "description": "The separator String with which to split the String Value.",
                "type": "String",
                "default": "Global Variable"
            }
        ],
        "return": {
            "Array": "String"
        },
        "guid": "000000012D60",
        "en-US": "String Split",
        "es-MX": "Separación de cadena",
        "fr-FR": "Division de la chaîne",
        "ja-JP": "文字列の分割",
        "pt-BR": "Divisão de String",
        "tr-TR": "Dizgiyi Ayır",
        "zh-CN": "字符串分割",
        "de-DE": "String Split",
        "es-ES": "String Split",
        "it-IT": "String Split",
        "ko-KR": "String Split",
        "pl-PL": "String Split",
        "ru-RU": "String Split",
        "th-TH": "String Split",
        "zh-TW": "String Split"
    },
    "__substring__": {
        "description": "The substring of the provided string.",
        "args": [
            {
                "name": "String",
                "description": "The string value from which to build the substring.",
                "type": "String",
                "default": "Global Variable"
            },
            {
                "name": "Substring Start Index",
                "description": "Specifies the character that will start the substring (with 0 as the first character, 1 as the second character, etc.).",
                "type": "unsigned int",
                "default": 0
            },
            {
                "name": "Substring Length",
                "description": "Specifies the number of characters in the substring.",
                "type": "unsigned int",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "String",
        "guid": "0000000124A6",
        "en-US": "String Slice",
        "es-MX": "Extracción de cadena",
        "fr-FR": "Section de la chaîne",
        "ja-JP": "文字列の切り取り",
        "pt-BR": "Fatia da String",
        "tr-TR": "Dizgi Kesiti",
        "zh-CN": "截取字符串",
        "de-DE": "String Slice",
        "es-ES": "String Slice",
        "it-IT": "String Slice",
        "ko-KR": "String Slice",
        "pl-PL": "String Slice",
        "ru-RU": "String Slice",
        "th-TH": "String Slice",
        "zh-TW": "String Slice"
    },
    "__subtract__": {
        "guid": "00000000C40A",
        "description": "The difference between two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Subtract",
        "es-MX": "Restar",
        "fr-FR": "Soustraction",
        "ja-JP": "減算",
        "pt-BR": "Subtrair",
        "th-TH": "ลบ",
        "tr-TR": "Çıkar",
        "zh-CN": "减",
        "de-DE": "Subtract",
        "es-ES": "Subtract",
        "it-IT": "Subtract",
        "ko-KR": "Subtract",
        "pl-PL": "Subtract",
        "ru-RU": "Subtract",
        "zh-TW": "Subtract"
    },
    "__team__": {
        "args": [
            {
                "name": "TEAM",
                "type": "TeamLiteral",
                "default": "ALL",
                "description": "A Team constant."
            }
        ],
        "isConstant": true,
        "guid": "00000000BB26",
        "return": "Team",
        "en-US": "Team",
        "es-ES": "Equipo",
        "es-MX": "Equipo",
        "fr-FR": "Équipe",
        "it-IT": "Squadra",
        "ja-JP": "チーム",
        "pl-PL": "Drużyna",
        "pt-BR": "Equipe",
        "ru-RU": "Команда",
        "th-TH": "ทีม",
        "tr-TR": "Takım",
        "zh-CN": "队伍",
        "de-DE": "Team",
        "ko-KR": "Team",
        "zh-TW": "Team"
    },
    "__valueInArray__": {
        "description": "The value found at a specific element of an array. Results in 0 if the element does not exist.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose element to acquire.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "INDEX",
                "description": "The index of the element to acquire.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B52A",
        "en-US": "Value In Array",
        "es-MX": "Valor en la matriz",
        "fr-FR": "Valeur dans le tableau",
        "ja-JP": "配列内の値",
        "pt-BR": "Valor na Matriz",
        "tr-TR": "Dizindeki Değer",
        "zh-CN": "数组中的值",
        "de-DE": "Value In Array",
        "es-ES": "Value In Array",
        "it-IT": "Value In Array",
        "ko-KR": "Value In Array",
        "pl-PL": "Value In Array",
        "ru-RU": "Value In Array",
        "th-TH": "Value In Array",
        "zh-TW": "Value In Array"
    },
    "__workshopSettingCombo__": {
        "description": "Provides the value (a choice of Custom Strings) of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice.",
        "args": [
            {
                "name": "Category",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "Name",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "Default",
                "description": "The default value for this setting.",
                "type": "UnsignedIntLiteral",
                "default": 0
            },
            {
                "name": "Options",
                "description": "The options for this setting.",
                "type": {
                    "Array": "CustomStringLiteral"
                },
                "default": "Array"
            },
            {
                "name": "Sort Order",
                "description": "The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.",
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "return": "unsigned int",
        "guid": "000000011CC0",
        "en-US": "Workshop Setting Combo",
        "es-MX": "Combinado de la configuración del Workshop",
        "fr-FR": "Paramètre combo de la Forge",
        "ja-JP": "ワークショップ設定コンボ",
        "pt-BR": "Caixa de Combinação de Configurações do Workshop",
        "tr-TR": "Atölye Açılan Kutu Ayarı",
        "zh-CN": "地图工坊设置组合",
        "de-DE": "Workshop Setting Combo",
        "es-ES": "Workshop Setting Combo",
        "it-IT": "Workshop Setting Combo",
        "ko-KR": "Workshop Setting Combo",
        "pl-PL": "Workshop Setting Combo",
        "ru-RU": "Workshop Setting Combo",
        "th-TH": "Workshop Setting Combo",
        "zh-TW": "Workshop Setting Combo"
    },
    "__workshopSettingHero__": {
        "description": "Provides the value of a new hero setting that will appear in the Workshop Settings card as a hero list.",
        "args": [
            {
                "name": "Category",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "Name",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "Default",
                "description": "The default value for this setting.",
                "type": "HeroLiteral",
                "default": "Ana"
            },
            {
                "name": "Sort Order",
                "description": "The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.",
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "return": "Hero",
        "guid": "000000011CBC",
        "en-US": "Workshop Setting Hero",
        "es-MX": "Configuración de héroe del Workshop",
        "fr-FR": "Paramètre héros de la Forge",
        "ja-JP": "ワークショップ設定ヒーロー",
        "pt-BR": "Herói de Configuração do Workshop",
        "tr-TR": "Atölye Kahraman Ayarı",
        "zh-CN": "地图工坊设置英雄",
        "de-DE": "Workshop Setting Hero",
        "es-ES": "Workshop Setting Hero",
        "it-IT": "Workshop Setting Hero",
        "ko-KR": "Workshop Setting Hero",
        "pl-PL": "Workshop Setting Hero",
        "ru-RU": "Workshop Setting Hero",
        "th-TH": "Workshop Setting Hero",
        "zh-TW": "Workshop Setting Hero"
    },
    "__workshopSettingInteger__": {
        "description": "Provides the value of a new integer setting that will appear in the workshop settings card as a slider.",
        "args": [
            {
                "name": "CATEGORY",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "NAME",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "DEFAULT",
                "description": "",
                "type": "IntLiteral",
                "default": 0
            },
            {
                "name": "MIN",
                "description": "",
                "type": "IntLiteral",
                "default": 0
            },
            {
                "name": "MAX",
                "description": "",
                "type": "IntLiteral",
                "default": 100
            },
            {
                "name": "SORT ORDER",
                "description": "",
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "000000011375",
        "en-US": "Workshop Setting Integer",
        "es-MX": "Número entero de la configuración del Workshop",
        "fr-FR": "Paramètre entier de la Forge",
        "ja-JP": "ワークショップの設定（整数）",
        "pt-BR": "Inteiro de Configuração do Workshop",
        "tr-TR": "Atölye Ayarları Tam Sayısı",
        "zh-CN": "地图工坊设置整数",
        "de-DE": "Workshop Setting Integer",
        "es-ES": "Workshop Setting Integer",
        "it-IT": "Workshop Setting Integer",
        "ko-KR": "Workshop Setting Integer",
        "pl-PL": "Workshop Setting Integer",
        "ru-RU": "Workshop Setting Integer",
        "th-TH": "Workshop Setting Integer",
        "zh-TW": "Workshop Setting Integer"
    },
    "__workshopSettingReal__": {
        "description": "Provides the value of a new real number setting that will appear in the workshop settings card as a slider.",
        "args": [
            {
                "name": "CATEGORY",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "NAME",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "DEFAULT",
                "description": "",
                "type": "FloatLiteral",
                "default": 0
            },
            {
                "name": "MIN",
                "description": "",
                "type": "FloatLiteral",
                "default": 0
            },
            {
                "name": "MAX",
                "description": "",
                "type": "FloatLiteral",
                "default": 100
            },
            {
                "name": "SORT ORDER",
                "description": "",
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000001137B",
        "en-US": "Workshop Setting Real",
        "es-MX": "Configuración del Workshop real",
        "fr-FR": "Paramètre réel de la Forge",
        "ja-JP": "ワークショップの設定（実数）",
        "pt-BR": "Real de Configuração do Workshop",
        "tr-TR": "Atölye Ayarı Gerçek Sayısı",
        "zh-CN": "地图工坊设置实数",
        "de-DE": "Workshop Setting Real",
        "es-ES": "Workshop Setting Real",
        "it-IT": "Workshop Setting Real",
        "ko-KR": "Workshop Setting Real",
        "pl-PL": "Workshop Setting Real",
        "ru-RU": "Workshop Setting Real",
        "th-TH": "Workshop Setting Real",
        "zh-TW": "Workshop Setting Real"
    },
    "__workshopSettingToggle__": {
        "description": "Provides the value (true or false) of a new toggle setting that will appear in the workshop settings card as a checkbox.",
        "args": [
            {
                "name": "CATEGORY",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "NAME",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral"
            },
            {
                "name": "DEFAULT",
                "description": "",
                "type": "BoolLiteral",
                "default": 0
            },
            {
                "name": "SORT ORDER",
                "description": "",
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000001136B",
        "en-US": "Workshop Setting Toggle",
        "es-MX": "Alternado de configuración del Workshop",
        "fr-FR": "Activerdésactiver le paramètre de la Forge",
        "ja-JP": "ワークショップの設定の切り替え",
        "pt-BR": "Alternar Configuração do Workshop",
        "tr-TR": "Atölye Ayarını AçKapat",
        "zh-CN": "地图工坊设置开关",
        "de-DE": "Workshop Setting Toggle",
        "es-ES": "Workshop Setting Toggle",
        "it-IT": "Workshop Setting Toggle",
        "ko-KR": "Workshop Setting Toggle",
        "pl-PL": "Workshop Setting Toggle",
        "ru-RU": "Workshop Setting Toggle",
        "th-TH": "Workshop Setting Toggle",
        "zh-TW": "Workshop Setting Toggle"
    },
    "__xComponentOf__": {
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B26F",
        "en-US": "X Component Of",
        "es-MX": "Componente X de",
        "fr-FR": "Composante X de",
        "ja-JP": "X成分: ",
        "pt-BR": "Componente X de",
        "tr-TR": "X Bileşeni",
        "zh-CN": "X方向分量",
        "de-DE": "X Component Of",
        "es-ES": "X Component Of",
        "it-IT": "X Component Of",
        "ko-KR": "X Component Of",
        "pl-PL": "X Component Of",
        "ru-RU": "X Component Of",
        "th-TH": "X Component Of",
        "zh-TW": "X Component Of"
    },
    "__yComponentOf__": {
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B270",
        "en-US": "Y Component Of",
        "es-MX": "Componente Y de",
        "fr-FR": "Composante Y de",
        "ja-JP": "Y成分: ",
        "pt-BR": "Componente Y de",
        "tr-TR": "Y Bileşeni",
        "zh-CN": "Y方向分量",
        "de-DE": "Y Component Of",
        "es-ES": "Y Component Of",
        "it-IT": "Y Component Of",
        "ko-KR": "Y Component Of",
        "pl-PL": "Y Component Of",
        "ru-RU": "Y Component Of",
        "th-TH": "Y Component Of",
        "zh-TW": "Y Component Of"
    },
    "__zComponentOf__": {
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B272",
        "en-US": "Z Component Of",
        "es-MX": "Componente Z de",
        "fr-FR": "Composante Z de",
        "ja-JP": "Z成分: ",
        "pt-BR": "Componente Z de",
        "tr-TR": "Z Bileşeni",
        "zh-CN": "Z方向分量",
        "de-DE": "Z Component Of",
        "es-ES": "Z Component Of",
        "it-IT": "Z Component Of",
        "ko-KR": "Z Component Of",
        "pl-PL": "Z Component Of",
        "ru-RU": "Z Component Of",
        "th-TH": "Z Component Of",
        "zh-TW": "Z Component Of"
    },
    "abilityIconString": {
        "description": "Converts a Hero and Button parameter into a string that shows up as an icon (up to 4 per string).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero for the ability that will be converted to an icon.",
                "type": "Hero",
                "default": "HERO"
            },
            {
                "name": "Button",
                "description": "The button for the ability that will be converted to an icon.",
                "type": "Button",
                "default": "Button"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "000000010B52",
        "en-US": "Ability Icon String",
        "es-MX": "Cadena de ícono de habilidad",
        "fr-FR": "Chaîne d’icône de la capacité",
        "ja-JP": "アビリティアイコンストリング",
        "pt-BR": "String de Ícone de Habilidade",
        "tr-TR": "Kabiliyet Simgesi Dizgisi",
        "zh-CN": "技能图标字符串",
        "de-DE": "Ability Icon String",
        "es-ES": "Ability Icon String",
        "it-IT": "Ability Icon String",
        "ko-KR": "Ability Icon String",
        "pl-PL": "Ability Icon String",
        "ru-RU": "Ability Icon String",
        "th-TH": "Ability Icon String",
        "zh-TW": "Ability Icon String"
    },
    "abs": {
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C358",
        "en-US": "Absolute Value",
        "es-MX": "Valor absoluto",
        "fr-FR": "Valeur absolue",
        "ja-JP": "絶対値",
        "pt-BR": "Valor Absoluto",
        "th-TH": "ค่าสัมบูรณ์",
        "tr-TR": "Mutlak Değer",
        "zh-CN": "绝对值",
        "de-DE": "Absolute Value",
        "es-ES": "Absolute Value",
        "it-IT": "Absolute Value",
        "ko-KR": "Absolute Value",
        "pl-PL": "Absolute Value",
        "ru-RU": "Absolute Value",
        "zh-TW": "Absolute Value"
    },
    "acos": {
        "description": "Arccosine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C807",
        "en-US": "Arccosine In Radians",
        "es-MX": "Arcocoseno en radianes",
        "fr-FR": "Arc cosinus en radians",
        "ja-JP": "ラジアンのアークコサイン",
        "pt-BR": "Arco Cosseno em Radianos",
        "tr-TR": "Radyan Cinsinden Arkkosinüs",
        "zh-CN": "以弧度为单位的反余弦值",
        "de-DE": "Arccosine In Radians",
        "es-ES": "Arccosine In Radians",
        "it-IT": "Arccosine In Radians",
        "ko-KR": "Arccosine In Radians",
        "pl-PL": "Arccosine In Radians",
        "ru-RU": "Arccosine In Radians",
        "th-TH": "Arccosine In Radians",
        "zh-TW": "Arccosine In Radians"
    },
    "acosDeg": {
        "description": "Arccosine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C809",
        "en-US": "Arccosine In Degrees",
        "es-MX": "Arcocoseno en grados",
        "fr-FR": "Arc cosinus en degrés",
        "ja-JP": "度単位のアークコサイン",
        "pt-BR": "Arco Cosseno em Graus",
        "tr-TR": "Derece Cinsinden Arkkosinüs",
        "zh-CN": "以角度为单位的反余弦值",
        "de-DE": "Arccosine In Degrees",
        "es-ES": "Arccosine In Degrees",
        "it-IT": "Arccosine In Degrees",
        "ko-KR": "Arccosine In Degrees",
        "pl-PL": "Arccosine In Degrees",
        "ru-RU": "Arccosine In Degrees",
        "th-TH": "Arccosine In Degrees",
        "zh-TW": "Arccosine In Degrees"
    },
    "angleBetweenVectors": {
        "description": "The angle in degrees between two directional vectors (no normalization required).",
        "args": [
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "Direction",
                "default": "VECTOR"
            },
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "Direction",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C813",
        "en-US": "Angle Between Vectors",
        "es-MX": "Ángulo entre vectores",
        "fr-FR": "Angle entre deux vecteurs",
        "ja-JP": "ベクトル間角度",
        "pt-BR": "Ângulo entre Vetores",
        "tr-TR": "Vektörler Arasındaki Açı",
        "zh-CN": "矢量间夹角",
        "de-DE": "Angle Between Vectors",
        "es-ES": "Angle Between Vectors",
        "it-IT": "Angle Between Vectors",
        "ko-KR": "Angle Between Vectors",
        "pl-PL": "Angle Between Vectors",
        "ru-RU": "Angle Between Vectors",
        "th-TH": "Angle Between Vectors",
        "zh-TW": "Angle Between Vectors"
    },
    "angleDifference": {
        "description": "The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B282",
        "en-US": "Angle Difference",
        "es-MX": "Diferencia de ángulo",
        "fr-FR": "Différence entre angles",
        "ja-JP": "角度差",
        "pt-BR": "Diferença de Ângulo",
        "tr-TR": "Açı Farkı",
        "zh-CN": "角度差",
        "de-DE": "Angle Difference",
        "es-ES": "Angle Difference",
        "it-IT": "Angle Difference",
        "ko-KR": "Angle Difference",
        "pl-PL": "Angle Difference",
        "ru-RU": "Angle Difference",
        "th-TH": "Angle Difference",
        "zh-TW": "Angle Difference"
    },
    "angleToDirection": {
        "description": "The unit-length direction vector corresponding to the specified angles.",
        "args": [
            {
                "name": "HORIZONTAL ANGLE",
                "description": "The horizontal angle in degrees used to construct the resulting vector.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "VERTICAL ANGLE",
                "description": "The vertical angle in degrees used to construct the resulting vector.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000BB2D",
        "en-US": "Direction From Angles",
        "es-MX": "Dirección desde los ángulos",
        "fr-FR": "Direction depuis des angles",
        "ja-JP": "角度による方向",
        "pt-BR": "Direção a partir dos Ângulos",
        "tr-TR": "Açıların Yönü",
        "zh-CN": "与此角度的相对方向",
        "de-DE": "Direction From Angles",
        "es-ES": "Direction From Angles",
        "it-IT": "Direction From Angles",
        "ko-KR": "Direction From Angles",
        "pl-PL": "Direction From Angles",
        "ru-RU": "Direction From Angles",
        "th-TH": "Direction From Angles",
        "zh-TW": "Direction From Angles"
    },
    "asin": {
        "description": "Arcsine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C803",
        "en-US": "Arcsine In Radians",
        "es-MX": "Arcoseno en radianes",
        "fr-FR": "Arc sinus en radians",
        "ja-JP": "ラジアンのアークサイン",
        "pt-BR": "Arco Seno em Radianos",
        "tr-TR": "Radyan Cinsinden Arksinüs",
        "zh-CN": "以弧度为单位的反正弦值",
        "de-DE": "Arcsine In Radians",
        "es-ES": "Arcsine In Radians",
        "it-IT": "Arcsine In Radians",
        "ko-KR": "Arcsine In Radians",
        "pl-PL": "Arcsine In Radians",
        "ru-RU": "Arcsine In Radians",
        "th-TH": "Arcsine In Radians",
        "zh-TW": "Arcsine In Radians"
    },
    "asinDeg": {
        "description": "Arcsine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C805",
        "en-US": "Arcsine In Degrees",
        "es-MX": "Arcoseno en grados",
        "fr-FR": "Arc sinus en degrés",
        "ja-JP": "度単位のアークサイン",
        "pt-BR": "Arco Seno em Graus",
        "tr-TR": "Derece Cinsinden Arksinüs",
        "zh-CN": "以角度为单位的反正弦值",
        "de-DE": "Arcsine In Degrees",
        "es-ES": "Arcsine In Degrees",
        "it-IT": "Arcsine In Degrees",
        "ko-KR": "Arcsine In Degrees",
        "pl-PL": "Arcsine In Degrees",
        "ru-RU": "Arcsine In Degrees",
        "th-TH": "Arcsine In Degrees",
        "zh-TW": "Arcsine In Degrees"
    },
    "atan2": {
        "description": "Arctangent in radians of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7FF",
        "en-US": "Arctangent In Radians",
        "es-MX": "Arcotangente en radianes",
        "fr-FR": "Arc tangente en radians",
        "ja-JP": "ラジアンのアークタンジェント",
        "pt-BR": "Arco Tangente em Radianos",
        "tr-TR": "Radyan Cinsinden Arktanjant",
        "zh-CN": "以弧度为单位的反正切值",
        "de-DE": "Arctangent In Radians",
        "es-ES": "Arctangent In Radians",
        "it-IT": "Arctangent In Radians",
        "ko-KR": "Arctangent In Radians",
        "pl-PL": "Arctangent In Radians",
        "ru-RU": "Arctangent In Radians",
        "th-TH": "Arctangent In Radians",
        "zh-TW": "Arctangent In Radians"
    },
    "atan2Deg": {
        "description": "Arctangent in degrees of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C801",
        "en-US": "Arctangent In Degrees",
        "es-MX": "Arcotangente en grados",
        "fr-FR": "Arc tangente en degrés",
        "ja-JP": "度単位のアークタンジェント",
        "pt-BR": "Arco Tangente em Graus",
        "tr-TR": "Derece Cinsinden Arktanjant",
        "zh-CN": "以角度为单位的反正切值",
        "de-DE": "Arctangent In Degrees",
        "es-ES": "Arctangent In Degrees",
        "it-IT": "Arctangent In Degrees",
        "ko-KR": "Arctangent In Degrees",
        "pl-PL": "Arctangent In Degrees",
        "ru-RU": "Arctangent In Degrees",
        "th-TH": "Arctangent In Degrees",
        "zh-TW": "Arctangent In Degrees"
    },
    "attacker": {
        "guid": "00000000B32F",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "en-US": "Attacker",
        "es-MX": "Atacante",
        "fr-FR": "Attaquant",
        "ja-JP": "攻撃者",
        "pt-BR": "Atacante",
        "tr-TR": "Saldırgan",
        "zh-CN": "攻击方",
        "de-DE": "Attacker",
        "es-ES": "Attacker",
        "it-IT": "Attacker",
        "ko-KR": "Attacker",
        "pl-PL": "Attacker",
        "ru-RU": "Attacker",
        "th-TH": "Attacker",
        "zh-TW": "Attacker"
    },
    "buttonString": {
        "description": "Converts a button parameter into a string that shows up based on the player's input bindings. This value cannot be stored in variables.",
        "args": [
            {
                "name": "BUTTON",
                "description": "The button for the input binding that will be converted to a string.",
                "type": "Button",
                "default": "Button"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "guid": "0000000111B7",
        "en-US": "Input Binding String",
        "es-MX": "Cadena de teclas de atajo",
        "fr-FR": "Chaîne de liaison d’entrée",
        "ja-JP": "入力割り当ての文字列",
        "pt-BR": "String de Mapeamento de Entrada",
        "th-TH": "สตริงการผูกอินพุต",
        "tr-TR": "Girdi Ataması Dizgisi",
        "zh-CN": "输入绑定字符串",
        "de-DE": "Input Binding String",
        "es-ES": "Input Binding String",
        "it-IT": "Input Binding String",
        "ko-KR": "Input Binding String",
        "pl-PL": "Input Binding String",
        "ru-RU": "Input Binding String",
        "zh-TW": "Input Binding String"
    },
    "cos": {
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C342",
        "en-US": "Cosine From Radians",
        "es-MX": "Coseno en radianes",
        "fr-FR": "Cosinus en radians",
        "ja-JP": "ラジアンのコサイン",
        "pt-BR": "Cosseno de Radianos",
        "tr-TR": "Radyan Cinsinden Kosinüs",
        "zh-CN": "弧度的余弦值",
        "de-DE": "Cosine From Radians",
        "es-ES": "Cosine From Radians",
        "it-IT": "Cosine From Radians",
        "ko-KR": "Cosine From Radians",
        "pl-PL": "Cosine From Radians",
        "ru-RU": "Cosine From Radians",
        "th-TH": "Cosine From Radians",
        "zh-TW": "Cosine From Radians"
    },
    "cosDeg": {
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C33E",
        "en-US": "Cosine From Degrees",
        "es-MX": "Coseno en grados",
        "fr-FR": "Cosinus en degrés",
        "ja-JP": "度のコサイン",
        "pt-BR": "Cosseno de Graus",
        "th-TH": "โคไซน์จากองศา",
        "tr-TR": "Derece Cinsinden Kosinüs",
        "zh-CN": "角度的余弦值",
        "de-DE": "Cosine From Degrees",
        "es-ES": "Cosine From Degrees",
        "it-IT": "Cosine From Degrees",
        "ko-KR": "Cosine From Degrees",
        "pl-PL": "Cosine From Degrees",
        "ru-RU": "Cosine From Degrees",
        "zh-TW": "Cosine From Degrees"
    },
    "crossProduct": {
        "description": "The cross product of the specified values. (Left cross up equals forward.)",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand-side vector operand of the cross product.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "The right-hand-side vector operand of the cross product.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000C35D",
        "en-US": "Cross Product",
        "es-MX": "Producto vectorial",
        "fr-FR": "Produit croisé",
        "ja-JP": "クロス積",
        "pt-BR": "Produto Vetorial",
        "th-TH": "ผลคูณไขว้",
        "tr-TR": "Çapraz Çarpım",
        "zh-CN": "矢量积",
        "de-DE": "Cross Product",
        "es-ES": "Cross Product",
        "it-IT": "Cross Product",
        "ko-KR": "Cross Product",
        "pl-PL": "Cross Product",
        "ru-RU": "Cross Product",
        "zh-TW": "Cross Product"
    },
    "directionTowards": {
        "description": "The unit-length direction vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting direction vector will point.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position to which the resulting direction vector will point.",
                "type": "Position",
                "default": "VECTOR"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Direction",
        "guid": "00000000B1EA",
        "en-US": "Direction Towards",
        "es-MX": "Dirección hacia",
        "fr-FR": "Direction",
        "ja-JP": "指す方向: ",
        "pt-BR": "Direção Rumo a",
        "tr-TR": "Hareket Yönü",
        "zh-CN": "方向",
        "de-DE": "Direction Towards",
        "es-ES": "Direction Towards",
        "it-IT": "Direction Towards",
        "ko-KR": "Direction Towards",
        "pl-PL": "Direction Towards",
        "ru-RU": "Direction Towards",
        "th-TH": "Direction Towards",
        "zh-TW": "Direction Towards"
    },
    "distance": {
        "description": "The distance between two positions in meters.",
        "args": [
            {
                "name": "START POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "Position",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000B1E7",
        "en-US": "Distance Between",
        "es-MX": "Distancia entre",
        "fr-FR": "Distance entre",
        "ja-JP": "二点間の距離",
        "pt-BR": "Distância entre",
        "tr-TR": "Aradaki Mesafe",
        "zh-CN": "相距距离",
        "de-DE": "Distance Between",
        "es-ES": "Distance Between",
        "it-IT": "Distance Between",
        "ko-KR": "Distance Between",
        "pl-PL": "Distance Between",
        "ru-RU": "Distance Between",
        "th-TH": "Distance Between",
        "zh-TW": "Distance Between"
    },
    "dotProduct": {
        "description": "The dot product of the specified values.",
        "args": [
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C35A",
        "en-US": "Dot Product",
        "es-MX": "Producto escalar",
        "fr-FR": "Produit scalaire",
        "ja-JP": "ドット積",
        "pt-BR": "Produto Escalar",
        "th-TH": "ผลคูณจุด",
        "tr-TR": "Nokta Çarpımı",
        "zh-CN": "标量积",
        "de-DE": "Dot Product",
        "es-ES": "Dot Product",
        "it-IT": "Dot Product",
        "ko-KR": "Dot Product",
        "pl-PL": "Dot Product",
        "ru-RU": "Dot Product",
        "zh-TW": "Dot Product"
    },
    "entityExists": {
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": [
                    "Player",
                    "EntityId"
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "bool",
        "guid": "00000000B619",
        "en-US": "Entity Exists",
        "es-MX": "La entidad existe",
        "fr-FR": "Existence de l’entité",
        "ja-JP": "エンティティが存在している",
        "pt-BR": "Entidade Existe",
        "tr-TR": "Varlık Mevcut",
        "zh-CN": "实体存在",
        "de-DE": "Entity Exists",
        "es-ES": "Entity Exists",
        "it-IT": "Entity Exists",
        "ko-KR": "Entity Exists",
        "pl-PL": "Entity Exists",
        "ru-RU": "Entity Exists",
        "th-TH": "Entity Exists",
        "zh-TW": "Entity Exists"
    },
    "evalOnce": {
        "description": "Makes a copy of the provided value. Useful for selectively not reevaluating certain parts of a value, such as creating effects in a loop.",
        "args": [
            {
                "name": "Input Value",
                "description": "The value that will be only evaluated once.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": 0
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "000000012214",
        "en-US": "Evaluate Once",
        "es-MX": "Evaluar una vez",
        "fr-FR": "Évaluer une fois",
        "ja-JP": "一度だけ評価",
        "pt-BR": "Avaliar Uma Vez",
        "tr-TR": "Bir Kere Değerlendir",
        "zh-CN": "单次赋值",
        "de-DE": "Evaluate Once",
        "es-ES": "Evaluate Once",
        "it-IT": "Evaluate Once",
        "ko-KR": "Evaluate Once",
        "pl-PL": "Evaluate Once",
        "ru-RU": "Evaluate Once",
        "th-TH": "Evaluate Once",
        "zh-TW": "Evaluate Once"
    },
    "eventAbility": {
        "description": "The ability for the event currently being processed by this rule associated by button.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Button",
        "guid": "0000000109CF",
        "en-US": "Event Ability",
        "es-MX": "Evento de habilidad",
        "fr-FR": "Capacité d’évènement",
        "ja-JP": "イベントアビリティ",
        "pt-BR": "Habilidade do Evento",
        "tr-TR": "Etkinlik Kabiliyeti",
        "zh-CN": "事件技能",
        "de-DE": "Event Ability",
        "es-ES": "Event Ability",
        "it-IT": "Event Ability",
        "ko-KR": "Event Ability",
        "pl-PL": "Event Ability",
        "ru-RU": "Event Ability",
        "th-TH": "Event Ability",
        "zh-TW": "Event Ability"
    },
    "eventDamage": {
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null,
        "return": "unsigned float",
        "guid": "00000000C635",
        "en-US": "Event Damage",
        "es-MX": "Daño de evento",
        "fr-FR": "Dégâts d’évènement",
        "ja-JP": "イベント・ダメージ",
        "pt-BR": "Dano do Evento",
        "tr-TR": "Etkinlik Hasarı",
        "zh-CN": "事件伤害",
        "de-DE": "Event Damage",
        "es-ES": "Event Damage",
        "it-IT": "Event Damage",
        "ko-KR": "Event Damage",
        "pl-PL": "Event Damage",
        "ru-RU": "Event Damage",
        "th-TH": "Event Damage",
        "zh-TW": "Event Damage"
    },
    "eventDirection": {
        "description": "The incoming direction for the event currently being processed by this rule.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "0000000107D5",
        "en-US": "Event Direction",
        "es-MX": "Dirección del evento",
        "fr-FR": "Direction de l’évènement",
        "ja-JP": "イベント方向",
        "pt-BR": "Direção do Evento",
        "tr-TR": "Etkinlik Yönü",
        "zh-CN": "事件方向",
        "de-DE": "Event Direction",
        "es-ES": "Event Direction",
        "it-IT": "Event Direction",
        "ko-KR": "Event Direction",
        "pl-PL": "Event Direction",
        "ru-RU": "Event Direction",
        "th-TH": "Event Direction",
        "zh-TW": "Event Direction"
    },
    "eventHealing": {
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null,
        "return": "unsigned float",
        "guid": "00000000CC33",
        "en-US": "Event Healing",
        "es-MX": "Sanación de evento",
        "fr-FR": "Évènement soin",
        "ja-JP": "イベント回復",
        "pt-BR": "Cura no Evento",
        "th-TH": "การฮีลในอีเวนต์",
        "tr-TR": "Etkinlik İyileştirmesi",
        "zh-CN": "事件治疗",
        "de-DE": "Event Healing",
        "es-ES": "Event Healing",
        "it-IT": "Event Healing",
        "ko-KR": "Event Healing",
        "pl-PL": "Event Healing",
        "ru-RU": "Event Healing",
        "zh-TW": "Event Healing"
    },
    "eventPlayer": {
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B331",
        "en-US": "Event Player",
        "es-MX": "Jugador del evento",
        "fr-FR": "Joueur exécutant",
        "ja-JP": "イベント・プレイヤー",
        "pt-BR": "Jogador do Evento",
        "tr-TR": "Etkinlik Oyuncusu",
        "zh-CN": "事件玩家",
        "de-DE": "Event Player",
        "es-ES": "Event Player",
        "it-IT": "Event Player",
        "ko-KR": "Event Player",
        "pl-PL": "Event Player",
        "ru-RU": "Event Player",
        "th-TH": "Event Player",
        "zh-TW": "Event Player"
    },
    "eventWasCriticalHit": {
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null,
        "return": "bool",
        "guid": "00000000C637",
        "en-US": "Event Was Critical Hit",
        "es-MX": "El evento fue un golpe crítico",
        "fr-FR": "L’évènement était un coup critique",
        "ja-JP": "イベントがクリティカル・ヒットだった",
        "pt-BR": "Evento foi Golpe Crítico",
        "tr-TR": "Etkinlik Kritik Vuruştu",
        "zh-CN": "事件暴击",
        "de-DE": "Event Was Critical Hit",
        "es-ES": "Event Was Critical Hit",
        "it-IT": "Event Was Critical Hit",
        "ko-KR": "Event Was Critical Hit",
        "pl-PL": "Event Was Critical Hit",
        "ru-RU": "Event Was Critical Hit",
        "th-TH": "Event Was Critical Hit",
        "zh-TW": "Event Was Critical Hit"
    },
    "eventWasEnvironment": {
        "description": "Whether the elimination was due to the environment for the event currently being processed by this rule.",
        "args": null,
        "return": "bool",
        "guid": "00000001107C",
        "en-US": "Event Was Environment",
        "es-MX": "Evento fue entorno",
        "fr-FR": "L’évènement était une élimination due à l’environnement",
        "ja-JP": "イベントは環境だった",
        "pt-BR": "Evento foi Ambiente",
        "tr-TR": "Etkinlik Ortam",
        "zh-CN": "事件为环境事件",
        "de-DE": "Event Was Environment",
        "es-ES": "Event Was Environment",
        "it-IT": "Event Was Environment",
        "ko-KR": "Event Was Environment",
        "pl-PL": "Event Was Environment",
        "ru-RU": "Event Was Environment",
        "th-TH": "Event Was Environment",
        "zh-TW": "Event Was Environment"
    },
    "eventWasHealthPack": {
        "description": "Whether the healing was from a health pack for the event currently being processed by this rule.",
        "args": null,
        "return": "bool",
        "guid": "00000000FC80",
        "en-US": "Event Was Health Pack",
        "es-MX": "Evento fue suministro de salud",
        "fr-FR": "L’évènement était un kit de soins",
        "ja-JP": "ライフ・パックのイベントだった",
        "pt-BR": "Evento foi kit Médico",
        "tr-TR": "Etkinlik Sağlık Kiti",
        "zh-CN": "事件为急救包",
        "de-DE": "Event Was Health Pack",
        "es-ES": "Event Was Health Pack",
        "it-IT": "Event Was Health Pack",
        "ko-KR": "Event Was Health Pack",
        "pl-PL": "Event Was Health Pack",
        "ru-RU": "Event Was Health Pack",
        "th-TH": "Event Was Health Pack",
        "zh-TW": "Event Was Health Pack"
    },
    "false": {
        "description": "The boolean value of false.",
        "args": null,
        "isConstant": true,
        "return": "BoolLiteral",
        "guid": "00000000AC3A",
        "en-US": "False",
        "es-MX": "Falso",
        "fr-FR": "Faux",
        "th-TH": "เท็จ",
        "tr-TR": "Yanlış",
        "zh-CN": "假",
        "de-DE": "False",
        "es-ES": "False",
        "it-IT": "False",
        "ja-JP": "False",
        "ko-KR": "False",
        "pl-PL": "False",
        "pt-BR": "False",
        "ru-RU": "False",
        "zh-TW": "False"
    },
    "getAllHeroes": {
        "guid": "00000000BF58",
        "description": "The array of all heroes in overwatch. The order is as follows:\n        \n        0. Reaper   \n        1. Tracer   \n        2. Mercy    \n        3. Hanzo    \n        4. Torbjorn \n        5. Reinhardt\n        6. Pharah   \n        7. Winston  \n        8. Widowmaker\n        9. Bastion  \n        10. Symmetra \n        11. Zenyatta \n        12. Genji    \n        13. Roadhog  \n        14. Cassidy   \n        15. Junkrat  \n        16. Zarya    \n        17. Soldier  \n        18. Lucio    \n        19. Dva      \n        20. Mei      \n        21. Sombra   \n        22. Doomfist \n        23. Ana      \n        24. Orisa    \n        25. Brigitte \n        26. Moira    \n        27. Hammond  \n        28. Sojourn     \n        29. Ashe \n        30. Echo    \n        31. Baptiste\n        32. Kiriko\n        33. Junker Queen\n        34. Sigma\n",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "en-US": "All Heroes",
        "de-DE": "Alle Helden",
        "es-ES": "Todos los héroes",
        "es-MX": "Todos los héroes",
        "fr-FR": "Tous les personnages",
        "it-IT": "Tutti gli eroi",
        "ja-JP": "全ヒーロー",
        "ko-KR": "모든 영웅",
        "pl-PL": "Wszyscy bohaterowie",
        "pt-BR": "Todos os Heróis",
        "ru-RU": "Все герои",
        "th-TH": "ฮีโร่ทั้งหมด",
        "tr-TR": "Tüm Kahramanlar",
        "zh-CN": "全部英雄",
        "zh-TW": "所有英雄"
    },
    "getAverageServerLoad": {
        "guid": "00000000C997",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "return": "unsigned float",
        "en-US": "Server Load Average",
        "es-MX": "Uso promedio del servidor",
        "fr-FR": "Charge moyenne du serveur",
        "ja-JP": "サーバー負荷平均",
        "pt-BR": "Média de Uso do Servidor",
        "tr-TR": "Sunucu Doluluk Ortalaması",
        "zh-CN": "服务器负载平均值",
        "de-DE": "Server Load Average",
        "es-ES": "Server Load Average",
        "it-IT": "Server Load Average",
        "ko-KR": "Server Load Average",
        "pl-PL": "Server Load Average",
        "ru-RU": "Server Load Average",
        "th-TH": "Server Load Average",
        "zh-TW": "Server Load Average"
    },
    "getCapturePercentage": {
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": [],
        "return": "float",
        "guid": "00000000B358",
        "en-US": "Point Capture Percentage",
        "es-MX": "Porcentaje de captura de punto",
        "fr-FR": "Pourcentage de capture du point",
        "ja-JP": "ポイント・キャプチャーのパーセンテージ",
        "pt-BR": "Percentual de Captura do Ponto",
        "tr-TR": "Nokta Ele Geçirme Yüzdesi",
        "zh-CN": "目标点占领百分比",
        "de-DE": "Point Capture Percentage",
        "es-ES": "Point Capture Percentage",
        "it-IT": "Point Capture Percentage",
        "ko-KR": "Point Capture Percentage",
        "pl-PL": "Point Capture Percentage",
        "ru-RU": "Point Capture Percentage",
        "th-TH": "Point Capture Percentage",
        "zh-TW": "Point Capture Percentage"
    },
    "getClosestPlayer": {
        "description": "The player closest to a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure proximity.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the closest player will come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "canBePutInBoolean": false,
        "hideFromAutocomplete": true,
        "return": "Player",
        "guid": "00000000B1DE",
        "en-US": "Closest Player To",
        "es-MX": "Jugador más cercano a",
        "fr-FR": "Joueur le plus proche de",
        "ja-JP": "最も近いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Próximo a",
        "tr-TR": "En Yakın Oyuncu",
        "zh-CN": "距离最近的玩家",
        "de-DE": "Closest Player To",
        "es-ES": "Closest Player To",
        "it-IT": "Closest Player To",
        "ko-KR": "Closest Player To",
        "pl-PL": "Closest Player To",
        "ru-RU": "Closest Player To",
        "th-TH": "Closest Player To",
        "zh-TW": "Closest Player To"
    },
    "getControlScorePercentage": {
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B37C",
        "en-US": "Control Mode Scoring Percentage",
        "es-MX": "Porcentaje de puntuación en el modo Control",
        "fr-FR": "Pourcentage du score en mode Contrôle",
        "ja-JP": "コントロール・モードのスコア・パーセンテージ",
        "pt-BR": "Percentual de Pontuação no Modo de Controle",
        "tr-TR": "Kontrol Modu Puanlama Yüzdesi",
        "zh-CN": "占领要点模式得分百分比",
        "de-DE": "Control Mode Scoring Percentage",
        "es-ES": "Control Mode Scoring Percentage",
        "it-IT": "Control Mode Scoring Percentage",
        "ko-KR": "Control Mode Scoring Percentage",
        "pl-PL": "Control Mode Scoring Percentage",
        "ru-RU": "Control Mode Scoring Percentage",
        "th-TH": "Control Mode Scoring Percentage",
        "zh-TW": "Control Mode Scoring Percentage"
    },
    "getControlScoringTeam": {
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": [],
        "canBePutInBoolean": false,
        "return": "Team",
        "guid": "00000000B39A",
        "en-US": "Control Mode Scoring Team",
        "es-MX": "Equipo que anota en el modo Control",
        "fr-FR": "Équipe contrôlant le point en mode Contrôle",
        "ja-JP": "コントロール・モードの得点チーム",
        "pt-BR": "Equipe Pontuando no Modo de Controle",
        "tr-TR": "Kontrol Modu Puan Alan Takım",
        "zh-CN": "占领要点模式正在得分的队伍",
        "de-DE": "Control Mode Scoring Team",
        "es-ES": "Control Mode Scoring Team",
        "it-IT": "Control Mode Scoring Team",
        "ko-KR": "Control Mode Scoring Team",
        "pl-PL": "Control Mode Scoring Team",
        "ru-RU": "Control Mode Scoring Team",
        "th-TH": "Control Mode Scoring Team",
        "zh-TW": "Control Mode Scoring Team"
    },
    "getCurrentGamemode": {
        "description": "The current game mode of the custom game.",
        "args": [],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Gamemode",
        "guid": "00000000F163",
        "en-US": "Current Game Mode",
        "es-MX": "Modo de juego actual",
        "fr-FR": "Mode de jeu actuel",
        "ja-JP": "現在のゲーム・モード",
        "pt-BR": "Modo de jogo atual",
        "tr-TR": "Mevcut Oyun Modu",
        "zh-CN": "当前游戏模式",
        "de-DE": "Current Game Mode",
        "es-ES": "Current Game Mode",
        "it-IT": "Current Game Mode",
        "ko-KR": "Current Game Mode",
        "pl-PL": "Current Game Mode",
        "ru-RU": "Current Game Mode",
        "th-TH": "Current Game Mode",
        "zh-TW": "Current Game Mode"
    },
    "getCurrentMap": {
        "guid": "00000000D418",
        "description": "The current map of the custom game.",
        "args": [],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Map",
        "en-US": "Current Map",
        "es-MX": "Mapa actual",
        "fr-FR": "Carte actuelle",
        "ja-JP": "現在のマップ",
        "pt-BR": "Mapa Atual",
        "tr-TR": "Mevcut Harita",
        "zh-CN": "当前地图",
        "de-DE": "Current Map",
        "es-ES": "Current Map",
        "it-IT": "Current Map",
        "ko-KR": "Current Map",
        "pl-PL": "Current Map",
        "ru-RU": "Current Map",
        "th-TH": "Current Map",
        "zh-TW": "Current Map"
    },
    "getCurrentObjective": {
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, hybrid, escort, and control.",
        "args": [],
        "return": "unsigned int",
        "guid": "00000000B37D",
        "en-US": "Objective Index",
        "es-MX": "Índice de objetivo",
        "fr-FR": "Index de l’objectif",
        "ja-JP": "コントロール・モードのサブマップ番号",
        "pt-BR": "Índice do Objetivo",
        "tr-TR": "Hedef İndeksi",
        "zh-CN": "对象索引",
        "de-DE": "Objective Index",
        "es-ES": "Objective Index",
        "it-IT": "Objective Index",
        "ko-KR": "Objective Index",
        "pl-PL": "Objective Index",
        "ru-RU": "Objective Index",
        "th-TH": "Objective Index",
        "zh-TW": "Objective Index"
    },
    "getDamageHeroes": {
        "description": "The array of all damage heroes in overwatch. The order is as follows:\n        \n        0. Reaper\n        1. Tracer\n        2. Hanzo\n        3. Torbjorn\n        4. Pharah\n        5. Widowmaker\n        6. Bastion\n        7. Symmetra\n        8. Genji\n        9. Cassidy\n        10. Junkrat\n        11. Soldier\n        12. Mei\n        13. Sombra\n        14. Ashe\n        15. Echo  \n        16. Kiriko  \n",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40A",
        "en-US": "All Damage Heroes",
        "de-DE": "Alle Schadenshelden",
        "es-MX": "Todos los héroes de daño",
        "fr-FR": "Tous les héros de dégâts",
        "ja-JP": "全ダメージヒーロー",
        "pt-BR": "Todos os Heróis de Dano",
        "th-TH": "ฮีโร่ความเสียหายทั้งหมด",
        "tr-TR": "Tüm Hasar Kahramanları",
        "zh-CN": "所有输出英雄",
        "es-ES": "All Damage Heroes",
        "it-IT": "All Damage Heroes",
        "ko-KR": "All Damage Heroes",
        "pl-PL": "All Damage Heroes",
        "ru-RU": "All Damage Heroes",
        "zh-TW": "All Damage Heroes"
    },
    "getDeadPlayers": {
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B265",
        "en-US": "All Dead Players",
        "es-MX": "Todos los jugadores muertos",
        "fr-FR": "Tous les joueurs morts",
        "ja-JP": "倒れたプレイヤー全員",
        "pt-BR": "Todos os Jogadores Mortos",
        "tr-TR": "Tüm Ölü Oyuncular",
        "zh-CN": "所有死亡玩家",
        "de-DE": "All Dead Players",
        "es-ES": "All Dead Players",
        "it-IT": "All Dead Players",
        "ko-KR": "All Dead Players",
        "pl-PL": "All Dead Players",
        "ru-RU": "All Dead Players",
        "th-TH": "All Dead Players",
        "zh-TW": "All Dead Players"
    },
    "getFarthestPlayer": {
        "description": "The player farthest from a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure distance.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the farthest player will come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "hideFromAutocomplete": true,
        "guid": "00000000B1DF",
        "en-US": "Farthest Player From",
        "es-MX": "Jugador más lejos de",
        "fr-FR": "Joueur le plus éloigné de",
        "ja-JP": "最も遠いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Distante de",
        "tr-TR": "En Uzak Oyuncu",
        "zh-CN": "距离最远的玩家",
        "de-DE": "Farthest Player From",
        "es-ES": "Farthest Player From",
        "it-IT": "Farthest Player From",
        "ko-KR": "Farthest Player From",
        "pl-PL": "Farthest Player From",
        "ru-RU": "Farthest Player From",
        "th-TH": "Farthest Player From",
        "zh-TW": "Farthest Player From"
    },
    "getFlagCarrier": {
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B3A3",
        "en-US": "Player Carrying Flag",
        "es-MX": "Jugador que transporta la bandera",
        "fr-FR": "Joueur portant le drapeau",
        "ja-JP": "フラッグを運んでいる",
        "pt-BR": "Jogador Carregando a Bandeira",
        "tr-TR": "Oyuncu Bayrak Taşıyor",
        "zh-CN": "携带旗帜的玩家",
        "de-DE": "Player Carrying Flag",
        "es-ES": "Player Carrying Flag",
        "it-IT": "Player Carrying Flag",
        "ko-KR": "Player Carrying Flag",
        "pl-PL": "Player Carrying Flag",
        "ru-RU": "Player Carrying Flag",
        "th-TH": "Player Carrying Flag",
        "zh-TW": "Player Carrying Flag"
    },
    "getFlagPosition": {
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B3A0",
        "en-US": "Flag Position",
        "es-MX": "Posición de la bandera",
        "fr-FR": "Position du drapeau",
        "ja-JP": "フラッグの位置",
        "pt-BR": "Posição da Bandeira",
        "tr-TR": "Bayrak Konumu",
        "zh-CN": "旗帜位置",
        "de-DE": "Flag Position",
        "es-ES": "Flag Position",
        "it-IT": "Flag Position",
        "ko-KR": "Flag Position",
        "pl-PL": "Flag Position",
        "ru-RU": "Flag Position",
        "th-TH": "Flag Position",
        "zh-TW": "Flag Position"
    },
    "getLastAssistID": {
        "description": "An ID representing the most recent Start Assist Action that was executed by the Event Player (or executed at the Global level).",
        "args": [],
        "return": "AssistId",
        "guid": "0000000121F2",
        "en-US": "Last Assist ID",
        "es-MX": "ID de asistencia anterior",
        "fr-FR": "Dernier identifiant de soutien",
        "ja-JP": "最新のアシストID",
        "pt-BR": "ID da Última Assistência",
        "tr-TR": "Son Asist Kimliği",
        "zh-CN": "上一个助攻ID",
        "de-DE": "Last Assist ID",
        "es-ES": "Last Assist ID",
        "it-IT": "Last Assist ID",
        "ko-KR": "Last Assist ID",
        "pl-PL": "Last Assist ID",
        "ru-RU": "Last Assist ID",
        "th-TH": "Last Assist ID",
        "zh-TW": "Last Assist ID"
    },
    "getLastCreatedEntity": {
        "description": "A reference to the last effect, icon entity, or dummy bot created by the event player (or created at the global level).",
        "args": [],
        "canBePutInBoolean": false,
        "return": "EntityId",
        "guid": "00000000B362",
        "en-US": "Last Created Entity",
        "es-MX": "Última entidad creada",
        "fr-FR": "Dernière entité créée",
        "ja-JP": "最新のエンティティ",
        "pt-BR": "Entidade Criada por Último",
        "tr-TR": "Oluşturulan Son Varlık",
        "zh-CN": "最后创建的实体",
        "de-DE": "Last Created Entity",
        "es-ES": "Last Created Entity",
        "it-IT": "Last Created Entity",
        "ko-KR": "Last Created Entity",
        "pl-PL": "Last Created Entity",
        "ru-RU": "Last Created Entity",
        "th-TH": "Last Created Entity",
        "zh-TW": "Last Created Entity"
    },
    "getLastCreatedHealthPool": {
        "description": "An ID representing the most recent Add Health Pool action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "HealthPoolId",
        "guid": "000000011439",
        "en-US": "Last Created Health Pool",
        "es-MX": "Última cantidad de salud creada",
        "fr-FR": "Dernière réserve de points de vie créée",
        "ja-JP": "最新のライフプール",
        "pt-BR": "Última Reserva de Vida Criada",
        "tr-TR": "Oluşturulan Son Can Havuzu",
        "zh-CN": "最后创建的生命池",
        "de-DE": "Last Created Health Pool",
        "es-ES": "Last Created Health Pool",
        "it-IT": "Last Created Health Pool",
        "ko-KR": "Last Created Health Pool",
        "pl-PL": "Last Created Health Pool",
        "ru-RU": "Last Created Health Pool",
        "th-TH": "Last Created Health Pool",
        "zh-TW": "Last Created Health Pool"
    },
    "getLastCreatedText": {
        "description": "A reference to the last piece of text created by the Event Player (or created at the Global level) via the Create HUD Text, Create In-World Text, Create Progress Bar HUD Text, or Create Progress Bar In-World Text Action.",
        "args": [],
        "return": "TextId",
        "guid": "00000000BAFE",
        "en-US": "Last Text ID",
        "es-MX": "ID de texto anterior",
        "fr-FR": "Dernier identifiant de texte",
        "ja-JP": "最新のテキストID",
        "pt-BR": "ID de Texto Mais Recente",
        "tr-TR": "Son Metin Kimliği",
        "zh-CN": "上一个文本ID",
        "de-DE": "Last Text ID",
        "es-ES": "Last Text ID",
        "it-IT": "Last Text ID",
        "ko-KR": "Last Text ID",
        "pl-PL": "Last Text ID",
        "ru-RU": "Last Text ID",
        "th-TH": "Last Text ID",
        "zh-TW": "Last Text ID"
    },
    "getLastDamageModification": {
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "DamageModificationId",
        "guid": "00000000C64A",
        "en-US": "Last Damage Modification ID",
        "es-MX": "ID de modificación de daño anterior",
        "fr-FR": "Dernier identifiant de modification de dégâts",
        "ja-JP": "最新のダメージ変更ID",
        "pt-BR": "ID de Modificação de Dano Mais Recente",
        "tr-TR": "Son Hasar Düzenlemesi Kimliği",
        "zh-CN": "上一个伤害调整ID",
        "de-DE": "Last Damage Modification ID",
        "es-ES": "Last Damage Modification ID",
        "it-IT": "Last Damage Modification ID",
        "ko-KR": "Last Damage Modification ID",
        "pl-PL": "Last Damage Modification ID",
        "ru-RU": "Last Damage Modification ID",
        "th-TH": "Last Damage Modification ID",
        "zh-TW": "Last Damage Modification ID"
    },
    "getLastDoT": {
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "DotId",
        "guid": "00000000B263",
        "en-US": "Last Damage Over Time ID",
        "es-MX": "ID de daño con el tiempo anterior",
        "fr-FR": "Dernier identifiant de dégâts sur la durée",
        "ja-JP": "最新の継続ダメージID",
        "pt-BR": "ID de Dano ao Longo do Tempo Mais Recente",
        "tr-TR": "Zamanla Son Hasar Kimliği",
        "zh-CN": "上一个持续伤害效果ID",
        "de-DE": "Last Damage Over Time ID",
        "es-ES": "Last Damage Over Time ID",
        "it-IT": "Last Damage Over Time ID",
        "ko-KR": "Last Damage Over Time ID",
        "pl-PL": "Last Damage Over Time ID",
        "ru-RU": "Last Damage Over Time ID",
        "th-TH": "Last Damage Over Time ID",
        "zh-TW": "Last Damage Over Time ID"
    },
    "getLastHealingModification": {
        "description": "An id representing the most recent start healing modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "HealingModificationId",
        "guid": "00000000FD2A",
        "en-US": "Last Healing Modification ID",
        "es-MX": "ID de modificación de sanación anterior",
        "fr-FR": "Dernier identifiant de modification de soins",
        "ja-JP": "最新回復変更ID",
        "pt-BR": "ID da última modificação de cura",
        "tr-TR": "Son İyileştirme Düzenlemesi Kimliği",
        "zh-CN": "上一个治疗调整ID",
        "de-DE": "Last Healing Modification ID",
        "es-ES": "Last Healing Modification ID",
        "it-IT": "Last Healing Modification ID",
        "ko-KR": "Last Healing Modification ID",
        "pl-PL": "Last Healing Modification ID",
        "ru-RU": "Last Healing Modification ID",
        "th-TH": "Last Healing Modification ID",
        "zh-TW": "Last Healing Modification ID"
    },
    "getLastHoT": {
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "HotId",
        "guid": "00000000B262",
        "en-US": "Last Heal Over Time ID",
        "es-MX": "ID de sanación con el tiempo anterior",
        "fr-FR": "Dernier identifiant de soins sur la durée",
        "ja-JP": "最新の継続回復ID",
        "pt-BR": "ID de Cura ao Longo do Tempo Mais Recente",
        "tr-TR": "Zamanla Son İyileştirme Kimliği",
        "zh-CN": "上一个持续治疗效果ID",
        "de-DE": "Last Heal Over Time ID",
        "es-ES": "Last Heal Over Time ID",
        "it-IT": "Last Heal Over Time ID",
        "ko-KR": "Last Heal Over Time ID",
        "pl-PL": "Last Heal Over Time ID",
        "ru-RU": "Last Heal Over Time ID",
        "th-TH": "Last Heal Over Time ID",
        "zh-TW": "Last Heal Over Time ID"
    },
    "getLivingPlayers": {
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B264",
        "en-US": "All Living Players",
        "es-MX": "Todos los jugadores vivos",
        "fr-FR": "Tous les joueurs en vie",
        "ja-JP": "生存プレイヤー全員",
        "pt-BR": "Todos os Jogadores Vivos",
        "tr-TR": "Tüm Canlı Oyuncular",
        "zh-CN": "所有存活玩家",
        "de-DE": "All Living Players",
        "es-ES": "All Living Players",
        "it-IT": "All Living Players",
        "ko-KR": "All Living Players",
        "pl-PL": "All Living Players",
        "ru-RU": "All Living Players",
        "th-TH": "All Living Players",
        "zh-TW": "All Living Players"
    },
    "getMatchRound": {
        "description": "The current round of the match, counting up from 1.",
        "args": [],
        "return": "unsigned int",
        "guid": "00000000B375",
        "en-US": "Match Round",
        "es-MX": "Ronda de la partida",
        "fr-FR": "Manche de la partie",
        "ja-JP": "マッチのラウンド",
        "pt-BR": "Rodada da Partida",
        "tr-TR": "Maç Turu",
        "zh-CN": "比赛回合",
        "de-DE": "Match Round",
        "es-ES": "Match Round",
        "it-IT": "Match Round",
        "ko-KR": "Match Round",
        "pl-PL": "Match Round",
        "ru-RU": "Match Round",
        "th-TH": "Match Round",
        "zh-TW": "Match Round"
    },
    "getMatchTime": {
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": [],
        "return": "unsigned float",
        "guid": "00000000AD3B",
        "en-US": "Match Time",
        "es-MX": "Tiempo de la partida",
        "fr-FR": "Temps de jeu",
        "ja-JP": "マッチ時間",
        "pt-BR": "Tempo da Partida",
        "tr-TR": "Maç Süresi",
        "zh-CN": "比赛时间",
        "de-DE": "Match Time",
        "es-ES": "Match Time",
        "it-IT": "Match Time",
        "ko-KR": "Match Time",
        "pl-PL": "Match Time",
        "ru-RU": "Match Time",
        "th-TH": "Match Time",
        "zh-TW": "Match Time"
    },
    "getNumberOfAssistIds": {
        "description": "The current number of Assist instances started from the Start Assist Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9E",
        "en-US": "Assist Count",
        "es-MX": "Conteo de asistencia",
        "fr-FR": "Nombre de soutiens",
        "ja-JP": "アシスト数",
        "pt-BR": "Contagem de Assistência",
        "tr-TR": "Asist Sayısı",
        "zh-CN": "助攻数量",
        "de-DE": "Assist Count",
        "es-ES": "Assist Count",
        "it-IT": "Assist Count",
        "ko-KR": "Assist Count",
        "pl-PL": "Assist Count",
        "ru-RU": "Assist Count",
        "th-TH": "Assist Count",
        "zh-TW": "Assist Count"
    },
    "getNumberOfDamageModificationIds": {
        "description": "The current number of Damage Modification instances started from the Start Damage Modification Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9C",
        "en-US": "Damage Modification Count",
        "es-MX": "Conteo de modificación de daño",
        "fr-FR": "Nombre de modifications de dégâts",
        "ja-JP": "ダメージ変更数",
        "pt-BR": "Contagem de Modificação de Dano",
        "tr-TR": "Hasar Düzenlemesi Sayısı",
        "zh-CN": "伤害调整数量",
        "de-DE": "Damage Modification Count",
        "es-ES": "Damage Modification Count",
        "it-IT": "Damage Modification Count",
        "ko-KR": "Damage Modification Count",
        "pl-PL": "Damage Modification Count",
        "ru-RU": "Damage Modification Count",
        "th-TH": "Damage Modification Count",
        "zh-TW": "Damage Modification Count"
    },
    "getNumberOfDeadPlayers": {
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B29A",
        "en-US": "Number Of Dead Players",
        "de-DE": "Number of Dead Players",
        "es-MX": "Cantidad de jugadores muertos",
        "fr-FR": "Nombre de joueurs morts",
        "it-IT": "Number of Dead Players",
        "ja-JP": "倒れたプレイヤーの数",
        "pt-BR": "Número de Jogadores Mortos",
        "tr-TR": "Ölü Oyuncu Sayısı",
        "zh-CN": "死亡玩家数量",
        "es-ES": "Number Of Dead Players",
        "ko-KR": "Number Of Dead Players",
        "pl-PL": "Number Of Dead Players",
        "ru-RU": "Number Of Dead Players",
        "th-TH": "Number Of Dead Players",
        "zh-TW": "Number Of Dead Players"
    },
    "getNumberOfDoTIds": {
        "description": "The current number of Damage Over Time instances started from the Damage Over Time action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B99",
        "en-US": "Damage Over Time Count",
        "es-MX": "Conteo de daño con el tiempo",
        "fr-FR": "Nombre de dégâts sur la durée",
        "ja-JP": "継続ダメージ数",
        "pt-BR": "Contagem de Dano ao Longo do Tempo",
        "tr-TR": "Zamanla Hasar Miktarı",
        "zh-CN": "持续伤害数量",
        "de-DE": "Damage Over Time Count",
        "es-ES": "Damage Over Time Count",
        "it-IT": "Damage Over Time Count",
        "ko-KR": "Damage Over Time Count",
        "pl-PL": "Damage Over Time Count",
        "ru-RU": "Damage Over Time Count",
        "th-TH": "Damage Over Time Count",
        "zh-TW": "Damage Over Time Count"
    },
    "getNumberOfEntityIds": {
        "description": "The current number of Entities created from the Create Effect, Create Beam Effect, or Create Icon Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9F",
        "en-US": "Entity Count",
        "es-MX": "Conteo de entidad",
        "fr-FR": "Nombre d’entités",
        "ja-JP": "エンティティ数",
        "pt-BR": "Contagem de Entidade",
        "tr-TR": "Varlık Sayısı",
        "zh-CN": "实体数量",
        "de-DE": "Entity Count",
        "es-ES": "Entity Count",
        "it-IT": "Entity Count",
        "ko-KR": "Entity Count",
        "pl-PL": "Entity Count",
        "ru-RU": "Entity Count",
        "th-TH": "Entity Count",
        "zh-TW": "Entity Count"
    },
    "getNumberOfHealingModificationIds": {
        "description": "The current number of Healing Modification instances started from the Start Healing Modification Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9D",
        "en-US": "Healing Modification Count",
        "es-MX": "Conteo de modificación de sanación",
        "fr-FR": "Nombre de modifications de soins",
        "ja-JP": "回復変更数",
        "pt-BR": "Contagem de Modificação de Cura",
        "tr-TR": "İyileştirme Düzenlemesi Sayısı",
        "zh-CN": "治疗调整数量",
        "de-DE": "Healing Modification Count",
        "es-ES": "Healing Modification Count",
        "it-IT": "Healing Modification Count",
        "ko-KR": "Healing Modification Count",
        "pl-PL": "Healing Modification Count",
        "ru-RU": "Healing Modification Count",
        "th-TH": "Healing Modification Count",
        "zh-TW": "Healing Modification Count"
    },
    "getNumberOfHeroes": {
        "description": "The number of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "Hero",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B296",
        "en-US": "Number Of Heroes",
        "de-DE": "Number of Heroes",
        "es-MX": "Cantidad de héroes",
        "fr-FR": "Nombre de héros",
        "it-IT": "Number of Heroes",
        "ja-JP": "ヒーローの数",
        "pt-BR": "Número de Heróis",
        "tr-TR": "Kahraman Sayısı",
        "zh-CN": "英雄数量",
        "es-ES": "Number Of Heroes",
        "ko-KR": "Number Of Heroes",
        "pl-PL": "Number Of Heroes",
        "ru-RU": "Number Of Heroes",
        "th-TH": "Number Of Heroes",
        "zh-TW": "Number Of Heroes"
    },
    "getNumberOfHoTIds": {
        "description": "The current number of Heal Over Time instances started from the Heal Over Time action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9A",
        "en-US": "Heal Over Time Count",
        "es-MX": "Conteo de sanación con el tiempo",
        "fr-FR": "Nombre de soins sur la durée",
        "ja-JP": "継続回復数",
        "pt-BR": "Contagem de Cura ao Longo do Tempo",
        "tr-TR": "Zamanla İyileştirme Sayısı",
        "zh-CN": "持续治疗数量",
        "de-DE": "Heal Over Time Count",
        "es-ES": "Heal Over Time Count",
        "it-IT": "Heal Over Time Count",
        "ko-KR": "Heal Over Time Count",
        "pl-PL": "Heal Over Time Count",
        "ru-RU": "Heal Over Time Count",
        "th-TH": "Heal Over Time Count",
        "zh-TW": "Heal Over Time Count"
    },
    "getNumberOfLivingPlayers": {
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B297",
        "en-US": "Number Of Living Players",
        "de-DE": "Number of Living Players",
        "es-MX": "Cantidad de jugadores vivos",
        "fr-FR": "Nombre de joueurs en vie",
        "it-IT": "Number of Living Players",
        "ja-JP": "生存プレイヤーの数",
        "pt-BR": "Número de Jogadores Vivos",
        "tr-TR": "Yaşayan Oyuncu Sayısı",
        "zh-CN": "存活玩家数量",
        "es-ES": "Number Of Living Players",
        "ko-KR": "Number Of Living Players",
        "pl-PL": "Number Of Living Players",
        "ru-RU": "Number Of Living Players",
        "th-TH": "Number Of Living Players",
        "zh-TW": "Number Of Living Players"
    },
    "getNumberOfPlayers": {
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B295",
        "en-US": "Number Of Players",
        "de-DE": "Number of Players",
        "es-MX": "Cantidad de jugadores",
        "fr-FR": "Nombre de joueurs",
        "it-IT": "Number of Players",
        "ja-JP": "プレイヤーの数",
        "pt-BR": "Número de Jogadores",
        "tr-TR": "Oyuncu Sayısı",
        "zh-CN": "玩家数量",
        "es-ES": "Number Of Players",
        "ko-KR": "Number Of Players",
        "pl-PL": "Number Of Players",
        "ru-RU": "Number Of Players",
        "th-TH": "Number Of Players",
        "zh-TW": "Number Of Players"
    },
    "getNumberOfPlayersOnObjective": {
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B29B",
        "en-US": "Number Of Players On Objective",
        "de-DE": "Number of Players On Objective",
        "es-MX": "Cantidad de jugadores en el objetivo",
        "fr-FR": "Nombre de joueurs sur l’objectif",
        "it-IT": "Number of Players On Objective",
        "ja-JP": "目標を確保中のプレイヤーの数",
        "pt-BR": "Número de Jogadores no Objetivo",
        "tr-TR": "Hedef Üzerindeki Oyuncu Sayısı",
        "zh-CN": "目标点上玩家数量",
        "es-ES": "Number Of Players On Objective",
        "ko-KR": "Number Of Players On Objective",
        "pl-PL": "Number Of Players On Objective",
        "ru-RU": "Number Of Players On Objective",
        "th-TH": "Number Of Players On Objective",
        "zh-TW": "Number Of Players On Objective"
    },
    "getNumberOfSlots": {
        "description": "The number of slots on a team or in the match.",
        "args": [
            {
                "name": "Team",
                "description": "The team or teams on which to count slots.",
                "type": "Team",
                "default": "Team"
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "000000011CB7",
        "en-US": "Number Of Slots",
        "es-MX": "Cantidad de puestos",
        "fr-FR": "Nombre d’emplacements",
        "it-IT": "Number of Slots",
        "ja-JP": "スロットの数",
        "pt-BR": "Número de Espaços",
        "tr-TR": "Yuva Sayısı",
        "zh-CN": "栏位数量",
        "de-DE": "Number Of Slots",
        "es-ES": "Number Of Slots",
        "ko-KR": "Number Of Slots",
        "pl-PL": "Number Of Slots",
        "ru-RU": "Number Of Slots",
        "th-TH": "Number Of Slots",
        "zh-TW": "Number Of Slots"
    },
    "getNumberOfTextIds": {
        "description": "The current number of Text instances started from the Create HUD Text, Create In-World Text, Create Progress Bar HUD text, or Create Progress Bar In-World Text Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9B",
        "en-US": "Text Count",
        "es-MX": "Conteo de texto",
        "fr-FR": "Nombre de textes",
        "ja-JP": "テキスト数",
        "pt-BR": "Contagem de Texto",
        "tr-TR": "Metin Sayısı",
        "zh-CN": "文本数量",
        "de-DE": "Text Count",
        "es-ES": "Text Count",
        "it-IT": "Text Count",
        "ko-KR": "Text Count",
        "pl-PL": "Text Count",
        "ru-RU": "Text Count",
        "th-TH": "Text Count",
        "zh-TW": "Text Count"
    },
    "getObjectivePosition": {
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, escort, hybrid, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "Position",
        "guid": "00000000B355",
        "en-US": "Objective Position",
        "es-MX": "Posición del objetivo",
        "fr-FR": "Position de l’objectif",
        "ja-JP": "目標の位置",
        "pt-BR": "Posição do Objetivo",
        "tr-TR": "Hedef Konumu",
        "zh-CN": "目标位置",
        "de-DE": "Objective Position",
        "es-ES": "Objective Position",
        "it-IT": "Objective Position",
        "ko-KR": "Objective Position",
        "pl-PL": "Objective Position",
        "ru-RU": "Objective Position",
        "th-TH": "Objective Position",
        "zh-TW": "Objective Position"
    },
    "getOppositeTeam": {
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Team",
        "guid": "00000000BB0A",
        "en-US": "Opposite Team Of",
        "es-MX": "Equipo contrario de",
        "fr-FR": "Équipe opposée à",
        "ja-JP": "相手チーム: ",
        "pt-BR": "Equipe Adversária de",
        "tr-TR": "Karşı Takımı",
        "zh-CN": "对方队伍",
        "de-DE": "Opposite Team Of",
        "es-ES": "Opposite Team Of",
        "it-IT": "Opposite Team Of",
        "ko-KR": "Opposite Team Of",
        "pl-PL": "Opposite Team Of",
        "ru-RU": "Opposite Team Of",
        "th-TH": "Opposite Team Of",
        "zh-TW": "Opposite Team Of"
    },
    "getPayloadPosition": {
        "description": "The position in the world of the active payload.",
        "args": [],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B356",
        "en-US": "Payload Position",
        "es-MX": "Posición de la carga",
        "fr-FR": "Position du convoi",
        "ja-JP": "ペイロードの位置",
        "pt-BR": "Posição da Carga",
        "tr-TR": "Navlun Konumu",
        "zh-CN": "运载目标位置",
        "de-DE": "Payload Position",
        "es-ES": "Payload Position",
        "it-IT": "Payload Position",
        "ko-KR": "Payload Position",
        "pl-PL": "Payload Position",
        "ru-RU": "Payload Position",
        "th-TH": "Payload Position",
        "zh-TW": "Payload Position"
    },
    "getPayloadProgressPercentage": {
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": [],
        "return": "unsigned float",
        "guid": "00000000B357",
        "en-US": "Payload Progress Percentage",
        "es-MX": "Porcentaje de progreso de la carga",
        "fr-FR": "Pourcentage de progression du convoi",
        "ja-JP": "ペイロード進行のパーセンテージ",
        "pt-BR": "Percentual de Progresso da Carga",
        "tr-TR": "Navlun İlerleyiş Yüzdesi",
        "zh-CN": "运载目标进度百分比",
        "de-DE": "Payload Progress Percentage",
        "es-ES": "Payload Progress Percentage",
        "it-IT": "Payload Progress Percentage",
        "ko-KR": "Payload Progress Percentage",
        "pl-PL": "Payload Progress Percentage",
        "ru-RU": "Payload Progress Percentage",
        "th-TH": "Payload Progress Percentage",
        "zh-TW": "Payload Progress Percentage"
    },
    "getPeakServerLoad": {
        "guid": "00000000C996",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "return": "unsigned float",
        "en-US": "Server Load Peak",
        "es-MX": "Uso máximo del servidor",
        "fr-FR": "Pic de charge du serveur",
        "ja-JP": "サーバー負荷ピーク",
        "pt-BR": "Pico de Uso do Servidor",
        "tr-TR": "Sunucu Doluluk En Üst Noktası",
        "zh-CN": "服务器负载峰值",
        "de-DE": "Server Load Peak",
        "es-ES": "Server Load Peak",
        "it-IT": "Server Load Peak",
        "ko-KR": "Server Load Peak",
        "pl-PL": "Server Load Peak",
        "ru-RU": "Server Load Peak",
        "th-TH": "Server Load Peak",
        "zh-TW": "Server Load Peak"
    },
    "getPlayers": {
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B261",
        "en-US": "All Players",
        "es-MX": "Todos los jugadores",
        "fr-FR": "Tous les joueurs",
        "ja-JP": "すべてのプレイヤー",
        "pt-BR": "Todos os Jogadores",
        "tr-TR": "Tüm Oyuncular",
        "zh-CN": "所有玩家",
        "de-DE": "All Players",
        "es-ES": "All Players",
        "it-IT": "All Players",
        "ko-KR": "All Players",
        "pl-PL": "All Players",
        "ru-RU": "All Players",
        "th-TH": "All Players",
        "zh-TW": "All Players"
    },
    "getPlayersInRadius": {
        "description": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.",
        "args": [
            {
                "name": "CENTER",
                "description": "The center position from which to measure distance.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The radius in meters inside which players must be in order to be included in the resulting array.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams to which a player must belong to be included in the resulting array.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "LOS CHECK",
                "description": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.",
                "type": "LosCheck",
                "default": "OFF"
            }
        ],
        "canBePutInBoolean": false,
        "return": {
            "Array": "Player"
        },
        "guid": "00000000B1E0",
        "en-US": "Players Within Radius",
        "es-MX": "Jugadores dentro del radio",
        "fr-FR": "Joueurs dans un rayon",
        "ja-JP": "範囲内のプレイヤー",
        "pt-BR": "Jogadores no Raio",
        "tr-TR": "Yarıçap İçerisindeki Oyuncular",
        "zh-CN": "范围内玩家",
        "de-DE": "Players Within Radius",
        "es-ES": "Players Within Radius",
        "it-IT": "Players Within Radius",
        "ko-KR": "Players Within Radius",
        "pl-PL": "Players Within Radius",
        "ru-RU": "Players Within Radius",
        "th-TH": "Players Within Radius",
        "zh-TW": "Players Within Radius"
    },
    "getPlayersInSlot": {
        "description": "The player or array of players who occupy a specific slot in the game.",
        "args": [
            {
                "name": "SLOT",
                "description": "The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which to acquire a player or players.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": [
            "Player",
            {
                "Array": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "guid": "00000000B334",
        "en-US": "Players In Slot",
        "es-MX": "Jugadores en el puesto",
        "fr-FR": "Joueurs dans l’emplacement",
        "ja-JP": "スロットに入ったプレイヤー",
        "pt-BR": "Jogadores no Espaço",
        "tr-TR": "Yuvadaki Oyuncular",
        "zh-CN": "此栏位的玩家",
        "de-DE": "Players In Slot",
        "es-ES": "Players In Slot",
        "it-IT": "Players In Slot",
        "ko-KR": "Players In Slot",
        "pl-PL": "Players In Slot",
        "ru-RU": "Players In Slot",
        "th-TH": "Players In Slot",
        "zh-TW": "Players In Slot"
    },
    "getPlayersNotOnObjective": {
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B267",
        "en-US": "All Players Not On Objective",
        "es-MX": "Todos los jugadores que no están en el objetivo",
        "fr-FR": "Tous les joueurs éloignés de l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中ではない",
        "pt-BR": "Todos os Jogadores Fora do Objetivo",
        "tr-TR": "Hedefte Olmayan Tüm Oyuncular",
        "zh-CN": "所有目标点外玩家",
        "de-DE": "All Players Not On Objective",
        "es-ES": "All Players Not On Objective",
        "it-IT": "All Players Not On Objective",
        "ko-KR": "All Players Not On Objective",
        "pl-PL": "All Players Not On Objective",
        "ru-RU": "All Players Not On Objective",
        "th-TH": "All Players Not On Objective",
        "zh-TW": "All Players Not On Objective"
    },
    "getPlayersOnHero": {
        "description": "The array of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "Hero",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "canBePutInBoolean": false,
        "return": {
            "Array": "Player"
        },
        "guid": "00000000B338",
        "en-US": "Players On Hero",
        "es-MX": "Jugadores con el héroe",
        "fr-FR": "Joueurs sur le héros",
        "ja-JP": "ヒーローを使用中のプレイヤー",
        "pt-BR": "Jogadores Usando o Herói",
        "tr-TR": "Kahramanları Oynayan Oyuncular",
        "zh-CN": "选择英雄的玩家",
        "de-DE": "Players On Hero",
        "es-ES": "Players On Hero",
        "it-IT": "Players On Hero",
        "ko-KR": "Players On Hero",
        "pl-PL": "Players On Hero",
        "ru-RU": "Players On Hero",
        "th-TH": "Players On Hero",
        "zh-TW": "Players On Hero"
    },
    "getPlayersOnObjective": {
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B266",
        "en-US": "All Players On Objective",
        "es-MX": "Todos los jugadores que están en el objetivo",
        "fr-FR": "Tous les joueurs sur l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中",
        "pt-BR": "Todos os Jogadores no Objetivo",
        "tr-TR": "Hedefte Olan Tüm Oyuncular",
        "zh-CN": "所有目标点内玩家",
        "de-DE": "All Players On Objective",
        "es-ES": "All Players On Objective",
        "it-IT": "All Players On Objective",
        "ko-KR": "All Players On Objective",
        "pl-PL": "All Players On Objective",
        "ru-RU": "All Players On Objective",
        "th-TH": "All Players On Objective",
        "zh-TW": "All Players On Objective"
    },
    "getServerLoad": {
        "guid": "00000000C961",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "return": "unsigned float",
        "en-US": "Server Load",
        "es-MX": "Uso del servidor",
        "fr-FR": "Charge du serveur",
        "ja-JP": "サーバー負荷",
        "pt-BR": "Uso do Servidor",
        "tr-TR": "Sunucu Doluluğu",
        "zh-CN": "服务器负载",
        "de-DE": "Server Load",
        "es-ES": "Server Load",
        "it-IT": "Server Load",
        "ko-KR": "Server Load",
        "pl-PL": "Server Load",
        "ru-RU": "Server Load",
        "th-TH": "Server Load",
        "zh-TW": "Server Load"
    },
    "getSpawnPoints": {
        "description": "The active spawn points for a team or for the match, provided as an array of position vectors.",
        "args": [
            {
                "name": "Team",
                "description": "The team whose spawn points to acquire.",
                "type": "Team",
                "default": "Team"
            }
        ],
        "return": {
            "Array": "Position"
        },
        "guid": "000000011FE7",
        "en-US": "Spawn Points",
        "es-MX": "Puntos de aparición",
        "fr-FR": "Points d’apparition",
        "ja-JP": "リスポーン地点",
        "pt-BR": "Pontos de Ressurgimento",
        "th-TH": "คะแนนการเกิด",
        "tr-TR": "Başlangıç Noktası",
        "zh-CN": "重生点",
        "de-DE": "Spawn Points",
        "es-ES": "Spawn Points",
        "it-IT": "Spawn Points",
        "ko-KR": "Spawn Points",
        "pl-PL": "Spawn Points",
        "ru-RU": "Spawn Points",
        "zh-TW": "Spawn Points"
    },
    "getSupportHeroes": {
        "description": "The array of all support heroes in overwatch. The order is as follows:\n        \n        0. Mercy\n        1. Zenyatta\n        2. Lucio\n        3. Ana\n        4. Brigitte\n        5. Moira\n        6. Baptiste    \n        7. Kiriko\n",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40B",
        "en-US": "All Support Heroes",
        "de-DE": "Alle Unterstützungshelden",
        "es-MX": "Todos los héroes de apoyo",
        "fr-FR": "Tous les héros de soutien",
        "ja-JP": "全サポートヒーロー",
        "pt-BR": "Todos os Heróis de Suporte",
        "tr-TR": "Tüm Destek Kahramanları",
        "zh-CN": "所有支援英雄",
        "es-ES": "All Support Heroes",
        "it-IT": "All Support Heroes",
        "ko-KR": "All Support Heroes",
        "pl-PL": "All Support Heroes",
        "ru-RU": "All Support Heroes",
        "th-TH": "All Support Heroes",
        "zh-TW": "All Support Heroes"
    },
    "getTankHeroes": {
        "description": "The array of all tank heroes in overwatch. The order is as follows:\n        \n        0. Reinhardt\n        1. Winston\n        2. Roadhog\n        3. Zarya\n        4. Dva\n        5. Doomfist\n        6. Orisa\n        7. Hammond\n        8. Junker Queen\n        9. Sigma\n",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40C",
        "en-US": "All Tank Heroes",
        "de-DE": "Alle Tankhelden",
        "es-MX": "Todos los héroes tanques",
        "fr-FR": "Tous les héros tanks",
        "ja-JP": "全タンクヒーロー",
        "pt-BR": "Todos os Heróis de Tanque",
        "tr-TR": "Tüm Tank Kahramanları",
        "zh-CN": "所有重装英雄",
        "es-ES": "All Tank Heroes",
        "it-IT": "All Tank Heroes",
        "ko-KR": "All Tank Heroes",
        "pl-PL": "All Tank Heroes",
        "ru-RU": "All Tank Heroes",
        "th-TH": "All Tank Heroes",
        "zh-TW": "All Tank Heroes"
    },
    "getTotalTimeElapsed": {
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": [],
        "return": "unsigned float",
        "guid": "00000000B361",
        "en-US": "Total Time Elapsed",
        "es-MX": "Tiempo total transcurrido",
        "fr-FR": "Temps total écoulé",
        "ja-JP": "合計経過時間",
        "pt-BR": "Tempo Total Decorrido",
        "tr-TR": "Toplam Geçen Süre",
        "zh-CN": "总计消耗时间",
        "de-DE": "Total Time Elapsed",
        "es-ES": "Total Time Elapsed",
        "it-IT": "Total Time Elapsed",
        "ko-KR": "Total Time Elapsed",
        "pl-PL": "Total Time Elapsed",
        "ru-RU": "Total Time Elapsed",
        "th-TH": "Total Time Elapsed",
        "zh-TW": "Total Time Elapsed"
    },
    "healee": {
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null,
        "return": "Player",
        "guid": "00000000CC1C",
        "en-US": "Healee",
        "es-MX": "Sanado",
        "fr-FR": "Soigné",
        "ja-JP": "回復対象",
        "pt-BR": "Curado",
        "tr-TR": "İyileşen",
        "zh-CN": "受治疗者",
        "de-DE": "Healee",
        "es-ES": "Healee",
        "it-IT": "Healee",
        "ko-KR": "Healee",
        "pl-PL": "Healee",
        "ru-RU": "Healee",
        "th-TH": "Healee",
        "zh-TW": "Healee"
    },
    "healer": {
        "guid": "00000000CC1A",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null,
        "return": "Player",
        "en-US": "Healer",
        "es-MX": "Sanador",
        "fr-FR": "Soigneur",
        "ja-JP": "ヒーラー",
        "pt-BR": "Curandeiro",
        "tr-TR": "Şifacı",
        "zh-CN": "治疗者",
        "de-DE": "Healer",
        "es-ES": "Healer",
        "it-IT": "Healer",
        "ko-KR": "Healer",
        "pl-PL": "Healer",
        "ru-RU": "Healer",
        "th-TH": "Healer",
        "zh-TW": "Healer"
    },
    "heroIcon": {
        "description": "Converts a hero parameter into a string that shows up as an icon  (up to 4 per string).",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "Hero",
                "default": "HERO"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "guid": "00000000C1FE",
        "en-US": "Hero Icon String",
        "es-MX": "Cadena de ícono de héroe",
        "fr-FR": "Chaîne d’icône du héros",
        "ja-JP": "ヒーローアイコン文字列",
        "pt-BR": "String de Ícone de Herói",
        "tr-TR": "Kahraman Simge Dizgisi",
        "zh-CN": "英雄图标字符串",
        "de-DE": "Hero Icon String",
        "es-ES": "Hero Icon String",
        "it-IT": "Hero Icon String",
        "ko-KR": "Hero Icon String",
        "pl-PL": "Hero Icon String",
        "ru-RU": "Hero Icon String",
        "th-TH": "Hero Icon String",
        "zh-TW": "Hero Icon String"
    },
    "horizontalAngleOfDirection": {
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "Direction",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000BB2C",
        "en-US": "Horizontal Angle From Direction",
        "es-MX": "Ángulo horizontal desde la dirección",
        "fr-FR": "Angle horizontal depuis une direction",
        "ja-JP": "方向からの水平角",
        "pt-BR": "Ângulo Horizontal a partir da Direção",
        "tr-TR": "Yönden Yatay Açı",
        "zh-CN": "与此方向的水平角度",
        "de-DE": "Horizontal Angle From Direction",
        "es-ES": "Horizontal Angle From Direction",
        "it-IT": "Horizontal Angle From Direction",
        "ko-KR": "Horizontal Angle From Direction",
        "pl-PL": "Horizontal Angle From Direction",
        "ru-RU": "Horizontal Angle From Direction",
        "th-TH": "Horizontal Angle From Direction",
        "zh-TW": "Horizontal Angle From Direction"
    },
    "horizontalAngleTowards": {
        "description": "The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "Position",
                "default": "VECTOR"
            }
        ],
        "return": "float",
        "guid": "00000000B27D",
        "en-US": "Horizontal Angle Towards",
        "es-MX": "Ángulo horizontal en dirección a",
        "fr-FR": "Angle horizontal vers",
        "ja-JP": "水平角の方向: ",
        "pt-BR": "Ângulo Horizontal Rumo a",
        "tr-TR": "Yatay Açı Yönü",
        "zh-CN": "水平方向夹角",
        "de-DE": "Horizontal Angle Towards",
        "es-ES": "Horizontal Angle Towards",
        "it-IT": "Horizontal Angle Towards",
        "ko-KR": "Horizontal Angle Towards",
        "pl-PL": "Horizontal Angle Towards",
        "ru-RU": "Horizontal Angle Towards",
        "th-TH": "Horizontal Angle Towards",
        "zh-TW": "Horizontal Angle Towards"
    },
    "hostPlayer": {
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null,
        "return": "Player",
        "guid": "00000000CC1E",
        "en-US": "Host Player",
        "es-MX": "Jugador anfitrión",
        "fr-FR": "Joueur hôte",
        "ja-JP": "ホスト・プレイヤー",
        "pt-BR": "Jogador Anfitrião",
        "tr-TR": "Kurucu Oyuncu",
        "zh-CN": "主机玩家",
        "de-DE": "Host Player",
        "es-ES": "Host Player",
        "it-IT": "Host Player",
        "ko-KR": "Host Player",
        "pl-PL": "Host Player",
        "ru-RU": "Host Player",
        "th-TH": "Host Player",
        "zh-TW": "Host Player"
    },
    "iconString": {
        "description": "Allows you to use an icon inside of a string (up to 4 per string).",
        "args": [
            {
                "name": "Icon",
                "description": "The icon to display.",
                "type": "Icon",
                "default": "ARROW: DOWN"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "00000000CCDC",
        "en-US": "Icon String",
        "es-MX": "Cadena de ícono",
        "fr-FR": "Chaîne d’icône",
        "ja-JP": "アイコンストリング",
        "pt-BR": "String de Ícone",
        "tr-TR": "Simge Dizgisi",
        "zh-CN": "图标字符串",
        "de-DE": "Icon String",
        "es-ES": "Icon String",
        "it-IT": "Icon String",
        "ko-KR": "Icon String",
        "pl-PL": "Icon String",
        "ru-RU": "Icon String",
        "th-TH": "Icon String",
        "zh-TW": "Icon String"
    },
    "isAssemblingHeroes": {
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35C",
        "en-US": "Is Assembling Heroes",
        "es-MX": "En Forma tu equipo",
        "fr-FR": "Phase de choix de héros",
        "ja-JP": "ヒーローを編成中",
        "pt-BR": "É Escolher Heróis",
        "tr-TR": "Kahramanlar Hazırlanıyor",
        "zh-CN": "正在集结英雄",
        "de-DE": "Is Assembling Heroes",
        "es-ES": "Is Assembling Heroes",
        "it-IT": "Is Assembling Heroes",
        "ko-KR": "Is Assembling Heroes",
        "pl-PL": "Is Assembling Heroes",
        "ru-RU": "Is Assembling Heroes",
        "th-TH": "Is Assembling Heroes",
        "zh-TW": "Is Assembling Heroes"
    },
    "isControlPointLocked": {
        "description": "Whether the point is locked in control mode.",
        "args": [],
        "return": "bool",
        "guid": "00000000B37B",
        "en-US": "Is Control Mode Point Locked",
        "es-MX": "Punto bloqueado en el modo Control",
        "fr-FR": "Point de contrôle verrouillé",
        "ja-JP": "コントロール・モードでポイントがロックされている",
        "pt-BR": "É Ponto Bloqueado do Modo de Controle",
        "tr-TR": "Kontrol Modu Noktası Kilitli",
        "zh-CN": "占领要点模式占领点解锁",
        "de-DE": "Is Control Mode Point Locked",
        "es-ES": "Is Control Mode Point Locked",
        "it-IT": "Is Control Mode Point Locked",
        "ko-KR": "Is Control Mode Point Locked",
        "pl-PL": "Is Control Mode Point Locked",
        "ru-RU": "Is Control Mode Point Locked",
        "th-TH": "Is Control Mode Point Locked",
        "zh-TW": "Is Control Mode Point Locked"
    },
    "isFlagAtBase": {
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "bool",
        "guid": "00000000B3A1",
        "en-US": "Is Flag At Base",
        "es-MX": "La bandera está en la base",
        "fr-FR": "Drapeau à la base",
        "ja-JP": "フラッグが陣地にある",
        "pt-BR": "É Bandeira na Base",
        "tr-TR": "Bayrak Üste",
        "zh-CN": "旗帜是否在基地中",
        "de-DE": "Is Flag At Base",
        "es-ES": "Is Flag At Base",
        "it-IT": "Is Flag At Base",
        "ko-KR": "Is Flag At Base",
        "pl-PL": "Is Flag At Base",
        "ru-RU": "Is Flag At Base",
        "th-TH": "Is Flag At Base",
        "zh-TW": "Is Flag At Base"
    },
    "isFlagBeingCarried": {
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "bool",
        "guid": "00000000B3A2",
        "en-US": "Is Flag Being Carried",
        "es-MX": "La bandera está siendo transportada",
        "fr-FR": "Drapeau transporté",
        "ja-JP": "フラッグが運ばれている",
        "pt-BR": "É Bandeira Sendo Carregada",
        "tr-TR": "Bayrak Taşınıyor",
        "zh-CN": "是否有人携带旗帜",
        "de-DE": "Is Flag Being Carried",
        "es-ES": "Is Flag Being Carried",
        "it-IT": "Is Flag Being Carried",
        "ko-KR": "Is Flag Being Carried",
        "pl-PL": "Is Flag Being Carried",
        "ru-RU": "Is Flag Being Carried",
        "th-TH": "Is Flag Being Carried",
        "zh-TW": "Is Flag Being Carried"
    },
    "isGameInProgress": {
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": [],
        "return": "bool",
        "guid": "00000000B35E",
        "en-US": "Is Game In Progress",
        "es-MX": "Partida en curso",
        "fr-FR": "Partie en cours",
        "ja-JP": "ゲームが進行中",
        "pt-BR": "É Jogo em Andamento",
        "tr-TR": "Oyun Devam Ediyor",
        "zh-CN": "游戏正在进行中",
        "de-DE": "Is Game In Progress",
        "es-ES": "Is Game In Progress",
        "it-IT": "Is Game In Progress",
        "ko-KR": "Is Game In Progress",
        "pl-PL": "Is Game In Progress",
        "ru-RU": "Is Game In Progress",
        "th-TH": "Is Game In Progress",
        "zh-TW": "Is Game In Progress"
    },
    "isInLoS": {
        "description": "Whether two positions have line of sight with each other.",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "VECTOR"
            },
            {
                "name": "BARRIERS",
                "description": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.",
                "type": "BarrierLos",
                "default": "BARRIERS DO NOT BLOCK LOS"
            }
        ],
        "return": "bool",
        "guid": "00000000B1EC",
        "en-US": "Is In Line of Sight",
        "es-MX": "En la línea de visión",
        "fr-FR": "Dans la ligne de vue",
        "ja-JP": "射線が通っている",
        "pt-BR": "É Na Linha de Visão",
        "tr-TR": "Görüş Alanında",
        "zh-CN": "在视线内",
        "de-DE": "Is In Line of Sight",
        "es-ES": "Is In Line of Sight",
        "it-IT": "Is In Line of Sight",
        "ko-KR": "Is In Line of Sight",
        "pl-PL": "Is In Line of Sight",
        "ru-RU": "Is In Line of Sight",
        "th-TH": "Is In Line of Sight",
        "zh-TW": "Is In Line of Sight"
    },
    "isInSetup": {
        "description": "Whether the match is currently in its setup phase.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35D",
        "en-US": "Is In Setup",
        "es-MX": "En preparación",
        "fr-FR": "Dans les paramètres",
        "ja-JP": "セットアップ中",
        "pt-BR": "É em Organização",
        "tr-TR": "Kurulumda",
        "zh-CN": "正在设置",
        "de-DE": "Is In Setup",
        "es-ES": "Is In Setup",
        "it-IT": "Is In Setup",
        "ko-KR": "Is In Setup",
        "pl-PL": "Is In Setup",
        "ru-RU": "Is In Setup",
        "th-TH": "Is In Setup",
        "zh-TW": "Is In Setup"
    },
    "isInSuddenDeath": {
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": [],
        "return": "bool",
        "guid": "00000000B3A4",
        "en-US": "Is CTF Mode In Sudden Death",
        "es-MX": "Modo CLB en muerte súbita",
        "fr-FR": "Capture du drapeau en mort subite",
        "ja-JP": "キャプチャー・ザ・フラッグ・モードがサドンデス中",
        "pt-BR": "É Modo CaB em Morte Súbita",
        "tr-TR": "Ani Ölüm'de Bayrak Kapmaca Modu",
        "zh-CN": "在夺旗模式中开始绝杀局",
        "de-DE": "Is CTF Mode In Sudden Death",
        "es-ES": "Is CTF Mode In Sudden Death",
        "it-IT": "Is CTF Mode In Sudden Death",
        "ko-KR": "Is CTF Mode In Sudden Death",
        "pl-PL": "Is CTF Mode In Sudden Death",
        "ru-RU": "Is CTF Mode In Sudden Death",
        "th-TH": "Is CTF Mode In Sudden Death",
        "zh-TW": "Is CTF Mode In Sudden Death"
    },
    "isMatchBetweenRounds": {
        "description": "Whether the match is between rounds.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35F",
        "en-US": "Is Between Rounds",
        "es-MX": "Entre rondas",
        "fr-FR": "Entre deux manches",
        "ja-JP": "ラウンドの間",
        "pt-BR": "É Entre Rodadas",
        "tr-TR": "Turlar Arasında",
        "zh-CN": "处于回合之间",
        "de-DE": "Is Between Rounds",
        "es-ES": "Is Between Rounds",
        "it-IT": "Is Between Rounds",
        "ko-KR": "Is Between Rounds",
        "pl-PL": "Is Between Rounds",
        "ru-RU": "Is Between Rounds",
        "th-TH": "Is Between Rounds",
        "zh-TW": "Is Between Rounds"
    },
    "isMatchComplete": {
        "description": "Whether the match has finished.",
        "args": [],
        "return": "bool",
        "guid": "00000000B360",
        "en-US": "Is Match Complete",
        "es-MX": "Partida Completada",
        "fr-FR": "Partie terminée",
        "ja-JP": "マッチが完了している",
        "pt-BR": "É Partida Concluída",
        "tr-TR": "Maç Tamamlandı",
        "zh-CN": "比赛结束",
        "de-DE": "Is Match Complete",
        "es-ES": "Is Match Complete",
        "it-IT": "Is Match Complete",
        "ko-KR": "Is Match Complete",
        "pl-PL": "Is Match Complete",
        "ru-RU": "Is Match Complete",
        "th-TH": "Is Match Complete",
        "zh-TW": "Is Match Complete"
    },
    "isObjectiveComplete": {
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or hybrid.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "return": "bool",
        "guid": "00000000B378",
        "en-US": "Is Objective Complete",
        "es-MX": "Objetivo completado",
        "fr-FR": "Objectif accompli",
        "ja-JP": "目標をクリアした",
        "pt-BR": "É Objetivo Concluído",
        "tr-TR": "Hedef Tamamlandı",
        "zh-CN": "目标是否完成",
        "de-DE": "Is Objective Complete",
        "es-ES": "Is Objective Complete",
        "it-IT": "Is Objective Complete",
        "ko-KR": "Is Objective Complete",
        "pl-PL": "Is Objective Complete",
        "ru-RU": "Is Objective Complete",
        "th-TH": "Is Objective Complete",
        "zh-TW": "Is Objective Complete"
    },
    "isTeamOnDefense": {
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or hybrid.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "bool",
        "guid": "00000000B359",
        "en-US": "Is Team On Defense",
        "es-MX": "Equipo defensor",
        "fr-FR": "Équipe en défense",
        "ja-JP": "防衛側のチーム",
        "pt-BR": "É Equipe na Defensa",
        "tr-TR": "Takım Savunmada",
        "zh-CN": "正在防守",
        "de-DE": "Is Team On Defense",
        "es-ES": "Is Team On Defense",
        "it-IT": "Is Team On Defense",
        "ko-KR": "Is Team On Defense",
        "pl-PL": "Is Team On Defense",
        "ru-RU": "Is Team On Defense",
        "th-TH": "Is Team On Defense",
        "zh-TW": "Is Team On Defense"
    },
    "isTeamOnOffense": {
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or hybrid.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "bool",
        "guid": "00000000B354",
        "en-US": "Is Team On Offense",
        "es-MX": "Equipo atacante",
        "fr-FR": "Équipe en attaque",
        "ja-JP": "攻撃側のチーム",
        "pt-BR": "É Equipe no Ataque",
        "tr-TR": "Takım Hücumda",
        "zh-CN": "作为进攻队伍",
        "de-DE": "Is Team On Offense",
        "es-ES": "Is Team On Offense",
        "it-IT": "Is Team On Offense",
        "ko-KR": "Is Team On Offense",
        "pl-PL": "Is Team On Offense",
        "ru-RU": "Is Team On Offense",
        "th-TH": "Is Team On Offense",
        "zh-TW": "Is Team On Offense"
    },
    "isWaitingForPlayers": {
        "description": "Whether the match is waiting for players to join before starting.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35B",
        "en-US": "Is Waiting For Players",
        "es-MX": "Esperando jugadores",
        "fr-FR": "En attente de joueurs",
        "ja-JP": "ほかのプレイヤーを待っている",
        "pt-BR": "É Aguardando Jogadores",
        "tr-TR": "Oyuncular Bekleniyor",
        "zh-CN": "正在等待玩家",
        "de-DE": "Is Waiting For Players",
        "es-ES": "Is Waiting For Players",
        "it-IT": "Is Waiting For Players",
        "ko-KR": "Is Waiting For Players",
        "pl-PL": "Is Waiting For Players",
        "ru-RU": "Is Waiting For Players",
        "th-TH": "Is Waiting For Players",
        "zh-TW": "Is Waiting For Players"
    },
    "len": {
        "description": "The number of elements in the specified array. For strings, use `strLen`.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "00000000B26E",
        "en-US": "Count Of",
        "es-MX": "Conteo de",
        "fr-FR": "Décompte de",
        "ja-JP": "カウント: ",
        "pt-BR": "Contagem de",
        "tr-TR": "Miktar",
        "zh-CN": "数量",
        "de-DE": "Count Of",
        "es-ES": "Count Of",
        "it-IT": "Count Of",
        "ko-KR": "Count Of",
        "pl-PL": "Count Of",
        "ru-RU": "Count Of",
        "th-TH": "Count Of",
        "zh-TW": "Count Of"
    },
    "localPlayer": {
        "description": "The player being controlled on the end user's computer. This value is different for each end user and thus can only be accessed in actions which affect visuals or the HUD. This value cannot be stored in variables.",
        "args": null,
        "return": "Player",
        "guid": "000000012BB1",
        "en-US": "Local Player",
        "es-MX": "Jugador local",
        "fr-FR": "Joueur local",
        "ja-JP": "ローカルプレイヤー",
        "pt-BR": "Jogador Local",
        "tr-TR": "Yerel Oyuncu",
        "zh-CN": "本地玩家",
        "de-DE": "Local Player",
        "es-ES": "Local Player",
        "it-IT": "Local Player",
        "ko-KR": "Local Player",
        "pl-PL": "Local Player",
        "ru-RU": "Local Player",
        "th-TH": "Local Player",
        "zh-TW": "Local Player"
    },
    "localVector": {
        "description": "The vector in local coordinates corresponding to the provided vector in world coordinates.",
        "args": [
            {
                "name": "WORLD VECTOR",
                "description": "The vector in world coordinates that will be converted to local coordinates.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the resulting vector will be relative.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "Transform",
                "default": "ROTATION"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000B342",
        "en-US": "Local Vector Of",
        "es-MX": "Vector local de",
        "fr-FR": "Vecteur local de",
        "ja-JP": "ローカルのベクトル: ",
        "pt-BR": "Vetor Local de",
        "tr-TR": "Yerel Vektör",
        "zh-CN": "本地矢量",
        "de-DE": "Local Vector Of",
        "es-ES": "Local Vector Of",
        "it-IT": "Local Vector Of",
        "ko-KR": "Local Vector Of",
        "pl-PL": "Local Vector Of",
        "ru-RU": "Local Vector Of",
        "th-TH": "Local Vector Of",
        "zh-TW": "Local Vector Of"
    },
    "magnitude": {
        "description": "The magnitude (length) of the specified vector",
        "args": [
            {
                "name": "vector",
                "description": "The vector to calculate the magnitude of.",
                "type": "Vector",
                "default": "Vector"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "000000011F55",
        "en-US": "Magnitude Of",
        "es-MX": "Magnitud de",
        "fr-FR": "Ampleur de",
        "ja-JP": "変化の大きさ:",
        "pt-BR": "Magnitude de",
        "th-TH": "ขนาดของ",
        "tr-TR": "Büyüklüğü",
        "zh-CN": "幅值",
        "de-DE": "Magnitude Of",
        "es-ES": "Magnitude Of",
        "it-IT": "Magnitude Of",
        "ko-KR": "Magnitude Of",
        "pl-PL": "Magnitude Of",
        "ru-RU": "Magnitude Of",
        "zh-TW": "Magnitude Of"
    },
    "max": {
        "guid": "00000000C418",
        "description": "The greater of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "en-US": "Max",
        "es-MX": "Máximo",
        "fr-FR": "Maximum",
        "ja-JP": "最大",
        "pt-BR": "Máx.",
        "tr-TR": "Maks.",
        "zh-CN": "较大",
        "de-DE": "Max",
        "es-ES": "Max",
        "it-IT": "Max",
        "ko-KR": "Max",
        "pl-PL": "Max",
        "ru-RU": "Max",
        "th-TH": "Max",
        "zh-TW": "Max"
    },
    "min": {
        "guid": "00000000C416",
        "description": "The lesser of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "en-US": "Min",
        "es-MX": "Mínimo",
        "fr-FR": "Minimum",
        "ja-JP": "最小",
        "pt-BR": "Mín.",
        "tr-TR": "Min.",
        "zh-CN": "较小",
        "de-DE": "Min",
        "es-ES": "Min",
        "it-IT": "Min",
        "ko-KR": "Min",
        "pl-PL": "Min",
        "ru-RU": "Min",
        "th-TH": "Min",
        "zh-TW": "Min"
    },
    "nearestWalkablePosition": {
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "Position",
                "default": "VECTOR"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000C324",
        "en-US": "Nearest Walkable Position",
        "es-MX": "Posición caminable más cercana",
        "fr-FR": "Position la plus proche en marchant",
        "ja-JP": "最も近い歩行可能な位置",
        "pt-BR": "Posição Transitável Mais Próxima",
        "th-TH": "ตำแหน่งที่เดินได้ที่ใกล้ที่สุด",
        "tr-TR": "Yürünebilir En Yakın Konum",
        "zh-CN": "最近的可行走位置",
        "de-DE": "Nearest Walkable Position",
        "es-ES": "Nearest Walkable Position",
        "it-IT": "Nearest Walkable Position",
        "ko-KR": "Nearest Walkable Position",
        "pl-PL": "Nearest Walkable Position",
        "ru-RU": "Nearest Walkable Position",
        "zh-TW": "Nearest Walkable Position"
    },
    "normalize": {
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Vector",
        "guid": "00000000C344",
        "en-US": "Normalize",
        "es-MX": "Normalizar",
        "fr-FR": "Normalisation",
        "ja-JP": "正規化",
        "pt-BR": "Normalizar",
        "tr-TR": "Normalleştir",
        "zh-CN": "归一化",
        "de-DE": "Normalize",
        "es-ES": "Normalize",
        "it-IT": "Normalize",
        "ko-KR": "Normalize",
        "pl-PL": "Normalize",
        "ru-RU": "Normalize",
        "th-TH": "Normalize",
        "zh-TW": "Normalize"
    },
    "null": {
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null,
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B594",
        "en-US": "Null",
        "es-MX": "Nulo",
        "fr-FR": "Non applicable",
        "ja-JP": "NULL",
        "pt-BR": "Nulo",
        "tr-TR": "Geçersiz",
        "zh-CN": "空",
        "de-DE": "Null",
        "es-ES": "Null",
        "it-IT": "Null",
        "ko-KR": "Null",
        "pl-PL": "Null",
        "ru-RU": "Null",
        "th-TH": "Null",
        "zh-TW": "Null"
    },
    "random.choice": {
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B599",
        "en-US": "Random Value In Array",
        "es-MX": "Valor aleatorio en matriz",
        "fr-FR": "Valeur aléatoire dans le tableau",
        "ja-JP": "配列内のランダムな値",
        "pt-BR": "Valor Aleatório na Matriz",
        "tr-TR": "Dizindeki Rastgele Bir Değer",
        "zh-CN": "数组随机取值",
        "de-DE": "Random Value In Array",
        "es-ES": "Random Value In Array",
        "it-IT": "Random Value In Array",
        "ko-KR": "Random Value In Array",
        "pl-PL": "Random Value In Array",
        "ru-RU": "Random Value In Array",
        "th-TH": "Random Value In Array",
        "zh-TW": "Random Value In Array"
    },
    "random.randint": {
        "description": "A random integer between the specified min and max, inclusive.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "return": "int",
        "guid": "00000000B59B",
        "en-US": "Random Integer",
        "es-MX": "Número entero aleatorio",
        "fr-FR": "Nombre entier aléatoire",
        "ja-JP": "ランダムな整数",
        "pt-BR": "Inteiro Aleatório",
        "tr-TR": "Rastgele Tam Sayı",
        "zh-CN": "随机整数",
        "de-DE": "Random Integer",
        "es-ES": "Random Integer",
        "it-IT": "Random Integer",
        "ko-KR": "Random Integer",
        "pl-PL": "Random Integer",
        "ru-RU": "Random Integer",
        "th-TH": "Random Integer",
        "zh-TW": "Random Integer"
    },
    "random.shuffle": {
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "return": "Array",
        "guid": "00000000B598",
        "en-US": "Randomized Array",
        "es-MX": "Matriz aleatorizada",
        "fr-FR": "Tableau aléatoire",
        "ja-JP": "ランダム化された配列",
        "pt-BR": "Matriz Randomizada",
        "tr-TR": "Rastgele Dizin",
        "zh-CN": "随机数组",
        "de-DE": "Randomized Array",
        "es-ES": "Randomized Array",
        "it-IT": "Randomized Array",
        "ko-KR": "Randomized Array",
        "pl-PL": "Randomized Array",
        "ru-RU": "Randomized Array",
        "th-TH": "Randomized Array",
        "zh-TW": "Randomized Array"
    },
    "random.uniform": {
        "description": "A random real number between the specified min and max.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest real number allowed.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest real number allowed.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "return": "float",
        "guid": "00000000B59A",
        "en-US": "Random Real",
        "es-MX": "Número real aleatorio",
        "fr-FR": "Nombre réel aléatoire",
        "ja-JP": "ランダムな実数",
        "pt-BR": "Real Aleatório",
        "tr-TR": "Rastgele Gerçek Sayı",
        "zh-CN": "随机实数",
        "de-DE": "Random Real",
        "es-ES": "Random Real",
        "it-IT": "Random Real",
        "ko-KR": "Random Real",
        "pl-PL": "Random Real",
        "ru-RU": "Random Real",
        "th-TH": "Random Real",
        "zh-TW": "Random Real"
    },
    "rgba": {
        "description": "A custom color with the specified red, green, blue and alpha values.",
        "args": [
            {
                "name": "Red",
                "description": "The red component of a color, from 0 to 255.",
                "type": "unsigned int",
                "default": 255
            },
            {
                "name": "Green",
                "description": "The green component of a color, from 0 to 255.",
                "type": "unsigned int",
                "default": 255
            },
            {
                "name": "Blue",
                "description": "The blue component of a color, from 0 to 255.",
                "type": "unsigned int",
                "default": 255
            },
            {
                "name": "Alpha",
                "description": "The alpha component of a color. 255 is perfectly opaque while 0 is perfectly invisible.",
                "type": "unsigned int",
                "default": 255
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Color",
        "guid": "000000011DA2",
        "en-US": "Custom Color",
        "es-MX": "Color personalizado",
        "fr-FR": "Couleur personnalisée",
        "ja-JP": "カスタム・カラー",
        "pt-BR": "Cor Personalizada",
        "tr-TR": "Özel Renk",
        "zh-CN": "自定义颜色",
        "de-DE": "Custom Color",
        "es-ES": "Custom Color",
        "it-IT": "Custom Color",
        "ko-KR": "Custom Color",
        "pl-PL": "Custom Color",
        "ru-RU": "Custom Color",
        "th-TH": "Custom Color",
        "zh-TW": "Custom Color"
    },
    "sin": {
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C340",
        "en-US": "Sine From Radians",
        "es-MX": "Seno en radianes",
        "fr-FR": "Sinus en radians",
        "ja-JP": "ラジアンのサイン",
        "pt-BR": "Seno de Radianos",
        "tr-TR": "Radyan Cinsinden Sinüs",
        "zh-CN": "弧度的正弦值",
        "de-DE": "Sine From Radians",
        "es-ES": "Sine From Radians",
        "it-IT": "Sine From Radians",
        "ko-KR": "Sine From Radians",
        "pl-PL": "Sine From Radians",
        "ru-RU": "Sine From Radians",
        "th-TH": "Sine From Radians",
        "zh-TW": "Sine From Radians"
    },
    "sinDeg": {
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C33C",
        "en-US": "Sine From Degrees",
        "es-MX": "Seno en grados",
        "fr-FR": "Sinus en degrés",
        "ja-JP": "度のサイン",
        "pt-BR": "Seno de Graus",
        "tr-TR": "Derece Cinsinden Sinüs",
        "zh-CN": "角度的正弦值",
        "de-DE": "Sine From Degrees",
        "es-ES": "Sine From Degrees",
        "it-IT": "Sine From Degrees",
        "ko-KR": "Sine From Degrees",
        "pl-PL": "Sine From Degrees",
        "ru-RU": "Sine From Degrees",
        "th-TH": "Sine From Degrees",
        "zh-TW": "Sine From Degrees"
    },
    "sqrt": {
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C356",
        "en-US": "Square Root",
        "es-MX": "Raíz cuadrada",
        "fr-FR": "Racine carrée",
        "ja-JP": "平方根",
        "pt-BR": "Raiz Quadrada",
        "th-TH": "รากที่สอง",
        "tr-TR": "Karekök",
        "zh-CN": "平方根",
        "de-DE": "Square Root",
        "es-ES": "Square Root",
        "it-IT": "Square Root",
        "ko-KR": "Square Root",
        "pl-PL": "Square Root",
        "ru-RU": "Square Root",
        "zh-TW": "Square Root"
    },
    "strContains": {
        "description": "Whether the specified string contains the specified substring.",
        "args": [
            {
                "name": "String",
                "description": "The string in which to search for the specified substring.",
                "type": "String",
                "default": "Custom String"
            },
            {
                "name": "Substring",
                "description": "The substring for which to search.",
                "type": "String",
                "default": "Custom String"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "000000012070",
        "en-US": "String Contains",
        "es-MX": "La cadena contiene",
        "fr-FR": "Contenu de la chaîne",
        "ja-JP": "含む文字列",
        "pt-BR": "String Contém",
        "tr-TR": "Dizgi İçeriği",
        "zh-CN": "字符串包含",
        "de-DE": "String Contains",
        "es-ES": "String Contains",
        "it-IT": "String Contains",
        "ko-KR": "String Contains",
        "pl-PL": "String Contains",
        "ru-RU": "String Contains",
        "th-TH": "String Contains",
        "zh-TW": "String Contains"
    },
    "strLen": {
        "description": "The length in characters of the provided string.",
        "args": [
            {
                "name": "String",
                "description": "The string whose characters to count.",
                "type": "String",
                "default": "Global Variable"
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "0000000124A2",
        "en-US": "String Length",
        "es-MX": "Longitud de la cadena",
        "fr-FR": "Longueur de la chaîne",
        "ja-JP": "文字列の長さ",
        "pt-BR": "Tamanho da String",
        "tr-TR": "Dizgi Uzunluğu",
        "zh-CN": "字符串长度",
        "de-DE": "String Length",
        "es-ES": "String Length",
        "it-IT": "String Length",
        "ko-KR": "String Length",
        "pl-PL": "String Length",
        "ru-RU": "String Length",
        "th-TH": "String Length",
        "zh-TW": "String Length"
    },
    "tan": {
        "description": "Tangent of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7FD",
        "en-US": "Tangent From Radians",
        "es-MX": "Tangente en radianes",
        "fr-FR": "Tangente en radians",
        "ja-JP": "ラジアンのタンジェント",
        "pt-BR": "Tangente de Radianos",
        "tr-TR": "Radyan Cinsinden Tanjant",
        "zh-CN": "弧度的正切值",
        "de-DE": "Tangent From Radians",
        "es-ES": "Tangent From Radians",
        "it-IT": "Tangent From Radians",
        "ko-KR": "Tangent From Radians",
        "pl-PL": "Tangent From Radians",
        "ru-RU": "Tangent From Radians",
        "th-TH": "Tangent From Radians",
        "zh-TW": "Tangent From Radians"
    },
    "tanDeg": {
        "description": "Tangent of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7F8",
        "en-US": "Tangent From Degrees",
        "es-MX": "Tangente en grados",
        "fr-FR": "Tangente en degrés",
        "ja-JP": "度のタンジェント",
        "pt-BR": "Tangente de Graus",
        "tr-TR": "Derece Cinsinden Tanjant",
        "zh-CN": "角度的正切值",
        "de-DE": "Tangent From Degrees",
        "es-ES": "Tangent From Degrees",
        "it-IT": "Tangent From Degrees",
        "ko-KR": "Tangent From Degrees",
        "pl-PL": "Tangent From Degrees",
        "ru-RU": "Tangent From Degrees",
        "th-TH": "Tangent From Degrees",
        "zh-TW": "Tangent From Degrees"
    },
    "teamHasHero": {
        "description": "Whether a specific hero is being played (either on a team or in the match).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "Hero",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "bool",
        "guid": "00000000B292",
        "en-US": "Is Hero Being Played",
        "es-MX": "Jugando con el héroe",
        "fr-FR": "Héros joué",
        "ja-JP": "ヒーローがプレイされているか",
        "pt-BR": "É o Herói em Jogo",
        "tr-TR": "Oynanan Kahraman",
        "zh-CN": "正在使用英雄",
        "de-DE": "Is Hero Being Played",
        "es-ES": "Is Hero Being Played",
        "it-IT": "Is Hero Being Played",
        "ko-KR": "Is Hero Being Played",
        "pl-PL": "Is Hero Being Played",
        "ru-RU": "Is Hero Being Played",
        "th-TH": "Is Hero Being Played",
        "zh-TW": "Is Hero Being Played"
    },
    "teamScore": {
        "guid": "00000000B353",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "int",
        "en-US": "Team Score",
        "es-MX": "Puntuación del equipo",
        "fr-FR": "Score de l’équipe",
        "ja-JP": "チーム・スコア",
        "pt-BR": "Pontuação da Equipe",
        "tr-TR": "Takım Skoru",
        "zh-CN": "团队得分",
        "de-DE": "Team Score",
        "es-ES": "Team Score",
        "it-IT": "Team Score",
        "ko-KR": "Team Score",
        "pl-PL": "Team Score",
        "ru-RU": "Team Score",
        "th-TH": "Team Score",
        "zh-TW": "Team Score"
    },
    "true": {
        "description": "The boolean value of true.",
        "args": null,
        "isConstant": true,
        "return": "BoolLiteral",
        "guid": "00000000AC39",
        "en-US": "True",
        "es-MX": "Verdadero",
        "fr-FR": "Vrai",
        "th-TH": "จริง",
        "tr-TR": "Doğru",
        "zh-CN": "真",
        "de-DE": "True",
        "es-ES": "True",
        "it-IT": "True",
        "ja-JP": "True",
        "ko-KR": "True",
        "pl-PL": "True",
        "pt-BR": "True",
        "ru-RU": "True",
        "zh-TW": "True"
    },
    "updateEveryTick": {
        "description": "Increases the update frequency of the provided value to once per tick. Useful for smoothing the appearance of certain Values, such as getPosition(), that normally only update every few ticks. Applies to rule conditions as well as reevaluating action parameters. The value is interpolated client-side if the framerate is higher than the tick rate. May increase server load and/or lower frame rate.",
        "args": [
            {
                "name": "Value",
                "description": "The value that will be updated once per tick.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "Position Of"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000001232B",
        "en-US": "Update Every Frame",
        "es-MX": "Actualizar todos los cuadros",
        "fr-FR": "Actualiser à chaque image",
        "ja-JP": "フレームごとに更新",
        "pt-BR": "Atualizar a Cada Quadro",
        "tr-TR": "Her Kareyi Güncelle",
        "zh-CN": "逐帧更新",
        "de-DE": "Update Every Frame",
        "es-ES": "Update Every Frame",
        "it-IT": "Update Every Frame",
        "ko-KR": "Update Every Frame",
        "pl-PL": "Update Every Frame",
        "ru-RU": "Update Every Frame",
        "th-TH": "Update Every Frame",
        "zh-TW": "Update Every Frame"
    },
    "vect": {
        "guid": "00000000B0F1",
        "description": "A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.",
        "args": [
            {
                "name": "X",
                "description": "The x value of the vector.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "Y",
                "description": "The y value of the vector.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "Z",
                "description": "The z value of the vector.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Vector",
        "en-US": "Vector",
        "fr-FR": "Vecteur",
        "ja-JP": "ベクトル",
        "pt-BR": "Vetor",
        "tr-TR": "Vektör",
        "zh-CN": "矢量",
        "de-DE": "Vector",
        "es-ES": "Vector",
        "es-MX": "Vector",
        "it-IT": "Vector",
        "ko-KR": "Vector",
        "pl-PL": "Vector",
        "ru-RU": "Vector",
        "th-TH": "Vector",
        "zh-TW": "Vector"
    },
    "vectorTowards": {
        "description": "The displacement vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting displacement vector begins.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position at which the resulting displacement vector ends.",
                "type": "Position",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B1EB",
        "en-US": "Vector Towards",
        "es-MX": "Vector hacia",
        "fr-FR": "Vecteur vers",
        "ja-JP": "ベクトルの方向: ",
        "pt-BR": "Vetor Rumo a",
        "tr-TR": "Vektör Yönü",
        "zh-CN": "向量",
        "de-DE": "Vector Towards",
        "es-ES": "Vector Towards",
        "it-IT": "Vector Towards",
        "ko-KR": "Vector Towards",
        "pl-PL": "Vector Towards",
        "ru-RU": "Vector Towards",
        "th-TH": "Vector Towards",
        "zh-TW": "Vector Towards"
    },
    "verticalAngleOfDirection": {
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "Direction",
                "default": "VECTOR"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000BB2B",
        "en-US": "Vertical Angle From Direction",
        "es-MX": "Ángulo vertical desde la dirección",
        "fr-FR": "Angle vertical depuis une direction",
        "ja-JP": "方向からの頂角",
        "pt-BR": "Ângulo Vertical a partir da Direção",
        "tr-TR": "Yönden Dikey Açı",
        "zh-CN": "与此方向的垂直角度",
        "de-DE": "Vertical Angle From Direction",
        "es-ES": "Vertical Angle From Direction",
        "it-IT": "Vertical Angle From Direction",
        "ko-KR": "Vertical Angle From Direction",
        "pl-PL": "Vertical Angle From Direction",
        "ru-RU": "Vertical Angle From Direction",
        "th-TH": "Vertical Angle From Direction",
        "zh-TW": "Vertical Angle From Direction"
    },
    "verticalAngleTowards": {
        "description": "The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "Position",
                "default": "VECTOR"
            }
        ],
        "return": "float",
        "guid": "00000000B27E",
        "en-US": "Vertical Angle Towards",
        "es-MX": "Ángulo vertical en dirección a",
        "fr-FR": "Angle vertical vers",
        "ja-JP": "頂角の方向: ",
        "pt-BR": "Ângulo Vertical Rumo a",
        "tr-TR": "Dikey Açı Yönü",
        "zh-CN": "垂直方向夹角",
        "de-DE": "Vertical Angle Towards",
        "es-ES": "Vertical Angle Towards",
        "it-IT": "Vertical Angle Towards",
        "ko-KR": "Vertical Angle Towards",
        "pl-PL": "Vertical Angle Towards",
        "ru-RU": "Vertical Angle Towards",
        "th-TH": "Vertical Angle Towards",
        "zh-TW": "Vertical Angle Towards"
    },
    "victim": {
        "guid": "00000000B330",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "en-US": "Victim",
        "es-MX": "Víctima",
        "fr-FR": "Victime",
        "ja-JP": "犠牲者",
        "pt-BR": "Vítima",
        "tr-TR": "Kurban",
        "zh-CN": "被攻击方",
        "de-DE": "Victim",
        "es-ES": "Victim",
        "it-IT": "Victim",
        "ko-KR": "Victim",
        "pl-PL": "Victim",
        "ru-RU": "Victim",
        "th-TH": "Victim",
        "zh-TW": "Victim"
    },
    "worldVector": {
        "description": "The vector in world coordinates corresponding to the provided vector in local coordinates.",
        "args": [
            {
                "name": "LOCAL VECTOR",
                "description": "The vector in local coordinates that will be converted to world coordinates.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the local vector is relative.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "Transform",
                "default": "ROTATION"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000B33A",
        "en-US": "World Vector Of",
        "es-MX": "Vector global de",
        "fr-FR": "Vecteur mondial de",
        "ja-JP": "ワールド座標のベクトル: ",
        "pt-BR": "Vetor do Mundo de",
        "tr-TR": "Dünya Vektörü",
        "zh-CN": "地图矢量",
        "de-DE": "World Vector Of",
        "es-ES": "World Vector Of",
        "it-IT": "World Vector Of",
        "ko-KR": "World Vector Of",
        "pl-PL": "World Vector Of",
        "ru-RU": "World Vector Of",
        "th-TH": "World Vector Of",
        "zh-TW": "World Vector Of"
    }
}
//end-json
;
