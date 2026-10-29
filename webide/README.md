# OverPy Web IDE

A browser IDE for OverPy: a VS Code-style workbench around the official [`monaco-editor`](https://github.com/microsoft/monaco-editor), with accounts and projects saved online. The OverPy language server (`../src/languageServer`) and compiler run in a web worker, so it has the same diagnostics, completion, hover, go to definition, rename, semantic highlighting, compilation (including `#!include` and JavaScript macros) and decompilation as the VS Code extension.

## Projects and compilation

A project holds two types of code files:

- **OverPy files** (`.opy`), the default: a new file without extension becomes an OverPy file.
- **Workshop files** (`.ow`): workshop code as copied from Overwatch (File → New Workshop File).

Compiling (Ctrl+Shift+B, the button above the editor, or saving with "OverPy: Compile On Save") compiles the **whole project**: all OverPy and workshop files that are not disabled, in the order shown in the explorer, workshop files being decompiled first. Other files (`.json`, `.js` macro scripts, `.txt`...) are not compiled, but can be used by the code (`#!include`, `__script__`, custom game settings files).

- The explorer order is chosen by the user: drag files and folders before or after another entry, or into a folder (in the middle of its row), or use Alt+Up/Down (Move Up/Down in the context menu). New entries go at the end of their folder. Rules are compiled in this order, and OverPy declarations (variables, macros, enums) must come before they are used.
- Hovering an entry shows buttons to duplicate it (right after it), disable it and delete it. A **disabled** file or folder (greyed) is excluded from the compilation, like hidden items in workshop.codes.
- A file `#!include`d by another file is only compiled where it is included. Existing OverPy projects (a `main.opy` including the other files) therefore work as before.
- **Project settings** (title bar, left of the project selector) are OverPy compiler directives for the whole project: strict optimizations, optimizations for size, translations, size tricks (`#!replace0By...`), suppressed warnings, etc. (`shared/projectSettings.ts`). They are saved in the project and put before the project's files, which can override them with their own directives.
- A project can be made **public** (project settings): anyone with its link (`/ide/<project id>`) can then view it, even without an account, in read only. Viewers can browse, search and compile it, but not modify it; their compilations do not write files into it.
- The IDE can be **used without account** ("Use Without Account" on the sign-in page, `/ide/local`), with a single project stored in the browser's localStorage (`src/ide/localProject.ts`; nothing is sent to the server). It works like a saved project, within the browser's storage limit (about 5 MB per site: a change that does not fit fails with an error, and the project keeps its previous state). Importing a workshop.codes project replaces the whole project (files and settings). Commands that need an account (other projects, public sharing) are disabled.
- A new compilation stops the one that is running. Its errors and warnings replace those shown in the editor (until the next validation of an open file).
- A workshop file can be converted into an OverPy file (context menu: Decompile and Convert to OverPy File): it is replaced by its decompiled code, which declares the variables and subroutines that no other workshop file uses (the others stay declared for them). It does not get `#!optimizeStrict`.
- Workshop files usually hold only part of a script (e.g. one rule), so they can use variables and subroutines declared in other files, or not declared at all: they are declared automatically, without index (the decompiler's `declareUnknownNames` option).
- Workshop files can use the **workshop.codes syntax**: `//` and `/* */` comments, mixins (`@mixin`, `@include`, `@contents`, slots, defaults), parameter objects (`Create HUD Text({ Header: ... })`), `@for`, `@each` and `@if`/`@else if`/`@else`. Translations (`@translate`) are not supported. Like in the workshop.codes editor, all workshop files are joined (in the explorer's order) before the syntax is expanded, so a mixin defined in one file can be included in any other. Unlike workshop.codes, the `variables` and `subroutines` blocks are not generated (names are declared automatically, see above), and the `settings` block must be at the start of its file.
- Diagnostics and completions also work on the whole project: a file can use what other files declare.
- Compilation outputs (`#!writeToOutputFile`, translation `.po` files) are named after `main.opy`.

How a compilation works (`lsp/project.ts`, `lsp/workshopProject.ts`):

1. All code files are joined in the explorer's order, with a marker comment where each file starts; an OverPy file is only its marker, so it keeps its place.
2. The workshop.codes syntax of the joined code is expanded (`lsp/workshopCodes/`, ported from workshop.codes; the parameter names and constants it uses, `lsp/workshopCodes/data.json`, are generated from a workshop.codes checkout by `python scripts/generate-wsc-data.py <path>`).
3. The plain workshop code is split back at the markers, and each workshop file is decompiled on its own. Decompiling takes time (about 30 ms per file), so each file's result is cached: after a change, only the changed files are decompiled again, and errors point to the right file. A block (rule, `@for`...) cannot start in one file and end in another.
4. A generated `main.opy` has the compiler directives of the project settings, declares the workshop files' variables and subroutines, and `#!include`s every file in order. The `#!optimizeStrict` that the decompiler puts before the code it produces is left out: the project settings and the project's files (e.g. `Declarations.opy`) decide which optimizations apply.
5. Steps 1 to 4 run in the language server's worker, which keeps the decompiled files cached (it also compiles the project to validate the open files). The OverPy compiler then runs in a separate worker (`src/ide/compileWorker.ts`): the compiler cannot be interrupted, so a compilation is stopped by terminating that worker.

Projects can be imported from **workshop.codes** (projects page, or Projects: Import workshop.codes Project): every item becomes a workshop file and folders are kept, in the same order; items with the same name get " (1)", " (2)"..., and hidden items are disabled. The files are created in a few requests (`POST /api/projects/:id/import`, up to 512 KB each). The files can also be decompiled into OverPy files during the import, with their workshop.codes syntax expanded: the variables, subroutines and extensions they use are then declared in a first file, `Declarations.opy`, which also has the `#!optimizeStrict` of the decompiled code (the files themselves have no `#!optimizeStrict`). Disabled files are decompiled on their own and declare what only they use. Files that cannot be decompiled are kept as workshop files (they are listed at the end of the import), as are files that only define mixins. Translations are not imported.

The Decompile command (dialog) gives the decompiler's output as is, with `#!optimizeStrict`.

## Architecture

| Part | Where | What |
| --- | --- | --- |
| Frontend | `src/` | Vue + Tailwind. Sign-in and project pages; the IDE (`src/ide/`): title bar with project and account buttons, explorer, search, tabs, problems/output panels, status bar, command palette, settings. |
| Editor | `src/ide/monaco/` | `monaco-editor`, OverPy TextMate grammar via Microsoft's `vscode-textmate`/`vscode-oniguruma` (`../syntaxes`), Dark/Light Modern themes, and an LSP client (`vscode-languageserver-protocol`). |
| Language server | `lsp/` | Bundles `../src/languageServer/server.ts` into `public/lsp/languageServer.js` (`scripts/build-lsp.mjs`). `fs`, `path` and `vscode-languageserver/node` are replaced by shims: the worker gets an in-memory copy of the project's saved files. Project compilation (`lsp/project.ts`, `lsp/workshopProject.ts`, `lsp/projectValidation.ts`), the workshop.codes syntax (`lsp/workshopCodes/`) and the compile/decompile requests (`lsp/handlers.ts`) are added there. |
| API | `server/` | Cloudflare Worker: sign-in, settings, projects and files, stored in Cloudflare D1 (`migrations/`). |
| Shared | `shared/api.ts` | API types and validation rules used by both sides. |

## Hosting: Cloudflare Workers + D1

### How it works

- The server code (`server/`) is a **Worker**: it runs in Cloudflare's datacenters close to each user, in lightweight V8 sandboxes that start in milliseconds. There is no server or container to manage, and nothing goes to sleep when unused.
- A Worker keeps nothing between requests (no disk, no reliable memory). Everything is stored in **D1**, Cloudflare's hosted SQLite database, which lives in one location.
- The IDE's files (the app, Monaco, the language server worker) are **static assets**, served by Cloudflare's CDN without running the Worker. Only `/api/*` requests run the Worker (`run_worker_first` in `wrangler.jsonc`).
- `wrangler deploy` uploads the Worker and the assets, served at `https://overpy-webide.zezombye.workers.dev`. Users go through `https://overpy.zez.dev`, which Netlify proxies to that address (see Deployment).

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

Accounts only exist through Battle.net, Discord or Google (OAuth authorization code flow, `server/auth.ts` and `server/oauth.ts`): an account is created the first time someone signs in, and no password is stored. The server only keeps the provider's account id, display name (the BattleTag for Battle.net) and avatar URL. A user can link several providers to the same account (account menu). Sessions are random tokens in an `HttpOnly`, `Secure`, `SameSite=Strict` cookie (30 days, renewed while used); the database only stores their hash.

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
BATTLENET_CLIENT_ID=...
BATTLENET_CLIENT_SECRET=...
DISCORD_CLIENT_ID=...
DISCORD_CLIENT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

A provider whose id or secret is empty is not offered.

`pnpm dev` runs the language server build in watch mode, the API (`wrangler dev`, port 8787) and the frontend (Vite, http://localhost:5173, which proxies `/api` to the API).

`pnpm run check-types` type-checks the frontend, the Worker and the language server worker.

## Deployment

The Worker is deployed on its `workers.dev` address, and is also available at `https://overpy.zez.dev`: `zez.dev` is not managed by Cloudflare, so Netlify proxies that domain to the Worker. Both addresses work, each with its own sign-in (the session cookie belongs to the address). Since the Worker receives proxied requests on its own address, the proxy sends the `X-Public-Origin` header to give the address seen by the browser, used for the OAuth redirect URIs (`publicOrigin()` in `server/http.ts`; Vite does the same in development).

```sh
cd webide
pnpm exec wrangler login
pnpm run db:migrate:remote                        # database "overpy-webide", id in wrangler.jsonc
pnpm exec wrangler secret put DISCORD_CLIENT_ID   # same for DISCORD_CLIENT_SECRET, GOOGLE_*, BATTLENET_*
pnpm run deploy                                   # builds, then deploys
```

Redeploy (`pnpm run deploy`) after updating OverPy to ship the new compiler and language server. New migrations in `migrations/` are applied with `pnpm run db:migrate:remote`.

### Netlify proxy

On the Netlify site of `zez.dev`, add `overpy.zez.dev` as a domain alias (Domain management), and add this rule to the `netlify.toml` at the root of the site's repository (its base directory), with the address printed by `pnpm run deploy`. It must be in `netlify.toml`: `_redirects` rules cannot add request headers.

```toml
[[redirects]]
  from = "https://overpy.zez.dev/*"
  to = "https://overpy-webide.zezombye.workers.dev/:splat"
  status = 200
  force = true
  headers = { X-Public-Origin = "https://overpy.zez.dev" }
```

`status = 200` makes it a proxy (the address bar keeps `overpy.zez.dev`), and `force` applies it even where the `zez.dev` site has a file at the same path. Netlify passes query strings on; proxied requests time out after 26 seconds. All the IDE's traffic through `overpy.zez.dev` counts against the Netlify site's bandwidth (about 20 MB on a first visit, mostly cached afterwards).

### OAuth apps

Register these redirect URIs in each app (`<provider>`: `battlenet`, `discord`, `google`):

- `https://overpy.zez.dev/api/auth/<provider>/callback`
- `https://overpy-webide.zezombye.workers.dev/api/auth/<provider>/callback`
- `http://localhost:5173/api/auth/<provider>/callback` (development)

- **Battle.net**: [Blizzard developer portal](https://community.developer.battle.net/access/clients) → create a client with the redirect URIs. Only the `openid` scope is used (account id and BattleTag). Users from China (separate Battle.net servers) cannot sign in.
- **Discord**: [Developer Portal](https://discord.com/developers/applications) → New Application → OAuth2: copy the Client ID, reset and copy the Client Secret, and add the redirect URIs under "Redirects". Leave "Public Client" off. The IDE only requests the `identify` scope; the "OAuth2 URL Generator" on that page is not needed (the IDE builds the sign-in URL itself).
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
