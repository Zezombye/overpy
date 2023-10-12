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

/*
Symmetry axes are denoted with z = a*x+b. If x is specified that means a formula such as x = 4.

Ilios Ruins and Busan Downtown have several "centers" which make me believe the map could have a very slight deviation from the axis. The difference is measured in cm though.

Busan Meka Base: 2.32074 * x - 274.76433

*/

const mapKw =
//begin-json
{
    "ayutthaya": {
        "guid": "00000000676E",
        "gamemodes": [
            "ctf",
            "elimination",
            "freezethawElimination"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": -7
        },
        "en-US": "Ayutthaya",
        "ja-JP": "AYUTTHAYA",
        "ko-KR": "아유타야",
        "ru-RU": "Аюттайя",
        "th-TH": "อยุธยา",
        "zh-CN": "阿育陀耶",
        "zh-TW": "大城"
    },
    "antarcticPeninsula": {
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "default": "972777519512068153"
        },
        "guid": "000000010F5E",
        "en-US": "Antarctic Peninsula",
        "de-DE": "Antarktische Halbinsel",
        "es-ES": "Península Antártica",
        "es-MX": "Península Antártica",
        "fr-FR": "Péninsule Antarctique",
        "it-IT": "Penisola Antartica",
        "ja-JP": "ANTARCTIC PENINSULA",
        "ko-KR": "남극 반도",
        "pl-PL": "Półwysep Antarktyczny",
        "pt-BR": "Península Antártica",
        "ru-RU": "Антарктический полуостров",
        "th-TH": "คาบสมุทรแอนตาร์กติก",
        "tr-TR": "Antarktika Yarımadası",
        "zh-CN": "南极半岛",
        "zh-TW": "南極半島"
    },
    "blackForest": {
        "guid": "0000000059C3",
        "gamemodes": [
            "elimination",
            "freezethawElimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 5
        },
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
        "th-TH": "หมู่บ้านแบล็คฟอเรสต์",
        "tr-TR": "Kara Orman",
        "zh-CN": "黑森林",
        "zh-TW": "黑森林"
    },
    "blackForestWinter": {
        "guid": "0000000070F4",
        "gamemodes": [
            "elimination",
            "freezethawElimination",
            "ffa",
            "bountyHunter",
            "tdm",
            "meisSnowballOffensive",
            "snowballFfa"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 5
        },
        "en-US": "Black Forest Winter",
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
        "th-TH": "หมู่บ้านแบล็คฟอเรสต์ ฤดูหนาว",
        "tr-TR": "Kara Orman Kış",
        "zh-CN": "圣诞节黑森林",
        "zh-TW": "黑森林（冬境）"
    },
    "blizzWorld": {
        "guid": "000000006905",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "morning": "972777519512068154",
            "overcast": "972777519512068194",
            "night": "972777519512068153"
        },
        "en-US": "Blizzard World",
        "ja-JP": "BLIZZARD WORLD",
        "ko-KR": "블리자드 월드",
        "th-TH": "บลิซซาร์ดเวิลด์",
        "tr-TR": "Blizzard Dünyası",
        "zh-CN": "暴雪世界",
        "zh-TW": "暴雪樂園"
    },
    "blizzWorldWinter": {
        "guid": "00000000A933",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
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
        "th-TH": "บลิซซาร์ดเวิลด์ ฤดูหนาว",
        "tr-TR": "Blizzard Dünyası Kış",
        "zh-CN": "圣诞节暴雪世界",
        "zh-TW": "暴雪樂園（冬境）"
    },
    "busan": {
        "guid": "000000006D90",
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "night": "972777519512068153",
            "morning": "972777519512068154",
            "overcast": "972777519512068194"
        },
        "en-US": "Busan",
        "ja-JP": "BUSAN",
        "ko-KR": "부산",
        "pl-PL": "Pusan",
        "ru-RU": "Пусан",
        "th-TH": "ปูซาน",
        "zh-CN": "釜山",
        "zh-TW": "釜山"
    },
    "busanDowntownLny": {
        "guid": "00000000D2C9",
        "gamemodes": [
            "ctf"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 51.9
        },
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
        "th-TH": " กลางเมืองปูซาน วันตรุษจีน",
        "tr-TR": "Busan Kenti Ay Yeni Yılı",
        "zh-CN": "春节釜山城区",
        "zh-TW": "釜山市區（春節）"
    },
    "busanSanctuaryLny": {
        "guid": "00000000D2CA",
        "gamemodes": [
            "ctf"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": -328.565
        },
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
        "th-TH": "สถานที่ศักดิ์สิทธิ์ปูซาน วันตรุษจีน",
        "tr-TR": "Busan Mabedi Ay Yeni Yılı",
        "zh-CN": "春节釜山寺院",
        "zh-TW": "釜山寺院（春節）"
    },
    "busanStadium": {
        "onlyInOw1": true,
        "gamemodes": [
            "lucioball"
        ],
        "guid": "0000000112AA",
        "en-US": "Busan Stadium",
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
    "busanStadiumClassic": {
        "onlyInOw1": true,
        "gamemodes": [
            "lucioball"
        ],
        "guid": "000000008A19",
        "en-US": "Busan Stadium Classic",
        "de-DE": "Klassisches Stadion von Busan",
        "es-ES": "Estadio de Busan clásico",
        "es-MX": "Estadio de Busan clásico",
        "fr-FR": "Stade de Busan classique",
        "it-IT": "Busan - Stadio classico",
        "ja-JP": "BUSAN STADIUM CLASSIC",
        "ko-KR": "부산 스타디움 클래식",
        "pl-PL": "Klasyczny Stadion Pusan",
        "pt-BR": "Estádio Busan Clássico",
        "ru-RU": "Классический стадион Пусана",
        "zh-CN": "釜山体育场（经典）",
        "zh-TW": "經典釜山運動場"
    },
    "castillo": {
        "guid": "000000005C04",
        "gamemodes": [
            "elimination",
            "freezethawElimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": -0.19009,
            "b": 38.79879
        },
        "en-US": "Castillo",
        "ja-JP": "CASTILLO",
        "ko-KR": "카스티요",
        "ru-RU": "Кастильо",
        "th-TH": "แคสติลโล",
        "tr-TR": "Kastillo",
        "zh-CN": "城堡",
        "zh-TW": "城塞"
    },
    "chateauGuillard": {
        "guid": "0000000069CA",
        "gamemodes": [
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "en-US": "Château Guillard",
        "es-ES": "Palacio Guillard",
        "ja-JP": "CHATEAU GUILLARD",
        "ko-KR": "샤토 기야르",
        "ru-RU": "Шато-Гийяр",
        "th-TH": "คฤหาสน์กียา",
        "tr-TR": "Guillard Şatosu",
        "zh-CN": "吉拉德堡",
        "zh-TW": "蓋亞爾城堡"
    },
    "chateauGuillardHalloween": {
        "guid": "000000009FA4",
        "gamemodes": [
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "en-US": "Château Guillard Halloween",
        "es-ES": "Palacio Guillard Halloween",
        "ja-JP": "CHATEAU GUILLARD ハロウィン",
        "ko-KR": "샤토 기야르 할로윈",
        "pl-PL": "Château Guillard Halloweenowe",
        "ru-RU": "Шато-Гийяр Хеллоуин",
        "th-TH": "คฤหาสน์กียา ฮาโลวีน",
        "tr-TR": "Guillard Şatosu Cadılar Bayramı",
        "zh-CN": "万圣节吉拉德堡",
        "zh-TW": "蓋亞爾城堡（萬聖節）"
    },
    "circuitRoyal": {
        "gamemodes": [
            "skirmish",
            "escort"
        ],
        "variants": {
            "night": "972777519512068153",
            "morning": "972777519512068154"
        },
        "guid": "00000001777C",
        "en-US": "Circuit Royal",
        "fr-FR": "Circuit royal",
        "ja-JP": "CIRCUIT ROYAL",
        "ko-KR": "서킷 로얄",
        "pl-PL": "Circuit royal",
        "ru-RU": "Королевская трасса",
        "th-TH": "เซอร์กิตรอยัล",
        "zh-CN": "皇家赛道",
        "zh-TW": "皇家賽道"
    },
    "colosseo": {
        "gamemodes": [
            "skirmish",
            "push"
        ],
        "variants": {
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "guid": "000000015B56",
        "en-US": "Colosseo",
        "ja-JP": "COLOSSEO",
        "ko-KR": "콜로세오",
        "pl-PL": "Koloseum",
        "ru-RU": "Колизей",
        "th-TH": "โคลอสซิโอ",
        "zh-CN": "斗兽场",
        "zh-TW": "羅馬競技場"
    },
    "dorado": {
        "guid": "0000000008C1",
        "gamemodes": [
            "escort",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "night": "972777519512068153",
            "evening": "972777519512068292"
        },
        "en-US": "Dorado",
        "it-IT": "El Dorado",
        "ja-JP": "DORADO",
        "ko-KR": "도라도",
        "ru-RU": "Дорадо",
        "th-TH": "โดราโด",
        "zh-CN": "多拉多",
        "zh-TW": "多拉多"
    },
    "ecopointAntarctica": {
        "guid": "0000000047D3",
        "gamemodes": [
            "elimination",
            "freezethawElimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Ecopoint: Antarctica",
        "de-DE": "Ecopoint: Antarktis",
        "es-ES": "Ecobase: Antártida",
        "es-MX": "Ecopunto: Antártida",
        "fr-FR": "Écolab : Antarctique",
        "it-IT": "Ecobase: Antartide",
        "ja-JP": "ECOPOINT: ANTARCTICA",
        "ko-KR": "탐사 기지: 남극",
        "pl-PL": "Ekopunkt Antarktyda",
        "pt-BR": "Ecoponto: Antártica",
        "ru-RU": "Экостанция: Антарктика",
        "th-TH": "อีโคพอยต์: แอนตาร์กติกา",
        "tr-TR": "Ekonokta: Antarktika",
        "zh-CN": "生态监测站：南极洲",
        "zh-TW": "南極洲生態觀測站"
    },
    "ecopointAntarcticaWinter": {
        "guid": "0000000075A7",
        "gamemodes": [
            "elimination",
            "freezethawElimination",
            "ffa",
            "bountyHunter",
            "tdm",
            "meisSnowballOffensive",
            "snowballFfa"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Ecopoint: Antarctica Winter",
        "de-DE": "Ecopoint: Antarktis Winter",
        "es-ES": "Ecobase: Antártida invierno",
        "es-MX": "Ecopunto: Antártida Invierno",
        "fr-FR": "Écolab : Antarctique hiver",
        "it-IT": "Ecobase: Antartide inverno",
        "ja-JP": "ECOPOINT: ANTARCTICA （ウィンター）",
        "ko-KR": "탐사 기지: 남극 겨울",
        "pl-PL": "Ekopunkt Antarktyda Zima",
        "pt-BR": "Ecoponto: Antártica Inverno",
        "ru-RU": "Экостанция: Антарктика зима",
        "th-TH": "อีโคพอยต์: แอนตาร์กติกา ฤดูหนาว",
        "tr-TR": "Ekonokta: Antarktika Kış",
        "zh-CN": "圣诞节生态监测站：南极洲",
        "zh-TW": "南極洲生態觀測站（冬境）"
    },
    "eichenwalde": {
        "guid": "0000000029AF",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "en-US": "Eichenwalde",
        "ja-JP": "EICHENWALDE",
        "ko-KR": "아이헨발데",
        "ru-RU": "Айхенвальд",
        "th-TH": "ไอเค็นวอลด์",
        "zh-CN": "艾兴瓦尔德",
        "zh-TW": "愛西瓦德"
    },
    "eichenwaldeHalloween": {
        "guid": "000000006E6B",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "en-US": "Eichenwalde Halloween",
        "ja-JP": "EICHENWALDE （ハロウィン）",
        "ko-KR": "아이헨발데 할로윈",
        "ru-RU": "Айхенвальд Хеллоуин",
        "th-TH": "ไอเค็นวอลด์ ฮาโลวีน",
        "tr-TR": "Eichenwalde Cadılar Bayramı",
        "zh-CN": "万圣节艾兴瓦尔德",
        "zh-TW": "愛西瓦德（萬聖節）"
    },
    "esperanca": {
        "gamemodes": [
            "skirmish",
            "push"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "guid": "000000016D84",
        "en-US": "Esperança",
        "ja-JP": "ESPERANCA",
        "ko-KR": "이스페란사",
        "ru-RU": "Эсперанса",
        "th-TH": "เอสเปรันซา",
        "zh-CN": "埃斯佩兰萨",
        "zh-TW": "希望之城"
    },
    "estadioDasRas": {
        "onlyInOw1": true,
        "guid": "000000004629",
        "gamemodes": [
            "lucioball"
        ],
        "en-US": "Estádio das Rãs",
        "es-MX": "Estadio de Rãs",
        "it-IT": "Estádio de Rãs",
        "ja-JP": "ESTADIO DAS RAS",
        "ko-KR": "이스타지우 다스 하스",
        "ru-RU": "«Эстадиу ди Ранс»",
        "zh-CN": "弗格体育场",
        "zh-TW": "青蛙體育場"
    },
    "hanamura": {
        "guid": "000000000138",
        "gamemodes": [
            "assault",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "en-US": "Hanamura",
        "ja-JP": "HANAMURA",
        "ko-KR": "하나무라",
        "ru-RU": "Ханамура",
        "th-TH": "ฮานามุระ",
        "zh-CN": "花村",
        "zh-TW": "花村"
    },
    "hanamuraWinter": {
        "guid": "000000005479",
        "gamemodes": [
            "assault",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
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
        "th-TH": "ฮานามุระ ฤดูหนาว",
        "tr-TR": "Hanamura Kış",
        "zh-CN": "圣诞节花村",
        "zh-TW": "花村（冬境）"
    },
    "havana": {
        "guid": "00000000B8EA",
        "gamemodes": [
            "escort",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "night": "972777519512068153",
            "morning": "972777519512068154"
        },
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
        "th-TH": "ฮาวานา",
        "zh-CN": "哈瓦那",
        "zh-TW": "哈瓦那"
    },
    "hollywood": {
        "guid": "00000000053D",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "night": "972777519512068153",
            "morning": "972777519512068154"
        },
        "en-US": "Hollywood",
        "it-IT": "HOLLYWOOD",
        "ja-JP": "HOLLYWOOD",
        "ko-KR": "할리우드",
        "ru-RU": "Голливуд",
        "th-TH": "ฮอลลีวู้ด",
        "zh-CN": "好莱坞",
        "zh-TW": "好萊塢"
    },
    "hollywoodHalloween": {
        "guid": "000000004EE3",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "en-US": "Hollywood Halloween",
        "ja-JP": "HOLLYWOOD （ハロウィン）",
        "ko-KR": "할리우드 할로윈",
        "ru-RU": "Голливуд Хеллоуин",
        "th-TH": "ฮอลลีวูด ฮาโลวีน",
        "tr-TR": "Hollywood Cadılar Bayramı",
        "zh-CN": "万圣节好莱坞",
        "zh-TW": "好萊塢（萬聖節主題）"
    },
    "horizonLunarColony": {
        "guid": "000000004EEE",
        "gamemodes": [
            "assault",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068154"
        },
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
        "th-TH": "อาณานิคมดวงจันทร์ฮอไรซัน",
        "tr-TR": "Ufuk Ay Kolonisi",
        "zh-CN": "“地平线”月球基地",
        "zh-TW": "地平線月球殖民地"
    },
    "ilios": {
        "guid": "0000000022FA",
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "en-US": "Ilios",
        "it-IT": "Ilio",
        "ja-JP": "ILIOS",
        "ko-KR": "일리오스",
        "ru-RU": "Илиос",
        "th-TH": "อิลิออส",
        "tr-TR": "İlyos",
        "zh-CN": "伊利奥斯",
        "zh-TW": "伊利歐斯"
    },
    "iliosLighthouse": {
        "guid": "000000005847",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": -0.41437,
            "b": 96.86593
        },
        "en-US": "Ilios Lighthouse",
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
        "th-TH": "ประภาคารอิลิโอส",
        "tr-TR": "İlyos Deniz Feneri",
        "zh-CN": "伊利奥斯灯塔",
        "zh-TW": "伊利歐斯燈塔"
    },
    "iliosRuins": {
        "guid": "000000005851",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 28.6
        },
        "en-US": "Ilios Ruins",
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
        "th-TH": "ซากปรักหักพังอิลิโอส",
        "tr-TR": "İlyos Harabeleri",
        "zh-CN": "伊利奥斯废墟",
        "zh-TW": "伊利歐斯廢墟"
    },
    "iliosWell": {
        "guid": "00000000583B",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 1.00409,
            "b": 192.85907
        },
        "en-US": "Ilios Well",
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
        "th-TH": "บ่อน้ำอิลิโอส",
        "tr-TR": "İlyos Kuyusu",
        "zh-CN": "伊利奥斯深井",
        "zh-TW": "伊利歐斯水井"
    },
    "junkenstein": {
        "guid": "000000004AF4",
        "gamemodes": [
            "junkenstein"
        ],
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
        "th-TH": "การแก้แค้นของจังค์เค็นสไตน์",
        "tr-TR": "Junkenstein'ın İntikamı",
        "zh-CN": "怪鼠复仇",
        "zh-TW": "鼠肯斯坦復仇記"
    },
    "junkertown": {
        "guid": "000000005D7B",
        "gamemodes": [
            "escort",
            "skirmish"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "en-US": "Junkertown",
        "ja-JP": "JUNKERTOWN",
        "ko-KR": "쓰레기촌",
        "ru-RU": "Джанкертаун",
        "th-TH": "จังเกอร์ทาวน์",
        "tr-TR": "Hurdaköy",
        "zh-CN": "渣客镇",
        "zh-TW": "垃圾鎮"
    },
    "kanezaka": {
        "gamemodes": [
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "guid": "000000010D1A",
        "en-US": "Kanezaka",
        "ja-JP": "KANEZAKA",
        "ko-KR": "카네자카",
        "ru-RU": "Канедзака",
        "th-TH": "คาเนะซากะ",
        "zh-CN": "铁坂",
        "zh-TW": "鐵坂"
    },
    "kingsRow": {
        "guid": "000000000133",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "night": "972777519512068153",
            "evening": "972777519512068292"
        },
        "en-US": "King's Row",
        "fr-FR": "King’s Row",
        "ja-JP": "KING'S ROW",
        "ko-KR": "왕의 길",
        "ru-RU": "Кингс Роу",
        "th-TH": "คิงสโรว์",
        "tr-TR": "Kral Yolu",
        "zh-CN": "国王大道",
        "zh-TW": "國王大道"
    },
    "kingsRowWinter": {
        "guid": "00000000547A",
        "gamemodes": [
            "hybrid",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
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
        "th-TH": "คิงสโรว์ ฤดูหนาว",
        "tr-TR": "Kral Yolu Kış",
        "zh-CN": "圣诞节国王大道",
        "zh-TW": "國王大道（冬境）"
    },
    "lijiangControlCenter": {
        "guid": "000000005724",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 0
        },
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
        "th-TH": "ศูนย์ควบคุมลี่เจียง",
        "tr-TR": "Lijiang Kontrol Merkezi",
        "zh-CN": "漓江塔控制中心",
        "zh-TW": "灕江天塔控制中心"
    },
    "lijiangControlCenterLny": {
        "guid": "000000007EFB",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 0
        },
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
        "ru-RU": "Лицзян: командный центр Лунный Новый год",
        "th-TH": "ศูนย์ควบคุมลี่เจียง วันตรุษจีน",
        "tr-TR": "Lijiang Kontrol Merkezi Ay Yeni Yılı",
        "zh-CN": "春节漓江塔控制中心",
        "zh-TW": "灕江控制中心（春節）"
    },
    "lijiangGarden": {
        "guid": "000000005623",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 0
        },
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
        "th-TH": "สวนลี่เจียง",
        "tr-TR": "Lijiang Bahçesi",
        "zh-CN": "漓江塔庭院",
        "zh-TW": "灕江花園"
    },
    "lijiangGardenLny": {
        "guid": "000000007EF9",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 0
        },
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
        "ru-RU": "Лицзян: сад Лунный Новый год",
        "th-TH": "สวนลี่เจียง วันตรุษจีน",
        "tr-TR": "Lijiang Bahçesi Ay Yeni Yılı",
        "zh-CN": "春节漓江塔庭院",
        "zh-TW": "灕江花園（春節）"
    },
    "lijiangNightMarket": {
        "guid": "000000005631",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 1
        },
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
        "th-TH": "ตลาดกลางคืนลี่เจียง",
        "tr-TR": "Lijiang Gece Pazarı",
        "zh-CN": "漓江塔夜市",
        "zh-TW": "灕江夜市"
    },
    "lijiangNightMarketLny": {
        "guid": "000000007EFA",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "x": 1
        },
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
        "ru-RU": "Лицзян: ночной рынок Лунный Новый год",
        "th-TH": "ตลาดกลางคืนลี่เจียง วันตรุษจีน",
        "tr-TR": "Lijiang Gece Pazarı Ay Yeni Yılı",
        "zh-CN": "春节漓江塔夜市",
        "zh-TW": "灕江夜市（春節）"
    },
    "lijiangTower": {
        "guid": "000000001D22",
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "night": "972777519512068153",
            "dawn": "972777519512068197"
        },
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
        "th-TH": "หอคอยลี่เจียง",
        "tr-TR": "Lijiang Kulesi",
        "zh-CN": "漓江塔",
        "zh-TW": "灕江天塔"
    },
    "lijiangTowerLny": {
        "guid": "000000005A33",
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "en-US": "Lijiang Tower Lunar New Year",
        "de-DE": "Lijiang Tower Neujahr",
        "es-ES": "Torre Lijiang Año Nuevo Lunar",
        "es-MX": "Torre Lijiang Año Nuevo Lunar",
        "fr-FR": "Tour de Lijiang nouvel an lunaire",
        "it-IT": "Torre di Lijiang Capodanno Lunare",
        "ja-JP": "LIJIANG TOWER 旧正月",
        "ko-KR": "리장 타워 설날",
        "pl-PL": "Wieża Lijiang Księżycowa",
        "pt-BR": "Torre Lijiang Ano Novo Lunar",
        "ru-RU": "Башня Лицзян Лунный Новый год",
        "th-TH": "ลี่เจียงทาวเวอร์ วันตรุษจีน",
        "tr-TR": "Lijiang Kulesi Ay Yeni Yılı",
        "zh-CN": "春节漓江塔",
        "zh-TW": "灕江天塔（春節）"
    },
    "malevento": {
        "gamemodes": [
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "guid": "000000010DFE",
        "en-US": "Malevento",
        "ja-JP": "MALEVENTO",
        "ko-KR": "말레벤토",
        "ru-RU": "Малевенто",
        "th-TH": "มาเลเวนโต",
        "zh-CN": "马莱温多",
        "zh-TW": "馬勒馮托"
    },
    "midtown": {
        "gamemodes": [
            "hybrid"
        ],
        "variants": {
            "morning": "972777519512068154",
            "night": "972777519512068153"
        },
        "guid": "00000001777A",
        "en-US": "Midtown",
        "ja-JP": "MIDTOWN",
        "ko-KR": "미드타운",
        "pl-PL": "Dzielnica Midtown",
        "ru-RU": "Мидтаун",
        "th-TH": "มิดทาวน์",
        "zh-CN": "中城",
        "zh-TW": "中城區"
    },
    "necropolis": {
        "guid": "0000000053FB",
        "gamemodes": [
            "elimination",
            "freezethawElimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068153"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Necropolis",
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
        "th-TH": "เนโครโปลิส",
        "tr-TR": "Nekropol",
        "zh-CN": "墓园",
        "zh-TW": "墓室"
    },
    "nepal": {
        "guid": "00000000138A",
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "dawn": "972777519512068292",
            "morning": "972777519512068154"
        },
        "en-US": "Nepal",
        "fr-FR": "Népal",
        "ja-JP": "NEPAL",
        "ko-KR": "네팔",
        "ru-RU": "Непал",
        "th-TH": "เนปาล",
        "zh-CN": "尼泊尔",
        "zh-TW": "尼泊爾"
    },
    "nepalSanctum": {
        "guid": "0000000056BA",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Nepal Sanctum",
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
        "th-TH": "วิหารเนปาล",
        "tr-TR": "Nepal Tapınağı",
        "zh-CN": "尼泊尔圣所",
        "zh-TW": "尼泊爾聖所"
    },
    "nepalShrine": {
        "guid": "00000000582C",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Nepal Shrine",
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
        "th-TH": "เทวสถานเนปาล",
        "tr-TR": "Nepal Mabedi",
        "zh-CN": "尼泊尔圣坛",
        "zh-TW": "尼泊爾聖壇"
    },
    "nepalVillage": {
        "guid": "000000005821",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Nepal Village",
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
        "th-TH": "หมู่บ้านเนปาล",
        "tr-TR": "Nepal Kasabası",
        "zh-CN": "尼泊尔村庄",
        "zh-TW": "尼泊爾村落"
    },
    "nepalVillageWinter": {
        "guid": "000000006E1F",
        "gamemodes": [
            "yetiHunter"
        ],
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
        "th-TH": "หมู่บ้านเนปาล ฤดูหนาว",
        "tr-TR": "Nepal Kasabası Kış",
        "zh-CN": "圣诞节尼泊尔村庄",
        "zh-TW": "尼泊爾村落（冬境）"
    },
    "newJunkCity": {
        "gamemodes": [
            "skirmish",
            "flashpoint"
        ],
        "en-US": "New Junk City"
    },
    "newQueenStreet": {
        "gamemodes": [
            "skirmish",
            "push"
        ],
        "variants": {
            "dawn": "972777519512068197",
            "morning": "972777519512068154"
        },
        "guid": "000000015B54",
        "en-US": "New Queen Street",
        "ja-JP": "NEW QUEEN STREET",
        "ko-KR": "뉴 퀸 스트리트",
        "pt-BR": "Nova Queen Street",
        "ru-RU": "Нью-Квин-стрит",
        "th-TH": "นิวควีนสตรีท",
        "zh-CN": "新皇后街",
        "zh-TW": "新皇后街"
    },
    "numbani": {
        "guid": "0000000002EA",
        "gamemodes": [
            "hybrid",
            "skirmish"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "en-US": "Numbani",
        "ja-JP": "NUMBANI",
        "ko-KR": "눔바니",
        "ru-RU": "Нумбани",
        "th-TH": "นุมบานี",
        "zh-CN": "努巴尼",
        "zh-TW": "努巴尼"
    },
    "oasis": {
        "guid": "0000000046D5",
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "night": "972777519512068153",
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "en-US": "Oasis",
        "it-IT": "Oasi",
        "ja-JP": "OASIS",
        "ko-KR": "오아시스",
        "pl-PL": "Oaza",
        "ru-RU": "Оазис",
        "th-TH": "โอเอซิส",
        "tr-TR": "Vaha",
        "zh-CN": "绿洲城",
        "zh-TW": "綠洲城"
    },
    "oasisCityCenter": {
        "guid": "000000005905",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068292"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 1.00002,
            "b": 103.99783
        },
        "en-US": "Oasis City Center",
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
        "th-TH": "ใจกลางเมืองโอเอซิส",
        "tr-TR": "Vaha Şehir Merkezi",
        "zh-CN": "绿洲城中心",
        "zh-TW": "綠洲城市都心"
    },
    "oasisGardens": {
        "guid": "000000005931",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068292"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": -1.00042,
            "b": -106.1637
        },
        "en-US": "Oasis Gardens",
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
        "th-TH": "สวนโอเอซิส",
        "tr-TR": "Vaha Bahçeleri",
        "zh-CN": "绿洲城花园",
        "zh-TW": "綠洲城公園"
    },
    "oasisUniversity": {
        "guid": "00000000593F",
        "gamemodes": [
            "elimination",
            "ctf",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068292"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "en-US": "Oasis University",
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
        "th-TH": "มหาวิทยาลัยโอเอซิส",
        "tr-TR": "Vaha Üniversitesi",
        "zh-CN": "绿洲城大学",
        "zh-TW": "綠洲城大學"
    },
    "paraiso": {
        "gamemodes": [
            "skirmish",
            "hybrid"
        ],
        "variants": {
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "guid": "000000017763",
        "en-US": "Paraíso",
        "ja-JP": "PARAISO",
        "ko-KR": "파라이수",
        "ru-RU": "Параисо",
        "th-TH": "พาไรโซ",
        "zh-CN": "帕拉伊苏",
        "zh-TW": "帕拉伊索"
    },
    "paris": {
        "guid": "00000000831E",
        "gamemodes": [
            "assault",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068292"
        },
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
    "petra": {
        "guid": "0000000081CB",
        "gamemodes": [
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "en-US": "Petra",
        "ja-JP": "PETRA",
        "ko-KR": "페트라",
        "ru-RU": "Петра",
        "th-TH": "เพทรา",
        "zh-CN": "佩特拉",
        "zh-TW": "佩特拉"
    },
    "practiceRange": {
        "guid": "000000002BA1",
        "gamemodes": [
            "practiceRange"
        ],
        "variants": {
            "default": "972777519512063901"
        },
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
        "th-TH": "สนามฝึกซ้อม",
        "tr-TR": "Poligon",
        "zh-CN": "训练靶场",
        "zh-TW": "訓練中心"
    },
    "rialto": {
        "guid": "000000006906",
        "gamemodes": [
            "escort",
            "skirmish"
        ],
        "variants": {
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "en-US": "Rialto",
        "ja-JP": "RIALTO",
        "ko-KR": "리알토",
        "ru-RU": "Риальто",
        "zh-CN": "里阿尔托",
        "zh-TW": "里亞爾托"
    },
    "route66": {
        "guid": "0000000011D3",
        "gamemodes": [
            "escort",
            "skirmish",
            "ffa",
            "tdm"
        ],
        "variants": {
            "night": "972777519512068153",
            "morning": "972777519512068154",
            "overcast": "972777519512068194"
        },
        "en-US": "Route 66",
        "es-ES": "Ruta 66",
        "es-MX": "Ruta 66",
        "it-IT": "ROUTE 66",
        "ja-JP": "ROUTE 66",
        "ko-KR": "66번 국도",
        "pl-PL": "Droga 66",
        "pt-BR": "Rota 66",
        "ru-RU": "Шоссе 66",
        "th-TH": "รูต 66",
        "zh-CN": "66号公路",
        "zh-TW": "66號公路"
    },
    "samoa": {
        "gamemodes": [
            "control",
            "skirmish"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "en-US": "Samoa"
    },
    "shambaliMonastery": {
        "gamemodes": [
            "skirmish",
            "escort"
        ],
        "variants": {
            "default": "972777519512068153"
        },
        "guid": "0000000189CE",
        "en-US": "Shambali Monastery",
        "de-DE": "Shambali-Kloster",
        "es-ES": "Monasterio Shambali",
        "es-MX": "Monasterio Shambali",
        "fr-FR": "Monastère shambali",
        "it-IT": "Monastero Shambali",
        "ja-JP": "SHAMBALI MONASTERY",
        "ko-KR": "샴발리 수도원",
        "pl-PL": "Klasztor Szambala",
        "pt-BR": "Monastério de Shambali",
        "ru-RU": "Монастырь Шамбала",
        "th-TH": "อารามแชมบาลี",
        "tr-TR": "Şambali Manastırı",
        "zh-CN": "香巴里寺院",
        "zh-TW": "香巴里僧院"
    },
    "suravasa": {
        "gamemodes": [
            "skirmish",
            "flashpoint"
        ],
        "en-US": "Suravasa"
    },
    "sydneyHarbourArena": {
        "onlyInOw1": true,
        "gamemodes": [
            "lucioball"
        ],
        "guid": "0000000112A6",
        "en-US": "Sydney Harbour Arena",
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
    "sydneyHarbourArenaClassic": {
        "onlyInOw1": true,
        "gamemodes": [
            "lucioball"
        ],
        "guid": "0000000063D5",
        "en-US": "Sydney Harbour Arena Classic",
        "de-DE": "Klassische Sydney Harbour Arena",
        "es-ES": "Sydney Harbour Arena clásico",
        "es-MX": "Arena Sydney Harbour clásica",
        "fr-FR": "Harbour Arena de Sydney classique",
        "it-IT": "Sydney Harbour Arena classica",
        "ja-JP": "SYDNEY HARBOUR ARENA CLASSIC",
        "ko-KR": "시드니 하버 아레나 클래식",
        "pl-PL": "Klasyczny Sydney Harbour Park",
        "pt-BR": "Arena Sydney Harbour Clássica",
        "ru-RU": "Классическая «Арена Сидней-Харбор»",
        "zh-CN": "悉尼海港竞技场（经典）",
        "zh-TW": "經典雪梨海港運動公園"
    },
    "templeOfAnubis": {
        "guid": "00000000AB25",
        "gamemodes": [
            "assault",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068154"
        },
        "en-US": "Temple of Anubis",
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
        "th-TH": "วิหารแห่งอนูบิส",
        "tr-TR": "Anubis Tapınağı",
        "zh-CN": "阿努比斯神殿",
        "zh-TW": "阿努比斯神廟"
    },
    "volskaya": {
        "guid": "0000000002EB",
        "gamemodes": [
            "assault",
            "skirmish",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512068292"
        },
        "en-US": "Volskaya Industries",
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
    "watchpointGibraltar": {
        "guid": "0000000002E9",
        "gamemodes": [
            "escort",
            "skirmish"
        ],
        "variants": {
            "evening": "972777519512068292",
            "morning": "972777519512068154"
        },
        "en-US": "Watchpoint: Gibraltar",
        "es-ES": "Observatorio: Gibraltar",
        "es-MX": "Observatorio: Gibraltar",
        "fr-FR": "Observatoire : Gibraltar",
        "it-IT": "Osservatorio: Gibilterra",
        "ja-JP": "WATCHPOINT: GIBRALTAR",
        "ko-KR": "감시 기지: 지브롤터",
        "pl-PL": "Posterunek: Gibraltar",
        "pt-BR": "Observatório: Gibraltar",
        "ru-RU": "Пост наблюдения: Гибралтар",
        "th-TH": "วอตช์พอยต์: ยิบรอลตา",
        "tr-TR": "Seyir Noktası: Cebelitarık",
        "zh-CN": "监测站：直布罗陀",
        "zh-TW": "捍衛者基地：直布羅陀"
    },
    "workshopChamber": {
        "gamemodes": [
            "skirmish",
            "elimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512064577"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "isWorkshopMap": true,
        "guid": "00000000FFF0",
        "en-US": "Workshop Chamber",
        "de-DE": "Workshop-Raum",
        "es-ES": "Cámara del Taller",
        "es-MX": "Cámara de Workshop",
        "fr-FR": "Salle de la Forge",
        "it-IT": "Sala del Workshop",
        "ja-JP": "WORKSHOP CHAMBER",
        "ko-KR": "워크샵 방",
        "pl-PL": "Warsztat: Komnata",
        "pt-BR": "Câmara do Workshop",
        "ru-RU": "Мастерская: комната",
        "th-TH": "ห้องทำงานเวิร์คช็อป",
        "tr-TR": "Atölye Odası",
        "zh-CN": "地图工坊室内",
        "zh-TW": "工作坊房間"
    },
    "workshopExpanse": {
        "gamemodes": [
            "skirmish",
            "elimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "isWorkshopMap": true,
        "guid": "00000000FFF2",
        "en-US": "Workshop Expanse",
        "de-DE": "Workshop-Gebiet",
        "es-ES": "Terreno del Taller",
        "es-MX": "Expansión de Workshop",
        "fr-FR": "Étendue de la Forge",
        "it-IT": "Distesa del Workshop",
        "ja-JP": "WORKSHOP EXPANSE",
        "ko-KR": "워크샵 개활지",
        "pl-PL": "Warsztat: Przestwór",
        "pt-BR": "Expansão do Workshop",
        "ru-RU": "Мастерская: поле",
        "th-TH": "การขยายเวิร์คช็อป",
        "tr-TR": "Atölye Düzlüğü",
        "zh-CN": "地图工坊空地",
        "zh-TW": "工作坊延伸區域"
    },
    "workshopExpanseNight": {
        "gamemodes": [
            "skirmish",
            "elimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512064577"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "isWorkshopMap": true,
        "guid": "000000010C6D",
        "en-US": "Workshop Expanse Night",
        "de-DE": "Workshop-Gebiet Nacht",
        "es-ES": "Terreno del Taller nocturno",
        "es-MX": "Expansión de Workshop noche",
        "fr-FR": "Étendue de la Forge Nuit",
        "it-IT": "Distesa del Workshop Notte",
        "ja-JP": "WORKSHOP EXPANSE（NIGHT）",
        "ko-KR": "워크샵 개활지 밤",
        "pl-PL": "Warsztat: Przestwór noc",
        "pt-BR": "Expansão do Workshop Noite",
        "ru-RU": "Мастерская: поле ночь",
        "th-TH": "พื้นที่กว้างของเวิร์คช็อป กลางคืน",
        "tr-TR": "Atölye Düzlüğü Gece",
        "zh-CN": "地图工坊空地（夜间）",
        "zh-TW": "工作坊延伸區域（夜晚）"
    },
    "workshopGreenScreen": {
        "gamemodes": [
            "skirmish",
            "elimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512064580"
        },
        "isWorkshopMap": true,
        "guid": "000000011F44",
        "en-US": "Workshop Green Screen",
        "de-DE": "Workshop-Greenscreen",
        "es-ES": "Pantalla verde del Taller",
        "es-MX": "Pantalla verde del Workshop",
        "fr-FR": "Écran vert de la Forge",
        "it-IT": "Schermo verde Workshop",
        "ja-JP": "WORKSHOP GREEN SCREEN",
        "ko-KR": "워크샵 그린 스크린",
        "pl-PL": "Zielony ekran Warsztatu",
        "pt-BR": "Tela Verde do Workshop",
        "ru-RU": "Мастерская: зеленый экран",
        "th-TH": "เวิร์คช็อปกรีนสกรีน",
        "tr-TR": "Atölye Yeşil Perde",
        "zh-CN": "地图工坊绿幕",
        "zh-TW": "工作坊綠幕島"
    },
    "workshopIsland": {
        "gamemodes": [
            "skirmish",
            "elimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512063901"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "isWorkshopMap": true,
        "guid": "00000000FFF1",
        "en-US": "Workshop Island",
        "de-DE": "Workshop-Insel",
        "es-ES": "Isla del Taller",
        "es-MX": "Isla de Workshop",
        "fr-FR": "Île de la Forge",
        "it-IT": "Isola del Workshop",
        "ja-JP": "WORKSHOP ISLAND",
        "ko-KR": "워크샵 섬",
        "pl-PL": "Warsztat: Wyspa",
        "pt-BR": "Ilha do Workshop",
        "ru-RU": "Мастерская: остров",
        "th-TH": "เกาะเวิร์คช็อป",
        "tr-TR": "Atölye Adası",
        "zh-CN": "地图工坊岛屿",
        "zh-TW": "工作坊島嶼"
    },
    "workshopIslandNight": {
        "gamemodes": [
            "skirmish",
            "elimination",
            "ffa",
            "bountyHunter",
            "tdm"
        ],
        "variants": {
            "default": "972777519512064579"
        },
        "isSymmetrical": true,
        "symmetryAxis": {
            "a": 0,
            "b": 0
        },
        "isWorkshopMap": true,
        "guid": "000000010C71",
        "en-US": "Workshop Island Night",
        "de-DE": "Workshop-Insel Nacht",
        "es-ES": "Isla del Taller nocturno",
        "es-MX": "Isla de Workshop noche",
        "fr-FR": "Île de la Forge Nuit",
        "it-IT": "Isola del Workshop Notte",
        "ja-JP": "WORKSHOP ISLAND（NIGHT）",
        "ko-KR": "워크샵 섬 밤",
        "pl-PL": "Warsztat: Wyspa noc",
        "pt-BR": "Ilha do Workshop Noite",
        "ru-RU": "Мастерская: остров ночь",
        "th-TH": "เกาะเวิร์คช็อป กลางคืน",
        "tr-TR": "Atölye Adası Gece",
        "zh-CN": "地图工坊岛屿（夜间）",
        "zh-TW": "工作坊島嶼（夜晚）"
    }
}
//end-json
