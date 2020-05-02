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

var obfuscationMappings = {};
for (var char of ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~') {
	obfuscationMappings[char] = String.fromCodePoint(char.charCodeAt(0)+0xE0000);
}

var obfuscatedVarNames = shuffleArray(Array(4096).fill().map((e,i)=>i).map(x => x.toString(2).padStart(12, "0").replace(/0/g, "I").replace(/1/g, "l"))).slice(0,128);

function addEmptyRules(rules) {
	if (!compiledCustomGameSettings) {
		error("Cannot use obfuscation without custom game settings declared");
	}
	var nbEmptyRules = 2500;
	var nbTotalRules = nbEmptyRules + rules.length;
	var emptyRule = tows("__rule__", ruleKw)+'(""){'+tows("__event__", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	var result = "";
	result += tows("__rule__", ruleKw)+'("This program has been obfuscated by OverPy (https://github.com/Zezombye/OverPy)."){'+tows("__event__", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	result += tows("__rule__", ruleKw)+'("Please respect its author\'s wishes and do not edit it. Thanks!"){'+tows("__event__", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	var putEmptyRuleArray = shuffleArray(Array(nbEmptyRules).fill(true).concat(Array(rules.length).fill(false)));
	var ruleIndex = 0;
	for (var i = 0; i < nbTotalRules; i++) {
		if (putEmptyRuleArray[i]) {
			result += emptyRule;
		} else {
			result += rules[ruleIndex];
			ruleIndex++;
		}
	}
	return result;

}

var allHeroes = ["REAPER","TRACER","MERCY","HANZO","TORBJORN","REINHARDT","PHARAH","WINSTON","WIDOWMAKER","BASTION","SYMMETRA","ZENYATTA","GENJI","ROADHOG","MCCREE","JUNKRAT","ZARYA","SOLDIER","LUCIO","DVA","MEI","SOMBRA","DOOMFIST","ANA","ORISA","BRIGITTE","MOIRA","HAMMOND","ASHE","ECHO","BAPTISTE","SIGMA"]

var allTankHeroes = ["REINHARDT","WINSTON","ROADHOG","ZARYA","DVA","ORISA","HAMMOND","SIGMA"]
var allDamageHeroes = ["REAPER","TRACER","HANZO","TORBJORN","PHARAH","WIDOWMAKER","BASTION","SYMMETRA","GENJI","MCCREE","JUNKRAT","SOLDIER","MEI","SOMBRA","DOOMFIST","ASHE","ECHO"]
var allSupportHeroes = ["MERCY","ZENYATTA","LUCIO","ANA","BRIGITTE","MOIRA","BAPTISTE"]
