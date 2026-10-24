# OverPy Web IDE

A browser IDE for OverPy: a VS Code-style workbench around the official [`monaco-editor`](https://github.com/microsoft/monaco-editor), with accounts and projects saved online. The OverPy language server (`../src/languageServer`) and compiler run in a web worker, so it has the same diagnostics, completion, hover, go to definition, rename, semantic highlighting, compilation (including `#!include` and JavaScript macros) and decompilation as the VS Code extension.

## Projects and compilation

A project holds two types of code files:

- **OverPy files** (`.opy`), the default: a new file without extension becomes an OverPy file.
- **Workshop files** (`.ow`): workshop code as copied from Overwatch (File → New Workshop File).

Compiling (Ctrl+Shift+B, the button above the editor, or saving with "OverPy: Compile On Save") compiles the **whole project**: all OverPy and workshop files, in the order shown in the explorer, workshop files being decompiled first. Other files (`.json`, `.js` macro scripts, `.txt`...) are not compiled, but can be used by the code (`#!include`, `__script__`, custom game settings files).

- The explorer sorts files and folders by name, mixing folders and files ("Explorer: Sort Order" setting), with numbers in their natural order: name files `01 settings.opy`, `02 rules.ow`... to control the order. Rules are compiled in this order, and OverPy declarations (variables, macros, enums) must come before they are used.
- A file `#!include`d by another file is only compiled where it is included. Existing OverPy projects (a `main.opy` including the other files) therefore work as before.
- Workshop files usually hold only part of a script (e.g. one rule), so they can use variables and subroutines declared in other files, or not declared at all: they are declared automatically, without index (the decompiler's `declareUnknownNames` option).
- Diagnostics and completions also work on the whole project: a file can use what other files declare.
- Compilation outputs (`#!writeToOutputFile`, translation `.po` files) are named after `main.opy`.

Projects can be imported from **workshop.codes** (projects page, or Projects: Import workshop.codes Project): every item becomes a workshop file, folders are kept, and names get a number prefix that keeps the workshop.codes order. workshop.codes' syntax extensions (mixins, etc.) are not supported, and translations are not imported.

## Architecture

| Part | Where | What |
| --- | --- | --- |
| Frontend | `src/` | Vue + Tailwind. Sign-in and project pages; the IDE (`src/ide/`): title bar with project and account buttons, explorer, search, tabs, problems/output panels, status bar, command palette, settings. |
| Editor | `src/ide/monaco/` | `monaco-editor`, OverPy TextMate grammar via Microsoft's `vscode-textmate`/`vscode-oniguruma` (`../syntaxes`), Dark/Light Modern themes, and an LSP client (`vscode-languageserver-protocol`). |
| Language server | `lsp/` | Bundles `../src/languageServer/server.ts` into `public/lsp/languageServer.js` (`scripts/build-lsp.mjs`). `fs`, `path` and `vscode-languageserver/node` are replaced by shims: the worker gets an in-memory copy of the project's saved files. Project compilation (`lsp/project.ts`, `lsp/projectValidation.ts`) and the compile/decompile requests (`lsp/handlers.ts`) are added there. |
| API | `server/` | Cloudflare Worker: sign-in, settings, projects and files, stored in Cloudflare D1 (`migrations/`). |
| Shared | `shared/api.ts` | API types and validation rules used by both sides. |

## Hosting: Cloudflare Workers + D1

### How it works

- The server code (`server/`) is a **Worker**: it runs in Cloudflare's datacenters close to each user, in lightweight V8 sandboxes that start in milliseconds. There is no server or container to manage, and nothing goes to sleep when unused.
- A Worker keeps nothing between requests (no disk, no reliable memory). Everything is stored in **D1**, Cloudflare's hosted SQLite database, which lives in one location.
- The IDE's files (the app, Monaco, the language server worker) are **static assets**, served by Cloudflare's CDN without running the Worker. Only `/api/*` requests run the Worker (`run_worker_first` in `wrangler.jsonc`).
- `wrangler deploy` uploads the Worker and the assets. The IDE is then available at `https://overpy-webide.<account>.workers.dev`, or on a custom domain.

For 10–20 users with a few projects each, the free plan covers everything with one provider. The alternatives were weaker on the free tier: Supabase pauses inactive projects, Firebase Hosting caps transfer at 360 MB/day (the IDE is ~20 MB uncached), and Vercel/Netlify need an extra database provider.

### Free plan limits (Cloudflare docs, October 2026)

| | Limit |
| --- | --- |
| Static asset requests | Free and unlimited; 20,000 files and 25 MiB per file per version |
| Worker (API) requests | 100,000 per day |
| CPU time | 10 ms per request (time spent waiting for the database or the network does not count) |
| Memory | 128 MB |
| D1 storage | 500 MB per database, 5 GB per account, 10 databases |
| D1 reads / writes | 5 million rows read and 100,000 rows written per day |
| D1 row size | 2 MB |
| D1 backups (Time Travel) | Restore to any point in the last 7 days |

Daily limits reset at 00:00 UTC. When one is reached, the API returns errors until the reset (saving fails with an error; unsaved changes stay in the open tab). The paid plan ($5/month) removes these limits.

What it means here:

- **Storage**: a file is a row. OverPy projects are usually well under 1 MB, so 500 MB is about 20 users × 25 MB.
- **Writes**: saving a file writes a few rows, so the daily limit allows tens of thousands of saves. Auto-save after a delay is what uses the most writes.
- **Reads**: opening a project reads one row per file.
- **Requests**: opening the IDE makes a few API requests, then one per save or file operation.
- **Backups**: Time Travel (`wrangler d1 time-travel restore`), and Projects: Download Project as .zip.

## Sign-in

Users sign in with Battle.net, Discord or Google (OAuth authorization code flow, `server/auth.ts` and `server/oauth.ts`); no password is stored. The server only keeps the provider's account id, display name (the BattleTag for Battle.net) and avatar URL. A user can link several providers to the same account (account menu). Sessions are random tokens in an `HttpOnly`, `Secure`, `SameSite=Strict` cookie (30 days, renewed while used); the database only stores their hash.

Creating an account requires a code (`REGISTRATION_CODE` secret) that you give to your users. They enter it on the sign-in page the first time. If the secret is not set, no new account can be created.

## Development

Requirements: Node.js 22+, pnpm 10+.

```sh
# In the OverPy repository root (the language server is built from ../src):
pnpm install
# In webide/:
cd webide
pnpm install
pnpm run db:migrate:local
pnpm dev
```

Before the first run, create the OAuth apps (see below) with the redirect URIs `http://localhost:5173/api/auth/<provider>/callback` (`battlenet`, `discord`, `google`), and fill `webide/.dev.vars` (git-ignored, UTF-8 without BOM):

```ini
REGISTRATION_CODE=localdev
PUBLIC_URL=http://localhost:5173
BATTLENET_CLIENT_ID=...
BATTLENET_CLIENT_SECRET=...
DISCORD_CLIENT_ID=...
DISCORD_CLIENT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

A provider whose id or secret is empty is not offered. `PUBLIC_URL` is needed in development because the API is reached through Vite's proxy.

`pnpm dev` runs the language server build in watch mode, the API (`wrangler dev`, port 8787) and the frontend (Vite, http://localhost:5173, which proxies `/api` to the API).

`pnpm run check-types` type-checks the frontend, the Worker and the language server worker.

## Deployment

```sh
cd webide
pnpm exec wrangler login
pnpm exec wrangler d1 create overpy-webide   # put the printed database_id in wrangler.jsonc
pnpm run db:migrate:remote
pnpm exec wrangler secret put REGISTRATION_CODE
pnpm exec wrangler secret put DISCORD_CLIENT_ID   # same for the other provider ids and secrets
pnpm run deploy                               # builds, then deploys
```

Redeploy (`pnpm run deploy`) after updating OverPy to ship the new compiler and language server. New migrations in `migrations/` are applied with `pnpm run db:migrate:remote`.

### OAuth apps

The redirect URIs are `https://<your domain>/api/auth/<provider>/callback` (plus the `http://localhost:5173/...` ones for development).

- **Battle.net**: [Blizzard developer portal](https://community.developer.battle.net/access/clients) → create a client with the redirect URIs. Only the `openid` scope is used (account id and BattleTag). Users from China (separate Battle.net servers) cannot sign in.
- **Discord**: [Developer Portal](https://discord.com/developers/applications) → New Application → OAuth2: copy the Client ID, reset and copy the Client Secret, add the redirect URIs. Only the `identify` scope is used.
- **Google**: [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → OAuth consent screen (External, scopes `openid` and `profile`), then Credentials → Create credentials → OAuth client ID → Web application, with the redirect URIs. While the consent screen is in "Testing", only the test users you list can sign in (up to 100), which also works as an allowlist.

## Limits

- Text files only, 1 MB per file, 1000 files and folders per project, 50 projects per account (`shared/api.ts`).
- Files are saved on Ctrl+S, or automatically with the "Files: Auto Save" setting. Saving a file that changed elsewhere (e.g. in another tab) asks before overwriting.
- Settings (theme, editor, OverPy settings such as the workshop language) are stored in the account. Open tabs and layout are stored per browser.

## Differences with the VS Code extension

- Compilation covers the whole project (see above), not only the active file. `#!mainFile` is not needed.
- Compile on save only reacts to manual saves, not automatic ones.
- Decompile opens a dialog to paste the workshop code and creates a new file, since pages cannot read the clipboard without permission.
- Browsers only allow clipboard writes shortly after a user action: if copying the compilation result is blocked, a notification offers a "Copy to Clipboard" button.
- Paths are relative to the project's root folder, `/<project name>/`. Renaming a project reloads the page.
