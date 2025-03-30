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

function fixTxTag(tag: string): string {
    tag = tag.replaceAll(" ", "");
    if (!tag.startsWith("<")) {
        tag = "<txc00000000000000".substring(0, "<txc00000000000000".length - tag.length) + tag + ">";
    }
    tag = tag.toLowerCase();
    if (!tag.match(/^<tx\s*0*c[0-9a-fA-F]{14}>$/i)) {
        throw new Error("Invalid TX tag: " + tag);
    }
    return tag;
}

export const opyTextures: Record<string, string> = Object.fromEntries(Object.entries({
    "GROUP_UP": "39DA",
    "ULTIMATE": "39DB",
    "NEED_HEALING": "39DD",
    "ATTACKING": "39D7",
    "EMOTE": "5A0A",
    "HELLO": "5A0B",
    "NEED_HELP": "5A0C",
    "THANKS": "5A0D",
    "DEFENDING": "2A9EC",
    "FALL_BACK": "2A9EF",
    "GO": "2A9F1",
    "GOING_IN": "2A9F2",
    "INCOMING": "2A9F5",
    "NO": "2A9F9",
    "ON_MY_WAY": "2A9FA",
    "PRESS_THE_ATTACK": "2A9FB",
    "PUSH_FORWARD": "2A9FC",
    "SORRY": "2A9FE",
    "WITH_YOU": "2AA00",
    "MERCY_ANGELIC_DESCENT": "12F6",
    "BRIGITTE_SHIELD_BASH": "3339",
    "LUCIO_HEALING_CROSSFADE": "3C5D",
    "REAPER_PASSIVE": "3FCF",
    "TORBJORN_SCRAP_COLLECTOR": "3FD0",
    "JUNKRAT_PASSIVE": "4E54",
    "DVA_LIGHT_GUN": "4EA9",
    "DVA_ALTERNATE_ULT": "4EAB",
    "DVA_PASSIVE": "5405",
    "SOMBRA_STEALTH": "A6B6",
    "SOMBRA_PASSIVE": "AFBF",
    "DOOMFIST_PASSIVE": "F4C2",
    "BRIGITTE_PASSIVE": "144A8",
    "HANZO_LUNGE": "14F0C",
    "JUNKER_QUEEN_PASSIVE": "2BE58",
    "HALLOWEEN_TERROR": "ABAB",
    "BLIZZARD_SPECIAL": "ABAC",
    "SUMMER_GAMES": "ABAD",
    "OVERWATCH_LEAGUE_TOKENS": "13DCC",
    "PINK_MERCY_HEART": "17112",
    "LOCK": "12F3",
    "OVERWATCH_COINS": "8E02",
    "COMPETITIVE_POINTS": "906E",
    "ESCORT": "20AF3",
    "ELIMINATION": "20AF4",
    "DEATHMATCH": "20AF5",
    "CAPTURE_THE_FLAG": "20AF6",
    "CONTROL": "20AF7",
    "ASSAULT": "20AF8",
    "FLASHPOINT": "320D2",
    "TEAM_DEATHMATCH": "20AF9",
    "SKIRMISH": "20AFA",
    "HYBRID": "20AFB",
    "PUSH": "215B4",
    "PRACTICE_RANGE": "280C0",
    "EXPERIMENTAL_MODE_DARK": "2A057",
    "FLAG_IRELAND": "2201A",
    "FLAG_ARGENTINA": "2205F",
    "FLAG_BELGIUM": "22061",
    "FLAG_BULGARIA": "22062",
    "FLAG_CHILE": "22063",
    "FLAG_COLOMBIA": "22064",
    "FLAG_GREECE": "22065",
    "FLAG_ICELAND": "22066",
    "FLAG_INDIA": "22067",
    "RIGHT_CLICK": "4080",
    "SCROLL_UP": "5DA0",
    "SCROLL_DOWN": "5DA1",
    "SCROLL": "5DAD",
    "MOUSE_SIDE_BUTTON": "5DAB",
    "DPAD_UP_ARROW": "44A6",
    "DPAD_DOWN_ARROW": "44B3",
    "DPAD_LEFT_ARROW": "44B2",
    "DPAD_RIGHT_ARROW": "44A5",
    "Y_BUTTON": "44B2",
    "B_BUTTON": "44B1",
    "A_BUTTON": "44AF",
    "MOUSE_CURSOR": "2DD21",
    "MICROPHONE": "7114",
    "WORKSHOP": "1F70D",
    "HERO_BORDER": "3EC4B",
    "BRONZE_BORDER": "7EA3",
    "PACKET_LOSS": "894E",
    "CONNECTIVITY_ISSUE": "894F",
    "EXPLOSION_DARK": "A824",
    "TARGET_WITH_CHECKMARK_DARK": "A825",
    "FIRE_DARK": "A826",
    "HEALING_PLUS_DARK": "A827",
    "TARGET_WITH_PERSON_DARK": "A82A",
    "TRACER_ICON_DARK": "B273",
    "COMPETITIVE_ICON": "B274",
    "GAME_BROWSER_ICON_DARK": "B275",
    "UNRANKED_ICON_DARK": "B277",

    "SQUARE_GRADIENT_TRANSPARENT_BLACK": "21CC9",
}).map(([k, v]) => [k, fixTxTag(v)]));

/*

Additional delimiters

    print("<txC000000000020d0>")
    print("<txC000000000022a8>")
    print("<txC000000000022ec>")
    print("<txC000000000022ed>")
    print("<txC000000000030a7>")
    print("<txC000000000031c0>")
    print("<txC000000000035bc>")
    print("<txC000000000043b7>")
    print("<txC00000000004d5b>")
    print("<txC00000000006b35>")
    print("<txC0000000000a06c>")
    print("<txC0000000000bead>")
*/
