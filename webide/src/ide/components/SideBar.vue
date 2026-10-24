<script setup lang="ts">
import { layout } from "../layout";
import ExplorerView from "./ExplorerView.vue";
import SearchView from "./SearchView.vue";
</script>

<template>
    <aside class="flex min-h-0 flex-col bg-sidebar">
        <div class="flex h-[35px] shrink-0 items-center pr-2 pl-5 text-[11px] tracking-wide uppercase">
            {{ layout.activeView === "explorer" ? "Explorer" : "Search" }}
        </div>
        <ExplorerView v-if="layout.activeView === 'explorer'" class="min-h-0 flex-1" />
        <SearchView v-else class="min-h-0 flex-1" />
    </aside>
</template>
