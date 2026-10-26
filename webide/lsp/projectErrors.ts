import type { CompilationDiagnostic, FileStackMember } from "../../src/types.d";

/** An error to show to the user (not a bug). */
export class ProjectError extends Error {}

/** An error in a project file that the compiler did not get to see (e.g. a workshop file that cannot be decompiled). */
export class ProjectFileError extends ProjectError implements CompilationDiagnostic {
    readonly severity = "error";
    readonly fileStack: FileStackMember[];

    constructor(message: string, path: string, line = 1) {
        super(message);
        this.fileStack = [{ name: path.substring(path.lastIndexOf("/") + 1), path, startLine: line, startCol: 1, endLine: null, endCol: null, staticMember: true }];
    }
}
