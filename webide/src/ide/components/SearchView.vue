<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";

import { confirm } from "../dialogs";
import { openFile } from "../editors";
import { reportError, showInfo } from "../notifications";
import { basename, dirname } from "../paths";
import { fileIcon } from "../quickAccess";
import { replaceAll, runSearch, search } from "../search";

const queryInput = ref<HTMLTextAreaElement | null>(null);
let searchTimer: ReturnType<typeof setTimeout> | undefined;

watch(
    () => [search.query, search.matchCase, search.wholeWord, search.regex],
    () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(runSearch, 250);
    },
);

watch(
    () => search.focusRequest,
    async () => {
        await nextTick();
        queryInput.value?.focus();
        queryInput.value?.select();
    },
);

onMounted(() => {
    queryInput.value?.focus();
});

function toggleCollapsed(path: string): void {
    if (search.collapsed.has(path)) {
        search.collapsed.delete(path);
    } else {
        search.collapsed.add(path);
    }
}

async function onReplaceAll(paths?: string[]): Promise<void> {
    const results = paths ? search.results.filter((result) => paths.includes(result.path)) : search.results;
    const count = results.reduce((total, result) => total + result.matches.length, 0);
    if (count === 0) {
        return;
    }
    const confirmed = await confirm(
        `Replace ${count} occurrence${count === 1 ? "" : "s"} across ${results.length} file${results.length === 1 ? "" : "s"} with '${search.replacement}'?`,
        "The modified files are saved.",
        "Replace",
    );
    if (confirmed) {
        const replaced = await replaceAll(paths);
        showInfo(`Replaced ${replaced} occurrence${replaced === 1 ? "" : "s"} and saved the file${results.length === 1 ? "" : "s"}.`);
    }
}

function onReplaceAllClick(paths?: string[]): void {
    onReplaceAll(paths).catch((error) => reportError(error));
}

function clear(): void {
    search.query = "";
    search.replacement = "";
    runSearch();
}

function onQueryKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        runSearch();
    }
}
</script>

<template>
    <div class="flex min-h-0 flex-col">
        <div class="flex shrink-0 gap-0.5 pr-2 pb-2 pl-1">
            <button class="vsc-toolbar-button mt-[3px] shrink-0" title="Toggle Replace" @click="search.showReplace = !search.showReplace">
                <span class="codicon" :class="search.showReplace ? 'codicon-chevron-down' : 'codicon-chevron-right'" />
            </button>
            <div class="flex min-w-0 flex-1 flex-col gap-1.5">
                <div class="flex items-center border border-input-border bg-input focus-within:border-focus">
                    <textarea
                        ref="queryInput"
                        v-model="search.query"
                        rows="1"
                        class="h-[26px] min-w-0 flex-1 resize-none bg-transparent px-1.5 py-[4px] leading-[18px] text-fg outline-none placeholder:text-placeholder"
                        placeholder="Search"
                        spellcheck="false"
                        @keydown="onQueryKeyDown"
                    />
                    <button class="vsc-toolbar-button mr-0.5 !h-5 !w-5" :class="search.matchCase ? '!bg-accent/40 outline outline-focus' : ''" title="Match Case" @click="search.matchCase = !search.matchCase">
                        <span class="codicon codicon-case-sensitive" />
                    </button>
                    <button class="vsc-toolbar-button mr-0.5 !h-5 !w-5" :class="search.wholeWord ? '!bg-accent/40 outline outline-focus' : ''" title="Match Whole Word" @click="search.wholeWord = !search.wholeWord">
                        <span class="codicon codicon-whole-word" />
                    </button>
                    <button class="vsc-toolbar-button mr-0.5 !h-5 !w-5" :class="search.regex ? '!bg-accent/40 outline outline-focus' : ''" title="Use Regular Expression" @click="search.regex = !search.regex">
                        <span class="codicon codicon-regex" />
                    </button>
                </div>
                <div v-if="search.showReplace" class="flex items-center gap-1">
                    <input v-model="search.replacement" class="vsc-input h-[26px] min-w-0 flex-1" placeholder="Replace" spellcheck="false" />
                    <button class="vsc-toolbar-button shrink-0" title="Replace All" :disabled="search.totalMatches === 0" @click="onReplaceAllClick()">
                        <span class="codicon codicon-replace-all" />
                    </button>
                </div>
            </div>
        </div>

        <div class="flex shrink-0 items-center gap-1 px-5 pb-1 text-fg-muted">
            <span v-if="search.error" class="flex-1 text-error">{{ search.error }}</span>
            <span v-else-if="search.query && search.totalMatches === 0" class="flex-1">No results found.</span>
            <span v-else-if="search.query" class="flex-1">
                {{ search.totalMatches }} result{{ search.totalMatches === 1 ? "" : "s" }} in {{ search.results.length }} file{{ search.results.length === 1 ? "" : "s" }}{{ search.truncated ? " (limit reached)" : "" }}
            </span>
            <span v-else class="flex-1" />
            <button class="vsc-toolbar-button" title="Refresh" @click="runSearch"><span class="codicon codicon-refresh" /></button>
            <button class="vsc-toolbar-button" title="Clear Search Results" @click="clear"><span class="codicon codicon-clear-all" /></button>
        </div>

        <div class="min-h-0 flex-1 overflow-y-auto">
            <template v-for="result in search.results" :key="result.path">
                <div class="group flex h-[22px] cursor-pointer items-center pr-2 pl-2 hover:bg-list-hover" :title="result.path" @click="toggleCollapsed(result.path)">
                    <span class="codicon w-4 shrink-0" :class="search.collapsed.has(result.path) ? 'codicon-chevron-right' : 'codicon-chevron-down'" />
                    <span class="mr-1.5 flex w-4 shrink-0 justify-center">
                        <img v-if="fileIcon(result.path).iconUrl" :src="fileIcon(result.path).iconUrl" alt="" class="h-4 w-4" />
                        <span v-else class="codicon" :class="`codicon-${fileIcon(result.path).icon}`" />
                    </span>
                    <span class="shrink-0">{{ basename(result.path) }}</span>
                    <span class="ml-1.5 min-w-0 flex-1 truncate text-[12px] text-fg-muted">{{ dirname(result.path) }}</span>
                    <button v-if="search.showReplace" class="vsc-toolbar-button hidden group-hover:inline-flex" title="Replace All in File" @click.stop="onReplaceAllClick([result.path])">
                        <span class="codicon codicon-replace-all" />
                    </button>
                    <span class="ml-1 rounded-full bg-badge px-1.5 text-[11px] leading-[18px] text-badge-fg">{{ result.matches.length }}</span>
                </div>
                <template v-if="!search.collapsed.has(result.path)">
                    <div
                        v-for="(match, index) in result.matches"
                        :key="index"
                        class="flex h-[22px] cursor-pointer items-center truncate pr-2 pl-[42px] hover:bg-list-hover"
                        @click="openFile(result.path, { selection: match.range, preview: true, focus: false })"
                        @dblclick="openFile(result.path, { selection: match.range })"
                    >
                        <span class="truncate">
                            <span>{{ match.preview.before }}</span>
                            <span class="bg-match" :class="search.showReplace && search.replacement !== '' ? 'line-through' : ''">{{ match.preview.match }}</span>
                            <span v-if="search.showReplace && search.replacement !== ''" class="bg-[color-mix(in_srgb,#9ccc2c_30%,transparent)]">{{ search.replacement }}</span>
                            <span>{{ match.preview.after }}</span>
                        </span>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
