export interface FuzzyMatch {
    score: number;
    /** Indices of the matched characters in the target. */
    highlights: number[];
}

function isWordStart(target: string, index: number): boolean {
    if (index === 0) {
        return true;
    }
    const previous = target[index - 1];
    const current = target[index];
    return /[\s/\\._\-:()[\]]/.test(previous) || (previous === previous.toLowerCase() && current !== current.toLowerCase());
}

/** Case-insensitive fuzzy match of `query` against `target`, in the spirit of VS Code's quick open. */
export function fuzzyMatch(query: string, target: string): FuzzyMatch | null {
    if (query === "") {
        return { score: 0, highlights: [] };
    }
    const lowerQuery = query.toLowerCase();
    const lowerTarget = target.toLowerCase();

    // Contiguous matches rank first, word-start ones above the others.
    let substringIndex = -1;
    for (let index = lowerTarget.indexOf(lowerQuery); index >= 0; index = lowerTarget.indexOf(lowerQuery, index + 1)) {
        if (substringIndex < 0 || isWordStart(target, index)) {
            substringIndex = index;
            if (isWordStart(target, index)) {
                break;
            }
        }
    }
    if (substringIndex >= 0) {
        return {
            score: 1000 + (isWordStart(target, substringIndex) ? 500 : 0) - substringIndex - (target.length - query.length) * 0.1,
            highlights: Array.from({ length: query.length }, (_, i) => substringIndex + i),
        };
    }

    const highlights: number[] = [];
    let score = 0;
    let targetIndex = 0;
    for (const char of lowerQuery) {
        // Prefer the next word start matching this character, else the next occurrence.
        let found = -1;
        for (let i = targetIndex; i < lowerTarget.length; i++) {
            if (lowerTarget[i] === char && isWordStart(target, i)) {
                found = i;
                break;
            }
        }
        if (found < 0) {
            found = lowerTarget.indexOf(char, targetIndex);
        }
        if (found < 0) {
            return null;
        }
        score += 1 + (isWordStart(target, found) ? 8 : 0) + (highlights.length > 0 && highlights[highlights.length - 1] === found - 1 ? 5 : 0);
        highlights.push(found);
        targetIndex = found + 1;
    }
    return { score, highlights };
}
