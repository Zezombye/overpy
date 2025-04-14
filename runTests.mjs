// @ts-check
"use strict";

import { readdirSync, readFileSync, existsSync, writeFileSync } from "fs";
import { Diff } from "diff";
import colors from "colors";
import * as readline from "readline";
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


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
/*CustomDiff.removeEmpty = (array) => {
    return array.map((line) => {
        if (line.trim() === "") {
            return "";
        }
        return line;
    });
};*/

function getInput(str) {
    return new Promise(resolve => {
        rl.question(str, (input) => {
            resolve(input);
        });
    });
}

const compileTestsFolder = "./src/tests/";
const compileExpectedResultsFolder = "./src/tests/results/";

const files = readdirSync(compileTestsFolder);
const opyFiles = files.filter((file) => file.endsWith(".opy"));
console.log(colors.bold(`Running ${opyFiles.length} compilation tests`));

function displayDiff(differences) {

    //Convert to object, splitting the lines
    differences = differences.map((diff) => diff.value.replace(/\n$/, "").split("\n").map(line => ({added: diff.added, removed: diff.removed, value: line+"\n"}))).flat();


    //Remove consecutive unchanged lines, unless they are within a distance of 5 from a change
    const filteredDifferences = [];
    let nbContextLines = 2;
    let lineIdx = 1;
    for (let i = 0; i < differences.length; i++) {
        const diffLine = differences[i];
        if (diffLine.added || diffLine.removed) {
            filteredDifferences.push({type: diffLine.added ? "added" : "removed", line: diffLine.value, lineNb: lineIdx});
        } else {
            let isLineAdded = false;
            for (let j = i-nbContextLines; j < i + nbContextLines+1; j++) {
                if (j < 0 || j >= differences.length) continue;
                const contextDiffLine = differences[j];
                if (contextDiffLine.added || contextDiffLine.removed) {
                    filteredDifferences.push({type: "unchanged", line: diffLine.value, lineNb: lineIdx});
                    isLineAdded = true;
                    break;
                }
            }
            if (!isLineAdded && filteredDifferences.length > 0 && filteredDifferences[filteredDifferences.length - 1].type !== "ellipsis") {
                filteredDifferences.push({type: "ellipsis"});
            }
        }
        if (!diffLine.added) {
            lineIdx++;
        }
    }
    for (let diff of filteredDifferences) {
        if (diff.type === "ellipsis") {
            process.stdout.write(colors.grey("\n------------------------------------------------\n\n"));
        } else if (diff.type === "unchanged") {
            process.stdout.write((""+diff.lineNb).padStart(4, " ") +". " + colors.grey("  "+diff.line));
        } else if (diff.type === "added") {
            process.stdout.write("      " + colors.green("+ "+diff.line));
        } else if (diff.type === "removed") {
            process.stdout.write((""+diff.lineNb).padStart(4, " ") +". " + colors.red("- "+diff.line));
        }
    };
}

for (let file of opyFiles) {
    console.log("Running test " + file);

    const inputContent = readFileSync(compileTestsFolder + file, "utf8");
    let compileResult;
    try {
        await readyPromise;
        compileResult = (await compile(inputContent, "en-US", compileTestsFolder, file)).result;
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
        displayDiff(differences);


        let answer = await getInput("Continue? (y/n): ");
        if (answer.toLowerCase() !== "y") {
            rl.close();
            process.exit(1);
        } else {
            writeFileSync(resultFilePath, compileResult);
        }
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
        displayDiff(differences);

        let answer = await getInput("Continue? (y/n): ");
        if (answer.toLowerCase() !== "y") {
            rl.close();
            process.exit(1);
        } else {
            writeFileSync(resultFilePath, decompileResult);
        }

    }
}

console.log(colors.bold(colors.green("All tests passed")));
rl.close();
