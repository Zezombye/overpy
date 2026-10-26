import { MAX_ENTRIES_PER_PROJECT, MAX_FILE_BYTES, MAX_IMPORT_BYTES_PER_REQUEST, type ProjectSummary } from "../../shared/api";
import { api } from "./api";

/*
 * Import of a workshop.codes project export (JSON). Its items become workshop (.ow) files, and its folders
 * become folders, in the same order. Hidden items (excluded from the compilation) become disabled entries.
 * Optionally, the files are decompiled into OverPy (.opy) files, with their workshop.codes syntax expanded
 * (see lsp/workshopProject.ts); the variables and subroutines they use are then declared in a first file,
 * "Declarations.opy", with #!optimizeStrict. Translations are not imported.
 */

export interface ImportedEntry {
    path: string;
    type: "file" | "dir";
    content?: string;
    disabled?: boolean;
}

export interface WorkshopCodesImport {
    entries: ImportedEntry[];
    fileCount: number;
    /** The export has translations, which are not imported. */
    hasTranslations: boolean;
}

interface WorkshopCodesItem {
    name: string;
    id: string;
    type: "item" | "folder";
    position: number;
    content: string;
    parent: string;
    hidden: boolean;
}

const WORKSHOP_FILE_EXTENSION = ".ow";
const MAX_NAME_LENGTH = 80;

function invalid(message: string): never {
    throw new Error(`This is not a valid workshop.codes export: ${message}`);
}

function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseItem(raw: unknown, index: number): WorkshopCodesItem {
    if (!isObject(raw)) {
        invalid(`item #${index + 1} is not an object.`);
    }
    const { name, id, type, position, content, parent, hidden } = raw;
    if (typeof name !== "string" || typeof id !== "string" || id === "") {
        invalid(`item #${index + 1} has no name or id.`);
    }
    if (type !== "item" && type !== "folder") {
        invalid(`item '${name}' has an unknown type '${String(type)}'.`);
    }
    if (typeof position !== "number" || (typeof parent !== "string" && parent !== null && parent !== undefined)) {
        invalid(`item '${name}' has no valid position or parent.`);
    }
    if (type === "item" && typeof content !== "string") {
        invalid(`item '${name}' has no content.`);
    }
    if (hidden !== undefined && typeof hidden !== "boolean") {
        invalid(`item '${name}' has an invalid 'hidden' value.`);
    }
    return {
        name,
        id,
        type,
        position,
        content: typeof content === "string" ? content : "",
        parent: typeof parent === "string" ? parent : "",
        hidden: hidden === true,
    };
}

/** "name.ext", or "name (1).ext", "name (2).ext"... if a sibling already has this name (workshop.codes allows it). */
function uniqueName(name: string, extension: string, usedNames: Set<string>): string {
    let candidate = name + extension;
    for (let i = 1; usedNames.has(candidate.toLowerCase()); i++) {
        candidate = `${name} (${i})${extension}`;
    }
    usedNames.add(candidate.toLowerCase());
    return candidate;
}

/** Makes a workshop.codes item name usable as a file or folder name. */
function sanitizeName(name: string): string {
    const sanitized = name
        .replace(/[\\/:*?"<>|\u0000-\u001f\u007f]/g, "_")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, MAX_NAME_LENGTH)
        .trim();
    return sanitized === "" || sanitized === "." || sanitized === ".." ? "Untitled" : sanitized;
}

export function parseWorkshopCodesExport(text: string): WorkshopCodesImport {
    let data: unknown;
    try {
        data = JSON.parse(text);
    } catch (error) {
        invalid(`the file is not JSON (${error instanceof Error ? error.message : String(error)}).`);
    }
    if (!isObject(data) || !Array.isArray(data.items)) {
        invalid("there is no 'items' list.");
    }
    const items = data.items.map(parseItem);

    const folderIds = new Set(items.filter((item) => item.type === "folder").map((item) => item.id));
    const childrenByParent = new Map<string, WorkshopCodesItem[]>();
    const seenIds = new Set<string>();
    for (const item of items) {
        if (seenIds.has(item.id)) {
            invalid(`the id '${item.id}' is used twice.`);
        }
        seenIds.add(item.id);
        if (item.parent !== "" && !folderIds.has(item.parent)) {
            invalid(`'${item.name}' is in a folder that does not exist.`);
        }
        const siblings = childrenByParent.get(item.parent) ?? [];
        siblings.push(item);
        childrenByParent.set(item.parent, siblings);
    }

    const entries: ImportedEntry[] = [];
    const visited = new Set<string>();
    const visit = (parentId: string, directory: string) => {
        const children = (childrenByParent.get(parentId) ?? []).sort((a, b) => a.position - b.position);
        const usedNames = new Set<string>();
        for (const item of children) {
            if (visited.has(item.id)) {
                invalid(`'${item.name}' is in a folder cycle.`);
            }
            visited.add(item.id);
            const name = uniqueName(sanitizeName(item.name), item.type === "folder" ? "" : WORKSHOP_FILE_EXTENSION, usedNames);
            const path = directory === "" ? name : `${directory}/${name}`;
            if (item.type === "folder") {
                entries.push({ path, type: "dir", disabled: item.hidden });
                visit(item.id, path);
            } else {
                if (new TextEncoder().encode(item.content).length > MAX_FILE_BYTES) {
                    throw new Error(`'${item.name}' is too large to be imported (the limit is ${MAX_FILE_BYTES / 1_000_000} MB per file).`);
                }
                entries.push({ path, type: "file", content: item.content, disabled: item.hidden });
            }
        }
    };
    visit("", "");
    if (visited.size !== items.length) {
        invalid("some folders are not reachable from the root.");
    }
    if (entries.length > MAX_ENTRIES_PER_PROJECT) {
        throw new Error(`This project has ${entries.length} files and folders, more than the limit of ${MAX_ENTRIES_PER_PROJECT}.`);
    }

    const translations = data.translations;
    const hasTranslations = isObject(translations) && isObject(translations.keys) && Object.keys(translations.keys).length > 0;
    return { entries, fileCount: entries.filter((entry) => entry.type === "file").length, hasTranslations };
}

const DECLARATIONS_FILE_NAME = "Declarations";

export interface ImportResult {
    project: ProjectSummary;
    /** Files that could not be decompiled, kept as workshop files. */
    notDecompiled: { path: string; error: string }[];
}

/** Replaces the workshop files by their decompilation, when it succeeds. */
async function decompileEntries(imported: WorkshopCodesImport, language: string, notDecompiled: ImportResult["notDecompiled"]): Promise<ImportedEntry[]> {
    // Only loaded when needed: it brings the language server protocol.
    const { decompileFilesInWorker } = await import("./overpyWorker");
    const disabledFolders = imported.entries.filter((entry) => entry.type === "dir" && entry.disabled).map((entry) => entry.path);
    const result = await decompileFilesInWorker({
        language,
        files: imported.entries
            .filter((entry) => entry.type === "file")
            .map((entry) => ({
                path: entry.path,
                content: entry.content ?? "",
                disabled: entry.disabled || disabledFolders.some((folder) => entry.path.startsWith(folder + "/")),
            })),
    });
    const decompiledByPath = new Map(result.files.map((file) => [file.path, file]));
    const entries = imported.entries.map((entry): ImportedEntry => {
        const decompiled = decompiledByPath.get(entry.path);
        if (entry.type === "dir" || !decompiled) {
            return entry;
        }
        if ("error" in decompiled) {
            notDecompiled.push({ path: entry.path, error: decompiled.error });
            return entry;
        }
        return { ...entry, path: entry.path.slice(0, -WORKSHOP_FILE_EXTENSION.length) + ".opy", content: decompiled.content };
    });
    if (result.declarations !== "") {
        const rootNames = new Set(entries.filter((entry) => !entry.path.includes("/")).map((entry) => entry.path.toLowerCase()));
        entries.unshift({
            path: uniqueName(DECLARATIONS_FILE_NAME, ".opy", rootNames),
            type: "file",
            content: `# Variables, subroutines and extensions used by the decompiled files.\n\n${result.declarations}`,
        });
    }
    return entries;
}

/** Splits entries into import requests within the server limits. */
function importChunks(entries: ImportedEntry[]): ImportedEntry[][] {
    const encoder = new TextEncoder();
    const chunks: ImportedEntry[][] = [];
    let chunk: ImportedEntry[] = [];
    let chunkBytes = 0;
    for (const entry of entries) {
        const bytes = entry.type === "file" ? encoder.encode(entry.content ?? "").length : 0;
        if (chunk.length > 0 && (chunk.length >= MAX_ENTRIES_PER_PROJECT || chunkBytes + bytes > MAX_IMPORT_BYTES_PER_REQUEST)) {
            chunks.push(chunk);
            chunk = [];
            chunkBytes = 0;
        }
        chunk.push(entry);
        chunkBytes += bytes;
    }
    if (chunk.length > 0) {
        chunks.push(chunk);
    }
    return chunks;
}

/** Creates a project with the imported files, optionally decompiled. */
export async function importIntoNewProject(
    name: string,
    imported: WorkshopCodesImport,
    options: { decompile: boolean; language: string },
    onProgress: (message: string) => void,
): Promise<ImportResult> {
    const notDecompiled: ImportResult["notDecompiled"] = [];
    let entries = imported.entries;
    if (options.decompile) {
        onProgress("Decompiling…");
        entries = await decompileEntries(imported, options.language, notDecompiled);
    }
    onProgress("Creating the project…");
    const { project } = await api.createProject(name);
    let done = 0;
    try {
        for (const chunk of importChunks(entries)) {
            onProgress(`Importing ${done} / ${entries.length}…`);
            await api.importEntries(project.id, { entries: chunk });
            done += chunk.length;
        }
    } catch (error) {
        throw new Error(
            `The import stopped after ${done} of ${entries.length} files and folders (the project '${name}' contains those imported so far): ${error instanceof Error ? error.message : String(error)}`,
        );
    }
    return { project, notDecompiled };
}

/** Message listing the files that could not be decompiled. */
export function notDecompiledMessage(notDecompiled: ImportResult["notDecompiled"]): string {
    return notDecompiled.map(({ path, error }) => `${path}: ${error.replace(/^Could not decompile the workshop file '[^']*': /, "")}`).join("\n");
}

/** Lets the user pick a file. Resolves to undefined if cancelled. */
export function pickFile(accept: string): Promise<File | undefined> {
    return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = accept;
        input.addEventListener("change", () => resolve(input.files?.[0]));
        input.addEventListener("cancel", () => resolve(undefined));
        input.click();
    });
}

/** Default project name for an export file ("my-mode.json" -> "my-mode"). */
export function projectNameForFile(file: File): string {
    return sanitizeName(file.name.replace(/\.json$/i, "")).slice(0, 64);
}
