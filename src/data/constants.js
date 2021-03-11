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
    "AssistReeval": {
        "ASSISTERS_AND_TARGETS": {
            "guid": "000000012206",
            "en-US": "Assisters and Targets",
            "es-MX": "Asistentes y objetivos",
            "fr-FR": "Soutiens et cibles",
            "ja-JP": "アシスターとターゲット",
            "pt-BR": "Assistentes e Alvos",
            "zh-CN": "助攻者和目标"
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
        },
        "BRIGITTE_FLAIL_CHAIN": {
            "extension": "beamEffects",
            "guid": "000000012AA4",
            "en-US": "Brigitte Flail Chain Beam",
            "de-DE": "Strahl – Kette von Brigittes Streitflegel",
            "es-ES": "Haz de cadena de mangual de Brigitte",
            "es-MX": "Rayo de cadena Mangual de Brigitte",
            "fr-FR": "Rayon de chaîne du Fléau de Brigitte",
            "ja-JP": "ブリギッテのフレイルチェーン・ビーム",
            "pl-PL": "Brigitte – Trzaśnięcie – Wiązka",
            "pt-BR": "Feixe da Corrente do Mangual da Brigitte",
            "zh-CN": "布丽吉塔连枷链光束"
        },
        "ECHO_FOCUSING": {
            "extension": "beamEffects",
            "guid": "000000012A99",
            "en-US": "Echo Focusing Beam",
            "de-DE": "Strahl – Echos Gebündelter Strahl",
            "es-ES": "Haz enfocado de Echo",
            "es-MX": "Rayo de concentración de Echo",
            "fr-FR": "Rayon focalisé d’Écho",
            "ja-JP": "エコーの〈フォーカス・ビーム〉",
            "pl-PL": "Echo – Skupiona Wiązka",
            "pt-BR": "Feixe Concentrado da Echo",
            "zh-CN": "“回声”聚焦光线光束"
        },
        "JUNKRAT_TRAP_CHAIN": {
            "extension": "beamEffects",
            "guid": "000000012A95",
            "en-US": "Junkrat Trap Chain Beam",
            "de-DE": "Strahl – Kette von Junkrats Falle",
            "es-ES": "Haz de cadena de trampa de Junkrat",
            "es-MX": "Rayo de cadena de trampa de Junkrat",
            "fr-FR": "Rayon de chaîne du Piège de Chacal",
            "ja-JP": "ジャンクラットのトラップチェーンのビーム",
            "pl-PL": "Złomiarz – Wiązka Potrzasku",
            "pt-BR": "Feixe da Corrente de Armadilha do Junkrat",
            "zh-CN": "“狂鼠”陷阱链光束"
        },
        "MERCY_HEAL": {
            "extension": "beamEffects",
            "guid": "0000000129FD",
            "en-US": "Mercy Heal Beam",
            "de-DE": "Strahl – Mercys Heilstrahl",
            "es-ES": "Haz de sanación de Mercy",
            "es-MX": "Rayo sanador de Mercy",
            "fr-FR": "Rayon de soin d’Ange",
            "ja-JP": "マーシーの回復ビーム",
            "pl-PL": "Łaska – Wiązka lecząca",
            "pt-BR": "Feixe de Cura da Mercy",
            "zh-CN": "“天使”治疗光束"
        },
        "MERCY_BOOST": {
            "extension": "beamEffects",
            "guid": "0000000129FE",
            "en-US": "Mercy Boost Beam",
            "de-DE": "Strahl – Mercys Verstärkungsstrahl",
            "es-ES": "Haz de daño de Mercy",
            "es-MX": "Rayo potenciador de Mercy",
            "fr-FR": "Rayon d’augmentation des dégâts d’Ange",
            "ja-JP": "マーシーのブースト・ビーム",
            "pl-PL": "Łaska – Wiązka wzmacniająca",
            "pt-BR": "Feixe de Bônus da Mercy",
            "zh-CN": "“天使”强化光束"
        },
        "MOIRA_ORB_HEAL": {
            "extension": "beamEffects",
            "guid": "000000012A9B",
            "en-US": "Moira Orb Heal Beam",
            "de-DE": "Strahl – Heilung von Moiras Biotischer Sphäre",
            "es-ES": "Haz de sanación de orbe de Moira",
            "es-MX": "Rayo de sanación de Orbe de Moira",
            "fr-FR": "Rayon de soin d’Orbe de Moira",
            "ja-JP": "モイラの〈バイオティック・オーブ〉の回復ビーム",
            "pl-PL": "Moira – Wiązka leczenia od Kuli Biotycznej",
            "pt-BR": "Feixe do Orbe de Cura da Moira",
            "zh-CN": "莫伊拉生化之球治疗光束"
        },
        "MOIRA_ORB_DAMAGE": {
            "extension": "beamEffects",
            "guid": "000000012A9C",
            "en-US": "Moira Orb Damage Beam",
            "de-DE": "Strahl – Schaden von Moiras Biotischer Sphäre",
            "es-ES": "Haz de daño de orbe de Moira",
            "es-MX": "Rayo de daño de Orbe de Moira",
            "fr-FR": "Rayon de dégâts d’Orbe de Moira",
            "ja-JP": "モイラの〈バイオティック・オーブ〉のダメージビーム",
            "pl-PL": "Moira – Wiązka obrażeń od Kuli Biotycznej",
            "pt-BR": "Feixe do Orbe de Dano da Moira",
            "zh-CN": "莫伊拉生化之球伤害光束"
        },
        "MOIRA_GRASP_CONNECTED": {
            "extension": "beamEffects",
            "guid": "000000012A9E",
            "en-US": "Moira Grasp Connected Beam",
            "de-DE": "Strahl – Zielverbindung mit Moiras Biotischer Hand",
            "es-ES": "Haz de conexión de Agarre de Moira",
            "es-MX": "Rayo conectado de Agarre de Moira",
            "fr-FR": "Rayon de connexion d’Emprise de Moira",
            "ja-JP": "モイラの〈バイオティック・グラスプ〉の接続ビーム",
            "pl-PL": "Moira – Wiązka łącząca Chwytu",
            "pt-BR": "Feixe Conectado do Punho da Moira",
            "zh-CN": "莫伊拉生化之触连接光束"
        },
        "MOIRA_COALESCENCE": {
            "extension": "beamEffects",
            "guid": "000000012A9D",
            "en-US": "Moira Coalescence Beam",
            "de-DE": "Strahl – Moiras Koaleszenz",
            "es-ES": "Haz de Coalescencia de Moira",
            "es-MX": "Rayo de Coalescencia de Moira",
            "fr-FR": "Rayon de Coalescence de Moira",
            "ja-JP": "モイラの〈コアレッセンス〉のビーム",
            "pl-PL": "Moira – Wiązka Koalescencji",
            "pt-BR": "Feixe da Coalescência da Moira",
            "zh-CN": "莫伊拉聚合射线光束"
        },
        "ORISA_HALT_TENDRIL": {
            "extension": "beamEffects",
            "guid": "000000012AA1",
            "en-US": "Orisa Halt Tendril Beam",
            "de-DE": "Strahl – Verbindung von Orisas Halt!",
            "es-ES": "Haz de enganche de ¡Alto! de Orisa",
            "es-MX": "Haz para Alto de Orisa",
            "fr-FR": "Rayon d’attraction de Halte d’Orisa",
            "ja-JP": "オリーサの〈ストップ！〉の吸引ビーム",
            "pl-PL": "Orisa – Stać! – Wiązka",
            "pt-BR": "Feixe de Conexões de Parados da Orisa",
            "zh-CN": "奥丽莎站住别动连线光束"
        },
        "ORISA_AMPLIFIER": {
            "extension": "beamEffects",
            "guid": "000000012A93",
            "en-US": "Orisa Amplifier Beam",
            "de-DE": "Strahl – Orisas Superbooster",
            "es-ES": "Haz de Amplificador de Orisa",
            "es-MX": "Rayo amplificador de Orisa",
            "fr-FR": "Rayon de Surchargeur d’Orisa",
            "ja-JP": "オリーサの〈アンプリファイア〉のビーム",
            "pl-PL": "Orisa – Wiązka Wzmocnienia",
            "pt-BR": "Feixe do Amplificador da Orisa",
            "zh-CN": "奥丽莎强化光束"
        },
        "SYMMETRA_PROJECTOR": {
            "extension": "beamEffects",
            "guid": "000000012AA3",
            "en-US": "Symmetra Projector Beam",
            "de-DE": "Strahl – Symmetras Photonenprojektor",
            "es-ES": "Haz de Proyector de Symmetra",
            "es-MX": "Rayo del proyector de Symmetra",
            "fr-FR": "Rayon de Projecteur de Symmetra",
            "ja-JP": "シンメトラの〈プロジェクター〉のビーム",
            "pl-PL": "Symmetra – Projektor – Wiązka",
            "pt-BR": "Feixe Projetor da Symmetra",
            "zh-CN": "“秩序之光”光子发射器光束"
        },
        "SYMMETRA_TURRET": {
            "extension": "beamEffects",
            "guid": "000000012AA2",
            "en-US": "Symmetra Turret Beam",
            "de-DE": "Strahl – Symmetras Selbstschussanlage",
            "es-ES": "Haz de torreta de Symmetra",
            "es-MX": "Rayo de torreta de Symmetra",
            "fr-FR": "Rayon de Tourelle de Symmetra",
            "ja-JP": "シンメトラの〈タレット〉のビーム",
            "pl-PL": "Symmetra – Wieżyczka – Wiązka",
            "pt-BR": "Feixe de Torre da Symmetra",
            "zh-CN": "“秩序之光”哨戒炮光束"
        },
        "TORBJORN_TURRET_SIGHT": {
            "extension": "beamEffects",
            "guid": "000000012A9A",
            "en-US": "Torbjörn Turret Sight Beam",
            "de-DE": "Strahl – Anvisieren von Torbjörns Geschütz",
            "es-ES": "Haz de visión de torreta de Torbjörn",
            "es-MX": "Rayo de avistamiento de torreta de Torbjörn",
            "fr-FR": "Rayon de visée de la Tourelle de Torbjörn",
            "ja-JP": "トールビョーンの〈タレット〉の照準ビーム",
            "pl-PL": "Torbjörn – Wiązka pola widzenia Wieżyczki",
            "pt-BR": "Feixe de Visão de Torre do Torbjörn",
            "zh-CN": "托比昂炮台视线光束"
        },
        "WINSTON_TESLA_CANNON": {
            "extension": "beamEffects",
            "guid": "000000012A01",
            "en-US": "Winston Tesla Cannon Beam",
            "de-DE": "Strahl – Winstons Teslakanone",
            "es-ES": "Haz de Cañón tesla de Winston",
            "es-MX": "Rayo de Cañón Tesla de Winston",
            "fr-FR": "Rayon de Canon Tesla de Winston",
            "ja-JP": "ウィンストンの〈テスラ・キャノン〉のビーム",
            "pl-PL": "Winston – Działo Tesli – Wiązka",
            "pt-BR": "Feixe do Canhão de Tesla do Winston",
            "zh-CN": "温斯顿特斯拉炮光束"
        },
        "ZARYA_PARTICLE": {
            "extension": "beamEffects",
            "guid": "000000012AA5",
            "en-US": "Zarya Particle Beam",
            "de-DE": "Strahl – Zaryas Partikelkanone",
            "es-ES": "Haz de partículas de Zarya",
            "es-MX": "Rayo de partículas de Zarya",
            "fr-FR": "Rayon à particules de Zarya",
            "ja-JP": "ザリアの〈パーティクル・キャノン〉のビーム",
            "pl-PL": "Zaria – Działo – Wiązka",
            "pt-BR": "Feixe de Partículas da Zarya",
            "zh-CN": "查莉娅粒子光束"
        },
        "OMNIC_SLICER": {
            "extension": "beamEffects",
            "guid": "000000012A94",
            "en-US": "Omnic Slicer Beam",
            "de-DE": "Strahl – Omnic-Slicer",
            "es-ES": "Haz de cercenador ómnico",
            "es-MX": "Rayo cortador ómnico",
            "fr-FR": "Rayon de Laserateur omniaque",
            "ja-JP": "オムニック・スライサーのビーム",
            "pl-PL": "Omniczny Siekacz – Wiązka",
            "pt-BR": "Feixe do Ômnico Dilacerador",
            "zh-CN": "智械切割者光束"
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
    "ChaseReeval": {},
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
    "ColorLiteral": {
        "AQUA": {
            "guid": "00000000CDB3",
            "en-US": "Aqua",
            "es-MX": "Aguamarina",
            "fr-FR": "Cyan",
            "ja-JP": "アクア",
            "pt-BR": "Azul-piscina",
            "zh-CN": "水绿色"
        },
        "BLACK": {
            "guid": "000000012551",
            "en-US": "Black",
            "es-MX": "Negro",
            "fr-FR": "Noir",
            "ja-JP": "ブラック",
            "pt-BR": "Preto",
            "zh-CN": "黑色"
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
        "GRAY": {
            "guid": "00000001254E",
            "en-US": "Gray",
            "es-MX": "Gris",
            "fr-FR": "Gris",
            "ja-JP": "グレー",
            "pt-BR": "Cinza",
            "zh-CN": "灰色"
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
        "ROSE": {
            "guid": "000000012550",
            "en-US": "Rose",
            "es-MX": "Rosa",
            "ja-JP": "ローズ",
            "pt-BR": "Rosa",
            "zh-CN": "玫红"
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
        "VIOLET": {
            "guid": "00000001254F",
            "en-US": "Violet",
            "es-MX": "Violeta",
            "fr-FR": "Mauve",
            "ja-JP": "バイオレット",
            "pt-BR": "Violeta",
            "zh-CN": "紫色"
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
        "SPRAY_DOWN": {
            "guid": "00000001228C",
            "en-US": "Spray Down",
            "es-MX": "Spray hacia abajo",
            "fr-FR": "Tag bas",
            "ja-JP": "スプレー下",
            "pt-BR": "Spray - Baixo",
            "zh-CN": "喷漆下"
        },
        "SPRAY_LEFT": {
            "guid": "00000001228A",
            "en-US": "Spray Left",
            "es-MX": "Spray a la izquierda",
            "fr-FR": "Tag gauche",
            "ja-JP": "スプレー左",
            "pt-BR": "Spray - Esquerda",
            "zh-CN": "喷漆左"
        },
        "SPRAY_RIGHT": {
            "guid": "00000001228B",
            "en-US": "Spray Right",
            "es-MX": "Spray a la derecha",
            "fr-FR": "Tag droite",
            "ja-JP": "スプレー右",
            "pt-BR": "Spray - Direita",
            "zh-CN": "喷漆右"
        },
        "SPRAY_UP": {
            "guid": "00000001221C",
            "en-US": "Spray Up",
            "es-MX": "Spray hacia arriba",
            "fr-FR": "Tag haut",
            "ja-JP": "スプレー上",
            "pt-BR": "Spray - Cima",
            "zh-CN": "喷漆上"
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
        },
        "ANA_BIOTIC_GRENADE_INCREASED_HEALING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E86",
            "en-US": "Ana Biotic Grenade Increased Healing Sound",
            "de-DE": "Sound – Heilung erhöht durch Anas Biotische Granate",
            "es-ES": "Sonido de sanación aumentada de Granada biótica de Ana",
            "es-MX": "Sonido de sanación aumentada de Granada biótica para Ana",
            "fr-FR": "Son d’augmentation des soins de Grenade biotique d’Ana",
            "ja-JP": "アナの〈バイオティック・グレネード〉の回復量増加音",
            "pl-PL": "Ana – Granat Biotyczny – Dźwięk zwiększonego leczenia",
            "pt-BR": "Som de Melhoria de Cura da Granada Biótica da Ana",
            "zh-CN": "安娜生物手雷增疗声音"
        },
        "ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E84",
            "en-US": "Ana Biotic Grenade No Healing Sound",
            "de-DE": "Sound – Heilungssperre durch Anas Biotische Granate",
            "es-ES": "Sonido antisanación de Granada biótica de Ana",
            "es-MX": "Sonido sin sanación de Granada biótica para Ana",
            "fr-FR": "Son d’incapacité de soin de Grenade biotique d’Ana",
            "ja-JP": "アナの〈バイオティック・グレネード〉の回復不可の音",
            "pl-PL": "Ana – Granat Biotyczny – Dźwięk braku leczenia",
            "pt-BR": "Som de Bloqueio de Cura da Granada Biótica da Ana",
            "zh-CN": "安娜生物手雷禁疗声音"
        },
        "ANA_SLEEPING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E83",
            "en-US": "Ana Sleeping Sound",
            "de-DE": "Sound – Schlaf durch Anas Betäubungspfeil",
            "es-ES": "Sonido durmiente de Ana",
            "es-MX": "Sonido tranquilizante de Ana",
            "fr-FR": "Son d’Endormissement d’Ana",
            "ja-JP": "アナの〈スリープ・ダーツ〉の音",
            "pl-PL": "Ana – Dźwięk uśpienia",
            "pt-BR": "Som de Dormindo da Ana",
            "zh-CN": "安娜麻醉镖声音"
        },
        "REAPER_WRAITH_FORM_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E77",
            "en-US": "Reaper Wraith Form Sound",
            "de-DE": "Sound – Reapers Phantom",
            "es-ES": "Sonido de Forma espectral de Reaper",
            "es-MX": "Sonido de forma para Forma espectral de Reaper",
            "fr-FR": "Son de Forme spectrale de Faucheur",
            "ja-JP": "リーパーの〈レイス・フォーム〉の音",
            "pl-PL": "Żniwiarz – Postać Upiora – Dźwięk",
            "pt-BR": "Som da Forma Fantasma do Reaper",
            "zh-CN": "“死神”幽灵形态声音"
        },
        "SOMBRA_TRANSLOCATING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E7B",
            "en-US": "Sombra Translocating Sound",
            "de-DE": "Sound – Sombras Teleportation",
            "es-ES": "Sonido de translocación de Sombra",
            "es-MX": "Sonido de translocación de Sombra",
            "fr-FR": "Son de Transduction de Sombra",
            "ja-JP": "ソンブラの〈トランズロケーター〉の音",
            "pl-PL": "Sombra – Translokalizacja – Dźwięk",
            "pt-BR": "Som de Translocação da Sombra",
            "zh-CN": "“黑影”位移传动声音"
        },
        "SOLDIER_SPRINT_START_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E75",
            "en-US": "Soldier: 76 Sprint Start Sound",
            "de-DE": "Sound – Start des Sprints von Soldier: 76",
            "es-ES": "Sonido inicial de Sprint de Soldado: 76",
            "es-MX": "Sonido de inicio de Sprint de Soldado: 76",
            "fr-FR": "Son de début de Sprint de Soldat : 76",
            "ja-JP": "ソルジャー76の〈スプリント〉の開始音",
            "pl-PL": "Żołnierz-76 – Sprint – Dźwięk rozpoczęcia",
            "pt-BR": "Som de Início da Disparada do Soldado: 76",
            "zh-CN": "“士兵：76”疾跑开始声音"
        },
        "HEAL_TARGET_ACTIVE": {
            "extension": "buffStatusEffects",
            "guid": "000000012A04",
            "en-US": "Heal Target Active Effect",
            "de-DE": "Effekt – Heilungsziel aktiv",
            "es-ES": "Efecto de activación de objetivo de sanación",
            "es-MX": "Efecto activo de sanación de objetivo",
            "fr-FR": "Effet actif de cible de soin",
            "ja-JP": "ターゲット回復有効エフェクト",
            "pl-PL": "Leczenie – Aktywny efekt celu",
            "pt-BR": "Efeito Alvo de Cura Ativa",
            "zh-CN": "治疗目标激活效果"
        },
        "SOMBRA_TRANSLOCATING_MATERIAL": {
            "extension": "buffStatusEffects",
            "guid": "000000012BF3",
            "en-US": "Sombra Translocating Material Effect",
            "de-DE": "Effekt – Material bei Sombras Teleportation",
            "es-ES": "Efecto material de translocación de Sombra",
            "es-MX": "Efecto material de translocación de Sombra",
            "fr-FR": "Effet matériel de Transduction de Sombra",
            "ja-JP": "ソンブラの〈トランズロケーター〉の物質エフェクト",
            "pl-PL": "Sombra – Efekt Translokalizacji materiału",
            "pt-BR": "Efeito Translocação Material da Sombra",
            "zh-CN": "“黑影”位移传动材料效果"
        },
        "MCCREE_FLASHBANG_STUNNED": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BE9",
            "en-US": "McCree Flashbang Stunned Effect",
            "de-DE": "Effekt – betäubt durch McCrees Blendgranate",
            "es-ES": "Efecto de aturdimiento de Granada cegadora de McCree",
            "es-MX": "Efecto de aturdido con Granada aturdidora de McCree",
            "fr-FR": "Effet d’Étourdi de Grenade flash de McCree",
            "ja-JP": "マクリーの〈フラッシュバン〉のスタン・エフェクト",
            "pl-PL": "McCree – Efekt ogłuszenia Granatem Błyskowym",
            "pt-BR": "Efeito Atordoamento do Clarão do McCree",
            "zh-CN": "麦克雷闪光弹击晕效果"
        },
        "SOMBRA_HACKED_STARTING": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BF1",
            "en-US": "Sombra Hacked Starting Effect",
            "de-DE": "Effekt – durch Sombra gehackt Start",
            "es-ES": "Efecto inicial hackeado de Sombra",
            "es-MX": "Efecto inicial hackeado de Sombra",
            "fr-FR": "Effet de démarrage de Piraté de Sombra",
            "ja-JP": "ソンブラの〈ハック〉の開始エフェクト",
            "pl-PL": "Sombra – Efekt rozpoczęcia Hakowania",
            "pt-BR": "Efeito Início do Hackear da Sombra",
            "zh-CN": "“黑影”黑客入侵完成开始效果"
        },
        "BRIGITTE_REPAIR_PACK_IMPACT": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D2B",
            "en-US": "Brigitte Repair Pack Impact Effect",
            "de-DE": "Effekt – Einschlag von Brigittes Reparaturset",
            "es-ES": "Efecto de impacto de kit de reparación de Brigitte",
            "es-MX": "Efecto de impacto para Kit de reparación de Brigitte",
            "fr-FR": "Effet d’impact de Module de réparation de Brigitte",
            "ja-JP": "ブリギッテの〈リペア・パック〉の着弾エフェクト",
            "pl-PL": "Brigitte – Efekt trafienia Pakietu Regeneracyjnego",
            "pt-BR": "Efeito de Impacto do Kit de Reparos da Brigitte",
            "zh-CN": "布丽吉塔恢复包击中效果"
        },
        "BRIGITTE_REPAIR_PACK_ARMOR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D2C",
            "en-US": "Brigitte Repair Pack Armor Effect",
            "de-DE": "Effekt – Rüstung durch Brigittes Reparaturset",
            "es-ES": "Efecto de armadura de kit de reparación de Brigitte",
            "es-MX": "Efecto de armadura para Kit de reparación de Brigitte",
            "fr-FR": "Effet d’armure de Module de réparation de Brigitte",
            "ja-JP": "ブリギッテの〈リペア・パック〉のアーマー・エフェクト",
            "pl-PL": "Brigitte – Efekt pancerza Pakietu Regeneracyjnego",
            "pt-BR": "Efeito de Armadura do Kit de Reparos da Brigitte",
            "zh-CN": "布丽吉塔恢复包护甲效果"
        },
        "BRIGITTE_WHIP_SHOT_HEAL_AREA": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D2D",
            "en-US": "Brigitte Whip Shot Heal Area Effect",
            "de-DE": "Effekt – Flächenheilung durch Brigittes Flegelstoß",
            "es-ES": "Efecto de área de sanación de Lanzamiento de mangual de Brigitte",
            "es-MX": "Efecto de área de sanación para Azote de mangual de Brigitte",
            "fr-FR": "Effet de zone de soin de Fléau cinglant de Brigitte",
            "ja-JP": "ブリギッテの〈ウィップ・ショット〉の回復エリア・エフェクト",
            "pl-PL": "Brigitte – Efekt leczenia obszarowego Trzaśnięcia",
            "pt-BR": "Efeito de Área da Cura do Disparo Açoitador da Brigitte",
            "zh-CN": "布丽吉塔流星飞锤范围治疗效果"
        },
        "DVA_MICRO_MISSILES_EXPLOSION": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D2E",
            "en-US": "DVa Micro Missiles Explosion Effect",
            "de-DE": "Effekt – Explosion von D.Vas Mikroraketen",
            "es-ES": "Efecto de explosión de Micromisiles de D.Va",
            "es-MX": "Efecto de explosión para Micromisiles de D.Va",
            "fr-FR": "Effet d’explosion de Micro-missiles de D.Va",
            "ja-JP": "D.Vaの〈マイクロ・ミサイル〉の爆発エフェクト",
            "pl-PL": "D.Va – Mikro-pociski – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão dos Micro Mísseis da Dva",
            "zh-CN": "D.Va微型飞弹爆炸效果"
        },
        "DVA_SELF_DESTRUCT_EXPLOSION": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D2F",
            "en-US": "DVa Self Destruct Explosion Effect",
            "de-DE": "Effekt – Explosion von D.Vas Selbstzerstörung",
            "es-ES": "Efecto de explosión de Autodestrucción de D.Va",
            "es-MX": "Efecto de explosión para Autodestrucción de D.Va",
            "fr-FR": "Effet d’explosion d’Autodestruction de D.Va",
            "ja-JP": "D.Vaの〈自爆〉の爆発エフェクト",
            "pl-PL": "D.Va – Samozniszczenie – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão da Autodestruição da Dva",
            "zh-CN": "D.Va自毁爆炸效果"
        },
        "ECHO_STICKY_BOMB_EXPLOSION": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D34",
            "en-US": "Echo Sticky Bomb Explosion Effect",
            "de-DE": "Effekt – Explosion von Echos Haftbomben",
            "es-ES": "Efecto de explosión de Bomba lapa de Echo",
            "es-MX": "Efecto de explosión para Bomba pegajosa de Echo",
            "fr-FR": "Effet d’explosion de Bombe collante d’Écho",
            "ja-JP": "エコーの〈スティッキー・ボム〉の爆発エフェクト",
            "pl-PL": "Echo – Bomba Przyczepna – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão da Bomba Aderente da Echo",
            "zh-CN": "“回声”黏性炸弹爆炸效果"
        },
        "HANZO_SONIC_ARROW_INITIAL_PULSE": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D3A",
            "en-US": "Hanzo Sonic Arrow Initial Pulse Effect",
            "de-DE": "Effekt – Einschlagimpuls von Hanzos Sonarpfeil",
            "es-ES": "Efecto de pulso inicial de Flecha sónica de Hanzo",
            "es-MX": "Efecto de pulso inicial para Flecha sónica de Hanzo",
            "fr-FR": "Effet d’impulsion initiale de Flèche sonique de Hanzo",
            "ja-JP": "ハンゾーの〈鳴響矢水〉の第一波のエフェクト",
            "pl-PL": "Hanzo – Strzała Soniczna – Efekt wstępnego impulsu",
            "pt-BR": "Efeito do Pulso Inicial da Flecha Sônica do Hanzo",
            "zh-CN": "半藏音初始脉冲效果"
        },
        "LUCIO_SOUND_BARRIER_CAST": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D3E",
            "en-US": "Lúcio Sound Barrier Cast Effect",
            "de-DE": "Effekt – Aktivierung von Lúcios Soundbarriere",
            "es-ES": "Efecto de lanzamiento de Barrera de sonido de Lúcio",
            "es-MX": "Efecto de emisión de Barrera de sonido para Lúcio",
            "fr-FR": "Effet de lancement de Mur de son de Lúcio",
            "ja-JP": "ルシオの〈サウンド・バリア〉の発動エフェクト",
            "pl-PL": "Lúcio – Bariera Dźwiękowa – Efekt użycia",
            "pt-BR": "Efeito de Lançamento da Barreira de Som do Lúcio",
            "zh-CN": "卢西奥音障施放效果"
        },
        "MOIRA_FADE_DISAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D40",
            "en-US": "Moira Fade Disappear Effect",
            "de-DE": "Effekt – Verschwinden durch Moiras Phasensprung",
            "es-ES": "Efecto de desaparición de Evanescencia de Moira",
            "es-MX": "Efecto de desaparición de Evanescencia para Moira",
            "fr-FR": "Effet de disparition de Volatilité de Moira",
            "ja-JP": "モイラの〈フェード〉の消失エフェクト",
            "pl-PL": "Moira – Zniknięcie – Efekt zniknięcia",
            "pt-BR": "Efeito de Desaparição de Desvanecer da Moira",
            "zh-CN": "莫伊拉消散消失效果"
        },
        "MOIRA_FADE_REAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D41",
            "en-US": "Moira Fade Reappear Effect",
            "de-DE": "Effekt – Wiedererscheinen durch Moiras Phasensprung",
            "es-ES": "Efecto de reaparición de Evanescencia de Moira",
            "es-MX": "Efecto de reaparición de Evanescencia para Moira",
            "fr-FR": "Effet de réapparition de Volatilité de Moira",
            "ja-JP": "モイラの〈フェード〉の再出現エフェクト",
            "pl-PL": "Moira – Zniknięcie – Efekt ponownego pojawienia się",
            "pt-BR": "Efeito de Reaparição de Desvanecer da Moira",
            "zh-CN": "莫伊拉消散重现效果"
        },
        "ORISA_HALT_IMPLOSION": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D42",
            "en-US": "Orisa Halt Implosion Effect",
            "de-DE": "Effekt – Implosion von Orisas Halt!",
            "es-ES": "Efecto de implosión de ¡Alto! de Orisa",
            "es-MX": "Efecto de implosión para Alto de Orisa",
            "fr-FR": "Effet d’implosion de Halte d’Orisa",
            "ja-JP": "オリーサの〈ストップ！〉の崩壊エフェクト",
            "pl-PL": "Orisa – Stać! – Efekt implozji",
            "pt-BR": "Efeito de Implosão de Parados da Orisa",
            "zh-CN": "奥丽莎站住别动内爆效果"
        },
        "SIGMA_HYPERSPHERE_IMPLOSION": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D48",
            "en-US": "Sigma Hypersphere Implosion Effect",
            "de-DE": "Effekt – Implosion von Sigmas Hypersphären",
            "es-ES": "Efecto de implosión de Hiperesfera de Sigma",
            "es-MX": "Efecto de implosión por hiperesfera de Sigma",
            "fr-FR": "Effet d’implosion d’Hypersphère de Sigma",
            "ja-JP": "シグマの〈ハイパースフィア〉の崩壊エフェクト",
            "pl-PL": "Sigma – Hipersfera – Efekt implozji",
            "pt-BR": "Efeito de Implosão da Hiperesfera do Sigma",
            "zh-CN": "“西格玛”超能之球内爆效果"
        },
        "SOMBRA_LOGO": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D4A",
            "en-US": "Sombra Logo Effect",
            "de-DE": "Effekt – Sombras Logo",
            "es-ES": "Efecto de logo de Sombra",
            "es-MX": "Efecto de logo de Sombra",
            "fr-FR": "Effet de logo de Sombra",
            "ja-JP": "ソンブラのロゴ・エフェクト",
            "pl-PL": "Sombra – Logo – Efekt",
            "pt-BR": "Efeito do Logo da Sombra",
            "zh-CN": "“黑影”标志效果"
        },
        "SOMBRA_TRANSLOCATOR_DISAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D4D",
            "en-US": "Sombra Translocator Disappear Effect",
            "de-DE": "Effekt – Verschwinden durch Sombras Teleportation",
            "es-ES": "Efecto de desaparición de Baliza de translocación de Sombra",
            "es-MX": "Efecto de desaparición de translocalizador para Sombra",
            "fr-FR": "Effet de disparition de Transducteur de Sombra",
            "ja-JP": "ソンブラの〈トランズロケーター〉の消失エフェクト",
            "pl-PL": "Sombra – Translokator – Efekt zniknięcia",
            "pt-BR": "Efeito de Desaparecimento do Translocador da Sombra",
            "zh-CN": "“黑影”位移传动消失效果"
        },
        "SOMBRA_TRANSLOCATOR_REAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D4C",
            "en-US": "Sombra Translocator Reappear Effect",
            "de-DE": "Effekt – Wiedererscheinen durch Sombras Teleportation",
            "es-ES": "Efecto de reaparición de Baliza de translocación de Sombra",
            "es-MX": "Efecto de reaparición de translocalizador para Sombra",
            "fr-FR": "Effet de réapparition de Transducteur de Sombra",
            "ja-JP": "ソンブラの〈トランズロケーター〉の再出現エフェクト",
            "pl-PL": "Sombra – Translokator – Efekt ponownego pojawienia się",
            "pt-BR": "Efeito de Reaparição do Translocador da Sombra",
            "zh-CN": "“黑影”位移传动重现效果"
        },
        "SOMBRA_EMP_EXPLOSION_EFFECT": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D4B",
            "en-US": "Sombra EMP Explosion Effect",
            "de-DE": "Effekt – Explosion von Sombras EMP",
            "es-ES": "Efecto de explosión de PEM de Sombra",
            "es-MX": "Efecto de explosión PEM de Sombra",
            "fr-FR": "Effet d’explosion d’IEM de Sombra",
            "ja-JP": "ソンブラの〈EMP〉の爆発エフェクト",
            "pl-PL": "Sombra – EMP – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão do PEM da Sombra",
            "zh-CN": "“黑影”电磁脉冲爆炸效果"
        },
        "SYMMETRA_TELEPORTER_REAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D4E",
            "en-US": "Symmetra Teleporter Reappear Effect",
            "de-DE": "Effekt – Wiedererscheinen durch Symmetras Teleporter",
            "es-ES": "Efecto de reaparición de Teletransportador de Symmetra",
            "es-MX": "Efecto de reaparición de teletransportador para Symmetra",
            "fr-FR": "Effet de réapparition de Téléporteur de Symmetra",
            "ja-JP": "シンメトラの〈テレポーター〉の再出現エフェクト",
            "pl-PL": "Symmetra – Teleporter – Efekt ponownego pojawienia się",
            "pt-BR": "Efeito de Reaparição do Teletransportador da Symmetra",
            "zh-CN": "“秩序之光”传送面板重现效果"
        },
        "TRACER_RECALL_DISAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D51",
            "en-US": "Tracer Recall Disappear Effect",
            "de-DE": "Effekt – Verschwinden durch Tracers Zeitschleife",
            "es-ES": "Efecto de desaparición de Regresión de Tracer",
            "es-MX": "Efecto de desaparición de Regresión para Tracer",
            "fr-FR": "Effet de disparition de Rappel de Tracer",
            "ja-JP": "トレーサーの〈リコール〉の消失エフェクト",
            "pl-PL": "Smuga – Powrót – Efekt zniknięcia",
            "pt-BR": "Efeito de Desaparecimento da Recordação da Tracer",
            "zh-CN": "”猎空“闪回消失效果"
        },
        "TRACER_RECALL_REAPPEAR": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D50",
            "en-US": "Tracer Recall Reappear Effect",
            "de-DE": "Effekt – Wiedererscheinen durch Tracers Zeitschleife",
            "es-ES": "Efecto de reaparición de Regresión de Tracer",
            "es-MX": "Efecto de reaparición de Regresión para Tracer",
            "fr-FR": "Effet de réapparition de Rappel de Tracer",
            "ja-JP": "トレーサーの〈リコール〉の再出現エフェクト",
            "pl-PL": "Smuga – Powrót – Efekt pojawienia się",
            "pt-BR": "Efeito de Reaparecimento da Recordação da Tracer",
            "zh-CN": "“猎空“闪回重现效果"
        },
        "ZARYA_PARTICLE_CANNON_EXPLOSION": {
            "extension": "energyExplosionEffects",
            "guid": "000000012D56",
            "en-US": "Zarya Particle Cannon Explosion Effect",
            "de-DE": "Effekt – Explosion von Zaryas Partikelkanone",
            "es-ES": "Efecto de explosión de Cañón de partículas de Zarya",
            "es-MX": "Efecto de explosión para Cañón de partículas de Zarya",
            "fr-FR": "Effet d’explosion de Canon à particules de Zarya",
            "ja-JP": "ザリアの〈パーティクル・キャノン〉の爆発エフェクト",
            "pl-PL": "Zaria – Działo Cząsteczkowe – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão do Canhão de Partículas da Zarya",
            "zh-CN": "查莉娅粒子炮爆炸效果"
        },
        "ANA_BIOTIC_GRENADE_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EDB",
            "en-US": "Ana Biotic Grenade Explosion Sound",
            "de-DE": "Sound – Explosion von Anas Biotischer Granate",
            "es-ES": "Sonido de explosión de Granada biótica de Ana",
            "es-MX": "Sonido de explosión para Granada biótica de Ana",
            "fr-FR": "Son d’explosion de Grenade biotique d’Ana",
            "ja-JP": "アナの〈バイオティック・グレネード〉の爆発音",
            "pl-PL": "Ana – Granat Biotyczny – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão da Granada Biótica da Ana",
            "zh-CN": "安娜生物手雷爆炸声音"
        },
        "ASHE_DYNAMITE_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EDA",
            "en-US": "Ashe Dynamite Explosion Sound",
            "de-DE": "Sound – Explosion von Ashes Dynamit",
            "es-ES": "Sonido de explosión de Dinamita de Ashe",
            "es-MX": "Sonido de explosión para Dinamita de Ashe",
            "fr-FR": "Son d’explosion de Dynamite d’Ashe",
            "ja-JP": "アッシュの〈ダイナマイト〉の爆発音",
            "pl-PL": "Ashe – Dynamit – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão da Dinamite da Ashe",
            "zh-CN": "艾什延时雷管爆炸声音"
        },
        "BAPTISTE_BIOTIC_LAUNCHER_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED9",
            "en-US": "Baptiste Biotic Launcher Explosion Sound",
            "de-DE": "Sound – Explosion von Baptistes Biotikwerfer",
            "es-ES": "Sonido de explosión de Lanzagranadas biótico de Baptiste",
            "es-MX": "Sonido de explosión para Disparador biótico de Baptiste",
            "fr-FR": "Son d’explosion de Bio-lanceur de Baptiste",
            "ja-JP": "バティストの〈バイオティック・ランチャー〉の爆発音",
            "pl-PL": "Baptiste – Miotacz Biotyczny – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Lançador Biótico do Baptiste",
            "zh-CN": "巴蒂斯特生化榴弹枪爆炸声音"
        },
        "BASTION_TANK_CANNON_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED8",
            "en-US": "Bastion Tank Cannon Explosion Sound",
            "de-DE": "Sound – Explosion von Bastions Panzerkanone",
            "es-ES": "Sonido de explosión de cañón de tanque de Bastion",
            "es-MX": "Sonido de explosión para cañón de tanque de Bastion",
            "fr-FR": "Son d’explosion du canon de Tank de Bastion",
            "ja-JP": "バスティオンのタンク・キャノンの爆発音",
            "pl-PL": "Bastion – Działko Czołgu – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão de Canhão do Bastion Tanque",
            "zh-CN": "“堡垒”坦克炮爆炸声音"
        },
        "BRIGITTE_WHIP_SHOT_HEAL_AREA_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED7",
            "en-US": "Brigitte Whip Shot Heal Area Sound",
            "de-DE": "Sound – Flächenheilung durch Brigittes Flegelstoß",
            "es-ES": "Sonido de área de sanación de Lanzamiento de mangual de Brigitte",
            "es-MX": "Sonido de área de sanación para Azote de mangual de Brigitte",
            "fr-FR": "Son de zone de soin de Fléau cinglant de Brigitte",
            "ja-JP": "ブリギッテの〈ウィップ・ショット〉の回復エリア音",
            "pl-PL": "Brigitte – Trzaśnięcie – Dźwięk leczenia obszarowego",
            "pt-BR": "Som da Área da Cura do Disparo Açoitador da Brigitte",
            "zh-CN": "布丽吉塔流星飞锤范围治疗声音"
        },
        "BRIGITTE_REPAIR_PACK_IMPACT_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED6",
            "en-US": "Brigitte Repair Pack Impact Sound",
            "de-DE": "Sound – Einschlag von Brigittes Reparaturset",
            "es-ES": "Sonido de impacto de kit de reparación de Brigitte",
            "es-MX": "Sonido de impacto para Kit de reparación de Brigitte",
            "fr-FR": "Son d’impact de Module de réparation de Brigitte",
            "ja-JP": "ブリギッテの〈リペア・パック〉の着弾音",
            "pl-PL": "Brigitte – Pakiet Regeneracyjny – Dźwięk trafienia",
            "pt-BR": "Som de Impacto do Kit de Reparos da Brigitte",
            "zh-CN": "布丽吉塔恢复包击中声音"
        },
        "BRIGITTE_REPAIR_PACK_ARMOR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED5",
            "en-US": "Brigitte Repair Pack Armor Sound",
            "de-DE": "Sound – Rüstung durch Brigittes Reparaturset",
            "es-ES": "Sonido de armadura de kit de reparación de Brigitte",
            "es-MX": "Sonido de armadura para Kit de reparación de Brigitte",
            "fr-FR": "Son d’armure de Module de réparation de Brigitte",
            "ja-JP": "ブリギッテの〈リペア・パック〉のアーマーの音",
            "pl-PL": "Brigitte – Pakiet Regeneracyjny – Dźwięk pancerza",
            "pt-BR": "Som de Armadura do Kit de Reparos da Brigitte",
            "zh-CN": "布丽吉塔恢复包护甲声音"
        },
        "DVA_MICRO_MISSILES_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED4",
            "en-US": "DVa Micro Missiles Explosion Sound",
            "de-DE": "Sound – Explosion von D.Vas Mikroraketen",
            "es-ES": "Sonido de explosión de Micromisiles de D.Va",
            "es-MX": "Sonido de explosión para Micromisiles de D.Va",
            "fr-FR": "Son d’explosion de Micro-missiles de D.Va",
            "ja-JP": "D.Vaの〈マイクロ・ミサイル〉の爆発音",
            "pl-PL": "D.Va – Mikro-pociski – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão dos Micro Mísseis da Dva",
            "zh-CN": "D.Va微型飞弹爆炸声音"
        },
        "DVA_SELF_DESTRUCT_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED3",
            "en-US": "DVa Self Destruct Explosion Sound",
            "de-DE": "Sound – Explosion von D.Vas Selbstzerstörung",
            "es-ES": "Sonido de explosión de Autodestrucción de D.Va",
            "es-MX": "Sonido de explosión para Autodestrucción de D.Va",
            "fr-FR": "Son d’explosion d’Autodestruction de D.Va",
            "ja-JP": "D.Vaの〈自爆〉の爆発音",
            "pl-PL": "D.Va – Samozniszczenie – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão da Autodestruição da Dva",
            "zh-CN": "D.Va自毁爆炸声音"
        },
        "DOOMFIST_RISING_UPPERCUT_LEAP_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED0",
            "en-US": "Doomfist Rising Uppercut Leap Sound",
            "de-DE": "Sound – Sprung von Doomfists Uppercut",
            "es-ES": "Sonido de salto de Uppercut de Doomfist",
            "es-MX": "Sonido de salto para Gancho ascendente de Doomfist",
            "fr-FR": "Son de saut d’Uppercut de Doomfist",
            "ja-JP": "ドゥームフィストの〈ライジング・アッパーカット〉の跳躍音",
            "pl-PL": "Pięść Zagłady – Podbródkowy – Dźwięk skoku",
            "pt-BR": "Som de Pulo do Gancho Ascendente do Doomfist",
            "zh-CN": "“末日铁拳”上勾重拳跳跃声音"
        },
        "DOOMFIST_RISING_UPPERCUT_IMPACT_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED1",
            "en-US": "Doomfist Rising Uppercut Impact Sound",
            "de-DE": "Sound – Einschlag von Doomfists Uppercut",
            "es-ES": "Sonido de impacto de Uppercut de Doomfist",
            "es-MX": "Sonido de impacto para Gancho ascendente de Doomfist",
            "fr-FR": "Son d’impact d’Uppercut de Doomfist",
            "ja-JP": "ドゥームフィストの〈ライジング・アッパーカット〉の衝突音",
            "pl-PL": "Pięść Zagłady – Podbródkowy – Dźwięk trafienia",
            "pt-BR": "Som de Impacto do Gancho Ascendente do Doomfist",
            "zh-CN": "“末日铁拳”上勾重拳击中声音"
        },
        "DOOMFIST_METEOR_STRIKE_IMPACT_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ED2",
            "en-US": "Doomfist Meteor Strike Impact Sound",
            "de-DE": "Sound – Einschlag von Doomfists Meteorschlag",
            "es-ES": "Sonido de impacto de Meteoro de Doomfist",
            "es-MX": "Sonido de impacto para Golpe de meteoro de Doomfist",
            "fr-FR": "Son d’impact de Frappe météore de Doomfist",
            "ja-JP": "ドゥームフィストの〈メテオ・ストライク〉の衝突音",
            "pl-PL": "Pięść Zagłady – Meteor – Dźwięk trafienia",
            "pt-BR": "Som de Impacto do Impacto Meteoro do Doomfist",
            "zh-CN": "“末日铁拳”毁天灭地击中声音"
        },
        "ECHO_STICKY_BOMB_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ECF",
            "en-US": "Echo Sticky Bomb Explosion Sound",
            "de-DE": "Sound – Explosion von Echos Haftbomben",
            "es-ES": "Sonido de explosión de Bomba lapa de Echo",
            "es-MX": "Sonido de explosión para Bomba pegajosa de Echo",
            "fr-FR": "Son d’explosion de Bombe collante d’Écho",
            "ja-JP": "エコーの〈スティッキー・ボム〉の爆発音",
            "pl-PL": "Echo – Bomba Przyczepna – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão da Bomba Aderente da Echo",
            "zh-CN": "“回声”黏性炸弹爆炸声音"
        },
        "JUNKRAT_FRAG_LAUNCHER_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ECC",
            "en-US": "Junkrat Frag Launcher Explosion Sound",
            "de-DE": "Sound – Explosion von Junkrats Granatwerfer",
            "es-ES": "Sonido de explosión de Lanzagranadas de Junkrat",
            "es-MX": "Sonido de explosión para Lanzagranadas de fragmentación de Junkrat",
            "fr-FR": "Son d’explosion de Lance-grenades de Chacal",
            "ja-JP": "ジャンクラットの〈フラグ・ランチャー〉の爆発音",
            "pl-PL": "Złomiarz – Granatnik – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Lançador de Granadas do Junkrat",
            "zh-CN": "“狂鼠”榴弹发射器爆炸声音"
        },
        "JUNKRAT_CONCUSSION_MINE_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ECD",
            "en-US": "Junkrat Concussion Mine Explosion Sound",
            "de-DE": "Sound – Explosion von Junkrats Ferngezündeter Mine",
            "es-ES": "Sonido de explosión de Mina de conmoción de Junkrat",
            "es-MX": "Sonido de explosión para Mina de conmoción de Junkrat",
            "fr-FR": "Son d’explosion de Mine incapacitante de Chacal",
            "ja-JP": "ジャンクラットの〈コンカッション・マイン〉の爆発音",
            "pl-PL": "Złomiarz – Mina Ogłuszająca – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão da Mina de Concussão do Junkrat",
            "zh-CN": "“狂鼠”震荡地雷爆炸声音"
        },
        "JUNKRAT_RIP_TIRE_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ECE",
            "en-US": "Junkrat RIP Tire Explosion Sound",
            "de-DE": "Sound – Explosion von Junkrats Kamikazereifen",
            "es-ES": "Sonido de explosión de Rueda explosiva de Junkrat",
            "es-MX": "Sonido de explosión para Neumático Desgarrador de Junkrat",
            "fr-FR": "Son d’explosion de Pneumastic de Chacal",
            "ja-JP": "ジャンクラットの〈RIPタイヤ〉の爆発音",
            "pl-PL": "Złomiarz – MordOpona – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Pneu da Morte do Junkrat",
            "zh-CN": "“狂鼠”炸弹轮胎爆炸声音"
        },
        "HANZO_SONIC_ARROW_INITIAL_PULSE_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ECB",
            "en-US": "Hanzo Sonic Arrow Initial Pulse Sound",
            "de-DE": "Sound – Einschlagimpuls von Hanzos Sonarpfeil",
            "es-ES": "Sonido de pulso inicial de Flecha sónica de Hanzo",
            "es-MX": "Sonido de pulso inicial para Flecha sónica de Hanzo",
            "fr-FR": "Son d’impulsion initiale de Flèche sonique de Hanzo",
            "ja-JP": "ハンゾーの〈鳴響矢水〉の第一波の音",
            "pl-PL": "Hanzo – Strzała Soniczna – Dźwięk wstępnego impulsu",
            "pt-BR": "Som do Pulso Inicial da Flecha Sônica do Hanzo",
            "zh-CN": "半藏音初始脉冲声音"
        },
        "LUCIO_SOUND_BARRIER_CAST_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012ECA",
            "en-US": "Lúcio Sound Barrier Cast Sound",
            "de-DE": "Sound – Aktivierung von Lúcios Soundbarriere",
            "es-ES": "Sonido de lanzamiento de Barrera de sonido de Lúcio",
            "es-MX": "Sonido de emisión de Barrera de sonido para Lúcio",
            "fr-FR": "Son de lancement de Mur de son de Lúcio",
            "ja-JP": "ルシオの〈サウンド・バリア〉の発動音",
            "pl-PL": "Lúcio – Bariera Dźwiękowa – Dźwięk użycia",
            "pt-BR": "Som de Ativação Barreira de Som do Lúcio",
            "zh-CN": "卢西奥音障施放声音"
        },
        "MCCREE_FLASHBANG_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC9",
            "en-US": "McCree Flashbang Explosion Sound",
            "de-DE": "Sound – Explosion von McCrees Blendgranate",
            "es-ES": "Sonido de explosión de Granada cegadora de McCree",
            "es-MX": "Sonido de explosión con Granada aturdidora de McCree",
            "fr-FR": "Son d’explosion de Grenade flash de McCree",
            "ja-JP": "マクリーの〈フラッシュバン〉の爆発音",
            "pl-PL": "McCree – Granat Błyskowy – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Clarão do McCree",
            "zh-CN": "麦克雷闪光弹爆炸声音"
        },
        "MOIRA_FADE_DISAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC8",
            "en-US": "Moira Fade Disappear Sound",
            "de-DE": "Sound – Verschwinden durch Moiras Phasensprung",
            "es-ES": "Sonido de desaparición de Evanescencia de Moira",
            "es-MX": "Sonido de desaparición de Evanescencia para Moira",
            "fr-FR": "Son de disparition de Volatilité de Moira",
            "ja-JP": "モイラの〈フェード〉の消失音",
            "pl-PL": "Moira – Zniknięcie – Dźwięk zniknięcia",
            "pt-BR": "Som de Desaparição do Desvanecer da Moira",
            "zh-CN": "莫伊拉消散消失声音"
        },
        "MOIRA_FADE_REAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC7",
            "en-US": "Moira Fade Reappear Sound",
            "de-DE": "Sound – Wiedererscheinen durch Moiras Phasensprung",
            "es-ES": "Sonido de reaparición de Evanescencia de Moira",
            "es-MX": "Sonido de reaparición de Evanescencia para Moira",
            "fr-FR": "Son de réapparition de Volatilité de Moira",
            "ja-JP": "モイラの〈フェード〉の再出現音",
            "pl-PL": "Moira – Zniknięcie – Dźwięk pojawienia się",
            "pt-BR": "Som de Reaparição do Desvanecer da Moira",
            "zh-CN": "莫伊拉消散重现声音"
        },
        "ORISA_HALT_IMPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC6",
            "en-US": "Orisa Halt Implosion Sound",
            "de-DE": "Sound – Implosion von Orisas Halt!",
            "es-ES": "Sonido de implosión de ¡Alto! de Orisa",
            "es-MX": "Sonido de implosión para Alto de Orisa",
            "fr-FR": "Son d’implosion de Halte d’Orisa",
            "ja-JP": "オリーサの〈ストップ！〉の崩壊音",
            "pl-PL": "Orisa – Stać! – Dźwięk implozji",
            "pt-BR": "Som de Implosão de Parados da Orisa",
            "zh-CN": "奥丽莎站住别动内爆声音"
        },
        "PHARAH_ROCKET_LAUNCHER_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC4",
            "en-US": "Pharah Rocket Launcher Explosion Sound",
            "de-DE": "Sound – Explosion von Pharahs Raketenwerfer",
            "es-ES": "Sonido de explosión de Lanzacohetes de Pharah",
            "es-MX": "Sonido de explosión para Lanzacohetes de Pharah",
            "fr-FR": "Son d’explosion de Lance-roquettes de Pharah",
            "ja-JP": "ファラの〈ロケット・ランチャー〉の爆発音",
            "pl-PL": "Fara – Wyrzutnia Rakiet – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Lançador de Foguetes da Pharah",
            "zh-CN": "“法老之鹰”火箭发射器爆炸声音"
        },
        "PHARAH_CONCUSSIVE_BLAST_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC5",
            "en-US": "Pharah Concussive Blast Sound",
            "de-DE": "Sound – Pharahs Erschütterungsimpuls",
            "es-ES": "Sonido de Disparo de conmoción de Pharah",
            "es-MX": "Sonido de Explosión conmocionante de Pharah",
            "fr-FR": "Son de Conflagration de Pharah",
            "ja-JP": "ファラの〈コンカッシブ・ブラスト〉の音",
            "pl-PL": "Fara – Przytłaczający Strzał – Dźwięk wybuchu",
            "pt-BR": "Som de Explosão Concussiva da Pharah",
            "zh-CN": "“法老之鹰”震荡冲击声音"
        },
        "PHARAH_BARRAGE_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC3",
            "en-US": "Pharah Barrage Explosion Sound",
            "de-DE": "Sound – Explosion von Pharahs Trommelfeuer",
            "es-ES": "Sonido de explosión de Bombardeo de Pharah",
            "es-MX": "Sonido de explosión para Bombardeo de Pharah",
            "fr-FR": "Son d’explosion de Barrage de Pharah",
            "ja-JP": "ファラの〈バレッジ〉の爆発音",
            "pl-PL": "Fara – Salwa – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão de Bombardeio da Pharah",
            "zh-CN": "“法老之鹰”火箭弹幕爆炸声音"
        },
        "REINHARDT_FIRE_STRIKE_TARGET_IMPACT_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC2",
            "en-US": "Reinhardt Fire Strike Target Impact Sound",
            "de-DE": "Sound – Einschlag von Reinhardts Feuerschlag",
            "es-ES": "Sonido de impacto en el objetivo de Onda de fuego de Reinhardt",
            "es-MX": "Sonido de impacto sobre objetivo de Ataque ígneo de Reinhardt",
            "fr-FR": "Son d’impact de cible de Frappe de feu de Reinhardt",
            "ja-JP": "ラインハルトの〈ファイア・ストライク〉のターゲット衝突音",
            "pl-PL": "Reinhardt – Ogniste Uderzenie – Dźwięk trafienia",
            "pt-BR": "Som de Impacto no Alvo do Tiro Flamejante do Reinhardt",
            "zh-CN": "莱因哈特烈焰打击目标击中声音"
        },
        "SIGMA_HYPERSPHERE_IMPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC1",
            "en-US": "Sigma Hypersphere Implosion Sound",
            "de-DE": "Sound – Implosion von Sigmas Hypersphären",
            "es-ES": "Sonido de implosión de Hiperesfera de Sigma",
            "es-MX": "Sonido de implosión por hiperesfera de Sigma",
            "fr-FR": "Son d’implosion d’Hypersphère de Sigma",
            "ja-JP": "シグマの〈ハイパースフィア〉の崩壊音",
            "pl-PL": "Sigma – Hipersfera – Dźwięk implozji",
            "pt-BR": "Som de Implosão da Hiperesfera do Sigma",
            "zh-CN": "“西格玛”超能之球内爆声音"
        },
        "SIGMA_ACCRETION_IMPACT_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EC0",
            "en-US": "Sigma Accretion Impact Sound",
            "de-DE": "Sound – Einschlag von Sigmas Akkretion",
            "es-ES": "Sonido de impacto de Acreción de Sigma",
            "es-MX": "Sonido de impacto por acreción de Sigma",
            "fr-FR": "Son d’impact de Concrétion de Sigma",
            "ja-JP": "シグマの〈アクリーション〉の衝突音",
            "pl-PL": "Sigma – Akrecja – Dźwięk trafienia",
            "pt-BR": "Som do Impacto de Acreção do Sigma",
            "zh-CN": "“西格玛”质量吸附击中声音"
        },
        "SOMBRA_LOGO_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EBE",
            "en-US": "Sombra Logo Sound",
            "de-DE": "Sound – Sombras Logo",
            "es-ES": "Sonido de logo de Sombra",
            "es-MX": "Sonido de logo de Sombra",
            "fr-FR": "Son de logo de Sombra",
            "ja-JP": "ソンブラのロゴの音",
            "pl-PL": "Sombra – Logo – Dźwięk",
            "pt-BR": "Som do Logo da Sombra",
            "zh-CN": "“黑影”标志声音"
        },
        "SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EBC",
            "en-US": "Sombra Translocator Disappear Sound",
            "de-DE": "Sound – Verschwinden durch Sombras Teleportation",
            "es-ES": "Sonido de desaparición de Baliza de translocación de Sombra",
            "es-MX": "Sonido de desaparición de translocalizador para Sombra",
            "fr-FR": "Son de disparition de Transducteur de Sombra",
            "ja-JP": "ソンブラの〈トランズロケーター〉の消失音",
            "pl-PL": "Sombra – Translokator – Dźwięk zniknięcia",
            "pt-BR": "Som de Desaparecimento do Translocador da Sombra",
            "zh-CN": "“黑影”位移传动消失声音"
        },
        "SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EBD",
            "en-US": "Sombra Translocator Reappear Sound",
            "de-DE": "Sound – Wiedererscheinen durch Sombras Teleportation",
            "es-ES": "Sonido de reaparición de Baliza de translocación de Sombra",
            "es-MX": "Sonido de reaparición de translocalizador para Sombra",
            "fr-FR": "Son de réapparition de Transducteur de Sombra",
            "ja-JP": "ソンブラの〈トランズロケーター〉の再出現音",
            "pl-PL": "Sombra – Translokator – Dźwięk pojawienia się",
            "pt-BR": "Som de Reaparição do Translocador da Sombra",
            "zh-CN": "“黑影”位移传动重现声音"
        },
        "SOMBRA_EMP_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EBF",
            "en-US": "Sombra EMP Explosion Sound",
            "de-DE": "Sound – Explosion von Sombras EMP",
            "es-ES": "Sonido de explosión de PEM de Sombra",
            "es-MX": "Sonido de explosión PEM de Sombra",
            "fr-FR": "Son d’explosion d’IEM de Sombra",
            "ja-JP": "ソンブラの〈EMP〉の爆発音",
            "pl-PL": "Sombra – EMP – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do PEM da Sombra",
            "zh-CN": "“黑影”电磁脉冲爆炸声音"
        },
        "SYMMETRA_TELEPORTER_REAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EBB",
            "en-US": "Symmetra Teleporter Reappear Sound",
            "de-DE": "Sound – Wiedererscheinen durch Symmetras Teleporter",
            "es-ES": "Sonido de reaparición de Teletransportador de Symmetra",
            "es-MX": "Sonido de reaparición de teletransportador para Symmetra",
            "fr-FR": "Son de réapparition de Téléporteur de Symmetra",
            "ja-JP": "シンメトラの〈テレポーター〉の再出現音",
            "pl-PL": "Symmetra – Teleporter – Dźwięk pojawienia się",
            "pt-BR": "Som de Reaparição do Teletransportador da Symmetra",
            "zh-CN": "“秩序之光”传送面板重现声音"
        },
        "TRACER_RECALL_DISAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EBA",
            "en-US": "Tracer Recall Disappear Sound",
            "de-DE": "Sound – Verschwinden durch Tracers Zeitschleife",
            "es-ES": "Sonido de desaparición de Regresión de Tracer",
            "es-MX": "Sonido de desaparición de Regresión para Tracer",
            "fr-FR": "Son de disparition de Rappel de Tracer",
            "ja-JP": "トレーサーの〈リコール〉の消失音",
            "pl-PL": "Smuga – Powrót – Dźwięk zniknięcia",
            "pt-BR": "Som de Desaparecimento da Recordação da Tracer",
            "zh-CN": "“猎空”闪回消失声音"
        },
        "TRACER_RECALL_REAPPEAR_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EB9",
            "en-US": "Tracer Recall Reappear Sound",
            "de-DE": "Sound – Wiedererscheinen durch Tracers Zeitschleife",
            "es-ES": "Sonido de reaparición de Regresión de Tracer",
            "es-MX": "Sonido de reaparición de Regresión para Tracer",
            "fr-FR": "Son de réapparition de Rappel de Tracer",
            "ja-JP": "トレーサーの〈リコール〉の再出現音",
            "pl-PL": "Smuga – Powrót – Dźwięk pojawienia się",
            "pt-BR": "Som de Reaparição da Recordação da Tracer",
            "zh-CN": "“猎空”闪回重现声音"
        },
        "WIDOWMAKER_VENOM_MINE_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EB8",
            "en-US": "Widowmaker Venom Mine Explosion Sound",
            "de-DE": "Sound – Explosion von Widowmakers Giftmine",
            "es-ES": "Sonido de explosión de Mina venenosa de Widowmaker",
            "es-MX": "Sonido de explosión para Mina venenosa de Widowmaker",
            "fr-FR": "Son d’explosion de Mine venimeuse de Fatale",
            "ja-JP": "ウィドウメイカーの〈ヴェノム・マイン〉の爆発音",
            "pl-PL": "Trupia Wdowa – Jadowita Mina – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão da Mina Venenosa da Widowmaker",
            "zh-CN": "“黑百合”剧毒诡雷爆炸声音"
        },
        "WINSTON_JUMP_PACK_LANDING_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EB7",
            "en-US": "Winston Jump Pack Landing Sound",
            "de-DE": "Sound – Landung von Winstons Sprungantrieb",
            "es-ES": "Sonido de aterrizaje de Salto potenciado de Winston",
            "es-MX": "Sonido de aterrizaje para Propulsores de Winston",
            "fr-FR": "Son d’atterrissage de Propulseurs de Winston",
            "ja-JP": "ウィンストンの〈ジャンプ・パック〉の着地音",
            "pl-PL": "Winston – Plecak Odrzutowy – Dźwięk lądowania",
            "pt-BR": "Som de Aterrisagem do Salto a Jato do Winston",
            "zh-CN": "温斯顿喷射背包着陆声音"
        },
        "WRECKING_BALL_PILEDRIVER_IMPACT_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EB5",
            "en-US": "Wrecking Ball Piledriver Impact Sound",
            "de-DE": "Sound – Einschlag von Wrecking Balls Kollisionskurs",
            "es-ES": "Sonido de impacto de Impacto demoledor de Wrecking Ball",
            "es-MX": "Sonido de impacto de Martinete para Wrecking Ball",
            "fr-FR": "Son d’impact de Pilonnage de Bouldozer",
            "ja-JP": "レッキング・ボールの〈パイルドライバー〉の衝突音",
            "pl-PL": "Burzyciel – Kafar – Dźwięk trafienia",
            "pt-BR": "Som de Impacto do Bate-estaca do Wrecking Ball",
            "zh-CN": "“破坏球”重力坠击击中声音"
        },
        "WRECKING_BALL_MINEFIELD_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EB6",
            "en-US": "Wrecking Ball Minefield Explosion Sound",
            "de-DE": "Sound – Explosion von Wrecking Balls Minenfeld",
            "es-ES": "Sonido de explosión de Campo de minas de Wrecking Ball",
            "es-MX": "Sonido de explosión de Campo minado de Wrecking Ball.",
            "fr-FR": "Son d’explosion de Champ de mines de Bouldozer",
            "ja-JP": "レッキング・ボールの〈マインフィールド〉の爆発音",
            "pl-PL": "Burzyciel – Pole Minowe – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Campo Minado do Wrecking Ball",
            "zh-CN": "“破坏球”地雷禁区爆炸声音"
        },
        "ZARYA_PARTICLE_CANNON_EXPLOSION_SOUND": {
            "extension": "explosionSounds",
            "guid": "000000012EB4",
            "en-US": "Zarya Particle Cannon Explosion Sound",
            "de-DE": "Sound – Explosion von Zaryas Partikelkanone",
            "es-ES": "Sonido de explosión de Cañón de partículas de Zarya",
            "es-MX": "Sonido de explosión para Cañón de partículas de Zarya",
            "fr-FR": "Son d’explosion de Canon à particules de Zarya",
            "ja-JP": "ザリアの〈パーティクル・キャノン〉の爆発音",
            "pl-PL": "Zaria – Działo Cząsteczkowe – Dźwięk eksplozji",
            "pt-BR": "Som de Explosão do Canhão de Partículas da Zarya",
            "zh-CN": "查莉娅粒子炮爆炸声音"
        },
        "ANA_BIOTIC_GRENADE_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D28",
            "en-US": "Ana Biotic Grenade Explosion Effect",
            "de-DE": "Effekt – Explosion von Anas Biotischer Granate",
            "es-ES": "Efecto de explosión de Granada biótica de Ana",
            "es-MX": "Efecto de explosión para Granada biótica de Ana",
            "fr-FR": "Effet d’explosion de Grenade biotique d’Ana",
            "ja-JP": "アナの〈バイオティック・グレネード〉の爆発エフェクト",
            "pl-PL": "Ana – Efekt eksplozji Granatu Biotycznego",
            "pt-BR": "Efeito de Explosão da Granada Biótica da Ana",
            "zh-CN": "安娜生物手雷爆炸效果"
        },
        "ASHE_DYNAMITE_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D27",
            "en-US": "Ashe Dynamite Explosion Effect",
            "de-DE": "Effekt – Explosion von Ashes Dynamit",
            "es-ES": "Efecto de explosión de Dinamita de Ashe",
            "es-MX": "Efecto de explosión para Dinamita de Ashe",
            "fr-FR": "Effet d’explosion de Dynamite d’Ashe",
            "ja-JP": "アッシュの〈ダイナマイト〉の爆発エフェクト",
            "pl-PL": "Ashe – Efekt eksplozji Dynamitu",
            "pt-BR": "Efeito de Explosão da Dinamite da Ashe",
            "zh-CN": "艾什延时雷管爆炸效果"
        },
        "BAPTISTE_BIOTIC_LAUNCHER_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D29",
            "en-US": "Baptiste Biotic Launcher Explosion Effect",
            "de-DE": "Effekt – Explosion von Baptistes Biotikwerfer",
            "es-ES": "Efecto de explosión de Lanzagranadas biótico de Baptiste",
            "es-MX": "Efecto de explosión para Disparador biótico de Baptiste",
            "fr-FR": "Effet d’explosion de Bio-lanceur de Baptiste",
            "ja-JP": "バティストの〈バイオティック・ランチャー〉の爆発エフェクト",
            "pl-PL": "Baptiste – Efekt eksplozji Miotacza Biotycznego",
            "pt-BR": "Efeito de Explosão do Lançador Biótico do Baptiste",
            "zh-CN": "巴蒂斯特生化榴弹枪爆炸效果"
        },
        "BASTION_TANK_CANNON_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D2A",
            "en-US": "Bastion Tank Cannon Explosion Effect",
            "de-DE": "Effekt – Explosion von Bastions Panzerkanone",
            "es-ES": "Efecto de explosión de cañón de tanque de Bastion",
            "es-MX": "Efecto de explosión para cañón de tanque de Bastion",
            "fr-FR": "Effet d’explosion du canon de Tank de Bastion",
            "ja-JP": "バスティオンのタンク・キャノンの爆発エフェクト",
            "pl-PL": "Bastion – Efekt eksplozji działa czołgu",
            "pt-BR": "Efeito de Explosão de Canhão do Bastion Tanque",
            "zh-CN": "“堡垒”坦克炮爆炸效果"
        },
        "DOOMFIST_RISING_UPPERCUT_LEAP": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D30",
            "en-US": "Doomfist Rising Uppercut Leap Effect",
            "de-DE": "Effekt – Sprung von Doomfists Uppercut",
            "es-ES": "Efecto de salto de Uppercut de Doomfist",
            "es-MX": "Efecto de salto para Gancho ascendente de Doomfist",
            "fr-FR": "Effet de saut d’Uppercut de Doomfist",
            "ja-JP": "ドゥームフィストの〈ライジング・アッパーカット〉の跳躍エフェクト",
            "pl-PL": "Pięść Zagłady – Podbródkowy – Efekt skoku",
            "pt-BR": "Efeito de Pulo do Gancho Ascendente do Doomfist",
            "zh-CN": "“末日铁拳”上勾重拳跳跃效果"
        },
        "DOOMFIST_RISING_UPPERCUT_IMPACT": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D31",
            "en-US": "Doomfist Rising Uppercut Impact Effect",
            "de-DE": "Effekt – Einschlag von Doomfists Uppercut",
            "es-ES": "Efecto de impacto de Uppercut de Doomfist",
            "es-MX": "Efecto de impacto para Gancho ascendente de Doomfist",
            "fr-FR": "Effet d’impact d’Uppercut de Doomfist",
            "ja-JP": "ドゥームフィストの〈ライジング・アッパーカット〉の衝突エフェクト",
            "pl-PL": "Pięść Zagłady – Podbródkowy – Efekt trafienia",
            "pt-BR": "Efeito de Impacto do Gancho Ascendente do Doomfist",
            "zh-CN": "“末日铁拳”上勾重拳击中效果"
        },
        "DOOMFIST_METEOR_STRIKE_IMPACT": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D33",
            "en-US": "Doomfist Meteor Strike Impact Effect",
            "de-DE": "Effekt – Einschlag von Doomfists Meteorschlag",
            "es-ES": "Efecto de impacto de Meteoro de Doomfist",
            "es-MX": "Efecto de impacto para Golpe de meteoro de Doomfist",
            "fr-FR": "Effet d’impact de Frappe météore de Doomfist",
            "ja-JP": "ドゥームフィストの〈メテオ・ストライク〉の衝突エフェクト",
            "pl-PL": "Pięść Zagłady – Meteor – Efekt trafienia",
            "pt-BR": "Efeito de Impacto do Impacto Meteoro do Doomfist",
            "zh-CN": "“末日铁拳”毁天灭地击中效果"
        },
        "JUNKRAT_FRAG_LAUNCHER_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D3D",
            "en-US": "Junkrat Frag Launcher Explosion Effect",
            "de-DE": "Effekt – Explosion von Junkrats Granatwerfer",
            "es-ES": "Efecto de explosión de Lanzagranadas de Junkrat",
            "es-MX": "Efecto de explosión para Lanzagranadas de fragmentación de Junkrat",
            "fr-FR": "Effet d’explosion de Lance-grenades de Chacal",
            "ja-JP": "ジャンクラットの〈フラグ・ランチャー〉の爆発エフェクト",
            "pl-PL": "Złomiarz – Granatnik – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão do Lançador de Granadas do Junkrat",
            "zh-CN": "“狂鼠”榴弹发射器爆炸效果"
        },
        "JUNKRAT_CONCUSSION_MINE_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D3C",
            "en-US": "Junkrat Concussion Mine Explosion Effect",
            "de-DE": "Effekt – Explosion von Junkrats Ferngezündeter Mine",
            "es-ES": "Efecto de explosión de Mina de conmoción de Junkrat",
            "es-MX": "Efecto de explosión para Mina de conmoción de Junkrat",
            "fr-FR": "Effet d’explosion de Mine incapacitante de Chacal",
            "ja-JP": "ジャンクラットの〈コンカッション・マイン〉の爆発エフェクト",
            "pl-PL": "Złomiarz – Mina Ogłuszająca – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão da Mina de Concussão do Junkrat",
            "zh-CN": "“狂鼠”震荡地雷爆炸效果"
        },
        "JUNKRAT_RIP_TIRE_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D3B",
            "en-US": "Junkrat RIP Tire Explosion Effect",
            "de-DE": "Effekt – Explosion von Junkrats Kamikazereifen",
            "es-ES": "Efecto de explosión de Rueda explosiva de Junkrat",
            "es-MX": "Efecto de explosión para Neumático Desgarrador de Junkrat",
            "fr-FR": "Effet d’explosion de Pneumastic de Chacal",
            "ja-JP": "ジャンクラットの〈RIPタイヤ〉の爆発エフェクト",
            "pl-PL": "Złomiarz – MordOpona – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão do Pneu da Morte do Junkrat",
            "zh-CN": "“狂鼠”炸弹轮胎爆炸效果"
        },
        "MCCREE_FLASHBANG_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D3F",
            "en-US": "McCree Flashbang Explosion Effect",
            "de-DE": "Effekt – Explosion von McCrees Blendgranate",
            "es-ES": "Efecto de explosión de Granada cegadora de McCree",
            "es-MX": "Efecto de explosión con Granada aturdidora de McCree",
            "fr-FR": "Effet d’explosion de Grenade flash de McCree",
            "ja-JP": "マクリーの〈フラッシュバン〉の爆発エフェクト",
            "pl-PL": "McCree – Granat Błyskowy – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão do Clarão do McCree",
            "zh-CN": "麦克雷闪光弹爆炸效果"
        },
        "PHARAH_ROCKET_LAUNCHER_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D45",
            "en-US": "Pharah Rocket Launcher Explosion Effect",
            "de-DE": "Effekt – Explosion von Pharahs Raketenwerfer",
            "es-ES": "Efecto de explosión de Lanzacohetes de Pharah",
            "es-MX": "Efecto de explosión para Lanzacohetes de Pharah",
            "fr-FR": "Effet d’explosion de Lance-roquettes de Pharah",
            "ja-JP": "ファラの〈ロケット・ランチャー〉の爆発エフェクト",
            "pl-PL": "Fara – Wyrzutnia Rakiet – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão do Lançador de Foguetes da Pharah",
            "zh-CN": "“法老之鹰”火箭发射器爆炸效果"
        },
        "PHARAH_CONCUSSIVE_BLAST": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D44",
            "en-US": "Pharah Concussive Blast Effect",
            "de-DE": "Effekt – Pharahs Erschütterungsimpuls",
            "es-ES": "Efecto de Disparo de conmoción de Pharah",
            "es-MX": "Efecto de Explosión conmocionante de Pharah",
            "fr-FR": "Effet de Conflagration de Pharah",
            "ja-JP": "ファラの〈コンカッシブ・ブラスト〉のエフェクト",
            "pl-PL": "Fara – Przytłaczający Strzał – Efekt wybuchu",
            "pt-BR": "Efeito da Explosão Concussiva da Pharah",
            "zh-CN": "“法老之鹰”震荡冲击效果"
        },
        "PHARAH_BARRAGE_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D43",
            "en-US": "Pharah Barrage Explosion Effect",
            "de-DE": "Effekt – Explosion von Pharahs Trommelfeuer",
            "es-ES": "Efecto de explosión de Bombardeo de Pharah",
            "es-MX": "Efecto de explosión para Bombardeo de Pharah",
            "fr-FR": "Effet d’explosion de Barrage de Pharah",
            "ja-JP": "ファラの〈バレッジ〉の爆発エフェクト",
            "pl-PL": "Fara – Salwa – Efekt eksplozji",
            "pt-BR": "Efeitos de Explosão do Bombardeio da Pharah",
            "zh-CN": "“法老之鹰”火箭弹幕爆炸效果"
        },
        "REINHARDT_FIRE_STRIKE_TARGET_IMPACT": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D47",
            "en-US": "Reinhardt Fire Strike Target Impact Effect",
            "de-DE": "Effekt – Einschlag von Reinhardts Feuerschlag",
            "es-ES": "Efecto de impacto en el objetivo de Onda de fuego de Reinhardt",
            "es-MX": "Efecto de impacto sobre objetivo de Ataque ígneo de Reinhardt",
            "fr-FR": "Effet d’impact de cible de Frappe de feu de Reinhardt",
            "ja-JP": "ラインハルトの〈ファイア・ストライク〉のターゲット衝突エフェクト",
            "pl-PL": "Reinhardt – Ogniste Uderzenie – Efekt trafienia",
            "pt-BR": "Efeito de Impacto no Alvo do Tiro Flamejante do Reinhardt",
            "zh-CN": "莱因哈特烈焰打击目标击中效果"
        },
        "SIGMA_ACCRETION_IMPACT": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D49",
            "en-US": "Sigma Accretion Impact Effect",
            "de-DE": "Effekt – Einschlag von Sigmas Akkretion",
            "es-ES": "Efecto de impacto de Acreción de Sigma",
            "es-MX": "Efecto de impacto por acreción de Sigma",
            "fr-FR": "Effet d’impact de Concrétion de Sigma",
            "ja-JP": "シグマの〈アクリーション〉の衝突エフェクト",
            "pl-PL": "Sigma – Akrecja – Efekt trafienia",
            "pt-BR": "Efeito do Impacto de Acreção do Sigma",
            "zh-CN": "“西格玛”质量吸附击中效果"
        },
        "WIDOWMAKER_VENOM_MINE_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D52",
            "en-US": "Widowmaker Venom Mine Explosion Effect",
            "de-DE": "Effekt – Explosion von Widowmakers Giftmine",
            "es-ES": "Efecto de explosión de Mina venenosa de Widowmaker",
            "es-MX": "Efecto de explosión para Mina venenosa de Widowmaker",
            "fr-FR": "Effet d’explosion de Mine venimeuse de Fatale",
            "ja-JP": "ウィドウメイカーの〈ヴェノム・マイン〉の爆発エフェクト",
            "pl-PL": "Trupia Wdowa – Jadowita Mina – Efekt eksplozji",
            "pt-BR": "Efeito de Explosão da Mina Venenosa da Widowmaker",
            "zh-CN": "“黑百合“剧毒诡雷爆炸效果"
        },
        "WINSTON_JUMP_PACK_LANDING": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D53",
            "en-US": "Winston Jump Pack Landing Effect",
            "de-DE": "Effekt – Landung von Winstons Sprungantrieb",
            "es-ES": "Efecto de aterrizaje de Salto potenciado de Winston",
            "es-MX": "Efecto de aterrizaje para Propulsores de Winston",
            "fr-FR": "Effet d’atterrissage de Propulseurs de Winston",
            "ja-JP": "ウィンストンの〈ジャンプ・パック〉の着地エフェクト",
            "pl-PL": "Winston – Plecak Odrzutowy – Efekt lądowania",
            "pt-BR": "Efeito de Aterrisagem do Salto a Jato do Winston",
            "zh-CN": "温斯顿喷射背包着陆效果"
        },
        "WRECKING_BALL_PILEDRIVER_IMPACT": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D54",
            "en-US": "Wrecking Ball Piledriver Impact Effect",
            "de-DE": "Effekt – Einschlag von Wrecking Balls Kollisionskurs",
            "es-ES": "Efecto de impacto de Impacto demoledor de Wrecking Ball",
            "es-MX": "Efecto de impacto de Martinete para Wrecking Ball",
            "fr-FR": "Effet d’impact de Pilonnage de Bouldozer",
            "ja-JP": "レッキング・ボールの〈パイルドライバー〉の衝突エフェクト",
            "pl-PL": "Burzyciel – Kafar – Efekt trafienia",
            "pt-BR": "Efeito de Impacto do Bate-estaca do Wrecking Ball",
            "zh-CN": "“破坏球”重力坠击击中效果"
        },
        "WRECKING_BALL_MINEFIELD_EXPLOSION": {
            "extension": "kineticExplosionEffects",
            "guid": "000000012D55",
            "en-US": "Wrecking Ball Minefield Explosion Effect",
            "de-DE": "Effekt – Explosion von Wrecking Balls Minenfeld",
            "es-ES": "Efecto de explosión de Campo de minas de Wrecking Ball",
            "es-MX": "Efecto de explosión de Campo minado de Wrecking Ball",
            "fr-FR": "Effet d’explosion de Champ de mines de Bouldozer",
            "ja-JP": "レッキング・ボールの〈マインフィールド〉の爆発エフェクト",
            "pl-PL": "Burzyciel – Pole Minowe – Efekt eksplozji",
            "pt-BR": "Efeito do Campo Minado do Wrecking Ball",
            "zh-CN": "“破坏球”地雷禁区爆炸效果"
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
        },
        "ECHO_FOCUSING_BEAM_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA8",
            "en-US": "Echo Focusing Beam Sound",
            "de-DE": "Sound – Echos Gebündelter Strahl",
            "es-ES": "Sonido de Haz enfocado de Echo",
            "es-MX": "Sonido de rayo de concentración de Echo",
            "fr-FR": "Son du Rayon focalisé d’Écho",
            "ja-JP": "エコーの〈フォーカス・ビーム〉の音",
            "pl-PL": "Echo – Skupiona Wiązka – Dźwięk",
            "pt-BR": "Som do Feixe Concentrado da Echo",
            "zh-CN": "“回声”聚焦光线光束声音"
        },
        "JUNKRAT_TRAP_CHAIN_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA9",
            "en-US": "Junkrat Trap Chain Sound",
            "de-DE": "Sound – Kette von Junkrats Falle",
            "es-ES": "Sonido de cadena de trampa de Junkrat",
            "es-MX": "Sonido de cadena de trampa de Junkrat",
            "fr-FR": "Son de chaîne du Piège de Chacal",
            "ja-JP": "ジャンクラットのトラップチェーン音",
            "pl-PL": "Złomiarz – Dźwięk Potrzasku",
            "pt-BR": "Som da Corrente de Armadilha do Junkrat",
            "zh-CN": "“狂鼠”陷阱链声音"
        },
        "MERCY_HEAL_BEAM_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DAA",
            "en-US": "Mercy Heal Beam Sound",
            "de-DE": "Sound – Mercys Heilstrahl",
            "es-ES": "Sonido de haz de sanación de Mercy",
            "es-MX": "Sonido de rayo sanador de Mercy",
            "fr-FR": "Son du rayon de soin d’Ange",
            "ja-JP": "マーシーの回復ビーム音",
            "pl-PL": "Łaska – Dźwięk wiązki leczącej",
            "pt-BR": "Som do Feixe de Cura da Mercy",
            "zh-CN": "“天使”治疗光束声音"
        },
        "MERCY_BOOST_BEAM_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DAB",
            "en-US": "Mercy Boost Beam Sound",
            "de-DE": "Sound – Mercys Verstärkungsstrahl",
            "es-ES": "Sonido de haz de aumento de Mercy",
            "es-MX": "Sonido de rayo potenciador de Mercy",
            "fr-FR": "Son du rayon d’augmentation des dégâts d’Ange",
            "ja-JP": "マーシーのブースト・ビーム音",
            "pl-PL": "Łaska – Dźwięk wiązki wzmacniającej",
            "pt-BR": "Som do Feixe de Bônus da Mercy",
            "zh-CN": "“天使”强化光束声音"
        },
        "MOIRA_GRASP_CONNECTED_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA7",
            "en-US": "Moira Grasp Connected Sound",
            "de-DE": "Sound – Zielverbindung mit Moiras Biotischer Hand",
            "es-ES": "Sonido de conexión de Agarre de Moira",
            "es-MX": "Sonido conectado de Agarre de Moira",
            "fr-FR": "Son de connexion d’Emprise de Moira",
            "ja-JP": "モイラの〈バイオティック・グラスプ〉の接続音",
            "pl-PL": "Moira – Chwyt – Łączenie – Dźwięk",
            "pt-BR": "Som do Punho Conectado da Moira",
            "zh-CN": "莫伊拉生化之触连接声音"
        },
        "MOIRA_ORB_DAMAGE_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA6",
            "en-US": "Moira Orb Damage Sound",
            "de-DE": "Sound – Schaden von Moiras Biotischer Sphäre",
            "es-ES": "Sonido de daño de orbe de Moira",
            "es-MX": "Sonido de daño de Orbe de Moira",
            "fr-FR": "Son de dégâts d’Orbe de Moira",
            "ja-JP": "モイラの〈バイオティック・オーブ〉のダメージ音",
            "pl-PL": "Moira – Kula – Dźwięk obrażeń",
            "pt-BR": "Som do Orbe de Dano da Moira",
            "zh-CN": "莫伊拉生化之球伤害声音"
        },
        "MOIRA_ORB_HEAL_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA5",
            "en-US": "Moira Orb Heal Sound",
            "de-DE": "Sound – Heilung von Moiras Biotischer Sphäre",
            "es-ES": "Sonido de sanación de orbe de Moira",
            "es-MX": "Sonido de sanación de Orbe de Moira",
            "fr-FR": "Son de soin d’Orbe de Moira",
            "ja-JP": "モイラの〈バイオティック・オーブ〉の回復音",
            "pl-PL": "Moira – Kula – Dźwięk leczenia",
            "pt-BR": "Som do Orbe de Cura da Moira",
            "zh-CN": "莫伊拉生化之球治疗声音"
        },
        "MOIRA_COALESCENCE_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA4",
            "en-US": "Moira Coalescence Sound",
            "de-DE": "Sound – Moiras Koaleszenz",
            "es-ES": "Sonido de Coalescencia de Moira",
            "es-MX": "Sonido de Coalescencia de Moira",
            "fr-FR": "Son de Coalescence de Moira",
            "ja-JP": "モイラの〈コアレッセンス〉の音",
            "pl-PL": "Moira – Koalescencja – Dźwięk",
            "pt-BR": "Som da Coalescência da Moira",
            "zh-CN": "莫伊拉聚合射线声音"
        },
        "ORISA_AMPLIFIER_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DAD",
            "en-US": "Orisa Amplifier Sound",
            "de-DE": "Sound – Orisas Superbooster",
            "es-ES": "Sonido de Amplificador de Orisa",
            "es-MX": "Sonido amplificador de Orisa",
            "fr-FR": "Son de Surchargeur d’Orisa",
            "ja-JP": "オリーサの増幅効果音",
            "pl-PL": "Orisa – Dźwięk Wzmocnienia",
            "pt-BR": "Som do Amplificador da Orisa",
            "zh-CN": "奥丽莎强化声音"
        },
        "ORISA_HALT_TENDRIL_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DAC",
            "en-US": "Orisa Halt Tendril Sound",
            "de-DE": "Sound – Verbindung von Orisas Halt!",
            "es-ES": "Sonido de enganche de ¡Alto! de Orisa",
            "es-MX": "Sonido del haz para Alto de Orisa",
            "fr-FR": "Son d’attraction de Halte d’Orisa",
            "ja-JP": "オリーサの〈ストップ！〉の吸引音",
            "pl-PL": "Orisa – Dźwięk Stać!",
            "pt-BR": "Som das Conexões de Parados da Orisa",
            "zh-CN": "奥丽莎站住别动连线声音"
        },
        "SYMMETRA_PROJECTOR_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA0",
            "en-US": "Symmetra Projector Sound",
            "de-DE": "Sound – Symmetras Photonenprojektor",
            "es-ES": "Sonido de Proyector de Symmetra",
            "es-MX": "Sonido de proyector de Symmetra",
            "fr-FR": "Son de Projecteur de Symmetra",
            "ja-JP": "シンメトラの〈プロジェクター〉の音",
            "pl-PL": "Symmetra – Projektor – Dźwięk",
            "pt-BR": "Som do Projetor da Symmetra",
            "zh-CN": "“秩序之光”光子发射器声音"
        },
        "WINSTON_TESLA_CANNON_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA1",
            "en-US": "Winston Tesla Cannon Sound",
            "de-DE": "Sound – Winstons Teslakanone",
            "es-ES": "Sonido de Cañón tesla de Winston",
            "es-MX": "Sonido de Cañón Tesla de Winston",
            "fr-FR": "Son de Canon Tesla de Winston",
            "ja-JP": "ウィンストンの〈テスラ・キャノン〉の音",
            "pl-PL": "Winston – Działo Tesli – Dźwięk",
            "pt-BR": "Som do Canhão de Tesla do Winston",
            "zh-CN": "温斯顿特斯拉炮声音"
        },
        "ZARYA_PARTICLE_BEAM_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA3",
            "en-US": "Zarya Particle Beam Sound",
            "de-DE": "Sound – Strahl von Zaryas Partikelkanone",
            "es-ES": "Sonido de haz de partículas de Zarya",
            "es-MX": "Sonido de rayo de partículas de Zarya",
            "fr-FR": "Son du Rayon à particules de Zarya",
            "ja-JP": "ザリアの〈パーティクル・キャノン〉の音",
            "pl-PL": "Zaria – Działo – Dźwięk wiązki",
            "pt-BR": "Som do Feixe de Partículas da Zarya",
            "zh-CN": "查莉娅粒子光束声音"
        },
        "OMNIC_SLICER_BEAM_SOUND": {
            "extension": "beamSounds",
            "guid": "000000012DA2",
            "en-US": "Omnic Slicer Beam Sound",
            "de-DE": "Sound – Strahl vom Omnic-Slicer",
            "es-ES": "Sonido de haz de cercenador ómnico",
            "es-MX": "Sonido de rayo cortador ómnico",
            "fr-FR": "Son du Rayon de Laserateur omniaque",
            "ja-JP": "オムニック・スライサーの音",
            "pl-PL": "Omniczny Siekacz – Dźwięk wiązki",
            "pt-BR": "Som do Feixe do Ômnico Dilacerador",
            "zh-CN": "智械切割者光束声音"
        },
        "ANA_NANO_BOOSTED_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E85",
            "en-US": "Ana Nano Boosted Sound",
            "de-DE": "Sound – verstärkt durch Anas Nanoboost",
            "es-ES": "Sonido de Nanoestimulantes de Ana",
            "es-MX": "Sonido de Nanopotenciado de Ana",
            "fr-FR": "Son de Nanoboost d’Ana",
            "ja-JP": "アナの〈ナノ・ブースト〉の音",
            "pl-PL": "Ana – Nano – Dźwięk wzmocnienia",
            "pt-BR": "Som do Estimulante da Ana",
            "zh-CN": "安娜纳米激素强化声音"
        },
        "BAPTISTE_IMMORTALITY_FIELD_PROTECTED_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E7D",
            "en-US": "Baptiste Immortality Field Protected Sound",
            "de-DE": "Sound – geschützt durch Baptistes Lebenserhaltungsfeld",
            "es-ES": "Sonido de protección de Campo de inmortalidad de Baptiste",
            "es-MX": "Sonido protegido del Campo de inmortalidad de Baptiste",
            "fr-FR": "Son de protégé de Champ d’immortalité de Baptiste",
            "ja-JP": "バティストの〈イモータリティ・フィールド〉の防護音",
            "pl-PL": "Baptiste – Pole Nieśmiertelności – Dźwięk ochrony",
            "pt-BR": "Som da Proteção do Campo de Imortalidade do Baptiste",
            "zh-CN": "巴蒂斯特维生力场保护声音"
        },
        "ECHO_CLONING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E7F",
            "en-US": "Echo Cloning Sound",
            "de-DE": "Sound – Echos Duplikat",
            "es-ES": "Sonido de clonación de Echo",
            "es-MX": "Sonido de clonación de Echo",
            "fr-FR": "Son de Clonage d’Écho",
            "ja-JP": "エコーの〈コピー〉の音",
            "pl-PL": "Echo – Klonowanie – Dźwięk",
            "pt-BR": "Som de Clonagem da Echo",
            "zh-CN": "“回声”复制声音"
        },
        "LUCIO_SOUND_BARRIER_PROTECTED_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E80",
            "en-US": "Lúcio Sound Barrier Protected Sound",
            "de-DE": "Sound – geschützt durch Lúcios Soundbarriere",
            "es-ES": "Sonido de protección de Barrera de sonido de Lúcio",
            "es-MX": "Sonido de protegido con Barrera de sonido de Lúcio",
            "fr-FR": "Son de protégé de Mur de son de Lúcio",
            "ja-JP": "ルシオの〈サウンド・バリア〉の防護音",
            "pl-PL": "Lúcio – Bariera Dźwiękowa – Dźwięk ochrony",
            "pt-BR": "Som da Proteção da Barreira de Som do Lúcio",
            "zh-CN": "卢西奥音障保护声音"
        },
        "MEI_FROZEN_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E7E",
            "en-US": "Mei Frozen Sound",
            "de-DE": "Sound – eingefroren durch Mei",
            "es-ES": "Sonido de congelación de Mei",
            "es-MX": "Sonido congelado de Mei",
            "fr-FR": "Son de Gelé de Mei",
            "ja-JP": "メイの凍結サウンド",
            "pl-PL": "Mei – Zamrożenie – Dźwięk",
            "pt-BR": "Som de Congelamento da Mei",
            "zh-CN": "美冰冻声音"
        },
        "MERCY_DAMAGE_BOOSTED_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E82",
            "en-US": "Mercy Damage Boosted Sound",
            "de-DE": "Sound – Schaden erhöht durch Mercy",
            "es-ES": "Sonido de daño aumentado de Mercy",
            "es-MX": "Sonido de daño potenciado de Mercy",
            "fr-FR": "Son de Dégâts augmentés d’Ange",
            "ja-JP": "マーシーのダメージ増加音",
            "pl-PL": "Łaska – Dźwięk zwiększania obrażeń",
            "pt-BR": "Som de Dano Aumentado da Mercy",
            "zh-CN": "“天使”伤害强化声音"
        },
        "SIGMA_GRAVITIC_FLUX_TARGET_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E7C",
            "en-US": "Sigma Gravitic Flux Target Sound",
            "de-DE": "Sound – Ziel von Sigmas Gravitationsfluss",
            "es-ES": "Sonido de objetivo de Flujo gravitacional de Sigma",
            "es-MX": "Sonido de objetivo con Flujo gravitatorio de Sigma",
            "fr-FR": "Son de cible de Flux gravitationnel de Sigma",
            "ja-JP": "シグマの〈グラビティ・フラックス〉のターゲット音",
            "pl-PL": "Sigma – Strumień Grawitacyjny – Dźwięk celu",
            "pt-BR": "Som de Alvo do Fluxo Gravitacional do Sigma",
            "zh-CN": "“西格玛”引力乱流目标声音"
        },
        "SOMBRA_HACKING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E79",
            "en-US": "Sombra Hacking Sound",
            "de-DE": "Sound – Sombras Hacken",
            "es-ES": "Sonido de hackeo de Sombra",
            "es-MX": "Sonido de hackeo de Sombra",
            "fr-FR": "Son de Piratage de Sombra",
            "ja-JP": "ソンブラの〈ハック〉の音",
            "pl-PL": "Sombra – Hakowanie – Dźwięk",
            "pt-BR": "Som de Hack da Sombra",
            "zh-CN": "“黑影”黑客入侵进行声音"
        },
        "SOMBRA_HACKED_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E7A",
            "en-US": "Sombra Hacked Sound",
            "de-DE": "Sound – durch Sombra gehackt",
            "es-ES": "Sonido hackeado de Sombra",
            "es-MX": "Sonido de hackeado de Sombra",
            "fr-FR": "Son de Piraté de Sombra",
            "ja-JP": "ソンブラの〈ハック〉の音",
            "pl-PL": "Sombra – Hakowanie – Dźwięk",
            "pt-BR": "Som de Hackeado pela Sombra",
            "zh-CN": "“黑影”黑客入侵完成声音"
        },
        "TORBJORN_OVERLOADING_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E78",
            "en-US": "Torbjörn Overloading Sound",
            "de-DE": "Sound – Torbjörns Überladung",
            "es-ES": "Sonido de sobrecarga de Torbjörn",
            "es-MX": "Sonido de sobrecarga de Torbjörn",
            "fr-FR": "Son de Surchauffe de Torbjörn",
            "ja-JP": "トールビョーンの〈オーバーロード〉の音",
            "pl-PL": "Torbjörn – Przepancerzony – Dźwięk",
            "pt-BR": "Som de Sobrecarga do Torbjörn",
            "zh-CN": "托比昂热力过载声音"
        },
        "WIDOWMAKER_VENOM_MINE_TARGET_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E74",
            "en-US": "Widowmaker Venom Mine Target Sound",
            "de-DE": "Sound – Ziel von Widowmakers Giftmine",
            "es-ES": "Sonido de objetivo de Mina venenosa de Widowmaker",
            "es-MX": "Sonido de objetivo para Mina venenosa de Widowmaker",
            "fr-FR": "Son de cible de Mine venimeuse de Fatale",
            "ja-JP": "ウィドウメイカーの〈ヴェノム・マイン〉のターゲット音",
            "pl-PL": "Trupia Wdowa – Jadowita Mina – Dźwięk celu",
            "pt-BR": "Som de Alvo da Mina Venenosa da Widowmaker",
            "zh-CN": "“黑百合“剧毒诡雷目标声音"
        },
        "WINSTON_TESLA_CANNON_TARGET_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E76",
            "en-US": "Winston Tesla Cannon Target Sound",
            "de-DE": "Sound – Ziel von Winstons Teslakanone",
            "es-ES": "Sonido de objetivo de Cañón tesla de Winston",
            "es-MX": "Sonido de objetivo para Cañón Tesla de Winston",
            "fr-FR": "Son de cible de Canon Tesla de Winston",
            "ja-JP": "ウィンストンの〈テスラ・キャノン〉のターゲット音",
            "pl-PL": "Winston – Działo Tesli – Dźwięk celu",
            "pt-BR": "Som de Alvo do Canhão de Tesla do Winston",
            "zh-CN": "温斯顿特斯拉炮目标声音"
        },
        "WINSTON_PRIMAL_RAGE_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E87",
            "en-US": "Winston Primal Rage Sound",
            "de-DE": "Sound – Winstons Dschungelwut",
            "es-ES": "Sonido de Rabia primigenia de Winston",
            "es-MX": "Sonido de Ira primigenia de Winston",
            "fr-FR": "Son de Rage primordiale de Winston",
            "ja-JP": "ウィンストンの〈プライマル・レイジ〉の音",
            "pl-PL": "Winston – Pierwotny Szał – Dźwięk",
            "pt-BR": "Som da Fúria Primata do Winston",
            "zh-CN": "温斯顿原始暴怒声音"
        },
        "WRECKING_BALL_ADAPTIVE_SHIELD_TARGET_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E73",
            "en-US": "Wrecking Ball Adaptive Shield Target Sound",
            "de-DE": "Sound – Wrecking Balls Adaptiver Schild",
            "es-ES": "Sonido de objetivo de Escudo adaptable de Wrecking Ball",
            "es-MX": "Sonido de objetivo para Escudo adaptable de Wrecking Ball",
            "fr-FR": "Son de cible de Bouclier dynamique de Bouldozer",
            "ja-JP": "レッキング・ボールの〈アダプティブ・シールド〉のターゲット音",
            "pl-PL": "Burzyciel – Adaptabilne Osłony – Dźwięk celu",
            "pt-BR": "Som de Alvo do Escudo Adaptativo do Wrecking Ball",
            "zh-CN": "“破坏球”感应护盾目标声音"
        },
        "WRECKING_BALL_PILEDRIVER_FIRE_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E72",
            "en-US": "Wrecking Ball Piledriver Fire Sound",
            "de-DE": "Sound – Feuer von Wrecking Ball Kollisionskurs",
            "es-ES": "Sonido de fuego de Impacto demoledor de Wrecking Ball",
            "es-MX": "Sonido de fuego de Martinete para Wrecking Ball",
            "fr-FR": "Son de feu de Pilonnage de Bouldozer",
            "ja-JP": "レッキング・ボールの〈パイルドライバー〉の発動音",
            "pl-PL": "Burzyciel – Kafar – Dźwięk ognia",
            "pt-BR": "Som do Fogo de Bate-estaca do Wrecking Ball",
            "zh-CN": "“破坏球”重力坠击火焰声音"
        },
        "ZENYATTA_ORB_OF_DISCORD_TARGET_SOUND": {
            "extension": "buffAndDebuffSounds",
            "guid": "000000012E81",
            "en-US": "Zenyatta Orb of Discord Target Sound",
            "de-DE": "Sound – Ziel von Zenyattas Sphäre der Zwietracht",
            "es-ES": "Sonido de objetivo de Orbe de discordia de Zenyatta",
            "es-MX": "Sonido de objetivo para Orbe de discordancia de Zenyatta",
            "fr-FR": "Son de cible d’Orbe de discorde de Zenyatta",
            "ja-JP": "ゼニヤッタの〈不和のオーブ〉のターゲット音",
            "pl-PL": "Zenyatta – Kula Rozdarcia – Dźwięk celu",
            "pt-BR": "Som de Alvo do Orbe da Discórdia do Zenyatta",
            "zh-CN": "禅雅塔乱目标声音"
        },
        "HEAL_TARGET_ACTIVE": {
            "extension": "buffStatusEffects",
            "guid": "000000012A04",
            "en-US": "Heal Target Active Effect",
            "de-DE": "Effekt – Heilungsziel aktiv",
            "es-ES": "Efecto de activación de objetivo de sanación",
            "es-MX": "Efecto activo de sanación de objetivo",
            "fr-FR": "Effet actif de cible de soin",
            "ja-JP": "ターゲット回復有効エフェクト",
            "pl-PL": "Leczenie – Aktywny efekt celu",
            "pt-BR": "Efeito Alvo de Cura Ativa",
            "zh-CN": "治疗目标激活效果"
        },
        "HEAL_TARGET": {
            "extension": "buffStatusEffects",
            "guid": "000000012A05",
            "en-US": "Heal Target Effect",
            "de-DE": "Effekt – Heilungsziel",
            "es-ES": "Efecto de objetivo de sanación",
            "es-MX": "Efecto de sanación de objetivo",
            "fr-FR": "Effet de cible de soin",
            "ja-JP": "ターゲット回復エフェクト",
            "pl-PL": "Leczenie – Efekt celu",
            "pt-BR": "Efeito Alvo de Cura",
            "zh-CN": "治疗目标效果"
        },
        "ANA_BIOTIC_GRENADE_INCREASED_HEALING": {
            "extension": "buffStatusEffects",
            "guid": "000000012BDF",
            "en-US": "Ana Biotic Grenade Increased Healing Effect",
            "de-DE": "Effekt – Heilung erhöht durch Anas Biotische Granate",
            "es-ES": "Efecto de sanación aumentada de Granada biótica de Ana",
            "es-MX": "Efecto de sanación aumentada de Granada biótica para Ana",
            "fr-FR": "Effet d’augmentation des soins de Grenade biotique d’Ana",
            "ja-JP": "アナの〈バイオティック・グレネード〉の回復量増加エフェクト",
            "pl-PL": "Ana – Granat Biotyczny – Efekt zwiększonego leczenia",
            "pt-BR": "Efeito de Melhoria de Cura da Granada Biótica da Ana",
            "zh-CN": "安娜生物手雷增疗效果"
        },
        "ANA_NANO_BOOSTED": {
            "extension": "buffStatusEffects",
            "guid": "000000012BE2",
            "en-US": "Ana Nano Boosted Effect",
            "de-DE": "Effekt – verstärkt durch Anas Nanoboost",
            "es-ES": "Efecto de Nanoestimulantes de Ana",
            "es-MX": "Efecto de Nanopotenciado de Ana",
            "fr-FR": "Effet de Nanoboost d’Ana",
            "ja-JP": "アナの 〈ナノ・ブースト〉のエフェクト",
            "pl-PL": "Ana – Nano – Efekt wzmocnienia",
            "pt-BR": "Efeito do Estimulante da Ana",
            "zh-CN": "安娜纳米激素强化效果"
        },
        "BAPTISTE_IMMORTALITY_FIELD_PROTECTED": {
            "extension": "buffStatusEffects",
            "guid": "000000012BE6",
            "en-US": "Baptiste Immortality Field Protected Effect",
            "de-DE": "Effekt – geschützt durch Baptistes Lebenserhaltungsfeld",
            "es-ES": "Efecto de protección de Campo de inmortalidad de Baptiste",
            "es-MX": "Efecto protegido del Campo de inmortalidad de Baptiste",
            "fr-FR": "Effet de protégé de Champ d’immortalité de Baptiste",
            "ja-JP": "バティストの〈イモータリティ・フィールド〉の防護エフェクト",
            "pl-PL": "Baptiste – Efekt ochrony przez Pole Nieśmiertelności",
            "pt-BR": "Efeito Proteção do Campo de Imortalidade do Baptiste",
            "zh-CN": "巴蒂斯特维生力场保护效果"
        },
        "ECHO_CLONING": {
            "extension": "buffStatusEffects",
            "guid": "000000012BE7",
            "en-US": "Echo Cloning Effect",
            "de-DE": "Effekt – Echo Duplikat",
            "es-ES": "Efecto de clonación de Echo",
            "es-MX": "Efecto de clonación de Echo",
            "fr-FR": "Effet de Clonage d’Écho",
            "ja-JP": "エコーの〈コピー〉のエフェクト",
            "pl-PL": "Echo – Efekt klonowania",
            "pt-BR": "Efeito Clonagem da Echo",
            "zh-CN": "“回声”复制效果"
        },
        "LUCIO_SOUND_BARRIER_PROTECTED": {
            "extension": "buffStatusEffects",
            "guid": "000000012BE8",
            "en-US": "Lúcio Sound Barrier Protected Effect",
            "de-DE": "Effekt – geschützt durch Lúcios Soundbarriere",
            "es-ES": "Efecto de protección de Barrera de sonido de Lúcio",
            "es-MX": "Efecto de protegido con Barrera de sonido de Lúcio",
            "fr-FR": "Effet de protégé de Mur de son de Lúcio",
            "ja-JP": "ルシオの〈サウンド・バリア〉のバリア・エフェクト",
            "pl-PL": "Lúcio – Efekt ochrony przez Barierę Dźwiękową",
            "pt-BR": "Efeito Proteção da Barreira de Som do Lúcio",
            "zh-CN": "卢西奥音障保护效果"
        },
        "MERCY_DAMAGE_BOOSTED": {
            "extension": "buffStatusEffects",
            "guid": "000000012BEB",
            "en-US": "Mercy Damage Boosted Effect",
            "de-DE": "Effekt – Schaden erhöht durch Mercy",
            "es-ES": "Efecto de daño aumentado de Mercy",
            "es-MX": "Efecto de daño potenciado de Mercy",
            "fr-FR": "Effet de Dégâts augmentés d’Ange",
            "ja-JP": "マーシーのダメージ増加エフェクト",
            "pl-PL": "Łaska – Efekt zwiększania obrażeń",
            "pt-BR": "Efeito Dano Aumentado da Mercy",
            "zh-CN": "“天使”伤害强化效果"
        },
        "REAPER_WRAITH_FORM": {
            "extension": "buffStatusEffects",
            "guid": "000000012BEE",
            "en-US": "Reaper Wraith Form Effect",
            "de-DE": "Effekt – Reapers Phantom",
            "es-ES": "Efecto de Forma espectral de Reaper",
            "es-MX": "Efecto de forma para Forma espectral de Reaper",
            "fr-FR": "Effet de Forme spectrale de Faucheur",
            "ja-JP": "リーパーの〈レイス・フォーム〉のエフェクト",
            "pl-PL": "Żniwiarz – Efekt Postaci Upiora",
            "pt-BR": "Efeito Forma Fantasma do Reaper",
            "zh-CN": "“死神”幽灵形态效果"
        },
        "SOLDIER_SPRINTING": {
            "extension": "buffStatusEffects",
            "guid": "000000012BF0",
            "en-US": "Soldier: 76 Sprinting Effect",
            "de-DE": "Effekt – Sprint von Soldier: 76",
            "es-ES": "Efecto de esprint de Soldado: 76",
            "es-MX": "Efecto de Sprint de Soldado: 76",
            "fr-FR": "Effet de Sprint de Soldat : 76",
            "ja-JP": "ソルジャー76の〈スプリント〉のエフェクト",
            "pl-PL": "Żołnierz-76 – Efekt sprintu",
            "pt-BR": "Efeito Disparada do Soldado: 76",
            "zh-CN": "“士兵：76”疾跑效果"
        },
        "TORBJORN_OVERLOADING": {
            "extension": "buffStatusEffects",
            "guid": "000000012BF4",
            "en-US": "Torbjörn Overloading Effect",
            "de-DE": "Effekt – Torbjörns Überladung",
            "es-ES": "Efecto de sobrecarga de Torbjörn",
            "es-MX": "Efecto de sobrecarga de Torbjörn",
            "fr-FR": "Effet de Surchauffe de Torbjörn",
            "ja-JP": "トールビョーンの〈オーバーロード〉のエフェクト",
            "pl-PL": "Torbjörn – Efekt Przepancerzonego",
            "pt-BR": "Efeito Sobrecarga do Torbjörn",
            "zh-CN": "托比昂热力过载效果"
        },
        "WINSTON_PRIMAL_RAGE": {
            "extension": "buffStatusEffects",
            "guid": "000000012BF7",
            "en-US": "Winston Primal Rage Effect",
            "de-DE": "Effekt – Winstons Dschungelwut",
            "es-ES": "Efecto de Rabia primigenia de Winston",
            "es-MX": "Efecto de Ira primigenia de Winston",
            "fr-FR": "Effet de Rage primordiale de Winston",
            "it-IT": "Winston Primal Rage Berserk Effect",
            "ja-JP": "ウィンストンの〈プライマル・レイジ〉のエフェクト",
            "pl-PL": "Winston – Pierwotny Szał – Efekt",
            "pt-BR": "Efeito da Fúria Primata do Winston",
            "zh-CN": "温斯顿原始暴怒效果"
        },
        "WRECKING_BALL_ADAPTIVE_SHIELD_TARGET": {
            "extension": "buffStatusEffects",
            "guid": "000000012BF8",
            "en-US": "Wrecking Ball Adaptive Shield Target Effect",
            "de-DE": "Effekt – Wrecking Balls Adaptiver Schild",
            "es-ES": "Efecto de objetivo de Escudo adaptable de Wrecking Ball",
            "es-MX": "Efecto de objetivo para Escudo adaptable de Wrecking Ball",
            "fr-FR": "Effet de cible de Bouclier dynamique de Bouldozer",
            "ja-JP": "レッキング・ボールの〈アダプティブ・シールド〉のターゲット・エフェクト",
            "pl-PL": "Burzyciel – Adaptabilne Osłony – Efekt celu",
            "pt-BR": "Efeito Alvo do Escudo Adaptativo do Wrecking Ball",
            "zh-CN": "“破坏球”感应护盾目标效果"
        },
        "WRECKING_BALL_PILEDRIVER_FIRE": {
            "extension": "buffStatusEffects",
            "guid": "000000012BF9",
            "en-US": "Wrecking Ball Piledriver Fire Effect",
            "de-DE": "Effekt – Feuer von Wrecking Ball Kollisionskurs",
            "es-ES": "Efecto de fuego de Impacto demoledor de Wrecking Ball",
            "es-MX": "Efecto de fuego de Martinete para Wrecking Ball",
            "fr-FR": "Effet de feu de Pilonnage de Bouldozer",
            "ja-JP": "レッキング・ボールの〈パイルドライバー〉の発動エフェクト",
            "pl-PL": "Burzyciel – Kafar – Efekt ognia",
            "pt-BR": "Efeito Fogo de Bate-estaca do Wrecking Ball",
            "zh-CN": "“破坏球”重力坠击火焰效果"
        },
        "ANA_BIOTIC_GRENADE_NO_HEALING": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BE0",
            "en-US": "Ana Biotic Grenade No Healing Effect",
            "de-DE": "Effekt – Heilungssperre durch Anas Biotische Granate",
            "es-ES": "Efecto antisanación de Granada biótica de Ana",
            "es-MX": "Efecto sin sanación de Granada biótica para Ana",
            "fr-FR": "Effet d’incapacité de soin de Grenade biotique d’Ana",
            "ja-JP": "アナの〈バイオティック・グレネード〉の回復不可のエフェクト",
            "pl-PL": "Ana – Granat Biotyczny – Efekt braku leczenia",
            "pt-BR": "Efeito de Bloqueio de Cura da Granada Biótica da Ana",
            "zh-CN": "安娜生物手雷禁疗效果"
        },
        "ANA_SLEEPING": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BE1",
            "en-US": "Ana Sleeping Effect",
            "de-DE": "Effekt – Schlaf durch Anas Betäubungspfeil",
            "es-ES": "Efecto durmiente de Ana",
            "es-MX": "Efecto tranquilizante de Ana",
            "fr-FR": "Effet d’Endormissement d’Ana",
            "ja-JP": "アナの〈スリープ・ダーツ〉のエフェクト",
            "pl-PL": "Ana – Efekt uśpienia",
            "pt-BR": "Efeito de Dormindo da Ana",
            "zh-CN": "安娜麻醉镖效果"
        },
        "ASHE_DYNAMITE_BURNING_PARTICLE": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BE3",
            "en-US": "Ashe Dynamite Burning Particle Effect",
            "de-DE": "Effekt – Partikel beim Brand durch Ashes Dynamit",
            "es-ES": "Efecto de partículas ardiendo de Dinamita de Ashe",
            "es-MX": "Efecto partícula ardiendo de Dinamita de Ashe",
            "fr-FR": "Effet des particules d’Enflammé de Dynamite d’Ashe",
            "ja-JP": "アッシュの〈ダイナマイト〉の炎上粒子エフェクト",
            "pl-PL": "Ashe – Efekt cząsteczkowy płonięcia Dynamitu",
            "pt-BR": "Efeito Partículas Queimando da Dinamite da Ashe",
            "zh-CN": "艾什延时雷管燃烧粒子效果"
        },
        "ASHE_DYNAMITE_BURNING_MATERIAL": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BE4",
            "en-US": "Ashe Dynamite Burning Material Effect",
            "de-DE": "Effekt – Material beim Brand durch Ashes Dynamit",
            "es-ES": "Efecto material ardiendo de Dinamita de Ashe",
            "es-MX": "Efecto material ardiendo de Dinamita de Ashe",
            "fr-FR": "Effet matériel d’Enflammé de Dynamite d’Ashe",
            "ja-JP": "アッシュの〈ダイナマイト〉の炎上エフェクト",
            "pl-PL": "Ashe – Efekt płonięcia materiału Dynamitu",
            "pt-BR": "Efeito Material Queimando da Dinamite da Ashe",
            "zh-CN": "艾什延时雷管燃烧材料效果"
        },
        "MCCREE_FLASHBANG_STUNNED": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BE9",
            "en-US": "McCree Flashbang Stunned Effect",
            "de-DE": "Effekt – betäubt durch McCrees Blendgranate",
            "es-ES": "Efecto de aturdimiento de Granada cegadora de McCree",
            "es-MX": "Efecto de aturdido con Granada aturdidora de McCree",
            "fr-FR": "Effet d’Étourdi de Grenade flash de McCree",
            "ja-JP": "マクリーの〈フラッシュバン〉のスタン・エフェクト",
            "pl-PL": "McCree – Efekt ogłuszenia Granatem Błyskowym",
            "pt-BR": "Efeito Atordoamento do Clarão do McCree",
            "zh-CN": "麦克雷闪光弹击晕效果"
        },
        "MEI_FROZEN": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BEA",
            "en-US": "Mei Frozen Effect",
            "de-DE": "Effekt – eingefroren durch Mei",
            "es-ES": "Efecto de congelación de Mei",
            "es-MX": "Efecto congelado de Mei",
            "fr-FR": "Effet de Gelé de Mei",
            "ja-JP": "メイの凍結エフェクト",
            "pl-PL": "Mei – Efekt zamrożenia",
            "pt-BR": "Efeito Congelado da Mei",
            "zh-CN": "美冰冻效果"
        },
        "SIGMA_GRAVITIC_FLUX_TARGET": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BEF",
            "en-US": "Sigma Gravitic Flux Target Effect",
            "de-DE": "Effekt – Ziel von Sigmas Gravitationsfluss",
            "es-ES": "Efecto de objetivo de Flujo gravitacional de Sigma",
            "es-MX": "Efecto de objetivo con Flujo gravitatorio de Sigma",
            "fr-FR": "Effet de cible de Flux gravitationnel de Sigma",
            "ja-JP": "シグマの〈グラビティ・フラックス〉のターゲット・エフェクト",
            "pl-PL": "Sigma – Efekt celu Strumienia Grawitacyjnego",
            "pt-BR": "Efeito Alvo do Fluxo Gravitacional do Sigma",
            "zh-CN": "“西格玛”引力乱流目标效果"
        },
        "SOMBRA_HACKED_LOOPING": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BF2",
            "en-US": "Sombra Hacked Looping Effect",
            "de-DE": "Effekt – durch Sombra gehackt Schleife",
            "es-ES": "Efecto de bucle hackeado de Sombra",
            "es-MX": "Efecto de bucle hackeado de Sombra",
            "fr-FR": "Effet de texte de hacker de Piraté de Sombra",
            "ja-JP": "ソンブラの〈ハック〉のループエフェクト",
            "pl-PL": "Sombra – Efekt zapętlenia Hakowania",
            "pt-BR": "Efeito Loop do Hackear da Sombra",
            "zh-CN": "“黑影”黑客入侵完成循环效果"
        },
        "WIDOWMAKER_VENOM_MINE_TARGET": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BF5",
            "en-US": "Widowmaker Venom Mine Target Effect",
            "de-DE": "Effekt – Ziel von Widowmakers Giftmine",
            "es-ES": "Efecto de objetivo de Mina venenosa de Widowmaker",
            "es-MX": "Efecto de objetivo para Mina venenosa de Widowmaker",
            "fr-FR": "Effet de cible de Mine venimeuse de Fatale",
            "ja-JP": "ウィドウメイカーの〈ヴェノム・マイン〉のターゲット・エフェクト",
            "pl-PL": "Trupia Wdowa – Jadowita Mina – Efekt celu",
            "pt-BR": "Efeito Alvo da Mina Venenosa da Widowmaker",
            "zh-CN": "“黑百合”剧毒诡雷目标效果"
        },
        "WINSTON_TESLA_CANNON_TARGET": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BF6",
            "en-US": "Winston Tesla Cannon Target Effect",
            "de-DE": "Effekt – Ziel von Winstons Teslakanone",
            "es-ES": "Efecto de objetivo de Cañón tesla de Winston",
            "es-MX": "Efecto de objetivo para Cañón Tesla de Winston",
            "fr-FR": "Effet de cible de Canon Tesla de Winston",
            "ja-JP": "ウィンストンの〈テスラ・キャノン〉のターゲット・エフェクト",
            "pl-PL": "Winston – Działo Tesli – Efekt celu",
            "pt-BR": "Efeito Alvo do Canhão de Tesla do Winston",
            "zh-CN": "温斯顿特斯拉炮目标效果"
        },
        "ZENYATTA_ORB_OF_DISCORD_TARGET": {
            "extension": "debuffStatusEffects",
            "guid": "000000012BFA",
            "en-US": "Zenyatta Orb of Discord Target Effect",
            "de-DE": "Effekt – Ziel von Zenyattas Sphäre der Zwietracht",
            "es-ES": "Efecto de objetivo de Orbe de discordia de Zenyatta",
            "es-MX": "Efecto de objetivo para Orbe de discordancia de Zenyatta",
            "fr-FR": "Effet de cible d’Orbe de discorde de Zenyatta",
            "ja-JP": "ゼニヤッタの〈不和のオーブ〉のターゲット・エフェクト",
            "pl-PL": "Zenyatta – Kula Rozdarcia – Efekt celu",
            "pt-BR": "Efeito Alvo do Orbe da Discórdia do Zenyatta",
            "zh-CN": "禅雅塔乱目标效果"
        }
    },
    "EffectReeval": {
        "COLOR": {
            "guid": "000000011E4A",
            "en-US": "Color",
            "fr-FR": "Couleur",
            "ja-JP": "色",
            "pt-BR": "Cor",
            "zh-CN": "颜色"
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
        "POSITION_AND_RADIUS": {
            "guid": "00000000B8C5",
            "en-US": "Position and Radius",
            "es-MX": "Posición y radio",
            "fr-FR": "Position et Rayon",
            "ja-JP": "位置と範囲",
            "pt-BR": "Posição e Raio",
            "zh-CN": "位置和半径"
        },
        "POSITION_RADIUS_AND_COLOR": {
            "guid": "000000011E66",
            "en-US": "Position Radius and Color",
            "es-MX": "Posición radio y color",
            "fr-FR": "Position Rayon et Couleur",
            "ja-JP": "位置、半径、色",
            "pt-BR": "Posição Raio e Cor",
            "zh-CN": "位置，半径和颜色"
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
        "VISIBILITY_AND_COLOR": {
            "guid": "000000011E49",
            "en-US": "Visible To and Color",
            "es-MX": "Visible para y color",
            "fr-FR": "Visible pour et Couleur",
            "ja-JP": "表示される相手、色",
            "pt-BR": "Visível para e Cor",
            "zh-CN": "可见和颜色"
        },
        "VISIBILITY_POSITION_AND_RADIUS": {
            "guid": "00000000B8C6",
            "en-US": "Visible To Position and Radius",
            "es-MX": "Visible para posición y radio",
            "fr-FR": "Visible pour Position et Rayon",
            "ja-JP": "表示される相手、位置、範囲",
            "pt-BR": "Visível para Posição e Raio",
            "zh-CN": "可见，位置和半径"
        },
        "VISIBILITY_POSITION_RADIUS_AND_COLOR": {
            "guid": "000000011E65",
            "en-US": "Visible To Position Radius and Color",
            "es-MX": "Visible para posición radio y color",
            "fr-FR": "Visible pour Position Rayon et Couleur",
            "ja-JP": "表示される相手、位置、半径、色",
            "pt-BR": "Visível para Posição Raio e Cor",
            "zh-CN": "可见，位置，半径和颜色"
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
    },
    "HeroStat": {
        "DAMAGE_DEALT": {
            "guid": "0000000124B7",
            "description": "Specifies all damage dealt (to heroes, barriers, and pets).",
            "en-US": "All Damage Dealt",
            "es-MX": "Todo el daño infligido",
            "fr-FR": "Dégâts infligés tous",
            "ja-JP": "与ダメージ（全体）",
            "pt-BR": "Todo o dano causado",
            "zh-CN": "所有造成伤害量"
        },
        "BARRIER_DAMAGE_DEALT": {
            "guid": "0000000124B8",
            "en-US": "Barrier Damage Dealt",
            "es-MX": "Daño infligido a barreras",
            "fr-FR": "Dégâts infligés aux écrans",
            "ja-JP": "バリア与ダメージ",
            "pt-BR": "Dano causado a barreiras",
            "zh-CN": "对屏障造成伤害量"
        },
        "CRITICAL_HIT_ACCURACY": {
            "guid": "0000000124E8",
            "en-US": "Critical Hit Accuracy",
            "es-MX": "Precisión de golpes críticos",
            "fr-FR": "Précision des coups critiques",
            "ja-JP": "クリティカル・ヒット命中率",
            "pt-BR": "Precisão de golpes críticos",
            "zh-CN": "暴击命中率"
        },
        "CRITICAL_HITS": {
            "guid": "0000000124E9",
            "en-US": "Critical Hits",
            "es-MX": "Golpes críticos",
            "fr-FR": "Coups critiques",
            "ja-JP": "クリティカル・ヒット",
            "pt-BR": "Golpes críticos",
            "zh-CN": "暴击"
        },
        "DAMAGE_BLOCKED": {
            "guid": "0000000124E1",
            "en-US": "Damage Blocked",
            "es-MX": "Daño bloqueado",
            "fr-FR": "Dégâts bloqués",
            "ja-JP": "ブロックしたダメージ",
            "pt-BR": "Dano bloqueado",
            "zh-CN": "阻挡伤害量"
        },
        "DAMAGE_TAKEN": {
            "guid": "0000000124E0",
            "en-US": "Damage Taken",
            "es-MX": "Daño recibido",
            "fr-FR": "Dégâts subis",
            "ja-JP": "受けたダメージ",
            "pt-BR": "Dano recebido",
            "zh-CN": "承受伤害量"
        },
        "DEATHS": {
            "guid": "0000000124DF",
            "en-US": "Deaths",
            "es-MX": "Muertes",
            "fr-FR": "Morts",
            "ja-JP": "デス",
            "pt-BR": "Mortes",
            "zh-CN": "阵亡"
        },
        "DEFENSIVE_ASSISTS": {
            "guid": "0000000124DA",
            "en-US": "Defensive Assists",
            "es-MX": "Asistencias defensivas",
            "fr-FR": "Soutiens défensifs",
            "ja-JP": "防衛アシスト",
            "pt-BR": "Assistências defensivas",
            "zh-CN": "协助防守"
        },
        "ELIMINATIONS": {
            "guid": "0000000124DE",
            "en-US": "Eliminations",
            "es-MX": "Eliminaciones",
            "fr-FR": "Éliminations",
            "ja-JP": "エリミネーション",
            "pt-BR": "Eliminações",
            "zh-CN": "消灭"
        },
        "ENVIRONMENTAL_DEATHS": {
            "guid": "0000000124D8",
            "en-US": "Environmental Deaths",
            "es-MX": "Muertes sufridas por el entorno",
            "fr-FR": "Morts dues à l’environnement",
            "ja-JP": "環境デス",
            "pt-BR": "Mortes no ambiente",
            "zh-CN": "地形阵亡"
        },
        "ENVIRONMENTAL_KILLS": {
            "guid": "0000000124D7",
            "en-US": "Environmental Kills",
            "es-MX": "Derribos con el entorno",
            "fr-FR": "Victimes dues à l’environnement",
            "ja-JP": "環境キル",
            "pt-BR": "Abates no ambiente",
            "zh-CN": "地形消灭"
        },
        "FINAL_BLOWS": {
            "guid": "0000000124DC",
            "en-US": "Final Blows",
            "es-MX": "Golpes de gracia",
            "fr-FR": "Coups de grâce",
            "ja-JP": "ファイナル・ブロウ",
            "pt-BR": "Golpes finais",
            "zh-CN": "最后一击"
        },
        "HEALING_DEALT": {
            "guid": "0000000124D1",
            "en-US": "Healing Dealt",
            "es-MX": "Sanación realizada",
            "fr-FR": "Soins prodigués",
            "ja-JP": "回復（相手）",
            "pt-BR": "Cura concedida",
            "zh-CN": "治疗量"
        },
        "HEALING_RECEIVED": {
            "guid": "0000000124EF",
            "en-US": "Healing Received",
            "es-MX": "Sanación recibida",
            "fr-FR": "Soins reçus",
            "ja-JP": "回復（自分）",
            "pt-BR": "Cura recebida",
            "zh-CN": "受到治疗量"
        },
        "HERO_DAMAGE_DEALT": {
            "guid": "0000000124D5",
            "description": "Specifies damage dealt to heroes, but not barriers or pets.",
            "en-US": "Hero Damage Dealt",
            "es-MX": "Daño infligido a héroes",
            "fr-FR": "Dégâts infligés aux héros",
            "ja-JP": "ヒーロー与ダメージ",
            "pt-BR": "Dano causado a heróis",
            "zh-CN": "对英雄造成伤害量"
        },
        "MULTIKILL_BEST": {
            "guid": "0000000124CD",
            "en-US": "Multikill Best",
            "es-MX": "Mejor derribo múltiple",
            "fr-FR": "Victimes simultanées maximum",
            "it-IT": "Multikill - Best",
            "ja-JP": "最高マルチキル",
            "pt-BR": "Abates múltiplos - melhor",
            "zh-CN": "最佳瞬间消灭"
        },
        "MULTIKILLS": {
            "guid": "0000000124CB",
            "en-US": "Multikills",
            "es-MX": "Derribos múltiples",
            "fr-FR": "Victimes simultanées",
            "ja-JP": "マルチキル",
            "pt-BR": "Abates múltiplos",
            "zh-CN": "瞬间消灭"
        },
        "OBJECTIVE_KILLS": {
            "guid": "0000000124C9",
            "en-US": "Objective Kills",
            "es-MX": "Muertes en objetivo",
            "fr-FR": "Victimes sur objectif",
            "ja-JP": "目標キル",
            "pt-BR": "Abates de objetivo",
            "zh-CN": "目标攻防消灭"
        },
        "OFFENSIVE_ASSISTS": {
            "guid": "0000000124C7",
            "en-US": "Offensive Assists",
            "es-MX": "Asistencias ofensivas",
            "fr-FR": "Soutiens offensifs",
            "ja-JP": "攻撃アシスト",
            "pt-BR": "Assistências ofensivas",
            "zh-CN": "协助进攻"
        },
        "SCOPED_ACCURACY": {
            "guid": "0000000124F6",
            "en-US": "Scoped Accuracy",
            "es-MX": "Precisión con la mira",
            "fr-FR": "Précision à la lunette",
            "ja-JP": "命中率（スコープ）",
            "pt-BR": "Precisão com mira telescópica",
            "zh-CN": "开镜命中率"
        },
        "SCOPED_CRITICAL_HIT_ACCURACY": {
            "guid": "0000000124F7",
            "en-US": "Scoped Critical Hit Accuracy",
            "es-MX": "Precisión de golpes críticos con la mira",
            "fr-FR": "Précision des coups critiques à la lunette",
            "ja-JP": "クリティカル・ヒット命中率（スコープ）",
            "pt-BR": "Precisão de golpes críticos com mira",
            "zh-CN": "开镜暴击率"
        },
        "SCOPED_CRITICAL_HIT_KILLS": {
            "guid": "0000000124F8",
            "en-US": "Scoped Critical Hit Kills",
            "es-MX": "Derribos por golpes críticos con la mira",
            "fr-FR": "Victimes de coups critiques à la lunette",
            "ja-JP": "クリティカル・ヒット・キル（スコープ）",
            "pt-BR": "Abates por golpes críticos com mira telescópica",
            "zh-CN": "开镜暴击消灭"
        },
        "SCOPED_CRITICAL_HITS": {
            "guid": "0000000124F9",
            "en-US": "Scoped Critical Hits",
            "es-MX": "Golpes críticos con la mira",
            "fr-FR": "Coups critiques à la lunette",
            "ja-JP": "クリティカル・ヒット（スコープ）",
            "pt-BR": "Golpes críticos com mira telescópica",
            "zh-CN": "开镜暴击"
        },
        "SCOPED_HITS": {
            "guid": "0000000124FA",
            "en-US": "Scoped Hits",
            "es-MX": "Golpes con la mira",
            "fr-FR": "Tirs à la lunette réussis",
            "ja-JP": "命中（スコープ）",
            "pt-BR": "Acertos com mira telescópica",
            "zh-CN": "开镜命中"
        },
        "SCOPED_SHOTS": {
            "guid": "0000000124FB",
            "en-US": "Scoped Shots",
            "es-MX": "Disparos con la mira",
            "fr-FR": "Tirs à la lunette",
            "ja-JP": "ショット（スコープ）",
            "pt-BR": "Tiros com mira telescópica",
            "zh-CN": "开镜射击"
        },
        "SELF_HEALING": {
            "guid": "0000000124FC",
            "en-US": "Self Healing",
            "es-MX": "Autosanación",
            "fr-FR": "Soins personnels",
            "ja-JP": "自己回復",
            "pt-BR": "Autocura",
            "zh-CN": "自我治疗量"
        },
        "SHOTS_FIRED": {
            "guid": "0000000124FD",
            "en-US": "Shots Fired",
            "es-MX": "Disparos realizados",
            "fr-FR": "Tirs",
            "ja-JP": "発射したショット",
            "pt-BR": "Tiros disparados",
            "zh-CN": "射击次数"
        },
        "SHOTS_HIT": {
            "guid": "0000000124FE",
            "en-US": "Shots Hit",
            "es-MX": "Disparos acertados",
            "fr-FR": "Tirs réussis",
            "ja-JP": "命中したショット",
            "pt-BR": "Tiros acertados",
            "zh-CN": "射击命中"
        },
        "SHOTS_MISSED": {
            "guid": "0000000124FF",
            "en-US": "Shots Missed",
            "es-MX": "Disparos fallados",
            "fr-FR": "Tirs manqués",
            "ja-JP": "外したショット",
            "pt-BR": "Tiros errados",
            "zh-CN": "射击未命中"
        },
        "SOLO_KILLS": {
            "guid": "0000000124C3",
            "en-US": "Solo Kills",
            "es-MX": "Derribos a solas",
            "fr-FR": "Victimes en solo",
            "ja-JP": "単独キル",
            "pt-BR": "Abates individuais",
            "zh-CN": "单独消灭"
        },
        "ULTIMATES_EARNED": {
            "guid": "0000000124C1",
            "en-US": "Ultimates Earned",
            "es-MX": "Habilidades máximas obtenidas",
            "fr-FR": "Capacités ultimes obtenues",
            "ja-JP": "アルティメット獲得",
            "pt-BR": "Supremas recebidas",
            "zh-CN": "获得终极技能"
        },
        "ULTIMATES_USED": {
            "guid": "0000000124BF",
            "en-US": "Ultimates Used",
            "es-MX": "Habilidades máximas utilizadas",
            "fr-FR": "Capacités ultimes utilisées",
            "ja-JP": "アルティメット使用",
            "pt-BR": "Supremas lançadas",
            "zh-CN": "使用终极技能"
        },
        "WEAPON_ACCURACY": {
            "guid": "0000000124BD",
            "en-US": "Weapon Accuracy",
            "es-MX": "Precisión con armas",
            "fr-FR": "Précision",
            "ja-JP": "武器命中率",
            "pt-BR": "Precisão da arma",
            "zh-CN": "武器命中率"
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
    "HudReeval": {
        "COLOR": {
            "guid": "000000011E4A",
            "en-US": "Color",
            "fr-FR": "Couleur",
            "ja-JP": "色",
            "pt-BR": "Cor",
            "zh-CN": "颜色"
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
        "SORT_ORDER": {
            "guid": "00000001095F",
            "en-US": "Sort Order",
            "es-MX": "Orden de vista",
            "fr-FR": "Tri",
            "ja-JP": "ソート順",
            "pt-BR": "Ordem de Classificação",
            "zh-CN": "排序"
        },
        "SORT_ORDER_AND_COLOR": {
            "guid": "000000011E75",
            "en-US": "Sort Order and Color",
            "es-MX": "Clasificar orden y color",
            "fr-FR": "Tri et Couleur",
            "ja-JP": "ソート順、色",
            "pt-BR": "Ordem de Classificação e Cor",
            "zh-CN": "排序规则和颜色"
        },
        "SORT_ORDER_AND_STRING": {
            "guid": "00000000FCA6",
            "en-US": "Sort Order and String",
            "es-MX": "Clasificar orden y cadena",
            "fr-FR": "Tri et Chaîne de texte",
            "ja-JP": "ソート順、文字列",
            "pt-BR": "Ordem de classificação e string",
            "zh-CN": "排序规则和字符串"
        },
        "SORT_ORDER_STRING_AND_COLOR": {
            "guid": "000000011E73",
            "en-US": "Sort Order String and Color",
            "es-MX": "Clasificar orden cadena y color",
            "fr-FR": "Tri Chaîne de texte et Couleur",
            "ja-JP": "ソート順、文字列、色",
            "pt-BR": "Ordem de Classificação String e Cor",
            "zh-CN": "排序规则，字符串和颜色"
        },
        "STRING": {
            "guid": "00000000BB31",
            "en-US": "String",
            "es-MX": "Cadena",
            "fr-FR": "Chaîne de texte",
            "ja-JP": "文字列",
            "zh-CN": "字符串"
        },
        "STRING_AND_COLOR": {
            "guid": "000000011E71",
            "en-US": "String and Color",
            "es-MX": "Cadena y color",
            "fr-FR": "Chaîne de texte et Couleur",
            "it-IT": " String and Color",
            "ja-JP": "文字列、色",
            "pt-BR": "String e Cor",
            "zh-CN": "字符串和颜色"
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
        "VISIBILITY_AND_COLOR": {
            "guid": "000000011E49",
            "en-US": "Visible To and Color",
            "es-MX": "Visible para y color",
            "fr-FR": "Visible pour et Couleur",
            "ja-JP": "表示される相手、色",
            "pt-BR": "Visível para e Cor",
            "zh-CN": "可见和颜色"
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
        "VISIBILITY_SORT_ORDER_AND_COLOR": {
            "guid": "000000011E74",
            "en-US": "Visible To Sort Order and Color",
            "es-MX": "Visible para clasificar orden y color",
            "fr-FR": "Visible pour Tri et Couleur",
            "ja-JP": "表示される相手、ソート順、色",
            "pt-BR": "Visível para Ordem de Classificação e Cor",
            "zh-CN": "可见，排序规则和颜色"
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
            "zh-CN": "可见性，排序规则和字符串"
        },
        "VISIBILITY_SORT_ORDER_STRING_AND_COLOR": {
            "guid": "000000011E72",
            "en-US": "Visible To Sort Order String and Color",
            "es-MX": "Visible para clasificar orden cadena y color",
            "fr-FR": "Visible pour Tri Chaîne de texte et Couleur",
            "ja-JP": "表示される相手、ソート順、文字列、色",
            "pt-BR": "Visível para Ordem de Classificação String e Cor",
            "zh-CN": "可见，排序规则，字符串和颜色"
        },
        "VISIBILITY_STRING_AND_COLOR": {
            "guid": "000000011E70",
            "en-US": "Visible To String and Color",
            "es-MX": "Visible para cadena y color",
            "fr-FR": "Visible pour Chaîne de texte et Couleur",
            "ja-JP": "表示される相手、文字列、色",
            "pt-BR": "Visível para String e Cor",
            "zh-CN": "可见，字符串和颜色"
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
            "es-MX": "Detener",
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
    "IconReeval": {
        "COLOR": {
            "guid": "000000011E4A",
            "en-US": "Color",
            "fr-FR": "Couleur",
            "ja-JP": "色",
            "pt-BR": "Cor",
            "zh-CN": "颜色"
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
        "POSITION": {
            "guid": "00000000B8D8",
            "en-US": "Position",
            "es-MX": "Posición",
            "ja-JP": "位置",
            "pt-BR": "Posição",
            "zh-CN": "位置"
        },
        "POSITION_AND_COLOR": {
            "guid": "000000011E48",
            "en-US": "Position and Color",
            "es-MX": "Posición y color",
            "fr-FR": "Position et Couleur",
            "ja-JP": "位置、色",
            "pt-BR": "Posição e Cor",
            "zh-CN": "位置和颜色"
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
        "VISIBILITY_AND_COLOR": {
            "guid": "000000011E49",
            "en-US": "Visible To and Color",
            "es-MX": "Visible para y color",
            "fr-FR": "Visible pour et Couleur",
            "ja-JP": "表示される相手、色",
            "pt-BR": "Visível para e Cor",
            "zh-CN": "可见和颜色"
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
        "VISIBILITY_POSITION_AND_COLOR": {
            "guid": "000000011E47",
            "en-US": "Visible To Position and Color",
            "es-MX": "Visible para posición y color",
            "fr-FR": "Visible pour Position et Couleur",
            "ja-JP": "表示される相手、位置、色",
            "pt-BR": "Visível para Posição e Cor",
            "zh-CN": "可见，位置和颜色"
        }
    },
    "Impulse": {
        "CANCEL_CONTRARY_MOTION": {
            "guid": "00000000B520",
            "description": "If the target is moving against the direction of the impulse, this relative velocity is negated before the impulse is applied. Horizontal velocity (XZ) and vertical velocity (Y) are processed separately.",
            "en-US": "Cancel Contrary Motion",
            "es-MX": "Cancelar movimiento contrario",
            "fr-FR": "Annuler le mouvement contraire",
            "ja-JP": "逆モーションをキャンセル",
            "pt-BR": "Cancelar Deslocamento Contrário",
            "zh-CN": "取消相反运动"
        },
        "CANCEL_CONTRARY_MOTION_XYZ": {
            "description": "If the target is moving against the direction of the impulse, this relative velocity is negated before the impulse is applied. Horizontal and vertical velocity (XYZ) are processed together.",
            "guid": "0000000125A5",
            "en-US": "Cancel Contrary Motion XYZ",
            "es-MX": "Cancelar movimiento contrario XYZ",
            "fr-FR": "Annuler le mouvement contraire XYZ",
            "ja-JP": "逆モーションXYZをキャンセル",
            "pt-BR": "Cancelar Deslocamento Contrário XYZ",
            "zh-CN": "取消相反运动XYZ"
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
            "guid": "00000000B8C3",
            "en-US": "None",
            "es-MX": "Ninguno",
            "fr-FR": "Aucune",
            "ja-JP": "なし",
            "pt-BR": "Ninguém",
            "zh-CN": "无"
        }
    },
    "LosCheck": {
        "OFF": {
            "guid": "00000000B1E2",
            "description": "Line of sight is never blocked, allowing results through walls.",
            "en-US": "Off",
            "es-MX": "No",
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
    "OutlineVisibility": {
        "DEFAULT": {
            "description": "Outlines are visible based on the default game settings.",
            "guid": "000000011C50",
            "en-US": "Default",
            "es-MX": "Predeterminado",
            "fr-FR": "Par défaut",
            "ja-JP": "デフォルト",
            "pt-BR": "Padrão",
            "zh-CN": "默认"
        },
        "OCCLUDED": {
            "description": "Outlines are visible when occluded by the environment.",
            "guid": "000000011C51",
            "en-US": "Occluded",
            "es-MX": "Ocluido",
            "fr-FR": "Obstrué",
            "ja-JP": "オクルード",
            "pt-BR": "Ocultado",
            "zh-CN": "遮蔽"
        },
        "ALWAYS": {
            "description": "Outlines are always visible.",
            "guid": "000000011C52",
            "en-US": "Always",
            "es-MX": "Siempre",
            "fr-FR": "Toujours",
            "ja-JP": "常時",
            "pt-BR": "Sempre",
            "zh-CN": "总是"
        }
    },
    "ProgressHudReeval": {
        "COLOR": {
            "guid": "000000011E4A",
            "en-US": "Color",
            "fr-FR": "Couleur",
            "ja-JP": "色",
            "pt-BR": "Cor",
            "zh-CN": "颜色"
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
        "VALUES": {
            "guid": "0000000122F1",
            "en-US": "Values",
            "es-MX": "Valores",
            "fr-FR": "Valeurs",
            "ja-JP": "値",
            "pt-BR": "Valores",
            "zh-CN": "值"
        },
        "VALUES_AND_COLOR": {
            "guid": "0000000122F0",
            "en-US": "Values and Color",
            "es-MX": "Valores y color",
            "fr-FR": "Valeurs et Couleur",
            "ja-JP": "値、色",
            "pt-BR": "Valores e Cor",
            "zh-CN": "值和颜色"
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
        "VISIBILITY_AND_COLOR": {
            "guid": "000000011E49",
            "en-US": "Visible To and Color",
            "es-MX": "Visible para y color",
            "fr-FR": "Visible pour et Couleur",
            "ja-JP": "表示される相手、色",
            "pt-BR": "Visível para e Cor",
            "zh-CN": "可见和颜色"
        },
        "VISIBILITY_AND_VALUES": {
            "guid": "0000000122EF",
            "en-US": "Visible To and Values",
            "es-MX": "Visible para y valores",
            "fr-FR": "Visible pour et Valeurs",
            "ja-JP": "表示される相手、値",
            "pt-BR": "Visível para e Valores",
            "zh-CN": "可见和值"
        },
        "VISIBILITY_VALUES_AND_COLOR": {
            "guid": "0000000122EE",
            "en-US": "Visible To Values and Color",
            "es-MX": "Visible para valores y color",
            "fr-FR": "Visible pour Valeurs et Couleur",
            "ja-JP": "表示される相手、値、色",
            "pt-BR": "Visível para Valores e Cor",
            "zh-CN": "可见，值和颜色"
        }
    },
    "ProgressWorldTextReeval": {
        "COLOR": {
            "guid": "000000011E4A",
            "en-US": "Color",
            "fr-FR": "Couleur",
            "ja-JP": "色",
            "pt-BR": "Cor",
            "zh-CN": "颜色"
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
        "POSITION": {
            "guid": "00000000B8D8",
            "en-US": "Position",
            "es-MX": "Posición",
            "ja-JP": "位置",
            "pt-BR": "Posição",
            "zh-CN": "位置"
        },
        "POSITION_AND_COLOR": {
            "guid": "000000011E48",
            "en-US": "Position and Color",
            "es-MX": "Posición y color",
            "fr-FR": "Position et Couleur",
            "ja-JP": "位置、色",
            "pt-BR": "Posição e Cor",
            "zh-CN": "位置和颜色"
        },
        "POSITION_AND_VALUES": {
            "guid": "000000012340",
            "en-US": "Position and Values",
            "es-MX": "Posición y valores",
            "fr-FR": "Position et Valeurs",
            "ja-JP": "位置、値",
            "pt-BR": "Posição e Valores",
            "zh-CN": "位置和颜色"
        },
        "POSITION_VALUES_AND_COLOR": {
            "guid": "00000001233F",
            "en-US": "Position Values and Color",
            "es-MX": "Posición valores y color",
            "fr-FR": "Position Valeurs et Couleur",
            "ja-JP": "位置、値、色",
            "pt-BR": "Posição Valores e Cor",
            "zh-CN": "位置，值和颜色"
        },
        "VALUES": {
            "guid": "0000000122F1",
            "en-US": "Values",
            "es-MX": "Valores",
            "fr-FR": "Valeurs",
            "ja-JP": "値",
            "pt-BR": "Valores",
            "zh-CN": "值"
        },
        "VALUES_AND_COLOR": {
            "guid": "0000000122F0",
            "en-US": "Values and Color",
            "es-MX": "Valores y color",
            "fr-FR": "Valeurs et Couleur",
            "ja-JP": "値、色",
            "pt-BR": "Valores e Cor",
            "zh-CN": "值和颜色"
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
        "VISIBILITY_AND_COLOR": {
            "guid": "000000011E49",
            "en-US": "Visible To and Color",
            "es-MX": "Visible para y color",
            "fr-FR": "Visible pour et Couleur",
            "ja-JP": "表示される相手、色",
            "pt-BR": "Visível para e Cor",
            "zh-CN": "可见和颜色"
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
        "VISIBILITY_AND_VALUES": {
            "guid": "0000000122EF",
            "en-US": "Visible To and Values",
            "es-MX": "Visible para y valores",
            "fr-FR": "Visible pour et Valeurs",
            "ja-JP": "表示される相手、値",
            "pt-BR": "Visível para e Valores",
            "zh-CN": "可见和值"
        },
        "VISIBILITY_POSITION_AND_COLOR": {
            "guid": "000000011E47",
            "en-US": "Visible To Position and Color",
            "es-MX": "Visible para posición y color",
            "fr-FR": "Visible pour Position et Couleur",
            "ja-JP": "表示される相手、位置、色",
            "pt-BR": "Visível para Posição e Cor",
            "zh-CN": "可见，位置和颜色"
        },
        "VISIBILITY_POSITION_AND_VALUES": {
            "guid": "00000001233E",
            "en-US": "Visible To Position and Values",
            "es-MX": "Visible para posición y valores",
            "fr-FR": "Visible pour Position et Valeurs",
            "ja-JP": "表示される相手、位置、値",
            "pt-BR": "Visível para Posição e Valores",
            "zh-CN": "可见，位置和值"
        },
        "VISIBILITY_VALUES_AND_COLOR": {
            "guid": "0000000122EE",
            "en-US": "Visible To Values and Color",
            "es-MX": "Visible para valores y color",
            "fr-FR": "Visible pour Valeurs et Couleur",
            "ja-JP": "表示される相手、値、色",
            "pt-BR": "Visível para Valores e Cor",
            "zh-CN": "可见，值和颜色"
        },
        "VISIBILITY_POSITION_VALUES_AND_COLOR": {
            "guid": "00000001233D",
            "en-US": "Visible To Position Values and Color",
            "es-MX": "Visible para posición valores y color",
            "fr-FR": "Visible pour Position Valeurs et Couleur",
            "ja-JP": "表示される相手、位置、値、色",
            "pt-BR": "Visível para Posição Valores e Cor",
            "zh-CN": "可见，位置，值和颜色"
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
    "Stat": {
        "DAMAGE_DEALT": {
            "guid": "0000000124B7",
            "description": "Specifies all damage dealt (to heroes, barriers, and pets).",
            "en-US": "All Damage Dealt",
            "es-MX": "Todo el daño infligido",
            "fr-FR": "Dégâts infligés tous",
            "ja-JP": "与ダメージ（全体）",
            "pt-BR": "Todo o dano causado",
            "zh-CN": "所有造成伤害量"
        },
        "BARRIER_DAMAGE_DEALT": {
            "guid": "0000000124B8",
            "en-US": "Barrier Damage Dealt",
            "es-MX": "Daño infligido a barreras",
            "fr-FR": "Dégâts infligés aux écrans",
            "ja-JP": "バリア与ダメージ",
            "pt-BR": "Dano causado a barreiras",
            "zh-CN": "对屏障造成伤害量"
        },
        "DAMAGE_BLOCKED": {
            "guid": "0000000124E1",
            "en-US": "Damage Blocked",
            "es-MX": "Daño bloqueado",
            "fr-FR": "Dégâts bloqués",
            "ja-JP": "ブロックしたダメージ",
            "pt-BR": "Dano bloqueado",
            "zh-CN": "阻挡伤害量"
        },
        "DAMAGE_TAKEN": {
            "guid": "0000000124E0",
            "en-US": "Damage Taken",
            "es-MX": "Daño recibido",
            "fr-FR": "Dégâts subis",
            "ja-JP": "受けたダメージ",
            "pt-BR": "Dano recebido",
            "zh-CN": "承受伤害量"
        },
        "DEATHS": {
            "guid": "0000000124DF",
            "en-US": "Deaths",
            "es-MX": "Muertes",
            "fr-FR": "Morts",
            "ja-JP": "デス",
            "pt-BR": "Mortes",
            "zh-CN": "阵亡"
        },
        "ELIMINATIONS": {
            "guid": "0000000124DE",
            "en-US": "Eliminations",
            "es-MX": "Eliminaciones",
            "fr-FR": "Éliminations",
            "ja-JP": "エリミネーション",
            "pt-BR": "Eliminações",
            "zh-CN": "消灭"
        },
        "DEFENSIVE_ASSISTS": {
            "guid": "0000000124DA",
            "en-US": "Defensive Assists",
            "es-MX": "Asistencias defensivas",
            "fr-FR": "Soutiens défensifs",
            "ja-JP": "防衛アシスト",
            "pt-BR": "Assistências defensivas",
            "zh-CN": "协助防守"
        },
        "FINAL_BLOWS": {
            "guid": "0000000124DC",
            "en-US": "Final Blows",
            "es-MX": "Golpes de gracia",
            "fr-FR": "Coups de grâce",
            "ja-JP": "ファイナル・ブロウ",
            "pt-BR": "Golpes finais",
            "zh-CN": "最后一击"
        },
        "ENVIRONMENTAL_DEATHS": {
            "guid": "0000000124D8",
            "en-US": "Environmental Deaths",
            "es-MX": "Muertes sufridas por el entorno",
            "fr-FR": "Morts dues à l’environnement",
            "ja-JP": "環境デス",
            "pt-BR": "Mortes no ambiente",
            "zh-CN": "地形阵亡"
        },
        "ENVIRONMENTAL_KILLS": {
            "guid": "0000000124D7",
            "en-US": "Environmental Kills",
            "es-MX": "Derribos con el entorno",
            "fr-FR": "Victimes dues à l’environnement",
            "ja-JP": "環境キル",
            "pt-BR": "Abates no ambiente",
            "zh-CN": "地形消灭"
        },
        "HERO_DAMAGE_DEALT": {
            "guid": "0000000124D5",
            "description": "Specifies damage dealt to heroes, but not barriers or pets.",
            "en-US": "Hero Damage Dealt",
            "es-MX": "Daño infligido a héroes",
            "fr-FR": "Dégâts infligés aux héros",
            "ja-JP": "ヒーロー与ダメージ",
            "pt-BR": "Dano causado a heróis",
            "zh-CN": "对英雄造成伤害量"
        },
        "HEALING_DEALT": {
            "guid": "0000000124D1",
            "en-US": "Healing Dealt",
            "es-MX": "Sanación realizada",
            "fr-FR": "Soins prodigués",
            "ja-JP": "回復（相手）",
            "pt-BR": "Cura concedida",
            "zh-CN": "治疗量"
        },
        "MULTIKILL_BEST": {
            "guid": "0000000124CD",
            "en-US": "Multikill Best",
            "es-MX": "Mejor derribo múltiple",
            "fr-FR": "Victimes simultanées maximum",
            "it-IT": "Multikill - Best",
            "ja-JP": "最高マルチキル",
            "pt-BR": "Abates múltiplos - melhor",
            "zh-CN": "最佳瞬间消灭"
        },
        "MULTIKILLS": {
            "guid": "0000000124CB",
            "en-US": "Multikills",
            "es-MX": "Derribos múltiples",
            "fr-FR": "Victimes simultanées",
            "ja-JP": "マルチキル",
            "pt-BR": "Abates múltiplos",
            "zh-CN": "瞬间消灭"
        },
        "OBJECTIVE_KILLS": {
            "guid": "0000000124C9",
            "en-US": "Objective Kills",
            "es-MX": "Muertes en objetivo",
            "fr-FR": "Victimes sur objectif",
            "ja-JP": "目標キル",
            "pt-BR": "Abates de objetivo",
            "zh-CN": "目标攻防消灭"
        },
        "OFFENSIVE_ASSISTS": {
            "guid": "0000000124C7",
            "en-US": "Offensive Assists",
            "es-MX": "Asistencias ofensivas",
            "fr-FR": "Soutiens offensifs",
            "ja-JP": "攻撃アシスト",
            "pt-BR": "Assistências ofensivas",
            "zh-CN": "协助进攻"
        },
        "SOLO_KILLS": {
            "guid": "0000000124C3",
            "en-US": "Solo Kills",
            "es-MX": "Derribos a solas",
            "fr-FR": "Victimes en solo",
            "ja-JP": "単独キル",
            "pt-BR": "Abates individuais",
            "zh-CN": "单独消灭"
        },
        "ULTIMATES_EARNED": {
            "guid": "0000000124C1",
            "en-US": "Ultimates Earned",
            "es-MX": "Habilidades máximas obtenidas",
            "fr-FR": "Capacités ultimes obtenues",
            "ja-JP": "アルティメット獲得",
            "pt-BR": "Supremas recebidas",
            "zh-CN": "获得终极技能"
        },
        "ULTIMATES_USED": {
            "guid": "0000000124BF",
            "en-US": "Ultimates Used",
            "es-MX": "Habilidades máximas utilizadas",
            "fr-FR": "Capacités ultimes utilisées",
            "ja-JP": "アルティメット使用",
            "pt-BR": "Supremas lançadas",
            "zh-CN": "使用终极技能"
        },
        "WEAPON_ACCURACY": {
            "guid": "0000000124BD",
            "en-US": "Weapon Accuracy",
            "es-MX": "Precisión con armas",
            "fr-FR": "Précision",
            "ja-JP": "武器命中率",
            "pt-BR": "Precisão da arma",
            "zh-CN": "武器命中率"
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
            "zh-CN": "冰冻"
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
            "zh-CN": "击晕"
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
    "WorldTextReeval": {
        "COLOR": {
            "guid": "000000011E4A",
            "en-US": "Color",
            "fr-FR": "Couleur",
            "ja-JP": "色",
            "pt-BR": "Cor",
            "zh-CN": "颜色"
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
        "STRING": {
            "guid": "00000000BB31",
            "en-US": "String",
            "es-MX": "Cadena",
            "fr-FR": "Chaîne de texte",
            "ja-JP": "文字列",
            "zh-CN": "字符串"
        },
        "STRING_AND_COLOR": {
            "guid": "000000011E71",
            "en-US": "String and Color",
            "es-MX": "Cadena y color",
            "fr-FR": "Chaîne de texte et Couleur",
            "it-IT": " String and Color",
            "ja-JP": "文字列、色",
            "pt-BR": "String e Cor",
            "zh-CN": "字符串和颜色"
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
        "VISIBILITY_AND_COLOR": {
            "guid": "000000011E49",
            "en-US": "Visible To and Color",
            "es-MX": "Visible para y color",
            "fr-FR": "Visible pour et Couleur",
            "ja-JP": "表示される相手、色",
            "pt-BR": "Visível para e Cor",
            "zh-CN": "可见和颜色"
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
        "VISIBILITY_POSITION_AND_COLOR": {
            "guid": "000000011E47",
            "en-US": "Visible To Position and Color",
            "es-MX": "Visible para posición y color",
            "fr-FR": "Visible pour Position et Couleur",
            "ja-JP": "表示される相手、位置、色",
            "pt-BR": "Visível para Posição e Cor",
            "zh-CN": "可见，位置和颜色"
        },
        "VISIBILITY_POSITION_AND_STRING": {
            "guid": "00000000BAD4",
            "en-US": "Visible To Position and String",
            "es-MX": "Visible para posición y cadena",
            "fr-FR": "Visible pour Position et Chaîne de texte",
            "ja-JP": "表示される相手、位置、文字列",
            "pt-BR": "Visível para Posição e String",
            "zh-CN": "可见，位置和字符串"
        },
        "VISIBILITY_STRING_AND_COLOR": {
            "guid": "000000011E70",
            "en-US": "Visible To String and Color",
            "es-MX": "Visible para cadena y color",
            "fr-FR": "Visible pour Chaîne de texte et Couleur",
            "ja-JP": "表示される相手、文字列、色",
            "pt-BR": "Visível para String e Cor",
            "zh-CN": "可见，字符串和颜色"
        },
        "VISIBILITY_POSITION_STRING_AND_COLOR": {
            "guid": "000000011E76",
            "en-US": "Visible To Position String and Color",
            "es-MX": "Visible para posición cadena y color",
            "fr-FR": "Visible pour Position Chaîne de texte et Couleur",
            "ja-JP": "表示される相手、位置、文字列、色",
            "pt-BR": "Visível para Posição String e Cor",
            "zh-CN": "可见，位置，字符串和颜色"
        }
    },
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
            "ja-JP": "配列に追加",
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
    "__Rounding__": {
        "__roundUp__": {
            "guid": "00000000C34F",
            "en-US": "Up",
            "es-MX": "Arriba",
            "fr-FR": "Au-dessus",
            "ja-JP": "上",
            "pt-BR": "Cima",
            "zh-CN": "上"
        },
        "__roundDown__": {
            "guid": "00000000C34E",
            "en-US": "Down",
            "es-MX": "Abajo",
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

for (var key in constantValues) {
    if (key.endsWith("Literal")) {
        constantValues[key]["description"] = "The built-in `"+key.substring(0, key.length-"Literal".length)+"` enum.";
    } else {
        constantValues[key]["description"] = "The built-in `"+key+"` enum.";
    }
}
