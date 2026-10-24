import { isMac } from "./commands";

/** A title bar menu entry: one of our commands, or a Monaco editor action (which handles its own keybinding). */
export type MenuEntry =
    | { command: string; label?: string }
    | { editorAction: string; label: string; keybinding?: string }
    | { separator: true };

export interface Menu {
    label: string;
    items: MenuEntry[];
}

const separator = { separator: true } as const;

export const titleBarMenus: Menu[] = [
    {
        label: "File",
        items: [
            { command: "explorer.newFile" },
            { command: "explorer.newWorkshopFile" },
            { command: "explorer.newFolder" },
            separator,
            { command: "projects.switch", label: "Open Project..." },
            { command: "projects.new", label: "New Project..." },
            { command: "projects.importWorkshopCodes" },
            { command: "projects.rename", label: "Rename Project..." },
            { command: "projects.manage", label: "Manage Projects..." },
            separator,
            { command: "workbench.action.files.save" },
            { command: "workbench.action.files.saveAll" },
            { command: "workbench.action.files.revert" },
            separator,
            { command: "files.upload" },
            { command: "files.download" },
            { command: "projects.download" },
            separator,
            { command: "workbench.action.openSettings", label: "Settings" },
            { command: "workbench.action.selectTheme", label: "Color Theme..." },
            separator,
            { command: "workbench.action.closeActiveEditor" },
            { command: "workbench.action.closeAllEditors" },
            separator,
            { command: "account.signOut" },
        ],
    },
    {
        label: "Edit",
        items: [
            { editorAction: "undo", label: "Undo", keybinding: "mod+z" },
            { editorAction: "redo", label: "Redo", keybinding: isMac ? "mod+shift+z" : "mod+y" },
            separator,
            { editorAction: "editor.action.clipboardCutAction", label: "Cut", keybinding: "mod+x" },
            { editorAction: "editor.action.clipboardCopyAction", label: "Copy", keybinding: "mod+c" },
            { editorAction: "editor.action.clipboardPasteAction", label: "Paste", keybinding: "mod+v" },
            separator,
            { editorAction: "actions.find", label: "Find", keybinding: "mod+f" },
            { editorAction: "editor.action.startFindReplaceAction", label: "Replace", keybinding: isMac ? "mod+alt+f" : "mod+h" },
            { command: "workbench.view.search", label: "Find in Files" },
            separator,
            { editorAction: "editor.action.commentLine", label: "Toggle Line Comment", keybinding: "mod+/" },
            { editorAction: "editor.action.blockComment", label: "Toggle Block Comment", keybinding: "shift+alt+a" },
        ],
    },
    {
        label: "Selection",
        items: [
            { editorAction: "editor.action.selectAll", label: "Select All", keybinding: "mod+a" },
            { editorAction: "editor.action.smartSelect.expand", label: "Expand Selection", keybinding: "shift+alt+right" },
            { editorAction: "editor.action.smartSelect.shrink", label: "Shrink Selection", keybinding: "shift+alt+left" },
            separator,
            { editorAction: "editor.action.copyLinesUpAction", label: "Copy Line Up", keybinding: "shift+alt+up" },
            { editorAction: "editor.action.copyLinesDownAction", label: "Copy Line Down", keybinding: "shift+alt+down" },
            { editorAction: "editor.action.moveLinesUpAction", label: "Move Line Up", keybinding: "alt+up" },
            { editorAction: "editor.action.moveLinesDownAction", label: "Move Line Down", keybinding: "alt+down" },
            separator,
            { editorAction: "editor.action.insertCursorAbove", label: "Add Cursor Above", keybinding: "mod+alt+up" },
            { editorAction: "editor.action.insertCursorBelow", label: "Add Cursor Below", keybinding: "mod+alt+down" },
            { editorAction: "editor.action.addSelectionToNextFindMatch", label: "Add Next Occurrence", keybinding: "mod+d" },
            { editorAction: "editor.action.selectHighlights", label: "Select All Occurrences", keybinding: "mod+shift+l" },
        ],
    },
    {
        label: "View",
        items: [
            { command: "workbench.action.showCommands", label: "Command Palette..." },
            separator,
            { command: "workbench.view.explorer", label: "Explorer" },
            { command: "workbench.view.search", label: "Search" },
            { command: "workbench.actions.view.problems", label: "Problems" },
            { command: "workbench.action.output.toggleOutput", label: "Output" },
            separator,
            { command: "workbench.action.toggleSidebarVisibility", label: "Toggle Primary Side Bar" },
            { command: "workbench.action.togglePanel", label: "Toggle Panel" },
            separator,
            { command: "editor.action.toggleWordWrap", label: "Word Wrap" },
            { command: "editor.action.toggleMinimap", label: "Minimap" },
        ],
    },
    {
        label: "Go",
        items: [
            { command: "workbench.action.quickOpen", label: "Go to File..." },
            { command: "workbench.action.gotoSymbol", label: "Go to Symbol in Editor..." },
            { command: "workbench.action.gotoLine", label: "Go to Line/Column..." },
            separator,
            { editorAction: "editor.action.revealDefinition", label: "Go to Definition", keybinding: "f12" },
            { editorAction: "editor.action.goToReferences", label: "Go to References", keybinding: "shift+f12" },
            { editorAction: "editor.action.peekDefinition", label: "Peek Definition", keybinding: "alt+f12" },
            { editorAction: "editor.action.rename", label: "Rename Symbol", keybinding: "f2" },
            separator,
            { editorAction: "editor.action.marker.nextInFiles", label: "Next Problem", keybinding: "f8" },
            { editorAction: "editor.action.marker.prevInFiles", label: "Previous Problem", keybinding: "shift+f8" },
        ],
    },
    {
        label: "OverPy",
        items: [
            { command: "overpy.compile" },
            { command: "overpy.decompile" },
            { command: "overpy.insertTemplate" },
            separator,
            { command: "overpy.selectWorkshopLanguage", label: "Select Workshop Language..." },
            { command: "overpy.copyLastCompilation" },
        ],
    },
    {
        label: "Help",
        items: [{ command: "workbench.action.openWelcome" }, { command: "help.documentation" }, separator, { command: "workbench.action.showCommands", label: "Show All Commands" }],
    },
];
