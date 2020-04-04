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

function parseAstRules(rules) {
    for (var rule of rules) {

        fileStack = rule.fileStack;

        if (rule.name === "__rule__") {
            if (rule.event === undefined) {
                rule.event = "global";
            }
            if (rule.event === "global") {
                if (rule.eventTeam !== undefined || rule.eventPlayer !== undefined) {
                    error("Cannot declare event team or event player with event type '"+rule.event+"'");
                }
            } else {
                if (rule.eventTeam === undefined) {
                    rule.eventTeam = "all";
                }
                if (rule.eventPlayer === undefined) {
                    rule.eventPlayer = "all";
                }
            }
            currentRuleEvent = rule.event;
            
        } else if (rule.name === "__def__") {
            currentRuleEvent = "__subroutine__";

        } else {
            error("Unexpected function '"+rule.name+"' outside a rule");
        }
        for (var child of rule.children) {
            child = parseAst(child);
        }
    }
    return rules;
}

function parseAst(content) {
    for (var arg of content.args) {
        arg = parseAst(arg);
    }

    //Skip if it's a literal or a constant
    if (["StringLiteral", "NumberLiteral", "GlobalVariable", "PlayerVariable", "Subroutine", "HeroLiteral", "MapLiteral", "GamemodeLiteral"].concat(Object.keys(constantValues)).includes(content.type)) {
        return content;
    }

    fileStack = content.fileStack;

    //Argument check
    if (content.name in funcKw) {
        var nbExpectedArgs = (funcKw[content.name].args === null ? 0 : funcKw[content.name].args.length);
        if (content.args.length !== nbExpectedArgs) {
            error("Function '"+content.name+"' takes "+nbExpectedArgs+" arguments, received "+content.args.length);
        }

        //Type check
        for (var i = 0; i < content.args.length; i++) {
            if (!isTypeSuitable(funcKw[content.name].args[i].type, content.args[i].type)) {
                warn("w_type_check", getTypeCheckFailedMessage(content, i, funcKw[content.name].args[i].type, content.args[i]));
            }
        }

    } else {
        error("Unknown function '"+content.name+"'");
    }

    return content;
}