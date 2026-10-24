import { MAX_ENTRIES_PER_PROJECT, MAX_FILE_BYTES, type ProjectSummary } from "../../shared/api";
import { api } from "./api";

/*
 * Import of a workshop.codes project export (JSON). Its items become workshop (.ow) files, and its folders
 * become folders. Items are ordered by position in workshop.codes, and the IDE compiles files in name
 * order: names get a number prefix ("01 Settings.ow") that keeps the workshop.codes order.
 * workshop.codes' own syntax extensions (e.g. mixins) are not supported; translations are not imported.
 */

export interface ImportedEntry {
    path: string;
    type: "file" | "dir";
    content?: string;
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
    const { name, id, type, position, content, parent } = raw;
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
    return { name, id, type, position, content: typeof content === "string" ? content : "", parent: typeof parent === "string" ? parent : "" };
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
        const width = Math.max(2, String(children.length).length);
        children.forEach((item, index) => {
            if (visited.has(item.id)) {
                invalid(`'${item.name}' is in a folder cycle.`);
            }
            visited.add(item.id);
            const name = `${String(index + 1).padStart(width, "0")} ${sanitizeName(item.name)}`;
            const path = directory === "" ? name : `${directory}/${name}`;
            if (item.type === "folder") {
                entries.push({ path, type: "dir" });
                visit(item.id, path);
            } else {
                if (new TextEncoder().encode(item.content).length > MAX_FILE_BYTES) {
                    throw new Error(`'${item.name}' is too large to be imported (the limit is ${MAX_FILE_BYTES / 1_000_000} MB per file).`);
                }
                entries.push({ path: path + WORKSHOP_FILE_EXTENSION, type: "file", content: item.content });
            }
        });
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

/** Creates a project with the imported files. */
export async function importIntoNewProject(name: string, imported: WorkshopCodesImport, onProgress: (done: number, total: number) => void): Promise<ProjectSummary> {
    const { project } = await api.createProject(name);
    let done = 0;
    try {
        for (const entry of imported.entries) {
            if (entry.type === "dir") {
                await api.createDirectory(project.id, entry.path);
            } else {
                await api.writeFile(project.id, { path: entry.path, content: entry.content ?? "", create: true });
            }
            onProgress(++done, imported.entries.length);
        }
    } catch (error) {
        throw new Error(
            `The import stopped after ${done} of ${imported.entries.length} files and folders (the project '${name}' contains those imported so far): ${error instanceof Error ? error.message : String(error)}`,
        );
    }
    return project;
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
