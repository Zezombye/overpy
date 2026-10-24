<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";

import { output } from "../output";

const container = ref<HTMLElement | null>(null);
const lines = computed(() => output.channels[output.activeChannel] ?? []);

// Keep following new lines while scrolled to the bottom.
watch(
    () => [lines.value.length, output.activeChannel],
    async () => {
        const element = container.value;
        const atBottom = !element || element.scrollHeight - element.scrollTop - element.clientHeight < 30;
        await nextTick();
        if (atBottom && container.value) {
            container.value.scrollTop = container.value.scrollHeight;
        }
    },
);
</script>

<template>
    <div ref="container" class="overflow-auto px-5 py-1 font-mono text-[12px] leading-[18px] whitespace-pre select-text">
        <div v-for="(line, index) in lines" :key="index">{{ line }}</div>
    </div>
</template>
