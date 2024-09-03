// @ts-check
"use strict";

import { readdirSync, readFileSync, existsSync, writeFileSync } from "fs";
import { Diff } from "diff";
import colors from "colors";

// @ts-ignore - Standalone OverPy conditionally exports when run in Node
import { compile, decompileAllRules, readyPromise } from "./out/overpy_standalone.js";

// Copy of the diffLines function from the 'diff' package,
// but with the ability to ignore whitespace-only lines
const CustomDiff = new Diff();
CustomDiff.tokenize = function (value, options) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, "\n");

    let retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/);

    // Ignore the final empty token that occurs if the string ends with a new line
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
        linesAndNewlines.pop();
    }

    // Merge the content and line separators into single tokens
    for (let i = 0; i < linesAndNewlines.length; i++) {
        let line = linesAndNewlines[i];

        if (i % 2) {
            retLines[retLines.length - 1] += line;
        } else {
            retLines.push(line);
        }
    }

    return retLines;
};
CustomDiff.removeEmpty = (array) => {
    return array.map((line) => {
        if (line.trim() === "") {
            return "";
        }
        return line;
    });
};

const compileTestsFolder = "./src/tests/";
const compileExpectedResultsFolder = "./src/tests/results/";

const files = readdirSync(compileTestsFolder);
const opyFiles = files.filter((file) => file.endsWith(".opy"));
console.log(colors.bold(`Running ${opyFiles.length} compilation tests`));
for (let file of opyFiles) {
    console.log("Running test " + file);

    const inputContent = readFileSync(compileTestsFolder + file, "utf8");
    let compileResult;
    try {
        await readyPromise;
        compileResult = (await compile(inputContent)).result;
    } catch (error) {
        console.error(`Test ${file} failed:`);
        console.error(error);
        process.exit(1);
    }
    const resultFilePath = compileExpectedResultsFolder + file.replace(".opy", ".txt");

    if (!existsSync(resultFilePath)) {
        console.log(`No expected output for ${file}, writing compile result to ${compileExpectedResultsFolder + file.replace(".opy", ".txt")}`);
        writeFileSync(resultFilePath, compileResult);
        continue;
    }
    const expectedOutput = readFileSync(resultFilePath, "utf8");
    // @ts-ignore
    const differences = CustomDiff.diff(expectedOutput, compileResult);
    const hasDifferences = differences.some((diff) => diff.added || diff.removed);

    if (hasDifferences) {
        console.error(`Test ${file} failed:`);
        console.log("Differences found:");
        differences.forEach((diff) => {
            let diffString = diff.value;
            if (diff.added) diffString = `+${diffString}`;
            else if (diff.removed) diffString = `-${diffString}`;
            else diffString = ` ${diffString}`;

            const color = diff.added ? "green" : diff.removed ? "red" : "grey";
            process.stdout.write(colors[color](diffString));
        });
        process.exit(1);
    }
}

const decompileTestsFolder = "./src/tests/decompiler/";
const decompilerExpectedResultsFolder = "./src/tests/decompiler/results/";

const decompilerFiles = readdirSync(decompileTestsFolder);
const decompilerFilesFiltered = decompilerFiles.filter((file) => file.endsWith(".txt"));

console.log(colors.bold(`Running ${decompilerFilesFiltered.length} decompilation tests`));
for (let inputFile of decompilerFilesFiltered) {
    console.log("Running test " + inputFile);

    const inputContent = readFileSync(decompileTestsFolder + inputFile, "utf8");
    let decompileResult;
    try {
        await readyPromise;
        decompileResult = await decompileAllRules(inputContent);
    } catch (error) {
        console.error(`Test ${inputFile} failed:`);
        console.error(error);
        process.exit(1);
    }
    const resultFilePath = decompilerExpectedResultsFolder + inputFile.replace(".txt", ".opy");

    if (!existsSync(resultFilePath)) {
        console.log(`No expected output for ${inputFile}, writing decompile result to ${decompilerExpectedResultsFolder + inputFile}`);
        writeFileSync(resultFilePath, decompileResult);
        continue;
    }
    const expectedOutput = readFileSync(resultFilePath, "utf8");
    // @ts-ignore
    const differences = CustomDiff.diff(expectedOutput, decompileResult);
    const hasDifferences = differences.some((diff) => diff.added || diff.removed);

    if (hasDifferences) {
        console.error(`Test ${inputFile} failed:`);
        console.log("Differences found:");
        differences.forEach((diff) => {
            let diffString = diff.value;
            if (diff.added) diffString = `+${diffString}`;
            else if (diff.removed) diffString = `-${diffString}`;
            else diffString = ` ${diffString}`;

            const color = diff.added ? "green" : diff.removed ? "red" : "grey";
            process.stdout.write(colors[color](diffString));
        });
        process.exit(1);
    }
}

console.log(colors.bold(colors.green("All tests passed")));
