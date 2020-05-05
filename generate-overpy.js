const fs = require("fs");
 
//import overpy files
overpyFiles = [


"utils/other.js",
"data/opy/constants.js",
"data/opy/internalFunctions.js",
"data/opy/functions.js",
"data/opy/keywords.js",
"data/opy/memberFunctions.js",
"data/opy/preprocessing.js",
"data/actions.js",
"data/values.js",
"data/maps.js",
"data/heroes.js",
"data/gamemodes.js",
"data/constants.js",
"data/other.js",
"data/customGameSettings.js",
"data/opy/annotations.js",
"utils/ast.js",
"utils/types.js",
"utils/compilation.js",
"utils/decompilation.js",
"utils/file.js",
"utils/logging.js",
"utils/optimization.js",
"utils/strings.js",
"utils/translation.js",
"utils/varNames.js",
"utils/tokens.js",
"obfuscation.js",
"globalVars.js",
"tests/decompileTest.js",
"decompiler/workshopToAst.js",
"decompiler/decompiler.js",
"compiler/functions/__add__.js",
"compiler/functions/__append__.js",
"compiler/functions/__button__.js",
"compiler/functions/__del__.js",
"compiler/functions/__dict__.js",
"compiler/functions/__distanceTo__.js",
"compiler/functions/__doWhile__.js",
"compiler/functions/__elif__.js",
"compiler/functions/__else__.js",
"compiler/functions/__for__.js",
"compiler/functions/__format__.js",
"compiler/functions/__if__.js",
"compiler/functions/__negate__.js",
"compiler/functions/__remove__.js",
"compiler/functions/__rule__.js",
"compiler/functions/__skip__.js",
"compiler/functions/__subtract__.js",
"compiler/functions/__switch__.js",
"compiler/functions/__valueInArray__.js",
"compiler/functions/__while__.js",
"compiler/functions/all.js",
"compiler/functions/any.js",
"compiler/functions/break.js",
"compiler/functions/continue.js",
"compiler/functions/print.js",
"compiler/functions/sorted.js",
"compiler/tokenizer.js",
"compiler/astParser.js",
"compiler/astToWorkshop.js",
"compiler/parser.js",
"compiler/compiler.js",
"data/localizedStrings.js",


];

var overpyCode = "";
for (file of overpyFiles) {
	overpyCode += fs.readFileSync(process.cwd()+"/src/"+file).toString()
}

overpyCode += `
module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
	decompileConditions: decompileConditions,
	compile: compile,
	actionKw: actionKw,
	valueFuncKw: valueFuncKw,
	constantValues: constantValues,
	annotations: opyAnnotations,
	eventKw: eventKw,
	eventTeamKw: eventTeamKw,
	eventSlotKw: eventSlotKw,
	eventPlayerKw: eventPlayerKw,
	ruleKw: ruleKw,
	stringKw: stringKw,
	heroKw: heroKw,
	opyFuncs: opyFuncs,
	opyMemberFuncs: opyMemberFuncs,
	opyKeywords: opyKeywords,
	currentLanguage: currentLanguage,
	macros: macros,
	resetGlobalVariables: resetGlobalVariables,
	preprocessingDirectives: preprocessingDirectives,
	typeToString: typeToString,
};
`

fs.writeFileSync("./VS Code Extension/overpy.js", overpyCode);
fs.writeFileSync("./bot/overpy.js", overpyCode);