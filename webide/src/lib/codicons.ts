/*
 * Makes `<span class="codicon codicon-NAME">` work on every page. Monaco only generates the icon CSS
 * rules once an editor is created, so they are generated here from Monaco's codicon registry.
 */
import "../../node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.css";
import "../../node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon-modifiers.css";
import "monaco-editor/base/common/codicons.js";

import { getCodiconFontCharacters } from "monaco-editor/base/common/codiconsUtil.js";

export function installCodiconStyles(): void {
    const rules = Object.entries(getCodiconFontCharacters()).map(([id, character]) => `.codicon-${id}::before { content: "\\${character.toString(16)}"; }`);
    const style = document.createElement("style");
    style.dataset.source = "codicons";
    style.textContent = rules.join("\n");
    document.head.appendChild(style);
}
