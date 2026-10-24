<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ direction: "vertical" | "horizontal" }>();
const emit = defineEmits<{ resize: [delta: number] }>();

const dragging = ref(false);
let last = 0;

function onPointerDown(event: PointerEvent): void {
    dragging.value = true;
    last = props.direction === "vertical" ? event.clientX : event.clientY;
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    event.preventDefault();
}

function onPointerMove(event: PointerEvent): void {
    if (!dragging.value) {
        return;
    }
    const current = props.direction === "vertical" ? event.clientX : event.clientY;
    emit("resize", current - last);
    last = current;
}

function onPointerUp(): void {
    dragging.value = false;
}
</script>

<template>
    <div
        class="relative z-10 shrink-0 bg-border"
        :class="direction === 'vertical' ? 'w-px cursor-ew-resize' : 'h-px cursor-ns-resize'"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
    >
        <!-- Wider invisible hit area, highlighted while hovered or dragged, like VS Code's sashes. -->
        <div
            class="absolute transition-colors delay-150 hover:bg-focus"
            :class="[direction === 'vertical' ? '-inset-x-[2px] inset-y-0' : '-inset-y-[2px] inset-x-0', dragging ? 'bg-focus' : '']"
        />
    </div>
</template>
