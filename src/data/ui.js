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

const ruleAttributesDisplayNamesKw =
//begin-json
{
    "event": {
        "en-US": "Event",
    },
    "subroutineName": {
        "en-US": "Subroutine",
    },
    "eventPlayer": {
        "en-US": "Player",
    },
    "eventTeam": {
        "en-US": "Team",
    }
}
//end-json

const workshopUiKw =
//begin-json
{
    "rules": {
        "en-US": "Rules",
    },
    "rule": {
        "en-US": "Rule %1$s",
    },
    "conditions": {
        "en-US": "Conditions",
    },
    "actions": {
        "en-US": "Actions",
    },
    "noConditions": {
        "en-US": "No Conditions",
    },
    "noActions": {
        "en-US": "No Actions",
    },
    "noRules": {
        "en-US": "No Rules",
    },
    "editAction": {
        "en-US": "Edit Action",
    },
    "editCondition": {
        "en-US": "Edit Condition",
    },
    "addAction": {
        "en-US": "Add Action",
    },
    "addCondition": {
        "en-US": "Add Condition",
    },
    "action": {
        "en-US": "Action",
    },
    "cancel": {
        "en-US": "Cancel",
    },
    "ok": {
        "en-US": "OK",
    },
    "deleteActions": {
        "en-US": "Delete (%1$s) |RplAction:Actions;?",
    },
    "deleteConditions": {
        "en-US": "Delete (%1$s) |RplCondition:Conditions;?",
    },
    "deleteRules": {
        "en-US": "Delete (%1$s) |RplRule:Rules;?",
    },
    "editVariableNames": {
        "en-US": "Edit Variable Names",
    },
    "editSubroutineNames": {
        "en-US": "Edit Subroutine Names",
    },
    "editExtensions": {
        "en-US": "Edit Extensions",
    },
    "resetToDefaults": {
        "en-US": "Reset To Defaults",
    },
    "emptyGlobalVarName": {
        "en-US": "Error: Global variable '%1$s' requires a name",
    },
    "invalidGlobalVarName": {
        "en-US": "Error: Global variable '%1$s' contains an invalid name",
    },
    "conflictingGlobalVarName": {
        "en-US": "Error: Global variable '%1$s' conflicts with another variable",
    },
    "tooLongGlobalVarName": {
        "en-US": "Error: Global variable '%1$s' contains a name that is too long",
    },
    "emptyPlayerVarName": {
        "en-US": "Error: Player variable '%1$s' requires a name",
    },
    "invalidPlayerVarName": {
        "en-US": "Error: Player variable '%1$s' contains an invalid name",
    },
    "conflictingPlayerVarName": {
        "en-US": "Error: Player variable '%1$s' conflicts with another variable",
    },
    "tooLongPlayerVarName": {
        "en-US": "Error: Player variable '%1$s' contains a name that is too long",
    },
    "emptySubroutineName": {
        "en-US": "Error: Subroutine '%1$s' requires a name",
    },
    "invalidSubroutineName": {
        "en-US": "Error: Subroutine '%1$s' contains an invalid name",
    },
    "conflictingSubroutineName": {
        "en-US": "Error: Subroutine '%1$s' conflicts with another subroutine",
    },
    "tooLongSubroutineName": {
        "en-US": "Error: Subroutine '%1$s' contains a name that is too long",
    },
    "notEnoughExtensionPoints": {
        "en-US": "Error: Too many Workshop Extension Points spent; please remove one or more Extensions.",
    },
    "extensionPointsAvailable": {
        "en-US": "Extension Points Available",
    },
    "extensionPointsSpent": {
        "en-US": "Extension Points Spent",
    },
    "extensionPointsAvailableDesc": {
        "en-US": "You can gain Extension Points by removing Player Slots or by disabling all non-Workshop Maps",
    },
    "extensionPointsSpentDesc": {
        "en-US": "Extension Points Spent cannot exceed Extension Points Available",
    },
    "scriptDiagnostics": {
        "en-US": "Script Diagnostics",
    },
    "totalElementCount": {
        "en-US": "Total Element Count",
    },
    "totalElementCountDesc": {
        "en-US": "Elements include rules, conditions, actions, and values (up to a max of %1$s)",
    },
}
//end-json
