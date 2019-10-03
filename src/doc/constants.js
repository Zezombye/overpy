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

var constantValues = {
    "TRANSFORMATION": {
        "opy": "Transform",
        "values": [
            {
                "opy": "Transform.ROTATION",
                "en": "Rotation"
            },
            {
                "opy": "Transform.ROTATION_AND_TRANSLATION",
                "en": "RotationAndTranslation",
                "fr": "RotationEtTranslation"
            }
        ]
    },
    "INVISIBLE TO": {
        "opy": "Invis",
        "values": [
            {
                "opy": "Invis.ALL",
                "en": "All",
                "fr": "Tous"
            },
            {
                "opy": "Invis.ENEMIES",
                "en": "Enemies",
                "fr": "Ennemis"
            },
            {
                "opy": "Invis.NONE",
                "en": "None",
                "fr": "Personne"
            }
        ]
    },
    "COLOR": {
        "opy": "Color",
        "values": [
            {
                "opy": "Color.AQUA",
                "en": "Aqua",
                "fr": "Cyan"
            },
            {
                "opy": "Color.BLUE",
                "en": "Blue",
                "fr": "Bleu"
            },
            {
                "opy": "Color.GREEN",
                "en": "Green",
                "fr": "Vert"
            },
            {
                "opy": "Color.LIME_GREEN",
                "en": "Limegreen",
                "fr": "CitronVert"
            },
            {
                "opy": "Color.ORANGE",
                "en": "Orange",
                "fr": "Orange"
            },
            {
                "opy": "Color.PURPLE",
                "en": "Purple",
                "fr": "Violet"
            },
            {
                "opy": "Color.RED",
                "en": "Red",
                "fr": "Rouge"
            },
            {
                "opy": "Color.SKY_BLUE",
                "en": "Skyblue",
                "fr": "BleuCiel"
            },
            {
                "opy": "Color.TEAM_1",
                "en": "Team1",
                "fr": "Équipe1"
            },
            {
                "opy": "Color.TEAM_2",
                "en": "Team2",
                "fr": "Équipe2"
            },
            {
                "opy": "Color.TURQUOISE",
                "en": "Turquoise",
                "fr": "Turquoise"
            },
            {
                "opy": "Color.WHITE",
                "en": "White",
                "fr": "Blanc"
            },
            {
                "opy": "Color.YELLOW",
                "en": "Yellow",
                "fr": "Jaune"
            }
        ]
    },
    "BUTTON": {
        "opy": "Button",
        "values": [
            {
                "opy": "Button.ABILITY_1",
                "en": "Ability1",
                "fr": "Capacité1"
            },
            {
                "opy": "Button.ABILITY_2",
                "en": "Ability2",
                "fr": "Capacité2"
            },
            {
                "opy": "Button.CROUCH",
                "en": "Crouch",
                "fr": "S’accroupir"
            },
            {
                "opy": "Button.INTERACT",
                "en": "Interact",
                "fr": "Interagir"
            },
            {
                "opy": "Button.JUMP",
                "en": "Jump",
                "fr": "Sauter"
            },
            {
                "opy": "Button.PRIMARY_FIRE",
                "en": "PrimaryFire",
                "fr": "TirPrincipal"
            },
            {
                "opy": "Button.SECONDARY_FIRE",
                "en": "SecondaryFire",
                "fr": "TirSecondaire"
            },
            {
                "opy": "Button.ULTIMATE",
                "en": "Ultimate",
                "fr": "CapacitéUltime"
            }
        ]
    },
    "OPERATION": {
        "opy": "Operation",
        "values": [
            {
                "opy": "_add",
                "en": "Add",
                "fr": "Addition"
            },
            {
                "opy": "_appendToArray",
                "en": "AppendToArray",
                "fr": "AjouterAuTableau"
            },
            {
                "opy": "_divide",
                "en": "Divide",
                "fr": "Division"
            },
            {
                "opy": "_max",
                "en": "Max",
                "fr": "Maximum"
            },
            {
                "opy": "_min",
                "en": "Min",
                "fr": "Minimum"
            },
            {
                "opy": "_modulo",
                "en": "Modulo",
                "fr": "Modulo"
            },
            {
                "opy": "_multiply",
                "en": "Multiply",
                "fr": "Multiplication"
            },
            {
                "opy": "_raiseToPower",
                "en": "RaiseToPower",
                "fr": "ÉlévationàUnePuissance"
            },
            {
                "opy": "_removeFromArrayByIndex",
                "en": "RemoveFromArrayByIndex",
                "fr": "SupprimerDuTableauParIndex"
            },
            {
                "opy": "_removeFromArrayByValue",
                "en": "RemoveFromArrayByValue",
                "fr": "SupprimerDuTableauParValeur"
            },
            {
                "opy": "_subtract",
                "en": "Subtract",
                "fr": "Soustraction"
            }
        ]
    },
    "TEAM CONSTANT": {
        "opy": "Team",
        "values": [
            {
                "opy": "Team.ALL",
                "en": "AllTeams",
                "fr": "ToutesLeséquipes"
            },
            {
                "opy": "Team.1",
                "en": "Team1",
                "fr": "Équipe1"
            },
            {
                "opy": "Team.2",
                "en": "Team2",
                "fr": "Équipe2"
            }
        ]
    },
    "HERO CONSTANT": {
        "opy": "Hero",
        "values": [
            {
                "opy": "Hero.ANA",
                "en": "Ana",
                "fr": "Ana",
                "kr": "아나"
            },
            {
                "opy": "Hero.ASHE",
                "en": "Ashe",
                "fr": "Ashe",
                "kr": "애쉬"
            },
            {
                "opy": "Hero.BAPTISTE",
                "en": "Baptiste",
                "fr": "Baptiste",
                "kr": "바티스트"
            },
            {
                "opy": "Hero.BASTION",
                "en": "Bastion",
                "fr": "Bastion",
                "kr": "바스티온"
            },
            {
                "opy": "Hero.BRIGITTE",
                "en": "Brigitte",
                "fr": "Brigitte",
                "kr": "브리기테"
            },
            {
                "opy": "Hero.DVA",
                "en": "D.va",
                "fr": "D.va",
                "kr": "D.Va"
            },
            {
                "opy": "Hero.DOOMFIST",
                "en": "Doomfist",
                "fr": "Doomfist",
                "kr": "둠피스트"
            },
            {
                "opy": "Hero.GENJI",
                "en": "Genji",
                "fr": "Genji",
                "kr": "겐지"
            },
            {
                "opy": "Hero.HANZO",
                "en": "Hanzo",
                "fr": "Hanzo",
                "kr": "한조"
            },
            {
                "opy": "Hero.JUNKRAT",
                "en": "Junkrat",
                "fr": "Chacal",
                "kr": "정크랫"
            },
            {
                "opy": "Hero.LUCIO",
                "en": "Lúcio",
                "fr": "Lúcio",
                "kr": "루시우"
            },
            {
                "opy": "Hero.MCCREE",
                "en": "Mccree",
                "fr": "Mccree",
                "kr": "맥크리"
            },
            {
                "opy": "Hero.MEI",
                "en": "Mei",
                "fr": "Mei",
                "kr": "메이"
            },
            {
                "opy": "Hero.MERCY",
                "en": "Mercy",
                "fr": "Ange",
                "kr": "메르시"
            },
            {
                "opy": "Hero.MOIRA",
                "en": "Moira",
                "fr": "Moira",
                "kr": "모이라"
            },
            {
                "opy": "Hero.ORISA",
                "en": "Orisa",
                "fr": "Orisa",
                "kr": "오리사"
            },
            {
                "opy": "Hero.PHARAH",
                "en": "Pharah",
                "fr": "Pharah",
                "kr": "파라"
            },
            {
                "opy": "Hero.REAPER",
                "en": "Reaper",
                "fr": "Faucheur",
                "kr": "리퍼"
            },
            {
                "opy": "Hero.REINHARDT",
                "en": "Reinhardt",
                "fr": "Reinhardt",
                "kr": "라인하르트"
            },
            {
                "opy": "Hero.ROADHOG",
                "en": "Roadhog",
                "fr": "Chopper",
                "kr": "로드호그"
            },
            {
                "opy": "Hero.SIGMA",
                "en": "Sigma",
                "fr": "Sigma",
                "kr": "시그마"
            },
            {
                "opy": "Hero.SOLDIER",
                "en": "Soldier:76",
                "fr": "Soldat:76",
                "kr": "솔저: 76"
            },
            {
                "opy": "Hero.SOMBRA",
                "en": "Sombra",
                "fr": "Sombra",
                "kr": "솜브라"
            },
            {
                "opy": "Hero.SYMMETRA",
                "en": "Symmetra",
                "fr": "Symmetra",
                "kr": "시메트라"
            },
            {
                "opy": "Hero.TORBJORN",
                "en": "Torbjörn",
                "fr": "Torbjörn",
                "kr": "토르비욘"
            },
            {
                "opy": "Hero.TRACER",
                "en": "Tracer",
                "fr": "Tracer",
                "kr": "트레이서"
            },
            {
                "opy": "Hero.WIDOWMAKER",
                "en": "Widowmaker",
                "fr": "Fatale",
                "kr": "위도우메이커"
            },
            {
                "opy": "Hero.WINSTON",
                "en": "Winston",
                "fr": "Winston",
                "kr": "윈스턴"
            },
            {
                "opy": "Hero.HAMMOND",
                "en": "WreckingBall",
                "fr": "Bouldozer",
                "kr": "레킹볼"
            },
            {
                "opy": "Hero.ZARYA",
                "en": "Zarya",
                "fr": "Zarya",
                "kr": "자리야"
            },
            {
                "opy": "Hero.ZENYATTA",
                "en": "Zenyatta",
                "fr": "Zenyatta",
                "kr": "젠야타"
            }
        ]
    },
    "VARIABLE": {
        "opy": "Variable",
        "values": [
            {
                "opy": "A",
                "en": "A"
            },
            {
                "opy": "B",
                "en": "B"
            },
            {
                "opy": "C",
                "en": "C"
            },
            {
                "opy": "D",
                "en": "D"
            },
            {
                "opy": "E",
                "en": "E"
            },
            {
                "opy": "F",
                "en": "F"
            },
            {
                "opy": "G",
                "en": "G"
            },
            {
                "opy": "H",
                "en": "H"
            },
            {
                "opy": "I",
                "en": "I"
            },
            {
                "opy": "J",
                "en": "J"
            },
            {
                "opy": "K",
                "en": "K"
            },
            {
                "opy": "L",
                "en": "L"
            },
            {
                "opy": "M",
                "en": "M"
            },
            {
                "opy": "N",
                "en": "N"
            },
            {
                "opy": "O",
                "en": "O"
            },
            {
                "opy": "P",
                "en": "P"
            },
            {
                "opy": "Q",
                "en": "Q"
            },
            {
                "opy": "R",
                "en": "R"
            },
            {
                "opy": "S",
                "en": "S"
            },
            {
                "opy": "T",
                "en": "T"
            },
            {
                "opy": "U",
                "en": "U"
            },
            {
                "opy": "V",
                "en": "V"
            },
            {
                "opy": "W",
                "en": "W"
            },
            {
                "opy": "X",
                "en": "X"
            },
            {
                "opy": "Y",
                "en": "Y"
            },
            {
                "opy": "Z",
                "en": "Z"
            }
        ]
    },
    "PLAY EFFECT": {
        "opy": "DynamicEffect",
        "values": [
            {
                "opy": "DynamicEffect.BAD_EXPLOSION",
                "en": "BadExplosion",
                "fr": "MauvaiseExplosion"
            },
            {
                "opy": "DynamicEffect.BAD_PICKUP_EFFECT",
                "en": "BadPickupEffect",
                "fr": "MauvaisEffetDeRamassage"
            },
            {
                "opy": "DynamicEffect.BUFF_EXPLOSION_SOUND",
                "en": "BuffExplosionSound",
                "fr": "SonD’explosionD’amélioration"
            },
            {
                "opy": "DynamicEffect.BUFF_IMPACT_SOUND",
                "en": "BuffImpactSound",
                "fr": "SonD’impactD’amélioration"
            },
            {
                "opy": "DynamicEffect.DEBUFF_IMPACT_SOUND",
                "en": "DebuffImpactSound",
                "fr": "SonD’impactD’affaiblissement"
            },
            {
                "opy": "DynamicEffect.EXPLOSION_SOUND",
                "en": "ExplosionSound",
                "fr": "SonDeL’explosion"
            },
            {
                "opy": "DynamicEffect.GOOD_EXPLOSION",
                "en": "GoodExplosion",
                "fr": "BonneExplosion"
            },
            {
                "opy": "DynamicEffect.GOOD_PICKUP_EFFECT",
                "en": "GoodPickupEffect",
                "fr": "BonEffetDeRamassage"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION",
                "en": "RingExplosion",
                "fr": "ExplosionConcentrique"
            },
            {
                "opy": "DynamicEffect.RING_EXPLOSION_SOUND",
                "en": "RingExplosionSound",
                "fr": "SonD’explosionConcentrique"
            }
        ]
    },
    "CREATE EFFECT": {
        "opy": "Effect",
        "values": [
            {
                "opy": "Effect.BAD_AURA",
                "en": "BadAura",
                "fr": "MauvaiseAura"
            },
            {
                "opy": "Effect.BAD_AURA_SOUND",
                "en": "BadAuraSound",
                "fr": "SonDeMauvaiseAura"
            },
            {
                "opy": "Effect.BEACON_SOUND",
                "en": "BeaconSound",
                "fr": "SonDeBalise"
            },
            {
                "opy": "Effect.CLOUD",
                "en": "Cloud",
                "fr": "Nuage"
            },
            {
                "opy": "Effect.DECAL_SOUND",
                "en": "DecalSound",
                "fr": "SonDeDécal"
            },
            {
                "opy": "Effect.ENERGY_SOUND",
                "en": "EnergySound",
                "fr": "SonDeL’énergie"
            },
            {
                "opy": "Effect.GOOD_AURA",
                "en": "GoodAura",
                "fr": "BonneAura"
            },
            {
                "opy": "Effect.GOOD_AURA_SOUND",
                "en": "GoodAuraSound",
                "fr": "SonDeBonneAura"
            },
            {
                "opy": "Effect.LIGHT_SHAFT",
                "en": "LightShaft",
                "fr": "PuitsDeLumière"
            },
            {
                "opy": "Effect.ORB",
                "en": "Orb",
                "fr": "Orbe"
            },
            {
                "opy": "Effect.PICKUP_SOUND",
                "en": "Pick-upSound",
                "fr": "SonDeRamassage"
            },
            {
                "opy": "Effect.RING",
                "en": "Ring",
                "fr": "Anneau"
            },
            {
                "opy": "Effect.SMOKE_SOUND",
                "en": "SmokeSound",
                "fr": "SonDeLaFumée"
            },
            {
                "opy": "Effect.SPARKLES",
                "en": "Sparkles",
                "fr": "Etincelles"
            },
            {
                "opy": "Effect.SPARKLES_SOUND",
                "en": "SparklesSound",
                "fr": "SonDesétincelles"
            },
            {
                "opy": "Effect.SPHERE",
                "en": "Sphere",
                "fr": "Sphère"
            }
        ]
    },
    "COMMUNICATE": {
        "opy": "Comms",
        "values": [
            {
                "opy": "Comms.ACKNOWLEDGE",
                "en": "Acknowledge",
                "fr": "BienReçu"
            },
            {
                "opy": "Comms.EMOTE_DOWN",
                "en": "EmoteDown",
                "fr": "EmoteBas"
            },
            {
                "opy": "Comms.EMOTE_LEFT",
                "en": "EmoteLeft",
                "fr": "EmoteGauche"
            },
            {
                "opy": "Comms.EMOTE_RIGHT",
                "en": "EmoteRight",
                "fr": "EmoteDroite"
            },
            {
                "opy": "Comms.EMOTE_UP",
                "en": "EmoteUp",
                "fr": "EmoteHaut"
            },
            {
                "opy": "Comms.GROUP_UP",
                "en": "GroupUp",
                "fr": "Regroupement"
            },
            {
                "opy": "Comms.HELLO",
                "en": "Hello",
                "fr": "Bonjour"
            },
            {
                "opy": "Comms.NEED_HEALING",
                "en": "NeedHealing",
                "fr": "BesoinDeSoins"
            },
            {
                "opy": "Comms.THANKS",
                "en": "Thanks",
                "fr": "Merci"
            },
            {
                "opy": "Comms.ULTIMATE_STATUS",
                "en": "UltimateStatus",
                "fr": "StatutDeL’ulti"
            },
            {
                "opy": "Comms.VOICE_LINE_DOWN",
                "en": "VoiceLineDown",
                "fr": "RépliqueBas"
            },
            {
                "opy": "Comms.VOICE_LINE_LEFT",
                "en": "VoiceLineLeft",
                "fr": "RépliqueGauche"
            },
            {
                "opy": "Comms.VOICE_LINE_RIGHT",
                "en": "VoiceLineRight",
                "fr": "RépliqueDroite"
            },
            {
                "opy": "Comms.VOICE_LINE_UP",
                "en": "VoiceLineUp",
                "fr": "RépliqueHaut"
            }
        ]
    },
    "ICON": {
        "opy": "Icon",
        "values": [
            {
                "opy": "Icon.ARROW_DOWN",
                "en": "Arrow:Down",
                "fr": "FlècheBas",
                "description": "![](https://i.imgur.com/hych4AE.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.ARROW_LEFT",
                "en": "Arrow:Left",
                "fr": "FlècheGauche",
                "description": "![](https://i.imgur.com/jgpW0Nb.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.ARROW_RIGHT",
                "en": "Arrow:Right",
                "fr": "FlècheDroite",
                "description": "![](https://i.imgur.com/0BttENZ.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.ARROW_UP",
                "en": "Arrow:Up",
                "fr": "FlècheHaut",
                "description": "![](https://i.imgur.com/Pr86Pcf.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.ASTERISK",
                "en": "Asterisk",
                "fr": "Astérisque",
                "description": "![](https://i.imgur.com/XTvINuC.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.BOLT",
                "en": "Bolt",
                "fr": "Boulon",
                "description": "![](https://i.imgur.com/ekbDxsT.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.CHECKMARK",
                "en": "Checkmark",
                "fr": "PointD’exclamation",
                "description": "![](https://i.imgur.com/B7V240H.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.CIRCLE",
                "en": "Circle",
                "fr": "Cercle",
                "description": "![](https://i.imgur.com/6lNvrqD.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.CLUB",
                "en": "Club",
                "fr": "Trèfle",
                "description": "![](https://i.imgur.com/HYWor8w.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.DIAMOND",
                "en": "Diamond",
                "fr": "Carreau",
                "description": "![](https://i.imgur.com/5aLqsHf.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.DIZZY",
                "en": "Dizzy",
                "fr": "Étourdi",
                "description": "![](https://i.imgur.com/P1Qi43N.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.EXCLAMATION_MARK",
                "en": "ExclamationMark",
                "fr": "PointD’exclamation",
                "description": "![](https://i.imgur.com/1rBcHfz.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.EYE",
                "en": "Eye",
                "fr": "Œil",
                "description": "![](https://i.imgur.com/pVMPtoH.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.FIRE",
                "en": "Fire",
                "fr": "Flamme",
                "description": "![](https://i.imgur.com/m3As7B0.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.FLAG",
                "en": "Flag",
                "fr": "Drapeau",
                "description": "![](https://i.imgur.com/v30lUgy.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.HALO",
                "en": "Halo",
                "fr": "Halo",
                "description": "![](https://i.imgur.com/FWR9HAQ.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.HAPPY",
                "en": "Happy",
                "fr": "SmileyContent",
                "description": "![](https://i.imgur.com/CNwSwb1.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.HEART",
                "en": "Heart",
                "fr": "Cœur",
                "description": "![](https://i.imgur.com/1KPOyZa.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.MOON",
                "en": "Moon",
                "fr": "Lune",
                "description": "![](https://i.imgur.com/2uxcKF0.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.NO",
                "en": "No",
                "fr": "Interdit",
                "description": "![](https://i.imgur.com/TZ4zFso.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.PLUS",
                "en": "Plus",
                "fr": "Plus",
                "description": "![](https://i.imgur.com/OLARJ80.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.POISON",
                "en": "Poison",
                "fr": "Poison",
                "description": "![](https://i.imgur.com/w2gsTiI.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.POISON_2",
                "en": "Poison2",
                "fr": "Poison2",
                "description": "![](https://i.imgur.com/UWmyDg2.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.QUESTION_MARK",
                "en": "QuestionMark",
                "fr": "PointD’interrogation",
                "description": "![](https://i.imgur.com/CZBV4tx.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.RADIOACTIVE",
                "en": "Radioactive",
                "fr": "Radioactif",
                "description": "![](https://i.imgur.com/R1bnNcl.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.RECYCLE",
                "en": "Recycle",
                "fr": "Recyclage",
                "description": "![](https://i.imgur.com/q2fxb2u.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.RING_THICK",
                "en": "RingThick",
                "fr": "Anneauépais",
                "description": "![](https://i.imgur.com/lTwuAjX.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.RING_THIN",
                "en": "RingThin",
                "fr": "AnneauFin",
                "description": "![](https://i.imgur.com/NDOrzVS.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.SAD",
                "en": "Sad",
                "fr": "SmileyTriste",
                "description": "![](https://i.imgur.com/00jyB4n.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.SKULL",
                "en": "Skull",
                "fr": "Crâne",
                "description": "![](https://i.imgur.com/TKKtSIa.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.SPADE",
                "en": "Spade",
                "fr": "Pique",
                "description": "![](https://i.imgur.com/AJNBYA3.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.SPIRAL",
                "en": "Spiral",
                "fr": "Spirale",
                "description": "![](https://i.imgur.com/TQLGPww.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.STOP",
                "en": "Stop",
                "fr": "Stop",
                "description": "![](https://i.imgur.com/af56Ghv.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.TRASHCAN",
                "en": "Trashcan",
                "fr": "Poubelle",
                "description": "![](https://i.imgur.com/iEtFvyC.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.WARNING",
                "en": "Warning",
                "fr": "Avertissement",
                "description": "![](https://i.imgur.com/SXDld9l.jpg) \n\n \n\n \n\n \n\n "
            },
            {
                "opy": "Icon.CROSS",
                "en": "X",
                "fr": "Croix",
                "description": "![](https://i.imgur.com/05HFEnd.jpg) \n\n \n\n \n\n \n\n "
            }
        ]
    },
    "RELATIVE": {
        "opy": "Relativity",
        "values": [
            {
                "opy": "Relativity.TO_PLAYER",
                "en": "ToPlayer",
                "fr": "AuMonde"
            },
            {
                "opy": "Relativity.TO_WORLD",
                "en": "ToWorld",
                "fr": "AuJoueur"
            }
        ]
    },
    "MOTION": {
        "opy": "Impulse",
        "values": [
            {
                "opy": "Impulse.CANCEL_CONTRARY_MOTION",
                "en": "CancelContraryMotion",
                "fr": "AnnulerLeMouvementContraire"
            },
            {
                "opy": "Impulse.INCORPORATE_CONTRARY_MOTION",
                "en": "IncorporateContraryMotion",
                "fr": "IncorporerUnMouvementContraire"
            }
        ]
    },
    "ROUNDING TYPE": {
        "values": [
            {
                "opy": "_roundUp",
                "en": "Up",
                "fr": "Au-dessus"
            },
            {
                "opy": "_roundDown",
                "en": "Down",
                "fr": "En-dessous"
            },
            {
                "opy": "_roundToNearest",
                "en": "ToNearest",
                "fr": "AuPlusPrès"
            }
        ]
    },
    "LOS CHECK": {
        "opy": "LosCheck",
        "values": [
            {
                "opy": "LosCheck.OFF",
                "en": "Off",
                "fr": "Désactivé"
            },
            {
                "opy": "LosCheck.SURFACES",
                "en": "Surfaces",
                "fr": "Surfaces"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ALL_BARRIERS",
                "en": "SurfacesAndAllBarriers",
                "fr": "SurfacesEtBarrièresEnnemies"
            },
            {
                "opy": "LosCheck.SURFACES_AND_ENEMY_BARRIERS",
                "en": "SurfacesAndEnemyBarriers",
                "fr": "SurfacesEtToutesLesBarrières"
            }
        ]
    },
    "WORLD TEXT CLIPPING": {
        "opy": "Clip",
        "values": [
            {
                "opy": "Clip.SURFACES",
                "en": "ClipAgainstSurfaces",
                "fr": "MasquerDerrièreLesSurfaces"
            },
            {
                "opy": "Clip.NONE",
                "en": "DoNotClip",
                "fr": "NePasMasquer"
            }
        ]
    },
    "HUD LOCATION": {
        "opy": "Position",
        "values": [
            {
                "opy": "Position.LEFT",
                "en": "Left",
                "fr": "Gauche"
            },
            {
                "opy": "Position.TOP",
                "en": "Top",
                "fr": "Haut"
            },
            {
                "opy": "Position.RIGHT",
                "en": "Right",
                "fr": "Droite"
            }
        ]
    },
    "ICON REEVALUATION": {
        "opy": "IconReeval",
        "values": [
            {
                "opy": "IconReeval.POSITION",
                "en": "Position"
            },
            {
                "opy": "IconReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            },
            {
                "opy": "IconReeval.VISIBILITY",
                "en": "VisibleTo",
                "fr": "VisiblePour"
            },
            {
                "opy": "IconReeval.VISIBILITY_AND_POSITION",
                "en": "VisibleToAndPosition",
                "fr": "VisiblePourEtPosition"
            }
        ]
    },
    "EFFECT REEVALUATION": {
        "opy": "EffectReeval",
        "values": [
            {
                "opy": "EffectReeval.POSITION_AND_RADIUS",
                "en": "PositionAndRadius",
                "fr": "PositionEtRayon"
            },
            {
                "opy": "EffectReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            },
            {
                "opy": "EffectReeval.VISIBILITY",
                "en": "VisibleTo",
                "fr": "VisiblePour"
            },
            {
                "opy": "EffectReeval.VISIBILITY_POSITION_AND_RADIUS",
                "en": "VisibleToPositionAndRadius",
                "fr": "VisiblePourPositionEtRayon"
            }
        ]
    },
    "HUD TEXT REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "opy": "HudReeval.STRING",
                "en": "String",
                "fr": "ChaîneDeTexte"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString",
                "fr": "VisiblePourEtChaîneDeTexte"
            }
        ]
    },
    "WORLD TEXT REEVALUATION": {
        "opy": "WorldTextReeval",
        "values": [
            {
                "opy": "WorldTextReeval.STRING",
                "en": "String",
                "fr": "ChaîneDeTexte"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString",
                "fr": "VisiblePourEtChaîneDeTexte"
            },
            {
                "opy": "WorldTextReeval.VISIBILITY_POSITION_AND_STRING",
                "en": "VisibleToPositionAndString",
                "fr": "VisiblePourPositionEtChaîneDeTexte"
            }
        ]
    },
    "CHASE RATE REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_RATE",
                "en": "DestinationAndRate",
                "fr": "DestinationEtTaux"
            },
            {
                "opy": "ChaseReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            }
        ]
    },
    "CHASE TIME REEVALUATION": {
        "opy": "ChaseReeval",
        "values": [
            {
                "opy": "ChaseReeval.DESTINATION_AND_DURATION",
                "en": "DestinationAndDuration",
                "fr": "DestinationEtDurée"
            },
            {
                "opy": "ChaseReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            }
        ]
    },
    "OBJECTIVE DESCRIPTION REEVALUATION": {
        "opy": "HudReeval",
        "values": [
            {
                "opy": "HudReeval.STRING",
                "en": "String",
                "fr": "ChaîneDeTexte"
            },
            {
                "opy": "HudReeval.VISIBILITY_AND_STRING",
                "en": "VisibleToAndString",
                "fr": "VisiblePourEtChaîneDeTexte"
            }
        ]
    },
    "DAMAGE MODIFICATION REEVALUATION": {
        "opy": "DamageReeval",
        "values": [
            {
                "opy": "DamageReeval.NONE",
                "en": "None",
                "fr": "Aucun"
            },
            {
                "opy": "DamageReeval.RECEIVERS_AND_DAMAGERS",
                "en": "ReceiversAndDamagers",
                "fr": "RécepteursEtémetteursDeDégâts"
            },
            {
                "opy": "DamageReeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT",
                "en": "ReceiversDamagersAndDamagePercent",
                "fr": "RécepteursDeDégâtsémetteursDeDégâtsEtPourcentageDeDégâts"
            }
        ]
    },
    "FACING REEVALUATION": {
        "opy": "FacingReeval",
        "values": [
            {
                "opy": "FacingReeval.DIRECTION_AND_TURN_RATE",
                "en": "DirectionAndTurnRate",
                "fr": "DirectionEtTauxDeRotation"
            },
            {
                "opy": "FacingReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            }
        ]
    },
    "WAIT BEHAVIOR": {
        "opy": "Wait",
        "values": [
            {
                "opy": "Wait.ABORT_WHEN_FALSE",
                "en": "AbortWhenFalse",
                "fr": "InterrompreQuandFaux"
            },
            {
                "opy": "Wait.IGNORE_CONDITION",
                "en": "IgnoreCondition",
                "fr": "IgnorerLaCondition"
            },
            {
                "opy": "Wait.RESTART_WHEN_TRUE",
                "en": "RestartWhenTrue",
                "fr": "RedémarrerQuandVrai"
            }
        ]
    },
    "BARRIERS LOS": {
        "opy": "BarrierLos",
        "values": [
            {
                "opy": "BarrierLos.BLOCKED_BY_ENEMY_BARRIERS",
                "en": "EnemyBarriersBlockLos",
                "fr": "LesBarrièresEnnemiesBloquentLaLigneDeVue"
            },
            {
                "opy": "BarrierLos.BLOCKED_BY_ALL_BARRIERS",
                "en": "AllBarriersBlockLos",
                "fr": "ToutesLesBarrièresBloquentLaLigneDeVue"
            },
            {
                "opy": "BarrierLos.PASS_THROUGH_BARRIERS",
                "en": "BarriersDoNotBlockLos",
                "fr": "LesBarrièresNeBloquentPasLaLigneDeVue"
            }
        ]
    },
    "STATUS": {
        "opy": "Status",
        "values": [
            {
                "opy": "Status.ASLEEP",
                "en": "Asleep",
                "fr": "Endormi"
            },
            {
                "opy": "Status.BURNING",
                "en": "Burning",
                "fr": "Enflammé"
            },
            {
                "opy": "Status.FROZEN",
                "en": "Frozen",
                "fr": "Gelé"
            },
            {
                "opy": "Status.HACKED",
                "en": "Hacked",
                "fr": "Piraté"
            },
            {
                "opy": "Status.INVINCIBLE",
                "en": "Invincible",
                "fr": "Invincible"
            },
            {
                "opy": "Status.KNOCKED_DOWN",
                "en": "KnockedDown",
                "fr": "Renversé"
            },
            {
                "opy": "Status.PHASED_OUT",
                "en": "PhasedOut",
                "fr": "Déphasé"
            },
            {
                "opy": "Status.ROOTED",
                "en": "Rooted",
                "fr": "Immobilisé"
            },
            {
                "opy": "Status.STUNNED",
                "en": "Stunned",
                "fr": "Étourdi"
            },
            {
                "opy": "Status.UNKILLABLE",
                "en": "Unkillable",
                "fr": "Intuable"
            }
        ]
    },
    "SPECTATOR VISIBILITY": {
        "opy": "SpecVisibility",
        "values": [
            {
                "opy": "SpecVisibility.DEFAULT",
                "en": "Defaultvisibility",
                "fr": "VisibilitéParDéfaut"
            },
            {
                "opy": "SpecVisibility.ALWAYS",
                "en": "Visiblealways",
                "fr": "ToujoursVisible"
            },
            {
                "opy": "SpecVisibility.NEVER",
                "en": "Visiblenever",
                "fr": "JamaisVisible"
            }
        ]
    },
    "BEAM EFFECT": {
        "opy": "Beam",
        "values": [
            {
                "opy": "Beam.BAD",
                "en": "Badbeam",
                "fr": "MauvaisRayon"
            },
            {
                "opy": "Beam.GOOD",
                "en": "Goodbeam",
                "fr": "BonRayon"
            },
            {
                "opy": "Beam.GRAPPLE",
                "en": "Grapplebeam",
                "fr": "RayonDuGrappin"
            }
        ]
    },
    "THROTTLE BEHAVIOR": {
        "opy": "Throttle",
        "values": [
            {
                "opy": "Throttle.REPLACE_EXISTING",
                "en": "Replaceexistingthrottle",
                "fr": "RemplacerL’accélérationExistante"
            },
            {
                "opy": "Throttle.ADD_TO_EXISTING",
                "en": "Addtoexistingthrottle",
                "fr": "AjouteràL’accélérationExistante"
            }
        ]
    },
    "THROTTLE REEVALUATION": {
        "opy": "ThrottleReeval",
        "values": [
            {
                "opy": "ThrottleReeval.DIRECTION_AND_MAGNITUDE",
                "en": "Directionandmagnitude",
                "fr": "DirectionEtAmpleur"
            },
            {
                "opy": "ThrottleReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            }
        ]
    },
    "ACCELERATION REEVALUATION": {
        "opy": "AccelReeval",
        "values": [
            {
                "opy": "AccelReeval.DIRECTION_RATE_AND_MAX_SPEED",
                "en": "DirectionRateAndMaxSpeed",
                "fr": "DirectionTauxEtVitesseMaximum"
            },
            {
                "opy": "AccelReeval.NONE",
                "en": "None",
                "fr": "Aucune"
            }
        ]
    }
};

