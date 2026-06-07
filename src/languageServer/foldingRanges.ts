import { FoldingRange, FoldingRangeKind } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { getBlockEndLine, getDocumentLines, getDocumentStructure } from "./symbols";

export function getFoldingRanges(document: TextDocument): FoldingRange[] {
    const lines = getDocumentLines(document);
    const ranges: FoldingRange[] = [];

    for (const item of getDocumentStructure(document)) {
        if (!item.isBlock) {
            continue;
        }

        const endLine = getBlockEndLine(lines, item.line, item.indent);
        if (endLine > item.line) {
            ranges.push({
                startLine: item.line,
                endLine,
                kind: FoldingRangeKind.Region,
            });
        }
    }

    return ranges;
}
