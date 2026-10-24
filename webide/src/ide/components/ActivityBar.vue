<script setup lang="ts">
import UserAvatar from "../../components/UserAvatar.vue";
import { session } from "../../lib/session";
import { executeCommand, keybindingLabel } from "../commands";
import { showContextMenu } from "../contextMenu";
import { layout, type SideBarView, toggleSideBarView } from "../layout";
import { accountMenuItems } from "../projects";
import { workspace } from "../workspace";

const views: { id: SideBarView; icon: string; title: string }[] = [
    { id: "explorer", icon: "files", title: `Explorer (${keybindingLabel("mod+shift+e")})` },
    { id: "search", icon: "search", title: `Search (${keybindingLabel("mod+shift+f")})` },
];

function menuPosition(event: MouseEvent): { x: number; y: number } {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    return { x: rect.right + 2, y: rect.bottom - 8 };
}

function showAccountMenu(event: MouseEvent): void {
    const position = menuPosition(event);
    // The context menu keeps itself inside the viewport, so anchoring it at the icon opens it upwards.
    showContextMenu(position, accountMenuItems());
}

function showManageMenu(event: MouseEvent): void {
    const position = menuPosition(event);
    showContextMenu({ x: position.x, y: position.y - 120 }, [
        { label: "Command Palette...", keybinding: keybindingLabel("mod+shift+p"), run: () => void executeCommand("workbench.action.showCommands") },
        { separator: true },
        { label: "Settings", keybinding: keybindingLabel("mod+,"), run: () => void executeCommand("workbench.action.openSettings") },
        { label: "Color Theme", run: () => void executeCommand("workbench.action.selectTheme") },
        { label: "Select Workshop Language", run: () => void executeCommand("overpy.selectWorkshopLanguage") },
    ]);
}
</script>

<template>
    <aside class="flex w-12 shrink-0 flex-col items-center border-r border-border bg-activitybar">
        <button
            v-for="view in views"
            :key="view.id"
            class="relative flex h-12 w-12 items-center justify-center"
            :class="layout.sideBarVisible && layout.activeView === view.id ? 'text-activitybar-fg' : 'text-activitybar-inactive hover:text-activitybar-fg'"
            :title="view.title"
            @click="toggleSideBarView(view.id)"
        >
            <span v-if="layout.sideBarVisible && layout.activeView === view.id" class="absolute inset-y-0 left-0 w-[2px] bg-accent" />
            <span class="codicon text-[24px]" :class="`codicon-${view.icon}`" />
            <span
                v-if="view.id === 'explorer' && workspace.dirty.size > 0"
                class="absolute right-[5px] bottom-[7px] min-w-4 rounded-full bg-accent px-1 text-center text-[9px] leading-4 font-semibold text-accent-fg"
            >
                {{ workspace.dirty.size }}
            </span>
        </button>
        <span class="flex-1" />
        <button class="flex h-12 w-12 items-center justify-center text-activitybar-inactive hover:text-activitybar-fg" title="Accounts" @click="showAccountMenu">
            <UserAvatar :user="session.user" :size="24" />
        </button>
        <button class="flex h-12 w-12 items-center justify-center text-activitybar-inactive hover:text-activitybar-fg" title="Manage" @click="showManageMenu">
            <span class="codicon codicon-settings-gear text-[24px]" />
        </button>
    </aside>
</template>
