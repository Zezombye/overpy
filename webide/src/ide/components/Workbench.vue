<script setup lang="ts">
import { ref } from "vue";

import { layout } from "../layout";
import ActivityBar from "./ActivityBar.vue";
import ContextMenu from "./ContextMenu.vue";
import DecompileDialog from "./DecompileDialog.vue";
import DialogHost from "./DialogHost.vue";
import EditorArea from "./EditorArea.vue";
import Notifications from "./Notifications.vue";
import PanelArea from "./PanelArea.vue";
import QuickInput from "./QuickInput.vue";
import Sash from "./Sash.vue";
import SideBar from "./SideBar.vue";
import StatusBar from "./StatusBar.vue";
import TitleBar from "./TitleBar.vue";

const mainColumn = ref<HTMLElement | null>(null);

function resizeSideBar(delta: number): void {
    layout.sideBarWidth = Math.min(Math.max(layout.sideBarWidth + delta, 170), Math.max(170, window.innerWidth - 300));
}

function resizePanel(delta: number): void {
    const available = mainColumn.value?.clientHeight ?? window.innerHeight;
    layout.panelHeight = Math.min(Math.max(layout.panelHeight - delta, 80), Math.max(80, available - 80));
}
</script>

<template>
    <div class="flex h-full flex-col overflow-hidden bg-editor text-fg select-none">
        <TitleBar />
        <div class="flex min-h-0 flex-1">
            <ActivityBar />
            <template v-if="layout.sideBarVisible">
                <SideBar class="shrink-0" :style="{ width: `${layout.sideBarWidth}px` }" />
                <Sash direction="vertical" @resize="resizeSideBar" />
            </template>
            <div ref="mainColumn" class="flex min-w-0 flex-1 flex-col">
                <!-- Kept mounted (v-show): it owns the Monaco editor instance. -->
                <EditorArea v-show="!(layout.panelVisible && layout.panelMaximized)" class="min-h-0 flex-1" />
                <template v-if="layout.panelVisible">
                    <Sash v-if="!layout.panelMaximized" direction="horizontal" @resize="resizePanel" />
                    <PanelArea :class="layout.panelMaximized ? 'flex-1' : 'shrink-0'" :style="layout.panelMaximized ? {} : { height: `${layout.panelHeight}px` }" />
                </template>
            </div>
        </div>
        <StatusBar />

        <QuickInput />
        <Notifications />
        <ContextMenu />
        <DialogHost />
        <DecompileDialog />
    </div>
</template>
