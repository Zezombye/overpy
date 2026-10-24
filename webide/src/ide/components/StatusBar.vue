<script setup lang="ts">
import { computed } from "vue";

import { settings } from "../../lib/settings";
import { executeCommand } from "../commands";
import { activeFilePath, editors, getCodeEditor } from "../editors";
import { languageServer } from "../languageServer";
import { layout, togglePanelView } from "../layout";
import { notifications } from "../notifications";
import { compilation } from "../overpy";
import { problemCounts } from "../problems";
import { workspace } from "../workspace";

const languageNames: Record<string, string> = {
    overpy: "OverPy",
    owworkshop: "Overwatch Workshop",
    json: "JSON",
    javascript: "JavaScript",
    markdown: "Markdown",
    plaintext: "Plain Text",
};

const languageName = computed(() => languageNames[editors.status.languageId] ?? editors.status.languageId);

function goToLine(): void {
    void executeCommand("workbench.action.gotoLine");
}

function toggleIndentation(): void {
    const model = getCodeEditor()?.getModel();
    model?.updateOptions({ insertSpaces: !editors.status.insertSpaces });
    editors.status.insertSpaces = !editors.status.insertSpaces;
}
</script>

<template>
    <footer class="flex h-[22px] shrink-0 items-center border-t border-border bg-statusbar text-[12px]">
        <button
            class="flex h-full items-center gap-1 bg-accent px-2.5 text-accent-fg hover:bg-accent-hover"
            title="Switch Project"
            @click="executeCommand('projects.switch')"
        >
            <span class="codicon codicon-folder-library text-[14px]" />
            <span class="max-w-[200px] truncate">{{ workspace.project?.name }}</span>
        </button>
        <button class="flex h-full items-center gap-1 px-2 hover:bg-statusbar-hover" title="Problems" @click="togglePanelView('problems')">
            <span class="codicon codicon-error text-[14px]" />{{ problemCounts.error }}
            <span class="codicon codicon-warning ml-1 text-[14px]" />{{ problemCounts.warning }}
        </button>
        <span v-if="languageServer.status === 'starting'" class="flex h-full items-center gap-1 px-2" title="The OverPy language server is starting">
            <span class="codicon codicon-loading codicon-modifier-spin text-[14px]" />OverPy
        </span>
        <button
            v-else-if="languageServer.status === 'stopped'"
            class="flex h-full items-center gap-1 px-2 text-error hover:bg-statusbar-hover"
            title="The OverPy language server stopped. Click to show its output."
            @click="
                layout.activePanel = 'output';
                layout.panelVisible = true;
            "
        >
            <span class="codicon codicon-error text-[14px]" />Language server stopped
        </button>
        <span v-if="compilation.running" class="flex h-full items-center gap-1 px-2">
            <span class="codicon codicon-sync codicon-modifier-spin text-[14px]" />Compiling...
        </span>
        <span v-if="workspace.saving.size > 0" class="flex h-full items-center gap-1 px-2">
            <span class="codicon codicon-loading codicon-modifier-spin text-[14px]" />Saving...
        </span>

        <span class="flex-1" />

        <template v-if="activeFilePath">
            <button class="h-full px-2 hover:bg-statusbar-hover" title="Go to Line/Column" @click="goToLine">
                Ln {{ editors.status.line }}, Col {{ editors.status.column }}
                <template v-if="editors.status.selections > 1">({{ editors.status.selections }} selections)</template>
                <template v-else-if="editors.status.selectedCharacters > 0">({{ editors.status.selectedCharacters }} selected)</template>
            </button>
            <button class="h-full px-2 hover:bg-statusbar-hover" title="Toggle Spaces/Tabs" @click="toggleIndentation">
                {{ editors.status.insertSpaces ? "Spaces" : "Tab Size" }}: {{ editors.status.tabSize }}
            </button>
            <span class="px-2">UTF-8</span>
            <span class="px-2">{{ editors.status.eol }}</span>
            <span class="px-2">{{ languageName }}</span>
        </template>
        <button
            class="flex h-full items-center gap-1 px-2 hover:bg-statusbar-hover"
            title="Workshop language used for compilation and decompilation"
            @click="executeCommand('overpy.selectWorkshopLanguage')"
        >
            <span class="codicon codicon-globe text-[14px]" />{{ settings["overpy.workshopLanguage"] }}
        </button>
        <button
            class="flex h-full items-center px-2 hover:bg-statusbar-hover"
            :title="notifications.doNotDisturb ? 'Notifications (Do Not Disturb)' : 'Notifications'"
            @click="notifications.centerVisible = !notifications.centerVisible"
        >
            <span
                class="codicon text-[14px]"
                :class="notifications.doNotDisturb ? 'codicon-bell-slash' : notifications.list.length > 0 ? 'codicon-bell-dot' : 'codicon-bell'"
            />
        </button>
    </footer>
</template>
