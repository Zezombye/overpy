<script setup lang="ts">
import { onMounted, ref } from "vue";

import overpyIconUrl from "../../../../img/overpy.png?url";
import type { ProjectSummary } from "../../../shared/api";
import { api } from "../../lib/api";
import { formatRelativeTime } from "../../lib/format";
import { ideUrl } from "../../lib/router";
import { executeCommand, keybindingLabel } from "../commands";
import { reportError } from "../notifications";
import { DOCUMENTATION_URL } from "../registerCommands";
import { workspace } from "../workspace";

const recentProjects = ref<ProjectSummary[]>([]);

onMounted(async () => {
    try {
        recentProjects.value = (await api.listProjects()).projects.filter((project) => project.id !== workspace.project?.id).slice(0, 5);
    } catch (error) {
        reportError(error, "Could not list the projects");
    }
});

const startActions = [
    { icon: "new-file", label: "New File...", command: "explorer.newFile" },
    { icon: "folder-library", label: "Open Project...", command: "projects.switch" },
    { icon: "add", label: "New Project...", command: "projects.new" },
    { icon: "cloud-upload", label: "Upload Files...", command: "files.upload" },
    { icon: "arrow-swap", label: "Decompile Workshop Code...", command: "overpy.decompile" },
];

const shortcuts = [
    { label: "Compile the active file", keybinding: "mod+shift+b" },
    { label: "Save (and compile, see settings)", keybinding: "mod+s" },
    { label: "Show all commands", keybinding: "mod+shift+p" },
    { label: "Go to file", keybinding: "mod+p" },
    { label: "Go to definition", keybinding: "f12" },
    { label: "Rename symbol", keybinding: "f2" },
];
</script>

<template>
    <div class="overflow-y-auto bg-editor select-text">
        <div class="mx-auto max-w-[900px] px-10 py-14">
            <div class="mb-10 flex items-center gap-4">
                <img :src="overpyIconUrl" alt="" class="h-16 w-16" />
                <div>
                    <h1 class="text-[32px] font-light text-fg-strong">OverPy IDE</h1>
                    <p class="text-[16px] text-fg-muted">Write Overwatch Workshop gamemodes in OverPy, from your browser.</p>
                </div>
            </div>
            <div class="grid gap-10 md:grid-cols-2">
                <div>
                    <h2 class="mb-2 text-[18px] text-fg-strong">Start</h2>
                    <ul class="mb-8 space-y-1.5">
                        <li v-for="action in startActions" :key="action.command">
                            <button class="vsc-link flex items-center gap-2" @click="executeCommand(action.command)">
                                <span class="codicon" :class="`codicon-${action.icon}`" />{{ action.label }}
                            </button>
                        </li>
                    </ul>
                    <h2 class="mb-2 text-[18px] text-fg-strong">Recent Projects</h2>
                    <ul v-if="recentProjects.length > 0" class="space-y-1.5">
                        <li v-for="project in recentProjects" :key="project.id" class="flex gap-3">
                            <a class="vsc-link" :href="ideUrl(project.id)">{{ project.name }}</a>
                            <span class="text-fg-muted">{{ formatRelativeTime(project.updatedAt) }}</span>
                        </li>
                    </ul>
                    <p v-else class="text-fg-muted">No other projects.</p>
                </div>
                <div>
                    <h2 class="mb-2 text-[18px] text-fg-strong">Shortcuts</h2>
                    <ul class="mb-8 space-y-2">
                        <li v-for="shortcut in shortcuts" :key="shortcut.label" class="flex justify-between gap-4">
                            <span class="text-fg-muted">{{ shortcut.label }}</span>
                            <kbd class="rounded-[3px] border border-border bg-[color-mix(in_srgb,var(--vsc-fg)_8%,transparent)] px-1.5 py-0.5 text-[11px]">{{
                                keybindingLabel(shortcut.keybinding)
                            }}</kbd>
                        </li>
                    </ul>
                    <h2 class="mb-2 text-[18px] text-fg-strong">Learn</h2>
                    <ul class="space-y-1.5">
                        <li><a class="vsc-link" :href="DOCUMENTATION_URL" target="_blank" rel="noopener">OverPy documentation</a></li>
                        <li><button class="vsc-link" @click="executeCommand('workbench.action.openSettings')">Settings (workshop language, compile on save...)</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
