import { BrowserMessageReader, BrowserMessageWriter, createProtocolConnection, InitializeRequest, type ProtocolConnection } from "vscode-languageserver-protocol/browser";

import { CompileRequest, type CompileParams, type CompileResult, FileWrittenNotification, type FileWrittenParams, SyncFilesNotification } from "../../lsp/protocol";
import { mirrorFiles } from "./workspace";

/*
 * Compilations run in their own worker (another instance of the language server's worker), so that a compilation
 * can be stopped by terminating the worker: the compiler cannot be interrupted otherwise. The worker has a copy of
 * the saved files, like the language server.
 */

export class CompilationCancelledError extends Error {
    constructor() {
        super("The compilation was cancelled.");
    }
}

class CompileWorker {
    private readonly worker = new Worker("/lsp/languageServer.js", { type: "module", name: "OverPy Compiler" });
    private readonly connection: ProtocolConnection;
    private readonly ready: Promise<void>;
    private stopMirroring: (() => void) | null = null;
    private rejectRunning: ((error: Error) => void) | null = null;

    constructor(onFileWritten: (params: FileWrittenParams) => void) {
        this.connection = createProtocolConnection(new BrowserMessageReader(this.worker), new BrowserMessageWriter(this.worker));
        this.connection.onNotification(FileWrittenNotification, onFileWritten);
        this.connection.listen();
        this.ready = this.connection.sendRequest(InitializeRequest.type, { processId: null, rootUri: null, capabilities: {} }).then(() => {
            this.stopMirroring = mirrorFiles((params) => void this.connection.sendNotification(SyncFilesNotification, params));
        });
    }

    get busy(): boolean {
        return this.rejectRunning !== null;
    }

    compile(params: CompileParams): Promise<CompileResult> {
        if (this.busy) {
            throw new Error("The compiler worker is already compiling.");
        }
        return new Promise<CompileResult>((resolve, reject) => {
            const onError = (event: ErrorEvent) => reject(new Error(`The OverPy compiler worker failed: ${event.message || "see the browser console"}`));
            this.worker.addEventListener("error", onError);
            this.rejectRunning = reject;
            this.ready
                .then(() => this.connection.sendRequest<CompileResult>(CompileRequest, params))
                .then(resolve, reject)
                .finally(() => {
                    this.worker.removeEventListener("error", onError);
                    this.rejectRunning = null;
                });
        });
    }

    /** Stops the worker, and the compilation it runs. */
    terminate(): void {
        this.stopMirroring?.();
        this.rejectRunning?.(new CompilationCancelledError());
        this.worker.terminate();
        this.connection.dispose();
    }
}

let current: CompileWorker | null = null;

/** Stops the running compilation, if any (by terminating the compiler worker). */
export function stopCompilation(): void {
    if (current?.busy) {
        current.terminate();
        current = null;
    }
}

/** Compiles a prepared project. A compilation that is still running is stopped. Rejects with CompilationCancelledError if stopped. */
export function compileInWorker(params: CompileParams, onFileWritten: (params: FileWrittenParams) => void): Promise<CompileResult> {
    stopCompilation();
    current ??= new CompileWorker(onFileWritten);
    return current.compile(params);
}
