import { statSync } from "node:fs";
import * as path from "node:path";

import { DocumentLink, Range } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import { getDocumentLines } from "./symbols";

const INCLUDE_DIRECTIVE = /^(\s*)#!(include|mainFile)\s+"([^"]*)"/;

export function getDocumentLinks(document: TextDocument): DocumentLink[] {
    const documentPath = URI.parse(document.uri);
    if (documentPath.scheme !== "file") {
        return [];
    }

    const documentDirectory = path.dirname(documentPath.fsPath);
    const lines = getDocumentLines(document);
    const links: DocumentLink[] = [];

    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber] ?? "";
        const match = INCLUDE_DIRECTIVE.exec(line);
        if (!match) {
            continue;
        }

        const directive = match[2] ?? "";
        const includedPath = match[3] ?? "";
        if (includedPath.length === 0) {
            continue;
        }

        const target = resolveTarget(documentDirectory, includedPath);
        if (!target) {
            continue;
        }

        const pathStart = line.indexOf('"', match[1].length) + 1;
        const range = Range.create(lineNumber, pathStart, lineNumber, pathStart + includedPath.length);
        links.push({
            range,
            target: target.uri,
            tooltip: target.isDirectory
                ? `Open included directory (${directive})`
                : `Open included file (${directive})`,
        });
    }

    return links;
}

function resolveTarget(documentDirectory: string, includedPath: string): { isDirectory: boolean; uri: string } | undefined {
    const normalizedPath = includedPath.replace(/\\/g, "/");
    const resolvedPath = path.resolve(documentDirectory, normalizedPath);

    try {
        const stats = statSync(resolvedPath);
        return {
            isDirectory: stats.isDirectory(),
            uri: URI.file(resolvedPath).toString(),
        };
    } catch {
        // The included file may not exist on disk yet; skip rather than emit a broken link.
        return undefined;
    }
}
