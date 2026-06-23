/**
 * Decides which included-document URIs should have their diagnostics blanked when a main
 * document closes. Cross-file diagnostics are published to included URIs and tracked in
 * `previousDiagnosticUris`, keyed by the triggering (main) URI. On close we blank the includes
 * the closed file published to, except those that are still open in their own right or are still
 * published-to by another main document. The closed document's own URI is excluded here; the
 * caller blanks it unconditionally.
 */
export function getDiagnosticUrisToClear(
    closedUri: string,
    previousDiagnosticUris: Map<string, Set<string>>,
    isOpen: (uri: string) => boolean,
): string[] {
    const published = previousDiagnosticUris.get(closedUri);
    if (!published) {
        return [];
    }

    const result: string[] = [];
    for (const uri of published) {
        if (uri === closedUri || isOpen(uri) || isReferencedByOther(uri, closedUri, previousDiagnosticUris)) {
            continue;
        }
        result.push(uri);
    }

    return result;
}

function isReferencedByOther(
    uri: string,
    closedUri: string,
    previousDiagnosticUris: Map<string, Set<string>>,
): boolean {
    for (const [triggerUri, uris] of previousDiagnosticUris) {
        if (triggerUri !== closedUri && uris.has(uri)) {
            return true;
        }
    }
    return false;
}
