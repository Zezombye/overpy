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

const gamemodeKw =
//begin-json
{
    "assault": {
        "guid": "00000000CD59",
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
    "bountyHunter": {
        "guid": "000000012841",
        "defaultFfaPlayers": 6,
        "en-US": "Bounty Hunter",
        "de-DE": "Kopfgeldjäger",
        "es-ES": "Cazarrecompensas",
        "es-MX": "Cazarrecompensas",
        "fr-FR": "Chasseur de primes",
        "it-IT": "Cacciatori di Taglie",
        "ja-JP": "バウンティ・ハンター",
        "ko-KR": "현상금 사냥꾼",
        "pl-PL": "Łowca nagród",
        "pt-BR": "Caçador de Recompensas",
        "ru-RU": "Охота за головами",
        "zh-CN": "赏金猎手",
        "zh-TW": "賞金獵人"
    },
    "control": {
        "guid": "00000000CD5B",
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
    "ctf": {
        "guid": "000000005A56",
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
    "elimination": {
        "guid": "000000005887",
        "defaultTeam1Players": 1,
        "defaultTeam2Players": 1,
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
    "escort": {
        "guid": "00000000CD5C",
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
    "ffa": {
        "guid": "000000006853",
        "defaultFfaPlayers": 12,
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
    "freezethawElimination": {
        "guid": "0000000122DF",
        "en-US": "Freezethaw Elimination",
        "de-DE": "Frosttau-Eliminierung",
        "es-ES": "Congelación fatal",
        "es-MX": "Eliminación por congelamiento",
        "fr-FR": "Congélimination",
        "it-IT": "Eliminazione Congelata",
        "ja-JP": "フリーズソー・エリミネーション",
        "ko-KR": "얼음땡 섬멸전",
        "pl-PL": "Mroźna Eliminacja",
        "pt-BR": "Eliminação Descongelante",
        "ru-RU": "Ледяная ликвидация",
        "zh-CN": "融冰决斗",
        "zh-TW": "凍凍大作戰"
    },
    "hybrid": {
        "guid": "00000000CD5A",
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
        "zh-CN": "攻击护送",
        "zh-TW": "混合"
    },
    "junkenstein": {
        "guid": "000000004AF4",
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
    "lucioball": {
        "guid": "000000004989",
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
    "meisSnowballOffensive": {
        "guid": "00000000525A",
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
    "practiceRange": {
        "guid": "0000000040BE",
        "defaultTeam2Players": 0,
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
    "skirmish": {
        "guid": "000000005A61",
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
    "snowballFfa": {
        "guid": "00000000EC7B",
        "en-US": "Snowball Deathmatch",
        "de-DE": "Schneeball-Deathmatch",
        "es-ES": "Pelea de bolas de nieve a muerte",
        "es-MX": "Combate a muerte Bola de Nieve",
        "fr-FR": "Combat à mort de boules de neige",
        "it-IT": "Deathmatch Palle di Neve",
        "ja-JP": "雪合戦（デスマッチ）",
        "ko-KR": "눈싸움 데스매치",
        "pl-PL": "Śnieżkowy Deathmatch",
        "pt-BR": "Combate até a Morte de Bola de Neve",
        "ru-RU": "Снежная схватка",
        "zh-CN": "雪球死斗",
        "zh-TW": "雪球死鬥大作戰"
    },
    "tdm": {
        "guid": "000000006854",
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
    "yetiHunter": {
        "guid": "000000006DF1",
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
}
//end-json
