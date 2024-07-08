// @ts-check
"use strict";

import { readdirSync, readFileSync, existsSync, writeFileSync } from "fs";
import { diffLines } from "diff";
import colors from "colors";

// @ts-ignore - Standalone OverPy conditionally exports when run in Node
import { compile, readyPromise } from "./out/overpy_standalone.js";

const testsFolder = "./src/tests/";
const resultsFolder = "./src/tests/results/";

const files = readdirSync(testsFolder);
const opyFiles = files.filter(file => file.endsWith(".opy"));
for (let file of opyFiles) {
  console.log("Running test " + file);

  const inputContent = readFileSync(testsFolder + file, "utf8");
  let compileResult;
  try {
    await readyPromise;
    compileResult = (await compile(inputContent)).result;
  } catch (error) {
    console.error(`Test ${file} failed:`);
    console.error(error);
    process.exit(1);
  }
  const resultFilePath = resultsFolder + file.replace(".opy", ".txt");

  if (!existsSync(resultFilePath)) {
    console.log(`No expected output for ${file}, writing compile result to ${resultsFolder + file.replace(".opy", ".txt")}`);
    writeFileSync(resultFilePath, compileResult);
    continue;
  }
  const expectedOutput = readFileSync(resultFilePath, "utf8");
  const differences = diffLines(expectedOutput, compileResult);
  const hasDifferences = differences.some(diff => diff.added || diff.removed);

  if (hasDifferences) {
    console.error(`Test ${file} failed:`);
    console.log("Differences found:");
    differences.forEach(diff => {
      const color = diff.added ? "green" : diff.removed ? "red" : "grey";
      process.stdout.write(colors[color](diff.value));
    });
    process.exit(1);
  }
}
