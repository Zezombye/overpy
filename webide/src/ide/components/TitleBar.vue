<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import overpyIconUrl from "../../../../img/overpy.png?url";
import { session } from "../../lib/session";
import { commands, executeCommand, keybindingLabel } from "../commands";
import { showContextMenu } from "../contextMenu";
import { layout } from "../layout";
import { type MenuEntry, titleBarMenus } from "../menus";
import { runEditorAction } from "../registerCommands";
import UserAvatar from "../../components/UserAvatar.vue";
import { accountMenuItems } from "../projects";
import { workspace } from "../workspace";
import ProjectSettingsDropdown from "./ProjectSettingsDropdown.vue";
import ProjectSwitcher from "./ProjectSwitcher.vue";

const openMenu = ref<number | null>(null);
const menuBar = ref<HTMLElement | null>(null);

interface ResolvedEntry {
    separator: boolean;
    label: string;
    keybinding?: string;
    enabled: boolean;
    run: () => void;
}

function resolve(entry: MenuEntry): ResolvedEntry {
    if ("separator" in entry) {
        return { separator: true, label: "", enabled: false, run: () => {} };
    }
    if ("editorAction" in entry) {
        return {
            separator: false,
            label: entry.label,
            keybinding: entry.keybinding ? keybindingLabel(entry.keybinding) : undefined,
            enabled: true,
            run: () => runEditorAction(entry.editorAction),
        };
    }
    const command = commands.get(entry.command);
    if (!command) {
        throw new Error(`Menu references unknown command '${entry.command}'`);
    }
    return {
        separator: false,
        label: entry.label ?? command.title,
        keybinding: command.keybinding ? keybindingLabel(command.keybinding) : undefined,
        enabled: command.enabled?.() ?? true,
        run: () => void executeCommand(entry.command),
    };
}

const resolvedItems = computed(() => (openMenu.value === null ? [] : titleBarMenus[openMenu.value].items.map(resolve)));

function toggleMenu(index: number): void {
    openMenu.value = openMenu.value === index ? null : index;
}

function hoverMenu(index: number): void {
    if (openMenu.value !== null) {
        openMenu.value = index;
    }
}

function runItem(item: ResolvedEntry): void {
    if (!item.enabled) {
        return;
    }
    openMenu.value = null;
    item.run();
}

function onDocumentPointerDown(event: PointerEvent): void {
    if (openMenu.value !== null && !menuBar.value?.contains(event.target as Node)) {
        openMenu.value = null;
    }
}

function onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape" && openMenu.value !== null) {
        openMenu.value = null;
        event.stopPropagation();
    }
}

onMounted(() => {
    document.addEventListener("pointerdown", onDocumentPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);
});
onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onDocumentPointerDown, true);
    document.removeEventListener("keydown", onKeyDown, true);
});

function showAccountMenu(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    showContextMenu({ x: rect.right - 220, y: rect.bottom + 2 }, accountMenuItems());
}
</script>

<template>
    <header class="relative z-30 flex h-[35px] shrink-0 items-center border-b border-border bg-titlebar text-[13px]">
        <img :src="overpyIconUrl" alt="OverPy" class="mx-[9px] h-4 w-4 shrink-0" />

        <nav ref="menuBar" class="flex h-full items-center">
            <div v-for="(menu, index) in titleBarMenus" :key="menu.label" class="relative h-full">
                <button
                    class="h-full rounded-[5px] px-2 leading-[35px] hover:bg-toolbar-hover"
                    :class="openMenu === index ? 'bg-toolbar-hover' : ''"
                    @click="toggleMenu(index)"
                    @mouseenter="hoverMenu(index)"
                >
                    {{ menu.label }}
                </button>
                <div
                    v-if="openMenu === index"
                    class="absolute top-[33px] left-0 min-w-[240px] rounded-md border border-widget-border bg-menu py-1 shadow-[0_2px_8px_var(--vsc-shadow)]"
                >
                    <template v-for="(item, itemIndex) in resolvedItems" :key="itemIndex">
                        <div v-if="item.separator" class="mx-2.5 my-1 border-t border-widget-border" />
                        <button
                            v-else
                            class="mx-1 flex h-[26px] w-[calc(100%-8px)] items-center rounded-[3px] px-3 text-left"
                            :class="item.enabled ? 'hover:bg-menu-selection hover:text-accent-fg' : 'cursor-default opacity-40'"
                            @click="runItem(item)"
                        >
                            <span class="flex-1 pr-6">{{ item.label }}</span>
                            <span v-if="item.keybinding" class="text-xs opacity-70">{{ item.keybinding }}</span>
                        </button>
                    </template>
                </div>
            </div>
        </nav>

        <div class="flex min-w-0 flex-1 justify-center px-3">
            <button
                class="flex h-[22px] w-full max-w-[600px] min-w-[160px] items-center justify-center gap-1.5 rounded-md border border-[color-mix(in_srgb,var(--vsc-fg)_15%,transparent)] bg-[color-mix(in_srgb,var(--vsc-fg)_5%,transparent)] px-2 text-fg-muted hover:bg-[color-mix(in_srgb,var(--vsc-fg)_10%,transparent)]"
                :title="`Search files (${keybindingLabel('mod+p')})`"
                @click="executeCommand('workbench.action.quickOpen')"
            >
                <span class="codicon codicon-search text-[14px]" />
                <span class="truncate">{{ workspace.project?.name ?? "" }}</span>
            </button>
        </div>

        <div class="flex shrink-0 items-center gap-0.5 pr-2">
            <ProjectSettingsDropdown />
            <ProjectSwitcher />
            <button class="flex h-[24px] items-center gap-1.5 rounded-[5px] px-1.5 hover:bg-toolbar-hover" title="Account" @click="showAccountMenu">
                <UserAvatar :user="session.user" :size="16" />
                <span class="max-w-[120px] truncate">{{ session.user?.name }}</span>
                <span class="codicon codicon-chevron-down text-[12px]" />
            </button>
            <span class="mx-1 h-4 border-l border-border" />
            <button class="vsc-toolbar-button" :title="`Toggle Primary Side Bar (${keybindingLabel('mod+b')})`" @click="layout.sideBarVisible = !layout.sideBarVisible">
                <span class="codicon" :class="layout.sideBarVisible ? 'codicon-layout-sidebar-left' : 'codicon-layout-sidebar-left-off'" />
            </button>
            <button class="vsc-toolbar-button" :title="`Toggle Panel (${keybindingLabel('mod+j')})`" @click="layout.panelVisible = !layout.panelVisible">
                <span class="codicon" :class="layout.panelVisible ? 'codicon-layout-panel' : 'codicon-layout-panel-off'" />
            </button>
        </div>
    </header>
</template>
