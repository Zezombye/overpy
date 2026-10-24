import { computed, reactive, watch } from "vue";

import { getSetting, settings } from "../lib/settings";
import { showDialog } from "./dialogs";
import { DARK_THEME, LIGHT_THEME } from "./monaco/themes";
import type { LanguageClient } from "./monaco/lspClient";
import { monaco } from "./monaco/setup";
import { basename, isSameOrChild, replacePrefix } from "./paths";
import { readLocal, writeLocal } from "./storage";
import {
    getModel,
    isFile,
    isOverpyFile,
    onDidDeleteEntries,
    onDidRenameEntry,
    pathOfUri,
    revertFile,
    saveFile,
    workspace,
} from "./workspace";

export type EditorTab = { kind: "file"; id: string; path: string; preview: boolean } | { kind: "settings"; id: "settings" } | { kind: "welcome"; id: "welcome" };

export const editors = reactive({
    tabs: [] as EditorTab[],
    activeId: null as string | null,
    /** Cursor and indentation of the active file, for the status bar. */
    status: {
        line: 1,
        column: 1,
        selectedCharacters: 0,
        selections: 1,
        tabSize: 4,
        insertSpaces: true,
        eol: "LF",
        languageId: "",
    },
});

export const activeTab = computed(() => editors.tabs.find((tab) => tab.id === editors.activeId) ?? null);
export const activeFilePath = computed(() => (activeTab.value?.kind === "file" ? activeTab.value.path : null));

// Monaco objects must not be made reactive.
let codeEditor: monaco.editor.IStandaloneCodeEditor | undefined;
let languageClient: LanguageClient | undefined;
const viewStates = new Map<string, monaco.editor.ICodeEditorViewState | null>();
let modelListeners: monaco.IDisposable[] = [];

const fileTabId = (path: string) => `file:${path}`;

export function getCodeEditor(): monaco.editor.IStandaloneCodeEditor | undefined {
    return codeEditor;
}

function editorOptions(): monaco.editor.IEditorOptions & monaco.editor.IGlobalEditorOptions {
    const fontFamily = getSetting<string>("editor.fontFamily");
    return {
        fontSize: getSetting<number>("editor.fontSize"),
        ...(fontFamily ? { fontFamily } : {}),
        tabSize: getSetting<number>("editor.tabSize"),
        insertSpaces: getSetting<boolean>("editor.insertSpaces"),
        detectIndentation: getSetting<boolean>("editor.detectIndentation"),
        wordWrap: getSetting<"off" | "on" | "bounded">("editor.wordWrap"),
        wordWrapColumn: 80,
        minimap: { enabled: getSetting<boolean>("editor.minimap.enabled") },
        lineNumbers: getSetting<"on" | "off" | "relative" | "interval">("editor.lineNumbers"),
        renderWhitespace: getSetting<"none" | "boundary" | "selection" | "trailing" | "all">("editor.renderWhitespace"),
        stickyScroll: { enabled: getSetting<boolean>("editor.stickyScroll.enabled") },
        bracketPairColorization: { enabled: getSetting<boolean>("editor.bracketPairColorization.enabled") },
        inlayHints: { enabled: getSetting<"on" | "onUnlessPressed" | "offUnlessPressed" | "off">("editor.inlayHints.enabled") },
        cursorBlinking: getSetting<"blink" | "smooth" | "phase" | "expand" | "solid">("editor.cursorBlinking"),
        mouseWheelZoom: getSetting<boolean>("editor.mouseWheelZoom"),
    };
}

export function themeName(): string {
    return settings["workbench.colorTheme"] === "Light Modern" ? LIGHT_THEME : DARK_THEME;
}

export function createCodeEditor(container: HTMLElement): monaco.editor.IStandaloneCodeEditor {
    codeEditor = monaco.editor.create(container, {
        ...editorOptions(),
        model: null,
        theme: themeName(),
        automaticLayout: true,
        "semanticHighlighting.enabled": true,
        fixedOverflowWidgets: true,
        scrollBeyondLastLine: true,
        guides: { bracketPairs: "active" },
        smoothScrolling: false,
        padding: { top: 4 },
    });
    codeEditor.onDidChangeCursorSelection(updateStatus);
    codeEditor.onDidChangeModel(updateStatus);
    codeEditor.onDidChangeModelOptions(updateStatus);
    codeEditor.onDidChangeModelLanguage(updateStatus);
    return codeEditor;
}

watch(
    () => editorOptions(),
    (options) => codeEditor?.updateOptions(options),
    { deep: true },
);
watch(themeName, (theme) => monaco.editor.setTheme(theme));

function updateStatus(): void {
    const model = codeEditor?.getModel();
    if (!codeEditor || !model) {
        return;
    }
    const selections = codeEditor.getSelections() ?? [];
    const position = codeEditor.getPosition();
    const options = model.getOptions();
    Object.assign(editors.status, {
        line: position?.lineNumber ?? 1,
        column: position?.column ?? 1,
        selections: selections.length,
        selectedCharacters: selections.reduce((total, selection) => total + model.getValueLengthInRange(selection), 0),
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces,
        eol: model.getEOL() === "\n" ? "LF" : "CRLF",
        languageId: model.getLanguageId(),
    });
}

export function setLanguageClient(client: LanguageClient): void {
    languageClient = client;
    for (const tab of editors.tabs) {
        if (tab.kind === "file") {
            openInLanguageServer(tab.path);
        }
    }
}

function openInLanguageServer(path: string): void {
    const model = getModel(path);
    if (model && isOverpyFile(path)) {
        languageClient?.openDocument(model);
    }
}

function closeInLanguageServer(path: string): void {
    const model = getModel(path);
    if (model) {
        languageClient?.closeDocument(model);
    }
}

function saveActiveViewState(): void {
    if (codeEditor && activeTab.value?.kind === "file") {
        viewStates.set(activeTab.value.path, codeEditor.saveViewState());
    }
}

function showTab(tab: EditorTab): void {
    for (const listener of modelListeners) {
        listener.dispose();
    }
    modelListeners = [];
    if (tab.kind !== "file") {
        codeEditor?.setModel(null);
        return;
    }
    const model = getModel(tab.path);
    if (!model || !codeEditor) {
        return;
    }
    codeEditor.setModel(model);
    const viewState = viewStates.get(tab.path);
    if (viewState) {
        codeEditor.restoreViewState(viewState);
    }
    // Editing a preview tab keeps it open (VS Code behavior).
    modelListeners.push(
        model.onDidChangeContent(() => {
            if (tab.preview) {
                pinTab(tab.id);
            }
        }),
    );
}

export function activateTab(id: string, options: { focus?: boolean } = {}): void {
    const tab = editors.tabs.find((candidate) => candidate.id === id);
    if (!tab) {
        throw new Error(`Editor tab '${id}' not found`);
    }
    if (editors.activeId !== id) {
        saveActiveViewState();
        editors.activeId = id;
        showTab(tab);
    }
    if (options.focus !== false && tab.kind === "file") {
        codeEditor?.focus();
    }
}

export function pinTab(id: string): void {
    const tab = editors.tabs.find((candidate) => candidate.id === id);
    if (tab?.kind === "file") {
        tab.preview = false;
    }
}

export interface OpenFileOptions {
    /** Open as a preview tab, replaced by the next preview (single click in the explorer). */
    preview?: boolean;
    selection?: monaco.IRange | monaco.IPosition;
    focus?: boolean;
}

export function openFile(path: string, options: OpenFileOptions = {}): void {
    if (!isFile(path)) {
        throw new Error(`'${path}' is not a file`);
    }
    const id = fileTabId(path);
    let tab = editors.tabs.find((candidate) => candidate.id === id);
    if (!tab) {
        const newTab: EditorTab = { kind: "file", id, path, preview: options.preview ?? false };
        const previewIndex = options.preview ? editors.tabs.findIndex((candidate) => candidate.kind === "file" && candidate.preview) : -1;
        if (previewIndex >= 0) {
            const replaced = editors.tabs[previewIndex] as Extract<EditorTab, { kind: "file" }>;
            closeInLanguageServer(replaced.path);
            editors.tabs.splice(previewIndex, 1, newTab);
            if (editors.activeId === replaced.id) {
                editors.activeId = null;
            }
        } else {
            const activeIndex = editors.tabs.findIndex((candidate) => candidate.id === editors.activeId);
            editors.tabs.splice(activeIndex + 1, 0, newTab);
        }
        tab = editors.tabs.find((candidate) => candidate.id === id)!;
        openInLanguageServer(path);
    } else if (!options.preview) {
        pinTab(id);
    }
    activateTab(id, { focus: options.focus });
    if (options.selection && codeEditor) {
        if ("startLineNumber" in options.selection) {
            codeEditor.setSelection(options.selection);
            codeEditor.revealRangeInCenterIfOutsideViewport(options.selection, monaco.editor.ScrollType.Immediate);
        } else {
            codeEditor.setPosition(options.selection);
            codeEditor.revealPositionInCenterIfOutsideViewport(options.selection, monaco.editor.ScrollType.Immediate);
        }
    }
}

function openSpecialTab(tab: Extract<EditorTab, { kind: "settings" | "welcome" }>): void {
    if (!editors.tabs.some((candidate) => candidate.id === tab.id)) {
        const activeIndex = editors.tabs.findIndex((candidate) => candidate.id === editors.activeId);
        editors.tabs.splice(activeIndex + 1, 0, tab);
    }
    activateTab(tab.id);
}

export const openSettingsEditor = () => openSpecialTab({ kind: "settings", id: "settings" });
export const openWelcomePage = () => openSpecialTab({ kind: "welcome", id: "welcome" });

function removeTab(id: string): void {
    const index = editors.tabs.findIndex((candidate) => candidate.id === id);
    if (index < 0) {
        return;
    }
    const [tab] = editors.tabs.splice(index, 1);
    if (tab.kind === "file") {
        if (editors.activeId === id) {
            saveActiveViewState();
        }
        closeInLanguageServer(tab.path);
    }
    if (editors.activeId === id) {
        editors.activeId = null;
        const next = editors.tabs[Math.min(index, editors.tabs.length - 1)];
        if (next) {
            activateTab(next.id);
        } else {
            showTab({ kind: "welcome", id: "welcome" });
        }
    }
}

/** Closes a tab, asking what to do with unsaved changes. Resolves to false if cancelled. */
export async function closeTab(id: string): Promise<boolean> {
    const tab = editors.tabs.find((candidate) => candidate.id === id);
    if (!tab) {
        return true;
    }
    if (tab.kind === "file" && workspace.dirty.has(tab.path)) {
        activateTab(id, { focus: false });
        const choice = await showDialog({
            message: `Do you want to save the changes you made to ${basename(tab.path)}?`,
            detail: "Your changes will be lost if you don't save them.",
            severity: "warning",
            buttons: ["Save", "Don't Save", "Cancel"],
            cancelId: 2,
        });
        if (choice === 2) {
            return false;
        }
        if (choice === 0) {
            await saveFile(tab.path, { manual: true });
            if (workspace.dirty.has(tab.path)) {
                return false;
            }
        } else {
            revertFile(tab.path);
        }
    }
    removeTab(id);
    return true;
}

export async function closeTabs(ids: string[]): Promise<void> {
    for (const id of ids) {
        if (!(await closeTab(id))) {
            return;
        }
    }
}

export async function closeAllTabs(): Promise<void> {
    await closeTabs(editors.tabs.map((tab) => tab.id));
}

export async function closeOtherTabs(id: string): Promise<void> {
    await closeTabs(editors.tabs.filter((tab) => tab.id !== id).map((tab) => tab.id));
}

export async function closeTabsToTheRight(id: string): Promise<void> {
    const index = editors.tabs.findIndex((tab) => tab.id === id);
    await closeTabs(editors.tabs.slice(index + 1).map((tab) => tab.id));
}

export async function closeSavedTabs(): Promise<void> {
    await closeTabs(editors.tabs.filter((tab) => tab.kind !== "file" || !workspace.dirty.has(tab.path)).map((tab) => tab.id));
}

export function moveTab(id: string, toIndex: number): void {
    const index = editors.tabs.findIndex((tab) => tab.id === id);
    if (index < 0) {
        return;
    }
    const [tab] = editors.tabs.splice(index, 1);
    editors.tabs.splice(Math.min(toIndex, editors.tabs.length), 0, tab);
}

onDidDeleteEntries.on((paths) => {
    for (const path of paths) {
        viewStates.delete(path);
        removeTab(fileTabId(path));
    }
});

onDidRenameEntry.on(({ from, to }) => {
    for (const tab of editors.tabs) {
        if (tab.kind !== "file" || !isSameOrChild(tab.path, from)) {
            continue;
        }
        const oldPath = tab.path;
        const newPath = replacePrefix(oldPath, from, to);
        const wasActive = editors.activeId === tab.id;
        if (wasActive) {
            saveActiveViewState();
        }
        closeInLanguageServer(oldPath);
        viewStates.set(newPath, viewStates.get(oldPath) ?? null);
        viewStates.delete(oldPath);
        tab.path = newPath;
        tab.id = fileTabId(newPath);
        openInLanguageServer(newPath);
        if (wasActive) {
            editors.activeId = tab.id;
            showTab(tab);
        }
    }
});

/** Opens Monaco's cross-file navigation targets (go to definition, references, links) in tabs. */
export function registerEditorOpener(revealFolder: (path: string) => void): monaco.IDisposable {
    return monaco.editor.registerEditorOpener({
        openCodeEditor(_source, resource, selectionOrPosition) {
            const path = pathOfUri(resource);
            if (path === undefined) {
                return false;
            }
            if (!isFile(path)) {
                revealFolder(path);
                return true;
            }
            openFile(path, { selection: selectionOrPosition });
            return true;
        },
    });
}

// Open editors are restored per project and browser.
const storageKey = () => `overpy-ide.editors.${workspace.project?.id}`;

interface StoredEditors {
    tabs: { kind: EditorTab["kind"]; path?: string }[];
    active: string | null;
}

export function restoreEditors(): void {
    const stored = readLocal<StoredEditors>(storageKey());
    if (!stored) {
        return;
    }
    for (const tab of stored.tabs) {
        if (tab.kind === "file" && tab.path && isFile(tab.path)) {
            editors.tabs.push({ kind: "file", id: fileTabId(tab.path), path: tab.path, preview: false });
            openInLanguageServer(tab.path);
        } else if (tab.kind === "settings") {
            editors.tabs.push({ kind: "settings", id: "settings" });
        } else if (tab.kind === "welcome") {
            editors.tabs.push({ kind: "welcome", id: "welcome" });
        }
    }
    const active = editors.tabs.find((tab) => tab.id === stored.active) ?? editors.tabs[0];
    if (active) {
        activateTab(active.id, { focus: false });
    }
}

export function persistEditors(): void {
    watch(
        () => ({ tabs: editors.tabs.map((tab) => ({ kind: tab.kind, path: tab.kind === "file" ? tab.path : undefined })), active: editors.activeId }),
        (stored: StoredEditors) => writeLocal(storageKey(), stored),
        { deep: true },
    );
}
