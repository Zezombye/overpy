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

const heroKw = 
//begin-json
{
    "ana": {
        "guid": "0000000029EC",
        "en-US": "Ana",
        "ja-JP": "アナ",
        "ko-KR": "아나",
        "ru-RU": "Ана",
        "zh-CN": "安娜",
        "zh-TW": "安娜",
        "ability1": {
            "guid": "0000000046AE"
        },
        "ability2": {
            "guid": "0000000046B2"
        },
        "ultimate": {
            "guid": "0000000046BA"
        }
    },
    "ashe": {
        "guid": "00000000832E",
        "en-US": "Ashe",
        "ja-JP": "アッシュ",
        "ko-KR": "애쉬",
        "ru-RU": "Эш",
        "zh-CN": "艾什",
        "zh-TW": "艾西",
        "ability1": {
            "guid": "000000008A5C"
        },
        "ability2": {
            "guid": "000000008A5D"
        },
        "ultimate": {
            "guid": "000000008A5B"
        }
    },
    "baptiste": {
        "guid": "000000009411",
        "en-US": "Baptiste",
        "ja-JP": "バティスト",
        "ko-KR": "바티스트",
        "ru-RU": "Батист",
        "zh-CN": "巴蒂斯特",
        "zh-TW": "巴帝斯特",
        "ability1": {
            "guid": "00000000A7AB"
        },
        "ability2": {
            "guid": "00000000A44B"
        },
        "ultimate": {
            "guid": "00000000A44C"
        }
    },
    "bastion": {
        "guid": "000000000023",
        "en-US": "Bastion",
        "ja-JP": "バスティオン",
        "ko-KR": "바스티온",
        "ru-RU": "Бастион",
        "zh-CN": "堡垒",
        "zh-TW": "壁壘機兵",
        "secondaryFire": {
            "guid": "0000000003C5"
        },
        "ability1": {
            "guid": "0000000003C3"
        },
        "ultimate": {
            "guid": "0000000003C1"
        }
    },
    "brigitte": {
        "guid": "000000005D06",
        "en-US": "Brigitte",
        "ja-JP": "ブリギッテ",
        "ko-KR": "브리기테",
        "ru-RU": "Бригитта",
        "zh-CN": "布丽吉塔",
        "zh-TW": "碧姬",
        "secondaryFire": {
            "guid": "00000000802E"
        },
        "ability1": {
            "guid": "0000000076BE"
        },
        "ability2": {
            "guid": "0000000076C2"
        },
        "ultimate": {
            "guid": "0000000076C6"
        }
    },
    "dva": {
        "guid": "0000000002E2",
        "en-US": "D.Va",
        "es-MX": "D.VA",
        "it-IT": "D.VA",
        "secondaryFire": {
            "guid": "000000001706"
        },
        "ability1": {
            "guid": "000000001704"
        },
        "ability2": {
            "guid": "000000006E30"
        },
        "ultimate": {
            "guid": "000000001708"
        }
    },
    "doomfist": {
        "guid": "0000000015E5",
        "en-US": "Doomfist",
        "ja-JP": "ドゥームフィスト",
        "ko-KR": "둠피스트",
        "pl-PL": "Pięść Zagłady",
        "ru-RU": "Кулак Смерти",
        "zh-CN": "末日铁拳",
        "zh-TW": "毀滅拳王",
        "secondaryFire": {
            "guid": "0000000056D5"
        },
        "ability1": {
            "guid": "0000000056D0"
        },
        "ability2": {
            "guid": "000000005B4A"
        },
        "ultimate": {
            "guid": "0000000056D3"
        }
    },
    "genji": {
        "guid": "000000000029",
        "en-US": "Genji",
        "ja-JP": "ゲンジ",
        "ko-KR": "겐지",
        "ru-RU": "Гэндзи",
        "zh-CN": "源氏",
        "zh-TW": "源氏",
        "ability1": {
            "guid": "000000001793"
        },
        "ability2": {
            "guid": "000000001791"
        },
        "ultimate": {
            "guid": "00000000178F"
        }
    },
    "hanzo": {
        "guid": "000000000021",
        "en-US": "Hanzo",
        "ja-JP": "ハンゾー",
        "ko-KR": "한조",
        "ru-RU": "Хандзо",
        "zh-CN": "半藏",
        "zh-TW": "半藏",
        "ability1": {
            "guid": "0000000003A4"
        },
        "ability2": {
            "guid": "000000008189"
        },
        "ultimate": {
            "guid": "0000000003A7"
        }
    },
    "junkrat": {
        "guid": "0000000001AA",
        "en-US": "Junkrat",
        "fr-FR": "Chacal",
        "ja-JP": "ジャンクラット",
        "ko-KR": "정크랫",
        "pl-PL": "Złomiarz",
        "ru-RU": "Крысавчик",
        "zh-CN": "狂鼠",
        "zh-TW": "炸彈鼠",
        "ability1": {
            "guid": "000000001495"
        },
        "ability2": {
            "guid": "00000000149B"
        },
        "ultimate": {
            "guid": "000000001499"
        }
    },
    "lucio": {
        "guid": "0000000002DA",
        "en-US": "Lúcio",
        "ja-JP": "ルシオ",
        "ko-KR": "루시우",
        "ru-RU": "Лусио",
        "zh-CN": "卢西奥",
        "zh-TW": "路西歐",
        "secondaryFire": {
            "guid": "000000000CFD"
        },
        "ability1": {
            "guid": "000000000D0D"
        },
        "ability2": {
            "guid": "000000000D01"
        },
        "ultimate": {
            "guid": "000000000D03"
        }
    },
    "mccree": {
        "guid": "00000000005C",
        "en-US": "McCree",
        "ja-JP": "マクリー",
        "ko-KR": "맥크리",
        "ru-RU": "Маккри",
        "zh-CN": "麦克雷",
        "zh-TW": "麥卡利",
        "ability1": {
            "guid": "00000000049E"
        },
        "ability2": {
            "guid": "0000000004A0"
        },
        "ultimate": {
            "guid": "0000000004A2"
        }
    },
    "mei": {
        "guid": "00000000083A",
        "en-US": "Mei",
        "ja-JP": "メイ",
        "ko-KR": "메이",
        "ru-RU": "Мэй",
        "zh-CN": "美",
        "zh-TW": "小美",
        "ability1": {
            "guid": "00000000178B"
        },
        "ability2": {
            "guid": "00000000178D"
        },
        "ultimate": {
            "guid": "000000001789"
        }
    },
    "mercy": {
        "guid": "000000000020",
        "en-US": "Mercy",
        "fr-FR": "Ange",
        "ja-JP": "マーシー",
        "ko-KR": "메르시",
        "pl-PL": "Łaska",
        "ru-RU": "Ангел",
        "zh-CN": "天使",
        "zh-TW": "慈悲",
        "ability1": {
            "guid": "000000000410"
        },
        "ability2": {
            "guid": "00000000040E"
        },
        "ultimate": {
            "guid": "000000006DAA"
        }
    },
    "moira": {
        "guid": "000000006339",
        "en-US": "Moira",
        "ja-JP": "モイラ",
        "ko-KR": "모이라",
        "ru-RU": "Мойра",
        "zh-CN": "莫伊拉",
        "zh-TW": "莫伊拉",
        "ability1": {
            "guid": "000000006629"
        },
        "ability2": {
            "guid": "000000006E54"
        },
        "ultimate": {
            "guid": "000000006630"
        }
    },
    "orisa": {
        "guid": "000000002D21",
        "en-US": "Orisa",
        "ja-JP": "オリーサ",
        "ko-KR": "오리사",
        "ru-RU": "Ориса",
        "zh-CN": "奥丽莎",
        "zh-TW": "歐瑞莎",
        "secondaryFire": {
            "guid": "000000004ED5"
        },
        "ability1": {
            "guid": "000000004ED3"
        },
        "ability2": {
            "guid": "000000004ED7"
        },
        "ultimate": {
            "guid": "000000004EDB"
        }
    },
    "pharah": {
        "guid": "000000000027",
        "en-US": "Pharah",
        "ja-JP": "ファラ",
        "ko-KR": "파라",
        "pl-PL": "Fara",
        "ru-RU": "Фарра",
        "zh-CN": "法老之鹰",
        "zh-TW": "法拉",
        "secondaryFire": {
            "guid": "0000000003B1"
        },
        "ability1": {
            "guid": "0000000003AF"
        },
        "ability2": {
            "guid": "0000000003B3"
        },
        "ultimate": {
            "guid": "0000000003AD"
        }
    },
    "reaper": {
        "guid": "000000000026",
        "en-US": "Reaper",
        "fr-FR": "Faucheur",
        "ja-JP": "リーパー",
        "ko-KR": "리퍼",
        "pl-PL": "Żniwiarz",
        "ru-RU": "Жнец",
        "zh-CN": "死神",
        "zh-TW": "死神",
        "ability1": {
            "guid": "0000000003BB"
        },
        "ability2": {
            "guid": "0000000003BF"
        },
        "ultimate": {
            "guid": "0000000003B7"
        }
    },
    "reinhardt": {
        "guid": "000000000025",
        "en-US": "Reinhardt",
        "ja-JP": "ラインハルト",
        "ko-KR": "라인하르트",
        "ru-RU": "Райнхардт",
        "zh-CN": "莱因哈特",
        "zh-TW": "萊因哈特",
        "secondaryFire": {
            "guid": "0000000003EC"
        },
        "ability1": {
            "guid": "0000000003E8"
        },
        "ability2": {
            "guid": "0000000003EA"
        },
        "ultimate": {
            "guid": "0000000003E6"
        }
    },
    "roadhog": {
        "guid": "000000000054",
        "en-US": "Roadhog",
        "fr-FR": "Chopper",
        "ja-JP": "ロードホッグ",
        "ko-KR": "로드호그",
        "pl-PL": "Wieprzu",
        "ru-RU": "Турбосвин",
        "zh-CN": "路霸",
        "zh-TW": "攔路豬",
        "ability1": {
            "guid": "00000000079D"
        },
        "ability2": {
            "guid": "00000000079B"
        },
        "ultimate": {
            "guid": "000000000795"
        }
    },
    "sigma": {
        "guid": "000000009E9E",
        "en-US": "Sigma",
        "ja-JP": "シグマ",
        "ko-KR": "시그마",
        "ru-RU": "Сигма",
        "zh-CN": "西格玛",
        "zh-TW": "席格馬",
        "secondaryFire": {
            "guid": "00000000B350"
        },
        "ability1": {
            "guid": "00000000B347"
        },
        "ability2": {
            "guid": "00000000B345"
        },
        "ultimate": {
            "guid": "00000000B352"
        }
    },
    "soldier": {
        "guid": "000000000224",
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
        "zh-TW": "士兵76",
        "secondaryFire": {
            "guid": "000000000C83"
        },
        "ability1": {
            "guid": "000000000C85"
        },
        "ability2": {
            "guid": "000000000C87"
        },
        "ultimate": {
            "guid": "000000000C89"
        }
    },
    "sombra": {
        "guid": "0000000046F9",
        "en-US": "Sombra",
        "ja-JP": "ソンブラ",
        "ko-KR": "솜브라",
        "ru-RU": "Сомбра",
        "zh-CN": "黑影",
        "zh-TW": "駭影",
        "secondaryFire": {
            "guid": "000000004711"
        },
        "ability1": {
            "guid": "000000004712"
        },
        "ability2": {
            "guid": "000000004700"
        },
        "ultimate": {
            "guid": "00000000470C"
        }
    },
    "symmetra": {
        "guid": "00000000002A",
        "en-US": "Symmetra",
        "ja-JP": "シンメトラ",
        "ko-KR": "시메트라",
        "ru-RU": "Симметра",
        "zh-CN": "秩序之光",
        "zh-TW": "辛梅塔",
        "ability1": {
            "guid": "000000000406"
        },
        "ability2": {
            "guid": "000000000404"
        },
        "ultimate": {
            "guid": "000000005462"
        }
    },
    "torbjorn": {
        "guid": "000000000024",
        "en-US": "Torbjörn",
        "ja-JP": "トールビョーン",
        "ko-KR": "토르비욘",
        "ru-RU": "Торбьорн",
        "zh-CN": "托比昂",
        "zh-TW": "托比昂",
        "ability1": {
            "guid": "000000009295"
        },
        "ability2": {
            "guid": "000000009297"
        },
        "ultimate": {
            "guid": "000000009299"
        }
    },
    "tracer": {
        "guid": "00000000002B",
        "en-US": "Tracer",
        "ja-JP": "トレーサー",
        "ko-KR": "트레이서",
        "pl-PL": "Smuga",
        "ru-RU": "Трейсер",
        "zh-CN": "猎空",
        "zh-TW": "閃光",
        "ability1": {
            "guid": "000000000393"
        },
        "ability2": {
            "guid": "000000000396"
        },
        "ultimate": {
            "guid": "000000000398"
        }
    },
    "widowmaker": {
        "guid": "00000000002C",
        "en-US": "Widowmaker",
        "fr-FR": "Fatale",
        "ja-JP": "ウィドウメイカー",
        "ko-KR": "위도우메이커",
        "pl-PL": "Trupia Wdowa",
        "ru-RU": "Роковая Вдова",
        "zh-CN": "黑百合",
        "zh-TW": "奪命女",
        "ability1": {
            "guid": "0000000003E0"
        },
        "ability2": {
            "guid": "0000000003DE"
        },
        "ultimate": {
            "guid": "0000000003DD"
        }
    },
    "winston": {
        "guid": "000000000028",
        "en-US": "Winston",
        "ja-JP": "ウィンストン",
        "ko-KR": "윈스턴",
        "ru-RU": "Уинстон",
        "zh-CN": "温斯顿",
        "zh-TW": "溫斯頓",
        "ability1": {
            "guid": "0000000003F2"
        },
        "ability2": {
            "guid": "0000000003F4"
        },
        "ultimate": {
            "guid": "0000000003F0"
        }
    },
    "hammond": {
        "guid": "000000007269",
        "en-US": "Wrecking Ball",
        "fr-FR": "Bouldozer",
        "ja-JP": "レッキング・ボール",
        "ko-KR": "레킹볼",
        "pl-PL": "Burzyciel",
        "ru-RU": "Таран",
        "zh-CN": "破坏球",
        "zh-TW": "火爆鋼球",
        "secondaryFire": {
            "guid": "0000000082A6"
        },
        "ability1": {
            "guid": "0000000072E4"
        },
        "ability2": {
            "guid": "000000008B75"
        },
        "ultimate": {
            "guid": "00000000866F"
        }
    },
    "zarya": {
        "guid": "0000000001EB",
        "en-US": "Zarya",
        "ja-JP": "ザリア",
        "ko-KR": "자리야",
        "pl-PL": "Zaria",
        "ru-RU": "Заря",
        "zh-CN": "查莉娅",
        "zh-TW": "札莉雅",
        "ability1": {
            "guid": "000000000492"
        },
        "ability2": {
            "guid": "000000000494"
        },
        "ultimate": {
            "guid": "000000000496"
        }
    },
    "zenyatta": {
        "guid": "000000000022",
        "en-US": "Zenyatta",
        "ja-JP": "ゼニヤッタ",
        "ko-KR": "젠야타",
        "ru-RU": "Дзенъятта",
        "zh-CN": "禅雅塔",
        "zh-TW": "禪亞塔",
        "ability1": {
            "guid": "0000000003FC"
        },
        "ability2": {
            "guid": "0000000003FE"
        },
        "ultimate": {
            "guid": "0000000003F9"
        }
    }
}
//end-json
