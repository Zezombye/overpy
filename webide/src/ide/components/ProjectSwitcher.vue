<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";

import type { ProjectSummary } from "../../../shared/api";
import { api } from "../../lib/api";
import { formatRelativeTime } from "../../lib/format";
import { reportError } from "../notifications";
import { importWorkshopCodesProject, manageProjects, newProject, openProject } from "../projects";
import { workspace } from "../workspace";
import TitleBarDropdown from "./TitleBarDropdown.vue";

const open = ref(false);
const projects = ref<ProjectSummary[] | null>(null);
const loadError = ref<string | null>(null);
const filter = ref("");
const activeIndex = ref(0);
const filterInput = ref<HTMLInputElement | null>(null);

interface Item {
    label: string;
    description: string;
    icon: string;
    current?: boolean;
    run: () => Promise<void>;
}

const actions: Item[] = [
    { label: "New Project...", description: "", icon: "add", run: newProject },
    { label: "Import workshop.codes Project...", description: "", icon: "cloud-download", run: importWorkshopCodesProject },
    { label: "Manage Projects...", description: "", icon: "folder-library", run: manageProjects },
];

const projectItems = computed<Item[]>(() =>
    (projects.value ?? [])
        .filter((project) => project.name.toLowerCase().includes(filter.value.trim().toLowerCase()))
        .map((project) => ({
            label: project.name,
            description: project.id === workspace.project?.id ? "current project" : `updated ${formatRelativeTime(project.updatedAt)}`,
            icon: project.id === workspace.project?.id ? "folder-opened" : "folder",
            current: project.id === workspace.project?.id,
            run: () => openProject(project.id),
        })),
);

const items = computed(() => [...projectItems.value, ...actions]);

watch(open, async (isOpen) => {
    if (!isOpen) {
        return;
    }
    filter.value = "";
    activeIndex.value = 0;
    loadError.value = null;
    await nextTick();
    filterInput.value?.focus();
    try {
        projects.value = (await api.listProjects()).projects;
    } catch (error) {
        loadError.value = error instanceof Error ? error.message : String(error);
    }
});

watch(filter, () => (activeIndex.value = 0));

function run(item: Item): void {
    open.value = false;
    item.run().catch((error) => reportError(error));
}

function onKeyDown(event: KeyboardEvent): void {
    const count = items.value.length;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        activeIndex.value = (activeIndex.value + (event.key === "ArrowDown" ? 1 : -1) + count) % count;
        nextTick(() => document.querySelector("[data-project-item-active]")?.scrollIntoView({ block: "nearest" }));
    } else if (event.key === "Enter") {
        const item = items.value[activeIndex.value];
        if (item) {
            run(item);
        }
    } else {
        return;
    }
    event.preventDefault();
}
</script>

<template>
    <TitleBarDropdown v-model:open="open" title="Switch Project" align="right" panel-class="w-[360px]">
        <template #button>
            <span class="codicon codicon-folder-library text-[16px]" />
            <span class="max-w-[160px] truncate">{{ workspace.project?.name }}</span>
        </template>
        <div class="p-1.5">
            <input ref="filterInput" v-model="filter" class="vsc-input h-[26px] w-full" placeholder="Search projects" spellcheck="false" @keydown="onKeyDown" />
        </div>
        <div class="max-h-[50vh] overflow-y-auto px-1 pb-1">
            <div v-if="loadError" class="px-2 py-1.5 text-error">{{ loadError }}</div>
            <div v-else-if="projects === null" class="px-2 py-1.5 text-fg-muted">Loading projects…</div>
            <div v-else-if="projectItems.length === 0" class="px-2 py-1.5 text-fg-muted">No matching project.</div>
            <template v-for="(item, index) in items" :key="index">
                <div v-if="index === projectItems.length" class="mx-1.5 my-1 border-t border-widget-border" />
                <button
                    class="flex h-[26px] w-full items-center gap-2 rounded-[3px] px-2 text-left"
                    :class="index === activeIndex ? 'bg-menu-selection text-accent-fg' : ''"
                    :data-project-item-active="index === activeIndex ? '' : undefined"
                    @click="run(item)"
                    @mouseenter="activeIndex = index"
                >
                    <span class="codicon shrink-0 text-[16px]" :class="`codicon-${item.icon}`" />
                    <span class="min-w-0 flex-1 truncate" :class="item.current ? 'font-semibold' : ''">{{ item.label }}</span>
                    <span v-if="item.description" class="shrink-0 text-[12px] opacity-70">{{ item.description }}</span>
                </button>
            </template>
        </div>
    </TitleBarDropdown>
</template>
