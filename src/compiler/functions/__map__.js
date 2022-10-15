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

astParsingFunctions.__map__ = function(content) {

    const mapIds = {
        BLACK_FOREST_WINTER: 2147,
        BLIZZ_WORLD_WINTER: 1228,
        BUSAN_DOWNTOWN_LNY: 3206,
        BUSAN_SANCTUARY_LNY: -6860,
        CHATEAU_GUILLARD_HALLOWEEN: 3439,
        EICHENWALDE_HALLOWEEN: 565,
        HANAMURA_WINTER: 1848,
        ILIOS_LIGHTHOUSE: 1459,
        ILIOS_RUINS: 8669,
        ILIOS_WELL: -2957,
        KINGS_ROW_WINTER: 742,
        LIJIANG_CONTROL_CENTER_LNY: 28714,
        LIJIANG_GARDEN_LNY: 4714,
        LIJIANG_NIGHT_MARKET_LNY: -1429,
        LIJIANG_TOWER_LNY: 3676,
        NEPAL_SANCTUM: -11860,
        NEPAL_SHRINE: 1362,
        NEPAL_VILLAGE: -9677,
        OASIS_CITY_CENTER: 6920,
        OASIS_GARDENS: 2159,
        OASIS_UNIVERSITY: 345,
        WORKSHOP_EXPANSE_NIGHT: 96,
        WORKSHOP_ISLAND_NIGHT: 196,
    }

    if (obfuscationSettings.obfuscateConstants) {
        return obfuscateConstant("MapLiteral", content);
    } else if (content.args[0].name in mapIds) {
        return getAstForNumber(mapIds[content.args[0].name]);
    } else {
        return content;
    }
}
