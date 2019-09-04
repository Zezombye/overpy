const fs = require("fs");

//import overpy files
overpyFiles = [
	"globalVars.js",
	"utils.js",
	"overpyDecompiler.js",
	"overpyCompiler.js",
	"doc/actions.js",
	"doc/values.js",
	"doc/constants.js",
	"doc/keywords.js",
	"doc/stringKw.js",
	"doc/specialFuncDoc.js",
];

var overpyCode = "";
for (file of overpyFiles) {
	overpyCode += fs.readFileSync(process.cwd()+"/../src/"+file).toString()
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
	ruleKw: ruleKw,
	stringKw: stringKw,
	specialFuncs: specialFuncs,
	specialMemberFuncs: specialMemberFuncs,

};
`

fs.writeFileSync("./overpy.js", overpyCode);