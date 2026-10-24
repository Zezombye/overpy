<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

import { contextMenu, hideContextMenu, type MenuItem } from "../contextMenu";
import { reportError } from "../notifications";

const menu = ref<HTMLElement | null>(null);
const position = ref({ x: 0, y: 0 });
const activeIndex = ref(-1);

// Keep the menu inside the viewport.
watch(
    () => [contextMenu.visible, contextMenu.x, contextMenu.y],
    async () => {
        if (!contextMenu.visible) {
            return;
        }
        activeIndex.value = -1;
        position.value = { x: contextMenu.x, y: contextMenu.y };
        await nextTick();
        const rect = menu.value?.getBoundingClientRect();
        if (rect) {
            position.value = {
                x: Math.max(4, Math.min(contextMenu.x, window.innerWidth - rect.width - 4)),
                y: Math.max(4, Math.min(contextMenu.y, window.innerHeight - rect.height - 4)),
            };
        }
        menu.value?.focus();
    },
);

function run(item: MenuItem): void {
    if ("separator" in item || item.disabled) {
        return;
    }
    hideContextMenu();
    Promise.resolve()
        .then(item.run)
        .catch((error) => reportError(error));
}

function selectable(index: number): boolean {
    const item = contextMenu.items[index];
    return item !== undefined && !("separator" in item) && !item.disabled;
}

function onKeyDown(event: KeyboardEvent): void {
    const count = contextMenu.items.length;
    if (event.key === "Escape") {
        hideContextMenu();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        const step = event.key === "ArrowDown" ? 1 : -1;
        let index = activeIndex.value;
        for (let i = 0; i < count; i++) {
            index = (index + step + count) % count;
            if (selectable(index)) {
                activeIndex.value = index;
                break;
            }
        }
    } else if (event.key === "Enter" && activeIndex.value >= 0) {
        run(contextMenu.items[activeIndex.value]);
    } else {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
}

function onPointerDown(event: PointerEvent): void {
    if (contextMenu.visible && !menu.value?.contains(event.target as Node)) {
        hideContextMenu();
    }
}

onMounted(() => {
    document.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("blur", hideContextMenu);
});
onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onPointerDown, true);
    window.removeEventListener("blur", hideContextMenu);
});
</script>

<template>
    <div
        v-if="contextMenu.visible"
        ref="menu"
        tabindex="-1"
        class="fixed z-[60] min-w-[200px] rounded-md border border-widget-border bg-menu py-1 shadow-[0_2px_8px_var(--vsc-shadow)] outline-none"
        :style="{ left: `${position.x}px`, top: `${position.y}px` }"
        @keydown="onKeyDown"
        @contextmenu.prevent
    >
        <template v-for="(item, index) in contextMenu.items" :key="index">
            <div v-if="'separator' in item" class="mx-2.5 my-1 border-t border-widget-border" />
            <button
                v-else
                class="mx-1 flex h-[26px] w-[calc(100%-8px)] items-center rounded-[3px] px-3 text-left"
                :class="item.disabled ? 'cursor-default opacity-50' : index === activeIndex ? 'bg-menu-selection text-accent-fg' : 'hover:bg-menu-selection hover:text-accent-fg'"
                @click="run(item)"
                @mouseenter="activeIndex = index"
            >
                <span class="flex-1 truncate pr-6">{{ item.label }}</span>
                <span v-if="item.keybinding" class="text-xs opacity-70">{{ item.keybinding }}</span>
            </button>
        </template>
    </div>
</template>
