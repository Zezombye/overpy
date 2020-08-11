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
"globalVars.js",
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
"decompiler/decompileTest.js",
"decompiler/workshopToAst.js",
"decompiler/astToOpy.js",
"decompiler/decompiler.js",
"compiler/obfuscation.js",
"compiler/functions/__add__.js",
"compiler/functions/__and__.js",
"compiler/functions/__append__.js",
"compiler/functions/__array__.js",
"compiler/functions/__arraySlice__.js",
"compiler/functions/__assignTo__.js",
"compiler/functions/__button__.js",
"compiler/functions/__del__.js",
"compiler/functions/__dict__.js",
"compiler/functions/__distanceTo__.js",
"compiler/functions/__divide__.js",
"compiler/functions/__doWhile__.js",
"compiler/functions/__elif__.js",
"compiler/functions/__else__.js",
"compiler/functions/__equals__.js",
"compiler/functions/__for__.js",
"compiler/functions/__format__.js",
"compiler/functions/__filteredArray__.js",
"compiler/functions/__gamemode__.js",
"compiler/functions/__greaterThan__.js",
"compiler/functions/__greaterThanOrEquals__.js",
"compiler/functions/__hero__.js",
"compiler/functions/__if__.js",
"compiler/functions/__ifThenElse__.js",
"compiler/functions/__indexOfArrayValue__.js",
"compiler/functions/__inequals__.js",
"compiler/functions/__lastOf__.js",
"compiler/functions/__lessThan__.js",
"compiler/functions/__lessThanOrEquals__.js",
"compiler/functions/__map__.js",
"compiler/functions/__mappedArray__.js",
"compiler/functions/__modulo__.js",
"compiler/functions/__multiply__.js",
"compiler/functions/__negate__.js",
"compiler/functions/__number__.js",
"compiler/functions/__not__.js",
"compiler/functions/__or__.js",
"compiler/functions/__raiseToPower__.js",
"compiler/functions/__remove__.js",
"compiler/functions/__rule__.js",
"compiler/functions/__skip__.js",
"compiler/functions/__subtract__.js",
"compiler/functions/__switch__.js",
"compiler/functions/__valueInArray__.js",
"compiler/functions/__while__.js",
"compiler/functions/__xComponentOf__.js",
"compiler/functions/__yComponentOf__.js",
"compiler/functions/__zComponentOf__.js",
"compiler/functions/abs.js",
"compiler/functions/acos.js",
"compiler/functions/acosDeg.js",
"compiler/functions/all.js",
"compiler/functions/any.js",
"compiler/functions/asin.js",
"compiler/functions/asinDeg.js",
"compiler/functions/atan2.js",
"compiler/functions/atan2Deg.js",
"compiler/functions/break.js",
"compiler/functions/ceil.js",
"compiler/functions/continue.js",
"compiler/functions/cos.js",
"compiler/functions/cosDeg.js",
"compiler/functions/createBeam.js",
"compiler/functions/createWorkshopSetting.js",
"compiler/functions/crossProduct.js",
"compiler/functions/directionTowards.js",
"compiler/functions/disableInspector.js",
"compiler/functions/distance.js",
"compiler/functions/dotProduct.js",
"compiler/functions/enableInspector.js",
"compiler/functions/floor.js",
"compiler/functions/getAllPlayers.js",
"compiler/functions/getOppositeTeam.js",
"compiler/functions/len.js",
"compiler/functions/lineIntersectsSphere.js",
"compiler/functions/log.js",
"compiler/functions/max.js",
"compiler/functions/min.js",
"compiler/functions/normalize.js",
"compiler/functions/print.js",
"compiler/functions/round.js",
"compiler/functions/sin.js",
"compiler/functions/sinDeg.js",
"compiler/functions/sorted.js",
"compiler/functions/sqrt.js",
"compiler/functions/tan.js",
"compiler/functions/tanDeg.js",
"compiler/functions/vect.js",
"compiler/functions/vectorTowards.js",
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

//Generate functions.md

const overpy = require("./bot/overpy.js");

var functionsMd = `

Some functions (such as operators) have transformations applied to them. If you cannot find the function here, then it is in the [special functions page](https://github.com/Zezombye/overpy/wiki/Functions).

## Normal functions

Workshop function | OverPy function
----------------- | ---------------
`;

var allFunctions = Object.assign({}, overpy.actionKw, overpy.valueFuncKw);
var normalFunctions = Object.keys(allFunctions).filter(x => !x.startsWith("_")).sort((a,b) => allFunctions[a]["en-US"].localeCompare(allFunctions[b]["en-US"]));

for (var func of normalFunctions) {
	functionsMd += allFunctions[func]["en-US"]+" | "+func;
	if (allFunctions[func].args !== null) {
		functionsMd += "()";
	}
	functionsMd += "\n";
}

functionsMd += `

## Player functions

These functions take a player as first argument. The first argument is removed and put before the function.

Example: \`Teleport(Event Player, Vector(1,2,3))\` is written as \`eventPlayer.teleport(vect(1,2,3))\`.

Workshop function | OverPy function
----------------- | ---------------
`

var playerFunctions = Object.keys(allFunctions).filter(x => x.startsWith("_&")).sort((a,b) => allFunctions[a]["en-US"].localeCompare(allFunctions[b]["en-US"]));
for (var func of playerFunctions) {
	functionsMd += allFunctions[func]["en-US"]+" | \\<player\\>."+func.substring(2)+"()";
	functionsMd += "\n";
}

fs.writeFileSync("./FUNCTIONS.md", functionsMd);

//Run the unit tests
var testsDir = process.cwd()+"/src/tests/";
var unitTestFiles = fs.readdirSync(testsDir);

for (var unitTestFile of unitTestFiles) {
    if (fs.statSync(testsDir+unitTestFile).isDirectory()) {
        continue;
    }
    console.log("Checking unit test '"+unitTestFile+"'");
    var unitTestContent = fs.readFileSync(testsDir + unitTestFile).toString();
    var output = overpy.compile(unitTestContent).result;

    var outputFile = testsDir+"/results/"+unitTestFile.replace(".opy", ".txt");

    if (fs.existsSync(outputFile)) {
        var outputFileContent = fs.readFileSync(outputFile).toString();
        if (outputFileContent !== output) {
            console.error("Error: output for unit test '"+unitTestFile+"' did not match result");
            console.error("Output gotten:")
            console.error(output);
            process.exit();
        }
    } else {
        console.log("Result for unit test '"+unitTestFile+"' does not exist, creating it.");
        fs.writeFileSync(outputFile, output);
    }
}
