import { readFile, writeFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";

type Command = "compile" | "decompile";

type ParsedArgs = {
    command: Command | null;
    help: boolean;
    version: boolean;
    inputPath?: string;
    outputPath?: string;
    language: string;
    rootPath?: string;
    mainFileName?: string;
    ignoreVariableIndex: boolean;
    ignoreSubroutineIndex: boolean;
};

type OverpyModule = {
    readyPromise: Promise<void>;
    compile: (
        content: string,
        language?: string,
        rootPath?: string,
        mainFileName?: string,
    ) => Promise<{
        result: string;
        encounteredWarnings: unknown[];
    }>;
    decompileAllRules: (
        content: string,
        language?: string,
        options?: {
            ignoreVariableIndex?: boolean;
            ignoreSubroutineIndex?: boolean;
        },
    ) => string;
};

function loadOverpy(): OverpyModule {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return require("./overpy_standalone");
    } catch {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            return require("./overpy");
        } catch {
            throw new Error("Unable to load OverPy runtime module. Expected './overpy_standalone' or './overpy'.");
        }
    }
}

function printHelp() {
    const helpText = `OverPy CLI

Usage:
  overpy <command> [inputPath] [options]

Commands:
  compile      Compile OverPy code to Workshop code
  decompile    Decompile Workshop code to OverPy code

Options:
  -i, --input <path>           Input file path
  -o, --output <path>          Output file path
  -l, --language <lang>        Workshop language (default: en-US)
  --root <path>                Root path for compile imports
  --main-file <name>           Main file name for compile
  --ignore-variable-index      Omit variable indexes in decompile output
  --ignore-subroutine-index    Omit subroutine indexes in decompile output
  -h, --help                   Show help
  -V, --version                Show package version

Examples:
  overpy compile -i script.opy -o script.txt
  cat script.opy | overpy compile > script.txt
  overpy decompile -i workshop.txt -o script.opy
  cat workshop.txt | overpy decompile --ignore-variable-index > script.opy
`;
    process.stdout.write(helpText);
}

function getVersion() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pkg = require("../package.json");
    return pkg.version as string;
}

function isOption(value: string) {
    return value.startsWith("-");
}

function consumeValue(args: string[], index: number, optionName: string) {
    const value = args[index + 1];
    if (!value || isOption(value)) {
        throw new Error(`Missing value for ${optionName}`);
    }
    return value;
}

function parseArgs(argv: string[]): ParsedArgs {
    const parsed: ParsedArgs = {
        command: null,
        help: false,
        version: false,
        language: "en-US",
        ignoreVariableIndex: false,
        ignoreSubroutineIndex: false,
    };

    const args = [...argv];

    if (args.length === 0) {
        parsed.help = true;
        return parsed;
    }

    for (const flag of args) {
        if (flag === "-h" || flag === "--help") {
            parsed.help = true;
        }
        if (flag === "-V" || flag === "--version") {
            parsed.version = true;
        }
    }

    if (parsed.help || parsed.version) {
        return parsed;
    }

    const command = args.shift();
    if (command !== "compile" && command !== "decompile") {
        throw new Error(`Unknown command '${command}'. Expected 'compile' or 'decompile'.`);
    }
    parsed.command = command;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === "-i" || arg === "--input") {
            parsed.inputPath = consumeValue(args, i, arg);
            i++;
        } else if (arg === "-o" || arg === "--output") {
            parsed.outputPath = consumeValue(args, i, arg);
            i++;
        } else if (arg === "-l" || arg === "--language") {
            parsed.language = consumeValue(args, i, arg);
            i++;
        } else if (arg === "--root") {
            parsed.rootPath = consumeValue(args, i, arg);
            i++;
        } else if (arg === "--main-file") {
            parsed.mainFileName = consumeValue(args, i, arg);
            i++;
        } else if (arg === "--ignore-variable-index") {
            parsed.ignoreVariableIndex = true;
        } else if (arg === "--ignore-subroutine-index") {
            parsed.ignoreSubroutineIndex = true;
        } else if (!isOption(arg) && !parsed.inputPath) {
            parsed.inputPath = arg;
        } else if (!isOption(arg) && parsed.inputPath) {
            throw new Error(`Unexpected extra positional argument '${arg}'.`);
        } else {
            throw new Error(`Unknown option '${arg}'.`);
        }
    }

    return parsed;
}

async function readStdin() {
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString("utf8");
}

async function loadInput(inputPath?: string) {
    if (inputPath) {
        const absolute = resolve(inputPath);
        const content = await readFile(absolute, "utf8");
        return { content, absolutePath: absolute, fromFile: true };
    }

    if (!process.stdin.isTTY) {
        const content = await readStdin();
        return { content, absolutePath: "", fromFile: false };
    }

    return { content: "", absolutePath: "", fromFile: false };
}

function formatError(error: unknown) {
    if (error instanceof Error) {
        return error.message;
    }
    return String(error);
}

function formatWarning(warning: unknown) {
    if (warning && typeof warning === "object" && "message" in warning) {
        return String((warning as { message: unknown }).message);
    }
    return String(warning);
}

async function writeOutput(content: string, outputPath?: string) {
    if (outputPath) {
        await writeFile(resolve(outputPath), content, "utf8");
        return;
    }
    process.stdout.write(content);
}

async function run() {
    const overpy = loadOverpy();
    const parsed = parseArgs(process.argv.slice(2));

    if (parsed.version) {
        process.stdout.write(`${getVersion()}\n`);
        return 0;
    }

    if (parsed.help || !parsed.command) {
        printHelp();
        return 0;
    }

    const input = await loadInput(parsed.inputPath);
    if (!input.content) {
        process.stderr.write("No input provided. Use --input/-i, positional inputPath, or pipe via stdin.\n\n");
        printHelp();
        return 2;
    }

    await overpy.readyPromise;

    if (parsed.command === "compile") {
        const rootPath =
            parsed.rootPath ??
            (input.fromFile ? dirname(input.absolutePath) : process.cwd());
        const mainFileName =
            parsed.mainFileName ??
            (input.fromFile ? basename(input.absolutePath) : "stdin.opy");

        const result = await overpy.compile(
            input.content,
            parsed.language,
            rootPath,
            mainFileName,
        );

        for (const warning of result.encounteredWarnings) {
            process.stderr.write(`Warning: ${formatWarning(warning)}\n`);
        }

        await writeOutput(result.result, parsed.outputPath);
        return 0;
    }

    const decompiled = overpy.decompileAllRules(input.content, parsed.language, {
        ignoreVariableIndex: parsed.ignoreVariableIndex,
        ignoreSubroutineIndex: parsed.ignoreSubroutineIndex,
    });

    await writeOutput(decompiled, parsed.outputPath);
    return 0;
}

run()
    .then((exitCode) => {
        process.exitCode = exitCode;
    })
    .catch((error: unknown) => {
        process.stderr.write(`Error: ${formatError(error)}\n`);
        process.exitCode = 1;
    });
