import {
    CompletionList,
    createConnection,
    Diagnostic,
    DidChangeConfigurationNotification,
    InitializeParams,
    ProposedFeatures,
    SignatureHelp,
    TextDocumentSyncKind,
    TextDocuments,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import type { OWLanguage } from "../types";
import { getCodeActions } from "./codeActions";
import { getColorPresentations, getDocumentColors } from "./colors";
import { getCompletionList } from "./completions";
import { getWorkspaceDefinition } from "./definition";
import { getDocumentLinks } from "./documentLinks";
import { getFoldingRanges } from "./foldingRanges";
import { getHover } from "./hover";
import { getInlayHints } from "./inlayHints";
import { getWorkspaceReferences } from "./references";
import { getPrepareRename, getWorkspaceRename } from "./rename";
import { initializeLanguageServerRuntime } from "./runtime";
import { getSemanticTokens, semanticTokenModifiers, semanticTokenTypes } from "./semanticTokens";
import { getSignatureHelp } from "./signatureHelp";
import { getDocumentSymbols } from "./symbols";
import { validateTextDocument } from "./validation";

type OverpySettings = {
    workshopLanguage: OWLanguage;
    inlayHintsMinParameters: number;
};

const defaultSettings: OverpySettings = {
    workshopLanguage: "en-US",
    inlayHintsMinParameters: 1,
};
const supportedLanguages = [
    "de-DE",
    "en-US",
    "es-ES",
    "es-MX",
    "fr-FR",
    "it-IT",
    "ja-JP",
    "ko-KR",
    "pl-PL",
    "pt-BR",
    "ru-RU",
    "th-TH",
    "tr-TR",
    "zh-CN",
    "zh-TW",
] satisfies OWLanguage[];

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);
const pendingValidations = new Map<string, NodeJS.Timeout>();
const documentSettings = new Map<string, Thenable<OverpySettings>>();
const previousDiagnosticUris = new Map<string, Set<string>>();

let hasConfigurationCapability = false;
let globalSettings = defaultSettings;
let workspaceRoots: string[] = [];

connection.onInitialize((params: InitializeParams) => {
    hasConfigurationCapability = params.capabilities.workspace?.configuration === true;
    workspaceRoots =
        params.workspaceFolders?.map((workspaceFolder) => URI.parse(workspaceFolder.uri).fsPath) ??
        (params.rootUri ? [URI.parse(params.rootUri).fsPath] : []);

    return {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            completionProvider: {
                triggerCharacters: [".", "@", "!", "&"],
            },
            signatureHelpProvider: {
                triggerCharacters: ["(", ",", ")"],
            },
            hoverProvider: true,
            semanticTokensProvider: {
                legend: {
                    tokenTypes: [...semanticTokenTypes],
                    tokenModifiers: semanticTokenModifiers,
                },
                full: true,
            },
            documentSymbolProvider: true,
            inlayHintProvider: true,
            foldingRangeProvider: true,
            documentLinkProvider: {
                resolveProvider: false,
            },
            colorProvider: true,
            codeActionProvider: true,
            definitionProvider: true,
            referencesProvider: true,
            renameProvider: {
                prepareProvider: true,
            },
        },
    };
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        void connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
});

connection.onDidChangeConfiguration((change) => {
    if (hasConfigurationCapability) {
        documentSettings.clear();
    } else {
        globalSettings = normalizeSettings(change.settings?.overpy);
    }

    for (const document of documents.all()) {
        scheduleValidate(document);
    }
});

documents.onDidOpen((event) => scheduleValidate(event.document));
documents.onDidChangeContent((event) => scheduleValidate(event.document));
documents.onDidSave((event) => scheduleValidate(event.document));
documents.onDidClose((event) => {
    clearPendingValidation(event.document.uri);
    documentSettings.delete(event.document.uri);
    previousDiagnosticUris.delete(event.document.uri);
    connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] });
});

connection.onCompletion((params): CompletionList | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }

    return getCompletionList(document, params.position, params.context?.triggerCharacter);
});

connection.onSignatureHelp((params): SignatureHelp | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }

    return getSignatureHelp(document, params.position, params.context?.triggerCharacter) ?? null;
});

connection.onHover((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }

    return getHover(document, params.position);
});

connection.languages.inlayHint.on(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    const settings = await getDocumentSettings(document.uri);
    return getInlayHints(document, params.range, settings.inlayHintsMinParameters);
});

connection.languages.semanticTokens.on((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return { data: [] };
    }

    return getSemanticTokens(document);
});

connection.onDocumentSymbol((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    return getDocumentSymbols(document);
});

connection.onFoldingRanges((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    return getFoldingRanges(document);
});

connection.onDocumentLinks((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    return getDocumentLinks(document);
});

connection.onDocumentColor((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    return getDocumentColors(document);
});

connection.onColorPresentation((params) => {
    return getColorPresentations(params.color, params.range);
});

connection.onCodeAction((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    return getCodeActions(document, params.context.diagnostics);
});

connection.onDefinition(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }

    return getWorkspaceDefinition(document, params.position, workspaceRoots, documents.all());
});

connection.onReferences(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }

    return getWorkspaceReferences(
        document,
        params.position,
        workspaceRoots,
        documents.all(),
        params.context.includeDeclaration,
    );
});

connection.onPrepareRename(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }

    return getPrepareRename(document, params.position, workspaceRoots, documents.all());
});

connection.onRenameRequest(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }

    return getWorkspaceRename(document, params.position, params.newName, workspaceRoots, documents.all());
});

void initializeLanguageServerRuntime().catch((error: unknown) => {
    connection.console.error(`OverPy language server initialization failed: ${getErrorMessage(error)}`);
});

documents.listen(connection);
connection.listen();

function scheduleValidate(document: TextDocument): void {
    clearPendingValidation(document.uri);
    pendingValidations.set(
        document.uri,
        setTimeout(() => {
            pendingValidations.delete(document.uri);
            void validateAndPublish(document);
        }, 400),
    );
}

function clearPendingValidation(uri: string): void {
    const pendingValidation = pendingValidations.get(uri);
    if (pendingValidation) {
        clearTimeout(pendingValidation);
        pendingValidations.delete(uri);
    }
}

async function validateAndPublish(document: TextDocument): Promise<void> {
    try {
        const settings = await getDocumentSettings(document.uri);
        const validationResult = await validateTextDocument(document, settings.workshopLanguage);
        publishDiagnostics(document.uri, validationResult.diagnosticsByUri);
    } catch (error) {
        connection.console.error(`OverPy validation failed for ${document.uri}: ${getErrorMessage(error)}`);
    }
}

function publishDiagnostics(triggerUri: string, diagnosticsByUri: Map<string, Diagnostic[]>): void {
    const previousUris = previousDiagnosticUris.get(triggerUri) ?? new Set<string>();
    const nextUris = new Set(diagnosticsByUri.keys());

    for (const uri of previousUris) {
        if (!nextUris.has(uri)) {
            connection.sendDiagnostics({ uri, diagnostics: [] });
        }
    }

    for (const [uri, diagnostics] of diagnosticsByUri) {
        connection.sendDiagnostics({ uri, diagnostics });
    }

    previousDiagnosticUris.set(triggerUri, nextUris);
}

function getDocumentSettings(resource: string): Thenable<OverpySettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }

    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace
            .getConfiguration({
                scopeUri: resource,
                section: "overpy",
            })
            .then(normalizeSettings);
        documentSettings.set(resource, result);
    }

    return result;
}

function normalizeSettings(settings: unknown): OverpySettings {
    const normalized: OverpySettings = {
        ...defaultSettings,
    };

    if (typeof settings === "object" && settings !== null) {
        if ("workshopLanguage" in settings) {
            const configuredLanguage = settings.workshopLanguage;
            if (typeof configuredLanguage === "string" && supportedLanguages.includes(configuredLanguage as OWLanguage)) {
                normalized.workshopLanguage = configuredLanguage as OWLanguage;
            }
        }

        if ("inlayHintsMinParameters" in settings) {
            const configuredMinParameters = settings.inlayHintsMinParameters;
            if (typeof configuredMinParameters === "number" && Number.isFinite(configuredMinParameters)) {
                const clamped = Math.trunc(configuredMinParameters);
                normalized.inlayHintsMinParameters = Math.max(0, Math.min(10, clamped));
            }
        }
    }

    return normalized;
}

function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}
