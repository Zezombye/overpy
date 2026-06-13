/**
 * Extracts documentation text from comments attached to user-defined declarations
 * (global/player variables, macros and enum members). A trailing comment on the same
 * line as the declaration is preferred; otherwise a contiguous comment block directly
 * above the declaration is used. `#!` directive lines are never treated as documentation.
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
    return getTrailingComment(lines[declarationIndex]) ?? getPrecedingComment(lines, declarationIndex);
}

function getTrailingComment(line: string): string | null {
    const comment = findCommentStart(line);
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

    return collected.length > 0 ? collected.join("\n") : null;
}

function findCommentStart(line: string): { index: number; directive: boolean } | null {
    let inString = false;
    let quote = "";

    for (let index = 0; index < line.length; index++) {
        const character = line[index];

        if (inString) {
            if (character === quote && line[index - 1] !== "\\") {
                inString = false;
            }
            continue;
        }

        if (character === "\"" || character === "'") {
            inString = true;
            quote = character;
            continue;
        }

        if (character === "#") {
            return { index, directive: line[index + 1] === "!" };
        }
    }

    return null;
}
