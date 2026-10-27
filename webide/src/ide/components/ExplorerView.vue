<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";

import { executeCommand, keybindingLabel } from "../commands";
import { showContextMenu, type MenuItem } from "../contextMenu";
import { openFile } from "../editors";
import {
    cancelEditing,
    commitEditing,
    deleteWithConfirmation,
    downloadFile,
    downloadProject,
    duplicateEntry,
    editingTargetName,
    type ExplorerEdit,
    explorer,
    moveEntry,
    moveUpOrDown,
    pickFilesToUpload,
    startNewFile,
    startNewFolder,
    startRename,
    toggleDisabled,
    uploadFiles,
    validateEditing,
} from "../explorer";
import { reportError, withProgress } from "../notifications";
import { compileProject, convertToOverpyFile } from "../overpy";
import { basename, dirname, isSameOrChild } from "../paths";
import { problemsByPath } from "../problems";
import { childrenByParent } from "../projectOrder";
import { fileIcon } from "../quickAccess";
import { type EntryInfo, fsPathOf, isCodeFile, isEntryDisabled, isWorkshopFile, workspace } from "../workspace";

type Row =
    | { kind: "entry"; entry: EntryInfo; depth: number }
    | { kind: "edit"; edit: ExplorerEdit; depth: number; type: "file" | "dir" };

/** Where a dragged entry (or uploaded files) would go. */
type DropTarget = { kind: "into"; folder: string } | { kind: "before" | "after"; path: string };

const DRAG_MIME = "application/x-overpy-path";

const tree = ref<HTMLElement | null>(null);
const editInput = ref<HTMLInputElement[]>([]);
const focused = ref(false);
const dropTarget = ref<DropTarget | null>(null);

const rows = computed(() => {
    const result: Row[] = [];
    const edit = explorer.editing;
    const visit = (directory: string, depth: number) => {
        for (const entry of childrenByParent.value.get(directory) ?? []) {
            if (edit?.kind === "rename" && edit.path === entry.path) {
                result.push({ kind: "edit", edit, depth, type: entry.type });
            } else {
                result.push({ kind: "entry", entry, depth });
            }
            if (entry.type === "dir" && explorer.expanded.has(entry.path)) {
                visit(entry.path, depth + 1);
            }
        }
        // New entries go at the end of their folder.
        if (edit && edit.kind !== "rename" && edit.parent === directory) {
            result.push({ kind: "edit", edit, depth, type: edit.kind === "newFolder" ? "dir" : "file" });
        }
    };
    visit("", 0);
    return result;
});

const entryRows = computed(() => rows.value.filter((row): row is Extract<Row, { kind: "entry" }> => row.kind === "entry"));

watch(
    () => explorer.revealRequest,
    async () => {
        await nextTick();
        tree.value?.querySelector(`[data-path="${CSS.escape(explorer.selected ?? "")}"]`)?.scrollIntoView({ block: "nearest" });
    },
);

watch(
    () => explorer.editing !== null,
    async (editing) => {
        if (!editing) {
            return;
        }
        await nextTick();
        const input = editInput.value[0];
        if (!input) {
            return;
        }
        input.focus();
        input.scrollIntoView({ block: "nearest" });
        // Select the name without the extension, like VS Code.
        const dot = explorer.editing?.kind === "rename" ? input.value.lastIndexOf(".") : -1;
        input.setSelectionRange(0, dot > 0 ? dot : input.value.length);
    },
);

function toggleFolder(path: string): void {
    if (explorer.expanded.has(path)) {
        explorer.expanded.delete(path);
    } else {
        explorer.expanded.add(path);
    }
}

function onRowClick(entry: EntryInfo): void {
    explorer.selected = entry.path;
    if (entry.type === "dir") {
        toggleFolder(entry.path);
    } else {
        openFile(entry.path, { preview: true, focus: false });
    }
}

function onRowDoubleClick(entry: EntryInfo): void {
    if (entry.type === "file") {
        openFile(entry.path, { preview: false });
    }
}

function run(action: () => Promise<unknown> | unknown): void {
    Promise.resolve()
        .then(action)
        .catch((error) => reportError(error));
}

async function onEditKeyDown(event: KeyboardEvent): Promise<void> {
    if (event.key === "Enter") {
        event.preventDefault();
        run(commitEditing);
    } else if (event.key === "Escape") {
        event.preventDefault();
        cancelEditing();
        tree.value?.focus();
    }
}

function onEditBlur(): void {
    const edit = explorer.editing;
    if (!edit) {
        return;
    }
    if (edit.value.trim() === "" || edit.error) {
        cancelEditing();
    } else {
        run(commitEditing);
    }
}

function moveSelection(offset: number): void {
    const list = entryRows.value;
    if (list.length === 0) {
        return;
    }
    const index = list.findIndex((row) => row.entry.path === explorer.selected);
    const next = list[Math.min(Math.max(index < 0 ? 0 : index + offset, 0), list.length - 1)];
    explorer.selected = next.entry.path;
    explorer.revealRequest++;
}

function onTreeKeyDown(event: KeyboardEvent): void {
    if (explorer.editing) {
        return;
    }
    if (workspace.readOnly && (event.key === "F2" || event.key === "Delete" || event.altKey)) {
        return;
    }
    const selected = explorer.selected;
    const entry = selected !== null ? workspace.entries.get(selected) : undefined;
    const handled = (() => {
        switch (event.key) {
            case "ArrowDown":
                if (event.altKey) {
                    if (entry) {
                        run(() => moveUpOrDown(entry.path, 1));
                    }
                } else {
                    moveSelection(1);
                }
                return true;
            case "ArrowUp":
                if (event.altKey) {
                    if (entry) {
                        run(() => moveUpOrDown(entry.path, -1));
                    }
                } else {
                    moveSelection(-1);
                }
                return true;
            case "ArrowRight":
                if (entry?.type === "dir") {
                    if (!explorer.expanded.has(entry.path)) {
                        explorer.expanded.add(entry.path);
                    } else {
                        moveSelection(1);
                    }
                }
                return true;
            case "ArrowLeft":
                if (entry?.type === "dir" && explorer.expanded.has(entry.path)) {
                    explorer.expanded.delete(entry.path);
                } else if (entry && dirname(entry.path) !== "") {
                    explorer.selected = dirname(entry.path);
                    explorer.revealRequest++;
                }
                return true;
            case "Enter":
                if (entry?.type === "file") {
                    openFile(entry.path);
                } else if (entry) {
                    toggleFolder(entry.path);
                }
                return true;
            case " ":
                if (entry?.type === "file") {
                    openFile(entry.path, { preview: true, focus: false });
                }
                return true;
            case "F2":
                if (entry) {
                    startRename(entry.path);
                }
                return true;
            case "Delete":
                if (entry) {
                    run(() => deleteWithConfirmation(entry.path));
                }
                return true;
            default:
                return false;
        }
    })();
    if (handled) {
        event.preventDefault();
        event.stopPropagation();
    }
}

function collapseAll(): void {
    explorer.expanded.clear();
}

function copyText(text: string): void {
    run(() => navigator.clipboard.writeText(text));
}

function convert(path: string): void {
    run(() => withProgress(`Converting '${basename(path)}' into an OverPy file...`, () => convertToOverpyFile(path)));
}

function onRowContextMenu(event: MouseEvent, entry: EntryInfo): void {
    explorer.selected = entry.path;
    if (workspace.readOnly) {
        showContextMenu({ x: event.clientX, y: event.clientY }, [
            ...(entry.type === "file"
                ? [
                      { label: "Open", run: () => openFile(entry.path) },
                      { label: "OverPy: Compile Project", run: () => run(compileProject) },
                      { label: "Download", run: () => run(() => downloadFile(entry.path)) },
                      { separator: true as const },
                  ]
                : []),
            { label: "Copy Path", run: () => copyText(fsPathOf(entry.path)) },
            { label: "Copy Relative Path", run: () => copyText(entry.path) },
        ]);
        return;
    }
    const folder = entry.type === "dir" ? entry.path : dirname(entry.path);
    const items: MenuItem[] = [
        { label: "New File...", run: () => startNewFile(folder) },
        { label: "New Workshop File...", run: () => startNewFile(folder, "workshop") },
        { label: "New Folder...", run: () => startNewFolder(folder) },
        { label: "Upload Files...", run: () => pickFilesToUpload(folder) },
        { separator: true },
    ];
    if (entry.type === "file") {
        items.push({ label: "Open", run: () => openFile(entry.path) });
        if (isCodeFile(entry.path)) {
            items.push({ label: "OverPy: Compile Project", run: () => run(compileProject) });
        }
        if (isWorkshopFile(entry.path)) {
            items.push({ label: "Decompile and Convert to OverPy File", run: () => convert(entry.path) });
        }
        items.push({ label: "Download", run: () => run(() => downloadFile(entry.path)) }, { separator: true });
    }
    items.push(
        { label: "Duplicate", run: () => run(() => duplicateEntry(entry.path)) },
        { label: entry.disabled ? "Include in Compilation" : "Exclude from Compilation", run: () => run(() => toggleDisabled(entry.path)) },
        { label: "Move Up", keybinding: "Alt+Up", run: () => run(() => moveUpOrDown(entry.path, -1)) },
        { label: "Move Down", keybinding: "Alt+Down", run: () => run(() => moveUpOrDown(entry.path, 1)) },
        { separator: true },
        { label: "Copy Path", run: () => copyText(fsPathOf(entry.path)) },
        { label: "Copy Relative Path", run: () => copyText(entry.path) },
        { separator: true },
        { label: "Rename...", keybinding: "F2", run: () => startRename(entry.path) },
        { label: "Delete", keybinding: keybindingLabel("delete"), run: () => run(() => deleteWithConfirmation(entry.path)) },
    );
    showContextMenu({ x: event.clientX, y: event.clientY }, items);
}

function onBackgroundContextMenu(event: MouseEvent): void {
    explorer.selected = null;
    showContextMenu({ x: event.clientX, y: event.clientY }, [
        ...(workspace.readOnly
            ? []
            : [
                  { label: "New File...", run: () => startNewFile("") },
                  { label: "New Workshop File...", run: () => startNewFile("", "workshop") },
                  { label: "New Folder...", run: () => startNewFolder("") },
                  { label: "Upload Files...", run: () => pickFilesToUpload("") },
                  { separator: true as const },
              ]),
        { label: "Download Project as .zip", run: () => run(downloadProject) },
        { label: "Collapse Folders", run: collapseAll },
    ]);
}

function onDragStart(event: DragEvent, entry: EntryInfo): void {
    event.dataTransfer?.setData(DRAG_MIME, entry.path);
    event.dataTransfer!.effectAllowed = "move";
}

/**
 * Entries are dropped before or after the entry under the cursor (in its upper or lower part), or into a folder
 * (in the middle of its row). Uploaded files go into the folder under the cursor.
 */
function dropTargetAt(event: DragEvent, entry: EntryInfo | null, moving: boolean): DropTarget {
    if (!entry) {
        return { kind: "into", folder: "" };
    }
    if (!moving) {
        return { kind: "into", folder: entry.type === "dir" ? entry.path : dirname(entry.path) };
    }
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = (event.clientY - rect.top) / rect.height;
    if (entry.type === "dir") {
        if (ratio < 0.25) {
            return { kind: "before", path: entry.path };
        }
        // Below an expanded folder come its entries: dropping there puts the entry into the folder.
        if (ratio > 0.75 && !explorer.expanded.has(entry.path)) {
            return { kind: "after", path: entry.path };
        }
        return { kind: "into", folder: entry.path };
    }
    return { kind: ratio < 0.5 ? "before" : "after", path: entry.path };
}

function onDragOver(event: DragEvent, entry: EntryInfo | null): void {
    if (workspace.readOnly) {
        return;
    }
    const types = event.dataTransfer?.types ?? [];
    const moving = types.includes(DRAG_MIME);
    if (!moving && !types.includes("Files")) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer!.dropEffect = moving ? "move" : "copy";
    dropTarget.value = dropTargetAt(event, entry, moving);
}

function onDrop(event: DragEvent, entry: EntryInfo | null): void {
    event.preventDefault();
    event.stopPropagation();
    dropTarget.value = null;
    const source = event.dataTransfer?.getData(DRAG_MIME);
    const target = dropTargetAt(event, entry, Boolean(source));
    if (source) {
        if (target.kind === "into") {
            if (dirname(source) !== target.folder) {
                run(() => moveEntry(source, target.folder, null));
            }
        } else {
            run(() => moveEntry(source, dirname(target.path), { path: target.path, side: target.kind }));
        }
    } else if (event.dataTransfer?.files.length && target.kind === "into") {
        const files = [...event.dataTransfer.files];
        run(() => uploadFiles(target.folder, files));
    }
}

function rowDropClass(path: string): string {
    const target = dropTarget.value;
    if (target === null) {
        return "";
    }
    if (target.kind === "into") {
        return target.folder !== "" && isSameOrChild(path, target.folder) ? "bg-list-hover" : "";
    }
    if (target.path !== path) {
        return "";
    }
    return target.kind === "before" ? "shadow-[inset_0_2px_0_var(--color-focus)]" : "shadow-[inset_0_-2px_0_var(--color-focus)]";
}

function decoration(path: string): { class: string; count: number } {
    const counts = problemsByPath.value.get(path);
    if (counts?.errors) {
        return { class: "text-error", count: counts.errors };
    }
    if (counts?.warnings) {
        return { class: "text-warning", count: counts.warnings };
    }
    return { class: "", count: 0 };
}

function indent(depth: number): string {
    return `${8 + depth * 8}px`;
}
</script>

<template>
    <div class="flex min-h-0 flex-col">
        <div class="group flex h-[22px] shrink-0 items-center border-t border-transparent pr-1 pl-1 font-bold">
            <span class="codicon codicon-chevron-down mr-0.5 text-[16px]" />
            <span class="flex-1 truncate text-[11px] uppercase">{{ workspace.project?.name }}</span>
            <span v-if="workspace.readOnly" class="mr-1 text-[11px] font-normal text-fg-muted" title="This project belongs to another user: it is read only.">read only</span>
            <div class="flex gap-0.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100">
                <template v-if="!workspace.readOnly">
                    <button class="vsc-toolbar-button" title="New File..." @click="startNewFile()"><span class="codicon codicon-new-file" /></button>
                    <button class="vsc-toolbar-button" title="New Workshop File..." @click="startNewFile(undefined, 'workshop')"><span class="codicon codicon-file-code" /></button>
                    <button class="vsc-toolbar-button" title="New Folder..." @click="startNewFolder()"><span class="codicon codicon-new-folder" /></button>
                    <button class="vsc-toolbar-button" title="Upload Files..." @click="pickFilesToUpload()"><span class="codicon codicon-cloud-upload" /></button>
                </template>
                <button class="vsc-toolbar-button" title="Collapse Folders in Explorer" @click="collapseAll"><span class="codicon codicon-collapse-all" /></button>
            </div>
        </div>

        <div
            ref="tree"
            class="relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto pb-6 outline-none"
            :class="dropTarget?.kind === 'into' && dropTarget.folder === '' ? 'bg-list-hover' : ''"
            tabindex="0"
            @focusin="focused = true"
            @focusout="focused = false"
            @keydown="onTreeKeyDown"
            @contextmenu.self.prevent="onBackgroundContextMenu"
            @dragover="onDragOver($event, null)"
            @dragleave.self="dropTarget = null"
            @drop="onDrop($event, null)"
        >
            <template v-for="row in rows" :key="row.kind === 'entry' ? row.entry.path : 'edit'">
                <div v-if="row.kind === 'edit'" class="relative flex h-[22px] items-center pr-2" :style="{ paddingLeft: indent(row.depth) }">
                    <span class="codicon w-4 shrink-0" :class="row.type === 'dir' ? 'codicon-chevron-right' : ''" />
                    <span v-if="row.type === 'file'" class="mr-1.5 flex w-4 shrink-0 justify-center" :title="editingTargetName(row.edit)">
                        <img v-if="fileIcon(editingTargetName(row.edit)).iconUrl" :src="fileIcon(editingTargetName(row.edit)).iconUrl" alt="" class="h-4 w-4" />
                        <span v-else class="codicon" :class="`codicon-${fileIcon(editingTargetName(row.edit)).icon}`" />
                    </span>
                    <input
                        ref="editInput"
                        v-model="row.edit.value"
                        class="h-[20px] min-w-0 flex-1 border bg-input px-1 text-fg outline-none"
                        :class="row.edit.error ? 'border-error' : 'border-focus'"
                        spellcheck="false"
                        @input="validateEditing"
                        @keydown.stop="onEditKeyDown"
                        @blur="onEditBlur"
                    />
                    <div
                        v-if="row.edit.error"
                        class="absolute top-[21px] right-2 z-10 border border-error bg-error-bg px-1.5 py-1 text-[12px] whitespace-normal text-fg"
                        :style="{ left: indent(row.depth + 3) }"
                    >
                        {{ row.edit.error }}
                    </div>
                </div>
                <div
                    v-else
                    :data-path="row.entry.path"
                    class="group flex h-[22px] cursor-pointer items-center pr-1"
                    :class="[
                        explorer.selected === row.entry.path ? (focused ? 'bg-list-active outline -outline-offset-1 outline-focus' : 'bg-list-inactive') : 'hover:bg-list-hover',
                        rowDropClass(row.entry.path),
                    ]"
                    :style="{ paddingLeft: indent(row.depth) }"
                    :title="isEntryDisabled(row.entry.path) ? `${row.entry.path} (excluded from the compilation)` : row.entry.path"
                    :draggable="!workspace.readOnly"
                    @click="onRowClick(row.entry)"
                    @dblclick="onRowDoubleClick(row.entry)"
                    @contextmenu.prevent.stop="onRowContextMenu($event, row.entry)"
                    @dragstart="onDragStart($event, row.entry)"
                    @dragend="dropTarget = null"
                    @dragover="onDragOver($event, row.entry)"
                    @drop="onDrop($event, row.entry)"
                >
                    <span
                        class="codicon w-4 shrink-0 text-[16px]"
                        :class="row.entry.type === 'dir' ? (explorer.expanded.has(row.entry.path) ? 'codicon-chevron-down' : 'codicon-chevron-right') : ''"
                    />
                    <span v-if="row.entry.type === 'file'" class="mr-1.5 flex w-4 shrink-0 justify-center" :class="isEntryDisabled(row.entry.path) ? 'opacity-50' : ''">
                        <img v-if="fileIcon(row.entry.path).iconUrl" :src="fileIcon(row.entry.path).iconUrl" alt="" class="h-4 w-4" />
                        <span v-else class="codicon" :class="`codicon-${fileIcon(row.entry.path).icon}`" />
                    </span>
                    <span class="flex-1 truncate" :class="[decoration(row.entry.path).class, isEntryDisabled(row.entry.path) ? 'opacity-50' : '']">
                        {{ basename(row.entry.path) }}
                    </span>
                    <span v-if="workspace.readOnly && row.entry.disabled" class="codicon codicon-eye-closed ml-1 shrink-0" title="Excluded from the compilation" />
                    <div v-if="!workspace.readOnly" class="ml-1 flex shrink-0 items-center" @click.stop @dblclick.stop>
                        <button class="vsc-toolbar-button hidden !h-5 !w-5 group-hover:inline-flex" title="Duplicate" @click="run(() => duplicateEntry(row.entry.path))">
                            <span class="codicon codicon-copy" />
                        </button>
                        <button
                            class="vsc-toolbar-button !h-5 !w-5"
                            :class="row.entry.disabled ? '' : 'hidden group-hover:inline-flex'"
                            :title="row.entry.disabled ? 'Include in Compilation' : 'Exclude from Compilation'"
                            @click="run(() => toggleDisabled(row.entry.path))"
                        >
                            <span class="codicon" :class="row.entry.disabled ? 'codicon-eye-closed' : 'codicon-eye'" />
                        </button>
                        <button class="vsc-toolbar-button hidden !h-5 !w-5 group-hover:inline-flex" title="Delete" @click="run(() => deleteWithConfirmation(row.entry.path))">
                            <span class="codicon codicon-trash" />
                        </button>
                    </div>
                    <span v-if="decoration(row.entry.path).count > 0 && row.entry.type === 'file'" class="ml-1 text-[11px]" :class="decoration(row.entry.path).class">
                        {{ decoration(row.entry.path).count }}
                    </span>
                    <span v-else-if="decoration(row.entry.path).count > 0" class="ml-1 h-1.5 w-1.5 rounded-full bg-current" :class="decoration(row.entry.path).class" />
                </div>
            </template>

            <div v-if="workspace.entries.size === 0 && !explorer.editing" class="px-5 py-3 text-fg-muted">
                <p class="mb-3">This project is empty.</p>
                <template v-if="!workspace.readOnly">
                    <button class="vsc-button mb-2 w-full" @click="executeCommand('explorer.newFile')">New File</button>
                    <button class="vsc-button-secondary w-full" @click="pickFilesToUpload('')">Upload Files</button>
                </template>
            </div>
        </div>
    </div>
</template>
