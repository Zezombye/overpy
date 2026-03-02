const esbuild = require("esbuild");

const production = process.argv.includes("--production");
const watch = process.argv.includes("--watch");
const targets = ["extension", "cli", "standalone"];

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
    name: "esbuild-problem-matcher",

    setup(build) {
        build.onStart(() => {
            console.log("[watch] build started");
        });
        build.onEnd((result) => {
            result.errors.forEach(({ text, location }) => {
                console.error(`✘ [ERROR] ${text}`);
                console.error(`    ${location.file}:${location.line}:${location.column}:`);
            });
            console.log("[watch] build finished");
        });
    },
};

/**
 * @param {string[]} args
 * @returns {string}
 */
function getTarget(args) {
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith("--target=")) {
            return arg.split("=")[1];
        }
        if (arg === "--target") {
            return args[i + 1] ?? "";
        }
    }
    return "extension";
}

async function main() {
    const target = getTarget(process.argv.slice(2));

    if (!targets.includes(target)) {
        console.error(`Invalid target "${target}". Available targets: ${targets.join("|")}`);
        process.exit(1);
    }

    /**
     * @type {import('esbuild').BuildOptions}
     */
    const baseOptions = {
        format: "cjs",
        minify: production,
        sourcemap: !production,
        sourcesContent: false,
        platform: "node",
        logLevel: "silent",
        plugins: [esbuildProblemMatcherPlugin],
    };

    const targetOptionsMap = {
        extension: {
            entryPoints: ["src/extension.ts"],
            bundle: true,
            outfile: "out/extension.js",
            external: ["vscode"],
        },
        cli: {
            entryPoints: ["src/cli.ts"],
            bundle: false,
            outfile: "out/overpy_cli.js",
            banner: {
                js: "#!/usr/bin/env node",
            },
        },
        standalone: {
            entryPoints: ["src/overpy_standalone.ts"],
            bundle: true,
            outfile: "out/overpy_standalone.js",
            external: ["vscode"],
        },
    };

    const ctx = await esbuild.context({
        ...baseOptions,
        ...targetOptionsMap[target],
    });
    if (watch) {
        await ctx.watch();
    } else {
        await ctx.rebuild();
        await ctx.dispose();
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
