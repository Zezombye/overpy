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
                "fr-FR": "Interaction",
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
            },{
                "opy": "Button.MELEE",
                "en-US": "Melee"
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
            },{
                "opy": "Button.RELOAD",
                "en-US": "Reload",
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
                "fr-FR": "Soldat : 76",
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
        ],
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
            },{
                "opy": "HudReeval.SORT_ORDER_AND_STRING",
                "en-US": "Sort Order and String",
            },{
                "opy": "HudReeval.VISIBILITY_SORT_ORDER_AND_STRING",
                "en-US": "Visible To Sort Order and String",
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
    "HEALING MODIFICATION REEVALUATION": {
        "opy": "HealingReeval",
        "values": [
            {
                "opy": "HealingReeval.NONE",
                "en-US": "None",
            },{
                "opy": "HealingReeval.RECEIVERS_AND_HEALERS",
                "en-US": "Receivers and Healers",
            },{
                "opy": "HealingReeval.RECEIVERS_HEALERS_AND_HEALPERCENT",
                "en-US": "Receivers Healers and Healing Percent",
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
            },{
                "opy": "Map.WORKSHOP_CHAMBER",
                "en-US": "Workshop Chamber",
            },{
                "opy": "Map.WORKSHOP_EXPANSE",
                "en-US": "Workshop Expanse",
            },{
                "opy": "Map.WORKSHOP_ISLAND",
                "en-US": "Workshop Island",
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
    },
    "START RULE BEHAVIOR": {
        "opy": "AsyncBehavior",
        "values": [
            {
                "opy": "AsyncBehavior.RESTART",
                "en-US": "Restart Rule",
            },{
                "opy": "AsyncBehavior.NOOP",
                "en-US": "Do Nothing",
            }
        ]
    }
}
//end-json





