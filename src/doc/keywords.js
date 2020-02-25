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

const customGameSettingsKw =
//begin-json
{
    "_on": {
        "en-US": "On"
    },
    "_off": {
        "en-US": "Off",
    },
    "_enabled": {
        "en-US": "Enabled",
    },
    "_disabled": {
        "en-US": "Disabled"
    },
    "_yes": {
        "en-US": "Yes"
    },
    "_no": {
        "en-US": "No"
    }
}

const ruleKw = 
//begin-json
{
    "@Rule": {
        "en-US": "rule",
        "guid": "00000000C7B4",
        "de-DE": "regel",
        "es-MX": "regla",
        "fr-FR": "règle",
        "it-IT": "regola",
        "ja-JP": "ルール",
        "pl-PL": "reguła",
        "pt-BR": "regra",
        "zh-CN": "规则",
        "zh-TW": "規則"
    },
    "@Event": {
        "en-US": "event",
        "guid": "00000000C7B5",
        "es-MX": "evento",
        "fr-FR": "évènement",
        "it-IT": "evento",
        "ja-JP": "イベント",
        "pl-PL": "zdarzenie",
        "pt-BR": "evento",
        "zh-CN": "事件",
        "zh-TW": "事件"
    },
    "_conditions": {
        "en-US": "conditions",
        "guid": "00000000C7B6",
        "de-DE": "bedingungen",
        "es-MX": "condiciones",
        "it-IT": "condizioni",
        "ja-JP": "条件",
        "ko-KR": "condition",
        "pl-PL": "warunki",
        "pt-BR": "condições",
        "zh-CN": "条件",
        "zh-TW": "條件"
    },
    "_actions": {
        "en-US": "actions",
        "guid": "00000000C7B7",
        "de-DE": "aktionen",
        "es-MX": "acciones",
        "it-IT": "azioni",
        "ja-JP": "アクション",
        "ko-KR": "action",
        "pl-PL": "działania",
        "pt-BR": "ações",
        "zh-CN": "动作",
        "zh-TW": "動作"
    },
    "_disabled": {
        "en-US": "disabled",
        "guid": "00000000C7B8",
        "de-DE": "deaktiviert",
        "es-MX": "deshabilitado",
        "fr-FR": "désactivé",
        "it-IT": "disattivato",
        "ja-JP": "無効",
        "pl-PL": "wył.",
        "pt-BR": "desabilitado",
        "zh-CN": "禁用",
        "zh-TW": "停用"
    },
    "_enabled": {
        "en-US": "enabled"
    },
    "_variables": {
        "en-US": "variables",
        "guid": "00000000EB73",
        "de-DE": "Variablen",
        "it-IT": "variabili",
        "ja-JP": "変数",
        "pl-PL": "zmienne",
        "pt-BR": "variáveis",
        "zh-CN": "变量",
        "zh-TW": "變數"
    },
    "_global": {
        "en-US": "global",
        "guid": "00000000EB74",
        "fr-FR": "globale",
        "it-IT": "globale",
        "ja-JP": "グローバル",
        "pl-PL": "globalne",
        "zh-CN": "全局",
        "zh-TW": "全域"
    },
    "_player": {
        "en-US": "player",
        "guid": "00000000EB75",
        "es-ES": "jugador",
        "es-MX": "jugador",
        "fr-FR": "de joueur",
        "it-IT": "giocatore",
        "ja-JP": "プレイヤー",
        "pl-PL": "gracza",
        "pt-BR": "jogador",
        "zh-CN": "玩家",
        "zh-TW": "玩家"
    },
    "_subroutines": {
        "en-US": "subroutines",
        "de-DE": "Subroutinen",
        "es-ES": "subrutinas",
        "es-MX": "Subrutinas",
        "fr-FR": "sous-programmes",
        "it-IT": "subroutine",
        "ja-JP": "サブルーチン",
        "pl-PL": "podprogramy",
        "pt-BR": "sub-rotinas",
        "zh-CN": "子程序"
    },
    "_settings": {
        "en-US": "settings",
    }
}
//end-json

//Event keywords
const eventKw = 
//begin-json
{
    "global": {
        "en-US": "Ongoing - Global",
        "guid": "000000007895",
        "es-MX": "En curso - Global",
        "fr-FR": "Toute la partie - Tout le monde",
        "ja-JP": "進行中 - グローバル",
        "pt-BR": "Em andamento - Global",
        "zh-CN": "持续 - 全局"
    },
    "eachPlayer": {
        "en-US": "Ongoing - Each Player",
        "guid": "000000007897",
        "es-MX": "En curso - Cada jugador",
        "fr-FR": "Toute la partie - Chaque joueur",
        "ja-JP": "進行中 - 各プレイヤー",
        "pt-BR": "Em andamento - Cada Jogador",
        "zh-CN": "持续 - 每名玩家"
    },
    "playerTookDamage": {
        "en-US": "Player Took Damage",
        "guid": "00000000B313",
        "es-MX": "El jugador recibió daño",
        "fr-FR": "Un joueur subit des dégâts",
        "ja-JP": "プレイヤーがダメージを受けた",
        "pt-BR": "Jogador Recebeu Dano",
        "ru-RU": "Player took damage",
        "zh-CN": "玩家受到伤害"
    },
    "playerDealtDamage": {
        "en-US": "Player Dealt Damage",
        "guid": "00000000B52D",
        "es-MX": "El jugador infligió daño",
        "fr-FR": "Un joueur inflige des dégâts",
        "ja-JP": "プレイヤーがダメージを与えた",
        "pt-BR": "Jogador Causou Dano",
        "ru-RU": "Player dealt damage",
        "zh-CN": "玩家造成伤害"
    },
    "playerDealtFinalBlow": {
        "en-US": "Player Dealt Final Blow",
        "guid": "0000000078F8",
        "es-MX": "El jugador asestó un golpe de gracia",
        "fr-FR": "Un joueur inflige un coup de grâce",
        "ja-JP": "ファイナル・ブロウを獲得",
        "pt-BR": "Jogador Desferiu Golpe Final",
        "ru-RU": "Player dealt final blow",
        "zh-CN": "玩家造成最后一击"
    },
    "playerDied": {
        "en-US": "Player Died",
        "guid": "00000000B314",
        "es-MX": "El jugador murió",
        "fr-FR": "Un joueur meurt",
        "ja-JP": "プレイヤーが倒れた",
        "pt-BR": "Jogador morreu",
        "zh-CN": "玩家阵亡"
    },
    "playerEarnedElimination": {
        "en-US": "Player Earned Elimination",
        "guid": "0000000078F7",
        "es-MX": "El jugador obtuvo una eliminación",
        "fr-FR": "Un joueur obtient une élimination",
        "ja-JP": "プレイヤーがキルを獲得",
        "pt-BR": "Jogador Conseguiu Eliminação",
        "ru-RU": "Player earned elimination",
        "zh-CN": "玩家参与消灭"
    },
    "playerDealtHealing": {
        "en-US": "Player Dealt Healing",
        "guid": "00000000CC16",
        "es-MX": "El jugador realizó una sanación",
        "fr-FR": "Un joueur a prodigué des soins",
        "ja-JP": "プレイヤーがヒールを与えた",
        "pl-PL": "Gracz wykonał leczenie",
        "pt-BR": "Jogador Realizou Cura",
        "zh-CN": "玩家造成治疗"
    },
    "playerReceivedHealing": {
        "en-US": "Player Received Healing",
        "guid": "00000000CC17",
        "es-MX": "El jugador recibió una sanación",
        "fr-FR": "Un joueur a reçu des soins",
        "ja-JP": "プレイヤーがヒールを受けた",
        "pl-PL": "Gracz otrzymał leczenie",
        "pt-BR": "Jogador Recebeu Cura",
        "zh-CN": "玩家受到治疗"
    },
    "playerJoined": {
        "en-US": "Player Joined Match",
        "guid": "00000000CC18",
        "es-MX": "El jugador se unió a la partida",
        "fr-FR": "Un joueur a rejoint la partie",
        "ja-JP": "プレイヤーがマッチに参加",
        "pl-PL": "Gracz dołączył do meczu",
        "pt-BR": "Jogador Entrou na Partida",
        "zh-CN": "玩家加入比赛"
    },
    "playerLeft": {
        "en-US": "Player Left Match",
        "guid": "00000000CC19",
        "es-MX": "El jugador abandonó la partida",
        "fr-FR": "Un joueur a quitté la partie",
        "ja-JP": "プレイヤーがマッチから離脱",
        "pl-PL": "Gracz opuścił mecz",
        "pt-BR": "Jogador Saiu da Partida",
        "zh-CN": "玩家离开比赛"
    },
    "_subroutine": {
        "en-US": "Subroutine",
        "es-ES": "Subrutina",
        "es-MX": "Subrutina",
        "fr-FR": "Sous-programme",
        "ja-JP": "サブルーチン",
        "pl-PL": "Podprogram",
        "pt-BR": "Sub-rotina",
        "zh-CN": "子程序"
    }
}
//end-json

const eventTeamKw = 
//begin-json
{
    "1": {
        "guid": "000000004672",
        "en-US": "Team 1",
        "es-ES": "Equipo 1",
        "es-MX": "Equipo 1",
        "fr-FR": "Équipe 1",
        "it-IT": "Squadra 1",
        "ja-JP": "チーム1",
        "ko-KR": "1팀",
        "pl-PL": "Drużyna 1",
        "pt-BR": "Equipe 1",
        "ru-RU": "Команда 1",
        "zh-CN": "队伍1",
        "zh-TW": "隊伍1"
    },
    "2": {
        "guid": "000000004673",
        "en-US": "Team 2",
        "es-ES": "Equipo 2",
        "es-MX": "Equipo 2",
        "fr-FR": "Équipe 2",
        "it-IT": "Squadra 2",
        "ja-JP": "チーム2",
        "ko-KR": "2팀",
        "pl-PL": "Drużyna 2",
        "pt-BR": "Equipe 2",
        "ru-RU": "Команда 2",
        "zh-CN": "队伍2",
        "zh-TW": "隊伍2"
    },
    "all": {
        "guid": "000000007804",
        "en-US": "All",
        "es-ES": "Todos",
        "es-MX": "Todos",
        "fr-FR": "Les deux",
        "it-IT": "Tutti",
        "ja-JP": "すべて",
        "pl-PL": "Wszystkie",
        "pt-BR": "Todas",
        "zh-CN": "双方"
    }
}
//end-json

const slotKw = 
//begin-json
{
    "guid": "00000000C231",
    "en-US": "Slot %1$s",
    "es-ES": "Ranura %1$s",
    "es-MX": "Posición %1$s",
    "fr-FR": "Emplacement %1$s",
    "ja-JP": "スロット%1$s",
    "pl-PL": "Miejsce %1$s",
    "pt-BR": "Espaço %1$s",
    "ru-RU": "Ячейка %1$s",
    "zh-CN": "位置 %1$s"
}
//end-json
const eventSlotKw = {}
for (var i = 0; i < 12; i++) {
    eventSlotKw[i] = Object.assign({}, slotKw)
    for (var key of Object.keys(eventSlotKw[i])) {
        eventSlotKw[i][key] = eventSlotKw[i][key].replace("%1$s", i);
    }
}

const eventPlayerKw = 
//begin-json
{
    "all": {
        "guid": "0000000077FE",
        "en-US": "All",
        "es-ES": "Todos",
        "es-MX": "Todos",
        "fr-FR": "Tout",
        "it-IT": "Tutti",
        "ja-JP": "すべて",
        "pl-PL": "Wszystkie",
        "pt-BR": "Tudo",
        "ru-RU": "Все",
        "zh-CN": "全部"
    }
}
//end-json
Object.assign(eventPlayerKw, eventSlotKw, heroKw);

var constantKw = {};
for (var constant of Object.keys(constantValues)) {
    for (var value of Object.keys(constantValues[constant])) {
        constantKw[constant+"."+value] = constantValues[constant][value];
    }
}

//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
const valueKw = Object.assign({}, valueFuncKw, constantKw);

const funcKw = Object.assign({}, actionKw, valueFuncKw);
