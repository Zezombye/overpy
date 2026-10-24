<script setup lang="ts">
import { clearOutput, output } from "../output";
import { layout, type PanelView } from "../layout";
import { problemCounts } from "../problems";
import OutputView from "./OutputView.vue";
import ProblemsView from "./ProblemsView.vue";

const views: { id: PanelView; label: string }[] = [
    { id: "problems", label: "Problems" },
    { id: "output", label: "Output" },
];
</script>

<template>
    <section class="flex min-h-0 flex-col border-t border-border bg-panel">
        <div class="flex h-[35px] shrink-0 items-center gap-1 pr-2 pl-2">
            <button
                v-for="view in views"
                :key="view.id"
                class="relative flex h-full items-center gap-1 px-2 text-[11px] tracking-wide uppercase"
                :class="layout.activePanel === view.id ? 'text-fg-strong' : 'text-fg-muted hover:text-fg'"
                @click="layout.activePanel = view.id"
            >
                {{ view.label }}
                <span
                    v-if="view.id === 'problems' && problemCounts.error + problemCounts.warning + problemCounts.info > 0"
                    class="rounded-full bg-badge px-1.5 text-[11px] leading-[18px] text-badge-fg normal-case"
                >
                    {{ problemCounts.error + problemCounts.warning + problemCounts.info }}
                </span>
                <span v-if="layout.activePanel === view.id" class="absolute inset-x-2 bottom-[5px] h-px bg-accent" />
            </button>
            <span class="flex-1" />
            <template v-if="layout.activePanel === 'output'">
                <select v-model="output.activeChannel" class="vsc-select h-[22px] text-[12px]">
                    <option v-for="channel in Object.keys(output.channels)" :key="channel" :value="channel">{{ channel }}</option>
                </select>
                <button class="vsc-toolbar-button" title="Clear Output" @click="clearOutput(output.activeChannel)"><span class="codicon codicon-clear-all" /></button>
            </template>
            <button class="vsc-toolbar-button" :title="layout.panelMaximized ? 'Restore Panel Size' : 'Maximize Panel Size'" @click="layout.panelMaximized = !layout.panelMaximized">
                <span class="codicon" :class="layout.panelMaximized ? 'codicon-chevron-down' : 'codicon-chevron-up'" />
            </button>
            <button class="vsc-toolbar-button" title="Hide Panel" @click="layout.panelVisible = false"><span class="codicon codicon-close" /></button>
        </div>
        <ProblemsView v-if="layout.activePanel === 'problems'" class="min-h-0 flex-1" />
        <OutputView v-else class="min-h-0 flex-1" />
    </section>
</template>
