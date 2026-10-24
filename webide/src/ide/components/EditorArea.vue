<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import overpyCompileIconUrl from "../../../../img/index.svg?url";
import { executeCommand, keybindingLabel } from "../commands";
import { showContextMenu } from "../contextMenu";
import {
    activateTab,
    activeFilePath,
    activeTab,
    closeAllTabs,
    closeOtherTabs,
    closeSavedTabs,
    closeTab,
    closeTabsToTheRight,
    createCodeEditor,
    type EditorTab,
    editors,
    moveTab,
    pinTab,
} from "../editors";
import { revealInExplorer } from "../explorer";
import { reportError } from "../notifications";
import { basename, dirname } from "../paths";
import { fileIcon } from "../quickAccess";
import { fsPathOf, isCodeFile, workspace } from "../workspace";
import SettingsEditor from "./SettingsEditor.vue";
import WelcomePage from "./WelcomePage.vue";

const editorContainer = ref<HTMLElement | null>(null);
const dragOverIndex = ref<number | null>(null);

onMounted(() => {
    createCodeEditor(editorContainer.value!);
});

function tabLabel(tab: EditorTab): string {
    if (tab.kind === "settings") {
        return "Settings";
    }
    if (tab.kind === "welcome") {
        return "Welcome";
    }
    return basename(tab.path);
}

/** Folder shown next to tabs whose file names are not unique. */
const duplicateNames = computed(() => {
    const counts = new Map<string, number>();
    for (const tab of editors.tabs) {
        const label = tabLabel(tab);
        counts.set(label, (counts.get(label) ?? 0) + 1);
    }
    return counts;
});

function tabDescription(tab: EditorTab): string {
    return tab.kind === "file" && (duplicateNames.value.get(tabLabel(tab)) ?? 0) > 1 ? dirname(tab.path) || "/" : "";
}

function isDirty(tab: EditorTab): boolean {
    return tab.kind === "file" && workspace.dirty.has(tab.path);
}

function close(id: string): void {
    closeTab(id).catch((error) => reportError(error));
}

function onTabMouseUp(event: MouseEvent, tab: EditorTab): void {
    if (event.button === 1) {
        event.preventDefault();
        close(tab.id);
    }
}

function onTabContextMenu(event: MouseEvent, tab: EditorTab): void {
    const run = (action: () => Promise<void>) => () => void action().catch((error) => reportError(error));
    showContextMenu({ x: event.clientX, y: event.clientY }, [
        { label: "Close", run: run(() => closeTab(tab.id).then(() => undefined)) },
        { label: "Close Others", run: run(() => closeOtherTabs(tab.id)) },
        { label: "Close to the Right", run: run(() => closeTabsToTheRight(tab.id)) },
        { label: "Close Saved", run: run(closeSavedTabs) },
        { label: "Close All", run: run(closeAllTabs) },
        ...(tab.kind === "file"
            ? [
                  { separator: true as const },
                  { label: "Copy Path", run: () => void navigator.clipboard.writeText(fsPathOf(tab.path)).catch(reportError) },
                  { label: "Copy Relative Path", run: () => void navigator.clipboard.writeText(tab.path).catch(reportError) },
                  { label: "Reveal in Explorer View", run: () => revealInExplorer(tab.path) },
                  ...(tab.preview ? [{ separator: true as const }, { label: "Keep Open", run: () => pinTab(tab.id) }] : []),
              ]
            : []),
    ]);
}

function onDragStart(event: DragEvent, tab: EditorTab): void {
    event.dataTransfer?.setData("application/x-overpy-tab", tab.id);
    event.dataTransfer!.effectAllowed = "move";
}

function onDragOver(event: DragEvent, index: number): void {
    if (event.dataTransfer?.types.includes("application/x-overpy-tab")) {
        event.preventDefault();
        dragOverIndex.value = index;
    }
}

function onDrop(event: DragEvent, index: number): void {
    const id = event.dataTransfer?.getData("application/x-overpy-tab");
    dragOverIndex.value = null;
    if (id) {
        event.preventDefault();
        moveTab(id, index);
    }
}

function showMoreActions(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const run = (action: () => Promise<void>) => () => void action().catch((error) => reportError(error));
    showContextMenu({ x: rect.right - 200, y: rect.bottom }, [
        { label: "Close All", run: run(closeAllTabs) },
        { label: "Close Saved", run: run(closeSavedTabs) },
        { separator: true },
        { label: "Toggle Word Wrap", keybinding: keybindingLabel("alt+z"), run: () => void executeCommand("editor.action.toggleWordWrap") },
        { label: "Toggle Minimap", run: () => void executeCommand("editor.action.toggleMinimap") },
    ]);
}

const breadcrumbs = computed(() => {
    const path = activeFilePath.value;
    if (path === null) {
        return [];
    }
    const segments = path.split("/");
    return segments.map((name, index) => ({ name, path: segments.slice(0, index + 1).join("/"), isFile: index === segments.length - 1 }));
});

const watermarkShortcuts = [
    { label: "Show All Commands", keybinding: "mod+shift+p", command: "workbench.action.showCommands" },
    { label: "Go to File", keybinding: "mod+p", command: "workbench.action.quickOpen" },
    { label: "Find in Files", keybinding: "mod+shift+f", command: "workbench.view.search" },
    { label: "New File", keybinding: "mod+alt+n", command: "explorer.newFile" },
    { label: "Compile OverPy", keybinding: "mod+shift+b", command: "overpy.compile" },
];
</script>

<template>
    <div class="flex flex-col bg-editor">
        <div v-if="editors.tabs.length > 0" class="flex h-[35px] shrink-0 bg-tabs">
            <div class="tabs-scroll flex min-w-0 flex-1 overflow-x-auto overflow-y-hidden" @dragleave.self="dragOverIndex = null">
                <div
                    v-for="(tab, index) in editors.tabs"
                    :key="tab.id"
                    class="group relative flex h-full max-w-[260px] min-w-[80px] shrink-0 cursor-pointer items-center gap-1.5 border-r border-border pr-1 pl-2.5"
                    :class="[
                        editors.activeId === tab.id ? 'bg-tab-active text-fg-strong' : 'border-b bg-tabs text-tab-inactive-fg hover:bg-tab-active',
                        dragOverIndex === index ? 'outline -outline-offset-1 outline-focus' : '',
                    ]"
                    :title="tab.kind === 'file' ? tab.path : tabLabel(tab)"
                    draggable="true"
                    @click="activateTab(tab.id)"
                    @dblclick="pinTab(tab.id)"
                    @mouseup="onTabMouseUp($event, tab)"
                    @contextmenu.prevent="onTabContextMenu($event, tab)"
                    @dragstart="onDragStart($event, tab)"
                    @dragover="onDragOver($event, index)"
                    @drop="onDrop($event, index)"
                >
                    <span v-if="editors.activeId === tab.id" class="absolute inset-x-0 top-0 h-px bg-accent" />
                    <span class="flex w-4 shrink-0 justify-center">
                        <img v-if="tab.kind === 'file' && fileIcon(tab.path).iconUrl" :src="fileIcon(tab.path).iconUrl" alt="" class="h-4 w-4" />
                        <span v-else-if="tab.kind === 'file'" class="codicon" :class="`codicon-${fileIcon(tab.path).icon}`" />
                        <span v-else-if="tab.kind === 'settings'" class="codicon codicon-settings" />
                        <span v-else class="codicon codicon-home" />
                    </span>
                    <span class="truncate" :class="tab.kind === 'file' && tab.preview ? 'italic' : ''">{{ tabLabel(tab) }}</span>
                    <span v-if="tabDescription(tab)" class="truncate text-[12px] text-fg-muted">{{ tabDescription(tab) }}</span>
                    <button
                        class="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] hover:bg-toolbar-hover"
                        :class="isDirty(tab) || editors.activeId === tab.id ? 'visible' : 'invisible group-hover:visible'"
                        :title="`Close (${keybindingLabel('mod+alt+w')})`"
                        @click.stop="close(tab.id)"
                    >
                        <span v-if="isDirty(tab)" class="codicon codicon-circle-filled text-[12px] group-hover:hidden" />
                        <span class="codicon codicon-close text-[16px]" :class="isDirty(tab) ? 'hidden group-hover:inline-block' : ''" />
                    </button>
                </div>
            </div>
            <div class="flex shrink-0 items-center gap-0.5 px-1.5">
                <button
                    v-if="activeFilePath && isCodeFile(activeFilePath)"
                    class="vsc-toolbar-button"
                    :title="`Compile Project (OverPy -> Workshop) (${keybindingLabel('mod+shift+b')})`"
                    @click="executeCommand('overpy.compile')"
                >
                    <img :src="overpyCompileIconUrl" alt="" class="h-4 w-4" />
                </button>
                <button class="vsc-toolbar-button" title="More Actions..." @click="showMoreActions"><span class="codicon codicon-ellipsis" /></button>
            </div>
        </div>

        <div v-if="breadcrumbs.length > 0" class="flex h-[22px] shrink-0 items-center gap-0.5 truncate px-3 text-fg-muted">
            <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
                <span v-if="index > 0" class="codicon codicon-chevron-right text-[14px]" />
                <button class="flex items-center gap-1 rounded-sm px-0.5 hover:text-fg" @click="revealInExplorer(crumb.path)">
                    <template v-if="crumb.isFile">
                        <img v-if="fileIcon(crumb.path).iconUrl" :src="fileIcon(crumb.path).iconUrl" alt="" class="h-3.5 w-3.5" />
                        <span v-else class="codicon text-[14px]" :class="`codicon-${fileIcon(crumb.path).icon}`" />
                    </template>
                    {{ crumb.name }}
                </button>
            </template>
        </div>

        <div class="relative min-h-0 flex-1">
            <div v-show="activeTab?.kind === 'file'" ref="editorContainer" class="absolute inset-0" />
            <SettingsEditor v-if="activeTab?.kind === 'settings'" class="absolute inset-0" />
            <WelcomePage v-else-if="activeTab?.kind === 'welcome'" class="absolute inset-0" />
            <div v-else-if="!activeTab" class="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <img src="../../../../img/overpy.png" alt="" class="h-32 w-32 opacity-10 grayscale" />
                <dl class="grid grid-cols-[auto_auto] gap-x-4 gap-y-2.5 text-fg-muted">
                    <template v-for="shortcut in watermarkShortcuts" :key="shortcut.command">
                        <dt class="cursor-pointer text-right hover:text-fg" @click="executeCommand(shortcut.command)">{{ shortcut.label }}</dt>
                        <dd>
                            <kbd class="rounded-[3px] border border-border bg-[color-mix(in_srgb,var(--vsc-fg)_8%,transparent)] px-1.5 py-0.5 text-[11px]">{{ keybindingLabel(shortcut.keybinding) }}</kbd>
                        </dd>
                    </template>
                </dl>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabs-scroll {
    scrollbar-width: none;
}
.tabs-scroll:hover {
    scrollbar-width: thin;
}
</style>
