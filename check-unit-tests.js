const fs = require("fs");
const overpy = require("./bot/overpy.js");
const { EDESTADDRREQ } = require("constants");
const { formatWithOptions } = require("util");

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
