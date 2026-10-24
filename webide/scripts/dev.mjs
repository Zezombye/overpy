// Development: language server worker (esbuild watch) + API (wrangler dev, port 8787) + frontend (vite, port 5173).
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webideDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// wrangler refuses to start if the assets directory configured in wrangler.jsonc does not exist.
fs.mkdirSync(path.join(webideDir, "dist"), { recursive: true });

const processes = [
    ["lsp", "node scripts/build-lsp.mjs --watch"],
    ["api", "pnpm exec wrangler dev --port 8787"],
    ["web", "pnpm exec vite"],
].map(([name, command]) => {
    const child = spawn(command, { cwd: webideDir, shell: true, stdio: ["ignore", "pipe", "pipe"] });
    const prefix = (line) => `[${name}] ${line}`;
    for (const stream of [child.stdout, child.stderr]) {
        let buffer = "";
        stream.on("data", (chunk) => {
            buffer += chunk;
            const lines = buffer.split(/\r?\n/);
            buffer = lines.pop();
            for (const line of lines) {
                (stream === child.stderr ? process.stderr : process.stdout).write(prefix(line) + "\n");
            }
        });
    }
    child.on("exit", (code) => {
        console.error(prefix(`exited with code ${code}`));
        shutdown(code ?? 1);
    });
    return child;
});

let shuttingDown = false;
function shutdown(code) {
    if (shuttingDown) {
        return;
    }
    shuttingDown = true;
    for (const child of processes) {
        if (child.exitCode === null) {
            child.kill();
        }
    }
    process.exitCode = code;
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));
