# OverPy Language Server

This document describes the bundled Language Server Protocol (LSP) implementation that
powers diagnostics, completions, hover, and the other editor features for `.opy` files.
It lives entirely under [`src/languageServer/`](../src/languageServer).

> If you change how a feature works, update this file in the same commit.

## Contents

- [Architecture](#architecture)
- [Lifecycle & initialization](#lifecycle--initialization)
- [Completion state](#completion-state)
- [Features](#features)
  - [Diagnostics](#diagnostics)
  - [Completions](#completions)
  - [Type-aware argument completion](#type-aware-argument-completion)
  - [Signature help](#signature-help)
  - [Hover](#hover)
  - [Semantic tokens](#semantic-tokens)
  - [Inlay hints](#inlay-hints)
  - [Definition, references, rename](#definition-references-rename)
  - [Symbols, folding, code actions](#symbols-folding-code-actions)
  - [Document links](#document-links)
  - [Color picker](#color-picker)
- [Comment-based documentation](#comment-based-documentation)
- [Testing](#testing)
- [Known limitations](#known-limitations)

## Architecture

```
VS Code (client)                         Language server (separate Node process)
─────────────────                        ───────────────────────────────────────
extension.ts                             server.ts          ← entry point, registers
  startLanguageServer()  ──stdio JSON-RPC──►  capabilities + request handlers
  LanguageClient                              │
                                              ├─ validation.ts → compiler/compiler.ts
                                              ├─ completionState.ts (shared symbol store)
                                              └─ per-feature modules (hover.ts, …)
```

- **Entry point:** [`server.ts`](../src/languageServer/server.ts) creates the connection,
  declares server capabilities in `onInitialize`, and wires each LSP request to a
  feature module. It also debounces validation (≈400 ms) on open/change/save and
  publishes diagnostics.
- **Build:** the `lsp` esbuild target bundles `src/languageServer/server.ts` →
  `out/languageServer.js` (see [`esbuild.js`](../esbuild.js)). Build it with
  `pnpm run compile-lsp`.
- **Client wiring:** [`extension.ts`](../src/extension.ts) `startLanguageServer()` launches
  `out/languageServer.js` over stdio for the `overpy` language. The
  `overpy.useLanguageServer` setting (default `true`) toggles the server; when disabled the
  extension falls back to the legacy in-process providers.

## Lifecycle & initialization

[`runtime.ts`](../src/languageServer/runtime.ts) exposes two idempotent init steps:

- `initializeLanguageServerData()` — loads static OverPy data (`postInitialLoad`) and builds
  the base completion state. Cheap; safe to call from any feature.
- `initializeLanguageServerRuntime()` — also boots the QuickJS runtime needed to actually
  **compile** documents. Required before validation.

Both are called lazily, so feature handlers (hover, completion, …) work against the static
data even before the first compile finishes.

## Completion state

[`completionState.ts`](../src/languageServer/completionState.ts) is the heart of the server:
a single in-memory store of every symbol the editor features read from. It has two layers.

1. **Base data** (built once from `src/data/**`): built-in functions, member functions,
   module functions, keywords, enums/constants, annotations, preprocessing directives, and
   string entities.
2. **Dynamic data** (rebuilt on every successful compile via
   `updateCompletionStateFromCompileResult`): the user's macros, subroutines, global/player
   variables, and user-defined enums for the document that was just validated.

`refreshCompletionState()` merges both layers into the public `CompletionState`:

| Field | Contents | Consumed by |
| --- | --- | --- |
| `defaultCompletions` | normal-position symbols (functions, enum types, macros, global vars, subroutines) | completion, hover |
| `memberCompletions` | after-`.` symbols (member functions, member macros, player vars) | completion, hover |
| `constantValueCompletions` | `EnumName → members` for built-in **and** user enums | completion, hover, semantic tokens |
| `functionRegistry` | every callable, keyed by name | signature help, hover, inlay hints, type-aware completion |

Because the dynamic layer reflects **the last validated document**, user-defined symbols
appear after that document's first validation (and refresh on edits, debounced).

Two derived accessors are built on top of the state:

- `makeSignatureHelp(name, func, activeParam, keywordArg)` — builds a `SignatureHelp` for a
  call. Returns `undefined` when there are no **visible** parameters (correct for the
  signature-help UI; member functions hide their implicit `self`).
- `makeFunctionSignatureLabel(name, func)` — builds the `Class.func(args) -> Return` label
  regardless of argument count. Used by hover so argument-less functions still get a popup.
- `getSemanticTokenIndex()` — categorized name lookups for semantic highlighting (below).

## Features

Server capabilities are declared in `server.ts` → `onInitialize`. Each maps to one module.

> **Hands-on reference:** [`feature-showcase.opy`](./feature-showcase.opy) is an annotated,
> cleanly-compiling `.opy` file that exercises every provider below. Open it with the
> extension running and follow the inline comments to see each feature in action.

### Diagnostics

[`validation.ts`](../src/languageServer/validation.ts) compiles the document, converts
compiler warnings/errors to LSP diagnostics ([`diagnostics.ts`](../src/languageServer/diagnostics.ts)),
and — as a side effect — refreshes the dynamic completion state and extracts
[comment docs](#comment-based-documentation). `server.ts` debounces and publishes them,
clearing stale URIs across multi-file compiles.

### Completions

[`completions.ts`](../src/languageServer/completions.ts) routes on the trigger character:
`.` → member or enum-member list, `@` → annotations, `#!` → preprocessing directives,
`\&` → string entities, otherwise the default list (and [type-aware values](#type-aware-argument-completion)).

### Type-aware argument completion

When the cursor sits inside a function call argument whose declared type is an enum, that
enum's qualified members are surfaced **at the top** of the list. Example: inside
`wait(1, ▏)` the `Wait` enum members (`Wait.IGNORE_CONDITION`, …) are offered, inserting the
qualified form, ahead of the default/extension completions.

- Implemented in `completions.ts` → `getArgumentValueCompletions`.
- Locates the active argument with `getSignatureContext` (exported from
  [`signatureHelp.ts`](../src/languageServer/signatureHelp.ts)), accounting for the
  member-function `self` offset and keyword arguments.
- Resolves the argument's declared type to an enum via `constantValueCompletions` (handling
  the `…Literal` suffix), then clones those items with a `0`-prefixed `sortText` so they
  float above everything else, and appends the normal default completions below.

### Signature help

[`signatureHelp.ts`](../src/languageServer/signatureHelp.ts) scans backwards from the cursor
(`getSignatureContext`) to find the enclosing call, the active parameter index, and any
keyword argument, then calls `makeSignatureHelp`.

### Hover

[`hover.ts`](../src/languageServer/hover.ts) resolves the symbol under the cursor and returns
the first applicable popup:

1. Enum **member** (`Enum.Member`) → `getEnumMemberHover`.
2. A function in `functionRegistry` → `getFunctionHover`, which always renders a signature
   label (via `makeFunctionSignatureLabel`, so **argument-less functions also get a popup**),
   the description, and per-argument docs when present.
3. Otherwise the symbol's documentation from `annotation`, `preprocessing`, `stringEntity`,
   `default`, or `member` completion lists, or an enum-type summary.

The `memberCompletions` list is included in the fallback chain specifically so **player
variables** (which only live there) get hovers.

### Semantic tokens

[`semanticTokens.ts`](../src/languageServer/semanticTokens.ts) provides richer highlighting
than the TextMate grammar can, because it knows user-defined names.

- Legend: `function`, `method`, `macro`, `variable`, `enum`, `enumMember`, `decorator`.
- `getSemanticTokenIndex()` (in `completionState.ts`) builds categorized name maps from the
  live state. **Language keywords are deliberately excluded** so the grammar keeps coloring
  them — otherwise `and`/`def`/`elif` would be miscolored as functions.
- The tokenizer masks strings and comments, then classifies each identifier. `Enum.Member`
  accesses are resolved by remembering the previous identifier and checking adjacency to the
  `.`.

### Inlay hints

[`inlayHints.ts`](../src/languageServer/inlayHints.ts) renders parameter-name hints at call
sites, e.g. `wait(time: 1, waitBehavior: IGNORE_CONDITION)`.

- Finds `name(` call sites in the comment/string-masked text, looks up parameters in
  `functionRegistry`, and matches positional arguments to parameter names.
- Skips the implicit `self` for member functions and stops once keyword arguments begin.

### Definition, references, rename

[`definition.ts`](../src/languageServer/definition.ts),
[`references.ts`](../src/languageServer/references.ts), and
[`rename.ts`](../src/languageServer/rename.ts) work across the workspace by scanning `.opy`
files under the workspace roots plus all open documents, resolving variable/enum/macro/
subroutine declarations and their usages.

### Symbols, folding, code actions

[`symbols.ts`](../src/languageServer/symbols.ts) (document outline),
[`foldingRanges.ts`](../src/languageServer/foldingRanges.ts), and
[`codeActions.ts`](../src/languageServer/codeActions.ts) (e.g. a "suppress warning" quick fix
that inserts a `#!suppressWarnings` directive).

### Document links

[`documentLinks.ts`](../src/languageServer/documentLinks.ts) turns the file path in every
`#!include "..."` and `#!mainFile "..."` directive into a clickable, <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>-clickable
link that opens the referenced file. Paths are resolved relative to the current file's
directory (mirroring the compiler's include resolution), and the link range covers just the
quoted path. A path that points at a directory links to that directory; a path that does not
exist on disk produces no link rather than a broken one. Only `file://` documents are
scanned — unsaved buffers have no directory to resolve against, so they are skipped.

### Color picker

[`colors.ts`](../src/languageServer/colors.ts) renders an inline color swatch — and a native
color picker — next to every literal color value:

- **Named constants** (`Color.RED`, `Color.SKY_BLUE`, …) — looked up in
  [`constants.ts`](../src/data/constants.ts) → `ColorLiteral`. `Color.TEAM_1` / `Color.TEAM_2`
  resolve at runtime and have no fixed RGB, so they get no swatch.
- **`rgb(r, g, b[, a])`** — when every argument is a plain `0`–`255` integer. Calls whose
  arguments are expressions (e.g. `rgb(score, 0, 0)`) are skipped, since there is no single
  value to preview.
- **`hsl(h, s, l[, a])`** — when every argument is a plain number, converted to RGB with the
  same formula the compiler uses in [`hsl.ts`](../src/compiler/functions/hsl.ts).

Editing a swatch writes back an `rgb(...)` form (with an alpha argument only when the color is
not fully opaque). When the picked color exactly matches a built-in constant, that
`Color.NAME` is offered as a second presentation. String and comment regions are masked before
scanning, so colors mentioned in text are ignored.

## Comment-based documentation

[`declarationDocs.ts`](../src/languageServer/declarationDocs.ts) lets users document their own
declarations with ordinary comments. The text then appears in **both** the hover popup and
the completion popup, ahead of the auto-generated technical line (variable index, enum value,
etc.).

### Supported declarations

`globalvar`, `playervar`, `def` (subroutines), `enum` types, and enum **members**.

### Conventions

Two styles are recognized; a **trailing same-line comment wins**, otherwise a **contiguous
comment block on the lines directly above** is used:

```overpy
globalvar score # The team's current score          ← trailing wins

# Charge toward the ultimate ability.
# Capped at 100.
playervar ultCharge                                  ← comment block above (joined)

def resetScore(): # Sets every team's score back to 0

enum GameStatus:
    # Waiting for players to join the lobby
    SETUP = 0
    PLAYING = 1 # The match is live
```

Rules:

- A blank line or any code between the comment and the declaration **breaks** the
  association (the comment is not attached).
- `#!` directive lines are **never** treated as documentation.
- Comments inside string literals are ignored (the parser is string-aware).

### How it flows through the code

1. `validation.ts` calls `extractDeclarationDocs(document.getText())` after a successful
   compile and passes the result into `updateCompletionStateFromCompileResult`.
2. `completionState.ts` stores it on the dynamic data and merges each comment into the
   relevant description:
   - variables → `getVariableCompletions`
   - subroutines → `getSubroutineCompletions`
   - enum types → enum entry in `refreshCompletionState`
   - enum members → `getUserEnumCompletionLists`
3. Hover and completion read those descriptions from the completion state, so no
   feature-specific code is needed — both stay in sync automatically.

### Extending to a new declaration kind

1. Add a `Map` to `DeclarationDocs` (and `emptyDeclarationDocs`) in `declarationDocs.ts`.
2. Add a matcher in `extractDeclarationDocs` that calls `getDocFor(lines, index)`.
3. Thread the map into wherever that symbol's `CompletionData.description` is built in
   `completionState.ts`, prepending `doc` when present.
4. Add a unit test (extractor) and an integration test (validate → hover/completion).

## Testing

The LSP has a standalone adapter test:

```bash
pnpm run test:lsp     # bundles + runs src/test/languageServer.test.ts
```

It exercises diagnostics, every feature module, and the comment-doc flow (both the pure
`extractDeclarationDocs` function and an end-to-end validate-then-hover/complete check).
Also run `pnpm run check-types` and `pnpm run lint`. Add a regression test alongside any
behavior change.

## Known limitations

- **Single active document for dynamic data.** The dynamic completion state and comment docs
  reflect the **last validated document**. Symbols (and their comment docs) declared in an
  *imported* file are only documented when that file is the one being edited. Cross-file doc
  extraction would require scanning imported files in `validation.ts`.
- **First-validation delay.** User-defined symbols colorize/complete only after the document's
  first validation (debounced ≈400 ms). Built-in functions/enums are always available.
- **Heuristic parsers.** `declarationDocs.ts`, `semanticTokens.ts`, and `inlayHints.ts` work
  on masked text with regexes rather than the full AST, so deeply unusual formatting may not
  be recognized. They are intentionally conservative (skip rather than mis-handle).
