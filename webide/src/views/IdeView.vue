<script setup lang="ts">
import { onMounted } from "vue";

import Workbench from "../ide/components/Workbench.vue";
import { ide, startIde } from "../ide/ide";
import { reportError } from "../ide/notifications";

const props = defineProps<{ projectId: string }>();

onMounted(() => {
    startIde(props.projectId).catch((error) => reportError(error));
});
</script>

<template>
    <Workbench />
    <div v-if="ide.phase !== 'ready'" class="fixed inset-0 z-[100] flex items-center justify-center bg-editor">
        <div v-if="ide.phase === 'error'" class="max-w-md text-center">
            <p class="mb-2 text-lg text-fg-strong">Could not open the project</p>
            <p class="mb-5 text-fg-muted">{{ ide.error }}</p>
            <a class="vsc-button" href="/">Back to projects</a>
        </div>
        <div v-else class="flex flex-col items-center gap-3 text-fg-muted">
            <span class="codicon codicon-loading codicon-modifier-spin text-[24px]" />
            <span>Loading project…</span>
        </div>
    </div>
</template>
