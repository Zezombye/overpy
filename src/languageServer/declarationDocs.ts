import { findLineCommentStart } from "./documentUtils";

/**
 * Extracts documentation text from comments attached to user-defined declarations
 * (global/player variables, macros and enum members). A contiguous comment block
 * directly above the declaration and a trailing comment on the same line are merged
 * (block first, inline appended). `#!` directive lines are never treated as documentation.
 */
export type DeclarationDocs = {
    variables: Map<string, string>;
    subroutines: Map<string, string>;
    macros: Map<string, string>;
    enums: Map<string, string>;
    enumMembers: Map<string, Map<string, string>>;
};

export function emptyDeclarationDocs(): DeclarationDocs {
    return {
        variables: new Map(),
        subroutines: new Map(),
        macros: new Map(),
        enums: new Map(),
        enumMembers: new Map(),
    };
}

/**
 * Folds the declarations found in `from` into `into`, mutating and returning `into`.
 * Later merges win, so callers extract included files first and the focused document last
 * (its unsaved buffer takes precedence over the on-disk copy of the same symbols).
 */
export function mergeDeclarationDocs(into: DeclarationDocs, from: DeclarationDocs): DeclarationDocs {
    for (const key of ["variables", "subroutines", "macros", "enums"] as const) {
        for (const [name, doc] of from[key]) {
            into[key].set(name, doc);
        }
    }

    for (const [enumName, members] of from.enumMembers) {
        const target = into.enumMembers.get(enumName) ?? new Map<string, string>();
        for (const [memberName, doc] of members) {
            target.set(memberName, doc);
        }
        into.enumMembers.set(enumName, target);
    }

    return into;
}

export function extractDeclarationDocs(text: string): DeclarationDocs {
    const docs = emptyDeclarationDocs();
    const lines = text.split(/\r\n|\r|\n/);

    let currentEnum: string | null = null;
    let currentEnumIndent = 0;

    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        if (line.trim() === "") {
            continue;
        }

        const indent = line.length - line.trimStart().length;
        if (currentEnum !== null && indent <= currentEnumIndent) {
            currentEnum = null;
        }

        const variableMatch = line.match(/^\s*(?:globalvar|playervar)\s+([A-Za-z_][A-Za-z0-9_]*)/);
        if (variableMatch) {
            const doc = getDocFor(lines, index);
            if (doc) {
                docs.variables.set(variableMatch[1], doc);
            }
            continue;
        }

        const subroutineMatch = line.match(/^\s*def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/);
        if (subroutineMatch) {
            const doc = getDocFor(lines, index);
            if (doc) {
                docs.subroutines.set(subroutineMatch[1], doc);
            }
            continue;
        }

        // Matches `macro NAME = value` constants and `macro NAME(...)` function macros,
        // including member forms like `macro Class.member = ...`.
        const macroMatch = line.match(/^\s*macro\s+([A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)?)\s*(?:\(|=)/);
        if (macroMatch) {
            const doc = getDocFor(lines, index);
            if (doc) {
                docs.macros.set(macroMatch[1], doc);
            }
            continue;
        }

        const enumMatch = line.match(/^\s*enum\s+([A-Za-z_][A-Za-z0-9_]*)\s*:/);
        if (enumMatch) {
            currentEnum = enumMatch[1];
            currentEnumIndent = indent;
            const doc = getDocFor(lines, index);
            if (doc) {
                docs.enums.set(currentEnum, doc);
            }
            continue;
        }

        if (currentEnum !== null && indent > currentEnumIndent) {
            const memberMatch = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)/);
            if (memberMatch) {
                const doc = getDocFor(lines, index);
                if (doc) {
                    const memberDocs = docs.enumMembers.get(currentEnum) ?? new Map<string, string>();
                    memberDocs.set(memberMatch[1], doc);
                    docs.enumMembers.set(currentEnum, memberDocs);
                }
            }
        }
    }

    return docs;
}

function getDocFor(lines: string[], declarationIndex: number): string | null {
    const above = getPrecedingComment(lines, declarationIndex);
    const inline = getTrailingComment(lines[declarationIndex]);
    if (above && inline) {
        // Two trailing spaces force a Markdown hard break so the popup keeps the line break.
        return above + "  \n" + inline;
    }
    return above ?? inline;
}

function getTrailingComment(line: string): string | null {
    const comment = findLineCommentStart(line);
    if (!comment || comment.directive) {
        return null;
    }

    const text = line.slice(comment.index + 1).trim();
    return text.length > 0 ? text : null;
}

function getPrecedingComment(lines: string[], declarationIndex: number): string | null {
    const collected: string[] = [];

    for (let index = declarationIndex - 1; index >= 0; index--) {
        const trimmed = lines[index].trim();
        if (trimmed === "" || !trimmed.startsWith("#") || trimmed.startsWith("#!")) {
            break;
        }
        collected.unshift(trimmed.slice(1).trim());
    }

    // Two trailing spaces force a Markdown hard break so each comment line renders separately.
    return collected.length > 0 ? collected.join("  \n") : null;
}

