/*
 * Decompilation of a project's workshop (.ow) files. Like the workshop.codes editor, which compiles all its
 * items joined together, the files are joined in the explorer's order (with a marker comment where each
 * file starts; OverPy files are only a marker, so that they keep their place) and their workshop.codes
 * syntax is expanded at once. The plain workshop code is then split back at the markers, and each file is
 * decompiled on its own: a file that did not change is not decompiled again, and errors are in the right file.
 */
import { decompileAllRules } from "../../src/decompiler/decompiler";
import type { OWLanguage } from "../../src/types.d";
import { ProjectError, ProjectFileError } from "./projectErrors";
import { expandWorkshopCodesSyntax, extractMixins, type Mixins, removeComments, WorkshopCodesError } from "./workshopCodes/compiler";

export interface WorkshopProjectFile {
    path: string;
    /** A workshop file, or an OverPy file (which only keeps its place). */
    isWorkshop: boolean;
    content: string;
}

type DeclarationKind = "globalvar" | "playervar" | "subroutine";

export interface DecompiledFile {
    /** The decompiled code, without its declarations. */
    body: string;
    /** Declared names, with their index (null if not set). */
    declarations: { kind: DeclarationKind; name: string; index: number | null }[];
    extensions: string[];
}

const fileName = (path: string) => path.substring(path.lastIndexOf("/") + 1);
const lineOf = (content: string, index: number) => content.slice(0, index).split("\n").length;

// --- workshop.codes syntax ---

const markerComment = (fileIndex: number) => `//__overpy_file_${fileIndex}__`;
const MARKER_COMMENT = /^\/\/__overpy_file_(\d+)__$/;

const MAX_CACHED_EXPANSIONS = 10;
const expansionCache = new Map<string, { result: Map<string, string> } | { error: ProjectError }>();

/**
 * Expands the workshop.codes syntax of the project's workshop files, joined together.
 * @param files The project's code files, in compilation order.
 * @returns The plain workshop code of each workshop file.
 */
export function expandWorkshopFiles(files: WorkshopProjectFile[]): Map<string, string> {
    const joined = files.map((file, index) => `${markerComment(index)}\n${file.isWorkshop ? removeComments(file.content) : ""}`).join("\n\n");
    // The OverPy files are not part of the key: editing them does not expand again.
    let cached = expansionCache.get(joined);
    if (cached === undefined) {
        try {
            cached = { result: expandJoinedFiles(files, joined) };
        } catch (error) {
            if (!(error instanceof ProjectError)) {
                throw error;
            }
            cached = { error };
        }
        if (expansionCache.size >= MAX_CACHED_EXPANSIONS) {
            expansionCache.clear();
        }
        expansionCache.set(joined, cached);
    }
    if ("error" in cached) {
        throw cached.error;
    }
    return cached.result;
}

function expandJoinedFiles(files: WorkshopProjectFile[], joined: string): Map<string, string> {
    let expanded: string;
    try {
        const mixins: Mixins = {};
        expanded = expandWorkshopCodesSyntax(extractMixins(joined, mixins), mixins);
    } catch (error) {
        if (error instanceof WorkshopCodesError) {
            throw locateWorkshopCodesError(error, files);
        }
        throw error;
    }
    return splitAtMarkers(expanded, files);
}

/** The error, in the file that has the code causing it (if found, else in the first workshop file). */
function locateWorkshopCodesError(error: WorkshopCodesError, files: WorkshopProjectFile[]): ProjectFileError {
    const message = `workshop.codes syntax: ${error.message}`;
    for (const file of files) {
        const match = file.isWorkshop && error.location ? error.location.exec(file.content) : null;
        if (match) {
            return new ProjectFileError(message, file.path, lineOf(file.content, match.index));
        }
    }
    return new ProjectFileError(message, files.find((file) => file.isWorkshop && file.content.trim() !== "")!.path);
}

/** Index of the closing quote of the string starting at `start` (or the end of the content if not closed). */
function endOfString(content: string, start: number): number {
    for (let i = start + 1; i < content.length; i++) {
        if (content[i] === "\\") {
            i++;
        } else if (content[i] === '"') {
            return i;
        }
    }
    return content.length;
}

/**
 * Splits the expanded code at the file markers. Each marker must still be there once, outside of any block:
 * a block (e.g. a rule, or a workshop.codes @for) cannot start in a file and end in another.
 */
function splitAtMarkers(expanded: string, files: WorkshopProjectFile[]): Map<string, string> {
    const markers: { fileIndex: number; start: number; end: number }[] = [];
    let depth = 0;
    for (let i = 0; i < expanded.length; i++) {
        if (expanded[i] === '"') {
            i = endOfString(expanded, i);
        } else if (expanded.startsWith("//", i)) {
            const lineEnd = expanded.indexOf("\n", i) < 0 ? expanded.length : expanded.indexOf("\n", i);
            const marker = MARKER_COMMENT.exec(expanded.slice(i, lineEnd).trimEnd());
            if (marker) {
                const fileIndex = Number(marker[1]);
                if (depth !== 0 || markers.some((other) => other.fileIndex === fileIndex)) {
                    throw incompleteBlockError(files, fileIndex);
                }
                markers.push({ fileIndex, start: i, end: lineEnd });
            }
            i = lineEnd - 1;
        } else if (expanded.startsWith("/*", i)) {
            const commentEnd = expanded.indexOf("*/", i + 2);
            i = commentEnd < 0 ? expanded.length : commentEnd + 1;
        } else if (expanded[i] === "{") {
            depth++;
        } else if (expanded[i] === "}") {
            depth--;
        }
    }
    const missing = files.findIndex((_, fileIndex) => !markers.some((marker) => marker.fileIndex === fileIndex));
    if (missing >= 0) {
        throw incompleteBlockError(files, missing);
    }

    const result = new Map<string, string>();
    markers.forEach((marker, index) => {
        const file = files[marker.fileIndex];
        const code = expanded.slice(marker.end, index + 1 < markers.length ? markers[index + 1].start : expanded.length);
        if (file.isWorkshop) {
            result.set(file.path, code.trim());
        } else if (code.trim() !== "") {
            throw incompleteBlockError(files, marker.fileIndex);
        }
    });
    return result;
}

function incompleteBlockError(files: WorkshopProjectFile[], fileIndex: number): ProjectFileError {
    return new ProjectFileError(
        "A block (e.g. a rule, or a workshop.codes @for, @if or mixin) or a string starts before this file and ends in it or after it.",
        files[fileIndex].path,
    );
}

// --- Decompilation ---

const MAX_CACHED_DECOMPILATIONS = 2000;
const decompilationCache = new Map<string, DecompiledFile | ProjectFileError>();

// Lines that decompileAllRules() puts before the rules (rule bodies are always indented).
const DECLARATION_LINE = /^(globalvar|playervar|subroutine) ([A-Za-z_]\w*)(?: (\d+))?$/;
const EXTENSION_LINE = /^#!extension (\S+)$/;
const SECTION_COMMENT_LINE = /^#(Global variables|Player variables|Subroutine names|Activated extensions)$/;
const OPTIMIZE_STRICT_LINE = /^#!optimizeStrict\b/m;

/**
 * The decompiler puts #!optimizeStrict at the top of the code it produces: disable it at the end, so that
 * it only applies to that code and not to the files compiled after it.
 */
export function scopeStrictOptimization(decompiled: string): string {
    return OPTIMIZE_STRICT_LINE.test(decompiled) ? `${decompiled.replace(/\s*$/, "")}\n\n#!disableOptimizeStrict\n` : decompiled;
}

/**
 * Decompiles a workshop file (in plain workshop code). A file usually holds a part of the script only (e.g.
 * one rule), so it can use variables and subroutines that it does not declare: they are declared without
 * index. Declarations are taken out of the code, as several files can declare the same names.
 */
export function decompileWorkshopFile(path: string, workshopCode: string, language: OWLanguage): DecompiledFile {
    if (workshopCode.trim() === "") {
        return { body: "", declarations: [], extensions: [] };
    }
    const key = `${language}\u0000${path}\u0000${workshopCode}`;
    let cached = decompilationCache.get(key);
    if (cached === undefined) {
        try {
            cached = decompileWorkshopCode(workshopCode, language);
        } catch (error) {
            cached = new ProjectFileError(`Could not decompile the workshop file '${fileName(path)}': ${error instanceof Error ? error.message : String(error)}`, path);
        }
        if (decompilationCache.size >= MAX_CACHED_DECOMPILATIONS) {
            decompilationCache.clear();
        }
        decompilationCache.set(key, cached);
    }
    if (cached instanceof ProjectFileError) {
        throw cached;
    }
    return cached;
}

function decompileWorkshopCode(workshopCode: string, language: OWLanguage): DecompiledFile {
    const decompiled = decompileAllRules(workshopCode, language, { declareUnknownNames: true });
    const result: DecompiledFile = { body: "", declarations: [], extensions: [] };
    const bodyLines: string[] = [];
    for (const line of decompiled.split("\n")) {
        const declaration = DECLARATION_LINE.exec(line);
        const extension = EXTENSION_LINE.exec(line);
        if (declaration) {
            result.declarations.push({ kind: declaration[1] as DeclarationKind, name: declaration[2], index: declaration[3] === undefined ? null : Number(declaration[3]) });
        } else if (extension) {
            result.extensions.push(extension[1]);
        } else if (!SECTION_COMMENT_LINE.test(line)) {
            bodyLines.push(line);
        }
    }
    result.body = scopeStrictOptimization(bodyLines.join("\n").replace(/^\n+/, ""));
    return result;
}

/**
 * Decompiles the workshop files of a project (with their workshop.codes syntax).
 * @param files The project's code files, in compilation order.
 */
export function decompileWorkshopProject(files: WorkshopProjectFile[], language: OWLanguage): Map<string, DecompiledFile> {
    if (!files.some((file) => file.isWorkshop)) {
        return new Map();
    }
    const expanded = expandWorkshopFiles(files);
    return new Map([...expanded].map(([path, code]) => [path, decompileWorkshopFile(path, code, language)]));
}

/** The declarations and extensions of the workshop files, merged, as OverPy code. Names declared in OverPy files are left to them. */
export function mergeWorkshopDeclarations(decompiledFiles: Map<string, DecompiledFile>, overpyContents: string[]): string {
    const declaredInOverpy = new Set<string>();
    for (const content of overpyContents) {
        for (const match of content.matchAll(/^(globalvar|playervar|subroutine)[ \t]+([A-Za-z_]\w*)/gm)) {
            declaredInOverpy.add(`${match[1]} ${match[2]}`);
        }
    }
    const merged = new Map<string, { index: number | null; path: string }>();
    const extensions = new Set<string>();
    for (const [path, file] of decompiledFiles) {
        for (const { kind, name, index } of file.declarations) {
            const key = `${kind} ${name}`;
            if (declaredInOverpy.has(key)) {
                continue;
            }
            const existing = merged.get(key);
            if (existing && existing.index !== null && index !== null && existing.index !== index) {
                throw new ProjectFileError(`The ${kind} '${name}' has index ${index} here, but index ${existing.index} in '${fileName(existing.path)}'.`, path);
            }
            if (!existing || existing.index === null) {
                merged.set(key, { index, path });
            }
        }
        for (const extension of file.extensions) {
            extensions.add(extension);
        }
    }
    return [...[...merged].map(([key, { index }]) => (index === null ? key : `${key} ${index}`)), ...[...extensions].map((extension) => `#!extension ${extension}`)]
        .map((line) => `${line}\n`)
        .join("");
}

// --- Import ---

/** A file that only defines mixins is kept as a workshop file, so that the mixins stay available. */
const definesMixins = (content: string) => /@mixin\b/.test(content);

/**
 * Decompiles workshop files into OverPy files that can be compiled together (e.g. when importing a
 * workshop.codes project): their declarations are merged into separate OverPy code. Files that cannot
 * be decompiled are reported with their error.
 */
export function decompileImportedFiles(
    files: { path: string; content: string }[],
    language: OWLanguage,
): { files: ({ path: string; content: string } | { path: string; error: string })[]; declarations: string } {
    let expanded: Map<string, string | { error: string }>;
    try {
        expanded = expandWorkshopFiles(files.map((file) => ({ ...file, isWorkshop: true })));
    } catch (error) {
        if (!(error instanceof ProjectError)) {
            throw error;
        }
        expanded = expandFilesOneByOne(files);
    }

    const results: ({ path: string; content: string } | { path: string; error: string })[] = [];
    const decompiledFiles = new Map<string, DecompiledFile>();
    for (const file of files) {
        const code = expanded.get(file.path)!;
        if (typeof code !== "string") {
            results.push({ path: file.path, ...code });
            continue;
        }
        if (code === "" && definesMixins(file.content)) {
            continue;
        }
        try {
            const decompiled = decompileWorkshopFile(file.path, code, language);
            decompiledFiles.set(file.path, decompiled);
            results.push({ path: file.path, content: decompiled.body });
        } catch (error) {
            if (!(error instanceof ProjectFileError)) {
                throw error;
            }
            results.push({ path: file.path, error: error.message });
        }
    }
    return { files: results, declarations: mergeWorkshopDeclarations(decompiledFiles, []) };
}

/** When the files cannot be expanded together: expands them one by one, with the mixins of all files. */
function expandFilesOneByOne(files: { path: string; content: string }[]): Map<string, string | { error: string }> {
    const mixins: Mixins = {};
    const result = new Map<string, string | { error: string }>();
    for (const file of files) {
        try {
            result.set(file.path, extractMixins(removeComments(file.content), mixins));
        } catch (error) {
            if (!(error instanceof WorkshopCodesError)) {
                throw error;
            }
            result.set(file.path, { error: `workshop.codes syntax: ${error.message}` });
        }
    }
    for (const [path, content] of result) {
        if (typeof content !== "string") {
            continue;
        }
        try {
            result.set(path, expandWorkshopCodesSyntax(content, mixins).trim());
        } catch (error) {
            if (!(error instanceof WorkshopCodesError)) {
                throw error;
            }
            result.set(path, { error: `workshop.codes syntax: ${error.message}` });
        }
    }
    return result;
}
