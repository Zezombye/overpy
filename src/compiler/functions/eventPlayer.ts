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

import { currentRuleEvent, subroutines } from "../../globalVars";
import {Subroutine} from "../../types";
import { astParsingFunctions } from "../../utils/ast";
import { error, warn } from "../../utils/logging";
import {getRuleEventCategories} from "../../utils/other";

//Generic function for all the event-related values
astParsingFunctions.eventPlayer = function (content) {

    let categories = {
        eventPlayer: ["player"],

        attacker: ["damage"],
        victim: ["damage"],
        eventDamage: ["damage"],
        eventWasEnvironment: ["damage"],

        healer: ["healing"],
        healee: ["healing"],
        eventHealing: ["healing"],
        eventWasHealthPack: ["healing"],

        eventWasCriticalHit: ["damageOrHealing"],
        eventAbility: ["damageOrHealing"],
        eventDirection: ["damageOrHealing"],
    }[content.name];

    let ruleEventCategories: string[] | undefined = getRuleEventCategories(currentRuleEvent);

    if (currentRuleEvent === "__subroutine__") {
        let parent = content.parent;
        while (parent?.parent) {
            parent = parent.parent;
        }
    
        if (parent?.name === "__rule__") {
            if (parent.ruleAttributes?.subroutineName) {
                let subroutine: Subroutine = subroutines.find((x) => x.name === parent.ruleAttributes?.subroutineName)!;
                if (categories?.includes("player")) {
                    subroutine.hasEventPlayerVars = true;
                }
                if (categories?.includes("damage")) {
                    subroutine.hasEventDamageVars = true;
                }
                if (categories?.includes("healing")) {
                    subroutine.hasEventHealingVars = true;
                }
                if (categories?.includes("damageOrHealing")) {
                    subroutine.hasEventDamageOrHealingVars = true;
                }
            }
        }
    } else {
        if (ruleEventCategories && categories && !categories.some(c => ruleEventCategories.includes(c))) {
            if (["eventPlayer", "attacker", "victim", "healer", "healee"].includes(content.name)) {
                error("Cannot use '"+content.name+"' with rule event '"+currentRuleEvent+"'");
            } else {
                warn("w_mismatched_event", "Cannot use '"+content.name+"' with rule event '"+currentRuleEvent+"'");
            }
        }
    }
    return content;
};
