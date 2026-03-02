const esbuild = require("esbuild");

const production = process.argv.includes("--production");
const watch = process.argv.includes("--watch");
const buildAll = process.argv.includes("--all") || process.argv.includes("-all");
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
 * @returns {{ target: string, hasTargetArg: boolean }}
 */
function parseBuildTarget(args) {
    let target = "extension";
    let hasTargetArg = false;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith("--target=")) {
            target = arg.split("=")[1];
            hasTargetArg = true;
            continue;
        }
        if (arg === "--target") {
            target = args[i + 1] ?? "";
            hasTargetArg = true;
        }
    }

    return {
        target,
        hasTargetArg,
    };
}

async function main() {
    const args = process.argv.slice(2);
    const { target, hasTargetArg } = parseBuildTarget(args);

    if (buildAll && hasTargetArg) {
        console.error("Cannot use --all with --target. Use either --all or --target <name>.");
        process.exit(1);
    }

    if (!buildAll && !targets.includes(target)) {
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

    const targetsToBuild = buildAll ? targets : [target];
    const watchContexts = [];

    for (const currentTarget of targetsToBuild) {
        const ctx = await esbuild.context({
            ...baseOptions,
            ...targetOptionsMap[currentTarget],
        });
        if (watch) {
            await ctx.watch();
            watchContexts.push(ctx);
        } else {
            await ctx.rebuild();
            await ctx.dispose();
        }
    }

    if (watchContexts.length > 0) {
        const disposeAndExit = async () => {
            await Promise.all(watchContexts.map((ctx) => ctx.dispose()));
            process.exit(0);
        };

        process.on("SIGINT", () => {
            void disposeAndExit();
        });
        process.on("SIGTERM", () => {
            void disposeAndExit();
        });
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
