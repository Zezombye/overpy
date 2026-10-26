/*
 * Project compilation: a project is compiled as all its OverPy (.opy) and workshop (.ow) files, in the
 * explorer's order. The workshop files are decompiled first (see workshopProject.ts). Rather than
 * concatenating the sources, a generated main file #!includes each file, so that the compiler reports
 * errors with the right file and line, and files that are already #!included by another file are not
 * compiled twice. The main file also holds the declarations of the workshop files' variables and subroutines.
 */
import type { OWLanguage } from "../../src/types.d";
import { ProjectError } from "./projectErrors";
import { normalizePath, readdirSync, readFileSync, statSync } from "./shims/vfs";
import { decompileWorkshopProject, mergeWorkshopDeclarations } from "./workshopProject";

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
    const sources = projectFiles.map((path) => ({ path, isWorkshop: path.endsWith(".ow"), content: unsavedFiles.get(path) ?? readFileSync(path) }));
    const decompiled = decompileWorkshopProject(sources, language);

    const contents = new Map<string, string>();
    for (const source of sources) {
        contents.set(source.path, source.isWorkshop ? decompiled.get(source.path)!.body : source.content);
    }
    // Unsaved files outside of the project (e.g. #!included from elsewhere) still take precedence over the saved ones.
    for (const [file, content] of unsavedFiles) {
        if (!contents.has(file)) {
            contents.set(file, content);
        }
    }
    const included = findIncludedFiles(contents);
    const overpyContents = [...contents].filter(([file]) => file.endsWith(".opy")).map(([, content]) => content);
    const main =
        mergeWorkshopDeclarations(decompiled, overpyContents) +
        projectFiles
            .filter((file) => !included.has(file))
            .map((file) => `#!include "${file}"\n`)
            .join("");
    return { main, rootPath: projectRoot === "/" ? "/" : `${projectRoot}/`, contents };
}
