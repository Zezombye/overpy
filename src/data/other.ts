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
// @ts-check
import { Action, actionKw } from "./actions";
import { Constant, constantValues } from "./constants";
import { opyFuncs } from "./opy/functions";
import { opyInternalFuncs } from "./opy/internalFunctions";
import { heroKw } from "./heroes";
import { valueFuncKw } from "./values";
import { LocalizableString, Value } from "../types";
import { postLoadTasks } from "../globalVars";

export const customGameSettingsKw: Record<string, LocalizableString> =
//begin-json
{
    "__disabled__": {
        "guid": "000000006A06",
        "en-US": "Disabled",
        "de-DE": "Deaktiviert",
        "es-ES": "No permitir",
        "es-MX": "Deshabilitado",
        "fr-FR": "Désactivé",
        "it-IT": "Off",
        "ja-JP": "無効",
        "ko-KR": "비활성화",
        "pl-PL": "Wyłączono",
        "pt-BR": "Desativada",
        "ru-RU": "Откл.",
        "th-TH": "ปิดใช้งาน",
        "tr-TR": "Devre Dışı",
        "zh-CN": "禁用",
        "zh-TW": "停用"
    },
    "__enabled__": {
        "guid": "000000005923",
        "en-US": "Enabled",
        "de-DE": "Aktiviert",
        "es-ES": "Permitir",
        "es-MX": "Habilitado",
        "fr-FR": "Activé",
        "it-IT": "Attivata",
        "ja-JP": "有効",
        "ko-KR": "활성화",
        "pl-PL": "Tryb aktywny",
        "pt-BR": "Ativado",
        "ru-RU": "Вкл.",
        "th-TH": "เปิดใช้งานแล้ว",
        "tr-TR": "Etkin",
        "zh-CN": "启用",
        "zh-TW": "啟用"
    },
    "__no__": {
        "guid": "00000000F407",
        "en-US": "No",
        "de-DE": "Nein",
        "fr-FR": "Non",
        "ja-JP": "いいえ",
        "ko-KR": "아니요",
        "pl-PL": "Nie",
        "pt-BR": "Não",
        "ru-RU": "Нет",
        "th-TH": "ไม่",
        "tr-TR": "Hayır",
        "zh-CN": "否",
        "zh-TW": "否",
        "es-ES": "No",
        "es-MX": "No",
        "it-IT": "No"
    },
    "__off__": {
        "guid": "0000000058DF",
        "en-US": "Off",
        "de-DE": "Aus",
        "es-ES": "Desactivado",
        "es-MX": "No",
        "fr-FR": "Désactivé",
        "ja-JP": "OFF",
        "ko-KR": "비활성화",
        "pl-PL": "Wył.",
        "pt-BR": "Desligado",
        "ru-RU": "Откл.",
        "th-TH": "ปิด",
        "tr-TR": "Kapalı",
        "zh-CN": "关闭",
        "zh-TW": "關閉",
        "it-IT": "Off"
    },
    "__on__": {
        "guid": "0000000058E0",
        "en-US": "On",
        "de-DE": "Ein",
        "es-ES": "Activado",
        "es-MX": "Activado",
        "fr-FR": "Activé",
        "ja-JP": "ON",
        "ko-KR": "활성화",
        "pl-PL": "Wł.",
        "pt-BR": "Ligado",
        "ru-RU": "Вкл.",
        "th-TH": "เปิด",
        "tr-TR": "Açık",
        "zh-CN": "开启",
        "zh-TW": "開啟",
        "it-IT": "On"
    },
    "__team1__": {
        "guid": "000000002D71",
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
        "th-TH": "ทีม 1",
        "tr-TR": "1. Takım",
        "zh-CN": "队伍1",
        "zh-TW": "隊伍1",
        "de-DE": "Team 1"
    },
    "__team2__": {
        "guid": "000000002D72",
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
        "th-TH": "ทีม 2",
        "tr-TR": "2. Takım",
        "zh-CN": "队伍2",
        "zh-TW": "隊伍2",
        "de-DE": "Team 2"
    },
    "__yes__": {
        "guid": "00000000F406",
        "en-US": "Yes",
        "de-DE": "Ja",
        "es-ES": "Sí",
        "es-MX": "Sí",
        "fr-FR": "Oui",
        "it-IT": "Sì",
        "ja-JP": "はい",
        "ko-KR": "네",
        "pl-PL": "Tak",
        "pt-BR": "Sim",
        "ru-RU": "Да",
        "th-TH": "ใช่",
        "tr-TR": "Evet",
        "zh-CN": "是",
        "zh-TW": "是"
    }
}
//end-json
;

export const ruleKw: Record<string, LocalizableString> =
//begin-json
{
    "__actions__": {
        "guid": "00000000C7B7",
        "en-US": "actions",
        "de-DE": "aktionen",
        "es-MX": "acciones",
        "it-IT": "azioni",
        "ja-JP": "アクション",
        "ko-KR": "action",
        "pl-PL": "działania",
        "pt-BR": "ações",
        "th-TH": "การดำเนินการ",
        "tr-TR": "eylemler",
        "zh-CN": "动作",
        "zh-TW": "動作",
        "es-ES": "actions",
        "fr-FR": "actions",
        "ru-RU": "actions"
    },
    "__conditions__": {
        "guid": "00000000C7B6",
        "en-US": "conditions",
        "de-DE": "bedingungen",
        "es-MX": "condiciones",
        "it-IT": "condizioni",
        "ja-JP": "条件",
        "ko-KR": "condition",
        "pl-PL": "warunki",
        "pt-BR": "condições",
        "th-TH": "เงื่อนไข",
        "tr-TR": "koşullar",
        "zh-CN": "条件",
        "zh-TW": "條件",
        "es-ES": "conditions",
        "fr-FR": "conditions",
        "ru-RU": "conditions"
    },
    "__disabled__": {
        "guid": "00000000C7B8",
        "en-US": "disabled",
        "de-DE": "deaktiviert",
        "es-MX": "deshabilitado",
        "fr-FR": "désactivé",
        "it-IT": "disattivato",
        "ja-JP": "無効",
        "pl-PL": "wył.",
        "pt-BR": "desabilitado",
        "th-TH": "ปิดใช้งาน",
        "tr-TR": "devre dışı",
        "zh-CN": "禁用",
        "zh-TW": "停用",
        "es-ES": "disabled",
        "ko-KR": "disabled",
        "ru-RU": "disabled"
    },
    "__event__": {
        "guid": "00000000C7B5",
        "en-US": "event",
        "es-MX": "evento",
        "fr-FR": "évènement",
        "it-IT": "evento",
        "ja-JP": "イベント",
        "pl-PL": "zdarzenie",
        "pt-BR": "evento",
        "th-TH": "เหตุการณ์",
        "tr-TR": "etkinlik",
        "zh-CN": "事件",
        "zh-TW": "事件",
        "de-DE": "event",
        "es-ES": "event",
        "ko-KR": "event",
        "ru-RU": "event"
    },
    "__global__": {
        "guid": "00000000EB74",
        "en-US": "global",
        "fr-FR": "globale",
        "it-IT": "globale",
        "ja-JP": "グローバル",
        "pl-PL": "globalne",
        "th-TH": "สากล",
        "tr-TR": "küresel",
        "zh-CN": "全局",
        "zh-TW": "全域",
        "de-DE": "global",
        "es-ES": "global",
        "es-MX": "global",
        "ko-KR": "global",
        "pt-BR": "global",
        "ru-RU": "global"
    },
    "__player__": {
        "guid": "00000000EB75",
        "en-US": "player",
        "es-ES": "jugador",
        "es-MX": "jugador",
        "fr-FR": "de joueur",
        "it-IT": "giocatore",
        "ja-JP": "プレイヤー",
        "pl-PL": "gracza",
        "pt-BR": "jogador",
        "th-TH": "ผู้เล่น",
        "tr-TR": "oyuncu",
        "zh-CN": "玩家",
        "zh-TW": "玩家",
        "de-DE": "player",
        "ko-KR": "player",
        "ru-RU": "player"
    },
    "__rule__": {
        "guid": "00000000C7B4",
        "en-US": "rule",
        "de-DE": "regel",
        "es-MX": "regla",
        "fr-FR": "règle",
        "it-IT": "regola",
        "ja-JP": "ルール",
        "pl-PL": "reguła",
        "pt-BR": "regra",
        "th-TH": "กฎ",
        "tr-TR": "kural",
        "zh-CN": "规则",
        "zh-TW": "規則",
        "es-ES": "rule",
        "ko-KR": "rule",
        "ru-RU": "rule"
    },
    "__settings__": {
        "guid": "000000010030",
        "en-US": "settings",
        "de-DE": "einstellungen",
        "es-ES": "ajustes",
        "es-MX": "configuración",
        "fr-FR": "paramètres",
        "it-IT": "impostazioni",
        "ja-JP": "設定",
        "pl-PL": "ustawienia",
        "pt-BR": "configurações",
        "th-TH": "การตั้งค่า",
        "tr-TR": "ayarlar",
        "zh-CN": "设置",
        "zh-TW": "設定",
        "ko-KR": "settings",
        "ru-RU": "settings"
    },
    "__subroutines__": {
        "guid": "00000000FFFA",
        "en-US": "subroutines",
        "de-DE": "Subroutinen",
        "es-ES": "subrutinas",
        "es-MX": "subrutinas",
        "fr-FR": "sous-programmes",
        "it-IT": "subroutine",
        "ja-JP": "サブルーチン",
        "pl-PL": "podprogramy",
        "pt-BR": "sub-rotinas",
        "th-TH": "ซับรูทีน",
        "tr-TR": "alt yordam",
        "zh-CN": "子程序",
        "ko-KR": "subroutines",
        "ru-RU": "subroutines",
        "zh-TW": "subroutines"
    },
    "__variables__": {
        "guid": "00000000EB73",
        "en-US": "variables",
        "de-DE": "Variablen",
        "it-IT": "variabili",
        "ja-JP": "変数",
        "pl-PL": "zmienne",
        "pt-BR": "variáveis",
        "th-TH": "ตัวแปร",
        "tr-TR": "değişkenler",
        "zh-CN": "变量",
        "zh-TW": "變數",
        "es-ES": "variables",
        "es-MX": "variables",
        "fr-FR": "variables",
        "ko-KR": "variables",
        "ru-RU": "variables"
    }
}
//end-json
;

/**
 * Event keywords
 *
 * @type { { [key: string]: import("../types").LocalizableString } }*/
export const eventKw =
//begin-json
{
    "global": {
        "guid": "000000007895",
        "en-US": "Ongoing - Global",
        "es-MX": "En curso - Global",
        "fr-FR": "Toute la partie - Tout le monde",
        "ja-JP": "進行中 - グローバル",
        "pt-BR": "Em andamento - Global",
        "th-TH": "ดำเนินอยู่ - ทั่วโลก",
        "tr-TR": "Devam Eden - Küresel",
        "zh-CN": "持续 - 全局",
        "de-DE": "Ongoing - Global",
        "es-ES": "Ongoing - Global",
        "it-IT": "Ongoing - Global",
        "ko-KR": "Ongoing - Global",
        "pl-PL": "Ongoing - Global",
        "ru-RU": "Ongoing - Global",
        "zh-TW": "Ongoing - Global"
    },
    "eachPlayer": {
        "guid": "000000007897",
        "en-US": "Ongoing - Each Player",
        "es-MX": "En curso - Cada jugador",
        "fr-FR": "Toute la partie - Chaque joueur",
        "ja-JP": "進行中 - 各プレイヤー",
        "pt-BR": "Em andamento - Cada Jogador",
        "th-TH": "ดำเนินอยู่ - ผู้เล่นแต่ละคน",
        "tr-TR": "Devam Eden - Her Oyuncu",
        "zh-CN": "持续 - 每名玩家",
        "de-DE": "Ongoing - Each Player",
        "es-ES": "Ongoing - Each Player",
        "it-IT": "Ongoing - Each Player",
        "ko-KR": "Ongoing - Each Player",
        "pl-PL": "Ongoing - Each Player",
        "ru-RU": "Ongoing - Each Player",
        "zh-TW": "Ongoing - Each Player"
    },
    "playerDealtDamage": {
        "guid": "00000000B52D",
        "en-US": "Player Dealt Damage",
        "es-MX": "El jugador infligió daño",
        "fr-FR": "Un joueur inflige des dégâts",
        "ja-JP": "プレイヤーがダメージを与えた",
        "pt-BR": "Jogador Causou Dano",
        "ru-RU": "Player dealt damage",
        "th-TH": "ผู้เล่นสร้างความเสียหาย",
        "tr-TR": "Oyuncu'nun Verdiği Hasar",
        "zh-CN": "玩家造成伤害",
        "de-DE": "Player Dealt Damage",
        "es-ES": "Player Dealt Damage",
        "it-IT": "Player Dealt Damage",
        "ko-KR": "Player Dealt Damage",
        "pl-PL": "Player Dealt Damage",
        "zh-TW": "Player Dealt Damage"
    },
    "playerDealtFinalBlow": {
        "guid": "0000000078F8",
        "en-US": "Player Dealt Final Blow",
        "es-MX": "El jugador asestó un golpe de gracia",
        "fr-FR": "Un joueur inflige un coup de grâce",
        "ja-JP": "ファイナル・ブロウを獲得",
        "pt-BR": "Jogador Desferiu Golpe Final",
        "ru-RU": "Player dealt final blow",
        "th-TH": "ผู้เล่นที่โจมตีสังหาร",
        "tr-TR": "Oyuncu Son Vuruşu",
        "zh-CN": "玩家造成最后一击",
        "de-DE": "Player Dealt Final Blow",
        "es-ES": "Player Dealt Final Blow",
        "it-IT": "Player Dealt Final Blow",
        "ko-KR": "Player Dealt Final Blow",
        "pl-PL": "Player Dealt Final Blow",
        "zh-TW": "Player Dealt Final Blow"
    },
    "playerDealtHealing": {
        "guid": "00000000CC16",
        "en-US": "Player Dealt Healing",
        "es-MX": "El jugador realizó una sanación",
        "fr-FR": "Un joueur a prodigué des soins",
        "ja-JP": "プレイヤーが回復を与えた",
        "pt-BR": "Jogador Realizou Cura",
        "th-TH": "ผู้เล่นสร้างการฮีล",
        "tr-TR": "Oyuncu İyileştirme Verdi",
        "zh-CN": "玩家造成治疗",
        "de-DE": "Player Dealt Healing",
        "es-ES": "Player Dealt Healing",
        "it-IT": "Player Dealt Healing",
        "ko-KR": "Player Dealt Healing",
        "pl-PL": "Player Dealt Healing",
        "ru-RU": "Player Dealt Healing",
        "zh-TW": "Player Dealt Healing"
    },
    "playerDealtKnockback": {
        "guid": "0000000105BB",
        "en-US": "Player Dealt Knockback",
        "es-ES": "Repulsión infligida por el jugador",
        "es-MX": "El jugador infligió un derribo",
        "fr-FR": "Un joueur a infligé un recul",
        "ja-JP": "プレイヤーがノックバックを与えた",
        "pt-BR": "Jogador Causou Repulsão",
        "th-TH": "ผู้เล่นที่สร้างการกระเด็นถอยหลัง",
        "tr-TR": "Oyuncu'nun Verdiği Geri İtme",
        "zh-CN": "玩家造成击退",
        "de-DE": "Player Dealt Knockback",
        "it-IT": "Player Dealt Knockback",
        "ko-KR": "Player Dealt Knockback",
        "pl-PL": "Player Dealt Knockback",
        "ru-RU": "Player Dealt Knockback",
        "zh-TW": "Player Dealt Knockback"
    },
    "playerDied": {
        "guid": "00000000B314",
        "en-US": "Player Died",
        "es-MX": "El jugador murió",
        "fr-FR": "Un joueur meurt",
        "ja-JP": "プレイヤーが倒れた",
        "pt-BR": "Jogador morreu",
        "th-TH": "ผู้เล่นเสียชีวิต",
        "tr-TR": "Oyuncu Öldü",
        "zh-CN": "玩家阵亡",
        "de-DE": "Player Died",
        "es-ES": "Player Died",
        "it-IT": "Player Died",
        "ko-KR": "Player Died",
        "pl-PL": "Player Died",
        "ru-RU": "Player Died",
        "zh-TW": "Player Died"
    },
    "playerEarnedElimination": {
        "guid": "0000000078F7",
        "en-US": "Player Earned Elimination",
        "es-MX": "El jugador obtuvo una eliminación",
        "fr-FR": "Un joueur obtient une élimination",
        "ja-JP": "プレイヤーがキルを獲得",
        "pt-BR": "Jogador Conseguiu Eliminação",
        "ru-RU": "Player earned elimination",
        "th-TH": "ผู้เล่นได้รับการกำจัด",
        "tr-TR": "Oyuncu Bertarafı",
        "zh-CN": "玩家参与消灭",
        "de-DE": "Player Earned Elimination",
        "es-ES": "Player Earned Elimination",
        "it-IT": "Player Earned Elimination",
        "ko-KR": "Player Earned Elimination",
        "pl-PL": "Player Earned Elimination",
        "zh-TW": "Player Earned Elimination"
    },
    "playerJoined": {
        "guid": "00000000CC18",
        "en-US": "Player Joined Match",
        "es-MX": "El jugador se unió a la partida",
        "fr-FR": "Un joueur a rejoint la partie",
        "ja-JP": "プレイヤーがマッチに参加",
        "pt-BR": "Jogador Entrou na Partida",
        "th-TH": "ผู้เล่นเข้าร่วมแมตช์",
        "tr-TR": "Oyuncu Maça Katıldı",
        "zh-CN": "玩家加入比赛",
        "de-DE": "Player Joined Match",
        "es-ES": "Player Joined Match",
        "it-IT": "Player Joined Match",
        "ko-KR": "Player Joined Match",
        "pl-PL": "Player Joined Match",
        "ru-RU": "Player Joined Match",
        "zh-TW": "Player Joined Match"
    },
    "playerLeft": {
        "guid": "00000000CC19",
        "en-US": "Player Left Match",
        "es-MX": "El jugador abandonó la partida",
        "fr-FR": "Un joueur a quitté la partie",
        "ja-JP": "プレイヤーがマッチから離脱",
        "pt-BR": "Jogador Saiu da Partida",
        "th-TH": "ผู้เล่นออกจากแมตช์",
        "tr-TR": "Oyuncu Maçtan Ayrıldı",
        "zh-CN": "玩家离开比赛",
        "de-DE": "Player Left Match",
        "es-ES": "Player Left Match",
        "it-IT": "Player Left Match",
        "ko-KR": "Player Left Match",
        "pl-PL": "Player Left Match",
        "ru-RU": "Player Left Match",
        "zh-TW": "Player Left Match"
    },
    "playerReceivedHealing": {
        "guid": "00000000CC17",
        "en-US": "Player Received Healing",
        "es-MX": "El jugador recibió una sanación",
        "fr-FR": "Un joueur a reçu des soins",
        "ja-JP": "プレイヤーが回復を受けた",
        "pt-BR": "Jogador Recebeu Cura",
        "th-TH": "ผู้เล่นได้รับการฮีล",
        "tr-TR": "Oyuncu İyileştirme Aldı",
        "zh-CN": "玩家受到治疗",
        "de-DE": "Player Received Healing",
        "es-ES": "Player Received Healing",
        "it-IT": "Player Received Healing",
        "ko-KR": "Player Received Healing",
        "pl-PL": "Player Received Healing",
        "ru-RU": "Player Received Healing",
        "zh-TW": "Player Received Healing"
    },
    "playerReceivedKnockback": {
        "guid": "0000000105BC",
        "en-US": "Player Received Knockback",
        "es-ES": "Repulsión sufrida por el jugador",
        "es-MX": "El jugador recibió un derribo",
        "fr-FR": "Un joueur a reçu un recul",
        "ja-JP": "プレイヤーがノックバックを受けた",
        "pt-BR": "Jogador Recebeu Repulsão",
        "th-TH": "ผู้เล่นที่ได้รับการกระเด็นถอยหลัง",
        "tr-TR": "Oyuncu Geri İtme Aldı",
        "zh-CN": "玩家受到击退",
        "de-DE": "Player Received Knockback",
        "it-IT": "Player Received Knockback",
        "ko-KR": "Player Received Knockback",
        "pl-PL": "Player Received Knockback",
        "ru-RU": "Player Received Knockback",
        "zh-TW": "Player Received Knockback"
    },
    "playerTookDamage": {
        "guid": "00000000B313",
        "en-US": "Player Took Damage",
        "es-MX": "El jugador recibió daño",
        "fr-FR": "Un joueur subit des dégâts",
        "ja-JP": "プレイヤーがダメージを受けた",
        "pt-BR": "Jogador Recebeu Dano",
        "ru-RU": "Player took damage",
        "th-TH": "ผู้เล่นได้รับความเสียหาย",
        "tr-TR": "Oyuncu Hasar Aldı",
        "zh-CN": "玩家受到伤害",
        "de-DE": "Player Took Damage",
        "es-ES": "Player Took Damage",
        "it-IT": "Player Took Damage",
        "ko-KR": "Player Took Damage",
        "pl-PL": "Player Took Damage",
        "zh-TW": "Player Took Damage"
    },
    "__subroutine__": {
        "guid": "00000000FFF6",
        "en-US": "Subroutine",
        "es-ES": "Subrutina",
        "es-MX": "Subrutina",
        "fr-FR": "Sous-programme",
        "ja-JP": "サブルーチン",
        "pt-BR": "Sub-rotina",
        "th-TH": "ซับรูทีน",
        "tr-TR": "Alt Yordam",
        "zh-CN": "子程序",
        "de-DE": "Subroutine",
        "it-IT": "Subroutine",
        "ko-KR": "Subroutine",
        "pl-PL": "Subroutine",
        "ru-RU": "Subroutine",
        "zh-TW": "Subroutine"
    }
}
//end-json
;

/** @type { { [key: string]: import("../types").LocalizableString } } */
export const eventTeamKw =
//begin-json
{
    "1": {
        "guid": "00000000B472",
        "en-US": "Team 1",
        "es-MX": "Equipo 1",
        "fr-FR": "Équipe 1",
        "ja-JP": "チーム1",
        "pt-BR": "Equipe 1",
        "th-TH": "ทีม 1",
        "tr-TR": "1. Takım",
        "zh-CN": "队伍1",
        "de-DE": "Team 1",
        "es-ES": "Team 1",
        "it-IT": "Team 1",
        "ko-KR": "Team 1",
        "pl-PL": "Team 1",
        "ru-RU": "Team 1",
        "zh-TW": "Team 1"
    },
    "2": {
        "guid": "00000000B471",
        "en-US": "Team 2",
        "es-MX": "Equipo 2",
        "fr-FR": "Équipe 2",
        "ja-JP": "チーム2",
        "pt-BR": "Equipe 2",
        "th-TH": "ทีม 2",
        "tr-TR": "2. Takım",
        "zh-CN": "队伍2",
        "de-DE": "Team 2",
        "es-ES": "Team 2",
        "it-IT": "Team 2",
        "ko-KR": "Team 2",
        "pl-PL": "Team 2",
        "ru-RU": "Team 2",
        "zh-TW": "Team 2"
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
        "th-TH": "ทั้งหมด",
        "tr-TR": "Tümü",
        "zh-CN": "双方",
        "de-DE": "All",
        "ko-KR": "All",
        "ru-RU": "All",
        "zh-TW": "All"
    }
}
//end-json
;

const slotKw: LocalizableString =
//begin-json
{
    "guid": "00000000C231",
    "en-US": "Slot %1$s",
    "es-ES": "Ranura %1$s",
    "es-MX": "Puesto %1$s",
    "fr-FR": "Emplacement %1$s",
    "ja-JP": "スロット%1$s",
    "pl-PL": "Miejsce %1$s",
    "pt-BR": "Espaço %1$s",
    "ru-RU": "Ячейка %1$s",
    "th-TH": "ช่อง %1$s",
    "tr-TR": "%1$s. Yuva",
    "zh-CN": "栏位 %1$s",
    "de-DE": "Slot %1$s",
    "it-IT": "Slot %1$s",
    "ko-KR": "Slot %1$s",
    "zh-TW": "Slot %1$s"
}
//end-json
;
export const eventSlotKw: Record<string, LocalizableString> = {};
for (var i = 0; i < 12; i++) {
    eventSlotKw[i] = Object.assign({}, slotKw);
    for (var key of (Object.keys(eventSlotKw[i]) as Array<keyof LocalizableString>)) {
        eventSlotKw[i][key] = eventSlotKw[i][key]?.replace("%1$s", i.toString());
    }
}

export const eventPlayerKw: Record<string, LocalizableString> =
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
        "th-TH": "ทั้งหมด",
        "tr-TR": "Tümü",
        "zh-CN": "全部",
        "de-DE": "All",
        "ko-KR": "All",
        "zh-TW": "All"
    }
}
//end-json
;

/**
 * A constant function is defined as a function/constant that will always return the same value throughout the lifetime of a game. (This means "current gamemode" and "current map" are valid, as you cannot change a map without restarting the game.)
 * Here we store the functions that are not constant, as it is easier to check with astContainsFunctions().
*/
export let notConstantFunctions: Value[];

export let constantKw: Record<string, Constant> = {};


//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
export let valueKw: Record<string, Value> & Record<string, Constant>;

export let wsFuncKw: Record<string, Action> & Record<string, Value>;

export let funcKw: Record<string, Action> & Record<string, Value> & typeof opyInternalFuncs;

postLoadTasks.push({
    task: () => {
        Object.assign(eventPlayerKw, eventSlotKw, heroKw);

        notConstantFunctions = Object.values(valueFuncKw).filter(x => !x.isConstant);

        for (var constant of Object.keys(constantValues)) {
            for (var value of Object.keys(constantValues[constant])) {
                constantKw[constant+"."+value] = constantValues[constant][value];
            }
        }

        valueKw = Object.assign({}, valueFuncKw, constantKw);

        wsFuncKw = Object.assign({}, actionKw, valueFuncKw);

        funcKw = Object.assign({}, wsFuncKw, opyFuncs, opyInternalFuncs);
    },
    priority: 21
});
