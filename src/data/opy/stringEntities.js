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

const opyStringEntities = {
    "copy": {
        codepoint: 0xA9,
        description: "The copyright sign.",
    },
    "reg": {
        codepoint: 0xAE,
        description: "The registered sign.",
    },
    "macr": {
        codepoint: 0xAF,
        description: "A \"macron\" (overline).",
    },
    "middot": {
        codepoint: 0xB7,
        description: "The middle dot.",
    },
    "horbar": {
        codepoint: 0x2015,
        description: "A horizontal bar.",
    },
    "refmk": {
        codepoint: 0x203B,
        description: "The reference mark (used in Japanese).",
    },
    "astrm": {
        codepoint: 0x2042,
        description: "An asterism (used in typography).",
    },
    "larr": {
        codepoint: 0x2190,
        description: "A left-pointing arrow.",
    },
    "uarr": {
        codepoint: 0x2191,
        description: "An up-pointing arrow.",
    },
    "rarr": {
        codepoint: 0x2192,
        description: "A right-pointing arrow.",
    },
    "darr": {
        codepoint: 0x2193,
        description: "A down-pointing arrow.",
    },
    "harr": {
        codepoint: 0x2194,
        description: "An arrow pointing left and right.",
    },
    "varr": {
        codepoint: 0x2195,
        description: "An arrow pointing up and down.",
    },
    "nwarr": {
        codepoint: 0x2196,
        description: "An arrow pointing to the top left.",
    },
    "nearr": {
        codepoint: 0x2197,
        description: "An arrow pointing to the top right.",
    },
    "searr": {
        codepoint: 0x2198,
        description: "An arrow pointing to the bottom right.",
    },
    "swarr": {
        codepoint: 0x2199,
        description: "An arrow pointing to the bottom left.",
    },
    "rArr": {
        codepoint: 0x21D2,
        description: "A right-pointing double arrow.",
    },
    "hArr": {
        codepoint: 0x21D4,
        description: "A double arrow pointing left and right.",
    },
    "infin": {
        codepoint: 0x221E,
        description: "The infinity symbol.",
    },
    "blk12": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "": {
        codepoint: 0x,
        description: "",
    },
    "fwsp": {
        codepoint: 0x3000,
        description: "A fullwidth space.",
    },
    "zwsp": {
        codepoint: 0x200B,
        description: "A zero-width space.",
    }
}