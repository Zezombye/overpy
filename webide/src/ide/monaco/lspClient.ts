/*
 * Minimal LSP client connecting Monaco to the OverPy language server running in a web worker
 * (built from ../src/languageServer by scripts/build-lsp.mjs).
 */
import {
    BrowserMessageReader,
    BrowserMessageWriter,
    CodeActionRequest,
    ColorPresentationRequest,
    CompletionRequest,
    ConfigurationRequest,
    createProtocolConnection,
    DefinitionRequest,
    type Diagnostic,
    DidChangeConfigurationNotification,
    DidChangeTextDocumentNotification,
    DidChangeWatchedFilesNotification,
    DidCloseTextDocumentNotification,
    DidOpenTextDocumentNotification,
    DidSaveTextDocumentNotification,
    DocumentColorRequest,
    DocumentLinkRequest,
    DocumentSymbolRequest,
    type FileEvent,
    FoldingRangeRequest,
    HoverRequest,
    InitializedNotification,
    InitializeRequest,
    type InitializeResult,
    InlayHintRefreshRequest,
    InlayHintRequest,
    LogMessageNotification,
    LSPErrorCodes,
    PrepareRenameRequest,
    type ProtocolConnection,
    PublishDiagnosticsNotification,
    ReferencesRequest,
    RegistrationRequest,
    RenameRequest,
    ResponseError,
    SemanticTokensRefreshRequest,
    SemanticTokensRequest,
    type ServerCapabilities,
    ShowMessageNotification,
    SignatureHelpRequest,
    UnregistrationRequest,
    WorkDoneProgressCreateRequest,
} from "vscode-languageserver-protocol/browser";

import {
    type DecompileParams,
    type DecompileProjectFileParams,
    DecompileProjectFileRequest,
    type DecompileProjectFileResult,
    DecompileRequest,
    type DecompileResult,
    type FileDiagnostics,
    FileWrittenNotification,
    type FileWrittenParams,
    type PrepareCompilationParams,
    PrepareCompilationRequest,
    type PrepareCompilationResult,
    SetProjectFilesNotification,
    type SetProjectFilesParams,
    SyncFilesNotification,
    type SyncFilesParams,
    TemplateRequest,
    type TemplateResult,
} from "../../../lsp/protocol";
import {
    markerMatchesDiagnostic,
    markerToDiagnostic,
    toCompletionItem,
    toDocumentSymbols,
    toFoldingRange,
    toInlayHint,
    toLocations,
    toLspPosition,
    toLspRange,
    toLspSignatureHelp,
    toMarkdownList,
    toMarker,
    toMonacoRange,
    toMonacoUri,
    toSignatureHelp,
    toWorkspaceEdit,
} from "./lspConvert";
import { monaco } from "./setup";

export interface LanguageClientOptions {
    languageId: string;
    workspaceFolder: monaco.Uri;
    workspaceName: string;
    /** The `overpy.*` settings, without the prefix. */
    getSettings: () => Record<string, unknown>;
    log: (message: string) => void;
    showMessage: (severity: "info" | "warning" | "error", message: string) => void;
    onFileWritten: (params: FileWrittenParams) => void;
    onStopped: (reason: string) => void;
}

interface OpenDocument {
    model: monaco.editor.ITextModel;
    changeListener: monaco.IDisposable;
}

const MARKER_OWNER = "overpy";

function isCancellation(error: unknown): boolean {
    return (
        error instanceof ResponseError &&
        (error.code === LSPErrorCodes.RequestCancelled || error.code === LSPErrorCodes.ServerCancelled || error.code === LSPErrorCodes.ContentModified)
    );
}

export class LanguageClient {
    private readonly openDocuments = new Map<string, OpenDocument>();
    private readonly diagnostics = new Map<string, Diagnostic[]>();
    private readonly semanticTokensChanged = new monaco.Emitter<void>();
    private readonly inlayHintsChanged = new monaco.Emitter<void>();
    private readonly disposables: monaco.IDisposable[] = [];
    private capabilities: ServerCapabilities = {};

    private constructor(
        private readonly connection: ProtocolConnection,
        private readonly worker: Worker,
        private readonly options: LanguageClientOptions,
    ) {}

    static async start(options: LanguageClientOptions): Promise<LanguageClient> {
        const worker = new Worker("/lsp/languageServer.js", { type: "module", name: "OverPy Language Server" });
        const connection = createProtocolConnection(new BrowserMessageReader(worker), new BrowserMessageWriter(worker));
        const client = new LanguageClient(connection, worker, options);
        client.registerServerHandlers();
        connection.listen();
        await client.initialize();
        client.registerProviders();
        return client;
    }

    private registerServerHandlers(): void {
        const { connection, options } = this;
        let stopped = false;
        const stop = (reason: string) => {
            if (!stopped) {
                stopped = true;
                options.onStopped(reason);
            }
        };
        connection.onError(([error]) => {
            console.error("Language server connection error", error);
            stop(error.message || "connection error (see the browser console)");
        });
        connection.onClose(() => stop("the connection was closed"));
        this.worker.addEventListener("error", (event) => {
            console.error("Language server worker error", event);
            stop(event.message || "the worker could not be loaded (see the browser console)");
        });

        connection.onRequest(ConfigurationRequest.type, (params) => params.items.map((item) => (item.section === "overpy" ? options.getSettings() : null)));
        connection.onRequest(RegistrationRequest.type, () => undefined);
        connection.onRequest(UnregistrationRequest.type, () => undefined);
        connection.onRequest(WorkDoneProgressCreateRequest.type, () => undefined);
        connection.onRequest(SemanticTokensRefreshRequest.type, () => {
            this.semanticTokensChanged.fire();
        });
        connection.onRequest(InlayHintRefreshRequest.type, () => {
            this.inlayHintsChanged.fire();
        });
        connection.onNotification(PublishDiagnosticsNotification.type, (params) => {
            const uri = toMonacoUri(params.uri);
            this.diagnostics.set(uri.toString(), params.diagnostics);
            const model = monaco.editor.getModel(uri);
            if (model) {
                monaco.editor.setModelMarkers(model, MARKER_OWNER, params.diagnostics.map(toMarker));
            }
        });
        connection.onNotification(LogMessageNotification.type, (params) => options.log(params.message));
        connection.onNotification(ShowMessageNotification.type, (params) => {
            options.showMessage(params.type === 1 ? "error" : params.type === 2 ? "warning" : "info", params.message);
        });
        connection.onNotification(FileWrittenNotification, (params: FileWrittenParams) => options.onFileWritten(params));
    }

    private async initialize(): Promise<void> {
        const { options } = this;
        const result: InitializeResult = await this.connection.sendRequest(InitializeRequest.type, {
            processId: null,
            clientInfo: { name: "OverPy Web IDE" },
            locale: navigator.language,
            rootUri: options.workspaceFolder.toString(),
            workspaceFolders: [{ uri: options.workspaceFolder.toString(), name: options.workspaceName }],
            capabilities: {
                workspace: {
                    configuration: true,
                    didChangeConfiguration: { dynamicRegistration: true },
                    didChangeWatchedFiles: { dynamicRegistration: false },
                    semanticTokens: { refreshSupport: true },
                    inlayHint: { refreshSupport: true },
                    workspaceFolders: true,
                    applyEdit: false,
                },
                textDocument: {
                    synchronization: { didSave: true, dynamicRegistration: false },
                    completion: {
                        completionItem: { snippetSupport: true, documentationFormat: ["markdown", "plaintext"], deprecatedSupport: true, labelDetailsSupport: true },
                        contextSupport: true,
                    },
                    hover: { contentFormat: ["markdown", "plaintext"] },
                    signatureHelp: {
                        signatureInformation: { documentationFormat: ["markdown", "plaintext"], parameterInformation: { labelOffsetSupport: true }, activeParameterSupport: true },
                        contextSupport: true,
                    },
                    publishDiagnostics: { relatedInformation: false, tagSupport: { valueSet: [1, 2] } },
                    semanticTokens: {
                        requests: { full: true },
                        tokenTypes: [],
                        tokenModifiers: [],
                        formats: ["relative"],
                    },
                    documentSymbol: { hierarchicalDocumentSymbolSupport: true },
                    foldingRange: {},
                    documentLink: {},
                    colorProvider: {},
                    codeAction: { codeActionLiteralSupport: { codeActionKind: { valueSet: ["quickfix", "refactor", "source"] } }, isPreferredSupport: true },
                    definition: { linkSupport: true },
                    references: {},
                    rename: { prepareSupport: true },
                    inlayHint: {},
                },
                window: { showMessage: {}, workDoneProgress: false },
            },
        });
        this.capabilities = result.capabilities;
        await this.connection.sendNotification(InitializedNotification.type, {});
    }

    /** Sends a request, resolving to null if it gets cancelled. */
    private async request<R>(send: () => Promise<R>): Promise<R | null> {
        try {
            return await send();
        } catch (error) {
            if (isCancellation(error)) {
                return null;
            }
            throw error;
        }
    }

    private registerProviders(): void {
        const { languageId } = this.options;
        const capabilities = this.capabilities;
        const connection = this.connection;
        const textDocument = (model: monaco.editor.ITextModel) => ({ uri: model.uri.toString() });
        const add = (disposable: monaco.IDisposable) => this.disposables.push(disposable);

        if (capabilities.completionProvider) {
            add(
                monaco.languages.registerCompletionItemProvider(languageId, {
                    triggerCharacters: capabilities.completionProvider.triggerCharacters,
                    provideCompletionItems: async (model, position, context, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(
                                CompletionRequest.type,
                                {
                                    textDocument: textDocument(model),
                                    position: toLspPosition(position),
                                    // Monaco's trigger kinds are 0-based, LSP's are 1-based.
                                    context: { triggerKind: (context.triggerKind + 1) as 1 | 2 | 3, triggerCharacter: context.triggerCharacter },
                                },
                                token,
                            ),
                        );
                        if (!result) {
                            return { suggestions: [] };
                        }
                        const word = model.getWordAtPosition(position);
                        const replace = word
                            ? new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn)
                            : monaco.Range.fromPositions(position);
                        const insert = new monaco.Range(position.lineNumber, replace.startColumn, position.lineNumber, position.column);
                        const items = Array.isArray(result) ? result : result.items;
                        return {
                            suggestions: items.map((item) => toCompletionItem(item, { insert, replace })),
                            incomplete: !Array.isArray(result) && result.isIncomplete,
                        };
                    },
                }),
            );
        }

        if (capabilities.signatureHelpProvider) {
            add(
                monaco.languages.registerSignatureHelpProvider(languageId, {
                    signatureHelpTriggerCharacters: capabilities.signatureHelpProvider.triggerCharacters,
                    signatureHelpRetriggerCharacters: capabilities.signatureHelpProvider.retriggerCharacters,
                    provideSignatureHelp: async (model, position, token, context) => {
                        const result = await this.request(() =>
                            connection.sendRequest(
                                SignatureHelpRequest.type,
                                {
                                    textDocument: textDocument(model),
                                    position: toLspPosition(position),
                                    context: {
                                        triggerKind: context.triggerKind as number as 1 | 2 | 3,
                                        triggerCharacter: context.triggerCharacter,
                                        isRetrigger: context.isRetrigger,
                                        activeSignatureHelp: context.activeSignatureHelp ? toLspSignatureHelp(context.activeSignatureHelp) : undefined,
                                    },
                                },
                                token,
                            ),
                        );
                        return result ? { value: toSignatureHelp(result), dispose: () => {} } : null;
                    },
                }),
            );
        }

        if (capabilities.hoverProvider) {
            add(
                monaco.languages.registerHoverProvider(languageId, {
                    provideHover: async (model, position, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(HoverRequest.type, { textDocument: textDocument(model), position: toLspPosition(position) }, token),
                        );
                        return result ? { contents: toMarkdownList(result.contents), range: result.range ? toMonacoRange(result.range) : undefined } : null;
                    },
                }),
            );
        }

        const semanticTokensProvider = capabilities.semanticTokensProvider;
        if (semanticTokensProvider) {
            add(
                monaco.languages.registerDocumentSemanticTokensProvider(languageId, {
                    onDidChange: this.semanticTokensChanged.event,
                    getLegend: () => semanticTokensProvider.legend,
                    provideDocumentSemanticTokens: async (model, _lastResultId, token) => {
                        const result = await this.request(() => connection.sendRequest(SemanticTokensRequest.type, { textDocument: textDocument(model) }, token));
                        return result ? { data: Uint32Array.from(result.data), resultId: result.resultId } : null;
                    },
                    releaseDocumentSemanticTokens: () => {},
                }),
            );
        }

        if (capabilities.documentSymbolProvider) {
            add(
                monaco.languages.registerDocumentSymbolProvider(languageId, {
                    displayName: "OverPy",
                    provideDocumentSymbols: async (model, token) => {
                        const result = await this.request(() => connection.sendRequest(DocumentSymbolRequest.type, { textDocument: textDocument(model) }, token));
                        return result ? toDocumentSymbols(result) : null;
                    },
                }),
            );
        }

        if (capabilities.inlayHintProvider) {
            add(
                monaco.languages.registerInlayHintsProvider(languageId, {
                    onDidChangeInlayHints: this.inlayHintsChanged.event,
                    provideInlayHints: async (model, range, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(InlayHintRequest.type, { textDocument: textDocument(model), range: toLspRange(range) }, token),
                        );
                        return { hints: (result ?? []).map(toInlayHint), dispose: () => {} };
                    },
                }),
            );
        }

        if (capabilities.foldingRangeProvider) {
            add(
                monaco.languages.registerFoldingRangeProvider(languageId, {
                    provideFoldingRanges: async (model, _context, token) => {
                        const result = await this.request(() => connection.sendRequest(FoldingRangeRequest.type, { textDocument: textDocument(model) }, token));
                        return (result ?? []).map(toFoldingRange);
                    },
                }),
            );
        }

        if (capabilities.documentLinkProvider) {
            add(
                monaco.languages.registerLinkProvider(languageId, {
                    provideLinks: async (model, token) => {
                        const result = await this.request(() => connection.sendRequest(DocumentLinkRequest.type, { textDocument: textDocument(model) }, token));
                        return {
                            links: (result ?? []).map((link) => ({ range: toMonacoRange(link.range), url: link.target ? toMonacoUri(link.target) : undefined, tooltip: link.tooltip })),
                        };
                    },
                }),
            );
        }

        if (capabilities.colorProvider) {
            add(
                monaco.languages.registerColorProvider(languageId, {
                    provideDocumentColors: async (model, token) => {
                        const result = await this.request(() => connection.sendRequest(DocumentColorRequest.type, { textDocument: textDocument(model) }, token));
                        return (result ?? []).map((info) => ({ range: toMonacoRange(info.range), color: info.color }));
                    },
                    provideColorPresentations: async (model, colorInfo, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(
                                ColorPresentationRequest.type,
                                { textDocument: textDocument(model), color: colorInfo.color, range: toLspRange(colorInfo.range) },
                                token,
                            ),
                        );
                        return (result ?? []).map((presentation) => ({
                            label: presentation.label,
                            textEdit: presentation.textEdit ? { range: toMonacoRange(presentation.textEdit.range), text: presentation.textEdit.newText } : undefined,
                            additionalTextEdits: presentation.additionalTextEdits?.map((edit) => ({ range: toMonacoRange(edit.range), text: edit.newText })),
                        }));
                    },
                }),
            );
        }

        if (capabilities.codeActionProvider) {
            add(
                monaco.languages.registerCodeActionProvider(languageId, {
                    provideCodeActions: async (model, range, context, token) => {
                        const knownDiagnostics = this.diagnostics.get(model.uri.toString()) ?? [];
                        const diagnostics = context.markers.map(
                            (marker) => knownDiagnostics.find((diagnostic) => markerMatchesDiagnostic(marker, diagnostic)) ?? markerToDiagnostic(marker),
                        );
                        const result = await this.request(() =>
                            connection.sendRequest(
                                CodeActionRequest.type,
                                {
                                    textDocument: textDocument(model),
                                    range: toLspRange(range),
                                    context: { diagnostics, only: context.only ? [context.only] : undefined, triggerKind: context.trigger === 1 ? 1 : 2 },
                                },
                                token,
                            ),
                        );
                        const actions: monaco.languages.CodeAction[] = [];
                        for (const action of result ?? []) {
                            if (!("edit" in action) || !action.edit) {
                                console.warn("Ignoring code action without edit (commands are not supported):", action);
                                continue;
                            }
                            actions.push({
                                title: action.title,
                                kind: action.kind,
                                isPreferred: action.isPreferred,
                                diagnostics: action.diagnostics?.map(
                                    (diagnostic) => context.markers.find((marker) => markerMatchesDiagnostic(marker, diagnostic)) ?? toMarker(diagnostic),
                                ),
                                edit: toWorkspaceEdit(action.edit),
                            });
                        }
                        return { actions, dispose: () => {} };
                    },
                }),
            );
        }

        if (capabilities.definitionProvider) {
            add(
                monaco.languages.registerDefinitionProvider(languageId, {
                    provideDefinition: async (model, position, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(DefinitionRequest.type, { textDocument: textDocument(model), position: toLspPosition(position) }, token),
                        );
                        return toLocations(result);
                    },
                }),
            );
        }

        if (capabilities.referencesProvider) {
            add(
                monaco.languages.registerReferenceProvider(languageId, {
                    provideReferences: async (model, position, context, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(
                                ReferencesRequest.type,
                                { textDocument: textDocument(model), position: toLspPosition(position), context: { includeDeclaration: context.includeDeclaration } },
                                token,
                            ),
                        );
                        return toLocations(result).map((location) => ({ uri: location.uri, range: location.range }));
                    },
                }),
            );
        }

        if (capabilities.renameProvider) {
            const prepareSupport = typeof capabilities.renameProvider === "object" && capabilities.renameProvider.prepareProvider;
            add(
                monaco.languages.registerRenameProvider(languageId, {
                    provideRenameEdits: async (model, position, newName, token) => {
                        const result = await this.request(() =>
                            connection.sendRequest(RenameRequest.type, { textDocument: textDocument(model), position: toLspPosition(position), newName }, token),
                        );
                        return result ? toWorkspaceEdit(result) : { edits: [], rejectReason: "No rename result." };
                    },
                    resolveRenameLocation: prepareSupport
                        ? async (model, position, token) => {
                              const result = await this.request(() =>
                                  connection.sendRequest(PrepareRenameRequest.type, { textDocument: textDocument(model), position: toLspPosition(position) }, token),
                              );
                              const word = model.getWordAtPosition(position);
                              const wordRange = word
                                  ? new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn)
                                  : monaco.Range.fromPositions(position);
                              if (!result) {
                                  return { range: wordRange, text: word?.word ?? "", rejectReason: "The element can't be renamed." };
                              }
                              if ("defaultBehavior" in result) {
                                  return { range: wordRange, text: word?.word ?? "" };
                              }
                              if ("placeholder" in result) {
                                  return { range: toMonacoRange(result.range), text: result.placeholder };
                              }
                              const range = toMonacoRange(result);
                              return { range, text: model.getValueInRange(range) };
                          }
                        : undefined,
                }),
            );
        }
    }

    isOpen(model: monaco.editor.ITextModel): boolean {
        return this.openDocuments.has(model.uri.toString());
    }

    openDocument(model: monaco.editor.ITextModel): void {
        const uri = model.uri.toString();
        if (this.openDocuments.has(uri)) {
            return;
        }
        void this.connection.sendNotification(DidOpenTextDocumentNotification.type, {
            textDocument: { uri, languageId: model.getLanguageId(), version: model.getVersionId(), text: model.getValue() },
        });
        const changeListener = model.onDidChangeContent((event) => {
            void this.connection.sendNotification(DidChangeTextDocumentNotification.type, {
                textDocument: { uri, version: model.getVersionId() },
                contentChanges: event.changes.map((change) => ({ range: toLspRange(change.range), rangeLength: change.rangeLength, text: change.text })),
            });
        });
        this.openDocuments.set(uri, { model, changeListener });
    }

    closeDocument(model: monaco.editor.ITextModel): void {
        const uri = model.uri.toString();
        const document = this.openDocuments.get(uri);
        if (!document) {
            return;
        }
        document.changeListener.dispose();
        this.openDocuments.delete(uri);
        void this.connection.sendNotification(DidCloseTextDocumentNotification.type, { textDocument: { uri } });
    }

    saveDocument(model: monaco.editor.ITextModel): void {
        if (this.isOpen(model)) {
            void this.connection.sendNotification(DidSaveTextDocumentNotification.type, { textDocument: { uri: model.uri.toString() } });
        }
    }

    syncFiles(params: SyncFilesParams): void {
        void this.connection.sendNotification(SyncFilesNotification, params);
    }

    setProjectFiles(params: SetProjectFilesParams): void {
        void this.connection.sendNotification(SetProjectFilesNotification, params);
    }

    didChangeWatchedFiles(changes: FileEvent[]): void {
        void this.connection.sendNotification(DidChangeWatchedFilesNotification.type, { changes });
    }

    didChangeConfiguration(): void {
        void this.connection.sendNotification(DidChangeConfigurationNotification.type, { settings: null });
    }

    /** Prepares the compilation of the whole project (see lsp/project.ts); the compilation itself runs in another worker (see compileWorker.ts). */
    prepareCompilation(params: PrepareCompilationParams): Promise<PrepareCompilationResult> {
        return this.connection.sendRequest<PrepareCompilationResult>(PrepareCompilationRequest, params);
    }

    decompileProjectFile(params: DecompileProjectFileParams): Promise<DecompileProjectFileResult> {
        return this.connection.sendRequest<DecompileProjectFileResult>(DecompileProjectFileRequest, params);
    }

    /** Replaces all the diagnostics (e.g. by those of a compilation). The next validations update them again. */
    replaceAllDiagnostics(fileDiagnostics: FileDiagnostics): void {
        this.diagnostics.clear();
        for (const model of monaco.editor.getModels()) {
            monaco.editor.setModelMarkers(model, MARKER_OWNER, []);
        }
        for (const { uri, diagnostics } of fileDiagnostics) {
            const monacoUri = toMonacoUri(uri);
            this.diagnostics.set(monacoUri.toString(), diagnostics as Diagnostic[]);
            const model = monaco.editor.getModel(monacoUri);
            if (model) {
                monaco.editor.setModelMarkers(model, MARKER_OWNER, (diagnostics as Diagnostic[]).map(toMarker));
            }
        }
    }

    decompile(text: string, language: string): Promise<DecompileResult> {
        return this.connection.sendRequest<DecompileResult>(DecompileRequest, { text, language } satisfies DecompileParams);
    }

    async getTemplate(): Promise<string> {
        return (await this.connection.sendRequest<TemplateResult>(TemplateRequest)).template;
    }
}
