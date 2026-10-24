// Bundles the OverPy language server (../src/languageServer) into a module web worker at public/lsp/.
// Node built-ins used by the server and compiler are replaced by in-memory shims (see lsp/shims).
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webideDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const overpyDir = path.resolve(webideDir, "..");
const outDir = path.join(webideDir, "public", "lsp");
const production = process.argv.includes("--production");
const watch = process.argv.includes("--watch");

const shims = {
    "fs": "fs.ts",
    "node:fs": "fs.ts",
    "fs/promises": "fsPromises.ts",
    "node:fs/promises": "fsPromises.ts",
    "path": "path.ts",
    "node:path": "path.ts",
    "vscode-languageserver/node": "languageserverNode.ts",
};

/** @type {import("esbuild").Plugin} */
const shimPlugin = {
    name: "overpy-web-shims",
    setup(build) {
        const filter = new RegExp(`^(${Object.keys(shims).map((name) => name.replace(/[/.]/g, "\\$&")).join("|")})$`);
        build.onResolve({ filter }, (args) => ({ path: path.join(webideDir, "lsp", "shims", shims[args.path]) }));
        // The server validates project files by compiling the whole project (lsp/projectValidation.ts).
        build.onResolve({ filter: /^\.\/validation$/ }, (args) =>
            /languageServer[\\/]server\.ts$/.test(args.importer) ? { path: path.join(webideDir, "lsp", "projectValidation.ts") } : undefined,
        );
    },
};

/** @type {import("esbuild").Plugin} */
const logPlugin = {
    name: "log",
    setup(build) {
        build.onEnd((result) => {
            for (const error of result.errors) {
                console.error(`✘ [ERROR] ${error.text}` + (error.location ? `\n    ${error.location.file}:${error.location.line}:${error.location.column}` : ""));
            }
            console.log(`[lsp] build ${result.errors.length > 0 ? "failed" : "finished"}`);
        });
    },
};

const quickJSWasm = path.join(overpyDir, "node_modules", "@jitl", "quickjs-ng-wasmfile-release-sync", "dist", "emscripten-module.wasm");
if (!fs.existsSync(quickJSWasm)) {
    throw new Error(`${quickJSWasm} not found. Run "pnpm install" in ${overpyDir} first.`);
}
// Start clean, so that no stale source map ends up in a production build.
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
// Must sit next to languageServer.js: src/quickjs.ts resolves it relative to the worker's location.
fs.copyFileSync(quickJSWasm, path.join(outDir, "quickjs-ng.wasm"));

const ctx = await esbuild.context({
    entryPoints: [path.join(webideDir, "lsp", "main.ts")],
    outfile: path.join(outDir, "languageServer.js"),
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "es2022",
    // Not minified, like the standalone build in ../esbuild.js ("bugs out with minification").
    minify: false,
    sourcemap: production ? false : "linked",
    sourcesContent: false,
    logLevel: "warning",
    plugins: [shimPlugin, logPlugin],
});

if (watch) {
    await ctx.watch();
} else {
    const result = await ctx.rebuild();
    await ctx.dispose();
    if (result.errors.length > 0) {
        process.exit(1);
    }
}
