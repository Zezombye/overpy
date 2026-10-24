<script setup lang="ts">
import { computed, reactive } from "vue";

import { openFile } from "../editors";
import { basename, dirname } from "../paths";
import { type Problem, problems } from "../problems";
import { fileIcon } from "../quickAccess";

const collapsed = reactive(new Set<string>());

const groups = computed(() => {
    const byPath = new Map<string, Problem[]>();
    for (const problem of problems.list) {
        const list = byPath.get(problem.path) ?? [];
        list.push(problem);
        byPath.set(problem.path, list);
    }
    return [...byPath.entries()];
});

const severityIcons = {
    error: "codicon-error text-error",
    warning: "codicon-warning text-warning",
    info: "codicon-info text-info",
};

function toggle(path: string): void {
    if (collapsed.has(path)) {
        collapsed.delete(path);
    } else {
        collapsed.add(path);
    }
}
</script>

<template>
    <div class="overflow-y-auto">
        <p v-if="groups.length === 0" class="px-5 py-1 text-fg-muted">No problems have been detected in the workspace.</p>
        <template v-for="[path, list] in groups" :key="path">
            <div class="flex h-[22px] cursor-pointer items-center pr-3 pl-2 hover:bg-list-hover" @click="toggle(path)">
                <span class="codicon w-4 shrink-0" :class="collapsed.has(path) ? 'codicon-chevron-right' : 'codicon-chevron-down'" />
                <span class="mr-1.5 flex w-4 shrink-0 justify-center">
                    <img v-if="fileIcon(path).iconUrl" :src="fileIcon(path).iconUrl" alt="" class="h-4 w-4" />
                    <span v-else class="codicon" :class="`codicon-${fileIcon(path).icon}`" />
                </span>
                <span>{{ basename(path) }}</span>
                <span class="ml-1.5 truncate text-[12px] text-fg-muted">{{ dirname(path) }}</span>
                <span class="ml-2 rounded-full bg-badge px-1.5 text-[11px] leading-[18px] text-badge-fg">{{ list.length }}</span>
            </div>
            <template v-if="!collapsed.has(path)">
                <div
                    v-for="(problem, index) in list"
                    :key="index"
                    class="flex min-h-[22px] cursor-pointer items-start gap-1.5 py-[3px] pr-3 pl-[42px] select-text hover:bg-list-hover"
                    @click="openFile(path, { selection: problem.range })"
                >
                    <span class="codicon mt-px shrink-0" :class="severityIcons[problem.severity]" />
                    <span class="min-w-0 flex-1 whitespace-pre-wrap">
                        {{ problem.message }}
                        <span class="text-fg-muted">{{ problem.source }}{{ problem.code ? `(${problem.code})` : "" }}</span>
                        <span class="text-fg-muted"> [Ln {{ problem.range.startLineNumber }}, Col {{ problem.range.startColumn }}]</span>
                    </span>
                </div>
            </template>
        </template>
    </div>
</template>
