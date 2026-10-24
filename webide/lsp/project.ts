/*
 * Project compilation: a project is compiled as all its OverPy (.opy) and workshop (.ow) files, in the
 * explorer's order. Workshop files are decompiled first. Rather than concatenating the sources, a
 * generated main file #!includes each file, so that the compiler reports errors with the right file
 * and line, and files that are already #!included by another file are not compiled twice. The main file
 * also holds the declarations of the workshop files' variables and subroutines.
 */
import { decompileAllRules } from "../../src/decompiler/decompiler";
import type { CompilationDiagnostic, FileStackMember, OWLanguage } from "../../src/types.d";
import { normalizePath, readdirSync, readFileSync, statSync } from "./shims/vfs";

/** Name given to the generated main file. Outputs are named after it (main.ws.txt, main.<language>.po). */
export const PROJECT_MAIN_FILE_NAME = "main.opy";

let projectRoot = "/";
/** Code files, as absolute paths in explorer order. */
let projectFiles: string[] = [];

export function setProjectFiles(root: string, files: string[]): void {
    projectRoot = normalizePath(root);
    projectFiles = files.map(normalizePath);
}

export function isProjectFile(path: string): boolean {
    return projectFiles.includes(normalizePath(path));
}

/** An error to show to the user (not a bug). */
export class ProjectError extends Error {}

/** An error in a project file that the compiler did not get to see (e.g. a workshop file that cannot be decompiled). */
export class ProjectFileError extends ProjectError implements CompilationDiagnostic {
    readonly severity = "error";
    readonly fileStack: FileStackMember[];

    constructor(message: string, path: string) {
        super(message);
        this.fileStack = [{ name: path.substring(path.lastIndexOf("/") + 1), path, startLine: 1, startCol: 1, endLine: null, endCol: null, staticMember: true }];
    }
}

type DeclarationKind = "globalvar" | "playervar" | "subroutine";

interface DecompiledFile {
    /** The decompiled code, without its declarations. */
    body: string;
    /** Declared names, with their index (null if not set). */
    declarations: { kind: DeclarationKind; name: string; index: number | null }[];
    extensions: string[];
}

const MAX_CACHED_DECOMPILATIONS = 500;
const decompilationCache = new Map<string, DecompiledFile>();

// Lines that decompileAllRules() puts before the rules (rule bodies are always indented).
const DECLARATION_LINE = /^(globalvar|playervar|subroutine) ([A-Za-z_]\w*)(?: (\d+))?$/;
const EXTENSION_LINE = /^#!extension (\S+)$/;
const SECTION_COMMENT_LINE = /^#(Global variables|Player variables|Subroutine names|Activated extensions)$/;

/**
 * Decompiles a workshop file. A file usually holds a part of the script only (e.g. one rule), so it can
 * use variables and subroutines that it does not declare: they are declared without index. Declarations
 * are taken out of the code, as several files can declare the same names; they are put in the main file.
 */
function decompile(path: string, workshopCode: string, language: OWLanguage): DecompiledFile {
    if (workshopCode.trim() === "") {
        return { body: "", declarations: [], extensions: [] };
    }
    const key = `${language}\u0000${workshopCode}`;
    const cached = decompilationCache.get(key);
    if (cached !== undefined) {
        return cached;
    }
    let decompiled: string;
    try {
        decompiled = decompileAllRules(workshopCode, language, { declareUnknownNames: true });
    } catch (error) {
        throw new ProjectFileError(`Could not decompile the workshop file '${path.substring(path.lastIndexOf("/") + 1)}': ${error instanceof Error ? error.message : String(error)}`, path);
    }
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
    result.body = bodyLines.join("\n");
    if (decompilationCache.size >= MAX_CACHED_DECOMPILATIONS) {
        decompilationCache.clear();
    }
    decompilationCache.set(key, result);
    return result;
}

// Declarations written in OverPy files are left to them.
const OVERPY_DECLARATION = /^(globalvar|playervar|subroutine)[ \t]+([A-Za-z_]\w*)/gm;

/** The declarations and extensions of the workshop files, merged, as OverPy code for the main file. */
function mergeWorkshopDeclarations(decompiledFiles: Map<string, DecompiledFile>, overpyContents: string[]): string {
    const declaredInOverpy = new Set<string>();
    for (const content of overpyContents) {
        for (const match of content.matchAll(OVERPY_DECLARATION)) {
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
                throw new ProjectFileError(`The ${kind} '${name}' has index ${index} here, but index ${existing.index} in '${existing.path.substring(existing.path.lastIndexOf("/") + 1)}'.`, path);
            }
            if (!existing || existing.index === null) {
                merged.set(key, { index, path });
            }
        }
        for (const extension of file.extensions) {
            extensions.add(extension);
        }
    }
    return [
        ...[...merged].map(([key, { index }]) => (index === null ? key : `${key} ${index}`)),
        ...[...extensions].map((extension) => `#!extension ${extension}`),
    ]
        .map((line) => `${line}\n`)
        .join("");
}

const INCLUDE_DIRECTIVE = /^[ \t]*#!include[ \t]+"([^"]*)"/gm;

/** Files #!included by project files: they are compiled where they are included, not on their own. */
function findIncludedFiles(contents: Map<string, string>): Set<string> {
    const included = new Set<string>();
    for (const [file, content] of contents) {
        if (!file.endsWith(".opy")) {
            continue;
        }
        const directory = file.substring(0, file.lastIndexOf("/") + 1);
        for (const match of content.matchAll(INCLUDE_DIRECTIVE)) {
            const target = match[1].replace(/\\/g, "/");
            const resolved = normalizePath(target.startsWith("/") || /^[A-Za-z]:/.test(target) ? target : directory + target);
            let isDirectory: boolean;
            try {
                isDirectory = statSync(resolved).isDirectory();
            } catch {
                // A missing file is reported by the compiler when it processes the directive.
                continue;
            }
            if (isDirectory) {
                // Like the compiler: a folder include imports the .opy files directly in it.
                for (const name of readdirSync(resolved) as string[]) {
                    if (name.toLowerCase().endsWith(".opy")) {
                        included.add(`${resolved}/${name}`);
                    }
                }
            } else {
                included.add(resolved);
            }
        }
    }
    return included;
}

export interface ProjectCompilation {
    /** Source of the generated main file. */
    main: string;
    rootPath: string;
    /** Content to compile for each project file (decompiled for workshop files), for setFileContentOverlay(). */
    contents: Map<string, string>;
}

/**
 * Prepares the compilation of the whole project.
 * @param unsavedFiles Content of files that differs from the saved files (open editors).
 */
export function prepareProjectCompilation(language: OWLanguage, unsavedFiles: Map<string, string>): ProjectCompilation {
    if (projectFiles.length === 0) {
        throw new ProjectError("The project has no OverPy (.opy) or workshop (.ow) file to compile.");
    }
    const contents = new Map<string, string>();
    const decompiledFiles = new Map<string, DecompiledFile>();
    for (const file of projectFiles) {
        const source = unsavedFiles.get(file) ?? readFileSync(file);
        if (file.endsWith(".ow")) {
            const decompiled = decompile(file, source, language);
            decompiledFiles.set(file, decompiled);
            contents.set(file, decompiled.body);
        } else {
            contents.set(file, source);
        }
    }
    // Unsaved files outside of the project (e.g. #!included from elsewhere) still take precedence over the saved ones.
    for (const [file, content] of unsavedFiles) {
        if (!contents.has(file)) {
            contents.set(file, content);
        }
    }
    const included = findIncludedFiles(contents);
    const overpyContents = [...contents].filter(([file]) => !decompiledFiles.has(file)).map(([, content]) => content);
    const main =
        mergeWorkshopDeclarations(decompiledFiles, overpyContents) +
        projectFiles
            .filter((file) => !included.has(file))
            .map((file) => `#!include "${file}"\n`)
            .join("");
    return { main, rootPath: projectRoot === "/" ? "/" : `${projectRoot}/`, contents };
}
