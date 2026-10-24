<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

import { acceptQuickInput, closeQuickInput, quickInput, setQuickInputValue } from "../quickInput";

const input = ref<HTMLInputElement | null>(null);
const list = ref<HTMLElement | null>(null);

const PAGE_SIZE = 15;
let previouslyFocused: HTMLElement | null = null;

watch(
    () => quickInput.generation,
    async () => {
        if (document.activeElement !== input.value) {
            previouslyFocused = document.activeElement as HTMLElement | null;
        }
        await nextTick();
        const element = input.value;
        if (!element) {
            return;
        }
        element.focus();
        const [start, end] = quickInput.valueSelection ?? [quickInput.value.length, quickInput.value.length];
        element.setSelectionRange(start, end);
    },
);

// Like VS Code, give the focus back (e.g. to the editor) when the quick input closes without moving it elsewhere.
watch(
    () => quickInput.visible,
    async (visible) => {
        if (visible) {
            return;
        }
        await nextTick();
        if ((document.activeElement === document.body || document.activeElement === null) && previouslyFocused?.isConnected) {
            previouslyFocused.focus();
        }
        previouslyFocused = null;
    },
);

watch(
    () => quickInput.activeIndex,
    async () => {
        await nextTick();
        list.value?.querySelector(`[data-index="${quickInput.activeIndex}"]`)?.scrollIntoView({ block: "nearest" });
    },
);

function move(offset: number, wrap: boolean): void {
    const count = quickInput.items.length;
    if (count === 0) {
        return;
    }
    let index = quickInput.activeIndex + offset;
    if (wrap) {
        index = (index + count) % count;
    } else {
        index = Math.min(Math.max(index, 0), count - 1);
    }
    quickInput.activeIndex = index;
}

function onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
        case "ArrowDown":
            move(1, true);
            break;
        case "ArrowUp":
            move(-1, true);
            break;
        case "PageDown":
            move(PAGE_SIZE, false);
            break;
        case "PageUp":
            move(-PAGE_SIZE, false);
            break;
        case "Enter":
            acceptQuickInput();
            break;
        case "Escape":
            closeQuickInput();
            break;
        default:
            return;
    }
    event.preventDefault();
    event.stopPropagation();
}

function segments(text: string, highlights: number[]): { text: string; highlighted: boolean }[] {
    if (highlights.length === 0) {
        return [{ text, highlighted: false }];
    }
    const set = new Set(highlights);
    const result: { text: string; highlighted: boolean }[] = [];
    for (let i = 0; i < text.length; i++) {
        const highlighted = set.has(i);
        const last = result[result.length - 1];
        if (last && last.highlighted === highlighted) {
            last.text += text[i];
        } else {
            result.push({ text: text[i], highlighted });
        }
    }
    return result;
}
</script>

<template>
    <div
        v-if="quickInput.visible"
        class="fixed top-[42px] left-1/2 z-50 w-[min(600px,calc(100vw-40px))] -translate-x-1/2 overflow-hidden rounded-md border border-widget-border bg-widget p-1.5 shadow-[0_0_8px_2px_var(--vsc-shadow)]"
    >
        <div v-if="quickInput.title" class="mb-1.5 text-center text-fg-muted">{{ quickInput.title }}</div>
        <div class="flex items-center gap-1">
            <input
                ref="input"
                :value="quickInput.value"
                class="vsc-input h-[26px] min-w-0 flex-1 !border-focus"
                :type="quickInput.password ? 'password' : 'text'"
                :placeholder="quickInput.placeholder"
                spellcheck="false"
                autocomplete="off"
                @input="setQuickInputValue(($event.target as HTMLInputElement).value)"
                @keydown="onKeyDown"
                @blur="closeQuickInput"
            />
            <span v-if="quickInput.busy" class="codicon codicon-loading codicon-modifier-spin shrink-0" />
        </div>

        <template v-if="quickInput.kind === 'input'">
            <p v-if="quickInput.validationMessage" class="mt-1.5 border border-error bg-error-bg px-2 py-1">{{ quickInput.validationMessage }}</p>
            <p v-else-if="quickInput.prompt" class="mt-1.5 px-1 text-fg-muted">{{ quickInput.prompt }} (Press 'Enter' to confirm or 'Escape' to cancel)</p>
            <p v-else class="mt-1.5 px-1 text-fg-muted">Press 'Enter' to confirm or 'Escape' to cancel</p>
        </template>

        <div v-else ref="list" class="mt-1.5 max-h-[440px] overflow-y-auto" @mousedown.prevent>
            <p v-if="quickInput.items.length === 0 && !quickInput.busy" class="px-2.5 py-1 text-fg-muted">No matching results</p>
            <template v-for="(shown, index) in quickInput.items" :key="index">
                <div v-if="shown.item.separator !== undefined && index > 0" class="mx-1 mt-1 border-t border-widget-border" />
                <div
                    :data-index="index"
                    class="flex cursor-pointer items-center gap-1.5 rounded-[3px] px-2.5"
                    :class="[shown.item.detail ? 'h-[40px]' : 'h-[22px]', index === quickInput.activeIndex ? 'bg-list-active text-fg-strong' : 'hover:bg-list-hover']"
                    @click="acceptQuickInput(index)"
                    @mousemove="quickInput.activeIndex = index"
                >
                    <img v-if="shown.item.iconUrl" :src="shown.item.iconUrl" alt="" class="h-4 w-4 shrink-0" />
                    <span v-else-if="shown.item.icon" class="codicon shrink-0" :class="`codicon-${shown.item.icon}`" />
                    <span class="flex min-w-0 flex-1 flex-col">
                        <span class="flex min-w-0 items-baseline gap-1.5">
                            <span class="shrink-0 whitespace-pre">
                                <span
                                    v-for="(segment, segmentIndex) in segments(shown.item.label, shown.labelHighlights)"
                                    :key="segmentIndex"
                                    :class="segment.highlighted ? 'font-bold text-link' : ''"
                                    >{{ segment.text }}</span
                                >
                            </span>
                            <span v-if="shown.item.description" class="truncate text-[12px] text-fg-muted">
                                <span
                                    v-for="(segment, segmentIndex) in segments(shown.item.description, shown.descriptionHighlights)"
                                    :key="segmentIndex"
                                    :class="segment.highlighted ? 'font-bold text-link' : ''"
                                    >{{ segment.text }}</span
                                >
                            </span>
                        </span>
                        <span v-if="shown.item.detail" class="truncate text-[12px] text-fg-muted">{{ shown.item.detail }}</span>
                    </span>
                    <span v-if="shown.item.separator" class="shrink-0 text-[12px] text-fg-muted">{{ shown.item.separator }}</span>
                    <kbd v-if="shown.item.keybinding" class="shrink-0 rounded-[3px] border border-widget-border px-1 text-[11px] text-fg-muted">{{ shown.item.keybinding }}</kbd>
                </div>
            </template>
        </div>
    </div>
</template>
