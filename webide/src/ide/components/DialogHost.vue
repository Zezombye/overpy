<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

import { dialog } from "../dialogs";

const container = ref<HTMLElement | null>(null);

const icons = {
    info: "codicon-info text-info",
    warning: "codicon-warning text-warning",
    error: "codicon-error text-error",
};

watch(
    () => dialog.current,
    async (current) => {
        if (current) {
            await nextTick();
            container.value?.querySelector<HTMLButtonElement>("[data-primary]")?.focus();
        }
    },
);

function cancel(): void {
    const current = dialog.current;
    current?.resolve(current.cancelId ?? current.buttons.length - 1);
}

function onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        cancel();
    }
}
</script>

<template>
    <div v-if="dialog.current" ref="container" class="fixed inset-0 z-[70] flex items-start justify-center bg-black/30 pt-[15vh]" @keydown="onKeyDown" @mousedown.self="cancel">
        <div class="w-[min(500px,calc(100vw-40px))] rounded-md border border-widget-border bg-widget p-5 shadow-[0_0_8px_2px_var(--vsc-shadow)]" role="dialog" aria-modal="true">
            <div class="flex gap-4">
                <span class="codicon shrink-0 text-[32px]" :class="icons[dialog.current.severity ?? 'info']" />
                <div class="min-w-0 flex-1 select-text">
                    <p class="mb-2 font-semibold break-words text-fg-strong">{{ dialog.current.message }}</p>
                    <p v-if="dialog.current.detail" class="break-words whitespace-pre-wrap text-fg-muted">{{ dialog.current.detail }}</p>
                </div>
            </div>
            <div class="mt-5 flex justify-end gap-2">
                <button
                    v-for="(label, index) in dialog.current.buttons"
                    :key="label"
                    :data-primary="index === 0 ? true : undefined"
                    :class="index === 0 ? 'vsc-button' : 'vsc-button-secondary'"
                    @click="dialog.current!.resolve(index)"
                >
                    {{ label }}
                </button>
            </div>
        </div>
    </div>
</template>
