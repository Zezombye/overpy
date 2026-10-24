import { reactive } from "vue";

import { reportError } from "./notifications";

export interface Command {
    id: string;
    title: string;
    category?: string;
    /** E.g. "mod+shift+p" ("mod" is Cmd on macOS, Ctrl elsewhere), "f1", "alt+w". */
    keybinding?: string;
    /** Codicon name. */
    icon?: string;
    run: () => unknown;
    /** Whether the command is currently available. */
    enabled?: () => boolean;
    /** Show in the command palette (default true). */
    palette?: boolean;
}

export const isMac = /Mac|iPhone|iPad/.test(navigator.platform);

export const commands = reactive(new Map<string, Command>());

export function registerCommand(command: Command): void {
    if (commands.has(command.id)) {
        throw new Error(`Command '${command.id}' is already registered`);
    }
    commands.set(command.id, command);
}

export function getCommand(id: string): Command {
    const command = commands.get(id);
    if (!command) {
        throw new Error(`Command '${id}' not found`);
    }
    return command;
}

export function isCommandEnabled(id: string): boolean {
    const command = getCommand(id);
    return command.enabled?.() ?? true;
}

/** Runs a command. Errors are reported to the user. */
export async function executeCommand(id: string): Promise<void> {
    const command = getCommand(id);
    if (!(command.enabled?.() ?? true)) {
        return;
    }
    try {
        await command.run();
    } catch (error) {
        reportError(error);
    }
}

export function commandLabel(command: Command): string {
    return command.category ? `${command.category}: ${command.title}` : command.title;
}

interface ParsedKeybinding {
    mod: boolean;
    shift: boolean;
    alt: boolean;
    key: string;
}

function parseKeybinding(keybinding: string): ParsedKeybinding {
    const parts = keybinding.toLowerCase().split("+");
    return {
        mod: parts.includes("mod"),
        shift: parts.includes("shift"),
        alt: parts.includes("alt"),
        key: parts[parts.length - 1],
    };
}

const keyLabels: Record<string, string> = {
    escape: "Escape",
    enter: "Enter",
    delete: "Delete",
    backspace: "Backspace",
    "`": "`",
    ",": ",",
    tab: "Tab",
    pageup: "PageUp",
    pagedown: "PageDown",
};

export function keybindingLabel(keybinding: string): string {
    const parsed = parseKeybinding(keybinding);
    const key = keyLabels[parsed.key] ?? parsed.key.toUpperCase();
    if (isMac) {
        return `${parsed.alt ? "⌥" : ""}${parsed.shift ? "⇧" : ""}${parsed.mod ? "⌘" : ""}${key}`;
    }
    return [parsed.mod ? "Ctrl" : "", parsed.shift ? "Shift" : "", parsed.alt ? "Alt" : "", key].filter(Boolean).join("+");
}

export function matchesKeybinding(event: KeyboardEvent, keybinding: string): boolean {
    const parsed = parseKeybinding(keybinding);
    const modPressed = isMac ? event.metaKey : event.ctrlKey;
    const otherPressed = isMac ? event.ctrlKey : event.metaKey;
    if (parsed.mod !== modPressed || otherPressed || parsed.shift !== event.shiftKey || parsed.alt !== event.altKey) {
        return false;
    }
    const key = event.key.toLowerCase();
    if (key === parsed.key) {
        return true;
    }
    // With Alt (especially on macOS), event.key is a special character: fall back to the physical key.
    return !/^[a-z]$/.test(key) && /^[a-z0-9]$/.test(parsed.key) && (event.code === `Key${parsed.key.toUpperCase()}` || event.code === `Digit${parsed.key}`);
}

/** Global keybindings. Installed in the capture phase so that they take precedence over Monaco's. */
export function installKeybindings(isBlocked: () => boolean): () => void {
    const listener = (event: KeyboardEvent) => {
        if (isBlocked()) {
            return;
        }
        for (const command of commands.values()) {
            if (command.keybinding && matchesKeybinding(event, command.keybinding)) {
                event.preventDefault();
                event.stopPropagation();
                void executeCommand(command.id);
                return;
            }
        }
    };
    window.addEventListener("keydown", listener, true);
    return () => window.removeEventListener("keydown", listener, true);
}
