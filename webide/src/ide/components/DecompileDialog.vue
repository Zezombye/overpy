<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

import { settings } from "../../lib/settings";
import { decompileDialog } from "../dialogs";
import { reportError } from "../notifications";
import { decompileToNewFile } from "../overpy";

const code = ref("");
const fileName = ref("decompiled.opy");
const busy = ref(false);
const textarea = ref<HTMLTextAreaElement | null>(null);

watch(
    () => decompileDialog.visible,
    async (visible) => {
        if (visible) {
            await nextTick();
            textarea.value?.focus();
        }
    },
);

async function pasteFromClipboard(): Promise<void> {
    try {
        code.value = await navigator.clipboard.readText();
    } catch (error) {
        reportError(error, "Could not read the clipboard (paste with Ctrl+V instead)");
    }
}

async function decompile(): Promise<void> {
    busy.value = true;
    try {
        await decompileToNewFile(code.value, fileName.value.trim() || "decompiled.opy");
        decompileDialog.visible = false;
        code.value = "";
    } catch (error) {
        reportError(error);
    } finally {
        busy.value = false;
    }
}

function onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        decompileDialog.visible = false;
    }
}
</script>

<template>
    <div v-if="decompileDialog.visible" class="fixed inset-0 z-[70] flex items-start justify-center bg-black/30 pt-[8vh]" @keydown="onKeyDown">
        <form
            class="flex w-[min(760px,calc(100vw-40px))] flex-col gap-3 rounded-md border border-widget-border bg-widget p-5 shadow-[0_0_8px_2px_var(--vsc-shadow)]"
            @submit.prevent="decompile"
        >
            <div>
                <h2 class="text-[15px] font-semibold text-fg-strong">Decompile (Workshop -> OverPy)</h2>
                <p class="text-fg-muted">
                    Paste the workshop code copied from Overwatch (workshop language: {{ settings["overpy.workshopLanguage"] }}). The result is opened in a new
                    file.
                </p>
            </div>
            <div class="relative">
                <textarea
                    ref="textarea"
                    v-model="code"
                    class="vsc-input h-[45vh] w-full resize-none font-mono text-[12px] whitespace-pre"
                    placeholder="settings { ... } rule (&quot;...&quot;) { ... }"
                    spellcheck="false"
                    wrap="off"
                />
                <button type="button" class="vsc-button-secondary absolute top-2 right-4 !py-0.5" @click="pasteFromClipboard">
                    <span class="codicon codicon-clippy mr-1 align-[-3px]" />Paste
                </button>
            </div>
            <label class="flex items-center gap-2">
                <span class="text-fg-muted">File name</span>
                <input v-model="fileName" class="vsc-input w-[260px]" spellcheck="false" />
            </label>
            <div class="flex justify-end gap-2">
                <button type="submit" class="vsc-button" :disabled="busy || code.trim() === ''">{{ busy ? "Decompiling…" : "Decompile" }}</button>
                <button type="button" class="vsc-button-secondary" @click="decompileDialog.visible = false">Cancel</button>
            </div>
        </form>
    </div>
</template>
