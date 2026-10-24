// Entry point of the language server web worker. See scripts/build-lsp.mjs for the Node module shims.
import "../../src/languageServer/server";
import { registerWebHandlers } from "./handlers";

// The server module created the connection and started listening; incoming messages are only
// dispatched after this module finishes evaluating, so the extra handlers are registered in time.
registerWebHandlers();
