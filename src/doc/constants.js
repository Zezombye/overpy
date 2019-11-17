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













