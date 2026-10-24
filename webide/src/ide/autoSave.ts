import { watch } from "vue";

import { getSetting } from "../lib/settings";
import { activeFilePath, getCodeEditor } from "./editors";
import { reportError } from "./notifications";
import { onDidChangeFileContent, saveFile, workspace } from "./workspace";

/* The `files.autoSave` setting. Automatic saves do not trigger "compile on save". */

const timers = new Map<string, ReturnType<typeof setTimeout>>();

function autoSave(path: string): void {
    if (workspace.dirty.has(path) && workspace.entries.has(path)) {
        saveFile(path, { manual: false }).catch((error) => reportError(error, `Could not save '${path}'`));
    }
}

export function enableAutoSave(): void {
    onDidChangeFileContent.on((path) => {
        if (getSetting<string>("files.autoSave") !== "afterDelay") {
            return;
        }
        clearTimeout(timers.get(path));
        timers.set(
            path,
            setTimeout(() => {
                timers.delete(path);
                autoSave(path);
            }, getSetting<number>("files.autoSaveDelay")),
        );
    });

    const saveOnFocusChange = (path: string | null) => {
        if (path !== null && getSetting<string>("files.autoSave") === "onFocusChange") {
            autoSave(path);
        }
    };
    watch(activeFilePath, (_current, previous) => saveOnFocusChange(previous));
    getCodeEditor()?.onDidBlurEditorText(() => saveOnFocusChange(activeFilePath.value));
    window.addEventListener("blur", () => {
        if (getSetting<string>("files.autoSave") === "onFocusChange") {
            for (const path of [...workspace.dirty]) {
                autoSave(path);
            }
        }
    });
}
