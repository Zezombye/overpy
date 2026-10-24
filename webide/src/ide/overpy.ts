import { reactive } from "vue";

import { getSetting, setSetting, settingDefinitions } from "../lib/settings";
import { activeFilePath, getCodeEditor, openFile } from "./editors";
import { getLanguageClient } from "./languageServer";
import { showError, showInfo, showWarning } from "./notifications";
import { appendOutput, OVERPY_CHANNEL } from "./output";
import { basename, dirname, extension, joinPath } from "./paths";
import { showQuickPick } from "./quickInput";
import { orderedCodeFiles } from "./projectOrder";
import { createFile, fsPathOf, getModel, isCodeFile, onDidSaveFile, pathOfFsPath, workspace, writeFile } from "./workspace";

/* The commands of the OverPy extension (see ../src/extension.ts), adapted to the browser. */

export const compilation = reactive({
    running: false,
    lastResult: null as string | null,
});

function normalizeFsPath(path: string): string {
    const segments: string[] = [];
    for (const segment of path.split("/")) {
        if (segment === "" || segment === ".") {
            continue;
        }
        if (segment === "..") {
            segments.pop();
        } else {
            segments.push(segment);
        }
    }
    return "/" + segments.join("/");
}

async function copyCompilationResult(text: string, successMessage: string | null): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
        if (successMessage) {
            showInfo(successMessage);
        }
    } catch (error) {
        // Browsers only allow clipboard writes shortly after a user action: offer a button to retry.
        console.warn("Clipboard write failed", error);
        showWarning("Successfully compiled, but the browser blocked the clipboard access.", [
            {
                label: "Copy to Clipboard",
                run: async () => {
                    await navigator.clipboard.writeText(text);
                    showInfo("Copied into clipboard.");
                },
            },
        ]);
    }
}

/**
 * Compiles the project: all OverPy and workshop files, in the explorer's order, workshop files being
 * decompiled first (see lsp/project.ts). Unsaved changes are included.
 */
export async function compileProject(): Promise<void> {
    const client = getLanguageClient();
    const language = getSetting<string>("overpy.workshopLanguage");
    const showElementCount = getSetting<boolean>("overpy.showElementCountOnCompile");
    const unsavedFiles = [...workspace.dirty].filter(isCodeFile).map((path) => ({ path: fsPathOf(path), content: getModel(path)!.getValue() }));

    compilation.running = true;
    appendOutput(OVERPY_CHANNEL, `Compiling ${orderedCodeFiles.value.length} file(s) in this order (${language}):\n${orderedCodeFiles.value.map((path) => `  ${path}`).join("\n")}`);
    const start = performance.now();
    let result;
    try {
        result = await client.compile(language, unsavedFiles);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        appendOutput(OVERPY_CHANNEL, `Error: ${message}`);
        showError(`Error: ${message}`);
        return;
    } finally {
        compilation.running = false;
    }
    compilation.lastResult = result.result;
    appendOutput(OVERPY_CHANNEL, `Compiled in ${Math.round(performance.now() - start)} ms: ${result.nbElements} elements, ${result.warnings.length} warning(s).`);
    for (const warning of result.warnings) {
        appendOutput(OVERPY_CHANNEL, `Warning: ${warning}`);
        showWarning(`Warning: ${warning}`);
    }

    if (result.writeToOutputFile) {
        const outputFsPath = normalizeFsPath(`${result.rootPath}/${result.mainFileName.replace(/\.opy$/, "")}.ws.txt`);
        const outputPath = pathOfFsPath(outputFsPath);
        if (outputPath === undefined) {
            throw new Error(`Cannot write the output file '${outputFsPath}': it is outside of the project.`);
        }
        await writeFile(outputPath, result.result);
        appendOutput(OVERPY_CHANNEL, `Written to ${outputPath}.`);
        showInfo(`Successfully compiled! (written to ${basename(outputPath)}${showElementCount ? `; ${result.nbElements} elements` : ""})`);
        await copyCompilationResult(result.result, null);
    } else {
        await copyCompilationResult(result.result, `Successfully compiled! (copied into clipboard${showElementCount ? `; ${result.nbElements} elements` : ""})`);
    }
}

export async function copyLastCompilationResult(): Promise<void> {
    if (compilation.lastResult === null) {
        showError("Nothing was compiled yet.");
        return;
    }
    await navigator.clipboard.writeText(compilation.lastResult);
    showInfo("Copied the last compilation result into the clipboard.");
}

/** Like the extension's compileOnSave: only explicit saves trigger a compilation. */
export function enableCompileOnSave(): void {
    onDidSaveFile.on(({ path, manual }) => {
        if (!manual || !isCodeFile(path) || !getSetting<boolean>("overpy.compileOnSave")) {
            return;
        }
        const text = getModel(path)?.getValue() ?? "";
        if (getSetting<boolean>("overpy.onlySaveOnMainFile") && text.startsWith("#!mainFile ")) {
            return;
        }
        compileProject().catch((error) => showError(`Error: ${error instanceof Error ? error.message : String(error)}`));
    });
}

function uniquePath(directory: string, fileName: string): string {
    const ext = extension(fileName);
    const stem = fileName.substring(0, fileName.length - ext.length);
    let candidate = joinPath(directory, fileName);
    for (let i = 1; workspace.entries.has(candidate); i++) {
        candidate = joinPath(directory, `${stem} (${i})${ext}`);
    }
    return candidate;
}

/** Decompiles workshop code into a new file next to the active file (or at the root). */
export async function decompileToNewFile(workshopCode: string, fileName: string): Promise<void> {
    if (workshopCode.trim() === "") {
        throw new Error("Paste the workshop code you want to decompile.");
    }
    const language = getSetting<string>("overpy.workshopLanguage");
    let decompiled: string;
    try {
        decompiled = (await getLanguageClient().decompile(workshopCode, language)).result;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        showError(`Error: ${message}. Please ensure the code is copied directly from Overwatch. If so, send a message in #hll-scripting about this.`);
        return;
    }
    const directory = activeFilePath.value ? dirname(activeFilePath.value) : "";
    const path = uniquePath(directory, fileName.endsWith(".opy") ? fileName : `${fileName}.opy`);
    await createFile(path, decompiled);
    openFile(path);
    showInfo(`Successfully decompiled into ${path}!`);
}

export async function getTemplate(): Promise<string> {
    return getLanguageClient().getTemplate();
}

export async function insertTemplate(): Promise<void> {
    const editor = getCodeEditor();
    const selection = editor?.getSelection();
    if (!editor || !selection || !editor.getModel()) {
        showError("No active editor found. Please open a new editor tab before re-running this command.");
        return;
    }
    const template = await getTemplate();
    editor.executeEdits("overpy.insertTemplate", [{ range: selection, text: template, forceMoveMarkers: true }]);
    editor.focus();
    showInfo("Template successfully inserted!");
}

export async function selectWorkshopLanguage(): Promise<void> {
    const definition = settingDefinitions.find((candidate) => candidate.key === "overpy.workshopLanguage")!;
    const current = getSetting<string>("overpy.workshopLanguage");
    const picked = await showQuickPick(
        definition.enum!.map((language, index) => ({
            label: definition.enumDescriptions?.[index] ?? language,
            description: language === current ? "current" : undefined,
            language,
        })),
        { placeholder: "Select the language used for compilation and decompilation", value: "" },
    );
    if (picked) {
        setSetting("overpy.workshopLanguage", picked.language);
    }
}
