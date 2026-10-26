<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

/* A title bar button with a panel below it, closed by clicking elsewhere or pressing Escape. */

defineProps<{ title: string; align: "left" | "right"; panelClass?: string }>();

const open = defineModel<boolean>("open", { default: false });
const root = ref<HTMLElement | null>(null);

function onPointerDown(event: PointerEvent): void {
    if (open.value && !root.value?.contains(event.target as Node)) {
        open.value = false;
    }
}

function onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape" && open.value) {
        open.value = false;
        event.stopPropagation();
    }
}

onMounted(() => {
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);
});
onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onPointerDown, true);
    document.removeEventListener("keydown", onKeyDown, true);
});
</script>

<template>
    <div ref="root" class="relative">
        <button
            class="flex h-[24px] items-center gap-1 rounded-[5px] px-1.5 hover:bg-toolbar-hover"
            :class="open ? 'bg-toolbar-hover' : ''"
            :title="title"
            @click="open = !open"
        >
            <slot name="button" />
            <span class="codicon codicon-chevron-down text-[12px]" />
        </button>
        <div
            v-if="open"
            class="absolute top-[calc(100%+5px)] z-40 flex flex-col rounded-md border border-widget-border bg-menu shadow-[0_2px_8px_var(--vsc-shadow)]"
            :class="[align === 'right' ? 'right-0' : 'left-0', panelClass]"
        >
            <slot />
        </div>
    </div>
</template>
