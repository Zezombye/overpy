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

const opyAnnotations = {
    "@Name": {
        "description": "For subroutines, specifies the name of the rule.",
        args: [{
            "name": "NAME",
            "description": "A string literal containing the name of the rule."
        }]
    },
    "@Event": {
        "description": "Defines the event type for the current rule. If omitted, default to `global`. Not applicable for subroutines.",
        args: [{
            "name": "TYPE",
            "description": "The type of the event.",
            "values": Object.keys(eventKw),
        }]
    },
    "@Team": {
        "description": "Defines which team the current rule applies for. If omitted, defaults to `all`. Not applicable for subroutines.",
        args: [{
            "name": "TEAM",
            "description": "The team of the event.",
            "values": Object.keys(eventTeamKw),
        }]
    },
    "@Slot": {
        "description": "Defines which slot the current rule applies for. If omitted, defaults to all slots. Cannot be used with `@Hero`. Not applicable for subroutines.",
        args: [{
            "name": "SLOT",
            "description": "The slot of the event.",
            "values": Object.keys(eventSlotKw),
        }]
    },
    "@Hero": {
        "description": "Defines which hero the current rule applies for. If omitted, defaults to all heroes. Cannot be used with `@Slot`. Not applicable for subroutines.",
        args: [{
            "name": "HERO",
            "description": "The hero of the event.",
            "values": Object.keys(heroKw).map(x => x.toLowerCase()),
        }]
    },
    "@Condition": {
        "description": "Specifies a condition that must be fulfilled for the rule to be run. Not applicable for subroutines.",
        args: [{
            "name": "CONDITION",
            "description": "The condition that must be fulfilled.",
        }]
    },
    "@SuppressWarnings": {
        "description": "Suppresses the specified warnings within the rule. Warnings must be separated by spaces.",
        args: [],
    },
    "@Disabled": {
        "description": "Generates the rule as disabled.",
        args: [],
    },
    "@Delimiter": {
        "description": "Specifies that the rule is a delimiter for use in the workshop UI. As such, it will not be optimized out.",
        args: [],
    }
}