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
	"decompiler.js",
	"functions/__add__.js",
	"functions/__append__.js",
	"functions/__button__.js",
	"functions/__del__.js",
	"functions/__dict__.js",
	"functions/__distanceTo__.js",
	"functions/__doWhile__.js",
	"functions/__elif__.js",
	"functions/__else__.js",
	"functions/__for__.js",
	"functions/__format__.js",
	"functions/__if__.js",
	"functions/__negate__.js",
	"functions/__remove__.js",
	"functions/__rule__.js",
	"functions/__skip__.js",
	"functions/__subtract__.js",
	"functions/__switch__.js",
	"functions/__valueInArray__.js",
	"functions/__while__.js",
	"functions/all.js",
	"functions/any.js",
	"functions/break.js",
	"functions/continue.js",
	"functions/print.js",
	"functions/sorted.js",
	"tokenizer.js",
	"astParser.js",
	"astToWorkshop.js",
	"parser.js",
	"compiler.js",
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
	eventKw: eventKw,
	eventTeamKw: eventTeamKw,
	eventSlotKw: eventSlotKw,
	eventPlayerKw: eventPlayerKw,
	ruleKw: ruleKw,
	stringKw: stringKw,
	heroKw: heroKw,
	opyFuncs: opyFuncs,
	opyMemberFuncs: opyMemberFuncs,
	currentLanguage: currentLanguage,
	macros: macros,
	resetGlobalVariables: resetGlobalVariables,
	preprocessingDirectives: preprocessingDirectives,

};
`

fs.writeFileSync("./VS Code Extension/overpy.js", overpyCode);
fs.writeFileSync("./bot/overpy.js", overpyCode);