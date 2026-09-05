import esbuild from "esbuild";
import { copyFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const testDir = path.join("out", "test");
const languageServerOutfile = path.join(testDir, "languageServer.test.cjs");
const documentationLocalizationOutfile = path.join(testDir, "documentationLocalization.test.cjs");

mkdirSync(testDir, { recursive: true });
copyFileSync(
    path.join("node_modules", "@jitl", "quickjs-ng-wasmfile-release-sync", "dist", "emscripten-module.wasm"),
    path.join(testDir, "quickjs-ng.wasm"),
);

await esbuild.build({
    entryPoints: ["src/test/languageServer.test.ts"],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "cjs",
    outfile: languageServerOutfile,
    logLevel: "silent",
});

await esbuild.build({
    entryPoints: ["src/test/documentationLocalization.test.ts"],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "cjs",
    outfile: documentationLocalizationOutfile,
    logLevel: "silent",
});

await import(pathToFileURL(path.resolve(languageServerOutfile)).href);
await import(pathToFileURL(path.resolve(documentationLocalizationOutfile)).href);
