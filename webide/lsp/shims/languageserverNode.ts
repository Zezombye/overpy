/*
 * Replaces `vscode-languageserver/node` in the language server worker bundle: same API, but the
 * connection talks to the IDE through the worker's postMessage channel instead of stdio.
 */
import { BrowserMessageReader, BrowserMessageWriter, type Connection, createConnection as createBrowserConnection, type Features } from "vscode-languageserver/browser";

export * from "vscode-languageserver/browser";

let createdConnection: Connection | undefined;

export function createConnection(factories: Features): Connection {
    if (createdConnection) {
        throw new Error("The language server connection was already created");
    }
    // `self` is the DedicatedWorkerGlobalScope; typed as Worker since this project uses the DOM lib, like the OverPy sources.
    const port = self as unknown as Worker;
    createdConnection = createBrowserConnection(factories, new BrowserMessageReader(port), new BrowserMessageWriter(port)) as Connection;
    return createdConnection;
}

export function getCreatedConnection(): Connection {
    if (!createdConnection) {
        throw new Error("The language server connection has not been created yet");
    }
    return createdConnection;
}
