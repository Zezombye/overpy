#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const https = require("https");
const readline = require("readline");

const PACKAGE_JSON = path.join(__dirname, "package.json");
const NPM_TOKEN_PATH = path.join(os.homedir(), "npm_token.owo");
const NPM_TOKEN_MAX_AGE_DAYS = 89;

function parseArgs() {
    const args = process.argv.slice(2);
    const result = {};
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "-m" && i + 1 < args.length) {
            result.message = args[++i];
        }
    }
    return result;
}
const cliArgs = parseArgs();

function run(cmd) {
    console.log(`\n> ${cmd}`);
    execSync(cmd, { stdio: "inherit", cwd: __dirname });
}

function isPackageJsonModified() {
    const output = execSync("git status --porcelain package.json", {
        cwd: __dirname,
        encoding: "utf-8",
    }).trim();
    // If there's output, the file has local modifications (staged or unstaged)
    return output.length > 0;
}

function bumpPatchVersion() {
    const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, "utf-8"));
    const parts = pkg.version.split(".");
    parts[2] = String(Number(parts[2]) + 1);
    pkg.version = parts.join(".");
    fs.writeFileSync(PACKAGE_JSON, JSON.stringify(pkg, null, 4) + "\n", "utf-8");
    console.log(`Bumped version to ${pkg.version}`);
}

function uploadToOpenVsx() {
    const tokenPath = path.join(os.homedir(), "open_vsx.owo");
    const token = fs.readFileSync(tokenPath, "utf-8").trim();

    const vsixFiles = fs.readdirSync(__dirname).filter((f) => f.endsWith(".vsix"));
    if (vsixFiles.length !== 1) {
        console.error(`Error: Expected exactly one .vsix file in the current directory, found ${vsixFiles.length}.`);
        process.exit(1);
    }
    const vsixFile = path.join(__dirname, vsixFiles[0]);
    const body = fs.readFileSync(vsixFile);

    console.log("\nUploading to Open VSX...");

    const url = new URL(`https://open-vsx.org/api/-/publish?token=${token}`);
    const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "Content-Length": body.length,
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    console.error(`Error uploading to Open VSX: ${res.statusCode} ${data}`);
                    process.exit(1);
                }
                console.log(res.statusCode, data);
                console.log("Successfully uploaded to Open VSX");
                console.log("\nPublish complete.");
                resolve();
            });
        });
        req.on("error", (err) => {
            console.error("Error uploading to Open VSX:", err.message);
            process.exit(1);
        });
        req.write(body);
        req.end();
    });
}

function prompt(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

async function getNpmToken() {
    let tokenData = null;

    if (fs.existsSync(NPM_TOKEN_PATH)) {
        try {
            tokenData = JSON.parse(fs.readFileSync(NPM_TOKEN_PATH, "utf-8"));
        } catch {
            tokenData = null;
        }
    }

    if (tokenData && tokenData.token && tokenData.timestamp) {
        const ageMs = Date.now() - new Date(tokenData.timestamp).getTime();
        const ageDays = ageMs / (1000 * 60 * 60 * 24);
        if (ageDays < NPM_TOKEN_MAX_AGE_DAYS) {
            console.log(`Using cached npm token (${Math.floor(ageDays)} days old, expires in ${NPM_TOKEN_MAX_AGE_DAYS - Math.floor(ageDays)} days)`);
            return tokenData.token;
        }
        console.log(`npm token expired (${Math.floor(ageDays)} days old).`);
    } else {
        console.log("No npm token found.");
    }

    console.log("Create a new granular access token at:\nhttps://www.npmjs.com/settings/zezombye/tokens/granular-access-tokens/new");
    const token = await prompt("Paste your new npm token: ");

    if (!token) {
        console.error("Error: no token provided.");
        process.exit(1);
    }

    fs.writeFileSync(NPM_TOKEN_PATH, JSON.stringify({ token, timestamp: new Date().toISOString() }, null, 4) + "\n", "utf-8");
    console.log(`Token saved to ${NPM_TOKEN_PATH}`);
    return token;
}

(async () => {

    //Delete existing .vsix files
    const vsixFiles = fs.readdirSync(__dirname).filter((f) => f.endsWith(".vsix"));
    for (const f of vsixFiles) {
        fs.unlinkSync(path.join(__dirname, f));
        console.log(`Deleted ${f}`);
    }

    if (isPackageJsonModified()) {
        console.log("package.json has local modifications – skipping automatic version bump.");
    } else {
        bumpPatchVersion();
    }

    run("pnpm run package");
    //To update manually: https://marketplace.visualstudio.com/manage/publishers/zezombye
    run("pnpm vsce package --no-dependencies");

    // Create the npm package.json

    let pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, "utf-8"));
    delete pkg.devDependencies;
    delete pkg.dependencies;
    delete pkg.scripts;
    delete pkg.engines;
    delete pkg.icon;
    delete pkg.browser;
    delete pkg.activationEvents;
    pkg.main = "./overpy.js";
    pkg.types = "./overpy.d.ts";
    pkg.bin = {
        overpy: "./cli.js",
    };
    pkg.files = ["overpy.js", "overpy.d.ts", "cli.js", "quickjs-ng.wasm", "README.md", "LICENSE"];
    delete pkg.contributes;
    delete pkg["lint-staged"];
    delete pkg.packageManager;

    fs.mkdirSync(path.join(__dirname, "npm"), { recursive: true });
    fs.writeFileSync(path.join(__dirname, "npm", "package.json"), JSON.stringify(pkg, null, 4) + "\n", "utf-8");
    fs.copyFileSync(path.join(__dirname, "out/overpy_standalone.js"), path.join(__dirname, "npm", "overpy.js"));
    fs.copyFileSync(path.join(__dirname, "out/overpy_cli.js"), path.join(__dirname, "npm", "cli.js"));
    fs.copyFileSync(path.join(__dirname, "out/quickjs-ng.wasm"), path.join(__dirname, "npm", "quickjs-ng.wasm"));
    fs.chmodSync(path.join(__dirname, "npm", "cli.js"), 0o755);
    fs.copyFileSync(path.join(__dirname, "src/overpy_standalone.d.ts"), path.join(__dirname, "npm", "overpy.d.ts"));
    fs.copyFileSync(path.join(__dirname, "README.md"), path.join(__dirname, "npm", "README.md"));
    fs.copyFileSync(path.join(__dirname, "LICENSE"), path.join(__dirname, "npm", "LICENSE"));

    run("pnpm vsce publish --no-dependencies --no-update-package-json --no-git-tag-version");
    await uploadToOpenVsx();

    const npmToken = await getNpmToken();
    execSync(`npm publish --access public --//registry.npmjs.org/:_authToken=${npmToken}`, {
        stdio: "inherit",
        cwd: path.join(__dirname, "npm"),
    });
    console.log("Successfully published to npm");

    // Commit & push
    const status = execSync("git status --porcelain", { cwd: __dirname, encoding: "utf-8" }).trim();
    const modifiedFiles = status.split("\n").filter((l) => l.trim().length > 0);
    const version = JSON.parse(fs.readFileSync(PACKAGE_JSON, "utf-8")).version;

    if (modifiedFiles.length > 0) {
        let commitMsg = `v${version}`;
        let userMsg = cliArgs.message ? cliArgs.message.trim() : "";
        if (!userMsg && !modifiedFiles.every(f => f.trim().match(/^M\s+(package\.json|out\/overpy_standalone\.js|customGameSettingsSchema\.json)$/))) {
            userMsg = (await prompt(`Enter a commit message for release ${version}: `)).trim();
        }
        if (userMsg) {
            commitMsg += ` - ${userMsg}`;
        }
        console.log(`\nCommitting and pushing ${commitMsg}...`);
        let commitMsgEscaped = commitMsg.replace(/"/g, '\\"');
        execSync(`git add . && git commit -m "${commitMsgEscaped}" && git tag -a "v${version}" -m "${commitMsgEscaped}" && git push --follow-tags`, {
            stdio: "inherit",
            cwd: __dirname,
        });
    }

    console.log("\nPublish complete.");

})();
