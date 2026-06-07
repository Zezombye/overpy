import { postInitialLoad } from "../globalVars";
import { initializeQuickJSRuntime } from "../quickjs";
import { initializeCompletionState } from "./completionState";

let dataInitialized = false;
let runtimeInitialized = false;

export async function initializeLanguageServerData(): Promise<void> {
    if (dataInitialized) {
        return;
    }

    postInitialLoad();
    initializeCompletionState();
    dataInitialized = true;
}

export async function initializeLanguageServerRuntime(): Promise<void> {
    if (runtimeInitialized) {
        return;
    }

    await initializeLanguageServerData();
    await initializeQuickJSRuntime();
    runtimeInitialized = true;
}
