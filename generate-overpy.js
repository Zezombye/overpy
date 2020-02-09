const fs = require("fs");

//import overpy files
overpyFiles = [
	"doc/actions.js",
	"doc/values.js",
	"doc/constants.js",
	"doc/keywords.js",
	"obfuscation.js",
	"globalVars.js",
	"utils/compilation.js",
	"utils/decompilation.js",
	"utils/file.js",
	"utils/logging.js",
	"utils/optimization.js",
	"utils/other.js",
	"utils/strings.js",
	"utils/translation.js",
	"utils/varNames.js",
	"decompiler.js",
	"tokenizer.js",
	"compiler.js",
	"doc/stringKw.js",
	"doc/specialFuncDoc.js",
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
	specialFuncs: specialFuncs,
	specialMemberFuncs: specialMemberFuncs,
	currentLanguage: currentLanguage,
	macros: macros,
	resetGlobalVariables: resetGlobalVariables,
	preprocessingDirectives: preprocessingDirectives,

};
`

fs.writeFileSync("./VS Code Extension/overpy.js", overpyCode);
fs.writeFileSync("./bot/overpy.js", overpyCode);