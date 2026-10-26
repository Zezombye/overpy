import { AUTH_PROVIDER_NAMES, type AuthProvider, validateProjectName } from "../../shared/api";
import { api, oauthStartUrl } from "../lib/api";
import { formatRelativeTime } from "../lib/format";
import { ideUrl } from "../lib/router";
import { linkableProviders, logout, session } from "../lib/session";
import { getSetting } from "../lib/settings";
import { importIntoNewProject, notDecompiledMessage, parseWorkshopCodesExport, pickFile, projectNameForFile } from "../lib/workshopCodesImport";
import { executeCommand, keybindingLabel } from "./commands";
import type { MenuItem } from "./contextMenu";
import { showDialog } from "./dialogs";
import { withProgress } from "./notifications";
import { showInputBox, showQuickPick } from "./quickInput";
import { saveAll, workspace } from "./workspace";

/* Project switching and account actions, available from the title bar. */

let leaving = false;

/** True once the user confirmed leaving the page, so that the beforeunload prompt is skipped. */
export function isLeaving(): boolean {
    return leaving;
}

/** Asks what to do with unsaved files. Resolves to false if the user cancels. */
async function confirmUnsavedChanges(action: string): Promise<boolean> {
    const count = workspace.dirty.size;
    if (count === 0) {
        return true;
    }
    const choice = await showDialog({
        message: `Do you want to save the changes you made to ${count} file${count === 1 ? "" : "s"} before ${action}?`,
        detail: "Your changes will be lost if you don't save them.",
        severity: "warning",
        buttons: ["Save All", "Don't Save", "Cancel"],
        cancelId: 2,
    });
    if (choice === 2) {
        return false;
    }
    if (choice === 0) {
        await saveAll();
    }
    return true;
}

/** Leaves the IDE (full page load: the IDE's global state lives as long as the page). */
async function leaveTo(url: string, action: string): Promise<void> {
    if (!(await confirmUnsavedChanges(action))) {
        return;
    }
    leaving = true;
    location.assign(url);
}

export async function switchProject(): Promise<void> {
    const projectsPromise = api.listProjects().then(({ projects }) => [
        ...projects.map((project) => ({
            label: project.name,
            description: project.id === workspace.project?.id ? "current project" : `updated ${formatRelativeTime(project.updatedAt)}`,
            icon: project.id === workspace.project?.id ? "folder-opened" : "folder",
            action: () => (project.id === workspace.project?.id ? Promise.resolve() : leaveTo(ideUrl(project.id), "switching projects")),
        })),
        { label: "New Project...", icon: "add", separator: "", alwaysShow: true, action: newProject },
        { label: "Manage Projects...", icon: "folder-library", alwaysShow: true, action: manageProjects },
    ]);
    const picked = await showQuickPick(projectsPromise, { placeholder: "Select a project to open" });
    await picked?.action();
}

export async function newProject(): Promise<void> {
    const name = await showInputBox({
        title: "New Project",
        prompt: "The project is created in your account and opened.",
        placeholder: "Project name",
        validate: (value) => (value === "" ? null : validateProjectName(value)),
    });
    if (!name) {
        return;
    }
    const { project } = await api.createProject(name);
    await leaveTo(ideUrl(project.id), "opening the new project");
}

export async function renameCurrentProject(): Promise<void> {
    const project = workspace.project!;
    const name = await showInputBox({
        title: "Rename Project",
        prompt: "The project's root folder is renamed too, so the page is reloaded.",
        value: project.name,
        valueSelection: [0, project.name.length],
        validate: validateProjectName,
    });
    if (!name || name === project.name) {
        return;
    }
    if (!(await confirmUnsavedChanges("renaming the project"))) {
        return;
    }
    await api.renameProject(project.id, name);
    leaving = true;
    location.reload();
}

export async function manageProjects(): Promise<void> {
    await leaveTo("/", "leaving the project");
}

export async function signOut(): Promise<void> {
    if (!(await confirmUnsavedChanges("signing out"))) {
        return;
    }
    await logout();
    leaving = true;
    location.assign("/login");
}

/** The account menu (title bar and activity bar). */
export function accountMenuItems(): MenuItem[] {
    const linked = session.identities.map((provider) => AUTH_PROVIDER_NAMES[provider]).join(" and ");
    return [
        { label: `${session.user?.name}${linked ? ` (${linked})` : ""}`, run: () => {}, disabled: true },
        { separator: true },
        ...linkableProviders().map((provider) => ({ label: `Link ${AUTH_PROVIDER_NAMES[provider]} Account...`, run: () => linkAccount(provider) })),
        { label: "Settings", keybinding: keybindingLabel("mod+,"), run: () => executeCommand("workbench.action.openSettings") },
        { separator: true },
        { label: "Sign Out", run: signOut },
    ];
}

/** Imports a workshop.codes project export into a new project, then opens it. */
export async function importWorkshopCodesProject(): Promise<void> {
    const file = await pickFile(".json,application/json");
    if (!file) {
        return;
    }
    const imported = parseWorkshopCodesExport(await file.text());
    const defaultName = projectNameForFile(file);
    const name = await showInputBox({
        title: "Import workshop.codes Project",
        prompt: `${imported.fileCount} workshop files will be imported into a new project.${imported.hasTranslations ? " Translations are not imported." : ""}`,
        value: defaultName,
        valueSelection: [0, defaultName.length],
        validate: validateProjectName,
    });
    if (!name) {
        return;
    }
    const mode = await showQuickPick(
        [
            { label: "Keep the workshop files", detail: "They are decompiled when the project is compiled.", decompile: false },
            { label: "Decompile into OverPy files", detail: "Files that cannot be decompiled are kept as workshop files.", decompile: true },
        ],
        { title: "Import workshop.codes Project", placeholder: "Import the files as workshop files, or decompile them?" },
    );
    if (!mode) {
        return;
    }
    const result = await withProgress(`Importing '${name}'...`, () =>
        importIntoNewProject(name, imported, { decompile: mode.decompile, language: getSetting<string>("overpy.workshopLanguage") }, () => {}),
    );
    if (result.notDecompiled.length > 0) {
        await showDialog({
            message: `'${name}' was imported, but ${result.notDecompiled.length} file(s) could not be decompiled and were kept as workshop files (.ow).`,
            detail: notDecompiledMessage(result.notDecompiled),
            severity: "warning",
            buttons: ["Open Project"],
        });
    }
    await leaveTo(ideUrl(result.project.id), "opening the imported project");
}

/** Lets the user also sign in to this account with another provider (goes through the provider's page). */
export async function linkAccount(provider: AuthProvider): Promise<void> {
    await leaveTo(oauthStartUrl(provider, { next: location.pathname, link: true }), `linking your ${AUTH_PROVIDER_NAMES[provider]} account`);
}
