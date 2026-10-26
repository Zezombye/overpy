import { BrowserMessageReader, BrowserMessageWriter, createProtocolConnection, InitializeRequest } from "vscode-languageserver-protocol/browser";

import { DecompileFilesRequest, type DecompileFilesParams, type DecompileFilesResult } from "../../lsp/protocol";

/** Decompiles workshop files with the OverPy worker, outside of the IDE (e.g. on the projects page). */
export async function decompileFilesInWorker(params: DecompileFilesParams): Promise<DecompileFilesResult> {
    const worker = new Worker("/lsp/languageServer.js", { type: "module", name: "OverPy" });
    const connection = createProtocolConnection(new BrowserMessageReader(worker), new BrowserMessageWriter(worker));
    const workerFailure = new Promise<never>((_resolve, reject) => {
        worker.addEventListener("error", (event) => reject(new Error(`The OverPy worker could not be started: ${event.message || "see the browser console"}`)));
    });
    connection.listen();
    try {
        return await Promise.race([
            (async () => {
                await connection.sendRequest(InitializeRequest.type, { processId: null, rootUri: null, capabilities: {} });
                return connection.sendRequest<DecompileFilesResult>(DecompileFilesRequest, params);
            })(),
            workerFailure,
        ]);
    } finally {
        connection.dispose();
        worker.terminate();
    }
}
