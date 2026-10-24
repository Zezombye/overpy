import { reactive, watch } from "vue";

import { ApiError, onUnauthorized } from "../lib/api";
import { takeAuthError } from "../lib/session";
import { onSettingsSaveError } from "../lib/settings";
import { enableAutoSave } from "./autoSave";
import { installKeybindings } from "./commands";
import { decompileDialog, dialog } from "./dialogs";
import { activeFilePath, editors, openFile, openWelcomePage, persistEditors, registerEditorOpener, restoreEditors } from "./editors";
import { restoreExplorerState, revealInExplorer } from "./explorer";
import { languageServer, startLanguageServer } from "./languageServer";
import { registerJsonSchemas } from "./monaco/jsonSchemas";
import { registerOverpyLanguage } from "./monaco/overpyLanguage";
import { defineThemes } from "./monaco/themes";
import { registerWorkshopLanguage } from "./monaco/workshopLanguage";
import { reportError, showError } from "./notifications";
import { enableCompileOnSave, getTemplate } from "./overpy";
import { basename } from "./paths";
import { trackProblems } from "./problems";
import { isLeaving } from "./projects";
import { quickInput } from "./quickInput";
import { registerCommands } from "./registerCommands";
import { createFile, filePaths, isFile, loadWorkspace, workspace } from "./workspace";

export const ide = reactive({
    phase: "loading" as "loading" | "ready" | "error",
    error: null as string | null,
});

defineThemes();

/** Called once the workbench components are mounted (the code editor exists). */
export async function startIde(projectId: string): Promise<void> {
    try {
        onUnauthorized(() =>
            showError("Your session expired: changes cannot be saved. Sign in again in another tab, then retry.", [
                { label: "Open Sign-in Page", run: () => window.open("/login", "_blank") },
            ]),
        );
        onSettingsSaveError((error) => reportError(error, "Could not save the settings"));
        registerCommands();
        await registerOverpyLanguage();
        registerWorkshopLanguage();
        registerJsonSchemas((error) => reportError(error));
        await loadWorkspace(projectId);
    } catch (error) {
        console.error(error);
        ide.phase = "error";
        ide.error = error instanceof ApiError && error.status === 404 ? "This project does not exist, or it belongs to another account." : error instanceof Error ? error.message : String(error);
        return;
    }

    trackProblems();
    registerEditorOpener(revealInExplorer);
    restoreExplorerState();
    restoreEditors();
    persistEditors();
    enableCompileOnSave();
    enableAutoSave();
    installKeybindings(() => quickInput.visible || dialog.current !== null || decompileDialog.visible);
    window.addEventListener("beforeunload", (event) => {
        if (workspace.dirty.size > 0 && !isLeaving()) {
            event.preventDefault();
        }
    });
    watch(
        () => [activeFilePath.value, workspace.dirty.size, workspace.project?.name] as const,
        ([path]) => {
            const dirty = path !== null && workspace.dirty.has(path);
            document.title = `${dirty ? "● " : ""}${path !== null ? `${basename(path)} - ` : ""}${workspace.project!.name} - OverPy IDE`;
        },
        { immediate: true },
    );
    ide.phase = "ready";
    const authError = takeAuthError();
    if (authError) {
        showError(authError);
    }

    if (editors.tabs.length === 0 && isFile("main.opy")) {
        openFile("main.opy");
    } else if (editors.tabs.length === 0) {
        openWelcomePage();
    }

    try {
        await startLanguageServer();
    } catch (error) {
        languageServer.status = "stopped";
        reportError(error, "The OverPy language server failed to start");
        return;
    }

    // New projects start with the OverPy template, like the extension's "Insert Template" command.
    if (filePaths().length === 0 && workspace.entries.size === 0) {
        await createFile("main.opy", await getTemplate());
        openFile("main.opy");
    }
}
