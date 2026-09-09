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
import { eventKw, eventTeamKw, eventSlotKw } from "../other";
import { heroKw } from "../heroes";

export const opyAnnotations: Record<string, {
    description: import("../../types").LocalizableString,
    args: Array<{
        name: string,
        description: import("../../types").LocalizableString,
        values?: string[]
    }>
}> = {
    "@Name": {
        "description": { "en-US": "For subroutines, specifies the name of the rule." },
        args: [{
            "name": "name",
            "description": { "en-US": "A string literal containing the name of the rule." }
        }]
    },
    "@Event": {
        "description": { "en-US": "Defines the event type for the current rule. If omitted, default to `global`. Not applicable for subroutines." },
        args: [{
            "name": "type",
            "description": { "en-US": "The type of the event." },
            "values": Object.keys(eventKw),
        }]
    },
    "@Team": {
        "description": { "en-US": "Defines which team the current rule applies for. If omitted, defaults to `all`. Not applicable for subroutines." },
        args: [{
            "name": "team",
            "description": { "en-US": "The team of the event." },
            "values": Object.keys(eventTeamKw),
        }]
    },
    "@Slot": {
        "description": { "en-US": "Defines which slot the current rule applies for. If omitted, defaults to all slots. Cannot be used with `@Hero`. Not applicable for subroutines." },
        args: [{
            "name": "slot",
            "description": { "en-US": "The slot of the event." },
            "values": Object.keys(eventSlotKw),
        }]
    },
    "@Hero": {
        "description": { "en-US": "Defines which hero the current rule applies for. If omitted, defaults to all heroes. Cannot be used with `@Slot`. Not applicable for subroutines." },
        args: [{
            "name": "hero",
            "description": { "en-US": "The hero of the event." },
            "values": Object.keys(heroKw),
        }]
    },
    "@Condition": {
        "description": { "en-US": "Specifies a condition that must be fulfilled for the rule to be run. Not applicable for subroutines." },
        args: [{
            "name": "condition",
            "description": { "en-US": "The condition that must be fulfilled." },
        }]
    },
    "@SuppressWarnings": {
        "description": { "en-US": "Suppresses the specified warnings within the rule. Warnings must be separated by spaces." },
        args: [],
    },
    "@Disabled": {
        "description": { "en-US": "Generates the rule as disabled." },
        args: [],
    },
    "@Delimiter": {
        "description": { "en-US": "Specifies that the rule is a delimiter for use in the workshop UI. As such, it will not be optimized out." },
        args: [],
    },
    "@NewPage": {
        "description": { "en-US": "Forces the rule to be on a new page. Pages are maximum 100 rules; note that each rule costs 1 element. You can specify a string argument that will be displayed on each of the filler rules." },
        args: [],
    }
};
