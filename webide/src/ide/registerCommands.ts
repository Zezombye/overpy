import { setSetting, settings } from "../lib/settings";
import { registerCommand } from "./commands";
import { decompileDialog } from "./dialogs";
import {
    activeFilePath,
    activeTab,
    closeAllTabs,
    closeOtherTabs,
    closeSavedTabs,
    closeTab,
    editors,
    getCodeEditor,
    openSettingsEditor,
    openWelcomePage,
} from "./editors";
import { downloadFile, downloadProject, pickFilesToUpload, revealInExplorer, startNewFile, startNewFolder } from "./explorer";
import { layout, showSideBarView, togglePanelView } from "./layout";
import { clearNotifications, notifications, showInfo } from "./notifications";
import { compileProject, copyLastCompilationResult, insertTemplate, selectWorkshopLanguage } from "./overpy";
import { AUTH_PROVIDER_NAMES, AUTH_PROVIDERS } from "../../shared/api";
import { linkableProviders, session } from "../lib/session";
import { importWorkshopCodesProject, linkAccount, manageProjects, newProject, renameCurrentProject, signIn, signOut, switchProject } from "./projects";
import { showGoToSymbol, showQuickAccess } from "./quickAccess";
import { showQuickPick } from "./quickInput";
import { search } from "./search";
import { revertFile, saveAll, saveFile, workspace } from "./workspace";

export const DOCUMENTATION_URL = "https://github.com/Zezombye/overpy#readme";

const hasActiveFile = () => activeFilePath.value !== null;

function requireActiveFile(): string {
    const path = activeFilePath.value;
    if (path === null) {
        throw new Error("No active text editor.");
    }
    return path;
}

/** Runs a Monaco editor action on the active editor (used by the Edit/Selection/Go menus). */
export function runEditorAction(actionId: string): void {
    const editor = getCodeEditor();
    if (!editor?.getModel()) {
        return;
    }
    editor.focus();
    editor.trigger("menu", actionId, null);
}

async function selectColorTheme(): Promise<void> {
    const current = settings["workbench.colorTheme"];
    const picked = await showQuickPick(
        ["Dark Modern", "Light Modern"].map((theme) => ({ label: theme, description: theme === current ? "current" : undefined })),
        { placeholder: "Select Color Theme" },
    );
    if (picked) {
        setSetting("workbench.colorTheme", picked.label);
    }
}

export function registerCommands(): void {
    // View
    registerCommand({ id: "workbench.action.showCommands", title: "Show All Commands", keybinding: "mod+shift+p", run: () => showQuickAccess(">") });
    registerCommand({ id: "workbench.action.showCommands.f1", title: "Show All Commands", keybinding: "f1", palette: false, run: () => showQuickAccess(">") });
    registerCommand({ id: "workbench.action.quickOpen", title: "Go to File...", keybinding: "mod+p", run: () => showQuickAccess() });
    registerCommand({ id: "workbench.action.gotoLine", title: "Go to Line/Column...", category: "Go", keybinding: "mod+g", enabled: hasActiveFile, run: () => showQuickAccess(":") });
    registerCommand({ id: "workbench.action.gotoSymbol", title: "Go to Symbol in Editor...", category: "Go", keybinding: "mod+shift+o", enabled: hasActiveFile, run: showGoToSymbol });
    registerCommand({ id: "workbench.view.explorer", title: "Show Explorer", category: "View", keybinding: "mod+shift+e", run: () => showSideBarView("explorer") });
    registerCommand({
        id: "workbench.view.search",
        title: "Search: Find in Files",
        keybinding: "mod+shift+f",
        run: () => {
            const editor = getCodeEditor();
            const selection = editor?.getSelection();
            const model = editor?.getModel();
            if (selection && model && !selection.isEmpty() && selection.startLineNumber === selection.endLineNumber) {
                search.query = model.getValueInRange(selection);
            }
            showSideBarView("search");
            search.focusRequest++;
        },
    });
    registerCommand({ id: "workbench.actions.view.problems", title: "Focus on Problems View", category: "View", keybinding: "mod+shift+m", run: () => togglePanelView("problems") });
    registerCommand({ id: "workbench.action.output.toggleOutput", title: "Toggle Output", category: "View", keybinding: "mod+shift+u", run: () => togglePanelView("output") });
    registerCommand({ id: "workbench.action.toggleSidebarVisibility", title: "Toggle Primary Side Bar Visibility", category: "View", keybinding: "mod+b", run: () => (layout.sideBarVisible = !layout.sideBarVisible) });
    registerCommand({ id: "workbench.action.togglePanel", title: "Toggle Panel Visibility", category: "View", keybinding: "mod+j", run: () => (layout.panelVisible = !layout.panelVisible) });
    registerCommand({
        id: "workbench.action.toggleMaximizedPanel",
        title: "Toggle Maximized Panel",
        category: "View",
        run: () => {
            layout.panelVisible = true;
            layout.panelMaximized = !layout.panelMaximized;
        },
    });
    registerCommand({
        id: "editor.action.toggleWordWrap",
        title: "Toggle Word Wrap",
        category: "View",
        keybinding: "alt+z",
        run: () => setSetting("editor.wordWrap", settings["editor.wordWrap"] === "off" ? "on" : "off"),
    });
    registerCommand({ id: "editor.action.toggleMinimap", title: "Toggle Minimap", category: "View", run: () => setSetting("editor.minimap.enabled", !settings["editor.minimap.enabled"]) });
    registerCommand({ id: "workbench.action.selectTheme", title: "Color Theme", category: "Preferences", run: selectColorTheme });
    registerCommand({ id: "workbench.action.openSettings", title: "Open Settings", category: "Preferences", keybinding: "mod+,", run: openSettingsEditor });
    registerCommand({ id: "workbench.action.openWelcome", title: "Welcome", category: "Help", run: openWelcomePage });

    // Files
    registerCommand({ id: "explorer.newFile", title: "New File...", category: "File", keybinding: "mod+alt+n", run: () => startNewFile() });
    registerCommand({ id: "explorer.newWorkshopFile", title: "New Workshop File...", category: "File", run: () => startNewFile(undefined, "workshop") });
    registerCommand({ id: "explorer.newFolder", title: "New Folder...", category: "File", run: () => startNewFolder() });
    registerCommand({
        id: "workbench.action.files.save",
        title: "Save",
        category: "File",
        keybinding: "mod+s",
        run: async () => {
            const path = activeFilePath.value;
            if (path !== null) {
                await saveFile(path, { manual: true });
            }
        },
    });
    registerCommand({ id: "workbench.action.files.saveAll", title: "Save All", category: "File", keybinding: "mod+alt+s", run: saveAll });
    registerCommand({ id: "workbench.action.files.revert", title: "Revert File", category: "File", enabled: hasActiveFile, run: () => revertFile(requireActiveFile()) });
    registerCommand({
        id: "workbench.action.closeActiveEditor",
        title: "Close Editor",
        category: "View",
        keybinding: "mod+alt+w",
        enabled: () => activeTab.value !== null,
        run: async () => {
            if (editors.activeId) {
                await closeTab(editors.activeId);
            }
        },
    });
    registerCommand({ id: "workbench.action.closeAllEditors", title: "Close All Editors", category: "View", run: closeAllTabs });
    registerCommand({
        id: "workbench.action.closeOtherEditors",
        title: "Close Other Editors",
        category: "View",
        enabled: () => activeTab.value !== null,
        run: () => closeOtherTabs(editors.activeId!),
    });
    registerCommand({ id: "workbench.action.closeUnmodifiedEditors", title: "Close Saved Editors", category: "View", run: closeSavedTabs });
    registerCommand({ id: "workbench.files.action.showActiveFileInExplorer", title: "Reveal Active File in Explorer View", category: "File", enabled: hasActiveFile, run: () => revealInExplorer(requireActiveFile()) });
    registerCommand({ id: "files.upload", title: "Upload Files...", category: "File", run: () => pickFilesToUpload() });
    registerCommand({ id: "files.download", title: "Download Active File", category: "File", enabled: hasActiveFile, run: () => downloadFile(requireActiveFile()) });

    // OverPy (the extension's commands)
    registerCommand({ id: "overpy.compile", title: "Compile Project", category: "OverPy", keybinding: "mod+shift+b", icon: "play", run: compileProject });
    registerCommand({ id: "overpy.decompile", title: "Decompile", category: "OverPy", run: () => (decompileDialog.visible = true) });
    registerCommand({ id: "overpy.insertTemplate", title: "Insert Template", category: "OverPy", run: insertTemplate });
    registerCommand({ id: "overpy.selectWorkshopLanguage", title: "Select Workshop Language", category: "OverPy", run: selectWorkshopLanguage });
    registerCommand({ id: "overpy.copyLastCompilation", title: "Copy Last Compilation Result", category: "OverPy", run: copyLastCompilationResult });

    // Projects and account
    const signedIn = () => session.user !== null;
    registerCommand({ id: "projects.switch", title: "Switch Project...", category: "Projects", enabled: signedIn, run: switchProject });
    registerCommand({ id: "projects.new", title: "New Project...", category: "Projects", enabled: signedIn, run: newProject });
    registerCommand({
        id: "projects.rename",
        title: "Rename Current Project...",
        category: "Projects",
        enabled: () => signedIn() && !workspace.readOnly && !workspace.local,
        run: renameCurrentProject,
    });
    registerCommand({ id: "projects.manage", title: "Manage Projects...", category: "Projects", enabled: signedIn, run: manageProjects });
    registerCommand({ id: "projects.download", title: "Download Project as .zip", category: "Projects", run: downloadProject });
    registerCommand({
        id: "projects.importWorkshopCodes",
        title: "Import workshop.codes project",
        category: "Projects",
        // Without account, the import replaces the local project.
        enabled: () => signedIn() || workspace.local,
        run: importWorkshopCodesProject,
    });
    for (const provider of AUTH_PROVIDERS) {
        registerCommand({
            id: `account.link.${provider}`,
            title: `Link ${AUTH_PROVIDER_NAMES[provider]} Account...`,
            category: "Account",
            enabled: () => linkableProviders().includes(provider),
            run: () => linkAccount(provider),
        });
    }
    registerCommand({ id: "account.signIn", title: "Sign In...", category: "Account", enabled: () => !signedIn(), run: signIn });
    registerCommand({ id: "account.signOut", title: "Sign Out", category: "Account", enabled: signedIn, run: signOut });

    // Notifications and help
    registerCommand({ id: "notifications.clearAll", title: "Clear All Notifications", category: "Notifications", run: clearNotifications });
    registerCommand({
        id: "notifications.toggleDoNotDisturbMode",
        title: "Toggle Do Not Disturb Mode",
        category: "Notifications",
        run: () => {
            notifications.doNotDisturb = !notifications.doNotDisturb;
            showInfo(notifications.doNotDisturb ? "Do Not Disturb mode enabled: only errors are shown as popups." : "Do Not Disturb mode disabled.");
        },
    });
    registerCommand({ id: "help.documentation", title: "OverPy Documentation", category: "Help", run: () => window.open(DOCUMENTATION_URL, "_blank", "noopener") });
    registerCommand({ id: "workbench.action.reloadWindow", title: "Reload Window", category: "Developer", run: () => location.reload() });
}
