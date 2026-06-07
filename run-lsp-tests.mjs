import esbuild from "esbuild";
import { copyFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outfile = path.join("out", "test", "languageServer.test.cjs");

mkdirSync(path.dirname(outfile), { recursive: true });
copyFileSync(
    path.join("node_modules", "@jitl", "quickjs-ng-wasmfile-release-sync", "dist", "emscripten-module.wasm"),
    path.join(path.dirname(outfile), "quickjs-ng.wasm"),
);

await esbuild.build({
    entryPoints: ["src/test/languageServer.test.ts"],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "cjs",
    outfile,
    logLevel: "silent",
});

await import(pathToFileURL(path.resolve(outfile)).href);
