import overpyIconUrl from "../../../img/overpy.png?url";
import { commandLabel, commands, executeCommand, keybindingLabel } from "./commands";
import { editors, getCodeEditor, openFile } from "./editors";
import { monaco } from "./monaco/setup";
import { basename, dirname, extension } from "./paths";
import { closeQuickInput, openQuickInput, type QuickInputItems, type QuickPickItem } from "./quickInput";
import { readLocal, writeLocal } from "./storage";
import { filePaths } from "./workspace";

/* VS Code's quick access: files (no prefix), commands (">"), line (":"), symbols ("@"). */

type RunnableItem = QuickPickItem & { run: () => unknown };

const RECENT_COMMANDS_KEY = "overpy-ide.recentCommands";
const MAX_RECENT_COMMANDS = 5;

export function fileIcon(path: string): { icon?: string; iconUrl?: string } {
    switch (extension(path)) {
        case ".opy":
            return { iconUrl: overpyIconUrl };
        case ".ow":
            return { icon: "file-code" };
        case ".json":
            return { icon: "json" };
        case ".md":
            return { icon: "markdown" };
        case ".js":
            return { icon: "symbol-method" };
        case ".txt":
        case ".po":
            return { icon: "file-text" };
        default:
            return { icon: "file" };
    }
}

function fileItems(filter: string): RunnableItem[] {
    const openPaths = editors.tabs.flatMap((tab) => (tab.kind === "file" ? [tab.path] : []));
    const toItem = (path: string, separator?: string): RunnableItem => ({
        label: basename(path),
        description: dirname(path),
        separator,
        ...fileIcon(path),
        run: () => openFile(path),
    });
    if (filter.trim() !== "") {
        return filePaths().sort().map((path) => toItem(path));
    }
    const others = filePaths()
        .filter((path) => !openPaths.includes(path))
        .sort();
    return [...openPaths.map((path, index) => toItem(path, index === 0 ? "open editors" : undefined)), ...others.map((path, index) => toItem(path, index === 0 ? "files" : undefined))];
}

function rememberCommand(id: string): void {
    const recent = (readLocal<string[]>(RECENT_COMMANDS_KEY) ?? []).filter((candidate) => candidate !== id);
    writeLocal(RECENT_COMMANDS_KEY, [id, ...recent].slice(0, MAX_RECENT_COMMANDS));
}

function commandItems(filter: string): RunnableItem[] {
    const items: (RunnableItem & { id: string })[] = [];
    for (const command of commands.values()) {
        if (command.palette === false || !(command.enabled?.() ?? true)) {
            continue;
        }
        items.push({
            id: command.id,
            label: commandLabel(command),
            keybinding: command.keybinding ? keybindingLabel(command.keybinding) : undefined,
            run: () => {
                rememberCommand(command.id);
                void executeCommand(command.id);
            },
        });
    }
    // The editor's own actions (Monaco), like in VS Code's command palette.
    const editor = getCodeEditor();
    if (editor?.getModel()) {
        const labels = new Set(items.map((item) => item.label));
        for (const action of editor.getSupportedActions()) {
            if (action.label && !labels.has(action.label) && action.isSupported()) {
                items.push({
                    id: action.id,
                    label: action.label,
                    run: () => {
                        rememberCommand(action.id);
                        editor.focus();
                        void action.run();
                    },
                });
            }
        }
    }
    items.sort((a, b) => a.label.localeCompare(b.label));
    if (filter.trim() !== "") {
        return items;
    }
    const recentIds = readLocal<string[]>(RECENT_COMMANDS_KEY) ?? [];
    const recent = recentIds.flatMap((id) => items.filter((item) => item.id === id));
    const others = items.filter((item) => !recentIds.includes(item.id));
    return [
        ...recent.map((item, index) => ({ ...item, separator: index === 0 ? "recently used" : undefined })),
        ...others.map((item, index) => ({ ...item, separator: index === 0 && recent.length > 0 ? "other commands" : undefined })),
    ];
}

function gotoLineItems(value: string): RunnableItem[] {
    const editor = getCodeEditor();
    const model = editor?.getModel();
    if (!editor || !model) {
        return [{ label: "Open a text editor first to go to a line.", run: () => {} }];
    }
    const [lineText, columnText] = value.split(/[:,]/);
    const line = Number.parseInt(lineText, 10);
    const column = Number.parseInt(columnText ?? "1", 10) || 1;
    const lineCount = model.getLineCount();
    if (!Number.isInteger(line) || line < 1 || line > lineCount) {
        const position = editor.getPosition();
        return [
            {
                label: `Current Line: ${position?.lineNumber ?? 1}, Character: ${position?.column ?? 1}. Type a line number between 1 and ${lineCount} to navigate to.`,
                run: () => {},
            },
        ];
    }
    return [
        {
            label: `Go to line ${line}${columnText ? `, character ${column}` : ""}.`,
            run: () => {
                const position = new monaco.Position(line, Math.min(column, model.getLineMaxColumn(line)));
                editor.setPosition(position);
                editor.revealPositionInCenter(position);
                editor.focus();
            },
        },
    ];
}

export function showQuickAccess(initialValue = ""): void {
    openQuickInput({
        kind: "pick",
        value: initialValue,
        getItems: (value): QuickInputItems => {
            if (value.startsWith(">")) {
                const filter = value.substring(1);
                return { items: commandItems(filter), filter, keepOrder: filter.trim() === "", placeholder: "Type the name of a command to run." };
            }
            if (value.startsWith(":")) {
                return { items: gotoLineItems(value.substring(1)), filter: null, placeholder: "" };
            }
            if (value.startsWith("@")) {
                return {
                    items: [{ label: "Go to Symbol in Editor", run: () => getCodeEditor()?.trigger("quickAccess", "editor.action.quickOutline", null) } as RunnableItem],
                    filter: null,
                    placeholder: "",
                };
            }
            return {
                items: fileItems(value),
                filter: value,
                matchOnDescription: true,
                keepOrder: value.trim() === "",
                placeholder: "Search files by name (append : to go to line or @ to go to symbol, or start with > to run a command)",
            };
        },
        onAccept: (item) => {
            void (item as RunnableItem).run();
        },
        onHide: () => {},
    });
}

export function showGoToSymbol(): void {
    closeQuickInput();
    const editor = getCodeEditor();
    if (!editor?.getModel()) {
        return;
    }
    editor.focus();
    editor.trigger("quickAccess", "editor.action.quickOutline", null);
}
