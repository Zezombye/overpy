const fs = require("fs");
 
//import overpy files
overpyFiles = [
	"utils/other.js",

	"doc/actions.js",
	"doc/values.js",
	"doc/maps.js",
	"doc/heroes.js",
	"doc/gamemodes.js",
	"doc/constants.js",
	"doc/keywords.js",
	"doc/customGameSettings.js",
	"doc/opy/functions.js",
	"doc/opy/memberFunctions.js",
	"doc/opy/preprocessing.js",

	"utils/compilation.js",
	"utils/decompilation.js",
	"utils/file.js",
	"utils/logging.js",
	"utils/optimization.js",
	"utils/strings.js",
	"utils/translation.js",
	"utils/varNames.js",
	
	"obfuscation.js",
	"globalVars.js",
	"decompiler.js",
	"tokenizer.js",
	"compiler.js",
	"doc/stringKw.js",

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