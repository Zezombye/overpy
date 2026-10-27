import { reactive, watch } from "vue";

import type { FileWrittenParams, SetProjectFilesParams } from "../../lsp/protocol";
import { projectSettingsDirectives } from "../../shared/projectSettings";
import { settings } from "../lib/settings";
import { setLanguageClient } from "./editors";
import { LanguageClient } from "./monaco/lspClient";
import { OVERPY_LANGUAGE_ID } from "./monaco/overpyLanguage";
import { notify, reportError, showError, showWarning } from "./notifications";
import { appendOutput, LANGUAGE_SERVER_CHANNEL, OVERPY_CHANNEL } from "./output";
import { orderedCodeFiles } from "./projectOrder";
import { attachLanguageClient, fsPathOf, isCodeFile, onDidSaveFile, pathOfFsPath, rootFsPath, rootUri, workspace, writeFile } from "./workspace";

/** The files to compile and the project settings, for the language server: see SetProjectFilesParams. */
export function projectFilesParams(): SetProjectFilesParams {
    return { root: rootFsPath(), files: orderedCodeFiles.value.map(fsPathOf), directives: projectSettingsDirectives(workspace.settings) };
}

/** Writes a file written by the compiler (e.g. .po translation files) into the project. */
export function onCompilerFileWritten({ path, content }: FileWrittenParams): void {
    const relativePath = pathOfFsPath(path);
    if (relativePath === undefined) {
        showWarning(`The compiler tried to write '${path}', which is outside of the project. The file was not written.`);
        return;
    }
    if (workspace.readOnly) {
        appendOutput(OVERPY_CHANNEL, `'${relativePath}' was not written: the project is read only.`);
        return;
    }
    writeFile(relativePath, content).catch((error) => reportError(error, `Could not write '${relativePath}'`));
}

export const languageServer = reactive({
    status: "starting" as "starting" | "running" | "stopped",
});

let client: LanguageClient | undefined;

/** The `overpy.*` settings, without the prefix (the configuration section requested by the server). */
function overpySettings(): Record<string, unknown> {
    return Object.fromEntries(
        Object.entries(settings)
            .filter(([key]) => key.startsWith("overpy."))
            .map(([key, value]) => [key.substring("overpy.".length), value]),
    );
}

export function getLanguageClient(): LanguageClient {
    if (!client || languageServer.status !== "running") {
        throw new Error(languageServer.status === "starting" ? "The OverPy language server is still starting, please retry in a moment." : "The OverPy language server is not running. Reload the page to restart it.");
    }
    return client;
}

export async function startLanguageServer(): Promise<void> {
    appendOutput(LANGUAGE_SERVER_CHANNEL, "Starting the OverPy language server...");
    client = await LanguageClient.start({
        languageId: OVERPY_LANGUAGE_ID,
        workspaceFolder: rootUri(),
        workspaceName: workspace.project!.name,
        getSettings: overpySettings,
        log: (message) => appendOutput(LANGUAGE_SERVER_CHANNEL, message),
        showMessage: (severity, message) => notify(severity, message),
        onFileWritten: onCompilerFileWritten,
        onStopped: (reason) => {
            languageServer.status = "stopped";
            appendOutput(LANGUAGE_SERVER_CHANNEL, `The language server stopped: ${reason}`);
            showError(`The OverPy language server stopped: ${reason}`, [{ label: "Reload Page", run: () => location.reload() }]);
        },
    });
    const runningClient = client;
    attachLanguageClient(runningClient);
    // Before the documents are opened: they are validated as part of the project.
    watch(projectFilesParams, (params) => runningClient.setProjectFiles(params), { immediate: true });
    setLanguageClient(runningClient);
    languageServer.status = "running";
    appendOutput(LANGUAGE_SERVER_CHANNEL, "The OverPy language server is running.");

    watch(overpySettings, () => runningClient.didChangeConfiguration(), { deep: true });

    // Open files are validated by compiling the whole project, so validate them again when other files
    // change. (A configuration change makes the server validate every open document.)
    let revalidationTimer: ReturnType<typeof setTimeout> | undefined;
    const scheduleRevalidation = () => {
        clearTimeout(revalidationTimer);
        revalidationTimer = setTimeout(() => runningClient.didChangeConfiguration(), 500);
    };
    onDidSaveFile.on(({ path }) => {
        if (isCodeFile(path)) {
            scheduleRevalidation();
        }
    });
    watch(projectFilesParams, scheduleRevalidation);
}
