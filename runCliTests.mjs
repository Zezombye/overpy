// @ts-check
"use strict";

import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import colors from "colors";

const cliPath = "./out/overpy_cli.js";
const nodePath = process.execPath;

function runCli(args, options = {}) {
    return spawnSync(nodePath, [cliPath, ...args], {
        cwd: process.cwd(),
        encoding: "utf8",
        ...options,
    });
}

function runCliText(args, options = {}) {
    return execFileSync(nodePath, [cliPath, ...args], {
        cwd: process.cwd(),
        encoding: "utf8",
        ...options,
    });
}

function assertSuccess(result, context) {
    assert.equal(result.status, 0, `${context} should succeed. stderr:\n${result.stderr}`);
}

const tmpDir = mkdtempSync(join(tmpdir(), "overpy-cli-test-"));

console.log("Running CLI tests...");

// --help
{
    const output = runCliText(["--help"]);
    assert.ok(output.includes("OverPy CLI"), "--help should print CLI title");
    assert.ok(output.includes("Usage:"), "--help should include usage");
}

// --version
{
    const output = runCliText(["--version"]).trim();
    const pkgVersion = JSON.parse(readFileSync("./package.json", "utf8")).version;
    assert.equal(output, pkgVersion, "--version should match package.json version");
}

// compile with file input + file output
{
    const outputPath = join(tmpDir, "compiled.txt");
    const result = runCli(["compile", "-i", "examples/cake.opy", "-o", outputPath]);
    assertSuccess(result, "compile file->file");
    assert.ok(existsSync(outputPath), "compile should write output file");
    const content = readFileSync(outputPath, "utf8");
    assert.ok(content.length > 0, "compiled output should be non-empty");
    assert.ok(content.toLowerCase().includes("rule"), "compiled output should look like workshop code");
}

// compile with stdin -> stdout
{
    const input = readFileSync("examples/cake.opy", "utf8");
    const result = runCli(["compile"], { input });
    assertSuccess(result, "compile stdin->stdout");
    assert.ok(result.stdout.length > 0, "compile stdout should be non-empty");
    assert.ok(result.stdout.toLowerCase().includes("rule"), "compile stdout should look like workshop code");
}

// decompile with file input + file output
{
    const outputPath = join(tmpDir, "decompiled.opy");
    const result = runCli(["decompile", "-i", "src/tests/decompiler/z_1v1arena.txt", "-o", outputPath]);
    assertSuccess(result, "decompile file->file");
    assert.ok(existsSync(outputPath), "decompile should write output file");
    const content = readFileSync(outputPath, "utf8");
    assert.ok(content.length > 0, "decompiled output should be non-empty");
    assert.ok(content.includes('rule "'), "decompiled output should look like OverPy code");
}

// decompile with stdin -> stdout
{
    const input = readFileSync("src/tests/decompiler/z_1v1arena.txt", "utf8");
    const result = runCli(["decompile", "--ignore-variable-index"], { input });
    assertSuccess(result, "decompile stdin->stdout");
    assert.ok(result.stdout.length > 0, "decompile stdout should be non-empty");
    assert.ok(result.stdout.includes('rule "'), "decompile stdout should look like OverPy code");
}

// missing command input should fail with exit code 2
{
    const result = runCli(["compile"]);
    assert.equal(result.status, 2, "compile without input should exit with code 2");
    assert.ok(result.stderr.includes("No input provided"), "missing input should print an error message");
}

console.log(colors.bold(colors.green("All CLI tests passed")));