const fs = require("fs");

//import overpy files
overpyFiles = [
	"globalVars.js",
	"utils.js",
	"overpyDecompiler.js",
	"overpyCompiler.js",
	"actions.js",
	"values.js",
	"constants.js",
	"keywords.js",
	"stringKw.js",
];

var overpyCode = "";
for (file of overpyFiles) {
	overpyCode += fs.readFileSync(process.cwd()+"/../"+file).toString()
}

overpyCode += `
module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
    decompileConditions: decompileConditions,
    compile: compile,
};
`

fs.writeFileSync("./overpy.js", overpyCode);