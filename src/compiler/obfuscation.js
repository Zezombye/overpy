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

function addObfuscationRules(rules) {
	if (!compiledCustomGameSettings) {
		error("Cannot use obfuscation without custom game settings declared");
	}
	var nbEmptyRules = 2500;
	var nbTotalRules = nbEmptyRules + rules.length;
	var emptyRule = tows("__rule__", ruleKw)+'(""){'+tows("__event__", ruleKw)+"{"+tows("global", eventKw)+";}}\n";
	var result = "";
	result += `
${tows("__rule__", ruleKw)}("This program has been obfuscated by OverPy (github.com/Zezombye/OverPy). Please respect its author's wishes and do not edit it. Thanks!") {
	${tows("__event__", ruleKw)} {
		${tows("global", eventKw)};
	}
	${tows("__actions__", ruleKw)} {
		${obfuscationSettings.obfuscateInspector ? tows("disableInspector", actionKw)+";" : ""}
		${obfuscationSettings.obfuscateConstants ? astActionToWs(obfuscationConstantsAst, 0) : ""}
	}
}
`;
	var putEmptyRuleArray = shuffleArray(Array(nbEmptyRules).fill(true).concat(Array(rules.length).fill(false)));
	var ruleIndex = 0;
	if (obfuscationSettings.ruleFilling) {
		for (var i = 0; i < nbTotalRules; i++) {
			if (putEmptyRuleArray[i]) {
				result += emptyRule;
			} else {
				result += rules[ruleIndex];
				ruleIndex++;
			}
		}
	} else {
		result += rules.join("");
	}
	return result;

}

//Gather all constants to obfuscate and shuffle them
var constantsToObfuscate = [];
for (var constantType of ["HeroLiteral", "MapLiteral", "GamemodeLiteral", "ButtonLiteral"]) {
	constantsToObfuscate = constantsToObfuscate.concat(Object.keys(constantValues[constantType]).map(x => constantType+x));
}
constantsToObfuscate = shuffleArray(constantsToObfuscate);
//console.log(constantsToObfuscate);

//Create the asts and map them to the index
var constantsToObfuscateAsts = Array(constantsToObfuscate.length);
var obfuscationConstantsMapping = {}

var typeToAstFuncMapping = {
	"HeroLiteral": "__hero__",
	"MapLiteral": "__map__",
	"GamemodeLiteral": "__gamemode__",
	"ButtonLiteral": "__button__",
}
for (var constantType of ["HeroLiteral", "MapLiteral", "GamemodeLiteral", "ButtonLiteral"]) {
	obfuscationConstantsMapping[constantType] = {};

	for (var constant of Object.keys(constantValues[constantType])) {
		var constantIndex = constantsToObfuscate.indexOf(constantType+constant);
		obfuscationConstantsMapping[constantType][constant] = constantIndex+(constantIndex > 0 ? (Math.random()*0.8)-0.4 : 0);
		constantsToObfuscateAsts[constantIndex] = new Ast(typeToAstFuncMapping[constantType], [new Ast(constant, [], [], constantType)]);
	}
}

//console.log(constantsToObfuscateAsts);
var obfuscationConstantsAst = new Ast("__assignTo__", [
	new Ast("__globalVar__", [new Ast("__obfuscationConstants__", [], [], "GlobalVariable")]),
	new Ast("__array__", constantsToObfuscateAsts),
]);
